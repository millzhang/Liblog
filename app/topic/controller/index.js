'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}


  /**
                                                                                                                                                                                                                                                                                                                                                                                                     * index action
                                                                                                                                                                                                                                                                                                                                                                                                     * @return {Promise} []
                                                                                                                                                                                                                                                                                                                                                                                                     */_class.prototype.
  indexAction = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {var tab, map, menu, pagenumber, pagesize, itemList, result, Page, page, pageData, tablist;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              tab = this.get("tab");
              this.assign("title", "社区");
              map = void 0, menu = void 0;
              if (tab === 'all' || tab === '') {
                map = { show: 1 };
                menu = "all";
              } else {
                map = { item: tab, show: 1 };
                menu = tab;
              }
              //  let topicList=await this.model('topic').getTopicListJoinRecord(map);
              pagenumber = this.get("page") || 1;
              pagesize = this.get("pagesize") || 20;
              //分页
              _context.next = 8;return this.model("topic").getPageSelect(map, pagenumber, pagesize);case 8:itemList = _context.sent;_context.next = 11;return (
                this.model("topic").getPageCountSelect(map, pagenumber, pagesize));case 11:result = _context.sent;
              Page = think.adapter("template", "page");
              page = new Page(this.http);
              pageData = page.pagination(result);

              this.assign("itemList", itemList);
              this.assign('pageData', pageData);
              this.assign('menu', "topic/" + menu);
              //分页
              //  tab列表
              _context.next = 20;return this.model("topic").findAll("topic_item");case 20:tablist = _context.sent;
              this.assign("tablist", tablist);
              //  tab列表
              this.assign("tab", tab);return _context.abrupt('return',
              this.displayView("index_index"));case 24:case 'end':return _context.stop();}}}, _callee, this);}));function indexAction() {return _ref.apply(this, arguments);}return indexAction;}();_class.prototype.


  itemAction = function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {var tid, uinfo, islogin, loginuserinfo, collectList, replyList, topicInfo, topicItem, viewcount;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                this.get("tid"));case 2:tid = _context2.sent;_context2.next = 5;return (
                this.session('uInfo'));case 5:uinfo = _context2.sent;
              islogin = !think.isEmpty(uinfo) ? 1 : 0;
              this.assign("islogin", islogin);if (
              think.isEmpty(uinfo)) {_context2.next = 19;break;}_context2.next = 11;return (
                this.model('topic').findAll('user', { name: uinfo.name }));case 11:loginuserinfo = _context2.sent;
              this.assign("loginuserinfo", loginuserinfo[0]);
              //获取收藏信息
              _context2.next = 15;return this.model('topic').findAll('user_collect', { aid: tid, type: 'topic', author: uinfo.name, iscollect: 1 });case 15:collectList = _context2.sent;
              if (collectList.length > 0) {
                this.assign("cid", collectList[0].id);
                this.assign("iscollect", 1);
              } else {
                this.assign("cid", "");
                this.assign("iscollect", 0);
              }_context2.next = 20;break;case 19:

              this.assign("loginuserinfo", {});case 20:_context2.next = 22;return (



                this.model("topic").getReplyListInfo({ tid: tid }));case 22:replyList = _context2.sent;
              this.assign("replyList", replyList);_context2.next = 26;return (

                this.model("topic").findOne("topic", { id: tid }));case 26:topicInfo = _context2.sent;if (
              think.isEmpty(topicInfo)) {_context2.next = 40;break;}_context2.next = 30;return (
                this.model("topic").findOne("topic_item", { name: topicInfo.item }));case 30:topicItem = _context2.sent;_context2.next = 33;return (
                this.model("topic").where({ id: tid }).increment('view', 1));case 33:viewcount = _context2.sent;
              this.assign('topicInfo', topicInfo);
              this.assign("replycount", topicInfo.replycount);
              this.assign('topicItem', topicItem.comment);return _context2.abrupt('return',
              this.displayView("index_item"));case 40:return _context2.abrupt('return',


              this.displayView("../common/error_404"));case 41:case 'end':return _context2.stop();}}}, _callee2, this);}));function itemAction() {return _ref2.apply(this, arguments);}return itemAction;}();_class.prototype.



  editAction = function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {var tid, replyInfo, topicInfo;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                this.get("tid"));case 2:tid = _context3.sent;_context3.next = 5;return (
                this.model("topic").findOne("topic_comment", { id: tid }));case 5:replyInfo = _context3.sent;_context3.next = 8;return (
                this.model("topic").findOne("topic", { id: replyInfo.tid }));case 8:topicInfo = _context3.sent;
              this.assign("title", "回复编辑");
              this.assign("replyInfo", replyInfo);
              this.assign("topicInfo", topicInfo);return _context3.abrupt('return',
              this.displayView("index_edit"));case 13:case 'end':return _context3.stop();}}}, _callee3, this);}));function editAction() {return _ref3.apply(this, arguments);}return editAction;}();return _class;}(_base2.default);exports.default = _class;
'use strict';exports.__esModule = true;var _regenerator = require("babel-runtime/regenerator");var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);







var _base = require("./base.js");var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var init = { mydb: "user", title: "用户管理", edit: "用户编辑", add: "用户添加", action: "user" };var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}

  /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * index action
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @return {Promise} []
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */_class.prototype.

  indexAction = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {var info, itemList, result, Page, page, pageData;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              info = {
                db: init.mydb,
                page: this.get("page") || 1,
                pagesize: this.get("pagesize") || 10 };_context.next = 3;return (

                this.model('admin').getUserListJoinRecord({}, info.page, info.pagesize));case 3:itemList = _context.sent;_context.next = 6;return (
                this.model(info.db).page(info.page, info.pagesize).countSelect());case 6:result = _context.sent;
              Page = think.adapter("template", "page");
              page = new Page();
              pageData = page.pagination(result, info.page);
              this.assign("itemList", itemList);
              this.assign('pageData', pageData);
              this.assign("title", init.title);
              this.assign("action", init.action);return _context.abrupt("return",
              this.display());case 15:case "end":return _context.stop();}}}, _callee, this);}));function indexAction() {return _ref.apply(this, arguments);}return indexAction;}();_class.prototype.

  adminlistAction = function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {var info, map, itemList, result, Page, page, pageData;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
              info = {
                db: init.mydb,
                page: this.get("page") || 1,
                pagesize: this.get("pagesize") || 10 };

              map = { 'li_user.role': { '>': 0 } };_context2.next = 4;return (
                this.model('admin').getUserListJoinRecord(map, info.page, info.pagesize));case 4:itemList = _context2.sent;_context2.next = 7;return (
                this.model(info.db).page(info.page, info.pagesize).where(map).countSelect());case 7:result = _context2.sent;
              Page = think.adapter("template", "page");
              page = new Page();
              pageData = page.pagination(result, info.page);
              this.assign("itemList", itemList);
              this.assign('pageData', pageData);
              this.assign("title", init.title);
              this.assign("action", init.action);return _context2.abrupt("return",
              this.display('index'));case 16:case "end":return _context2.stop();}}}, _callee2, this);}));function adminlistAction() {return _ref2.apply(this, arguments);}return adminlistAction;}();_class.prototype.

  itemAction = function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {var info, mydata, roleList;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:

              info = {
                db: init.mydb,
                edit: init.edit,
                add: init.add,
                id: this.get('id') };_context3.next = 3;return (

                this.model('util').getItem(info));case 3:mydata = _context3.sent;_context3.next = 6;return (
                this.model('admin').findAll('manage_role'));case 6:roleList = _context3.sent;
              this.assign("roleList", roleList);
              this.assign("title", mydata.title);
              this.assign('item', mydata.item);
              this.assign("action", init.action);return _context3.abrupt("return",
              this.display());case 12:case "end":return _context3.stop();}}}, _callee3, this);}));function itemAction() {return _ref3.apply(this, arguments);}return itemAction;}();


  //编辑或者新增接口
  _class.prototype.saveAction = function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {var newData, info, mydata;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
              newData = this.post();
              newData.password = think.md5(newData.password);
              info = {
                db: init.mydb,
                data: newData,
                id: this.post('id') };_context4.next = 5;return (

                this.model('util').doSave(info));case 5:mydata = _context4.sent;if (!(
              mydata.status === 1)) {_context4.next = 8;break;}return _context4.abrupt("return", this.success());case 8:case "end":return _context4.stop();}}}, _callee4, this);}));function saveAction() {return _ref4.apply(this, arguments);}return saveAction;}();


  //删除或批量删除接口
  _class.prototype.delsomeAction = function () {var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {var info, where, rs;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
              info = {
                db: init.mydb,
                arr: this.post('delarr[]') };

              where = { id: ["IN", info.arr] };_context5.next = 4;return (
                this.model("admin").deleteRecord(info.db, where));case 4:rs = _context5.sent;if (!
              rs) {_context5.next = 7;break;}return _context5.abrupt("return", this.success());case 7:case "end":return _context5.stop();}}}, _callee5, this);}));function delsomeAction() {return _ref5.apply(this, arguments);}return delsomeAction;}();return _class;}(_base2.default);exports.default = _class;
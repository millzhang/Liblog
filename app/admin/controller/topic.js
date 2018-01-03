'use strict';exports.__esModule = true;var _regenerator = require("babel-runtime/regenerator");var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);







var _base = require("./base.js");var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var init = { mydb: "topic", title: "社区管理", edit: "", add: "", action: "topic" };var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}

    /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * index action
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @return {Promise} []
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */_class.prototype.

    indexAction = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {var info, topicList, result, Page, page, pageData;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                            info = {
                                db: init.mydb,
                                page: this.get("page") || 1,
                                pagesize: this.get("pagesize") || 10 };_context.next = 3;return (

                                this.model('admin').getTopicListJoinRecord(info.page, info.pagesize));case 3:topicList = _context.sent;_context.next = 6;return (
                                this.model(info.db).page(info.page, info.pagesize).countSelect());case 6:result = _context.sent;
                            Page = think.adapter("template", "page");
                            page = new Page();
                            pageData = page.pagination(result, info.page);
                            this.assign("topicList", topicList);
                            this.assign('pageData', pageData);
                            this.assign("title", init.title);
                            this.assign("action", init.action);
                            this.assign("info", info);return _context.abrupt("return",
                            this.display());case 16:case "end":return _context.stop();}}}, _callee, this);}));function indexAction() {return _ref.apply(this, arguments);}return indexAction;}();


    //更新接口
    _class.prototype.updateAction = function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {var newData, rs;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                            newData = this.post();
                            rs = this.model("topic").where({ id: this.post("id") }).update(newData);if (!
                            rs) {_context2.next = 4;break;}return _context2.abrupt("return", this.success());case 4:case "end":return _context2.stop();}}}, _callee2, this);}));function updateAction() {return _ref2.apply(this, arguments);}return updateAction;}();


    //删除或批量删除接口
    _class.prototype.delsomeAction = function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {var info, where, rs;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                            info = {
                                db: init.mydb,
                                arr: this.post('delarr[]') };

                            where = { id: ["IN", info.arr] };_context3.next = 4;return (
                                this.model("admin").deleteRecord(info.db, where));case 4:rs = _context3.sent;if (!
                            rs) {_context3.next = 7;break;}return _context3.abrupt("return", this.success());case 7:case "end":return _context3.stop();}}}, _callee3, this);}));function delsomeAction() {return _ref3.apply(this, arguments);}return delsomeAction;}();return _class;}(_base2.default);exports.default = _class;
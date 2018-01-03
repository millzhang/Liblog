'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}

      /**
                                                                                                                                                                                                                                                                                                                                                                                                     * index action
                                                                                                                                                                                                                                                                                                                                                                                                     * @return {Promise} []
                                                                                                                                                                                                                                                                                                                                                                                                     */_class.prototype.
      indexAction = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {var uinfo, userInfo;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                                          this.assign("title", "后台管理");_context.next = 3;return (
                                                this.session('userInfo'));case 3:uinfo = _context.sent;_context.next = 6;return (
                                                this.model('admin').getUserJoinRecord({ manage_role: { on: "role,id" } }, { name: uinfo.name }));case 6:userInfo = _context.sent;
                                          this.assign("roleName", userInfo.rolename);
                                          this.assign("loginName", uinfo.name);return _context.abrupt('return',
                                          this.display());case 10:case 'end':return _context.stop();}}}, _callee, this);}));function indexAction() {return _ref.apply(this, arguments);}return indexAction;}();_class.prototype.

      logoutAction = function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                                                this.session("userInfo", ""));case 2:return _context2.abrupt('return',
                                          this.redirect("/admin/login"));case 3:case 'end':return _context2.stop();}}}, _callee2, this);}));function logoutAction() {return _ref2.apply(this, arguments);}return logoutAction;}();_class.prototype.

      welcomeAction = function welcomeAction() {
            this.assign("title", "欢迎登录！");
            return this.display();
      };return _class;}(_base2.default);exports.default = _class;
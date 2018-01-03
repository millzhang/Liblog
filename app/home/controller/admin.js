'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}


      /**
                                                                                                                                                                                                                                                                                                                                                                                                     * index action
                                                                                                                                                                                                                                                                                                                                                                                                     * @return {Promise} []
                                                                                                                                                                                                                                                                                                                                                                                                     */_class.prototype.
      loginAction = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:

                                          this.assign("title", "管理员登录");return _context.abrupt('return',
                                          this.displayView('admin_login'));case 2:case 'end':return _context.stop();}}}, _callee, this);}));function loginAction() {return _ref.apply(this, arguments);}return loginAction;}();_class.prototype.

      redirectAction = function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:return _context2.abrupt('return',
                                          this.displayView('admin_redirect'));case 1:case 'end':return _context2.stop();}}}, _callee2, this);}));function redirectAction() {return _ref2.apply(this, arguments);}return redirectAction;}();_class.prototype.

      dologinAction = function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {var data, md5Pas, uname, result, info;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                                          data = this.post();_context3.next = 3;return (
                                                think.md5(data.password));case 3:md5Pas = _context3.sent;_context3.next = 6;return (
                                                data.username);case 6:uname = _context3.sent;_context3.next = 9;return (
                                                this.model("home").findOne("user", { name: uname, role: { "<": 4 } }));case 9:result = _context3.sent;
                                          info = {
                                                name: uname,
                                                password: md5Pas };if (!(

                                          uname === result.name && md5Pas === result.password)) {_context3.next = 17;break;}_context3.next = 14;return (
                                                this.session("userInfo", info));case 14:return _context3.abrupt('return',
                                          this.json({ status: 1, msg: "登录成功!" }));case 17:return _context3.abrupt('return',

                                          this.json({ status: 0, msg: "用户名或密码错误!" }));case 18:case 'end':return _context3.stop();}}}, _callee3, this);}));function dologinAction() {return _ref3.apply(this, arguments);}return dologinAction;}();return _class;}(_base2.default);exports.default = _class;
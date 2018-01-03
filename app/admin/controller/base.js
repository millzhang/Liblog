'use strict';exports.__esModule = true;var _regenerator = require("babel-runtime/regenerator");var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_think$controller$bas) {(0, _inherits3.default)(_class, _think$controller$bas);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _think$controller$bas.apply(this, arguments));}


    /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * some base method in here
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         */_class.prototype.
    __before = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {var userinfo, myurl, uinfo, username, userData, roleData, permissions, csrf;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                                this.getConfig());case 2:_context.next = 4;return (

                                this.session("userInfo"));case 4:userinfo = _context.sent;if (!
                            think.isEmpty(userinfo)) {_context.next = 9;break;}return _context.abrupt("return",
                            this.redirect("/admin/redirect"));case 9:

                            this.assign('userinfo', userinfo);case 10:

                            //判断登录

                            //判断权限
                            myurl = this.http.module + "/" + this.http.controller + "/" + this.http.action;_context.next = 13;return (
                                this.session('userInfo'));case 13:uinfo = _context.sent;
                            username = uinfo.name;_context.next = 17;return (
                                this.model('admin').findOne('user', { name: username }));case 17:userData = _context.sent;_context.next = 20;return (
                                this.model('admin').findOne('manage_role', { id: userData.role }));case 20:roleData = _context.sent;
                            permissions = roleData.permission.split(",");

                            //没有权限
                            if (!(permissions.indexOf(myurl) < 0)) {_context.next = 28;break;}if (!(
                            this.http.method === 'POST')) {_context.next = 27;break;}return _context.abrupt("return",
                            this.fail("抱歉，您没有权限访问,请与系统管理员联系!"));case 27:return _context.abrupt("return",

                            this.display("admin/error/nopermission"));case 28:_context.next = 30;return (





                                this.session("__CSRF__"));case 30:csrf = _context.sent;
                            this.assign("csrf", csrf);case 32:case "end":return _context.stop();}}}, _callee, this);}));function __before() {return _ref.apply(this, arguments);}return __before;}();_class.prototype.


    getConfig = function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {var sysdata;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                                this.model('admin').findOne('system'));case 2:sysdata = _context2.sent;
                            this.assign('_web', sysdata);case 4:case "end":return _context2.stop();}}}, _callee2, this);}));function getConfig() {return _ref2.apply(this, arguments);}return getConfig;}();return _class;}(think.controller.base);exports.default = _class;
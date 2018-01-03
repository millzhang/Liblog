'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);
var _request = require('request');var _request2 = _interopRequireDefault(_request);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_think$controller$bas) {(0, _inherits3.default)(_class, _think$controller$bas);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _think$controller$bas.apply(this, arguments));}

        /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                            * some base method in here
                                                                                                                                                                                                                                                                                                                                                                                                                                                            */_class.prototype.
        __before = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {var _web, csrf, uinfo, islogin, logininfo, tagList, navList, linksList;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (


                                                                this.getConfig());case 2:_web = _context.sent;
                                                        this.assign('_web', _web);

                                                        //设置CSRF值
                                                        _context.next = 6;return this.session("__CSRF__");case 6:csrf = _context.sent;
                                                        this.assign("csrf", csrf);

                                                        // 是否登录
                                                        _context.next = 10;return this.session('uInfo');case 10:uinfo = _context.sent;
                                                        islogin = !think.isEmpty(uinfo) ? 1 : 0;
                                                        this.assign("islogin", islogin);if (
                                                        think.isEmpty(uinfo)) {_context.next = 18;break;}_context.next = 16;return (
                                                                this.model('doc').findAll('user', { name: uinfo.name }));case 16:logininfo = _context.sent;
                                                        //自己的个人中心基本信息
                                                        this.assign("logininfo", logininfo[0]);case 18:_context.next = 20;return (




                                                                this.model("doc").getOrderList("tags", { appear: 1 }));case 20:tagList = _context.sent;
                                                        this.assign('tagList', tagList);

                                                        //获取导航链接
                                                        _context.next = 24;return this.model("doc").getOrderList('menu', { appear: 1 });case 24:navList = _context.sent;
                                                        this.assign("navList", navList);

                                                        //获取友情链接
                                                        _context.next = 28;return this.model("doc").getOrderList("links", { flag: 1 });case 28:linksList = _context.sent;
                                                        this.assign("linksList", linksList);

                                                        // 设置主题地址
                                                        this.THEME_VIEW_PATH = '' + think.THEME_PATH + think.sep + _web.theme + think.sep + think.Modules_Src + think.sep + this.http.module + think.sep;
                                                        this.assign("theme_url", 'static/theme/' + _web.theme + '/res');case 32:case 'end':return _context.stop();}}}, _callee, this);}));function __before() {return _ref.apply(this, arguments);}return __before;}();_class.prototype.


        getConfig = function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {var sysdata;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                                                                this.model('doc').findOne('system', { id: 1 }));case 2:sysdata = _context2.sent;
                                                        this.assign('_web', sysdata);return _context2.abrupt('return',
                                                        sysdata);case 5:case 'end':return _context2.stop();}}}, _callee2, this);}));function getConfig() {return _ref2.apply(this, arguments);}return getConfig;}();


        // 渲染主题view层
        _class.prototype.displayView = function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(name) {return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:return _context3.abrupt('return',
                                                        this.display(this.THEME_VIEW_PATH + name + '.html'));case 1:case 'end':return _context3.stop();}}}, _callee3, this);}));function displayView(_x) {return _ref3.apply(this, arguments);}return displayView;}();return _class;}(think.controller.base);exports.default = _class;
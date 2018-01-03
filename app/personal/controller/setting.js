'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}

  /**
                                                                                                                                                                                                                                                                                                                                                                                                     * index action
                                                                                                                                                                                                                                                                                                                                                                                                     * @return {Promise} []
                                                                                                                                                                                                                                                                                                                                                                                                     */
  //页面初始化数据
  _class.prototype.initPage = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(page) {var uinfo, userinfo;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                this.session('uInfo'));case 2:uinfo = _context.sent;if (
              think.isEmpty(uinfo)) {_context.next = 15;break;}if (!
              uinfo.name) {_context.next = 12;break;}_context.next = 7;return (
                this.model('personal').findUser({ name: uinfo.name }));case 7:userinfo = _context.sent;
              this.assign("userinfo", userinfo[0]);return _context.abrupt('return',
              this.displayView("setting_" + page));case 12:return _context.abrupt('return',

              this.displayView("../common/error_404"));case 13:_context.next = 16;break;case 15:return _context.abrupt('return',


              this.redirect('/login.html'));case 16:case 'end':return _context.stop();}}}, _callee, this);}));function initPage(_x) {return _ref.apply(this, arguments);}return initPage;}();


  //检查是否存在
  _class.prototype.checkIsExist = function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(where) {var rs, s;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                this.model('personal').findUser(where));case 2:rs = _context2.sent;
              s = rs.length > 0 ? 0 : 1;return _context2.abrupt('return',
              s);case 5:case 'end':return _context2.stop();}}}, _callee2, this);}));function checkIsExist(_x2) {return _ref2.apply(this, arguments);}return checkIsExist;}();

  // 基础信息设置
  _class.prototype.indexAction = function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
              this.assign("title", "基本信息设置");
              this.initPage("index");case 2:case 'end':return _context3.stop();}}}, _callee3, this);}));function indexAction() {return _ref3.apply(this, arguments);}return indexAction;}();

  // 保存基础信息
  _class.prototype.savebaseAction = function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {var uinfo, newData, name, nickname, email, sign, userinfo, userFlag, emailFlag, rs;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (
                this.session('uInfo'));case 2:uinfo = _context4.sent;
              newData = this.post();
              name = newData.name;
              nickname = newData.nickname;
              email = newData.email;
              sign = newData.sign;_context4.next = 10;return (
                this.model("personal").findOne('user', { name: uinfo.name }));case 10:userinfo = _context4.sent;
              console.log(userinfo);if (!(

              name !== '' && nickname !== '' && email !== '' && sign !== '')) {_context4.next = 36;break;}if (!(
              userinfo.email === email && userinfo.nickname === nickname && userinfo.sign === sign)) {_context4.next = 17;break;}return _context4.abrupt('return',

              this.json({ status: 0, errno: 1, errmsg: '请填写要提交的修改信息！' }));case 17:_context4.next = 19;return (

                this.checkIsExist({ name: name }));case 19:userFlag = _context4.sent;_context4.next = 22;return (
                this.checkIsExist({ email: email }));case 22:emailFlag = _context4.sent;if (!(
              userFlag === 0 && uinfo.name !== name)) {_context4.next = 27;break;}return _context4.abrupt('return',
              this.json({ status: 0, errno: 1, errmsg: '该用户名已存在！' }));case 27:if (!(
              emailFlag === 0 && userinfo.email !== email)) {_context4.next = 31;break;}return _context4.abrupt('return',
              this.json({ status: 0, errno: 1, errmsg: '该邮箱已存在！' }));case 31:_context4.next = 33;return (

                this.model('personal').saveUserInfo(newData, { name: newData.name }));case 33:rs = _context4.sent;if (!
              rs) {_context4.next = 36;break;}return _context4.abrupt('return', this.success());case 36:case 'end':return _context4.stop();}}}, _callee4, this);}));function savebaseAction() {return _ref4.apply(this, arguments);}return savebaseAction;}();




  // 重置密码
  _class.prototype.resetpwdAction = function () {var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {var uinfo, newData, oldpassword, password, userinfo, rs;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
                this.session('uInfo'));case 2:uinfo = _context5.sent;
              newData = this.post();
              newData.password = think.md5(newData.password);
              newData.way = 'site';
              oldpassword = think.md5(newData.oldpassword);
              password = newData.password;if (!(

              oldpassword !== '')) {_context5.next = 20;break;}_context5.next = 11;return (

                this.model('personal').findUser({ name: uinfo.name }));case 11:userinfo = _context5.sent;if (!(
              oldpassword !== userinfo[0].password)) {_context5.next = 14;break;}return _context5.abrupt('return',
              this.json({ status: 0, errno: 1, errmsg: '原始密码不正确！' }));case 14:if (!(

              password !== '')) {_context5.next = 20;break;}_context5.next = 17;return (
                this.model('personal').saveUserInfo(newData, { name: uinfo.name }));case 17:rs = _context5.sent;if (!
              rs) {_context5.next = 20;break;}return _context5.abrupt('return', this.success());case 20:case 'end':return _context5.stop();}}}, _callee5, this);}));function resetpwdAction() {return _ref5.apply(this, arguments);}return resetpwdAction;}();



  // 重置头像
  _class.prototype.resetpicAction = function () {var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {var uinfo, newData, pic, rs;return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_context6.next = 2;return (
                this.session('uInfo'));case 2:uinfo = _context6.sent;
              newData = this.post();
              pic = newData.pic;if (!(

              pic !== '')) {_context6.next = 11;break;}_context6.next = 8;return (
                this.model('personal').saveUserInfo(newData, { name: uinfo.name }));case 8:rs = _context6.sent;if (!
              rs) {_context6.next = 11;break;}return _context6.abrupt('return', this.success());case 11:case 'end':return _context6.stop();}}}, _callee6, this);}));function resetpicAction() {return _ref6.apply(this, arguments);}return resetpicAction;}();


  //校验邮箱是否存在
  _class.prototype.checkemailAction = function () {var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {var email, rs;return _regenerator2.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:_context7.next = 2;return (
                this.post('email'));case 2:email = _context7.sent;_context7.next = 5;return (
                this.model('personal').findAll('user', { 'email': email }));case 5:rs = _context7.sent;if (!(
              rs.length > 0)) {_context7.next = 10;break;}return _context7.abrupt('return',
              this.json({ status: 0, errno: 1, errmsg: '该邮箱已存在！' }));case 10:return _context7.abrupt('return',

              this.json({ status: 1, errno: 0, errmsg: '该邮箱可用！' }));case 11:case 'end':return _context7.stop();}}}, _callee7, this);}));function checkemailAction() {return _ref7.apply(this, arguments);}return checkemailAction;}();_class.prototype.


  passwordAction = function () {var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {return _regenerator2.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:
              this.assign("title", "修改密码");
              this.initPage("password");case 2:case 'end':return _context8.stop();}}}, _callee8, this);}));function passwordAction() {return _ref8.apply(this, arguments);}return passwordAction;}();_class.prototype.

  picAction = function () {var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {return _regenerator2.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:
              this.assign("title", "头像修改");
              this.initPage("pic");case 2:case 'end':return _context9.stop();}}}, _callee9, this);}));function picAction() {return _ref9.apply(this, arguments);}return picAction;}();return _class;}(_base2.default);exports.default = _class;
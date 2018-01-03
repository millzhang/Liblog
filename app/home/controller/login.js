'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);
var _request = require('request');var _request2 = _interopRequireDefault(_request);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}


  //用户登录
  _class.prototype.indexAction = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {var uinfo;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                this.session('uInfo'));case 2:uinfo = _context.sent;if (
              think.isEmpty(uinfo)) {_context.next = 7;break;}return _context.abrupt('return',
              this.redirect('/personal/@' + uinfo.name));case 7:

              this.assign("title", "用户登录");return _context.abrupt('return',
              this.displayView("login_index"));case 9:case 'end':return _context.stop();}}}, _callee, this);}));function indexAction() {return _ref.apply(this, arguments);}return indexAction;}();_class.prototype.



  dologinAction = function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {var data, code, sysCode, md5Pas, email, result, Geetest, geetest, res, uInfo;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
              data = this.post();
              code = data.code;_context2.next = 4;return (
                this.session('code'));case 4:sysCode = _context2.sent;_context2.next = 7;return (


                think.md5(data.password));case 7:md5Pas = _context2.sent;_context2.next = 10;return (
                data.email);case 10:email = _context2.sent;_context2.next = 13;return (
                this.model('home').findOne('user', { email: email }));case 13:result = _context2.sent;if (!(
              email === result.email && md5Pas === result.password)) {_context2.next = 30;break;}

              Geetest = think.service("geetest"); //加载 commoon 模块下的 geetset service
              geetest = new Geetest();_context2.next = 19;return (
                geetest.validate(this.post()));case 19:res = _context2.sent;if (!(
              "success" != res.status)) {_context2.next = 24;break;}return _context2.abrupt('return',
              this.json({ status: 0, errno: 2, errmsg: "验证码错误!" }));case 24:

              uInfo = {
                email: email,
                pic: result.pic,
                name: result.name,
                nickname: result.nickname,
                openid: '',
                way: 'site' };_context2.next = 27;return (

                this.session("uInfo", uInfo));case 27:return _context2.abrupt('return',
              this.json({ status: 1, errno: 0, uname: result.name, errmsg: "登录成功!" }));case 28:_context2.next = 31;break;case 30:return _context2.abrupt('return',


              this.json({ status: 0, errno: 1, errmsg: "用户名或密码错误!" }));case 31:case 'end':return _context2.stop();}}}, _callee2, this);}));function dologinAction() {return _ref2.apply(this, arguments);}return dologinAction;}();_class.prototype.



  githubAction = function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {var self, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, code, formData;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
              self = this;
              GITHUB_CLIENT_ID = "776342f65de13d9b3df4",
              GITHUB_CLIENT_SECRET = "080784f5209b1dc0d934e66eeab8013c4e68735c";_context3.next = 4;return (

                this.get('code'));case 4:code = _context3.sent;
              formData = {
                client_id: GITHUB_CLIENT_ID,
                client_secret: GITHUB_CLIENT_SECRET,
                code: code };


              _request2.default.post({
                url: 'https://github.com/login/oauth/access_token',
                form: formData,
                headers: { Accept: 'application/json' } },
              function (err, res1, body) {

                var access_token = JSON.parse(body).access_token;
                var headers2 = {
                  'User-Agent': 'Awesome-Octocat-App' };

                _request2.default.get({
                  url: 'https://api.github.com/user',
                  qs: { access_token: access_token },
                  headers: headers2 },
                function (err, res2, body) {
                  var info = JSON.parse(body);
                  var uInfo = {
                    email: info.email,
                    pic: '',
                    name: '',
                    nickname: info.login,
                    openid: info.id,
                    way: 'github' };

                  self.session("uInfo", uInfo);
                  self.redirect("/login/complete");
                });
              });case 7:case 'end':return _context3.stop();}}}, _callee3, this);}));function githubAction() {return _ref3.apply(this, arguments);}return githubAction;}();_class.prototype.

  qqloginAction = function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {var self, QQ_CLIENT_ID, QQ_CLIENT_SECRET, REDIRECT_URI, QQ_grant_type, code, qs;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
              self = this;

              QQ_CLIENT_ID = "101334443";
              QQ_CLIENT_SECRET = "ace474e949764ac84a9faeb8f99ae4c6";
              REDIRECT_URI = "http://www.jsout.com/login/qqlogin";
              QQ_grant_type = "authorization_code";
              //注意:回填地址, 因为QQ不允许像github一样填http://127.0.0.1:3000的开发者模式,
              // https://graph.qq.com/oauth2.0/authorize?redirect_uri=' + REDIRECT_URI + '&response_type=code&client_id=' + QQ_CLIENT_ID
              _context4.next = 7;return (
                this.get('code'));case 7:code = _context4.sent;
              qs = {
                grant_type: 'authorization_code',
                client_id: QQ_CLIENT_ID,
                client_secret: QQ_CLIENT_SECRET,
                code: code,
                redirect_uri: REDIRECT_URI };

              _request2.default.get({
                url: 'https://graph.qq.com/oauth2.0/token',
                qs: qs },
              function (err, res1, body) {
                var access_token = body.match(/access_token=(\w+)&?/)[1];
                _request2.default.get({
                  url: 'https://graph.qq.com/oauth2.0/me',
                  qs: { access_token: access_token } },
                function (err, res2, body) {
                  var openid = body.match(/"openid":"(\w+)"/)[1];
                  var qs = {
                    oauth_consumer_key: QQ_CLIENT_ID,
                    access_token: access_token,
                    openid: openid,
                    format: 'json' };

                  // 获取用户信息
                  _request2.default.get({
                    url: 'https://graph.qq.com/user/get_user_info',
                    qs: qs },
                  function (err, res2, body) {
                    var info = JSON.parse(body);
                    var uInfo = {
                      email: '',
                      pic: '',
                      name: '',
                      nickname: info.nickname,
                      openid: openid,
                      way: 'qq' };

                    self.session("uInfo", uInfo);
                    self.redirect("/login/complete");
                  });
                });
              });case 10:case 'end':return _context4.stop();}}}, _callee4, this);}));function qqloginAction() {return _ref4.apply(this, arguments);}return qqloginAction;}();_class.prototype.


  completeAction = function () {var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {var uinfo, DB_userinfo;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
              this.assign('title', '完善资料');_context5.next = 3;return (
                this.session("uInfo"));case 3:uinfo = _context5.sent;if (!
              think.isEmpty(uinfo)) {_context5.next = 8;break;}return _context5.abrupt('return',
              this.redirect("/login.html"));case 8:_context5.next = 10;return (


                this.model('home').findOne('user', { openid: uinfo.openid }));case 10:DB_userinfo = _context5.sent;if (!

              think.isEmpty(DB_userinfo)) {_context5.next = 16;break;}
              this.assign("uinfo", uinfo);return _context5.abrupt('return',
              this.displayView("login_complete"));case 16:

              //已注册
              uinfo.name = DB_userinfo.name;return _context5.abrupt('return',
              this.redirect("/personal/@" + DB_userinfo.name));case 18:case 'end':return _context5.stop();}}}, _callee5, this);}));function completeAction() {return _ref5.apply(this, arguments);}return completeAction;}();return _class;}(_base2.default);exports.default = _class;
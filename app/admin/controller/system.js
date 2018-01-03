'use strict';exports.__esModule = true;var _regenerator = require("babel-runtime/regenerator");var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);
var _fs = require("fs");var _fs2 = _interopRequireDefault(_fs);
var _path = require("path");var _path2 = _interopRequireDefault(_path);
var _base = require("./base.js");var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}_class.prototype.



    indexAction = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {var sysdata;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                            this.assign("title", "系统设置");_context.next = 3;return (
                                this.model('admin').findOne('system'));case 3:sysdata = _context.sent;
                            this.assign('sysdata', sysdata);return _context.abrupt("return",
                            this.display());case 6:case "end":return _context.stop();}}}, _callee, this);}));function indexAction() {return _ref.apply(this, arguments);}return indexAction;}();_class.prototype.

    editAction = function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {var mydata, rs;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                                this.post());case 2:mydata = _context2.sent;_context2.next = 5;return (
                                this.model('admin').updateRecord('system', { id: 1 }, mydata));case 5:rs = _context2.sent;if (!
                            rs) {_context2.next = 8;break;}return _context2.abrupt("return", this.success());case 8:case "end":return _context2.stop();}}}, _callee2, this);}));function editAction() {return _ref2.apply(this, arguments);}return editAction;}();_class.prototype.

    commenteditAction = function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {var mydata, rs;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                                this.post());case 2:mydata = _context3.sent;_context3.next = 5;return (
                                this.model('admin').updateRecord('system_comment', { id: 1 }, mydata));case 5:rs = _context3.sent;if (!
                            rs) {_context3.next = 8;break;}return _context3.abrupt("return", this.success());case 8:case "end":return _context3.stop();}}}, _callee3, this);}));function commenteditAction() {return _ref3.apply(this, arguments);}return commenteditAction;}();_class.prototype.

    setcommentAction = function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {var sysdata;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                            this.assign("title", "评论设置");_context4.next = 3;return (
                                this.model('admin').findOne('system_comment', { id: 1 }));case 3:sysdata = _context4.sent;
                            this.assign('sysdata', sysdata);return _context4.abrupt("return",
                            this.display());case 6:case "end":return _context4.stop();}}}, _callee4, this);}));function setcommentAction() {return _ref4.apply(this, arguments);}return setcommentAction;}();_class.prototype.

    logoeditAction = function () {var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {var mydata;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
                                this.post());case 2:mydata = _context5.sent;if (!
                            mydata.name) {_context5.next = 5;break;}return _context5.abrupt("return", this.success());case 5:case "end":return _context5.stop();}}}, _callee5, this);}));function logoeditAction() {return _ref5.apply(this, arguments);}return logoeditAction;}();_class.prototype.


    setlogoAction = function () {var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
                            this.assign("title", "Logo设置");return _context6.abrupt("return",
                            this.display());case 2:case "end":return _context6.stop();}}}, _callee6, this);}));function setlogoAction() {return _ref6.apply(this, arguments);}return setlogoAction;}();

    //上传图片接口
    _class.prototype.uploadAction = function () {var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {var IS_USE_OSS, ALIOSS, alioss, file, rs, _file, filepath, oldpath, newpath, uploadPath, basename;return _regenerator2.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:


                            IS_USE_OSS = think.config('OSS.on');if (!
                            IS_USE_OSS) {_context7.next = 16;break;}
                            //上传OSS图片接口
                            ALIOSS = think.service("alioss");
                            alioss = new ALIOSS();
                            file = think.extend({}, this.file('file'));_context7.next = 7;return (
                                alioss.upload(file));case 7:rs = _context7.sent;
                            console.log(rs);if (!
                            rs) {_context7.next = 13;break;}return _context7.abrupt("return",
                            this.json({ path: think.config('OSS.domain') + "/" + rs.name }));case 13:return _context7.abrupt("return",

                            this.json("上传失败！"));case 14:_context7.next = 24;break;case 16:


                            //上传应用服务器图片接口
                            _file = think.extend({}, this.file('file'));
                            filepath = _file.path;
                            oldpath = think.UPLOAD_PATH;
                            newpath = oldpath.split('/upload')[0];
                            uploadPath = newpath + '/theme/liblog/res/common/images/common/';
                            basename = _path2.default.basename(filepath);
                            _fs2.default.renameSync(filepath, uploadPath + "logo.jpg");
                            this.json({ path: "/static/theme/liblog/res/common/images/common/logo.jpg" });case 24:case "end":return _context7.stop();}}}, _callee7, this);}));function uploadAction() {return _ref7.apply(this, arguments);}return uploadAction;}();return _class;}(_base2.default);exports.default = _class;
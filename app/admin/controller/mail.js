'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}_class.prototype.




    indexAction = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {var nodemailer, mailer, smtpTransport;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:

                            //var nodemailer  = require("nodemailer");
                            //var smtpTransport = nodemailer.createTransport("SMTP", {
                            //    service: "QQ",
                            //    auth: {
                            //        user: "262248861@qq.com", // 账号
                            //        pass: "wvebvwxcsxpebiai" // 密码
                            //    }
                            //});
                            //smtpTransport.sendMail({
                            //    from: '262248861@qq.com',
                            //      to: "390039626@qq.com,livisky@163.com", // 收件列表
                            //subject : 'Node.JS通过SMTP协议从QQ邮箱发送邮件',
                            //    html: 'This is a test mail,please do not reply it! <br> '
                            //},function(err, res) {
                            //    console.log(err, res);
                            //});

                            nodemailer = require("nodemailer");
                            mailer = think.config("mail");
                            smtpTransport = nodemailer.createTransport("SMTP", {
                                host: mailer.host,
                                secureConnection: false,
                                port: mailer.port,
                                requiresAuth: true,
                                domains: mailer.domains,
                                auth: {
                                    user: mailer.account, // 账号
                                    pass: mailer.pass // 密码
                                } });

                            smtpTransport.sendMail({
                                from: mailer.account,
                                to: "390039626@qq.com,livisky@163.com", // 收件列表
                                subject: 'Node.JS通过SMTP协议从QQ邮箱发送邮件',
                                html: 'have a try!' },
                            function (err, res) {
                                console.log(err, res);
                            });
                            this.assign("title", "测试邮件");return _context.abrupt('return',
                            this.display());case 6:case 'end':return _context.stop();}}}, _callee, this);}));function indexAction() {return _ref.apply(this, arguments);}return indexAction;}();return _class;}(_base2.default);exports.default = _class;
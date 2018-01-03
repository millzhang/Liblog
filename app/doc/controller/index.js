'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}


    /**
                                                                                                                                                                                                                                                                                                                                                                                                     * index action
                                                                                                                                                                                                                                                                                                                                                                                                     * @return {Promise} []
                                                                                                                                                                                                                                                                                                                                                                                                     */_class.prototype.
    indexAction = function indexAction() {
        //auto render template file index_index.html
        return this.displayView("index_index");

    };
    //thinkjs文档
    _class.prototype.thinkjs2Action = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {var aid, articleInfo;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                                this.get("aid"));case 2:aid = _context.sent;_context.next = 5;return (
                                this.model('doc').getOneArticle('article', { id: aid, tag: 18 }));case 5:articleInfo = _context.sent;if (!(
                            articleInfo.ispublished === 1)) {_context.next = 11;break;}
                            this.assign('articleInfo', articleInfo);return _context.abrupt('return',
                            this.displayView("index_thinkjs2"));case 11:return _context.abrupt('return',

                            this.displayView("../common/error_404"));case 12:case 'end':return _context.stop();}}}, _callee, this);}));function thinkjs2Action() {return _ref.apply(this, arguments);}return thinkjs2Action;}();


    //angularjs文档
    _class.prototype.angularAction = function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {var aid, articleInfo;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                                this.get("aid"));case 2:aid = _context2.sent;_context2.next = 5;return (
                                this.model('doc').getOneArticle('article', { id: aid, tag: 19 }));case 5:articleInfo = _context2.sent;if (!(
                            articleInfo.ispublished === 1)) {_context2.next = 11;break;}
                            this.assign('articleInfo', articleInfo);return _context2.abrupt('return',
                            this.displayView("index_angular"));case 11:return _context2.abrupt('return',

                            this.displayView("../common/error_404"));case 12:case 'end':return _context2.stop();}}}, _callee2, this);}));function angularAction() {return _ref2.apply(this, arguments);}return angularAction;}();


    //thinkjs教程
    _class.prototype.thinkjsAction = function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {var aid, articleInfo;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                                this.get("aid"));case 2:aid = _context3.sent;_context3.next = 5;return (
                                this.model('doc').getOneArticle('article', { id: aid }));case 5:articleInfo = _context3.sent;if (!(
                            articleInfo.ispublished === 1)) {_context3.next = 11;break;}
                            this.assign('articleInfo', articleInfo);return _context3.abrupt('return',
                            this.displayView("index_thinkjs"));case 11:return _context3.abrupt('return',

                            this.displayView("../common/error_404"));case 12:case 'end':return _context3.stop();}}}, _callee3, this);}));function thinkjsAction() {return _ref3.apply(this, arguments);}return thinkjsAction;}();


    // liblog教程
    _class.prototype.liblogAction = function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {var aid, articleInfo;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (
                                this.get("aid"));case 2:aid = _context4.sent;_context4.next = 5;return (
                                this.model('doc').getOneArticle('article', { id: aid }));case 5:articleInfo = _context4.sent;if (!(
                            articleInfo.ispublished === 1)) {_context4.next = 11;break;}
                            this.assign('articleInfo', articleInfo);return _context4.abrupt('return',
                            this.displayView("index_liblog"));case 11:return _context4.abrupt('return',


                            this.displayView("../common/error_404"));case 12:case 'end':return _context4.stop();}}}, _callee4, this);}));function liblogAction() {return _ref4.apply(this, arguments);}return liblogAction;}();


    // React教程
    _class.prototype.reactAction = function () {var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {var aid, articleInfo;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
                                this.get("aid"));case 2:aid = _context5.sent;_context5.next = 5;return (
                                this.model('doc').getOneArticle('article', { id: aid, tag: 20 }));case 5:articleInfo = _context5.sent;if (!(
                            articleInfo.ispublished === 1)) {_context5.next = 11;break;}
                            this.assign('articleInfo', articleInfo);return _context5.abrupt('return',
                            this.displayView("index_react"));case 11:return _context5.abrupt('return',

                            this.displayView("../common/error_404"));case 12:case 'end':return _context5.stop();}}}, _callee5, this);}));function reactAction() {return _ref5.apply(this, arguments);}return reactAction;}();return _class;}(_base2.default);exports.default = _class;
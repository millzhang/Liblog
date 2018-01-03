'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}


    /**
                                                                                                                                                                                                                                                                                                                                                                                                     * index action
                                                                                                                                                                                                                                                                                                                                                                                                     * @return {Promise} []
                                                                                                                                                                                                                                                                                                                                                                                                     */_class.prototype.
    indexAction = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {var keywords, map, pagenumber, pagesize, itemId, itemList, result, Page, page, pageData;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                            // 搜索功能
                            keywords = this.get('keyword');
                            map = { content: ["like", "%" + keywords + "%"], ispublished: 1, item: ["!=", 8] };

                            pagenumber = this.get("page") || 1;
                            pagesize = this.get("pagesize") || 10;_context.next = 6;return (
                                this.get("id"));case 6:itemId = _context.sent;_context.next = 9;return (

                                this.model("home").getPageSelect(map, pagenumber, pagesize));case 9:itemList = _context.sent;_context.next = 12;return (
                                this.model("home").getPageCountSelect(map, pagenumber, pagesize));case 12:result = _context.sent;
                            Page = think.adapter("template", "page");
                            page = new Page(this.http);
                            pageData = page.pagination(result);
                            this.assign("itemList", itemList);
                            this.assign('pageData', pageData);
                            //分页

                            this.assign("title", "全站搜索");
                            this.assign("categoryName", "全站搜索");
                            this.assign("more", 0);
                            this.assign('menu', 'search?keyword=' + this.get('keyword'));return _context.abrupt('return',
                            this.displayView("search_index"));case 23:case 'end':return _context.stop();}}}, _callee, this);}));function indexAction() {return _ref.apply(this, arguments);}return indexAction;}();return _class;}(_base2.default);exports.default = _class;
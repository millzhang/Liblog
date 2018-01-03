'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);
var _sitemap = require('./sitemap.js');var _sitemap2 = _interopRequireDefault(_sitemap);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}

    /**
                                                                                                                                                                                                                                                                                                                                                                                                                 * index action
                                                                                                                                                                                                                                                                                                                                                                                                                 * @return {Promise} []
                                                                                                                                                                                                                                                                                                                                                                                                                 */

    // 首页
    _class.prototype.indexAction = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {var setting;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (

                                this.model('home').findOne('system_comment'));case 2:setting = _context.sent;
                            this.assign("setting", setting);return _context.abrupt('return',

                            this.displayView('index_index'));case 5:case 'end':return _context.stop();}}}, _callee, this);}));function indexAction() {return _ref.apply(this, arguments);}return indexAction;}();


    //文章页
    _class.prototype.pageAction = function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {var aid, blogInfo, viewcount, tagItem, html, strArray, particle, ainfo, pid, id, relatearticle, tagname, title, strArrayVal, particleVal, setting;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                                this.get("aid"));case 2:aid = _context2.sent;_context2.next = 5;return (
                                this.model("home").findOne('article', { id: aid }));case 5:blogInfo = _context2.sent;if (!(
                            blogInfo.ispublished === 1)) {_context2.next = 38;break;}_context2.next = 9;return (

                                this.model("home").addViewCount({ id: aid }));case 9:viewcount = _context2.sent;_context2.next = 12;return (

                                this.model("home").findOne("tags", { id: blogInfo.tag }));case 12:tagItem = _context2.sent;
                            this.assign('blogInfo', blogInfo);
                            //设置文章分页
                            html = blogInfo.content;
                            strArray = [], particle = '', ainfo = '';
                            pid = this.get('pid');
                            if (html) {
                                if (html.indexOf("<!--page-->") > 0) {
                                    strArray = html.split("<!--page-->");
                                    if (pid) {
                                        id = pid * 1 - 1;
                                        particle = strArray[id];
                                    } else {
                                        pid = 1;
                                        particle = strArray[0];
                                    }
                                }
                            }
                            //关联文章
                            _context2.next = 20;return this.model("home").getArticleList({ tag: blogInfo.tag, ispublished: 1 });case 20:relatearticle = _context2.sent;
                            this.assign("relatearticle", relatearticle);

                            //跳转到内容分页
                            tagname = tagItem.tagname || '';
                            title = blogInfo.title || '';
                            strArrayVal = strArray || '';
                            particleVal = particle || '';

                            this.assign("title", blogInfo.title);
                            this.assign('strArray', strArrayVal);
                            this.assign('particle', particleVal);
                            this.assign('pid', pid);
                            this.assign('tagname', tagname);_context2.next = 33;return (

                                this.model('home').findOne('system_comment'));case 33:setting = _context2.sent;
                            this.assign("setting", setting);return _context2.abrupt('return',

                            this.displayView('index_page'));case 38:return _context2.abrupt('return',

                            this.displayView("../common/error_404"));case 39:case 'end':return _context2.stop();}}}, _callee2, this);}));function pageAction() {return _ref2.apply(this, arguments);}return pageAction;}();_class.prototype.



    previewAction = function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {var aid, blogInfo, viewcount, tagItem, html, strArray, particle, ainfo, pid, id, tagname, title, strArrayVal, particleVal;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                                this.get("aid"));case 2:aid = _context3.sent;_context3.next = 5;return (
                                this.model("home").findOne("article", { id: aid }));case 5:blogInfo = _context3.sent;_context3.next = 8;return (

                                this.model("home").addViewCount({ id: aid }));case 8:viewcount = _context3.sent;_context3.next = 11;return (

                                this.model("home").findOne("tags", { id: blogInfo.tag }));case 11:tagItem = _context3.sent;
                            this.assign('blogInfo', blogInfo);
                            //设置文章分页
                            html = blogInfo.content;
                            strArray = [], particle = '', ainfo = '';
                            pid = this.get('pid');
                            if (html) {
                                if (html.indexOf("<!--page-->") > 0) {
                                    strArray = html.split("<!--page-->");
                                    if (pid) {
                                        id = pid * 1 - 1;
                                        particle = strArray[id];
                                    } else {
                                        pid = 1;
                                        particle = strArray[0];
                                    }
                                }
                            }
                            //跳转到内容分页
                            tagname = tagItem.tagname || '';
                            title = blogInfo.title || '';
                            strArrayVal = strArray || '';
                            particleVal = particle || '';

                            this.assign("title", blogInfo.title);
                            this.assign('strArray', strArrayVal);
                            this.assign('particle', particleVal);
                            this.assign('pid', pid);
                            this.assign('tagname', tagname);return _context3.abrupt('return',
                            this.displayView('index_preview'));case 27:case 'end':return _context3.stop();}}}, _callee3, this);}));function previewAction() {return _ref3.apply(this, arguments);}return previewAction;}();

    //前端资讯
    _class.prototype.newsAction = function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                            this.getList(2, 'news');case 1:case 'end':return _context4.stop();}}}, _callee4, this);}));function newsAction() {return _ref4.apply(this, arguments);}return newsAction;}();

    //nodejs文章
    _class.prototype.nodeAction = function () {var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                            this.getList(3, 'node');case 1:case 'end':return _context5.stop();}}}, _callee5, this);}));function nodeAction() {return _ref5.apply(this, arguments);}return nodeAction;}();

    //苹果精品软件
    _class.prototype.downloadAction = function () {var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
                            this.getList(4, 'download');case 1:case 'end':return _context6.stop();}}}, _callee6, this);}));function downloadAction() {return _ref6.apply(this, arguments);}return downloadAction;}();

    //活动
    _class.prototype.activityAction = function () {var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {return _regenerator2.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:
                            this.getList(6, 'activity');case 1:case 'end':return _context7.stop();}}}, _callee7, this);}));function activityAction() {return _ref7.apply(this, arguments);}return activityAction;}();

    //大杂烩
    _class.prototype.othersAction = function () {var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {return _regenerator2.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:
                            this.getList(1, 'others');case 1:case 'end':return _context8.stop();}}}, _callee8, this);}));function othersAction() {return _ref8.apply(this, arguments);}return othersAction;}();

    //招聘
    _class.prototype.jobsAction = function () {var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9() {return _regenerator2.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:
                            this.getList(5, 'jobs');case 1:case 'end':return _context9.stop();}}}, _callee9, this);}));function jobsAction() {return _ref9.apply(this, arguments);}return jobsAction;}();

    //分类公用方法
    _class.prototype.getList = function () {var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(itemId, menu) {var pagenumber, pagesize, itemList, result, Page, page, pageData, item;return _regenerator2.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:
                            pagenumber = this.get("page") || 1;
                            pagesize = this.get("pagesize") || 10;
                            //分页
                            _context10.next = 4;return this.model("home").getPageSelect({ item: itemId, ispublished: 1 }, pagenumber, pagesize);case 4:itemList = _context10.sent;_context10.next = 7;return (
                                this.model("home").getPageCountSelect({ item: itemId, ispublished: 1 }, pagenumber, pagesize));case 7:result = _context10.sent;
                            Page = think.adapter("template", "page");
                            page = new Page(this.http);
                            pageData = page.pagination(result);

                            this.assign("itemList", itemList);
                            this.assign('pageData', pageData);
                            this.assign('menu', menu);
                            //分页
                            _context10.next = 16;return (
                                this.model("home").findOne("item", { id: itemId }));case 16:item = _context10.sent;
                            this.assign('categoryName', item.itemname);
                            this.assign('more', 0);return _context10.abrupt('return',
                            this.displayView("index_item"));case 20:case 'end':return _context10.stop();}}}, _callee10, this);}));function getList(_x, _x2) {return _ref10.apply(this, arguments);}return getList;}();_class.prototype.

    moreAction = function () {var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11() {var pagenumber, pagesize, itemList, result, Page, page, pageData;return _regenerator2.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:
                            pagenumber = this.get("page") || 1;
                            pagesize = this.get("pagesize") || 10;
                            //分页
                            _context11.next = 4;return this.model("home").getPageSelect({ ispublished: 1, item: { "!=": 8 } }, pagenumber, pagesize);case 4:itemList = _context11.sent;_context11.next = 7;return (
                                this.model("home").getPageCountSelect({ ispublished: 1, item: { "!=": 8 } }, pagenumber, pagesize));case 7:result = _context11.sent;
                            Page = think.adapter("template", "page");
                            page = new Page(this.http);
                            pageData = page.pagination(result);

                            this.assign("itemList", itemList);
                            this.assign('pageData', pageData);
                            this.assign('menu', 'more');
                            //分页
                            this.assign('more', 1);
                            this.assign('categoryName', '全部文章');return _context11.abrupt('return',
                            this.displayView("index_category"));case 17:case 'end':return _context11.stop();}}}, _callee11, this);}));function moreAction() {return _ref11.apply(this, arguments);}return moreAction;}();

    //分类
    _class.prototype.categoryAction = function () {var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12() {var pagenumber, pagesize, itemId, itemList, result, Page, page, pageData, category;return _regenerator2.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:
                            pagenumber = this.get("page") || 1;
                            pagesize = this.get("pagesize") || 10;_context12.next = 4;return (
                                this.get("id"));case 4:itemId = _context12.sent;_context12.next = 7;return (

                                this.model("home").getPageSelect({ tag: itemId, ispublished: 1 }, pagenumber, pagesize));case 7:itemList = _context12.sent;_context12.next = 10;return (
                                this.model("home").getPageCountSelect({ tag: itemId, ispublished: 1 }, pagenumber, pagesize));case 10:result = _context12.sent;
                            Page = think.adapter("template", "page");
                            page = new Page(this.http);
                            pageData = page.pagination(result);
                            this.assign("itemList", itemList);
                            this.assign('pageData', pageData);
                            //分页
                            _context12.next = 18;return this.model("home").findOne("tags", { id: itemId });case 18:category = _context12.sent;
                            this.assign('categoryName', category.tagname);
                            this.assign('more', 0);
                            this.assign('menu', 'category/' + itemId);return _context12.abrupt('return',
                            this.displayView('index_category'));case 23:case 'end':return _context12.stop();}}}, _callee12, this);}));function categoryAction() {return _ref12.apply(this, arguments);}return categoryAction;}();



    // 友情链接提交接口
    _class.prototype.linkssaveAction = function () {var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13() {var mydata, rs;return _regenerator2.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:_context13.next = 2;return (
                                this.post());case 2:mydata = _context13.sent;if (!(
                            mydata.domain !== '' && mydata.link !== '' && mydata.qq !== '')) {_context13.next = 9;break;}_context13.next = 6;return (
                                this.model("home").addRecord("links", mydata));case 6:rs = _context13.sent;if (!
                            rs) {_context13.next = 9;break;}return _context13.abrupt('return', this.success());case 9:case 'end':return _context13.stop();}}}, _callee13, this);}));function linkssaveAction() {return _ref13.apply(this, arguments);}return linkssaveAction;}();


    // 留言提交接口
    _class.prototype.guestsaveAction = function () {var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14() {var mydata, rs;return _regenerator2.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:_context14.next = 2;return (
                                this.post());case 2:mydata = _context14.sent;if (!(
                            mydata.nickname !== '' && mydata.contact !== '' && mydata.guest !== '')) {_context14.next = 9;break;}_context14.next = 6;return (
                                this.model("home").addRecord("guest", mydata));case 6:rs = _context14.sent;if (!
                            rs) {_context14.next = 9;break;}return _context14.abrupt('return', this.success());case 9:case 'end':return _context14.stop();}}}, _callee14, this);}));function guestsaveAction() {return _ref14.apply(this, arguments);}return guestsaveAction;}();_class.prototype.


    guestAction = function () {var _ref15 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee15() {return _regenerator2.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:
                            this.assign("title", "留言板");return _context15.abrupt('return',
                            this.displayView("index_guest"));case 2:case 'end':return _context15.stop();}}}, _callee15, this);}));function guestAction() {return _ref15.apply(this, arguments);}return guestAction;}();_class.prototype.

    aboutAction = function () {var _ref16 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee16() {return _regenerator2.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:
                            this.assign("title", "关于我们");return _context16.abrupt('return',
                            this.displayView("index_about"));case 2:case 'end':return _context16.stop();}}}, _callee16, this);}));function aboutAction() {return _ref16.apply(this, arguments);}return aboutAction;}();_class.prototype.

    adsAction = function () {var _ref17 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee17() {return _regenerator2.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:
                            this.assign("title", "推广服务");return _context17.abrupt('return',
                            this.displayView("index_ads"));case 2:case 'end':return _context17.stop();}}}, _callee17, this);}));function adsAction() {return _ref17.apply(this, arguments);}return adsAction;}();_class.prototype.

    copyrightAction = function () {var _ref18 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee18() {return _regenerator2.default.wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:
                            this.assign("title", "版权声明");return _context18.abrupt('return',
                            this.displayView("index_copyright"));case 2:case 'end':return _context18.stop();}}}, _callee18, this);}));function copyrightAction() {return _ref18.apply(this, arguments);}return copyrightAction;}();_class.prototype.

    linksAction = function () {var _ref19 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee19() {return _regenerator2.default.wrap(function _callee19$(_context19) {while (1) {switch (_context19.prev = _context19.next) {case 0:
                            this.assign("title", "友情链接");return _context19.abrupt('return',
                            this.displayView("index_links"));case 2:case 'end':return _context19.stop();}}}, _callee19, this);}));function linksAction() {return _ref19.apply(this, arguments);}return linksAction;}();_class.prototype.

    policyAction = function () {var _ref20 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee20() {return _regenerator2.default.wrap(function _callee20$(_context20) {while (1) {switch (_context20.prev = _context20.next) {case 0:
                            this.assign("title", "注册协议");return _context20.abrupt('return',
                            this.displayView("index_policy"));case 2:case 'end':return _context20.stop();}}}, _callee20, this);}));function policyAction() {return _ref20.apply(this, arguments);}return policyAction;}();_class.prototype.

    donateAction = function () {var _ref21 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee21() {return _regenerator2.default.wrap(function _callee21$(_context21) {while (1) {switch (_context21.prev = _context21.next) {case 0:
                            this.assign("title", "捐赠");return _context21.abrupt('return',
                            this.displayView("index_donate"));case 2:case 'end':return _context21.stop();}}}, _callee21, this);}));function donateAction() {return _ref21.apply(this, arguments);}return donateAction;}();_class.prototype.

    dologoutAction = function () {var _ref22 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee22() {return _regenerator2.default.wrap(function _callee22$(_context22) {while (1) {switch (_context22.prev = _context22.next) {case 0:
                            this.session("uInfo", "");return _context22.abrupt('return',
                            this.redirect("/login.html"));case 2:case 'end':return _context22.stop();}}}, _callee22, this);}));function dologoutAction() {return _ref22.apply(this, arguments);}return dologoutAction;}();


    // 站点地图
    _class.prototype.sitemapAction = function () {var _ref23 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee23() {var data, sysdata, list, article, topic, user, others;return _regenerator2.default.wrap(function _callee23$(_context23) {while (1) {switch (_context23.prev = _context23.next) {case 0:

                            //生成xml
                            data = {};_context23.next = 3;return (
                                this.model("home").findOne("system", { id: 1 }));case 3:sysdata = _context23.sent;_context23.next = 6;return (

                                this.model("home").findAll("item"));case 6:list = _context23.sent;_context23.next = 9;return (

                                this.model("home").findAll("article"));case 9:article = _context23.sent;_context23.next = 12;return (

                                this.model("home").findAll("topic"));case 12:topic = _context23.sent;_context23.next = 15;return (

                                this.model("home").findAll("user"));case 15:user = _context23.sent;
                            others = [
                            { id: 1, itemname: '大杂烩', url: 'others.html' },
                            { id: 2, itemname: '前端资讯', url: 'news.html' },
                            { id: 3, itemname: 'nodejs', url: 'node.html' },
                            { id: 4, itemname: '资源下载', url: 'download.html' },
                            { id: 5, itemname: '招聘', url: 'jobs.html' },
                            { id: 6, itemname: '活动', url: 'activity.html' },
                            { id: 7, itemname: '关于', url: 'about.html' },
                            { id: 8, itemname: '友情链接', url: 'links.html' },
                            { id: 9, itemname: '注册', url: 'register.html' },
                            { id: 10, itemname: '捐赠', url: 'donate.html' },
                            { id: 11, itemname: '推广服务', url: 'ads.html' },
                            { id: 12, itemname: '注册协议', url: 'policy.html' },
                            { id: 13, itemname: '版权声明', url: 'copyright.html' },
                            { id: 14, itemname: '会员登录', url: 'login.html' },
                            { id: 15, itemname: '留言板', url: 'guest.html' },
                            { id: 16, itemname: 'liblog', url: 'liblog.html' }];

                            data = {
                                homeurl: sysdata.url,
                                list: list,
                                article: article,
                                others: others,
                                topic: topic,
                                user: user };

                            _sitemap2.default.createXml(data);return _context23.abrupt('return',
                            this.displayView("index_sitemap"));case 20:case 'end':return _context23.stop();}}}, _callee23, this);}));function sitemapAction() {return _ref23.apply(this, arguments);}return sitemapAction;}();_class.prototype.



    liblogAction = function () {var _ref24 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee24() {return _regenerator2.default.wrap(function _callee24$(_context24) {while (1) {switch (_context24.prev = _context24.next) {case 0:return _context24.abrupt('return',
                            this.displayView("index_liblog"));case 1:case 'end':return _context24.stop();}}}, _callee24, this);}));function liblogAction() {return _ref24.apply(this, arguments);}return liblogAction;}();return _class;}(_base2.default);exports.default = _class;
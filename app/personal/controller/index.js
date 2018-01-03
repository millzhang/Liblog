'use strict';exports.__esModule = true;var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}

    /**
                                                                                                                                                                                                                                                                                                                                                                                                     * index action
                                                                                                                                                                                                                                                                                                                                                                                                     * @return {Promise} []
                                                                                                                                                                                                                                                                                                                                                                                                     */_class.prototype.
    indexAction = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {var _this2 = this;var uinfo, uname, isself, isselftag, islogin, pointList, topicList, replyList, collectList, userinfo, ranking, allPoints, i;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                            this.assign("title", "个人中心");_context.next = 3;return (
                                this.session('uInfo'));case 3:uinfo = _context.sent;_context.next = 6;return (
                                this.get('uname'));case 6:uname = _context.sent;
                            isself = void 0, isselftag = void 0;if (
                            think.isEmpty(uname)) {_context.next = 58;break;}
                            // 是否登录
                            islogin = !think.isEmpty(uinfo) ? 1 : 0;
                            //是否本人
                            if (!think.isEmpty(uinfo)) {
                                //登录
                                if (uinfo.name === uname) {
                                    isselftag = "我的";
                                    isself = 1;
                                } else {
                                    isselftag = "Ta的";
                                    isself = 0;
                                }
                            } else {
                                // 未登录
                                isselftag = "Ta的";
                                isself = 0;
                            }
                            this.assign("islogin", islogin);
                            this.assign("isself", isself);
                            this.assign("isselftag", isselftag);
                            // 排行
                            _context.next = 16;return think.cache("pointList", function () {
                                return _this2.model("personal").getPointList();
                            });case 16:pointList = _context.sent;
                            this.assign("pointList", pointList);

                            //我的话题
                            _context.next = 20;return this.model('personal').getMytopic({ author: uname });case 20:topicList = _context.sent;
                            this.assign("topicList", topicList);

                            //我的回复
                            _context.next = 24;return this.model('personal').findAll('topic_comment', { author: uname });case 24:replyList = _context.sent;
                            this.assign("replyList", replyList);

                            //我的收藏
                            _context.next = 28;return this.model('personal').getMycollect({ author: uname });case 28:collectList = _context.sent;
                            this.assign("collectList", collectList);_context.next = 32;return (

                                this.model('personal').findAll('user', { name: uname }));case 32:userinfo = _context.sent;if (
                            think.isEmpty(userinfo)) {_context.next = 55;break;}_context.next = 36;return (

                                think.cache("ranking_" + userinfo[0].id));case 36:ranking = _context.sent;if (!(
                            ranking === undefined)) {_context.next = 50;break;}_context.next = 40;return (
                                this.model("personal").getAllPoint());case 40:allPoints = _context.sent;
                            i = 0;case 42:if (!(i < allPoints.length)) {_context.next = 50;break;}if (!(
                            allPoints[i].id == userinfo[0].id)) {_context.next = 47;break;}
                            ranking = i + 1;
                            think.cache("ranking_" + userinfo[0].id, ranking);return _context.abrupt('break', 50);case 47:i++;_context.next = 42;break;case 50:





                            this.assign("ranking", ranking);

                            //他人的个人中心基本信息
                            this.assign("userinfo", userinfo[0]);return _context.abrupt('return',
                            this.displayView("index_index"));case 55:return _context.abrupt('return',


                            this.displayView("../common/error_404"));case 56:_context.next = 59;break;case 58:return _context.abrupt('return',


                            this.displayView("../common/error_404"));case 59:case 'end':return _context.stop();}}}, _callee, this);}));function indexAction() {return _ref.apply(this, arguments);}return indexAction;}();_class.prototype.



    settingAction = function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:return _context2.abrupt('return',
                            this.displayView("index_setting"));case 1:case 'end':return _context2.stop();}}}, _callee2, this);}));function settingAction() {return _ref2.apply(this, arguments);}return settingAction;}();


    //收藏/取消收藏接口
    _class.prototype.savecollectAction = function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {var data, mycreatetime, rs, points, _rs, _points;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                                this.post());case 2:data = _context3.sent;
                            mycreatetime = think.datetime(this.post("createtime"));if (
                            think.isEmpty(this.post("cid"))) {_context3.next = 15;break;}_context3.next = 7;return (

                                this.model("personal").deleteRecord("user_collect", { id: data.cid }));case 7:rs = _context3.sent;_context3.next = 10;return (
                                this.model("personal").decrepoint({ name: data.author }, this.config('point.addcollect')));case 10:points = _context3.sent;if (!
                            rs) {_context3.next = 13;break;}return _context3.abrupt('return', this.success({ status: 0, msg: "取消收藏成功！", cid: data.cid }));case 13:_context3.next = 24;break;case 15:

                            //未收藏，这里收藏
                            data.createtime = mycreatetime;_context3.next = 18;return (
                                this.model("personal").addRecord("user_collect", data));case 18:_rs = _context3.sent;_context3.next = 21;return (
                                this.model("personal").increpoint({ name: data.author }, this.config('point.addcollect')));case 21:_points = _context3.sent;if (!
                            _rs) {_context3.next = 24;break;}return _context3.abrupt('return', this.success({ status: 1, msg: "收藏成功！", cid: _rs }));case 24:case 'end':return _context3.stop();}}}, _callee3, this);}));function savecollectAction() {return _ref3.apply(this, arguments);}return savecollectAction;}();return _class;}(_base2.default);exports.default = _class;
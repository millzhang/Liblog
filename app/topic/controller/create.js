'use strict';exports.__esModule = true;var _regenerator = require("babel-runtime/regenerator");var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);
var _fs = require("fs");var _fs2 = _interopRequireDefault(_fs);
var _path = require("path");var _path2 = _interopRequireDefault(_path);
var _base = require("./base.js");var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}


  /**
                                                                                                                                                                                                                                                                                                                                                                                                     * index action
                                                                                                                                                                                                                                                                                                                                                                                                     * @return {Promise} []
                                                                                                                                                                                                                                                                                                                                                                                                     */_class.prototype.
  indexAction = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {var uinfo, upic, itemList;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              this.assign("title", "新建主题");_context.next = 3;return (
                this.session('uInfo'));case 3:uinfo = _context.sent;if (
              think.isEmpty(uinfo)) {_context.next = 17;break;}_context.next = 7;return (
                this.model("topic").getUserPic({ name: uinfo.name }));case 7:upic = _context.sent;_context.next = 10;return (
                this.model("topic").findAll("topic_item"));case 10:itemList = _context.sent;
              this.assign('itemList', itemList);
              this.assign('uinfo', uinfo);
              this.assign('upic', upic.pic);return _context.abrupt("return",
              this.displayView("create_index"));case 17:return _context.abrupt("return",

              this.redirect('/login.html'));case 18:case "end":return _context.stop();}}}, _callee, this);}));function indexAction() {return _ref.apply(this, arguments);}return indexAction;}();_class.prototype.



  doaddAction = function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {var mycreatetime, updatetime, data, rs, _rs, points;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0: //编辑或者新增主题
              mycreatetime = think.datetime(this.post('createtime'));
              updatetime = think.datetime(this.post('updatetime'));_context2.next = 4;return (
                this.post());case 4:data = _context2.sent;
              data.createtime = mycreatetime;
              data.updatetime = updatetime;if (
              think.isEmpty(this.post("id"))) {_context2.next = 15;break;}_context2.next = 10;return (
                this.model("topic").updateRecord("topic", { id: data.id }, data));case 10:rs = _context2.sent;if (!
              rs) {_context2.next = 13;break;}return _context2.abrupt("return", this.success());case 13:_context2.next = 23;break;case 15:_context2.next = 17;return (

                this.model("topic").addRecord("topic", data));case 17:_rs = _context2.sent;_context2.next = 20;return (
                this.model("topic").increpoint({ name: data.author }, this.config('point.addtopic')));case 20:points = _context2.sent;if (!
              _rs) {_context2.next = 23;break;}return _context2.abrupt("return", this.success());case 23:case "end":return _context2.stop();}}}, _callee2, this);}));function doaddAction() {return _ref2.apply(this, arguments);}return doaddAction;}();_class.prototype.



  editAction = function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {var myid, uinfo, topicInfo, upic, itemList;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
              this.assign("title", "编辑主题");
              myid = this.get("tid");_context3.next = 4;return (
                this.session('uInfo'));case 4:uinfo = _context3.sent;if (
              think.isEmpty(uinfo)) {_context3.next = 26;break;}_context3.next = 8;return (
                this.model("topic").findOne("topic", { id: myid, author: uinfo.name }));case 8:topicInfo = _context3.sent;if (
              think.isEmpty(topicInfo)) {_context3.next = 23;break;}_context3.next = 12;return (
                this.model("topic").getUserPic({ name: uinfo.name }));case 12:upic = _context3.sent;
              this.assign('upic', upic.pic);_context3.next = 16;return (
                this.model("topic").findAll("topic_item"));case 16:itemList = _context3.sent;
              this.assign('uinfo', uinfo);
              this.assign("topicInfo", topicInfo);
              this.assign("itemList", itemList);return _context3.abrupt("return",
              this.displayView("create_edit"));case 23:return _context3.abrupt("return",

              this.displayView("../common/error_404"));case 24:_context3.next = 27;break;case 26:return _context3.abrupt("return",


              this.redirect('/login.html'));case 27:case "end":return _context3.stop();}}}, _callee3, this);}));function editAction() {return _ref3.apply(this, arguments);}return editAction;}();_class.prototype.



  savereplyAction = function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {var marked, mycreatetime, data, html, isexist, tid, updata, updatetime, rs, _updata, _updatetime, _rs2, points, replycount;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
              //编辑或者新增回复
              marked = require('marked');
              marked.setOptions({
                renderer: new marked.Renderer(),
                gfm: true,
                tables: true,
                breaks: true,
                pedantic: false,
                sanitize: true,
                smartLists: true,
                smartypants: false });

              mycreatetime = think.datetime(this.post('createtime'));_context4.next = 5;return (
                this.post());case 5:data = _context4.sent;
              data.createtime = mycreatetime;if (!(
              data.text === '')) {_context4.next = 11;break;}return _context4.abrupt("return",
              this.json({ status: 0, errno: 1, errmsg: '回复不能为空！' }));case 11:

              // 解析markdown
              html = marked(data.comment);
              // data.comment=html;
              if (think.isEmpty(data.id)) {_context4.next = 34;break;}_context4.next = 15;return (

                this.model("topic").findOne("topic_comment", { id: data.id }));case 15:isexist = _context4.sent;_context4.next = 18;return (
                this.model("topic").findOne("topic", { id: data.tid }));case 18:tid = _context4.sent;if (!(
              !think.isEmpty(isexist) && !think.isEmpty(tid))) {_context4.next = 31;break;}
              //更新最后回复数据
              updata = {
                updatetime: mycreatetime,
                updateauthor: data.author,
                updatepic: data.pic };_context4.next = 23;return (

                this.model("topic").updateRecord("topic", { id: data.tid }, updata));case 23:updatetime = _context4.sent;_context4.next = 26;return (


                this.model("topic").updateRecord("topic_comment", { id: data.id }, data));case 26:rs = _context4.sent;if (!
              rs) {_context4.next = 29;break;}return _context4.abrupt("return", this.success());case 29:_context4.next = 32;break;case 31:return _context4.abrupt("return",

              this.fail("该主题或回复不存在或已删除！"));case 32:_context4.next = 49;break;case 34:


              //更新最后回复数据
              _updata = {
                updatetime: mycreatetime,
                updateauthor: data.author,
                updatepic: data.pic };_context4.next = 37;return (

                this.model("topic").updateRecord("topic", { id: data.tid }, _updata));case 37:_updatetime = _context4.sent;_context4.next = 40;return (


                this.model("topic_comment").add(data));case 40:_rs2 = _context4.sent;_context4.next = 43;return (

                this.model("topic").increpoint({ name: data.author }, this.config('point.addcomment')));case 43:points = _context4.sent;_context4.next = 46;return (

                this.model("topic").where({ id: data.tid }).increment('replycount', 1));case 46:replycount = _context4.sent;if (!
              _rs2) {_context4.next = 49;break;}return _context4.abrupt("return", this.success());case 49:case "end":return _context4.stop();}}}, _callee4, this);}));function savereplyAction() {return _ref4.apply(this, arguments);}return savereplyAction;}();_class.prototype.




  postlikeAction = function () {var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {var data, liker, myid, item, arr, likers, n, newlikers, m, rs, _m, _newlikers, _rs3;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
                this.post());case 2:data = _context5.sent;
              liker = data.likers;
              myid = data.id;if (
              think.isEmpty(myid)) {_context5.next = 31;break;}_context5.next = 8;return (
                this.model("topic").findOne("topic_comment", { id: myid }));case 8:item = _context5.sent;
              arr = !item.likers ? [] : item.likers.split(",");
              likers = arr || [];
              n = likers.indexOf(liker);if (!(
              n < 0)) {_context5.next = 23;break;}
              likers.push(liker);
              newlikers = likers.join(",");
              m = likers.length;_context5.next = 18;return (
                this.model("topic_comment").where({ id: myid }).update({ like: m, likers: newlikers }));case 18:rs = _context5.sent;if (!
              rs) {_context5.next = 21;break;}return _context5.abrupt("return", this.success({ likeCount: m }));case 21:_context5.next = 31;break;case 23:

              likers.splice(n, 1);
              _m = likers.length;
              _newlikers = likers.join(",");_context5.next = 28;return (
                this.model("topic_comment").where({ id: myid }).update({ like: _m, likers: _newlikers }));case 28:_rs3 = _context5.sent;if (!
              _rs3) {_context5.next = 31;break;}return _context5.abrupt("return", this.success({ likeCount: _m }));case 31:case "end":return _context5.stop();}}}, _callee5, this);}));function postlikeAction() {return _ref5.apply(this, arguments);}return postlikeAction;}();_class.prototype.




  removereplyAction = function () {var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {var data, myid, rs, replycount;return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_context6.next = 2;return (
                this.post());case 2:data = _context6.sent;
              myid = data.id;if (
              think.isEmpty(myid)) {_context6.next = 13;break;}_context6.next = 7;return (
                this.model("topic_comment").where({ id: myid }).delete());case 7:rs = _context6.sent;_context6.next = 10;return (

                this.model("topic").where({ id: data.tid }).decrement('replycount', 1));case 10:replycount = _context6.sent;if (!
              rs) {_context6.next = 13;break;}return _context6.abrupt("return", this.success());case 13:case "end":return _context6.stop();}}}, _callee6, this);}));function removereplyAction() {return _ref6.apply(this, arguments);}return removereplyAction;}();_class.prototype.



  removeitemAction = function () {var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {var data, myid, rs;return _regenerator2.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:_context7.next = 2;return (
                this.post());case 2:data = _context7.sent;
              myid = data.id;if (
              think.isEmpty(myid)) {_context7.next = 10;break;}_context7.next = 7;return (
                this.model("topic").where({ id: myid }).delete());case 7:rs = _context7.sent;if (!
              rs) {_context7.next = 10;break;}return _context7.abrupt("return", this.success());case 10:case "end":return _context7.stop();}}}, _callee7, this);}));function removeitemAction() {return _ref7.apply(this, arguments);}return removeitemAction;}();



  //上传图片接口
  _class.prototype.uploadeditorAction = function () {var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {var IS_USE_OSS, ALIOSS, alioss, file, rs, _file, filepath, newpath, uploadPath, basename;return _regenerator2.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:

              IS_USE_OSS = think.config('OSS.on');if (!
              IS_USE_OSS) {_context8.next = 15;break;}
              //上传OSS图片接口
              ALIOSS = think.service("alioss");
              alioss = new ALIOSS();
              file = think.extend({}, this.file('img'));_context8.next = 7;return (
                alioss.upload(file));case 7:rs = _context8.sent;if (!
              rs) {_context8.next = 12;break;}return _context8.abrupt("return",
              this.json(think.config('OSS.domain') + "/" + rs.name));case 12:return _context8.abrupt("return",

              this.json("上传失败！"));case 13:_context8.next = 23;break;case 15:


              //上传应用服务器图片接口
              _file = think.extend({}, this.file('img'));
              filepath = _file.path;
              newpath = liFormatDate(new Date().toLocaleDateString());
              uploadPath = think.UPLOAD_PATH + '/pics/' + newpath;
              think.mkdir(uploadPath);
              basename = _path2.default.basename(filepath);
              _fs2.default.renameSync(filepath, uploadPath + basename);
              this.json("/static/upload/pics/" + newpath + basename);case 23:case "end":return _context8.stop();}}}, _callee8, this);}));function uploadeditorAction() {return _ref8.apply(this, arguments);}return uploadeditorAction;}();return _class;}(_base2.default);exports.default = _class;
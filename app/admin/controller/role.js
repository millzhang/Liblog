'use strict';exports.__esModule = true;var _regenerator = require("babel-runtime/regenerator");var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);







var _base = require("./base.js");var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var init = { mydb: "manage_role", title: "角色管理", edit: "角色编辑", add: "角色添加", action: "role" };var _class = function (_Base) {(0, _inherits3.default)(_class, _Base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));}

  /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * index action
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @return {Promise} []
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */_class.prototype.
  indexAction = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {var info, mydata;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              info = {
                db: init.mydb,
                page: this.get("page") || 1,
                pagesize: this.get("pagesize") || 10 };_context.next = 3;return (

                this.model('util').getIndex(info));case 3:mydata = _context.sent;
              this.assign("itemList", mydata.itemList);
              this.assign('pageData', mydata.pageData);
              this.assign("title", init.title);
              this.assign("action", init.action);return _context.abrupt("return",
              this.display());case 9:case "end":return _context.stop();}}}, _callee, this);}));function indexAction() {return _ref.apply(this, arguments);}return indexAction;}();_class.prototype.


  itemAction = function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {var info, mydata;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:

              info = {
                db: init.mydb,
                edit: init.edit,
                add: init.add,
                id: this.get('id') };_context2.next = 3;return (

                this.model('util').getItem(info));case 3:mydata = _context2.sent;
              this.assign("title", mydata.title);
              this.assign('item', mydata.item);
              this.assign("action", init.action);return _context2.abrupt("return",
              this.display());case 8:case "end":return _context2.stop();}}}, _callee2, this);}));function itemAction() {return _ref2.apply(this, arguments);}return itemAction;}();


  //编辑或者新增接口
  _class.prototype.saveAction = function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {var info, mydata;return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
              info = {
                db: init.mydb,
                data: this.post(),
                id: this.post('id') };_context3.next = 3;return (

                this.model('util').doSave(info));case 3:mydata = _context3.sent;if (!(
              mydata.status === 1)) {_context3.next = 6;break;}return _context3.abrupt("return", this.success());case 6:case "end":return _context3.stop();}}}, _callee3, this);}));function saveAction() {return _ref3.apply(this, arguments);}return saveAction;}();


  //删除或批量删除接口
  _class.prototype.delsomeAction = function () {var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {var info, where, rs;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
              info = {
                db: init.mydb,
                arr: this.post('delarr[]') };

              where = { id: ["IN", info.arr] };_context4.next = 4;return (
                this.model("admin").deleteRecord(info.db, where));case 4:rs = _context4.sent;if (!
              rs) {_context4.next = 7;break;}return _context4.abrupt("return", this.success());case 7:case "end":return _context4.stop();}}}, _callee4, this);}));function delsomeAction() {return _ref4.apply(this, arguments);}return delsomeAction;}();

  //权限列表
  _class.prototype.perlistAction = function () {var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {var tagList, rolePermissions, arr, i, ilist, obj, prr, pbj, j, newArr, roleArr, item, k;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (

                this.model('admin').findAll('manage_tag'));case 2:tagList = _context5.sent;_context5.next = 5;return (
                this.model('admin').findOne('manage_role', { id: this.get('id') }));case 5:rolePermissions = _context5.sent;
              arr = [];_context5.t0 = _regenerator2.default.keys(
              tagList);case 8:if ((_context5.t1 = _context5.t0()).done) {_context5.next = 20;break;}i = _context5.t1.value;
              ilist = {}, obj = {};_context5.next = 13;return (
                this.model('admin').findAll('manage_permission', { tag: tagList[i].id }));case 13:ilist = _context5.sent;
              prr = [], pbj = {};
              //循环权限
              for (j in ilist) {
                pbj = {
                  'id': ilist[j].id,
                  'pername': ilist[j].pername,
                  'permission': ilist[j].permission };

                prr.push(pbj);
              }
              //拼组数据
              obj = {
                'name': tagList[i].name,
                'perlist': prr };

              arr.push(obj);_context5.next = 8;break;case 20:


              //转换成数字数组
              newArr = [];
              if (!think.isEmpty(rolePermissions.pid)) {
                roleArr = rolePermissions.pid.split(",");
                item = void 0;
                for (k in roleArr) {
                  item = roleArr[k] * 1;
                  newArr.push(item);
                }
              }

              this.assign('itemList', arr);
              this.assign('rid', this.get('id'));
              this.assign('title', '权限列表');
              this.assign('newArr', newArr);return _context5.abrupt("return",
              this.display());case 27:case "end":return _context5.stop();}}}, _callee5, this);}));function perlistAction() {return _ref5.apply(this, arguments);}return perlistAction;}();_class.prototype.

  rolesaveAction = function () {var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {var newdata, rs;return _regenerator2.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_context6.next = 2;return (
                this.post());case 2:newdata = _context6.sent;
              console.log(newdata);if (
              think.isEmpty(this.post('id'))) {_context6.next = 10;break;}_context6.next = 7;return (
                this.model('admin').updateRecord('manage_role', { id: this.post('id') }, newdata));case 7:rs = _context6.sent;if (!
              rs) {_context6.next = 10;break;}return _context6.abrupt("return", this.success());case 10:case "end":return _context6.stop();}}}, _callee6, this);}));function rolesaveAction() {return _ref6.apply(this, arguments);}return rolesaveAction;}();return _class;}(_base2.default);exports.default = _class;
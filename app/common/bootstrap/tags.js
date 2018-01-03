'use strict';var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                                                                                                                                                                                                                                           置顶文章列表
                                                                                                                                                                                                                                                                                                                                                                           {% article data = "topList",limit= "6",flag="totop"%}
                                                                                                                                                                                                                                                                                                                                                                           站长推荐
                                                                                                                                                                                                                                                                                                                                                                           {% article data = "torecomList",limit= "6",flag="torecom"%}
                                                                                                                                                                                                                                                                                                                                                                           图文推荐
                                                                                                                                                                                                                                                                                                                                                                           {% article data = "picrecomList",limit= "6",flag="topicrecom"%}
                                                                                                                                                                                                                                                                                                                                                                           */
global.article = function () {
    this.tags = ['article'];
    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();
        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        return new nodes.CallExtensionAsync(this, 'run', args);
    };
    this.run = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context, args, callback) {var _ref2;var where, data, limit, cid, tid, flag, type, article;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                            where = { 'ispublished': 1 };
                            data = think.isEmpty(args.data) ? "data" : args.data;
                            limit = think.isEmpty(args.limit) ? "10" : args.limit;

                            //分类item
                            cid = think.isEmpty(args.cid) ? false : { 'item': ['=', args.cid] };
                            if (cid) {
                                where = think.extend({}, where, cid);
                            }
                            //标签tag
                            tid = think.isEmpty(args.tid) ? false : { 'tag': ['=', args.tid] };
                            if (tid) {
                                where = think.extend({}, where, tid);
                            }
                            //标签flag
                            // 置顶:flag="torecom",站长推荐:flag="torecom",图文推荐:flag="topicrecom",
                            flag = think.isEmpty(args.flag) ? false : (_ref2 = {}, _ref2[args.flag] = 1, _ref2);
                            if (flag) {
                                where = think.extend({}, where, flag);
                            }

                            // order by
                            type = 'createtime DESC';
                            if (!think.isEmpty(args.type)) {
                                if (args.type == "hot") {
                                    type = "view DESC";
                                }
                            }_context.next = 13;return (

                                think.model('article', think.config("db")).where(where).limit(limit).order(type).select());case 13:article = _context.sent;

                            context.ctx[data] = article;return _context.abrupt('return',
                            callback(null, ''));case 16:case 'end':return _context.stop();}}}, _callee, this);}));return function (_x, _x2, _x3) {return _ref.apply(this, arguments);};}();

};

/**
   8条最新主题帖
   {% topic data = "topicList",limit= "8"%}
   
   8条最热题帖
   {% topic data = "topicList",limit= "8",type="hot" %}
   
   */


global.topic = function () {
    this.tags = ['topic'];
    this.parse = function (parser, nodes, lexer) {
        var tok = parser.nextToken();
        var args = parser.parseSignature(null, true);
        parser.advanceAfterBlockEnd(tok.value);
        return new nodes.CallExtensionAsync(this, 'run', args);
    };
    this.run = function () {var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(context, args, callback) {var where, data, limit, item, type, topic;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                            where = {};
                            data = think.isEmpty(args.data) ? "data" : args.data;
                            limit = think.isEmpty(args.limit) ? "10" : args.limit;

                            //主题分类item
                            item = think.isEmpty(args.item) ? false : { 'item': ['=', args.item] };
                            if (item) {
                                where = think.extend({}, where, item);
                            }

                            // order by
                            type = 'mytime DESC';
                            if (!think.isEmpty(args.type)) {
                                if (args.type == "hot") {
                                    type = "view DESC";
                                }
                            }_context2.next = 9;return (

                                think.model('topic', think.config("db")).field("*,li_topic.id as tid,li_topic.createtime as mytime").join({
                                    user: { on: "author,name" },
                                    topic_item: { on: "item,name" } }).
                                where(where).limit(limit).order(type).select());case 9:topic = _context2.sent;
                            //

                            context.ctx[data] = topic;return _context2.abrupt('return',
                            callback(null, ''));case 12:case 'end':return _context2.stop();}}}, _callee2, this);}));return function (_x4, _x5, _x6) {return _ref3.apply(this, arguments);};}();

};
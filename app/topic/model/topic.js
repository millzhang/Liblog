'use strict';
/**
               * model
               */exports.__esModule = true;var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_think$model$base) {(0, _inherits3.default)(_class, _think$model$base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _think$model$base.apply(this, arguments));}


    //返回全部列表
    _class.prototype.findAll = function findAll(db, where) {
        return this.model(db).where(where).select();
    };
    //返回特定记录
    _class.prototype.findOne = function findOne(db, where) {
        return this.model(db).where(where).find();
    };
    //更新数据
    _class.prototype.updateRecord = function updateRecord(db, where, data) {
        return this.model(db).where(where).update(data);
    };
    //添加数据
    _class.prototype.addRecord = function addRecord(db, data) {
        return this.model(db).add(data);
    };_class.prototype.

    getTopicOneJoinRecord = function getTopicOneJoinRecord(tid) {
        return this.model('topic').field("*,li_topic.id as tid").where({ tid: tid }).join({
            topic_item: { on: "item,name" } }).
        find();
    };_class.prototype.

    getReplyListInfo = function getReplyListInfo(where) {
        return this.model('topic_comment').field("*,li_topic_comment.id as tid,li_topic_comment.createtime as mytime").where(where).join({
            user: { on: "author,name" } }).
        select();
    };_class.prototype.

    getTopicListJoinRecord = function getTopicListJoinRecord(where) {
        return this.model('topic').field("*,li_topic.id as tid,li_topic.createtime as mytime").join({
            user: { on: "author,name" },
            topic_item: { on: "item,name" } }).
        where(where).order("mytime DESC").select();
    };

    //分页初始数据
    _class.prototype.getPageSelect = function getPageSelect(where, page, pagesize) {
        return this.model('topic').field("*,li_topic.id as tid").join({
            user: { on: "author,name" },
            topic_item: { on: "item,name" } }).
        where(where).order("li_topic.createtime DESC").page(page, pagesize).select();
    };
    //分页thinkjs分页数据
    _class.prototype.getPageCountSelect = function getPageCountSelect(where, page, pagesize) {
        return this.model('topic').field("*,li_topic.id as tid").join({
            user: { on: "author,name" },
            topic_item: { on: "item,name" } }).
        where(where).order("li_topic.createtime DESC").page(page, pagesize).countSelect();
    };_class.prototype.

    getMemberList = function getMemberList(where, limit) {
        return this.model('user').where(where).order("createtime DESC").limit(limit).select();
    };_class.prototype.

    decrepoint = function decrepoint(where, count) {
        return this.model("user").where(where).decrement('point', count);
    };_class.prototype.

    increpoint = function increpoint(where, count) {
        return this.model("user").where(where).increment('point', count);
    };_class.prototype.

    getUserPic = function getUserPic(where) {
        return this.model("user").field("pic").where(where).find();
    };
    //获取排序后的列表
    _class.prototype.getOrderList = function getOrderList(db, where) {
        return this.model(db).where(where).order("orders").select();
    };return _class;}(think.model.base);exports.default = _class;
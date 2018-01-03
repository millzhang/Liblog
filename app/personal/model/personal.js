'use strict';
/**
               * model
               */exports.__esModule = true;var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_think$model$base) {(0, _inherits3.default)(_class, _think$model$base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _think$model$base.apply(this, arguments));}


    //保存用户信息
    _class.prototype.saveUserInfo = function saveUserInfo(data, where) {
        return this.model('user').where(where).update(data);
    };

    //查找用户
    _class.prototype.findUser = function findUser(where) {
        return this.model('user').where(where).select();
    };

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
    };

    //添加数据
    _class.prototype.deleteRecord = function deleteRecord(db, where) {
        return this.model(db).where(where).delete();
    };_class.prototype.

    decrepoint = function decrepoint(where, count) {
        return this.model("user").where(where).decrement('point', count);
    };_class.prototype.

    increpoint = function increpoint(where, count) {
        return this.model("user").where(where).increment('point', count);
    };_class.prototype.

    getMytopic = function getMytopic(where) {
        return this.model('topic').field("*,li_topic.id as tid,li_topic.createtime as mytime").join({
            user: { on: "author,name" } }).
        where(where).select();
    };_class.prototype.

    getMycollect = function getMycollect(where) {
        return this.model('user_collect').field("*,li_user_collect.createtime as mytime").join({
            user: { on: "author,name" } }).
        where(where).select();
    };

    // 积分排行
    _class.prototype.getPointList = function getPointList() {
        return this.model('user').field("id,name,point").order("point desc").limit(10).select();
    };

    // 所有积分排行
    _class.prototype.getAllPoint = function getAllPoint() {
        return this.model('user').field("id,point").order("point desc").select();
    };

    //获取排序后的列表
    _class.prototype.getOrderList = function getOrderList(db, where) {
        return this.model(db).where(where).order("orders").select();
    };return _class;}(think.model.base);exports.default = _class;
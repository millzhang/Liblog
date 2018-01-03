'use strict';
/**
               * model
               */exports.__esModule = true;var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_think$model$base) {(0, _inherits3.default)(_class, _think$model$base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _think$model$base.apply(this, arguments));}


    // 添加新用户
    _class.prototype.addUser = function addUser(data) {
        return this.model('user').add(data);
    };
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
    //返回文章列表
    _class.prototype.getArticleList = function getArticleList(where) {
        return this.model("article").where(where).order("createtime DESC").limit(5).select();
    };
    //返回点击排行列表
    _class.prototype.getPopularList = function getPopularList(where) {
        return this.model("article").where(where).order("view DESC").limit(5).select();
    };
    //返回点击排行列表
    _class.prototype.addViewCount = function addViewCount(where) {
        return this.model("article").where(where).increment('view', 1);
    };
    //分页初始数据
    _class.prototype.getPageSelect = function getPageSelect(where, page, pagesize) {
        return this.model("article").where(where).order("createtime DESC").page(page, pagesize).select();
    };
    //分页thinkjs分页数据
    _class.prototype.getPageCountSelect = function getPageCountSelect(where, page, pagesize) {
        return this.model("article").where(where).order("createtime DESC").page(page, pagesize).countSelect();
    };
    //获取排序后的列表
    _class.prototype.getOrderList = function getOrderList(db, where) {
        return this.model(db).where(where).order("orders").select();
    };return _class;}(think.model.base);exports.default = _class;
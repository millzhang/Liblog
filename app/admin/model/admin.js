'use strict';
/**
               * model
               */exports.__esModule = true;var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_think$model$base) {(0, _inherits3.default)(_class, _think$model$base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _think$model$base.apply(this, arguments));}


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

    //删除数据
    _class.prototype.deleteRecord = function deleteRecord(db, where) {
        return this.model(db).where(where).delete();
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

    //获取文章关联表记录
    _class.prototype.getArticleJoinRecord = function getArticleJoinRecord(where, page, pagesize) {
        return this.model("article").field("*,li_article.id as aid").join({
            tags: { on: "tag, id" },
            item: { on: ["item", "id"] } }).
        where(where).page(page, pagesize).order("createtime DESC").select();
    };

    //获取草稿箱关联表记录
    _class.prototype.getDraftJoinRecord = function getDraftJoinRecord(join, where, page, pagesize) {
        return this.model("article").field("*,li_article.id as aid").join(join).where(where).page(page, pagesize).order("createtime DESC").select();
    };

    //获取权限关联表记录
    _class.prototype.getRoleJoinRecord = function getRoleJoinRecord(join, page, pagesize) {
        return this.model("manage_permission").field("*,li_manage_permission.id as pid").join(join).page(page, pagesize).select();
    };

    //获取用户关联表记录
    _class.prototype.getUserJoinRecord = function getUserJoinRecord(join, where) {
        return this.model('user').join(join).where(where).find();
    };

    //获取用户列表关联表记录
    _class.prototype.getUserListJoinRecord = function getUserListJoinRecord(where, page, pagesize) {
        return this.model('user').field("*,li_user.id as uid").join({
            manage_role: { on: "role, id" } }).
        where(where).page(page, pagesize).select();
    };

    //获取主题列表关联表记录
    _class.prototype.getTopicListJoinRecord = function getTopicListJoinRecord(page, pagesize) {
        return this.model('topic').page(page, pagesize).select();
    };return _class;}(think.model.base);exports.default = _class;
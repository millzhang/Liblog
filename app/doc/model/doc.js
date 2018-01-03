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
    };_class.prototype.
    getOneArticle = function getOneArticle(db, where) {
        return this.model(db).where(where).find();
    };
    //获取排序后的列表
    _class.prototype.getOrderList = function getOrderList(db, where) {
        return this.model(db).where(where).order("orders").select();
    };return _class;}(think.model.base);exports.default = _class;
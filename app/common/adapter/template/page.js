'use strict';
/**
               * base adapter
               */exports.__esModule = true;var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_think$adapter$base) {(0, _inherits3.default)(_class, _think$adapter$base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _think$adapter$base.apply(this, arguments));}

    /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * init
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @return {[]}         []
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */

    // let userList=await this.model("user").page(this.get("page"), this.get("pagesize")).select();
    // let result = await this.model("user").page(this.get('page'),this.get('pagesize')).countSelect();
    // let Page=think.adapter("template", "page");
    // let page = new Page(this.http);
    // let pageData=page.pagination(result);
    // this.assign("nameList",userList);
    // this.assign('pageData',pageData);
    _class.prototype.init = function init(http) {
        _think$adapter$base.prototype.init.call(this, http);
        this.http = http;
    };_class.prototype.
    pagination = function pagination(pageData, pageNumber) {
        var page = '';
        if (pageNumber) {
            page = pageNumber;
        } else {
            page = this.http.get("page") || 1;
        }
        var nextclass = '',preclass = '',nextlink = '',prelink = '';
        if (page) {

            //下一页判断
            if (pageData.currentPage === pageData.totalPages) {
                nextclass = 'disabled';
                nextlink = 'javascript:void(0)';
            } else {
                var nextpage = pageData.currentPage + 1;
                nextclass = '';
                nextlink = '?page=' + nextpage + '&pagesize=' + pageData.numsPerPage;
            }
            //上一页判断
            if (pageData.currentPage === 1) {
                preclass = 'disabled';
                prelink = 'javascript:void(0)';
            } else {
                var prepage = pageData.currentPage - 1;
                preclass = '';
                prelink = '?page=' + prepage + '&pagesize=' + pageData.numsPerPage;
            }

            //很多页时的显示
            var pageStart = 1,pageNum = 6,pageEnd = void 0,pageNow = pageData.currentPage;
            if (pageNow <= pageNum / 2 + 1) {
                pageStart = 1;
                pageEnd = pageNum;
            } else {
                pageStart = pageNow - pageNum / 2;
                pageEnd = pageNow + pageNum / 2 - 1;
            }
            if (pageEnd > pageData.totalPages) {
                pageEnd = pageData.totalPages;
            }
            if (pageEnd <= pageNum) {
                pageStart = 1;
            }

            //返回数据
            return {
                "pageStart": pageStart,
                "pageEnd": pageEnd,
                "nextclass": nextclass,
                "preclass": preclass,
                "nextlink": nextlink,
                "prelink": prelink,
                "count": pageData.count,
                "totalPages": pageData.totalPages,
                "numsPerPage": pageData.numsPerPage,
                "currentPage": pageData.currentPage };

        }
    };return _class;}(think.adapter.base);exports.default = _class;
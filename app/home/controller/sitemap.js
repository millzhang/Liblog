'use strict';exports.__esModule = true;

var _fs = require('fs');var _fs2 = _interopRequireDefault(_fs);
var _path = require('path');var _path2 = _interopRequireDefault(_path);
var _base = require('./base.js');var _base2 = _interopRequireDefault(_base);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var Create = {};
/**
                                                                                                                                                                                           * 生成xml地图
                                                                                                                                                                                           * @param  {object} data 数据包 {article: [], list: [], search: []}
                                                                                                                                                                                           */
Create.createXml = function (data) {

    var arr = [];
    // let now = think.datatime(new Date(), 'yyyy-MM-dd');
    var now = think.datetime(new Date(), 'YYYY-MM-DD');
    arr.push('<?xml version="1.0" encoding="UTF-8"?>');
    arr.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');


    // 添加主页
    arr.push('<url>');
    arr.push('<loc>' + data.homeurl + '</loc>');
    arr.push('<lastmod>' + now + '</lastmod>');
    arr.push('<changefreq>always</changefreq>');
    arr.push('<priority>1.0</priority>');
    arr.push('</url>');

    //添加列表
    // console.log(data.list);
    data.list.forEach(function (val) {
        arr.push('<url>');
        arr.push('<loc>' + data.homeurl + 'category/' + val.id + '.html' + '</loc>');
        arr.push('<lastmod>' + now + '</lastmod>');
        arr.push('<changefreq>always</changefreq>');
        arr.push('<priority>0.9</priority>');
        arr.push('</url>');
    });

    //添加文章
    data.article.forEach(function (val) {
        arr.push('<url>');
        arr.push('<loc>' + data.homeurl + 'page/' + val.id + '.html' + '</loc>');
        arr.push('<lastmod>' + think.datetime(val.createtime, 'YYYY-MM-DD') + '</lastmod>');
        arr.push('<changefreq>always</changefreq>');
        arr.push('<priority>0.8</priority>');
        arr.push('</url>');
    });

    //添加主题
    data.topic.forEach(function (val) {
        arr.push('<url>');
        arr.push('<loc>' + data.homeurl + 'topic/item/' + val.id + '.html' + '</loc>');
        arr.push('<lastmod>' + think.datetime(val.updatetime, 'YYYY-MM-DD') + '</lastmod>');
        arr.push('<changefreq>always</changefreq>');
        arr.push('<priority>0.8</priority>');
        arr.push('</url>');
    });

    //添加个人主页
    data.user.forEach(function (val) {
        arr.push('<url>');
        arr.push('<loc>' + data.homeurl + 'personal/@' + val.name + '</loc>');
        arr.push('<lastmod>' + think.datetime(val.createtime, 'YYYY-MM-DD') + '</lastmod>');
        arr.push('<changefreq>always</changefreq>');
        arr.push('<priority>0.8</priority>');
        arr.push('</url>');
    });

    //添加其他页面
    data.others.forEach(function (val) {
        arr.push('<url>');
        arr.push('<loc>' + data.homeurl + val.url + '</loc>');
        arr.push('<lastmod>' + now + '</lastmod>');
        arr.push('<changefreq>always</changefreq>');
        arr.push('<priority>0.8</priority>');
        arr.push('</url>');
    });

    arr.push('</urlset>');
    _fs2.default.writeFileSync(_path2.default.resolve(think.ROOT_PATH, './www/sitemap.xml'), arr.join('\n'));
};exports.default =
Create;
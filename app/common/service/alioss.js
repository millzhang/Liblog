'use strict';exports.__esModule = true;var _promise = require('babel-runtime/core-js/promise');var _promise2 = _interopRequireDefault(_promise);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);
var _path = require('path');var _path2 = _interopRequireDefault(_path);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _class = function (_think$service$base) {(0, _inherits3.default)(_class, _think$service$base);function _class() {(0, _classCallCheck3.default)(this, _class);return (0, _possibleConstructorReturn3.default)(this, _think$service$base.apply(this, arguments));}

    /**
                                                                                                                                                                                                                                                                                                                                                                                                                                          * init
                                                                                                                                                                                                                                                                                                                                                                                                                                          * @return {}         []
                                                                                                                                                                                                                                                                                                                                                                                                                                          */_class.prototype.
    init = function init(http) {
        _think$service$base.prototype.init.call(this, http);
    };
    //初始化
    _class.prototype.upload = function upload(imgobj) {
        var co = require('co');
        var OSS = require('ali-oss');
        var client = new OSS.Wrapper({
            region: think.config('OSS.region'),
            accessKeyId: think.config('OSS.accessKeyId'),
            accessKeySecret: think.config('OSS.accessKeySecret'),
            bucket: think.config('OSS.bucket') });

        var filepath = imgobj.path;
        var basename = _path2.default.basename(filepath);
        var newpath = liFormatDate(new Date().toLocaleDateString());
        var uploadPath = think.config('OSS.img_url') + newpath + basename;

        return new _promise2.default(function (resolve, reject) {
            var result = client.put(uploadPath, filepath);
            if (result) {
                resolve(result);
            } else {
                reject(err);
            }
        });
    };return _class;}(think.service.base);exports.default = _class;
/**
 * 弹窗提示-by zcl
 * @todo 提供各种提示弹窗，可自行消失
 * @param config 配置项，可自行添加相关配置，现有配置如下：
 *               1. type, 弹窗类型：默认为‘info’,表示普通提示，目前可选值有‘info’、‘success’
 *               2. title, 弹窗标题，默认为'提示信息'
 *               3. msg, 弹窗信息
 *               4. timeout, 弹窗自动消失时间
 *               5. background, 弹窗主体背景色
 */

;(function(win, doc) {
    var win = win;
    var doc = doc;

    function show_layer(config) {
        this.type = config.type || 'info';
        this.title = config.title || '提示信息';
        this.msg = config.msg;
        this.timeout = config.timeout || 3000;
        this.background = config.background || 'rgba(0, 0, 0, .3)';
        this.initDomFunc();
        this.destroyDom();
    }

    show_layer.prototype = {
        constructor: show_layer,
        initDomFunc: function() {
            var _this = this;
            var dom = doc.createElement('div');
            dom.className = 'w-layer';
            dom.innerHTML = '<div class="w-layer-content" style="background: '+_this.background+'">'+
                                '<i class="icon icon-type icon-'+_this.type+'"></i>'+
                                '<h4 class="title">'+_this.title+'</h4>'+
                                '<p class="msg">'+_this.msg+'</p>'+
                            '</div>';
            doc.body.appendChild(dom);
        },
        destroyDom: function() {
            var _this = this;
            var dom = doc.querySelector('.w-layer');
            setTimeout(() => {
                doc.body.removeChild(dom);
            }, _this.timeout);
        }
    }

    if (typeof exports == "object") {
		module.exports = show_layer;
	} else if (typeof define == "function" && define.amd) {
		define([], function () {
			return show_layer;
		})
	} else {
		win.show_layer = show_layer;
	}
})(window, document);

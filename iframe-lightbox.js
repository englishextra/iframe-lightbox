/*!
 * modified Simple lightbox effect in pure JS
 * @see {@link https://github.com/squeral/lightbox}
 * @see {@link https://github.com/squeral/lightbox/blob/master/lightbox.js}
 * @params {Object} elem Node element
 * new IframeLightbox(elem)
 * passes jshint
 */
(function (root) {
	"use strict";
	var d = document,
	aEL = "addEventListener",
	gEBI = "getElementById",
	gEBCN = "getElementsByClassName",
	cE = "createElement",
	cL = "classList",
	aC = "appendChild",
	dS = "dataset",
	containerClass = "iframe-lightbox",
	isLoadedClass = "is-loaded",
	isOpenedClass = "is-opened",
	isShowingClass = "is-showing";
	var IframeLightbox = function (elem) {
		this.trigger = elem;
		this.el = d[gEBCN](containerClass)[0] || "";
		this.body = this.el ? this.el[gEBCN]("body")[0] : "";
		this.content = this.el ? this.el[gEBCN]("content")[0] : "";
		this.href = elem[dS].src || "";
		this.paddingBottom = elem[dS].paddingBottom || "";

		this.init();
	};
	IframeLightbox.prototype.init = function () {
		var _this = this;
		if (!this.el)
			this.create();
		this.trigger[aEL]("click", function (e) {
			e.preventDefault();
			_this.open();
		});
	};
	IframeLightbox.prototype.create = function () {
		var _this = this,
		bd = d[cE]("div");
		this.el = d[cE]("div");
		this.content = d[cE]("div");
		this.body = d[cE]("div");
		this.el[cL].add(containerClass);
		bd[cL].add("backdrop");
		this.content[cL].add("content");
		this.body[cL].add("body");
		this.el[aC](bd);
		this.content[aC](this.body);
		this.content_holder = d[cE]("div");
		this.content_holder[cL].add("content-holder");
		this.content_holder[aC](this.content);
		this.el[aC](this.content_holder);
		d.body[aC](this.el);
		bd[aEL]("click", function () {
			_this.close();
		});
		var f = function (e) {
			if (_this.isOpen())
				return;
			_this.el[cL].remove(isShowingClass);
			_this.body.innerHTML = "";
		};
		this.el[aEL]("transitionend", f, false);
		this.el[aEL]("webkitTransitionEnd", f, false);
		this.el[aEL]("mozTransitionEnd", f, false);
		this.el[aEL]("msTransitionEnd", f, false);
	};
	IframeLightbox.prototype.loadIframe = function () {
		this.iframeId = containerClass + Date.now();
		this.body.innerHTML = '<iframe src="' + this.href + '" name="' + this.iframeId + '" id="' + this.iframeId + '" onload="this.style.opacity=1;" style="opacity:0;border:none;" scrolling="no" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" height="166" frameborder="no"></iframe>';

		(function(iframeId, body){
			d[gEBI](iframeId).onload = function () {
				this.style.opacity = 1;
				body[cL].add(isLoadedClass);
			};
		})(this.iframeId, this.body);
	};
	IframeLightbox.prototype.open = function () {
		this.loadIframe();
		if (this.paddingBottom) {
			this.content.style.paddingBottom = this.paddingBottom;
		} else {
			this.content.removeAttribute("style");
		}
		this.el[cL].add(isShowingClass);
		this.el[cL].add(isOpenedClass);
	};
	IframeLightbox.prototype.close = function () {
		this.el[cL].remove(isOpenedClass);
		this.body[cL].remove(isLoadedClass);
	};
	IframeLightbox.prototype.isOpen = function () {
		return this.el[cL].contains(isOpenedClass);
	};
	root.IframeLightbox = IframeLightbox;
})("undefined" !== typeof window ? window : this);

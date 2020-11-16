/*!
 * @see {@link https://github.com/englishextra/iframe-lightbox}
 * modified Simple lightbox effect in pure JS
 * @see {@link https://github.com/squeral/lightbox}
 * @see {@link https://github.com/squeral/lightbox/blob/master/lightbox.js}
 * @params {Object} elem Node element
 * @params {Object} settings object
 * el.lightbox = new IframeLightbox(elem, settings)
 * passes jshint
 */

/*jslint browser: true */

/*jslint node: true */

/*jshint -W014 */
(function(root, document) {
	"use strict";

	var docElem = document.documentElement || "";
	var docBody = document.body || "";
	var containerClass = "iframe-lightbox";
	var iframeLightboxWindowIsBindedClass = "iframe-lightbox-window--is-binded";
	var iframeLightboxOpenClass = "iframe-lightbox--open";
	var iframeLightboxLinkIsBindedClass = "iframe-lightbox-link--is-binded";
	var isLoadedClass = "is-loaded";
	var isOpenedClass = "is-opened";
	var isShowingClass = "is-showing";
	var isMobile = navigator.userAgent.match(
		/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i
	);
	var isTouch =
		isMobile !== null ||
		document.createTouch !== undefined ||
		"ontouchstart" in root ||
		"onmsgesturechange" in root ||
		navigator.msMaxTouchPoints;

	var IframeLightbox = function IframeLightbox(elem, settings) {
		var options = settings || {};
		this.trigger = elem;
		this.el = document.getElementsByClassName(containerClass)[0] || "";
		this.body = this.el ? this.el.getElementsByClassName("body")[0] : "";
		this.content = this.el
			? this.el.getElementsByClassName("content")[0]
			: "";
		this.src = elem.dataset.src || "";
		this.href = elem.getAttribute("href") || "";
		this.dataPaddingBottom = elem.dataset.paddingBottom || "";
		this.dataScrolling = elem.dataset.scrolling || "";
		this.dataTouch = elem.dataset.touch || "";
		this.rate = options.rate || 500;
		this.scrolling = options.scrolling;
		this.touch = options.touch;
		this.onOpened = options.onOpened;
		this.onIframeLoaded = options.onIframeLoaded;
		this.onLoaded = options.onLoaded;
		this.onCreated = options.onCreated;
		this.onClosed = options.onClosed;
		this.init();
	};

	IframeLightbox.prototype.init = function () {
		var _this = this;

		if (!this.el) {
			this.create();
		}

		var debounce = function debounce(func, wait) {
			var timeout, args, context, timestamp;
			return function () {
				context = this;
				args = [].slice.call(arguments, 0);
				timestamp = new Date();

				var later = function later() {
					var last = new Date() - timestamp;

					if (last < wait) {
						timeout = setTimeout(later, wait - last);
					} else {
						timeout = null;
						func.apply(context, args);
					}
				};

				if (!timeout) {
					timeout = setTimeout(later, wait);
				}
			};
		};

		var logic = function logic() {
			_this.open();
		};

		var handleIframeLightboxLink = function handleIframeLightboxLink(e) {
			e.stopPropagation();
			e.preventDefault();
			debounce(logic, this.rate).call();
		};

		if (!this.trigger.classList.contains(iframeLightboxLinkIsBindedClass)) {
			this.trigger.classList.add(iframeLightboxLinkIsBindedClass);
			this.trigger.addEventListener("click", handleIframeLightboxLink);

			if (isTouch && (_this.touch || _this.dataTouch)) {
				this.trigger.addEventListener(
					"touchstart",
					handleIframeLightboxLink
				);
			}
		}
	};

	IframeLightbox.prototype.create = function () {
		var _this = this,
			backdrop = document.createElement("div");

		backdrop.classList.add("backdrop");
		this.el = document.createElement("div");
		this.el.classList.add(containerClass);
		this.el.appendChild(backdrop);
		this.content = document.createElement("div");
		this.content.classList.add("content");
		this.body = document.createElement("div");
		this.body.classList.add("body");
		this.content.appendChild(this.body);
		this.contentHolder = document.createElement("div");
		this.contentHolder.classList.add("content-holder");
		this.contentHolder.appendChild(this.content);
		this.el.appendChild(this.contentHolder);
		this.btnClose = document.createElement("button");
		this.btnClose.classList.add("btn-close");

		this.el.appendChild(this.btnClose);
		docBody.appendChild(this.el);
		backdrop.addEventListener("click", function () {
			_this.close();
		});
		this.btnClose.addEventListener("click", function () {
			_this.close();
		});

		if (!docElem.classList.contains(iframeLightboxWindowIsBindedClass)) {
			docElem.classList.add(iframeLightboxWindowIsBindedClass);
			root.addEventListener("keyup", function(ev) {
				if (27 === (ev.which || ev.keyCode)) {
					_this.close();
				}
			});
		}

		var clearBody = function clearBody() {
			if (_this.isOpen()) {
				return;
			}

			_this.el.classList.remove(isShowingClass);

			_this.body.innerHTML = "";
		};

		this.el.addEventListener("transitionend", clearBody, false);
		this.el.addEventListener("webkitTransitionEnd", clearBody, false);
		this.el.addEventListener("mozTransitionEnd", clearBody, false);
		this.el.addEventListener("msTransitionEnd", clearBody, false);
		this.callCallback(this.onCreated, this);
	};

	IframeLightbox.prototype.loadIframe = function () {
		var _this = this;

		this.iframeId = containerClass + Date.now();
		this.iframeSrc = this.src || this.href || "";
		var html = [];
		html.push(
			'<iframe src="' +
				this.iframeSrc +
				'" name="' +
				this.iframeId +
				'" id="' +
				this.iframeId +
				'" onload="this.style.opacity=1;" style="opacity:0;border:none;" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" height="166" frameborder="no"></iframe>'
		);
		html.push(
			'<div class="half-circle-spinner"><div class="circle circle-1"></div><div class="circle circle-2"></div></div>'
		);
		this.body.innerHTML = html.join("");

		(function(iframeId, body) {
			var iframe = document.getElementById(iframeId);

			iframe.onload = function () {
				this.style.opacity = 1;
				body.classList.add(isLoadedClass);

				if (_this.scrolling || _this.dataScrolling) {
					iframe.removeAttribute("scrolling");
					iframe.style.overflow = "scroll";
				} else {
					iframe.setAttribute("scrolling", "no");
					iframe.style.overflow = "hidden";
				}

				_this.callCallback(_this.onIframeLoaded, _this);

				_this.callCallback(_this.onLoaded, _this);
			};
		})(this.iframeId, this.body);
	};

	IframeLightbox.prototype.open = function () {
		this.loadIframe();

		if (this.dataPaddingBottom) {
			this.content.style.paddingBottom = this.dataPaddingBottom;
		} else {
			this.content.removeAttribute("style");
		}

		this.el.classList.add(isShowingClass);
		this.el.classList.add(isOpenedClass);
		docElem.classList.add(iframeLightboxOpenClass);
		docBody.classList.add(iframeLightboxOpenClass);
		this.callCallback(this.onOpened, this);
	};

	IframeLightbox.prototype.close = function () {
		this.el.classList.remove(isOpenedClass);
		this.body.classList.remove(isLoadedClass);
		docElem.classList.remove(iframeLightboxOpenClass);
		docBody.classList.remove(iframeLightboxOpenClass);
		this.callCallback(this.onClosed, this);
	};

	IframeLightbox.prototype.isOpen = function () {
		return this.el.classList.contains(isOpenedClass);
	};

	IframeLightbox.prototype.callCallback = function (func, data) {
		if (typeof func !== "function") {
			return;
		}

		var caller = func.bind(this);
		caller(data);
	};

	root.IframeLightbox = IframeLightbox;
})("undefined" !== typeof window ? window : this, document);

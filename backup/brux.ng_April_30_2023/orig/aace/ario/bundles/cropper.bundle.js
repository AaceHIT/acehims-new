! function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : e((t = t || self).jQuery)
}(this, function(l) {
	"use strict";

	function e(t) {
		return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function n(t, e) {
		for (var i = 0; i < e.length; i++) {
			var a = e[i];
			a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
		}
	}

	function i(e, t) {
		var i = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var a = Object.getOwnPropertySymbols(e);
			t && (a = a.filter(function(t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable
			})), i.push.apply(i, a)
		}
		return i
	}

	function k(n) {
		for (var t = 1; t < arguments.length; t++) {
			var o = null != arguments[t] ? arguments[t] : {};
			t % 2 ? i(o, !0).forEach(function(t) {
				var e, i, a;
				e = n, a = o[i = t], i in e ? Object.defineProperty(e, i, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[i] = a
			}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : i(o).forEach(function(t) {
				Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(o, t))
			})
		}
		return n
	}

	function bt(t) {
		return function(t) {
			if (Array.isArray(t)) {
				for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
				return i
			}
		}(t) || function(t) {
			if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
		}(t) || function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance")
		}()
	}
	l = l && l.hasOwnProperty("default") ? l.default : l;
	var o = "undefined" != typeof window && void 0 !== window.document,
		r = o ? window : {},
		t = !!o && "ontouchstart" in r.document.documentElement,
		a = !!o && "PointerEvent" in r,
		d = "cropper",
		O = "all",
		T = "crop",
		E = "move",
		W = "zoom",
		N = "e",
		H = "w",
		L = "s",
		z = "n",
		Y = "ne",
		X = "nw",
		R = "se",
		j = "sw",
		h = "".concat(d, "-crop"),
		s = "".concat(d, "-disabled"),
		A = "".concat(d, "-hidden"),
		p = "".concat(d, "-hide"),
		u = "".concat(d, "-invisible"),
		c = "".concat(d, "-modal"),
		m = "".concat(d, "-move"),
		g = "".concat(d, "Action"),
		f = "".concat(d, "Preview"),
		v = "crop",
		w = "move",
		b = "none",
		y = "crop",
		x = "cropend",
		M = "cropmove",
		C = "cropstart",
		D = "dblclick",
		B = a ? "pointerdown" : t ? "touchstart" : "mousedown",
		S = a ? "pointermove" : t ? "touchmove" : "mousemove",
		P = a ? "pointerup pointercancel" : t ? "touchend touchcancel" : "mouseup",
		I = "zoom",
		U = "image/jpeg",
		q = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,
		$ = /^data:/,
		Q = /^data:image\/jpeg;base64,/,
		K = /^img|canvas$/i,
		Z = {
			viewMode: 0,
			dragMode: v,
			initialAspectRatio: NaN,
			aspectRatio: NaN,
			data: null,
			preview: "",
			responsive: !0,
			restore: !0,
			checkCrossOrigin: !0,
			checkOrientation: !0,
			modal: !0,
			guides: !0,
			center: !0,
			highlight: !0,
			background: !0,
			autoCrop: !0,
			autoCropArea: .8,
			movable: !0,
			rotatable: !0,
			scalable: !0,
			zoomable: !0,
			zoomOnTouch: !0,
			zoomOnWheel: !0,
			wheelZoomRatio: .1,
			cropBoxMovable: !0,
			cropBoxResizable: !0,
			toggleDragModeOnDblclick: !0,
			minCanvasWidth: 0,
			minCanvasHeight: 0,
			minCropBoxWidth: 0,
			minCropBoxHeight: 0,
			minContainerWidth: 200,
			minContainerHeight: 100,
			ready: null,
			cropstart: null,
			cropmove: null,
			cropend: null,
			crop: null,
			zoom: null
		},
		F = Number.isNaN || r.isNaN;

	function G(t) {
		return "number" == typeof t && !F(t)
	}
	var V = function(t) {
		return 0 < t && t < 1 / 0
	};

	function J(t) {
		return void 0 === t
	}

	function _(t) {
		return "object" === e(t) && null !== t
	}
	var tt = Object.prototype.hasOwnProperty;

	function et(t) {
		if (!_(t)) return !1;
		try {
			var e = t.constructor,
				i = e.prototype;
			return e && i && tt.call(i, "isPrototypeOf")
		} catch (t) {
			return !1
		}
	}

	function it(t) {
		return "function" == typeof t
	}
	var at = Array.prototype.slice;

	function nt(t) {
		return Array.from ? Array.from(t) : at.call(t)
	}

	function ot(i, a) {
		return i && it(a) && (Array.isArray(i) || G(i.length) ? nt(i).forEach(function(t, e) {
			a.call(i, t, e, i)
		}) : _(i) && Object.keys(i).forEach(function(t) {
			a.call(i, i[t], t, i)
		})), i
	}
	var rt = Object.assign || function(i) {
			for (var t = arguments.length, e = new Array(1 < t ? t - 1 : 0), a = 1; a < t; a++) e[a - 1] = arguments[a];
			return _(i) && 0 < e.length && e.forEach(function(e) {
				_(e) && Object.keys(e).forEach(function(t) {
					i[t] = e[t]
				})
			}), i
		},
		ht = /\.\d*(?:0|9){12}\d*$/;

	function yt(t) {
		var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1e11;
		return ht.test(t) ? Math.round(t * e) / e : t
	}
	var st = /^width|height|left|top|marginLeft|marginTop$/;

	function ct(t, e) {
		var i = t.style;
		ot(e, function(t, e) {
			st.test(e) && G(t) && (t = "".concat(t, "px")), i[e] = t
		})
	}

	function lt(t, e) {
		if (e)
			if (G(t.length)) ot(t, function(t) {
				lt(t, e)
			});
			else if (t.classList) t.classList.add(e);
		else {
			var i = t.className.trim();
			i ? i.indexOf(e) < 0 && (t.className = "".concat(i, " ").concat(e)) : t.className = e
		}
	}

	function dt(t, e) {
		e && (G(t.length) ? ot(t, function(t) {
			dt(t, e)
		}) : t.classList ? t.classList.remove(e) : 0 <= t.className.indexOf(e) && (t.className = t.className.replace(e, "")))
	}

	function pt(t, e, i) {
		e && (G(t.length) ? ot(t, function(t) {
			pt(t, e, i)
		}) : i ? lt(t, e) : dt(t, e))
	}
	var ut = /([a-z\d])([A-Z])/g;

	function mt(t) {
		return t.replace(ut, "$1-$2").toLowerCase()
	}

	function gt(t, e) {
		return _(t[e]) ? t[e] : t.dataset ? t.dataset[e] : t.getAttribute("data-".concat(mt(e)))
	}

	function ft(t, e, i) {
		_(i) ? t[e] = i : t.dataset ? t.dataset[e] = i : t.setAttribute("data-".concat(mt(e)), i)
	}
	var vt = /\s\s*/,
		wt = function() {
			var t = !1;
			if (o) {
				var e = !1,
					i = function() {},
					a = Object.defineProperty({}, "once", {
						get: function() {
							return t = !0, e
						},
						set: function(t) {
							e = t
						}
					});
				r.addEventListener("test", i, a), r.removeEventListener("test", i, a)
			}
			return t
		}();

	function xt(i, t, a) {
		var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {},
			o = a;
		t.trim().split(vt).forEach(function(t) {
			if (!wt) {
				var e = i.listeners;
				e && e[t] && e[t][a] && (o = e[t][a], delete e[t][a], 0 === Object.keys(e[t]).length && delete e[t], 0 === Object.keys(e).length && delete i.listeners)
			}
			i.removeEventListener(t, o, n)
		})
	}

	function Mt(o, t, r) {
		var h = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {},
			s = r;
		t.trim().split(vt).forEach(function(a) {
			if (h.once && !wt) {
				var t = o.listeners,
					n = void 0 === t ? {} : t;
				s = function() {
					delete n[a][r], o.removeEventListener(a, s, h);
					for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
					r.apply(o, e)
				}, n[a] || (n[a] = {}), n[a][r] && o.removeEventListener(a, n[a][r], h), n[a][r] = s, o.listeners = n
			}
			o.addEventListener(a, s, h)
		})
	}

	function Ct(t, e, i) {
		var a;
		return it(Event) && it(CustomEvent) ? a = new CustomEvent(e, {
			detail: i,
			bubbles: !0,
			cancelable: !0
		}) : (a = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, i), t.dispatchEvent(a)
	}

	function Dt(t) {
		var e = t.getBoundingClientRect();
		return {
			left: e.left + (window.pageXOffset - document.documentElement.clientLeft),
			top: e.top + (window.pageYOffset - document.documentElement.clientTop)
		}
	}
	var Bt = r.location,
		kt = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;

	function Ot(t) {
		var e = t.match(kt);
		return null !== e && (e[1] !== Bt.protocol || e[2] !== Bt.hostname || e[3] !== Bt.port)
	}

	function Tt(t) {
		var e = "timestamp=".concat((new Date).getTime());
		return t + (-1 === t.indexOf("?") ? "?" : "&") + e
	}

	function Et(t) {
		var e = t.rotate,
			i = t.scaleX,
			a = t.scaleY,
			n = t.translateX,
			o = t.translateY,
			r = [];
		G(n) && 0 !== n && r.push("translateX(".concat(n, "px)")), G(o) && 0 !== o && r.push("translateY(".concat(o, "px)")), G(e) && 0 !== e && r.push("rotate(".concat(e, "deg)")), G(i) && 1 !== i && r.push("scaleX(".concat(i, ")")), G(a) && 1 !== a && r.push("scaleY(".concat(a, ")"));
		var h = r.length ? r.join(" ") : "none";
		return {
			WebkitTransform: h,
			msTransform: h,
			transform: h
		}
	}

	function Wt(t, e) {
		var i = t.pageX,
			a = t.pageY,
			n = {
				endX: i,
				endY: a
			};
		return e ? n : k({
			startX: i,
			startY: a
		}, n)
	}

	function Nt(t) {
		var e = t.aspectRatio,
			i = t.height,
			a = t.width,
			n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "contain",
			o = V(a),
			r = V(i);
		if (o && r) {
			var h = i * e;
			"contain" === n && a < h || "cover" === n && h < a ? i = a / e : a = i * e
		} else o ? i = a / e : r && (a = i * e);
		return {
			width: a,
			height: i
		}
	}
	var Ht = String.fromCharCode;
	var Lt = /^data:.*,/;

	function zt(t) {
		var e, i = new DataView(t);
		try {
			var a, n, o;
			if (255 === i.getUint8(0) && 216 === i.getUint8(1))
				for (var r = i.byteLength, h = 2; h + 1 < r;) {
					if (255 === i.getUint8(h) && 225 === i.getUint8(h + 1)) {
						n = h;
						break
					}
					h += 1
				}
			if (n) {
				var s = n + 10;
				if ("Exif" === function(t, e, i) {
						var a = "";
						i += e;
						for (var n = e; n < i; n += 1) a += Ht(t.getUint8(n));
						return a
					}(i, n + 4, 4)) {
					var c = i.getUint16(s);
					if (((a = 18761 === c) || 19789 === c) && 42 === i.getUint16(s + 2, a)) {
						var l = i.getUint32(s + 4, a);
						8 <= l && (o = s + l)
					}
				}
			}
			if (o) {
				var d, p, u = i.getUint16(o, a);
				for (p = 0; p < u; p += 1)
					if (d = o + 12 * p + 2, 274 === i.getUint16(d, a)) {
						d += 8, e = i.getUint16(d, a), i.setUint16(d, 1, a);
						break
					}
			}
		} catch (t) {
			e = 1
		}
		return e
	}
	var Yt = {
			render: function() {
				this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox()
			},
			initContainer: function() {
				var t = this.element,
					e = this.options,
					i = this.container,
					a = this.cropper;
				lt(a, A), dt(t, A);
				var n = {
					width: Math.max(i.offsetWidth, Number(e.minContainerWidth) || 200),
					height: Math.max(i.offsetHeight, Number(e.minContainerHeight) || 100)
				};
				ct(a, {
					width: (this.containerData = n).width,
					height: n.height
				}), lt(t, A), dt(a, A)
			},
			initCanvas: function() {
				var t = this.containerData,
					e = this.imageData,
					i = this.options.viewMode,
					a = Math.abs(e.rotate) % 180 == 90,
					n = a ? e.naturalHeight : e.naturalWidth,
					o = a ? e.naturalWidth : e.naturalHeight,
					r = n / o,
					h = t.width,
					s = t.height;
				t.height * r > t.width ? 3 === i ? h = t.height * r : s = t.width / r : 3 === i ? s = t.width / r : h = t.height * r;
				var c = {
					aspectRatio: r,
					naturalWidth: n,
					naturalHeight: o,
					width: h,
					height: s
				};
				c.left = (t.width - h) / 2, c.top = (t.height - s) / 2, c.oldLeft = c.left, c.oldTop = c.top, this.canvasData = c, this.limited = 1 === i || 2 === i, this.limitCanvas(!0, !0), this.initialImageData = rt({}, e), this.initialCanvasData = rt({}, c)
			},
			limitCanvas: function(t, e) {
				var i = this.options,
					a = this.containerData,
					n = this.canvasData,
					o = this.cropBoxData,
					r = i.viewMode,
					h = n.aspectRatio,
					s = this.cropped && o;
				if (t) {
					var c = Number(i.minCanvasWidth) || 0,
						l = Number(i.minCanvasHeight) || 0;
					1 < r ? (c = Math.max(c, a.width), l = Math.max(l, a.height), 3 === r && (c < l * h ? c = l * h : l = c / h)) : 0 < r && (c ? c = Math.max(c, s ? o.width : 0) : l ? l = Math.max(l, s ? o.height : 0) : s && ((c = o.width) < (l = o.height) * h ? c = l * h : l = c / h));
					var d = Nt({
						aspectRatio: h,
						width: c,
						height: l
					});
					c = d.width, l = d.height, n.minWidth = c, n.minHeight = l, n.maxWidth = 1 / 0, n.maxHeight = 1 / 0
				}
				if (e)
					if ((s ? 0 : 1) < r) {
						var p = a.width - n.width,
							u = a.height - n.height;
						n.minLeft = Math.min(0, p), n.minTop = Math.min(0, u), n.maxLeft = Math.max(0, p), n.maxTop = Math.max(0, u), s && this.limited && (n.minLeft = Math.min(o.left, o.left + (o.width - n.width)), n.minTop = Math.min(o.top, o.top + (o.height - n.height)), n.maxLeft = o.left, n.maxTop = o.top, 2 === r && (n.width >= a.width && (n.minLeft = Math.min(0, p), n.maxLeft = Math.max(0, p)), n.height >= a.height && (n.minTop = Math.min(0, u), n.maxTop = Math.max(0, u))))
					} else n.minLeft = -n.width, n.minTop = -n.height, n.maxLeft = a.width, n.maxTop = a.height
			},
			renderCanvas: function(t, e) {
				var i = this.canvasData,
					a = this.imageData;
				if (e) {
					var n = function(t) {
							var e = t.width,
								i = t.height,
								a = t.degree;
							if (90 == (a = Math.abs(a) % 180)) return {
								width: i,
								height: e
							};
							var n = a % 90 * Math.PI / 180,
								o = Math.sin(n),
								r = Math.cos(n),
								h = e * r + i * o,
								s = e * o + i * r;
							return 90 < a ? {
								width: s,
								height: h
							} : {
								width: h,
								height: s
							}
						}({
							width: a.naturalWidth * Math.abs(a.scaleX || 1),
							height: a.naturalHeight * Math.abs(a.scaleY || 1),
							degree: a.rotate || 0
						}),
						o = n.width,
						r = n.height,
						h = i.width * (o / i.naturalWidth),
						s = i.height * (r / i.naturalHeight);
					i.left -= (h - i.width) / 2, i.top -= (s - i.height) / 2, i.width = h, i.height = s, i.aspectRatio = o / r, i.naturalWidth = o, i.naturalHeight = r, this.limitCanvas(!0, !1)
				}(i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCanvas(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, ct(this.canvas, rt({
					width: i.width,
					height: i.height
				}, Et({
					translateX: i.left,
					translateY: i.top
				}))), this.renderImage(t), this.cropped && this.limited && this.limitCropBox(!0, !0)
			},
			renderImage: function(t) {
				var e = this.canvasData,
					i = this.imageData,
					a = i.naturalWidth * (e.width / e.naturalWidth),
					n = i.naturalHeight * (e.height / e.naturalHeight);
				rt(i, {
					width: a,
					height: n,
					left: (e.width - a) / 2,
					top: (e.height - n) / 2
				}), ct(this.image, rt({
					width: i.width,
					height: i.height
				}, Et(rt({
					translateX: i.left,
					translateY: i.top
				}, i)))), t && this.output()
			},
			initCropBox: function() {
				var t = this.options,
					e = this.canvasData,
					i = t.aspectRatio || t.initialAspectRatio,
					a = Number(t.autoCropArea) || .8,
					n = {
						width: e.width,
						height: e.height
					};
				i && (e.height * i > e.width ? n.height = n.width / i : n.width = n.height * i), this.cropBoxData = n, this.limitCropBox(!0, !0), n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth), n.height = Math.min(Math.max(n.height, n.minHeight), n.maxHeight), n.width = Math.max(n.minWidth, n.width * a), n.height = Math.max(n.minHeight, n.height * a), n.left = e.left + (e.width - n.width) / 2, n.top = e.top + (e.height - n.height) / 2, n.oldLeft = n.left, n.oldTop = n.top, this.initialCropBoxData = rt({}, n)
			},
			limitCropBox: function(t, e) {
				var i = this.options,
					a = this.containerData,
					n = this.canvasData,
					o = this.cropBoxData,
					r = this.limited,
					h = i.aspectRatio;
				if (t) {
					var s = Number(i.minCropBoxWidth) || 0,
						c = Number(i.minCropBoxHeight) || 0,
						l = r ? Math.min(a.width, n.width, n.width + n.left, a.width - n.left) : a.width,
						d = r ? Math.min(a.height, n.height, n.height + n.top, a.height - n.top) : a.height;
					s = Math.min(s, a.width), c = Math.min(c, a.height), h && (s && c ? s < c * h ? c = s / h : s = c * h : s ? c = s / h : c && (s = c * h), l < d * h ? d = l / h : l = d * h), o.minWidth = Math.min(s, l), o.minHeight = Math.min(c, d), o.maxWidth = l, o.maxHeight = d
				}
				e && (r ? (o.minLeft = Math.max(0, n.left), o.minTop = Math.max(0, n.top), o.maxLeft = Math.min(a.width, n.left + n.width) - o.width, o.maxTop = Math.min(a.height, n.top + n.height) - o.height) : (o.minLeft = 0, o.minTop = 0, o.maxLeft = a.width - o.width, o.maxTop = a.height - o.height))
			},
			renderCropBox: function() {
				var t = this.options,
					e = this.containerData,
					i = this.cropBoxData;
				(i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCropBox(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, t.movable && t.cropBoxMovable && ft(this.face, g, i.width >= e.width && i.height >= e.height ? E : O), ct(this.cropBox, rt({
					width: i.width,
					height: i.height
				}, Et({
					translateX: i.left,
					translateY: i.top
				}))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output()
			},
			output: function() {
				this.preview(), Ct(this.element, y, this.getData())
			}
		},
		Xt = {
			initPreview: function() {
				var t = this.element,
					i = this.crossOrigin,
					e = this.options.preview,
					a = i ? this.crossOriginUrl : this.url,
					n = t.alt || "The image to preview",
					o = document.createElement("img");
				if (i && (o.crossOrigin = i), o.src = a, o.alt = n, this.viewBox.appendChild(o), this.viewBoxImage = o, e) {
					var r = e;
					"string" == typeof e ? r = t.ownerDocument.querySelectorAll(e) : e.querySelector && (r = [e]), ot(this.previews = r, function(t) {
						var e = document.createElement("img");
						ft(t, f, {
							width: t.offsetWidth,
							height: t.offsetHeight,
							html: t.innerHTML
						}), i && (e.crossOrigin = i), e.src = a, e.alt = n, e.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', t.innerHTML = "", t.appendChild(e)
					})
				}
			},
			resetPreview: function() {
				ot(this.previews, function(t) {
					var e = gt(t, f);
					ct(t, {
							width: e.width,
							height: e.height
						}), t.innerHTML = e.html,
						function(e, i) {
							if (_(e[i])) try {
								delete e[i]
							} catch (t) {
								e[i] = void 0
							} else if (e.dataset) try {
								delete e.dataset[i]
							} catch (t) {
								e.dataset[i] = void 0
							} else e.removeAttribute("data-".concat(mt(i)))
						}(t, f)
				})
			},
			preview: function() {
				var h = this.imageData,
					t = this.canvasData,
					e = this.cropBoxData,
					s = e.width,
					c = e.height,
					l = h.width,
					d = h.height,
					p = e.left - t.left - h.left,
					u = e.top - t.top - h.top;
				this.cropped && !this.disabled && (ct(this.viewBoxImage, rt({
					width: l,
					height: d
				}, Et(rt({
					translateX: -p,
					translateY: -u
				}, h)))), ot(this.previews, function(t) {
					var e = gt(t, f),
						i = e.width,
						a = e.height,
						n = i,
						o = a,
						r = 1;
					s && (o = c * (r = i / s)), c && a < o && (n = s * (r = a / c), o = a), ct(t, {
						width: n,
						height: o
					}), ct(t.getElementsByTagName("img")[0], rt({
						width: l * r,
						height: d * r
					}, Et(rt({
						translateX: -p * r,
						translateY: -u * r
					}, h))))
				}))
			}
		},
		Rt = {
			bind: function() {
				var t = this.element,
					e = this.options,
					i = this.cropper;
				it(e.cropstart) && Mt(t, C, e.cropstart), it(e.cropmove) && Mt(t, M, e.cropmove), it(e.cropend) && Mt(t, x, e.cropend), it(e.crop) && Mt(t, y, e.crop), it(e.zoom) && Mt(t, I, e.zoom), Mt(i, B, this.onCropStart = this.cropStart.bind(this)), e.zoomable && e.zoomOnWheel && Mt(i, "wheel", this.onWheel = this.wheel.bind(this), {
					passive: !1,
					capture: !0
				}), e.toggleDragModeOnDblclick && Mt(i, D, this.onDblclick = this.dblclick.bind(this)), Mt(t.ownerDocument, S, this.onCropMove = this.cropMove.bind(this)), Mt(t.ownerDocument, P, this.onCropEnd = this.cropEnd.bind(this)), e.responsive && Mt(window, "resize", this.onResize = this.resize.bind(this))
			},
			unbind: function() {
				var t = this.element,
					e = this.options,
					i = this.cropper;
				it(e.cropstart) && xt(t, C, e.cropstart), it(e.cropmove) && xt(t, M, e.cropmove), it(e.cropend) && xt(t, x, e.cropend), it(e.crop) && xt(t, y, e.crop), it(e.zoom) && xt(t, I, e.zoom), xt(i, B, this.onCropStart), e.zoomable && e.zoomOnWheel && xt(i, "wheel", this.onWheel, {
					passive: !1,
					capture: !0
				}), e.toggleDragModeOnDblclick && xt(i, D, this.onDblclick), xt(t.ownerDocument, S, this.onCropMove), xt(t.ownerDocument, P, this.onCropEnd), e.responsive && xt(window, "resize", this.onResize)
			}
		},
		jt = {
			resize: function() {
				var t = this.options,
					e = this.container,
					i = this.containerData,
					a = Number(t.minContainerWidth) || 200,
					n = Number(t.minContainerHeight) || 100;
				if (!(this.disabled || i.width <= a || i.height <= n)) {
					var o, r, h = e.offsetWidth / i.width;
					if (1 !== h || e.offsetHeight !== i.height) t.restore && (o = this.getCanvasData(), r = this.getCropBoxData()), this.render(), t.restore && (this.setCanvasData(ot(o, function(t, e) {
						o[e] = t * h
					})), this.setCropBoxData(ot(r, function(t, e) {
						r[e] = t * h
					})))
				}
			},
			dblclick: function() {
				var t, e;
				this.disabled || this.options.dragMode === b || this.setDragMode((t = this.dragBox, e = h, (t.classList ? t.classList.contains(e) : -1 < t.className.indexOf(e)) ? w : v))
			},
			wheel: function(t) {
				var e = this,
					i = Number(this.options.wheelZoomRatio) || .1,
					a = 1;
				this.disabled || (t.preventDefault(), this.wheeling || (this.wheeling = !0, setTimeout(function() {
					e.wheeling = !1
				}, 50), t.deltaY ? a = 0 < t.deltaY ? 1 : -1 : t.wheelDelta ? a = -t.wheelDelta / 120 : t.detail && (a = 0 < t.detail ? 1 : -1), this.zoom(-a * i, t)))
			},
			cropStart: function(t) {
				var e = t.buttons,
					i = t.button;
				if (!(this.disabled || ("mousedown" === t.type || "pointerdown" === t.type && "mouse" === t.pointerType) && (G(e) && 1 !== e || G(i) && 0 !== i || t.ctrlKey))) {
					var a, n = this.options,
						o = this.pointers;
					t.changedTouches ? ot(t.changedTouches, function(t) {
						o[t.identifier] = Wt(t)
					}) : o[t.pointerId || 0] = Wt(t), a = 1 < Object.keys(o).length && n.zoomable && n.zoomOnTouch ? W : gt(t.target, g), q.test(a) && !1 !== Ct(this.element, C, {
						originalEvent: t,
						action: a
					}) && (t.preventDefault(), this.action = a, this.cropping = !1, a === T && (this.cropping = !0, lt(this.dragBox, c)))
				}
			},
			cropMove: function(t) {
				var e = this.action;
				if (!this.disabled && e) {
					var i = this.pointers;
					t.preventDefault(), !1 !== Ct(this.element, M, {
						originalEvent: t,
						action: e
					}) && (t.changedTouches ? ot(t.changedTouches, function(t) {
						rt(i[t.identifier] || {}, Wt(t, !0))
					}) : rt(i[t.pointerId || 0] || {}, Wt(t, !0)), this.change(t))
				}
			},
			cropEnd: function(t) {
				if (!this.disabled) {
					var e = this.action,
						i = this.pointers;
					t.changedTouches ? ot(t.changedTouches, function(t) {
						delete i[t.identifier]
					}) : delete i[t.pointerId || 0], e && (t.preventDefault(), Object.keys(i).length || (this.action = ""), this.cropping && (this.cropping = !1, pt(this.dragBox, c, this.cropped && this.options.modal)), Ct(this.element, x, {
						originalEvent: t,
						action: e
					}))
				}
			}
		},
		At = {
			change: function(t) {
				var e, i = this.options,
					a = this.canvasData,
					n = this.containerData,
					o = this.cropBoxData,
					r = this.pointers,
					h = this.action,
					s = i.aspectRatio,
					c = o.left,
					l = o.top,
					d = o.width,
					p = o.height,
					u = c + d,
					m = l + p,
					g = 0,
					f = 0,
					v = n.width,
					w = n.height,
					b = !0;
				!s && t.shiftKey && (s = d && p ? d / p : 1), this.limited && (g = o.minLeft, f = o.minTop, v = g + Math.min(n.width, a.width, a.left + a.width), w = f + Math.min(n.height, a.height, a.top + a.height));
				var y, x, M, C = r[Object.keys(r)[0]],
					D = {
						x: C.endX - C.startX,
						y: C.endY - C.startY
					},
					B = function(t) {
						switch (t) {
							case N:
								u + D.x > v && (D.x = v - u);
								break;
							case H:
								c + D.x < g && (D.x = g - c);
								break;
							case z:
								l + D.y < f && (D.y = f - l);
								break;
							case L:
								m + D.y > w && (D.y = w - m)
						}
					};
				switch (h) {
					case O:
						c += D.x, l += D.y;
						break;
					case N:
						if (0 <= D.x && (v <= u || s && (l <= f || w <= m))) {
							b = !1;
							break
						}
						B(N), (d += D.x) < 0 && (h = H, c -= d = -d), s && (p = d / s, l += (o.height - p) / 2);
						break;
					case z:
						if (D.y <= 0 && (l <= f || s && (c <= g || v <= u))) {
							b = !1;
							break
						}
						B(z), p -= D.y, l += D.y, p < 0 && (h = L, l -= p = -p), s && (d = p * s, c += (o.width - d) / 2);
						break;
					case H:
						if (D.x <= 0 && (c <= g || s && (l <= f || w <= m))) {
							b = !1;
							break
						}
						B(H), d -= D.x, c += D.x, d < 0 && (h = N, c -= d = -d), s && (p = d / s, l += (o.height - p) / 2);
						break;
					case L:
						if (0 <= D.y && (w <= m || s && (c <= g || v <= u))) {
							b = !1;
							break
						}
						B(L), (p += D.y) < 0 && (h = z, l -= p = -p), s && (d = p * s, c += (o.width - d) / 2);
						break;
					case Y:
						if (s) {
							if (D.y <= 0 && (l <= f || v <= u)) {
								b = !1;
								break
							}
							B(z), p -= D.y, l += D.y, d = p * s
						} else B(z), B(N), 0 <= D.x ? u < v ? d += D.x : D.y <= 0 && l <= f && (b = !1) : d += D.x, D.y <= 0 ? f < l && (p -= D.y, l += D.y) : (p -= D.y, l += D.y);
						d < 0 && p < 0 ? (h = j, l -= p = -p, c -= d = -d) : d < 0 ? (h = X, c -= d = -d) : p < 0 && (h = R, l -= p = -p);
						break;
					case X:
						if (s) {
							if (D.y <= 0 && (l <= f || c <= g)) {
								b = !1;
								break
							}
							B(z), p -= D.y, l += D.y, d = p * s, c += o.width - d
						} else B(z), B(H), D.x <= 0 ? g < c ? (d -= D.x, c += D.x) : D.y <= 0 && l <= f && (b = !1) : (d -= D.x, c += D.x), D.y <= 0 ? f < l && (p -= D.y, l += D.y) : (p -= D.y, l += D.y);
						d < 0 && p < 0 ? (h = R, l -= p = -p, c -= d = -d) : d < 0 ? (h = Y, c -= d = -d) : p < 0 && (h = j, l -= p = -p);
						break;
					case j:
						if (s) {
							if (D.x <= 0 && (c <= g || w <= m)) {
								b = !1;
								break
							}
							B(H), d -= D.x, c += D.x, p = d / s
						} else B(L), B(H), D.x <= 0 ? g < c ? (d -= D.x, c += D.x) : 0 <= D.y && w <= m && (b = !1) : (d -= D.x, c += D.x), 0 <= D.y ? m < w && (p += D.y) : p += D.y;
						d < 0 && p < 0 ? (h = Y, l -= p = -p, c -= d = -d) : d < 0 ? (h = R, c -= d = -d) : p < 0 && (h = X, l -= p = -p);
						break;
					case R:
						if (s) {
							if (0 <= D.x && (v <= u || w <= m)) {
								b = !1;
								break
							}
							B(N), p = (d += D.x) / s
						} else B(L), B(N), 0 <= D.x ? u < v ? d += D.x : 0 <= D.y && w <= m && (b = !1) : d += D.x, 0 <= D.y ? m < w && (p += D.y) : p += D.y;
						d < 0 && p < 0 ? (h = X, l -= p = -p, c -= d = -d) : d < 0 ? (h = j, c -= d = -d) : p < 0 && (h = Y, l -= p = -p);
						break;
					case E:
						this.move(D.x, D.y), b = !1;
						break;
					case W:
						this.zoom((x = k({}, y = r), M = [], ot(y, function(h, t) {
							delete x[t], ot(x, function(t) {
								var e = Math.abs(h.startX - t.startX),
									i = Math.abs(h.startY - t.startY),
									a = Math.abs(h.endX - t.endX),
									n = Math.abs(h.endY - t.endY),
									o = Math.sqrt(e * e + i * i),
									r = (Math.sqrt(a * a + n * n) - o) / o;
								M.push(r)
							})
						}), M.sort(function(t, e) {
							return Math.abs(t) < Math.abs(e)
						}), M[0]), t), b = !1;
						break;
					case T:
						if (!D.x || !D.y) {
							b = !1;
							break
						}
						e = Dt(this.cropper), c = C.startX - e.left, l = C.startY - e.top, d = o.minWidth, p = o.minHeight, 0 < D.x ? h = 0 < D.y ? R : Y : D.x < 0 && (c -= d, h = 0 < D.y ? j : X), D.y < 0 && (l -= p), this.cropped || (dt(this.cropBox, A), this.cropped = !0, this.limited && this.limitCropBox(!0, !0))
				}
				b && (o.width = d, o.height = p, o.left = c, o.top = l, this.action = h, this.renderCropBox()), ot(r, function(t) {
					t.startX = t.endX, t.startY = t.endY
				})
			}
		},
		St = {
			crop: function() {
				return !this.ready || this.cropped || this.disabled || (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && lt(this.dragBox, c), dt(this.cropBox, A), this.setCropBoxData(this.initialCropBoxData)), this
			},
			reset: function() {
				return this.ready && !this.disabled && (this.imageData = rt({}, this.initialImageData), this.canvasData = rt({}, this.initialCanvasData), this.cropBoxData = rt({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this
			},
			clear: function() {
				return this.cropped && !this.disabled && (rt(this.cropBoxData, {
					left: 0,
					top: 0,
					width: 0,
					height: 0
				}), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), dt(this.dragBox, c), lt(this.cropBox, A)), this
			},
			replace: function(e) {
				var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
				return !this.disabled && e && (this.isImg && (this.element.src = e), t ? (this.url = e, this.image.src = e, this.ready && (this.viewBoxImage.src = e, ot(this.previews, function(t) {
					t.getElementsByTagName("img")[0].src = e
				}))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(e))), this
			},
			enable: function() {
				return this.ready && this.disabled && (this.disabled = !1, dt(this.cropper, s)), this
			},
			disable: function() {
				return this.ready && !this.disabled && (this.disabled = !0, lt(this.cropper, s)), this
			},
			destroy: function() {
				var t = this.element;
				return t[d] && (t[d] = void 0, this.isImg && this.replaced && (t.src = this.originalUrl), this.uncreate()), this
			},
			move: function(t) {
				var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t,
					i = this.canvasData,
					a = i.left,
					n = i.top;
				return this.moveTo(J(t) ? t : a + Number(t), J(e) ? e : n + Number(e))
			},
			moveTo: function(t) {
				var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t,
					i = this.canvasData,
					a = !1;
				return t = Number(t), e = Number(e), this.ready && !this.disabled && this.options.movable && (G(t) && (i.left = t, a = !0), G(e) && (i.top = e, a = !0), a && this.renderCanvas(!0)), this
			},
			zoom: function(t, e) {
				var i = this.canvasData;
				return t = (t = Number(t)) < 0 ? 1 / (1 - t) : 1 + t, this.zoomTo(i.width * t / i.naturalWidth, null, e)
			},
			zoomTo: function(t, e, i) {
				var a, n, o, r = this.options,
					h = this.canvasData,
					s = h.width,
					c = h.height,
					l = h.naturalWidth,
					d = h.naturalHeight;
				if (0 <= (t = Number(t)) && this.ready && !this.disabled && r.zoomable) {
					var p = l * t,
						u = d * t;
					if (!1 === Ct(this.element, I, {
							ratio: t,
							oldRatio: s / l,
							originalEvent: i
						})) return this;
					if (i) {
						var m = this.pointers,
							g = Dt(this.cropper),
							f = m && Object.keys(m).length ? (o = n = a = 0, ot(m, function(t) {
								var e = t.startX,
									i = t.startY;
								a += e, n += i, o += 1
							}), {
								pageX: a /= o,
								pageY: n /= o
							}) : {
								pageX: i.pageX,
								pageY: i.pageY
							};
						h.left -= (p - s) * ((f.pageX - g.left - h.left) / s), h.top -= (u - c) * ((f.pageY - g.top - h.top) / c)
					} else et(e) && G(e.x) && G(e.y) ? (h.left -= (p - s) * ((e.x - h.left) / s), h.top -= (u - c) * ((e.y - h.top) / c)) : (h.left -= (p - s) / 2, h.top -= (u - c) / 2);
					h.width = p, h.height = u, this.renderCanvas(!0)
				}
				return this
			},
			rotate: function(t) {
				return this.rotateTo((this.imageData.rotate || 0) + Number(t))
			},
			rotateTo: function(t) {
				return G(t = Number(t)) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = t % 360, this.renderCanvas(!0, !0)), this
			},
			scaleX: function(t) {
				var e = this.imageData.scaleY;
				return this.scale(t, G(e) ? e : 1)
			},
			scaleY: function(t) {
				var e = this.imageData.scaleX;
				return this.scale(G(e) ? e : 1, t)
			},
			scale: function(t) {
				var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t,
					i = this.imageData,
					a = !1;
				return t = Number(t), e = Number(e), this.ready && !this.disabled && this.options.scalable && (G(t) && (i.scaleX = t, a = !0), G(e) && (i.scaleY = e, a = !0), a && this.renderCanvas(!0, !0)), this
			},
			getData: function() {
				var i, t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
					e = this.options,
					a = this.imageData,
					n = this.canvasData,
					o = this.cropBoxData;
				if (this.ready && this.cropped) {
					i = {
						x: o.left - n.left,
						y: o.top - n.top,
						width: o.width,
						height: o.height
					};
					var r = a.width / a.naturalWidth;
					if (ot(i, function(t, e) {
							i[e] = t / r
						}), t) {
						var h = Math.round(i.y + i.height),
							s = Math.round(i.x + i.width);
						i.x = Math.round(i.x), i.y = Math.round(i.y), i.width = s - i.x, i.height = h - i.y
					}
				} else i = {
					x: 0,
					y: 0,
					width: 0,
					height: 0
				};
				return e.rotatable && (i.rotate = a.rotate || 0), e.scalable && (i.scaleX = a.scaleX || 1, i.scaleY = a.scaleY || 1), i
			},
			setData: function(t) {
				var e = this.options,
					i = this.imageData,
					a = this.canvasData,
					n = {};
				if (this.ready && !this.disabled && et(t)) {
					var o = !1;
					e.rotatable && G(t.rotate) && t.rotate !== i.rotate && (i.rotate = t.rotate, o = !0), e.scalable && (G(t.scaleX) && t.scaleX !== i.scaleX && (i.scaleX = t.scaleX, o = !0), G(t.scaleY) && t.scaleY !== i.scaleY && (i.scaleY = t.scaleY, o = !0)), o && this.renderCanvas(!0, !0);
					var r = i.width / i.naturalWidth;
					G(t.x) && (n.left = t.x * r + a.left), G(t.y) && (n.top = t.y * r + a.top), G(t.width) && (n.width = t.width * r), G(t.height) && (n.height = t.height * r), this.setCropBoxData(n)
				}
				return this
			},
			getContainerData: function() {
				return this.ready ? rt({}, this.containerData) : {}
			},
			getImageData: function() {
				return this.sized ? rt({}, this.imageData) : {}
			},
			getCanvasData: function() {
				var e = this.canvasData,
					i = {};
				return this.ready && ot(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(t) {
					i[t] = e[t]
				}), i
			},
			setCanvasData: function(t) {
				var e = this.canvasData,
					i = e.aspectRatio;
				return this.ready && !this.disabled && et(t) && (G(t.left) && (e.left = t.left), G(t.top) && (e.top = t.top), G(t.width) ? (e.width = t.width, e.height = t.width / i) : G(t.height) && (e.height = t.height, e.width = t.height * i), this.renderCanvas(!0)), this
			},
			getCropBoxData: function() {
				var t, e = this.cropBoxData;
				return this.ready && this.cropped && (t = {
					left: e.left,
					top: e.top,
					width: e.width,
					height: e.height
				}), t || {}
			},
			setCropBoxData: function(t) {
				var e, i, a = this.cropBoxData,
					n = this.options.aspectRatio;
				return this.ready && this.cropped && !this.disabled && et(t) && (G(t.left) && (a.left = t.left), G(t.top) && (a.top = t.top), G(t.width) && t.width !== a.width && (e = !0, a.width = t.width), G(t.height) && t.height !== a.height && (i = !0, a.height = t.height), n && (e ? a.height = a.width / n : i && (a.width = a.height * n)), this.renderCropBox()), this
			},
			getCroppedCanvas: function() {
				var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
				if (!this.ready || !window.HTMLCanvasElement) return null;
				var e, i, a, n, o, r, h, s, c, l, d, p, u, m, g, f, v, w, b, y, x, M, C, D, B, k, O, T, E, W, N, H, L, z, Y, X, R, j, A, S, P, I = this.canvasData,
					U = (e = this.image, i = this.imageData, a = I, n = t, o = i.aspectRatio, r = i.naturalWidth, h = i.naturalHeight, s = i.rotate, c = void 0 === s ? 0 : s, l = i.scaleX, d = void 0 === l ? 1 : l, p = i.scaleY, u = void 0 === p ? 1 : p, m = a.aspectRatio, g = a.naturalWidth, f = a.naturalHeight, v = n.fillColor, w = void 0 === v ? "transparent" : v, b = n.imageSmoothingEnabled, y = void 0 === b || b, x = n.imageSmoothingQuality, M = void 0 === x ? "low" : x, C = n.maxWidth, D = void 0 === C ? 1 / 0 : C, B = n.maxHeight, k = void 0 === B ? 1 / 0 : B, O = n.minWidth, T = void 0 === O ? 0 : O, E = n.minHeight, W = void 0 === E ? 0 : E, N = document.createElement("canvas"), H = N.getContext("2d"), L = Nt({
						aspectRatio: m,
						width: D,
						height: k
					}), z = Nt({
						aspectRatio: m,
						width: T,
						height: W
					}, "cover"), Y = Math.min(L.width, Math.max(z.width, g)), X = Math.min(L.height, Math.max(z.height, f)), R = Nt({
						aspectRatio: o,
						width: D,
						height: k
					}), j = Nt({
						aspectRatio: o,
						width: T,
						height: W
					}, "cover"), A = Math.min(R.width, Math.max(j.width, r)), S = Math.min(R.height, Math.max(j.height, h)), P = [-A / 2, -S / 2, A, S], N.width = yt(Y), N.height = yt(X), H.fillStyle = w, H.fillRect(0, 0, Y, X), H.save(), H.translate(Y / 2, X / 2), H.rotate(c * Math.PI / 180), H.scale(d, u), H.imageSmoothingEnabled = y, H.imageSmoothingQuality = M, H.drawImage.apply(H, [e].concat(bt(P.map(function(t) {
						return Math.floor(yt(t))
					})))), H.restore(), N);
				if (!this.cropped) return U;
				var q = this.getData(),
					$ = q.x,
					Q = q.y,
					K = q.width,
					Z = q.height,
					F = U.width / Math.floor(I.naturalWidth);
				1 !== F && ($ *= F, Q *= F, K *= F, Z *= F);
				var G = K / Z,
					V = Nt({
						aspectRatio: G,
						width: t.maxWidth || 1 / 0,
						height: t.maxHeight || 1 / 0
					}),
					J = Nt({
						aspectRatio: G,
						width: t.minWidth || 0,
						height: t.minHeight || 0
					}, "cover"),
					_ = Nt({
						aspectRatio: G,
						width: t.width || (1 !== F ? U.width : K),
						height: t.height || (1 !== F ? U.height : Z)
					}),
					tt = _.width,
					et = _.height;
				tt = Math.min(V.width, Math.max(J.width, tt)), et = Math.min(V.height, Math.max(J.height, et));
				var it = document.createElement("canvas"),
					at = it.getContext("2d");
				it.width = yt(tt), it.height = yt(et), at.fillStyle = t.fillColor || "transparent", at.fillRect(0, 0, tt, et);
				var nt = t.imageSmoothingEnabled,
					ot = void 0 === nt || nt,
					rt = t.imageSmoothingQuality;
				at.imageSmoothingEnabled = ot, rt && (at.imageSmoothingQuality = rt);
				var ht, st, ct, lt, dt, pt, ut = U.width,
					mt = U.height,
					gt = $,
					ft = Q;
				gt <= -K || ut < gt ? dt = ct = ht = gt = 0 : gt <= 0 ? (ct = -gt, gt = 0, dt = ht = Math.min(ut, K + gt)) : gt <= ut && (ct = 0, dt = ht = Math.min(K, ut - gt)), ht <= 0 || ft <= -Z || mt < ft ? pt = lt = st = ft = 0 : ft <= 0 ? (lt = -ft, ft = 0, pt = st = Math.min(mt, Z + ft)) : ft <= mt && (lt = 0, pt = st = Math.min(Z, mt - ft));
				var vt = [gt, ft, ht, st];
				if (0 < dt && 0 < pt) {
					var wt = tt / K;
					vt.push(ct * wt, lt * wt, dt * wt, pt * wt)
				}
				return at.drawImage.apply(at, [U].concat(bt(vt.map(function(t) {
					return Math.floor(yt(t))
				})))), it
			},
			setAspectRatio: function(t) {
				var e = this.options;
				return this.disabled || J(t) || (e.aspectRatio = Math.max(0, t) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this
			},
			setDragMode: function(t) {
				var e = this.options,
					i = this.dragBox,
					a = this.face;
				if (this.ready && !this.disabled) {
					var n = t === v,
						o = e.movable && t === w;
					t = n || o ? t : b, e.dragMode = t, ft(i, g, t), pt(i, h, n), pt(i, m, o), e.cropBoxMovable || (ft(a, g, t), pt(a, h, n), pt(a, m, o))
				}
				return this
			}
		},
		Pt = r.Cropper,
		It = function() {
			function i(t) {
				var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
				if (function(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, i), !t || !K.test(t.tagName)) throw new Error("The first argument is required and must be an <img> or <canvas> element.");
				this.element = t, this.options = rt({}, Z, et(e) && e), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init()
			}
			var t, e, a;
			return t = i, a = [{
				key: "noConflict",
				value: function() {
					return window.Cropper = Pt, i
				}
			}, {
				key: "setDefaults",
				value: function(t) {
					rt(Z, et(t) && t)
				}
			}], (e = [{
				key: "init",
				value: function() {
					var t, e = this.element,
						i = e.tagName.toLowerCase();
					if (!e[d]) {
						if (e[d] = this, "img" === i) {
							if (this.isImg = !0, t = e.getAttribute("src") || "", !(this.originalUrl = t)) return;
							t = e.src
						} else "canvas" === i && window.HTMLCanvasElement && (t = e.toDataURL());
						this.load(t)
					}
				}
			}, {
				key: "load",
				value: function(t) {
					var e = this;
					if (t) {
						this.url = t, this.imageData = {};
						var i = this.element,
							a = this.options;
						if (a.rotatable || a.scalable || (a.checkOrientation = !1), a.checkOrientation && window.ArrayBuffer)
							if ($.test(t)) Q.test(t) ? this.read((n = t.replace(Lt, ""), o = atob(n), r = new ArrayBuffer(o.length), ot(h = new Uint8Array(r), function(t, e) {
								h[e] = o.charCodeAt(e)
							}), r)) : this.clone();
							else {
								var n, o, r, h, s = new XMLHttpRequest,
									c = this.clone.bind(this);
								this.reloading = !0, (this.xhr = s).onabort = c, s.onerror = c, s.ontimeout = c, s.onprogress = function() {
									s.getResponseHeader("content-type") !== U && s.abort()
								}, s.onload = function() {
									e.read(s.response)
								}, s.onloadend = function() {
									e.reloading = !1, e.xhr = null
								}, a.checkCrossOrigin && Ot(t) && i.crossOrigin && (t = Tt(t)), s.open("GET", t), s.responseType = "arraybuffer", s.withCredentials = "use-credentials" === i.crossOrigin, s.send()
							}
						else this.clone()
					}
				}
			}, {
				key: "read",
				value: function(t) {
					var e = this.options,
						i = this.imageData,
						a = zt(t),
						n = 0,
						o = 1,
						r = 1;
					if (1 < a) {
						this.url = function(t, e) {
							for (var i = [], a = new Uint8Array(t); 0 < a.length;) i.push(Ht.apply(null, nt(a.subarray(0, 8192)))), a = a.subarray(8192);
							return "data:".concat(e, ";base64,").concat(btoa(i.join("")))
						}(t, U);
						var h = function(t) {
							var e = 0,
								i = 1,
								a = 1;
							switch (t) {
								case 2:
									i = -1;
									break;
								case 3:
									e = -180;
									break;
								case 4:
									a = -1;
									break;
								case 5:
									e = 90, a = -1;
									break;
								case 6:
									e = 90;
									break;
								case 7:
									e = 90, i = -1;
									break;
								case 8:
									e = -90
							}
							return {
								rotate: e,
								scaleX: i,
								scaleY: a
							}
						}(a);
						n = h.rotate, o = h.scaleX, r = h.scaleY
					}
					e.rotatable && (i.rotate = n), e.scalable && (i.scaleX = o, i.scaleY = r), this.clone()
				}
			}, {
				key: "clone",
				value: function() {
					var t = this.element,
						e = this.url,
						i = t.crossOrigin,
						a = e;
					this.options.checkCrossOrigin && Ot(e) && (i || (i = "anonymous"), a = Tt(e)), this.crossOrigin = i, this.crossOriginUrl = a;
					var n = document.createElement("img");
					i && (n.crossOrigin = i), n.src = a || e, n.alt = t.alt || "The image to crop", (this.image = n).onload = this.start.bind(this), n.onerror = this.stop.bind(this), lt(n, p), t.parentNode.insertBefore(n, t.nextSibling)
				}
			}, {
				key: "start",
				value: function() {
					var i = this,
						t = this.image;
					t.onload = null, t.onerror = null, this.sizing = !0;
					var e = r.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(r.navigator.userAgent),
						a = function(t, e) {
							rt(i.imageData, {
								naturalWidth: t,
								naturalHeight: e,
								aspectRatio: t / e
							}), i.sizing = !1, i.sized = !0, i.build()
						};
					if (!t.naturalWidth || e) {
						var n = document.createElement("img"),
							o = document.body || document.documentElement;
						(this.sizingImage = n).onload = function() {
							a(n.width, n.height), e || o.removeChild(n)
						}, n.src = t.src, e || (n.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", o.appendChild(n))
					} else a(t.naturalWidth, t.naturalHeight)
				}
			}, {
				key: "stop",
				value: function() {
					var t = this.image;
					t.onload = null, t.onerror = null, t.parentNode.removeChild(t), this.image = null
				}
			}, {
				key: "build",
				value: function() {
					if (this.sized && !this.ready) {
						var t = this.element,
							e = this.options,
							i = this.image,
							a = t.parentNode,
							n = document.createElement("div");
						n.innerHTML = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';
						var o = n.querySelector(".".concat(d, "-container")),
							r = o.querySelector(".".concat(d, "-canvas")),
							h = o.querySelector(".".concat(d, "-drag-box")),
							s = o.querySelector(".".concat(d, "-crop-box")),
							c = s.querySelector(".".concat(d, "-face"));
						this.container = a, this.cropper = o, this.canvas = r, this.dragBox = h, this.cropBox = s, this.viewBox = o.querySelector(".".concat(d, "-view-box")), this.face = c, r.appendChild(i), lt(t, A), a.insertBefore(o, t.nextSibling), this.isImg || dt(i, p), this.initPreview(), this.bind(), e.initialAspectRatio = Math.max(0, e.initialAspectRatio) || NaN, e.aspectRatio = Math.max(0, e.aspectRatio) || NaN, e.viewMode = Math.max(0, Math.min(3, Math.round(e.viewMode))) || 0, lt(s, A), e.guides || lt(s.getElementsByClassName("".concat(d, "-dashed")), A), e.center || lt(s.getElementsByClassName("".concat(d, "-center")), A), e.background && lt(o, "".concat(d, "-bg")), e.highlight || lt(c, u), e.cropBoxMovable && (lt(c, m), ft(c, g, O)), e.cropBoxResizable || (lt(s.getElementsByClassName("".concat(d, "-line")), A), lt(s.getElementsByClassName("".concat(d, "-point")), A)), this.render(), this.ready = !0, this.setDragMode(e.dragMode), e.autoCrop && this.crop(), this.setData(e.data), it(e.ready) && Mt(t, "ready", e.ready, {
							once: !0
						}), Ct(t, "ready")
					}
				}
			}, {
				key: "unbuild",
				value: function() {
					this.ready && (this.ready = !1, this.unbind(), this.resetPreview(), this.cropper.parentNode.removeChild(this.cropper), dt(this.element, A))
				}
			}, {
				key: "uncreate",
				value: function() {
					this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop()
				}
			}]) && n(t.prototype, e), a && n(t, a), i
		}();
	if (rt(It.prototype, Yt, Xt, Rt, jt, At, St), l.fn) {
		var Ut = l.fn.cropper,
			qt = "cropper";
		l.fn.cropper = function(h) {
			for (var t = arguments.length, s = new Array(1 < t ? t - 1 : 0), e = 1; e < t; e++) s[e - 1] = arguments[e];
			var c;
			return this.each(function(t, e) {
				var i = l(e),
					a = "destroy" === h,
					n = i.data(qt);
				if (!n) {
					if (a) return;
					var o = l.extend({}, i.data(), l.isPlainObject(h) && h);
					n = new It(e, o), i.data(qt, n)
				}
				if ("string" == typeof h) {
					var r = n[h];
					l.isFunction(r) && ((c = r.apply(n, s)) === n && (c = void 0), a && i.removeData(qt))
				}
			}), void 0 !== c ? c : this
		}, l.fn.cropper.Constructor = It, l.fn.cropper.setDefaults = It.setDefaults, l.fn.cropper.noConflict = function() {
			return l.fn.cropper = Ut, this
		}
	}
});
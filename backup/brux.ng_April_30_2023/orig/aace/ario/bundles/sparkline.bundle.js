! function(S, z, N) {
	var t;
	t = function(L) {
		"use strict";
		var t, e, m, A, C, F, B, O, g, b, i, n, p, V, u, s, r, q, X, h, a, o, l, w, c, d, f, v, x, y = {},
			R = 0;
		t = function() {
			return {
				common: {
					type: "line",
					lineColor: "#00f",
					fillColor: "#cdf",
					defaultPixelsPerValue: 3,
					width: "auto",
					height: "auto",
					composite: !1,
					tagValuesAttribute: "values",
					tagOptionsPrefix: "spark",
					enableTagOptions: !1,
					enableHighlight: !0,
					highlightLighten: 1.4,
					tooltipSkipNull: !0,
					tooltipPrefix: "",
					tooltipSuffix: "",
					disableHiddenCheck: !1,
					numberFormatter: !1,
					numberDigitGroupCount: 3,
					numberDigitGroupSep: ",",
					numberDecimalMark: ".",
					disableTooltips: !1,
					disableInteraction: !1
				},
				line: {
					spotColor: "#f80",
					highlightSpotColor: "#5f5",
					highlightLineColor: "#f22",
					spotRadius: 1.5,
					minSpotColor: "#f80",
					maxSpotColor: "#f80",
					lineWidth: 1,
					normalRangeMin: N,
					normalRangeMax: N,
					normalRangeColor: "#ccc",
					drawNormalOnTop: !1,
					chartRangeMin: N,
					chartRangeMax: N,
					chartRangeMinX: N,
					chartRangeMaxX: N,
					tooltipFormat: new m('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
				},
				bar: {
					barColor: "#3366cc",
					negBarColor: "#f44",
					stackedBarColor: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
					zeroColor: N,
					nullColor: N,
					zeroAxis: !0,
					barWidth: 4,
					barSpacing: 1,
					chartRangeMax: N,
					chartRangeMin: N,
					chartRangeClip: !1,
					colorMap: N,
					tooltipFormat: new m('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
				},
				tristate: {
					barWidth: 4,
					barSpacing: 1,
					posBarColor: "#6f6",
					negBarColor: "#f44",
					zeroBarColor: "#999",
					colorMap: {},
					tooltipFormat: new m('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
					tooltipValueLookups: {
						map: {
							"-1": "Loss",
							0: "Draw",
							1: "Win"
						}
					}
				},
				discrete: {
					lineHeight: "auto",
					thresholdColor: N,
					thresholdValue: 0,
					chartRangeMax: N,
					chartRangeMin: N,
					chartRangeClip: !1,
					tooltipFormat: new m("{{prefix}}{{value}}{{suffix}}")
				},
				bullet: {
					targetColor: "#f33",
					targetWidth: 3,
					performanceColor: "#33f",
					rangeColors: ["#d3dafe", "#a8b6ff", "#7f94ff"],
					base: N,
					tooltipFormat: new m("{{fieldkey:fields}} - {{value}}"),
					tooltipValueLookups: {
						fields: {
							r: "Range",
							p: "Performance",
							t: "Target"
						}
					}
				},
				pie: {
					offset: 0,
					sliceColors: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
					borderWidth: 0,
					borderColor: "#000",
					tooltipFormat: new m('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
				},
				box: {
					raw: !1,
					boxLineColor: "#000",
					boxFillColor: "#cdf",
					whiskerColor: "#000",
					outlierLineColor: "#333",
					outlierFillColor: "#fff",
					medianColor: "#f00",
					showOutliers: !0,
					outlierIQR: 1.5,
					spotRadius: 1.5,
					target: N,
					targetColor: "#4a2",
					chartRangeMax: N,
					chartRangeMin: N,
					tooltipFormat: new m("{{field:fields}}: {{value}}"),
					tooltipFormatFieldlistKey: "field",
					tooltipValueLookups: {
						fields: {
							lq: "Lower Quartile",
							med: "Median",
							uq: "Upper Quartile",
							lo: "Left Outlier",
							ro: "Right Outlier",
							lw: "Left Whisker",
							rw: "Right Whisker"
						}
					}
				}
			}
		}, e = function() {
			var t, e;
			return t = function() {
				this.init.apply(this, arguments)
			}, 1 < arguments.length ? (arguments[0] ? (t.prototype = L.extend(new arguments[0], arguments[arguments.length - 1]), t._super = arguments[0].prototype) : t.prototype = arguments[arguments.length - 1], 2 < arguments.length && ((e = Array.prototype.slice.call(arguments, 1, -1)).unshift(t.prototype), L.extend.apply(L, e))) : t.prototype = arguments[0], t.prototype.cls = t
		}, L.SPFormatClass = m = e({
			fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
			precre: /(\w+)\.(\d+)/,
			init: function(t, e) {
				this.format = t, this.fclass = e
			},
			render: function(t, e, i) {
				var s, r, n, a, h, o = this,
					l = t;
				return this.format.replace(this.fre, function() {
					return r = arguments[1], n = arguments[3], (s = o.precre.exec(r)) ? (h = s[2], r = s[1]) : h = !1, (a = l[r]) === N ? "" : n && e && e[n] ? e[n].get ? e[n].get(a) || a : e[n][a] || a : (g(a) && (a = i.get("numberFormatter") ? i.get("numberFormatter")(a) : p(a, h, i.get("numberDigitGroupCount"), i.get("numberDigitGroupSep"), i.get("numberDecimalMark"))), a)
				})
			}
		}), L.spformat = function(t, e) {
			return new m(t, e)
		}, A = function(t, e, i) {
			return t < e ? e : i < t ? i : t
		}, C = function(t, e) {
			var i;
			return 2 === e ? (i = z.floor(t.length / 2), t.length % 2 ? t[i] : (t[i - 1] + t[i]) / 2) : t.length % 2 ? (i = (t.length * e + e) / 4) % 1 ? (t[z.floor(i)] + t[z.floor(i) - 1]) / 2 : t[i - 1] : (i = (t.length * e + 2) / 4) % 1 ? (t[z.floor(i)] + t[z.floor(i) - 1]) / 2 : t[i - 1]
		}, F = function(t) {
			var e;
			switch (t) {
				case "undefined":
					t = N;
					break;
				case "null":
					t = null;
					break;
				case "true":
					t = !0;
					break;
				case "false":
					t = !1;
					break;
				default:
					t == (e = parseFloat(t)) && (t = e)
			}
			return t
		}, B = function(t) {
			var e, i = [];
			for (e = t.length; e--;) i[e] = F(t[e]);
			return i
		}, O = function(t, e) {
			var i, s, r = [];
			for (i = 0, s = t.length; i < s; i++) t[i] !== e && r.push(t[i]);
			return r
		}, g = function(t) {
			return !isNaN(parseFloat(t)) && isFinite(t)
		}, p = function(t, e, i, s, r) {
			var n, a;
			for (t = (!1 === e ? parseFloat(t).toString() : t.toFixed(e)).split(""), (n = (n = L.inArray(".", t)) < 0 ? t.length : n) < t.length && (t[n] = r), a = n - i; 0 < a; a -= i) t.splice(a, 0, s);
			return t.join("")
		}, b = function(t, e, i) {
			var s;
			for (s = e.length; s--;)
				if ((!i || null !== e[s]) && e[s] !== t) return !1;
			return !0
		}, n = function(t) {
			return L.isArray(t) ? t : [t]
		}, i = function(t) {
			var e, i;
			if (S.createStyleSheet) try {
				return void(S.createStyleSheet().cssText = t)
			} catch (t) {
				i = !0
			}(e = S.createElement("style")).type = "text/css", S.getElementsByTagName("head")[0].appendChild(e), i ? S.styleSheets[S.styleSheets.length - 1].cssText = t : e["string" == typeof S.body.style.WebkitAppearance ? "innerText" : "innerHTML"] = t
		}, L.fn.simpledraw = function(t, e, i, s) {
			var r, n;
			if (i && (r = this.data("_jqs_vcanvas"))) return r;
			if (!1 === L.fn.sparkline.canvas) return !1;
			if (L.fn.sparkline.canvas === N) {
				var a = S.createElement("canvas");
				if (a.getContext && a.getContext("2d")) L.fn.sparkline.canvas = function(t, e, i, s) {
					return new f(t, e, i, s)
				};
				else {
					if (!S.namespaces || S.namespaces.v) return L.fn.sparkline.canvas = !1;
					S.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML"), L.fn.sparkline.canvas = function(t, e, i, s) {
						return new v(t, e, i)
					}
				}
			}
			return t === N && (t = L(this).innerWidth()), e === N && (e = L(this).innerHeight()), r = L.fn.sparkline.canvas(t, e, this, s), (n = L(this).data("_jqs_mhandler")) && n.registerCanvas(r), r
		}, L.fn.cleardraw = function() {
			var t = this.data("_jqs_vcanvas");
			t && t.reset()
		}, L.RangeMapClass = V = e({
			init: function(t) {
				var e, i, s = [];
				for (e in t) t.hasOwnProperty(e) && "string" == typeof e && -1 < e.indexOf(":") && ((i = e.split(":"))[0] = 0 === i[0].length ? -1 / 0 : parseFloat(i[0]), i[1] = 0 === i[1].length ? 1 / 0 : parseFloat(i[1]), i[2] = t[e], s.push(i));
				this.map = t, this.rangelist = s || !1
			},
			get: function(t) {
				var e, i, s, r = this.rangelist;
				if ((s = this.map[t]) !== N) return s;
				if (r)
					for (e = r.length; e--;)
						if ((i = r[e])[0] <= t && i[1] >= t) return i[2];
				return N
			}
		}), L.range_map = function(t) {
			return new V(t)
		}, u = e({
			init: function(t, e) {
				var i = L(t);
				this.$el = i, this.options = e, this.currentPageX = 0, this.currentPageY = 0, this.el = t, this.splist = [], this.tooltip = null, this.over = !1, this.displayTooltips = !e.get("disableTooltips"), this.highlightEnabled = !e.get("disableHighlight")
			},
			registerSparkline: function(t) {
				this.splist.push(t), this.over && this.updateDisplay()
			},
			registerCanvas: function(t) {
				var e = L(t.canvas);
				this.canvas = t, (this.$canvas = e).mouseenter(L.proxy(this.mouseenter, this)), e.mouseleave(L.proxy(this.mouseleave, this)), e.click(L.proxy(this.mouseclick, this))
			},
			reset: function(t) {
				this.splist = [], this.tooltip && t && (this.tooltip.remove(), this.tooltip = N)
			},
			mouseclick: function(t) {
				var e = L.Event("sparklineClick");
				e.originalEvent = t, e.sparklines = this.splist, this.$el.trigger(e)
			},
			mouseenter: function(t) {
				L(S.body).unbind("mousemove.jqs"), L(S.body).bind("mousemove.jqs", L.proxy(this.mousemove, this)), this.over = !0, this.currentPageX = t.pageX, this.currentPageY = t.pageY, this.currentEl = t.target, !this.tooltip && this.displayTooltips && (this.tooltip = new s(this.options), this.tooltip.updatePosition(t.pageX, t.pageY)), this.updateDisplay()
			},
			mouseleave: function() {
				L(S.body).unbind("mousemove.jqs");
				var t, e = this.splist,
					i = e.length,
					s = !1;
				for (this.over = !1, this.currentEl = null, this.tooltip && (this.tooltip.remove(), this.tooltip = null), t = 0; t < i; t++) e[t].clearRegionHighlight() && (s = !0);
				s && this.canvas.render()
			},
			mousemove: function(t) {
				this.currentPageX = t.pageX, this.currentPageY = t.pageY, this.currentEl = t.target, this.tooltip && this.tooltip.updatePosition(t.pageX, t.pageY), this.updateDisplay()
			},
			updateDisplay: function() {
				var t, e, i, s, r = this.splist,
					n = r.length,
					a = !1,
					h = this.$canvas.offset(),
					o = this.currentPageX - h.left,
					l = this.currentPageY - h.top;
				if (this.over) {
					for (e = 0; e < n; e++)(i = r[e].setRegionHighlight(this.currentEl, o, l)) && (a = !0);
					if (a) {
						if ((s = L.Event("sparklineRegionChange")).sparklines = this.splist, this.$el.trigger(s), this.tooltip) {
							for (t = "", e = 0; e < n; e++) t += r[e].getCurrentRegionTooltip();
							this.tooltip.setContent(t)
						}
						this.disableHighlight || this.canvas.render()
					}
					null === i && this.mouseleave()
				}
			}
		}), s = e({
			sizeStyle: "position: static !important;display: block !important;visibility: hidden !important;float: left !important;",
			init: function(t) {
				var e, i = t.get("tooltipClassname", "jqstooltip"),
					s = this.sizeStyle;
				this.container = t.get("tooltipContainer") || S.body, this.tooltipOffsetX = t.get("tooltipOffsetX", 10), this.tooltipOffsetY = t.get("tooltipOffsetY", 12), L("#jqssizetip").remove(), L("#jqstooltip").remove(), this.sizetip = L("<div/>", {
					id: "jqssizetip",
					style: s,
					class: i
				}), this.tooltip = L("<div/>", {
					id: "jqstooltip",
					class: i
				}).appendTo(this.container), e = this.tooltip.offset(), this.offsetLeft = e.left, this.offsetTop = e.top, this.hidden = !0, L(window).unbind("resize.jqs scroll.jqs"), L(window).bind("resize.jqs scroll.jqs", L.proxy(this.updateWindowDims, this)), this.updateWindowDims()
			},
			updateWindowDims: function() {
				this.scrollTop = L(window).scrollTop(), this.scrollLeft = L(window).scrollLeft(), this.scrollRight = this.scrollLeft + L(window).width(), this.updatePosition()
			},
			getSize: function(t) {
				this.sizetip.html(t).appendTo(this.container), this.width = this.sizetip.width() + 1, this.height = this.sizetip.height(), this.sizetip.remove()
			},
			setContent: function(t) {
				if (!t) return this.tooltip.css("visibility", "hidden"), void(this.hidden = !0);
				this.getSize(t), this.tooltip.html(t).css({
					width: this.width,
					height: this.height,
					visibility: "visible"
				}), this.hidden && (this.hidden = !1, this.updatePosition())
			},
			updatePosition: function(t, e) {
				if (t === N) {
					if (this.mousex === N) return;
					t = this.mousex - this.offsetLeft, e = this.mousey - this.offsetTop
				} else this.mousex = t -= this.offsetLeft, this.mousey = e -= this.offsetTop;
				this.height && this.width && !this.hidden && (e -= this.height + this.tooltipOffsetY, t += this.tooltipOffsetX, e < this.scrollTop && (e = this.scrollTop), t < this.scrollLeft ? t = this.scrollLeft : t + this.width > this.scrollRight && (t = this.scrollRight - this.width), this.tooltip.css({
					left: t,
					top: e
				}))
			},
			remove: function() {
				this.tooltip.remove(), this.sizetip.remove(), this.sizetip = this.tooltip = N, L(window).unbind("resize.jqs scroll.jqs")
			}
		}), L(function() {
			i('.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;box-sizing: content-box;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}')
		}), x = [], L.fn.sparkline = function(l, i) {
			return this.each(function() {
				var t, e, h = new L.fn.sparkline.options(this, i),
					o = L(this);
				if (t = function() {
						var t, e, i, s, r, n, a;
						t = "html" === l || l === N ? ((a = this.getAttribute(h.get("tagValuesAttribute"))) !== N && null !== a || (a = o.html()), a.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, "").split(",")) : l, e = "auto" === h.get("width") ? t.length * h.get("defaultPixelsPerValue") : h.get("width"), "auto" === h.get("height") ? h.get("composite") && L.data(this, "_jqs_vcanvas") || ((s = S.createElement("span")).innerHTML = "a", o.html(s), i = L(s).innerHeight() || L(s).height(), L(s).remove(), s = null) : i = h.get("height"), h.get("disableInteraction") ? r = !1 : (r = L.data(this, "_jqs_mhandler")) ? h.get("composite") || r.reset() : (r = new u(this, h), L.data(this, "_jqs_mhandler", r)), !h.get("composite") || L.data(this, "_jqs_vcanvas") ? ((n = new(L.fn.sparkline[h.get("type")])(this, t, h, e, i)).render(), r && r.registerSparkline(n)) : L.data(this, "_jqs_errnotify") || (alert("Attempted to attach a composite sparkline to an element with no existing sparkline"), L.data(this, "_jqs_errnotify", !0))
					}, L(this).html() && !h.get("disableHiddenCheck") && L(this).is(":hidden") || !L(this).parents("body").length) {
					if (!h.get("composite") && L.data(this, "_jqs_pending"))
						for (e = x.length; e; e--) x[e - 1][0] == this && x.splice(e - 1, 1);
					x.push([this, t]), L.data(this, "_jqs_pending", !0)
				} else t.call(this)
			})
		}, L.fn.sparkline.defaults = t(), L.sparkline_display_visible = function() {
			var t, e, i, s = [];
			for (e = 0, i = x.length; e < i; e++) t = x[e][0], L(t).is(":visible") && !L(t).parents().is(":hidden") ? (x[e][1].call(t), L.data(x[e][0], "_jqs_pending", !1), s.push(e)) : L(t).closest("html").length || L.data(t, "_jqs_pending") || (L.data(x[e][0], "_jqs_pending", !1), s.push(e));
			for (e = s.length; e; e--) x.splice(s[e - 1], 1)
		}, L.fn.sparkline.options = e({
			init: function(t, e) {
				var i, s, r, n;
				this.userOptions = e = e || {}, this.tag = t, this.tagValCache = {}, r = (s = L.fn.sparkline.defaults).common, this.tagOptionsPrefix = e.enableTagOptions && (e.tagOptionsPrefix || r.tagOptionsPrefix), i = (n = this.getTagSetting("type")) === y ? s[e.type || r.type] : s[n], this.mergedOptions = L.extend({}, r, i, e)
			},
			getTagSetting: function(t) {
				var e, i, s, r, n = this.tagOptionsPrefix;
				if (!1 === n || n === N) return y;
				if (this.tagValCache.hasOwnProperty(t)) e = this.tagValCache.key;
				else {
					if ((e = this.tag.getAttribute(n + t)) === N || null === e) e = y;
					else if ("[" === e.substr(0, 1))
						for (i = (e = e.substr(1, e.length - 2).split(",")).length; i--;) e[i] = F(e[i].replace(/(^\s*)|(\s*$)/g, ""));
					else if ("{" === e.substr(0, 1))
						for (s = e.substr(1, e.length - 2).split(","), e = {}, i = s.length; i--;) e[(r = s[i].split(":", 2))[0].replace(/(^\s*)|(\s*$)/g, "")] = F(r[1].replace(/(^\s*)|(\s*$)/g, ""));
					else e = F(e);
					this.tagValCache.key = e
				}
				return e
			},
			get: function(t, e) {
				var i, s = this.getTagSetting(t);
				return s !== y ? s : (i = this.mergedOptions[t]) === N ? e : i
			}
		}), L.fn.sparkline._base = e({
			disabled: !1,
			init: function(t, e, i, s, r) {
				this.el = t, this.$el = L(t), this.values = e, this.options = i, this.width = s, this.height = r, this.currentRegion = N
			},
			initTarget: function() {
				var t = !this.options.get("disableInteraction");
				(this.target = this.$el.simpledraw(this.width, this.height, this.options.get("composite"), t)) ? (this.canvasWidth = this.target.pixelWidth, this.canvasHeight = this.target.pixelHeight) : this.disabled = !0
			},
			render: function() {
				return !this.disabled || (this.el.innerHTML = "", !1)
			},
			getRegion: function(t, e) {},
			setRegionHighlight: function(t, e, i) {
				var s, r = this.currentRegion,
					n = !this.options.get("disableHighlight");
				return e > this.canvasWidth || i > this.canvasHeight || e < 0 || i < 0 ? null : r !== (s = this.getRegion(t, e, i)) && (r !== N && n && this.removeHighlight(), (this.currentRegion = s) !== N && n && this.renderHighlight(), !0)
			},
			clearRegionHighlight: function() {
				return this.currentRegion !== N && (this.removeHighlight(), !(this.currentRegion = N))
			},
			renderHighlight: function() {
				this.changeHighlight(!0)
			},
			removeHighlight: function() {
				this.changeHighlight(!1)
			},
			changeHighlight: function(t) {},
			getCurrentRegionTooltip: function() {
				var t, e, i, s, r, n, a, h, o, l, g, p, u, c, d = this.options,
					f = "",
					v = [];
				if (this.currentRegion === N) return "";
				if (t = this.getCurrentRegionFields(), g = d.get("tooltipFormatter")) return g(this, d, t);
				if (d.get("tooltipChartTitle") && (f += '<div class="jqs jqstitle">' + d.get("tooltipChartTitle") + "</div>\n"), !(e = this.options.get("tooltipFormat"))) return "";
				if (L.isArray(e) || (e = [e]), L.isArray(t) || (t = [t]), a = this.options.get("tooltipFormatFieldlist"), h = this.options.get("tooltipFormatFieldlistKey"), a && h) {
					for (o = [], n = t.length; n--;) l = t[n][h], -1 != (c = L.inArray(l, a)) && (o[c] = t[n]);
					t = o
				}
				for (i = e.length, u = t.length, n = 0; n < i; n++)
					for ("string" == typeof(p = e[n]) && (p = new m(p)), s = p.fclass || "jqsfield", c = 0; c < u; c++) t[c].isNull && d.get("tooltipSkipNull") || (L.extend(t[c], {
						prefix: d.get("tooltipPrefix"),
						suffix: d.get("tooltipSuffix")
					}), r = p.render(t[c], d.get("tooltipValueLookups"), d), v.push('<div class="' + s + '">' + r + "</div>"));
				return v.length ? f + v.join("\n") : ""
			},
			getCurrentRegionFields: function() {},
			calcHighlightColor: function(t, e) {
				var i, s, r, n, a = e.get("highlightColor"),
					h = e.get("highlightLighten");
				if (a) return a;
				if (h && (i = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(t) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(t))) {
					for (r = [], s = 4 === t.length ? 16 : 1, n = 0; n < 3; n++) r[n] = A(z.round(parseInt(i[n + 1], 16) * s * h), 0, 255);
					return "rgb(" + r.join(",") + ")"
				}
				return t
			}
		}), r = {
			changeHighlight: function(t) {
				var e, i = this.currentRegion,
					s = this.target,
					r = this.regionShapes[i];
				r && (e = this.renderRegion(i, t), L.isArray(e) || L.isArray(r) ? (s.replaceWithShapes(r, e), this.regionShapes[i] = L.map(e, function(t) {
					return t.id
				})) : (s.replaceWithShape(r, e), this.regionShapes[i] = e.id))
			},
			render: function() {
				var t, e, i, s, r = this.values,
					n = this.target,
					a = this.regionShapes;
				if (this.cls._super.render.call(this)) {
					for (i = r.length; i--;)
						if (t = this.renderRegion(i))
							if (L.isArray(t)) {
								for (e = [], s = t.length; s--;) t[s].append(), e.push(t[s].id);
								a[i] = e
							} else t.append(), a[i] = t.id;
					else a[i] = null;
					n.render()
				}
			}
		}, L.fn.sparkline.line = q = e(L.fn.sparkline._base, {
			type: "line",
			init: function(t, e, i, s, r) {
				q._super.init.call(this, t, e, i, s, r), this.vertices = [], this.regionMap = [], this.xvalues = [], this.yvalues = [], this.yminmax = [], this.hightlightSpotId = null, this.lastShapeId = null, this.initTarget()
			},
			getRegion: function(t, e, i) {
				var s, r = this.regionMap;
				for (s = r.length; s--;)
					if (null !== r[s] && e >= r[s][0] && e <= r[s][1]) return r[s][2];
				return N
			},
			getCurrentRegionFields: function() {
				var t = this.currentRegion;
				return {
					isNull: null === this.yvalues[t],
					x: this.xvalues[t],
					y: this.yvalues[t],
					color: this.options.get("lineColor"),
					fillColor: this.options.get("fillColor"),
					offset: t
				}
			},
			renderHighlight: function() {
				var t, e, i = this.currentRegion,
					s = this.target,
					r = this.vertices[i],
					n = this.options,
					a = n.get("spotRadius"),
					h = n.get("highlightSpotColor"),
					o = n.get("highlightLineColor");
				r && (a && h && (t = s.drawCircle(r[0], r[1], a, N, h), this.highlightSpotId = t.id, s.insertAfterShape(this.lastShapeId, t)), o && (e = s.drawLine(r[0], this.canvasTop, r[0], this.canvasTop + this.canvasHeight, o), this.highlightLineId = e.id, s.insertAfterShape(this.lastShapeId, e)))
			},
			removeHighlight: function() {
				var t = this.target;
				this.highlightSpotId && (t.removeShapeId(this.highlightSpotId), this.highlightSpotId = null), this.highlightLineId && (t.removeShapeId(this.highlightLineId), this.highlightLineId = null)
			},
			scanValues: function() {
				var t, e, i, s, r, n = this.values,
					a = n.length,
					h = this.xvalues,
					o = this.yvalues,
					l = this.yminmax;
				for (t = 0; t < a; t++) e = n[t], i = "string" == typeof n[t], s = "object" == typeof n[t] && n[t] instanceof Array, r = i && n[t].split(":"), i && 2 === r.length ? (h.push(Number(r[0])), o.push(Number(r[1])), l.push(Number(r[1]))) : s ? (h.push(e[0]), o.push(e[1]), l.push(e[1])) : (h.push(t), null === n[t] || "null" === n[t] ? o.push(null) : (o.push(Number(e)), l.push(Number(e))));
				this.options.get("xvalues") && (h = this.options.get("xvalues")), this.maxy = this.maxyorg = z.max.apply(z, l), this.miny = this.minyorg = z.min.apply(z, l), this.maxx = z.max.apply(z, h), this.minx = z.min.apply(z, h), this.xvalues = h, this.yvalues = o, this.yminmax = l
			},
			processRangeOptions: function() {
				var t = this.options,
					e = t.get("normalRangeMin"),
					i = t.get("normalRangeMax");
				e !== N && (e < this.miny && (this.miny = e), i > this.maxy && (this.maxy = i)), t.get("chartRangeMin") !== N && (t.get("chartRangeClip") || t.get("chartRangeMin") < this.miny) && (this.miny = t.get("chartRangeMin")), t.get("chartRangeMax") !== N && (t.get("chartRangeClip") || t.get("chartRangeMax") > this.maxy) && (this.maxy = t.get("chartRangeMax")), t.get("chartRangeMinX") !== N && (t.get("chartRangeClipX") || t.get("chartRangeMinX") < this.minx) && (this.minx = t.get("chartRangeMinX")), t.get("chartRangeMaxX") !== N && (t.get("chartRangeClipX") || t.get("chartRangeMaxX") > this.maxx) && (this.maxx = t.get("chartRangeMaxX"))
			},
			drawNormalRange: function(t, e, i, s, r) {
				var n = this.options.get("normalRangeMin"),
					a = this.options.get("normalRangeMax"),
					h = e + z.round(i - i * ((a - this.miny) / r)),
					o = z.round(i * (a - n) / r);
				this.target.drawRect(t, h, s, o, N, this.options.get("normalRangeColor")).append()
			},
			render: function() {
				var t, e, i, s, r, n, a, h, o, l, g, p, u, c, d, f, v, m, x, y, C, w, b, R, S = this.options,
					k = this.target,
					M = this.canvasWidth,
					_ = this.canvasHeight,
					H = this.vertices,
					W = S.get("spotRadius"),
					T = this.regionMap;
				if (q._super.render.call(this) && (this.scanValues(), this.processRangeOptions(), w = this.xvalues, b = this.yvalues, this.yminmax.length && !(this.yvalues.length < 2))) {
					for (s = r = 0, t = this.maxx - this.minx == 0 ? 1 : this.maxx - this.minx, e = this.maxy - this.miny == 0 ? 1 : this.maxy - this.miny, i = this.yvalues.length - 1, W && (M < 4 * W || _ < 4 * W) && (W = 0), W && (((y = S.get("highlightSpotColor") && !S.get("disableInteraction")) || S.get("minSpotColor") || S.get("spotColor") && b[i] === this.miny) && (_ -= z.ceil(W)), (y || S.get("maxSpotColor") || S.get("spotColor") && b[i] === this.maxy) && (_ -= z.ceil(W), s += z.ceil(W)), (y || (S.get("minSpotColor") || S.get("maxSpotColor")) && (b[0] === this.miny || b[0] === this.maxy)) && (r += z.ceil(W), M -= z.ceil(W)), (y || S.get("spotColor") || S.get("minSpotColor") || S.get("maxSpotColor") && (b[i] === this.miny || b[i] === this.maxy)) && (M -= z.ceil(W))), _--, S.get("normalRangeMin") === N || S.get("drawNormalOnTop") || this.drawNormalRange(r, s, _, M, e), h = [a = []], u = c = null, d = b.length, R = 0; R < d; R++) o = w[R], g = w[R + 1], l = b[R], c = (p = r + z.round((o - this.minx) * (M / t))) + ((R < d - 1 ? r + z.round((g - this.minx) * (M / t)) : M) - p) / 2, T[R] = [u || 0, c, R], u = c, null === l ? R && (null !== b[R - 1] && (a = [], h.push(a)), H.push(null)) : (l < this.miny && (l = this.miny), l > this.maxy && (l = this.maxy), a.length || a.push([p, s + _]), n = [p, s + z.round(_ - _ * ((l - this.miny) / e))], a.push(n), H.push(n));
					for (f = [], v = [], m = h.length, R = 0; R < m; R++)(a = h[R]).length && (S.get("fillColor") && (a.push([a[a.length - 1][0], s + _]), v.push(a.slice(0)), a.pop()), 2 < a.length && (a[0] = [a[0][0], a[1][1]]), f.push(a));
					for (m = v.length, R = 0; R < m; R++) k.drawShape(v[R], S.get("fillColor"), S.get("fillColor")).append();
					for (S.get("normalRangeMin") !== N && S.get("drawNormalOnTop") && this.drawNormalRange(r, s, _, M, e), m = f.length, R = 0; R < m; R++) k.drawShape(f[R], S.get("lineColor"), N, S.get("lineWidth")).append();
					if (W && S.get("valueSpots"))
						for ((x = S.get("valueSpots")).get === N && (x = new V(x)), R = 0; R < d; R++)(C = x.get(b[R])) && k.drawCircle(r + z.round((w[R] - this.minx) * (M / t)), s + z.round(_ - _ * ((b[R] - this.miny) / e)), W, N, C).append();
					W && S.get("spotColor") && null !== b[i] && k.drawCircle(r + z.round((w[w.length - 1] - this.minx) * (M / t)), s + z.round(_ - _ * ((b[i] - this.miny) / e)), W, N, S.get("spotColor")).append(), this.maxy !== this.minyorg && (W && S.get("minSpotColor") && (o = w[L.inArray(this.minyorg, b)], k.drawCircle(r + z.round((o - this.minx) * (M / t)), s + z.round(_ - _ * ((this.minyorg - this.miny) / e)), W, N, S.get("minSpotColor")).append()), W && S.get("maxSpotColor") && (o = w[L.inArray(this.maxyorg, b)], k.drawCircle(r + z.round((o - this.minx) * (M / t)), s + z.round(_ - _ * ((this.maxyorg - this.miny) / e)), W, N, S.get("maxSpotColor")).append())), this.lastShapeId = k.getLastShapeId(), this.canvasTop = s, k.render()
				}
			}
		}), L.fn.sparkline.bar = X = e(L.fn.sparkline._base, r, {
			type: "bar",
			init: function(t, e, i, s, r) {
				var n, a, h, o, l, g, p, u, c, d, f, v, m, x, y, C, w, b, R, S, k, M = parseInt(i.get("barWidth"), 10),
					_ = parseInt(i.get("barSpacing"), 10),
					H = i.get("chartRangeMin"),
					W = i.get("chartRangeMax"),
					T = i.get("chartRangeClip"),
					q = 1 / 0,
					I = -1 / 0;
				for (X._super.init.call(this, t, e, i, s, r), g = 0, p = e.length; g < p; g++)((n = "string" == typeof(S = e[g]) && -1 < S.indexOf(":")) || L.isArray(S)) && (y = !0, n && (S = e[g] = B(S.split(":"))), S = O(S, null), (a = z.min.apply(z, S)) < q && (q = a), I < (h = z.max.apply(z, S)) && (I = h));
				this.stacked = y, this.regionShapes = {}, this.barWidth = M, this.barSpacing = _, this.totalBarWidth = M + _, this.width = s = e.length * M + (e.length - 1) * _, this.initTarget(), T && (m = H === N ? -1 / 0 : H, x = W === N ? 1 / 0 : W), l = [], o = y ? [] : l;
				var j = [],
					P = [];
				for (g = 0, p = e.length; g < p; g++)
					if (y)
						for (C = e[g], e[g] = R = [], j[g] = 0, o[g] = P[g] = 0, w = 0, b = C.length; w < b; w++) null !== (S = R[w] = T ? A(C[w], m, x) : C[w]) && (0 < S && (j[g] += S), q < 0 && 0 < I ? S < 0 ? P[g] += z.abs(S) : o[g] += S : o[g] += z.abs(S - (S < 0 ? I : q)), l.push(S));
					else S = T ? A(e[g], m, x) : e[g], null !== (S = e[g] = F(S)) && l.push(S);
				this.max = v = z.max.apply(z, l), this.min = f = z.min.apply(z, l), this.stackMax = I = y ? z.max.apply(z, j) : v, this.stackMin = q = y ? z.min.apply(z, l) : f, i.get("chartRangeMin") !== N && (i.get("chartRangeClip") || i.get("chartRangeMin") < f) && (f = i.get("chartRangeMin")), i.get("chartRangeMax") !== N && (i.get("chartRangeClip") || i.get("chartRangeMax") > v) && (v = i.get("chartRangeMax")), this.zeroAxis = c = i.get("zeroAxis", !0), d = f <= 0 && 0 <= v && c ? 0 : 0 == c ? f : 0 < f ? f : v, this.xaxisOffset = d, u = y ? z.max.apply(z, o) + z.max.apply(z, P) : v - f, this.canvasHeightEf = c && f < 0 ? this.canvasHeight - 2 : this.canvasHeight - 1, f < d ? (k = ((y && 0 <= v ? I : v) - d) / u * this.canvasHeight) !== z.ceil(k) && (this.canvasHeightEf -= 2, k = z.ceil(k)) : k = this.canvasHeight, this.yoffset = k, L.isArray(i.get("colorMap")) ? (this.colorMapByIndex = i.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = i.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === N && (this.colorMapByValue = new V(this.colorMapByValue))), this.range = u
			},
			getRegion: function(t, e, i) {
				var s = z.floor(e / this.totalBarWidth);
				return s < 0 || s >= this.values.length ? N : s
			},
			getCurrentRegionFields: function() {
				var t, e, i = this.currentRegion,
					s = n(this.values[i]),
					r = [];
				for (e = s.length; e--;) t = s[e], r.push({
					isNull: null === t,
					value: t,
					color: this.calcColor(e, t, i),
					offset: i
				});
				return r
			},
			calcColor: function(t, e, i) {
				var s, r, n = this.colorMapByIndex,
					a = this.colorMapByValue,
					h = this.options;
				return s = this.stacked ? h.get("stackedBarColor") : e < 0 ? h.get("negBarColor") : h.get("barColor"), 0 === e && h.get("zeroColor") !== N && (s = h.get("zeroColor")), a && (r = a.get(e)) ? s = r : n && n.length > i && (s = n[i]), L.isArray(s) ? s[t % s.length] : s
			},
			renderRegion: function(t, e) {
				var i, s, r, n, a, h, o, l, g, p, u = this.values[t],
					c = this.options,
					d = this.xaxisOffset,
					f = [],
					v = this.range,
					m = this.stacked,
					x = this.target,
					y = t * this.totalBarWidth,
					C = this.canvasHeightEf,
					w = this.yoffset;
				if (o = (u = L.isArray(u) ? u : [u]).length, l = u[0], n = b(null, u), p = b(d, u, !0), n) return c.get("nullColor") ? (r = e ? c.get("nullColor") : this.calcHighlightColor(c.get("nullColor"), c), i = 0 < w ? w - 1 : w, x.drawRect(y, i, this.barWidth - 1, 0, r, r)) : N;
				for (a = w, h = 0; h < o; h++) {
					if (l = u[h], m && l === d) {
						if (!p || g) continue;
						g = !0
					}
					s = 0 < v ? z.floor(C * (z.abs(l - d) / v)) + 1 : 1, l < d || l === d && 0 === w ? (i = a, a += s) : (i = w - s, w -= s), r = this.calcColor(h, l, t), e && (r = this.calcHighlightColor(r, c)), f.push(x.drawRect(y, i, this.barWidth - 1, s - 1, r, r))
				}
				return 1 === f.length ? f[0] : f
			}
		}), L.fn.sparkline.tristate = h = e(L.fn.sparkline._base, r, {
			type: "tristate",
			init: function(t, e, i, s, r) {
				var n = parseInt(i.get("barWidth"), 10),
					a = parseInt(i.get("barSpacing"), 10);
				h._super.init.call(this, t, e, i, s, r), this.regionShapes = {}, this.barWidth = n, this.barSpacing = a, this.totalBarWidth = n + a, this.values = L.map(e, Number), this.width = s = e.length * n + (e.length - 1) * a, L.isArray(i.get("colorMap")) ? (this.colorMapByIndex = i.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = i.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === N && (this.colorMapByValue = new V(this.colorMapByValue))), this.initTarget()
			},
			getRegion: function(t, e, i) {
				return z.floor(e / this.totalBarWidth)
			},
			getCurrentRegionFields: function() {
				var t = this.currentRegion;
				return {
					isNull: this.values[t] === N,
					value: this.values[t],
					color: this.calcColor(this.values[t], t),
					offset: t
				}
			},
			calcColor: function(t, e) {
				var i, s = this.values,
					r = this.options,
					n = this.colorMapByIndex,
					a = this.colorMapByValue;
				return a && (i = a.get(t)) ? i : n && n.length > e ? n[e] : s[e] < 0 ? r.get("negBarColor") : 0 < s[e] ? r.get("posBarColor") : r.get("zeroBarColor")
			},
			renderRegion: function(t, e) {
				var i, s, r, n, a, h, o = this.values,
					l = this.options,
					g = this.target;
				if (i = g.pixelHeight, r = z.round(i / 2), n = t * this.totalBarWidth, s = o[t] < 0 ? (a = r) - 1 : 0 < o[t] ? (a = 0, r - 1) : (a = r - 1, 2), null !== (h = this.calcColor(o[t], t))) return e && (h = this.calcHighlightColor(h, l)), g.drawRect(n, a, this.barWidth - 1, s - 1, h, h)
			}
		}), L.fn.sparkline.discrete = a = e(L.fn.sparkline._base, r, {
			type: "discrete",
			init: function(t, e, i, s, r) {
				a._super.init.call(this, t, e, i, s, r), this.regionShapes = {}, this.values = e = L.map(e, Number), this.min = z.min.apply(z, e), this.max = z.max.apply(z, e), this.range = this.max - this.min, this.width = s = "auto" === i.get("width") ? 2 * e.length : this.width, this.interval = z.floor(s / e.length), this.itemWidth = s / e.length, i.get("chartRangeMin") !== N && (i.get("chartRangeClip") || i.get("chartRangeMin") < this.min) && (this.min = i.get("chartRangeMin")), i.get("chartRangeMax") !== N && (i.get("chartRangeClip") || i.get("chartRangeMax") > this.max) && (this.max = i.get("chartRangeMax")), this.initTarget(), this.target && (this.lineHeight = "auto" === i.get("lineHeight") ? z.round(.3 * this.canvasHeight) : i.get("lineHeight"))
			},
			getRegion: function(t, e, i) {
				return z.floor(e / this.itemWidth)
			},
			getCurrentRegionFields: function() {
				var t = this.currentRegion;
				return {
					isNull: this.values[t] === N,
					value: this.values[t],
					offset: t
				}
			},
			renderRegion: function(t, e) {
				var i, s, r, n, a = this.values,
					h = this.options,
					o = this.min,
					l = this.max,
					g = this.range,
					p = this.interval,
					u = this.target,
					c = this.canvasHeight,
					d = this.lineHeight,
					f = c - d;
				return s = A(a[t], o, l), n = t * p, i = z.round(f - f * ((s - o) / g)), r = h.get("thresholdColor") && s < h.get("thresholdValue") ? h.get("thresholdColor") : h.get("lineColor"), e && (r = this.calcHighlightColor(r, h)), u.drawLine(n, i, n, i + d, r)
			}
		}), L.fn.sparkline.bullet = o = e(L.fn.sparkline._base, {
			type: "bullet",
			init: function(t, e, i, s, r) {
				var n, a, h;
				o._super.init.call(this, t, e, i, s, r), this.values = e = B(e), (h = e.slice())[0] = null === h[0] ? h[2] : h[0], h[1] = null === e[1] ? h[2] : h[1], n = z.min.apply(z, e), a = z.max.apply(z, e), n = i.get("base") === N ? n < 0 ? n : 0 : i.get("base"), this.min = n, this.max = a, this.range = a - n, this.shapes = {}, this.valueShapes = {}, this.regiondata = {}, this.width = s = "auto" === i.get("width") ? "4.0em" : s, this.target = this.$el.simpledraw(s, r, i.get("composite")), e.length || (this.disabled = !0), this.initTarget()
			},
			getRegion: function(t, e, i) {
				var s = this.target.getShapeAt(t, e, i);
				return s !== N && this.shapes[s] !== N ? this.shapes[s] : N
			},
			getCurrentRegionFields: function() {
				var t = this.currentRegion;
				return {
					fieldkey: t.substr(0, 1),
					value: this.values[t.substr(1)],
					region: t
				}
			},
			changeHighlight: function(t) {
				var e, i = this.currentRegion,
					s = this.valueShapes[i];
				switch (delete this.shapes[s], i.substr(0, 1)) {
					case "r":
						e = this.renderRange(i.substr(1), t);
						break;
					case "p":
						e = this.renderPerformance(t);
						break;
					case "t":
						e = this.renderTarget(t)
				}
				this.valueShapes[i] = e.id, this.shapes[e.id] = i, this.target.replaceWithShape(s, e)
			},
			renderRange: function(t, e) {
				var i = this.values[t],
					s = z.round(this.canvasWidth * ((i - this.min) / this.range)),
					r = this.options.get("rangeColors")[t - 2];
				return e && (r = this.calcHighlightColor(r, this.options)), this.target.drawRect(0, 0, s - 1, this.canvasHeight - 1, r, r)
			},
			renderPerformance: function(t) {
				var e = this.values[1],
					i = z.round(this.canvasWidth * ((e - this.min) / this.range)),
					s = this.options.get("performanceColor");
				return t && (s = this.calcHighlightColor(s, this.options)), this.target.drawRect(0, z.round(.3 * this.canvasHeight), i - 1, z.round(.4 * this.canvasHeight) - 1, s, s)
			},
			renderTarget: function(t) {
				var e = this.values[0],
					i = z.round(this.canvasWidth * ((e - this.min) / this.range) - this.options.get("targetWidth") / 2),
					s = z.round(.1 * this.canvasHeight),
					r = this.canvasHeight - 2 * s,
					n = this.options.get("targetColor");
				return t && (n = this.calcHighlightColor(n, this.options)), this.target.drawRect(i, s, this.options.get("targetWidth") - 1, r - 1, n, n)
			},
			render: function() {
				var t, e, i = this.values.length,
					s = this.target;
				if (o._super.render.call(this)) {
					for (t = 2; t < i; t++) e = this.renderRange(t).append(), this.shapes[e.id] = "r" + t, this.valueShapes["r" + t] = e.id;
					null !== this.values[1] && (e = this.renderPerformance().append(), this.shapes[e.id] = "p1", this.valueShapes.p1 = e.id), null !== this.values[0] && (e = this.renderTarget().append(), this.shapes[e.id] = "t0", this.valueShapes.t0 = e.id), s.render()
				}
			}
		}), L.fn.sparkline.pie = l = e(L.fn.sparkline._base, {
			type: "pie",
			init: function(t, e, i, s, r) {
				var n, a = 0;
				if (l._super.init.call(this, t, e, i, s, r), this.shapes = {}, this.valueShapes = {}, this.values = e = L.map(e, Number), "auto" === i.get("width") && (this.width = this.height), 0 < e.length)
					for (n = e.length; n--;) a += e[n];
				this.total = a, this.initTarget(), this.radius = z.floor(z.min(this.canvasWidth, this.canvasHeight) / 2)
			},
			getRegion: function(t, e, i) {
				var s = this.target.getShapeAt(t, e, i);
				return s !== N && this.shapes[s] !== N ? this.shapes[s] : N
			},
			getCurrentRegionFields: function() {
				var t = this.currentRegion;
				return {
					isNull: this.values[t] === N,
					value: this.values[t],
					percent: this.values[t] / this.total * 100,
					color: this.options.get("sliceColors")[t % this.options.get("sliceColors").length],
					offset: t
				}
			},
			changeHighlight: function(t) {
				var e = this.currentRegion,
					i = this.renderSlice(e, t),
					s = this.valueShapes[e];
				delete this.shapes[s], this.target.replaceWithShape(s, i), this.valueShapes[e] = i.id, this.shapes[i.id] = e
			},
			renderSlice: function(t, e) {
				var i, s, r, n, a, h = this.target,
					o = this.options,
					l = this.radius,
					g = o.get("borderWidth"),
					p = o.get("offset"),
					u = 2 * z.PI,
					c = this.values,
					d = this.total,
					f = p ? 2 * z.PI * (p / 360) : 0;
				for (n = c.length, r = 0; r < n; r++) {
					if (s = i = f, 0 < d && (s = f + u * (c[r] / d)), t === r) return a = o.get("sliceColors")[r % o.get("sliceColors").length], e && (a = this.calcHighlightColor(a, o)), h.drawPieSlice(l, l, l - g, i, s, N, a);
					f = s
				}
			},
			render: function() {
				var t, e, i = this.target,
					s = this.values,
					r = this.options,
					n = this.radius,
					a = r.get("borderWidth"),
					h = r.get("donutWidth");
				if (l._super.render.call(this)) {
					for (a && i.drawCircle(n, n, z.floor(n - a / 2), r.get("borderColor"), N, a).append(), e = s.length; e--;) s[e] && (t = this.renderSlice(e).append(), this.valueShapes[e] = t.id, this.shapes[t.id] = e);
					h && i.drawCircle(n, n, n - h, r.get("donutColor"), r.get("donutColor"), 0).append(), i.render()
				}
			}
		}), L.fn.sparkline.box = w = e(L.fn.sparkline._base, {
			type: "box",
			init: function(t, e, i, s, r) {
				w._super.init.call(this, t, e, i, s, r), this.values = L.map(e, Number), this.width = "auto" === i.get("width") ? "4.0em" : s, this.initTarget(), this.values.length || (this.disabled = 1)
			},
			getRegion: function() {
				return 1
			},
			getCurrentRegionFields: function() {
				var t = [{
					field: "lq",
					value: this.quartiles[0]
				}, {
					field: "med",
					value: this.quartiles[1]
				}, {
					field: "uq",
					value: this.quartiles[2]
				}];
				return this.loutlier !== N && t.push({
					field: "lo",
					value: this.loutlier
				}), this.routlier !== N && t.push({
					field: "ro",
					value: this.routlier
				}), this.lwhisker !== N && t.push({
					field: "lw",
					value: this.lwhisker
				}), this.rwhisker !== N && t.push({
					field: "rw",
					value: this.rwhisker
				}), t
			},
			render: function() {
				var t, e, i, s, r, n, a, h, o, l, g, p = this.target,
					u = this.values,
					c = u.length,
					d = this.options,
					f = this.canvasWidth,
					v = this.canvasHeight,
					m = d.get("chartRangeMin") === N ? z.min.apply(z, u) : d.get("chartRangeMin"),
					x = d.get("chartRangeMax") === N ? z.max.apply(z, u) : d.get("chartRangeMax"),
					y = 0;
				if (w._super.render.call(this)) {
					if (d.get("raw")) d.get("showOutliers") && 5 < u.length ? (e = u[0], t = u[1], s = u[2], r = u[3], n = u[4], a = u[5], h = u[6]) : (t = u[0], s = u[1], r = u[2], n = u[3], a = u[4]);
					else if (u.sort(function(t, e) {
							return t - e
						}), s = C(u, 1), r = C(u, 2), i = (n = C(u, 3)) - s, d.get("showOutliers")) {
						for (t = a = N, o = 0; o < c; o++) t === N && u[o] > s - i * d.get("outlierIQR") && (t = u[o]), u[o] < n + i * d.get("outlierIQR") && (a = u[o]);
						e = u[0], h = u[c - 1]
					} else t = u[0], a = u[c - 1];
					this.quartiles = [s, r, n], this.lwhisker = t, this.rwhisker = a, this.loutlier = e, this.routlier = h, g = f / (x - m + 1), d.get("showOutliers") && (y = z.ceil(d.get("spotRadius")), g = (f -= 2 * z.ceil(d.get("spotRadius"))) / (x - m + 1), e < t && p.drawCircle((e - m) * g + y, v / 2, d.get("spotRadius"), d.get("outlierLineColor"), d.get("outlierFillColor")).append(), a < h && p.drawCircle((h - m) * g + y, v / 2, d.get("spotRadius"), d.get("outlierLineColor"), d.get("outlierFillColor")).append()), p.drawRect(z.round((s - m) * g + y), z.round(.1 * v), z.round((n - s) * g), z.round(.8 * v), d.get("boxLineColor"), d.get("boxFillColor")).append(), p.drawLine(z.round((t - m) * g + y), z.round(v / 2), z.round((s - m) * g + y), z.round(v / 2), d.get("lineColor")).append(), p.drawLine(z.round((t - m) * g + y), z.round(v / 4), z.round((t - m) * g + y), z.round(v - v / 4), d.get("whiskerColor")).append(), p.drawLine(z.round((a - m) * g + y), z.round(v / 2), z.round((n - m) * g + y), z.round(v / 2), d.get("lineColor")).append(), p.drawLine(z.round((a - m) * g + y), z.round(v / 4), z.round((a - m) * g + y), z.round(v - v / 4), d.get("whiskerColor")).append(), p.drawLine(z.round((r - m) * g + y), z.round(.1 * v), z.round((r - m) * g + y), z.round(.9 * v), d.get("medianColor")).append(), d.get("target") && (l = z.ceil(d.get("spotRadius")), p.drawLine(z.round((d.get("target") - m) * g + y), z.round(v / 2 - l), z.round((d.get("target") - m) * g + y), z.round(v / 2 + l), d.get("targetColor")).append(), p.drawLine(z.round((d.get("target") - m) * g + y - l), z.round(v / 2), z.round((d.get("target") - m) * g + y + l), z.round(v / 2), d.get("targetColor")).append()), p.render()
				}
			}
		}), c = e({
			init: function(t, e, i, s) {
				this.target = t, this.id = e, this.type = i, this.args = s
			},
			append: function() {
				return this.target.appendShape(this), this
			}
		}), d = e({
			_pxregex: /(\d+)(px)?\s*$/i,
			init: function(t, e, i) {
				t && (this.width = t, this.height = e, this.target = i, this.lastShapeId = null, i[0] && (i = i[0]), L.data(i, "_jqs_vcanvas", this))
			},
			drawLine: function(t, e, i, s, r, n) {
				return this.drawShape([
					[t, e],
					[i, s]
				], r, n)
			},
			drawShape: function(t, e, i, s) {
				return this._genShape("Shape", [t, e, i, s])
			},
			drawCircle: function(t, e, i, s, r, n) {
				return this._genShape("Circle", [t, e, i, s, r, n])
			},
			drawPieSlice: function(t, e, i, s, r, n, a) {
				return this._genShape("PieSlice", [t, e, i, s, r, n, a])
			},
			drawRect: function(t, e, i, s, r, n) {
				return this._genShape("Rect", [t, e, i, s, r, n])
			},
			getElement: function() {
				return this.canvas
			},
			getLastShapeId: function() {
				return this.lastShapeId
			},
			reset: function() {
				alert("reset not implemented")
			},
			_insert: function(t, e) {
				L(e).html(t)
			},
			_calculatePixelDims: function(t, e, i) {
				var s;
				s = this._pxregex.exec(e), this.pixelHeight = s ? s[1] : L(i).height(), s = this._pxregex.exec(t), this.pixelWidth = s ? s[1] : L(i).width()
			},
			_genShape: function(t, e) {
				var i = R++;
				return e.unshift(i), new c(this, i, t, e)
			},
			appendShape: function(t) {
				alert("appendShape not implemented")
			},
			replaceWithShape: function(t, e) {
				alert("replaceWithShape not implemented")
			},
			insertAfterShape: function(t, e) {
				alert("insertAfterShape not implemented")
			},
			removeShapeId: function(t) {
				alert("removeShapeId not implemented")
			},
			getShapeAt: function(t, e, i) {
				alert("getShapeAt not implemented")
			},
			render: function() {
				alert("render not implemented")
			}
		}), f = e(d, {
			init: function(t, e, i, s) {
				f._super.init.call(this, t, e, i), this.canvas = S.createElement("canvas"), i[0] && (i = i[0]), L.data(i, "_jqs_vcanvas", this), L(this.canvas).css({
					display: "inline-block",
					width: t,
					height: e,
					verticalAlign: "top"
				}), this._insert(this.canvas, i), this._calculatePixelDims(t, e, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, this.interact = s, this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = N, L(this.canvas).css({
					width: this.pixelWidth,
					height: this.pixelHeight
				})
			},
			_getContext: function(t, e, i) {
				var s = this.canvas.getContext("2d");
				return t !== N && (s.strokeStyle = t), s.lineWidth = i === N ? 1 : i, e !== N && (s.fillStyle = e), s
			},
			reset: function() {
				this._getContext().clearRect(0, 0, this.pixelWidth, this.pixelHeight), this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = N
			},
			_drawShape: function(t, e, i, s, r) {
				var n, a, h = this._getContext(i, s, r);
				for (h.beginPath(), h.moveTo(e[0][0] + .5, e[0][1] + .5), n = 1, a = e.length; n < a; n++) h.lineTo(e[n][0] + .5, e[n][1] + .5);
				i !== N && h.stroke(), s !== N && h.fill(), this.targetX !== N && this.targetY !== N && h.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = t)
			},
			_drawCircle: function(t, e, i, s, r, n, a) {
				var h = this._getContext(r, n, a);
				h.beginPath(), h.arc(e, i, s, 0, 2 * z.PI, !1), this.targetX !== N && this.targetY !== N && h.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = t), r !== N && h.stroke(), n !== N && h.fill()
			},
			_drawPieSlice: function(t, e, i, s, r, n, a, h) {
				var o = this._getContext(a, h);
				o.beginPath(), o.moveTo(e, i), o.arc(e, i, s, r, n, !1), o.lineTo(e, i), o.closePath(), a !== N && o.stroke(), h && o.fill(), this.targetX !== N && this.targetY !== N && o.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = t)
			},
			_drawRect: function(t, e, i, s, r, n, a) {
				return this._drawShape(t, [
					[e, i],
					[e + s, i],
					[e + s, i + r],
					[e, i + r],
					[e, i]
				], n, a)
			},
			appendShape: function(t) {
				return this.shapes[t.id] = t, this.shapeseq.push(t.id), this.lastShapeId = t.id, t.id
			},
			replaceWithShape: function(t, e) {
				var i, s = this.shapeseq;
				for (this.shapes[e.id] = e, i = s.length; i--;) s[i] == t && (s[i] = e.id);
				delete this.shapes[t]
			},
			replaceWithShapes: function(t, e) {
				var i, s, r, n = this.shapeseq,
					a = {};
				for (s = t.length; s--;) a[t[s]] = !0;
				for (s = n.length; s--;) a[i = n[s]] && (n.splice(s, 1), delete this.shapes[i], r = s);
				for (s = e.length; s--;) n.splice(r, 0, e[s].id), this.shapes[e[s].id] = e[s]
			},
			insertAfterShape: function(t, e) {
				var i, s = this.shapeseq;
				for (i = s.length; i--;)
					if (s[i] === t) return s.splice(i + 1, 0, e.id), void(this.shapes[e.id] = e)
			},
			removeShapeId: function(t) {
				var e, i = this.shapeseq;
				for (e = i.length; e--;)
					if (i[e] === t) {
						i.splice(e, 1);
						break
					} delete this.shapes[t]
			},
			getShapeAt: function(t, e, i) {
				return this.targetX = e, this.targetY = i, this.render(), this.currentTargetShapeId
			},
			render: function() {
				var t, e, i = this.shapeseq,
					s = this.shapes,
					r = i.length;
				for (this._getContext().clearRect(0, 0, this.pixelWidth, this.pixelHeight), e = 0; e < r; e++) this["_draw" + (t = s[i[e]]).type].apply(this, t.args);
				this.interact || (this.shapes = {}, this.shapeseq = [])
			}
		}), v = e(d, {
			init: function(t, e, i) {
				var s;
				v._super.init.call(this, t, e, i), i[0] && (i = i[0]), L.data(i, "_jqs_vcanvas", this), this.canvas = S.createElement("span"), L(this.canvas).css({
					display: "inline-block",
					position: "relative",
					overflow: "hidden",
					width: t,
					height: e,
					margin: "0px",
					padding: "0px",
					verticalAlign: "top"
				}), this._insert(this.canvas, i), this._calculatePixelDims(t, e, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, s = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" style="position:absolute;top:0;left:0;width:' + this.pixelWidth + "px;height=" + this.pixelHeight + 'px;"></v:group>', this.canvas.insertAdjacentHTML("beforeEnd", s), this.group = L(this.canvas).children()[0], this.rendered = !1, this.prerender = ""
			},
			_drawShape: function(t, e, i, s, r) {
				var n, a, h, o, l, g, p = [];
				for (g = 0, l = e.length; g < l; g++) p[g] = e[g][0] + "," + e[g][1];
				return n = p.splice(0, 1), r = r === N ? 1 : r, a = i === N ? ' stroked="false" ' : ' strokeWeight="' + r + 'px" strokeColor="' + i + '" ', h = s === N ? ' filled="false"' : ' fillColor="' + s + '" filled="true" ', o = p[0] === p[p.length - 1] ? "x " : "", '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"  id="jqsshape' + t + '" ' + a + h + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;"  path="m ' + n + " l " + p.join(", ") + " " + o + 'e"> </v:shape>'
			},
			_drawCircle: function(t, e, i, s, r, n, a) {
				return '<v:oval  id="jqsshape' + t + '" ' + (r === N ? ' stroked="false" ' : ' strokeWeight="' + a + 'px" strokeColor="' + r + '" ') + (n === N ? ' filled="false"' : ' fillColor="' + n + '" filled="true" ') + ' style="position:absolute;top:' + (i -= s) + "px; left:" + (e -= s) + "px; width:" + 2 * s + "px; height:" + 2 * s + 'px"></v:oval>'
			},
			_drawPieSlice: function(t, e, i, s, r, n, a, h) {
				var o, l, g, p, u, c, d;
				if (r === n) return "";
				if (n - r == 2 * z.PI && (r = 0, n = 2 * z.PI), l = e + z.round(z.cos(r) * s), g = i + z.round(z.sin(r) * s), p = e + z.round(z.cos(n) * s), u = i + z.round(z.sin(n) * s), l === p && g === u) {
					if (n - r < z.PI) return "";
					l = p = e + s, g = u = i
				}
				return l === p && g === u && n - r < z.PI ? "" : (o = [e - s, i - s, e + s, i + s, l, g, p, u], c = a === N ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + a + '" ', d = h === N ? ' filled="false"' : ' fillColor="' + h + '" filled="true" ', '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"  id="jqsshape' + t + '" ' + c + d + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;"  path="m ' + e + "," + i + " wa " + o.join(", ") + ' x e"> </v:shape>')
			},
			_drawRect: function(t, e, i, s, r, n, a) {
				return this._drawShape(t, [
					[e, i],
					[e, i + r],
					[e + s, i + r],
					[e + s, i],
					[e, i]
				], n, a)
			},
			reset: function() {
				this.group.innerHTML = ""
			},
			appendShape: function(t) {
				var e = this["_draw" + t.type].apply(this, t.args);
				return this.rendered ? this.group.insertAdjacentHTML("beforeEnd", e) : this.prerender += e, this.lastShapeId = t.id, t.id
			},
			replaceWithShape: function(t, e) {
				var i = L("#jqsshape" + t),
					s = this["_draw" + e.type].apply(this, e.args);
				i[0].outerHTML = s
			},
			replaceWithShapes: function(t, e) {
				var i, s = L("#jqsshape" + t[0]),
					r = "",
					n = e.length;
				for (i = 0; i < n; i++) r += this["_draw" + e[i].type].apply(this, e[i].args);
				for (s[0].outerHTML = r, i = 1; i < t.length; i++) L("#jqsshape" + t[i]).remove()
			},
			insertAfterShape: function(t, e) {
				var i = L("#jqsshape" + t),
					s = this["_draw" + e.type].apply(this, e.args);
				i[0].insertAdjacentHTML("afterEnd", s)
			},
			removeShapeId: function(t) {
				var e = L("#jqsshape" + t);
				this.group.removeChild(e[0])
			},
			getShapeAt: function(t, e, i) {
				return t.id.substr(8)
			},
			render: function() {
				this.rendered || (this.group.innerHTML = this.prerender, this.rendered = !0)
			}
		})
	}, "function" == typeof define && define.amd ? define(["jquery"], t) : jQuery && !jQuery.fn.sparkline && t(jQuery)
}(document, Math);
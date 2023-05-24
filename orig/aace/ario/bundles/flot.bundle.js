! function(r) {
	r.color = {}, r.color.make = function(e, t, i, o) {
		var n = {};
		return n.r = e || 0, n.g = t || 0, n.b = i || 0, n.a = null != o ? o : 1, n.add = function(e, t) {
			for (var i = 0; i < e.length; ++i) n[e.charAt(i)] += t;
			return n.normalize()
		}, n.scale = function(e, t) {
			for (var i = 0; i < e.length; ++i) n[e.charAt(i)] *= t;
			return n.normalize()
		}, n.toString = function() {
			return 1 <= n.a ? "rgb(" + [n.r, n.g, n.b].join(",") + ")" : "rgba(" + [n.r, n.g, n.b, n.a].join(",") + ")"
		}, n.normalize = function() {
			function e(e, t, i) {
				return t < e ? e : i < t ? i : t
			}
			return n.r = e(0, parseInt(n.r), 255), n.g = e(0, parseInt(n.g), 255), n.b = e(0, parseInt(n.b), 255), n.a = e(0, n.a, 1), n
		}, n.clone = function() {
			return r.color.make(n.r, n.b, n.g, n.a)
		}, n.normalize()
	}, r.color.extract = function(e, t) {
		var i;
		do {
			if ("" != (i = e.css(t).toLowerCase()) && "transparent" != i) break;
			e = e.parent()
		} while (e.length && !r.nodeName(e.get(0), "body"));
		return "rgba(0, 0, 0, 0)" == i && (i = "transparent"), r.color.parse(i)
	}, r.color.parse = function(e) {
		var t, i = r.color.make;
		if (t = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(e)) return i(parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3], 10));
		if (t = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(e)) return i(parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3], 10), parseFloat(t[4]));
		if (t = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(e)) return i(2.55 * parseFloat(t[1]), 2.55 * parseFloat(t[2]), 2.55 * parseFloat(t[3]));
		if (t = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(e)) return i(2.55 * parseFloat(t[1]), 2.55 * parseFloat(t[2]), 2.55 * parseFloat(t[3]), parseFloat(t[4]));
		if (t = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(e)) return i(parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16));
		if (t = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(e)) return i(parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16));
		var o = r.trim(e).toLowerCase();
		return "transparent" == o ? i(255, 255, 255, 0) : i((t = n[o] || [0, 0, 0])[0], t[1], t[2])
	};
	var n = {
		aqua: [0, 255, 255],
		azure: [240, 255, 255],
		beige: [245, 245, 220],
		black: [0, 0, 0],
		blue: [0, 0, 255],
		brown: [165, 42, 42],
		cyan: [0, 255, 255],
		darkblue: [0, 0, 139],
		darkcyan: [0, 139, 139],
		darkgrey: [169, 169, 169],
		darkgreen: [0, 100, 0],
		darkkhaki: [189, 183, 107],
		darkmagenta: [139, 0, 139],
		darkolivegreen: [85, 107, 47],
		darkorange: [255, 140, 0],
		darkorchid: [153, 50, 204],
		darkred: [139, 0, 0],
		darksalmon: [233, 150, 122],
		darkviolet: [148, 0, 211],
		fuchsia: [255, 0, 255],
		gold: [255, 215, 0],
		green: [0, 128, 0],
		indigo: [75, 0, 130],
		khaki: [240, 230, 140],
		lightblue: [173, 216, 230],
		lightcyan: [224, 255, 255],
		lightgreen: [144, 238, 144],
		lightgrey: [211, 211, 211],
		lightpink: [255, 182, 193],
		lightyellow: [255, 255, 224],
		lime: [0, 255, 0],
		magenta: [255, 0, 255],
		maroon: [128, 0, 0],
		navy: [0, 0, 128],
		olive: [128, 128, 0],
		orange: [255, 165, 0],
		pink: [255, 192, 203],
		purple: [128, 0, 128],
		violet: [128, 0, 128],
		red: [255, 0, 0],
		silver: [192, 192, 192],
		white: [255, 255, 255],
		yellow: [255, 255, 0]
	}
}(jQuery),
function(Q) {
	var d = Object.prototype.hasOwnProperty;

	function J(e, t) {
		var i = t.children("." + e)[0];
		if (null == i && ((i = document.createElement("canvas")).className = e, Q(i).css({
				direction: "ltr",
				position: "absolute",
				left: 0,
				top: 0
			}).appendTo(t), !i.getContext)) {
			if (!window.G_vmlCanvasManager) throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
			i = window.G_vmlCanvasManager.initElement(i)
		}
		this.element = i;
		var o = this.context = i.getContext("2d"),
			n = window.devicePixelRatio || 1,
			r = o.webkitBackingStorePixelRatio || o.mozBackingStorePixelRatio || o.msBackingStorePixelRatio || o.oBackingStorePixelRatio || o.backingStorePixelRatio || 1;
		this.pixelRatio = n / r, this.resize(t.width(), t.height()), this.textContainer = null, this.text = {}, this._textCache = {}
	}

	function o(m, e, t, o) {
		var T = [],
			z = {
				colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
				legend: {
					show: !0,
					noColumns: 1,
					labelFormatter: null,
					labelBoxBorderColor: "#ccc",
					container: null,
					position: "ne",
					margin: 5,
					backgroundColor: null,
					backgroundOpacity: .85,
					sorted: null
				},
				xaxis: {
					show: null,
					position: "bottom",
					mode: null,
					font: null,
					color: null,
					tickColor: null,
					transform: null,
					inverseTransform: null,
					min: null,
					max: null,
					autoscaleMargin: null,
					ticks: null,
					tickFormatter: null,
					labelWidth: null,
					labelHeight: null,
					reserveSpace: null,
					tickLength: null,
					alignTicksWithAxis: null,
					tickDecimals: null,
					tickSize: null,
					minTickSize: null
				},
				yaxis: {
					autoscaleMargin: .02,
					position: "left"
				},
				xaxes: [],
				yaxes: [],
				series: {
					points: {
						show: !1,
						radius: 3,
						lineWidth: 2,
						fill: !0,
						fillColor: "#ffffff",
						symbol: "circle"
					},
					lines: {
						lineWidth: 2,
						fill: !1,
						fillColor: null,
						steps: !1
					},
					bars: {
						show: !1,
						lineWidth: 2,
						barWidth: 1,
						fill: !0,
						fillColor: null,
						align: "left",
						horizontal: !1,
						zero: !0
					},
					shadowSize: 3,
					highlightColor: null
				},
				grid: {
					show: !0,
					aboveData: !1,
					color: "#545454",
					backgroundColor: null,
					borderColor: null,
					tickColor: null,
					margin: 0,
					labelMargin: 5,
					axisMargin: 8,
					borderWidth: 2,
					minBorderMargin: null,
					markings: null,
					markingsColor: "#f4f4f4",
					markingsLineWidth: 2,
					clickable: !1,
					hoverable: !1,
					autoHighlight: !0,
					mouseActiveRadius: 10
				},
				interaction: {
					redrawOverlayInterval: 1e3 / 60
				},
				hooks: {}
			},
			d = null,
			i = null,
			u = null,
			y = null,
			c = null,
			p = [],
			g = [],
			w = {
				left: 0,
				right: 0,
				top: 0,
				bottom: 0
			},
			M = 0,
			S = 0,
			C = {
				processOptions: [],
				processRawData: [],
				processDatapoints: [],
				processOffset: [],
				drawBackground: [],
				drawSeries: [],
				draw: [],
				bindEvents: [],
				drawOverlay: [],
				shutdown: []
			},
			A = this;

		function P(e, t) {
			t = [A].concat(t);
			for (var i = 0; i < e.length; ++i) e[i].apply(this, t)
		}

		function n(e) {
			T = function(e) {
					for (var t = [], i = 0; i < e.length; ++i) {
						var o = Q.extend(!0, {}, z.series);
						null != e[i].data ? (o.data = e[i].data, delete e[i].data, Q.extend(!0, o, e[i]), e[i].data = o.data) : o.data = e[i], t.push(o)
					}
					return t
				}(e),
				function() {
					var e, t = T.length,
						i = -1;
					for (e = 0; e < T.length; ++e) {
						var o = T[e].color;
						null != o && (t--, "number" == typeof o && i < o && (i = o))
					}
					t <= i && (t = i + 1);
					var n, r = [],
						a = z.colors,
						s = a.length,
						l = 0;
					for (e = 0; e < t; e++) n = Q.color.parse(a[e % s] || "#666"), e % s == 0 && e && (l = 0 <= l ? l < .5 ? -l - .2 : 0 : -l), r[e] = n.scale("rgb", 1 + l);
					var c, u = 0;
					for (e = 0; e < T.length; ++e) {
						if (null == (c = T[e]).color ? (c.color = r[u].toString(), ++u) : "number" == typeof c.color && (c.color = r[c.color].toString()), null == c.lines.show) {
							var h, f = !0;
							for (h in c)
								if (c[h] && c[h].show) {
									f = !1;
									break
								} f && (c.lines.show = !0)
						}
						null == c.lines.zero && (c.lines.zero = !!c.lines.fill), c.xaxis = v(p, x(c, "x")), c.yaxis = v(g, x(c, "y"))
					}
				}(),
				function() {
					var e, t, i, o, n, r, a, s, l, c, u, h, f = Number.POSITIVE_INFINITY,
						d = Number.NEGATIVE_INFINITY,
						p = Number.MAX_VALUE;

					function g(e, t, i) {
						t < e.datamin && t != -p && (e.datamin = t), i > e.datamax && i != p && (e.datamax = i)
					}
					for (Q.each(W(), function(e, t) {
							t.datamin = f, t.datamax = d, t.used = !1
						}), e = 0; e < T.length; ++e)(n = T[e]).datapoints = {
						points: []
					}, P(C.processRawData, [n, n.data, n.datapoints]);
					for (e = 0; e < T.length; ++e) {
						if (n = T[e], u = n.data, !(h = n.datapoints.format)) {
							if ((h = []).push({
									x: !0,
									number: !0,
									required: !0
								}), h.push({
									y: !0,
									number: !0,
									required: !0
								}), n.bars.show || n.lines.show && n.lines.fill) {
								var m = !!(n.bars.show && n.bars.zero || n.lines.show && n.lines.zero);
								h.push({
									y: !0,
									number: !0,
									required: !1,
									defaultValue: 0,
									autoscale: m
								}), n.bars.horizontal && (delete h[h.length - 1].y, h[h.length - 1].x = !0)
							}
							n.datapoints.format = h
						}
						if (null == n.datapoints.pointsize) {
							n.datapoints.pointsize = h.length, a = n.datapoints.pointsize, r = n.datapoints.points;
							var x = n.lines.show && n.lines.steps;
							for (n.xaxis.used = n.yaxis.used = !0, t = i = 0; t < u.length; ++t, i += a) {
								var v = null == (c = u[t]);
								if (!v)
									for (o = 0; o < a; ++o) s = c[o], (l = h[o]) && (l.number && null != s && (s = +s, isNaN(s) ? s = null : s == 1 / 0 ? s = p : s == -1 / 0 && (s = -p)), null == s && (l.required && (v = !0), null != l.defaultValue && (s = l.defaultValue))), r[i + o] = s;
								if (v)
									for (o = 0; o < a; ++o) null != (s = r[i + o]) && !1 !== (l = h[o]).autoscale && (l.x && g(n.xaxis, s, s), l.y && g(n.yaxis, s, s)), r[i + o] = null;
								else if (x && 0 < i && null != r[i - a] && r[i - a] != r[i] && r[i - a + 1] != r[i + 1]) {
									for (o = 0; o < a; ++o) r[i + a + o] = r[i + o];
									r[i + 1] = r[i - a + 1], i += a
								}
							}
						}
					}
					for (e = 0; e < T.length; ++e) n = T[e], P(C.processDatapoints, [n, n.datapoints]);
					for (e = 0; e < T.length; ++e) {
						n = T[e], r = n.datapoints.points, a = n.datapoints.pointsize, h = n.datapoints.format;
						var b = f,
							k = f,
							y = d,
							w = d;
						for (t = 0; t < r.length; t += a)
							if (null != r[t])
								for (o = 0; o < a; ++o) s = r[t + o], (l = h[o]) && !1 !== l.autoscale && s != p && s != -p && (l.x && (s < b && (b = s), y < s && (y = s)), l.y && (s < k && (k = s), w < s && (w = s)));
						if (n.bars.show) {
							var M;
							switch (n.bars.align) {
								case "left":
									M = 0;
									break;
								case "right":
									M = -n.bars.barWidth;
									break;
								default:
									M = -n.bars.barWidth / 2
							}
							n.bars.horizontal ? (k += M, w += M + n.bars.barWidth) : (b += M, y += M + n.bars.barWidth)
						}
						g(n.xaxis, b, y), g(n.yaxis, k, w)
					}
					Q.each(W(), function(e, t) {
						t.datamin == f && (t.datamin = null), t.datamax == d && (t.datamax = null)
					})
				}()
		}

		function x(e, t) {
			var i = e[t + "axis"];
			return "object" == typeof i && (i = i.n), "number" != typeof i && (i = 1), i
		}

		function W() {
			return Q.grep(p.concat(g), function(e) {
				return e
			})
		}

		function h(e) {
			var t, i, o = {};
			for (t = 0; t < p.length; ++t)(i = p[t]) && i.used && (o["x" + i.n] = i.c2p(e.left));
			for (t = 0; t < g.length; ++t)(i = g[t]) && i.used && (o["y" + i.n] = i.c2p(e.top));
			return void 0 !== o.x1 && (o.x = o.x1), void 0 !== o.y1 && (o.y = o.y1), o
		}

		function v(e, t) {
			return e[t - 1] || (e[t - 1] = {
				n: t,
				direction: e == p ? "x" : "y",
				options: Q.extend(!0, {}, e == p ? z.xaxis : z.yaxis)
			}), e[t - 1]
		}

		function r() {
			O && clearTimeout(O), u.unbind("mousemove", N), u.unbind("mouseleave", R), u.unbind("click", q), P(C.shutdown, [u])
		}

		function a(i) {
			var e = i.labelWidth,
				t = i.labelHeight,
				o = i.options.position,
				n = "x" === i.direction,
				r = i.options.tickLength,
				a = z.grid.axisMargin,
				s = z.grid.labelMargin,
				l = !0,
				c = !0,
				u = !0,
				h = !1;
			Q.each(n ? p : g, function(e, t) {
				t && (t.show || t.reserveSpace) && (t === i ? h = !0 : t.options.position === o && (h ? c = !1 : l = !1), h || (u = !1))
			}), c && (a = 0), null == r && (r = u ? "full" : 5), isNaN(+r) || (s += +r), n ? (t += s, "bottom" == o ? (w.bottom += t + a, i.box = {
				top: d.height - w.bottom,
				height: t
			}) : (i.box = {
				top: w.top + a,
				height: t
			}, w.top += t + a)) : (e += s, "left" == o ? (i.box = {
				left: w.left + a,
				width: e
			}, w.left += e + a) : (w.right += e + a, i.box = {
				left: d.width - w.right,
				width: e
			})), i.position = o, i.tickLength = r, i.box.padding = s, i.innermost = l
		}

		function s() {
			var e, t = W(),
				i = z.grid.show;
			for (var o in w) {
				var n = z.grid.margin || 0;
				w[o] = "number" == typeof n ? n : n[o] || 0
			}
			for (var o in P(C.processOffset, [w]), w) "object" == typeof z.grid.borderWidth ? w[o] += i ? z.grid.borderWidth[o] : 0 : w[o] += i ? z.grid.borderWidth : 0;
			if (Q.each(t, function(e, t) {
					var i = t.options;
					t.show = null == i.show ? t.used : i.show, t.reserveSpace = null == i.reserveSpace ? t.show : i.reserveSpace,
						function(e) {
							var t = e.options,
								i = +(null != t.min ? t.min : e.datamin),
								o = +(null != t.max ? t.max : e.datamax),
								n = o - i;
							if (0 == n) {
								var r = 0 == o ? 1 : .01;
								null == t.min && (i -= r), null != t.max && null == t.min || (o += r)
							} else {
								var a = t.autoscaleMargin;
								null != a && (null == t.min && (i -= n * a) < 0 && null != e.datamin && 0 <= e.datamin && (i = 0), null == t.max && 0 < (o += n * a) && null != e.datamax && e.datamax <= 0 && (o = 0))
							}
							e.min = i, e.max = o
						}(t)
				}), i) {
				var r = Q.grep(t, function(e) {
					return e.show || e.reserveSpace
				});
				for (Q.each(r, function(e, t) {
						var i, o;
						! function(e) {
							var t, i = e.options;
							t = "number" == typeof i.ticks && 0 < i.ticks ? i.ticks : .3 * Math.sqrt("x" == e.direction ? d.width : d.height);
							var o = (e.max - e.min) / t,
								n = -Math.floor(Math.log(o) / Math.LN10),
								r = i.tickDecimals;
							null != r && r < n && (n = r);
							var a, s = Math.pow(10, -n),
								l = o / s;
							l < 1.5 ? a = 1 : l < 3 ? (a = 2, 2.25 < l && (null == r || n + 1 <= r) && (a = 2.5, ++n)) : a = l < 7.5 ? 5 : 10;
							a *= s, null != i.minTickSize && a < i.minTickSize && (a = i.minTickSize);
							if (e.delta = o, e.tickDecimals = Math.max(0, null != r ? r : n), e.tickSize = i.tickSize || a, "time" == i.mode && !e.tickGenerator) throw new Error("Time mode requires the flot.time plugin.");
							e.tickGenerator || (e.tickGenerator = function(e) {
								for (var t, i, o, n = [], r = (i = e.min, (o = e.tickSize) * Math.floor(i / o)), a = 0, s = Number.NaN; t = s, s = r + a * e.tickSize, n.push(s), ++a, s < e.max && s != t;);
								return n
							}, e.tickFormatter = function(e, t) {
								var i = t.tickDecimals ? Math.pow(10, t.tickDecimals) : 1,
									o = "" + Math.round(e * i) / i;
								if (null != t.tickDecimals) {
									var n = o.indexOf("."),
										r = -1 == n ? 0 : o.length - n - 1;
									if (r < t.tickDecimals) return (r ? o : o + ".") + ("" + i).substr(1, t.tickDecimals - r)
								}
								return o
							});
							Q.isFunction(i.tickFormatter) && (e.tickFormatter = function(e, t) {
								return "" + i.tickFormatter(e, t)
							});
							if (null != i.alignTicksWithAxis) {
								var c = ("x" == e.direction ? p : g)[i.alignTicksWithAxis - 1];
								if (c && c.used && c != e) {
									var u = e.tickGenerator(e);
									if (0 < u.length && (null == i.min && (e.min = Math.min(e.min, u[0])), null == i.max && 1 < u.length && (e.max = Math.max(e.max, u[u.length - 1]))), e.tickGenerator = function(e) {
											var t, i, o = [];
											for (i = 0; i < c.ticks.length; ++i) t = (c.ticks[i].v - c.min) / (c.max - c.min), t = e.min + t * (e.max - e.min), o.push(t);
											return o
										}, !e.mode && null == i.tickDecimals) {
										var h = Math.max(0, 1 - Math.floor(Math.log(e.delta) / Math.LN10)),
											f = e.tickGenerator(e);
										1 < f.length && /\..*0$/.test((f[1] - f[0]).toFixed(h)) || (e.tickDecimals = h)
									}
								}
							}
						}(t),
						function(e) {
							var t, i, o = e.options.ticks,
								n = [];
							null == o || "number" == typeof o && 0 < o ? n = e.tickGenerator(e) : o && (n = Q.isFunction(o) ? o(e) : o);
							for (e.ticks = [], t = 0; t < n.length; ++t) {
								var r = null,
									a = n[t];
								"object" == typeof a ? (i = +a[0], 1 < a.length && (r = a[1])) : i = +a, null == r && (r = e.tickFormatter(i, e)), isNaN(i) || e.ticks.push({
									v: i,
									label: r
								})
							}
						}(t), o = (i = t).ticks, i.options.autoscaleMargin && 0 < o.length && (null == i.options.min && (i.min = Math.min(i.min, o[0].v)), null == i.options.max && 1 < o.length && (i.max = Math.max(i.max, o[o.length - 1].v))),
							function(e) {
								for (var t = e.options, i = e.ticks || [], o = t.labelWidth || 0, n = t.labelHeight || 0, r = o || ("x" == e.direction ? Math.floor(d.width / (i.length || 1)) : null), a = e.direction + "Axis " + e.direction + e.n + "Axis", s = "flot-" + e.direction + "-axis flot-" + e.direction + e.n + "-axis " + a, l = t.font || "flot-tick-label tickLabel", c = 0; c < i.length; ++c) {
									var u = i[c];
									if (u.label) {
										var h = d.getTextInfo(s, u.label, l, null, r);
										o = Math.max(o, h.width), n = Math.max(n, h.height)
									}
								}
								e.labelWidth = t.labelWidth || o, e.labelHeight = t.labelHeight || n
							}(t)
					}), e = r.length - 1; 0 <= e; --e) a(r[e]);
				! function() {
					var e, t = z.grid.minBorderMargin;
					if (null == t)
						for (e = t = 0; e < T.length; ++e) t = Math.max(t, 2 * (T[e].points.radius + T[e].points.lineWidth / 2));
					var i = {
						left: t,
						right: t,
						top: t,
						bottom: t
					};
					Q.each(W(), function(e, t) {
						t.reserveSpace && t.ticks && t.ticks.length && ("x" === t.direction ? (i.left = Math.max(i.left, t.labelWidth / 2), i.right = Math.max(i.right, t.labelWidth / 2)) : (i.bottom = Math.max(i.bottom, t.labelHeight / 2), i.top = Math.max(i.top, t.labelHeight / 2)))
					}), w.left = Math.ceil(Math.max(i.left, w.left)), w.right = Math.ceil(Math.max(i.right, w.right)), w.top = Math.ceil(Math.max(i.top, w.top)), w.bottom = Math.ceil(Math.max(i.bottom, w.bottom))
				}(), Q.each(r, function(e, t) {
					var i;
					"x" == (i = t).direction ? (i.box.left = w.left - i.labelWidth / 2, i.box.width = d.width - w.left - w.right + i.labelWidth) : (i.box.top = w.top - i.labelHeight / 2, i.box.height = d.height - w.bottom - w.top + i.labelHeight)
				})
			}
			M = d.width - w.left - w.right, S = d.height - w.bottom - w.top, Q.each(t, function(e, t) {
					! function(e) {
						function t(e) {
							return e
						}
						var i, o, n = e.options.transform || t,
							r = e.options.inverseTransform;
						o = "x" == e.direction ? (i = e.scale = M / Math.abs(n(e.max) - n(e.min)), Math.min(n(e.max), n(e.min))) : (i = -(i = e.scale = S / Math.abs(n(e.max) - n(e.min))), Math.max(n(e.max), n(e.min))), e.p2c = n == t ? function(e) {
							return (e - o) * i
						} : function(e) {
							return (n(e) - o) * i
						}, e.c2p = r ? function(e) {
							return r(o + e / i)
						} : function(e) {
							return o + e / i
						}
					}(t)
				}), i && Q.each(W(), function(e, t) {
					var i, o, n, r, a, s = t.box,
						l = t.direction + "Axis " + t.direction + t.n + "Axis",
						c = "flot-" + t.direction + "-axis flot-" + t.direction + t.n + "-axis " + l,
						u = t.options.font || "flot-tick-label tickLabel";
					if (d.removeText(c), t.show && 0 != t.ticks.length)
						for (var h = 0; h < t.ticks.length; ++h) !(i = t.ticks[h]).label || i.v < t.min || i.v > t.max || ("x" == t.direction ? (r = "center", o = w.left + t.p2c(i.v), "bottom" == t.position ? n = s.top + s.padding : (n = s.top + s.height - s.padding, a = "bottom")) : (a = "middle", n = w.top + t.p2c(i.v), "left" == t.position ? (o = s.left + s.width - s.padding, r = "right") : o = s.left + s.padding), d.addText(c, o, n, i.label, u, null, null, r, a))
				}),
				function() {
					null != z.legend.container ? Q(z.legend.container).html("") : m.find(".legend").remove();
					if (!z.legend.show) return;
					for (var e, t, i = [], o = [], n = !1, r = z.legend.labelFormatter, a = 0; a < T.length; ++a)(e = T[a]).label && (t = r ? r(e.label, e) : e.label) && o.push({
						label: t,
						color: e.color
					});
					if (z.legend.sorted)
						if (Q.isFunction(z.legend.sorted)) o.sort(z.legend.sorted);
						else if ("reverse" == z.legend.sorted) o.reverse();
					else {
						var s = "descending" != z.legend.sorted;
						o.sort(function(e, t) {
							return e.label == t.label ? 0 : e.label < t.label != s ? 1 : -1
						})
					}
					for (var a = 0; a < o.length; ++a) {
						var l = o[a];
						a % z.legend.noColumns == 0 && (n && i.push("</tr>"), i.push("<tr>"), n = !0), i.push('<td class="legendColorBox"><div style="border:1px solid ' + z.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + l.color + ';overflow:hidden"></div></div></td><td class="legendLabel">' + l.label + "</td>")
					}
					n && i.push("</tr>");
					if (0 == i.length) return;
					var c = '<table style="font-size:smaller;color:' + z.grid.color + '">' + i.join("") + "</table>";
					if (null != z.legend.container) Q(z.legend.container).html(c);
					else {
						var u = "",
							h = z.legend.position,
							f = z.legend.margin;
						null == f[0] && (f = [f, f]), "n" == h.charAt(0) ? u += "top:" + (f[1] + w.top) + "px;" : "s" == h.charAt(0) && (u += "bottom:" + (f[1] + w.bottom) + "px;"), "e" == h.charAt(1) ? u += "right:" + (f[0] + w.right) + "px;" : "w" == h.charAt(1) && (u += "left:" + (f[0] + w.left) + "px;");
						var d = Q('<div class="legend">' + c.replace('style="', 'style="position:absolute;' + u + ";") + "</div>").appendTo(m);
						if (0 != z.legend.backgroundOpacity) {
							var p = z.legend.backgroundColor;
							null == p && ((p = (p = z.grid.backgroundColor) && "string" == typeof p ? Q.color.parse(p) : Q.color.extract(d, "background-color")).a = 1, p = p.toString());
							var g = d.children();
							Q('<div style="position:absolute;width:' + g.width() + "px;height:" + g.height() + "px;" + u + "background-color:" + p + ';"> </div>').prependTo(d).css("opacity", z.legend.backgroundOpacity)
						}
					}
				}()
		}

		function l() {
			d.clear(), P(C.drawBackground, [y]);
			var e = z.grid;
			e.show && e.backgroundColor && (y.save(), y.translate(w.left, w.top), y.fillStyle = _(z.grid.backgroundColor, S, 0, "rgba(255, 255, 255, 0)"), y.fillRect(0, 0, M, S), y.restore()), e.show && !e.aboveData && f();
			for (var t = 0; t < T.length; ++t) P(C.drawSeries, [y, T[t]]), b(T[t]);
			P(C.draw, [y]), e.show && e.aboveData && f(), d.render(), L()
		}

		function I(e, t) {
			for (var i, o, n, r, a = W(), s = 0; s < a.length; ++s)
				if ((i = a[s]).direction == t && (e[r = t + i.n + "axis"] || 1 != i.n || (r = t + "axis"), e[r])) {
					o = e[r].from, n = e[r].to;
					break
				} if (e[r] || (i = "x" == t ? p[0] : g[0], o = e[t + "1"], n = e[t + "2"]), null != o && null != n && n < o) {
				var l = o;
				o = n, n = l
			}
			return {
				from: o,
				to: n,
				axis: i
			}
		}

		function f() {
			var e, t, i, o;
			y.save(), y.translate(w.left, w.top);
			var n = z.grid.markings;
			if (n)
				for (Q.isFunction(n) && ((t = A.getAxes()).xmin = t.xaxis.min, t.xmax = t.xaxis.max, t.ymin = t.yaxis.min, t.ymax = t.yaxis.max, n = n(t)), e = 0; e < n.length; ++e) {
					var r = n[e],
						a = I(r, "x"),
						s = I(r, "y");
					if (null == a.from && (a.from = a.axis.min), null == a.to && (a.to = a.axis.max), null == s.from && (s.from = s.axis.min), null == s.to && (s.to = s.axis.max), !(a.to < a.axis.min || a.from > a.axis.max || s.to < s.axis.min || s.from > s.axis.max)) {
						a.from = Math.max(a.from, a.axis.min), a.to = Math.min(a.to, a.axis.max), s.from = Math.max(s.from, s.axis.min), s.to = Math.min(s.to, s.axis.max);
						var l = a.from === a.to,
							c = s.from === s.to;
						if (!l || !c)
							if (a.from = Math.floor(a.axis.p2c(a.from)), a.to = Math.floor(a.axis.p2c(a.to)), s.from = Math.floor(s.axis.p2c(s.from)), s.to = Math.floor(s.axis.p2c(s.to)), l || c) {
								var u = r.lineWidth || z.grid.markingsLineWidth,
									h = u % 2 ? .5 : 0;
								y.beginPath(), y.strokeStyle = r.color || z.grid.markingsColor, y.lineWidth = u, l ? (y.moveTo(a.to + h, s.from), y.lineTo(a.to + h, s.to)) : (y.moveTo(a.from, s.to + h), y.lineTo(a.to, s.to + h)), y.stroke()
							} else y.fillStyle = r.color || z.grid.markingsColor, y.fillRect(a.from, s.to, a.to - a.from, s.from - s.to)
					}
				}
			t = W(), i = z.grid.borderWidth;
			for (var f = 0; f < t.length; ++f) {
				var d, p, g, m, x = t[f],
					v = x.box,
					b = x.tickLength;
				if (x.show && 0 != x.ticks.length) {
					for (y.lineWidth = 1, "x" == x.direction ? (d = 0, p = "full" == b ? "top" == x.position ? 0 : S : v.top - w.top + ("top" == x.position ? v.height : 0)) : (p = 0, d = "full" == b ? "left" == x.position ? 0 : M : v.left - w.left + ("left" == x.position ? v.width : 0)), x.innermost || (y.strokeStyle = x.options.color, y.beginPath(), g = m = 0, "x" == x.direction ? g = M + 1 : m = S + 1, 1 == y.lineWidth && ("x" == x.direction ? p = Math.floor(p) + .5 : d = Math.floor(d) + .5), y.moveTo(d, p), y.lineTo(d + g, p + m), y.stroke()), y.strokeStyle = x.options.tickColor, y.beginPath(), e = 0; e < x.ticks.length; ++e) {
						var k = x.ticks[e].v;
						g = m = 0, isNaN(k) || k < x.min || k > x.max || "full" == b && ("object" == typeof i && 0 < i[x.position] || 0 < i) && (k == x.min || k == x.max) || ("x" == x.direction ? (d = x.p2c(k), m = "full" == b ? -S : b, "top" == x.position && (m = -m)) : (p = x.p2c(k), g = "full" == b ? -M : b, "left" == x.position && (g = -g)), 1 == y.lineWidth && ("x" == x.direction ? d = Math.floor(d) + .5 : p = Math.floor(p) + .5), y.moveTo(d, p), y.lineTo(d + g, p + m))
					}
					y.stroke()
				}
			}
			i && (o = z.grid.borderColor, "object" == typeof i || "object" == typeof o ? ("object" != typeof i && (i = {
				top: i,
				right: i,
				bottom: i,
				left: i
			}), "object" != typeof o && (o = {
				top: o,
				right: o,
				bottom: o,
				left: o
			}), 0 < i.top && (y.strokeStyle = o.top, y.lineWidth = i.top, y.beginPath(), y.moveTo(0 - i.left, 0 - i.top / 2), y.lineTo(M, 0 - i.top / 2), y.stroke()), 0 < i.right && (y.strokeStyle = o.right, y.lineWidth = i.right, y.beginPath(), y.moveTo(M + i.right / 2, 0 - i.top), y.lineTo(M + i.right / 2, S), y.stroke()), 0 < i.bottom && (y.strokeStyle = o.bottom, y.lineWidth = i.bottom, y.beginPath(), y.moveTo(M + i.right, S + i.bottom / 2), y.lineTo(0, S + i.bottom / 2), y.stroke()), 0 < i.left && (y.strokeStyle = o.left, y.lineWidth = i.left, y.beginPath(), y.moveTo(0 - i.left / 2, S + i.bottom), y.lineTo(0 - i.left / 2, 0), y.stroke())) : (y.lineWidth = i, y.strokeStyle = z.grid.borderColor, y.strokeRect(-i / 2, -i / 2, M + i, S + i))), y.restore()
		}

		function b(e) {
			e.lines.show && function(e) {
				function t(e, t, i, o, n) {
					var r = e.points,
						a = e.pointsize,
						s = null,
						l = null;
					y.beginPath();
					for (var c = a; c < r.length; c += a) {
						var u = r[c - a],
							h = r[c - a + 1],
							f = r[c],
							d = r[c + 1];
						if (null != u && null != f) {
							if (h <= d && h < n.min) {
								if (d < n.min) continue;
								u = (n.min - h) / (d - h) * (f - u) + u, h = n.min
							} else if (d <= h && d < n.min) {
								if (h < n.min) continue;
								f = (n.min - h) / (d - h) * (f - u) + u, d = n.min
							}
							if (d <= h && h > n.max) {
								if (d > n.max) continue;
								u = (n.max - h) / (d - h) * (f - u) + u, h = n.max
							} else if (h <= d && d > n.max) {
								if (h > n.max) continue;
								f = (n.max - h) / (d - h) * (f - u) + u, d = n.max
							}
							if (u <= f && u < o.min) {
								if (f < o.min) continue;
								h = (o.min - u) / (f - u) * (d - h) + h, u = o.min
							} else if (f <= u && f < o.min) {
								if (u < o.min) continue;
								d = (o.min - u) / (f - u) * (d - h) + h, f = o.min
							}
							if (f <= u && u > o.max) {
								if (f > o.max) continue;
								h = (o.max - u) / (f - u) * (d - h) + h, u = o.max
							} else if (u <= f && f > o.max) {
								if (u > o.max) continue;
								d = (o.max - u) / (f - u) * (d - h) + h, f = o.max
							}
							u == s && h == l || y.moveTo(o.p2c(u) + t, n.p2c(h) + i), s = f, l = d, y.lineTo(o.p2c(f) + t, n.p2c(d) + i)
						}
					}
					y.stroke()
				}
				y.save(), y.translate(w.left, w.top), y.lineJoin = "round";
				var i = e.lines.lineWidth,
					o = e.shadowSize;
				if (0 < i && 0 < o) {
					y.lineWidth = o, y.strokeStyle = "rgba(0,0,0,0.1)";
					var n = Math.PI / 18;
					t(e.datapoints, Math.sin(n) * (i / 2 + o / 2), Math.cos(n) * (i / 2 + o / 2), e.xaxis, e.yaxis), y.lineWidth = o / 2, t(e.datapoints, Math.sin(n) * (i / 2 + o / 4), Math.cos(n) * (i / 2 + o / 4), e.xaxis, e.yaxis)
				}
				y.lineWidth = i, y.strokeStyle = e.color;
				var r = F(e.lines, e.color, 0, S);
				r && (y.fillStyle = r, function(e, t, i) {
					var o = e.points,
						n = e.pointsize,
						r = Math.min(Math.max(0, i.min), i.max),
						a = 0,
						s = !1,
						l = 1,
						c = 0,
						u = 0;
					for (; !(0 < n && a > o.length + n);) {
						var h = o[(a += n) - n],
							f = o[a - n + l],
							d = o[a],
							p = o[a + l];
						if (s) {
							if (0 < n && null != h && null == d) {
								u = a, n = -n, l = 2;
								continue
							}
							if (n < 0 && a == c + n) {
								y.fill(), s = !1, l = 1, a = c = u + (n = -n);
								continue
							}
						}
						if (null != h && null != d) {
							if (h <= d && h < t.min) {
								if (d < t.min) continue;
								f = (t.min - h) / (d - h) * (p - f) + f, h = t.min
							} else if (d <= h && d < t.min) {
								if (h < t.min) continue;
								p = (t.min - h) / (d - h) * (p - f) + f, d = t.min
							}
							if (d <= h && h > t.max) {
								if (d > t.max) continue;
								f = (t.max - h) / (d - h) * (p - f) + f, h = t.max
							} else if (h <= d && d > t.max) {
								if (h > t.max) continue;
								p = (t.max - h) / (d - h) * (p - f) + f, d = t.max
							}
							if (s || (y.beginPath(), y.moveTo(t.p2c(h), i.p2c(r)), s = !0), f >= i.max && p >= i.max) y.lineTo(t.p2c(h), i.p2c(i.max)), y.lineTo(t.p2c(d), i.p2c(i.max));
							else if (f <= i.min && p <= i.min) y.lineTo(t.p2c(h), i.p2c(i.min)), y.lineTo(t.p2c(d), i.p2c(i.min));
							else {
								var g = h,
									m = d;
								f <= p && f < i.min && p >= i.min ? (h = (i.min - f) / (p - f) * (d - h) + h, f = i.min) : p <= f && p < i.min && f >= i.min && (d = (i.min - f) / (p - f) * (d - h) + h, p = i.min), p <= f && f > i.max && p <= i.max ? (h = (i.max - f) / (p - f) * (d - h) + h, f = i.max) : f <= p && p > i.max && f <= i.max && (d = (i.max - f) / (p - f) * (d - h) + h, p = i.max), h != g && y.lineTo(t.p2c(g), i.p2c(f)), y.lineTo(t.p2c(h), i.p2c(f)), y.lineTo(t.p2c(d), i.p2c(p)), d != m && (y.lineTo(t.p2c(d), i.p2c(p)), y.lineTo(t.p2c(m), i.p2c(p)))
							}
						}
					}
				}(e.datapoints, e.xaxis, e.yaxis));
				0 < i && t(e.datapoints, 0, 0, e.xaxis, e.yaxis);
				y.restore()
			}(e), e.bars.show && function(c) {
				var e;
				switch (y.save(), y.translate(w.left, w.top), y.lineWidth = c.bars.lineWidth, y.strokeStyle = c.color, c.bars.align) {
					case "left":
						e = 0;
						break;
					case "right":
						e = -c.bars.barWidth;
						break;
					default:
						e = -c.bars.barWidth / 2
				}
				var t = c.bars.fill ? function(e, t) {
					return F(c.bars, c.color, e, t)
				} : null;
				(function(e, t, i, o, n, r) {
					for (var a = e.points, s = e.pointsize, l = 0; l < a.length; l += s) null != a[l] && k(a[l], a[l + 1], a[l + 2], t, i, o, n, r, y, c.bars.horizontal, c.bars.lineWidth)
				})(c.datapoints, e, e + c.bars.barWidth, t, c.xaxis, c.yaxis), y.restore()
			}(e), e.points.show && function(e) {
				function t(e, t, i, o, n, r, a, s) {
					for (var l = e.points, c = e.pointsize, u = 0; u < l.length; u += c) {
						var h = l[u],
							f = l[u + 1];
						null == h || h < r.min || h > r.max || f < a.min || f > a.max || (y.beginPath(), h = r.p2c(h), f = a.p2c(f) + o, "circle" == s ? y.arc(h, f, t, 0, n ? Math.PI : 2 * Math.PI, !1) : s(y, h, f, t, n), y.closePath(), i && (y.fillStyle = i, y.fill()), y.stroke())
					}
				}
				y.save(), y.translate(w.left, w.top);
				var i = e.points.lineWidth,
					o = e.shadowSize,
					n = e.points.radius,
					r = e.points.symbol;
				0 == i && (i = 1e-4);
				if (0 < i && 0 < o) {
					var a = o / 2;
					y.lineWidth = a, y.strokeStyle = "rgba(0,0,0,0.1)", t(e.datapoints, n, null, a + a / 2, !0, e.xaxis, e.yaxis, r), y.strokeStyle = "rgba(0,0,0,0.2)", t(e.datapoints, n, null, a / 2, !0, e.xaxis, e.yaxis, r)
				}
				y.lineWidth = i, y.strokeStyle = e.color, t(e.datapoints, n, F(e.points, e.color), 0, !1, e.xaxis, e.yaxis, r), y.restore()
			}(e)
		}

		function k(e, t, i, o, n, r, a, s, l, c, u) {
			var h, f, d, p, g, m, x, v, b;
			c ? (v = m = x = !0, g = !1, p = t + o, d = t + n, (f = e) < (h = i) && (b = f, f = h, h = b, m = !(g = !0))) : (g = m = x = !0, v = !1, h = e + o, f = e + n, (p = t) < (d = i) && (b = p, p = d, d = b, x = !(v = !0))), f < a.min || h > a.max || p < s.min || d > s.max || (h < a.min && (h = a.min, g = !1), f > a.max && (f = a.max, m = !1), d < s.min && (d = s.min, v = !1), p > s.max && (p = s.max, x = !1), h = a.p2c(h), d = s.p2c(d), f = a.p2c(f), p = s.p2c(p), r && (l.fillStyle = r(d, p), l.fillRect(h, p, f - h, d - p)), 0 < u && (g || m || x || v) && (l.beginPath(), l.moveTo(h, d), g ? l.lineTo(h, p) : l.moveTo(h, p), x ? l.lineTo(f, p) : l.moveTo(f, p), m ? l.lineTo(f, d) : l.moveTo(f, d), v ? l.lineTo(h, d) : l.moveTo(h, d), l.stroke()))
		}

		function F(e, t, i, o) {
			var n = e.fill;
			if (!n) return null;
			if (e.fillColor) return _(e.fillColor, i, o, t);
			var r = Q.color.parse(t);
			return r.a = "number" == typeof n ? n : .4, r.normalize(), r.toString()
		}
		A.setData = n, A.setupGrid = s, A.draw = l, A.getPlaceholder = function() {
				return m
			}, A.getCanvas = function() {
				return d.element
			}, A.getPlotOffset = function() {
				return w
			}, A.width = function() {
				return M
			}, A.height = function() {
				return S
			}, A.offset = function() {
				var e = u.offset();
				return e.left += w.left, e.top += w.top, e
			}, A.getData = function() {
				return T
			}, A.getAxes = function() {
				var i = {};
				return Q.each(p.concat(g), function(e, t) {
					t && (i[t.direction + (1 != t.n ? t.n : "") + "axis"] = t)
				}), i
			}, A.getXAxes = function() {
				return p
			}, A.getYAxes = function() {
				return g
			}, A.c2p = h, A.p2c = function(e) {
				var t, i, o, n = {};
				for (t = 0; t < p.length; ++t)
					if ((i = p[t]) && i.used && (o = "x" + i.n, null == e[o] && 1 == i.n && (o = "x"), null != e[o])) {
						n.left = i.p2c(e[o]);
						break
					} for (t = 0; t < g.length; ++t)
					if ((i = g[t]) && i.used && (o = "y" + i.n, null == e[o] && 1 == i.n && (o = "y"), null != e[o])) {
						n.top = i.p2c(e[o]);
						break
					} return n
			}, A.getOptions = function() {
				return z
			}, A.highlight = j, A.unhighlight = E, A.triggerRedrawOverlay = L, A.pointOffset = function(e) {
				return {
					left: parseInt(p[x(e, "x") - 1].p2c(+e.x) + w.left, 10),
					top: parseInt(g[x(e, "y") - 1].p2c(+e.y) + w.top, 10)
				}
			}, A.shutdown = r, A.destroy = function() {
				r(), m.removeData("plot").empty(), T = [], p = [], g = [], D = [], A = C = c = y = u = i = d = z = null
			}, A.resize = function() {
				var e = m.width(),
					t = m.height();
				d.resize(e, t), i.resize(e, t)
			}, A.hooks = C,
			function() {
				for (var e = {
						Canvas: J
					}, t = 0; t < o.length; ++t) {
					var i = o[t];
					i.init(A, e), i.options && Q.extend(!0, z, i.options)
				}
			}(),
			function(e) {
				Q.extend(!0, z, e), e && e.colors && (z.colors = e.colors);
				null == z.xaxis.color && (z.xaxis.color = Q.color.parse(z.grid.color).scale("a", .22).toString());
				null == z.yaxis.color && (z.yaxis.color = Q.color.parse(z.grid.color).scale("a", .22).toString());
				null == z.xaxis.tickColor && (z.xaxis.tickColor = z.grid.tickColor || z.xaxis.color);
				null == z.yaxis.tickColor && (z.yaxis.tickColor = z.grid.tickColor || z.yaxis.color);
				null == z.grid.borderColor && (z.grid.borderColor = z.grid.color);
				null == z.grid.tickColor && (z.grid.tickColor = Q.color.parse(z.grid.color).scale("a", .22).toString());
				var t, i, o, n = m.css("font-size"),
					r = n ? +n.replace("px", "") : 13,
					a = {
						style: m.css("font-style"),
						size: Math.round(.8 * r),
						variant: m.css("font-variant"),
						weight: m.css("font-weight"),
						family: m.css("font-family")
					};
				for (o = z.xaxes.length || 1, t = 0; t < o; ++t)(i = z.xaxes[t]) && !i.tickColor && (i.tickColor = i.color), i = Q.extend(!0, {}, z.xaxis, i), (z.xaxes[t] = i).font && (i.font = Q.extend({}, a, i.font), i.font.color || (i.font.color = i.color), i.font.lineHeight || (i.font.lineHeight = Math.round(1.15 * i.font.size)));
				for (o = z.yaxes.length || 1, t = 0; t < o; ++t)(i = z.yaxes[t]) && !i.tickColor && (i.tickColor = i.color), i = Q.extend(!0, {}, z.yaxis, i), (z.yaxes[t] = i).font && (i.font = Q.extend({}, a, i.font), i.font.color || (i.font.color = i.color), i.font.lineHeight || (i.font.lineHeight = Math.round(1.15 * i.font.size)));
				z.xaxis.noTicks && null == z.xaxis.ticks && (z.xaxis.ticks = z.xaxis.noTicks);
				z.yaxis.noTicks && null == z.yaxis.ticks && (z.yaxis.ticks = z.yaxis.noTicks);
				z.x2axis && (z.xaxes[1] = Q.extend(!0, {}, z.xaxis, z.x2axis), z.xaxes[1].position = "top", null == z.x2axis.min && (z.xaxes[1].min = null), null == z.x2axis.max && (z.xaxes[1].max = null));
				z.y2axis && (z.yaxes[1] = Q.extend(!0, {}, z.yaxis, z.y2axis), z.yaxes[1].position = "right", null == z.y2axis.min && (z.yaxes[1].min = null), null == z.y2axis.max && (z.yaxes[1].max = null));
				z.grid.coloredAreas && (z.grid.markings = z.grid.coloredAreas);
				z.grid.coloredAreasColor && (z.grid.markingsColor = z.grid.coloredAreasColor);
				z.lines && Q.extend(!0, z.series.lines, z.lines);
				z.points && Q.extend(!0, z.series.points, z.points);
				z.bars && Q.extend(!0, z.series.bars, z.bars);
				null != z.shadowSize && (z.series.shadowSize = z.shadowSize);
				null != z.highlightColor && (z.series.highlightColor = z.highlightColor);
				for (t = 0; t < z.xaxes.length; ++t) v(p, t + 1).options = z.xaxes[t];
				for (t = 0; t < z.yaxes.length; ++t) v(g, t + 1).options = z.yaxes[t];
				for (var s in C) z.hooks[s] && z.hooks[s].length && (C[s] = C[s].concat(z.hooks[s]));
				P(C.processOptions, [z])
			}(t),
			function() {
				m.css("padding", 0).children().filter(function() {
					return !Q(this).hasClass("flot-overlay") && !Q(this).hasClass("flot-base")
				}).remove(), "static" == m.css("position") && m.css("position", "relative");
				d = new J("flot-base", m), i = new J("flot-overlay", m), y = d.context, c = i.context, u = Q(i.element).unbind();
				var e = m.data("plot");
				e && (e.shutdown(), i.clear());
				m.data("plot", A)
			}(), n(e), s(), l(),
			function() {
				z.grid.hoverable && (u.mousemove(N), u.bind("mouseleave", R));
				z.grid.clickable && u.click(q);
				P(C.bindEvents, [u])
			}();
		var D = [],
			O = null;

		function N(e) {
			z.grid.hoverable && H("plothover", e, function(e) {
				return 0 != e.hoverable
			})
		}

		function R(e) {
			z.grid.hoverable && H("plothover", e, function(e) {
				return !1
			})
		}

		function q(e) {
			H("plotclick", e, function(e) {
				return 0 != e.clickable
			})
		}

		function H(e, t, i) {
			var o = u.offset(),
				n = t.pageX - o.left - w.left,
				r = t.pageY - o.top - w.top,
				a = h({
					left: n,
					top: r
				});
			a.pageX = t.pageX, a.pageY = t.pageY;
			var s = function(e, t, i) {
				var o, n, r, a = z.grid.mouseActiveRadius,
					s = a * a + 1,
					l = null;
				for (o = T.length - 1; 0 <= o; --o)
					if (i(T[o])) {
						var c = T[o],
							u = c.xaxis,
							h = c.yaxis,
							f = c.datapoints.points,
							d = u.c2p(e),
							p = h.c2p(t),
							g = a / u.scale,
							m = a / h.scale;
						if (r = c.datapoints.pointsize, u.options.inverseTransform && (g = Number.MAX_VALUE), h.options.inverseTransform && (m = Number.MAX_VALUE), c.lines.show || c.points.show)
							for (n = 0; n < f.length; n += r) {
								var x = f[n],
									v = f[n + 1];
								if (null != x && !(g < x - d || x - d < -g || m < v - p || v - p < -m)) {
									var b = Math.abs(u.p2c(x) - e),
										k = Math.abs(h.p2c(v) - t),
										y = b * b + k * k;
									y < s && (s = y, l = [o, n / r])
								}
							}
						if (c.bars.show && !l) {
							var w, M;
							switch (c.bars.align) {
								case "left":
									w = 0;
									break;
								case "right":
									w = -c.bars.barWidth;
									break;
								default:
									w = -c.bars.barWidth / 2
							}
							for (M = w + c.bars.barWidth, n = 0; n < f.length; n += r) {
								x = f[n], v = f[n + 1];
								var S = f[n + 2];
								null != x && (T[o].bars.horizontal ? d <= Math.max(S, x) && d >= Math.min(S, x) && v + w <= p && p <= v + M : x + w <= d && d <= x + M && p >= Math.min(S, v) && p <= Math.max(S, v)) && (l = [o, n / r])
							}
						}
					} return l ? (o = l[0], n = l[1], r = T[o].datapoints.pointsize, {
					datapoint: T[o].datapoints.points.slice(n * r, (n + 1) * r),
					dataIndex: n,
					series: T[o],
					seriesIndex: o
				}) : null
			}(n, r, i);
			if (s && (s.pageX = parseInt(s.series.xaxis.p2c(s.datapoint[0]) + o.left + w.left, 10), s.pageY = parseInt(s.series.yaxis.p2c(s.datapoint[1]) + o.top + w.top, 10)), z.grid.autoHighlight) {
				for (var l = 0; l < D.length; ++l) {
					var c = D[l];
					c.auto != e || s && c.series == s.series && c.point[0] == s.datapoint[0] && c.point[1] == s.datapoint[1] || E(c.series, c.point)
				}
				s && j(s.series, s.datapoint, e)
			}
			m.trigger(e, [a, s])
		}

		function L() {
			var e = z.interaction.redrawOverlayInterval; - 1 != e ? O || (O = setTimeout(Y, e)) : Y()
		}

		function Y() {
			var e, t;
			for (O = null, c.save(), i.clear(), c.translate(w.left, w.top), e = 0; e < D.length; ++e)(t = D[e]).series.bars.show ? X(t.series, t.point) : G(t.series, t.point);
			c.restore(), P(C.drawOverlay, [c])
		}

		function j(e, t, i) {
			if ("number" == typeof e && (e = T[e]), "number" == typeof t) {
				var o = e.datapoints.pointsize;
				t = e.datapoints.points.slice(o * t, o * (t + 1))
			}
			var n = B(e, t); - 1 == n ? (D.push({
				series: e,
				point: t,
				auto: i
			}), L()) : i || (D[n].auto = !1)
		}

		function E(e, t) {
			if (null == e && null == t) return D = [], void L();
			if ("number" == typeof e && (e = T[e]), "number" == typeof t) {
				var i = e.datapoints.pointsize;
				t = e.datapoints.points.slice(i * t, i * (t + 1))
			}
			var o = B(e, t); - 1 != o && (D.splice(o, 1), L())
		}

		function B(e, t) {
			for (var i = 0; i < D.length; ++i) {
				var o = D[i];
				if (o.series == e && o.point[0] == t[0] && o.point[1] == t[1]) return i
			}
			return -1
		}

		function G(e, t) {
			var i = t[0],
				o = t[1],
				n = e.xaxis,
				r = e.yaxis,
				a = "string" == typeof e.highlightColor ? e.highlightColor : Q.color.parse(e.color).scale("a", .5).toString();
			if (!(i < n.min || i > n.max || o < r.min || o > r.max)) {
				var s = e.points.radius + e.points.lineWidth / 2;
				c.lineWidth = s, c.strokeStyle = a;
				var l = 1.5 * s;
				i = n.p2c(i), o = r.p2c(o), c.beginPath(), "circle" == e.points.symbol ? c.arc(i, o, l, 0, 2 * Math.PI, !1) : e.points.symbol(c, i, o, l, !1), c.closePath(), c.stroke()
			}
		}

		function X(e, t) {
			var i, o = "string" == typeof e.highlightColor ? e.highlightColor : Q.color.parse(e.color).scale("a", .5).toString(),
				n = o;
			switch (e.bars.align) {
				case "left":
					i = 0;
					break;
				case "right":
					i = -e.bars.barWidth;
					break;
				default:
					i = -e.bars.barWidth / 2
			}
			c.lineWidth = e.bars.lineWidth, c.strokeStyle = o, k(t[0], t[1], t[2] || 0, i, i + e.bars.barWidth, function() {
				return n
			}, e.xaxis, e.yaxis, c, e.bars.horizontal, e.bars.lineWidth)
		}

		function _(e, t, i, o) {
			if ("string" == typeof e) return e;
			for (var n = y.createLinearGradient(0, i, 0, t), r = 0, a = e.colors.length; r < a; ++r) {
				var s = e.colors[r];
				if ("string" != typeof s) {
					var l = Q.color.parse(o);
					null != s.brightness && (l = l.scale("rgb", s.brightness)), null != s.opacity && (l.a *= s.opacity), s = l.toString()
				}
				n.addColorStop(r / (a - 1), s)
			}
			return n
		}
	}
	Q.fn.detach || (Q.fn.detach = function() {
		return this.each(function() {
			this.parentNode && this.parentNode.removeChild(this)
		})
	}), J.prototype.resize = function(e, t) {
		if (e <= 0 || t <= 0) throw new Error("Invalid dimensions for plot, width = " + e + ", height = " + t);
		var i = this.element,
			o = this.context,
			n = this.pixelRatio;
		this.width != e && (i.width = e * n, i.style.width = e + "px", this.width = e), this.height != t && (i.height = t * n, i.style.height = t + "px", this.height = t), o.restore(), o.save(), o.scale(n, n)
	}, J.prototype.clear = function() {
		this.context.clearRect(0, 0, this.width, this.height)
	}, J.prototype.render = function() {
		var e = this._textCache;
		for (var t in e)
			if (d.call(e, t)) {
				var i = this.getTextLayer(t),
					o = e[t];
				for (var n in i.hide(), o)
					if (d.call(o, n)) {
						var r = o[n];
						for (var a in r)
							if (d.call(r, a)) {
								for (var s, l = r[a].positions, c = 0; s = l[c]; c++) s.active ? s.rendered || (i.append(s.element), s.rendered = !0) : (l.splice(c--, 1), s.rendered && s.element.detach());
								0 == l.length && delete r[a]
							}
					} i.show()
			}
	}, J.prototype.getTextLayer = function(e) {
		var t = this.text[e];
		return null == t && (null == this.textContainer && (this.textContainer = Q("<div class='flot-text'></div>").css({
			position: "absolute",
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			"font-size": "smaller",
			color: "#545454"
		}).insertAfter(this.element)), t = this.text[e] = Q("<div></div>").addClass(e).css({
			position: "absolute",
			top: 0,
			left: 0,
			bottom: 0,
			right: 0
		}).appendTo(this.textContainer)), t
	}, J.prototype.getTextInfo = function(e, t, i, o, n) {
		var r, a, s, l;
		if (t = "" + t, r = "object" == typeof i ? i.style + " " + i.variant + " " + i.weight + " " + i.size + "px/" + i.lineHeight + "px " + i.family : i, null == (a = this._textCache[e]) && (a = this._textCache[e] = {}), null == (s = a[r]) && (s = a[r] = {}), null == (l = s[t])) {
			var c = Q("<div></div>").html(t).css({
				position: "absolute",
				"max-width": n,
				top: -9999
			}).appendTo(this.getTextLayer(e));
			"object" == typeof i ? c.css({
				font: r,
				color: i.color
			}) : "string" == typeof i && c.addClass(i), l = s[t] = {
				width: c.outerWidth(!0),
				height: c.outerHeight(!0),
				element: c,
				positions: []
			}, c.detach()
		}
		return l
	}, J.prototype.addText = function(e, t, i, o, n, r, a, s, l) {
		var c = this.getTextInfo(e, o, n, r, a),
			u = c.positions;
		"center" == s ? t -= c.width / 2 : "right" == s && (t -= c.width), "middle" == l ? i -= c.height / 2 : "bottom" == l && (i -= c.height);
		for (var h, f = 0; h = u[f]; f++)
			if (h.x == t && h.y == i) return void(h.active = !0);
		h = {
			active: !0,
			rendered: !1,
			element: u.length ? c.element.clone() : c.element,
			x: t,
			y: i
		}, u.push(h), h.element.css({
			top: Math.round(i),
			left: Math.round(t),
			"text-align": s
		})
	}, J.prototype.removeText = function(e, t, i, o, n, r) {
		if (null == o) {
			var a = this._textCache[e];
			if (null != a)
				for (var s in a)
					if (d.call(a, s)) {
						var l = a[s];
						for (var c in l)
							if (d.call(l, c))
								for (var u = l[c].positions, h = 0; f = u[h]; h++) f.active = !1
					}
		} else {
			var f;
			for (u = this.getTextInfo(e, o, n, r).positions, h = 0; f = u[h]; h++) f.x == t && f.y == i && (f.active = !1)
		}
	}, Q.plot = function(e, t, i) {
		return new o(Q(e), t, i, Q.plot.plugins)
	}, Q.plot.version = "0.8.3", Q.plot.plugins = [], Q.fn.plot = function(e, t) {
		return this.each(function() {
			Q.plot(this, e, t)
		})
	}
}(jQuery),
function(a, s, l) {
	var c, u = [],
		h = a.resize = a.extend(a.resize, {}),
		f = !1,
		i = "setTimeout",
		d = "resize",
		p = d + "-special-event",
		g = "pendingDelay",
		o = "activeDelay",
		n = "throttleWindow";

	function m(e) {
		!0 === f && (f = e || 1);
		for (var t = u.length - 1; 0 <= t; t--) {
			var i = a(u[t]);
			if (i[0] == s || i.is(":visible")) {
				var o = i.width(),
					n = i.height(),
					r = i.data(p);
				!r || o === r.w && n === r.h || (i.trigger(d, [r.w = o, r.h = n]), f = e || !0)
			} else(r = i.data(p)).w = 0, r.h = 0
		}
		null !== c && (f && (null == e || e - f < 1e3) ? c = s.requestAnimationFrame(m) : (c = setTimeout(m, h[g]), f = !1))
	}
	h[g] = 200, h[o] = 20, h[n] = !0, a.event.special[d] = {
		setup: function() {
			if (!h[n] && this[i]) return !1;
			var e = a(this);
			u.push(this), e.data(p, {
				w: e.width(),
				h: e.height()
			}), 1 === u.length && (c = l, m())
		},
		teardown: function() {
			if (!h[n] && this[i]) return !1;
			for (var e = a(this), t = u.length - 1; 0 <= t; t--)
				if (u[t] == this) {
					u.splice(t, 1);
					break
				} e.removeData(p), u.length || (f ? cancelAnimationFrame(c) : clearTimeout(c), c = null)
		},
		add: function(e) {
			if (!h[n] && this[i]) return !1;
			var r;

			function t(e, t, i) {
				var o = a(this),
					n = o.data(p) || {};
				n.w = t !== l ? t : o.width(), n.h = i !== l ? i : o.height(), r.apply(this, arguments)
			}
			if (a.isFunction(e)) return r = e, t;
			r = e.handler, e.handler = t
		}
	}, s.requestAnimationFrame || (s.requestAnimationFrame = s.webkitRequestAnimationFrame || s.mozRequestAnimationFrame || s.oRequestAnimationFrame || s.msRequestAnimationFrame || function(e, t) {
		return s.setTimeout(function() {
			e((new Date).getTime())
		}, h[o])
	}), s.cancelAnimationFrame || (s.cancelAnimationFrame = s.webkitCancelRequestAnimationFrame || s.mozCancelRequestAnimationFrame || s.oCancelRequestAnimationFrame || s.msCancelRequestAnimationFrame || clearTimeout)
}(jQuery, this), jQuery.plot.plugins.push({
		init: function(t) {
			function i() {
				var e = t.getPlaceholder();
				0 != e.width() && 0 != e.height() && (t.resize(), t.setupGrid(), t.draw())
			}
			t.hooks.bindEvents.push(function(e, t) {
				e.getPlaceholder().resize(i)
			}), t.hooks.shutdown.push(function(e, t) {
				e.getPlaceholder().unbind("resize", i)
			})
		},
		options: {},
		name: "resize",
		version: "1.0"
	}),
	function(w) {
		var e = {
			series: {
				pie: {
					show: !1,
					radius: "auto",
					innerRadius: 0,
					startAngle: 1.5,
					tilt: 1,
					shadow: {
						left: 5,
						top: 15,
						alpha: .02
					},
					offset: {
						top: 0,
						left: "auto"
					},
					stroke: {
						color: "#fff",
						width: 1
					},
					label: {
						show: "auto",
						formatter: function(e, t) {
							return "<div style='font-size:x-small;text-align:center;padding:2px;color:" + t.color + ";'>" + e + "<br/>" + Math.round(t.percent) + "%</div>"
						},
						radius: 1,
						background: {
							color: null,
							opacity: 0
						},
						threshold: 0
					},
					combine: {
						threshold: -1,
						color: null,
						label: "Other"
					},
					highlight: {
						opacity: .5
					}
				}
			}
		};
		w.plot.plugins.push({
			init: function(u) {
				var r = null,
					v = null,
					b = null,
					h = null,
					k = null,
					y = null,
					l = !1,
					f = null,
					d = [];

				function c(e) {
					if (0 < b.series.pie.innerRadius) {
						e.save();
						var t = 1 < b.series.pie.innerRadius ? b.series.pie.innerRadius : h * b.series.pie.innerRadius;
						e.globalCompositeOperation = "destination-out", e.beginPath(), e.fillStyle = b.series.pie.stroke.color, e.arc(0, 0, t, 0, 2 * Math.PI, !1), e.fill(), e.closePath(), e.restore(), e.save(), e.beginPath(), e.strokeStyle = b.series.pie.stroke.color, e.arc(0, 0, t, 0, 2 * Math.PI, !1), e.stroke(), e.closePath(), e.restore()
					}
				}

				function p(e, t) {
					for (var i = !1, o = -1, n = e.length, r = n - 1; ++o < n; r = o)(e[o][1] <= t[1] && t[1] < e[r][1] || e[r][1] <= t[1] && t[1] < e[o][1]) && t[0] < (e[r][0] - e[o][0]) * (t[1] - e[o][1]) / (e[r][1] - e[o][1]) + e[o][0] && (i = !i);
					return i
				}

				function o(e) {
					t("plothover", e)
				}

				function n(e) {
					t("plotclick", e)
				}

				function t(e, t) {
					var i, o, n, r = u.offset(),
						a = function(e, t) {
							for (var i, o, n = u.getData(), r = u.getOptions(), a = 1 < r.series.pie.radius ? r.series.pie.radius : h * r.series.pie.radius, s = 0; s < n.length; ++s) {
								var l = n[s];
								if (l.pie.show) {
									if (f.save(), f.beginPath(), f.moveTo(0, 0), f.arc(0, 0, a, l.startAngle, l.startAngle + l.angle / 2, !1), f.arc(0, 0, a, l.startAngle + l.angle / 2, l.startAngle + l.angle, !1), f.closePath(), i = e - k, o = t - y, f.isPointInPath) {
										if (f.isPointInPath(e - k, t - y)) return f.restore(), {
											datapoint: [l.percent, l.data],
											dataIndex: 0,
											series: l,
											seriesIndex: s
										}
									} else if (p([
											[0, 0],
											[a * Math.cos(l.startAngle), a * Math.sin(l.startAngle)],
											[a * Math.cos(l.startAngle + l.angle / 4), a * Math.sin(l.startAngle + l.angle / 4)],
											[a * Math.cos(l.startAngle + l.angle / 2), a * Math.sin(l.startAngle + l.angle / 2)],
											[a * Math.cos(l.startAngle + l.angle / 1.5), a * Math.sin(l.startAngle + l.angle / 1.5)],
											[a * Math.cos(l.startAngle + l.angle), a * Math.sin(l.startAngle + l.angle)]
										], [i, o])) return f.restore(), {
										datapoint: [l.percent, l.data],
										dataIndex: 0,
										series: l,
										seriesIndex: s
									};
									f.restore()
								}
							}
							return null
						}(parseInt(t.pageX - r.left), parseInt(t.pageY - r.top));
					if (b.grid.autoHighlight)
						for (var s = 0; s < d.length; ++s) {
							var l = d[s];
							l.auto != e || a && l.series == a.series || g(l.series)
						}
					a && (i = a.series, o = e, -1 == (n = m(i)) ? (d.push({
						series: i,
						auto: o
					}), u.triggerRedrawOverlay()) : o || (d[n].auto = !1));
					var c = {
						pageX: t.pageX,
						pageY: t.pageY
					};
					v.trigger(e, [c, a])
				}

				function g(e) {
					null == e && (d = [], u.triggerRedrawOverlay());
					var t = m(e); - 1 != t && (d.splice(t, 1), u.triggerRedrawOverlay())
				}

				function m(e) {
					for (var t = 0; t < d.length; ++t)
						if (d[t].series == e) return t;
					return -1
				}
				u.hooks.processOptions.push(function(e, t) {
					t.series.pie.show && (t.grid.show = !1, "auto" == t.series.pie.label.show && (t.legend.show ? t.series.pie.label.show = !1 : t.series.pie.label.show = !0), "auto" == t.series.pie.radius && (t.series.pie.label.show ? t.series.pie.radius = .75 : t.series.pie.radius = 1), 1 < t.series.pie.tilt ? t.series.pie.tilt = 1 : t.series.pie.tilt < 0 && (t.series.pie.tilt = 0))
				}), u.hooks.bindEvents.push(function(e, t) {
					var i = e.getOptions();
					i.series.pie.show && (i.grid.hoverable && t.unbind("mousemove").mousemove(o), i.grid.clickable && t.unbind("click").click(n))
				}), u.hooks.processDatapoints.push(function(e, t, i, o) {
					var n;
					e.getOptions().series.pie.show && (n = e, l || (l = !0, r = n.getCanvas(), v = w(r).parent(), b = n.getOptions(), n.setData(function(e) {
						for (var t = 0, i = 0, o = 0, n = b.series.pie.combine.color, r = [], a = 0; a < e.length; ++a) {
							var s = e[a].data;
							w.isArray(s) && 1 == s.length && (s = s[0]), w.isArray(s) ? !isNaN(parseFloat(s[1])) && isFinite(s[1]) ? s[1] = +s[1] : s[1] = 0 : s = !isNaN(parseFloat(s)) && isFinite(s) ? [1, +s] : [1, 0], e[a].data = [s]
						}
						for (var a = 0; a < e.length; ++a) t += e[a].data[0][1];
						for (var a = 0; a < e.length; ++a) {
							var s = e[a].data[0][1];
							s / t <= b.series.pie.combine.threshold && (i += s, o++, n || (n = e[a].color))
						}
						for (var a = 0; a < e.length; ++a) {
							var s = e[a].data[0][1];
							(o < 2 || s / t > b.series.pie.combine.threshold) && r.push(w.extend(e[a], {
								data: [
									[1, s]
								],
								color: e[a].color,
								label: e[a].label,
								angle: s * Math.PI * 2 / t,
								percent: s / (t / 100)
							}))
						}
						return 1 < o && r.push({
							data: [
								[1, i]
							],
							color: n,
							label: b.series.pie.combine.label,
							angle: i * Math.PI * 2 / t,
							percent: i / (t / 100)
						}), r
					}(n.getData()))))
				}), u.hooks.drawOverlay.push(function(e, t) {
					e.getOptions().series.pie.show && function(e, t) {
						var i = e.getOptions(),
							o = 1 < i.series.pie.radius ? i.series.pie.radius : h * i.series.pie.radius;
						t.save(), t.translate(k, y), t.scale(1, i.series.pie.tilt);
						for (var n = 0; n < d.length; ++n) r(d[n].series);

						function r(e) {
							e.angle <= 0 || isNaN(e.angle) || (t.fillStyle = "rgba(255, 255, 255, " + i.series.pie.highlight.opacity + ")", t.beginPath(), 1e-9 < Math.abs(e.angle - 2 * Math.PI) && t.moveTo(0, 0), t.arc(0, 0, o, e.startAngle, e.startAngle + e.angle / 2, !1), t.arc(0, 0, o, e.startAngle + e.angle / 2, e.startAngle + e.angle, !1), t.closePath(), t.fill())
						}
						c(t), t.restore()
					}(e, t)
				}), u.hooks.draw.push(function(e, t) {
					e.getOptions().series.pie.show && function(e, t) {
						if (v) {
							var m = e.getPlaceholder().width(),
								x = e.getPlaceholder().height(),
								i = v.children().filter(".legend").children().width() || 0;
							f = t, l = !1, h = Math.min(m, x / b.series.pie.tilt) / 2, y = x / 2 + b.series.pie.offset.top, k = m / 2, "auto" == b.series.pie.offset.left ? (b.legend.position.match("w") ? k += i / 2 : k -= i / 2, k < h ? k = h : m - h < k && (k = m - h)) : k += b.series.pie.offset.left;
							for (var a = e.getData(), o = 0; 0 < o && (h *= .95), o += 1, n(), b.series.pie.tilt <= .8 && r(), !s() && o < 10;);
							10 <= o && (n(), v.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>")), e.setSeries && e.insertLegend && (e.setSeries(a), e.insertLegend())
						}

						function n() {
							f.clearRect(0, 0, m, x), v.children().filter(".pieLabel, .pieLabelBackground").remove()
						}

						function r() {
							var e = b.series.pie.shadow.left,
								t = b.series.pie.shadow.top,
								i = b.series.pie.shadow.alpha,
								o = 1 < b.series.pie.radius ? b.series.pie.radius : h * b.series.pie.radius;
							if (!(m / 2 - e <= o || o * b.series.pie.tilt >= x / 2 - t || o <= 10)) {
								f.save(), f.translate(e, t), f.globalAlpha = i, f.fillStyle = "#000", f.translate(k, y), f.scale(1, b.series.pie.tilt);
								for (var n = 1; n <= 10; n++) f.beginPath(), f.arc(0, 0, o, 0, 2 * Math.PI, !1), f.fill(), o -= n;
								f.restore()
							}
						}

						function s() {
							var o = Math.PI * b.series.pie.startAngle,
								n = 1 < b.series.pie.radius ? b.series.pie.radius : h * b.series.pie.radius;
							f.save(), f.translate(k, y), f.scale(1, b.series.pie.tilt), f.save();
							for (var r = o, e = 0; e < a.length; ++e) a[e].startAngle = r, t(a[e].angle, a[e].color, !0);
							if (f.restore(), 0 < b.series.pie.stroke.width) {
								f.save(), f.lineWidth = b.series.pie.stroke.width, r = o;
								for (var e = 0; e < a.length; ++e) t(a[e].angle, b.series.pie.stroke.color, !1);
								f.restore()
							}
							return c(f), f.restore(), !b.series.pie.label.show || function() {
								for (var e = o, g = 1 < b.series.pie.label.radius ? b.series.pie.label.radius : h * b.series.pie.label.radius, t = 0; t < a.length; ++t) {
									if (a[t].percent >= 100 * b.series.pie.label.threshold && !i(a[t], e, t)) return !1;
									e += a[t].angle
								}
								return !0;

								function i(e, t, i) {
									if (0 == e.data[0][1]) return !0;
									var o, n = b.legend.labelFormatter,
										r = b.series.pie.label.formatter;
									o = n ? n(e.label, e) : e.label, r && (o = r(o, e));
									var a = (t + e.angle + t) / 2,
										s = k + Math.round(Math.cos(a) * g),
										l = y + Math.round(Math.sin(a) * g) * b.series.pie.tilt,
										c = "<span class='pieLabel' id='pieLabel" + i + "' style='position:absolute;top:" + l + "px;left:" + s + "px;'>" + o + "</span>";
									v.append(c);
									var u = v.children("#pieLabel" + i),
										h = l - u.height() / 2,
										f = s - u.width() / 2;
									if (u.css("top", h), u.css("left", f), 0 < 0 - h || 0 < 0 - f || x - (h + u.height()) < 0 || m - (f + u.width()) < 0) return !1;
									if (0 != b.series.pie.label.background.opacity) {
										var d = b.series.pie.label.background.color;
										null == d && (d = e.color);
										var p = "top:" + h + "px;left:" + f + "px;";
										w("<div class='pieLabelBackground' style='position:absolute;width:" + u.width() + "px;height:" + u.height() + "px;" + p + "background-color:" + d + ";'></div>").css("opacity", b.series.pie.label.background.opacity).insertBefore(u)
									}
									return !0
								}
							}();

							function t(e, t, i) {
								e <= 0 || isNaN(e) || (i ? f.fillStyle = t : (f.strokeStyle = t, f.lineJoin = "round"), f.beginPath(), 1e-9 < Math.abs(e - 2 * Math.PI) && f.moveTo(0, 0), f.arc(0, 0, n, r, r + e / 2, !1), f.arc(0, 0, n, r + e / 2, r + e, !1), f.closePath(), r += e, i ? f.fill() : f.stroke())
							}
						}
					}(e, t)
				})
			},
			options: e,
			name: "pie",
			version: "1.1"
		})
	}(jQuery),
	function(s) {
		function t(e, t, i, o) {
			var n = "categories" == t.xaxis.options.mode,
				r = "categories" == t.yaxis.options.mode;
			if (n || r) {
				var a = o.format;
				if (!a) {
					var s = t;
					if ((a = []).push({
							x: !0,
							number: !0,
							required: !0
						}), a.push({
							y: !0,
							number: !0,
							required: !0
						}), s.bars.show || s.lines.show && s.lines.fill) {
						var l = !!(s.bars.show && s.bars.zero || s.lines.show && s.lines.zero);
						a.push({
							y: !0,
							number: !0,
							required: !1,
							defaultValue: 0,
							autoscale: l
						}), s.bars.horizontal && (delete a[a.length - 1].y, a[a.length - 1].x = !0)
					}
					o.format = a
				}
				for (var c = 0; c < a.length; ++c) a[c].x && n && (a[c].number = !1), a[c].y && r && (a[c].number = !1)
			}
		}

		function l(e) {
			var t = [];
			for (var i in e.categories) {
				var o = e.categories[i];
				o >= e.min && o <= e.max && t.push([o, i])
			}
			return t.sort(function(e, t) {
				return e[0] - t[0]
			}), t
		}

		function o(e, t, i) {
			if ("categories" == e[t].options.mode) {
				if (!e[t].categories) {
					var o = {},
						n = e[t].options.categories || {};
					if (s.isArray(n))
						for (var r = 0; r < n.length; ++r) o[n[r]] = r;
					else
						for (var a in n) o[a] = n[a];
					e[t].categories = o
				}
				e[t].options.ticks || (e[t].options.ticks = l),
					function(e, t, i) {
						for (var o = e.points, n = e.pointsize, r = e.format, a = t.charAt(0), s = function(e) {
								var t = -1;
								for (var i in e) e[i] > t && (t = e[i]);
								return t + 1
							}(i), l = 0; l < o.length; l += n)
							if (null != o[l])
								for (var c = 0; c < n; ++c) {
									var u = o[l + c];
									null != u && r[c][a] && (u in i || (i[u] = s, ++s), o[l + c] = i[u])
								}
					}(i, t, e[t].categories)
			}
		}

		function i(e, t, i) {
			o(t, "xaxis", i), o(t, "yaxis", i)
		}
		s.plot.plugins.push({
			init: function(e) {
				e.hooks.processRawData.push(t), e.hooks.processDatapoints.push(i)
			},
			options: {
				xaxis: {
					categories: null
				},
				yaxis: {
					categories: null
				}
			},
			name: "categories",
			version: "1.0"
		})
	}(jQuery),
	function(i) {
		function v(e, t) {
			return t * Math.floor(e / t)
		}

		function l(e, t, i, o) {
			if ("function" == typeof e.strftime) return e.strftime(t);
			var n, r = function(e, t) {
					return t = "" + (null == t ? "0" : t), 1 == (e = "" + e).length ? t + e : e
				},
				a = [],
				s = !1,
				l = e.getHours(),
				c = l < 12;
			null == i && (i = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]), null == o && (o = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]), n = 12 < l ? l - 12 : 0 == l ? 12 : l;
			for (var u = 0; u < t.length; ++u) {
				var h = t.charAt(u);
				if (s) {
					switch (h) {
						case "a":
							h = "" + o[e.getDay()];
							break;
						case "b":
							h = "" + i[e.getMonth()];
							break;
						case "d":
							h = r(e.getDate());
							break;
						case "e":
							h = r(e.getDate(), " ");
							break;
						case "h":
						case "H":
							h = r(l);
							break;
						case "I":
							h = r(n);
							break;
						case "l":
							h = r(n, " ");
							break;
						case "m":
							h = r(e.getMonth() + 1);
							break;
						case "M":
							h = r(e.getMinutes());
							break;
						case "q":
							h = "" + (Math.floor(e.getMonth() / 3) + 1);
							break;
						case "S":
							h = r(e.getSeconds());
							break;
						case "y":
							h = r(e.getFullYear() % 100);
							break;
						case "Y":
							h = "" + e.getFullYear();
							break;
						case "p":
							h = c ? "am" : "pm";
							break;
						case "P":
							h = c ? "AM" : "PM";
							break;
						case "w":
							h = "" + e.getDay()
					}
					a.push(h), s = !1
				} else "%" == h ? s = !0 : a.push(h)
			}
			return a.join("")
		}

		function o(e) {
			function t(e, t, i, o) {
				e[t] = function() {
					return i[o].apply(i, arguments)
				}
			}
			var i = {
				date: e
			};
			null != e.strftime && t(i, "strftime", e, "strftime"), t(i, "getTime", e, "getTime"), t(i, "setTime", e, "setTime");
			for (var o = ["Date", "Day", "FullYear", "Hours", "Milliseconds", "Minutes", "Month", "Seconds"], n = 0; n < o.length; n++) t(i, "get" + o[n], e, "getUTC" + o[n]), t(i, "set" + o[n], e, "setUTC" + o[n]);
			return i
		}

		function b(e, t) {
			if ("browser" == t.timezone) return new Date(e);
			if (t.timezone && "utc" != t.timezone) {
				if ("undefined" == typeof timezoneJS || void 0 === timezoneJS.Date) return o(new Date(e));
				var i = new timezoneJS.Date;
				return i.setTimezone(t.timezone), i.setTime(e), i
			}
			return o(new Date(e))
		}
		var k = {
				second: 1e3,
				minute: 6e4,
				hour: 36e5,
				day: 864e5,
				month: 2592e6,
				quarter: 7776e6,
				year: 525949.2 * 60 * 1e3
			},
			e = [
				[1, "second"],
				[2, "second"],
				[5, "second"],
				[10, "second"],
				[30, "second"],
				[1, "minute"],
				[2, "minute"],
				[5, "minute"],
				[10, "minute"],
				[30, "minute"],
				[1, "hour"],
				[2, "hour"],
				[4, "hour"],
				[8, "hour"],
				[12, "hour"],
				[1, "day"],
				[2, "day"],
				[3, "day"],
				[.25, "month"],
				[.5, "month"],
				[1, "month"],
				[2, "month"]
			],
			y = e.concat([
				[3, "month"],
				[6, "month"],
				[1, "year"]
			]),
			w = e.concat([
				[1, "quarter"],
				[2, "quarter"],
				[1, "year"]
			]);
		i.plot.plugins.push({
			init: function(e) {
				e.hooks.processOptions.push(function(e, t) {
					i.each(e.getAxes(), function(e, t) {
						var x = t.options;
						"time" == x.mode && (t.tickGenerator = function(e) {
							var t = [],
								i = b(e.min, x),
								o = 0,
								n = x.tickSize && "quarter" === x.tickSize[1] || x.minTickSize && "quarter" === x.minTickSize[1] ? w : y;
							null != x.minTickSize && (o = "number" == typeof x.tickSize ? x.tickSize : x.minTickSize[0] * k[x.minTickSize[1]]);
							for (var r = 0; r < n.length - 1 && !(e.delta < (n[r][0] * k[n[r][1]] + n[r + 1][0] * k[n[r + 1][1]]) / 2 && n[r][0] * k[n[r][1]] >= o); ++r);
							var a = n[r][0],
								s = n[r][1];
							if ("year" == s) {
								if (null != x.minTickSize && "year" == x.minTickSize[1]) a = Math.floor(x.minTickSize[0]);
								else {
									var l = Math.pow(10, Math.floor(Math.log(e.delta / k.year) / Math.LN10)),
										c = e.delta / k.year / l;
									a = c < 1.5 ? 1 : c < 3 ? 2 : c < 7.5 ? 5 : 10, a *= l
								}
								a < 1 && (a = 1)
							}
							e.tickSize = x.tickSize || [a, s];
							var u = e.tickSize[0];
							s = e.tickSize[1];
							var h = u * k[s];
							"second" == s ? i.setSeconds(v(i.getSeconds(), u)) : "minute" == s ? i.setMinutes(v(i.getMinutes(), u)) : "hour" == s ? i.setHours(v(i.getHours(), u)) : "month" == s ? i.setMonth(v(i.getMonth(), u)) : "quarter" == s ? i.setMonth(3 * v(i.getMonth() / 3, u)) : "year" == s && i.setFullYear(v(i.getFullYear(), u)), i.setMilliseconds(0), k.minute <= h && i.setSeconds(0), k.hour <= h && i.setMinutes(0), k.day <= h && i.setHours(0), 4 * k.day <= h && i.setDate(1), 2 * k.month <= h && i.setMonth(v(i.getMonth(), 3)), 2 * k.quarter <= h && i.setMonth(v(i.getMonth(), 6)), k.year <= h && i.setMonth(0);
							var f, d = 0,
								p = Number.NaN;
							do {
								if (f = p, p = i.getTime(), t.push(p), "month" == s || "quarter" == s)
									if (u < 1) {
										i.setDate(1);
										var g = i.getTime();
										i.setMonth(i.getMonth() + ("quarter" == s ? 3 : 1));
										var m = i.getTime();
										i.setTime(p + d * k.hour + (m - g) * u), d = i.getHours(), i.setHours(0)
									} else i.setMonth(i.getMonth() + u * ("quarter" == s ? 3 : 1));
								else "year" == s ? i.setFullYear(i.getFullYear() + u) : i.setTime(p + h)
							} while (p < e.max && p != f);
							return t
						}, t.tickFormatter = function(e, t) {
							var i = b(e, t.options);
							if (null != x.timeformat) return l(i, x.timeformat, x.monthNames, x.dayNames);
							var o = t.options.tickSize && "quarter" == t.options.tickSize[1] || t.options.minTickSize && "quarter" == t.options.minTickSize[1],
								n = t.tickSize[0] * k[t.tickSize[1]],
								r = t.max - t.min,
								a = x.twelveHourClock ? " %p" : "",
								s = x.twelveHourClock ? "%I" : "%H";
							return l(i, n < k.minute ? s + ":%M:%S" + a : n < k.day ? r < 2 * k.day ? s + ":%M" + a : "%b %d " + s + ":%M" + a : n < k.month ? "%b %d" : o && n < k.quarter || !o && n < k.year ? r < k.year ? "%b" : "%b %Y" : o && n < k.year ? r < k.year ? "Q%q" : "Q%q %Y" : "%Y", x.monthNames, x.dayNames)
						})
					})
				})
			},
			options: {
				xaxis: {
					timezone: null,
					timeformat: null,
					twelveHourClock: !1,
					monthNames: null
				}
			},
			name: "time",
			version: "1.0"
		}), i.plot.formatDate = l, i.plot.dateGenerator = b
	}(jQuery),
	function(g) {
		g.plot.plugins.push({
			init: function(c) {
				var u = {
						first: {
							x: -1,
							y: -1
						},
						second: {
							x: -1,
							y: -1
						},
						show: !1,
						active: !1
					},
					i = {},
					o = null;

				function n(e) {
					u.active && (h(e), c.getPlaceholder().trigger("plotselecting", [t()]))
				}

				function r(e) {
					1 == e.which && (document.body.focus(), void 0 !== document.onselectstart && null == i.onselectstart && (i.onselectstart = document.onselectstart, document.onselectstart = function() {
						return !1
					}), void 0 !== document.ondrag && null == i.ondrag && (i.ondrag = document.ondrag, document.ondrag = function() {
						return !1
					}), l(u.first, e), u.active = !0, o = function(e) {
						var t;
						t = e, o = null, void 0 !== document.onselectstart && (document.onselectstart = i.onselectstart), void 0 !== document.ondrag && (document.ondrag = i.ondrag), u.active = !1, h(t), p() ? a() : (c.getPlaceholder().trigger("plotunselected", []), c.getPlaceholder().trigger("plotselecting", [null]))
					}, g(document).one("mouseup", o))
				}

				function t() {
					if (!p()) return null;
					if (!u.show) return null;
					var n = {},
						r = u.first,
						a = u.second;
					return g.each(c.getAxes(), function(e, t) {
						if (t.used) {
							var i = t.c2p(r[t.direction]),
								o = t.c2p(a[t.direction]);
							n[e] = {
								from: Math.min(i, o),
								to: Math.max(i, o)
							}
						}
					}), n
				}

				function a() {
					var e = t();
					c.getPlaceholder().trigger("plotselected", [e]), e.xaxis && e.yaxis && c.getPlaceholder().trigger("selected", [{
						x1: e.xaxis.from,
						y1: e.yaxis.from,
						x2: e.xaxis.to,
						y2: e.yaxis.to
					}])
				}

				function s(e, t, i) {
					return t < e ? e : i < t ? i : t
				}

				function l(e, t) {
					var i = c.getOptions(),
						o = c.getPlaceholder().offset(),
						n = c.getPlotOffset();
					e.x = s(0, t.pageX - o.left - n.left, c.width()), e.y = s(0, t.pageY - o.top - n.top, c.height()), "y" == i.selection.mode && (e.x = e == u.first ? 0 : c.width()), "x" == i.selection.mode && (e.y = e == u.first ? 0 : c.height())
				}

				function h(e) {
					null != e.pageX && (l(u.second, e), p() ? (u.show = !0, c.triggerRedrawOverlay()) : f(!0))
				}

				function f(e) {
					u.show && (u.show = !1, c.triggerRedrawOverlay(), e || c.getPlaceholder().trigger("plotunselected", []))
				}

				function d(e, t) {
					var i, o, n, r, a = c.getAxes();
					for (var s in a)
						if ((i = a[s]).direction == t && (e[r = t + i.n + "axis"] || 1 != i.n || (r = t + "axis"), e[r])) {
							o = e[r].from, n = e[r].to;
							break
						} if (e[r] || (i = "x" == t ? c.getXAxes()[0] : c.getYAxes()[0], o = e[t + "1"], n = e[t + "2"]), null != o && null != n && n < o) {
						var l = o;
						o = n, n = l
					}
					return {
						from: o,
						to: n,
						axis: i
					}
				}

				function p() {
					var e = c.getOptions().selection.minSize;
					return Math.abs(u.second.x - u.first.x) >= e && Math.abs(u.second.y - u.first.y) >= e
				}
				c.clearSelection = f, c.setSelection = function(e, t) {
					var i, o = c.getOptions();
					"y" == o.selection.mode ? (u.first.x = 0, u.second.x = c.width()) : (i = d(e, "x"), u.first.x = i.axis.p2c(i.from), u.second.x = i.axis.p2c(i.to)), "x" == o.selection.mode ? (u.first.y = 0, u.second.y = c.height()) : (i = d(e, "y"), u.first.y = i.axis.p2c(i.from), u.second.y = i.axis.p2c(i.to)), u.show = !0, c.triggerRedrawOverlay(), !t && p() && a()
				}, c.getSelection = t, c.hooks.bindEvents.push(function(e, t) {
					null != e.getOptions().selection.mode && (t.mousemove(n), t.mousedown(r))
				}), c.hooks.drawOverlay.push(function(e, t) {
					if (u.show && p()) {
						var i = e.getPlotOffset(),
							o = e.getOptions();
						t.save(), t.translate(i.left, i.top);
						var n = g.color.parse(o.selection.color);
						t.strokeStyle = n.scale("a", .8).toString(), t.lineWidth = 1, t.lineJoin = o.selection.shape, t.fillStyle = n.scale("a", .4).toString();
						var r = Math.min(u.first.x, u.second.x) + .5,
							a = Math.min(u.first.y, u.second.y) + .5,
							s = Math.abs(u.second.x - u.first.x) - 1,
							l = Math.abs(u.second.y - u.first.y) - 1;
						t.fillRect(r, a, s, l), t.strokeRect(r, a, s, l), t.restore()
					}
				}), c.hooks.shutdown.push(function(e, t) {
					t.unbind("mousemove", n), t.unbind("mousedown", r), o && g(document).unbind("mouseup", o)
				})
			},
			options: {
				selection: {
					mode: null,
					color: "#e8cfac",
					shape: "round",
					minSize: 5
				}
			},
			name: "selection",
			version: "1.1"
		})
	}(jQuery);
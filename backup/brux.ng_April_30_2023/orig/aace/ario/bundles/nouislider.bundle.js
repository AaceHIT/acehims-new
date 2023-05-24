! function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).noUiSlider = {})
}(this, function(et) {
	"use strict";

	function n(t) {
		return "object" == typeof t && "function" == typeof t.to
	}

	function rt(t) {
		t.parentElement.removeChild(t)
	}

	function nt(t) {
		return null != t
	}

	function it(t) {
		t.preventDefault()
	}

	function i(t) {
		return "number" == typeof t && !isNaN(t) && isFinite(t)
	}

	function ot(t, e, r) {
		0 < r && (lt(t, e), setTimeout(function() {
			ut(t, e)
		}, r))
	}

	function st(t) {
		return Math.max(Math.min(t, 100), 0)
	}

	function at(t) {
		return Array.isArray(t) ? t : [t]
	}

	function e(t) {
		return 1 < (t = (t = String(t)).split(".")).length ? t[1].length : 0
	}

	function lt(t, e) {
		t.classList && !/\s/.test(e) ? t.classList.add(e) : t.className += " " + e
	}

	function ut(t, e) {
		t.classList && !/\s/.test(e) ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")
	}

	function ct(t) {
		var e = void 0 !== window.pageXOffset,
			r = "CSS1Compat" === (t.compatMode || "");
		return {
			x: e ? window.pageXOffset : (r ? t.documentElement : t.body).scrollLeft,
			y: e ? window.pageYOffset : (r ? t.documentElement : t.body).scrollTop
		}
	}

	function s(t, e) {
		return 100 / (e - t)
	}

	function a(t, e, r) {
		return 100 * e / (t[r + 1] - t[r])
	}

	function l(t, e) {
		for (var r = 1; t >= e[r];) r += 1;
		return r
	}
	et.PipsMode = void 0, (j = et.PipsMode || (et.PipsMode = {})).Range = "range", j.Steps = "steps", j.Positions = "positions", j.Count = "count", j.Values = "values", et.PipsType = void 0, (j = et.PipsType || (et.PipsType = {}))[j.None = -1] = "None", j[j.NoValue = 0] = "NoValue", j[j.LargeValue = 1] = "LargeValue", j[j.SmallValue = 2] = "SmallValue";
	var r = (t.prototype.getDistance = function(t) {
		for (var e = [], r = 0; r < this.xNumSteps.length - 1; r++) e[r] = a(this.xVal, t, r);
		return e
	}, t.prototype.getAbsoluteDistance = function(t, e, r) {
		var n = 0;
		if (t < this.xPct[this.xPct.length - 1])
			for (; t > this.xPct[n + 1];) n++;
		else t === this.xPct[this.xPct.length - 1] && (n = this.xPct.length - 2);
		r || t !== this.xPct[n + 1] || n++;
		for (var i, o = 1, s = (e = null === e ? [] : e)[n], a = 0, l = 0, u = 0, c = r ? (t - this.xPct[n]) / (this.xPct[n + 1] - this.xPct[n]) : (this.xPct[n + 1] - t) / (this.xPct[n + 1] - this.xPct[n]); 0 < s;) i = this.xPct[n + 1 + u] - this.xPct[n + u], 100 < e[n + u] * o + 100 - 100 * c ? (a = i * c, o = (s - 100 * c) / e[n + u], c = 1) : (a = e[n + u] * i / 100 * o, o = 0), r ? (l -= a, 1 <= this.xPct.length + u && u--) : (l += a, 1 <= this.xPct.length - u && u++), s = e[n + u] * o;
		return t + l
	}, t.prototype.toStepping = function(t) {
		return function(t, e, r) {
			if (r >= t.slice(-1)[0]) return 100;
			var n = t[(o = l(r, t)) - 1],
				i = t[o],
				o = (t = e[o - 1], e[o]);
			return t + (r = r, a(i = [n, i], i[0] < 0 ? r + Math.abs(i[0]) : r - i[0], 0) / s(t, o))
		}(this.xVal, this.xPct, t)
	}, t.prototype.fromStepping = function(t) {
		return function(t, e, r) {
			if (100 <= r) return t.slice(-1)[0];
			var n, i = t[(n = l(r, e)) - 1],
				o = t[n];
			return (r - (t = e[n - 1])) * s(t, n = e[n]) * ((o = [i, o])[1] - o[0]) / 100 + o[0]
		}(this.xVal, this.xPct, t)
	}, t.prototype.getStep = function(t) {
		return function(t, e, r, n) {
			if (100 === n) return n;
			var i = l(n, t),
				o = t[i - 1],
				s = t[i];
			return r ? (s - o) / 2 < n - o ? s : o : e[i - 1] ? t[i - 1] + (t = n - t[i - 1], i = e[i - 1], Math.round(t / i) * i) : n
		}(this.xPct, this.xSteps, this.snap, t)
	}, t.prototype.getDefaultStep = function(t, e, r) {
		var n = l(t, this.xPct);
		return (100 === t || e && t === this.xPct[n - 1]) && (n = Math.max(n - 1, 1)), (this.xVal[n] - this.xVal[n - 1]) / r
	}, t.prototype.getNearbySteps = function(t) {
		return t = l(t, this.xPct), {
			stepBefore: {
				startValue: this.xVal[t - 2],
				step: this.xNumSteps[t - 2],
				highestStep: this.xHighestCompleteStep[t - 2]
			},
			thisStep: {
				startValue: this.xVal[t - 1],
				step: this.xNumSteps[t - 1],
				highestStep: this.xHighestCompleteStep[t - 1]
			},
			stepAfter: {
				startValue: this.xVal[t],
				step: this.xNumSteps[t],
				highestStep: this.xHighestCompleteStep[t]
			}
		}
	}, t.prototype.countStepDecimals = function() {
		var t = this.xNumSteps.map(e);
		return Math.max.apply(null, t)
	}, t.prototype.hasNoSize = function() {
		return this.xVal[0] === this.xVal[this.xVal.length - 1]
	}, t.prototype.convert = function(t) {
		return this.getStep(this.toStepping(t))
	}, t.prototype.handleEntryPoint = function(t, e) {
		if (!i(t = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t)) || !i(e[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
		this.xPct.push(t), this.xVal.push(e[0]), e = Number(e[1]), t ? this.xSteps.push(!isNaN(e) && e) : isNaN(e) || (this.xSteps[0] = e), this.xHighestCompleteStep.push(0)
	}, t.prototype.handleStepPoint = function(t, e) {
		e && (this.xVal[t] !== this.xVal[t + 1] ? (this.xSteps[t] = a([this.xVal[t], this.xVal[t + 1]], e, 0) / s(this.xPct[t], this.xPct[t + 1]), e = (this.xVal[t + 1] - this.xVal[t]) / this.xNumSteps[t], e = Math.ceil(Number(e.toFixed(3)) - 1), e = this.xVal[t] + this.xNumSteps[t] * e, this.xHighestCompleteStep[t] = e) : this.xSteps[t] = this.xHighestCompleteStep[t] = this.xVal[t])
	}, t);

	function t(e, t, r) {
		var n;
		this.xPct = [], this.xVal = [], this.xSteps = [], this.xNumSteps = [], this.xHighestCompleteStep = [], this.xSteps = [r || !1], this.xNumSteps = [!1], this.snap = t;
		var i = [];
		for (Object.keys(e).forEach(function(t) {
				i.push([at(e[t]), t])
			}), i.sort(function(t, e) {
				return t[0][0] - e[0][0]
			}), n = 0; n < i.length; n++) this.handleEntryPoint(i[n][1], i[n][0]);
		for (this.xNumSteps = this.xSteps.slice(0), n = 0; n < this.xNumSteps.length; n++) this.handleStepPoint(n, this.xNumSteps[n])
	}
	var u = {
			to: function(t) {
				return void 0 === t ? "" : t.toFixed(2)
			},
			from: Number
		},
		c = {
			target: "target",
			base: "base",
			origin: "origin",
			handle: "handle",
			handleLower: "handle-lower",
			handleUpper: "handle-upper",
			touchArea: "touch-area",
			horizontal: "horizontal",
			vertical: "vertical",
			background: "background",
			connect: "connect",
			connects: "connects",
			ltr: "ltr",
			rtl: "rtl",
			textDirectionLtr: "txt-dir-ltr",
			textDirectionRtl: "txt-dir-rtl",
			draggable: "draggable",
			drag: "state-drag",
			tap: "state-tap",
			active: "active",
			tooltip: "tooltip",
			pips: "pips",
			pipsHorizontal: "pips-horizontal",
			pipsVertical: "pips-vertical",
			marker: "marker",
			markerHorizontal: "marker-horizontal",
			markerVertical: "marker-vertical",
			markerNormal: "marker-normal",
			markerLarge: "marker-large",
			markerSub: "marker-sub",
			value: "value",
			valueHorizontal: "value-horizontal",
			valueVertical: "value-vertical",
			valueNormal: "value-normal",
			valueLarge: "value-large",
			valueSub: "value-sub"
		},
		pt = {
			tooltips: ".__tooltips",
			aria: ".__aria"
		};

	function p(t, e) {
		if (!i(e)) throw new Error("noUiSlider: 'step' is not numeric.");
		t.singleStep = e
	}

	function f(t, e) {
		if (!i(e)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
		t.keyboardPageMultiplier = e
	}

	function d(t, e) {
		if (!i(e)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
		t.keyboardMultiplier = e
	}

	function h(t, e) {
		if (!i(e)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
		t.keyboardDefaultStep = e
	}

	function m(t, e) {
		if ("object" != typeof e || Array.isArray(e)) throw new Error("noUiSlider: 'range' is not an object.");
		if (void 0 === e.min || void 0 === e.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
		t.spectrum = new r(e, t.snap || !1, t.singleStep)
	}

	function g(t, e) {
		if (e = at(e), !Array.isArray(e) || !e.length) throw new Error("noUiSlider: 'start' option is incorrect.");
		t.handles = e.length, t.start = e
	}

	function v(t, e) {
		if ("boolean" != typeof e) throw new Error("noUiSlider: 'snap' option must be a boolean.");
		t.snap = e
	}

	function b(t, e) {
		if ("boolean" != typeof e) throw new Error("noUiSlider: 'animate' option must be a boolean.");
		t.animate = e
	}

	function S(t, e) {
		if ("number" != typeof e) throw new Error("noUiSlider: 'animationDuration' option must be a number.");
		t.animationDuration = e
	}

	function x(t, e) {
		var r, n = [!1];
		if ("lower" === e ? e = [!0, !1] : "upper" === e && (e = [!1, !0]), !0 === e || !1 === e) {
			for (r = 1; r < t.handles; r++) n.push(e);
			n.push(!1)
		} else {
			if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
			n = e
		}
		t.connect = n
	}

	function y(t, e) {
		switch (e) {
			case "horizontal":
				t.ort = 0;
				break;
			case "vertical":
				t.ort = 1;
				break;
			default:
				throw new Error("noUiSlider: 'orientation' option is invalid.")
		}
	}

	function w(t, e) {
		if (!i(e)) throw new Error("noUiSlider: 'margin' option must be numeric.");
		0 !== e && (t.margin = t.spectrum.getDistance(e))
	}

	function E(t, e) {
		if (!i(e)) throw new Error("noUiSlider: 'limit' option must be numeric.");
		if (t.limit = t.spectrum.getDistance(e), !t.limit || t.handles < 2) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")
	}

	function P(t, e) {
		var r;
		if (!i(e) && !Array.isArray(e)) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
		if (Array.isArray(e) && 2 !== e.length && !i(e[0]) && !i(e[1])) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
		if (0 !== e) {
			for (Array.isArray(e) || (e = [e, e]), t.padding = [t.spectrum.getDistance(e[0]), t.spectrum.getDistance(e[1])], r = 0; r < t.spectrum.xNumSteps.length - 1; r++)
				if (t.padding[0][r] < 0 || t.padding[1][r] < 0) throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
			var n = e[0] + e[1];
			e = t.spectrum.xVal[0];
			if (1 < n / (t.spectrum.xVal[t.spectrum.xVal.length - 1] - e)) throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")
		}
	}

	function C(t, e) {
		switch (e) {
			case "ltr":
				t.dir = 0;
				break;
			case "rtl":
				t.dir = 1;
				break;
			default:
				throw new Error("noUiSlider: 'direction' option was not recognized.")
		}
	}

	function N(t, e) {
		if ("string" != typeof e) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
		var r = 0 <= e.indexOf("tap"),
			n = 0 <= e.indexOf("drag"),
			i = 0 <= e.indexOf("fixed"),
			o = 0 <= e.indexOf("snap"),
			s = 0 <= e.indexOf("hover"),
			a = 0 <= e.indexOf("unconstrained"),
			l = 0 <= e.indexOf("drag-all");
		e = 0 <= e.indexOf("smooth-steps");
		if (i) {
			if (2 !== t.handles) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
			w(t, t.start[1] - t.start[0])
		}
		if (a && (t.margin || t.limit)) throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
		t.events = {
			tap: r || o,
			drag: n,
			dragAll: l,
			smoothSteps: e,
			fixed: i,
			snap: o,
			hover: s,
			unconstrained: a
		}
	}

	function V(t, e) {
		if (!1 !== e)
			if (!0 === e || n(e)) {
				t.tooltips = [];
				for (var r = 0; r < t.handles; r++) t.tooltips.push(e)
			} else {
				if ((e = at(e)).length !== t.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
				e.forEach(function(t) {
					if ("boolean" != typeof t && !n(t)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")
				}), t.tooltips = e
			}
	}

	function k(t, e) {
		if (e.length !== t.handles) throw new Error("noUiSlider: must pass a attributes for all handles.");
		t.handleAttributes = e
	}

	function M(t, e) {
		if (!n(e)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
		t.ariaFormat = e
	}

	function A(t, e) {
		if (!n(r = e) || "function" != typeof r.from) throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
		var r;
		t.format = e
	}

	function U(t, e) {
		if ("boolean" != typeof e) throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
		t.keyboardSupport = e
	}

	function D(t, e) {
		t.documentElement = e
	}

	function O(t, e) {
		if ("string" != typeof e && !1 !== e) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
		t.cssPrefix = e
	}

	function L(e, r) {
		if ("object" != typeof r) throw new Error("noUiSlider: 'cssClasses' must be an object.");
		"string" == typeof e.cssPrefix ? (e.cssClasses = {}, Object.keys(r).forEach(function(t) {
			e.cssClasses[t] = e.cssPrefix + r[t]
		})) : e.cssClasses = r
	}

	function ft(e) {
		var r = {
				margin: null,
				limit: null,
				padding: null,
				animate: !0,
				animationDuration: 300,
				ariaFormat: u,
				format: u
			},
			n = {
				step: {
					r: !1,
					t: p
				},
				keyboardPageMultiplier: {
					r: !1,
					t: f
				},
				keyboardMultiplier: {
					r: !1,
					t: d
				},
				keyboardDefaultStep: {
					r: !1,
					t: h
				},
				start: {
					r: !0,
					t: g
				},
				connect: {
					r: !0,
					t: x
				},
				direction: {
					r: !0,
					t: C
				},
				snap: {
					r: !1,
					t: v
				},
				animate: {
					r: !1,
					t: b
				},
				animationDuration: {
					r: !1,
					t: S
				},
				range: {
					r: !0,
					t: m
				},
				orientation: {
					r: !1,
					t: y
				},
				margin: {
					r: !1,
					t: w
				},
				limit: {
					r: !1,
					t: E
				},
				padding: {
					r: !1,
					t: P
				},
				behaviour: {
					r: !0,
					t: N
				},
				ariaFormat: {
					r: !1,
					t: M
				},
				format: {
					r: !1,
					t: A
				},
				tooltips: {
					r: !1,
					t: V
				},
				keyboardSupport: {
					r: !0,
					t: U
				},
				documentElement: {
					r: !1,
					t: D
				},
				cssPrefix: {
					r: !0,
					t: O
				},
				cssClasses: {
					r: !0,
					t: L
				},
				handleAttributes: {
					r: !1,
					t: k
				}
			},
			i = {
				connect: !1,
				direction: "ltr",
				behaviour: "tap",
				orientation: "horizontal",
				keyboardSupport: !0,
				cssPrefix: "noUi-",
				cssClasses: c,
				keyboardPageMultiplier: 5,
				keyboardMultiplier: 1,
				keyboardDefaultStep: 10
			};
		e.format && !e.ariaFormat && (e.ariaFormat = e.format), Object.keys(n).forEach(function(t) {
			if (nt(e[t]) || void 0 !== i[t]) n[t].t(r, (nt(e[t]) ? e : i)[t]);
			else if (n[t].r) throw new Error("noUiSlider: '" + t + "' is required.")
		}), r.pips = e.pips;
		var t = void 0 !== (o = document.createElement("div")).style.msTransform,
			o = void 0 !== o.style.transform;
		return r.transformRule = o ? "transform" : t ? "msTransform" : "webkitTransform", r.style = [
			["left", "top"],
			["right", "bottom"]
		][r.dir][r.ort], r
	}

	function o(t, f, o) {
		var i, l, a, s, n, u, c = window.navigator.pointerEnabled ? {
				start: "pointerdown",
				move: "pointermove",
				end: "pointerup"
			} : window.navigator.msPointerEnabled ? {
				start: "MSPointerDown",
				move: "MSPointerMove",
				end: "MSPointerUp"
			} : {
				start: "mousedown touchstart",
				move: "mousemove touchmove",
				end: "mouseup touchend"
			},
			p = window.CSS && CSS.supports && CSS.supports("touch-action", "none") && function() {
				var t = !1;
				try {
					var e = Object.defineProperty({}, "passive", {
						get: function() {
							t = !0
						}
					});
					window.addEventListener("test", null, e)
				} catch (t) {}
				return t
			}(),
			S = t,
			x = f.spectrum,
			d = [],
			h = [],
			m = [],
			g = 0,
			v = {},
			y = t.ownerDocument,
			b = f.documentElement || y.documentElement,
			w = y.body,
			E = "rtl" === y.dir || 1 === f.ort ? 0 : 100;

		function P(t, e) {
			var r = y.createElement("div");
			return e && lt(r, e), t.appendChild(r), r
		}

		function C(t, e) {
			var r, n = P(t = P(t, f.cssClasses.origin), f.cssClasses.handle);
			return P(n, f.cssClasses.touchArea), n.setAttribute("data-handle", String(e)), f.keyboardSupport && (n.setAttribute("tabindex", "0"), n.addEventListener("keydown", function(t) {
				return function(t, e) {
					if (V() || k(e)) return !1;
					var r = ["Left", "Right"],
						n = ["Down", "Up"],
						i = ["PageDown", "PageUp"],
						o = ["Home", "End"];
					f.dir && !f.ort ? r.reverse() : f.ort && !f.dir && (n.reverse(), i.reverse());
					var s = t.key.replace("Arrow", ""),
						a = s === i[0],
						l = s === i[1];
					i = s === n[0] || s === r[0] || a, n = s === n[1] || s === r[1] || l, r = s === o[0], o = s === o[1];
					if (!(i || n || r || o)) return !0;
					if (t.preventDefault(), n || i) {
						var u = i ? 0 : 1;
						if (null === (u = Z(e)[u])) return !1;
						!1 === u && (u = x.getDefaultStep(h[e], i, f.keyboardDefaultStep)), u *= l || a ? f.keyboardPageMultiplier : f.keyboardMultiplier, u = Math.max(u, 1e-7), u *= i ? -1 : 1, u = d[e] + u
					} else u = o ? f.spectrum.xVal[f.spectrum.xVal.length - 1] : f.spectrum.xVal[0];
					return $(e, x.toStepping(u), !0, !0), B("slide", e), B("update", e), B("change", e), B("set", e), !1
				}(t, e)
			})), void 0 !== f.handleAttributes && (r = f.handleAttributes[e], Object.keys(r).forEach(function(t) {
				n.setAttribute(t, r[t])
			})), n.setAttribute("role", "slider"), n.setAttribute("aria-orientation", f.ort ? "vertical" : "horizontal"), 0 === e ? lt(n, f.cssClasses.handleLower) : e === f.handles - 1 && lt(n, f.cssClasses.handleUpper), t
		}

		function N(t, e) {
			return !!e && P(t, f.cssClasses.connect)
		}

		function e(t, e) {
			return !(!f.tooltips || !f.tooltips[e]) && P(t.firstChild, f.cssClasses.tooltip)
		}

		function V() {
			return S.hasAttribute("disabled")
		}

		function k(t) {
			return l[t].hasAttribute("disabled")
		}

		function M() {
			n && (_("update" + pt.tooltips), n.forEach(function(t) {
				t && rt(t)
			}), n = null)
		}

		function A() {
			M(), n = l.map(e), r("update" + pt.tooltips, function(t, e, r) {
				n && f.tooltips && !1 !== n[e] && (t = t[e], !0 !== f.tooltips[e] && (t = f.tooltips[e].to(r[e])), n[e].innerHTML = t)
			})
		}

		function U(t, e) {
			return t.map(function(t) {
				return x.fromStepping(e ? x.getStep(t) : t)
			})
		}

		function D() {
			s && (rt(s), s = null)
		}

		function O(t) {
			D();
			var d, h, m, e, r, g, v, b, n = (h = function(t) {
					if (t.mode === et.PipsMode.Range || t.mode === et.PipsMode.Steps) return x.xVal;
					if (t.mode !== et.PipsMode.Count) return t.mode === et.PipsMode.Positions ? U(t.values, t.stepped) : t.mode === et.PipsMode.Values ? t.stepped ? t.values.map(function(t) {
						return x.fromStepping(x.getStep(x.toStepping(t)))
					}) : t.values : [];
					if (t.values < 2) throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
					for (var e = t.values - 1, r = 100 / e, n = []; e--;) n[e] = e * r;
					return n.push(100), U(n, t.stepped)
				}(d = t), m = {}, e = x.xVal[0], r = x.xVal[x.xVal.length - 1], v = g = !1, b = 0, (h = h.slice().sort(function(t, e) {
					return t - e
				}).filter(function(t) {
					return !this[t] && (this[t] = !0)
				}, {}))[0] !== e && (h.unshift(e), g = !0), h[h.length - 1] !== r && (h.push(r), v = !0), h.forEach(function(t, e) {
					t = t;
					var r, n, i, o, s, a, l, u, c = h[e + 1],
						p = d.mode === et.PipsMode.Steps,
						f = (f = p ? x.xNumSteps[e] : f) || c - t;
					for (void 0 === c && (c = t), f = Math.max(f, 1e-7), r = t; r <= c; r = Number((r + f).toFixed(7))) {
						for (a = (o = (i = x.toStepping(r)) - b) / (d.density || 1), u = o / (l = Math.round(a)), n = 1; n <= l; n += 1) m[(s = b + n * u).toFixed(5)] = [x.fromStepping(s), 0];
						a = -1 < h.indexOf(r) ? et.PipsType.LargeValue : p ? et.PipsType.SmallValue : et.PipsType.NoValue, !e && g && r !== c && (a = 0), r === c && v || (m[i.toFixed(5)] = [r, a]), b = i
					}
				}), m),
				i = t.filter;
			t = t.format || {
				to: function(t) {
					return String(Math.round(t))
				}
			};
			return s = S.appendChild(function(i, o, s) {
				var t, a = y.createElement("div"),
					n = ((t = {})[et.PipsType.None] = "", t[et.PipsType.NoValue] = f.cssClasses.valueNormal, t[et.PipsType.LargeValue] = f.cssClasses.valueLarge, t[et.PipsType.SmallValue] = f.cssClasses.valueSub, t),
					l = ((t = {})[et.PipsType.None] = "", t[et.PipsType.NoValue] = f.cssClasses.markerNormal, t[et.PipsType.LargeValue] = f.cssClasses.markerLarge, t[et.PipsType.SmallValue] = f.cssClasses.markerSub, t),
					u = [f.cssClasses.valueHorizontal, f.cssClasses.valueVertical],
					c = [f.cssClasses.markerHorizontal, f.cssClasses.markerVertical];

				function p(t, e) {
					var r = e === f.cssClasses.value;
					return e + " " + (r ? u : c)[f.ort] + " " + (r ? n : l)[t]
				}
				return lt(a, f.cssClasses.pips), lt(a, 0 === f.ort ? f.cssClasses.pipsHorizontal : f.cssClasses.pipsVertical), Object.keys(i).forEach(function(t) {
					var e, r, n;
					r = i[e = t][0], n = i[t][1], (n = o ? o(r, n) : n) !== et.PipsType.None && ((t = P(a, !1)).className = p(n, f.cssClasses.marker), t.style[f.style] = e + "%", n > et.PipsType.NoValue && ((t = P(a, !1)).className = p(n, f.cssClasses.value), t.setAttribute("data-value", String(r)), t.style[f.style] = e + "%", t.innerHTML = String(s.to(r))))
				}), a
			}(n, i, t))
		}

		function L() {
			var t = i.getBoundingClientRect(),
				e = "offset" + ["Width", "Height"][f.ort];
			return 0 === f.ort ? t.width || i[e] : t.height || i[e]
		}

		function T(n, i, o, s) {
			function e(t) {
				var e, r = function(e, t, r) {
					var n = 0 === e.type.indexOf("touch"),
						i = 0 === e.type.indexOf("mouse"),
						o = 0 === e.type.indexOf("pointer"),
						s = 0,
						a = 0;
					if (0 === e.type.indexOf("MSPointer") && (o = !0), "mousedown" === e.type && !e.buttons && !e.touches) return !1;
					if (n) {
						var l = function(t) {
							return (t = t.target) === r || r.contains(t) || e.composed && e.composedPath().shift() === r
						};
						if ("touchstart" === e.type) {
							if (1 < (n = Array.prototype.filter.call(e.touches, l)).length) return !1;
							s = n[0].pageX, a = n[0].pageY
						} else {
							if (!(l = Array.prototype.find.call(e.changedTouches, l))) return !1;
							s = l.pageX, a = l.pageY
						}
					}
					return t = t || ct(y), (i || o) && (s = e.clientX + t.x, a = e.clientY + t.y), e.pageOffset = t, e.points = [s, a], e.cursor = i || o, e
				}(t, s.pageOffset, s.target || i);
				return !!r && !(V() && !s.doNotReject) && (e = S, t = f.cssClasses.tap, !((e.classList ? e.classList.contains(t) : new RegExp("\\b" + t + "\\b").test(e.className)) && !s.doNotReject) && !(n === c.start && void 0 !== r.buttons && 1 < r.buttons) && (!s.hover || !r.buttons) && (p || r.preventDefault(), r.calcPoint = r.points[f.ort], void o(r, s)))
			}
			var r = [];
			return n.split(" ").forEach(function(t) {
				i.addEventListener(t, e, !!p && {
					passive: !0
				}), r.push([t, e])
			}), r
		}

		function j(t) {
			var e, r, n = st(n = 100 * (t - (n = i, e = f.ort, r = n.getBoundingClientRect(), n = (t = n.ownerDocument).documentElement, t = ct(t), /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (t.x = 0), e ? r.top + t.y - n.clientTop : r.left + t.x - n.clientLeft)) / L());
			return f.dir ? 100 - n : n
		}

		function z(t, e) {
			"mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && F(t, e)
		}

		function H(t, e) {
			if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t.buttons && 0 !== e.buttonsProperty) return F(t, e);
			Y(0 < (t = (f.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint)), 100 * t / e.baseSize, e.locations, e.handleNumbers, e.connect)
		}

		function F(t, e) {
			e.handle && (ut(e.handle, f.cssClasses.active), --g), e.listeners.forEach(function(t) {
				b.removeEventListener(t[0], t[1])
			}), 0 === g && (ut(S, f.cssClasses.drag), W(), t.cursor && (w.style.cursor = "", w.removeEventListener("selectstart", it))), f.events.smoothSteps && (e.handleNumbers.forEach(function(t) {
				$(t, h[t], !0, !0, !1, !1)
			}), e.handleNumbers.forEach(function(t) {
				B("update", t)
			})), e.handleNumbers.forEach(function(t) {
				B("change", t), B("set", t), B("end", t)
			})
		}

		function R(t, e) {
			var r, n, i, o;
			e.handleNumbers.some(k) || (1 === e.handleNumbers.length && (o = l[e.handleNumbers[0]].children[0], g += 1, lt(o, f.cssClasses.active)), t.stopPropagation(), n = T(c.move, b, H, {
				target: t.target,
				handle: o,
				connect: e.connect,
				listeners: r = [],
				startCalcPoint: t.calcPoint,
				baseSize: L(),
				pageOffset: t.pageOffset,
				handleNumbers: e.handleNumbers,
				buttonsProperty: t.buttons,
				locations: h.slice()
			}), i = T(c.end, b, F, {
				target: t.target,
				handle: o,
				listeners: r,
				doNotReject: !0,
				handleNumbers: e.handleNumbers
			}), o = T("mouseout", b, z, {
				target: t.target,
				handle: o,
				listeners: r,
				doNotReject: !0,
				handleNumbers: e.handleNumbers
			}), r.push.apply(r, n.concat(i, o)), t.cursor && (w.style.cursor = getComputedStyle(t.target).cursor, 1 < l.length && lt(S, f.cssClasses.drag), w.addEventListener("selectstart", it, !1)), e.handleNumbers.forEach(function(t) {
				B("start", t)
			}))
		}

		function r(t, e) {
			v[t] = v[t] || [], v[t].push(e), "update" === t.split(".")[0] && l.forEach(function(t, e) {
				B("update", e)
			})
		}

		function _(t) {
			var n = t && t.split(".")[0],
				i = n ? t.substring(n.length) : t;
			Object.keys(v).forEach(function(t) {
				var e = t.split(".")[0],
					r = t.substring(e.length);
				n && n !== e || i && i !== r || ((e = r) !== pt.aria && e !== pt.tooltips || i === r) && delete v[t]
			})
		}

		function B(r, n, i) {
			Object.keys(v).forEach(function(t) {
				var e = t.split(".")[0];
				r === e && v[t].forEach(function(t) {
					t.call(tt, d.map(f.format.to), n, d.slice(), i || !1, h.slice(), tt)
				})
			})
		}

		function q(t, e, r, n, i, o, s) {
			var a;
			return 1 < l.length && !f.events.unconstrained && (n && 0 < e && (a = x.getAbsoluteDistance(t[e - 1], f.margin, !1), r = Math.max(r, a)), i && e < l.length - 1 && (a = x.getAbsoluteDistance(t[e + 1], f.margin, !0), r = Math.min(r, a))), 1 < l.length && f.limit && (n && 0 < e && (a = x.getAbsoluteDistance(t[e - 1], f.limit, !1), r = Math.min(r, a)), i && e < l.length - 1 && (a = x.getAbsoluteDistance(t[e + 1], f.limit, !0), r = Math.max(r, a))), f.padding && (0 === e && (a = x.getAbsoluteDistance(0, f.padding[0], !1), r = Math.max(r, a)), e === l.length - 1 && (a = x.getAbsoluteDistance(100, f.padding[1], !0), r = Math.min(r, a))), !((r = st(r = s ? r : x.getStep(r))) === t[e] && !o) && r
		}

		function X(t, e) {
			var r = f.ort;
			return (r ? e : t) + ", " + (r ? t : e)
		}

		function Y(t, r, n, e, i) {
			var o = n.slice(),
				s = e[0],
				a = f.events.smoothSteps,
				l = [!t, t],
				u = [t, !t];
			e = e.slice(), t && e.reverse(), 1 < e.length ? e.forEach(function(t, e) {
				!1 === (e = q(o, t, o[t] + r, l[e], u[e], !1, a)) ? r = 0 : (r = e - o[t], o[t] = e)
			}) : l = u = [!0];
			var c = !1;
			e.forEach(function(t, e) {
				c = $(t, n[t] + r, l[e], u[e], !1, a) || c
			}), c && (e.forEach(function(t) {
				B("update", t), B("slide", t)
			}), null != i && B("drag", s))
		}

		function I(t, e) {
			return f.dir ? 100 - t - e : t
		}

		function W() {
			m.forEach(function(t) {
				var e = 50 < h[t] ? -1 : 1;
				e = 3 + (l.length + e * t);
				l[t].style.zIndex = String(e)
			})
		}

		function $(t, e, r, n, i, o) {
			return !1 !== (e = i ? e : q(h, t, e, r, n, !1, o)) && (e = e, h[t = t] = e, d[t] = x.fromStepping(e), e = "translate(" + X(I(e, 0) - E + "%", "0") + ")", l[t].style[f.transformRule] = e, G(t), G(t + 1), !0)
		}

		function G(t) {
			var e, r;
			a[t] && (r = 100, e = "translate(" + X(I(e = (e = 0) !== t ? h[t - 1] : e, r = (r = t !== a.length - 1 ? h[t] : r) - e) + "%", "0") + ")", r = "scale(" + X(r / 100, "1") + ")", a[t].style[f.transformRule] = e + " " + r)
		}

		function J(t, e) {
			return null === t || !1 === t || void 0 === t ? h[e] : ("number" == typeof t && (t = String(t)), !1 === (t = !1 !== (t = f.format.from(t)) ? x.toStepping(t) : t) || isNaN(t) ? h[e] : t)
		}

		function K(t, e, r) {
			var n = at(t);
			t = void 0 === h[0];
			e = void 0 === e || e, f.animate && !t && ot(S, f.cssClasses.tap, f.animationDuration), m.forEach(function(t) {
				$(t, J(n[t], t), !0, !1, r)
			});
			var i, o = 1 === m.length ? 0 : 1;
			for (t && x.hasNoSize() && (r = !0, h[0] = 0, 1 < m.length && (i = 100 / (m.length - 1), m.forEach(function(t) {
					h[t] = t * i
				}))); o < m.length; ++o) m.forEach(function(t) {
				$(t, h[t], !0, !0, r)
			});
			W(), m.forEach(function(t) {
				B("update", t), null !== n[t] && e && B("set", t)
			})
		}

		function Q(t) {
			return (t = void 0 !== t && t) ? 1 === d.length ? d[0] : d.slice(0) : 1 === (t = d.map(f.format.to)).length ? t[0] : t
		}

		function Z(t) {
			var e = h[t],
				r = x.getNearbySteps(e),
				n = d[t],
				i = r.thisStep.step;
			t = null;
			return f.snap ? [n - r.stepBefore.startValue || null, r.stepAfter.startValue - n || null] : (!1 !== i && n + i > r.stepAfter.startValue && (i = r.stepAfter.startValue - n), t = n > r.thisStep.startValue ? r.thisStep.step : !1 !== r.stepBefore.step && n - r.stepBefore.highestStep, 100 === e ? i = null : 0 === e && (t = null), e = x.countStepDecimals(), null !== i && !1 !== i && (i = Number(i.toFixed(e))), [t = null !== t && !1 !== t ? Number(t.toFixed(e)) : t, i])
		}
		lt(t = S, f.cssClasses.target), 0 === f.dir ? lt(t, f.cssClasses.ltr) : lt(t, f.cssClasses.rtl), 0 === f.ort ? lt(t, f.cssClasses.horizontal) : lt(t, f.cssClasses.vertical), lt(t, "rtl" === getComputedStyle(t).direction ? f.cssClasses.textDirectionRtl : f.cssClasses.textDirectionLtr), i = P(t, f.cssClasses.base),
			function(t, e) {
				var r = P(e, f.cssClasses.connects);
				l = [], (a = []).push(N(r, t[0]));
				for (var n = 0; n < f.handles; n++) l.push(C(e, n)), m[n] = n, a.push(N(r, t[n + 1]))
			}(f.connect, i), (u = f.events).fixed || l.forEach(function(t, e) {
				T(c.start, t.children[0], R, {
					handleNumbers: [e]
				})
			}), u.tap && T(c.start, i, function(t) {
				t.stopPropagation();
				var i, o, s, e = j(t.calcPoint),
					r = (i = e, s = !(o = 100), l.forEach(function(t, e) {
						var r, n;
						k(e) || (r = h[e], ((n = Math.abs(r - i)) < o || n <= o && r < i || 100 === n && 100 === o) && (s = e, o = n))
					}), s);
				!1 !== r && (f.events.snap || ot(S, f.cssClasses.tap, f.animationDuration), $(r, e, !0, !0), W(), B("slide", r, !0), B("update", r, !0), f.events.snap ? R(t, {
					handleNumbers: [r]
				}) : (B("change", r, !0), B("set", r, !0)))
			}, {}), u.hover && T(c.move, i, function(t) {
				t = j(t.calcPoint), t = x.getStep(t);
				var e = x.fromStepping(t);
				Object.keys(v).forEach(function(t) {
					"hover" === t.split(".")[0] && v[t].forEach(function(t) {
						t.call(tt, e)
					})
				})
			}, {
				hover: !0
			}), u.drag && a.forEach(function(e, t) {
				var r, n, i, o, s;
				!1 !== e && 0 !== t && t !== a.length - 1 && (r = l[t - 1], n = l[t], i = [e], o = [r, n], s = [t - 1, t], lt(e, f.cssClasses.draggable), u.fixed && (i.push(r.children[0]), i.push(n.children[0])), u.dragAll && (o = l, s = m), i.forEach(function(t) {
					T(c.start, t, R, {
						handles: o,
						handleNumbers: s,
						connect: e
					})
				}))
			}), K(f.start), f.pips && O(f.pips), f.tooltips && A(), _("update" + pt.aria), r("update" + pt.aria, function(t, e, o, r, s) {
				m.forEach(function(t) {
					var e = l[t],
						r = q(h, t, 0, !0, !0, !0),
						n = q(h, t, 100, !0, !0, !0),
						i = s[t];
					t = String(f.ariaFormat.to(o[t])), r = x.fromStepping(r).toFixed(1), n = x.fromStepping(n).toFixed(1), i = x.fromStepping(i).toFixed(1);
					e.children[0].setAttribute("aria-valuemin", r), e.children[0].setAttribute("aria-valuemax", n), e.children[0].setAttribute("aria-valuenow", i), e.children[0].setAttribute("aria-valuetext", t)
				})
			});
		var tt = {
			destroy: function() {
				for (_(pt.aria), _(pt.tooltips), Object.keys(f.cssClasses).forEach(function(t) {
						ut(S, f.cssClasses[t])
					}); S.firstChild;) S.removeChild(S.firstChild);
				delete S.noUiSlider
			},
			steps: function() {
				return m.map(Z)
			},
			on: r,
			off: _,
			get: Q,
			set: K,
			setHandle: function(t, e, r, n) {
				if (!(0 <= (t = Number(t)) && t < m.length)) throw new Error("noUiSlider: invalid handle number, got: " + t);
				$(t, J(e, t), !0, !0, n), B("update", t), r && B("set", t)
			},
			reset: function(t) {
				K(f.start, t)
			},
			__moveHandles: function(t, e, r) {
				Y(t, e, h, r)
			},
			options: o,
			updateOptions: function(e, t) {
				var r = Q(),
					n = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"];
				n.forEach(function(t) {
					void 0 !== e[t] && (o[t] = e[t])
				});
				var i = ft(o);
				n.forEach(function(t) {
					void 0 !== e[t] && (f[t] = i[t])
				}), x = i.spectrum, f.margin = i.margin, f.limit = i.limit, f.padding = i.padding, f.pips ? O(f.pips) : D(), (f.tooltips ? A : M)(), h = [], K(nt(e.start) ? e.start : r, t)
			},
			target: S,
			removePips: D,
			removeTooltips: M,
			getPositions: function() {
				return h.slice()
			},
			getTooltips: function() {
				return n
			},
			getOrigins: function() {
				return l
			},
			pips: O
		};
		return tt
	}

	function T(t, e) {
		if (!t || !t.nodeName) throw new Error("noUiSlider: create requires a single element, got: " + t);
		if (t.noUiSlider) throw new Error("noUiSlider: Slider was already initialized.");
		return e = o(t, ft(e), e), t.noUiSlider = e
	}
	var j = {
		__spectrum: r,
		cssClasses: c,
		create: T
	};
	et.create = T, et.cssClasses = c, et.default = j, Object.defineProperty(et, "__esModule", {
		value: !0
	})
});
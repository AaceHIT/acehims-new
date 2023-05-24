var FullCalendar = function(e) {
	"use strict";
	var r = function(e, t) {
		return (r = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(e, t) {
				e.__proto__ = t
			} || function(e, t) {
				for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
			})(e, t)
	};

	function s(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

		function n() {
			this.constructor = e
		}
		r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
	}
	var N = function() {
		return (N = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++)
				for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
			return e
		}).apply(this, arguments)
	};

	function m(e, t, n) {
		if (n || 2 === arguments.length)
			for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
		return e.concat(r || t)
	}
	var b, t, n, o, i, D = {},
		C = [],
		a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

	function w(e, t) {
		for (var n in t) e[n] = t[n];
		return e
	}

	function R(e) {
		var t = e.parentNode;
		t && t.removeChild(e)
	}

	function l(e, t, n) {
		var r, o, i, a = arguments,
			s = {};
		for (i in t) "key" == i ? r = t[i] : "ref" == i ? o = t[i] : s[i] = t[i];
		if (3 < arguments.length)
			for (n = [n], i = 3; i < arguments.length; i++) n.push(a[i]);
		if (null != n && (s.children = n), "function" == typeof e && null != e.defaultProps)
			for (i in e.defaultProps) void 0 === s[i] && (s[i] = e.defaultProps[i]);
		return E(e, s, r, o, null)
	}

	function E(e, t, n, r, o) {
		var i = {
			type: e,
			props: t,
			key: n,
			ref: r,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__d: void 0,
			__c: null,
			__h: null,
			constructor: void 0,
			__v: null == o ? ++b.__v : o
		};
		return null != b.vnode && b.vnode(i), i
	}

	function T(e) {
		return e.children
	}

	function _(e, t) {
		this.props = e, this.context = t
	}

	function S(e, t) {
		if (null == t) return e.__ ? S(e.__, e.__.__k.indexOf(e) + 1) : null;
		for (var n; t < e.__k.length; t++)
			if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
		return "function" == typeof e.type ? S(e) : null
	}

	function u(e) {
		var t, n;
		if (null != (e = e.__) && null != e.__c) {
			for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
				if (null != (n = e.__k[t]) && null != n.__e) {
					e.__e = e.__c.base = n.__e;
					break
				} return u(e)
		}
	}

	function c(e) {
		(!e.__d && (e.__d = !0) && t.push(e) && !d.__r++ || o !== b.debounceRendering) && ((o = b.debounceRendering) || n)(d)
	}

	function d() {
		for (var e; d.__r = t.length;) e = t.sort(function(e, t) {
			return e.__v.__b - t.__v.__b
		}), t = [], e.some(function(e) {
			var t, n, r, o, i, a;
			e.__d && (i = (o = (t = e).__v).__e, (a = t.__P) && (n = [], (r = w({}, o)).__v = o.__v + 1, P(a, o, r, t.__n, void 0 !== a.ownerSVGElement, null != o.__h ? [i] : null, n, null == i ? S(o) : i, o.__h), g(n, o), o.__e != i && u(o)))
		})
	}

	function k(e, t, n, r, o, i, a, s, l, u) {
		var c, d, p, f, h, v, g, m = r && r.__k || C,
			y = m.length;
		for (n.__k = [], c = 0; c < t.length; c++)
			if (null != (f = n.__k[c] = null == (f = t[c]) || "boolean" == typeof f ? null : "string" == typeof f || "number" == typeof f || "bigint" == typeof f ? E(null, f, null, null, f) : Array.isArray(f) ? E(T, {
					children: f
				}, null, null, null) : 0 < f.__b ? E(f.type, f.props, f.key, null, f.__v) : f)) {
				if (f.__ = n, f.__b = n.__b + 1, null === (p = m[c]) || p && f.key == p.key && f.type === p.type) m[c] = void 0;
				else
					for (d = 0; d < y; d++) {
						if ((p = m[d]) && f.key == p.key && f.type === p.type) {
							m[d] = void 0;
							break
						}
						p = null
					}
				P(e, f, p = p || D, o, i, a, s, l, u), h = f.__e, (d = f.ref) && p.ref != d && (g || (g = []), p.ref && g.push(p.ref, null, f), g.push(d, f.__c || h, f)), null != h ? (null == v && (v = h), "function" == typeof f.type && null != f.__k && f.__k === p.__k ? f.__d = l = x(f, l, e) : l = M(e, f, p, m, h, l), u || "option" !== n.type ? "function" == typeof n.type && (n.__d = l) : e.value = "") : l && p.__e == l && l.parentNode != e && (l = S(p))
			} for (n.__e = v, c = y; c--;) null != m[c] && ("function" == typeof n.type && null != m[c].__e && m[c].__e == n.__d && (n.__d = S(r, c + 1)), O(m[c], m[c]));
		if (g)
			for (c = 0; c < g.length; c++) H(g[c], g[++c], g[++c])
	}

	function x(e, t, n) {
		var r, o;
		for (r = 0; r < e.__k.length; r++)(o = e.__k[r]) && (o.__ = e, t = "function" == typeof o.type ? x(o, t, n) : M(n, o, o, e.__k, o.__e, t));
		return t
	}

	function p(e, t) {
		return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some(function(e) {
			p(e, t)
		}) : t.push(e)), t
	}

	function M(e, t, n, r, o, i) {
		var a, s, l;
		if (void 0 !== t.__d) a = t.__d, t.__d = void 0;
		else if (null == n || o != i || null == o.parentNode) e: if (null == i || i.parentNode !== e) e.appendChild(o), a = null;
			else {
				for (s = i, l = 0;
					(s = s.nextSibling) && l < r.length; l += 2)
					if (s == o) break e;
				e.insertBefore(o, i), a = i
			} return void 0 !== a ? a : o.nextSibling
	}

	function f(e, t, n) {
		"-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || a.test(t) ? n : n + "px"
	}

	function I(e, t, n, r, o) {
		var i;
		e: if ("style" === t)
			if ("string" == typeof n) e.style.cssText = n;
			else {
				if ("string" == typeof r && (e.style.cssText = r = ""), r)
					for (t in r) n && t in n || f(e.style, t, "");
				if (n)
					for (t in n) r && n[t] === r[t] || f(e.style, t, n[t])
			}
		else if ("o" === t[0] && "n" === t[1]) i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? v : h, i) : e.removeEventListener(t, i ? v : h, i);
		else if ("dangerouslySetInnerHTML" !== t) {
			if (o) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
			else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
				e[t] = null == n ? "" : n;
				break e
			} catch (e) {}
			"function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
		}
	}

	function h(e) {
		this.l[e.type + !1](b.event ? b.event(e) : e)
	}

	function v(e) {
		this.l[e.type + !0](b.event ? b.event(e) : e)
	}

	function P(e, t, n, r, o, i, a, s, l) {
		var u, c, d, p, f, h, v, g, m, y, E, S = t.type;
		if (void 0 !== t.constructor) return null;
		null != n.__h && (l = n.__h, s = t.__e = n.__e, t.__h = null, i = [s]), (u = b.__b) && u(t);
		try {
			e: if ("function" == typeof S) {
				if (g = t.props, m = (u = S.contextType) && r[u.__c], y = u ? m ? m.props.value : u.__ : r, n.__c ? v = (c = t.__c = n.__c).__ = c.__E : ("prototype" in S && S.prototype.render ? t.__c = c = new S(g, y) : (t.__c = c = new _(g, y), c.constructor = S, c.render = A), m && m.sub(c), c.props = g, c.state || (c.state = {}), c.context = y, c.__n = r, d = c.__d = !0, c.__h = []), null == c.__s && (c.__s = c.state), null != S.getDerivedStateFromProps && (c.__s == c.state && (c.__s = w({}, c.__s)), w(c.__s, S.getDerivedStateFromProps(g, c.__s))), p = c.props, f = c.state, d) null == S.getDerivedStateFromProps && null != c.componentWillMount && c.componentWillMount(), null != c.componentDidMount && c.__h.push(c.componentDidMount);
				else {
					if (null == S.getDerivedStateFromProps && g !== p && null != c.componentWillReceiveProps && c.componentWillReceiveProps(g, y), !c.__e && null != c.shouldComponentUpdate && !1 === c.shouldComponentUpdate(g, c.__s, y) || t.__v === n.__v) {
						c.props = g, c.state = c.__s, t.__v !== n.__v && (c.__d = !1), (c.__v = t).__e = n.__e, t.__k = n.__k, t.__k.forEach(function(e) {
							e && (e.__ = t)
						}), c.__h.length && a.push(c);
						break e
					}
					null != c.componentWillUpdate && c.componentWillUpdate(g, c.__s, y), null != c.componentDidUpdate && c.__h.push(function() {
						c.componentDidUpdate(p, f, h)
					})
				}
				c.context = y, c.props = g, c.state = c.__s, (u = b.__r) && u(t), c.__d = !1, c.__v = t, c.__P = e, u = c.render(c.props, c.state, c.context), c.state = c.__s, null != c.getChildContext && (r = w(w({}, r), c.getChildContext())), d || null == c.getSnapshotBeforeUpdate || (h = c.getSnapshotBeforeUpdate(p, f)), E = null != u && u.type === T && null == u.key ? u.props.children : u, k(e, Array.isArray(E) ? E : [E], t, n, r, o, i, a, s, l), c.base = t.__e, t.__h = null, c.__h.length && a.push(c), v && (c.__E = c.__ = null), c.__e = !1
			} else null == i && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = function(e, t, n, r, o, i, a, s) {
				var l, u, c, d, p = n.props,
					f = t.props,
					h = t.type,
					v = 0;
				if ("svg" === h && (o = !0), null != i)
					for (; v < i.length; v++)
						if ((l = i[v]) && (l === e || (h ? l.localName == h : 3 == l.nodeType))) {
							e = l, i[v] = null;
							break
						} if (null == e) {
					if (null === h) return document.createTextNode(f);
					e = o ? document.createElementNS("http://www.w3.org/2000/svg", h) : document.createElement(h, f.is && f), i = null, s = !1
				}
				if (null === h) p === f || s && e.data === f || (e.data = f);
				else {
					if (i = i && C.slice.call(e.childNodes), u = (p = n.props || D).dangerouslySetInnerHTML, c = f.dangerouslySetInnerHTML, !s) {
						if (null != i)
							for (p = {}, d = 0; d < e.attributes.length; d++) p[e.attributes[d].name] = e.attributes[d].value;
						(c || u) && (c && (u && c.__html == u.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""))
					}
					if (function(e, t, n, r, o) {
							var i;
							for (i in n) "children" === i || "key" === i || i in t || I(e, i, null, n[i], r);
							for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || I(e, i, t[i], n[i], r)
						}(e, f, p, o, s), c) t.__k = [];
					else if (v = t.props.children, k(e, Array.isArray(v) ? v : [v], t, n, r, o && "foreignObject" !== h, i, a, e.firstChild, s), null != i)
						for (v = i.length; v--;) null != i[v] && R(i[v]);
					s || ("value" in f && void 0 !== (v = f.value) && (v !== e.value || "progress" === h && !v) && I(e, "value", v, p.value, !1), "checked" in f && void 0 !== (v = f.checked) && v !== e.checked && I(e, "checked", v, p.checked, !1))
				}
				return e
			}(n.__e, t, n, r, o, i, a, l);
			(u = b.diffed) && u(t)
		}
		catch (e) {
			t.__v = null, (l || null != i) && (t.__e = s, t.__h = !!l, i[i.indexOf(s)] = null), b.__e(e, t, n)
		}
	}

	function g(e, t) {
		b.__c && b.__c(t, e), e.some(function(t) {
			try {
				e = t.__h, t.__h = [], e.some(function(e) {
					e.call(t)
				})
			} catch (e) {
				b.__e(e, t.__v)
			}
		})
	}

	function H(e, t, n) {
		try {
			"function" == typeof e ? e(t) : e.current = t
		} catch (e) {
			b.__e(e, n)
		}
	}

	function O(e, t, n) {
		var r, o, i;
		if (b.unmount && b.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || H(r, null, t)), n || "function" == typeof e.type || (n = null != (o = e.__e)), e.__e = e.__d = void 0, null != (r = e.__c)) {
			if (r.componentWillUnmount) try {
				r.componentWillUnmount()
			} catch (e) {
				b.__e(e, t)
			}
			r.base = r.__P = null
		}
		if (r = e.__k)
			for (i = 0; i < r.length; i++) r[i] && O(r[i], t, n);
		null != o && R(o)
	}

	function A(e, t, n) {
		return this.constructor(e, n)
	}

	function y(e, t, n) {
		var r, o, i;
		b.__ && b.__(e, t), o = (r = "function" == typeof n) ? null : n && n.__k || t.__k, i = [], P(t, e = (!r && n || t).__k = l(T, null, [e]), o || D, D, void 0 !== t.ownerSVGElement, !r && n ? [n] : o ? null : t.firstChild ? C.slice.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r), g(i, e)
	}
	b = {
		__e: function(e, t) {
			for (var n, r, o; t = t.__;)
				if ((n = t.__c) && !n.__) try {
					if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), o = n.__d), o) return n.__E = n
				} catch (t) {
					e = t
				}
			throw e
		},
		__v: 0
	}, _.prototype.setState = function(e, t) {
		var n;
		n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof e && (e = e(w({}, n), this.props)), e && w(n, e), null != e && this.__v && (t && this.__h.push(t), c(this))
	}, _.prototype.forceUpdate = function(e) {
		this.__v && (this.__e = !0, e && this.__h.push(e), c(this))
	}, _.prototype.render = T, t = [], n = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, i = d.__r = 0;
	var L, U = [],
		W = b.__b,
		V = b.__r,
		F = b.diffed,
		B = b.__c,
		z = b.unmount;

	function j() {
		U.forEach(function(t) {
			if (t.__P) try {
				t.__H.__h.forEach(q), t.__H.__h.forEach(Y), t.__H.__h = []
			} catch (e) {
				t.__H.__h = [], b.__e(e, t.__v)
			}
		}), U = []
	}
	b.__b = function(e) {
		W && W(e)
	}, b.__r = function(e) {
		V && V(e);
		var t = e.__c.__H;
		t && (t.__h.forEach(q), t.__h.forEach(Y), t.__h = [])
	}, b.diffed = function(e) {
		F && F(e);
		var t = e.__c;
		t && t.__H && t.__H.__h.length && (1 !== U.push(t) && L === b.requestAnimationFrame || ((L = b.requestAnimationFrame) || function(e) {
			var t, n = function() {
					clearTimeout(r), G && cancelAnimationFrame(t), setTimeout(e)
				},
				r = setTimeout(n, 100);
			G && (t = requestAnimationFrame(n))
		})(j))
	}, b.__c = function(e, n) {
		n.some(function(t) {
			try {
				t.__h.forEach(q), t.__h = t.__h.filter(function(e) {
					return !e.__ || Y(e)
				})
			} catch (e) {
				n.some(function(e) {
					e.__h && (e.__h = [])
				}), n = [], b.__e(e, t.__v)
			}
		}), B && B(e, n)
	}, b.unmount = function(e) {
		z && z(e);
		var t = e.__c;
		if (t && t.__H) try {
			t.__H.__.forEach(q)
		} catch (e) {
			b.__e(e, t.__v)
		}
	};
	var G = "function" == typeof requestAnimationFrame;

	function q(e) {
		"function" == typeof e.__c && e.__c()
	}

	function Y(e) {
		e.__c = e.__()
	}

	function Z(e, t) {
		for (var n in e)
			if ("__source" !== n && !(n in t)) return !0;
		for (var r in t)
			if ("__source" !== r && e[r] !== t[r]) return !0;
		return !1
	}(new _).isPureReactComponent = !0;
	var X = b.__b;
	b.__b = function(e) {
		e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), X && X(e)
	};
	var K = b.__e;
	b.__e = function(e, t, n) {
		if (e.then)
			for (var r, o = t; o = o.__;)
				if ((r = o.__c) && r.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
		K(e, t, n)
	};
	var $ = b.unmount;

	function J(e) {
		var t = e.__.__c;
		return t && t.__e && t.__e(e)
	}
	b.unmount = function(e) {
		var t = e.__c;
		t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), $ && $(e)
	}, (new _).__c = function(e, t) {
		var n = t.__c,
			r = this;
		null == r.t && (r.t = []), r.t.push(n);
		var o = J(r.__v),
			i = !1,
			a = function() {
				i || (i = !0, n.__R = null, o ? o(s) : s())
			};
		n.__R = a;
		var s = function() {
				if (!--r.__u) {
					if (r.state.__e) {
						var e = r.state.__e;
						r.__v.__k[0] = function t(e, n, r) {
							return e && (e.__v = null, e.__k = e.__k && e.__k.map(function(e) {
								return t(e, n, r)
							}), e.__c && e.__c.__P === n && (e.__e && r.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = r)), e
						}(e, e.__c.__P, e.__c.__O)
					}
					var t;
					for (r.setState({
							__e: r.__b = null
						}); t = r.t.pop();) t.forceUpdate()
				}
			},
			l = !0 === t.__h;
		r.__u++ || l || r.setState({
			__e: r.__b = r.__v.__k[0]
		}), e.then(a, a)
	};
	var Q = function(e, t, n) {
		if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
			for (n = e.u; n;) {
				for (; 3 < n.length;) n.pop()();
				if (n[1] < n[0]) break;
				e.u = n = n[2]
			}
	};

	function ee(e) {
		return this.getChildContext = function() {
			return e.context
		}, e.children
	}

	function te(e) {
		var n = this,
			t = e.i;
		n.componentWillUnmount = function() {
			y(null, n.l), n.l = null, n.i = null
		}, n.i && n.i !== t && n.componentWillUnmount(), e.__v ? (n.l || (n.i = t, n.l = {
			nodeType: 1,
			parentNode: t,
			childNodes: [],
			appendChild: function(e) {
				this.childNodes.push(e), n.i.appendChild(e)
			},
			insertBefore: function(e, t) {
				this.childNodes.push(e), n.i.appendChild(e)
			},
			removeChild: function(e) {
				this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), n.i.removeChild(e)
			}
		}), y(l(ee, {
			context: n.context
		}, e.__v), n.l)) : n.l && n.componentWillUnmount()
	}(new _).__e = function(n) {
		var r = this,
			o = J(r.__v),
			i = r.o.get(n);
		return i[0]++,
			function(e) {
				var t = function() {
					r.props.revealOrder ? (i.push(e), Q(r, n, i)) : e()
				};
				o ? o(t) : t()
			}
	};
	var ne = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
		re = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
	_.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
		Object.defineProperty(_.prototype, t, {
			configurable: !0,
			get: function() {
				return this["UNSAFE_" + t]
			},
			set: function(e) {
				Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: e
				})
			}
		})
	});
	var oe = b.event;

	function ie() {}

	function ae() {
		return this.cancelBubble
	}

	function se() {
		return this.defaultPrevented
	}
	b.event = function(e) {
		return oe && (e = oe(e)), e.persist = ie, e.isPropagationStopped = ae, e.isDefaultPrevented = se, e.nativeEvent = e
	};
	var le = {
			configurable: !0,
			get: function() {
				return this.class
			}
		},
		ue = b.vnode;
	b.vnode = function(e) {
		var t, n = e.type,
			r = e.props,
			o = r;
		if ("string" == typeof n) {
			for (var i in o = {}, r) {
				var a = r[i];
				"value" === i && "defaultValue" in r && null == a || ("defaultValue" === i && "value" in r && null == r.value ? i = "value" : "download" === i && !0 === a ? a = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + n) && (t = r.type, !("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(t)) ? i = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(i) ? i = i.toLowerCase() : re.test(i) ? i = i.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === a && (a = void 0), o[i] = a)
			}
			"select" == n && o.multiple && Array.isArray(o.value) && (o.value = p(r.children).forEach(function(e) {
				e.props.selected = -1 != o.value.indexOf(e.props.value)
			})), "select" == n && null != o.defaultValue && (o.value = p(r.children).forEach(function(e) {
				e.props.selected = o.multiple ? -1 != o.defaultValue.indexOf(e.props.value) : o.defaultValue == e.props.value
			})), e.props = o
		}
		n && r.class != r.className && (le.enumerable = "className" in r, null != r.className && (o.class = r.className), Object.defineProperty(o, "className", le)), e.$$typeof = ne, ue && ue(e)
	};
	var ce = b.__r;
	b.__r = function(e) {
		ce && ce(e)
	}, "object" == typeof performance && "function" == typeof performance.now && performance.now.bind(performance);
	var de = "undefined" != typeof globalThis ? globalThis : window;
	de.FullCalendarVDom ? console.warn("FullCalendar VDOM already loaded") : de.FullCalendarVDom = {
		Component: _,
		createElement: l,
		render: y,
		createRef: function() {
			return {
				current: null
			}
		},
		Fragment: T,
		createContext: function(e) {
			var r, t, n = (t = {
					__c: r = "__cC" + i++,
					__: e,
					Consumer: function(e, t) {
						return e.children(t)
					},
					Provider: function(e) {
						var n, t;
						return this.getChildContext || (n = [], ((t = {})[r] = this).getChildContext = function() {
							return t
						}, this.shouldComponentUpdate = function(e) {
							this.props.value !== e.value && n.some(c)
						}, this.sub = function(e) {
							n.push(e);
							var t = e.componentWillUnmount;
							e.componentWillUnmount = function() {
								n.splice(n.indexOf(e), 1), t && t.call(e)
							}
						}), e.children
					}
				}).Provider.__ = t.Consumer.contextType = t,
				o = n.Provider;
			return n.Provider = function() {
				var e = this,
					t = !this.getChildContext,
					n = o.apply(this, arguments);
				if (t) {
					var r = [];
					this.shouldComponentUpdate = function(t) {
						e.props.value !== t.value && r.forEach(function(e) {
							e.context = t.value, e.forceUpdate()
						})
					}, this.sub = function(e) {
						r.push(e);
						var t = e.componentWillUnmount;
						e.componentWillUnmount = function() {
							r.splice(r.indexOf(e), 1), t && t.call(e)
						}
					}
				}
				return n
			}, n
		},
		createPortal: function(e, t) {
			return l(te, {
				__v: e,
				i: t
			})
		},
		flushSync: function(e) {
			e();
			var t = b.debounceRendering,
				n = [];
			for (b.debounceRendering = function(e) {
					n.push(e)
				}, y(l(pe, {}), document.createElement("div")); n.length;) n.shift()();
			b.debounceRendering = t
		},
		unmountComponentAtNode: function(e) {
			y(null, e)
		}
	};
	var pe = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return s(t, e), t.prototype.render = function() {
				return l("div", {})
			}, t.prototype.componentDidMount = function() {
				this.setState({})
			}, t
		}(_),
		fe = function() {
			function e(e, t) {
				this.context = e, this.internalEventSource = t
			}
			return e.prototype.remove = function() {
				this.context.dispatch({
					type: "REMOVE_EVENT_SOURCE",
					sourceId: this.internalEventSource.sourceId
				})
			}, e.prototype.refetch = function() {
				this.context.dispatch({
					type: "FETCH_EVENT_SOURCES",
					sourceIds: [this.internalEventSource.sourceId],
					isRefetch: !0
				})
			}, Object.defineProperty(e.prototype, "id", {
				get: function() {
					return this.internalEventSource.publicId
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "url", {
				get: function() {
					return this.internalEventSource.meta.url
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "format", {
				get: function() {
					return this.internalEventSource.meta.format
				},
				enumerable: !1,
				configurable: !0
			}), e
		}();

	function he(e) {
		e.parentNode && e.parentNode.removeChild(e)
	}

	function ve(e, t) {
		if (e.closest) return e.closest(t);
		if (!document.documentElement.contains(e)) return null;
		do {
			if (ge(e, t)) return e;
			e = e.parentElement || e.parentNode
		} while (null !== e && 1 === e.nodeType);
		return null
	}

	function ge(e, t) {
		return (e.matches || e.matchesSelector || e.msMatchesSelector).call(e, t)
	}

	function me(e, t) {
		for (var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0; o < n.length; o += 1)
			for (var i = n[o].querySelectorAll(t), a = 0; a < i.length; a += 1) r.push(i[a]);
		return r
	}
	var ye = /(top|left|right|bottom|width|height)$/i;

	function Ee(e, t) {
		for (var n in t) Se(e, n, t[n])
	}

	function Se(e, t, n) {
		null == n ? e.style[t] = "" : "number" == typeof n && ye.test(t) ? e.style[t] = n + "px" : e.style[t] = n
	}

	function be(e) {
		var t, n;
		return null !== (n = null === (t = e.composedPath) || void 0 === t ? void 0 : t.call(e)[0]) && void 0 !== n ? n : e.target
	}

	function De(e) {
		return e.getRootNode ? e.getRootNode() : document
	}
	var Ce = 0;

	function we() {
		return "fc-dom-" + (Ce += 1)
	}

	function Re(e) {
		e.preventDefault()
	}

	function Te(e, t, n, r) {
		var o, i, a = (o = n, i = r, function(e) {
			var t = ve(e.target, o);
			t && i.call(t, e, t)
		});
		return e.addEventListener(t, a),
			function() {
				e.removeEventListener(t, a)
			}
	}
	var _e = ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"];

	function ke(t, n) {
		var r = function(e) {
			n(e), _e.forEach(function(e) {
				t.removeEventListener(e, r)
			})
		};
		_e.forEach(function(e) {
			t.addEventListener(e, r)
		})
	}

	function xe(e) {
		return N({
			onClick: e
		}, Me(e))
	}

	function Me(t) {
		return {
			tabIndex: 0,
			onKeyDown: function(e) {
				"Enter" !== e.key && " " !== e.key || (t(e), e.preventDefault())
			}
		}
	}
	var Ie = 0;

	function Pe() {
		return String(Ie += 1)
	}

	function Ne() {
		document.body.classList.add("fc-not-allowed")
	}

	function He() {
		document.body.classList.remove("fc-not-allowed")
	}

	function Oe(e) {
		e.classList.add("fc-unselectable"), e.addEventListener("selectstart", Re)
	}

	function Ae(e) {
		e.classList.remove("fc-unselectable"), e.removeEventListener("selectstart", Re)
	}

	function Le(e) {
		e.addEventListener("contextmenu", Re)
	}

	function Ue(e) {
		e.removeEventListener("contextmenu", Re)
	}

	function We(e) {
		var t, n, r = [],
			o = [];
		for ("string" == typeof e ? o = e.split(/\s*,\s*/) : "function" == typeof e ? o = [e] : Array.isArray(e) && (o = e), t = 0; t < o.length; t += 1) "string" == typeof(n = o[t]) ? r.push("-" === n.charAt(0) ? {
			field: n.substring(1),
			order: -1
		} : {
			field: n,
			order: 1
		}) : "function" == typeof n && r.push({
			func: n
		});
		return r
	}

	function Ve(e, t, n) {
		var r, o;
		for (r = 0; r < n.length; r += 1)
			if (o = Fe(e, t, n[r])) return o;
		return 0
	}

	function Fe(e, t, n) {
		return n.func ? n.func(e, t) : Be(e[n.field], t[n.field]) * (n.order || 1)
	}

	function Be(e, t) {
		return e || t ? null == t ? -1 : null == e ? 1 : "string" == typeof e || "string" == typeof t ? String(e).localeCompare(String(t)) : e - t : 0
	}

	function ze(e, t) {
		var n = String(e);
		return "000".substr(0, t - n.length) + n
	}

	function je(e, t, n) {
		return "function" == typeof e ? e.apply(void 0, t) : "string" == typeof e ? t.reduce(function(e, t, n) {
			return e.replace("$" + n, t || "")
		}, e) : n
	}

	function Ge(e, t) {
		return e - t
	}

	function qe(e) {
		return e % 1 == 0
	}

	function Ye(e) {
		var t = e.querySelector(".fc-scrollgrid-shrink-frame"),
			n = e.querySelector(".fc-scrollgrid-shrink-cushion");
		if (!t) throw new Error("needs fc-scrollgrid-shrink-frame className");
		if (!n) throw new Error("needs fc-scrollgrid-shrink-cushion className");
		return e.getBoundingClientRect().width - t.getBoundingClientRect().width + n.getBoundingClientRect().width
	}
	var Ze = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

	function Xe(e, t) {
		var n = st(e);
		return n[2] += 7 * t, lt(n)
	}

	function Ke(e, t) {
		var n = st(e);
		return n[2] += t, lt(n)
	}

	function $e(e, t) {
		var n = st(e);
		return n[6] += t, lt(n)
	}

	function Je(e, t) {
		return Qe(e, t) / 7
	}

	function Qe(e, t) {
		return (t.valueOf() - e.valueOf()) / 864e5
	}

	function et(e, t) {
		var n = rt(e),
			r = rt(t);
		return {
			years: 0,
			months: 0,
			days: Math.round(Qe(n, r)),
			milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf())
		}
	}

	function tt(e, t) {
		var n = nt(e, t);
		return null !== n && n % 7 == 0 ? n / 7 : null
	}

	function nt(e, t) {
		return ct(e) === ct(t) ? Math.round(Qe(e, t)) : null
	}

	function rt(e) {
		return lt([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()])
	}

	function ot(e, t, n, r) {
		var o, i, a, s, l = lt([t, 0, 1 + (o = t, i = n, a = r, s = 7 + i - a, -(7 + lt([o, 0, s]).getUTCDay() - i) % 7 + s - 1)]),
			u = rt(e),
			c = Math.round(Qe(l, u));
		return Math.floor(c / 7) + 1
	}

	function it(e) {
		return [e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()]
	}

	function at(e) {
		return new Date(e[0], e[1] || 0, null == e[2] ? 1 : e[2], e[3] || 0, e[4] || 0, e[5] || 0)
	}

	function st(e) {
		return [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()]
	}

	function lt(e) {
		return 1 === e.length && (e = e.concat([0])), new Date(Date.UTC.apply(Date, e))
	}

	function ut(e) {
		return !isNaN(e.valueOf())
	}

	function ct(e) {
		return 1e3 * e.getUTCHours() * 60 * 60 + 1e3 * e.getUTCMinutes() * 60 + 1e3 * e.getUTCSeconds() + e.getUTCMilliseconds()
	}

	function dt(e, t, n, r) {
		return {
			instanceId: Pe(),
			defId: e,
			range: t,
			forcedStartTzo: null == n ? null : n,
			forcedEndTzo: null == r ? null : r
		}
	}
	var pt = Object.prototype.hasOwnProperty;

	function ft(e, t) {
		var n = {};
		if (t)
			for (var r in t) {
				for (var o = [], i = e.length - 1; 0 <= i; i -= 1) {
					var a = e[i][r];
					if ("object" == typeof a && a) o.unshift(a);
					else if (void 0 !== a) {
						n[r] = a;
						break
					}
				}
				o.length && (n[r] = ft(o))
			}
		for (i = e.length - 1; 0 <= i; i -= 1) {
			var s = e[i];
			for (var l in s) l in n || (n[l] = s[l])
		}
		return n
	}

	function ht(e, t) {
		var n = {};
		for (var r in e) t(e[r], r) && (n[r] = e[r]);
		return n
	}

	function vt(e, t) {
		var n = {};
		for (var r in e) n[r] = t(e[r], r);
		return n
	}

	function gt(e) {
		for (var t = {}, n = 0, r = e; n < r.length; n++) t[r[n]] = !0;
		return t
	}

	function mt(e) {
		var t = [];
		for (var n in e) t.push(e[n]);
		return t
	}

	function yt(e, t) {
		if (e === t) return !0;
		for (var n in e)
			if (pt.call(e, n) && !(n in t)) return !1;
		for (var n in t)
			if (pt.call(t, n) && e[n] !== t[n]) return !1;
		return !0
	}

	function Et(e, t) {
		var n = [];
		for (var r in e) pt.call(e, r) && (r in t || n.push(r));
		for (var r in t) pt.call(t, r) && e[r] !== t[r] && n.push(r);
		return n
	}

	function St(e, t, n) {
		if (void 0 === n && (n = {}), e === t) return !0;
		for (var r in t)
			if (!(r in e && (o = e[r], i = t[r], a = n[r], o === i || !0 === a || a && a(o, i)))) return !1;
		var o, i, a;
		for (var r in e)
			if (!(r in t)) return !1;
		return !0
	}

	function bt(e, t, n, r) {
		void 0 === t && (t = 0), void 0 === r && (r = 1);
		var o = [];
		null == n && (n = Object.keys(e).length);
		for (var i = t; i < n; i += r) {
			var a = e[i];
			void 0 !== a && o.push(a)
		}
		return o
	}

	function Dt(e, t, n) {
		var r, o, i, a, s, l, u = n.dateEnv,
			c = n.pluginHooks,
			d = n.options,
			p = e.defs,
			f = e.instances;
		for (var h in f = ht(f, function(e) {
				return !p[e.defId].recurringDef
			}), p) {
			var v = p[h];
			if (v.recurringDef) {
				var g = v.recurringDef.duration;
				g || (g = v.allDay ? d.defaultAllDayEventDuration : d.defaultTimedEventDuration);
				for (var m = 0, y = (r = v, o = g, i = t, a = u, s = c.recurringTypes, l = void 0, l = s[r.recurringDef.typeId].expand(r.recurringDef.typeData, {
						start: a.subtract(i.start, o),
						end: i.end
					}, a), r.allDay && (l = l.map(rt)), l); m < y.length; m++) {
					var E = y[m],
						S = dt(h, {
							start: E,
							end: u.add(E, g)
						});
					f[S.instanceId] = S
				}
			}
		}
		return {
			defs: p,
			instances: f
		}
	}
	var Ct = ["years", "months", "days", "milliseconds"],
		wt = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;

	function Rt(e, t) {
		var n;
		return "string" == typeof e ? function(e) {
			var t = wt.exec(e);
			if (t) {
				var n = t[1] ? -1 : 1;
				return {
					years: 0,
					months: 0,
					days: n * (t[2] ? parseInt(t[2], 10) : 0),
					milliseconds: n * (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 + 60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 + 1e3 * (t[5] ? parseInt(t[5], 10) : 0) + (t[6] ? parseInt(t[6], 10) : 0))
				}
			}
			return null
		}(e) : "object" == typeof e && e ? Tt(e) : "number" == typeof e ? Tt(((n = {})[t || "milliseconds"] = e, n)) : null
	}

	function Tt(e) {
		var t = {
				years: e.years || e.year || 0,
				months: e.months || e.month || 0,
				days: e.days || e.day || 0,
				milliseconds: 60 * (e.hours || e.hour || 0) * 60 * 1e3 + 60 * (e.minutes || e.minute || 0) * 1e3 + 1e3 * (e.seconds || e.second || 0) + (e.milliseconds || e.millisecond || e.ms || 0)
			},
			n = e.weeks || e.week;
		return n && (t.days += 7 * n, t.specifiedWeeks = !0), t
	}

	function _t(e, t) {
		return {
			years: e.years + t.years,
			months: e.months + t.months,
			days: e.days + t.days,
			milliseconds: e.milliseconds + t.milliseconds
		}
	}

	function kt(e, t) {
		return {
			years: e.years * t,
			months: e.months * t,
			days: e.days * t,
			milliseconds: e.milliseconds * t
		}
	}

	function xt(e) {
		return Mt(e) / 864e5
	}

	function Mt(e) {
		return 31536e6 * e.years + 2592e6 * e.months + 864e5 * e.days + e.milliseconds
	}

	function It(e, t) {
		for (var n = null, r = 0; r < Ct.length; r += 1) {
			var o = Ct[r];
			if (t[o]) {
				var i = e[o] / t[o];
				if (!qe(i) || null !== n && n !== i) return null;
				n = i
			} else if (e[o]) return null
		}
		return n
	}

	function Pt(e) {
		var t = e.milliseconds;
		if (t) {
			if (t % 1e3 != 0) return {
				unit: "millisecond",
				value: t
			};
			if (t % 6e4 != 0) return {
				unit: "second",
				value: t / 1e3
			};
			if (t % 36e5 != 0) return {
				unit: "minute",
				value: t / 6e4
			};
			if (t) return {
				unit: "hour",
				value: t / 36e5
			}
		}
		return e.days ? e.specifiedWeeks && e.days % 7 == 0 ? {
			unit: "week",
			value: e.days / 7
		} : {
			unit: "day",
			value: e.days
		} : e.months ? {
			unit: "month",
			value: e.months
		} : e.years ? {
			unit: "year",
			value: e.years
		} : {
			unit: "millisecond",
			value: 0
		}
	}

	function Nt(e, t, n) {
		void 0 === n && (n = !1);
		var r = e.toISOString();
		return r = r.replace(".000", ""), n && (r = r.replace("T00:00:00Z", "")), 10 < r.length && (null == t ? r = r.replace("Z", "") : 0 !== t && (r = r.replace("Z", At(t, !0)))), r
	}

	function Ht(e) {
		return e.toISOString().replace(/T.*$/, "")
	}

	function Ot(e) {
		return ze(e.getUTCHours(), 2) + ":" + ze(e.getUTCMinutes(), 2) + ":" + ze(e.getUTCSeconds(), 2)
	}

	function At(e, t) {
		void 0 === t && (t = !1);
		var n = e < 0 ? "-" : "+",
			r = Math.abs(e),
			o = Math.floor(r / 60),
			i = Math.round(r % 60);
		return t ? n + ze(o, 2) + ":" + ze(i, 2) : "GMT" + n + o + (i ? ":" + ze(i, 2) : "")
	}

	function Lt(e, t, n) {
		if (e === t) return !0;
		var r, o = e.length;
		if (o !== t.length) return !1;
		for (r = 0; r < o; r += 1)
			if (!(n ? n(e[r], t[r]) : e[r] === t[r])) return !1;
		return !0
	}

	function Ut(r, o, i) {
		var a, s;
		return function() {
			for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
			if (a) {
				if (!Lt(a, e)) {
					i && i(s);
					var n = r.apply(this, e);
					o && o(n, s) || (s = n)
				}
			} else s = r.apply(this, e);
			return a = e, s
		}
	}

	function Wt(n, r, o) {
		var i, a, s = this;
		return function(e) {
			if (i) {
				if (!yt(i, e)) {
					o && o(a);
					var t = n.call(s, e);
					r && r(t, a) || (a = t)
				}
			} else a = n.call(s, e);
			return i = e, a
		}
	}
	var Vt = {
			week: 3,
			separator: 0,
			omitZeroMinute: 0,
			meridiem: 0,
			omitCommas: 0
		},
		Ft = {
			timeZoneName: 7,
			era: 6,
			year: 5,
			month: 4,
			day: 2,
			weekday: 2,
			hour: 1,
			minute: 1,
			second: 1
		},
		Bt = /\s*([ap])\.?m\.?/i,
		zt = /,/g,
		jt = /\s+/g,
		Gt = /\u200e/g,
		qt = /UTC|GMT/,
		Yt = function() {
			function e(e) {
				var t = {},
					n = {},
					r = 0;
				for (var o in e) o in Vt ? (n[o] = e[o], r = Math.max(Vt[o], r)) : (t[o] = e[o], o in Ft && (r = Math.max(Ft[o], r)));
				this.standardDateProps = t, this.extendedSettings = n, this.severity = r, this.buildFormattingFunc = Ut(Zt)
			}
			return e.prototype.format = function(e, t) {
				return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, t)(e)
			}, e.prototype.formatRange = function(e, t, n, r) {
				var o, i, a, s = this.standardDateProps,
					l = this.extendedSettings,
					u = (o = e.marker, i = t.marker, (a = n.calendarSystem).getMarkerYear(o) !== a.getMarkerYear(i) ? 5 : a.getMarkerMonth(o) !== a.getMarkerMonth(i) ? 4 : a.getMarkerDay(o) !== a.getMarkerDay(i) ? 2 : ct(o) !== ct(i) ? 1 : 0);
				if (!u) return this.format(e, n);
				var c = u;
				!(1 < c) || "numeric" !== s.year && "2-digit" !== s.year || "numeric" !== s.month && "2-digit" !== s.month || "numeric" !== s.day && "2-digit" !== s.day || (c = 1);
				var d = this.format(e, n),
					p = this.format(t, n);
				if (d === p) return d;
				var f = Zt(function(e, t) {
						var n = {};
						for (var r in e)(!(r in Ft) || Ft[r] <= t) && (n[r] = e[r]);
						return n
					}(s, c), l, n),
					h = f(e),
					v = f(t),
					g = function(e, t, n, r) {
						for (var o = 0; o < e.length;) {
							var i = e.indexOf(t, o);
							if (-1 === i) break;
							var a = e.substr(0, i);
							o = i + t.length;
							for (var s = e.substr(o), l = 0; l < n.length;) {
								var u = n.indexOf(r, l);
								if (-1 === u) break;
								var c = n.substr(0, u);
								l = u + r.length;
								var d = n.substr(l);
								if (a === c && s === d) return {
									before: a,
									after: s
								}
							}
						}
						return null
					}(d, h, p, v),
					m = l.separator || r || n.defaultSeparator || "";
				return g ? g.before + h + m + v + g.after : d + m + p
			}, e.prototype.getLargestUnit = function() {
				switch (this.severity) {
					case 7:
					case 6:
					case 5:
						return "year";
					case 4:
						return "month";
					case 3:
						return "week";
					case 2:
						return "day";
					default:
						return "time"
				}
			}, e
		}();

	function Zt(e, s, l) {
		var t = Object.keys(e).length;
		return 1 === t && "short" === e.timeZoneName ? function(e) {
			return At(e.timeZoneOffset)
		} : 0 === t && s.week ? function(e) {
			return t = l.computeWeekNumber(e.marker), n = l.weekText, r = l.weekTextLong, o = l.locale, i = s.week, a = [], "long" === i ? a.push(r) : "short" !== i && "narrow" !== i || a.push(n), "long" !== i && "short" !== i || a.push(" "), a.push(o.simpleNumberFormat.format(t)), "rtl" === o.options.direction && a.reverse(), a.join("");
			var t, n, r, o, i, a
		} : function(c, d, p) {
			var e, t;
			c = N({}, c), d = N({}, d), t = d, (e = c).timeZoneName && (e.hour || (e.hour = "2-digit"), e.minute || (e.minute = "2-digit")), "long" === e.timeZoneName && (e.timeZoneName = "short"), t.omitZeroMinute && (e.second || e.millisecond) && delete t.omitZeroMinute, c.timeZone = "UTC";
			var f, h = new Intl.DateTimeFormat(p.locale.codes, c);
			if (d.omitZeroMinute) {
				var n = N({}, c);
				delete n.minute, f = new Intl.DateTimeFormat(p.locale.codes, n)
			}
			return function(e) {
				var t, n, r, o, i, a, s, l, u = e.marker;
				return t = (f && !u.getUTCMinutes() ? f : h).format(u), n = e, r = c, o = d, i = p, t = t.replace(Gt, ""), "short" === r.timeZoneName && (a = t, s = "UTC" === i.timeZone || null == n.timeZoneOffset ? "UTC" : At(n.timeZoneOffset), l = !1, a = a.replace(qt, function() {
					return l = !0, s
				}), l || (a += " " + s), t = a), o.omitCommas && (t = t.replace(zt, "").trim()), o.omitZeroMinute && (t = t.replace(":00", "")), !1 === o.meridiem ? t = t.replace(Bt, "").trim() : "narrow" === o.meridiem ? t = t.replace(Bt, function(e, t) {
					return t.toLocaleLowerCase()
				}) : "short" === o.meridiem ? t = t.replace(Bt, function(e, t) {
					return t.toLocaleLowerCase() + "m"
				}) : "lowercase" === o.meridiem && (t = t.replace(Bt, function(e) {
					return e.toLocaleLowerCase()
				})), (t = t.replace(jt, " ")).trim()
			}
		}(e, s, l)
	}

	function Xt(e, t) {
		var n = t.markerToArray(e.marker);
		return {
			marker: e.marker,
			timeZoneOffset: e.timeZoneOffset,
			array: n,
			year: n[0],
			month: n[1],
			day: n[2],
			hour: n[3],
			minute: n[4],
			second: n[5],
			millisecond: n[6]
		}
	}

	function Kt(e, t, n, r) {
		var o = Xt(e, n.calendarSystem);
		return {
			date: o,
			start: o,
			end: t ? Xt(t, n.calendarSystem) : null,
			timeZone: n.timeZone,
			localeCodes: n.locale.codes,
			defaultSeparator: r || n.defaultSeparator
		}
	}
	var $t = function() {
			function e(e) {
				this.cmdStr = e
			}
			return e.prototype.format = function(e, t, n) {
				return t.cmdFormatter(this.cmdStr, Kt(e, null, t, n))
			}, e.prototype.formatRange = function(e, t, n, r) {
				return n.cmdFormatter(this.cmdStr, Kt(e, t, n, r))
			}, e
		}(),
		Jt = function() {
			function e(e) {
				this.func = e
			}
			return e.prototype.format = function(e, t, n) {
				return this.func(Kt(e, null, t, n))
			}, e.prototype.formatRange = function(e, t, n, r) {
				return this.func(Kt(e, t, n, r))
			}, e
		}();

	function Qt(e) {
		return "object" == typeof e && e ? new Yt(e) : "string" == typeof e ? new $t(e) : "function" == typeof e ? new Jt(e) : null
	}
	var en = {
			navLinkDayClick: cn,
			navLinkWeekClick: cn,
			duration: Rt,
			bootstrapFontAwesome: cn,
			buttonIcons: cn,
			customButtons: cn,
			defaultAllDayEventDuration: Rt,
			defaultTimedEventDuration: Rt,
			nextDayThreshold: Rt,
			scrollTime: Rt,
			scrollTimeReset: Boolean,
			slotMinTime: Rt,
			slotMaxTime: Rt,
			dayPopoverFormat: Qt,
			slotDuration: Rt,
			snapDuration: Rt,
			headerToolbar: cn,
			footerToolbar: cn,
			defaultRangeSeparator: String,
			titleRangeSeparator: String,
			forceEventDuration: Boolean,
			dayHeaders: Boolean,
			dayHeaderFormat: Qt,
			dayHeaderClassNames: cn,
			dayHeaderContent: cn,
			dayHeaderDidMount: cn,
			dayHeaderWillUnmount: cn,
			dayCellClassNames: cn,
			dayCellContent: cn,
			dayCellDidMount: cn,
			dayCellWillUnmount: cn,
			initialView: String,
			aspectRatio: Number,
			weekends: Boolean,
			weekNumberCalculation: cn,
			weekNumbers: Boolean,
			weekNumberClassNames: cn,
			weekNumberContent: cn,
			weekNumberDidMount: cn,
			weekNumberWillUnmount: cn,
			editable: Boolean,
			viewClassNames: cn,
			viewDidMount: cn,
			viewWillUnmount: cn,
			nowIndicator: Boolean,
			nowIndicatorClassNames: cn,
			nowIndicatorContent: cn,
			nowIndicatorDidMount: cn,
			nowIndicatorWillUnmount: cn,
			showNonCurrentDates: Boolean,
			lazyFetching: Boolean,
			startParam: String,
			endParam: String,
			timeZoneParam: String,
			timeZone: String,
			locales: cn,
			locale: cn,
			themeSystem: String,
			dragRevertDuration: Number,
			dragScroll: Boolean,
			allDayMaintainDuration: Boolean,
			unselectAuto: Boolean,
			dropAccept: cn,
			eventOrder: We,
			eventOrderStrict: Boolean,
			handleWindowResize: Boolean,
			windowResizeDelay: Number,
			longPressDelay: Number,
			eventDragMinDistance: Number,
			expandRows: Boolean,
			height: cn,
			contentHeight: cn,
			direction: String,
			weekNumberFormat: Qt,
			eventResizableFromStart: Boolean,
			displayEventTime: Boolean,
			displayEventEnd: Boolean,
			weekText: String,
			weekTextLong: String,
			progressiveEventRendering: Boolean,
			businessHours: cn,
			initialDate: cn,
			now: cn,
			eventDataTransform: cn,
			stickyHeaderDates: cn,
			stickyFooterScrollbar: cn,
			viewHeight: cn,
			defaultAllDay: Boolean,
			eventSourceFailure: cn,
			eventSourceSuccess: cn,
			eventDisplay: String,
			eventStartEditable: Boolean,
			eventDurationEditable: Boolean,
			eventOverlap: cn,
			eventConstraint: cn,
			eventAllow: cn,
			eventBackgroundColor: String,
			eventBorderColor: String,
			eventTextColor: String,
			eventColor: String,
			eventClassNames: cn,
			eventContent: cn,
			eventDidMount: cn,
			eventWillUnmount: cn,
			selectConstraint: cn,
			selectOverlap: cn,
			selectAllow: cn,
			droppable: Boolean,
			unselectCancel: String,
			slotLabelFormat: cn,
			slotLaneClassNames: cn,
			slotLaneContent: cn,
			slotLaneDidMount: cn,
			slotLaneWillUnmount: cn,
			slotLabelClassNames: cn,
			slotLabelContent: cn,
			slotLabelDidMount: cn,
			slotLabelWillUnmount: cn,
			dayMaxEvents: cn,
			dayMaxEventRows: cn,
			dayMinWidth: Number,
			slotLabelInterval: Rt,
			allDayText: String,
			allDayClassNames: cn,
			allDayContent: cn,
			allDayDidMount: cn,
			allDayWillUnmount: cn,
			slotMinWidth: Number,
			navLinks: Boolean,
			eventTimeFormat: Qt,
			rerenderDelay: Number,
			moreLinkText: cn,
			moreLinkHint: cn,
			selectMinDistance: Number,
			selectable: Boolean,
			selectLongPressDelay: Number,
			eventLongPressDelay: Number,
			selectMirror: Boolean,
			eventMaxStack: Number,
			eventMinHeight: Number,
			eventMinWidth: Number,
			eventShortHeight: Number,
			slotEventOverlap: Boolean,
			plugins: cn,
			firstDay: Number,
			dayCount: Number,
			dateAlignment: String,
			dateIncrement: Rt,
			hiddenDays: cn,
			monthMode: Boolean,
			fixedWeekCount: Boolean,
			validRange: cn,
			visibleRange: cn,
			titleFormat: cn,
			eventInteractive: Boolean,
			noEventsText: String,
			viewHint: cn,
			navLinkHint: cn,
			closeHint: String,
			timeHint: String,
			eventHint: String,
			moreLinkClick: cn,
			moreLinkClassNames: cn,
			moreLinkContent: cn,
			moreLinkDidMount: cn,
			moreLinkWillUnmount: cn
		},
		tn = {
			eventDisplay: "auto",
			defaultRangeSeparator: " - ",
			titleRangeSeparator: " – ",
			defaultTimedEventDuration: "01:00:00",
			defaultAllDayEventDuration: {
				day: 1
			},
			forceEventDuration: !1,
			nextDayThreshold: "00:00:00",
			dayHeaders: !0,
			initialView: "",
			aspectRatio: 1.35,
			headerToolbar: {
				start: "title",
				center: "",
				end: "today prev,next"
			},
			weekends: !0,
			weekNumbers: !1,
			weekNumberCalculation: "local",
			editable: !1,
			nowIndicator: !1,
			scrollTime: "06:00:00",
			scrollTimeReset: !0,
			slotMinTime: "00:00:00",
			slotMaxTime: "24:00:00",
			showNonCurrentDates: !0,
			lazyFetching: !0,
			startParam: "start",
			endParam: "end",
			timeZoneParam: "timeZone",
			timeZone: "local",
			locales: [],
			locale: "",
			themeSystem: "standard",
			dragRevertDuration: 500,
			dragScroll: !0,
			allDayMaintainDuration: !1,
			unselectAuto: !0,
			dropAccept: "*",
			eventOrder: "start,-duration,allDay,title",
			dayPopoverFormat: {
				month: "long",
				day: "numeric",
				year: "numeric"
			},
			handleWindowResize: !0,
			windowResizeDelay: 100,
			longPressDelay: 1e3,
			eventDragMinDistance: 5,
			expandRows: !1,
			navLinks: !1,
			selectable: !1,
			eventMinHeight: 15,
			eventMinWidth: 30,
			eventShortHeight: 30
		},
		nn = {
			datesSet: cn,
			eventsSet: cn,
			eventAdd: cn,
			eventChange: cn,
			eventRemove: cn,
			windowResize: cn,
			eventClick: cn,
			eventMouseEnter: cn,
			eventMouseLeave: cn,
			select: cn,
			unselect: cn,
			loading: cn,
			_unmount: cn,
			_beforeprint: cn,
			_afterprint: cn,
			_noEventDrop: cn,
			_noEventResize: cn,
			_resize: cn,
			_scrollRequest: cn
		},
		rn = {
			buttonText: cn,
			buttonHints: cn,
			views: cn,
			plugins: cn,
			initialEvents: cn,
			events: cn,
			eventSources: cn
		},
		on = {
			headerToolbar: an,
			footerToolbar: an,
			buttonText: an,
			buttonHints: an,
			buttonIcons: an,
			dateIncrement: an
		};

	function an(e, t) {
		return "object" == typeof e && "object" == typeof t && e && t ? yt(e, t) : e === t
	}
	var sn = {
		type: String,
		component: cn,
		buttonText: String,
		buttonTextKey: String,
		dateProfileGeneratorClass: cn,
		usesMinMaxTime: Boolean,
		classNames: cn,
		content: cn,
		didMount: cn,
		willUnmount: cn
	};

	function ln(e) {
		return ft(e, on)
	}

	function un(e, t) {
		var n = {},
			r = {};
		for (var o in t) o in e && (n[o] = t[o](e[o]));
		for (var o in e) o in t || (r[o] = e[o]);
		return {
			refined: n,
			extra: r
		}
	}

	function cn(e) {
		return e
	}

	function dn(e, t, n, r) {
		for (var o = {
				defs: {},
				instances: {}
			}, i = _n(n), a = 0, s = e; a < s.length; a++) {
			var l = Rn(s[a], t, n, r, i);
			l && pn(l, o)
		}
		return o
	}

	function pn(e, t) {
		return void 0 === t && (t = {
			defs: {},
			instances: {}
		}), t.defs[e.def.defId] = e.def, e.instance && (t.instances[e.instance.instanceId] = e.instance), t
	}

	function fn(e, t) {
		var n = e.instances[t];
		if (n) {
			var r = e.defs[n.defId],
				o = vn(e, function(e) {
					return t = r, n = e, Boolean(t.groupId && t.groupId === n.groupId);
					var t, n
				});
			return o.defs[r.defId] = r, o.instances[n.instanceId] = n, o
		}
		return {
			defs: {},
			instances: {}
		}
	}

	function hn(e, t) {
		return {
			defs: N(N({}, e.defs), t.defs),
			instances: N(N({}, e.instances), t.instances)
		}
	}

	function vn(e, t) {
		var n = ht(e.defs, t),
			r = ht(e.instances, function(e) {
				return n[e.defId]
			});
		return {
			defs: n,
			instances: r
		}
	}

	function gn(e) {
		return Array.isArray(e) ? e : "string" == typeof e ? e.split(/\s+/) : []
	}
	var mn = {
			display: String,
			editable: Boolean,
			startEditable: Boolean,
			durationEditable: Boolean,
			constraint: cn,
			overlap: cn,
			allow: cn,
			className: gn,
			classNames: gn,
			color: String,
			backgroundColor: String,
			borderColor: String,
			textColor: String
		},
		yn = {
			display: null,
			startEditable: null,
			durationEditable: null,
			constraints: [],
			overlap: null,
			allows: [],
			backgroundColor: "",
			borderColor: "",
			textColor: "",
			classNames: []
		};

	function En(e, t) {
		var n, r, o = (n = e.constraint, r = t, Array.isArray(n) ? dn(n, null, r, !0) : "object" == typeof n && n ? dn([n], null, r, !0) : null != n ? String(n) : null);
		return {
			display: e.display || null,
			startEditable: null != e.startEditable ? e.startEditable : e.editable,
			durationEditable: null != e.durationEditable ? e.durationEditable : e.editable,
			constraints: null != o ? [o] : [],
			overlap: null != e.overlap ? e.overlap : null,
			allows: null != e.allow ? [e.allow] : [],
			backgroundColor: e.backgroundColor || e.color || "",
			borderColor: e.borderColor || e.color || "",
			textColor: e.textColor || "",
			classNames: (e.className || []).concat(e.classNames || [])
		}
	}

	function Sn(e) {
		return e.reduce(bn, yn)
	}

	function bn(e, t) {
		return {
			display: null != t.display ? t.display : e.display,
			startEditable: null != t.startEditable ? t.startEditable : e.startEditable,
			durationEditable: null != t.durationEditable ? t.durationEditable : e.durationEditable,
			constraints: e.constraints.concat(t.constraints),
			overlap: "boolean" == typeof t.overlap ? t.overlap : e.overlap,
			allows: e.allows.concat(t.allows),
			backgroundColor: t.backgroundColor || e.backgroundColor,
			borderColor: t.borderColor || e.borderColor,
			textColor: t.textColor || e.textColor,
			classNames: e.classNames.concat(t.classNames)
		}
	}
	var Dn = {
			id: String,
			groupId: String,
			title: String,
			url: String,
			interactive: Boolean
		},
		Cn = {
			start: cn,
			end: cn,
			date: cn,
			allDay: Boolean
		},
		wn = N(N(N({}, Dn), Cn), {
			extendedProps: cn
		});

	function Rn(e, t, n, r, o) {
		void 0 === o && (o = _n(n));
		var i, a, s = Tn(e, n, o),
			l = s.refined,
			u = s.extra,
			c = (i = n, a = null, t && (a = t.defaultAllDay), null == a && (a = i.options.defaultAllDay), a),
			d = function(e, t, n, r) {
				for (var o = 0; o < r.length; o += 1) {
					var i = r[o].parse(e, n);
					if (i) {
						var a = e.allDay;
						return null == a && null == (a = t) && null == (a = i.allDayGuess) && (a = !1), {
							allDay: a,
							duration: i.duration,
							typeData: i.typeData,
							typeId: o
						}
					}
				}
				return null
			}(l, c, n.dateEnv, n.pluginHooks.recurringTypes);
		if (d) return (p = kn(l, u, t ? t.sourceId : "", d.allDay, Boolean(d.duration), n)).recurringDef = {
			typeId: d.typeId,
			typeData: d.typeData,
			duration: d.duration
		}, {
			def: p,
			instance: null
		};
		var p, f = function(e, t, n, r) {
			var o, i, a = e.allDay,
				s = null,
				l = !1,
				u = null,
				c = null != e.start ? e.start : e.date;
			if (o = n.dateEnv.createMarkerMeta(c)) s = o.marker;
			else if (!r) return null;
			return null != e.end && (i = n.dateEnv.createMarkerMeta(e.end)), null == a && (a = null != t ? t : (!o || o.isTimeUnspecified) && (!i || i.isTimeUnspecified)), a && s && (s = rt(s)), i && (u = i.marker, a && (u = rt(u)), s && u <= s && (u = null)), u ? l = !0 : r || (l = n.options.forceEventDuration || !1, u = n.dateEnv.add(s, a ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration)), {
				allDay: a,
				hasEnd: l,
				range: {
					start: s,
					end: u
				},
				forcedStartTzo: o ? o.forcedTzo : null,
				forcedEndTzo: i ? i.forcedTzo : null
			}
		}(l, c, n, r);
		return f ? {
			def: p = kn(l, u, t ? t.sourceId : "", f.allDay, f.hasEnd, n),
			instance: dt(p.defId, f.range, f.forcedStartTzo, f.forcedEndTzo)
		} : null
	}

	function Tn(e, t, n) {
		return void 0 === n && (n = _n(t)), un(e, n)
	}

	function _n(e) {
		return N(N(N({}, mn), wn), e.pluginHooks.eventRefiners)
	}

	function kn(e, t, n, r, o, i) {
		for (var a = {
				title: e.title || "",
				groupId: e.groupId || "",
				publicId: e.id || "",
				url: e.url || "",
				recurringDef: null,
				defId: Pe(),
				sourceId: n,
				allDay: r,
				hasEnd: o,
				interactive: e.interactive,
				ui: En(e, i),
				extendedProps: N(N({}, e.extendedProps || {}), t)
			}, s = 0, l = i.pluginHooks.eventDefMemberAdders; s < l.length; s++) {
			var u = l[s];
			N(a, u(e))
		}
		return Object.freeze(a.ui.classNames), Object.freeze(a.extendedProps), a
	}

	function xn(e) {
		var t = Math.floor(Qe(e.start, e.end)) || 1,
			n = rt(e.start);
		return {
			start: n,
			end: Ke(n, t)
		}
	}

	function Mn(e, t) {
		void 0 === t && (t = Rt(0));
		var n = null,
			r = null;
		if (e.end) {
			r = rt(e.end);
			var o = e.end.valueOf() - r.valueOf();
			o && o >= Mt(t) && (r = Ke(r, 1))
		}
		return e.start && (n = rt(e.start), r && r <= n && (r = Ke(n, 1))), {
			start: n,
			end: r
		}
	}

	function In(e) {
		var t = Mn(e);
		return 1 < Qe(t.start, t.end)
	}

	function Pn(e, t, n, r) {
		return "year" === r ? Rt(n.diffWholeYears(e, t), "year") : "month" === r ? Rt(n.diffWholeMonths(e, t), "month") : et(e, t)
	}

	function Nn(e, t) {
		var n, r, o = [],
			i = t.start;
		for (e.sort(Hn), n = 0; n < e.length; n += 1)(r = e[n]).start > i && o.push({
			start: i,
			end: r.start
		}), r.end > i && (i = r.end);
		return i < t.end && o.push({
			start: i,
			end: t.end
		}), o
	}

	function Hn(e, t) {
		return e.start.valueOf() - t.start.valueOf()
	}

	function On(e, t) {
		var n = e.start,
			r = e.end,
			o = null;
		return null !== t.start && (n = null === n ? t.start : new Date(Math.max(n.valueOf(), t.start.valueOf()))), null != t.end && (r = null === r ? t.end : new Date(Math.min(r.valueOf(), t.end.valueOf()))), (null === n || null === r || n < r) && (o = {
			start: n,
			end: r
		}), o
	}

	function An(e, t) {
		return (null === e.start ? null : e.start.valueOf()) === (null === t.start ? null : t.start.valueOf()) && (null === e.end ? null : e.end.valueOf()) === (null === t.end ? null : t.end.valueOf())
	}

	function Ln(e, t) {
		return (null === e.end || null === t.start || e.end > t.start) && (null === e.start || null === t.end || e.start < t.end)
	}

	function Un(e, t) {
		return (null === e.start || null !== t.start && t.start >= e.start) && (null === e.end || null !== t.end && t.end <= e.end)
	}

	function Wn(e, t) {
		return (null === e.start || t >= e.start) && (null === e.end || t < e.end)
	}

	function Vn(e, t, n, r) {
		var o = {},
			i = {},
			a = {},
			s = [],
			l = [],
			u = jn(e.defs, t);
		for (var c in e.defs) "inverse-background" === (f = u[(S = e.defs[c]).defId]).display && (S.groupId ? (o[S.groupId] = [], a[S.groupId] || (a[S.groupId] = S)) : i[c] = []);
		for (var d in e.instances) {
			var p = e.instances[d],
				f = u[(S = e.defs[p.defId]).defId],
				h = p.range,
				v = !S.allDay && r ? Mn(h, r) : h,
				g = On(v, n);
			g && ("inverse-background" === f.display ? S.groupId ? o[S.groupId].push(g) : i[p.defId].push(g) : "none" !== f.display && ("background" === f.display ? s : l).push({
				def: S,
				ui: f,
				instance: p,
				range: g,
				isStart: v.start && v.start.valueOf() === g.start.valueOf(),
				isEnd: v.end && v.end.valueOf() === g.end.valueOf()
			}))
		}
		for (var m in o)
			for (var y = 0, E = Nn(o[m], n); y < E.length; y++) {
				var S, b = E[y];
				f = u[(S = a[m]).defId], s.push({
					def: S,
					ui: f,
					instance: null,
					range: b,
					isStart: !1,
					isEnd: !1
				})
			}
		for (var c in i)
			for (var D = 0, C = Nn(i[c], n); D < C.length; D++) b = C[D], s.push({
				def: e.defs[c],
				ui: u[c],
				instance: null,
				range: b,
				isStart: !1,
				isEnd: !1
			});
		return {
			bg: s,
			fg: l
		}
	}

	function Fn(e) {
		return "background" === e.ui.display || "inverse-background" === e.ui.display
	}

	function Bn(e, t) {
		e.fcSeg = t
	}

	function zn(e) {
		return e.fcSeg || e.parentNode.fcSeg || null
	}

	function jn(e, t) {
		return vt(e, function(e) {
			return Gn(e, t)
		})
	}

	function Gn(e, t) {
		var n = [];
		return t[""] && n.push(t[""]), t[e.defId] && n.push(t[e.defId]), n.push(e.ui), Sn(n)
	}

	function qn(e, n) {
		var t = e.map(Yn);
		return t.sort(function(e, t) {
			return Ve(e, t, n)
		}), t.map(function(e) {
			return e._seg
		})
	}

	function Yn(e) {
		var t = e.eventRange,
			n = t.def,
			r = t.instance ? t.instance.range : t.range,
			o = r.start ? r.start.valueOf() : 0,
			i = r.end ? r.end.valueOf() : 0;
		return N(N(N({}, n.extendedProps), n), {
			id: n.publicId,
			start: o,
			end: i,
			duration: i - o,
			allDay: Number(n.allDay),
			_seg: e
		})
	}

	function Zn(e, t) {
		for (var n = t.pluginHooks.isDraggableTransformers, r = e.eventRange, o = r.def, i = r.ui, a = i.startEditable, s = 0, l = n; s < l.length; s++) a = (0, l[s])(a, o, i, t);
		return a
	}

	function Xn(e, t) {
		return e.isStart && e.eventRange.ui.durationEditable && t.options.eventResizableFromStart
	}

	function Kn(e, t) {
		return e.isEnd && e.eventRange.ui.durationEditable
	}

	function $n(e, t, n, r, o, i, a) {
		var s = n.dateEnv,
			l = n.options,
			u = l.displayEventTime,
			c = l.displayEventEnd,
			d = e.eventRange.def,
			p = e.eventRange.instance;
		null == u && (u = !1 !== r), null == c && (c = !1 !== o);
		var f = p.range.start,
			h = p.range.end,
			v = i || e.start || e.eventRange.range.start,
			g = a || e.end || e.eventRange.range.end,
			m = rt(f).valueOf() === rt(v).valueOf(),
			y = rt($e(h, -1)).valueOf() === rt($e(g, -1)).valueOf();
		return u && !d.allDay && (m || y) ? (v = m ? f : v, g = y ? h : g, c && d.hasEnd ? s.formatRange(v, g, t, {
			forcedStartTzo: i ? null : p.forcedStartTzo,
			forcedEndTzo: a ? null : p.forcedEndTzo
		}) : s.format(v, t, {
			forcedTzo: i ? null : p.forcedStartTzo
		})) : ""
	}

	function Jn(e, t, n) {
		var r = e.eventRange.range;
		return {
			isPast: r.end < (n || t.start),
			isFuture: r.start >= (n || t.end),
			isToday: t && Wn(t, r.start)
		}
	}

	function Qn(e) {
		var t = ["fc-event"];
		return e.isMirror && t.push("fc-event-mirror"), e.isDraggable && t.push("fc-event-draggable"), (e.isStartResizable || e.isEndResizable) && t.push("fc-event-resizable"), e.isDragging && t.push("fc-event-dragging"), e.isResizing && t.push("fc-event-resizing"), e.isSelected && t.push("fc-event-selected"), e.isStart && t.push("fc-event-start"), e.isEnd && t.push("fc-event-end"), e.isPast && t.push("fc-event-past"), e.isToday && t.push("fc-event-today"), e.isFuture && t.push("fc-event-future"), t
	}

	function er(e) {
		return e.instance ? e.instance.instanceId : e.def.defId + ":" + e.range.start.toISOString()
	}

	function tr(e, t) {
		var n = e.eventRange,
			r = n.def,
			o = n.instance,
			i = r.url;
		if (i) return {
			href: i
		};
		var a = t.emitter,
			s = t.options.eventInteractive;
		return null == s && null == (s = r.interactive) && (s = Boolean(a.hasHandlers("eventClick"))), s ? Me(function(e) {
			a.trigger("eventClick", {
				el: e.target,
				event: new mr(t, r, o),
				jsEvent: e,
				view: t.viewApi
			})
		}) : {}
	}
	var nr = {
		start: cn,
		end: cn,
		allDay: Boolean
	};

	function rr(e, t) {
		return An(e.range, t.range) && e.allDay === t.allDay && function(e, t) {
			for (var n in t)
				if ("range" !== n && "allDay" !== n && e[n] !== t[n]) return !1;
			for (var n in e)
				if (!(n in t)) return !1;
			return !0
		}(e, t)
	}

	function or(e, t, n) {
		return N(N({}, ir(e, t, n)), {
			timeZone: t.timeZone
		})
	}

	function ir(e, t, n) {
		return {
			start: t.toDate(e.start),
			end: t.toDate(e.end),
			startStr: t.formatIso(e.start, {
				omitTime: n
			}),
			endStr: t.formatIso(e.end, {
				omitTime: n
			})
		}
	}

	function ar(e, t, n) {
		n.emitter.trigger("select", N(N({}, sr(e, n)), {
			jsEvent: t ? t.origEvent : null,
			view: n.viewApi || n.calendarApi.view
		}))
	}

	function sr(e, t) {
		for (var n, r, o = {}, i = 0, a = t.pluginHooks.dateSpanTransforms; i < a.length; i++) {
			var s = a[i];
			N(o, s(e, t))
		}
		return N(o, (n = e, r = t.dateEnv, N(N({}, ir(n.range, r, n.allDay)), {
			allDay: n.allDay
		}))), o
	}

	function lr(e, t, n) {
		var r = n.dateEnv,
			o = n.options,
			i = t;
		return i = e ? (i = rt(i), r.add(i, o.defaultAllDayEventDuration)) : r.add(i, o.defaultTimedEventDuration)
	}

	function ur(e, t, n, r) {
		var o, i, a, s, l, u, c, d, p, f = jn(e.defs, t),
			h = {
				defs: {},
				instances: {}
			};
		for (var v in e.defs) {
			var g = e.defs[v];
			h.defs[v] = cr(g, f[v], n, r)
		}
		for (var m in e.instances) {
			var y = e.instances[m];
			g = h.defs[y.defId], h.instances[m] = (i = g, a = f[(o = y).defId], s = n, p = u = void 0, u = (l = r).dateEnv, c = s.standardProps && !0 === s.standardProps.allDay, d = s.standardProps && !1 === s.standardProps.hasEnd, p = N({}, o), c && (p.range = xn(p.range)), s.datesDelta && a.startEditable && (p.range = {
				start: u.add(p.range.start, s.datesDelta),
				end: u.add(p.range.end, s.datesDelta)
			}), s.startDelta && a.durationEditable && (p.range = {
				start: u.add(p.range.start, s.startDelta),
				end: p.range.end
			}), s.endDelta && a.durationEditable && (p.range = {
				start: p.range.start,
				end: u.add(p.range.end, s.endDelta)
			}), d && (p.range = {
				start: p.range.start,
				end: lr(i.allDay, p.range.start, l)
			}), i.allDay && (p.range = {
				start: rt(p.range.start),
				end: rt(p.range.end)
			}), p.range.end < p.range.start && (p.range.end = lr(i.allDay, p.range.start, l)), p)
		}
		return h
	}

	function cr(e, t, n, r) {
		var o = n.standardProps || {};
		null == o.hasEnd && t.durationEditable && (n.startDelta || n.endDelta) && (o.hasEnd = !0);
		var i = N(N(N({}, e), o), {
			ui: N(N({}, e.ui), o.ui)
		});
		n.extendedProps && (i.extendedProps = N(N({}, i.extendedProps), n.extendedProps));
		for (var a = 0, s = r.pluginHooks.eventDefMutationAppliers; a < s.length; a++)(0, s[a])(i, n, r);
		return !i.hasEnd && r.options.forceEventDuration && (i.hasEnd = !0), i
	}
	var dr = function() {
			function e(e, t, n) {
				this.type = e, this.getCurrentData = t, this.dateEnv = n
			}
			return Object.defineProperty(e.prototype, "calendar", {
				get: function() {
					return this.getCurrentData().calendarApi
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "title", {
				get: function() {
					return this.getCurrentData().viewTitle
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "activeStart", {
				get: function() {
					return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start)
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "activeEnd", {
				get: function() {
					return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end)
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "currentStart", {
				get: function() {
					return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start)
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(e.prototype, "currentEnd", {
				get: function() {
					return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end)
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.getOption = function(e) {
				return this.getCurrentData().options[e]
			}, e
		}(),
		pr = {
			id: String,
			defaultAllDay: Boolean,
			url: String,
			format: String,
			events: cn,
			eventDataTransform: cn,
			success: cn,
			failure: cn
		};

	function fr(e, i, t) {
		var n;
		if (void 0 === t && (t = hr(i)), "string" == typeof e ? n = {
				url: e
			} : "function" == typeof e || Array.isArray(e) ? n = {
				events: e
			} : "object" == typeof e && e && (n = e), n) {
			var r = un(n, t),
				o = r.refined,
				a = r.extra,
				s = function(e, t) {
					for (var n = i.pluginHooks.eventSourceDefs, r = n.length - 1; 0 <= r; r -= 1) {
						var o = n[r].parseMeta(e);
						if (o) return {
							sourceDefId: r,
							meta: o
						}
					}
					return null
				}(o);
			if (s) return {
				_raw: e,
				isFetching: !1,
				latestFetchId: "",
				fetchRange: null,
				defaultAllDay: o.defaultAllDay,
				eventDataTransform: o.eventDataTransform,
				success: o.success,
				failure: o.failure,
				publicId: o.id || "",
				sourceId: Pe(),
				sourceDefId: s.sourceDefId,
				meta: s.meta,
				ui: En(o, i),
				extendedProps: a
			}
		}
		return null
	}

	function hr(e) {
		return N(N(N({}, mn), pr), e.pluginHooks.eventSourceRefiners)
	}

	function vr(e, t) {
		return "function" == typeof e && (e = e()), null == e ? t.createNowMarker() : t.createMarker(e)
	}
	var gr = function() {
			function e() {}
			return e.prototype.getCurrentData = function() {
				return this.currentDataManager.getCurrentData()
			}, e.prototype.dispatch = function(e) {
				return this.currentDataManager.dispatch(e)
			}, Object.defineProperty(e.prototype, "view", {
				get: function() {
					return this.getCurrentData().viewApi
				},
				enumerable: !1,
				configurable: !0
			}), e.prototype.batchRendering = function(e) {
				e()
			}, e.prototype.updateSize = function() {
				this.trigger("_resize", !0)
			}, e.prototype.setOption = function(e, t) {
				this.dispatch({
					type: "SET_OPTION",
					optionName: e,
					rawOptionValue: t
				})
			}, e.prototype.getOption = function(e) {
				return this.currentDataManager.currentCalendarOptionsInput[e]
			}, e.prototype.getAvailableLocaleCodes = function() {
				return Object.keys(this.getCurrentData().availableRawLocales)
			}, e.prototype.on = function(e, t) {
				var n = this.currentDataManager;
				n.currentCalendarOptionsRefiners[e] ? n.emitter.on(e, t) : console.warn("Unknown listener name '" + e + "'")
			}, e.prototype.off = function(e, t) {
				this.currentDataManager.emitter.off(e, t)
			}, e.prototype.trigger = function(e) {
				for (var t, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
				(t = this.currentDataManager.emitter).trigger.apply(t, m([e], n))
			}, e.prototype.changeView = function(t, n) {
				var r = this;
				this.batchRendering(function() {
					if (r.unselect(), n)
						if (n.start && n.end) r.dispatch({
							type: "CHANGE_VIEW_TYPE",
							viewType: t
						}), r.dispatch({
							type: "SET_OPTION",
							optionName: "visibleRange",
							rawOptionValue: n
						});
						else {
							var e = r.getCurrentData().dateEnv;
							r.dispatch({
								type: "CHANGE_VIEW_TYPE",
								viewType: t,
								dateMarker: e.createMarker(n)
							})
						}
					else r.dispatch({
						type: "CHANGE_VIEW_TYPE",
						viewType: t
					})
				})
			}, e.prototype.zoomTo = function(e, t) {
				var n;
				t = t || "day", n = this.getCurrentData().viewSpecs[t] || this.getUnitViewSpec(t), this.unselect(), n ? this.dispatch({
					type: "CHANGE_VIEW_TYPE",
					viewType: n.type,
					dateMarker: e
				}) : this.dispatch({
					type: "CHANGE_DATE",
					dateMarker: e
				})
			}, e.prototype.getUnitViewSpec = function(e) {
				var t, n, r = this.getCurrentData(),
					o = r.viewSpecs,
					i = r.toolbarConfig,
					a = [].concat(i.header ? i.header.viewsWithButtons : [], i.footer ? i.footer.viewsWithButtons : []);
				for (var s in o) a.push(s);
				for (t = 0; t < a.length; t += 1)
					if ((n = o[a[t]]) && n.singleUnit === e) return n;
				return null
			}, e.prototype.prev = function() {
				this.unselect(), this.dispatch({
					type: "PREV"
				})
			}, e.prototype.next = function() {
				this.unselect(), this.dispatch({
					type: "NEXT"
				})
			}, e.prototype.prevYear = function() {
				var e = this.getCurrentData();
				this.unselect(), this.dispatch({
					type: "CHANGE_DATE",
					dateMarker: e.dateEnv.addYears(e.currentDate, -1)
				})
			}, e.prototype.nextYear = function() {
				var e = this.getCurrentData();
				this.unselect(), this.dispatch({
					type: "CHANGE_DATE",
					dateMarker: e.dateEnv.addYears(e.currentDate, 1)
				})
			}, e.prototype.today = function() {
				var e = this.getCurrentData();
				this.unselect(), this.dispatch({
					type: "CHANGE_DATE",
					dateMarker: vr(e.calendarOptions.now, e.dateEnv)
				})
			}, e.prototype.gotoDate = function(e) {
				var t = this.getCurrentData();
				this.unselect(), this.dispatch({
					type: "CHANGE_DATE",
					dateMarker: t.dateEnv.createMarker(e)
				})
			}, e.prototype.incrementDate = function(e) {
				var t = this.getCurrentData(),
					n = Rt(e);
				n && (this.unselect(), this.dispatch({
					type: "CHANGE_DATE",
					dateMarker: t.dateEnv.add(t.currentDate, n)
				}))
			}, e.prototype.getDate = function() {
				var e = this.getCurrentData();
				return e.dateEnv.toDate(e.currentDate)
			}, e.prototype.formatDate = function(e, t) {
				var n = this.getCurrentData().dateEnv;
				return n.format(n.createMarker(e), Qt(t))
			}, e.prototype.formatRange = function(e, t, n) {
				var r = this.getCurrentData().dateEnv;
				return r.formatRange(r.createMarker(e), r.createMarker(t), Qt(n), n)
			}, e.prototype.formatIso = function(e, t) {
				var n = this.getCurrentData().dateEnv;
				return n.formatIso(n.createMarker(e), {
					omitTime: t
				})
			}, e.prototype.select = function(e, t) {
				var n;
				n = null == t ? null != e.start ? e : {
					start: e,
					end: null
				} : {
					start: e,
					end: t
				};
				var r = this.getCurrentData(),
					o = function(e, t, n) {
						var r, o, i, a, s, l, u, c = (r = t, o = un(e, nr), i = o.refined, a = o.extra, s = i.start ? r.createMarkerMeta(i.start) : null, l = i.end ? r.createMarkerMeta(i.end) : null, null == (u = i.allDay) && (u = s && s.isTimeUnspecified && (!l || l.isTimeUnspecified)), N({
								range: {
									start: s ? s.marker : null,
									end: l ? l.marker : null
								},
								allDay: u
							}, a)),
							d = c.range;
						if (!d.start) return null;
						if (!d.end) {
							if (null == n) return null;
							d.end = t.add(d.start, n)
						}
						return c
					}(n, r.dateEnv, Rt({
						days: 1
					}));
				o && (this.dispatch({
					type: "SELECT_DATES",
					selection: o
				}), ar(o, null, r))
			}, e.prototype.unselect = function(e) {
				var t, n, r = this.getCurrentData();
				r.dateSelection && (this.dispatch({
					type: "UNSELECT_DATES"
				}), t = e, (n = r).emitter.trigger("unselect", {
					jsEvent: t ? t.origEvent : null,
					view: n.viewApi || n.calendarApi.view
				}))
			}, e.prototype.addEvent = function(e, t) {
				if (e instanceof mr) {
					var n = e._def,
						r = e._instance;
					return this.getCurrentData().eventStore.defs[n.defId] || (this.dispatch({
						type: "ADD_EVENTS",
						eventStore: pn({
							def: n,
							instance: r
						})
					}), this.triggerEventAdd(e)), e
				}
				var o, i = this.getCurrentData();
				if (t instanceof fe) o = t.internalEventSource;
				else if ("boolean" == typeof t) t && (o = mt(i.eventSources)[0]);
				else if (null != t) {
					var a = this.getEventSourceById(t);
					if (!a) return console.warn('Could not find an event source with ID "' + t + '"'), null;
					o = a.internalEventSource
				}
				var s = Rn(e, o, i, !1);
				if (s) {
					var l = new mr(i, s.def, s.def.recurringDef ? null : s.instance);
					return this.dispatch({
						type: "ADD_EVENTS",
						eventStore: pn(s)
					}), this.triggerEventAdd(l), l
				}
				return null
			}, e.prototype.triggerEventAdd = function(e) {
				var t = this;
				this.getCurrentData().emitter.trigger("eventAdd", {
					event: e,
					relatedEvents: [],
					revert: function() {
						t.dispatch({
							type: "REMOVE_EVENTS",
							eventStore: yr(e)
						})
					}
				})
			}, e.prototype.getEventById = function(e) {
				var t = this.getCurrentData(),
					n = t.eventStore,
					r = n.defs,
					o = n.instances;
				for (var i in e = String(e), r) {
					var a = r[i];
					if (a.publicId === e) {
						if (a.recurringDef) return new mr(t, a, null);
						for (var s in o) {
							var l = o[s];
							if (l.defId === a.defId) return new mr(t, a, l)
						}
					}
				}
				return null
			}, e.prototype.getEvents = function() {
				var e = this.getCurrentData();
				return Er(e.eventStore, e)
			}, e.prototype.removeAllEvents = function() {
				this.dispatch({
					type: "REMOVE_ALL_EVENTS"
				})
			}, e.prototype.getEventSources = function() {
				var e = this.getCurrentData(),
					t = e.eventSources,
					n = [];
				for (var r in t) n.push(new fe(e, t[r]));
				return n
			}, e.prototype.getEventSourceById = function(e) {
				var t = this.getCurrentData(),
					n = t.eventSources;
				for (var r in e = String(e), n)
					if (n[r].publicId === e) return new fe(t, n[r]);
				return null
			}, e.prototype.addEventSource = function(e) {
				var t = this.getCurrentData();
				if (e instanceof fe) return t.eventSources[e.internalEventSource.sourceId] || this.dispatch({
					type: "ADD_EVENT_SOURCES",
					sources: [e.internalEventSource]
				}), e;
				var n = fr(e, t);
				return n ? (this.dispatch({
					type: "ADD_EVENT_SOURCES",
					sources: [n]
				}), new fe(t, n)) : null
			}, e.prototype.removeAllEventSources = function() {
				this.dispatch({
					type: "REMOVE_ALL_EVENT_SOURCES"
				})
			}, e.prototype.refetchEvents = function() {
				this.dispatch({
					type: "FETCH_EVENT_SOURCES",
					isRefetch: !0
				})
			}, e.prototype.scrollToTime = function(e) {
				var t = Rt(e);
				t && this.trigger("_scrollRequest", {
					time: t
				})
			}, e
		}(),
		mr = function() {
			function s(e, t, n) {
				this._context = e, this._def = t, this._instance = n || null
			}
			return s.prototype.setProp = function(e, t) {
				var n, r;
				if (e in Cn) console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
				else if ("id" === e) t = Dn[e](t), this.mutate({
					standardProps: {
						publicId: t
					}
				});
				else if (e in Dn) t = Dn[e](t), this.mutate({
					standardProps: (n = {}, n[e] = t, n)
				});
				else if (e in mn) {
					var o = mn[e](t);
					o = "color" === e ? {
						backgroundColor: t,
						borderColor: t
					} : "editable" === e ? {
						startEditable: t,
						durationEditable: t
					} : ((r = {})[e] = t, r), this.mutate({
						standardProps: {
							ui: o
						}
					})
				} else console.warn("Could not set prop '" + e + "'. Use setExtendedProp instead.")
			}, s.prototype.setExtendedProp = function(e, t) {
				var n;
				this.mutate({
					extendedProps: (n = {}, n[e] = t, n)
				})
			}, s.prototype.setStart = function(e, t) {
				void 0 === t && (t = {});
				var n = this._context.dateEnv,
					r = n.createMarker(e);
				if (r && this._instance) {
					var o = Pn(this._instance.range.start, r, n, t.granularity);
					t.maintainDuration ? this.mutate({
						datesDelta: o
					}) : this.mutate({
						startDelta: o
					})
				}
			}, s.prototype.setEnd = function(e, t) {
				void 0 === t && (t = {});
				var n, r = this._context.dateEnv;
				if ((null == e || (n = r.createMarker(e))) && this._instance)
					if (n) {
						var o = Pn(this._instance.range.end, n, r, t.granularity);
						this.mutate({
							endDelta: o
						})
					} else this.mutate({
						standardProps: {
							hasEnd: !1
						}
					})
			}, s.prototype.setDates = function(e, t, n) {
				void 0 === n && (n = {});
				var r, o, i, a = this._context.dateEnv,
					s = {
						allDay: n.allDay
					},
					l = a.createMarker(e);
				if (l && (null == t || (r = a.createMarker(t))) && this._instance) {
					var u = this._instance.range;
					!0 === n.allDay && (u = xn(u));
					var c = Pn(u.start, l, a, n.granularity);
					if (r) {
						var d = Pn(u.end, r, a, n.granularity);
						i = d, (o = c).years === i.years && o.months === i.months && o.days === i.days && o.milliseconds === i.milliseconds ? this.mutate({
							datesDelta: c,
							standardProps: s
						}) : this.mutate({
							startDelta: c,
							endDelta: d,
							standardProps: s
						})
					} else s.hasEnd = !1, this.mutate({
						datesDelta: c,
						standardProps: s
					})
				}
			}, s.prototype.moveStart = function(e) {
				var t = Rt(e);
				t && this.mutate({
					startDelta: t
				})
			}, s.prototype.moveEnd = function(e) {
				var t = Rt(e);
				t && this.mutate({
					endDelta: t
				})
			}, s.prototype.moveDates = function(e) {
				var t = Rt(e);
				t && this.mutate({
					datesDelta: t
				})
			}, s.prototype.setAllDay = function(e, t) {
				void 0 === t && (t = {});
				var n = {
						allDay: e
					},
					r = t.maintainDuration;
				null == r && (r = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (n.hasEnd = r), this.mutate({
					standardProps: n
				})
			}, s.prototype.formatRange = function(e) {
				var t = this._context.dateEnv,
					n = this._instance,
					r = Qt(e);
				return this._def.hasEnd ? t.formatRange(n.range.start, n.range.end, r, {
					forcedStartTzo: n.forcedStartTzo,
					forcedEndTzo: n.forcedEndTzo
				}) : t.format(n.range.start, r, {
					forcedTzo: n.forcedStartTzo
				})
			}, s.prototype.mutate = function(e) {
				var t = this._instance;
				if (t) {
					var n = this._def,
						r = this._context,
						o = r.getCurrentData().eventStore,
						i = fn(o, t.instanceId);
					i = ur(i, {
						"": {
							display: "",
							startEditable: !0,
							durationEditable: !0,
							constraints: [],
							overlap: null,
							allows: [],
							backgroundColor: "",
							borderColor: "",
							textColor: "",
							classNames: []
						}
					}, e, r);
					var a = new s(r, n, t);
					this._def = i.defs[n.defId], this._instance = i.instances[t.instanceId], r.dispatch({
						type: "MERGE_EVENTS",
						eventStore: i
					}), r.emitter.trigger("eventChange", {
						oldEvent: a,
						event: this,
						relatedEvents: Er(i, r, t),
						revert: function() {
							r.dispatch({
								type: "RESET_EVENTS",
								eventStore: o
							})
						}
					})
				}
			}, s.prototype.remove = function() {
				var e = this._context,
					t = yr(this);
				e.dispatch({
					type: "REMOVE_EVENTS",
					eventStore: t
				}), e.emitter.trigger("eventRemove", {
					event: this,
					relatedEvents: [],
					revert: function() {
						e.dispatch({
							type: "MERGE_EVENTS",
							eventStore: t
						})
					}
				})
			}, Object.defineProperty(s.prototype, "source", {
				get: function() {
					var e = this._def.sourceId;
					return e ? new fe(this._context, this._context.getCurrentData().eventSources[e]) : null
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(s.prototype, "start", {
				get: function() {
					return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(s.prototype, "end", {
				get: function() {
					return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(s.prototype, "startStr", {
				get: function() {
					var e = this._instance;
					return e ? this._context.dateEnv.formatIso(e.range.start, {
						omitTime: this._def.allDay,
						forcedTzo: e.forcedStartTzo
					}) : ""
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(s.prototype, "endStr", {
				get: function() {
					var e = this._instance;
					return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
						omitTime: this._def.allDay,
						forcedTzo: e.forcedEndTzo
					}) : ""
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(s.prototype, "id", {
				get: function() {
					return this._def.publicId
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(s.prototype, "groupId", {
				get: function() {
					return this._def.groupId
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(s.prototype, "allDay", {
				get: function() {
					return this._def.allDay
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(s.prototype, "title", {
				get: function() {
					return this._def.title
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(s.prototype, "url", {
				get: function() {
					return this._def.url
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(s.prototype, "display", {
				get: function() {
					return this._def.ui.display || "auto"
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(s.prototype, "startEditable", {
				get: function() {
					return this._def.ui.startEditable
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(s.prototype, "durationEditable", {
				get: function() {
					return this._def.ui.durationEditable
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(s.prototype, "constraint", {
				get: function() {
					return this._def.ui.constraints[0] || null
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(s.prototype, "overlap", {
				get: function() {
					return this._def.ui.overlap
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(s.prototype, "allow", {
				get: function() {
					return this._def.ui.allows[0] || null
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(s.prototype, "backgroundColor", {
				get: function() {
					return this._def.ui.backgroundColor
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(s.prototype, "borderColor", {
				get: function() {
					return this._def.ui.borderColor
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(s.prototype, "textColor", {
				get: function() {
					return this._def.ui.textColor
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(s.prototype, "classNames", {
				get: function() {
					return this._def.ui.classNames
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(s.prototype, "extendedProps", {
				get: function() {
					return this._def.extendedProps
				},
				enumerable: !1,
				configurable: !0
			}), s.prototype.toPlainObject = function(e) {
				void 0 === e && (e = {});
				var t = this._def,
					n = t.ui,
					r = this.startStr,
					o = this.endStr,
					i = {};
				return t.title && (i.title = t.title), r && (i.start = r), o && (i.end = o), t.publicId && (i.id = t.publicId), t.groupId && (i.groupId = t.groupId), t.url && (i.url = t.url), n.display && "auto" !== n.display && (i.display = n.display), e.collapseColor && n.backgroundColor && n.backgroundColor === n.borderColor ? i.color = n.backgroundColor : (n.backgroundColor && (i.backgroundColor = n.backgroundColor), n.borderColor && (i.borderColor = n.borderColor)), n.textColor && (i.textColor = n.textColor), n.classNames.length && (i.classNames = n.classNames), Object.keys(t.extendedProps).length && (e.collapseExtendedProps ? N(i, t.extendedProps) : i.extendedProps = t.extendedProps), i
			}, s.prototype.toJSON = function() {
				return this.toPlainObject()
			}, s
		}();

	function yr(e) {
		var t, n, r = e._def,
			o = e._instance;
		return {
			defs: (t = {}, t[r.defId] = r, t),
			instances: o ? (n = {}, n[o.instanceId] = o, n) : {}
		}
	}

	function Er(e, t, n) {
		var r = e.defs,
			o = e.instances,
			i = [],
			a = n ? n.instanceId : "";
		for (var s in o) {
			var l = o[s],
				u = r[l.defId];
			l.instanceId !== a && i.push(new mr(t, u, l))
		}
		return i
	}
	var Sr, br = {};
	Sr = function() {
		function e() {}
		return e.prototype.getMarkerYear = function(e) {
			return e.getUTCFullYear()
		}, e.prototype.getMarkerMonth = function(e) {
			return e.getUTCMonth()
		}, e.prototype.getMarkerDay = function(e) {
			return e.getUTCDate()
		}, e.prototype.arrayToMarker = function(e) {
			return lt(e)
		}, e.prototype.markerToArray = function(e) {
			return st(e)
		}, e
	}(), br.gregory = Sr;
	var Dr = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;

	function Cr(e) {
		var t = Dr.exec(e);
		if (t) {
			var n = new Date(Date.UTC(Number(t[1]), t[3] ? Number(t[3]) - 1 : 0, Number(t[5] || 1), Number(t[7] || 0), Number(t[8] || 0), Number(t[10] || 0), t[12] ? 1e3 * Number("0." + t[12]) : 0));
			if (ut(n)) {
				var r = null;
				return t[13] && (r = ("-" === t[15] ? -1 : 1) * (60 * Number(t[16] || 0) + Number(t[18] || 0))), {
					marker: n,
					isTimeUnspecified: !t[6],
					timeZoneOffset: r
				}
			}
		}
		return null
	}
	var wr = function() {
			function e(e) {
				var t, n = this.timeZone = e.timeZone,
					r = "local" !== n && "UTC" !== n;
				e.namedTimeZoneImpl && r && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(n)), this.canComputeOffset = Boolean(!r || this.namedTimeZoneImpl), this.calendarSystem = (t = e.calendarSystem, new br[t]), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, "ISO" === e.weekNumberCalculation && (this.weekDow = 1, this.weekDoy = 4), "number" == typeof e.firstDay && (this.weekDow = e.firstDay), "function" == typeof e.weekNumberCalculation && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = null != e.weekText ? e.weekText : e.locale.options.weekText, this.weekTextLong = (null != e.weekTextLong ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator
			}
			return e.prototype.createMarker = function(e) {
				var t = this.createMarkerMeta(e);
				return null === t ? null : t.marker
			}, e.prototype.createNowMarker = function() {
				return this.canComputeOffset ? this.timestampToMarker((new Date).valueOf()) : lt(it(new Date))
			}, e.prototype.createMarkerMeta = function(e) {
				if ("string" == typeof e) return this.parse(e);
				var t = null;
				return "number" == typeof e ? t = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (t = this.timestampToMarker(e))) : Array.isArray(e) && (t = lt(e)), null !== t && ut(t) ? {
					marker: t,
					isTimeUnspecified: !1,
					forcedTzo: null
				} : null
			}, e.prototype.parse = function(e) {
				var t = Cr(e);
				if (null === t) return null;
				var n = t.marker,
					r = null;
				return null !== t.timeZoneOffset && (this.canComputeOffset ? n = this.timestampToMarker(n.valueOf() - 60 * t.timeZoneOffset * 1e3) : r = t.timeZoneOffset), {
					marker: n,
					isTimeUnspecified: t.isTimeUnspecified,
					forcedTzo: r
				}
			}, e.prototype.getYear = function(e) {
				return this.calendarSystem.getMarkerYear(e)
			}, e.prototype.getMonth = function(e) {
				return this.calendarSystem.getMarkerMonth(e)
			}, e.prototype.add = function(e, t) {
				var n = this.calendarSystem.markerToArray(e);
				return n[0] += t.years, n[1] += t.months, n[2] += t.days, n[6] += t.milliseconds, this.calendarSystem.arrayToMarker(n)
			}, e.prototype.subtract = function(e, t) {
				var n = this.calendarSystem.markerToArray(e);
				return n[0] -= t.years, n[1] -= t.months, n[2] -= t.days, n[6] -= t.milliseconds, this.calendarSystem.arrayToMarker(n)
			}, e.prototype.addYears = function(e, t) {
				var n = this.calendarSystem.markerToArray(e);
				return n[0] += t, this.calendarSystem.arrayToMarker(n)
			}, e.prototype.addMonths = function(e, t) {
				var n = this.calendarSystem.markerToArray(e);
				return n[1] += t, this.calendarSystem.arrayToMarker(n)
			}, e.prototype.diffWholeYears = function(e, t) {
				var n = this.calendarSystem;
				return ct(e) === ct(t) && n.getMarkerDay(e) === n.getMarkerDay(t) && n.getMarkerMonth(e) === n.getMarkerMonth(t) ? n.getMarkerYear(t) - n.getMarkerYear(e) : null
			}, e.prototype.diffWholeMonths = function(e, t) {
				var n = this.calendarSystem;
				return ct(e) === ct(t) && n.getMarkerDay(e) === n.getMarkerDay(t) ? n.getMarkerMonth(t) - n.getMarkerMonth(e) + 12 * (n.getMarkerYear(t) - n.getMarkerYear(e)) : null
			}, e.prototype.greatestWholeUnit = function(e, t) {
				var n, r, o, i = this.diffWholeYears(e, t);
				return null !== i ? {
					unit: "year",
					value: i
				} : null !== (i = this.diffWholeMonths(e, t)) ? {
					unit: "month",
					value: i
				} : null !== (i = tt(e, t)) ? {
					unit: "week",
					value: i
				} : null !== (i = nt(e, t)) ? {
					unit: "day",
					value: i
				} : qe((o = e, i = (t.valueOf() - o.valueOf()) / 36e5)) ? {
					unit: "hour",
					value: i
				} : qe((r = e, i = (t.valueOf() - r.valueOf()) / 6e4)) ? {
					unit: "minute",
					value: i
				} : qe((n = e, i = (t.valueOf() - n.valueOf()) / 1e3)) ? {
					unit: "second",
					value: i
				} : {
					unit: "millisecond",
					value: t.valueOf() - e.valueOf()
				}
			}, e.prototype.countDurationsBetween = function(e, t, n) {
				var r;
				return n.years && null !== (r = this.diffWholeYears(e, t)) ? r / (xt(n) / 365) : n.months && null !== (r = this.diffWholeMonths(e, t)) ? r / (xt(n) / 30) : n.days && null !== (r = nt(e, t)) ? r / xt(n) : (t.valueOf() - e.valueOf()) / Mt(n)
			}, e.prototype.startOf = function(e, t) {
				return "year" === t ? this.startOfYear(e) : "month" === t ? this.startOfMonth(e) : "week" === t ? this.startOfWeek(e) : "day" === t ? rt(e) : "hour" === t ? lt([(o = e).getUTCFullYear(), o.getUTCMonth(), o.getUTCDate(), o.getUTCHours()]) : "minute" === t ? lt([(r = e).getUTCFullYear(), r.getUTCMonth(), r.getUTCDate(), r.getUTCHours(), r.getUTCMinutes()]) : "second" === t ? lt([(n = e).getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), n.getUTCHours(), n.getUTCMinutes(), n.getUTCSeconds()]) : null;
				var n, r, o
			}, e.prototype.startOfYear = function(e) {
				return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)])
			}, e.prototype.startOfMonth = function(e) {
				return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e)])
			}, e.prototype.startOfWeek = function(e) {
				return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e), e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7])
			}, e.prototype.computeWeekNumber = function(e) {
				return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : function(e, t, n) {
					var r = e.getUTCFullYear(),
						o = ot(e, r, t, n);
					if (o < 1) return ot(e, r - 1, t, n);
					var i = ot(e, r + 1, t, n);
					return 1 <= i ? Math.min(o, i) : o
				}(e, this.weekDow, this.weekDoy)
			}, e.prototype.format = function(e, t, n) {
				return void 0 === n && (n = {}), t.format({
					marker: e,
					timeZoneOffset: null != n.forcedTzo ? n.forcedTzo : this.offsetForMarker(e)
				}, this)
			}, e.prototype.formatRange = function(e, t, n, r) {
				return void 0 === r && (r = {}), r.isEndExclusive && (t = $e(t, -1)), n.formatRange({
					marker: e,
					timeZoneOffset: null != r.forcedStartTzo ? r.forcedStartTzo : this.offsetForMarker(e)
				}, {
					marker: t,
					timeZoneOffset: null != r.forcedEndTzo ? r.forcedEndTzo : this.offsetForMarker(t)
				}, this, r.defaultSeparator)
			}, e.prototype.formatIso = function(e, t) {
				void 0 === t && (t = {});
				var n = null;
				return t.omitTimeZoneOffset || (n = null != t.forcedTzo ? t.forcedTzo : this.offsetForMarker(e)), Nt(e, n, t.omitTime)
			}, e.prototype.timestampToMarker = function(e) {
				return "local" === this.timeZone ? lt(it(new Date(e))) : "UTC" !== this.timeZone && this.namedTimeZoneImpl ? lt(this.namedTimeZoneImpl.timestampToArray(e)) : new Date(e)
			}, e.prototype.offsetForMarker = function(e) {
				return "local" === this.timeZone ? -at(st(e)).getTimezoneOffset() : "UTC" === this.timeZone ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(st(e)) : null
			}, e.prototype.toDate = function(e, t) {
				return "local" === this.timeZone ? at(st(e)) : "UTC" === this.timeZone ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - 1e3 * this.namedTimeZoneImpl.offsetForArray(st(e)) * 60) : new Date(e.valueOf() - (t || 0))
			}, e
		}(),
		Rr = [],
		Tr = {
			code: "en",
			week: {
				dow: 0,
				doy: 4
			},
			direction: "ltr",
			buttonText: {
				prev: "prev",
				next: "next",
				prevYear: "prev year",
				nextYear: "next year",
				year: "year",
				today: "today",
				month: "month",
				week: "week",
				day: "day",
				list: "list"
			},
			weekText: "W",
			weekTextLong: "Week",
			closeHint: "Close",
			timeHint: "Time",
			eventHint: "Event",
			allDayText: "all-day",
			moreLinkText: "more",
			noEventsText: "No events to display"
		},
		_r = N(N({}, Tr), {
			buttonHints: {
				prev: "Previous $0",
				next: "Next $0",
				today: function(e, t) {
					return "day" === t ? "Today" : "This " + e
				}
			},
			viewHint: "$0 view",
			navLinkHint: "Go to $0",
			moreLinkHint: function(e) {
				return "Show " + e + " more event" + (1 === e ? "" : "s")
			}
		});

	function kr(e) {
		for (var t = 0 < e.length ? e[0].code : "en", n = Rr.concat(e), r = {
				en: _r
			}, o = 0, i = n; o < i.length; o++) {
			var a = i[o];
			r[a.code] = a
		}
		return {
			map: r,
			defaultCode: t
		}
	}

	function xr(e, t) {
		return "object" != typeof e || Array.isArray(e) ? (r = t, o = [].concat((n = e) || []), Mr(n, o, function(e, t) {
			for (var n = 0; n < e.length; n += 1)
				for (var r = e[n].toLocaleLowerCase().split("-"), o = r.length; 0 < o; o -= 1) {
					var i = r.slice(0, o).join("-");
					if (t[i]) return t[i]
				}
			return null
		}(o, r) || _r)) : Mr(e.code, [e.code], e);
		var n, r, o
	}

	function Mr(e, t, n) {
		var r = ft([Tr, n], ["buttonText"]);
		delete r.code;
		var o = r.week;
		return delete r.week, {
			codeArg: e,
			codes: t,
			week: o,
			simpleNumberFormat: new Intl.NumberFormat(e),
			options: r
		}
	}

	function Ir(e) {
		var t = xr(e.locale || "en", kr([]).map);
		return new wr(N(N({
			timeZone: tn.timeZone,
			calendarSystem: "gregory"
		}, e), {
			locale: t
		}))
	}
	var Pr, Nr = {
		startTime: "09:00",
		endTime: "17:00",
		daysOfWeek: [1, 2, 3, 4, 5],
		display: "inverse-background",
		classNames: "fc-non-business",
		groupId: "_businessHours"
	};

	function Hr(e, t) {
		return dn((!0 === (n = e) ? [{}] : Array.isArray(n) ? n.filter(function(e) {
			return e.daysOfWeek
		}) : "object" == typeof n && n ? [n] : []).map(function(e) {
			return N(N({}, Nr), e)
		}), null, t);
		var n
	}

	function Or(e, t) {
		return e.left >= t.left && e.left < t.right && e.top >= t.top && e.top < t.bottom
	}

	function Ar(e, t) {
		var n = {
			left: Math.max(e.left, t.left),
			right: Math.min(e.right, t.right),
			top: Math.max(e.top, t.top),
			bottom: Math.min(e.bottom, t.bottom)
		};
		return n.left < n.right && n.top < n.bottom && n
	}

	function Lr(e, t) {
		return {
			left: Math.min(Math.max(e.left, t.left), t.right),
			top: Math.min(Math.max(e.top, t.top), t.bottom)
		}
	}

	function Ur(e) {
		return {
			left: (e.left + e.right) / 2,
			top: (e.top + e.bottom) / 2
		}
	}

	function Wr(e, t) {
		return {
			left: e.left - t.left,
			top: e.top - t.top
		}
	}

	function Vr() {
		return null == Pr && (Pr = function() {
			if ("undefined" == typeof document) return !0;
			var e = document.createElement("div");
			e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.innerHTML = "<table><tr><td><div></div></td></tr></table>", e.querySelector("table").style.height = "100px", e.querySelector("div").style.height = "100%", document.body.appendChild(e);
			var t = 0 < e.querySelector("div").offsetHeight;
			return document.body.removeChild(e), t
		}()), Pr
	}
	var Fr = {
			defs: {},
			instances: {}
		},
		Br = function() {
			function e() {
				this.getKeysForEventDefs = Ut(this._getKeysForEventDefs), this.splitDateSelection = Ut(this._splitDateSpan), this.splitEventStore = Ut(this._splitEventStore), this.splitIndividualUi = Ut(this._splitIndividualUi), this.splitEventDrag = Ut(this._splitInteraction), this.splitEventResize = Ut(this._splitInteraction), this.eventUiBuilders = {}
			}
			return e.prototype.splitProps = function(e) {
				var n = this,
					t = this.getKeyInfo(e),
					r = this.getKeysForEventDefs(e.eventStore),
					o = this.splitDateSelection(e.dateSelection),
					i = this.splitIndividualUi(e.eventUiBases, r),
					a = this.splitEventStore(e.eventStore, r),
					s = this.splitEventDrag(e.eventDrag),
					l = this.splitEventResize(e.eventResize),
					u = {};
				for (var c in this.eventUiBuilders = vt(t, function(e, t) {
						return n.eventUiBuilders[t] || Ut(zr)
					}), t) {
					var d = t[c],
						p = a[c] || Fr,
						f = this.eventUiBuilders[c];
					u[c] = {
						businessHours: d.businessHours || e.businessHours,
						dateSelection: o[c] || null,
						eventStore: p,
						eventUiBases: f(e.eventUiBases[""], d.ui, i[c]),
						eventSelection: p.instances[e.eventSelection] ? e.eventSelection : "",
						eventDrag: s[c] || null,
						eventResize: l[c] || null
					}
				}
				return u
			}, e.prototype._splitDateSpan = function(e) {
				var t = {};
				if (e)
					for (var n = 0, r = this.getKeysForDateSpan(e); n < r.length; n++) t[r[n]] = e;
				return t
			}, e.prototype._getKeysForEventDefs = function(e) {
				var t = this;
				return vt(e.defs, function(e) {
					return t.getKeysForEventDef(e)
				})
			}, e.prototype._splitEventStore = function(e, t) {
				var n = e.defs,
					r = e.instances,
					o = {};
				for (var i in n)
					for (var a = 0, s = t[i]; a < s.length; a++) o[p = s[a]] || (o[p] = {
						defs: {},
						instances: {}
					}), o[p].defs[i] = n[i];
				for (var l in r)
					for (var u = r[l], c = 0, d = t[u.defId]; c < d.length; c++) {
						var p;
						o[p = d[c]] && (o[p].instances[l] = u)
					}
				return o
			}, e.prototype._splitIndividualUi = function(e, t) {
				var n = {};
				for (var r in e)
					if (r)
						for (var o = 0, i = t[r]; o < i.length; o++) {
							var a = i[o];
							n[a] || (n[a] = {}), n[a][r] = e[r]
						}
				return n
			}, e.prototype._splitInteraction = function(t) {
				var n = {};
				if (t) {
					var r = this._splitEventStore(t.affectedEvents, this._getKeysForEventDefs(t.affectedEvents)),
						e = this._getKeysForEventDefs(t.mutatedEvents),
						o = this._splitEventStore(t.mutatedEvents, e),
						i = function(e) {
							n[e] || (n[e] = {
								affectedEvents: r[e] || Fr,
								mutatedEvents: o[e] || Fr,
								isEvent: t.isEvent
							})
						};
					for (var a in r) i(a);
					for (var a in o) i(a)
				}
				return n
			}, e
		}();

	function zr(e, t, n) {
		var r = [];
		e && r.push(e), t && r.push(t);
		var o = {
			"": Sn(r)
		};
		return n && N(o, n), o
	}

	function jr(e, t, n, r) {
		return {
			dow: e.getUTCDay(),
			isDisabled: Boolean(r && !Wn(r.activeRange, e)),
			isOther: Boolean(r && !Wn(r.currentRange, e)),
			isToday: Boolean(t && Wn(t, e)),
			isPast: Boolean(n ? e < n : !!t && e < t.start),
			isFuture: Boolean(n ? n < e : !!t && e >= t.end)
		}
	}

	function Gr(e, t) {
		var n = ["fc-day", "fc-day-" + Ze[e.dow]];
		return e.isDisabled ? n.push("fc-day-disabled") : (e.isToday && (n.push("fc-day-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-day-past"), e.isFuture && n.push("fc-day-future"), e.isOther && n.push("fc-day-other")), n
	}
	var qr = Qt({
			year: "numeric",
			month: "long",
			day: "numeric"
		}),
		Yr = Qt({
			week: "long"
		});

	function Zr(e, n, r, t) {
		void 0 === r && (r = "day"), void 0 === t && (t = !0);
		var o = e.dateEnv,
			i = e.options,
			a = e.calendarApi,
			s = o.format(n, "week" === r ? Yr : qr);
		if (i.navLinks) {
			var l = o.toDate(n),
				u = function(e) {
					var t = "day" === r ? i.navLinkDayClick : "week" === r ? i.navLinkWeekClick : null;
					"function" == typeof t ? t.call(a, o.toDate(n), e) : ("string" == typeof t && (r = t), a.zoomTo(n, r))
				};
			return N({
				title: je(i.navLinkHint, [s, l], s),
				"data-navlink": ""
			}, t ? xe(u) : {
				onClick: u
			})
		}
		return {
			"aria-label": s
		}
	}
	var Xr, Kr = null;

	function $r() {
		return null === Kr && (Kr = function() {
			var e = document.createElement("div");
			Ee(e, {
				position: "absolute",
				top: -1e3,
				left: 0,
				border: 0,
				padding: 0,
				overflow: "scroll",
				direction: "rtl"
			}), e.innerHTML = "<div></div>", document.body.appendChild(e);
			var t = e.firstChild.getBoundingClientRect().left > e.getBoundingClientRect().left;
			return he(e), t
		}()), Kr
	}

	function Jr() {
		return Xr || (Xr = function() {
			var e = document.createElement("div");
			e.style.overflow = "scroll", e.style.position = "absolute", e.style.top = "-9999px", e.style.left = "-9999px", document.body.appendChild(e);
			var t = Qr(e);
			return document.body.removeChild(e), t
		}()), Xr
	}

	function Qr(e) {
		return {
			x: e.offsetHeight - e.clientHeight,
			y: e.offsetWidth - e.clientWidth
		}
	}

	function eo(e, t) {
		void 0 === t && (t = !1);
		var n = window.getComputedStyle(e),
			r = parseInt(n.borderLeftWidth, 10) || 0,
			o = parseInt(n.borderRightWidth, 10) || 0,
			i = parseInt(n.borderTopWidth, 10) || 0,
			a = parseInt(n.borderBottomWidth, 10) || 0,
			s = Qr(e),
			l = s.y - r - o,
			u = {
				borderLeft: r,
				borderRight: o,
				borderTop: i,
				borderBottom: a,
				scrollbarBottom: s.x - i - a,
				scrollbarLeft: 0,
				scrollbarRight: 0
			};
		return $r() && "rtl" === n.direction ? u.scrollbarLeft = l : u.scrollbarRight = l, t && (u.paddingLeft = parseInt(n.paddingLeft, 10) || 0, u.paddingRight = parseInt(n.paddingRight, 10) || 0, u.paddingTop = parseInt(n.paddingTop, 10) || 0, u.paddingBottom = parseInt(n.paddingBottom, 10) || 0), u
	}

	function to(e, t, n) {
		void 0 === t && (t = !1);
		var r = n ? e.getBoundingClientRect() : no(e),
			o = eo(e, t),
			i = {
				left: r.left + o.borderLeft + o.scrollbarLeft,
				right: r.right - o.borderRight - o.scrollbarRight,
				top: r.top + o.borderTop,
				bottom: r.bottom - o.borderBottom - o.scrollbarBottom
			};
		return t && (i.left += o.paddingLeft, i.right -= o.paddingRight, i.top += o.paddingTop, i.bottom -= o.paddingBottom), i
	}

	function no(e) {
		var t = e.getBoundingClientRect();
		return {
			left: t.left + window.pageXOffset,
			top: t.top + window.pageYOffset,
			right: t.right + window.pageXOffset,
			bottom: t.bottom + window.pageYOffset
		}
	}

	function ro(e) {
		for (var t = []; e instanceof HTMLElement;) {
			var n = window.getComputedStyle(e);
			if ("fixed" === n.position) break;
			/(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && t.push(e), e = e.parentNode
		}
		return t
	}

	function oo(e, t, n) {
		var r = !1,
			o = function() {
				r || (r = !0, t.apply(this, arguments))
			},
			i = function() {
				r || (r = !0, n && n.apply(this, arguments))
			},
			a = e(o, i);
		a && "function" == typeof a.then && a.then(o, i)
	}
	var io = function() {
			function e() {
				this.handlers = {}, this.thisContext = null
			}
			return e.prototype.setThisContext = function(e) {
				this.thisContext = e
			}, e.prototype.setOptions = function(e) {
				this.options = e
			}, e.prototype.on = function(e, t) {
				var n, r, o;
				n = this.handlers, o = t, (n[r = e] || (n[r] = [])).push(o)
			}, e.prototype.off = function(e, t) {
				var n, r, o;
				n = this.handlers, r = e, (o = t) ? n[r] && (n[r] = n[r].filter(function(e) {
					return e !== o
				})) : delete n[r]
			}, e.prototype.trigger = function(e) {
				for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
				for (var r = this.handlers[e] || [], o = this.options && this.options[e], i = 0, a = [].concat(o || [], r); i < a.length; i++) {
					a[i].apply(this.thisContext, t)
				}
			}, e.prototype.hasHandlers = function(e) {
				return Boolean(this.handlers[e] && this.handlers[e].length || this.options && this.options[e])
			}, e
		}(),
		ao = function() {
			function e(e, t, n, r) {
				this.els = t;
				var o = this.originClientRect = e.getBoundingClientRect();
				n && this.buildElHorizontals(o.left), r && this.buildElVerticals(o.top)
			}
			return e.prototype.buildElHorizontals = function(e) {
				for (var t = [], n = [], r = 0, o = this.els; r < o.length; r++) {
					var i = o[r].getBoundingClientRect();
					t.push(i.left - e), n.push(i.right - e)
				}
				this.lefts = t, this.rights = n
			}, e.prototype.buildElVerticals = function(e) {
				for (var t = [], n = [], r = 0, o = this.els; r < o.length; r++) {
					var i = o[r].getBoundingClientRect();
					t.push(i.top - e), n.push(i.bottom - e)
				}
				this.tops = t, this.bottoms = n
			}, e.prototype.leftToIndex = function(e) {
				var t, n = this.lefts,
					r = this.rights,
					o = n.length;
				for (t = 0; t < o; t += 1)
					if (e >= n[t] && e < r[t]) return t
			}, e.prototype.topToIndex = function(e) {
				var t, n = this.tops,
					r = this.bottoms,
					o = n.length;
				for (t = 0; t < o; t += 1)
					if (e >= n[t] && e < r[t]) return t
			}, e.prototype.getWidth = function(e) {
				return this.rights[e] - this.lefts[e]
			}, e.prototype.getHeight = function(e) {
				return this.bottoms[e] - this.tops[e]
			}, e
		}(),
		so = function() {
			function e() {}
			return e.prototype.getMaxScrollTop = function() {
				return this.getScrollHeight() - this.getClientHeight()
			}, e.prototype.getMaxScrollLeft = function() {
				return this.getScrollWidth() - this.getClientWidth()
			}, e.prototype.canScrollVertically = function() {
				return 0 < this.getMaxScrollTop()
			}, e.prototype.canScrollHorizontally = function() {
				return 0 < this.getMaxScrollLeft()
			}, e.prototype.canScrollUp = function() {
				return 0 < this.getScrollTop()
			}, e.prototype.canScrollDown = function() {
				return this.getScrollTop() < this.getMaxScrollTop()
			}, e.prototype.canScrollLeft = function() {
				return 0 < this.getScrollLeft()
			}, e.prototype.canScrollRight = function() {
				return this.getScrollLeft() < this.getMaxScrollLeft()
			}, e
		}(),
		lo = function(n) {
			function e(e) {
				var t = n.call(this) || this;
				return t.el = e, t
			}
			return s(e, n), e.prototype.getScrollTop = function() {
				return this.el.scrollTop
			}, e.prototype.getScrollLeft = function() {
				return this.el.scrollLeft
			}, e.prototype.setScrollTop = function(e) {
				this.el.scrollTop = e
			}, e.prototype.setScrollLeft = function(e) {
				this.el.scrollLeft = e
			}, e.prototype.getScrollWidth = function() {
				return this.el.scrollWidth
			}, e.prototype.getScrollHeight = function() {
				return this.el.scrollHeight
			}, e.prototype.getClientHeight = function() {
				return this.el.clientHeight
			}, e.prototype.getClientWidth = function() {
				return this.el.clientWidth
			}, e
		}(so),
		uo = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return s(t, e), t.prototype.getScrollTop = function() {
				return window.pageYOffset
			}, t.prototype.getScrollLeft = function() {
				return window.pageXOffset
			}, t.prototype.setScrollTop = function(e) {
				window.scroll(window.pageXOffset, e)
			}, t.prototype.setScrollLeft = function(e) {
				window.scroll(e, window.pageYOffset)
			}, t.prototype.getScrollWidth = function() {
				return document.documentElement.scrollWidth
			}, t.prototype.getScrollHeight = function() {
				return document.documentElement.scrollHeight
			}, t.prototype.getClientHeight = function() {
				return document.documentElement.clientHeight
			}, t.prototype.getClientWidth = function() {
				return document.documentElement.clientWidth
			}, t
		}(so),
		co = function() {
			function e(e) {
				this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption])
			}
			return e.prototype.setIconOverride = function(e) {
				var t, n;
				if ("object" == typeof e && e) {
					for (n in t = N({}, this.iconClasses), e) t[n] = this.applyIconOverridePrefix(e[n]);
					this.iconClasses = t
				} else !1 === e && (this.iconClasses = {})
			}, e.prototype.applyIconOverridePrefix = function(e) {
				var t = this.iconOverridePrefix;
				return t && 0 !== e.indexOf(t) && (e = t + e), e
			}, e.prototype.getClass = function(e) {
				return this.classes[e] || ""
			}, e.prototype.getIconClass = function(e, t) {
				var n;
				return (n = t && this.rtlIconClasses && this.rtlIconClasses[e] || this.iconClasses[e]) ? this.baseIconClass + " " + n : ""
			}, e.prototype.getCustomButtonIconClass = function(e) {
				var t;
				return this.iconOverrideCustomButtonOption && (t = e[this.iconOverrideCustomButtonOption]) ? this.baseIconClass + " " + this.applyIconOverridePrefix(t) : ""
			}, e
		}();
	if (co.prototype.classes = {}, co.prototype.iconClasses = {}, co.prototype.baseIconClass = "", co.prototype.iconOverridePrefix = "", "undefined" == typeof FullCalendarVDom) throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");
	var po = FullCalendarVDom.Component,
		fo = FullCalendarVDom.createElement,
		ho = FullCalendarVDom.render,
		vo = FullCalendarVDom.createRef,
		go = FullCalendarVDom.Fragment,
		mo = FullCalendarVDom.createContext,
		yo = FullCalendarVDom.createPortal,
		Eo = FullCalendarVDom.flushSync,
		So = FullCalendarVDom.unmountComponentAtNode,
		bo = function() {
			function e(e, t, n, r) {
				var o = this;
				this.execFunc = e, this.emitter = t, this.scrollTime = n, this.scrollTimeReset = r, this.handleScrollRequest = function(e) {
					o.queuedRequest = N({}, o.queuedRequest || {}, e), o.drain()
				}, t.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll()
			}
			return e.prototype.detach = function() {
				this.emitter.off("_scrollRequest", this.handleScrollRequest)
			}, e.prototype.update = function(e) {
				e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain()
			}, e.prototype.fireInitialScroll = function() {
				this.handleScrollRequest({
					time: this.scrollTime
				})
			}, e.prototype.drain = function() {
				this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null)
			}, e
		}(),
		Do = mo({});

	function Co(e, t, n, r, o, i, a, s, l, u, c, d, p) {
		return {
			dateEnv: o,
			options: n,
			pluginHooks: a,
			emitter: u,
			dispatch: s,
			getCurrentData: l,
			calendarApi: c,
			viewSpec: e,
			viewApi: t,
			dateProfileGenerator: r,
			theme: i,
			isRtl: "rtl" === n.direction,
			addResizeHandler: function(e) {
				u.on("_resize", e)
			},
			removeResizeHandler: function(e) {
				u.off("_resize", e)
			},
			createScrollResponder: function(e) {
				return new bo(e, u, Rt(n.scrollTime), n.scrollTimeReset)
			},
			registerInteractiveComponent: d,
			unregisterInteractiveComponent: p
		}
	}
	var wo = function(e) {
		function t() {
			return null !== e && e.apply(this, arguments) || this
		}
		return s(t, e), t.prototype.shouldComponentUpdate = function(e, t) {
			return this.debug && console.log(Et(e, this.props), Et(t, this.state)), !St(this.props, e, this.propEquality) || !St(this.state, t, this.stateEquality)
		}, t.prototype.safeSetState = function(e) {
			St(this.state, N(N({}, this.state), e), this.stateEquality) || this.setState(e)
		}, t.addPropsEquality = To, t.addStateEquality = _o, t.contextType = Do, t
	}(po);
	wo.prototype.propEquality = {}, wo.prototype.stateEquality = {};
	var Ro = function(e) {
		function t() {
			return null !== e && e.apply(this, arguments) || this
		}
		return s(t, e), t.contextType = Do, t
	}(wo);

	function To(e) {
		var t = Object.create(this.prototype.propEquality);
		N(t, e), this.prototype.propEquality = t
	}

	function _o(e) {
		var t = Object.create(this.prototype.stateEquality);
		N(t, e), this.prototype.stateEquality = t
	}

	function ko(e, t) {
		"function" == typeof e ? e(t) : e && (e.current = t)
	}
	var xo = function(t) {
		function e() {
			var e = null !== t && t.apply(this, arguments) || this;
			return e.uid = Pe(), e
		}
		return s(e, t), e.prototype.prepareHits = function() {}, e.prototype.queryHit = function(e, t, n, r) {
			return null
		}, e.prototype.isValidSegDownEl = function(e) {
			return !this.props.eventDrag && !this.props.eventResize && !ve(e, ".fc-event-mirror")
		}, e.prototype.isValidDateDownEl = function(e) {
			return !(ve(e, ".fc-event:not(.fc-bg-event)") || ve(e, ".fc-more-link") || ve(e, "a[data-navlink]") || ve(e, ".fc-popover"))
		}, e
	}(Ro);

	function Mo(e) {
		return {
			id: Pe(),
			deps: e.deps || [],
			reducers: e.reducers || [],
			isLoadingFuncs: e.isLoadingFuncs || [],
			contextInit: [].concat(e.contextInit || []),
			eventRefiners: e.eventRefiners || {},
			eventDefMemberAdders: e.eventDefMemberAdders || [],
			eventSourceRefiners: e.eventSourceRefiners || {},
			isDraggableTransformers: e.isDraggableTransformers || [],
			eventDragMutationMassagers: e.eventDragMutationMassagers || [],
			eventDefMutationAppliers: e.eventDefMutationAppliers || [],
			dateSelectionTransformers: e.dateSelectionTransformers || [],
			datePointTransforms: e.datePointTransforms || [],
			dateSpanTransforms: e.dateSpanTransforms || [],
			views: e.views || {},
			viewPropsTransformers: e.viewPropsTransformers || [],
			isPropsValid: e.isPropsValid || null,
			externalDefTransforms: e.externalDefTransforms || [],
			viewContainerAppends: e.viewContainerAppends || [],
			eventDropTransformers: e.eventDropTransformers || [],
			componentInteractions: e.componentInteractions || [],
			calendarInteractions: e.calendarInteractions || [],
			themeClasses: e.themeClasses || {},
			eventSourceDefs: e.eventSourceDefs || [],
			cmdFormatter: e.cmdFormatter,
			recurringTypes: e.recurringTypes || [],
			namedTimeZonedImpl: e.namedTimeZonedImpl,
			initialView: e.initialView || "",
			elementDraggingImpl: e.elementDraggingImpl,
			optionChangeHandlers: e.optionChangeHandlers || {},
			scrollGridImpl: e.scrollGridImpl || null,
			contentTypeHandlers: e.contentTypeHandlers || {},
			listenerRefiners: e.listenerRefiners || {},
			optionRefiners: e.optionRefiners || {},
			propSetHandlers: e.propSetHandlers || {}
		}
	}
	var Io = function(e) {
		function t() {
			return null !== e && e.apply(this, arguments) || this
		}
		return s(t, e), t
	}(co);

	function Po(e, t, n, r) {
		if (t[e]) return t[e];
		var o = function(e, t, n, r) {
			var o = n[e],
				i = r[e],
				a = function(e) {
					return o && null !== o[e] ? o[e] : i && null !== i[e] ? i[e] : null
				},
				s = a("component"),
				l = a("superType"),
				u = null;
			if (l) {
				if (l === e) throw new Error("Can't have a custom view type that references itself");
				u = Po(l, t, n, r)
			}
			return !s && u && (s = u.component), s ? {
				type: e,
				component: s,
				defaults: N(N({}, u ? u.defaults : {}), o ? o.rawOptions : {}),
				overrides: N(N({}, u ? u.overrides : {}), i ? i.rawOptions : {})
			} : null
		}(e, t, n, r);
		return o && (t[e] = o), o
	}
	Io.prototype.classes = {
		root: "fc-theme-standard",
		tableCellShaded: "fc-cell-shaded",
		buttonGroup: "fc-button-group",
		button: "fc-button fc-button-primary",
		buttonActive: "fc-button-active"
	}, Io.prototype.baseIconClass = "fc-icon", Io.prototype.iconClasses = {
		close: "fc-icon-x",
		prev: "fc-icon-chevron-left",
		next: "fc-icon-chevron-right",
		prevYear: "fc-icon-chevrons-left",
		nextYear: "fc-icon-chevrons-right"
	}, Io.prototype.rtlIconClasses = {
		prev: "fc-icon-chevron-right",
		next: "fc-icon-chevron-left",
		prevYear: "fc-icon-chevrons-right",
		nextYear: "fc-icon-chevrons-left"
	}, Io.prototype.iconOverrideOption = "buttonIcons", Io.prototype.iconOverrideCustomButtonOption = "icon", Io.prototype.iconOverridePrefix = "fc-icon-";
	var No = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.rootElRef = vo(), t.handleRootEl = function(e) {
					ko(t.rootElRef, e), t.props.elRef && ko(t.props.elRef, e)
				}, t
			}
			return s(t, e), t.prototype.render = function() {
				var e = this,
					r = this.props,
					o = r.hookProps;
				return fo(Lo, {
					hookProps: o,
					didMount: r.didMount,
					willUnmount: r.willUnmount,
					elRef: this.handleRootEl
				}, function(n) {
					return fo(Oo, {
						hookProps: o,
						content: r.content,
						defaultContent: r.defaultContent,
						backupElRef: e.rootElRef
					}, function(e, t) {
						return r.children(n, Wo(r.classNames, o), e, t)
					})
				})
			}, t
		}(Ro),
		Ho = mo(0);

	function Oo(t) {
		return fo(Ho.Consumer, null, function(e) {
			return fo(Ao, N({
				renderId: e
			}, t))
		})
	}
	var Ao = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.innerElRef = vo(), e
			}
			return s(e, t), e.prototype.render = function() {
				return this.props.children(this.innerElRef, this.renderInnerContent())
			}, e.prototype.componentDidMount = function() {
				this.updateCustomContent()
			}, e.prototype.componentDidUpdate = function() {
				this.updateCustomContent()
			}, e.prototype.componentWillUnmount = function() {
				this.customContentInfo && this.customContentInfo.destroy && this.customContentInfo.destroy()
			}, e.prototype.renderInnerContent = function() {
				var e = this.customContentInfo,
					t = this.getInnerContent(),
					n = this.getContentMeta(t);
				return e && e.contentKey === n.contentKey ? e && (e.contentVal = t[n.contentKey]) : (e && (e.destroy && e.destroy(), e = this.customContentInfo = null), n.contentKey && (e = this.customContentInfo = N({
					contentKey: n.contentKey,
					contentVal: t[n.contentKey]
				}, n.buildLifecycleFuncs()))), e ? [] : t
			}, e.prototype.getInnerContent = function() {
				var e = this.props,
					t = Vo(e.content, e.hookProps);
				return void 0 === t && (t = Vo(e.defaultContent, e.hookProps)), null == t ? null : t
			}, e.prototype.getContentMeta = function(e) {
				var t = this.context.pluginHooks.contentTypeHandlers,
					n = "",
					r = null;
				if (e)
					for (var o in t)
						if (void 0 !== e[o]) {
							r = t[n = o];
							break
						} return {
					contentKey: n,
					buildLifecycleFuncs: r
				}
			}, e.prototype.updateCustomContent = function() {
				this.customContentInfo && this.customContentInfo.render(this.innerElRef.current || this.props.backupElRef.current, this.customContentInfo.contentVal)
			}, e
		}(Ro),
		Lo = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.handleRootEl = function(e) {
					t.rootEl = e, t.props.elRef && ko(t.props.elRef, e)
				}, t
			}
			return s(t, e), t.prototype.render = function() {
				return this.props.children(this.handleRootEl)
			}, t.prototype.componentDidMount = function() {
				var e = this.props.didMount;
				e && e(N(N({}, this.props.hookProps), {
					el: this.rootEl
				}))
			}, t.prototype.componentWillUnmount = function() {
				var e = this.props.willUnmount;
				e && e(N(N({}, this.props.hookProps), {
					el: this.rootEl
				}))
			}, t
		}(Ro);

	function Uo() {
		var n, r, o = [];
		return function(e, t) {
			return r && yt(r, t) && e === n || (o = Wo(n = e, r = t)), o
		}
	}

	function Wo(e, t) {
		return "function" == typeof e && (e = e(t)), gn(e)
	}

	function Vo(e, t) {
		return "function" == typeof e ? e(t, fo) : e
	}
	var Fo = function(t) {
		function e() {
			var e = null !== t && t.apply(this, arguments) || this;
			return e.normalizeClassNames = Uo(), e
		}
		return s(e, t), e.prototype.render = function() {
			var t = this.props,
				e = this.context,
				n = e.options,
				r = {
					view: e.viewApi
				},
				o = this.normalizeClassNames(n.viewClassNames, r);
			return fo(Lo, {
				hookProps: r,
				didMount: n.viewDidMount,
				willUnmount: n.viewWillUnmount,
				elRef: t.elRef
			}, function(e) {
				return t.children(e, ["fc-" + t.viewSpec.type + "-view", "fc-view"].concat(o))
			})
		}, e
	}(Ro);

	function Bo(e) {
		return vt(e, zo)
	}

	function zo(e) {
		var i, t = "function" == typeof e ? {
				component: e
			} : e,
			n = t.component;
		return t.content && (i = t, n = function(r) {
			return fo(Do.Consumer, null, function(n) {
				return fo(Fo, {
					viewSpec: n.viewSpec
				}, function(e, o) {
					var t = N(N({}, r), {
						nextDayThreshold: n.options.nextDayThreshold
					});
					return fo(No, {
						hookProps: t,
						classNames: i.classNames,
						content: i.content,
						didMount: i.didMount,
						willUnmount: i.willUnmount,
						elRef: e
					}, function(e, t, n, r) {
						return fo("div", {
							className: o.concat(t).join(" "),
							ref: e
						}, r)
					})
				})
			})
		}), {
			superType: t.type,
			component: n,
			rawOptions: t
		}
	}

	function jo(e, t, n, r) {
		var o = Bo(e),
			i = Bo(t.views);
		return vt(function(e, t) {
			var n, r = {};
			for (n in e) Po(n, r, e, t);
			for (n in t) Po(n, r, e, t);
			return r
		}(o, i), function(e) {
			return function(r, e, t, n, o) {
				var i, a, s, l = r.overrides.duration || r.defaults.duration || n.duration || t.duration,
					u = null,
					c = "",
					d = "",
					p = {};
				if (l && (i = l, a = JSON.stringify(i), void 0 === (s = Go[a]) && (s = Rt(i), Go[a] = s), u = s)) {
					var f = Pt(u);
					c = f.unit, 1 === f.value && (p = e[d = c] ? e[c].rawOptions : {})
				}
				var h = function(e) {
						var t = e.buttonText || {},
							n = r.defaults.buttonTextKey;
						return null != n && null != t[n] ? t[n] : null != t[r.type] ? t[r.type] : null != t[d] ? t[d] : null
					},
					v = function(e) {
						var t = e.buttonHints || {},
							n = r.defaults.buttonTextKey;
						return null != n && null != t[n] ? t[n] : null != t[r.type] ? t[r.type] : null != t[d] ? t[d] : null
					};
				return {
					type: r.type,
					component: r.component,
					duration: u,
					durationUnit: c,
					singleUnit: d,
					optionDefaults: r.defaults,
					optionOverrides: N(N({}, p), r.overrides),
					buttonTextOverride: h(n) || h(t) || r.overrides.buttonText,
					buttonTextDefault: h(o) || r.defaults.buttonText || h(tn) || r.type,
					buttonTitleOverride: v(n) || v(t) || r.overrides.buttonHint,
					buttonTitleDefault: v(o) || r.defaults.buttonHint || v(tn)
				}
			}(e, i, t, n, r)
		})
	}
	var Go = {},
		qo = function() {
			function e(e) {
				this.props = e, this.nowDate = vr(e.nowInput, e.dateEnv), this.initHiddenDays()
			}
			return e.prototype.buildPrev = function(e, t, n) {
				var r = this.props.dateEnv,
					o = r.subtract(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
				return this.build(o, -1, n)
			}, e.prototype.buildNext = function(e, t, n) {
				var r = this.props.dateEnv,
					o = r.add(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
				return this.build(o, 1, n)
			}, e.prototype.build = function(e, t, n) {
				void 0 === n && (n = !0);
				var r, o, i, a, s, l, u, c, d = this.props;
				return r = this.buildValidRange(), r = this.trimHiddenDays(r), n && (u = e, e = null != (c = r).start && u < c.start ? c.start : null != c.end && u >= c.end ? new Date(c.end.valueOf() - 1) : u), o = this.buildCurrentRangeInfo(e, t), i = /^(year|month|week|day)$/.test(o.unit), a = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, i), s = a = this.trimHiddenDays(a), d.showNonCurrentDates || (s = On(s, o.range)), s = On(s = this.adjustActiveRange(s), r), l = Ln(o.range, r), {
					validRange: r,
					currentRange: o.range,
					currentRangeUnit: o.unit,
					isRangeAllDay: i,
					activeRange: s,
					renderRange: a,
					slotMinTime: d.slotMinTime,
					slotMaxTime: d.slotMaxTime,
					isValid: l,
					dateIncrement: this.buildDateIncrement(o.duration)
				}
			}, e.prototype.buildValidRange = function() {
				var e = this.props.validRangeInput,
					t = "function" == typeof e ? e.call(this.props.calendarApi, this.nowDate) : e;
				return this.refineRange(t) || {
					start: null,
					end: null
				}
			}, e.prototype.buildCurrentRangeInfo = function(e, t) {
				var n, r = this.props,
					o = null,
					i = null,
					a = null;
				return r.duration ? (o = r.duration, i = r.durationUnit, a = this.buildRangeFromDuration(e, t, o, i)) : (n = this.props.dayCount) ? (i = "day", a = this.buildRangeFromDayCount(e, t, n)) : (a = this.buildCustomVisibleRange(e)) ? i = r.dateEnv.greatestWholeUnit(a.start, a.end).unit : (i = Pt(o = this.getFallbackDuration()).unit, a = this.buildRangeFromDuration(e, t, o, i)), {
					duration: o,
					unit: i,
					range: a
				}
			}, e.prototype.getFallbackDuration = function() {
				return Rt({
					day: 1
				})
			}, e.prototype.adjustActiveRange = function(e) {
				var t = this.props,
					n = t.dateEnv,
					r = t.usesMinMaxTime,
					o = t.slotMinTime,
					i = t.slotMaxTime,
					a = e.start,
					s = e.end;
				return r && (xt(o) < 0 && (a = rt(a), a = n.add(a, o)), 1 < xt(i) && (s = Ke(s = rt(s), -1), s = n.add(s, i))), {
					start: a,
					end: s
				}
			}, e.prototype.buildRangeFromDuration = function(e, t, n, r) {
				var o, i, a, s = this.props,
					l = s.dateEnv,
					u = s.dateAlignment;
				if (!u) {
					var c = this.props.dateIncrement;
					u = c && Mt(c) < Mt(n) ? Pt(c).unit : r
				}

				function d() {
					o = l.startOf(e, u), i = l.add(o, n), a = {
						start: o,
						end: i
					}
				}
				return xt(n) <= 1 && this.isHiddenDay(o) && (o = rt(o = this.skipHiddenDays(o, t))), d(), this.trimHiddenDays(a) || (e = this.skipHiddenDays(e, t), d()), a
			}, e.prototype.buildRangeFromDayCount = function(e, t, n) {
				var r, o = this.props,
					i = o.dateEnv,
					a = o.dateAlignment,
					s = 0,
					l = e;
				for (a && (l = i.startOf(l, a)), l = rt(l), r = l = this.skipHiddenDays(l, t); r = Ke(r, 1), this.isHiddenDay(r) || (s += 1), s < n;);
				return {
					start: l,
					end: r
				}
			}, e.prototype.buildCustomVisibleRange = function(e) {
				var t = this.props,
					n = t.visibleRangeInput,
					r = "function" == typeof n ? n.call(t.calendarApi, t.dateEnv.toDate(e)) : n,
					o = this.refineRange(r);
				return !o || null != o.start && null != o.end ? o : null
			}, e.prototype.buildRenderRange = function(e, t, n) {
				return e
			}, e.prototype.buildDateIncrement = function(e) {
				var t;
				return this.props.dateIncrement || ((t = this.props.dateAlignment) ? Rt(1, t) : e || Rt({
					days: 1
				}))
			}, e.prototype.refineRange = function(e) {
				if (e) {
					var t = (n = e, r = this.props.dateEnv, i = o = null, n.start && (o = r.createMarker(n.start)), n.end && (i = r.createMarker(n.end)), o || i ? o && i && i < o ? null : {
						start: o,
						end: i
					} : null);
					return t && (t = Mn(t)), t
				}
				var n, r, o, i;
				return null
			}, e.prototype.initHiddenDays = function() {
				var e, t = this.props.hiddenDays || [],
					n = [],
					r = 0;
				for (!1 === this.props.weekends && t.push(0, 6), e = 0; e < 7; e += 1)(n[e] = -1 !== t.indexOf(e)) || (r += 1);
				if (!r) throw new Error("invalid hiddenDays");
				this.isHiddenDayHash = n
			}, e.prototype.trimHiddenDays = function(e) {
				var t = e.start,
					n = e.end;
				return t && (t = this.skipHiddenDays(t)), n && (n = this.skipHiddenDays(n, -1, !0)), null == t || null == n || t < n ? {
					start: t,
					end: n
				} : null
			}, e.prototype.isHiddenDay = function(e) {
				return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e]
			}, e.prototype.skipHiddenDays = function(e, t, n) {
				for (void 0 === t && (t = 1), void 0 === n && (n = !1); this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7];) e = Ke(e, t);
				return e
			}, e
		}();

	function Yo(e) {
		for (var t in e)
			if (e[t].isFetching) return !0;
		return !1
	}

	function Zo(e, t, n, r) {
		for (var o = {}, i = 0, a = t; i < a.length; i++) {
			var s = a[i];
			o[s.sourceId] = s
		}
		return n && (o = Xo(o, n, r)), N(N({}, e), o)
	}

	function Xo(e, o, i) {
		return Ko(e, ht(e, function(e) {
			return n = o, Qo(t = e, r = i) ? !r.options.lazyFetching || !t.fetchRange || t.isFetching || n.start < t.fetchRange.start || n.end > t.fetchRange.end : !t.latestFetchId;
			var t, n, r
		}), o, !1, i)
	}

	function Ko(e, t, n, r, o) {
		var i = {};
		for (var a in e) {
			var s = e[a];
			t[a] ? i[a] = $o(s, n, r, o) : i[a] = s
		}
		return i
	}

	function $o(n, r, e, o) {
		var i = o.options,
			a = o.calendarApi,
			t = o.pluginHooks.eventSourceDefs[n.sourceDefId],
			s = Pe();
		return t.fetch({
			eventSource: n,
			range: r,
			isRefetch: e,
			context: o
		}, function(e) {
			var t = e.rawEvents;
			i.eventSourceSuccess && (t = i.eventSourceSuccess.call(a, t, e.xhr) || t), n.success && (t = n.success.call(a, t, e.xhr) || t), o.dispatch({
				type: "RECEIVE_EVENTS",
				sourceId: n.sourceId,
				fetchId: s,
				fetchRange: r,
				rawEvents: t
			})
		}, function(e) {
			console.warn(e.message, e), i.eventSourceFailure && i.eventSourceFailure.call(a, e), n.failure && n.failure(e), o.dispatch({
				type: "RECEIVE_EVENT_ERROR",
				sourceId: n.sourceId,
				fetchId: s,
				fetchRange: r,
				error: e
			})
		}), N(N({}, n), {
			isFetching: !0,
			latestFetchId: s
		})
	}

	function Jo(e, t) {
		return ht(e, function(e) {
			return Qo(e, t)
		})
	}

	function Qo(e, t) {
		return !t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange
	}

	function ei(e, t) {
		var n;
		if (t) {
			n = [];
			for (var r = 0, o = e; r < o.length; r++) {
				var i = o[r],
					a = t(i);
				a ? n.push(a) : null == a && n.push(i)
			}
		} else n = e;
		return n
	}

	function ti(e, t) {
		return vn(e, function(e) {
			return e.sourceId !== t
		})
	}

	function ni(e, t, n, r, o) {
		return {
			header: e.headerToolbar ? ri(e.headerToolbar, e, t, n, r, o) : null,
			footer: e.footerToolbar ? ri(e.footerToolbar, e, t, n, r, o) : null
		}
	}

	function ri(e, t, n, r, o, i) {
		var a = {},
			s = [],
			l = !1;
		for (var u in e) {
			var c = oi(e[u], t, n, r, o, i);
			a[u] = c.widgets, s.push.apply(s, c.viewsWithButtons), l = l || c.hasTitle
		}
		return {
			sectionWidgets: a,
			viewsWithButtons: s,
			hasTitle: l
		}
	}

	function oi(e, u, t, c, d, p) {
		var f = "rtl" === u.direction,
			h = u.customButtons || {},
			v = t.buttonText || {},
			g = u.buttonText || {},
			m = t.buttonHints || {},
			y = u.buttonHints || {},
			n = e ? e.split(" ") : [],
			E = [],
			S = !1;
		return {
			widgets: n.map(function(e) {
				return e.split(",").map(function(t) {
					if ("title" === t) return S = !0, {
						buttonName: t
					};
					var n, e, r, o, i, a;
					if (n = h[t]) r = function(e) {
						n.click && n.click.call(e.target, e, e.target)
					}, (o = c.getCustomButtonIconClass(n)) || (o = c.getIconClass(t, f)) || (i = n.text), a = n.hint || n.text;
					else if (e = d[t]) {
						E.push(t), r = function() {
							p.changeView(t)
						}, (i = e.buttonTextOverride) || (o = c.getIconClass(t, f)) || (i = e.buttonTextDefault);
						var s = e.buttonTextOverride || e.buttonTextDefault;
						a = je(e.buttonTitleOverride || e.buttonTitleDefault || u.viewHint, [s, t], s)
					} else if (p[t])
						if (r = function() {
								p[t]()
							}, (i = v[t]) || (o = c.getIconClass(t, f)) || (i = g[t]), "prevYear" === t || "nextYear" === t) {
							var l = "prevYear" === t ? "prev" : "next";
							a = je(m[l] || y[l], [g.year || "year", "year"], g[t])
						} else a = function(e) {
							return je(m[t] || y[t], [g[e] || e, e], g[t])
						};
					return {
						buttonName: t,
						buttonClick: r,
						buttonIcon: o,
						buttonText: i,
						buttonHint: a
					}
				})
			}),
			viewsWithButtons: E,
			hasTitle: S
		}
	}

	function ii(e, t, n, r, o) {
		var i, a = null;
		"GET" === (e = e.toUpperCase()) ? (i = n, t = t + (-1 === t.indexOf("?") ? "?" : "&") + ai(i)) : a = ai(n);
		var s = new XMLHttpRequest;
		s.open(e, t, !0), "GET" !== e && s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), s.onload = function() {
			if (200 <= s.status && s.status < 400) {
				var e = !1,
					t = void 0;
				try {
					t = JSON.parse(s.responseText), e = !0
				} catch (e) {}
				e ? r(t, s) : o("Failure parsing JSON", s)
			} else o("Request failed", s)
		}, s.onerror = function() {
			o("Request failed", s)
		}, s.send(a)
	}

	function ai(e) {
		var t = [];
		for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
		return t.join("&")
	}

	function si(e, t) {
		for (var n = mt(t.getCurrentData().eventSources), r = [], o = 0, i = e; o < i.length; o++) {
			for (var a = i[o], s = !1, l = 0; l < n.length; l += 1)
				if (n[l]._raw === a) {
					n.splice(l, 1), s = !0;
					break
				} s || r.push(a)
		}
		for (var u = 0, c = n; u < c.length; u++) {
			var d = c[u];
			t.dispatch({
				type: "REMOVE_EVENT_SOURCE",
				sourceId: d.sourceId
			})
		}
		for (var p = 0, f = r; p < f.length; p++) {
			var h = f[p];
			t.calendarApi.addEventSource(h)
		}
	}
	var li = [Mo({
			eventSourceDefs: [{
				ignoreRange: !0,
				parseMeta: function(e) {
					return Array.isArray(e.events) ? e.events : null
				},
				fetch: function(e, t) {
					t({
						rawEvents: e.eventSource.meta
					})
				}
			}]
		}), Mo({
			eventSourceDefs: [{
				parseMeta: function(e) {
					return "function" == typeof e.events ? e.events : null
				},
				fetch: function(e, t, n) {
					var r = e.context.dateEnv;
					oo(e.eventSource.meta.bind(null, or(e.range, r)), function(e) {
						t({
							rawEvents: e
						})
					}, n)
				}
			}]
		}), Mo({
			eventSourceRefiners: {
				method: String,
				extraParams: cn,
				startParam: String,
				endParam: String,
				timeZoneParam: String
			},
			eventSourceDefs: [{
				parseMeta: function(e) {
					return !e.url || "json" !== e.format && e.format ? null : {
						url: e.url,
						format: "json",
						method: (e.method || "GET").toUpperCase(),
						extraParams: e.extraParams,
						startParam: e.startParam,
						endParam: e.endParam,
						timeZoneParam: e.timeZoneParam
					}
				},
				fetch: function(e, n, r) {
					var t, o, i, a, s, l, u, c, d, p, f = e.eventSource.meta,
						h = (t = f, o = e.range, i = e.context, c = i.dateEnv, d = i.options, p = {}, null == (a = t.startParam) && (a = d.startParam), null == (s = t.endParam) && (s = d.endParam), null == (l = t.timeZoneParam) && (l = d.timeZoneParam), u = "function" == typeof t.extraParams ? t.extraParams() : t.extraParams || {}, N(p, u), p[a] = c.formatIso(o.start), p[s] = c.formatIso(o.end), "local" !== c.timeZone && (p[l] = c.timeZone), p);
					ii(f.method, f.url, h, function(e, t) {
						n({
							rawEvents: e,
							xhr: t
						})
					}, function(e, t) {
						r({
							message: e,
							xhr: t
						})
					})
				}
			}]
		}), Mo({
			recurringTypes: [{
				parse: function(e, t) {
					if (e.daysOfWeek || e.startTime || e.endTime || e.startRecur || e.endRecur) {
						var n = {
								daysOfWeek: e.daysOfWeek || null,
								startTime: e.startTime || null,
								endTime: e.endTime || null,
								startRecur: e.startRecur ? t.createMarker(e.startRecur) : null,
								endRecur: e.endRecur ? t.createMarker(e.endRecur) : null
							},
							r = void 0;
						return e.duration && (r = e.duration), !r && e.startTime && e.endTime && (o = e.endTime, i = e.startTime, r = {
							years: o.years - i.years,
							months: o.months - i.months,
							days: o.days - i.days,
							milliseconds: o.milliseconds - i.milliseconds
						}), {
							allDayGuess: Boolean(!e.startTime && !e.endTime),
							duration: r,
							typeData: n
						}
					}
					var o, i;
					return null
				},
				expand: function(e, t, n) {
					var r = On(t, {
						start: e.startRecur,
						end: e.endRecur
					});
					return r ? function(e, t, n, r) {
						for (var o = e ? gt(e) : null, i = rt(n.start), a = n.end, s = []; i < a;) {
							var l = void 0;
							o && !o[i.getUTCDay()] || (l = t ? r.add(i, t) : i, s.push(l)), i = Ke(i, 1)
						}
						return s
					}(e.daysOfWeek, e.startTime, r, n) : []
				}
			}],
			eventRefiners: {
				daysOfWeek: cn,
				startTime: Rt,
				endTime: Rt,
				duration: Rt,
				startRecur: cn,
				endRecur: cn
			}
		}), Mo({
			optionChangeHandlers: {
				events: function(e, t) {
					si([e], t)
				},
				eventSources: si
			}
		}), Mo({
			isLoadingFuncs: [function(e) {
				return Yo(e.eventSources)
			}],
			contentTypeHandlers: {
				html: function() {
					var n = null,
						r = "";
					return {
						render: function(e, t) {
							e === n && t === r || (e.innerHTML = t), n = e, r = t
						},
						destroy: function() {
							n.innerHTML = "", n = null, r = ""
						}
					}
				},
				domNodes: function() {
					var a = null,
						s = [];

					function l() {
						s.forEach(he), s = [], a = null
					}
					return {
						render: function(e, t) {
							var n = Array.prototype.slice.call(t);
							if (e !== a || !Lt(s, n)) {
								for (var r = 0, o = n; r < o.length; r++) {
									var i = o[r];
									e.appendChild(i)
								}
								l()
							}
							a = e, s = n
						},
						destroy: l
					}
				}
			},
			propSetHandlers: {
				dateProfile: function(e, t) {
					t.emitter.trigger("datesSet", N(N({}, or(e.activeRange, t.dateEnv)), {
						view: t.viewApi
					}))
				},
				eventStore: function(e, t) {
					var n = t.emitter;
					n.hasHandlers("eventsSet") && n.trigger("eventsSet", Er(e, t))
				}
			}
		})],
		ui = function() {
			function e(e) {
				this.drainedOption = e, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0
			}
			return e.prototype.request = function(e) {
				this.isDirty = !0, this.isPaused() || (this.clearTimeout(), null == e ? this.tryDrain() : this.timeoutId = setTimeout(this.tryDrain.bind(this), e))
			}, e.prototype.pause = function(e) {
				void 0 === e && (e = "");
				var t = this.pauseDepths;
				t[e] = (t[e] || 0) + 1, this.clearTimeout()
			}, e.prototype.resume = function(e, t) {
				void 0 === e && (e = "");
				var n = this.pauseDepths;
				e in n && (t ? delete n[e] : (n[e] -= 1, n[e] <= 0 && delete n[e]), this.tryDrain())
			}, e.prototype.isPaused = function() {
				return Object.keys(this.pauseDepths).length
			}, e.prototype.tryDrain = function() {
				if (!this.isRunning && !this.isPaused()) {
					for (this.isRunning = !0; this.isDirty;) this.isDirty = !1, this.drained();
					this.isRunning = !1
				}
			}, e.prototype.clear = function() {
				this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {}
			}, e.prototype.clearTimeout = function() {
				this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0)
			}, e.prototype.drained = function() {
				this.drainedOption && this.drainedOption()
			}, e
		}(),
		ci = function() {
			function e(e, t) {
				this.runTaskOption = e, this.drainedOption = t, this.queue = [], this.delayedRunner = new ui(this.drain.bind(this))
			}
			return e.prototype.request = function(e, t) {
				this.queue.push(e), this.delayedRunner.request(t)
			}, e.prototype.pause = function(e) {
				this.delayedRunner.pause(e)
			}, e.prototype.resume = function(e, t) {
				this.delayedRunner.resume(e, t)
			}, e.prototype.drain = function() {
				for (var e = this.queue; e.length;) {
					for (var t = [], n = void 0; n = e.shift();) this.runTask(n), t.push(n);
					this.drained(t)
				}
			}, e.prototype.runTask = function(e) {
				this.runTaskOption && this.runTaskOption(e)
			}, e.prototype.drained = function(e) {
				this.drainedOption && this.drainedOption(e)
			}, e
		}();

	function di(e, t, n) {
		var r;
		return r = /^(year|month)$/.test(e.currentRangeUnit) ? e.currentRange : e.activeRange, n.formatRange(r.start, r.end, Qt(t.titleFormat || function(e) {
			var t = e.currentRangeUnit;
			if ("year" === t) return {
				year: "numeric"
			};
			if ("month" === t) return {
				year: "numeric",
				month: "long"
			};
			var n = nt(e.currentRange.start, e.currentRange.end);
			return null !== n && 1 < n ? {
				year: "numeric",
				month: "short",
				day: "numeric"
			} : {
				year: "numeric",
				month: "long",
				day: "numeric"
			}
		}(e)), {
			isEndExclusive: e.isRangeAllDay,
			defaultSeparator: t.titleRangeSeparator
		})
	}
	var pi = function() {
		function e(e) {
			var t, r, o, n = this;
			this.computeOptionsData = Ut(this._computeOptionsData), this.computeCurrentViewData = Ut(this._computeCurrentViewData), this.organizeRawLocales = Ut(kr), this.buildLocale = Ut(xr), this.buildPluginHooks = (r = [], o = [], function(n, e) {
				return t && Lt(n, r) && Lt(e, o) || (t = function(e, t) {
					var a = {},
						s = {
							reducers: [],
							isLoadingFuncs: [],
							contextInit: [],
							eventRefiners: {},
							eventDefMemberAdders: [],
							eventSourceRefiners: {},
							isDraggableTransformers: [],
							eventDragMutationMassagers: [],
							eventDefMutationAppliers: [],
							dateSelectionTransformers: [],
							datePointTransforms: [],
							dateSpanTransforms: [],
							views: {},
							viewPropsTransformers: [],
							isPropsValid: null,
							externalDefTransforms: [],
							viewContainerAppends: [],
							eventDropTransformers: [],
							componentInteractions: [],
							calendarInteractions: [],
							themeClasses: {},
							eventSourceDefs: [],
							cmdFormatter: null,
							recurringTypes: [],
							namedTimeZonedImpl: null,
							initialView: "",
							elementDraggingImpl: null,
							optionChangeHandlers: {},
							scrollGridImpl: null,
							contentTypeHandlers: {},
							listenerRefiners: {},
							optionRefiners: {},
							propSetHandlers: {}
						};

					function l(e) {
						for (var t = 0, n = e; t < n.length; t++) {
							var r = n[t];
							a[r.id] || (a[r.id] = !0, l(r.deps), i = r, s = {
								reducers: (o = s).reducers.concat(i.reducers),
								isLoadingFuncs: o.isLoadingFuncs.concat(i.isLoadingFuncs),
								contextInit: o.contextInit.concat(i.contextInit),
								eventRefiners: N(N({}, o.eventRefiners), i.eventRefiners),
								eventDefMemberAdders: o.eventDefMemberAdders.concat(i.eventDefMemberAdders),
								eventSourceRefiners: N(N({}, o.eventSourceRefiners), i.eventSourceRefiners),
								isDraggableTransformers: o.isDraggableTransformers.concat(i.isDraggableTransformers),
								eventDragMutationMassagers: o.eventDragMutationMassagers.concat(i.eventDragMutationMassagers),
								eventDefMutationAppliers: o.eventDefMutationAppliers.concat(i.eventDefMutationAppliers),
								dateSelectionTransformers: o.dateSelectionTransformers.concat(i.dateSelectionTransformers),
								datePointTransforms: o.datePointTransforms.concat(i.datePointTransforms),
								dateSpanTransforms: o.dateSpanTransforms.concat(i.dateSpanTransforms),
								views: N(N({}, o.views), i.views),
								viewPropsTransformers: o.viewPropsTransformers.concat(i.viewPropsTransformers),
								isPropsValid: i.isPropsValid || o.isPropsValid,
								externalDefTransforms: o.externalDefTransforms.concat(i.externalDefTransforms),
								viewContainerAppends: o.viewContainerAppends.concat(i.viewContainerAppends),
								eventDropTransformers: o.eventDropTransformers.concat(i.eventDropTransformers),
								calendarInteractions: o.calendarInteractions.concat(i.calendarInteractions),
								componentInteractions: o.componentInteractions.concat(i.componentInteractions),
								themeClasses: N(N({}, o.themeClasses), i.themeClasses),
								eventSourceDefs: o.eventSourceDefs.concat(i.eventSourceDefs),
								cmdFormatter: i.cmdFormatter || o.cmdFormatter,
								recurringTypes: o.recurringTypes.concat(i.recurringTypes),
								namedTimeZonedImpl: i.namedTimeZonedImpl || o.namedTimeZonedImpl,
								initialView: o.initialView || i.initialView,
								elementDraggingImpl: o.elementDraggingImpl || i.elementDraggingImpl,
								optionChangeHandlers: N(N({}, o.optionChangeHandlers), i.optionChangeHandlers),
								scrollGridImpl: i.scrollGridImpl || o.scrollGridImpl,
								contentTypeHandlers: N(N({}, o.contentTypeHandlers), i.contentTypeHandlers),
								listenerRefiners: N(N({}, o.listenerRefiners), i.listenerRefiners),
								optionRefiners: N(N({}, o.optionRefiners), i.optionRefiners),
								propSetHandlers: N(N({}, o.propSetHandlers), i.propSetHandlers)
							})
						}
						var o, i
					}
					return n && l(n), l(t), s
				}(0, e)), r = n, o = e, t
			}), this.buildDateEnv = Ut(fi), this.buildTheme = Ut(hi), this.parseToolbars = Ut(ni), this.buildViewSpecs = Ut(jo), this.buildDateProfileGenerator = Wt(vi), this.buildViewApi = Ut(gi), this.buildViewUiProps = Wt(Ei), this.buildEventUiBySource = Ut(mi, yt), this.buildEventUiBases = Ut(yi), this.parseContextBusinessHours = Wt(bi), this.buildTitle = Ut(di), this.emitter = new io, this.actionRunner = new ci(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.getCurrentData = function() {
				return n.data
			}, this.dispatch = function(e) {
				n.actionRunner.request(e)
			}, this.props = e, this.actionRunner.pause();
			var i = {},
				a = this.computeOptionsData(e.optionOverrides, i, e.calendarApi),
				s = a.calendarOptions.initialView || a.pluginHooks.initialView,
				l = this.computeCurrentViewData(s, a, e.optionOverrides, i);
			(e.calendarApi.currentDataManager = this).emitter.setThisContext(e.calendarApi), this.emitter.setOptions(l.options);
			var u, c, d, p, f, h, v, g = (u = a.calendarOptions, c = a.dateEnv, null != (d = u.initialDate) ? c.createMarker(d) : vr(u.now, c)),
				m = l.dateProfileGenerator.build(g);
			Wn(m.activeRange, g) || (g = m.currentRange.start);
			for (var y = {
					dateEnv: a.dateEnv,
					options: a.calendarOptions,
					pluginHooks: a.pluginHooks,
					calendarApi: e.calendarApi,
					dispatch: this.dispatch,
					emitter: this.emitter,
					getCurrentData: this.getCurrentData
				}, E = 0, S = a.pluginHooks.contextInit; E < S.length; E++)(0, S[E])(y);
			for (var b = (p = a.calendarOptions, h = y, v = void 0, v = (f = m) ? f.activeRange : null, Zo({}, function(e, t) {
					var n = hr(t),
						r = [].concat(e.eventSources || []),
						o = [];
					e.initialEvents && r.unshift(e.initialEvents), e.events && r.unshift(e.events);
					for (var i = 0, a = r; i < a.length; i++) {
						var s = fr(a[i], t, n);
						s && o.push(s)
					}
					return o
				}(p, h), v, h)), D = {
					dynamicOptionOverrides: i,
					currentViewType: s,
					currentDate: g,
					dateProfile: m,
					businessHours: this.parseContextBusinessHours(y),
					eventSources: b,
					eventUiBases: {},
					eventStore: {
						defs: {},
						instances: {}
					},
					renderableEventStore: {
						defs: {},
						instances: {}
					},
					dateSelection: null,
					eventSelection: "",
					eventDrag: null,
					eventResize: null,
					selectionConfig: this.buildViewUiProps(y).selectionConfig
				}, C = N(N({}, y), D), w = 0, R = a.pluginHooks.reducers; w < R.length; w++) {
				var T = R[w];
				N(D, T(null, null, C))
			}
			Si(D, y) && this.emitter.trigger("loading", !0), this.state = D, this.updateData(), this.actionRunner.resume()
		}
		return e.prototype.resetOptions = function(e, t) {
			var n = this.props;
			n.optionOverrides = t ? N(N({}, n.optionOverrides), e) : e, this.actionRunner.request({
				type: "NOTHING"
			})
		}, e.prototype._handleAction = function(e) {
			var t = this.props,
				n = this.state,
				r = this.emitter,
				o = function(e, t) {
					var n;
					switch (t.type) {
						case "SET_OPTION":
							return N(N({}, e), ((n = {})[t.optionName] = t.rawOptionValue, n));
						default:
							return e
					}
				}(n.dynamicOptionOverrides, e),
				i = this.computeOptionsData(t.optionOverrides, o, t.calendarApi),
				a = function(e, t) {
					switch (t.type) {
						case "CHANGE_VIEW_TYPE":
							e = t.viewType
					}
					return e
				}(n.currentViewType, e),
				s = this.computeCurrentViewData(a, i, t.optionOverrides, o);
			t.calendarApi.currentDataManager = this, r.setThisContext(t.calendarApi), r.setOptions(s.options);
			var l = {
					dateEnv: i.dateEnv,
					options: i.calendarOptions,
					pluginHooks: i.pluginHooks,
					calendarApi: t.calendarApi,
					dispatch: this.dispatch,
					emitter: r,
					getCurrentData: this.getCurrentData
				},
				u = n.currentDate,
				c = n.dateProfile;
			this.data && this.data.dateProfileGenerator !== s.dateProfileGenerator && (c = s.dateProfileGenerator.build(u)), c = function(e, t, n, r) {
				var o;
				switch (t.type) {
					case "CHANGE_VIEW_TYPE":
						return r.build(t.dateMarker || n);
					case "CHANGE_DATE":
						return r.build(t.dateMarker);
					case "PREV":
						if ((o = r.buildPrev(e, n)).isValid) return o;
						break;
					case "NEXT":
						if ((o = r.buildNext(e, n)).isValid) return o
				}
				return e
			}(c, e, u = function(e, t) {
				switch (t.type) {
					case "CHANGE_DATE":
						return t.dateMarker;
					default:
						return e
				}
			}(u, e), s.dateProfileGenerator), "PREV" !== e.type && "NEXT" !== e.type && Wn(c.currentRange, u) || (u = c.currentRange.start);
			for (var d = function(e, t, n, r) {
					var o, i, a, s, l, u, c, d, p = n ? n.activeRange : null;
					switch (t.type) {
						case "ADD_EVENT_SOURCES":
							return Zo(e, t.sources, p, r);
						case "REMOVE_EVENT_SOURCE":
							return o = e, i = t.sourceId, ht(o, function(e) {
								return e.sourceId !== i
							});
						case "PREV":
						case "NEXT":
						case "CHANGE_DATE":
						case "CHANGE_VIEW_TYPE":
							return n ? Xo(e, p, r) : e;
						case "FETCH_EVENT_SOURCES":
							return Ko(e, t.sourceIds ? gt(t.sourceIds) : Jo(e, r), p, t.isRefetch || !1, r);
						case "RECEIVE_EVENTS":
						case "RECEIVE_EVENT_ERROR":
							return a = e, s = t.sourceId, l = t.fetchId, u = t.fetchRange, (d = a[s]) && l === d.latestFetchId ? N(N({}, a), ((c = {})[s] = N(N({}, d), {
								isFetching: !1,
								fetchRange: u
							}), c)) : a;
						case "REMOVE_ALL_EVENT_SOURCES":
							return {};
						default:
							return e
					}
				}(n.eventSources, e, c, l), p = function(e, t, n, r, o) {
					switch (t.type) {
						case "RECEIVE_EVENTS":
							return function(e, t, n, r, o, i) {
								if (t && n === t.latestFetchId) {
									var a = dn((s = o, l = t, u = i.options.eventDataTransform, (c = l ? l.eventDataTransform : null) && (s = ei(s, c)), u && (s = ei(s, u)), s), t, i);
									return r && (a = Dt(a, r, i)), hn(ti(e, t.sourceId), a)
								}
								var s, l, u, c;
								return e
							}(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, o);
						case "ADD_EVENTS":
							return i = e, a = t.eventStore, (s = r ? r.activeRange : null) && (a = Dt(a, s, o)), hn(i, a);
						case "RESET_EVENTS":
							return t.eventStore;
						case "MERGE_EVENTS":
							return hn(e, t.eventStore);
						case "PREV":
						case "NEXT":
						case "CHANGE_DATE":
						case "CHANGE_VIEW_TYPE":
							return r ? Dt(e, r.activeRange, o) : e;
						case "REMOVE_EVENTS":
							return function(e, t) {
								var n = e.defs,
									r = e.instances,
									o = {},
									i = {};
								for (var a in n) t.defs[a] || (o[a] = n[a]);
								for (var s in r) !t.instances[s] && o[r[s].defId] && (i[s] = r[s]);
								return {
									defs: o,
									instances: i
								}
							}(e, t.eventStore);
						case "REMOVE_EVENT_SOURCE":
							return ti(e, t.sourceId);
						case "REMOVE_ALL_EVENT_SOURCES":
							return vn(e, function(e) {
								return !e.sourceId
							});
						case "REMOVE_ALL_EVENTS":
							return {
								defs: {}, instances: {}
							};
						default:
							return e
					}
					var i, a, s
				}(n.eventStore, e, d, c, l), f = Yo(d) && !s.options.progressiveEventRendering && n.renderableEventStore || p, h = this.buildViewUiProps(l), v = h.eventUiSingleBase, g = h.selectionConfig, m = this.buildEventUiBySource(d), y = {
					dynamicOptionOverrides: o,
					currentViewType: a,
					currentDate: u,
					dateProfile: c,
					eventSources: d,
					eventStore: p,
					renderableEventStore: f,
					selectionConfig: g,
					eventUiBases: this.buildEventUiBases(f.defs, v, m),
					businessHours: this.parseContextBusinessHours(l),
					dateSelection: function(e, t) {
						switch (t.type) {
							case "UNSELECT_DATES":
								return null;
							case "SELECT_DATES":
								return t.selection;
							default:
								return e
						}
					}(n.dateSelection, e),
					eventSelection: function(e, t) {
						switch (t.type) {
							case "UNSELECT_EVENT":
								return "";
							case "SELECT_EVENT":
								return t.eventInstanceId;
							default:
								return e
						}
					}(n.eventSelection, e),
					eventDrag: function(e, t) {
						var n;
						switch (t.type) {
							case "UNSET_EVENT_DRAG":
								return null;
							case "SET_EVENT_DRAG":
								return {
									affectedEvents: (n = t.state).affectedEvents, mutatedEvents: n.mutatedEvents, isEvent: n.isEvent
								};
							default:
								return e
						}
					}(n.eventDrag, e),
					eventResize: function(e, t) {
						var n;
						switch (t.type) {
							case "UNSET_EVENT_RESIZE":
								return null;
							case "SET_EVENT_RESIZE":
								return {
									affectedEvents: (n = t.state).affectedEvents, mutatedEvents: n.mutatedEvents, isEvent: n.isEvent
								};
							default:
								return e
						}
					}(n.eventResize, e)
				}, E = N(N({}, l), y), S = 0, b = i.pluginHooks.reducers; S < b.length; S++) {
				var D = b[S];
				N(y, D(n, e, E))
			}
			var C = Si(n, l),
				w = Si(y, l);
			!C && w ? r.trigger("loading", !0) : C && !w && r.trigger("loading", !1), this.state = y, t.onAction && t.onAction(e)
		}, e.prototype.updateData = function() {
			var e, n, r, o, t, i, a, s, l, u = this.props,
				c = this.state,
				d = this.data,
				p = this.computeOptionsData(u.optionOverrides, c.dynamicOptionOverrides, u.calendarApi),
				f = this.computeCurrentViewData(c.currentViewType, p, u.optionOverrides, c.dynamicOptionOverrides),
				h = this.data = N(N(N({
					viewTitle: this.buildTitle(c.dateProfile, f.options, p.dateEnv),
					calendarApi: u.calendarApi,
					dispatch: this.dispatch,
					emitter: this.emitter,
					getCurrentData: this.getCurrentData
				}, p), f), c),
				v = p.pluginHooks.optionChangeHandlers,
				g = d && d.calendarOptions,
				m = p.calendarOptions;
			if (g && g !== m)
				for (var y in g.timeZone !== m.timeZone && (c.eventSources = h.eventSources = (i = h.eventSources, s = h, l = (a = c.dateProfile) ? a.activeRange : null, Ko(i, Jo(i, s), l, !0, s)), c.eventStore = h.eventStore = (e = h.eventStore, n = d.dateEnv, r = h.dateEnv, o = e.defs, t = vt(e.instances, function(e) {
						var t = o[e.defId];
						return t.allDay || t.recurringDef ? e : N(N({}, e), {
							range: {
								start: r.createMarker(n.toDate(e.range.start, e.forcedStartTzo)),
								end: r.createMarker(n.toDate(e.range.end, e.forcedEndTzo))
							},
							forcedStartTzo: r.canComputeOffset ? null : e.forcedStartTzo,
							forcedEndTzo: r.canComputeOffset ? null : e.forcedEndTzo
						})
					}), {
						defs: o,
						instances: t
					})), v) g[y] !== m[y] && v[y](m[y], h);
			u.onData && u.onData(h)
		}, e.prototype._computeOptionsData = function(e, t, n) {
			var r = this.processRawCalendarOptions(e, t),
				o = r.refinedOptions,
				i = r.pluginHooks,
				a = r.localeDefaults,
				s = r.availableLocaleData;
			Di(r.extra);
			var l = this.buildDateEnv(o.timeZone, o.locale, o.weekNumberCalculation, o.firstDay, o.weekText, i, s, o.defaultRangeSeparator),
				u = this.buildViewSpecs(i.views, e, t, a),
				c = this.buildTheme(o, i);
			return {
				calendarOptions: o,
				pluginHooks: i,
				dateEnv: l,
				viewSpecs: u,
				theme: c,
				toolbarConfig: this.parseToolbars(o, e, c, u, n),
				localeDefaults: a,
				availableRawLocales: s.map
			}
		}, e.prototype.processRawCalendarOptions = function(e, t) {
			var n = ln([tn, e, t]),
				r = n.locales,
				o = n.locale,
				i = this.organizeRawLocales(r),
				a = i.map,
				s = this.buildLocale(o || i.defaultCode, a).options,
				l = this.buildPluginHooks(e.plugins || [], li),
				u = this.currentCalendarOptionsRefiners = N(N(N(N(N({}, en), nn), rn), l.listenerRefiners), l.optionRefiners),
				c = {},
				d = ln([tn, s, e, t]),
				p = {},
				f = this.currentCalendarOptionsInput,
				h = this.currentCalendarOptionsRefined,
				v = !1;
			for (var g in d) "plugins" !== g && (d[g] === f[g] || on[g] && g in f && on[g](f[g], d[g]) ? p[g] = h[g] : u[g] ? (p[g] = u[g](d[g]), v = !0) : c[g] = f[g]);
			return v && (this.currentCalendarOptionsInput = d, this.currentCalendarOptionsRefined = p), {
				rawOptions: this.currentCalendarOptionsInput,
				refinedOptions: this.currentCalendarOptionsRefined,
				pluginHooks: l,
				availableLocaleData: i,
				localeDefaults: s,
				extra: c
			}
		}, e.prototype._computeCurrentViewData = function(e, t, n, r) {
			var o = t.viewSpecs[e];
			if (!o) throw new Error('viewType "' + e + "\" is not available. Please make sure you've loaded all neccessary plugins");
			var i = this.processRawViewOptions(o, t.pluginHooks, t.localeDefaults, n, r),
				a = i.refinedOptions;
			return Di(i.extra), {
				viewSpec: o,
				options: a,
				dateProfileGenerator: this.buildDateProfileGenerator({
					dateProfileGeneratorClass: o.optionDefaults.dateProfileGeneratorClass,
					duration: o.duration,
					durationUnit: o.durationUnit,
					usesMinMaxTime: o.optionDefaults.usesMinMaxTime,
					dateEnv: t.dateEnv,
					calendarApi: this.props.calendarApi,
					slotMinTime: a.slotMinTime,
					slotMaxTime: a.slotMaxTime,
					showNonCurrentDates: a.showNonCurrentDates,
					dayCount: a.dayCount,
					dateAlignment: a.dateAlignment,
					dateIncrement: a.dateIncrement,
					hiddenDays: a.hiddenDays,
					weekends: a.weekends,
					nowInput: a.now,
					validRangeInput: a.validRange,
					visibleRangeInput: a.visibleRange,
					monthMode: a.monthMode,
					fixedWeekCount: a.fixedWeekCount
				}),
				viewApi: this.buildViewApi(e, this.getCurrentData, t.dateEnv)
			}
		}, e.prototype.processRawViewOptions = function(e, t, n, r, o) {
			var i = ln([tn, e.optionDefaults, n, r, e.optionOverrides, o]),
				a = N(N(N(N(N(N({}, en), nn), rn), sn), t.listenerRefiners), t.optionRefiners),
				s = {},
				l = this.currentViewOptionsInput,
				u = this.currentViewOptionsRefined,
				c = !1,
				d = {};
			for (var p in i) i[p] === l[p] || on[p] && on[p](i[p], l[p]) ? s[p] = u[p] : (i[p] === this.currentCalendarOptionsInput[p] || on[p] && on[p](i[p], this.currentCalendarOptionsInput[p]) ? p in this.currentCalendarOptionsRefined && (s[p] = this.currentCalendarOptionsRefined[p]) : a[p] ? s[p] = a[p](i[p]) : d[p] = i[p], c = !0);
			return c && (this.currentViewOptionsInput = i, this.currentViewOptionsRefined = s), {
				rawOptions: this.currentViewOptionsInput,
				refinedOptions: this.currentViewOptionsRefined,
				extra: d
			}
		}, e
	}();

	function fi(e, t, n, r, o, i, a, s) {
		var l = xr(t || a.defaultCode, a.map);
		return new wr({
			calendarSystem: "gregory",
			timeZone: e,
			namedTimeZoneImpl: i.namedTimeZonedImpl,
			locale: l,
			weekNumberCalculation: n,
			firstDay: r,
			weekText: o,
			cmdFormatter: i.cmdFormatter,
			defaultSeparator: s
		})
	}

	function hi(e, t) {
		return new(t.themeClasses[e.themeSystem] || Io)(e)
	}

	function vi(e) {
		return new(e.dateProfileGeneratorClass || qo)(e)
	}

	function gi(e, t, n) {
		return new dr(e, t, n)
	}

	function mi(e) {
		return vt(e, function(e) {
			return e.ui
		})
	}

	function yi(e, t, n) {
		var r = {
			"": t
		};
		for (var o in e) {
			var i = e[o];
			i.sourceId && n[i.sourceId] && (r[o] = n[i.sourceId])
		}
		return r
	}

	function Ei(e) {
		var t = e.options;
		return {
			eventUiSingleBase: En({
				display: t.eventDisplay,
				editable: t.editable,
				startEditable: t.eventStartEditable,
				durationEditable: t.eventDurationEditable,
				constraint: t.eventConstraint,
				overlap: "boolean" == typeof t.eventOverlap ? t.eventOverlap : void 0,
				allow: t.eventAllow,
				backgroundColor: t.eventBackgroundColor,
				borderColor: t.eventBorderColor,
				textColor: t.eventTextColor,
				color: t.eventColor
			}, e),
			selectionConfig: En({
				constraint: t.selectConstraint,
				overlap: "boolean" == typeof t.selectOverlap ? t.selectOverlap : void 0,
				allow: t.selectAllow
			}, e)
		}
	}

	function Si(e, t) {
		for (var n = 0, r = t.pluginHooks.isLoadingFuncs; n < r.length; n++)
			if ((0, r[n])(e)) return !0;
		return !1
	}

	function bi(e) {
		return Hr(e.options.businessHours, e)
	}

	function Di(e, t) {
		for (var n in e) console.warn("Unknown option '" + n + "'" + (t ? " for view '" + t + "'" : ""))
	}
	var Ci = function(n) {
			function e(e) {
				var t = n.call(this, e) || this;
				return t.handleData = function(e) {
					t.dataManager ? t.setState(e) : t.state = e
				}, t.dataManager = new pi({
					optionOverrides: e.optionOverrides,
					calendarApi: e.calendarApi,
					onData: t.handleData
				}), t
			}
			return s(e, n), e.prototype.render = function() {
				return this.props.children(this.state)
			}, e.prototype.componentDidUpdate = function(e) {
				var t = this.props.optionOverrides;
				t !== e.optionOverrides && this.dataManager.resetOptions(t)
			}, e
		}(po),
		wi = function() {
			function e() {
				this.strictOrder = !1, this.allowReslicing = !1, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {}
			}
			return e.prototype.addSegs = function(e) {
				for (var t = [], n = 0, r = e; n < r.length; n++) {
					var o = r[n];
					this.insertEntry(o, t)
				}
				return t
			}, e.prototype.insertEntry = function(e, t) {
				var n = this.findInsertion(e);
				return this.isInsertionValid(n, e) ? (this.insertEntryAt(e, n), 1) : this.handleInvalidInsertion(n, e, t)
			}, e.prototype.isInsertionValid = function(e, t) {
				return (-1 === this.maxCoord || e.levelCoord + t.thickness <= this.maxCoord) && (-1 === this.maxStackCnt || e.stackCnt < this.maxStackCnt)
			}, e.prototype.handleInvalidInsertion = function(e, t, n) {
				return this.allowReslicing && e.touchingEntry ? this.splitEntry(t, e.touchingEntry, n) : (n.push(t), 0)
			}, e.prototype.splitEntry = function(e, t, n) {
				var r = 0,
					o = [],
					i = e.span,
					a = t.span;
				return i.start < a.start && (r += this.insertEntry({
					index: e.index,
					thickness: e.thickness,
					span: {
						start: i.start,
						end: a.start
					}
				}, o)), i.end > a.end && (r += this.insertEntry({
					index: e.index,
					thickness: e.thickness,
					span: {
						start: a.end,
						end: i.end
					}
				}, o)), r ? (n.push.apply(n, m([{
					index: e.index,
					thickness: e.thickness,
					span: xi(a, i)
				}], o)), r) : (n.push(e), 0)
			}, e.prototype.insertEntryAt = function(e, t) {
				var n = this.entriesByLevel,
					r = this.levelCoords; - 1 === t.lateral ? (Mi(r, t.level, t.levelCoord), Mi(n, t.level, [e])) : Mi(n[t.level], t.lateral, e), this.stackCnts[Ti(e)] = t.stackCnt
			}, e.prototype.findInsertion = function(e) {
				for (var t = this.levelCoords, n = this.entriesByLevel, r = this.strictOrder, o = this.stackCnts, i = t.length, a = 0, s = -1, l = -1, u = null, c = 0, d = 0; d < i; d += 1) {
					var p = t[d];
					if (!r && p >= a + e.thickness) break;
					for (var f = n[d], h = void 0, v = Ii(f, e.span.start, Ri), g = v[0] + v[1];
						(h = f[g]) && h.span.start < e.span.end;) {
						var m = p + h.thickness;
						a < m && (a = m, u = h, s = d, l = g), m === a && (c = Math.max(c, o[Ti(h)] + 1)), g += 1
					}
				}
				var y = 0;
				if (u)
					for (y = s + 1; y < i && t[y] < a;) y += 1;
				var E = -1;
				return y < i && t[y] === a && (E = Ii(n[y], e.span.end, Ri)[0]), {
					touchingLevel: s,
					touchingLateral: l,
					touchingEntry: u,
					stackCnt: c,
					levelCoord: a,
					level: y,
					lateral: E
				}
			}, e.prototype.toRects = function() {
				for (var e = this.entriesByLevel, t = this.levelCoords, n = e.length, r = [], o = 0; o < n; o += 1)
					for (var i = e[o], a = t[o], s = 0, l = i; s < l.length; s++) {
						var u = l[s];
						r.push(N(N({}, u), {
							levelCoord: a
						}))
					}
				return r
			}, e
		}();

	function Ri(e) {
		return e.span.end
	}

	function Ti(e) {
		return e.index + ":" + e.span.start
	}

	function _i(e) {
		for (var t = [], n = 0, r = e; n < r.length; n++) {
			for (var o = r[n], i = [], a = {
					span: o.span,
					entries: [o]
				}, s = 0, l = t; s < l.length; s++) {
				var u = l[s];
				xi(u.span, a.span) ? a = {
					entries: u.entries.concat(a.entries),
					span: ki(u.span, a.span)
				} : i.push(u)
			}
			i.push(a), t = i
		}
		return t
	}

	function ki(e, t) {
		return {
			start: Math.min(e.start, t.start),
			end: Math.max(e.end, t.end)
		}
	}

	function xi(e, t) {
		var n = Math.max(e.start, t.start),
			r = Math.min(e.end, t.end);
		return n < r ? {
			start: n,
			end: r
		} : null
	}

	function Mi(e, t, n) {
		e.splice(t, 0, n)
	}

	function Ii(e, t, n) {
		var r = 0,
			o = e.length;
		if (!o || t < n(e[r])) return [0, 0];
		if (t > n(e[o - 1])) return [o, 0];
		for (; r < o;) {
			var i = Math.floor(r + (o - r) / 2),
				a = n(e[i]);
			if (t < a) o = i;
			else {
				if (!(a < t)) return [i, 1];
				r = i + 1
			}
		}
		return [r, 0]
	}
	var Pi = function() {
		function e(e) {
			this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null
		}
		return e.prototype.destroy = function() {}, e
	}();

	function Ni(e) {
		var t;
		return (t = {})[e.component.uid] = e, t
	}
	var Hi = {},
		Oi = function() {
			function e(e, t) {
				this.emitter = new io
			}
			return e.prototype.destroy = function() {}, e.prototype.setMirrorIsVisible = function(e) {}, e.prototype.setMirrorNeedsRevert = function(e) {}, e.prototype.setAutoScrollEnabled = function(e) {}, e
		}(),
		Ai = {},
		Li = {
			startTime: Rt,
			duration: Rt,
			create: Boolean,
			sourceId: String
		};

	function Ui(e) {
		var t = un(e, Li),
			n = t.refined,
			r = t.extra;
		return {
			startTime: n.startTime || null,
			duration: n.duration || null,
			create: null == n.create || n.create,
			sourceId: n.sourceId,
			leftoverProps: r
		}
	}
	var Wi = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return s(t, e), t.prototype.render = function() {
				var t = this,
					e = this.props.widgetGroups.map(function(e) {
						return t.renderWidgetGroup(e)
					});
				return fo.apply(void 0, m(["div", {
					className: "fc-toolbar-chunk"
				}], e))
			}, t.prototype.renderWidgetGroup = function(e) {
				for (var t = this.props, n = this.context.theme, r = [], o = !0, i = 0, a = e; i < a.length; i++) {
					var s = a[i],
						l = s.buttonName,
						u = s.buttonClick,
						c = s.buttonText,
						d = s.buttonIcon,
						p = s.buttonHint;
					if ("title" === l) o = !1, r.push(fo("h2", {
						className: "fc-toolbar-title",
						id: t.titleId
					}, t.title));
					else {
						var f = l === t.activeButton,
							h = !t.isTodayEnabled && "today" === l || !t.isPrevEnabled && "prev" === l || !t.isNextEnabled && "next" === l,
							v = ["fc-" + l + "-button", n.getClass("button")];
						f && v.push(n.getClass("buttonActive")), r.push(fo("button", {
							type: "button",
							title: "function" == typeof p ? p(t.navUnit) : p,
							disabled: h,
							"aria-pressed": f,
							className: v.join(" "),
							onClick: u
						}, c || (d ? fo("span", {
							className: d
						}) : "")))
					}
				}
				if (1 < r.length) {
					var g = o && n.getClass("buttonGroup") || "";
					return fo.apply(void 0, m(["div", {
						className: g
					}], r))
				}
				return r[0]
			}, t
		}(Ro),
		Vi = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return s(t, e), t.prototype.render = function() {
				var e, t, n = this.props,
					r = n.model,
					o = n.extraClassName,
					i = !1,
					a = r.sectionWidgets,
					s = a.center;
				return e = a.left ? (i = !0, a.left) : a.start, t = a.right ? (i = !0, a.right) : a.end, fo("div", {
					className: [o || "", "fc-toolbar", i ? "fc-toolbar-ltr" : ""].join(" ")
				}, this.renderSection("start", e || []), this.renderSection("center", s || []), this.renderSection("end", t || []))
			}, t.prototype.renderSection = function(e, t) {
				var n = this.props;
				return fo(Wi, {
					key: e,
					widgetGroups: t,
					title: n.title,
					navUnit: n.navUnit,
					activeButton: n.activeButton,
					isTodayEnabled: n.isTodayEnabled,
					isPrevEnabled: n.isPrevEnabled,
					isNextEnabled: n.isNextEnabled,
					titleId: n.titleId
				})
			}, t
		}(Ro),
		Fi = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.state = {
					availableWidth: null
				}, t.handleEl = function(e) {
					t.el = e, ko(t.props.elRef, e), t.updateAvailableWidth()
				}, t.handleResize = function() {
					t.updateAvailableWidth()
				}, t
			}
			return s(t, e), t.prototype.render = function() {
				var e = this.props,
					t = this.state,
					n = e.aspectRatio,
					r = ["fc-view-harness", n || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"],
					o = "",
					i = "";
				return n ? null !== t.availableWidth ? o = t.availableWidth / n : i = 1 / n * 100 + "%" : o = e.height || "", fo("div", {
					"aria-labelledby": e.labeledById,
					ref: this.handleEl,
					className: r.join(" "),
					style: {
						height: o,
						paddingBottom: i
					}
				}, e.children)
			}, t.prototype.componentDidMount = function() {
				this.context.addResizeHandler(this.handleResize)
			}, t.prototype.componentWillUnmount = function() {
				this.context.removeResizeHandler(this.handleResize)
			}, t.prototype.updateAvailableWidth = function() {
				this.el && this.props.aspectRatio && this.setState({
					availableWidth: this.el.offsetWidth
				})
			}, t
		}(Ro),
		Bi = function(t) {
			function e(e) {
				var s = t.call(this, e) || this;
				return s.handleSegClick = function(e, t) {
					var n = s.component,
						r = n.context,
						o = zn(t);
					if (o && n.isValidSegDownEl(e.target)) {
						var i = ve(e.target, ".fc-event-forced-url"),
							a = i ? i.querySelector("a[href]").href : "";
						r.emitter.trigger("eventClick", {
							el: t,
							event: new mr(n.context, o.eventRange.def, o.eventRange.instance),
							jsEvent: e,
							view: r.viewApi
						}), a && !e.defaultPrevented && (window.location.href = a)
					}
				}, s.destroy = Te(e.el, "click", ".fc-event", s.handleSegClick), s
			}
			return s(e, t), e
		}(Pi),
		zi = function(a) {
			function e(e) {
				var t, r, o, i, n = a.call(this, e) || this;
				return n.handleEventElRemove = function(e) {
					e === n.currentSegEl && n.handleSegLeave(null, n.currentSegEl)
				}, n.handleSegEnter = function(e, t) {
					zn(t) && (n.currentSegEl = t, n.triggerEvent("eventMouseEnter", e, t))
				}, n.handleSegLeave = function(e, t) {
					n.currentSegEl && (n.currentSegEl = null, n.triggerEvent("eventMouseLeave", e, t))
				}, n.removeHoverListeners = (t = e.el, ".fc-event", r = n.handleSegEnter, o = n.handleSegLeave, Te(t, "mouseover", ".fc-event", function(e, t) {
					if (t !== i) {
						r(e, i = t);
						var n = function(e) {
							i = null, o(e, t), t.removeEventListener("mouseleave", n)
						};
						t.addEventListener("mouseleave", n)
					}
				})), n
			}
			return s(e, a), e.prototype.destroy = function() {
				this.removeHoverListeners()
			}, e.prototype.triggerEvent = function(e, t, n) {
				var r = this.component,
					o = r.context,
					i = zn(n);
				t && !r.isValidSegDownEl(t.target) || o.emitter.trigger(e, {
					el: n,
					event: new mr(o, i.eventRange.def, i.eventRange.instance),
					jsEvent: t,
					view: o.viewApi
				})
			}, e
		}(Pi),
		ji = function(e) {
			function t() {
				var i = null !== e && e.apply(this, arguments) || this;
				return i.buildViewContext = Ut(Co), i.buildViewPropTransformers = Ut(qi), i.buildToolbarProps = Ut(Gi), i.headerRef = vo(), i.footerRef = vo(), i.interactionsStore = {}, i.state = {
					viewLabelId: we()
				}, i.registerInteractiveComponent = function(e, t) {
					var n, r = {
							component: e,
							el: (n = t).el,
							useEventCenter: null == n.useEventCenter || n.useEventCenter,
							isHitComboAllowed: n.isHitComboAllowed || null
						},
						o = [Bi, zi].concat(i.props.pluginHooks.componentInteractions).map(function(e) {
							return new e(r)
						});
					i.interactionsStore[e.uid] = o, Hi[e.uid] = r
				}, i.unregisterInteractiveComponent = function(e) {
					var t = i.interactionsStore[e.uid];
					if (t) {
						for (var n = 0, r = t; n < r.length; n++) r[n].destroy();
						delete i.interactionsStore[e.uid]
					}
					delete Hi[e.uid]
				}, i.resizeRunner = new ui(function() {
					i.props.emitter.trigger("_resize", !0), i.props.emitter.trigger("windowResize", {
						view: i.props.viewApi
					})
				}), i.handleWindowResize = function(e) {
					var t = i.props.options;
					t.handleWindowResize && e.target === window && i.resizeRunner.request(t.windowResizeDelay)
				}, i
			}
			return s(t, e), t.prototype.render = function() {
				var e, t = this.props,
					n = t.toolbarConfig,
					r = t.options,
					o = this.buildToolbarProps(t.viewSpec, t.dateProfile, t.dateProfileGenerator, t.currentDate, vr(t.options.now, t.dateEnv), t.viewTitle),
					i = !1,
					a = "";
				t.isHeightAuto || t.forPrint ? a = "" : null != r.height ? i = !0 : null != r.contentHeight ? a = r.contentHeight : e = Math.max(r.aspectRatio, .5);
				var s = this.buildViewContext(t.viewSpec, t.viewApi, t.options, t.dateProfileGenerator, t.dateEnv, t.theme, t.pluginHooks, t.dispatch, t.getCurrentData, t.emitter, t.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent),
					l = n.header && n.header.hasTitle ? this.state.viewLabelId : "";
				return fo(Do.Provider, {
					value: s
				}, n.header && fo(Vi, N({
					ref: this.headerRef,
					extraClassName: "fc-header-toolbar",
					model: n.header,
					titleId: l
				}, o)), fo(Fi, {
					liquid: i,
					height: a,
					aspectRatio: e,
					labeledById: l
				}, this.renderView(t), this.buildAppendContent()), n.footer && fo(Vi, N({
					ref: this.footerRef,
					extraClassName: "fc-footer-toolbar",
					model: n.footer,
					titleId: ""
				}, o)))
			}, t.prototype.componentDidMount = function() {
				var t = this.props;
				this.calendarInteractions = t.pluginHooks.calendarInteractions.map(function(e) {
					return new e(t)
				}), window.addEventListener("resize", this.handleWindowResize);
				var e = t.pluginHooks.propSetHandlers;
				for (var n in e) e[n](t[n], t)
			}, t.prototype.componentDidUpdate = function(e) {
				var t = this.props,
					n = t.pluginHooks.propSetHandlers;
				for (var r in n) t[r] !== e[r] && n[r](t[r], t)
			}, t.prototype.componentWillUnmount = function() {
				window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
				for (var e = 0, t = this.calendarInteractions; e < t.length; e++) t[e].destroy();
				this.props.emitter.trigger("_unmount")
			}, t.prototype.buildAppendContent = function() {
				var t = this.props,
					e = t.pluginHooks.viewContainerAppends.map(function(e) {
						return e(t)
					});
				return fo.apply(void 0, m([go, {}], e))
			}, t.prototype.renderView = function(e) {
				for (var t = e.pluginHooks, n = e.viewSpec, r = {
						dateProfile: e.dateProfile,
						businessHours: e.businessHours,
						eventStore: e.renderableEventStore,
						eventUiBases: e.eventUiBases,
						dateSelection: e.dateSelection,
						eventSelection: e.eventSelection,
						eventDrag: e.eventDrag,
						eventResize: e.eventResize,
						isHeightAuto: e.isHeightAuto,
						forPrint: e.forPrint
					}, o = 0, i = this.buildViewPropTransformers(t.viewPropsTransformers); o < i.length; o++) {
					var a = i[o];
					N(r, a.transform(r, e))
				}
				var s = n.component;
				return fo(s, N({}, r))
			}, t
		}(wo);

	function Gi(e, t, n, r, o, i) {
		var a = n.build(o, void 0, !1),
			s = n.buildPrev(t, r, !1),
			l = n.buildNext(t, r, !1);
		return {
			title: i,
			activeButton: e.type,
			navUnit: e.singleUnit,
			isTodayEnabled: a.isValid && !Wn(t.currentRange, o),
			isPrevEnabled: s.isValid,
			isNextEnabled: l.isValid
		}
	}

	function qi(e) {
		return e.map(function(e) {
			return new e
		})
	}
	var Yi = function(t) {
		function e() {
			var e = null !== t && t.apply(this, arguments) || this;
			return e.state = {
				forPrint: !1
			}, e.handleBeforePrint = function() {
				e.setState({
					forPrint: !0
				})
			}, e.handleAfterPrint = function() {
				e.setState({
					forPrint: !1
				})
			}, e
		}
		return s(e, t), e.prototype.render = function() {
			var e = this.props,
				t = e.options,
				n = this.state.forPrint,
				r = n || "auto" === t.height || "auto" === t.contentHeight,
				o = r || null == t.height ? "" : t.height,
				i = ["fc", n ? "fc-media-print" : "fc-media-screen", "fc-direction-" + t.direction, e.theme.getClass("root")];
			return Vr() || i.push("fc-liquid-hack"), e.children(i, o, r, n)
		}, e.prototype.componentDidMount = function() {
			var e = this.props.emitter;
			e.on("_beforeprint", this.handleBeforePrint), e.on("_afterprint", this.handleAfterPrint)
		}, e.prototype.componentWillUnmount = function() {
			var e = this.props.emitter;
			e.off("_beforeprint", this.handleBeforePrint), e.off("_afterprint", this.handleAfterPrint)
		}, e
	}(Ro);

	function Zi(e, t) {
		return Qt(!e || 10 < t ? {
			weekday: "short"
		} : 1 < t ? {
			weekday: "short",
			month: "numeric",
			day: "numeric",
			omitCommas: !0
		} : {
			weekday: "long"
		})
	}
	var Xi = "fc-col-header-cell";

	function Ki(e) {
		return e.text
	}
	var $i = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return s(t, e), t.prototype.render = function() {
				var e = this.context,
					t = e.dateEnv,
					n = e.options,
					r = e.theme,
					o = e.viewApi,
					i = this.props,
					a = i.date,
					s = i.dateProfile,
					l = jr(a, i.todayRange, null, s),
					u = [Xi].concat(Gr(l, r)),
					c = t.format(a, i.dayHeaderFormat),
					d = !l.isDisabled && 1 < i.colCnt ? Zr(this.context, a) : {},
					p = N(N(N({
						date: t.toDate(a),
						view: o
					}, i.extraHookProps), {
						text: c
					}), l);
				return fo(No, {
					hookProps: p,
					classNames: n.dayHeaderClassNames,
					content: n.dayHeaderContent,
					defaultContent: Ki,
					didMount: n.dayHeaderDidMount,
					willUnmount: n.dayHeaderWillUnmount
				}, function(e, t, n, r) {
					return fo("th", N({
						ref: e,
						role: "columnheader",
						className: u.concat(t).join(" "),
						"data-date": l.isDisabled ? void 0 : Ht(a),
						colSpan: i.colSpan
					}, i.extraDataAttrs), fo("div", {
						className: "fc-scrollgrid-sync-inner"
					}, !l.isDisabled && fo("a", N({
						ref: n,
						className: ["fc-col-header-cell-cushion", i.isSticky ? "fc-sticky" : ""].join(" ")
					}, d), r)))
				})
			}, t
		}(Ro),
		Ji = Qt({
			weekday: "long"
		}),
		Qi = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return s(t, e), t.prototype.render = function() {
				var o = this.props,
					e = this.context,
					i = e.dateEnv,
					t = e.theme,
					n = e.viewApi,
					r = e.options,
					a = Ke(new Date(2592e5), o.dow),
					s = {
						dow: o.dow,
						isDisabled: !1,
						isFuture: !1,
						isPast: !1,
						isToday: !1,
						isOther: !1
					},
					l = [Xi].concat(Gr(s, t), o.extraClassNames || []),
					u = i.format(a, o.dayHeaderFormat),
					c = N(N(N(N({
						date: a
					}, s), {
						view: n
					}), o.extraHookProps), {
						text: u
					});
				return fo(No, {
					hookProps: c,
					classNames: r.dayHeaderClassNames,
					content: r.dayHeaderContent,
					defaultContent: Ki,
					didMount: r.dayHeaderDidMount,
					willUnmount: r.dayHeaderWillUnmount
				}, function(e, t, n, r) {
					return fo("th", N({
						ref: e,
						role: "columnheader",
						className: l.concat(t).join(" "),
						colSpan: o.colSpan
					}, o.extraDataAttrs), fo("div", {
						className: "fc-scrollgrid-sync-inner"
					}, fo("a", {
						"aria-label": i.format(a, Ji),
						className: ["fc-col-header-cell-cushion", o.isSticky ? "fc-sticky" : ""].join(" "),
						ref: n
					}, r)))
				})
			}, t
		}(Ro),
		ea = function(r) {
			function e(e, t) {
				var n = r.call(this, e, t) || this;
				return n.initialNowDate = vr(t.options.now, t.dateEnv), n.initialNowQueriedMs = (new Date).valueOf(), n.state = n.computeTiming().currentState, n
			}
			return s(e, r), e.prototype.render = function() {
				var e = this.props,
					t = this.state;
				return e.children(t.nowDate, t.todayRange)
			}, e.prototype.componentDidMount = function() {
				this.setTimeout()
			}, e.prototype.componentDidUpdate = function(e) {
				e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout())
			}, e.prototype.componentWillUnmount = function() {
				this.clearTimeout()
			}, e.prototype.computeTiming = function() {
				var e = this.props,
					t = this.context,
					n = $e(this.initialNowDate, (new Date).valueOf() - this.initialNowQueriedMs),
					r = t.dateEnv.startOf(n, e.unit),
					o = t.dateEnv.add(r, Rt(1, e.unit)),
					i = o.valueOf() - n.valueOf();
				return i = Math.min(864e5, i), {
					currentState: {
						nowDate: r,
						todayRange: ta(r)
					},
					nextState: {
						nowDate: o,
						todayRange: ta(o)
					},
					waitMs: i
				}
			}, e.prototype.setTimeout = function() {
				var e = this,
					t = this.computeTiming(),
					n = t.nextState,
					r = t.waitMs;
				this.timeoutId = setTimeout(function() {
					e.setState(n, function() {
						e.setTimeout()
					})
				}, r)
			}, e.prototype.clearTimeout = function() {
				this.timeoutId && clearTimeout(this.timeoutId)
			}, e.contextType = Do, e
		}(po);

	function ta(e) {
		var t = rt(e);
		return {
			start: t,
			end: Ke(t, 1)
		}
	}
	var na = function(t) {
		function e() {
			var e = null !== t && t.apply(this, arguments) || this;
			return e.createDayHeaderFormatter = Ut(ra), e
		}
		return s(e, t), e.prototype.render = function() {
			var e = this.context,
				t = this.props,
				n = t.dates,
				r = t.dateProfile,
				o = t.datesRepDistinctDays,
				i = t.renderIntro,
				a = this.createDayHeaderFormatter(e.options.dayHeaderFormat, o, n.length);
			return fo(ea, {
				unit: "day"
			}, function(e, t) {
				return fo("tr", {
					role: "row"
				}, i && i("day"), n.map(function(e) {
					return o ? fo($i, {
						key: e.toISOString(),
						date: e,
						dateProfile: r,
						todayRange: t,
						colCnt: n.length,
						dayHeaderFormat: a
					}) : fo(Qi, {
						key: e.getUTCDay(),
						dow: e.getUTCDay(),
						dayHeaderFormat: a
					})
				}))
			})
		}, e
	}(Ro);

	function ra(e, t, n) {
		return e || Zi(t, n)
	}
	var oa = function() {
			function e(e, t) {
				for (var n = e.start, r = e.end, o = [], i = [], a = -1; n < r;) t.isHiddenDay(n) ? o.push(a + .5) : (a += 1, o.push(a), i.push(n)), n = Ke(n, 1);
				this.dates = i, this.indices = o, this.cnt = i.length
			}
			return e.prototype.sliceRange = function(e) {
				var t = this.getDateDayIndex(e.start),
					n = this.getDateDayIndex(Ke(e.end, -1)),
					r = Math.max(0, t),
					o = Math.min(this.cnt - 1, n);
				return (r = Math.ceil(r)) <= (o = Math.floor(o)) ? {
					firstIndex: r,
					lastIndex: o,
					isStart: t === r,
					isEnd: n === o
				} : null
			}, e.prototype.getDateDayIndex = function(e) {
				var t = this.indices,
					n = Math.floor(Qe(this.dates[0], e));
				return n < 0 ? t[0] - 1 : n >= t.length ? t[t.length - 1] + 1 : t[n]
			}, e
		}(),
		ia = function() {
			function e(e, t) {
				var n, r, o, i = e.dates;
				if (t) {
					for (r = i[0].getUTCDay(), n = 1; n < i.length && i[n].getUTCDay() !== r; n += 1);
					o = Math.ceil(i.length / n)
				} else o = 1, n = i.length;
				this.rowCnt = o, this.colCnt = n, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates()
			}
			return e.prototype.buildCells = function() {
				for (var e = [], t = 0; t < this.rowCnt; t += 1) {
					for (var n = [], r = 0; r < this.colCnt; r += 1) n.push(this.buildCell(t, r));
					e.push(n)
				}
				return e
			}, e.prototype.buildCell = function(e, t) {
				var n = this.daySeries.dates[e * this.colCnt + t];
				return {
					key: n.toISOString(),
					date: n
				}
			}, e.prototype.buildHeaderDates = function() {
				for (var e = [], t = 0; t < this.colCnt; t += 1) e.push(this.cells[0][t].date);
				return e
			}, e.prototype.sliceRange = function(e) {
				var t = this.colCnt,
					n = this.daySeries.sliceRange(e),
					r = [];
				if (n)
					for (var o = n.firstIndex, i = n.lastIndex, a = o; a <= i;) {
						var s = Math.floor(a / t),
							l = Math.min((s + 1) * t, i + 1);
						r.push({
							row: s,
							firstCol: a % t,
							lastCol: (l - 1) % t,
							isStart: n.isStart && a === o,
							isEnd: n.isEnd && l - 1 === i
						}), a = l
					}
				return r
			}, e
		}(),
		aa = function() {
			function e() {
				this.sliceBusinessHours = Ut(this._sliceBusinessHours), this.sliceDateSelection = Ut(this._sliceDateSpan), this.sliceEventStore = Ut(this._sliceEventStore), this.sliceEventDrag = Ut(this._sliceInteraction), this.sliceEventResize = Ut(this._sliceInteraction), this.forceDayIfListItem = !1
			}
			return e.prototype.sliceProps = function(e, t, n, r) {
				for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
				var a = e.eventUiBases,
					s = this.sliceEventStore.apply(this, m([e.eventStore, a, t, n], o));
				return {
					dateSelectionSegs: this.sliceDateSelection.apply(this, m([e.dateSelection, a, r], o)),
					businessHourSegs: this.sliceBusinessHours.apply(this, m([e.businessHours, t, n, r], o)),
					fgEventSegs: s.fg,
					bgEventSegs: s.bg,
					eventDrag: this.sliceEventDrag.apply(this, m([e.eventDrag, a, t, n], o)),
					eventResize: this.sliceEventResize.apply(this, m([e.eventResize, a, t, n], o)),
					eventSelection: e.eventSelection
				}
			}, e.prototype.sliceNowDate = function(e, t) {
				for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
				return this._sliceDateSpan.apply(this, m([{
					range: {
						start: e,
						end: $e(e, 1)
					},
					allDay: !1
				}, {}, t], n))
			}, e.prototype._sliceBusinessHours = function(e, t, n, r) {
				for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
				return e ? this._sliceEventStore.apply(this, m([Dt(e, sa(t, Boolean(n)), r), {}, t, n], o)).bg : []
			}, e.prototype._sliceEventStore = function(e, t, n, r) {
				for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
				if (e) {
					var a = Vn(e, t, sa(n, Boolean(r)), r);
					return {
						bg: this.sliceEventRanges(a.bg, o),
						fg: this.sliceEventRanges(a.fg, o)
					}
				}
				return {
					bg: [],
					fg: []
				}
			}, e.prototype._sliceInteraction = function(e, t, n, r) {
				for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
				if (!e) return null;
				var a = Vn(e.mutatedEvents, t, sa(n, Boolean(r)), r);
				return {
					segs: this.sliceEventRanges(a.fg, o),
					affectedInstances: e.affectedEvents.instances,
					isEvent: e.isEvent
				}
			}, e.prototype._sliceDateSpan = function(e, t, n) {
				for (var r = [], o = 3; o < arguments.length; o++) r[o - 3] = arguments[o];
				if (!e) return [];
				for (var i = (u = e, c = t, f = p = void 0, p = Tn({
						editable: !1
					}, d = n), {
						def: f = kn(p.refined, p.extra, "", u.allDay, !0, d),
						ui: Gn(f, c),
						instance: dt(f.defId, u.range),
						range: u.range,
						isStart: !0,
						isEnd: !0
					}), a = this.sliceRange.apply(this, m([e.range], r)), s = 0, l = a; s < l.length; s++) {
					l[s].eventRange = i
				}
				var u, c, d, p, f;
				return a
			}, e.prototype.sliceEventRanges = function(e, t) {
				for (var n = [], r = 0, o = e; r < o.length; r++) {
					var i = o[r];
					n.push.apply(n, this.sliceEventRange(i, t))
				}
				return n
			}, e.prototype.sliceEventRange = function(e, t) {
				var n = e.range;
				this.forceDayIfListItem && "list-item" === e.ui.display && (n = {
					start: n.start,
					end: Ke(n.start, 1)
				});
				for (var r = this.sliceRange.apply(this, m([n], t)), o = 0, i = r; o < i.length; o++) {
					var a = i[o];
					a.eventRange = e, a.isStart = e.isStart && a.isStart, a.isEnd = e.isEnd && a.isEnd
				}
				return r
			}, e
		}();

	function sa(e, t) {
		var n = e.activeRange;
		return t ? n : {
			start: $e(n.start, e.slotMinTime.milliseconds),
			end: $e(n.end, e.slotMaxTime.milliseconds - 864e5)
		}
	}

	function la(e, t, n) {
		var r = e.mutatedEvents.instances;
		for (var o in r)
			if (!Un(t.validRange, r[o].range)) return !1;
		return ca({
			eventDrag: e
		}, n)
	}

	function ua(e, t, n) {
		return !!Un(t.validRange, e.range) && ca({
			dateSelection: e
		}, n)
	}

	function ca(e, t) {
		var n = t.getCurrentData(),
			r = N({
				businessHours: n.businessHours,
				dateSelection: "",
				eventStore: n.eventStore,
				eventUiBases: n.eventUiBases,
				eventSelection: "",
				eventDrag: null,
				eventResize: null
			}, e);
		return (t.pluginHooks.isPropsValid || da)(r, t)
	}

	function da(e, t, n, r) {
		return void 0 === n && (n = {}), !(e.eventDrag && ! function(e, t, n, r) {
			var o = t.getCurrentData(),
				i = e.eventDrag,
				a = i.mutatedEvents,
				s = a.defs,
				l = a.instances,
				u = jn(s, i.isEvent ? e.eventUiBases : {
					"": o.selectionConfig
				});
			r && (u = vt(u, r));
			var c, d, p = (c = e.eventStore, d = i.affectedEvents.instances, {
					defs: c.defs,
					instances: ht(c.instances, function(e) {
						return !d[e.instanceId]
					})
				}),
				f = p.defs,
				h = p.instances,
				v = jn(f, e.eventUiBases);
			for (var g in l) {
				var m = l[g],
					y = m.range,
					E = u[m.defId],
					S = s[m.defId];
				if (!pa(E.constraints, y, p, e.businessHours, t)) return !1;
				var b = t.options.eventOverlap,
					D = "function" == typeof b ? b : null;
				for (var C in h) {
					var w = h[C];
					if (Ln(y, w.range)) {
						if (!1 === v[w.defId].overlap && i.isEvent) return !1;
						if (!1 === E.overlap) return !1;
						if (D && !D(new mr(t, f[w.defId], w), new mr(t, S, m))) return !1
					}
				}
				for (var R = o.eventStore, T = 0, _ = E.allows; T < _.length; T++) {
					var k, x = _[T],
						M = N(N({}, n), {
							range: m.range,
							allDay: S.allDay
						}),
						I = R.defs[S.defId],
						P = R.instances[g];
					if (k = I ? new mr(t, I, P) : new mr(t, S), !x(sr(M, t), k)) return !1
				}
			}
			return !0
		}(e, t, n, r) || e.dateSelection && ! function(e, t, n, r) {
			var o = e.eventStore,
				i = o.defs,
				a = o.instances,
				s = e.dateSelection,
				l = s.range,
				u = t.getCurrentData().selectionConfig;
			if (r && (u = r(u)), !pa(u.constraints, l, o, e.businessHours, t)) return !1;
			var c = t.options.selectOverlap,
				d = "function" == typeof c ? c : null;
			for (var p in a) {
				var f = a[p];
				if (Ln(l, f.range)) {
					if (!1 === u.overlap) return !1;
					if (d && !d(new mr(t, i[f.defId], f), null)) return !1
				}
			}
			for (var h = 0, v = u.allows; h < v.length; h++)
				if (!(0, v[h])(sr(N(N({}, n), s), t), null)) return !1;
			return !0
		}(e, t, n, r))
	}

	function pa(e, t, n, r, o) {
		for (var i = 0, a = e; i < a.length; i++)
			if (!va(fa(a[i], t, n, r, o), t)) return !1;
		return !0
	}

	function fa(t, e, n, r, o) {
		return "businessHours" === t ? ha(Dt(r, e, o)) : "string" == typeof t ? ha(vn(n, function(e) {
			return e.groupId === t
		})) : "object" == typeof t && t ? ha(Dt(t, e, o)) : []
	}

	function ha(e) {
		var t = e.instances,
			n = [];
		for (var r in t) n.push(t[r].range);
		return n
	}

	function va(e, t) {
		for (var n = 0, r = e; n < r.length; n++)
			if (Un(r[n], t)) return !0;
		return !1
	}
	var ga = /^(visible|hidden)$/,
		ma = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.handleEl = function(e) {
					t.el = e, ko(t.props.elRef, e)
				}, t
			}
			return s(t, e), t.prototype.render = function() {
				var e = this.props,
					t = e.liquid,
					n = e.liquidIsAbsolute,
					r = t && n,
					o = ["fc-scroller"];
				return t && (n ? o.push("fc-scroller-liquid-absolute") : o.push("fc-scroller-liquid")), fo("div", {
					ref: this.handleEl,
					className: o.join(" "),
					style: {
						overflowX: e.overflowX,
						overflowY: e.overflowY,
						left: r && -(e.overcomeLeft || 0) || "",
						right: r && -(e.overcomeRight || 0) || "",
						bottom: r && -(e.overcomeBottom || 0) || "",
						marginLeft: !r && -(e.overcomeLeft || 0) || "",
						marginRight: !r && -(e.overcomeRight || 0) || "",
						marginBottom: !r && -(e.overcomeBottom || 0) || "",
						maxHeight: e.maxHeight || ""
					}
				}, e.children)
			}, t.prototype.needsXScrolling = function() {
				if (ga.test(this.props.overflowX)) return !1;
				for (var e = this.el, t = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), n = e.children, r = 0; r < n.length; r += 1)
					if (n[r].getBoundingClientRect().width > t) return !0;
				return !1
			}, t.prototype.needsYScrolling = function() {
				if (ga.test(this.props.overflowY)) return !1;
				for (var e = this.el, t = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), n = e.children, r = 0; r < n.length; r += 1)
					if (n[r].getBoundingClientRect().height > t) return !0;
				return !1
			}, t.prototype.getXScrollbarWidth = function() {
				return ga.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight
			}, t.prototype.getYScrollbarWidth = function() {
				return ga.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth
			}, t
		}(Ro),
		ya = function() {
			function e(e) {
				var s = this;
				this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = function(e, t) {
					var n = s,
						r = n.depths,
						o = n.currentMap,
						i = !1,
						a = !1;
					null !== e ? (i = t in o, o[t] = e, r[t] = (r[t] || 0) + 1, a = !0) : (r[t] -= 1, r[t] || (delete o[t], delete s.callbackMap[t], i = !0)), s.masterCallback && (i && s.masterCallback(null, String(t)), a && s.masterCallback(e, String(t)))
				}
			}
			return e.prototype.createRef = function(t) {
				var n = this,
					e = this.callbackMap[t];
				return e || (e = this.callbackMap[t] = function(e) {
					n.handleValue(e, String(t))
				}), e
			}, e.prototype.collect = function(e, t, n) {
				return bt(this.currentMap, e, t, n)
			}, e.prototype.getAll = function() {
				return mt(this.currentMap)
			}, e
		}();

	function Ea(e) {
		for (var t = 0, n = 0, r = me(e, ".fc-scrollgrid-shrink"); n < r.length; n++) {
			var o = r[n];
			t = Math.max(t, Ye(o))
		}
		return Math.ceil(t)
	}

	function Sa(e, t) {
		return e.liquid && t.liquid
	}

	function ba(e, t) {
		return null != t.maxHeight || Sa(e, t)
	}

	function Da(e, t, n, r) {
		var o = n.expandRows;
		return "function" == typeof t.content ? t.content(n) : fo("table", {
			role: "presentation",
			className: [t.tableClassName, e.syncRowHeights ? "fc-scrollgrid-sync-table" : ""].join(" "),
			style: {
				minWidth: n.tableMinWidth,
				width: n.clientWidth,
				height: o ? n.clientHeight : ""
			}
		}, n.tableColGroupNode, fo(r ? "thead" : "tbody", {
			role: "presentation"
		}, "function" == typeof t.rowContent ? t.rowContent(n) : t.rowContent))
	}

	function Ca(e, t) {
		return Lt(e, t, yt)
	}

	function wa(e, t) {
		for (var n = [], r = 0, o = e; r < o.length; r++)
			for (var i = o[r], a = i.span || 1, s = 0; s < a; s += 1) n.push(fo("col", {
				style: {
					width: "shrink" === i.width ? Ra(t) : i.width || "",
					minWidth: i.minWidth || ""
				}
			}));
		return fo.apply(void 0, m(["colgroup", {}], n))
	}

	function Ra(e) {
		return null == e ? 4 : e
	}

	function Ta(e) {
		for (var t = 0, n = e; t < n.length; t++)
			if ("shrink" === n[t].width) return !0;
		return !1
	}

	function _a(e, t) {
		var n = ["fc-scrollgrid", t.theme.getClass("table")];
		return e && n.push("fc-scrollgrid-liquid"), n
	}

	function ka(e, t) {
		var n = ["fc-scrollgrid-section", "fc-scrollgrid-section-" + e.type, e.className];
		return t && e.liquid && null == e.maxHeight && n.push("fc-scrollgrid-section-liquid"), e.isSticky && n.push("fc-scrollgrid-section-sticky"), n
	}

	function xa(e) {
		return fo("div", {
			className: "fc-scrollgrid-sticky-shim",
			style: {
				width: e.clientWidth,
				minWidth: e.tableMinWidth
			}
		})
	}

	function Ma(e) {
		var t = e.stickyHeaderDates;
		return null != t && "auto" !== t || (t = "auto" === e.height || "auto" === e.viewHeight), t
	}

	function Ia(e) {
		var t = e.stickyFooterScrollbar;
		return null != t && "auto" !== t || (t = "auto" === e.height || "auto" === e.viewHeight), t
	}
	var Pa = function(t) {
		function e() {
			var e = null !== t && t.apply(this, arguments) || this;
			return e.processCols = Ut(function(e) {
				return e
			}, Ca), e.renderMicroColGroup = Ut(wa), e.scrollerRefs = new ya, e.scrollerElRefs = new ya(e._handleScrollerEl.bind(e)), e.state = {
				shrinkWidth: null,
				forceYScrollbars: !1,
				scrollerClientWidths: {},
				scrollerClientHeights: {}
			}, e.handleSizing = function() {
				e.safeSetState(N({
					shrinkWidth: e.computeShrinkWidth()
				}, e.computeScrollerDims()))
			}, e
		}
		return s(e, t), e.prototype.render = function() {
			var e = this.props,
				t = this.state,
				n = this.context,
				r = e.sections || [],
				o = this.processCols(e.cols),
				i = this.renderMicroColGroup(o, t.shrinkWidth),
				a = _a(e.liquid, n);
			e.collapsibleWidth && a.push("fc-scrollgrid-collapsible");
			for (var s, l = r.length, u = 0, c = [], d = [], p = []; u < l && "header" === (s = r[u]).type;) c.push(this.renderSection(s, i, !0)), u += 1;
			for (; u < l && "body" === (s = r[u]).type;) d.push(this.renderSection(s, i, !1)), u += 1;
			for (; u < l && "footer" === (s = r[u]).type;) p.push(this.renderSection(s, i, !0)), u += 1;
			var f = !Vr(),
				h = {
					role: "rowgroup"
				};
			return fo("table", {
				role: "grid",
				className: a.join(" "),
				style: {
					height: e.height
				}
			}, Boolean(!f && c.length) && fo.apply(void 0, m(["thead", h], c)), Boolean(!f && d.length) && fo.apply(void 0, m(["tbody", h], d)), Boolean(!f && p.length) && fo.apply(void 0, m(["tfoot", h], p)), f && fo.apply(void 0, m(m(m(["tbody", h], c), d), p)))
		}, e.prototype.renderSection = function(e, t, n) {
			return "outerContent" in e ? fo(go, {
				key: e.key
			}, e.outerContent) : fo("tr", {
				key: e.key,
				role: "presentation",
				className: ka(e, this.props.liquid).join(" ")
			}, this.renderChunkTd(e, t, e.chunk, n))
		}, e.prototype.renderChunkTd = function(e, t, n, r) {
			if ("outerContent" in n) return n.outerContent;
			var o = this.props,
				i = this.state,
				a = i.forceYScrollbars,
				s = i.scrollerClientWidths,
				l = i.scrollerClientHeights,
				u = ba(o, e),
				c = Sa(o, e),
				d = o.liquid ? a ? "scroll" : u ? "auto" : "hidden" : "visible",
				p = e.key,
				f = Da(e, n, {
					tableColGroupNode: t,
					tableMinWidth: "",
					clientWidth: o.collapsibleWidth || void 0 === s[p] ? null : s[p],
					clientHeight: void 0 !== l[p] ? l[p] : null,
					expandRows: e.expandRows,
					syncRowHeights: !1,
					rowSyncHeights: [],
					reportRowHeightChange: function() {}
				}, r);
			return fo(r ? "th" : "td", {
				ref: n.elRef,
				role: "presentation"
			}, fo("div", {
				className: "fc-scroller-harness" + (c ? " fc-scroller-harness-liquid" : "")
			}, fo(ma, {
				ref: this.scrollerRefs.createRef(p),
				elRef: this.scrollerElRefs.createRef(p),
				overflowY: d,
				overflowX: o.liquid ? "hidden" : "visible",
				maxHeight: e.maxHeight,
				liquid: c,
				liquidIsAbsolute: !0
			}, f)))
		}, e.prototype._handleScrollerEl = function(e, t) {
			var n = function(e, t) {
				for (var n = 0, r = e; n < r.length; n++) {
					var o = r[n];
					if (o.key === t) return o
				}
				return null
			}(this.props.sections, t);
			n && ko(n.chunk.scrollerElRef, e)
		}, e.prototype.componentDidMount = function() {
			this.handleSizing(), this.context.addResizeHandler(this.handleSizing)
		}, e.prototype.componentDidUpdate = function() {
			this.handleSizing()
		}, e.prototype.componentWillUnmount = function() {
			this.context.removeResizeHandler(this.handleSizing)
		}, e.prototype.computeShrinkWidth = function() {
			return Ta(this.props.cols) ? Ea(this.scrollerElRefs.getAll()) : 0
		}, e.prototype.computeScrollerDims = function() {
			var e = Jr(),
				t = this.scrollerRefs,
				n = this.scrollerElRefs,
				r = !1,
				o = {},
				i = {};
			for (var a in t.currentMap) {
				var s = t.currentMap[a];
				if (s && s.needsYScrolling()) {
					r = !0;
					break
				}
			}
			for (var l = 0, u = this.props.sections; l < u.length; l++) {
				a = u[l].key;
				var c = n.currentMap[a];
				if (c) {
					var d = c.parentNode;
					o[a] = Math.floor(d.getBoundingClientRect().width - (r ? e.y : 0)), i[a] = Math.floor(d.getBoundingClientRect().height)
				}
			}
			return {
				forceYScrollbars: r,
				scrollerClientWidths: o,
				scrollerClientHeights: i
			}
		}, e
	}(Ro);
	Pa.addStateEquality({
		scrollerClientWidths: yt,
		scrollerClientHeights: yt
	});
	var Na = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.elRef = vo(), e
			}
			return s(e, t), e.prototype.render = function() {
				var o = this.props,
					e = this.context,
					t = e.options,
					n = o.seg,
					r = n.eventRange,
					i = r.ui,
					a = {
						event: new mr(e, r.def, r.instance),
						view: e.viewApi,
						timeText: o.timeText,
						textColor: i.textColor,
						backgroundColor: i.backgroundColor,
						borderColor: i.borderColor,
						isDraggable: !o.disableDragging && Zn(n, e),
						isStartResizable: !o.disableResizing && Xn(n, e),
						isEndResizable: !o.disableResizing && Kn(n),
						isMirror: Boolean(o.isDragging || o.isResizing || o.isDateSelecting),
						isStart: Boolean(n.isStart),
						isEnd: Boolean(n.isEnd),
						isPast: Boolean(o.isPast),
						isFuture: Boolean(o.isFuture),
						isToday: Boolean(o.isToday),
						isSelected: Boolean(o.isSelected),
						isDragging: Boolean(o.isDragging),
						isResizing: Boolean(o.isResizing)
					},
					s = Qn(a).concat(i.classNames);
				return fo(No, {
					hookProps: a,
					classNames: t.eventClassNames,
					content: t.eventContent,
					defaultContent: o.defaultContent,
					didMount: t.eventDidMount,
					willUnmount: t.eventWillUnmount,
					elRef: this.elRef
				}, function(e, t, n, r) {
					return o.children(e, s.concat(t), n, r, a)
				})
			}, e.prototype.componentDidMount = function() {
				Bn(this.elRef.current, this.props.seg)
			}, e.prototype.componentDidUpdate = function(e) {
				var t = this.props.seg;
				t !== e.seg && Bn(this.elRef.current, t)
			}, e
		}(Ro),
		Ha = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return s(t, e), t.prototype.render = function() {
				var i = this.props,
					a = this.context,
					s = i.seg,
					e = a.options.eventTimeFormat || i.defaultTimeFormat,
					t = $n(s, e, a, i.defaultDisplayEventTime, i.defaultDisplayEventEnd);
				return fo(Na, {
					seg: s,
					timeText: t,
					disableDragging: i.disableDragging,
					disableResizing: i.disableResizing,
					defaultContent: i.defaultContent || Oa,
					isDragging: i.isDragging,
					isResizing: i.isResizing,
					isDateSelecting: i.isDateSelecting,
					isSelected: i.isSelected,
					isPast: i.isPast,
					isFuture: i.isFuture,
					isToday: i.isToday
				}, function(e, t, n, r, o) {
					return fo("a", N({
						className: i.extraClassNames.concat(t).join(" "),
						style: {
							borderColor: o.borderColor,
							backgroundColor: o.backgroundColor
						},
						ref: e
					}, tr(s, a)), fo("div", {
						className: "fc-event-main",
						ref: n,
						style: {
							color: o.textColor
						}
					}, r), o.isStartResizable && fo("div", {
						className: "fc-event-resizer fc-event-resizer-start"
					}), o.isEndResizable && fo("div", {
						className: "fc-event-resizer fc-event-resizer-end"
					}))
				})
			}, t
		}(Ro);

	function Oa(e) {
		return fo("div", {
			className: "fc-event-main-frame"
		}, e.timeText && fo("div", {
			className: "fc-event-time"
		}, e.timeText), fo("div", {
			className: "fc-event-title-container"
		}, fo("div", {
			className: "fc-event-title fc-sticky"
		}, e.event.title || fo(go, null, " "))))
	}
	var Aa = function(r) {
			return fo(Do.Consumer, null, function(e) {
				var t = e.options,
					n = {
						isAxis: r.isAxis,
						date: e.dateEnv.toDate(r.date),
						view: e.viewApi
					};
				return fo(No, {
					hookProps: n,
					classNames: t.nowIndicatorClassNames,
					content: t.nowIndicatorContent,
					didMount: t.nowIndicatorDidMount,
					willUnmount: t.nowIndicatorWillUnmount
				}, r.children)
			})
		},
		La = Qt({
			day: "numeric"
		}),
		Ua = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return s(t, e), t.prototype.render = function() {
				var e = this.props,
					t = this.context,
					n = t.options,
					r = Wa({
						date: e.date,
						dateProfile: e.dateProfile,
						todayRange: e.todayRange,
						showDayNumber: e.showDayNumber,
						extraProps: e.extraHookProps,
						viewApi: t.viewApi,
						dateEnv: t.dateEnv
					});
				return fo(Oo, {
					hookProps: r,
					content: n.dayCellContent,
					defaultContent: e.defaultContent
				}, e.children)
			}, t
		}(Ro);

	function Wa(e) {
		var t = e.date,
			n = e.dateEnv,
			r = jr(t, e.todayRange, null, e.dateProfile);
		return N(N(N({
			date: n.toDate(t),
			view: e.viewApi
		}, r), {
			dayNumberText: e.showDayNumber ? n.format(t, La) : ""
		}), e.extraProps)
	}
	var Va = function(t) {
		function e() {
			var e = null !== t && t.apply(this, arguments) || this;
			return e.refineHookProps = Wt(Wa), e.normalizeClassNames = Uo(), e
		}
		return s(e, t), e.prototype.render = function() {
			var t = this.props,
				e = this.context,
				n = e.options,
				r = this.refineHookProps({
					date: t.date,
					dateProfile: t.dateProfile,
					todayRange: t.todayRange,
					showDayNumber: t.showDayNumber,
					extraProps: t.extraHookProps,
					viewApi: e.viewApi,
					dateEnv: e.dateEnv
				}),
				o = Gr(r, e.theme).concat(r.isDisabled ? [] : this.normalizeClassNames(n.dayCellClassNames, r)),
				i = r.isDisabled ? {} : {
					"data-date": Ht(t.date)
				};
			return fo(Lo, {
				hookProps: r,
				didMount: n.dayCellDidMount,
				willUnmount: n.dayCellWillUnmount,
				elRef: t.elRef
			}, function(e) {
				return t.children(e, o, i, r.isDisabled)
			})
		}, e
	}(Ro);

	function Fa(e) {
		return fo("div", {
			className: "fc-" + e
		})
	}
	var Ba = function(e) {
		return fo(Na, {
			defaultContent: za,
			seg: e.seg,
			timeText: "",
			disableDragging: !0,
			disableResizing: !0,
			isDragging: !1,
			isResizing: !1,
			isDateSelecting: !1,
			isSelected: !1,
			isPast: e.isPast,
			isFuture: e.isFuture,
			isToday: e.isToday
		}, function(e, t, n, r, o) {
			return fo("div", {
				ref: e,
				className: ["fc-bg-event"].concat(t).join(" "),
				style: {
					backgroundColor: o.backgroundColor
				}
			}, r)
		})
	};

	function za(e) {
		return e.event.title && fo("div", {
			className: "fc-event-title"
		}, e.event.title)
	}
	var ja = function(s) {
		return fo(Do.Consumer, null, function(e) {
			var t = e.dateEnv,
				n = e.options,
				r = s.date,
				o = n.weekNumberFormat || s.defaultFormat,
				i = t.computeWeekNumber(r),
				a = t.format(r, o);
			return fo(No, {
				hookProps: {
					num: i,
					text: a,
					date: r
				},
				classNames: n.weekNumberClassNames,
				content: n.weekNumberContent,
				defaultContent: Ga,
				didMount: n.weekNumberDidMount,
				willUnmount: n.weekNumberWillUnmount
			}, s.children)
		})
	};

	function Ga(e) {
		return e.text
	}
	var qa = function(e) {
			function t() {
				var n = null !== e && e.apply(this, arguments) || this;
				return n.state = {
					titleId: we()
				}, n.handleRootEl = function(e) {
					n.rootEl = e, n.props.elRef && ko(n.props.elRef, e)
				}, n.handleDocumentMouseDown = function(e) {
					var t = be(e);
					n.rootEl.contains(t) || n.handleCloseClick()
				}, n.handleDocumentKeyDown = function(e) {
					"Escape" === e.key && n.handleCloseClick()
				}, n.handleCloseClick = function() {
					var e = n.props.onClose;
					e && e()
				}, n
			}
			return s(t, e), t.prototype.render = function() {
				var e = this.context,
					t = e.theme,
					n = e.options,
					r = this.props,
					o = this.state,
					i = ["fc-popover", t.getClass("popover")].concat(r.extraClassNames || []);
				return yo(fo("div", N({
					id: r.id,
					className: i.join(" "),
					"aria-labelledby": o.titleId
				}, r.extraAttrs, {
					ref: this.handleRootEl
				}), fo("div", {
					className: "fc-popover-header " + t.getClass("popoverHeader")
				}, fo("span", {
					className: "fc-popover-title",
					id: o.titleId
				}, r.title), fo("span", {
					className: "fc-popover-close " + t.getIconClass("close"),
					title: n.closeHint,
					onClick: this.handleCloseClick
				})), fo("div", {
					className: "fc-popover-body " + t.getClass("popoverContent")
				}, r.children)), r.parentEl)
			}, t.prototype.componentDidMount = function() {
				document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize()
			}, t.prototype.componentWillUnmount = function() {
				document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown)
			}, t.prototype.updateSize = function() {
				var e = this.context.isRtl,
					t = this.props,
					n = t.alignmentEl,
					r = t.alignGridTop,
					o = this.rootEl,
					i = function(e) {
						for (var t = ro(e), n = e.getBoundingClientRect(), r = 0, o = t; r < o.length; r++) {
							var i = Ar(n, o[r].getBoundingClientRect());
							if (!i) return null;
							n = i
						}
						return n
					}(n);
				if (i) {
					var a = o.getBoundingClientRect(),
						s = r ? ve(n, ".fc-scrollgrid").getBoundingClientRect().top : i.top,
						l = e ? i.right - a.width : i.left;
					s = Math.max(s, 10), l = Math.min(l, document.documentElement.clientWidth - 10 - a.width), l = Math.max(l, 10);
					var u = o.offsetParent.getBoundingClientRect();
					Ee(o, {
						top: s - u.top,
						left: l - u.left
					})
				}
			}, t
		}(Ro),
		Ya = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.handleRootEl = function(e) {
					(t.rootEl = e) ? t.context.registerInteractiveComponent(t, {
						el: e,
						useEventCenter: !1
					}): t.context.unregisterInteractiveComponent(t)
				}, t
			}
			return s(t, e), t.prototype.render = function() {
				var e = this.context,
					t = e.options,
					n = e.dateEnv,
					r = this.props,
					o = r.startDate,
					i = r.todayRange,
					a = r.dateProfile,
					s = n.format(o, t.dayPopoverFormat);
				return fo(Va, {
					date: o,
					dateProfile: a,
					todayRange: i,
					elRef: this.handleRootEl
				}, function(e, t, n) {
					return fo(qa, {
						elRef: e,
						id: r.id,
						title: s,
						extraClassNames: ["fc-more-popover"].concat(t),
						extraAttrs: n,
						parentEl: r.parentEl,
						alignmentEl: r.alignmentEl,
						alignGridTop: r.alignGridTop,
						onClose: r.onClose
					}, fo(Ua, {
						date: o,
						dateProfile: a,
						todayRange: i
					}, function(e, t) {
						return t && fo("div", {
							className: "fc-more-popover-misc",
							ref: e
						}, t)
					}), r.children)
				})
			}, t.prototype.queryHit = function(e, t, n, r) {
				var o = this.rootEl,
					i = this.props;
				return 0 <= e && e < n && 0 <= t && t < r ? {
					dateProfile: i.dateProfile,
					dateSpan: N({
						allDay: !0,
						range: {
							start: i.startDate,
							end: i.endDate
						}
					}, i.extraDateSpan),
					dayEl: o,
					rect: {
						left: 0,
						top: 0,
						right: n,
						bottom: r
					},
					layer: 1
				} : null
			}, t
		}(xo),
		Za = function(e) {
			function t() {
				var s = null !== e && e.apply(this, arguments) || this;
				return s.linkElRef = vo(), s.state = {
					isPopoverOpen: !1,
					popoverId: we()
				}, s.handleClick = function(e) {
					var t = s,
						n = t.props,
						i = t.context,
						r = i.options.moreLinkClick,
						o = Ka(n).start;

					function a(e) {
						var t = e.eventRange,
							n = t.def,
							r = t.instance,
							o = t.range;
						return {
							event: new mr(i, n, r),
							start: i.dateEnv.toDate(o.start),
							end: i.dateEnv.toDate(o.end),
							isStart: e.isStart,
							isEnd: e.isEnd
						}
					}
					"function" == typeof r && (r = r({
						date: o,
						allDay: Boolean(n.allDayDate),
						allSegs: n.allSegs.map(a),
						hiddenSegs: n.hiddenSegs.map(a),
						jsEvent: e,
						view: i.viewApi
					})), r && "popover" !== r ? "string" == typeof r && i.calendarApi.zoomTo(o, r) : s.setState({
						isPopoverOpen: !0
					})
				}, s.handlePopoverClose = function() {
					s.setState({
						isPopoverOpen: !1
					})
				}, s
			}
			return s(t, e), t.prototype.render = function() {
				var c = this,
					d = this.props,
					p = this.state;
				return fo(Do.Consumer, null, function(e) {
					var t = e.viewApi,
						n = e.options,
						r = e.calendarApi,
						o = n.moreLinkText,
						i = d.moreCnt,
						a = Ka(d),
						s = "function" == typeof o ? o.call(r, i) : "+" + i + " " + o,
						l = je(n.moreLinkHint, [i], s),
						u = {
							num: i,
							shortText: "+" + i,
							text: s,
							view: t
						};
					return fo(go, null, Boolean(d.moreCnt) && fo(No, {
						elRef: c.linkElRef,
						hookProps: u,
						classNames: n.moreLinkClassNames,
						content: n.moreLinkContent,
						defaultContent: d.defaultContent || Xa,
						didMount: n.moreLinkDidMount,
						willUnmount: n.moreLinkWillUnmount
					}, function(e, t, n, r) {
						return d.children(e, ["fc-more-link"].concat(t), n, r, c.handleClick, l, p.isPopoverOpen, p.isPopoverOpen ? p.popoverId : "")
					}), p.isPopoverOpen && fo(Ya, {
						id: p.popoverId,
						startDate: a.start,
						endDate: a.end,
						dateProfile: d.dateProfile,
						todayRange: d.todayRange,
						extraDateSpan: d.extraDateSpan,
						parentEl: c.parentEl,
						alignmentEl: d.alignmentElRef.current,
						alignGridTop: d.alignGridTop,
						onClose: c.handlePopoverClose
					}, d.popoverContent()))
				})
			}, t.prototype.componentDidMount = function() {
				this.updateParentEl()
			}, t.prototype.componentDidUpdate = function() {
				this.updateParentEl()
			}, t.prototype.updateParentEl = function() {
				this.linkElRef.current && (this.parentEl = ve(this.linkElRef.current, ".fc-view-harness"))
			}, t
		}(Ro);

	function Xa(e) {
		return e.text
	}

	function Ka(e) {
		if (e.allDayDate) return {
			start: e.allDayDate,
			end: Ke(e.allDayDate, 1)
		};
		var t, n = e.hiddenSegs;
		return {
			start: $a(n),
			end: (t = n, t.reduce(Qa).eventRange.range.end)
		}
	}

	function $a(e) {
		return e.reduce(Ja).eventRange.range.start
	}

	function Ja(e, t) {
		return e.eventRange.range.start < t.eventRange.range.start ? e : t
	}

	function Qa(e, t) {
		return e.eventRange.range.end > t.eventRange.range.end ? e : t
	}
	var es = function(n) {
		function e(e, t) {
			void 0 === t && (t = {});
			var i = n.call(this) || this;
			return i.isRendering = !1, i.isRendered = !1, i.currentClassNames = [], i.customContentRenderId = 0, i.handleAction = function(e) {
				switch (e.type) {
					case "SET_EVENT_DRAG":
					case "SET_EVENT_RESIZE":
						i.renderRunner.tryDrain()
				}
			}, i.handleData = function(e) {
				i.currentData = e, i.renderRunner.request(e.calendarOptions.rerenderDelay)
			}, i.handleRenderRequest = function() {
				if (i.isRendering) {
					i.isRendered = !0;
					var o = i.currentData;
					Eo(function() {
						ho(fo(Yi, {
							options: o.calendarOptions,
							theme: o.theme,
							emitter: o.emitter
						}, function(e, t, n, r) {
							return i.setClassNames(e), i.setHeight(t), fo(Ho.Provider, {
								value: i.customContentRenderId
							}, fo(ji, N({
								isHeightAuto: n,
								forPrint: r
							}, o)))
						}), i.el)
					})
				} else i.isRendered && (i.isRendered = !1, So(i.el), i.setClassNames([]), i.setHeight(""))
			}, i.el = e, i.renderRunner = new ui(i.handleRenderRequest), new pi({
				optionOverrides: t,
				calendarApi: i,
				onAction: i.handleAction,
				onData: i.handleData
			}), i
		}
		return s(e, n), Object.defineProperty(e.prototype, "view", {
			get: function() {
				return this.currentData.viewApi
			},
			enumerable: !1,
			configurable: !0
		}), e.prototype.render = function() {
			var e = this.isRendering;
			e ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request(), e && this.updateSize()
		}, e.prototype.destroy = function() {
			this.isRendering && (this.isRendering = !1, this.renderRunner.request())
		}, e.prototype.updateSize = function() {
			var e = this;
			Eo(function() {
				n.prototype.updateSize.call(e)
			})
		}, e.prototype.batchRendering = function(e) {
			this.renderRunner.pause("batchRendering"), e(), this.renderRunner.resume("batchRendering")
		}, e.prototype.pauseRendering = function() {
			this.renderRunner.pause("pauseRendering")
		}, e.prototype.resumeRendering = function() {
			this.renderRunner.resume("pauseRendering", !0)
		}, e.prototype.resetOptions = function(e, t) {
			this.currentDataManager.resetOptions(e, t)
		}, e.prototype.setClassNames = function(e) {
			if (!Lt(e, this.currentClassNames)) {
				for (var t = this.el.classList, n = 0, r = this.currentClassNames; n < r.length; n++) {
					var o = r[n];
					t.remove(o)
				}
				for (var i = 0, a = e; i < a.length; i++) o = a[i], t.add(o);
				this.currentClassNames = e
			}
		}, e.prototype.setHeight = function(e) {
			Se(this.el, "height", e)
		}, e
	}(gr);
	Ai.touchMouseIgnoreWait = 500;
	var ts = 0,
		ns = 0,
		rs = !1,
		os = function() {
			function e(e) {
				var r = this;
				this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = function(e) {
					if (!r.shouldIgnoreMouse() && (0 === (n = e).button && !n.ctrlKey) && r.tryStart(e)) {
						var t = r.createEventFromMouse(e, !0);
						r.emitter.trigger("pointerdown", t), r.initScrollWatch(t), r.shouldIgnoreMove || document.addEventListener("mousemove", r.handleMouseMove), document.addEventListener("mouseup", r.handleMouseUp)
					}
					var n
				}, this.handleMouseMove = function(e) {
					var t = r.createEventFromMouse(e);
					r.recordCoords(t), r.emitter.trigger("pointermove", t)
				}, this.handleMouseUp = function(e) {
					document.removeEventListener("mousemove", r.handleMouseMove), document.removeEventListener("mouseup", r.handleMouseUp), r.emitter.trigger("pointerup", r.createEventFromMouse(e)), r.cleanup()
				}, this.handleTouchStart = function(e) {
					if (r.tryStart(e)) {
						r.isTouchDragging = !0;
						var t = r.createEventFromTouch(e, !0);
						r.emitter.trigger("pointerdown", t), r.initScrollWatch(t);
						var n = e.target;
						r.shouldIgnoreMove || n.addEventListener("touchmove", r.handleTouchMove), n.addEventListener("touchend", r.handleTouchEnd), n.addEventListener("touchcancel", r.handleTouchEnd), window.addEventListener("scroll", r.handleTouchScroll, !0)
					}
				}, this.handleTouchMove = function(e) {
					var t = r.createEventFromTouch(e);
					r.recordCoords(t), r.emitter.trigger("pointermove", t)
				}, this.handleTouchEnd = function(e) {
					if (r.isDragging) {
						var t = e.target;
						t.removeEventListener("touchmove", r.handleTouchMove), t.removeEventListener("touchend", r.handleTouchEnd), t.removeEventListener("touchcancel", r.handleTouchEnd), window.removeEventListener("scroll", r.handleTouchScroll, !0), r.emitter.trigger("pointerup", r.createEventFromTouch(e)), r.cleanup(), r.isTouchDragging = !1, ts += 1, setTimeout(function() {
							ts -= 1
						}, Ai.touchMouseIgnoreWait)
					}
				}, this.handleTouchScroll = function() {
					r.wasTouchScroll = !0
				}, this.handleScroll = function(e) {
					if (!r.shouldIgnoreMove) {
						var t = window.pageXOffset - r.prevScrollX + r.prevPageX,
							n = window.pageYOffset - r.prevScrollY + r.prevPageY;
						r.emitter.trigger("pointermove", {
							origEvent: e,
							isTouch: r.isTouchDragging,
							subjectEl: r.subjectEl,
							pageX: t,
							pageY: n,
							deltaX: t - r.origPageX,
							deltaY: n - r.origPageY
						})
					}
				}, this.containerEl = e, this.emitter = new io, e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, {
					passive: !0
				}), 1 === (ns += 1) && window.addEventListener("touchmove", is, {
					passive: !1
				})
			}
			return e.prototype.destroy = function() {
				this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, {
					passive: !0
				}), (ns -= 1) || window.removeEventListener("touchmove", is, {
					passive: !1
				})
			}, e.prototype.tryStart = function(e) {
				var t = this.querySubjectEl(e),
					n = e.target;
				return !(!t || this.handleSelector && !ve(n, this.handleSelector) || (this.subjectEl = t, this.isDragging = !0, this.wasTouchScroll = !1))
			}, e.prototype.cleanup = function() {
				rs = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch()
			}, e.prototype.querySubjectEl = function(e) {
				return this.selector ? ve(e.target, this.selector) : this.containerEl
			}, e.prototype.shouldIgnoreMouse = function() {
				return ts || this.isTouchDragging
			}, e.prototype.cancelTouchScroll = function() {
				this.isDragging && (rs = !0)
			}, e.prototype.initScrollWatch = function(e) {
				this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener("scroll", this.handleScroll, !0))
			}, e.prototype.recordCoords = function(e) {
				this.shouldWatchScroll && (this.prevPageX = e.pageX, this.prevPageY = e.pageY, this.prevScrollX = window.pageXOffset, this.prevScrollY = window.pageYOffset)
			}, e.prototype.destroyScrollWatch = function() {
				this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0)
			}, e.prototype.createEventFromMouse = function(e, t) {
				var n = 0,
					r = 0;
				return t ? (this.origPageX = e.pageX, this.origPageY = e.pageY) : (n = e.pageX - this.origPageX, r = e.pageY - this.origPageY), {
					origEvent: e,
					isTouch: !1,
					subjectEl: this.subjectEl,
					pageX: e.pageX,
					pageY: e.pageY,
					deltaX: n,
					deltaY: r
				}
			}, e.prototype.createEventFromTouch = function(e, t) {
				var n, r, o = e.touches,
					i = 0,
					a = 0;
				return r = o && o.length ? (n = o[0].pageX, o[0].pageY) : (n = e.pageX, e.pageY), t ? (this.origPageX = n, this.origPageY = r) : (i = n - this.origPageX, a = r - this.origPageY), {
					origEvent: e,
					isTouch: !0,
					subjectEl: this.subjectEl,
					pageX: n,
					pageY: r,
					deltaX: i,
					deltaY: a
				}
			}, e
		}();

	function is(e) {
		rs && e.preventDefault()
	}
	var as = function() {
			function e() {
				this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0
			}
			return e.prototype.start = function(e, t, n) {
				this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = t - window.pageXOffset, this.origScreenY = n - window.pageYOffset, this.deltaX = 0, this.deltaY = 0, this.updateElPosition()
			}, e.prototype.handleMove = function(e, t) {
				this.deltaX = e - window.pageXOffset - this.origScreenX, this.deltaY = t - window.pageYOffset - this.origScreenY, this.updateElPosition()
			}, e.prototype.setIsVisible = function(e) {
				e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = e, this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), this.isVisible = e)
			}, e.prototype.stop = function(e, t) {
				var n = this,
					r = function() {
						n.cleanup(), t()
					};
				e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY) ? this.doRevertAnimation(r, this.revertDuration) : setTimeout(r, 0)
			}, e.prototype.doRevertAnimation = function(e, t) {
				var n = this.mirrorEl,
					r = this.sourceEl.getBoundingClientRect();
				n.style.transition = "top " + t + "ms,left " + t + "ms", Ee(n, {
					left: r.left,
					top: r.top
				}), ke(n, function() {
					n.style.transition = "", e()
				})
			}, e.prototype.cleanup = function() {
				this.mirrorEl && (he(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null
			}, e.prototype.updateElPosition = function() {
				this.sourceEl && this.isVisible && Ee(this.getMirrorEl(), {
					left: this.sourceElRect.left + this.deltaX,
					top: this.sourceElRect.top + this.deltaY
				})
			}, e.prototype.getMirrorEl = function() {
				var e = this.sourceElRect,
					t = this.mirrorEl;
				return t || ((t = this.mirrorEl = this.sourceEl.cloneNode(!0)).classList.add("fc-unselectable"), t.classList.add("fc-event-dragging"), Ee(t, {
					position: "fixed",
					zIndex: this.zIndex,
					visibility: "",
					boxSizing: "border-box",
					width: e.right - e.left,
					height: e.bottom - e.top,
					right: "auto",
					bottom: "auto",
					margin: 0
				}), this.parentNode.appendChild(t)), t
			}, e
		}(),
		ss = function(r) {
			function e(e, t) {
				var n = r.call(this) || this;
				return n.handleScroll = function() {
					n.scrollTop = n.scrollController.getScrollTop(), n.scrollLeft = n.scrollController.getScrollLeft(), n.handleScrollChange()
				}, n.scrollController = e, n.doesListening = t, n.scrollTop = n.origScrollTop = e.getScrollTop(), n.scrollLeft = n.origScrollLeft = e.getScrollLeft(), n.scrollWidth = e.getScrollWidth(), n.scrollHeight = e.getScrollHeight(), n.clientWidth = e.getClientWidth(), n.clientHeight = e.getClientHeight(), n.clientRect = n.computeClientRect(), n.doesListening && n.getEventTarget().addEventListener("scroll", n.handleScroll), n
			}
			return s(e, r), e.prototype.destroy = function() {
				this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll)
			}, e.prototype.getScrollTop = function() {
				return this.scrollTop
			}, e.prototype.getScrollLeft = function() {
				return this.scrollLeft
			}, e.prototype.setScrollTop = function(e) {
				this.scrollController.setScrollTop(e), this.doesListening || (this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0), this.handleScrollChange())
			}, e.prototype.setScrollLeft = function(e) {
				this.scrollController.setScrollLeft(e), this.doesListening || (this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0), this.handleScrollChange())
			}, e.prototype.getClientWidth = function() {
				return this.clientWidth
			}, e.prototype.getClientHeight = function() {
				return this.clientHeight
			}, e.prototype.getScrollWidth = function() {
				return this.scrollWidth
			}, e.prototype.getScrollHeight = function() {
				return this.scrollHeight
			}, e.prototype.handleScrollChange = function() {}, e
		}(so),
		ls = function(n) {
			function e(e, t) {
				return n.call(this, new lo(e), t) || this
			}
			return s(e, n), e.prototype.getEventTarget = function() {
				return this.scrollController.el
			}, e.prototype.computeClientRect = function() {
				return to(this.scrollController.el)
			}, e
		}(ss),
		us = function(t) {
			function e(e) {
				return t.call(this, new uo, e) || this
			}
			return s(e, t), e.prototype.getEventTarget = function() {
				return window
			}, e.prototype.computeClientRect = function() {
				return {
					left: this.scrollLeft,
					right: this.scrollLeft + this.clientWidth,
					top: this.scrollTop,
					bottom: this.scrollTop + this.clientHeight
				}
			}, e.prototype.handleScrollChange = function() {
				this.clientRect = this.computeClientRect()
			}, e
		}(ss),
		cs = "function" == typeof performance ? performance.now : Date.now,
		ds = function() {
			function e() {
				var n = this;
				this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = function() {
					if (n.isAnimating) {
						var e = n.computeBestEdge(n.pointerScreenX + window.pageXOffset, n.pointerScreenY + window.pageYOffset);
						if (e) {
							var t = cs();
							n.handleSide(e, (t - n.msSinceRequest) / 1e3), n.requestAnimation(t)
						} else n.isAnimating = !1
					}
				}
			}
			return e.prototype.start = function(e, t, n) {
				this.isEnabled && (this.scrollCaches = this.buildCaches(n), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.handleMove(e, t))
			}, e.prototype.handleMove = function(e, t) {
				if (this.isEnabled) {
					var n = e - window.pageXOffset,
						r = t - window.pageYOffset,
						o = null === this.pointerScreenY ? 0 : r - this.pointerScreenY,
						i = null === this.pointerScreenX ? 0 : n - this.pointerScreenX;
					o < 0 ? this.everMovedUp = !0 : 0 < o && (this.everMovedDown = !0), i < 0 ? this.everMovedLeft = !0 : 0 < i && (this.everMovedRight = !0), this.pointerScreenX = n, this.pointerScreenY = r, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(cs()))
				}
			}, e.prototype.stop = function() {
				if (this.isEnabled) {
					this.isAnimating = !1;
					for (var e = 0, t = this.scrollCaches; e < t.length; e++) t[e].destroy();
					this.scrollCaches = null
				}
			}, e.prototype.requestAnimation = function(e) {
				this.msSinceRequest = e, requestAnimationFrame(this.animate)
			}, e.prototype.handleSide = function(e, t) {
				var n = e.scrollCache,
					r = this.edgeThreshold,
					o = r - e.distance,
					i = o * o / (r * r) * this.maxVelocity * t,
					a = 1;
				switch (e.name) {
					case "left":
						a = -1;
					case "right":
						n.setScrollLeft(n.getScrollLeft() + i * a);
						break;
					case "top":
						a = -1;
					case "bottom":
						n.setScrollTop(n.getScrollTop() + i * a)
				}
			}, e.prototype.computeBestEdge = function(e, t) {
				for (var n = this.edgeThreshold, r = null, o = 0, i = this.scrollCaches || []; o < i.length; o++) {
					var a = i[o],
						s = a.clientRect,
						l = e - s.left,
						u = s.right - e,
						c = t - s.top,
						d = s.bottom - t;
					0 <= l && 0 <= u && 0 <= c && 0 <= d && (c <= n && this.everMovedUp && a.canScrollUp() && (!r || r.distance > c) && (r = {
						scrollCache: a,
						name: "top",
						distance: c
					}), d <= n && this.everMovedDown && a.canScrollDown() && (!r || r.distance > d) && (r = {
						scrollCache: a,
						name: "bottom",
						distance: d
					}), l <= n && this.everMovedLeft && a.canScrollLeft() && (!r || r.distance > l) && (r = {
						scrollCache: a,
						name: "left",
						distance: l
					}), u <= n && this.everMovedRight && a.canScrollRight() && (!r || r.distance > u) && (r = {
						scrollCache: a,
						name: "right",
						distance: u
					}))
				}
				return r
			}, e.prototype.buildCaches = function(e) {
				return this.queryScrollEls(e).map(function(e) {
					return e === window ? new us(!1) : new ls(e, !1)
				})
			}, e.prototype.queryScrollEls = function(e) {
				for (var t = [], n = 0, r = this.scrollQuery; n < r.length; n++) {
					var o = r[n];
					"object" == typeof o ? t.push(o) : t.push.apply(t, Array.prototype.slice.call(De(e).querySelectorAll(o)))
				}
				return t
			}, e
		}(),
		ps = function(r) {
			function e(e, t) {
				var o = r.call(this, e) || this;
				o.containerEl = e, o.delay = null, o.minDistance = 0, o.touchScrollAllowed = !0, o.mirrorNeedsRevert = !1, o.isInteracting = !1, o.isDragging = !1, o.isDelayEnded = !1, o.isDistanceSurpassed = !1, o.delayTimeoutId = null, o.onPointerDown = function(e) {
					o.isDragging || (o.isInteracting = !0, o.isDelayEnded = !1, o.isDistanceSurpassed = !1, Oe(document.body), Le(document.body), e.isTouch || e.origEvent.preventDefault(), o.emitter.trigger("pointerdown", e), o.isInteracting && !o.pointer.shouldIgnoreMove && (o.mirror.setIsVisible(!1), o.mirror.start(e.subjectEl, e.pageX, e.pageY), o.startDelay(e), o.minDistance || o.handleDistanceSurpassed(e)))
				}, o.onPointerMove = function(e) {
					if (o.isInteracting) {
						if (o.emitter.trigger("pointermove", e), !o.isDistanceSurpassed) {
							var t = o.minDistance,
								n = e.deltaX,
								r = e.deltaY;
							t * t <= n * n + r * r && o.handleDistanceSurpassed(e)
						}
						o.isDragging && ("scroll" !== e.origEvent.type && (o.mirror.handleMove(e.pageX, e.pageY), o.autoScroller.handleMove(e.pageX, e.pageY)), o.emitter.trigger("dragmove", e))
					}
				}, o.onPointerUp = function(e) {
					o.isInteracting && (o.isInteracting = !1, Ae(document.body), Ue(document.body), o.emitter.trigger("pointerup", e), o.isDragging && (o.autoScroller.stop(), o.tryStopDrag(e)), o.delayTimeoutId && (clearTimeout(o.delayTimeoutId), o.delayTimeoutId = null))
				};
				var n = o.pointer = new os(e);
				return n.emitter.on("pointerdown", o.onPointerDown), n.emitter.on("pointermove", o.onPointerMove), n.emitter.on("pointerup", o.onPointerUp), t && (n.selector = t), o.mirror = new as, o.autoScroller = new ds, o
			}
			return s(e, r), e.prototype.destroy = function() {
				this.pointer.destroy(), this.onPointerUp({})
			}, e.prototype.startDelay = function(e) {
				var t = this;
				"number" == typeof this.delay ? this.delayTimeoutId = setTimeout(function() {
					t.delayTimeoutId = null, t.handleDelayEnd(e)
				}, this.delay) : this.handleDelayEnd(e)
			}, e.prototype.handleDelayEnd = function(e) {
				this.isDelayEnded = !0, this.tryStartDrag(e)
			}, e.prototype.handleDistanceSurpassed = function(e) {
				this.isDistanceSurpassed = !0, this.tryStartDrag(e)
			}, e.prototype.tryStartDrag = function(e) {
				this.isDelayEnded && this.isDistanceSurpassed && (this.pointer.wasTouchScroll && !this.touchScrollAllowed || (this.isDragging = !0, this.mirrorNeedsRevert = !1, this.autoScroller.start(e.pageX, e.pageY, this.containerEl), this.emitter.trigger("dragstart", e), !1 === this.touchScrollAllowed && this.pointer.cancelTouchScroll()))
			}, e.prototype.tryStopDrag = function(e) {
				this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e))
			}, e.prototype.stopDrag = function(e) {
				this.isDragging = !1, this.emitter.trigger("dragend", e)
			}, e.prototype.setIgnoreMove = function(e) {
				this.pointer.shouldIgnoreMove = e
			}, e.prototype.setMirrorIsVisible = function(e) {
				this.mirror.setIsVisible(e)
			}, e.prototype.setMirrorNeedsRevert = function(e) {
				this.mirrorNeedsRevert = e
			}, e.prototype.setAutoScrollEnabled = function(e) {
				this.autoScroller.isEnabled = e
			}, e
		}(Oi),
		fs = function() {
			function e(e) {
				this.origRect = no(e), this.scrollCaches = ro(e).map(function(e) {
					return new ls(e, !0)
				})
			}
			return e.prototype.destroy = function() {
				for (var e = 0, t = this.scrollCaches; e < t.length; e++) t[e].destroy()
			}, e.prototype.computeLeft = function() {
				for (var e = this.origRect.left, t = 0, n = this.scrollCaches; t < n.length; t++) {
					var r = n[t];
					e += r.origScrollLeft - r.getScrollLeft()
				}
				return e
			}, e.prototype.computeTop = function() {
				for (var e = this.origRect.top, t = 0, n = this.scrollCaches; t < n.length; t++) {
					var r = n[t];
					e += r.origScrollTop - r.getScrollTop()
				}
				return e
			}, e.prototype.isWithinClipping = function(e, t) {
				for (var n, r = {
						left: e,
						top: t
					}, o = 0, i = this.scrollCaches; o < i.length; o++) {
					var a = i[o];
					if (void 0, "HTML" !== (n = a.getEventTarget().tagName) && "BODY" !== n && !Or(r, a.clientRect)) return !1
				}
				return !0
			}, e
		}(),
		hs = function() {
			function e(e, t) {
				var n = this;
				this.useSubjectCenter = !1, this.requireInitial = !0, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = function(e) {
					var t = n.dragging;
					n.initialHit = null, n.movingHit = null, n.finalHit = null, n.prepareHits(), n.processFirstCoord(e), n.initialHit || !n.requireInitial ? (t.setIgnoreMove(!1), n.emitter.trigger("pointerdown", e)) : t.setIgnoreMove(!0)
				}, this.handleDragStart = function(e) {
					n.emitter.trigger("dragstart", e), n.handleMove(e, !0)
				}, this.handleDragMove = function(e) {
					n.emitter.trigger("dragmove", e), n.handleMove(e)
				}, this.handlePointerUp = function(e) {
					n.releaseHits(), n.emitter.trigger("pointerup", e)
				}, this.handleDragEnd = function(e) {
					n.movingHit && n.emitter.trigger("hitupdate", null, !0, e), n.finalHit = n.movingHit, n.movingHit = null, n.emitter.trigger("dragend", e)
				}, this.droppableStore = t, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new io
			}
			return e.prototype.processFirstCoord = function(e) {
				var t, n = {
						left: e.pageX,
						top: e.pageY
					},
					r = n,
					o = e.subjectEl;
				o instanceof HTMLElement && (r = Lr(r, t = no(o)));
				var i = this.initialHit = this.queryHitForOffset(r.left, r.top);
				if (i) {
					if (this.useSubjectCenter && t) {
						var a = Ar(t, i.rect);
						a && (r = Ur(a))
					}
					this.coordAdjust = Wr(r, n)
				} else this.coordAdjust = {
					left: 0,
					top: 0
				}
			}, e.prototype.handleMove = function(e, t) {
				var n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
				!t && vs(this.movingHit, n) || (this.movingHit = n, this.emitter.trigger("hitupdate", n, !1, e))
			}, e.prototype.prepareHits = function() {
				this.offsetTrackers = vt(this.droppableStore, function(e) {
					return e.component.prepareHits(), new fs(e.el)
				})
			}, e.prototype.releaseHits = function() {
				var e = this.offsetTrackers;
				for (var t in e) e[t].destroy();
				this.offsetTrackers = {}
			}, e.prototype.queryHitForOffset = function(e, t) {
				var n = this.droppableStore,
					r = this.offsetTrackers,
					o = null;
				for (var i in n) {
					var a = n[i].component,
						s = r[i];
					if (s && s.isWithinClipping(e, t)) {
						var l = s.computeLeft(),
							u = s.computeTop(),
							c = e - l,
							d = t - u,
							p = s.origRect,
							f = p.right - p.left,
							h = p.bottom - p.top;
						if (0 <= c && c < f && 0 <= d && d < h) {
							var v = a.queryHit(c, d, f, h);
							v && Un(v.dateProfile.activeRange, v.dateSpan.range) && (!o || v.layer > o.layer) && (v.componentId = i, v.context = a.context, v.rect.left += l, v.rect.right += l, v.rect.top += u, v.rect.bottom += u, o = v)
						}
					}
				}
				return o
			}, e
		}();

	function vs(e, t) {
		return !e && !t || Boolean(e) === Boolean(t) && rr(e.dateSpan, t.dateSpan)
	}

	function gs(e, t) {
		for (var n, r, o = {}, i = 0, a = t.pluginHooks.datePointTransforms; i < a.length; i++) {
			var s = a[i];
			N(o, s(e, t))
		}
		return N(o, (n = e, {
			date: (r = t.dateEnv).toDate(n.range.start),
			dateStr: r.formatIso(n.range.start, {
				omitTime: n.allDay
			}),
			allDay: n.allDay
		})), o
	}
	var ms = function(n) {
			function e(e) {
				var s = n.call(this, e) || this;
				s.handlePointerDown = function(e) {
					var t = s.dragging,
						n = e.origEvent.target;
					t.setIgnoreMove(!s.component.isValidDateDownEl(n))
				}, s.handleDragEnd = function(e) {
					var t = s.component;
					if (!s.dragging.pointer.wasTouchScroll) {
						var n = s.hitDragging,
							r = n.initialHit,
							o = n.finalHit;
						if (r && o && vs(r, o)) {
							var i = t.context,
								a = N(N({}, gs(r.dateSpan, i)), {
									dayEl: r.dayEl,
									jsEvent: e.origEvent,
									view: i.viewApi || i.calendarApi.view
								});
							i.emitter.trigger("dateClick", a)
						}
					}
				}, s.dragging = new ps(e.el), s.dragging.autoScroller.isEnabled = !1;
				var t = s.hitDragging = new hs(s.dragging, Ni(e));
				return t.emitter.on("pointerdown", s.handlePointerDown), t.emitter.on("dragend", s.handleDragEnd), s
			}
			return s(e, n), e.prototype.destroy = function() {
				this.dragging.destroy()
			}, e
		}(Pi),
		ys = function(o) {
			function e(e) {
				var s = o.call(this, e) || this;
				s.dragSelection = null, s.handlePointerDown = function(e) {
					var t, n, r = s,
						o = r.component,
						i = r.dragging,
						a = o.context.options.selectable && o.isValidDateDownEl(e.origEvent.target);
					i.setIgnoreMove(!a), i.delay = e.isTouch ? (t = o.context.options, null == (n = t.selectLongPressDelay) && (n = t.longPressDelay), n) : null
				}, s.handleDragStart = function(e) {
					s.component.context.calendarApi.unselect(e)
				}, s.handleHitUpdate = function(e, t) {
					var n = s.component.context,
						r = null,
						o = !1;
					if (e) {
						var i = s.hitDragging.initialHit;
						e.componentId === i.componentId && s.isHitComboAllowed && !s.isHitComboAllowed(i, e) || (r = function(e, t, n) {
							var r = e.dateSpan,
								o = t.dateSpan,
								i = [r.range.start, r.range.end, o.range.start, o.range.end];
							i.sort(Ge);
							for (var a = {}, s = 0, l = n; s < l.length; s++) {
								var u = (0, l[s])(e, t);
								if (!1 === u) return null;
								u && N(a, u)
							}
							return a.range = {
								start: i[0],
								end: i[3]
							}, a.allDay = r.allDay, a
						}(i, e, n.pluginHooks.dateSelectionTransformers)), r && ua(r, e.dateProfile, n) || (o = !0, r = null)
					}
					r ? n.dispatch({
						type: "SELECT_DATES",
						selection: r
					}) : t || n.dispatch({
						type: "UNSELECT_DATES"
					}), o ? Ne() : He(), t || (s.dragSelection = r)
				}, s.handlePointerUp = function(e) {
					s.dragSelection && (ar(s.dragSelection, e, s.component.context), s.dragSelection = null)
				};
				var t = e.component.context.options,
					n = s.dragging = new ps(e.el);
				n.touchScrollAllowed = !1, n.minDistance = t.selectMinDistance || 0, n.autoScroller.isEnabled = t.dragScroll;
				var r = s.hitDragging = new hs(s.dragging, Ni(e));
				return r.emitter.on("pointerdown", s.handlePointerDown), r.emitter.on("dragstart", s.handleDragStart), r.emitter.on("hitupdate", s.handleHitUpdate), r.emitter.on("pointerup", s.handlePointerUp), s
			}
			return s(e, o), e.prototype.destroy = function() {
				this.dragging.destroy()
			}, e
		}(Pi),
		Es = function(o) {
			function i(e) {
				var C = o.call(this, e) || this;
				C.subjectEl = null, C.subjectSeg = null, C.isDragging = !1, C.eventRange = null, C.relevantEvents = null, C.receivingContext = null, C.validMutation = null, C.mutatedRelevantEvents = null, C.handlePointerDown = function(e) {
					var t = e.origEvent.target,
						n = C,
						r = n.component,
						o = n.dragging,
						i = o.mirror,
						a = r.context.options,
						s = r.context;
					C.subjectEl = e.subjectEl;
					var l, u, c = C.subjectSeg = zn(e.subjectEl),
						d = (C.eventRange = c.eventRange).instance.instanceId;
					C.relevantEvents = fn(s.getCurrentData().eventStore, d), o.minDistance = e.isTouch ? 0 : a.eventDragMinDistance, o.delay = e.isTouch && d !== r.props.eventSelection ? (l = r.context.options, null == (u = l.eventLongPressDelay) && (u = l.longPressDelay), u) : null, a.fixedMirrorParent ? i.parentNode = a.fixedMirrorParent : i.parentNode = ve(t, ".fc"), i.revertDuration = a.dragRevertDuration;
					var p = r.isValidSegDownEl(t) && !ve(t, ".fc-event-resizer");
					o.setIgnoreMove(!p), C.isDragging = p && e.subjectEl.classList.contains("fc-event-draggable")
				}, C.handleDragStart = function(e) {
					var t = C.component.context,
						n = C.eventRange,
						r = n.instance.instanceId;
					e.isTouch ? r !== C.component.props.eventSelection && t.dispatch({
						type: "SELECT_EVENT",
						eventInstanceId: r
					}) : t.dispatch({
						type: "UNSELECT_EVENT"
					}), C.isDragging && (t.calendarApi.unselect(e), t.emitter.trigger("eventDragStart", {
						el: C.subjectEl,
						event: new mr(t, n.def, n.instance),
						jsEvent: e.origEvent,
						view: t.viewApi
					}))
				}, C.handleHitUpdate = function(e, t) {
					if (C.isDragging) {
						var n = C.relevantEvents,
							r = C.hitDragging.initialHit,
							o = C.component.context,
							i = null,
							a = null,
							s = null,
							l = !1,
							u = {
								affectedEvents: n,
								mutatedEvents: {
									defs: {},
									instances: {}
								},
								isEvent: !0
							};
						if (e) {
							var c = (i = e.context).options;
							o === i || c.editable && c.droppable ? (a = function(e, t, n) {
								var r = e.dateSpan,
									o = t.dateSpan,
									i = r.range.start,
									a = o.range.start,
									s = {};
								r.allDay !== o.allDay && (s.allDay = o.allDay, s.hasEnd = t.context.options.allDayMaintainDuration, o.allDay && (i = rt(i)));
								var l = Pn(i, a, e.context.dateEnv, e.componentId === t.componentId ? e.largeUnit : null);
								l.milliseconds && (s.allDay = !1);
								for (var u = {
										datesDelta: l,
										standardProps: s
									}, c = 0, d = n; c < d.length; c++)(0, d[c])(u, e, t);
								return u
							}(r, e, i.getCurrentData().pluginHooks.eventDragMutationMassagers)) && (s = ur(n, i.getCurrentData().eventUiBases, a, i), u.mutatedEvents = s, la(u, e.dateProfile, i) || (l = !0, s = a = null, u.mutatedEvents = {
								defs: {},
								instances: {}
							})) : i = null
						}
						C.displayDrag(i, u), l ? Ne() : He(), t || (o === i && vs(r, e) && (a = null), C.dragging.setMirrorNeedsRevert(!a), C.dragging.setMirrorIsVisible(!e || !De(C.subjectEl).querySelector(".fc-event-mirror")), C.receivingContext = i, C.validMutation = a, C.mutatedRelevantEvents = s)
					}
				}, C.handlePointerUp = function() {
					C.isDragging || C.cleanup()
				}, C.handleDragEnd = function(e) {
					if (C.isDragging) {
						var t = C.component.context,
							n = t.viewApi,
							r = C,
							o = r.receivingContext,
							i = r.validMutation,
							a = C.eventRange.def,
							s = C.eventRange.instance,
							l = new mr(t, a, s),
							u = C.relevantEvents,
							c = C.mutatedRelevantEvents,
							d = C.hitDragging.finalHit;
						if (C.clearDrag(), t.emitter.trigger("eventDragStop", {
								el: C.subjectEl,
								event: l,
								jsEvent: e.origEvent,
								view: n
							}), i) {
							if (o === t) {
								var p = new mr(t, c.defs[a.defId], s ? c.instances[s.instanceId] : null);
								t.dispatch({
									type: "MERGE_EVENTS",
									eventStore: c
								});
								for (var f = {
										oldEvent: l,
										event: p,
										relatedEvents: Er(c, t, s),
										revert: function() {
											t.dispatch({
												type: "MERGE_EVENTS",
												eventStore: u
											})
										}
									}, h = {}, v = 0, g = t.getCurrentData().pluginHooks.eventDropTransformers; v < g.length; v++) {
									var m = g[v];
									N(h, m(i, t))
								}
								t.emitter.trigger("eventDrop", N(N(N({}, f), h), {
									el: e.subjectEl,
									delta: i.datesDelta,
									jsEvent: e.origEvent,
									view: n
								})), t.emitter.trigger("eventChange", f)
							} else if (o) {
								var y = {
									event: l,
									relatedEvents: Er(u, t, s),
									revert: function() {
										t.dispatch({
											type: "MERGE_EVENTS",
											eventStore: u
										})
									}
								};
								t.emitter.trigger("eventLeave", N(N({}, y), {
									draggedEl: e.subjectEl,
									view: n
								})), t.dispatch({
									type: "REMOVE_EVENTS",
									eventStore: u
								}), t.emitter.trigger("eventRemove", y);
								var E = c.defs[a.defId],
									S = c.instances[s.instanceId],
									b = new mr(o, E, S);
								o.dispatch({
									type: "MERGE_EVENTS",
									eventStore: c
								});
								var D = {
									event: b,
									relatedEvents: Er(c, o, S),
									revert: function() {
										o.dispatch({
											type: "REMOVE_EVENTS",
											eventStore: c
										})
									}
								};
								o.emitter.trigger("eventAdd", D), e.isTouch && o.dispatch({
									type: "SELECT_EVENT",
									eventInstanceId: s.instanceId
								}), o.emitter.trigger("drop", N(N({}, gs(d.dateSpan, o)), {
									draggedEl: e.subjectEl,
									jsEvent: e.origEvent,
									view: d.context.viewApi
								})), o.emitter.trigger("eventReceive", N(N({}, D), {
									draggedEl: e.subjectEl,
									view: d.context.viewApi
								}))
							}
						} else t.emitter.trigger("_noEventDrop")
					}
					C.cleanup()
				};
				var t = C.component.context.options,
					n = C.dragging = new ps(e.el);
				n.pointer.selector = i.SELECTOR, n.touchScrollAllowed = !1, n.autoScroller.isEnabled = t.dragScroll;
				var r = C.hitDragging = new hs(C.dragging, Hi);
				return r.useSubjectCenter = e.useEventCenter, r.emitter.on("pointerdown", C.handlePointerDown), r.emitter.on("dragstart", C.handleDragStart), r.emitter.on("hitupdate", C.handleHitUpdate), r.emitter.on("pointerup", C.handlePointerUp), r.emitter.on("dragend", C.handleDragEnd), C
			}
			return s(i, o), i.prototype.destroy = function() {
				this.dragging.destroy()
			}, i.prototype.displayDrag = function(e, t) {
				var n = this.component.context,
					r = this.receivingContext;
				r && r !== e && (r === n ? r.dispatch({
					type: "SET_EVENT_DRAG",
					state: {
						affectedEvents: t.affectedEvents,
						mutatedEvents: {
							defs: {},
							instances: {}
						},
						isEvent: !0
					}
				}) : r.dispatch({
					type: "UNSET_EVENT_DRAG"
				})), e && e.dispatch({
					type: "SET_EVENT_DRAG",
					state: t
				})
			}, i.prototype.clearDrag = function() {
				var e = this.component.context,
					t = this.receivingContext;
				t && t.dispatch({
					type: "UNSET_EVENT_DRAG"
				}), e !== t && e.dispatch({
					type: "UNSET_EVENT_DRAG"
				})
			}, i.prototype.cleanup = function() {
				this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null
			}, i.SELECTOR = ".fc-event-draggable, .fc-event-resizable", i
		}(Pi),
		Ss = function(o) {
			function e(e) {
				var d = o.call(this, e) || this;
				d.draggingSegEl = null, d.draggingSeg = null, d.eventRange = null, d.relevantEvents = null, d.validMutation = null, d.mutatedRelevantEvents = null, d.handlePointerDown = function(e) {
					var t = d.component,
						n = zn(d.querySegEl(e)),
						r = d.eventRange = n.eventRange;
					d.dragging.minDistance = t.context.options.eventDragMinDistance, d.dragging.setIgnoreMove(!d.component.isValidSegDownEl(e.origEvent.target) || e.isTouch && d.component.props.eventSelection !== r.instance.instanceId)
				}, d.handleDragStart = function(e) {
					var t = d.component.context,
						n = d.eventRange;
					d.relevantEvents = fn(t.getCurrentData().eventStore, d.eventRange.instance.instanceId);
					var r = d.querySegEl(e);
					d.draggingSegEl = r, d.draggingSeg = zn(r), t.calendarApi.unselect(), t.emitter.trigger("eventResizeStart", {
						el: r,
						event: new mr(t, n.def, n.instance),
						jsEvent: e.origEvent,
						view: t.viewApi
					})
				}, d.handleHitUpdate = function(e, t, n) {
					var r = d.component.context,
						o = d.relevantEvents,
						i = d.hitDragging.initialHit,
						a = d.eventRange.instance,
						s = null,
						l = null,
						u = !1,
						c = {
							affectedEvents: o,
							mutatedEvents: {
								defs: {},
								instances: {}
							},
							isEvent: !0
						};
					e && (e.componentId === i.componentId && d.isHitComboAllowed && !d.isHitComboAllowed(i, e) || (s = function(e, t, n, r) {
						var o = e.context.dateEnv,
							i = Pn(e.dateSpan.range.start, t.dateSpan.range.start, o, e.largeUnit);
						if (n) {
							if (o.add(r.start, i) < r.end) return {
								startDelta: i
							}
						} else if (o.add(r.end, i) > r.start) return {
							endDelta: i
						};
						return null
					}(i, e, n.subjectEl.classList.contains("fc-event-resizer-start"), a.range))), s && (l = ur(o, r.getCurrentData().eventUiBases, s, r), c.mutatedEvents = l, la(c, e.dateProfile, r) || (u = !0, l = s = null, c.mutatedEvents = null)), l ? r.dispatch({
						type: "SET_EVENT_RESIZE",
						state: c
					}) : r.dispatch({
						type: "UNSET_EVENT_RESIZE"
					}), u ? Ne() : He(), t || (s && vs(i, e) && (s = null), d.validMutation = s, d.mutatedRelevantEvents = l)
				}, d.handleDragEnd = function(e) {
					var t = d.component.context,
						n = d.eventRange.def,
						r = d.eventRange.instance,
						o = new mr(t, n, r),
						i = d.relevantEvents,
						a = d.mutatedRelevantEvents;
					if (t.emitter.trigger("eventResizeStop", {
							el: d.draggingSegEl,
							event: o,
							jsEvent: e.origEvent,
							view: t.viewApi
						}), d.validMutation) {
						var s = new mr(t, a.defs[n.defId], r ? a.instances[r.instanceId] : null);
						t.dispatch({
							type: "MERGE_EVENTS",
							eventStore: a
						});
						var l = {
							oldEvent: o,
							event: s,
							relatedEvents: Er(a, t, r),
							revert: function() {
								t.dispatch({
									type: "MERGE_EVENTS",
									eventStore: i
								})
							}
						};
						t.emitter.trigger("eventResize", N(N({}, l), {
							el: d.draggingSegEl,
							startDelta: d.validMutation.startDelta || Rt(0),
							endDelta: d.validMutation.endDelta || Rt(0),
							jsEvent: e.origEvent,
							view: t.viewApi
						})), t.emitter.trigger("eventChange", l)
					} else t.emitter.trigger("_noEventResize");
					d.draggingSeg = null, d.relevantEvents = null, d.validMutation = null
				};
				var t = e.component,
					n = d.dragging = new ps(e.el);
				n.pointer.selector = ".fc-event-resizer", n.touchScrollAllowed = !1, n.autoScroller.isEnabled = t.context.options.dragScroll;
				var r = d.hitDragging = new hs(d.dragging, Ni(e));
				return r.emitter.on("pointerdown", d.handlePointerDown), r.emitter.on("dragstart", d.handleDragStart), r.emitter.on("hitupdate", d.handleHitUpdate), r.emitter.on("dragend", d.handleDragEnd), d
			}
			return s(e, o), e.prototype.destroy = function() {
				this.dragging.destroy()
			}, e.prototype.querySegEl = function(e) {
				return ve(e.subjectEl, ".fc-event")
			}, e
		}(Pi),
		bs = function() {
			function e(e) {
				var i = this;
				this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = function(e) {
					e.jsEvent && (i.isRecentPointerDateSelect = !0)
				}, this.onDocumentPointerDown = function(e) {
					var t = i.context.options.unselectCancel,
						n = be(e.origEvent);
					i.matchesCancel = !!ve(n, t), i.matchesEvent = !!ve(n, Es.SELECTOR)
				}, this.onDocumentPointerUp = function(e) {
					var t = i.context,
						n = i.documentPointer,
						r = t.getCurrentData();
					if (!n.wasTouchScroll) {
						if (r.dateSelection && !i.isRecentPointerDateSelect) {
							var o = t.options.unselectAuto;
							!o || o && i.matchesCancel || t.calendarApi.unselect(e)
						}
						r.eventSelection && !i.matchesEvent && t.dispatch({
							type: "UNSELECT_EVENT"
						})
					}
					i.isRecentPointerDateSelect = !1
				};
				var t = this.documentPointer = new os(document);
				t.shouldIgnoreMove = !0, t.shouldWatchScroll = !1, t.emitter.on("pointerdown", this.onDocumentPointerDown), t.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect)
			}
			return e.prototype.destroy = function() {
				this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy()
			}, e
		}(),
		Ds = {
			fixedMirrorParent: cn
		},
		Cs = {
			dateClick: cn,
			eventDragStart: cn,
			eventDragStop: cn,
			eventDrop: cn,
			eventResizeStart: cn,
			eventResizeStop: cn,
			eventResize: cn,
			drop: cn,
			eventReceive: cn,
			eventLeave: cn
		},
		ws = function() {
			function e(e, t) {
				var l = this;
				this.receivingContext = null, this.droppableEvent = null, this.suppliedDragMeta = null, this.dragMeta = null, this.handleDragStart = function(e) {
					l.dragMeta = l.buildDragMeta(e.subjectEl)
				}, this.handleHitUpdate = function(e, t, n) {
					var r = l.hitDragging.dragging,
						o = null,
						i = null,
						a = !1,
						s = {
							affectedEvents: {
								defs: {},
								instances: {}
							},
							mutatedEvents: {
								defs: {},
								instances: {}
							},
							isEvent: l.dragMeta.create
						};
					e && (o = e.context, l.canDropElOnCalendar(n.subjectEl, o) && (i = function(e, t, n) {
						for (var r = N({}, t.leftoverProps), o = 0, i = n.pluginHooks.externalDefTransforms; o < i.length; o++) {
							var a = i[o];
							N(r, a(e, t))
						}
						var s = Tn(r, n),
							l = kn(s.refined, s.extra, t.sourceId, e.allDay, n.options.forceEventDuration || Boolean(t.duration), n),
							u = e.range.start;
						e.allDay && t.startTime && (u = n.dateEnv.add(u, t.startTime));
						var c = t.duration ? n.dateEnv.add(u, t.duration) : lr(e.allDay, u, n);
						return {
							def: l,
							instance: dt(l.defId, {
								start: u,
								end: c
							})
						}
					}(e.dateSpan, l.dragMeta, o), s.mutatedEvents = pn(i), (a = !la(s, e.dateProfile, o)) && (s.mutatedEvents = {
						defs: {},
						instances: {}
					}, i = null))), l.displayDrag(o, s), r.setMirrorIsVisible(t || !i || !document.querySelector(".fc-event-mirror")), a ? Ne() : He(), t || (r.setMirrorNeedsRevert(!i), l.receivingContext = o, l.droppableEvent = i)
				}, this.handleDragEnd = function(e) {
					var t = l,
						n = t.receivingContext,
						r = t.droppableEvent;
					if (l.clearDrag(), n && r) {
						var o = l.hitDragging.finalHit,
							i = o.context.viewApi,
							a = l.dragMeta;
						if (n.emitter.trigger("drop", N(N({}, gs(o.dateSpan, n)), {
								draggedEl: e.subjectEl,
								jsEvent: e.origEvent,
								view: i
							})), a.create) {
							var s = pn(r);
							n.dispatch({
								type: "MERGE_EVENTS",
								eventStore: s
							}), e.isTouch && n.dispatch({
								type: "SELECT_EVENT",
								eventInstanceId: r.instance.instanceId
							}), n.emitter.trigger("eventReceive", {
								event: new mr(n, r.def, r.instance),
								relatedEvents: [],
								revert: function() {
									n.dispatch({
										type: "REMOVE_EVENTS",
										eventStore: s
									})
								},
								draggedEl: e.subjectEl,
								view: i
							})
						}
					}
					l.receivingContext = null, l.droppableEvent = null
				};
				var n = this.hitDragging = new hs(e, Hi);
				n.requireInitial = !1, n.emitter.on("dragstart", this.handleDragStart), n.emitter.on("hitupdate", this.handleHitUpdate), n.emitter.on("dragend", this.handleDragEnd), this.suppliedDragMeta = t
			}
			return e.prototype.buildDragMeta = function(e) {
				return "object" == typeof this.suppliedDragMeta ? Ui(this.suppliedDragMeta) : "function" == typeof this.suppliedDragMeta ? Ui(this.suppliedDragMeta(e)) : Ui((t = e, n = Ai.dataAttrPrefix, r = (n ? n + "-" : "") + "event", (o = t.getAttribute("data-" + r) || "") ? JSON.parse(o) : {
					create: !1
				}));
				var t, n, r, o
			}, e.prototype.displayDrag = function(e, t) {
				var n = this.receivingContext;
				n && n !== e && n.dispatch({
					type: "UNSET_EVENT_DRAG"
				}), e && e.dispatch({
					type: "SET_EVENT_DRAG",
					state: t
				})
			}, e.prototype.clearDrag = function() {
				this.receivingContext && this.receivingContext.dispatch({
					type: "UNSET_EVENT_DRAG"
				})
			}, e.prototype.canDropElOnCalendar = function(e, t) {
				var n = t.options.dropAccept;
				return "function" == typeof n ? n.call(t.calendarApi, e) : "string" != typeof n || !n || Boolean(ge(e, n))
			}, e
		}();
	Ai.dataAttrPrefix = "";
	var Rs = function() {
			function e(e, t) {
				var i = this;
				void 0 === t && (t = {}), this.handlePointerDown = function(e) {
					var t = i.dragging,
						n = i.settings,
						r = n.minDistance,
						o = n.longPressDelay;
					t.minDistance = null != r ? r : e.isTouch ? 0 : tn.eventDragMinDistance, t.delay = e.isTouch ? null != o ? o : tn.longPressDelay : 0
				}, this.handleDragStart = function(e) {
					e.isTouch && i.dragging.delay && e.subjectEl.classList.contains("fc-event") && i.dragging.mirror.getMirrorEl().classList.add("fc-event-selected")
				}, this.settings = t;
				var n = this.dragging = new ps(e);
				n.touchScrollAllowed = !1, null != t.itemSelector && (n.pointer.selector = t.itemSelector), null != t.appendTo && (n.mirror.parentNode = t.appendTo), n.emitter.on("pointerdown", this.handlePointerDown), n.emitter.on("dragstart", this.handleDragStart), new ws(n, t.eventData)
			}
			return e.prototype.destroy = function() {
				this.dragging.destroy()
			}, e
		}(),
		Ts = function(r) {
			function e(e) {
				var t = r.call(this, e) || this;
				t.shouldIgnoreMove = !1, t.mirrorSelector = "", t.currentMirrorEl = null, t.handlePointerDown = function(e) {
					t.emitter.trigger("pointerdown", e), t.shouldIgnoreMove || t.emitter.trigger("dragstart", e)
				}, t.handlePointerMove = function(e) {
					t.shouldIgnoreMove || t.emitter.trigger("dragmove", e)
				}, t.handlePointerUp = function(e) {
					t.emitter.trigger("pointerup", e), t.shouldIgnoreMove || t.emitter.trigger("dragend", e)
				};
				var n = t.pointer = new os(e);
				return n.emitter.on("pointerdown", t.handlePointerDown), n.emitter.on("pointermove", t.handlePointerMove), n.emitter.on("pointerup", t.handlePointerUp), t
			}
			return s(e, r), e.prototype.destroy = function() {
				this.pointer.destroy()
			}, e.prototype.setIgnoreMove = function(e) {
				this.shouldIgnoreMove = e
			}, e.prototype.setMirrorIsVisible = function(e) {
				if (e) this.currentMirrorEl && (this.currentMirrorEl.style.visibility = "", this.currentMirrorEl = null);
				else {
					var t = this.mirrorSelector ? document.querySelector(this.mirrorSelector) : null;
					t && ((this.currentMirrorEl = t).style.visibility = "hidden")
				}
			}, e
		}(Oi),
		_s = function() {
			function e(e, t) {
				var n = document;
				t = e === document || e instanceof Element ? (n = e, t || {}) : e || {};
				var r = this.dragging = new Ts(n);
				"string" == typeof t.itemSelector ? r.pointer.selector = t.itemSelector : n === document && (r.pointer.selector = "[data-event]"), "string" == typeof t.mirrorSelector && (r.mirrorSelector = t.mirrorSelector), new ws(r, t.eventData)
			}
			return e.prototype.destroy = function() {
				this.dragging.destroy()
			}, e
		}(),
		ks = Mo({
			componentInteractions: [ms, ys, Es, Ss],
			calendarInteractions: [bs],
			elementDraggingImpl: ps,
			optionRefiners: Ds,
			listenerRefiners: Cs
		}),
		xs = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.headerElRef = vo(), e
			}
			return s(e, t), e.prototype.renderSimpleLayout = function(e, t) {
				var n = this.props,
					r = this.context,
					o = [],
					i = Ma(r.options);
				return e && o.push({
					type: "header",
					key: "header",
					isSticky: i,
					chunk: {
						elRef: this.headerElRef,
						tableClassName: "fc-col-header",
						rowContent: e
					}
				}), o.push({
					type: "body",
					key: "body",
					liquid: !0,
					chunk: {
						content: t
					}
				}), fo(Fo, {
					viewSpec: r.viewSpec
				}, function(e, t) {
					return fo("div", {
						ref: e,
						className: ["fc-daygrid"].concat(t).join(" ")
					}, fo(Pa, {
						liquid: !n.isHeightAuto && !n.forPrint,
						collapsibleWidth: n.forPrint,
						cols: [],
						sections: o
					}))
				})
			}, e.prototype.renderHScrollLayout = function(e, t, n, r) {
				var o = this.context.pluginHooks.scrollGridImpl;
				if (!o) throw new Error("No ScrollGrid implementation");
				var i = this.props,
					a = this.context,
					s = !i.forPrint && Ma(a.options),
					l = !i.forPrint && Ia(a.options),
					u = [];
				return e && u.push({
					type: "header",
					key: "header",
					isSticky: s,
					chunks: [{
						key: "main",
						elRef: this.headerElRef,
						tableClassName: "fc-col-header",
						rowContent: e
					}]
				}), u.push({
					type: "body",
					key: "body",
					liquid: !0,
					chunks: [{
						key: "main",
						content: t
					}]
				}), l && u.push({
					type: "footer",
					key: "footer",
					isSticky: !0,
					chunks: [{
						key: "main",
						content: xa
					}]
				}), fo(Fo, {
					viewSpec: a.viewSpec
				}, function(e, t) {
					return fo("div", {
						ref: e,
						className: ["fc-daygrid"].concat(t).join(" ")
					}, fo(o, {
						liquid: !i.isHeightAuto && !i.forPrint,
						collapsibleWidth: i.forPrint,
						colGroups: [{
							cols: [{
								span: n,
								minWidth: r
							}]
						}],
						sections: u
					}))
				})
			}, e
		}(xo);

	function Ms(e, t) {
		for (var n = [], r = 0; r < t; r += 1) n[r] = [];
		for (var o = 0, i = e; o < i.length; o++) {
			var a = i[o];
			n[a.row].push(a)
		}
		return n
	}

	function Is(e, t) {
		for (var n = [], r = 0; r < t; r += 1) n[r] = [];
		for (var o = 0, i = e; o < i.length; o++) {
			var a = i[o];
			n[a.firstCol].push(a)
		}
		return n
	}

	function Ps(e, t) {
		var n = [];
		if (e) {
			for (a = 0; a < t; a += 1) n[a] = {
				affectedInstances: e.affectedInstances,
				isEvent: e.isEvent,
				segs: []
			};
			for (var r = 0, o = e.segs; r < o.length; r++) {
				var i = o[r];
				n[i.row].segs.push(i)
			}
		} else
			for (var a = 0; a < t; a += 1) n[a] = null;
		return n
	}
	var Ns = function(e) {
		function t() {
			return null !== e && e.apply(this, arguments) || this
		}
		return s(t, e), t.prototype.render = function() {
			var n = this.props,
				r = Zr(this.context, n.date);
			return fo(Ua, {
				date: n.date,
				dateProfile: n.dateProfile,
				todayRange: n.todayRange,
				showDayNumber: n.showDayNumber,
				extraHookProps: n.extraHookProps,
				defaultContent: Hs
			}, function(e, t) {
				return (t || n.forceDayTop) && fo("div", {
					className: "fc-daygrid-day-top",
					ref: e
				}, fo("a", N({
					id: n.dayNumberId,
					className: "fc-daygrid-day-number"
				}, r), t || fo(go, null, " ")))
			})
		}, t
	}(Ro);

	function Hs(e) {
		return e.dayNumberText
	}
	var Os = Qt({
		hour: "numeric",
		minute: "2-digit",
		omitZeroMinute: !0,
		meridiem: "narrow"
	});

	function As(e) {
		var t = e.eventRange.ui.display;
		return "list-item" === t || "auto" === t && !e.eventRange.def.allDay && e.firstCol === e.lastCol && e.isStart && e.isEnd
	}
	var Ls = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return s(t, e), t.prototype.render = function() {
				var e = this.props;
				return fo(Ha, N({}, e, {
					extraClassNames: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"],
					defaultTimeFormat: Os,
					defaultDisplayEventEnd: e.defaultDisplayEventEnd,
					disableResizing: !e.seg.eventRange.def.allDay
				}))
			}, t
		}(Ro),
		Us = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return s(t, e), t.prototype.render = function() {
				var o = this.props,
					i = this.context,
					e = i.options.eventTimeFormat || Os,
					t = $n(o.seg, e, i, !0, o.defaultDisplayEventEnd);
				return fo(Na, {
					seg: o.seg,
					timeText: t,
					defaultContent: Ws,
					isDragging: o.isDragging,
					isResizing: !1,
					isDateSelecting: !1,
					isSelected: o.isSelected,
					isPast: o.isPast,
					isFuture: o.isFuture,
					isToday: o.isToday
				}, function(e, t, n, r) {
					return fo("a", N({
						className: ["fc-daygrid-event", "fc-daygrid-dot-event"].concat(t).join(" "),
						ref: e
					}, tr(o.seg, i)), r)
				})
			}, t
		}(Ro);

	function Ws(e) {
		return fo(go, null, fo("div", {
			className: "fc-daygrid-event-dot",
			style: {
				borderColor: e.borderColor || e.backgroundColor
			}
		}), e.timeText && fo("div", {
			className: "fc-event-time"
		}, e.timeText), fo("div", {
			className: "fc-event-title"
		}, e.event.title || fo(go, null, " ")))
	}
	var Vs = function(t) {
		function e() {
			var e = null !== t && t.apply(this, arguments) || this;
			return e.compileSegs = Ut(Fs), e
		}
		return s(e, t), e.prototype.render = function() {
			var r = this.props,
				e = this.compileSegs(r.singlePlacements),
				t = e.allSegs,
				n = e.invisibleSegs;
			return fo(Za, {
				dateProfile: r.dateProfile,
				todayRange: r.todayRange,
				allDayDate: r.allDayDate,
				moreCnt: r.moreCnt,
				allSegs: t,
				hiddenSegs: n,
				alignmentElRef: r.alignmentElRef,
				alignGridTop: r.alignGridTop,
				extraDateSpan: r.extraDateSpan,
				popoverContent: function() {
					var n = (r.eventDrag ? r.eventDrag.affectedInstances : null) || (r.eventResize ? r.eventResize.affectedInstances : null) || {};
					return fo(go, null, t.map(function(e) {
						var t = e.eventRange.instance.instanceId;
						return fo("div", {
							className: "fc-daygrid-event-harness",
							key: t,
							style: {
								visibility: n[t] ? "hidden" : ""
							}
						}, As(e) ? fo(Us, N({
							seg: e,
							isDragging: !1,
							isSelected: t === r.eventSelection,
							defaultDisplayEventEnd: !1
						}, Jn(e, r.todayRange))) : fo(Ls, N({
							seg: e,
							isDragging: !1,
							isResizing: !1,
							isDateSelecting: !1,
							isSelected: t === r.eventSelection,
							defaultDisplayEventEnd: !1
						}, Jn(e, r.todayRange))))
					}))
				}
			}, function(e, t, n, r, o, i, a, s) {
				return fo("a", N({
					ref: e,
					className: ["fc-daygrid-more-link"].concat(t).join(" "),
					title: i,
					"aria-expanded": a,
					"aria-controls": s
				}, xe(o)), r)
			})
		}, e
	}(Ro);

	function Fs(e) {
		for (var t = [], n = [], r = 0, o = e; r < o.length; r++) {
			var i = o[r];
			t.push(i.seg), i.isVisible || n.push(i.seg)
		}
		return {
			allSegs: t,
			invisibleSegs: n
		}
	}
	var Bs = Qt({
			week: "narrow"
		}),
		zs = function(e) {
			function t() {
				var t = null !== e && e.apply(this, arguments) || this;
				return t.rootElRef = vo(), t.state = {
					dayNumberId: we()
				}, t.handleRootEl = function(e) {
					ko(t.rootElRef, e), ko(t.props.elRef, e)
				}, t
			}
			return s(t, e), t.prototype.render = function() {
				var e = this.context,
					o = this.props,
					i = this.state,
					a = this.rootElRef,
					s = o.date,
					l = o.dateProfile,
					u = Zr(e, s, "week");
				return fo(Va, {
					date: s,
					dateProfile: l,
					todayRange: o.todayRange,
					showDayNumber: o.showDayNumber,
					extraHookProps: o.extraHookProps,
					elRef: this.handleRootEl
				}, function(e, t, n, r) {
					return fo("td", N({
						ref: e,
						role: "gridcell",
						className: ["fc-daygrid-day"].concat(t, o.extraClassNames || []).join(" ")
					}, n, o.extraDataAttrs, o.showDayNumber ? {
						"aria-labelledby": i.dayNumberId
					} : {}), fo("div", {
						className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
						ref: o.innerElRef
					}, o.showWeekNumber && fo(ja, {
						date: s,
						defaultFormat: Bs
					}, function(e, t, n, r) {
						return fo("a", N({
							ref: e,
							className: ["fc-daygrid-week-number"].concat(t).join(" ")
						}, u), r)
					}), !r && fo(Ns, {
						date: s,
						dateProfile: l,
						showDayNumber: o.showDayNumber,
						dayNumberId: i.dayNumberId,
						forceDayTop: o.forceDayTop,
						todayRange: o.todayRange,
						extraHookProps: o.extraHookProps
					}), fo("div", {
						className: "fc-daygrid-day-events",
						ref: o.fgContentElRef
					}, o.fgContent, fo("div", {
						className: "fc-daygrid-day-bottom",
						style: {
							marginTop: o.moreMarginTop
						}
					}, fo(Vs, {
						allDayDate: s,
						singlePlacements: o.singlePlacements,
						moreCnt: o.moreCnt,
						alignmentElRef: a,
						alignGridTop: !o.showDayNumber,
						extraDateSpan: o.extraDateSpan,
						dateProfile: o.dateProfile,
						eventSelection: o.eventSelection,
						eventDrag: o.eventDrag,
						eventResize: o.eventResize,
						todayRange: o.todayRange
					}))), fo("div", {
						className: "fc-daygrid-day-bg"
					}, o.bgContent)))
				})
			}, t
		}(xo);

	function js(e, t, n, r) {
		if (e.firstCol === t && e.lastCol === n - 1) return e;
		var o = e.eventRange,
			i = o.range,
			a = On(i, {
				start: r[t].date,
				end: Ke(r[n - 1].date, 1)
			});
		return N(N({}, e), {
			firstCol: t,
			lastCol: n - 1,
			eventRange: {
				def: o.def,
				ui: N(N({}, o.ui), {
					durationEditable: !1
				}),
				instance: o.instance,
				range: a
			},
			isStart: e.isStart && a.start.valueOf() === i.start.valueOf(),
			isEnd: e.isEnd && a.end.valueOf() === i.end.valueOf()
		})
	}
	var Gs = function(c) {
			function e() {
				var e = null !== c && c.apply(this, arguments) || this;
				return e.hiddenConsumes = !1, e.forceHidden = {}, e
			}
			return s(e, c), e.prototype.addSegs = function(e) {
				for (var t = this, n = c.prototype.addSegs.call(this, e), r = this.entriesByLevel, o = function(e) {
						return !t.forceHidden[Ti(e)]
					}, i = 0; i < r.length; i += 1) r[i] = r[i].filter(o);
				return n
			}, e.prototype.handleInvalidInsertion = function(e, t, n) {
				var r = this.entriesByLevel,
					o = this.forceHidden,
					i = e.touchingEntry,
					a = e.touchingLevel,
					s = e.touchingLateral;
				if (this.hiddenConsumes && i) {
					var l = Ti(i);
					if (!o[l])
						if (this.allowReslicing) {
							var u = N(N({}, i), {
								span: xi(i.span, t.span)
							});
							o[Ti(u)] = !0, r[a][s] = u, this.splitEntry(i, t, n)
						} else o[l] = !0, n.push(i)
				}
				return c.prototype.handleInvalidInsertion.call(this, e, t, n)
			}, e
		}(wi),
		qs = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.cellElRefs = new ya, e.frameElRefs = new ya, e.fgElRefs = new ya, e.segHarnessRefs = new ya, e.rootElRef = vo(), e.state = {
					framePositions: null,
					maxContentHeight: null,
					eventInstanceHeights: {}
				}, e
			}
			return s(e, t), e.prototype.render = function() {
				var o = this,
					i = this.props,
					e = this.state,
					t = this.context.options,
					n = i.cells.length,
					a = Is(i.businessHourSegs, n),
					s = Is(i.bgEventSegs, n),
					l = Is(this.getHighlightSegs(), n),
					u = Is(this.getMirrorSegs(), n),
					r = function(e, t, n, r, o, i, a) {
						var s = new Gs;
						s.allowReslicing = !0, s.strictOrder = r, !0 === t || !0 === n ? (s.maxCoord = i, s.hiddenConsumes = !0) : "number" == typeof t ? s.maxStackCnt = t : "number" == typeof n && (s.maxStackCnt = n, s.hiddenConsumes = !0);
						for (var l = [], u = [], c = 0; c < e.length; c += 1) {
							var d = o[(R = e[c]).eventRange.instance.instanceId];
							null != d ? l.push({
								index: c,
								thickness: d,
								span: {
									start: R.firstCol,
									end: R.lastCol + 1
								}
							}) : u.push(R)
						}
						for (var p = s.addSegs(l), f = function(e, t, n) {
								for (var r = function(e, t) {
										for (var n = [], r = 0; r < t; r += 1) n.push([]);
										for (var o = 0, i = e; o < i.length; o++) {
											var a = i[o];
											for (r = a.span.start; r < a.span.end; r += 1) n[r].push(a)
										}
										return n
									}(e, n.length), o = [], i = [], a = [], s = 0; s < n.length; s += 1) {
									for (var l = r[s], u = [], c = 0, d = 0, p = 0, f = l; p < f.length; p++) {
										var h = t[(y = f[p]).index];
										u.push({
											seg: js(h, s, s + 1, n),
											isVisible: !0,
											isAbsolute: !1,
											absoluteTop: y.levelCoord,
											marginTop: y.levelCoord - c
										}), c = y.levelCoord + y.thickness
									}
									for (var v = [], g = d = c = 0, m = l; g < m.length; g++) {
										h = t[(y = m[g]).index];
										var y, E = 1 < y.span.end - y.span.start,
											S = y.span.start === s;
										d += y.levelCoord - c, c = y.levelCoord + y.thickness, E ? (d += y.thickness, S && v.push({
											seg: js(h, y.span.start, y.span.end, n),
											isVisible: !0,
											isAbsolute: !0,
											absoluteTop: y.levelCoord,
											marginTop: 0
										})) : S && (v.push({
											seg: js(h, y.span.start, y.span.end, n),
											isVisible: !0,
											isAbsolute: !1,
											absoluteTop: y.levelCoord,
											marginTop: d
										}), d = 0)
									}
									o.push(u), i.push(v), a.push(d)
								}
								return {
									singleColPlacements: o,
									multiColPlacements: i,
									leftoverMargins: a
								}
							}(s.toRects(), e, a), h = f.singleColPlacements, v = f.multiColPlacements, g = f.leftoverMargins, m = [], y = [], E = 0, S = u; E < S.length; E++) {
							v[(R = S[E]).firstCol].push({
								seg: R,
								isVisible: !1,
								isAbsolute: !0,
								absoluteTop: 0,
								marginTop: 0
							});
							for (var b = R.firstCol; b <= R.lastCol; b += 1) h[b].push({
								seg: js(R, b, b + 1, a),
								isVisible: !1,
								isAbsolute: !1,
								absoluteTop: 0,
								marginTop: 0
							})
						}
						for (b = 0; b < a.length; b += 1) m.push(0);
						for (var D = 0, C = p; D < C.length; D++) {
							var w = C[D],
								R = e[w.index],
								T = w.span;
							for (v[T.start].push({
									seg: js(R, T.start, T.end, a),
									isVisible: !1,
									isAbsolute: !0,
									absoluteTop: 0,
									marginTop: 0
								}), b = T.start; b < T.end; b += 1) m[b] += 1, h[b].push({
								seg: js(R, b, b + 1, a),
								isVisible: !1,
								isAbsolute: !1,
								absoluteTop: 0,
								marginTop: 0
							})
						}
						for (b = 0; b < a.length; b += 1) y.push(g[b]);
						return {
							singleColPlacements: h,
							multiColPlacements: v,
							moreCnts: m,
							moreMarginTops: y
						}
					}(qn(i.fgEventSegs, t.eventOrder), i.dayMaxEvents, i.dayMaxEventRows, t.eventOrderStrict, e.eventInstanceHeights, e.maxContentHeight, i.cells),
					c = r.singleColPlacements,
					d = r.multiColPlacements,
					p = r.moreCnts,
					f = r.moreMarginTops,
					h = i.eventDrag && i.eventDrag.affectedInstances || i.eventResize && i.eventResize.affectedInstances || {};
				return fo("tr", {
					ref: this.rootElRef,
					role: "row"
				}, i.renderIntro && i.renderIntro(), i.cells.map(function(e, t) {
					var n = o.renderFgSegs(t, i.forPrint ? c[t] : d[t], i.todayRange, h),
						r = o.renderFgSegs(t, function(e, s) {
							if (!e.length) return [];
							var t = function(e) {
								for (var t = {}, n = 0, r = s; n < r.length; n++)
									for (var o = 0, i = r[n]; o < i.length; o++) {
										var a = i[o];
										t[a.seg.eventRange.instance.instanceId] = a.absoluteTop
									}
								return t
							}();
							return e.map(function(e) {
								return {
									seg: e,
									isVisible: !0,
									isAbsolute: !0,
									absoluteTop: t[e.eventRange.instance.instanceId],
									marginTop: 0
								}
							})
						}(u[t], d), i.todayRange, {}, Boolean(i.eventDrag), Boolean(i.eventResize), !1);
					return fo(zs, {
						key: e.key,
						elRef: o.cellElRefs.createRef(e.key),
						innerElRef: o.frameElRefs.createRef(e.key),
						dateProfile: i.dateProfile,
						date: e.date,
						showDayNumber: i.showDayNumbers,
						showWeekNumber: i.showWeekNumbers && 0 === t,
						forceDayTop: i.showWeekNumbers,
						todayRange: i.todayRange,
						eventSelection: i.eventSelection,
						eventDrag: i.eventDrag,
						eventResize: i.eventResize,
						extraHookProps: e.extraHookProps,
						extraDataAttrs: e.extraDataAttrs,
						extraClassNames: e.extraClassNames,
						extraDateSpan: e.extraDateSpan,
						moreCnt: p[t],
						moreMarginTop: f[t],
						singlePlacements: c[t],
						fgContentElRef: o.fgElRefs.createRef(e.key),
						fgContent: fo(go, null, fo(go, null, n), fo(go, null, r)),
						bgContent: fo(go, null, o.renderFillSegs(l[t], "highlight"), o.renderFillSegs(a[t], "non-business"), o.renderFillSegs(s[t], "bg-event"))
					})
				}))
			}, e.prototype.componentDidMount = function() {
				this.updateSizing(!0)
			}, e.prototype.componentDidUpdate = function(e, t) {
				var n = this.props;
				this.updateSizing(!yt(e, n))
			}, e.prototype.getHighlightSegs = function() {
				var e = this.props;
				return e.eventDrag && e.eventDrag.segs.length ? e.eventDrag.segs : e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : e.dateSelectionSegs
			}, e.prototype.getMirrorSegs = function() {
				var e = this.props;
				return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : []
			}, e.prototype.renderFgSegs = function(e, t, n, r, o, i, a) {
				var s = this.context,
					l = this.props.eventSelection,
					u = this.state.framePositions,
					c = 1 === this.props.cells.length,
					d = o || i || a,
					p = [];
				if (u)
					for (var f = 0, h = t; f < h.length; f++) {
						var v = h[f],
							g = v.seg,
							m = g.eventRange.instance.instanceId,
							y = m + ":" + e,
							E = v.isVisible && !r[m],
							S = v.isAbsolute,
							b = "",
							D = "";
						S && (s.isRtl ? (D = 0, b = u.lefts[g.lastCol] - u.lefts[g.firstCol]) : (b = 0, D = u.rights[g.firstCol] - u.rights[g.lastCol])), p.push(fo("div", {
							className: "fc-daygrid-event-harness" + (S ? " fc-daygrid-event-harness-abs" : ""),
							key: y,
							ref: d ? null : this.segHarnessRefs.createRef(y),
							style: {
								visibility: E ? "" : "hidden",
								marginTop: S ? "" : v.marginTop,
								top: S ? v.absoluteTop : "",
								left: b,
								right: D
							}
						}, As(g) ? fo(Us, N({
							seg: g,
							isDragging: o,
							isSelected: m === l,
							defaultDisplayEventEnd: c
						}, Jn(g, n))) : fo(Ls, N({
							seg: g,
							isDragging: o,
							isResizing: i,
							isDateSelecting: a,
							isSelected: m === l,
							defaultDisplayEventEnd: c
						}, Jn(g, n)))))
					}
				return p
			}, e.prototype.renderFillSegs = function(e, t) {
				var n = this.context.isRtl,
					r = this.props.todayRange,
					o = this.state.framePositions,
					i = [];
				if (o)
					for (var a = 0, s = e; a < s.length; a++) {
						var l = s[a],
							u = n ? {
								right: 0,
								left: o.lefts[l.lastCol] - o.lefts[l.firstCol]
							} : {
								left: 0,
								right: o.rights[l.firstCol] - o.rights[l.lastCol]
							};
						i.push(fo("div", {
							key: er(l.eventRange),
							className: "fc-daygrid-bg-harness",
							style: u
						}, "bg-event" === t ? fo(Ba, N({
							seg: l
						}, Jn(l, r))) : Fa(t)))
					}
				return fo.apply(void 0, m([go, {}], i))
			}, e.prototype.updateSizing = function(e) {
				var t = this.props,
					n = this.frameElRefs;
				if (!t.forPrint && null !== t.clientWidth) {
					if (e) {
						var r = t.cells.map(function(e) {
							return n.currentMap[e.key]
						});
						if (r.length) {
							var o = this.rootElRef.current;
							this.setState({
								framePositions: new ao(o, r, !0, !1)
							})
						}
					}
					var i = this.state.eventInstanceHeights,
						a = this.queryEventInstanceHeights(),
						s = !0 === t.dayMaxEvents || !0 === t.dayMaxEventRows;
					this.safeSetState({
						eventInstanceHeights: N(N({}, i), a),
						maxContentHeight: s ? this.computeMaxContentHeight() : null
					})
				}
			}, e.prototype.queryEventInstanceHeights = function() {
				var e = this.segHarnessRefs.currentMap,
					t = {};
				for (var n in e) {
					var r = Math.round(e[n].getBoundingClientRect().height),
						o = n.split(":")[0];
					t[o] = Math.max(t[o] || 0, r)
				}
				return t
			}, e.prototype.computeMaxContentHeight = function() {
				var e = this.props.cells[0].key,
					t = this.cellElRefs.currentMap[e],
					n = this.fgElRefs.currentMap[e];
				return t.getBoundingClientRect().bottom - n.getBoundingClientRect().top
			}, e.prototype.getCellEls = function() {
				var t = this.cellElRefs.currentMap;
				return this.props.cells.map(function(e) {
					return t[e.key]
				})
			}, e
		}(xo);
	qs.addStateEquality({
		eventInstanceHeights: yt
	});
	var Ys = function(e) {
		function t() {
			var t = null !== e && e.apply(this, arguments) || this;
			return t.splitBusinessHourSegs = Ut(Ms), t.splitBgEventSegs = Ut(Ms), t.splitFgEventSegs = Ut(Ms), t.splitDateSelectionSegs = Ut(Ms), t.splitEventDrag = Ut(Ps), t.splitEventResize = Ut(Ps), t.rowRefs = new ya, t.handleRootEl = function(e) {
				(t.rootEl = e) ? t.context.registerInteractiveComponent(t, {
					el: e,
					isHitComboAllowed: t.props.isHitComboAllowed
				}): t.context.unregisterInteractiveComponent(t)
			}, t
		}
		return s(t, e), t.prototype.render = function() {
			var r = this,
				o = this.props,
				i = o.dateProfile,
				a = o.dayMaxEventRows,
				s = o.dayMaxEvents,
				t = o.expandRows,
				l = o.cells.length,
				u = this.splitBusinessHourSegs(o.businessHourSegs, l),
				c = this.splitBgEventSegs(o.bgEventSegs, l),
				d = this.splitFgEventSegs(o.fgEventSegs, l),
				p = this.splitDateSelectionSegs(o.dateSelectionSegs, l),
				f = this.splitEventDrag(o.eventDrag, l),
				h = this.splitEventResize(o.eventResize, l),
				e = !0 === s || !0 === a;
			return e && !t && (e = !1, s = a = null), fo("div", {
				className: ["fc-daygrid-body", e ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced", t ? "" : "fc-daygrid-body-natural"].join(" "),
				ref: this.handleRootEl,
				style: {
					width: o.clientWidth,
					minWidth: o.tableMinWidth
				}
			}, fo(ea, {
				unit: "day"
			}, function(e, n) {
				return fo(go, null, fo("table", {
					role: "presentation",
					className: "fc-scrollgrid-sync-table",
					style: {
						width: o.clientWidth,
						minWidth: o.tableMinWidth,
						height: t ? o.clientHeight : ""
					}
				}, o.colGroupNode, fo("tbody", {
					role: "presentation"
				}, o.cells.map(function(e, t) {
					return fo(qs, {
						ref: r.rowRefs.createRef(t),
						key: e.length ? e[0].date.toISOString() : t,
						showDayNumbers: 1 < l,
						showWeekNumbers: o.showWeekNumbers,
						todayRange: n,
						dateProfile: i,
						cells: e,
						renderIntro: o.renderRowIntro,
						businessHourSegs: u[t],
						eventSelection: o.eventSelection,
						bgEventSegs: c[t].filter(Zs),
						fgEventSegs: d[t],
						dateSelectionSegs: p[t],
						eventDrag: f[t],
						eventResize: h[t],
						dayMaxEvents: s,
						dayMaxEventRows: a,
						clientWidth: o.clientWidth,
						clientHeight: o.clientHeight,
						forPrint: o.forPrint
					})
				}))))
			}))
		}, t.prototype.prepareHits = function() {
			this.rowPositions = new ao(this.rootEl, this.rowRefs.collect().map(function(e) {
				return e.getCellEls()[0]
			}), !1, !0), this.colPositions = new ao(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), !0, !1)
		}, t.prototype.queryHit = function(e, t) {
			var n = this.colPositions,
				r = this.rowPositions,
				o = n.leftToIndex(e),
				i = r.topToIndex(t);
			if (null == i || null == o) return null;
			var a = this.props.cells[i][o];
			return {
				dateProfile: this.props.dateProfile,
				dateSpan: N({
					range: this.getCellRange(i, o),
					allDay: !0
				}, a.extraDateSpan),
				dayEl: this.getCellEl(i, o),
				rect: {
					left: n.lefts[o],
					right: n.rights[o],
					top: r.tops[i],
					bottom: r.bottoms[i]
				},
				layer: 0
			}
		}, t.prototype.getCellEl = function(e, t) {
			return this.rowRefs.currentMap[e].getCellEls()[t]
		}, t.prototype.getCellRange = function(e, t) {
			var n = this.props.cells[e][t].date;
			return {
				start: n,
				end: Ke(n, 1)
			}
		}, t
	}(xo);

	function Zs(e) {
		return e.eventRange.def.allDay
	}
	var Xs = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.forceDayIfListItem = !0, e
			}
			return s(e, t), e.prototype.sliceRange = function(e, t) {
				return t.sliceRange(e)
			}, e
		}(aa),
		Ks = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.slicer = new Xs, e.tableRef = vo(), e
			}
			return s(e, t), e.prototype.render = function() {
				var e = this.props,
					t = this.context;
				return fo(Ys, N({
					ref: this.tableRef
				}, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, t, e.dayTableModel), {
					dateProfile: e.dateProfile,
					cells: e.dayTableModel.cells,
					colGroupNode: e.colGroupNode,
					tableMinWidth: e.tableMinWidth,
					renderRowIntro: e.renderRowIntro,
					dayMaxEvents: e.dayMaxEvents,
					dayMaxEventRows: e.dayMaxEventRows,
					showWeekNumbers: e.showWeekNumbers,
					expandRows: e.expandRows,
					headerAlignElRef: e.headerAlignElRef,
					clientWidth: e.clientWidth,
					clientHeight: e.clientHeight,
					forPrint: e.forPrint
				}))
			}, e
		}(xo),
		$s = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.buildDayTableModel = Ut(Js), e.headerRef = vo(), e.tableRef = vo(), e
			}
			return s(e, t), e.prototype.render = function() {
				var t = this,
					e = this.context,
					n = e.options,
					r = e.dateProfileGenerator,
					o = this.props,
					i = this.buildDayTableModel(o.dateProfile, r),
					a = n.dayHeaders && fo(na, {
						ref: this.headerRef,
						dateProfile: o.dateProfile,
						dates: i.headerDates,
						datesRepDistinctDays: 1 === i.rowCnt
					}),
					s = function(e) {
						return fo(Ks, {
							ref: t.tableRef,
							dateProfile: o.dateProfile,
							dayTableModel: i,
							businessHours: o.businessHours,
							dateSelection: o.dateSelection,
							eventStore: o.eventStore,
							eventUiBases: o.eventUiBases,
							eventSelection: o.eventSelection,
							eventDrag: o.eventDrag,
							eventResize: o.eventResize,
							nextDayThreshold: n.nextDayThreshold,
							colGroupNode: e.tableColGroupNode,
							tableMinWidth: e.tableMinWidth,
							dayMaxEvents: n.dayMaxEvents,
							dayMaxEventRows: n.dayMaxEventRows,
							showWeekNumbers: n.weekNumbers,
							expandRows: !o.isHeightAuto,
							headerAlignElRef: t.headerElRef,
							clientWidth: e.clientWidth,
							clientHeight: e.clientHeight,
							forPrint: o.forPrint
						})
					};
				return n.dayMinWidth ? this.renderHScrollLayout(a, s, i.colCnt, n.dayMinWidth) : this.renderSimpleLayout(a, s)
			}, e
		}(xs);

	function Js(e, t) {
		var n = new oa(e.renderRange, t);
		return new ia(n, /year|month|week/.test(e.currentRangeUnit))
	}
	var Qs = Mo({
			initialView: "dayGridMonth",
			views: {
				dayGrid: {
					component: $s,
					dateProfileGeneratorClass: function(l) {
						function e() {
							return null !== l && l.apply(this, arguments) || this
						}
						return s(e, l), e.prototype.buildRenderRange = function(e, t, n) {
							var r, o = this.props.dateEnv,
								i = l.prototype.buildRenderRange.call(this, e, t, n),
								a = i.start,
								s = i.end;
							return /^(year|month)$/.test(t) && (a = o.startOfWeek(a), (r = o.startOfWeek(s)).valueOf() !== s.valueOf() && (s = Xe(r, 1))), this.props.monthMode && this.props.fixedWeekCount && (s = Xe(s, 6 - Math.ceil(Je(a, s)))), {
								start: a,
								end: s
							}
						}, e
					}(qo)
				},
				dayGridDay: {
					type: "dayGrid",
					duration: {
						days: 1
					}
				},
				dayGridWeek: {
					type: "dayGrid",
					duration: {
						weeks: 1
					}
				},
				dayGridMonth: {
					type: "dayGrid",
					duration: {
						months: 1
					},
					monthMode: !0,
					fixedWeekCount: !0
				}
			}
		}),
		el = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return s(t, e), t.prototype.getKeyInfo = function() {
				return {
					allDay: {},
					timed: {}
				}
			}, t.prototype.getKeysForDateSpan = function(e) {
				return e.allDay ? ["allDay"] : ["timed"]
			}, t.prototype.getKeysForEventDef = function(e) {
				return e.allDay ? Fn(e) ? ["timed", "allDay"] : ["allDay"] : ["timed"]
			}, t
		}(Br),
		tl = Qt({
			hour: "numeric",
			minute: "2-digit",
			omitZeroMinute: !0,
			meridiem: "short"
		});

	function nl(a) {
		var s = ["fc-timegrid-slot", "fc-timegrid-slot-label", a.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"];
		return fo(Do.Consumer, null, function(e) {
			if (!a.isLabeled) return fo("td", {
				className: s.join(" "),
				"data-time": a.isoTimeStr
			});
			var t = e.dateEnv,
				n = e.options,
				r = e.viewApi,
				o = null == n.slotLabelFormat ? tl : Array.isArray(n.slotLabelFormat) ? Qt(n.slotLabelFormat[0]) : Qt(n.slotLabelFormat),
				i = {
					level: 0,
					time: a.time,
					date: t.toDate(a.date),
					view: r,
					text: t.format(a.date, o)
				};
			return fo(No, {
				hookProps: i,
				classNames: n.slotLabelClassNames,
				content: n.slotLabelContent,
				defaultContent: rl,
				didMount: n.slotLabelDidMount,
				willUnmount: n.slotLabelWillUnmount
			}, function(e, t, n, r) {
				return fo("td", {
					ref: e,
					className: s.concat(t).join(" "),
					"data-time": a.isoTimeStr
				}, fo("div", {
					className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"
				}, fo("div", {
					className: "fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion",
					ref: n
				}, r)))
			})
		})
	}

	function rl(e) {
		return e.text
	}
	var ol = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return s(t, e), t.prototype.render = function() {
				return this.props.slatMetas.map(function(e) {
					return fo("tr", {
						key: e.key
					}, fo(nl, N({}, e)))
				})
			}, t
		}(Ro),
		il = Qt({
			week: "short"
		}),
		al = function(e) {
			function t() {
				var a = null !== e && e.apply(this, arguments) || this;
				return a.allDaySplitter = new el, a.headerElRef = vo(), a.rootElRef = vo(), a.scrollerElRef = vo(), a.state = {
					slatCoords: null
				}, a.handleScrollTopRequest = function(e) {
					var t = a.scrollerElRef.current;
					t && (t.scrollTop = e)
				}, a.renderHeadAxis = function(e, o) {
					void 0 === o && (o = "");
					var t = a.context.options,
						n = a.props.dateProfile.renderRange,
						i = 1 === Qe(n.start, n.end) ? Zr(a.context, n.start, "week") : {};
					return t.weekNumbers && "day" === e ? fo(ja, {
						date: n.start,
						defaultFormat: il
					}, function(e, t, n, r) {
						return fo("th", {
							ref: e,
							"aria-hidden": !0,
							className: ["fc-timegrid-axis", "fc-scrollgrid-shrink"].concat(t).join(" ")
						}, fo("div", {
							className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liquid",
							style: {
								height: o
							}
						}, fo("a", N({
							ref: n,
							className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner"
						}, i), r)))
					}) : fo("th", {
						"aria-hidden": !0,
						className: "fc-timegrid-axis"
					}, fo("div", {
						className: "fc-timegrid-axis-frame",
						style: {
							height: o
						}
					}))
				}, a.renderTableRowAxis = function(o) {
					var e = a.context,
						t = e.options,
						n = e.viewApi,
						r = {
							text: t.allDayText,
							view: n
						};
					return fo(No, {
						hookProps: r,
						classNames: t.allDayClassNames,
						content: t.allDayContent,
						defaultContent: sl,
						didMount: t.allDayDidMount,
						willUnmount: t.allDayWillUnmount
					}, function(e, t, n, r) {
						return fo("td", {
							ref: e,
							"aria-hidden": !0,
							className: ["fc-timegrid-axis", "fc-scrollgrid-shrink"].concat(t).join(" ")
						}, fo("div", {
							className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame" + (null == o ? " fc-timegrid-axis-frame-liquid" : ""),
							style: {
								height: o
							}
						}, fo("span", {
							className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner",
							ref: n
						}, r)))
					})
				}, a.handleSlatCoords = function(e) {
					a.setState({
						slatCoords: e
					})
				}, a
			}
			return s(t, e), t.prototype.renderSimpleLayout = function(e, t, n) {
				var r = this.context,
					o = this.props,
					i = [],
					a = Ma(r.options);
				return e && i.push({
					type: "header",
					key: "header",
					isSticky: a,
					chunk: {
						elRef: this.headerElRef,
						tableClassName: "fc-col-header",
						rowContent: e
					}
				}), t && (i.push({
					type: "body",
					key: "all-day",
					chunk: {
						content: t
					}
				}), i.push({
					type: "body",
					key: "all-day-divider",
					outerContent: fo("tr", {
						role: "presentation",
						className: "fc-scrollgrid-section"
					}, fo("td", {
						className: "fc-timegrid-divider " + r.theme.getClass("tableCellShaded")
					}))
				})), i.push({
					type: "body",
					key: "body",
					liquid: !0,
					expandRows: Boolean(r.options.expandRows),
					chunk: {
						scrollerElRef: this.scrollerElRef,
						content: n
					}
				}), fo(Fo, {
					viewSpec: r.viewSpec,
					elRef: this.rootElRef
				}, function(e, t) {
					return fo("div", {
						className: ["fc-timegrid"].concat(t).join(" "),
						ref: e
					}, fo(Pa, {
						liquid: !o.isHeightAuto && !o.forPrint,
						collapsibleWidth: o.forPrint,
						cols: [{
							width: "shrink"
						}],
						sections: i
					}))
				})
			}, t.prototype.renderHScrollLayout = function(e, t, n, r, o, i, a) {
				var s = this,
					l = this.context.pluginHooks.scrollGridImpl;
				if (!l) throw new Error("No ScrollGrid implementation");
				var u = this.context,
					c = this.props,
					d = !c.forPrint && Ma(u.options),
					p = !c.forPrint && Ia(u.options),
					f = [];
				e && f.push({
					type: "header",
					key: "header",
					isSticky: d,
					syncRowHeights: !0,
					chunks: [{
						key: "axis",
						rowContent: function(e) {
							return fo("tr", {
								role: "presentation"
							}, s.renderHeadAxis("day", e.rowSyncHeights[0]))
						}
					}, {
						key: "cols",
						elRef: this.headerElRef,
						tableClassName: "fc-col-header",
						rowContent: e
					}]
				}), t && (f.push({
					type: "body",
					key: "all-day",
					syncRowHeights: !0,
					chunks: [{
						key: "axis",
						rowContent: function(e) {
							return fo("tr", {
								role: "presentation"
							}, s.renderTableRowAxis(e.rowSyncHeights[0]))
						}
					}, {
						key: "cols",
						content: t
					}]
				}), f.push({
					key: "all-day-divider",
					type: "body",
					outerContent: fo("tr", {
						role: "presentation",
						className: "fc-scrollgrid-section"
					}, fo("td", {
						colSpan: 2,
						className: "fc-timegrid-divider " + u.theme.getClass("tableCellShaded")
					}))
				}));
				var h = u.options.nowIndicator;
				return f.push({
					type: "body",
					key: "body",
					liquid: !0,
					expandRows: Boolean(u.options.expandRows),
					chunks: [{
						key: "axis",
						content: function(e) {
							return fo("div", {
								className: "fc-timegrid-axis-chunk"
							}, fo("table", {
								"aria-hidden": !0,
								style: {
									height: e.expandRows ? e.clientHeight : ""
								}
							}, e.tableColGroupNode, fo("tbody", null, fo(ol, {
								slatMetas: i
							}))), fo("div", {
								className: "fc-timegrid-now-indicator-container"
							}, fo(ea, {
								unit: h ? "minute" : "day"
							}, function(e) {
								var o = h && a && a.safeComputeTop(e);
								return "number" == typeof o ? fo(Aa, {
									isAxis: !0,
									date: e
								}, function(e, t, n, r) {
									return fo("div", {
										ref: e,
										className: ["fc-timegrid-now-indicator-arrow"].concat(t).join(" "),
										style: {
											top: o
										}
									}, r)
								}) : null
							})))
						}
					}, {
						key: "cols",
						scrollerElRef: this.scrollerElRef,
						content: n
					}]
				}), p && f.push({
					key: "footer",
					type: "footer",
					isSticky: !0,
					chunks: [{
						key: "axis",
						content: xa
					}, {
						key: "cols",
						content: xa
					}]
				}), fo(Fo, {
					viewSpec: u.viewSpec,
					elRef: this.rootElRef
				}, function(e, t) {
					return fo("div", {
						className: ["fc-timegrid"].concat(t).join(" "),
						ref: e
					}, fo(l, {
						liquid: !c.isHeightAuto && !c.forPrint,
						collapsibleWidth: !1,
						colGroups: [{
							width: "shrink",
							cols: [{
								width: "shrink"
							}]
						}, {
							cols: [{
								span: r,
								minWidth: o
							}]
						}],
						sections: f
					}))
				})
			}, t.prototype.getAllDayMaxEventProps = function() {
				var e = this.context.options,
					t = e.dayMaxEvents,
					n = e.dayMaxEventRows;
				return !0 !== t && !0 !== n || (t = void 0, n = 5), {
					dayMaxEvents: t,
					dayMaxEventRows: n
				}
			}, t
		}(xo);

	function sl(e) {
		return e.text
	}
	var ll = function() {
			function e(e, t, n) {
				this.positions = e, this.dateProfile = t, this.slotDuration = n
			}
			return e.prototype.safeComputeTop = function(e) {
				var t = this.dateProfile;
				if (Wn(t.currentRange, e)) {
					var n = rt(e),
						r = e.valueOf() - n.valueOf();
					if (r >= Mt(t.slotMinTime) && r < Mt(t.slotMaxTime)) return this.computeTimeTop(Rt(r))
				}
				return null
			}, e.prototype.computeDateTop = function(e, t) {
				return t || (t = rt(e)), this.computeTimeTop(Rt(e.valueOf() - t.valueOf()))
			}, e.prototype.computeTimeTop = function(e) {
				var t, n, r = this.positions,
					o = this.dateProfile,
					i = r.els.length,
					a = (e.milliseconds - Mt(o.slotMinTime)) / Mt(this.slotDuration);
				return a = Math.max(0, a), a = Math.min(i, a), t = Math.floor(a), n = a - (t = Math.min(t, i - 1)), r.tops[t] + r.getHeight(t) * n
			}, e
		}(),
		ul = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return s(t, e), t.prototype.render = function() {
				var n = this.props,
					r = this.context,
					a = r.options,
					s = n.slatElRefs;
				return fo("tbody", null, n.slatMetas.map(function(o, e) {
					var t = {
							time: o.time,
							date: r.dateEnv.toDate(o.date),
							view: r.viewApi
						},
						i = ["fc-timegrid-slot", "fc-timegrid-slot-lane", o.isLabeled ? "" : "fc-timegrid-slot-minor"];
					return fo("tr", {
						key: o.key,
						ref: s.createRef(o.key)
					}, n.axis && fo(nl, N({}, o)), fo(No, {
						hookProps: t,
						classNames: a.slotLaneClassNames,
						content: a.slotLaneContent,
						didMount: a.slotLaneDidMount,
						willUnmount: a.slotLaneWillUnmount
					}, function(e, t, n, r) {
						return fo("td", {
							ref: e,
							className: i.concat(t).join(" "),
							"data-time": o.isoTimeStr
						}, r)
					}))
				}))
			}, t
		}(Ro),
		cl = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.rootElRef = vo(), e.slatElRefs = new ya, e
			}
			return s(e, t), e.prototype.render = function() {
				var e = this.props,
					t = this.context;
				return fo("div", {
					ref: this.rootElRef,
					className: "fc-timegrid-slots"
				}, fo("table", {
					"aria-hidden": !0,
					className: t.theme.getClass("table"),
					style: {
						minWidth: e.tableMinWidth,
						width: e.clientWidth,
						height: e.minHeight
					}
				}, e.tableColGroupNode, fo(ul, {
					slatElRefs: this.slatElRefs,
					axis: e.axis,
					slatMetas: e.slatMetas
				})))
			}, e.prototype.componentDidMount = function() {
				this.updateSizing()
			}, e.prototype.componentDidUpdate = function() {
				this.updateSizing()
			}, e.prototype.componentWillUnmount = function() {
				this.props.onCoords && this.props.onCoords(null)
			}, e.prototype.updateSizing = function() {
				var t, e = this.context,
					n = this.props;
				n.onCoords && null !== n.clientWidth && this.rootElRef.current.offsetHeight && n.onCoords(new ll(new ao(this.rootElRef.current, (t = this.slatElRefs.currentMap, n.slatMetas.map(function(e) {
					return t[e.key]
				})), !1, !0), this.props.dateProfile, e.options.slotDuration))
			}, e
		}(Ro);

	function dl(e, t) {
		var n, r = [];
		for (n = 0; n < t; n += 1) r.push([]);
		if (e)
			for (n = 0; n < e.length; n += 1) r[e[n].col].push(e[n]);
		return r
	}

	function pl(e, t) {
		var n = [];
		if (e) {
			for (a = 0; a < t; a += 1) n[a] = {
				affectedInstances: e.affectedInstances,
				isEvent: e.isEvent,
				segs: []
			};
			for (var r = 0, o = e.segs; r < o.length; r++) {
				var i = o[r];
				n[i.col].segs.push(i)
			}
		} else
			for (var a = 0; a < t; a += 1) n[a] = null;
		return n
	}
	var fl = function(t) {
		function e() {
			var e = null !== t && t.apply(this, arguments) || this;
			return e.rootElRef = vo(), e
		}
		return s(e, t), e.prototype.render = function() {
			var l = this,
				u = this.props;
			return fo(Za, {
				allDayDate: null,
				moreCnt: u.hiddenSegs.length,
				allSegs: u.hiddenSegs,
				hiddenSegs: u.hiddenSegs,
				alignmentElRef: this.rootElRef,
				defaultContent: hl,
				extraDateSpan: u.extraDateSpan,
				dateProfile: u.dateProfile,
				todayRange: u.todayRange,
				popoverContent: function() {
					return wl(u.hiddenSegs, u)
				}
			}, function(t, e, n, r, o, i, a, s) {
				return fo("a", {
					ref: function(e) {
						ko(t, e), ko(l.rootElRef, e)
					},
					className: ["fc-timegrid-more-link"].concat(e).join(" "),
					style: {
						top: u.top,
						bottom: u.bottom
					},
					onClick: o,
					title: i,
					"aria-expanded": a,
					"aria-controls": s
				}, fo("div", {
					ref: n,
					className: "fc-timegrid-more-link-inner fc-sticky"
				}, r))
			})
		}, e
	}(Ro);

	function hl(e) {
		return e.shortText
	}

	function vl(e, t) {
		if (!e) return [
			[], 0
		];
		for (var n = e.level, r = e.lateralStart, o = e.lateralEnd, i = r, a = []; i < o;) a.push(t(n, i)), i += 1;
		return a.sort(gl), [a.map(ml), a[0][1]]
	}

	function gl(e, t) {
		return t[1] - e[1]
	}

	function ml(e) {
		return e[0]
	}

	function yl(r, o) {
		var i = {};
		return function() {
			for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
			var n = r.apply(void 0, e);
			return n in i ? i[n] : i[n] = o.apply(void 0, e)
		}
	}

	function El(e, t, n, r) {
		void 0 === n && (n = null), void 0 === r && (r = 0);
		var o = [];
		if (n)
			for (var i = 0; i < e.length; i += 1) {
				var a = e[i],
					s = n.computeDateTop(a.start, t),
					l = Math.max(s + (r || 0), n.computeDateTop(a.end, t));
				o.push({
					start: Math.round(s),
					end: Math.round(l)
				})
			}
		return o
	}
	var Sl = Qt({
			hour: "numeric",
			minute: "2-digit",
			meridiem: !1
		}),
		bl = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return s(t, e), t.prototype.render = function() {
				var e = ["fc-timegrid-event", "fc-v-event"];
				return this.props.isShort && e.push("fc-timegrid-event-short"), fo(Ha, N({}, this.props, {
					defaultTimeFormat: Sl,
					extraClassNames: e
				}))
			}, t
		}(Ro),
		Dl = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return s(t, e), t.prototype.render = function() {
				var e = this.props;
				return fo(Ua, {
					date: e.date,
					dateProfile: e.dateProfile,
					todayRange: e.todayRange,
					extraHookProps: e.extraHookProps
				}, function(e, t) {
					return t && fo("div", {
						className: "fc-timegrid-col-misc",
						ref: e
					}, t)
				})
			}, t
		}(Ro),
		Cl = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.sortEventSegs = Ut(qn), e
			}
			return s(e, t), e.prototype.render = function() {
				var r = this,
					o = this.props,
					e = this.context,
					i = e.options.selectMirror,
					a = o.eventDrag && o.eventDrag.segs || o.eventResize && o.eventResize.segs || i && o.dateSelectionSegs || [],
					s = o.eventDrag && o.eventDrag.affectedInstances || o.eventResize && o.eventResize.affectedInstances || {},
					l = this.sortEventSegs(o.fgEventSegs, e.options.eventOrder);
				return fo(Va, {
					elRef: o.elRef,
					date: o.date,
					dateProfile: o.dateProfile,
					todayRange: o.todayRange,
					extraHookProps: o.extraHookProps
				}, function(e, t, n) {
					return fo("td", N({
						ref: e,
						role: "gridcell",
						className: ["fc-timegrid-col"].concat(t, o.extraClassNames || []).join(" ")
					}, n, o.extraDataAttrs), fo("div", {
						className: "fc-timegrid-col-frame"
					}, fo("div", {
						className: "fc-timegrid-col-bg"
					}, r.renderFillSegs(o.businessHourSegs, "non-business"), r.renderFillSegs(o.bgEventSegs, "bg-event"), r.renderFillSegs(o.dateSelectionSegs, "highlight")), fo("div", {
						className: "fc-timegrid-col-events"
					}, r.renderFgSegs(l, s, !1, !1, !1)), fo("div", {
						className: "fc-timegrid-col-events"
					}, r.renderFgSegs(a, {}, Boolean(o.eventDrag), Boolean(o.eventResize), Boolean(i))), fo("div", {
						className: "fc-timegrid-now-indicator-container"
					}, r.renderNowIndicator(o.nowIndicatorSegs)), fo(Dl, {
						date: o.date,
						dateProfile: o.dateProfile,
						todayRange: o.todayRange,
						extraHookProps: o.extraHookProps
					})))
				})
			}, e.prototype.renderFgSegs = function(e, t, n, r, o) {
				var i = this.props;
				return i.forPrint ? wl(e, i) : this.renderPositionedFgSegs(e, t, n, r, o)
			}, e.prototype.renderPositionedFgSegs = function(e, u, c, d, p) {
				var f = this,
					t = this.context.options,
					n = t.eventMaxStack,
					h = t.eventShortHeight,
					r = t.eventOrderStrict,
					o = t.eventMinHeight,
					i = this.props,
					a = i.date,
					s = i.slatCoords,
					v = i.eventSelection,
					g = i.todayRange,
					m = i.nowDate,
					y = c || d || p,
					l = function(e, t, n, r) {
						for (var o = [], i = [], a = 0; a < e.length; a += 1) {
							var s = t[a];
							s ? o.push({
								index: a,
								thickness: 1,
								span: s
							}) : i.push(e[a])
						}
						for (var l = function(e, t, n) {
								var r = new wi;
								null != t && (r.strictOrder = t), null != n && (r.maxStackCnt = n);
								var o, h, i, a, s, l = _i(r.addSegs(e)),
									u = (a = (i = r).entriesByLevel, s = yl(function(e, t) {
										return e + ":" + t
									}, function(e, t) {
										var n = vl(function(e, t, n) {
												for (var r = e.levelCoords, o = e.entriesByLevel, i = o[t][n], a = r[t] + i.thickness, s = r.length, l = t; l < s && r[l] < a; l += 1);
												for (; l < s; l += 1) {
													for (var u = o[l], c = void 0, d = Ii(u, i.span.start, Ri), p = d[0] + d[1], f = p;
														(c = u[f]) && c.span.start < i.span.end;) f += 1;
													if (p < f) return {
														level: l,
														lateralStart: p,
														lateralEnd: f
													}
												}
												return null
											}(i, e, t), s),
											r = a[e][t];
										return [N(N({}, r), {
											nextLevelNodes: n[0]
										}), r.thickness + n[1]]
									}), vl(a.length ? {
										level: 0,
										lateralStart: 0,
										lateralEnd: a[0].length
									} : null, s)[0]);
								return o = u, h = yl(function(e, t, n) {
									return Ti(e)
								}, function(e, t, n) {
									var r, o = e.nextLevelNodes,
										i = e.thickness,
										a = i + n,
										s = i / a,
										l = [];
									if (o.length)
										for (var u = 0, c = o; u < c.length; u++) {
											var d = c[u];
											if (void 0 === r) r = (p = h(d, t, a))[0], l.push(p[1]);
											else {
												var p = h(d, r, 0);
												l.push(p[1])
											}
										} else r = 1;
									var f = (r - t) * s;
									return [r - f, N(N({}, e), {
										thickness: f,
										nextLevelNodes: l
									})]
								}), {
									segRects: function(e) {
										var o = [],
											s = yl(function(e, t, n) {
												return Ti(e)
											}, function(e, t, n) {
												var r = N(N({}, e), {
													levelCoord: t,
													stackDepth: n,
													stackForward: 0
												});
												return o.push(r), r.stackForward = i(e.nextLevelNodes, t + e.thickness, n + 1) + 1
											});

										function i(e, t, n) {
											for (var r = 0, o = 0, i = e; o < i.length; o++) {
												var a = i[o];
												r = Math.max(s(a, t, n), r)
											}
											return r
										}
										return i(e, 0, 0), o
									}(u = o.map(function(e) {
										return h(e, 0, 0)[1]
									})),
									hiddenGroups: l
								}
							}(o, n, r), u = l.segRects, c = l.hiddenGroups, d = [], p = 0, f = u; p < f.length; p++) {
							var h = f[p];
							d.push({
								seg: e[h.index],
								rect: h
							})
						}
						for (var v = 0, g = i; v < g.length; v++) {
							var m = g[v];
							d.push({
								seg: m,
								rect: null
							})
						}
						return {
							segPlacements: d,
							hiddenGroups: c
						}
					}(e, El(e, a, s, o), r, n),
					E = l.segPlacements,
					S = l.hiddenGroups;
				return fo(go, null, this.renderHiddenGroups(S, e), E.map(function(e) {
					var t = e.seg,
						n = e.rect,
						r = t.eventRange.instance.instanceId,
						o = y || Boolean(!u[r] && n),
						i = Rl(n && n.span),
						a = !y && n ? f.computeSegHStyle(n) : {
							left: 0,
							right: 0
						},
						s = Boolean(n) && 0 < n.stackForward,
						l = Boolean(n) && n.span.end - n.span.start < h;
					return fo("div", {
						className: "fc-timegrid-event-harness" + (s ? " fc-timegrid-event-harness-inset" : ""),
						key: r,
						style: N(N({
							visibility: o ? "" : "hidden"
						}, i), a)
					}, fo(bl, N({
						seg: t,
						isDragging: c,
						isResizing: d,
						isDateSelecting: p,
						isSelected: r === v,
						isShort: l
					}, Jn(t, g, m))))
				}))
			}, e.prototype.renderHiddenGroups = function(e, i) {
				var t = this.props,
					a = t.extraDateSpan,
					s = t.dateProfile,
					l = t.todayRange,
					u = t.nowDate,
					c = t.eventSelection,
					d = t.eventDrag,
					p = t.eventResize;
				return fo(go, null, e.map(function(e) {
					var t, n, r = Rl(e.span),
						o = (t = e.entries, n = i, t.map(function(e) {
							return n[e.index]
						}));
					return fo(fl, {
						key: Nt($a(o)),
						hiddenSegs: o,
						top: r.top,
						bottom: r.bottom,
						extraDateSpan: a,
						dateProfile: s,
						todayRange: l,
						nowDate: u,
						eventSelection: c,
						eventDrag: d,
						eventResize: p
					})
				}))
			}, e.prototype.renderFillSegs = function(r, o) {
				var i = this.props,
					e = this.context,
					t = El(r, i.date, i.slatCoords, e.options.eventMinHeight).map(function(e, t) {
						var n = r[t];
						return fo("div", {
							key: er(n.eventRange),
							className: "fc-timegrid-bg-harness",
							style: Rl(e)
						}, "bg-event" === o ? fo(Ba, N({
							seg: n
						}, Jn(n, i.todayRange, i.nowDate))) : Fa(o))
					});
				return fo(go, null, t)
			}, e.prototype.renderNowIndicator = function(e) {
				var t = this.props,
					i = t.slatCoords,
					a = t.date;
				return i ? e.map(function(o, e) {
					return fo(Aa, {
						isAxis: !1,
						date: a,
						key: e
					}, function(e, t, n, r) {
						return fo("div", {
							ref: e,
							className: ["fc-timegrid-now-indicator-line"].concat(t).join(" "),
							style: {
								top: i.computeDateTop(o.start, a)
							}
						}, r)
					})
				}) : null
			}, e.prototype.computeSegHStyle = function(e) {
				var t, n, r = this.context,
					o = r.isRtl,
					i = r.options.slotEventOverlap,
					a = e.levelCoord,
					s = e.levelCoord + e.thickness;
				i && (s = Math.min(1, a + 2 * (s - a))), n = o ? (t = 1 - s, a) : (t = a, 1 - s);
				var l = {
					zIndex: e.stackDepth + 1,
					left: 100 * t + "%",
					right: 100 * n + "%"
				};
				return i && !e.stackForward && (l[o ? "marginLeft" : "marginRight"] = 20), l
			}, e
		}(Ro);

	function wl(e, t) {
		var n = t.todayRange,
			r = t.nowDate,
			o = t.eventSelection,
			i = t.eventDrag,
			a = t.eventResize,
			s = (i ? i.affectedInstances : null) || (a ? a.affectedInstances : null) || {};
		return fo(go, null, e.map(function(e) {
			var t = e.eventRange.instance.instanceId;
			return fo("div", {
				key: t,
				style: {
					visibility: s[t] ? "hidden" : ""
				}
			}, fo(bl, N({
				seg: e,
				isDragging: !1,
				isResizing: !1,
				isDateSelecting: !1,
				isSelected: t === o,
				isShort: !1
			}, Jn(e, n, r))))
		}))
	}

	function Rl(e) {
		return e ? {
			top: e.start,
			bottom: -e.end
		} : {
			top: "",
			bottom: ""
		}
	}
	var Tl = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.splitFgEventSegs = Ut(dl), e.splitBgEventSegs = Ut(dl), e.splitBusinessHourSegs = Ut(dl), e.splitNowIndicatorSegs = Ut(dl), e.splitDateSelectionSegs = Ut(dl), e.splitEventDrag = Ut(pl), e.splitEventResize = Ut(pl), e.rootElRef = vo(), e.cellElRefs = new ya, e
			}
			return s(e, t), e.prototype.render = function() {
				var n = this,
					r = this.props,
					o = this.context.options.nowIndicator && r.slatCoords && r.slatCoords.safeComputeTop(r.nowDate),
					e = r.cells.length,
					i = this.splitFgEventSegs(r.fgEventSegs, e),
					a = this.splitBgEventSegs(r.bgEventSegs, e),
					s = this.splitBusinessHourSegs(r.businessHourSegs, e),
					l = this.splitNowIndicatorSegs(r.nowIndicatorSegs, e),
					u = this.splitDateSelectionSegs(r.dateSelectionSegs, e),
					c = this.splitEventDrag(r.eventDrag, e),
					d = this.splitEventResize(r.eventResize, e);
				return fo("div", {
					className: "fc-timegrid-cols",
					ref: this.rootElRef
				}, fo("table", {
					role: "presentation",
					style: {
						minWidth: r.tableMinWidth,
						width: r.clientWidth
					}
				}, r.tableColGroupNode, fo("tbody", {
					role: "presentation"
				}, fo("tr", {
					role: "row"
				}, r.axis && fo("td", {
					"aria-hidden": !0,
					className: "fc-timegrid-col fc-timegrid-axis"
				}, fo("div", {
					className: "fc-timegrid-col-frame"
				}, fo("div", {
					className: "fc-timegrid-now-indicator-container"
				}, "number" == typeof o && fo(Aa, {
					isAxis: !0,
					date: r.nowDate
				}, function(e, t, n, r) {
					return fo("div", {
						ref: e,
						className: ["fc-timegrid-now-indicator-arrow"].concat(t).join(" "),
						style: {
							top: o
						}
					}, r)
				})))), r.cells.map(function(e, t) {
					return fo(Cl, {
						key: e.key,
						elRef: n.cellElRefs.createRef(e.key),
						dateProfile: r.dateProfile,
						date: e.date,
						nowDate: r.nowDate,
						todayRange: r.todayRange,
						extraHookProps: e.extraHookProps,
						extraDataAttrs: e.extraDataAttrs,
						extraClassNames: e.extraClassNames,
						extraDateSpan: e.extraDateSpan,
						fgEventSegs: i[t],
						bgEventSegs: a[t],
						businessHourSegs: s[t],
						nowIndicatorSegs: l[t],
						dateSelectionSegs: u[t],
						eventDrag: c[t],
						eventResize: d[t],
						slatCoords: r.slatCoords,
						eventSelection: r.eventSelection,
						forPrint: r.forPrint
					})
				})))))
			}, e.prototype.componentDidMount = function() {
				this.updateCoords()
			}, e.prototype.componentDidUpdate = function() {
				this.updateCoords()
			}, e.prototype.updateCoords = function() {
				var t, e = this.props;
				e.onColCoords && null !== e.clientWidth && e.onColCoords(new ao(this.rootElRef.current, (t = this.cellElRefs.currentMap, e.cells.map(function(e) {
					return t[e.key]
				})), !0, !1))
			}, e
		}(Ro),
		_l = function(e) {
			function t() {
				var o = null !== e && e.apply(this, arguments) || this;
				return o.processSlotOptions = Ut(kl), o.state = {
					slatCoords: null
				}, o.handleRootEl = function(e) {
					e ? o.context.registerInteractiveComponent(o, {
						el: e,
						isHitComboAllowed: o.props.isHitComboAllowed
					}) : o.context.unregisterInteractiveComponent(o)
				}, o.handleScrollRequest = function(e) {
					var t = o.props.onScrollTopRequest,
						n = o.state.slatCoords;
					if (t && n) {
						if (e.time) {
							var r = n.computeTimeTop(e.time);
							(r = Math.ceil(r)) && (r += 1), t(r)
						}
						return !0
					}
					return !1
				}, o.handleColCoords = function(e) {
					o.colCoords = e
				}, o.handleSlatCoords = function(e) {
					o.setState({
						slatCoords: e
					}), o.props.onSlatCoords && o.props.onSlatCoords(e)
				}, o
			}
			return s(t, e), t.prototype.render = function() {
				var e = this.props,
					t = this.state;
				return fo("div", {
					className: "fc-timegrid-body",
					ref: this.handleRootEl,
					style: {
						width: e.clientWidth,
						minWidth: e.tableMinWidth
					}
				}, fo(cl, {
					axis: e.axis,
					dateProfile: e.dateProfile,
					slatMetas: e.slatMetas,
					clientWidth: e.clientWidth,
					minHeight: e.expandRows ? e.clientHeight : "",
					tableMinWidth: e.tableMinWidth,
					tableColGroupNode: e.axis ? e.tableColGroupNode : null,
					onCoords: this.handleSlatCoords
				}), fo(Tl, {
					cells: e.cells,
					axis: e.axis,
					dateProfile: e.dateProfile,
					businessHourSegs: e.businessHourSegs,
					bgEventSegs: e.bgEventSegs,
					fgEventSegs: e.fgEventSegs,
					dateSelectionSegs: e.dateSelectionSegs,
					eventSelection: e.eventSelection,
					eventDrag: e.eventDrag,
					eventResize: e.eventResize,
					todayRange: e.todayRange,
					nowDate: e.nowDate,
					nowIndicatorSegs: e.nowIndicatorSegs,
					clientWidth: e.clientWidth,
					tableMinWidth: e.tableMinWidth,
					tableColGroupNode: e.tableColGroupNode,
					slatCoords: t.slatCoords,
					onColCoords: this.handleColCoords,
					forPrint: e.forPrint
				}))
			}, t.prototype.componentDidMount = function() {
				this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest)
			}, t.prototype.componentDidUpdate = function(e) {
				this.scrollResponder.update(e.dateProfile !== this.props.dateProfile)
			}, t.prototype.componentWillUnmount = function() {
				this.scrollResponder.detach()
			}, t.prototype.queryHit = function(e, t) {
				var n = this.context,
					r = n.dateEnv,
					o = n.options,
					i = this.colCoords,
					a = this.props.dateProfile,
					s = this.state.slatCoords,
					l = this.processSlotOptions(this.props.slotDuration, o.snapDuration),
					u = l.snapDuration,
					c = l.snapsPerSlot,
					d = i.leftToIndex(e),
					p = s.positions.topToIndex(t);
				if (null == d || null == p) return null;
				var f = this.props.cells[d],
					h = s.positions.tops[p],
					v = s.positions.getHeight(p),
					g = (t - h) / v,
					m = p * c + Math.floor(g * c),
					y = this.props.cells[d].date,
					E = _t(a.slotMinTime, kt(u, m)),
					S = r.add(y, E),
					b = r.add(S, u);
				return {
					dateProfile: a,
					dateSpan: N({
						range: {
							start: S,
							end: b
						},
						allDay: !1
					}, f.extraDateSpan),
					dayEl: i.els[d],
					rect: {
						left: i.lefts[d],
						right: i.rights[d],
						top: h,
						bottom: h + v
					},
					layer: 0
				}
			}, t
		}(xo);

	function kl(e, t) {
		var n = t || e,
			r = It(e, n);
		return null === r && (n = e, r = 1), {
			snapDuration: n,
			snapsPerSlot: r
		}
	}
	var xl = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return s(t, e), t.prototype.sliceRange = function(e, t) {
				for (var n = [], r = 0; r < t.length; r += 1) {
					var o = On(e, t[r]);
					o && n.push({
						start: o.start,
						end: o.end,
						isStart: o.start.valueOf() === e.start.valueOf(),
						isEnd: o.end.valueOf() === e.end.valueOf(),
						col: r
					})
				}
				return n
			}, t
		}(aa),
		Ml = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.buildDayRanges = Ut(Il), e.slicer = new xl, e.timeColsRef = vo(), e
			}
			return s(e, t), e.prototype.render = function() {
				var n = this,
					r = this.props,
					o = this.context,
					i = r.dateProfile,
					a = r.dayTableModel,
					s = o.options.nowIndicator,
					l = this.buildDayRanges(a, i, o.dateEnv);
				return fo(ea, {
					unit: s ? "minute" : "day"
				}, function(e, t) {
					return fo(_l, N({
						ref: n.timeColsRef
					}, n.slicer.sliceProps(r, i, null, o, l), {
						forPrint: r.forPrint,
						axis: r.axis,
						dateProfile: i,
						slatMetas: r.slatMetas,
						slotDuration: r.slotDuration,
						cells: a.cells[0],
						tableColGroupNode: r.tableColGroupNode,
						tableMinWidth: r.tableMinWidth,
						clientWidth: r.clientWidth,
						clientHeight: r.clientHeight,
						expandRows: r.expandRows,
						nowDate: e,
						nowIndicatorSegs: s && n.slicer.sliceNowDate(e, o, l),
						todayRange: t,
						onScrollTopRequest: r.onScrollTopRequest,
						onSlatCoords: r.onSlatCoords
					}))
				})
			}, e
		}(xo);

	function Il(e, t, n) {
		for (var r = [], o = 0, i = e.headerDates; o < i.length; o++) {
			var a = i[o];
			r.push({
				start: n.add(a, t.slotMinTime),
				end: n.add(a, t.slotMaxTime)
			})
		}
		return r
	}
	var Pl = [{
		hours: 1
	}, {
		minutes: 30
	}, {
		minutes: 15
	}, {
		seconds: 30
	}, {
		seconds: 15
	}];

	function Nl(e, t, n, r, o) {
		for (var i = new Date(0), a = e, s = Rt(0), l = n || function(e) {
				var t, n, r;
				for (t = Pl.length - 1; 0 <= t; t -= 1)
					if (null !== (r = It(n = Rt(Pl[t]), e)) && 1 < r) return n;
				return e
			}(r), u = []; Mt(a) < Mt(t);) {
			var c = o.add(i, a),
				d = null !== It(s, l);
			u.push({
				date: c,
				time: a,
				key: c.toISOString(),
				isoTimeStr: Ot(c),
				isLabeled: d
			}), a = _t(a, r), s = _t(s, r)
		}
		return u
	}
	var Hl = function(t) {
		function e() {
			var e = null !== t && t.apply(this, arguments) || this;
			return e.buildTimeColsModel = Ut(Ol), e.buildSlatMetas = Ut(Nl), e
		}
		return s(e, t), e.prototype.render = function() {
			var t = this,
				e = this.context,
				n = e.options,
				r = e.dateEnv,
				o = e.dateProfileGenerator,
				i = this.props,
				a = i.dateProfile,
				s = this.buildTimeColsModel(a, o),
				l = this.allDaySplitter.splitProps(i),
				u = this.buildSlatMetas(a.slotMinTime, a.slotMaxTime, n.slotLabelInterval, n.slotDuration, r),
				c = n.dayMinWidth,
				d = !c,
				p = c,
				f = n.dayHeaders && fo(na, {
					dates: s.headerDates,
					dateProfile: a,
					datesRepDistinctDays: !0,
					renderIntro: d ? this.renderHeadAxis : null
				}),
				h = !1 !== n.allDaySlot && function(e) {
					return fo(Ks, N({}, l.allDay, {
						dateProfile: a,
						dayTableModel: s,
						nextDayThreshold: n.nextDayThreshold,
						tableMinWidth: e.tableMinWidth,
						colGroupNode: e.tableColGroupNode,
						renderRowIntro: d ? t.renderTableRowAxis : null,
						showWeekNumbers: !1,
						expandRows: !1,
						headerAlignElRef: t.headerElRef,
						clientWidth: e.clientWidth,
						clientHeight: e.clientHeight,
						forPrint: i.forPrint
					}, t.getAllDayMaxEventProps()))
				},
				v = function(e) {
					return fo(Ml, N({}, l.timed, {
						dayTableModel: s,
						dateProfile: a,
						axis: d,
						slotDuration: n.slotDuration,
						slatMetas: u,
						forPrint: i.forPrint,
						tableColGroupNode: e.tableColGroupNode,
						tableMinWidth: e.tableMinWidth,
						clientWidth: e.clientWidth,
						clientHeight: e.clientHeight,
						onSlatCoords: t.handleSlatCoords,
						expandRows: e.expandRows,
						onScrollTopRequest: t.handleScrollTopRequest
					}))
				};
			return p ? this.renderHScrollLayout(f, h, v, s.colCnt, c, u, this.state.slatCoords) : this.renderSimpleLayout(f, h, v)
		}, e
	}(al);

	function Ol(e, t) {
		var n = new oa(e.renderRange, t);
		return new ia(n, !1)
	}
	var Al = Mo({
			initialView: "timeGridWeek",
			optionRefiners: {
				allDaySlot: Boolean
			},
			views: {
				timeGrid: {
					component: Hl,
					usesMinMaxTime: !0,
					allDaySlot: !0,
					slotDuration: "00:30:00",
					slotEventOverlap: !0
				},
				timeGridDay: {
					type: "timeGrid",
					duration: {
						days: 1
					}
				},
				timeGridWeek: {
					type: "timeGrid",
					duration: {
						weeks: 1
					}
				}
			}
		}),
		Ll = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.state = {
					textId: we()
				}, e
			}
			return s(e, t), e.prototype.render = function() {
				var e = this.context,
					o = e.theme,
					t = e.dateEnv,
					n = e.options,
					r = e.viewApi,
					i = this.props,
					a = i.cellId,
					s = i.dayDate,
					l = i.todayRange,
					u = this.state.textId,
					c = jr(s, l),
					d = n.listDayFormat ? t.format(s, n.listDayFormat) : "",
					p = n.listDaySideFormat ? t.format(s, n.listDaySideFormat) : "",
					f = N({
						date: t.toDate(s),
						view: r,
						textId: u,
						text: d,
						sideText: p,
						navLinkAttrs: Zr(this.context, s),
						sideNavLinkAttrs: Zr(this.context, s, "day", !1)
					}, c),
					h = ["fc-list-day"].concat(Gr(c, o));
				return fo(No, {
					hookProps: f,
					classNames: n.dayHeaderClassNames,
					content: n.dayHeaderContent,
					defaultContent: Ul,
					didMount: n.dayHeaderDidMount,
					willUnmount: n.dayHeaderWillUnmount
				}, function(e, t, n, r) {
					return fo("tr", {
						ref: e,
						className: h.concat(t).join(" "),
						"data-date": Ht(s)
					}, fo("th", {
						scope: "colgroup",
						colSpan: 3,
						id: a,
						"aria-labelledby": u
					}, fo("div", {
						className: "fc-list-day-cushion " + o.getClass("tableCellShaded"),
						ref: n
					}, r)))
				})
			}, e
		}(Ro);

	function Ul(e) {
		return fo(go, null, e.text && fo("a", N({
			id: e.textId,
			className: "fc-list-day-text"
		}, e.navLinkAttrs), e.text), e.sideText && fo("a", N({
			"aria-hidden": !0,
			className: "fc-list-day-side-text"
		}, e.sideNavLinkAttrs), e.sideText))
	}
	var Wl = Qt({
			hour: "numeric",
			minute: "2-digit",
			meridiem: "short"
		}),
		Vl = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return s(t, e), t.prototype.render = function() {
				var e = this.props,
					i = this.context,
					a = e.seg,
					s = e.timeHeaderId,
					l = e.eventHeaderId,
					u = e.dateHeaderId,
					c = i.options.eventTimeFormat || Wl;
				return fo(Na, {
					seg: a,
					timeText: "",
					disableDragging: !0,
					disableResizing: !0,
					defaultContent: function() {
						return t = tr(e = a, i), fo("a", N({}, t), e.eventRange.def.title);
						var e, t
					},
					isPast: e.isPast,
					isFuture: e.isFuture,
					isToday: e.isToday,
					isSelected: e.isSelected,
					isDragging: e.isDragging,
					isResizing: e.isResizing,
					isDateSelecting: e.isDateSelecting
				}, function(e, t, n, r, o) {
					return fo("tr", {
						className: ["fc-list-event", o.event.url ? "fc-event-forced-url" : ""].concat(t).join(" "),
						ref: e
					}, function(e, t, n, o, i) {
						var r = n.options;
						if (!1 === r.displayEventTime) return null;
						var a = e.eventRange.def,
							s = e.eventRange.instance,
							l = !1,
							u = void 0;
						if (a.allDay ? l = !0 : In(e.eventRange.range) ? e.isStart ? u = $n(e, t, n, null, null, s.range.start, e.end) : e.isEnd ? u = $n(e, t, n, null, null, e.start, s.range.end) : l = !0 : u = $n(e, t, n), l) {
							var c = {
								text: n.options.allDayText,
								view: n.viewApi
							};
							return fo(No, {
								hookProps: c,
								classNames: r.allDayClassNames,
								content: r.allDayContent,
								defaultContent: Fl,
								didMount: r.allDayDidMount,
								willUnmount: r.allDayWillUnmount
							}, function(e, t, n, r) {
								return fo("td", {
									ref: e,
									headers: o + " " + i,
									className: ["fc-list-event-time"].concat(t).join(" ")
								}, r)
							})
						}
						return fo("td", {
							className: "fc-list-event-time"
						}, u)
					}(a, c, i, s, u), fo("td", {
						"aria-hidden": !0,
						className: "fc-list-event-graphic"
					}, fo("span", {
						className: "fc-list-event-dot",
						style: {
							borderColor: o.borderColor || o.backgroundColor
						}
					})), fo("td", {
						ref: n,
						headers: l + " " + u,
						className: "fc-list-event-title"
					}, r))
				})
			}, t
		}(Ro);

	function Fl(e) {
		return e.text
	}
	var Bl = function(e) {
		function t() {
			var t = null !== e && e.apply(this, arguments) || this;
			return t.computeDateVars = Ut(jl), t.eventStoreToSegs = Ut(t._eventStoreToSegs), t.state = {
				timeHeaderId: we(),
				eventHeaderId: we(),
				dateHeaderIdRoot: we()
			}, t.setRootEl = function(e) {
				e ? t.context.registerInteractiveComponent(t, {
					el: e
				}) : t.context.unregisterInteractiveComponent(t)
			}, t
		}
		return s(t, e), t.prototype.render = function() {
			var n = this,
				r = this.props,
				e = this.context,
				o = ["fc-list", e.theme.getClass("table"), !1 !== e.options.stickyHeaderDates ? "fc-list-sticky" : ""],
				t = this.computeDateVars(r.dateProfile),
				i = t.dayDates,
				a = t.dayRanges,
				s = this.eventStoreToSegs(r.eventStore, r.eventUiBases, a);
			return fo(Fo, {
				viewSpec: e.viewSpec,
				elRef: this.setRootEl
			}, function(e, t) {
				return fo("div", {
					ref: e,
					className: o.concat(t).join(" ")
				}, fo(ma, {
					liquid: !r.isHeightAuto,
					overflowX: r.isHeightAuto ? "visible" : "hidden",
					overflowY: r.isHeightAuto ? "visible" : "auto"
				}, 0 < s.length ? n.renderSegList(s, i) : n.renderEmptyMessage()))
			})
		}, t.prototype.renderEmptyMessage = function() {
			var e = this.context,
				t = e.options,
				n = e.viewApi,
				r = {
					text: t.noEventsText,
					view: n
				};
			return fo(No, {
				hookProps: r,
				classNames: t.noEventsClassNames,
				content: t.noEventsContent,
				defaultContent: zl,
				didMount: t.noEventsDidMount,
				willUnmount: t.noEventsWillUnmount
			}, function(e, t, n, r) {
				return fo("div", {
					className: ["fc-list-empty"].concat(t).join(" "),
					ref: e
				}, fo("div", {
					className: "fc-list-empty-cushion",
					ref: n
				}, r))
			})
		}, t.prototype.renderSegList = function(e, c) {
			var t = this.context,
				d = t.theme,
				p = t.options,
				n = this.state,
				f = n.timeHeaderId,
				h = n.eventHeaderId,
				v = n.dateHeaderIdRoot,
				g = function(e) {
					var t, n, r = [];
					for (t = 0; t < e.length; t += 1)(r[(n = e[t]).dayIndex] || (r[n.dayIndex] = [])).push(n);
					return r
				}(e);
			return fo(ea, {
				unit: "day"
			}, function(e, t) {
				for (var n = [], r = 0; r < g.length; r += 1) {
					var o = g[r];
					if (o) {
						var i = Ht(c[r]),
							a = v + "-" + i;
						n.push(fo(Ll, {
							key: i,
							cellId: a,
							dayDate: c[r],
							todayRange: t
						}));
						for (var s = 0, l = o = qn(o, p.eventOrder); s < l.length; s++) {
							var u = l[s];
							n.push(fo(Vl, N({
								key: i + ":" + u.eventRange.instance.instanceId,
								seg: u,
								isDragging: !1,
								isResizing: !1,
								isDateSelecting: !1,
								isSelected: !1,
								timeHeaderId: f,
								eventHeaderId: h,
								dateHeaderId: a
							}, Jn(u, t, e))))
						}
					}
				}
				return fo("table", {
					className: "fc-list-table " + d.getClass("table")
				}, fo("thead", null, fo("tr", null, fo("th", {
					scope: "col",
					id: f
				}, p.timeHint), fo("th", {
					scope: "col",
					"aria-hidden": !0
				}), fo("th", {
					scope: "col",
					id: h
				}, p.eventHint))), fo("tbody", null, n))
			})
		}, t.prototype._eventStoreToSegs = function(e, t, n) {
			return this.eventRangesToSegs(Vn(e, t, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, n)
		}, t.prototype.eventRangesToSegs = function(e, t) {
			for (var n = [], r = 0, o = e; r < o.length; r++) {
				var i = o[r];
				n.push.apply(n, this.eventRangeToSegs(i, t))
			}
			return n
		}, t.prototype.eventRangeToSegs = function(e, t) {
			var n, r, o, i = this.context.dateEnv,
				a = this.context.options.nextDayThreshold,
				s = e.range,
				l = e.def.allDay,
				u = [];
			for (n = 0; n < t.length; n += 1)
				if ((r = On(s, t[n])) && (o = {
						component: this,
						eventRange: e,
						start: r.start,
						end: r.end,
						isStart: e.isStart && r.start.valueOf() === s.start.valueOf(),
						isEnd: e.isEnd && r.end.valueOf() === s.end.valueOf(),
						dayIndex: n
					}, u.push(o), !o.isEnd && !l && n + 1 < t.length && s.end < i.add(t[n + 1].start, a))) {
					o.end = s.end, o.isEnd = !0;
					break
				} return u
		}, t
	}(xo);

	function zl(e) {
		return e.text
	}

	function jl(e) {
		for (var t = rt(e.renderRange.start), n = e.renderRange.end, r = [], o = []; t < n;) r.push(t), o.push({
			start: t,
			end: Ke(t, 1)
		}), t = Ke(t, 1);
		return {
			dayDates: r,
			dayRanges: o
		}
	}

	function Gl(e) {
		return !1 === e ? null : Qt(e)
	}
	var ql = Mo({
			optionRefiners: {
				listDayFormat: Gl,
				listDaySideFormat: Gl,
				noEventsClassNames: cn,
				noEventsContent: cn,
				noEventsDidMount: cn,
				noEventsWillUnmount: cn
			},
			views: {
				list: {
					component: Bl,
					buttonTextKey: "list",
					listDayFormat: {
						month: "long",
						day: "numeric",
						year: "numeric"
					}
				},
				listDay: {
					type: "list",
					duration: {
						days: 1
					},
					listDayFormat: {
						weekday: "long"
					}
				},
				listWeek: {
					type: "list",
					duration: {
						weeks: 1
					},
					listDayFormat: {
						weekday: "long"
					},
					listDaySideFormat: {
						month: "long",
						day: "numeric",
						year: "numeric"
					}
				},
				listMonth: {
					type: "list",
					duration: {
						month: 1
					},
					listDaySideFormat: {
						weekday: "long"
					}
				},
				listYear: {
					type: "list",
					duration: {
						year: 1
					},
					listDaySideFormat: {
						weekday: "long"
					}
				}
			}
		}),
		Yl = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return s(t, e), t
		}(co);
	Yl.prototype.classes = {
		root: "fc-theme-bootstrap",
		table: "table-bordered",
		tableCellShaded: "table-active",
		buttonGroup: "btn-group",
		button: "btn btn-primary",
		buttonActive: "active",
		popover: "popover",
		popoverHeader: "popover-header",
		popoverContent: "popover-body"
	}, Yl.prototype.baseIconClass = "fa", Yl.prototype.iconClasses = {
		close: "fa-times",
		prev: "fa-chevron-left",
		next: "fa-chevron-right",
		prevYear: "fa-angle-double-left",
		nextYear: "fa-angle-double-right"
	}, Yl.prototype.rtlIconClasses = {
		prev: "fa-chevron-right",
		next: "fa-chevron-left",
		prevYear: "fa-angle-double-right",
		nextYear: "fa-angle-double-left"
	}, Yl.prototype.iconOverrideOption = "bootstrapFontAwesome", Yl.prototype.iconOverrideCustomButtonOption = "bootstrapFontAwesome", Yl.prototype.iconOverridePrefix = "fa-";
	var Zl = Mo({
			themeClasses: {
				bootstrap: Yl
			}
		}),
		Xl = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return s(t, e), t
		}(co);
	Xl.prototype.classes = {
		root: "fc-theme-bootstrap5",
		tableCellShaded: "fc-theme-bootstrap5-shaded",
		buttonGroup: "btn-group",
		button: "btn btn-primary",
		buttonActive: "active",
		popover: "popover",
		popoverHeader: "popover-header",
		popoverContent: "popover-body"
	}, Xl.prototype.baseIconClass = "bi", Xl.prototype.iconClasses = {
		close: "bi-x-lg",
		prev: "bi-chevron-left",
		next: "bi-chevron-right",
		prevYear: "bi-chevron-double-left",
		nextYear: "bi-chevron-double-right"
	}, Xl.prototype.rtlIconClasses = {
		prev: "bi-chevron-right",
		next: "bi-chevron-left",
		prevYear: "bi-chevron-double-right",
		nextYear: "bi-chevron-double-left"
	}, Xl.prototype.iconOverrideOption = "buttonIcons", Xl.prototype.iconOverrideCustomButtonOption = "icon", Xl.prototype.iconOverridePrefix = "bi-";
	var Kl = Mo({
			themeClasses: {
				bootstrap5: Xl
			}
		}),
		$l = Mo({
			eventSourceDefs: [{
				parseMeta: function(e) {
					var t, n, r = e.googleCalendarId;
					return !r && e.url && (t = e.url, r = /^[^/]+@([^/.]+\.)*(google|googlemail|gmail)\.com$/.test(t) ? t : (n = /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^/]*)/.exec(t)) || (n = /^https?:\/\/www.google.com\/calendar\/feeds\/([^/]*)/.exec(t)) ? decodeURIComponent(n[1]) : null), r ? {
						googleCalendarId: r,
						googleCalendarApiKey: e.googleCalendarApiKey,
						googleCalendarApiBase: e.googleCalendarApiBase,
						extraParams: e.extraParams
					} : null
				},
				fetch: function(e, r, o) {
					var t, n, i, a, s, l, u, c, d, p = e.context,
						f = p.dateEnv,
						h = p.options,
						v = e.eventSource.meta,
						g = v.googleCalendarApiKey || h.googleCalendarApiKey;
					if (g) {
						var m = ((d = (c = v).googleCalendarApiBase) || (d = "https://www.googleapis.com/calendar/v3/calendars"), d + "/" + encodeURIComponent(c.googleCalendarId) + "/events"),
							y = v.extraParams,
							E = "function" == typeof y ? y() : y,
							S = (t = e.range, n = g, i = E, u = (a = f).canComputeOffset ? (l = a.formatIso(t.start), a.formatIso(t.end)) : (l = Ke(t.start, -1).toISOString(), Ke(t.end, 1).toISOString()), s = N(N({}, i || {}), {
								key: n,
								timeMin: l,
								timeMax: u,
								singleEvents: !0,
								maxResults: 9999
							}), "local" !== a.timeZone && (s.timeZone = a.timeZone), s);
						ii("GET", m, S, function(e, t) {
							var n, i;
							e.error ? o({
								message: "Google Calendar API: " + e.error.message,
								errors: e.error.errors,
								xhr: t
							}) : r({
								rawEvents: (n = e.items, i = S.timeZone, n.map(function(e) {
									return n = i, (o = (t = e).htmlLink || null) && n && (r = "ctz=" + n, o = o.replace(/(\?.*?)?(#|$)/, function(e, t, n) {
										return (t ? t + "&" : "?") + r + n
									})), {
										id: t.id,
										title: t.summary,
										start: t.start.dateTime || t.start.date,
										end: t.end.dateTime || t.end.date,
										url: o,
										location: t.location,
										description: t.description,
										attachments: t.attachments || [],
										extendedProps: (t.extendedProperties || {}).shared || {}
									};
									var t, n, r, o
								})),
								xhr: t
							})
						}, function(e, t) {
							o({
								message: e,
								xhr: t
							})
						})
					} else o({
						message: "Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/"
					})
				}
			}],
			optionRefiners: {
				googleCalendarApiKey: String
			},
			eventSourceRefiners: {
				googleCalendarApiKey: String,
				googleCalendarId: String,
				googleCalendarApiBase: String,
				extraParams: cn
			}
		});
	return li.push(ks, Qs, Al, ql, Zl, Kl, $l), e.BASE_OPTION_DEFAULTS = tn, e.BASE_OPTION_REFINERS = en, e.BaseComponent = Ro, e.BgEvent = Ba, e.BootstrapTheme = Yl, e.Calendar = es, e.CalendarApi = gr, e.CalendarContent = ji, e.CalendarDataManager = pi, e.CalendarDataProvider = Ci, e.CalendarRoot = Yi, e.Component = po, e.ContentHook = Oo, e.CustomContentRenderContext = Ho, e.DateComponent = xo, e.DateEnv = wr, e.DateProfileGenerator = qo, e.DayCellContent = Ua, e.DayCellRoot = Va, e.DayGridView = $s, e.DayHeader = na, e.DaySeriesModel = oa, e.DayTable = Ks, e.DayTableModel = ia, e.DayTableSlicer = Xs, e.DayTimeCols = Ml, e.DayTimeColsSlicer = xl, e.DayTimeColsView = Hl, e.DelayedRunner = ui, e.Draggable = Rs, e.ElementDragging = Oi, e.ElementScrollController = lo, e.Emitter = io, e.EventApi = mr, e.EventRoot = Na, e.EventSourceApi = fe, e.FeaturefulElementDragging = ps, e.Fragment = go, e.Interaction = Pi, e.ListView = Bl, e.MoreLinkRoot = Za, e.MountHook = Lo, e.NamedTimeZoneImpl = function(e) {
		this.timeZoneName = e
	}, e.NowIndicatorRoot = Aa, e.NowTimer = ea, e.PointerDragging = os, e.PositionCache = ao, e.RefMap = ya, e.RenderHook = No, e.ScrollController = so, e.ScrollResponder = bo, e.Scroller = ma, e.SegHierarchy = wi, e.SimpleScrollGrid = Pa, e.Slicer = aa, e.Splitter = Br, e.StandardEvent = Ha, e.Table = Ys, e.TableDateCell = $i, e.TableDowCell = Qi, e.TableView = xs, e.Theme = co, e.ThirdPartyDraggable = _s, e.TimeCols = _l, e.TimeColsSlatsCoords = ll, e.TimeColsView = al, e.ViewApi = dr, e.ViewContextType = Do, e.ViewRoot = Fo, e.WeekNumberRoot = ja, e.WindowScrollController = uo, e.addDays = Ke, e.addDurations = _t, e.addMs = $e, e.addWeeks = Xe, e.allowContextMenu = Ue, e.allowSelection = Ae, e.applyMutationToEventStore = ur, e.applyStyle = Ee, e.applyStyleProp = Se, e.asCleanDays = function(e) {
		return e.years || e.months || e.milliseconds ? 0 : e.days
	}, e.asRoughMinutes = function(e) {
		return Mt(e) / 6e4
	}, e.asRoughMs = Mt, e.asRoughSeconds = function(e) {
		return Mt(e) / 1e3
	}, e.binarySearch = Ii, e.buildClassNameNormalizer = Uo, e.buildDayRanges = Il, e.buildDayTableModel = Js, e.buildEntryKey = Ti, e.buildEventApis = Er, e.buildEventRangeKey = er, e.buildHashFromArray = function(e, t) {
		for (var n = {}, r = 0; r < e.length; r += 1) {
			var o = t(e[r], r);
			n[o[0]] = o[1]
		}
		return n
	}, e.buildIsoString = Nt, e.buildNavLinkAttrs = Zr, e.buildSegCompareObj = Yn, e.buildSegTimeText = $n, e.buildSlatMetas = Nl, e.buildTimeColsModel = Ol, e.collectFromHash = bt, e.combineEventUis = Sn, e.compareByFieldSpec = Fe, e.compareByFieldSpecs = Ve, e.compareNumbers = Ge, e.compareObjs = St, e.computeEarliestSegStart = $a, e.computeEdges = eo, e.computeFallbackHeaderFormat = Zi, e.computeHeightAndMargins = function(e) {
		return e.getBoundingClientRect().height + (t = e, n = window.getComputedStyle(t), parseInt(n.marginTop, 10) + parseInt(n.marginBottom, 10));
		var t, n
	}, e.computeInnerRect = to, e.computeRect = no, e.computeSegDraggable = Zn, e.computeSegEndResizable = Kn, e.computeSegStartResizable = Xn, e.computeShrinkWidth = Ea, e.computeSmallestCellWidth = Ye, e.computeVisibleDayRange = Mn, e.config = Ai, e.constrainPoint = Lr, e.createAriaClickAttrs = xe, e.createContext = mo, e.createDuration = Rt, e.createElement = fo, e.createEmptyEventStore = function() {
		return {
			defs: {},
			instances: {}
		}
	}, e.createEventInstance = dt, e.createEventUi = En, e.createFormatter = Qt, e.createPlugin = Mo, e.createPortal = yo, e.createRef = vo, e.diffDates = Pn, e.diffDayAndTime = et, e.diffDays = Qe, e.diffPoints = Wr, e.diffWeeks = Je, e.diffWholeDays = nt, e.diffWholeWeeks = tt, e.disableCursor = Ne, e.elementClosest = ve, e.elementMatches = ge, e.enableCursor = He, e.eventTupleToStore = pn, e.filterEventStoreDefs = vn, e.filterHash = ht, e.findDirectChildren = function(e, t) {
		for (var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0; o < n.length; o += 1)
			for (var i = n[o].children, a = 0; a < i.length; a += 1) {
				var s = i[a];
				t && !ge(s, t) || r.push(s)
			}
		return r
	}, e.findElements = me, e.flexibleCompare = Be, e.flushSync = Eo, e.formatDate = function(e, t) {
		void 0 === t && (t = {});
		var n = Ir(t),
			r = Qt(t),
			o = n.createMarkerMeta(e);
		return o ? n.format(o.marker, r, {
			forcedTzo: o.forcedTzo
		}) : ""
	}, e.formatDayString = Ht, e.formatIsoTimeString = Ot, e.formatRange = function(e, t, n) {
		var r = Ir("object" == typeof n && n ? n : {}),
			o = Qt(n),
			i = r.createMarkerMeta(e),
			a = r.createMarkerMeta(t);
		return i && a ? r.formatRange(i.marker, a.marker, o, {
			forcedStartTzo: i.forcedTzo,
			forcedEndTzo: a.forcedTzo,
			isEndExclusive: n.isEndExclusive,
			defaultSeparator: tn.defaultRangeSeparator
		}) : ""
	}, e.getAllowYScrolling = ba, e.getCanVGrowWithinCell = Vr, e.getClippingParents = ro, e.getDateMeta = jr, e.getDayClassNames = Gr, e.getDefaultEventEnd = lr, e.getElRoot = De, e.getElSeg = zn, e.getEntrySpanEnd = Ri, e.getEventClassNames = Qn, e.getEventTargetViaRoot = be, e.getIsRtlScrollbarOnLeft = $r, e.getRectCenter = Ur, e.getRelevantEvents = fn, e.getScrollGridClassNames = _a, e.getScrollbarWidths = Jr, e.getSectionClassNames = ka, e.getSectionHasLiquidHeight = Sa, e.getSegAnchorAttrs = tr, e.getSegMeta = Jn, e.getSlotClassNames = function(e, t) {
		var n = ["fc-slot", "fc-slot-" + Ze[e.dow]];
		return e.isDisabled ? n.push("fc-slot-disabled") : (e.isToday && (n.push("fc-slot-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-slot-past"), e.isFuture && n.push("fc-slot-future")), n
	}, e.getStickyFooterScrollbar = Ia, e.getStickyHeaderDates = Ma, e.getUnequalProps = Et, e.getUniqueDomId = we, e.globalLocales = Rr, e.globalPlugins = li, e.greatestDurationDenominator = Pt, e.groupIntersectingEntries = _i, e.guid = Pe, e.hasBgRendering = Fn, e.hasShrinkWidth = Ta, e.identity = cn, e.interactionSettingsStore = Hi, e.interactionSettingsToStore = Ni, e.intersectRanges = On, e.intersectRects = Ar, e.intersectSpans = xi, e.isArraysEqual = Lt, e.isColPropsEqual = Ca, e.isDateSelectionValid = ua, e.isDateSpansEqual = rr, e.isInt = qe, e.isInteractionValid = la, e.isMultiDayRange = In, e.isPropsEqual = yt, e.isPropsValid = da, e.isValidDate = ut, e.joinSpans = ki, e.listenBySelector = Te, e.mapHash = vt, e.memoize = Ut, e.memoizeArraylike = function(i, a, s) {
		var l = this,
			u = [],
			c = [];
		return function(e) {
			for (var t = u.length, n = e.length, r = 0; r < t; r += 1)
				if (e[r]) {
					if (!Lt(u[r], e[r])) {
						s && s(c[r]);
						var o = i.apply(l, e[r]);
						a && a(o, c[r]) || (c[r] = o)
					}
				} else s && s(c[r]);
			for (; r < n; r += 1) c[r] = i.apply(l, e[r]);
			return u = e, c.splice(n), c
		}
	}, e.memoizeHashlike = function(o, i, a) {
		var s = this,
			l = {},
			u = {};
		return function(e) {
			var t = {};
			for (var n in e)
				if (u[n])
					if (Lt(l[n], e[n])) t[n] = u[n];
					else {
						a && a(u[n]);
						var r = o.apply(s, e[n]);
						t[n] = i && i(r, u[n]) ? u[n] : r
					}
			else t[n] = o.apply(s, e[n]);
			return l = e, u = t
		}
	}, e.memoizeObjArg = Wt, e.mergeEventStores = hn, e.multiplyDuration = kt, e.padStart = ze, e.parseBusinessHours = Hr, e.parseClassNames = gn, e.parseDragMeta = Ui, e.parseEventDef = kn, e.parseFieldSpecs = We, e.parseMarker = Cr, e.pointInsideRect = Or, e.preventContextMenu = Le, e.preventDefault = Re, e.preventSelection = Oe, e.rangeContainsMarker = Wn, e.rangeContainsRange = Un, e.rangesEqual = An, e.rangesIntersect = Ln, e.refineEventDef = Tn, e.refineProps = un, e.removeElement = he, e.removeExact = function(e, t) {
		for (var n = 0, r = 0; r < e.length;) e[r] === t ? (e.splice(r, 1), n += 1) : r += 1;
		return n
	}, e.render = ho, e.renderChunkContent = Da, e.renderFill = Fa, e.renderMicroColGroup = wa, e.renderScrollShim = xa, e.requestJson = ii, e.sanitizeShrinkWidth = Ra, e.setElSeg = Bn, e.setRef = ko, e.sliceEventStore = Vn, e.sliceEvents = function(e, t) {
		return Vn(e.eventStore, e.eventUiBases, e.dateProfile.activeRange, t ? e.nextDayThreshold : null).fg
	}, e.sortEventSegs = qn, e.startOfDay = rt, e.translateRect = function(e, t, n) {
		return {
			left: e.left + t,
			right: e.right + t,
			top: e.top + n,
			bottom: e.bottom + n
		}
	}, e.triggerDateSelect = ar, e.unmountComponentAtNode = So, e.unpromisify = oo, e.version = "5.11.3", e.whenTransitionDone = ke, e.wholeDivideDurations = It, Object.defineProperty(e, "__esModule", {
		value: !0
	}), e
}({});
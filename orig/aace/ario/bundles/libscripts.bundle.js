! function(e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(E, e) {
	"use strict";
	var t = [],
		i = Object.getPrototypeOf,
		a = t.slice,
		g = t.flat ? function(e) {
			return t.flat.call(e)
		} : function(e) {
			return t.concat.apply([], e)
		},
		l = t.push,
		r = t.indexOf,
		n = {},
		o = n.toString,
		m = n.hasOwnProperty,
		s = m.toString,
		c = s.call(Object),
		v = {},
		y = function(e) {
			return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
		},
		b = function(e) {
			return null != e && e === e.window
		},
		T = E.document,
		u = {
			type: !0,
			src: !0,
			nonce: !0,
			noModule: !0
		};

	function _(e, t, n) {
		var i, r, o = (n = n || T).createElement("script");
		if (o.text = e, t)
			for (i in u)(r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
		n.head.appendChild(o).parentNode.removeChild(o)
	}

	function w(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
	}
	var f = "3.6.2",
		C = function(e, t) {
			return new C.fn.init(e, t)
		};

	function d(e) {
		var t = !!e && "length" in e && e.length,
			n = w(e);
		return !y(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
	}
	C.fn = C.prototype = {
		jquery: f,
		constructor: C,
		length: 0,
		toArray: function() {
			return a.call(this)
		},
		get: function(e) {
			return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
		},
		pushStack: function(e) {
			var t = C.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each: function(e) {
			return C.each(this, e)
		},
		map: function(n) {
			return this.pushStack(C.map(this, function(e, t) {
				return n.call(e, t, e)
			}))
		},
		slice: function() {
			return this.pushStack(a.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		even: function() {
			return this.pushStack(C.grep(this, function(e, t) {
				return (t + 1) % 2
			}))
		},
		odd: function() {
			return this.pushStack(C.grep(this, function(e, t) {
				return t % 2
			}))
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(0 <= n && n < t ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: l,
		sort: t.sort,
		splice: t.splice
	}, C.extend = C.fn.extend = function() {
		var e, t, n, i, r, o, s = arguments[0] || {},
			a = 1,
			l = arguments.length,
			c = !1;
		for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || y(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
			if (null != (e = arguments[a]))
				for (t in e) i = e[t], "__proto__" !== t && s !== i && (c && i && (C.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[t], o = r && !Array.isArray(n) ? [] : r || C.isPlainObject(n) ? n : {}, r = !1, s[t] = C.extend(c, o, i)) : void 0 !== i && (s[t] = i));
		return s
	}, C.extend({
		expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isPlainObject: function(e) {
			var t, n;
			return !(!e || "[object Object]" !== o.call(e)) && (!(t = i(e)) || "function" == typeof(n = m.call(t, "constructor") && t.constructor) && s.call(n) === c)
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		globalEval: function(e, t, n) {
			_(e, {
				nonce: t && t.nonce
			}, n)
		},
		each: function(e, t) {
			var n, i = 0;
			if (d(e))
				for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
			else
				for (i in e)
					if (!1 === t.call(e[i], i, e[i])) break;
			return e
		},
		makeArray: function(e, t) {
			var n = t || [];
			return null != e && (d(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : r.call(t, e, n)
		},
		merge: function(e, t) {
			for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
			return e.length = r, e
		},
		grep: function(e, t, n) {
			for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
			return i
		},
		map: function(e, t, n) {
			var i, r, o = 0,
				s = [];
			if (d(e))
				for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r);
			else
				for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
			return g(s)
		},
		guid: 1,
		support: v
	}), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
		n["[object " + t + "]"] = t.toLowerCase()
	});
	var p = function(n) {
		var e, p, _, o, r, h, f, g, w, l, c, x, E, s, T, m, a, u, v, C = "sizzle" + 1 * new Date,
			d = n.document,
			k = 0,
			i = 0,
			y = le(),
			b = le(),
			A = le(),
			S = le(),
			D = function(e, t) {
				return e === t && (c = !0), 0
			},
			L = {}.hasOwnProperty,
			t = [],
			j = t.pop,
			O = t.push,
			N = t.push,
			P = t.slice,
			I = function(e, t) {
				for (var n = 0, i = e.length; n < i; n++)
					if (e[n] === t) return n;
				return -1
			},
			H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			M = "[\\x20\\t\\r\\n\\f]",
			q = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
			R = "\\[" + M + "*(" + q + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + M + "*\\]",
			B = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
			W = new RegExp(M + "+", "g"),
			F = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
			$ = new RegExp("^" + M + "*," + M + "*"),
			U = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
			z = new RegExp(M + "|>"),
			Q = new RegExp(B),
			X = new RegExp("^" + q + "$"),
			K = {
				ID: new RegExp("^#(" + q + ")"),
				CLASS: new RegExp("^\\.(" + q + ")"),
				TAG: new RegExp("^(" + q + "|[*])"),
				ATTR: new RegExp("^" + R),
				PSEUDO: new RegExp("^" + B),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + H + ")$", "i"),
				needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
			},
			Y = /HTML$/i,
			V = /^(?:input|select|textarea|button)$/i,
			G = /^h\d$/i,
			J = /^[^{]+\{\s*\[native \w/,
			Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ee = /[+~]/,
			te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
			ne = function(e, t) {
				var n = "0x" + e.slice(1) - 65536;
				return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
			},
			ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			re = function(e, t) {
				return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
			},
			oe = function() {
				x()
			},
			se = _e(function(e) {
				return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			N.apply(t = P.call(d.childNodes), d.childNodes), t[d.childNodes.length].nodeType
		} catch (e) {
			N = {
				apply: t.length ? function(e, t) {
					O.apply(e, P.call(t))
				} : function(e, t) {
					for (var n = e.length, i = 0; e[n++] = t[i++];);
					e.length = n - 1
				}
			}
		}

		function ae(t, e, n, i) {
			var r, o, s, a, l, c, u, f = e && e.ownerDocument,
				d = e ? e.nodeType : 9;
			if (n = n || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return n;
			if (!i && (x(e), e = e || E, T)) {
				if (11 !== d && (l = Z.exec(t)))
					if (r = l[1]) {
						if (9 === d) {
							if (!(s = e.getElementById(r))) return n;
							if (s.id === r) return n.push(s), n
						} else if (f && (s = f.getElementById(r)) && v(e, s) && s.id === r) return n.push(s), n
					} else {
						if (l[2]) return N.apply(n, e.getElementsByTagName(t)), n;
						if ((r = l[3]) && p.getElementsByClassName && e.getElementsByClassName) return N.apply(n, e.getElementsByClassName(r)), n
					} if (p.qsa && !S[t + " "] && (!m || !m.test(t)) && (1 !== d || "object" !== e.nodeName.toLowerCase())) {
					if (u = t, f = e, 1 === d && (z.test(t) || U.test(t))) {
						for ((f = ee.test(t) && ve(e.parentNode) || e) === e && p.scope || ((a = e.getAttribute("id")) ? a = a.replace(ie, re) : e.setAttribute("id", a = C)), o = (c = h(t)).length; o--;) c[o] = (a ? "#" + a : ":scope") + " " + be(c[o]);
						u = c.join(",")
					}
					try {
						if (p.cssSupportsSelector && !CSS.supports("selector(" + u + ")")) throw new Error;
						return N.apply(n, f.querySelectorAll(u)), n
					} catch (e) {
						S(t, !0)
					} finally {
						a === C && e.removeAttribute("id")
					}
				}
			}
			return g(t.replace(F, "$1"), e, n, i)
		}

		function le() {
			var i = [];
			return function e(t, n) {
				return i.push(t + " ") > _.cacheLength && delete e[i.shift()], e[t + " "] = n
			}
		}

		function ce(e) {
			return e[C] = !0, e
		}

		function ue(e) {
			var t = E.createElement("fieldset");
			try {
				return !!e(t)
			} catch (e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function fe(e, t) {
			for (var n = e.split("|"), i = n.length; i--;) _.attrHandle[n[i]] = t
		}

		function de(e, t) {
			var n = t && e,
				i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
			if (i) return i;
			if (n)
				for (; n = n.nextSibling;)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function pe(t) {
			return function(e) {
				return "input" === e.nodeName.toLowerCase() && e.type === t
			}
		}

		function he(n) {
			return function(e) {
				var t = e.nodeName.toLowerCase();
				return ("input" === t || "button" === t) && e.type === n
			}
		}

		function ge(t) {
			return function(e) {
				return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && se(e) === t : e.disabled === t : "label" in e && e.disabled === t
			}
		}

		function me(s) {
			return ce(function(o) {
				return o = +o, ce(function(e, t) {
					for (var n, i = s([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
				})
			})
		}

		function ve(e) {
			return e && void 0 !== e.getElementsByTagName && e
		}
		for (e in p = ae.support = {}, r = ae.isXML = function(e) {
				var t = e && e.namespaceURI,
					n = e && (e.ownerDocument || e).documentElement;
				return !Y.test(t || n && n.nodeName || "HTML")
			}, x = ae.setDocument = function(e) {
				var t, n, i = e ? e.ownerDocument || e : d;
				return i != E && 9 === i.nodeType && i.documentElement && (s = (E = i).documentElement, T = !r(E), d != E && (n = E.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), p.scope = ue(function(e) {
					return s.appendChild(e).appendChild(E.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
				}), p.cssSupportsSelector = ue(function() {
					return CSS.supports("selector(*)") && E.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))")
				}), p.attributes = ue(function(e) {
					return e.className = "i", !e.getAttribute("className")
				}), p.getElementsByTagName = ue(function(e) {
					return e.appendChild(E.createComment("")), !e.getElementsByTagName("*").length
				}), p.getElementsByClassName = J.test(E.getElementsByClassName), p.getById = ue(function(e) {
					return s.appendChild(e).id = C, !E.getElementsByName || !E.getElementsByName(C).length
				}), p.getById ? (_.filter.ID = function(e) {
					var t = e.replace(te, ne);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}, _.find.ID = function(e, t) {
					if (void 0 !== t.getElementById && T) {
						var n = t.getElementById(e);
						return n ? [n] : []
					}
				}) : (_.filter.ID = function(e) {
					var n = e.replace(te, ne);
					return function(e) {
						var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
						return t && t.value === n
					}
				}, _.find.ID = function(e, t) {
					if (void 0 !== t.getElementById && T) {
						var n, i, r, o = t.getElementById(e);
						if (o) {
							if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
							for (r = t.getElementsByName(e), i = 0; o = r[i++];)
								if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
						}
						return []
					}
				}), _.find.TAG = p.getElementsByTagName ? function(e, t) {
					return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
				} : function(e, t) {
					var n, i = [],
						r = 0,
						o = t.getElementsByTagName(e);
					if ("*" !== e) return o;
					for (; n = o[r++];) 1 === n.nodeType && i.push(n);
					return i
				}, _.find.CLASS = p.getElementsByClassName && function(e, t) {
					if (void 0 !== t.getElementsByClassName && T) return t.getElementsByClassName(e)
				}, a = [], m = [], (p.qsa = J.test(E.querySelectorAll)) && (ue(function(e) {
					var t;
					s.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + C + "-]").length || m.push("~="), (t = E.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + C + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
				}), ue(function(e) {
					e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
					var t = E.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
				})), (p.matchesSelector = J.test(u = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ue(function(e) {
					p.disconnectedMatch = u.call(e, "*"), u.call(e, "[s!='']:x"), a.push("!=", B)
				}), p.cssSupportsSelector || m.push(":has"), m = m.length && new RegExp(m.join("|")), a = a.length && new RegExp(a.join("|")), t = J.test(s.compareDocumentPosition), v = t || J.test(s.contains) ? function(e, t) {
					var n = 9 === e.nodeType && e.documentElement || e,
						i = t && t.parentNode;
					return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
				} : function(e, t) {
					if (t)
						for (; t = t.parentNode;)
							if (t === e) return !0;
					return !1
				}, D = t ? function(e, t) {
					if (e === t) return c = !0, 0;
					var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e == E || e.ownerDocument == d && v(d, e) ? -1 : t == E || t.ownerDocument == d && v(d, t) ? 1 : l ? I(l, e) - I(l, t) : 0 : 4 & n ? -1 : 1)
				} : function(e, t) {
					if (e === t) return c = !0, 0;
					var n, i = 0,
						r = e.parentNode,
						o = t.parentNode,
						s = [e],
						a = [t];
					if (!r || !o) return e == E ? -1 : t == E ? 1 : r ? -1 : o ? 1 : l ? I(l, e) - I(l, t) : 0;
					if (r === o) return de(e, t);
					for (n = e; n = n.parentNode;) s.unshift(n);
					for (n = t; n = n.parentNode;) a.unshift(n);
					for (; s[i] === a[i];) i++;
					return i ? de(s[i], a[i]) : s[i] == d ? -1 : a[i] == d ? 1 : 0
				}), E
			}, ae.matches = function(e, t) {
				return ae(e, null, null, t)
			}, ae.matchesSelector = function(e, t) {
				if (x(e), p.matchesSelector && T && !S[t + " "] && (!a || !a.test(t)) && (!m || !m.test(t))) try {
					var n = u.call(e, t);
					if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
				} catch (e) {
					S(t, !0)
				}
				return 0 < ae(t, E, null, [e]).length
			}, ae.contains = function(e, t) {
				return (e.ownerDocument || e) != E && x(e), v(e, t)
			}, ae.attr = function(e, t) {
				(e.ownerDocument || e) != E && x(e);
				var n = _.attrHandle[t.toLowerCase()],
					i = n && L.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !T) : void 0;
				return void 0 !== i ? i : p.attributes || !T ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
			}, ae.escape = function(e) {
				return (e + "").replace(ie, re)
			}, ae.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, ae.uniqueSort = function(e) {
				var t, n = [],
					i = 0,
					r = 0;
				if (c = !p.detectDuplicates, l = !p.sortStable && e.slice(0), e.sort(D), c) {
					for (; t = e[r++];) t === e[r] && (i = n.push(r));
					for (; i--;) e.splice(n[i], 1)
				}
				return l = null, e
			}, o = ae.getText = function(e) {
				var t, n = "",
					i = 0,
					r = e.nodeType;
				if (r) {
					if (1 === r || 9 === r || 11 === r) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
					} else if (3 === r || 4 === r) return e.nodeValue
				} else
					for (; t = e[i++];) n += o(t);
				return n
			}, (_ = ae.selectors = {
				cacheLength: 50,
				createPseudo: ce,
				match: K,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, n = !e[6] && e[2];
						return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Q.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(te, ne).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = y[e + " "];
						return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && y(e, function(e) {
							return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function(n, i, r) {
						return function(e) {
							var t = ae.attr(e, n);
							return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(W, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
						}
					},
					CHILD: function(h, e, t, g, m) {
						var v = "nth" !== h.slice(0, 3),
							y = "last" !== h.slice(-4),
							b = "of-type" === e;
						return 1 === g && 0 === m ? function(e) {
							return !!e.parentNode
						} : function(e, t, n) {
							var i, r, o, s, a, l, c = v !== y ? "nextSibling" : "previousSibling",
								u = e.parentNode,
								f = b && e.nodeName.toLowerCase(),
								d = !n && !b,
								p = !1;
							if (u) {
								if (v) {
									for (; c;) {
										for (s = e; s = s[c];)
											if (b ? s.nodeName.toLowerCase() === f : 1 === s.nodeType) return !1;
										l = c = "only" === h && !l && "nextSibling"
									}
									return !0
								}
								if (l = [y ? u.firstChild : u.lastChild], y && d) {
									for (p = (a = (i = (r = (o = (s = u)[C] || (s[C] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === k && i[1]) && i[2], s = a && u.childNodes[a]; s = ++a && s && s[c] || (p = a = 0) || l.pop();)
										if (1 === s.nodeType && ++p && s === e) {
											r[h] = [k, a, p];
											break
										}
								} else if (d && (p = a = (i = (r = (o = (s = e)[C] || (s[C] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === k && i[1]), !1 === p)
									for (;
										(s = ++a && s && s[c] || (p = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++p || (d && ((r = (o = s[C] || (s[C] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] = [k, p]), s !== e)););
								return (p -= m) === g || p % g == 0 && 0 <= p / g
							}
						}
					},
					PSEUDO: function(e, o) {
						var t, s = _.pseudos[e] || _.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
						return s[C] ? s(o) : 1 < s.length ? (t = [e, e, "", o], _.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function(e, t) {
							for (var n, i = s(e, o), r = i.length; r--;) e[n = I(e, i[r])] = !(t[n] = i[r])
						}) : function(e) {
							return s(e, 0, t)
						}) : s
					}
				},
				pseudos: {
					not: ce(function(e) {
						var i = [],
							r = [],
							a = f(e.replace(F, "$1"));
						return a[C] ? ce(function(e, t, n, i) {
							for (var r, o = a(e, null, i, []), s = e.length; s--;)(r = o[s]) && (e[s] = !(t[s] = r))
						}) : function(e, t, n) {
							return i[0] = e, a(i, null, n, r), i[0] = null, !r.pop()
						}
					}),
					has: ce(function(t) {
						return function(e) {
							return 0 < ae(t, e).length
						}
					}),
					contains: ce(function(t) {
						return t = t.replace(te, ne),
							function(e) {
								return -1 < (e.textContent || o(e)).indexOf(t)
							}
					}),
					lang: ce(function(n) {
						return X.test(n || "") || ae.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
							function(e) {
								var t;
								do {
									if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
								} while ((e = e.parentNode) && 1 === e.nodeType);
								return !1
							}
					}),
					target: function(e) {
						var t = n.location && n.location.hash;
						return t && t.slice(1) === e.id
					},
					root: function(e) {
						return e === s
					},
					focus: function(e) {
						return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: ge(!1),
					disabled: ge(!0),
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1;
						return !0
					},
					parent: function(e) {
						return !_.pseudos.empty(e)
					},
					header: function(e) {
						return G.test(e.nodeName)
					},
					input: function(e) {
						return V.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: me(function() {
						return [0]
					}),
					last: me(function(e, t) {
						return [t - 1]
					}),
					eq: me(function(e, t, n) {
						return [n < 0 ? n + t : n]
					}),
					even: me(function(e, t) {
						for (var n = 0; n < t; n += 2) e.push(n);
						return e
					}),
					odd: me(function(e, t) {
						for (var n = 1; n < t; n += 2) e.push(n);
						return e
					}),
					lt: me(function(e, t, n) {
						for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
						return e
					}),
					gt: me(function(e, t, n) {
						for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
						return e
					})
				}
			}).pseudos.nth = _.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) _.pseudos[e] = pe(e);
		for (e in {
				submit: !0,
				reset: !0
			}) _.pseudos[e] = he(e);

		function ye() {}

		function be(e) {
			for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
			return i
		}

		function _e(a, e, t) {
			var l = e.dir,
				c = e.next,
				u = c || l,
				f = t && "parentNode" === u,
				d = i++;
			return e.first ? function(e, t, n) {
				for (; e = e[l];)
					if (1 === e.nodeType || f) return a(e, t, n);
				return !1
			} : function(e, t, n) {
				var i, r, o, s = [k, d];
				if (n) {
					for (; e = e[l];)
						if ((1 === e.nodeType || f) && a(e, t, n)) return !0
				} else
					for (; e = e[l];)
						if (1 === e.nodeType || f)
							if (r = (o = e[C] || (e[C] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), c && c === e.nodeName.toLowerCase()) e = e[l] || e;
							else {
								if ((i = r[u]) && i[0] === k && i[1] === d) return s[2] = i[2];
								if ((r[u] = s)[2] = a(e, t, n)) return !0
							} return !1
			}
		}

		function we(r) {
			return 1 < r.length ? function(e, t, n) {
				for (var i = r.length; i--;)
					if (!r[i](e, t, n)) return !1;
				return !0
			} : r[0]
		}

		function xe(e, t, n, i, r) {
			for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
			return s
		}

		function Ee(p, h, g, m, v, e) {
			return m && !m[C] && (m = Ee(m)), v && !v[C] && (v = Ee(v, e)), ce(function(e, t, n, i) {
				var r, o, s, a = [],
					l = [],
					c = t.length,
					u = e || function(e, t, n) {
						for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
						return n
					}(h || "*", n.nodeType ? [n] : n, []),
					f = !p || !e && h ? u : xe(u, a, p, n, i),
					d = g ? v || (e ? p : c || m) ? [] : t : f;
				if (g && g(f, d, n, i), m)
					for (r = xe(d, l), m(r, [], n, i), o = r.length; o--;)(s = r[o]) && (d[l[o]] = !(f[l[o]] = s));
				if (e) {
					if (v || p) {
						if (v) {
							for (r = [], o = d.length; o--;)(s = d[o]) && r.push(f[o] = s);
							v(null, d = [], r, i)
						}
						for (o = d.length; o--;)(s = d[o]) && -1 < (r = v ? I(e, s) : a[o]) && (e[r] = !(t[r] = s))
					}
				} else d = xe(d === t ? d.splice(c, d.length) : d), v ? v(null, t, d, i) : N.apply(t, d)
			})
		}

		function Te(e) {
			for (var r, t, n, i = e.length, o = _.relative[e[0].type], s = o || _.relative[" "], a = o ? 1 : 0, l = _e(function(e) {
					return e === r
				}, s, !0), c = _e(function(e) {
					return -1 < I(r, e)
				}, s, !0), u = [function(e, t, n) {
					var i = !o && (n || t !== w) || ((r = t).nodeType ? l(e, t, n) : c(e, t, n));
					return r = null, i
				}]; a < i; a++)
				if (t = _.relative[e[a].type]) u = [_e(we(u), t)];
				else {
					if ((t = _.filter[e[a].type].apply(null, e[a].matches))[C]) {
						for (n = ++a; n < i && !_.relative[e[n].type]; n++);
						return Ee(1 < a && we(u), 1 < a && be(e.slice(0, a - 1).concat({
							value: " " === e[a - 2].type ? "*" : ""
						})).replace(F, "$1"), t, a < n && Te(e.slice(a, n)), n < i && Te(e = e.slice(n)), n < i && be(e))
					}
					u.push(t)
				} return we(u)
		}
		return ye.prototype = _.filters = _.pseudos, _.setFilters = new ye, h = ae.tokenize = function(e, t) {
			var n, i, r, o, s, a, l, c = b[e + " "];
			if (c) return t ? 0 : c.slice(0);
			for (s = e, a = [], l = _.preFilter; s;) {
				for (o in n && !(i = $.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(r = [])), n = !1, (i = U.exec(s)) && (n = i.shift(), r.push({
						value: n,
						type: i[0].replace(F, " ")
					}), s = s.slice(n.length)), _.filter) !(i = K[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
					value: n,
					type: o,
					matches: i
				}), s = s.slice(n.length));
				if (!n) break
			}
			return t ? s.length : s ? ae.error(e) : b(e, a).slice(0)
		}, f = ae.compile = function(e, t) {
			var n, m, v, y, b, i, r = [],
				o = [],
				s = A[e + " "];
			if (!s) {
				for (t || (t = h(e)), n = t.length; n--;)(s = Te(t[n]))[C] ? r.push(s) : o.push(s);
				(s = A(e, (m = o, y = 0 < (v = r).length, b = 0 < m.length, i = function(e, t, n, i, r) {
					var o, s, a, l = 0,
						c = "0",
						u = e && [],
						f = [],
						d = w,
						p = e || b && _.find.TAG("*", r),
						h = k += null == d ? 1 : Math.random() || .1,
						g = p.length;
					for (r && (w = t == E || t || r); c !== g && null != (o = p[c]); c++) {
						if (b && o) {
							for (s = 0, t || o.ownerDocument == E || (x(o), n = !T); a = m[s++];)
								if (a(o, t || E, n)) {
									i.push(o);
									break
								} r && (k = h)
						}
						y && ((o = !a && o) && l--, e && u.push(o))
					}
					if (l += c, y && c !== l) {
						for (s = 0; a = v[s++];) a(u, f, t, n);
						if (e) {
							if (0 < l)
								for (; c--;) u[c] || f[c] || (f[c] = j.call(i));
							f = xe(f)
						}
						N.apply(i, f), r && !e && 0 < f.length && 1 < l + v.length && ae.uniqueSort(i)
					}
					return r && (k = h, w = d), u
				}, y ? ce(i) : i))).selector = e
			}
			return s
		}, g = ae.select = function(e, t, n, i) {
			var r, o, s, a, l, c = "function" == typeof e && e,
				u = !i && h(e = c.selector || e);
			if (n = n || [], 1 === u.length) {
				if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && T && _.relative[o[1].type]) {
					if (!(t = (_.find.ID(s.matches[0].replace(te, ne), t) || [])[0])) return n;
					c && (t = t.parentNode), e = e.slice(o.shift().value.length)
				}
				for (r = K.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !_.relative[a = s.type]);)
					if ((l = _.find[a]) && (i = l(s.matches[0].replace(te, ne), ee.test(o[0].type) && ve(t.parentNode) || t))) {
						if (o.splice(r, 1), !(e = i.length && be(o))) return N.apply(n, i), n;
						break
					}
			}
			return (c || f(e, u))(i, t, !T, n, !t || ee.test(e) && ve(t.parentNode) || t), n
		}, p.sortStable = C.split("").sort(D).join("") === C, p.detectDuplicates = !!c, x(), p.sortDetached = ue(function(e) {
			return 1 & e.compareDocumentPosition(E.createElement("fieldset"))
		}), ue(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || fe("type|href|height|width", function(e, t, n) {
			if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), p.attributes && ue(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || fe("value", function(e, t, n) {
			if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		}), ue(function(e) {
			return null == e.getAttribute("disabled")
		}) || fe(H, function(e, t, n) {
			var i;
			if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}), ae
	}(E);
	C.find = p, C.expr = p.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = p.uniqueSort, C.text = p.getText, C.isXMLDoc = p.isXML, C.contains = p.contains, C.escapeSelector = p.escape;
	var h = function(e, t, n) {
			for (var i = [], r = void 0 !== n;
				(e = e[t]) && 9 !== e.nodeType;)
				if (1 === e.nodeType) {
					if (r && C(e).is(n)) break;
					i.push(e)
				} return i
		},
		x = function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		k = C.expr.match.needsContext;

	function A(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}
	var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	function D(e, n, i) {
		return y(n) ? C.grep(e, function(e, t) {
			return !!n.call(e, t, e) !== i
		}) : n.nodeType ? C.grep(e, function(e) {
			return e === n !== i
		}) : "string" != typeof n ? C.grep(e, function(e) {
			return -1 < r.call(n, e) !== i
		}) : C.filter(n, e, i)
	}
	C.filter = function(e, t, n) {
		var i = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, C.fn.extend({
		find: function(e) {
			var t, n, i = this.length,
				r = this;
			if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
				for (t = 0; t < i; t++)
					if (C.contains(r[t], this)) return !0
			}));
			for (n = this.pushStack([]), t = 0; t < i; t++) C.find(e, r[t], n);
			return 1 < i ? C.uniqueSort(n) : n
		},
		filter: function(e) {
			return this.pushStack(D(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(D(this, e || [], !0))
		},
		is: function(e) {
			return !!D(this, "string" == typeof e && k.test(e) ? C(e) : e || [], !1).length
		}
	});
	var L, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(C.fn.init = function(e, t, n) {
		var i, r;
		if (!e) return this;
		if (n = n || L, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
		if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
		if (i[1]) {
			if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : T, !0)), S.test(i[1]) && C.isPlainObject(t))
				for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
			return this
		}
		return (r = T.getElementById(i[2])) && (this[0] = r, this.length = 1), this
	}).prototype = C.fn, L = C(T);
	var O = /^(?:parents|prev(?:Until|All))/,
		N = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function P(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}
	C.fn.extend({
		has: function(e) {
			var t = C(e, this),
				n = t.length;
			return this.filter(function() {
				for (var e = 0; e < n; e++)
					if (C.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			var n, i = 0,
				r = this.length,
				o = [],
				s = "string" != typeof e && C(e);
			if (!k.test(e))
				for (; i < r; i++)
					for (n = this[i]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
							o.push(n);
							break
						} return this.pushStack(1 < o.length ? C.uniqueSort(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? r.call(C(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), C.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return h(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return h(e, "parentNode", n)
		},
		next: function(e) {
			return P(e, "nextSibling")
		},
		prev: function(e) {
			return P(e, "previousSibling")
		},
		nextAll: function(e) {
			return h(e, "nextSibling")
		},
		prevAll: function(e) {
			return h(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return h(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return h(e, "previousSibling", n)
		},
		siblings: function(e) {
			return x((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return x(e.firstChild)
		},
		contents: function(e) {
			return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
		}
	}, function(i, r) {
		C.fn[i] = function(e, t) {
			var n = C.map(this, r, e);
			return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (N[i] || C.uniqueSort(n), O.test(i) && n.reverse()), this.pushStack(n)
		}
	});
	var I = /[^\x20\t\r\n\f]+/g;

	function H(e) {
		return e
	}

	function M(e) {
		throw e
	}

	function q(e, t, n, i) {
		var r;
		try {
			e && y(r = e.promise) ? r.call(e).done(t).fail(n) : e && y(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
		} catch (e) {
			n.apply(void 0, [e])
		}
	}
	C.Callbacks = function(i) {
		var e, n;
		i = "string" == typeof i ? (e = i, n = {}, C.each(e.match(I) || [], function(e, t) {
			n[t] = !0
		}), n) : C.extend({}, i);
		var r, t, o, s, a = [],
			l = [],
			c = -1,
			u = function() {
				for (s = s || i.once, o = r = !0; l.length; c = -1)
					for (t = l.shift(); ++c < a.length;) !1 === a[c].apply(t[0], t[1]) && i.stopOnFalse && (c = a.length, t = !1);
				i.memory || (t = !1), r = !1, s && (a = t ? [] : "")
			},
			f = {
				add: function() {
					return a && (t && !r && (c = a.length - 1, l.push(t)), function n(e) {
						C.each(e, function(e, t) {
							y(t) ? i.unique && f.has(t) || a.push(t) : t && t.length && "string" !== w(t) && n(t)
						})
					}(arguments), t && !r && u()), this
				},
				remove: function() {
					return C.each(arguments, function(e, t) {
						for (var n; - 1 < (n = C.inArray(t, a, n));) a.splice(n, 1), n <= c && c--
					}), this
				},
				has: function(e) {
					return e ? -1 < C.inArray(e, a) : 0 < a.length
				},
				empty: function() {
					return a && (a = []), this
				},
				disable: function() {
					return s = l = [], a = t = "", this
				},
				disabled: function() {
					return !a
				},
				lock: function() {
					return s = l = [], t || r || (a = t = ""), this
				},
				locked: function() {
					return !!s
				},
				fireWith: function(e, t) {
					return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), r || u()), this
				},
				fire: function() {
					return f.fireWith(this, arguments), this
				},
				fired: function() {
					return !!o
				}
			};
		return f
	}, C.extend({
		Deferred: function(e) {
			var o = [
					["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
					["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
				],
				r = "pending",
				s = {
					state: function() {
						return r
					},
					always: function() {
						return a.done(arguments).fail(arguments), this
					},
					catch: function(e) {
						return s.then(null, e)
					},
					pipe: function() {
						var r = arguments;
						return C.Deferred(function(i) {
							C.each(o, function(e, t) {
								var n = y(r[t[4]]) && r[t[4]];
								a[t[1]](function() {
									var e = n && n.apply(this, arguments);
									e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
								})
							}), r = null
						}).promise()
					},
					then: function(t, n, i) {
						var l = 0;

						function c(r, o, s, a) {
							return function() {
								var n = this,
									i = arguments,
									e = function() {
										var e, t;
										if (!(r < l)) {
											if ((e = s.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
											t = e && ("object" == typeof e || "function" == typeof e) && e.then, y(t) ? a ? t.call(e, c(l, o, H, a), c(l, o, M, a)) : (l++, t.call(e, c(l, o, H, a), c(l, o, M, a), c(l, o, H, o.notifyWith))) : (s !== H && (n = void 0, i = [e]), (a || o.resolveWith)(n, i))
										}
									},
									t = a ? e : function() {
										try {
											e()
										} catch (e) {
											C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), l <= r + 1 && (s !== M && (n = void 0, i = [e]), o.rejectWith(n, i))
										}
									};
								r ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), E.setTimeout(t))
							}
						}
						return C.Deferred(function(e) {
							o[0][3].add(c(0, e, y(i) ? i : H, e.notifyWith)), o[1][3].add(c(0, e, y(t) ? t : H)), o[2][3].add(c(0, e, y(n) ? n : M))
						}).promise()
					},
					promise: function(e) {
						return null != e ? C.extend(e, s) : s
					}
				},
				a = {};
			return C.each(o, function(e, t) {
				var n = t[2],
					i = t[5];
				s[t[1]] = n.add, i && n.add(function() {
					r = i
				}, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), a[t[0]] = function() {
					return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
				}, a[t[0] + "With"] = n.fireWith
			}), s.promise(a), e && e.call(a, a), a
		},
		when: function(e) {
			var n = arguments.length,
				t = n,
				i = Array(t),
				r = a.call(arguments),
				o = C.Deferred(),
				s = function(t) {
					return function(e) {
						i[t] = this, r[t] = 1 < arguments.length ? a.call(arguments) : e, --n || o.resolveWith(i, r)
					}
				};
			if (n <= 1 && (q(e, o.done(s(t)).resolve, o.reject, !n), "pending" === o.state() || y(r[t] && r[t].then))) return o.then();
			for (; t--;) q(r[t], s(t), o.reject);
			return o.promise()
		}
	});
	var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	C.Deferred.exceptionHook = function(e, t) {
		E.console && E.console.warn && e && R.test(e.name) && E.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
	}, C.readyException = function(e) {
		E.setTimeout(function() {
			throw e
		})
	};
	var B = C.Deferred();

	function W() {
		T.removeEventListener("DOMContentLoaded", W), E.removeEventListener("load", W), C.ready()
	}
	C.fn.ready = function(e) {
		return B.then(e).catch(function(e) {
			C.readyException(e)
		}), this
	}, C.extend({
		isReady: !1,
		readyWait: 1,
		ready: function(e) {
			(!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || B.resolveWith(T, [C])
		}
	}), C.ready.then = B.then, "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? E.setTimeout(C.ready) : (T.addEventListener("DOMContentLoaded", W), E.addEventListener("load", W));
	var F = function(e, t, n, i, r, o, s) {
			var a = 0,
				l = e.length,
				c = null == n;
			if ("object" === w(n))
				for (a in r = !0, n) F(e, t, a, n[a], !0, o, s);
			else if (void 0 !== i && (r = !0, y(i) || (s = !0), c && (t = s ? (t.call(e, i), null) : (c = t, function(e, t, n) {
					return c.call(C(e), n)
				})), t))
				for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
			return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
		},
		$ = /^-ms-/,
		U = /-([a-z])/g;

	function z(e, t) {
		return t.toUpperCase()
	}

	function Q(e) {
		return e.replace($, "ms-").replace(U, z)
	}
	var X = function(e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	};

	function K() {
		this.expando = C.expando + K.uid++
	}
	K.uid = 1, K.prototype = {
		cache: function(e) {
			var t = e[this.expando];
			return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function(e, t, n) {
			var i, r = this.cache(e);
			if ("string" == typeof t) r[Q(t)] = n;
			else
				for (i in t) r[Q(i)] = t[i];
			return r
		},
		get: function(e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Q(t)]
		},
		access: function(e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function(e, t) {
			var n, i = e[this.expando];
			if (void 0 !== i) {
				if (void 0 !== t) {
					n = (t = Array.isArray(t) ? t.map(Q) : (t = Q(t)) in i ? [t] : t.match(I) || []).length;
					for (; n--;) delete i[t[n]]
				}(void 0 === t || C.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function(e) {
			var t = e[this.expando];
			return void 0 !== t && !C.isEmptyObject(t)
		}
	};
	var Y = new K,
		V = new K,
		G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		J = /[A-Z]/g;

	function Z(e, t, n) {
		var i, r;
		if (void 0 === n && 1 === e.nodeType)
			if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
				try {
					n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : G.test(r) ? JSON.parse(r) : r)
				} catch (e) {}
				V.set(e, t, n)
			} else n = void 0;
		return n
	}
	C.extend({
		hasData: function(e) {
			return V.hasData(e) || Y.hasData(e)
		},
		data: function(e, t, n) {
			return V.access(e, t, n)
		},
		removeData: function(e, t) {
			V.remove(e, t)
		},
		_data: function(e, t, n) {
			return Y.access(e, t, n)
		},
		_removeData: function(e, t) {
			Y.remove(e, t)
		}
	}), C.fn.extend({
		data: function(n, e) {
			var t, i, r, o = this[0],
				s = o && o.attributes;
			if (void 0 !== n) return "object" == typeof n ? this.each(function() {
				V.set(this, n)
			}) : F(this, function(e) {
				var t;
				if (o && void 0 === e) return void 0 !== (t = V.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
				this.each(function() {
					V.set(this, n, e)
				})
			}, null, e, 1 < arguments.length, null, !0);
			if (this.length && (r = V.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
				for (t = s.length; t--;) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = Q(i.slice(5)), Z(o, i, r[i]));
				Y.set(o, "hasDataAttrs", !0)
			}
			return r
		},
		removeData: function(e) {
			return this.each(function() {
				V.remove(this, e)
			})
		}
	}), C.extend({
		queue: function(e, t, n) {
			var i;
			if (e) return t = (t || "fx") + "queue", i = Y.get(e, t), n && (!i || Array.isArray(n) ? i = Y.access(e, t, C.makeArray(n)) : i.push(n)), i || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = C.queue(e, t),
				i = n.length,
				r = n.shift(),
				o = C._queueHooks(e, t);
			"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() {
				C.dequeue(e, t)
			}, o)), !i && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return Y.get(e, n) || Y.access(e, n, {
				empty: C.Callbacks("once memory").add(function() {
					Y.remove(e, [t + "queue", n])
				})
			})
		}
	}), C.fn.extend({
		queue: function(t, n) {
			var e = 2;
			return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function() {
				var e = C.queue(this, t, n);
				C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				C.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, i = 1,
				r = C.Deferred(),
				o = this,
				s = this.length,
				a = function() {
					--i || r.resolveWith(o, [o])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Y.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
			return a(), r.promise(t)
		}
	});
	var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
		ne = ["Top", "Right", "Bottom", "Left"],
		ie = T.documentElement,
		re = function(e) {
			return C.contains(e.ownerDocument, e)
		},
		oe = {
			composed: !0
		};
	ie.getRootNode && (re = function(e) {
		return C.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
	});
	var se = function(e, t) {
		return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === C.css(e, "display")
	};

	function ae(e, t, n, i) {
		var r, o, s = 20,
			a = i ? function() {
				return i.cur()
			} : function() {
				return C.css(e, t, "")
			},
			l = a(),
			c = n && n[3] || (C.cssNumber[t] ? "" : "px"),
			u = e.nodeType && (C.cssNumber[t] || "px" !== c && +l) && te.exec(C.css(e, t));
		if (u && u[3] !== c) {
			for (l /= 2, c = c || u[3], u = +l || 1; s--;) C.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
			u *= 2, C.style(e, t, u + c), n = n || []
		}
		return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
	}
	var le = {};

	function ce(e, t) {
		for (var n, i, r, o, s, a, l, c = [], u = 0, f = e.length; u < f; u++)(i = e[u]).style && (n = i.style.display, t ? ("none" === n && (c[u] = Y.get(i, "display") || null, c[u] || (i.style.display = "")), "" === i.style.display && se(i) && (c[u] = (l = s = o = void 0, s = (r = i).ownerDocument, a = r.nodeName, (l = le[a]) || (o = s.body.appendChild(s.createElement(a)), l = C.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), le[a] = l)))) : "none" !== n && (c[u] = "none", Y.set(i, "display", n)));
		for (u = 0; u < f; u++) null != c[u] && (e[u].style.display = c[u]);
		return e
	}
	C.fn.extend({
		show: function() {
			return ce(this, !0)
		},
		hide: function() {
			return ce(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				se(this) ? C(this).show() : C(this).hide()
			})
		}
	});
	var ue, fe, de = /^(?:checkbox|radio)$/i,
		pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
		he = /^$|^module$|\/(?:java|ecma)script/i;
	ue = T.createDocumentFragment().appendChild(T.createElement("div")), (fe = T.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ue.appendChild(fe), v.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked, ue.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue, ue.innerHTML = "<option></option>", v.option = !!ue.lastChild;
	var ge = {
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: [0, "", ""]
	};

	function me(e, t) {
		var n;
		return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? C.merge([e], n) : n
	}

	function ve(e, t) {
		for (var n = 0, i = e.length; n < i; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
	}
	ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, v.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
	var ye = /<|&#?\w+;/;

	function be(e, t, n, i, r) {
		for (var o, s, a, l, c, u, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
			if ((o = e[p]) || 0 === o)
				if ("object" === w(o)) C.merge(d, o.nodeType ? [o] : o);
				else if (ye.test(o)) {
			for (s = s || f.appendChild(t.createElement("div")), a = (pe.exec(o) || ["", ""])[1].toLowerCase(), l = ge[a] || ge._default, s.innerHTML = l[1] + C.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
			C.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
		} else d.push(t.createTextNode(o));
		for (f.textContent = "", p = 0; o = d[p++];)
			if (i && -1 < C.inArray(o, i)) r && r.push(o);
			else if (c = re(o), s = me(f.appendChild(o), "script"), c && ve(s), n)
			for (u = 0; o = s[u++];) he.test(o.type || "") && n.push(o);
		return f
	}
	var _e = /^([^.]*)(?:\.(.+)|)/;

	function we() {
		return !0
	}

	function xe() {
		return !1
	}

	function Ee(e, t) {
		return e === function() {
			try {
				return T.activeElement
			} catch (e) {}
		}() == ("focus" === t)
	}

	function Te(e, t, n, i, r, o) {
		var s, a;
		if ("object" == typeof t) {
			for (a in "string" != typeof n && (i = i || n, n = void 0), t) Te(e, a, n, i, t[a], o);
			return e
		}
		if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = xe;
		else if (!r) return e;
		return 1 === o && (s = r, (r = function(e) {
			return C().off(e), s.apply(this, arguments)
		}).guid = s.guid || (s.guid = C.guid++)), e.each(function() {
			C.event.add(this, t, r, i, n)
		})
	}

	function Ce(e, r, o) {
		o ? (Y.set(e, r, !1), C.event.add(e, r, {
			namespace: !1,
			handler: function(e) {
				var t, n, i = Y.get(this, r);
				if (1 & e.isTrigger && this[r]) {
					if (i.length)(C.event.special[r] || {}).delegateType && e.stopPropagation();
					else if (i = a.call(arguments), Y.set(this, r, i), t = o(this, r), this[r](), i !== (n = Y.get(this, r)) || t ? Y.set(this, r, !1) : n = {}, i !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
				} else i.length && (Y.set(this, r, {
					value: C.event.trigger(C.extend(i[0], C.Event.prototype), i.slice(1), this)
				}), e.stopImmediatePropagation())
			}
		})) : void 0 === Y.get(e, r) && C.event.add(e, r, we)
	}
	C.event = {
		global: {},
		add: function(t, e, n, i, r) {
			var o, s, a, l, c, u, f, d, p, h, g, m = Y.get(t);
			if (X(t))
				for (n.handler && (n = (o = n).handler, r = o.selector), r && C.find.matchesSelector(ie, r), n.guid || (n.guid = C.guid++), (l = m.events) || (l = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function(e) {
						return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
					}), c = (e = (e || "").match(I) || [""]).length; c--;) p = g = (a = _e.exec(e[c]) || [])[1], h = (a[2] || "").split(".").sort(), p && (f = C.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, f = C.event.special[p] || {}, u = C.extend({
					type: p,
					origType: g,
					data: i,
					handler: n,
					guid: n.guid,
					selector: r,
					needsContext: r && C.expr.match.needsContext.test(r),
					namespace: h.join(".")
				}, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, h, s) || t.addEventListener && t.addEventListener(p, s)), f.add && (f.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), C.event.global[p] = !0)
		},
		remove: function(e, t, n, i, r) {
			var o, s, a, l, c, u, f, d, p, h, g, m = Y.hasData(e) && Y.get(e);
			if (m && (l = m.events)) {
				for (c = (t = (t || "").match(I) || [""]).length; c--;)
					if (p = g = (a = _e.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), p) {
						for (f = C.event.special[p] || {}, d = l[p = (i ? f.delegateType : f.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) u = d[o], !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(e, u));
						s && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || C.removeEvent(e, p, m.handle), delete l[p])
					} else
						for (p in l) C.event.remove(e, p + t[c], n, i, !0);
				C.isEmptyObject(l) && Y.remove(e, "handle events")
			}
		},
		dispatch: function(e) {
			var t, n, i, r, o, s, a = new Array(arguments.length),
				l = C.event.fix(e),
				c = (Y.get(this, "events") || Object.create(null))[l.type] || [],
				u = C.event.special[l.type] || {};
			for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
			if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
				for (s = C.event.handlers.call(this, l, c), t = 0;
					(r = s[t++]) && !l.isPropagationStopped();)
					for (l.currentTarget = r.elem, n = 0;
						(o = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (i = ((C.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, l), l.result
			}
		},
		handlers: function(e, t) {
			var n, i, r, o, s, a = [],
				l = t.delegateCount,
				c = e.target;
			if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
				for (; c !== this; c = c.parentNode || this)
					if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
						for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? -1 < C(r, this).index(c) : C.find(r, this, null, [c]).length), s[r] && o.push(i);
						o.length && a.push({
							elem: c,
							handlers: o
						})
					} return c = this, l < t.length && a.push({
				elem: c,
				handlers: t.slice(l)
			}), a
		},
		addProp: function(t, e) {
			Object.defineProperty(C.Event.prototype, t, {
				enumerable: !0,
				configurable: !0,
				get: y(e) ? function() {
					if (this.originalEvent) return e(this.originalEvent)
				} : function() {
					if (this.originalEvent) return this.originalEvent[t]
				},
				set: function(e) {
					Object.defineProperty(this, t, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: e
					})
				}
			})
		},
		fix: function(e) {
			return e[C.expando] ? e : new C.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			click: {
				setup: function(e) {
					var t = this || e;
					return de.test(t.type) && t.click && A(t, "input") && Ce(t, "click", we), !1
				},
				trigger: function(e) {
					var t = this || e;
					return de.test(t.type) && t.click && A(t, "input") && Ce(t, "click"), !0
				},
				_default: function(e) {
					var t = e.target;
					return de.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, C.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, C.Event = function(e, t) {
		if (!(this instanceof C.Event)) return new C.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : xe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
	}, C.Event.prototype = {
		constructor: C.Event,
		isDefaultPrevented: xe,
		isPropagationStopped: xe,
		isImmediatePropagationStopped: xe,
		isSimulated: !1,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, C.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		char: !0,
		code: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: !0
	}, C.event.addProp), C.each({
		focus: "focusin",
		blur: "focusout"
	}, function(t, e) {
		C.event.special[t] = {
			setup: function() {
				return Ce(this, t, Ee), !1
			},
			trigger: function() {
				return Ce(this, t), !0
			},
			_default: function(e) {
				return Y.get(e.target, t)
			},
			delegateType: e
		}
	}), C.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, r) {
		C.event.special[e] = {
			delegateType: r,
			bindType: r,
			handle: function(e) {
				var t, n = e.relatedTarget,
					i = e.handleObj;
				return n && (n === this || C.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
			}
		}
	}), C.fn.extend({
		on: function(e, t, n, i) {
			return Te(this, e, t, n, i)
		},
		one: function(e, t, n, i) {
			return Te(this, e, t, n, i, 1)
		},
		off: function(e, t, n) {
			var i, r;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = xe), this.each(function() {
				C.event.remove(this, e, n, t)
			});
			for (r in e) this.off(r, t, e[r]);
			return this
		}
	});
	var ke = /<script|<style|<link/i,
		Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Se = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

	function De(e, t) {
		return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
	}

	function Le(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function je(e) {
		return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
	}

	function Oe(e, t) {
		var n, i, r, o, s, a;
		if (1 === t.nodeType) {
			if (Y.hasData(e) && (a = Y.get(e).events))
				for (r in Y.remove(t, "handle events"), a)
					for (n = 0, i = a[r].length; n < i; n++) C.event.add(t, r, a[r][n]);
			V.hasData(e) && (o = V.access(e), s = C.extend({}, o), V.set(t, s))
		}
	}

	function Ne(n, i, r, o) {
		i = g(i);
		var e, t, s, a, l, c, u = 0,
			f = n.length,
			d = f - 1,
			p = i[0],
			h = y(p);
		if (h || 1 < f && "string" == typeof p && !v.checkClone && Ae.test(p)) return n.each(function(e) {
			var t = n.eq(e);
			h && (i[0] = p.call(this, e, t.html())), Ne(t, i, r, o)
		});
		if (f && (t = (e = be(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
			for (a = (s = C.map(me(e, "script"), Le)).length; u < f; u++) l = e, u !== d && (l = C.clone(l, !0, !0), a && C.merge(s, me(l, "script"))), r.call(n[u], l, u);
			if (a)
				for (c = s[s.length - 1].ownerDocument, C.map(s, je), u = 0; u < a; u++) l = s[u], he.test(l.type || "") && !Y.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, {
					nonce: l.nonce || l.getAttribute("nonce")
				}, c) : _(l.textContent.replace(Se, ""), l, c))
		}
		return n
	}

	function Pe(e, t, n) {
		for (var i, r = t ? C.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || C.cleanData(me(i)), i.parentNode && (n && re(i) && ve(me(i, "script")), i.parentNode.removeChild(i));
		return e
	}
	C.extend({
		htmlPrefilter: function(e) {
			return e
		},
		clone: function(e, t, n) {
			var i, r, o, s, a, l, c, u = e.cloneNode(!0),
				f = re(e);
			if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
				for (s = me(u), i = 0, r = (o = me(e)).length; i < r; i++) a = o[i], l = s[i], void 0, "input" === (c = l.nodeName.toLowerCase()) && de.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
			if (t)
				if (n)
					for (o = o || me(e), s = s || me(u), i = 0, r = o.length; i < r; i++) Oe(o[i], s[i]);
				else Oe(e, u);
			return 0 < (s = me(u, "script")).length && ve(s, !f && me(e, "script")), u
		},
		cleanData: function(e) {
			for (var t, n, i, r = C.event.special, o = 0; void 0 !== (n = e[o]); o++)
				if (X(n)) {
					if (t = n[Y.expando]) {
						if (t.events)
							for (i in t.events) r[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
						n[Y.expando] = void 0
					}
					n[V.expando] && (n[V.expando] = void 0)
				}
		}
	}), C.fn.extend({
		detach: function(e) {
			return Pe(this, e, !0)
		},
		remove: function(e) {
			return Pe(this, e)
		},
		text: function(e) {
			return F(this, function(e) {
				return void 0 === e ? C.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return Ne(this, arguments, function(e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e)
			})
		},
		prepend: function() {
			return Ne(this, arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = De(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return Ne(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return Ne(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(me(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return C.clone(this, e, t)
			})
		},
		html: function(e) {
			return F(this, function(e) {
				var t = this[0] || {},
					n = 0,
					i = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !ke.test(e) && !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = C.htmlPrefilter(e);
					try {
						for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(me(t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var n = [];
			return Ne(this, arguments, function(e) {
				var t = this.parentNode;
				C.inArray(this, n) < 0 && (C.cleanData(me(this)), t && t.replaceChild(e, this))
			}, n)
		}
	}), C.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, s) {
		C.fn[e] = function(e) {
			for (var t, n = [], i = C(e), r = i.length - 1, o = 0; o <= r; o++) t = o === r ? this : this.clone(!0), C(i[o])[s](t), l.apply(n, t.get());
			return this.pushStack(n)
		}
	});
	var Ie = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
		He = /^--/,
		Me = function(e) {
			var t = e.ownerDocument.defaultView;
			return t && t.opener || (t = E), t.getComputedStyle(e)
		},
		qe = function(e, t, n) {
			var i, r, o = {};
			for (r in t) o[r] = e.style[r], e.style[r] = t[r];
			for (r in i = n.call(e), t) e.style[r] = o[r];
			return i
		},
		Re = new RegExp(ne.join("|"), "i"),
		Be = "[\\x20\\t\\r\\n\\f]",
		We = new RegExp("^" + Be + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Be + "+$", "g");

	function Fe(e, t, n) {
		var i, r, o, s, a = He.test(t),
			l = e.style;
		return (n = n || Me(e)) && (s = n.getPropertyValue(t) || n[t], a && s && (s = s.replace(We, "$1") || void 0), "" !== s || re(e) || (s = C.style(e, t)), !v.pixelBoxStyles() && Ie.test(s) && Re.test(t) && (i = l.width, r = l.minWidth, o = l.maxWidth, l.minWidth = l.maxWidth = l.width = s, s = n.width, l.width = i, l.minWidth = r, l.maxWidth = o)), void 0 !== s ? s + "" : s
	}

	function $e(e, t) {
		return {
			get: function() {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get
			}
		}
	}! function() {
		function e() {
			if (c) {
				l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(l).appendChild(c);
				var e = E.getComputedStyle(c);
				n = "1%" !== e.top, a = 12 === t(e.marginLeft), c.style.right = "60%", o = 36 === t(e.right), i = 36 === t(e.width), c.style.position = "absolute", r = 12 === t(c.offsetWidth / 3), ie.removeChild(l), c = null
			}
		}

		function t(e) {
			return Math.round(parseFloat(e))
		}
		var n, i, r, o, s, a, l = T.createElement("div"),
			c = T.createElement("div");
		c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === c.style.backgroundClip, C.extend(v, {
			boxSizingReliable: function() {
				return e(), i
			},
			pixelBoxStyles: function() {
				return e(), o
			},
			pixelPosition: function() {
				return e(), n
			},
			reliableMarginLeft: function() {
				return e(), a
			},
			scrollboxSize: function() {
				return e(), r
			},
			reliableTrDimensions: function() {
				var e, t, n, i;
				return null == s && (e = T.createElement("table"), t = T.createElement("tr"), n = T.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", ie.appendChild(e).appendChild(t).appendChild(n), i = E.getComputedStyle(t), s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight, ie.removeChild(e)), s
			}
		}))
	}();
	var Ue = ["Webkit", "Moz", "ms"],
		ze = T.createElement("div").style,
		Qe = {};

	function Xe(e) {
		var t = C.cssProps[e] || Qe[e];
		return t || (e in ze ? e : Qe[e] = function(e) {
			for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--;)
				if ((e = Ue[n] + t) in ze) return e
		}(e) || e)
	}
	var Ke = /^(none|table(?!-c[ea]).+)/,
		Ye = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Ve = {
			letterSpacing: "0",
			fontWeight: "400"
		};

	function Ge(e, t, n) {
		var i = te.exec(t);
		return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
	}

	function Je(e, t, n, i, r, o) {
		var s = "width" === t ? 1 : 0,
			a = 0,
			l = 0;
		if (n === (i ? "border" : "content")) return 0;
		for (; s < 4; s += 2) "margin" === n && (l += C.css(e, n + ne[s], !0, r)), i ? ("content" === n && (l -= C.css(e, "padding" + ne[s], !0, r)), "margin" !== n && (l -= C.css(e, "border" + ne[s] + "Width", !0, r))) : (l += C.css(e, "padding" + ne[s], !0, r), "padding" !== n ? l += C.css(e, "border" + ne[s] + "Width", !0, r) : a += C.css(e, "border" + ne[s] + "Width", !0, r));
		return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0), l
	}

	function Ze(e, t, n) {
		var i = Me(e),
			r = (!v.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, i),
			o = r,
			s = Fe(e, t, i),
			a = "offset" + t[0].toUpperCase() + t.slice(1);
		if (Ie.test(s)) {
			if (!n) return s;
			s = "auto"
		}
		return (!v.boxSizingReliable() && r || !v.reliableTrDimensions() && A(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === C.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === C.css(e, "boxSizing", !1, i), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + Je(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
	}

	function et(e, t, n, i, r) {
		return new et.prototype.init(e, t, n, i, r)
	}
	C.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = Fe(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			gridArea: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnStart: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowStart: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {},
		style: function(e, t, n, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var r, o, s, a = Q(t),
					l = He.test(t),
					c = e.style;
				if (l || (t = Xe(a)), s = C.cssHooks[t] || C.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
				"string" === (o = typeof n) && (r = te.exec(n)) && r[1] && (n = ae(e, t, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (C.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
			}
		},
		css: function(e, t, n, i) {
			var r, o, s, a = Q(t);
			return He.test(t) || (t = Xe(a)), (s = C.cssHooks[t] || C.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Fe(e, t, i)), "normal" === r && t in Ve && (r = Ve[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
		}
	}), C.each(["height", "width"], function(e, l) {
		C.cssHooks[l] = {
			get: function(e, t, n) {
				if (t) return !Ke.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, l, n) : qe(e, Ye, function() {
					return Ze(e, l, n)
				})
			},
			set: function(e, t, n) {
				var i, r = Me(e),
					o = !v.scrollboxSize() && "absolute" === r.position,
					s = (o || n) && "border-box" === C.css(e, "boxSizing", !1, r),
					a = n ? Je(e, l, n, s, r) : 0;
				return s && o && (a -= Math.ceil(e["offset" + l[0].toUpperCase() + l.slice(1)] - parseFloat(r[l]) - Je(e, l, "border", !1, r) - .5)), a && (i = te.exec(t)) && "px" !== (i[3] || "px") && (e.style[l] = t, t = C.css(e, l)), Ge(0, t, a)
			}
		}
	}), C.cssHooks.marginLeft = $e(v.reliableMarginLeft, function(e, t) {
		if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - qe(e, {
			marginLeft: 0
		}, function() {
			return e.getBoundingClientRect().left
		})) + "px"
	}), C.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(r, o) {
		C.cssHooks[r + o] = {
			expand: function(e) {
				for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + ne[t] + o] = i[t] || i[t - 2] || i[0];
				return n
			}
		}, "margin" !== r && (C.cssHooks[r + o].set = Ge)
	}), C.fn.extend({
		css: function(e, t) {
			return F(this, function(e, t, n) {
				var i, r, o = {},
					s = 0;
				if (Array.isArray(t)) {
					for (i = Me(e), r = t.length; s < r; s++) o[t[s]] = C.css(e, t[s], !1, i);
					return o
				}
				return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
			}, e, t, 1 < arguments.length)
		}
	}), ((C.Tween = et).prototype = {
		constructor: et,
		init: function(e, t, n, i, r, o) {
			this.elem = e, this.prop = n, this.easing = r || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (C.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = et.propHooks[this.prop];
			return e && e.get ? e.get(this) : et.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = et.propHooks[this.prop];
			return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
		}
	}).init.prototype = et.prototype, (et.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
			},
			set: function(e) {
				C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}).scrollTop = et.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, C.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, C.fx = et.prototype.init, C.fx.step = {};
	var tt, nt, it, rt, ot = /^(?:toggle|show|hide)$/,
		st = /queueHooks$/;

	function at() {
		nt && (!1 === T.hidden && E.requestAnimationFrame ? E.requestAnimationFrame(at) : E.setTimeout(at, C.fx.interval), C.fx.tick())
	}

	function lt() {
		return E.setTimeout(function() {
			tt = void 0
		}), tt = Date.now()
	}

	function ct(e, t) {
		var n, i = 0,
			r = {
				height: e
			};
		for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ne[i])] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}

	function ut(e, t, n) {
		for (var i, r = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, s = r.length; o < s; o++)
			if (i = r[o].call(n, t, e)) return i
	}

	function ft(o, e, t) {
		var n, s, i = 0,
			r = ft.prefilters.length,
			a = C.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (s) return !1;
				for (var e = tt || lt(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, r = c.tweens.length; i < r; i++) c.tweens[i].run(n);
				return a.notifyWith(o, [c, n, t]), n < 1 && r ? t : (r || a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c]), !1)
			},
			c = a.promise({
				elem: o,
				props: C.extend({}, e),
				opts: C.extend(!0, {
					specialEasing: {},
					easing: C.easing._default
				}, t),
				originalProperties: e,
				originalOptions: t,
				startTime: tt || lt(),
				duration: t.duration,
				tweens: [],
				createTween: function(e, t) {
					var n = C.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
					return c.tweens.push(n), n
				},
				stop: function(e) {
					var t = 0,
						n = e ? c.tweens.length : 0;
					if (s) return this;
					for (s = !0; t < n; t++) c.tweens[t].run(1);
					return e ? (a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c, e])) : a.rejectWith(o, [c, e]), this
				}
			}),
			u = c.props;
		for (! function(e, t) {
				var n, i, r, o, s;
				for (n in e)
					if (r = t[i = Q(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = C.cssHooks[i]) && "expand" in s)
						for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
					else t[i] = r
			}(u, c.opts.specialEasing); i < r; i++)
			if (n = ft.prefilters[i].call(c, o, u, c.opts)) return y(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
		return C.map(u, ut, c), y(c.opts.start) && c.opts.start.call(o, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(l, {
			elem: o,
			anim: c,
			queue: c.opts.queue
		})), c
	}
	C.Animation = C.extend(ft, {
		tweeners: {
			"*": [function(e, t) {
				var n = this.createTween(e, t);
				return ae(n.elem, e, te.exec(t), n), n
			}]
		},
		tweener: function(e, t) {
			for (var n, i = 0, r = (e = y(e) ? (t = e, ["*"]) : e.match(I)).length; i < r; i++) n = e[i], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
		},
		prefilters: [function(e, t, n) {
			var i, r, o, s, a, l, c, u, f = "width" in t || "height" in t,
				d = this,
				p = {},
				h = e.style,
				g = e.nodeType && se(e),
				m = Y.get(e, "fxshow");
			for (i in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
					s.unqueued || a()
				}), s.unqueued++, d.always(function() {
					d.always(function() {
						s.unqueued--, C.queue(e, "fx").length || s.empty.fire()
					})
				})), t)
				if (r = t[i], ot.test(r)) {
					if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
						if ("show" !== r || !m || void 0 === m[i]) continue;
						g = !0
					}
					p[i] = m && m[i] || C.style(e, i)
				} if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
				for (i in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = m && m.display) && (c = Y.get(e, "display")), "none" === (u = C.css(e, "display")) && (c ? u = c : (ce([e], !0), c = e.style.display || c, u = C.css(e, "display"), ce([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === C.css(e, "float") && (l || (d.done(function() {
						h.display = c
					}), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
						h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
					})), l = !1, p) l || (m ? "hidden" in m && (g = m.hidden) : m = Y.access(e, "fxshow", {
					display: c
				}), o && (m.hidden = !g), g && ce([e], !0), d.done(function() {
					for (i in g || ce([e]), Y.remove(e, "fxshow"), p) C.style(e, i, p[i])
				})), l = ut(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
		}],
		prefilter: function(e, t) {
			t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
		}
	}), C.speed = function(e, t, n) {
		var i = e && "object" == typeof e ? C.extend({}, e) : {
			complete: n || !n && t || y(e) && e,
			duration: e,
			easing: n && t || t && !y(t) && t
		};
		return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
			y(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue)
		}, i
	}, C.fn.extend({
		fadeTo: function(e, t, n, i) {
			return this.filter(se).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, i)
		},
		animate: function(t, e, n, i) {
			var r = C.isEmptyObject(t),
				o = C.speed(e, n, i),
				s = function() {
					var e = ft(this, C.extend({}, t), o);
					(r || Y.get(this, "finish")) && e.stop(!0)
				};
			return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
		},
		stop: function(r, e, o) {
			var s = function(e) {
				var t = e.stop;
				delete e.stop, t(o)
			};
			return "string" != typeof r && (o = e, e = r, r = void 0), e && this.queue(r || "fx", []), this.each(function() {
				var e = !0,
					t = null != r && r + "queueHooks",
					n = C.timers,
					i = Y.get(this);
				if (t) i[t] && i[t].stop && s(i[t]);
				else
					for (t in i) i[t] && i[t].stop && st.test(t) && s(i[t]);
				for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
				!e && o || C.dequeue(this, r)
			})
		},
		finish: function(s) {
			return !1 !== s && (s = s || "fx"), this.each(function() {
				var e, t = Y.get(this),
					n = t[s + "queue"],
					i = t[s + "queueHooks"],
					r = C.timers,
					o = n ? n.length : 0;
				for (t.finish = !0, C.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), r.splice(e, 1));
				for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
				delete t.finish
			})
		}
	}), C.each(["toggle", "show", "hide"], function(e, i) {
		var r = C.fn[i];
		C.fn[i] = function(e, t, n) {
			return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(ct(i, !0), e, t, n)
		}
	}), C.each({
		slideDown: ct("show"),
		slideUp: ct("hide"),
		slideToggle: ct("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, i) {
		C.fn[e] = function(e, t, n) {
			return this.animate(i, e, t, n)
		}
	}), C.timers = [], C.fx.tick = function() {
		var e, t = 0,
			n = C.timers;
		for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
		n.length || C.fx.stop(), tt = void 0
	}, C.fx.timer = function(e) {
		C.timers.push(e), C.fx.start()
	}, C.fx.interval = 13, C.fx.start = function() {
		nt || (nt = !0, at())
	}, C.fx.stop = function() {
		nt = null
	}, C.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, C.fn.delay = function(i, e) {
		return i = C.fx && C.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
			var n = E.setTimeout(e, i);
			t.stop = function() {
				E.clearTimeout(n)
			}
		})
	}, it = T.createElement("input"), rt = T.createElement("select").appendChild(T.createElement("option")), it.type = "checkbox", v.checkOn = "" !== it.value, v.optSelected = rt.selected, (it = T.createElement("input")).value = "t", it.type = "radio", v.radioValue = "t" === it.value;
	var dt, pt = C.expr.attrHandle;
	C.fn.extend({
		attr: function(e, t) {
			return F(this, C.attr, e, t, 1 < arguments.length)
		},
		removeAttr: function(e) {
			return this.each(function() {
				C.removeAttr(this, e)
			})
		}
	}), C.extend({
		attr: function(e, t, n) {
			var i, r, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (r = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = C.find.attr(e, t)) ? void 0 : i)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!v.radioValue && "radio" === t && A(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function(e, t) {
			var n, i = 0,
				r = t && t.match(I);
			if (r && 1 === e.nodeType)
				for (; n = r[i++];) e.removeAttribute(n)
		}
	}), dt = {
		set: function(e, t, n) {
			return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var s = pt[t] || C.find.attr;
		pt[t] = function(e, t, n) {
			var i, r, o = t.toLowerCase();
			return n || (r = pt[o], pt[o] = i, i = null != s(e, t, n) ? o : null, pt[o] = r), i
		}
	});
	var ht = /^(?:input|select|textarea|button)$/i,
		gt = /^(?:a|area)$/i;

	function mt(e) {
		return (e.match(I) || []).join(" ")
	}

	function vt(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function yt(e) {
		return Array.isArray(e) ? e : "string" == typeof e && e.match(I) || []
	}
	C.fn.extend({
		prop: function(e, t) {
			return F(this, C.prop, e, t, 1 < arguments.length)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[C.propFix[e] || e]
			})
		}
	}), C.extend({
		prop: function(e, t, n) {
			var i, r, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t, r = C.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = C.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			for: "htmlFor",
			class: "className"
		}
	}), v.optSelected || (C.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function(e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		C.propFix[this.toLowerCase()] = this
	}), C.fn.extend({
		addClass: function(t) {
			var e, n, i, r, o, s;
			return y(t) ? this.each(function(e) {
				C(this).addClass(t.call(this, e, vt(this)))
			}) : (e = yt(t)).length ? this.each(function() {
				if (i = vt(this), n = 1 === this.nodeType && " " + mt(i) + " ") {
					for (o = 0; o < e.length; o++) r = e[o], n.indexOf(" " + r + " ") < 0 && (n += r + " ");
					s = mt(n), i !== s && this.setAttribute("class", s)
				}
			}) : this
		},
		removeClass: function(t) {
			var e, n, i, r, o, s;
			return y(t) ? this.each(function(e) {
				C(this).removeClass(t.call(this, e, vt(this)))
			}) : arguments.length ? (e = yt(t)).length ? this.each(function() {
				if (i = vt(this), n = 1 === this.nodeType && " " + mt(i) + " ") {
					for (o = 0; o < e.length; o++)
						for (r = e[o]; - 1 < n.indexOf(" " + r + " ");) n = n.replace(" " + r + " ", " ");
					s = mt(n), i !== s && this.setAttribute("class", s)
				}
			}) : this : this.attr("class", "")
		},
		toggleClass: function(t, n) {
			var e, i, r, o, s = typeof t,
				a = "string" === s || Array.isArray(t);
			return y(t) ? this.each(function(e) {
				C(this).toggleClass(t.call(this, e, vt(this), n), n)
			}) : "boolean" == typeof n && a ? n ? this.addClass(t) : this.removeClass(t) : (e = yt(t), this.each(function() {
				if (a)
					for (o = C(this), r = 0; r < e.length; r++) i = e[r], o.hasClass(i) ? o.removeClass(i) : o.addClass(i);
				else void 0 !== t && "boolean" !== s || ((i = vt(this)) && Y.set(this, "__className__", i), this.setAttribute && this.setAttribute("class", i || !1 === t ? "" : Y.get(this, "__className__") || ""))
			}))
		},
		hasClass: function(e) {
			var t, n, i = 0;
			for (t = " " + e + " "; n = this[i++];)
				if (1 === n.nodeType && -1 < (" " + mt(vt(n)) + " ").indexOf(t)) return !0;
			return !1
		}
	});
	var bt = /\r/g;
	C.fn.extend({
		val: function(n) {
			var i, e, r, t = this[0];
			return arguments.length ? (r = y(n), this.each(function(e) {
				var t;
				1 === this.nodeType && (null == (t = r ? n.call(this, e, C(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = C.map(t, function(e) {
					return null == e ? "" : e + ""
				})), (i = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
			})) : t ? (i = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(bt, "") : null == e ? "" : e : void 0
		}
	}), C.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = C.find.attr(e, "value");
					return null != t ? t : mt(C.text(e))
				}
			},
			select: {
				get: function(e) {
					var t, n, i, r = e.options,
						o = e.selectedIndex,
						s = "select-one" === e.type,
						a = s ? null : [],
						l = s ? o + 1 : r.length;
					for (i = o < 0 ? l : s ? o : 0; i < l; i++)
						if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
							if (t = C(n).val(), s) return t;
							a.push(t)
						} return a
				},
				set: function(e, t) {
					for (var n, i, r = e.options, o = C.makeArray(t), s = r.length; s--;)((i = r[s]).selected = -1 < C.inArray(C.valHooks.option.get(i), o)) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), C.each(["radio", "checkbox"], function() {
		C.valHooks[this] = {
			set: function(e, t) {
				if (Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
			}
		}, v.checkOn || (C.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), v.focusin = "onfocusin" in E;
	var _t = /^(?:focusinfocus|focusoutblur)$/,
		wt = function(e) {
			e.stopPropagation()
		};
	C.extend(C.event, {
		trigger: function(e, t, n, i) {
			var r, o, s, a, l, c, u, f, d = [n || T],
				p = m.call(e, "type") ? e.type : e,
				h = m.call(e, "namespace") ? e.namespace.split(".") : [];
			if (o = f = s = n = n || T, 3 !== n.nodeType && 8 !== n.nodeType && !_t.test(p + C.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, (e = e[C.expando] ? e : new C.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), u = C.event.special[p] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
				if (!i && !u.noBubble && !b(n)) {
					for (a = u.delegateType || p, _t.test(a + p) || (o = o.parentNode); o; o = o.parentNode) d.push(o), s = o;
					s === (n.ownerDocument || T) && d.push(s.defaultView || s.parentWindow || E)
				}
				for (r = 0;
					(o = d[r++]) && !e.isPropagationStopped();) f = o, e.type = 1 < r ? a : u.bindType || p, (c = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && c.apply(o, t), (c = l && o[l]) && c.apply && X(o) && (e.result = c.apply(o, t), !1 === e.result && e.preventDefault());
				return e.type = p, i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), t) || !X(n) || l && y(n[p]) && !b(n) && ((s = n[l]) && (n[l] = null), C.event.triggered = p, e.isPropagationStopped() && f.addEventListener(p, wt), n[p](), e.isPropagationStopped() && f.removeEventListener(p, wt), C.event.triggered = void 0, s && (n[l] = s)), e.result
			}
		},
		simulate: function(e, t, n) {
			var i = C.extend(new C.Event, n, {
				type: e,
				isSimulated: !0
			});
			C.event.trigger(i, null, t)
		}
	}), C.fn.extend({
		trigger: function(e, t) {
			return this.each(function() {
				C.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if (n) return C.event.trigger(e, t, n, !0)
		}
	}), v.focusin || C.each({
		focus: "focusin",
		blur: "focusout"
	}, function(n, i) {
		var r = function(e) {
			C.event.simulate(i, e.target, C.event.fix(e))
		};
		C.event.special[i] = {
			setup: function() {
				var e = this.ownerDocument || this.document || this,
					t = Y.access(e, i);
				t || e.addEventListener(n, r, !0), Y.access(e, i, (t || 0) + 1)
			},
			teardown: function() {
				var e = this.ownerDocument || this.document || this,
					t = Y.access(e, i) - 1;
				t ? Y.access(e, i, t) : (e.removeEventListener(n, r, !0), Y.remove(e, i))
			}
		}
	});
	var xt = E.location,
		Et = {
			guid: Date.now()
		},
		Tt = /\?/;
	C.parseXML = function(e) {
		var t, n;
		if (!e || "string" != typeof e) return null;
		try {
			t = (new E.DOMParser).parseFromString(e, "text/xml")
		} catch (e) {}
		return n = t && t.getElementsByTagName("parsererror")[0], t && !n || C.error("Invalid XML: " + (n ? C.map(n.childNodes, function(e) {
			return e.textContent
		}).join("\n") : e)), t
	};
	var Ct = /\[\]$/,
		kt = /\r?\n/g,
		At = /^(?:submit|button|image|reset|file)$/i,
		St = /^(?:input|select|textarea|keygen)/i;

	function Dt(n, e, i, r) {
		var t;
		if (Array.isArray(e)) C.each(e, function(e, t) {
			i || Ct.test(n) ? r(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
		});
		else if (i || "object" !== w(e)) r(n, e);
		else
			for (t in e) Dt(n + "[" + t + "]", e[t], i, r)
	}
	C.param = function(e, t) {
		var n, i = [],
			r = function(e, t) {
				var n = y(t) ? t() : t;
				i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if (null == e) return "";
		if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
			r(this.name, this.value)
		});
		else
			for (n in e) Dt(n, e[n], t, r);
		return i.join("&")
	}, C.fn.extend({
		serialize: function() {
			return C.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = C.prop(this, "elements");
				return e ? C.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !C(this).is(":disabled") && St.test(this.nodeName) && !At.test(e) && (this.checked || !de.test(e))
			}).map(function(e, t) {
				var n = C(this).val();
				return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(kt, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(kt, "\r\n")
				}
			}).get()
		}
	});
	var Lt = /%20/g,
		jt = /#.*$/,
		Ot = /([?&])_=[^&]*/,
		Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Pt = /^(?:GET|HEAD)$/,
		It = /^\/\//,
		Ht = {},
		Mt = {},
		qt = "*/".concat("*"),
		Rt = T.createElement("a");

	function Bt(o) {
		return function(e, t) {
			"string" != typeof e && (t = e, e = "*");
			var n, i = 0,
				r = e.toLowerCase().match(I) || [];
			if (y(t))
				for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
		}
	}

	function Wt(t, r, o, s) {
		var a = {},
			l = t === Mt;

		function c(e) {
			var i;
			return a[e] = !0, C.each(t[e] || [], function(e, t) {
				var n = t(r, o, s);
				return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), c(n), !1)
			}), i
		}
		return c(r.dataTypes[0]) || !a["*"] && c("*")
	}

	function Ft(e, t) {
		var n, i, r = C.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
		return i && C.extend(!0, e, i), e
	}
	Rt.href = xt.href, C.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: xt.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": qt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": C.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? Ft(Ft(e, C.ajaxSettings), t) : Ft(C.ajaxSettings, e)
		},
		ajaxPrefilter: Bt(Ht),
		ajaxTransport: Bt(Mt),
		ajax: function(e, t) {
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var u, f, d, n, p, i, h, g, r, o, m = C.ajaxSetup({}, t),
				v = m.context || m,
				y = m.context && (v.nodeType || v.jquery) ? C(v) : C.event,
				b = C.Deferred(),
				_ = C.Callbacks("once memory"),
				w = m.statusCode || {},
				s = {},
				a = {},
				l = "canceled",
				x = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (h) {
							if (!n)
								for (n = {}; t = Nt.exec(d);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
							t = n[e.toLowerCase() + " "]
						}
						return null == t ? null : t.join(", ")
					},
					getAllResponseHeaders: function() {
						return h ? d : null
					},
					setRequestHeader: function(e, t) {
						return null == h && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, s[e] = t), this
					},
					overrideMimeType: function(e) {
						return null == h && (m.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (h) x.always(e[x.status]);
							else
								for (t in e) w[t] = [w[t], e[t]];
						return this
					},
					abort: function(e) {
						var t = e || l;
						return u && u.abort(t), c(0, t), this
					}
				};
			if (b.promise(x), m.url = ((e || m.url || xt.href) + "").replace(It, xt.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(I) || [""], null == m.crossDomain) {
				i = T.createElement("a");
				try {
					i.href = m.url, i.href = i.href, m.crossDomain = Rt.protocol + "//" + Rt.host != i.protocol + "//" + i.host
				} catch (e) {
					m.crossDomain = !0
				}
			}
			if (m.data && m.processData && "string" != typeof m.data && (m.data = C.param(m.data, m.traditional)), Wt(Ht, m, t, x), h) return x;
			for (r in (g = C.event && m.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Pt.test(m.type), f = m.url.replace(jt, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Lt, "+")) : (o = m.url.slice(f.length), m.data && (m.processData || "string" == typeof m.data) && (f += (Tt.test(f) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (f = f.replace(Ot, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + Et.guid++ + o), m.url = f + o), m.ifModified && (C.lastModified[f] && x.setRequestHeader("If-Modified-Since", C.lastModified[f]), C.etag[f] && x.setRequestHeader("If-None-Match", C.etag[f])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : m.accepts["*"]), m.headers) x.setRequestHeader(r, m.headers[r]);
			if (m.beforeSend && (!1 === m.beforeSend.call(v, x, m) || h)) return x.abort();
			if (l = "abort", _.add(m.complete), x.done(m.success), x.fail(m.error), u = Wt(Mt, m, t, x)) {
				if (x.readyState = 1, g && y.trigger("ajaxSend", [x, m]), h) return x;
				m.async && 0 < m.timeout && (p = E.setTimeout(function() {
					x.abort("timeout")
				}, m.timeout));
				try {
					h = !1, u.send(s, c)
				} catch (e) {
					if (h) throw e;
					c(-1, e)
				}
			} else c(-1, "No Transport");

			function c(e, t, n, i) {
				var r, o, s, a, l, c = t;
				h || (h = !0, p && E.clearTimeout(p), u = void 0, d = i || "", x.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
					for (var i, r, o, s, a = e.contents, l = e.dataTypes;
						"*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
					if (i)
						for (r in a)
							if (a[r] && a[r].test(i)) {
								l.unshift(r);
								break
							} if (l[0] in n) o = l[0];
					else {
						for (r in n) {
							if (!l[0] || e.converters[r + " " + l[0]]) {
								o = r;
								break
							}
							s || (s = r)
						}
						o = o || s
					}
					if (o) return o !== l[0] && l.unshift(o), n[o]
				}(m, x, n)), !r && -1 < C.inArray("script", m.dataTypes) && C.inArray("json", m.dataTypes) < 0 && (m.converters["text script"] = function() {}), a = function(e, t, n, i) {
					var r, o, s, a, l, c = {},
						u = e.dataTypes.slice();
					if (u[1])
						for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
					for (o = u.shift(); o;)
						if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
							if ("*" === o) o = l;
							else if ("*" !== l && l !== o) {
						if (!(s = c[l + " " + o] || c["* " + o]))
							for (r in c)
								if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
									!0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
									break
								} if (!0 !== s)
							if (s && e.throws) t = s(t);
							else try {
								t = s(t)
							} catch (e) {
								return {
									state: "parsererror",
									error: s ? e : "No conversion from " + l + " to " + o
								}
							}
					}
					return {
						state: "success",
						data: t
					}
				}(m, a, x, r), r ? (m.ifModified && ((l = x.getResponseHeader("Last-Modified")) && (C.lastModified[f] = l), (l = x.getResponseHeader("etag")) && (C.etag[f] = l)), 204 === e || "HEAD" === m.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state, o = a.data, r = !(s = a.error))) : (s = c, !e && c || (c = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || c) + "", r ? b.resolveWith(v, [o, c, x]) : b.rejectWith(v, [x, c, s]), x.statusCode(w), w = void 0, g && y.trigger(r ? "ajaxSuccess" : "ajaxError", [x, m, r ? o : s]), _.fireWith(v, [x, c]), g && (y.trigger("ajaxComplete", [x, m]), --C.active || C.event.trigger("ajaxStop")))
			}
			return x
		},
		getJSON: function(e, t, n) {
			return C.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return C.get(e, void 0, t, "script")
		}
	}), C.each(["get", "post"], function(e, r) {
		C[r] = function(e, t, n, i) {
			return y(t) && (i = i || n, n = t, t = void 0), C.ajax(C.extend({
				url: e,
				type: r,
				dataType: i,
				data: t,
				success: n
			}, C.isPlainObject(e) && e))
		}
	}), C.ajaxPrefilter(function(e) {
		var t;
		for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
	}), C._evalUrl = function(e, t, n) {
		return C.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			converters: {
				"text script": function() {}
			},
			dataFilter: function(e) {
				C.globalEval(e, t, n)
			}
		})
	}, C.fn.extend({
		wrapAll: function(e) {
			var t;
			return this[0] && (y(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				for (var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this
		},
		wrapInner: function(n) {
			return y(n) ? this.each(function(e) {
				C(this).wrapInner(n.call(this, e))
			}) : this.each(function() {
				var e = C(this),
					t = e.contents();
				t.length ? t.wrapAll(n) : e.append(n)
			})
		},
		wrap: function(t) {
			var n = y(t);
			return this.each(function(e) {
				C(this).wrapAll(n ? t.call(this, e) : t)
			})
		},
		unwrap: function(e) {
			return this.parent(e).not("body").each(function() {
				C(this).replaceWith(this.childNodes)
			}), this
		}
	}), C.expr.pseudos.hidden = function(e) {
		return !C.expr.pseudos.visible(e)
	}, C.expr.pseudos.visible = function(e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, C.ajaxSettings.xhr = function() {
		try {
			return new E.XMLHttpRequest
		} catch (e) {}
	};
	var $t = {
			0: 200,
			1223: 204
		},
		Ut = C.ajaxSettings.xhr();
	v.cors = !!Ut && "withCredentials" in Ut, v.ajax = Ut = !!Ut, C.ajaxTransport(function(r) {
		var o, s;
		if (v.cors || Ut && !r.crossDomain) return {
			send: function(e, t) {
				var n, i = r.xhr();
				if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
					for (n in r.xhrFields) i[n] = r.xhrFields[n];
				for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
				o = function(e) {
					return function() {
						o && (o = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t($t[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
							binary: i.response
						} : {
							text: i.responseText
						}, i.getAllResponseHeaders()))
					}
				}, i.onload = o(), s = i.onerror = i.ontimeout = o("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
					4 === i.readyState && E.setTimeout(function() {
						o && s()
					})
				}, o = o("abort");
				try {
					i.send(r.hasContent && r.data || null)
				} catch (e) {
					if (o) throw e
				}
			},
			abort: function() {
				o && o()
			}
		}
	}), C.ajaxPrefilter(function(e) {
		e.crossDomain && (e.contents.script = !1)
	}), C.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(e) {
				return C.globalEval(e), e
			}
		}
	}), C.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), C.ajaxTransport("script", function(n) {
		var i, r;
		if (n.crossDomain || n.scriptAttrs) return {
			send: function(e, t) {
				i = C("<script>").attr(n.scriptAttrs || {}).prop({
					charset: n.scriptCharset,
					src: n.url
				}).on("load error", r = function(e) {
					i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
				}), T.head.appendChild(i[0])
			},
			abort: function() {
				r && r()
			}
		}
	});
	var zt, Qt = [],
		Xt = /(=)\?(?=&|$)|\?\?/;
	C.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Qt.pop() || C.expando + "_" + Et.guid++;
			return this[e] = !0, e
		}
	}), C.ajaxPrefilter("json jsonp", function(e, t, n) {
		var i, r, o, s = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
		if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Xt, "$1" + i) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
			return o || C.error(i + " was not called"), o[0]
		}, e.dataTypes[0] = "json", r = E[i], E[i] = function() {
			o = arguments
		}, n.always(function() {
			void 0 === r ? C(E).removeProp(i) : E[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, Qt.push(i)), o && y(r) && r(o[0]), o = r = void 0
		}), "script"
	}), v.createHTMLDocument = ((zt = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === zt.childNodes.length), C.parseHTML = function(e, t, n) {
		return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((i = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href, t.head.appendChild(i)) : t = T), o = !n && [], (r = S.exec(e)) ? [t.createElement(r[1])] : (r = be([e], t, o), o && o.length && C(o).remove(), C.merge([], r.childNodes)));
		var i, r, o
	}, C.fn.load = function(e, t, n) {
		var i, r, o, s = this,
			a = e.indexOf(" ");
		return -1 < a && (i = mt(e.slice(a)), e = e.slice(0, a)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < s.length && C.ajax({
			url: e,
			type: r || "GET",
			dataType: "html",
			data: t
		}).done(function(e) {
			o = arguments, s.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
		}).always(n && function(e, t) {
			s.each(function() {
				n.apply(this, o || [e.responseText, t, e])
			})
		}), this
	}, C.expr.pseudos.animated = function(t) {
		return C.grep(C.timers, function(e) {
			return t === e.elem
		}).length
	}, C.offset = {
		setOffset: function(e, t, n) {
			var i, r, o, s, a, l, c = C.css(e, "position"),
				u = C(e),
				f = {};
			"static" === c && (e.style.position = "relative"), a = u.offset(), o = C.css(e, "top"), l = C.css(e, "left"), r = ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (s = (i = u.position()).top, i.left) : (s = parseFloat(o) || 0, parseFloat(l) || 0), y(t) && (t = t.call(e, n, C.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : u.css(f)
		}
	}, C.fn.extend({
		offset: function(t) {
			if (arguments.length) return void 0 === t ? this : this.each(function(e) {
				C.offset.setOffset(this, t, e)
			});
			var e, n, i = this[0];
			return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
				top: e.top + n.pageYOffset,
				left: e.left + n.pageXOffset
			}) : {
				top: 0,
				left: 0
			} : void 0
		},
		position: function() {
			if (this[0]) {
				var e, t, n, i = this[0],
					r = {
						top: 0,
						left: 0
					};
				if ("fixed" === C.css(i, "position")) t = i.getBoundingClientRect();
				else {
					for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
					e && e !== i && 1 === e.nodeType && ((r = C(e).offset()).top += C.css(e, "borderTopWidth", !0), r.left += C.css(e, "borderLeftWidth", !0))
				}
				return {
					top: t.top - r.top - C.css(i, "marginTop", !0),
					left: t.left - r.left - C.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
				return e || ie
			})
		}
	}), C.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, r) {
		var o = "pageYOffset" === r;
		C.fn[t] = function(e) {
			return F(this, function(e, t, n) {
				var i;
				if (b(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[r] : e[t];
				i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n
			}, t, e, arguments.length)
		}
	}), C.each(["top", "left"], function(e, n) {
		C.cssHooks[n] = $e(v.pixelPosition, function(e, t) {
			if (t) return t = Fe(e, n), Ie.test(t) ? C(e).position()[n] + "px" : t
		})
	}), C.each({
		Height: "height",
		Width: "width"
	}, function(s, a) {
		C.each({
			padding: "inner" + s,
			content: a,
			"": "outer" + s
		}, function(i, o) {
			C.fn[o] = function(e, t) {
				var n = arguments.length && (i || "boolean" != typeof e),
					r = i || (!0 === e || !0 === t ? "margin" : "border");
				return F(this, function(e, t, n) {
					var i;
					return b(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? C.css(e, t, r) : C.style(e, t, n, r)
				}, a, n ? e : void 0, n)
			}
		})
	}), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		C.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), C.fn.extend({
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, i) {
			return this.on(t, e, n, i)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		},
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
		C.fn[n] = function(e, t) {
			return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
		}
	});
	var Kt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
	C.proxy = function(e, t) {
		var n, i, r;
		if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return i = a.call(arguments, 2), (r = function() {
			return e.apply(t || this, i.concat(a.call(arguments)))
		}).guid = e.guid = e.guid || C.guid++, r
	}, C.holdReady = function(e) {
		e ? C.readyWait++ : C.ready(!0)
	}, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = A, C.isFunction = y, C.isWindow = b, C.camelCase = Q, C.type = w, C.now = Date.now, C.isNumeric = function(e) {
		var t = C.type(e);
		return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
	}, C.trim = function(e) {
		return null == e ? "" : (e + "").replace(Kt, "$1")
	}, "function" == typeof define && define.amd && define("jquery", [], function() {
		return C
	});
	var Yt = E.jQuery,
		Vt = E.$;
	return C.noConflict = function(e) {
		return E.$ === C && (E.$ = Vt), e && E.jQuery === C && (E.jQuery = Yt), C
	}, void 0 === e && (E.jQuery = E.$ = C), C
}),
function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = t()
}(this, function() {
	"use strict";

	function i(e, t) {
		for (var n = 0; n < t.length; n++) {
			var i = t[n];
			i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
		}
	}

	function s(e, t, n) {
		return t && i(e.prototype, t), n && i(e, n), e
	}

	function a() {
		return (a = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
			}
			return e
		}).apply(this, arguments)
	}

	function u(e, t) {
		e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
	}
	var r, o, h = "transitionend",
		g = function(e) {
			for (; e += Math.floor(1e6 * Math.random()), document.getElementById(e););
			return e
		},
		n = function(e) {
			var t = e.getAttribute("data-bs-target");
			if (!t || "#" === t) {
				var n = e.getAttribute("href");
				t = n && "#" !== n ? n.trim() : null
			}
			return t
		},
		f = function(e) {
			var t = n(e);
			return t && document.querySelector(t) ? t : null
		},
		d = function(e) {
			var t = n(e);
			return t ? document.querySelector(t) : null
		},
		m = function(e) {
			if (!e) return 0;
			var t = window.getComputedStyle(e),
				n = t.transitionDuration,
				i = t.transitionDelay,
				r = Number.parseFloat(n),
				o = Number.parseFloat(i);
			return r || o ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(n) + Number.parseFloat(i))) : 0
		},
		l = function(e) {
			e.dispatchEvent(new Event(h))
		},
		p = function(e) {
			return (e[0] || e).nodeType
		},
		v = function(t, e) {
			var n = !1,
				i = e + 5;
			t.addEventListener(h, function e() {
				n = !0, t.removeEventListener(h, e)
			}), setTimeout(function() {
				n || l(t)
			}, i)
		},
		y = function(o, s, a) {
			Object.keys(a).forEach(function(e) {
				var t, n = a[e],
					i = s[e],
					r = i && p(i) ? "element" : null == (t = i) ? "" + t : {}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase();
				if (!new RegExp(n).test(r)) throw new Error(o.toUpperCase() + ': Option "' + e + '" provided type "' + r + '" but expected type "' + n + '".')
			})
		},
		b = function(e) {
			if (!e) return !1;
			if (e.style && e.parentNode && e.parentNode.style) {
				var t = getComputedStyle(e),
					n = getComputedStyle(e.parentNode);
				return "none" !== t.display && "none" !== n.display && "hidden" !== t.visibility
			}
			return !1
		},
		c = function() {
			return function() {}
		},
		_ = function(e) {
			return e.offsetHeight
		},
		w = function() {
			var e = window.jQuery;
			return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null
		},
		e = function(e) {
			"loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e()
		},
		t = "rtl" === document.documentElement.dir,
		x = (r = {}, o = 1, {
			set: function(e, t, n) {
				void 0 === e.bsKey && (e.bsKey = {
					key: t,
					id: o
				}, o++), r[e.bsKey.id] = n
			},
			get: function(e, t) {
				if (!e || void 0 === e.bsKey) return null;
				var n = e.bsKey;
				return n.key === t ? r[n.id] : null
			},
			delete: function(e, t) {
				if (void 0 !== e.bsKey) {
					var n = e.bsKey;
					n.key === t && (delete r[n.id], delete e.bsKey)
				}
			}
		}),
		E = function(e, t, n) {
			x.set(e, t, n)
		},
		T = function(e, t) {
			return x.get(e, t)
		},
		C = function(e, t) {
			x.delete(e, t)
		},
		k = /[^.]*(?=\..*)\.|.*/,
		A = /\..*/,
		S = /::\d+$/,
		D = {},
		L = 1,
		j = {
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		},
		O = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

	function N(e, t) {
		return t && t + "::" + L++ || e.uidEvent || L++
	}

	function P(e) {
		var t = N(e);
		return e.uidEvent = t, D[t] = D[t] || {}, D[t]
	}

	function I(e, t, n) {
		void 0 === n && (n = null);
		for (var i = Object.keys(e), r = 0, o = i.length; r < o; r++) {
			var s = e[i[r]];
			if (s.originalHandler === t && s.delegationSelector === n) return s
		}
		return null
	}

	function H(e, t, n) {
		var i = "string" == typeof t,
			r = i ? n : t,
			o = e.replace(A, ""),
			s = j[o];
		return s && (o = s), O.has(o) || (o = e), [i, r, o]
	}

	function M(e, t, n, i, r) {
		if ("string" == typeof t && e) {
			n || (n = i, i = null);
			var o = H(t, n, i),
				s = o[0],
				a = o[1],
				l = o[2],
				c = P(e),
				u = c[l] || (c[l] = {}),
				f = I(u, a, s ? n : null);
			if (f) f.oneOff = f.oneOff && r;
			else {
				var d, p, h, g, m, v = N(a, t.replace(k, "")),
					y = s ? (h = e, g = n, m = i, function e(t) {
						for (var n = h.querySelectorAll(g), i = t.target; i && i !== this; i = i.parentNode)
							for (var r = n.length; r--;)
								if (n[r] === i) return t.delegateTarget = i, e.oneOff && R.off(h, t.type, m), m.apply(i, [t]);
						return null
					}) : (d = e, p = n, function e(t) {
						return t.delegateTarget = d, e.oneOff && R.off(d, t.type, p), p.apply(d, [t])
					});
				y.delegationSelector = s ? n : null, y.originalHandler = a, y.oneOff = r, u[y.uidEvent = v] = y, e.addEventListener(l, y, s)
			}
		}
	}

	function q(e, t, n, i, r) {
		var o = I(t[n], i, r);
		o && (e.removeEventListener(n, o, Boolean(r)), delete t[n][o.uidEvent])
	}
	var R = {
			on: function(e, t, n, i) {
				M(e, t, n, i, !1)
			},
			one: function(e, t, n, i) {
				M(e, t, n, i, !0)
			},
			off: function(a, l, e, t) {
				if ("string" == typeof l && a) {
					var n = H(l, e, t),
						i = n[0],
						r = n[1],
						o = n[2],
						s = o !== l,
						c = P(a),
						u = l.startsWith(".");
					if (void 0 === r) {
						u && Object.keys(c).forEach(function(e) {
							var n, i, r, o, s;
							n = a, i = c, r = e, o = l.slice(1), s = i[r] || {}, Object.keys(s).forEach(function(e) {
								if (e.includes(o)) {
									var t = s[e];
									q(n, i, r, t.originalHandler, t.delegationSelector)
								}
							})
						});
						var f = c[o] || {};
						Object.keys(f).forEach(function(e) {
							var t = e.replace(S, "");
							if (!s || l.includes(t)) {
								var n = f[e];
								q(a, c, o, n.originalHandler, n.delegationSelector)
							}
						})
					} else {
						if (!c || !c[o]) return;
						q(a, c, o, r, i ? e : null)
					}
				}
			},
			trigger: function(e, t, n) {
				if ("string" != typeof t || !e) return null;
				var i, r = w(),
					o = t.replace(A, ""),
					s = t !== o,
					a = O.has(o),
					l = !0,
					c = !0,
					u = !1,
					f = null;
				return s && r && (i = r.Event(t, n), r(e).trigger(i), l = !i.isPropagationStopped(), c = !i.isImmediatePropagationStopped(), u = i.isDefaultPrevented()), a ? (f = document.createEvent("HTMLEvents")).initEvent(o, l, !0) : f = new CustomEvent(t, {
					bubbles: l,
					cancelable: !0
				}), void 0 !== n && Object.keys(n).forEach(function(e) {
					Object.defineProperty(f, e, {
						get: function() {
							return n[e]
						}
					})
				}), u && f.preventDefault(), c && e.dispatchEvent(f), f.defaultPrevented && void 0 !== i && i.preventDefault(), f
			}
		},
		B = function() {
			function e(e) {
				e && (this._element = e, E(e, this.constructor.DATA_KEY, this))
			}
			return e.prototype.dispose = function() {
				C(this._element, this.constructor.DATA_KEY), this._element = null
			}, e.getInstance = function(e) {
				return T(e, this.DATA_KEY)
			}, s(e, null, [{
				key: "VERSION",
				get: function() {
					return "5.0.0-beta1"
				}
			}]), e
		}(),
		W = "alert",
		F = "bs.alert",
		$ = function(e) {
			function n() {
				return e.apply(this, arguments) || this
			}
			u(n, e);
			var t = n.prototype;
			return t.close = function(e) {
				var t = e ? this._getRootElement(e) : this._element,
					n = this._triggerCloseEvent(t);
				null === n || n.defaultPrevented || this._removeElement(t)
			}, t._getRootElement = function(e) {
				return d(e) || e.closest(".alert")
			}, t._triggerCloseEvent = function(e) {
				return R.trigger(e, "close.bs.alert")
			}, t._removeElement = function(e) {
				var t = this;
				if (e.classList.remove("show"), e.classList.contains("fade")) {
					var n = m(e);
					R.one(e, h, function() {
						return t._destroyElement(e)
					}), v(e, n)
				} else this._destroyElement(e)
			}, t._destroyElement = function(e) {
				e.parentNode && e.parentNode.removeChild(e), R.trigger(e, "closed.bs.alert")
			}, n.jQueryInterface = function(t) {
				return this.each(function() {
					var e = T(this, F);
					e || (e = new n(this)), "close" === t && e[t](this)
				})
			}, n.handleDismiss = function(t) {
				return function(e) {
					e && e.preventDefault(), t.close(this)
				}
			}, s(n, null, [{
				key: "DATA_KEY",
				get: function() {
					return F
				}
			}]), n
		}(B);
	R.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', $.handleDismiss(new $)), e(function() {
		var e = w();
		if (e) {
			var t = e.fn[W];
			e.fn[W] = $.jQueryInterface, e.fn[W].Constructor = $, e.fn[W].noConflict = function() {
				return e.fn[W] = t, $.jQueryInterface
			}
		}
	});
	var U = "button",
		z = "bs.button",
		Q = '[data-bs-toggle="button"]',
		X = function(e) {
			function n() {
				return e.apply(this, arguments) || this
			}
			return u(n, e), n.prototype.toggle = function() {
				this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
			}, n.jQueryInterface = function(t) {
				return this.each(function() {
					var e = T(this, z);
					e || (e = new n(this)), "toggle" === t && e[t]()
				})
			}, s(n, null, [{
				key: "DATA_KEY",
				get: function() {
					return z
				}
			}]), n
		}(B);

	function K(e) {
		return "true" === e || "false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e)
	}

	function Y(e) {
		return e.replace(/[A-Z]/g, function(e) {
			return "-" + e.toLowerCase()
		})
	}
	R.on(document, "click.bs.button.data-api", Q, function(e) {
		e.preventDefault();
		var t = e.target.closest(Q),
			n = T(t, z);
		n || (n = new X(t)), n.toggle()
	}), e(function() {
		var e = w();
		if (e) {
			var t = e.fn[U];
			e.fn[U] = X.jQueryInterface, e.fn[U].Constructor = X, e.fn[U].noConflict = function() {
				return e.fn[U] = t, X.jQueryInterface
			}
		}
	});
	var V = {
			setDataAttribute: function(e, t, n) {
				e.setAttribute("data-bs-" + Y(t), n)
			},
			removeDataAttribute: function(e, t) {
				e.removeAttribute("data-bs-" + Y(t))
			},
			getDataAttributes: function(n) {
				if (!n) return {};
				var i = {};
				return Object.keys(n.dataset).filter(function(e) {
					return e.startsWith("bs")
				}).forEach(function(e) {
					var t = e.replace(/^bs/, "");
					t = t.charAt(0).toLowerCase() + t.slice(1, t.length), i[t] = K(n.dataset[e])
				}), i
			},
			getDataAttribute: function(e, t) {
				return K(e.getAttribute("data-bs-" + Y(t)))
			},
			offset: function(e) {
				var t = e.getBoundingClientRect();
				return {
					top: t.top + document.body.scrollTop,
					left: t.left + document.body.scrollLeft
				}
			},
			position: function(e) {
				return {
					top: e.offsetTop,
					left: e.offsetLeft
				}
			}
		},
		G = {
			matches: function(e, t) {
				return e.matches(t)
			},
			find: function(e, t) {
				var n;
				return void 0 === t && (t = document.documentElement), (n = []).concat.apply(n, Element.prototype.querySelectorAll.call(t, e))
			},
			findOne: function(e, t) {
				return void 0 === t && (t = document.documentElement), Element.prototype.querySelector.call(t, e)
			},
			children: function(e, t) {
				var n, i = (n = []).concat.apply(n, e.children);
				return i.filter(function(e) {
					return e.matches(t)
				})
			},
			parents: function(e, t) {
				for (var n = [], i = e.parentNode; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) this.matches(i, t) && n.push(i), i = i.parentNode;
				return n
			},
			prev: function(e, t) {
				for (var n = e.previousElementSibling; n;) {
					if (n.matches(t)) return [n];
					n = n.previousElementSibling
				}
				return []
			},
			next: function(e, t) {
				for (var n = e.nextElementSibling; n;) {
					if (this.matches(n, t)) return [n];
					n = n.nextElementSibling
				}
				return []
			}
		},
		J = "carousel",
		Z = "bs.carousel",
		ee = "." + Z,
		te = {
			interval: 5e3,
			keyboard: !0,
			slide: !1,
			pause: "hover",
			wrap: !0,
			touch: !0
		},
		ne = {
			interval: "(number|boolean)",
			keyboard: "boolean",
			slide: "(boolean|string)",
			pause: "(string|boolean)",
			wrap: "boolean",
			touch: "boolean"
		},
		ie = "next",
		re = "prev",
		oe = "slid" + ee,
		se = "active",
		ae = ".active.carousel-item",
		le = {
			TOUCH: "touch",
			PEN: "pen"
		},
		ce = function(i) {
			function o(e, t) {
				var n;
				return (n = i.call(this, e) || this)._items = null, n._interval = null, n._activeElement = null, n._isPaused = !1, n._isSliding = !1, n.touchTimeout = null, n.touchStartX = 0, n.touchDeltaX = 0, n._config = n._getConfig(t), n._indicatorsElement = G.findOne(".carousel-indicators", n._element), n._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, n._pointerEvent = Boolean(window.PointerEvent), n._addEventListeners(), n
			}
			u(o, i);
			var e = o.prototype;
			return e.next = function() {
				this._isSliding || this._slide(ie)
			}, e.nextWhenVisible = function() {
				!document.hidden && b(this._element) && this.next()
			}, e.prev = function() {
				this._isSliding || this._slide(re)
			}, e.pause = function(e) {
				e || (this._isPaused = !0), G.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (l(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
			}, e.cycle = function(e) {
				e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
			}, e.to = function(e) {
				var t = this;
				this._activeElement = G.findOne(ae, this._element);
				var n = this._getItemIndex(this._activeElement);
				if (!(e > this._items.length - 1 || e < 0))
					if (this._isSliding) R.one(this._element, oe, function() {
						return t.to(e)
					});
					else {
						if (n === e) return this.pause(), void this.cycle();
						var i = n < e ? ie : re;
						this._slide(i, this._items[e])
					}
			}, e.dispose = function() {
				i.prototype.dispose.call(this), R.off(this._element, ee), this._items = null, this._config = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
			}, e._getConfig = function(e) {
				return e = a({}, te, e), y(J, e, ne), e
			}, e._handleSwipe = function() {
				var e = Math.abs(this.touchDeltaX);
				if (!(e <= 40)) {
					var t = e / this.touchDeltaX;
					(this.touchDeltaX = 0) < t && this.prev(), t < 0 && this.next()
				}
			}, e._addEventListeners = function() {
				var t = this;
				this._config.keyboard && R.on(this._element, "keydown.bs.carousel", function(e) {
					return t._keydown(e)
				}), "hover" === this._config.pause && (R.on(this._element, "mouseenter.bs.carousel", function(e) {
					return t.pause(e)
				}), R.on(this._element, "mouseleave.bs.carousel", function(e) {
					return t.cycle(e)
				})), this._config.touch && this._touchSupported && this._addTouchEventListeners()
			}, e._addTouchEventListeners = function() {
				var n = this,
					t = function(e) {
						n._pointerEvent && le[e.pointerType.toUpperCase()] ? n.touchStartX = e.clientX : n._pointerEvent || (n.touchStartX = e.touches[0].clientX)
					},
					i = function(e) {
						n._pointerEvent && le[e.pointerType.toUpperCase()] && (n.touchDeltaX = e.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function(e) {
							return n.cycle(e)
						}, 500 + n._config.interval))
					};
				G.find(".carousel-item img", this._element).forEach(function(e) {
					R.on(e, "dragstart.bs.carousel", function(e) {
						return e.preventDefault()
					})
				}), this._pointerEvent ? (R.on(this._element, "pointerdown.bs.carousel", function(e) {
					return t(e)
				}), R.on(this._element, "pointerup.bs.carousel", function(e) {
					return i(e)
				}), this._element.classList.add("pointer-event")) : (R.on(this._element, "touchstart.bs.carousel", function(e) {
					return t(e)
				}), R.on(this._element, "touchmove.bs.carousel", function(e) {
					var t;
					(t = e).touches && 1 < t.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = t.touches[0].clientX - n.touchStartX
				}), R.on(this._element, "touchend.bs.carousel", function(e) {
					return i(e)
				}))
			}, e._keydown = function(e) {
				if (!/input|textarea/i.test(e.target.tagName)) switch (e.key) {
					case "ArrowLeft":
						e.preventDefault(), this.prev();
						break;
					case "ArrowRight":
						e.preventDefault(), this.next()
				}
			}, e._getItemIndex = function(e) {
				return this._items = e && e.parentNode ? G.find(".carousel-item", e.parentNode) : [], this._items.indexOf(e)
			}, e._getItemByDirection = function(e, t) {
				var n = e === ie,
					i = e === re,
					r = this._getItemIndex(t),
					o = this._items.length - 1;
				if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
				var s = (r + (e === re ? -1 : 1)) % this._items.length;
				return -1 === s ? this._items[this._items.length - 1] : this._items[s]
			}, e._triggerSlideEvent = function(e, t) {
				var n = this._getItemIndex(e),
					i = this._getItemIndex(G.findOne(ae, this._element));
				return R.trigger(this._element, "slide.bs.carousel", {
					relatedTarget: e,
					direction: t,
					from: i,
					to: n
				})
			}, e._setActiveIndicatorElement = function(e) {
				if (this._indicatorsElement) {
					for (var t = G.find(".active", this._indicatorsElement), n = 0; n < t.length; n++) t[n].classList.remove(se);
					var i = this._indicatorsElement.children[this._getItemIndex(e)];
					i && i.classList.add(se)
				}
			}, e._updateInterval = function() {
				var e = this._activeElement || G.findOne(ae, this._element);
				if (e) {
					var t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
					t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval
				}
			}, e._slide = function(e, t) {
				var n, i, r, o = this,
					s = G.findOne(ae, this._element),
					a = this._getItemIndex(s),
					l = t || s && this._getItemByDirection(e, s),
					c = this._getItemIndex(l),
					u = Boolean(this._interval);
				if (r = e === ie ? (n = "carousel-item-start", i = "carousel-item-next", "left") : (n = "carousel-item-end", i = "carousel-item-prev", "right"), l && l.classList.contains(se)) this._isSliding = !1;
				else if (!this._triggerSlideEvent(l, r).defaultPrevented && s && l) {
					if (this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l), this._activeElement = l, this._element.classList.contains("slide")) {
						l.classList.add(i), _(l), s.classList.add(n), l.classList.add(n);
						var f = m(s);
						R.one(s, h, function() {
							l.classList.remove(n, i), l.classList.add(se), s.classList.remove(se, i, n), o._isSliding = !1, setTimeout(function() {
								R.trigger(o._element, oe, {
									relatedTarget: l,
									direction: r,
									from: a,
									to: c
								})
							}, 0)
						}), v(s, f)
					} else s.classList.remove(se), l.classList.add(se), this._isSliding = !1, R.trigger(this._element, oe, {
						relatedTarget: l,
						direction: r,
						from: a,
						to: c
					});
					u && this.cycle()
				}
			}, o.carouselInterface = function(e, t) {
				var n = T(e, Z),
					i = a({}, te, V.getDataAttributes(e));
				"object" == typeof t && (i = a({}, i, t));
				var r = "string" == typeof t ? t : i.slide;
				if (n || (n = new o(e, i)), "number" == typeof t) n.to(t);
				else if ("string" == typeof r) {
					if (void 0 === n[r]) throw new TypeError('No method named "' + r + '"');
					n[r]()
				} else i.interval && i.ride && (n.pause(), n.cycle())
			}, o.jQueryInterface = function(e) {
				return this.each(function() {
					o.carouselInterface(this, e)
				})
			}, o.dataApiClickHandler = function(e) {
				var t = d(this);
				if (t && t.classList.contains("carousel")) {
					var n = a({}, V.getDataAttributes(t), V.getDataAttributes(this)),
						i = this.getAttribute("data-bs-slide-to");
					i && (n.interval = !1), o.carouselInterface(t, n), i && T(t, Z).to(i), e.preventDefault()
				}
			}, s(o, null, [{
				key: "Default",
				get: function() {
					return te
				}
			}, {
				key: "DATA_KEY",
				get: function() {
					return Z
				}
			}]), o
		}(B);
	R.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", ce.dataApiClickHandler), R.on(window, "load.bs.carousel.data-api", function() {
		for (var e = G.find('[data-bs-ride="carousel"]'), t = 0, n = e.length; t < n; t++) ce.carouselInterface(e[t], T(e[t], Z))
	}), e(function() {
		var e = w();
		if (e) {
			var t = e.fn[J];
			e.fn[J] = ce.jQueryInterface, e.fn[J].Constructor = ce, e.fn[J].noConflict = function() {
				return e.fn[J] = t, ce.jQueryInterface
			}
		}
	});
	var ue = "collapse",
		fe = "bs.collapse",
		de = {
			toggle: !0,
			parent: ""
		},
		pe = {
			toggle: "boolean",
			parent: "(string|element)"
		},
		he = "show",
		ge = "collapse",
		me = "collapsing",
		ve = "collapsed",
		ye = '[data-bs-toggle="collapse"]',
		be = function(c) {
			function l(t, e) {
				var n;
				(n = c.call(this, t) || this)._isTransitioning = !1, n._config = n._getConfig(e), n._triggerArray = G.find(ye + '[href="#' + t.id + '"],' + ye + '[data-bs-target="#' + t.id + '"]');
				for (var i = G.find(ye), r = 0, o = i.length; r < o; r++) {
					var s = i[r],
						a = f(s),
						l = G.find(a).filter(function(e) {
							return e === t
						});
					null !== a && l.length && (n._selector = a, n._triggerArray.push(s))
				}
				return n._parent = n._config.parent ? n._getParent() : null, n._config.parent || n._addAriaAndCollapsedClass(n._element, n._triggerArray), n._config.toggle && n.toggle(), n
			}
			u(l, c);
			var e = l.prototype;
			return e.toggle = function() {
				this._element.classList.contains(he) ? this.hide() : this.show()
			}, e.show = function() {
				var t = this;
				if (!this._isTransitioning && !this._element.classList.contains(he)) {
					var e, n;
					this._parent && 0 === (e = G.find(".show, .collapsing", this._parent).filter(function(e) {
						return "string" == typeof t._config.parent ? e.getAttribute("data-bs-parent") === t._config.parent : e.classList.contains(ge)
					})).length && (e = null);
					var i = G.findOne(this._selector);
					if (e) {
						var r = e.find(function(e) {
							return i !== e
						});
						if ((n = r ? T(r, fe) : null) && n._isTransitioning) return
					}
					if (!R.trigger(this._element, "show.bs.collapse").defaultPrevented) {
						e && e.forEach(function(e) {
							i !== e && l.collapseInterface(e, "hide"), n || E(e, fe, null)
						});
						var o = this._getDimension();
						this._element.classList.remove(ge), this._element.classList.add(me), this._element.style[o] = 0, this._triggerArray.length && this._triggerArray.forEach(function(e) {
							e.classList.remove(ve), e.setAttribute("aria-expanded", !0)
						}), this.setTransitioning(!0);
						var s = "scroll" + (o[0].toUpperCase() + o.slice(1)),
							a = m(this._element);
						R.one(this._element, h, function() {
							t._element.classList.remove(me), t._element.classList.add(ge, he), t._element.style[o] = "", t.setTransitioning(!1), R.trigger(t._element, "shown.bs.collapse")
						}), v(this._element, a), this._element.style[o] = this._element[s] + "px"
					}
				}
			}, e.hide = function() {
				var e = this;
				if (!this._isTransitioning && this._element.classList.contains(he) && !R.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
					var t = this._getDimension();
					this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", _(this._element), this._element.classList.add(me), this._element.classList.remove(ge, he);
					var n = this._triggerArray.length;
					if (0 < n)
						for (var i = 0; i < n; i++) {
							var r = this._triggerArray[i],
								o = d(r);
							o && !o.classList.contains(he) && (r.classList.add(ve), r.setAttribute("aria-expanded", !1))
						}
					this.setTransitioning(!0);
					this._element.style[t] = "";
					var s = m(this._element);
					R.one(this._element, h, function() {
						e.setTransitioning(!1), e._element.classList.remove(me), e._element.classList.add(ge), R.trigger(e._element, "hidden.bs.collapse")
					}), v(this._element, s)
				}
			}, e.setTransitioning = function(e) {
				this._isTransitioning = e
			}, e.dispose = function() {
				c.prototype.dispose.call(this), this._config = null, this._parent = null, this._triggerArray = null, this._isTransitioning = null
			}, e._getConfig = function(e) {
				return (e = a({}, de, e)).toggle = Boolean(e.toggle), y(ue, e, pe), e
			}, e._getDimension = function() {
				return this._element.classList.contains("width") ? "width" : "height"
			}, e._getParent = function() {
				var n = this,
					e = this._config.parent;
				p(e) ? void 0 === e.jquery && void 0 === e[0] || (e = e[0]) : e = G.findOne(e);
				var t = ye + '[data-bs-parent="' + e + '"]';
				return G.find(t, e).forEach(function(e) {
					var t = d(e);
					n._addAriaAndCollapsedClass(t, [e])
				}), e
			}, e._addAriaAndCollapsedClass = function(e, t) {
				if (e && t.length) {
					var n = e.classList.contains(he);
					t.forEach(function(e) {
						n ? e.classList.remove(ve) : e.classList.add(ve), e.setAttribute("aria-expanded", n)
					})
				}
			}, l.collapseInterface = function(e, t) {
				var n = T(e, fe),
					i = a({}, de, V.getDataAttributes(e), "object" == typeof t && t ? t : {});
				if (!n && i.toggle && "string" == typeof t && /show|hide/.test(t) && (i.toggle = !1), n || (n = new l(e, i)), "string" == typeof t) {
					if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
					n[t]()
				}
			}, l.jQueryInterface = function(e) {
				return this.each(function() {
					l.collapseInterface(this, e)
				})
			}, s(l, null, [{
				key: "Default",
				get: function() {
					return de
				}
			}, {
				key: "DATA_KEY",
				get: function() {
					return fe
				}
			}]), l
		}(B);
	R.on(document, "click.bs.collapse.data-api", ye, function(e) {
		"A" === e.target.tagName && e.preventDefault();
		var i = V.getDataAttributes(this),
			t = f(this);
		G.find(t).forEach(function(e) {
			var t, n = T(e, fe);
			t = n ? (null === n._parent && "string" == typeof i.parent && (n._config.parent = i.parent, n._parent = n._getParent()), "toggle") : i, be.collapseInterface(e, t)
		})
	}), e(function() {
		var e = w();
		if (e) {
			var t = e.fn[ue];
			e.fn[ue] = be.jQueryInterface, e.fn[ue].Constructor = be, e.fn[ue].noConflict = function() {
				return e.fn[ue] = t, be.jQueryInterface
			}
		}
	});
	var _e = "top",
		we = "bottom",
		xe = "right",
		Ee = "left",
		Te = "auto",
		Ce = [_e, we, xe, Ee],
		ke = "start",
		Ae = "end",
		Se = "clippingParents",
		De = "viewport",
		Le = "popper",
		je = "reference",
		Oe = Ce.reduce(function(e, t) {
			return e.concat([t + "-" + ke, t + "-" + Ae])
		}, []),
		Ne = [].concat(Ce, [Te]).reduce(function(e, t) {
			return e.concat([t, t + "-" + ke, t + "-" + Ae])
		}, []),
		Pe = "beforeRead",
		Ie = "afterRead",
		He = "beforeMain",
		Me = "afterMain",
		qe = "beforeWrite",
		Re = "afterWrite",
		Be = [Pe, "read", Ie, He, "main", Me, qe, "write", Re];

	function We(e) {
		return e ? (e.nodeName || "").toLowerCase() : null
	}

	function Fe(e) {
		if ("[object Window]" === e.toString()) return e;
		var t = e.ownerDocument;
		return t && t.defaultView || window
	}

	function $e(e) {
		return e instanceof Fe(e).Element || e instanceof Element
	}

	function Ue(e) {
		return e instanceof Fe(e).HTMLElement || e instanceof HTMLElement
	}
	var ze = {
		name: "applyStyles",
		enabled: !0,
		phase: "write",
		fn: function(e) {
			var r = e.state;
			Object.keys(r.elements).forEach(function(e) {
				var t = r.styles[e] || {},
					n = r.attributes[e] || {},
					i = r.elements[e];
				Ue(i) && We(i) && (Object.assign(i.style, t), Object.keys(n).forEach(function(e) {
					var t = n[e];
					!1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t)
				}))
			})
		},
		effect: function(e) {
			var r = e.state,
				o = {
					popper: {
						position: r.options.strategy,
						left: "0",
						top: "0",
						margin: "0"
					},
					arrow: {
						position: "absolute"
					},
					reference: {}
				};
			return Object.assign(r.elements.popper.style, o.popper), r.elements.arrow && Object.assign(r.elements.arrow.style, o.arrow),
				function() {
					Object.keys(r.elements).forEach(function(e) {
						var t = r.elements[e],
							n = r.attributes[e] || {},
							i = Object.keys(r.styles.hasOwnProperty(e) ? r.styles[e] : o[e]).reduce(function(e, t) {
								return e[t] = "", e
							}, {});
						Ue(t) && We(t) && (Object.assign(t.style, i), Object.keys(n).forEach(function(e) {
							t.removeAttribute(e)
						}))
					})
				}
		},
		requires: ["computeStyles"]
	};

	function Qe(e) {
		return e.split("-")[0]
	}

	function Xe(e) {
		return {
			x: e.offsetLeft,
			y: e.offsetTop,
			width: e.offsetWidth,
			height: e.offsetHeight
		}
	}

	function Ke(e, t) {
		var n, i = t.getRootNode && t.getRootNode();
		if (e.contains(t)) return !0;
		if (i && ((n = i) instanceof Fe(n).ShadowRoot || n instanceof ShadowRoot)) {
			var r = t;
			do {
				if (r && e.isSameNode(r)) return !0;
				r = r.parentNode || r.host
			} while (r)
		}
		return !1
	}

	function Ye(e) {
		return Fe(e).getComputedStyle(e)
	}

	function Ve(e) {
		return (($e(e) ? e.ownerDocument : e.document) || window.document).documentElement
	}

	function Ge(e) {
		return "html" === We(e) ? e : e.assignedSlot || e.parentNode || e.host || Ve(e)
	}

	function Je(e) {
		if (!Ue(e) || "fixed" === Ye(e).position) return null;
		var t = e.offsetParent;
		if (t) {
			var n = Ve(t);
			if ("body" === We(t) && "static" === Ye(t).position && "static" !== Ye(n).position) return n
		}
		return t
	}

	function Ze(e) {
		for (var t = Fe(e), n = Je(e); n && 0 <= ["table", "td", "th"].indexOf(We(n)) && "static" === Ye(n).position;) n = Je(n);
		return n && "body" === We(n) && "static" === Ye(n).position ? t : n || function(e) {
			for (var t = Ge(e); Ue(t) && ["html", "body"].indexOf(We(t)) < 0;) {
				var n = Ye(t);
				if ("none" !== n.transform || "none" !== n.perspective || n.willChange && "auto" !== n.willChange) return t;
				t = t.parentNode
			}
			return null
		}(e) || t
	}

	function et(e) {
		return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y"
	}

	function tt(e, t, n) {
		return Math.max(e, Math.min(t, n))
	}

	function nt(e) {
		return Object.assign(Object.assign({}, {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		}), e)
	}

	function it(n, e) {
		return e.reduce(function(e, t) {
			return e[t] = n, e
		}, {})
	}
	var rt = {
			name: "arrow",
			enabled: !0,
			phase: "main",
			fn: function(e) {
				var t, n = e.state,
					i = e.name,
					r = n.elements.arrow,
					o = n.modifiersData.popperOffsets,
					s = Qe(n.placement),
					a = et(s),
					l = 0 <= [Ee, xe].indexOf(s) ? "height" : "width";
				if (r && o) {
					var c = n.modifiersData[i + "#persistent"].padding,
						u = Xe(r),
						f = "y" === a ? _e : Ee,
						d = "y" === a ? we : xe,
						p = n.rects.reference[l] + n.rects.reference[a] - o[a] - n.rects.popper[l],
						h = o[a] - n.rects.reference[a],
						g = Ze(r),
						m = g ? "y" === a ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
						v = p / 2 - h / 2,
						y = c[f],
						b = m - u[l] - c[d],
						_ = m / 2 - u[l] / 2 + v,
						w = tt(y, _, b),
						x = a;
					n.modifiersData[i] = ((t = {})[x] = w, t.centerOffset = w - _, t)
				}
			},
			effect: function(e) {
				var t = e.state,
					n = e.options,
					i = e.name,
					r = n.element,
					o = void 0 === r ? "[data-popper-arrow]" : r,
					s = n.padding,
					a = void 0 === s ? 0 : s;
				null != o && ("string" != typeof o || (o = t.elements.popper.querySelector(o))) && Ke(t.elements.popper, o) && (t.elements.arrow = o, t.modifiersData[i + "#persistent"] = {
					padding: nt("number" != typeof a ? a : it(a, Ce))
				})
			},
			requires: ["popperOffsets"],
			requiresIfExists: ["preventOverflow"]
		},
		ot = {
			top: "auto",
			right: "auto",
			bottom: "auto",
			left: "auto"
		};

	function st(e) {
		var t, n, i, r, o, s = e.popper,
			a = e.popperRect,
			l = e.placement,
			c = e.offsets,
			u = e.position,
			f = e.gpuAcceleration,
			d = e.adaptive,
			p = (i = (n = c).x, r = n.y, o = window.devicePixelRatio || 1, {
				x: Math.round(i * o) / o || 0,
				y: Math.round(r * o) / o || 0
			}),
			h = p.x,
			g = p.y,
			m = c.hasOwnProperty("x"),
			v = c.hasOwnProperty("y"),
			y = Ee,
			b = _e,
			_ = window;
		if (d) {
			var w = Ze(s);
			w === Fe(s) && (w = Ve(s)), l === _e && (b = we, g -= w.clientHeight - a.height, g *= f ? 1 : -1), l === Ee && (y = xe, h -= w.clientWidth - a.width, h *= f ? 1 : -1)
		}
		var x, E = Object.assign({
			position: u
		}, d && ot);
		return f ? Object.assign(Object.assign({}, E), {}, ((x = {})[b] = v ? "0" : "", x[y] = m ? "0" : "", x.transform = (_.devicePixelRatio || 1) < 2 ? "translate(" + h + "px, " + g + "px)" : "translate3d(" + h + "px, " + g + "px, 0)", x)) : Object.assign(Object.assign({}, E), {}, ((t = {})[b] = v ? g + "px" : "", t[y] = m ? h + "px" : "", t.transform = "", t))
	}
	var at = {
			name: "computeStyles",
			enabled: !0,
			phase: "beforeWrite",
			fn: function(e) {
				var t = e.state,
					n = e.options,
					i = n.gpuAcceleration,
					r = void 0 === i || i,
					o = n.adaptive,
					s = void 0 === o || o,
					a = {
						placement: Qe(t.placement),
						popper: t.elements.popper,
						popperRect: t.rects.popper,
						gpuAcceleration: r
					};
				null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), st(Object.assign(Object.assign({}, a), {}, {
					offsets: t.modifiersData.popperOffsets,
					position: t.options.strategy,
					adaptive: s
				})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), st(Object.assign(Object.assign({}, a), {}, {
					offsets: t.modifiersData.arrow,
					position: "absolute",
					adaptive: !1
				})))), t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
					"data-popper-placement": t.placement
				})
			},
			data: {}
		},
		lt = {
			passive: !0
		};
	var ct = {
			name: "eventListeners",
			enabled: !0,
			phase: "write",
			fn: function() {},
			effect: function(e) {
				var t = e.state,
					n = e.instance,
					i = e.options,
					r = i.scroll,
					o = void 0 === r || r,
					s = i.resize,
					a = void 0 === s || s,
					l = Fe(t.elements.popper),
					c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
				return o && c.forEach(function(e) {
						e.addEventListener("scroll", n.update, lt)
					}), a && l.addEventListener("resize", n.update, lt),
					function() {
						o && c.forEach(function(e) {
							e.removeEventListener("scroll", n.update, lt)
						}), a && l.removeEventListener("resize", n.update, lt)
					}
			},
			data: {}
		},
		ut = {
			left: "right",
			right: "left",
			bottom: "top",
			top: "bottom"
		};

	function ft(e) {
		return e.replace(/left|right|bottom|top/g, function(e) {
			return ut[e]
		})
	}
	var dt = {
		start: "end",
		end: "start"
	};

	function pt(e) {
		return e.replace(/start|end/g, function(e) {
			return dt[e]
		})
	}

	function ht(e) {
		var t = e.getBoundingClientRect();
		return {
			width: t.width,
			height: t.height,
			top: t.top,
			right: t.right,
			bottom: t.bottom,
			left: t.left,
			x: t.left,
			y: t.top
		}
	}

	function gt(e) {
		var t = Fe(e);
		return {
			scrollLeft: t.pageXOffset,
			scrollTop: t.pageYOffset
		}
	}

	function mt(e) {
		return ht(Ve(e)).left + gt(e).scrollLeft
	}

	function vt(e) {
		var t = Ye(e),
			n = t.overflow,
			i = t.overflowX,
			r = t.overflowY;
		return /auto|scroll|overlay|hidden/.test(n + r + i)
	}

	function yt(e, t) {
		void 0 === t && (t = []);
		var n = function e(t) {
				return 0 <= ["html", "body", "#document"].indexOf(We(t)) ? t.ownerDocument.body : Ue(t) && vt(t) ? t : e(Ge(t))
			}(e),
			i = "body" === We(n),
			r = Fe(n),
			o = i ? [r].concat(r.visualViewport || [], vt(n) ? n : []) : n,
			s = t.concat(o);
		return i ? s : s.concat(yt(Ge(o)))
	}

	function bt(e) {
		return Object.assign(Object.assign({}, e), {}, {
			left: e.x,
			top: e.y,
			right: e.x + e.width,
			bottom: e.y + e.height
		})
	}

	function _t(e, t) {
		return t === De ? bt((p = Fe(d = e), h = Ve(d), g = p.visualViewport, m = h.clientWidth, v = h.clientHeight, b = y = 0, g && (m = g.width, v = g.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (y = g.offsetLeft, b = g.offsetTop)), {
			width: m,
			height: v,
			x: y + mt(d),
			y: b
		})) : Ue(t) ? ((f = ht(u = t)).top = f.top + u.clientTop, f.left = f.left + u.clientLeft, f.bottom = f.top + u.clientHeight, f.right = f.left + u.clientWidth, f.width = u.clientWidth, f.height = u.clientHeight, f.x = f.left, f.y = f.top, f) : bt((n = Ve(e), i = Ve(n), r = gt(n), o = n.ownerDocument.body, s = Math.max(i.scrollWidth, i.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Math.max(i.scrollHeight, i.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + mt(n), c = -r.scrollTop, "rtl" === Ye(o || i).direction && (l += Math.max(i.clientWidth, o ? o.clientWidth : 0) - s), {
			width: s,
			height: a,
			x: l,
			y: c
		}));
		var n, i, r, o, s, a, l, c, u, f, d, p, h, g, m, v, y, b
	}

	function wt(i, e, t) {
		var n, r, o, s = "clippingParents" === e ? (r = yt(Ge(n = i)), $e(o = 0 <= ["absolute", "fixed"].indexOf(Ye(n).position) && Ue(n) ? Ze(n) : n) ? r.filter(function(e) {
				return $e(e) && Ke(e, o) && "body" !== We(e)
			}) : []) : [].concat(e),
			a = [].concat(s, [t]),
			l = a[0],
			c = a.reduce(function(e, t) {
				var n = _t(i, t);
				return e.top = Math.max(n.top, e.top), e.right = Math.min(n.right, e.right), e.bottom = Math.min(n.bottom, e.bottom), e.left = Math.max(n.left, e.left), e
			}, _t(i, l));
		return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c
	}

	function xt(e) {
		return e.split("-")[1]
	}

	function Et(e) {
		var t, n = e.reference,
			i = e.element,
			r = e.placement,
			o = r ? Qe(r) : null,
			s = r ? xt(r) : null,
			a = n.x + n.width / 2 - i.width / 2,
			l = n.y + n.height / 2 - i.height / 2;
		switch (o) {
			case _e:
				t = {
					x: a,
					y: n.y - i.height
				};
				break;
			case we:
				t = {
					x: a,
					y: n.y + n.height
				};
				break;
			case xe:
				t = {
					x: n.x + n.width,
					y: l
				};
				break;
			case Ee:
				t = {
					x: n.x - i.width,
					y: l
				};
				break;
			default:
				t = {
					x: n.x,
					y: n.y
				}
		}
		var c = o ? et(o) : null;
		if (null != c) {
			var u = "y" === c ? "height" : "width";
			switch (s) {
				case ke:
					t[c] = Math.floor(t[c]) - Math.floor(n[u] / 2 - i[u] / 2);
					break;
				case Ae:
					t[c] = Math.floor(t[c]) + Math.ceil(n[u] / 2 - i[u] / 2)
			}
		}
		return t
	}

	function Tt(e, t) {
		void 0 === t && (t = {});
		var n = t,
			i = n.placement,
			r = void 0 === i ? e.placement : i,
			o = n.boundary,
			s = void 0 === o ? Se : o,
			a = n.rootBoundary,
			l = void 0 === a ? De : a,
			c = n.elementContext,
			u = void 0 === c ? Le : c,
			f = n.altBoundary,
			d = void 0 !== f && f,
			p = n.padding,
			h = void 0 === p ? 0 : p,
			g = nt("number" != typeof h ? h : it(h, Ce)),
			m = u === Le ? je : Le,
			v = e.elements.reference,
			y = e.rects.popper,
			b = e.elements[d ? m : u],
			_ = wt($e(b) ? b : b.contextElement || Ve(e.elements.popper), s, l),
			w = ht(v),
			x = Et({
				reference: w,
				element: y,
				strategy: "absolute",
				placement: r
			}),
			E = bt(Object.assign(Object.assign({}, y), x)),
			T = u === Le ? E : w,
			C = {
				top: _.top - T.top + g.top,
				bottom: T.bottom - _.bottom + g.bottom,
				left: _.left - T.left + g.left,
				right: T.right - _.right + g.right
			},
			k = e.modifiersData.offset;
		if (u === Le && k) {
			var A = k[r];
			Object.keys(C).forEach(function(e) {
				var t = 0 <= [xe, we].indexOf(e) ? 1 : -1,
					n = 0 <= [_e, we].indexOf(e) ? "y" : "x";
				C[e] += A[n] * t
			})
		}
		return C
	}
	var Ct = {
		name: "flip",
		enabled: !0,
		phase: "main",
		fn: function(e) {
			var n = e.state,
				t = e.options,
				i = e.name;
			if (!n.modifiersData[i]._skip) {
				for (var r = t.mainAxis, o = void 0 === r || r, s = t.altAxis, a = void 0 === s || s, l = t.fallbackPlacements, c = t.padding, u = t.boundary, f = t.rootBoundary, d = t.altBoundary, p = t.flipVariations, h = void 0 === p || p, g = t.allowedAutoPlacements, m = n.options.placement, v = Qe(m), y = l || (v !== m && h ? function(e) {
						if (Qe(e) === Te) return [];
						var t = ft(e);
						return [pt(e), t, pt(t)]
					}(m) : [ft(m)]), b = [m].concat(y).reduce(function(e, t) {
						return e.concat(Qe(t) === Te ? function(n, e) {
							void 0 === e && (e = {});
							var t = e,
								i = t.placement,
								r = t.boundary,
								o = t.rootBoundary,
								s = t.padding,
								a = t.flipVariations,
								l = t.allowedAutoPlacements,
								c = void 0 === l ? Ne : l,
								u = xt(i),
								f = u ? a ? Oe : Oe.filter(function(e) {
									return xt(e) === u
								}) : Ce,
								d = f.filter(function(e) {
									return 0 <= c.indexOf(e)
								});
							0 === d.length && (d = f);
							var p = d.reduce(function(e, t) {
								return e[t] = Tt(n, {
									placement: t,
									boundary: r,
									rootBoundary: o,
									padding: s
								})[Qe(t)], e
							}, {});
							return Object.keys(p).sort(function(e, t) {
								return p[e] - p[t]
							})
						}(n, {
							placement: t,
							boundary: u,
							rootBoundary: f,
							padding: c,
							flipVariations: h,
							allowedAutoPlacements: g
						}) : t)
					}, []), _ = n.rects.reference, w = n.rects.popper, x = new Map, E = !0, T = b[0], C = 0; C < b.length; C++) {
					var k = b[C],
						A = Qe(k),
						S = xt(k) === ke,
						D = 0 <= [_e, we].indexOf(A),
						L = D ? "width" : "height",
						j = Tt(n, {
							placement: k,
							boundary: u,
							rootBoundary: f,
							altBoundary: d,
							padding: c
						}),
						O = D ? S ? xe : Ee : S ? we : _e;
					_[L] > w[L] && (O = ft(O));
					var N = ft(O),
						P = [];
					if (o && P.push(j[A] <= 0), a && P.push(j[O] <= 0, j[N] <= 0), P.every(function(e) {
							return e
						})) {
						T = k, E = !1;
						break
					}
					x.set(k, P)
				}
				if (E)
					for (var I = function(n) {
							var e = b.find(function(e) {
								var t = x.get(e);
								if (t) return t.slice(0, n).every(function(e) {
									return e
								})
							});
							if (e) return T = e, "break"
						}, H = h ? 3 : 1; 0 < H && "break" !== I(H); H--);
				n.placement !== T && (n.modifiersData[i]._skip = !0, n.placement = T, n.reset = !0)
			}
		},
		requiresIfExists: ["offset"],
		data: {
			_skip: !1
		}
	};

	function kt(e, t, n) {
		return void 0 === n && (n = {
			x: 0,
			y: 0
		}), {
			top: e.top - t.height - n.y,
			right: e.right - t.width + n.x,
			bottom: e.bottom - t.height + n.y,
			left: e.left - t.width - n.x
		}
	}

	function At(t) {
		return [_e, xe, we, Ee].some(function(e) {
			return 0 <= t[e]
		})
	}
	var St = {
		name: "hide",
		enabled: !0,
		phase: "main",
		requiresIfExists: ["preventOverflow"],
		fn: function(e) {
			var t = e.state,
				n = e.name,
				i = t.rects.reference,
				r = t.rects.popper,
				o = t.modifiersData.preventOverflow,
				s = Tt(t, {
					elementContext: "reference"
				}),
				a = Tt(t, {
					altBoundary: !0
				}),
				l = kt(s, i),
				c = kt(a, r, o),
				u = At(l),
				f = At(c);
			t.modifiersData[n] = {
				referenceClippingOffsets: l,
				popperEscapeOffsets: c,
				isReferenceHidden: u,
				hasPopperEscaped: f
			}, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
				"data-popper-reference-hidden": u,
				"data-popper-escaped": f
			})
		}
	};
	var Dt = {
		name: "offset",
		enabled: !0,
		phase: "main",
		requires: ["popperOffsets"],
		fn: function(e) {
			var u = e.state,
				t = e.options,
				n = e.name,
				i = t.offset,
				f = void 0 === i ? [0, 0] : i,
				r = Ne.reduce(function(e, t) {
					var n, i, r, o, s, a, l, c;
					return e[t] = (n = t, i = u.rects, r = f, o = Qe(n), s = 0 <= [Ee, _e].indexOf(o) ? -1 : 1, a = "function" == typeof r ? r(Object.assign(Object.assign({}, i), {}, {
						placement: n
					})) : r, l = a[0], c = a[1], l = l || 0, c = (c || 0) * s, 0 <= [Ee, xe].indexOf(o) ? {
						x: c,
						y: l
					} : {
						x: l,
						y: c
					}), e
				}, {}),
				o = r[u.placement],
				s = o.x,
				a = o.y;
			null != u.modifiersData.popperOffsets && (u.modifiersData.popperOffsets.x += s, u.modifiersData.popperOffsets.y += a), u.modifiersData[n] = r
		}
	};
	var Lt = {
		name: "popperOffsets",
		enabled: !0,
		phase: "read",
		fn: function(e) {
			var t = e.state,
				n = e.name;
			t.modifiersData[n] = Et({
				reference: t.rects.reference,
				element: t.rects.popper,
				strategy: "absolute",
				placement: t.placement
			})
		},
		data: {}
	};
	var jt = {
		name: "preventOverflow",
		enabled: !0,
		phase: "main",
		fn: function(e) {
			var t = e.state,
				n = e.options,
				i = e.name,
				r = n.mainAxis,
				o = void 0 === r || r,
				s = n.altAxis,
				a = void 0 !== s && s,
				l = n.boundary,
				c = n.rootBoundary,
				u = n.altBoundary,
				f = n.padding,
				d = n.tether,
				p = void 0 === d || d,
				h = n.tetherOffset,
				g = void 0 === h ? 0 : h,
				m = Tt(t, {
					boundary: l,
					rootBoundary: c,
					padding: f,
					altBoundary: u
				}),
				v = Qe(t.placement),
				y = xt(t.placement),
				b = !y,
				_ = et(v),
				w = "x" === _ ? "y" : "x",
				x = t.modifiersData.popperOffsets,
				E = t.rects.reference,
				T = t.rects.popper,
				C = "function" == typeof g ? g(Object.assign(Object.assign({}, t.rects), {}, {
					placement: t.placement
				})) : g,
				k = {
					x: 0,
					y: 0
				};
			if (x) {
				if (o) {
					var A = "y" === _ ? _e : Ee,
						S = "y" === _ ? we : xe,
						D = "y" === _ ? "height" : "width",
						L = x[_],
						j = x[_] + m[A],
						O = x[_] - m[S],
						N = p ? -T[D] / 2 : 0,
						P = y === ke ? E[D] : T[D],
						I = y === ke ? -T[D] : -E[D],
						H = t.elements.arrow,
						M = p && H ? Xe(H) : {
							width: 0,
							height: 0
						},
						q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
							top: 0,
							right: 0,
							bottom: 0,
							left: 0
						},
						R = q[A],
						B = q[S],
						W = tt(0, E[D], M[D]),
						F = b ? E[D] / 2 - N - W - R - C : P - W - R - C,
						$ = b ? -E[D] / 2 + N + W + B + C : I + W + B + C,
						U = t.elements.arrow && Ze(t.elements.arrow),
						z = U ? "y" === _ ? U.clientTop || 0 : U.clientLeft || 0 : 0,
						Q = t.modifiersData.offset ? t.modifiersData.offset[t.placement][_] : 0,
						X = x[_] + F - Q - z,
						K = x[_] + $ - Q,
						Y = tt(p ? Math.min(j, X) : j, L, p ? Math.max(O, K) : O);
					x[_] = Y, k[_] = Y - L
				}
				if (a) {
					var V = "x" === _ ? _e : Ee,
						G = "x" === _ ? we : xe,
						J = x[w],
						Z = tt(J + m[V], J, J - m[G]);
					x[w] = Z, k[w] = Z - J
				}
				t.modifiersData[i] = k
			}
		},
		requiresIfExists: ["offset"]
	};

	function Ot(e, t, n) {
		void 0 === n && (n = !1);
		var i, r, o = Ve(t),
			s = ht(e),
			a = Ue(t),
			l = {
				scrollLeft: 0,
				scrollTop: 0
			},
			c = {
				x: 0,
				y: 0
			};
		return (a || !a && !n) && (("body" !== We(t) || vt(o)) && (l = (i = t) !== Fe(i) && Ue(i) ? {
			scrollLeft: (r = i).scrollLeft,
			scrollTop: r.scrollTop
		} : gt(i)), Ue(t) ? ((c = ht(t)).x += t.clientLeft, c.y += t.clientTop) : o && (c.x = mt(o))), {
			x: s.left + l.scrollLeft - c.x,
			y: s.top + l.scrollTop - c.y,
			width: s.width,
			height: s.height
		}
	}

	function Nt(e) {
		var i = new Map,
			r = new Set,
			t = [];
		return e.forEach(function(e) {
			i.set(e.name, e)
		}), e.forEach(function(e) {
			r.has(e.name) || function n(e) {
				r.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function(e) {
					if (!r.has(e)) {
						var t = i.get(e);
						t && n(t)
					}
				}), t.push(e)
			}(e)
		}), t
	}
	var Pt = {
		placement: "bottom",
		modifiers: [],
		strategy: "absolute"
	};

	function It() {
		for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
		return !t.some(function(e) {
			return !(e && "function" == typeof e.getBoundingClientRect)
		})
	}

	function Ht(e) {
		void 0 === e && (e = {});
		var t = e,
			n = t.defaultModifiers,
			p = void 0 === n ? [] : n,
			i = t.defaultOptions,
			h = void 0 === i ? Pt : i;
		return function(s, a, t) {
			void 0 === t && (t = h);
			var n, i, c = {
					placement: "bottom",
					orderedModifiers: [],
					options: Object.assign(Object.assign({}, Pt), h),
					modifiersData: {},
					elements: {
						reference: s,
						popper: a
					},
					attributes: {},
					styles: {}
				},
				l = [],
				u = !1,
				f = {
					state: c,
					setOptions: function(e) {
						d(), c.options = Object.assign(Object.assign(Object.assign({}, h), c.options), e), c.scrollParents = {
							reference: $e(s) ? yt(s) : s.contextElement ? yt(s.contextElement) : [],
							popper: yt(a)
						};
						var t, n, i, r, o = (i = [].concat(p, c.options.modifiers), r = i.reduce(function(e, t) {
							var n = e[t.name];
							return e[t.name] = n ? Object.assign(Object.assign(Object.assign({}, n), t), {}, {
								options: Object.assign(Object.assign({}, n.options), t.options),
								data: Object.assign(Object.assign({}, n.data), t.data)
							}) : t, e
						}, {}), t = Object.keys(r).map(function(e) {
							return r[e]
						}), n = Nt(t), Be.reduce(function(e, t) {
							return e.concat(n.filter(function(e) {
								return e.phase === t
							}))
						}, []));
						return c.orderedModifiers = o.filter(function(e) {
							return e.enabled
						}), c.orderedModifiers.forEach(function(e) {
							var t = e.name,
								n = e.options,
								i = void 0 === n ? {} : n,
								r = e.effect;
							if ("function" == typeof r) {
								var o = r({
									state: c,
									name: t,
									instance: f,
									options: i
								});
								l.push(o || function() {})
							}
						}), f.update()
					},
					forceUpdate: function() {
						if (!u) {
							var e = c.elements,
								t = e.reference,
								n = e.popper;
							if (It(t, n)) {
								c.rects = {
									reference: Ot(t, Ze(n), "fixed" === c.options.strategy),
									popper: Xe(n)
								}, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(e) {
									return c.modifiersData[e.name] = Object.assign({}, e.data)
								});
								for (var i = 0; i < c.orderedModifiers.length; i++)
									if (!0 !== c.reset) {
										var r = c.orderedModifiers[i],
											o = r.fn,
											s = r.options,
											a = void 0 === s ? {} : s,
											l = r.name;
										"function" == typeof o && (c = o({
											state: c,
											options: a,
											name: l,
											instance: f
										}) || c)
									} else c.reset = !1, i = -1
							}
						}
					},
					update: (n = function() {
						return new Promise(function(e) {
							f.forceUpdate(), e(c)
						})
					}, function() {
						return i || (i = new Promise(function(e) {
							Promise.resolve().then(function() {
								i = void 0, e(n())
							})
						})), i
					}),
					destroy: function() {
						d(), u = !0
					}
				};
			if (!It(s, a)) return f;

			function d() {
				l.forEach(function(e) {
					return e()
				}), l = []
			}
			return f.setOptions(t).then(function(e) {
				!u && t.onFirstUpdate && t.onFirstUpdate(e)
			}), f
		}
	}
	var Mt = Ht(),
		qt = Ht({
			defaultModifiers: [ct, Lt, at, ze]
		}),
		Rt = Ht({
			defaultModifiers: [ct, Lt, at, ze, Dt, Ct, jt, rt, St]
		}),
		Bt = Object.freeze({
			__proto__: null,
			popperGenerator: Ht,
			detectOverflow: Tt,
			createPopperBase: Mt,
			createPopper: Rt,
			createPopperLite: qt,
			top: _e,
			bottom: we,
			right: xe,
			left: Ee,
			auto: Te,
			basePlacements: Ce,
			start: ke,
			end: Ae,
			clippingParents: Se,
			viewport: De,
			popper: Le,
			reference: je,
			variationPlacements: Oe,
			placements: Ne,
			beforeRead: Pe,
			read: "read",
			afterRead: Ie,
			beforeMain: He,
			main: "main",
			afterMain: Me,
			beforeWrite: qe,
			write: "write",
			afterWrite: Re,
			modifierPhases: Be,
			applyStyles: ze,
			arrow: rt,
			computeStyles: at,
			eventListeners: ct,
			flip: Ct,
			hide: St,
			offset: Dt,
			popperOffsets: Lt,
			preventOverflow: jt
		}),
		Wt = "dropdown",
		Ft = "bs.dropdown",
		$t = "." + Ft,
		Ut = ".data-api",
		zt = "Escape",
		Qt = "ArrowUp",
		Xt = "ArrowDown",
		Kt = new RegExp(Qt + "|" + Xt + "|" + zt),
		Yt = "hide" + $t,
		Vt = "hidden" + $t,
		Gt = "click" + $t + Ut,
		Jt = "keydown" + $t + Ut,
		Zt = "disabled",
		en = "show",
		tn = '[data-bs-toggle="dropdown"]',
		nn = ".dropdown-menu",
		rn = t ? "top-end" : "top-start",
		on = t ? "top-start" : "top-end",
		sn = t ? "bottom-end" : "bottom-start",
		an = t ? "bottom-start" : "bottom-end",
		ln = t ? "left-start" : "right-start",
		cn = t ? "right-start" : "left-start",
		un = {
			offset: 0,
			flip: !0,
			boundary: "clippingParents",
			reference: "toggle",
			display: "dynamic",
			popperConfig: null
		},
		fn = {
			offset: "(number|string|function)",
			flip: "boolean",
			boundary: "(string|element)",
			reference: "(string|element)",
			display: "string",
			popperConfig: "(null|object)"
		},
		dn = function(i) {
			function c(e, t) {
				var n;
				return (n = i.call(this, e) || this)._popper = null, n._config = n._getConfig(t), n._menu = n._getMenuElement(), n._inNavbar = n._detectNavbar(), n._addEventListeners(), n
			}
			u(c, i);
			var e = c.prototype;
			return e.toggle = function() {
				if (!this._element.disabled && !this._element.classList.contains(Zt)) {
					var e = this._element.classList.contains(en);
					c.clearMenus(), e || this.show()
				}
			}, e.show = function() {
				if (!(this._element.disabled || this._element.classList.contains(Zt) || this._menu.classList.contains(en))) {
					var e = c.getParentFromElement(this._element),
						t = {
							relatedTarget: this._element
						};
					if (!R.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
						if (!this._inNavbar) {
							if (void 0 === Bt) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
							var n = this._element;
							"parent" === this._config.reference ? n = e : p(this._config.reference) && (n = this._config.reference, void 0 !== this._config.reference.jquery && (n = this._config.reference[0])), this._popper = Rt(n, this._menu, this._getPopperConfig())
						}
						var i;
						if ("ontouchstart" in document.documentElement && !e.closest(".navbar-nav"))(i = []).concat.apply(i, document.body.children).forEach(function(e) {
							return R.on(e, "mouseover", null, function() {})
						});
						this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle(en), this._element.classList.toggle(en), R.trigger(e, "shown.bs.dropdown", t)
					}
				}
			}, e.hide = function() {
				if (!this._element.disabled && !this._element.classList.contains(Zt) && this._menu.classList.contains(en)) {
					var e = c.getParentFromElement(this._element),
						t = {
							relatedTarget: this._element
						};
					R.trigger(e, Yt, t).defaultPrevented || (this._popper && this._popper.destroy(), this._menu.classList.toggle(en), this._element.classList.toggle(en), R.trigger(e, Vt, t))
				}
			}, e.dispose = function() {
				i.prototype.dispose.call(this), R.off(this._element, $t), this._menu = null, this._popper && (this._popper.destroy(), this._popper = null)
			}, e.update = function() {
				this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
			}, e._addEventListeners = function() {
				var t = this;
				R.on(this._element, "click.bs.dropdown", function(e) {
					e.preventDefault(), e.stopPropagation(), t.toggle()
				})
			}, e._getConfig = function(e) {
				return e = a({}, this.constructor.Default, V.getDataAttributes(this._element), e), y(Wt, e, this.constructor.DefaultType), e
			}, e._getMenuElement = function() {
				return G.next(this._element, nn)[0]
			}, e._getPlacement = function() {
				var e = this._element.parentNode;
				if (e.classList.contains("dropend")) return ln;
				if (e.classList.contains("dropstart")) return cn;
				var t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
				return e.classList.contains("dropup") ? t ? on : rn : t ? an : sn
			}, e._detectNavbar = function() {
				return null !== this._element.closest(".navbar")
			}, e._getPopperConfig = function() {
				var e = {
					placement: this._getPlacement(),
					modifiers: [{
						name: "preventOverflow",
						options: {
							altBoundary: this._config.flip,
							rootBoundary: this._config.boundary
						}
					}]
				};
				return "static" === this._config.display && (e.modifiers = [{
					name: "applyStyles",
					enabled: !1
				}]), a({}, e, this._config.popperConfig)
			}, c.dropdownInterface = function(e, t) {
				var n = T(e, Ft);
				if (n || (n = new c(e, "object" == typeof t ? t : null)), "string" == typeof t) {
					if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
					n[t]()
				}
			}, c.jQueryInterface = function(e) {
				return this.each(function() {
					c.dropdownInterface(this, e)
				})
			}, c.clearMenus = function(e) {
				if (!e || 2 !== e.button && ("keyup" !== e.type || "Tab" === e.key))
					for (var t = G.find(tn), n = 0, i = t.length; n < i; n++) {
						var r = c.getParentFromElement(t[n]),
							o = T(t[n], Ft),
							s = {
								relatedTarget: t[n]
							};
						if (e && "click" === e.type && (s.clickEvent = e), o) {
							var a = o._menu;
							if (t[n].classList.contains(en))
								if (!(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && "Tab" === e.key) && a.contains(e.target)))
									if (!R.trigger(r, Yt, s).defaultPrevented) {
										var l;
										if ("ontouchstart" in document.documentElement)(l = []).concat.apply(l, document.body.children).forEach(function(e) {
											return R.off(e, "mouseover", null, function() {})
										});
										t[n].setAttribute("aria-expanded", "false"), o._popper && o._popper.destroy(), a.classList.remove(en), t[n].classList.remove(en), R.trigger(r, Vt, s)
									}
						}
					}
			}, c.getParentFromElement = function(e) {
				return d(e) || e.parentNode
			}, c.dataApiKeydownHandler = function(e) {
				if ((/input|textarea/i.test(e.target.tagName) ? !("Space" === e.key || e.key !== zt && (e.key !== Xt && e.key !== Qt || e.target.closest(nn))) : Kt.test(e.key)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !this.classList.contains(Zt))) {
					var t = c.getParentFromElement(this),
						n = this.classList.contains(en);
					if (e.key === zt) return (this.matches(tn) ? this : G.prev(this, tn)[0]).focus(), void c.clearMenus();
					if (n && "Space" !== e.key) {
						var i = G.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", t).filter(b);
						if (i.length) {
							var r = i.indexOf(e.target);
							e.key === Qt && 0 < r && r--, e.key === Xt && r < i.length - 1 && r++, i[r = -1 === r ? 0 : r].focus()
						}
					} else c.clearMenus()
				}
			}, s(c, null, [{
				key: "Default",
				get: function() {
					return un
				}
			}, {
				key: "DefaultType",
				get: function() {
					return fn
				}
			}, {
				key: "DATA_KEY",
				get: function() {
					return Ft
				}
			}]), c
		}(B);
	R.on(document, Jt, tn, dn.dataApiKeydownHandler), R.on(document, Jt, nn, dn.dataApiKeydownHandler), R.on(document, Gt, dn.clearMenus), R.on(document, "keyup.bs.dropdown.data-api", dn.clearMenus), R.on(document, Gt, tn, function(e) {
		e.preventDefault(), e.stopPropagation(), dn.dropdownInterface(this, "toggle")
	}), R.on(document, Gt, ".dropdown form", function(e) {
		return e.stopPropagation()
	}), e(function() {
		var e = w();
		if (e) {
			var t = e.fn[Wt];
			e.fn[Wt] = dn.jQueryInterface, e.fn[Wt].Constructor = dn, e.fn[Wt].noConflict = function() {
				return e.fn[Wt] = t, dn.jQueryInterface
			}
		}
	});
	var pn = "modal",
		hn = "bs.modal",
		gn = "." + hn,
		mn = {
			backdrop: !0,
			keyboard: !0,
			focus: !0
		},
		vn = {
			backdrop: "(boolean|string)",
			keyboard: "boolean",
			focus: "boolean"
		},
		yn = "hidden" + gn,
		bn = "show" + gn,
		_n = "focusin" + gn,
		wn = "resize" + gn,
		xn = "click.dismiss" + gn,
		En = "keydown.dismiss" + gn,
		Tn = "mousedown.dismiss" + gn,
		Cn = "modal-open",
		kn = "fade",
		An = "show",
		Sn = "modal-static",
		Dn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
		Ln = ".sticky-top",
		jn = function(i) {
			function r(e, t) {
				var n;
				return (n = i.call(this, e) || this)._config = n._getConfig(t), n._dialog = G.findOne(".modal-dialog", e), n._backdrop = null, n._isShown = !1, n._isBodyOverflowing = !1, n._ignoreBackdropClick = !1, n._isTransitioning = !1, n._scrollbarWidth = 0, n
			}
			u(r, i);
			var e = r.prototype;
			return e.toggle = function(e) {
				return this._isShown ? this.hide() : this.show(e)
			}, e.show = function(e) {
				var t = this;
				if (!this._isShown && !this._isTransitioning) {
					this._element.classList.contains(kn) && (this._isTransitioning = !0);
					var n = R.trigger(this._element, bn, {
						relatedTarget: e
					});
					this._isShown || n.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), R.on(this._element, xn, '[data-bs-dismiss="modal"]', function(e) {
						return t.hide(e)
					}), R.on(this._dialog, Tn, function() {
						R.one(t._element, "mouseup.dismiss.bs.modal", function(e) {
							e.target === t._element && (t._ignoreBackdropClick = !0)
						})
					}), this._showBackdrop(function() {
						return t._showElement(e)
					}))
				}
			}, e.hide = function(e) {
				var t = this;
				if ((e && e.preventDefault(), this._isShown && !this._isTransitioning) && !R.trigger(this._element, "hide.bs.modal").defaultPrevented) {
					this._isShown = !1;
					var n = this._element.classList.contains(kn);
					if (n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), R.off(document, _n), this._element.classList.remove(An), R.off(this._element, xn), R.off(this._dialog, Tn), n) {
						var i = m(this._element);
						R.one(this._element, h, function(e) {
							return t._hideModal(e)
						}), v(this._element, i)
					} else this._hideModal()
				}
			}, e.dispose = function() {
				[window, this._element, this._dialog].forEach(function(e) {
					return R.off(e, gn)
				}), i.prototype.dispose.call(this), R.off(document, _n), this._config = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
			}, e.handleUpdate = function() {
				this._adjustDialog()
			}, e._getConfig = function(e) {
				return e = a({}, mn, e), y(pn, e, vn), e
			}, e._showElement = function(e) {
				var t = this,
					n = this._element.classList.contains(kn),
					i = G.findOne(".modal-body", this._dialog);
				this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), n && _(this._element), this._element.classList.add(An), this._config.focus && this._enforceFocus();
				var r = function() {
					t._config.focus && t._element.focus(), t._isTransitioning = !1, R.trigger(t._element, "shown.bs.modal", {
						relatedTarget: e
					})
				};
				if (n) {
					var o = m(this._dialog);
					R.one(this._dialog, h, r), v(this._dialog, o)
				} else r()
			}, e._enforceFocus = function() {
				var t = this;
				R.off(document, _n), R.on(document, _n, function(e) {
					document === e.target || t._element === e.target || t._element.contains(e.target) || t._element.focus()
				})
			}, e._setEscapeEvent = function() {
				var t = this;
				this._isShown ? R.on(this._element, En, function(e) {
					t._config.keyboard && "Escape" === e.key ? (e.preventDefault(), t.hide()) : t._config.keyboard || "Escape" !== e.key || t._triggerBackdropTransition()
				}) : R.off(this._element, En)
			}, e._setResizeEvent = function() {
				var e = this;
				this._isShown ? R.on(window, wn, function() {
					return e._adjustDialog()
				}) : R.off(window, wn)
			}, e._hideModal = function() {
				var e = this;
				this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function() {
					document.body.classList.remove(Cn), e._resetAdjustments(), e._resetScrollbar(), R.trigger(e._element, yn)
				})
			}, e._removeBackdrop = function() {
				this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null
			}, e._showBackdrop = function(e) {
				var t = this,
					n = this._element.classList.contains(kn) ? kn : "";
				if (this._isShown && this._config.backdrop) {
					if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), document.body.appendChild(this._backdrop), R.on(this._element, xn, function(e) {
							t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide())
						}), n && _(this._backdrop), this._backdrop.classList.add(An), !n) return void e();
					var i = m(this._backdrop);
					R.one(this._backdrop, h, e), v(this._backdrop, i)
				} else if (!this._isShown && this._backdrop) {
					this._backdrop.classList.remove(An);
					var r = function() {
						t._removeBackdrop(), e()
					};
					if (this._element.classList.contains(kn)) {
						var o = m(this._backdrop);
						R.one(this._backdrop, h, r), v(this._backdrop, o)
					} else r()
				} else e()
			}, e._triggerBackdropTransition = function() {
				var e = this;
				if (!R.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) {
					var t = this._element.scrollHeight > document.documentElement.clientHeight;
					t || (this._element.style.overflowY = "hidden"), this._element.classList.add(Sn);
					var n = m(this._dialog);
					R.off(this._element, h), R.one(this._element, h, function() {
						e._element.classList.remove(Sn), t || (R.one(e._element, h, function() {
							e._element.style.overflowY = ""
						}), v(e._element, n))
					}), v(this._element, n), this._element.focus()
				}
			}, e._adjustDialog = function() {
				var e = this._element.scrollHeight > document.documentElement.clientHeight;
				(!this._isBodyOverflowing && e && !t || this._isBodyOverflowing && !e && t) && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), (this._isBodyOverflowing && !e && !t || !this._isBodyOverflowing && e && t) && (this._element.style.paddingRight = this._scrollbarWidth + "px")
			}, e._resetAdjustments = function() {
				this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
			}, e._checkScrollbar = function() {
				var e = document.body.getBoundingClientRect();
				this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
			}, e._setScrollbar = function() {
				var i = this;
				if (this._isBodyOverflowing) {
					G.find(Dn).forEach(function(e) {
						var t = e.style.paddingRight,
							n = window.getComputedStyle(e)["padding-right"];
						V.setDataAttribute(e, "padding-right", t), e.style.paddingRight = Number.parseFloat(n) + i._scrollbarWidth + "px"
					}), G.find(Ln).forEach(function(e) {
						var t = e.style.marginRight,
							n = window.getComputedStyle(e)["margin-right"];
						V.setDataAttribute(e, "margin-right", t), e.style.marginRight = Number.parseFloat(n) - i._scrollbarWidth + "px"
					});
					var e = document.body.style.paddingRight,
						t = window.getComputedStyle(document.body)["padding-right"];
					V.setDataAttribute(document.body, "padding-right", e), document.body.style.paddingRight = Number.parseFloat(t) + this._scrollbarWidth + "px"
				}
				document.body.classList.add(Cn)
			}, e._resetScrollbar = function() {
				G.find(Dn).forEach(function(e) {
					var t = V.getDataAttribute(e, "padding-right");
					void 0 !== t && (V.removeDataAttribute(e, "padding-right"), e.style.paddingRight = t)
				}), G.find("" + Ln).forEach(function(e) {
					var t = V.getDataAttribute(e, "margin-right");
					void 0 !== t && (V.removeDataAttribute(e, "margin-right"), e.style.marginRight = t)
				});
				var e = V.getDataAttribute(document.body, "padding-right");
				void 0 === e ? document.body.style.paddingRight = "" : (V.removeDataAttribute(document.body, "padding-right"), document.body.style.paddingRight = e)
			}, e._getScrollbarWidth = function() {
				var e = document.createElement("div");
				e.className = "modal-scrollbar-measure", document.body.appendChild(e);
				var t = e.getBoundingClientRect().width - e.clientWidth;
				return document.body.removeChild(e), t
			}, r.jQueryInterface = function(n, i) {
				return this.each(function() {
					var e = T(this, hn),
						t = a({}, mn, V.getDataAttributes(this), "object" == typeof n && n ? n : {});
					if (e || (e = new r(this, t)), "string" == typeof n) {
						if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
						e[n](i)
					}
				})
			}, s(r, null, [{
				key: "Default",
				get: function() {
					return mn
				}
			}, {
				key: "DATA_KEY",
				get: function() {
					return hn
				}
			}]), r
		}(B);
	R.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(e) {
		var t = this,
			n = d(this);
		"A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault(), R.one(n, bn, function(e) {
			e.defaultPrevented || R.one(n, yn, function() {
				b(t) && t.focus()
			})
		});
		var i = T(n, hn);
		if (!i) {
			var r = a({}, V.getDataAttributes(n), V.getDataAttributes(this));
			i = new jn(n, r)
		}
		i.show(this)
	}), e(function() {
		var e = w();
		if (e) {
			var t = e.fn[pn];
			e.fn[pn] = jn.jQueryInterface, e.fn[pn].Constructor = jn, e.fn[pn].noConflict = function() {
				return e.fn[pn] = t, jn.jQueryInterface
			}
		}
	});
	var On = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
		Nn = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
		Pn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
		In = {
			"*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
			a: ["target", "href", "title", "rel"],
			area: [],
			b: [],
			br: [],
			col: [],
			code: [],
			div: [],
			em: [],
			hr: [],
			h1: [],
			h2: [],
			h3: [],
			h4: [],
			h5: [],
			h6: [],
			i: [],
			img: ["src", "srcset", "alt", "title", "width", "height"],
			li: [],
			ol: [],
			p: [],
			pre: [],
			s: [],
			small: [],
			span: [],
			sub: [],
			sup: [],
			strong: [],
			u: [],
			ul: []
		};

	function Hn(e, a, t) {
		var n;
		if (!e.length) return e;
		if (t && "function" == typeof t) return t(e);
		for (var i = (new window.DOMParser).parseFromString(e, "text/html"), l = Object.keys(a), c = (n = []).concat.apply(n, i.body.querySelectorAll("*")), r = function(e, t) {
				var n, i = c[e],
					r = i.nodeName.toLowerCase();
				if (!l.includes(r)) return i.parentNode.removeChild(i), "continue";
				var o = (n = []).concat.apply(n, i.attributes),
					s = [].concat(a["*"] || [], a[r] || []);
				o.forEach(function(e) {
					(function(e, t) {
						var n = e.nodeName.toLowerCase();
						if (t.includes(n)) return !On.has(n) || Boolean(e.nodeValue.match(Nn) || e.nodeValue.match(Pn));
						for (var i = t.filter(function(e) {
								return e instanceof RegExp
							}), r = 0, o = i.length; r < o; r++)
							if (n.match(i[r])) return !0;
						return !1
					})(e, s) || i.removeAttribute(e.nodeName)
				})
			}, o = 0, s = c.length; o < s; o++) r(o);
		return i.body.innerHTML
	}
	var Mn = "tooltip",
		qn = "bs.tooltip",
		Rn = "." + qn,
		Bn = "bs-tooltip",
		Wn = new RegExp("(^|\\s)" + Bn + "\\S+", "g"),
		Fn = new Set(["sanitize", "allowList", "sanitizeFn"]),
		$n = {
			animation: "boolean",
			template: "string",
			title: "(string|element|function)",
			trigger: "string",
			delay: "(number|object)",
			html: "boolean",
			selector: "(string|boolean)",
			placement: "(string|function)",
			container: "(string|element|boolean)",
			fallbackPlacements: "(null|array)",
			boundary: "(string|element)",
			customClass: "(string|function)",
			sanitize: "boolean",
			sanitizeFn: "(null|function)",
			allowList: "object",
			popperConfig: "(null|object)"
		},
		Un = {
			AUTO: "auto",
			TOP: "top",
			RIGHT: t ? "left" : "right",
			BOTTOM: "bottom",
			LEFT: t ? "right" : "left"
		},
		zn = {
			animation: !0,
			template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
			trigger: "hover focus",
			title: "",
			delay: 0,
			html: !1,
			selector: !1,
			placement: "top",
			container: !1,
			fallbackPlacements: null,
			boundary: "clippingParents",
			customClass: "",
			sanitize: !0,
			sanitizeFn: null,
			allowList: In,
			popperConfig: null
		},
		Qn = {
			HIDE: "hide" + Rn,
			HIDDEN: "hidden" + Rn,
			SHOW: "show" + Rn,
			SHOWN: "shown" + Rn,
			INSERTED: "inserted" + Rn,
			CLICK: "click" + Rn,
			FOCUSIN: "focusin" + Rn,
			FOCUSOUT: "focusout" + Rn,
			MOUSEENTER: "mouseenter" + Rn,
			MOUSELEAVE: "mouseleave" + Rn
		},
		Xn = "fade",
		Kn = "show",
		Yn = "show",
		Vn = "hover",
		Gn = "focus",
		Jn = function(i) {
			function r(e, t) {
				var n;
				if (void 0 === Bt) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
				return (n = i.call(this, e) || this)._isEnabled = !0, n._timeout = 0, n._hoverState = "", n._activeTrigger = {}, n._popper = null, n.config = n._getConfig(t), n.tip = null, n._setListeners(), n
			}
			u(r, i);
			var e = r.prototype;
			return e.enable = function() {
				this._isEnabled = !0
			}, e.disable = function() {
				this._isEnabled = !1
			}, e.toggleEnabled = function() {
				this._isEnabled = !this._isEnabled
			}, e.toggle = function(e) {
				if (this._isEnabled)
					if (e) {
						var t = this.constructor.DATA_KEY,
							n = T(e.delegateTarget, t);
						n || (n = new this.constructor(e.delegateTarget, this._getDelegateConfig()), E(e.delegateTarget, t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
					} else {
						if (this.getTipElement().classList.contains(Kn)) return void this._leave(null, this);
						this._enter(null, this)
					}
			}, e.dispose = function() {
				clearTimeout(this._timeout), R.off(this._element, this.constructor.EVENT_KEY), R.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.config = null, this.tip = null, i.prototype.dispose.call(this)
			}, e.show = function() {
				var t = this;
				if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
				if (this.isWithContent() && this._isEnabled) {
					var e = R.trigger(this._element, this.constructor.Event.SHOW),
						n = function e(t) {
							if (!document.documentElement.attachShadow) return null;
							if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? e(t.parentNode) : null;
							var n = t.getRootNode();
							return n instanceof ShadowRoot ? n : null
						}(this._element),
						i = null === n ? this._element.ownerDocument.documentElement.contains(this._element) : n.contains(this._element);
					if (e.defaultPrevented || !i) return;
					var r = this.getTipElement(),
						o = g(this.constructor.NAME);
					r.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && r.classList.add(Xn);
					var s = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this._element) : this.config.placement,
						a = this._getAttachment(s);
					this._addAttachmentClass(a);
					var l = this._getContainer();
					E(r, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || l.appendChild(r), R.trigger(this._element, this.constructor.Event.INSERTED), this._popper = Rt(this._element, r, this._getPopperConfig(a)), r.classList.add(Kn);
					var c, u, f = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
					if (f)(c = r.classList).add.apply(c, f.split(" "));
					if ("ontouchstart" in document.documentElement)(u = []).concat.apply(u, document.body.children).forEach(function(e) {
						R.on(e, "mouseover", function() {})
					});
					var d = function() {
						var e = t._hoverState;
						t._hoverState = null, R.trigger(t._element, t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
					};
					if (this.tip.classList.contains(Xn)) {
						var p = m(this.tip);
						R.one(this.tip, h, d), v(this.tip, p)
					} else d()
				}
			}, e.hide = function() {
				var e = this;
				if (this._popper) {
					var t = this.getTipElement(),
						n = function() {
							e._hoverState !== Yn && t.parentNode && t.parentNode.removeChild(t), e._cleanTipClass(), e._element.removeAttribute("aria-describedby"), R.trigger(e._element, e.constructor.Event.HIDDEN), e._popper && (e._popper.destroy(), e._popper = null)
						};
					if (!R.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
						var i;
						if (t.classList.remove(Kn), "ontouchstart" in document.documentElement)(i = []).concat.apply(i, document.body.children).forEach(function(e) {
							return R.off(e, "mouseover", c)
						});
						if (this._activeTrigger.click = !1, this._activeTrigger[Gn] = !1, this._activeTrigger[Vn] = !1, this.tip.classList.contains(Xn)) {
							var r = m(t);
							R.one(t, h, n), v(t, r)
						} else n();
						this._hoverState = ""
					}
				}
			}, e.update = function() {
				null !== this._popper && this._popper.update()
			}, e.isWithContent = function() {
				return Boolean(this.getTitle())
			}, e.getTipElement = function() {
				if (this.tip) return this.tip;
				var e = document.createElement("div");
				return e.innerHTML = this.config.template, this.tip = e.children[0], this.tip
			}, e.setContent = function() {
				var e = this.getTipElement();
				this.setElementContent(G.findOne(".tooltip-inner", e), this.getTitle()), e.classList.remove(Xn, Kn)
			}, e.setElementContent = function(e, t) {
				if (null !== e) return "object" == typeof t && p(t) ? (t.jquery && (t = t[0]), void(this.config.html ? t.parentNode !== e && (e.innerHTML = "", e.appendChild(t)) : e.textContent = t.textContent)) : void(this.config.html ? (this.config.sanitize && (t = Hn(t, this.config.allowList, this.config.sanitizeFn)), e.innerHTML = t) : e.textContent = t)
			}, e.getTitle = function() {
				var e = this._element.getAttribute("data-bs-original-title");
				return e || (e = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title), e
			}, e.updateAttachment = function(e) {
				return "right" === e ? "end" : "left" === e ? "start" : e
			}, e._getPopperConfig = function(e) {
				var t = this,
					n = {
						name: "flip",
						options: {
							altBoundary: !0
						}
					};
				return this.config.fallbackPlacements && (n.options.fallbackPlacements = this.config.fallbackPlacements), a({}, {
					placement: e,
					modifiers: [n, {
						name: "preventOverflow",
						options: {
							rootBoundary: this.config.boundary
						}
					}, {
						name: "arrow",
						options: {
							element: "." + this.constructor.NAME + "-arrow"
						}
					}, {
						name: "onChange",
						enabled: !0,
						phase: "afterWrite",
						fn: function(e) {
							return t._handlePopperPlacementChange(e)
						}
					}],
					onFirstUpdate: function(e) {
						e.options.placement !== e.placement && t._handlePopperPlacementChange(e)
					}
				}, this.config.popperConfig)
			}, e._addAttachmentClass = function(e) {
				this.getTipElement().classList.add(Bn + "-" + this.updateAttachment(e))
			}, e._getContainer = function() {
				return !1 === this.config.container ? document.body : p(this.config.container) ? this.config.container : G.findOne(this.config.container)
			}, e._getAttachment = function(e) {
				return Un[e.toUpperCase()]
			}, e._setListeners = function() {
				var i = this;
				this.config.trigger.split(" ").forEach(function(e) {
					if ("click" === e) R.on(i._element, i.constructor.Event.CLICK, i.config.selector, function(e) {
						return i.toggle(e)
					});
					else if ("manual" !== e) {
						var t = e === Vn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
							n = e === Vn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
						R.on(i._element, t, i.config.selector, function(e) {
							return i._enter(e)
						}), R.on(i._element, n, i.config.selector, function(e) {
							return i._leave(e)
						})
					}
				}), this._hideModalHandler = function() {
					i._element && i.hide()
				}, R.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = a({}, this.config, {
					trigger: "manual",
					selector: ""
				}) : this._fixTitle()
			}, e._fixTitle = function() {
				var e = this._element.getAttribute("title"),
					t = typeof this._element.getAttribute("data-bs-original-title");
				(e || "string" !== t) && (this._element.setAttribute("data-bs-original-title", e || ""), !e || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", e), this._element.setAttribute("title", ""))
			}, e._enter = function(e, t) {
				var n = this.constructor.DATA_KEY;
				(t = t || T(e.delegateTarget, n)) || (t = new this.constructor(e.delegateTarget, this._getDelegateConfig()), E(e.delegateTarget, n, t)), e && (t._activeTrigger["focusin" === e.type ? Gn : Vn] = !0), t.getTipElement().classList.contains(Kn) || t._hoverState === Yn ? t._hoverState = Yn : (clearTimeout(t._timeout), t._hoverState = Yn, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
					t._hoverState === Yn && t.show()
				}, t.config.delay.show) : t.show())
			}, e._leave = function(e, t) {
				var n = this.constructor.DATA_KEY;
				(t = t || T(e.delegateTarget, n)) || (t = new this.constructor(e.delegateTarget, this._getDelegateConfig()), E(e.delegateTarget, n, t)), e && (t._activeTrigger["focusout" === e.type ? Gn : Vn] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
					"out" === t._hoverState && t.hide()
				}, t.config.delay.hide) : t.hide())
			}, e._isWithActiveTrigger = function() {
				for (var e in this._activeTrigger)
					if (this._activeTrigger[e]) return !0;
				return !1
			}, e._getConfig = function(e) {
				var t = V.getDataAttributes(this._element);
				return Object.keys(t).forEach(function(e) {
					Fn.has(e) && delete t[e]
				}), e && "object" == typeof e.container && e.container.jquery && (e.container = e.container[0]), "number" == typeof(e = a({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
					show: e.delay,
					hide: e.delay
				}), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), y(Mn, e, this.constructor.DefaultType), e.sanitize && (e.template = Hn(e.template, e.allowList, e.sanitizeFn)), e
			}, e._getDelegateConfig = function() {
				var e = {};
				if (this.config)
					for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
				return e
			}, e._cleanTipClass = function() {
				var t = this.getTipElement(),
					e = t.getAttribute("class").match(Wn);
				null !== e && 0 < e.length && e.map(function(e) {
					return e.trim()
				}).forEach(function(e) {
					return t.classList.remove(e)
				})
			}, e._handlePopperPlacementChange = function(e) {
				var t = e.state;
				t && (this.tip = t.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement)))
			}, r.jQueryInterface = function(n) {
				return this.each(function() {
					var e = T(this, qn),
						t = "object" == typeof n && n;
					if ((e || !/dispose|hide/.test(n)) && (e || (e = new r(this, t)), "string" == typeof n)) {
						if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
						e[n]()
					}
				})
			}, s(r, null, [{
				key: "Default",
				get: function() {
					return zn
				}
			}, {
				key: "NAME",
				get: function() {
					return Mn
				}
			}, {
				key: "DATA_KEY",
				get: function() {
					return qn
				}
			}, {
				key: "Event",
				get: function() {
					return Qn
				}
			}, {
				key: "EVENT_KEY",
				get: function() {
					return Rn
				}
			}, {
				key: "DefaultType",
				get: function() {
					return $n
				}
			}]), r
		}(B);
	e(function() {
		var e = w();
		if (e) {
			var t = e.fn[Mn];
			e.fn[Mn] = Jn.jQueryInterface, e.fn[Mn].Constructor = Jn, e.fn[Mn].noConflict = function() {
				return e.fn[Mn] = t, Jn.jQueryInterface
			}
		}
	});
	var Zn = "popover",
		ei = "bs.popover",
		ti = "." + ei,
		ni = "bs-popover",
		ii = new RegExp("(^|\\s)" + ni + "\\S+", "g"),
		ri = a({}, Jn.Default, {
			placement: "right",
			trigger: "click",
			content: "",
			template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
		}),
		oi = a({}, Jn.DefaultType, {
			content: "(string|element|function)"
		}),
		si = {
			HIDE: "hide" + ti,
			HIDDEN: "hidden" + ti,
			SHOW: "show" + ti,
			SHOWN: "shown" + ti,
			INSERTED: "inserted" + ti,
			CLICK: "click" + ti,
			FOCUSIN: "focusin" + ti,
			FOCUSOUT: "focusout" + ti,
			MOUSEENTER: "mouseenter" + ti,
			MOUSELEAVE: "mouseleave" + ti
		},
		ai = function(e) {
			function i() {
				return e.apply(this, arguments) || this
			}
			u(i, e);
			var t = i.prototype;
			return t.isWithContent = function() {
				return this.getTitle() || this._getContent()
			}, t.setContent = function() {
				var e = this.getTipElement();
				this.setElementContent(G.findOne(".popover-header", e), this.getTitle());
				var t = this._getContent();
				"function" == typeof t && (t = t.call(this._element)), this.setElementContent(G.findOne(".popover-body", e), t), e.classList.remove("fade", "show")
			}, t._addAttachmentClass = function(e) {
				this.getTipElement().classList.add(ni + "-" + this.updateAttachment(e))
			}, t._getContent = function() {
				return this._element.getAttribute("data-bs-content") || this.config.content
			}, t._cleanTipClass = function() {
				var t = this.getTipElement(),
					e = t.getAttribute("class").match(ii);
				null !== e && 0 < e.length && e.map(function(e) {
					return e.trim()
				}).forEach(function(e) {
					return t.classList.remove(e)
				})
			}, i.jQueryInterface = function(n) {
				return this.each(function() {
					var e = T(this, ei),
						t = "object" == typeof n ? n : null;
					if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), E(this, ei, e)), "string" == typeof n)) {
						if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
						e[n]()
					}
				})
			}, s(i, null, [{
				key: "Default",
				get: function() {
					return ri
				}
			}, {
				key: "NAME",
				get: function() {
					return Zn
				}
			}, {
				key: "DATA_KEY",
				get: function() {
					return ei
				}
			}, {
				key: "Event",
				get: function() {
					return si
				}
			}, {
				key: "EVENT_KEY",
				get: function() {
					return ti
				}
			}, {
				key: "DefaultType",
				get: function() {
					return oi
				}
			}]), i
		}(Jn);
	e(function() {
		var e = w();
		if (e) {
			var t = e.fn[Zn];
			e.fn[Zn] = ai.jQueryInterface, e.fn[Zn].Constructor = ai, e.fn[Zn].noConflict = function() {
				return e.fn[Zn] = t, ai.jQueryInterface
			}
		}
	});
	var li = "scrollspy",
		ci = "bs.scrollspy",
		ui = "." + ci,
		fi = {
			offset: 10,
			method: "auto",
			target: ""
		},
		di = {
			offset: "number",
			method: "string",
			target: "(string|element)"
		},
		pi = "dropdown-item",
		hi = "active",
		gi = ".nav-link",
		mi = ".list-group-item",
		vi = "position",
		yi = function(i) {
			function n(e, t) {
				var n;
				return (n = i.call(this, e) || this)._scrollElement = "BODY" === e.tagName ? window : e, n._config = n._getConfig(t), n._selector = n._config.target + " " + gi + ", " + n._config.target + " " + mi + ", " + n._config.target + " ." + pi, n._offsets = [], n._targets = [], n._activeTarget = null, n._scrollHeight = 0, R.on(n._scrollElement, "scroll.bs.scrollspy", function(e) {
					return n._process(e)
				}), n.refresh(), n._process(), n
			}
			u(n, i);
			var e = n.prototype;
			return e.refresh = function() {
				var t = this,
					e = this._scrollElement === this._scrollElement.window ? "offset" : vi,
					r = "auto" === this._config.method ? e : this._config.method,
					o = r === vi ? this._getScrollTop() : 0;
				this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), G.find(this._selector).map(function(e) {
					var t = f(e),
						n = t ? G.findOne(t) : null;
					if (n) {
						var i = n.getBoundingClientRect();
						if (i.width || i.height) return [V[r](n).top + o, t]
					}
					return null
				}).filter(function(e) {
					return e
				}).sort(function(e, t) {
					return e[0] - t[0]
				}).forEach(function(e) {
					t._offsets.push(e[0]), t._targets.push(e[1])
				})
			}, e.dispose = function() {
				i.prototype.dispose.call(this), R.off(this._scrollElement, ui), this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
			}, e._getConfig = function(e) {
				if ("string" != typeof(e = a({}, fi, "object" == typeof e && e ? e : {})).target && p(e.target)) {
					var t = e.target.id;
					t || (t = g(li), e.target.id = t), e.target = "#" + t
				}
				return y(li, e, di), e
			}, e._getScrollTop = function() {
				return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
			}, e._getScrollHeight = function() {
				return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
			}, e._getOffsetHeight = function() {
				return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
			}, e._process = function() {
				var e = this._getScrollTop() + this._config.offset,
					t = this._getScrollHeight(),
					n = this._config.offset + t - this._getOffsetHeight();
				if (this._scrollHeight !== t && this.refresh(), n <= e) {
					var i = this._targets[this._targets.length - 1];
					this._activeTarget !== i && this._activate(i)
				} else {
					if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
					for (var r = this._offsets.length; r--;) {
						this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
					}
				}
			}, e._activate = function(t) {
				this._activeTarget = t, this._clear();
				var e = this._selector.split(",").map(function(e) {
						return e + '[data-bs-target="' + t + '"],' + e + '[href="' + t + '"]'
					}),
					n = G.findOne(e.join(","));
				n.classList.contains(pi) ? (G.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add(hi), n.classList.add(hi)) : (n.classList.add(hi), G.parents(n, ".nav, .list-group").forEach(function(e) {
					G.prev(e, gi + ", " + mi).forEach(function(e) {
						return e.classList.add(hi)
					}), G.prev(e, ".nav-item").forEach(function(e) {
						G.children(e, gi).forEach(function(e) {
							return e.classList.add(hi)
						})
					})
				})), R.trigger(this._scrollElement, "activate.bs.scrollspy", {
					relatedTarget: t
				})
			}, e._clear = function() {
				G.find(this._selector).filter(function(e) {
					return e.classList.contains(hi)
				}).forEach(function(e) {
					return e.classList.remove(hi)
				})
			}, n.jQueryInterface = function(t) {
				return this.each(function() {
					var e = T(this, ci);
					if (e || (e = new n(this, "object" == typeof t && t)), "string" == typeof t) {
						if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
						e[t]()
					}
				})
			}, s(n, null, [{
				key: "Default",
				get: function() {
					return fi
				}
			}, {
				key: "DATA_KEY",
				get: function() {
					return ci
				}
			}]), n
		}(B);
	R.on(window, "load.bs.scrollspy.data-api", function() {
		G.find('[data-bs-spy="scroll"]').forEach(function(e) {
			return new yi(e, V.getDataAttributes(e))
		})
	}), e(function() {
		var e = w();
		if (e) {
			var t = e.fn[li];
			e.fn[li] = yi.jQueryInterface, e.fn[li].Constructor = yi, e.fn[li].noConflict = function() {
				return e.fn[li] = t, yi.jQueryInterface
			}
		}
	});
	var bi = "bs.tab",
		_i = "active",
		wi = ".active",
		xi = ":scope > li > .active",
		Ei = function(e) {
			function n() {
				return e.apply(this, arguments) || this
			}
			u(n, e);
			var t = n.prototype;
			return t.show = function() {
				var e = this;
				if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(_i) || this._element.classList.contains("disabled"))) {
					var t, n = d(this._element),
						i = this._element.closest(".nav, .list-group");
					if (i) {
						var r = "UL" === i.nodeName || "OL" === i.nodeName ? xi : wi;
						t = (t = G.find(r, i))[t.length - 1]
					}
					var o = null;
					if (t && (o = R.trigger(t, "hide.bs.tab", {
							relatedTarget: this._element
						})), !(R.trigger(this._element, "show.bs.tab", {
							relatedTarget: t
						}).defaultPrevented || null !== o && o.defaultPrevented)) {
						this._activate(this._element, i);
						var s = function() {
							R.trigger(t, "hidden.bs.tab", {
								relatedTarget: e._element
							}), R.trigger(e._element, "shown.bs.tab", {
								relatedTarget: t
							})
						};
						n ? this._activate(n, n.parentNode, s) : s()
					}
				}
			}, t._activate = function(e, t, n) {
				var i = this,
					r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? G.children(t, wi) : G.find(xi, t))[0],
					o = n && r && r.classList.contains("fade"),
					s = function() {
						return i._transitionComplete(e, r, n)
					};
				if (r && o) {
					var a = m(r);
					r.classList.remove("show"), R.one(r, h, s), v(r, a)
				} else s()
			}, t._transitionComplete = function(e, t, n) {
				if (t) {
					t.classList.remove(_i);
					var i = G.findOne(":scope > .dropdown-menu .active", t.parentNode);
					i && i.classList.remove(_i), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
				}(e.classList.add(_i), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), _(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && e.parentNode.classList.contains("dropdown-menu")) && (e.closest(".dropdown") && G.find(".dropdown-toggle").forEach(function(e) {
					return e.classList.add(_i)
				}), e.setAttribute("aria-expanded", !0));
				n && n()
			}, n.jQueryInterface = function(t) {
				return this.each(function() {
					var e = T(this, bi) || new n(this);
					if ("string" == typeof t) {
						if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
						e[t]()
					}
				})
			}, s(n, null, [{
				key: "DATA_KEY",
				get: function() {
					return bi
				}
			}]), n
		}(B);
	R.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function(e) {
		e.preventDefault(), (T(this, bi) || new Ei(this)).show()
	}), e(function() {
		var e = w();
		if (e) {
			var t = e.fn.tab;
			e.fn.tab = Ei.jQueryInterface, e.fn.tab.Constructor = Ei, e.fn.tab.noConflict = function() {
				return e.fn.tab = t, Ei.jQueryInterface
			}
		}
	});
	var Ti = "toast",
		Ci = "bs.toast",
		ki = "." + Ci,
		Ai = "click.dismiss" + ki,
		Si = "show",
		Di = "showing",
		Li = {
			animation: "boolean",
			autohide: "boolean",
			delay: "number"
		},
		ji = {
			animation: !0,
			autohide: !0,
			delay: 5e3
		},
		Oi = function(i) {
			function n(e, t) {
				var n;
				return (n = i.call(this, e) || this)._config = n._getConfig(t), n._timeout = null, n._setListeners(), n
			}
			u(n, i);
			var e = n.prototype;
			return e.show = function() {
				var e = this;
				if (!R.trigger(this._element, "show.bs.toast").defaultPrevented) {
					this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
					var t = function() {
						e._element.classList.remove(Di), e._element.classList.add(Si), R.trigger(e._element, "shown.bs.toast"), e._config.autohide && (e._timeout = setTimeout(function() {
							e.hide()
						}, e._config.delay))
					};
					if (this._element.classList.remove("hide"), _(this._element), this._element.classList.add(Di), this._config.animation) {
						var n = m(this._element);
						R.one(this._element, h, t), v(this._element, n)
					} else t()
				}
			}, e.hide = function() {
				var e = this;
				if (this._element.classList.contains(Si) && !R.trigger(this._element, "hide.bs.toast").defaultPrevented) {
					var t = function() {
						e._element.classList.add("hide"), R.trigger(e._element, "hidden.bs.toast")
					};
					if (this._element.classList.remove(Si), this._config.animation) {
						var n = m(this._element);
						R.one(this._element, h, t), v(this._element, n)
					} else t()
				}
			}, e.dispose = function() {
				this._clearTimeout(), this._element.classList.contains(Si) && this._element.classList.remove(Si), R.off(this._element, Ai), i.prototype.dispose.call(this), this._config = null
			}, e._getConfig = function(e) {
				return e = a({}, ji, V.getDataAttributes(this._element), "object" == typeof e && e ? e : {}), y(Ti, e, this.constructor.DefaultType), e
			}, e._setListeners = function() {
				var e = this;
				R.on(this._element, Ai, '[data-bs-dismiss="toast"]', function() {
					return e.hide()
				})
			}, e._clearTimeout = function() {
				clearTimeout(this._timeout), this._timeout = null
			}, n.jQueryInterface = function(t) {
				return this.each(function() {
					var e = T(this, Ci);
					if (e || (e = new n(this, "object" == typeof t && t)), "string" == typeof t) {
						if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
						e[t](this)
					}
				})
			}, s(n, null, [{
				key: "DefaultType",
				get: function() {
					return Li
				}
			}, {
				key: "Default",
				get: function() {
					return ji
				}
			}, {
				key: "DATA_KEY",
				get: function() {
					return Ci
				}
			}]), n
		}(B);
	return e(function() {
		var e = w();
		if (e) {
			var t = e.fn[Ti];
			e.fn[Ti] = Oi.jQueryInterface, e.fn[Ti].Constructor = Oi, e.fn[Ti].noConflict = function() {
				return e.fn[Ti] = t, Oi.jQueryInterface
			}
		}
	}), {
		Alert: $,
		Button: X,
		Carousel: ce,
		Collapse: be,
		Dropdown: dn,
		Modal: jn,
		Popover: ai,
		ScrollSpy: yi,
		Tab: Ei,
		Toast: Oi,
		Tooltip: Jn
	}
});
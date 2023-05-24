! function(r) {
	var u = r.Markdown = function(t) {
		switch (typeof t) {
			case "undefined":
				this.dialect = u.dialects.Gruber;
				break;
			case "object":
				this.dialect = t;
				break;
			default:
				if (!(t in u.dialects)) throw new Error("Unknown Markdown dialect '" + String(t) + "'");
				this.dialect = u.dialects[t]
		}
		this.em_state = [], this.strong_state = [], this.debug_indent = ""
	};

	function s() {
		return "Markdown.mk_block( " + uneval(this.toString()) + ", " + uneval(this.trailing) + ", " + uneval(this.lineNumber) + " )"
	}

	function l() {
		var t = require("util");
		return "Markdown.mk_block( " + t.inspect(this.toString()) + ", " + t.inspect(this.trailing) + ", " + t.inspect(this.lineNumber) + " )"
	}
	r.parse = function(t, e) {
		return new u(e).toTree(t)
	}, r.toHTML = function(t, e, n) {
		var i = r.toHTMLTree(t, e, n);
		return r.renderJsonML(i)
	}, r.toHTMLTree = function(t, e, n) {
		"string" == typeof t && (t = this.parse(t, e));
		var i = g(t),
			r = {};
		i && i.references && (r = i.references);
		var a = function t(e, n, i) {
			var r;
			i = i || {};
			var a = e.slice(0);
			"function" == typeof i.preprocessTreeNode && (a = i.preprocessTreeNode(a, n));
			var s = g(a);
			if (s) {
				for (r in a[1] = {}, s) a[1][r] = s[r];
				s = a[1]
			}
			if ("string" == typeof a) return a;
			switch (a[0]) {
				case "header":
					a[0] = "h" + a[1].level, delete a[1].level;
					break;
				case "bulletlist":
					a[0] = "ul";
					break;
				case "numberlist":
					a[0] = "ol";
					break;
				case "listitem":
					a[0] = "li";
					break;
				case "para":
					a[0] = "p";
					break;
				case "markdown":
					a[0] = "html", s && delete s.references;
					break;
				case "code_block":
					a[0] = "pre", r = s ? 2 : 1;
					var l = ["code"];
					l.push.apply(l, a.splice(r, a.length - r)), a[r] = l;
					break;
				case "inlinecode":
					a[0] = "code";
					break;
				case "img":
					a[1].src = a[1].href, delete a[1].href;
					break;
				case "linebreak":
					a[0] = "br";
					break;
				case "link":
					a[0] = "a";
					break;
				case "link_ref":
					a[0] = "a";
					var o = n[s.ref];
					if (!o) return s.original;
					delete s.ref, s.href = o.href, o.title && (s.title = o.title), delete s.original;
					break;
				case "img_ref":
					a[0] = "img";
					var o = n[s.ref];
					if (!o) return s.original;
					delete s.ref, s.src = o.href, o.title && (s.title = o.title), delete s.original
			}
			r = 1;
			if (s) {
				for (var c in a[1]) {
					r = 2;
					break
				}
				1 === r && a.splice(r, 1)
			}
			for (; r < a.length; ++r) a[r] = t(a[r], n, i);
			return a
		}(t, r, n);
		return function t(e) {
			var n = g(e) ? 2 : 1;
			for (; n < e.length;) "string" == typeof e[n] ? n + 1 < e.length && "string" == typeof e[n + 1] ? e[n] += e.splice(n + 1, 1)[0] : ++n : (t(e[n]), ++n)
		}(a), a
	};
	var f = u.mk_block = function(t, e, n) {
		1 == arguments.length && (e = "\n\n");
		var i = new String(t);
		return i.trailing = e, i.inspect = l, i.toSource = s, null != n && (i.lineNumber = n), i
	};

	function o(t) {
		for (var e = 0, n = -1; - 1 !== (n = t.indexOf("\n", n + 1));) e++;
		return e
	}

	function t(s, l) {
		var o = s + "_state",
			c = "strong" == s ? "em_state" : "strong_state";

		function h(t) {
			this.len_after = t, this.name = "close_" + l
		}
		return function(t, e) {
			if (this[o][0] == l) return this[o].shift(), [t.length, new h(t.length - l.length)];
			var n = this[c].slice(),
				i = this[o].slice();
			this[o].unshift(l);
			var r = this.processInline(t.substr(l.length)),
				a = r[r.length - 1];
			this[o].shift();
			return a instanceof h ? (r.pop(), [t.length - a.len_after, [s].concat(r)]) : (this[c] = n, this[o] = i, [l.length, l])
		}
	}
	u.prototype.split_blocks = function(t, e) {
		t = t.replace(/(\r\n|\n|\r)/g, "\n");
		var n, i = /([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,
			r = [],
			a = 1;
		for (null != (n = /^(\s*\n)/.exec(t)) && (a += o(n[0]), i.lastIndex = n[0].length); null !== (n = i.exec(t));) "\n#" == n[2] && (n[2] = "\n", i.lastIndex--), r.push(f(n[1], n[2], a)), a += o(n[0]);
		return r
	}, u.prototype.processBlock = function(t, e) {
		var n = this.dialect.block,
			i = n.__order__;
		if ("__call__" in n) return n.__call__.call(this, t, e);
		for (var r = 0; r < i.length; r++) {
			var a = n[i[r]].call(this, t, e);
			if (a) return (!c(a) || 0 < a.length && !c(a[0])) && this.debug(i[r], "didn't return a proper array"), a
		}
		return []
	}, u.prototype.processInline = function(t) {
		return this.dialect.inline.__call__.call(this, String(t))
	}, u.prototype.toTree = function(t, e) {
		var n = t instanceof Array ? t : this.split_blocks(t),
			i = this.tree;
		try {
			for (this.tree = e || this.tree || ["markdown"]; n.length;) {
				var r = this.processBlock(n.shift(), n);
				r.length && this.tree.push.apply(this.tree, r)
			}
			return this.tree
		} finally {
			e && (this.tree = i)
		}
	}, u.prototype.debug = function() {
		var t = Array.prototype.slice.call(arguments);
		t.unshift(this.debug_indent), "undefined" != typeof print && print.apply(print, t), "undefined" != typeof console && void 0 !== console.log && console.log.apply(null, t)
	}, u.prototype.loop_re_over_block = function(t, e, n) {
		for (var i, r = e.valueOf(); r.length && null != (i = t.exec(r));) r = r.substr(i[0].length), n.call(this, i);
		return r
	}, u.dialects = {}, u.dialects.Gruber = {
		block: {
			atxHeader: function(t, e) {
				var n = t.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);
				if (n) {
					var i = ["header", {
						level: n[1].length
					}];
					return Array.prototype.push.apply(i, this.processInline(n[2])), n[0].length < t.length && e.unshift(f(t.substr(n[0].length), t.trailing, t.lineNumber + 2)), [i]
				}
			},
			setextHeader: function(t, e) {
				var n = t.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);
				if (n) {
					var i = ["header", {
						level: "=" === n[2] ? 1 : 2
					}, n[1]];
					return n[0].length < t.length && e.unshift(f(t.substr(n[0].length), t.trailing, t.lineNumber + 2)), [i]
				}
			},
			code: function(t, e) {
				var n = [],
					i = /^(?: {0,3}\t| {4})(.*)\n?/;
				if (t.match(i)) {
					t: for (;;) {
						var r = this.loop_re_over_block(i, t.valueOf(), function(t) {
							n.push(t[1])
						});
						if (r.length) {
							e.unshift(f(r, t.trailing));
							break t
						}
						if (!e.length) break t;
						if (!e[0].match(i)) break t;
						n.push(t.trailing.replace(/[^\n]/g, "").substring(2)), t = e.shift()
					}
					return [
						["code_block", n.join("\n")]
					]
				}
			},
			horizRule: function(t, e) {
				var n = t.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);
				if (n) {
					var i = [
						["hr"]
					];
					return n[1] && i.unshift.apply(i, this.processBlock(n[1], [])), n[3] && e.unshift(f(n[3])), i
				}
			},
			lists: function() {
				var w = "[*+-]|\\d+\\.",
					$ = /[*+-]/,
					x = new RegExp("^( {0,3})(" + w + ")[ \t]+"),
					S = "(?: {0,3}\\t| {4})";

				function C(t, e, n, i) {
					if (e) t.push(["para"].concat(n));
					else {
						var r = t[t.length - 1] instanceof Array && "para" == t[t.length - 1][0] ? t[t.length - 1] : t;
						i && 1 < t.length && n.unshift(i);
						for (var a = 0; a < n.length; a++) {
							var s = n[a];
							"string" == typeof s && 1 < r.length && "string" == typeof r[r.length - 1] ? r[r.length - 1] += s : r.push(s)
						}
					}
				}

				function B(t, e) {
					for (var n = new RegExp("^(" + S + "{" + t + "}.*?\\n?)*$"), i = new RegExp("^" + S + "{" + t + "}", "gm"), r = []; 0 < e.length && n.exec(e[0]);) {
						var a = e.shift(),
							s = a.replace(i, "");
						r.push(f(s, a.trailing, a.lineNumber))
					}
					return r
				}

				function z(t, e, n) {
					var i = t.list,
						r = i[i.length - 1];
					if (!(r[1] instanceof Array && "para" == r[1][0]))
						if (e + 1 == n.length) r.push(["para"].concat(r.splice(1, r.length - 1)));
						else {
							var a = r.pop();
							r.push(["para"].concat(r.splice(1, r.length - 1)), a)
						}
				}
				return function(t, e) {
					var n = t.match(x);
					if (n) {
						for (var i, r, a, s = [], l = y(n), o = !1, c = [s[0].list];;) {
							for (var h = t.split(/(?=\n)/), u = "", f = 0; f < h.length; f++) {
								var d = "",
									p = h[f].replace(/^\n/, function(t) {
										return d = t, ""
									}),
									g = (a = s.length, new RegExp("(?:^(" + S + "{0," + a + "} {0,3})(" + w + ")\\s+)|(^" + S + "{0," + (a - 1) + "}[ ]{0,4})"));
								if (void 0 !== (n = p.match(g))[1]) {
									u.length && (C(i, o, this.processInline(u), d), o = !1, u = ""), n[1] = n[1].replace(/ {0,3}\t/g, "    ");
									var v = Math.floor(n[1].length / 4) + 1;
									if (v > s.length) l = y(n), i.push(l), i = l[1] = ["listitem"];
									else {
										var b = !1;
										for (r = 0; r < s.length; r++)
											if (s[r].indent == n[1]) {
												l = s[r].list, s.splice(r + 1, s.length - (r + 1)), b = !0;
												break
											} b || (++v <= s.length ? (s.splice(v, s.length - v), l = s[v - 1].list) : (l = y(n), i.push(l))), i = ["listitem"], l.push(i)
									}
									d = ""
								}
								p.length > n[0].length && (u += d + p.substr(n[0].length))
							}
							u.length && (C(i, o, this.processInline(u), d), o = !1, u = "");
							var m = B(s.length, e);
							0 < m.length && (j(s, z, this), i.push.apply(i, this.toTree(m, [])));
							var _ = e[0] && e[0].valueOf() || "";
							if (!_.match(x) && !_.match(/^ /)) break;
							t = e.shift();
							var k = this.dialect.block.horizRule(t, e);
							if (k) {
								c.push.apply(c, k);
								break
							}
							j(s, z, this), o = !0
						}
						return c
					}

					function y(t) {
						var e = $.exec(t[2]) ? ["bulletlist"] : ["numberlist"];
						return s.push({
							list: e,
							indent: t[1]
						}), e
					}
				}
			}(),
			blockquote: function(t, e) {
				if (t.match(/^>/m)) {
					var n = [];
					if (">" != t[0]) {
						for (var i = t.split(/\n/), r = [], a = t.lineNumber; i.length && ">" != i[0][0];) r.push(i.shift()), a++;
						var s = f(r.join("\n"), "\n", t.lineNumber);
						n.push.apply(n, this.processBlock(s, [])), t = f(i.join("\n"), t.trailing, a)
					}
					for (; e.length && ">" == e[0][0];) {
						var l = e.shift();
						t = f(t + t.trailing + l, l.trailing, t.lineNumber)
					}
					var o = t.replace(/^> ?/gm, ""),
						c = (this.tree, this.toTree(o, ["blockquote"])),
						h = g(c);
					return h && h.references && (delete h.references, d(h) && c.splice(1, 1)), n.push(c), n
				}
			},
			referenceDefn: function(t, e) {
				var n = /^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;
				if (t.match(n)) {
					g(this.tree) || this.tree.splice(1, 0, {});
					var i = g(this.tree);
					void 0 === i.references && (i.references = {});
					var r = this.loop_re_over_block(n, t, function(t) {
						t[2] && "<" == t[2][0] && ">" == t[2][t[2].length - 1] && (t[2] = t[2].substring(1, t[2].length - 1));
						var e = i.references[t[1].toLowerCase()] = {
							href: t[2]
						};
						void 0 !== t[4] ? e.title = t[4] : void 0 !== t[5] && (e.title = t[5])
					});
					return r.length && e.unshift(f(r, t.trailing)), []
				}
			},
			para: function(t, e) {
				return [
					["para"].concat(this.processInline(t))
				]
			}
		}
	}, u.dialects.Gruber.inline = {
		__oneElement__: function(t, e, n) {
			var i, r;
			return e = e || this.dialect.inline.__patterns__, (i = new RegExp("([\\s\\S]*?)(" + (e.source || e) + ")").exec(t)) ? i[1] ? [i[1].length, i[1]] : (i[2] in this.dialect.inline && (r = this.dialect.inline[i[2]].call(this, t.substr(i.index), i, n || [])), r = r || [i[2].length, i[2]]) : [t.length, t]
		},
		__call__: function(t, e) {
			var n, i = [];

			function r(t) {
				"string" == typeof t && "string" == typeof i[i.length - 1] ? i[i.length - 1] += t : i.push(t)
			}
			for (; 0 < t.length;) n = this.dialect.inline.__oneElement__.call(this, t, e, i), t = t.substr(n.shift()), j(n, r);
			return i
		},
		"]": function() {},
		"}": function() {},
		__escape__: /^\\[\\`\*_{}\[\]()#\+.!\-]/,
		"\\": function(t) {
			return this.dialect.inline.__escape__.exec(t) ? [2, t.charAt(1)] : [1, "\\"]
		},
		"![": function(t) {
			var e = t.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);
			if (e) {
				e[2] && "<" == e[2][0] && ">" == e[2][e[2].length - 1] && (e[2] = e[2].substring(1, e[2].length - 1)), e[2] = this.dialect.inline.__call__.call(this, e[2], /\\/)[0];
				var n = {
					alt: e[1],
					href: e[2] || ""
				};
				return void 0 !== e[4] && (n.title = e[4]), [e[0].length, ["img", n]]
			}
			return (e = t.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/)) ? [e[0].length, ["img_ref", {
				alt: e[1],
				ref: e[2].toLowerCase(),
				original: e[0]
			}]] : [2, "!["]
		},
		"[": function(t) {
			var e = String(t),
				n = u.DialectHelpers.inline_until_char.call(this, t.substr(1), "]");
			if (!n) return [1, "["];
			var i, r, a = 1 + n[0],
				s = n[1],
				l = (t = t.substr(a)).match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);
			if (l) {
				var o = l[1];
				if (a += l[0].length, o && "<" == o[0] && ">" == o[o.length - 1] && (o = o.substring(1, o.length - 1)), !l[3])
					for (var c = 1, h = 0; h < o.length; h++) switch (o[h]) {
						case "(":
							c++;
							break;
						case ")":
							0 == --c && (a -= o.length - h, o = o.substring(0, h))
					}
				return r = {
					href: (o = this.dialect.inline.__call__.call(this, o, /\\/)[0]) || ""
				}, void 0 !== l[3] && (r.title = l[3]), i = ["link", r].concat(s), [a, i]
			}
			return (l = t.match(/^\s*\[(.*?)\]/)) ? (a += l[0].length, i = ["link_ref", r = {
				ref: (l[1] || String(s)).toLowerCase(),
				original: e.substr(0, a)
			}].concat(s), [a, i]) : 1 == s.length && "string" == typeof s[0] ? (i = ["link_ref", r = {
				ref: s[0].toLowerCase(),
				original: e.substr(0, a)
			}, s[0]], [a, i]) : [1, "["]
		},
		"<": function(t) {
			var e;
			return null != (e = t.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/)) ? e[3] ? [e[0].length, ["link", {
				href: "mailto:" + e[3]
			}, e[3]]] : "mailto" == e[2] ? [e[0].length, ["link", {
				href: e[1]
			}, e[1].substr("mailto:".length)]] : [e[0].length, ["link", {
				href: e[1]
			}, e[1]]] : [1, "<"]
		},
		"`": function(t) {
			var e = t.match(/(`+)(([\s\S]*?)\1)/);
			return e && e[2] ? [e[1].length + e[2].length, ["inlinecode", e[3]]] : [1, "`"]
		},
		"  \n": function(t) {
			return [3, ["linebreak"]]
		}
	}, u.dialects.Gruber.inline["**"] = t("strong", "**"), u.dialects.Gruber.inline.__ = t("strong", "__"), u.dialects.Gruber.inline["*"] = t("em", "*"), u.dialects.Gruber.inline._ = t("em", "_"), u.buildBlockOrder = function(t) {
		var e = [];
		for (var n in t) "__order__" != n && "__call__" != n && e.push(n);
		t.__order__ = e
	}, u.buildInlinePatterns = function(t) {
		var n = [];
		for (var e in t)
			if (!e.match(/^__.*__$/)) {
				var i = e.replace(/([\\.*+?|()\[\]{}])/g, "\\$1").replace(/\n/, "\\n");
				n.push(1 == e.length ? i : "(?:" + i + ")")
			} n = n.join("|"), t.__patterns__ = n;
		var r = t.__call__;
		t.__call__ = function(t, e) {
			return null != e ? r.call(this, t, e) : r.call(this, t, n)
		}
	}, u.DialectHelpers = {}, u.DialectHelpers.inline_until_char = function(t, e) {
		for (var n = 0, i = [];;) {
			if (t.charAt(n) == e) return [++n, i];
			if (n >= t.length) return null;
			var r = this.dialect.inline.__oneElement__.call(this, t.substr(n));
			n += r[0], i.push.apply(i, r.slice(1))
		}
	}, u.subclassDialect = function(t) {
		function e() {}

		function n() {}
		return e.prototype = t.block, n.prototype = t.inline, {
			block: new e,
			inline: new n
		}
	}, u.buildBlockOrder(u.dialects.Gruber.block), u.buildInlinePatterns(u.dialects.Gruber.inline), u.dialects.Maruku = u.subclassDialect(u.dialects.Gruber), u.dialects.Maruku.processMetaHash = function(t) {
		for (var e = function(t) {
				var e = t.split(""),
					n = [""],
					i = !1;
				for (; e.length;) {
					var r = e.shift();
					switch (r) {
						case " ":
							i ? n[n.length - 1] += r : n.push("");
							break;
						case "'":
						case '"':
							i = !i;
							break;
						case "\\":
							r = e.shift();
						default:
							n[n.length - 1] += r
					}
				}
				return n
			}(t), n = {}, i = 0; i < e.length; ++i)
			if (/^#/.test(e[i])) n.id = e[i].substring(1);
			else if (/^\./.test(e[i])) n.class ? n.class = n.class + e[i].replace(/./, " ") : n.class = e[i].substring(1);
		else if (/\=/.test(e[i])) {
			var r = e[i].split(/\=/);
			n[r[0]] = r[1]
		}
		return n
	}, u.dialects.Maruku.block.document_meta = function(t, e) {
		if (!(1 < t.lineNumber) && t.match(/^(?:\w+:.*\n)*\w+:.*$/)) {
			g(this.tree) || this.tree.splice(1, 0, {});
			var n = t.split(/\n/);
			for (p in n) {
				var i = n[p].match(/(\w+):\s*(.*)$/),
					r = i[1].toLowerCase(),
					a = i[2];
				this.tree[1][r] = a
			}
			return []
		}
	}, u.dialects.Maruku.block.block_meta = function(t, e) {
		var n = t.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);
		if (n) {
			var i, r = this.dialect.processMetaHash(n[2]);
			if ("" === n[1]) {
				var s = this.tree[this.tree.length - 1];
				if (i = g(s), "string" == typeof s) return;
				for (a in i || (i = {}, s.splice(1, 0, i)), r) i[a] = r[a];
				return []
			}
			var l = t.replace(/\n.*$/, ""),
				o = this.processBlock(l, []);
			for (a in (i = g(o[0])) || (i = {}, o[0].splice(1, 0, i)), r) i[a] = r[a];
			return o
		}
	}, u.dialects.Maruku.block.definition_list = function(t, e) {
		var n, i = /^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,
			r = ["dl"];
		if (l = t.match(i)) {
			for (var a = [t]; e.length && i.exec(e[0]);) a.push(e.shift());
			for (var s = 0; s < a.length; ++s) {
				var l, o = (l = a[s].match(i))[1].replace(/\n$/, "").split(/\n/),
					c = l[2].split(/\n:\s+/);
				for (n = 0; n < o.length; ++n) r.push(["dt", o[n]]);
				for (n = 0; n < c.length; ++n) r.push(["dd"].concat(this.processInline(c[n].replace(/(\n)\s+/, "$1"))))
			}
			return [r]
		}
	}, u.dialects.Maruku.block.table = function(t, e) {
		var n, i, r = function(t, e) {
			(e = e || "\\s").match(/^[\\|\[\]{}?*.+^$]$/) && (e = "\\" + e);
			for (var n, i = [], r = new RegExp("^((?:\\\\.|[^\\\\" + e + "])*)" + e + "(.*)"); n = t.match(r);) i.push(n[1]), t = n[2];
			return i.push(t), i
		};
		if (i = t.match(/^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/)) i[3] = i[3].replace(/^\s*\|/gm, "");
		else if (!(i = t.match(/^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/))) return;
		var a = ["table", ["thead", ["tr"]],
			["tbody"]
		];
		i[2] = i[2].replace(/\|\s*$/, "").split("|");
		var s = [];
		for (j(i[2], function(t) {
				t.match(/^\s*-+:\s*$/) ? s.push({
					align: "right"
				}) : t.match(/^\s*:-+\s*$/) ? s.push({
					align: "left"
				}) : t.match(/^\s*:-+:\s*$/) ? s.push({
					align: "center"
				}) : s.push({})
			}), i[1] = r(i[1].replace(/\|\s*$/, ""), "|"), n = 0; n < i[1].length; n++) a[1][1].push(["th", s[n] || {}].concat(this.processInline(i[1][n].trim())));
		return j(i[3].replace(/\|\s*$/gm, "").split("\n"), function(t) {
			var e = ["tr"];
			for (t = r(t, "|"), n = 0; n < t.length; n++) e.push(["td", s[n] || {}].concat(this.processInline(t[n].trim())));
			a[2].push(e)
		}, this), [a]
	}, u.dialects.Maruku.inline["{:"] = function(t, e, n) {
		if (!n.length) return [2, "{:"];
		var i = n[n.length - 1];
		if ("string" == typeof i) return [2, "{:"];
		var r = t.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);
		if (!r) return [2, "{:"];
		var a = this.dialect.processMetaHash(r[1]),
			s = g(i);
		for (var l in s || (s = {}, i.splice(1, 0, s)), a) s[l] = a[l];
		return [r[0].length, ""]
	}, u.dialects.Maruku.inline.__escape__ = /^\\[\\`\*_{}\[\]()#\+.!\-|:]/, u.buildBlockOrder(u.dialects.Maruku.block), u.buildInlinePatterns(u.dialects.Maruku.inline);
	var j, c = Array.isArray || function(t) {
		return "[object Array]" == Object.prototype.toString.call(t)
	};
	j = Array.prototype.forEach ? function(t, e, n) {
		return t.forEach(e, n)
	} : function(t, e, n) {
		for (var i = 0; i < t.length; i++) e.call(n || t, t[i], i, t)
	};
	var d = function(t) {
		for (var e in t)
			if (hasOwnProperty.call(t, e)) return !1;
		return !0
	};

	function g(t) {
		return c(t) && 1 < t.length && "object" == typeof t[1] && !c(t[1]) ? t[1] : void 0
	}

	function h(t) {
		return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
	}

	function v(t) {
		if ("string" == typeof t) return h(t);
		var e = t.shift(),
			n = {},
			i = [];
		for (!t.length || "object" != typeof t[0] || t[0] instanceof Array || (n = t.shift()); t.length;) i.push(v(t.shift()));
		var r = "";
		for (var a in n) r += " " + a + '="' + h(n[a]) + '"';
		return "img" == e || "br" == e || "hr" == e ? "<" + e + r + "/>" : "<" + e + r + ">" + i.join("") + "</" + e + ">"
	}
	r.renderJsonML = function(t, e) {
		(e = e || {}).root = e.root || !1;
		var n = [];
		if (e.root) n.push(v(t));
		else
			for (t.shift(), !t.length || "object" != typeof t[0] || t[0] instanceof Array || t.shift(); t.length;) n.push(v(t.shift()));
		return n.join("\n\n")
	}
}("undefined" == typeof exports ? (window.markdown = {}, window.markdown) : exports),
function(t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery)
}(function(y) {
	"use strict";
	var r = function(n, i) {
		y.each(["autofocus", "savable", "hideable", "width", "height", "resize", "iconlibrary", "language", "footer", "fullscreen", "hiddenButtons", "disabledButtons"], function(t, e) {
			void 0 !== y(n).data(e) && ((i = "object" == typeof i ? i : {})[e] = y(n).data(e))
		}), this.$ns = "bootstrap-markdown", this.$element = y(n), this.$editable = {
			el: null,
			type: null,
			attrKeys: [],
			attrValues: [],
			content: null
		}, this.$options = y.extend(!0, {}, y.fn.markdown.defaults, i, this.$element.data("options")), this.$oldContent = null, this.$isPreview = !1, this.$isFullscreen = !1, this.$editor = null, this.$textarea = null, this.$handler = [], this.$callback = [], this.$nextTab = [], this.showEditor()
	};
	r.prototype = {
		constructor: r,
		__alterButtons: function(n, i) {
			var t = this.$handler,
				r = "all" == n,
				a = this;
			y.each(t, function(t, e) {
				!1 === (!r && e.indexOf(n) < 0) && i(a.$editor.find('button[data-handler="' + e + '"]'))
			})
		},
		__buildButtons: function(t, e) {
			var n, i = this.$ns,
				r = this.$handler,
				a = this.$callback;
			for (n = 0; n < t.length; n++) {
				var s, l = t[n];
				for (s = 0; s < l.length; s++) {
					var o, c = l[s].data,
						h = y("<div/>", {
							class: "btn-group"
						});
					for (o = 0; o < c.length; o++) {
						var u, f, d = c[o],
							p = i + "-" + d.name,
							g = this.__getIcon(d.icon),
							v = d.btnText ? d.btnText : "",
							b = d.btnClass ? d.btnClass : "btn",
							m = d.tabIndex ? d.tabIndex : "-1",
							_ = void 0 !== d.hotkey ? d.hotkey : "",
							k = void 0 !== jQuery.hotkeys && "" !== _ ? " (" + _ + ")" : "";
						(u = y("<button></button>")).text(" " + this.__localize(v)).addClass("btn-default btn-sm").addClass(b), b.match(/btn\-(primary|success|info|warning|danger|link)/) && u.removeClass("btn-default"), u.attr({
							type: "button",
							title: this.__localize(d.title) + k,
							tabindex: m,
							"data-provider": i,
							"data-handler": p,
							"data-hotkey": _
						}), !0 === d.toggle && u.attr("data-toggle", "button"), (f = y("<span/>")).addClass(g), f.prependTo(u), h.append(u), r.push(p), a.push(d.callback)
					}
					e.append(h)
				}
			}
			return e
		},
		__setListener: function() {
			var t = void 0 !== this.$textarea.attr("rows"),
				e = 5 < this.$textarea.val().split("\n").length ? this.$textarea.val().split("\n").length : "5",
				n = t ? this.$textarea.attr("rows") : e;
			this.$textarea.attr("rows", n), this.$options.resize && this.$textarea.css("resize", this.$options.resize), this.$textarea.on({
				focus: y.proxy(this.focus, this),
				keyup: y.proxy(this.keyup, this),
				change: y.proxy(this.change, this),
				select: y.proxy(this.select, this)
			}), this.eventSupported("keydown") && this.$textarea.on("keydown", y.proxy(this.keydown, this)), this.eventSupported("keypress") && this.$textarea.on("keypress", y.proxy(this.keypress, this)), this.$textarea.data("markdown", this)
		},
		__handle: function(t) {
			var e = y(t.currentTarget),
				n = this.$handler,
				i = this.$callback,
				r = e.attr("data-handler"),
				a = i[n.indexOf(r)];
			y(t.currentTarget).focus(), a(this), this.change(this), r.indexOf("cmdSave") < 0 && this.$textarea.focus(), t.preventDefault()
		},
		__localize: function(t) {
			var e = y.fn.markdown.messages,
				n = this.$options.language;
			return void 0 !== e && void 0 !== e[n] && void 0 !== e[n][t] ? e[n][t] : t
		},
		__getIcon: function(t) {
			return "object" == typeof t ? t[this.$options.iconlibrary] : t
		},
		setFullscreen: function(t) {
			var e = this.$editor,
				n = this.$textarea;
			!0 === t ? (e.addClass("md-fullscreen-mode"), y("body").addClass("md-nooverflow"), this.$options.onFullscreen(this)) : (e.removeClass("md-fullscreen-mode"), y("body").removeClass("md-nooverflow"), 1 == this.$isPreview && this.hidePreview().showPreview()), this.$isFullscreen = t, n.focus()
		},
		showEditor: function() {
			var n, e = this,
				t = this.$ns,
				i = this.$element,
				r = (i.css("height"), i.css("width"), this.$editable),
				a = this.$handler,
				s = this.$callback,
				l = this.$options,
				o = y("<div/>", {
					class: "md-editor",
					click: function() {
						e.focus()
					}
				});
			if (null === this.$editor) {
				var c = y("<div/>", {
						class: "md-header btn-toolbar"
					}),
					h = [];
				if (0 < l.buttons.length && (h = h.concat(l.buttons[0])), 0 < l.additionalButtons.length && y.each(l.additionalButtons[0], function(t, n) {
						var e = y.grep(h, function(t, e) {
							return t.name === n.name
						});
						0 < e.length ? e[0].data = e[0].data.concat(n.data) : h.push(l.additionalButtons[0][t])
					}), 0 < l.reorderButtonGroups.length && (h = h.filter(function(t) {
						return -1 < l.reorderButtonGroups.indexOf(t.name)
					}).sort(function(t, e) {
						return l.reorderButtonGroups.indexOf(t.name) < l.reorderButtonGroups.indexOf(e.name) ? -1 : l.reorderButtonGroups.indexOf(t.name) > l.reorderButtonGroups.indexOf(e.name) ? 1 : 0
					})), 0 < h.length && (c = this.__buildButtons([h], c)), l.fullscreen.enable && c.append('<div class="md-controls"><a class="md-control md-control-fullscreen" href="#"><span class="' + this.__getIcon(l.fullscreen.icons.fullscreenOn) + '"></span></a></div>').on("click", ".md-control-fullscreen", function(t) {
						t.preventDefault(), e.setFullscreen(!0)
					}), o.append(c), i.is("textarea")) i.before(o), (n = i).addClass("md-input"), o.append(n);
				else {
					var u = "function" == typeof toMarkdown ? toMarkdown(i.html()) : i.html(),
						f = y.trim(u);
					n = y("<textarea/>", {
						class: "md-input",
						val: f
					}), o.append(n), r.el = i, r.type = i.prop("tagName").toLowerCase(), r.content = i.html(), y(i[0].attributes).each(function() {
						r.attrKeys.push(this.nodeName), r.attrValues.push(this.nodeValue)
					}), i.replaceWith(o)
				}
				var d, p = y("<div/>", {
						class: "md-footer"
					}),
					g = !1;
				if (l.savable) {
					g = !0;
					var v = "cmdSave";
					a.push(v), s.push(l.onSave), p.append('<button class="btn btn-success" data-provider="' + t + '" data-handler="' + v + '"><i class="icon icon-white icon-ok"></i> ' + this.__localize("Save") + "</button>")
				}
				if (d = "function" == typeof l.footer ? l.footer(this) : l.footer, "" !== y.trim(d) && (g = !0, p.append(d)), g && o.append(p), l.width && "inherit" !== l.width && (jQuery.isNumeric(l.width) ? (o.css("display", "table"), n.css("width", l.width + "px")) : o.addClass(l.width)), l.height && "inherit" !== l.height)
					if (jQuery.isNumeric(l.height)) {
						var b = l.height;
						c && (b = Math.max(0, b - c.outerHeight())), p && (b = Math.max(0, b - p.outerHeight())), n.css("height", b + "px")
					} else o.addClass(l.height);
				this.$editor = o, this.$textarea = n, this.$editable = r, this.$oldContent = this.getContent(), this.__setListener(), this.$editor.attr("id", (new Date).getTime()), this.$editor.on("click", '[data-provider="bootstrap-markdown"]', y.proxy(this.__handle, this)), (this.$element.is(":disabled") || this.$element.is("[readonly]")) && (this.$editor.addClass("md-editor-disabled"), this.disableButtons("all")), this.eventSupported("keydown") && "object" == typeof jQuery.hotkeys && c.find('[data-provider="bootstrap-markdown"]').each(function() {
					var t = y(this),
						e = t.attr("data-hotkey");
					"" !== e.toLowerCase() && n.bind("keydown", e, function() {
						return t.trigger("click"), !1
					})
				}), "preview" === l.initialstate ? this.showPreview() : "fullscreen" === l.initialstate && l.fullscreen.enable && this.setFullscreen(!0)
			} else this.$editor.show();
			return l.autofocus && (this.$textarea.focus(), this.$editor.addClass("active")), l.fullscreen.enable && !1 !== l.fullscreen && (this.$editor.append('<div class="md-fullscreen-controls"><a href="#" class="exit-fullscreen" title="Exit fullscreen"><span class="' + this.__getIcon(l.fullscreen.icons.fullscreenOff) + '"></span></a></div>'), this.$editor.on("click", ".exit-fullscreen", function(t) {
				t.preventDefault(), e.setFullscreen(!1)
			})), this.hideButtons(l.hiddenButtons), this.disableButtons(l.disabledButtons), l.onShow(this), this
		},
		parseContent: function(t) {
			t = t || this.$textarea.val();
			return this.$options.parser ? this.$options.parser(t) : "object" == typeof markdown ? markdown.toHTML(t) : "function" == typeof marked ? marked(t) : t
		},
		showPreview: function() {
			var t, e, n = this.$options,
				i = this.$textarea,
				r = i.next(),
				a = y("<div/>", {
					class: "md-preview",
					"data-provider": "markdown-preview"
				});
			return 1 == this.$isPreview || (this.$isPreview = !0, this.disableButtons("all").enableButtons("cmdPreview"), t = "string" == typeof(e = n.onPreview(this)) ? e : this.parseContent(), a.html(t), r && "md-footer" == r.attr("class") ? a.insertBefore(r) : i.parent().append(a), a.css({
				width: i.outerWidth() + "px",
				height: i.outerHeight() + "px"
			}), this.$options.resize && a.css("resize", this.$options.resize), i.hide(), a.data("markdown", this), (this.$element.is(":disabled") || this.$element.is("[readonly]")) && (this.$editor.addClass("md-editor-disabled"), this.disableButtons("all"))), this
		},
		hidePreview: function() {
			return this.$isPreview = !1, this.$editor.find('div[data-provider="markdown-preview"]').remove(), this.enableButtons("all"), this.disableButtons(this.$options.disabledButtons), this.$textarea.show(), this.__setListener(), this
		},
		isDirty: function() {
			return this.$oldContent != this.getContent()
		},
		getContent: function() {
			return this.$textarea.val()
		},
		setContent: function(t) {
			return this.$textarea.val(t), this
		},
		findSelection: function(t) {
			var e;
			if (0 <= (e = this.getContent().indexOf(t)) && 0 < t.length) {
				var n, i = this.getSelection();
				return this.setSelection(e, e + t.length), n = this.getSelection(), this.setSelection(i.start, i.end), n
			}
			return null
		},
		getSelection: function() {
			var e = this.$textarea[0];
			return ("selectionStart" in e && function() {
				var t = e.selectionEnd - e.selectionStart;
				return {
					start: e.selectionStart,
					end: e.selectionEnd,
					length: t,
					text: e.value.substr(e.selectionStart, t)
				}
			} || function() {
				return null
			})()
		},
		setSelection: function(t, e) {
			var n = this.$textarea[0];
			return ("selectionStart" in n && function() {
				n.selectionStart = t, n.selectionEnd = e
			} || function() {
				return null
			})()
		},
		replaceSelection: function(t) {
			var e = this.$textarea[0];
			return ("selectionStart" in e && function() {
				return e.value = e.value.substr(0, e.selectionStart) + t + e.value.substr(e.selectionEnd, e.value.length), e.selectionStart = e.value.length, this
			} || function() {
				return e.value += t, jQuery(e)
			})()
		},
		getNextTab: function() {
			if (0 === this.$nextTab.length) return null;
			var t, e = this.$nextTab.shift();
			return "function" == typeof e ? t = e() : "object" == typeof e && 0 < e.length && (t = e), t
		},
		setNextTab: function(t, e) {
			if ("string" == typeof t) {
				var n = this;
				this.$nextTab.push(function() {
					return n.findSelection(t)
				})
			} else if ("number" == typeof t && "number" == typeof e) {
				var i = this.getSelection();
				this.setSelection(t, e), this.$nextTab.push(this.getSelection()), this.setSelection(i.start, i.end)
			}
		},
		__parseButtonNameParam: function(t) {
			return "string" == typeof t ? t.split(" ") : t
		},
		enableButtons: function(t) {
			var n = this.__parseButtonNameParam(t),
				i = this;
			return y.each(n, function(t, e) {
				i.__alterButtons(n[t], function(t) {
					t.removeAttr("disabled")
				})
			}), this
		},
		disableButtons: function(t) {
			var n = this.__parseButtonNameParam(t),
				i = this;
			return y.each(n, function(t, e) {
				i.__alterButtons(n[t], function(t) {
					t.attr("disabled", "disabled")
				})
			}), this
		},
		hideButtons: function(t) {
			var n = this.__parseButtonNameParam(t),
				i = this;
			return y.each(n, function(t, e) {
				i.__alterButtons(n[t], function(t) {
					t.addClass("hidden")
				})
			}), this
		},
		showButtons: function(t) {
			var n = this.__parseButtonNameParam(t),
				i = this;
			return y.each(n, function(t, e) {
				i.__alterButtons(n[t], function(t) {
					t.removeClass("hidden")
				})
			}), this
		},
		eventSupported: function(t) {
			var e = t in this.$element;
			return e || (this.$element.setAttribute(t, "return;"), e = "function" == typeof this.$element[t]), e
		},
		keyup: function(t) {
			var e = !1;
			switch (t.keyCode) {
				case 40:
				case 38:
				case 16:
				case 17:
				case 18:
					break;
				case 9:
					var n;
					if (null !== (n = this.getNextTab())) {
						var i = this;
						setTimeout(function() {
							i.setSelection(n.start, n.end)
						}, 500), e = !0
					} else {
						var r = this.getSelection();
						e = (r.start != r.end || r.end != this.getContent().length) && (this.setSelection(this.getContent().length, this.getContent().length), !0)
					}
					break;
				case 13:
					e = !1;
					break;
				case 27:
					this.$isFullscreen && this.setFullscreen(!1), e = !1;
					break;
				default:
					e = !1
			}
			e && (t.stopPropagation(), t.preventDefault()), this.$options.onChange(this)
		},
		change: function(t) {
			return this.$options.onChange(this), this
		},
		select: function(t) {
			return this.$options.onSelect(this), this
		},
		focus: function(t) {
			var e = this.$options,
				n = (e.hideable, this.$editor);
			return n.addClass("active"), y(document).find(".md-editor").each(function() {
				var t;
				y(this).attr("id") !== n.attr("id") && (null === (t = y(this).find("textarea").data("markdown")) && (t = y(this).find('div[data-provider="markdown-preview"]').data("markdown")), t && t.blur())
			}), e.onFocus(this), this
		},
		blur: function(t) {
			var e = this.$options,
				n = e.hideable,
				i = this.$editor,
				r = this.$editable;
			if (i.hasClass("active") || 0 === this.$element.parent().length) {
				if (i.removeClass("active"), n)
					if (null !== r.el) {
						var a = y("<" + r.type + "/>"),
							s = this.getContent(),
							l = this.parseContent(s);
						y(r.attrKeys).each(function(t, e) {
							a.attr(r.attrKeys[t], r.attrValues[t])
						}), a.html(l), i.replaceWith(a)
					} else i.hide();
				e.onBlur(this)
			}
			return this
		}
	};
	var t = y.fn.markdown;
	y.fn.markdown = function(i) {
		return this.each(function() {
			var t = y(this),
				e = t.data("markdown"),
				n = "object" == typeof i && i;
			e || t.data("markdown", e = new r(this, n))
		})
	}, y.fn.markdown.messages = {}, y.fn.markdown.defaults = {
		autofocus: !1,
		hideable: !1,
		savable: !1,
		width: "inherit",
		height: "inherit",
		resize: "none",
		iconlibrary: "glyph",
		language: "en",
		initialstate: "editor",
		parser: null,
		buttons: [
			[{
				name: "groupFont",
				data: [{
					name: "cmdBold",
					hotkey: "Ctrl+B",
					title: "Bold",
					icon: {
						glyph: "glyphicon glyphicon-bold",
						fa: "fa fa-bold",
						"fa-3": "icon-bold"
					},
					callback: function(t) {
						var e, n, i = t.getSelection(),
							r = t.getContent();
						e = 0 === i.length ? t.__localize("strong text") : i.text, n = "**" === r.substr(i.start - 2, 2) && "**" === r.substr(i.end, 2) ? (t.setSelection(i.start - 2, i.end + 2), t.replaceSelection(e), i.start - 2) : (t.replaceSelection("**" + e + "**"), i.start + 2), t.setSelection(n, n + e.length)
					}
				}, {
					name: "cmdItalic",
					title: "Italic",
					hotkey: "Ctrl+I",
					icon: {
						glyph: "glyphicon glyphicon-italic",
						fa: "fa fa-italic",
						"fa-3": "icon-italic"
					},
					callback: function(t) {
						var e, n, i = t.getSelection(),
							r = t.getContent();
						e = 0 === i.length ? t.__localize("emphasized text") : i.text, n = "_" === r.substr(i.start - 1, 1) && "_" === r.substr(i.end, 1) ? (t.setSelection(i.start - 1, i.end + 1), t.replaceSelection(e), i.start - 1) : (t.replaceSelection("_" + e + "_"), i.start + 1), t.setSelection(n, n + e.length)
					}
				}, {
					name: "cmdHeading",
					title: "Heading",
					hotkey: "Ctrl+H",
					icon: {
						glyph: "glyphicon glyphicon-header",
						fa: "fa fa-header",
						"fa-3": "icon-font"
					},
					callback: function(t) {
						var e, n, i, r, a = t.getSelection(),
							s = t.getContent();
						e = 0 === a.length ? t.__localize("heading text") : a.text + "\n", i = 4, n = "### " === s.substr(a.start - i, i) || (i = 3, "###" === s.substr(a.start - i, i)) ? (t.setSelection(a.start - i, a.end), t.replaceSelection(e), a.start - i) : 0 < a.start && ((r = s.substr(a.start - 1, 1)) && "\n" != r) ? (t.replaceSelection("\n\n### " + e), a.start + 6) : (t.replaceSelection("### " + e), a.start + 4), t.setSelection(n, n + e.length)
					}
				}]
			}, {
				name: "groupLink",
				data: [{
					name: "cmdUrl",
					title: "URL/Link",
					hotkey: "Ctrl+L",
					icon: {
						glyph: "glyphicon glyphicon-link",
						fa: "fa fa-link",
						"fa-3": "icon-link"
					},
					callback: function(t) {
						var e, n, i, r = t.getSelection();
						t.getContent();
						e = 0 === r.length ? t.__localize("enter link description here") : r.text, i = prompt(t.__localize("Insert Hyperlink"), "http://");
						var a = new RegExp("^((http|https)://|(mailto:)|(//))[a-z0-9]", "i");
						if (null !== i && "" !== i && "http://" !== i && a.test(i)) {
							var s = y("<div>" + i + "</div>").text();
							t.replaceSelection("[" + e + "](" + s + ")"), n = r.start + 1, t.setSelection(n, n + e.length)
						}
					}
				}, {
					name: "cmdImage",
					title: "Image",
					hotkey: "Ctrl+G",
					icon: {
						glyph: "glyphicon glyphicon-picture",
						fa: "fa fa-picture-o",
						"fa-3": "icon-picture"
					},
					callback: function(t) {
						var e, n, i, r = t.getSelection();
						t.getContent();
						e = 0 === r.length ? t.__localize("enter image description here") : r.text, i = prompt(t.__localize("Insert Image Hyperlink"), "http://");
						var a = new RegExp("^((http|https)://|(//))[a-z0-9]", "i");
						if (null !== i && "" !== i && "http://" !== i && a.test(i)) {
							var s = y("<div>" + i + "</div>").text();
							t.replaceSelection("![" + e + "](" + s + ' "' + t.__localize("enter image title here") + '")'), n = r.start + 2, t.setNextTab(t.__localize("enter image title here")), t.setSelection(n, n + e.length)
						}
					}
				}]
			}, {
				name: "groupMisc",
				data: [{
					name: "cmdList",
					hotkey: "Ctrl+U",
					title: "Unordered List",
					icon: {
						glyph: "glyphicon glyphicon-list",
						fa: "fa fa-list",
						"fa-3": "icon-list-ul"
					},
					callback: function(t) {
						var e, n, i = t.getSelection();
						t.getContent();
						if (0 === i.length) e = t.__localize("list text here"), t.replaceSelection("- " + e), n = i.start + 2;
						else if (i.text.indexOf("\n") < 0) e = i.text, t.replaceSelection("- " + e), n = i.start + 2;
						else {
							var r = [];
							e = (r = i.text.split("\n"))[0], y.each(r, function(t, e) {
								r[t] = "- " + e
							}), t.replaceSelection("\n\n" + r.join("\n")), n = i.start + 4
						}
						t.setSelection(n, n + e.length)
					}
				}, {
					name: "cmdListO",
					hotkey: "Ctrl+O",
					title: "Ordered List",
					icon: {
						glyph: "glyphicon glyphicon-th-list",
						fa: "fa fa-list-ol",
						"fa-3": "icon-list-ol"
					},
					callback: function(t) {
						var e, n, i = t.getSelection();
						t.getContent();
						if (0 === i.length) e = t.__localize("list text here"), t.replaceSelection("1. " + e), n = i.start + 3;
						else if (i.text.indexOf("\n") < 0) e = i.text, t.replaceSelection("1. " + e), n = i.start + 3;
						else {
							var r = [];
							e = (r = i.text.split("\n"))[0], y.each(r, function(t, e) {
								r[t] = "1. " + e
							}), t.replaceSelection("\n\n" + r.join("\n")), n = i.start + 5
						}
						t.setSelection(n, n + e.length)
					}
				}, {
					name: "cmdCode",
					hotkey: "Ctrl+K",
					title: "Code",
					icon: {
						glyph: "glyphicon glyphicon-asterisk",
						fa: "fa fa-code",
						"fa-3": "icon-code"
					},
					callback: function(t) {
						var e, n, i = t.getSelection(),
							r = t.getContent();
						e = 0 === i.length ? t.__localize("code text here") : i.text, n = "```\n" === r.substr(i.start - 4, 4) && "\n```" === r.substr(i.end, 4) ? (t.setSelection(i.start - 4, i.end + 4), t.replaceSelection(e), i.start - 4) : "`" === r.substr(i.start - 1, 1) && "`" === r.substr(i.end, 1) ? (t.setSelection(i.start - 1, i.end + 1), t.replaceSelection(e), i.start - 1) : -1 < r.indexOf("\n") ? (t.replaceSelection("```\n" + e + "\n```"), i.start + 4) : (t.replaceSelection("`" + e + "`"), i.start + 1), t.setSelection(n, n + e.length)
					}
				}, {
					name: "cmdQuote",
					hotkey: "Ctrl+Q",
					title: "Quote",
					icon: {
						glyph: "glyphicon glyphicon-comment",
						fa: "fa fa-quote-left",
						"fa-3": "icon-quote-left"
					},
					callback: function(t) {
						var e, n, i = t.getSelection();
						t.getContent();
						if (0 === i.length) e = t.__localize("quote here"), t.replaceSelection("> " + e), n = i.start + 2;
						else if (i.text.indexOf("\n") < 0) e = i.text, t.replaceSelection("> " + e), n = i.start + 2;
						else {
							var r = [];
							e = (r = i.text.split("\n"))[0], y.each(r, function(t, e) {
								r[t] = "> " + e
							}), t.replaceSelection("\n\n" + r.join("\n")), n = i.start + 4
						}
						t.setSelection(n, n + e.length)
					}
				}]
			}, {
				name: "groupUtil",
				data: [{
					name: "cmdPreview",
					toggle: !0,
					hotkey: "Ctrl+P",
					title: "Preview",
					btnText: "Preview",
					btnClass: "btn btn-primary btn-sm",
					icon: {
						glyph: "glyphicon glyphicon-search",
						fa: "fa fa-search",
						"fa-3": "icon-search"
					},
					callback: function(t) {
						!1 === t.$isPreview ? t.showPreview() : t.hidePreview()
					}
				}]
			}]
		],
		additionalButtons: [],
		reorderButtonGroups: [],
		hiddenButtons: [],
		disabledButtons: [],
		footer: "",
		fullscreen: {
			enable: !0,
			icons: {
				fullscreenOn: {
					fa: "fa fa-expand",
					glyph: "glyphicon glyphicon-fullscreen",
					"fa-3": "icon-resize-full"
				},
				fullscreenOff: {
					fa: "fa fa-compress",
					glyph: "glyphicon glyphicon-fullscreen",
					"fa-3": "icon-resize-small"
				}
			}
		},
		onShow: function(t) {},
		onPreview: function(t) {},
		onSave: function(t) {},
		onBlur: function(t) {},
		onFocus: function(t) {},
		onChange: function(t) {},
		onFullscreen: function(t) {},
		onSelect: function(t) {}
	}, y.fn.markdown.Constructor = r, y.fn.markdown.noConflict = function() {
		return y.fn.markdown = t, this
	};
	var e = function(t) {
		var e = t;
		e.data("markdown") ? e.data("markdown").showEditor() : e.markdown()
	};
	y(document).on("click.markdown.data-api", '[data-provide="markdown-editable"]', function(t) {
		e(y(this)), t.preventDefault()
	}).on("click focusin", function(t) {
		var i;
		i = y(document.activeElement), y(document).find(".md-editor").each(function() {
			var t = y(this),
				e = i.closest(".md-editor")[0] === this,
				n = t.find("textarea").data("markdown") || t.find('div[data-provider="markdown-preview"]').data("markdown");
			n && !e && n.blur()
		})
	}).ready(function() {
		y('textarea[data-provide="markdown"]').each(function() {
			e(y(this))
		})
	})
});
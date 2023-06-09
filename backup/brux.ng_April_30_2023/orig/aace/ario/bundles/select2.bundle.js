! function(n) {
	void 0 === n.fn.each2 && n.extend(n.fn, {
		each2: function(e) {
			for (var t = n([0]), s = -1, i = this.length; ++s < i && (t.context = t[0] = this[s]) && !1 !== e.call(t[0], s, t););
			return this
		}
	})
}(jQuery),
function(C, S) {
	"use strict";

	function a(e) {
		var t = C(document.createTextNode(""));
		e.before(t), t.before(e), t.remove()
	}

	function r(e) {
		return e.replace(/[^\u0000-\u007E]/g, function(e) {
			return R[e] || e
		})
	}

	function h(e, t) {
		for (var s = 0, i = t.length; s < i; s += 1)
			if (p(e, t[s])) return s;
		return -1
	}

	function p(e, t) {
		return e === t || e !== S && t !== S && null !== e && null !== t && (e.constructor === String ? e + "" == t + "" : t.constructor === String && t + "" == e + "")
	}

	function c(e, t, s) {
		var i, n, o;
		if (null === e || e.length < 1) return [];
		for (n = 0, o = (i = e.split(t)).length; n < o; n += 1) i[n] = s(i[n]);
		return i
	}

	function o(e) {
		return e.outerWidth(!1) - e.width()
	}

	function u(t) {
		var s = "keyup-change-value";
		t.on("keydown", function() {
			C.data(t, s) === S && C.data(t, s, t.val())
		}), t.on("keyup", function() {
			var e = C.data(t, s);
			e !== S && t.val() !== e && (C.removeData(t, s), t.trigger("keyup-change"))
		})
	}

	function d(t, s, i) {
		var n;
		return i = i || S,
			function() {
				var e = arguments;
				window.clearTimeout(n), n = window.setTimeout(function() {
					s.apply(i, e)
				}, t)
			}
	}

	function f(e) {
		e.preventDefault(), e.stopPropagation()
	}

	function g(e, t, s) {
		var i, n, o = [];
		(i = C.trim(e.attr("class"))) && C((i = "" + i).split(/\s+/)).each2(function() {
			0 === this.indexOf("select2-") && o.push(this)
		}), (i = C.trim(t.attr("class"))) && C((i = "" + i).split(/\s+/)).each2(function() {
			0 !== this.indexOf("select2-") && ((n = s(this)) && o.push(n))
		}), e.attr("class", o.join(" "))
	}

	function l(e, t, s, i) {
		var n = r(e.toUpperCase()).indexOf(r(t.toUpperCase())),
			o = t.length;
		return n < 0 ? void s.push(i(e)) : (s.push(i(e.substring(0, n))), s.push("<span class='select2-match'>"), s.push(i(e.substring(n, n + o))), s.push("</span>"), void s.push(i(e.substring(n + o, e.length))))
	}

	function e(e) {
		var t = {
			"\\": "&#92;",
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#39;",
			"/": "&#47;"
		};
		return String(e).replace(/[&<>"'\/\\]/g, function(e) {
			return t[e]
		})
	}

	function m(a) {
		var e, r = null,
			t = a.quietMillis || 100,
			l = a.url,
			c = this;
		return function(o) {
			window.clearTimeout(e), e = window.setTimeout(function() {
				var e = a.data,
					t = l,
					s = a.transport || C.fn.select2.ajaxDefaults.transport,
					i = {
						type: a.type || "GET",
						cache: a.cache || !1,
						jsonpCallback: a.jsonpCallback || S,
						dataType: a.dataType || "json"
					},
					n = C.extend({}, C.fn.select2.ajaxDefaults.params, i);
				e = e ? e.call(c, o.term, o.page, o.context) : null, t = "function" == typeof t ? t.call(c, o.term, o.page, o.context) : t, r && "function" == typeof r.abort && r.abort(), a.params && (C.isFunction(a.params) ? C.extend(n, a.params.call(c)) : C.extend(n, a.params)), C.extend(n, {
					url: t,
					dataType: a.dataType,
					data: e,
					success: function(e) {
						var t = a.results(e, o.page, o);
						o.callback(t)
					},
					error: function(e, t, s) {
						var i = {
							hasError: !0,
							jqXHR: e,
							textStatus: t,
							errorThrown: s
						};
						o.callback(i)
					}
				}), r = s.call(c, n)
			}, t)
		}
	}

	function v(e) {
		var t, s, i = e,
			r = function(e) {
				return "" + e.text
			};
		C.isArray(i) && (i = {
			results: s = i
		}), !1 === C.isFunction(i) && (s = i, i = function() {
			return s
		});
		var n = i();
		return n.text && (r = n.text, C.isFunction(r) || (t = n.text, r = function(e) {
				return e[t]
			})),
			function(n) {
				var o, a = n.term,
					s = {
						results: []
					};
				return "" === a ? void n.callback(i()) : (o = function(e, t) {
					var s, i;
					if ((e = e[0]).children) {
						for (i in s = {}, e) e.hasOwnProperty(i) && (s[i] = e[i]);
						s.children = [], C(e.children).each2(function(e, t) {
							o(t, s.children)
						}), (s.children.length || n.matcher(a, r(s), e)) && t.push(s)
					} else n.matcher(a, r(e), e) && t.push(e)
				}, C(i().results).each2(function(e, t) {
					o(t, s.results)
				}), void n.callback(s))
			}
	}

	function y(t) {
		var o = C.isFunction(t);
		return function(s) {
			var i = s.term,
				n = {
					results: []
				},
				e = o ? t(s) : t;
			C.isArray(e) && (C(e).each(function() {
				var e = this.text !== S,
					t = e ? this.text : this;
				("" === i || s.matcher(i, t)) && n.results.push(e ? this : {
					id: this,
					text: this
				})
			}), s.callback(n))
		}
	}

	function b(e, t) {
		if (C.isFunction(e)) return !0;
		if (!e) return !1;
		if ("string" == typeof e) return !0;
		throw new Error(t + " must be a string, function, or falsy value")
	}

	function x(e, t) {
		if (C.isFunction(e)) {
			var s = Array.prototype.slice.call(arguments, 2);
			return e.apply(t, s)
		}
		return e
	}

	function i() {
		var s = this;
		C.each(arguments, function(e, t) {
			s[t].remove(), s[t] = null
		})
	}

	function t(e, t) {
		var s = function() {};
		return ((s.prototype = new e).constructor = s).prototype.parent = e.prototype, s.prototype = C.extend(s.prototype, t), s
	}
	if (window.Select2 === S) {
		var s, n, w, T, E, O, I, P = {
				x: 0,
				y: 0
			},
			k = {
				TAB: 9,
				ENTER: 13,
				ESC: 27,
				SPACE: 32,
				LEFT: 37,
				UP: 38,
				RIGHT: 39,
				DOWN: 40,
				SHIFT: 16,
				CTRL: 17,
				ALT: 18,
				PAGE_UP: 33,
				PAGE_DOWN: 34,
				HOME: 36,
				END: 35,
				BACKSPACE: 8,
				DELETE: 46,
				isArrow: function(e) {
					switch (e = e.which ? e.which : e) {
						case k.LEFT:
						case k.RIGHT:
						case k.UP:
						case k.DOWN:
							return !0
					}
					return !1
				},
				isControl: function(e) {
					switch (e.which) {
						case k.SHIFT:
						case k.CTRL:
						case k.ALT:
							return !0
					}
					return !!e.metaKey
				},
				isFunctionKey: function(e) {
					return 112 <= (e = e.which ? e.which : e) && e <= 123
				}
			},
			R = {
				"Ⓐ": "A",
				"Ａ": "A",
				"À": "A",
				"Á": "A",
				"Â": "A",
				"Ầ": "A",
				"Ấ": "A",
				"Ẫ": "A",
				"Ẩ": "A",
				"Ã": "A",
				"Ā": "A",
				"Ă": "A",
				"Ằ": "A",
				"Ắ": "A",
				"Ẵ": "A",
				"Ẳ": "A",
				"Ȧ": "A",
				"Ǡ": "A",
				"Ä": "A",
				"Ǟ": "A",
				"Ả": "A",
				"Å": "A",
				"Ǻ": "A",
				"Ǎ": "A",
				"Ȁ": "A",
				"Ȃ": "A",
				"Ạ": "A",
				"Ậ": "A",
				"Ặ": "A",
				"Ḁ": "A",
				"Ą": "A",
				"Ⱥ": "A",
				"Ɐ": "A",
				"Ꜳ": "AA",
				"Æ": "AE",
				"Ǽ": "AE",
				"Ǣ": "AE",
				"Ꜵ": "AO",
				"Ꜷ": "AU",
				"Ꜹ": "AV",
				"Ꜻ": "AV",
				"Ꜽ": "AY",
				"Ⓑ": "B",
				"Ｂ": "B",
				"Ḃ": "B",
				"Ḅ": "B",
				"Ḇ": "B",
				"Ƀ": "B",
				"Ƃ": "B",
				"Ɓ": "B",
				"Ⓒ": "C",
				"Ｃ": "C",
				"Ć": "C",
				"Ĉ": "C",
				"Ċ": "C",
				"Č": "C",
				"Ç": "C",
				"Ḉ": "C",
				"Ƈ": "C",
				"Ȼ": "C",
				"Ꜿ": "C",
				"Ⓓ": "D",
				"Ｄ": "D",
				"Ḋ": "D",
				"Ď": "D",
				"Ḍ": "D",
				"Ḑ": "D",
				"Ḓ": "D",
				"Ḏ": "D",
				"Đ": "D",
				"Ƌ": "D",
				"Ɗ": "D",
				"Ɖ": "D",
				"Ꝺ": "D",
				"Ǳ": "DZ",
				"Ǆ": "DZ",
				"ǲ": "Dz",
				"ǅ": "Dz",
				"Ⓔ": "E",
				"Ｅ": "E",
				"È": "E",
				"É": "E",
				"Ê": "E",
				"Ề": "E",
				"Ế": "E",
				"Ễ": "E",
				"Ể": "E",
				"Ẽ": "E",
				"Ē": "E",
				"Ḕ": "E",
				"Ḗ": "E",
				"Ĕ": "E",
				"Ė": "E",
				"Ë": "E",
				"Ẻ": "E",
				"Ě": "E",
				"Ȅ": "E",
				"Ȇ": "E",
				"Ẹ": "E",
				"Ệ": "E",
				"Ȩ": "E",
				"Ḝ": "E",
				"Ę": "E",
				"Ḙ": "E",
				"Ḛ": "E",
				"Ɛ": "E",
				"Ǝ": "E",
				"Ⓕ": "F",
				"Ｆ": "F",
				"Ḟ": "F",
				"Ƒ": "F",
				"Ꝼ": "F",
				"Ⓖ": "G",
				"Ｇ": "G",
				"Ǵ": "G",
				"Ĝ": "G",
				"Ḡ": "G",
				"Ğ": "G",
				"Ġ": "G",
				"Ǧ": "G",
				"Ģ": "G",
				"Ǥ": "G",
				"Ɠ": "G",
				"Ꞡ": "G",
				"Ᵹ": "G",
				"Ꝿ": "G",
				"Ⓗ": "H",
				"Ｈ": "H",
				"Ĥ": "H",
				"Ḣ": "H",
				"Ḧ": "H",
				"Ȟ": "H",
				"Ḥ": "H",
				"Ḩ": "H",
				"Ḫ": "H",
				"Ħ": "H",
				"Ⱨ": "H",
				"Ⱶ": "H",
				"Ɥ": "H",
				"Ⓘ": "I",
				"Ｉ": "I",
				"Ì": "I",
				"Í": "I",
				"Î": "I",
				"Ĩ": "I",
				"Ī": "I",
				"Ĭ": "I",
				"İ": "I",
				"Ï": "I",
				"Ḯ": "I",
				"Ỉ": "I",
				"Ǐ": "I",
				"Ȉ": "I",
				"Ȋ": "I",
				"Ị": "I",
				"Į": "I",
				"Ḭ": "I",
				"Ɨ": "I",
				"Ⓙ": "J",
				"Ｊ": "J",
				"Ĵ": "J",
				"Ɉ": "J",
				"Ⓚ": "K",
				"Ｋ": "K",
				"Ḱ": "K",
				"Ǩ": "K",
				"Ḳ": "K",
				"Ķ": "K",
				"Ḵ": "K",
				"Ƙ": "K",
				"Ⱪ": "K",
				"Ꝁ": "K",
				"Ꝃ": "K",
				"Ꝅ": "K",
				"Ꞣ": "K",
				"Ⓛ": "L",
				"Ｌ": "L",
				"Ŀ": "L",
				"Ĺ": "L",
				"Ľ": "L",
				"Ḷ": "L",
				"Ḹ": "L",
				"Ļ": "L",
				"Ḽ": "L",
				"Ḻ": "L",
				"Ł": "L",
				"Ƚ": "L",
				"Ɫ": "L",
				"Ⱡ": "L",
				"Ꝉ": "L",
				"Ꝇ": "L",
				"Ꞁ": "L",
				"Ǉ": "LJ",
				"ǈ": "Lj",
				"Ⓜ": "M",
				"Ｍ": "M",
				"Ḿ": "M",
				"Ṁ": "M",
				"Ṃ": "M",
				"Ɱ": "M",
				"Ɯ": "M",
				"Ⓝ": "N",
				"Ｎ": "N",
				"Ǹ": "N",
				"Ń": "N",
				"Ñ": "N",
				"Ṅ": "N",
				"Ň": "N",
				"Ṇ": "N",
				"Ņ": "N",
				"Ṋ": "N",
				"Ṉ": "N",
				"Ƞ": "N",
				"Ɲ": "N",
				"Ꞑ": "N",
				"Ꞥ": "N",
				"Ǌ": "NJ",
				"ǋ": "Nj",
				"Ⓞ": "O",
				"Ｏ": "O",
				"Ò": "O",
				"Ó": "O",
				"Ô": "O",
				"Ồ": "O",
				"Ố": "O",
				"Ỗ": "O",
				"Ổ": "O",
				"Õ": "O",
				"Ṍ": "O",
				"Ȭ": "O",
				"Ṏ": "O",
				"Ō": "O",
				"Ṑ": "O",
				"Ṓ": "O",
				"Ŏ": "O",
				"Ȯ": "O",
				"Ȱ": "O",
				"Ö": "O",
				"Ȫ": "O",
				"Ỏ": "O",
				"Ő": "O",
				"Ǒ": "O",
				"Ȍ": "O",
				"Ȏ": "O",
				"Ơ": "O",
				"Ờ": "O",
				"Ớ": "O",
				"Ỡ": "O",
				"Ở": "O",
				"Ợ": "O",
				"Ọ": "O",
				"Ộ": "O",
				"Ǫ": "O",
				"Ǭ": "O",
				"Ø": "O",
				"Ǿ": "O",
				"Ɔ": "O",
				"Ɵ": "O",
				"Ꝋ": "O",
				"Ꝍ": "O",
				"Ƣ": "OI",
				"Ꝏ": "OO",
				"Ȣ": "OU",
				"Ⓟ": "P",
				"Ｐ": "P",
				"Ṕ": "P",
				"Ṗ": "P",
				"Ƥ": "P",
				"Ᵽ": "P",
				"Ꝑ": "P",
				"Ꝓ": "P",
				"Ꝕ": "P",
				"Ⓠ": "Q",
				"Ｑ": "Q",
				"Ꝗ": "Q",
				"Ꝙ": "Q",
				"Ɋ": "Q",
				"Ⓡ": "R",
				"Ｒ": "R",
				"Ŕ": "R",
				"Ṙ": "R",
				"Ř": "R",
				"Ȑ": "R",
				"Ȓ": "R",
				"Ṛ": "R",
				"Ṝ": "R",
				"Ŗ": "R",
				"Ṟ": "R",
				"Ɍ": "R",
				"Ɽ": "R",
				"Ꝛ": "R",
				"Ꞧ": "R",
				"Ꞃ": "R",
				"Ⓢ": "S",
				"Ｓ": "S",
				"ẞ": "S",
				"Ś": "S",
				"Ṥ": "S",
				"Ŝ": "S",
				"Ṡ": "S",
				"Š": "S",
				"Ṧ": "S",
				"Ṣ": "S",
				"Ṩ": "S",
				"Ș": "S",
				"Ş": "S",
				"Ȿ": "S",
				"Ꞩ": "S",
				"Ꞅ": "S",
				"Ⓣ": "T",
				"Ｔ": "T",
				"Ṫ": "T",
				"Ť": "T",
				"Ṭ": "T",
				"Ț": "T",
				"Ţ": "T",
				"Ṱ": "T",
				"Ṯ": "T",
				"Ŧ": "T",
				"Ƭ": "T",
				"Ʈ": "T",
				"Ⱦ": "T",
				"Ꞇ": "T",
				"Ꜩ": "TZ",
				"Ⓤ": "U",
				"Ｕ": "U",
				"Ù": "U",
				"Ú": "U",
				"Û": "U",
				"Ũ": "U",
				"Ṹ": "U",
				"Ū": "U",
				"Ṻ": "U",
				"Ŭ": "U",
				"Ü": "U",
				"Ǜ": "U",
				"Ǘ": "U",
				"Ǖ": "U",
				"Ǚ": "U",
				"Ủ": "U",
				"Ů": "U",
				"Ű": "U",
				"Ǔ": "U",
				"Ȕ": "U",
				"Ȗ": "U",
				"Ư": "U",
				"Ừ": "U",
				"Ứ": "U",
				"Ữ": "U",
				"Ử": "U",
				"Ự": "U",
				"Ụ": "U",
				"Ṳ": "U",
				"Ų": "U",
				"Ṷ": "U",
				"Ṵ": "U",
				"Ʉ": "U",
				"Ⓥ": "V",
				"Ｖ": "V",
				"Ṽ": "V",
				"Ṿ": "V",
				"Ʋ": "V",
				"Ꝟ": "V",
				"Ʌ": "V",
				"Ꝡ": "VY",
				"Ⓦ": "W",
				"Ｗ": "W",
				"Ẁ": "W",
				"Ẃ": "W",
				"Ŵ": "W",
				"Ẇ": "W",
				"Ẅ": "W",
				"Ẉ": "W",
				"Ⱳ": "W",
				"Ⓧ": "X",
				"Ｘ": "X",
				"Ẋ": "X",
				"Ẍ": "X",
				"Ⓨ": "Y",
				"Ｙ": "Y",
				"Ỳ": "Y",
				"Ý": "Y",
				"Ŷ": "Y",
				"Ỹ": "Y",
				"Ȳ": "Y",
				"Ẏ": "Y",
				"Ÿ": "Y",
				"Ỷ": "Y",
				"Ỵ": "Y",
				"Ƴ": "Y",
				"Ɏ": "Y",
				"Ỿ": "Y",
				"Ⓩ": "Z",
				"Ｚ": "Z",
				"Ź": "Z",
				"Ẑ": "Z",
				"Ż": "Z",
				"Ž": "Z",
				"Ẓ": "Z",
				"Ẕ": "Z",
				"Ƶ": "Z",
				"Ȥ": "Z",
				"Ɀ": "Z",
				"Ⱬ": "Z",
				"Ꝣ": "Z",
				"ⓐ": "a",
				"ａ": "a",
				"ẚ": "a",
				"à": "a",
				"á": "a",
				"â": "a",
				"ầ": "a",
				"ấ": "a",
				"ẫ": "a",
				"ẩ": "a",
				"ã": "a",
				"ā": "a",
				"ă": "a",
				"ằ": "a",
				"ắ": "a",
				"ẵ": "a",
				"ẳ": "a",
				"ȧ": "a",
				"ǡ": "a",
				"ä": "a",
				"ǟ": "a",
				"ả": "a",
				"å": "a",
				"ǻ": "a",
				"ǎ": "a",
				"ȁ": "a",
				"ȃ": "a",
				"ạ": "a",
				"ậ": "a",
				"ặ": "a",
				"ḁ": "a",
				"ą": "a",
				"ⱥ": "a",
				"ɐ": "a",
				"ꜳ": "aa",
				"æ": "ae",
				"ǽ": "ae",
				"ǣ": "ae",
				"ꜵ": "ao",
				"ꜷ": "au",
				"ꜹ": "av",
				"ꜻ": "av",
				"ꜽ": "ay",
				"ⓑ": "b",
				"ｂ": "b",
				"ḃ": "b",
				"ḅ": "b",
				"ḇ": "b",
				"ƀ": "b",
				"ƃ": "b",
				"ɓ": "b",
				"ⓒ": "c",
				"ｃ": "c",
				"ć": "c",
				"ĉ": "c",
				"ċ": "c",
				"č": "c",
				"ç": "c",
				"ḉ": "c",
				"ƈ": "c",
				"ȼ": "c",
				"ꜿ": "c",
				"ↄ": "c",
				"ⓓ": "d",
				"ｄ": "d",
				"ḋ": "d",
				"ď": "d",
				"ḍ": "d",
				"ḑ": "d",
				"ḓ": "d",
				"ḏ": "d",
				"đ": "d",
				"ƌ": "d",
				"ɖ": "d",
				"ɗ": "d",
				"ꝺ": "d",
				"ǳ": "dz",
				"ǆ": "dz",
				"ⓔ": "e",
				"ｅ": "e",
				"è": "e",
				"é": "e",
				"ê": "e",
				"ề": "e",
				"ế": "e",
				"ễ": "e",
				"ể": "e",
				"ẽ": "e",
				"ē": "e",
				"ḕ": "e",
				"ḗ": "e",
				"ĕ": "e",
				"ė": "e",
				"ë": "e",
				"ẻ": "e",
				"ě": "e",
				"ȅ": "e",
				"ȇ": "e",
				"ẹ": "e",
				"ệ": "e",
				"ȩ": "e",
				"ḝ": "e",
				"ę": "e",
				"ḙ": "e",
				"ḛ": "e",
				"ɇ": "e",
				"ɛ": "e",
				"ǝ": "e",
				"ⓕ": "f",
				"ｆ": "f",
				"ḟ": "f",
				"ƒ": "f",
				"ꝼ": "f",
				"ⓖ": "g",
				"ｇ": "g",
				"ǵ": "g",
				"ĝ": "g",
				"ḡ": "g",
				"ğ": "g",
				"ġ": "g",
				"ǧ": "g",
				"ģ": "g",
				"ǥ": "g",
				"ɠ": "g",
				"ꞡ": "g",
				"ᵹ": "g",
				"ꝿ": "g",
				"ⓗ": "h",
				"ｈ": "h",
				"ĥ": "h",
				"ḣ": "h",
				"ḧ": "h",
				"ȟ": "h",
				"ḥ": "h",
				"ḩ": "h",
				"ḫ": "h",
				"ẖ": "h",
				"ħ": "h",
				"ⱨ": "h",
				"ⱶ": "h",
				"ɥ": "h",
				"ƕ": "hv",
				"ⓘ": "i",
				"ｉ": "i",
				"ì": "i",
				"í": "i",
				"î": "i",
				"ĩ": "i",
				"ī": "i",
				"ĭ": "i",
				"ï": "i",
				"ḯ": "i",
				"ỉ": "i",
				"ǐ": "i",
				"ȉ": "i",
				"ȋ": "i",
				"ị": "i",
				"į": "i",
				"ḭ": "i",
				"ɨ": "i",
				"ı": "i",
				"ⓙ": "j",
				"ｊ": "j",
				"ĵ": "j",
				"ǰ": "j",
				"ɉ": "j",
				"ⓚ": "k",
				"ｋ": "k",
				"ḱ": "k",
				"ǩ": "k",
				"ḳ": "k",
				"ķ": "k",
				"ḵ": "k",
				"ƙ": "k",
				"ⱪ": "k",
				"ꝁ": "k",
				"ꝃ": "k",
				"ꝅ": "k",
				"ꞣ": "k",
				"ⓛ": "l",
				"ｌ": "l",
				"ŀ": "l",
				"ĺ": "l",
				"ľ": "l",
				"ḷ": "l",
				"ḹ": "l",
				"ļ": "l",
				"ḽ": "l",
				"ḻ": "l",
				"ſ": "l",
				"ł": "l",
				"ƚ": "l",
				"ɫ": "l",
				"ⱡ": "l",
				"ꝉ": "l",
				"ꞁ": "l",
				"ꝇ": "l",
				"ǉ": "lj",
				"ⓜ": "m",
				"ｍ": "m",
				"ḿ": "m",
				"ṁ": "m",
				"ṃ": "m",
				"ɱ": "m",
				"ɯ": "m",
				"ⓝ": "n",
				"ｎ": "n",
				"ǹ": "n",
				"ń": "n",
				"ñ": "n",
				"ṅ": "n",
				"ň": "n",
				"ṇ": "n",
				"ņ": "n",
				"ṋ": "n",
				"ṉ": "n",
				"ƞ": "n",
				"ɲ": "n",
				"ŉ": "n",
				"ꞑ": "n",
				"ꞥ": "n",
				"ǌ": "nj",
				"ⓞ": "o",
				"ｏ": "o",
				"ò": "o",
				"ó": "o",
				"ô": "o",
				"ồ": "o",
				"ố": "o",
				"ỗ": "o",
				"ổ": "o",
				"õ": "o",
				"ṍ": "o",
				"ȭ": "o",
				"ṏ": "o",
				"ō": "o",
				"ṑ": "o",
				"ṓ": "o",
				"ŏ": "o",
				"ȯ": "o",
				"ȱ": "o",
				"ö": "o",
				"ȫ": "o",
				"ỏ": "o",
				"ő": "o",
				"ǒ": "o",
				"ȍ": "o",
				"ȏ": "o",
				"ơ": "o",
				"ờ": "o",
				"ớ": "o",
				"ỡ": "o",
				"ở": "o",
				"ợ": "o",
				"ọ": "o",
				"ộ": "o",
				"ǫ": "o",
				"ǭ": "o",
				"ø": "o",
				"ǿ": "o",
				"ɔ": "o",
				"ꝋ": "o",
				"ꝍ": "o",
				"ɵ": "o",
				"ƣ": "oi",
				"ȣ": "ou",
				"ꝏ": "oo",
				"ⓟ": "p",
				"ｐ": "p",
				"ṕ": "p",
				"ṗ": "p",
				"ƥ": "p",
				"ᵽ": "p",
				"ꝑ": "p",
				"ꝓ": "p",
				"ꝕ": "p",
				"ⓠ": "q",
				"ｑ": "q",
				"ɋ": "q",
				"ꝗ": "q",
				"ꝙ": "q",
				"ⓡ": "r",
				"ｒ": "r",
				"ŕ": "r",
				"ṙ": "r",
				"ř": "r",
				"ȑ": "r",
				"ȓ": "r",
				"ṛ": "r",
				"ṝ": "r",
				"ŗ": "r",
				"ṟ": "r",
				"ɍ": "r",
				"ɽ": "r",
				"ꝛ": "r",
				"ꞧ": "r",
				"ꞃ": "r",
				"ⓢ": "s",
				"ｓ": "s",
				"ß": "s",
				"ś": "s",
				"ṥ": "s",
				"ŝ": "s",
				"ṡ": "s",
				"š": "s",
				"ṧ": "s",
				"ṣ": "s",
				"ṩ": "s",
				"ș": "s",
				"ş": "s",
				"ȿ": "s",
				"ꞩ": "s",
				"ꞅ": "s",
				"ẛ": "s",
				"ⓣ": "t",
				"ｔ": "t",
				"ṫ": "t",
				"ẗ": "t",
				"ť": "t",
				"ṭ": "t",
				"ț": "t",
				"ţ": "t",
				"ṱ": "t",
				"ṯ": "t",
				"ŧ": "t",
				"ƭ": "t",
				"ʈ": "t",
				"ⱦ": "t",
				"ꞇ": "t",
				"ꜩ": "tz",
				"ⓤ": "u",
				"ｕ": "u",
				"ù": "u",
				"ú": "u",
				"û": "u",
				"ũ": "u",
				"ṹ": "u",
				"ū": "u",
				"ṻ": "u",
				"ŭ": "u",
				"ü": "u",
				"ǜ": "u",
				"ǘ": "u",
				"ǖ": "u",
				"ǚ": "u",
				"ủ": "u",
				"ů": "u",
				"ű": "u",
				"ǔ": "u",
				"ȕ": "u",
				"ȗ": "u",
				"ư": "u",
				"ừ": "u",
				"ứ": "u",
				"ữ": "u",
				"ử": "u",
				"ự": "u",
				"ụ": "u",
				"ṳ": "u",
				"ų": "u",
				"ṷ": "u",
				"ṵ": "u",
				"ʉ": "u",
				"ⓥ": "v",
				"ｖ": "v",
				"ṽ": "v",
				"ṿ": "v",
				"ʋ": "v",
				"ꝟ": "v",
				"ʌ": "v",
				"ꝡ": "vy",
				"ⓦ": "w",
				"ｗ": "w",
				"ẁ": "w",
				"ẃ": "w",
				"ŵ": "w",
				"ẇ": "w",
				"ẅ": "w",
				"ẘ": "w",
				"ẉ": "w",
				"ⱳ": "w",
				"ⓧ": "x",
				"ｘ": "x",
				"ẋ": "x",
				"ẍ": "x",
				"ⓨ": "y",
				"ｙ": "y",
				"ỳ": "y",
				"ý": "y",
				"ŷ": "y",
				"ỹ": "y",
				"ȳ": "y",
				"ẏ": "y",
				"ÿ": "y",
				"ỷ": "y",
				"ẙ": "y",
				"ỵ": "y",
				"ƴ": "y",
				"ɏ": "y",
				"ỿ": "y",
				"ⓩ": "z",
				"ｚ": "z",
				"ź": "z",
				"ẑ": "z",
				"ż": "z",
				"ž": "z",
				"ẓ": "z",
				"ẕ": "z",
				"ƶ": "z",
				"ȥ": "z",
				"ɀ": "z",
				"ⱬ": "z",
				"ꝣ": "z",
				"Ά": "Α",
				"Έ": "Ε",
				"Ή": "Η",
				"Ί": "Ι",
				"Ϊ": "Ι",
				"Ό": "Ο",
				"Ύ": "Υ",
				"Ϋ": "Υ",
				"Ώ": "Ω",
				"ά": "α",
				"έ": "ε",
				"ή": "η",
				"ί": "ι",
				"ϊ": "ι",
				"ΐ": "ι",
				"ό": "ο",
				"ύ": "υ",
				"ϋ": "υ",
				"ΰ": "υ",
				"ω": "ω",
				"ς": "σ"
			};
		O = C(document), A = 1, T = function() {
			return A++
		}, n = t(s = t(Object, {
			bind: function(e) {
				var t = this;
				return function() {
					e.apply(t, arguments)
				}
			},
			init: function(e) {
				var o, t, s, i, n, a = ".select2-results";
				this.opts = e = this.prepareOpts(e), this.id = e.id, e.element.data("select2") !== S && null !== e.element.data("select2") && e.element.data("select2").destroy(), this.container = this.createContainer(), this.liveRegion = C(".select2-hidden-accessible"), 0 == this.liveRegion.length && (this.liveRegion = C("<span>", {
					role: "status",
					"aria-live": "polite"
				}).addClass("select2-hidden-accessible").appendTo(document.body)), this.containerId = "s2id_" + (e.element.attr("id") || "autogen" + T()), this.containerEventName = this.containerId.replace(/([.])/g, "_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.container.attr("title", e.element.attr("title")), this.body = C(document.body), g(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.attr("style", e.element.attr("style")), this.container.css(x(e.containerCss, this.opts.element)), this.container.addClass(x(e.containerCssClass, this.opts.element)), this.elementTabIndex = this.opts.element.attr("tabindex"), this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", f), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), g(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(x(e.dropdownCssClass, this.opts.element)), this.dropdown.data("select2", this), this.dropdown.on("click", f), this.results = o = this.container.find(a), this.search = t = this.container.find("input.select2-input"), this.queryCount = 0, this.resultsPage = 0, this.context = null, this.initContainer(), this.container.on("click", f), this.results.on("mousemove", function(e) {
					var t = P;
					t !== S && t.x === e.pageX && t.y === e.pageY || C(e.target).trigger("mousemove-filtered", e)
				}), this.dropdown.on("mousemove-filtered", a, this.bind(this.highlightUnderEvent)), this.dropdown.on("touchstart touchmove touchend", a, this.bind(function(e) {
					this._touchEvent = !0, this.highlightUnderEvent(e)
				})), this.dropdown.on("touchmove", a, this.bind(this.touchMoved)), this.dropdown.on("touchstart touchend", a, this.bind(this.clearTouchMoved)), this.dropdown.on("click", this.bind(function(e) {
					this._touchEvent && (this._touchEvent = !1, this.selectHighlighted())
				})), s = 80, i = this.results, n = d(s, function(e) {
					i.trigger("scroll-debounced", e)
				}), i.on("scroll", function(e) {
					0 <= h(e.target, i.get()) && n(e)
				}), this.dropdown.on("scroll-debounced", a, this.bind(this.loadMoreIfNeeded)), C(this.container).on("change", ".select2-input", function(e) {
					e.stopPropagation()
				}), C(this.dropdown).on("change", ".select2-input", function(e) {
					e.stopPropagation()
				}), C.fn.mousewheel && o.mousewheel(function(e, t, s, i) {
					var n = o.scrollTop();
					0 < i && n - i <= 0 ? (o.scrollTop(0), f(e)) : i < 0 && o.get(0).scrollHeight - o.scrollTop() + i <= o.height() && (o.scrollTop(o.get(0).scrollHeight - o.height()), f(e))
				}), u(t), t.on("keyup-change input paste", this.bind(this.updateResults)), t.on("focus", function() {
					t.addClass("select2-focused")
				}), t.on("blur", function() {
					t.removeClass("select2-focused")
				}), this.dropdown.on("mouseup", a, this.bind(function(e) {
					0 < C(e.target).closest(".select2-result-selectable").length && (this.highlightUnderEvent(e), this.selectHighlighted(e))
				})), this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function(e) {
					e.stopPropagation()
				}), this.lastSearchTerm = S, C.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), null !== e.maximumInputLength && this.search.attr("maxlength", e.maximumInputLength);
				var r = e.element.prop("disabled");
				r === S && (r = !1), this.enable(!r);
				var l = e.element.prop("readonly");
				l === S && (l = !1), this.readonly(l), I = I || function() {
					var e = C("<div class='select2-measure-scrollbar'></div>");
					e.appendTo(document.body);
					var t = {
						width: e.width() - e[0].clientWidth,
						height: e.height() - e[0].clientHeight
					};
					return e.remove(), t
				}(), this.autofocus = e.element.prop("autofocus"), e.element.prop("autofocus", !1), this.autofocus && this.focus(), this.search.attr("placeholder", e.searchInputPlaceholder)
			},
			destroy: function() {
				var e = this.opts.element,
					t = e.data("select2"),
					s = this;
				this.close(), e.length && e[0].detachEvent && s._sync && e.each(function() {
					s._sync && this.detachEvent("onpropertychange", s._sync)
				}), this.propertyObserver && (this.propertyObserver.disconnect(), this.propertyObserver = null), this._sync = null, t !== S && (t.container.remove(), t.liveRegion.remove(), t.dropdown.remove(), e.removeData("select2").off(".select2"), e.is("input[type='hidden']") ? e.css("display", "") : (e.show().prop("autofocus", this.autofocus || !1), this.elementTabIndex ? e.attr({
					tabindex: this.elementTabIndex
				}) : e.removeAttr("tabindex"), e.show())), i.call(this, "container", "liveRegion", "dropdown", "results", "search")
			},
			optionToData: function(e) {
				return e.is("option") ? {
					id: e.prop("value"),
					text: e.text(),
					element: e.get(),
					css: e.attr("class"),
					disabled: e.prop("disabled"),
					locked: p(e.attr("locked"), "locked") || p(e.data("locked"), !0)
				} : e.is("optgroup") ? {
					text: e.attr("label"),
					children: [],
					element: e.get(),
					css: e.attr("class")
				} : void 0
			},
			prepareOpts: function(b) {
				var a, e, t, s, w = this;
				if ("select" === (a = b.element).get(0).tagName.toLowerCase() && (this.select = e = b.element), e && C.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function() {
						if (this in b) throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
					}), b.debug = b.debug || C.fn.select2.defaults.debug, b.debug && console && console.warn && (null != b.id && console.warn("Select2: The `id` option has been removed in Select2 4.0.0, consider renaming your `id` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"), null != b.text && console.warn("Select2: The `text` option has been removed in Select2 4.0.0, consider renaming your `text` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"), null != b.sortResults && console.warn("Select2: the `sortResults` option has been renamed to `sorter` in Select2 4.0.0. "), null != b.selectOnBlur && console.warn("Select2: The `selectOnBlur` option has been renamed to `selectOnClose` in Select2 4.0.0."), null != b.ajax && null != b.ajax.results && console.warn("Select2: The `ajax.results` option has been renamed to `ajax.processResults` in Select2 4.0.0."), null != b.formatNoResults && console.warn("Select2: The `formatNoResults` option has been renamed to `language.noResults` in Select2 4.0.0."), null != b.formatSearching && console.warn("Select2: The `formatSearching` option has been renamed to `language.searching` in Select2 4.0.0."), null != b.formatInputTooShort && console.warn("Select2: The `formatInputTooShort` option has been renamed to `language.inputTooShort` in Select2 4.0.0."), null != b.formatInputTooLong && console.warn("Select2: The `formatInputTooLong` option has been renamed to `language.inputTooLong` in Select2 4.0.0."), null != b.formatLoading && console.warn("Select2: The `formatLoading` option has been renamed to `language.loadingMore` in Select2 4.0.0."), null != b.formatSelectionTooBig && console.warn("Select2: The `formatSelectionTooBig` option has been renamed to `language.maximumSelected` in Select2 4.0.0."), b.element.data("select2Tags") && console.warn("Select2: The `data-select2-tags` attribute has been renamed to `data-tags` in Select2 4.0.0.")), null != b.element.data("tags")) {
					var i = b.element.data("tags");
					C.isArray(i) || (i = []), b.element.data("select2Tags", i)
				}
				if (null != b.sorter && (b.sortResults = b.sorter), null != b.selectOnClose && (b.selectOnBlur = b.selectOnClose), null != b.ajax && C.isFunction(b.ajax.processResults) && (b.ajax.results = b.ajax.processResults), null != b.language) {
					var n = b.language;
					C.isFunction(n.noMatches) && (b.formatNoMatches = n.noMatches), C.isFunction(n.searching) && (b.formatSearching = n.searching), C.isFunction(n.inputTooShort) && (b.formatInputTooShort = n.inputTooShort), C.isFunction(n.inputTooLong) && (b.formatInputTooLong = n.inputTooLong), C.isFunction(n.loadingMore) && (b.formatLoading = n.loadingMore), C.isFunction(n.maximumSelected) && (b.formatSelectionTooBig = n.maximumSelected)
				}
				if ("function" != typeof(b = C.extend({}, {
						populateResults: function(e, t, f) {
							var g, m = this.opts.id,
								v = this.liveRegion;
							(g = function(e, t, s) {
								var i, n, o, a, r, l, c, h, u, d, p = [];
								for (i = 0, n = (e = b.sortResults(e, t, f)).length; i < n; i += 1) a = !(r = !0 === (o = e[i]).disabled) && m(o) !== S, l = o.children && 0 < o.children.length, (c = C("<li></li>")).addClass("select2-results-dept-" + s), c.addClass("select2-result"), c.addClass(a ? "select2-result-selectable" : "select2-result-unselectable"), r && c.addClass("select2-disabled"), l && c.addClass("select2-result-with-children"), c.addClass(w.opts.formatResultCssClass(o)), c.attr("role", "presentation"), (h = C(document.createElement("div"))).addClass("select2-result-label"), h.attr("id", "select2-result-label-" + T()), h.attr("role", "option"), (d = b.formatResult(o, h, f, w.opts.escapeMarkup)) !== S && (h.html(d), c.append(h)), l && ((u = C("<ul></ul>")).addClass("select2-result-sub"), g(o.children, u, s + 1), c.append(u)), c.data("select2-data", o), p.push(c[0]);
								t.append(p), v.text(b.formatMatches(e.length))
							})(t, e, 0)
						}
					}, C.fn.select2.defaults, b)).id && (t = b.id, b.id = function(e) {
						return e[t]
					}), C.isArray(b.element.data("select2Tags"))) {
					if ("tags" in b) throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + b.element.attr("id");
					b.tags = b.element.data("select2Tags")
				}
				if (e ? (b.query = this.bind(function(i) {
						var e, t, n, s = {
								results: [],
								more: !1
							},
							o = i.term;
						n = function(e, t) {
							var s;
							e.is("option") ? i.matcher(o, e.text(), e) && t.push(w.optionToData(e)) : e.is("optgroup") && (s = w.optionToData(e), e.children().each2(function(e, t) {
								n(t, s.children)
							}), 0 < s.children.length && t.push(s))
						}, e = a.children(), this.getPlaceholder() !== S && 0 < e.length && ((t = this.getPlaceholderOption()) && (e = e.not(t))), e.each2(function(e, t) {
							n(t, s.results)
						}), i.callback(s)
					}), b.id = function(e) {
						return e.id
					}) : "query" in b || ("ajax" in b ? ((s = b.element.data("ajax-url")) && 0 < s.length && (b.ajax.url = s), b.query = m.call(b.element, b.ajax)) : "data" in b ? b.query = v(b.data) : "tags" in b && (b.query = y(b.tags), b.createSearchChoice === S && (b.createSearchChoice = function(e) {
						return {
							id: C.trim(e),
							text: C.trim(e)
						}
					}), b.initSelection === S && (b.initSelection = function(e, t) {
						var s = [];
						C(c(e.val(), b.separator, b.transformVal)).each(function() {
							var e = {
									id: this,
									text: this
								},
								t = b.tags;
							C.isFunction(t) && (t = t()), C(t).each(function() {
								if (p(this.id, e.id)) return e = this, !1
							}), s.push(e)
						}), t(s)
					}))), "function" != typeof b.query) throw "query function not defined for Select2 " + b.element.attr("id");
				if ("top" === b.createSearchChoicePosition) b.createSearchChoicePosition = function(e, t) {
					e.unshift(t)
				};
				else if ("bottom" === b.createSearchChoicePosition) b.createSearchChoicePosition = function(e, t) {
					e.push(t)
				};
				else if ("function" != typeof b.createSearchChoicePosition) throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
				return b
			},
			monitorSource: function() {
				var e, s = this.opts.element,
					t = this;
				s.on("change.select2", this.bind(function(e) {
					!0 !== this.opts.element.data("select2-change-triggered") && this.initSelection()
				})), this._sync = this.bind(function() {
					var e = s.prop("disabled");
					e === S && (e = !1), this.enable(!e);
					var t = s.prop("readonly");
					t === S && (t = !1), this.readonly(t), this.container && (g(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(x(this.opts.containerCssClass, this.opts.element))), this.dropdown && (g(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(x(this.opts.dropdownCssClass, this.opts.element)))
				}), s.length && s[0].attachEvent && s.each(function() {
					this.attachEvent("onpropertychange", t._sync)
				}), (e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver) !== S && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new e(function(e) {
					C.each(e, t._sync)
				}), this.propertyObserver.observe(s.get(0), {
					attributes: !0,
					subtree: !1
				}))
			},
			triggerSelect: function(e) {
				var t = C.Event("select2-selecting", {
					val: this.id(e),
					object: e,
					choice: e
				});
				return this.opts.element.trigger(t), !t.isDefaultPrevented()
			},
			triggerChange: function(e) {
				e = e || {}, e = C.extend({}, e, {
					type: "change",
					val: this.val()
				}), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(e), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur()
			},
			isInterfaceEnabled: function() {
				return !0 === this.enabledInterface
			},
			enableInterface: function() {
				var e = this._enabled && !this._readonly,
					t = !e;
				return e !== this.enabledInterface && (this.container.toggleClass("select2-container-disabled", t), this.close(), this.enabledInterface = e, !0)
			},
			enable: function(e) {
				e === S && (e = !0), this._enabled !== e && (this._enabled = e, this.opts.element.prop("disabled", !e), this.enableInterface())
			},
			disable: function() {
				this.enable(!1)
			},
			readonly: function(e) {
				e === S && (e = !1), this._readonly !== e && (this._readonly = e, this.opts.element.prop("readonly", e), this.enableInterface())
			},
			opened: function() {
				return !!this.container && this.container.hasClass("select2-dropdown-open")
			},
			positionDropdown: function() {
				var e, t, s, i, n, o = this.dropdown,
					a = this.container,
					r = a.offset(),
					l = a.outerHeight(!1),
					c = a.outerWidth(!1),
					h = o.outerHeight(!1),
					u = C(window),
					d = u.width(),
					p = u.height(),
					f = u.scrollLeft() + d,
					g = u.scrollTop() + p,
					m = r.top + l,
					v = r.left,
					b = m + h <= g,
					w = r.top - h >= u.scrollTop(),
					S = o.outerWidth(!1);
				o.hasClass("select2-drop-above") ? (t = !0, !w && b && (t = !(s = !0))) : (t = !1, !b && w && (t = s = !0)), s && (o.hide(), r = this.container.offset(), l = this.container.outerHeight(!1), c = this.container.outerWidth(!1), h = o.outerHeight(!1), f = u.scrollLeft() + d, g = u.scrollTop() + p, m = r.top + l, v = r.left, S = o.outerWidth(!1), o.show(), this.focusSearch()), this.opts.dropdownAutoWidth ? (n = C(".select2-results", o)[0], o.addClass("select2-drop-auto-width"), o.css("width", ""), c < (S = o.outerWidth(!1) + (n.scrollHeight === n.clientHeight ? 0 : I.width)) ? c = S : S = c, h = o.outerHeight(!1)) : this.container.removeClass("select2-drop-auto-width"), "static" !== this.body.css("position") && (m -= (e = this.body.offset()).top, v -= e.left), !(v + S <= f) && r.left + f + a.outerWidth(!1) > S && (v = r.left + this.container.outerWidth(!1) - S), i = {
					left: v,
					width: c
				}, t ? (this.container.addClass("select2-drop-above"), o.addClass("select2-drop-above"), h = o.outerHeight(!1), i.top = r.top - h, i.bottom = "auto") : (i.top = m, i.bottom = "auto", this.container.removeClass("select2-drop-above"), o.removeClass("select2-drop-above")), i = C.extend(i, x(this.opts.dropdownCss, this.opts.element)), o.css(i)
			},
			shouldOpen: function() {
				var e;
				return !this.opened() && !1 !== this._enabled && !0 !== this._readonly && (e = C.Event("select2-opening"), this.opts.element.trigger(e), !e.isDefaultPrevented())
			},
			clearDropdownAlignmentPreference: function() {
				this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above")
			},
			open: function() {
				return !!this.shouldOpen() && (this.opening(), O.on("mousemove.select2Event", function(e) {
					P.x = e.pageX, P.y = e.pageY
				}), !0)
			},
			opening: function() {
				var i, e = this.containerEventName,
					t = "scroll." + e,
					s = "resize." + e,
					n = "orientationchange." + e;
				this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body.children().last()[0] && this.dropdown.detach().appendTo(this.body), 0 === (i = C("#select2-drop-mask")).length && ((i = C(document.createElement("div"))).attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), i.hide(), i.appendTo(this.body), i.on("mousedown touchstart click", function(e) {
					a(i);
					var t, s = C("#select2-drop");
					0 < s.length && ((t = s.data("select2")).opts.selectOnBlur && t.selectHighlighted({
						noFocus: !0
					}), t.close(), e.preventDefault(), e.stopPropagation())
				})), this.dropdown.prev()[0] !== i[0] && this.dropdown.before(i), C("#select2-drop").removeAttr("id"), this.dropdown.attr("id", "select2-drop"), i.show(), this.positionDropdown(), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active");
				var o = this;
				this.container.parents().add(window).each(function() {
					C(this).on(s + " " + t + " " + n, function(e) {
						o.opened() && o.positionDropdown()
					})
				})
			},
			close: function() {
				if (this.opened()) {
					var e = this.containerEventName,
						t = "scroll." + e,
						s = "resize." + e,
						i = "orientationchange." + e;
					this.container.parents().add(window).each(function() {
						C(this).off(t).off(s).off(i)
					}), this.clearDropdownAlignmentPreference(), C("#select2-drop-mask").hide(), this.dropdown.removeAttr("id"), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"), this.results.empty(), O.off("mousemove.select2Event"), this.clearSearch(), this.search.removeClass("select2-active"), this.search.removeAttr("aria-activedescendant"), this.opts.element.trigger(C.Event("select2-close"))
				}
			},
			externalSearch: function(e) {
				this.open(), this.search.val(e), this.updateResults(!1)
			},
			clearSearch: function() {},
			prefillNextSearchTerm: function() {
				if ("" !== this.search.val()) return !1;
				var e = this.opts.nextSearchTerm(this.data(), this.lastSearchTerm);
				return e !== S && (this.search.val(e), this.search.select(), !0)
			},
			getMaximumSelectionSize: function() {
				return x(this.opts.maximumSelectionSize, this.opts.element)
			},
			ensureHighlightVisible: function() {
				var e, t, s, i, n, o, a, r, l = this.results;
				if (!((t = this.highlight()) < 0)) {
					if (0 == t) return void l.scrollTop(0);
					e = this.findHighlightableChoices().find(".select2-result-label"), i = (r = ((s = C(e[t])).offset() || {}).top || 0) + s.outerHeight(!0), t === e.length - 1 && (0 < (a = l.find("li.select2-more-results")).length && (i = a.offset().top + a.outerHeight(!0))), (n = l.offset().top + l.outerHeight(!1)) < i && l.scrollTop(l.scrollTop() + (i - n)), (o = r - l.offset().top) < 0 && "none" != s.css("display") && l.scrollTop(l.scrollTop() + o)
				}
			},
			findHighlightableChoices: function() {
				return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")
			},
			moveHighlight: function(e) {
				for (var t = this.findHighlightableChoices(), s = this.highlight(); - 1 < s && s < t.length;) {
					var i = C(t[s += e]);
					if (i.hasClass("select2-result-selectable") && !i.hasClass("select2-disabled") && !i.hasClass("select2-selected")) {
						this.highlight(s);
						break
					}
				}
			},
			highlight: function(e) {
				var t, s, i = this.findHighlightableChoices();
				return 0 === arguments.length ? h(i.filter(".select2-highlighted")[0], i.get()) : (e >= i.length && (e = i.length - 1), e < 0 && (e = 0), this.removeHighlight(), (t = C(i[e])).addClass("select2-highlighted"), this.search.attr("aria-activedescendant", t.find(".select2-result-label").attr("id")), this.ensureHighlightVisible(), this.liveRegion.text(t.text()), void((s = t.data("select2-data")) && this.opts.element.trigger({
					type: "select2-highlight",
					val: this.id(s),
					choice: s
				})))
			},
			removeHighlight: function() {
				this.results.find(".select2-highlighted").removeClass("select2-highlighted")
			},
			touchMoved: function() {
				this._touchMoved = !0
			},
			clearTouchMoved: function() {
				this._touchMoved = !1
			},
			countSelectableResults: function() {
				return this.findHighlightableChoices().length
			},
			highlightUnderEvent: function(e) {
				var t = C(e.target).closest(".select2-result-selectable");
				if (0 < t.length && !t.is(".select2-highlighted")) {
					var s = this.findHighlightableChoices();
					this.highlight(s.index(t))
				} else 0 == t.length && this.removeHighlight()
			},
			loadMoreIfNeeded: function() {
				var t = this.results,
					s = t.find("li.select2-more-results"),
					i = this.resultsPage + 1,
					n = this,
					o = this.search.val(),
					a = this.context;
				0 !== s.length && (s.offset().top - t.offset().top - t.height() <= this.opts.loadMorePadding && (s.addClass("select2-active"), this.opts.query({
					element: this.opts.element,
					term: o,
					page: i,
					context: a,
					matcher: this.opts.matcher,
					callback: this.bind(function(e) {
						n.opened() && (n.opts.populateResults.call(this, t, e.results, {
							term: o,
							page: i,
							context: a
						}), n.postprocessResults(e, !1, !1), !0 === e.more ? (s.detach().appendTo(t).html(n.opts.escapeMarkup(x(n.opts.formatLoadMore, n.opts.element, i + 1))), window.setTimeout(function() {
							n.loadMoreIfNeeded()
						}, 10)) : s.remove(), n.positionDropdown(), n.resultsPage = i, n.context = e.context, this.opts.element.trigger({
							type: "select2-loaded",
							items: e
						}))
					})
				})))
			},
			tokenize: function() {},
			updateResults: function(s) {
				function i() {
					a.removeClass("select2-active"), c.positionDropdown(), r.find(".select2-no-results,.select2-selection-limit,.select2-searching").length ? c.liveRegion.text(r.text()) : c.liveRegion.text(c.opts.formatMatches(r.find('.select2-result-selectable:not(".select2-selected")').length))
				}

				function n(e) {
					r.html(e), i()
				}
				var e, t, o, a = this.search,
					r = this.results,
					l = this.opts,
					c = this,
					h = a.val(),
					u = C.data(this.container, "select2-last-term");
				if ((!0 === s || !u || !p(h, u)) && (C.data(this.container, "select2-last-term", h), !0 === s || !1 !== this.showSearchInput && this.opened())) {
					o = ++this.queryCount;
					var d = this.getMaximumSelectionSize();
					if (1 <= d && (e = this.data(), C.isArray(e) && e.length >= d && b(l.formatSelectionTooBig, "formatSelectionTooBig"))) return void n("<li class='select2-selection-limit'>" + x(l.formatSelectionTooBig, l.element, d) + "</li>");
					if (a.val().length < l.minimumInputLength) return n(b(l.formatInputTooShort, "formatInputTooShort") ? "<li class='select2-no-results'>" + x(l.formatInputTooShort, l.element, a.val(), l.minimumInputLength) + "</li>" : ""), void(s && this.showSearch && this.showSearch(!0));
					if (l.maximumInputLength && a.val().length > l.maximumInputLength) return void n(b(l.formatInputTooLong, "formatInputTooLong") ? "<li class='select2-no-results'>" + x(l.formatInputTooLong, l.element, a.val(), l.maximumInputLength) + "</li>" : "");
					l.formatSearching && 0 === this.findHighlightableChoices().length && n("<li class='select2-searching'>" + x(l.formatSearching, l.element) + "</li>"), a.addClass("select2-active"), this.removeHighlight(), (t = this.tokenize()) != S && null != t && a.val(t), this.resultsPage = 1, l.query({
						element: l.element,
						term: a.val(),
						page: this.resultsPage,
						context: null,
						matcher: l.matcher,
						callback: this.bind(function(e) {
							var t;
							if (o == this.queryCount) {
								if (!this.opened()) return void this.search.removeClass("select2-active");
								if (e.hasError !== S && b(l.formatAjaxError, "formatAjaxError")) return void n("<li class='select2-ajax-error'>" + x(l.formatAjaxError, l.element, e.jqXHR, e.textStatus, e.errorThrown) + "</li>");
								if (this.context = e.context === S ? null : e.context, this.opts.createSearchChoice && "" !== a.val() && ((t = this.opts.createSearchChoice.call(c, a.val(), e.results)) !== S && null !== t && c.id(t) !== S && null !== c.id(t) && 0 === C(e.results).filter(function() {
										return p(c.id(this), c.id(t))
									}).length && this.opts.createSearchChoicePosition(e.results, t)), 0 === e.results.length && b(l.formatNoMatches, "formatNoMatches")) return n("<li class='select2-no-results'>" + x(l.formatNoMatches, l.element, a.val()) + "</li>"), void(this.showSearch && this.showSearch(a.val()));
								r.empty(), c.opts.populateResults.call(this, r, e.results, {
									term: a.val(),
									page: this.resultsPage,
									context: null
								}), !0 === e.more && b(l.formatLoadMore, "formatLoadMore") && (r.append("<li class='select2-more-results'>" + l.escapeMarkup(x(l.formatLoadMore, l.element, this.resultsPage)) + "</li>"), window.setTimeout(function() {
									c.loadMoreIfNeeded()
								}, 10)), this.postprocessResults(e, s), i(), this.opts.element.trigger({
									type: "select2-loaded",
									items: e
								})
							}
						})
					})
				}
			},
			cancel: function() {
				this.close()
			},
			blur: function() {
				this.opts.selectOnBlur && this.selectHighlighted({
					noFocus: !0
				}), this.close(), this.container.removeClass("select2-container-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
			},
			focusSearch: function() {
				var i;
				(i = this.search)[0] !== document.activeElement && window.setTimeout(function() {
					var e, t = i[0],
						s = i.val().length;
					i.focus(), (0 < t.offsetWidth || 0 < t.offsetHeight) && t === document.activeElement && (t.setSelectionRange ? t.setSelectionRange(s, s) : t.createTextRange && ((e = t.createTextRange()).collapse(!1), e.select()))
				}, 0)
			},
			selectHighlighted: function(e) {
				if (this._touchMoved) this.clearTouchMoved();
				else {
					var t = this.highlight(),
						s = this.results.find(".select2-highlighted").closest(".select2-result").data("select2-data");
					s ? (this.highlight(t), this.onSelect(s, e)) : e && e.noFocus && this.close()
				}
			},
			getPlaceholder: function() {
				var e;
				return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((e = this.getPlaceholderOption()) !== S ? e.text() : S)
			},
			getPlaceholderOption: function() {
				if (this.select) {
					var e = this.select.children("option").first();
					if (this.opts.placeholderOption !== S) return "first" === this.opts.placeholderOption && e || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select);
					if ("" === C.trim(e.text()) && "" === e.val()) return e
				}
			},
			initContainerWidth: function() {
				var e = function() {
					var e, t, s, i, n;
					if ("off" === this.opts.width) return null;
					if ("element" === this.opts.width) return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
					if ("copy" !== this.opts.width && "resolve" !== this.opts.width) return C.isFunction(this.opts.width) ? this.opts.width() : this.opts.width;
					if ("string" == typeof(e = this.opts.element.attr("style")))
						for (i = 0, n = (t = e.split(";")).length; i < n; i += 1)
							if (null !== (s = t[i].replace(/\s/g, "").match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i)) && 1 <= s.length) return s[1];
					return "resolve" === this.opts.width ? 0 < (e = this.opts.element.css("width")).indexOf("%") ? e : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px" : null
				}.call(this);
				null !== e && this.container.css("width", e)
			}
		}), {
			createContainer: function() {
				return C(document.createElement("div")).attr({
					class: "select2-container"
				}).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>", "</a>", "<label for='' class='select2-offscreen'></label>", "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <label for='' class='select2-offscreen'></label>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'", "       aria-autocomplete='list' />", "   </div>", "   <ul class='select2-results' role='listbox'>", "   </ul>", "</div>"].join(""))
			},
			enableInterface: function() {
				this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
			},
			opening: function() {
				var e, t, s;
				0 <= this.opts.minimumResultsForSearch && this.showSearch(!0), this.parent.opening.apply(this, arguments), !1 !== this.showSearchInput && this.search.val(this.focusser.val()), this.opts.shouldFocusInput(this) && (this.search.focus(), (e = this.search.get(0)).createTextRange ? ((t = e.createTextRange()).collapse(!1), t.select()) : e.setSelectionRange && (s = this.search.val().length, e.setSelectionRange(s, s))), this.prefillNextSearchTerm(), this.focusser.prop("disabled", !0).val(""), this.updateResults(!0), this.opts.element.trigger(C.Event("select2-open"))
			},
			close: function() {
				this.opened() && (this.parent.close.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
			},
			focus: function() {
				this.opened() ? this.close() : (this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
			},
			isFocused: function() {
				return this.container.hasClass("select2-container-active")
			},
			cancel: function() {
				this.parent.cancel.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus()
			},
			destroy: function() {
				C("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), i.call(this, "selection", "focusser")
			},
			initContainer: function() {
				var t, e, s = this.container,
					i = this.dropdown,
					n = T();
				this.opts.minimumResultsForSearch < 0 ? this.showSearch(!1) : this.showSearch(!0), this.selection = t = s.find(".select2-choice"), this.focusser = s.find(".select2-focusser"), t.find(".select2-chosen").attr("id", "select2-chosen-" + n), this.focusser.attr("aria-labelledby", "select2-chosen-" + n), this.results.attr("id", "select2-results-" + n), this.search.attr("aria-owns", "select2-results-" + n), this.focusser.attr("id", "s2id_autogen" + n), e = C("label[for='" + this.opts.element.attr("id") + "']"), this.opts.element.on("focus.select2", this.bind(function() {
					this.focus()
				})), this.focusser.prev().text(e.text()).attr("for", this.focusser.attr("id"));
				var o = this.opts.element.attr("title");
				this.opts.element.attr("title", o || e.text()), this.focusser.attr("tabindex", this.elementTabIndex), this.search.attr("id", this.focusser.attr("id") + "_search"), this.search.prev().text(C("label[for='" + this.focusser.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.search.on("keydown", this.bind(function(e) {
					if (this.isInterfaceEnabled() && 229 != e.keyCode) {
						if (e.which === k.PAGE_UP || e.which === k.PAGE_DOWN) return void f(e);
						switch (e.which) {
							case k.UP:
							case k.DOWN:
								return this.moveHighlight(e.which === k.UP ? -1 : 1), void f(e);
							case k.ENTER:
								return this.selectHighlighted(), void f(e);
							case k.TAB:
								return void this.selectHighlighted({
									noFocus: !0
								});
							case k.ESC:
								return this.cancel(e), void f(e)
						}
					}
				})), this.search.on("blur", this.bind(function(e) {
					document.activeElement === this.body.get(0) && window.setTimeout(this.bind(function() {
						this.opened() && this.results && 1 < this.results.length && this.search.focus()
					}), 0)
				})), this.focusser.on("keydown", this.bind(function(e) {
					if (this.isInterfaceEnabled() && e.which !== k.TAB && !k.isControl(e) && !k.isFunctionKey(e) && e.which !== k.ESC) {
						if (!1 === this.opts.openOnEnter && e.which === k.ENTER) return void f(e);
						if (e.which == k.DOWN || e.which == k.UP || e.which == k.ENTER && this.opts.openOnEnter) {
							if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) return;
							return this.open(), void f(e)
						}
						return e.which == k.DELETE || e.which == k.BACKSPACE ? (this.opts.allowClear && this.clear(), void f(e)) : void 0
					}
				})), u(this.focusser), this.focusser.on("keyup-change input", this.bind(function(e) {
					if (0 <= this.opts.minimumResultsForSearch) {
						if (e.stopPropagation(), this.opened()) return;
						this.open()
					}
				})), t.on("mousedown touchstart", "abbr", this.bind(function(e) {
					var t;
					this.isInterfaceEnabled() && (this.clear(), (t = e).preventDefault(), t.stopImmediatePropagation(), this.close(), this.selection && this.selection.focus())
				})), t.on("mousedown touchstart", this.bind(function(e) {
					a(t), this.container.hasClass("select2-container-active") || this.opts.element.trigger(C.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), f(e)
				})), i.on("mousedown touchstart", this.bind(function() {
					this.opts.shouldFocusInput(this) && this.search.focus()
				})), t.on("focus", this.bind(function(e) {
					f(e)
				})), this.focusser.on("focus", this.bind(function() {
					this.container.hasClass("select2-container-active") || this.opts.element.trigger(C.Event("select2-focus")), this.container.addClass("select2-container-active")
				})).on("blur", this.bind(function() {
					this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(C.Event("select2-blur")))
				})), this.search.on("focus", this.bind(function() {
					this.container.hasClass("select2-container-active") || this.opts.element.trigger(C.Event("select2-focus")), this.container.addClass("select2-container-active")
				})), this.initContainerWidth(), this.opts.element.hide(), this.setPlaceholder()
			},
			clear: function(e) {
				var t = this.selection.data("select2-data");
				if (t) {
					var s = C.Event("select2-clearing");
					if (this.opts.element.trigger(s), s.isDefaultPrevented()) return;
					var i = this.getPlaceholderOption();
					this.opts.element.val(i ? i.val() : ""), this.selection.find(".select2-chosen").empty(), this.selection.removeData("select2-data"), this.setPlaceholder(), !1 !== e && (this.opts.element.trigger({
						type: "select2-removed",
						val: this.id(t),
						choice: t
					}), this.triggerChange({
						removed: t
					}))
				}
			},
			initSelection: function() {
				if (this.isPlaceholderOptionSelected()) this.updateSelection(null), this.close(), this.setPlaceholder();
				else {
					var t = this;
					this.opts.initSelection.call(null, this.opts.element, function(e) {
						e !== S && null !== e && (t.updateSelection(e), t.close(), t.setPlaceholder(), t.lastSearchTerm = t.search && t.search.val())
					})
				}
			},
			isPlaceholderOptionSelected: function() {
				var e;
				return this.getPlaceholder() !== S && ((e = this.getPlaceholderOption()) !== S && e.prop("selected") || "" === this.opts.element.val() || this.opts.element.val() === S || null === this.opts.element.val())
			},
			prepareOpts: function() {
				var a = this.parent.prepareOpts.apply(this, arguments),
					i = this;
				return "select" === a.element.get(0).tagName.toLowerCase() ? a.initSelection = function(e, t) {
					var s = e.find("option").filter(function() {
						return this.selected && !this.disabled
					});
					t(i.optionToData(s))
				} : "data" in a && (a.initSelection = a.initSelection || function(e, t) {
					var n = e.val(),
						o = null;
					a.query({
						matcher: function(e, t, s) {
							var i = p(n, a.id(s));
							return i && (o = s), i
						},
						callback: C.isFunction(t) ? function() {
							t(o)
						} : C.noop
					})
				}), a
			},
			getPlaceholder: function() {
				return this.select && this.getPlaceholderOption() === S ? S : this.parent.getPlaceholder.apply(this, arguments)
			},
			setPlaceholder: function() {
				var e = this.getPlaceholder();
				if (this.isPlaceholderOptionSelected() && e !== S) {
					if (this.select && this.getPlaceholderOption() === S) return;
					this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(e)), this.selection.addClass("select2-default"), this.container.removeClass("select2-allowclear")
				}
			},
			postprocessResults: function(e, t, s) {
				var i = 0,
					n = this;
				if (this.findHighlightableChoices().each2(function(e, t) {
						if (p(n.id(t.data("select2-data")), n.opts.element.val())) return i = e, !1
					}), !1 !== s && (!0 === t && 0 <= i ? this.highlight(i) : this.highlight(0)), !0 === t) {
					var o = this.opts.minimumResultsForSearch;
					0 <= o && this.showSearch(function s(e) {
						var i = 0;
						return C.each(e, function(e, t) {
							t.children ? i += s(t.children) : i++
						}), i
					}(e.results) >= o)
				}
			},
			showSearch: function(e) {
				this.showSearchInput !== e && (this.showSearchInput = e, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !e), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !e), C(this.dropdown, this.container).toggleClass("select2-with-searchbox", e))
			},
			onSelect: function(e, t) {
				if (this.triggerSelect(e)) {
					var s = this.opts.element.val(),
						i = this.data();
					this.opts.element.val(this.id(e)), this.updateSelection(e), this.opts.element.trigger({
						type: "select2-selected",
						val: this.id(e),
						choice: e
					}), this.lastSearchTerm = this.search.val(), this.close(), t && t.noFocus || !this.opts.shouldFocusInput(this) || this.focusser.focus(), p(s, this.id(e)) || this.triggerChange({
						added: e,
						removed: i
					})
				}
			},
			updateSelection: function(e) {
				if (this.selection) {
					var t, s, i = this.selection.find(".select2-chosen");
					this.selection.data("select2-data", e), i.empty(), null !== e && (t = this.opts.formatSelection(e, i, this.opts.escapeMarkup)), t !== S && i.append(t), (s = this.opts.formatSelectionCssClass(e, i)) !== S && i.addClass(s), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== S && this.container.addClass("select2-allowclear")
				}
			},
			val: function() {
				var e, t = !1,
					s = null,
					i = this,
					n = this.data();
				if (0 === arguments.length) return this.opts.element.val();
				if (e = arguments[0], 1 < arguments.length && (t = arguments[1], this.opts.debug && console && console.warn && console.warn('Select2: The second option to `select2("val")` is not supported in Select2 4.0.0. The `change` event will always be triggered in 4.0.0.')), this.select) this.opts.debug && console && console.warn && console.warn('Select2: Setting the value on a <select> using `select2("val")` is no longer supported in 4.0.0. You can use the `.val(newValue).trigger("change")` method provided by jQuery instead.'), this.select.val(e).find("option").filter(function() {
					return this.selected
				}).each2(function(e, t) {
					return s = i.optionToData(t), !1
				}), this.updateSelection(s), this.setPlaceholder(), t && this.triggerChange({
					added: s,
					removed: n
				});
				else {
					if (!e && 0 !== e) return void this.clear(t);
					if (this.opts.initSelection === S) throw new Error("cannot call val() if initSelection() is not defined");
					this.opts.element.val(e), this.opts.initSelection(this.opts.element, function(e) {
						i.opts.element.val(e ? i.id(e) : ""), i.updateSelection(e), i.setPlaceholder(), t && i.triggerChange({
							added: e,
							removed: n
						})
					})
				}
			},
			clearSearch: function() {
				this.search.val(""), this.focusser.val("")
			},
			data: function(e) {
				var t, s = !1;
				return 0 === arguments.length ? ((t = this.selection.data("select2-data")) == S && (t = null), t) : (this.opts.debug && console && console.warn && console.warn('Select2: The `select2("data")` method can no longer set selected values in 4.0.0, consider using the `.val()` method instead.'), 1 < arguments.length && (s = arguments[1]), void(e ? (t = this.data(), this.opts.element.val(e ? this.id(e) : ""), this.updateSelection(e), s && this.triggerChange({
					added: e,
					removed: t
				})) : this.clear(s)))
			}
		}), w = t(s, {
			createContainer: function() {
				return C(document.createElement("div")).attr({
					class: "select2-container select2-container-multi"
				}).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <label for='' class='select2-offscreen'></label>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""))
			},
			prepareOpts: function() {
				var l = this.parent.prepareOpts.apply(this, arguments),
					i = this;
				return "select" === l.element.get(0).tagName.toLowerCase() ? l.initSelection = function(e, t) {
					var s = [];
					e.find("option").filter(function() {
						return this.selected && !this.disabled
					}).each2(function(e, t) {
						s.push(i.optionToData(t))
					}), t(s)
				} : "data" in l && (l.initSelection = l.initSelection || function(e, o) {
					var a = c(e.val(), l.separator, l.transformVal),
						r = [];
					l.query({
						matcher: function(e, t, s) {
							var i = C.grep(a, function(e) {
								return p(e, l.id(s))
							}).length;
							return i && r.push(s), i
						},
						callback: C.isFunction(o) ? function() {
							for (var e = [], t = 0; t < a.length; t++)
								for (var s = a[t], i = 0; i < r.length; i++) {
									var n = r[i];
									if (p(s, l.id(n))) {
										e.push(n), r.splice(i, 1);
										break
									}
								}
							o(e)
						} : C.noop
					})
				}), l
			},
			selectChoice: function(e) {
				var t = this.container.find(".select2-search-choice-focus");
				t.length && e && e[0] == t[0] || (t.length && this.opts.element.trigger("choice-deselected", t), t.removeClass("select2-search-choice-focus"), e && e.length && (this.close(), e.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", e)))
			},
			destroy: function() {
				C("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), i.call(this, "searchContainer", "selection")
			},
			initContainer: function() {
				var a, e = ".select2-choices";
				this.searchContainer = this.container.find(".select2-search-field"), this.selection = a = this.container.find(e);
				var t = this;
				this.selection.on("click", ".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)", function(e) {
					t.search[0].focus(), t.selectChoice(C(this))
				}), this.search.attr("id", "s2id_autogen" + T()), this.search.prev().text(C("label[for='" + this.opts.element.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.opts.element.on("focus.select2", this.bind(function() {
					this.focus()
				})), this.search.on("input paste", this.bind(function() {
					this.search.attr("placeholder") && 0 == this.search.val().length || this.isInterfaceEnabled() && (this.opened() || this.open())
				})), this.search.attr("tabindex", this.elementTabIndex), this.keydowns = 0, this.search.on("keydown", this.bind(function(e) {
					if (this.isInterfaceEnabled()) {
						++this.keydowns;
						var t = a.find(".select2-search-choice-focus"),
							s = t.prev(".select2-search-choice:not(.select2-locked)"),
							i = t.next(".select2-search-choice:not(.select2-locked)"),
							n = function(e) {
								var t = 0,
									s = 0;
								if ("selectionStart" in (e = C(e)[0])) t = e.selectionStart, s = e.selectionEnd - t;
								else if ("selection" in document) {
									e.focus();
									var i = document.selection.createRange();
									s = document.selection.createRange().text.length, i.moveStart("character", -e.value.length), t = i.text.length - s
								}
								return {
									offset: t,
									length: s
								}
							}(this.search);
						if (t.length && (e.which == k.LEFT || e.which == k.RIGHT || e.which == k.BACKSPACE || e.which == k.DELETE || e.which == k.ENTER)) {
							var o = t;
							return e.which == k.LEFT && s.length ? o = s : e.which == k.RIGHT ? o = i.length ? i : null : e.which === k.BACKSPACE ? this.unselect(t.first()) && (this.search.width(10), o = s.length ? s : i) : e.which == k.DELETE ? this.unselect(t.first()) && (this.search.width(10), o = i.length ? i : null) : e.which == k.ENTER && (o = null), this.selectChoice(o), f(e), void(o && o.length || this.open())
						}
						if ((e.which === k.BACKSPACE && 1 == this.keydowns || e.which == k.LEFT) && 0 == n.offset && !n.length) return this.selectChoice(a.find(".select2-search-choice:not(.select2-locked)").last()), void f(e);
						if (this.selectChoice(null), this.opened()) switch (e.which) {
							case k.UP:
							case k.DOWN:
								return this.moveHighlight(e.which === k.UP ? -1 : 1), void f(e);
							case k.ENTER:
								return this.selectHighlighted(), void f(e);
							case k.TAB:
								return this.selectHighlighted({
									noFocus: !0
								}), void this.close();
							case k.ESC:
								return this.cancel(e), void f(e)
						}
						if (e.which !== k.TAB && !k.isControl(e) && !k.isFunctionKey(e) && e.which !== k.BACKSPACE && e.which !== k.ESC) {
							if (e.which === k.ENTER) {
								if (!1 === this.opts.openOnEnter) return;
								if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) return
							}
							this.open(), e.which !== k.PAGE_UP && e.which !== k.PAGE_DOWN || f(e), e.which === k.ENTER && f(e)
						}
					}
				})), this.search.on("keyup", this.bind(function(e) {
					this.keydowns = 0, this.resizeSearch()
				})), this.search.on("blur", this.bind(function(e) {
					this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.selectChoice(null), this.opened() || this.clearSearch(), e.stopImmediatePropagation(), this.opts.element.trigger(C.Event("select2-blur"))
				})), this.container.on("click", e, this.bind(function(e) {
					this.isInterfaceEnabled() && (0 < C(e.target).closest(".select2-search-choice").length || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(C.Event("select2-focus")), this.open(), this.focusSearch(), e.preventDefault()))
				})), this.container.on("focus", e, this.bind(function() {
					this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(C.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder())
				})), this.initContainerWidth(), this.opts.element.hide(), this.clearSearch()
			},
			enableInterface: function() {
				this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
			},
			initSelection: function() {
				if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
					var t = this;
					this.opts.initSelection.call(null, this.opts.element, function(e) {
						e !== S && null !== e && (t.updateSelection(e), t.close(), t.clearSearch())
					})
				}
			},
			clearSearch: function() {
				var e = this.getPlaceholder(),
					t = this.getMaxSearchWidth();
				e !== S && 0 === this.getVal().length && !1 === this.search.hasClass("select2-focused") ? (this.search.val(e).addClass("select2-default"), this.search.width(0 < t ? t : this.container.css("width"))) : this.search.val("").width(10)
			},
			clearPlaceholder: function() {
				this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
			},
			opening: function() {
				this.clearPlaceholder(), this.resizeSearch(), this.parent.opening.apply(this, arguments), this.focusSearch(), this.prefillNextSearchTerm(), this.updateResults(!0), this.opts.shouldFocusInput(this) && this.search.focus(), this.opts.element.trigger(C.Event("select2-open"))
			},
			close: function() {
				this.opened() && this.parent.close.apply(this, arguments)
			},
			focus: function() {
				this.close(), this.search.focus()
			},
			isFocused: function() {
				return this.search.hasClass("select2-focused")
			},
			updateSelection: function(e) {
				var t = {},
					s = [],
					i = this;
				C(e).each(function() {
					i.id(this) in t || (t[i.id(this)] = 0, s.push(this))
				}), this.selection.find(".select2-search-choice").remove(), this.addSelectedChoice(s), i.postprocessResults()
			},
			tokenize: function() {
				var e = this.search.val();
				null != (e = this.opts.tokenizer.call(this, e, this.data(), this.bind(this.onSelect), this.opts)) && e != S && (this.search.val(e), 0 < e.length && this.open())
			},
			onSelect: function(e, t) {
				this.triggerSelect(e) && "" !== e.text && (this.addSelectedChoice(e), this.opts.element.trigger({
					type: "selected",
					val: this.id(e),
					choice: e
				}), this.lastSearchTerm = this.search.val(), this.clearSearch(), this.updateResults(), !this.select && this.opts.closeOnSelect || this.postprocessResults(e, !1, !0 === this.opts.closeOnSelect), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : 0 < this.countSelectableResults() ? (this.search.width(10), this.resizeSearch(), 0 < this.getMaximumSelectionSize() && this.val().length >= this.getMaximumSelectionSize() ? this.updateResults(!0) : this.prefillNextSearchTerm() && this.updateResults(), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({
					added: e
				}), t && t.noFocus || this.focusSearch())
			},
			cancel: function() {
				this.close(), this.focusSearch()
			},
			addSelectedChoice: function(e) {
				var t = this.getVal(),
					s = this;
				C(e).each(function() {
					t.push(s.createChoice(this))
				}), this.setVal(t)
			},
			createChoice: function(e) {
				var t, s, i = !e.locked,
					n = C("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),
					o = C("<li class='select2-search-choice select2-locked'><div></div></li>"),
					a = i ? n : o,
					r = this.id(e);
				return (t = this.opts.formatSelection(e, a.find("div"), this.opts.escapeMarkup)) != S && a.find("div").replaceWith(C("<div></div>").html(t)), (s = this.opts.formatSelectionCssClass(e, a.find("div"))) != S && a.addClass(s), i && a.find(".select2-search-choice-close").on("mousedown", f).on("click dblclick", this.bind(function(e) {
					this.isInterfaceEnabled() && (this.unselect(C(e.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), f(e), this.close(), this.focusSearch())
				})).on("focus", this.bind(function() {
					this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"))
				})), a.data("select2-data", e), a.insertBefore(this.searchContainer), r
			},
			unselect: function(e) {
				var t, s, i = this.getVal();
				if (0 === (e = e.closest(".select2-search-choice")).length) throw "Invalid argument: " + e + ". Must be .select2-search-choice";
				if (t = e.data("select2-data")) {
					var n = C.Event("select2-removing");
					if (n.val = this.id(t), n.choice = t, this.opts.element.trigger(n), n.isDefaultPrevented()) return !1;
					for (; 0 <= (s = h(this.id(t), i));) i.splice(s, 1), this.setVal(i), this.select && this.postprocessResults();
					return e.remove(), this.opts.element.trigger({
						type: "select2-removed",
						val: this.id(t),
						choice: t
					}), this.triggerChange({
						removed: t
					}), !0
				}
			},
			postprocessResults: function(e, t, s) {
				var i = this.getVal(),
					n = this.results.find(".select2-result"),
					o = this.results.find(".select2-result-with-children"),
					a = this;
				n.each2(function(e, t) {
					0 <= h(a.id(t.data("select2-data")), i) && (t.addClass("select2-selected"), t.find(".select2-result-selectable").addClass("select2-selected"))
				}), o.each2(function(e, t) {
					t.is(".select2-result-selectable") || 0 !== t.find(".select2-result-selectable:not(.select2-selected)").length || t.addClass("select2-selected")
				}), -1 == this.highlight() && !1 !== s && !0 === this.opts.closeOnSelect && a.highlight(0), !this.opts.createSearchChoice && 0 < !n.filter(".select2-result:not(.select2-selected)").length && (!e || e && !e.more && 0 === this.results.find(".select2-no-results").length) && b(a.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + x(a.opts.formatNoMatches, a.opts.element, a.search.val()) + "</li>")
			},
			getMaxSearchWidth: function() {
				return this.selection.width() - o(this.search)
			},
			resizeSearch: function() {
				var e, t, s, i, n = o(this.search);
				e = function(e) {
					if (!E) {
						var t = e[0].currentStyle || window.getComputedStyle(e[0], null);
						(E = C(document.createElement("div")).css({
							position: "absolute",
							left: "-10000px",
							top: "-10000px",
							display: "none",
							fontSize: t.fontSize,
							fontFamily: t.fontFamily,
							fontStyle: t.fontStyle,
							fontWeight: t.fontWeight,
							letterSpacing: t.letterSpacing,
							textTransform: t.textTransform,
							whiteSpace: "nowrap"
						})).attr("class", "select2-sizer"), C(document.body).append(E)
					}
					return E.text(e.val()), E.width()
				}(this.search) + 10, t = this.search.offset().left, (i = (s = this.selection.width()) - (t - this.selection.offset().left) - n) < e && (i = s - n), i < 40 && (i = s - n), i <= 0 && (i = e), this.search.width(Math.floor(i))
			},
			getVal: function() {
				var e;
				return this.select ? null === (e = this.select.val()) ? [] : e : c(e = this.opts.element.val(), this.opts.separator, this.opts.transformVal)
			},
			setVal: function(e) {
				if (this.select) this.select.val(e);
				else {
					var t = [],
						s = {};
					C(e).each(function() {
						this in s || (t.push(this), s[this] = 0)
					}), this.opts.element.val(0 === t.length ? "" : t.join(this.opts.separator))
				}
			},
			buildChangeDetails: function(e, t) {
				t = t.slice(0), e = e.slice(0);
				for (var s = 0; s < t.length; s++)
					for (var i = 0; i < e.length; i++)
						if (p(this.opts.id(t[s]), this.opts.id(e[i]))) {
							t.splice(s, 1), s--, e.splice(i, 1);
							break
						} return {
					added: t,
					removed: e
				}
			},
			val: function(e, s) {
				var i, n = this;
				if (0 === arguments.length) return this.getVal();
				if ((i = this.data()).length || (i = []), !e && 0 !== e) return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), void(s && this.triggerChange({
					added: this.data(),
					removed: i
				}));
				if (this.setVal(e), this.select) this.opts.initSelection(this.select, this.bind(this.updateSelection)), s && this.triggerChange(this.buildChangeDetails(i, this.data()));
				else {
					if (this.opts.initSelection === S) throw new Error("val() cannot be called if initSelection() is not defined");
					this.opts.initSelection(this.opts.element, function(e) {
						var t = C.map(e, n.id);
						n.setVal(t), n.updateSelection(e), n.clearSearch(), s && n.triggerChange(n.buildChangeDetails(i, n.data()))
					})
				}
				this.clearSearch()
			},
			onSortStart: function() {
				if (this.select) throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
				this.search.width(0), this.searchContainer.hide()
			},
			onSortEnd: function() {
				var e = [],
					t = this;
				this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function() {
					e.push(t.opts.id(C(this).data("select2-data")))
				}), this.setVal(e), this.triggerChange()
			},
			data: function(e, t) {
				var s, i, n = this;
				return 0 === arguments.length ? this.selection.children(".select2-search-choice").map(function() {
					return C(this).data("select2-data")
				}).get() : (i = this.data(), e || (e = []), s = C.map(e, function(e) {
					return n.opts.id(e)
				}), this.setVal(s), this.updateSelection(e), this.clearSearch(), void(t && this.triggerChange(this.buildChangeDetails(i, this.data()))))
			}
		}), C.fn.select2 = function() {
			var e, t, s, i, n, o = Array.prototype.slice.call(arguments, 0),
				a = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
				r = ["opened", "isFocused", "container", "dropdown"],
				l = ["val", "data"],
				c = {
					search: "externalSearch"
				};
			return this.each(function() {
				if (0 === o.length || "object" == typeof o[0])(e = 0 === o.length ? {} : C.extend({}, o[0])).element = C(this), "select" === e.element.get(0).tagName.toLowerCase() ? n = e.element.prop("multiple") : (n = e.multiple || !1, "tags" in e && (e.multiple = n = !0)), (t = n ? new window.Select2.class.multi : new window.Select2.class.single).init(e);
				else {
					if ("string" != typeof o[0]) throw "Invalid arguments to select2 plugin: " + o;
					if (h(o[0], a) < 0) throw "Unknown method: " + o[0];
					if (i = S, (t = C(this).data("select2")) === S) return;
					if (s = o[0], i = "container" === s ? t.container : "dropdown" === s ? t.dropdown : (c[s] && (s = c[s]), t[s].apply(t, o.slice(1))), 0 <= h(o[0], r) || 0 <= h(o[0], l) && 1 == o.length) return !1
				}
			}), i === S ? this : i
		}, C.fn.select2.defaults = {
			debug: !1,
			width: "copy",
			loadMorePadding: 0,
			closeOnSelect: !0,
			openOnEnter: !0,
			containerCss: {},
			dropdownCss: {},
			containerCssClass: "",
			dropdownCssClass: "",
			formatResult: function(e, t, s, i) {
				var n = [];
				return l(this.text(e), s.term, n, i), n.join("")
			},
			transformVal: function(e) {
				return C.trim(e)
			},
			formatSelection: function(e, t, s) {
				return e ? s(this.text(e)) : S
			},
			sortResults: function(e, t, s) {
				return e
			},
			formatResultCssClass: function(e) {
				return e.css
			},
			formatSelectionCssClass: function(e, t) {
				return S
			},
			minimumResultsForSearch: 0,
			minimumInputLength: 0,
			maximumInputLength: null,
			maximumSelectionSize: 0,
			id: function(e) {
				return e == S ? null : e.id
			},
			text: function(e) {
				return e && this.data && this.data.text ? C.isFunction(this.data.text) ? this.data.text(e) : e[this.data.text] : e.text
			},
			matcher: function(e, t) {
				return 0 <= r("" + t).toUpperCase().indexOf(r("" + e).toUpperCase())
			},
			separator: ",",
			tokenSeparators: [],
			tokenizer: function(e, t, s, i) {
				var n, o, a, r, l, c = e,
					h = !1;
				if (!i.createSearchChoice || !i.tokenSeparators || i.tokenSeparators.length < 1) return S;
				for (;;) {
					for (o = -1, a = 0, r = i.tokenSeparators.length; a < r && (l = i.tokenSeparators[a], !(0 <= (o = e.indexOf(l)))); a++);
					if (o < 0) break;
					if (n = e.substring(0, o), e = e.substring(o + l.length), 0 < n.length && (n = i.createSearchChoice.call(this, n, t)) !== S && null !== n && i.id(n) !== S && null !== i.id(n)) {
						for (h = !1, a = 0, r = t.length; a < r; a++)
							if (p(i.id(n), i.id(t[a]))) {
								h = !0;
								break
							} h || s(n)
					}
				}
				return c !== e ? e : void 0
			},
			escapeMarkup: e,
			blurOnChange: !1,
			selectOnBlur: !1,
			adaptContainerCssClass: function(e) {
				return e
			},
			adaptDropdownCssClass: function(e) {
				return null
			},
			nextSearchTerm: function(e, t) {
				return S
			},
			searchInputPlaceholder: "",
			createSearchChoicePosition: "top",
			shouldFocusInput: function(e) {
				return !(("ontouchstart" in window || 0 < navigator.msMaxTouchPoints) && e.opts.minimumResultsForSearch < 0)
			}
		}, C.fn.select2.locales = [], C.fn.select2.locales.en = {
			formatMatches: function(e) {
				return 1 === e ? "One result is available, press enter to select it." : e + " results are available, use up and down arrow keys to navigate."
			},
			formatNoMatches: function() {
				return "No matches found"
			},
			formatAjaxError: function(e, t, s) {
				return "Loading failed"
			},
			formatInputTooShort: function(e, t) {
				var s = t - e.length;
				return "Please enter " + s + " or more character" + (1 == s ? "" : "s")
			},
			formatInputTooLong: function(e, t) {
				var s = e.length - t;
				return "Please delete " + s + " character" + (1 == s ? "" : "s")
			},
			formatSelectionTooBig: function(e) {
				return "You can only select " + e + " item" + (1 == e ? "" : "s")
			},
			formatLoadMore: function(e) {
				return "Loading more results…"
			},
			formatSearching: function() {
				return "Searching…"
			}
		}, C.extend(C.fn.select2.defaults, C.fn.select2.locales.en), C.fn.select2.ajaxDefaults = {
			transport: C.ajax,
			params: {
				type: "GET",
				cache: !1,
				dataType: "json"
			}
		}, window.Select2 = {
			query: {
				ajax: m,
				local: v,
				tags: y
			},
			util: {
				debounce: d,
				markMatch: l,
				escapeMarkup: e,
				stripDiacritics: r
			},
			class: {
				abstract: s,
				single: n,
				multi: w
			}
		}
	}
	var A
}(jQuery);
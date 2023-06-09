! function(v) {
	"use strict";

	function r(t, e) {
		this.isInit = !0, this.itemsArray = [], this.$element = v(t), this.$element.hide(), this.isSelect = "SELECT" === t.tagName, this.multiple = this.isSelect && t.hasAttribute("multiple"), this.objectItems = e && e.itemValue, this.placeholderText = t.hasAttribute("placeholder") ? this.$element.attr("placeholder") : "", this.inputSize = Math.max(1, this.placeholderText.length), this.$container = v('<div class="bootstrap-tagsinput"></div>'), this.$input = v('<input type="text" placeholder="' + this.placeholderText + '"/>').appendTo(this.$container), this.$element.before(this.$container), this.build(e), this.isInit = !1
	}

	function o(t, e) {
		if ("function" != typeof t[e]) {
			var n = t[e];
			t[e] = function(t) {
				return t[n]
			}
		}
	}

	function s(t, e) {
		if ("function" != typeof t[e]) {
			var n = t[e];
			t[e] = function() {
				return n
			}
		}
	}

	function y(t) {
		return t ? e.text(t).html() : ""
	}

	function u(t) {
		var e = 0;
		if (document.selection) {
			t.focus();
			var n = document.selection.createRange();
			n.moveStart("character", -t.value.length), e = n.text.length
		} else(t.selectionStart || "0" == t.selectionStart) && (e = t.selectionStart);
		return e
	}
	var p = {
		tagClass: function(t) {
			return "label label-info"
		},
		itemValue: function(t) {
			return t ? t.toString() : t
		},
		itemText: function(t) {
			return this.itemValue(t)
		},
		itemTitle: function(t) {
			return null
		},
		freeInput: !0,
		addOnBlur: !0,
		maxTags: void 0,
		maxChars: void 0,
		confirmKeys: [13, 44],
		delimiter: ",",
		delimiterRegex: null,
		cancelConfirmKeysOnEmpty: !1,
		onTagExists: function(t, e) {
			e.hide().fadeIn()
		},
		trimValue: !1,
		allowDuplicates: !1
	};
	r.prototype = {
		constructor: r,
		add: function(t, e, n) {
			var i = this;
			if (!(i.options.maxTags && i.itemsArray.length >= i.options.maxTags) && (!1 === t || t)) {
				if ("string" == typeof t && i.options.trimValue && (t = v.trim(t)), "object" == typeof t && !i.objectItems) throw "Can't add objects when itemValue option is not set";
				if (!t.toString().match(/^\s*$/)) {
					if (i.isSelect && !i.multiple && 0 < i.itemsArray.length && i.remove(i.itemsArray[0]), "string" == typeof t && "INPUT" === this.$element[0].tagName) {
						var a = i.options.delimiterRegex ? i.options.delimiterRegex : i.options.delimiter,
							o = t.split(a);
						if (1 < o.length) {
							for (var r = 0; r < o.length; r++) this.add(o[r], !0);
							return void(e || i.pushVal())
						}
					}
					var s = i.options.itemValue(t),
						l = i.options.itemText(t),
						u = i.options.tagClass(t),
						p = i.options.itemTitle(t),
						c = v.grep(i.itemsArray, function(t) {
							return i.options.itemValue(t) === s
						})[0];
					if (!c || i.options.allowDuplicates) {
						if (!(i.items().toString().length + t.length + 1 > i.options.maxInputLength)) {
							var h = v.Event("beforeItemAdd", {
								item: t,
								cancel: !1,
								options: n
							});
							if (i.$element.trigger(h), !h.cancel) {
								i.itemsArray.push(t);
								var m = v('<span class="tag ' + y(u) + (null !== p ? '" title="' + p : "") + '">' + y(l) + '<span data-role="remove"></span></span>');
								m.data("item", t), i.findInputWrapper().before(m), m.after(" ");
								var f = v('option[value="' + encodeURIComponent(s) + '"]', i.$element).length || v('option[value="' + y(s) + '"]', i.$element).length;
								if (i.isSelect && !f) {
									var d = v("<option selected>" + y(l) + "</option>");
									d.data("item", t), d.attr("value", s), i.$element.append(d)
								}
								e || i.pushVal(), (i.options.maxTags === i.itemsArray.length || i.items().toString().length === i.options.maxInputLength) && i.$container.addClass("bootstrap-tagsinput-max"), v(".typeahead, .twitter-typeahead", i.$container).length && i.$input.typeahead("val", ""), this.isInit ? i.$element.trigger(v.Event("itemAddedOnInit", {
									item: t,
									options: n
								})) : i.$element.trigger(v.Event("itemAdded", {
									item: t,
									options: n
								}))
							}
						}
					} else if (i.options.onTagExists) {
						var g = v(".tag", i.$container).filter(function() {
							return v(this).data("item") === c
						});
						i.options.onTagExists(t, g)
					}
				}
			}
		},
		remove: function(e, t, n) {
			var i = this;
			if (i.objectItems && (e = (e = "object" == typeof e ? v.grep(i.itemsArray, function(t) {
					return i.options.itemValue(t) == i.options.itemValue(e)
				}) : v.grep(i.itemsArray, function(t) {
					return i.options.itemValue(t) == e
				}))[e.length - 1]), e) {
				var a = v.Event("beforeItemRemove", {
					item: e,
					cancel: !1,
					options: n
				});
				if (i.$element.trigger(a), a.cancel) return;
				v(".tag", i.$container).filter(function() {
					return v(this).data("item") === e
				}).remove(), v("option", i.$element).filter(function() {
					return v(this).data("item") === e
				}).remove(), -1 !== v.inArray(e, i.itemsArray) && i.itemsArray.splice(v.inArray(e, i.itemsArray), 1)
			}
			t || i.pushVal(), i.options.maxTags > i.itemsArray.length && i.$container.removeClass("bootstrap-tagsinput-max"), i.$element.trigger(v.Event("itemRemoved", {
				item: e,
				options: n
			}))
		},
		removeAll: function() {
			var t = this;
			for (v(".tag", t.$container).remove(), v("option", t.$element).remove(); 0 < t.itemsArray.length;) t.itemsArray.pop();
			t.pushVal()
		},
		refresh: function() {
			var o = this;
			v(".tag", o.$container).each(function() {
				var t = v(this),
					e = t.data("item"),
					n = o.options.itemValue(e),
					i = o.options.itemText(e),
					a = o.options.tagClass(e);
				(t.attr("class", null), t.addClass("tag " + y(a)), t.contents().filter(function() {
					return 3 == this.nodeType
				})[0].nodeValue = y(i), o.isSelect) && v("option", o.$element).filter(function() {
					return v(this).data("item") === e
				}).attr("value", n)
			})
		},
		items: function() {
			return this.itemsArray
		},
		pushVal: function() {
			var e = this,
				t = v.map(e.items(), function(t) {
					return e.options.itemValue(t).toString()
				});
			e.$element.val(t, !0).trigger("change")
		},
		build: function(t) {
			var l = this;
			if (l.options = v.extend({}, p, t), l.objectItems && (l.options.freeInput = !1), o(l.options, "itemValue"), o(l.options, "itemText"), s(l.options, "tagClass"), l.options.typeahead) {
				var i = l.options.typeahead || {};
				s(i, "source"), l.$input.typeahead(v.extend({}, i, {
					source: function(t, a) {
						function e(t) {
							for (var e = [], n = 0; n < t.length; n++) {
								var i = l.options.itemText(t[n]);
								o[i] = t[n], e.push(i)
							}
							a(e)
						}
						this.map = {};
						var o = this.map,
							n = i.source(t);
						v.isFunction(n.success) ? n.success(e) : v.isFunction(n.then) ? n.then(e) : v.when(n).then(e)
					},
					updater: function(t) {
						return l.add(this.map[t]), this.map[t]
					},
					matcher: function(t) {
						return -1 !== t.toLowerCase().indexOf(this.query.trim().toLowerCase())
					},
					sorter: function(t) {
						return t.sort()
					},
					highlighter: function(t) {
						var e = new RegExp("(" + this.query + ")", "gi");
						return t.replace(e, "<strong>$1</strong>")
					}
				}))
			}
			if (l.options.typeaheadjs) {
				var e = null,
					n = {},
					a = l.options.typeaheadjs;
				n = v.isArray(a) ? (e = a[0], a[1]) : a, l.$input.typeahead(e, n).on("typeahead:selected", v.proxy(function(t, e) {
					n.valueKey ? l.add(e[n.valueKey]) : l.add(e), l.$input.typeahead("val", "")
				}, l))
			}
			l.$container.on("click", v.proxy(function(t) {
				l.$element.attr("disabled") || l.$input.removeAttr("disabled"), l.$input.focus()
			}, l)), l.options.addOnBlur && l.options.freeInput && l.$input.on("focusout", v.proxy(function(t) {
				0 === v(".typeahead, .twitter-typeahead", l.$container).length && (l.add(l.$input.val()), l.$input.val(""))
			}, l)), l.$container.on("keydown", "input", v.proxy(function(t) {
				var e = v(t.target),
					n = l.findInputWrapper();
				if (l.$element.attr("disabled")) l.$input.attr("disabled", "disabled");
				else {
					switch (t.which) {
						case 8:
							if (0 === u(e[0])) {
								var i = n.prev();
								i.length && l.remove(i.data("item"))
							}
							break;
						case 46:
							if (0 === u(e[0])) {
								var a = n.next();
								a.length && l.remove(a.data("item"))
							}
							break;
						case 37:
							var o = n.prev();
							0 === e.val().length && o[0] && (o.before(n), e.focus());
							break;
						case 39:
							var r = n.next();
							0 === e.val().length && r[0] && (r.after(n), e.focus())
					}
					var s = e.val().length;
					Math.ceil(s / 5), e.attr("size", Math.max(this.inputSize, e.val().length))
				}
			}, l)), l.$container.on("keypress", "input", v.proxy(function(t) {
				var e = v(t.target);
				if (l.$element.attr("disabled")) l.$input.attr("disabled", "disabled");
				else {
					var o, n, r, i = e.val(),
						a = l.options.maxChars && i.length >= l.options.maxChars;
					l.options.freeInput && (o = t, n = l.options.confirmKeys, r = !1, v.each(n, function(t, e) {
						if ("number" == typeof e && o.which === e) return !(r = !0);
						if (o.which === e.which) {
							var n = !e.hasOwnProperty("altKey") || o.altKey === e.altKey,
								i = !e.hasOwnProperty("shiftKey") || o.shiftKey === e.shiftKey,
								a = !e.hasOwnProperty("ctrlKey") || o.ctrlKey === e.ctrlKey;
							if (n && i && a) return !(r = !0)
						}
					}), r || a) && (0 !== i.length && (l.add(a ? i.substr(0, l.options.maxChars) : i), e.val("")), !1 === l.options.cancelConfirmKeysOnEmpty && t.preventDefault());
					var s = e.val().length;
					Math.ceil(s / 5), e.attr("size", Math.max(this.inputSize, e.val().length))
				}
			}, l)), l.$container.on("click", "[data-role=remove]", v.proxy(function(t) {
				l.$element.attr("disabled") || l.remove(v(t.target).closest(".tag").data("item"))
			}, l)), l.options.itemValue === p.itemValue && ("INPUT" === l.$element[0].tagName ? l.add(l.$element.val()) : v("option", l.$element).each(function() {
				l.add(v(this).attr("value"), !0)
			}))
		},
		destroy: function() {
			var t = this;
			t.$container.off("keypress", "input"), t.$container.off("click", "[role=remove]"), t.$container.remove(), t.$element.removeData("tagsinput"), t.$element.show()
		},
		focus: function() {
			this.$input.focus()
		},
		input: function() {
			return this.$input
		},
		findInputWrapper: function() {
			for (var t = this.$input[0], e = this.$container[0]; t && t.parentNode !== e;) t = t.parentNode;
			return v(t)
		}
	}, v.fn.tagsinput = function(n, i, a) {
		var o = [];
		return this.each(function() {
			var t = v(this).data("tagsinput");
			if (t)
				if (n || i) {
					if (void 0 !== t[n]) {
						if (3 === t[n].length && void 0 !== a) var e = t[n](i, null, a);
						else e = t[n](i);
						void 0 !== e && o.push(e)
					}
				} else o.push(t);
			else t = new r(this, n), v(this).data("tagsinput", t), o.push(t), "SELECT" === this.tagName && v("option", v(this)).attr("selected", "selected"), v(this).val(v(this).val())
		}), "string" == typeof n ? 1 < o.length ? o : o[0] : o
	}, v.fn.tagsinput.Constructor = r;
	var e = v("<div />");
	v(function() {
		v("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput()
	})
}(window.jQuery);
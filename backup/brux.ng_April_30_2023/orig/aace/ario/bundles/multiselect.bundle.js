! function(C) {
	"use strict";
	var n = function(e, t) {
		this.options = t, this.$element = C(e), this.$container = C("<div/>", {
			class: "ms-container"
		}), this.$selectableContainer = C("<div/>", {
			class: "ms-selectable"
		}), this.$selectionContainer = C("<div/>", {
			class: "ms-selection"
		}), this.$selectableUl = C("<ul/>", {
			class: "ms-list",
			tabindex: "-1"
		}), this.$selectionUl = C("<ul/>", {
			class: "ms-list",
			tabindex: "-1"
		}), this.scrollTo = 0, this.elemsSelector = "li:visible:not(.ms-optgroup-label,.ms-optgroup-container,." + t.disabledClass + ")"
	};
	n.prototype = {
		constructor: n,
		init: function() {
			var e = this,
				t = this.$element;
			if (0 === t.next(".ms-container").length) {
				t.css({
					position: "absolute",
					left: "-9999px"
				}), t.attr("id", t.attr("id") ? t.attr("id") : Math.ceil(1e3 * Math.random()) + "multiselect"), this.$container.attr("id", "ms-" + t.attr("id")), this.$container.addClass(e.options.cssClass), t.find("option").each(function() {
					e.generateLisFromOption(this)
				}), this.$selectionUl.find(".ms-optgroup-label").hide(), e.options.selectableHeader && e.$selectableContainer.append(e.options.selectableHeader), e.$selectableContainer.append(e.$selectableUl), e.options.selectableFooter && e.$selectableContainer.append(e.options.selectableFooter), e.options.selectionHeader && e.$selectionContainer.append(e.options.selectionHeader), e.$selectionContainer.append(e.$selectionUl), e.options.selectionFooter && e.$selectionContainer.append(e.options.selectionFooter), e.$container.append(e.$selectableContainer), e.$container.append(e.$selectionContainer), t.after(e.$container), e.activeMouse(e.$selectableUl), e.activeKeyboard(e.$selectableUl);
				var s = e.options.dblClick ? "dblclick" : "click";
				e.$selectableUl.on(s, ".ms-elem-selectable", function() {
					e.select(C(this).data("ms-value"))
				}), e.$selectionUl.on(s, ".ms-elem-selection", function() {
					e.deselect(C(this).data("ms-value"))
				}), e.activeMouse(e.$selectionUl), e.activeKeyboard(e.$selectionUl), t.on("focus", function() {
					e.$selectableUl.focus()
				})
			}
			var l = t.find("option:selected").map(function() {
				return C(this).val()
			}).get();
			e.select(l, "init"), "function" == typeof e.options.afterInit && e.options.afterInit.call(this, this.$container)
		},
		generateLisFromOption: function(e, t, s) {
			for (var l = this, i = l.$element, n = "", o = C(e), a = 0; a < e.attributes.length; a++) {
				var r = e.attributes[a];
				"value" !== r.name && "disabled" !== r.name && (n += r.name + '="' + r.value + '" ')
			}
			var c = C("<li " + n + "><span>" + l.escapeHTML(o.text()) + "</span></li>"),
				d = c.clone(),
				h = o.val(),
				p = l.sanitize(h);
			c.data("ms-value", h).addClass("ms-elem-selectable").attr("id", p + "-selectable"), d.data("ms-value", h).addClass("ms-elem-selection").attr("id", p + "-selection").hide(), (o.prop("disabled") || i.prop("disabled")) && (d.addClass(l.options.disabledClass), c.addClass(l.options.disabledClass));
			var f = o.parent("optgroup");
			if (0 < f.length) {
				var u = f.attr("label"),
					m = l.sanitize(u),
					v = l.$selectableUl.find("#optgroup-selectable-" + m),
					b = l.$selectionUl.find("#optgroup-selection-" + m);
				if (0 === v.length) {
					var g = '<li class="ms-optgroup-container"></li>',
						$ = '<ul class="ms-optgroup"><li class="ms-optgroup-label"><span>' + u + "</span></li></ul>";
					v = C(g), b = C(g), v.attr("id", "optgroup-selectable-" + m), b.attr("id", "optgroup-selection-" + m), v.append(C($)), b.append(C($)), l.options.selectableOptgroup && (v.find(".ms-optgroup-label").on("click", function() {
						var e = f.children(":not(:selected, :disabled)").map(function() {
							return C(this).val()
						}).get();
						l.select(e)
					}), b.find(".ms-optgroup-label").on("click", function() {
						var e = f.children(":selected:not(:disabled)").map(function() {
							return C(this).val()
						}).get();
						l.deselect(e)
					})), l.$selectableUl.append(v), l.$selectionUl.append(b)
				}
				t = null == t ? v.find("ul").children().length : t + 1, c.insertAt(t, v.children()), d.insertAt(t, b.children())
			} else t = null == t ? l.$selectableUl.children().length : t, c.insertAt(t, l.$selectableUl), d.insertAt(t, l.$selectionUl)
		},
		addOption: function(e) {
			var i = this;
			void 0 !== e.value && null !== e.value && (e = [e]), C.each(e, function(e, t) {
				if (void 0 !== t.value && null !== t.value && 0 === i.$element.find("option[value='" + t.value + "']").length) {
					var s = C('<option value="' + t.value + '">' + t.text + "</option>"),
						l = (e = parseInt(void 0 === t.index ? i.$element.children().length : t.index), null == t.nested ? i.$element : C("optgroup[label='" + t.nested + "']"));
					s.insertAt(e, l), i.generateLisFromOption(s.get(0), e, t.nested)
				}
			})
		},
		escapeHTML: function(e) {
			return C("<div>").text(e).html()
		},
		activeKeyboard: function(s) {
			var l = this;
			s.on("focus", function() {
				C(this).addClass("ms-focus")
			}).on("blur", function() {
				C(this).removeClass("ms-focus")
			}).on("keydown", function(e) {
				switch (e.which) {
					case 40:
					case 38:
						return e.preventDefault(), e.stopPropagation(), void l.moveHighlight(C(this), 38 === e.which ? -1 : 1);
					case 37:
					case 39:
						return e.preventDefault(), e.stopPropagation(), void l.switchList(s);
					case 9:
						if (l.$element.is("[tabindex]")) {
							e.preventDefault();
							var t = parseInt(l.$element.attr("tabindex"), 10);
							return t = e.shiftKey ? t - 1 : t + 1, void C('[tabindex="' + t + '"]').focus()
						}
						e.shiftKey && l.$element.trigger("focus")
				}
				if (-1 < C.inArray(e.which, l.options.keySelect)) return e.preventDefault(), e.stopPropagation(), void l.selectHighlighted(s)
			})
		},
		moveHighlight: function(e, t) {
			var s = e.find(this.elemsSelector),
				l = s.filter(".ms-hover"),
				i = null,
				n = s.first().outerHeight(),
				o = e.height();
			this.$container.prop("id");
			if (s.removeClass("ms-hover"), 1 === t) {
				if (0 === (i = l.nextAll(this.elemsSelector).first()).length)
					if ((r = l.parent()).hasClass("ms-optgroup")) {
						var a = r.parent().next(":visible");
						i = 0 < a.length ? a.find(this.elemsSelector).first() : s.first()
					} else i = s.first()
			} else if (-1 === t) {
				var r;
				if (0 === (i = l.prevAll(this.elemsSelector).first()).length)
					if ((r = l.parent()).hasClass("ms-optgroup")) {
						var c = r.parent().prev(":visible");
						i = 0 < c.length ? c.find(this.elemsSelector).last() : s.last()
					} else i = s.last()
			}
			if (0 < i.length) {
				i.addClass("ms-hover");
				var d = e.scrollTop() + i.position().top - o / 2 + n / 2;
				e.scrollTop(d)
			}
		},
		selectHighlighted: function(e) {
			var t = e.find(this.elemsSelector),
				s = t.filter(".ms-hover").first();
			0 < s.length && (e.parent().hasClass("ms-selectable") ? this.select(s.data("ms-value")) : this.deselect(s.data("ms-value")), t.removeClass("ms-hover"))
		},
		switchList: function(e) {
			e.blur(), this.$container.find(this.elemsSelector).removeClass("ms-hover"), e.parent().hasClass("ms-selectable") ? this.$selectionUl.focus() : this.$selectableUl.focus()
		},
		activeMouse: function(e) {
			var t = this;
			this.$container.on("mouseenter", t.elemsSelector, function() {
				C(this).parents(".ms-container").find(t.elemsSelector).removeClass("ms-hover"), C(this).addClass("ms-hover")
			}), this.$container.on("mouseleave", t.elemsSelector, function() {
				C(this).parents(".ms-container").find(t.elemsSelector).removeClass("ms-hover")
			})
		},
		refresh: function() {
			this.destroy(), this.$element.multiSelect(this.options)
		},
		destroy: function() {
			C("#ms-" + this.$element.attr("id")).remove(), this.$element.css("position", "").css("left", ""), this.$element.removeData("multiselect")
		},
		select: function(e, t) {
			"string" == typeof e && (e = [e]);
			var s = this,
				l = this.$element,
				i = C.map(e, function(e) {
					return s.sanitize(e)
				}),
				n = this.$selectableUl.find("#" + i.join("-selectable, #") + "-selectable").filter(":not(." + s.options.disabledClass + ")"),
				o = this.$selectionUl.find("#" + i.join("-selection, #") + "-selection").filter(":not(." + s.options.disabledClass + ")"),
				a = l.find("option:not(:disabled)").filter(function() {
					return -1 < C.inArray(this.value, e)
				});
			if ("init" === t && (n = this.$selectableUl.find("#" + i.join("-selectable, #") + "-selectable"), o = this.$selectionUl.find("#" + i.join("-selection, #") + "-selection")), 0 < n.length) {
				n.addClass("ms-selected").hide(), o.addClass("ms-selected").show(), a.prop("selected", !0), s.$container.find(s.elemsSelector).removeClass("ms-hover");
				var r = s.$selectableUl.children(".ms-optgroup-container");
				if (0 < r.length) r.each(function() {
					var e = C(this).find(".ms-elem-selectable");
					e.length === e.filter(".ms-selected").length && C(this).find(".ms-optgroup-label").hide()
				}), s.$selectionUl.children(".ms-optgroup-container").each(function() {
					0 < C(this).find(".ms-elem-selection").filter(".ms-selected").length && C(this).find(".ms-optgroup-label").show()
				});
				else if (s.options.keepOrder && "init" !== t) {
					var c = s.$selectionUl.find(".ms-selected");
					1 < c.length && c.last().get(0) != o.get(0) && o.insertAfter(c.last())
				}
				"init" !== t && (l.trigger("change"), "function" == typeof s.options.afterSelect && s.options.afterSelect.call(this, e))
			}
		},
		deselect: function(e) {
			"string" == typeof e && (e = [e]);
			var t = this,
				s = this.$element,
				l = C.map(e, function(e) {
					return t.sanitize(e)
				}),
				i = this.$selectableUl.find("#" + l.join("-selectable, #") + "-selectable"),
				n = this.$selectionUl.find("#" + l.join("-selection, #") + "-selection").filter(".ms-selected").filter(":not(." + t.options.disabledClass + ")"),
				o = s.find("option").filter(function() {
					return -1 < C.inArray(this.value, e)
				});
			if (0 < n.length) {
				i.removeClass("ms-selected").show(), n.removeClass("ms-selected").hide(), o.prop("selected", !1), t.$container.find(t.elemsSelector).removeClass("ms-hover");
				var a = t.$selectableUl.children(".ms-optgroup-container");
				if (0 < a.length) a.each(function() {
					0 < C(this).find(".ms-elem-selectable").filter(":not(.ms-selected)").length && C(this).find(".ms-optgroup-label").show()
				}), t.$selectionUl.children(".ms-optgroup-container").each(function() {
					0 === C(this).find(".ms-elem-selection").filter(".ms-selected").length && C(this).find(".ms-optgroup-label").hide()
				});
				s.trigger("change"), "function" == typeof t.options.afterDeselect && t.options.afterDeselect.call(this, e)
			}
		},
		select_all: function() {
			var e = this.$element,
				t = e.val();
			if (e.find('option:not(":disabled")').prop("selected", !0), this.$selectableUl.find(".ms-elem-selectable").filter(":not(." + this.options.disabledClass + ")").addClass("ms-selected").hide(), this.$selectionUl.find(".ms-optgroup-label").show(), this.$selectableUl.find(".ms-optgroup-label").hide(), this.$selectionUl.find(".ms-elem-selection").filter(":not(." + this.options.disabledClass + ")").addClass("ms-selected").show(), this.$selectionUl.focus(), e.trigger("change"), "function" == typeof this.options.afterSelect) {
				var s = C.grep(e.val(), function(e) {
					return C.inArray(e, t) < 0
				});
				this.options.afterSelect.call(this, s)
			}
		},
		deselect_all: function() {
			var e = this.$element,
				t = e.val();
			e.find("option").prop("selected", !1), this.$selectableUl.find(".ms-elem-selectable").removeClass("ms-selected").show(), this.$selectionUl.find(".ms-optgroup-label").hide(), this.$selectableUl.find(".ms-optgroup-label").show(), this.$selectionUl.find(".ms-elem-selection").removeClass("ms-selected").hide(), this.$selectableUl.focus(), e.trigger("change"), "function" == typeof this.options.afterDeselect && this.options.afterDeselect.call(this, t)
		},
		sanitize: function(e) {
			var t, s = 0;
			if (0 == e.length) return s;
			var l;
			for (t = 0, l = e.length; t < l; t++) s = (s << 5) - s + e.charCodeAt(t), s |= 0;
			return s
		}
	}, C.fn.multiSelect = function() {
		var l = arguments[0],
			i = arguments;
		return this.each(function() {
			var e = C(this),
				t = e.data("multiselect"),
				s = C.extend({}, C.fn.multiSelect.defaults, e.data(), "object" == typeof l && l);
			t || e.data("multiselect", t = new n(this, s)), "string" == typeof l ? t[l](i[1]) : t.init()
		})
	}, C.fn.multiSelect.defaults = {
		keySelect: [32],
		selectableOptgroup: !1,
		disabledClass: "disabled",
		dblClick: !1,
		keepOrder: !1,
		cssClass: ""
	}, C.fn.multiSelect.Constructor = n, C.fn.insertAt = function(e, t) {
		return this.each(function() {
			0 === e ? t.prepend(this) : t.children().eq(e - 1).after(this)
		})
	}
}(window.jQuery);
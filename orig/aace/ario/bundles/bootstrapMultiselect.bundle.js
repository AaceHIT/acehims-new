! function(t, e) {
	"function" == typeof define && define.amd && "function" == typeof require && "function" == typeof require.specified && require.specified("knockout") ? define(["jquery", "knockout"], e) : e(t.jQuery, t.ko)
}(this, function(d, f) {
	"use strict";

	function o(t, e) {
		this.$select = d(t), this.options = this.mergeOptions(d.extend({}, e, this.$select.data())), this.$select.attr("data-placeholder") && (this.options.nonSelectedText = this.$select.data("placeholder")), this.originalOptions = this.$select.clone()[0].options, this.query = "", this.searchTimeout = null, this.lastToggledInput = null, this.options.multiple = "multiple" === this.$select.attr("multiple"), this.options.onChange = d.proxy(this.options.onChange, this), this.options.onSelectAll = d.proxy(this.options.onSelectAll, this), this.options.onDeselectAll = d.proxy(this.options.onDeselectAll, this), this.options.onDropdownShow = d.proxy(this.options.onDropdownShow, this), this.options.onDropdownHide = d.proxy(this.options.onDropdownHide, this), this.options.onDropdownShown = d.proxy(this.options.onDropdownShown, this), this.options.onDropdownHidden = d.proxy(this.options.onDropdownHidden, this), this.options.onInitialized = d.proxy(this.options.onInitialized, this), this.options.onFiltering = d.proxy(this.options.onFiltering, this), this.buildContainer(), this.buildButton(), this.buildDropdown(), this.buildReset(), this.buildSelectAll(), this.buildDropdownOptions(), this.buildFilter(), this.updateButtonText(), this.updateSelectAll(!0), this.options.enableClickableOptGroups && this.options.multiple && this.updateOptGroups(), this.options.wasDisabled = this.$select.prop("disabled"), this.options.disableIfEmpty && d("option", this.$select).length <= 0 && this.disable(), this.$select.wrap('<span class="multiselect-native-select" />').after(this.$container), "never" !== this.options.widthSynchronizationMode && this.synchronizeButtonAndPopupWidth(), this.options.onInitialized(this.$select, this.$container)
	}
	void 0 !== f && f.bindingHandlers && !f.bindingHandlers.multiselect && (f.bindingHandlers.multiselect = {
		after: ["options", "value", "selectedOptions", "enable", "disable"],
		init: function(t, e, i, s, o) {
			var l = d(t),
				n = f.toJS(e());
			if (l.multiselect(n), i.has("options")) {
				var p = i.get("options");
				f.isObservable(p) && f.computed({
					read: function() {
						p(), setTimeout(function() {
							var t = l.data("multiselect");
							t && t.updateOriginalOptions(), l.multiselect("rebuild")
						}, 1)
					},
					disposeWhenNodeIsRemoved: t
				})
			}
			if (i.has("value")) {
				var a = i.get("value");
				f.isObservable(a) && f.computed({
					read: function() {
						a(), setTimeout(function() {
							l.multiselect("refresh")
						}, 1)
					},
					disposeWhenNodeIsRemoved: t
				}).extend({
					rateLimit: 100,
					notifyWhenChangesStop: !0
				})
			}
			if (i.has("selectedOptions")) {
				var r = i.get("selectedOptions");
				f.isObservable(r) && f.computed({
					read: function() {
						r(), setTimeout(function() {
							l.multiselect("refresh")
						}, 1)
					},
					disposeWhenNodeIsRemoved: t
				}).extend({
					rateLimit: 100,
					notifyWhenChangesStop: !0
				})
			}
			var c = function(t) {
				setTimeout(function() {
					t ? l.multiselect("enable") : l.multiselect("disable")
				})
			};
			if (i.has("enable")) {
				var h = i.get("enable");
				f.isObservable(h) ? f.computed({
					read: function() {
						c(h())
					},
					disposeWhenNodeIsRemoved: t
				}).extend({
					rateLimit: 100,
					notifyWhenChangesStop: !0
				}) : c(h)
			}
			if (i.has("disable")) {
				var u = i.get("disable");
				f.isObservable(u) ? f.computed({
					read: function() {
						c(!u())
					},
					disposeWhenNodeIsRemoved: t
				}).extend({
					rateLimit: 100,
					notifyWhenChangesStop: !0
				}) : c(!u)
			}
			f.utils.domNodeDisposal.addDisposeCallback(t, function() {
				l.multiselect("destroy")
			})
		},
		update: function(t, e, i, s, o) {
			var l = d(t),
				n = f.toJS(e());
			l.multiselect("setOptions", n), l.multiselect("rebuild")
		}
	}), o.prototype = {
		defaults: {
			buttonText: function(t, e) {
				if (0 < this.disabledText.length && e.prop("disabled")) return this.disabledText;
				if (0 === t.length) return this.nonSelectedText;
				if (this.allSelectedText && t.length === d("option", d(e)).length && 1 !== d("option", d(e)).length && this.multiple) return this.selectAllNumber ? this.allSelectedText + " (" + t.length + ")" : this.allSelectedText;
				if (0 != this.numberDisplayed && t.length > this.numberDisplayed) return t.length + " " + this.nSelectedText;
				var i = "",
					s = this.delimiterText;
				return t.each(function() {
					var t = void 0 !== d(this).attr("label") ? d(this).attr("label") : d(this).text();
					i += t + s
				}), i.substr(0, i.length - this.delimiterText.length)
			},
			buttonTitle: function(t, e) {
				if (0 === t.length) return this.nonSelectedText;
				var i = "",
					s = this.delimiterText;
				return t.each(function() {
					var t = void 0 !== d(this).attr("label") ? d(this).attr("label") : d(this).text();
					i += t + s
				}), i.substr(0, i.length - this.delimiterText.length)
			},
			checkboxName: function(t) {
				return !1
			},
			optionLabel: function(t) {
				return d(t).attr("label") || d(t).text()
			},
			optionClass: function(t) {
				return d(t).attr("class") || ""
			},
			onChange: function(t, e) {},
			onDropdownShow: function(t) {},
			onDropdownHide: function(t) {},
			onDropdownShown: function(t) {},
			onDropdownHidden: function(t) {},
			onSelectAll: function() {},
			onDeselectAll: function() {},
			onInitialized: function(t, e) {},
			onFiltering: function(t) {},
			enableHTML: !1,
			buttonClass: "custom-select",
			inheritClass: !1,
			buttonWidth: "auto",
			buttonContainer: '<div class="btn-group" />',
			dropRight: !1,
			dropUp: !1,
			selectedClass: "active",
			maxHeight: !1,
			includeSelectAllOption: !1,
			includeSelectAllIfMoreThan: 0,
			selectAllText: " Select all",
			selectAllValue: "multiselect-all",
			selectAllName: !1,
			selectAllNumber: !0,
			selectAllJustVisible: !0,
			enableFiltering: !1,
			enableCaseInsensitiveFiltering: !1,
			enableFullValueFiltering: !1,
			enableClickableOptGroups: !1,
			enableCollapsibleOptGroups: !1,
			collapseOptGroupsByDefault: !1,
			filterPlaceholder: "Search",
			filterBehavior: "text",
			includeFilterClearBtn: !0,
			preventInputChangeEvent: !1,
			nonSelectedText: "None selected",
			nSelectedText: "selected",
			allSelectedText: "All selected",
			numberDisplayed: 3,
			disableIfEmpty: !1,
			disabledText: "",
			delimiterText: ", ",
			includeResetOption: !1,
			includeResetDivider: !1,
			resetText: "Reset",
			indentGroupOptions: !0,
			widthSynchronizationMode: "never",
			buttonTextAlignment: "center",
			templates: {
				button: '<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"><span class="multiselect-selected-text"></span></button>',
				popupContainer: '<div class="multiselect-container dropdown-menu"></div>',
				filter: '<div class="multiselect-filter d-flex align-items-center"><i class="fas fa-sm fa-search text-muted"></i><input type="search" class="multiselect-search form-control" /></div>',
				option: '<button type="button" class="multiselect-option dropdown-item"></button>',
				divider: '<div class="dropdown-divider"></div>',
				optionGroup: '<button type="button" class="multiselect-group dropdown-item"></button>',
				resetButton: '<div class="multiselect-reset text-center p-2"><button type="button" class="btn btn-sm btn-block btn-outline-secondary"></button></div>'
			}
		},
		constructor: o,
		buildContainer: function() {
			this.$container = d(this.options.buttonContainer), "never" !== this.options.widthSynchronizationMode ? this.$container.on("show.bs.dropdown", d.proxy(function() {
				this.synchronizeButtonAndPopupWidth(), this.options.onDropdownShow()
			}, this)) : this.$container.on("show.bs.dropdown", this.options.onDropdownShow), this.$container.on("hide.bs.dropdown", this.options.onDropdownHide), this.$container.on("shown.bs.dropdown", this.options.onDropdownShown), this.$container.on("hidden.bs.dropdown", this.options.onDropdownHidden)
		},
		buildButton: function() {
			if (this.$button = d(this.options.templates.button).addClass(this.options.buttonClass), this.$select.attr("class") && this.options.inheritClass && this.$button.addClass(this.$select.attr("class")), this.$select.prop("disabled") ? this.disable() : this.enable(), this.options.buttonWidth && "auto" !== this.options.buttonWidth && (this.$button.css({
					width: "100%"
				}), this.$container.css({
					width: this.options.buttonWidth
				})), this.options.buttonTextAlignment) switch (this.options.buttonTextAlignment) {
				case "left":
					this.$button.addClass("text-left");
					break;
				case "center":
					this.$button.addClass("text-center");
					break;
				case "right":
					this.$button.addClass("text-right")
			}
			var t = this.$select.attr("tabindex");
			t && this.$button.attr("tabindex", t), this.$container.prepend(this.$button)
		},
		buildDropdown: function() {
			this.$popupContainer = d(this.options.templates.popupContainer), this.options.dropRight ? this.$container.addClass("dropright") : this.options.dropUp && this.$container.addClass("dropup"), this.options.maxHeight && this.$popupContainer.css({
				"max-height": this.options.maxHeight + "px",
				"overflow-y": "auto",
				"overflow-x": "hidden"
			}), "never" !== this.options.widthSynchronizationMode && this.$popupContainer.css("overflow-x", "hidden"), this.$popupContainer.on("touchstart click", function(t) {
				t.stopPropagation()
			}), this.$container.append(this.$popupContainer)
		},
		synchronizeButtonAndPopupWidth: function() {
			if (this.$popupContainer && "never" !== this.options.widthSynchronizationMode) {
				var t = this.$button.outerWidth();
				switch (this.options.widthSynchronizationMode) {
					case "always":
						this.$popupContainer.css("min-width", t), this.$popupContainer.css("max-width", t);
						break;
					case "ifPopupIsSmaller":
						this.$popupContainer.css("min-width", t);
						break;
					case "ifPopupIsWider":
						this.$popupContainer.css("max-width", t)
				}
			}
		},
		buildDropdownOptions: function() {
			this.$select.children().each(d.proxy(function(t, e) {
				var i = d(e),
					s = i.prop("tagName").toLowerCase();
				i.prop("value") !== this.options.selectAllValue && ("optgroup" === s ? this.createOptgroup(e) : "option" === s && ("divider" === i.data("role") ? this.createDivider() : this.createOptionValue(e, !1)))
			}, this)), d(this.$popupContainer).off("change", '> *:not(.multiselect-group) input[type="checkbox"], > *:not(.multiselect-group) input[type="radio"]'), d(this.$popupContainer).on("change", '> *:not(.multiselect-group) input[type="checkbox"], > *:not(.multiselect-group) input[type="radio"]', d.proxy(function(t) {
				var e = d(t.target),
					i = e.prop("checked") || !1,
					s = e.val() === this.options.selectAllValue;
				this.options.selectedClass && (i ? e.closest(".multiselect-option").addClass(this.options.selectedClass) : e.closest(".multiselect-option").removeClass(this.options.selectedClass));
				var o = e.val(),
					l = this.getOptionByValue(o),
					n = d("option", this.$select).not(l),
					p = d("input", this.$container).not(e);
				if (s ? i ? this.selectAll(this.options.selectAllJustVisible, !0) : this.deselectAll(this.options.selectAllJustVisible, !0) : (i ? (l.prop("selected", !0), this.options.multiple ? l.prop("selected", !0) : (this.options.selectedClass && d(p).closest(".dropdown-item").removeClass(this.options.selectedClass), d(p).prop("checked", !1), n.prop("selected", !1), this.$button.click()), "active" === this.options.selectedClass && n.closest(".dropdown-item").css("outline", "")) : l.prop("selected", !1), this.options.onChange(l, i), this.updateSelectAll(), this.options.enableClickableOptGroups && this.options.multiple && this.updateOptGroups()), this.$select.change(), this.updateButtonText(), this.options.preventInputChangeEvent) return !1
			}, this)), d(".multiselect-option", this.$popupContainer).off("mousedown"), d(".multiselect-option", this.$popupContainer).on("mousedown", function(t) {
				if (t.shiftKey) return !1
			}), d(this.$popupContainer).off("touchstart click", ".multiselect-option, .multiselect-all, .multiselect-group"), d(this.$popupContainer).on("touchstart click", ".multiselect-option, .multiselect-all, .multiselect-group", d.proxy(function(t) {
				t.stopPropagation();
				var e = d(t.target);
				if (t.shiftKey && this.options.multiple) {
					e.is("input") || (t.preventDefault(), (e = e.closest(".multiselect-option").find("input")).prop("checked", !e.prop("checked")));
					var i = e.prop("checked") || !1;
					if (null !== this.lastToggledInput && this.lastToggledInput !== e) {
						var s = this.$popupContainer.find(".multiselect-option:visible").index(e.closest(".multiselect-option")),
							o = this.$popupContainer.find(".multiselect-option:visible").index(this.lastToggledInput.closest(".multiselect-option"));
						if (o < s) {
							var l = o;
							o = s, s = l
						}++o;
						var n = this.$popupContainer.find(".multiselect-option:not(.multiselect-filter-hidden)").slice(s, o).find("input");
						n.prop("checked", i), this.options.selectedClass && n.closest(".multiselect-option").toggleClass(this.options.selectedClass, i);
						for (var p = 0, a = n.length; p < a; p++) {
							var r = d(n[p]);
							this.getOptionByValue(r.val()).prop("selected", i)
						}
					}
					e.trigger("change")
				} else if (!e.is("input")) {
					if (0 < (r = e.closest(".multiselect-option, .multiselect-all").find(".form-check-input")).length) r.prop("checked", !r.prop("checked")), r.change();
					else if (this.options.enableClickableOptGroups && this.options.multiple && !e.hasClass("caret-container")) {
						var c = e;
						c.hasClass("multiselect-group") || (c = e.closest(".multiselect-group")), 0 < (r = c.find(".form-check-input")).length && (r.prop("checked", !r.prop("checked")), r.change())
					}
					t.preventDefault()
				}
				0 < e.closest(".multiselect-option").find("input[type='checkbox'], input[type='radio']").length ? this.lastToggledInput = e : this.lastToggledInput = null, e.blur()
			}, this)), this.$container.off("keydown.multiselect").on("keydown.multiselect", d.proxy(function(t) {
				if (!d("input.multiselect-search", this.$container).is(":focus"))
					if (9 === t.keyCode && this.$container.hasClass("show")) this.$button.click();
					else {
						var e = d(this.$container).find(".multiselect-option:not(.disabled), .multiselect-group:not(.disabled), .multiselect-all").filter(":visible");
						if (!e.length) return;
						var i = e.index(e.filter(":focus")),
							s = e.eq(i);
						if (32 === t.keyCode) {
							var o = s.find("input");
							o.prop("checked", !o.prop("checked")), o.change(), t.preventDefault()
						}
						13 === t.keyCode && setTimeout(function() {
							s.focus()
						}, 0)
					}
			}, this)), this.options.enableClickableOptGroups && this.options.multiple && (d(".multiselect-group input", this.$popupContainer).off("change"), d(".multiselect-group input", this.$popupContainer).on("change", d.proxy(function(t) {
				t.stopPropagation();
				var l = d(t.target).prop("checked") || !1,
					e = d(t.target).closest(".dropdown-item"),
					i = e.nextUntil(".multiselect-group").not(".multiselect-filter-hidden").not(".disabled").find("input"),
					n = [];
				this.options.selectedClass && (l ? e.addClass(this.options.selectedClass) : e.removeClass(this.options.selectedClass)), d.each(i, d.proxy(function(t, e) {
					var i = d(e),
						s = i.val(),
						o = this.getOptionByValue(s);
					l ? (i.prop("checked", !0), i.closest(".dropdown-item").addClass(this.options.selectedClass), o.prop("selected", !0)) : (i.prop("checked", !1), i.closest(".dropdown-item").removeClass(this.options.selectedClass), o.prop("selected", !1)), n.push(this.getOptionByValue(s))
				}, this)), this.options.onChange(n, l), this.$select.change(), this.updateButtonText(), this.updateSelectAll()
			}, this))), this.options.enableCollapsibleOptGroups && this.options.multiple && (d(".multiselect-group .caret-container", this.$popupContainer).off("click"), d(".multiselect-group .caret-container", this.$popupContainer).on("click", d.proxy(function(t) {
				var e = d(t.target).closest(".multiselect-group").nextUntil(".multiselect-group").not(".multiselect-filter-hidden"),
					i = !0;
				e.each(function() {
					i = i && !d(this).hasClass("multiselect-collapsible-hidden")
				}), i ? e.hide().addClass("multiselect-collapsible-hidden") : e.show().removeClass("multiselect-collapsible-hidden")
			}, this)))
		},
		createCheckbox: function(t, e, i, s, o, l) {
			var n = d("<span />");
			if (n.addClass("form-check"), this.options.enableHTML && 0 < d(e).length) n.append(d(e));
			else {
				var p = d('<label class="form-check-label" />');
				p.text(e), n.append(p)
			}
			var a = d('<input class="form-check-input"/>').attr("type", l);
			return a.val(s), n.prepend(a), i && a.attr("name", i), t.prepend(n), t.attr("title", o || e), a
		},
		createOptionValue: function(t, e) {
			var i = d(t);
			i.is(":selected") && i.prop("selected", !0);
			var s = this.options.optionLabel(t),
				o = this.options.optionClass(t),
				l = i.val(),
				n = this.options.multiple ? "checkbox" : "radio",
				p = i.attr("title"),
				a = d(this.options.templates.option);
			a.addClass(o), e && this.options.indentGroupOptions && a.addClass("multiselect-group-option-indented"), this.options.collapseOptGroupsByDefault && "optgroup" === d(t).parent().prop("tagName").toLowerCase() && (a.addClass("multiselect-collapsible-hidden"), a.hide());
			var r = this.options.checkboxName(i),
				c = this.createCheckbox(a, s, r, l, p, n),
				h = i.prop("selected") || !1;
			l === this.options.selectAllValue && (a.addClass("multiselect-all"), a.removeClass("multiselect-option"), c.parent().parent().addClass("multiselect-all")), this.$popupContainer.append(a), i.is(":disabled") && c.attr("disabled", "disabled").prop("disabled", !0).closest(".dropdown-item").addClass("disabled"), c.prop("checked", h), h && this.options.selectedClass && c.closest(".dropdown-item").addClass(this.options.selectedClass)
		},
		createDivider: function(t) {
			var e = d(this.options.templates.divider);
			this.$popupContainer.append(e)
		},
		createOptgroup: function(t) {
			var e = d(t),
				i = e.attr("label"),
				s = e.attr("value"),
				o = e.attr("title"),
				l = d("<span class='multiselect-group dropdown-item-text'></span>");
			this.options.enableClickableOptGroups && this.options.multiple ? (l = d(this.options.templates.optionGroup), this.createCheckbox(l, i, null, s, o, "checkbox")) : this.options.enableHTML ? l.html(" " + i) : l.text(" " + i);
			var n = this.options.optionClass(t);
			l.addClass(n), this.options.enableCollapsibleOptGroups && this.options.multiple && (l.find(".form-check").addClass("d-inline-block"), l.append('<span class="caret-container dropdown-toggle pl-1"></span>')), e.is(":disabled") && l.addClass("disabled"), this.$popupContainer.append(l), d("option", t).each(d.proxy(function(t, e) {
				this.createOptionValue(e, !0)
			}, this))
		},
		buildReset: function() {
			if (this.options.includeResetOption) {
				if (this.options.includeResetDivider) {
					var t = d(this.options.templates.divider);
					t.addClass("mt-0"), this.$popupContainer.prepend(t)
				}
				var e = d(this.options.templates.resetButton);
				this.options.enableHTML ? d("button", e).html(this.options.resetText) : d("button", e).text(this.options.resetText), d("button", e).click(d.proxy(function() {
					this.clearSelection()
				}, this)), this.$popupContainer.prepend(e)
			}
		},
		buildSelectAll: function() {
			if ("number" == typeof this.options.selectAllValue && (this.options.selectAllValue = this.options.selectAllValue.toString()), !this.hasSelectAll() && this.options.includeSelectAllOption && this.options.multiple && d("option", this.$select).length > this.options.includeSelectAllIfMoreThan) {
				this.options.includeSelectAllDivider && this.$popupContainer.prepend(d(this.options.templates.divider));
				var t = d(this.options.templates.li || this.options.templates.option),
					e = this.createCheckbox(t, this.options.selectAllText, this.options.selectAllName, this.options.selectAllValue, this.options.selectAllText, "checkbox");
				t.addClass("multiselect-all"), t.removeClass("multiselect-option"), t.find(".form-check-label").addClass("font-weight-bold"), this.$popupContainer.prepend(t), e.prop("checked", !1)
			}
		},
		buildFilter: function() {
			if (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering) {
				var t = Math.max(this.options.enableFiltering, this.options.enableCaseInsensitiveFiltering);
				this.$select.find("option").length >= t && (this.$filter = d(this.options.templates.filter), d("input", this.$filter).attr("placeholder", this.options.filterPlaceholder), this.options.includeFilterClearBtn ? (this.isFirefox() && 0 === this.$filter.find(".multiselect-clear-filter").length && this.$filter.append("<i class='fas fa-times text-muted multiselect-clear-filter multiselect-moz-clear-filter'></i>"), this.$filter.find(".multiselect-clear-filter").on("click", d.proxy(function(t) {
					clearTimeout(this.searchTimeout), this.query = "", this.$filter.find(".multiselect-search").val(""), d(".dropdown-item", this.$popupContainer).show().removeClass("multiselect-filter-hidden"), this.updateSelectAll(), this.options.enableClickableOptGroups && this.options.multiple && this.updateOptGroups()
				}, this))) : (this.$filter.find(".multiselect-search").attr("type", "text"), this.$filter.find(".multiselect-clear-filter").remove()), this.$popupContainer.prepend(this.$filter), this.$filter.val(this.query).on("click", function(t) {
					t.stopPropagation()
				}).on("input keydown", d.proxy(function(t) {
					13 === t.which && t.preventDefault(), this.isFirefox() && this.options.includeFilterClearBtn && (t.target.value ? this.$filter.find(".multiselect-moz-clear-filter").show() : this.$filter.find(".multiselect-moz-clear-filter").hide()), clearTimeout(this.searchTimeout), this.searchTimeout = this.asyncFunction(d.proxy(function() {
						var p, a;
						this.query !== t.target.value && (this.query = t.target.value, d.each(d(".multiselect-option, .multiselect-group", this.$popupContainer), d.proxy(function(t, e) {
							var i = 0 < d("input", e).length ? d("input", e).val() : "",
								s = d(".form-check-label", e).text(),
								o = "";
							if ("text" === this.options.filterBehavior ? o = s : "value" === this.options.filterBehavior ? o = i : "both" === this.options.filterBehavior && (o = s + "\n" + i), i !== this.options.selectAllValue && s) {
								var l = !1;
								if (this.options.enableCaseInsensitiveFiltering && (o = o.toLowerCase(), this.query = this.query.toLowerCase()), this.options.enableFullValueFiltering && "both" !== this.options.filterBehavior) {
									var n = o.trim().substring(0, this.query.length); - 1 < this.query.indexOf(n) && (l = !0)
								} else - 1 < o.indexOf(this.query) && (l = !0);
								l || (d(e).css("display", "none"), d(e).addClass("multiselect-filter-hidden")), l && (d(e).css("display", "block"), d(e).removeClass("multiselect-filter-hidden")), d(e).hasClass("multiselect-group") ? (p = e, a = l) : (l && d(p).show().removeClass("multiselect-filter-hidden"), !l && a && d(e).show().removeClass("multiselect-filter-hidden"))
							}
						}, this))), this.updateSelectAll(), this.options.enableClickableOptGroups && this.options.multiple && this.updateOptGroups(), this.options.onFiltering(t.target)
					}, this), 300, this)
				}, this)))
			}
		},
		destroy: function() {
			this.$container.remove(), this.$select.show(), this.$select.prop("disabled", this.options.wasDisabled), this.$select.data("multiselect", null)
		},
		refresh: function() {
			var o = {};
			d(".multiselect-option input", this.$popupContainer).each(function() {
				o[d(this).val()] = d(this)
			}), d("option", this.$select).each(d.proxy(function(t, e) {
				var i = d(e),
					s = o[d(e).val()];
				i.is(":selected") ? (s.prop("checked", !0), this.options.selectedClass && s.closest(".multiselect-option").addClass(this.options.selectedClass)) : (s.prop("checked", !1), this.options.selectedClass && s.closest(".multiselect-option").removeClass(this.options.selectedClass)), i.is(":disabled") ? s.attr("disabled", "disabled").prop("disabled", !0).closest(".multiselect-option").addClass("disabled") : s.prop("disabled", !1).closest(".multiselect-option").removeClass("disabled")
			}, this)), this.updateButtonText(), this.updateSelectAll(), this.options.enableClickableOptGroups && this.options.multiple && this.updateOptGroups()
		},
		select: function(t, e) {
			d.isArray(t) || (t = [t]);
			for (var i = 0; i < t.length; i++) {
				var s = t[i];
				if (null != s) {
					var o = this.getOptionByValue(s),
						l = this.getInputByValue(s);
					void 0 !== o && void 0 !== l && (this.options.multiple || this.deselectAll(!1), this.options.selectedClass && l.closest(".dropdown-item").addClass(this.options.selectedClass), l.prop("checked", !0), o.prop("selected", !0), e && this.options.onChange(o, !0))
				}
			}
			this.updateButtonText(), this.updateSelectAll(), this.options.enableClickableOptGroups && this.options.multiple && this.updateOptGroups()
		},
		clearSelection: function() {
			this.deselectAll(!1), this.updateButtonText(), this.updateSelectAll(), this.options.enableClickableOptGroups && this.options.multiple && this.updateOptGroups()
		},
		deselect: function(t, e) {
			d.isArray(t) || (t = [t]);
			for (var i = 0; i < t.length; i++) {
				var s = t[i];
				if (null != s) {
					var o = this.getOptionByValue(s),
						l = this.getInputByValue(s);
					void 0 !== o && void 0 !== l && (this.options.selectedClass && l.closest(".dropdown-item").removeClass(this.options.selectedClass), l.prop("checked", !1), o.prop("selected", !1), e && this.options.onChange(o, !1))
				}
			}
			this.updateButtonText(), this.updateSelectAll(), this.options.enableClickableOptGroups && this.options.multiple && this.updateOptGroups()
		},
		selectAll: function(t, e) {
			if (t = void 0 === t || t) {
				var i = d(".multiselect-option:not(.disabled):not(.multiselect-filter-hidden)", this.$popupContainer);
				d("input:enabled", i).prop("checked", !0), i.addClass(this.options.selectedClass), d("input:enabled", i).each(d.proxy(function(t, e) {
					var i = d(e).val(),
						s = this.getOptionByValue(i);
					d(s).prop("selected", !0)
				}, this))
			} else {
				var s = d(".multiselect-option:not(.disabled)", this.$popupContainer);
				d("input:enabled", s).prop("checked", !0), s.addClass(this.options.selectedClass), d("input:enabled", s).each(d.proxy(function(t, e) {
					var i = d(e).val(),
						s = this.getOptionByValue(i);
					d(s).prop("selected", !0)
				}, this))
			}
			d('.multiselect-option input[value="' + this.options.selectAllValue + '"]', this.$popupContainer).prop("checked", !0), this.options.enableClickableOptGroups && this.options.multiple && this.updateOptGroups(), this.updateButtonText(), this.updateSelectAll(), e && this.options.onSelectAll()
		},
		deselectAll: function(t, e) {
			if (t = void 0 === t || t) {
				var i = d(".multiselect-option:not(.disabled):not(.multiselect-filter-hidden)", this.$popupContainer);
				d('input[type="checkbox"]:enabled', i).prop("checked", !1), i.removeClass(this.options.selectedClass), d('input[type="checkbox"]:enabled', i).each(d.proxy(function(t, e) {
					var i = d(e).val(),
						s = this.getOptionByValue(i);
					d(s).prop("selected", !1)
				}, this))
			} else {
				var s = d(".multiselect-option:not(.disabled):not(.multiselect-group)", this.$popupContainer);
				d('input[type="checkbox"]:enabled', s).prop("checked", !1), s.removeClass(this.options.selectedClass), d('input[type="checkbox"]:enabled', s).each(d.proxy(function(t, e) {
					var i = d(e).val(),
						s = this.getOptionByValue(i);
					d(s).prop("selected", !1)
				}, this))
			}
			d('.multiselect-all input[value="' + this.options.selectAllValue + '"]', this.$popupContainer).prop("checked", !1), this.options.enableClickableOptGroups && this.options.multiple && this.updateOptGroups(), this.updateButtonText(), this.updateSelectAll(), e && this.options.onDeselectAll()
		},
		rebuild: function() {
			this.$popupContainer.html(""), this.options.multiple = "multiple" === this.$select.attr("multiple"), this.buildSelectAll(), this.buildDropdownOptions(), this.buildFilter(), this.updateButtonText(), this.updateSelectAll(!0), this.options.enableClickableOptGroups && this.options.multiple && this.updateOptGroups(), this.options.disableIfEmpty && d("option", this.$select).length <= 0 ? this.disable() : this.enable(), this.options.dropRight ? this.$container.addClass("dropright") : this.options.dropUp && this.$container.addClass("dropup"), "never" !== this.options.widthSynchronizationMode && this.synchronizeButtonAndPopupWidth()
		},
		dataprovider: function(t) {
			var l = 0,
				n = this.$select.empty();
			d.each(t, function(t, e) {
				var s;
				if (d.isArray(e.children)) l++, s = d("<optgroup/>").attr({
						label: e.label || "Group " + l,
						disabled: !!e.disabled,
						value: e.value
					}),
					function(t, e) {
						for (var i = 0; i < t.length; ++i) e(t[i])
					}(e.children, function(t) {
						var e = {
							value: t.value,
							label: t.label || t.value,
							title: t.title,
							selected: !!t.selected,
							disabled: !!t.disabled
						};
						for (var i in t.attributes) e["data-" + i] = t.attributes[i];
						s.append(d("<option/>").attr(e))
					});
				else {
					var i = {
						value: e.value,
						label: e.label || e.value,
						title: e.title,
						class: e.class,
						selected: !!e.selected,
						disabled: !!e.disabled
					};
					for (var o in e.attributes) i["data-" + o] = e.attributes[o];
					(s = d("<option/>").attr(i)).text(e.label || e.value)
				}
				n.append(s)
			}), this.rebuild()
		},
		enable: function() {
			this.$select.prop("disabled", !1), this.$button.prop("disabled", !1).removeClass("disabled"), this.updateButtonText()
		},
		disable: function() {
			this.$select.prop("disabled", !0), this.$button.prop("disabled", !0).addClass("disabled"), this.updateButtonText()
		},
		setOptions: function(t) {
			this.options = this.mergeOptions(t)
		},
		mergeOptions: function(t) {
			return d.extend(!0, {}, this.defaults, this.options, t)
		},
		hasSelectAll: function() {
			return 0 < d(".multiselect-all", this.$popupContainer).length
		},
		updateOptGroups: function() {
			var t = d(".multiselect-group", this.$popupContainer),
				i = this.options.selectedClass;
			t.each(function() {
				var t = d(this).nextUntil(".multiselect-group").not(".multiselect-filter-hidden").not(".disabled"),
					e = !0;
				t.each(function() {
					d("input", this).prop("checked") || (e = !1)
				}), i && (e ? d(this).addClass(i) : d(this).removeClass(i)), d("input", this).prop("checked", e)
			})
		},
		updateSelectAll: function(t) {
			if (this.hasSelectAll()) {
				var e = d(".multiselect-option:not(.multiselect-filter-hidden):not(.multiselect-group):not(.disabled) input:enabled", this.$popupContainer),
					i = e.length,
					s = e.filter(":checked").length,
					o = d(".multiselect-all", this.$popupContainer),
					l = o.find("input");
				0 < s && s === i ? (l.prop("checked", !0), o.addClass(this.options.selectedClass)) : (l.prop("checked", !1), o.removeClass(this.options.selectedClass))
			}
		},
		updateButtonText: function() {
			var t = this.getSelected();
			this.options.enableHTML ? d(".multiselect .multiselect-selected-text", this.$container).html(this.options.buttonText(t, this.$select)) : d(".multiselect .multiselect-selected-text", this.$container).text(this.options.buttonText(t, this.$select)), d(".multiselect", this.$container).attr("title", this.options.buttonTitle(t, this.$select)), this.$button.trigger("change")
		},
		getSelected: function() {
			return d("option", this.$select).filter(":selected")
		},
		getOptionByValue: function(t) {
			for (var e = d("option", this.$select), i = t.toString(), s = 0; s < e.length; s += 1) {
				var o = e[s];
				if (o.value === i) return d(o)
			}
		},
		getInputByValue: function(t) {
			for (var e = d(".multiselect-option input:not(.multiselect-search)", this.$popupContainer), i = t.toString(), s = 0; s < e.length; s += 1) {
				var o = e[s];
				if (o.value === i) return d(o)
			}
		},
		updateOriginalOptions: function() {
			this.originalOptions = this.$select.clone()[0].options
		},
		asyncFunction: function(t, e, i) {
			var s = Array.prototype.slice.call(arguments, 3);
			return setTimeout(function() {
				t.apply(i || window, s)
			}, e)
		},
		setAllSelectedText: function(t) {
			this.options.allSelectedText = t, this.updateButtonText()
		},
		isFirefox: function() {
			return !(!navigator || !navigator.userAgent) && -1 < navigator.userAgent.toLocaleLowerCase().indexOf("firefox")
		}
	}, d.fn.multiselect = function(e, i, s) {
		return this.each(function() {
			var t = d(this).data("multiselect");
			t || (t = new o(this, "object" == typeof e && e), d(this).data("multiselect", t)), "string" == typeof e && (t[e](i, s), "destroy" === e && d(this).data("multiselect", !1))
		})
	}, d.fn.multiselect.Constructor = o, d(function() {
		d("select[data-role=multiselect]").multiselect()
	})
});
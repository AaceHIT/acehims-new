! function(e) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(E, P) {
	"use strict";
	if (!E.jstree) {
		var s = 0,
			a = !1,
			n = !1,
			o = !1,
			r = [],
			e = E("script:last").attr("src"),
			k = window.document,
			c = window.setImmediate,
			i = window.Promise;
		!c && i && (c = function(e, t) {
			i.resolve(t).then(e)
		}), E.jstree = {
			version: "3.3.12",
			defaults: {
				plugins: []
			},
			plugins: {},
			path: e && -1 !== e.indexOf("/") ? e.replace(/\/[^\/]+$/, "") : "",
			idregex: /[\\:&!^|()\[\]<>@*'+~#";.,=\- \/${}%?`]/g,
			root: "#"
		}, E.jstree.create = function(e, i) {
			var r = new E.jstree.core(++s),
				t = i;
			return i = E.extend(!0, {}, E.jstree.defaults, i), t && t.plugins && (i.plugins = t.plugins), E.each(i.plugins, function(e, t) {
				"core" !== e && (r = r.plugin(t, i[t]))
			}), E(e).data("jstree", r), r.init(e, i), r
		}, E.jstree.destroy = function() {
			E(".jstree:jstree").jstree("destroy"), E(k).off(".jstree")
		}, E.jstree.core = function(e) {
			this._id = e, this._cnt = 0, this._wrk = null, this._data = {
				core: {
					themes: {
						name: !1,
						dots: !1,
						icons: !1,
						ellipsis: !1
					},
					selected: [],
					last_error: {},
					working: !1,
					worker_queue: [],
					focused: null
				}
			}
		}, E.jstree.reference = function(t) {
			var i = null,
				e = null;
			if (!t || !t.id || t.tagName && t.nodeType || (t = t.id), !e || !e.length) try {
				e = E(t)
			} catch (e) {}
			if (!e || !e.length) try {
				e = E("#" + t.replace(E.jstree.idregex, "\\$&"))
			} catch (e) {}
			return e && e.length && (e = e.closest(".jstree")).length && (e = e.data("jstree")) ? i = e : E(".jstree").each(function() {
				var e = E(this).data("jstree");
				return e && e._model.data[t] ? (i = e, !1) : void 0
			}), i
		}, E.fn.jstree = function(i) {
			var r = "string" == typeof i,
				s = Array.prototype.slice.call(arguments, 1),
				a = null;
			return !(!0 === i && !this.length) && (this.each(function() {
				var e = E.jstree.reference(this),
					t = r && e ? e[i] : null;
				return a = r && t ? t.apply(e, s) : null, e || r || i !== P && !E.isPlainObject(i) || E.jstree.create(this, i), (e && !r || !0 === i) && (a = e || !1), (null === a || a === P) && void 0
			}), null !== a && a !== P ? a : this)
		}, E.expr.pseudos.jstree = E.expr.createPseudo(function(e) {
			return function(e) {
				return E(e).hasClass("jstree") && E(e).data("jstree") !== P
			}
		}), E.jstree.defaults.core = {
			data: !1,
			strings: !1,
			check_callback: !1,
			error: E.noop,
			animation: 200,
			multiple: !0,
			themes: {
				name: !1,
				url: !1,
				dir: !1,
				dots: !0,
				icons: !0,
				ellipsis: !1,
				stripes: !1,
				variant: !1,
				responsive: !1
			},
			expand_selected_onload: !0,
			worker: !0,
			force_text: !1,
			dblclick_toggle: !0,
			loaded_state: !1,
			restore_focus: !0,
			compute_elements_positions: !1,
			keyboard: {
				"ctrl-space": function(e) {
					e.type = "click", E(e.currentTarget).trigger(e)
				},
				enter: function(e) {
					e.type = "click", E(e.currentTarget).trigger(e)
				},
				left: function(e) {
					if (e.preventDefault(), this.is_open(e.currentTarget)) this.close_node(e.currentTarget);
					else {
						var t = this.get_parent(e.currentTarget);
						t && t.id !== E.jstree.root && this.get_node(t, !0).children(".jstree-anchor").trigger("focus")
					}
				},
				up: function(e) {
					e.preventDefault();
					var t = this.get_prev_dom(e.currentTarget);
					t && t.length && t.children(".jstree-anchor").trigger("focus")
				},
				right: function(e) {
					if (e.preventDefault(), this.is_closed(e.currentTarget)) this.open_node(e.currentTarget, function(e) {
						this.get_node(e, !0).children(".jstree-anchor").trigger("focus")
					});
					else if (this.is_open(e.currentTarget)) {
						var t = this.get_node(e.currentTarget, !0).children(".jstree-children")[0];
						t && E(this._firstChild(t)).children(".jstree-anchor").trigger("focus")
					}
				},
				down: function(e) {
					e.preventDefault();
					var t = this.get_next_dom(e.currentTarget);
					t && t.length && t.children(".jstree-anchor").trigger("focus")
				},
				"*": function(e) {
					this.open_all()
				},
				home: function(e) {
					e.preventDefault();
					var t = this._firstChild(this.get_container_ul()[0]);
					t && E(t).children(".jstree-anchor").filter(":visible").trigger("focus")
				},
				end: function(e) {
					e.preventDefault(), this.element.find(".jstree-anchor").filter(":visible").last().trigger("focus")
				},
				f2: function(e) {
					e.preventDefault(), this.edit(e.currentTarget)
				}
			}
		}, E.jstree.core.prototype = {
			plugin: function(e, t) {
				var i = E.jstree.plugins[e];
				return i ? (this._data[e] = {}, i.prototype = this, new i(t, this)) : this
			},
			init: function(e, t) {
				this._model = {
					data: {},
					changed: [],
					force_full_redraw: !1,
					redraw_timeout: !1,
					default_state: {
						loaded: !0,
						opened: !1,
						selected: !1,
						disabled: !1
					}
				}, this._model.data[E.jstree.root] = {
					id: E.jstree.root,
					parent: null,
					parents: [],
					children: [],
					children_d: [],
					state: {
						loaded: !1
					}
				}, this.element = E(e).addClass("jstree jstree-" + this._id), this.settings = t, this._data.core.ready = !1, this._data.core.loaded = !1, this._data.core.rtl = "rtl" === this.element.css("direction"), this.element[this._data.core.rtl ? "addClass" : "removeClass"]("jstree-rtl"), this.element.attr("role", "tree"), this.settings.core.multiple && this.element.attr("aria-multiselectable", !0), this.element.attr("tabindex") || this.element.attr("tabindex", "0"), this.bind(), this.trigger("init"), this._data.core.original_container_html = this.element.find(" > ul > li").clone(!0), this._data.core.original_container_html.find("li").addBack().contents().filter(function() {
					return 3 === this.nodeType && (!this.nodeValue || /^\s+$/.test(this.nodeValue))
				}).remove(), this.element.html("<ul class='jstree-container-ul jstree-children' role='group'><li id='j" + this._id + "_loading' class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='none'><i class='jstree-icon jstree-ocl'></i><a class='jstree-anchor' role='treeitem' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>" + this.get_string("Loading ...") + "</a></li></ul>"), this.element.attr("aria-activedescendant", "j" + this._id + "_loading"), this._data.core.li_height = this.get_container_ul().children("li").first().outerHeight() || 24, this._data.core.node = this._create_prototype_node(), this.trigger("loading"), this.load_node(E.jstree.root)
			},
			destroy: function(e) {
				if (this.trigger("destroy"), this._wrk) try {
					window.URL.revokeObjectURL(this._wrk), this._wrk = null
				} catch (e) {}
				e || this.element.empty(), this.teardown()
			},
			_create_prototype_node: function() {
				var e, t, i = k.createElement("LI");
				return i.setAttribute("role", "none"), (e = k.createElement("I")).className = "jstree-icon jstree-ocl", e.setAttribute("role", "presentation"), i.appendChild(e), (e = k.createElement("A")).className = "jstree-anchor", e.setAttribute("href", "#"), e.setAttribute("tabindex", "-1"), e.setAttribute("role", "treeitem"), (t = k.createElement("I")).className = "jstree-icon jstree-themeicon", t.setAttribute("role", "presentation"), e.appendChild(t), i.appendChild(e), e = t = null, i
			},
			_kbevent_to_func: function(e) {
				var t = [];
				if (e.ctrlKey && t.push("ctrl"), e.altKey && t.push("alt"), e.shiftKey && t.push("shift"), t.push({
						8: "Backspace",
						9: "Tab",
						13: "Enter",
						19: "Pause",
						27: "Esc",
						32: "Space",
						33: "PageUp",
						34: "PageDown",
						35: "End",
						36: "Home",
						37: "Left",
						38: "Up",
						39: "Right",
						40: "Down",
						44: "Print",
						45: "Insert",
						46: "Delete",
						96: "Numpad0",
						97: "Numpad1",
						98: "Numpad2",
						99: "Numpad3",
						100: "Numpad4",
						101: "Numpad5",
						102: "Numpad6",
						103: "Numpad7",
						104: "Numpad8",
						105: "Numpad9",
						"-13": "NumpadEnter",
						112: "F1",
						113: "F2",
						114: "F3",
						115: "F4",
						116: "F5",
						117: "F6",
						118: "F7",
						119: "F8",
						120: "F9",
						121: "F10",
						122: "F11",
						123: "F12",
						144: "Numlock",
						145: "Scrolllock",
						16: "Shift",
						17: "Ctrl",
						18: "Alt",
						48: "0",
						49: "1",
						50: "2",
						51: "3",
						52: "4",
						53: "5",
						54: "6",
						55: "7",
						56: "8",
						57: "9",
						59: ";",
						61: "=",
						65: "a",
						66: "b",
						67: "c",
						68: "d",
						69: "e",
						70: "f",
						71: "g",
						72: "h",
						73: "i",
						74: "j",
						75: "k",
						76: "l",
						77: "m",
						78: "n",
						79: "o",
						80: "p",
						81: "q",
						82: "r",
						83: "s",
						84: "t",
						85: "u",
						86: "v",
						87: "w",
						88: "x",
						89: "y",
						90: "z",
						107: "+",
						109: "-",
						110: ".",
						186: ";",
						187: "=",
						188: ",",
						189: "-",
						190: ".",
						191: "/",
						192: "`",
						219: "[",
						220: "\\",
						221: "]",
						222: "'",
						111: "/",
						106: "*",
						173: "-"
					} [e.which] || e.which), "shift-shift" === (t = t.sort().join("-").toLowerCase()) || "ctrl-ctrl" === t || "alt-alt" === t) return null;
				var i, r, s = this.settings.core.keyboard;
				for (i in s)
					if (s.hasOwnProperty(i) && ("-" !== (r = i) && "+" !== r && (r = (r = r.replace("--", "-MINUS").replace("+-", "-MINUS").replace("++", "-PLUS").replace("-+", "-PLUS")).split(/-|\+/).sort().join("-").replace("MINUS", "-").replace("PLUS", "+").toLowerCase()), r === t)) return s[i];
				return null
			},
			teardown: function() {
				this.unbind(), this.element.removeClass("jstree").removeData("jstree").find("[class^='jstree']").addBack().attr("class", function() {
					return this.className.replace(/jstree[^ ]*|$/gi, "")
				}), this.element = null
			},
			bind: function() {
				var a = "",
					n = null,
					t = 0;
				this.element.on("dblclick.jstree", function(e) {
					if (e.target.tagName && "input" === e.target.tagName.toLowerCase()) return !0;
					if (k.selection && k.selection.empty) k.selection.empty();
					else if (window.getSelection) {
						var t = window.getSelection();
						try {
							t.removeAllRanges(), t.collapse()
						} catch (e) {}
					}
				}).on("mousedown.jstree", function(e) {
					e.target === this.element[0] && (e.preventDefault(), t = +new Date)
				}.bind(this)).on("mousedown.jstree", ".jstree-ocl", function(e) {
					e.preventDefault()
				}).on("click.jstree", ".jstree-ocl", function(e) {
					this.toggle_node(e.target)
				}.bind(this)).on("dblclick.jstree", ".jstree-anchor", function(e) {
					return !(!e.target.tagName || "input" !== e.target.tagName.toLowerCase()) || void(this.settings.core.dblclick_toggle && this.toggle_node(e.target))
				}.bind(this)).on("click.jstree", ".jstree-anchor", function(e) {
					e.preventDefault(), e.currentTarget !== k.activeElement && E(e.currentTarget).trigger("focus"), this.activate_node(e.currentTarget, e)
				}.bind(this)).on("keydown.jstree", ".jstree-anchor", function(e) {
					if (e.target.tagName && "input" === e.target.tagName.toLowerCase()) return !0;
					this._data.core.rtl && (37 === e.which ? e.which = 39 : 39 === e.which && (e.which = 37));
					var t = this._kbevent_to_func(e);
					if (t) {
						var i = t.call(this, e);
						if (!1 === i || !0 === i) return i
					}
				}.bind(this)).on("load_node.jstree", function(e, t) {
					t.status && (t.node.id !== E.jstree.root || this._data.core.loaded || (this._data.core.loaded = !0, this._firstChild(this.get_container_ul()[0]) && this.element.attr("aria-activedescendant", this._firstChild(this.get_container_ul()[0]).id), this.trigger("loaded")), this._data.core.ready || setTimeout(function() {
						if (this.element && !this.get_container_ul().find(".jstree-loading").length) {
							if (this._data.core.ready = !0, this._data.core.selected.length) {
								if (this.settings.core.expand_selected_onload) {
									var e, t, i = [];
									for (e = 0, t = this._data.core.selected.length; e < t; e++) i = i.concat(this._model.data[this._data.core.selected[e]].parents);
									for (e = 0, t = (i = E.vakata.array_unique(i)).length; e < t; e++) this.open_node(i[e], !1, 0)
								}
								this.trigger("changed", {
									action: "ready",
									selected: this._data.core.selected
								})
							}
							this.trigger("ready")
						}
					}.bind(this), 0))
				}.bind(this)).on("keypress.jstree", function(e) {
					if (e.target.tagName && "input" === e.target.tagName.toLowerCase()) return !0;
					n && clearTimeout(n), n = setTimeout(function() {
						a = ""
					}, 500);
					var i = String.fromCharCode(e.which).toLowerCase(),
						t = this.element.find(".jstree-anchor").filter(":visible"),
						r = t.index(k.activeElement) || 0,
						s = !1;
					if (1 < (a += i).length) {
						if (t.slice(r).each(function(e, t) {
								return 0 === E(t).text().toLowerCase().indexOf(a) ? (E(t).trigger("focus"), !(s = !0)) : void 0
							}.bind(this)), s) return;
						if (t.slice(0, r).each(function(e, t) {
								return 0 === E(t).text().toLowerCase().indexOf(a) ? (E(t).trigger("focus"), !(s = !0)) : void 0
							}.bind(this)), s) return
					}
					if (new RegExp("^" + i.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + "+$").test(a)) {
						if (t.slice(r + 1).each(function(e, t) {
								return E(t).text().toLowerCase().charAt(0) === i ? (E(t).trigger("focus"), !(s = !0)) : void 0
							}.bind(this)), s) return;
						if (t.slice(0, r + 1).each(function(e, t) {
								return E(t).text().toLowerCase().charAt(0) === i ? (E(t).trigger("focus"), !(s = !0)) : void 0
							}.bind(this)), s) return
					}
				}.bind(this)).on("init.jstree", function() {
					var e = this.settings.core.themes;
					this._data.core.themes.dots = e.dots, this._data.core.themes.stripes = e.stripes, this._data.core.themes.icons = e.icons, this._data.core.themes.ellipsis = e.ellipsis, this.set_theme(e.name || "default", e.url), this.set_theme_variant(e.variant)
				}.bind(this)).on("loading.jstree", function() {
					this[this._data.core.themes.dots ? "show_dots" : "hide_dots"](), this[this._data.core.themes.icons ? "show_icons" : "hide_icons"](), this[this._data.core.themes.stripes ? "show_stripes" : "hide_stripes"](), this[this._data.core.themes.ellipsis ? "show_ellipsis" : "hide_ellipsis"]()
				}.bind(this)).on("blur.jstree", ".jstree-anchor", function(e) {
					this._data.core.focused = null, E(e.currentTarget).filter(".jstree-hovered").trigger("mouseleave"), this.element.attr("tabindex", "0")
				}.bind(this)).on("focus.jstree", ".jstree-anchor", function(e) {
					var t = this.get_node(e.currentTarget);
					t && t.id && (this._data.core.focused = t.id), this.element.find(".jstree-hovered").not(e.currentTarget).trigger("mouseleave"), E(e.currentTarget).trigger("mouseenter"), this.element.attr("tabindex", "-1")
				}.bind(this)).on("focus.jstree", function() {
					if (500 < +new Date - t && !this._data.core.focused && this.settings.core.restore_focus) {
						t = 0;
						var e = this.get_node(this.element.attr("aria-activedescendant"), !0);
						e && e.find("> .jstree-anchor").trigger("focus")
					}
				}.bind(this)).on("mouseenter.jstree", ".jstree-anchor", function(e) {
					this.hover_node(e.currentTarget)
				}.bind(this)).on("mouseleave.jstree", ".jstree-anchor", function(e) {
					this.dehover_node(e.currentTarget)
				}.bind(this))
			},
			unbind: function() {
				this.element.off(".jstree"), E(k).off(".jstree-" + this._id)
			},
			trigger: function(e, t) {
				t || (t = {}), (t.instance = this).element.triggerHandler(e.replace(".jstree", "") + ".jstree", t)
			},
			get_container: function() {
				return this.element
			},
			get_container_ul: function() {
				return this.element.children(".jstree-children").first()
			},
			get_string: function(e) {
				var t = this.settings.core.strings;
				return E.vakata.is_function(t) ? t.call(this, e) : t && t[e] ? t[e] : e
			},
			_firstChild: function(e) {
				for (e = e ? e.firstChild : null; null !== e && 1 !== e.nodeType;) e = e.nextSibling;
				return e
			},
			_nextSibling: function(e) {
				for (e = e ? e.nextSibling : null; null !== e && 1 !== e.nodeType;) e = e.nextSibling;
				return e
			},
			_previousSibling: function(e) {
				for (e = e ? e.previousSibling : null; null !== e && 1 !== e.nodeType;) e = e.previousSibling;
				return e
			},
			get_node: function(e, t) {
				var i;
				e && e.id && (e = e.id), e instanceof E && e.length && e[0].id && (e = e[0].id);
				try {
					if (this._model.data[e]) e = this._model.data[e];
					else if ("string" == typeof e && this._model.data[e.replace(/^#/, "")]) e = this._model.data[e.replace(/^#/, "")];
					else if ("string" == typeof e && (i = E("#" + e.replace(E.jstree.idregex, "\\$&"), this.element)).length && this._model.data[i.closest(".jstree-node").attr("id")]) e = this._model.data[i.closest(".jstree-node").attr("id")];
					else if ((i = this.element.find(e)).length && this._model.data[i.closest(".jstree-node").attr("id")]) e = this._model.data[i.closest(".jstree-node").attr("id")];
					else {
						if (!(i = this.element.find(e)).length || !i.hasClass("jstree")) return !1;
						e = this._model.data[E.jstree.root]
					}
					return t && (e = e.id === E.jstree.root ? this.element : E("#" + e.id.replace(E.jstree.idregex, "\\$&"), this.element)), e
				} catch (e) {
					return !1
				}
			},
			get_path: function(e, t, i) {
				if (!(e = e.parents ? e : this.get_node(e)) || e.id === E.jstree.root || !e.parents) return !1;
				var r, s, a = [];
				for (a.push(i ? e.id : e.text), r = 0, s = e.parents.length; r < s; r++) a.push(i ? e.parents[r] : this.get_text(e.parents[r]));
				return a = a.reverse().slice(1), t ? a.join(t) : a
			},
			get_next_dom: function(e, t) {
				var i;
				if ((e = this.get_node(e, !0))[0] === this.element[0]) {
					for (i = this._firstChild(this.get_container_ul()[0]); i && 0 === i.offsetHeight;) i = this._nextSibling(i);
					return !!i && E(i)
				}
				if (!e || !e.length) return !1;
				if (t) {
					for (i = e[0];
						(i = this._nextSibling(i)) && 0 === i.offsetHeight;);
					return !!i && E(i)
				}
				if (e.hasClass("jstree-open")) {
					for (i = this._firstChild(e.children(".jstree-children")[0]); i && 0 === i.offsetHeight;) i = this._nextSibling(i);
					if (null !== i) return E(i)
				}
				for (i = e[0];
					(i = this._nextSibling(i)) && 0 === i.offsetHeight;);
				return null !== i ? E(i) : e.parentsUntil(".jstree", ".jstree-node").nextAll(".jstree-node:visible").first()
			},
			get_prev_dom: function(e, t) {
				var i;
				if ((e = this.get_node(e, !0))[0] === this.element[0]) {
					for (i = this.get_container_ul()[0].lastChild; i && 0 === i.offsetHeight;) i = this._previousSibling(i);
					return !!i && E(i)
				}
				if (!e || !e.length) return !1;
				if (t) {
					for (i = e[0];
						(i = this._previousSibling(i)) && 0 === i.offsetHeight;);
					return !!i && E(i)
				}
				for (i = e[0];
					(i = this._previousSibling(i)) && 0 === i.offsetHeight;);
				if (null === i) return !(!(i = e[0].parentNode.parentNode) || !i.className || -1 === i.className.indexOf("jstree-node")) && E(i);
				for (e = E(i); e.hasClass("jstree-open");) e = e.children(".jstree-children").first().children(".jstree-node:visible:last");
				return e
			},
			get_parent: function(e) {
				return !(!(e = this.get_node(e)) || e.id === E.jstree.root) && e.parent
			},
			get_children_dom: function(e) {
				return (e = this.get_node(e, !0))[0] === this.element[0] ? this.get_container_ul().children(".jstree-node") : !(!e || !e.length) && e.children(".jstree-children").children(".jstree-node")
			},
			is_parent: function(e) {
				return (e = this.get_node(e)) && (!1 === e.state.loaded || 0 < e.children.length)
			},
			is_loaded: function(e) {
				return (e = this.get_node(e)) && e.state.loaded
			},
			is_loading: function(e) {
				return (e = this.get_node(e)) && e.state && e.state.loading
			},
			is_open: function(e) {
				return (e = this.get_node(e)) && e.state.opened
			},
			is_closed: function(e) {
				return (e = this.get_node(e)) && this.is_parent(e) && !e.state.opened
			},
			is_leaf: function(e) {
				return !this.is_parent(e)
			},
			load_node: function(n, o) {
				var e, t, i, r, s;
				if (E.vakata.is_array(n)) return this._load_nodes(n.slice(), o), !0;
				if (!(n = this.get_node(n))) return o && o.call(this, n, !1), !1;
				if (n.state.loaded) {
					for (n.state.loaded = !1, i = 0, r = n.parents.length; i < r; i++) this._model.data[n.parents[i]].children_d = E.vakata.array_filter(this._model.data[n.parents[i]].children_d, function(e) {
						return -1 === E.inArray(e, n.children_d)
					});
					for (e = 0, t = n.children_d.length; e < t; e++) this._model.data[n.children_d[e]].state.selected && (s = !0), delete this._model.data[n.children_d[e]];
					s && (this._data.core.selected = E.vakata.array_filter(this._data.core.selected, function(e) {
						return -1 === E.inArray(e, n.children_d)
					})), n.children = [], n.children_d = [], s && this.trigger("changed", {
						action: "load_node",
						node: n,
						selected: this._data.core.selected
					})
				}
				return n.state.failed = !1, n.state.loading = !0, this.get_node(n, !0).addClass("jstree-loading").attr("aria-busy", !0), this._load_node(n, function(e) {
					(n = this._model.data[n.id]).state.loading = !1, n.state.loaded = e, n.state.failed = !n.state.loaded;
					var t, i = this.get_node(n, !0),
						r = 0,
						s = this._model.data,
						a = !1;
					for (r = 0, t = n.children.length; r < t; r++)
						if (s[n.children[r]] && !s[n.children[r]].state.hidden) {
							a = !0;
							break
						} n.state.loaded && i && i.length && (i.removeClass("jstree-closed jstree-open jstree-leaf"), a ? "#" !== n.id && i.addClass(n.state.opened ? "jstree-open" : "jstree-closed") : i.addClass("jstree-leaf")), i.removeClass("jstree-loading").attr("aria-busy", !1), this.trigger("load_node", {
						node: n,
						status: e
					}), o && o.call(this, n, e)
				}.bind(this)), !0
			},
			_load_nodes: function(e, t, i, r) {
				var s, a, n = !0,
					o = function() {
						this._load_nodes(e, t, !0)
					},
					d = this._model.data,
					c = [];
				for (s = 0, a = e.length; s < a; s++) d[e[s]] && (!d[e[s]].state.loaded && !d[e[s]].state.failed || !i && r) && (this.is_loading(e[s]) || this.load_node(e[s], o), n = !1);
				if (n) {
					for (s = 0, a = e.length; s < a; s++) d[e[s]] && d[e[s]].state.loaded && c.push(e[s]);
					t && !t.done && (t.call(this, c), t.done = !0)
				}
			},
			load_all: function(e, t) {
				if (e || (e = E.jstree.root), !(e = this.get_node(e))) return !1;
				var i, r, s = [],
					a = this._model.data,
					n = a[e.id].children_d;
				for (e.state && !e.state.loaded && s.push(e.id), i = 0, r = n.length; i < r; i++) a[n[i]] && a[n[i]].state && !a[n[i]].state.loaded && s.push(n[i]);
				s.length ? this._load_nodes(s, function() {
					this.load_all(e, t)
				}) : (t && t.call(this, e), this.trigger("load_all", {
					node: e
				}))
			},
			_load_node: function(s, a) {
				var e, t = this.settings.core.data,
					n = function() {
						return 3 !== this.nodeType && 8 !== this.nodeType
					};
				return t ? E.vakata.is_function(t) ? t.call(this, s, function(e) {
					!1 === e ? a.call(this, !1) : this["string" == typeof e ? "_append_html_data" : "_append_json_data"](s, "string" == typeof e ? E(E.parseHTML(e)).filter(n) : e, function(e) {
						a.call(this, e)
					})
				}.bind(this)) : "object" == typeof t ? t.url ? (t = E.extend(!0, {}, t), E.vakata.is_function(t.url) && (t.url = t.url.call(this, s)), E.vakata.is_function(t.data) && (t.data = t.data.call(this, s)), E.ajax(t).done(function(e, t, i) {
					var r = i.getResponseHeader("Content-Type");
					return r && -1 !== r.indexOf("json") || "object" == typeof e ? this._append_json_data(s, e, function(e) {
						a.call(this, e)
					}) : r && -1 !== r.indexOf("html") || "string" == typeof e ? this._append_html_data(s, E(E.parseHTML(e)).filter(n), function(e) {
						a.call(this, e)
					}) : (this._data.core.last_error = {
						error: "ajax",
						plugin: "core",
						id: "core_04",
						reason: "Could not load node",
						data: JSON.stringify({
							id: s.id,
							xhr: i
						})
					}, this.settings.core.error.call(this, this._data.core.last_error), a.call(this, !1))
				}.bind(this)).fail(function(e) {
					this._data.core.last_error = {
						error: "ajax",
						plugin: "core",
						id: "core_04",
						reason: "Could not load node",
						data: JSON.stringify({
							id: s.id,
							xhr: e
						})
					}, a.call(this, !1), this.settings.core.error.call(this, this._data.core.last_error)
				}.bind(this))) : (e = E.vakata.is_array(t) ? E.extend(!0, [], t) : E.isPlainObject(t) ? E.extend(!0, {}, t) : t, s.id === E.jstree.root ? this._append_json_data(s, e, function(e) {
					a.call(this, e)
				}) : (this._data.core.last_error = {
					error: "nodata",
					plugin: "core",
					id: "core_05",
					reason: "Could not load node",
					data: JSON.stringify({
						id: s.id
					})
				}, this.settings.core.error.call(this, this._data.core.last_error), a.call(this, !1))) : "string" == typeof t ? s.id === E.jstree.root ? this._append_html_data(s, E(E.parseHTML(t)).filter(n), function(e) {
					a.call(this, e)
				}) : (this._data.core.last_error = {
					error: "nodata",
					plugin: "core",
					id: "core_06",
					reason: "Could not load node",
					data: JSON.stringify({
						id: s.id
					})
				}, this.settings.core.error.call(this, this._data.core.last_error), a.call(this, !1)) : a.call(this, !1) : s.id === E.jstree.root ? this._append_html_data(s, this._data.core.original_container_html.clone(!0), function(e) {
					a.call(this, e)
				}) : a.call(this, !1)
			},
			_node_changed: function(e) {
				(e = this.get_node(e)) && -1 === E.inArray(e.id, this._model.changed) && this._model.changed.push(e.id)
			},
			_append_html_data: function(e, t, i) {
				(e = this.get_node(e)).children = [], e.children_d = [];
				var r, s, a, n = t.is("ul") ? t.children() : t,
					o = e.id,
					d = [],
					c = [],
					l = this._model.data,
					h = l[o],
					_ = this._data.core.selected.length;
				for (n.each(function(e, t) {
						(r = this._parse_model_from_html(E(t), o, h.parents.concat())) && (d.push(r), c.push(r), l[r].children_d.length && (c = c.concat(l[r].children_d)))
					}.bind(this)), h.children = d, h.children_d = c, s = 0, a = h.parents.length; s < a; s++) l[h.parents[s]].children_d = l[h.parents[s]].children_d.concat(c);
				this.trigger("model", {
					nodes: c,
					parent: o
				}), o !== E.jstree.root ? (this._node_changed(o), this.redraw()) : (this.get_container_ul().children(".jstree-initial-node").remove(), this.redraw(!0)), this._data.core.selected.length !== _ && this.trigger("changed", {
					action: "model",
					selected: this._data.core.selected
				}), i.call(this, !0)
			},
			_append_json_data: function(e, t, d, i) {
				if (null !== this.element) {
					(e = this.get_node(e)).children = [], e.children_d = [], t.d && ("string" == typeof(t = t.d) && (t = JSON.parse(t))), E.vakata.is_array(t) || (t = [t]);
					var r = null,
						s = {
							df: this._model.default_state,
							dat: t,
							par: e.id,
							m: this._model.data,
							t_id: this._id,
							t_cnt: this._cnt,
							sel: this._data.core.selected
						},
						j = this,
						a = function(e, c) {
							e.data && (e = e.data);
							var t, i, r, s, a = e.dat,
								n = e.par,
								o = [],
								d = [],
								l = [],
								h = e.df,
								_ = e.t_id,
								g = e.t_cnt,
								u = e.m,
								f = u[n],
								p = e.sel,
								m = function(e, t, i) {
									i = i ? i.concat() : [], t && i.unshift(t);
									var r, s, a, n, o = e.id.toString(),
										d = {
											id: o,
											text: e.text || "",
											icon: e.icon === c || e.icon,
											parent: t,
											parents: i,
											children: e.children || [],
											children_d: e.children_d || [],
											data: e.data,
											state: {},
											li_attr: {
												id: !1
											},
											a_attr: {
												href: "#"
											},
											original: !1
										};
									for (r in h) h.hasOwnProperty(r) && (d.state[r] = h[r]);
									if (e && e.data && e.data.jstree && e.data.jstree.icon && (d.icon = e.data.jstree.icon), (d.icon === c || null === d.icon || "" === d.icon) && (d.icon = !0), e && e.data && (d.data = e.data, e.data.jstree))
										for (r in e.data.jstree) e.data.jstree.hasOwnProperty(r) && (d.state[r] = e.data.jstree[r]);
									if (e && "object" == typeof e.state)
										for (r in e.state) e.state.hasOwnProperty(r) && (d.state[r] = e.state[r]);
									if (e && "object" == typeof e.li_attr)
										for (r in e.li_attr) e.li_attr.hasOwnProperty(r) && (d.li_attr[r] = e.li_attr[r]);
									if (d.li_attr.id || (d.li_attr.id = o), e && "object" == typeof e.a_attr)
										for (r in e.a_attr) e.a_attr.hasOwnProperty(r) && (d.a_attr[r] = e.a_attr[r]);
									for (e && e.children && !0 === e.children && (d.state.loaded = !1, d.children = [], d.children_d = []), r = 0, s = (u[d.id] = d).children.length; r < s; r++) a = m(u[d.children[r]], d.id, i), n = u[a], d.children_d.push(a), n.children_d.length && (d.children_d = d.children_d.concat(n.children_d));
									return delete e.data, delete e.children, u[d.id].original = e, d.state.selected && l.push(d.id), d.id
								},
								v = function(e, t, i) {
									i = i ? i.concat() : [], t && i.unshift(t);
									for (var r, s, a, n, o, d = !1; d = "j" + _ + "_" + ++g, u[d];);
									for (r in o = {
											id: !1,
											text: "string" == typeof e ? e : "",
											icon: "object" != typeof e || e.icon === c || e.icon,
											parent: t,
											parents: i,
											children: [],
											children_d: [],
											data: null,
											state: {},
											li_attr: {
												id: !1
											},
											a_attr: {
												href: "#"
											},
											original: !1
										}, h) h.hasOwnProperty(r) && (o.state[r] = h[r]);
									if (e && e.id && (o.id = e.id.toString()), e && e.text && (o.text = e.text), e && e.data && e.data.jstree && e.data.jstree.icon && (o.icon = e.data.jstree.icon), (o.icon === c || null === o.icon || "" === o.icon) && (o.icon = !0), e && e.data && (o.data = e.data, e.data.jstree))
										for (r in e.data.jstree) e.data.jstree.hasOwnProperty(r) && (o.state[r] = e.data.jstree[r]);
									if (e && "object" == typeof e.state)
										for (r in e.state) e.state.hasOwnProperty(r) && (o.state[r] = e.state[r]);
									if (e && "object" == typeof e.li_attr)
										for (r in e.li_attr) e.li_attr.hasOwnProperty(r) && (o.li_attr[r] = e.li_attr[r]);
									if (o.li_attr.id && !o.id && (o.id = o.li_attr.id.toString()), o.id || (o.id = d), o.li_attr.id || (o.li_attr.id = o.id), e && "object" == typeof e.a_attr)
										for (r in e.a_attr) e.a_attr.hasOwnProperty(r) && (o.a_attr[r] = e.a_attr[r]);
									if (e && e.children && e.children.length) {
										for (r = 0, s = e.children.length; r < s; r++) a = v(e.children[r], o.id, i), n = u[a], o.children.push(a), n.children_d.length && (o.children_d = o.children_d.concat(n.children_d));
										o.children_d = o.children_d.concat(o.children)
									}
									return e && e.children && !0 === e.children && (o.state.loaded = !1, o.children = [], o.children_d = []), delete e.data, delete e.children, o.original = e, (u[o.id] = o).state.selected && l.push(o.id), o.id
								};
							if (a.length && a[0].id !== c && a[0].parent !== c) {
								for (i = 0, r = a.length; i < r; i++) a[i].children || (a[i].children = []), a[i].state || (a[i].state = {}), u[a[i].id.toString()] = a[i];
								for (i = 0, r = a.length; i < r; i++) u[a[i].parent.toString()] ? (u[a[i].parent.toString()].children.push(a[i].id.toString()), f.children_d.push(a[i].id.toString())) : void 0 !== j && (j._data.core.last_error = {
									error: "parse",
									plugin: "core",
									id: "core_07",
									reason: "Node with invalid parent",
									data: JSON.stringify({
										id: a[i].id.toString(),
										parent: a[i].parent.toString()
									})
								}, j.settings.core.error.call(j, j._data.core.last_error));
								for (i = 0, r = f.children.length; i < r; i++) t = m(u[f.children[i]], n, f.parents.concat()), d.push(t), u[t].children_d.length && (d = d.concat(u[t].children_d));
								for (i = 0, r = f.parents.length; i < r; i++) u[f.parents[i]].children_d = u[f.parents[i]].children_d.concat(d);
								s = {
									cnt: g,
									mod: u,
									sel: p,
									par: n,
									dpc: d,
									add: l
								}
							} else {
								for (i = 0, r = a.length; i < r; i++)(t = v(a[i], n, f.parents.concat())) && (o.push(t), d.push(t), u[t].children_d.length && (d = d.concat(u[t].children_d)));
								for (f.children = o, f.children_d = d, i = 0, r = f.parents.length; i < r; i++) u[f.parents[i]].children_d = u[f.parents[i]].children_d.concat(d);
								s = {
									cnt: g,
									mod: u,
									sel: p,
									par: n,
									dpc: d,
									add: l
								}
							}
							return "undefined" != typeof window && void 0 !== window.document ? s : void postMessage(s)
						},
						n = function(e, t) {
							if (null !== this.element) {
								this._cnt = e.cnt;
								var i, r = this._model.data;
								for (i in r) r.hasOwnProperty(i) && r[i].state && r[i].state.loading && e.mod[i] && (e.mod[i].state.loading = !0);
								if (this._model.data = e.mod, t) {
									var s, a = e.add,
										n = e.sel,
										o = this._data.core.selected.slice();
									if (r = this._model.data, n.length !== o.length || E.vakata.array_unique(n.concat(o)).length !== n.length) {
										for (i = 0, s = n.length; i < s; i++) - 1 === E.inArray(n[i], a) && -1 === E.inArray(n[i], o) && (r[n[i]].state.selected = !1);
										for (i = 0, s = o.length; i < s; i++) - 1 === E.inArray(o[i], n) && (r[o[i]].state.selected = !0)
									}
								}
								e.add.length && (this._data.core.selected = this._data.core.selected.concat(e.add)), this.trigger("model", {
									nodes: e.dpc,
									parent: e.par
								}), e.par !== E.jstree.root ? (this._node_changed(e.par), this.redraw()) : this.redraw(!0), e.add.length && this.trigger("changed", {
									action: "model",
									selected: this._data.core.selected
								}), !t && c ? c(function() {
									d.call(j, !0)
								}) : d.call(j, !0)
							}
						};
					if (this.settings.core.worker && window.Blob && window.URL && window.Worker) try {
						null === this._wrk && (this._wrk = window.URL.createObjectURL(new window.Blob(["self.onmessage = " + a.toString()], {
							type: "text/javascript"
						}))), !this._data.core.working || i ? (this._data.core.working = !0, (r = new window.Worker(this._wrk)).onmessage = function(e) {
							n.call(this, e.data, !0);
							try {
								r.terminate(), r = null
							} catch (e) {}
							this._data.core.worker_queue.length ? this._append_json_data.apply(this, this._data.core.worker_queue.shift()) : this._data.core.working = !1
						}.bind(this), s.par ? r.postMessage(s) : this._data.core.worker_queue.length ? this._append_json_data.apply(this, this._data.core.worker_queue.shift()) : this._data.core.working = !1) : this._data.core.worker_queue.push([e, t, d, !0])
					} catch (e) {
						n.call(this, a(s), !1), this._data.core.worker_queue.length ? this._append_json_data.apply(this, this._data.core.worker_queue.shift()) : this._data.core.working = !1
					} else n.call(this, a(s), !1)
				}
			},
			_parse_model_from_html: function(e, t, i) {
				i = i ? [].concat(i) : [], t && i.unshift(t);
				var r, s, a, n, o, d = this._model.data,
					c = {
						id: !1,
						text: !1,
						icon: !0,
						parent: t,
						parents: i,
						children: [],
						children_d: [],
						data: null,
						state: {},
						li_attr: {
							id: !1
						},
						a_attr: {
							href: "#"
						},
						original: !1
					};
				for (a in this._model.default_state) this._model.default_state.hasOwnProperty(a) && (c.state[a] = this._model.default_state[a]);
				if (n = E.vakata.attributes(e, !0), E.each(n, function(e, t) {
						return !(t = E.vakata.trim(t)).length || (c.li_attr[e] = t, void("id" === e && (c.id = t.toString())))
					}), (n = e.children("a").first()).length && (n = E.vakata.attributes(n, !0), E.each(n, function(e, t) {
						(t = E.vakata.trim(t)).length && (c.a_attr[e] = t)
					})), (n = e.children("a").first().length ? e.children("a").first().clone() : e.clone()).children("ins, i, ul").remove(), n = n.html(), n = E("<div></div>").html(n), c.text = this.settings.core.force_text ? n.text() : n.html(), n = e.data(), c.data = n ? E.extend(!0, {}, n) : null, c.state.opened = e.hasClass("jstree-open"), c.state.selected = e.children("a").hasClass("jstree-clicked"), c.state.disabled = e.children("a").hasClass("jstree-disabled"), c.data && c.data.jstree)
					for (a in c.data.jstree) c.data.jstree.hasOwnProperty(a) && (c.state[a] = c.data.jstree[a]);
				for ((n = e.children("a").children(".jstree-themeicon")).length && (c.icon = !n.hasClass("jstree-themeicon-hidden") && n.attr("rel")), c.state.icon !== P && (c.icon = c.state.icon), (c.icon === P || null === c.icon || "" === c.icon) && (c.icon = !0), n = e.children("ul").children("li"); d[o = "j" + this._id + "_" + ++this._cnt];);
				return c.id = c.li_attr.id ? c.li_attr.id.toString() : o, n.length ? (n.each(function(e, t) {
					r = this._parse_model_from_html(E(t), c.id, i), s = this._model.data[r], c.children.push(r), s.children_d.length && (c.children_d = c.children_d.concat(s.children_d))
				}.bind(this)), c.children_d = c.children_d.concat(c.children)) : e.hasClass("jstree-closed") && (c.state.loaded = !1), c.li_attr.class && (c.li_attr.class = c.li_attr.class.replace("jstree-closed", "").replace("jstree-open", "")), c.a_attr.class && (c.a_attr.class = c.a_attr.class.replace("jstree-clicked", "").replace("jstree-disabled", "")), (d[c.id] = c).state.selected && this._data.core.selected.push(c.id), c.id
			},
			_parse_model_from_flat_json: function(e, t, i) {
				i = i ? i.concat() : [], t && i.unshift(t);
				var r, s, a, n, o = e.id.toString(),
					d = this._model.data,
					c = this._model.default_state,
					l = {
						id: o,
						text: e.text || "",
						icon: e.icon === P || e.icon,
						parent: t,
						parents: i,
						children: e.children || [],
						children_d: e.children_d || [],
						data: e.data,
						state: {},
						li_attr: {
							id: !1
						},
						a_attr: {
							href: "#"
						},
						original: !1
					};
				for (r in c) c.hasOwnProperty(r) && (l.state[r] = c[r]);
				if (e && e.data && e.data.jstree && e.data.jstree.icon && (l.icon = e.data.jstree.icon), (l.icon === P || null === l.icon || "" === l.icon) && (l.icon = !0), e && e.data && (l.data = e.data, e.data.jstree))
					for (r in e.data.jstree) e.data.jstree.hasOwnProperty(r) && (l.state[r] = e.data.jstree[r]);
				if (e && "object" == typeof e.state)
					for (r in e.state) e.state.hasOwnProperty(r) && (l.state[r] = e.state[r]);
				if (e && "object" == typeof e.li_attr)
					for (r in e.li_attr) e.li_attr.hasOwnProperty(r) && (l.li_attr[r] = e.li_attr[r]);
				if (l.li_attr.id || (l.li_attr.id = o), e && "object" == typeof e.a_attr)
					for (r in e.a_attr) e.a_attr.hasOwnProperty(r) && (l.a_attr[r] = e.a_attr[r]);
				for (e && e.children && !0 === e.children && (l.state.loaded = !1, l.children = [], l.children_d = []), r = 0, s = (d[l.id] = l).children.length; r < s; r++) n = d[a = this._parse_model_from_flat_json(d[l.children[r]], l.id, i)], l.children_d.push(a), n.children_d.length && (l.children_d = l.children_d.concat(n.children_d));
				return delete e.data, delete e.children, d[l.id].original = e, l.state.selected && this._data.core.selected.push(l.id), l.id
			},
			_parse_model_from_json: function(e, t, i) {
				i = i ? i.concat() : [], t && i.unshift(t);
				for (var r, s, a, n, o, d = !1, c = this._model.data, l = this._model.default_state; c[d = "j" + this._id + "_" + ++this._cnt];);
				for (r in o = {
						id: !1,
						text: "string" == typeof e ? e : "",
						icon: "object" != typeof e || e.icon === P || e.icon,
						parent: t,
						parents: i,
						children: [],
						children_d: [],
						data: null,
						state: {},
						li_attr: {
							id: !1
						},
						a_attr: {
							href: "#"
						},
						original: !1
					}, l) l.hasOwnProperty(r) && (o.state[r] = l[r]);
				if (e && e.id && (o.id = e.id.toString()), e && e.text && (o.text = e.text), e && e.data && e.data.jstree && e.data.jstree.icon && (o.icon = e.data.jstree.icon), (o.icon === P || null === o.icon || "" === o.icon) && (o.icon = !0), e && e.data && (o.data = e.data, e.data.jstree))
					for (r in e.data.jstree) e.data.jstree.hasOwnProperty(r) && (o.state[r] = e.data.jstree[r]);
				if (e && "object" == typeof e.state)
					for (r in e.state) e.state.hasOwnProperty(r) && (o.state[r] = e.state[r]);
				if (e && "object" == typeof e.li_attr)
					for (r in e.li_attr) e.li_attr.hasOwnProperty(r) && (o.li_attr[r] = e.li_attr[r]);
				if (o.li_attr.id && !o.id && (o.id = o.li_attr.id.toString()), o.id || (o.id = d), o.li_attr.id || (o.li_attr.id = o.id), e && "object" == typeof e.a_attr)
					for (r in e.a_attr) e.a_attr.hasOwnProperty(r) && (o.a_attr[r] = e.a_attr[r]);
				if (e && e.children && e.children.length) {
					for (r = 0, s = e.children.length; r < s; r++) n = c[a = this._parse_model_from_json(e.children[r], o.id, i)], o.children.push(a), n.children_d.length && (o.children_d = o.children_d.concat(n.children_d));
					o.children_d = o.children.concat(o.children_d)
				}
				return e && e.children && !0 === e.children && (o.state.loaded = !1, o.children = [], o.children_d = []), delete e.data, delete e.children, o.original = e, (c[o.id] = o).state.selected && this._data.core.selected.push(o.id), o.id
			},
			_redraw: function() {
				var e, t, i, r = this._model.force_full_redraw ? this._model.data[E.jstree.root].children.concat([]) : this._model.changed.concat([]),
					s = k.createElement("UL"),
					a = this._data.core.focused;
				for (t = 0, i = r.length; t < i; t++)(e = this.redraw_node(r[t], !0, this._model.force_full_redraw)) && this._model.force_full_redraw && s.appendChild(e);
				this._model.force_full_redraw && (s.className = this.get_container_ul()[0].className, s.setAttribute("role", "group"), this.element.empty().append(s)), null !== a && this.settings.core.restore_focus && ((e = this.get_node(a, !0)) && e.length && e.children(".jstree-anchor")[0] !== k.activeElement ? e.children(".jstree-anchor").trigger("focus") : this._data.core.focused = null), this._model.force_full_redraw = !1, this._model.changed = [], this.trigger("redraw", {
					nodes: r
				})
			},
			redraw: function(e) {
				e && (this._model.force_full_redraw = !0), this._redraw()
			},
			draw_children: function(e) {
				var t = this.get_node(e),
					i = !1,
					r = !1,
					s = !1,
					a = k;
				if (!t) return !1;
				if (t.id === E.jstree.root) return this.redraw(!0);
				if (!(e = this.get_node(e, !0)) || !e.length) return !1;
				if (e.children(".jstree-children").remove(), e = e[0], t.children.length && t.state.loaded) {
					for ((s = a.createElement("UL")).setAttribute("role", "group"), s.className = "jstree-children", i = 0, r = t.children.length; i < r; i++) s.appendChild(this.redraw_node(t.children[i], !0, !0));
					e.appendChild(s)
				}
			},
			redraw_node: function(e, t, i, r) {
				var s = this.get_node(e),
					a = !1,
					n = !1,
					o = !1,
					d = !1,
					c = !1,
					l = !1,
					h = "",
					_ = k,
					g = this._model.data,
					u = !1,
					f = null,
					p = 0,
					m = 0,
					v = !1,
					j = !1;
				if (!s) return !1;
				if (s.id === E.jstree.root) return this.redraw(!0);
				if (t = t || 0 === s.children.length, e = k.querySelector ? this.element[0].querySelector("#" + (-1 !== "0123456789".indexOf(s.id[0]) ? "\\3" + s.id[0] + " " + s.id.substr(1).replace(E.jstree.idregex, "\\$&") : s.id.replace(E.jstree.idregex, "\\$&"))) : k.getElementById(s.id)) e = E(e), i || ((a = e.parent().parent()[0]) === this.element[0] && (a = null), n = e.index()), t || !s.children.length || e.children(".jstree-children").length || (t = !0), t || (o = e.children(".jstree-children")[0]), u = e.children(".jstree-anchor")[0] === k.activeElement, e.remove();
				else if (t = !0, !i) {
					if (!(null === (a = s.parent !== E.jstree.root ? E("#" + s.parent.replace(E.jstree.idregex, "\\$&"), this.element)[0] : null) || a && g[s.parent].state.opened)) return !1;
					n = E.inArray(s.id, null === a ? g[E.jstree.root].children : g[s.parent].children)
				}
				for (d in e = this._data.core.node.cloneNode(!0), h = "jstree-node ", s.li_attr)
					if (s.li_attr.hasOwnProperty(d)) {
						if ("id" === d) continue;
						"class" !== d ? e.setAttribute(d, s.li_attr[d]) : h += s.li_attr[d]
					} for (s.a_attr.id || (s.a_attr.id = s.id + "_anchor"), e.childNodes[1].setAttribute("aria-selected", !!s.state.selected), e.childNodes[1].setAttribute("aria-level", s.parents.length), this.settings.core.compute_elements_positions && (e.childNodes[1].setAttribute("aria-setsize", g[s.parent].children.length), e.childNodes[1].setAttribute("aria-posinset", g[s.parent].children.indexOf(s.id) + 1)), s.state.disabled && e.childNodes[1].setAttribute("aria-disabled", !0), d = 0, c = s.children.length; d < c; d++)
					if (!g[s.children[d]].state.hidden) {
						v = !0;
						break
					} if (null !== s.parent && g[s.parent] && !s.state.hidden && (d = E.inArray(s.id, g[s.parent].children), j = s.id, -1 !== d))
					for (d++, c = g[s.parent].children.length; d < c && (g[g[s.parent].children[d]].state.hidden || (j = g[s.parent].children[d]), j === s.id); d++);
				for (c in s.state.hidden && (h += " jstree-hidden"), s.state.loading && (h += " jstree-loading"), s.state.loaded && !v ? h += " jstree-leaf" : (h += s.state.opened && s.state.loaded ? " jstree-open" : " jstree-closed", e.childNodes[1].setAttribute("aria-expanded", s.state.opened && s.state.loaded)), j === s.id && (h += " jstree-last"), e.id = s.id, e.className = h, h = (s.state.selected ? " jstree-clicked" : "") + (s.state.disabled ? " jstree-disabled" : ""), s.a_attr)
					if (s.a_attr.hasOwnProperty(c)) {
						if ("href" === c && "#" === s.a_attr[c]) continue;
						"class" !== c ? e.childNodes[1].setAttribute(c, s.a_attr[c]) : h += " " + s.a_attr[c]
					} if (h.length && (e.childNodes[1].className = "jstree-anchor " + h), (s.icon && !0 !== s.icon || !1 === s.icon) && (!1 === s.icon ? e.childNodes[1].childNodes[0].className += " jstree-themeicon-hidden" : -1 === s.icon.indexOf("/") && -1 === s.icon.indexOf(".") ? e.childNodes[1].childNodes[0].className += " " + s.icon + " jstree-themeicon-custom" : (e.childNodes[1].childNodes[0].style.backgroundImage = 'url("' + s.icon + '")', e.childNodes[1].childNodes[0].style.backgroundPosition = "center center", e.childNodes[1].childNodes[0].style.backgroundSize = "auto", e.childNodes[1].childNodes[0].className += " jstree-themeicon-custom")), this.settings.core.force_text ? e.childNodes[1].appendChild(_.createTextNode(s.text)) : e.childNodes[1].innerHTML += s.text, t && s.children.length && (s.state.opened || r) && s.state.loaded) {
					for ((l = _.createElement("UL")).setAttribute("role", "group"), l.className = "jstree-children", d = 0, c = s.children.length; d < c; d++) l.appendChild(this.redraw_node(s.children[d], t, !0));
					e.appendChild(l)
				}
				if (o && e.appendChild(o), !i) {
					for (a || (a = this.element[0]), d = 0, c = a.childNodes.length; d < c; d++)
						if (a.childNodes[d] && a.childNodes[d].className && -1 !== a.childNodes[d].className.indexOf("jstree-children")) {
							f = a.childNodes[d];
							break
						} f || ((f = _.createElement("UL")).setAttribute("role", "group"), f.className = "jstree-children", a.appendChild(f)), n < (a = f).childNodes.length ? a.insertBefore(e, a.childNodes[n]) : a.appendChild(e), u && (p = this.element[0].scrollTop, m = this.element[0].scrollLeft, e.childNodes[1].focus(), this.element[0].scrollTop = p, this.element[0].scrollLeft = m)
				}
				return s.state.opened && !s.state.loaded && (s.state.opened = !1, setTimeout(function() {
					this.open_node(s.id, !1, 0)
				}.bind(this), 0)), e
			},
			open_node: function(e, i, r) {
				var t, s, a, n;
				if (E.vakata.is_array(e)) {
					for (t = 0, s = (e = e.slice()).length; t < s; t++) this.open_node(e[t], i, r);
					return !0
				}
				return !(!(e = this.get_node(e)) || e.id === E.jstree.root) && (r = r === P ? this.settings.core.animation : r, this.is_closed(e) ? this.is_loaded(e) ? (a = this.get_node(e, !0), n = this, a.length && (r && a.children(".jstree-children").length && a.children(".jstree-children").stop(!0, !0), e.children.length && !this._firstChild(a.children(".jstree-children")[0]) && this.draw_children(e), r ? (this.trigger("before_open", {
					node: e
				}), a.children(".jstree-children").css("display", "none").end().removeClass("jstree-closed").addClass("jstree-open").children(".jstree-anchor").attr("aria-expanded", !0).end().children(".jstree-children").stop(!0, !0).slideDown(r, function() {
					this.style.display = "", n.element && n.trigger("after_open", {
						node: e
					})
				})) : (this.trigger("before_open", {
					node: e
				}), a[0].className = a[0].className.replace("jstree-closed", "jstree-open"), a[0].childNodes[1].setAttribute("aria-expanded", !0))), e.state.opened = !0, i && i.call(this, e, !0), a.length || this.trigger("before_open", {
					node: e
				}), this.trigger("open_node", {
					node: e
				}), r && a.length || this.trigger("after_open", {
					node: e
				}), !0) : this.is_loading(e) ? setTimeout(function() {
					this.open_node(e, i, r)
				}.bind(this), 500) : void this.load_node(e, function(e, t) {
					return t ? this.open_node(e, i, r) : !!i && i.call(this, e, !1)
				}) : (i && i.call(this, e, !1), !1))
			},
			_open_to: function(e) {
				if (!(e = this.get_node(e)) || e.id === E.jstree.root) return !1;
				var t, i, r = e.parents;
				for (t = 0, i = r.length; t < i; t += 1) t !== E.jstree.root && this.open_node(r[t], !1, 0);
				return E("#" + e.id.replace(E.jstree.idregex, "\\$&"), this.element)
			},
			close_node: function(e, t) {
				var i, r, s, a;
				if (E.vakata.is_array(e)) {
					for (i = 0, r = (e = e.slice()).length; i < r; i++) this.close_node(e[i], t);
					return !0
				}
				return !(!(e = this.get_node(e)) || e.id === E.jstree.root) && (!this.is_closed(e) && (t = t === P ? this.settings.core.animation : t, a = (s = this).get_node(e, !0), e.state.opened = !1, this.trigger("close_node", {
					node: e
				}), void(a.length ? t ? a.children(".jstree-children").attr("style", "display:block !important").end().removeClass("jstree-open").addClass("jstree-closed").children(".jstree-anchor").attr("aria-expanded", !1).end().children(".jstree-children").stop(!0, !0).slideUp(t, function() {
					this.style.display = "", a.children(".jstree-children").remove(), s.element && s.trigger("after_close", {
						node: e
					})
				}) : (a[0].className = a[0].className.replace("jstree-open", "jstree-closed"), a.children(".jstree-anchor").attr("aria-expanded", !1), a.children(".jstree-children").remove(), this.trigger("after_close", {
					node: e
				})) : this.trigger("after_close", {
					node: e
				}))))
			},
			toggle_node: function(e) {
				var t, i;
				if (E.vakata.is_array(e)) {
					for (t = 0, i = (e = e.slice()).length; t < i; t++) this.toggle_node(e[t]);
					return !0
				}
				return this.is_closed(e) ? this.open_node(e) : this.is_open(e) ? this.close_node(e) : void 0
			},
			open_all: function(e, i, r) {
				if (e || (e = E.jstree.root), !(e = this.get_node(e))) return !1;
				var t, s, a, n = e.id === E.jstree.root ? this.get_container_ul() : this.get_node(e, !0);
				if (!n.length) {
					for (t = 0, s = e.children_d.length; t < s; t++) this.is_closed(this._model.data[e.children_d[t]]) && (this._model.data[e.children_d[t]].state.opened = !0);
					return this.trigger("open_all", {
						node: e
					})
				}
				r = r || n, (n = (a = this).is_closed(e) ? n.find(".jstree-closed").addBack() : n.find(".jstree-closed")).each(function() {
					a.open_node(this, function(e, t) {
						t && this.is_parent(e) && this.open_all(e, i, r)
					}, i || 0)
				}), 0 === r.find(".jstree-closed").length && this.trigger("open_all", {
					node: this.get_node(r)
				})
			},
			close_all: function(e, t) {
				if (e || (e = E.jstree.root), !(e = this.get_node(e))) return !1;
				var i, r, s = e.id === E.jstree.root ? this.get_container_ul() : this.get_node(e, !0),
					a = this;
				for (s.length && (s = this.is_open(e) ? s.find(".jstree-open").addBack() : s.find(".jstree-open"), E(s.get().reverse()).each(function() {
						a.close_node(this, t || 0)
					})), i = 0, r = e.children_d.length; i < r; i++) this._model.data[e.children_d[i]].state.opened = !1;
				this.trigger("close_all", {
					node: e
				})
			},
			is_disabled: function(e) {
				return (e = this.get_node(e)) && e.state && e.state.disabled
			},
			enable_node: function(e) {
				var t, i;
				if (E.vakata.is_array(e)) {
					for (t = 0, i = (e = e.slice()).length; t < i; t++) this.enable_node(e[t]);
					return !0
				}
				return !(!(e = this.get_node(e)) || e.id === E.jstree.root) && (e.state.disabled = !1, this.get_node(e, !0).children(".jstree-anchor").removeClass("jstree-disabled").attr("aria-disabled", !1), void this.trigger("enable_node", {
					node: e
				}))
			},
			disable_node: function(e) {
				var t, i;
				if (E.vakata.is_array(e)) {
					for (t = 0, i = (e = e.slice()).length; t < i; t++) this.disable_node(e[t]);
					return !0
				}
				return !(!(e = this.get_node(e)) || e.id === E.jstree.root) && (e.state.disabled = !0, this.get_node(e, !0).children(".jstree-anchor").addClass("jstree-disabled").attr("aria-disabled", !0), void this.trigger("disable_node", {
					node: e
				}))
			},
			is_hidden: function(e) {
				return !0 === (e = this.get_node(e)).state.hidden
			},
			hide_node: function(e, t) {
				var i, r;
				if (E.vakata.is_array(e)) {
					for (i = 0, r = (e = e.slice()).length; i < r; i++) this.hide_node(e[i], !0);
					return t || this.redraw(), !0
				}
				return !(!(e = this.get_node(e)) || e.id === E.jstree.root) && void(e.state.hidden || (e.state.hidden = !0, this._node_changed(e.parent), t || this.redraw(), this.trigger("hide_node", {
					node: e
				})))
			},
			show_node: function(e, t) {
				var i, r;
				if (E.vakata.is_array(e)) {
					for (i = 0, r = (e = e.slice()).length; i < r; i++) this.show_node(e[i], !0);
					return t || this.redraw(), !0
				}
				return !(!(e = this.get_node(e)) || e.id === E.jstree.root) && void(e.state.hidden && (e.state.hidden = !1, this._node_changed(e.parent), t || this.redraw(), this.trigger("show_node", {
					node: e
				})))
			},
			hide_all: function(e) {
				var t, i = this._model.data,
					r = [];
				for (t in i) i.hasOwnProperty(t) && t !== E.jstree.root && !i[t].state.hidden && (i[t].state.hidden = !0, r.push(t));
				return this._model.force_full_redraw = !0, e || this.redraw(), this.trigger("hide_all", {
					nodes: r
				}), r
			},
			show_all: function(e) {
				var t, i = this._model.data,
					r = [];
				for (t in i) i.hasOwnProperty(t) && t !== E.jstree.root && i[t].state.hidden && (i[t].state.hidden = !1, r.push(t));
				return this._model.force_full_redraw = !0, e || this.redraw(), this.trigger("show_all", {
					nodes: r
				}), r
			},
			activate_node: function(e, t) {
				if (this.is_disabled(e)) return !1;
				if (t && "object" == typeof t || (t = {}), this._data.core.last_clicked = this._data.core.last_clicked && this._data.core.last_clicked.id !== P ? this.get_node(this._data.core.last_clicked.id) : null, this._data.core.last_clicked && !this._data.core.last_clicked.state.selected && (this._data.core.last_clicked = null), !this._data.core.last_clicked && this._data.core.selected.length && (this._data.core.last_clicked = this.get_node(this._data.core.selected[this._data.core.selected.length - 1])), this.settings.core.multiple && (t.metaKey || t.ctrlKey || t.shiftKey) && (!t.shiftKey || this._data.core.last_clicked && this.get_parent(e) && this.get_parent(e) === this._data.core.last_clicked.parent))
					if (t.shiftKey) {
						var i, r, s = this.get_node(e).id,
							a = this._data.core.last_clicked.id,
							n = this.get_node(this._data.core.last_clicked.parent).children,
							o = !1;
						for (i = 0, r = n.length; i < r; i += 1) n[i] === s && (o = !o), n[i] === a && (o = !o), this.is_disabled(n[i]) || !o && n[i] !== s && n[i] !== a ? this.deselect_node(n[i], !0, t) : this.is_hidden(n[i]) || this.select_node(n[i], !0, !1, t);
						this.trigger("changed", {
							action: "select_node",
							node: this.get_node(e),
							selected: this._data.core.selected,
							event: t
						})
					} else this.is_selected(e) ? this.deselect_node(e, !1, t) : this.select_node(e, !1, !1, t);
				else !this.settings.core.multiple && (t.metaKey || t.ctrlKey || t.shiftKey) && this.is_selected(e) ? this.deselect_node(e, !1, t) : (this.deselect_all(!0), this.select_node(e, !1, !1, t), this._data.core.last_clicked = this.get_node(e));
				this.trigger("activate_node", {
					node: this.get_node(e),
					event: t
				})
			},
			hover_node: function(e) {
				if (!(e = this.get_node(e, !0)) || !e.length || e.children(".jstree-hovered").length) return !1;
				var t = this.element.find(".jstree-hovered"),
					i = this.element;
				t && t.length && this.dehover_node(t), e.children(".jstree-anchor").addClass("jstree-hovered"), this.trigger("hover_node", {
					node: this.get_node(e)
				}), setTimeout(function() {
					i.attr("aria-activedescendant", e[0].id)
				}, 0)
			},
			dehover_node: function(e) {
				return !!((e = this.get_node(e, !0)) && e.length && e.children(".jstree-hovered").length) && (e.children(".jstree-anchor").removeClass("jstree-hovered"), void this.trigger("dehover_node", {
					node: this.get_node(e)
				}))
			},
			select_node: function(e, t, i, r) {
				var s, a, n;
				if (E.vakata.is_array(e)) {
					for (a = 0, n = (e = e.slice()).length; a < n; a++) this.select_node(e[a], t, i, r);
					return !0
				}
				return !(!(e = this.get_node(e)) || e.id === E.jstree.root) && (s = this.get_node(e, !0), void(e.state.selected || (e.state.selected = !0, this._data.core.selected.push(e.id), i || (s = this._open_to(e)), s && s.length && s.children(".jstree-anchor").addClass("jstree-clicked").attr("aria-selected", !0), this.trigger("select_node", {
					node: e,
					selected: this._data.core.selected,
					event: r
				}), t || this.trigger("changed", {
					action: "select_node",
					node: e,
					selected: this._data.core.selected,
					event: r
				}))))
			},
			deselect_node: function(e, t, i) {
				var r, s, a;
				if (E.vakata.is_array(e)) {
					for (r = 0, s = (e = e.slice()).length; r < s; r++) this.deselect_node(e[r], t, i);
					return !0
				}
				return !(!(e = this.get_node(e)) || e.id === E.jstree.root) && (a = this.get_node(e, !0), void(e.state.selected && (e.state.selected = !1, this._data.core.selected = E.vakata.array_remove_item(this._data.core.selected, e.id), a.length && a.children(".jstree-anchor").removeClass("jstree-clicked").attr("aria-selected", !1), this.trigger("deselect_node", {
					node: e,
					selected: this._data.core.selected,
					event: i
				}), t || this.trigger("changed", {
					action: "deselect_node",
					node: e,
					selected: this._data.core.selected,
					event: i
				}))))
			},
			select_all: function(e) {
				var t, i, r = this._data.core.selected.concat([]);
				for (this._data.core.selected = this._model.data[E.jstree.root].children_d.concat(), t = 0, i = this._data.core.selected.length; t < i; t++) this._model.data[this._data.core.selected[t]] && (this._model.data[this._data.core.selected[t]].state.selected = !0);
				this.redraw(!0), this.trigger("select_all", {
					selected: this._data.core.selected
				}), e || this.trigger("changed", {
					action: "select_all",
					selected: this._data.core.selected,
					old_selection: r
				})
			},
			deselect_all: function(e) {
				var t, i, r = this._data.core.selected.concat([]);
				for (t = 0, i = this._data.core.selected.length; t < i; t++) this._model.data[this._data.core.selected[t]] && (this._model.data[this._data.core.selected[t]].state.selected = !1);
				this._data.core.selected = [], this.element.find(".jstree-clicked").removeClass("jstree-clicked").attr("aria-selected", !1), this.trigger("deselect_all", {
					selected: this._data.core.selected,
					node: r
				}), e || this.trigger("changed", {
					action: "deselect_all",
					selected: this._data.core.selected,
					old_selection: r
				})
			},
			is_selected: function(e) {
				return !(!(e = this.get_node(e)) || e.id === E.jstree.root) && e.state.selected
			},
			get_selected: function(e) {
				return e ? E.map(this._data.core.selected, function(e) {
					return this.get_node(e)
				}.bind(this)) : this._data.core.selected.slice()
			},
			get_top_selected: function(e) {
				var t, i, r, s, a = this.get_selected(!0),
					n = {};
				for (t = 0, i = a.length; t < i; t++) n[a[t].id] = a[t];
				for (t = 0, i = a.length; t < i; t++)
					for (r = 0, s = a[t].children_d.length; r < s; r++) n[a[t].children_d[r]] && delete n[a[t].children_d[r]];
				for (t in a = [], n) n.hasOwnProperty(t) && a.push(t);
				return e ? E.map(a, function(e) {
					return this.get_node(e)
				}.bind(this)) : a
			},
			get_bottom_selected: function(e) {
				var t, i, r = this.get_selected(!0),
					s = [];
				for (t = 0, i = r.length; t < i; t++) r[t].children.length || s.push(r[t].id);
				return e ? E.map(s, function(e) {
					return this.get_node(e)
				}.bind(this)) : s
			},
			get_state: function() {
				var e, t = {
					core: {
						open: [],
						loaded: [],
						scroll: {
							left: this.element.scrollLeft(),
							top: this.element.scrollTop()
						},
						selected: []
					}
				};
				for (e in this._model.data) this._model.data.hasOwnProperty(e) && e !== E.jstree.root && (this._model.data[e].state.loaded && this.settings.core.loaded_state && t.core.loaded.push(e), this._model.data[e].state.opened && t.core.open.push(e), this._model.data[e].state.selected && t.core.selected.push(e));
				return t
			},
			set_state: function(t, i) {
				if (t) {
					if (t.core && t.core.selected && t.core.initial_selection === P && (t.core.initial_selection = this._data.core.selected.concat([]).sort().join(",")), t.core) {
						var r, e;
						if (t.core.loaded) return this.settings.core.loaded_state && E.vakata.is_array(t.core.loaded) && t.core.loaded.length ? this._load_nodes(t.core.loaded, function(e) {
							delete t.core.loaded, this.set_state(t, i)
						}) : (delete t.core.loaded, this.set_state(t, i)), !1;
						if (t.core.open) return E.vakata.is_array(t.core.open) && t.core.open.length ? this._load_nodes(t.core.open, function(e) {
							this.open_node(e, !1, 0), delete t.core.open, this.set_state(t, i)
						}) : (delete t.core.open, this.set_state(t, i)), !1;
						if (t.core.scroll) return t.core.scroll && t.core.scroll.left !== P && this.element.scrollLeft(t.core.scroll.left), t.core.scroll && t.core.scroll.top !== P && this.element.scrollTop(t.core.scroll.top), delete t.core.scroll, this.set_state(t, i), !1;
						if (t.core.selected) return r = this, (t.core.initial_selection === P || t.core.initial_selection === this._data.core.selected.concat([]).sort().join(",")) && (this.deselect_all(), E.each(t.core.selected, function(e, t) {
							r.select_node(t, !1, !0)
						})), delete t.core.initial_selection, delete t.core.selected, this.set_state(t, i), !1;
						for (e in t) t.hasOwnProperty(e) && "core" !== e && -1 === E.inArray(e, this.settings.plugins) && delete t[e];
						if (E.isEmptyObject(t.core)) return delete t.core, this.set_state(t, i), !1
					}
					return !E.isEmptyObject(t) || (t = null, i && i.call(this), this.trigger("set_state"), !1)
				}
				return !1
			},
			refresh: function(e, t) {
				this._data.core.state = !0 === t ? {} : this.get_state(), t && E.vakata.is_function(t) && (this._data.core.state = t.call(this, this._data.core.state)), this._cnt = 0, this._model.data = {}, this._model.data[E.jstree.root] = {
					id: E.jstree.root,
					parent: null,
					parents: [],
					children: [],
					children_d: [],
					state: {
						loaded: !1
					}
				}, this._data.core.selected = [], this._data.core.last_clicked = null, this._data.core.focused = null;
				var i = this.get_container_ul()[0].className;
				e || (this.element.html("<ul class='" + i + "' role='group'><li class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='none' id='j" + this._id + "_loading'><i class='jstree-icon jstree-ocl'></i><a class='jstree-anchor' role='treeitem' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>" + this.get_string("Loading ...") + "</a></li></ul>"), this.element.attr("aria-activedescendant", "j" + this._id + "_loading")), this.load_node(E.jstree.root, function(e, t) {
					t && (this.get_container_ul()[0].className = i, this._firstChild(this.get_container_ul()[0]) && this.element.attr("aria-activedescendant", this._firstChild(this.get_container_ul()[0]).id), this.set_state(E.extend(!0, {}, this._data.core.state), function() {
						this.trigger("refresh")
					})), this._data.core.state = null
				})
			},
			refresh_node: function(t) {
				if (!(t = this.get_node(t)) || t.id === E.jstree.root) return !1;
				var i = [],
					e = [],
					r = this._data.core.selected.concat([]);
				e.push(t.id), !0 === t.state.opened && i.push(t.id), this.get_node(t, !0).find(".jstree-open").each(function() {
					e.push(this.id), i.push(this.id)
				}), this._load_nodes(e, function(e) {
					this.open_node(i, !1, 0), this.select_node(r), this.trigger("refresh_node", {
						node: t,
						nodes: e
					})
				}.bind(this), !1, !0)
			},
			set_id: function(e, t) {
				if (!(e = this.get_node(e)) || e.id === E.jstree.root) return !1;
				var i, r, s = this._model.data,
					a = e.id;
				for (t = t.toString(), s[e.parent].children[E.inArray(e.id, s[e.parent].children)] = t, i = 0, r = e.parents.length; i < r; i++) s[e.parents[i]].children_d[E.inArray(e.id, s[e.parents[i]].children_d)] = t;
				for (i = 0, r = e.children.length; i < r; i++) s[e.children[i]].parent = t;
				for (i = 0, r = e.children_d.length; i < r; i++) s[e.children_d[i]].parents[E.inArray(e.id, s[e.children_d[i]].parents)] = t;
				return -1 !== (i = E.inArray(e.id, this._data.core.selected)) && (this._data.core.selected[i] = t), (i = this.get_node(e.id, !0)) && (i.attr("id", t), this.element.attr("aria-activedescendant") === e.id && this.element.attr("aria-activedescendant", t)), delete s[e.id], e.id = t, s[e.li_attr.id = t] = e, this.trigger("set_id", {
					node: e,
					new: e.id,
					old: a
				}), !0
			},
			get_text: function(e) {
				return !(!(e = this.get_node(e)) || e.id === E.jstree.root) && e.text
			},
			set_text: function(e, t) {
				var i, r;
				if (E.vakata.is_array(e)) {
					for (i = 0, r = (e = e.slice()).length; i < r; i++) this.set_text(e[i], t);
					return !0
				}
				return !(!(e = this.get_node(e)) || e.id === E.jstree.root) && (e.text = t, this.get_node(e, !0).length && this.redraw_node(e.id), this.trigger("set_text", {
					obj: e,
					text: t
				}), !0)
			},
			get_json: function(e, t, i) {
				if (!(e = this.get_node(e || E.jstree.root))) return !1;
				t && t.flat && !i && (i = []);
				var r, s, a = {
					id: e.id,
					text: e.text,
					icon: this.get_icon(e),
					li_attr: E.extend(!0, {}, e.li_attr),
					a_attr: E.extend(!0, {}, e.a_attr),
					state: {},
					data: (!t || !t.no_data) && E.extend(!0, E.vakata.is_array(e.data) ? [] : {}, e.data)
				};
				if (t && t.flat ? a.parent = e.parent : a.children = [], t && t.no_state) delete a.state;
				else
					for (r in e.state) e.state.hasOwnProperty(r) && (a.state[r] = e.state[r]);
				if (t && t.no_li_attr && delete a.li_attr, t && t.no_a_attr && delete a.a_attr, t && t.no_id && (delete a.id, a.li_attr && a.li_attr.id && delete a.li_attr.id, a.a_attr && a.a_attr.id && delete a.a_attr.id), t && t.flat && e.id !== E.jstree.root && i.push(a), !t || !t.no_children)
					for (r = 0, s = e.children.length; r < s; r++) t && t.flat ? this.get_json(e.children[r], t, i) : a.children.push(this.get_json(e.children[r], t));
				return t && t.flat ? i : e.id === E.jstree.root ? a.children : a
			},
			create_node: function(e, t, i, r, s) {
				if (null === e && (e = E.jstree.root), !(e = this.get_node(e))) return !1;
				if (!(i = i === P ? "last" : i).toString().match(/^(before|after)$/) && !s && !this.is_loaded(e)) return this.load_node(e, function() {
					this.create_node(e, t, i, r, !0)
				});
				var a, n, o, d;
				switch (t || (t = {
						text: this.get_string("New node")
					}), (t = "string" == typeof t ? {
						text: t
					} : E.extend(!0, {}, t)).text === P && (t.text = this.get_string("New node")), e.id === E.jstree.root && ("before" === i && (i = "first"), "after" === i && (i = "last")), i) {
					case "before":
						a = this.get_node(e.parent), i = E.inArray(e.id, a.children), e = a;
						break;
					case "after":
						a = this.get_node(e.parent), i = E.inArray(e.id, a.children) + 1, e = a;
						break;
					case "inside":
					case "first":
						i = 0;
						break;
					case "last":
						i = e.children.length;
						break;
					default:
						i || (i = 0)
				}
				if (i > e.children.length && (i = e.children.length), t.id || (t.id = !0), !this.check("create_node", t, e, i)) return this.settings.core.error.call(this, this._data.core.last_error), !1;
				if (!0 === t.id && delete t.id, !(t = this._parse_model_from_json(t, e.id, e.parents.concat()))) return !1;
				for (a = this.get_node(t), (n = []).push(t), n = n.concat(a.children_d), this.trigger("model", {
						nodes: n,
						parent: e.id
					}), e.children_d = e.children_d.concat(n), o = 0, d = e.parents.length; o < d; o++) this._model.data[e.parents[o]].children_d = this._model.data[e.parents[o]].children_d.concat(n);
				for (t = a, a = [], o = 0, d = e.children.length; o < d; o++) a[i <= o ? o + 1 : o] = e.children[o];
				return a[i] = t.id, e.children = a, this.redraw_node(e, !0), this.trigger("create_node", {
					node: this.get_node(t),
					parent: e.id,
					position: i
				}), r && r.call(this, this.get_node(t)), t.id
			},
			rename_node: function(e, t) {
				var i, r, s;
				if (E.vakata.is_array(e)) {
					for (i = 0, r = (e = e.slice()).length; i < r; i++) this.rename_node(e[i], t);
					return !0
				}
				return !(!(e = this.get_node(e)) || e.id === E.jstree.root) && (s = e.text, this.check("rename_node", e, this.get_parent(e), t) ? (this.set_text(e, t), this.trigger("rename_node", {
					node: e,
					text: t,
					old: s
				}), !0) : (this.settings.core.error.call(this, this._data.core.last_error), !1))
			},
			delete_node: function(e) {
				var t, i, r, s, a, n, o, d, c, l, h, _;
				if (E.vakata.is_array(e)) {
					for (t = 0, i = (e = e.slice()).length; t < i; t++) this.delete_node(e[t]);
					return !0
				}
				if (!(e = this.get_node(e)) || e.id === E.jstree.root) return !1;
				if (r = this.get_node(e.parent), s = E.inArray(e.id, r.children), l = !1, !this.check("delete_node", e, r, s)) return this.settings.core.error.call(this, this._data.core.last_error), !1;
				for (-1 !== s && (r.children = E.vakata.array_remove(r.children, s)), (a = e.children_d.concat([])).push(e.id), n = 0, o = e.parents.length; n < o; n++) this._model.data[e.parents[n]].children_d = E.vakata.array_filter(this._model.data[e.parents[n]].children_d, function(e) {
					return -1 === E.inArray(e, a)
				});
				for (d = 0, c = a.length; d < c; d++)
					if (this._model.data[a[d]].state.selected) {
						l = !0;
						break
					} for (l && (this._data.core.selected = E.vakata.array_filter(this._data.core.selected, function(e) {
						return -1 === E.inArray(e, a)
					})), this.trigger("delete_node", {
						node: e,
						parent: r.id
					}), l && this.trigger("changed", {
						action: "delete_node",
						node: e,
						selected: this._data.core.selected,
						parent: r.id
					}), d = 0, c = a.length; d < c; d++) delete this._model.data[a[d]];
				return -1 !== E.inArray(this._data.core.focused, a) && (this._data.core.focused = null, h = this.element[0].scrollTop, _ = this.element[0].scrollLeft, r.id === E.jstree.root ? this._model.data[E.jstree.root].children[0] && this.get_node(this._model.data[E.jstree.root].children[0], !0).children(".jstree-anchor").triger("focus") : this.get_node(r, !0).children(".jstree-anchor").trigger("focus"), this.element[0].scrollTop = h, this.element[0].scrollLeft = _), this.redraw_node(r, !0), !0
			},
			check: function(e, t, i, r, s) {
				t = t && t.id ? t : this.get_node(t), i = i && i.id ? i : this.get_node(i);
				var a = e.match(/^move_node|copy_node|create_node$/i) ? i : t,
					n = this.settings.core.check_callback;
				if ("move_node" === e || "copy_node" === e) {
					if (!(s && s.is_multi || "move_node" !== e || E.inArray(t.id, i.children) !== r)) return !(this._data.core.last_error = {
						error: "check",
						plugin: "core",
						id: "core_08",
						reason: "Moving node to its current position",
						data: JSON.stringify({
							chk: e,
							pos: r,
							obj: !(!t || !t.id) && t.id,
							par: !(!i || !i.id) && i.id
						})
					});
					if (!(s && s.is_multi || t.id !== i.id && ("move_node" !== e || E.inArray(t.id, i.children) !== r) && -1 === E.inArray(i.id, t.children_d))) return !(this._data.core.last_error = {
						error: "check",
						plugin: "core",
						id: "core_01",
						reason: "Moving parent inside child",
						data: JSON.stringify({
							chk: e,
							pos: r,
							obj: !(!t || !t.id) && t.id,
							par: !(!i || !i.id) && i.id
						})
					})
				}
				return a && a.data && (a = a.data), a && a.functions && (!1 === a.functions[e] || !0 === a.functions[e]) ? (!1 === a.functions[e] && (this._data.core.last_error = {
					error: "check",
					plugin: "core",
					id: "core_02",
					reason: "Node data prevents function: " + e,
					data: JSON.stringify({
						chk: e,
						pos: r,
						obj: !(!t || !t.id) && t.id,
						par: !(!i || !i.id) && i.id
					})
				}), a.functions[e]) : !(!1 === n || E.vakata.is_function(n) && !1 === n.call(this, e, t, i, r, s) || n && !1 === n[e]) || !(this._data.core.last_error = {
					error: "check",
					plugin: "core",
					id: "core_03",
					reason: "User config for core.check_callback prevents function: " + e,
					data: JSON.stringify({
						chk: e,
						pos: r,
						obj: !(!t || !t.id) && t.id,
						par: !(!i || !i.id) && i.id
					})
				})
			},
			last_error: function() {
				return this._data.core.last_error
			},
			move_node: function(e, t, i, r, s, a, n) {
				var o, d, c, l, h, _, g, u, f, p, m, v, j, k;
				if (t = this.get_node(t), i = i === P ? 0 : i, !t) return !1;
				if (!i.toString().match(/^(before|after)$/) && !s && !this.is_loaded(t)) return this.load_node(t, function() {
					this.move_node(e, t, i, r, !0, !1, n)
				});
				if (E.vakata.is_array(e)) {
					if (1 !== e.length) {
						for (o = 0, d = e.length; o < d; o++)(f = this.move_node(e[o], t, i, r, s, !1, n)) && (t = f, i = "after");
						return this.redraw(), !0
					}
					e = e[0]
				}
				if (!(e = e && e.id ? e : this.get_node(e)) || e.id === E.jstree.root) return !1;
				if (c = (e.parent || E.jstree.root).toString(), h = i.toString().match(/^(before|after)$/) && t.id !== E.jstree.root ? this.get_node(t.parent) : t, g = !(_ = n || (this._model.data[e.id] ? this : E.jstree.reference(e.id))) || !_._id || this._id !== _._id, l = _ && _._id && c && _._model.data[c] && _._model.data[c].children ? E.inArray(e.id, _._model.data[c].children) : -1, _ && _._id && (e = _._model.data[e.id]), g) return !!(f = this.copy_node(e, t, i, r, s, !1, n)) && (_ && _.delete_node(e), f);
				switch (t.id === E.jstree.root && ("before" === i && (i = "first"), "after" === i && (i = "last")), i) {
					case "before":
						i = E.inArray(t.id, h.children);
						break;
					case "after":
						i = E.inArray(t.id, h.children) + 1;
						break;
					case "inside":
					case "first":
						i = 0;
						break;
					case "last":
						i = h.children.length;
						break;
					default:
						i || (i = 0)
				}
				if (i > h.children.length && (i = h.children.length), !this.check("move_node", e, h, i, {
						core: !0,
						origin: n,
						is_multi: _ && _._id && _._id !== this._id,
						is_foreign: !_ || !_._id
					})) return this.settings.core.error.call(this, this._data.core.last_error), !1;
				if (e.parent === h.id) {
					for (u = h.children.concat(), -1 !== (f = E.inArray(e.id, u)) && (u = E.vakata.array_remove(u, f), f < i && i--), f = [], p = 0, m = u.length; p < m; p++) f[i <= p ? p + 1 : p] = u[p];
					f[i] = e.id, h.children = f, this._node_changed(h.id), this.redraw(h.id === E.jstree.root)
				} else {
					for ((f = e.children_d.concat()).push(e.id), p = 0, m = e.parents.length; p < m; p++) {
						for (u = [], v = 0, j = (k = _._model.data[e.parents[p]].children_d).length; v < j; v++) - 1 === E.inArray(k[v], f) && u.push(k[v]);
						_._model.data[e.parents[p]].children_d = u
					}
					for (_._model.data[c].children = E.vakata.array_remove_item(_._model.data[c].children, e.id), p = 0, m = h.parents.length; p < m; p++) this._model.data[h.parents[p]].children_d = this._model.data[h.parents[p]].children_d.concat(f);
					for (u = [], p = 0, m = h.children.length; p < m; p++) u[i <= p ? p + 1 : p] = h.children[p];
					for (u[i] = e.id, h.children = u, h.children_d.push(e.id), h.children_d = h.children_d.concat(e.children_d), e.parent = h.id, (f = h.parents.concat()).unshift(h.id), k = e.parents.length, f = (e.parents = f).concat(), p = 0, m = e.children_d.length; p < m; p++) this._model.data[e.children_d[p]].parents = this._model.data[e.children_d[p]].parents.slice(0, -1 * k), Array.prototype.push.apply(this._model.data[e.children_d[p]].parents, f);
					(c === E.jstree.root || h.id === E.jstree.root) && (this._model.force_full_redraw = !0), this._model.force_full_redraw || (this._node_changed(c), this._node_changed(h.id)), a || this.redraw()
				}
				return r && r.call(this, e, h, i), this.trigger("move_node", {
					node: e,
					parent: h.id,
					position: i,
					old_parent: c,
					old_position: l,
					is_multi: _ && _._id && _._id !== this._id,
					is_foreign: !_ || !_._id,
					old_instance: _,
					new_instance: this
				}), e.id
			},
			copy_node: function(e, t, i, r, s, a, n) {
				var o, d, c, l, h, _, g, u, f, p;
				if (t = this.get_node(t), i = i === P ? 0 : i, !t) return !1;
				if (!i.toString().match(/^(before|after)$/) && !s && !this.is_loaded(t)) return this.load_node(t, function() {
					this.copy_node(e, t, i, r, !0, !1, n)
				});
				if (E.vakata.is_array(e)) {
					if (1 !== e.length) {
						for (o = 0, d = e.length; o < d; o++)(l = this.copy_node(e[o], t, i, r, s, !0, n)) && (t = l, i = "after");
						return this.redraw(), !0
					}
					e = e[0]
				}
				if (!(e = e && e.id ? e : this.get_node(e)) || e.id === E.jstree.root) return !1;
				switch (u = (e.parent || E.jstree.root).toString(), f = i.toString().match(/^(before|after)$/) && t.id !== E.jstree.root ? this.get_node(t.parent) : t, !(p = n || (this._model.data[e.id] ? this : E.jstree.reference(e.id))) || !p._id || this._id !== p._id, p && p._id && (e = p._model.data[e.id]), t.id === E.jstree.root && ("before" === i && (i = "first"), "after" === i && (i = "last")), i) {
					case "before":
						i = E.inArray(t.id, f.children);
						break;
					case "after":
						i = E.inArray(t.id, f.children) + 1;
						break;
					case "inside":
					case "first":
						i = 0;
						break;
					case "last":
						i = f.children.length;
						break;
					default:
						i || (i = 0)
				}
				if (i > f.children.length && (i = f.children.length), !this.check("copy_node", e, f, i, {
						core: !0,
						origin: n,
						is_multi: p && p._id && p._id !== this._id,
						is_foreign: !p || !p._id
					})) return this.settings.core.error.call(this, this._data.core.last_error), !1;
				if (!(g = p ? p.get_json(e, {
						no_id: !0,
						no_data: !0,
						no_state: !0
					}) : e)) return !1;
				if (!0 === g.id && delete g.id, !(g = this._parse_model_from_json(g, f.id, f.parents.concat()))) return !1;
				for (l = this.get_node(g), e && e.state && !1 === e.state.loaded && (l.state.loaded = !1), (c = []).push(g), c = c.concat(l.children_d), this.trigger("model", {
						nodes: c,
						parent: f.id
					}), h = 0, _ = f.parents.length; h < _; h++) this._model.data[f.parents[h]].children_d = this._model.data[f.parents[h]].children_d.concat(c);
				for (c = [], h = 0, _ = f.children.length; h < _; h++) c[i <= h ? h + 1 : h] = f.children[h];
				return c[i] = l.id, f.children = c, f.children_d.push(l.id), f.children_d = f.children_d.concat(l.children_d), f.id === E.jstree.root && (this._model.force_full_redraw = !0), this._model.force_full_redraw || this._node_changed(f.id), a || this.redraw(f.id === E.jstree.root), r && r.call(this, l, f, i), this.trigger("copy_node", {
					node: l,
					original: e,
					parent: f.id,
					position: i,
					old_parent: u,
					old_position: p && p._id && u && p._model.data[u] && p._model.data[u].children ? E.inArray(e.id, p._model.data[u].children) : -1,
					is_multi: p && p._id && p._id !== this._id,
					is_foreign: !p || !p._id,
					old_instance: p,
					new_instance: this
				}), l.id
			},
			cut: function(e) {
				if (e || (e = this._data.core.selected.concat()), E.vakata.is_array(e) || (e = [e]), !e.length) return !1;
				var t, i, r, s = [];
				for (i = 0, r = e.length; i < r; i++)(t = this.get_node(e[i])) && t.id && t.id !== E.jstree.root && s.push(t);
				return !!s.length && (a = s, n = "move_node", void(o = this).trigger("cut", {
					node: e
				}))
			},
			copy: function(e) {
				if (e || (e = this._data.core.selected.concat()), E.vakata.is_array(e) || (e = [e]), !e.length) return !1;
				var t, i, r, s = [];
				for (i = 0, r = e.length; i < r; i++)(t = this.get_node(e[i])) && t.id && t.id !== E.jstree.root && s.push(t);
				return !!s.length && (a = s, n = "copy_node", void(o = this).trigger("copy", {
					node: e
				}))
			},
			get_buffer: function() {
				return {
					mode: n,
					node: a,
					inst: o
				}
			},
			can_paste: function() {
				return !1 !== n && !1 !== a
			},
			paste: function(e, t) {
				return !!((e = this.get_node(e)) && n && n.match(/^(copy_node|move_node)$/) && a) && (this[n](a, e, t, !1, !1, !1, o) && this.trigger("paste", {
					parent: e.id,
					node: a,
					mode: n
				}), void(o = n = a = !1))
			},
			clear_buffer: function() {
				o = n = a = !1, this.trigger("clear_buffer")
			},
			edit: function(s, e, a) {
				var t, i, n, o, d, c, l, r, h, _ = !1;
				return !!(s = this.get_node(s)) && (this.check("edit", s, this.get_parent(s)) ? (h = s, e = "string" == typeof e ? e : s.text, this.set_text(s, ""), s = this._open_to(s), h.text = e, t = this._data.core.rtl, i = this.element.width(), this._data.core.focused = h.id, n = s.children(".jstree-anchor").trigger("focus"), o = E("<span></span>"), d = e, c = E("<div></div>", {
					css: {
						position: "absolute",
						top: "-200px",
						left: t ? "0px" : "-1000px",
						visibility: "hidden"
					}
				}).appendTo(k.body), l = E("<input />", {
					value: d,
					class: "jstree-rename-input",
					css: {
						padding: "0",
						border: "1px solid silver",
						"box-sizing": "border-box",
						display: "inline-block",
						height: this._data.core.li_height + "px",
						lineHeight: this._data.core.li_height + "px",
						width: "150px"
					},
					blur: function(e) {
						e.stopImmediatePropagation(), e.preventDefault();
						var t, i = o.children(".jstree-rename-input").val(),
							r = this.settings.core.force_text;
						"" === i && (i = d), c.remove(), o.replaceWith(n), o.remove(), d = r ? d : E("<div></div>").append(E.parseHTML(d)).html(), s = this.get_node(s), this.set_text(s, d), (t = !!this.rename_node(s, r ? E("<div></div>").text(i).text() : E("<div></div>").append(E.parseHTML(i)).html())) || this.set_text(s, d), this._data.core.focused = h.id, setTimeout(function() {
							var e = this.get_node(h.id, !0);
							e.length && (this._data.core.focused = h.id, e.children(".jstree-anchor").trigger("focus"))
						}.bind(this), 0), a && a.call(this, h, t, _, i), l = null
					}.bind(this),
					keydown: function(e) {
						var t = e.which;
						27 === t && (_ = !0, this.value = d), (27 === t || 13 === t || 37 === t || 38 === t || 39 === t || 40 === t || 32 === t) && e.stopImmediatePropagation(), (27 === t || 13 === t) && (e.preventDefault(), this.blur())
					},
					click: function(e) {
						e.stopImmediatePropagation()
					},
					mousedown: function(e) {
						e.stopImmediatePropagation()
					},
					keyup: function(e) {
						l.width(Math.min(c.text("pW" + this.value).width(), i))
					},
					keypress: function(e) {
						return 13 !== e.which && void 0
					}
				}), r = {
					fontFamily: n.css("fontFamily") || "",
					fontSize: n.css("fontSize") || "",
					fontWeight: n.css("fontWeight") || "",
					fontStyle: n.css("fontStyle") || "",
					fontStretch: n.css("fontStretch") || "",
					fontVariant: n.css("fontVariant") || "",
					letterSpacing: n.css("letterSpacing") || "",
					wordSpacing: n.css("wordSpacing") || ""
				}, o.attr("class", n.attr("class")).append(n.contents().clone()).append(l), n.replaceWith(o), c.css(r), l.css(r).width(Math.min(c.text("pW" + l[0].value).width(), i))[0].select(), void E(k).one("mousedown.jstree touchstart.jstree dnd_start.vakata", function(e) {
					l && e.target !== l && E(l).trigger("blur")
				})) : (this.settings.core.error.call(this, this._data.core.last_error), !1))
			},
			set_theme: function(e, t) {
				if (!e) return !1;
				if (!0 === t) {
					var i = this.settings.core.themes.dir;
					i || (i = E.jstree.path + "/themes"), t = i + "/" + e + "/style.css"
				}
				t && -1 === E.inArray(t, r) && (E("head").append('<link rel="stylesheet" href="' + t + '" type="text/css" />'), r.push(t)), this._data.core.themes.name && this.element.removeClass("jstree-" + this._data.core.themes.name), this._data.core.themes.name = e, this.element.addClass("jstree-" + e), this.element[this.settings.core.themes.responsive ? "addClass" : "removeClass"]("jstree-" + e + "-responsive"), this.trigger("set_theme", {
					theme: e
				})
			},
			get_theme: function() {
				return this._data.core.themes.name
			},
			set_theme_variant: function(e) {
				this._data.core.themes.variant && this.element.removeClass("jstree-" + this._data.core.themes.name + "-" + this._data.core.themes.variant), (this._data.core.themes.variant = e) && this.element.addClass("jstree-" + this._data.core.themes.name + "-" + this._data.core.themes.variant)
			},
			get_theme_variant: function() {
				return this._data.core.themes.variant
			},
			show_stripes: function() {
				this._data.core.themes.stripes = !0, this.get_container_ul().addClass("jstree-striped"), this.trigger("show_stripes")
			},
			hide_stripes: function() {
				this._data.core.themes.stripes = !1, this.get_container_ul().removeClass("jstree-striped"), this.trigger("hide_stripes")
			},
			toggle_stripes: function() {
				this._data.core.themes.stripes ? this.hide_stripes() : this.show_stripes()
			},
			show_dots: function() {
				this._data.core.themes.dots = !0, this.get_container_ul().removeClass("jstree-no-dots"), this.trigger("show_dots")
			},
			hide_dots: function() {
				this._data.core.themes.dots = !1, this.get_container_ul().addClass("jstree-no-dots"), this.trigger("hide_dots")
			},
			toggle_dots: function() {
				this._data.core.themes.dots ? this.hide_dots() : this.show_dots()
			},
			show_icons: function() {
				this._data.core.themes.icons = !0, this.get_container_ul().removeClass("jstree-no-icons"), this.trigger("show_icons")
			},
			hide_icons: function() {
				this._data.core.themes.icons = !1, this.get_container_ul().addClass("jstree-no-icons"), this.trigger("hide_icons")
			},
			toggle_icons: function() {
				this._data.core.themes.icons ? this.hide_icons() : this.show_icons()
			},
			show_ellipsis: function() {
				this._data.core.themes.ellipsis = !0, this.get_container_ul().addClass("jstree-ellipsis"), this.trigger("show_ellipsis")
			},
			hide_ellipsis: function() {
				this._data.core.themes.ellipsis = !1, this.get_container_ul().removeClass("jstree-ellipsis"), this.trigger("hide_ellipsis")
			},
			toggle_ellipsis: function() {
				this._data.core.themes.ellipsis ? this.hide_ellipsis() : this.show_ellipsis()
			},
			set_icon: function(e, t) {
				var i, r, s, a;
				if (E.vakata.is_array(e)) {
					for (i = 0, r = (e = e.slice()).length; i < r; i++) this.set_icon(e[i], t);
					return !0
				}
				return !(!(e = this.get_node(e)) || e.id === E.jstree.root) && (a = e.icon, e.icon = !0 === t || null === t || t === P || "" === t || t, s = this.get_node(e, !0).children(".jstree-anchor").children(".jstree-themeicon"), !1 === t ? (s.removeClass("jstree-themeicon-custom " + a).css("background", "").removeAttr("rel"), this.hide_icon(e)) : (!0 === t || null === t || t === P || "" === t ? s.removeClass("jstree-themeicon-custom " + a).css("background", "").removeAttr("rel") : -1 === t.indexOf("/") && -1 === t.indexOf(".") ? (s.removeClass(a).css("background", ""), s.addClass(t + " jstree-themeicon-custom").attr("rel", t)) : (s.removeClass(a).css("background", ""), s.addClass("jstree-themeicon-custom").css("background", "url('" + t + "') center center no-repeat").attr("rel", t)), !1 === a && this.show_icon(e)), !0)
			},
			get_icon: function(e) {
				return !(!(e = this.get_node(e)) || e.id === E.jstree.root) && e.icon
			},
			hide_icon: function(e) {
				var t, i;
				if (E.vakata.is_array(e)) {
					for (t = 0, i = (e = e.slice()).length; t < i; t++) this.hide_icon(e[t]);
					return !0
				}
				return !(!(e = this.get_node(e)) || e === E.jstree.root) && (e.icon = !1, this.get_node(e, !0).children(".jstree-anchor").children(".jstree-themeicon").addClass("jstree-themeicon-hidden"), !0)
			},
			show_icon: function(e) {
				var t, i, r;
				if (E.vakata.is_array(e)) {
					for (t = 0, i = (e = e.slice()).length; t < i; t++) this.show_icon(e[t]);
					return !0
				}
				return !(!(e = this.get_node(e)) || e === E.jstree.root) && (r = this.get_node(e, !0), e.icon = !r.length || r.children(".jstree-anchor").children(".jstree-themeicon").attr("rel"), e.icon || (e.icon = !0), r.children(".jstree-anchor").children(".jstree-themeicon").removeClass("jstree-themeicon-hidden"), !0)
			}
		}, E.vakata = {}, E.vakata.attributes = function(e, i) {
			e = E(e)[0];
			var r = i ? {} : [];
			return e && e.attributes && E.each(e.attributes, function(e, t) {
				-1 === E.inArray(t.name.toLowerCase(), ["style", "contenteditable", "hasfocus", "tabindex"]) && null !== t.value && "" !== E.vakata.trim(t.value) && (i ? r[t.name] = t.value : r.push(t.name))
			}), r
		}, E.vakata.array_unique = function(e) {
			var t, i, r = [],
				s = {};
			for (t = 0, i = e.length; t < i; t++) s[e[t]] === P && (r.push(e[t]), s[e[t]] = !0);
			return r
		}, E.vakata.array_remove = function(e, t) {
			return e.splice(t, 1), e
		}, E.vakata.array_remove_item = function(e, t) {
			var i = E.inArray(t, e);
			return -1 !== i ? E.vakata.array_remove(e, i) : e
		}, E.vakata.array_filter = function(e, t, i, r, s) {
			if (e.filter) return e.filter(t, i);
			for (s in r = [], e) ~~s + "" == s + "" && 0 <= s && t.call(i, e[s], +s, e) && r.push(e[s]);
			return r
		}, E.vakata.trim = function(e) {
			return String.prototype.trim ? String.prototype.trim.call(e.toString()) : e.toString().replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
		}, E.vakata.is_function = function(e) {
			return "function" == typeof e && "number" != typeof e.nodeType
		}, E.vakata.is_array = Array.isArray || function(e) {
			return "[object Array]" === Object.prototype.toString.call(e)
		}, Function.prototype.bind || (Function.prototype.bind = function() {
			var t = this,
				i = arguments[0],
				r = Array.prototype.slice.call(arguments, 1);
			if ("function" != typeof t) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
			return function() {
				var e = r.concat(Array.prototype.slice.call(arguments));
				return t.apply(i, e)
			}
		}), E.jstree.plugins.changed = function(e, a) {
			var n = [];
			this.trigger = function(e, t) {
				var i, r;
				if (t || (t = {}), "changed" === e.replace(".jstree", "")) {
					t.changed = {
						selected: [],
						deselected: []
					};
					var s = {};
					for (i = 0, r = n.length; i < r; i++) s[n[i]] = 1;
					for (i = 0, r = t.selected.length; i < r; i++) s[t.selected[i]] ? s[t.selected[i]] = 2 : t.changed.selected.push(t.selected[i]);
					for (i = 0, r = n.length; i < r; i++) 1 === s[n[i]] && t.changed.deselected.push(n[i]);
					n = t.selected.slice()
				}
				a.trigger.call(this, e, t)
			}, this.refresh = function(e, t) {
				return n = [], a.refresh.apply(this, arguments)
			}
		};
		var d, l, h = k.createElement("I");
		h.className = "jstree-icon jstree-checkbox", h.setAttribute("role", "presentation"), E.jstree.defaults.checkbox = {
			visible: !0,
			three_state: !0,
			whole_node: !0,
			keep_selected_style: !0,
			cascade: "",
			tie_selection: !0,
			cascade_to_disabled: !0,
			cascade_to_hidden: !0
		}, E.jstree.plugins.checkbox = function(e, d) {
			this.bind = function() {
				d.bind.call(this), this._data.checkbox.uto = !1, this._data.checkbox.selected = [], this.settings.checkbox.three_state && (this.settings.checkbox.cascade = "up+down+undetermined"), this.element.on("init.jstree", function() {
					this._data.checkbox.visible = this.settings.checkbox.visible, this.settings.checkbox.keep_selected_style || this.element.addClass("jstree-checkbox-no-clicked"), this.settings.checkbox.tie_selection && this.element.addClass("jstree-checkbox-selection")
				}.bind(this)).on("loading.jstree", function() {
					this[this._data.checkbox.visible ? "show_checkboxes" : "hide_checkboxes"]()
				}.bind(this)), -1 !== this.settings.checkbox.cascade.indexOf("undetermined") && this.element.on("changed.jstree uncheck_node.jstree check_node.jstree uncheck_all.jstree check_all.jstree move_node.jstree copy_node.jstree redraw.jstree open_node.jstree", function() {
					this._data.checkbox.uto && clearTimeout(this._data.checkbox.uto), this._data.checkbox.uto = setTimeout(this._undetermined.bind(this), 50)
				}.bind(this)), this.settings.checkbox.tie_selection || this.element.on("model.jstree", function(e, t) {
					var i, r, s = this._model.data,
						a = (s[t.parent], t.nodes);
					for (i = 0, r = a.length; i < r; i++) s[a[i]].state.checked = s[a[i]].state.checked || s[a[i]].original && s[a[i]].original.state && s[a[i]].original.state.checked, s[a[i]].state.checked && this._data.checkbox.selected.push(a[i])
				}.bind(this)), (-1 !== this.settings.checkbox.cascade.indexOf("up") || -1 !== this.settings.checkbox.cascade.indexOf("down")) && this.element.on("model.jstree", function(e, t) {
					var i, r, s, a, n, o, d = this._model.data,
						c = d[t.parent],
						l = t.nodes,
						h = [],
						_ = this.settings.checkbox.cascade,
						g = this.settings.checkbox.tie_selection;
					if (-1 !== _.indexOf("down"))
						if (c.state[g ? "selected" : "checked"]) {
							for (r = 0, s = l.length; r < s; r++) d[l[r]].state[g ? "selected" : "checked"] = !0;
							this._data[g ? "core" : "checkbox"].selected = this._data[g ? "core" : "checkbox"].selected.concat(l)
						} else
							for (r = 0, s = l.length; r < s; r++)
								if (d[l[r]].state[g ? "selected" : "checked"]) {
									for (a = 0, n = d[l[r]].children_d.length; a < n; a++) d[d[l[r]].children_d[a]].state[g ? "selected" : "checked"] = !0;
									this._data[g ? "core" : "checkbox"].selected = this._data[g ? "core" : "checkbox"].selected.concat(d[l[r]].children_d)
								} if (-1 !== _.indexOf("up")) {
						for (r = 0, s = c.children_d.length; r < s; r++) d[c.children_d[r]].children.length || h.push(d[c.children_d[r]].parent);
						for (a = 0, n = (h = E.vakata.array_unique(h)).length; a < n; a++)
							for (c = d[h[a]]; c && c.id !== E.jstree.root;) {
								for (r = i = 0, s = c.children.length; r < s; r++) i += d[c.children[r]].state[g ? "selected" : "checked"];
								if (i !== s) break;
								c.state[g ? "selected" : "checked"] = !0, this._data[g ? "core" : "checkbox"].selected.push(c.id), (o = this.get_node(c, !0)) && o.length && o.attr("aria-selected", !0).children(".jstree-anchor").addClass(g ? "jstree-clicked" : "jstree-checked"), c = this.get_node(c.parent)
							}
					}
					this._data[g ? "core" : "checkbox"].selected = E.vakata.array_unique(this._data[g ? "core" : "checkbox"].selected)
				}.bind(this)).on(this.settings.checkbox.tie_selection ? "select_node.jstree" : "check_node.jstree", function(e, t) {
					var i, r, s, a, n = t.node,
						o = this._model.data,
						d = this.get_node(n.parent),
						c = this.settings.checkbox.cascade,
						l = this.settings.checkbox.tie_selection,
						h = {},
						_ = this._data[l ? "core" : "checkbox"].selected;
					for (i = 0, r = _.length; i < r; i++) h[_[i]] = !0;
					if (-1 !== c.indexOf("down")) {
						var g = this._cascade_new_checked_state(n.id, !0),
							u = n.children_d.concat(n.id);
						for (i = 0, r = u.length; i < r; i++) - 1 < g.indexOf(u[i]) ? h[u[i]] = !0 : delete h[u[i]]
					}
					if (-1 !== c.indexOf("up"))
						for (; d && d.id !== E.jstree.root;) {
							for (i = s = 0, r = d.children.length; i < r; i++) s += o[d.children[i]].state[l ? "selected" : "checked"];
							if (s !== r) break;
							d.state[l ? "selected" : "checked"] = !0, h[d.id] = !0, (a = this.get_node(d, !0)) && a.length && a.attr("aria-selected", !0).children(".jstree-anchor").addClass(l ? "jstree-clicked" : "jstree-checked"), d = this.get_node(d.parent)
						}
					for (i in _ = [], h) h.hasOwnProperty(i) && _.push(i);
					this._data[l ? "core" : "checkbox"].selected = _
				}.bind(this)).on(this.settings.checkbox.tie_selection ? "deselect_all.jstree" : "uncheck_all.jstree", function(e, t) {
					var i, r, s, a = this.get_node(E.jstree.root),
						n = this._model.data;
					for (i = 0, r = a.children_d.length; i < r; i++)(s = n[a.children_d[i]]) && s.original && s.original.state && s.original.state.undetermined && (s.original.state.undetermined = !1)
				}.bind(this)).on(this.settings.checkbox.tie_selection ? "deselect_node.jstree" : "uncheck_node.jstree", function(e, t) {
					var i, r, s, a = t.node,
						n = (this.get_node(a, !0), this.settings.checkbox.cascade),
						o = this.settings.checkbox.tie_selection,
						d = this._data[o ? "core" : "checkbox"].selected,
						c = a.children_d.concat(a.id);
					if (-1 !== n.indexOf("down")) {
						var l = this._cascade_new_checked_state(a.id, !1);
						d = E.vakata.array_filter(d, function(e) {
							return -1 === c.indexOf(e) || -1 < l.indexOf(e)
						})
					}
					if (-1 !== n.indexOf("up") && -1 === d.indexOf(a.id)) {
						for (i = 0, r = a.parents.length; i < r; i++)(s = this._model.data[a.parents[i]]).state[o ? "selected" : "checked"] = !1, s && s.original && s.original.state && s.original.state.undetermined && (s.original.state.undetermined = !1), (s = this.get_node(a.parents[i], !0)) && s.length && s.attr("aria-selected", !1).children(".jstree-anchor").removeClass(o ? "jstree-clicked" : "jstree-checked");
						d = E.vakata.array_filter(d, function(e) {
							return -1 === a.parents.indexOf(e)
						})
					}
					this._data[o ? "core" : "checkbox"].selected = d
				}.bind(this)), -1 !== this.settings.checkbox.cascade.indexOf("up") && this.element.on("delete_node.jstree", function(e, t) {
					for (var i, r, s, a, n = this.get_node(t.parent), o = this._model.data, d = this.settings.checkbox.tie_selection; n && n.id !== E.jstree.root && !n.state[d ? "selected" : "checked"];) {
						for (i = s = 0, r = n.children.length; i < r; i++) s += o[n.children[i]].state[d ? "selected" : "checked"];
						if (!(0 < r && s === r)) break;
						n.state[d ? "selected" : "checked"] = !0, this._data[d ? "core" : "checkbox"].selected.push(n.id), (a = this.get_node(n, !0)) && a.length && a.attr("aria-selected", !0).children(".jstree-anchor").addClass(d ? "jstree-clicked" : "jstree-checked"), n = this.get_node(n.parent)
					}
				}.bind(this)).on("move_node.jstree", function(e, t) {
					var i, r, s, a, n, o = t.is_multi,
						d = t.old_parent,
						c = this.get_node(t.parent),
						l = this._model.data,
						h = this.settings.checkbox.tie_selection;
					if (!o)
						for (i = this.get_node(d); i && i.id !== E.jstree.root && !i.state[h ? "selected" : "checked"];) {
							for (s = r = 0, a = i.children.length; s < a; s++) r += l[i.children[s]].state[h ? "selected" : "checked"];
							if (!(0 < a && r === a)) break;
							i.state[h ? "selected" : "checked"] = !0, this._data[h ? "core" : "checkbox"].selected.push(i.id), (n = this.get_node(i, !0)) && n.length && n.attr("aria-selected", !0).children(".jstree-anchor").addClass(h ? "jstree-clicked" : "jstree-checked"), i = this.get_node(i.parent)
						}
					for (i = c; i && i.id !== E.jstree.root;) {
						for (s = r = 0, a = i.children.length; s < a; s++) r += l[i.children[s]].state[h ? "selected" : "checked"];
						if (r === a) i.state[h ? "selected" : "checked"] || (i.state[h ? "selected" : "checked"] = !0, this._data[h ? "core" : "checkbox"].selected.push(i.id), (n = this.get_node(i, !0)) && n.length && n.attr("aria-selected", !0).children(".jstree-anchor").addClass(h ? "jstree-clicked" : "jstree-checked"));
						else {
							if (!i.state[h ? "selected" : "checked"]) break;
							i.state[h ? "selected" : "checked"] = !1, this._data[h ? "core" : "checkbox"].selected = E.vakata.array_remove_item(this._data[h ? "core" : "checkbox"].selected, i.id), (n = this.get_node(i, !0)) && n.length && n.attr("aria-selected", !1).children(".jstree-anchor").removeClass(h ? "jstree-clicked" : "jstree-checked")
						}
						i = this.get_node(i.parent)
					}
				}.bind(this))
			}, this.get_undetermined = function(e) {
				if (-1 === this.settings.checkbox.cascade.indexOf("undetermined")) return [];
				var i, r, s, a, n = {},
					o = this._model.data,
					t = this.settings.checkbox.tie_selection,
					d = this._data[t ? "core" : "checkbox"].selected,
					c = [],
					l = this,
					h = [];
				for (i = 0, r = d.length; i < r; i++)
					if (o[d[i]] && o[d[i]].parents)
						for (s = 0, a = o[d[i]].parents.length; s < a && n[o[d[i]].parents[s]] === P; s++) o[d[i]].parents[s] !== E.jstree.root && (n[o[d[i]].parents[s]] = !0, c.push(o[d[i]].parents[s]));
				for (this.element.find(".jstree-closed").not(":has(.jstree-children)").each(function() {
						var e, t = l.get_node(this);
						if (t)
							if (t.state.loaded) {
								for (i = 0, r = t.children_d.length; i < r; i++)
									if (!(e = o[t.children_d[i]]).state.loaded && e.original && e.original.state && e.original.state.undetermined && !0 === e.original.state.undetermined)
										for (n[e.id] === P && e.id !== E.jstree.root && (n[e.id] = !0, c.push(e.id)), s = 0, a = e.parents.length; s < a; s++) n[e.parents[s]] === P && e.parents[s] !== E.jstree.root && (n[e.parents[s]] = !0, c.push(e.parents[s]))
							} else if (t.original && t.original.state && t.original.state.undetermined && !0 === t.original.state.undetermined)
							for (n[t.id] === P && t.id !== E.jstree.root && (n[t.id] = !0, c.push(t.id)), s = 0, a = t.parents.length; s < a; s++) n[t.parents[s]] === P && t.parents[s] !== E.jstree.root && (n[t.parents[s]] = !0, c.push(t.parents[s]))
					}), i = 0, r = c.length; i < r; i++) o[c[i]].state[t ? "selected" : "checked"] || h.push(e ? o[c[i]] : c[i]);
				return h
			}, this._undetermined = function() {
				if (null !== this.element) {
					var e, t, i, r = this.get_undetermined(!1);
					for (this.element.find(".jstree-undetermined").removeClass("jstree-undetermined"), e = 0, t = r.length; e < t; e++)(i = this.get_node(r[e], !0)) && i.length && i.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-undetermined")
				}
			}, this.redraw_node = function(e, t, i, r) {
				if (e = d.redraw_node.apply(this, arguments)) {
					var s, a, n = null,
						o = null;
					for (s = 0, a = e.childNodes.length; s < a; s++)
						if (e.childNodes[s] && e.childNodes[s].className && -1 !== e.childNodes[s].className.indexOf("jstree-anchor")) {
							n = e.childNodes[s];
							break
						} n && (!this.settings.checkbox.tie_selection && this._model.data[e.id].state.checked && (n.className += " jstree-checked"), o = h.cloneNode(!1), this._model.data[e.id].state.checkbox_disabled && (o.className += " jstree-checkbox-disabled"), n.insertBefore(o, n.childNodes[0]))
				}
				return i || -1 === this.settings.checkbox.cascade.indexOf("undetermined") || (this._data.checkbox.uto && clearTimeout(this._data.checkbox.uto), this._data.checkbox.uto = setTimeout(this._undetermined.bind(this), 50)), e
			}, this.show_checkboxes = function() {
				this._data.core.themes.checkboxes = !0, this.get_container_ul().removeClass("jstree-no-checkboxes")
			}, this.hide_checkboxes = function() {
				this._data.core.themes.checkboxes = !1, this.get_container_ul().addClass("jstree-no-checkboxes")
			}, this.toggle_checkboxes = function() {
				this._data.core.themes.checkboxes ? this.hide_checkboxes() : this.show_checkboxes()
			}, this.is_undetermined = function(e) {
				e = this.get_node(e);
				var t, i, r = this.settings.checkbox.cascade,
					s = this.settings.checkbox.tie_selection,
					a = this._data[s ? "core" : "checkbox"].selected,
					n = this._model.data;
				if (!e || !0 === e.state[s ? "selected" : "checked"] || -1 === r.indexOf("undetermined") || -1 === r.indexOf("down") && -1 === r.indexOf("up")) return !1;
				if (!e.state.loaded && !0 === e.original.state.undetermined) return !0;
				for (t = 0, i = e.children_d.length; t < i; t++)
					if (-1 !== E.inArray(e.children_d[t], a) || !n[e.children_d[t]].state.loaded && n[e.children_d[t]].original.state.undetermined) return !0;
				return !1
			}, this.disable_checkbox = function(e) {
				var t, i, r;
				if (E.vakata.is_array(e)) {
					for (t = 0, i = (e = e.slice()).length; t < i; t++) this.disable_checkbox(e[t]);
					return !0
				}
				return !(!(e = this.get_node(e)) || e.id === E.jstree.root) && (r = this.get_node(e, !0), void(e.state.checkbox_disabled || (e.state.checkbox_disabled = !0, r && r.length && r.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-checkbox-disabled"), this.trigger("disable_checkbox", {
					node: e
				}))))
			}, this.enable_checkbox = function(e) {
				var t, i, r;
				if (E.vakata.is_array(e)) {
					for (t = 0, i = (e = e.slice()).length; t < i; t++) this.enable_checkbox(e[t]);
					return !0
				}
				return !(!(e = this.get_node(e)) || e.id === E.jstree.root) && (r = this.get_node(e, !0), void(e.state.checkbox_disabled && (e.state.checkbox_disabled = !1, r && r.length && r.children(".jstree-anchor").children(".jstree-checkbox").removeClass("jstree-checkbox-disabled"), this.trigger("enable_checkbox", {
					node: e
				}))))
			}, this.activate_node = function(e, t) {
				return !E(t.target).hasClass("jstree-checkbox-disabled") && (this.settings.checkbox.tie_selection && (this.settings.checkbox.whole_node || E(t.target).hasClass("jstree-checkbox")) && (t.ctrlKey = !0), this.settings.checkbox.tie_selection || !this.settings.checkbox.whole_node && !E(t.target).hasClass("jstree-checkbox") ? d.activate_node.call(this, e, t) : !this.is_disabled(e) && (this.is_checked(e) ? this.uncheck_node(e, t) : this.check_node(e, t), void this.trigger("activate_node", {
					node: this.get_node(e)
				})))
			}, this._cascade_new_checked_state = function(e, t) {
				var i, r, s, a = this.settings.checkbox.tie_selection,
					n = this._model.data[e],
					o = [],
					d = [];
				if (!this.settings.checkbox.cascade_to_disabled && n.state.disabled || !this.settings.checkbox.cascade_to_hidden && n.state.hidden) s = this.get_checked_descendants(e), n.state[a ? "selected" : "checked"] && s.push(n.id), o = o.concat(s);
				else {
					if (n.children)
						for (i = 0, r = n.children.length; i < r; i++) {
							var c = n.children[i];
							s = this._cascade_new_checked_state(c, t), o = o.concat(s), -1 < s.indexOf(c) && d.push(c)
						}
					var l = this.get_node(n, !0),
						h = 0 < d.length && d.length < n.children.length;
					n.original && n.original.state && n.original.state.undetermined && (n.original.state.undetermined = h), h ? (n.state[a ? "selected" : "checked"] = !1, l.attr("aria-selected", !1).children(".jstree-anchor").removeClass(a ? "jstree-clicked" : "jstree-checked")) : t && d.length === n.children.length ? (n.state[a ? "selected" : "checked"] = t, o.push(n.id), l.attr("aria-selected", !0).children(".jstree-anchor").addClass(a ? "jstree-clicked" : "jstree-checked")) : (n.state[a ? "selected" : "checked"] = !1, l.attr("aria-selected", !1).children(".jstree-anchor").removeClass(a ? "jstree-clicked" : "jstree-checked"))
				}
				return o
			}, this.get_checked_descendants = function(e) {
				var t = this,
					i = t.settings.checkbox.tie_selection,
					r = t._model.data[e];
				return E.vakata.array_filter(r.children_d, function(e) {
					return t._model.data[e].state[i ? "selected" : "checked"]
				})
			}, this.check_node = function(e, t) {
				if (this.settings.checkbox.tie_selection) return this.select_node(e, !1, !0, t);
				var i, r, s;
				if (E.vakata.is_array(e)) {
					for (r = 0, s = (e = e.slice()).length; r < s; r++) this.check_node(e[r], t);
					return !0
				}
				return !(!(e = this.get_node(e)) || e.id === E.jstree.root) && (i = this.get_node(e, !0), void(e.state.checked || (e.state.checked = !0, this._data.checkbox.selected.push(e.id), i && i.length && i.children(".jstree-anchor").addClass("jstree-checked"), this.trigger("check_node", {
					node: e,
					selected: this._data.checkbox.selected,
					event: t
				}))))
			}, this.uncheck_node = function(e, t) {
				if (this.settings.checkbox.tie_selection) return this.deselect_node(e, !1, t);
				var i, r, s;
				if (E.vakata.is_array(e)) {
					for (i = 0, r = (e = e.slice()).length; i < r; i++) this.uncheck_node(e[i], t);
					return !0
				}
				return !(!(e = this.get_node(e)) || e.id === E.jstree.root) && (s = this.get_node(e, !0), void(e.state.checked && (e.state.checked = !1, this._data.checkbox.selected = E.vakata.array_remove_item(this._data.checkbox.selected, e.id), s.length && s.children(".jstree-anchor").removeClass("jstree-checked"), this.trigger("uncheck_node", {
					node: e,
					selected: this._data.checkbox.selected,
					event: t
				}))))
			}, this.check_all = function() {
				if (this.settings.checkbox.tie_selection) return this.select_all();
				var e, t;
				this._data.checkbox.selected.concat([]);
				for (this._data.checkbox.selected = this._model.data[E.jstree.root].children_d.concat(), e = 0, t = this._data.checkbox.selected.length; e < t; e++) this._model.data[this._data.checkbox.selected[e]] && (this._model.data[this._data.checkbox.selected[e]].state.checked = !0);
				this.redraw(!0), this.trigger("check_all", {
					selected: this._data.checkbox.selected
				})
			}, this.uncheck_all = function() {
				if (this.settings.checkbox.tie_selection) return this.deselect_all();
				var e, t, i = this._data.checkbox.selected.concat([]);
				for (e = 0, t = this._data.checkbox.selected.length; e < t; e++) this._model.data[this._data.checkbox.selected[e]] && (this._model.data[this._data.checkbox.selected[e]].state.checked = !1);
				this._data.checkbox.selected = [], this.element.find(".jstree-checked").removeClass("jstree-checked"), this.trigger("uncheck_all", {
					selected: this._data.checkbox.selected,
					node: i
				})
			}, this.is_checked = function(e) {
				return this.settings.checkbox.tie_selection ? this.is_selected(e) : !(!(e = this.get_node(e)) || e.id === E.jstree.root) && e.state.checked
			}, this.get_checked = function(e) {
				return this.settings.checkbox.tie_selection ? this.get_selected(e) : e ? E.map(this._data.checkbox.selected, function(e) {
					return this.get_node(e)
				}.bind(this)) : this._data.checkbox.selected.slice()
			}, this.get_top_checked = function(e) {
				if (this.settings.checkbox.tie_selection) return this.get_top_selected(e);
				var t, i, r, s, a = this.get_checked(!0),
					n = {};
				for (t = 0, i = a.length; t < i; t++) n[a[t].id] = a[t];
				for (t = 0, i = a.length; t < i; t++)
					for (r = 0, s = a[t].children_d.length; r < s; r++) n[a[t].children_d[r]] && delete n[a[t].children_d[r]];
				for (t in a = [], n) n.hasOwnProperty(t) && a.push(t);
				return e ? E.map(a, function(e) {
					return this.get_node(e)
				}.bind(this)) : a
			}, this.get_bottom_checked = function(e) {
				if (this.settings.checkbox.tie_selection) return this.get_bottom_selected(e);
				var t, i, r = this.get_checked(!0),
					s = [];
				for (t = 0, i = r.length; t < i; t++) r[t].children.length || s.push(r[t].id);
				return e ? E.map(s, function(e) {
					return this.get_node(e)
				}.bind(this)) : s
			}, this.load_node = function(e, t) {
				var i, r, s;
				if (!E.vakata.is_array(e) && !this.settings.checkbox.tie_selection && ((s = this.get_node(e)) && s.state.loaded))
					for (i = 0, r = s.children_d.length; i < r; i++) this._model.data[s.children_d[i]].state.checked && (!0, this._data.checkbox.selected = E.vakata.array_remove_item(this._data.checkbox.selected, s.children_d[i]));
				return d.load_node.apply(this, arguments)
			}, this.get_state = function() {
				var e = d.get_state.apply(this, arguments);
				return this.settings.checkbox.tie_selection || (e.checkbox = this._data.checkbox.selected.slice()), e
			}, this.set_state = function(e, t) {
				var i = d.set_state.apply(this, arguments);
				if (i && e.checkbox) {
					if (!this.settings.checkbox.tie_selection) {
						this.uncheck_all();
						var r = this;
						E.each(e.checkbox, function(e, t) {
							r.check_node(t)
						})
					}
					return delete e.checkbox, this.set_state(e, t), !1
				}
				return i
			}, this.refresh = function(e, t) {
				return this.settings.checkbox.tie_selection && (this._data.checkbox.selected = []), d.refresh.apply(this, arguments)
			}
		}, E.jstree.defaults.conditionalselect = function() {
			return !0
		}, E.jstree.plugins.conditionalselect = function(e, i) {
			this.activate_node = function(e, t) {
				return this.settings.conditionalselect.call(this, this.get_node(e), t) ? i.activate_node.call(this, e, t) : void 0
			}
		}, E.jstree.defaults.contextmenu = {
			select_node: !0,
			show_at_node: !0,
			items: function(e, t) {
				return {
					create: {
						separator_before: !1,
						separator_after: !0,
						_disabled: !1,
						label: "Create",
						action: function(e) {
							var i = E.jstree.reference(e.reference),
								t = i.get_node(e.reference);
							i.create_node(t, {}, "last", function(t) {
								try {
									i.edit(t)
								} catch (e) {
									setTimeout(function() {
										i.edit(t)
									}, 0)
								}
							})
						}
					},
					rename: {
						separator_before: !1,
						separator_after: !1,
						_disabled: !1,
						label: "Rename",
						action: function(e) {
							var t = E.jstree.reference(e.reference),
								i = t.get_node(e.reference);
							t.edit(i)
						}
					},
					remove: {
						separator_before: !1,
						icon: !1,
						separator_after: !1,
						_disabled: !1,
						label: "Delete",
						action: function(e) {
							var t = E.jstree.reference(e.reference),
								i = t.get_node(e.reference);
							t.is_selected(i) ? t.delete_node(t.get_selected()) : t.delete_node(i)
						}
					},
					ccp: {
						separator_before: !0,
						icon: !1,
						separator_after: !1,
						label: "Edit",
						action: !1,
						submenu: {
							cut: {
								separator_before: !1,
								separator_after: !1,
								label: "Cut",
								action: function(e) {
									var t = E.jstree.reference(e.reference),
										i = t.get_node(e.reference);
									t.is_selected(i) ? t.cut(t.get_top_selected()) : t.cut(i)
								}
							},
							copy: {
								separator_before: !1,
								icon: !1,
								separator_after: !1,
								label: "Copy",
								action: function(e) {
									var t = E.jstree.reference(e.reference),
										i = t.get_node(e.reference);
									t.is_selected(i) ? t.copy(t.get_top_selected()) : t.copy(i)
								}
							},
							paste: {
								separator_before: !1,
								icon: !1,
								_disabled: function(e) {
									return !E.jstree.reference(e.reference).can_paste()
								},
								separator_after: !1,
								label: "Paste",
								action: function(e) {
									var t = E.jstree.reference(e.reference),
										i = t.get_node(e.reference);
									t.paste(i)
								}
							}
						}
					}
				}
			}
		}, E.jstree.plugins.contextmenu = function(e, a) {
			this.bind = function() {
				a.bind.call(this);
				var t, i, r = 0,
					s = null;
				this.element.on("init.jstree loading.jstree ready.jstree", function() {
					this.get_container_ul().addClass("jstree-contextmenu")
				}.bind(this)).on("contextmenu.jstree", ".jstree-anchor", function(e, t) {
					"input" !== e.target.tagName.toLowerCase() && (e.preventDefault(), r = e.ctrlKey ? +new Date : 0, (t || s) && (r = +new Date + 1e4), s && clearTimeout(s), this.is_loading(e.currentTarget) || this.show_contextmenu(e.currentTarget, e.pageX, e.pageY, e))
				}.bind(this)).on("click.jstree", ".jstree-anchor", function(e) {
					this._data.contextmenu.visible && (!r || 250 < +new Date - r) && E.vakata.context.hide(), r = 0
				}.bind(this)).on("touchstart.jstree", ".jstree-anchor", function(e) {
					e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches[0] && (t = e.originalEvent.changedTouches[0].clientX, i = e.originalEvent.changedTouches[0].clientY, s = setTimeout(function() {
						E(e.currentTarget).trigger("contextmenu", !0)
					}, 750))
				}).on("touchmove.vakata.jstree", function(e) {
					s && e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches[0] && (10 < Math.abs(t - e.originalEvent.changedTouches[0].clientX) || 10 < Math.abs(i - e.originalEvent.changedTouches[0].clientY)) && (clearTimeout(s), E.vakata.context.hide())
				}).on("touchend.vakata.jstree", function(e) {
					s && clearTimeout(s)
				}), E(k).on("context_hide.vakata.jstree", function(e, t) {
					this._data.contextmenu.visible = !1, E(t.reference).removeClass("jstree-context")
				}.bind(this))
			}, this.teardown = function() {
				this._data.contextmenu.visible && E.vakata.context.hide(), E(k).off("context_hide.vakata.jstree"), a.teardown.call(this)
			}, this.show_contextmenu = function(t, i, r, e) {
				if (!(t = this.get_node(t)) || t.id === E.jstree.root) return !1;
				var s = this.settings.contextmenu,
					a = this.get_node(t, !0).children(".jstree-anchor"),
					n = !1,
					o = !1;
				(s.show_at_node || i === P || r === P) && (n = a.offset(), i = n.left, r = n.top + this._data.core.li_height), this.settings.contextmenu.select_node && !this.is_selected(t) && this.activate_node(t, e), o = s.items, E.vakata.is_function(o) && (o = o.call(this, t, function(e) {
					this._show_contextmenu(t, i, r, e)
				}.bind(this))), E.isPlainObject(o) && this._show_contextmenu(t, i, r, o)
			}, this._show_contextmenu = function(e, t, i, r) {
				var s = this.get_node(e, !0).children(".jstree-anchor");
				E(k).one("context_show.vakata.jstree", function(e, t) {
					var i = "jstree-contextmenu jstree-" + this.get_theme() + "-contextmenu";
					E(t.element).addClass(i), s.addClass("jstree-context")
				}.bind(this)), this._data.contextmenu.visible = !0, E.vakata.context.show(s, {
					x: t,
					y: i
				}, r), this.trigger("show_contextmenu", {
					node: e,
					x: t,
					y: i
				})
			}
		}, j = {
			element: v = !1,
			reference: !1,
			position_x: 0,
			position_y: 0,
			items: [],
			html: "",
			is_visible: !1
		}, (m = E).vakata.context = {
			settings: {
				hide_onmouseleave: 0,
				icons: !0
			},
			_trigger: function(e) {
				m(k).triggerHandler("context_" + e + ".vakata", {
					reference: j.reference,
					element: j.element,
					position: {
						x: j.position_x,
						y: j.position_y
					}
				})
			},
			_execute: function(e) {
				return !(!(e = j.items[e]) || e._disabled && (!m.vakata.is_function(e._disabled) || e._disabled({
					item: e,
					reference: j.reference,
					element: j.element
				})) || !e.action) && e.action.call(null, {
					item: e,
					reference: j.reference,
					element: j.element,
					position: {
						x: j.position_x,
						y: j.position_y
					}
				})
			},
			_parse: function(e, t) {
				if (!e) return !1;
				t || (j.html = "", j.items = []);
				var i, r = "",
					s = !1;
				return t && (r += "<ul>"), m.each(e, function(e, t) {
					return !t || (j.items.push(t), !s && t.separator_before && (r += "<li class='vakata-context-separator'><a href='#' " + (m.vakata.context.settings.icons ? "" : 'class="vakata-context-no-icons"') + ">&#160;</a></li>"), s = !1, r += "<li class='" + (t._class || "") + (!0 === t._disabled || m.vakata.is_function(t._disabled) && t._disabled({
						item: t,
						reference: j.reference,
						element: j.element
					}) ? " vakata-contextmenu-disabled " : "") + "' " + (t.shortcut ? " data-shortcut='" + t.shortcut + "' " : "") + ">", r += "<a href='#' rel='" + (j.items.length - 1) + "' " + (t.title ? "title='" + t.title + "'" : "") + ">", m.vakata.context.settings.icons && (r += "<i ", t.icon && (r += -1 !== t.icon.indexOf("/") || -1 !== t.icon.indexOf(".") ? " style='background:url(\"" + t.icon + "\") center center no-repeat' " : " class='" + t.icon + "' "), r += "></i><span class='vakata-contextmenu-sep'>&#160;</span>"), r += (m.vakata.is_function(t.label) ? t.label({
						item: e,
						reference: j.reference,
						element: j.element
					}) : t.label) + (t.shortcut ? ' <span class="vakata-contextmenu-shortcut vakata-contextmenu-shortcut-' + t.shortcut + '">' + (t.shortcut_label || "") + "</span>" : "") + "</a>", t.submenu && (i = m.vakata.context._parse(t.submenu, !0)) && (r += i), r += "</li>", void(t.separator_after && (r += "<li class='vakata-context-separator'><a href='#' " + (m.vakata.context.settings.icons ? "" : 'class="vakata-context-no-icons"') + ">&#160;</a></li>", s = !0)))
				}), r = r.replace(/<li class\='vakata-context-separator'\><\/li\>$/, ""), t && (r += "</ul>"), t || (j.html = r, m.vakata.context._trigger("parse")), 10 < r.length && r
			},
			_show_submenu: function(e) {
				if ((e = m(e)).length && e.children("ul").length) {
					var t = e.children("ul"),
						i = e.offset().left,
						r = i + e.outerWidth(),
						s = e.offset().top,
						a = t.width(),
						n = t.height(),
						o = m(window).width() + m(window).scrollLeft(),
						d = m(window).height() + m(window).scrollTop();
					v ? e[r - (a + 10 + e.outerWidth()) < 0 ? "addClass" : "removeClass"]("vakata-context-left") : e[o < r + a && o - r < i ? "addClass" : "removeClass"]("vakata-context-right"), d < s + n + 10 && t.css("bottom", "-1px"), e.hasClass("vakata-context-right") ? i < a && t.css("margin-right", i - a) : o - r < a && t.css("margin-left", o - r - a), t.show()
				}
			},
			show: function(e, t, i) {
				var r, s, a, n, o, d, c, l;
				switch (j.element && j.element.length && j.element.width(""), !0) {
					case !t && !e:
						return !1;
					case !!t && !!e:
						j.reference = e, j.position_x = t.x, j.position_y = t.y;
						break;
					case !t && !!e:
						r = (j.reference = e).offset(), j.position_x = r.left + e.outerHeight(), j.position_y = r.top;
						break;
					case !!t && !e:
						j.position_x = t.x, j.position_y = t.y
				}
				e && !i && m(e).data("vakata_contextmenu") && (i = m(e).data("vakata_contextmenu")), m.vakata.context._parse(i) && j.element.html(j.html), j.items.length && (j.element.appendTo(k.body), s = j.element, a = j.position_x, n = j.position_y, o = s.width(), d = s.height(), c = m(window).width() + m(window).scrollLeft(), l = m(window).height() + m(window).scrollTop(), v && (a -= s.outerWidth() - m(e).outerWidth()) < m(window).scrollLeft() + 20 && (a = m(window).scrollLeft() + 20), c < a + o + 20 && (a = c - (o + 20)), l < n + d + 20 && (n = l - (d + 20)), j.element.css({
					left: a,
					top: n
				}).show().find("a").first().trigger("focus").parent().addClass("vakata-context-hover"), j.is_visible = !0, m.vakata.context._trigger("show"))
			},
			hide: function() {
				j.is_visible && (j.element.hide().find("ul").hide().end().find(":focus").trigger("blur").end().detach(), j.is_visible = !1, m.vakata.context._trigger("hide"))
			}
		}, m(function() {
			v = "rtl" === m(k.body).css("direction");
			var t = !1;
			j.element = m("<ul class='vakata-context'></ul>"), j.element.on("mouseenter", "li", function(e) {
				e.stopImmediatePropagation(), m.contains(this, e.relatedTarget) || (t && clearTimeout(t), j.element.find(".vakata-context-hover").removeClass("vakata-context-hover").end(), m(this).siblings().find("ul").hide().end().end().parentsUntil(".vakata-context", "li").addBack().addClass("vakata-context-hover"), m.vakata.context._show_submenu(this))
			}).on("mouseleave", "li", function(e) {
				m.contains(this, e.relatedTarget) || m(this).find(".vakata-context-hover").addBack().removeClass("vakata-context-hover")
			}).on("mouseleave", function(e) {
				m(this).find(".vakata-context-hover").removeClass("vakata-context-hover"), m.vakata.context.settings.hide_onmouseleave && (t = setTimeout(function() {
					m.vakata.context.hide()
				}, m.vakata.context.settings.hide_onmouseleave))
			}).on("click", "a", function(e) {
				e.preventDefault(), m(this).trigger("blur").parent().hasClass("vakata-context-disabled") || !1 === m.vakata.context._execute(m(this).attr("rel")) || m.vakata.context.hide()
			}).on("keydown", "a", function(e) {
				var t = null;
				switch (e.which) {
					case 13:
					case 32:
						e.type = "click", e.preventDefault(), m(e.currentTarget).trigger(e);
						break;
					case 37:
						j.is_visible && (j.element.find(".vakata-context-hover").last().closest("li").first().find("ul").hide().find(".vakata-context-hover").removeClass("vakata-context-hover").end().end().children("a").trigger("focus"), e.stopImmediatePropagation(), e.preventDefault());
						break;
					case 38:
						j.is_visible && ((t = j.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").prevAll("li:not(.vakata-context-separator)").first()).length || (t = j.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").last()), t.addClass("vakata-context-hover").children("a").trigger("focus"), e.stopImmediatePropagation(), e.preventDefault());
						break;
					case 39:
						j.is_visible && (j.element.find(".vakata-context-hover").last().children("ul").show().children("li:not(.vakata-context-separator)").removeClass("vakata-context-hover").first().addClass("vakata-context-hover").children("a").trigger("focus"), e.stopImmediatePropagation(), e.preventDefault());
						break;
					case 40:
						j.is_visible && ((t = j.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").nextAll("li:not(.vakata-context-separator)").first()).length || (t = j.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").first()), t.addClass("vakata-context-hover").children("a").trigger("focus"), e.stopImmediatePropagation(), e.preventDefault());
						break;
					case 27:
						m.vakata.context.hide(), e.preventDefault()
				}
			}).on("keydown", function(e) {
				e.preventDefault();
				var t = j.element.find(".vakata-contextmenu-shortcut-" + e.which).parent();
				t.parent().not(".vakata-context-disabled") && t.trigger("click")
			}), m(k).on("mousedown.vakata.jstree", function(e) {
				j.is_visible && j.element[0] !== e.target && !m.contains(j.element[0], e.target) && m.vakata.context.hide()
			}).on("context_show.vakata.jstree", function(e, t) {
				j.element.find("li:has(ul)").children("a").addClass("vakata-context-parent"), v && j.element.addClass("vakata-context-rtl").css("direction", "rtl"), j.element.find("ul").hide().end()
			})
		}), E.jstree.defaults.dnd = {
			copy: !0,
			open_timeout: 500,
			is_draggable: !0,
			check_while_dragging: !0,
			always_copy: !1,
			inside_pos: 0,
			drag_selection: !0,
			touch: !0,
			large_drop_target: !1,
			large_drag_target: !1,
			use_html5: !1
		}, E.jstree.plugins.dnd = function(e, o) {
			this.init = function(e, t) {
				o.init.call(this, e, t), this.settings.dnd.use_html5 = this.settings.dnd.use_html5 && "draggable" in k.createElement("span")
			}, this.bind = function() {
				o.bind.call(this), this.element.on(this.settings.dnd.use_html5 ? "dragstart.jstree" : "mousedown.jstree touchstart.jstree", this.settings.dnd.large_drag_target ? ".jstree-node" : ".jstree-anchor", function(e) {
					if (this.settings.dnd.large_drag_target && E(e.target).closest(".jstree-node")[0] !== e.currentTarget) return !0;
					if ("touchstart" === e.type && (!this.settings.dnd.touch || "selected" === this.settings.dnd.touch && !E(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").hasClass("jstree-clicked"))) return !0;
					var t = this.get_node(e.target),
						i = this.is_selected(t) && this.settings.dnd.drag_selection ? this.get_top_selected().length : 1,
						r = 1 < i ? i + " " + this.get_string("nodes") : this.get_text(e.currentTarget);
					if (this.settings.core.force_text && (r = E.vakata.html.escape(r)), t && t.id && t.id !== E.jstree.root && (1 === e.which || "touchstart" === e.type || "dragstart" === e.type) && (!0 === this.settings.dnd.is_draggable || E.vakata.is_function(this.settings.dnd.is_draggable) && this.settings.dnd.is_draggable.call(this, 1 < i ? this.get_top_selected(!0) : [t], e))) {
						if (d = {
								jstree: !0,
								origin: this,
								obj: this.get_node(t, !0),
								nodes: 1 < i ? this.get_top_selected() : [t.id]
							}, l = e.currentTarget, !this.settings.dnd.use_html5) return this.element.trigger("mousedown.jstree"), E.vakata.dnd.start(e, d, '<div id="jstree-dnd" class="jstree-' + this.get_theme() + " jstree-" + this.get_theme() + "-" + this.get_theme_variant() + " " + (this.settings.core.themes.responsive ? " jstree-dnd-responsive" : "") + '"><i class="jstree-icon jstree-er"></i>' + r + '<ins class="jstree-copy">+</ins></div>');
						E.vakata.dnd._trigger("start", e, {
							helper: E(),
							element: l,
							data: d
						})
					}
				}.bind(this)), this.settings.dnd.use_html5 && this.element.on("dragover.jstree", function(e) {
					return e.preventDefault(), E.vakata.dnd._trigger("move", e, {
						helper: E(),
						element: l,
						data: d
					}), !1
				}).on("drop.jstree", function(e) {
					return e.preventDefault(), E.vakata.dnd._trigger("stop", e, {
						helper: E(),
						element: l,
						data: d
					}), !1
				}.bind(this))
			}, this.redraw_node = function(e, t, i, r) {
				if ((e = o.redraw_node.apply(this, arguments)) && this.settings.dnd.use_html5)
					if (this.settings.dnd.large_drag_target) e.setAttribute("draggable", !0);
					else {
						var s, a, n = null;
						for (s = 0, a = e.childNodes.length; s < a; s++)
							if (e.childNodes[s] && e.childNodes[s].className && -1 !== e.childNodes[s].className.indexOf("jstree-anchor")) {
								n = e.childNodes[s];
								break
							} n && n.setAttribute("draggable", !0)
					} return e
			}
		}, E(function() {
			var N = !1,
				T = !1,
				O = !1,
				A = !1,
				S = E('<div id="jstree-marker">&#160;</div>').hide();
			E(k).on("dragover.vakata.jstree", function(e) {
				l && E.vakata.dnd._trigger("move", e, {
					helper: E(),
					element: l,
					data: d
				})
			}).on("drop.vakata.jstree", function(e) {
				l && (E.vakata.dnd._trigger("stop", e, {
					helper: E(),
					element: l,
					data: d
				}), d = l = null)
			}).on("dnd_start.vakata.jstree", function(e, t) {
				O = N = !1, t && t.data && t.data.jstree && S.appendTo(k.body)
			}).on("dnd_move.vakata.jstree", function(e, s) {
				var a = s.event.target !== O.target;
				if (A && (!s.event || "dragover" !== s.event.type || a) && clearTimeout(A), s && s.data && s.data.jstree && (!s.event.target.id || "jstree-marker" !== s.event.target.id)) {
					O = s.event;
					var n, o, d, c, l, h, _, g, u, f, p, m, v, j, k, b, y, x = E.jstree.reference(s.event.target),
						w = !1,
						C = !1,
						t = !1;
					if (x && x._data && x._data.dnd)
						if (S.attr("class", "jstree-" + x.get_theme() + (x.settings.core.themes.responsive ? " jstree-dnd-responsive" : "")), k = s.data.origin && (s.data.origin.settings.dnd.always_copy || s.data.origin.settings.dnd.copy && (s.event.metaKey || s.event.ctrlKey)), s.helper.children().attr("class", "jstree-" + x.get_theme() + " jstree-" + x.get_theme() + "-" + x.get_theme_variant() + " " + (x.settings.core.themes.responsive ? " jstree-dnd-responsive" : "")).find(".jstree-copy").first()[k ? "show" : "hide"](), s.event.target !== x.element[0] && s.event.target !== x.get_container_ul()[0] || 0 !== x.get_container_ul().children().length) {
							if ((w = x.settings.dnd.large_drop_target ? E(s.event.target).closest(".jstree-node").children(".jstree-anchor") : E(s.event.target).closest(".jstree-anchor")) && w.length && w.parent().is(".jstree-closed, .jstree-open, .jstree-leaf") && (C = w.offset(), t = (s.event.pageY !== P ? s.event.pageY : s.event.originalEvent.pageY) - C.top, d = w.outerHeight(), h = t < d / 3 ? ["b", "i", "a"] : d - d / 3 < t ? ["a", "i", "b"] : d / 2 < t ? ["i", "a", "b"] : ["i", "b", "a"], E.each(h, function(e, t) {
									switch (t) {
										case "b":
											n = C.left - 6, o = C.top, c = x.get_parent(w), l = w.parent().index(), y = "jstree-below";
											break;
										case "i":
											v = x.settings.dnd.inside_pos, j = x.get_node(w.parent()), n = C.left - 2, o = C.top + d / 2 + 1, c = j.id, l = "first" === v ? 0 : "last" === v ? j.children.length : Math.min(v, j.children.length), y = "jstree-inside";
											break;
										case "a":
											n = C.left - 6, o = C.top + d, c = x.get_parent(w), l = w.parent().index() + 1, y = "jstree-above"
									}
									for (_ = !0, g = 0, u = s.data.nodes.length; g < u; g++)
										if (f = s.data.origin && (s.data.origin.settings.dnd.always_copy || s.data.origin.settings.dnd.copy && (s.event.metaKey || s.event.ctrlKey)) ? "copy_node" : "move_node", p = l, "move_node" === f && "a" === t && s.data.origin && s.data.origin === x && c === x.get_parent(s.data.nodes[g]) && (m = x.get_node(c), p > E.inArray(s.data.nodes[g], m.children) && (p -= 1)), !(_ = _ && (x && x.settings && x.settings.dnd && !1 === x.settings.dnd.check_while_dragging || x.check(f, s.data.origin && s.data.origin !== x ? s.data.origin.get_node(s.data.nodes[g]) : s.data.nodes[g], c, p, {
												dnd: !0,
												ref: x.get_node(w.parent()),
												pos: t,
												origin: s.data.origin,
												is_multi: s.data.origin && s.data.origin !== x,
												is_foreign: !s.data.origin
											})))) {
											x && x.last_error && (T = x.last_error());
											break
										} return "i" === t && w.parent().is(".jstree-closed") && x.settings.dnd.open_timeout && (!s.event || "dragover" !== s.event.type || a) && (A && clearTimeout(A), A = setTimeout((i = x, r = w, function() {
										i.open_node(r)
									}), x.settings.dnd.open_timeout)), _ ? ((b = x.get_node(c, !0)).hasClass(".jstree-dnd-parent") || (E(".jstree-dnd-parent").removeClass("jstree-dnd-parent"), b.addClass("jstree-dnd-parent")), N = {
										ins: x,
										par: c,
										pos: "i" !== t || "last" !== v || 0 !== l || x.is_loaded(j) ? l : "last"
									}, S.css({
										left: n + "px",
										top: o + "px"
									}).show(), S.removeClass("jstree-above jstree-inside jstree-below").addClass(y), s.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok"), s.event.originalEvent && s.event.originalEvent.dataTransfer && (s.event.originalEvent.dataTransfer.dropEffect = k ? "copy" : "move"), T = {}, !(h = !0)) : void 0;
									var i, r
								}), !0 === h)) return
						} else {
							for (_ = !0, g = 0, u = s.data.nodes.length; g < u && (_ = _ && x.check(s.data.origin && (s.data.origin.settings.dnd.always_copy || s.data.origin.settings.dnd.copy && (s.event.metaKey || s.event.ctrlKey)) ? "copy_node" : "move_node", s.data.origin && s.data.origin !== x ? s.data.origin.get_node(s.data.nodes[g]) : s.data.nodes[g], E.jstree.root, "last", {
									dnd: !0,
									ref: x.get_node(E.jstree.root),
									pos: "i",
									origin: s.data.origin,
									is_multi: s.data.origin && s.data.origin !== x,
									is_foreign: !s.data.origin
								})); g++);
							if (_) return N = {
								ins: x,
								par: E.jstree.root,
								pos: "last"
							}, S.hide(), s.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok"), void(s.event.originalEvent && s.event.originalEvent.dataTransfer && (s.event.originalEvent.dataTransfer.dropEffect = k ? "copy" : "move"))
						} E(".jstree-dnd-parent").removeClass("jstree-dnd-parent"), N = !1, s.helper.find(".jstree-icon").removeClass("jstree-ok").addClass("jstree-er"), s.event.originalEvent && s.event.originalEvent.dataTransfer, S.hide()
				}
			}).on("dnd_scroll.vakata.jstree", function(e, t) {
				t && t.data && t.data.jstree && (S.hide(), O = N = !1, t.helper.find(".jstree-icon").first().removeClass("jstree-ok").addClass("jstree-er"))
			}).on("dnd_stop.vakata.jstree", function(e, t) {
				if (E(".jstree-dnd-parent").removeClass("jstree-dnd-parent"), A && clearTimeout(A), t && t.data && t.data.jstree) {
					S.hide().detach();
					var i, r, s = [];
					if (N) {
						for (i = 0, r = t.data.nodes.length; i < r; i++) s[i] = t.data.origin ? t.data.origin.get_node(t.data.nodes[i]) : t.data.nodes[i];
						N.ins[t.data.origin && (t.data.origin.settings.dnd.always_copy || t.data.origin.settings.dnd.copy && (t.event.metaKey || t.event.ctrlKey)) ? "copy_node" : "move_node"](s, N.par, N.pos, !1, !1, !1, t.data.origin)
					} else(i = E(t.event.target).closest(".jstree")).length && T && T.error && "check" === T.error && ((i = i.jstree(!0)) && i.settings.core.error.call(this, T));
					N = O = !1
				}
			}).on("keyup.jstree keydown.jstree", function(e, t) {
				(t = E.vakata.dnd._get()) && t.data && t.data.jstree && ("keyup" === e.type && 27 === e.which ? (A && clearTimeout(A), A = O = T = N = !1, S.hide().detach(), E.vakata.dnd._clean()) : (t.helper.find(".jstree-copy").first()[t.data.origin && (t.data.origin.settings.dnd.always_copy || t.data.origin.settings.dnd.copy && (e.metaKey || e.ctrlKey)) ? "show" : "hide"](), O && (O.metaKey = e.metaKey, O.ctrlKey = e.ctrlKey, E.vakata.dnd._trigger("move", O))))
			})
		}), p = {
			element: !((f = E).vakata.html = {
				div: f("<div></div>"),
				escape: function(e) {
					return f.vakata.html.div.text(e).html()
				},
				strip: function(e) {
					return f.vakata.html.div.empty().append(f.parseHTML(e)).text()
				}
			}),
			target: !1,
			is_down: !1,
			is_drag: !1,
			helper: !1,
			helper_w: 0,
			data: !1,
			init_x: 0,
			init_y: 0,
			scroll_l: 0,
			scroll_t: 0,
			scroll_e: !1,
			scroll_i: !1,
			is_touch: !1
		}, f.vakata.dnd = {
			settings: {
				scroll_speed: 10,
				scroll_proximity: 20,
				helper_left: 5,
				helper_top: 10,
				threshold: 5,
				threshold_touch: 10
			},
			_trigger: function(e, t, i) {
				i === P && (i = f.vakata.dnd._get()), i.event = t, f(k).triggerHandler("dnd_" + e + ".vakata", i)
			},
			_get: function() {
				return {
					data: p.data,
					element: p.element,
					helper: p.helper
				}
			},
			_clean: function() {
				p.helper && p.helper.remove(), p.scroll_i && (clearInterval(p.scroll_i), p.scroll_i = !1), p = {
					element: !1,
					target: !1,
					is_down: !1,
					is_drag: !1,
					helper: !1,
					helper_w: 0,
					data: !1,
					init_x: 0,
					init_y: 0,
					scroll_l: 0,
					scroll_t: 0,
					scroll_e: !1,
					scroll_i: !1,
					is_touch: !1
				}, l = null, f(k).off("mousemove.vakata.jstree touchmove.vakata.jstree", f.vakata.dnd.drag), f(k).off("mouseup.vakata.jstree touchend.vakata.jstree", f.vakata.dnd.stop)
			},
			_scroll: function(e) {
				if (!p.scroll_e || !p.scroll_l && !p.scroll_t) return p.scroll_i && (clearInterval(p.scroll_i), p.scroll_i = !1), !1;
				if (!p.scroll_i) return p.scroll_i = setInterval(f.vakata.dnd._scroll, 100), !1;
				if (!0 === e) return !1;
				var t = p.scroll_e.scrollTop(),
					i = p.scroll_e.scrollLeft();
				p.scroll_e.scrollTop(t + p.scroll_t * f.vakata.dnd.settings.scroll_speed), p.scroll_e.scrollLeft(i + p.scroll_l * f.vakata.dnd.settings.scroll_speed), (t !== p.scroll_e.scrollTop() || i !== p.scroll_e.scrollLeft()) && f.vakata.dnd._trigger("scroll", p.scroll_e)
			},
			start: function(e, t, i) {
				"touchstart" === e.type && e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches[0] && (e.pageX = e.originalEvent.changedTouches[0].pageX, e.pageY = e.originalEvent.changedTouches[0].pageY, e.target = k.elementFromPoint(e.originalEvent.changedTouches[0].pageX - window.pageXOffset, e.originalEvent.changedTouches[0].pageY - window.pageYOffset)), p.is_drag && f.vakata.dnd.stop({});
				try {
					e.currentTarget.unselectable = "on", e.currentTarget.onselectstart = function() {
						return !1
					}, e.currentTarget.style && (e.currentTarget.style.touchAction = "none", e.currentTarget.style.msTouchAction = "none", e.currentTarget.style.MozUserSelect = "none")
				} catch (e) {}
				return p.init_x = e.pageX, p.init_y = e.pageY, p.data = t, p.is_down = !0, p.element = e.currentTarget, p.target = e.target, p.is_touch = "touchstart" === e.type, !1 !== i && (p.helper = f("<div id='vakata-dnd'></div>").html(i).css({
					display: "block",
					margin: "0",
					padding: "0",
					position: "absolute",
					top: "-2000px",
					lineHeight: "16px",
					zIndex: "10000"
				})), f(k).on("mousemove.vakata.jstree touchmove.vakata.jstree", f.vakata.dnd.drag), f(k).on("mouseup.vakata.jstree touchend.vakata.jstree", f.vakata.dnd.stop), !1
			},
			drag: function(i) {
				if ("touchmove" === i.type && i.originalEvent && i.originalEvent.changedTouches && i.originalEvent.changedTouches[0] && (i.pageX = i.originalEvent.changedTouches[0].pageX, i.pageY = i.originalEvent.changedTouches[0].pageY, i.target = k.elementFromPoint(i.originalEvent.changedTouches[0].pageX - window.pageXOffset, i.originalEvent.changedTouches[0].pageY - window.pageYOffset)), p.is_down) {
					if (!p.is_drag) {
						if (!(Math.abs(i.pageX - p.init_x) > (p.is_touch ? f.vakata.dnd.settings.threshold_touch : f.vakata.dnd.settings.threshold) || Math.abs(i.pageY - p.init_y) > (p.is_touch ? f.vakata.dnd.settings.threshold_touch : f.vakata.dnd.settings.threshold))) return;
						p.helper && (p.helper.appendTo(k.body), p.helper_w = p.helper.outerWidth()), p.is_drag = !0, f(p.target).one("click.vakata", !1), f.vakata.dnd._trigger("start", i)
					}
					var e = !1,
						t = !1,
						r = !1,
						s = !1,
						a = !1,
						n = !1,
						o = !1,
						d = !1,
						c = !1,
						l = !1;
					return p.scroll_t = 0, p.scroll_l = 0, p.scroll_e = !1, f(f(i.target).parentsUntil("body").addBack().get().reverse()).filter(function() {
						return /^auto|scroll$/.test(f(this).css("overflow")) && (this.scrollHeight > this.offsetHeight || this.scrollWidth > this.offsetWidth)
					}).each(function() {
						var e = f(this),
							t = e.offset();
						return this.scrollHeight > this.offsetHeight && (t.top + e.height() - i.pageY < f.vakata.dnd.settings.scroll_proximity && (p.scroll_t = 1), i.pageY - t.top < f.vakata.dnd.settings.scroll_proximity && (p.scroll_t = -1)), this.scrollWidth > this.offsetWidth && (t.left + e.width() - i.pageX < f.vakata.dnd.settings.scroll_proximity && (p.scroll_l = 1), i.pageX - t.left < f.vakata.dnd.settings.scroll_proximity && (p.scroll_l = -1)), p.scroll_t || p.scroll_l ? (p.scroll_e = f(this), !1) : void 0
					}), p.scroll_e || (e = f(k), t = f(window), r = e.height(), s = t.height(), a = e.width(), n = t.width(), o = e.scrollTop(), d = e.scrollLeft(), s < r && i.pageY - o < f.vakata.dnd.settings.scroll_proximity && (p.scroll_t = -1), s < r && s - (i.pageY - o) < f.vakata.dnd.settings.scroll_proximity && (p.scroll_t = 1), n < a && i.pageX - d < f.vakata.dnd.settings.scroll_proximity && (p.scroll_l = -1), n < a && n - (i.pageX - d) < f.vakata.dnd.settings.scroll_proximity && (p.scroll_l = 1), (p.scroll_t || p.scroll_l) && (p.scroll_e = e)), p.scroll_e && f.vakata.dnd._scroll(!0), p.helper && (c = parseInt(i.pageY + f.vakata.dnd.settings.helper_top, 10), l = parseInt(i.pageX + f.vakata.dnd.settings.helper_left, 10), r && r < c + 25 && (c = r - 50), a && l + p.helper_w > a && (l = a - (p.helper_w + 2)), p.helper.css({
						left: l + "px",
						top: c + "px"
					})), f.vakata.dnd._trigger("move", i), !1
				}
			},
			stop: function(e) {
				if ("touchend" === e.type && e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches[0] && (e.pageX = e.originalEvent.changedTouches[0].pageX, e.pageY = e.originalEvent.changedTouches[0].pageY, e.target = k.elementFromPoint(e.originalEvent.changedTouches[0].pageX - window.pageXOffset, e.originalEvent.changedTouches[0].pageY - window.pageYOffset)), p.is_drag) e.target !== p.target && f(p.target).off("click.vakata"), f.vakata.dnd._trigger("stop", e);
				else if ("touchend" === e.type && e.target === p.target) {
					var t = setTimeout(function() {
						f(e.target).trigger("click")
					}, 100);
					f(e.target).one("click", function() {
						t && clearTimeout(t)
					})
				}
				return f.vakata.dnd._clean(), !1
			}
		}, E.jstree.defaults.massload = null, E.jstree.plugins.massload = function(e, l) {
			this.init = function(e, t) {
				this._data.massload = {}, l.init.call(this, e, t)
			}, this._load_nodes = function(a, n, o, d) {
				var e, t, c, i = this.settings.massload,
					r = [],
					s = this._model.data;
				if (!o) {
					for (e = 0, t = a.length; e < t; e++)(!s[a[e]] || !s[a[e]].state.loaded && !s[a[e]].state.failed || d) && (r.push(a[e]), (c = this.get_node(a[e], !0)) && c.length && c.addClass("jstree-loading").attr("aria-busy", !0));
					if (this._data.massload = {}, r.length) {
						if (E.vakata.is_function(i)) return i.call(this, r, function(e) {
							var t, i;
							if (e)
								for (t in e) e.hasOwnProperty(t) && (this._data.massload[t] = e[t]);
							for (t = 0, i = a.length; t < i; t++)(c = this.get_node(a[t], !0)) && c.length && c.removeClass("jstree-loading").attr("aria-busy", !1);
							l._load_nodes.call(this, a, n, o, d)
						}.bind(this));
						if ("object" == typeof i && i && i.url) return i = E.extend(!0, {}, i), E.vakata.is_function(i.url) && (i.url = i.url.call(this, r)), E.vakata.is_function(i.data) && (i.data = i.data.call(this, r)), E.ajax(i).done(function(e, t, i) {
							var r, s;
							if (e)
								for (r in e) e.hasOwnProperty(r) && (this._data.massload[r] = e[r]);
							for (r = 0, s = a.length; r < s; r++)(c = this.get_node(a[r], !0)) && c.length && c.removeClass("jstree-loading").attr("aria-busy", !1);
							l._load_nodes.call(this, a, n, o, d)
						}.bind(this)).fail(function(e) {
							l._load_nodes.call(this, a, n, o, d)
						}.bind(this))
					}
				}
				return l._load_nodes.call(this, a, n, o, d)
			}, this._load_node = function(e, t) {
				var i, r = this._data.massload[e.id],
					s = null;
				return r ? (s = this["string" == typeof r ? "_append_html_data" : "_append_json_data"](e, "string" == typeof r ? E(E.parseHTML(r)).filter(function() {
					return 3 !== this.nodeType
				}) : r, function(e) {
					t.call(this, e)
				}), (i = this.get_node(e.id, !0)) && i.length && i.removeClass("jstree-loading").attr("aria-busy", !1), delete this._data.massload[e.id], s) : l._load_node.call(this, e, t)
			}
		}, E.jstree.defaults.search = {
			ajax: !1,
			fuzzy: !1,
			case_sensitive: !1,
			show_only_matches: !1,
			show_only_matches_children: !1,
			close_opened_onclear: !0,
			search_leaves_only: !1,
			search_callback: !1
		}, E.jstree.plugins.search = function(e, o) {
			this.bind = function() {
				o.bind.call(this), this._data.search.str = "", this._data.search.dom = E(), this._data.search.res = [], this._data.search.opn = [], this._data.search.som = !1, this._data.search.smc = !1, this._data.search.hdn = [], this.element.on("search.jstree", function(e, t) {
					if (this._data.search.som && t.res.length) {
						var i, r, s, a, n = this._model.data,
							o = [];
						for (i = 0, r = t.res.length; i < r; i++)
							if (n[t.res[i]] && !n[t.res[i]].state.hidden && (o.push(t.res[i]), o = o.concat(n[t.res[i]].parents), this._data.search.smc))
								for (s = 0, a = n[t.res[i]].children_d.length; s < a; s++) n[n[t.res[i]].children_d[s]] && !n[n[t.res[i]].children_d[s]].state.hidden && o.push(n[t.res[i]].children_d[s]);
						o = E.vakata.array_remove_item(E.vakata.array_unique(o), E.jstree.root), this._data.search.hdn = this.hide_all(!0), this.show_node(o, !0), this.redraw(!0)
					}
				}.bind(this)).on("clear_search.jstree", function(e, t) {
					this._data.search.som && t.res.length && (this.show_node(this._data.search.hdn, !0), this.redraw(!0))
				}.bind(this))
			}, this.search = function(r, e, t, i, s, a) {
				if (!1 === r || "" === E.vakata.trim(r.toString())) return this.clear_search();
				i = (i = this.get_node(i)) && i.id ? i.id : null, r = r.toString();
				var n, o, d = this.settings.search,
					c = !!d.ajax && d.ajax,
					l = this._model.data,
					h = null,
					_ = [],
					g = [];
				if (this._data.search.res.length && !s && this.clear_search(), t === P && (t = d.show_only_matches), a === P && (a = d.show_only_matches_children), !e && !1 !== c) return E.vakata.is_function(c) ? c.call(this, r, function(e) {
					e && e.d && (e = e.d), this._load_nodes(E.vakata.is_array(e) ? E.vakata.array_unique(e) : [], function() {
						this.search(r, !0, t, i, s, a)
					})
				}.bind(this), i) : ((c = E.extend({}, c)).data || (c.data = {}), c.data.str = r, i && (c.data.inside = i), this._data.search.lastRequest && this._data.search.lastRequest.abort(), this._data.search.lastRequest = E.ajax(c).fail(function() {
					this._data.core.last_error = {
						error: "ajax",
						plugin: "search",
						id: "search_01",
						reason: "Could not load search parents",
						data: JSON.stringify(c)
					}, this.settings.core.error.call(this, this._data.core.last_error)
				}.bind(this)).done(function(e) {
					e && e.d && (e = e.d), this._load_nodes(E.vakata.is_array(e) ? E.vakata.array_unique(e) : [], function() {
						this.search(r, !0, t, i, s, a)
					})
				}.bind(this)), this._data.search.lastRequest);
				if (s || (this._data.search.str = r, this._data.search.dom = E(), this._data.search.res = [], this._data.search.opn = [], this._data.search.som = t, this._data.search.smc = a), h = new E.vakata.search(r, !0, {
						caseSensitive: d.case_sensitive,
						fuzzy: d.fuzzy
					}), E.each(l[i || E.jstree.root].children_d, function(e, t) {
						var i = l[t];
						i.text && !i.state.hidden && (!d.search_leaves_only || i.state.loaded && 0 === i.children.length) && (d.search_callback && d.search_callback.call(this, r, i) || !d.search_callback && h.search(i.text).isMatch) && (_.push(t), g = g.concat(i.parents))
					}), _.length) {
					for (n = 0, o = (g = E.vakata.array_unique(g)).length; n < o; n++) g[n] !== E.jstree.root && l[g[n]] && !0 === this.open_node(g[n], null, 0) && this._data.search.opn.push(g[n]);
					s ? (this._data.search.dom = this._data.search.dom.add(E(this.element[0].querySelectorAll("#" + E.map(_, function(e) {
						return -1 !== "0123456789".indexOf(e[0]) ? "\\3" + e[0] + " " + e.substr(1).replace(E.jstree.idregex, "\\$&") : e.replace(E.jstree.idregex, "\\$&")
					}).join(", #")))), this._data.search.res = E.vakata.array_unique(this._data.search.res.concat(_))) : (this._data.search.dom = E(this.element[0].querySelectorAll("#" + E.map(_, function(e) {
						return -1 !== "0123456789".indexOf(e[0]) ? "\\3" + e[0] + " " + e.substr(1).replace(E.jstree.idregex, "\\$&") : e.replace(E.jstree.idregex, "\\$&")
					}).join(", #"))), this._data.search.res = _), this._data.search.dom.children(".jstree-anchor").addClass("jstree-search")
				}
				this.trigger("search", {
					nodes: this._data.search.dom,
					str: r,
					res: this._data.search.res,
					show_only_matches: t
				})
			}, this.clear_search = function() {
				this.settings.search.close_opened_onclear && this.close_node(this._data.search.opn, 0), this.trigger("clear_search", {
					nodes: this._data.search.dom,
					str: this._data.search.str,
					res: this._data.search.res
				}), this._data.search.res.length && (this._data.search.dom = E(this.element[0].querySelectorAll("#" + E.map(this._data.search.res, function(e) {
					return -1 !== "0123456789".indexOf(e[0]) ? "\\3" + e[0] + " " + e.substr(1).replace(E.jstree.idregex, "\\$&") : e.replace(E.jstree.idregex, "\\$&")
				}).join(", #"))), this._data.search.dom.children(".jstree-anchor").removeClass("jstree-search")), this._data.search.str = "", this._data.search.res = [], this._data.search.opn = [], this._data.search.dom = E()
			}, this.redraw_node = function(e, t, i, r) {
				if ((e = o.redraw_node.apply(this, arguments)) && -1 !== E.inArray(e.id, this._data.search.res)) {
					var s, a, n = null;
					for (s = 0, a = e.childNodes.length; s < a; s++)
						if (e.childNodes[s] && e.childNodes[s].className && -1 !== e.childNodes[s].className.indexOf("jstree-anchor")) {
							n = e.childNodes[s];
							break
						} n && (n.className += " jstree-search")
				}
				return e
			}
		}, (u = E).vakata.search = function(p, e, m) {
			m = m || {}, !1 !== (m = u.extend({}, u.vakata.search.defaults, m)).fuzzy && (m.fuzzy = !0), p = m.caseSensitive ? p : p.toLowerCase();
			var v, j, k, t, b = m.location,
				s = m.distance,
				y = m.threshold,
				x = p.length;
			return 32 < x && (m.fuzzy = !1), m.fuzzy && (v = 1 << x - 1, j = function() {
				var e = {},
					t = 0;
				for (t = 0; t < x; t++) e[p.charAt(t)] = 0;
				for (t = 0; t < x; t++) e[p.charAt(t)] |= 1 << x - t - 1;
				return e
			}(), k = function(e, t) {
				var i = e / x,
					r = Math.abs(b - t);
				return s ? i + r / s : r ? 1 : i
			}), t = function(e) {
				if (e = m.caseSensitive ? e : e.toLowerCase(), p === e || -1 !== e.indexOf(p)) return {
					isMatch: !0,
					score: 0
				};
				if (!m.fuzzy) return {
					isMatch: !1,
					score: 1
				};
				var t, i, r, s, a, n, o, d, c, l = e.length,
					h = y,
					_ = e.indexOf(p, b),
					g = x + l,
					u = 1,
					f = [];
				for (-1 !== _ && (h = Math.min(k(0, _), h), -1 !== (_ = e.lastIndexOf(p, b + x)) && (h = Math.min(k(0, _), h))), _ = -1, t = 0; t < x; t++) {
					for (r = 0, s = g; r < s;) k(t, b + s) <= h ? r = s : g = s, s = Math.floor((g - r) / 2 + r);
					for (g = s, n = Math.max(1, b - s + 1), o = Math.min(b + s, l) + x, (d = new Array(o + 2))[o + 1] = (1 << t) - 1, i = o; n <= i; i--)
						if (c = j[e.charAt(i - 1)], d[i] = 0 === t ? (d[i + 1] << 1 | 1) & c : (d[i + 1] << 1 | 1) & c | (a[i + 1] | a[i]) << 1 | 1 | a[i + 1], d[i] & v && (u = k(t, i - 1)) <= h) {
							if (h = u, _ = i - 1, f.push(_), !(b < _)) break;
							n = Math.max(1, 2 * b - _)
						} if (k(t + 1, b) > h) break;
					a = d
				}
				return {
					isMatch: 0 <= _,
					score: u
				}
			}, !0 === e ? {
				search: t
			} : t(e)
		}, u.vakata.search.defaults = {
			location: 0,
			distance: 100,
			threshold: .6,
			fuzzy: !1,
			caseSensitive: !1
		}, E.jstree.defaults.sort = function(e, t) {
			return this.get_text(e) > this.get_text(t) ? 1 : -1
		};
		var _ = !(E.jstree.plugins.sort = function(e, t) {
			this.bind = function() {
				t.bind.call(this), this.element.on("model.jstree", function(e, t) {
					this.sort(t.parent, !0)
				}.bind(this)).on("rename_node.jstree create_node.jstree", function(e, t) {
					this.sort(t.parent || t.node.parent, !1), this.redraw_node(t.parent || t.node.parent, !0)
				}.bind(this)).on("move_node.jstree copy_node.jstree", function(e, t) {
					this.sort(t.parent, !1), this.redraw_node(t.parent, !0)
				}.bind(this))
			}, this.sort = function(e, t) {
				var i, r;
				if ((e = this.get_node(e)) && e.children && e.children.length && (e.children.sort(this.settings.sort.bind(this)), t))
					for (i = 0, r = e.children_d.length; i < r; i++) this.sort(e.children_d[i], !1)
			}
		});
		E.jstree.defaults.state = {
			key: "jstree",
			events: "changed.jstree open_node.jstree close_node.jstree check_node.jstree uncheck_node.jstree",
			ttl: !1,
			filter: !1,
			preserve_loaded: !1
		}, E.jstree.plugins.state = function(e, t) {
			this.bind = function() {
				t.bind.call(this);
				var i = function() {
					this.element.on(this.settings.state.events, function() {
						_ && clearTimeout(_), _ = setTimeout(function() {
							this.save_state()
						}.bind(this), 100)
					}.bind(this)), this.trigger("state_ready")
				}.bind(this);
				this.element.on("ready.jstree", function(e, t) {
					this.element.one("restore_state.jstree", i), this.restore_state() || i()
				}.bind(this))
			}, this.save_state = function() {
				var e = this.get_state();
				this.settings.state.preserve_loaded || delete e.core.loaded;
				var t = {
					state: e,
					ttl: this.settings.state.ttl,
					sec: +new Date
				};
				E.vakata.storage.set(this.settings.state.key, JSON.stringify(t))
			}, this.restore_state = function() {
				var i = E.vakata.storage.get(this.settings.state.key);
				if (i) try {
					i = JSON.parse(i)
				} catch (e) {
					return !1
				}
				return !(i && i.ttl && i.sec && +new Date - i.sec > i.ttl) && (i && i.state && (i = i.state), i && E.vakata.is_function(this.settings.state.filter) && (i = this.settings.state.filter.call(this, i)), !!i && (this.settings.state.preserve_loaded || delete i.core.loaded, this.element.one("set_state.jstree", function(e, t) {
					t.instance.trigger("restore_state", {
						state: E.extend(!0, {}, i)
					})
				}), this.set_state(i), !0))
			}, this.clear_state = function() {
				return E.vakata.storage.del(this.settings.state.key)
			}
		}, E.vakata.storage = {
			set: function(e, t) {
				return window.localStorage.setItem(e, t)
			},
			get: function(e) {
				return window.localStorage.getItem(e)
			},
			del: function(e) {
				return window.localStorage.removeItem(e)
			}
		}, E.jstree.defaults.types = {
			default: {}
		}, E.jstree.defaults.types[E.jstree.root] = {}, E.jstree.plugins.types = function(e, l) {
			this.init = function(e, t) {
				var i, r;
				if (t && t.types && t.types.default)
					for (i in t.types)
						if ("default" !== i && i !== E.jstree.root && t.types.hasOwnProperty(i))
							for (r in t.types.default) t.types.default.hasOwnProperty(r) && t.types[i][r] === P && (t.types[i][r] = t.types.default[r]);
				l.init.call(this, e, t), this._model.data[E.jstree.root].type = E.jstree.root
			}, this.refresh = function(e, t) {
				l.refresh.call(this, e, t), this._model.data[E.jstree.root].type = E.jstree.root
			}, this.bind = function() {
				this.element.on("model.jstree", function(e, t) {
					var i, r, s, a = this._model.data,
						n = t.nodes,
						o = this.settings.types,
						d = "default";
					for (i = 0, r = n.length; i < r; i++) {
						if (d = "default", a[n[i]].original && a[n[i]].original.type && o[a[n[i]].original.type] && (d = a[n[i]].original.type), a[n[i]].data && a[n[i]].data.jstree && a[n[i]].data.jstree.type && o[a[n[i]].data.jstree.type] && (d = a[n[i]].data.jstree.type), a[n[i]].type = d, !0 === a[n[i]].icon && o[d].icon !== P && (a[n[i]].icon = o[d].icon), o[d].li_attr !== P && "object" == typeof o[d].li_attr)
							for (s in o[d].li_attr)
								if (o[d].li_attr.hasOwnProperty(s)) {
									if ("id" === s) continue;
									a[n[i]].li_attr[s] === P ? a[n[i]].li_attr[s] = o[d].li_attr[s] : "class" === s && (a[n[i]].li_attr.class = o[d].li_attr.class + " " + a[n[i]].li_attr.class)
								} if (o[d].a_attr !== P && "object" == typeof o[d].a_attr)
							for (s in o[d].a_attr)
								if (o[d].a_attr.hasOwnProperty(s)) {
									if ("id" === s) continue;
									a[n[i]].a_attr[s] === P ? a[n[i]].a_attr[s] = o[d].a_attr[s] : "href" === s && "#" === a[n[i]].a_attr[s] ? a[n[i]].a_attr.href = o[d].a_attr.href : "class" === s && (a[n[i]].a_attr.class = o[d].a_attr.class + " " + a[n[i]].a_attr.class)
								}
					}
					a[E.jstree.root].type = E.jstree.root
				}.bind(this)), l.bind.call(this)
			}, this.get_json = function(e, t, i) {
				var r, s, a = this._model.data,
					n = t ? E.extend(!0, {}, t, {
						no_id: !1
					}) : {},
					o = l.get_json.call(this, e, n, i);
				if (!1 === o) return !1;
				if (E.vakata.is_array(o))
					for (r = 0, s = o.length; r < s; r++) o[r].type = o[r].id && a[o[r].id] && a[o[r].id].type ? a[o[r].id].type : "default", t && t.no_id && (delete o[r].id, o[r].li_attr && o[r].li_attr.id && delete o[r].li_attr.id, o[r].a_attr && o[r].a_attr.id && delete o[r].a_attr.id);
				else o.type = o.id && a[o.id] && a[o.id].type ? a[o.id].type : "default", t && t.no_id && (o = this._delete_ids(o));
				return o
			}, this._delete_ids = function(e) {
				if (E.vakata.is_array(e)) {
					for (var t = 0, i = e.length; t < i; t++) e[t] = this._delete_ids(e[t]);
					return e
				}
				return delete e.id, e.li_attr && e.li_attr.id && delete e.li_attr.id, e.a_attr && e.a_attr.id && delete e.a_attr.id, e.children && E.vakata.is_array(e.children) && (e.children = this._delete_ids(e.children)), e
			}, this.check = function(e, t, i, r, s) {
				if (!1 === l.check.call(this, e, t, i, r, s)) return !1;
				t = t && t.id ? t : this.get_node(t), i = i && i.id ? i : this.get_node(i);
				var a, n, o, d, c = t && t.id ? s && s.origin ? s.origin : E.jstree.reference(t.id) : null;
				switch (c = c && c._model && c._model.data ? c._model.data : null, e) {
					case "create_node":
					case "move_node":
					case "copy_node":
						if ("move_node" !== e || -1 === E.inArray(t.id, i.children)) {
							if ((a = this.get_rules(i)).max_children !== P && -1 !== a.max_children && a.max_children === i.children.length) return !(this._data.core.last_error = {
								error: "check",
								plugin: "types",
								id: "types_01",
								reason: "max_children prevents function: " + e,
								data: JSON.stringify({
									chk: e,
									pos: r,
									obj: !(!t || !t.id) && t.id,
									par: !(!i || !i.id) && i.id
								})
							});
							if (a.valid_children !== P && -1 !== a.valid_children && -1 === E.inArray(t.type || "default", a.valid_children)) return !(this._data.core.last_error = {
								error: "check",
								plugin: "types",
								id: "types_02",
								reason: "valid_children prevents function: " + e,
								data: JSON.stringify({
									chk: e,
									pos: r,
									obj: !(!t || !t.id) && t.id,
									par: !(!i || !i.id) && i.id
								})
							});
							if (c && t.children_d && t.parents) {
								for (o = n = 0, d = t.children_d.length; o < d; o++) n = Math.max(n, c[t.children_d[o]].parents.length);
								n = n - t.parents.length + 1
							}(n <= 0 || n === P) && (n = 1);
							do {
								if (a.max_depth !== P && -1 !== a.max_depth && a.max_depth < n) return !(this._data.core.last_error = {
									error: "check",
									plugin: "types",
									id: "types_03",
									reason: "max_depth prevents function: " + e,
									data: JSON.stringify({
										chk: e,
										pos: r,
										obj: !(!t || !t.id) && t.id,
										par: !(!i || !i.id) && i.id
									})
								});
								i = this.get_node(i.parent), a = this.get_rules(i), n++
							} while (i)
						}
				}
				return !0
			}, this.get_rules = function(e) {
				if (!(e = this.get_node(e))) return !1;
				var t = this.get_type(e, !0);
				return t.max_depth === P && (t.max_depth = -1), t.max_children === P && (t.max_children = -1), t.valid_children === P && (t.valid_children = -1), t
			}, this.get_type = function(e, t) {
				return !!(e = this.get_node(e)) && (t ? E.extend({
					type: e.type
				}, this.settings.types[e.type]) : e.type)
			}, this.set_type = function(e, t) {
				var i, r, s, a, n, o, d, c, l = this._model.data;
				if (E.vakata.is_array(e)) {
					for (r = 0, s = (e = e.slice()).length; r < s; r++) this.set_type(e[r], t);
					return !0
				}
				if (i = this.settings.types, e = this.get_node(e), !i[t] || !e) return !1;
				if ((d = this.get_node(e, !0)) && d.length && (c = d.children(".jstree-anchor")), a = e.type, n = this.get_icon(e), e.type = t, (!0 === n || !i[a] || i[a].icon !== P && n === i[a].icon) && this.set_icon(e, i[t].icon === P || i[t].icon), i[a] && i[a].li_attr !== P && "object" == typeof i[a].li_attr)
					for (o in i[a].li_attr)
						if (i[a].li_attr.hasOwnProperty(o)) {
							if ("id" === o) continue;
							"class" === o ? (l[e.id].li_attr.class = (l[e.id].li_attr.class || "").replace(i[a].li_attr[o], ""), d && d.removeClass(i[a].li_attr[o])) : l[e.id].li_attr[o] === i[a].li_attr[o] && (l[e.id].li_attr[o] = null, d && d.removeAttr(o))
						} if (i[a] && i[a].a_attr !== P && "object" == typeof i[a].a_attr)
					for (o in i[a].a_attr)
						if (i[a].a_attr.hasOwnProperty(o)) {
							if ("id" === o) continue;
							"class" === o ? (l[e.id].a_attr.class = (l[e.id].a_attr.class || "").replace(i[a].a_attr[o], ""), c && c.removeClass(i[a].a_attr[o])) : l[e.id].a_attr[o] === i[a].a_attr[o] && ("href" === o ? (l[e.id].a_attr[o] = "#", c && c.attr("href", "#")) : (delete l[e.id].a_attr[o], c && c.removeAttr(o)))
						} if (i[t].li_attr !== P && "object" == typeof i[t].li_attr)
					for (o in i[t].li_attr)
						if (i[t].li_attr.hasOwnProperty(o)) {
							if ("id" === o) continue;
							l[e.id].li_attr[o] === P ? (l[e.id].li_attr[o] = i[t].li_attr[o], d && ("class" === o ? d.addClass(i[t].li_attr[o]) : d.attr(o, i[t].li_attr[o]))) : "class" === o && (l[e.id].li_attr.class = i[t].li_attr[o] + " " + l[e.id].li_attr.class, d && d.addClass(i[t].li_attr[o]))
						} if (i[t].a_attr !== P && "object" == typeof i[t].a_attr)
					for (o in i[t].a_attr)
						if (i[t].a_attr.hasOwnProperty(o)) {
							if ("id" === o) continue;
							l[e.id].a_attr[o] === P ? (l[e.id].a_attr[o] = i[t].a_attr[o], c && ("class" === o ? c.addClass(i[t].a_attr[o]) : c.attr(o, i[t].a_attr[o]))) : "href" === o && "#" === l[e.id].a_attr[o] ? (l[e.id].a_attr.href = i[t].a_attr.href, c && c.attr("href", i[t].a_attr.href)) : "class" === o && (l[e.id].a_attr.class = i[t].a_attr.class + " " + l[e.id].a_attr.class, c && c.addClass(i[t].a_attr[o]))
						} return !0
			}
		}, E.jstree.defaults.unique = {
			case_sensitive: !1,
			trim_whitespace: !1,
			duplicate: function(e, t) {
				return e + " (" + t + ")"
			}
		}, E.jstree.plugins.unique = function(e, f) {
			this.check = function(e, t, i, r, s) {
				if (!1 === f.check.call(this, e, t, i, r, s)) return !1;
				if (t = t && t.id ? t : this.get_node(t), !(i = i && i.id ? i : this.get_node(i)) || !i.children) return !0;
				var a, n, o, d = "rename_node" === e ? r : t.text,
					c = [],
					l = this.settings.unique.case_sensitive,
					h = this.settings.unique.trim_whitespace,
					_ = this._model.data;
				for (a = 0, n = i.children.length; a < n; a++) o = _[i.children[a]].text, l || (o = o.toLowerCase()), h && (o = o.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")), c.push(o);
				switch (l || (d = d.toLowerCase()), h && (d = d.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")), e) {
					case "delete_node":
						return !0;
					case "rename_node":
						return o = t.text || "", l || (o = o.toLowerCase()), h && (o = o.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")), (a = -1 === E.inArray(d, c) || t.text && o === d) || (this._data.core.last_error = {
							error: "check",
							plugin: "unique",
							id: "unique_01",
							reason: "Child with name " + d + " already exists. Preventing: " + e,
							data: JSON.stringify({
								chk: e,
								pos: r,
								obj: !(!t || !t.id) && t.id,
								par: !(!i || !i.id) && i.id
							})
						}), a;
					case "create_node":
						return (a = -1 === E.inArray(d, c)) || (this._data.core.last_error = {
							error: "check",
							plugin: "unique",
							id: "unique_04",
							reason: "Child with name " + d + " already exists. Preventing: " + e,
							data: JSON.stringify({
								chk: e,
								pos: r,
								obj: !(!t || !t.id) && t.id,
								par: !(!i || !i.id) && i.id
							})
						}), a;
					case "copy_node":
						return (a = -1 === E.inArray(d, c)) || (this._data.core.last_error = {
							error: "check",
							plugin: "unique",
							id: "unique_02",
							reason: "Child with name " + d + " already exists. Preventing: " + e,
							data: JSON.stringify({
								chk: e,
								pos: r,
								obj: !(!t || !t.id) && t.id,
								par: !(!i || !i.id) && i.id
							})
						}), a;
					case "move_node":
						return (a = t.parent === i.id && (!s || !s.is_multi) || -1 === E.inArray(d, c)) || (this._data.core.last_error = {
							error: "check",
							plugin: "unique",
							id: "unique_03",
							reason: "Child with name " + d + " already exists. Preventing: " + e,
							data: JSON.stringify({
								chk: e,
								pos: r,
								obj: !(!t || !t.id) && t.id,
								par: !(!i || !i.id) && i.id
							})
						}), a
				}
				return !0
			}, this.create_node = function(e, t, i, r, s) {
				if (!t || t.text === P) {
					if (null === e && (e = E.jstree.root), !(e = this.get_node(e))) return f.create_node.call(this, e, t, i, r, s);
					if (!(i = i === P ? "last" : i).toString().match(/^(before|after)$/) && !s && !this.is_loaded(e)) return f.create_node.call(this, e, t, i, r, s);
					t || (t = {});
					var a, n, o, d, c, l, h = this._model.data,
						_ = this.settings.unique.case_sensitive,
						g = this.settings.unique.trim_whitespace,
						u = this.settings.unique.duplicate;
					for (n = a = this.get_string("New node"), o = [], d = 0, c = e.children.length; d < c; d++) l = h[e.children[d]].text, _ || (l = l.toLowerCase()), g && (l = l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")), o.push(l);
					for (d = 1, l = n, _ || (l = l.toLowerCase()), g && (l = l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")); - 1 !== E.inArray(l, o);) l = n = u.call(this, a, ++d).toString(), _ || (l = l.toLowerCase()), g && (l = l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""));
					t.text = n
				}
				return f.create_node.call(this, e, t, i, r, s)
			}
		};
		var g = k.createElement("DIV");
		if (g.setAttribute("unselectable", "on"), g.setAttribute("role", "presentation"), g.className = "jstree-wholerow", g.innerHTML = "&#160;", E.jstree.plugins.wholerow = function(e, a) {
				this.bind = function() {
					a.bind.call(this), this.element.on("ready.jstree set_state.jstree", function() {
						this.hide_dots()
					}.bind(this)).on("init.jstree loading.jstree ready.jstree", function() {
						this.get_container_ul().addClass("jstree-wholerow-ul")
					}.bind(this)).on("deselect_all.jstree", function(e, t) {
						this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked")
					}.bind(this)).on("changed.jstree", function(e, t) {
						this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked");
						var i, r, s = !1;
						for (i = 0, r = t.selected.length; i < r; i++)(s = this.get_node(t.selected[i], !0)) && s.length && s.children(".jstree-wholerow").addClass("jstree-wholerow-clicked")
					}.bind(this)).on("open_node.jstree", function(e, t) {
						this.get_node(t.node, !0).find(".jstree-clicked").parent().children(".jstree-wholerow").addClass("jstree-wholerow-clicked")
					}.bind(this)).on("hover_node.jstree dehover_node.jstree", function(e, t) {
						"hover_node" === e.type && this.is_disabled(t.node) || this.get_node(t.node, !0).children(".jstree-wholerow")["hover_node" === e.type ? "addClass" : "removeClass"]("jstree-wholerow-hovered")
					}.bind(this)).on("contextmenu.jstree", ".jstree-wholerow", function(e) {
						if (this._data.contextmenu) {
							e.preventDefault();
							var t = E.Event("contextmenu", {
								metaKey: e.metaKey,
								ctrlKey: e.ctrlKey,
								altKey: e.altKey,
								shiftKey: e.shiftKey,
								pageX: e.pageX,
								pageY: e.pageY
							});
							E(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(t)
						}
					}.bind(this)).on("click.jstree", ".jstree-wholerow", function(e) {
						e.stopImmediatePropagation();
						var t = E.Event("click", {
							metaKey: e.metaKey,
							ctrlKey: e.ctrlKey,
							altKey: e.altKey,
							shiftKey: e.shiftKey
						});
						E(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(t).trigger("focus")
					}).on("dblclick.jstree", ".jstree-wholerow", function(e) {
						e.stopImmediatePropagation();
						var t = E.Event("dblclick", {
							metaKey: e.metaKey,
							ctrlKey: e.ctrlKey,
							altKey: e.altKey,
							shiftKey: e.shiftKey
						});
						E(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(t).trigger("focus")
					}).on("click.jstree", ".jstree-leaf > .jstree-ocl", function(e) {
						e.stopImmediatePropagation();
						var t = E.Event("click", {
							metaKey: e.metaKey,
							ctrlKey: e.ctrlKey,
							altKey: e.altKey,
							shiftKey: e.shiftKey
						});
						E(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(t).trigger("focus")
					}.bind(this)).on("mouseover.jstree", ".jstree-wholerow, .jstree-icon", function(e) {
						return e.stopImmediatePropagation(), this.is_disabled(e.currentTarget) || this.hover_node(e.currentTarget), !1
					}.bind(this)).on("mouseleave.jstree", ".jstree-node", function(e) {
						this.dehover_node(e.currentTarget)
					}.bind(this))
				}, this.teardown = function() {
					this.settings.wholerow && this.element.find(".jstree-wholerow").remove(), a.teardown.call(this)
				}, this.redraw_node = function(e, t, i, r) {
					if (e = a.redraw_node.apply(this, arguments)) {
						var s = g.cloneNode(!0); - 1 !== E.inArray(e.id, this._data.core.selected) && (s.className += " jstree-wholerow-clicked"), this._data.core.focused && this._data.core.focused === e.id && (s.className += " jstree-wholerow-hovered"), e.insertBefore(s, e.childNodes[0])
					}
					return e
				}
			}, window.customElements && Object && Object.create) {
			var t = Object.create(HTMLElement.prototype);
			t.createdCallback = function() {
				var e, t = {
					core: {},
					plugins: []
				};
				for (e in E.jstree.plugins) E.jstree.plugins.hasOwnProperty(e) && this.attributes[e] && (t.plugins.push(e), this.getAttribute(e) && JSON.parse(this.getAttribute(e)) && (t[e] = JSON.parse(this.getAttribute(e))));
				for (e in E.jstree.defaults.core) E.jstree.defaults.core.hasOwnProperty(e) && this.attributes[e] && (t.core[e] = JSON.parse(this.getAttribute(e)) || this.getAttribute(e));
				E(this).jstree(t)
			};
			try {
				window.customElements.define("vakata-jstree", function() {}, {
					prototype: t
				})
			} catch (e) {}
		}
	}
	var u, f, p, m, v, j
});
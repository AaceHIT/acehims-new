! function(p, c, g, n) {
	var i = "ontouchstart" in g,
		f = function() {
			var t = g.createElement("div"),
				e = g.documentElement;
			if (!("pointerEvents" in t.style)) return !1;
			t.style.pointerEvents = "auto", t.style.pointerEvents = "x", e.appendChild(t);
			var s = c.getComputedStyle && "auto" === c.getComputedStyle(t, "").pointerEvents;
			return e.removeChild(t), !!s
		}(),
		s = {
			listNodeName: "ol",
			itemNodeName: "li",
			rootClass: "dd",
			listClass: "dd-list",
			itemClass: "dd-item",
			dragClass: "dd-dragel",
			handleClass: "dd-handle",
			collapsedClass: "dd-collapsed",
			placeClass: "dd-placeholder",
			noDragClass: "dd-nodrag",
			emptyClass: "dd-empty",
			expandBtnHTML: '<button data-action="expand" type="button">Expand</button>',
			collapseBtnHTML: '<button data-action="collapse" type="button">Collapse</button>',
			group: 0,
			maxDepth: 5,
			threshold: 20
		};

	function a(t, e) {
		this.w = p(g), this.el = p(t), this.options = p.extend({}, s, e), this.init()
	}
	a.prototype = {
		init: function() {
			var a = this;
			a.reset(), a.el.data("nestable-group", this.options.group), a.placeEl = p('<div class="' + a.options.placeClass + '"/>'), p.each(this.el.find(a.options.itemNodeName), function(t, e) {
				a.setParent(p(e))
			}), a.el.on("click", "button", function(t) {
				if (!a.dragEl) {
					var e = p(t.currentTarget),
						s = e.data("action"),
						i = e.parent(a.options.itemNodeName);
					"collapse" === s && a.collapseItem(i), "expand" === s && a.expandItem(i)
				}
			});
			var t = function(t) {
					var e = p(t.target);
					if (!e.hasClass(a.options.handleClass)) {
						if (e.closest("." + a.options.noDragClass).length) return;
						e = e.closest("." + a.options.handleClass)
					}
					e.length && !a.dragEl && (a.isTouch = /^touch/.test(t.type), a.isTouch && 1 !== t.touches.length || (t.preventDefault(), a.dragStart(t.touches ? t.touches[0] : t)))
				},
				e = function(t) {
					a.dragEl && (t.preventDefault(), a.dragMove(t.touches ? t.touches[0] : t))
				},
				s = function(t) {
					a.dragEl && (t.preventDefault(), a.dragStop(t.touches ? t.touches[0] : t))
				};
			i && (a.el[0].addEventListener("touchstart", t, !1), c.addEventListener("touchmove", e, !1), c.addEventListener("touchend", s, !1), c.addEventListener("touchcancel", s, !1)), a.el.on("mousedown", t), a.w.on("mousemove", e), a.w.on("mouseup", s)
		},
		serialize: function() {
			var o = this;
			return step = function(t, i) {
				var a = [];
				return t.children(o.options.itemNodeName).each(function() {
					var t = p(this),
						e = p.extend({}, t.data()),
						s = t.children(o.options.listNodeName);
					s.length && (e.children = step(s, i + 1)), a.push(e)
				}), a
			}, step(o.el.find(o.options.listNodeName).first(), 0)
		},
		serialise: function() {
			return this.serialize()
		},
		reset: function() {
			this.mouse = {
				offsetX: 0,
				offsetY: 0,
				startX: 0,
				startY: 0,
				lastX: 0,
				lastY: 0,
				nowX: 0,
				nowY: 0,
				distX: 0,
				distY: 0,
				dirAx: 0,
				dirX: 0,
				dirY: 0,
				lastDirX: 0,
				lastDirY: 0,
				distAxX: 0,
				distAxY: 0
			}, this.isTouch = !1, this.moving = !1, this.dragEl = null, this.dragRootEl = null, this.dragDepth = 0, this.hasNewRoot = !1, this.pointEl = null
		},
		expandItem: function(t) {
			t.removeClass(this.options.collapsedClass), t.children('[data-action="expand"]').hide(), t.children('[data-action="collapse"]').show(), t.children(this.options.listNodeName).show()
		},
		collapseItem: function(t) {
			t.children(this.options.listNodeName).length && (t.addClass(this.options.collapsedClass), t.children('[data-action="collapse"]').hide(), t.children('[data-action="expand"]').show(), t.children(this.options.listNodeName).hide())
		},
		expandAll: function() {
			var t = this;
			t.el.find(t.options.itemNodeName).each(function() {
				t.expandItem(p(this))
			})
		},
		collapseAll: function() {
			var t = this;
			t.el.find(t.options.itemNodeName).each(function() {
				t.collapseItem(p(this))
			})
		},
		setParent: function(t) {
			t.children(this.options.listNodeName).length && (t.prepend(p(this.options.expandBtnHTML)), t.prepend(p(this.options.collapseBtnHTML))), t.children('[data-action="expand"]').hide()
		},
		unsetParent: function(t) {
			t.removeClass(this.options.collapsedClass), t.children("[data-action]").remove(), t.children(this.options.listNodeName).remove()
		},
		dragStart: function(t) {
			var e = this.mouse,
				s = p(t.target),
				i = s.closest(this.options.itemNodeName);
			this.placeEl.css("height", i.height()), e.offsetX = t.offsetX !== n ? t.offsetX : t.pageX - s.offset().left, e.offsetY = t.offsetY !== n ? t.offsetY : t.pageY - s.offset().top, e.startX = e.lastX = t.pageX, e.startY = e.lastY = t.pageY, this.dragRootEl = this.el, this.dragEl = p(g.createElement(this.options.listNodeName)).addClass(this.options.listClass + " " + this.options.dragClass), this.dragEl.css("width", i.width()), i.after(this.placeEl), i[0].parentNode.removeChild(i[0]), i.appendTo(this.dragEl), p(g.body).append(this.dragEl), this.dragEl.css({
				left: t.pageX - e.offsetX,
				top: t.pageY - e.offsetY
			});
			var a, o, l = this.dragEl.find(this.options.itemNodeName);
			for (a = 0; a < l.length; a++)(o = p(l[a]).parents(this.options.listNodeName).length) > this.dragDepth && (this.dragDepth = o)
		},
		dragStop: function(t) {
			var e = this.dragEl.children(this.options.itemNodeName).first();
			e[0].parentNode.removeChild(e[0]), this.placeEl.replaceWith(e), this.dragEl.remove(), this.el.trigger("change"), this.hasNewRoot && this.dragRootEl.trigger("change"), this.reset()
		},
		dragMove: function(t) {
			var e, s, i, a = this.options,
				o = this.mouse;
			this.dragEl.css({
				left: t.pageX - o.offsetX,
				top: t.pageY - o.offsetY
			}), o.lastX = o.nowX, o.lastY = o.nowY, o.nowX = t.pageX, o.nowY = t.pageY, o.distX = o.nowX - o.lastX, o.distY = o.nowY - o.lastY, o.lastDirX = o.dirX, o.lastDirY = o.dirY, o.dirX = 0 === o.distX ? 0 : 0 < o.distX ? 1 : -1, o.dirY = 0 === o.distY ? 0 : 0 < o.distY ? 1 : -1;
			var l = Math.abs(o.distX) > Math.abs(o.distY) ? 1 : 0;
			if (!o.moving) return o.dirAx = l, void(o.moving = !0);
			o.dirAx !== l ? (o.distAxX = 0, o.distAxY = 0) : (o.distAxX += Math.abs(o.distX), 0 !== o.dirX && o.dirX !== o.lastDirX && (o.distAxX = 0), o.distAxY += Math.abs(o.distY), 0 !== o.dirY && o.dirY !== o.lastDirY && (o.distAxY = 0)), o.dirAx = l, o.dirAx && o.distAxX >= a.threshold && (o.distAxX = 0, i = this.placeEl.prev(a.itemNodeName), 0 < o.distX && i.length && !i.hasClass(a.collapsedClass) && (e = i.find(a.listNodeName).last(), this.placeEl.parents(a.listNodeName).length + this.dragDepth <= a.maxDepth && (e.length ? (e = i.children(a.listNodeName).last()).append(this.placeEl) : ((e = p("<" + a.listNodeName + "/>").addClass(a.listClass)).append(this.placeEl), i.append(e), this.setParent(i)))), o.distX < 0 && (this.placeEl.next(a.itemNodeName).length || (s = this.placeEl.parent(), this.placeEl.closest(a.itemNodeName).after(this.placeEl), s.children().length || this.unsetParent(s.parent()))));
			var n = !1;
			if (f || (this.dragEl[0].style.visibility = "hidden"), this.pointEl = p(g.elementFromPoint(t.pageX - g.body.scrollLeft, t.pageY - (c.pageYOffset || g.documentElement.scrollTop))), f || (this.dragEl[0].style.visibility = "visible"), this.pointEl.hasClass(a.handleClass) && (this.pointEl = this.pointEl.parent(a.itemNodeName)), this.pointEl.hasClass(a.emptyClass)) n = !0;
			else if (!this.pointEl.length || !this.pointEl.hasClass(a.itemClass)) return;
			var d = this.pointEl.closest("." + a.rootClass),
				h = this.dragRootEl.data("nestable-id") !== d.data("nestable-id");
			if (!o.dirAx || h || n) {
				if (h && a.group !== d.data("nestable-group")) return;
				if (this.dragDepth - 1 + this.pointEl.parents(a.listNodeName).length > a.maxDepth) return;
				var r = t.pageY < this.pointEl.offset().top + this.pointEl.height() / 2;
				s = this.placeEl.parent(), n ? ((e = p(g.createElement(a.listNodeName)).addClass(a.listClass)).append(this.placeEl), this.pointEl.replaceWith(e)) : r ? this.pointEl.before(this.placeEl) : this.pointEl.after(this.placeEl), s.children().length || this.unsetParent(s.parent()), this.dragRootEl.find(a.itemNodeName).length || this.dragRootEl.append('<div class="' + a.emptyClass + '"/>'), h && (this.dragRootEl = d, this.hasNewRoot = this.el[0] !== this.dragRootEl[0])
			}
		}
	}, p.fn.nestable = function(e) {
		var s = this;
		return this.each(function() {
			var t = p(this).data("nestable");
			t ? "string" == typeof e && "function" == typeof t[e] && (s = t[e]()) : (p(this).data("nestable", new a(this, e)), p(this).data("nestable-id", (new Date).getTime()))
		}), s || this
	}
}(window.jQuery || window.Zepto, window, document);
("function" == typeof define && define.amd ? define : function(e, t) {
	"undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery)
})(["jquery"], function(D) {
	return function() {
		var h, t, v, C = 0,
			s = "error",
			o = "info",
			i = "success",
			a = "warning",
			e = {
				clear: function(e, t) {
					var n = O();
					h || w(n), r(e, n, t) || function(e) {
						for (var t = h.children(), n = t.length - 1; 0 <= n; n--) r(D(t[n]), e)
					}(n)
				},
				remove: function(e) {
					var t = O();
					h || w(t), e && 0 === D(":focus", e).length ? b(e) : h.children().length && h.remove()
				},
				error: function(e, t, n) {
					return l({
						type: s,
						iconClass: O().iconClasses.error,
						message: e,
						optionsOverride: n,
						title: t
					})
				},
				getContainer: w,
				info: function(e, t, n) {
					return l({
						type: o,
						iconClass: O().iconClasses.info,
						message: e,
						optionsOverride: n,
						title: t
					})
				},
				options: {},
				subscribe: function(e) {
					t = e
				},
				success: function(e, t, n) {
					return l({
						type: i,
						iconClass: O().iconClasses.success,
						message: e,
						optionsOverride: n,
						title: t
					})
				},
				version: "2.1.4",
				warning: function(e, t, n) {
					return l({
						type: a,
						iconClass: O().iconClasses.warning,
						message: e,
						optionsOverride: n,
						title: t
					})
				}
			};
		return e;

		function w(e, t) {
			return e || (e = O()), (h = D("#" + e.containerId)).length || t && (n = e, (h = D("<div/>").attr("id", n.containerId).addClass(n.positionClass)).appendTo(D(n.target)), h = h), h;
			var n
		}

		function r(e, t, n) {
			var s = !(!n || !n.force) && n.force;
			return !(!e || !s && 0 !== D(":focus", e).length || (e[t.hideMethod]({
				duration: t.hideDuration,
				easing: t.hideEasing,
				complete: function() {
					b(e)
				}
			}), 0))
		}

		function T(e) {
			t && t(e)
		}

		function l(t) {
			var o = O(),
				e = t.iconClass || o.iconClass;
			if (void 0 !== t.optionsOverride && (o = D.extend(o, t.optionsOverride), e = t.optionsOverride.iconClass || e), ! function(e, t) {
					if (e.preventDuplicates) {
						if (t.message === v) return !0;
						v = t.message
					}
					return !1
				}(o, t)) {
				C++, h = w(o, !0);
				var i = null,
					a = D("<div/>"),
					n = D("<div/>"),
					s = D("<div/>"),
					r = D("<div/>"),
					l = D(o.closeHtml),
					c = {
						intervalId: null,
						hideEta: null,
						maxHideTime: null
					},
					d = {
						toastId: C,
						state: "visible",
						startTime: new Date,
						options: o,
						map: t
					};
				return t.iconClass && a.addClass(o.toastClass).addClass(e),
					function() {
						if (t.title) {
							var e = t.title;
							o.escapeHtml && (e = u(t.title)), n.append(e).addClass(o.titleClass), a.append(n)
						}
					}(),
					function() {
						if (t.message) {
							var e = t.message;
							o.escapeHtml && (e = u(t.message)), s.append(e).addClass(o.messageClass), a.append(s)
						}
					}(), o.closeButton && (l.addClass(o.closeClass).attr("role", "button"), a.prepend(l)), o.progressBar && (r.addClass(o.progressClass), a.prepend(r)), o.rtl && a.addClass("rtl"), o.newestOnTop ? h.prepend(a) : h.append(a),
					function() {
						var e = "";
						switch (t.iconClass) {
							case "toast-success":
							case "toast-info":
								e = "polite";
								break;
							default:
								e = "assertive"
						}
						a.attr("aria-live", e)
					}(), a.hide(), a[o.showMethod]({
						duration: o.showDuration,
						easing: o.showEasing,
						complete: o.onShown
					}), 0 < o.timeOut && (i = setTimeout(p, o.timeOut), c.maxHideTime = parseFloat(o.timeOut), c.hideEta = (new Date).getTime() + c.maxHideTime, o.progressBar && (c.intervalId = setInterval(f, 10))), o.closeOnHover && a.hover(g, m), !o.onclick && o.tapToDismiss && a.click(p), o.closeButton && l && l.click(function(e) {
						e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && !0 !== e.cancelBubble && (e.cancelBubble = !0), o.onCloseClick && o.onCloseClick(e), p(!0)
					}), o.onclick && a.click(function(e) {
						o.onclick(e), p()
					}), T(d), o.debug && console && console.log(d), a
			}

			function u(e) {
				return null == e && (e = ""), e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
			}

			function p(e) {
				var t = e && !1 !== o.closeMethod ? o.closeMethod : o.hideMethod,
					n = e && !1 !== o.closeDuration ? o.closeDuration : o.hideDuration,
					s = e && !1 !== o.closeEasing ? o.closeEasing : o.hideEasing;
				if (!D(":focus", a).length || e) return clearTimeout(c.intervalId), a[t]({
					duration: n,
					easing: s,
					complete: function() {
						b(a), clearTimeout(i), o.onHidden && "hidden" !== d.state && o.onHidden(), d.state = "hidden", d.endTime = new Date, T(d)
					}
				})
			}

			function m() {
				(0 < o.timeOut || 0 < o.extendedTimeOut) && (i = setTimeout(p, o.extendedTimeOut), c.maxHideTime = parseFloat(o.extendedTimeOut), c.hideEta = (new Date).getTime() + c.maxHideTime)
			}

			function g() {
				clearTimeout(i), c.hideEta = 0, a.stop(!0, !0)[o.showMethod]({
					duration: o.showDuration,
					easing: o.showEasing
				})
			}

			function f() {
				var e = (c.hideEta - (new Date).getTime()) / c.maxHideTime * 100;
				r.width(e + "%")
			}
		}

		function O() {
			return D.extend({}, {
				tapToDismiss: !0,
				toastClass: "toast",
				containerId: "toast-container",
				debug: !1,
				showMethod: "fadeIn",
				showDuration: 300,
				showEasing: "swing",
				onShown: void 0,
				hideMethod: "fadeOut",
				hideDuration: 1e3,
				hideEasing: "swing",
				onHidden: void 0,
				closeMethod: !1,
				closeDuration: !1,
				closeEasing: !1,
				closeOnHover: !0,
				extendedTimeOut: 1e3,
				iconClasses: {
					error: "toast-error",
					info: "toast-info",
					success: "toast-success",
					warning: "toast-warning"
				},
				iconClass: "toast-info",
				positionClass: "toast-top-right",
				timeOut: 5e3,
				titleClass: "toast-title",
				messageClass: "toast-message",
				escapeHtml: !1,
				target: "body",
				closeHtml: '<button type="button">&times;</button>',
				closeClass: "toast-close-button",
				newestOnTop: !0,
				preventDuplicates: !1,
				progressBar: !1,
				progressClass: "toast-progress",
				rtl: !1
			}, e.options)
		}

		function b(e) {
			h || (h = w()), e.is(":visible") || (e.remove(), e = null, 0 === h.children().length && (h.remove(), v = void 0))
		}
	}()
});
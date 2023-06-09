$.fn.editableTableWidget = function(a) {
	"use strict";
	return $(this).each(function() {
		var n, e, t = $.extend(((e = $.extend({}, $.fn.editableTableWidget.defaultOptions)).editor = e.editor.clone(), e), a),
			i = $(this),
			o = t.editor.css("position", "absolute").hide().appendTo(i.parent()),
			r = function(e) {
				(n = i.find("td:focus")).length && (o.val(n.text()).removeClass("error").show().offset(n.offset()).css(n.css(t.cloneProperties)).width(n.width()).height(n.height()).focus(), e && o.select())
			},
			s = function() {
				var e, t = o.val(),
					i = $.Event("change");
				if (n.text() === t || o.hasClass("error")) return !0;
				e = n.html(), n.text(t).trigger(i, t), !1 === i.result && n.html(e)
			},
			d = function(e, t) {
				return 39 === t ? e.next("td") : 37 === t ? e.prev("td") : 38 === t ? e.parent().prev().children().eq(e.index()) : 40 === t ? e.parent().next().children().eq(e.index()) : []
			};
		o.blur(function() {
			s(), o.hide()
		}).keydown(function(e) {
			if (13 === e.which) s(), o.hide(), n.focus(), e.preventDefault(), e.stopPropagation();
			else if (27 === e.which) o.val(n.text()), e.preventDefault(), e.stopPropagation(), o.hide(), n.focus();
			else if (9 === e.which) n.focus();
			else if (this.selectionEnd - this.selectionStart === this.value.length) {
				var t = d(n, e.which);
				0 < t.length && (t.focus(), e.preventDefault(), e.stopPropagation())
			}
		}).on("input paste", function() {
			var e = $.Event("validate");
			n.trigger(e, o.val()), !1 === e.result ? o.addClass("error") : o.removeClass("error")
		}), i.on("click keypress dblclick", r).css("cursor", "pointer").keydown(function(e) {
			var t = !0,
				i = d($(e.target), e.which);
			0 < i.length ? i.focus() : 13 === e.which ? r(!1) : t = ((17 === e.which || 91 === e.which || 93 === e.which) && r(!0), !1), t && (e.stopPropagation(), e.preventDefault())
		}), i.find("td").prop("tabindex", 1), $(window).on("resize", function() {
			o.is(":visible") && o.offset(n.offset()).width(n.width()).height(n.height())
		})
	})
}, $.fn.editableTableWidget.defaultOptions = {
	cloneProperties: ["padding", "padding-top", "padding-bottom", "padding-left", "padding-right", "text-align", "font", "font-size", "font-family", "font-weight", "border", "border-top", "border-bottom", "border-left", "border-right"],
	editor: $("<input>")
};
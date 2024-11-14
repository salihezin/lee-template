// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {
    };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


/*----------------------------
    Nivo Slider JS
------------------------------*/
!function (i) {
    i.fn.nivoSlider = function (t) {
        return this.each(function (e, n) {
            var a = i(this);
            if (a.data("nivoslider")) return a.data("nivoslider");
            var o = new function (t, e) {
                var n = i.extend({}, i.fn.nivoSlider.defaults, e), a = {
                    currentSlide: 0,
                    currentImage: "",
                    totalSlides: 0,
                    running: !1,
                    paused: !1,
                    stop: !1,
                    controlNavEl: !1
                }, o = i(t);
                o.data("nivo:vars", a).addClass("nivoSlider");
                var r = o.children();
                r.each(function () {
                    var t = i(this), e = "";
                    t.is("img") || (t.is("a") && (t.addClass("nivo-imageLink"), e = t), t = t.find("img:first"));
                    var n = 0 === n ? t.attr("width") : t.width(), o = 0 === o ? t.attr("height") : t.height();
                    "" !== e && e.css("display", "none"), t.css("display", "none"), a.totalSlides++
                }), n.randomStart && (n.startSlide = Math.floor(Math.random() * a.totalSlides)), n.startSlide > 0 && (n.startSlide >= a.totalSlides && (n.startSlide = a.totalSlides - 1), a.currentSlide = n.startSlide), i(r[a.currentSlide]).is("img") ? a.currentImage = i(r[a.currentSlide]) : a.currentImage = i(r[a.currentSlide]).find("img:first"), i(r[a.currentSlide]).is("a") && i(r[a.currentSlide]).css("display", "block");
                var s = i("<img/>").addClass("nivo-main-image");
                s.attr("src", a.currentImage.attr("src")).show(), o.append(s), i(window).resize(function () {
                    o.children("img").width(o.width()), s.attr("src", a.currentImage.attr("src")), s.stop().height("auto"), i(".nivo-slice").remove(), i(".nivo-box").remove()
                }), o.append(i('<div class="nivo-caption"></div>'));
                var c = function (t) {
                    var e = i(".nivo-caption", o);
                    if ("" != a.currentImage.attr("title") && void 0 != a.currentImage.attr("title")) {
                        var n = a.currentImage.attr("title");
                        "#" == n.substr(0, 1) && (n = i(n).html()), "block" == e.css("display") ? setTimeout(function () {
                            e.html(n)
                        }, t.animSpeed) : (e.html(n), e.stop().fadeIn(t.animSpeed))
                    } else e.stop().fadeOut(t.animSpeed)
                };
                c(n);
                var l = 0;
                if (!n.manualAdvance && r.length > 1 && (l = setInterval(function () {
                    u(o, r, n, !1)
                }, n.pauseTime)), n.directionNav && (o.append('<div class="nivo-directionNav"><a class="nivo-prevNav">' + n.prevText + '</a><a class="nivo-nextNav">' + n.nextText + "</a></div>"), i(o).on("click", "a.nivo-prevNav", function () {
                    if (a.running) return !1;
                    clearInterval(l), l = "", a.currentSlide -= 2, u(o, r, n, "prev")
                }), i(o).on("click", "a.nivo-nextNav", function () {
                    if (a.running) return !1;
                    clearInterval(l), l = "", u(o, r, n, "next")
                })), n.controlNav) {
                    a.controlNavEl = i('<div class="nivo-controlNav"></div>'), o.after(a.controlNavEl);
                    for (var d = 0; d < r.length; d++) if (n.controlNavThumbs) {
                        a.controlNavEl.addClass("nivo-thumbs-enabled");
                        var v = r.eq(d);
                        v.is("img") || (v = v.find("img:first")), v.attr("data-thumb") && a.controlNavEl.append('<a class="nivo-control" rel="' + d + '"><img src="' + v.attr("data-thumb") + '" alt="" /></a>')
                    } else a.controlNavEl.append('<a class="nivo-control" rel="' + d + '">' + (d + 1) + "</a>");
                    i("a:eq(" + a.currentSlide + ")", a.controlNavEl).addClass("active"), i("a", a.controlNavEl).bind("click", function () {
                        return !a.running && !i(this).hasClass("active") && (clearInterval(l), l = "", s.attr("src", a.currentImage.attr("src")), a.currentSlide = i(this).attr("rel") - 1, void u(o, r, n, "control"))
                    })
                }
                n.pauseOnHover && o.hover(function () {
                    a.paused = !0, clearInterval(l), l = ""
                }, function () {
                    a.paused = !1, "" !== l || n.manualAdvance || (l = setInterval(function () {
                        u(o, r, n, !1)
                    }, n.pauseTime))
                }), o.bind("nivo:animFinished", function () {
                    s.attr("src", a.currentImage.attr("src")), a.running = !1, i(r).each(function () {
                        i(this).is("a") && i(this).css("display", "none")
                    }), i(r[a.currentSlide]).is("a") && i(r[a.currentSlide]).css("display", "block"), "" !== l || a.paused || n.manualAdvance || (l = setInterval(function () {
                        u(o, r, n, !1)
                    }, n.pauseTime)), n.afterChange.call(this)
                });
                var m = function (t, e, n) {
                    i(n.currentImage).parent().is("a") && i(n.currentImage).parent().css("display", "block"), i('img[src="' + n.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility", "hidden").show();
                    for (var a = i('img[src="' + n.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").parent().is("a") ? i('img[src="' + n.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").parent().height() : i('img[src="' + n.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").height(), o = 0; o < e.slices; o++) {
                        var r = Math.round(t.width() / e.slices);
                        o === e.slices - 1 ? t.append(i('<div class="nivo-slice" name="' + o + '"><img src="' + n.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block !important; top:0; left:-" + (r + o * r - r) + 'px;" /></div>').css({
                            left: r * o + "px",
                            width: t.width() - r * o + "px",
                            height: a + "px",
                            opacity: "0",
                            overflow: "hidden"
                        })) : t.append(i('<div class="nivo-slice" name="' + o + '"><img src="' + n.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block !important; top:0; left:-" + (r + o * r - r) + 'px;" /></div>').css({
                            left: r * o + "px",
                            width: r + "px",
                            height: a + "px",
                            opacity: "0",
                            overflow: "hidden"
                        }))
                    }
                    i(".nivo-slice", t).height(a), s.stop().animate({height: i(n.currentImage).height()}, e.animSpeed)
                }, h = function (t, e, n) {
                    i(n.currentImage).parent().is("a") && i(n.currentImage).parent().css("display", "block"), i('img[src="' + n.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility", "hidden").show();
                    for (var a = Math.round(t.width() / e.boxCols), o = Math.round(i('img[src="' + n.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").height() / e.boxRows), r = 0; r < e.boxRows; r++) for (var c = 0; c < e.boxCols; c++) c === e.boxCols - 1 ? (t.append(i('<div class="nivo-box" name="' + c + '" rel="' + r + '"><img src="' + n.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block; top:-" + o * r + "px; left:-" + a * c + 'px;" /></div>').css({
                        opacity: 0,
                        left: a * c + "px",
                        top: o * r + "px",
                        width: t.width() - a * c + "px"
                    })), i('.nivo-box[name="' + c + '"]', t).height(i('.nivo-box[name="' + c + '"] img', t).height() + "px")) : (t.append(i('<div class="nivo-box" name="' + c + '" rel="' + r + '"><img src="' + n.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block; top:-" + o * r + "px; left:-" + a * c + 'px;" /></div>').css({
                        opacity: 0,
                        left: a * c + "px",
                        top: o * r + "px",
                        width: a + "px"
                    })), i('.nivo-box[name="' + c + '"]', t).height(i('.nivo-box[name="' + c + '"] img', t).height() + "px"));
                    s.stop().animate({height: i(n.currentImage).height()}, e.animSpeed)
                }, u = function (t, e, n, a) {
                    var o = t.data("nivo:vars");
                    if (o && o.currentSlide === o.totalSlides - 1 && n.lastSlide.call(this), (!o || o.stop) && !a) return !1;
                    n.beforeChange.call(this), a ? ("prev" === a && s.attr("src", o.currentImage.attr("src")), "next" === a && s.attr("src", o.currentImage.attr("src"))) : s.attr("src", o.currentImage.attr("src")), o.currentSlide++, o.currentSlide === o.totalSlides && (o.currentSlide = 0, n.slideshowEnd.call(this)), o.currentSlide < 0 && (o.currentSlide = o.totalSlides - 1), i(e[o.currentSlide]).is("img") ? o.currentImage = i(e[o.currentSlide]) : o.currentImage = i(e[o.currentSlide]).find("img:first"), n.controlNav && (i("a", o.controlNavEl).removeClass("active"), i("a:eq(" + o.currentSlide + ")", o.controlNavEl).addClass("active")), c(n), i(".nivo-slice", t).remove(), i(".nivo-box", t).remove();
                    var r = n.effect, l = "";
                    "random" === n.effect && (l = new Array("sliceDownRight", "sliceDownLeft", "sliceUpRight", "sliceUpLeft", "sliceUpDown", "sliceUpDownLeft", "fold", "fade", "boxRandom", "boxRain", "boxRainReverse", "boxRainGrow", "boxRainGrowReverse"), void 0 === (r = l[Math.floor(Math.random() * (l.length + 1))]) && (r = "fade")), -1 !== n.effect.indexOf(",") && (l = n.effect.split(","), void 0 === (r = l[Math.floor(Math.random() * l.length)]) && (r = "fade")), o.currentImage.attr("data-transition") && (r = o.currentImage.attr("data-transition")), o.running = !0;
                    var d = 0, v = 0, u = "", f = "", g = "", x = "";
                    if ("sliceDown" === r || "sliceDownRight" === r || "sliceDownLeft" === r) m(t, n, o), d = 0, v = 0, u = i(".nivo-slice", t), "sliceDownLeft" === r && (u = i(".nivo-slice", t)._reverse()), u.each(function () {
                        var e = i(this);
                        e.css({top: "0px"}), v === n.slices - 1 ? setTimeout(function () {
                            e.animate({opacity: "1.0"}, n.animSpeed, "", function () {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + d) : setTimeout(function () {
                            e.animate({opacity: "1.0"}, n.animSpeed)
                        }, 100 + d), d += 50, v++
                    }); else if ("sliceUp" === r || "sliceUpRight" === r || "sliceUpLeft" === r) m(t, n, o), d = 0, v = 0, u = i(".nivo-slice", t), "sliceUpLeft" === r && (u = i(".nivo-slice", t)._reverse()), u.each(function () {
                        var e = i(this);
                        e.css({bottom: "0px"}), v === n.slices - 1 ? setTimeout(function () {
                            e.animate({opacity: "1.0"}, n.animSpeed, "", function () {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + d) : setTimeout(function () {
                            e.animate({opacity: "1.0"}, n.animSpeed)
                        }, 100 + d), d += 50, v++
                    }); else if ("sliceUpDown" === r || "sliceUpDownRight" === r || "sliceUpDownLeft" === r) {
                        m(t, n, o), d = 0, v = 0;
                        var w = 0;
                        u = i(".nivo-slice", t), "sliceUpDownLeft" === r && (u = i(".nivo-slice", t)._reverse()), u.each(function () {
                            var e = i(this);
                            0 === v ? (e.css("top", "0px"), v++) : (e.css("bottom", "0px"), v = 0), w === n.slices - 1 ? setTimeout(function () {
                                e.animate({opacity: "1.0"}, n.animSpeed, "", function () {
                                    t.trigger("nivo:animFinished")
                                })
                            }, 100 + d) : setTimeout(function () {
                                e.animate({opacity: "1.0"}, n.animSpeed)
                            }, 100 + d), d += 50, w++
                        })
                    } else if ("fold" === r) m(t, n, o), d = 0, v = 0, i(".nivo-slice", t).each(function () {
                        var e = i(this), a = e.width();
                        e.css({top: "0px", width: "0px"}), v === n.slices - 1 ? setTimeout(function () {
                            e.animate({width: a, opacity: "1.0"}, n.animSpeed, "", function () {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + d) : setTimeout(function () {
                            e.animate({width: a, opacity: "1.0"}, n.animSpeed)
                        }, 100 + d), d += 50, v++
                    }); else if ("fade" === r) m(t, n, o), (f = i(".nivo-slice:first", t)).css({width: t.width() + "px"}), f.animate({opacity: "1.0"}, 2 * n.animSpeed, "", function () {
                        t.trigger("nivo:animFinished")
                    }); else if ("slideInRight" === r) m(t, n, o), (f = i(".nivo-slice:first", t)).css({
                        width: "0px",
                        opacity: "1"
                    }), f.animate({width: t.width() + "px"}, 2 * n.animSpeed, "", function () {
                        t.trigger("nivo:animFinished")
                    }); else if ("slideInLeft" === r) m(t, n, o), (f = i(".nivo-slice:first", t)).css({
                        width: "0px",
                        opacity: "1",
                        left: "",
                        right: "0px"
                    }), f.animate({width: t.width() + "px"}, 2 * n.animSpeed, "", function () {
                        f.css({left: "0px", right: ""}), t.trigger("nivo:animFinished")
                    }); else if ("boxRandom" === r) h(t, n, o), g = n.boxCols * n.boxRows, v = 0, d = 0, (x = p(i(".nivo-box", t))).each(function () {
                        var e = i(this);
                        v === g - 1 ? setTimeout(function () {
                            e.animate({opacity: "1"}, n.animSpeed, "", function () {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + d) : setTimeout(function () {
                            e.animate({opacity: "1"}, n.animSpeed)
                        }, 100 + d), d += 20, v++
                    }); else if ("boxRain" === r || "boxRainReverse" === r || "boxRainGrow" === r || "boxRainGrowReverse" === r) {
                        h(t, n, o), g = n.boxCols * n.boxRows, v = 0, d = 0;
                        var S = 0, b = 0, I = [];
                        I[S] = [], x = i(".nivo-box", t), "boxRainReverse" !== r && "boxRainGrowReverse" !== r || (x = i(".nivo-box", t)._reverse()), x.each(function () {
                            I[S][b] = i(this), ++b === n.boxCols && (b = 0, I[++S] = [])
                        });
                        for (var y = 0; y < 2 * n.boxCols; y++) {
                            for (var R = y, N = 0; N < n.boxRows; N++) R >= 0 && R < n.boxCols && (function (e, a, o, s, c) {
                                var l = i(I[N][a]), d = l.width(), v = l.height();
                                "boxRainGrow" !== r && "boxRainGrowReverse" !== r || l.width(0).height(0), s === c - 1 ? setTimeout(function () {
                                    l.animate({opacity: "1", width: d, height: v}, n.animSpeed / 1.3, "", function () {
                                        t.trigger("nivo:animFinished")
                                    })
                                }, 100 + o) : setTimeout(function () {
                                    l.animate({opacity: "1", width: d, height: v}, n.animSpeed / 1.3)
                                }, 100 + o)
                            }(0, R, d, v, g), v++), R--;
                            d += 100
                        }
                    }
                }, p = function (i) {
                    for (var t, e, n = i.length; n; t = parseInt(Math.random() * n, 10), e = i[--n], i[n] = i[t], i[t] = e) ;
                    return i
                }, f = function (i) {
                    this.console && void 0 !== console.log && console.log(i)
                };
                return this.stop = function () {
                    i(t).data("nivo:vars").stop || (i(t).data("nivo:vars").stop = !0, f("Stop Slider"))
                }, this.start = function () {
                    i(t).data("nivo:vars").stop && (i(t).data("nivo:vars").stop = !1, f("Start Slider"))
                }, n.afterLoad.call(this), this
            }(this, t);
            a.data("nivoslider", o)
        })
    }, i.fn.nivoSlider.defaults = {
        effect: "random",
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 500,
        pauseTime: 3e3,
        startSlide: 0,
        directionNav: !0,
        controlNav: !0,
        controlNavThumbs: !1,
        pauseOnHover: !0,
        manualAdvance: !1,
        prevText: "Prev",
        nextText: "Next",
        randomStart: !1,
        beforeChange: function () {
        },
        afterChange: function () {
        },
        slideshowEnd: function () {
        },
        lastSlide: function () {
        },
        afterLoad: function () {
        }
    }, i.fn._reverse = [].reverse
}(jQuery);


/*----------------------------
    Menmenu JS
------------------------------*/
!function (e) {
    "use strict";
    e.fn.meanmenu = function (n) {
        var a = {
            meanMenuTarget: jQuery(this),
            meanMenuContainer: ".mobile-menu-area .container",
            meanMenuClose: "X",
            meanMenuCloseSize: "18px",
            meanMenuOpen: "<span /><span /><span />",
            meanRevealPosition: "right",
            meanRevealPositionDistance: "0",
            meanRevealColour: "",
            meanScreenWidth: "991",
            meanNavPush: "",
            meanShowChildren: !0,
            meanExpandableChildren: !0,
            meanExpand: "+",
            meanContract: "-",
            meanRemoveAttrs: !1,
            onePage: !1,
            meanDisplay: "block",
            removeElements: ""
        };
        n = e.extend(a, n);
        var t = window.innerWidth || document.documentElement.clientWidth;
        return this.each(function () {
            var e = n.meanMenuTarget, a = n.meanMenuContainer, r = n.meanMenuClose, i = n.meanMenuCloseSize,
                m = n.meanMenuOpen, s = n.meanRevealPosition, u = n.meanRevealPositionDistance, l = n.meanRevealColour,
                o = n.meanScreenWidth, c = n.meanNavPush, h = ".meanmenu-reveal", v = n.meanShowChildren,
                d = n.meanExpandableChildren, y = n.meanExpand, j = n.meanContract, Q = n.meanRemoveAttrs,
                f = n.onePage, g = n.meanDisplay, p = n.removeElements, C = !1;
            (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (C = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
            var w = "", x = function () {
                if ("center" === s) {
                    var e = (window.innerWidth || document.documentElement.clientWidth) / 2 - 22 + "px";
                    w = "left:" + e + ";right:auto;", C ? jQuery(".meanmenu-reveal").animate({left: e}) : jQuery(".meanmenu-reveal").css("left", e)
                }
            }, A = !1, E = !1;
            "right" === s && (w = "right:" + u + ";left:auto;"), "left" === s && (w = "left:" + u + ";right:auto;"), x();
            var M = "", P = function () {
                jQuery(".mean-bar,.mean-push").remove(), jQuery(a).removeClass("mean-container"), jQuery(e).css("display", g), A = !1, E = !1, jQuery(p).removeClass("mean-remove")
            }, W = function () {
                var n = "background:" + l + ";color:" + l + ";" + w;
                if (t <= o) {
                    jQuery(p).addClass("mean-remove"), E = !0, jQuery(a).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + n + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                    var s = jQuery(e).html();
                    jQuery(".mean-nav").html(s), Q && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function () {
                        jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id")
                    }), jQuery(e).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", c), jQuery(e).hide(), jQuery(".meanmenu-reveal").show(), jQuery(h).html(m), M = jQuery(h), jQuery(".mean-nav ul").hide(), v ? d ? (jQuery(".mean-nav ul ul").each(function () {
                        jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="fonts-size: ' + i + '">' + y + "</a>")
                    }), jQuery(".mean-expand").on("click", function (e) {
                        e.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).text(y), jQuery(this).prev("ul").slideUp(300, function () {
                        })) : (jQuery(this).text(j), jQuery(this).prev("ul").slideDown(300, function () {
                        })), jQuery(this).toggleClass("mean-clicked")
                    })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), M.removeClass("meanclose"), jQuery(M).click(function (e) {
                        e.preventDefault(), !1 === A ? (M.css("text-align", "center"), M.css("text-indent", "0"), M.css("font-size", i), jQuery(".mean-nav ul:first").slideDown(), A = !0) : (jQuery(".mean-nav ul:first").slideUp(), A = !1), M.toggleClass("meanclose"), jQuery(M).is(".meanmenu-reveal.meanclose") ? M.html(r) : M.html(m), jQuery(p).addClass("mean-remove")
                    }), f && jQuery(".mean-nav ul > li > a:first-child").on("click", function () {
                        jQuery(".mean-nav ul:first").slideUp(), A = !1, jQuery(M).toggleClass("meanclose").html(m)
                    })
                } else P()
            };
            C || jQuery(window).resize(function () {
                t = window.innerWidth || document.documentElement.clientWidth, P(), t <= o ? (W(), x()) : P()
            }), jQuery(window).resize(function () {
                t = window.innerWidth || document.documentElement.clientWidth, C ? (x(), t <= o ? !1 === E && W() : P()) : (P(), t <= o && (W(), x()))
            }), W()
        })
    }
}(jQuery);


/*----------------------------
    WOW JS
------------------------------*/
/*! WOW - v1.1.2 - 2015-08-19
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function () {
    var a, b, c, d, e, f = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, g = [].indexOf || function (a) {
        for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
        return -1
    };
    b = function () {
        function a() {
        }

        return a.prototype.extend = function (a, b) {
            var c, d;
            for (c in b) d = b[c], null == a[c] && (a[c] = d);
            return a
        }, a.prototype.isMobile = function (a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }, a.prototype.createEvent = function (a, b, c, d) {
            var e;
            return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
        }, a.prototype.emitEvent = function (a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }, a.prototype.addEvent = function (a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }, a.prototype.removeEvent = function (a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }, a.prototype.innerHeight = function () {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, a
    }(), c = this.WeakMap || this.MozWeakMap || (c = function () {
        function a() {
            this.keys = [], this.values = []
        }

        return a.prototype.get = function (a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d) if (c = f[b], c === a) return this.values[b]
        }, a.prototype.set = function (a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e) if (d = g[c], d === a) return void (this.values[c] = b);
            return this.keys.push(a), this.values.push(b)
        }, a
    }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }

        return a.notSupported = !0, a.prototype.observe = function () {
        }, a
    }()), d = this.getComputedStyle || function (a) {
        return this.getPropertyValue = function (b) {
            var c;
            return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function (a, b) {
                return b.toUpperCase()
            }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }, this
    }, e = /(\-([a-z]){1})/g, this.WOW = function () {
        function e(a) {
            null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }

        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, e.prototype.init = function () {
            var a;
            return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, e.prototype.start = function () {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function () {
                var a, c, d, e;
                for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                return e
            }.call(this), this.all = function () {
                var a, c, d, e;
                for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
                return e
            }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle(); else for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function (a) {
                return function (b) {
                    var c, d, e, f, g;
                    for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function () {
                        var a, b, c, d;
                        for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
                        return d
                    }.call(a));
                    return g
                }
            }(this)).observe(document.body, {childList: !0, subtree: !0}) : void 0
        }, e.prototype.stop = function () {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, e.prototype.sync = function () {
            return a.notSupported ? this.doSync(this.element) : void 0
        }, e.prototype.doSync = function (a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element), 1 === a.nodeType) {
                for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }, e.prototype.show = function (a) {
            return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
        }, e.prototype.applyStyle = function (a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function (f) {
                return function () {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }, e.prototype.animate = function () {
            return "requestAnimationFrame" in window ? function (a) {
                return window.requestAnimationFrame(a)
            } : function (a) {
                return a()
            }
        }(), e.prototype.resetStyle = function () {
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
            return e
        }, e.prototype.resetAnimation = function (a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }, e.prototype.customStyle = function (a, b, c, d, e) {
            return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {animationDuration: c}), d && this.vendorSet(a.style, {animationDelay: d}), e && this.vendorSet(a.style, {animationIterationCount: e}), this.vendorSet(a.style, {animationName: b ? "none" : this.cachedAnimationName(a)}), a
        }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function (a, b) {
            var c, d, e, f;
            d = [];
            for (c in b) e = b[c], a["" + c] = e, d.push(function () {
                var b, d, g, h;
                for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                return h
            }.call(this));
            return d
        }, e.prototype.vendorCSS = function (a, b) {
            var c, e, f, g, h, i;
            for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }, e.prototype.animationName = function (a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }, e.prototype.cacheAnimationName = function (a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }, e.prototype.cachedAnimationName = function (a) {
            return this.animationNameCache.get(a)
        }, e.prototype.scrollHandler = function () {
            return this.scrolled = !0
        }, e.prototype.scrollCallback = function () {
            var a;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, e.prototype.offsetTop = function (a) {
            for (var b; void 0 === a.offsetTop;) a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
            return b
        }, e.prototype.isVisible = function (a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
        }, e.prototype.util = function () {
            return null != this._util ? this._util : this._util = new b
        }, e.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, e
    }()
}).call(this);


/*----------------------------
    owl.carousel JS
------------------------------*/
!function (t, s, e, o) {
    var n = {
            items: 3,
            loop: !1,
            center: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            autoHeight: !1,
            startPosition: 0,
            URLhashListener: !1,
            nav: !1,
            navRewind: !0,
            navText: ["prev", "next"],
            slideBy: 1,
            dots: !0,
            dotsEach: !1,
            dotData: !1,
            lazyLoad: !1,
            lazyContent: !1,
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            autoplaySpeed: !1,
            navSpeed: !1,
            dotsSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: s,
            responsiveClass: !1,
            video: !1,
            videoHeight: !1,
            videoWidth: !1,
            animateOut: !1,
            animateIn: !1,
            fallbackEasing: "swing",
            callbacks: !1,
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            themeClass: "owl-theme",
            baseClass: "owl-carousel",
            itemClass: "owl-item",
            centerClass: "center",
            activeClass: "active",
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            controlsClass: "owl-controls",
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            autoHeightClass: "owl-height"
        }, a = {
            el: null,
            $el: null,
            stage: null,
            $stage: null,
            oStage: null,
            $oStage: null,
            $items: null,
            $oItems: null,
            $cItems: null,
            $cc: null,
            $navPrev: null,
            $navNext: null,
            $page: null,
            $nav: null,
            $content: null
        }, h = {el: 0, stage: 0, item: 0, prevWindow: 0, cloneLast: 0},
        r = {items: 0, oItems: 0, cItems: 0, active: 0, merged: [], nav: [], allPages: 0}, d = {
            start: 0,
            max: 0,
            maxValue: 0,
            prev: 0,
            current: 0,
            currentAbs: 0,
            currentPage: 0,
            stage: 0,
            items: [],
            lsCurrent: 0
        }, p = {
            start: 0,
            startX: 0,
            startY: 0,
            current: 0,
            currentX: 0,
            currentY: 0,
            offsetX: 0,
            offsetY: 0,
            distance: null,
            startTime: 0,
            endTime: 0,
            updatedX: 0,
            targetEl: null
        }, l = {onDragEnd: 300, nav: 300, css2speed: 0},
        m = {isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1, autoplay: !1, lazyContent: !1},
        u = {
            _onDragStart: null,
            _onDragMove: null,
            _onDragEnd: null,
            _transitionEnd: null,
            _resizer: null,
            _responsiveCall: null,
            _goToLoop: null,
            _checkVisibile: null,
            _autoplay: null,
            _pause: null,
            _play: null,
            _stop: null
        };

    function c(s, i) {
        s.owlCarousel = {
            name: "Owl Carousel",
            author: "Bartosz Wojciechowski",
            version: "2.0.0-beta.1.8",
            released: "03.05.2014"
        }, this.options = t.extend({}, n, i), this._options = t.extend({}, n, i), this.dom = t.extend({}, a), this.width = t.extend({}, h), this.num = t.extend({}, r), this.pos = t.extend({}, d), this.drag = t.extend({}, p), this.speed = t.extend({}, l), this.state = t.extend({}, m), this.e = t.extend({}, u), this.dom.el = s, this.dom.$el = t(s), this.init()
    }

    function g(t) {
        var s, i, o = e.createElement("div"), n = t;
        for (s in n) if (i = n[s], void 0 !== o.style[i]) return o = null, [i, s];
        return [!1]
    }

    c.prototype.init = function () {
        if (this.fireCallback("onInitBefore"), this.dom.$el.hasClass(this.options.baseClass) || this.dom.$el.addClass(this.options.baseClass), this.dom.$el.hasClass(this.options.themeClass) || this.dom.$el.addClass(this.options.themeClass), this.options.rtl && this.dom.$el.addClass("owl-rtl"), this.browserSupport(), this.sortOptions(), this.setResponsiveOptions(), this.options.autoWidth && !0 !== this.state.imagesLoaded) {
            var t = this.dom.$el.find("img");
            if (t.length) return this.preloadAutoWidthImages(t), !1
        }
        this.width.prevWindow = this.windowWidth(), this.createStage(), this.fetchContent(), this.eventsCall(), this.addCustomEvents(), this.internalEvents(), this.dom.$el.addClass("owl-loading"), this.refresh(!0), this.dom.$el.removeClass("owl-loading").addClass("owl-loaded"), this.fireCallback("onInitAfter")
    }, c.prototype.sortOptions = function () {
        var t = this.options.responsive;
        this.responsiveSorted = {};
        var s, i, e, o = [];
        for (s in t) o.push(s);
        for (o = o.sort(function (t, s) {
            return t - s
        }), i = 0; i < o.length; i++) e = o[i], this.responsiveSorted[e] = t[e]
    }, c.prototype.setResponsiveOptions = function () {
        if (!1 === this.options.responsive) return !1;
        var t, s, i, e, o = this.windowWidth();
        this.options.responsive;
        for (i in this._options) "responsive" !== i && (this.options[i] = this._options[i]);
        for (t in this.responsiveSorted) if (t <= o) {
            e = t;
            for (s in this.responsiveSorted[e]) this.options[s] = this.responsiveSorted[e][s]
        }
        this.num.breakpoint = e, this.options.responsiveClass && this.dom.$el.attr("class", function (t, s) {
            return s.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + e)
    }, c.prototype.optionsLogic = function () {
        this.dom.$el.toggleClass("owl-center", this.options.center), this.options.slideBy && "page" === this.options.slideBy ? this.options.slideBy = this.options.items : this.options.slideBy > this.options.items && (this.options.slideBy = this.options.items), this.options.loop && this.num.oItems < this.options.items && (this.options.loop = !1), this.num.oItems <= this.options.items && (this.options.navRewind = !1), this.options.autoWidth && (this.options.stagePadding = !1, this.options.dotsEach = 1, this.options.merge = !1), this.state.lazyContent && (this.options.loop = !1, this.options.merge = !1, this.options.dots = !1, this.options.freeDrag = !1, this.options.lazyContent = !0), (this.options.animateIn || this.options.animateOut) && 1 === this.options.items && this.support3d ? this.state.animate = !0 : this.state.animate = !1
    }, c.prototype.createStage = function () {
        var s = e.createElement("div"), i = e.createElement(this.options.stageElement);
        s.className = "owl-stage-outer", i.className = "owl-stage", s.appendChild(i), this.dom.el.appendChild(s), this.dom.oStage = s, this.dom.$oStage = t(s), this.dom.stage = i, this.dom.$stage = t(i), s = null, i = null
    }, c.prototype.createItem = function () {
        var t = e.createElement(this.options.itemElement);
        return t.className = this.options.itemClass, t
    }, c.prototype.fetchContent = function (s) {
        s ? this.dom.$content = s instanceof jQuery ? s : t(s) : this.options.nestedItemSelector ? this.dom.$content = this.dom.$el.find("." + this.options.nestedItemSelector).not(".owl-stage-outer") : this.dom.$content = this.dom.$el.children().not(".owl-stage-outer"), this.num.oItems = this.dom.$content.length, 0 !== this.num.oItems && this.initStructure()
    }, c.prototype.initStructure = function () {
        this.options.lazyContent && this.num.oItems >= 3 * this.options.items ? this.state.lazyContent = !0 : this.state.lazyContent = !1, this.state.lazyContent ? (this.pos.currentAbs = this.options.items, this.dom.$content.remove()) : this.createNormalStructure()
    }, c.prototype.createNormalStructure = function () {
        for (var t = 0; t < this.num.oItems; t++) {
            var s = this.fillItem(this.dom.$content, t);
            this.dom.$stage.append(s)
        }
        this.dom.$content = null
    }, c.prototype.createCustomStructure = function (s) {
        for (var i = 0; i < s; i++) {
            var e = this.createItem(), o = t(e);
            this.setData(o, !1), this.dom.$stage.append(o)
        }
    }, c.prototype.createLazyContentStructure = function (t) {
        return !!this.state.lazyContent && ((!t || this.dom.$stage.children().length !== 3 * this.options.items) && (this.dom.$stage.empty(), void this.createCustomStructure(3 * this.options.items)))
    }, c.prototype.fillItem = function (s, i) {
        var e = this.createItem(), o = s[i] || s, n = this.traversContent(o);
        return this.setData(e, !1, n), t(e).append(o)
    }, c.prototype.traversContent = function (s) {
        var i, e, o = t(s);
        return this.options.dotData && (i = o.find("[data-dot]").andSelf().data("dot")), this.options.URLhashListener && (e = o.find("[data-hash]").andSelf().data("hash")), {
            dot: i || !1,
            hash: e || !1
        }
    }, c.prototype.setData = function (s, i, e) {
        var o, n;
        e && (o = e.dot, n = e.hash);
        var a = {
            index: !1,
            indexAbs: !1,
            posLeft: !1,
            clone: !1,
            active: !1,
            loaded: !1,
            lazyLoad: !1,
            current: !1,
            width: !1,
            center: !1,
            page: !1,
            hasVideo: !1,
            playVideo: !1,
            dot: o,
            hash: n
        };
        i && (a = t.extend({}, a, i.data("owl-item"))), t(s).data("owl-item", a)
    }, c.prototype.updateLocalContent = function () {
        this.dom.$oItems = this.dom.$stage.find("." + this.options.itemClass).filter(function () {
            return !1 === t(this).data("owl-item").clone
        }), this.num.oItems = this.dom.$oItems.length;
        for (var s = 0; s < this.num.oItems; s++) {
            this.dom.$oItems.eq(s).data("owl-item").index = s
        }
    }, c.prototype.checkVideoLinks = function () {
        if (!this.options.video) return !1;
        for (var t, s, i = 0; i < this.num.items; i++) (s = this.dom.$items.eq(i)).data("owl-item").hasVideo || (t = s.find(".owl-video")).length && (this.state.hasVideos = !0, this.dom.$items.eq(i).data("owl-item").hasVideo = !0, t.css("display", "none"), this.getVideoInfo(t, s))
    }, c.prototype.getVideoInfo = function (t, s) {
        var i, e, o, n = t.data("vimeo-id"), a = t.data("youtube-id"), h = t.data("width") || this.options.videoWidth,
            r = t.data("height") || this.options.videoHeight, d = t.attr("href");
        if (n) e = "vimeo", o = n; else if (a) e = "youtube", o = a; else {
            if (!d) throw new Error("Missing video link.");
            (o = d.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1 ? e = "youtube" : o[3].indexOf("vimeo") > -1 && (e = "vimeo"), o = o[6]
        }
        s.data("owl-item").videoType = e, s.data("owl-item").videoId = o, s.data("owl-item").videoWidth = h, s.data("owl-item").videoHeight = r, i = {
            type: e,
            id: o
        };
        var p = h && r ? 'style="width:' + h + "px;height:" + r + 'px;"' : "";
        t.wrap('<div class="owl-video-wrapper"' + p + "></div>"), this.createVideoTn(t, i)
    }, c.prototype.createVideoTn = function (s, i) {
        var e, o, n = s.find("img"), a = "src", h = "", r = this;
        if (this.options.lazyLoad && (a = "data-src", h = "owl-lazy"), n.length) return d(n.attr(a)), n.remove(), !1;

        function d(t) {
            o = '<div class="owl-video-play-icon"></div>', e = r.options.lazyLoad ? '<div class="owl-video-tn ' + h + '" ' + a + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', s.after(e), s.after(o)
        }

        "youtube" === i.type ? d("http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg") : "vimeo" === i.type && t.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                d(t[0].thumbnail_large), r.options.loop && r.updateItemState()
            }
        })
    }, c.prototype.stopVideo = function () {
        this.fireCallback("onVideoStop");
        var t = this.dom.$items.eq(this.state.videoPlayIndex);
        t.find(".owl-video-frame").remove(), t.removeClass("owl-video-playing"), this.state.videoPlay = !1
    }, c.prototype.playVideo = function (s) {
        this.fireCallback("onVideoPlay"), this.state.videoPlay && this.stopVideo();
        var i, e, o = t(s.target || s.srcElement), n = o.closest("." + this.options.itemClass),
            a = n.data("owl-item").videoType, h = n.data("owl-item").videoId,
            r = n.data("owl-item").videoWidth || Math.floor(n.data("owl-item").width - this.options.margin),
            d = n.data("owl-item").videoHeight || this.dom.$stage.height();
        "youtube" === a ? i = '<iframe width="' + r + '" height="' + d + '" src="http://www.youtube.com/embed/' + h + "?autoplay=1&v=" + h + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === a && (i = '<iframe src="http://player.vimeo.com/video/' + h + '?autoplay=1" width="' + r + '" height="' + d + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), n.addClass("owl-video-playing"), this.state.videoPlay = !0, this.state.videoPlayIndex = n.data("owl-item").indexAbs, e = t('<div style="height:' + d + "px; width:" + r + 'px" class="owl-video-frame">' + i + "</div>"), o.after(e)
    }, c.prototype.loopClone = function () {
        if (!this.options.loop || this.state.lazyContent || this.num.oItems < this.options.items) return !1;
        var s, i, e, o = this.options.items, n = this.num.oItems - 1;
        for (this.options.stagePadding && 1 === this.options.items && (o += 1), this.num.cItems = 2 * o, e = 0; e < o; e++) {
            var a = this.dom.$oItems.eq(e).clone(!0, !0), h = this.dom.$oItems.eq(n - e).clone(!0, !0);
            s = t(a[0]).addClass("cloned"), i = t(h[0]).addClass("cloned"), this.setData(s[0], a), this.setData(i[0], h), s.data("owl-item").clone = !0, i.data("owl-item").clone = !0, this.dom.$stage.append(s), this.dom.$stage.prepend(i), s = i = null
        }
        this.dom.$cItems = this.dom.$stage.find("." + this.options.itemClass).filter(function () {
            return !0 === t(this).data("owl-item").clone
        })
    }, c.prototype.reClone = function () {
        null !== this.dom.$cItems && (this.dom.$cItems.remove(), this.dom.$cItems = null, this.num.cItems = 0), this.options.loop && this.loopClone()
    }, c.prototype.calculate = function () {
        var t, s, i, e = 0, o = 0;
        this.width.el = this.dom.$el.width() - 2 * this.options.stagePadding, this.width.view = this.dom.$el.width();
        var n = this.width.el - this.options.margin * (1 === this.options.items ? 0 : this.options.items - 1);
        for (this.width.el = this.width.el + this.options.margin, this.width.item = (n / this.options.items + this.options.margin).toFixed(3), this.dom.$items = this.dom.$stage.find(".owl-item"), this.num.items = this.dom.$items.length, this.options.autoWidth && this.dom.$items.css("width", ""), this.pos.items = [], this.num.merged = [], this.num.nav = [], i = this.options.rtl ? this.options.center ? -this.width.el / 2 : 0 : this.options.center ? this.width.el / 2 : 0, this.width.mergeStage = 0, t = 0; t < this.num.items; t++) {
            if (this.options.merge) {
                var a = this.dom.$items.eq(t).find("[data-merge]").attr("data-merge") || 1;
                this.options.mergeFit && a > this.options.items && (a = this.options.items), this.num.merged.push(parseInt(a)), this.width.mergeStage += this.width.item * this.num.merged[t]
            } else this.num.merged.push(1);
            this.options.loop ? t >= this.num.cItems / 2 && t < this.num.cItems / 2 + this.num.oItems && this.num.nav.push(this.num.merged[t]) : this.num.nav.push(this.num.merged[t]);
            var h = this.width.item * this.num.merged[t];
            this.options.autoWidth && (h = this.dom.$items.eq(t).width() + this.options.margin, this.options.rtl ? this.dom.$items[t].style.marginLeft = this.options.margin + "px" : this.dom.$items[t].style.marginRight = this.options.margin + "px"), this.pos.items.push(i), this.dom.$items.eq(t).data("owl-item").posLeft = e, this.dom.$items.eq(t).data("owl-item").width = h, this.options.rtl ? (i += h, e += h) : (i -= h, e -= h), o -= Math.abs(h), this.options.center && (this.pos.items[t] = this.options.rtl ? this.pos.items[t] + h / 2 : this.pos.items[t] - h / 2)
        }
        this.options.autoWidth ? this.width.stage = this.options.center ? Math.abs(o) : Math.abs(i) : this.width.stage = Math.abs(o);
        var r = this.num.oItems + this.num.cItems;
        for (s = 0; s < r; s++) this.dom.$items.eq(s).data("owl-item").indexAbs = s;
        this.setMinMax(), this.setSizes()
    }, c.prototype.setMinMax = function () {
        var t = this.dom.$oItems.eq(0).data("owl-item").indexAbs;
        if (this.pos.min = 0, this.pos.minValue = this.pos.items[t], this.options.loop || (this.pos.max = this.num.oItems - 1), this.options.loop && (this.pos.max = this.num.oItems + this.options.items), this.options.loop || this.options.center || (this.pos.max = this.num.oItems - this.options.items), this.options.loop && this.options.center && (this.pos.max = this.num.oItems + this.options.items), this.pos.maxValue = this.pos.items[this.pos.max], !this.options.loop && !this.options.center && this.options.autoWidth || this.options.merge && !this.options.center) {
            var s = this.options.rtl ? 1 : -1;
            for (i = 0; i < this.pos.items.length; i++) this.pos.items[i] * s < this.width.stage - this.width.el && (this.pos.max = i + 1);
            this.pos.maxValue = this.options.rtl ? this.width.stage - this.width.el : -(this.width.stage - this.width.el), this.pos.items[this.pos.max] = this.pos.maxValue
        }
        this.options.center ? this.pos.loop = this.pos.items[0] - this.pos.items[this.num.oItems] : this.pos.loop = -this.pos.items[this.num.oItems], this.num.oItems < this.options.items && !this.options.center && (this.pos.max = 0, this.pos.maxValue = this.pos.items[0])
    }, c.prototype.setSizes = function () {
        !1 !== this.options.stagePadding && (this.dom.oStage.style.paddingLeft = this.options.stagePadding + "px", this.dom.oStage.style.paddingRight = this.options.stagePadding + "px"), this.options.rtl ? s.setTimeout(function () {
            this.dom.stage.style.width = this.width.stage + "px"
        }.bind(this), 0) : this.dom.stage.style.width = this.width.stage + "px";
        for (var t = 0; t < this.num.items; t++) this.options.autoWidth || (this.dom.$items[t].style.width = this.width.item - this.options.margin + "px"), this.options.rtl ? this.dom.$items[t].style.marginLeft = this.options.margin + "px" : this.dom.$items[t].style.marginRight = this.options.margin + "px", 1 === this.num.merged[t] || this.options.autoWidth || (this.dom.$items[t].style.width = this.width.item * this.num.merged[t] - this.options.margin + "px");
        this.width.stagePrev = this.width.stage
    }, c.prototype.responsive = function () {
        if (!this.num.oItems) return !1;
        if (!this.isElWidthChanged()) return !1;
        var i = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;
        return i && t(i.parentNode).hasClass("owl-video-frame") && (this.setSpeed(0), this.state.isFullScreen = !0), !(i && this.state.isFullScreen && this.state.videoPlay) && (this.state.isFullScreen ? (this.state.isFullScreen = !1, !1) : this.state.videoPlay && this.state.orientation !== s.orientation ? (this.state.orientation = s.orientation, !1) : (this.fireCallback("onResponsiveBefore"), this.state.responsive = !0, this.refresh(), this.state.responsive = !1, void this.fireCallback("onResponsiveAfter")))
    }, c.prototype.refresh = function (t) {
        if (this.state.videoPlay && this.stopVideo(), this.setResponsiveOptions(), this.createLazyContentStructure(!0), this.updateLocalContent(), this.optionsLogic(), 0 === this.num.oItems) return null !== this.dom.$page && this.dom.$page.hide(), !1;
        this.dom.$stage.addClass("owl-refresh"), this.reClone(), this.calculate(), this.dom.$stage.removeClass("owl-refresh"), this.state.lazyContent && (this.pos.currentAbs = this.options.items), this.initPosition(t), this.state.lazyContent || t || this.jumpTo(this.pos.current, !1), this.checkVideoLinks(), this.updateItemState(), this.rebuildDots(), this.updateControls(), this.autoplay(), this.autoHeight(), this.state.orientation = s.orientation, this.watchVisibility()
    }, c.prototype.updateItemState = function (t) {
        this.state.lazyContent ? this.updateLazyContent(t) : this.updateActiveItems(), this.options.center && (this.dom.$items.eq(this.pos.currentAbs).addClass(this.options.centerClass).data("owl-item").center = !0), this.options.lazyLoad && this.lazyLoad()
    }, c.prototype.updateActiveItems = function () {
        var t, s, i, e, o, n, a;
        for (t = 0; t < this.num.items; t++) this.dom.$items.eq(t).data("owl-item").active = !1, this.dom.$items.eq(t).data("owl-item").current = !1, this.dom.$items.eq(t).removeClass(this.options.activeClass).removeClass(this.options.centerClass);
        for (this.num.active = 0, stageX = this.pos.stage, view = this.options.rtl ? this.width.view : -this.width.view, s = 0; s < this.num.items; s++) e = (i = this.dom.$items.eq(s)).data("owl-item").posLeft, o = i.data("owl-item").width, n = this.options.rtl ? e + o : e - o, (this.op(e, "<=", stageX) && this.op(e, ">", stageX + view) || this.op(n, "<", stageX) && this.op(n, ">", stageX + view)) && (this.num.active++, this.options.freeDrag && !a && (a = !0, this.pos.current = i.data("owl-item").index, this.pos.currentAbs = i.data("owl-item").indexAbs), i.data("owl-item").active = !0, i.data("owl-item").current = !0, i.addClass(this.options.activeClass), this.options.lazyLoad || (i.data("owl-item").loaded = !0), this.options.loop && (this.options.lazyLoad || this.options.center) && this.updateClonedItemsState(i.data("owl-item").index))
    }, c.prototype.updateClonedItemsState = function (t) {
        var s, i, e;
        for (this.options.center && (s = this.dom.$items.eq(this.pos.currentAbs).data("owl-item").index), e = 0; e < this.num.items; e++) (i = this.dom.$items.eq(e)).data("owl-item").index === t && (i.data("owl-item").current = !0, i.data("owl-item").index === s && i.addClass(this.options.centerClass))
    }, c.prototype.updateLazyPosition = function () {
        var t = this.pos.goToLazyContent || 0;
        this.pos.lcMovedBy = Math.abs(this.options.items - this.pos.currentAbs), this.options.items < this.pos.currentAbs ? (this.pos.lcCurrent += this.pos.currentAbs - this.options.items, this.state.lcDirection = "right") : this.options.items > this.pos.currentAbs && (this.pos.lcCurrent -= this.options.items - this.pos.currentAbs, this.state.lcDirection = "left"), this.pos.lcCurrent = 0 !== t ? t : this.pos.lcCurrent, this.pos.lcCurrent >= this.dom.$content.length ? this.pos.lcCurrent = this.pos.lcCurrent - this.dom.$content.length : this.pos.lcCurrent < 1 - this.dom.$content.length && (this.pos.lcCurrent = this.pos.lcCurrent + this.dom.$content.length), this.options.startPosition > 0 && (this.pos.lcCurrent = this.options.startPosition, this._options.startPosition = this.options.startPosition = 0), this.pos.lcCurrentAbs = this.pos.lcCurrent < 0 ? this.pos.lcCurrent + this.dom.$content.length : this.pos.lcCurrent
    }, c.prototype.updateLazyContent = function (t) {
        var s, i, e, n, a, h, r;
        if (this.pos.lcCurrent === o && (this.pos.lcCurrent = 0, this.pos.current = this.pos.currentAbs = this.options.items), t || this.updateLazyPosition(), !1 !== this.state.lcDirection) for (s = 0; s < this.pos.lcMovedBy; s++) "right" === this.state.lcDirection && (e = this.dom.$stage.find(".owl-item").eq(0)).appendTo(this.dom.$stage), "left" === this.state.lcDirection && (e = this.dom.$stage.find(".owl-item").eq(-1)).prependTo(this.dom.$stage), e.data("owl-item").active = !1;
        for (this.dom.$items = this.dom.$stage.find(".owl-item"), i = 0; i < this.num.items; i++) this.dom.$items.eq(i).removeClass(this.options.centerClass), (n = this.pos.lcCurrent + i - this.options.items) >= this.dom.$content.length && (n -= this.dom.$content.length), n < -this.dom.$content.length && (n += this.dom.$content.length), a = this.dom.$content.eq(n), !1 !== (r = (h = this.dom.$items.eq(i)).data("owl-item")).active && 0 === this.pos.goToLazyContent && !0 !== t || (h.empty(), h.append(a.clone(!0, !0)), r.active = !0, r.current = !0, this.options.lazyLoad ? r.loaded = !1 : r.loaded = !0);
        this.pos.goToLazyContent = 0, this.pos.current = this.pos.currentAbs = this.options.items, this.setSpeed(0), this.animStage(this.pos.items[this.options.items])
    }, c.prototype.eventsCall = function () {
        this.e._onDragStart = function (t) {
            this.onDragStart(t)
        }.bind(this), this.e._onDragMove = function (t) {
            this.onDragMove(t)
        }.bind(this), this.e._onDragEnd = function (t) {
            this.onDragEnd(t)
        }.bind(this), this.e._transitionEnd = function (t) {
            this.transitionEnd(t)
        }.bind(this), this.e._resizer = function () {
            this.responsiveTimer()
        }.bind(this), this.e._responsiveCall = function () {
            this.responsive()
        }.bind(this), this.e._preventClick = function (t) {
            this.preventClick(t)
        }.bind(this), this.e._goToHash = function () {
            this.goToHash()
        }.bind(this), this.e._goToPage = function (t) {
            this.goToPage(t)
        }.bind(this), this.e._ap = function () {
            this.autoplay()
        }.bind(this), this.e._play = function () {
            this.play()
        }.bind(this), this.e._pause = function () {
            this.pause()
        }.bind(this), this.e._playVideo = function (t) {
            this.playVideo(t)
        }.bind(this), this.e._navNext = function (s) {
            if (t(s.target).hasClass("disabled")) return !1;
            s.preventDefault(), this.next()
        }.bind(this), this.e._navPrev = function (s) {
            if (t(s.target).hasClass("disabled")) return !1;
            s.preventDefault(), this.prev()
        }.bind(this)
    }, c.prototype.responsiveTimer = function () {
        if (this.windowWidth() === this.width.prevWindow) return !1;
        s.clearInterval(this.e._autoplay), s.clearTimeout(this.resizeTimer), this.resizeTimer = s.setTimeout(this.e._responsiveCall, this.options.responsiveRefreshRate), this.width.prevWindow = this.windowWidth()
    }, c.prototype.internalEvents = function () {
        var t = "ontouchstart" in s || !!navigator.msMaxTouchPoints, i = s.navigator.msPointerEnabled;
        if (this.dragType = t && !i ? ["touchstart", "touchmove", "touchend", "touchcancel"] : t && i ? ["MSPointerDown", "MSPointerMove", "MSPointerUp", "MSPointerCancel"] : ["mousedown", "mousemove", "mouseup"], (t || i) && this.options.touchDrag ? this.on(e, this.dragType[3], this.e._onDragEnd) : (this.dom.$stage.on("dragstart", function () {
            return !1
        }), this.options.mouseDrag ? this.dom.stage.onselectstart = function () {
            return !1
        } : this.dom.$el.addClass("owl-text-select-on")), this.dom.$stage.on(this.dragType[2], ".owl-video-play-icon", this.e._playVideo), this.options.URLhashListener && this.on(s, "hashchange", this.e._goToHash, !1), this.options.autoplayHoverPause) {
            this.dom.$stage.on("mouseover", this.e._pause), this.dom.$stage.on("mouseleave", this.e._ap)
        }
        this.transitionEndVendor && this.on(this.dom.stage, this.transitionEndVendor, this.e._transitionEnd, !1), !1 !== this.options.responsive && this.on(s, "resize", this.e._resizer, !1), this.updateEvents()
    }, c.prototype.updateEvents = function () {
        !this.options.touchDrag || "touchstart" !== this.dragType[0] && "MSPointerDown" !== this.dragType[0] ? this.options.mouseDrag && "mousedown" === this.dragType[0] ? this.on(this.dom.stage, this.dragType[0], this.e._onDragStart, !1) : this.off(this.dom.stage, this.dragType[0], this.e._onDragStart) : this.on(this.dom.stage, this.dragType[0], this.e._onDragStart, !1)
    }, c.prototype.onDragStart = function (t) {
        var i = t.originalEvent || t || s.event;
        if (3 === i.which) return !1;
        "mousedown" === this.dragType[0] && this.dom.$stage.addClass("owl-grab"), this.fireCallback("onTouchStart"), this.drag.startTime = (new Date).getTime(), this.setSpeed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0;
        var o = "touchstart" === i.type, n = o ? t.targetTouches[0].pageX : i.pageX || i.clientX,
            a = o ? t.targetTouches[0].pageY : i.pageY || i.clientY;
        if (this.drag.offsetX = this.dom.$stage.position().left - this.options.stagePadding, this.drag.offsetY = this.dom.$stage.position().top, this.options.rtl && (this.drag.offsetX = this.dom.$stage.position().left + this.width.stage - this.width.el + this.options.margin), this.state.inMotion && this.support3d) {
            var h = this.getTransformProperty();
            this.drag.offsetX = h, this.animStage(h)
        } else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = n - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = n - this.drag.startX, this.drag.targetEl = i.target || i.srcElement, this.drag.updatedX = this.drag.start, this.on(e, this.dragType[1], this.e._onDragMove, !1), this.on(e, this.dragType[2], this.e._onDragEnd, !1)
    }, c.prototype.onDragMove = function (t) {
        if (this.state.isTouch && !this.state.isScrolling) {
            var i = t.originalEvent || t || s.event, e = "touchmove" == i.type,
                n = e ? i.targetTouches[0].pageX : i.pageX || i.clientX,
                a = e ? i.targetTouches[0].pageY : i.pageY || i.clientY;
            if (this.drag.currentX = n - this.drag.startX, this.drag.currentY = a - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.options.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.options.rtl ? "left" : "right"), this.options.loop) this.op(this.drag.currentX, ">", this.pos.minValue) && "right" === this.state.direction ? this.drag.currentX -= this.pos.loop : this.op(this.drag.currentX, "<", this.pos.maxValue) && "left" === this.state.direction && (this.drag.currentX += this.pos.loop); else {
                var h = this.options.rtl ? this.pos.maxValue : this.pos.minValue,
                    r = this.options.rtl ? this.pos.minValue : this.pos.maxValue,
                    d = this.options.pullDrag ? this.drag.distance / 5 : 0;
                this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + d), r + d)
            }
            (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== o ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && !1 === this.state.isSwiping && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animStage(this.drag.updatedX)
        }
    }, c.prototype.onDragEnd = function (t) {
        if (this.state.isTouch) {
            if ("mousedown" === this.dragType[0] && this.dom.$stage.removeClass("owl-grab"), this.fireCallback("onTouchEnd"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && !0 !== this.state.inMotion) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime();
            var s = this.drag.endTime - this.drag.startTime;
            (Math.abs(this.drag.distance) > 3 || s > 300) && this.removeClick(this.drag.targetEl);
            var i = this.closest(this.drag.updatedX);
            this.setSpeed(this.options.dragEndSpeed, !1, !0), this.animStage(this.pos.items[i]), this.options.pullDrag || this.drag.updatedX !== this.pos.items[i] || this.transitionEnd(), this.drag.distance = 0, this.off(e, this.dragType[1], this.e._onDragMove), this.off(e, this.dragType[2], this.e._onDragEnd)
        }
    }, c.prototype.removeClick = function (t) {
        this.drag.targetEl = t, this.on(t, "click", this.e._preventClick, !1)
    }, c.prototype.preventClick = function (t) {
        t.preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation && t.stopPropagation(), this.off(this.drag.targetEl, "click", this.e._preventClick, !1)
    }, c.prototype.getTransformProperty = function () {
        var t = s.getComputedStyle(this.dom.stage, null).getPropertyValue(this.vendorName + "transform");
        return !0 !== (16 === (t = t.replace(/matrix(3d)?\(|\)/g, "").split(",")).length) ? t[4] : t[12]
    }, c.prototype.closest = function (t) {
        var s = 0;
        if (!this.options.freeDrag) for (var i = 0; i < this.num.items; i++) t > this.pos.items[i] - 30 && t < this.pos.items[i] + 30 ? s = i : this.op(t, "<", this.pos.items[i]) && this.op(t, ">", this.pos.items[i + 1 || this.pos.items[i] - this.width.el]) && (s = "left" === this.state.direction ? i + 1 : i);
        return this.options.loop || (this.op(t, ">", this.pos.minValue) ? s = t = this.pos.min : this.op(t, "<", this.pos.maxValue) && (s = t = this.pos.max)), this.options.freeDrag ? (this.updateItemState(), t) : (this.pos.currentAbs = s, this.pos.current = this.dom.$items.eq(s).data("owl-item").index, s)
    }, c.prototype.animStage = function (t) {
        0 !== this.speed.current && this.pos.currentAbs !== this.pos.min && (this.fireCallback("onTransitionStart"), this.state.inMotion = !0);
        var s = this.pos.stage = t, i = this.dom.stage.style;
        this.support3d ? (translate = "translate3d(" + s + "px,0px, 0px)", i[this.transformVendor] = translate) : this.state.isTouch ? i.left = s + "px" : this.dom.$stage.animate({left: s}, this.speed.css2speed, this.options.fallbackEasing, function () {
            this.state.inMotion && this.transitionEnd()
        }.bind(this)), this.onChange()
    }, c.prototype.updatePosition = function (t) {
        if (0 === this.num.oItems) return !1;
        if (t === o) return !1;
        var s = t;
        if (this.pos.prev = this.pos.currentAbs, this.state.revert) return this.pos.current = this.dom.$items.eq(s).data("owl-item").index, void (this.pos.currentAbs = s);
        s = this.options.loop ? s >= this.num.oItems ? this.num.oItems - 1 : s : this.options.navRewind ? s > this.pos.max ? this.pos.min : s < 0 ? this.pos.max : s : s > this.pos.max ? this.pos.max : s <= 0 ? 0 : s, this.pos.current = this.dom.$oItems.eq(s).data("owl-item").index, this.pos.currentAbs = this.dom.$oItems.eq(s).data("owl-item").indexAbs
    }, c.prototype.setSpeed = function (t, s, i) {
        var e = t, n = s;
        if (!1 === e && 0 !== e && !0 !== i || e === o) {
            var a = Math.abs(n - this.pos.prev);
            (a = 0 === a ? 1 : a) > 6 && (a = 6), e = a * this.options.smartSpeed
        }
        if (!1 === e && !0 === i && (e = this.options.smartSpeed), 0 === e && (e = 0), this.support3d) {
            var h = this.dom.stage.style;
            h.webkitTransitionDuration = h.MsTransitionDuration = h.msTransitionDuration = h.MozTransitionDuration = h.OTransitionDuration = h.transitionDuration = e / 1e3 + "s"
        } else this.speed.css2speed = e;
        return this.speed.current = e, e
    }, c.prototype.jumpTo = function (t, s) {
        this.state.lazyContent && (this.pos.goToLazyContent = t), this.updatePosition(t), this.setSpeed(0), this.animStage(this.pos.items[this.pos.currentAbs]), !0 !== s && this.updateItemState()
    }, c.prototype.goTo = function (t, s) {
        if (this.state.lazyContent && this.state.inMotion) return !1;
        this.updatePosition(t), this.state.animate && (s = 0), this.setSpeed(s, this.pos.currentAbs), this.state.animate && this.animate(), this.animStage(this.pos.items[this.pos.currentAbs])
    }, c.prototype.next = function (t) {
        var s = t || this.options.navSpeed;
        this.options.loop && !this.state.lazyContent ? this.goToLoop(this.options.slideBy, s) : this.goTo(this.pos.current + this.options.slideBy, s)
    }, c.prototype.prev = function (t) {
        var s = t || this.options.navSpeed;
        this.options.loop && !this.state.lazyContent ? this.goToLoop(-this.options.slideBy, s) : this.goTo(this.pos.current - this.options.slideBy, s)
    }, c.prototype.goToLoop = function (t, i) {
        var e = this.pos.currentAbs, o = this.pos.currentAbs, n = this.pos.currentAbs + t, a = o - n < 0;
        this.state.revert = !0, n < 1 && !1 === a ? (this.state.bypass = !0, e = this.num.items - (this.options.items - o) - this.options.items, this.jumpTo(e, !0)) : n >= this.num.items - this.options.items && !0 === a && (this.state.bypass = !0, e = o - this.num.oItems, this.jumpTo(e, !0)), s.clearTimeout(this.e._goToLoop), this.e._goToLoop = s.setTimeout(function () {
            this.state.bypass = !1, this.goTo(e + t, i), this.state.revert = !1
        }.bind(this), 30)
    }, c.prototype.initPosition = function (t) {
        if (!this.dom.$oItems || !t || this.state.lazyContent) return !1;
        var s = this.options.startPosition;
        "URLHash" === this.options.startPosition ? s = this.options.startPosition = this.hashPosition() : typeof this.options.startPosition === Number || this.options.center || (this.options.startPosition = 0), this.dom.oStage.scrollLeft = 0, this.jumpTo(s, !0)
    }, c.prototype.goToHash = function () {
        var t = this.hashPosition();
        !1 === t && (t = 0), this.dom.oStage.scrollLeft = 0, this.goTo(t, this.options.navSpeed)
    }, c.prototype.hashPosition = function () {
        var t, i = s.location.hash.substring(1);
        if ("" === i) return !1;
        for (var e = 0; e < this.num.oItems; e++) i === this.dom.$oItems.eq(e).data("owl-item").hash && (t = e);
        return t
    }, c.prototype.autoplay = function () {
        this.options.autoplay && !this.state.videoPlay ? (s.clearInterval(this.e._autoplay), this.e._autoplay = s.setInterval(this.e._play, this.options.autoplayTimeout)) : (s.clearInterval(this.e._autoplay), this.state.autoplay = !1)
    }, c.prototype.play = function (t, i) {
        return !0 !== e.hidden && (this.options.autoplay || (this._options.autoplay = this.options.autoplay = !0, this._options.autoplayTimeout = this.options.autoplayTimeout = t || this.options.autoplayTimeout || 4e3, this._options.autoplaySpeed = i || this.options.autoplaySpeed), !1 === this.options.autoplay || this.state.isTouch || this.state.isScrolling || this.state.isSwiping || this.state.inMotion ? (s.clearInterval(this.e._autoplay), !1) : (!this.options.loop && this.pos.current >= this.pos.max ? (s.clearInterval(this.e._autoplay), this.goTo(0)) : this.next(this.options.autoplaySpeed), void (this.state.autoplay = !0)))
    }, c.prototype.stop = function () {
        this._options.autoplay = this.options.autoplay = !1, this.state.autoplay = !1, s.clearInterval(this.e._autoplay)
    }, c.prototype.pause = function () {
        s.clearInterval(this.e._autoplay)
    }, c.prototype.transitionEnd = function (t) {
        if (t !== o && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.dom.stage)) return !1;
        this.state.inMotion = !1, this.updateItemState(), this.autoplay(), this.fireCallback("onTransitionEnd")
    }, c.prototype.isElWidthChanged = function () {
        return this.dom.$el.width() - this.options.stagePadding !== this.width.el + this.options.margin
    }, c.prototype.windowWidth = function () {
        return this.options.responsiveBaseElement !== s ? this.width.window = t(this.options.responsiveBaseElement).width() : s.innerWidth ? this.width.window = s.innerWidth : e.documentElement && e.documentElement.clientWidth && (this.width.window = e.documentElement.clientWidth), this.width.window
    }, c.prototype.controls = function () {
        var s = e.createElement("div");
        s.className = this.options.controlsClass, this.dom.$el.append(s), this.dom.$cc = t(s)
    }, c.prototype.updateControls = function () {
        null === this.dom.$cc && (this.options.nav || this.options.dots) && this.controls(), null === this.dom.$nav && this.options.nav && this.createNavigation(this.dom.$cc[0]), null === this.dom.$page && this.options.dots && this.createDots(this.dom.$cc[0]), null !== this.dom.$nav && (this.options.nav ? (this.dom.$nav.show(), this.updateNavigation()) : this.dom.$nav.hide()), null !== this.dom.$page && (this.options.dots ? (this.dom.$page.show(), this.updateDots()) : this.dom.$page.hide())
    }, c.prototype.createNavigation = function (s) {
        var i = e.createElement("div");
        i.className = this.options.navContainerClass, s.appendChild(i);
        var o = e.createElement("div"), n = e.createElement("div");
        o.className = this.options.navClass[0], n.className = this.options.navClass[1], i.appendChild(o), i.appendChild(n), this.dom.$nav = t(i), this.dom.$navPrev = t(o).html(this.options.navText[0]), this.dom.$navNext = t(n).html(this.options.navText[1]), this.dom.$nav.on(this.dragType[2], "." + this.options.navClass[0], this.e._navPrev), this.dom.$nav.on(this.dragType[2], "." + this.options.navClass[1], this.e._navNext)
    }, c.prototype.createDots = function (s) {
        var i = e.createElement("div");
        i.className = this.options.dotsClass, s.appendChild(i), this.dom.$page = t(i);
        var o = this;
        this.dom.$page.on(this.dragType[2], "." + this.options.dotClass, function (s) {
            s.preventDefault();
            var i = t(this).data("page");
            o.goTo(i, o.options.dotsSpeed)
        }), this.rebuildDots()
    }, c.prototype.rebuildDots = function () {
        if (null === this.dom.$page) return !1;
        var s, i, o, n, a = 0, h = 0, r = 0, d = 0;
        for (s = this.options.dotsEach || this.options.items, (this.options.center || this.options.dotData) && (s = 1), this.dom.$page.html(""), n = 0; n < this.num.nav.length; n++) {
            if (a >= s || 0 === a) {
                (i = e.createElement("div")).className = this.options.dotClass, o = e.createElement("span"), i.appendChild(o);
                var p = t(i);
                this.options.dotData && p.html(this.dom.$oItems.eq(n).data("owl-item").dot), p.data("page", r), p.data("goToPage", d), this.dom.$page.append(i), a = 0, d++
            }
            this.dom.$oItems.eq(n).data("owl-item").page = d - 1, a += this.num.nav[n], r++
        }
        if (!this.options.loop && !this.options.center) for (var l = this.num.nav.length - 1; l >= 0 && (h += this.num.nav[l], this.dom.$oItems.eq(l).data("owl-item").page = d - 1, !(h >= s)); l--) ;
        this.num.allPages = d - 1
    }, c.prototype.updateDots = function () {
        for (var t = this.dom.$page.children(), s = this.dom.$oItems.eq(this.pos.current).data("owl-item").page, i = 0; i < t.length; i++) {
            t.eq(i).data("goToPage") === s ? (this.pos.currentPage = i, t.eq(i).addClass("active")) : t.eq(i).removeClass("active")
        }
    }, c.prototype.updateNavigation = function () {
        var t = this.options.nav;
        this.dom.$navNext.toggleClass("disabled", !t), this.dom.$navPrev.toggleClass("disabled", !t), this.options.loop || !t || this.options.navRewind || (this.pos.current <= 0 && this.dom.$navPrev.addClass("disabled"), this.pos.current >= this.pos.max && this.dom.$navNext.addClass("disabled"))
    }, c.prototype.insertContent = function (t) {
        this.dom.$stage.empty(), this.fetchContent(t), this.refresh()
    }, c.prototype.addItem = function (s, i) {
        if (i = i || 0, this.state.lazyContent) this.dom.$content = this.dom.$content.add(t(s)), this.updateItemState(!0); else {
            var e = this.fillItem(s);
            if (0 === this.dom.$oItems.length) this.dom.$stage.append(e); else {
                var o = this.dom.$oItems.eq(i);
                -1 !== i ? o.before(e) : o.after(e)
            }
            this.refresh()
        }
    }, c.prototype.removeItem = function (t) {
        this.state.lazyContent ? (this.dom.$content.splice(t, 1), this.updateItemState(!0)) : (this.dom.$oItems.eq(t).remove(), this.refresh())
    }, c.prototype.addCustomEvents = function () {
        this.e.next = function (t, s) {
            this.next(s)
        }.bind(this), this.e.prev = function (t, s) {
            this.prev(s)
        }.bind(this), this.e.goTo = function (t, s, i) {
            this.goTo(s, i)
        }.bind(this), this.e.jumpTo = function (t, s) {
            this.jumpTo(s)
        }.bind(this), this.e.addItem = function (t, s, i) {
            this.addItem(s, i)
        }.bind(this), this.e.removeItem = function (t, s) {
            this.removeItem(s)
        }.bind(this), this.e.refresh = function (t) {
            this.refresh()
        }.bind(this), this.e.destroy = function (t) {
            this.destroy()
        }.bind(this), this.e.autoHeight = function (t) {
            this.autoHeight(!0)
        }.bind(this), this.e.stop = function () {
            this.stop()
        }.bind(this), this.e.play = function (t, s, i) {
            this.play(s, i)
        }.bind(this), this.e.insertContent = function (t, s) {
            this.insertContent(s)
        }.bind(this), this.dom.$el.on("next.owl", this.e.next), this.dom.$el.on("prev.owl", this.e.prev), this.dom.$el.on("goTo.owl", this.e.goTo), this.dom.$el.on("jumpTo.owl", this.e.jumpTo), this.dom.$el.on("addItem.owl", this.e.addItem), this.dom.$el.on("removeItem.owl", this.e.removeItem), this.dom.$el.on("destroy.owl", this.e.destroy), this.dom.$el.on("refresh.owl", this.e.refresh), this.dom.$el.on("autoHeight.owl", this.e.autoHeight), this.dom.$el.on("play.owl", this.e.play), this.dom.$el.on("stop.owl", this.e.stop), this.dom.$el.on("stopVideo.owl", this.e.stop), this.dom.$el.on("insertContent.owl", this.e.insertContent)
    }, c.prototype.on = function (t, s, i, e) {
        t.addEventListener ? t.addEventListener(s, i, e) : t.attachEvent && t.attachEvent("on" + s, i)
    }, c.prototype.off = function (t, s, i, e) {
        t.removeEventListener ? t.removeEventListener(s, i, e) : t.detachEvent && t.detachEvent("on" + s, i)
    }, c.prototype.fireCallback = function (t, s) {
        if (this.options.callbacks) {
            if (this.dom.el.dispatchEvent) {
                var i = e.createEvent("CustomEvent");
                return i.initCustomEvent(t, !0, !0, s), this.dom.el.dispatchEvent(i)
            }
            return this.dom.el.dispatchEvent ? void 0 : this.dom.$el.trigger(t)
        }
    }, c.prototype.watchVisibility = function () {
        function t(t) {
            return t.offsetWidth > 0 && t.offsetHeight > 0
        }

        t(this.dom.el) || (this.dom.$el.addClass("owl-hidden"), s.clearInterval(this.e._checkVisibile), this.e._checkVisibile = s.setInterval(function () {
            t(this.dom.el) && (this.dom.$el.removeClass("owl-hidden"), this.refresh(), s.clearInterval(this.e._checkVisibile))
        }.bind(this), 500))
    }, c.prototype.onChange = function () {
        this.state.isTouch || this.state.bypass || this.state.responsive || ((this.options.nav || this.options.dots) && this.updateControls(), this.autoHeight(), this.fireCallback("onChangeState")), this.state.isTouch || this.state.bypass || (this.storeInfo(), this.state.videoPlay && this.stopVideo())
    }, c.prototype.storeInfo = function () {
        var t = this.state.lazyContent ? this.pos.lcCurrentAbs || 0 : this.pos.current,
            s = this.state.lazyContent ? this.dom.$content.length - 1 : this.num.oItems;
        this.info = {
            items: this.options.items,
            allItems: s,
            currentPosition: t,
            currentPage: this.pos.currentPage,
            allPages: this.num.allPages,
            autoplay: this.state.autoplay,
            windowWidth: this.width.window,
            elWidth: this.width.el,
            breakpoint: this.num.breakpoint
        }, "function" == typeof this.options.info && this.options.info.apply(this, [this.info, this.dom.el])
    }, c.prototype.autoHeight = function (t) {
        if (!0 !== this.options.autoHeight && !0 !== t) return !1;
        this.dom.$oStage.hasClass(this.options.autoHeightClass) || this.dom.$oStage.addClass(this.options.autoHeightClass);
        var i = this.dom.$items.eq(this.pos.currentAbs), e = this.dom.$oStage, o = 0, n = s.setInterval(function () {
            o += 1, i.data("owl-item").loaded ? (e.height(i.height() + "px"), clearInterval(n)) : 500 === o && clearInterval(n)
        }, 100)
    }, c.prototype.preloadAutoWidthImages = function (s) {
        var i = 0, e = this;
        s.each(function (o, n) {
            var a = t(n), h = new Image;
            h.onload = function () {
                i++, a.attr("src", h.src), a.css("opacity", 1), i >= s.length && (e.state.imagesLoaded = !0, e.init())
            }, h.src = a.attr("src") || a.attr("data-src") || a.attr("data-src-retina")
        })
    }, c.prototype.lazyLoad = function () {
        var t, i, e = s.devicePixelRatio > 1 ? "data-src-retina" : "data-src";
        for (i = 0; i < this.num.items; i++) {
            var o = this.dom.$items.eq(i);
            !0 === o.data("owl-item").current && !1 === o.data("owl-item").loaded && ((t = o.find(".owl-lazy")).attr(e) || t.attr("data-src")) && (t.css("opacity", "0"), this.preload(t, o))
        }
    }, c.prototype.preload = function (s, i) {
        var e = this;
        s.each(function (s, o) {
            var n = t(o), a = new Image;
            a.onload = function () {
                i.data("owl-item").loaded = !0, n.is("img") ? n.attr("src", a.src) : n.css("background-image", "url(" + a.src + ")"), n.css("opacity", 1), e.fireCallback("onLazyLoaded")
            }, a.src = n.attr("data-src") || n.attr("data-src-retina")
        })
    }, c.prototype.animate = function () {
        var s = this.dom.$items.eq(this.pos.prev), i = Math.abs(s.data("owl-item").width) * this.pos.prev,
            e = this.dom.$items.eq(this.pos.currentAbs), o = Math.abs(e.data("owl-item").width) * this.pos.currentAbs;
        if (this.pos.currentAbs === this.pos.prev) return !1;
        var n = o - i, a = this.options.animateIn, h = this.options.animateOut, r = this;
        removeStyles = function () {
            t(this).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(a).removeClass(h), r.transitionEnd()
        }, h && s.css({left: n + "px"}).addClass("animated owl-animated-out " + h).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", removeStyles), a && e.addClass("animated owl-animated-in " + a).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", removeStyles)
    }, c.prototype.destroy = function () {
        s.clearInterval(this.e._autoplay), this.dom.$el.hasClass(this.options.themeClass) && this.dom.$el.removeClass(this.options.themeClass), !1 !== this.options.responsive && this.off(s, "resize", this.e._resizer), this.transitionEndVendor && this.off(this.dom.stage, this.transitionEndVendor, this.e._transitionEnd), (this.options.mouseDrag || this.options.touchDrag) && (this.off(this.dom.stage, this.dragType[0], this.e._onDragStart), this.options.mouseDrag && this.off(e, this.dragType[3], this.e._onDragStart), this.options.mouseDrag && (this.dom.$stage.off("dragstart", function () {
            return !1
        }), this.dom.stage.onselectstart = function () {
        })), this.options.URLhashListener && this.off(s, "hashchange", this.e._goToHash), this.dom.$el.off("next.owl", this.e.next), this.dom.$el.off("prev.owl", this.e.prev), this.dom.$el.off("goTo.owl", this.e.goTo), this.dom.$el.off("jumpTo.owl", this.e.jumpTo), this.dom.$el.off("addItem.owl", this.e.addItem), this.dom.$el.off("removeItem.owl", this.e.removeItem), this.dom.$el.off("refresh.owl", this.e.refresh), this.dom.$el.off("autoHeight.owl", this.e.autoHeight), this.dom.$el.off("play.owl", this.e.play), this.dom.$el.off("stop.owl", this.e.stop), this.dom.$el.off("stopVideo.owl", this.e.stop), this.dom.$stage.off("click", this.e._playVideo), null !== this.dom.$cc && this.dom.$cc.remove(), null !== this.dom.$cItems && this.dom.$cItems.remove(), this.e = null, this.dom.$el.data("owlCarousel", null), delete this.dom.el.owlCarousel, this.dom.$stage.unwrap(), this.dom.$items.unwrap(), this.dom.$items.contents().unwrap(), this.dom = null
    }, c.prototype.op = function (t, s, i) {
        var e = this.options.rtl;
        switch (s) {
            case"<":
                return e ? t > i : t < i;
            case">":
                return e ? t < i : t > i;
            case">=":
                return e ? t <= i : t >= i;
            case"<=":
                return e ? t >= i : t <= i
        }
    }, c.prototype.browserSupport = function () {
        if (this.support3d = g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0], this.support3d) {
            this.transformVendor = g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0];
            this.transitionEndVendor = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"][g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = s.orientation
    }, t.fn.owlCarousel = function (s) {
        return this.each(function () {
            t(this).data("owlCarousel") || t(this).data("owlCarousel", new c(this, s))
        })
    }
}(window.Zepto || window.jQuery, window, document), Function.prototype.bind || (Function.prototype.bind = function (t) {
    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var s = Array.prototype.slice.call(arguments, 1), i = this, e = function () {
    }, o = function () {
        return i.apply(this instanceof e && t ? this : t, s.concat(Array.prototype.slice.call(arguments)))
    };
    return e.prototype = this.prototype, o.prototype = new e, o
});


/*----------------------------
    scrollup JS
------------------------------*/
/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear â€” @markgdyr â€” http://markgoodyear.com
 * License: MIT
 */
!function (l, o, e) {
    "use strict";
    l.fn.scrollUp = function (o) {
        l.data(e.body, "scrollUp") || (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o))
    }, l.fn.scrollUp.init = function (r) {
        var s, t, c, i, n, a, d, p = l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r), f = !1;
        switch (d = p.scrollTrigger ? l(p.scrollTrigger) : l("<a/>", {
            id: p.scrollName,
            href: "#top"
        }), p.scrollTitle && d.attr("title", p.scrollTitle), d.appendTo("body"), p.scrollImg || p.scrollTrigger || d.html(p.scrollText), d.css({
            display: "none",
            position: "fixed",
            zIndex: p.zIndex
        }), p.activeOverlay && l("<div/>", {id: p.scrollName + "-active"}).css({
            position: "absolute",
            top: p.scrollDistance + "px",
            width: "100%",
            borderTop: "1px dotted" + p.activeOverlay,
            zIndex: p.zIndex
        }).appendTo("body"), p.animation) {
            case"fade":
                s = "fadeIn", t = "fadeOut", c = p.animationSpeed;
                break;
            case"slide":
                s = "slideDown", t = "slideUp", c = p.animationSpeed;
                break;
            default:
                s = "show", t = "hide", c = 0
        }
        i = "top" === p.scrollFrom ? p.scrollDistance : l(e).height() - l(o).height() - p.scrollDistance, n = l(o).scroll(function () {
            l(o).scrollTop() > i ? f || (d[s](c), f = !0) : f && (d[t](c), f = !1)
        }), p.scrollTarget ? "number" == typeof p.scrollTarget ? a = p.scrollTarget : "string" == typeof p.scrollTarget && (a = Math.floor(l(p.scrollTarget).offset().top)) : a = 0, d.click(function (o) {
            o.preventDefault(), l("html, body").animate({scrollTop: a}, p.scrollSpeed, p.easingType)
        })
    }, l.fn.scrollUp.defaults = {
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "linear",
        animation: "fade",
        animationSpeed: 200,
        scrollTrigger: !1,
        scrollTarget: !1,
        scrollText: "Scroll to top",
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
    }, l.fn.scrollUp.destroy = function (r) {
        l.removeData(e.body, "scrollUp"), l("#" + l.fn.scrollUp.settings.scrollName).remove(), l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(), l.fn.jquery.split(".")[1] >= 7 ? l(o).off("scroll", r) : l(o).unbind("scroll", r)
    }, l.scrollUp = l.fn.scrollUp
}(jQuery, window, document);


/*----------------------------
    Waypoints JS
------------------------------*/
// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function () {
    var t = [].indexOf || function (t) {
        for (var e = 0, n = this.length; e < n; e++) {
            if (e in this && this[e] === t) return e
        }
        return -1
    }, e = [].slice;
    (function (t, e) {
        if (typeof define === "function" && define.amd) {
            return define("waypoints", ["jquery"], function (n) {
                return e(n, t)
            })
        } else {
            return e(t.jQuery, t)
        }
    })(this, function (n, r) {
        var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
        i = n(r);
        c = t.call(r, "ontouchstart") >= 0;
        s = {horizontal: {}, vertical: {}};
        f = 1;
        a = {};
        u = "waypoints-context-id";
        p = "resize.waypoints";
        y = "scroll.waypoints";
        v = 1;
        w = "waypoints-waypoint-ids";
        g = "waypoint";
        m = "waypoints";
        o = function () {
            function t(t) {
                var e = this;
                this.$element = t;
                this.element = t[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + f++;
                this.oldScroll = {x: t.scrollLeft(), y: t.scrollTop()};
                this.waypoints = {horizontal: {}, vertical: {}};
                t.data(u, this.id);
                a[this.id] = this;
                t.bind(y, function () {
                    var t;
                    if (!(e.didScroll || c)) {
                        e.didScroll = true;
                        t = function () {
                            e.doScroll();
                            return e.didScroll = false
                        };
                        return r.setTimeout(t, n[m].settings.scrollThrottle)
                    }
                });
                t.bind(p, function () {
                    var t;
                    if (!e.didResize) {
                        e.didResize = true;
                        t = function () {
                            n[m]("refresh");
                            return e.didResize = false
                        };
                        return r.setTimeout(t, n[m].settings.resizeThrottle)
                    }
                })
            }

            t.prototype.doScroll = function () {
                var t, e = this;
                t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
                if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
                    n[m]("refresh")
                }
                n.each(t, function (t, r) {
                    var i, o, l;
                    l = [];
                    o = r.newScroll > r.oldScroll;
                    i = o ? r.forward : r.backward;
                    n.each(e.waypoints[t], function (t, e) {
                        var n, i;
                        if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
                            return l.push(e)
                        } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
                            return l.push(e)
                        }
                    });
                    l.sort(function (t, e) {
                        return t.offset - e.offset
                    });
                    if (!o) {
                        l.reverse()
                    }
                    return n.each(l, function (t, e) {
                        if (e.options.continuous || t === l.length - 1) {
                            return e.trigger([i])
                        }
                    })
                });
                return this.oldScroll = {x: t.horizontal.newScroll, y: t.vertical.newScroll}
            };
            t.prototype.refresh = function () {
                var t, e, r, i = this;
                r = n.isWindow(this.element);
                e = this.$element.offset();
                this.doScroll();
                t = {
                    horizontal: {
                        contextOffset: r ? 0 : e.left,
                        contextScroll: r ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: r ? 0 : e.top,
                        contextScroll: r ? 0 : this.oldScroll.y,
                        contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                };
                return n.each(t, function (t, e) {
                    return n.each(i.waypoints[t], function (t, r) {
                        var i, o, l, s, f;
                        i = r.options.offset;
                        l = r.offset;
                        o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
                        if (n.isFunction(i)) {
                            i = i.apply(r.element)
                        } else if (typeof i === "string") {
                            i = parseFloat(i);
                            if (r.options.offset.indexOf("%") > -1) {
                                i = Math.ceil(e.contextDimension * i / 100)
                            }
                        }
                        r.offset = o - e.contextOffset + e.contextScroll - i;
                        if (r.options.onlyOnScroll && l != null || !r.enabled) {
                            return
                        }
                        if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
                            return r.trigger([e.backward])
                        } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
                            return r.trigger([e.forward])
                        } else if (l === null && e.oldScroll >= r.offset) {
                            return r.trigger([e.forward])
                        }
                    })
                })
            };
            t.prototype.checkEmpty = function () {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
                    this.$element.unbind([p, y].join(" "));
                    return delete a[this.id]
                }
            };
            return t
        }();
        l = function () {
            function t(t, e, r) {
                var i, o;
                r = n.extend({}, n.fn[g].defaults, r);
                if (r.offset === "bottom-in-view") {
                    r.offset = function () {
                        var t;
                        t = n[m]("viewportHeight");
                        if (!n.isWindow(e.element)) {
                            t = e.$element.height()
                        }
                        return t - n(this).outerHeight()
                    }
                }
                this.$element = t;
                this.element = t[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = e;
                this.enabled = r.enabled;
                this.id = "waypoints" + v++;
                this.offset = null;
                this.options = r;
                e.waypoints[this.axis][this.id] = this;
                s[this.axis][this.id] = this;
                i = (o = t.data(w)) != null ? o : [];
                i.push(this.id);
                t.data(w, i)
            }

            t.prototype.trigger = function (t) {
                if (!this.enabled) {
                    return
                }
                if (this.callback != null) {
                    this.callback.apply(this.element, t)
                }
                if (this.options.triggerOnce) {
                    return this.destroy()
                }
            };
            t.prototype.disable = function () {
                return this.enabled = false
            };
            t.prototype.enable = function () {
                this.context.refresh();
                return this.enabled = true
            };
            t.prototype.destroy = function () {
                delete s[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty()
            };
            t.getWaypointsByElement = function (t) {
                var e, r;
                r = n(t).data(w);
                if (!r) {
                    return []
                }
                e = n.extend({}, s.horizontal, s.vertical);
                return n.map(r, function (t) {
                    return e[t]
                })
            };
            return t
        }();
        d = {
            init: function (t, e) {
                var r;
                if (e == null) {
                    e = {}
                }
                if ((r = e.handler) == null) {
                    e.handler = t
                }
                this.each(function () {
                    var t, r, i, s;
                    t = n(this);
                    i = (s = e.context) != null ? s : n.fn[g].defaults.context;
                    if (!n.isWindow(i)) {
                        i = t.closest(i)
                    }
                    i = n(i);
                    r = a[i.data(u)];
                    if (!r) {
                        r = new o(i)
                    }
                    return new l(t, r, e)
                });
                n[m]("refresh");
                return this
            }, disable: function () {
                return d._invoke(this, "disable")
            }, enable: function () {
                return d._invoke(this, "enable")
            }, destroy: function () {
                return d._invoke(this, "destroy")
            }, prev: function (t, e) {
                return d._traverse.call(this, t, e, function (t, e, n) {
                    if (e > 0) {
                        return t.push(n[e - 1])
                    }
                })
            }, next: function (t, e) {
                return d._traverse.call(this, t, e, function (t, e, n) {
                    if (e < n.length - 1) {
                        return t.push(n[e + 1])
                    }
                })
            }, _traverse: function (t, e, i) {
                var o, l;
                if (t == null) {
                    t = "vertical"
                }
                if (e == null) {
                    e = r
                }
                l = h.aggregate(e);
                o = [];
                this.each(function () {
                    var e;
                    e = n.inArray(this, l[t]);
                    return i(o, e, l[t])
                });
                return this.pushStack(o)
            }, _invoke: function (t, e) {
                t.each(function () {
                    var t;
                    t = l.getWaypointsByElement(this);
                    return n.each(t, function (t, n) {
                        n[e]();
                        return true
                    })
                });
                return this
            }
        };
        n.fn[g] = function () {
            var t, r;
            r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (d[r]) {
                return d[r].apply(this, t)
            } else if (n.isFunction(r)) {
                return d.init.apply(this, arguments)
            } else if (n.isPlainObject(r)) {
                return d.init.apply(this, [null, r])
            } else if (!r) {
                return n.error("jQuery Waypoints needs a callback function or handler option.")
            } else {
                return n.error("The " + r + " method does not exist in jQuery Waypoints.")
            }
        };
        n.fn[g].defaults = {
            context: r,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        };
        h = {
            refresh: function () {
                return n.each(a, function (t, e) {
                    return e.refresh()
                })
            }, viewportHeight: function () {
                var t;
                return (t = r.innerHeight) != null ? t : i.height()
            }, aggregate: function (t) {
                var e, r, i;
                e = s;
                if (t) {
                    e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0
                }
                if (!e) {
                    return []
                }
                r = {horizontal: [], vertical: []};
                n.each(r, function (t, i) {
                    n.each(e[t], function (t, e) {
                        return i.push(e)
                    });
                    i.sort(function (t, e) {
                        return t.offset - e.offset
                    });
                    r[t] = n.map(i, function (t) {
                        return t.element
                    });
                    return r[t] = n.unique(r[t])
                });
                return r
            }, above: function (t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function (t, e) {
                    return e.offset <= t.oldScroll.y
                })
            }, below: function (t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function (t, e) {
                    return e.offset > t.oldScroll.y
                })
            }, left: function (t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function (t, e) {
                    return e.offset <= t.oldScroll.x
                })
            }, right: function (t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function (t, e) {
                    return e.offset > t.oldScroll.x
                })
            }, enable: function () {
                return h._invoke("enable")
            }, disable: function () {
                return h._invoke("disable")
            }, destroy: function () {
                return h._invoke("destroy")
            }, extendFn: function (t, e) {
                return d[t] = e
            }, _invoke: function (t) {
                var e;
                e = n.extend({}, s.vertical, s.horizontal);
                return n.each(e, function (e, n) {
                    n[t]();
                    return true
                })
            }, _filter: function (t, e, r) {
                var i, o;
                i = a[n(t).data(u)];
                if (!i) {
                    return []
                }
                o = [];
                n.each(i.waypoints[e], function (t, e) {
                    if (r(i, e)) {
                        return o.push(e)
                    }
                });
                o.sort(function (t, e) {
                    return t.offset - e.offset
                });
                return n.map(o, function (t) {
                    return t.element
                })
            }
        };
        n[m] = function () {
            var t, n;
            n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (h[n]) {
                return h[n].apply(null, t)
            } else {
                return h.aggregate.call(null, n)
            }
        };
        n[m].settings = {resizeThrottle: 100, scrollThrottle: 30};
        return i.load(function () {
            return n[m]("refresh")
        })
    })
}).call(this);


/*----------------------------
    Counterup JS
------------------------------*/
/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/
(function (e) {
    "use strict";
    e.fn.counterUp = function (t) {
        var n = e.extend({time: 400, delay: 10}, t);
        return this.each(function () {
            var t = e(this), r = n, i = function () {
                var e = [], n = r.time / r.delay, i = t.text(), s = /[0-9]+,[0-9]+/.test(i);
                i = i.replace(/,/g, "");
                var o = /^[0-9]+$/.test(i), u = /^[0-9]+\.[0-9]+$/.test(i), a = u ? (i.split(".")[1] || []).length : 0;
                for (var f = n; f >= 1; f--) {
                    var l = parseInt(i / n * f);
                    u && (l = parseFloat(i / n * f).toFixed(a));
                    if (s) while (/(\d+)(\d{3})/.test(l.toString())) l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                    e.unshift(l)
                }
                t.data("counterup-nums", e);
                t.text("0");
                var c = function () {
                    t.text(t.data("counterup-nums").shift());
                    if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay); else {
                        delete t.data("counterup-nums");
                        t.data("counterup-nums", null);
                        t.data("counterup-func", null)
                    }
                };
                t.data("counterup-func", c);
                setTimeout(t.data("counterup-func"), r.delay)
            };
            t.waypoint(i, {offset: "100%", triggerOnce: !0})
        })
    }
})(jQuery);


/*----------------------------
    Slick JS
------------------------------*/
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.9
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
    "use strict";
    var b = window.Slick || {};
    b = function () {
        function c(c, d) {
            var f, e = this;
            e.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(c),
                appendDots: a(c),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (a, b) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (b + 1) + "</button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, e.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.hidden = "hidden", e.paused = !1, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, f, d), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0), e.checkResponsive(!0)
        }

        var b = 0;
        return c
    }(), b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
        var e = this;
        if ("boolean" == typeof c) d = c, c = null; else if (0 > c || c >= e.slideCount) return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
            a(c).attr("data-slick-index", b)
        }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateHeight = function () {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({height: b}, a.options.speed)
        }
    }, b.prototype.animateSlide = function (b, c) {
        var d = {}, e = this;
        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({left: b}, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({top: b}, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({animStart: e.currentLeft}).animate({animStart: b}, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function (a) {
                a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
            },
            complete: function () {
                c && c.call()
            }
        })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
            e.disableTransition(), c.call()
        }, e.options.speed))
    }, b.prototype.asNavFor = function (b) {
        var c = this, d = c.options.asNavFor;
        d && null !== d && (d = a(d).not(c.$slider)), null !== d && "object" == typeof d && d.each(function () {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }, b.prototype.applyTransition = function (a) {
        var b = this, c = {};
        b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function () {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function () {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function () {
        var a = this;
        a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (a.currentSlide - 1 === 0 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
    }, b.prototype.buildArrows = function () {
        var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, b.prototype.buildDots = function () {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (d = '<ul class="' + b.options.dotsClass + '">', c = 0; c <= b.getDotCount(); c += 1) d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
            d += "</ul>", b.$dots = a(d).appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, b.prototype.buildOut = function () {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
        }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
    }, b.prototype.buildRows = function () {
        var b, c, d, e, f, g, h, a = this;
        if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                var i = document.createElement("div");
                for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");
                    for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);
                        g.get(k) && j.appendChild(g.get(k))
                    }
                    i.appendChild(j)
                }
                e.appendChild(i)
            }
            a.$slider.html(e), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, b.prototype.checkResponsive = function (b, c) {
        var e, f, g, d = this, h = !1, i = d.$slider.width(), j = window.innerWidth || a(window).width();
        if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;
            for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
        }
    }, b.prototype.changeSlide = function (b, c) {
        var f, g, h, d = this, e = a(b.target);
        switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
            case"previous":
                g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
                break;
            case"next":
                g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
                break;
            case"index":
                var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
                d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
                break;
            default:
                return
        }
    }, b.prototype.checkNavigable = function (a) {
        var c, d, b = this;
        if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1]; else for (var e in c) {
            if (a < c[e]) {
                a = d;
                break
            }
            d = c[e]
        }
        return a
    }, b.prototype.cleanUpEvents = function () {
        var b = this;
        b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide), b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).off("mouseenter.slick", a.proxy(b.setPaused, b, !0)).off("mouseleave.slick", a.proxy(b.setPaused, b, !1))), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.$list.off("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.cleanUpRows = function () {
        var b, a = this;
        a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.html(b))
    }, b.prototype.clickHandler = function (a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    }, b.prototype.destroy = function (b) {
        var c = this;
        c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            a(this).attr("style", a(this).data("originalStyling"))
        }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
    }, b.prototype.disableTransition = function (a) {
        var b = this, c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function (a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({zIndex: c.options.zIndex}), c.$slides.eq(a).animate({opacity: 1}, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
            opacity: 1,
            zIndex: c.options.zIndex
        }), b && setTimeout(function () {
            c.disableTransition(a), b.call()
        }, c.options.speed))
    }, b.prototype.fadeSlideOut = function (a) {
        var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }))
    }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
        var b = this;
        null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
        var a = this;
        return a.currentSlide
    }, b.prototype.getDotCount = function () {
        var a = this, b = 0, c = 0, d = 0;
        if (a.options.infinite === !0) for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow; else if (a.options.centerMode === !0) d = a.slideCount; else for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d - 1
    }, b.prototype.getLeft = function (a) {
        var c, d, f, b = this, e = 0;
        return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
    }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
        var b = this;
        return b.options[a]
    }, b.prototype.getNavigableIndexes = function () {
        var e, a = this, b = 0, c = 0, d = [];
        for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }, b.prototype.getSlick = function () {
        return this
    }, b.prototype.getSlideCount = function () {
        var c, d, e, b = this;
        return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
        }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
    }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
        var c = this;
        c.changeSlide({data: {message: "index", index: parseInt(a)}}, b)
    }, b.prototype.init = function (b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA()
    }, b.prototype.initArrowEvents = function () {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {message: "previous"}, a.changeSlide), a.$nextArrow.on("click.slick", {message: "next"}, a.changeSlide))
    }, b.prototype.initDotEvents = function () {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {message: "index"}, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.setPaused, b, !0)).on("mouseleave.slick", a.proxy(b.setPaused, b, !1))
    }, b.prototype.initializeEvents = function () {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {action: "start"}, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {action: "move"}, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {action: "end"}, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.$list.on("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function () {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
    }, b.prototype.keyHandler = function (a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({data: {message: "previous"}}) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({data: {message: "next"}}))
    }, b.prototype.lazyLoad = function () {
        function g(b) {
            a("img[data-lazy]", b).each(function () {
                var b = a(this), c = a(this).attr("data-lazy"), d = document.createElement("img");
                d.onload = function () {
                    b.animate({opacity: 0}, 100, function () {
                        b.attr("src", c).animate({opacity: 1}, 200, function () {
                            b.removeAttr("data-lazy").removeClass("slick-loading")
                        })
                    })
                }, d.src = c
            })
        }

        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = e + b.options.slidesToShow, b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
    }, b.prototype.loadSlider = function () {
        var a = this;
        a.setPosition(), a.$slideTrack.css({opacity: 1}), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.next = b.prototype.slickNext = function () {
        var a = this;
        a.changeSlide({data: {message: "next"}})
    }, b.prototype.orientationChange = function () {
        var a = this;
        a.checkResponsive(), a.setPosition()
    }, b.prototype.pause = b.prototype.slickPause = function () {
        var a = this;
        a.autoPlayClear(), a.paused = !0
    }, b.prototype.play = b.prototype.slickPlay = function () {
        var a = this;
        a.paused = !1, a.autoPlay()
    }, b.prototype.postSlide = function (a) {
        var b = this;
        b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay(), b.options.accessibility === !0 && b.initADA()
    }, b.prototype.prev = b.prototype.slickPrev = function () {
        var a = this;
        a.changeSlide({data: {message: "previous"}})
    }, b.prototype.preventDefault = function (a) {
        a.preventDefault()
    }, b.prototype.progressiveLazyLoad = function () {
        var c, d, b = this;
        c = a("img[data-lazy]", b.$slider).length, c > 0 && (d = a("img[data-lazy]", b.$slider).first(), d.attr("src", null), d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function () {
            d.removeAttr("data-lazy"), b.progressiveLazyLoad(), b.options.adaptiveHeight === !0 && b.setPosition()
        }).error(function () {
            d.removeAttr("data-lazy"), b.progressiveLazyLoad()
        }))
    }, b.prototype.refresh = function (b) {
        var d, e, c = this;
        e = c.slideCount - c.options.slidesToShow, c.options.infinite || (c.slideCount <= c.options.slidesToShow ? c.currentSlide = 0 : c.currentSlide > e && (c.currentSlide = e)), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {currentSlide: d}), c.init(), b || c.changeSlide({
            data: {
                message: "index",
                index: d
            }
        }, !1)
    }, b.prototype.registerBreakpoints = function () {
        var c, d, e, b = this, f = b.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            b.respondTo = b.options.respondTo || "window";
            for (c in f) if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
            }
            b.breakpoints.sort(function (a, c) {
                return b.options.mobileFirst ? a - c : c - a
            })
        }
    }, b.prototype.reinit = function () {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b]), b.options.autoplay === !0 && b.focusHandler()
    }, b.prototype.resize = function () {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
            b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
        }, 50))
    }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
    }, b.prototype.setCSS = function (a) {
        var d, e, b = this, c = {};
        b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
    }, b.prototype.setDimensions = function () {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({padding: "0px " + a.options.centerPadding}) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({padding: a.options.centerPadding + " 0px"})), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }, b.prototype.setFade = function () {
        var c, b = this;
        b.$slides.each(function (d, e) {
            c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            }) : a(e).css({position: "relative", left: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0})
        }), b.$slides.eq(b.currentSlide).css({zIndex: b.options.zIndex - 1, opacity: 1})
    }, b.prototype.setHeight = function () {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function (b, c, d) {
        var f, g, e = this;
        if ("responsive" === b && "array" === a.type(c)) for (g in c) if ("array" !== a.type(e.options.responsive)) e.options.responsive = [c[g]]; else {
            for (f = e.options.responsive.length - 1; f >= 0;) e.options.responsive[f].breakpoint === c[g].breakpoint && e.options.responsive.splice(f, 1), f--;
            e.options.responsive.push(c[g])
        } else e.options[b] = c;
        d === !0 && (e.unload(), e.reinit())
    }, b.prototype.setPosition = function () {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
    }, b.prototype.setProps = function () {
        var a = this, b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
    }, b.prototype.setSlideClasses = function (a) {
        var c, d, e, f, b = this;
        d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }, b.prototype.setupInfinite = function () {
        var c, d, e, b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                a(this).attr("id", "")
            })
        }
    }, b.prototype.setPaused = function (a) {
        var b = this;
        b.options.autoplay === !0 && b.options.pauseOnHover === !0 && (b.paused = a, a ? b.autoPlayClear() : b.autoPlay())
    }, b.prototype.selectHandler = function (b) {
        var c = this, d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
    }, b.prototype.slideHandler = function (a, b, c) {
        var d, e, f, g, h = null, i = this;
        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
            i.postSlide(d);
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
            i.postSlide(d)
        }) : i.postSlide(d))) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
            i.postSlide(e)
        })) : i.postSlide(e), void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function () {
            i.postSlide(e)
        }) : i.postSlide(e))))
    }, b.prototype.startLoad = function () {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function () {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "left" : "right" : "vertical"
    }, b.prototype.swipeEnd = function (a) {
        var c, b = this;
        if (b.dragging = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) switch (b.swipeDirection()) {
            case"left":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.slideHandler(c), b.currentDirection = 0, b.touchObject = {}, b.$slider.trigger("swipe", [b, "left"]);
                break;
            case"right":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.slideHandler(c), b.currentDirection = 1, b.touchObject = {}, b.$slider.trigger("swipe", [b, "right"])
        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
    }, b.prototype.swipeHandler = function (a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
            case"start":
                b.swipeStart(a);
                break;
            case"move":
                b.swipeMove(a);
                break;
            case"end":
                b.swipeEnd(a)
        }
    }, b.prototype.swipeMove = function (a) {
        var d, e, f, g, h, b = this;
        return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
    }, b.prototype.swipeStart = function (a) {
        var c, b = this;
        return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void (b.dragging = !0))
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function () {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, b.prototype.unslick = function (a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]), b.destroy()
    }, b.prototype.updateArrows = function () {
        var b, a = this;
        b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, b.prototype.updateDots = function () {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, b.prototype.visibility = function () {
        var a = this;
        document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : a.options.autoplay === !0 && (a.paused = !1, a.autoPlay())
    }, b.prototype.initADA = function () {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
            a(this).attr({role: "option", "aria-describedby": "slick-slide" + b.instanceUid + c})
        }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
    }, b.prototype.activateADA = function () {
        var a = this;
        a.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
    }, b.prototype.focusHandler = function () {
        var b = this;
        b.$slider.on("focus.slick blur.slick", "*", function (c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function () {
                b.isPlay && (d.is(":focus") ? (b.autoPlayClear(), b.paused = !0) : (b.paused = !1, b.autoPlay()))
            }, 0)
        })
    }, a.fn.slick = function () {
        var f, g, a = this, c = arguments[0], d = Array.prototype.slice.call(arguments, 1), e = a.length;
        for (f = 0; e > f; f++) if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
        return a
    }
});


/*----------------------------
    Animated Headlines JS
------------------------------*/
jQuery(document).ready(function (s) {
    var e, a, n = 2500, t = 3800, d = t - 3e3, l = 50, r = 150, o = 500, c = o + 800, h = 600, p = 1500;

    function u(i) {
        var e = m(i);
        if (i.parents(".cd-headline").hasClass("type")) {
            var a = i.parent(".cd-words-wrapper");
            a.addClass("selected").removeClass("waiting"), setTimeout(function () {
                a.removeClass("selected"), i.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")
            }, o), setTimeout(function () {
                f(e, r)
            }, c)
        } else if (i.parents(".cd-headline").hasClass("letters")) {
            var p = i.children("i").length >= e.children("i").length;
            !function i(e, a, t, d) {
                e.removeClass("in").addClass("out");
                e.is(":last-child") ? t && setTimeout(function () {
                    u(m(a))
                }, n) : setTimeout(function () {
                    i(e.next(), a, t, d)
                }, d);
                if (e.is(":last-child") && s("html").hasClass("no-csstransitions")) {
                    var l = m(a);
                    w(a, l)
                }
            }(i.find("i").eq(0), i, p, l), C(e.find("i").eq(0), e, p, l)
        } else i.parents(".cd-headline").hasClass("clip") ? i.parents(".cd-words-wrapper").animate({width: "2px"}, h, function () {
            w(i, e), f(e)
        }) : i.parents(".cd-headline").hasClass("loading-bar") ? (i.parents(".cd-words-wrapper").removeClass("is-loading"), w(i, e), setTimeout(function () {
            u(e)
        }, t), setTimeout(function () {
            i.parents(".cd-words-wrapper").addClass("is-loading")
        }, d)) : (w(i, e), setTimeout(function () {
            u(e)
        }, n))
    }

    function f(s, i) {
        s.parents(".cd-headline").hasClass("type") ? (C(s.find("i").eq(0), s, !1, i), s.addClass("is-visible").removeClass("is-hidden")) : s.parents(".cd-headline").hasClass("clip") && s.parents(".cd-words-wrapper").animate({width: s.width() + 10}, h, function () {
            setTimeout(function () {
                u(s)
            }, p)
        })
    }

    function C(s, i, e, a) {
        s.addClass("in").removeClass("out"), s.is(":last-child") ? (i.parents(".cd-headline").hasClass("type") && setTimeout(function () {
            i.parents(".cd-words-wrapper").addClass("waiting")
        }, 200), e || setTimeout(function () {
            u(i)
        }, n)) : setTimeout(function () {
            C(s.next(), i, e, a)
        }, a)
    }

    function m(s) {
        return s.is(":last-child") ? s.parent().children().eq(0) : s.next()
    }

    function w(s, i) {
        s.removeClass("is-visible").addClass("is-hidden"), i.removeClass("is-hidden").addClass("is-visible")
    }

    s(".cd-headline.letters").find("b").each(function () {
        var e = s(this), a = e.text().split(""), n = e.hasClass("is-visible");
        for (i in a) e.parents(".rotate-2").length > 0 && (a[i] = "<em>" + a[i] + "</em>"), a[i] = n ? '<i class="in">' + a[i] + "</i>" : "<i>" + a[i] + "</i>";
        var t = a.join("");
        e.html(t).css("opacity", 1)
    }), e = s(".cd-headline"), a = n, e.each(function () {
        var i = s(this);
        if (i.hasClass("loading-bar")) a = t, setTimeout(function () {
            i.find(".cd-words-wrapper").addClass("is-loading")
        }, d); else if (i.hasClass("clip")) {
            var e = i.find(".cd-words-wrapper"), n = e.width() + 10;
            e.css("width", n)
        } else if (!i.hasClass("type")) {
            var l = i.find(".cd-words-wrapper b"), r = 0;
            l.each(function () {
                var i = s(this).width();
                i > r && (r = i)
            }), i.find(".cd-words-wrapper").css("width", r)
        }
        setTimeout(function () {
            u(i.find(".is-visible").eq(0))
        }, a)
    })
});


/*----------------------------
    Textilate JS
------------------------------*/
!function (t) {
    "use strict";

    function n(n) {
        return /In/.test(n) || t.inArray(n, t.fn.textillate.defaults.inEffects) >= 0
    }

    function e(n) {
        return /Out/.test(n) || t.inArray(n, t.fn.textillate.defaults.outEffects) >= 0
    }

    function i(t) {
        return "true" !== t && "false" !== t ? t : "true" === t
    }

    function a(n) {
        var e = n.attributes || [], a = {};
        return e.length ? (t.each(e, function (t, n) {
            var e = n.nodeName.replace(/delayscale/, "delayScale");
            /^data-in-*/.test(e) ? (a.in = a.in || {}, a.in[e.replace(/data-in-/, "")] = i(n.nodeValue)) : /^data-out-*/.test(e) ? (a.out = a.out || {}, a.out[e.replace(/data-out-/, "")] = i(n.nodeValue)) : /^data-*/.test(e) && (a[e.replace(/data-/, "")] = i(n.nodeValue))
        }), a) : a
    }

    function s(i, a, s) {
        var l = i.length;
        l ? (a.shuffle && (i = function (t) {
            for (var n, e, i = t.length; i; n = parseInt(Math.random() * i), e = t[--i], t[i] = t[n], t[n] = e) ;
            return t
        }(i)), a.reverse && (i = i.toArray().reverse()), t.each(i, function (i, o) {
            var r = t(o);

            function c() {
                n(a.effect) ? r.css("visibility", "visible") : e(a.effect) && r.css("visibility", "hidden"), !(l -= 1) && s && s()
            }

            var u = a.sync ? a.delay : a.delay * i * a.delayScale;
            r.text() ? setTimeout(function () {
                var t, n, e;
                t = r, n = a.effect, e = c, t.addClass("animated " + n).css("visibility", "visible").show(), t.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                    t.removeClass("animated " + n), e && e()
                })
            }, u) : c()
        })) : s && s()
    }

    t.fn.textillate = function (i, l) {
        return this.each(function () {
            var o = t(this), r = o.data("textillate"),
                c = t.extend(!0, {}, t.fn.textillate.defaults, a(this), "object" == typeof i && i);
            r ? "string" == typeof i ? r[i].apply(r, [].concat(l)) : r.setOptions.call(r, c) : o.data("textillate", r = new function (i, l) {
                var o = this, r = t(i);
                o.init = function () {
                    o.$texts = r.find(l.selector), o.$texts.length || (o.$texts = t('<ul class="texts"><li>' + r.html() + "</li></ul>"), r.html(o.$texts)), o.$texts.hide(), o.$current = t("<span>").html(o.$texts.find(":first-child").html()).prependTo(r), n(l.in.effect) ? o.$current.css("visibility", "hidden") : e(l.out.effect) && o.$current.css("visibility", "visible"), o.setOptions(l), o.timeoutRun = null, setTimeout(function () {
                        o.options.autoStart && o.start()
                    }, o.options.initialDelay)
                }, o.setOptions = function (t) {
                    o.options = t
                }, o.triggerEvent = function (n) {
                    var e = t.Event(n + ".tlt");
                    return r.trigger(e, o), e
                }, o.in = function (i, l) {
                    i = i || 0;
                    var r, c = o.$texts.find(":nth-child(" + ((i || 0) + 1) + ")"),
                        u = t.extend(!0, {}, o.options, c.length ? a(c[0]) : {});
                    c.addClass("current"), o.triggerEvent("inAnimationBegin"), o.$current.html(c.html()).lettering("words"), "char" == o.options.type && o.$current.find('[class^="word"]').css({
                        display: "inline-block",
                        "-webkit-transform": "translate3d(0,0,0)",
                        "-moz-transform": "translate3d(0,0,0)",
                        "-o-transform": "translate3d(0,0,0)",
                        transform: "translate3d(0,0,0)"
                    }).each(function () {
                        t(this).lettering()
                    }), r = o.$current.find('[class^="' + o.options.type + '"]').css("display", "inline-block"), n(u.in.effect) ? r.css("visibility", "hidden") : e(u.in.effect) && r.css("visibility", "visible"), o.currentIndex = i, s(r, u.in, function () {
                        o.triggerEvent("inAnimationEnd"), u.in.callback && u.in.callback(), l && l(o)
                    })
                }, o.out = function (n) {
                    var e = o.$texts.find(":nth-child(" + ((o.currentIndex || 0) + 1) + ")"),
                        i = o.$current.find('[class^="' + o.options.type + '"]'),
                        l = t.extend(!0, {}, o.options, e.length ? a(e[0]) : {});
                    o.triggerEvent("outAnimationBegin"), s(i, l.out, function () {
                        e.removeClass("current"), o.triggerEvent("outAnimationEnd"), l.out.callback && l.out.callback(), n && n(o)
                    })
                }, o.start = function (t) {
                    setTimeout(function () {
                        o.triggerEvent("start"), function t(n) {
                            o.in(n, function () {
                                var e = o.$texts.children().length;
                                n += 1, !o.options.loop && n >= e ? (o.options.callback && o.options.callback(), o.triggerEvent("end")) : (n %= e, o.timeoutRun = setTimeout(function () {
                                    o.out(function () {
                                        t(n)
                                    })
                                }, o.options.minDisplayTime))
                            })
                        }(t || 0)
                    }, o.options.initialDelay)
                }, o.stop = function () {
                    o.timeoutRun && (clearInterval(o.timeoutRun), o.timeoutRun = null)
                }, o.init()
            }(this, c))
        })
    }, t.fn.textillate.defaults = {
        selector: ".texts",
        loop: !1,
        minDisplayTime: 2e3,
        initialDelay: 0,
        in: {
            effect: "fadeInLeftBig",
            delayScale: 1.5,
            delay: 50,
            sync: !1,
            reverse: !1,
            shuffle: !1,
            callback: function () {
            }
        },
        out: {
            effect: "hinge", delayScale: 1.5, delay: 50, sync: !1, reverse: !1, shuffle: !1, callback: function () {
            }
        },
        autoStart: !0,
        inEffects: [],
        outEffects: ["hinge"],
        callback: function () {
        },
        type: "char"
    }
}(jQuery);


/*----------------------------
    Lettering JS
------------------------------*/
!function (t) {
    function e(e, n, i, r) {
        var a = e.text(), c = a.split(n), s = "";
        c.length && (t(c).each(function (t, e) {
            s += '<span class="' + i + (t + 1) + '" aria-hidden="true">' + e + "</span>" + r
        }), e.attr("aria-label", a).empty().append(s))
    }

    var n = {
        init: function () {
            return this.each(function () {
                e(t(this), "", "char", "")
            })
        }, words: function () {
            return this.each(function () {
                e(t(this), " ", "word", " ")
            })
        }, lines: function () {
            return this.each(function () {
                var n = "eefec303079ad17405c889e092e105b0";
                e(t(this).children("br").replaceWith(n).end(), n, "line", "")
            })
        }
    };
    t.fn.lettering = function (e) {
        return e && n[e] ? n[e].apply(this, [].slice.call(arguments, 1)) : "letters" !== e && e ? (t.error("Method " + e + " does not exist on jQuery.lettering"), this) : n.init.apply(this, [].slice.call(arguments, 0))
    }
}(jQuery);


/*----------------------------
    YTPlayer JS
------------------------------*/
/*jquery.mb.YTPlayer 04-12-2020
 _ jquery.mb.components
 _ email: matbicoc@gmail.com
 _ Copyright (c) 2001-2020. Matteo Bicocchi (Pupunzi);
 _ blog: http://pupunzi.open-lab.com
 _ Open Lab s.r.l., Florence - Italy
 */

var ytp = ytp || {};
let YTPRndSuffix = (new Date).getTime(),
    YTPTimerLabels = {init: "YTPlayerInit_" + YTPRndSuffix, startPlaying: "YTPlayerStartPlay_" + YTPRndSuffix};

function onYouTubeIframeAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}

let getYTPVideoID = function (e) {
    let r, t;
    return e.indexOf("youtu.be") > 0 || e.indexOf("youtube.com/embed") > 0 ? r = (t = (r = e.substr(e.lastIndexOf("/") + 1, e.length)).indexOf("?list=") > 0 ? r.substr(r.lastIndexOf("="), r.length) : null) ? r.substr(0, r.lastIndexOf("?")) : r : e.indexOf("http") > -1 ? (r = e.match(/[\\?&]v=([^&#]*)/)[1], t = e.indexOf("list=") > 0 ? e.match(/[\\?&]list=([^&#]*)/)[1] : null) : t = (r = e.length > 15 ? null : e) ? null : e, {
        videoID: r,
        playlistID: t
    }
};

function iOSversion() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        let e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3] || 0, 10)]
    }
}

!function (jQuery, ytp) {
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "3.3.8",
        build: "7561",
        author: "Matteo Bicocchi (pupunzi)",
        apiKey: "",
        defaults: {
            videoURL: null,
            containment: "body",
            ratio: "auto",
            fadeOnStartTime: 1e3,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            delayAtStart: 1e3,
            coverImage: !1,
            loop: !0,
            addRaster: !1,
            mask: !1,
            opacity: 1,
            quality: "hd1080",
            vol: 50,
            mute: !1,
            showControls: !0,
            anchor: "center,center",
            showAnnotations: !1,
            cc_load_policy: !1,
            showYTLogo: !0,
            useOnMobile: !0,
            playOnlyIfVisible: !1,
            onScreenPercentage: 30,
            goFullScreenOnPlay: !1,
            stopMovieOnBlur: !0,
            realFullscreen: !0,
            optimizeDisplay: !0,
            abundance: .3,
            gaTrack: !0,
            remember_last_time: !1,
            addFilters: !1,
            useNoCookie: !0,
            onReady: function (e) {
            },
            onError: function (e, r) {
            },
            onEnd: function () {
            }
        },
        controls: {play: "P", pause: "p", mute: "M", unmute: "A", onlyYT: "O", showSite: "R", ytLogo: "Y"},
        controlBar: null,
        locationProtocol: "https:",
        defaultFilters: {
            grayscale: {value: 0, unit: "%"},
            hue_rotate: {value: 0, unit: "deg"},
            invert: {value: 0, unit: "%"},
            opacity: {value: 0, unit: "%"},
            saturate: {value: 0, unit: "%"},
            sepia: {value: 0, unit: "%"},
            brightness: {value: 0, unit: "%"},
            contrast: {value: 0, unit: "%"},
            blur: {value: 0, unit: "px"}
        },
        buildPlayer: function (options) {
            if (ytp.YTAPIReady || void 0 !== window.YT) setTimeout(function () {
                jQuery(document).trigger("YTAPIReady"), ytp.YTAPIReady = !0
            }, 100); else {
                jQuery("#YTAPI").remove();
                let e = jQuery("<script>").attr({
                    src: "https://www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                    id: "YTAPI"
                });
                jQuery("head").prepend(e)
            }

            function isIframe() {
                let e = !1;
                try {
                    self.location.href !== top.location.href && (e = !0)
                } catch (r) {
                    e = !0
                }
                return e
            }

            return this.each(function () {
                let YTPlayer = this, $YTPlayer = jQuery(YTPlayer);
                $YTPlayer.hide(), YTPlayer.loop = 0, YTPlayer.state = 0, YTPlayer.filters = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaultFilters), YTPlayer.filtersEnabled = !0, YTPlayer.id = YTPlayer.id || "YTP_" + (new Date).getTime(), $YTPlayer.addClass("mb_YTPlayer");
                let property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                "object" != typeof property && (property = {}), YTPlayer.opt = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaults, YTPlayer.opt, options, property), YTPRndSuffix = getYTPVideoID(YTPlayer.opt.videoURL).videoID, YTPTimerLabels = {
                    init: "YTPlayerInit_" + YTPRndSuffix,
                    startPlaying: "YTPlayerStartPlay_" + YTPRndSuffix
                }, console.time(YTPTimerLabels.init), console.time(YTPTimerLabels.startPlaying), YTPlayer.opt.elementId = YTPlayer.id, 0 === YTPlayer.opt.vol && (YTPlayer.opt.vol = 1, YTPlayer.opt.mute = !0), YTPlayer.opt.loop && "boolean" == typeof YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999);
                let fullScreenAvailable = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
                YTPlayer.opt.realFullscreen = !(isIframe() || !fullScreenAvailable) && YTPlayer.opt.realFullscreen, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "1" : "3", YTPlayer.opt.cc_load_policy = YTPlayer.opt.cc_load_policy ? "1" : "0", YTPlayer.opt.coverImage = YTPlayer.opt.coverImage || YTPlayer.opt.backgroundImage, YTPlayer.opt.quality = "hd1080", jQuery.mbBrowser.msie && jQuery.mbBrowser.version < 9 && (YTPlayer.opt.opacity = 1), YTPlayer.opt.containment = "self" === YTPlayer.opt.containment ? $YTPlayer : jQuery(YTPlayer.opt.containment), YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1, YTPlayer.opt.ratio = "auto" === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio, YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio);
                let origContainmentBackground = YTPlayer.opt.containment.css("background-image");
                origContainmentBackground = "none" === origContainmentBackground ? null : origContainmentBackground, YTPlayer.orig_containment_background = origContainmentBackground, $YTPlayer.attr("id") || $YTPlayer.attr("id", "ytp_" + (new Date).getTime()), YTPlayer.playerID = "iframe_" + YTPlayer.id, YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0, YTPlayer.videoID = YTPlayer.opt.videoURL ? getYTPVideoID(YTPlayer.opt.videoURL).videoID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).videoID, YTPlayer.playlistID = YTPlayer.opt.videoURL ? getYTPVideoID(YTPlayer.opt.videoURL).playlistID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).playlistID;
                let start_from_last = 0;
                if (jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID) && (start_from_last = parseFloat(jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID))), YTPlayer.opt.remember_last_time && start_from_last && (YTPlayer.start_from_last = start_from_last, jQuery.mbCookie.remove("YTPlayer_start_from" + YTPlayer.videoID)), YTPlayer.isPlayer = $YTPlayer.is(YTPlayer.opt.containment), YTPlayer.isBackground = YTPlayer.opt.containment.is("body"), YTPlayer.isBackground && ytp.backgroundIsInited) return;
                if (YTPlayer.isPlayer && $YTPlayer.show(), YTPlayer.overlay = jQuery("<div/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }).addClass("YTPOverlay"), $YTPlayer.changeCoverImage(), YTPlayer.wrapper = jQuery("<div/>").attr("id", "wrapper_" + YTPlayer.id).css({
                    position: "absolute",
                    zIndex: 0,
                    minWidth: "100%",
                    minHeight: "100%",
                    left: 0,
                    top: 0,
                    overflow: "hidden",
                    opacity: 0
                }).addClass("mbYTP_wrapper"), YTPlayer.isPlayer) {
                    let e = jQuery.browser.mobile ? "inlinePlayButtonMobile" : "inlinePlayButton";
                    YTPlayer.inlinePlayButton = jQuery("<div/>").addClass("inlinePlayButton").html(jQuery.mbYTPlayer.controls.play), $YTPlayer.append(YTPlayer.inlinePlayButton), YTPlayer.inlinePlayButton.on("click", function (e) {
                        $YTPlayer.YTPPlay(), YTPlayer.inlinePlayButton.hide(), YTPlayer.opt.goFullScreenOnPlay && $YTPlayer.YTPFullscreen(), e.stopPropagation()
                    }), YTPlayer.opt.autoPlay && YTPlayer.inlinePlayButton.hide(), YTPlayer.overlay.on("click", function () {
                        $YTPlayer.YTPTogglePlay(), YTPlayer.opt.goFullScreenOnPlay && $YTPlayer.YTPFullscreen()
                    }).css({cursor: "pointer"})
                }
                let playerBox = jQuery("<div/>").attr("id", YTPlayer.playerID).addClass("playerBox");
                if (playerBox.css({
                    position: "absolute",
                    zIndex: 0,
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                    opacity: 1
                }), YTPlayer.wrapper.append(playerBox), playerBox.after(YTPlayer.overlay), YTPlayer.isPlayer && (YTPlayer.inlineWrapper = jQuery("<div/>").addClass("inline-YTPlayer"), YTPlayer.inlineWrapper.css({
                    position: "relative",
                    maxWidth: YTPlayer.opt.containment.css("width")
                }), YTPlayer.opt.containment.css({
                    position: "relative",
                    paddingBottom: "56.25%",
                    overflow: "hidden",
                    height: 0
                }), YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper)), YTPlayer.opt.containment.children().not("script, style").each(function () {
                    "static" === jQuery(this).css("position") && jQuery(this).css("position", "relative")
                }), YTPlayer.isBackground ? (jQuery("body").css({boxSizing: "border-box"}), YTPlayer.wrapper.css({
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 0
                })) : "static" === YTPlayer.opt.containment.css("position") && (YTPlayer.opt.containment.css({position: "relative"}), $YTPlayer.show()), YTPlayer.opt.containment.prepend(YTPlayer.wrapper), YTPlayer.isBackground || YTPlayer.overlay.on("mouseenter", function () {
                    YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.addClass("visible")
                }).on("mouseleave", function () {
                    YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.removeClass("visible")
                }), jQuery.mbBrowser.mobile && !YTPlayer.opt.useOnMobile) return YTPlayer.opt.coverImage && (YTPlayer.wrapper.css({
                    backgroundImage: "url(" + YTPlayer.opt.coverImage + ")",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    opacity: 1
                }), YTPlayer.wrapper.css({opacity: 1})), $YTPlayer;
                jQuery.mbBrowser.mobile && YTPlayer.opt.autoPlay && YTPlayer.opt.useOnMobile && jQuery("body").one("touchstart", function () {
                    YTPlayer.player.playVideo()
                }), jQuery(document).one("YTAPIReady", function () {
                    $YTPlayer.trigger("YTAPIReady_" + YTPlayer.id), ytp.YTAPIReady = !0
                }), YTPlayer.isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer, YTPlayer.opt.onScreenPercentage), $YTPlayer.one("YTAPIReady_" + YTPlayer.id, function () {
                    let e = this, r = jQuery(e);
                    e.isBackground && ytp.backgroundIsInited || e.isInit || (e.isBackground && (ytp.backgroundIsInited = !0), e.opt.autoPlay = void 0 === e.opt.autoPlay ? !!e.isBackground : e.opt.autoPlay, e.opt.vol = e.opt.vol ? e.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(e), jQuery(e).on("YTPChanged", function (t) {
                        if (e.isInit) return;
                        e.isInit = !0;
                        let a = {
                            modestbranding: 1,
                            autoplay: 0,
                            controls: 0,
                            showinfo: 0,
                            rel: 0,
                            enablejsapi: 1,
                            version: 3,
                            playerapiid: e.playerID,
                            origin: "*",
                            allowfullscreen: !0,
                            wmode: "transparent",
                            iv_load_policy: e.opt.showAnnotations,
                            cc_load_policy: e.opt.cc_load_policy,
                            playsinline: jQuery.mbBrowser.mobile && !e.isPlayer ? 1 : 0,
                            html5: document.createElement("video").canPlayType ? 1 : 0
                        };
                        new YT.Player(e.playerID, {
                            host: e.opt.useNoCookie ? "https://www.youtube-nocookie.com" : "https://www.youtube.com",
                            playerVars: a,
                            events: {
                                onReady: function (t) {
                                    e.player = t.target, e.player.loadVideoById({
                                        videoId: e.videoID.toString(),
                                        suggestedQuality: e.opt.quality
                                    }), r.trigger("YTPlayerIsReady_" + e.id)
                                }, onStateChange: function (r) {
                                    if ("function" != typeof r.target.getPlayerState) return;
                                    let t, a = r.target.getPlayerState();
                                    if (e.preventTrigger || e.isStarting) return void (e.preventTrigger = !1);
                                    switch (e.state = a, r.data === YT.PlayerState.PLAYING && r.target.setPlaybackQuality(e.opt.quality), a) {
                                        case-1:
                                            t = "YTPUnstarted";
                                            break;
                                        case 0:
                                            t = "YTPRealEnd";
                                            break;
                                        case 1:
                                            t = "YTPPlay", e.controlBar.length && e.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.pause), e.isPlayer && e.inlinePlayButton.hide(), jQuery(document).off("mousedown.YTPstart");
                                            break;
                                        case 2:
                                            t = "YTPPause", e.controlBar.length && e.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play), e.isPlayer && e.inlinePlayButton.show();
                                            break;
                                        case 3:
                                            e.player.setPlaybackQuality(e.opt.quality), t = "YTPBuffering", e.controlBar.length && e.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
                                            break;
                                        case 5:
                                            t = "YTPCued"
                                    }
                                    let o = jQuery.Event(t);
                                    o.time = e.currentTime, jQuery(e).trigger(o)
                                }, onPlaybackQualityChange: function (r) {
                                    let t = r.target.getPlaybackQuality(), a = jQuery.Event("YTPQualityChange");
                                    a.quality = t, jQuery(e).trigger(a)
                                }, onError: function (t) {
                                    switch ("function" == typeof e.opt.onError && e.opt.onError(r, t), console.debug("error:", t), t.data) {
                                        case 2:
                                            console.error("video ID:: " + e.videoID + ": The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.");
                                            break;
                                        case 5:
                                            console.error("video ID:: " + e.videoID + ": The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.");
                                            break;
                                        case 100:
                                            console.error("video ID:: " + e.videoID + ": The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.");
                                            break;
                                        case 101:
                                        case 150:
                                            console.error("video ID:: " + e.videoID + ": The video doesn't exist or The owner does not allow it to be played in embedded players.")
                                    }
                                    e.isList && jQuery(e).YTPPlayNext()
                                }
                            }
                        }), r.on("YTPlayerIsReady_" + e.id, function () {
                            if (e.isReady) return this;
                            e.playerEl = e.player.getIframe(), jQuery(e.playerEl).unselectable(), r.optimizeDisplay(), jQuery(window).off("resize.YTP_" + e.id).on("resize.YTP_" + e.id, function () {
                                r.optimizeDisplay()
                            }), jQuery(window).off("orientationchange.YTP_" + e.id).on("orientationchange.YTP_" + e.id, function () {
                                r.optimizeDisplay()
                            }), e.opt.remember_last_time && jQuery(window).on("unload.YTP_" + e.id, function () {
                                let r = e.player.getCurrentTime();
                                jQuery.mbCookie.set("YTPlayer_start_from" + e.videoID, r, 0)
                            }), r.YTPCheckForState()
                        })
                    }))
                }), $YTPlayer.off("YTPTime.mask"), jQuery.mbYTPlayer.applyMask(YTPlayer), console.timeEnd(YTPTimerLabels.init), setTimeout(function () {
                    ytp.YTAPIReady || "object" != typeof window.YT || (jQuery(document).trigger("YTAPIReady"), ytp.YTAPIReady = !0, console.error("YTPlayer: More then a call to the YT API has been detected"))
                }, YTPlayer.opt.delayAtStart)
            })
        },
        isOnScreen: function (e, r) {
            r = r || 10;
            let t = e.wrapper, a = jQuery(window).scrollTop(), o = a + jQuery(window).height(),
                i = t.height() * r / 100, n = t.offset().top + i;
            return t.offset().top + (t.height() - i) <= o && n >= a
        },
        getDataFromAPI: function (e) {
            e.videoData = jQuery.mbStorage.get("YTPlayer_data_" + e.videoID), e.videoData ? (setTimeout(function () {
                e.dataReceived = !0;
                let r = jQuery.Event("YTPChanged");
                r.time = e.currentTime, r.videoId = e.videoID, r.opt = e.opt, jQuery(e).trigger(r);
                let t = jQuery.Event("YTPData");
                t.prop = {};
                for (let r in e.videoData) e.videoData.hasOwnProperty(r) && (t.prop[r] = e.videoData[r]);
                jQuery(e).trigger(t)
            }, e.opt.fadeOnStartTime), e.hasData = !0) : jQuery.mbYTPlayer.apiKey ? jQuery.getJSON("https://www.googleapis.com/youtube/v3/videos?id=" + e.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function (r) {
                e.dataReceived = !0;
                let t = jQuery.Event("YTPChanged");
                t.time = e.currentTime, t.videoId = e.videoID, jQuery(e).trigger(t), r.items[0] ? (!function (r) {
                    e.videoData = {}, e.videoData.id = e.videoID, e.videoData.channelTitle = r.channelTitle, e.videoData.title = r.title, e.videoData.description = r.description.length < 400 ? r.description : r.description.substring(0, 400) + " ...", e.videoData.thumb_max = r.thumbnails.maxres ? r.thumbnails.maxres.url : null, e.videoData.thumb_high = r.thumbnails.high ? r.thumbnails.high.url : null, e.videoData.thumb_medium = r.thumbnails.medium ? r.thumbnails.medium.url : null, jQuery.mbStorage.set("YTPlayer_data_" + e.videoID, e.videoData)
                }(r.items[0].snippet), e.hasData = !0) : (e.videoData = {}, e.hasData = !1);
                let a = jQuery.Event("YTPData");
                a.prop = {};
                for (let r in e.videoData) a.prop[r] = e.videoData[r];
                jQuery(e).trigger(a)
            }).fail(function (r) {
                console.error("YT data error:: ", r), e.hasData = !1;
                let t = jQuery.Event("YTPChanged");
                t.time = e.currentTime, t.videoId = e.videoID, jQuery(e).trigger(t)
            }) : (setTimeout(function () {
                let r = jQuery.Event("YTPChanged");
                r.time = e.currentTime, r.videoId = e.videoID, jQuery(e).trigger(r)
            }, 10), e.videoData = null), e.opt.ratio = "auto" == e.opt.ratio ? 16 / 9 : e.opt.ratio, e.isPlayer && !e.opt.autoPlay && (e.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(e).append(e.loading), e.loading.fadeIn())
        },
        removeStoredData: function () {
            jQuery.mbStorage.remove()
        },
        getVideoData: function () {
            return this.get(0).videoData
        },
        getVideoID: function () {
            return this.get(0).videoID || !1
        },
        getPlaylistID: function () {
            return this.get(0).playlistID || !1
        },
        setVideoQuality: function (e) {
            let r = this.get(0), t = r.player.getCurrentTime();
            return jQuery(r).YTPPause(), r.opt.quality = e, r.player.setPlaybackQuality(e), r.player.seekTo(t), jQuery(r).YTPPlay(), this
        },
        getVideoQuality: function () {
            return this.get(0).player.getPlaybackQuality()
        },
        playlist: function (e, r, t) {
            let a = this.get(0);
            return a.isList = !0, r && (e = jQuery.shuffle(e)), a.videoID || (a.videos = e, a.videoCounter = 1, a.videoLength = e.length, jQuery(a).data("property", e[0]), jQuery(a).YTPlayer()), "function" == typeof t && jQuery(a).on("YTPChanged", function () {
                t(a)
            }), jQuery(a).on("YTPEnd", function () {
                jQuery(a).YTPPlayNext()
            }), this
        },
        playNext: function () {
            let e = this.get(0);
            return e.videoCounter++, e.videoCounter > e.videoLength && (e.videoCounter = 1), jQuery(e).YTPPlayIndex(e.videoCounter), this
        },
        playPrev: function () {
            let e = this.get(0);
            return e.videoCounter--, e.videoCounter <= 0 && (e.videoCounter = e.videoLength), jQuery(e).YTPPlayIndex(e.videoCounter), this
        },
        playIndex: function (e) {
            let r = this.get(0);
            r.checkForStartAt && (clearInterval(r.checkForStartAt), clearInterval(r.getState)), r.videoCounter = e, r.videoCounter >= r.videoLength && (r.videoCounter = r.videoLength);
            let t = r.videos[r.videoCounter - 1];
            return jQuery(r).YTPChangeVideo(t), this
        },
        changeVideo: function (e) {
            let r = this, t = r.get(0);
            t.opt.startAt = 0, t.opt.stopAt = 0, t.opt.mask = !1, t.opt.mute = !0, t.opt.autoPlay = !0, t.opt.addFilters = !1, t.opt.coverImage = !1, t.hasData = !1, t.hasChanged = !0, t.player.loopTime = void 0, e && jQuery.extend(t.opt, e), t.videoID = getYTPVideoID(t.opt.videoURL).videoID, t.opt.loop && "boolean" == typeof t.opt.loop && (t.opt.loop = 9999), t.wrapper.css({background: "none"}), jQuery(t.playerEl).CSSAnimate({opacity: 0}, t.opt.fadeOnStartTime, function () {
                jQuery.mbYTPlayer.getDataFromAPI(t), r.YTPGetPlayer().loadVideoById({
                    videoId: t.videoID,
                    suggestedQuality: t.opt.quality
                }), r.YTPPause(), r.optimizeDisplay(), t.checkForStartAt && (clearInterval(t.checkForStartAt), clearInterval(t.getState)), r.YTPCheckForState()
            });
            let a = jQuery.Event("YTPChangeVideo");
            return a.time = t.currentTime, jQuery(t).trigger(a), jQuery.mbYTPlayer.applyMask(t), this
        },
        getPlayer: function () {
            let e = this.get(0);
            return e.isReady ? e.player : null
        },
        playerDestroy: function () {
            let e = this.get(0);
            return e.isReady ? (ytp.YTAPIReady = !0, ytp.backgroundIsInited = !1, e.isInit = !1, e.videoID = null, e.isReady = !1, e.wrapper.remove(), jQuery("#controlBar_" + e.id).remove(), clearInterval(e.checkForStartAt), clearInterval(e.getState), this) : this
        },
        fullscreen: function (real) {
            let YTPlayer = this.get(0);
            void 0 === real && (real = eval(YTPlayer.opt.realFullscreen));
            let controls = jQuery("#controlBar_" + YTPlayer.id), fullScreenBtn = controls.find(".mb_OnlyYT"),
                videoWrapper = YTPlayer.isPlayer ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                let e = jQuery.mbBrowser.mozilla ? "mozfullscreenchange" : jQuery.mbBrowser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(e).on(e, function () {
                    RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen") ? jQuery(YTPlayer).trigger("YTPFullScreenStart") : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("YTPFullscreen"), videoWrapper.CSSAnimate({opacity: YTPlayer.opt.opacity}, YTPlayer.opt.fadeOnStartTime), videoWrapper.css({zIndex: 0}), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
                })
            }
            if (YTPlayer.isAlone) jQuery(document).off("mousemove.YTPlayer"), clearTimeout(YTPlayer.hideCursor), YTPlayer.overlay.css({cursor: "auto"}), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({opacity: YTPlayer.opt.opacity}, YTPlayer.opt.fadeOnStartTime), videoWrapper.css({zIndex: 0})), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1; else {
                function hideMouse() {
                    YTPlayer.overlay.css({cursor: "none"})
                }

                jQuery(document).on("mousemove.YTPlayer", function (e) {
                    YTPlayer.overlay.css({cursor: "auto"}), clearTimeout(YTPlayer.hideCursor), jQuery(e.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
                }), hideMouse(), real ? (videoWrapper.css({opacity: 0}), videoWrapper.addClass("YTPFullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function () {
                    videoWrapper.CSSAnimate({opacity: 1}, 2 * YTPlayer.opt.fadeOnStartTime), videoWrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
                }, YTPlayer.opt.fadeOnStartTime)) : videoWrapper.css({zIndex: 1e4}).CSSAnimate({opacity: 1}, 2 * YTPlayer.opt.fadeOnStartTime), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0
            }

            function RunPrefixMethod(e, r) {
                let t, a, o = ["webkit", "moz", "ms", "o", ""], i = 0;
                for (; i < o.length && !e[t];) {
                    if (t = r, "" == o[i] && (t = t.substr(0, 1).toLowerCase() + t.substr(1)), "undefined" != (a = typeof e[t = o[i] + t])) return o = [o[i]], "function" == a ? e[t]() : e[t];
                    i++
                }
            }

            function launchFullscreen(e) {
                RunPrefixMethod(e, "RequestFullScreen")
            }

            function cancelFullscreen() {
                (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
            }

            return this
        },
        toggleLoops: function () {
            let e = this.get(0), r = e.opt;
            return 1 == r.loop ? r.loop = 0 : (r.startAt ? e.player.seekTo(r.startAt) : e.player.playVideo(), r.loop = 1), this
        },
        play: function () {
            let e = this.get(0), r = jQuery(e);
            return e.isReady ? (setTimeout(function () {
                r.YTPSetAbundance(e.opt.abundance)
            }, 300), e.player.playVideo(), jQuery(e.playerEl).css({opacity: 1}), e.wrapper.css({backgroundImage: "none"}), e.wrapper.CSSAnimate({opacity: e.isAlone ? 1 : e.opt.opacity}, e.opt.fadeOnStartTime), jQuery("#controlBar_" + e.id).find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.pause), e.state = 1, this) : this
        },
        togglePlay: function (e) {
            let r = this.get(0);
            return r.isReady ? (1 == r.state ? this.YTPPause() : this.YTPPlay(), "function" == typeof e && e(r.state), this) : this
        },
        stop: function () {
            let e = this.get(0);
            return e.isReady ? (jQuery("#controlBar_" + e.id).find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play), e.player.stopVideo(), this) : this
        },
        pause: function () {
            let e = this.get(0);
            return e.isReady ? (e.opt.abundance < .2 && this.YTPSetAbundance(.2), e.player.pauseVideo(), e.state = 2, this) : this
        },
        seekTo: function (e) {
            let r = this.get(0);
            return r.isReady ? (r.player.seekTo(e, !0), this) : this
        },
        getPlaybackRate: function () {
            let e = this.get(0);
            return e.isReady ? e.player.getPlaybackRate() : this
        },
        setPlaybackRate: function (e) {
            let r = this.get(0);
            return r.isReady ? (r.player.setPlaybackRate(e), this) : this
        },
        setVolume: function (e) {
            let r = this.get(0);
            return r.isReady ? (r.opt.vol = e, this.YTPUnmute(), r.player.setVolume(r.opt.vol), r.volumeBar && r.volumeBar.length && r.volumeBar.updateSliderVal(e), this) : this
        },
        getVolume: function () {
            let e = this.get(0);
            return e.isReady ? e.player.getVolume() : this
        },
        toggleVolume: function () {
            let e = this.get(0);
            return e.isReady ? (e.isMute ? (jQuery.mbBrowser.mobile || this.YTPSetVolume(e.opt.vol), this.YTPUnmute()) : this.YTPMute(), this) : this
        },
        mute: function () {
            let e = this.get(0);
            if (!e.isReady) return this;
            if (e.isMute) return this;
            e.player.mute(), e.isMute = !0, e.player.setVolume(0), e.volumeBar && e.volumeBar.length && e.volumeBar.width() > 10 && e.volumeBar.updateSliderVal(0), jQuery("#controlBar_" + e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.unmute), jQuery(e).addClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.addClass("muted");
            let r = jQuery.Event("YTPMuted");
            return r.time = e.currentTime, e.preventTrigger || jQuery(e).trigger(r), this
        },
        unmute: function () {
            let e = this.get(0);
            if (!e.isReady) return this;
            if (!e.isMute) return this;
            e.player.unMute(), e.isMute = !1, jQuery(e).YTPSetVolume(e.opt.vol), e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(e.opt.vol > 10 ? e.opt.vol : 10), jQuery("#controlBar_" + e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.mute), jQuery(e).removeClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass("muted");
            let r = jQuery.Event("YTPUnmuted");
            return r.time = e.currentTime, e.preventTrigger || jQuery(e).trigger(r), this
        },
        applyFilter: function (e, r) {
            let t = this.get(0);
            if (!t.isReady) return this;
            t.filters[e].value = r, t.filtersEnabled && this.YTPEnableFilters()
        },
        applyFilters: function (e) {
            let r = this, t = r.get(0);
            if (!t.isReady) return jQuery(t).on("YTPReady", function () {
                r.YTPApplyFilters(e)
            }), this;
            for (let t in e) r.YTPApplyFilter(t, e[t]);
            r.trigger("YTPFiltersApplied")
        },
        toggleFilter: function (e, r) {
            let t = this.get(0);
            return t.isReady ? (t.filters[e].value ? t.filters[e].value = 0 : t.filters[e].value = r, t.filtersEnabled && jQuery(t).YTPEnableFilters(), this) : this
        },
        toggleFilters: function (e) {
            let r = this.get(0);
            return r.isReady ? (r.filtersEnabled ? (jQuery(r).trigger("YTPDisableFilters"), jQuery(r).YTPDisableFilters()) : (jQuery(r).YTPEnableFilters(), jQuery(r).trigger("YTPEnableFilters")), "function" == typeof e && e(r.filtersEnabled), this) : this
        },
        disableFilters: function () {
            let e = this.get(0);
            if (!e.isReady) return this;
            let r = jQuery(e.playerEl);
            return r.css("-webkit-filter", ""), r.css("filter", ""), e.filtersEnabled = !1, this
        },
        enableFilters: function () {
            let e = this.get(0);
            if (!e.isReady) return this;
            let r = jQuery(e.playerEl), t = "";
            for (let r in e.filters) e.filters[r].value && (t += r.replace("_", "-") + "(" + e.filters[r].value + e.filters[r].unit + ") ");
            return r.css("-webkit-filter", t), r.css("filter", t), e.filtersEnabled = !0, this
        },
        removeFilter: function (e, r) {
            let t = this, a = t.get(0);
            if (!a.isReady) return this;
            if ("function" == typeof e && (r = e, e = null), e) t.YTPApplyFilter(e, 0), "function" == typeof r && r(e); else {
                for (let e in a.filters) a.filters.hasOwnProperty(e) && (t.YTPApplyFilter(e, 0), "function" == typeof r && r(e));
                a.filters = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaultFilters)
            }
            let o = jQuery.Event("YTPFiltersApplied");
            return t.trigger(o), this
        },
        getFilters: function () {
            let e = this.get(0);
            return e.isReady ? e.filters : this
        },
        addMask: function (e) {
            let r = this.get(0);
            e || (e = r.actualMask);
            let t = jQuery("<img/>").attr("src", e).on("load", function () {
                r.overlay.CSSAnimate({opacity: 0}, r.opt.fadeOnStartTime, function () {
                    r.hasMask = !0, t.remove(), r.overlay.css({
                        backgroundImage: "url(" + e + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover"
                    }), r.overlay.CSSAnimate({opacity: 1}, r.opt.fadeOnStartTime)
                })
            });
            return this
        },
        removeMask: function () {
            let e = this.get(0);
            return e.overlay.CSSAnimate({opacity: 0}, e.opt.fadeOnStartTime, function () {
                e.hasMask = !1, e.overlay.css({
                    backgroundImage: "",
                    backgroundRepeat: "",
                    backgroundPosition: "",
                    backgroundSize: ""
                }), e.overlay.CSSAnimate({opacity: 1}, e.opt.fadeOnStartTime)
            }), this
        },
        applyMask: function (e) {
            let r = jQuery(e);
            if (r.off("YTPTime.mask"), e.opt.mask) if ("string" == typeof e.opt.mask) r.YTPAddMask(e.opt.mask), e.actualMask = e.opt.mask; else if ("object" == typeof e.opt.mask) {
                for (let r in e.opt.mask) e.opt.mask[r] && (img = jQuery("<img/>").attr("src", e.opt.mask[r]));
                e.opt.mask[0] && r.YTPAddMask(e.opt.mask[0]), r.on("YTPTime.mask", function (t) {
                    for (let a in e.opt.mask) t.time == a && (e.opt.mask[a] ? (r.YTPAddMask(e.opt.mask[a]), e.actualMask = e.opt.mask[a]) : r.YTPRemoveMask())
                })
            }
        },
        toggleMask: function () {
            let e = this.get(0), r = jQuery(e);
            return e.hasMask ? r.YTPRemoveMask() : r.YTPAddMask(), this
        },
        manageProgress: function () {
            let e = this.get(0), r = jQuery("#controlBar_" + e.id), t = r.find(".mb_YTPProgress"),
                a = r.find(".mb_YTPLoaded"), o = r.find(".mb_YTPseekbar"), i = t.outerWidth(),
                n = Math.floor(e.player.getCurrentTime()), l = Math.floor(e.player.getDuration()), s = n * i / l,
                u = 100 * e.player.getVideoLoadedFraction();
            return a.css({left: 0, width: u + "%"}), o.css({left: 0, width: s}), {totalTime: l, currentTime: n}
        },
        buildControls: function (YTPlayer) {
            if (jQuery("#controlBar_" + YTPlayer.id).remove(), !YTPlayer.opt.showControls) return void (YTPlayer.controlBar = !1);
            if (YTPlayer.opt.showYTLogo = YTPlayer.opt.showYTLogo || YTPlayer.opt.printUrl, jQuery("#controlBar_" + YTPlayer.id).length) return;
            YTPlayer.controlBar = jQuery("<div/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                whiteSpace: "noWrap",
                position: YTPlayer.isBackground ? "fixed" : "absolute",
                zIndex: YTPlayer.isBackground ? 1e4 : 1e3
            }).hide().on("click", function (e) {
                e.stopPropagation()
            });
            let buttonBar = jQuery("<div/>").addClass("buttonBar"),
                playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlayPause ytpicon").on("click", function (e) {
                    e.stopPropagation(), jQuery(YTPlayer).YTPTogglePlay()
                }),
                MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").on("click", function (e) {
                    e.stopPropagation(), jQuery(YTPlayer).YTPToggleVolume()
                }), volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({display: "inline-block"});
            YTPlayer.volumeBar = volumeBar;
            let idx = jQuery("<span/>").addClass("mb_YTPTime"),
                vURL = YTPlayer.opt.videoURL ? YTPlayer.opt.videoURL : "";
            vURL.indexOf("http") < 0 && (vURL = "https://www.youtube.com/watch?v=" + YTPlayer.opt.videoURL);
            let movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function () {
                    window.open(vURL, "viewOnYT")
                }),
                onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function (e) {
                    e.stopPropagation(), jQuery(YTPlayer).YTPFullscreen(YTPlayer.opt.realFullscreen)
                }),
                progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").on("click", function (e) {
                    e.stopPropagation(), timeBar.css({width: e.clientX - timeBar.offset().left}), YTPlayer.timeW = e.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({width: 0});
                    let r = Math.floor(YTPlayer.player.getDuration());
                    YTPlayer.goto = timeBar.outerWidth() * r / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({width: 0})
                }), loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"),
                timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
            progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), YTPlayer.opt.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realFullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({
                initialval: YTPlayer.opt.vol,
                scale: 100,
                orientation: "h",
                callback: function (e) {
                    0 == e.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(e.value), YTPlayer.isMute || (YTPlayer.opt.vol = e.value)
                }
            })
        },
        changeCoverImage: function (e) {
            let r = this.get(0);
            if (r.opt.coverImage || r.orig_containment_background) {
                let t = e || (r.opt.coverImage ? "url(" + r.opt.coverImage + ") center center" : r.orig_containment_background);
                t && r.opt.containment.css({
                    background: t,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed"
                })
            }
            return this
        },
        checkForState: function () {
            let YTPlayer = this.get(0), $YTPlayer = jQuery(YTPlayer);
            clearInterval(YTPlayer.getState);
            let interval = 100;
            if (!jQuery.contains(document, YTPlayer)) return $YTPlayer.YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt);
            jQuery.mbYTPlayer.checkForStart(YTPlayer), YTPlayer.getState = setInterval(function () {
                let $YTPlayer = jQuery(YTPlayer);
                if (!YTPlayer.isReady) return;
                let prog = jQuery(YTPlayer).YTPManageProgress(),
                    stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.currentTime != prog.currentTime) {
                    let e = jQuery.Event("YTPTime");
                    e.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(e)
                }
                if (YTPlayer.currentTime = prog.currentTime, YTPlayer.totalTime = YTPlayer.player.getDuration(), 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, YTPlayer.preventTrigger = !0, $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause())), YTPlayer.opt.playOnlyIfVisible) {
                    let e = jQuery.mbYTPlayer.isOnScreen(YTPlayer, YTPlayer.opt.onScreenPercentage);
                    e || 1 != YTPlayer.state ? e && !YTPlayer.isOnScreen && (YTPlayer.isOnScreen = !0, YTPlayer.player.playVideo()) : (YTPlayer.isOnScreen = !1, $YTPlayer.YTPPause())
                }
                if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), YTPlayer.player.getPlayerState() > 0 && (parseFloat(YTPlayer.player.getDuration() - YTPlayer.opt.fadeOnStartTime / 1e3) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) >= stopAt)) {
                    if (YTPlayer.isEnded) return;
                    if (YTPlayer.isEnded = !0, setTimeout(function () {
                        YTPlayer.isEnded = !1
                    }, 1e3), YTPlayer.isList) {
                        if (!YTPlayer.opt.loop || YTPlayer.opt.loop > 0 && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1) {
                            YTPlayer.player.loopTime = void 0, clearInterval(YTPlayer.getState);
                            let e = jQuery.Event("YTPEnd");
                            return e.time = YTPlayer.currentTime, void jQuery(YTPlayer).trigger(e)
                        }
                    } else if (!YTPlayer.opt.loop || YTPlayer.opt.loop > 0 && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1) return YTPlayer.player.loopTime = void 0, YTPlayer.state = 2, $YTPlayer.changeCoverImage(YTPlayer), jQuery(YTPlayer).YTPPause(), void YTPlayer.wrapper.CSSAnimate({opacity: 0}, YTPlayer.opt.fadeOnStartTime, function () {
                        YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play), $YTPlayer.changeCoverImage();
                        let e = jQuery.Event("YTPEnd");
                        e.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(e), YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0)
                    });
                    YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1, YTPlayer.opt.startAt = YTPlayer.opt.startAt || 1, YTPlayer.preventTrigger = !0, YTPlayer.state = 2, YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0)
                }
            }, interval)
        },
        checkForStart: function (YTPlayer) {
            let $YTPlayer = jQuery(YTPlayer);
            if (!jQuery.contains(document, YTPlayer)) return void $YTPlayer.YTPPlayerDestroy();
            if (jQuery.mbYTPlayer.buildControls(YTPlayer), YTPlayer.overlay) if (YTPlayer.opt.addRaster) {
                let e = "dot" == YTPlayer.opt.addRaster ? "raster-dot" : "raster";
                YTPlayer.overlay.addClass(YTPlayer.isRetina ? e + " retina" : e)
            } else YTPlayer.overlay.removeClass(function (e, r) {
                let t = r.split(" "), a = [];
                return jQuery.each(t, function (e, r) {
                    /raster.*/.test(r) && a.push(r)
                }), a.push("retina"), a.join(" ")
            });
            YTPlayer.preventTrigger = !0, YTPlayer.state = 2, YTPlayer.preventTrigger = !0, YTPlayer.player.mute(), YTPlayer.player.playVideo(), YTPlayer.isStarting = !0;
            let startAt = YTPlayer.start_from_last ? YTPlayer.start_from_last : YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
            return YTPlayer.preventTrigger = !0, YTPlayer.checkForStartAt = setInterval(function () {
                YTPlayer.player.mute(), YTPlayer.player.seekTo(startAt, !0);
                let canPlayVideo = YTPlayer.player.getVideoLoadedFraction() >= startAt / YTPlayer.player.getDuration();
                if (jQuery.browser.mobile && (canPlayVideo = !0), YTPlayer.player.getDuration() > 0 && YTPlayer.player.getCurrentTime() >= startAt && canPlayVideo) {
                    YTPlayer.start_from_last = null, YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause(), clearInterval(YTPlayer.checkForStartAt), "function" == typeof YTPlayer.opt.onReady && YTPlayer.opt.onReady(YTPlayer), YTPlayer.isReady = !0, $YTPlayer.YTPRemoveFilter(), YTPlayer.opt.addFilters ? $YTPlayer.YTPApplyFilters(YTPlayer.opt.addFilters) : $YTPlayer.YTPApplyFilters(), $YTPlayer.YTPEnableFilters();
                    let YTPready = jQuery.Event("YTPReady");
                    if (YTPready.time = YTPlayer.currentTime, $YTPlayer.trigger(YTPready), YTPlayer.state = 2, YTPlayer.opt.mute ? $YTPlayer.YTPMute() : YTPlayer.opt.autoPlay ? (console.debug("We muted the audio to make the video 'auto-play' according with the latest vendor policy. The audio will unmute at the first user interaction with the page"), YTPlayer.player.mute(), YTPlayer.forcedMuted = !0, jQuery(document).on("mousedown.YTPstartAudio", function () {
                        YTPlayer.forcedMuted && (console.debug("AAAAAAA"), YTPlayer.player.unMute(), YTPlayer.forcedMuted = !1, jQuery(document).off("mousedown.YTPstartAudio"))
                    }), jQuery(window).on("scroll", function () {
                        console.debug("AAAAA")
                    })) : YTPlayer.player.unMute(), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) ? _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]) : "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()), YTPlayer.opt.autoPlay) {
                        let e = jQuery.Event("YTPStart");
                        e.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(e), YTPlayer.isStarting = !1, "mac" === jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && jQuery("body").one("mousedown.YTPstart", function () {
                            $YTPlayer.YTPPlay()
                        }), $YTPlayer.YTPPlay(), console.timeEnd(YTPTimerLabels.startPlaying)
                    } else YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause(), YTPlayer.start_from_last && YTPlayer.player.seekTo(startAt, !0), setTimeout(function () {
                        YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause(), YTPlayer.isPlayer || (YTPlayer.opt.coverImage ? (YTPlayer.wrapper.css({opacity: 0}), setTimeout(function () {
                            $YTPlayer.changeCoverImage()
                        }, YTPlayer.opt.fadeOnStartTime)) : (jQuery(YTPlayer.playerEl).CSSAnimate({opacity: 1}, YTPlayer.opt.fadeOnStartTime), YTPlayer.wrapper.CSSAnimate({opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity}, YTPlayer.opt.fadeOnStartTime))), YTPlayer.isStarting = !1
                    }, 500), YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
                    YTPlayer.isPlayer && !YTPlayer.opt.autoPlay && YTPlayer.loading && YTPlayer.loading.length && (YTPlayer.loading.html("Ready"), setTimeout(function () {
                        YTPlayer.loading.fadeOut()
                    }, 100)), YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.slideDown(1e3)
                }
                "mac" === jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && (YTPlayer.player.playVideo(), startAt >= 0 && YTPlayer.player.seekTo(startAt, !0))
            }, 100), $YTPlayer
        },
        getTime: function () {
            let e = this.get(0);
            return jQuery.mbYTPlayer.formatTime(e.currentTime)
        },
        getTotalTime: function () {
            let e = this.get(0);
            return jQuery.mbYTPlayer.formatTime(e.totalTime)
        },
        formatTime: function (e) {
            let r = Math.floor(e / 60), t = Math.floor(e - 60 * r);
            return (r <= 9 ? "0" + r : r) + " : " + (t <= 9 ? "0" + t : t)
        },
        setAnchor: function (e) {
            this.optimizeDisplay(e)
        },
        getAnchor: function () {
            return this.get(0).opt.anchor
        },
        setAbundance: function (e, r) {
            let t = this.get(0);
            return r && (t.opt.abundance = e), this.optimizeDisplay(t.opt.anchor, e), this
        },
        getAbundance: function () {
            return this.get(0).opt.abundance
        },
        setOption: function (e, r) {
            return this.get(0).opt[e] = r, this
        }
    }, jQuery.fn.optimizeDisplay = function (anchor, abundanceX) {
        let YTPlayer = this.get(0), vid = {}, el = YTPlayer.wrapper, iframe = jQuery(YTPlayer.playerEl);
        YTPlayer.opt.anchor = anchor || YTPlayer.opt.anchor, YTPlayer.opt.anchor = "undefined " != typeof YTPlayer.opt.anchor ? YTPlayer.opt.anchor : "center,center";
        let YTPAlign = YTPlayer.opt.anchor.split(","), ab = abundanceX || YTPlayer.opt.abundance;
        if (YTPlayer.opt.optimizeDisplay) {
            let abundance = el.height() * ab, win = {};
            win.width = el.outerWidth(), win.height = el.outerHeight() + abundance, YTPlayer.opt.ratio = "auto" === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio, YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio), vid.width = win.width + abundance, vid.height = Math.ceil(vid.width / YTPlayer.opt.ratio), vid.marginTop = Math.ceil(-(vid.height - win.height + abundance) / 2), vid.marginLeft = -abundance / 2;
            let lowest = vid.height < win.height;
            lowest && (vid.height = win.height + abundance, vid.width = Math.ceil(vid.height * YTPlayer.opt.ratio), vid.marginTop = -abundance / 2, vid.marginLeft = Math.ceil(-(vid.width - win.width) / 2));
            for (let e in YTPAlign) if (YTPAlign.hasOwnProperty(e)) {
                let r = YTPAlign[e].replace(/ /g, "");
                switch (r) {
                    case"top":
                        vid.marginTop = -abundance;
                        break;
                    case"bottom":
                        vid.marginTop = Math.ceil(-(vid.height - win.height) - abundance / 2);
                        break;
                    case"left":
                        vid.marginLeft = -abundance;
                        break;
                    case"right":
                        vid.marginLeft = Math.ceil(-(vid.width - win.width) + abundance / 2)
                }
            }
        } else vid.width = "100%", vid.height = "100%", vid.marginTop = 0, vid.marginLeft = 0;
        iframe.css({
            width: vid.width,
            height: vid.height,
            marginTop: vid.marginTop,
            marginLeft: vid.marginLeft,
            maxWidth: "initial"
        })
    }, jQuery.shuffle = function (e) {
        let r = e.slice(), t = r.length, a = t;
        for (; a--;) {
            let e = parseInt(Math.random() * t), o = r[a];
            r[a] = r[e], r[e] = o
        }
        return r
    }, jQuery.fn.unselectable = function () {
        return this.each(function () {
            jQuery(this).css({
                "-moz-user-select": "none",
                "-webkit-user-select": "none",
                "user-select": "none"
            }).attr("unselectable", "on")
        })
    }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPCheckForState = jQuery.mbYTPlayer.checkForState, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPGetPlaylistID = jQuery.mbYTPlayer.getPlaylistID, jQuery.fn.YTPChangeVideo = jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeVideo, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPGetPlaybackRate = jQuery.mbYTPlayer.getPlaybackRate, jQuery.fn.YTPSetPlaybackRate = jQuery.mbYTPlayer.setPlaybackRate, jQuery.fn.changeCoverImage = jQuery.mbYTPlayer.changeCoverImage, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPGetVolume = jQuery.mbYTPlayer.getVolume, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPGetVideoQuality = jQuery.mbYTPlayer.getVideoQuality, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters, jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime, jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime, jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask, jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask, jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask, jQuery.fn.YTPGetAbundance = jQuery.mbYTPlayer.getAbundance, jQuery.fn.YTPSetAbundance = jQuery.mbYTPlayer.setAbundance, jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor, jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor, jQuery.fn.YTPSetOption = jQuery.mbYTPlayer.setOption
}(jQuery, ytp);
var nAgt = navigator.userAgent;

function isTouchSupported() {
    var e = nAgt.msMaxTouchPoints, r = "ontouchstart" in document.createElement("div");
    return !(!e && !r)
}

jQuery.browser = jQuery.browser || {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.edge = !1, jQuery.browser.ua = nAgt;
var getOS = function () {
    var e = {version: "Unknown version", name: "Unknown OS"};
    return -1 != navigator.appVersion.indexOf("Win") && (e.name = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && 0 > navigator.appVersion.indexOf("Mobile") && (e.name = "Mac"), -1 != navigator.appVersion.indexOf("Linux") && (e.name = "Linux"), /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (e.version = /Mac OS X ([\._\d]+)/.exec(nAgt)[1], e.version = e.version.replace(/_/g, ".").substring(0, 5)), /Windows/.test(nAgt) && (e.version = "Unknown.Unknown"), /Windows NT 5.1/.test(nAgt) && (e.version = "5.1"), /Windows NT 6.0/.test(nAgt) && (e.version = "6.0"), /Windows NT 6.1/.test(nAgt) && (e.version = "6.1"), /Windows NT 6.2/.test(nAgt) && (e.version = "6.2"), /Windows NT 10.0/.test(nAgt) && (e.version = "10.0"), /Linux/.test(nAgt) && /Linux/.test(nAgt) && (e.version = "Unknown.Unknown"), e.name = e.name.toLowerCase(), e.major_version = "Unknown", e.minor_version = "Unknown", "Unknown.Unknown" != e.version && (e.major_version = parseFloat(e.version.split(".")[0]), e.minor_version = parseFloat(e.version.split(".")[1])), e
}, nameOffset, verOffset, ix;
if (jQuery.browser.os = getOS(), jQuery.browser.hasTouch = isTouchSupported(), jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10), -1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)); else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4); else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5); else if (-1 != nAgt.indexOf("Trident")) {
    jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
    var start = nAgt.indexOf("rv:") + 3, end = start + 4;
    jQuery.browser.fullVersion = nAgt.substring(start, end)
} else -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));

function uncamel(e) {
    return e.replace(/([A-Z])/g, function (e) {
        return "-" + e.toLowerCase()
    })
}

function setUnit(e, r) {
    return "string" != typeof e || e.match(/^[\-0-9\.]+jQuery/) ? "" + e + r : e
}

function setFilter(e, r, t) {
    var a = uncamel(r), o = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
    e[o + "filter"] = e[o + "filter"] || "", t = setUnit(t > jQuery.CSS.filters[r].max ? jQuery.CSS.filters[r].max : t, jQuery.CSS.filters[r].unit), e[o + "filter"] += a + "(" + t + ") ", delete e[r]
}

-1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion, jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(), jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), jQuery.mbBrowser = jQuery.browser, jQuery.browser.versionCompare = function (e, r) {
    if ("stringstring" != typeof e + typeof r) return !1;
    for (var t = e.split("."), a = r.split("."), o = 0, i = Math.max(t.length, a.length); o < i; o++) {
        if (t[o] && !a[o] && 0 < parseInt(t[o]) || parseInt(t[o]) > parseInt(a[o])) return 1;
        if (a[o] && !t[o] && 0 < parseInt(a[o]) || parseInt(t[o]) < parseInt(a[o])) return -1
    }
    return 0
}, jQuery.support.CSStransition = function () {
    var e = (document.body || document.documentElement).style;
    return void 0 !== e.transition || void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.MsTransition || void 0 !== e.OTransition
}(), jQuery.CSS = {
    name: "mb.CSSAnimate",
    author: "Matteo Bicocchi",
    version: "2.0.0",
    transitionEnd: "transitionEnd",
    sfx: "",
    filters: {
        blur: {min: 0, max: 100, unit: "px"},
        brightness: {min: 0, max: 400, unit: "%"},
        contrast: {min: 0, max: 400, unit: "%"},
        grayscale: {min: 0, max: 100, unit: "%"},
        hueRotate: {min: 0, max: 360, unit: "deg"},
        invert: {min: 0, max: 100, unit: "%"},
        saturate: {min: 0, max: 400, unit: "%"},
        sepia: {min: 0, max: 100, unit: "%"}
    },
    normalizeCss: function (e) {
        var r = jQuery.extend(!0, {}, e);
        for (var t in jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-"), jQuery.CSS.sfx = "", r) {
            if ("transform" === t && (r[jQuery.CSS.sfx + "transform"] = r[t], delete r[t]), "transform-origin" === t && (r[jQuery.CSS.sfx + "transform-origin"] = e[t], delete r[t]), "filter" !== t || jQuery.browser.mozilla || (r[jQuery.CSS.sfx + "filter"] = e[t], delete r[t]), "blur" === t && setFilter(r, "blur", e[t]), "brightness" === t && setFilter(r, "brightness", e[t]), "contrast" === t && setFilter(r, "contrast", e[t]), "grayscale" === t && setFilter(r, "grayscale", e[t]), "hueRotate" === t && setFilter(r, "hueRotate", e[t]), "invert" === t && setFilter(r, "invert", e[t]), "saturate" === t && setFilter(r, "saturate", e[t]), "sepia" === t && setFilter(r, "sepia", e[t]), "x" === t) {
                var a = jQuery.CSS.sfx + "transform";
                r[a] = r[a] || "", r[a] += " translateX(" + setUnit(e[t], "px") + ")", delete r[t]
            }
            "y" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " translateY(" + setUnit(e[t], "px") + ")", delete r[t]), "z" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " translateZ(" + setUnit(e[t], "px") + ")", delete r[t]), "rotate" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " rotate(" + setUnit(e[t], "deg") + ")", delete r[t]), "rotateX" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " rotateX(" + setUnit(e[t], "deg") + ")", delete r[t]), "rotateY" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " rotateY(" + setUnit(e[t], "deg") + ")", delete r[t]), "rotateZ" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " rotateZ(" + setUnit(e[t], "deg") + ")", delete r[t]), "scale" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " scale(" + setUnit(e[t], "") + ")", delete r[t]), "scaleX" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " scaleX(" + setUnit(e[t], "") + ")", delete r[t]), "scaleY" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " scaleY(" + setUnit(e[t], "") + ")", delete r[t]), "scaleZ" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " scaleZ(" + setUnit(e[t], "") + ")", delete r[t]), "skew" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " skew(" + setUnit(e[t], "deg") + ")", delete r[t]), "skewX" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " skewX(" + setUnit(e[t], "deg") + ")", delete r[t]), "skewY" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " skewY(" + setUnit(e[t], "deg") + ")", delete r[t]), "perspective" === t && (r[a = jQuery.CSS.sfx + "transform"] = r[a] || "", r[a] += " perspective(" + setUnit(e[t], "px") + ")", delete r[t])
        }
        return r
    },
    getProp: function (e) {
        var r, t = [];
        for (r in e) 0 > t.indexOf(r) && t.push(uncamel(r));
        return t.join(",")
    },
    animate: function (e, r, t, a, o) {
        return this.each(function () {
            function i() {
                n.called = !0, n.CSSAIsRunning = !1, l.off(jQuery.CSS.transitionEnd + "." + n.id), clearTimeout(n.timeout), l.css(jQuery.CSS.sfx + "transition", ""), "function" == typeof o && o.apply(n), "function" == typeof n.CSSqueue && (n.CSSqueue(), n.CSSqueue = null)
            }

            var n = this, l = jQuery(this);
            n.id = n.id || "CSSA_" + (new Date).getTime();
            var s = s || {type: "noEvent"};
            if (n.CSSAIsRunning && n.eventType == s.type && !jQuery.browser.msie && 9 >= jQuery.browser.version) n.CSSqueue = function () {
                l.CSSAnimate(e, r, t, a, o)
            }; else if (n.CSSqueue = null, n.eventType = s.type, 0 !== l.length && e) {
                if (e = jQuery.normalizeCss(e), n.CSSAIsRunning = !0, "function" == typeof r && (o = r, r = jQuery.fx.speeds._default), "function" == typeof t && (a = t, t = 0), "string" == typeof t && (o = t, t = 0), "function" == typeof a && (o = a, a = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof r) for (var u in jQuery.fx.speeds) {
                    if (r == u) {
                        r = jQuery.fx.speeds[u];
                        break
                    }
                    r = jQuery.fx.speeds._default
                }
                if (r || (r = jQuery.fx.speeds._default), "string" == typeof o && (a = o, o = null), jQuery.support.CSStransition) {
                    var y = {
                        default: "ease",
                        in: "ease-in",
                        out: "ease-out",
                        "in-out": "ease-in-out",
                        snap: "cubic-bezier(0,1,.5,1)",
                        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                        easeInOutExpo: "cubic-bezier(1,0,0,1)",
                        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                        easeInSine: "cubic-bezier(.47,0,.745,.715)",
                        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                    };
                    y[a] && (a = y[a]), l.off(jQuery.CSS.transitionEnd + "." + n.id), y = jQuery.CSS.getProp(e);
                    var d = {};
                    jQuery.extend(d, e), d[jQuery.CSS.sfx + "transition-property"] = y, d[jQuery.CSS.sfx + "transition-duration"] = r + "ms", d[jQuery.CSS.sfx + "transition-delay"] = t + "ms", d[jQuery.CSS.sfx + "transition-timing-function"] = a, setTimeout(function () {
                        l.one(jQuery.CSS.transitionEnd + "." + n.id, i), l.css(d)
                    }, 1), n.timeout = setTimeout(function () {
                        n.called || !o ? (n.called = !1, n.CSSAIsRunning = !1) : (l.css(jQuery.CSS.sfx + "transition", ""), o.apply(n), n.CSSAIsRunning = !1, "function" == typeof n.CSSqueue && (n.CSSqueue(), n.CSSqueue = null))
                    }, r + t + 10)
                } else {
                    for (y in e) "transform" === y && delete e[y], "filter" === y && delete e[y], "transform-origin" === y && delete e[y], "auto" === e[y] && delete e[y], "x" === y && (s = e[y], e[u = "left"] = s, delete e[y]), "y" === y && (s = e[y], e[u = "top"] = s, delete e[y]), "-ms-transform" !== y && "-ms-filter" !== y || delete e[y];
                    l.delay(t).animate(e, r, o)
                }
            }
        })
    }
}, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function (e) {
    return this.each(function () {
        var r = jQuery(this), t = jQuery.normalizeCss(e);
        r.css(t)
    })
}, function (e) {
    e.simpleSlider = {
        defaults: {initialval: 0, maxval: 100, orientation: "h", readonly: !1, callback: !1},
        events: {
            start: e.browser.mobile ? "touchstart" : "mousedown",
            end: e.browser.mobile ? "touchend" : "mouseup",
            move: e.browser.mobile ? "touchmove" : "mousemove"
        },
        init: function (r) {
            return this.each(function () {
                var t = this, a = e(t);
                a.addClass("simpleSlider"), t.opt = {}, e.extend(t.opt, e.simpleSlider.defaults, r), e.extend(t.opt, a.data()), console.debug(a.data());
                var o = "h" == t.opt.orientation ? "horizontal" : "vertical",
                    i = e("<div/>").addClass("level").addClass(o);
                a.prepend(i), t.level = i, a.css({cursor: "default"}), "auto" == t.opt.maxval && (t.opt.maxval = e(t).outerWidth()), a.updateSliderVal(), t.opt.readonly || (a.on(e.simpleSlider.events.start, function (r) {
                    e.browser.mobile && (r = r.changedTouches[0]), t.canSlide = !0, a.updateSliderVal(r), "h" == t.opt.orientation ? a.css({cursor: "col-resize"}) : a.css({cursor: "row-resize"}), t.lastVal = t.val, e.browser.mobile || (r.preventDefault(), r.stopPropagation())
                }), e(document).on(e.simpleSlider.events.move, function (r) {
                    e.browser.mobile && (r = r.changedTouches[0]), t.canSlide && (e(document).css({cursor: "default"}), a.updateSliderVal(r), e.browser.mobile || (r.preventDefault(), r.stopPropagation()))
                }).on(e.simpleSlider.events.end, function () {
                    e(document).css({cursor: "auto"}), t.canSlide = !1, a.css({cursor: "auto"})
                }))
            })
        },
        updateSliderVal: function (r) {
            var t = this.get(0);
            if (t.opt) {
                t.opt.initialval = "number" == typeof t.opt.initialval ? t.opt.initialval : t.opt.initialval(t);
                var a = e(t).outerWidth(), o = e(t).outerHeight();
                t.x = "object" == typeof r ? r.clientX + document.body.scrollLeft - this.offset().left : "number" == typeof r ? r * a / t.opt.maxval : t.opt.initialval * a / t.opt.maxval, t.y = "object" == typeof r ? r.clientY + document.body.scrollTop - this.offset().top : "number" == typeof r ? (t.opt.maxval - t.opt.initialval - r) * o / t.opt.maxval : t.opt.initialval * o / t.opt.maxval, t.y = this.outerHeight() - t.y, t.scaleX = t.x * t.opt.maxval / a, t.scaleY = t.y * t.opt.maxval / o, t.outOfRangeX = t.scaleX > t.opt.maxval ? t.scaleX - t.opt.maxval : t.scaleX < 0 ? t.scaleX : 0, t.outOfRangeY = t.scaleY > t.opt.maxval ? t.scaleY - t.opt.maxval : t.scaleY < 0 ? t.scaleY : 0, t.outOfRange = "h" == t.opt.orientation ? t.outOfRangeX : t.outOfRangeY, t.value = void 0 !== r ? "h" == t.opt.orientation ? t.x >= this.outerWidth() ? t.opt.maxval : t.x <= 0 ? 0 : t.scaleX : t.y >= this.outerHeight() ? t.opt.maxval : t.y <= 0 ? 0 : t.scaleY : "h" == t.opt.orientation ? t.scaleX : t.scaleY, "h" == t.opt.orientation ? t.level.width(i(t.x, a) + "%") : t.level.height(i(t.y, o)), t.lastVal === t.value && ("h" === t.opt.orientation && (t.x >= this.outerWidth() || t.x <= 0) || "h" !== t.opt.orientation && (t.y >= this.outerHeight() || t.y <= 0)) || ("function" == typeof t.opt.callback && t.opt.callback(t), t.lastVal = t.value)
            }

            function i(e, r) {
                return Math.floor(100 * e / r)
            }
        }
    }, e.fn.simpleSlider = e.simpleSlider.init, e.fn.updateSliderVal = e.simpleSlider.updateSliderVal
}(jQuery), function (e) {
    e.mbCookie = {
        set: function (e, r, t, a) {
            "object" == typeof r && (r = JSON.stringify(r)), a = a ? "; domain=" + a : "";
            var o = new Date, i = "";
            0 < t && (o.setTime(o.getTime() + 864e5 * t), i = "; expires=" + o.toGMTString()), document.cookie = e + "=" + r + i + "; path=/" + a
        }, get: function (e) {
            e += "=";
            for (var r = document.cookie.split(";"), t = 0; t < r.length; t++) {
                for (var a = r[t]; " " == a.charAt(0);) a = a.substring(1, a.length);
                if (0 == a.indexOf(e)) try {
                    return JSON.parse(a.substring(e.length, a.length))
                } catch (r) {
                    return a.substring(e.length, a.length)
                }
            }
            return null
        }, remove: function (r) {
            e.mbCookie.set(r, "", -1)
        }
    }, e.mbStorage = {
        set: function (e, r) {
            "object" == typeof r && (r = JSON.stringify(r)), localStorage.setItem(e, r)
        }, get: function (e) {
            if (!localStorage[e]) return null;
            try {
                return JSON.parse(localStorage[e])
            } catch (r) {
                return localStorage[e]
            }
        }, remove: function (e) {
            e ? localStorage.removeItem(e) : localStorage.clear()
        }
    }
}(jQuery);


/*----------------------------
    Mailchimp Ajax JS
------------------------------*/
/*!
    Mailchimp Ajax Submit
    jQuery Plugin
    Author: Siddharth Doshi
*/
!function (a) {
    "use strict";
    a.ajaxChimp = {
        responses: {
            "We have sent you a confirmation email": 0,
            "Please enter a value": 1,
            "An email address must contain a single @": 2,
            "The domain portion of the email address is invalid (the portion after the @: )": 3,
            "The username portion of the email address is invalid (the portion before the @: )": 4,
            "This email address looks fake or invalid. Please enter a real email address": 5
        }, translations: {en: null}, init: function (e, s) {
            a(e).ajaxChimp(s)
        }
    }, a.fn.ajaxChimp = function (e) {
        return a(this).each(function (s, n) {
            var i = a(n), t = i.find("input[type=email]"), r = i.find("label[for=" + t.attr("id") + "]"),
                l = a.extend({url: i.attr("action"), language: "en"}, e),
                o = l.url.replace("/post?", "/post-json?").concat("&c=?");
            i.attr("novalidate", "true"), t.attr("name", "EMAIL"), i.submit(function () {
                var e;
                var s = {}, n = i.serializeArray();
                a.each(n, function (a, e) {
                    s[e.name] = e.value
                }), a.ajax({
                    url: o, data: s, success: function (s) {
                        if ("success" === s.result) e = "We have sent you a confirmation email", r.removeClass("error").addClass("valid"), t.removeClass("error").addClass("valid"); else {
                            t.removeClass("valid").addClass("error"), r.removeClass("valid").addClass("error");
                            try {
                                var n = s.msg.split(" - ", 2);
                                void 0 === n[1] ? e = s.msg : parseInt(n[0], 10).toString() === n[0] ? (n[0], e = n[1]) : e = s.msg
                            } catch (a) {
                                e = s.msg
                            }
                        }
                        "en" !== l.language && void 0 !== a.ajaxChimp.responses[e] && a.ajaxChimp.translations && a.ajaxChimp.translations[l.language] && a.ajaxChimp.translations[l.language][a.ajaxChimp.responses[e]] && (e = a.ajaxChimp.translations[l.language][a.ajaxChimp.responses[e]]), r.html(e), r.show(2e3), l.callback && l.callback(s)
                    }, dataType: "jsonp", error: function (a, e) {
                        console.log("mailchimp ajax submit error: " + e)
                    }
                });
                var m = "Submitting...";
                return "en" !== l.language && a.ajaxChimp.translations && a.ajaxChimp.translations[l.language] && a.ajaxChimp.translations[l.language].submit && (m = a.ajaxChimp.translations[l.language].submit), r.html(m).show(2e3), !1
            })
        }), this
    }
}(jQuery);


/*----------------------------
    Magnific Popup JS
------------------------------*/
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (a) {
    var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse",
        m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close",
        t = function () {
        }, u = !!window.jQuery, v = a(window), w = function (a, c) {
            b.ev.on(o + a + p, c)
        }, x = function (b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        }, y = function (c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        }, z = function (c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        }, A = function () {
            a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
        }, B = function () {
            var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;) if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    t.prototype = {
        constructor: t, init: function () {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        }, open: function (c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++) if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                    b.index = e;
                    break
                }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function () {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(), n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        }, close: function () {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
                b._close()
            }, b.st.removalDelay)) : b._close())
        }, _close: function () {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {marginRight: ""};
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        }, updateSize: function (a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth, d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        }, updateItemHTML: function () {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        }, appendContent: function (a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        }, parseEl: function (c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {el: a(e)} : (d = e.type, e = {data: e, src: e.src}), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++) if (e.el.hasClass("mfp-" + f[g])) {
                    d = f[g];
                    break
                }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        }, addGroup: function (a, c) {
            var d = function (d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        }, _openClick: function (c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g) if (a.isFunction(g)) {
                    if (!g.call(b)) return !0
                } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        }, updateStatus: function (a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {status: a, text: d};
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        }, _checkIfClose: function (c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick, e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        }, _addClassToMFP: function (a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        }, _removeClassFromMFP: function (a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        }, _hasScrollBar: function (a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        }, _setFocus: function () {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        }, _onFocusIn: function (c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        }, _parseMarkup: function (b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
                if (void 0 === d || d === !1) return !0;
                if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else b.find(p + "-" + c).html(d)
            })
        }, _getScrollbarSize: function () {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function (b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function () {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function (b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, a.fn.magnificPopup = function (c) {
        A();
        var d = a(this);
        if ("string" == typeof c) if ("open" === c) {
            var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0;
            f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({mfpEl: e}, d, f)
        } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1)); else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline", G = function () {
        E && (D.after(E.addClass(C)).detach(), E = null)
    };
    a.magnificPopup.registerModule(F, {
        options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"},
        proto: {
            initInline: function () {
                b.types.push(F), w(h + "." + F, function () {
                    G()
                })
            }, getInline: function (c, d) {
                if (G(), c.src) {
                    var e = b.st.inline, f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax", J = function () {
        H && a(document.body).removeClass(H)
    }, K = function () {
        J(), b.req && b.req.abort()
    };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        }, proto: {
            initAjax: function () {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            }, getAjax: function (c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src, success: function (d, e, f) {
                        var g = {data: d, xhr: f};
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    }, error: function () {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function (c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        }, proto: {
            initImage: function () {
                var c = b.st.image, d = ".image";
                b.types.push("image"), w(m + d, function () {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function () {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            }, resizeImage: function () {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            }, _onImageHasSize: function (a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            }, findImageSize: function (a) {
                var c = 0, d = a.img[0], e = function (f) {
                    L && clearInterval(L), L = setInterval(function () {
                        return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                    }, f)
                };
                e(1)
            }, getImage: function (c, d) {
                var e = 0, f = function () {
                    c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                }, g = function () {
                    c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                }, h = b.st.image, i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function () {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1, easing: "ease-in-out", duration: 300, opener: function (a) {
                return a.is("img") ? a : a.find("img")
            }
        }, proto: {
            initZoom: function () {
                var a, c = b.st.zoom, d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration, j = function (a) {
                        var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                            d = "all " + c.duration / 1e3 + "s " + c.easing, e = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden"
                            }, f = "transition";
                        return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                    }, k = function () {
                        b.content.css("visibility", "visible")
                    };
                    w("BuildControls" + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                                f.css(b._getOffset(!0)), e = setTimeout(function () {
                                    k(), setTimeout(function () {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function () {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            }, _allowZoom: function () {
                return "image" === b.currItem.type
            }, _getItemToZoom: function () {
                return b.currItem.hasSize ? b.currItem.img : !1
            }, _getOffset: function (c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(), f = parseInt(d.css("padding-top"), 10), g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f};
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe", Q = "//about:blank", R = function (a) {
        if (b.currTemplate[P]) {
            var c = b.currTemplate[P].find("iframe");
            c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
        }
    };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"},
                vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
                gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
            }
        }, proto: {
            initIframe: function () {
                b.types.push(P), w("BeforeChange", function (a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function () {
                    R()
                })
            }, getIframe: function (c, d) {
                var e = c.src, f = b.st.iframe;
                a.each(f.patterns, function () {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function (a) {
        var c = b.items.length;
        return a > c - 1 ? a - c : 0 > a ? c + a : a
    }, T = function (a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        }, proto: {
            initGallery: function () {
                var c = b.st.gallery, e = ".mfp-gallery";
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function (a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function (a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function (a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function () {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function () {
                            b.prev()
                        }), f.click(function () {
                            b.next()
                        }), b.container.append(e.add(f))
                    }
                }), w(n + e, function () {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function () {
                    d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                })) : !1
            }, next: function () {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            }, prev: function () {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            }, goTo: function (a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            }, preloadNearbyImages: function () {
                var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            }, _preloadItem: function (c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
                        d.hasSize = !0
                    }).on("error.mfploader", function () {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function (a) {
                return a.src.replace(/\.\w+$/, function (a) {
                    return "@2x" + a
                })
            }, ratio: 1
        }, proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina, c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
                        b.img.css({"max-width": b.img[0].naturalWidth / c, width: "100%"})
                    }), w("ElementParse." + U, function (b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }), A()
});
function toast(a, b, c, d) {
    function e(a) {
        var b = $("<div class='toast'></div>").addClass(c).html(a);
        return b.hammer({
            prevent_default: !1
        }).bind("pan", function(a) {
            var c = a.gesture.deltaX, d = 80;
            b.hasClass("panning") || b.addClass("panning");
            var e = 1 - Math.abs(c / d);
            0 > e && (e = 0), b.velocity({
                left: c,
                opacity: e
            }, {
                duration: 50,
                queue: !1,
                easing: "easeOutQuad"
            });
        }).bind("panend", function(a) {
            var c = a.gesture.deltaX, e = 80;
            Math.abs(c) > e ? b.velocity({
                marginTop: "-40px"
            }, {
                duration: 375,
                easing: "easeOutExpo",
                queue: !1,
                complete: function() {
                    "function" == typeof d && d(), b.remove();
                }
            }) : (b.removeClass("panning"), b.velocity({
                left: 0,
                opacity: 1
            }, {
                duration: 300,
                easing: "easeOutExpo",
                queue: !1
            }));
        }), b;
    }
    if (c = c || "", 0 == $("#toast-container").length) {
        var f = $("<div></div>").attr("id", "toast-container");
        $("body").append(f);
    }
    var f = $("#toast-container"), g = e(a);
    f.append(g), g.css({
        top: parseFloat(g.css("top")) + 35 + "px",
        opacity: 0
    }), g.velocity({
        top: "0px",
        opacity: 1
    }, {
        duration: 300,
        easing: "easeOutCubic",
        queue: !1
    });
    var h = b, i = setInterval(function() {
        0 === g.parent().length && window.clearInterval(i), g.hasClass("panning") || (h -= 100), 
        0 >= h && (g.velocity({
            opacity: 0,
            marginTop: "-40px"
        }, {
            duration: 375,
            easing: "easeOutExpo",
            queue: !1,
            complete: function() {
                "function" == typeof d && d(), $(this).remove();
            }
        }), window.clearInterval(i));
    }, 100);
}

!function(M, Y, t) {
    "use strict";
    function S(b) {
        return function() {
            var c, a = arguments[0];
            for (c = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.3.13/" + (b ? b + "/" : "") + a, 
            a = 1; a < arguments.length; a++) {
                c = c + (1 == a ? "?" : "&") + "p" + (a - 1) + "=";
                var e, d = encodeURIComponent;
                e = arguments[a], e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e, 
                c += d(e);
            }
            return Error(c);
        };
    }
    function Ta(b) {
        if (null == b || Ua(b)) return !1;
        var a = b.length;
        return b.nodeType === oa && a ? !0 : F(b) || H(b) || 0 === a || "number" == typeof a && a > 0 && a - 1 in b;
    }
    function s(b, a, c) {
        var d, e;
        if (b) if (G(b)) for (d in b) "prototype" == d || "length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d) || a.call(c, b[d], d, b); else if (H(b) || Ta(b)) {
            var f = "object" != typeof b;
            for (d = 0, e = b.length; e > d; d++) (f || d in b) && a.call(c, b[d], d, b);
        } else if (b.forEach && b.forEach !== s) b.forEach(a, c, b); else for (d in b) b.hasOwnProperty(d) && a.call(c, b[d], d, b);
        return b;
    }
    function Ed(b, a, c) {
        for (var d = Object.keys(b).sort(), e = 0; e < d.length; e++) a.call(c, b[d[e]], d[e]);
        return d;
    }
    function lc(b) {
        return function(a, c) {
            b(c, a);
        };
    }
    function Fd() {
        return ++ob;
    }
    function mc(b, a) {
        a ? b.$$hashKey = a : delete b.$$hashKey;
    }
    function x(b) {
        for (var a = b.$$hashKey, c = 1, d = arguments.length; d > c; c++) {
            var e = arguments[c];
            if (e) for (var f = Object.keys(e), g = 0, h = f.length; h > g; g++) {
                var l = f[g];
                b[l] = e[l];
            }
        }
        return mc(b, a), b;
    }
    function ba(b) {
        return parseInt(b, 10);
    }
    function Pb(b, a) {
        return x(Object.create(b), a);
    }
    function z() {}
    function pa(b) {
        return b;
    }
    function ea(b) {
        return function() {
            return b;
        };
    }
    function B(b) {
        return "undefined" == typeof b;
    }
    function y(b) {
        return "undefined" != typeof b;
    }
    function I(b) {
        return null !== b && "object" == typeof b;
    }
    function F(b) {
        return "string" == typeof b;
    }
    function V(b) {
        return "number" == typeof b;
    }
    function qa(b) {
        return "[object Date]" === Da.call(b);
    }
    function G(b) {
        return "function" == typeof b;
    }
    function pb(b) {
        return "[object RegExp]" === Da.call(b);
    }
    function Ua(b) {
        return b && b.window === b;
    }
    function Va(b) {
        return b && b.$evalAsync && b.$watch;
    }
    function Wa(b) {
        return "boolean" == typeof b;
    }
    function nc(b) {
        return !(!b || !(b.nodeName || b.prop && b.attr && b.find));
    }
    function Gd(b) {
        var a = {};
        b = b.split(",");
        var c;
        for (c = 0; c < b.length; c++) a[b[c]] = !0;
        return a;
    }
    function ua(b) {
        return Q(b.nodeName || b[0] && b[0].nodeName);
    }
    function Xa(b, a) {
        var c = b.indexOf(a);
        return c >= 0 && b.splice(c, 1), a;
    }
    function Ea(b, a, c, d) {
        if (Ua(b) || Va(b)) throw Ka("cpws");
        if (a) {
            if (b === a) throw Ka("cpi");
            if (c = c || [], d = d || [], I(b)) {
                var e = c.indexOf(b);
                if (-1 !== e) return d[e];
                c.push(b), d.push(a);
            }
            if (H(b)) for (var f = a.length = 0; f < b.length; f++) e = Ea(b[f], null, c, d), 
            I(b[f]) && (c.push(b[f]), d.push(e)), a.push(e); else {
                var g = a.$$hashKey;
                H(a) ? a.length = 0 : s(a, function(b, c) {
                    delete a[c];
                });
                for (f in b) b.hasOwnProperty(f) && (e = Ea(b[f], null, c, d), I(b[f]) && (c.push(b[f]), 
                d.push(e)), a[f] = e);
                mc(a, g);
            }
        } else (a = b) && (H(b) ? a = Ea(b, [], c, d) : qa(b) ? a = new Date(b.getTime()) : pb(b) ? (a = new RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), 
        a.lastIndex = b.lastIndex) : I(b) && (e = Object.create(Object.getPrototypeOf(b)), 
        a = Ea(b, e, c, d)));
        return a;
    }
    function ra(b, a) {
        if (H(b)) {
            a = a || [];
            for (var c = 0, d = b.length; d > c; c++) a[c] = b[c];
        } else if (I(b)) for (c in a = a || {}, b) ("$" !== c.charAt(0) || "$" !== c.charAt(1)) && (a[c] = b[c]);
        return a || b;
    }
    function ga(b, a) {
        if (b === a) return !0;
        if (null === b || null === a) return !1;
        if (b !== b && a !== a) return !0;
        var d, c = typeof b;
        if (c == typeof a && "object" == c) {
            if (!H(b)) {
                if (qa(b)) return qa(a) ? ga(b.getTime(), a.getTime()) : !1;
                if (pb(b) && pb(a)) return b.toString() == a.toString();
                if (Va(b) || Va(a) || Ua(b) || Ua(a) || H(a)) return !1;
                c = {};
                for (d in b) if ("$" !== d.charAt(0) && !G(b[d])) {
                    if (!ga(b[d], a[d])) return !1;
                    c[d] = !0;
                }
                for (d in a) if (!c.hasOwnProperty(d) && "$" !== d.charAt(0) && a[d] !== t && !G(a[d])) return !1;
                return !0;
            }
            if (!H(a)) return !1;
            if ((c = b.length) == a.length) {
                for (d = 0; c > d; d++) if (!ga(b[d], a[d])) return !1;
                return !0;
            }
        }
        return !1;
    }
    function Ya(b, a, c) {
        return b.concat(Za.call(a, c));
    }
    function oc(b, a) {
        var c = 2 < arguments.length ? Za.call(arguments, 2) : [];
        return !G(a) || a instanceof RegExp ? a : c.length ? function() {
            return arguments.length ? a.apply(b, Ya(c, arguments, 0)) : a.apply(b, c);
        } : function() {
            return arguments.length ? a.apply(b, arguments) : a.call(b);
        };
    }
    function Hd(b, a) {
        var c = a;
        return "string" == typeof b && "$" === b.charAt(0) && "$" === b.charAt(1) ? c = t : Ua(a) ? c = "$WINDOW" : a && Y === a ? c = "$DOCUMENT" : Va(a) && (c = "$SCOPE"), 
        c;
    }
    function $a(b, a) {
        return "undefined" == typeof b ? t : (V(a) || (a = a ? 2 : null), JSON.stringify(b, Hd, a));
    }
    function pc(b) {
        return F(b) ? JSON.parse(b) : b;
    }
    function va(b) {
        b = D(b).clone();
        try {
            b.empty();
        } catch (a) {}
        var c = D("<div>").append(b).html();
        try {
            return b[0].nodeType === qb ? Q(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + Q(b);
            });
        } catch (d) {
            return Q(c);
        }
    }
    function qc(b) {
        try {
            return decodeURIComponent(b);
        } catch (a) {}
    }
    function rc(b) {
        var c, d, a = {};
        return s((b || "").split("&"), function(b) {
            b && (c = b.replace(/\+/g, "%20").split("="), d = qc(c[0]), y(d) && (b = y(c[1]) ? qc(c[1]) : !0, 
            sc.call(a, d) ? H(a[d]) ? a[d].push(b) : a[d] = [ a[d], b ] : a[d] = b));
        }), a;
    }
    function Qb(b) {
        var a = [];
        return s(b, function(b, d) {
            H(b) ? s(b, function(b) {
                a.push(Fa(d, !0) + (!0 === b ? "" : "=" + Fa(b, !0)));
            }) : a.push(Fa(d, !0) + (!0 === b ? "" : "=" + Fa(b, !0)));
        }), a.length ? a.join("&") : "";
    }
    function rb(b) {
        return Fa(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
    }
    function Fa(b, a) {
        return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, a ? "%20" : "+");
    }
    function Id(b, a) {
        var c, d, e = sb.length;
        for (b = D(b), d = 0; e > d; ++d) if (c = sb[d] + a, F(c = b.attr(c))) return c;
        return null;
    }
    function Jd(b, a) {
        var c, d, e = {};
        s(sb, function(a) {
            a += "app", !c && b.hasAttribute && b.hasAttribute(a) && (c = b, d = b.getAttribute(a));
        }), s(sb, function(a) {
            a += "app";
            var e;
            !c && (e = b.querySelector("[" + a.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(a));
        }), c && (e.strictDi = null !== Id(c, "strict-di"), a(c, d ? [ d ] : [], e));
    }
    function tc(b, a, c) {
        I(c) || (c = {}), c = x({
            strictDi: !1
        }, c);
        var d = function() {
            if (b = D(b), b.injector()) {
                var d = b[0] === Y ? "document" : va(b);
                throw Ka("btstrpd", d.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            return a = a || [], a.unshift([ "$provide", function(a) {
                a.value("$rootElement", b);
            } ]), c.debugInfoEnabled && a.push([ "$compileProvider", function(a) {
                a.debugInfoEnabled(!0);
            } ]), a.unshift("ng"), d = ab(a, c.strictDi), d.invoke([ "$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
                a.$apply(function() {
                    b.data("$injector", d), c(b)(a);
                });
            } ]), d;
        }, e = /^NG_ENABLE_DEBUG_INFO!/, f = /^NG_DEFER_BOOTSTRAP!/;
        return M && e.test(M.name) && (c.debugInfoEnabled = !0, M.name = M.name.replace(e, "")), 
        M && !f.test(M.name) ? d() : (M.name = M.name.replace(f, ""), ca.resumeBootstrap = function(b) {
            return s(b, function(b) {
                a.push(b);
            }), d();
        }, void (G(ca.resumeDeferredBootstrap) && ca.resumeDeferredBootstrap()));
    }
    function Kd() {
        M.name = "NG_ENABLE_DEBUG_INFO!" + M.name, M.location.reload();
    }
    function Ld(b) {
        if (b = ca.element(b).injector(), !b) throw Ka("test");
        return b.get("$$testability");
    }
    function uc(b, a) {
        return a = a || "_", b.replace(Md, function(b, d) {
            return (d ? a : "") + b.toLowerCase();
        });
    }
    function Nd() {
        var b;
        vc || ((sa = M.jQuery) && sa.fn.on ? (D = sa, x(sa.fn, {
            scope: La.scope,
            isolateScope: La.isolateScope,
            controller: La.controller,
            injector: La.injector,
            inheritedData: La.inheritedData
        }), b = sa.cleanData, sa.cleanData = function(a) {
            var c;
            if (Rb) Rb = !1; else for (var e, d = 0; null != (e = a[d]); d++) (c = sa._data(e, "events")) && c.$destroy && sa(e).triggerHandler("$destroy");
            b(a);
        }) : D = R, ca.element = D, vc = !0);
    }
    function Sb(b, a, c) {
        if (!b) throw Ka("areq", a || "?", c || "required");
        return b;
    }
    function tb(b, a, c) {
        return c && H(b) && (b = b[b.length - 1]), Sb(G(b), a, "not a function, got " + (b && "object" == typeof b ? b.constructor.name || "Object" : typeof b)), 
        b;
    }
    function Ma(b, a) {
        if ("hasOwnProperty" === b) throw Ka("badname", a);
    }
    function wc(b, a, c) {
        if (!a) return b;
        a = a.split(".");
        for (var d, e = b, f = a.length, g = 0; f > g; g++) d = a[g], b && (b = (e = b)[d]);
        return !c && G(b) ? oc(e, b) : b;
    }
    function ub(b) {
        var a = b[0];
        b = b[b.length - 1];
        var c = [ a ];
        do {
            if (a = a.nextSibling, !a) break;
            c.push(a);
        } while (a !== b);
        return D(c);
    }
    function ha() {
        return Object.create(null);
    }
    function Od(b) {
        function a(a, b, c) {
            return a[b] || (a[b] = c());
        }
        var c = S("$injector"), d = S("ng");
        return b = a(b, "angular", Object), b.$$minErr = b.$$minErr || S, a(b, "module", function() {
            var b = {};
            return function(f, g, h) {
                if ("hasOwnProperty" === f) throw d("badname", "module");
                return g && b.hasOwnProperty(f) && (b[f] = null), a(b, f, function() {
                    function a(c, d, e, f) {
                        return f || (f = b), function() {
                            return f[e || "push"]([ c, d, arguments ]), u;
                        };
                    }
                    if (!g) throw c("nomod", f);
                    var b = [], d = [], e = [], q = a("$injector", "invoke", "push", d), u = {
                        _invokeQueue: b,
                        _configBlocks: d,
                        _runBlocks: e,
                        requires: g,
                        name: f,
                        provider: a("$provide", "provider"),
                        factory: a("$provide", "factory"),
                        service: a("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        animation: a("$animateProvider", "register"),
                        filter: a("$filterProvider", "register"),
                        controller: a("$controllerProvider", "register"),
                        directive: a("$compileProvider", "directive"),
                        config: q,
                        run: function(a) {
                            return e.push(a), this;
                        }
                    };
                    return h && q(h), u;
                });
            };
        });
    }
    function Pd(b) {
        x(b, {
            bootstrap: tc,
            copy: Ea,
            extend: x,
            equals: ga,
            element: D,
            forEach: s,
            injector: ab,
            noop: z,
            bind: oc,
            toJson: $a,
            fromJson: pc,
            identity: pa,
            isUndefined: B,
            isDefined: y,
            isString: F,
            isFunction: G,
            isObject: I,
            isNumber: V,
            isElement: nc,
            isArray: H,
            version: Qd,
            isDate: qa,
            lowercase: Q,
            uppercase: vb,
            callbacks: {
                counter: 0
            },
            getTestability: Ld,
            $$minErr: S,
            $$csp: bb,
            reloadWithDebugInfo: Kd
        }), cb = Od(M);
        try {
            cb("ngLocale");
        } catch (a) {
            cb("ngLocale", []).provider("$locale", Rd);
        }
        cb("ng", [ "ngLocale" ], [ "$provide", function(a) {
            a.provider({
                $$sanitizeUri: Sd
            }), a.provider("$compile", xc).directive({
                a: Td,
                input: yc,
                textarea: yc,
                form: Ud,
                script: Vd,
                select: Wd,
                style: Xd,
                option: Yd,
                ngBind: Zd,
                ngBindHtml: $d,
                ngBindTemplate: ae,
                ngClass: be,
                ngClassEven: ce,
                ngClassOdd: de,
                ngCloak: ee,
                ngController: fe,
                ngForm: ge,
                ngHide: he,
                ngIf: ie,
                ngInclude: je,
                ngInit: ke,
                ngNonBindable: le,
                ngPluralize: me,
                ngRepeat: ne,
                ngShow: oe,
                ngStyle: pe,
                ngSwitch: qe,
                ngSwitchWhen: re,
                ngSwitchDefault: se,
                ngOptions: te,
                ngTransclude: ue,
                ngModel: ve,
                ngList: we,
                ngChange: xe,
                pattern: zc,
                ngPattern: zc,
                required: Ac,
                ngRequired: Ac,
                minlength: Bc,
                ngMinlength: Bc,
                maxlength: Cc,
                ngMaxlength: Cc,
                ngValue: ye,
                ngModelOptions: ze
            }).directive({
                ngInclude: Ae
            }).directive(wb).directive(Dc), a.provider({
                $anchorScroll: Be,
                $animate: Ce,
                $browser: De,
                $cacheFactory: Ee,
                $controller: Fe,
                $document: Ge,
                $exceptionHandler: He,
                $filter: Ec,
                $interpolate: Ie,
                $interval: Je,
                $http: Ke,
                $httpBackend: Le,
                $location: Me,
                $log: Ne,
                $parse: Oe,
                $rootScope: Pe,
                $q: Qe,
                $$q: Re,
                $sce: Se,
                $sceDelegate: Te,
                $sniffer: Ue,
                $templateCache: Ve,
                $templateRequest: We,
                $$testability: Xe,
                $timeout: Ye,
                $window: Ze,
                $$rAF: $e,
                $$asyncCallback: af,
                $$jqLite: bf
            });
        } ]);
    }
    function db(b) {
        return b.replace(cf, function(a, b, d, e) {
            return e ? d.toUpperCase() : d;
        }).replace(df, "Moz$1");
    }
    function Fc(b) {
        return b = b.nodeType, b === oa || !b || 9 === b;
    }
    function Gc(b, a) {
        var c, d, e = a.createDocumentFragment(), f = [];
        if (Tb.test(b)) {
            for (c = c || e.appendChild(a.createElement("div")), d = (ef.exec(b) || [ "", "" ])[1].toLowerCase(), 
            d = ia[d] || ia._default, c.innerHTML = d[1] + b.replace(ff, "<$1></$2>") + d[2], 
            d = d[0]; d--; ) c = c.lastChild;
            f = Ya(f, c.childNodes), c = e.firstChild, c.textContent = "";
        } else f.push(a.createTextNode(b));
        return e.textContent = "", e.innerHTML = "", s(f, function(a) {
            e.appendChild(a);
        }), e;
    }
    function R(b) {
        if (b instanceof R) return b;
        var a;
        if (F(b) && (b = U(b), a = !0), !(this instanceof R)) {
            if (a && "<" != b.charAt(0)) throw Ub("nosel");
            return new R(b);
        }
        if (a) {
            a = Y;
            var c;
            b = (c = gf.exec(b)) ? [ a.createElement(c[1]) ] : (c = Gc(b, a)) ? c.childNodes : [];
        }
        Hc(this, b);
    }
    function Vb(b) {
        return b.cloneNode(!0);
    }
    function xb(b, a) {
        if (a || yb(b), b.querySelectorAll) for (var c = b.querySelectorAll("*"), d = 0, e = c.length; e > d; d++) yb(c[d]);
    }
    function Ic(b, a, c, d) {
        if (y(d)) throw Ub("offargs");
        var e = (d = zb(b)) && d.events, f = d && d.handle;
        if (f) if (a) s(a.split(" "), function(a) {
            if (y(c)) {
                var d = e[a];
                if (Xa(d || [], c), d && 0 < d.length) return;
            }
            b.removeEventListener(a, f, !1), delete e[a];
        }); else for (a in e) "$destroy" !== a && b.removeEventListener(a, f, !1), delete e[a];
    }
    function yb(b, a) {
        var c = b.ng339, d = c && Ab[c];
        d && (a ? delete d.data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), 
        Ic(b)), delete Ab[c], b.ng339 = t));
    }
    function zb(b, a) {
        var c = b.ng339, c = c && Ab[c];
        return a && !c && (b.ng339 = c = ++hf, c = Ab[c] = {
            events: {},
            data: {},
            handle: t
        }), c;
    }
    function Wb(b, a, c) {
        if (Fc(b)) {
            var d = y(c), e = !d && a && !I(a), f = !a;
            if (b = (b = zb(b, !e)) && b.data, d) b[a] = c; else {
                if (f) return b;
                if (e) return b && b[a];
                x(b, a);
            }
        }
    }
    function Bb(b, a) {
        return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1;
    }
    function Cb(b, a) {
        a && b.setAttribute && s(a.split(" "), function(a) {
            b.setAttribute("class", U((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + U(a) + " ", " ")));
        });
    }
    function Db(b, a) {
        if (a && b.setAttribute) {
            var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            s(a.split(" "), function(a) {
                a = U(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ");
            }), b.setAttribute("class", U(c));
        }
    }
    function Hc(b, a) {
        if (a) if (a.nodeType) b[b.length++] = a; else {
            var c = a.length;
            if ("number" == typeof c && a.window !== a) {
                if (c) for (var d = 0; c > d; d++) b[b.length++] = a[d];
            } else b[b.length++] = a;
        }
    }
    function Jc(b, a) {
        return Eb(b, "$" + (a || "ngController") + "Controller");
    }
    function Eb(b, a, c) {
        for (9 == b.nodeType && (b = b.documentElement), a = H(a) ? a : [ a ]; b; ) {
            for (var d = 0, e = a.length; e > d; d++) if ((c = D.data(b, a[d])) !== t) return c;
            b = b.parentNode || 11 === b.nodeType && b.host;
        }
    }
    function Kc(b) {
        for (xb(b, !0); b.firstChild; ) b.removeChild(b.firstChild);
    }
    function Lc(b, a) {
        a || xb(b);
        var c = b.parentNode;
        c && c.removeChild(b);
    }
    function jf(b, a) {
        a = a || M, "complete" === a.document.readyState ? a.setTimeout(b) : D(a).on("load", b);
    }
    function Mc(b, a) {
        var c = Fb[a.toLowerCase()];
        return c && Nc[ua(b)] && c;
    }
    function kf(b, a) {
        var c = b.nodeName;
        return ("INPUT" === c || "TEXTAREA" === c) && Oc[a];
    }
    function lf(b, a) {
        var c = function(c, e) {
            c.isDefaultPrevented = function() {
                return c.defaultPrevented;
            };
            var f = a[e || c.type], g = f ? f.length : 0;
            if (g) {
                if (B(c.immediatePropagationStopped)) {
                    var h = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function() {
                        c.immediatePropagationStopped = !0, c.stopPropagation && c.stopPropagation(), h && h.call(c);
                    };
                }
                c.isImmediatePropagationStopped = function() {
                    return !0 === c.immediatePropagationStopped;
                }, g > 1 && (f = ra(f));
                for (var l = 0; g > l; l++) c.isImmediatePropagationStopped() || f[l].call(b, c);
            }
        };
        return c.elem = b, c;
    }
    function bf() {
        this.$get = function() {
            return x(R, {
                hasClass: function(b, a) {
                    return b.attr && (b = b[0]), Bb(b, a);
                },
                addClass: function(b, a) {
                    return b.attr && (b = b[0]), Db(b, a);
                },
                removeClass: function(b, a) {
                    return b.attr && (b = b[0]), Cb(b, a);
                }
            });
        };
    }
    function Na(b, a) {
        var c = b && b.$$hashKey;
        return c ? ("function" == typeof c && (c = b.$$hashKey()), c) : (c = typeof b, c = "function" == c || "object" == c && null !== b ? b.$$hashKey = c + ":" + (a || Fd)() : c + ":" + b);
    }
    function eb(b, a) {
        if (a) {
            var c = 0;
            this.nextUid = function() {
                return ++c;
            };
        }
        s(b, this.put, this);
    }
    function mf(b) {
        return (b = b.toString().replace(Pc, "").match(Qc)) ? "function(" + (b[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
    }
    function ab(b, a) {
        function c(a) {
            return function(b, c) {
                return I(b) ? void s(b, lc(a)) : a(b, c);
            };
        }
        function d(a, b) {
            if (Ma(a, "service"), (G(b) || H(b)) && (b = q.instantiate(b)), !b.$get) throw Ga("pget", a);
            return n[a + "Provider"] = b;
        }
        function e(a, b) {
            return function() {
                var c = r.invoke(b, this);
                if (B(c)) throw Ga("undef", a);
                return c;
            };
        }
        function f(a, b, c) {
            return d(a, {
                $get: !1 !== c ? e(a, b) : b
            });
        }
        function g(a) {
            var c, b = [];
            return s(a, function(a) {
                function d(a) {
                    var b, c;
                    for (b = 0, c = a.length; c > b; b++) {
                        var e = a[b], f = q.get(e[0]);
                        f[e[1]].apply(f, e[2]);
                    }
                }
                if (!m.get(a)) {
                    m.put(a, !0);
                    try {
                        F(a) ? (c = cb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), 
                        d(c._configBlocks)) : G(a) ? b.push(q.invoke(a)) : H(a) ? b.push(q.invoke(a)) : tb(a, "module");
                    } catch (e) {
                        throw H(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), 
                        Ga("modulerr", a, e.stack || e.message || e);
                    }
                }
            }), b;
        }
        function h(b, c) {
            function d(a, e) {
                if (b.hasOwnProperty(a)) {
                    if (b[a] === l) throw Ga("cdep", a + " <- " + k.join(" <- "));
                    return b[a];
                }
                try {
                    return k.unshift(a), b[a] = l, b[a] = c(a, e);
                } catch (f) {
                    throw b[a] === l && delete b[a], f;
                } finally {
                    k.shift();
                }
            }
            function e(b, c, f, g) {
                "string" == typeof f && (g = f, f = null);
                var l, q, n, h = [], k = ab.$$annotate(b, a, g);
                for (q = 0, l = k.length; l > q; q++) {
                    if (n = k[q], "string" != typeof n) throw Ga("itkn", n);
                    h.push(f && f.hasOwnProperty(n) ? f[n] : d(n, g));
                }
                return H(b) && (b = b[l]), b.apply(c, h);
            }
            return {
                invoke: e,
                instantiate: function(a, b, c) {
                    var d = Object.create((H(a) ? a[a.length - 1] : a).prototype || null);
                    return a = e(a, d, b, c), I(a) || G(a) ? a : d;
                },
                get: d,
                annotate: ab.$$annotate,
                has: function(a) {
                    return n.hasOwnProperty(a + "Provider") || b.hasOwnProperty(a);
                }
            };
        }
        a = !0 === a;
        var l = {}, k = [], m = new eb([], !0), n = {
            $provide: {
                provider: c(d),
                factory: c(f),
                service: c(function(a, b) {
                    return f(a, [ "$injector", function(a) {
                        return a.instantiate(b);
                    } ]);
                }),
                value: c(function(a, b) {
                    return f(a, ea(b), !1);
                }),
                constant: c(function(a, b) {
                    Ma(a, "constant"), n[a] = b, u[a] = b;
                }),
                decorator: function(a, b) {
                    var c = q.get(a + "Provider"), d = c.$get;
                    c.$get = function() {
                        var a = r.invoke(d, c);
                        return r.invoke(b, null, {
                            $delegate: a
                        });
                    };
                }
            }
        }, q = n.$injector = h(n, function(a, b) {
            throw ca.isString(b) && k.push(b), Ga("unpr", k.join(" <- "));
        }), u = {}, r = u.$injector = h(u, function(a, b) {
            var c = q.get(a + "Provider", b);
            return r.invoke(c.$get, c, t, a);
        });
        return s(g(b), function(a) {
            r.invoke(a || z);
        }), r;
    }
    function Be() {
        var b = !0;
        this.disableAutoScrolling = function() {
            b = !1;
        }, this.$get = [ "$window", "$location", "$rootScope", function(a, c, d) {
            function e(a) {
                var b = null;
                return Array.prototype.some.call(a, function(a) {
                    return "a" === ua(a) ? (b = a, !0) : void 0;
                }), b;
            }
            function f(b) {
                if (b) {
                    b.scrollIntoView();
                    var c;
                    c = g.yOffset, G(c) ? c = c() : nc(c) ? (c = c[0], c = "fixed" !== a.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : V(c) || (c = 0), 
                    c && (b = b.getBoundingClientRect().top, a.scrollBy(0, b - c));
                } else a.scrollTo(0, 0);
            }
            function g() {
                var b, a = c.hash();
                a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null);
            }
            var h = a.document;
            return b && d.$watch(function() {
                return c.hash();
            }, function(a, b) {
                a === b && "" === a || jf(function() {
                    d.$evalAsync(g);
                });
            }), g;
        } ];
    }
    function af() {
        this.$get = [ "$$rAF", "$timeout", function(b, a) {
            return b.supported ? function(a) {
                return b(a);
            } : function(b) {
                return a(b, 0, !1);
            };
        } ];
    }
    function nf(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null, Za.call(arguments, 1));
            } finally {
                if (v--, 0 === v) for (;w.length; ) try {
                    w.pop()();
                } catch (b) {
                    c.error(b);
                }
            }
        }
        function f(a, b) {
            !function N() {
                s(L, function(a) {
                    a();
                }), C = b(N, a);
            }();
        }
        function g() {
            h(), l();
        }
        function h() {
            A = b.history.state, A = B(A) ? null : A, ga(A, J) && (A = J), J = A;
        }
        function l() {
            (E !== m.url() || O !== A) && (E = m.url(), O = A, s(W, function(a) {
                a(m.url(), A);
            }));
        }
        function k(a) {
            try {
                return decodeURIComponent(a);
            } catch (b) {
                return a;
            }
        }
        var m = this, n = a[0], q = b.location, u = b.history, r = b.setTimeout, P = b.clearTimeout, p = {};
        m.isMock = !1;
        var v = 0, w = [];
        m.$$completeOutstandingRequest = e, m.$$incOutstandingRequestCount = function() {
            v++;
        }, m.notifyWhenNoOutstandingRequests = function(a) {
            s(L, function(a) {
                a();
            }), 0 === v ? a() : w.push(a);
        };
        var C, L = [];
        m.addPollFn = function(a) {
            return B(C) && f(100, r), L.push(a), a;
        };
        var A, O, E = q.href, T = a.find("base"), X = null;
        h(), O = A, m.url = function(a, c, e) {
            if (B(e) && (e = null), q !== b.location && (q = b.location), u !== b.history && (u = b.history), 
            a) {
                var f = O === e;
                if (E === a && (!d.history || f)) return m;
                var g = E && Ha(E) === Ha(a);
                return E = a, O = e, !d.history || g && f ? (g || (X = a), c ? q.replace(a) : g ? (c = q, 
                e = a.indexOf("#"), a = -1 === e ? "" : a.substr(e + 1), c.hash = a) : q.href = a) : (u[c ? "replaceState" : "pushState"](e, "", a), 
                h(), O = A), m;
            }
            return X || q.href.replace(/%27/g, "'");
        }, m.state = function() {
            return A;
        };
        var W = [], wa = !1, J = null;
        m.onUrlChange = function(a) {
            return wa || (d.history && D(b).on("popstate", g), D(b).on("hashchange", g), wa = !0), 
            W.push(a), a;
        }, m.$$checkUrlChange = l, m.baseHref = function() {
            var a = T.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
        };
        var fa = {}, y = "", da = m.baseHref();
        m.cookies = function(a, b) {
            var d, e, f, g;
            if (!a) {
                if (n.cookie !== y) for (y = n.cookie, d = y.split("; "), fa = {}, f = 0; f < d.length; f++) e = d[f], 
                g = e.indexOf("="), g > 0 && (a = k(e.substring(0, g)), fa[a] === t && (fa[a] = k(e.substring(g + 1))));
                return fa;
            }
            b === t ? n.cookie = encodeURIComponent(a) + "=;path=" + da + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : F(b) && (d = (n.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) + ";path=" + da).length + 1, 
            d > 4096 && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!"));
        }, m.defer = function(a, b) {
            var c;
            return v++, c = r(function() {
                delete p[c], e(a);
            }, b || 0), p[c] = !0, c;
        }, m.defer.cancel = function(a) {
            return p[a] ? (delete p[a], P(a), e(z), !0) : !1;
        };
    }
    function De() {
        this.$get = [ "$window", "$log", "$sniffer", "$document", function(b, a, c, d) {
            return new nf(b, d, a, c);
        } ];
    }
    function Ee() {
        this.$get = function() {
            function b(b, d) {
                function e(a) {
                    a != n && (q ? q == a && (q = a.n) : q = a, f(a.n, a.p), f(a, n), n = a, n.n = null);
                }
                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a));
                }
                if (b in a) throw S("$cacheFactory")("iid", b);
                var g = 0, h = x({}, d, {
                    id: b
                }), l = {}, k = d && d.capacity || Number.MAX_VALUE, m = {}, n = null, q = null;
                return a[b] = {
                    put: function(a, b) {
                        if (k < Number.MAX_VALUE) {
                            var c = m[a] || (m[a] = {
                                key: a
                            });
                            e(c);
                        }
                        return B(b) ? void 0 : (a in l || g++, l[a] = b, g > k && this.remove(q.key), b);
                    },
                    get: function(a) {
                        if (k < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b) return;
                            e(b);
                        }
                        return l[a];
                    },
                    remove: function(a) {
                        if (k < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b) return;
                            b == n && (n = b.p), b == q && (q = b.n), f(b.n, b.p), delete m[a];
                        }
                        delete l[a], g--;
                    },
                    removeAll: function() {
                        l = {}, g = 0, m = {}, n = q = null;
                    },
                    destroy: function() {
                        m = h = l = null, delete a[b];
                    },
                    info: function() {
                        return x({}, h, {
                            size: g
                        });
                    }
                };
            }
            var a = {};
            return b.info = function() {
                var b = {};
                return s(a, function(a, e) {
                    b[e] = a.info();
                }), b;
            }, b.get = function(b) {
                return a[b];
            }, b;
        };
    }
    function Ve() {
        this.$get = [ "$cacheFactory", function(b) {
            return b("templates");
        } ];
    }
    function xc(b, a) {
        function c(a, b) {
            var c = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, d = {};
            return s(a, function(a, e) {
                var f = a.match(c);
                if (!f) throw ja("iscp", b, e, a);
                d[e] = {
                    mode: f[1][0],
                    collection: "*" === f[2],
                    optional: "?" === f[3],
                    attrName: f[4] || e
                };
            }), d;
        }
        var d = {}, e = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, f = /(([\w\-]+)(?:\:([^;]+))?;?)/, g = Gd("ngSrc,ngSrcset,src,srcset"), h = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, l = /^(on[a-z]+|formaction)$/;
        this.directive = function n(a, e) {
            return Ma(a, "directive"), F(a) ? (Sb(e, "directiveFactory"), d.hasOwnProperty(a) || (d[a] = [], 
            b.factory(a + "Directive", [ "$injector", "$exceptionHandler", function(b, e) {
                var f = [];
                return s(d[a], function(d, g) {
                    try {
                        var h = b.invoke(d);
                        G(h) ? h = {
                            compile: ea(h)
                        } : !h.compile && h.link && (h.compile = ea(h.link)), h.priority = h.priority || 0, 
                        h.index = g, h.name = h.name || a, h.require = h.require || h.controller && h.name, 
                        h.restrict = h.restrict || "EA", I(h.scope) && (h.$$isolateBindings = c(h.scope, h.name)), 
                        f.push(h);
                    } catch (l) {
                        e(l);
                    }
                }), f;
            } ])), d[a].push(e)) : s(a, lc(n)), this;
        }, this.aHrefSanitizationWhitelist = function(b) {
            return y(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist();
        }, this.imgSrcSanitizationWhitelist = function(b) {
            return y(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist();
        };
        var k = !0;
        this.debugInfoEnabled = function(a) {
            return y(a) ? (k = a, this) : k;
        }, this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, b, c, r, P, p, v, w, L, C, A) {
            function O(a, b) {
                try {
                    a.addClass(b);
                } catch (c) {}
            }
            function E(a, b, c, d, e) {
                a instanceof D || (a = D(a)), s(a, function(b, c) {
                    b.nodeType == qb && b.nodeValue.match(/\S+/) && (a[c] = D(b).wrap("<span></span>").parent()[0]);
                });
                var f = T(a, b, a, c, d, e);
                E.$$addScopeClass(a);
                var g = null;
                return function(b, c, d) {
                    Sb(b, "scope"), d = d || {};
                    var e = d.parentBoundTranscludeFn, h = d.transcludeControllers;
                    if (d = d.futureParentElement, e && e.$$boundTransclude && (e = e.$$boundTransclude), 
                    g || (g = (d = d && d[0]) && "foreignobject" !== ua(d) && d.toString().match(/SVG/) ? "svg" : "html"), 
                    d = "html" !== g ? D(Xb(g, D("<div>").append(a).html())) : c ? La.clone.call(a) : a, 
                    h) for (var l in h) d.data("$" + l + "Controller", h[l].instance);
                    return E.$$addScopeInfo(d, b), c && c(d, b), f && f(b, d, d, e), d;
                };
            }
            function T(a, b, c, d, e, f) {
                function g(a, c, d, e) {
                    var f, l, k, q, n, p, w;
                    if (r) for (w = Array(c.length), q = 0; q < h.length; q += 3) f = h[q], w[f] = c[f]; else w = c;
                    for (q = 0, n = h.length; n > q; ) l = w[h[q++]], c = h[q++], f = h[q++], c ? (c.scope ? (k = a.$new(), 
                    E.$$addScopeInfo(D(l), k)) : k = a, p = c.transcludeOnThisElement ? X(a, c.transclude, e, c.elementTranscludeOnThisElement) : !c.templateOnThisElement && e ? e : !e && b ? X(a, b) : null, 
                    c(f, k, l, d, p)) : f && f(a, l.childNodes, t, e);
                }
                for (var l, k, q, n, r, h = [], p = 0; p < a.length; p++) l = new Yb(), k = W(a[p], [], l, 0 === p ? d : t, e), 
                (f = k.length ? fa(k, a[p], l, b, c, null, [], [], f) : null) && f.scope && E.$$addScopeClass(l.$$element), 
                l = f && f.terminal || !(q = a[p].childNodes) || !q.length ? null : T(q, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b), 
                (f || l) && (h.push(p, f, l), n = !0, r = r || f), f = null;
                return n ? g : null;
            }
            function X(a, b, c) {
                return function(d, e, f, g, h) {
                    return d || (d = a.$new(!1, h), d.$$transcluded = !0), b(d, e, {
                        parentBoundTranscludeFn: c,
                        transcludeControllers: f,
                        futureParentElement: g
                    });
                };
            }
            function W(a, b, c, d, g) {
                var l, h = c.$attr;
                switch (a.nodeType) {
                  case oa:
                    da(b, ya(ua(a)), "E", d, g);
                    for (var k, q, n, r = a.attributes, p = 0, w = r && r.length; w > p; p++) {
                        var P = !1, L = !1;
                        k = r[p], l = k.name, q = U(k.value), k = ya(l), (n = gb.test(k)) && (l = l.replace(Sc, "").substr(8).replace(/_(.)/g, function(a, b) {
                            return b.toUpperCase();
                        }));
                        var u = k.replace(/(Start|End)$/, "");
                        B(u) && k === u + "Start" && (P = l, L = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6)), 
                        k = ya(l.toLowerCase()), h[k] = l, (n || !c.hasOwnProperty(k)) && (c[k] = q, Mc(a, k) && (c[k] = !0)), 
                        Pa(a, b, q, k, n), da(b, k, "A", d, g, P, L);
                    }
                    if (a = a.className, I(a) && (a = a.animVal), F(a) && "" !== a) for (;l = f.exec(a); ) k = ya(l[2]), 
                    da(b, k, "C", d, g) && (c[k] = U(l[3])), a = a.substr(l.index + l[0].length);
                    break;

                  case qb:
                    M(b, a.nodeValue);
                    break;

                  case 8:
                    try {
                        (l = e.exec(a.nodeValue)) && (k = ya(l[1]), da(b, k, "M", d, g) && (c[k] = U(l[2])));
                    } catch (v) {}
                }
                return b.sort(N), b;
            }
            function wa(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw ja("uterdir", b, c);
                        a.nodeType == oa && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), 
                        a = a.nextSibling;
                    } while (e > 0);
                } else d.push(a);
                return D(d);
            }
            function J(a, b, c) {
                return function(d, e, f, g, h) {
                    return e = wa(e[0], b, c), a(d, e, f, g, h);
                };
            }
            function fa(a, d, e, f, g, l, k, n, r) {
                function w(a, b, c, d) {
                    a && (c && (a = J(a, c, d)), a.require = K.require, a.directiveName = x, (T === K || K.$$isolateScope) && (a = Z(a, {
                        isolateScope: !0
                    })), k.push(a)), b && (c && (b = J(b, c, d)), b.require = K.require, b.directiveName = x, 
                    (T === K || K.$$isolateScope) && (b = Z(b, {
                        isolateScope: !0
                    })), n.push(b));
                }
                function L(a, b, c, d) {
                    var e, k, f = "data", g = !1, l = c;
                    if (F(b)) {
                        if (k = b.match(h), b = b.substring(k[0].length), k[3] && (k[1] ? k[3] = null : k[1] = k[3]), 
                        "^" === k[1] ? f = "inheritedData" : "^^" === k[1] && (f = "inheritedData", l = c.parent()), 
                        "?" === k[2] && (g = !0), e = null, d && "data" === f && (e = d[b]) && (e = e.instance), 
                        e = e || l[f]("$" + b + "Controller"), !e && !g) throw ja("ctreq", b, a);
                        return e || null;
                    }
                    return H(b) && (e = [], s(b, function(b) {
                        e.push(L(a, b, c, d));
                    })), e;
                }
                function v(a, c, f, g, h) {
                    function l(a, b, c) {
                        var d;
                        return Va(a) || (c = b, b = a, a = t), z && (d = O), c || (c = z ? W.parent() : W), 
                        h(a, b, d, c, wa);
                    }
                    var r, w, u, A, O, fb, W, J;
                    if (d === f ? (J = e, W = e.$$element) : (W = D(f), J = new Yb(W, e)), T && (A = c.$new(!0)), 
                    h && (fb = l, fb.$$boundTransclude = h), C && (X = {}, O = {}, s(C, function(a) {
                        var b = {
                            $scope: a === T || a.$$isolateScope ? A : c,
                            $element: W,
                            $attrs: J,
                            $transclude: fb
                        };
                        u = a.controller, "@" == u && (u = J[a.name]), b = p(u, b, !0, a.controllerAs), 
                        O[a.name] = b, z || W.data("$" + a.name + "Controller", b.instance), X[a.name] = b;
                    })), T) {
                        E.$$addScopeInfo(W, A, !0, !(ka && (ka === T || ka === T.$$originalDirective))), 
                        E.$$addScopeClass(W, !0), g = X && X[T.name];
                        var xa = A;
                        g && g.identifier && !0 === T.bindToController && (xa = g.instance), s(A.$$isolateBindings = T.$$isolateBindings, function(a, d) {
                            var g, h, l, k, e = a.attrName, f = a.optional;
                            switch (a.mode) {
                              case "@":
                                J.$observe(e, function(a) {
                                    xa[d] = a;
                                }), J.$$observers[e].$$scope = c, J[e] && (xa[d] = b(J[e])(c));
                                break;

                              case "=":
                                if (f && !J[e]) break;
                                h = P(J[e]), k = h.literal ? ga : function(a, b) {
                                    return a === b || a !== a && b !== b;
                                }, l = h.assign || function() {
                                    throw g = xa[d] = h(c), ja("nonassign", J[e], T.name);
                                }, g = xa[d] = h(c), f = function(a) {
                                    return k(a, xa[d]) || (k(a, g) ? l(c, a = xa[d]) : xa[d] = a), g = a;
                                }, f.$stateful = !0, f = a.collection ? c.$watchCollection(J[e], f) : c.$watch(P(J[e], f), null, h.literal), 
                                A.$on("$destroy", f);
                                break;

                              case "&":
                                h = P(J[e]), xa[d] = function(a) {
                                    return h(c, a);
                                };
                            }
                        });
                    }
                    for (X && (s(X, function(a) {
                        a();
                    }), X = null), g = 0, r = k.length; r > g; g++) w = k[g], $(w, w.isolateScope ? A : c, W, J, w.require && L(w.directiveName, w.require, W, O), fb);
                    var wa = c;
                    for (T && (T.template || null === T.templateUrl) && (wa = A), a && a(wa, f.childNodes, t, h), 
                    g = n.length - 1; g >= 0; g--) w = n[g], $(w, w.isolateScope ? A : c, W, J, w.require && L(w.directiveName, w.require, W, O), fb);
                }
                r = r || {};
                for (var O, X, K, x, N, Q, A = -Number.MAX_VALUE, C = r.controllerDirectives, T = r.newIsolateScopeDirective, ka = r.templateDirective, fa = r.nonTlbTranscludeDirective, da = !1, B = !1, z = r.hasElementTranscludeDirective, aa = e.$$element = D(d), Aa = f, M = 0, R = a.length; R > M; M++) {
                    K = a[M];
                    var Pa = K.$$start, gb = K.$$end;
                    if (Pa && (aa = wa(d, Pa, gb)), N = t, A > K.priority) break;
                    if ((N = K.scope) && (K.templateUrl || (I(N) ? (Oa("new/isolated scope", T || O, K, aa), 
                    T = K) : Oa("new/isolated scope", T, K, aa)), O = O || K), x = K.name, !K.templateUrl && K.controller && (N = K.controller, 
                    C = C || {}, Oa("'" + x + "' controller", C[x], K, aa), C[x] = K), (N = K.transclude) && (da = !0, 
                    K.$$tlb || (Oa("transclusion", fa, K, aa), fa = K), "element" == N ? (z = !0, A = K.priority, 
                    N = aa, aa = e.$$element = D(Y.createComment(" " + x + ": " + e[x] + " ")), d = aa[0], 
                    V(g, Za.call(N, 0), d), Aa = E(N, f, A, l && l.name, {
                        nonTlbTranscludeDirective: fa
                    })) : (N = D(Vb(d)).contents(), aa.empty(), Aa = E(N, f))), K.template) if (B = !0, 
                    Oa("template", ka, K, aa), ka = K, N = G(K.template) ? K.template(aa, e) : K.template, 
                    N = Tc(N), K.replace) {
                        if (l = K, N = Tb.test(N) ? Uc(Xb(K.templateNamespace, U(N))) : [], d = N[0], 1 != N.length || d.nodeType !== oa) throw ja("tplrt", x, "");
                        V(g, aa, d), R = {
                            $attr: {}
                        }, N = W(d, [], R);
                        var ba = a.splice(M + 1, a.length - (M + 1));
                        T && y(N), a = a.concat(N).concat(ba), Rc(e, R), R = a.length;
                    } else aa.html(N);
                    if (K.templateUrl) B = !0, Oa("template", ka, K, aa), ka = K, K.replace && (l = K), 
                    v = S(a.splice(M, a.length - M), aa, e, g, da && Aa, k, n, {
                        controllerDirectives: C,
                        newIsolateScopeDirective: T,
                        templateDirective: ka,
                        nonTlbTranscludeDirective: fa
                    }), R = a.length; else if (K.compile) try {
                        Q = K.compile(aa, e, Aa), G(Q) ? w(null, Q, Pa, gb) : Q && w(Q.pre, Q.post, Pa, gb);
                    } catch (of) {
                        c(of, va(aa));
                    }
                    K.terminal && (v.terminal = !0, A = Math.max(A, K.priority));
                }
                return v.scope = O && !0 === O.scope, v.transcludeOnThisElement = da, v.elementTranscludeOnThisElement = z, 
                v.templateOnThisElement = B, v.transclude = Aa, r.hasElementTranscludeDirective = z, 
                v;
            }
            function y(a) {
                for (var b = 0, c = a.length; c > b; b++) a[b] = Pb(a[b], {
                    $$isolateScope: !0
                });
            }
            function da(b, e, f, g, h, l, k) {
                if (e === h) return null;
                if (h = null, d.hasOwnProperty(e)) {
                    var q;
                    e = a.get(e + "Directive");
                    for (var r = 0, p = e.length; p > r; r++) try {
                        q = e[r], (g === t || g > q.priority) && -1 != q.restrict.indexOf(f) && (l && (q = Pb(q, {
                            $$start: l,
                            $$end: k
                        })), b.push(q), h = q);
                    } catch (w) {
                        c(w);
                    }
                }
                return h;
            }
            function B(b) {
                if (d.hasOwnProperty(b)) for (var c = a.get(b + "Directive"), e = 0, f = c.length; f > e; e++) if (b = c[e], 
                b.multiElement) return !0;
                return !1;
            }
            function Rc(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                s(a, function(d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), 
                    a.$set(e, d, !0, c[e]));
                }), s(b, function(b, f) {
                    "class" == f ? (O(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), 
                    a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, 
                    d[f] = c[f]);
                });
            }
            function S(a, b, c, d, e, f, g, h) {
                var k, q, l = [], n = b[0], p = a.shift(), w = Pb(p, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: p
                }), P = G(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl, u = p.templateNamespace;
                return b.empty(), r(L.getTrustedResourceUrl(P)).then(function(r) {
                    var L, v;
                    if (r = Tc(r), p.replace) {
                        if (r = Tb.test(r) ? Uc(Xb(u, U(r))) : [], L = r[0], 1 != r.length || L.nodeType !== oa) throw ja("tplrt", p.name, P);
                        r = {
                            $attr: {}
                        }, V(d, b, L);
                        var A = W(L, [], r);
                        I(p.scope) && y(A), a = A.concat(a), Rc(c, r);
                    } else L = n, b.html(r);
                    for (a.unshift(w), k = fa(a, L, c, e, b, p, f, g, h), s(d, function(a, c) {
                        a == L && (d[c] = b[0]);
                    }), q = T(b[0].childNodes, e); l.length; ) {
                        r = l.shift(), v = l.shift();
                        var C = l.shift(), E = l.shift(), A = b[0];
                        if (!r.$$destroyed) {
                            if (v !== n) {
                                var J = v.className;
                                h.hasElementTranscludeDirective && p.replace || (A = Vb(L)), V(C, D(v), A), O(D(A), J);
                            }
                            v = k.transcludeOnThisElement ? X(r, k.transclude, E) : E, k(q, r, A, d, v);
                        }
                    }
                    l = null;
                }), function(a, b, c, d, e) {
                    a = e, b.$$destroyed || (l ? l.push(b, c, d, a) : (k.transcludeOnThisElement && (a = X(b, k.transclude, e)), 
                    k(q, b, c, d, a)));
                };
            }
            function N(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
            }
            function Oa(a, b, c, d) {
                if (b) throw ja("multidir", b.name, c.name, a, va(d));
            }
            function M(a, c) {
                var d = b(c, !0);
                d && a.push({
                    priority: 0,
                    compile: function(a) {
                        a = a.parent();
                        var b = !!a.length;
                        return b && E.$$addBindingClass(a), function(a, c) {
                            var e = c.parent();
                            b || E.$$addBindingClass(e), E.$$addBindingInfo(e, d.expressions), a.$watch(d, function(a) {
                                c[0].nodeValue = a;
                            });
                        };
                    }
                });
            }
            function Xb(a, b) {
                switch (a = Q(a || "html")) {
                  case "svg":
                  case "math":
                    var c = Y.createElement("div");
                    return c.innerHTML = "<" + a + ">" + b + "</" + a + ">", c.childNodes[0].childNodes;

                  default:
                    return b;
                }
            }
            function R(a, b) {
                if ("srcdoc" == b) return L.HTML;
                var c = ua(a);
                return "xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b) ? L.RESOURCE_URL : void 0;
            }
            function Pa(a, c, d, e, f) {
                var h = R(a, e);
                f = g[e] || f;
                var k = b(d, !0, h, f);
                if (k) {
                    if ("multiple" === e && "select" === ua(a)) throw ja("selmulti", va(a));
                    c.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(a, c, g) {
                                    if (c = g.$$observers || (g.$$observers = {}), l.test(e)) throw ja("nodomevents");
                                    var n = g[e];
                                    n !== d && (k = n && b(n, !0, h, f), d = n), k && (g[e] = k(a), (c[e] || (c[e] = [])).$$inter = !0, 
                                    (g.$$observers && g.$$observers[e].$$scope || a).$watch(k, function(a, b) {
                                        "class" === e && a != b ? g.$updateClass(a, b) : g.$set(e, a);
                                    }));
                                }
                            };
                        }
                    });
                }
            }
            function V(a, b, c) {
                var g, h, d = b[0], e = b.length, f = d.parentNode;
                if (a) for (g = 0, h = a.length; h > g; g++) if (a[g] == d) {
                    a[g++] = c, h = g + e - 1;
                    for (var l = a.length; l > g; g++, h++) l > h ? a[g] = a[h] : delete a[g];
                    a.length -= e - 1, a.context === d && (a.context = c);
                    break;
                }
                for (f && f.replaceChild(c, d), a = Y.createDocumentFragment(), a.appendChild(d), 
                D(c).data(D(d).data()), sa ? (Rb = !0, sa.cleanData([ d ])) : delete D.cache[d[D.expando]], 
                d = 1, e = b.length; e > d; d++) f = b[d], D(f).remove(), a.appendChild(f), delete b[d];
                b[0] = c, b.length = 1;
            }
            function Z(a, b) {
                return x(function() {
                    return a.apply(null, arguments);
                }, a, b);
            }
            function $(a, b, d, e, f, g) {
                try {
                    a(b, d, e, f, g);
                } catch (h) {
                    c(h, va(d));
                }
            }
            var Yb = function(a, b) {
                if (b) {
                    var d, e, f, c = Object.keys(b);
                    for (d = 0, e = c.length; e > d; d++) f = c[d], this[f] = b[f];
                } else this.$attr = {};
                this.$$element = a;
            };
            Yb.prototype = {
                $normalize: ya,
                $addClass: function(a) {
                    a && 0 < a.length && C.addClass(this.$$element, a);
                },
                $removeClass: function(a) {
                    a && 0 < a.length && C.removeClass(this.$$element, a);
                },
                $updateClass: function(a, b) {
                    var c = Vc(a, b);
                    c && c.length && C.addClass(this.$$element, c), (c = Vc(b, a)) && c.length && C.removeClass(this.$$element, c);
                },
                $set: function(a, b, d, e) {
                    var f = this.$$element[0], g = Mc(f, a), h = kf(f, a), f = a;
                    if (g ? (this.$$element.prop(a, b), e = g) : h && (this[h] = b, f = h), this[a] = b, 
                    e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = uc(a, "-")), 
                    g = ua(this.$$element), "a" === g && "href" === a || "img" === g && "src" === a) this[a] = b = A(b, "src" === a); else if ("img" === g && "srcset" === a) {
                        for (var g = "", h = U(b), l = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, l = /\s/.test(h) ? l : /(,)/, h = h.split(l), l = Math.floor(h.length / 2), k = 0; l > k; k++) var q = 2 * k, g = g + A(U(h[q]), !0), g = g + (" " + U(h[q + 1]));
                        h = U(h[2 * k]).split(/\s/), g += A(U(h[0]), !0), 2 === h.length && (g += " " + U(h[1])), 
                        this[a] = b = g;
                    }
                    !1 !== d && (null === b || b === t ? this.$$element.removeAttr(e) : this.$$element.attr(e, b)), 
                    (a = this.$$observers) && s(a[f], function(a) {
                        try {
                            a(b);
                        } catch (d) {
                            c(d);
                        }
                    });
                },
                $observe: function(a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = ha()), e = d[a] || (d[a] = []);
                    return e.push(b), v.$evalAsync(function() {
                        !e.$$inter && c.hasOwnProperty(a) && b(c[a]);
                    }), function() {
                        Xa(e, b);
                    };
                }
            };
            var Aa = b.startSymbol(), ka = b.endSymbol(), Tc = "{{" == Aa || "}}" == ka ? pa : function(a) {
                return a.replace(/\{\{/g, Aa).replace(/}}/g, ka);
            }, gb = /^ngAttr[A-Z]/;
            return E.$$addBindingInfo = k ? function(a, b) {
                var c = a.data("$binding") || [];
                H(b) ? c = c.concat(b) : c.push(b), a.data("$binding", c);
            } : z, E.$$addBindingClass = k ? function(a) {
                O(a, "ng-binding");
            } : z, E.$$addScopeInfo = k ? function(a, b, c, d) {
                a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b);
            } : z, E.$$addScopeClass = k ? function(a, b) {
                O(a, b ? "ng-isolate-scope" : "ng-scope");
            } : z, E;
        } ];
    }
    function ya(b) {
        return db(b.replace(Sc, ""));
    }
    function Vc(b, a) {
        var c = "", d = b.split(/\s+/), e = a.split(/\s+/), f = 0;
        a: for (;f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++) if (g == e[h]) continue a;
            c += (0 < c.length ? " " : "") + g;
        }
        return c;
    }
    function Uc(b) {
        b = D(b);
        var a = b.length;
        if (1 >= a) return b;
        for (;a--; ) 8 === b[a].nodeType && pf.call(b, a, 1);
        return b;
    }
    function Fe() {
        var b = {}, a = !1, c = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(a, c) {
            Ma(a, "controller"), I(a) ? x(b, a) : b[a] = c;
        }, this.allowGlobals = function() {
            a = !0;
        }, this.$get = [ "$injector", "$window", function(d, e) {
            function f(a, b, c, d) {
                if (!a || !I(a.$scope)) throw S("$controller")("noscp", d, b);
                a.$scope[b] = c;
            }
            return function(g, h, l, k) {
                var m, n, q;
                if (l = !0 === l, k && F(k) && (q = k), F(g)) {
                    if (k = g.match(c), !k) throw qf("ctrlfmt", g);
                    n = k[1], q = q || k[3], g = b.hasOwnProperty(n) ? b[n] : wc(h.$scope, n, !0) || (a ? wc(e, n, !0) : t), 
                    tb(g, n, !0);
                }
                return l ? (l = (H(g) ? g[g.length - 1] : g).prototype, m = Object.create(l || null), 
                q && f(h, q, m, n || g.name), x(function() {
                    return d.invoke(g, m, h, n), m;
                }, {
                    instance: m,
                    identifier: q
                })) : (m = d.instantiate(g, h, n), q && f(h, q, m, n || g.name), m);
            };
        } ];
    }
    function Ge() {
        this.$get = [ "$window", function(b) {
            return D(b.document);
        } ];
    }
    function He() {
        this.$get = [ "$log", function(b) {
            return function() {
                b.error.apply(b, arguments);
            };
        } ];
    }
    function Zb(b, a) {
        if (F(b)) {
            var c = b.replace(rf, "").trim();
            if (c) {
                var d = a("Content-Type");
                (d = d && 0 === d.indexOf(Wc)) || (d = (d = c.match(sf)) && tf[d[0]].test(c)), d && (b = pc(c));
            }
        }
        return b;
    }
    function Xc(b) {
        var c, d, e, a = ha();
        return b ? (s(b.split("\n"), function(b) {
            e = b.indexOf(":"), c = Q(U(b.substr(0, e))), d = U(b.substr(e + 1)), c && (a[c] = a[c] ? a[c] + ", " + d : d);
        }), a) : a;
    }
    function Yc(b) {
        var a = I(b) ? b : t;
        return function(c) {
            return a || (a = Xc(b)), c ? (c = a[Q(c)], void 0 === c && (c = null), c) : a;
        };
    }
    function Zc(b, a, c, d) {
        return G(d) ? d(b, a, c) : (s(d, function(d) {
            b = d(b, a, c);
        }), b);
    }
    function Ke() {
        var b = this.defaults = {
            transformResponse: [ Zb ],
            transformRequest: [ function(a) {
                return I(a) && "[object File]" !== Da.call(a) && "[object Blob]" !== Da.call(a) && "[object FormData]" !== Da.call(a) ? $a(a) : a;
            } ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: ra($b),
                put: ra($b),
                patch: ra($b)
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        }, a = !1;
        this.useApplyAsync = function(b) {
            return y(b) ? (a = !!b, this) : a;
        };
        var c = this.interceptors = [];
        this.$get = [ "$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(d, e, f, g, h, l) {
            function k(a) {
                function c(a) {
                    var b = x({}, a);
                    return b.data = a.data ? Zc(a.data, a.headers, a.status, e.transformResponse) : a.data, 
                    a = a.status, a >= 200 && 300 > a ? b : h.reject(b);
                }
                function d(a) {
                    var b, c = {};
                    return s(a, function(a, d) {
                        G(a) ? (b = a(), null != b && (c[d] = b)) : c[d] = a;
                    }), c;
                }
                if (!ca.isObject(a)) throw S("$http")("badreq", a);
                var e = x({
                    method: "get",
                    transformRequest: b.transformRequest,
                    transformResponse: b.transformResponse
                }, a);
                e.headers = function(a) {
                    var f, g, c = b.headers, e = x({}, a.headers), c = x({}, c.common, c[Q(a.method)]);
                    a: for (f in c) {
                        a = Q(f);
                        for (g in e) if (Q(g) === a) continue a;
                        e[f] = c[f];
                    }
                    return d(e);
                }(a), e.method = vb(e.method);
                var f = [ function(a) {
                    var d = a.headers, e = Zc(a.data, Yc(d), t, a.transformRequest);
                    return B(e) && s(d, function(a, b) {
                        "content-type" === Q(b) && delete d[b];
                    }), B(a.withCredentials) && !B(b.withCredentials) && (a.withCredentials = b.withCredentials), 
                    m(a, e).then(c, c);
                }, t ], g = h.when(e);
                for (s(u, function(a) {
                    (a.request || a.requestError) && f.unshift(a.request, a.requestError), (a.response || a.responseError) && f.push(a.response, a.responseError);
                }); f.length; ) {
                    a = f.shift();
                    var l = f.shift(), g = g.then(a, l);
                }
                return g.success = function(a) {
                    return g.then(function(b) {
                        a(b.data, b.status, b.headers, e);
                    }), g;
                }, g.error = function(a) {
                    return g.then(null, function(b) {
                        a(b.data, b.status, b.headers, e);
                    }), g;
                }, g;
            }
            function m(c, f) {
                function l(b, c, d, e) {
                    function f() {
                        m(c, b, d, e);
                    }
                    O && (b >= 200 && 300 > b ? O.put(X, [ b, c, Xc(d), e ]) : O.remove(X)), a ? g.$applyAsync(f) : (f(), 
                    g.$$phase || g.$apply());
                }
                function m(a, b, d, e) {
                    b = Math.max(b, 0), (b >= 200 && 300 > b ? C.resolve : C.reject)({
                        data: a,
                        status: b,
                        headers: Yc(d),
                        config: c,
                        statusText: e
                    });
                }
                function w(a) {
                    m(a.data, a.status, ra(a.headers()), a.statusText);
                }
                function u() {
                    var a = k.pendingRequests.indexOf(c);
                    -1 !== a && k.pendingRequests.splice(a, 1);
                }
                var O, E, C = h.defer(), A = C.promise, s = c.headers, X = n(c.url, c.params);
                return k.pendingRequests.push(c), A.then(u, u), !c.cache && !b.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (O = I(c.cache) ? c.cache : I(b.cache) ? b.cache : q), 
                O && (E = O.get(X), y(E) ? E && G(E.then) ? E.then(w, w) : H(E) ? m(E[1], E[0], ra(E[2]), E[3]) : m(E, 200, {}, "OK") : O.put(X, A)), 
                B(E) && ((E = $c(c.url) ? e.cookies()[c.xsrfCookieName || b.xsrfCookieName] : t) && (s[c.xsrfHeaderName || b.xsrfHeaderName] = E), 
                d(c.method, X, f, l, s, c.timeout, c.withCredentials, c.responseType)), A;
            }
            function n(a, b) {
                if (!b) return a;
                var c = [];
                return Ed(b, function(a, b) {
                    null === a || B(a) || (H(a) || (a = [ a ]), s(a, function(a) {
                        I(a) && (a = qa(a) ? a.toISOString() : $a(a)), c.push(Fa(b) + "=" + Fa(a));
                    }));
                }), 0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&")), a;
            }
            var q = f("$http"), u = [];
            return s(c, function(a) {
                u.unshift(F(a) ? l.get(a) : l.invoke(a));
            }), k.pendingRequests = [], function() {
                s(arguments, function(a) {
                    k[a] = function(b, c) {
                        return k(x(c || {}, {
                            method: a,
                            url: b
                        }));
                    };
                });
            }("get", "delete", "head", "jsonp"), function() {
                s(arguments, function(a) {
                    k[a] = function(b, c, d) {
                        return k(x(d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }));
                    };
                });
            }("post", "put", "patch"), k.defaults = b, k;
        } ];
    }
    function uf() {
        return new M.XMLHttpRequest();
    }
    function Le() {
        this.$get = [ "$browser", "$window", "$document", function(b, a, c) {
            return vf(b, uf, b.defer, a.angular.callbacks, c[0]);
        } ];
    }
    function vf(b, a, c, d, e) {
        function f(a, b, c) {
            var f = e.createElement("script"), m = null;
            return f.type = "text/javascript", f.src = a, f.async = !0, m = function(a) {
                f.removeEventListener("load", m, !1), f.removeEventListener("error", m, !1), e.body.removeChild(f), 
                f = null;
                var g = -1, u = "unknown";
                a && ("load" !== a.type || d[b].called || (a = {
                    type: "error"
                }), u = a.type, g = "error" === a.type ? 404 : 200), c && c(g, u);
            }, f.addEventListener("load", m, !1), f.addEventListener("error", m, !1), e.body.appendChild(f), 
            m;
        }
        return function(e, h, l, k, m, n, q, u) {
            function r() {
                v && v(), w && w.abort();
            }
            function P(a, d, e, f, g) {
                C !== t && c.cancel(C), v = w = null, a(d, e, f, g), b.$$completeOutstandingRequest(z);
            }
            if (b.$$incOutstandingRequestCount(), h = h || b.url(), "jsonp" == Q(e)) {
                var p = "_" + (d.counter++).toString(36);
                d[p] = function(a) {
                    d[p].data = a, d[p].called = !0;
                };
                var v = f(h.replace("JSON_CALLBACK", "angular.callbacks." + p), p, function(a, b) {
                    P(k, a, d[p].data, "", b), d[p] = z;
                });
            } else {
                var w = a();
                if (w.open(e, h, !0), s(m, function(a, b) {
                    y(a) && w.setRequestHeader(b, a);
                }), w.onload = function() {
                    var a = w.statusText || "", b = "response" in w ? w.response : w.responseText, c = 1223 === w.status ? 204 : w.status;
                    0 === c && (c = b ? 200 : "file" == Ba(h).protocol ? 404 : 0), P(k, c, b, w.getAllResponseHeaders(), a);
                }, e = function() {
                    P(k, -1, null, null, "");
                }, w.onerror = e, w.onabort = e, q && (w.withCredentials = !0), u) try {
                    w.responseType = u;
                } catch (L) {
                    if ("json" !== u) throw L;
                }
                w.send(l || null);
            }
            if (n > 0) var C = c(r, n); else n && G(n.then) && n.then(r);
        };
    }
    function Ie() {
        var b = "{{", a = "}}";
        this.startSymbol = function(a) {
            return a ? (b = a, this) : b;
        }, this.endSymbol = function(b) {
            return b ? (a = b, this) : a;
        }, this.$get = [ "$parse", "$exceptionHandler", "$sce", function(c, d, e) {
            function f(a) {
                return "\\\\\\" + a;
            }
            function g(f, g, u, r) {
                function P(c) {
                    return c.replace(k, b).replace(m, a);
                }
                function p(a) {
                    try {
                        var b = a;
                        a = u ? e.getTrusted(u, b) : e.valueOf(b);
                        var c;
                        if (r && !y(a)) c = a; else if (null == a) c = ""; else {
                            switch (typeof a) {
                              case "string":
                                break;

                              case "number":
                                a = "" + a;
                                break;

                              default:
                                a = $a(a);
                            }
                            c = a;
                        }
                        return c;
                    } catch (g) {
                        c = ac("interr", f, g.toString()), d(c);
                    }
                }
                r = !!r;
                for (var v, w, L = 0, C = [], A = [], O = f.length, E = [], s = []; O > L; ) {
                    if (-1 == (v = f.indexOf(b, L)) || -1 == (w = f.indexOf(a, v + h))) {
                        L !== O && E.push(P(f.substring(L)));
                        break;
                    }
                    L !== v && E.push(P(f.substring(L, v))), L = f.substring(v + h, w), C.push(L), A.push(c(L, p)), 
                    L = w + l, s.push(E.length), E.push("");
                }
                if (u && 1 < E.length) throw ac("noconcat", f);
                if (!g || C.length) {
                    var X = function(a) {
                        for (var b = 0, c = C.length; c > b; b++) {
                            if (r && B(a[b])) return;
                            E[s[b]] = a[b];
                        }
                        return E.join("");
                    };
                    return x(function(a) {
                        var b = 0, c = C.length, e = Array(c);
                        try {
                            for (;c > b; b++) e[b] = A[b](a);
                            return X(e);
                        } catch (g) {
                            a = ac("interr", f, g.toString()), d(a);
                        }
                    }, {
                        exp: f,
                        expressions: C,
                        $$watchDelegate: function(a, b, c) {
                            var d;
                            return a.$watchGroup(A, function(c, e) {
                                var f = X(c);
                                G(b) && b.call(this, f, c !== e ? d : f, a), d = f;
                            }, c);
                        }
                    });
                }
            }
            var h = b.length, l = a.length, k = new RegExp(b.replace(/./g, f), "g"), m = new RegExp(a.replace(/./g, f), "g");
            return g.startSymbol = function() {
                return b;
            }, g.endSymbol = function() {
                return a;
            }, g;
        } ];
    }
    function Je() {
        this.$get = [ "$rootScope", "$window", "$q", "$$q", function(b, a, c, d) {
            function e(e, h, l, k) {
                var m = a.setInterval, n = a.clearInterval, q = 0, u = y(k) && !k, r = (u ? d : c).defer(), P = r.promise;
                return l = y(l) ? l : 0, P.then(null, null, e), P.$$intervalId = m(function() {
                    r.notify(q++), l > 0 && q >= l && (r.resolve(q), n(P.$$intervalId), delete f[P.$$intervalId]), 
                    u || b.$apply();
                }, h), f[P.$$intervalId] = r, P;
            }
            var f = {};
            return e.cancel = function(b) {
                return b && b.$$intervalId in f ? (f[b.$$intervalId].reject("canceled"), a.clearInterval(b.$$intervalId), 
                delete f[b.$$intervalId], !0) : !1;
            }, e;
        } ];
    }
    function Rd() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [ {
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    } ],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: [ "AM", "PM" ],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(b) {
                    return 1 === b ? "one" : "other";
                }
            };
        };
    }
    function bc(b) {
        b = b.split("/");
        for (var a = b.length; a--; ) b[a] = rb(b[a]);
        return b.join("/");
    }
    function ad(b, a) {
        var c = Ba(b);
        a.$$protocol = c.protocol, a.$$host = c.hostname, a.$$port = ba(c.port) || wf[c.protocol] || null;
    }
    function bd(b, a) {
        var c = "/" !== b.charAt(0);
        c && (b = "/" + b);
        var d = Ba(b);
        a.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname), 
        a.$$search = rc(d.search), a.$$hash = decodeURIComponent(d.hash), a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path);
    }
    function za(b, a) {
        return 0 === a.indexOf(b) ? a.substr(b.length) : void 0;
    }
    function Ha(b) {
        var a = b.indexOf("#");
        return -1 == a ? b : b.substr(0, a);
    }
    function Gb(b) {
        return b.replace(/(#.+)|#$/, "$1");
    }
    function cc(b) {
        return b.substr(0, Ha(b).lastIndexOf("/") + 1);
    }
    function dc(b, a) {
        this.$$html5 = !0, a = a || "";
        var c = cc(b);
        ad(b, this), this.$$parse = function(a) {
            var b = za(c, a);
            if (!F(b)) throw Hb("ipthprfx", a, c);
            bd(b, this), this.$$path || (this.$$path = "/"), this.$$compose();
        }, this.$$compose = function() {
            var a = Qb(this.$$search), b = this.$$hash ? "#" + rb(this.$$hash) : "";
            this.$$url = bc(this.$$path) + (a ? "?" + a : "") + b, this.$$absUrl = c + this.$$url.substr(1);
        }, this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            return (f = za(b, d)) !== t ? (g = f, g = (f = za(a, f)) !== t ? c + (za("/", f) || f) : b + g) : (f = za(c, d)) !== t ? g = c + f : c == d + "/" && (g = c), 
            g && this.$$parse(g), !!g;
        };
    }
    function ec(b, a) {
        var c = cc(b);
        ad(b, this), this.$$parse = function(d) {
            d = za(b, d) || za(c, d);
            var e;
            "#" === d.charAt(0) ? (e = za(a, d), B(e) && (e = d)) : e = this.$$html5 ? d : "", 
            bd(e, this), d = this.$$path;
            var f = /^\/[A-Z]:(\/.*)/;
            0 === e.indexOf(b) && (e = e.replace(b, "")), f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d), 
            this.$$path = d, this.$$compose();
        }, this.$$compose = function() {
            var c = Qb(this.$$search), e = this.$$hash ? "#" + rb(this.$$hash) : "";
            this.$$url = bc(this.$$path) + (c ? "?" + c : "") + e, this.$$absUrl = b + (this.$$url ? a + this.$$url : "");
        }, this.$$parseLinkUrl = function(a) {
            return Ha(b) == Ha(a) ? (this.$$parse(a), !0) : !1;
        };
    }
    function cd(b, a) {
        this.$$html5 = !0, ec.apply(this, arguments);
        var c = cc(b);
        this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            return b == Ha(d) ? f = d : (g = za(c, d)) ? f = b + a + g : c === d + "/" && (f = c), 
            f && this.$$parse(f), !!f;
        }, this.$$compose = function() {
            var c = Qb(this.$$search), e = this.$$hash ? "#" + rb(this.$$hash) : "";
            this.$$url = bc(this.$$path) + (c ? "?" + c : "") + e, this.$$absUrl = b + a + this.$$url;
        };
    }
    function Ib(b) {
        return function() {
            return this[b];
        };
    }
    function dd(b, a) {
        return function(c) {
            return B(c) ? this[b] : (this[b] = a(c), this.$$compose(), this);
        };
    }
    function Me() {
        var b = "", a = {
            enabled: !1,
            requireBase: !0,
            rewriteLinks: !0
        };
        this.hashPrefix = function(a) {
            return y(a) ? (b = a, this) : b;
        }, this.html5Mode = function(b) {
            return Wa(b) ? (a.enabled = b, this) : I(b) ? (Wa(b.enabled) && (a.enabled = b.enabled), 
            Wa(b.requireBase) && (a.requireBase = b.requireBase), Wa(b.rewriteLinks) && (a.rewriteLinks = b.rewriteLinks), 
            this) : a;
        }, this.$get = [ "$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(c, d, e, f, g) {
            function h(a, b, c) {
                var e = k.url(), f = k.$$state;
                try {
                    d.url(a, b, c), k.$$state = d.state();
                } catch (g) {
                    throw k.url(e), k.$$state = f, g;
                }
            }
            function l(a, b) {
                c.$broadcast("$locationChangeSuccess", k.absUrl(), a, k.$$state, b);
            }
            var k, m;
            m = d.baseHref();
            var q, n = d.url();
            if (a.enabled) {
                if (!m && a.requireBase) throw Hb("nobase");
                q = n.substring(0, n.indexOf("/", n.indexOf("//") + 2)) + (m || "/"), m = e.history ? dc : cd;
            } else q = Ha(n), m = ec;
            k = new m(q, "#" + b), k.$$parseLinkUrl(n, n), k.$$state = d.state();
            var u = /^\s*(javascript|mailto):/i;
            f.on("click", function(b) {
                if (a.rewriteLinks && !b.ctrlKey && !b.metaKey && !b.shiftKey && 2 != b.which && 2 != b.button) {
                    for (var e = D(b.target); "a" !== ua(e[0]); ) if (e[0] === f[0] || !(e = e.parent())[0]) return;
                    var h = e.prop("href"), l = e.attr("href") || e.attr("xlink:href");
                    I(h) && "[object SVGAnimatedString]" === h.toString() && (h = Ba(h.animVal).href), 
                    u.test(h) || !h || e.attr("target") || b.isDefaultPrevented() || !k.$$parseLinkUrl(h, l) || (b.preventDefault(), 
                    k.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0));
                }
            }), Gb(k.absUrl()) != Gb(n) && d.url(k.absUrl(), !0);
            var r = !0;
            return d.onUrlChange(function(a, b) {
                c.$evalAsync(function() {
                    var f, d = k.absUrl(), e = k.$$state;
                    k.$$parse(a), k.$$state = b, f = c.$broadcast("$locationChangeStart", a, d, b, e).defaultPrevented, 
                    k.absUrl() === a && (f ? (k.$$parse(d), k.$$state = e, h(d, !1, e)) : (r = !1, l(d, e)));
                }), c.$$phase || c.$digest();
            }), c.$watch(function() {
                var a = Gb(d.url()), b = Gb(k.absUrl()), f = d.state(), g = k.$$replace, q = a !== b || k.$$html5 && e.history && f !== k.$$state;
                (r || q) && (r = !1, c.$evalAsync(function() {
                    var b = k.absUrl(), d = c.$broadcast("$locationChangeStart", b, a, k.$$state, f).defaultPrevented;
                    k.absUrl() === b && (d ? (k.$$parse(a), k.$$state = f) : (q && h(b, g, f === k.$$state ? null : k.$$state), 
                    l(a, f)));
                })), k.$$replace = !1;
            }), k;
        } ];
    }
    function Ne() {
        var b = !0, a = this;
        this.debugEnabled = function(a) {
            return y(a) ? (b = a, this) : b;
        }, this.$get = [ "$window", function(c) {
            function d(a) {
                return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), 
                a;
            }
            function e(a) {
                var b = c.console || {}, e = b[a] || b.log || z;
                a = !1;
                try {
                    a = !!e.apply;
                } catch (l) {}
                return a ? function() {
                    var a = [];
                    return s(arguments, function(b) {
                        a.push(d(b));
                    }), e.apply(b, a);
                } : function(a, b) {
                    e(a, null == b ? "" : b);
                };
            }
            return {
                log: e("log"),
                info: e("info"),
                warn: e("warn"),
                error: e("error"),
                debug: function() {
                    var c = e("debug");
                    return function() {
                        b && c.apply(a, arguments);
                    };
                }()
            };
        } ];
    }
    function ta(b, a) {
        if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b) throw la("isecfld", a);
        return b;
    }
    function ma(b, a) {
        if (b) {
            if (b.constructor === b) throw la("isecfn", a);
            if (b.window === b) throw la("isecwindow", a);
            if (b.children && (b.nodeName || b.prop && b.attr && b.find)) throw la("isecdom", a);
            if (b === Object) throw la("isecobj", a);
        }
        return b;
    }
    function fc(b) {
        return b.constant;
    }
    function hb(b, a, c, d, e) {
        ma(b, e), ma(a, e), c = c.split(".");
        for (var f, g = 0; 1 < c.length; g++) {
            f = ta(c.shift(), e);
            var h = 0 === g && a && a[f] || b[f];
            h || (h = {}, b[f] = h), b = ma(h, e);
        }
        return f = ta(c.shift(), e), ma(b[f], e), b[f] = d;
    }
    function Qa(b) {
        return "constructor" == b;
    }
    function ed(b, a, c, d, e, f, g) {
        ta(b, f), ta(a, f), ta(c, f), ta(d, f), ta(e, f);
        var h = function(a) {
            return ma(a, f);
        }, l = g || Qa(b) ? h : pa, k = g || Qa(a) ? h : pa, m = g || Qa(c) ? h : pa, n = g || Qa(d) ? h : pa, q = g || Qa(e) ? h : pa;
        return function(f, g) {
            var h = g && g.hasOwnProperty(b) ? g : f;
            return null == h ? h : (h = l(h[b]), a ? null == h ? t : (h = k(h[a]), c ? null == h ? t : (h = m(h[c]), 
            d ? null == h ? t : (h = n(h[d]), e ? null == h ? t : h = q(h[e]) : h) : h) : h) : h);
        };
    }
    function xf(b, a) {
        return function(c, d) {
            return b(c, d, ma, a);
        };
    }
    function yf(b, a, c) {
        var d = a.expensiveChecks, e = d ? zf : Af, f = e[b];
        if (f) return f;
        var g = b.split("."), h = g.length;
        if (a.csp) f = 6 > h ? ed(g[0], g[1], g[2], g[3], g[4], c, d) : function(a, b) {
            var f, e = 0;
            do f = ed(g[e++], g[e++], g[e++], g[e++], g[e++], c, d)(a, b), b = t, a = f; while (h > e);
            return f;
        }; else {
            var l = "";
            d && (l += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var k = d;
            s(g, function(a, b) {
                ta(a, c);
                var e = (b ? "s" : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + "." + a;
                (d || Qa(a)) && (e = "eso(" + e + ", fe)", k = !0), l += "if(s == null) return undefined;\ns=" + e + ";\n";
            }), l += "return s;", a = new Function("s", "l", "eso", "fe", l), a.toString = ea(l), 
            k && (a = xf(a, c)), f = a;
        }
        return f.sharedGetter = !0, f.assign = function(a, c, d) {
            return hb(a, d, b, c, b);
        }, e[b] = f;
    }
    function gc(b) {
        return G(b.valueOf) ? b.valueOf() : Bf.call(b);
    }
    function Oe() {
        var b = ha(), a = ha();
        this.$get = [ "$filter", "$sniffer", function(c, d) {
            function e(a) {
                var b = a;
                return a.sharedGetter && (b = function(b, c) {
                    return a(b, c);
                }, b.literal = a.literal, b.constant = a.constant, b.assign = a.assign), b;
            }
            function f(a, b) {
                for (var c = 0, d = a.length; d > c; c++) {
                    var e = a[c];
                    e.constant || (e.inputs ? f(e.inputs, b) : -1 === b.indexOf(e) && b.push(e));
                }
                return b;
            }
            function g(a, b) {
                return null == a || null == b ? a === b : "object" == typeof a && (a = gc(a), "object" == typeof a) ? !1 : a === b || a !== a && b !== b;
            }
            function h(a, b, c, d) {
                var h, e = d.$$inputs || (d.$$inputs = f(d.inputs, []));
                if (1 === e.length) {
                    var l = g, e = e[0];
                    return a.$watch(function(a) {
                        var b = e(a);
                        return g(b, l) || (h = d(a), l = b && gc(b)), h;
                    }, b, c);
                }
                for (var k = [], q = 0, n = e.length; n > q; q++) k[q] = g;
                return a.$watch(function(a) {
                    for (var b = !1, c = 0, f = e.length; f > c; c++) {
                        var l = e[c](a);
                        (b || (b = !g(l, k[c]))) && (k[c] = l && gc(l));
                    }
                    return b && (h = d(a)), h;
                }, b, c);
            }
            function l(a, b, c, d) {
                var e, f;
                return e = a.$watch(function(a) {
                    return d(a);
                }, function(a, c, d) {
                    f = a, G(b) && b.apply(this, arguments), y(a) && d.$$postDigest(function() {
                        y(f) && e();
                    });
                }, c);
            }
            function k(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    return s(a, function(a) {
                        y(a) || (b = !1);
                    }), b;
                }
                var f, g;
                return f = a.$watch(function(a) {
                    return d(a);
                }, function(a, c, d) {
                    g = a, G(b) && b.call(this, a, c, d), e(a) && d.$$postDigest(function() {
                        e(g) && f();
                    });
                }, c);
            }
            function m(a, b, c, d) {
                var e;
                return e = a.$watch(function(a) {
                    return d(a);
                }, function() {
                    G(b) && b.apply(this, arguments), e();
                }, c);
            }
            function n(a, b) {
                if (!b) return a;
                var c = a.$$watchDelegate, c = c !== k && c !== l ? function(c, d) {
                    var e = a(c, d);
                    return b(e, c, d);
                } : function(c, d) {
                    var e = a(c, d), f = b(e, c, d);
                    return y(e) ? f : e;
                };
                return a.$$watchDelegate && a.$$watchDelegate !== h ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = h, 
                c.inputs = [ a ]), c;
            }
            var q = {
                csp: d.csp,
                expensiveChecks: !1
            }, u = {
                csp: d.csp,
                expensiveChecks: !0
            };
            return function(d, f, g) {
                var v, w, L;
                switch (typeof d) {
                  case "string":
                    L = d = d.trim();
                    var C = g ? a : b;
                    return v = C[L], v || (":" === d.charAt(0) && ":" === d.charAt(1) && (w = !0, d = d.substring(2)), 
                    g = g ? u : q, v = new hc(g), v = new ib(v, c, g).parse(d), v.constant ? v.$$watchDelegate = m : w ? (v = e(v), 
                    v.$$watchDelegate = v.literal ? k : l) : v.inputs && (v.$$watchDelegate = h), C[L] = v), 
                    n(v, f);

                  case "function":
                    return n(d, f);

                  default:
                    return n(z, f);
                }
            };
        } ];
    }
    function Qe() {
        this.$get = [ "$rootScope", "$exceptionHandler", function(b, a) {
            return fd(function(a) {
                b.$evalAsync(a);
            }, a);
        } ];
    }
    function Re() {
        this.$get = [ "$browser", "$exceptionHandler", function(b, a) {
            return fd(function(a) {
                b.defer(a);
            }, a);
        } ];
    }
    function fd(b, a) {
        function c(a, b, c) {
            function d(b) {
                return function(c) {
                    e || (e = !0, b.call(a, c));
                };
            }
            var e = !1;
            return [ d(b), d(c) ];
        }
        function d() {
            this.$$state = {
                status: 0
            };
        }
        function e(a, b) {
            return function(c) {
                b.call(a, c);
            };
        }
        function f(c) {
            !c.processScheduled && c.pending && (c.processScheduled = !0, b(function() {
                var b, d, e;
                e = c.pending, c.processScheduled = !1, c.pending = t;
                for (var f = 0, g = e.length; g > f; ++f) {
                    d = e[f][0], b = e[f][c.status];
                    try {
                        G(b) ? d.resolve(b(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value);
                    } catch (h) {
                        d.reject(h), a(h);
                    }
                }
            }));
        }
        function g() {
            this.promise = new d(), this.resolve = e(this, this.resolve), this.reject = e(this, this.reject), 
            this.notify = e(this, this.notify);
        }
        var h = S("$q", TypeError);
        d.prototype = {
            then: function(a, b, c) {
                var d = new g();
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([ d, a, b, c ]), 
                0 < this.$$state.status && f(this.$$state), d.promise;
            },
            "catch": function(a) {
                return this.then(null, a);
            },
            "finally": function(a, b) {
                return this.then(function(b) {
                    return k(b, !0, a);
                }, function(b) {
                    return k(b, !1, a);
                }, b);
            }
        }, g.prototype = {
            resolve: function(a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(h("qcycle", a)) : this.$$resolve(a));
            },
            $$resolve: function(b) {
                var d, e;
                e = c(this, this.$$resolve, this.$$reject);
                try {
                    (I(b) || G(b)) && (d = b && b.then), G(d) ? (this.promise.$$state.status = -1, d.call(b, e[0], e[1], this.notify)) : (this.promise.$$state.value = b, 
                    this.promise.$$state.status = 1, f(this.promise.$$state));
                } catch (g) {
                    e[1](g), a(g);
                }
            },
            reject: function(a) {
                this.promise.$$state.status || this.$$reject(a);
            },
            $$reject: function(a) {
                this.promise.$$state.value = a, this.promise.$$state.status = 2, f(this.promise.$$state);
            },
            notify: function(c) {
                var d = this.promise.$$state.pending;
                0 >= this.promise.$$state.status && d && d.length && b(function() {
                    for (var b, e, f = 0, g = d.length; g > f; f++) {
                        e = d[f][0], b = d[f][3];
                        try {
                            e.notify(G(b) ? b(c) : c);
                        } catch (h) {
                            a(h);
                        }
                    }
                });
            }
        };
        var l = function(a, b) {
            var c = new g();
            return b ? c.resolve(a) : c.reject(a), c.promise;
        }, k = function(a, b, c) {
            var d = null;
            try {
                G(c) && (d = c());
            } catch (e) {
                return l(e, !1);
            }
            return d && G(d.then) ? d.then(function() {
                return l(a, b);
            }, function(a) {
                return l(a, !1);
            }) : l(a, b);
        }, m = function(a, b, c, d) {
            var e = new g();
            return e.resolve(a), e.promise.then(b, c, d);
        }, n = function u(a) {
            if (!G(a)) throw h("norslvr", a);
            if (!(this instanceof u)) return new u(a);
            var b = new g();
            return a(function(a) {
                b.resolve(a);
            }, function(a) {
                b.reject(a);
            }), b.promise;
        };
        return n.defer = function() {
            return new g();
        }, n.reject = function(a) {
            var b = new g();
            return b.reject(a), b.promise;
        }, n.when = m, n.all = function(a) {
            var b = new g(), c = 0, d = H(a) ? [] : {};
            return s(a, function(a, e) {
                c++, m(a).then(function(a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
                }, function(a) {
                    d.hasOwnProperty(e) || b.reject(a);
                });
            }), 0 === c && b.resolve(d), b.promise;
        }, n;
    }
    function $e() {
        this.$get = [ "$window", "$timeout", function(b, a) {
            var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame, d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.webkitCancelRequestAnimationFrame, e = !!c, f = e ? function(a) {
                var b = c(a);
                return function() {
                    d(b);
                };
            } : function(b) {
                var c = a(b, 16.66, !1);
                return function() {
                    a.cancel(c);
                };
            };
            return f.supported = e, f;
        } ];
    }
    function Pe() {
        var b = 10, a = S("$rootScope"), c = null, d = null;
        this.digestTtl = function(a) {
            return arguments.length && (b = a), b;
        }, this.$get = [ "$injector", "$exceptionHandler", "$parse", "$browser", function(e, f, g, h) {
            function l() {
                this.$id = ++ob, this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, 
                this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, 
                this.$$isolateBindings = null;
            }
            function k(b) {
                if (r.$$phase) throw a("inprog", r.$$phase);
                r.$$phase = b;
            }
            function m(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent);
            }
            function n() {}
            function q() {
                for (;v.length; ) try {
                    v.shift()();
                } catch (a) {
                    f(a);
                }
                d = null;
            }
            function u() {
                null === d && (d = h.defer(function() {
                    r.$apply(q);
                }));
            }
            l.prototype = {
                constructor: l,
                $new: function(a, b) {
                    function c() {
                        d.$$destroyed = !0;
                    }
                    var d;
                    return b = b || this, a ? (d = new l(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = function() {
                        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, 
                        this.$$listeners = {}, this.$$listenerCount = {}, this.$id = ++ob, this.$$ChildScope = null;
                    }, this.$$ChildScope.prototype = this), d = new this.$$ChildScope()), d.$parent = b, 
                    d.$$prevSibling = b.$$childTail, b.$$childHead ? (b.$$childTail.$$nextSibling = d, 
                    b.$$childTail = d) : b.$$childHead = b.$$childTail = d, (a || b != this) && d.$on("$destroy", c), 
                    d;
                },
                $watch: function(a, b, d) {
                    var e = g(a);
                    if (e.$$watchDelegate) return e.$$watchDelegate(this, b, d, e);
                    var f = this.$$watchers, h = {
                        fn: b,
                        last: n,
                        get: e,
                        exp: a,
                        eq: !!d
                    };
                    return c = null, G(b) || (h.fn = z), f || (f = this.$$watchers = []), f.unshift(h), 
                    function() {
                        Xa(f, h), c = null;
                    };
                },
                $watchGroup: function(a, b) {
                    function c() {
                        h = !1, l ? (l = !1, b(e, e, g)) : b(e, d, g);
                    }
                    var d = Array(a.length), e = Array(a.length), f = [], g = this, h = !1, l = !0;
                    if (!a.length) {
                        var k = !0;
                        return g.$evalAsync(function() {
                            k && b(e, e, g);
                        }), function() {
                            k = !1;
                        };
                    }
                    return 1 === a.length ? this.$watch(a[0], function(a, c, f) {
                        e[0] = a, d[0] = c, b(e, a === c ? e : d, f);
                    }) : (s(a, function(a, b) {
                        var l = g.$watch(a, function(a, f) {
                            e[b] = a, d[b] = f, h || (h = !0, g.$evalAsync(c));
                        });
                        f.push(l);
                    }), function() {
                        for (;f.length; ) f.shift()();
                    });
                },
                $watchCollection: function(a, b) {
                    function c(a) {
                        e = a;
                        var b, d, g, h;
                        if (!B(e)) {
                            if (I(e)) if (Ta(e)) for (f !== q && (f = q, u = f.length = 0, k++), a = e.length, 
                            u !== a && (k++, f.length = u = a), b = 0; a > b; b++) h = f[b], g = e[b], d = h !== h && g !== g, 
                            d || h === g || (k++, f[b] = g); else {
                                f !== m && (f = m = {}, u = 0, k++), a = 0;
                                for (b in e) e.hasOwnProperty(b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, 
                                d || h === g || (k++, f[b] = g)) : (u++, f[b] = g, k++));
                                if (u > a) for (b in k++, f) e.hasOwnProperty(b) || (u--, delete f[b]);
                            } else f !== e && (f = e, k++);
                            return k;
                        }
                    }
                    c.$stateful = !0;
                    var e, f, h, d = this, l = 1 < b.length, k = 0, n = g(a, c), q = [], m = {}, p = !0, u = 0;
                    return this.$watch(n, function() {
                        if (p ? (p = !1, b(e, e, d)) : b(e, h, d), l) if (I(e)) if (Ta(e)) {
                            h = Array(e.length);
                            for (var a = 0; a < e.length; a++) h[a] = e[a];
                        } else for (a in h = {}, e) sc.call(e, a) && (h[a] = e[a]); else h = e;
                    });
                },
                $digest: function() {
                    var e, g, l, m, u, v, t, y, J, s = b, W = [];
                    k("$digest"), h.$$checkUrlChange(), this === r && null !== d && (h.defer.cancel(d), 
                    q()), c = null;
                    do {
                        for (v = !1, t = this; P.length; ) {
                            try {
                                J = P.shift(), J.scope.$eval(J.expression, J.locals);
                            } catch (D) {
                                f(D);
                            }
                            c = null;
                        }
                        a: do {
                            if (m = t.$$watchers) for (u = m.length; u--; ) try {
                                if (e = m[u]) if ((g = e.get(t)) === (l = e.last) || (e.eq ? ga(g, l) : "number" == typeof g && "number" == typeof l && isNaN(g) && isNaN(l))) {
                                    if (e === c) {
                                        v = !1;
                                        break a;
                                    }
                                } else v = !0, c = e, e.last = e.eq ? Ea(g, null) : g, e.fn(g, l === n ? g : l, t), 
                                5 > s && (y = 4 - s, W[y] || (W[y] = []), W[y].push({
                                    msg: G(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp,
                                    newVal: g,
                                    oldVal: l
                                }));
                            } catch (B) {
                                f(B);
                            }
                            if (!(m = t.$$childHead || t !== this && t.$$nextSibling)) for (;t !== this && !(m = t.$$nextSibling); ) t = t.$parent;
                        } while (t = m);
                        if ((v || P.length) && !s--) throw r.$$phase = null, a("infdig", b, W);
                    } while (v || P.length);
                    for (r.$$phase = null; p.length; ) try {
                        p.shift()();
                    } catch (da) {
                        f(da);
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        if (this.$broadcast("$destroy"), this.$$destroyed = !0, this !== r) {
                            for (var b in this.$$listenerCount) m(this, this.$$listenerCount[b], b);
                            a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), 
                            this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), 
                            this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = z, 
                            this.$on = this.$watch = this.$watchGroup = function() {
                                return z;
                            }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null;
                        }
                    }
                },
                $eval: function(a, b) {
                    return g(a)(this, b);
                },
                $evalAsync: function(a, b) {
                    r.$$phase || P.length || h.defer(function() {
                        P.length && r.$digest();
                    }), P.push({
                        scope: this,
                        expression: a,
                        locals: b
                    });
                },
                $$postDigest: function(a) {
                    p.push(a);
                },
                $apply: function(a) {
                    try {
                        return k("$apply"), this.$eval(a);
                    } catch (b) {
                        f(b);
                    } finally {
                        r.$$phase = null;
                        try {
                            r.$digest();
                        } catch (c) {
                            throw f(c), c;
                        }
                    }
                },
                $applyAsync: function(a) {
                    function b() {
                        c.$eval(a);
                    }
                    var c = this;
                    a && v.push(b), u();
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []), c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function() {
                        var d = c.indexOf(b);
                        -1 !== d && (c[d] = null, m(e, 1, a));
                    };
                },
                $emit: function(a) {
                    var d, k, m, c = [], e = this, g = !1, h = {
                        name: a,
                        targetScope: e,
                        stopPropagation: function() {
                            g = !0;
                        },
                        preventDefault: function() {
                            h.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, l = Ya([ h ], arguments, 1);
                    do {
                        for (d = e.$$listeners[a] || c, h.currentScope = e, k = 0, m = d.length; m > k; k++) if (d[k]) try {
                            d[k].apply(null, l);
                        } catch (n) {
                            f(n);
                        } else d.splice(k, 1), k--, m--;
                        if (g) return h.currentScope = null, h;
                        e = e.$parent;
                    } while (e);
                    return h.currentScope = null, h;
                },
                $broadcast: function(a) {
                    var c = this, d = this, e = {
                        name: a,
                        targetScope: this,
                        preventDefault: function() {
                            e.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    };
                    if (!this.$$listenerCount[a]) return e;
                    for (var h, l, g = Ya([ e ], arguments, 1); c = d; ) {
                        for (e.currentScope = c, d = c.$$listeners[a] || [], h = 0, l = d.length; l > h; h++) if (d[h]) try {
                            d[h].apply(null, g);
                        } catch (k) {
                            f(k);
                        } else d.splice(h, 1), h--, l--;
                        if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (;c !== this && !(d = c.$$nextSibling); ) c = c.$parent;
                    }
                    return e.currentScope = null, e;
                }
            };
            var r = new l(), P = r.$$asyncQueue = [], p = r.$$postDigestQueue = [], v = r.$$applyAsyncQueue = [];
            return r;
        } ];
    }
    function Sd() {
        var b = /^\s*(https?|ftp|mailto|tel|file):/, a = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(a) {
            return y(a) ? (b = a, this) : b;
        }, this.imgSrcSanitizationWhitelist = function(b) {
            return y(b) ? (a = b, this) : a;
        }, this.$get = function() {
            return function(c, d) {
                var f, e = d ? a : b;
                return f = Ba(c).href, "" === f || f.match(e) ? c : "unsafe:" + f;
            };
        };
    }
    function Cf(b) {
        if ("self" === b) return b;
        if (F(b)) {
            if (-1 < b.indexOf("***")) throw Ca("iwcard", b);
            return b = gd(b).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + b + "$");
        }
        if (pb(b)) return new RegExp("^" + b.source + "$");
        throw Ca("imatcher");
    }
    function hd(b) {
        var a = [];
        return y(b) && s(b, function(b) {
            a.push(Cf(b));
        }), a;
    }
    function Te() {
        this.SCE_CONTEXTS = na;
        var b = [ "self" ], a = [];
        this.resourceUrlWhitelist = function(a) {
            return arguments.length && (b = hd(a)), b;
        }, this.resourceUrlBlacklist = function(b) {
            return arguments.length && (a = hd(b)), a;
        }, this.$get = [ "$injector", function(c) {
            function d(a, b) {
                return "self" === a ? $c(b) : !!a.exec(b.href);
            }
            function e(a) {
                var b = function(a) {
                    this.$$unwrapTrustedValue = function() {
                        return a;
                    };
                };
                return a && (b.prototype = new a()), b.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue();
                }, b.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString();
                }, b;
            }
            var f = function() {
                throw Ca("unsafe");
            };
            c.has("$sanitize") && (f = c.get("$sanitize"));
            var g = e(), h = {};
            return h[na.HTML] = e(g), h[na.CSS] = e(g), h[na.URL] = e(g), h[na.JS] = e(g), h[na.RESOURCE_URL] = e(h[na.URL]), 
            {
                trustAs: function(a, b) {
                    var c = h.hasOwnProperty(a) ? h[a] : null;
                    if (!c) throw Ca("icontext", a, b);
                    if (null === b || b === t || "" === b) return b;
                    if ("string" != typeof b) throw Ca("itype", a);
                    return new c(b);
                },
                getTrusted: function(c, e) {
                    if (null === e || e === t || "" === e) return e;
                    var g = h.hasOwnProperty(c) ? h[c] : null;
                    if (g && e instanceof g) return e.$$unwrapTrustedValue();
                    if (c === na.RESOURCE_URL) {
                        var n, q, g = Ba(e.toString()), u = !1;
                        for (n = 0, q = b.length; q > n; n++) if (d(b[n], g)) {
                            u = !0;
                            break;
                        }
                        if (u) for (n = 0, q = a.length; q > n; n++) if (d(a[n], g)) {
                            u = !1;
                            break;
                        }
                        if (u) return e;
                        throw Ca("insecurl", e.toString());
                    }
                    if (c === na.HTML) return f(e);
                    throw Ca("unsafe");
                },
                valueOf: function(a) {
                    return a instanceof g ? a.$$unwrapTrustedValue() : a;
                }
            };
        } ];
    }
    function Se() {
        var b = !0;
        this.enabled = function(a) {
            return arguments.length && (b = !!a), b;
        }, this.$get = [ "$parse", "$sceDelegate", function(a, c) {
            if (b && 8 > Ra) throw Ca("iequirks");
            var d = ra(na);
            d.isEnabled = function() {
                return b;
            }, d.trustAs = c.trustAs, d.getTrusted = c.getTrusted, d.valueOf = c.valueOf, b || (d.trustAs = d.getTrusted = function(a, b) {
                return b;
            }, d.valueOf = pa), d.parseAs = function(b, c) {
                var e = a(c);
                return e.literal && e.constant ? e : a(c, function(a) {
                    return d.getTrusted(b, a);
                });
            };
            var e = d.parseAs, f = d.getTrusted, g = d.trustAs;
            return s(na, function(a, b) {
                var c = Q(b);
                d[db("parse_as_" + c)] = function(b) {
                    return e(a, b);
                }, d[db("get_trusted_" + c)] = function(b) {
                    return f(a, b);
                }, d[db("trust_as_" + c)] = function(b) {
                    return g(a, b);
                };
            }), d;
        } ];
    }
    function Ue() {
        this.$get = [ "$window", "$document", function(b, a) {
            var g, c = {}, d = ba((/android (\d+)/.exec(Q((b.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((b.navigator || {}).userAgent), f = a[0] || {}, h = /^(Moz|webkit|ms)(?=[A-Z])/, l = f.body && f.body.style, k = !1, m = !1;
            if (l) {
                for (var n in l) if (k = h.exec(n)) {
                    g = k[0], g = g.substr(0, 1).toUpperCase() + g.substr(1);
                    break;
                }
                g || (g = "WebkitOpacity" in l && "webkit"), k = !!("transition" in l || g + "Transition" in l), 
                m = !!("animation" in l || g + "Animation" in l), !d || k && m || (k = F(f.body.style.webkitTransition), 
                m = F(f.body.style.webkitAnimation));
            }
            return {
                history: !(!b.history || !b.history.pushState || 4 > d || e),
                hasEvent: function(a) {
                    if ("input" === a && 11 >= Ra) return !1;
                    if (B(c[a])) {
                        var b = f.createElement("div");
                        c[a] = "on" + a in b;
                    }
                    return c[a];
                },
                csp: bb(),
                vendorPrefix: g,
                transitions: k,
                animations: m,
                android: d
            };
        } ];
    }
    function We() {
        this.$get = [ "$templateCache", "$http", "$q", function(b, a, c) {
            function d(e, f) {
                d.totalPendingRequests++;
                var g = a.defaults && a.defaults.transformResponse;
                return H(g) ? g = g.filter(function(a) {
                    return a !== Zb;
                }) : g === Zb && (g = null), a.get(e, {
                    cache: b,
                    transformResponse: g
                })["finally"](function() {
                    d.totalPendingRequests--;
                }).then(function(a) {
                    return a.data;
                }, function(a) {
                    if (!f) throw ja("tpload", e);
                    return c.reject(a);
                });
            }
            return d.totalPendingRequests = 0, d;
        } ];
    }
    function Xe() {
        this.$get = [ "$rootScope", "$browser", "$location", function(b, a, c) {
            return {
                findBindings: function(a, b, c) {
                    a = a.getElementsByClassName("ng-binding");
                    var g = [];
                    return s(a, function(a) {
                        var d = ca.element(a).data("$binding");
                        d && s(d, function(d) {
                            c ? new RegExp("(^|\\s)" + gd(b) + "(\\s|\\||$)").test(d) && g.push(a) : -1 != d.indexOf(b) && g.push(a);
                        });
                    }), g;
                },
                findModels: function(a, b, c) {
                    for (var g = [ "ng-", "data-ng-", "ng\\:" ], h = 0; h < g.length; ++h) {
                        var l = a.querySelectorAll("[" + g[h] + "model" + (c ? "=" : "*=") + '"' + b + '"]');
                        if (l.length) return l;
                    }
                },
                getLocation: function() {
                    return c.url();
                },
                setLocation: function(a) {
                    a !== c.url() && (c.url(a), b.$digest());
                },
                whenStable: function(b) {
                    a.notifyWhenNoOutstandingRequests(b);
                }
            };
        } ];
    }
    function Ye() {
        this.$get = [ "$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(b, a, c, d, e) {
            function f(f, l, k) {
                var m = y(k) && !k, n = (m ? d : c).defer(), q = n.promise;
                return l = a.defer(function() {
                    try {
                        n.resolve(f());
                    } catch (a) {
                        n.reject(a), e(a);
                    } finally {
                        delete g[q.$$timeoutId];
                    }
                    m || b.$apply();
                }, l), q.$$timeoutId = l, g[l] = n, q;
            }
            var g = {};
            return f.cancel = function(b) {
                return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"), delete g[b.$$timeoutId], 
                a.defer.cancel(b.$$timeoutId)) : !1;
            }, f;
        } ];
    }
    function Ba(b) {
        return Ra && (Z.setAttribute("href", b), b = Z.href), Z.setAttribute("href", b), 
        {
            href: Z.href,
            protocol: Z.protocol ? Z.protocol.replace(/:$/, "") : "",
            host: Z.host,
            search: Z.search ? Z.search.replace(/^\?/, "") : "",
            hash: Z.hash ? Z.hash.replace(/^#/, "") : "",
            hostname: Z.hostname,
            port: Z.port,
            pathname: "/" === Z.pathname.charAt(0) ? Z.pathname : "/" + Z.pathname
        };
    }
    function $c(b) {
        return b = F(b) ? Ba(b) : b, b.protocol === id.protocol && b.host === id.host;
    }
    function Ze() {
        this.$get = ea(M);
    }
    function Ec(b) {
        function a(c, d) {
            if (I(c)) {
                var e = {};
                return s(c, function(b, c) {
                    e[c] = a(c, b);
                }), e;
            }
            return b.factory(c + "Filter", d);
        }
        this.register = a, this.$get = [ "$injector", function(a) {
            return function(b) {
                return a.get(b + "Filter");
            };
        } ], a("currency", jd), a("date", kd), a("filter", Df), a("json", Ef), a("limitTo", Ff), 
        a("lowercase", Gf), a("number", ld), a("orderBy", md), a("uppercase", Hf);
    }
    function Df() {
        return function(b, a, c) {
            if (!H(b)) return b;
            var d;
            switch (typeof a) {
              case "function":
                break;

              case "boolean":
              case "number":
              case "string":
                d = !0;

              case "object":
                a = If(a, c, d);
                break;

              default:
                return b;
            }
            return b.filter(a);
        };
    }
    function If(b, a, c) {
        var d = I(b) && "$" in b;
        return !0 === a ? a = ga : G(a) || (a = function(a, b) {
            return I(a) || I(b) ? !1 : (a = Q("" + a), b = Q("" + b), -1 !== a.indexOf(b));
        }), function(e) {
            return d && !I(e) ? Ia(e, b.$, a, !1) : Ia(e, b, a, c);
        };
    }
    function Ia(b, a, c, d, e) {
        var f = typeof b, g = typeof a;
        if ("string" === g && "!" === a.charAt(0)) return !Ia(b, a.substring(1), c, d);
        if (H(b)) return b.some(function(b) {
            return Ia(b, a, c, d);
        });
        switch (f) {
          case "object":
            var h;
            if (d) {
                for (h in b) if ("$" !== h.charAt(0) && Ia(b[h], a, c, !0)) return !0;
                return e ? !1 : Ia(b, a, c, !1);
            }
            if ("object" === g) {
                for (h in a) if (e = a[h], !G(e) && (f = "$" === h, !Ia(f ? b : b[h], e, c, f, f))) return !1;
                return !0;
            }
            return c(b, a);

          case "function":
            return !1;

          default:
            return c(b, a);
        }
    }
    function jd(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d, e) {
            return B(d) && (d = a.CURRENCY_SYM), B(e) && (e = a.PATTERNS[1].maxFrac), null == b ? b : nd(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, e).replace(/\u00A4/g, d);
        };
    }
    function ld(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d) {
            return null == b ? b : nd(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d);
        };
    }
    function nd(b, a, c, d, e) {
        if (!isFinite(b) || I(b)) return "";
        var f = 0 > b;
        b = Math.abs(b);
        var g = b + "", h = "", l = [], k = !1;
        if (-1 !== g.indexOf("e")) {
            var m = g.match(/([\d\.]+)e(-?)(\d+)/);
            m && "-" == m[2] && m[3] > e + 1 ? b = 0 : (h = g, k = !0);
        }
        if (k) e > 0 && 1 > b && (h = b.toFixed(e), b = parseFloat(h)); else {
            g = (g.split(od)[1] || "").length, B(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac)), 
            b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);
            var g = ("" + b).split(od), k = g[0], g = g[1] || "", n = 0, q = a.lgSize, u = a.gSize;
            if (k.length >= q + u) for (n = k.length - q, m = 0; n > m; m++) 0 === (n - m) % u && 0 !== m && (h += c), 
            h += k.charAt(m);
            for (m = n; m < k.length; m++) 0 === (k.length - m) % q && 0 !== m && (h += c), 
            h += k.charAt(m);
            for (;g.length < e; ) g += "0";
            e && "0" !== e && (h += d + g.substr(0, e));
        }
        return 0 === b && (f = !1), l.push(f ? a.negPre : a.posPre, h, f ? a.negSuf : a.posSuf), 
        l.join("");
    }
    function Jb(b, a, c) {
        var d = "";
        for (0 > b && (d = "-", b = -b), b = "" + b; b.length < a; ) b = "0" + b;
        return c && (b = b.substr(b.length - a)), d + b;
    }
    function $(b, a, c, d) {
        return c = c || 0, function(e) {
            return e = e["get" + b](), (c > 0 || e > -c) && (e += c), 0 === e && -12 == c && (e = 12), 
            Jb(e, a, d);
        };
    }
    function Kb(b, a) {
        return function(c, d) {
            var e = c["get" + b](), f = vb(a ? "SHORT" + b : b);
            return d[f][e];
        };
    }
    function pd(b) {
        var a = new Date(b, 0, 1).getDay();
        return new Date(b, 0, (4 >= a ? 5 : 12) - a);
    }
    function qd(b) {
        return function(a) {
            var c = pd(a.getFullYear());
            return a = +new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay())) - +c, 
            a = 1 + Math.round(a / 6048e5), Jb(a, b);
        };
    }
    function kd(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                a = new Date(0);
                var f = 0, g = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, l = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (f = ba(b[9] + b[10]), g = ba(b[9] + b[11])), h.call(a, ba(b[1]), ba(b[2]) - 1, ba(b[3])), 
                f = ba(b[4] || 0) - f, g = ba(b[5] || 0) - g, h = ba(b[6] || 0), b = Math.round(1e3 * parseFloat("0." + (b[7] || 0))), 
                l.call(a, f, g, h, b);
            }
            return a;
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, e, f) {
            var l, k, g = "", h = [];
            if (e = e || "mediumDate", e = b.DATETIME_FORMATS[e] || e, F(c) && (c = Jf.test(c) ? ba(c) : a(c)), 
            V(c) && (c = new Date(c)), !qa(c)) return c;
            for (;e; ) (k = Kf.exec(e)) ? (h = Ya(h, k, 1), e = h.pop()) : (h.push(e), e = null);
            return f && "UTC" === f && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset())), 
            s(h, function(a) {
                l = Lf[a], g += l ? l(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            }), g;
        };
    }
    function Ef() {
        return function(b, a) {
            return B(a) && (a = 2), $a(b, a);
        };
    }
    function Ff() {
        return function(b, a) {
            return V(b) && (b = b.toString()), H(b) || F(b) ? (a = 1/0 === Math.abs(Number(a)) ? Number(a) : ba(a)) ? a > 0 ? b.slice(0, a) : b.slice(a) : F(b) ? "" : [] : b;
        };
    }
    function md(b) {
        return function(a, c, d) {
            function e(a, b) {
                return b ? function(b, c) {
                    return a(c, b);
                } : a;
            }
            function f(a) {
                switch (typeof a) {
                  case "number":
                  case "boolean":
                  case "string":
                    return !0;

                  default:
                    return !1;
                }
            }
            function g(a) {
                return null === a ? "null" : "function" == typeof a.valueOf && (a = a.valueOf(), 
                f(a)) || "function" == typeof a.toString && (a = a.toString(), f(a)) ? a : "";
            }
            function h(a, b) {
                var c = typeof a, d = typeof b;
                return c === d && "object" === c && (a = g(a), b = g(b)), c === d ? ("string" === c && (a = a.toLowerCase(), 
                b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1;
            }
            return Ta(a) ? (c = H(c) ? c : [ c ], 0 === c.length && (c = [ "+" ]), c = c.map(function(a) {
                var c = !1, d = a || pa;
                if (F(a)) {
                    if (("+" == a.charAt(0) || "-" == a.charAt(0)) && (c = "-" == a.charAt(0), a = a.substring(1)), 
                    "" === a) return e(h, c);
                    if (d = b(a), d.constant) {
                        var f = d();
                        return e(function(a, b) {
                            return h(a[f], b[f]);
                        }, c);
                    }
                }
                return e(function(a, b) {
                    return h(d(a), d(b));
                }, c);
            }), Za.call(a).sort(e(function(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e) return e;
                }
                return 0;
            }, d))) : a;
        };
    }
    function Ja(b) {
        return G(b) && (b = {
            link: b
        }), b.restrict = b.restrict || "AC", ea(b);
    }
    function rd(b, a, c, d, e) {
        var f = this, g = [], h = f.$$parentForm = b.parent().controller("form") || Lb;
        f.$error = {}, f.$$success = {}, f.$pending = t, f.$name = e(a.name || a.ngForm || "")(c), 
        f.$dirty = !1, f.$pristine = !0, f.$valid = !0, f.$invalid = !1, f.$submitted = !1, 
        h.$addControl(f), f.$rollbackViewValue = function() {
            s(g, function(a) {
                a.$rollbackViewValue();
            });
        }, f.$commitViewValue = function() {
            s(g, function(a) {
                a.$commitViewValue();
            });
        }, f.$addControl = function(a) {
            Ma(a.$name, "input"), g.push(a), a.$name && (f[a.$name] = a);
        }, f.$$renameControl = function(a, b) {
            var c = a.$name;
            f[c] === a && delete f[c], f[b] = a, a.$name = b;
        }, f.$removeControl = function(a) {
            a.$name && f[a.$name] === a && delete f[a.$name], s(f.$pending, function(b, c) {
                f.$setValidity(c, null, a);
            }), s(f.$error, function(b, c) {
                f.$setValidity(c, null, a);
            }), s(f.$$success, function(b, c) {
                f.$setValidity(c, null, a);
            }), Xa(g, a);
        }, sd({
            ctrl: this,
            $element: b,
            set: function(a, b, c) {
                var d = a[b];
                d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [ c ];
            },
            unset: function(a, b, c) {
                var d = a[b];
                d && (Xa(d, c), 0 === d.length && delete a[b]);
            },
            parentForm: h,
            $animate: d
        }), f.$setDirty = function() {
            d.removeClass(b, Sa), d.addClass(b, Mb), f.$dirty = !0, f.$pristine = !1, h.$setDirty();
        }, f.$setPristine = function() {
            d.setClass(b, Sa, Mb + " ng-submitted"), f.$dirty = !1, f.$pristine = !0, f.$submitted = !1, 
            s(g, function(a) {
                a.$setPristine();
            });
        }, f.$setUntouched = function() {
            s(g, function(a) {
                a.$setUntouched();
            });
        }, f.$setSubmitted = function() {
            d.addClass(b, "ng-submitted"), f.$submitted = !0, h.$setSubmitted();
        };
    }
    function ic(b) {
        b.$formatters.push(function(a) {
            return b.$isEmpty(a) ? a : a.toString();
        });
    }
    function jb(b, a, c, d, e, f) {
        var g = Q(a[0].type);
        if (!e.android) {
            var h = !1;
            a.on("compositionstart", function() {
                h = !0;
            }), a.on("compositionend", function() {
                h = !1, l();
            });
        }
        var l = function(b) {
            if (k && (f.defer.cancel(k), k = null), !h) {
                var e = a.val();
                b = b && b.type, "password" === g || c.ngTrim && "false" === c.ngTrim || (e = U(e)), 
                (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, b);
            }
        };
        if (e.hasEvent("input")) a.on("input", l); else {
            var k, m = function(a, b, c) {
                k || (k = f.defer(function() {
                    k = null, b && b.value === c || l(a);
                }));
            };
            a.on("keydown", function(a) {
                var b = a.keyCode;
                91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || m(a, this, this.value);
            }), e.hasEvent("paste") && a.on("paste cut", m);
        }
        a.on("change", l), d.$render = function() {
            a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue);
        };
    }
    function Nb(b, a) {
        return function(c, d) {
            var e, f;
            if (qa(c)) return c;
            if (F(c)) {
                if ('"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1)), 
                Mf.test(c)) return new Date(c);
                if (b.lastIndex = 0, e = b.exec(c)) return e.shift(), f = d ? {
                    yyyy: d.getFullYear(),
                    MM: d.getMonth() + 1,
                    dd: d.getDate(),
                    HH: d.getHours(),
                    mm: d.getMinutes(),
                    ss: d.getSeconds(),
                    sss: d.getMilliseconds() / 1e3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, s(e, function(b, c) {
                    c < a.length && (f[a[c]] = +b);
                }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1e3 * f.sss || 0);
            }
            return 0/0;
        };
    }
    function kb(b, a, c, d) {
        return function(e, f, g, h, l, k, m) {
            function n(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime());
            }
            function q(a) {
                return y(a) ? qa(a) ? a : c(a) : t;
            }
            td(e, f, g, h), jb(e, f, g, h, l, k);
            var r, u = h && h.$options && h.$options.timezone;
            if (h.$$parserName = b, h.$parsers.push(function(b) {
                return h.$isEmpty(b) ? null : a.test(b) ? (b = c(b, r), "UTC" === u && b.setMinutes(b.getMinutes() - b.getTimezoneOffset()), 
                b) : t;
            }), h.$formatters.push(function(a) {
                if (a && !qa(a)) throw Ob("datefmt", a);
                if (n(a)) {
                    if ((r = a) && "UTC" === u) {
                        var b = 6e4 * r.getTimezoneOffset();
                        r = new Date(r.getTime() + b);
                    }
                    return m("date")(a, d, u);
                }
                return r = null, "";
            }), y(g.min) || g.ngMin) {
                var s;
                h.$validators.min = function(a) {
                    return !n(a) || B(s) || c(a) >= s;
                }, g.$observe("min", function(a) {
                    s = q(a), h.$validate();
                });
            }
            if (y(g.max) || g.ngMax) {
                var p;
                h.$validators.max = function(a) {
                    return !n(a) || B(p) || c(a) <= p;
                }, g.$observe("max", function(a) {
                    p = q(a), h.$validate();
                });
            }
        };
    }
    function td(b, a, c, d) {
        (d.$$hasNativeValidators = I(a[0].validity)) && d.$parsers.push(function(b) {
            var c = a.prop("validity") || {};
            return c.badInput && !c.typeMismatch ? t : b;
        });
    }
    function ud(b, a, c, d, e) {
        if (y(d)) {
            if (b = b(d), !b.constant) throw S("ngModel")("constexpr", c, d);
            return b(a);
        }
        return e;
    }
    function jc(b, a) {
        return b = "ngClass" + b, [ "$animate", function(c) {
            function d(a, b) {
                var c = [], d = 0;
                a: for (;d < a.length; d++) {
                    for (var e = a[d], m = 0; m < b.length; m++) if (e == b[m]) continue a;
                    c.push(e);
                }
                return c;
            }
            function e(a) {
                if (!H(a)) {
                    if (F(a)) return a.split(" ");
                    if (I(a)) {
                        var b = [];
                        return s(a, function(a, c) {
                            a && (b = b.concat(c.split(" ")));
                        }), b;
                    }
                }
                return a;
            }
            return {
                restrict: "AC",
                link: function(f, g, h) {
                    function l(a, b) {
                        var c = g.data("$classCounts") || {}, d = [];
                        return s(a, function(a) {
                            (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a));
                        }), g.data("$classCounts", c), d.join(" ");
                    }
                    function k(b) {
                        if (!0 === a || f.$index % 2 === a) {
                            var k = e(b || []);
                            if (m) {
                                if (!ga(b, m)) {
                                    var r = e(m), u = d(k, r), k = d(r, k), u = l(u, 1), k = l(k, -1);
                                    u && u.length && c.addClass(g, u), k && k.length && c.removeClass(g, k);
                                }
                            } else {
                                var u = l(k, 1);
                                h.$addClass(u);
                            }
                        }
                        m = ra(b);
                    }
                    var m;
                    f.$watch(h[b], k, !0), h.$observe("class", function() {
                        k(f.$eval(h[b]));
                    }), "ngClass" !== b && f.$watch("$index", function(c, d) {
                        var g = 1 & c;
                        if (g !== (1 & d)) {
                            var k = e(f.$eval(h[b]));
                            g === a ? (g = l(k, 1), h.$addClass(g)) : (g = l(k, -1), h.$removeClass(g));
                        }
                    });
                }
            };
        } ];
    }
    function sd(b) {
        function a(a, b) {
            b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), 
            f[a] = !1);
        }
        function c(b, c) {
            b = b ? "-" + uc(b, "-") : "", a(lb + b, !0 === c), a(vd + b, !1 === c);
        }
        var d = b.ctrl, e = b.$element, f = {}, g = b.set, h = b.unset, l = b.parentForm, k = b.$animate;
        f[vd] = !(f[lb] = e.hasClass(lb)), d.$setValidity = function(b, e, f) {
            e === t ? (d.$pending || (d.$pending = {}), g(d.$pending, b, f)) : (d.$pending && h(d.$pending, b, f), 
            wd(d.$pending) && (d.$pending = t)), Wa(e) ? e ? (h(d.$error, b, f), g(d.$$success, b, f)) : (g(d.$error, b, f), 
            h(d.$$success, b, f)) : (h(d.$error, b, f), h(d.$$success, b, f)), d.$pending ? (a(xd, !0), 
            d.$valid = d.$invalid = t, c("", null)) : (a(xd, !1), d.$valid = wd(d.$error), d.$invalid = !d.$valid, 
            c("", d.$valid)), e = d.$pending && d.$pending[b] ? t : d.$error[b] ? !1 : d.$$success[b] ? !0 : null, 
            c(b, e), l.$setValidity(b, e, d);
        };
    }
    function wd(b) {
        if (b) for (var a in b) return !1;
        return !0;
    }
    var Ra, D, sa, cb, Nf = /^\/(.+)\/([a-z]*)$/, Q = function(b) {
        return F(b) ? b.toLowerCase() : b;
    }, sc = Object.prototype.hasOwnProperty, vb = function(b) {
        return F(b) ? b.toUpperCase() : b;
    }, Za = [].slice, pf = [].splice, Of = [].push, Da = Object.prototype.toString, Ka = S("ng"), ca = M.angular || (M.angular = {}), ob = 0;
    Ra = Y.documentMode, z.$inject = [], pa.$inject = [];
    var Rb, H = Array.isArray, U = function(b) {
        return F(b) ? b.trim() : b;
    }, gd = function(b) {
        return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
    }, bb = function() {
        if (y(bb.isActive_)) return bb.isActive_;
        var b = !(!Y.querySelector("[ng-csp]") && !Y.querySelector("[data-ng-csp]"));
        if (!b) try {
            new Function("");
        } catch (a) {
            b = !0;
        }
        return bb.isActive_ = b;
    }, sb = [ "ng-", "data-ng-", "ng:", "x-ng-" ], Md = /[A-Z]/g, vc = !1, oa = 1, qb = 3, Qd = {
        full: "1.3.13",
        major: 1,
        minor: 3,
        dot: 13,
        codeName: "meticulous-riffleshuffle"
    };
    R.expando = "ng339";
    var Ab = R.cache = {}, hf = 1;
    R._data = function(b) {
        return this.cache[b[this.expando]] || {};
    };
    var cf = /([\:\-\_]+(.))/g, df = /^moz([A-Z])/, Pf = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
    }, Ub = S("jqLite"), gf = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Tb = /<|&#?\w+;/, ef = /<([\w:]+)/, ff = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ia = {
        option: [ 1, '<select multiple="multiple">', "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, 
    ia.th = ia.td;
    var La = R.prototype = {
        ready: function(b) {
            function a() {
                c || (c = !0, b());
            }
            var c = !1;
            "complete" === Y.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), R(M).on("load", a));
        },
        toString: function() {
            var b = [];
            return s(this, function(a) {
                b.push("" + a);
            }), "[" + b.join(", ") + "]";
        },
        eq: function(b) {
            return D(b >= 0 ? this[b] : this[this.length + b]);
        },
        length: 0,
        push: Of,
        sort: [].sort,
        splice: [].splice
    }, Fb = {};
    s("multiple selected checked disabled readOnly required open".split(" "), function(b) {
        Fb[Q(b)] = b;
    });
    var Nc = {};
    s("input select option textarea button form details".split(" "), function(b) {
        Nc[b] = !0;
    });
    var Oc = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    s({
        data: Wb,
        removeData: yb
    }, function(b, a) {
        R[a] = b;
    }), s({
        data: Wb,
        inheritedData: Eb,
        scope: function(b) {
            return D.data(b, "$scope") || Eb(b.parentNode || b, [ "$isolateScope", "$scope" ]);
        },
        isolateScope: function(b) {
            return D.data(b, "$isolateScope") || D.data(b, "$isolateScopeNoTemplate");
        },
        controller: Jc,
        injector: function(b) {
            return Eb(b, "$injector");
        },
        removeAttr: function(b, a) {
            b.removeAttribute(a);
        },
        hasClass: Bb,
        css: function(b, a, c) {
            return a = db(a), y(c) ? void (b.style[a] = c) : b.style[a];
        },
        attr: function(b, a, c) {
            var d = Q(a);
            if (Fb[d]) {
                if (!y(c)) return b[a] || (b.attributes.getNamedItem(a) || z).specified ? d : t;
                c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));
            } else if (y(c)) b.setAttribute(a, c); else if (b.getAttribute) return b = b.getAttribute(a, 2), 
            null === b ? t : b;
        },
        prop: function(b, a, c) {
            return y(c) ? void (b[a] = c) : b[a];
        },
        text: function() {
            function b(a, b) {
                if (B(b)) {
                    var d = a.nodeType;
                    return d === oa || d === qb ? a.textContent : "";
                }
                a.textContent = b;
            }
            return b.$dv = "", b;
        }(),
        val: function(b, a) {
            if (B(a)) {
                if (b.multiple && "select" === ua(b)) {
                    var c = [];
                    return s(b.options, function(a) {
                        a.selected && c.push(a.value || a.text);
                    }), 0 === c.length ? null : c;
                }
                return b.value;
            }
            b.value = a;
        },
        html: function(b, a) {
            return B(a) ? b.innerHTML : (xb(b, !0), void (b.innerHTML = a));
        },
        empty: Kc
    }, function(b, a) {
        R.prototype[a] = function(a, d) {
            var e, f, g = this.length;
            if (b !== Kc && (2 == b.length && b !== Bb && b !== Jc ? a : d) === t) {
                if (I(a)) {
                    for (e = 0; g > e; e++) if (b === Wb) b(this[e], a); else for (f in a) b(this[e], f, a[f]);
                    return this;
                }
                for (e = b.$dv, g = e === t ? Math.min(g, 1) : g, f = 0; g > f; f++) {
                    var h = b(this[f], a, d);
                    e = e ? e + h : h;
                }
                return e;
            }
            for (e = 0; g > e; e++) b(this[e], a, d);
            return this;
        };
    }), s({
        removeData: yb,
        on: function a(c, d, e, f) {
            if (y(f)) throw Ub("onargs");
            if (Fc(c)) {
                var g = zb(c, !0);
                f = g.events;
                var h = g.handle;
                h || (h = g.handle = lf(c, f));
                for (var g = 0 <= d.indexOf(" ") ? d.split(" ") : [ d ], l = g.length; l--; ) {
                    d = g[l];
                    var k = f[d];
                    k || (f[d] = [], "mouseenter" === d || "mouseleave" === d ? a(c, Pf[d], function(a) {
                        var c = a.relatedTarget;
                        c && (c === this || this.contains(c)) || h(a, d);
                    }) : "$destroy" !== d && c.addEventListener(d, h, !1), k = f[d]), k.push(e);
                }
            }
        },
        off: Ic,
        one: function(a, c, d) {
            a = D(a), a.on(c, function f() {
                a.off(c, d), a.off(c, f);
            }), a.on(c, d);
        },
        replaceWith: function(a, c) {
            var d, e = a.parentNode;
            xb(a), s(new R(c), function(c) {
                d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a), d = c;
            });
        },
        children: function(a) {
            var c = [];
            return s(a.childNodes, function(a) {
                a.nodeType === oa && c.push(a);
            }), c;
        },
        contents: function(a) {
            return a.contentDocument || a.childNodes || [];
        },
        append: function(a, c) {
            var d = a.nodeType;
            if (d === oa || 11 === d) {
                c = new R(c);
                for (var d = 0, e = c.length; e > d; d++) a.appendChild(c[d]);
            }
        },
        prepend: function(a, c) {
            if (a.nodeType === oa) {
                var d = a.firstChild;
                s(new R(c), function(c) {
                    a.insertBefore(c, d);
                });
            }
        },
        wrap: function(a, c) {
            c = D(c).eq(0).clone()[0];
            var d = a.parentNode;
            d && d.replaceChild(c, a), c.appendChild(a);
        },
        remove: Lc,
        detach: function(a) {
            Lc(a, !0);
        },
        after: function(a, c) {
            var d = a, e = a.parentNode;
            c = new R(c);
            for (var f = 0, g = c.length; g > f; f++) {
                var h = c[f];
                e.insertBefore(h, d.nextSibling), d = h;
            }
        },
        addClass: Db,
        removeClass: Cb,
        toggleClass: function(a, c, d) {
            c && s(c.split(" "), function(c) {
                var f = d;
                B(f) && (f = !Bb(a, c)), (f ? Db : Cb)(a, c);
            });
        },
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
        },
        next: function(a) {
            return a.nextElementSibling;
        },
        find: function(a, c) {
            return a.getElementsByTagName ? a.getElementsByTagName(c) : [];
        },
        clone: Vb,
        triggerHandler: function(a, c, d) {
            var e, f, g = c.type || c, h = zb(a);
            (h = (h = h && h.events) && h[g]) && (e = {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                },
                isDefaultPrevented: function() {
                    return !0 === this.defaultPrevented;
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0;
                },
                isImmediatePropagationStopped: function() {
                    return !0 === this.immediatePropagationStopped;
                },
                stopPropagation: z,
                type: g,
                target: a
            }, c.type && (e = x(e, c)), c = ra(h), f = d ? [ e ].concat(d) : [ e ], s(c, function(c) {
                e.isImmediatePropagationStopped() || c.apply(a, f);
            }));
        }
    }, function(a, c) {
        R.prototype[c] = function(c, e, f) {
            for (var g, h = 0, l = this.length; l > h; h++) B(g) ? (g = a(this[h], c, e, f), 
            y(g) && (g = D(g))) : Hc(g, a(this[h], c, e, f));
            return y(g) ? g : this;
        }, R.prototype.bind = R.prototype.on, R.prototype.unbind = R.prototype.off;
    }), eb.prototype = {
        put: function(a, c) {
            this[Na(a, this.nextUid)] = c;
        },
        get: function(a) {
            return this[Na(a, this.nextUid)];
        },
        remove: function(a) {
            var c = this[a = Na(a, this.nextUid)];
            return delete this[a], c;
        }
    };
    var Qc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Qf = /,/, Rf = /^\s*(_?)(\S+?)\1\s*$/, Pc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Ga = S("$injector");
    ab.$$annotate = function(a, c, d) {
        var e;
        if ("function" == typeof a) {
            if (!(e = a.$inject)) {
                if (e = [], a.length) {
                    if (c) throw F(d) && d || (d = a.name || mf(a)), Ga("strictdi", d);
                    c = a.toString().replace(Pc, ""), c = c.match(Qc), s(c[1].split(Qf), function(a) {
                        a.replace(Rf, function(a, c, d) {
                            e.push(d);
                        });
                    });
                }
                a.$inject = e;
            }
        } else H(a) ? (c = a.length - 1, tb(a[c], "fn"), e = a.slice(0, c)) : tb(a, "fn", !0);
        return e;
    };
    var Sf = S("$animate"), Ce = [ "$provide", function(a) {
        this.$$selectors = {}, this.register = function(c, d) {
            var e = c + "-animation";
            if (c && "." != c.charAt(0)) throw Sf("notcsel", c);
            this.$$selectors[c.substr(1)] = e, a.factory(e, d);
        }, this.classNameFilter = function(a) {
            return 1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null), 
            this.$$classNameFilter;
        }, this.$get = [ "$$q", "$$asyncCallback", "$rootScope", function(a, d, e) {
            function f(d) {
                var f, g = a.defer();
                return g.promise.$$cancelFn = function() {
                    f && f();
                }, e.$$postDigest(function() {
                    f = d(function() {
                        g.resolve();
                    });
                }), g.promise;
            }
            function g(a, c) {
                var d = [], e = [], f = ha();
                return s((a.attr("class") || "").split(/\s+/), function(a) {
                    f[a] = !0;
                }), s(c, function(a, c) {
                    var g = f[c];
                    !1 === a && g ? e.push(c) : !0 !== a || g || d.push(c);
                }), 0 < d.length + e.length && [ d.length ? d : null, e.length ? e : null ];
            }
            function h(a, c, d) {
                for (var e = 0, f = c.length; f > e; ++e) a[c[e]] = d;
            }
            function l() {
                return m || (m = a.defer(), d(function() {
                    m.resolve(), m = null;
                })), m.promise;
            }
            function k(a, c) {
                if (ca.isObject(c)) {
                    var d = x(c.from || {}, c.to || {});
                    a.css(d);
                }
            }
            var m;
            return {
                animate: function(a, c, d) {
                    return k(a, {
                        from: c,
                        to: d
                    }), l();
                },
                enter: function(a, c, d, e) {
                    return k(a, e), d ? d.after(a) : c.prepend(a), l();
                },
                leave: function(a) {
                    return a.remove(), l();
                },
                move: function(a, c, d, e) {
                    return this.enter(a, c, d, e);
                },
                addClass: function(a, c, d) {
                    return this.setClass(a, c, [], d);
                },
                $$addClassImmediately: function(a, c, d) {
                    return a = D(a), c = F(c) ? c : H(c) ? c.join(" ") : "", s(a, function(a) {
                        Db(a, c);
                    }), k(a, d), l();
                },
                removeClass: function(a, c, d) {
                    return this.setClass(a, [], c, d);
                },
                $$removeClassImmediately: function(a, c, d) {
                    return a = D(a), c = F(c) ? c : H(c) ? c.join(" ") : "", s(a, function(a) {
                        Cb(a, c);
                    }), k(a, d), l();
                },
                setClass: function(a, c, d, e) {
                    var k = this, l = !1;
                    a = D(a);
                    var m = a.data("$$animateClasses");
                    return m ? e && m.options && (m.options = ca.extend(m.options || {}, e)) : (m = {
                        classes: {},
                        options: e
                    }, l = !0), e = m.classes, c = H(c) ? c : c.split(" "), d = H(d) ? d : d.split(" "), 
                    h(e, c, !0), h(e, d, !1), l && (m.promise = f(function(c) {
                        var d = a.data("$$animateClasses");
                        if (a.removeData("$$animateClasses"), d) {
                            var e = g(a, d.classes);
                            e && k.$$setClassImmediately(a, e[0], e[1], d.options);
                        }
                        c();
                    }), a.data("$$animateClasses", m)), m.promise;
                },
                $$setClassImmediately: function(a, c, d, e) {
                    return c && this.$$addClassImmediately(a, c), d && this.$$removeClassImmediately(a, d), 
                    k(a, e), l();
                },
                enabled: z,
                cancel: z
            };
        } ];
    } ], ja = S("$compile");
    xc.$inject = [ "$provide", "$$sanitizeUriProvider" ];
    var Sc = /^((?:x|data)[\:\-_])/i, qf = S("$controller"), Wc = "application/json", $b = {
        "Content-Type": Wc + ";charset=utf-8"
    }, sf = /^\[|^\{(?!\{)/, tf = {
        "[": /]$/,
        "{": /}$/
    }, rf = /^\)\]\}',?\n/, ac = S("$interpolate"), Tf = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, wf = {
        http: 80,
        https: 443,
        ftp: 21
    }, Hb = S("$location"), Uf = {
        $$html5: !1,
        $$replace: !1,
        absUrl: Ib("$$absUrl"),
        url: function(a) {
            if (B(a)) return this.$$url;
            var c = Tf.exec(a);
            return (c[1] || "" === a) && this.path(decodeURIComponent(c[1])), (c[2] || c[1] || "" === a) && this.search(c[3] || ""), 
            this.hash(c[5] || ""), this;
        },
        protocol: Ib("$$protocol"),
        host: Ib("$$host"),
        port: Ib("$$port"),
        path: dd("$$path", function(a) {
            return a = null !== a ? a.toString() : "", "/" == a.charAt(0) ? a : "/" + a;
        }),
        search: function(a, c) {
            switch (arguments.length) {
              case 0:
                return this.$$search;

              case 1:
                if (F(a) || V(a)) a = a.toString(), this.$$search = rc(a); else {
                    if (!I(a)) throw Hb("isrcharg");
                    a = Ea(a, {}), s(a, function(c, e) {
                        null == c && delete a[e];
                    }), this.$$search = a;
                }
                break;

              default:
                B(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c;
            }
            return this.$$compose(), this;
        },
        hash: dd("$$hash", function(a) {
            return null !== a ? a.toString() : "";
        }),
        replace: function() {
            return this.$$replace = !0, this;
        }
    };
    s([ cd, ec, dc ], function(a) {
        a.prototype = Object.create(Uf), a.prototype.state = function(c) {
            if (!arguments.length) return this.$$state;
            if (a !== dc || !this.$$html5) throw Hb("nostate");
            return this.$$state = B(c) ? null : c, this;
        };
    });
    var la = S("$parse"), Vf = Function.prototype.call, Wf = Function.prototype.apply, Xf = Function.prototype.bind, mb = ha();
    s({
        "null": function() {
            return null;
        },
        "true": function() {
            return !0;
        },
        "false": function() {
            return !1;
        },
        undefined: function() {}
    }, function(a, c) {
        a.constant = a.literal = a.sharedGetter = !0, mb[c] = a;
    }), mb["this"] = function(a) {
        return a;
    }, mb["this"].sharedGetter = !0;
    var nb = x(ha(), {
        "+": function(a, c, d, e) {
            return d = d(a, c), e = e(a, c), y(d) ? y(e) ? d + e : d : y(e) ? e : t;
        },
        "-": function(a, c, d, e) {
            return d = d(a, c), e = e(a, c), (y(d) ? d : 0) - (y(e) ? e : 0);
        },
        "*": function(a, c, d, e) {
            return d(a, c) * e(a, c);
        },
        "/": function(a, c, d, e) {
            return d(a, c) / e(a, c);
        },
        "%": function(a, c, d, e) {
            return d(a, c) % e(a, c);
        },
        "===": function(a, c, d, e) {
            return d(a, c) === e(a, c);
        },
        "!==": function(a, c, d, e) {
            return d(a, c) !== e(a, c);
        },
        "==": function(a, c, d, e) {
            return d(a, c) == e(a, c);
        },
        "!=": function(a, c, d, e) {
            return d(a, c) != e(a, c);
        },
        "<": function(a, c, d, e) {
            return d(a, c) < e(a, c);
        },
        ">": function(a, c, d, e) {
            return d(a, c) > e(a, c);
        },
        "<=": function(a, c, d, e) {
            return d(a, c) <= e(a, c);
        },
        ">=": function(a, c, d, e) {
            return d(a, c) >= e(a, c);
        },
        "&&": function(a, c, d, e) {
            return d(a, c) && e(a, c);
        },
        "||": function(a, c, d, e) {
            return d(a, c) || e(a, c);
        },
        "!": function(a, c, d) {
            return !d(a, c);
        },
        "=": !0,
        "|": !0
    }), Yf = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "",
        "'": "'",
        '"': '"'
    }, hc = function(a) {
        this.options = a;
    };
    hc.prototype = {
        constructor: hc,
        lex: function(a) {
            for (this.text = a, this.index = 0, this.tokens = []; this.index < this.text.length; ) if (a = this.text.charAt(this.index), 
            '"' === a || "'" === a) this.readString(a); else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdent(a)) this.readIdent(); else if (this.is(a, "(){}[].,;:?")) this.tokens.push({
                index: this.index,
                text: a
            }), this.index++; else if (this.isWhitespace(a)) this.index++; else {
                var c = a + this.peek(), d = c + this.peek(2), e = nb[c], f = nb[d];
                nb[a] || e || f ? (a = f ? d : e ? c : a, this.tokens.push({
                    index: this.index,
                    text: a,
                    operator: !0
                }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1);
            }
            return this.tokens;
        },
        is: function(a, c) {
            return -1 !== c.indexOf(a);
        },
        peek: function(a) {
            return a = a || 1, this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
        },
        isNumber: function(a) {
            return a >= "0" && "9" >= a && "string" == typeof a;
        },
        isWhitespace: function(a) {
            return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a;
        },
        isIdent: function(a) {
            return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a;
        },
        isExpOperator: function(a) {
            return "-" === a || "+" === a || this.isNumber(a);
        },
        throwError: function(a, c, d) {
            throw d = d || this.index, c = y(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d, 
            la("lexerr", a, c, this.text);
        },
        readNumber: function() {
            for (var a = "", c = this.index; this.index < this.text.length; ) {
                var d = Q(this.text.charAt(this.index));
                if ("." == d || this.isNumber(d)) a += d; else {
                    var e = this.peek();
                    if ("e" == d && this.isExpOperator(e)) a += d; else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1)) a += d; else {
                        if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length - 1)) break;
                        this.throwError("Invalid exponent");
                    }
                }
                this.index++;
            }
            this.tokens.push({
                index: c,
                text: a,
                constant: !0,
                value: Number(a)
            });
        },
        readIdent: function() {
            for (var a = this.index; this.index < this.text.length; ) {
                var c = this.text.charAt(this.index);
                if (!this.isIdent(c) && !this.isNumber(c)) break;
                this.index++;
            }
            this.tokens.push({
                index: a,
                text: this.text.slice(a, this.index),
                identifier: !0
            });
        },
        readString: function(a) {
            var c = this.index;
            this.index++;
            for (var d = "", e = a, f = !1; this.index < this.text.length; ) {
                var g = this.text.charAt(this.index), e = e + g;
                if (f) "u" === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), 
                this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Yf[g] || g, f = !1; else if ("\\" === g) f = !0; else {
                    if (g === a) return this.index++, void this.tokens.push({
                        index: c,
                        text: e,
                        constant: !0,
                        value: d
                    });
                    d += g;
                }
                this.index++;
            }
            this.throwError("Unterminated quote", c);
        }
    };
    var ib = function(a, c, d) {
        this.lexer = a, this.$filter = c, this.options = d;
    };
    ib.ZERO = x(function() {
        return 0;
    }, {
        sharedGetter: !0,
        constant: !0
    }), ib.prototype = {
        constructor: ib,
        parse: function(a) {
            return this.text = a, this.tokens = this.lexer.lex(a), a = this.statements(), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), 
            a.literal = !!a.literal, a.constant = !!a.constant, a;
        },
        primary: function() {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.peek().identifier && this.peek().text in mb ? a = mb[this.consume().text] : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var c, d; c = this.expect("(", "[", "."); ) "(" === c.text ? (a = this.functionCall(a, d), 
            d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, 
            a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
            return a;
        },
        throwError: function(a, c) {
            throw la("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw la("ueoe", this.text);
            return this.tokens[0];
        },
        peek: function(a, c, d, e) {
            return this.peekAhead(0, a, c, d, e);
        },
        peekAhead: function(a, c, d, e, f) {
            if (this.tokens.length > a) {
                a = this.tokens[a];
                var g = a.text;
                if (g === c || g === d || g === e || g === f || !(c || d || e || f)) return a;
            }
            return !1;
        },
        expect: function(a, c, d, e) {
            return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1;
        },
        consume: function(a) {
            if (0 === this.tokens.length) throw la("ueoe", this.text);
            var c = this.expect(a);
            return c || this.throwError("is unexpected, expecting [" + a + "]", this.peek()), 
            c;
        },
        unaryFn: function(a, c) {
            var d = nb[a];
            return x(function(a, f) {
                return d(a, f, c);
            }, {
                constant: c.constant,
                inputs: [ c ]
            });
        },
        binaryFn: function(a, c, d, e) {
            var f = nb[c];
            return x(function(c, e) {
                return f(c, e, a, d);
            }, {
                constant: a.constant && d.constant,
                inputs: !e && [ a, d ]
            });
        },
        identifier: function() {
            for (var a = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "("); ) a += this.consume().text + this.consume().text;
            return yf(a, this.options, this.text);
        },
        constant: function() {
            var a = this.consume().value;
            return x(function() {
                return a;
            }, {
                constant: !0,
                literal: !0
            });
        },
        statements: function() {
            for (var a = []; ;) if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), 
            !this.expect(";")) return 1 === a.length ? a[0] : function(c, d) {
                for (var e, f = 0, g = a.length; g > f; f++) e = a[f](c, d);
                return e;
            };
        },
        filterChain: function() {
            for (var a = this.expression(); this.expect("|"); ) a = this.filter(a);
            return a;
        },
        filter: function(a) {
            var d, e, c = this.$filter(this.consume().text);
            if (this.peek(":")) for (d = [], e = []; this.expect(":"); ) d.push(this.expression());
            var f = [ a ].concat(d || []);
            return x(function(f, h) {
                var l = a(f, h);
                if (e) {
                    for (e[0] = l, l = d.length; l--; ) e[l + 1] = d[l](f, h);
                    return c.apply(t, e);
                }
                return c(l);
            }, {
                constant: !c.$stateful && f.every(fc),
                inputs: !c.$stateful && f
            });
        },
        expression: function() {
            return this.assignment();
        },
        assignment: function() {
            var c, d, a = this.ternary();
            return (d = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" + this.text.substring(0, d.index) + "] can not be assigned to", d), 
            c = this.ternary(), x(function(d, f) {
                return a.assign(d, c(d, f), f);
            }, {
                inputs: [ a, c ]
            })) : a;
        },
        ternary: function() {
            var c, a = this.logicalOR();
            if (this.expect("?") && (c = this.assignment(), this.consume(":"))) {
                var d = this.assignment();
                return x(function(e, f) {
                    return a(e, f) ? c(e, f) : d(e, f);
                }, {
                    constant: a.constant && c.constant && d.constant
                });
            }
            return a;
        },
        logicalOR: function() {
            for (var c, a = this.logicalAND(); c = this.expect("||"); ) a = this.binaryFn(a, c.text, this.logicalAND(), !0);
            return a;
        },
        logicalAND: function() {
            for (var c, a = this.equality(); c = this.expect("&&"); ) a = this.binaryFn(a, c.text, this.equality(), !0);
            return a;
        },
        equality: function() {
            for (var c, a = this.relational(); c = this.expect("==", "!=", "===", "!=="); ) a = this.binaryFn(a, c.text, this.relational());
            return a;
        },
        relational: function() {
            for (var c, a = this.additive(); c = this.expect("<", ">", "<=", ">="); ) a = this.binaryFn(a, c.text, this.additive());
            return a;
        },
        additive: function() {
            for (var c, a = this.multiplicative(); c = this.expect("+", "-"); ) a = this.binaryFn(a, c.text, this.multiplicative());
            return a;
        },
        multiplicative: function() {
            for (var c, a = this.unary(); c = this.expect("*", "/", "%"); ) a = this.binaryFn(a, c.text, this.unary());
            return a;
        },
        unary: function() {
            var a;
            return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(ib.ZERO, a.text, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.text, this.unary()) : this.primary();
        },
        fieldAccess: function(a) {
            var c = this.identifier();
            return x(function(d, e, f) {
                return d = f || a(d, e), null == d ? t : c(d);
            }, {
                assign: function(d, e, f) {
                    var g = a(d, f);
                    return g || a.assign(d, g = {}, f), c.assign(g, e);
                }
            });
        },
        objectIndex: function(a) {
            var c = this.text, d = this.expression();
            return this.consume("]"), x(function(e, f) {
                var g = a(e, f), h = d(e, f);
                return ta(h, c), g ? ma(g[h], c) : t;
            }, {
                assign: function(e, f, g) {
                    var h = ta(d(e, g), c), l = ma(a(e, g), c);
                    return l || a.assign(e, l = {}, g), l[h] = f;
                }
            });
        },
        functionCall: function(a, c) {
            var d = [];
            if (")" !== this.peekToken().text) do d.push(this.expression()); while (this.expect(","));
            this.consume(")");
            var e = this.text, f = d.length ? [] : null;
            return function(g, h) {
                var l = c ? c(g, h) : y(c) ? t : g, k = a(g, h, l) || z;
                if (f) for (var m = d.length; m--; ) f[m] = ma(d[m](g, h), e);
                if (ma(l, e), k) {
                    if (k.constructor === k) throw la("isecfn", e);
                    if (k === Vf || k === Wf || k === Xf) throw la("isecff", e);
                }
                return l = k.apply ? k.apply(l, f) : k(f[0], f[1], f[2], f[3], f[4]), f && (f.length = 0), 
                ma(l, e);
            };
        },
        arrayDeclaration: function() {
            var a = [];
            if ("]" !== this.peekToken().text) do {
                if (this.peek("]")) break;
                a.push(this.expression());
            } while (this.expect(","));
            return this.consume("]"), x(function(c, d) {
                for (var e = [], f = 0, g = a.length; g > f; f++) e.push(a[f](c, d));
                return e;
            }, {
                literal: !0,
                constant: a.every(fc),
                inputs: a
            });
        },
        object: function() {
            var a = [], c = [];
            if ("}" !== this.peekToken().text) do {
                if (this.peek("}")) break;
                var d = this.consume();
                d.constant ? a.push(d.value) : d.identifier ? a.push(d.text) : this.throwError("invalid key", d), 
                this.consume(":"), c.push(this.expression());
            } while (this.expect(","));
            return this.consume("}"), x(function(d, f) {
                for (var g = {}, h = 0, l = c.length; l > h; h++) g[a[h]] = c[h](d, f);
                return g;
            }, {
                literal: !0,
                constant: c.every(fc),
                inputs: c
            });
        }
    };
    var Af = ha(), zf = ha(), Bf = Object.prototype.valueOf, Ca = S("$sce"), na = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, ja = S("$compile"), Z = Y.createElement("a"), id = Ba(M.location.href);
    Ec.$inject = [ "$provide" ], jd.$inject = [ "$locale" ], ld.$inject = [ "$locale" ];
    var od = ".", Lf = {
        yyyy: $("FullYear", 4),
        yy: $("FullYear", 2, 0, !0),
        y: $("FullYear", 1),
        MMMM: Kb("Month"),
        MMM: Kb("Month", !0),
        MM: $("Month", 2, 1),
        M: $("Month", 1, 1),
        dd: $("Date", 2),
        d: $("Date", 1),
        HH: $("Hours", 2),
        H: $("Hours", 1),
        hh: $("Hours", 2, -12),
        h: $("Hours", 1, -12),
        mm: $("Minutes", 2),
        m: $("Minutes", 1),
        ss: $("Seconds", 2),
        s: $("Seconds", 1),
        sss: $("Milliseconds", 3),
        EEEE: Kb("Day"),
        EEE: Kb("Day", !0),
        a: function(a, c) {
            return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1];
        },
        Z: function(a) {
            return a = -1 * a.getTimezoneOffset(), a = (a >= 0 ? "+" : "") + (Jb(Math[a > 0 ? "floor" : "ceil"](a / 60), 2) + Jb(Math.abs(a % 60), 2));
        },
        ww: qd(2),
        w: qd(1)
    }, Kf = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/, Jf = /^\-?\d+$/;
    kd.$inject = [ "$locale" ];
    var Gf = ea(Q), Hf = ea(vb);
    md.$inject = [ "$parse" ];
    var Td = ea({
        restrict: "E",
        compile: function(a, c) {
            return c.href || c.xlinkHref || c.name ? void 0 : function(a, c) {
                if ("a" === c[0].nodeName.toLowerCase()) {
                    var f = "[object SVGAnimatedString]" === Da.call(c.prop("href")) ? "xlink:href" : "href";
                    c.on("click", function(a) {
                        c.attr(f) || a.preventDefault();
                    });
                }
            };
        }
    }), wb = {};
    s(Fb, function(a, c) {
        if ("multiple" != a) {
            var d = ya("ng-" + c);
            wb[d] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: function(a, f, g) {
                        a.$watch(g[d], function(a) {
                            g.$set(c, !!a);
                        });
                    }
                };
            };
        }
    }), s(Oc, function(a, c) {
        wb[c] = function() {
            return {
                priority: 100,
                link: function(a, e, f) {
                    return "ngPattern" === c && "/" == f.ngPattern.charAt(0) && (e = f.ngPattern.match(Nf)) ? void f.$set("ngPattern", new RegExp(e[1], e[2])) : void a.$watch(f[c], function(a) {
                        f.$set(c, a);
                    });
                }
            };
        };
    }), s([ "src", "srcset", "href" ], function(a) {
        var c = ya("ng-" + a);
        wb[c] = function() {
            return {
                priority: 99,
                link: function(d, e, f) {
                    var g = a, h = a;
                    "href" === a && "[object SVGAnimatedString]" === Da.call(e.prop("href")) && (h = "xlinkHref", 
                    f.$attr[h] = "xlink:href", g = null), f.$observe(c, function(c) {
                        c ? (f.$set(h, c), Ra && g && e.prop(g, f[h])) : "href" === a && f.$set(h, null);
                    });
                }
            };
        };
    });
    var Lb = {
        $addControl: z,
        $$renameControl: function(a, c) {
            a.$name = c;
        },
        $removeControl: z,
        $setValidity: z,
        $setDirty: z,
        $setPristine: z,
        $setSubmitted: z
    };
    rd.$inject = [ "$element", "$attrs", "$scope", "$animate", "$interpolate" ];
    var yd = function(a) {
        return [ "$timeout", function(c) {
            return {
                name: "form",
                restrict: a ? "EAC" : "E",
                controller: rd,
                compile: function(a) {
                    return a.addClass(Sa).addClass(lb), {
                        pre: function(a, d, g, h) {
                            if (!("action" in g)) {
                                var l = function(c) {
                                    a.$apply(function() {
                                        h.$commitViewValue(), h.$setSubmitted();
                                    }), c.preventDefault();
                                };
                                d[0].addEventListener("submit", l, !1), d.on("$destroy", function() {
                                    c(function() {
                                        d[0].removeEventListener("submit", l, !1);
                                    }, 0, !1);
                                });
                            }
                            var k = h.$$parentForm, m = h.$name;
                            m && (hb(a, null, m, h, m), g.$observe(g.name ? "name" : "ngForm", function(c) {
                                m !== c && (hb(a, null, m, t, m), m = c, hb(a, null, m, h, m), k.$$renameControl(h, m));
                            })), d.on("$destroy", function() {
                                k.$removeControl(h), m && hb(a, null, m, t, m), x(h, Lb);
                            });
                        }
                    };
                }
            };
        } ];
    }, Ud = yd(), ge = yd(!0), Mf = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, Zf = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, $f = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, ag = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, zd = /^(\d{4})-(\d{2})-(\d{2})$/, Ad = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, kc = /^(\d{4})-W(\d\d)$/, Bd = /^(\d{4})-(\d\d)$/, Cd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Dd = {
        text: function(a, c, d, e, f, g) {
            jb(a, c, d, e, f, g), ic(e);
        },
        date: kb("date", zd, Nb(zd, [ "yyyy", "MM", "dd" ]), "yyyy-MM-dd"),
        "datetime-local": kb("datetimelocal", Ad, Nb(Ad, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: kb("time", Cd, Nb(Cd, [ "HH", "mm", "ss", "sss" ]), "HH:mm:ss.sss"),
        week: kb("week", kc, function(a, c) {
            if (qa(a)) return a;
            if (F(a)) {
                kc.lastIndex = 0;
                var d = kc.exec(a);
                if (d) {
                    var e = +d[1], f = +d[2], g = d = 0, h = 0, l = 0, k = pd(e), f = 7 * (f - 1);
                    return c && (d = c.getHours(), g = c.getMinutes(), h = c.getSeconds(), l = c.getMilliseconds()), 
                    new Date(e, 0, k.getDate() + f, d, g, h, l);
                }
            }
            return 0/0;
        }, "yyyy-Www"),
        month: kb("month", Bd, Nb(Bd, [ "yyyy", "MM" ]), "yyyy-MM"),
        number: function(a, c, d, e, f, g) {
            if (td(a, c, d, e), jb(a, c, d, e, f, g), e.$$parserName = "number", e.$parsers.push(function(a) {
                return e.$isEmpty(a) ? null : ag.test(a) ? parseFloat(a) : t;
            }), e.$formatters.push(function(a) {
                if (!e.$isEmpty(a)) {
                    if (!V(a)) throw Ob("numfmt", a);
                    a = a.toString();
                }
                return a;
            }), d.min || d.ngMin) {
                var h;
                e.$validators.min = function(a) {
                    return e.$isEmpty(a) || B(h) || a >= h;
                }, d.$observe("min", function(a) {
                    y(a) && !V(a) && (a = parseFloat(a, 10)), h = V(a) && !isNaN(a) ? a : t, e.$validate();
                });
            }
            if (d.max || d.ngMax) {
                var l;
                e.$validators.max = function(a) {
                    return e.$isEmpty(a) || B(l) || l >= a;
                }, d.$observe("max", function(a) {
                    y(a) && !V(a) && (a = parseFloat(a, 10)), l = V(a) && !isNaN(a) ? a : t, e.$validate();
                });
            }
        },
        url: function(a, c, d, e, f, g) {
            jb(a, c, d, e, f, g), ic(e), e.$$parserName = "url", e.$validators.url = function(a, c) {
                var d = a || c;
                return e.$isEmpty(d) || Zf.test(d);
            };
        },
        email: function(a, c, d, e, f, g) {
            jb(a, c, d, e, f, g), ic(e), e.$$parserName = "email", e.$validators.email = function(a, c) {
                var d = a || c;
                return e.$isEmpty(d) || $f.test(d);
            };
        },
        radio: function(a, c, d, e) {
            B(d.name) && c.attr("name", ++ob), c.on("click", function(a) {
                c[0].checked && e.$setViewValue(d.value, a && a.type);
            }), e.$render = function() {
                c[0].checked = d.value == e.$viewValue;
            }, d.$observe("value", e.$render);
        },
        checkbox: function(a, c, d, e, f, g, h, l) {
            var k = ud(l, a, "ngTrueValue", d.ngTrueValue, !0), m = ud(l, a, "ngFalseValue", d.ngFalseValue, !1);
            c.on("click", function(a) {
                e.$setViewValue(c[0].checked, a && a.type);
            }), e.$render = function() {
                c[0].checked = e.$viewValue;
            }, e.$isEmpty = function(a) {
                return !1 === a;
            }, e.$formatters.push(function(a) {
                return ga(a, k);
            }), e.$parsers.push(function(a) {
                return a ? k : m;
            });
        },
        hidden: z,
        button: z,
        submit: z,
        reset: z,
        file: z
    }, yc = [ "$browser", "$sniffer", "$filter", "$parse", function(a, c, d, e) {
        return {
            restrict: "E",
            require: [ "?ngModel" ],
            link: {
                pre: function(f, g, h, l) {
                    l[0] && (Dd[Q(h.type)] || Dd.text)(f, g, h, l[0], c, a, d, e);
                }
            }
        };
    } ], bg = /^(true|false|\d+)$/, ye = function() {
        return {
            restrict: "A",
            priority: 100,
            compile: function(a, c) {
                return bg.test(c.ngValue) ? function(a, c, f) {
                    f.$set("value", a.$eval(f.ngValue));
                } : function(a, c, f) {
                    a.$watch(f.ngValue, function(a) {
                        f.$set("value", a);
                    });
                };
            }
        };
    }, Zd = [ "$compile", function(a) {
        return {
            restrict: "AC",
            compile: function(c) {
                return a.$$addBindingClass(c), function(c, e, f) {
                    a.$$addBindingInfo(e, f.ngBind), e = e[0], c.$watch(f.ngBind, function(a) {
                        e.textContent = a === t ? "" : a;
                    });
                };
            }
        };
    } ], ae = [ "$interpolate", "$compile", function(a, c) {
        return {
            compile: function(d) {
                return c.$$addBindingClass(d), function(d, f, g) {
                    d = a(f.attr(g.$attr.ngBindTemplate)), c.$$addBindingInfo(f, d.expressions), f = f[0], 
                    g.$observe("ngBindTemplate", function(a) {
                        f.textContent = a === t ? "" : a;
                    });
                };
            }
        };
    } ], $d = [ "$sce", "$parse", "$compile", function(a, c, d) {
        return {
            restrict: "A",
            compile: function(e, f) {
                var g = c(f.ngBindHtml), h = c(f.ngBindHtml, function(a) {
                    return (a || "").toString();
                });
                return d.$$addBindingClass(e), function(c, e, f) {
                    d.$$addBindingInfo(e, f.ngBindHtml), c.$watch(h, function() {
                        e.html(a.getTrustedHtml(g(c)) || "");
                    });
                };
            }
        };
    } ], xe = ea({
        restrict: "A",
        require: "ngModel",
        link: function(a, c, d, e) {
            e.$viewChangeListeners.push(function() {
                a.$eval(d.ngChange);
            });
        }
    }), be = jc("", !0), de = jc("Odd", 0), ce = jc("Even", 1), ee = Ja({
        compile: function(a, c) {
            c.$set("ngCloak", t), a.removeClass("ng-cloak");
        }
    }), fe = [ function() {
        return {
            restrict: "A",
            scope: !0,
            controller: "@",
            priority: 500
        };
    } ], Dc = {}, cg = {
        blur: !0,
        focus: !0
    };
    s("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
        var c = ya("ng-" + a);
        Dc[c] = [ "$parse", "$rootScope", function(d, e) {
            return {
                restrict: "A",
                compile: function(f, g) {
                    var h = d(g[c], null, !0);
                    return function(c, d) {
                        d.on(a, function(d) {
                            var f = function() {
                                h(c, {
                                    $event: d
                                });
                            };
                            cg[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f);
                        });
                    };
                }
            };
        } ];
    });
    var ie = [ "$animate", function(a) {
        return {
            multiElement: !0,
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function(c, d, e, f, g) {
                var h, l, k;
                c.$watch(e.ngIf, function(c) {
                    c ? l || g(function(c, f) {
                        l = f, c[c.length++] = Y.createComment(" end ngIf: " + e.ngIf + " "), h = {
                            clone: c
                        }, a.enter(c, d.parent(), d);
                    }) : (k && (k.remove(), k = null), l && (l.$destroy(), l = null), h && (k = ub(h.clone), 
                    a.leave(k).then(function() {
                        k = null;
                    }), h = null));
                });
            }
        };
    } ], je = [ "$templateRequest", "$anchorScroll", "$animate", "$sce", function(a, c, d, e) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: ca.noop,
            compile: function(f, g) {
                var h = g.ngInclude || g.src, l = g.onload || "", k = g.autoscroll;
                return function(f, g, q, s, r) {
                    var p, v, w, t = 0, L = function() {
                        v && (v.remove(), v = null), p && (p.$destroy(), p = null), w && (d.leave(w).then(function() {
                            v = null;
                        }), v = w, w = null);
                    };
                    f.$watch(e.parseAsResourceUrl(h), function(e) {
                        var h = function() {
                            !y(k) || k && !f.$eval(k) || c();
                        }, q = ++t;
                        e ? (a(e, !0).then(function(a) {
                            if (q === t) {
                                var c = f.$new();
                                s.template = a, a = r(c, function(a) {
                                    L(), d.enter(a, null, g).then(h);
                                }), p = c, w = a, p.$emit("$includeContentLoaded", e), f.$eval(l);
                            }
                        }, function() {
                            q === t && (L(), f.$emit("$includeContentError", e));
                        }), f.$emit("$includeContentRequested", e)) : (L(), s.template = null);
                    });
                };
            }
        };
    } ], Ae = [ "$compile", function(a) {
        return {
            restrict: "ECA",
            priority: -400,
            require: "ngInclude",
            link: function(c, d, e, f) {
                /SVG/.test(d[0].toString()) ? (d.empty(), a(Gc(f.template, Y).childNodes)(c, function(a) {
                    d.append(a);
                }, {
                    futureParentElement: d
                })) : (d.html(f.template), a(d.contents())(c));
            }
        };
    } ], ke = Ja({
        priority: 450,
        compile: function() {
            return {
                pre: function(a, c, d) {
                    a.$eval(d.ngInit);
                }
            };
        }
    }), we = function() {
        return {
            restrict: "A",
            priority: 100,
            require: "ngModel",
            link: function(a, c, d, e) {
                var f = c.attr(d.$attr.ngList) || ", ", g = "false" !== d.ngTrim, h = g ? U(f) : f;
                e.$parsers.push(function(a) {
                    if (!B(a)) {
                        var c = [];
                        return a && s(a.split(h), function(a) {
                            a && c.push(g ? U(a) : a);
                        }), c;
                    }
                }), e.$formatters.push(function(a) {
                    return H(a) ? a.join(f) : t;
                }), e.$isEmpty = function(a) {
                    return !a || !a.length;
                };
            }
        };
    }, lb = "ng-valid", vd = "ng-invalid", Sa = "ng-pristine", Mb = "ng-dirty", xd = "ng-pending", Ob = new S("ngModel"), dg = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, c, d, e, f, g, h, l, k, m) {
        this.$modelValue = this.$viewValue = Number.NaN, this.$$rawModelValue = t, this.$validators = {}, 
        this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], 
        this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, 
        this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = t, 
        this.$name = m(d.name || "", !1)(a);
        var n = f(d.ngModel), q = n.assign, u = n, r = q, P = null, p = this;
        this.$$setOptions = function(a) {
            if ((p.$options = a) && a.getterSetter) {
                var c = f(d.ngModel + "()"), g = f(d.ngModel + "($$$p)");
                u = function(a) {
                    var d = n(a);
                    return G(d) && (d = c(a)), d;
                }, r = function(a) {
                    G(n(a)) ? g(a, {
                        $$$p: p.$modelValue
                    }) : q(a, p.$modelValue);
                };
            } else if (!n.assign) throw Ob("nonassign", d.ngModel, va(e));
        }, this.$render = z, this.$isEmpty = function(a) {
            return B(a) || "" === a || null === a || a !== a;
        };
        var v = e.inheritedData("$formController") || Lb, w = 0;
        sd({
            ctrl: this,
            $element: e,
            set: function(a, c) {
                a[c] = !0;
            },
            unset: function(a, c) {
                delete a[c];
            },
            parentForm: v,
            $animate: g
        }), this.$setPristine = function() {
            p.$dirty = !1, p.$pristine = !0, g.removeClass(e, Mb), g.addClass(e, Sa);
        }, this.$setDirty = function() {
            p.$dirty = !0, p.$pristine = !1, g.removeClass(e, Sa), g.addClass(e, Mb), v.$setDirty();
        }, this.$setUntouched = function() {
            p.$touched = !1, p.$untouched = !0, g.setClass(e, "ng-untouched", "ng-touched");
        }, this.$setTouched = function() {
            p.$touched = !0, p.$untouched = !1, g.setClass(e, "ng-touched", "ng-untouched");
        }, this.$rollbackViewValue = function() {
            h.cancel(P), p.$viewValue = p.$$lastCommittedViewValue, p.$render();
        }, this.$validate = function() {
            if (!V(p.$modelValue) || !isNaN(p.$modelValue)) {
                var a = p.$$rawModelValue, c = p.$valid, d = p.$modelValue, e = p.$options && p.$options.allowInvalid;
                p.$$runValidators(p.$error[p.$$parserName || "parse"] ? !1 : t, a, p.$$lastCommittedViewValue, function(f) {
                    e || c === f || (p.$modelValue = f ? a : t, p.$modelValue !== d && p.$$writeModelToScope());
                });
            }
        }, this.$$runValidators = function(a, c, d, e) {
            function f() {
                var a = !0;
                return s(p.$validators, function(e, f) {
                    var g = e(c, d);
                    a = a && g, h(f, g);
                }), a ? !0 : (s(p.$asyncValidators, function(a, c) {
                    h(c, null);
                }), !1);
            }
            function g() {
                var a = [], e = !0;
                s(p.$asyncValidators, function(f, g) {
                    var l = f(c, d);
                    if (!l || !G(l.then)) throw Ob("$asyncValidators", l);
                    h(g, t), a.push(l.then(function() {
                        h(g, !0);
                    }, function() {
                        e = !1, h(g, !1);
                    }));
                }), a.length ? k.all(a).then(function() {
                    l(e);
                }, z) : l(!0);
            }
            function h(a, c) {
                m === w && p.$setValidity(a, c);
            }
            function l(a) {
                m === w && e(a);
            }
            w++;
            var m = w;
            (function(a) {
                var c = p.$$parserName || "parse";
                if (a === t) h(c, null); else if (h(c, a), !a) return s(p.$validators, function(a, c) {
                    h(c, null);
                }), s(p.$asyncValidators, function(a, c) {
                    h(c, null);
                }), !1;
                return !0;
            })(a) && f() ? g() : l(!1);
        }, this.$commitViewValue = function() {
            var a = p.$viewValue;
            h.cancel(P), (p.$$lastCommittedViewValue !== a || "" === a && p.$$hasNativeValidators) && (p.$$lastCommittedViewValue = a, 
            p.$pristine && this.$setDirty(), this.$$parseAndValidate());
        }, this.$$parseAndValidate = function() {
            var c = p.$$lastCommittedViewValue, d = B(c) ? t : !0;
            if (d) for (var e = 0; e < p.$parsers.length; e++) if (c = p.$parsers[e](c), B(c)) {
                d = !1;
                break;
            }
            V(p.$modelValue) && isNaN(p.$modelValue) && (p.$modelValue = u(a));
            var f = p.$modelValue, g = p.$options && p.$options.allowInvalid;
            p.$$rawModelValue = c, g && (p.$modelValue = c, p.$modelValue !== f && p.$$writeModelToScope()), 
            p.$$runValidators(d, c, p.$$lastCommittedViewValue, function(a) {
                g || (p.$modelValue = a ? c : t, p.$modelValue !== f && p.$$writeModelToScope());
            });
        }, this.$$writeModelToScope = function() {
            r(a, p.$modelValue), s(p.$viewChangeListeners, function(a) {
                try {
                    a();
                } catch (d) {
                    c(d);
                }
            });
        }, this.$setViewValue = function(a, c) {
            p.$viewValue = a, p.$options && !p.$options.updateOnDefault || p.$$debounceViewValueCommit(c);
        }, this.$$debounceViewValueCommit = function(c) {
            var d = 0, e = p.$options;
            e && y(e.debounce) && (e = e.debounce, V(e) ? d = e : V(e[c]) ? d = e[c] : V(e["default"]) && (d = e["default"])), 
            h.cancel(P), d ? P = h(function() {
                p.$commitViewValue();
            }, d) : l.$$phase ? p.$commitViewValue() : a.$apply(function() {
                p.$commitViewValue();
            });
        }, a.$watch(function() {
            var c = u(a);
            if (c !== p.$modelValue) {
                p.$modelValue = p.$$rawModelValue = c;
                for (var d = p.$formatters, e = d.length, f = c; e--; ) f = d[e](f);
                p.$viewValue !== f && (p.$viewValue = p.$$lastCommittedViewValue = f, p.$render(), 
                p.$$runValidators(t, c, f, z));
            }
            return c;
        });
    } ], ve = [ "$rootScope", function(a) {
        return {
            restrict: "A",
            require: [ "ngModel", "^?form", "^?ngModelOptions" ],
            controller: dg,
            priority: 1,
            compile: function(c) {
                return c.addClass(Sa).addClass("ng-untouched").addClass(lb), {
                    pre: function(a, c, f, g) {
                        var h = g[0], l = g[1] || Lb;
                        h.$$setOptions(g[2] && g[2].$options), l.$addControl(h), f.$observe("name", function(a) {
                            h.$name !== a && l.$$renameControl(h, a);
                        }), a.$on("$destroy", function() {
                            l.$removeControl(h);
                        });
                    },
                    post: function(c, e, f, g) {
                        var h = g[0];
                        h.$options && h.$options.updateOn && e.on(h.$options.updateOn, function(a) {
                            h.$$debounceViewValueCommit(a && a.type);
                        }), e.on("blur", function() {
                            h.$touched || (a.$$phase ? c.$evalAsync(h.$setTouched) : c.$apply(h.$setTouched));
                        });
                    }
                };
            }
        };
    } ], eg = /(\s+|^)default(\s+|$)/, ze = function() {
        return {
            restrict: "A",
            controller: [ "$scope", "$attrs", function(a, c) {
                var d = this;
                this.$options = a.$eval(c.ngModelOptions), this.$options.updateOn !== t ? (this.$options.updateOnDefault = !1, 
                this.$options.updateOn = U(this.$options.updateOn.replace(eg, function() {
                    return d.$options.updateOnDefault = !0, " ";
                }))) : this.$options.updateOnDefault = !0;
            } ]
        };
    }, le = Ja({
        terminal: !0,
        priority: 1e3
    }), me = [ "$locale", "$interpolate", function(a, c) {
        var d = /{}/g, e = /^when(Minus)?(.+)$/;
        return {
            restrict: "EA",
            link: function(f, g, h) {
                function l(a) {
                    g.text(a || "");
                }
                var v, k = h.count, m = h.$attr.when && g.attr(h.$attr.when), n = h.offset || 0, q = f.$eval(m) || {}, u = {}, m = c.startSymbol(), r = c.endSymbol(), t = m + k + "-" + n + r, p = ca.noop;
                s(h, function(a, c) {
                    var d = e.exec(c);
                    d && (d = (d[1] ? "-" : "") + Q(d[2]), q[d] = g.attr(h.$attr[c]));
                }), s(q, function(a, e) {
                    u[e] = c(a.replace(d, t));
                }), f.$watch(k, function(c) {
                    c = parseFloat(c);
                    var d = isNaN(c);
                    d || c in q || (c = a.pluralCat(c - n)), c === v || d && isNaN(v) || (p(), p = f.$watch(u[c], l), 
                    v = c);
                });
            }
        };
    } ], ne = [ "$parse", "$animate", function(a, c) {
        var d = S("ngRepeat"), e = function(a, c, d, e, k, m, n) {
            a[d] = e, k && (a[k] = m), a.$index = c, a.$first = 0 === c, a.$last = c === n - 1, 
            a.$middle = !(a.$first || a.$last), a.$odd = !(a.$even = 0 === (1 & c));
        };
        return {
            restrict: "A",
            multiElement: !0,
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            compile: function(f, g) {
                var h = g.ngRepeat, l = Y.createComment(" end ngRepeat: " + h + " "), k = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                if (!k) throw d("iexp", h);
                var m = k[1], n = k[2], q = k[3], u = k[4], k = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                if (!k) throw d("iidexp", m);
                var r = k[3] || k[1], y = k[2];
                if (q && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q))) throw d("badident", q);
                var p, v, w, B, z = {
                    $id: Na
                };
                return u ? p = a(u) : (w = function(a, c) {
                    return Na(c);
                }, B = function(a) {
                    return a;
                }), function(a, f, g, k, m) {
                    p && (v = function(c, d, e) {
                        return y && (z[y] = c), z[r] = d, z.$index = e, p(a, z);
                    });
                    var u = ha();
                    a.$watchCollection(n, function(g) {
                        var k, p, E, x, T, N, G, H, C, I, n = f[0], z = ha();
                        if (q && (a[q] = g), Ta(g)) H = g, p = v || w; else {
                            p = v || B, H = [];
                            for (I in g) g.hasOwnProperty(I) && "$" != I.charAt(0) && H.push(I);
                            H.sort();
                        }
                        for (x = H.length, I = Array(x), k = 0; x > k; k++) if (T = g === H ? k : H[k], 
                        N = g[T], G = p(T, N, k), u[G]) C = u[G], delete u[G], z[G] = C, I[k] = C; else {
                            if (z[G]) throw s(I, function(a) {
                                a && a.scope && (u[a.id] = a);
                            }), d("dupes", h, G, N);
                            I[k] = {
                                id: G,
                                scope: t,
                                clone: t
                            }, z[G] = !0;
                        }
                        for (E in u) {
                            if (C = u[E], G = ub(C.clone), c.leave(G), G[0].parentNode) for (k = 0, p = G.length; p > k; k++) G[k].$$NG_REMOVED = !0;
                            C.scope.$destroy();
                        }
                        for (k = 0; x > k; k++) if (T = g === H ? k : H[k], N = g[T], C = I[k], C.scope) {
                            E = n;
                            do E = E.nextSibling; while (E && E.$$NG_REMOVED);
                            C.clone[0] != E && c.move(ub(C.clone), null, D(n)), n = C.clone[C.clone.length - 1], 
                            e(C.scope, k, r, N, y, T, x);
                        } else m(function(a, d) {
                            C.scope = d;
                            var f = l.cloneNode(!1);
                            a[a.length++] = f, c.enter(a, null, D(n)), n = f, C.clone = a, z[C.id] = C, e(C.scope, k, r, N, y, T, x);
                        });
                        u = z;
                    });
                };
            }
        };
    } ], oe = [ "$animate", function(a) {
        return {
            restrict: "A",
            multiElement: !0,
            link: function(c, d, e) {
                c.$watch(e.ngShow, function(c) {
                    a[c ? "removeClass" : "addClass"](d, "ng-hide", {
                        tempClasses: "ng-hide-animate"
                    });
                });
            }
        };
    } ], he = [ "$animate", function(a) {
        return {
            restrict: "A",
            multiElement: !0,
            link: function(c, d, e) {
                c.$watch(e.ngHide, function(c) {
                    a[c ? "addClass" : "removeClass"](d, "ng-hide", {
                        tempClasses: "ng-hide-animate"
                    });
                });
            }
        };
    } ], pe = Ja(function(a, c, d) {
        a.$watchCollection(d.ngStyle, function(a, d) {
            d && a !== d && s(d, function(a, d) {
                c.css(d, "");
            }), a && c.css(a);
        });
    }), qe = [ "$animate", function(a) {
        return {
            restrict: "EA",
            require: "ngSwitch",
            controller: [ "$scope", function() {
                this.cases = {};
            } ],
            link: function(c, d, e, f) {
                var g = [], h = [], l = [], k = [], m = function(a, c) {
                    return function() {
                        a.splice(c, 1);
                    };
                };
                c.$watch(e.ngSwitch || e.on, function(c) {
                    var d, e;
                    for (d = 0, e = l.length; e > d; ++d) a.cancel(l[d]);
                    for (d = l.length = 0, e = k.length; e > d; ++d) {
                        var r = ub(h[d].clone);
                        k[d].$destroy(), (l[d] = a.leave(r)).then(m(l, d));
                    }
                    h.length = 0, k.length = 0, (g = f.cases["!" + c] || f.cases["?"]) && s(g, function(c) {
                        c.transclude(function(d, e) {
                            k.push(e);
                            var f = c.element;
                            d[d.length++] = Y.createComment(" end ngSwitchWhen: "), h.push({
                                clone: d
                            }), a.enter(d, f.parent(), f);
                        });
                    });
                });
            }
        };
    } ], re = Ja({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(a, c, d, e, f) {
            e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [], e.cases["!" + d.ngSwitchWhen].push({
                transclude: f,
                element: c
            });
        }
    }), se = Ja({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(a, c, d, e, f) {
            e.cases["?"] = e.cases["?"] || [], e.cases["?"].push({
                transclude: f,
                element: c
            });
        }
    }), ue = Ja({
        restrict: "EAC",
        link: function(a, c, d, e, f) {
            if (!f) throw S("ngTransclude")("orphan", va(c));
            f(function(a) {
                c.empty(), c.append(a);
            });
        }
    }), Vd = [ "$templateCache", function(a) {
        return {
            restrict: "E",
            terminal: !0,
            compile: function(c, d) {
                "text/ng-template" == d.type && a.put(d.id, c[0].text);
            }
        };
    } ], fg = S("ngOptions"), te = ea({
        restrict: "A",
        terminal: !0
    }), Wd = [ "$compile", "$parse", function(a, c) {
        var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, e = {
            $setViewValue: z
        };
        return {
            restrict: "E",
            require: [ "select", "?ngModel" ],
            controller: [ "$element", "$scope", "$attrs", function(a, c, d) {
                var n, l = this, k = {}, m = e;
                l.databound = d.ngModel, l.init = function(a, c, d) {
                    m = a, n = d;
                }, l.addOption = function(c, d) {
                    Ma(c, '"option value"'), k[c] = !0, m.$viewValue == c && (a.val(c), n.parent() && n.remove()), 
                    d && d[0].hasAttribute("selected") && (d[0].selected = !0);
                }, l.removeOption = function(a) {
                    this.hasOption(a) && (delete k[a], m.$viewValue === a && this.renderUnknownOption(a));
                }, l.renderUnknownOption = function(c) {
                    c = "? " + Na(c) + " ?", n.val(c), a.prepend(n), a.val(c), n.prop("selected", !0);
                }, l.hasOption = function(a) {
                    return k.hasOwnProperty(a);
                }, c.$on("$destroy", function() {
                    l.renderUnknownOption = z;
                });
            } ],
            link: function(e, g, h, l) {
                function k(a, c, d, e) {
                    d.$render = function() {
                        var a = d.$viewValue;
                        e.hasOption(a) ? (C.parent() && C.remove(), c.val(a), "" === a && p.prop("selected", !0)) : B(a) && p ? c.val("") : e.renderUnknownOption(a);
                    }, c.on("change", function() {
                        a.$apply(function() {
                            C.parent() && C.remove(), d.$setViewValue(c.val());
                        });
                    });
                }
                function m(a, c, d) {
                    var e;
                    d.$render = function() {
                        var a = new eb(d.$viewValue);
                        s(c.find("option"), function(c) {
                            c.selected = y(a.get(c.value));
                        });
                    }, a.$watch(function() {
                        ga(e, d.$viewValue) || (e = ra(d.$viewValue), d.$render());
                    }), c.on("change", function() {
                        a.$apply(function() {
                            var a = [];
                            s(c.find("option"), function(c) {
                                c.selected && a.push(c.value);
                            }), d.$setViewValue(a);
                        });
                    });
                }
                function n(e, f, g) {
                    function h(a, c, d) {
                        return S[x] = d, D && (S[D] = c), a(e, S);
                    }
                    function k(a) {
                        var c;
                        if (u) if (M && H(a)) {
                            c = new eb([]);
                            for (var d = 0; d < a.length; d++) c.put(h(M, null, a[d]), !0);
                        } else c = new eb(a); else M && (a = h(M, null, a));
                        return function(d, e) {
                            var f;
                            return f = M ? M : B ? B : F, u ? y(c.remove(h(f, d, e))) : a === h(f, d, e);
                        };
                    }
                    function l() {
                        v || (e.$$postDigest(p), v = !0);
                    }
                    function m(a, c, d) {
                        a[c] = a[c] || 0, a[c] += d ? 1 : -1;
                    }
                    function p() {
                        v = !1;
                        var d, l, n, r, t, a = {
                            "": []
                        }, c = [ "" ];
                        n = g.$viewValue, r = O(e) || [];
                        var x, A, H, F, B = D ? Object.keys(r).sort() : r, N = {};
                        t = k(n);
                        var U, V, J = !1;
                        for (Q = {}, F = 0; H = B.length, H > F; F++) x = F, D && (x = B[F], "$" === x.charAt(0)) || (A = r[x], 
                        d = h(I, x, A) || "", (l = a[d]) || (l = a[d] = [], c.push(d)), d = t(x, A), J = J || d, 
                        A = h(C, x, A), A = y(A) ? A : "", V = M ? M(e, S) : D ? B[F] : F, M && (Q[V] = x), 
                        l.push({
                            id: V,
                            label: A,
                            selected: d
                        }));
                        for (u || (z || null === n ? a[""].unshift({
                            id: "",
                            label: "",
                            selected: !J
                        }) : J || a[""].unshift({
                            id: "?",
                            label: "",
                            selected: !0
                        })), x = 0, B = c.length; B > x; x++) {
                            for (d = c[x], l = a[d], R.length <= x ? (n = {
                                element: G.clone().attr("label", d),
                                label: l.label
                            }, r = [ n ], R.push(r), f.append(n.element)) : (r = R[x], n = r[0], n.label != d && n.element.attr("label", n.label = d)), 
                            J = null, F = 0, H = l.length; H > F; F++) d = l[F], (t = r[F + 1]) ? (J = t.element, 
                            t.label !== d.label && (m(N, t.label, !1), m(N, d.label, !0), J.text(t.label = d.label), 
                            J.prop("label", t.label)), t.id !== d.id && J.val(t.id = d.id), J[0].selected !== d.selected && (J.prop("selected", t.selected = d.selected), 
                            Ra && J.prop("selected", t.selected))) : ("" === d.id && z ? U = z : (U = w.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).prop("label", d.label).text(d.label), 
                            r.push(t = {
                                element: U,
                                label: d.label,
                                id: d.id,
                                selected: d.selected
                            }), m(N, d.label, !0), J ? J.after(U) : n.element.append(U), J = U);
                            for (F++; r.length > F; ) d = r.pop(), m(N, d.label, !1), d.element.remove();
                        }
                        for (;R.length > x; ) {
                            for (l = R.pop(), F = 1; F < l.length; ++F) m(N, l[F].label, !1);
                            l[0].element.remove();
                        }
                        s(N, function(a, c) {
                            a > 0 ? q.addOption(c) : 0 > a && q.removeOption(c);
                        });
                    }
                    var n;
                    if (!(n = r.match(d))) throw fg("iexp", r, va(f));
                    var C = c(n[2] || n[1]), x = n[4] || n[6], A = / as /.test(n[0]) && n[1], B = A ? c(A) : null, D = n[5], I = c(n[3] || ""), F = c(n[2] ? n[1] : x), O = c(n[7]), M = n[8] ? c(n[8]) : null, Q = {}, R = [ [ {
                        element: f,
                        label: ""
                    } ] ], S = {};
                    z && (a(z)(e), z.removeClass("ng-scope"), z.remove()), f.empty(), f.on("change", function() {
                        e.$apply(function() {
                            var c, a = O(e) || [];
                            if (u) c = [], s(f.val(), function(d) {
                                d = M ? Q[d] : d, c.push("?" === d ? t : "" === d ? null : h(B ? B : F, d, a[d]));
                            }); else {
                                var d = M ? Q[f.val()] : f.val();
                                c = "?" === d ? t : "" === d ? null : h(B ? B : F, d, a[d]);
                            }
                            g.$setViewValue(c), p();
                        });
                    }), g.$render = p, e.$watchCollection(O, l), e.$watchCollection(function() {
                        var c, a = O(e);
                        if (a && H(a)) {
                            c = Array(a.length);
                            for (var d = 0, f = a.length; f > d; d++) c[d] = h(C, d, a[d]);
                        } else if (a) for (d in c = {}, a) a.hasOwnProperty(d) && (c[d] = h(C, d, a[d]));
                        return c;
                    }, l), u && e.$watchCollection(function() {
                        return g.$modelValue;
                    }, l);
                }
                if (l[1]) {
                    var q = l[0];
                    l = l[1];
                    var p, u = h.multiple, r = h.ngOptions, z = !1, v = !1, w = D(Y.createElement("option")), G = D(Y.createElement("optgroup")), C = w.clone();
                    h = 0;
                    for (var A = g.children(), x = A.length; x > h; h++) if ("" === A[h].value) {
                        p = z = A.eq(h);
                        break;
                    }
                    q.init(l, z, C), u && (l.$isEmpty = function(a) {
                        return !a || 0 === a.length;
                    }), r ? n(e, g, l) : u ? m(e, g, l) : k(e, g, l, q);
                }
            }
        };
    } ], Yd = [ "$interpolate", function(a) {
        var c = {
            addOption: z,
            removeOption: z
        };
        return {
            restrict: "E",
            priority: 100,
            compile: function(d, e) {
                if (B(e.value)) {
                    var f = a(d.text(), !0);
                    f || e.$set("value", d.text());
                }
                return function(a, d, e) {
                    var k = d.parent(), m = k.data("$selectController") || k.parent().data("$selectController");
                    m && m.databound || (m = c), f ? a.$watch(f, function(a, c) {
                        e.$set("value", a), c !== a && m.removeOption(c), m.addOption(a, d);
                    }) : m.addOption(e.value, d), d.on("$destroy", function() {
                        m.removeOption(e.value);
                    });
                };
            }
        };
    } ], Xd = ea({
        restrict: "E",
        terminal: !1
    }), Ac = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, c, d, e) {
                e && (d.required = !0, e.$validators.required = function(a, c) {
                    return !d.required || !e.$isEmpty(c);
                }, d.$observe("required", function() {
                    e.$validate();
                }));
            }
        };
    }, zc = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, c, d, e) {
                if (e) {
                    var f, g = d.ngPattern || d.pattern;
                    d.$observe("pattern", function(a) {
                        if (F(a) && 0 < a.length && (a = new RegExp("^" + a + "$")), a && !a.test) throw S("ngPattern")("noregexp", g, a, va(c));
                        f = a || t, e.$validate();
                    }), e.$validators.pattern = function(a) {
                        return e.$isEmpty(a) || B(f) || f.test(a);
                    };
                }
            }
        };
    }, Cc = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, c, d, e) {
                if (e) {
                    var f = -1;
                    d.$observe("maxlength", function(a) {
                        a = ba(a), f = isNaN(a) ? -1 : a, e.$validate();
                    }), e.$validators.maxlength = function(a, c) {
                        return 0 > f || e.$isEmpty(c) || c.length <= f;
                    };
                }
            }
        };
    }, Bc = function() {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(a, c, d, e) {
                if (e) {
                    var f = 0;
                    d.$observe("minlength", function(a) {
                        f = ba(a) || 0, e.$validate();
                    }), e.$validators.minlength = function(a, c) {
                        return e.$isEmpty(c) || c.length >= f;
                    };
                }
            }
        };
    };
    M.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (Nd(), 
    Pd(ca), D(Y).ready(function() {
        Jd(Y, tc);
    }));
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'), 
function(N, f, W) {
    "use strict";
    f.module("ngAnimate", [ "ng" ]).directive("ngAnimateChildren", function() {
        return function(X, C, g) {
            g = g.ngAnimateChildren, f.isString(g) && 0 === g.length ? C.data("$$ngAnimateChildren", !0) : X.$watch(g, function(f) {
                C.data("$$ngAnimateChildren", !!f);
            });
        };
    }).factory("$$animateReflow", [ "$$rAF", "$document", function(f) {
        return function(g) {
            return f(function() {
                g();
            });
        };
    } ]).config([ "$provide", "$animateProvider", function(X, C) {
        function g(f) {
            for (var n = 0; n < f.length; n++) {
                var g = f[n];
                if (1 == g.nodeType) return g;
            }
        }
        function ba(f, n) {
            return g(f) == g(n);
        }
        var u, t = f.noop, n = f.forEach, da = C.$$selectors, aa = f.isArray, ea = f.isString, ga = f.isObject, r = {
            running: !0
        };
        X.decorator("$animate", [ "$delegate", "$$q", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", "$templateRequest", "$$jqLite", function(O, N, M, Y, y, H, P, W, Z, Q) {
            function R(a, c) {
                var b = a.data("$$ngAnimateState") || {};
                return c && (b.running = !0, b.structural = !0, a.data("$$ngAnimateState", b)), 
                b.disabled || b.running && b.structural;
            }
            function D(a) {
                var c, b = N.defer();
                return b.promise.$$cancelFn = function() {
                    c && c();
                }, P.$$postDigest(function() {
                    c = a(function() {
                        b.resolve();
                    });
                }), b.promise;
            }
            function I(a) {
                return ga(a) ? (a.tempClasses && ea(a.tempClasses) && (a.tempClasses = a.tempClasses.split(/\s+/)), 
                a) : void 0;
            }
            function S(a, c, b) {
                b = b || {};
                var d = {};
                n(b, function(e, a) {
                    n(a.split(" "), function(a) {
                        d[a] = e;
                    });
                });
                var h = Object.create(null);
                n((a.attr("class") || "").split(/\s+/), function(e) {
                    h[e] = !0;
                });
                var f = [], l = [];
                return n(c && c.classes || [], function(e, a) {
                    var b = h[a], c = d[a] || {};
                    !1 === e ? (b || "addClass" == c.event) && l.push(a) : !0 === e && (b && "removeClass" != c.event || f.push(a));
                }), 0 < f.length + l.length && [ f.join(" "), l.join(" ") ];
            }
            function T(a) {
                if (a) {
                    var c = [], b = {};
                    a = a.substr(1).split("."), (Y.transitions || Y.animations) && c.push(M.get(da[""]));
                    for (var d = 0; d < a.length; d++) {
                        var f = a[d], k = da[f];
                        k && !b[f] && (c.push(M.get(k)), b[f] = !0);
                    }
                    return c;
                }
            }
            function U(a, c, b, d) {
                function h(e, a) {
                    var b = e[a], c = e["before" + a.charAt(0).toUpperCase() + a.substr(1)];
                    return b || c ? ("leave" == a && (c = b, b = null), u.push({
                        event: a,
                        fn: b
                    }), J.push({
                        event: a,
                        fn: c
                    }), !0) : void 0;
                }
                function k(c, l, w) {
                    var E = [];
                    n(c, function(a) {
                        a.fn && E.push(a);
                    });
                    var m = 0;
                    n(E, function(c, f) {
                        var p = function() {
                            a: {
                                if (l) {
                                    if ((l[f] || t)(), ++m < E.length) break a;
                                    l = null;
                                }
                                w();
                            }
                        };
                        switch (c.event) {
                          case "setClass":
                            l.push(c.fn(a, e, A, p, d));
                            break;

                          case "animate":
                            l.push(c.fn(a, b, d.from, d.to, p));
                            break;

                          case "addClass":
                            l.push(c.fn(a, e || b, p, d));
                            break;

                          case "removeClass":
                            l.push(c.fn(a, A || b, p, d));
                            break;

                          default:
                            l.push(c.fn(a, p, d));
                        }
                    }), l && 0 === l.length && w();
                }
                var l = a[0];
                if (l) {
                    d && (d.to = d.to || {}, d.from = d.from || {});
                    var e, A;
                    aa(b) && (e = b[0], A = b[1], e ? A ? b = e + " " + A : (b = e, c = "addClass") : (b = A, 
                    c = "removeClass"));
                    var w = "setClass" == c, E = w || "addClass" == c || "removeClass" == c || "animate" == c, p = a.attr("class") + " " + b;
                    if (x(p)) {
                        var ca = t, m = [], J = [], g = t, s = [], u = [], p = (" " + p).replace(/\s+/g, ".");
                        return n(T(p), function(a) {
                            !h(a, c) && w && (h(a, "addClass"), h(a, "removeClass"));
                        }), {
                            node: l,
                            event: c,
                            className: b,
                            isClassBased: E,
                            isSetClassOperation: w,
                            applyStyles: function() {
                                d && a.css(f.extend(d.from || {}, d.to || {}));
                            },
                            before: function(a) {
                                ca = a, k(J, m, function() {
                                    ca = t, a();
                                });
                            },
                            after: function(a) {
                                g = a, k(u, s, function() {
                                    g = t, a();
                                });
                            },
                            cancel: function() {
                                m && (n(m, function(a) {
                                    (a || t)(!0);
                                }), ca(!0)), s && (n(s, function(a) {
                                    (a || t)(!0);
                                }), g(!0));
                            }
                        };
                    }
                }
            }
            function G(a, c, b, d, h, k, l, e) {
                function A(e) {
                    var l = "$animate:" + e;
                    J && J[l] && 0 < J[l].length && H(function() {
                        b.triggerHandler(l, {
                            event: a,
                            className: c
                        });
                    });
                }
                function w() {
                    A("before");
                }
                function E() {
                    A("after");
                }
                function p() {
                    p.hasBeenRun || (p.hasBeenRun = !0, k());
                }
                function g() {
                    if (!g.hasBeenRun) {
                        m && m.applyStyles(), g.hasBeenRun = !0, l && l.tempClasses && n(l.tempClasses, function(a) {
                            u.removeClass(b, a);
                        });
                        var w = b.data("$$ngAnimateState");
                        w && (m && m.isClassBased ? B(b, c) : (H(function() {
                            var e = b.data("$$ngAnimateState") || {};
                            fa == e.index && B(b, c, a);
                        }), b.data("$$ngAnimateState", w))), A("close"), e();
                    }
                }
                var m = U(b, a, c, l);
                if (!m) return p(), w(), E(), g(), t;
                a = m.event, c = m.className;
                var J = f.element._data(m.node), J = J && J.events;
                if (d || (d = h ? h.parent() : b.parent()), z(b, d)) return p(), w(), E(), g(), 
                t;
                d = b.data("$$ngAnimateState") || {};
                var L = d.active || {}, s = d.totalActive || 0, q = d.last;
                if (h = !1, s > 0) {
                    if (s = [], m.isClassBased) "setClass" == q.event ? (s.push(q), B(b, c)) : L[c] && (v = L[c], 
                    v.event == a ? h = !0 : (s.push(v), B(b, c))); else if ("leave" == a && L["ng-leave"]) h = !0; else {
                        for (var v in L) s.push(L[v]);
                        d = {}, B(b, !0);
                    }
                    0 < s.length && n(s, function(a) {
                        a.cancel();
                    });
                }
                if (!m.isClassBased || m.isSetClassOperation || "animate" == a || h || (h = "addClass" == a == b.hasClass(c)), 
                h) return p(), w(), E(), A("close"), e(), t;
                L = d.active || {}, s = d.totalActive || 0, "leave" == a && b.one("$destroy", function(a) {
                    a = f.element(this);
                    var e = a.data("$$ngAnimateState");
                    e && (e = e.active["ng-leave"]) && (e.cancel(), B(a, "ng-leave"));
                }), u.addClass(b, "ng-animate"), l && l.tempClasses && n(l.tempClasses, function(a) {
                    u.addClass(b, a);
                });
                var fa = K++;
                return s++, L[c] = m, b.data("$$ngAnimateState", {
                    last: m,
                    active: L,
                    index: fa,
                    totalActive: s
                }), w(), m.before(function(e) {
                    var l = b.data("$$ngAnimateState");
                    e = e || !l || !l.active[c] || m.isClassBased && l.active[c].event != a, p(), !0 === e ? g() : (E(), 
                    m.after(g));
                }), m.cancel;
            }
            function q(a) {
                (a = g(a)) && (a = f.isFunction(a.getElementsByClassName) ? a.getElementsByClassName("ng-animate") : a.querySelectorAll(".ng-animate"), 
                n(a, function(a) {
                    a = f.element(a), (a = a.data("$$ngAnimateState")) && a.active && n(a.active, function(a) {
                        a.cancel();
                    });
                }));
            }
            function B(a, c) {
                if (ba(a, y)) r.disabled || (r.running = !1, r.structural = !1); else if (c) {
                    var b = a.data("$$ngAnimateState") || {}, d = !0 === c;
                    !d && b.active && b.active[c] && (b.totalActive--, delete b.active[c]), (d || !b.totalActive) && (u.removeClass(a, "ng-animate"), 
                    a.removeData("$$ngAnimateState"));
                }
            }
            function z(a, c) {
                if (r.disabled) return !0;
                if (ba(a, y)) return r.running;
                var b, d, g;
                do {
                    if (0 === c.length) break;
                    var k = ba(c, y), l = k ? r : c.data("$$ngAnimateState") || {};
                    if (l.disabled) return !0;
                    k && (g = !0), !1 !== b && (k = c.data("$$ngAnimateChildren"), f.isDefined(k) && (b = k)), 
                    d = d || l.running || l.last && !l.last.isClassBased;
                } while (c = c.parent());
                return !g || !b && d;
            }
            u = Q, y.data("$$ngAnimateState", r);
            var $ = P.$watch(function() {
                return Z.totalPendingRequests;
            }, function(a) {
                0 === a && ($(), P.$$postDigest(function() {
                    P.$$postDigest(function() {
                        r.running = !1;
                    });
                }));
            }), K = 0, V = C.classNameFilter(), x = V ? function(a) {
                return V.test(a);
            } : function() {
                return !0;
            };
            return {
                animate: function(a, c, b, d, h) {
                    return d = d || "ng-inline-animate", h = I(h) || {}, h.from = b ? c : null, h.to = b ? b : c, 
                    D(function(b) {
                        return G("animate", d, f.element(g(a)), null, null, t, h, b);
                    });
                },
                enter: function(a, c, b, d) {
                    return d = I(d), a = f.element(a), c = c && f.element(c), b = b && f.element(b), 
                    R(a, !0), O.enter(a, c, b), D(function(h) {
                        return G("enter", "ng-enter", f.element(g(a)), c, b, t, d, h);
                    });
                },
                leave: function(a, c) {
                    return c = I(c), a = f.element(a), q(a), R(a, !0), D(function(b) {
                        return G("leave", "ng-leave", f.element(g(a)), null, null, function() {
                            O.leave(a);
                        }, c, b);
                    });
                },
                move: function(a, c, b, d) {
                    return d = I(d), a = f.element(a), c = c && f.element(c), b = b && f.element(b), 
                    q(a), R(a, !0), O.move(a, c, b), D(function(h) {
                        return G("move", "ng-move", f.element(g(a)), c, b, t, d, h);
                    });
                },
                addClass: function(a, c, b) {
                    return this.setClass(a, c, [], b);
                },
                removeClass: function(a, c, b) {
                    return this.setClass(a, [], c, b);
                },
                setClass: function(a, c, b, d) {
                    if (d = I(d), a = f.element(a), a = f.element(g(a)), R(a)) return O.$$setClassImmediately(a, c, b, d);
                    var h, k = a.data("$$animateClasses"), l = !!k;
                    return k || (k = {
                        classes: {}
                    }), h = k.classes, c = aa(c) ? c : c.split(" "), n(c, function(a) {
                        a && a.length && (h[a] = !0);
                    }), b = aa(b) ? b : b.split(" "), n(b, function(a) {
                        a && a.length && (h[a] = !1);
                    }), l ? (d && k.options && (k.options = f.extend(k.options || {}, d)), k.promise) : (a.data("$$animateClasses", k = {
                        classes: h,
                        options: d
                    }), k.promise = D(function(e) {
                        var l = a.parent(), b = g(a), c = b.parentNode;
                        if (c && !c.$$NG_REMOVED && !b.$$NG_REMOVED) {
                            b = a.data("$$animateClasses"), a.removeData("$$animateClasses");
                            var c = a.data("$$ngAnimateState") || {}, d = S(a, b, c.active);
                            return d ? G("setClass", d, a, l, null, function() {
                                d[0] && O.$$addClassImmediately(a, d[0]), d[1] && O.$$removeClassImmediately(a, d[1]);
                            }, b.options, e) : e();
                        }
                        e();
                    }));
                },
                cancel: function(a) {
                    a.$$cancelFn();
                },
                enabled: function(a, c) {
                    switch (arguments.length) {
                      case 2:
                        if (a) B(c); else {
                            var b = c.data("$$ngAnimateState") || {};
                            b.disabled = !0, c.data("$$ngAnimateState", b);
                        }
                        break;

                      case 1:
                        r.disabled = !a;
                        break;

                      default:
                        a = !r.disabled;
                    }
                    return !!a;
                }
            };
        } ]), C.register("", [ "$window", "$sniffer", "$timeout", "$$animateReflow", function(r, C, M, Y) {
            function y() {
                b || (b = Y(function() {
                    c = [], b = null, x = {};
                }));
            }
            function H(a, e) {
                b && b(), c.push(e), b = Y(function() {
                    n(c, function(a) {
                        a();
                    }), c = [], b = null, x = {};
                });
            }
            function P(a, e) {
                var b = g(a);
                a = f.element(b), k.push(a), b = Date.now() + e, h >= b || (M.cancel(d), h = b, 
                d = M(function() {
                    X(k), k = [];
                }, e, !1));
            }
            function X(a) {
                n(a, function(a) {
                    (a = a.data("$$ngAnimateCSS3Data")) && n(a.closeAnimationFns, function(a) {
                        a();
                    });
                });
            }
            function Z(a, e) {
                var b = e ? x[e] : null;
                if (!b) {
                    var c = 0, d = 0, f = 0, g = 0;
                    n(a, function(a) {
                        if (1 == a.nodeType) {
                            a = r.getComputedStyle(a) || {}, c = Math.max(Q(a[z + "Duration"]), c), d = Math.max(Q(a[z + "Delay"]), d), 
                            g = Math.max(Q(a[K + "Delay"]), g);
                            var e = Q(a[K + "Duration"]);
                            e > 0 && (e *= parseInt(a[K + "IterationCount"], 10) || 1), f = Math.max(e, f);
                        }
                    }), b = {
                        total: 0,
                        transitionDelay: d,
                        transitionDuration: c,
                        animationDelay: g,
                        animationDuration: f
                    }, e && (x[e] = b);
                }
                return b;
            }
            function Q(a) {
                var e = 0;
                return a = ea(a) ? a.split(/\s*,\s*/) : [], n(a, function(a) {
                    e = Math.max(parseFloat(a) || 0, e);
                }), e;
            }
            function R(b, e, c, d) {
                b = 0 <= [ "ng-enter", "ng-leave", "ng-move" ].indexOf(c);
                var f, p = e.parent(), h = p.data("$$ngAnimateKey");
                h || (p.data("$$ngAnimateKey", ++a), h = a), f = h + "-" + g(e).getAttribute("class");
                var p = f + " " + c, h = x[p] ? ++x[p].total : 0, m = {};
                if (h > 0) {
                    var n = c + "-stagger", m = f + " " + n;
                    (f = !x[m]) && u.addClass(e, n), m = Z(e, m), f && u.removeClass(e, n);
                }
                u.addClass(e, c);
                var n = e.data("$$ngAnimateCSS3Data") || {}, k = Z(e, p);
                return f = k.transitionDuration, k = k.animationDuration, b && 0 === f && 0 === k ? (u.removeClass(e, c), 
                !1) : (c = d || b && f > 0, b = k > 0 && 0 < m.animationDelay && 0 === m.animationDuration, 
                e.data("$$ngAnimateCSS3Data", {
                    stagger: m,
                    cacheKey: p,
                    running: n.running || 0,
                    itemIndex: h,
                    blockTransition: c,
                    closeAnimationFns: n.closeAnimationFns || []
                }), p = g(e), c && (I(p, !0), d && e.css(d)), b && (p.style[K + "PlayState"] = "paused"), 
                !0);
            }
            function D(a, e, b, c, d) {
                function f() {
                    e.off(D, h), u.removeClass(e, k), u.removeClass(e, t), z && M.cancel(z), G(e, b);
                    var c, a = g(e);
                    for (c in s) a.style.removeProperty(s[c]);
                }
                function h(a) {
                    a.stopPropagation();
                    var b = a.originalEvent || a;
                    a = b.$manualTimeStamp || b.timeStamp || Date.now(), b = parseFloat(b.elapsedTime.toFixed(3)), 
                    Math.max(a - H, 0) >= C && b >= x && c();
                }
                var m = g(e);
                if (a = e.data("$$ngAnimateCSS3Data"), -1 != m.getAttribute("class").indexOf(b) && a) {
                    var k = "", t = "";
                    n(b.split(" "), function(a, b) {
                        var e = (b > 0 ? " " : "") + a;
                        k += e + "-active", t += e + "-pending";
                    });
                    var s = [], q = a.itemIndex, v = a.stagger, r = 0;
                    if (q > 0) {
                        r = 0, 0 < v.transitionDelay && 0 === v.transitionDuration && (r = v.transitionDelay * q);
                        var y = 0;
                        0 < v.animationDelay && 0 === v.animationDuration && (y = v.animationDelay * q, 
                        s.push(B + "animation-play-state")), r = Math.round(100 * Math.max(r, y)) / 100;
                    }
                    r || (u.addClass(e, k), a.blockTransition && I(m, !1));
                    var F = Z(e, a.cacheKey + " " + k), x = Math.max(F.transitionDuration, F.animationDuration);
                    if (0 !== x) {
                        !r && d && 0 < Object.keys(d).length && (F.transitionDuration || (e.css("transition", F.animationDuration + "s linear all"), 
                        s.push("transition")), e.css(d));
                        var q = Math.max(F.transitionDelay, F.animationDelay), C = 1e3 * q;
                        0 < s.length && (v = m.getAttribute("style") || "", ";" !== v.charAt(v.length - 1) && (v += ";"), 
                        m.setAttribute("style", v + " "));
                        var z, H = Date.now(), D = V + " " + $, q = 1e3 * (r + 1.5 * (q + x));
                        return r > 0 && (u.addClass(e, t), z = M(function() {
                            z = null, 0 < F.transitionDuration && I(m, !1), 0 < F.animationDuration && (m.style[K + "PlayState"] = ""), 
                            u.addClass(e, k), u.removeClass(e, t), d && (0 === F.transitionDuration && e.css("transition", F.animationDuration + "s linear all"), 
                            e.css(d), s.push("transition"));
                        }, 1e3 * r, !1)), e.on(D, h), a.closeAnimationFns.push(function() {
                            f(), c();
                        }), a.running++, P(e, q), f;
                    }
                    u.removeClass(e, k), G(e, b), c();
                } else c();
            }
            function I(a, b) {
                a.style[z + "Property"] = b ? "none" : "";
            }
            function S(a, b, c, d) {
                return R(a, b, c, d) ? function(a) {
                    a && G(b, c);
                } : void 0;
            }
            function T(a, b, c, d, f) {
                return b.data("$$ngAnimateCSS3Data") ? D(a, b, c, d, f) : (G(b, c), void d());
            }
            function U(a, b, c, d, f) {
                var g = S(a, b, c, f.from);
                if (g) {
                    var h = g;
                    return H(b, function() {
                        h = T(a, b, c, d, f.to);
                    }), function(a) {
                        (h || t)(a);
                    };
                }
                y(), d();
            }
            function G(a, b) {
                u.removeClass(a, b);
                var c = a.data("$$ngAnimateCSS3Data");
                c && (c.running && c.running--, c.running && 0 !== c.running || a.removeData("$$ngAnimateCSS3Data"));
            }
            function q(a, b) {
                var c = "";
                return a = aa(a) ? a : a.split(/\s+/), n(a, function(a, d) {
                    a && 0 < a.length && (c += (d > 0 ? " " : "") + a + b);
                }), c;
            }
            var z, $, K, V, B = "";
            N.ontransitionend === W && N.onwebkittransitionend !== W ? (B = "-webkit-", z = "WebkitTransition", 
            $ = "webkitTransitionEnd transitionend") : (z = "transition", $ = "transitionend"), 
            N.onanimationend === W && N.onwebkitanimationend !== W ? (B = "-webkit-", K = "WebkitAnimation", 
            V = "webkitAnimationEnd animationend") : (K = "animation", V = "animationend");
            var b, x = {}, a = 0, c = [], d = null, h = 0, k = [];
            return {
                animate: function(a, b, c, d, f, g) {
                    return g = g || {}, g.from = c, g.to = d, U("animate", a, b, f, g);
                },
                enter: function(a, b, c) {
                    return c = c || {}, U("enter", a, "ng-enter", b, c);
                },
                leave: function(a, b, c) {
                    return c = c || {}, U("leave", a, "ng-leave", b, c);
                },
                move: function(a, b, c) {
                    return c = c || {}, U("move", a, "ng-move", b, c);
                },
                beforeSetClass: function(a, b, c, d, f) {
                    return f = f || {}, b = q(c, "-remove") + " " + q(b, "-add"), (f = S("setClass", a, b, f.from)) ? (H(a, d), 
                    f) : (y(), void d());
                },
                beforeAddClass: function(a, b, c, d) {
                    return d = d || {}, (b = S("addClass", a, q(b, "-add"), d.from)) ? (H(a, c), b) : (y(), 
                    void c());
                },
                beforeRemoveClass: function(a, b, c, d) {
                    return d = d || {}, (b = S("removeClass", a, q(b, "-remove"), d.from)) ? (H(a, c), 
                    b) : (y(), void c());
                },
                setClass: function(a, b, c, d, f) {
                    return f = f || {}, c = q(c, "-remove"), b = q(b, "-add"), T("setClass", a, c + " " + b, d, f.to);
                },
                addClass: function(a, b, c, d) {
                    return d = d || {}, T("addClass", a, q(b, "-add"), c, d.to);
                },
                removeClass: function(a, b, c, d) {
                    return d = d || {}, T("removeClass", a, q(b, "-remove"), c, d.to);
                }
            };
        } ]);
    } ]);
}(window, window.angular), function(q, d) {
    "use strict";
    function v(r, k, h) {
        return {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            link: function(a, f, b, c, y) {
                function z() {
                    l && (h.cancel(l), l = null), m && (m.$destroy(), m = null), n && (l = h.leave(n), 
                    l.then(function() {
                        l = null;
                    }), n = null);
                }
                function x() {
                    var b = r.current && r.current.locals;
                    if (d.isDefined(b && b.$template)) {
                        var b = a.$new(), c = r.current;
                        n = y(b, function(b) {
                            h.enter(b, null, n || f).then(function() {
                                !d.isDefined(t) || t && !a.$eval(t) || k();
                            }), z();
                        }), m = c.scope = b, m.$emit("$viewContentLoaded"), m.$eval(w);
                    } else z();
                }
                var m, n, l, t = b.autoscroll, w = b.onload || "";
                a.$on("$routeChangeSuccess", x), x();
            }
        };
    }
    function A(d, k, h) {
        return {
            restrict: "ECA",
            priority: -400,
            link: function(a, f) {
                var b = h.current, c = b.locals;
                f.html(c.$template);
                var y = d(f.contents());
                b.controller && (c.$scope = a, c = k(b.controller, c), b.controllerAs && (a[b.controllerAs] = c), 
                f.data("$ngControllerController", c), f.children().data("$ngControllerController", c)), 
                y(a);
            }
        };
    }
    q = d.module("ngRoute", [ "ng" ]).provider("$route", function() {
        function r(a, f) {
            return d.extend(Object.create(a), f);
        }
        function k(a, d) {
            var b = d.caseInsensitiveMatch, c = {
                originalPath: a,
                regexp: a
            }, h = c.keys = [];
            return a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function(a, d, b, c) {
                return a = "?" === c ? c : null, c = "*" === c ? c : null, h.push({
                    name: b,
                    optional: !!a
                }), d = d || "", "" + (a ? "" : d) + "(?:" + (a ? d : "") + (c && "(.+?)" || "([^/]+)") + (a || "") + ")" + (a || "");
            }).replace(/([\/$\*])/g, "\\$1"), c.regexp = new RegExp("^" + a + "$", b ? "i" : ""), 
            c;
        }
        var h = {};
        this.when = function(a, f) {
            var b = d.copy(f);
            if (d.isUndefined(b.reloadOnSearch) && (b.reloadOnSearch = !0), d.isUndefined(b.caseInsensitiveMatch) && (b.caseInsensitiveMatch = this.caseInsensitiveMatch), 
            h[a] = d.extend(b, a && k(a, b)), a) {
                var c = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                h[c] = d.extend({
                    redirectTo: a
                }, k(c, b));
            }
            return this;
        }, this.caseInsensitiveMatch = !1, this.otherwise = function(a) {
            return "string" == typeof a && (a = {
                redirectTo: a
            }), this.when(null, a), this;
        }, this.$get = [ "$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function(a, f, b, c, k, q, x) {
            function m(b) {
                var e = s.current;
                (v = (p = l()) && e && p.$$route === e.$$route && d.equals(p.pathParams, e.pathParams) && !p.reloadOnSearch && !w) || !e && !p || a.$broadcast("$routeChangeStart", p, e).defaultPrevented && b && b.preventDefault();
            }
            function n() {
                var u = s.current, e = p;
                v ? (u.params = e.params, d.copy(u.params, b), a.$broadcast("$routeUpdate", u)) : (e || u) && (w = !1, 
                (s.current = e) && e.redirectTo && (d.isString(e.redirectTo) ? f.path(t(e.redirectTo, e.params)).search(e.params).replace() : f.url(e.redirectTo(e.pathParams, f.path(), f.search())).replace()), 
                c.when(e).then(function() {
                    if (e) {
                        var b, g, a = d.extend({}, e.resolve);
                        return d.forEach(a, function(b, e) {
                            a[e] = d.isString(b) ? k.get(b) : k.invoke(b, null, null, e);
                        }), d.isDefined(b = e.template) ? d.isFunction(b) && (b = b(e.params)) : d.isDefined(g = e.templateUrl) && (d.isFunction(g) && (g = g(e.params)), 
                        g = x.getTrustedResourceUrl(g), d.isDefined(g) && (e.loadedTemplateUrl = g, b = q(g))), 
                        d.isDefined(b) && (a.$template = b), c.all(a);
                    }
                }).then(function(c) {
                    e == s.current && (e && (e.locals = c, d.copy(e.params, b)), a.$broadcast("$routeChangeSuccess", e, u));
                }, function(b) {
                    e == s.current && a.$broadcast("$routeChangeError", e, u, b);
                }));
            }
            function l() {
                var a, b;
                return d.forEach(h, function(c) {
                    var g;
                    if (g = !b) {
                        var k = f.path();
                        g = c.keys;
                        var m = {};
                        if (c.regexp) if (k = c.regexp.exec(k)) {
                            for (var l = 1, n = k.length; n > l; ++l) {
                                var p = g[l - 1], q = k[l];
                                p && q && (m[p.name] = q);
                            }
                            g = m;
                        } else g = null; else g = null;
                        g = a = g;
                    }
                    g && (b = r(c, {
                        params: d.extend({}, f.search(), a),
                        pathParams: a
                    }), b.$$route = c);
                }), b || h[null] && r(h[null], {
                    params: {},
                    pathParams: {}
                });
            }
            function t(a, b) {
                var c = [];
                return d.forEach((a || "").split(":"), function(a, d) {
                    if (0 === d) c.push(a); else {
                        var f = a.match(/(\w+)(?:[?*])?(.*)/), h = f[1];
                        c.push(b[h]), c.push(f[2] || ""), delete b[h];
                    }
                }), c.join("");
            }
            var p, v, w = !1, s = {
                routes: h,
                reload: function() {
                    w = !0, a.$evalAsync(function() {
                        m(), n();
                    });
                },
                updateParams: function(a) {
                    if (!this.current || !this.current.$$route) throw B("norout");
                    a = d.extend({}, this.current.params, a), f.path(t(this.current.$$route.originalPath, a)), 
                    f.search(a);
                }
            };
            return a.$on("$locationChangeStart", m), a.$on("$locationChangeSuccess", n), s;
        } ];
    });
    var B = d.$$minErr("ngRoute");
    q.provider("$routeParams", function() {
        this.$get = function() {
            return {};
        };
    }), q.directive("ngView", v), q.directive("ngView", A), v.$inject = [ "$route", "$anchorScroll", "$animate" ], 
    A.$inject = [ "$compile", "$controller", "$route" ];
}(window, window.angular), angular.module("pascalprecht.translate", [ "ng" ]).run([ "$translate", function(a) {
    var b = a.storageKey(), c = a.storage(), d = function() {
        var d = a.preferredLanguage();
        angular.isString(d) ? a.use(d) : c.put(b, a.use());
    };
    c ? c.get(b) ? a.use(c.get(b))["catch"](d) : d() : angular.isString(a.preferredLanguage()) && a.use(a.preferredLanguage());
} ]), angular.module("pascalprecht.translate").provider("$translate", [ "$STORAGE_KEY", "$windowProvider", function(a, b) {
    var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r = {}, s = [], t = a, u = [], v = !1, w = "translate-cloak", x = !1, y = ".", z = 0, A = "2.6.0", B = function() {
        var a, c, d = b.$get().navigator, e = [ "language", "browserLanguage", "systemLanguage", "userLanguage" ];
        if (angular.isArray(d.languages)) for (a = 0; a < d.languages.length; a++) if (c = d.languages[a], 
        c && c.length) return c;
        for (a = 0; a < e.length; a++) if (c = d[e[a]], c && c.length) return c;
        return null;
    };
    B.displayName = "angular-translate/service: getFirstBrowserLanguage";
    var C = function() {
        return (B() || "").split("-").join("_");
    };
    C.displayName = "angular-translate/service: getLocale";
    var D = function(a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return -1;
    }, E = function() {
        return this.replace(/^\s+|\s+$/g, "");
    }, F = function(a) {
        for (var b = [], c = angular.lowercase(a), e = 0, f = s.length; f > e; e++) b.push(angular.lowercase(s[e]));
        if (D(b, c) > -1) return a;
        if (d) {
            var g;
            for (var h in d) {
                var i = !1, j = Object.prototype.hasOwnProperty.call(d, h) && angular.lowercase(h) === angular.lowercase(a);
                if ("*" === h.slice(-1) && (i = h.slice(0, -1) === a.slice(0, h.length - 1)), (j || i) && (g = d[h], 
                D(b, angular.lowercase(g)) > -1)) return g;
            }
        }
        var k = a.split("_");
        return k.length > 1 && D(b, angular.lowercase(k[0])) > -1 ? k[0] : a;
    }, G = function(a, b) {
        if (!a && !b) return r;
        if (a && !b) {
            if (angular.isString(a)) return r[a];
        } else angular.isObject(r[a]) || (r[a] = {}), angular.extend(r[a], H(b));
        return this;
    };
    this.translations = G, this.cloakClassName = function(a) {
        return a ? (w = a, this) : w;
    };
    var H = function(a, b, c, d) {
        var e, f, g, h;
        b || (b = []), c || (c = {});
        for (e in a) Object.prototype.hasOwnProperty.call(a, e) && (h = a[e], angular.isObject(h) ? H(h, b.concat(e), c, e) : (f = b.length ? "" + b.join(y) + y + e : e, 
        b.length && e === d && (g = "" + b.join(y), c[g] = "@:" + f), c[f] = h));
        return c;
    };
    this.addInterpolation = function(a) {
        return u.push(a), this;
    }, this.useMessageFormatInterpolation = function() {
        return this.useInterpolation("$translateMessageFormatInterpolation");
    }, this.useInterpolation = function(a) {
        return l = a, this;
    }, this.useSanitizeValueStrategy = function(a) {
        return v = a, this;
    }, this.preferredLanguage = function(a) {
        return I(a), this;
    };
    var I = function(a) {
        return a && (c = a), c;
    };
    this.translationNotFoundIndicator = function(a) {
        return this.translationNotFoundIndicatorLeft(a), this.translationNotFoundIndicatorRight(a), 
        this;
    }, this.translationNotFoundIndicatorLeft = function(a) {
        return a ? (o = a, this) : o;
    }, this.translationNotFoundIndicatorRight = function(a) {
        return a ? (p = a, this) : p;
    }, this.fallbackLanguage = function(a) {
        return J(a), this;
    };
    var J = function(a) {
        return a ? (angular.isString(a) ? (f = !0, e = [ a ]) : angular.isArray(a) && (f = !1, 
        e = a), angular.isString(c) && D(e, c) < 0 && e.push(c), this) : f ? e[0] : e;
    };
    this.use = function(a) {
        if (a) {
            if (!r[a] && !m) throw new Error("$translateProvider couldn't find translationTable for langKey: '" + a + "'");
            return g = a, this;
        }
        return g;
    };
    var K = function(a) {
        return a ? void (t = a) : j ? j + t : t;
    };
    this.storageKey = K, this.useUrlLoader = function(a, b) {
        return this.useLoader("$translateUrlLoader", angular.extend({
            url: a
        }, b));
    }, this.useStaticFilesLoader = function(a) {
        return this.useLoader("$translateStaticFilesLoader", a);
    }, this.useLoader = function(a, b) {
        return m = a, n = b || {}, this;
    }, this.useLocalStorage = function() {
        return this.useStorage("$translateLocalStorage");
    }, this.useCookieStorage = function() {
        return this.useStorage("$translateCookieStorage");
    }, this.useStorage = function(a) {
        return i = a, this;
    }, this.storagePrefix = function(a) {
        return a ? (j = a, this) : a;
    }, this.useMissingTranslationHandlerLog = function() {
        return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog");
    }, this.useMissingTranslationHandler = function(a) {
        return k = a, this;
    }, this.usePostCompiling = function(a) {
        return x = !!a, this;
    }, this.determinePreferredLanguage = function(a) {
        var b = a && angular.isFunction(a) ? a() : C();
        return c = s.length ? F(b) : b, this;
    }, this.registerAvailableLanguageKeys = function(a, b) {
        return a ? (s = a, b && (d = b), this) : s;
    }, this.useLoaderCache = function(a) {
        return a === !1 ? q = void 0 : a === !0 ? q = !0 : "undefined" == typeof a ? q = "$translationCache" : a && (q = a), 
        this;
    }, this.directivePriority = function(a) {
        return void 0 === a ? z : (z = a, this);
    }, this.$get = [ "$log", "$injector", "$rootScope", "$q", function(a, b, d, j) {
        var s, y, B, C = b.get(l || "$translateDefaultInterpolation"), L = !1, M = {}, N = {}, O = function(a, b, d, f) {
            if (angular.isArray(a)) {
                var h = function(a) {
                    for (var c = {}, e = [], g = function(a) {
                        var e = j.defer(), g = function(b) {
                            c[a] = b, e.resolve([ a, b ]);
                        };
                        return O(a, b, d, f).then(g, g), e.promise;
                    }, h = 0, i = a.length; i > h; h++) e.push(g(a[h]));
                    return j.all(e).then(function() {
                        return c;
                    });
                };
                return h(a);
            }
            var k = j.defer();
            a && (a = E.apply(a));
            var l = function() {
                var a = c ? N[c] : N[g];
                if (y = 0, i && !a) {
                    var b = s.get(t);
                    if (a = N[b], e && e.length) {
                        var d = D(e, b);
                        y = 0 === d ? 1 : 0, D(e, c) < 0 && e.push(c);
                    }
                }
                return a;
            }();
            return l ? l.then(function() {
                $(a, b, d, f).then(k.resolve, k.reject);
            }, k.reject) : $(a, b, d, f).then(k.resolve, k.reject), k.promise;
        }, P = function(a) {
            return o && (a = [ o, a ].join(" ")), p && (a = [ a, p ].join(" ")), a;
        }, Q = function(a) {
            g = a, d.$emit("$translateChangeSuccess", {
                language: a
            }), i && s.put(O.storageKey(), g), C.setLocale(g), angular.forEach(M, function(a, b) {
                M[b].setLocale(g);
            }), d.$emit("$translateChangeEnd", {
                language: a
            });
        }, R = function(a) {
            if (!a) throw "No language key specified for loading.";
            var c = j.defer();
            d.$emit("$translateLoadingStart", {
                language: a
            }), L = !0;
            var e = q;
            "string" == typeof e && (e = b.get(e));
            var f = angular.extend({}, n, {
                key: a,
                $http: angular.extend({}, {
                    cache: e
                }, n.$http)
            });
            return b.get(m)(f).then(function(b) {
                var e = {};
                d.$emit("$translateLoadingSuccess", {
                    language: a
                }), angular.isArray(b) ? angular.forEach(b, function(a) {
                    angular.extend(e, H(a));
                }) : angular.extend(e, H(b)), L = !1, c.resolve({
                    key: a,
                    table: e
                }), d.$emit("$translateLoadingEnd", {
                    language: a
                });
            }, function(a) {
                d.$emit("$translateLoadingError", {
                    language: a
                }), c.reject(a), d.$emit("$translateLoadingEnd", {
                    language: a
                });
            }), c.promise;
        };
        if (i && (s = b.get(i), !s.get || !s.put)) throw new Error("Couldn't use storage '" + i + "', missing get() or put() method!");
        angular.isFunction(C.useSanitizeValueStrategy) && C.useSanitizeValueStrategy(v), 
        u.length && angular.forEach(u, function(a) {
            var d = b.get(a);
            d.setLocale(c || g), angular.isFunction(d.useSanitizeValueStrategy) && d.useSanitizeValueStrategy(v), 
            M[d.getInterpolationIdentifier()] = d;
        });
        var S = function(a) {
            var b = j.defer();
            return Object.prototype.hasOwnProperty.call(r, a) ? b.resolve(r[a]) : N[a] ? N[a].then(function(a) {
                G(a.key, a.table), b.resolve(a.table);
            }, b.reject) : b.reject(), b.promise;
        }, T = function(a, b, c, d) {
            var e = j.defer();
            return S(a).then(function(f) {
                if (Object.prototype.hasOwnProperty.call(f, b)) {
                    d.setLocale(a);
                    var h = f[b];
                    "@:" === h.substr(0, 2) ? T(a, h.substr(2), c, d).then(e.resolve, e.reject) : e.resolve(d.interpolate(f[b], c)), 
                    d.setLocale(g);
                } else e.reject();
            }, e.reject), e.promise;
        }, U = function(a, b, c, d) {
            var e, f = r[a];
            if (f && Object.prototype.hasOwnProperty.call(f, b)) {
                if (d.setLocale(a), e = d.interpolate(f[b], c), "@:" === e.substr(0, 2)) return U(a, e.substr(2), c, d);
                d.setLocale(g);
            }
            return e;
        }, V = function(a) {
            if (k) {
                var c = b.get(k)(a, g);
                return void 0 !== c ? c : a;
            }
            return a;
        }, W = function(a, b, c, d, f) {
            var g = j.defer();
            if (a < e.length) {
                var h = e[a];
                T(h, b, c, d).then(g.resolve, function() {
                    W(a + 1, b, c, d, f).then(g.resolve);
                });
            } else g.resolve(f ? f : V(b));
            return g.promise;
        }, X = function(a, b, c, d) {
            var f;
            if (a < e.length) {
                var g = e[a];
                f = U(g, b, c, d), f || (f = X(a + 1, b, c, d));
            }
            return f;
        }, Y = function(a, b, c, d) {
            return W(B > 0 ? B : y, a, b, c, d);
        }, Z = function(a, b, c) {
            return X(B > 0 ? B : y, a, b, c);
        }, $ = function(a, b, c, d) {
            var f = j.defer(), h = g ? r[g] : r, i = c ? M[c] : C;
            if (h && Object.prototype.hasOwnProperty.call(h, a)) {
                var l = h[a];
                "@:" === l.substr(0, 2) ? O(l.substr(2), b, c, d).then(f.resolve, f.reject) : f.resolve(i.interpolate(l, b));
            } else {
                var m;
                k && !L && (m = V(a)), g && e && e.length ? Y(a, b, i, d).then(function(a) {
                    f.resolve(a);
                }, function(a) {
                    f.reject(P(a));
                }) : k && !L && m ? f.resolve(d ? d : m) : d ? f.resolve(d) : f.reject(P(a));
            }
            return f.promise;
        }, _ = function(a, b, c) {
            var d, f = g ? r[g] : r, h = c ? M[c] : C;
            if (f && Object.prototype.hasOwnProperty.call(f, a)) {
                var i = f[a];
                d = "@:" === i.substr(0, 2) ? _(i.substr(2), b, c) : h.interpolate(i, b);
            } else {
                var j;
                k && !L && (j = V(a)), g && e && e.length ? (y = 0, d = Z(a, b, h)) : d = k && !L && j ? j : P(a);
            }
            return d;
        };
        if (O.preferredLanguage = function(a) {
            return a && I(a), c;
        }, O.cloakClassName = function() {
            return w;
        }, O.fallbackLanguage = function(a) {
            if (void 0 !== a && null !== a) {
                if (J(a), m && e && e.length) for (var b = 0, c = e.length; c > b; b++) N[e[b]] || (N[e[b]] = R(e[b]));
                O.use(O.use());
            }
            return f ? e[0] : e;
        }, O.useFallbackLanguage = function(a) {
            if (void 0 !== a && null !== a) if (a) {
                var b = D(e, a);
                b > -1 && (B = b);
            } else B = 0;
        }, O.proposedLanguage = function() {
            return h;
        }, O.storage = function() {
            return s;
        }, O.use = function(a) {
            if (!a) return g;
            var b = j.defer();
            d.$emit("$translateChangeStart", {
                language: a
            });
            var c = F(a);
            return c && (a = c), r[a] || !m || N[a] ? (b.resolve(a), Q(a)) : (h = a, N[a] = R(a).then(function(c) {
                return G(c.key, c.table), b.resolve(c.key), Q(c.key), h === a && (h = void 0), c;
            }, function(a) {
                h === a && (h = void 0), d.$emit("$translateChangeError", {
                    language: a
                }), b.reject(a), d.$emit("$translateChangeEnd", {
                    language: a
                });
            })), b.promise;
        }, O.storageKey = function() {
            return K();
        }, O.isPostCompilingEnabled = function() {
            return x;
        }, O.refresh = function(a) {
            function b() {
                f.resolve(), d.$emit("$translateRefreshEnd", {
                    language: a
                });
            }
            function c() {
                f.reject(), d.$emit("$translateRefreshEnd", {
                    language: a
                });
            }
            if (!m) throw new Error("Couldn't refresh translation table, no loader registered!");
            var f = j.defer();
            if (d.$emit("$translateRefreshStart", {
                language: a
            }), a) r[a] ? R(a).then(function(c) {
                G(c.key, c.table), a === g && Q(g), b();
            }, c) : c(); else {
                var h = [], i = {};
                if (e && e.length) for (var k = 0, l = e.length; l > k; k++) h.push(R(e[k])), i[e[k]] = !0;
                g && !i[g] && h.push(R(g)), j.all(h).then(function(a) {
                    angular.forEach(a, function(a) {
                        r[a.key] && delete r[a.key], G(a.key, a.table);
                    }), g && Q(g), b();
                });
            }
            return f.promise;
        }, O.instant = function(a, b, d) {
            if (null === a || angular.isUndefined(a)) return a;
            if (angular.isArray(a)) {
                for (var f = {}, h = 0, i = a.length; i > h; h++) f[a[h]] = O.instant(a[h], b, d);
                return f;
            }
            if (angular.isString(a) && a.length < 1) return a;
            a && (a = E.apply(a));
            var j, l = [];
            c && l.push(c), g && l.push(g), e && e.length && (l = l.concat(e));
            for (var m = 0, n = l.length; n > m; m++) {
                var q = l[m];
                if (r[q] && ("undefined" != typeof r[q][a] ? j = _(a, b, d) : (o || p) && (j = P(a))), 
                "undefined" != typeof j) break;
            }
            return j || "" === j || (j = C.interpolate(a, b), k && !L && (j = V(a))), j;
        }, O.versionInfo = function() {
            return A;
        }, O.loaderCache = function() {
            return q;
        }, O.directivePriority = function() {
            return z;
        }, m && (angular.equals(r, {}) && O.use(O.use()), e && e.length)) for (var ab = function(a) {
            return G(a.key, a.table), d.$emit("$translateChangeEnd", {
                language: a.key
            }), a;
        }, bb = 0, cb = e.length; cb > bb; bb++) N[e[bb]] = R(e[bb]).then(ab);
        return O;
    } ];
} ]), angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation", [ "$interpolate", function(a) {
    var b, c = {}, d = "default", e = null, f = {
        escaped: function(a) {
            var b = {};
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = angular.isNumber(a[c]) ? a[c] : angular.element("<div></div>").text(a[c]).html());
            return b;
        }
    }, g = function(a) {
        var b;
        return b = angular.isFunction(f[e]) ? f[e](a) : a;
    };
    return c.setLocale = function(a) {
        b = a;
    }, c.getInterpolationIdentifier = function() {
        return d;
    }, c.useSanitizeValueStrategy = function(a) {
        return e = a, this;
    }, c.interpolate = function(b, c) {
        return e && (c = g(c)), a(b)(c || {});
    }, c;
} ]), angular.module("pascalprecht.translate").constant("$STORAGE_KEY", "NG_TRANSLATE_LANG_KEY"), 
angular.module("pascalprecht.translate").directive("translate", [ "$translate", "$q", "$interpolate", "$compile", "$parse", "$rootScope", function(a, b, c, d, e, f) {
    var g = function() {
        return this.replace(/^\s+|\s+$/g, "");
    };
    return {
        restrict: "AE",
        scope: !0,
        priority: a.directivePriority(),
        compile: function(b, h) {
            var i = h.translateValues ? h.translateValues : void 0, j = h.translateInterpolation ? h.translateInterpolation : void 0, k = b[0].outerHTML.match(/translate-value-+/i), l = "^(.*)(" + c.startSymbol() + ".*" + c.endSymbol() + ")(.*)", m = "^(.*)" + c.startSymbol() + "(.*)" + c.endSymbol() + "(.*)";
            return function(b, n, o) {
                b.interpolateParams = {}, b.preText = "", b.postText = "";
                var p = {}, q = function(a) {
                    if (angular.isFunction(q._unwatchOld) && (q._unwatchOld(), q._unwatchOld = void 0), 
                    angular.equals(a, "") || !angular.isDefined(a)) {
                        var d = g.apply(n.text()).match(l);
                        if (angular.isArray(d)) {
                            b.preText = d[1], b.postText = d[3], p.translate = c(d[2])(b.$parent);
                            var e = n.text().match(m);
                            angular.isArray(e) && e[2] && e[2].length && (q._unwatchOld = b.$watch(e[2], function(a) {
                                p.translate = a, w();
                            }));
                        } else p.translate = n.text().replace(/^\s+|\s+$/g, "");
                    } else p.translate = a;
                    w();
                }, r = function(a) {
                    o.$observe(a, function(b) {
                        p[a] = b, w();
                    });
                }, s = !0;
                o.$observe("translate", function(a) {
                    "undefined" == typeof a ? q("") : "" === a && s || (p.translate = a, w()), s = !1;
                });
                for (var t in o) o.hasOwnProperty(t) && "translateAttr" === t.substr(0, 13) && r(t);
                if (o.$observe("translateDefault", function(a) {
                    b.defaultText = a;
                }), i && o.$observe("translateValues", function(a) {
                    a && b.$parent.$watch(function() {
                        angular.extend(b.interpolateParams, e(a)(b.$parent));
                    });
                }), k) {
                    var u = function(a) {
                        o.$observe(a, function(c) {
                            var d = angular.lowercase(a.substr(14, 1)) + a.substr(15);
                            b.interpolateParams[d] = c;
                        });
                    };
                    for (var v in o) Object.prototype.hasOwnProperty.call(o, v) && "translateValue" === v.substr(0, 14) && "translateValues" !== v && u(v);
                }
                var w = function() {
                    for (var a in p) p.hasOwnProperty(a) && x(a, p[a], b, b.interpolateParams, b.defaultText);
                }, x = function(b, c, d, e, f) {
                    c ? a(c, e, j, f).then(function(a) {
                        y(a, d, !0, b);
                    }, function(a) {
                        y(a, d, !1, b);
                    }) : y(c, d, !1, b);
                }, y = function(b, c, e, f) {
                    if ("translate" === f) {
                        e || "undefined" == typeof c.defaultText || (b = c.defaultText), n.html(c.preText + b + c.postText);
                        var g = a.isPostCompilingEnabled(), i = "undefined" != typeof h.translateCompile, j = i && "false" !== h.translateCompile;
                        (g && !i || j) && d(n.contents())(c);
                    } else {
                        e || "undefined" == typeof c.defaultText || (b = c.defaultText);
                        var k = o.$attr[f].substr(15);
                        n.attr(k, b);
                    }
                };
                b.$watch("interpolateParams", w, !0);
                var z = f.$on("$translateChangeSuccess", w);
                n.text().length && q(""), w(), b.$on("$destroy", z);
            };
        }
    };
} ]), angular.module("pascalprecht.translate").directive("translateCloak", [ "$rootScope", "$translate", function(a, b) {
    return {
        compile: function(c) {
            var d = function() {
                c.addClass(b.cloakClassName());
            }, e = function() {
                c.removeClass(b.cloakClassName());
            }, f = a.$on("$translateChangeEnd", function() {
                e(), f(), f = null;
            });
            return d(), function(a, c, f) {
                f.translateCloak && f.translateCloak.length && f.$observe("translateCloak", function(a) {
                    b(a).then(e, d);
                });
            };
        }
    };
} ]), angular.module("pascalprecht.translate").filter("translate", [ "$parse", "$translate", function(a, b) {
    var c = function(c, d, e) {
        return angular.isObject(d) || (d = a(d)(this)), b.instant(c, d, e);
    };
    return c.$stateful = !0, c;
} ]), !function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    function s(a) {
        var b = a.length, c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a);
        }
        return n.grep(a, function(a) {
            return g.call(b, a) >= 0 !== c;
        });
    }
    function D(a, b) {
        for (;(a = a[b]) && 1 !== a.nodeType; ) ;
        return a;
    }
    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), 
        n.ready();
    }
    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        }), this.expando = n.expando + K.uid++;
    }
    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), 
        c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
            } catch (e) {}
            M.set(a, b, c);
        } else c = void 0;
        return c;
    }
    function Z() {
        return !0;
    }
    function $() {
        return !1;
    }
    function _() {
        try {
            return l.activeElement;
        } catch (a) {}
    }
    function jb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function kb(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function lb(a) {
        var b = gb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function mb(a, b) {
        for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
    }
    function nb(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
        }
    }
    function ob(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([ a ], c) : c;
    }
    function pb(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }
    function sb(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f;
    }
    function tb(a) {
        var b = l, c = rb[a];
        return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), 
        b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), 
        c;
    }
    function xb(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), 
        vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, 
        g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }
    function yb(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    function Fb(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length; e--; ) if (b = Eb[e] + c, 
        b in a) return b;
        return d;
    }
    function Gb(a, b, c) {
        var d = Ab.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function Hb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), 
        d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), 
        "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g;
    }
    function Ib(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wb(a), g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function Jb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d), 
        "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function Kb(a, b, c, d, e) {
        return new Kb.prototype.init(a, b, c, d, e);
    }
    function Sb() {
        return setTimeout(function() {
            Lb = void 0;
        }), Lb = n.now();
    }
    function Tb(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function Ub(a, b, c) {
        for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function Vb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, 
        h.empty.fire = function() {
            h.unqueued || i();
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ o.overflow, o.overflowX, o.overflowY ], 
        j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j, 
        "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), 
        c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
        }));
        for (d in b) if (e = b[d], Nb.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d]) continue;
                p = !0;
            }
            m[d] = q && q[d] || n.style(a, d);
        } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j); else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), 
            p ? n(a).show() : l.done(function() {
                n(a).hide();
            }), l.done(function() {
                var b;
                L.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b]);
            });
            for (d in m) g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function Wb(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function Xb(a, b, c) {
        var d, e, f = 0, g = Qb.length, h = n.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Lb || Sb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (Wb(k, j.opts.specialEasing); g > f; f++) if (d = Qb[f].call(j, a, k, j.opts)) return d;
        return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    function qc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c)) for (;d = f[e++]; ) "+" === d[0] ? (d = d.slice(1) || "*", 
            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function rc(a, b, c, d) {
        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                g(j), !1);
            }), i;
        }
        var e = {}, f = a === mc;
        return g(b.dataTypes[0]) || !e["*"] && g("*");
    }
    function sc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a;
    }
    function tc(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; ) i.shift(), 
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function uc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; ) if (a.responseFields[f] && (c[a.responseFields[f]] = b), 
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    function Ac(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || wc.test(a) ? d(a, e) : Ac(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) Ac(a + "[" + e + "]", b[e], c, d);
    }
    function Jc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = "2.1.3", n = function(a, b) {
        return new n.fn.init(a, b);
    }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function(a, b) {
        return b.toUpperCase();
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this);
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a, b) {
            return n.each(this, a, b);
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), 
        h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], 
        d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, 
        f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a);
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
        },
        isPlainObject: function(a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), 
            b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) for (;f > e && (d = b.apply(a[e], c), d !== !1); e++) ; else for (e in a) if (d = b.apply(a[e], c), 
                d === !1) break;
            } else if (g) for (;f > e && (d = b.call(a[e], e, a[e]), d !== !1); e++) ; else for (e in a) if (d = b.call(a[e], e, a[e]), 
            d === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "");
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [ a ] : a) : f.call(c, a)), 
            c;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : g.call(b, a, c);
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h) for (;g > f; f++) d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), 
            null != d && i.push(d);
            return e.apply([], i);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), 
            f = function() {
                return a.apply(b || this, e.concat(d.call(arguments)));
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
        },
        now: Date.now,
        support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
    });
    var t = function(a) {
        function gb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, 
            "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode) return d;
                        if (h.id === j) return d.push(h), d;
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), 
                    d;
                } else {
                    if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), 
                    d;
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        for (o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), 
                        s = "[id='" + s + "'] ", l = o.length; l--; ) o[l] = s + rb(o[l]);
                        w = ab.test(a) && pb(b.parentNode) || b, x = o.join(",");
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d;
                    } catch (y) {} finally {
                        r || b.removeAttribute("id");
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e);
        }
        function hb() {
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }
            var a = [];
            return b;
        }
        function ib(a) {
            return a[u] = !0, a;
        }
        function jb(a) {
            var b = n.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function kb(a, b) {
            for (var c = a.split("|"), e = a.length; e--; ) d.attrHandle[c[e]] = b;
        }
        function lb(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) for (;c = c.nextSibling; ) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function nb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function ob(a) {
            return ib(function(b) {
                return b = +b, ib(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; ) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function pb(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        function qb() {}
        function rb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function sb(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function(b, c, f) {
                for (;b = b[d]; ) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j = [ w, f ];
                if (g) {
                    for (;b = b[d]; ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else for (;b = b[d]; ) if (1 === b.nodeType || e) {
                    if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0;
                }
            };
        }
        function tb(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function ub(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) gb(a, b[d], c);
            return c;
        }
        function vb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
            j && b.push(h));
            return g;
        }
        function wb(a, b, c, d, e, f) {
            return d && !d[u] && (d = wb(d)), e && !e[u] && (e = wb(e, f)), ib(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ub(b || "*", h.nodeType ? [ h ] : h, []), q = !a || !f && b ? p : vb(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) for (j = vb(r, n), d(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [], k = r.length; k--; ) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        for (k = r.length; k--; ) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else r = vb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
            });
        }
        function xb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sb(function(a) {
                return a === b;
            }, h, !0), l = sb(function(a) {
                return J(b, a) > -1;
            }, h, !0), m = [ function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e;
            } ]; f > i; i++) if (c = d.relative[a[i].type]) m = [ sb(tb(m), c) ]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e && !d.relative[a[e].type]; e++) ;
                    return wb(i > 1 && tb(m), i > 1 && rb(a.slice(0, i - 1).concat({
                        value: " " === a[i - 2].type ? "*" : ""
                    })).replace(R, "$1"), c, e > i && xb(a.slice(i, e)), f > e && xb(a = a.slice(e)), f > e && rb(a));
                }
                m.push(c);
            }
            return tb(m);
        }
        function yb(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        for (m = 0; o = a[m++]; ) if (o(l, g, h)) {
                            i.push(l);
                            break;
                        }
                        k && (w = v);
                    }
                    c && ((l = !o && l) && p--, f && r.push(l));
                }
                if (p += q, c && q !== p) {
                    for (m = 0; o = b[m++]; ) o(r, s, g, h);
                    if (f) {
                        if (p > 0) for (;q--; ) r[q] || s[q] || (s[q] = F.call(i));
                        s = vb(s);
                    }
                    H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i);
                }
                return k && (w = v, j = t), r;
            };
            return c ? ib(f) : f;
        }
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date(), v = a.document, w = 0, x = 0, y = hb(), z = hb(), A = hb(), B = function(a, b) {
            return a === b && (l = !0), 0;
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + O),
            PSEUDO: new RegExp("^" + P),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), db = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, eb = function() {
            m();
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
        } catch (fb) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b));
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; ) ;
                    a.length = c - 1;
                }
            };
        }
        c = gb.support = {}, f = gb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, m = gb.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, 
            e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", eb, !1) : e.attachEvent && e.attachEvent("onunload", eb)), 
            p = !f(g), c.attributes = jb(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = jb(function(a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = jb(function(a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [ c ] : [];
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (;c = f[e++]; ) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (jb(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", 
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), 
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), 
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), 
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
            }), jb(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), 
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                q.push(",.*:");
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && jb(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), 
            b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                return !1;
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [ a ], i = [ b ];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return lb(a, b);
                for (c = a; c = c.parentNode; ) h.unshift(c);
                for (c = b; c = c.parentNode; ) i.unshift(c);
                for (;h[d] === i[d]; ) d++;
                return d ? lb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
            }, g) : n;
        }, gb.matches = function(a, b) {
            return gb(a, null, null, b);
        }, gb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return gb(b, n, null, [ a ]).length > 0;
        }, gb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, gb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, gb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, gb.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                for (;b = a[f++]; ) b === a[f] && (e = d.push(f));
                for (;e--; ) a.splice(d[e], 1);
            }
            return k = null, a;
        }, e = gb.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else for (;b = a[d++]; ) c += e(b);
            return c;
        }, d = gb.selectors = {
            cacheLength: 50,
            createPseudo: ib,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || gb.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && gb.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = gb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (;p; ) {
                                    for (l = b; l = l[p]; ) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                for (k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], 
                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); ) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ w, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else for (;(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[u] || (l[u] = {}))[a] = [ w, m ]), 
                            l !== b)); ) ;
                            return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || gb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [ a, a, "", b ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ib(function(a, c) {
                        for (var d, f = e(a, b), g = f.length; g--; ) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
                    }) : function(a) {
                        return e(a, 0, c);
                    }) : e;
                }
            },
            pseudos: {
                not: ib(function(a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? ib(function(a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: ib(function(a) {
                    return function(b) {
                        return gb(a, b).length > 0;
                    };
                }),
                contains: ib(function(a) {
                    return a = a.replace(cb, db), function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }),
                lang: ib(function(a) {
                    return W.test(a || "") || gb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === o;
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !d.pseudos.empty(a);
                },
                header: function(a) {
                    return Z.test(a.nodeName);
                },
                input: function(a) {
                    return Y.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: ob(function() {
                    return [ 0 ];
                }),
                last: ob(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: ob(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: ob(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: ob(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: ob(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: ob(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = mb(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = nb(b);
        return qb.prototype = d.filters = d.pseudos, d.setFilters = new qb(), g = gb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = d.preFilter; h; ) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), 
                f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break;
            }
            return b ? h.length : h ? gb.error(a) : z(a, i).slice(0);
        }, h = gb.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                for (b || (b = g(a)), c = b.length; c--; ) f = xb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, yb(e, d)), f.selector = a;
            }
            return f;
        }, i = gb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }
                for (i = X.needsContext.test(a) ? 0 : j.length; i-- && (k = j[i], !d.relative[l = k.type]); ) if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && pb(b.parentNode) || b))) {
                    if (j.splice(i, 1), a = f.length && rb(j), !a) return H.apply(e, f), e;
                    break;
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && pb(b.parentNode) || b), e;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, 
        m(), c.sortDetached = jb(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"));
        }), jb(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || kb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && jb(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || kb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), jb(function(a) {
            return null == a.getAttribute("disabled");
        }) || kb(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), gb;
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, 
    n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [ d ] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, 
            d;
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0));
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [ null, a, null ] : z.exec(a), 
            !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), 
                v.test(c[1]) && n.isPlainObject(b)) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this;
            }
            return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), 
            this.context = l, this.selector = a, this;
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, 
        this.context = a.context), n.makeArray(a, this));
    };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/, C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; ) if (1 === a.nodeType) {
                if (e && n(a).is(c)) break;
                d.push(a);
            }
            return d;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    }), n.fn.extend({
        has: function(a) {
            var b = n(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
            });
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? n.unique(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    }), n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return n.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c);
        },
        next: function(a) {
            return D(a, "nextSibling");
        },
        prev: function(a) {
            return D(a, "previousSibling");
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return n.sibling(a.firstChild);
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes);
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), 
            this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var E = /\S+/g, F = {};
    n.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
            for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break;
            }
            d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
        }, k = {
            add: function() {
                if (h) {
                    var c = h.length;
                    !function g(b) {
                        n.each(b, function(b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
                        });
                    }(arguments), d ? f = h.length : b && (e = c, j(b));
                }
                return this;
            },
            remove: function() {
                return h && n.each(arguments, function(a, b) {
                    for (var c; (c = n.inArray(b, h, c)) > -1; ) h.splice(c, 1), d && (f >= c && f--, 
                    g >= c && g--);
                }), this;
            },
            has: function(a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
            },
            empty: function() {
                return h = [], f = 0, this;
            },
            disable: function() {
                return h = i = b = void 0, this;
            },
            disabled: function() {
                return !h;
            },
            lock: function() {
                return i = void 0, b || k.disable(), this;
            },
            locked: function() {
                return !i;
            },
            fireWith: function(a, b) {
                return !h || c && !i || (b = b || [], b = [ a, b.slice ? b.slice() : b ], d ? i.push(b) : j(b)), 
                this;
            },
            fire: function() {
                return k.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!c;
            }
        };
        return k;
    }, n.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", n.Callbacks("once memory"), "resolved" ], [ "reject", "fail", n.Callbacks("once memory"), "rejected" ], [ "notify", "progress", n.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var i, j, k, b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                };
            };
            if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise();
        }
    });
    var H;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this;
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0);
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [ n ]), 
            n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
        }
    }), n.ready.promise = function(b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), 
        a.addEventListener("load", I, !1))), H.promise(b);
    }, n.ready.promise();
    var J = n.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) n.access(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), 
        b = null) : (j = b, b = function(a, b, c) {
            return j.call(n(a), c);
        })), b)) for (;i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    };
    n.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    }, K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function(a) {
            if (!K.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b);
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b);
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c;
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b) f[b] = c; else if (n.isEmptyObject(f)) n.extend(this.cache[e], b); else for (d in b) f[d] = b[d];
            return f;
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b];
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), 
            void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b) this.cache[f] = {}; else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [ b, e ] : (d = e, 
                d = d in g ? [ d ] : d.match(E) || [])), c = d.length;
                for (;c--; ) delete g[d[c]];
            }
        },
        hasData: function(a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {});
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]];
        }
    };
    var L = new K(), M = new K(), N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
    n.extend({
        hasData: function(a) {
            return M.hasData(a) || L.hasData(a);
        },
        data: function(a, b, c) {
            return M.access(a, b, c);
        },
        removeData: function(a, b) {
            M.remove(a, b);
        },
        _data: function(a, b, c) {
            return L.access(a, b, c);
        },
        _removeData: function(a, b) {
            L.remove(a, b);
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--; ) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), 
                    P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                M.set(this, a);
            }) : J(this, function(b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c) return c;
                    if (c = M.get(f, d), void 0 !== c) return c;
                    if (c = P(f, d, void 0), void 0 !== c) return c;
                } else this.each(function() {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                M.remove(this, a);
            });
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function() {
                n.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    L.remove(a, [ b + "queue", c ]);
                })
            });
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--; ) c = L.get(f[g], a + "queueHooks"), 
            c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = [ "Top", "Right", "Bottom", "Left" ], S = function(a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
    }, T = /^(?:checkbox|radio)$/i;
    !function() {
        var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), 
        b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), 
            (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
            }), b = (b || "").match(E) || [ "" ], j = b.length; j--; ) h = Y.exec(b[j]) || [], 
            o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, 
            o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                type: o,
                origType: q,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && n.expr.match.needsContext.test(e),
                namespace: p.join(".")
            }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), 
            l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), 
            n.event.global[o] = !0);
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                for (b = (b || "").match(E) || [ "" ], j = b.length; j--; ) if (h = Y.exec(b[j]) || [], 
                o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    for (l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], 
                    h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; ) k = m[f], 
                    !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                    k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), 
                    delete i[o]);
                } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, m, o, p = [ d || l ], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), 
            q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), 
            b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = d), c = null == c ? [ b ] : n.makeArray(c, [ b ]), 
            o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), 
                    h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
                }
                for (f = 0; (g = p[f++]) && !b.isPropagationStopped(); ) b.type = f > 1 ? i : o.bindType || q, 
                m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), 
                m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], 
                h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), 
                b.result;
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = n.event.handlers.call(this, a, j), b = 0; (f = h[b++]) && !a.isPropagationStopped(); ) for (a.currentTarget = f.elem, 
                c = 0; (g = f.handlers[c++]) && !a.isImmediatePropagationStopped(); ) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, 
                a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), 
                void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (;i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [ i ]).length), 
                d[e] && d.push(f);
                d.length && g.push({
                    elem: i,
                    handlers: d
                });
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, 
                d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), 
                a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), 
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
            }
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length; b--; ) c = d[b], 
            a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            g.filter ? g.filter(a, f) : a;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, 
        b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), k.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0);
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
            }
        };
    }), n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this;
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, 
            c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $; else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return n().off(a), f.apply(this, arguments);
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
                n.event.add(this, a, d, c, b);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), 
            this.each(function() {
                n.event.remove(this, a, c, b);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0;
        }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bb = /<([\w:]+)/, cb = /<|&#?\w+;/, db = /<(?:script|style|link)/i, eb = /checked\s*(?:[^=]|=\s*.checked.)/i, fb = /^$|\/(?:java|ecma)script/i, gb = /^true\/(.*)/, hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ib = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, 
    ib.th = ib.td, n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = ob(h), 
            f = ob(a), d = 0, e = f.length; e > d; d++) pb(f[d], g[d]);
            if (b) if (c) for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++) nb(f[d], g[d]); else nb(a, h);
            return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h;
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) if (e = a[m], 
            e || 0 === e) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [ e ] : e); else if (cb.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || [ "", "" ])[1].toLowerCase(), 
                h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], 
                j = h[0]; j--; ) f = f.lastChild;
                n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++]; ) if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), 
            f = ob(k.appendChild(e), "script"), i && mb(f), c)) for (j = 0; e = f[j++]; ) fb.test(e.type || "") && c.push(e);
            return k;
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events) for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e];
                }
                delete M.cache[c[M.expando]];
            }
        }
    }), n.fn.extend({
        text: function(a) {
            return J(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
                });
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(ob(c)), 
            c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));
            return this;
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(ob(a, !1)), 
            a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b);
            });
        },
        html: function(a) {
            return J(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = a.replace(ab, "<$1></$2>");
                    try {
                        for (;d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && eb.test(p)) return this.each(function(c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 
            1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), 
                g && n.merge(f, ob(h, "script"))), b.call(this[j], h, j);
                if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++) h = f[j], 
                fb.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, "")));
            }
            return this;
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), 
            n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var qb, rb = {}, ub = /^margin/, vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wb = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
    };
    !function() {
        function g() {
            f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", 
            f.innerHTML = "", d.appendChild(e);
            var g = a.getComputedStyle(f, null);
            b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e);
        }
        var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
        f.style && (f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", 
        k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", 
        e.appendChild(f), a.getComputedStyle && n.extend(k, {
            pixelPosition: function() {
                return g(), b;
            },
            boxSizingReliable: function() {
                return null == c && g(), c;
            },
            reliableMarginRight: function() {
                var b, c = f.appendChild(l.createElement("div"));
                return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), 
                b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), 
                b;
            }
        }));
    }(), n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
    };
    var zb = /^(none|table(?!-c[ea]).+)/, Ab = new RegExp("^(" + Q + ")(.*)$", "i"), Bb = new RegExp("^([+-])=(" + Q + ")", "i"), Cb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Db = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Eb = [ "Webkit", "O", "Moz", "ms" ];
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = xb(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], 
                void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, 
                "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), 
                f = "number"), void (null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), 
                k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), 
                g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))));
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], 
            g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), 
            "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
        }
    }), n.each([ "height", "width" ], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function() {
                    return Ib(a, b, d);
                }) : Ib(a, b, d) : void 0;
            },
            set: function(a, c, d) {
                var e = d && wb(a);
                return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, xb, [ a, "marginRight" ]) : void 0;
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, ub.test(a) || (n.cssHooks[a + b].set = Gb);
    }), n.fn.extend({
        css: function(a, b) {
            return J(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wb(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function() {
            return Jb(this, !0);
        },
        hide: function() {
            return Jb(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                S(this) ? n(this).show() : n(this).hide();
            });
        }
    }), n.Tween = Kb, Kb.prototype = {
        constructor: Kb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
            this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = Kb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Kb.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = Kb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this;
        }
    }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, n.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    }, n.fx = Kb.prototype.init, n.fx.step = {};
    var Lb, Mb, Nb = /^(?:toggle|show|hide)$/, Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pb = /queueHooks$/, Qb = [ Vb ], Rb = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = Ob.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f && +d) && Ob.exec(n.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
            c;
        } ]
    };
    n.Animation = n.extend(Xb, {
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? Qb.unshift(a) : Qb.push(a);
        }
    }), n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
        }, d;
    }, n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function() {
                var b = Xb(this, n.extend({}, a), f);
                (e || L.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && Pb.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), n.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e);
        };
    }), n.each({
        slideDown: Tb("show"),
        slideUp: Tb("hide"),
        slideToggle: Tb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), n.timers = [], n.fx.tick = function() {
        var a, b = 0, c = n.timers;
        for (Lb = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), Lb = void 0;
    }, n.fx.timer = function(a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }, n.fx.interval = 13, n.fx.start = function() {
        Mb || (Mb = setInterval(n.fx.tick, n.fx.interval));
    }, n.fx.stop = function() {
        clearInterval(Mb), Mb = null;
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function(a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d);
            };
        });
    }, function() {
        var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
        a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, 
        k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", 
        k.radioValue = "t" === a.value;
    }();
    var Yb, Zb, $b = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return J(this, n.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a);
            });
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), 
            d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), 
            null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), 
            c) : void n.removeAttr(a, b)) : void 0;
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType) for (;c = f[e++]; ) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), 
            a.removeAttribute(c);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        }
    }), Zb = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = $b[b] || n.find.attr;
        $b[b] = function(a, b, d) {
            var e, f;
            return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, 
            $b[b] = f), e;
        };
    });
    var _b = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return J(this, n.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a];
            });
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, 
            e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0;
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1;
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        }
    }), n.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        n.propFix[this.toLowerCase()] = this;
    });
    var ac = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, this.className));
            });
            if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
                for (f = 0; e = b[f++]; ) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = n.trim(d), c.className !== g && (c.className = g);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, this.className));
            });
            if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
                for (f = 0; e = b[f++]; ) for (;d.indexOf(" " + e + " ") >= 0; ) d = d.replace(" " + e + " ", " ");
                g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function() {
                if ("string" === c) for (var b, d = 0, e = n(this), f = a.match(E) || []; b = f[d++]; ) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), 
                this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0) return !0;
            return !1;
        }
    });
    var bc = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = n.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                    return null == a ? "" : a + "";
                })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
            })) : e ? (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, 
            "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)) : void 0;
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a));
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = n.makeArray(b), g = e.length; g--; ) d = e[g], 
                    (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), n.each([ "radio", "checkbox" ], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
            }
        }, k.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var cc = n.now(), dc = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "");
    }, n.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser(), b = c.parseFromString(a, "text/xml");
        } catch (d) {
            b = void 0;
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), 
        b;
    };
    var ec = /#.*$/, fc = /([?&])_=[^&]*/, gc = /^(.*?):[ \t]*([^\r\n]*)$/gm, hc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ic = /^(?:GET|HEAD)$/, jc = /^\/\//, kc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, lc = {}, mc = {}, nc = "*/".concat("*"), oc = a.location.href, pc = kc.exec(oc.toLowerCase()) || [];
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: oc,
            type: "GET",
            isLocal: hc.test(pc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? sc(sc(a, n.ajaxSettings), b) : sc(n.ajaxSettings, a);
        },
        ajaxPrefilter: qc(lc),
        ajaxTransport: qc(mc),
        ajax: function(a, b) {
            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, 
                j = a >= 200 && 300 > a || 304 === a, f && (u = tc(k, v, f)), u = uc(k, u, v, j), 
                j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), 
                w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, 
                r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), 
                v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [ r, x, v ]) : o.rejectWith(l, [ v, x, s ]), 
                v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [ v, k, j ? r : s ]), 
                p.fireWith(l, [ v, x ]), i && (m.trigger("ajaxComplete", [ v, k ]), --n.active || n.event.trigger("ajaxStop")));
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!f) for (f = {}; b = gc.exec(e); ) f[b[1].toLowerCase()] = b[2];
                        b = f[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? e : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > t) for (b in a) q[b] = [ q[b], a[b] ]; else v.always(a[v.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || u;
                    return c && c.abort(b), x(0, b), this;
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || oc) + "").replace(ec, "").replace(jc, pc[1] + "//"), 
            k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [ "" ], 
            null == k.crossDomain && (h = kc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pc[1] && h[2] === pc[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pc[3] || ("http:" === pc[1] ? "80" : "443")))), 
            k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), 
            rc(lc, k, b, v), 2 === t) return v;
            i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), 
            k.type = k.type.toUpperCase(), k.hasContent = !ic.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, 
            delete k.data), k.cache === !1 && (k.url = fc.test(d) ? d.replace(fc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), 
            k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), 
            n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), 
            v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nc + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (j in {
                success: 1,
                error: 1,
                complete: 1
            }) v[j](k[j]);
            if (c = rc(mc, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [ v, k ]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout");
                }, k.timeout));
                try {
                    t = 1, c.send(r, x);
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w);
                }
            } else x(-1, "No Transport");
            return v;
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script");
        }
    }), n.each([ "get", "post" ], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            });
        };
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        });
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), 
            b.map(function() {
                for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
                return a;
            }).append(this)), this);
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b));
            } : function() {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
            }).end();
        }
    }), n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a);
    };
    var vc = /%20/g, wc = /\[\]$/, xc = /\r?\n/g, yc = /^(?:submit|button|image|reset|file)$/i, zc = /^(?:input|select|textarea|keygen)/i;
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) Ac(c, a[c], b, e);
        return d.join("&").replace(vc, "+");
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zc.test(this.nodeName) && !yc.test(a) && (this.checked || !T.test(a));
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(xc, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(xc, "\r\n")
                };
            }).get();
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (a) {}
    };
    var Bc = 0, Cc = {}, Dc = {
        0: 200,
        1223: 204
    }, Ec = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Cc) Cc[a]();
    }), k.cors = !!Ec && "withCredentials" in Ec, k.ajax = Ec = !!Ec, n.ajaxTransport(function(a) {
        var b;
        return k.cors || Ec && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(), g = ++Bc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Cc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Dc[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()));
                    };
                }, f.onload = b(), f.onerror = b("error"), b = Cc[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null);
                } catch (h) {
                    if (b) throw h;
                }
            },
            abort: function() {
                b && b();
            }
        } : void 0;
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a;
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
                    }), l.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }
    });
    var Fc = [], Gc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Fc.pop() || n.expando + "_" + cc++;
            return this[a] = !0, a;
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Gc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(Gc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fc.push(e)), g && n.isFunction(f) && f(g[0]), 
            g = f = void 0;
        }), "script") : void 0;
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a), e = !c && [];
        return d ? [ b.createElement(d[1]) ] : (d = n.buildFragment([ a ], b, e), e && e.length && n(e).remove(), 
        n.merge([], d.childNodes));
    };
    var Hc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Hc) return Hc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, 
        b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
        }).complete(c && function(a, b) {
            g.each(c, f || [ a.responseText, b, a ]);
        }), this;
    }, n.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem;
        }).length;
    };
    var Ic = a.document.documentElement;
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), 
            i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), 
            null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b);
            });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            return f ? (b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), 
            c = Jc(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e) : void 0;
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), 
                d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Ic; a && !n.nodeName(a, "html") && "static" === n.css(a, "position"); ) a = a.offsetParent;
                return a || Ic;
            });
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function(e) {
            return J(this, function(b, e, f) {
                var g = Jc(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
            }, b, e, arguments.length, null);
        };
    }), n.each([ "top", "left" ], function(a, b) {
        n.cssHooks[b] = yb(k.pixelPosition, function(a, c) {
            return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + "px" : c) : void 0;
        });
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, 
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), n.fn.size = function() {
        return this.length;
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n;
    });
    var Kc = a.jQuery, Lc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Lc), b && a.jQuery === n && (a.jQuery = Kc), n;
    }, typeof b === U && (a.jQuery = a.$ = n), n;
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(a, b, c, d, e) {
        return jQuery.easing[jQuery.easing.def](a, b, c, d, e);
    },
    easeInQuad: function(a, b, c, d, e) {
        return d * (b /= e) * b + c;
    },
    easeOutQuad: function(a, b, c, d, e) {
        return -d * (b /= e) * (b - 2) + c;
    },
    easeInOutQuad: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c;
    },
    easeInCubic: function(a, b, c, d, e) {
        return d * (b /= e) * b * b + c;
    },
    easeOutCubic: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c;
    },
    easeInOutCubic: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c;
    },
    easeInQuart: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b + c;
    },
    easeOutQuart: function(a, b, c, d, e) {
        return -d * ((b = b / e - 1) * b * b * b - 1) + c;
    },
    easeInOutQuart: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c;
    },
    easeInQuint: function(a, b, c, d, e) {
        return d * (b /= e) * b * b * b * b + c;
    },
    easeOutQuint: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c;
    },
    easeInOutQuint: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c;
    },
    easeInSine: function(a, b, c, d, e) {
        return -d * Math.cos(b / e * (Math.PI / 2)) + d + c;
    },
    easeOutSine: function(a, b, c, d, e) {
        return d * Math.sin(b / e * (Math.PI / 2)) + c;
    },
    easeInOutSine: function(a, b, c, d, e) {
        return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c;
    },
    easeInExpo: function(a, b, c, d, e) {
        return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c;
    },
    easeOutExpo: function(a, b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c;
    },
    easeInOutExpo: function(a, b, c, d, e) {
        return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c;
    },
    easeInCirc: function(a, b, c, d, e) {
        return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c;
    },
    easeOutCirc: function(a, b, c, d, e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c;
    },
    easeInOutCirc: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c;
    },
    easeInElastic: function(a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b) return c;
        if (1 == (b /= e)) return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4;
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g)) + c;
    },
    easeOutElastic: function(a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b) return c;
        if (1 == (b /= e)) return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4;
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, -10 * b) * Math.sin(2 * (b * e - f) * Math.PI / g) + d + c;
    },
    easeInOutElastic: function(a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b) return c;
        if (2 == (b /= e / 2)) return c + d;
        if (g || (g = .3 * e * 1.5), h < Math.abs(d)) {
            h = d;
            var f = g / 4;
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return 1 > b ? -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) * .5 + d + c;
    },
    easeInBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c;
    },
    easeOutBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c;
    },
    easeInOutBack: function(a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c;
    },
    easeInBounce: function(a, b, c, d, e) {
        return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c;
    },
    easeOutBounce: function(a, b, c, d, e) {
        return (b /= e) < 1 / 2.75 ? 7.5625 * d * b * b + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c;
    },
    easeInOutBounce: function(a, b, c, d, e) {
        return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c;
    }
}), jQuery.extend(jQuery.easing, {
    easeInOutMaterial: function(a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b + c : d / 4 * ((b -= 2) * b * b + 2) + c;
    }
}), !function(a) {
    function b(a) {
        var b = a.length, d = c.type(a);
        return "function" === d || c.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    if (!a.jQuery) {
        var c = function(a, b) {
            return new c.fn.init(a, b);
        };
        c.isWindow = function(a) {
            return null != a && a == a.window;
        }, c.type = function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? e[g.call(a)] || "object" : typeof a;
        }, c.isArray = Array.isArray || function(a) {
            return "array" === c.type(a);
        }, c.isPlainObject = function(a) {
            var b;
            if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;
            try {
                if (a.constructor && !f.call(a, "constructor") && !f.call(a.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (d) {
                return !1;
            }
            for (b in a) ;
            return void 0 === b || f.call(a, b);
        }, c.each = function(a, c, d) {
            var e, f = 0, g = a.length, h = b(a);
            if (d) {
                if (h) for (;g > f && (e = c.apply(a[f], d), e !== !1); f++) ; else for (f in a) if (e = c.apply(a[f], d), 
                e === !1) break;
            } else if (h) for (;g > f && (e = c.call(a[f], f, a[f]), e !== !1); f++) ; else for (f in a) if (e = c.call(a[f], f, a[f]), 
            e === !1) break;
            return a;
        }, c.data = function(a, b, e) {
            if (void 0 === e) {
                var f = a[c.expando], g = f && d[f];
                if (void 0 === b) return g;
                if (g && b in g) return g[b];
            } else if (void 0 !== b) {
                var f = a[c.expando] || (a[c.expando] = ++c.uuid);
                return d[f] = d[f] || {}, d[f][b] = e, e;
            }
        }, c.removeData = function(a, b) {
            var e = a[c.expando], f = e && d[e];
            f && c.each(b, function(a, b) {
                delete f[b];
            });
        }, c.extend = function() {
            var a, b, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
            for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" != typeof h && "function" !== c.type(h) && (h = {}), 
            i === j && (h = this, i--); j > i; i++) if (null != (f = arguments[i])) for (e in f) a = h[e], 
            d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, 
            g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : void 0 !== d && (h[e] = d));
            return h;
        }, c.queue = function(a, d, e) {
            function f(a, c) {
                var d = c || [];
                return null != a && (b(Object(a)) ? !function(a, b) {
                    for (var c = +b.length, d = 0, e = a.length; c > d; ) a[e++] = b[d++];
                    if (c !== c) for (;void 0 !== b[d]; ) a[e++] = b[d++];
                    return a.length = e, a;
                }(d, "string" == typeof a ? [ a ] : a) : [].push.call(d, a)), d;
            }
            if (a) {
                d = (d || "fx") + "queue";
                var g = c.data(a, d);
                return e ? (!g || c.isArray(e) ? g = c.data(a, d, f(e)) : g.push(e), g) : g || [];
            }
        }, c.dequeue = function(a, b) {
            c.each(a.nodeType ? [ a ] : a, function(a, d) {
                b = b || "fx";
                var e = c.queue(d, b), f = e.shift();
                "inprogress" === f && (f = e.shift()), f && ("fx" === b && e.unshift("inprogress"), 
                f.call(d, function() {
                    c.dequeue(d, b);
                }));
            });
        }, c.fn = c.prototype = {
            init: function(a) {
                if (a.nodeType) return this[0] = a, this;
                throw new Error("Not a DOM node.");
            },
            offset: function() {
                var b = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                };
            },
            position: function() {
                function a() {
                    for (var a = this.offsetParent || document; a && "html" === !a.nodeType.toLowerCase && "static" === a.style.position; ) a = a.offsetParent;
                    return a || document;
                }
                var b = this[0], a = a.apply(b), d = this.offset(), e = /^(?:body|html)$/i.test(a.nodeName) ? {
                    top: 0,
                    left: 0
                } : c(a).offset();
                return d.top -= parseFloat(b.style.marginTop) || 0, d.left -= parseFloat(b.style.marginLeft) || 0, 
                a.style && (e.top += parseFloat(a.style.borderTopWidth) || 0, e.left += parseFloat(a.style.borderLeftWidth) || 0), 
                {
                    top: d.top - e.top,
                    left: d.left - e.left
                };
            }
        };
        var d = {};
        c.expando = "velocity" + new Date().getTime(), c.uuid = 0;
        for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++) e["[object " + h[i] + "]"] = h[i].toLowerCase();
        c.fn.init.prototype = c.fn, a.Velocity = {
            Utilities: c
        };
    }
}(window), function(a) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : a();
}(function() {
    return function(a, b, c, d) {
        function e(a) {
            for (var b = -1, c = a ? a.length : 0, d = []; ++b < c; ) {
                var e = a[b];
                e && d.push(e);
            }
            return d;
        }
        function f(a) {
            return p.isWrapped(a) ? a = [].slice.call(a) : p.isNode(a) && (a = [ a ]), a;
        }
        function g(a) {
            var b = m.data(a, "velocity");
            return null === b ? d : b;
        }
        function h(a) {
            return function(b) {
                return Math.round(b * a) * (1 / a);
            };
        }
        function i(a, c, d, e) {
            function f(a, b) {
                return 1 - 3 * b + 3 * a;
            }
            function g(a, b) {
                return 3 * b - 6 * a;
            }
            function h(a) {
                return 3 * a;
            }
            function i(a, b, c) {
                return ((f(b, c) * a + g(b, c)) * a + h(b)) * a;
            }
            function j(a, b, c) {
                return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b);
            }
            function k(b, c) {
                for (var e = 0; p > e; ++e) {
                    var f = j(c, a, d);
                    if (0 === f) return c;
                    var g = i(c, a, d) - b;
                    c -= g / f;
                }
                return c;
            }
            function l() {
                for (var b = 0; t > b; ++b) x[b] = i(b * u, a, d);
            }
            function m(b, c, e) {
                var f, g, h = 0;
                do g = c + (e - c) / 2, f = i(g, a, d) - b, f > 0 ? e = g : c = g; while (Math.abs(f) > r && ++h < s);
                return g;
            }
            function n(b) {
                for (var c = 0, e = 1, f = t - 1; e != f && x[e] <= b; ++e) c += u;
                --e;
                var g = (b - x[e]) / (x[e + 1] - x[e]), h = c + g * u, i = j(h, a, d);
                return i >= q ? k(b, h) : 0 == i ? h : m(b, c, c + u);
            }
            function o() {
                y = !0, (a != c || d != e) && l();
            }
            var p = 4, q = .001, r = 1e-7, s = 10, t = 11, u = 1 / (t - 1), v = "Float32Array" in b;
            if (4 !== arguments.length) return !1;
            for (var w = 0; 4 > w; ++w) if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
            a = Math.min(a, 1), d = Math.min(d, 1), a = Math.max(a, 0), d = Math.max(d, 0);
            var x = v ? new Float32Array(t) : new Array(t), y = !1, z = function(b) {
                return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e);
            };
            z.getControlPoints = function() {
                return [ {
                    x: a,
                    y: c
                }, {
                    x: d,
                    y: e
                } ];
            };
            var A = "generateBezier(" + [ a, c, d, e ] + ")";
            return z.toString = function() {
                return A;
            }, z;
        }
        function j(a, b) {
            var c = a;
            return p.isString(a) ? t.Easings[a] || (c = !1) : c = p.isArray(a) && 1 === a.length ? h.apply(null, a) : p.isArray(a) && 2 === a.length ? u.apply(null, a.concat([ b ])) : p.isArray(a) && 4 === a.length ? i.apply(null, a) : !1, 
            c === !1 && (c = t.Easings[t.defaults.easing] ? t.defaults.easing : s), c;
        }
        function k(a) {
            if (a) for (var b = new Date().getTime(), c = 0, e = t.State.calls.length; e > c; c++) if (t.State.calls[c]) {
                var f = t.State.calls[c], h = f[0], i = f[2], j = f[3], n = !!j;
                j || (j = t.State.calls[c][3] = b - 16);
                for (var o = Math.min((b - j) / i.duration, 1), q = 0, r = h.length; r > q; q++) {
                    var s = h[q], u = s.element;
                    if (g(u)) {
                        var w = !1;
                        if (i.display !== d && null !== i.display && "none" !== i.display) {
                            if ("flex" === i.display) {
                                var y = [ "-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex" ];
                                m.each(y, function(a, b) {
                                    v.setPropertyValue(u, "display", b);
                                });
                            }
                            v.setPropertyValue(u, "display", i.display);
                        }
                        i.visibility !== d && "hidden" !== i.visibility && v.setPropertyValue(u, "visibility", i.visibility);
                        for (var z in s) if ("element" !== z) {
                            var A, B = s[z], C = p.isString(B.easing) ? t.Easings[B.easing] : B.easing;
                            if (1 === o) A = B.endValue; else if (A = B.startValue + (B.endValue - B.startValue) * C(o), 
                            !n && A === B.currentValue) continue;
                            if (B.currentValue = A, v.Hooks.registered[z]) {
                                var D = v.Hooks.getRoot(z), E = g(u).rootPropertyValueCache[D];
                                E && (B.rootPropertyValue = E);
                            }
                            var F = v.setPropertyValue(u, z, B.currentValue + (0 === parseFloat(A) ? "" : B.unitType), B.rootPropertyValue, B.scrollData);
                            v.Hooks.registered[z] && (g(u).rootPropertyValueCache[D] = v.Normalizations.registered[D] ? v.Normalizations.registered[D]("extract", null, F[1]) : F[1]), 
                            "transform" === F[0] && (w = !0);
                        }
                        i.mobileHA && g(u).transformCache.translate3d === d && (g(u).transformCache.translate3d = "(0px, 0px, 0px)", 
                        w = !0), w && v.flushTransformCache(u);
                    }
                }
                i.display !== d && "none" !== i.display && (t.State.calls[c][2].display = !1), i.visibility !== d && "hidden" !== i.visibility && (t.State.calls[c][2].visibility = !1), 
                i.progress && i.progress.call(f[1], f[1], o, Math.max(0, j + i.duration - b), j), 
                1 === o && l(c);
            }
            t.State.isTicking && x(k);
        }
        function l(a, b) {
            if (!t.State.calls[a]) return !1;
            for (var c = t.State.calls[a][0], e = t.State.calls[a][1], f = t.State.calls[a][2], h = t.State.calls[a][4], i = !1, j = 0, k = c.length; k > j; j++) {
                var l = c[j].element;
                if (b || f.loop || ("none" === f.display && v.setPropertyValue(l, "display", f.display), 
                "hidden" === f.visibility && v.setPropertyValue(l, "visibility", f.visibility)), 
                f.loop !== !0 && (m.queue(l)[1] === d || !/\.velocityQueueEntryFlag/i.test(m.queue(l)[1])) && g(l)) {
                    g(l).isAnimating = !1, g(l).rootPropertyValueCache = {};
                    var n = !1;
                    m.each(v.Lists.transforms3D, function(a, b) {
                        var c = /^scale/.test(b) ? 1 : 0, e = g(l).transformCache[b];
                        g(l).transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && (n = !0, 
                        delete g(l).transformCache[b]);
                    }), f.mobileHA && (n = !0, delete g(l).transformCache.translate3d), n && v.flushTransformCache(l), 
                    v.Values.removeClass(l, "velocity-animating");
                }
                if (!b && f.complete && !f.loop && j === k - 1) try {
                    f.complete.call(e, e);
                } catch (o) {
                    setTimeout(function() {
                        throw o;
                    }, 1);
                }
                h && f.loop !== !0 && h(e), f.loop !== !0 || b || (m.each(g(l).tweensContainer, function(a, b) {
                    /^rotate/.test(a) && 360 === parseFloat(b.endValue) && (b.endValue = 0, b.startValue = 360);
                }), t(l, "reverse", {
                    loop: !0,
                    delay: f.delay
                })), f.queue !== !1 && m.dequeue(l, f.queue);
            }
            t.State.calls[a] = !1;
            for (var p = 0, q = t.State.calls.length; q > p; p++) if (t.State.calls[p] !== !1) {
                i = !0;
                break;
            }
            i === !1 && (t.State.isTicking = !1, delete t.State.calls, t.State.calls = []);
        }
        var m, n = function() {
            if (c.documentMode) return c.documentMode;
            for (var a = 7; a > 4; a--) {
                var b = c.createElement("div");
                if (b.innerHTML = "<!--[if IE " + a + "]><span></span><![endif]-->", b.getElementsByTagName("span").length) return b = null, 
                a;
            }
            return d;
        }(), o = function() {
            var a = 0;
            return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function(b) {
                var c, d = new Date().getTime();
                return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function() {
                    b(d + c);
                }, c);
            };
        }(), p = {
            isString: function(a) {
                return "string" == typeof a;
            },
            isArray: Array.isArray || function(a) {
                return "[object Array]" === Object.prototype.toString.call(a);
            },
            isFunction: function(a) {
                return "[object Function]" === Object.prototype.toString.call(a);
            },
            isNode: function(a) {
                return a && a.nodeType;
            },
            isNodeList: function(a) {
                return "object" == typeof a && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a)) && a.length !== d && (0 === a.length || "object" == typeof a[0] && a[0].nodeType > 0);
            },
            isWrapped: function(a) {
                return a && (a.jquery || b.Zepto && b.Zepto.zepto.isZ(a));
            },
            isSVG: function(a) {
                return b.SVGElement && a instanceof b.SVGElement;
            },
            isEmptyObject: function(a) {
                for (var b in a) return !1;
                return !0;
            }
        }, q = !1;
        if (a.fn && a.fn.jquery ? (m = a, q = !0) : m = b.Velocity.Utilities, 8 >= n && !q) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= n) return void (jQuery.fn.velocity = jQuery.fn.animate);
        var r = 400, s = "swing", t = {
            State: {
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                isAndroid: /Android/i.test(navigator.userAgent),
                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                isChrome: b.chrome,
                isFirefox: /Firefox/i.test(navigator.userAgent),
                prefixElement: c.createElement("div"),
                prefixMatches: {},
                scrollAnchor: null,
                scrollPropertyLeft: null,
                scrollPropertyTop: null,
                isTicking: !1,
                calls: []
            },
            CSS: {},
            Utilities: m,
            Redirects: {},
            Easings: {},
            Promise: b.Promise,
            defaults: {
                queue: "",
                duration: r,
                easing: s,
                begin: d,
                complete: d,
                progress: d,
                display: d,
                visibility: d,
                loop: !1,
                delay: !1,
                mobileHA: !0,
                _cacheValues: !0
            },
            init: function(a) {
                m.data(a, "velocity", {
                    isSVG: p.isSVG(a),
                    isAnimating: !1,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {}
                });
            },
            hook: null,
            mock: !1,
            version: {
                major: 1,
                minor: 1,
                patch: 0
            },
            debug: !1
        };
        b.pageYOffset !== d ? (t.State.scrollAnchor = b, t.State.scrollPropertyLeft = "pageXOffset", 
        t.State.scrollPropertyTop = "pageYOffset") : (t.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body, 
        t.State.scrollPropertyLeft = "scrollLeft", t.State.scrollPropertyTop = "scrollTop");
        var u = function() {
            function a(a) {
                return -a.tension * a.x - a.friction * a.v;
            }
            function b(b, c, d) {
                var e = {
                    x: b.x + d.dx * c,
                    v: b.v + d.dv * c,
                    tension: b.tension,
                    friction: b.friction
                };
                return {
                    dx: e.v,
                    dv: a(e)
                };
            }
            function c(c, d) {
                var e = {
                    dx: c.v,
                    dv: a(c)
                }, f = b(c, .5 * d, e), g = b(c, .5 * d, f), h = b(c, d, g), i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx), j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv);
                return c.x = c.x + i * d, c.v = c.v + j * d, c;
            }
            return function d(a, b, e) {
                var f, g, h, i = {
                    x: -1,
                    v: 0,
                    tension: null,
                    friction: null
                }, j = [ 0 ], k = 0, l = 1e-4, m = .016;
                for (a = parseFloat(a) || 500, b = parseFloat(b) || 20, e = e || null, i.tension = a, 
                i.friction = b, f = null !== e, f ? (k = d(a, b), g = k / e * m) : g = m; h = c(h || i, g), 
                j.push(1 + h.x), k += 16, Math.abs(h.x) > l && Math.abs(h.v) > l; ) ;
                return f ? function(a) {
                    return j[a * (j.length - 1) | 0];
                } : k;
            };
        }();
        t.Easings = {
            linear: function(a) {
                return a;
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2;
            },
            spring: function(a) {
                return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a);
            }
        }, m.each([ [ "ease", [ .25, .1, .25, 1 ] ], [ "ease-in", [ .42, 0, 1, 1 ] ], [ "ease-out", [ 0, 0, .58, 1 ] ], [ "ease-in-out", [ .42, 0, .58, 1 ] ], [ "easeInSine", [ .47, 0, .745, .715 ] ], [ "easeOutSine", [ .39, .575, .565, 1 ] ], [ "easeInOutSine", [ .445, .05, .55, .95 ] ], [ "easeInQuad", [ .55, .085, .68, .53 ] ], [ "easeOutQuad", [ .25, .46, .45, .94 ] ], [ "easeInOutQuad", [ .455, .03, .515, .955 ] ], [ "easeInCubic", [ .55, .055, .675, .19 ] ], [ "easeOutCubic", [ .215, .61, .355, 1 ] ], [ "easeInOutCubic", [ .645, .045, .355, 1 ] ], [ "easeInQuart", [ .895, .03, .685, .22 ] ], [ "easeOutQuart", [ .165, .84, .44, 1 ] ], [ "easeInOutQuart", [ .77, 0, .175, 1 ] ], [ "easeInQuint", [ .755, .05, .855, .06 ] ], [ "easeOutQuint", [ .23, 1, .32, 1 ] ], [ "easeInOutQuint", [ .86, 0, .07, 1 ] ], [ "easeInExpo", [ .95, .05, .795, .035 ] ], [ "easeOutExpo", [ .19, 1, .22, 1 ] ], [ "easeInOutExpo", [ 1, 0, 0, 1 ] ], [ "easeInCirc", [ .6, .04, .98, .335 ] ], [ "easeOutCirc", [ .075, .82, .165, 1 ] ], [ "easeInOutCirc", [ .785, .135, .15, .86 ] ] ], function(a, b) {
            t.Easings[b[0]] = i.apply(null, b[1]);
        });
        var v = t.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: [ "fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor" ],
                transformsBase: [ "translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ" ],
                transforms3D: [ "transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY" ]
            },
            Hooks: {
                templates: {
                    textShadow: [ "Color X Y Blur", "black 0px 0px 0px" ],
                    boxShadow: [ "Color X Y Blur Spread", "black 0px 0px 0px 0px" ],
                    clip: [ "Top Right Bottom Left", "0px 0px 0px 0px" ],
                    backgroundPosition: [ "X Y", "0% 0%" ],
                    transformOrigin: [ "X Y Z", "50% 50% 0px" ],
                    perspectiveOrigin: [ "X Y", "50% 50%" ]
                },
                registered: {},
                register: function() {
                    for (var a = 0; a < v.Lists.colors.length; a++) {
                        var b = "color" === v.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";
                        v.Hooks.templates[v.Lists.colors[a]] = [ "Red Green Blue Alpha", b ];
                    }
                    var c, d, e;
                    if (n) for (c in v.Hooks.templates) {
                        d = v.Hooks.templates[c], e = d[0].split(" ");
                        var f = d[1].match(v.RegEx.valueSplit);
                        "Color" === e[0] && (e.push(e.shift()), f.push(f.shift()), v.Hooks.templates[c] = [ e.join(" "), f.join(" ") ]);
                    }
                    for (c in v.Hooks.templates) {
                        d = v.Hooks.templates[c], e = d[0].split(" ");
                        for (var a in e) {
                            var g = c + e[a], h = a;
                            v.Hooks.registered[g] = [ c, h ];
                        }
                    }
                },
                getRoot: function(a) {
                    var b = v.Hooks.registered[a];
                    return b ? b[0] : a;
                },
                cleanRootPropertyValue: function(a, b) {
                    return v.RegEx.valueUnwrap.test(b) && (b = b.match(v.RegEx.valueUnwrap)[1]), v.Values.isCSSNullValue(b) && (b = v.Hooks.templates[a][1]), 
                    b;
                },
                extractValue: function(a, b) {
                    var c = v.Hooks.registered[a];
                    if (c) {
                        var d = c[0], e = c[1];
                        return b = v.Hooks.cleanRootPropertyValue(d, b), b.toString().match(v.RegEx.valueSplit)[e];
                    }
                    return b;
                },
                injectValue: function(a, b, c) {
                    var d = v.Hooks.registered[a];
                    if (d) {
                        var e, f, g = d[0], h = d[1];
                        return c = v.Hooks.cleanRootPropertyValue(g, c), e = c.toString().match(v.RegEx.valueSplit), 
                        e[h] = b, f = e.join(" ");
                    }
                    return c;
                }
            },
            Normalizations: {
                registered: {
                    clip: function(a, b, c) {
                        switch (a) {
                          case "name":
                            return "clip";

                          case "extract":
                            var d;
                            return v.RegEx.wrappedValueAlreadyExtracted.test(c) ? d = c : (d = c.toString().match(v.RegEx.valueUnwrap), 
                            d = d ? d[1].replace(/,(\s+)?/g, " ") : c), d;

                          case "inject":
                            return "rect(" + c + ")";
                        }
                    },
                    blur: function(a, b, c) {
                        switch (a) {
                          case "name":
                            return "-webkit-filter";

                          case "extract":
                            var d = parseFloat(c);
                            if (!d && 0 !== d) {
                                var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                d = e ? e[1] : 0;
                            }
                            return d;

                          case "inject":
                            return parseFloat(c) ? "blur(" + c + ")" : "none";
                        }
                    },
                    opacity: function(a, b, c) {
                        if (8 >= n) switch (a) {
                          case "name":
                            return "filter";

                          case "extract":
                            var d = c.toString().match(/alpha\(opacity=(.*)\)/i);
                            return c = d ? d[1] / 100 : 1;

                          case "inject":
                            return b.style.zoom = 1, parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")";
                        } else switch (a) {
                          case "name":
                            return "opacity";

                          case "extract":
                            return c;

                          case "inject":
                            return c;
                        }
                    }
                },
                register: function() {
                    9 >= n || t.State.isGingerbread || (v.Lists.transformsBase = v.Lists.transformsBase.concat(v.Lists.transforms3D));
                    for (var a = 0; a < v.Lists.transformsBase.length; a++) !function() {
                        var b = v.Lists.transformsBase[a];
                        v.Normalizations.registered[b] = function(a, c, e) {
                            switch (a) {
                              case "name":
                                return "transform";

                              case "extract":
                                return g(c) === d || g(c).transformCache[b] === d ? /^scale/i.test(b) ? 1 : 0 : g(c).transformCache[b].replace(/[()]/g, "");

                              case "inject":
                                var f = !1;
                                switch (b.substr(0, b.length - 1)) {
                                  case "translate":
                                    f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e);
                                    break;

                                  case "scal":
                                  case "scale":
                                    t.State.isAndroid && g(c).transformCache[b] === d && 1 > e && (e = 1), f = !/(\d)$/i.test(e);
                                    break;

                                  case "skew":
                                    f = !/(deg|\d)$/i.test(e);
                                    break;

                                  case "rotate":
                                    f = !/(deg|\d)$/i.test(e);
                                }
                                return f || (g(c).transformCache[b] = "(" + e + ")"), g(c).transformCache[b];
                            }
                        };
                    }();
                    for (var a = 0; a < v.Lists.colors.length; a++) !function() {
                        var b = v.Lists.colors[a];
                        v.Normalizations.registered[b] = function(a, c, e) {
                            switch (a) {
                              case "name":
                                return b;

                              case "extract":
                                var f;
                                if (v.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e; else {
                                    var g, h = {
                                        black: "rgb(0, 0, 0)",
                                        blue: "rgb(0, 0, 255)",
                                        gray: "rgb(128, 128, 128)",
                                        green: "rgb(0, 128, 0)",
                                        red: "rgb(255, 0, 0)",
                                        white: "rgb(255, 255, 255)"
                                    };
                                    /^[A-z]+$/i.test(e) ? g = h[e] !== d ? h[e] : h.black : v.RegEx.isHex.test(e) ? g = "rgb(" + v.Values.hexToRgb(e).join(" ") + ")" : /^rgba?\(/i.test(e) || (g = h.black), 
                                    f = (g || e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                                }
                                return 8 >= n || 3 !== f.split(" ").length || (f += " 1"), f;

                              case "inject":
                                return 8 >= n ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"), 
                                (8 >= n ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
                            }
                        };
                    }();
                }
            },
            Names: {
                camelCase: function(a) {
                    return a.replace(/-(\w)/g, function(a, b) {
                        return b.toUpperCase();
                    });
                },
                SVGAttribute: function(a) {
                    var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (n || t.State.isAndroid && !t.State.isChrome) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a);
                },
                prefixCheck: function(a) {
                    if (t.State.prefixMatches[a]) return [ t.State.prefixMatches[a], !0 ];
                    for (var b = [ "", "Webkit", "Moz", "ms", "O" ], c = 0, d = b.length; d > c; c++) {
                        var e;
                        if (e = 0 === c ? a : b[c] + a.replace(/^\w/, function(a) {
                            return a.toUpperCase();
                        }), p.isString(t.State.prefixElement.style[e])) return t.State.prefixMatches[a] = e, 
                        [ e, !0 ];
                    }
                    return [ a, !1 ];
                }
            },
            Values: {
                hexToRgb: function(a) {
                    var b, c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return a = a.replace(c, function(a, b, c, d) {
                        return b + b + c + c + d + d;
                    }), b = d.exec(a), b ? [ parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16) ] : [ 0, 0, 0 ];
                },
                isCSSNullValue: function(a) {
                    return 0 == a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a);
                },
                getUnitType: function(a) {
                    return /^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px";
                },
                getDisplayType: function(a) {
                    var b = a && a.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ? "inline" : /^(li)$/i.test(b) ? "list-item" : /^(tr)$/i.test(b) ? "table-row" : "block";
                },
                addClass: function(a, b) {
                    a.classList ? a.classList.add(b) : a.className += (a.className.length ? " " : "") + b;
                },
                removeClass: function(a, b) {
                    a.classList ? a.classList.remove(b) : a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                }
            },
            getPropertyValue: function(a, c, e, f) {
                function h(a, c) {
                    function e() {
                        j && v.setPropertyValue(a, "display", "none");
                    }
                    var i = 0;
                    if (8 >= n) i = m.css(a, c); else {
                        var j = !1;
                        if (/^(width|height)$/.test(c) && 0 === v.getPropertyValue(a, "display") && (j = !0, 
                        v.setPropertyValue(a, "display", v.Values.getDisplayType(a))), !f) {
                            if ("height" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                var k = a.offsetHeight - (parseFloat(v.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingBottom")) || 0);
                                return e(), k;
                            }
                            if ("width" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                var l = a.offsetWidth - (parseFloat(v.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingRight")) || 0);
                                return e(), l;
                            }
                        }
                        var o;
                        o = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : g(a).computedStyle = b.getComputedStyle(a, null), 
                        (n || t.State.isFirefox) && "borderColor" === c && (c = "borderTopColor"), i = 9 === n && "filter" === c ? o.getPropertyValue(c) : o[c], 
                        ("" === i || null === i) && (i = a.style[c]), e();
                    }
                    if ("auto" === i && /^(top|right|bottom|left)$/i.test(c)) {
                        var p = h(a, "position");
                        ("fixed" === p || "absolute" === p && /top|left/i.test(c)) && (i = m(a).position()[c] + "px");
                    }
                    return i;
                }
                var i;
                if (v.Hooks.registered[c]) {
                    var j = c, k = v.Hooks.getRoot(j);
                    e === d && (e = v.getPropertyValue(a, v.Names.prefixCheck(k)[0])), v.Normalizations.registered[k] && (e = v.Normalizations.registered[k]("extract", a, e)), 
                    i = v.Hooks.extractValue(j, e);
                } else if (v.Normalizations.registered[c]) {
                    var l, o;
                    l = v.Normalizations.registered[c]("name", a), "transform" !== l && (o = h(a, v.Names.prefixCheck(l)[0]), 
                    v.Values.isCSSNullValue(o) && v.Hooks.templates[c] && (o = v.Hooks.templates[c][1])), 
                    i = v.Normalizations.registered[c]("extract", a, o);
                }
                return /^[\d-]/.test(i) || (i = g(a) && g(a).isSVG && v.Names.SVGAttribute(c) ? /^(height|width)$/i.test(c) ? a.getBBox()[c] : a.getAttribute(c) : h(a, v.Names.prefixCheck(c)[0])), 
                v.Values.isCSSNullValue(i) && (i = 0), t.debug >= 2 && console.log("Get " + c + ": " + i), 
                i;
            },
            setPropertyValue: function(a, c, d, e, f) {
                var h = c;
                if ("scroll" === c) f.container ? f.container["scroll" + f.direction] = d : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d); else if (v.Normalizations.registered[c] && "transform" === v.Normalizations.registered[c]("name", a)) v.Normalizations.registered[c]("inject", a, d), 
                h = "transform", d = g(a).transformCache[c]; else {
                    if (v.Hooks.registered[c]) {
                        var i = c, j = v.Hooks.getRoot(c);
                        e = e || v.getPropertyValue(a, j), d = v.Hooks.injectValue(i, d, e), c = j;
                    }
                    if (v.Normalizations.registered[c] && (d = v.Normalizations.registered[c]("inject", a, d), 
                    c = v.Normalizations.registered[c]("name", a)), h = v.Names.prefixCheck(c)[0], 8 >= n) try {
                        a.style[h] = d;
                    } catch (k) {
                        t.debug && console.log("Browser does not support [" + d + "] for [" + h + "]");
                    } else g(a) && g(a).isSVG && v.Names.SVGAttribute(c) ? a.setAttribute(c, d) : a.style[h] = d;
                    t.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d);
                }
                return [ h, d ];
            },
            flushTransformCache: function(a) {
                function b(b) {
                    return parseFloat(v.getPropertyValue(a, b));
                }
                var c = "";
                if ((n || t.State.isAndroid && !t.State.isChrome) && g(a).isSVG) {
                    var d = {
                        translate: [ b("translateX"), b("translateY") ],
                        skewX: [ b("skewX") ],
                        skewY: [ b("skewY") ],
                        scale: 1 !== b("scale") ? [ b("scale"), b("scale") ] : [ b("scaleX"), b("scaleY") ],
                        rotate: [ b("rotateZ"), 0, 0 ]
                    };
                    m.each(g(a).transformCache, function(a) {
                        /^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), 
                        d[a] && (c += a + "(" + d[a].join(" ") + ") ", delete d[a]);
                    });
                } else {
                    var e, f;
                    m.each(g(a).transformCache, function(b) {
                        return e = g(a).transformCache[b], "transformPerspective" === b ? (f = e, !0) : (9 === n && "rotateZ" === b && (b = "rotate"), 
                        void (c += b + e + " "));
                    }), f && (c = "perspective" + f + " " + c);
                }
                v.setPropertyValue(a, "transform", c);
            }
        };
        v.Hooks.register(), v.Normalizations.register(), t.hook = function(a, b, c) {
            var e = d;
            return a = f(a), m.each(a, function(a, f) {
                if (g(f) === d && t.init(f), c === d) e === d && (e = t.CSS.getPropertyValue(f, b)); else {
                    var h = t.CSS.setPropertyValue(f, b, c);
                    "transform" === h[0] && t.CSS.flushTransformCache(f), e = h;
                }
            }), e;
        };
        var w = function() {
            function a() {
                return i ? C.promise || null : n;
            }
            function h() {
                function a() {
                    function a(a, b) {
                        var c = d, e = d, f = d;
                        return p.isArray(a) ? (c = a[0], !p.isArray(a[1]) && /^[\d-]/.test(a[1]) || p.isFunction(a[1]) || v.RegEx.isHex.test(a[1]) ? f = a[1] : (p.isString(a[1]) && !v.RegEx.isHex.test(a[1]) || p.isArray(a[1])) && (e = b ? a[1] : j(a[1], i.duration), 
                        a[2] !== d && (f = a[2]))) : c = a, b || (e = e || i.easing), p.isFunction(c) && (c = c.call(h, z, y)), 
                        p.isFunction(f) && (f = f.call(h, z, y)), [ c || 0, e, f ];
                    }
                    function n(a, b) {
                        var c, d;
                        return d = (b || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(a) {
                            return c = a, "";
                        }), c || (c = v.Values.getUnitType(a)), [ d, c ];
                    }
                    function o() {
                        var a = {
                            myParent: h.parentNode || c.body,
                            position: v.getPropertyValue(h, "position"),
                            fontSize: v.getPropertyValue(h, "fontSize")
                        }, d = a.position === J.lastPosition && a.myParent === J.lastParent, e = a.fontSize === J.lastFontSize;
                        J.lastParent = a.myParent, J.lastPosition = a.position, J.lastFontSize = a.fontSize;
                        var f = 100, i = {};
                        if (e && d) i.emToPx = J.lastEmToPx, i.percentToPxWidth = J.lastPercentToPxWidth, 
                        i.percentToPxHeight = J.lastPercentToPxHeight; else {
                            var j = g(h).isSVG ? c.createElementNS("http://www.w3.org/2000/svg", "rect") : c.createElement("div");
                            t.init(j), a.myParent.appendChild(j), m.each([ "overflow", "overflowX", "overflowY" ], function(a, b) {
                                t.CSS.setPropertyValue(j, b, "hidden");
                            }), t.CSS.setPropertyValue(j, "position", a.position), t.CSS.setPropertyValue(j, "fontSize", a.fontSize), 
                            t.CSS.setPropertyValue(j, "boxSizing", "content-box"), m.each([ "minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height" ], function(a, b) {
                                t.CSS.setPropertyValue(j, b, f + "%");
                            }), t.CSS.setPropertyValue(j, "paddingLeft", f + "em"), i.percentToPxWidth = J.lastPercentToPxWidth = (parseFloat(v.getPropertyValue(j, "width", null, !0)) || 1) / f, 
                            i.percentToPxHeight = J.lastPercentToPxHeight = (parseFloat(v.getPropertyValue(j, "height", null, !0)) || 1) / f, 
                            i.emToPx = J.lastEmToPx = (parseFloat(v.getPropertyValue(j, "paddingLeft")) || 1) / f, 
                            a.myParent.removeChild(j);
                        }
                        return null === J.remToPx && (J.remToPx = parseFloat(v.getPropertyValue(c.body, "fontSize")) || 16), 
                        null === J.vwToPx && (J.vwToPx = parseFloat(b.innerWidth) / 100, J.vhToPx = parseFloat(b.innerHeight) / 100), 
                        i.remToPx = J.remToPx, i.vwToPx = J.vwToPx, i.vhToPx = J.vhToPx, t.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(i), h), 
                        i;
                    }
                    if (i.begin && 0 === z) try {
                        i.begin.call(q, q);
                    } catch (r) {
                        setTimeout(function() {
                            throw r;
                        }, 1);
                    }
                    if ("scroll" === D) {
                        var w, x, A, B = /^x$/i.test(i.axis) ? "Left" : "Top", E = parseFloat(i.offset) || 0;
                        i.container ? p.isWrapped(i.container) || p.isNode(i.container) ? (i.container = i.container[0] || i.container, 
                        w = i.container["scroll" + B], A = w + m(h).position()[B.toLowerCase()] + E) : i.container = null : (w = t.State.scrollAnchor[t.State["scrollProperty" + B]], 
                        x = t.State.scrollAnchor[t.State["scrollProperty" + ("Left" === B ? "Top" : "Left")]], 
                        A = m(h).offset()[B.toLowerCase()] + E), l = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: w,
                                currentValue: w,
                                endValue: A,
                                unitType: "",
                                easing: i.easing,
                                scrollData: {
                                    container: i.container,
                                    direction: B,
                                    alternateValue: x
                                }
                            },
                            element: h
                        }, t.debug && console.log("tweensContainer (scroll): ", l.scroll, h);
                    } else if ("reverse" === D) {
                        if (!g(h).tweensContainer) return void m.dequeue(h, i.queue);
                        "none" === g(h).opts.display && (g(h).opts.display = "auto"), "hidden" === g(h).opts.visibility && (g(h).opts.visibility = "visible"), 
                        g(h).opts.loop = !1, g(h).opts.begin = null, g(h).opts.complete = null, u.easing || delete i.easing, 
                        u.duration || delete i.duration, i = m.extend({}, g(h).opts, i);
                        var F = m.extend(!0, {}, g(h).tweensContainer);
                        for (var G in F) if ("element" !== G) {
                            var H = F[G].startValue;
                            F[G].startValue = F[G].currentValue = F[G].endValue, F[G].endValue = H, p.isEmptyObject(u) || (F[G].easing = i.easing), 
                            t.debug && console.log("reverse tweensContainer (" + G + "): " + JSON.stringify(F[G]), h);
                        }
                        l = F;
                    } else if ("start" === D) {
                        var F;
                        g(h).tweensContainer && g(h).isAnimating === !0 && (F = g(h).tweensContainer), m.each(s, function(b, c) {
                            if (RegExp("^" + v.Lists.colors.join("$|^") + "$").test(b)) {
                                var e = a(c, !0), f = e[0], g = e[1], h = e[2];
                                if (v.RegEx.isHex.test(f)) {
                                    for (var i = [ "Red", "Green", "Blue" ], j = v.Values.hexToRgb(f), k = h ? v.Values.hexToRgb(h) : d, l = 0; l < i.length; l++) {
                                        var m = [ j[l] ];
                                        g && m.push(g), k !== d && m.push(k[l]), s[b + i[l]] = m;
                                    }
                                    delete s[b];
                                }
                            }
                        });
                        for (var I in s) {
                            var L = a(s[I]), M = L[0], N = L[1], O = L[2];
                            I = v.Names.camelCase(I);
                            var P = v.Hooks.getRoot(I), Q = !1;
                            if (g(h).isSVG || v.Names.prefixCheck(P)[1] !== !1 || v.Normalizations.registered[P] !== d) {
                                (i.display !== d && null !== i.display && "none" !== i.display || i.visibility !== d && "hidden" !== i.visibility) && /opacity|filter/.test(I) && !O && 0 !== M && (O = 0), 
                                i._cacheValues && F && F[I] ? (O === d && (O = F[I].endValue + F[I].unitType), Q = g(h).rootPropertyValueCache[P]) : v.Hooks.registered[I] ? O === d ? (Q = v.getPropertyValue(h, P), 
                                O = v.getPropertyValue(h, I, Q)) : Q = v.Hooks.templates[P][1] : O === d && (O = v.getPropertyValue(h, I));
                                var R, S, T, U = !1;
                                if (R = n(I, O), O = R[0], T = R[1], R = n(I, M), M = R[0].replace(/^([+-\/*])=/, function(a, b) {
                                    return U = b, "";
                                }), S = R[1], O = parseFloat(O) || 0, M = parseFloat(M) || 0, "%" === S && (/^(fontSize|lineHeight)$/.test(I) ? (M /= 100, 
                                S = "em") : /^scale/.test(I) ? (M /= 100, S = "") : /(Red|Green|Blue)$/i.test(I) && (M = M / 100 * 255, 
                                S = "")), /[\/*]/.test(U)) S = T; else if (T !== S && 0 !== O) if (0 === M) S = T; else {
                                    f = f || o();
                                    var V = /margin|padding|left|right|width|text|word|letter/i.test(I) || /X$/.test(I) || "x" === I ? "x" : "y";
                                    switch (T) {
                                      case "%":
                                        O *= "x" === V ? f.percentToPxWidth : f.percentToPxHeight;
                                        break;

                                      case "px":
                                        break;

                                      default:
                                        O *= f[T + "ToPx"];
                                    }
                                    switch (S) {
                                      case "%":
                                        O *= 1 / ("x" === V ? f.percentToPxWidth : f.percentToPxHeight);
                                        break;

                                      case "px":
                                        break;

                                      default:
                                        O *= 1 / f[S + "ToPx"];
                                    }
                                }
                                switch (U) {
                                  case "+":
                                    M = O + M;
                                    break;

                                  case "-":
                                    M = O - M;
                                    break;

                                  case "*":
                                    M = O * M;
                                    break;

                                  case "/":
                                    M = O / M;
                                }
                                l[I] = {
                                    rootPropertyValue: Q,
                                    startValue: O,
                                    currentValue: O,
                                    endValue: M,
                                    unitType: S,
                                    easing: N
                                }, t.debug && console.log("tweensContainer (" + I + "): " + JSON.stringify(l[I]), h);
                            } else t.debug && console.log("Skipping [" + P + "] due to a lack of browser support.");
                        }
                        l.element = h;
                    }
                    l.element && (v.Values.addClass(h, "velocity-animating"), K.push(l), "" === i.queue && (g(h).tweensContainer = l, 
                    g(h).opts = i), g(h).isAnimating = !0, z === y - 1 ? (t.State.calls.length > 1e4 && (t.State.calls = e(t.State.calls)), 
                    t.State.calls.push([ K, q, i, null, C.resolver ]), t.State.isTicking === !1 && (t.State.isTicking = !0, 
                    k())) : z++);
                }
                var f, h = this, i = m.extend({}, t.defaults, u), l = {};
                switch (g(h) === d && t.init(h), parseFloat(i.delay) && i.queue !== !1 && m.queue(h, i.queue, function(a) {
                    t.velocityQueueEntryFlag = !0, g(h).delayTimer = {
                        setTimeout: setTimeout(a, parseFloat(i.delay)),
                        next: a
                    };
                }), i.duration.toString().toLowerCase()) {
                  case "fast":
                    i.duration = 200;
                    break;

                  case "normal":
                    i.duration = r;
                    break;

                  case "slow":
                    i.duration = 600;
                    break;

                  default:
                    i.duration = parseFloat(i.duration) || 1;
                }
                t.mock !== !1 && (t.mock === !0 ? i.duration = i.delay = 1 : (i.duration *= parseFloat(t.mock) || 1, 
                i.delay *= parseFloat(t.mock) || 1)), i.easing = j(i.easing, i.duration), i.begin && !p.isFunction(i.begin) && (i.begin = null), 
                i.progress && !p.isFunction(i.progress) && (i.progress = null), i.complete && !p.isFunction(i.complete) && (i.complete = null), 
                i.display !== d && null !== i.display && (i.display = i.display.toString().toLowerCase(), 
                "auto" === i.display && (i.display = t.CSS.Values.getDisplayType(h))), i.visibility !== d && null !== i.visibility && (i.visibility = i.visibility.toString().toLowerCase()), 
                i.mobileHA = i.mobileHA && t.State.isMobile && !t.State.isGingerbread, i.queue === !1 ? i.delay ? setTimeout(a, i.delay) : a() : m.queue(h, i.queue, function(b, c) {
                    return c === !0 ? (C.promise && C.resolver(q), !0) : (t.velocityQueueEntryFlag = !0, 
                    void a(b));
                }), "" !== i.queue && "fx" !== i.queue || "inprogress" === m.queue(h)[0] || m.dequeue(h);
            }
            var i, n, o, q, s, u, x = arguments[0] && (m.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || p.isString(arguments[0].properties));
            if (p.isWrapped(this) ? (i = !1, o = 0, q = this, n = this) : (i = !0, o = 1, q = x ? arguments[0].elements : arguments[0]), 
            q = f(q)) {
                x ? (s = arguments[0].properties, u = arguments[0].options) : (s = arguments[o], 
                u = arguments[o + 1]);
                var y = q.length, z = 0;
                if ("stop" !== s && !m.isPlainObject(u)) {
                    var A = o + 1;
                    u = {};
                    for (var B = A; B < arguments.length; B++) p.isArray(arguments[B]) || !/^(fast|normal|slow)$/i.test(arguments[B]) && !/^\d/.test(arguments[B]) ? p.isString(arguments[B]) || p.isArray(arguments[B]) ? u.easing = arguments[B] : p.isFunction(arguments[B]) && (u.complete = arguments[B]) : u.duration = arguments[B];
                }
                var C = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                i && t.Promise && (C.promise = new t.Promise(function(a, b) {
                    C.resolver = a, C.rejecter = b;
                }));
                var D;
                switch (s) {
                  case "scroll":
                    D = "scroll";
                    break;

                  case "reverse":
                    D = "reverse";
                    break;

                  case "stop":
                    m.each(q, function(a, b) {
                        g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), 
                        delete g(b).delayTimer);
                    });
                    var E = [];
                    return m.each(t.State.calls, function(a, b) {
                        b && m.each(b[1], function(c, e) {
                            var f = p.isString(u) ? u : "";
                            return u !== d && b[2].queue !== f ? !0 : void m.each(q, function(b, c) {
                                c === e && (u !== d && (m.each(m.queue(c, f), function(a, b) {
                                    p.isFunction(b) && b(null, !0);
                                }), m.queue(c, f, [])), g(c) && "" === f && m.each(g(c).tweensContainer, function(a, b) {
                                    b.endValue = b.currentValue;
                                }), E.push(a));
                            });
                        });
                    }), m.each(E, function(a, b) {
                        l(b, !0);
                    }), C.promise && C.resolver(q), a();

                  default:
                    if (!m.isPlainObject(s) || p.isEmptyObject(s)) {
                        if (p.isString(s) && t.Redirects[s]) {
                            var F = m.extend({}, u), G = F.duration, H = F.delay || 0;
                            return F.backwards === !0 && (q = m.extend(!0, [], q).reverse()), m.each(q, function(a, b) {
                                parseFloat(F.stagger) ? F.delay = H + parseFloat(F.stagger) * a : p.isFunction(F.stagger) && (F.delay = H + F.stagger.call(b, a, y)), 
                                F.drag && (F.duration = parseFloat(G) || (/^(callout|transition)/.test(s) ? 1e3 : r), 
                                F.duration = Math.max(F.duration * (F.backwards ? 1 - a / y : (a + 1) / y), .75 * F.duration, 200)), 
                                t.Redirects[s].call(b, b, F || {}, a, y, q, C.promise ? C : d);
                            }), a();
                        }
                        var I = "Velocity: First argument (" + s + ") was not a property map, a known action, or a registered redirect. Aborting.";
                        return C.promise ? C.rejecter(new Error(I)) : console.log(I), a();
                    }
                    D = "start";
                }
                var J = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null
                }, K = [];
                m.each(q, function(a, b) {
                    p.isNode(b) && h.call(b);
                });
                var L, F = m.extend({}, t.defaults, u);
                if (F.loop = parseInt(F.loop), L = 2 * F.loop - 1, F.loop) for (var M = 0; L > M; M++) {
                    var N = {
                        delay: F.delay,
                        progress: F.progress
                    };
                    M === L - 1 && (N.display = F.display, N.visibility = F.visibility, N.complete = F.complete), 
                    w(q, "reverse", N);
                }
                return a();
            }
        };
        t = m.extend(w, t), t.animate = w;
        var x = b.requestAnimationFrame || o;
        return t.State.isMobile || c.hidden === d || c.addEventListener("visibilitychange", function() {
            c.hidden ? (x = function(a) {
                return setTimeout(function() {
                    a(!0);
                }, 16);
            }, k()) : x = b.requestAnimationFrame || o;
        }), a.Velocity = t, a !== b && (a.fn.velocity = w, a.fn.velocity.defaults = t.defaults), 
        m.each([ "Down", "Up" ], function(a, b) {
            t.Redirects["slide" + b] = function(a, c, e, f, g, h) {
                var i = m.extend({}, c), j = i.begin, k = i.complete, l = {
                    height: "",
                    marginTop: "",
                    marginBottom: "",
                    paddingTop: "",
                    paddingBottom: ""
                }, n = {};
                i.display === d && (i.display = "Down" === b ? "inline" === t.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), 
                i.begin = function() {
                    j && j.call(g, g);
                    for (var c in l) {
                        n[c] = a.style[c];
                        var d = t.CSS.getPropertyValue(a, c);
                        l[c] = "Down" === b ? [ d, 0 ] : [ 0, d ];
                    }
                    n.overflow = a.style.overflow, a.style.overflow = "hidden";
                }, i.complete = function() {
                    for (var b in n) a.style[b] = n[b];
                    k && k.call(g, g), h && h.resolver(g);
                }, t(a, l, i);
            };
        }), m.each([ "In", "Out" ], function(a, b) {
            t.Redirects["fade" + b] = function(a, c, e, f, g, h) {
                var i = m.extend({}, c), j = {
                    opacity: "In" === b ? 1 : 0
                }, k = i.complete;
                i.complete = e !== f - 1 ? i.begin = null : function() {
                    k && k.call(g, g), h && h.resolver(g);
                }, i.display === d && (i.display = "In" === b ? "auto" : "none"), t(this, j, i);
            };
        }), t;
    }(window.jQuery || window.Zepto || window, window, document);
}), !function(a, b, c, d) {
    "use strict";
    function e(a, b, c) {
        return setTimeout(k(a, c), b);
    }
    function f(a, b, c) {
        return Array.isArray(a) ? (g(a, c[b], c), !0) : !1;
    }
    function g(a, b, c) {
        var e;
        if (a) if (a.forEach) a.forEach(b, c); else if (a.length !== d) for (e = 0; e < a.length; ) b.call(c, a[e], e, a), 
        e++; else for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a);
    }
    function h(a, b, c) {
        for (var e = Object.keys(b), f = 0; f < e.length; ) (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), 
        f++;
        return a;
    }
    function i(a, b) {
        return h(a, b, !0);
    }
    function j(a, b, c) {
        var d, e = b.prototype;
        d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && h(d, c);
    }
    function k(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    }
    function l(a, b) {
        return typeof a == kb ? a.apply(b ? b[0] || d : d, b) : a;
    }
    function m(a, b) {
        return a === d ? b : a;
    }
    function n(a, b, c) {
        g(r(b), function(b) {
            a.addEventListener(b, c, !1);
        });
    }
    function o(a, b, c) {
        g(r(b), function(b) {
            a.removeEventListener(b, c, !1);
        });
    }
    function p(a, b) {
        for (;a; ) {
            if (a == b) return !0;
            a = a.parentNode;
        }
        return !1;
    }
    function q(a, b) {
        return a.indexOf(b) > -1;
    }
    function r(a) {
        return a.trim().split(/\s+/g);
    }
    function s(a, b, c) {
        if (a.indexOf && !c) return a.indexOf(b);
        for (var d = 0; d < a.length; ) {
            if (c && a[d][c] == b || !c && a[d] === b) return d;
            d++;
        }
        return -1;
    }
    function t(a) {
        return Array.prototype.slice.call(a, 0);
    }
    function u(a, b, c) {
        for (var d = [], e = [], f = 0; f < a.length; ) {
            var g = b ? a[f][b] : a[f];
            s(e, g) < 0 && d.push(a[f]), e[f] = g, f++;
        }
        return c && (d = b ? d.sort(function(a, c) {
            return a[b] > c[b];
        }) : d.sort()), d;
    }
    function v(a, b) {
        for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ib.length; ) {
            if (c = ib[g], e = c ? c + f : b, e in a) return e;
            g++;
        }
        return d;
    }
    function w() {
        return ob++;
    }
    function x(a) {
        var b = a.ownerDocument;
        return b.defaultView || b.parentWindow;
    }
    function y(a, b) {
        var c = this;
        this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, 
        this.domHandler = function(b) {
            l(a.options.enable, [ a ]) && c.handler(b);
        }, this.init();
    }
    function z(a) {
        var b, c = a.options.inputClass;
        return new (b = c ? c : rb ? N : sb ? Q : qb ? S : M)(a, A);
    }
    function A(a, b, c) {
        var d = c.pointers.length, e = c.changedPointers.length, f = b & yb && 0 === d - e, g = b & (Ab | Bb) && 0 === d - e;
        c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, B(a, c), 
        a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c;
    }
    function B(a, b) {
        var c = a.session, d = b.pointers, e = d.length;
        c.firstInput || (c.firstInput = E(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = E(b) : 1 === e && (c.firstMultiple = !1);
        var f = c.firstInput, g = c.firstMultiple, h = g ? g.center : f.center, i = b.center = F(d);
        b.timeStamp = nb(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = J(h, i), 
        b.distance = I(h, i), C(c, b), b.offsetDirection = H(b.deltaX, b.deltaY), b.scale = g ? L(g.pointers, d) : 1, 
        b.rotation = g ? K(g.pointers, d) : 0, D(c, b);
        var j = a.element;
        p(b.srcEvent.target, j) && (j = b.srcEvent.target), b.target = j;
    }
    function C(a, b) {
        var c = b.center, d = a.offsetDelta || {}, e = a.prevDelta || {}, f = a.prevInput || {};
        (b.eventType === yb || f.eventType === Ab) && (e = a.prevDelta = {
            x: f.deltaX || 0,
            y: f.deltaY || 0
        }, d = a.offsetDelta = {
            x: c.x,
            y: c.y
        }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y);
    }
    function D(a, b) {
        var c, e, f, g, h = a.lastInterval || b, i = b.timeStamp - h.timeStamp;
        if (b.eventType != Bb && (i > xb || h.velocity === d)) {
            var j = h.deltaX - b.deltaX, k = h.deltaY - b.deltaY, l = G(i, j, k);
            e = l.x, f = l.y, c = mb(l.x) > mb(l.y) ? l.x : l.y, g = H(j, k), a.lastInterval = b;
        } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;
        b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g;
    }
    function E(a) {
        for (var b = [], c = 0; c < a.pointers.length; ) b[c] = {
            clientX: lb(a.pointers[c].clientX),
            clientY: lb(a.pointers[c].clientY)
        }, c++;
        return {
            timeStamp: nb(),
            pointers: b,
            center: F(b),
            deltaX: a.deltaX,
            deltaY: a.deltaY
        };
    }
    function F(a) {
        var b = a.length;
        if (1 === b) return {
            x: lb(a[0].clientX),
            y: lb(a[0].clientY)
        };
        for (var c = 0, d = 0, e = 0; b > e; ) c += a[e].clientX, d += a[e].clientY, e++;
        return {
            x: lb(c / b),
            y: lb(d / b)
        };
    }
    function G(a, b, c) {
        return {
            x: b / a || 0,
            y: c / a || 0
        };
    }
    function H(a, b) {
        return a === b ? Cb : mb(a) >= mb(b) ? a > 0 ? Db : Eb : b > 0 ? Fb : Gb;
    }
    function I(a, b, c) {
        c || (c = Kb);
        var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]];
        return Math.sqrt(d * d + e * e);
    }
    function J(a, b, c) {
        c || (c = Kb);
        var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]];
        return 180 * Math.atan2(e, d) / Math.PI;
    }
    function K(a, b) {
        return J(b[1], b[0], Lb) - J(a[1], a[0], Lb);
    }
    function L(a, b) {
        return I(b[0], b[1], Lb) / I(a[0], a[1], Lb);
    }
    function M() {
        this.evEl = Nb, this.evWin = Ob, this.allow = !0, this.pressed = !1, y.apply(this, arguments);
    }
    function N() {
        this.evEl = Rb, this.evWin = Sb, y.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
    }
    function O() {
        this.evTarget = Ub, this.evWin = Vb, this.started = !1, y.apply(this, arguments);
    }
    function P(a, b) {
        var c = t(a.touches), d = t(a.changedTouches);
        return b & (Ab | Bb) && (c = u(c.concat(d), "identifier", !0)), [ c, d ];
    }
    function Q() {
        this.evTarget = Xb, this.targetIds = {}, y.apply(this, arguments);
    }
    function R(a, b) {
        var c = t(a.touches), d = this.targetIds;
        if (b & (yb | zb) && 1 === c.length) return d[c[0].identifier] = !0, [ c, c ];
        var e, f, g = t(a.changedTouches), h = [], i = this.target;
        if (f = c.filter(function(a) {
            return p(a.target, i);
        }), b === yb) for (e = 0; e < f.length; ) d[f[e].identifier] = !0, e++;
        for (e = 0; e < g.length; ) d[g[e].identifier] && h.push(g[e]), b & (Ab | Bb) && delete d[g[e].identifier], 
        e++;
        return h.length ? [ u(f.concat(h), "identifier", !0), h ] : void 0;
    }
    function S() {
        y.apply(this, arguments);
        var a = k(this.handler, this);
        this.touch = new Q(this.manager, a), this.mouse = new M(this.manager, a);
    }
    function T(a, b) {
        this.manager = a, this.set(b);
    }
    function U(a) {
        if (q(a, bc)) return bc;
        var b = q(a, cc), c = q(a, dc);
        return b && c ? cc + " " + dc : b || c ? b ? cc : dc : q(a, ac) ? ac : _b;
    }
    function V(a) {
        this.id = w(), this.manager = null, this.options = i(a || {}, this.defaults), this.options.enable = m(this.options.enable, !0), 
        this.state = ec, this.simultaneous = {}, this.requireFail = [];
    }
    function W(a) {
        return a & jc ? "cancel" : a & hc ? "end" : a & gc ? "move" : a & fc ? "start" : "";
    }
    function X(a) {
        return a == Gb ? "down" : a == Fb ? "up" : a == Db ? "left" : a == Eb ? "right" : "";
    }
    function Y(a, b) {
        var c = b.manager;
        return c ? c.get(a) : a;
    }
    function Z() {
        V.apply(this, arguments);
    }
    function $() {
        Z.apply(this, arguments), this.pX = null, this.pY = null;
    }
    function _() {
        Z.apply(this, arguments);
    }
    function ab() {
        V.apply(this, arguments), this._timer = null, this._input = null;
    }
    function bb() {
        Z.apply(this, arguments);
    }
    function cb() {
        Z.apply(this, arguments);
    }
    function db() {
        V.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, 
        this._input = null, this.count = 0;
    }
    function eb(a, b) {
        return b = b || {}, b.recognizers = m(b.recognizers, eb.defaults.preset), new fb(a, b);
    }
    function fb(a, b) {
        b = b || {}, this.options = i(b, eb.defaults), this.options.inputTarget = this.options.inputTarget || a, 
        this.handlers = {}, this.session = {}, this.recognizers = [], this.element = a, 
        this.input = z(this), this.touchAction = new T(this, this.options.touchAction), 
        gb(this, !0), g(b.recognizers, function(a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
        }, this);
    }
    function gb(a, b) {
        var c = a.element;
        g(a.options.cssProps, function(a, d) {
            c.style[v(c.style, d)] = b ? a : "";
        });
    }
    function hb(a, c) {
        var d = b.createEvent("Event");
        d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d);
    }
    var ib = [ "", "webkit", "moz", "MS", "ms", "o" ], jb = b.createElement("div"), kb = "function", lb = Math.round, mb = Math.abs, nb = Date.now, ob = 1, pb = /mobile|tablet|ip(ad|hone|od)|android/i, qb = "ontouchstart" in a, rb = v(a, "PointerEvent") !== d, sb = qb && pb.test(navigator.userAgent), tb = "touch", ub = "pen", vb = "mouse", wb = "kinect", xb = 25, yb = 1, zb = 2, Ab = 4, Bb = 8, Cb = 1, Db = 2, Eb = 4, Fb = 8, Gb = 16, Hb = Db | Eb, Ib = Fb | Gb, Jb = Hb | Ib, Kb = [ "x", "y" ], Lb = [ "clientX", "clientY" ];
    y.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), 
            this.evWin && n(x(this.element), this.evWin, this.domHandler);
        },
        destroy: function() {
            this.evEl && o(this.element, this.evEl, this.domHandler), this.evTarget && o(this.target, this.evTarget, this.domHandler), 
            this.evWin && o(x(this.element), this.evWin, this.domHandler);
        }
    };
    var Mb = {
        mousedown: yb,
        mousemove: zb,
        mouseup: Ab
    }, Nb = "mousedown", Ob = "mousemove mouseup";
    j(M, y, {
        handler: function(a) {
            var b = Mb[a.type];
            b & yb && 0 === a.button && (this.pressed = !0), b & zb && 1 !== a.which && (b = Ab), 
            this.pressed && this.allow && (b & Ab && (this.pressed = !1), this.callback(this.manager, b, {
                pointers: [ a ],
                changedPointers: [ a ],
                pointerType: vb,
                srcEvent: a
            }));
        }
    });
    var Pb = {
        pointerdown: yb,
        pointermove: zb,
        pointerup: Ab,
        pointercancel: Bb,
        pointerout: Bb
    }, Qb = {
        2: tb,
        3: ub,
        4: vb,
        5: wb
    }, Rb = "pointerdown", Sb = "pointermove pointerup pointercancel";
    a.MSPointerEvent && (Rb = "MSPointerDown", Sb = "MSPointerMove MSPointerUp MSPointerCancel"), 
    j(N, y, {
        handler: function(a) {
            var b = this.store, c = !1, d = a.type.toLowerCase().replace("ms", ""), e = Pb[d], f = Qb[a.pointerType] || a.pointerType, g = f == tb, h = s(b, a.pointerId, "pointerId");
            e & yb && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ab | Bb) && (c = !0), 
            0 > h || (b[h] = a, this.callback(this.manager, e, {
                pointers: b,
                changedPointers: [ a ],
                pointerType: f,
                srcEvent: a
            }), c && b.splice(h, 1));
        }
    });
    var Tb = {
        touchstart: yb,
        touchmove: zb,
        touchend: Ab,
        touchcancel: Bb
    }, Ub = "touchstart", Vb = "touchstart touchmove touchend touchcancel";
    j(O, y, {
        handler: function(a) {
            var b = Tb[a.type];
            if (b === yb && (this.started = !0), this.started) {
                var c = P.call(this, a, b);
                b & (Ab | Bb) && 0 === c[0].length - c[1].length && (this.started = !1), this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: tb,
                    srcEvent: a
                });
            }
        }
    });
    var Wb = {
        touchstart: yb,
        touchmove: zb,
        touchend: Ab,
        touchcancel: Bb
    }, Xb = "touchstart touchmove touchend touchcancel";
    j(Q, y, {
        handler: function(a) {
            var b = Wb[a.type], c = R.call(this, a, b);
            c && this.callback(this.manager, b, {
                pointers: c[0],
                changedPointers: c[1],
                pointerType: tb,
                srcEvent: a
            });
        }
    }), j(S, y, {
        handler: function(a, b, c) {
            var d = c.pointerType == tb, e = c.pointerType == vb;
            if (d) this.mouse.allow = !1; else if (e && !this.mouse.allow) return;
            b & (Ab | Bb) && (this.mouse.allow = !0), this.callback(a, b, c);
        },
        destroy: function() {
            this.touch.destroy(), this.mouse.destroy();
        }
    });
    var Yb = v(jb.style, "touchAction"), Zb = Yb !== d, $b = "compute", _b = "auto", ac = "manipulation", bc = "none", cc = "pan-x", dc = "pan-y";
    T.prototype = {
        set: function(a) {
            a == $b && (a = this.compute()), Zb && (this.manager.element.style[Yb] = a), this.actions = a.toLowerCase().trim();
        },
        update: function() {
            this.set(this.manager.options.touchAction);
        },
        compute: function() {
            var a = [];
            return g(this.manager.recognizers, function(b) {
                l(b.options.enable, [ b ]) && (a = a.concat(b.getTouchAction()));
            }), U(a.join(" "));
        },
        preventDefaults: function(a) {
            if (!Zb) {
                var b = a.srcEvent, c = a.offsetDirection;
                if (this.manager.session.prevented) return void b.preventDefault();
                var d = this.actions, e = q(d, bc), f = q(d, dc), g = q(d, cc);
                return e || f && c & Hb || g && c & Ib ? this.preventSrc(b) : void 0;
            }
        },
        preventSrc: function(a) {
            this.manager.session.prevented = !0, a.preventDefault();
        }
    };
    var ec = 1, fc = 2, gc = 4, hc = 8, ic = hc, jc = 16, kc = 32;
    V.prototype = {
        defaults: {},
        set: function(a) {
            return h(this.options, a), this.manager && this.manager.touchAction.update(), this;
        },
        recognizeWith: function(a) {
            if (f(a, "recognizeWith", this)) return this;
            var b = this.simultaneous;
            return a = Y(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this;
        },
        dropRecognizeWith: function(a) {
            return f(a, "dropRecognizeWith", this) ? this : (a = Y(a, this), delete this.simultaneous[a.id], 
            this);
        },
        requireFailure: function(a) {
            if (f(a, "requireFailure", this)) return this;
            var b = this.requireFail;
            return a = Y(a, this), -1 === s(b, a) && (b.push(a), a.requireFailure(this)), this;
        },
        dropRequireFailure: function(a) {
            if (f(a, "dropRequireFailure", this)) return this;
            a = Y(a, this);
            var b = s(this.requireFail, a);
            return b > -1 && this.requireFail.splice(b, 1), this;
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0;
        },
        canRecognizeWith: function(a) {
            return !!this.simultaneous[a.id];
        },
        emit: function(a) {
            function b(b) {
                c.manager.emit(c.options.event + (b ? W(d) : ""), a);
            }
            var c = this, d = this.state;
            hc > d && b(!0), b(), d >= hc && b(!0);
        },
        tryEmit: function(a) {
            return this.canEmit() ? this.emit(a) : void (this.state = kc);
        },
        canEmit: function() {
            for (var a = 0; a < this.requireFail.length; ) {
                if (!(this.requireFail[a].state & (kc | ec))) return !1;
                a++;
            }
            return !0;
        },
        recognize: function(a) {
            var b = h({}, a);
            return l(this.options.enable, [ this, b ]) ? (this.state & (ic | jc | kc) && (this.state = ec), 
            this.state = this.process(b), void (this.state & (fc | gc | hc | jc) && this.tryEmit(b))) : (this.reset(), 
            void (this.state = kc));
        },
        process: function() {},
        getTouchAction: function() {},
        reset: function() {}
    }, j(Z, V, {
        defaults: {
            pointers: 1
        },
        attrTest: function(a) {
            var b = this.options.pointers;
            return 0 === b || a.pointers.length === b;
        },
        process: function(a) {
            var b = this.state, c = a.eventType, d = b & (fc | gc), e = this.attrTest(a);
            return d && (c & Bb || !e) ? b | jc : d || e ? c & Ab ? b | hc : b & fc ? b | gc : fc : kc;
        }
    }), j($, Z, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Jb
        },
        getTouchAction: function() {
            var a = this.options.direction, b = [];
            return a & Hb && b.push(dc), a & Ib && b.push(cc), b;
        },
        directionTest: function(a) {
            var b = this.options, c = !0, d = a.distance, e = a.direction, f = a.deltaX, g = a.deltaY;
            return e & b.direction || (b.direction & Hb ? (e = 0 === f ? Cb : 0 > f ? Db : Eb, 
            c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Cb : 0 > g ? Fb : Gb, 
            c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction;
        },
        attrTest: function(a) {
            return Z.prototype.attrTest.call(this, a) && (this.state & fc || !(this.state & fc) && this.directionTest(a));
        },
        emit: function(a) {
            this.pX = a.deltaX, this.pY = a.deltaY;
            var b = X(a.direction);
            b && this.manager.emit(this.options.event + b, a), this._super.emit.call(this, a);
        }
    }), j(_, Z, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [ bc ];
        },
        attrTest: function(a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & fc);
        },
        emit: function(a) {
            if (this._super.emit.call(this, a), 1 !== a.scale) {
                var b = a.scale < 1 ? "in" : "out";
                this.manager.emit(this.options.event + b, a);
            }
        }
    }), j(ab, V, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 500,
            threshold: 5
        },
        getTouchAction: function() {
            return [ _b ];
        },
        process: function(a) {
            var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold, f = a.deltaTime > b.time;
            if (this._input = a, !d || !c || a.eventType & (Ab | Bb) && !f) this.reset(); else if (a.eventType & yb) this.reset(), 
            this._timer = e(function() {
                this.state = ic, this.tryEmit();
            }, b.time, this); else if (a.eventType & Ab) return ic;
            return kc;
        },
        reset: function() {
            clearTimeout(this._timer);
        },
        emit: function(a) {
            this.state === ic && (a && a.eventType & Ab ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = nb(), 
            this.manager.emit(this.options.event, this._input)));
        }
    }), j(bb, Z, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [ bc ];
        },
        attrTest: function(a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & fc);
        }
    }), j(cb, Z, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .65,
            direction: Hb | Ib,
            pointers: 1
        },
        getTouchAction: function() {
            return $.prototype.getTouchAction.call(this);
        },
        attrTest: function(a) {
            var b, c = this.options.direction;
            return c & (Hb | Ib) ? b = a.velocity : c & Hb ? b = a.velocityX : c & Ib && (b = a.velocityY), 
            this._super.attrTest.call(this, a) && c & a.direction && a.distance > this.options.threshold && mb(b) > this.options.velocity && a.eventType & Ab;
        },
        emit: function(a) {
            var b = X(a.direction);
            b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a);
        }
    }), j(db, V, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [ ac ];
        },
        process: function(a) {
            var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold, f = a.deltaTime < b.time;
            if (this.reset(), a.eventType & yb && 0 === this.count) return this.failTimeout();
            if (d && f && c) {
                if (a.eventType != Ab) return this.failTimeout();
                var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0, h = !this.pCenter || I(this.pCenter, a.center) < b.posThreshold;
                this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, 
                this._input = a;
                var i = this.count % b.taps;
                if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function() {
                    this.state = ic, this.tryEmit();
                }, b.interval, this), fc) : ic;
            }
            return kc;
        },
        failTimeout: function() {
            return this._timer = e(function() {
                this.state = kc;
            }, this.options.interval, this), kc;
        },
        reset: function() {
            clearTimeout(this._timer);
        },
        emit: function() {
            this.state == ic && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
        }
    }), eb.VERSION = "2.0.4", eb.defaults = {
        domEvents: !1,
        touchAction: $b,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [ [ bb, {
            enable: !1
        } ], [ _, {
            enable: !1
        }, [ "rotate" ] ], [ cb, {
            direction: Hb
        } ], [ $, {
            direction: Hb
        }, [ "swipe" ] ], [ db ], [ db, {
            event: "doubletap",
            taps: 2
        }, [ "tap" ] ], [ ab ] ],
        cssProps: {
            userSelect: "default",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var lc = 1, mc = 2;
    fb.prototype = {
        set: function(a) {
            return h(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), 
            this.input.target = a.inputTarget, this.input.init()), this;
        },
        stop: function(a) {
            this.session.stopped = a ? mc : lc;
        },
        recognize: function(a) {
            var b = this.session;
            if (!b.stopped) {
                this.touchAction.preventDefaults(a);
                var c, d = this.recognizers, e = b.curRecognizer;
                (!e || e && e.state & ic) && (e = b.curRecognizer = null);
                for (var f = 0; f < d.length; ) c = d[f], b.stopped === mc || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), 
                !e && c.state & (fc | gc | hc) && (e = b.curRecognizer = c), f++;
            }
        },
        get: function(a) {
            if (a instanceof V) return a;
            for (var b = this.recognizers, c = 0; c < b.length; c++) if (b[c].options.event == a) return b[c];
            return null;
        },
        add: function(a) {
            if (f(a, "add", this)) return this;
            var b = this.get(a.options.event);
            return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), 
            a;
        },
        remove: function(a) {
            if (f(a, "remove", this)) return this;
            var b = this.recognizers;
            return a = this.get(a), b.splice(s(b, a), 1), this.touchAction.update(), this;
        },
        on: function(a, b) {
            var c = this.handlers;
            return g(r(a), function(a) {
                c[a] = c[a] || [], c[a].push(b);
            }), this;
        },
        off: function(a, b) {
            var c = this.handlers;
            return g(r(a), function(a) {
                b ? c[a].splice(s(c[a], b), 1) : delete c[a];
            }), this;
        },
        emit: function(a, b) {
            this.options.domEvents && hb(a, b);
            var c = this.handlers[a] && this.handlers[a].slice();
            if (c && c.length) {
                b.type = a, b.preventDefault = function() {
                    b.srcEvent.preventDefault();
                };
                for (var d = 0; d < c.length; ) c[d](b), d++;
            }
        },
        destroy: function() {
            this.element && gb(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), 
            this.element = null;
        }
    }, h(eb, {
        INPUT_START: yb,
        INPUT_MOVE: zb,
        INPUT_END: Ab,
        INPUT_CANCEL: Bb,
        STATE_POSSIBLE: ec,
        STATE_BEGAN: fc,
        STATE_CHANGED: gc,
        STATE_ENDED: hc,
        STATE_RECOGNIZED: ic,
        STATE_CANCELLED: jc,
        STATE_FAILED: kc,
        DIRECTION_NONE: Cb,
        DIRECTION_LEFT: Db,
        DIRECTION_RIGHT: Eb,
        DIRECTION_UP: Fb,
        DIRECTION_DOWN: Gb,
        DIRECTION_HORIZONTAL: Hb,
        DIRECTION_VERTICAL: Ib,
        DIRECTION_ALL: Jb,
        Manager: fb,
        Input: y,
        TouchAction: T,
        TouchInput: Q,
        MouseInput: M,
        PointerEventInput: N,
        TouchMouseInput: S,
        SingleTouchInput: O,
        Recognizer: V,
        AttrRecognizer: Z,
        Tap: db,
        Pan: $,
        Swipe: cb,
        Pinch: _,
        Rotate: bb,
        Press: ab,
        on: n,
        off: o,
        each: g,
        merge: i,
        extend: h,
        inherit: j,
        bindFn: k,
        prefixed: v
    }), typeof define == kb && define.amd ? define(function() {
        return eb;
    }) : "undefined" != typeof module && module.exports ? module.exports = eb : a[c] = eb;
}(window, document, "Hammer"), function(a) {
    "function" == typeof define && define.amd ? define([ "jquery", "hammerjs" ], a) : "object" == typeof exports ? a(require("jquery"), require("hammerjs")) : a(jQuery, Hammer);
}(function(a, b) {
    function c(c, d) {
        var e = a(c);
        e.data("hammer") || e.data("hammer", new b(e[0], d));
    }
    a.fn.hammer = function(a) {
        return this.each(function() {
            c(this, a);
        });
    }, b.Manager.prototype.emit = function(b) {
        return function(c, d) {
            b.call(this, c, d), a(this.element).trigger({
                type: c,
                gesture: d
            });
        };
    }(b.Manager.prototype.emit);
}), function(a) {
    a.fn.collapsible = function(b) {
        var c = {
            accordion: void 0
        };
        return b = a.extend(c, b), this.each(function() {
            function c(a) {
                f = e.find(".collapsible-header"), a.parent().toggleClass("active"), a.parent().hasClass("active") ? a.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1
                }) : a.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1
                }), f.not(a).parent().removeClass("active"), f.not(a).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1
                });
            }
            function d(a) {
                a.parent().toggleClass("active"), a.parent().hasClass("active") ? a.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1
                }) : a.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1
                });
            }
            var e = a(this), f = a(this).find(".collapsible-header"), g = e.data("collapsible");
            e.off("click.collapse", ".collapsible-header"), f.off("click.collapse"), b.accordion || "accordion" == g || void 0 == g ? (e.on("click.collapse", ".collapsible-header", function(b) {
                c(a(b.currentTarget));
            }), c(f.filter(".active").first())) : f.each(function() {
                a(this).on("click.collapse", function(b) {
                    d(a(b.currentTarget));
                }), a(this).hasClass("active") && d(a(this));
            });
        });
    }, a(document).ready(function() {
        a(".collapsible").collapsible();
    });
}(jQuery), function(a) {
    a.fn.scrollTo = function(b) {
        return a(this).scrollTop(a(this).scrollTop() - a(this).offset().top + a(b).offset().top), 
        this;
    }, a.fn.dropdown = function(b) {
        var c = {
            inDuration: 300,
            outDuration: 225,
            constrain_width: !0,
            hover: !0,
            alignment: "left",
            gutter: 0,
            belowOrigin: !1
        };
        b = a.extend(c, b), this.each(function() {
            function c() {
                void 0 != g.data("inDuration") && (b.inDuration = g.data("inDuration")), void 0 != g.data("outDuration") && (b.outDuration = g.data("outDuration")), 
                void 0 != g.data("constrainwidth") && (b.constrain_width = g.data("constrainwidth")), 
                void 0 != g.data("hover") && (b.hover = g.data("hover")), void 0 != g.data("alignment") && (b.alignment = g.data("alignment")), 
                void 0 != g.data("gutter") && (b.gutter = g.data("gutter")), void 0 != g.data("beloworigin") && (b.belowOrigin = g.data("beloworigin"));
            }
            function d() {
                c(), 1 == b.constrain_width && h.css("width", g.outerWidth());
                var d = 0;
                1 == b.belowOrigin && (d = g.height());
                var f = 0, j = b.gutter;
                "right" == b.alignment && (f = g.innerWidth() - h.innerWidth(), j = -1 * j), h.css(e(g[0]) ? {
                    display: "block",
                    position: "fixed",
                    height: 0,
                    top: g.offset().top - a(window).scrollTop() + d,
                    left: g.offset().left + f + j
                } : {
                    display: "block",
                    top: g.offset().top + d,
                    left: g.offset().left + f + j,
                    height: 0
                }), h.velocity({
                    opacity: 1
                }, {
                    duration: b.inDuration,
                    queue: !1,
                    easing: "easeOutQuad"
                }).velocity({
                    height: i
                }, {
                    duration: b.inDuration,
                    queue: !1,
                    easing: "easeOutCubic",
                    complete: function() {
                        h.css("overflow-y", "auto");
                    }
                });
            }
            function e(b) {
                var c = a(b), d = c.add(c.parents()), e = !1;
                return d.each(function() {
                    return "fixed" === a(this).css("position") ? (e = !0, !1) : void 0;
                }), e;
            }
            function f() {
                h.velocity({
                    opacity: 0
                }, {
                    duration: b.outDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        h.css({
                            display: "none",
                            "overflow-y": ""
                        });
                    }
                });
            }
            var g = a(this), h = a("#" + g.attr("data-activates"));
            c(), h.parent().is(a("body")) || (h.detach(), a("body").append(h));
            var i = h.height();
            b.hover ? (g.on("mouseover", function() {
                d();
            }), h.on("mouseleave", function() {
                f();
            })) : g.click(function(b) {
                b.preventDefault(), b.stopPropagation(), d(), a(document).bind("click." + h.attr("id"), function(b) {
                    h.is(b.target) || g.is(b.target) || (f(), a(document).unbind("click." + h.attr("id")));
                });
            }), g.on("open", d), g.on("close", f), a(document).on("resize", function() {});
        });
    };
}(jQuery), function(a) {
    a.fn.extend({
        openModal: function(b) {
            var c = this, d = a('<div id="lean-overlay"></div>');
            a("body").append(d);
            var e = {
                opacity: .5,
                in_duration: 300,
                out_duration: 200,
                ready: void 0,
                complete: void 0,
                dismissible: !0
            };
            b = a.extend(e, b), b.dismissible && (a("#lean-overlay").click(function() {
                a(c).closeModal(b);
            }), a(document).keyup(function(d) {
                27 === d.keyCode && (a(c).closeModal(b), a(this).off());
            })), a(c).find(".modal-close").click(function(d) {
                d.preventDefault(), a(c).closeModal(b);
            }), a("#lean-overlay").css({
                display: "block",
                opacity: 0
            }), a(c).css({
                display: "block",
                top: "4%",
                opacity: 0
            }), a("#lean-overlay").velocity({
                opacity: b.opacity
            }, {
                duration: b.in_duration,
                queue: !1,
                ease: "easeOutCubic"
            }), a(c).velocity({
                top: "10%",
                opacity: 1
            }, {
                duration: b.in_duration,
                queue: !1,
                ease: "easeOutCubic",
                complete: function() {
                    "function" == typeof b.ready && b.ready();
                }
            });
        }
    }), a.fn.extend({
        closeModal: function(b) {
            var c = {
                out_duration: 200,
                complete: void 0
            }, b = a.extend(c, b);
            a("#lean-overlay").velocity({
                opacity: 0
            }, {
                duration: b.out_duration,
                queue: !1,
                ease: "easeOutQuart"
            }), a(this).fadeOut(b.out_duration, function() {
                a(this).css({
                    top: 0
                }), a("#lean-overlay").css({
                    display: "none"
                }), "function" == typeof b.complete && b.complete(), a("#lean-overlay").remove();
            });
        }
    }), a.fn.extend({
        leanModal: function(b) {
            return this.each(function() {
                a(this).click(function(c) {
                    var d = a(this).attr("href");
                    a(d).openModal(b), c.preventDefault();
                });
            });
        }
    });
}(jQuery), function(a) {
    a.fn.materialbox = function() {
        return this.each(function() {
            function b() {
                d = !1;
                var b = g.parent(".material-placeholder"), e = (window.innerWidth, window.innerHeight, 
                g.data("width")), h = g.data("height");
                a("#materialbox-overlay").fadeOut(f, function() {
                    c = !1, a(this).remove();
                }), g.velocity({
                    width: e,
                    height: h,
                    left: 0,
                    top: 0
                }, {
                    duration: f,
                    queue: !1,
                    easing: "easeOutQuad"
                }), a(".materialbox-caption").velocity({
                    opacity: 0
                }, {
                    duration: f + 200,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function() {
                        b.css({
                            height: "",
                            width: "",
                            position: "",
                            top: "",
                            left: ""
                        }), g.css({
                            height: "",
                            position: "",
                            top: "",
                            left: "",
                            width: "",
                            "max-width": "",
                            position: "",
                            "z-index": ""
                        }), g.removeClass("active"), d = !0, a(this).remove();
                    }
                });
            }
            if (!a(this).hasClass("intialized")) {
                a(this).addClass("intialized");
                var c = !1, d = !0, e = 275, f = 200, g = a(this), h = a("<div></div>").addClass("material-placeholder");
                g.wrap(h), g.on("click", function() {
                    var f = g.parent(".material-placeholder"), h = window.innerWidth, i = window.innerHeight, j = g.width(), k = g.height();
                    if (d === !1) return !1;
                    if (c && d === !0) return b(), !1;
                    d = !1, g.addClass("active"), c = !0, f.css({
                        width: f[0].getBoundingClientRect().width,
                        height: f[0].getBoundingClientRect().height,
                        position: "relative",
                        top: 0,
                        left: 0
                    }), g.css({
                        position: "absolute",
                        "z-index": 1e3
                    }).data("width", j).data("height", k);
                    var l = a('<div id="materialbox-overlay"></div>').css({
                        opacity: 0
                    }).click(function() {
                        d === !0 && b();
                    });
                    if (a("body").append(l), l.velocity({
                        opacity: 1
                    }, {
                        duration: e,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), "" !== g.data("caption")) {
                        var m = a('<div class="materialbox-caption"></div>');
                        m.text(g.data("caption")), a("body").append(m), m.css({
                            display: "inline"
                        }), m.velocity({
                            opacity: 1
                        }, {
                            duration: e,
                            queue: !1,
                            easing: "easeOutQuad"
                        });
                    }
                    var n = 0, o = j / h, p = k / i, q = 0, r = 0;
                    o > p ? (n = k / j, q = .9 * h, r = .9 * h * n) : (n = j / k, q = .9 * i * n, r = .9 * i), 
                    g.hasClass("responsive-img") ? g.velocity({
                        "max-width": q,
                        width: j
                    }, {
                        duration: 0,
                        queue: !1,
                        complete: function() {
                            g.css({
                                left: 0,
                                top: 0
                            }).velocity({
                                height: r,
                                width: q,
                                left: a(document).scrollLeft() + h / 2 - g.parent(".material-placeholder").offset().left - q / 2,
                                top: a(document).scrollTop() + i / 2 - g.parent(".material-placeholder").offset().top - r / 2
                            }, {
                                duration: e,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    d = !0;
                                }
                            });
                        }
                    }) : g.css("left", 0).css("top", 0).velocity({
                        height: r,
                        width: q,
                        left: a(document).scrollLeft() + h / 2 - g.parent(".material-placeholder").offset().left - q / 2,
                        top: a(document).scrollTop() + i / 2 - g.parent(".material-placeholder").offset().top - r / 2
                    }, {
                        duration: e,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            d = !0;
                        }
                    });
                }), a(window).scroll(function() {
                    c && b();
                }), a(document).keyup(function(a) {
                    27 === a.keyCode && d === !0 && c && b();
                });
            }
        });
    }, a(document).ready(function() {
        a(".materialboxed").materialbox();
    });
}(jQuery), function(a) {
    a.fn.parallax = function() {
        var b = a(window).width();
        return this.each(function() {
            function c(c) {
                var e;
                e = 992 > b ? d.height() > 0 ? d.height() : d.children("img").height() : d.height() > 0 ? d.height() : 500;
                var f = d.children("img").height(), g = f - e, h = d.offset().top + e, i = d.offset().top, j = a(window).scrollTop(), k = window.innerHeight, l = j + k, m = (l - i) / (e + k), n = -1 * g * m;
                h > j && j + k > i && d.children("img").first().css("bottom", n + "px"), c && d.children("img").first().css("display", "block");
            }
            var d = a(this);
            d.addClass("parallax"), d.children("img").load(function() {
                c(!0);
            }), a(window).scroll(function() {
                b = a(window).width(), c(!1);
            }), a(window).resize(function() {
                b = a(window).width(), c(!1);
            });
        });
    };
}(jQuery), function(a) {
    var b = {
        init: function() {
            return this.each(function() {
                var b = a(this);
                a(window).width(), b.width("100%");
                var c = a(this).children("li").length;
                b.children("li").each(function() {
                    a(this).width(100 / c + "%");
                });
                var d, e, f = b.find("li.tab a"), g = b.width(), h = b.find("li").first().outerWidth(), i = 0;
                d = a(f.filter('[href="' + location.hash + '"]')), 0 === d.length && (d = a(this).find("li.tab a.active").first()), 
                0 === d.length && (d = a(this).find("li.tab a").first()), d.addClass("active"), 
                i = f.index(d), 0 > i && (i = 0), e = a(d[0].hash), b.append('<div class="indicator"></div>');
                var j = b.find(".indicator");
                b.is(":visible") && (j.css({
                    right: g - (i + 1) * h
                }), j.css({
                    left: i * h
                })), a(window).resize(function() {
                    g = b.width(), h = b.find("li").first().outerWidth(), 0 > i && (i = 0), 0 !== h && 0 !== g && (j.css({
                        right: g - (i + 1) * h
                    }), j.css({
                        left: i * h
                    }));
                }), f.not(d).each(function() {
                    a(this.hash).hide();
                }), b.on("click", "a", function(c) {
                    g = b.width(), h = b.find("li").first().outerWidth(), d.removeClass("active"), e.hide(), 
                    d = a(this), e = a(this.hash), f = b.find("li.tab a"), d.addClass("active");
                    var k = i;
                    i = f.index(a(this)), 0 > i && (i = 0), e.show(), i - k >= 0 ? (j.velocity({
                        right: g - (i + 1) * h
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), j.velocity({
                        left: i * h
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        delay: 90
                    })) : (j.velocity({
                        left: i * h
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), j.velocity({
                        right: g - (i + 1) * h
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        delay: 90
                    })), c.preventDefault();
                });
            });
        },
        select_tab: function(a) {
            this.find('a[href="#' + a + '"]').trigger("click");
        }
    };
    a.fn.tabs = function(c) {
        return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.tooltip") : b.init.apply(this, arguments);
    }, a(document).ready(function() {
        a("ul.tabs").tabs();
    });
}(jQuery), function(a) {
    a.fn.tooltip = function(b) {
        var c = null, d = !1, e = null, f = 5, g = {
            delay: 350
        };
        return b = a.extend(g, b), a(".material-tooltip").remove(), this.each(function() {
            var g = a(this), h = a("<span></span>").text(g.attr("data-tooltip")), i = a("<div></div>");
            i.addClass("material-tooltip").append(h), i.appendTo(a("body"));
            var j = a("<div></div>").addClass("backdrop");
            j.appendTo(i), j.css({
                top: 0,
                left: 0
            }), a(this).off("mouseenter mouseleave"), a(this).on({
                mouseenter: function(a) {
                    a.stopPropagation();
                    var h = g.data("delay");
                    h = void 0 == h || "" == h ? b.delay : h, c = 0, e = setInterval(function() {
                        if (c += 10, c >= h && 0 == d) {
                            d = !0, i.css({
                                display: "block",
                                left: "0px",
                                top: "0px"
                            }), i.children("span").text(g.attr("data-tooltip"));
                            var a = g.outerWidth(), b = g.outerHeight(), e = g.attr("data-position"), k = i.outerHeight(), l = i.outerWidth(), m = "0px", n = "0px", o = 8;
                            "top" === e ? (i.css({
                                top: g.offset().top - k - f,
                                left: g.offset().left + a / 2 - l / 2
                            }), m = "-10px", j.css({
                                borderRadius: "14px 14px 0 0",
                                transformOrigin: "50% 90%",
                                marginTop: k,
                                marginLeft: l / 2 - j.width() / 2
                            })) : "left" === e ? (i.css({
                                top: g.offset().top + b / 2 - k / 2,
                                left: g.offset().left - l - f
                            }), n = "-10px", j.css({
                                width: "14px",
                                height: "14px",
                                borderRadius: "14px 0 0 14px",
                                transformOrigin: "95% 50%",
                                marginTop: k / 2,
                                marginLeft: l
                            })) : "right" === e ? (i.css({
                                top: g.offset().top + b / 2 - k / 2,
                                left: g.offset().left + a + f
                            }), n = "+10px", j.css({
                                width: "14px",
                                height: "14px",
                                borderRadius: "0 14px 14px 0",
                                transformOrigin: "5% 50%",
                                marginTop: k / 2,
                                marginLeft: "0px"
                            })) : (i.css({
                                top: g.offset().top + g.outerHeight() + f,
                                left: g.offset().left + a / 2 - l / 2
                            }), m = "+10px", j.css({
                                marginLeft: l / 2 - j.width() / 2
                            })), o = l / 8, 8 > o && (o = 8), ("right" === e || "left" === e) && (o = l / 10, 
                            6 > o && (o = 6)), i.velocity({
                                opacity: 1,
                                marginTop: m,
                                marginLeft: n
                            }, {
                                duration: 350,
                                queue: !1
                            }), j.css({
                                display: "block"
                            }).velocity({
                                opacity: 1
                            }, {
                                duration: 55,
                                delay: 0,
                                queue: !1
                            }).velocity({
                                scale: o
                            }, {
                                duration: 300,
                                delay: 0,
                                queue: !1,
                                easing: "easeInOutQuad"
                            });
                        }
                    }, 10);
                },
                mouseleave: function() {
                    clearInterval(e), c = 0, i.velocity({
                        opacity: 0,
                        marginTop: 0,
                        marginLeft: 0
                    }, {
                        duration: 225,
                        queue: !1,
                        delay: 275
                    }), j.velocity({
                        opacity: 0,
                        scale: 1
                    }, {
                        duration: 225,
                        delay: 275,
                        queue: !1,
                        complete: function() {
                            j.css("display", "none"), i.css("display", "none"), d = !1;
                        }
                    });
                }
            });
        });
    }, a(document).ready(function() {
        a(".tooltipped").tooltip();
    });
}(jQuery), function(a) {
    "use strict";
    function b(a) {
        return null !== a && a === a.window;
    }
    function c(a) {
        return b(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    function d(a) {
        var b, d, e = {
            top: 0,
            left: 0
        }, f = a && a.ownerDocument;
        return b = f.documentElement, "undefined" != typeof a.getBoundingClientRect && (e = a.getBoundingClientRect()), 
        d = c(f), {
            top: e.top + d.pageYOffset - b.clientTop,
            left: e.left + d.pageXOffset - b.clientLeft
        };
    }
    function e(a) {
        var b = "";
        for (var c in a) a.hasOwnProperty(c) && (b += c + ":" + a[c] + ";");
        return b;
    }
    function f(a) {
        if (k.allowEvent(a) === !1) return null;
        for (var b = null, c = a.target || a.srcElement; null !== c.parentElement; ) {
            if (-1 !== c.className.indexOf("waves-effect")) {
                b = c;
                break;
            }
            c = c.parentElement;
        }
        return b;
    }
    function g(b) {
        var c = f(b);
        null !== c && (j.show(b, c), "ontouchstart" in a && (c.addEventListener("touchend", j.hide, !1), 
        c.addEventListener("touchcancel", j.hide, !1)), c.addEventListener("mouseup", j.hide, !1), 
        c.addEventListener("mouseleave", j.hide, !1));
    }
    var h = h || {}, i = document.querySelectorAll.bind(document), j = {
        duration: 750,
        show: function(a, b) {
            if (2 === a.button) return !1;
            var c = b || this, f = document.createElement("div");
            f.className = "waves-ripple", c.appendChild(f);
            var g = d(c), h = a.pageY - g.top, i = a.pageX - g.left, k = "scale(" + c.clientWidth / 100 * 10 + ")";
            "touches" in a && (h = a.touches[0].pageY - g.top, i = a.touches[0].pageX - g.left), 
            f.setAttribute("data-hold", Date.now()), f.setAttribute("data-scale", k), f.setAttribute("data-x", i), 
            f.setAttribute("data-y", h);
            var l = {
                top: h + "px",
                left: i + "px"
            };
            f.className = f.className + " waves-notransition", f.setAttribute("style", e(l)), 
            f.className = f.className.replace("waves-notransition", ""), l["-webkit-transform"] = k, 
            l["-moz-transform"] = k, l["-ms-transform"] = k, l["-o-transform"] = k, l.transform = k, 
            l.opacity = "1", l["-webkit-transition-duration"] = j.duration + "ms", l["-moz-transition-duration"] = j.duration + "ms", 
            l["-o-transition-duration"] = j.duration + "ms", l["transition-duration"] = j.duration + "ms", 
            l["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", 
            l["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", 
            l["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", 
            l["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", f.setAttribute("style", e(l));
        },
        hide: function(a) {
            k.touchup(a);
            var b = this, c = (1.4 * b.clientWidth, null), d = b.getElementsByClassName("waves-ripple");
            if (!(d.length > 0)) return !1;
            c = d[d.length - 1];
            var f = c.getAttribute("data-x"), g = c.getAttribute("data-y"), h = c.getAttribute("data-scale"), i = Date.now() - Number(c.getAttribute("data-hold")), l = 350 - i;
            0 > l && (l = 0), setTimeout(function() {
                var a = {
                    top: g + "px",
                    left: f + "px",
                    opacity: "0",
                    "-webkit-transition-duration": j.duration + "ms",
                    "-moz-transition-duration": j.duration + "ms",
                    "-o-transition-duration": j.duration + "ms",
                    "transition-duration": j.duration + "ms",
                    "-webkit-transform": h,
                    "-moz-transform": h,
                    "-ms-transform": h,
                    "-o-transform": h,
                    transform: h
                };
                c.setAttribute("style", e(a)), setTimeout(function() {
                    try {
                        b.removeChild(c);
                    } catch (a) {
                        return !1;
                    }
                }, j.duration);
            }, l);
        },
        wrapInput: function(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if ("input" === c.tagName.toLowerCase()) {
                    var d = c.parentNode;
                    if ("i" === d.tagName.toLowerCase() && -1 !== d.className.indexOf("waves-effect")) continue;
                    var e = document.createElement("i");
                    e.className = c.className + " waves-input-wrapper";
                    var f = c.getAttribute("style");
                    f || (f = ""), e.setAttribute("style", f), c.className = "waves-button-input", c.removeAttribute("style"), 
                    d.replaceChild(e, c), e.appendChild(c);
                }
            }
        }
    }, k = {
        touches: 0,
        allowEvent: function(a) {
            var b = !0;
            return "touchstart" === a.type ? k.touches += 1 : "touchend" === a.type || "touchcancel" === a.type ? setTimeout(function() {
                k.touches > 0 && (k.touches -= 1);
            }, 500) : "mousedown" === a.type && k.touches > 0 && (b = !1), b;
        },
        touchup: function(a) {
            k.allowEvent(a);
        }
    };
    h.displayEffect = function(b) {
        b = b || {}, "duration" in b && (j.duration = b.duration), j.wrapInput(i(".waves-effect")), 
        "ontouchstart" in a && document.body.addEventListener("touchstart", g, !1), document.body.addEventListener("mousedown", g, !1);
    }, h.attach = function(b) {
        "input" === b.tagName.toLowerCase() && (j.wrapInput([ b ]), b = b.parentElement), 
        "ontouchstart" in a && b.addEventListener("touchstart", g, !1), b.addEventListener("mousedown", g, !1);
    }, a.Waves = h, document.addEventListener("DOMContentLoaded", function() {
        h.displayEffect();
    }, !1);
}(window), function(a) {
    var b = {
        init: function(b) {
            var c = {
                menuWidth: 240,
                edge: "left",
                closeOnClick: !1
            };
            b = a.extend(c, b), a(this).each(function() {
                function c() {
                    f = !1, g = !1, a("#sidenav-overlay").velocity({
                        opacity: 0
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            a(this).remove();
                        }
                    }), "left" === b.edge ? (a(".drag-target").css({
                        width: "",
                        right: "",
                        left: "0"
                    }), e.velocity({
                        left: -1 * (b.menuWidth + 10)
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic"
                    })) : (a(".drag-target").css({
                        width: "",
                        right: "0",
                        left: ""
                    }), e.velocity({
                        right: -1 * (b.menuWidth + 10)
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic"
                    }));
                }
                var d = a(this), e = a("#" + d.attr("data-activates"));
                240 != b.menuWidth && (e.css("width", b.menuWidth), e.hasClass("fixed") || e.css("left", -1 * (b.menuWidth + 10))), 
                "left" != b.edge && e.addClass("right-aligned"), a("body").append(a('<div class="drag-target"></div>')), 
                a(".drag-target").css("left" === b.edge ? {
                    left: 0
                } : {
                    right: 0
                }), e.hasClass("fixed") && a(window).resize(function() {
                    a(window).width() > 1200 && e.attr("style") && (e.removeAttr("style"), e.css("width", b.menuWidth)), 
                    0 != a("#sidenav-overlay").css("opacity") && g && a("#sidenav-overlay").trigger("click");
                }), 1 == b.closeOnClick && e.on("click.itemclick", "a:not(.collapsible-header)", function() {
                    c();
                });
                var f = !1, g = !1;
                a(".drag-target").hammer({
                    prevent_default: !1
                }).bind("tap", function() {
                    a("#sidenav-overlay").trigger("click");
                }).bind("pan", function(d) {
                    if ("touch" === d.gesture.pointerType) {
                        var f = (d.gesture.direction, d.gesture.center.x);
                        if (d.gesture.center.y, d.gesture.velocityX, !a("#sidenav-overlay").length) {
                            var h = a('<div id="sidenav-overlay"></div>');
                            h.css("opacity", 0).click(function() {
                                c();
                            }), a("body").append(h);
                        }
                        if ("left" === b.edge ? f > b.menuWidth ? f = b.menuWidth : 0 > f && (f = 0) : f < a(window).width() - b.menuWidth && (f = a(window).width() - b.menuWidth), 
                        "left" === b.edge ? f < b.menuWidth / 2 ? g = !1 : f >= b.menuWidth / 2 && (g = !0) : f < a(window).width() - b.menuWidth / 2 ? g = !0 : f >= a(window).width() - b.menuWidth / 2 && (g = !1), 
                        "left" === b.edge ? e.css("left", f - b.menuWidth) : e.css("right", -1 * (f - b.menuWidth / 2)), 
                        "left" === b.edge) {
                            var i = f / b.menuWidth;
                            a("#sidenav-overlay").velocity({
                                opacity: i
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            });
                        } else {
                            var i = Math.abs((f - a(window).width()) / b.menuWidth);
                            a("#sidenav-overlay").velocity({
                                opacity: i
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            });
                        }
                    }
                }).bind("panend", function(c) {
                    if ("touch" === c.gesture.pointerType) {
                        var d = c.gesture.velocityX;
                        f = !1, "left" === b.edge ? g || -.5 > d ? (e.velocity({
                            left: 0
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), a("#sidenav-overlay").velocity({
                            opacity: 1
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), a(".drag-target").css({
                            width: "50%",
                            right: 0,
                            left: ""
                        })) : (!g || d > .3) && (e.velocity({
                            left: -240
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), a("#sidenav-overlay").velocity({
                            opacity: 0
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                a(this).remove();
                            }
                        }), a(".drag-target").css({
                            width: "10%",
                            right: "",
                            left: 0
                        })) : g || d > .5 ? (e.velocity({
                            right: 0
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), a("#sidenav-overlay").velocity({
                            opacity: 1
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), a(".drag-target").css({
                            width: "50%",
                            right: "",
                            left: 0
                        })) : (!g || -.3 > d) && (e.velocity({
                            right: -240
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), a("#sidenav-overlay").velocity({
                            opacity: 0
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                a(this).remove();
                            }
                        }), a(".drag-target").css({
                            width: "10%",
                            right: 0,
                            left: ""
                        }));
                    }
                }), d.click(function() {
                    if (e.hasClass("active")) g = !1, f = !1, c(); else {
                        "left" === b.edge ? (a(".drag-target").css({
                            width: "50%",
                            right: 0,
                            left: ""
                        }), e.velocity({
                            left: 0
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })) : (a(".drag-target").css({
                            width: "50%",
                            right: "",
                            left: 0
                        }), e.velocity({
                            right: 0
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }));
                        var d = a('<div id="sidenav-overlay"></div>');
                        d.css("opacity", 0).click(function() {
                            g = !1, f = !1, c(), d.animate({
                                opacity: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    a(this).remove();
                                }
                            });
                        }), a("body").append(d), d.animate({
                            opacity: 1
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                g = !0, f = !1;
                            }
                        });
                    }
                    return !1;
                });
            });
        },
        show: function() {
            this.trigger("click");
        },
        hide: function() {
            a("#sidenav-overlay").trigger("click");
        }
    };
    a.fn.sideNav = function(c) {
        return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.tooltip") : b.init.apply(this, arguments);
    };
}(jQuery), function(a) {
    function b(b, c, d, e) {
        var f = a();
        return a.each(g, function(a, g) {
            if (g.height() > 0) {
                var h = g.offset().top, i = g.offset().left, j = i + g.width(), k = h + g.height(), l = !(i > c || e > j || h > d || b > k);
                l && f.push(g);
            }
        }), f;
    }
    function c() {
        ++j;
        var c = f.scrollTop(), d = f.scrollLeft(), e = d + f.width(), g = c + f.height(), i = b(c + k.top + 200, e + k.right, g + k.bottom, d + k.left);
        a.each(i, function(a, b) {
            var c = b.data("scrollSpy:ticks");
            "number" != typeof c && b.triggerHandler("scrollSpy:enter"), b.data("scrollSpy:ticks", j);
        }), a.each(h, function(a, b) {
            var c = b.data("scrollSpy:ticks");
            "number" == typeof c && c !== j && (b.triggerHandler("scrollSpy:exit"), b.data("scrollSpy:ticks", null));
        }), h = i;
    }
    function d() {
        f.trigger("scrollSpy:winSize");
    }
    function e(a, b, c) {
        var d, e, f, g = null, h = 0;
        c || (c = {});
        var i = function() {
            h = c.leading === !1 ? 0 : l(), g = null, f = a.apply(d, e), d = e = null;
        };
        return function() {
            var j = l();
            h || c.leading !== !1 || (h = j);
            var k = b - (j - h);
            return d = this, e = arguments, 0 >= k ? (clearTimeout(g), g = null, h = j, f = a.apply(d, e), 
            d = e = null) : g || c.trailing === !1 || (g = setTimeout(i, k)), f;
        };
    }
    var f = a(window), g = [], h = [], i = !1, j = 0, k = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }, l = Date.now || function() {
        return new Date().getTime();
    };
    a.scrollSpy = function(b, d) {
        var h = [];
        b = a(b), b.each(function(b, c) {
            g.push(a(c)), a(c).data("scrollSpy:id", b), a("a[href=#" + a(c).attr("id") + "]").click(function(b) {
                b.preventDefault();
                var c = a(this.hash).offset().top + 1;
                a(".tabs-wrapper").length ? a("html, body").animate({
                    scrollTop: c - 60
                }, {
                    duration: 400,
                    easing: "easeOutCubic"
                }) : a("html, body").animate({
                    scrollTop: c
                }, {
                    duration: 400,
                    easing: "easeOutCubic"
                });
            });
        }), d = d || {
            throttle: 100
        }, k.top = d.offsetTop || 0, k.right = d.offsetRight || 0, k.bottom = d.offsetBottom || 0, 
        k.left = d.offsetLeft || 0;
        var j = e(c, d.throttle || 100), l = function() {
            a(document).ready(j);
        };
        return i || (f.on("scroll", l), f.on("resize", l), i = !0), setTimeout(l, 0), b.on("scrollSpy:enter", function() {
            h = a.grep(h, function(a) {
                return 0 != a.height();
            });
            var b = a(this);
            h[0] ? (a("a[href=#" + h[0].attr("id") + "]").removeClass("active"), b.data("scrollSpy:id") < h[0].data("scrollSpy:id") ? h.unshift(a(this)) : h.push(a(this))) : h.push(a(this)), 
            a("a[href=#" + h[0].attr("id") + "]").addClass("active");
        }), b.on("scrollSpy:exit", function() {
            if (h = a.grep(h, function(a) {
                return 0 != a.height();
            }), h[0]) {
                a("a[href=#" + h[0].attr("id") + "]").removeClass("active");
                var b = a(this);
                h = a.grep(h, function(a) {
                    return a.attr("id") != b.attr("id");
                }), h[0] && a("a[href=#" + h[0].attr("id") + "]").addClass("active");
            }
        }), b;
    }, a.winSizeSpy = function(b) {
        return a.winSizeSpy = function() {
            return f;
        }, b = b || {
            throttle: 100
        }, f.on("resize", e(d, b.throttle || 100));
    }, a.fn.scrollSpy = function(b) {
        return a.scrollSpy(a(this), b);
    };
}(jQuery), function(a) {
    a(document).ready(function() {
        var b = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
        if (a(document).on("change", b, function() {
            0 !== a(this).val().length && a(this).siblings("label, i").addClass("active"), validate_field(a(this));
        }), a(document).ready(function() {
            a(b).each(function(b, c) {
                a(c).val().length > 0 && a(this).siblings("label, i").addClass("active");
            });
        }), a(document).on("reset", function(c) {
            a(c.target).is("form") && (a(this).find(b).removeClass("valid").removeClass("invalid"), 
            a(this).find("select.initialized").each(function() {
                var b = a(this).find("option[selected]").text();
                a(this).siblings("input.select-dropdown").val(b);
            }));
        }), a(document).on("focus", b, function() {
            a(this).siblings("label, i").addClass("active");
        }), a(document).on("blur", b, function() {
            0 === a(this).val().length && a(this).siblings("label, i").removeClass("active"), 
            validate_field(a(this));
        }), validate_field = function(a) {
            0 === a.val().length ? a.hasClass("validate") && (a.removeClass("valid"), a.removeClass("invalid")) : a.hasClass("validate") && (a.is(":valid") ? (a.removeClass("invalid"), 
            a.addClass("valid")) : (a.removeClass("valid"), a.addClass("invalid")));
        }, 0 === a(".hiddendiv").length) {
            var c = a('<div class="hiddendiv common"></div>'), d = null;
            a("body").append(c);
        }
        var e = ".materialize-textarea";
        a(".hiddendiv").css("width", a(e).width()), a(e).each(function() {
            a(this).val().length && (d = a(this).val(), d = d.replace(/\n/g, "<br>"), c.html(d + "<br>"), 
            a(this).css("height", c.height()));
        }), a("body").on("keyup keydown", e, function() {
            d = a(this).val(), d = d.replace(/\n/g, "<br>"), c.html(d + "<br>"), a(this).css("height", c.height());
        }), a(".file-field").each(function() {
            var b = a(this).find("input.file-path");
            a(this).find('input[type="file"]').change(function() {
                b.val(a(this).val()), b.trigger("change");
            });
        });
        var f = "input[type=range]", g = !1;
        a(f).each(function() {
            var b = a('<span class="thumb"><span class="value"></span></span>');
            a(this).after(b);
        });
        var h = ".range-field";
        a(document).on("mousedown", h, function(b) {
            var c = a(this).children(".thumb");
            c.length <= 0 && (c = a('<span class="thumb"><span class="value"></span></span>'), 
            a(this).append(c)), g = !0, a(this).addClass("active"), c.hasClass("active") || c.velocity({
                height: "30px",
                width: "30px",
                top: "-20px",
                marginLeft: "-15px"
            }, {
                duration: 300,
                easing: "easeOutExpo"
            });
            var d = b.pageX - a(this).offset().left, e = a(this).outerWidth();
            0 > d ? d = 0 : d > e && (d = e), c.addClass("active").css("left", d), c.find(".value").html(a(this).children("input[type=range]").val());
        }), a(document).on("mouseup", h, function() {
            g = !1, a(this).removeClass("active");
        }), a(document).on("mousemove", h, function(b) {
            var c = a(this).children(".thumb");
            if (g) {
                c.hasClass("active") || c.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                });
                var d = b.pageX - a(this).offset().left, e = a(this).outerWidth();
                0 > d ? d = 0 : d > e && (d = e), c.addClass("active").css("left", d), c.find(".value").html(a(this).children("input[type=range]").val());
            }
        }), a(document).on("mouseout", h, function() {
            if (!g) {
                var b = a(this).children(".thumb");
                b.hasClass("active") && b.velocity({
                    height: "0",
                    width: "0",
                    top: "10px",
                    marginLeft: "-6px"
                }, {
                    duration: 100
                }), b.removeClass("active");
            }
        }), a.fn.material_select = function(b) {
            a(this).each(function() {
                if ($select = a(this), !$select.hasClass("browser-default") && !$select.hasClass("initialized")) {
                    var c = i(), d = a('<div class="select-wrapper"></div>'), e = a('<ul id="select-options-' + c + '" class="dropdown-content select-dropdown"></ul>'), f = $select.children("option");
                    if (void 0 !== $select.find("option:selected")) var g = $select.find("option:selected"); else var g = e.first();
                    f.each(function() {
                        e.append(a('<li class="' + (a(this).is(":disabled") ? "disabled" : "") + '"><span>' + a(this).html() + "</span></li>"));
                    }), e.find("li").each(function(c) {
                        var d = $select;
                        a(this).click(function() {
                            a(this).hasClass("disabled") || (d.find("option").eq(c).prop("selected", !0), d.trigger("change"), 
                            d.siblings("input.select-dropdown").val(a(this).text()), "undefined" != typeof b && b());
                        });
                    }), $select.wrap(d);
                    var h = a('<input type="text" class="select-dropdown" readonly="true" ' + ($select.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + c + '" value="' + g.html() + '"/><i class="mdi-navigation-arrow-drop-down">');
                    $select.before(h), a("body").append(e), $select.is(":disabled") || h.dropdown({
                        hover: !1
                    }), $select.addClass("initialized"), h.on("focus", function() {
                        a(this).trigger("open"), g = a(this).val(), selectedOption = e.find("li").filter(function() {
                            return a(this).text().toLowerCase() === g.toLowerCase();
                        })[0], activateOption(e, selectedOption);
                    }), h.on("blur", function() {
                        a(this).trigger("close");
                    }), activateOption = function(b, c) {
                        b.find("li.active").removeClass("active"), a(c).addClass("active"), b.scrollTo(c);
                    }, filterQuery = [], onKeyDown = function(b) {
                        return 9 == b.which ? void h.trigger("close") : 40 != b.which || e.is(":visible") ? void ((13 != b.which || e.is(":visible")) && (b.preventDefault(), 
                        letter = String.fromCharCode(b.which).toLowerCase(), letter && (filterQuery.push(letter), 
                        string = filterQuery.join(""), newOption = e.find("li").filter(function() {
                            return 0 === a(this).text().toLowerCase().indexOf(string);
                        })[0], newOption && activateOption(e, newOption)), 13 == b.which && (activeOption = e.find("li.active:not(.disabled)")[0], 
                        activeOption && (a(activeOption).trigger("click"), h.trigger("close"))), 40 == b.which && (newOption = e.find("li.active").next("li:not(.disabled)")[0], 
                        newOption && activateOption(e, newOption)), 27 == b.which && h.trigger("close"), 
                        38 == b.which && (newOption = e.find("li.active").prev("li:not(.disabled)")[0], 
                        newOption && activateOption(e, newOption)), setTimeout(function() {
                            filterQuery = [];
                        }, 1e3))) : void h.trigger("open");
                    }, h.on("keydown", onKeyDown);
                }
            });
        };
        var i = function() {
            function a() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
            }
            return function() {
                return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a();
            };
        }();
    });
}(jQuery), function(a) {
    a.fn.slider = function(b) {
        var c = {
            indicators: !0,
            height: 400,
            transition: 500,
            interval: 6e4
        };
        return b = a.extend(c, b), this.each(function() {
            function c(a, b) {
                a.hasClass("center-align") ? a.velocity({
                    opacity: 0,
                    translateY: -100
                }, {
                    duration: b,
                    queue: !1
                }) : a.hasClass("right-align") ? a.velocity({
                    opacity: 0,
                    translateX: 100
                }, {
                    duration: b,
                    queue: !1
                }) : a.hasClass("left-align") && a.velocity({
                    opacity: 0,
                    translateX: -100
                }, {
                    duration: b,
                    queue: !1
                });
            }
            function d(a) {
                console.log("Move to slide"), a >= h.length ? a = 0 : 0 > a && (a = h.length - 1), 
                i = g.find(".active").index(), i != a && (e = h.eq(i), $caption = e.find(".caption"), 
                e.removeClass("active"), e.velocity({
                    opacity: 0
                }, {
                    duration: b.transition,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function() {
                        h.not(".active").velocity({
                            opacity: 0,
                            translateX: 0,
                            translateY: 0
                        }, {
                            duration: 0,
                            queue: !1
                        });
                    }
                }), c($caption, b.transition), b.indicators && j.eq(i).removeClass("active"), h.eq(a).velocity({
                    opacity: 1
                }, {
                    duration: b.transition,
                    queue: !1,
                    easing: "easeOutQuad"
                }), h.eq(a).find(".caption").velocity({
                    opacity: 1,
                    translateX: 0,
                    translateY: 0
                }, {
                    duration: b.transition,
                    delay: b.transition,
                    queue: !1,
                    easing: "easeOutQuad"
                }), h.eq(a).addClass("active"), b.indicators && j.eq(a).addClass("active"));
            }
            var e, f = a(this), g = f.find("ul.slides").first(), h = g.find("li"), i = g.find(".active").index();
            if (-1 != i && (e = h.eq(i)), 400 != b.height && (f.height(b.height + 40), g.height(b.height)), 
            h.find(".caption").each(function() {
                c(a(this), 0);
            }), h.find("img").each(function() {
                a(this).css("background-image", "url(" + a(this).attr("src") + ")"), a(this).attr("src", "");
            }), b.indicators) {
                var j = a('<ul class="indicators"></ul>');
                h.each(function() {
                    var c = a('<li class="indicator-item"></li>');
                    c.click(function() {
                        var c = g.parent(), e = c.find(a(this)).index();
                        d(e), clearInterval($interval), $interval = setInterval(function() {
                            i = g.find(".active").index(), h.length == i + 1 ? i = 0 : i += 1, d(i);
                        }, b.transition + b.interval);
                    }), j.append(c);
                }), f.append(j), j = f.find("ul.indicators").find("li.indicator-item");
            }
            e ? e.show() : (h.first().addClass("active").velocity({
                opacity: 1
            }, {
                duration: b.transition,
                queue: !1,
                easing: "easeOutQuad"
            }), i = 0, e = h.eq(i), b.indicators && j.eq(i).addClass("active")), e.find("img").each(function() {
                e.find(".caption").velocity({
                    opacity: 1,
                    translateX: 0,
                    translateY: 0
                }, {
                    duration: b.transition,
                    queue: !1,
                    easing: "easeOutQuad"
                });
            }), $interval = setInterval(function() {
                i = g.find(".active").index(), d(i + 1);
            }, b.transition + b.interval);
            var k = !1, l = !1, m = !1;
            f.hammer({
                prevent_default: !1
            }).bind("pan", function(a) {
                if ("touch" === a.gesture.pointerType) {
                    clearInterval($interval);
                    var b = a.gesture.direction, c = a.gesture.deltaX, d = a.gesture.velocityX;
                    $curr_slide = g.find(".active"), $curr_slide.velocity({
                        translateX: c
                    }, {
                        duration: 50,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), 4 === b && (c > f.innerWidth() / 2 || -.65 > d) ? m = !0 : 2 === b && (c < -1 * f.innerWidth() / 2 || d > .65) && (l = !0);
                    var e;
                    l && (e = $curr_slide.next(), 0 === e.length && (e = h.first()), e.velocity({
                        opacity: 1
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    })), m && (e = $curr_slide.prev(), 0 === e.length && (e = h.last()), e.velocity({
                        opacity: 1
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }));
                }
            }).bind("panend", function(a) {
                "touch" === a.gesture.pointerType && ($curr_slide = g.find(".active"), k = !1, curr_index = g.find(".active").index(), 
                m || l ? l ? (d(curr_index + 1), $curr_slide.velocity({
                    translateX: -1 * f.innerWidth()
                }, {
                    duration: 300,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function() {
                        $curr_slide.velocity({
                            opacity: 0,
                            translateX: 0
                        }, {
                            duration: 0,
                            queue: !1
                        });
                    }
                })) : m && (d(curr_index - 1), $curr_slide.velocity({
                    translateX: f.innerWidth()
                }, {
                    duration: 300,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function() {
                        $curr_slide.velocity({
                            opacity: 0,
                            translateX: 0
                        }, {
                            duration: 0,
                            queue: !1
                        });
                    }
                })) : $curr_slide.velocity({
                    translateX: 0
                }, {
                    duration: 300,
                    queue: !1,
                    easing: "easeOutQuad"
                }), l = !1, m = !1, clearInterval($interval), $interval = setInterval(function() {
                    i = g.find(".active").index(), h.length == i + 1 ? i = 0 : i += 1, d(i);
                }, b.transition + b.interval));
            });
        });
    };
}(jQuery), function(a) {
    a(document).ready(function() {
        a(".card > .card-reveal").each(function() {
            a(this).parent().css("overflow", "hidden");
        }), a(document).on("click.card", ".card", function(b) {
            a(this).find(".card-reveal").length && (a(b.target).is(a(".card-reveal .card-title")) || a(b.target).is(a(".card-reveal .card-title i")) ? a(this).find(".card-reveal").velocity({
                translateY: 0
            }, {
                duration: 225,
                queue: !1,
                easing: "easeInOutQuad"
            }) : (a(b.target).is(a(".card .activator")) || a(b.target).is(a(".card .activator i"))) && a(this).find(".card-reveal").velocity({
                translateY: "-100%"
            }, {
                duration: 300,
                queue: !1,
                easing: "easeInOutQuad"
            }));
        });
    });
}(jQuery), function(a) {
    a(document).ready(function() {
        var b = function() {
            function a() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
            }
            return function() {
                return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a();
            };
        }();
        a.fn.pushpin = function(c) {
            var d = {
                top: 0,
                bottom: 1 / 0,
                offset: 0
            };
            return c = a.extend(d, c), $index = 0, this.each(function() {
                function d(a) {
                    a.removeClass("pin-top"), a.removeClass("pinned"), a.removeClass("pin-bottom");
                }
                function e(b, e) {
                    b.each(function() {
                        c.top <= e && c.bottom >= e && !a(this).hasClass("pinned") && (d(a(this)), a(this).css("top", c.offset), 
                        a(this).addClass("pinned")), e < c.top && !a(this).hasClass("pin-top") && (d(a(this)), 
                        a(this).css("top", 0), a(this).addClass("pin-top")), e > c.bottom && !a(this).hasClass("pin-bottom") && (d(a(this)), 
                        a(this).addClass("pin-bottom"), a(this).css("top", c.bottom - h));
                    });
                }
                var f = b(), g = a(this), h = a(this).offset().top;
                e(g, a(window).scrollTop()), a(window).on("scroll." + f, function() {
                    var b = a(window).scrollTop() + c.offset;
                    e(g, b);
                });
            });
        };
    });
}(jQuery), function(a) {
    a(document).ready(function() {
        jQuery.fn.reverse = [].reverse, a(".fixed-action-btn").each(function() {
            var b = a(this);
            b.find("ul a.btn-floating").velocity({
                scaleY: ".4",
                scaleX: ".4",
                translateY: "40px"
            }, {
                duration: 0
            }), b.hover(function() {
                var c = 0;
                b.find("ul a.btn-floating").reverse().each(function() {
                    a(this).velocity({
                        opacity: "1",
                        scaleX: "1",
                        scaleY: "1",
                        translateY: "0"
                    }, {
                        duration: 100,
                        delay: c
                    }), c += 40;
                });
            }, function() {
                b.find("ul a.btn-floating").velocity("stop", !0), b.find("ul a.btn-floating").velocity({
                    opacity: "0",
                    scaleX: ".4",
                    scaleY: ".4",
                    translateY: "40px"
                }, {
                    duration: 100
                });
            });
        });
    });
}(jQuery), function(a) {
    a(document).ready(function() {
        var b = 0;
        showStaggeredList = function(c) {
            a(c).find("li").velocity({
                translateX: "-100px"
            }, {
                duration: 0
            }), a(c).find("li").each(function() {
                a(this).velocity({
                    opacity: "1",
                    translateX: "0"
                }, {
                    duration: 800,
                    delay: b,
                    easing: [ 60, 10 ]
                }), b += 120;
            });
        };
        var c = [];
        a("ul.staggered-list").each(function(b) {
            console.log(b);
            var d = "scrollFire-" + b;
            a(this).addClass(d), c.push({
                selector: "ul.staggered-list." + d,
                offset: 200,
                callback: 'showStaggeredList("ul.staggered-list.' + d + '")'
            });
        }), console.log(c), scrollFire(c), fadeInImage = function(b) {
            var c = a(b);
            c.css({
                opacity: 0
            }), a(c).velocity({
                opacity: 1
            }, {
                duration: 650,
                queue: !1,
                easing: "easeOutSine"
            }), a(c).animate({
                opacity: 1
            }, {
                duration: 1300,
                queue: !1,
                easing: "swing",
                step: function(b, c) {
                    c.start = 100;
                    var d = b / 100, e = 150 - (100 - b) / 1.75;
                    100 > e && (e = 100), console.log(d), b >= 0 && a(this).css({
                        "-webkit-filter": "grayscale(" + d + ")brightness(" + e + "%)",
                        filter: "grayscale(" + d + ")brightness(" + e + "%)"
                    });
                }
            });
        };
    });
}(jQuery), function(a) {
    scrollFire = function(b) {
        a(window).scroll(function() {
            var c = a(window).scrollTop() + a(window).height();
            a.each(b, function(b, d) {
                var e = d.selector, f = d.offset, g = d.callback, h = a(e).offset().top;
                if (c > h + f && void 0 === a(e).data("done")) {
                    var i = new Function(g);
                    i(), a(e).data("done", !0);
                }
            });
        });
    };
}(jQuery), function(a) {
    "function" == typeof define && define.amd ? define("picker", [ "jquery" ], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : this.Picker = a(jQuery);
}(function(a) {
    function b(f, g, i, l) {
        function m() {
            return b._.node("div", b._.node("div", b._.node("div", b._.node("div", y.component.nodes(t.open), v.box), v.wrap), v.frame), v.holder);
        }
        function n() {
            w.data(g, y).addClass(v.input).attr("tabindex", -1).val(w.data("value") ? y.get("select", u.format) : f.value), 
            u.editable || w.on("focus." + t.id + " click." + t.id, function(a) {
                a.preventDefault(), y.$root[0].focus();
            }).on("keydown." + t.id, q), e(f, {
                haspopup: !0,
                expanded: !1,
                readonly: !1,
                owns: f.id + "_root"
            });
        }
        function o() {
            y.$root.on({
                keydown: q,
                focusin: function(a) {
                    y.$root.removeClass(v.focused), a.stopPropagation();
                },
                "mousedown click": function(b) {
                    var c = b.target;
                    c != y.$root.children()[0] && (b.stopPropagation(), "mousedown" != b.type || a(c).is("input, select, textarea, button, option") || (b.preventDefault(), 
                    y.$root[0].focus()));
                }
            }).on({
                focus: function() {
                    w.addClass(v.target);
                },
                blur: function() {
                    w.removeClass(v.target);
                }
            }).on("focus.toOpen", r).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                var b = a(this), c = b.data(), d = b.hasClass(v.navDisabled) || b.hasClass(v.disabled), e = h();
                e = e && (e.type || e.href), (d || e && !a.contains(y.$root[0], e)) && y.$root[0].focus(), 
                !d && c.nav ? y.set("highlight", y.component.item.highlight, {
                    nav: c.nav
                }) : !d && "pick" in c ? y.set("select", c.pick) : c.clear ? y.clear().close(!0) : c.close && y.close(!0);
            }), e(y.$root[0], "hidden", !0);
        }
        function p() {
            var b;
            u.hiddenName === !0 ? (b = f.name, f.name = "") : (b = [ "string" == typeof u.hiddenPrefix ? u.hiddenPrefix : "", "string" == typeof u.hiddenSuffix ? u.hiddenSuffix : "_submit" ], 
            b = b[0] + f.name + b[1]), y._hidden = a('<input type=hidden name="' + b + '"' + (w.data("value") || f.value ? ' value="' + y.get("select", u.formatSubmit) + '"' : "") + ">")[0], 
            w.on("change." + t.id, function() {
                y._hidden.value = f.value ? y.get("select", u.formatSubmit) : "";
            }), u.container ? a(u.container).append(y._hidden) : w.after(y._hidden);
        }
        function q(a) {
            var b = a.keyCode, c = /^(8|46)$/.test(b);
            return 27 == b ? (y.close(), !1) : void ((32 == b || c || !t.open && y.component.key[b]) && (a.preventDefault(), 
            a.stopPropagation(), c ? y.clear().close() : y.open()));
        }
        function r(a) {
            a.stopPropagation(), "focus" == a.type && y.$root.addClass(v.focused), y.open();
        }
        if (!f) return b;
        var s = !1, t = {
            id: f.id || "P" + Math.abs(~~(Math.random() * new Date()))
        }, u = i ? a.extend(!0, {}, i.defaults, l) : l || {}, v = a.extend({}, b.klasses(), u.klass), w = a(f), x = function() {
            return this.start();
        }, y = x.prototype = {
            constructor: x,
            $node: w,
            start: function() {
                return t && t.start ? y : (t.methods = {}, t.start = !0, t.open = !1, t.type = f.type, 
                f.autofocus = f == h(), f.readOnly = !u.editable, f.id = f.id || t.id, "text" != f.type && (f.type = "text"), 
                y.component = new i(y, u), y.$root = a(b._.node("div", m(), v.picker, 'id="' + f.id + '_root" tabindex="0"')), 
                o(), u.formatSubmit && p(), n(), u.container ? a(u.container).append(y.$root) : w.after(y.$root), 
                y.on({
                    start: y.component.onStart,
                    render: y.component.onRender,
                    stop: y.component.onStop,
                    open: y.component.onOpen,
                    close: y.component.onClose,
                    set: y.component.onSet
                }).on({
                    start: u.onStart,
                    render: u.onRender,
                    stop: u.onStop,
                    open: u.onOpen,
                    close: u.onClose,
                    set: u.onSet
                }), s = c(y.$root.children()[0]), f.autofocus && y.open(), y.trigger("start").trigger("render"));
            },
            render: function(a) {
                return a ? y.$root.html(m()) : y.$root.find("." + v.box).html(y.component.nodes(t.open)), 
                y.trigger("render");
            },
            stop: function() {
                return t.start ? (y.close(), y._hidden && y._hidden.parentNode.removeChild(y._hidden), 
                y.$root.remove(), w.removeClass(v.input).removeData(g), setTimeout(function() {
                    w.off("." + t.id);
                }, 0), f.type = t.type, f.readOnly = !1, y.trigger("stop"), t.methods = {}, t.start = !1, 
                y) : y;
            },
            open: function(c) {
                return t.open ? y : (w.addClass(v.active), e(f, "expanded", !0), setTimeout(function() {
                    y.$root.addClass(v.opened), e(y.$root[0], "hidden", !1);
                }, 0), c !== !1 && (t.open = !0, s && k.css("overflow", "hidden").css("padding-right", "+=" + d()), 
                y.$root[0].focus(), j.on("click." + t.id + " focusin." + t.id, function(a) {
                    var b = a.target;
                    b != f && b != document && 3 != a.which && y.close(b === y.$root.children()[0]);
                }).on("keydown." + t.id, function(c) {
                    var d = c.keyCode, e = y.component.key[d], f = c.target;
                    27 == d ? y.close(!0) : f != y.$root[0] || !e && 13 != d ? a.contains(y.$root[0], f) && 13 == d && (c.preventDefault(), 
                    f.click()) : (c.preventDefault(), e ? b._.trigger(y.component.key.go, y, [ b._.trigger(e) ]) : y.$root.find("." + v.highlighted).hasClass(v.disabled) || y.set("select", y.component.item.highlight).close());
                })), y.trigger("open"));
            },
            close: function(a) {
                return a && (y.$root.off("focus.toOpen")[0].focus(), setTimeout(function() {
                    y.$root.on("focus.toOpen", r);
                }, 0)), w.removeClass(v.active), e(f, "expanded", !1), setTimeout(function() {
                    y.$root.removeClass(v.opened + " " + v.focused), e(y.$root[0], "hidden", !0);
                }, 0), t.open ? (t.open = !1, s && k.css("overflow", "").css("padding-right", "-=" + d()), 
                j.off("." + t.id), y.trigger("close")) : y;
            },
            clear: function(a) {
                return y.set("clear", null, a);
            },
            set: function(b, c, d) {
                var e, f, g = a.isPlainObject(b), h = g ? b : {};
                if (d = g && a.isPlainObject(c) ? c : d || {}, b) {
                    g || (h[b] = c);
                    for (e in h) f = h[e], e in y.component.item && (void 0 === f && (f = null), y.component.set(e, f, d)), 
                    ("select" == e || "clear" == e) && w.val("clear" == e ? "" : y.get(e, u.format)).trigger("change");
                    y.render();
                }
                return d.muted ? y : y.trigger("set", h);
            },
            get: function(a, c) {
                if (a = a || "value", null != t[a]) return t[a];
                if ("valueSubmit" == a) {
                    if (y._hidden) return y._hidden.value;
                    a = "value";
                }
                if ("value" == a) return f.value;
                if (a in y.component.item) {
                    if ("string" == typeof c) {
                        var d = y.component.get(a);
                        return d ? b._.trigger(y.component.formats.toString, y.component, [ c, d ]) : "";
                    }
                    return y.component.get(a);
                }
            },
            on: function(b, c, d) {
                var e, f, g = a.isPlainObject(b), h = g ? b : {};
                if (b) {
                    g || (h[b] = c);
                    for (e in h) f = h[e], d && (e = "_" + e), t.methods[e] = t.methods[e] || [], t.methods[e].push(f);
                }
                return y;
            },
            off: function() {
                var a, b, c = arguments;
                for (a = 0, namesCount = c.length; a < namesCount; a += 1) b = c[a], b in t.methods && delete t.methods[b];
                return y;
            },
            trigger: function(a, c) {
                var d = function(a) {
                    var d = t.methods[a];
                    d && d.map(function(a) {
                        b._.trigger(a, y, [ c ]);
                    });
                };
                return d("_" + a), d(a), y;
            }
        };
        return new x();
    }
    function c(a) {
        var b, c = "position";
        return a.currentStyle ? b = a.currentStyle[c] : window.getComputedStyle && (b = getComputedStyle(a)[c]), 
        "fixed" == b;
    }
    function d() {
        if (k.height() <= i.height()) return 0;
        var b = a('<div style="visibility:hidden;width:100px" />').appendTo("body"), c = b[0].offsetWidth;
        b.css("overflow", "scroll");
        var d = a('<div style="width:100%" />').appendTo(b), e = d[0].offsetWidth;
        return b.remove(), c - e;
    }
    function e(b, c, d) {
        if (a.isPlainObject(c)) for (var e in c) f(b, e, c[e]); else f(b, c, d);
    }
    function f(a, b, c) {
        a.setAttribute(("role" == b ? "" : "aria-") + b, c);
    }
    function g(b, c) {
        a.isPlainObject(b) || (b = {
            attribute: c
        }), c = "";
        for (var d in b) {
            var e = ("role" == d ? "" : "aria-") + d, f = b[d];
            c += null == f ? "" : e + '="' + b[d] + '"';
        }
        return c;
    }
    function h() {
        try {
            return document.activeElement;
        } catch (a) {}
    }
    var i = a(window), j = a(document), k = a(document.documentElement);
    return b.klasses = function(a) {
        return a = a || "picker", {
            picker: a,
            opened: a + "--opened",
            focused: a + "--focused",
            input: a + "__input",
            active: a + "__input--active",
            target: a + "__input--target",
            holder: a + "__holder",
            frame: a + "__frame",
            wrap: a + "__wrap",
            box: a + "__box"
        };
    }, b._ = {
        group: function(a) {
            for (var c, d = "", e = b._.trigger(a.min, a); e <= b._.trigger(a.max, a, [ e ]); e += a.i) c = b._.trigger(a.item, a, [ e ]), 
            d += b._.node(a.node, c[0], c[1], c[2]);
            return d;
        },
        node: function(b, c, d, e) {
            return c ? (c = a.isArray(c) ? c.join("") : c, d = d ? ' class="' + d + '"' : "", 
            e = e ? " " + e : "", "<" + b + d + e + ">" + c + "</" + b + ">") : "";
        },
        lead: function(a) {
            return (10 > a ? "0" : "") + a;
        },
        trigger: function(a, b, c) {
            return "function" == typeof a ? a.apply(b, c || []) : a;
        },
        digits: function(a) {
            return /\d/.test(a[1]) ? 2 : 1;
        },
        isDate: function(a) {
            return {}.toString.call(a).indexOf("Date") > -1 && this.isInteger(a.getDate());
        },
        isInteger: function(a) {
            return {}.toString.call(a).indexOf("Number") > -1 && a % 1 === 0;
        },
        ariaAttr: g
    }, b.extend = function(c, d) {
        a.fn[c] = function(e, f) {
            var g = this.data(c);
            return "picker" == e ? g : g && "string" == typeof e ? b._.trigger(g[e], g, [ f ]) : this.each(function() {
                var f = a(this);
                f.data(c) || new b(this, c, d, e);
            });
        }, a.fn[c].defaults = d.defaults;
    }, b;
}), function(a) {
    "function" == typeof define && define.amd ? define([ "picker", "jquery" ], a) : "object" == typeof exports ? module.exports = a(require("./picker.js"), require("jquery")) : a(Picker, jQuery);
}(function(a, b) {
    function c(a, b) {
        var c = this, d = a.$node[0], e = d.value, f = a.$node.data("value"), g = f || e, h = f ? b.formatSubmit : b.format, i = function() {
            return d.currentStyle ? "rtl" == d.currentStyle.direction : "rtl" == getComputedStyle(a.$root[0]).direction;
        };
        c.settings = b, c.$node = a.$node, c.queue = {
            min: "measure create",
            max: "measure create",
            now: "now create",
            select: "parse create validate",
            highlight: "parse navigate create validate",
            view: "parse create validate viewset",
            disable: "deactivate",
            enable: "activate"
        }, c.item = {}, c.item.clear = null, c.item.disable = (b.disable || []).slice(0), 
        c.item.enable = -function(a) {
            return a[0] === !0 ? a.shift() : -1;
        }(c.item.disable), c.set("min", b.min).set("max", b.max).set("now"), g ? c.set("select", g, {
            format: h
        }) : c.set("select", null).set("highlight", c.item.now), c.key = {
            40: 7,
            38: -7,
            39: function() {
                return i() ? -1 : 1;
            },
            37: function() {
                return i() ? 1 : -1;
            },
            go: function(a) {
                var b = c.item.highlight, d = new Date(b.year, b.month, b.date + a);
                c.set("highlight", d, {
                    interval: a
                }), this.render();
            }
        }, a.on("render", function() {
            a.$root.find("." + b.klass.selectMonth).on("change", function() {
                var c = this.value;
                c && (a.set("highlight", [ a.get("view").year, c, a.get("highlight").date ]), a.$root.find("." + b.klass.selectMonth).trigger("focus"));
            }), a.$root.find("." + b.klass.selectYear).on("change", function() {
                var c = this.value;
                c && (a.set("highlight", [ c, a.get("view").month, a.get("highlight").date ]), a.$root.find("." + b.klass.selectYear).trigger("focus"));
            });
        }, 1).on("open", function() {
            var d = "";
            c.disabled(c.get("now")) && (d = ":not(." + b.klass.buttonToday + ")"), a.$root.find("button" + d + ", select").attr("disabled", !1);
        }, 1).on("close", function() {
            a.$root.find("button, select").attr("disabled", !0);
        }, 1);
    }
    var d = 7, e = 6, f = a._;
    c.prototype.set = function(a, b, c) {
        var d = this, e = d.item;
        return null === b ? ("clear" == a && (a = "select"), e[a] = b, d) : (e["enable" == a ? "disable" : "flip" == a ? "enable" : a] = d.queue[a].split(" ").map(function(e) {
            return b = d[e](a, b, c);
        }).pop(), "select" == a ? d.set("highlight", e.select, c) : "highlight" == a ? d.set("view", e.highlight, c) : a.match(/^(flip|min|max|disable|enable)$/) && (e.select && d.disabled(e.select) && d.set("select", e.select, c), 
        e.highlight && d.disabled(e.highlight) && d.set("highlight", e.highlight, c)), d);
    }, c.prototype.get = function(a) {
        return this.item[a];
    }, c.prototype.create = function(a, c, d) {
        var e, g = this;
        return c = void 0 === c ? a : c, c == -1 / 0 || 1 / 0 == c ? e = c : b.isPlainObject(c) && f.isInteger(c.pick) ? c = c.obj : b.isArray(c) ? (c = new Date(c[0], c[1], c[2]), 
        c = f.isDate(c) ? c : g.create().obj) : c = f.isInteger(c) || f.isDate(c) ? g.normalize(new Date(c), d) : g.now(a, c, d), 
        {
            year: e || c.getFullYear(),
            month: e || c.getMonth(),
            date: e || c.getDate(),
            day: e || c.getDay(),
            obj: e || c,
            pick: e || c.getTime()
        };
    }, c.prototype.createRange = function(a, c) {
        var d = this, e = function(a) {
            return a === !0 || b.isArray(a) || f.isDate(a) ? d.create(a) : a;
        };
        return f.isInteger(a) || (a = e(a)), f.isInteger(c) || (c = e(c)), f.isInteger(a) && b.isPlainObject(c) ? a = [ c.year, c.month, c.date + a ] : f.isInteger(c) && b.isPlainObject(a) && (c = [ a.year, a.month, a.date + c ]), 
        {
            from: e(a),
            to: e(c)
        };
    }, c.prototype.withinRange = function(a, b) {
        return a = this.createRange(a.from, a.to), b.pick >= a.from.pick && b.pick <= a.to.pick;
    }, c.prototype.overlapRanges = function(a, b) {
        var c = this;
        return a = c.createRange(a.from, a.to), b = c.createRange(b.from, b.to), c.withinRange(a, b.from) || c.withinRange(a, b.to) || c.withinRange(b, a.from) || c.withinRange(b, a.to);
    }, c.prototype.now = function(a, b, c) {
        return b = new Date(), c && c.rel && b.setDate(b.getDate() + c.rel), this.normalize(b, c);
    }, c.prototype.navigate = function(a, c, d) {
        var e, f, g, h, i = b.isArray(c), j = b.isPlainObject(c), k = this.item.view;
        if (i || j) {
            for (j ? (f = c.year, g = c.month, h = c.date) : (f = +c[0], g = +c[1], h = +c[2]), 
            d && d.nav && k && k.month !== g && (f = k.year, g = k.month), e = new Date(f, g + (d && d.nav ? d.nav : 0), 1), 
            f = e.getFullYear(), g = e.getMonth(); new Date(f, g, h).getMonth() !== g; ) h -= 1;
            c = [ f, g, h ];
        }
        return c;
    }, c.prototype.normalize = function(a) {
        return a.setHours(0, 0, 0, 0), a;
    }, c.prototype.measure = function(a, b) {
        var c = this;
        return b ? "string" == typeof b ? b = c.parse(a, b) : f.isInteger(b) && (b = c.now(a, b, {
            rel: b
        })) : b = "min" == a ? -1 / 0 : 1 / 0, b;
    }, c.prototype.viewset = function(a, b) {
        return this.create([ b.year, b.month, 1 ]);
    }, c.prototype.validate = function(a, c, d) {
        var e, g, h, i, j = this, k = c, l = d && d.interval ? d.interval : 1, m = -1 === j.item.enable, n = j.item.min, o = j.item.max, p = m && j.item.disable.filter(function(a) {
            if (b.isArray(a)) {
                var d = j.create(a).pick;
                d < c.pick ? e = !0 : d > c.pick && (g = !0);
            }
            return f.isInteger(a);
        }).length;
        if ((!d || !d.nav) && (!m && j.disabled(c) || m && j.disabled(c) && (p || e || g) || !m && (c.pick <= n.pick || c.pick >= o.pick))) for (m && !p && (!g && l > 0 || !e && 0 > l) && (l *= -1); j.disabled(c) && (Math.abs(l) > 1 && (c.month < k.month || c.month > k.month) && (c = k, 
        l = l > 0 ? 1 : -1), c.pick <= n.pick ? (h = !0, l = 1, c = j.create([ n.year, n.month, n.date + (c.pick === n.pick ? 0 : -1) ])) : c.pick >= o.pick && (i = !0, 
        l = -1, c = j.create([ o.year, o.month, o.date + (c.pick === o.pick ? 0 : 1) ])), 
        !h || !i); ) c = j.create([ c.year, c.month, c.date + l ]);
        return c;
    }, c.prototype.disabled = function(a) {
        var c = this, d = c.item.disable.filter(function(d) {
            return f.isInteger(d) ? a.day === (c.settings.firstDay ? d : d - 1) % 7 : b.isArray(d) || f.isDate(d) ? a.pick === c.create(d).pick : b.isPlainObject(d) ? c.withinRange(d, a) : void 0;
        });
        return d = d.length && !d.filter(function(a) {
            return b.isArray(a) && "inverted" == a[3] || b.isPlainObject(a) && a.inverted;
        }).length, -1 === c.item.enable ? !d : d || a.pick < c.item.min.pick || a.pick > c.item.max.pick;
    }, c.prototype.parse = function(a, b, c) {
        var d = this, e = {};
        return b && "string" == typeof b ? (c && c.format || (c = c || {}, c.format = d.settings.format), 
        d.formats.toArray(c.format).map(function(a) {
            var c = d.formats[a], g = c ? f.trigger(c, d, [ b, e ]) : a.replace(/^!/, "").length;
            c && (e[a] = b.substr(0, g)), b = b.substr(g);
        }), [ e.yyyy || e.yy, +(e.mm || e.m) - 1, e.dd || e.d ]) : b;
    }, c.prototype.formats = function() {
        function a(a, b, c) {
            var d = a.match(/\w+/)[0];
            return c.mm || c.m || (c.m = b.indexOf(d) + 1), d.length;
        }
        function b(a) {
            return a.match(/\w+/)[0].length;
        }
        return {
            d: function(a, b) {
                return a ? f.digits(a) : b.date;
            },
            dd: function(a, b) {
                return a ? 2 : f.lead(b.date);
            },
            ddd: function(a, c) {
                return a ? b(a) : this.settings.weekdaysShort[c.day];
            },
            dddd: function(a, c) {
                return a ? b(a) : this.settings.weekdaysFull[c.day];
            },
            m: function(a, b) {
                return a ? f.digits(a) : b.month + 1;
            },
            mm: function(a, b) {
                return a ? 2 : f.lead(b.month + 1);
            },
            mmm: function(b, c) {
                var d = this.settings.monthsShort;
                return b ? a(b, d, c) : d[c.month];
            },
            mmmm: function(b, c) {
                var d = this.settings.monthsFull;
                return b ? a(b, d, c) : d[c.month];
            },
            yy: function(a, b) {
                return a ? 2 : ("" + b.year).slice(2);
            },
            yyyy: function(a, b) {
                return a ? 4 : b.year;
            },
            toArray: function(a) {
                return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
            },
            toString: function(a, b) {
                var c = this;
                return c.formats.toArray(a).map(function(a) {
                    return f.trigger(c.formats[a], c, [ 0, b ]) || a.replace(/^!/, "");
                }).join("");
            }
        };
    }(), c.prototype.isDateExact = function(a, c) {
        var d = this;
        return f.isInteger(a) && f.isInteger(c) || "boolean" == typeof a && "boolean" == typeof c ? a === c : (f.isDate(a) || b.isArray(a)) && (f.isDate(c) || b.isArray(c)) ? d.create(a).pick === d.create(c).pick : b.isPlainObject(a) && b.isPlainObject(c) ? d.isDateExact(a.from, c.from) && d.isDateExact(a.to, c.to) : !1;
    }, c.prototype.isDateOverlap = function(a, c) {
        var d = this, e = d.settings.firstDay ? 1 : 0;
        return f.isInteger(a) && (f.isDate(c) || b.isArray(c)) ? (a = a % 7 + e, a === d.create(c).day + 1) : f.isInteger(c) && (f.isDate(a) || b.isArray(a)) ? (c = c % 7 + e, 
        c === d.create(a).day + 1) : b.isPlainObject(a) && b.isPlainObject(c) ? d.overlapRanges(a, c) : !1;
    }, c.prototype.flipEnable = function(a) {
        var b = this.item;
        b.enable = a || (-1 == b.enable ? 1 : -1);
    }, c.prototype.deactivate = function(a, c) {
        var d = this, e = d.item.disable.slice(0);
        return "flip" == c ? d.flipEnable() : c === !1 ? (d.flipEnable(1), e = []) : c === !0 ? (d.flipEnable(-1), 
        e = []) : c.map(function(a) {
            for (var c, g = 0; g < e.length; g += 1) if (d.isDateExact(a, e[g])) {
                c = !0;
                break;
            }
            c || (f.isInteger(a) || f.isDate(a) || b.isArray(a) || b.isPlainObject(a) && a.from && a.to) && e.push(a);
        }), e;
    }, c.prototype.activate = function(a, c) {
        var d = this, e = d.item.disable, g = e.length;
        return "flip" == c ? d.flipEnable() : c === !0 ? (d.flipEnable(1), e = []) : c === !1 ? (d.flipEnable(-1), 
        e = []) : c.map(function(a) {
            var c, h, i, j;
            for (i = 0; g > i; i += 1) {
                if (h = e[i], d.isDateExact(h, a)) {
                    c = e[i] = null, j = !0;
                    break;
                }
                if (d.isDateOverlap(h, a)) {
                    b.isPlainObject(a) ? (a.inverted = !0, c = a) : b.isArray(a) ? (c = a, c[3] || c.push("inverted")) : f.isDate(a) && (c = [ a.getFullYear(), a.getMonth(), a.getDate(), "inverted" ]);
                    break;
                }
            }
            if (c) for (i = 0; g > i; i += 1) if (d.isDateExact(e[i], a)) {
                e[i] = null;
                break;
            }
            if (j) for (i = 0; g > i; i += 1) if (d.isDateOverlap(e[i], a)) {
                e[i] = null;
                break;
            }
            c && e.push(c);
        }), e.filter(function(a) {
            return null != a;
        });
    }, c.prototype.nodes = function(a) {
        var b = this, c = b.settings, g = b.item, h = g.now, i = g.select, j = g.highlight, k = g.view, l = g.disable, m = g.min, n = g.max, o = function(a, b) {
            return c.firstDay && (a.push(a.shift()), b.push(b.shift())), f.node("thead", f.node("tr", f.group({
                min: 0,
                max: d - 1,
                i: 1,
                node: "th",
                item: function(d) {
                    return [ a[d], c.klass.weekdays, 'scope=col title="' + b[d] + '"' ];
                }
            })));
        }((c.showWeekdaysFull ? c.weekdaysFull : c.weekdaysLetter).slice(0), c.weekdaysFull.slice(0)), p = function(a) {
            return f.node("div", " ", c.klass["nav" + (a ? "Next" : "Prev")] + (a && k.year >= n.year && k.month >= n.month || !a && k.year <= m.year && k.month <= m.month ? " " + c.klass.navDisabled : ""), "data-nav=" + (a || -1) + " " + f.ariaAttr({
                role: "button",
                controls: b.$node[0].id + "_table"
            }) + ' title="' + (a ? c.labelMonthNext : c.labelMonthPrev) + '"');
        }, q = function(d) {
            var e = c.showMonthsShort ? c.monthsShort : c.monthsFull;
            return "short_months" == d && (e = c.monthsShort), c.selectMonths ? f.node("select", f.group({
                min: 0,
                max: 11,
                i: 1,
                node: "option",
                item: function(a) {
                    return [ e[a], 0, "value=" + a + (k.month == a ? " selected" : "") + (k.year == m.year && a < m.month || k.year == n.year && a > n.month ? " disabled" : "") ];
                }
            }), c.klass.selectMonth, (a ? "" : "disabled") + " " + f.ariaAttr({
                controls: b.$node[0].id + "_table"
            }) + ' title="' + c.labelMonthSelect + '"') : "short_months" == d ? f.node("div", e[k.month]) : f.node("div", e[k.month], c.klass.month);
        }, r = function(d) {
            var e = k.year, g = c.selectYears === !0 ? 5 : ~~(c.selectYears / 2);
            if (g) {
                var h = m.year, i = n.year, j = e - g, l = e + g;
                if (h > j && (l += h - j, j = h), l > i) {
                    var o = j - h, p = l - i;
                    j -= o > p ? p : o, l = i;
                }
                return f.node("select", f.group({
                    min: j,
                    max: l,
                    i: 1,
                    node: "option",
                    item: function(a) {
                        return [ a, 0, "value=" + a + (e == a ? " selected" : "") ];
                    }
                }), c.klass.selectYear, (a ? "" : "disabled") + " " + f.ariaAttr({
                    controls: b.$node[0].id + "_table"
                }) + ' title="' + c.labelYearSelect + '"');
            }
            return "raw" == d ? f.node("div", e) : f.node("div", e, c.klass.year);
        };
        return createDayLabel = function() {
            return null != i ? f.node("div", i.date) : f.node("div", h.date);
        }, createWeekdayLabel = function() {
            var a;
            a = null != i ? i.day : h.day;
            var b = c.weekdaysFull[a];
            return b;
        }, f.node("div", f.node("div", createWeekdayLabel(), "picker__weekday-display") + f.node("div", q("short_months"), c.klass.month_display) + f.node("div", createDayLabel(), c.klass.day_display) + f.node("div", r("raw"), c.klass.year_display), c.klass.date_display) + f.node("div", f.node("div", (c.selectYears ? r() + q() : q() + r()) + p() + p(1), c.klass.header) + f.node("table", o + f.node("tbody", f.group({
            min: 0,
            max: e - 1,
            i: 1,
            node: "tr",
            item: function(a) {
                var e = c.firstDay && 0 === b.create([ k.year, k.month, 1 ]).day ? -7 : 0;
                return [ f.group({
                    min: d * a - k.day + e + 1,
                    max: function() {
                        return this.min + d - 1;
                    },
                    i: 1,
                    node: "td",
                    item: function(a) {
                        a = b.create([ k.year, k.month, a + (c.firstDay ? 1 : 0) ]);
                        var d = i && i.pick == a.pick, e = j && j.pick == a.pick, g = l && b.disabled(a) || a.pick < m.pick || a.pick > n.pick, o = f.trigger(b.formats.toString, b, [ c.format, a ]);
                        return [ f.node("div", a.date, function(b) {
                            return b.push(k.month == a.month ? c.klass.infocus : c.klass.outfocus), h.pick == a.pick && b.push(c.klass.now), 
                            d && b.push(c.klass.selected), e && b.push(c.klass.highlighted), g && b.push(c.klass.disabled), 
                            b.join(" ");
                        }([ c.klass.day ]), "data-pick=" + a.pick + " " + f.ariaAttr({
                            role: "gridcell",
                            label: o,
                            selected: d && b.$node.val() === o ? !0 : null,
                            activedescendant: e ? !0 : null,
                            disabled: g ? !0 : null
                        })), "", f.ariaAttr({
                            role: "presentation"
                        }) ];
                    }
                }) ];
            }
        })), c.klass.table, 'id="' + b.$node[0].id + '_table" ' + f.ariaAttr({
            role: "grid",
            controls: b.$node[0].id,
            readonly: !0
        })), c.klass.calendar_container) + f.node("div", f.node("button", c.today, "btn-flat picker__today", "type=button data-pick=" + h.pick + (a && !b.disabled(h) ? "" : " disabled") + " " + f.ariaAttr({
            controls: b.$node[0].id
        })) + f.node("button", c.clear, "btn-flat picker__clear", "type=button data-clear=1" + (a ? "" : " disabled") + " " + f.ariaAttr({
            controls: b.$node[0].id
        })) + f.node("button", c.close, "btn-flat picker__close", "type=button data-close=true " + (a ? "" : " disabled") + " " + f.ariaAttr({
            controls: b.$node[0].id
        })), c.klass.footer);
    }, c.defaults = function(a) {
        return {
            labelMonthNext: "Next month",
            labelMonthPrev: "Previous month",
            labelMonthSelect: "Select a month",
            labelYearSelect: "Select a year",
            monthsFull: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            monthsShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
            weekdaysFull: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
            weekdaysShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
            weekdaysLetter: [ "S", "M", "T", "W", "T", "F", "S" ],
            today: "Today",
            clear: "Clear",
            close: "Close",
            format: "d mmmm, yyyy",
            klass: {
                table: a + "table",
                header: a + "header",
                date_display: a + "date-display",
                day_display: a + "day-display",
                month_display: a + "month-display",
                year_display: a + "year-display",
                calendar_container: a + "calendar-container",
                navPrev: a + "nav--prev",
                navNext: a + "nav--next",
                navDisabled: a + "nav--disabled",
                month: a + "month",
                year: a + "year",
                selectMonth: a + "select--month",
                selectYear: a + "select--year",
                weekdays: a + "weekday",
                day: a + "day",
                disabled: a + "day--disabled",
                selected: a + "day--selected",
                highlighted: a + "day--highlighted",
                now: a + "day--today",
                infocus: a + "day--infocus",
                outfocus: a + "day--outfocus",
                footer: a + "footer",
                buttonClear: a + "button--clear",
                buttonToday: a + "button--today",
                buttonClose: a + "button--close"
            }
        };
    }(a.klasses().picker + "__"), a.extend("pickadate", c);
}), function() {
    function n(n) {
        function t(t, r, e, u, i, o) {
            for (;i >= 0 && o > i; i += n) {
                var a = u ? u[i] : i;
                e = r(e, t[a], a, t);
            }
            return e;
        }
        return function(r, e, u, i) {
            e = d(e, i, 4);
            var o = !w(r) && m.keys(r), a = (o || r).length, c = n > 0 ? 0 : a - 1;
            return arguments.length < 3 && (u = r[o ? o[c] : c], c += n), t(r, e, u, o, c, a);
        };
    }
    function t(n) {
        return function(t, r, e) {
            r = b(r, e);
            for (var u = null != t && t.length, i = n > 0 ? 0 : u - 1; i >= 0 && u > i; i += n) if (r(t[i], i, t)) return i;
            return -1;
        };
    }
    function r(n, t) {
        var r = S.length, e = n.constructor, u = m.isFunction(e) && e.prototype || o, i = "constructor";
        for (m.has(n, i) && !m.contains(t, i) && t.push(i); r--; ) i = S[r], i in n && n[i] !== u[i] && !m.contains(t, i) && t.push(i);
    }
    var e = this, u = e._, i = Array.prototype, o = Object.prototype, a = Function.prototype, c = i.push, l = i.slice, f = o.toString, s = o.hasOwnProperty, p = Array.isArray, h = Object.keys, v = a.bind, g = Object.create, y = function() {}, m = function(n) {
        return n instanceof m ? n : this instanceof m ? void (this._wrapped = n) : new m(n);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), 
    exports._ = m) : e._ = m, m.VERSION = "1.8.2";
    var d = function(n, t, r) {
        if (void 0 === t) return n;
        switch (null == r ? 3 : r) {
          case 1:
            return function(r) {
                return n.call(t, r);
            };

          case 2:
            return function(r, e) {
                return n.call(t, r, e);
            };

          case 3:
            return function(r, e, u) {
                return n.call(t, r, e, u);
            };

          case 4:
            return function(r, e, u, i) {
                return n.call(t, r, e, u, i);
            };
        }
        return function() {
            return n.apply(t, arguments);
        };
    }, b = function(n, t, r) {
        return null == n ? m.identity : m.isFunction(n) ? d(n, t, r) : m.isObject(n) ? m.matcher(n) : m.property(n);
    };
    m.iteratee = function(n, t) {
        return b(n, t, 1 / 0);
    };
    var x = function(n, t) {
        return function(r) {
            var e = arguments.length;
            if (2 > e || null == r) return r;
            for (var u = 1; e > u; u++) for (var i = arguments[u], o = n(i), a = o.length, c = 0; a > c; c++) {
                var l = o[c];
                t && void 0 !== r[l] || (r[l] = i[l]);
            }
            return r;
        };
    }, _ = function(n) {
        if (!m.isObject(n)) return {};
        if (g) return g(n);
        y.prototype = n;
        var t = new y();
        return y.prototype = null, t;
    }, j = Math.pow(2, 53) - 1, w = function(n) {
        var t = n && n.length;
        return "number" == typeof t && t >= 0 && j >= t;
    };
    m.each = m.forEach = function(n, t, r) {
        t = d(t, r);
        var e, u;
        if (w(n)) for (e = 0, u = n.length; u > e; e++) t(n[e], e, n); else {
            var i = m.keys(n);
            for (e = 0, u = i.length; u > e; e++) t(n[i[e]], i[e], n);
        }
        return n;
    }, m.map = m.collect = function(n, t, r) {
        t = b(t, r);
        for (var e = !w(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; u > o; o++) {
            var a = e ? e[o] : o;
            i[o] = t(n[a], a, n);
        }
        return i;
    }, m.reduce = m.foldl = m.inject = n(1), m.reduceRight = m.foldr = n(-1), m.find = m.detect = function(n, t, r) {
        var e;
        return e = w(n) ? m.findIndex(n, t, r) : m.findKey(n, t, r), void 0 !== e && -1 !== e ? n[e] : void 0;
    }, m.filter = m.select = function(n, t, r) {
        var e = [];
        return t = b(t, r), m.each(n, function(n, r, u) {
            t(n, r, u) && e.push(n);
        }), e;
    }, m.reject = function(n, t, r) {
        return m.filter(n, m.negate(b(t)), r);
    }, m.every = m.all = function(n, t, r) {
        t = b(t, r);
        for (var e = !w(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
            var o = e ? e[i] : i;
            if (!t(n[o], o, n)) return !1;
        }
        return !0;
    }, m.some = m.any = function(n, t, r) {
        t = b(t, r);
        for (var e = !w(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
            var o = e ? e[i] : i;
            if (t(n[o], o, n)) return !0;
        }
        return !1;
    }, m.contains = m.includes = m.include = function(n, t, r) {
        return w(n) || (n = m.values(n)), m.indexOf(n, t, "number" == typeof r && r) >= 0;
    }, m.invoke = function(n, t) {
        var r = l.call(arguments, 2), e = m.isFunction(t);
        return m.map(n, function(n) {
            var u = e ? t : n[t];
            return null == u ? u : u.apply(n, r);
        });
    }, m.pluck = function(n, t) {
        return m.map(n, m.property(t));
    }, m.where = function(n, t) {
        return m.filter(n, m.matcher(t));
    }, m.findWhere = function(n, t) {
        return m.find(n, m.matcher(t));
    }, m.max = function(n, t, r) {
        var e, u, i = -1 / 0, o = -1 / 0;
        if (null == t && null != n) {
            n = w(n) ? n : m.values(n);
            for (var a = 0, c = n.length; c > a; a++) e = n[a], e > i && (i = e);
        } else t = b(t, r), m.each(n, function(n, r, e) {
            u = t(n, r, e), (u > o || u === -1 / 0 && i === -1 / 0) && (i = n, o = u);
        });
        return i;
    }, m.min = function(n, t, r) {
        var e, u, i = 1 / 0, o = 1 / 0;
        if (null == t && null != n) {
            n = w(n) ? n : m.values(n);
            for (var a = 0, c = n.length; c > a; a++) e = n[a], i > e && (i = e);
        } else t = b(t, r), m.each(n, function(n, r, e) {
            u = t(n, r, e), (o > u || 1 / 0 === u && 1 / 0 === i) && (i = n, o = u);
        });
        return i;
    }, m.shuffle = function(n) {
        for (var t, r = w(n) ? n : m.values(n), e = r.length, u = Array(e), i = 0; e > i; i++) t = m.random(0, i), 
        t !== i && (u[i] = u[t]), u[t] = r[i];
        return u;
    }, m.sample = function(n, t, r) {
        return null == t || r ? (w(n) || (n = m.values(n)), n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, t));
    }, m.sortBy = function(n, t, r) {
        return t = b(t, r), m.pluck(m.map(n, function(n, r, e) {
            return {
                value: n,
                index: r,
                criteria: t(n, r, e)
            };
        }).sort(function(n, t) {
            var r = n.criteria, e = t.criteria;
            if (r !== e) {
                if (r > e || void 0 === r) return 1;
                if (e > r || void 0 === e) return -1;
            }
            return n.index - t.index;
        }), "value");
    };
    var A = function(n) {
        return function(t, r, e) {
            var u = {};
            return r = b(r, e), m.each(t, function(e, i) {
                var o = r(e, i, t);
                n(u, e, o);
            }), u;
        };
    };
    m.groupBy = A(function(n, t, r) {
        m.has(n, r) ? n[r].push(t) : n[r] = [ t ];
    }), m.indexBy = A(function(n, t, r) {
        n[r] = t;
    }), m.countBy = A(function(n, t, r) {
        m.has(n, r) ? n[r]++ : n[r] = 1;
    }), m.toArray = function(n) {
        return n ? m.isArray(n) ? l.call(n) : w(n) ? m.map(n, m.identity) : m.values(n) : [];
    }, m.size = function(n) {
        return null == n ? 0 : w(n) ? n.length : m.keys(n).length;
    }, m.partition = function(n, t, r) {
        t = b(t, r);
        var e = [], u = [];
        return m.each(n, function(n, r, i) {
            (t(n, r, i) ? e : u).push(n);
        }), [ e, u ];
    }, m.first = m.head = m.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : m.initial(n, n.length - t);
    }, m.initial = function(n, t, r) {
        return l.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)));
    }, m.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - t));
    }, m.rest = m.tail = m.drop = function(n, t, r) {
        return l.call(n, null == t || r ? 1 : t);
    }, m.compact = function(n) {
        return m.filter(n, m.identity);
    };
    var k = function(n, t, r, e) {
        for (var u = [], i = 0, o = e || 0, a = n && n.length; a > o; o++) {
            var c = n[o];
            if (w(c) && (m.isArray(c) || m.isArguments(c))) {
                t || (c = k(c, t, r));
                var l = 0, f = c.length;
                for (u.length += f; f > l; ) u[i++] = c[l++];
            } else r || (u[i++] = c);
        }
        return u;
    };
    m.flatten = function(n, t) {
        return k(n, t, !1);
    }, m.without = function(n) {
        return m.difference(n, l.call(arguments, 1));
    }, m.uniq = m.unique = function(n, t, r, e) {
        if (null == n) return [];
        m.isBoolean(t) || (e = r, r = t, t = !1), null != r && (r = b(r, e));
        for (var u = [], i = [], o = 0, a = n.length; a > o; o++) {
            var c = n[o], l = r ? r(c, o, n) : c;
            t ? (o && i === l || u.push(c), i = l) : r ? m.contains(i, l) || (i.push(l), u.push(c)) : m.contains(u, c) || u.push(c);
        }
        return u;
    }, m.union = function() {
        return m.uniq(k(arguments, !0, !0));
    }, m.intersection = function(n) {
        if (null == n) return [];
        for (var t = [], r = arguments.length, e = 0, u = n.length; u > e; e++) {
            var i = n[e];
            if (!m.contains(t, i)) {
                for (var o = 1; r > o && m.contains(arguments[o], i); o++) ;
                o === r && t.push(i);
            }
        }
        return t;
    }, m.difference = function(n) {
        var t = k(arguments, !0, !0, 1);
        return m.filter(n, function(n) {
            return !m.contains(t, n);
        });
    }, m.zip = function() {
        return m.unzip(arguments);
    }, m.unzip = function(n) {
        for (var t = n && m.max(n, "length").length || 0, r = Array(t), e = 0; t > e; e++) r[e] = m.pluck(n, e);
        return r;
    }, m.object = function(n, t) {
        for (var r = {}, e = 0, u = n && n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r;
    }, m.indexOf = function(n, t, r) {
        var e = 0, u = n && n.length;
        if ("number" == typeof r) e = 0 > r ? Math.max(0, u + r) : r; else if (r && u) return e = m.sortedIndex(n, t), 
        n[e] === t ? e : -1;
        if (t !== t) return m.findIndex(l.call(n, e), m.isNaN);
        for (;u > e; e++) if (n[e] === t) return e;
        return -1;
    }, m.lastIndexOf = function(n, t, r) {
        var e = n ? n.length : 0;
        if ("number" == typeof r && (e = 0 > r ? e + r + 1 : Math.min(e, r + 1)), t !== t) return m.findLastIndex(l.call(n, 0, e), m.isNaN);
        for (;--e >= 0; ) if (n[e] === t) return e;
        return -1;
    }, m.findIndex = t(1), m.findLastIndex = t(-1), m.sortedIndex = function(n, t, r, e) {
        r = b(r, e, 1);
        for (var u = r(t), i = 0, o = n.length; o > i; ) {
            var a = Math.floor((i + o) / 2);
            r(n[a]) < u ? i = a + 1 : o = a;
        }
        return i;
    }, m.range = function(n, t, r) {
        arguments.length <= 1 && (t = n || 0, n = 0), r = r || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++, 
        n += r) u[i] = n;
        return u;
    };
    var O = function(n, t, r, e, u) {
        if (!(e instanceof t)) return n.apply(r, u);
        var i = _(n.prototype), o = n.apply(i, u);
        return m.isObject(o) ? o : i;
    };
    m.bind = function(n, t) {
        if (v && n.bind === v) return v.apply(n, l.call(arguments, 1));
        if (!m.isFunction(n)) throw new TypeError("Bind must be called on a function");
        var r = l.call(arguments, 2), e = function() {
            return O(n, e, t, this, r.concat(l.call(arguments)));
        };
        return e;
    }, m.partial = function(n) {
        var t = l.call(arguments, 1), r = function() {
            for (var e = 0, u = t.length, i = Array(u), o = 0; u > o; o++) i[o] = t[o] === m ? arguments[e++] : t[o];
            for (;e < arguments.length; ) i.push(arguments[e++]);
            return O(n, r, this, this, i);
        };
        return r;
    }, m.bindAll = function(n) {
        var t, r, e = arguments.length;
        if (1 >= e) throw new Error("bindAll must be passed function names");
        for (t = 1; e > t; t++) r = arguments[t], n[r] = m.bind(n[r], n);
        return n;
    }, m.memoize = function(n, t) {
        var r = function(e) {
            var u = r.cache, i = "" + (t ? t.apply(this, arguments) : e);
            return m.has(u, i) || (u[i] = n.apply(this, arguments)), u[i];
        };
        return r.cache = {}, r;
    }, m.delay = function(n, t) {
        var r = l.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r);
        }, t);
    }, m.defer = m.partial(m.delay, m, 1), m.throttle = function(n, t, r) {
        var e, u, i, o = null, a = 0;
        r || (r = {});
        var c = function() {
            a = r.leading === !1 ? 0 : m.now(), o = null, i = n.apply(e, u), o || (e = u = null);
        };
        return function() {
            var l = m.now();
            a || r.leading !== !1 || (a = l);
            var f = t - (l - a);
            return e = this, u = arguments, 0 >= f || f > t ? (o && (clearTimeout(o), o = null), 
            a = l, i = n.apply(e, u), o || (e = u = null)) : o || r.trailing === !1 || (o = setTimeout(c, f)), 
            i;
        };
    }, m.debounce = function(n, t, r) {
        var e, u, i, o, a, c = function() {
            var l = m.now() - o;
            t > l && l >= 0 ? e = setTimeout(c, t - l) : (e = null, r || (a = n.apply(i, u), 
            e || (i = u = null)));
        };
        return function() {
            i = this, u = arguments, o = m.now();
            var l = r && !e;
            return e || (e = setTimeout(c, t)), l && (a = n.apply(i, u), i = u = null), a;
        };
    }, m.wrap = function(n, t) {
        return m.partial(t, n);
    }, m.negate = function(n) {
        return function() {
            return !n.apply(this, arguments);
        };
    }, m.compose = function() {
        var n = arguments, t = n.length - 1;
        return function() {
            for (var r = t, e = n[t].apply(this, arguments); r--; ) e = n[r].call(this, e);
            return e;
        };
    }, m.after = function(n, t) {
        return function() {
            return --n < 1 ? t.apply(this, arguments) : void 0;
        };
    }, m.before = function(n, t) {
        var r;
        return function() {
            return --n > 0 && (r = t.apply(this, arguments)), 1 >= n && (t = null), r;
        };
    }, m.once = m.partial(m.before, 2);
    var F = !{
        toString: null
    }.propertyIsEnumerable("toString"), S = [ "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString" ];
    m.keys = function(n) {
        if (!m.isObject(n)) return [];
        if (h) return h(n);
        var t = [];
        for (var e in n) m.has(n, e) && t.push(e);
        return F && r(n, t), t;
    }, m.allKeys = function(n) {
        if (!m.isObject(n)) return [];
        var t = [];
        for (var e in n) t.push(e);
        return F && r(n, t), t;
    }, m.values = function(n) {
        for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = n[t[u]];
        return e;
    }, m.mapObject = function(n, t, r) {
        t = b(t, r);
        for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; i > a; a++) e = u[a], o[e] = t(n[e], e, n);
        return o;
    }, m.pairs = function(n) {
        for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = [ t[u], n[t[u]] ];
        return e;
    }, m.invert = function(n) {
        for (var t = {}, r = m.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e];
        return t;
    }, m.functions = m.methods = function(n) {
        var t = [];
        for (var r in n) m.isFunction(n[r]) && t.push(r);
        return t.sort();
    }, m.extend = x(m.allKeys), m.extendOwn = m.assign = x(m.keys), m.findKey = function(n, t, r) {
        t = b(t, r);
        for (var e, u = m.keys(n), i = 0, o = u.length; o > i; i++) if (e = u[i], t(n[e], e, n)) return e;
    }, m.pick = function(n, t, r) {
        var e, u, i = {}, o = n;
        if (null == o) return i;
        m.isFunction(t) ? (u = m.allKeys(o), e = d(t, r)) : (u = k(arguments, !1, !1, 1), 
        e = function(n, t, r) {
            return t in r;
        }, o = Object(o));
        for (var a = 0, c = u.length; c > a; a++) {
            var l = u[a], f = o[l];
            e(f, l, o) && (i[l] = f);
        }
        return i;
    }, m.omit = function(n, t, r) {
        if (m.isFunction(t)) t = m.negate(t); else {
            var e = m.map(k(arguments, !1, !1, 1), String);
            t = function(n, t) {
                return !m.contains(e, t);
            };
        }
        return m.pick(n, t, r);
    }, m.defaults = x(m.allKeys, !0), m.clone = function(n) {
        return m.isObject(n) ? m.isArray(n) ? n.slice() : m.extend({}, n) : n;
    }, m.tap = function(n, t) {
        return t(n), n;
    }, m.isMatch = function(n, t) {
        var r = m.keys(t), e = r.length;
        if (null == n) return !e;
        for (var u = Object(n), i = 0; e > i; i++) {
            var o = r[i];
            if (t[o] !== u[o] || !(o in u)) return !1;
        }
        return !0;
    };
    var E = function(n, t, r, e) {
        if (n === t) return 0 !== n || 1 / n === 1 / t;
        if (null == n || null == t) return n === t;
        n instanceof m && (n = n._wrapped), t instanceof m && (t = t._wrapped);
        var u = f.call(n);
        if (u !== f.call(t)) return !1;
        switch (u) {
          case "[object RegExp]":
          case "[object String]":
            return "" + n == "" + t;

          case "[object Number]":
            return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t;

          case "[object Date]":
          case "[object Boolean]":
            return +n === +t;
        }
        var i = "[object Array]" === u;
        if (!i) {
            if ("object" != typeof n || "object" != typeof t) return !1;
            var o = n.constructor, a = t.constructor;
            if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in t) return !1;
        }
        r = r || [], e = e || [];
        for (var c = r.length; c--; ) if (r[c] === n) return e[c] === t;
        if (r.push(n), e.push(t), i) {
            if (c = n.length, c !== t.length) return !1;
            for (;c--; ) if (!E(n[c], t[c], r, e)) return !1;
        } else {
            var l, s = m.keys(n);
            if (c = s.length, m.keys(t).length !== c) return !1;
            for (;c--; ) if (l = s[c], !m.has(t, l) || !E(n[l], t[l], r, e)) return !1;
        }
        return r.pop(), e.pop(), !0;
    };
    m.isEqual = function(n, t) {
        return E(n, t);
    }, m.isEmpty = function(n) {
        return null == n ? !0 : w(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length;
    }, m.isElement = function(n) {
        return !(!n || 1 !== n.nodeType);
    }, m.isArray = p || function(n) {
        return "[object Array]" === f.call(n);
    }, m.isObject = function(n) {
        var t = typeof n;
        return "function" === t || "object" === t && !!n;
    }, m.each([ "Arguments", "Function", "String", "Number", "Date", "RegExp", "Error" ], function(n) {
        m["is" + n] = function(t) {
            return f.call(t) === "[object " + n + "]";
        };
    }), m.isArguments(arguments) || (m.isArguments = function(n) {
        return m.has(n, "callee");
    }), "function" != typeof /./ && "object" != typeof Int8Array && (m.isFunction = function(n) {
        return "function" == typeof n || !1;
    }), m.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n));
    }, m.isNaN = function(n) {
        return m.isNumber(n) && n !== +n;
    }, m.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" === f.call(n);
    }, m.isNull = function(n) {
        return null === n;
    }, m.isUndefined = function(n) {
        return void 0 === n;
    }, m.has = function(n, t) {
        return null != n && s.call(n, t);
    }, m.noConflict = function() {
        return e._ = u, this;
    }, m.identity = function(n) {
        return n;
    }, m.constant = function(n) {
        return function() {
            return n;
        };
    }, m.noop = function() {}, m.property = function(n) {
        return function(t) {
            return null == t ? void 0 : t[n];
        };
    }, m.propertyOf = function(n) {
        return null == n ? function() {} : function(t) {
            return n[t];
        };
    }, m.matcher = m.matches = function(n) {
        return n = m.extendOwn({}, n), function(t) {
            return m.isMatch(t, n);
        };
    }, m.times = function(n, t, r) {
        var e = Array(Math.max(0, n));
        t = d(t, r, 1);
        for (var u = 0; n > u; u++) e[u] = t(u);
        return e;
    }, m.random = function(n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1));
    }, m.now = Date.now || function() {
        return new Date().getTime();
    };
    var M = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, N = m.invert(M), I = function(n) {
        var t = function(t) {
            return n[t];
        }, r = "(?:" + m.keys(n).join("|") + ")", e = RegExp(r), u = RegExp(r, "g");
        return function(n) {
            return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, t) : n;
        };
    };
    m.escape = I(M), m.unescape = I(N), m.result = function(n, t, r) {
        var e = null == n ? void 0 : n[t];
        return void 0 === e && (e = r), m.isFunction(e) ? e.call(n) : e;
    };
    var B = 0;
    m.uniqueId = function(n) {
        var t = ++B + "";
        return n ? n + t : t;
    }, m.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var T = /(.)^/, R = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, q = /\\|'|\r|\n|\u2028|\u2029/g, K = function(n) {
        return "\\" + R[n];
    };
    m.template = function(n, t, r) {
        !t && r && (t = r), t = m.defaults({}, t, m.templateSettings);
        var e = RegExp([ (t.escape || T).source, (t.interpolate || T).source, (t.evaluate || T).source ].join("|") + "|$", "g"), u = 0, i = "__p+='";
        n.replace(e, function(t, r, e, o, a) {
            return i += n.slice(u, a).replace(q, K), u = a + t.length, r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"), 
            t;
        }), i += "';\n", t.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
        try {
            var o = new Function(t.variable || "obj", "_", i);
        } catch (a) {
            throw a.source = i, a;
        }
        var c = function(n) {
            return o.call(this, n, m);
        }, l = t.variable || "obj";
        return c.source = "function(" + l + "){\n" + i + "}", c;
    }, m.chain = function(n) {
        var t = m(n);
        return t._chain = !0, t;
    };
    var z = function(n, t) {
        return n._chain ? m(t).chain() : t;
    };
    m.mixin = function(n) {
        m.each(m.functions(n), function(t) {
            var r = m[t] = n[t];
            m.prototype[t] = function() {
                var n = [ this._wrapped ];
                return c.apply(n, arguments), z(this, r.apply(m, n));
            };
        });
    }, m.mixin(m), m.each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(n) {
        var t = i[n];
        m.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments), "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0], 
            z(this, r);
        };
    }), m.each([ "concat", "join", "slice" ], function(n) {
        var t = i[n];
        m.prototype[n] = function() {
            return z(this, t.apply(this._wrapped, arguments));
        };
    }), m.prototype.value = function() {
        return this._wrapped;
    }, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function() {
        return "" + this._wrapped;
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return m;
    });
}.call(this);
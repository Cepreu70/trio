function toast(message, displayLength, className, completeCallback) {
    function createToast(html) {
        var toast = $("<div class='toast'></div>").addClass(className).html(html);
        return toast.hammer({
            prevent_default: !1
        }).bind("pan", function(e) {
            var deltaX = e.gesture.deltaX, activationDistance = 80;
            toast.hasClass("panning") || toast.addClass("panning");
            var opacityPercent = 1 - Math.abs(deltaX / activationDistance);
            0 > opacityPercent && (opacityPercent = 0), toast.velocity({
                left: deltaX,
                opacity: opacityPercent
            }, {
                duration: 50,
                queue: !1,
                easing: "easeOutQuad"
            });
        }).bind("panend", function(e) {
            var deltaX = e.gesture.deltaX, activationDistance = 80;
            Math.abs(deltaX) > activationDistance ? toast.velocity({
                marginTop: "-40px"
            }, {
                duration: 375,
                easing: "easeOutExpo",
                queue: !1,
                complete: function() {
                    "function" == typeof completeCallback && completeCallback(), toast.remove();
                }
            }) : (toast.removeClass("panning"), toast.velocity({
                left: 0,
                opacity: 1
            }, {
                duration: 300,
                easing: "easeOutExpo",
                queue: !1
            }));
        }), toast;
    }
    if (className = className || "", 0 == $("#toast-container").length) {
        var container = $("<div></div>").attr("id", "toast-container");
        $("body").append(container);
    }
    var container = $("#toast-container"), newToast = createToast(message);
    container.append(newToast), newToast.css({
        top: parseFloat(newToast.css("top")) + 35 + "px",
        opacity: 0
    }), newToast.velocity({
        top: "0px",
        opacity: 1
    }, {
        duration: 300,
        easing: "easeOutCubic",
        queue: !1
    });
    var timeLeft = displayLength, counterInterval = setInterval(function() {
        0 === newToast.parent().length && window.clearInterval(counterInterval), newToast.hasClass("panning") || (timeLeft -= 100), 
        0 >= timeLeft && (newToast.velocity({
            opacity: 0,
            marginTop: "-40px"
        }, {
            duration: 375,
            easing: "easeOutExpo",
            queue: !1,
            complete: function() {
                "function" == typeof completeCallback && completeCallback(), $(this).remove();
            }
        }), window.clearInterval(counterInterval));
    }, 100);
}

!function(P, X, u) {
    "use strict";
    function M(b) {
        return function() {
            var c, a = arguments[0];
            for (c = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.3.14/" + (b ? b + "/" : "") + a, 
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
        return b.nodeType === na && a ? !0 : x(b) || E(b) || 0 === a || "number" == typeof a && a > 0 && a - 1 in b;
    }
    function s(b, a, c) {
        var d, e;
        if (b) if (G(b)) for (d in b) "prototype" == d || "length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d) || a.call(c, b[d], d, b); else if (E(b) || Ta(b)) {
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
    function w(b) {
        for (var a = b.$$hashKey, c = 1, d = arguments.length; d > c; c++) {
            var e = arguments[c];
            if (e) for (var f = Object.keys(e), g = 0, h = f.length; h > g; g++) {
                var l = f[g];
                b[l] = e[l];
            }
        }
        return mc(b, a), b;
    }
    function $(b) {
        return parseInt(b, 10);
    }
    function Pb(b, a) {
        return w(Object.create(b), a);
    }
    function B() {}
    function oa(b) {
        return b;
    }
    function da(b) {
        return function() {
            return b;
        };
    }
    function z(b) {
        return "undefined" == typeof b;
    }
    function y(b) {
        return "undefined" != typeof b;
    }
    function J(b) {
        return null !== b && "object" == typeof b;
    }
    function x(b) {
        return "string" == typeof b;
    }
    function V(b) {
        return "number" == typeof b;
    }
    function pa(b) {
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
    function ta(b) {
        return R(b.nodeName || b[0] && b[0].nodeName);
    }
    function Xa(b, a) {
        var c = b.indexOf(a);
        return c >= 0 && b.splice(c, 1), a;
    }
    function Ea(b, a, c, d) {
        if (Ua(b) || Va(b)) throw Ka("cpws");
        if (a) {
            if (b === a) throw Ka("cpi");
            if (c = c || [], d = d || [], J(b)) {
                var e = c.indexOf(b);
                if (-1 !== e) return d[e];
                c.push(b), d.push(a);
            }
            if (E(b)) for (var f = a.length = 0; f < b.length; f++) e = Ea(b[f], null, c, d), 
            J(b[f]) && (c.push(b[f]), d.push(e)), a.push(e); else {
                var g = a.$$hashKey;
                E(a) ? a.length = 0 : s(a, function(b, c) {
                    delete a[c];
                });
                for (f in b) b.hasOwnProperty(f) && (e = Ea(b[f], null, c, d), J(b[f]) && (c.push(b[f]), 
                d.push(e)), a[f] = e);
                mc(a, g);
            }
        } else (a = b) && (E(b) ? a = Ea(b, [], c, d) : pa(b) ? a = new Date(b.getTime()) : pb(b) ? (a = new RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), 
        a.lastIndex = b.lastIndex) : J(b) && (e = Object.create(Object.getPrototypeOf(b)), 
        a = Ea(b, e, c, d)));
        return a;
    }
    function qa(b, a) {
        if (E(b)) {
            a = a || [];
            for (var c = 0, d = b.length; d > c; c++) a[c] = b[c];
        } else if (J(b)) for (c in a = a || {}, b) ("$" !== c.charAt(0) || "$" !== c.charAt(1)) && (a[c] = b[c]);
        return a || b;
    }
    function ea(b, a) {
        if (b === a) return !0;
        if (null === b || null === a) return !1;
        if (b !== b && a !== a) return !0;
        var d, c = typeof b;
        if (c == typeof a && "object" == c) {
            if (!E(b)) {
                if (pa(b)) return pa(a) ? ea(b.getTime(), a.getTime()) : !1;
                if (pb(b) && pb(a)) return b.toString() == a.toString();
                if (Va(b) || Va(a) || Ua(b) || Ua(a) || E(a)) return !1;
                c = {};
                for (d in b) if ("$" !== d.charAt(0) && !G(b[d])) {
                    if (!ea(b[d], a[d])) return !1;
                    c[d] = !0;
                }
                for (d in a) if (!c.hasOwnProperty(d) && "$" !== d.charAt(0) && a[d] !== u && !G(a[d])) return !1;
                return !0;
            }
            if (!E(a)) return !1;
            if ((c = b.length) == a.length) {
                for (d = 0; c > d; d++) if (!ea(b[d], a[d])) return !1;
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
        return "string" == typeof b && "$" === b.charAt(0) && "$" === b.charAt(1) ? c = u : Ua(a) ? c = "$WINDOW" : a && X === a ? c = "$DOCUMENT" : Va(a) && (c = "$SCOPE"), 
        c;
    }
    function $a(b, a) {
        return "undefined" == typeof b ? u : (V(a) || (a = a ? 2 : null), JSON.stringify(b, Hd, a));
    }
    function pc(b) {
        return x(b) ? JSON.parse(b) : b;
    }
    function ua(b) {
        b = C(b).clone();
        try {
            b.empty();
        } catch (a) {}
        var c = C("<div>").append(b).html();
        try {
            return b[0].nodeType === qb ? R(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + R(b);
            });
        } catch (d) {
            return R(c);
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
            sc.call(a, d) ? E(a[d]) ? a[d].push(b) : a[d] = [ a[d], b ] : a[d] = b));
        }), a;
    }
    function Qb(b) {
        var a = [];
        return s(b, function(b, d) {
            E(b) ? s(b, function(b) {
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
        for (b = C(b), d = 0; e > d; ++d) if (c = sb[d] + a, x(c = b.attr(c))) return c;
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
        J(c) || (c = {}), c = w({
            strictDi: !1
        }, c);
        var d = function() {
            if (b = C(b), b.injector()) {
                var d = b[0] === X ? "document" : ua(b);
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
        return P && e.test(P.name) && (c.debugInfoEnabled = !0, P.name = P.name.replace(e, "")), 
        P && !f.test(P.name) ? d() : (P.name = P.name.replace(f, ""), aa.resumeBootstrap = function(b) {
            return s(b, function(b) {
                a.push(b);
            }), d();
        }, void (G(aa.resumeDeferredBootstrap) && aa.resumeDeferredBootstrap()));
    }
    function Kd() {
        P.name = "NG_ENABLE_DEBUG_INFO!" + P.name, P.location.reload();
    }
    function Ld(b) {
        if (b = aa.element(b).injector(), !b) throw Ka("test");
        return b.get("$$testability");
    }
    function uc(b, a) {
        return a = a || "_", b.replace(Md, function(b, d) {
            return (d ? a : "") + b.toLowerCase();
        });
    }
    function Nd() {
        var b;
        vc || ((ra = P.jQuery) && ra.fn.on ? (C = ra, w(ra.fn, {
            scope: La.scope,
            isolateScope: La.isolateScope,
            controller: La.controller,
            injector: La.injector,
            inheritedData: La.inheritedData
        }), b = ra.cleanData, ra.cleanData = function(a) {
            var c;
            if (Rb) Rb = !1; else for (var e, d = 0; null != (e = a[d]); d++) (c = ra._data(e, "events")) && c.$destroy && ra(e).triggerHandler("$destroy");
            b(a);
        }) : C = Q, aa.element = C, vc = !0);
    }
    function Sb(b, a, c) {
        if (!b) throw Ka("areq", a || "?", c || "required");
        return b;
    }
    function tb(b, a, c) {
        return c && E(b) && (b = b[b.length - 1]), Sb(G(b), a, "not a function, got " + (b && "object" == typeof b ? b.constructor.name || "Object" : typeof b)), 
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
        return C(c);
    }
    function fa() {
        return Object.create(null);
    }
    function Od(b) {
        function a(a, b, c) {
            return a[b] || (a[b] = c());
        }
        var c = M("$injector"), d = M("ng");
        return b = a(b, "angular", Object), b.$$minErr = b.$$minErr || M, a(b, "module", function() {
            var b = {};
            return function(f, g, h) {
                if ("hasOwnProperty" === f) throw d("badname", "module");
                return g && b.hasOwnProperty(f) && (b[f] = null), a(b, f, function() {
                    function a(c, d, e, f) {
                        return f || (f = b), function() {
                            return f[e || "push"]([ c, d, arguments ]), t;
                        };
                    }
                    if (!g) throw c("nomod", f);
                    var b = [], d = [], e = [], q = a("$injector", "invoke", "push", d), t = {
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
                    return h && q(h), t;
                });
            };
        });
    }
    function Pd(b) {
        w(b, {
            bootstrap: tc,
            copy: Ea,
            extend: w,
            equals: ea,
            element: C,
            forEach: s,
            injector: ab,
            noop: B,
            bind: oc,
            toJson: $a,
            fromJson: pc,
            identity: oa,
            isUndefined: z,
            isDefined: y,
            isString: x,
            isFunction: G,
            isObject: J,
            isNumber: V,
            isElement: nc,
            isArray: E,
            version: Qd,
            isDate: pa,
            lowercase: R,
            uppercase: vb,
            callbacks: {
                counter: 0
            },
            getTestability: Ld,
            $$minErr: M,
            $$csp: bb,
            reloadWithDebugInfo: Kd
        }), cb = Od(P);
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
        return b = b.nodeType, b === na || !b || 9 === b;
    }
    function Gc(b, a) {
        var c, d, e = a.createDocumentFragment(), f = [];
        if (Tb.test(b)) {
            for (c = c || e.appendChild(a.createElement("div")), d = (ef.exec(b) || [ "", "" ])[1].toLowerCase(), 
            d = ga[d] || ga._default, c.innerHTML = d[1] + b.replace(ff, "<$1></$2>") + d[2], 
            d = d[0]; d--; ) c = c.lastChild;
            f = Ya(f, c.childNodes), c = e.firstChild, c.textContent = "";
        } else f.push(a.createTextNode(b));
        return e.textContent = "", e.innerHTML = "", s(f, function(a) {
            e.appendChild(a);
        }), e;
    }
    function Q(b) {
        if (b instanceof Q) return b;
        var a;
        if (x(b) && (b = T(b), a = !0), !(this instanceof Q)) {
            if (a && "<" != b.charAt(0)) throw Ub("nosel");
            return new Q(b);
        }
        if (a) {
            a = X;
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
        Ic(b)), delete Ab[c], b.ng339 = u));
    }
    function zb(b, a) {
        var c = b.ng339, c = c && Ab[c];
        return a && !c && (b.ng339 = c = ++hf, c = Ab[c] = {
            events: {},
            data: {},
            handle: u
        }), c;
    }
    function Wb(b, a, c) {
        if (Fc(b)) {
            var d = y(c), e = !d && a && !J(a), f = !a;
            if (b = (b = zb(b, !e)) && b.data, d) b[a] = c; else {
                if (f) return b;
                if (e) return b && b[a];
                w(b, a);
            }
        }
    }
    function Bb(b, a) {
        return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1;
    }
    function Cb(b, a) {
        a && b.setAttribute && s(a.split(" "), function(a) {
            b.setAttribute("class", T((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + T(a) + " ", " ")));
        });
    }
    function Db(b, a) {
        if (a && b.setAttribute) {
            var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            s(a.split(" "), function(a) {
                a = T(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ");
            }), b.setAttribute("class", T(c));
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
        for (9 == b.nodeType && (b = b.documentElement), a = E(a) ? a : [ a ]; b; ) {
            for (var d = 0, e = a.length; e > d; d++) if ((c = C.data(b, a[d])) !== u) return c;
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
        a = a || P, "complete" === a.document.readyState ? a.setTimeout(b) : C(a).on("load", b);
    }
    function Mc(b, a) {
        var c = Fb[a.toLowerCase()];
        return c && Nc[ta(b)] && c;
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
                if (z(c.immediatePropagationStopped)) {
                    var h = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function() {
                        c.immediatePropagationStopped = !0, c.stopPropagation && c.stopPropagation(), h && h.call(c);
                    };
                }
                c.isImmediatePropagationStopped = function() {
                    return !0 === c.immediatePropagationStopped;
                }, g > 1 && (f = qa(f));
                for (var l = 0; g > l; l++) c.isImmediatePropagationStopped() || f[l].call(b, c);
            }
        };
        return c.elem = b, c;
    }
    function bf() {
        this.$get = function() {
            return w(Q, {
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
                return J(b) ? void s(b, lc(a)) : a(b, c);
            };
        }
        function d(a, b) {
            if (Ma(a, "service"), (G(b) || E(b)) && (b = q.instantiate(b)), !b.$get) throw Ga("pget", a);
            return p[a + "Provider"] = b;
        }
        function e(a, b) {
            return function() {
                var c = r.invoke(b, this);
                if (z(c)) throw Ga("undef", a);
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
                        x(a) ? (c = cb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), 
                        d(c._configBlocks)) : G(a) ? b.push(q.invoke(a)) : E(a) ? b.push(q.invoke(a)) : tb(a, "module");
                    } catch (e) {
                        throw E(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), 
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
                var l, q, p, h = [], k = ab.$$annotate(b, a, g);
                for (q = 0, l = k.length; l > q; q++) {
                    if (p = k[q], "string" != typeof p) throw Ga("itkn", p);
                    h.push(f && f.hasOwnProperty(p) ? f[p] : d(p, g));
                }
                return E(b) && (b = b[l]), b.apply(c, h);
            }
            return {
                invoke: e,
                instantiate: function(a, b, c) {
                    var d = Object.create((E(a) ? a[a.length - 1] : a).prototype || null);
                    return a = e(a, d, b, c), J(a) || G(a) ? a : d;
                },
                get: d,
                annotate: ab.$$annotate,
                has: function(a) {
                    return p.hasOwnProperty(a + "Provider") || b.hasOwnProperty(a);
                }
            };
        }
        a = !0 === a;
        var l = {}, k = [], m = new eb([], !0), p = {
            $provide: {
                provider: c(d),
                factory: c(f),
                service: c(function(a, b) {
                    return f(a, [ "$injector", function(a) {
                        return a.instantiate(b);
                    } ]);
                }),
                value: c(function(a, b) {
                    return f(a, da(b), !1);
                }),
                constant: c(function(a, b) {
                    Ma(a, "constant"), p[a] = b, t[a] = b;
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
        }, q = p.$injector = h(p, function(a, b) {
            throw aa.isString(b) && k.push(b), Ga("unpr", k.join(" <- "));
        }), t = {}, r = t.$injector = h(t, function(a, b) {
            var c = q.get(a + "Provider", b);
            return r.invoke(c.$get, c, u, a);
        });
        return s(g(b), function(a) {
            r.invoke(a || B);
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
                    return "a" === ta(a) ? (b = a, !0) : void 0;
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
                if (n--, 0 === n) for (;D.length; ) try {
                    D.pop()();
                } catch (b) {
                    c.error(b);
                }
            }
        }
        function f(a, b) {
            !function ca() {
                s(H, function(a) {
                    a();
                }), v = b(ca, a);
            }();
        }
        function g() {
            h(), l();
        }
        function h() {
            A = b.history.state, A = z(A) ? null : A, ea(A, O) && (A = O), O = A;
        }
        function l() {
            (F !== m.url() || N !== A) && (F = m.url(), N = A, s(W, function(a) {
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
        var m = this, p = a[0], q = b.location, t = b.history, r = b.setTimeout, S = b.clearTimeout, K = {};
        m.isMock = !1;
        var n = 0, D = [];
        m.$$completeOutstandingRequest = e, m.$$incOutstandingRequestCount = function() {
            n++;
        }, m.notifyWhenNoOutstandingRequests = function(a) {
            s(H, function(a) {
                a();
            }), 0 === n ? a() : D.push(a);
        };
        var v, H = [];
        m.addPollFn = function(a) {
            return z(v) && f(100, r), H.push(a), a;
        };
        var A, N, F = q.href, ba = a.find("base"), I = null;
        h(), N = A, m.url = function(a, c, e) {
            if (z(e) && (e = null), q !== b.location && (q = b.location), t !== b.history && (t = b.history), 
            a) {
                var f = N === e;
                if (F === a && (!d.history || f)) return m;
                var g = F && Ha(F) === Ha(a);
                return F = a, N = e, !d.history || g && f ? (g || (I = a), c ? q.replace(a) : g ? (c = q, 
                e = a.indexOf("#"), a = -1 === e ? "" : a.substr(e + 1), c.hash = a) : q.href = a) : (t[c ? "replaceState" : "pushState"](e, "", a), 
                h(), N = A), m;
            }
            return I || q.href.replace(/%27/g, "'");
        }, m.state = function() {
            return A;
        };
        var W = [], va = !1, O = null;
        m.onUrlChange = function(a) {
            return va || (d.history && C(b).on("popstate", g), C(b).on("hashchange", g), va = !0), 
            W.push(a), a;
        }, m.$$checkUrlChange = l, m.baseHref = function() {
            var a = ba.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
        };
        var wa = {}, y = "", ha = m.baseHref();
        m.cookies = function(a, b) {
            var d, e, f, g;
            if (!a) {
                if (p.cookie !== y) for (y = p.cookie, d = y.split("; "), wa = {}, f = 0; f < d.length; f++) e = d[f], 
                g = e.indexOf("="), g > 0 && (a = k(e.substring(0, g)), wa[a] === u && (wa[a] = k(e.substring(g + 1))));
                return wa;
            }
            b === u ? p.cookie = encodeURIComponent(a) + "=;path=" + ha + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : x(b) && (d = (p.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) + ";path=" + ha).length + 1, 
            d > 4096 && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!"));
        }, m.defer = function(a, b) {
            var c;
            return n++, c = r(function() {
                delete K[c], e(a);
            }, b || 0), K[c] = !0, c;
        }, m.defer.cancel = function(a) {
            return K[a] ? (delete K[a], S(a), e(B), !0) : !1;
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
                    a != p && (q ? q == a && (q = a.n) : q = a, f(a.n, a.p), f(a, p), p = a, p.n = null);
                }
                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a));
                }
                if (b in a) throw M("$cacheFactory")("iid", b);
                var g = 0, h = w({}, d, {
                    id: b
                }), l = {}, k = d && d.capacity || Number.MAX_VALUE, m = {}, p = null, q = null;
                return a[b] = {
                    put: function(a, b) {
                        if (k < Number.MAX_VALUE) {
                            var c = m[a] || (m[a] = {
                                key: a
                            });
                            e(c);
                        }
                        return z(b) ? void 0 : (a in l || g++, l[a] = b, g > k && this.remove(q.key), b);
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
                            b == p && (p = b.p), b == q && (q = b.n), f(b.n, b.p), delete m[a];
                        }
                        delete l[a], g--;
                    },
                    removeAll: function() {
                        l = {}, g = 0, m = {}, p = q = null;
                    },
                    destroy: function() {
                        m = h = l = null, delete a[b];
                    },
                    info: function() {
                        return w({}, h, {
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
                if (!f) throw ia("iscp", b, e, a);
                d[e] = {
                    mode: f[1][0],
                    collection: "*" === f[2],
                    optional: "?" === f[3],
                    attrName: f[4] || e
                };
            }), d;
        }
        var d = {}, e = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, f = /(([\w\-]+)(?:\:([^;]+))?;?)/, g = Gd("ngSrc,ngSrcset,src,srcset"), h = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, l = /^(on[a-z]+|formaction)$/;
        this.directive = function p(a, e) {
            return Ma(a, "directive"), x(a) ? (Sb(e, "directiveFactory"), d.hasOwnProperty(a) || (d[a] = [], 
            b.factory(a + "Directive", [ "$injector", "$exceptionHandler", function(b, e) {
                var f = [];
                return s(d[a], function(d, g) {
                    try {
                        var h = b.invoke(d);
                        G(h) ? h = {
                            compile: da(h)
                        } : !h.compile && h.link && (h.compile = da(h.link)), h.priority = h.priority || 0, 
                        h.index = g, h.name = h.name || a, h.require = h.require || h.controller && h.name, 
                        h.restrict = h.restrict || "EA", J(h.scope) && (h.$$isolateBindings = c(h.scope, h.name)), 
                        f.push(h);
                    } catch (l) {
                        e(l);
                    }
                }), f;
            } ])), d[a].push(e)) : s(a, lc(p)), this;
        }, this.aHrefSanitizationWhitelist = function(b) {
            return y(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist();
        }, this.imgSrcSanitizationWhitelist = function(b) {
            return y(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist();
        };
        var k = !0;
        this.debugInfoEnabled = function(a) {
            return y(a) ? (k = a, this) : k;
        }, this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, b, c, r, S, K, n, D, H, v, A) {
            function N(a, b) {
                try {
                    a.addClass(b);
                } catch (c) {}
            }
            function F(a, b, c, d, e) {
                a instanceof C || (a = C(a)), s(a, function(b, c) {
                    b.nodeType == qb && b.nodeValue.match(/\S+/) && (a[c] = C(b).wrap("<span></span>").parent()[0]);
                });
                var f = ba(a, b, a, c, d, e);
                F.$$addScopeClass(a);
                var g = null;
                return function(b, c, d) {
                    Sb(b, "scope"), d = d || {};
                    var e = d.parentBoundTranscludeFn, h = d.transcludeControllers;
                    if (d = d.futureParentElement, e && e.$$boundTransclude && (e = e.$$boundTransclude), 
                    g || (g = (d = d && d[0]) && "foreignobject" !== ta(d) && d.toString().match(/SVG/) ? "svg" : "html"), 
                    d = "html" !== g ? C(Xb(g, C("<div>").append(a).html())) : c ? La.clone.call(a) : a, 
                    h) for (var l in h) d.data("$" + l + "Controller", h[l].instance);
                    return F.$$addScopeInfo(d, b), c && c(d, b), f && f(b, d, d, e), d;
                };
            }
            function ba(a, b, c, d, e, f) {
                function g(a, c, d, e) {
                    var f, l, k, q, p, r, D;
                    if (n) for (D = Array(c.length), q = 0; q < h.length; q += 3) f = h[q], D[f] = c[f]; else D = c;
                    for (q = 0, p = h.length; p > q; ) l = D[h[q++]], c = h[q++], f = h[q++], c ? (c.scope ? (k = a.$new(), 
                    F.$$addScopeInfo(C(l), k)) : k = a, r = c.transcludeOnThisElement ? I(a, c.transclude, e, c.elementTranscludeOnThisElement) : !c.templateOnThisElement && e ? e : !e && b ? I(a, b) : null, 
                    c(f, k, l, d, r)) : f && f(a, l.childNodes, u, e);
                }
                for (var l, k, q, p, n, h = [], r = 0; r < a.length; r++) l = new Yb(), k = W(a[r], [], l, 0 === r ? d : u, e), 
                (f = k.length ? y(k, a[r], l, b, c, null, [], [], f) : null) && f.scope && F.$$addScopeClass(l.$$element), 
                l = f && f.terminal || !(q = a[r].childNodes) || !q.length ? null : ba(q, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b), 
                (f || l) && (h.push(r, f, l), p = !0, n = n || f), f = null;
                return p ? g : null;
            }
            function I(a, b, c) {
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
                  case na:
                    ha(b, ya(ta(a)), "E", d, g);
                    for (var k, q, p, n = a.attributes, r = 0, D = n && n.length; D > r; r++) {
                        var S = !1, t = !1;
                        k = n[r], l = k.name, q = T(k.value), k = ya(l), (p = Pa.test(k)) && (l = l.replace(Sc, "").substr(8).replace(/_(.)/g, function(a, b) {
                            return b.toUpperCase();
                        }));
                        var A = k.replace(/(Start|End)$/, "");
                        fb(A) && k === A + "Start" && (S = l, t = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6)), 
                        k = ya(l.toLowerCase()), h[k] = l, (p || !c.hasOwnProperty(k)) && (c[k] = q, Mc(a, k) && (c[k] = !0)), 
                        Aa(a, b, q, k, p), ha(b, k, "A", d, g, S, t);
                    }
                    if (a = a.className, J(a) && (a = a.animVal), x(a) && "" !== a) for (;l = f.exec(a); ) k = ya(l[2]), 
                    ha(b, k, "C", d, g) && (c[k] = T(l[3])), a = a.substr(l.index + l[0].length);
                    break;

                  case qb:
                    P(b, a.nodeValue);
                    break;

                  case 8:
                    try {
                        (l = e.exec(a.nodeValue)) && (k = ya(l[1]), ha(b, k, "M", d, g) && (c[k] = T(l[2])));
                    } catch (v) {}
                }
                return b.sort(ca), b;
            }
            function va(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw ia("uterdir", b, c);
                        a.nodeType == na && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), 
                        a = a.nextSibling;
                    } while (e > 0);
                } else d.push(a);
                return C(d);
            }
            function O(a, b, c) {
                return function(d, e, f, g, h) {
                    return e = va(e[0], b, c), a(d, e, f, g, h);
                };
            }
            function y(a, d, e, f, g, l, k, p, n) {
                function r(a, b, c, d) {
                    a && (c && (a = O(a, c, d)), a.require = L.require, a.directiveName = ca, (I === L || L.$$isolateScope) && (a = Y(a, {
                        isolateScope: !0
                    })), k.push(a)), b && (c && (b = O(b, c, d)), b.require = L.require, b.directiveName = ca, 
                    (I === L || L.$$isolateScope) && (b = Y(b, {
                        isolateScope: !0
                    })), p.push(b));
                }
                function D(a, b, c, d) {
                    var e, k, f = "data", g = !1, l = c;
                    if (x(b)) {
                        if (k = b.match(h), b = b.substring(k[0].length), k[3] && (k[1] ? k[3] = null : k[1] = k[3]), 
                        "^" === k[1] ? f = "inheritedData" : "^^" === k[1] && (f = "inheritedData", l = c.parent()), 
                        "?" === k[2] && (g = !0), e = null, d && "data" === f && (e = d[b]) && (e = e.instance), 
                        e = e || l[f]("$" + b + "Controller"), !e && !g) throw ia("ctreq", b, a);
                        return e || null;
                    }
                    return E(b) && (e = [], s(b, function(b) {
                        e.push(D(a, b, c, d));
                    })), e;
                }
                function A(a, c, f, g, h) {
                    function l(a, b, c) {
                        var d;
                        return Va(a) || (c = b, b = a, a = u), B && (d = N), c || (c = B ? W.parent() : W), 
                        h(a, b, d, c, va);
                    }
                    var n, r, t, v, N, gb, W, O;
                    if (d === f ? (O = e, W = e.$$element) : (W = C(f), O = new Yb(W, e)), I && (v = c.$new(!0)), 
                    h && (gb = l, gb.$$boundTransclude = h), H && (ba = {}, N = {}, s(H, function(a) {
                        var b = {
                            $scope: a === I || a.$$isolateScope ? v : c,
                            $element: W,
                            $attrs: O,
                            $transclude: gb
                        };
                        t = a.controller, "@" == t && (t = O[a.name]), b = K(t, b, !0, a.controllerAs), 
                        N[a.name] = b, B || W.data("$" + a.name + "Controller", b.instance), ba[a.name] = b;
                    })), I) {
                        F.$$addScopeInfo(W, v, !0, !(ja && (ja === I || ja === I.$$originalDirective))), 
                        F.$$addScopeClass(W, !0), g = ba && ba[I.name];
                        var xa = v;
                        g && g.identifier && !0 === I.bindToController && (xa = g.instance), s(v.$$isolateBindings = I.$$isolateBindings, function(a, d) {
                            var g, h, l, k, e = a.attrName, f = a.optional;
                            switch (a.mode) {
                              case "@":
                                O.$observe(e, function(a) {
                                    xa[d] = a;
                                }), O.$$observers[e].$$scope = c, O[e] && (xa[d] = b(O[e])(c));
                                break;

                              case "=":
                                if (f && !O[e]) break;
                                h = S(O[e]), k = h.literal ? ea : function(a, b) {
                                    return a === b || a !== a && b !== b;
                                }, l = h.assign || function() {
                                    throw g = xa[d] = h(c), ia("nonassign", O[e], I.name);
                                }, g = xa[d] = h(c), f = function(a) {
                                    return k(a, xa[d]) || (k(a, g) ? l(c, a = xa[d]) : xa[d] = a), g = a;
                                }, f.$stateful = !0, f = a.collection ? c.$watchCollection(O[e], f) : c.$watch(S(O[e], f), null, h.literal), 
                                v.$on("$destroy", f);
                                break;

                              case "&":
                                h = S(O[e]), xa[d] = function(a) {
                                    return h(c, a);
                                };
                            }
                        });
                    }
                    for (ba && (s(ba, function(a) {
                        a();
                    }), ba = null), g = 0, n = k.length; n > g; g++) r = k[g], Z(r, r.isolateScope ? v : c, W, O, r.require && D(r.directiveName, r.require, W, N), gb);
                    var va = c;
                    for (I && (I.template || null === I.templateUrl) && (va = v), a && a(va, f.childNodes, u, h), 
                    g = p.length - 1; g >= 0; g--) r = p[g], Z(r, r.isolateScope ? v : c, W, O, r.require && D(r.directiveName, r.require, W, N), gb);
                }
                n = n || {};
                for (var N, ba, L, ca, U, P, v = -Number.MAX_VALUE, H = n.controllerDirectives, I = n.newIsolateScopeDirective, ja = n.templateDirective, wa = n.nonTlbTranscludeDirective, ha = !1, fb = !1, B = n.hasElementTranscludeDirective, w = e.$$element = C(d), R = f, Q = 0, Aa = a.length; Aa > Q; Q++) {
                    L = a[Q];
                    var Pa = L.$$start, $ = L.$$end;
                    if (Pa && (w = va(d, Pa, $)), U = u, v > L.priority) break;
                    if ((U = L.scope) && (L.templateUrl || (J(U) ? (Oa("new/isolated scope", I || N, L, w), 
                    I = L) : Oa("new/isolated scope", I, L, w)), N = N || L), ca = L.name, !L.templateUrl && L.controller && (U = L.controller, 
                    H = H || {}, Oa("'" + ca + "' controller", H[ca], L, w), H[ca] = L), (U = L.transclude) && (ha = !0, 
                    L.$$tlb || (Oa("transclusion", wa, L, w), wa = L), "element" == U ? (B = !0, v = L.priority, 
                    U = w, w = e.$$element = C(X.createComment(" " + ca + ": " + e[ca] + " ")), d = w[0], 
                    V(g, Za.call(U, 0), d), R = F(U, f, v, l && l.name, {
                        nonTlbTranscludeDirective: wa
                    })) : (U = C(Vb(d)).contents(), w.empty(), R = F(U, f))), L.template) if (fb = !0, 
                    Oa("template", ja, L, w), ja = L, U = G(L.template) ? L.template(w, e) : L.template, 
                    U = Tc(U), L.replace) {
                        if (l = L, U = Tb.test(U) ? Uc(Xb(L.templateNamespace, T(U))) : [], d = U[0], 1 != U.length || d.nodeType !== na) throw ia("tplrt", ca, "");
                        V(g, w, d), Aa = {
                            $attr: {}
                        }, U = W(d, [], Aa);
                        var of = a.splice(Q + 1, a.length - (Q + 1));
                        I && z(U), a = a.concat(U).concat(of), Rc(e, Aa), Aa = a.length;
                    } else w.html(U);
                    if (L.templateUrl) fb = !0, Oa("template", ja, L, w), ja = L, L.replace && (l = L), 
                    A = M(a.splice(Q, a.length - Q), w, e, g, ha && R, k, p, {
                        controllerDirectives: H,
                        newIsolateScopeDirective: I,
                        templateDirective: ja,
                        nonTlbTranscludeDirective: wa
                    }), Aa = a.length; else if (L.compile) try {
                        P = L.compile(w, e, R), G(P) ? r(null, P, Pa, $) : P && r(P.pre, P.post, Pa, $);
                    } catch (aa) {
                        c(aa, ua(w));
                    }
                    L.terminal && (A.terminal = !0, v = Math.max(v, L.priority));
                }
                return A.scope = N && !0 === N.scope, A.transcludeOnThisElement = ha, A.elementTranscludeOnThisElement = B, 
                A.templateOnThisElement = fb, A.transclude = R, n.hasElementTranscludeDirective = B, 
                A;
            }
            function z(a) {
                for (var b = 0, c = a.length; c > b; b++) a[b] = Pb(a[b], {
                    $$isolateScope: !0
                });
            }
            function ha(b, e, f, g, h, l, k) {
                if (e === h) return null;
                if (h = null, d.hasOwnProperty(e)) {
                    var q;
                    e = a.get(e + "Directive");
                    for (var n = 0, r = e.length; r > n; n++) try {
                        q = e[n], (g === u || g > q.priority) && -1 != q.restrict.indexOf(f) && (l && (q = Pb(q, {
                            $$start: l,
                            $$end: k
                        })), b.push(q), h = q);
                    } catch (D) {
                        c(D);
                    }
                }
                return h;
            }
            function fb(b) {
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
                    "class" == f ? (N(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), 
                    a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, 
                    d[f] = c[f]);
                });
            }
            function M(a, b, c, d, e, f, g, h) {
                var k, q, l = [], p = b[0], n = a.shift(), D = Pb(n, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: n
                }), S = G(n.templateUrl) ? n.templateUrl(b, c) : n.templateUrl, t = n.templateNamespace;
                return b.empty(), r(H.getTrustedResourceUrl(S)).then(function(r) {
                    var A, v;
                    if (r = Tc(r), n.replace) {
                        if (r = Tb.test(r) ? Uc(Xb(t, T(r))) : [], A = r[0], 1 != r.length || A.nodeType !== na) throw ia("tplrt", n.name, S);
                        r = {
                            $attr: {}
                        }, V(d, b, A);
                        var H = W(A, [], r);
                        J(n.scope) && z(H), a = H.concat(a), Rc(c, r);
                    } else A = p, b.html(r);
                    for (a.unshift(D), k = y(a, A, c, e, b, n, f, g, h), s(d, function(a, c) {
                        a == A && (d[c] = b[0]);
                    }), q = ba(b[0].childNodes, e); l.length; ) {
                        r = l.shift(), v = l.shift();
                        var F = l.shift(), K = l.shift(), H = b[0];
                        if (!r.$$destroyed) {
                            if (v !== p) {
                                var O = v.className;
                                h.hasElementTranscludeDirective && n.replace || (H = Vb(A)), V(F, C(v), H), N(C(H), O);
                            }
                            v = k.transcludeOnThisElement ? I(r, k.transclude, K) : K, k(q, r, H, d, v);
                        }
                    }
                    l = null;
                }), function(a, b, c, d, e) {
                    a = e, b.$$destroyed || (l ? l.push(b, c, d, a) : (k.transcludeOnThisElement && (a = I(b, k.transclude, e)), 
                    k(q, b, c, d, a)));
                };
            }
            function ca(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
            }
            function Oa(a, b, c, d) {
                if (b) throw ia("multidir", b.name, c.name, a, ua(d));
            }
            function P(a, c) {
                var d = b(c, !0);
                d && a.push({
                    priority: 0,
                    compile: function(a) {
                        a = a.parent();
                        var b = !!a.length;
                        return b && F.$$addBindingClass(a), function(a, c) {
                            var e = c.parent();
                            b || F.$$addBindingClass(e), F.$$addBindingInfo(e, d.expressions), a.$watch(d, function(a) {
                                c[0].nodeValue = a;
                            });
                        };
                    }
                });
            }
            function Xb(a, b) {
                switch (a = R(a || "html")) {
                  case "svg":
                  case "math":
                    var c = X.createElement("div");
                    return c.innerHTML = "<" + a + ">" + b + "</" + a + ">", c.childNodes[0].childNodes;

                  default:
                    return b;
                }
            }
            function Q(a, b) {
                if ("srcdoc" == b) return H.HTML;
                var c = ta(a);
                return "xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b) ? H.RESOURCE_URL : void 0;
            }
            function Aa(a, c, d, e, f) {
                var h = Q(a, e);
                f = g[e] || f;
                var k = b(d, !0, h, f);
                if (k) {
                    if ("multiple" === e && "select" === ta(a)) throw ia("selmulti", ua(a));
                    c.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(a, c, g) {
                                    if (c = g.$$observers || (g.$$observers = {}), l.test(e)) throw ia("nodomevents");
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
                for (f && f.replaceChild(c, d), a = X.createDocumentFragment(), a.appendChild(d), 
                C(c).data(C(d).data()), ra ? (Rb = !0, ra.cleanData([ d ])) : delete C.cache[d[C.expando]], 
                d = 1, e = b.length; e > d; d++) f = b[d], C(f).remove(), a.appendChild(f), delete b[d];
                b[0] = c, b.length = 1;
            }
            function Y(a, b) {
                return w(function() {
                    return a.apply(null, arguments);
                }, a, b);
            }
            function Z(a, b, d, e, f, g) {
                try {
                    a(b, d, e, f, g);
                } catch (h) {
                    c(h, ua(d));
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
                    a && 0 < a.length && v.addClass(this.$$element, a);
                },
                $removeClass: function(a) {
                    a && 0 < a.length && v.removeClass(this.$$element, a);
                },
                $updateClass: function(a, b) {
                    var c = Vc(a, b);
                    c && c.length && v.addClass(this.$$element, c), (c = Vc(b, a)) && c.length && v.removeClass(this.$$element, c);
                },
                $set: function(a, b, d, e) {
                    var f = this.$$element[0], g = Mc(f, a), h = kf(f, a), f = a;
                    if (g ? (this.$$element.prop(a, b), e = g) : h && (this[h] = b, f = h), this[a] = b, 
                    e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = uc(a, "-")), 
                    g = ta(this.$$element), "a" === g && "href" === a || "img" === g && "src" === a) this[a] = b = A(b, "src" === a); else if ("img" === g && "srcset" === a) {
                        for (var g = "", h = T(b), l = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, l = /\s/.test(h) ? l : /(,)/, h = h.split(l), l = Math.floor(h.length / 2), k = 0; l > k; k++) var q = 2 * k, g = g + A(T(h[q]), !0), g = g + (" " + T(h[q + 1]));
                        h = T(h[2 * k]).split(/\s/), g += A(T(h[0]), !0), 2 === h.length && (g += " " + T(h[1])), 
                        this[a] = b = g;
                    }
                    !1 !== d && (null === b || b === u ? this.$$element.removeAttr(e) : this.$$element.attr(e, b)), 
                    (a = this.$$observers) && s(a[f], function(a) {
                        try {
                            a(b);
                        } catch (d) {
                            c(d);
                        }
                    });
                },
                $observe: function(a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = fa()), e = d[a] || (d[a] = []);
                    return e.push(b), n.$evalAsync(function() {
                        !e.$$inter && c.hasOwnProperty(a) && b(c[a]);
                    }), function() {
                        Xa(e, b);
                    };
                }
            };
            var U = b.startSymbol(), ja = b.endSymbol(), Tc = "{{" == U || "}}" == ja ? oa : function(a) {
                return a.replace(/\{\{/g, U).replace(/}}/g, ja);
            }, Pa = /^ngAttr[A-Z]/;
            return F.$$addBindingInfo = k ? function(a, b) {
                var c = a.data("$binding") || [];
                E(b) ? c = c.concat(b) : c.push(b), a.data("$binding", c);
            } : B, F.$$addBindingClass = k ? function(a) {
                N(a, "ng-binding");
            } : B, F.$$addScopeInfo = k ? function(a, b, c, d) {
                a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b);
            } : B, F.$$addScopeClass = k ? function(a, b) {
                N(a, b ? "ng-isolate-scope" : "ng-scope");
            } : B, F;
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
        b = C(b);
        var a = b.length;
        if (1 >= a) return b;
        for (;a--; ) 8 === b[a].nodeType && pf.call(b, a, 1);
        return b;
    }
    function Fe() {
        var b = {}, a = !1, c = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(a, c) {
            Ma(a, "controller"), J(a) ? w(b, a) : b[a] = c;
        }, this.allowGlobals = function() {
            a = !0;
        }, this.$get = [ "$injector", "$window", function(d, e) {
            function f(a, b, c, d) {
                if (!a || !J(a.$scope)) throw M("$controller")("noscp", d, b);
                a.$scope[b] = c;
            }
            return function(g, h, l, k) {
                var m, p, q;
                if (l = !0 === l, k && x(k) && (q = k), x(g)) {
                    if (k = g.match(c), !k) throw qf("ctrlfmt", g);
                    p = k[1], q = q || k[3], g = b.hasOwnProperty(p) ? b[p] : wc(h.$scope, p, !0) || (a ? wc(e, p, !0) : u), 
                    tb(g, p, !0);
                }
                return l ? (l = (E(g) ? g[g.length - 1] : g).prototype, m = Object.create(l || null), 
                q && f(h, q, m, p || g.name), w(function() {
                    return d.invoke(g, m, h, p), m;
                }, {
                    instance: m,
                    identifier: q
                })) : (m = d.instantiate(g, h, p), q && f(h, q, m, p || g.name), m);
            };
        } ];
    }
    function Ge() {
        this.$get = [ "$window", function(b) {
            return C(b.document);
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
        if (x(b)) {
            var c = b.replace(rf, "").trim();
            if (c) {
                var d = a("Content-Type");
                (d = d && 0 === d.indexOf(Wc)) || (d = (d = c.match(sf)) && tf[d[0]].test(c)), d && (b = pc(c));
            }
        }
        return b;
    }
    function Xc(b) {
        var c, d, e, a = fa();
        return b ? (s(b.split("\n"), function(b) {
            e = b.indexOf(":"), c = R(T(b.substr(0, e))), d = T(b.substr(e + 1)), c && (a[c] = a[c] ? a[c] + ", " + d : d);
        }), a) : a;
    }
    function Yc(b) {
        var a = J(b) ? b : u;
        return function(c) {
            return a || (a = Xc(b)), c ? (c = a[R(c)], void 0 === c && (c = null), c) : a;
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
                return J(a) && "[object File]" !== Da.call(a) && "[object Blob]" !== Da.call(a) && "[object FormData]" !== Da.call(a) ? $a(a) : a;
            } ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: qa($b),
                put: qa($b),
                patch: qa($b)
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
                    var b = w({}, a);
                    return b.data = a.data ? Zc(a.data, a.headers, a.status, e.transformResponse) : a.data, 
                    a = a.status, a >= 200 && 300 > a ? b : h.reject(b);
                }
                function d(a) {
                    var b, c = {};
                    return s(a, function(a, d) {
                        G(a) ? (b = a(), null != b && (c[d] = b)) : c[d] = a;
                    }), c;
                }
                if (!aa.isObject(a)) throw M("$http")("badreq", a);
                var e = w({
                    method: "get",
                    transformRequest: b.transformRequest,
                    transformResponse: b.transformResponse
                }, a);
                e.headers = function(a) {
                    var f, g, c = b.headers, e = w({}, a.headers), c = w({}, c.common, c[R(a.method)]);
                    a: for (f in c) {
                        a = R(f);
                        for (g in e) if (R(g) === a) continue a;
                        e[f] = c[f];
                    }
                    return d(e);
                }(a), e.method = vb(e.method);
                var f = [ function(a) {
                    var d = a.headers, e = Zc(a.data, Yc(d), u, a.transformRequest);
                    return z(e) && s(d, function(a, b) {
                        "content-type" === R(b) && delete d[b];
                    }), z(a.withCredentials) && !z(b.withCredentials) && (a.withCredentials = b.withCredentials), 
                    m(a, e).then(c, c);
                }, u ], g = h.when(e);
                for (s(t, function(a) {
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
                        n(c, b, d, e);
                    }
                    N && (b >= 200 && 300 > b ? N.put(I, [ b, c, Xc(d), e ]) : N.remove(I)), a ? g.$applyAsync(f) : (f(), 
                    g.$$phase || g.$apply());
                }
                function n(a, b, d, e) {
                    b = Math.max(b, 0), (b >= 200 && 300 > b ? v.resolve : v.reject)({
                        data: a,
                        status: b,
                        headers: Yc(d),
                        config: c,
                        statusText: e
                    });
                }
                function m(a) {
                    n(a.data, a.status, qa(a.headers()), a.statusText);
                }
                function t() {
                    var a = k.pendingRequests.indexOf(c);
                    -1 !== a && k.pendingRequests.splice(a, 1);
                }
                var N, F, v = h.defer(), A = v.promise, s = c.headers, I = p(c.url, c.params);
                return k.pendingRequests.push(c), A.then(t, t), !c.cache && !b.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (N = J(c.cache) ? c.cache : J(b.cache) ? b.cache : q), 
                N && (F = N.get(I), y(F) ? F && G(F.then) ? F.then(m, m) : E(F) ? n(F[1], F[0], qa(F[2]), F[3]) : n(F, 200, {}, "OK") : N.put(I, A)), 
                z(F) && ((F = $c(c.url) ? e.cookies()[c.xsrfCookieName || b.xsrfCookieName] : u) && (s[c.xsrfHeaderName || b.xsrfHeaderName] = F), 
                d(c.method, I, f, l, s, c.timeout, c.withCredentials, c.responseType)), A;
            }
            function p(a, b) {
                if (!b) return a;
                var c = [];
                return Ed(b, function(a, b) {
                    null === a || z(a) || (E(a) || (a = [ a ]), s(a, function(a) {
                        J(a) && (a = pa(a) ? a.toISOString() : $a(a)), c.push(Fa(b) + "=" + Fa(a));
                    }));
                }), 0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&")), a;
            }
            var q = f("$http"), t = [];
            return s(c, function(a) {
                t.unshift(x(a) ? l.get(a) : l.invoke(a));
            }), k.pendingRequests = [], function() {
                s(arguments, function(a) {
                    k[a] = function(b, c) {
                        return k(w(c || {}, {
                            method: a,
                            url: b
                        }));
                    };
                });
            }("get", "delete", "head", "jsonp"), function() {
                s(arguments, function(a) {
                    k[a] = function(b, c, d) {
                        return k(w(d || {}, {
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
        return new P.XMLHttpRequest();
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
                var g = -1, t = "unknown";
                a && ("load" !== a.type || d[b].called || (a = {
                    type: "error"
                }), t = a.type, g = "error" === a.type ? 404 : 200), c && c(g, t);
            }, f.addEventListener("load", m, !1), f.addEventListener("error", m, !1), e.body.appendChild(f), 
            m;
        }
        return function(e, h, l, k, m, p, q, t) {
            function r() {
                n && n(), D && D.abort();
            }
            function S(a, d, e, f, g) {
                v !== u && c.cancel(v), n = D = null, a(d, e, f, g), b.$$completeOutstandingRequest(B);
            }
            if (b.$$incOutstandingRequestCount(), h = h || b.url(), "jsonp" == R(e)) {
                var K = "_" + (d.counter++).toString(36);
                d[K] = function(a) {
                    d[K].data = a, d[K].called = !0;
                };
                var n = f(h.replace("JSON_CALLBACK", "angular.callbacks." + K), K, function(a, b) {
                    S(k, a, d[K].data, "", b), d[K] = B;
                });
            } else {
                var D = a();
                if (D.open(e, h, !0), s(m, function(a, b) {
                    y(a) && D.setRequestHeader(b, a);
                }), D.onload = function() {
                    var a = D.statusText || "", b = "response" in D ? D.response : D.responseText, c = 1223 === D.status ? 204 : D.status;
                    0 === c && (c = b ? 200 : "file" == Ba(h).protocol ? 404 : 0), S(k, c, b, D.getAllResponseHeaders(), a);
                }, e = function() {
                    S(k, -1, null, null, "");
                }, D.onerror = e, D.onabort = e, q && (D.withCredentials = !0), t) try {
                    D.responseType = t;
                } catch (H) {
                    if ("json" !== t) throw H;
                }
                D.send(l || null);
            }
            if (p > 0) var v = c(r, p); else p && G(p.then) && p.then(r);
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
            function g(f, g, t, r) {
                function S(c) {
                    return c.replace(k, b).replace(m, a);
                }
                function K(a) {
                    try {
                        var b = a;
                        a = t ? e.getTrusted(t, b) : e.valueOf(b);
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
                for (var n, D, H = 0, v = [], A = [], N = f.length, F = [], s = []; N > H; ) {
                    if (-1 == (n = f.indexOf(b, H)) || -1 == (D = f.indexOf(a, n + h))) {
                        H !== N && F.push(S(f.substring(H)));
                        break;
                    }
                    H !== n && F.push(S(f.substring(H, n))), H = f.substring(n + h, D), v.push(H), A.push(c(H, K)), 
                    H = D + l, s.push(F.length), F.push("");
                }
                if (t && 1 < F.length) throw ac("noconcat", f);
                if (!g || v.length) {
                    var I = function(a) {
                        for (var b = 0, c = v.length; c > b; b++) {
                            if (r && z(a[b])) return;
                            F[s[b]] = a[b];
                        }
                        return F.join("");
                    };
                    return w(function(a) {
                        var b = 0, c = v.length, e = Array(c);
                        try {
                            for (;c > b; b++) e[b] = A[b](a);
                            return I(e);
                        } catch (g) {
                            a = ac("interr", f, g.toString()), d(a);
                        }
                    }, {
                        exp: f,
                        expressions: v,
                        $$watchDelegate: function(a, b, c) {
                            var d;
                            return a.$watchGroup(A, function(c, e) {
                                var f = I(c);
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
                var m = a.setInterval, p = a.clearInterval, q = 0, t = y(k) && !k, r = (t ? d : c).defer(), S = r.promise;
                return l = y(l) ? l : 0, S.then(null, null, e), S.$$intervalId = m(function() {
                    r.notify(q++), l > 0 && q >= l && (r.resolve(q), p(S.$$intervalId), delete f[S.$$intervalId]), 
                    t || b.$apply();
                }, h), f[S.$$intervalId] = r, S;
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
        a.$$protocol = c.protocol, a.$$host = c.hostname, a.$$port = $(c.port) || wf[c.protocol] || null;
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
            if (!x(b)) throw Hb("ipthprfx", a, c);
            bd(b, this), this.$$path || (this.$$path = "/"), this.$$compose();
        }, this.$$compose = function() {
            var a = Qb(this.$$search), b = this.$$hash ? "#" + rb(this.$$hash) : "";
            this.$$url = bc(this.$$path) + (a ? "?" + a : "") + b, this.$$absUrl = c + this.$$url.substr(1);
        }, this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            return (f = za(b, d)) !== u ? (g = f, g = (f = za(a, f)) !== u ? c + (za("/", f) || f) : b + g) : (f = za(c, d)) !== u ? g = c + f : c == d + "/" && (g = c), 
            g && this.$$parse(g), !!g;
        };
    }
    function ec(b, a) {
        var c = cc(b);
        ad(b, this), this.$$parse = function(d) {
            d = za(b, d) || za(c, d);
            var e;
            "#" === d.charAt(0) ? (e = za(a, d), z(e) && (e = d)) : e = this.$$html5 ? d : "", 
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
            return z(c) ? this[b] : (this[b] = a(c), this.$$compose(), this);
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
            return Wa(b) ? (a.enabled = b, this) : J(b) ? (Wa(b.enabled) && (a.enabled = b.enabled), 
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
            var q, p = d.url();
            if (a.enabled) {
                if (!m && a.requireBase) throw Hb("nobase");
                q = p.substring(0, p.indexOf("/", p.indexOf("//") + 2)) + (m || "/"), m = e.history ? dc : cd;
            } else q = Ha(p), m = ec;
            k = new m(q, "#" + b), k.$$parseLinkUrl(p, p), k.$$state = d.state();
            var t = /^\s*(javascript|mailto):/i;
            f.on("click", function(b) {
                if (a.rewriteLinks && !b.ctrlKey && !b.metaKey && !b.shiftKey && 2 != b.which && 2 != b.button) {
                    for (var e = C(b.target); "a" !== ta(e[0]); ) if (e[0] === f[0] || !(e = e.parent())[0]) return;
                    var h = e.prop("href"), l = e.attr("href") || e.attr("xlink:href");
                    J(h) && "[object SVGAnimatedString]" === h.toString() && (h = Ba(h.animVal).href), 
                    t.test(h) || !h || e.attr("target") || b.isDefaultPrevented() || !k.$$parseLinkUrl(h, l) || (b.preventDefault(), 
                    k.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0));
                }
            }), Gb(k.absUrl()) != Gb(p) && d.url(k.absUrl(), !0);
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
                var b = c.console || {}, e = b[a] || b.log || B;
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
    function sa(b, a) {
        if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b) throw ka("isecfld", a);
        return b;
    }
    function la(b, a) {
        if (b) {
            if (b.constructor === b) throw ka("isecfn", a);
            if (b.window === b) throw ka("isecwindow", a);
            if (b.children && (b.nodeName || b.prop && b.attr && b.find)) throw ka("isecdom", a);
            if (b === Object) throw ka("isecobj", a);
        }
        return b;
    }
    function fc(b) {
        return b.constant;
    }
    function hb(b, a, c, d, e) {
        la(b, e), la(a, e), c = c.split(".");
        for (var f, g = 0; 1 < c.length; g++) {
            f = sa(c.shift(), e);
            var h = 0 === g && a && a[f] || b[f];
            h || (h = {}, b[f] = h), b = la(h, e);
        }
        return f = sa(c.shift(), e), la(b[f], e), b[f] = d;
    }
    function Qa(b) {
        return "constructor" == b;
    }
    function ed(b, a, c, d, e, f, g) {
        sa(b, f), sa(a, f), sa(c, f), sa(d, f), sa(e, f);
        var h = function(a) {
            return la(a, f);
        }, l = g || Qa(b) ? h : oa, k = g || Qa(a) ? h : oa, m = g || Qa(c) ? h : oa, p = g || Qa(d) ? h : oa, q = g || Qa(e) ? h : oa;
        return function(f, g) {
            var h = g && g.hasOwnProperty(b) ? g : f;
            return null == h ? h : (h = l(h[b]), a ? null == h ? u : (h = k(h[a]), c ? null == h ? u : (h = m(h[c]), 
            d ? null == h ? u : (h = p(h[d]), e ? null == h ? u : h = q(h[e]) : h) : h) : h) : h);
        };
    }
    function xf(b, a) {
        return function(c, d) {
            return b(c, d, la, a);
        };
    }
    function yf(b, a, c) {
        var d = a.expensiveChecks, e = d ? zf : Af, f = e[b];
        if (f) return f;
        var g = b.split("."), h = g.length;
        if (a.csp) f = 6 > h ? ed(g[0], g[1], g[2], g[3], g[4], c, d) : function(a, b) {
            var f, e = 0;
            do f = ed(g[e++], g[e++], g[e++], g[e++], g[e++], c, d)(a, b), b = u, a = f; while (h > e);
            return f;
        }; else {
            var l = "";
            d && (l += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var k = d;
            s(g, function(a, b) {
                sa(a, c);
                var e = (b ? "s" : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + "." + a;
                (d || Qa(a)) && (e = "eso(" + e + ", fe)", k = !0), l += "if(s == null) return undefined;\ns=" + e + ";\n";
            }), l += "return s;", a = new Function("s", "l", "eso", "fe", l), a.toString = da(l), 
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
        var b = fa(), a = fa();
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
                for (var k = [], q = 0, p = e.length; p > q; q++) k[q] = g;
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
            function p(a, b) {
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
            }, t = {
                csp: d.csp,
                expensiveChecks: !0
            };
            return function(d, f, g) {
                var n, D, H;
                switch (typeof d) {
                  case "string":
                    H = d = d.trim();
                    var v = g ? a : b;
                    return n = v[H], n || (":" === d.charAt(0) && ":" === d.charAt(1) && (D = !0, d = d.substring(2)), 
                    g = g ? t : q, n = new hc(g), n = new ib(n, c, g).parse(d), n.constant ? n.$$watchDelegate = m : D ? (n = e(n), 
                    n.$$watchDelegate = n.literal ? k : l) : n.inputs && (n.$$watchDelegate = h), v[H] = n), 
                    p(n, f);

                  case "function":
                    return p(d, f);

                  default:
                    return p(B, f);
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
                e = c.pending, c.processScheduled = !1, c.pending = u;
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
        var h = M("$q", TypeError);
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
                    (J(b) || G(b)) && (d = b && b.then), G(d) ? (this.promise.$$state.status = -1, d.call(b, e[0], e[1], this.notify)) : (this.promise.$$state.value = b, 
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
        }, p = function t(a) {
            if (!G(a)) throw h("norslvr", a);
            if (!(this instanceof t)) return new t(a);
            var b = new g();
            return a(function(a) {
                b.resolve(a);
            }, function(a) {
                b.reject(a);
            }), b.promise;
        };
        return p.defer = function() {
            return new g();
        }, p.reject = function(a) {
            var b = new g();
            return b.reject(a), b.promise;
        }, p.when = m, p.all = function(a) {
            var b = new g(), c = 0, d = E(a) ? [] : {};
            return s(a, function(a, e) {
                c++, m(a).then(function(a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
                }, function(a) {
                    d.hasOwnProperty(e) || b.reject(a);
                });
            }), 0 === c && b.resolve(d), b.promise;
        }, p;
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
        var b = 10, a = M("$rootScope"), c = null, d = null;
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
            function p() {}
            function q() {
                for (;n.length; ) try {
                    n.shift()();
                } catch (a) {
                    f(a);
                }
                d = null;
            }
            function t() {
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
                        last: p,
                        get: e,
                        exp: a,
                        eq: !!d
                    };
                    return c = null, G(b) || (h.fn = B), f || (f = this.$$watchers = []), f.unshift(h), 
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
                        if (!z(e)) {
                            if (J(e)) if (Ta(e)) for (f !== q && (f = q, t = f.length = 0, k++), a = e.length, 
                            t !== a && (k++, f.length = t = a), b = 0; a > b; b++) h = f[b], g = e[b], d = h !== h && g !== g, 
                            d || h === g || (k++, f[b] = g); else {
                                f !== m && (f = m = {}, t = 0, k++), a = 0;
                                for (b in e) e.hasOwnProperty(b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, 
                                d || h === g || (k++, f[b] = g)) : (t++, f[b] = g, k++));
                                if (t > a) for (b in k++, f) e.hasOwnProperty(b) || (t--, delete f[b]);
                            } else f !== e && (f = e, k++);
                            return k;
                        }
                    }
                    c.$stateful = !0;
                    var e, f, h, d = this, l = 1 < b.length, k = 0, p = g(a, c), q = [], m = {}, n = !0, t = 0;
                    return this.$watch(p, function() {
                        if (n ? (n = !1, b(e, e, d)) : b(e, h, d), l) if (J(e)) if (Ta(e)) {
                            h = Array(e.length);
                            for (var a = 0; a < e.length; a++) h[a] = e[a];
                        } else for (a in h = {}, e) sc.call(e, a) && (h[a] = e[a]); else h = e;
                    });
                },
                $digest: function() {
                    var e, g, l, m, n, t, I, y, O, s = b, W = [];
                    k("$digest"), h.$$checkUrlChange(), this === r && null !== d && (h.defer.cancel(d), 
                    q()), c = null;
                    do {
                        for (t = !1, I = this; S.length; ) {
                            try {
                                O = S.shift(), O.scope.$eval(O.expression, O.locals);
                            } catch (w) {
                                f(w);
                            }
                            c = null;
                        }
                        a: do {
                            if (m = I.$$watchers) for (n = m.length; n--; ) try {
                                if (e = m[n]) if ((g = e.get(I)) === (l = e.last) || (e.eq ? ea(g, l) : "number" == typeof g && "number" == typeof l && isNaN(g) && isNaN(l))) {
                                    if (e === c) {
                                        t = !1;
                                        break a;
                                    }
                                } else t = !0, c = e, e.last = e.eq ? Ea(g, null) : g, e.fn(g, l === p ? g : l, I), 
                                5 > s && (y = 4 - s, W[y] || (W[y] = []), W[y].push({
                                    msg: G(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp,
                                    newVal: g,
                                    oldVal: l
                                }));
                            } catch (C) {
                                f(C);
                            }
                            if (!(m = I.$$childHead || I !== this && I.$$nextSibling)) for (;I !== this && !(m = I.$$nextSibling); ) I = I.$parent;
                        } while (I = m);
                        if ((t || S.length) && !s--) throw r.$$phase = null, a("infdig", b, W);
                    } while (t || S.length);
                    for (r.$$phase = null; u.length; ) try {
                        u.shift()();
                    } catch (B) {
                        f(B);
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        if (this.$broadcast("$destroy"), this.$$destroyed = !0, this !== r) {
                            for (var b in this.$$listenerCount) m(this, this.$$listenerCount[b], b);
                            a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), 
                            this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), 
                            this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = B, 
                            this.$on = this.$watch = this.$watchGroup = function() {
                                return B;
                            }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null;
                        }
                    }
                },
                $eval: function(a, b) {
                    return g(a)(this, b);
                },
                $evalAsync: function(a, b) {
                    r.$$phase || S.length || h.defer(function() {
                        S.length && r.$digest();
                    }), S.push({
                        scope: this,
                        expression: a,
                        locals: b
                    });
                },
                $$postDigest: function(a) {
                    u.push(a);
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
                    a && n.push(b), t();
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
                        } catch (p) {
                            f(p);
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
            var r = new l(), S = r.$$asyncQueue = [], u = r.$$postDigestQueue = [], n = r.$$applyAsyncQueue = [];
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
        if (x(b)) {
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
        this.SCE_CONTEXTS = ma;
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
            return h[ma.HTML] = e(g), h[ma.CSS] = e(g), h[ma.URL] = e(g), h[ma.JS] = e(g), h[ma.RESOURCE_URL] = e(h[ma.URL]), 
            {
                trustAs: function(a, b) {
                    var c = h.hasOwnProperty(a) ? h[a] : null;
                    if (!c) throw Ca("icontext", a, b);
                    if (null === b || b === u || "" === b) return b;
                    if ("string" != typeof b) throw Ca("itype", a);
                    return new c(b);
                },
                getTrusted: function(c, e) {
                    if (null === e || e === u || "" === e) return e;
                    var g = h.hasOwnProperty(c) ? h[c] : null;
                    if (g && e instanceof g) return e.$$unwrapTrustedValue();
                    if (c === ma.RESOURCE_URL) {
                        var p, q, g = Ba(e.toString()), t = !1;
                        for (p = 0, q = b.length; q > p; p++) if (d(b[p], g)) {
                            t = !0;
                            break;
                        }
                        if (t) for (p = 0, q = a.length; q > p; p++) if (d(a[p], g)) {
                            t = !1;
                            break;
                        }
                        if (t) return e;
                        throw Ca("insecurl", e.toString());
                    }
                    if (c === ma.HTML) return f(e);
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
            var d = qa(ma);
            d.isEnabled = function() {
                return b;
            }, d.trustAs = c.trustAs, d.getTrusted = c.getTrusted, d.valueOf = c.valueOf, b || (d.trustAs = d.getTrusted = function(a, b) {
                return b;
            }, d.valueOf = oa), d.parseAs = function(b, c) {
                var e = a(c);
                return e.literal && e.constant ? e : a(c, function(a) {
                    return d.getTrusted(b, a);
                });
            };
            var e = d.parseAs, f = d.getTrusted, g = d.trustAs;
            return s(ma, function(a, b) {
                var c = R(b);
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
            var g, c = {}, d = $((/android (\d+)/.exec(R((b.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((b.navigator || {}).userAgent), f = a[0] || {}, h = /^(Moz|webkit|ms)(?=[A-Z])/, l = f.body && f.body.style, k = !1, m = !1;
            if (l) {
                for (var p in l) if (k = h.exec(p)) {
                    g = k[0], g = g.substr(0, 1).toUpperCase() + g.substr(1);
                    break;
                }
                g || (g = "WebkitOpacity" in l && "webkit"), k = !!("transition" in l || g + "Transition" in l), 
                m = !!("animation" in l || g + "Animation" in l), !d || k && m || (k = x(f.body.style.webkitTransition), 
                m = x(f.body.style.webkitAnimation));
            }
            return {
                history: !(!b.history || !b.history.pushState || 4 > d || e),
                hasEvent: function(a) {
                    if ("input" === a && 11 >= Ra) return !1;
                    if (z(c[a])) {
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
                return E(g) ? g = g.filter(function(a) {
                    return a !== Zb;
                }) : g === Zb && (g = null), a.get(e, {
                    cache: b,
                    transformResponse: g
                })["finally"](function() {
                    d.totalPendingRequests--;
                }).then(function(a) {
                    return a.data;
                }, function(a) {
                    if (!f) throw ia("tpload", e);
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
                        var d = aa.element(a).data("$binding");
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
                var m = y(k) && !k, p = (m ? d : c).defer(), q = p.promise;
                return l = a.defer(function() {
                    try {
                        p.resolve(f());
                    } catch (a) {
                        p.reject(a), e(a);
                    } finally {
                        delete g[q.$$timeoutId];
                    }
                    m || b.$apply();
                }, l), q.$$timeoutId = l, g[l] = p, q;
            }
            var g = {};
            return f.cancel = function(b) {
                return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"), delete g[b.$$timeoutId], 
                a.defer.cancel(b.$$timeoutId)) : !1;
            }, f;
        } ];
    }
    function Ba(b) {
        return Ra && (Y.setAttribute("href", b), b = Y.href), Y.setAttribute("href", b), 
        {
            href: Y.href,
            protocol: Y.protocol ? Y.protocol.replace(/:$/, "") : "",
            host: Y.host,
            search: Y.search ? Y.search.replace(/^\?/, "") : "",
            hash: Y.hash ? Y.hash.replace(/^#/, "") : "",
            hostname: Y.hostname,
            port: Y.port,
            pathname: "/" === Y.pathname.charAt(0) ? Y.pathname : "/" + Y.pathname
        };
    }
    function $c(b) {
        return b = x(b) ? Ba(b) : b, b.protocol === id.protocol && b.host === id.host;
    }
    function Ze() {
        this.$get = da(P);
    }
    function Ec(b) {
        function a(c, d) {
            if (J(c)) {
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
            if (!E(b)) return b;
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
        var d = J(b) && "$" in b;
        return !0 === a ? a = ea : G(a) || (a = function(a, b) {
            return J(a) || J(b) ? !1 : (a = R("" + a), b = R("" + b), -1 !== a.indexOf(b));
        }), function(e) {
            return d && !J(e) ? Ia(e, b.$, a, !1) : Ia(e, b, a, c);
        };
    }
    function Ia(b, a, c, d, e) {
        var f = typeof b, g = typeof a;
        if ("string" === g && "!" === a.charAt(0)) return !Ia(b, a.substring(1), c, d);
        if (E(b)) return b.some(function(b) {
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
            return z(d) && (d = a.CURRENCY_SYM), z(e) && (e = a.PATTERNS[1].maxFrac), null == b ? b : nd(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, e).replace(/\u00A4/g, d);
        };
    }
    function ld(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d) {
            return null == b ? b : nd(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d);
        };
    }
    function nd(b, a, c, d, e) {
        if (!isFinite(b) || J(b)) return "";
        var f = 0 > b;
        b = Math.abs(b);
        var g = b + "", h = "", l = [], k = !1;
        if (-1 !== g.indexOf("e")) {
            var m = g.match(/([\d\.]+)e(-?)(\d+)/);
            m && "-" == m[2] && m[3] > e + 1 ? b = 0 : (h = g, k = !0);
        }
        if (k) e > 0 && 1 > b && (h = b.toFixed(e), b = parseFloat(h)); else {
            g = (g.split(od)[1] || "").length, z(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac)), 
            b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);
            var g = ("" + b).split(od), k = g[0], g = g[1] || "", p = 0, q = a.lgSize, t = a.gSize;
            if (k.length >= q + t) for (p = k.length - q, m = 0; p > m; m++) 0 === (p - m) % t && 0 !== m && (h += c), 
            h += k.charAt(m);
            for (m = p; m < k.length; m++) 0 === (k.length - m) % q && 0 !== m && (h += c), 
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
    function Z(b, a, c, d) {
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
                b[9] && (f = $(b[9] + b[10]), g = $(b[9] + b[11])), h.call(a, $(b[1]), $(b[2]) - 1, $(b[3])), 
                f = $(b[4] || 0) - f, g = $(b[5] || 0) - g, h = $(b[6] || 0), b = Math.round(1e3 * parseFloat("0." + (b[7] || 0))), 
                l.call(a, f, g, h, b);
            }
            return a;
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, e, f) {
            var l, k, g = "", h = [];
            if (e = e || "mediumDate", e = b.DATETIME_FORMATS[e] || e, x(c) && (c = Jf.test(c) ? $(c) : a(c)), 
            V(c) && (c = new Date(c)), !pa(c)) return c;
            for (;e; ) (k = Kf.exec(e)) ? (h = Ya(h, k, 1), e = h.pop()) : (h.push(e), e = null);
            return f && "UTC" === f && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset())), 
            s(h, function(a) {
                l = Lf[a], g += l ? l(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            }), g;
        };
    }
    function Ef() {
        return function(b, a) {
            return z(a) && (a = 2), $a(b, a);
        };
    }
    function Ff() {
        return function(b, a) {
            return V(b) && (b = b.toString()), E(b) || x(b) ? (a = 1/0 === Math.abs(Number(a)) ? Number(a) : $(a)) ? a > 0 ? b.slice(0, a) : b.slice(a) : x(b) ? "" : [] : b;
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
            return Ta(a) ? (c = E(c) ? c : [ c ], 0 === c.length && (c = [ "+" ]), c = c.map(function(a) {
                var c = !1, d = a || oa;
                if (x(a)) {
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
        }), b.restrict = b.restrict || "AC", da(b);
    }
    function rd(b, a, c, d, e) {
        var f = this, g = [], h = f.$$parentForm = b.parent().controller("form") || Lb;
        f.$error = {}, f.$$success = {}, f.$pending = u, f.$name = e(a.name || a.ngForm || "")(c), 
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
        var g = R(a[0].type);
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
                b = b && b.type, "password" === g || c.ngTrim && "false" === c.ngTrim || (e = T(e)), 
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
            if (pa(c)) return c;
            if (x(c)) {
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
            function p(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime());
            }
            function q(a) {
                return y(a) ? pa(a) ? a : c(a) : u;
            }
            td(e, f, g, h), jb(e, f, g, h, l, k);
            var r, t = h && h.$options && h.$options.timezone;
            if (h.$$parserName = b, h.$parsers.push(function(b) {
                return h.$isEmpty(b) ? null : a.test(b) ? (b = c(b, r), "UTC" === t && b.setMinutes(b.getMinutes() - b.getTimezoneOffset()), 
                b) : u;
            }), h.$formatters.push(function(a) {
                if (a && !pa(a)) throw Ob("datefmt", a);
                if (p(a)) {
                    if ((r = a) && "UTC" === t) {
                        var b = 6e4 * r.getTimezoneOffset();
                        r = new Date(r.getTime() + b);
                    }
                    return m("date")(a, d, t);
                }
                return r = null, "";
            }), y(g.min) || g.ngMin) {
                var s;
                h.$validators.min = function(a) {
                    return !p(a) || z(s) || c(a) >= s;
                }, g.$observe("min", function(a) {
                    s = q(a), h.$validate();
                });
            }
            if (y(g.max) || g.ngMax) {
                var K;
                h.$validators.max = function(a) {
                    return !p(a) || z(K) || c(a) <= K;
                }, g.$observe("max", function(a) {
                    K = q(a), h.$validate();
                });
            }
        };
    }
    function td(b, a, c, d) {
        (d.$$hasNativeValidators = J(a[0].validity)) && d.$parsers.push(function(b) {
            var c = a.prop("validity") || {};
            return c.badInput && !c.typeMismatch ? u : b;
        });
    }
    function ud(b, a, c, d, e) {
        if (y(d)) {
            if (b = b(d), !b.constant) throw M("ngModel")("constexpr", c, d);
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
                if (!E(a)) {
                    if (x(a)) return a.split(" ");
                    if (J(a)) {
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
                                if (!ea(b, m)) {
                                    var r = e(m), t = d(k, r), k = d(r, k), t = l(t, 1), k = l(k, -1);
                                    t && t.length && c.addClass(g, t), k && k.length && c.removeClass(g, k);
                                }
                            } else {
                                var t = l(k, 1);
                                h.$addClass(t);
                            }
                        }
                        m = qa(b);
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
            e === u ? (d.$pending || (d.$pending = {}), g(d.$pending, b, f)) : (d.$pending && h(d.$pending, b, f), 
            wd(d.$pending) && (d.$pending = u)), Wa(e) ? e ? (h(d.$error, b, f), g(d.$$success, b, f)) : (g(d.$error, b, f), 
            h(d.$$success, b, f)) : (h(d.$error, b, f), h(d.$$success, b, f)), d.$pending ? (a(xd, !0), 
            d.$valid = d.$invalid = u, c("", null)) : (a(xd, !1), d.$valid = wd(d.$error), d.$invalid = !d.$valid, 
            c("", d.$valid)), e = d.$pending && d.$pending[b] ? u : d.$error[b] ? !1 : d.$$success[b] ? !0 : null, 
            c(b, e), l.$setValidity(b, e, d);
        };
    }
    function wd(b) {
        if (b) for (var a in b) return !1;
        return !0;
    }
    var Ra, C, ra, cb, Nf = /^\/(.+)\/([a-z]*)$/, R = function(b) {
        return x(b) ? b.toLowerCase() : b;
    }, sc = Object.prototype.hasOwnProperty, vb = function(b) {
        return x(b) ? b.toUpperCase() : b;
    }, Za = [].slice, pf = [].splice, Of = [].push, Da = Object.prototype.toString, Ka = M("ng"), aa = P.angular || (P.angular = {}), ob = 0;
    Ra = X.documentMode, B.$inject = [], oa.$inject = [];
    var Rb, E = Array.isArray, T = function(b) {
        return x(b) ? b.trim() : b;
    }, gd = function(b) {
        return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
    }, bb = function() {
        if (y(bb.isActive_)) return bb.isActive_;
        var b = !(!X.querySelector("[ng-csp]") && !X.querySelector("[data-ng-csp]"));
        if (!b) try {
            new Function("");
        } catch (a) {
            b = !0;
        }
        return bb.isActive_ = b;
    }, sb = [ "ng-", "data-ng-", "ng:", "x-ng-" ], Md = /[A-Z]/g, vc = !1, na = 1, qb = 3, Qd = {
        full: "1.3.14",
        major: 1,
        minor: 3,
        dot: 14,
        codeName: "instantaneous-browserification"
    };
    Q.expando = "ng339";
    var Ab = Q.cache = {}, hf = 1;
    Q._data = function(b) {
        return this.cache[b[this.expando]] || {};
    };
    var cf = /([\:\-\_]+(.))/g, df = /^moz([A-Z])/, Pf = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
    }, Ub = M("jqLite"), gf = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Tb = /<|&#?\w+;/, ef = /<([\w:]+)/, ff = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ga = {
        option: [ 1, '<select multiple="multiple">', "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    ga.optgroup = ga.option, ga.tbody = ga.tfoot = ga.colgroup = ga.caption = ga.thead, 
    ga.th = ga.td;
    var La = Q.prototype = {
        ready: function(b) {
            function a() {
                c || (c = !0, b());
            }
            var c = !1;
            "complete" === X.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), Q(P).on("load", a));
        },
        toString: function() {
            var b = [];
            return s(this, function(a) {
                b.push("" + a);
            }), "[" + b.join(", ") + "]";
        },
        eq: function(b) {
            return C(b >= 0 ? this[b] : this[this.length + b]);
        },
        length: 0,
        push: Of,
        sort: [].sort,
        splice: [].splice
    }, Fb = {};
    s("multiple selected checked disabled readOnly required open".split(" "), function(b) {
        Fb[R(b)] = b;
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
        Q[a] = b;
    }), s({
        data: Wb,
        inheritedData: Eb,
        scope: function(b) {
            return C.data(b, "$scope") || Eb(b.parentNode || b, [ "$isolateScope", "$scope" ]);
        },
        isolateScope: function(b) {
            return C.data(b, "$isolateScope") || C.data(b, "$isolateScopeNoTemplate");
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
            var d = R(a);
            if (Fb[d]) {
                if (!y(c)) return b[a] || (b.attributes.getNamedItem(a) || B).specified ? d : u;
                c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));
            } else if (y(c)) b.setAttribute(a, c); else if (b.getAttribute) return b = b.getAttribute(a, 2), 
            null === b ? u : b;
        },
        prop: function(b, a, c) {
            return y(c) ? void (b[a] = c) : b[a];
        },
        text: function() {
            function b(a, b) {
                if (z(b)) {
                    var d = a.nodeType;
                    return d === na || d === qb ? a.textContent : "";
                }
                a.textContent = b;
            }
            return b.$dv = "", b;
        }(),
        val: function(b, a) {
            if (z(a)) {
                if (b.multiple && "select" === ta(b)) {
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
            return z(a) ? b.innerHTML : (xb(b, !0), void (b.innerHTML = a));
        },
        empty: Kc
    }, function(b, a) {
        Q.prototype[a] = function(a, d) {
            var e, f, g = this.length;
            if (b !== Kc && (2 == b.length && b !== Bb && b !== Jc ? a : d) === u) {
                if (J(a)) {
                    for (e = 0; g > e; e++) if (b === Wb) b(this[e], a); else for (f in a) b(this[e], f, a[f]);
                    return this;
                }
                for (e = b.$dv, g = e === u ? Math.min(g, 1) : g, f = 0; g > f; f++) {
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
            a = C(a), a.on(c, function f() {
                a.off(c, d), a.off(c, f);
            }), a.on(c, d);
        },
        replaceWith: function(a, c) {
            var d, e = a.parentNode;
            xb(a), s(new Q(c), function(c) {
                d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a), d = c;
            });
        },
        children: function(a) {
            var c = [];
            return s(a.childNodes, function(a) {
                a.nodeType === na && c.push(a);
            }), c;
        },
        contents: function(a) {
            return a.contentDocument || a.childNodes || [];
        },
        append: function(a, c) {
            var d = a.nodeType;
            if (d === na || 11 === d) {
                c = new Q(c);
                for (var d = 0, e = c.length; e > d; d++) a.appendChild(c[d]);
            }
        },
        prepend: function(a, c) {
            if (a.nodeType === na) {
                var d = a.firstChild;
                s(new Q(c), function(c) {
                    a.insertBefore(c, d);
                });
            }
        },
        wrap: function(a, c) {
            c = C(c).eq(0).clone()[0];
            var d = a.parentNode;
            d && d.replaceChild(c, a), c.appendChild(a);
        },
        remove: Lc,
        detach: function(a) {
            Lc(a, !0);
        },
        after: function(a, c) {
            var d = a, e = a.parentNode;
            c = new Q(c);
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
                z(f) && (f = !Bb(a, c)), (f ? Db : Cb)(a, c);
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
                stopPropagation: B,
                type: g,
                target: a
            }, c.type && (e = w(e, c)), c = qa(h), f = d ? [ e ].concat(d) : [ e ], s(c, function(c) {
                e.isImmediatePropagationStopped() || c.apply(a, f);
            }));
        }
    }, function(a, c) {
        Q.prototype[c] = function(c, e, f) {
            for (var g, h = 0, l = this.length; l > h; h++) z(g) ? (g = a(this[h], c, e, f), 
            y(g) && (g = C(g))) : Hc(g, a(this[h], c, e, f));
            return y(g) ? g : this;
        }, Q.prototype.bind = Q.prototype.on, Q.prototype.unbind = Q.prototype.off;
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
    var Qc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Qf = /,/, Rf = /^\s*(_?)(\S+?)\1\s*$/, Pc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Ga = M("$injector");
    ab.$$annotate = function(a, c, d) {
        var e;
        if ("function" == typeof a) {
            if (!(e = a.$inject)) {
                if (e = [], a.length) {
                    if (c) throw x(d) && d || (d = a.name || mf(a)), Ga("strictdi", d);
                    c = a.toString().replace(Pc, ""), c = c.match(Qc), s(c[1].split(Qf), function(a) {
                        a.replace(Rf, function(a, c, d) {
                            e.push(d);
                        });
                    });
                }
                a.$inject = e;
            }
        } else E(a) ? (c = a.length - 1, tb(a[c], "fn"), e = a.slice(0, c)) : tb(a, "fn", !0);
        return e;
    };
    var Sf = M("$animate"), Ce = [ "$provide", function(a) {
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
                var d = [], e = [], f = fa();
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
                if (aa.isObject(c)) {
                    var d = w(c.from || {}, c.to || {});
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
                    return a = C(a), c = x(c) ? c : E(c) ? c.join(" ") : "", s(a, function(a) {
                        Db(a, c);
                    }), k(a, d), l();
                },
                removeClass: function(a, c, d) {
                    return this.setClass(a, [], c, d);
                },
                $$removeClassImmediately: function(a, c, d) {
                    return a = C(a), c = x(c) ? c : E(c) ? c.join(" ") : "", s(a, function(a) {
                        Cb(a, c);
                    }), k(a, d), l();
                },
                setClass: function(a, c, d, e) {
                    var k = this, l = !1;
                    a = C(a);
                    var m = a.data("$$animateClasses");
                    return m ? e && m.options && (m.options = aa.extend(m.options || {}, e)) : (m = {
                        classes: {},
                        options: e
                    }, l = !0), e = m.classes, c = E(c) ? c : c.split(" "), d = E(d) ? d : d.split(" "), 
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
                enabled: B,
                cancel: B
            };
        } ];
    } ], ia = M("$compile");
    xc.$inject = [ "$provide", "$$sanitizeUriProvider" ];
    var Sc = /^((?:x|data)[\:\-_])/i, qf = M("$controller"), Wc = "application/json", $b = {
        "Content-Type": Wc + ";charset=utf-8"
    }, sf = /^\[|^\{(?!\{)/, tf = {
        "[": /]$/,
        "{": /}$/
    }, rf = /^\)\]\}',?\n/, ac = M("$interpolate"), Tf = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, wf = {
        http: 80,
        https: 443,
        ftp: 21
    }, Hb = M("$location"), Uf = {
        $$html5: !1,
        $$replace: !1,
        absUrl: Ib("$$absUrl"),
        url: function(a) {
            if (z(a)) return this.$$url;
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
                if (x(a) || V(a)) a = a.toString(), this.$$search = rc(a); else {
                    if (!J(a)) throw Hb("isrcharg");
                    a = Ea(a, {}), s(a, function(c, e) {
                        null == c && delete a[e];
                    }), this.$$search = a;
                }
                break;

              default:
                z(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c;
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
            return this.$$state = z(c) ? null : c, this;
        };
    });
    var ka = M("$parse"), Vf = Function.prototype.call, Wf = Function.prototype.apply, Xf = Function.prototype.bind, mb = fa();
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
    var nb = w(fa(), {
        "+": function(a, c, d, e) {
            return d = d(a, c), e = e(a, c), y(d) ? y(e) ? d + e : d : y(e) ? e : u;
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
            ka("lexerr", a, c, this.text);
        },
        readNumber: function() {
            for (var a = "", c = this.index; this.index < this.text.length; ) {
                var d = R(this.text.charAt(this.index));
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
    ib.ZERO = w(function() {
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
            throw ka("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw ka("ueoe", this.text);
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
            if (0 === this.tokens.length) throw ka("ueoe", this.text);
            var c = this.expect(a);
            return c || this.throwError("is unexpected, expecting [" + a + "]", this.peek()), 
            c;
        },
        unaryFn: function(a, c) {
            var d = nb[a];
            return w(function(a, f) {
                return d(a, f, c);
            }, {
                constant: c.constant,
                inputs: [ c ]
            });
        },
        binaryFn: function(a, c, d, e) {
            var f = nb[c];
            return w(function(c, e) {
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
            return w(function() {
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
            return w(function(f, h) {
                var l = a(f, h);
                if (e) {
                    for (e[0] = l, l = d.length; l--; ) e[l + 1] = d[l](f, h);
                    return c.apply(u, e);
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
            c = this.ternary(), w(function(d, f) {
                return a.assign(d, c(d, f), f);
            }, {
                inputs: [ a, c ]
            })) : a;
        },
        ternary: function() {
            var c, a = this.logicalOR();
            if (this.expect("?") && (c = this.assignment(), this.consume(":"))) {
                var d = this.assignment();
                return w(function(e, f) {
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
            return w(function(d, e, f) {
                return d = f || a(d, e), null == d ? u : c(d);
            }, {
                assign: function(d, e, f) {
                    var g = a(d, f);
                    return g || a.assign(d, g = {}, f), c.assign(g, e);
                }
            });
        },
        objectIndex: function(a) {
            var c = this.text, d = this.expression();
            return this.consume("]"), w(function(e, f) {
                var g = a(e, f), h = d(e, f);
                return sa(h, c), g ? la(g[h], c) : u;
            }, {
                assign: function(e, f, g) {
                    var h = sa(d(e, g), c), l = la(a(e, g), c);
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
                var l = c ? c(g, h) : y(c) ? u : g, k = a(g, h, l) || B;
                if (f) for (var m = d.length; m--; ) f[m] = la(d[m](g, h), e);
                if (la(l, e), k) {
                    if (k.constructor === k) throw ka("isecfn", e);
                    if (k === Vf || k === Wf || k === Xf) throw ka("isecff", e);
                }
                return l = k.apply ? k.apply(l, f) : k(f[0], f[1], f[2], f[3], f[4]), f && (f.length = 0), 
                la(l, e);
            };
        },
        arrayDeclaration: function() {
            var a = [];
            if ("]" !== this.peekToken().text) do {
                if (this.peek("]")) break;
                a.push(this.expression());
            } while (this.expect(","));
            return this.consume("]"), w(function(c, d) {
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
            return this.consume("}"), w(function(d, f) {
                for (var g = {}, h = 0, l = c.length; l > h; h++) g[a[h]] = c[h](d, f);
                return g;
            }, {
                literal: !0,
                constant: c.every(fc),
                inputs: c
            });
        }
    };
    var Af = fa(), zf = fa(), Bf = Object.prototype.valueOf, Ca = M("$sce"), ma = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, ia = M("$compile"), Y = X.createElement("a"), id = Ba(P.location.href);
    Ec.$inject = [ "$provide" ], jd.$inject = [ "$locale" ], ld.$inject = [ "$locale" ];
    var od = ".", Lf = {
        yyyy: Z("FullYear", 4),
        yy: Z("FullYear", 2, 0, !0),
        y: Z("FullYear", 1),
        MMMM: Kb("Month"),
        MMM: Kb("Month", !0),
        MM: Z("Month", 2, 1),
        M: Z("Month", 1, 1),
        dd: Z("Date", 2),
        d: Z("Date", 1),
        HH: Z("Hours", 2),
        H: Z("Hours", 1),
        hh: Z("Hours", 2, -12),
        h: Z("Hours", 1, -12),
        mm: Z("Minutes", 2),
        m: Z("Minutes", 1),
        ss: Z("Seconds", 2),
        s: Z("Seconds", 1),
        sss: Z("Milliseconds", 3),
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
    var Gf = da(R), Hf = da(vb);
    md.$inject = [ "$parse" ];
    var Td = da({
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
        $addControl: B,
        $$renameControl: function(a, c) {
            a.$name = c;
        },
        $removeControl: B,
        $setValidity: B,
        $setDirty: B,
        $setPristine: B,
        $setSubmitted: B
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
                                m !== c && (hb(a, null, m, u, m), m = c, hb(a, null, m, h, m), k.$$renameControl(h, m));
                            })), d.on("$destroy", function() {
                                k.$removeControl(h), m && hb(a, null, m, u, m), w(h, Lb);
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
            if (pa(a)) return a;
            if (x(a)) {
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
                return e.$isEmpty(a) ? null : ag.test(a) ? parseFloat(a) : u;
            }), e.$formatters.push(function(a) {
                if (!e.$isEmpty(a)) {
                    if (!V(a)) throw Ob("numfmt", a);
                    a = a.toString();
                }
                return a;
            }), y(d.min) || d.ngMin) {
                var h;
                e.$validators.min = function(a) {
                    return e.$isEmpty(a) || z(h) || a >= h;
                }, d.$observe("min", function(a) {
                    y(a) && !V(a) && (a = parseFloat(a, 10)), h = V(a) && !isNaN(a) ? a : u, e.$validate();
                });
            }
            if (y(d.max) || d.ngMax) {
                var l;
                e.$validators.max = function(a) {
                    return e.$isEmpty(a) || z(l) || l >= a;
                }, d.$observe("max", function(a) {
                    y(a) && !V(a) && (a = parseFloat(a, 10)), l = V(a) && !isNaN(a) ? a : u, e.$validate();
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
            z(d.name) && c.attr("name", ++ob), c.on("click", function(a) {
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
                return ea(a, k);
            }), e.$parsers.push(function(a) {
                return a ? k : m;
            });
        },
        hidden: B,
        button: B,
        submit: B,
        reset: B,
        file: B
    }, yc = [ "$browser", "$sniffer", "$filter", "$parse", function(a, c, d, e) {
        return {
            restrict: "E",
            require: [ "?ngModel" ],
            link: {
                pre: function(f, g, h, l) {
                    l[0] && (Dd[R(h.type)] || Dd.text)(f, g, h, l[0], c, a, d, e);
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
                        e.textContent = a === u ? "" : a;
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
                        f.textContent = a === u ? "" : a;
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
    } ], xe = da({
        restrict: "A",
        require: "ngModel",
        link: function(a, c, d, e) {
            e.$viewChangeListeners.push(function() {
                a.$eval(d.ngChange);
            });
        }
    }), be = jc("", !0), de = jc("Odd", 0), ce = jc("Even", 1), ee = Ja({
        compile: function(a, c) {
            c.$set("ngCloak", u), a.removeClass("ng-cloak");
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
                        l = f, c[c.length++] = X.createComment(" end ngIf: " + e.ngIf + " "), h = {
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
            controller: aa.noop,
            compile: function(f, g) {
                var h = g.ngInclude || g.src, l = g.onload || "", k = g.autoscroll;
                return function(f, g, q, s, r) {
                    var w, n, D, u = 0, H = function() {
                        n && (n.remove(), n = null), w && (w.$destroy(), w = null), D && (d.leave(D).then(function() {
                            n = null;
                        }), n = D, D = null);
                    };
                    f.$watch(e.parseAsResourceUrl(h), function(e) {
                        var h = function() {
                            !y(k) || k && !f.$eval(k) || c();
                        }, n = ++u;
                        e ? (a(e, !0).then(function(a) {
                            if (n === u) {
                                var c = f.$new();
                                s.template = a, a = r(c, function(a) {
                                    H(), d.enter(a, null, g).then(h);
                                }), w = c, D = a, w.$emit("$includeContentLoaded", e), f.$eval(l);
                            }
                        }, function() {
                            n === u && (H(), f.$emit("$includeContentError", e));
                        }), f.$emit("$includeContentRequested", e)) : (H(), s.template = null);
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
                /SVG/.test(d[0].toString()) ? (d.empty(), a(Gc(f.template, X).childNodes)(c, function(a) {
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
                var f = c.attr(d.$attr.ngList) || ", ", g = "false" !== d.ngTrim, h = g ? T(f) : f;
                e.$parsers.push(function(a) {
                    if (!z(a)) {
                        var c = [];
                        return a && s(a.split(h), function(a) {
                            a && c.push(g ? T(a) : a);
                        }), c;
                    }
                }), e.$formatters.push(function(a) {
                    return E(a) ? a.join(f) : u;
                }), e.$isEmpty = function(a) {
                    return !a || !a.length;
                };
            }
        };
    }, lb = "ng-valid", vd = "ng-invalid", Sa = "ng-pristine", Mb = "ng-dirty", xd = "ng-pending", Ob = new M("ngModel"), dg = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, c, d, e, f, g, h, l, k, m) {
        this.$modelValue = this.$viewValue = Number.NaN, this.$$rawModelValue = u, this.$validators = {}, 
        this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], 
        this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, 
        this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = u, 
        this.$name = m(d.name || "", !1)(a);
        var C, p = f(d.ngModel), q = p.assign, t = p, r = q, w = null, n = this;
        this.$$setOptions = function(a) {
            if ((n.$options = a) && a.getterSetter) {
                var c = f(d.ngModel + "()"), g = f(d.ngModel + "($$$p)");
                t = function(a) {
                    var d = p(a);
                    return G(d) && (d = c(a)), d;
                }, r = function(a) {
                    G(p(a)) ? g(a, {
                        $$$p: n.$modelValue
                    }) : q(a, n.$modelValue);
                };
            } else if (!p.assign) throw Ob("nonassign", d.ngModel, ua(e));
        }, this.$render = B, this.$isEmpty = function(a) {
            return z(a) || "" === a || null === a || a !== a;
        };
        var D = e.inheritedData("$formController") || Lb, H = 0;
        sd({
            ctrl: this,
            $element: e,
            set: function(a, c) {
                a[c] = !0;
            },
            unset: function(a, c) {
                delete a[c];
            },
            parentForm: D,
            $animate: g
        }), this.$setPristine = function() {
            n.$dirty = !1, n.$pristine = !0, g.removeClass(e, Mb), g.addClass(e, Sa);
        }, this.$setDirty = function() {
            n.$dirty = !0, n.$pristine = !1, g.removeClass(e, Sa), g.addClass(e, Mb), D.$setDirty();
        }, this.$setUntouched = function() {
            n.$touched = !1, n.$untouched = !0, g.setClass(e, "ng-untouched", "ng-touched");
        }, this.$setTouched = function() {
            n.$touched = !0, n.$untouched = !1, g.setClass(e, "ng-touched", "ng-untouched");
        }, this.$rollbackViewValue = function() {
            h.cancel(w), n.$viewValue = n.$$lastCommittedViewValue, n.$render();
        }, this.$validate = function() {
            if (!V(n.$modelValue) || !isNaN(n.$modelValue)) {
                var a = n.$$rawModelValue, c = n.$valid, d = n.$modelValue, e = n.$options && n.$options.allowInvalid;
                n.$$runValidators(a, n.$$lastCommittedViewValue, function(f) {
                    e || c === f || (n.$modelValue = f ? a : u, n.$modelValue !== d && n.$$writeModelToScope());
                });
            }
        }, this.$$runValidators = function(a, c, d) {
            function e() {
                var d = !0;
                return s(n.$validators, function(e, f) {
                    var h = e(a, c);
                    d = d && h, g(f, h);
                }), d ? !0 : (s(n.$asyncValidators, function(a, c) {
                    g(c, null);
                }), !1);
            }
            function f() {
                var d = [], e = !0;
                s(n.$asyncValidators, function(f, h) {
                    var k = f(a, c);
                    if (!k || !G(k.then)) throw Ob("$asyncValidators", k);
                    g(h, u), d.push(k.then(function() {
                        g(h, !0);
                    }, function() {
                        e = !1, g(h, !1);
                    }));
                }), d.length ? k.all(d).then(function() {
                    h(e);
                }, B) : h(!0);
            }
            function g(a, c) {
                l === H && n.$setValidity(a, c);
            }
            function h(a) {
                l === H && d(a);
            }
            H++;
            var l = H;
            (function() {
                var a = n.$$parserName || "parse";
                return C !== u ? (C || (s(n.$validators, function(a, c) {
                    g(c, null);
                }), s(n.$asyncValidators, function(a, c) {
                    g(c, null);
                })), g(a, C), C) : (g(a, null), !0);
            })() && e() ? f() : h(!1);
        }, this.$commitViewValue = function() {
            var a = n.$viewValue;
            h.cancel(w), (n.$$lastCommittedViewValue !== a || "" === a && n.$$hasNativeValidators) && (n.$$lastCommittedViewValue = a, 
            n.$pristine && this.$setDirty(), this.$$parseAndValidate());
        }, this.$$parseAndValidate = function() {
            var c = n.$$lastCommittedViewValue;
            if (C = z(c) ? u : !0) for (var d = 0; d < n.$parsers.length; d++) if (c = n.$parsers[d](c), 
            z(c)) {
                C = !1;
                break;
            }
            V(n.$modelValue) && isNaN(n.$modelValue) && (n.$modelValue = t(a));
            var e = n.$modelValue, f = n.$options && n.$options.allowInvalid;
            n.$$rawModelValue = c, f && (n.$modelValue = c, n.$modelValue !== e && n.$$writeModelToScope()), 
            n.$$runValidators(c, n.$$lastCommittedViewValue, function(a) {
                f || (n.$modelValue = a ? c : u, n.$modelValue !== e && n.$$writeModelToScope());
            });
        }, this.$$writeModelToScope = function() {
            r(a, n.$modelValue), s(n.$viewChangeListeners, function(a) {
                try {
                    a();
                } catch (d) {
                    c(d);
                }
            });
        }, this.$setViewValue = function(a, c) {
            n.$viewValue = a, n.$options && !n.$options.updateOnDefault || n.$$debounceViewValueCommit(c);
        }, this.$$debounceViewValueCommit = function(c) {
            var d = 0, e = n.$options;
            e && y(e.debounce) && (e = e.debounce, V(e) ? d = e : V(e[c]) ? d = e[c] : V(e["default"]) && (d = e["default"])), 
            h.cancel(w), d ? w = h(function() {
                n.$commitViewValue();
            }, d) : l.$$phase ? n.$commitViewValue() : a.$apply(function() {
                n.$commitViewValue();
            });
        }, a.$watch(function() {
            var c = t(a);
            if (c !== n.$modelValue) {
                n.$modelValue = n.$$rawModelValue = c, C = u;
                for (var d = n.$formatters, e = d.length, f = c; e--; ) f = d[e](f);
                n.$viewValue !== f && (n.$viewValue = n.$$lastCommittedViewValue = f, n.$render(), 
                n.$$runValidators(c, f, B));
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
                this.$options = a.$eval(c.ngModelOptions), this.$options.updateOn !== u ? (this.$options.updateOnDefault = !1, 
                this.$options.updateOn = T(this.$options.updateOn.replace(eg, function() {
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
                var n, k = h.count, m = h.$attr.when && g.attr(h.$attr.when), p = h.offset || 0, q = f.$eval(m) || {}, t = {}, m = c.startSymbol(), r = c.endSymbol(), u = m + k + "-" + p + r, w = aa.noop;
                s(h, function(a, c) {
                    var d = e.exec(c);
                    d && (d = (d[1] ? "-" : "") + R(d[2]), q[d] = g.attr(h.$attr[c]));
                }), s(q, function(a, e) {
                    t[e] = c(a.replace(d, u));
                }), f.$watch(k, function(c) {
                    c = parseFloat(c);
                    var d = isNaN(c);
                    d || c in q || (c = a.pluralCat(c - p)), c === n || d && isNaN(n) || (w(), w = f.$watch(t[c], l), 
                    n = c);
                });
            }
        };
    } ], ne = [ "$parse", "$animate", function(a, c) {
        var d = M("ngRepeat"), e = function(a, c, d, e, k, m, p) {
            a[d] = e, k && (a[k] = m), a.$index = c, a.$first = 0 === c, a.$last = c === p - 1, 
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
                var h = g.ngRepeat, l = X.createComment(" end ngRepeat: " + h + " "), k = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                if (!k) throw d("iexp", h);
                var m = k[1], p = k[2], q = k[3], t = k[4], k = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                if (!k) throw d("iidexp", m);
                var r = k[3] || k[1], w = k[2];
                if (q && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q))) throw d("badident", q);
                var y, n, D, H, v = {
                    $id: Na
                };
                return t ? y = a(t) : (D = function(a, c) {
                    return Na(c);
                }, H = function(a) {
                    return a;
                }), function(a, f, g, k, m) {
                    y && (n = function(c, d, e) {
                        return w && (v[w] = c), v[r] = d, v.$index = e, y(a, v);
                    });
                    var t = fa();
                    a.$watchCollection(p, function(g) {
                        var k, p, F, B, z, G, E, J, x, K, y = f[0], v = fa();
                        if (q && (a[q] = g), Ta(g)) J = g, p = n || D; else {
                            p = n || H, J = [];
                            for (K in g) g.hasOwnProperty(K) && "$" != K.charAt(0) && J.push(K);
                            J.sort();
                        }
                        for (B = J.length, K = Array(B), k = 0; B > k; k++) if (z = g === J ? k : J[k], 
                        G = g[z], E = p(z, G, k), t[E]) x = t[E], delete t[E], v[E] = x, K[k] = x; else {
                            if (v[E]) throw s(K, function(a) {
                                a && a.scope && (t[a.id] = a);
                            }), d("dupes", h, E, G);
                            K[k] = {
                                id: E,
                                scope: u,
                                clone: u
                            }, v[E] = !0;
                        }
                        for (F in t) {
                            if (x = t[F], E = ub(x.clone), c.leave(E), E[0].parentNode) for (k = 0, p = E.length; p > k; k++) E[k].$$NG_REMOVED = !0;
                            x.scope.$destroy();
                        }
                        for (k = 0; B > k; k++) if (z = g === J ? k : J[k], G = g[z], x = K[k], x.scope) {
                            F = y;
                            do F = F.nextSibling; while (F && F.$$NG_REMOVED);
                            x.clone[0] != F && c.move(ub(x.clone), null, C(y)), y = x.clone[x.clone.length - 1], 
                            e(x.scope, k, r, G, w, z, B);
                        } else m(function(a, d) {
                            x.scope = d;
                            var f = l.cloneNode(!1);
                            a[a.length++] = f, c.enter(a, null, C(y)), y = f, x.clone = a, v[x.id] = x, e(x.scope, k, r, G, w, z, B);
                        });
                        t = v;
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
                            d[d.length++] = X.createComment(" end ngSwitchWhen: "), h.push({
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
            if (!f) throw M("ngTransclude")("orphan", ua(c));
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
    } ], fg = M("ngOptions"), te = da({
        restrict: "A",
        terminal: !0
    }), Wd = [ "$compile", "$parse", function(a, c) {
        var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, e = {
            $setViewValue: B
        };
        return {
            restrict: "E",
            require: [ "select", "?ngModel" ],
            controller: [ "$element", "$scope", "$attrs", function(a, c, d) {
                var p, l = this, k = {}, m = e;
                l.databound = d.ngModel, l.init = function(a, c, d) {
                    m = a, p = d;
                }, l.addOption = function(c, d) {
                    Ma(c, '"option value"'), k[c] = !0, m.$viewValue == c && (a.val(c), p.parent() && p.remove()), 
                    d && d[0].hasAttribute("selected") && (d[0].selected = !0);
                }, l.removeOption = function(a) {
                    this.hasOption(a) && (delete k[a], m.$viewValue === a && this.renderUnknownOption(a));
                }, l.renderUnknownOption = function(c) {
                    c = "? " + Na(c) + " ?", p.val(c), a.prepend(p), a.val(c), p.prop("selected", !0);
                }, l.hasOption = function(a) {
                    return k.hasOwnProperty(a);
                }, c.$on("$destroy", function() {
                    l.renderUnknownOption = B;
                });
            } ],
            link: function(e, g, h, l) {
                function k(a, c, d, e) {
                    d.$render = function() {
                        var a = d.$viewValue;
                        e.hasOption(a) ? (v.parent() && v.remove(), c.val(a), "" === a && B.prop("selected", !0)) : z(a) && B ? c.val("") : e.renderUnknownOption(a);
                    }, c.on("change", function() {
                        a.$apply(function() {
                            v.parent() && v.remove(), d.$setViewValue(c.val());
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
                        ea(e, d.$viewValue) || (e = qa(d.$viewValue), d.$render());
                    }), c.on("change", function() {
                        a.$apply(function() {
                            var a = [];
                            s(c.find("option"), function(c) {
                                c.selected && a.push(c.value);
                            }), d.$setViewValue(a);
                        });
                    });
                }
                function p(e, f, g) {
                    function h(a, c, d) {
                        return R[B] = d, G && (R[G] = c), a(e, R);
                    }
                    function k(a) {
                        var c;
                        if (t) if (K && E(a)) {
                            c = new eb([]);
                            for (var d = 0; d < a.length; d++) c.put(h(K, null, a[d]), !0);
                        } else c = new eb(a); else K && (a = h(K, null, a));
                        return function(d, e) {
                            var f;
                            return f = K ? K : z ? z : A, t ? y(c.remove(h(f, d, e))) : a === h(f, d, e);
                        };
                    }
                    function l() {
                        n || (e.$$postDigest(p), n = !0);
                    }
                    function m(a, c, d) {
                        a[c] = a[c] || 0, a[c] += d ? 1 : -1;
                    }
                    function p() {
                        n = !1;
                        var d, l, r, u, v, a = {
                            "": []
                        }, c = [ "" ];
                        r = g.$viewValue, u = N(e) || [];
                        var x, z, E, A, B = G ? Object.keys(u).sort() : u, O = {};
                        v = k(r);
                        var T, V, M = !1;
                        for (Q = {}, A = 0; E = B.length, E > A; A++) x = A, G && (x = B[A], "$" === x.charAt(0)) || (z = u[x], 
                        d = h(J, x, z) || "", (l = a[d]) || (l = a[d] = [], c.push(d)), d = v(x, z), M = M || d, 
                        z = h(C, x, z), z = y(z) ? z : "", V = K ? K(e, R) : G ? B[A] : A, K && (Q[V] = x), 
                        l.push({
                            id: V,
                            label: z,
                            selected: d
                        }));
                        for (t || (w || null === r ? a[""].unshift({
                            id: "",
                            label: "",
                            selected: !M
                        }) : M || a[""].unshift({
                            id: "?",
                            label: "",
                            selected: !0
                        })), x = 0, B = c.length; B > x; x++) {
                            for (d = c[x], l = a[d], P.length <= x ? (r = {
                                element: H.clone().attr("label", d),
                                label: l.label
                            }, u = [ r ], P.push(u), f.append(r.element)) : (u = P[x], r = u[0], r.label != d && r.element.attr("label", r.label = d)), 
                            M = null, A = 0, E = l.length; E > A; A++) d = l[A], (v = u[A + 1]) ? (M = v.element, 
                            v.label !== d.label && (m(O, v.label, !1), m(O, d.label, !0), M.text(v.label = d.label), 
                            M.prop("label", v.label)), v.id !== d.id && M.val(v.id = d.id), M[0].selected !== d.selected && (M.prop("selected", v.selected = d.selected), 
                            Ra && M.prop("selected", v.selected))) : ("" === d.id && w ? T = w : (T = D.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).prop("label", d.label).text(d.label), 
                            u.push(v = {
                                element: T,
                                label: d.label,
                                id: d.id,
                                selected: d.selected
                            }), m(O, d.label, !0), M ? M.after(T) : r.element.append(T), M = T);
                            for (A++; u.length > A; ) d = u.pop(), m(O, d.label, !1), d.element.remove();
                        }
                        for (;P.length > x; ) {
                            for (l = P.pop(), A = 1; A < l.length; ++A) m(O, l[A].label, !1);
                            l[0].element.remove();
                        }
                        s(O, function(a, c) {
                            a > 0 ? q.addOption(c) : 0 > a && q.removeOption(c);
                        });
                    }
                    var v;
                    if (!(v = r.match(d))) throw fg("iexp", r, ua(f));
                    var C = c(v[2] || v[1]), B = v[4] || v[6], x = / as /.test(v[0]) && v[1], z = x ? c(x) : null, G = v[5], J = c(v[3] || ""), A = c(v[2] ? v[1] : B), N = c(v[7]), K = v[8] ? c(v[8]) : null, Q = {}, P = [ [ {
                        element: f,
                        label: ""
                    } ] ], R = {};
                    w && (a(w)(e), w.removeClass("ng-scope"), w.remove()), f.empty(), f.on("change", function() {
                        e.$apply(function() {
                            var c, a = N(e) || [];
                            if (t) c = [], s(f.val(), function(d) {
                                d = K ? Q[d] : d, c.push("?" === d ? u : "" === d ? null : h(z ? z : A, d, a[d]));
                            }); else {
                                var d = K ? Q[f.val()] : f.val();
                                c = "?" === d ? u : "" === d ? null : h(z ? z : A, d, a[d]);
                            }
                            g.$setViewValue(c), p();
                        });
                    }), g.$render = p, e.$watchCollection(N, l), e.$watchCollection(function() {
                        var c, a = N(e);
                        if (a && E(a)) {
                            c = Array(a.length);
                            for (var d = 0, f = a.length; f > d; d++) c[d] = h(C, d, a[d]);
                        } else if (a) for (d in c = {}, a) a.hasOwnProperty(d) && (c[d] = h(C, d, a[d]));
                        return c;
                    }, l), t && e.$watchCollection(function() {
                        return g.$modelValue;
                    }, l);
                }
                if (l[1]) {
                    var q = l[0];
                    l = l[1];
                    var B, t = h.multiple, r = h.ngOptions, w = !1, n = !1, D = C(X.createElement("option")), H = C(X.createElement("optgroup")), v = D.clone();
                    h = 0;
                    for (var x = g.children(), G = x.length; G > h; h++) if ("" === x[h].value) {
                        B = w = x.eq(h);
                        break;
                    }
                    q.init(l, w, v), t && (l.$isEmpty = function(a) {
                        return !a || 0 === a.length;
                    }), r ? p(e, g, l) : t ? m(e, g, l) : k(e, g, l, q);
                }
            }
        };
    } ], Yd = [ "$interpolate", function(a) {
        var c = {
            addOption: B,
            removeOption: B
        };
        return {
            restrict: "E",
            priority: 100,
            compile: function(d, e) {
                if (z(e.value)) {
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
    } ], Xd = da({
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
                        if (x(a) && 0 < a.length && (a = new RegExp("^" + a + "$")), a && !a.test) throw M("ngPattern")("noregexp", g, a, ua(c));
                        f = a || u, e.$validate();
                    }), e.$validators.pattern = function(a) {
                        return e.$isEmpty(a) || z(f) || f.test(a);
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
                        a = $(a), f = isNaN(a) ? -1 : a, e.$validate();
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
                        f = $(a) || 0, e.$validate();
                    }), e.$validators.minlength = function(a, c) {
                        return e.$isEmpty(c) || c.length >= f;
                    };
                }
            }
        };
    };
    P.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (Nd(), 
    Pd(aa), C(X).ready(function() {
        Jd(X, tc);
    }));
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'), 
!function(a, b) {
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
}), function(N, f, W) {
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
} ]), !function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define([ "jquery" ], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery);
}(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function c(c, d) {
            var f, g, h, e = this;
            if (e.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(c),
                appendDots: a(c),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(a, b) {
                    return '<button type="button" data-role="none">' + (b + 1) + "</button>";
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
                rtl: !1,
                slide: "",
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                variableWidth: !1,
                vertical: !1,
                waitForAnimate: !0
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
                transformsEnabled: !1
            }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, 
            e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.hidden = "hidden", 
            e.paused = !1, e.positionProp = null, e.respondTo = null, e.shouldClick = !0, e.$slider = a(c), 
            e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", 
            e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, f, d), 
            e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, g = e.options.responsive || null, 
            g && g.length > -1) {
                e.respondTo = e.options.respondTo || "window";
                for (h in g) g.hasOwnProperty(h) && (e.breakpoints.push(g[h].breakpoint), e.breakpointSettings[g[h].breakpoint] = g[h].settings);
                e.breakpoints.sort(function(a, b) {
                    return e.options.mobileFirst === !0 ? a - b : b - a;
                });
            }
            "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (e.hidden = "msHidden", 
            e.visibilityChange = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", 
            e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), 
            e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.changeSlide = a.proxy(e.changeSlide, e), 
            e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), 
            e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), 
            e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), 
            e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, 
            e.init(), e.checkResponsive(!0);
        }
        var b = 0;
        return c;
    }(), b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c) d = c, c = null; else if (0 > c || c >= e.slideCount) return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), 
        e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), 
        e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b);
        }), e.$slidesCache = e.$slides, e.reinit();
    }, b.prototype.animateHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed);
        }
    }, b.prototype.animateSlide = function(b, c) {
        var d = {}, e = this;
        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), 
        e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), 
        a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
                a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", 
                e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d));
            },
            complete: function() {
                c && c.call();
            }
        })) : (e.applyTransition(), b = Math.ceil(b), d[e.animType] = e.options.vertical === !1 ? "translate3d(" + b + "px, 0px, 0px)" : "translate3d(0px," + b + "px, 0px)", 
        e.$slideTrack.css(d), c && setTimeout(function() {
            e.disableTransition(), c.call();
        }, e.options.speed));
    }, b.prototype.asNavFor = function(b) {
        var c = this, d = null !== c.options.asNavFor ? a(c.options.asNavFor).slick("getSlick") : null;
        null !== d && d.slideHandler(b, !0);
    }, b.prototype.applyTransition = function(a) {
        var b = this, c = {};
        c[b.transitionType] = b.options.fade === !1 ? b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : "opacity " + b.options.speed + "ms " + b.options.cssEase, 
        b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
    }, b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed));
    }, b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer);
    }, b.prototype.autoPlayIterator = function() {
        var a = this;
        a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), 
        a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (0 === a.currentSlide - 1 && (a.direction = 1), 
        a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll);
    }, b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow = a(b.options.prevArrow), 
        b.$nextArrow = a(b.options.nextArrow), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.appendTo(b.options.appendArrows), 
        b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), 
        b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled"));
    }, b.prototype.buildDots = function() {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (d = '<ul class="' + b.options.dotsClass + '">', c = 0; c <= b.getDotCount(); c += 1) d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
            d += "</ul>", b.$dots = a(d).appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active");
        }
    }, b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), 
        b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b);
        }), b.$slidesCache = b.$slides, b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), 
        b.$list = b.$slideTrack.wrap('<div class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), 
        (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), 
        a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), 
        b.buildArrows(), b.buildDots(), b.updateDots(), b.options.accessibility === !0 && b.$list.prop("tabIndex", 0), 
        b.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), 
        b.options.draggable === !0 && b.$list.addClass("draggable");
    }, b.prototype.checkResponsive = function(b) {
        var d, e, f, c = this, g = c.$slider.width(), h = window.innerWidth || a(window).width();
        if ("window" === c.respondTo ? f = h : "slider" === c.respondTo ? f = g : "min" === c.respondTo && (f = Math.min(h, g)), 
        c.originalSettings.responsive && c.originalSettings.responsive.length > -1 && null !== c.originalSettings.responsive) {
            e = null;
            for (d in c.breakpoints) c.breakpoints.hasOwnProperty(d) && (c.originalSettings.mobileFirst === !1 ? f < c.breakpoints[d] && (e = c.breakpoints[d]) : f > c.breakpoints[d] && (e = c.breakpoints[d]));
            null !== e ? null !== c.activeBreakpoint ? e !== c.activeBreakpoint && (c.activeBreakpoint = e, 
            "unslick" === c.breakpointSettings[e] ? c.unslick() : (c.options = a.extend({}, c.originalSettings, c.breakpointSettings[e]), 
            b === !0 && (c.currentSlide = c.options.initialSlide), c.refresh())) : (c.activeBreakpoint = e, 
            "unslick" === c.breakpointSettings[e] ? c.unslick() : (c.options = a.extend({}, c.originalSettings, c.breakpointSettings[e]), 
            b === !0 && (c.currentSlide = c.options.initialSlide), c.refresh())) : null !== c.activeBreakpoint && (c.activeBreakpoint = null, 
            c.options = c.originalSettings, b === !0 && (c.currentSlide = c.options.initialSlide), 
            c.refresh());
        }
    }, b.prototype.changeSlide = function(b, c) {
        var f, g, h, d = this, e = a(b.target);
        switch (e.is("a") && b.preventDefault(), h = 0 !== d.slideCount % d.options.slidesToScroll, 
        f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
          case "previous":
            g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
            break;

          case "next":
            g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
            break;

          case "index":
            var i = 0 === b.data.index ? 0 : b.data.index || a(b.target).parent().index() * d.options.slidesToScroll;
            d.slideHandler(d.checkNavigable(i), !1, c);
            break;

          default:
            return;
        }
    }, b.prototype.checkNavigable = function(a) {
        var c, d, b = this;
        if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1]; else for (var e in c) {
            if (a < c[e]) {
                a = d;
                break;
            }
            d = c[e];
        }
        return a;
    }, b.prototype.clickHandler = function(a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
    }, b.prototype.destroy = function() {
        var b = this;
        b.autoPlayClear(), b.touchObject = {}, a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), 
        b.$prevArrow && "object" != typeof b.options.prevArrow && b.$prevArrow.remove(), 
        b.$nextArrow && "object" != typeof b.options.nextArrow && b.$nextArrow.remove(), 
        b.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("data-slick-index").css({
            position: "",
            left: "",
            top: "",
            zIndex: "",
            opacity: "",
            width: ""
        }), b.$slider.removeClass("slick-slider"), b.$slider.removeClass("slick-initialized"), 
        b.$list.off(".slick"), a(window).off(".slick-" + b.instanceUid), a(document).off(".slick-" + b.instanceUid), 
        b.$slider.html(b.$slides);
    }, b.prototype.disableTransition = function(a) {
        var b = this, c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
    }, b.prototype.fadeSlide = function(a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({
            zIndex: 1e3
        }), c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
            opacity: 1,
            zIndex: 1e3
        }), b && setTimeout(function() {
            c.disableTransition(a), b.call();
        }, c.options.speed));
    }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
        var b = this;
        null !== a && (b.unload(), b.$slideTrack.children(this.options.slide).detach(), 
        b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit());
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
        var a = this;
        return a.currentSlide;
    }, b.prototype.getDotCount = function() {
        var a = this, b = 0, c = 0, d = 0;
        if (a.options.infinite === !0) d = Math.ceil(a.slideCount / a.options.slidesToScroll); else if (a.options.centerMode === !0) d = a.slideCount; else for (;b < a.slideCount; ) ++d, 
        b = c + a.options.slidesToShow, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d - 1;
    }, b.prototype.getLeft = function(a) {
        var c, d, f, b = this, e = 0;
        return b.slideOffset = 0, d = b.$slides.first().outerHeight(), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = -1 * b.slideWidth * b.options.slidesToShow, 
        e = -1 * d * b.options.slidesToShow), 0 !== b.slideCount % b.options.slidesToScroll && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = -1 * (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth, 
        e = -1 * (b.options.slidesToShow - (a - b.slideCount)) * d) : (b.slideOffset = -1 * b.slideCount % b.options.slidesToScroll * b.slideWidth, 
        e = -1 * b.slideCount % b.options.slidesToScroll * d))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, 
        e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, 
        e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, 
        b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? -1 * a * b.slideWidth + b.slideOffset : -1 * a * d + e, 
        b.options.variableWidth === !0 && (f = b.$slideTrack.children(".slick-slide").eq(b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? a : a + b.options.slidesToShow), 
        c = f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.$slideTrack.children(".slick-slide").eq(b.options.infinite === !1 ? a : a + b.options.slidesToShow + 1), 
        c = f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), 
        c;
    }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
        var b = this;
        return b.options[a];
    }, b.prototype.getNavigableIndexes = function() {
        var e, a = this, b = 0, c = 0, d = [];
        for (a.options.infinite === !1 ? (e = a.slideCount - a.options.slidesToShow + 1, 
        a.options.centerMode === !0 && (e = a.slideCount)) : (b = -1 * a.slideCount, c = -1 * a.slideCount, 
        e = 2 * a.slideCount); e > b; ) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d;
    }, b.prototype.getSlick = function() {
        return this;
    }, b.prototype.getSlideCount = function() {
        var c, d, e, b = this;
        return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, 
        b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0;
        }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll;
    }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
        var c = this;
        c.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b);
    }, b.prototype.init = function() {
        var b = this;
        a(b.$slider).hasClass("slick-initialized") || (a(b.$slider).addClass("slick-initialized"), 
        b.buildOut(), b.setProps(), b.startLoad(), b.loadSlider(), b.initializeEvents(), 
        b.updateArrows(), b.updateDots()), b.$slider.trigger("init", [ b ]);
    }, b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
            message: "previous"
        }, a.changeSlide), a.$nextArrow.on("click.slick", {
            message: "next"
        }, a.changeSlide));
    }, b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", function() {
            b.paused = !0, b.autoPlayClear();
        }).on("mouseleave.slick", function() {
            b.paused = !1, b.autoPlay();
        });
    }, b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), b.options.autoplay === !0 && (a(document).on(b.visibilityChange, function() {
            b.visibility();
        }), b.options.pauseOnHover === !0 && (b.$list.on("mouseenter.slick", function() {
            b.paused = !0, b.autoPlayClear();
        }), b.$list.on("mouseleave.slick", function() {
            b.paused = !1, b.autoPlay();
        }))), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), 
        b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), 
        a(window).on("orientationchange.slick.slick-" + b.instanceUid, function() {
            b.checkResponsive(), b.setPosition();
        }), a(window).on("resize.slick.slick-" + b.instanceUid, function() {
            a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
                b.windowWidth = a(window).width(), b.checkResponsive(), b.setPosition();
            }, 50));
        }), a("*[draggable!=true]", b.$slideTrack).on("dragstart", function(a) {
            a.preventDefault();
        }), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
    }, b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), 
        a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), 
        a.options.autoplay === !0 && a.autoPlay();
    }, b.prototype.keyHandler = function(a) {
        var b = this;
        37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
            data: {
                message: "next"
            }
        });
    }, b.prototype.lazyLoad = function() {
        function g(b) {
            a("img[data-lazy]", b).each(function() {
                var b = a(this), c = a(this).attr("data-lazy");
                b.load(function() {
                    b.animate({
                        opacity: 1
                    }, 200);
                }).css({
                    opacity: 0
                }).attr("src", c).removeAttr("data-lazy").removeClass("slick-loading");
            });
        }
        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), 
        f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), 
        f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, 
        f = e + b.options.slidesToShow, b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), 
        c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), 
        g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), 
        g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), 
        g(d));
    }, b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition(), a.$slideTrack.css({
            opacity: 1
        }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
    }, b.prototype.next = b.prototype.slickNext = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "next"
            }
        });
    }, b.prototype.pause = b.prototype.slickPause = function() {
        var a = this;
        a.autoPlayClear(), a.paused = !0;
    }, b.prototype.play = b.prototype.slickPlay = function() {
        var a = this;
        a.paused = !1, a.autoPlay();
    }, b.prototype.postSlide = function(a) {
        var b = this;
        b.$slider.trigger("afterChange", [ b, a ]), b.animating = !1, b.setPosition(), b.swipeLeft = null, 
        b.options.autoplay === !0 && b.paused === !1 && b.autoPlay();
    }, b.prototype.prev = b.prototype.slickPrev = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "previous"
            }
        });
    }, b.prototype.progressiveLazyLoad = function() {
        var c, d, b = this;
        c = a("img[data-lazy]", b.$slider).length, c > 0 && (d = a("img[data-lazy]", b.$slider).first(), 
        d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function() {
            d.removeAttr("data-lazy"), b.progressiveLazyLoad();
        }).error(function() {
            d.removeAttr("data-lazy"), b.progressiveLazyLoad();
        }));
    }, b.prototype.refresh = function() {
        var b = this, c = b.currentSlide;
        b.destroy(), a.extend(b, b.initials), b.init(), b.changeSlide({
            data: {
                message: "index",
                index: c
            }
        }, !0);
    }, b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, 
        b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), 
        b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.setProps(), b.setupInfinite(), 
        b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), 
        b.initDotEvents(), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), 
        b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [ b ]);
    }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, 
        d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), 
        d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), 
        d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit());
    }, b.prototype.setCSS = function(a) {
        var d, e, b = this, c = {};
        b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", 
        e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, 
        b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", 
        b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", 
        b.$slideTrack.css(c)));
    }, b.prototype.setDimensions = function() {
        var a = this;
        if (a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), 
        a.options.centerMode === !0 && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1) a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), 
        a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length)); else if (a.options.variableWidth === !0) {
            var b = 0;
            a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.children(".slick-slide").each(function() {
                b += a.listWidth;
            }), a.$slideTrack.width(Math.ceil(b) + 1);
        } else a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length));
        var c = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - c);
    }, b.prototype.setFade = function() {
        var c, b = this;
        b.$slides.each(function(d, e) {
            c = -1 * b.slideWidth * d, a(e).css(b.options.rtl === !0 ? {
                position: "relative",
                right: c,
                top: 0,
                zIndex: 800,
                opacity: 0
            } : {
                position: "relative",
                left: c,
                top: 0,
                zIndex: 800,
                opacity: 0
            });
        }), b.$slides.eq(b.currentSlide).css({
            zIndex: 900,
            opacity: 1
        });
    }, b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b);
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function(a, b, c) {
        var d = this;
        d.options[a] = b, c === !0 && (d.unload(), d.reinit());
    }, b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), 
        a.$slider.trigger("setPosition", [ a ]);
    }, b.prototype.setProps = function() {
        var a = this, b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), 
        (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), 
        void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", 
        a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), 
        void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", 
        a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), 
        void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", 
        a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), 
        void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", 
        a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), 
        void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", 
        a.transitionType = "transition"), a.transformsEnabled = null !== a.animType && a.animType !== !1;
    }, b.prototype.setSlideClasses = function(a) {
        var c, d, e, f, b = this;
        b.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"), 
        d = b.$slider.find(".slick-slide"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), 
        b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active") : (e = b.options.slidesToShow + a, 
        d.slice(e - c + 1, e + c + 2).addClass("slick-active")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), 
        b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active") : d.length <= b.options.slidesToShow ? d.addClass("slick-active") : (f = b.slideCount % b.options.slidesToShow, 
        e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active")), 
        "ondemand" === b.options.lazyLoad && b.lazyLoad();
    }, b.prototype.setupInfinite = function() {
        var c, d, e, b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, 
        b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, 
            c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "");
            });
        }
    }, b.prototype.selectHandler = function(b) {
        var c = this, d = parseInt(a(b.target).parents(".slick-slide").attr("data-slick-index"));
        return d || (d = 0), c.slideCount <= c.options.slidesToShow ? (c.$slider.find(".slick-slide").removeClass("slick-active"), 
        c.$slides.eq(d).addClass("slick-active"), c.options.centerMode === !0 && (c.$slider.find(".slick-slide").removeClass("slick-center"), 
        c.$slides.eq(d).addClass("slick-center")), void c.asNavFor(d)) : void c.slideHandler(d);
    }, b.prototype.slideHandler = function(a, b, c) {
        var d, e, f, g, h = null, i = this;
        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), 
        d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, 
        i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, 
        c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d);
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, 
        c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d);
        }) : i.postSlide(d))) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), 
        e = 0 > d ? 0 !== i.slideCount % i.options.slidesToScroll ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? 0 !== i.slideCount % i.options.slidesToScroll ? 0 : d - i.slideCount : d, 
        i.animating = !0, i.$slider.trigger("beforeChange", [ i, i.currentSlide, e ]), f = i.currentSlide, 
        i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), 
        i.options.fade === !0 ? (c !== !0 ? i.fadeSlide(e, function() {
            i.postSlide(e);
        }) : i.postSlide(e), void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function() {
            i.postSlide(e);
        }) : i.postSlide(e))));
    }, b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), 
        a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), 
        a.$slider.addClass("slick-loading");
    }, b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, 
        c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 
        45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : "vertical";
    }, b.prototype.swipeEnd = function() {
        var c, b = this;
        if (b.dragging = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [ b, b.swipeDirection() ]), 
        b.touchObject.swipeLength >= b.touchObject.minSwipe) switch (b.swipeDirection()) {
          case "left":
            c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), 
            b.slideHandler(c), b.currentDirection = 0, b.touchObject = {}, b.$slider.trigger("swipe", [ b, "left" ]);
            break;

          case "right":
            c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), 
            b.slideHandler(c), b.currentDirection = 1, b.touchObject = {}, b.$slider.trigger("swipe", [ b, "right" ]);
        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), 
        b.touchObject = {});
    }, b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, 
        b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, a.data.action) {
          case "start":
            b.swipeStart(a);
            break;

          case "move":
            b.swipeMove(a);
            break;

          case "end":
            b.swipeEnd(a);
        }
    }, b.prototype.swipeMove = function(a) {
        var d, e, f, g, h, b = this;
        return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), 
        b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, 
        b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), 
        e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), 
        g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), 
        f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, 
        b.touchObject.edgeHit = !0), b.swipeLeft = b.options.vertical === !1 ? d + f * g : d + f * (b.$list.height() / b.listWidth) * g, 
        b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, 
        !1) : void b.setCSS(b.swipeLeft)) : void 0);
    }, b.prototype.swipeStart = function(a) {
        var c, b = this;
        return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, 
        !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), 
        b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, 
        b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, 
        void (b.dragging = !0));
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), 
        a.$slidesCache.appendTo(a.$slideTrack), a.reinit());
    }, b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && "object" != typeof b.options.prevArrow && b.$prevArrow.remove(), 
        b.$nextArrow && "object" != typeof b.options.nextArrow && b.$nextArrow.remove(), 
        b.$slides.removeClass("slick-slide slick-active slick-visible").css("width", "");
    }, b.prototype.unslick = function() {
        var a = this;
        a.destroy();
    }, b.prototype.updateArrows = function() {
        var b, a = this;
        b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.options.infinite !== !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.removeClass("slick-disabled"), 
        a.$nextArrow.removeClass("slick-disabled"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled"), 
        a.$nextArrow.removeClass("slick-disabled")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled"), 
        a.$prevArrow.removeClass("slick-disabled")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled"), 
        a.$prevArrow.removeClass("slick-disabled")));
    }, b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active"));
    }, b.prototype.visibility = function() {
        var a = this;
        document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : (a.paused = !1, a.autoPlay());
    }, a.fn.slick = function() {
        var g, a = this, c = arguments[0], d = Array.prototype.slice.call(arguments, 1), e = a.length, f = 0;
        for (f; e > f; f++) if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), 
        "undefined" != typeof g) return g;
        return a;
    }, a(function() {
        a("[data-slick]").slick();
    });
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? c / 2 * t * t + b : -c / 2 * (--t * (t - 2) - 1) + b;
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? c / 2 * t * t * t + b : c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? c / 2 * t * t * t * t + b : -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? c / 2 * t * t * t * t * t + b : c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function(x, t, b, c, d) {
        return 0 == t ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function(x, t, b, c, d) {
        return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function(x, t, b, c, d) {
        return 0 == t ? b : t == d ? b + c : (t /= d / 2) < 1 ? c / 2 * Math.pow(2, 10 * (t - 1)) + b : c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? -c / 2 * (Math.sqrt(1 - t * t) - 1) + b : c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158, p = 0, a = c;
        if (0 == t) return b;
        if (1 == (t /= d)) return b + c;
        if (p || (p = .3 * d), a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * d - s) * Math.PI / p)) + b;
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158, p = 0, a = c;
        if (0 == t) return b;
        if (1 == (t /= d)) return b + c;
        if (p || (p = .3 * d), a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin(2 * (t * d - s) * Math.PI / p) + c + b;
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158, p = 0, a = c;
        if (0 == t) return b;
        if (2 == (t /= d / 2)) return b + c;
        if (p || (p = .3 * d * 1.5), a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return 1 > t ? -.5 * a * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * d - s) * Math.PI / p) + b : a * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * d - s) * Math.PI / p) * .5 + c + b;
    },
    easeInBack: function(x, t, b, c, d, s) {
        return void 0 == s && (s = 1.70158), c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function(x, t, b, c, d, s) {
        return void 0 == s && (s = 1.70158), c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        return void 0 == s && (s = 1.70158), (t /= d / 2) < 1 ? c / 2 * t * t * (((s *= 1.525) + 1) * t - s) + b : c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function(x, t, b, c, d) {
        return (t /= d) < 1 / 2.75 ? 7.5625 * c * t * t + b : 2 / 2.75 > t ? c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b : 2.5 / 2.75 > t ? c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b : c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
    },
    easeInOutBounce: function(x, t, b, c, d) {
        return d / 2 > t ? .5 * jQuery.easing.easeInBounce(x, 2 * t, 0, c, d) + b : .5 * jQuery.easing.easeOutBounce(x, 2 * t - d, 0, c, d) + .5 * c + b;
    }
}), jQuery.extend(jQuery.easing, {
    easeInOutMaterial: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? c / 2 * t * t + b : c / 4 * ((t -= 2) * t * t + 2) + b;
    }
}), !function(e) {
    function t(e) {
        var t = e.length, r = $.type(e);
        return "function" === r || $.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e;
    }
    if (!e.jQuery) {
        var $ = function(e, t) {
            return new $.fn.init(e, t);
        };
        $.isWindow = function(e) {
            return null != e && e == e.window;
        }, $.type = function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[o.call(e)] || "object" : typeof e;
        }, $.isArray = Array.isArray || function(e) {
            return "array" === $.type(e);
        }, $.isPlainObject = function(e) {
            var t;
            if (!e || "object" !== $.type(e) || e.nodeType || $.isWindow(e)) return !1;
            try {
                if (e.constructor && !n.call(e, "constructor") && !n.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (r) {
                return !1;
            }
            for (t in e) ;
            return void 0 === t || n.call(e, t);
        }, $.each = function(e, r, a) {
            var n, o = 0, i = e.length, s = t(e);
            if (a) {
                if (s) for (;i > o && (n = r.apply(e[o], a), n !== !1); o++) ; else for (o in e) if (n = r.apply(e[o], a), 
                n === !1) break;
            } else if (s) for (;i > o && (n = r.call(e[o], o, e[o]), n !== !1); o++) ; else for (o in e) if (n = r.call(e[o], o, e[o]), 
            n === !1) break;
            return e;
        }, $.data = function(e, t, a) {
            if (void 0 === a) {
                var n = e[$.expando], o = n && r[n];
                if (void 0 === t) return o;
                if (o && t in o) return o[t];
            } else if (void 0 !== t) {
                var n = e[$.expando] || (e[$.expando] = ++$.uuid);
                return r[n] = r[n] || {}, r[n][t] = a, a;
            }
        }, $.removeData = function(e, t) {
            var a = e[$.expando], n = a && r[a];
            n && $.each(t, function(e, t) {
                delete n[t];
            });
        }, $.extend = function() {
            var e, t, r, a, n, o, i = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof i && (u = i, i = arguments[s] || {}, s++), "object" != typeof i && "function" !== $.type(i) && (i = {}), 
            s === l && (i = this, s--); l > s; s++) if (null != (n = arguments[s])) for (a in n) e = i[a], 
            r = n[a], i !== r && (u && r && ($.isPlainObject(r) || (t = $.isArray(r))) ? (t ? (t = !1, 
            o = e && $.isArray(e) ? e : []) : o = e && $.isPlainObject(e) ? e : {}, i[a] = $.extend(u, o, r)) : void 0 !== r && (i[a] = r));
            return i;
        }, $.queue = function(e, r, a) {
            function n(e, r) {
                var a = r || [];
                return null != e && (t(Object(e)) ? !function(e, t) {
                    for (var r = +t.length, a = 0, n = e.length; r > a; ) e[n++] = t[a++];
                    if (r !== r) for (;void 0 !== t[a]; ) e[n++] = t[a++];
                    return e.length = n, e;
                }(a, "string" == typeof e ? [ e ] : e) : [].push.call(a, e)), a;
            }
            if (e) {
                r = (r || "fx") + "queue";
                var o = $.data(e, r);
                return a ? (!o || $.isArray(a) ? o = $.data(e, r, n(a)) : o.push(a), o) : o || [];
            }
        }, $.dequeue = function(e, t) {
            $.each(e.nodeType ? [ e ] : e, function(e, r) {
                t = t || "fx";
                var a = $.queue(r, t), n = a.shift();
                "inprogress" === n && (n = a.shift()), n && ("fx" === t && a.unshift("inprogress"), 
                n.call(r, function() {
                    $.dequeue(r, t);
                }));
            });
        }, $.fn = $.prototype = {
            init: function(e) {
                if (e.nodeType) return this[0] = e, this;
                throw new Error("Not a DOM node.");
            },
            offset: function() {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                };
            },
            position: function() {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position; ) e = e.offsetParent;
                    return e || document;
                }
                var t = this[0], e = e.apply(t), r = this.offset(), a = /^(?:body|html)$/i.test(e.nodeName) ? {
                    top: 0,
                    left: 0
                } : $(e).offset();
                return r.top -= parseFloat(t.style.marginTop) || 0, r.left -= parseFloat(t.style.marginLeft) || 0, 
                e.style && (a.top += parseFloat(e.style.borderTopWidth) || 0, a.left += parseFloat(e.style.borderLeftWidth) || 0), 
                {
                    top: r.top - a.top,
                    left: r.left - a.left
                };
            }
        };
        var r = {};
        $.expando = "velocity" + new Date().getTime(), $.uuid = 0;
        for (var a = {}, n = a.hasOwnProperty, o = a.toString, i = "Boolean Number String Function Array Date RegExp Object Error".split(" "), s = 0; s < i.length; s++) a["[object " + i[s] + "]"] = i[s].toLowerCase();
        $.fn.init.prototype = $.fn, e.Velocity = {
            Utilities: $
        };
    }
}(window), function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e();
}(function() {
    return function(e, t, r, a) {
        function n(e) {
            for (var t = -1, r = e ? e.length : 0, a = []; ++t < r; ) {
                var n = e[t];
                n && a.push(n);
            }
            return a;
        }
        function o(e) {
            return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [ e ]), e;
        }
        function i(e) {
            var t = $.data(e, "velocity");
            return null === t ? a : t;
        }
        function s(e) {
            return function(t) {
                return Math.round(t * e) * (1 / e);
            };
        }
        function l(e, r, a, n) {
            function o(e, t) {
                return 1 - 3 * t + 3 * e;
            }
            function i(e, t) {
                return 3 * t - 6 * e;
            }
            function s(e) {
                return 3 * e;
            }
            function l(e, t, r) {
                return ((o(t, r) * e + i(t, r)) * e + s(t)) * e;
            }
            function u(e, t, r) {
                return 3 * o(t, r) * e * e + 2 * i(t, r) * e + s(t);
            }
            function c(t, r) {
                for (var n = 0; m > n; ++n) {
                    var o = u(r, e, a);
                    if (0 === o) return r;
                    var i = l(r, e, a) - t;
                    r -= i / o;
                }
                return r;
            }
            function p() {
                for (var t = 0; b > t; ++t) w[t] = l(t * x, e, a);
            }
            function f(t, r, n) {
                var o, i, s = 0;
                do i = r + (n - r) / 2, o = l(i, e, a) - t, o > 0 ? n = i : r = i; while (Math.abs(o) > h && ++s < v);
                return i;
            }
            function d(t) {
                for (var r = 0, n = 1, o = b - 1; n != o && w[n] <= t; ++n) r += x;
                --n;
                var i = (t - w[n]) / (w[n + 1] - w[n]), s = r + i * x, l = u(s, e, a);
                return l >= y ? c(t, s) : 0 == l ? s : f(t, r, r + x);
            }
            function g() {
                V = !0, (e != r || a != n) && p();
            }
            var m = 4, y = .001, h = 1e-7, v = 10, b = 11, x = 1 / (b - 1), S = "Float32Array" in t;
            if (4 !== arguments.length) return !1;
            for (var P = 0; 4 > P; ++P) if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P])) return !1;
            e = Math.min(e, 1), a = Math.min(a, 1), e = Math.max(e, 0), a = Math.max(a, 0);
            var w = S ? new Float32Array(b) : new Array(b), V = !1, C = function(t) {
                return V || g(), e === r && a === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, n);
            };
            C.getControlPoints = function() {
                return [ {
                    x: e,
                    y: r
                }, {
                    x: a,
                    y: n
                } ];
            };
            var T = "generateBezier(" + [ e, r, a, n ] + ")";
            return C.toString = function() {
                return T;
            }, C;
        }
        function u(e, t) {
            var r = e;
            return g.isString(e) ? v.Easings[e] || (r = !1) : r = g.isArray(e) && 1 === e.length ? s.apply(null, e) : g.isArray(e) && 2 === e.length ? b.apply(null, e.concat([ t ])) : g.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, 
            r === !1 && (r = v.Easings[v.defaults.easing] ? v.defaults.easing : h), r;
        }
        function c(e) {
            if (e) for (var t = new Date().getTime(), r = 0, n = v.State.calls.length; n > r; r++) if (v.State.calls[r]) {
                var o = v.State.calls[r], s = o[0], l = o[2], u = o[3], f = !!u;
                u || (u = v.State.calls[r][3] = t - 16);
                for (var d = Math.min((t - u) / l.duration, 1), m = 0, y = s.length; y > m; m++) {
                    var h = s[m], b = h.element;
                    if (i(b)) {
                        var S = !1;
                        if (l.display !== a && null !== l.display && "none" !== l.display) {
                            if ("flex" === l.display) {
                                var w = [ "-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex" ];
                                $.each(w, function(e, t) {
                                    x.setPropertyValue(b, "display", t);
                                });
                            }
                            x.setPropertyValue(b, "display", l.display);
                        }
                        l.visibility !== a && "hidden" !== l.visibility && x.setPropertyValue(b, "visibility", l.visibility);
                        for (var V in h) if ("element" !== V) {
                            var T, C = h[V], k = g.isString(C.easing) ? v.Easings[C.easing] : C.easing;
                            if (1 === d) T = C.endValue; else if (T = C.startValue + (C.endValue - C.startValue) * k(d), 
                            !f && T === C.currentValue) continue;
                            if (C.currentValue = T, x.Hooks.registered[V]) {
                                var A = x.Hooks.getRoot(V), F = i(b).rootPropertyValueCache[A];
                                F && (C.rootPropertyValue = F);
                            }
                            var E = x.setPropertyValue(b, V, C.currentValue + (0 === parseFloat(T) ? "" : C.unitType), C.rootPropertyValue, C.scrollData);
                            x.Hooks.registered[V] && (i(b).rootPropertyValueCache[A] = x.Normalizations.registered[A] ? x.Normalizations.registered[A]("extract", null, E[1]) : E[1]), 
                            "transform" === E[0] && (S = !0);
                        }
                        l.mobileHA && i(b).transformCache.translate3d === a && (i(b).transformCache.translate3d = "(0px, 0px, 0px)", 
                        S = !0), S && x.flushTransformCache(b);
                    }
                }
                l.display !== a && "none" !== l.display && (v.State.calls[r][2].display = !1), l.visibility !== a && "hidden" !== l.visibility && (v.State.calls[r][2].visibility = !1), 
                l.progress && l.progress.call(o[1], o[1], d, Math.max(0, u + l.duration - t), u), 
                1 === d && p(r);
            }
            v.State.isTicking && P(c);
        }
        function p(e, t) {
            if (!v.State.calls[e]) return !1;
            for (var r = v.State.calls[e][0], n = v.State.calls[e][1], o = v.State.calls[e][2], s = v.State.calls[e][4], l = !1, u = 0, c = r.length; c > u; u++) {
                var p = r[u].element;
                if (t || o.loop || ("none" === o.display && x.setPropertyValue(p, "display", o.display), 
                "hidden" === o.visibility && x.setPropertyValue(p, "visibility", o.visibility)), 
                o.loop !== !0 && ($.queue(p)[1] === a || !/\.velocityQueueEntryFlag/i.test($.queue(p)[1])) && i(p)) {
                    i(p).isAnimating = !1, i(p).rootPropertyValueCache = {};
                    var f = !1;
                    $.each(x.Lists.transforms3D, function(e, t) {
                        var r = /^scale/.test(t) ? 1 : 0, n = i(p).transformCache[t];
                        i(p).transformCache[t] !== a && new RegExp("^\\(" + r + "[^.]").test(n) && (f = !0, 
                        delete i(p).transformCache[t]);
                    }), o.mobileHA && (f = !0, delete i(p).transformCache.translate3d), f && x.flushTransformCache(p), 
                    x.Values.removeClass(p, "velocity-animating");
                }
                if (!t && o.complete && !o.loop && u === c - 1) try {
                    o.complete.call(n, n);
                } catch (d) {
                    setTimeout(function() {
                        throw d;
                    }, 1);
                }
                s && o.loop !== !0 && s(n), o.loop !== !0 || t || ($.each(i(p).tweensContainer, function(e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360);
                }), v(p, "reverse", {
                    loop: !0,
                    delay: o.delay
                })), o.queue !== !1 && $.dequeue(p, o.queue);
            }
            v.State.calls[e] = !1;
            for (var g = 0, m = v.State.calls.length; m > g; g++) if (v.State.calls[g] !== !1) {
                l = !0;
                break;
            }
            l === !1 && (v.State.isTicking = !1, delete v.State.calls, v.State.calls = []);
        }
        var $, f = function() {
            if (r.documentMode) return r.documentMode;
            for (var e = 7; e > 4; e--) {
                var t = r.createElement("div");
                if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, 
                e;
            }
            return a;
        }(), d = function() {
            var e = 0;
            return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                var a, r = new Date().getTime();
                return a = Math.max(0, 16 - (r - e)), e = r + a, setTimeout(function() {
                    t(r + a);
                }, a);
            };
        }(), g = {
            isString: function(e) {
                return "string" == typeof e;
            },
            isArray: Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e);
            },
            isFunction: function(e) {
                return "[object Function]" === Object.prototype.toString.call(e);
            },
            isNode: function(e) {
                return e && e.nodeType;
            },
            isNodeList: function(e) {
                return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== a && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0);
            },
            isWrapped: function(e) {
                return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e));
            },
            isSVG: function(e) {
                return t.SVGElement && e instanceof t.SVGElement;
            },
            isEmptyObject: function(e) {
                for (var t in e) return !1;
                return !0;
            }
        }, m = !1;
        if (e.fn && e.fn.jquery ? ($ = e, m = !0) : $ = t.Velocity.Utilities, 8 >= f && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= f) return void (jQuery.fn.velocity = jQuery.fn.animate);
        var y = 400, h = "swing", v = {
            State: {
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                isAndroid: /Android/i.test(navigator.userAgent),
                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                isChrome: t.chrome,
                isFirefox: /Firefox/i.test(navigator.userAgent),
                prefixElement: r.createElement("div"),
                prefixMatches: {},
                scrollAnchor: null,
                scrollPropertyLeft: null,
                scrollPropertyTop: null,
                isTicking: !1,
                calls: []
            },
            CSS: {},
            Utilities: $,
            Redirects: {},
            Easings: {},
            Promise: t.Promise,
            defaults: {
                queue: "",
                duration: y,
                easing: h,
                begin: a,
                complete: a,
                progress: a,
                display: a,
                visibility: a,
                loop: !1,
                delay: !1,
                mobileHA: !0,
                _cacheValues: !0
            },
            init: function(e) {
                $.data(e, "velocity", {
                    isSVG: g.isSVG(e),
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
        t.pageYOffset !== a ? (v.State.scrollAnchor = t, v.State.scrollPropertyLeft = "pageXOffset", 
        v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, 
        v.State.scrollPropertyLeft = "scrollLeft", v.State.scrollPropertyTop = "scrollTop");
        var b = function() {
            function e(e) {
                return -e.tension * e.x - e.friction * e.v;
            }
            function t(t, r, a) {
                var n = {
                    x: t.x + a.dx * r,
                    v: t.v + a.dv * r,
                    tension: t.tension,
                    friction: t.friction
                };
                return {
                    dx: n.v,
                    dv: e(n)
                };
            }
            function r(r, a) {
                var n = {
                    dx: r.v,
                    dv: e(r)
                }, o = t(r, .5 * a, n), i = t(r, .5 * a, o), s = t(r, a, i), l = 1 / 6 * (n.dx + 2 * (o.dx + i.dx) + s.dx), u = 1 / 6 * (n.dv + 2 * (o.dv + i.dv) + s.dv);
                return r.x = r.x + l * a, r.v = r.v + u * a, r;
            }
            return function a(e, t, n) {
                var c, p, f, o = {
                    x: -1,
                    v: 0,
                    tension: null,
                    friction: null
                }, i = [ 0 ], s = 0, l = 1e-4, u = .016;
                for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, n = n || null, o.tension = e, 
                o.friction = t, c = null !== n, c ? (s = a(e, t), p = s / n * u) : p = u; f = r(f || o, p), 
                i.push(1 + f.x), s += 16, Math.abs(f.x) > l && Math.abs(f.v) > l; ) ;
                return c ? function(e) {
                    return i[e * (i.length - 1) | 0];
                } : s;
            };
        }();
        v.Easings = {
            linear: function(e) {
                return e;
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2;
            },
            spring: function(e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e);
            }
        }, $.each([ [ "ease", [ .25, .1, .25, 1 ] ], [ "ease-in", [ .42, 0, 1, 1 ] ], [ "ease-out", [ 0, 0, .58, 1 ] ], [ "ease-in-out", [ .42, 0, .58, 1 ] ], [ "easeInSine", [ .47, 0, .745, .715 ] ], [ "easeOutSine", [ .39, .575, .565, 1 ] ], [ "easeInOutSine", [ .445, .05, .55, .95 ] ], [ "easeInQuad", [ .55, .085, .68, .53 ] ], [ "easeOutQuad", [ .25, .46, .45, .94 ] ], [ "easeInOutQuad", [ .455, .03, .515, .955 ] ], [ "easeInCubic", [ .55, .055, .675, .19 ] ], [ "easeOutCubic", [ .215, .61, .355, 1 ] ], [ "easeInOutCubic", [ .645, .045, .355, 1 ] ], [ "easeInQuart", [ .895, .03, .685, .22 ] ], [ "easeOutQuart", [ .165, .84, .44, 1 ] ], [ "easeInOutQuart", [ .77, 0, .175, 1 ] ], [ "easeInQuint", [ .755, .05, .855, .06 ] ], [ "easeOutQuint", [ .23, 1, .32, 1 ] ], [ "easeInOutQuint", [ .86, 0, .07, 1 ] ], [ "easeInExpo", [ .95, .05, .795, .035 ] ], [ "easeOutExpo", [ .19, 1, .22, 1 ] ], [ "easeInOutExpo", [ 1, 0, 0, 1 ] ], [ "easeInCirc", [ .6, .04, .98, .335 ] ], [ "easeOutCirc", [ .075, .82, .165, 1 ] ], [ "easeInOutCirc", [ .785, .135, .15, .86 ] ] ], function(e, t) {
            v.Easings[t[0]] = l.apply(null, t[1]);
        });
        var x = v.CSS = {
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
                    for (var e = 0; e < x.Lists.colors.length; e++) {
                        var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                        x.Hooks.templates[x.Lists.colors[e]] = [ "Red Green Blue Alpha", t ];
                    }
                    var r, a, n;
                    if (f) for (r in x.Hooks.templates) {
                        a = x.Hooks.templates[r], n = a[0].split(" ");
                        var o = a[1].match(x.RegEx.valueSplit);
                        "Color" === n[0] && (n.push(n.shift()), o.push(o.shift()), x.Hooks.templates[r] = [ n.join(" "), o.join(" ") ]);
                    }
                    for (r in x.Hooks.templates) {
                        a = x.Hooks.templates[r], n = a[0].split(" ");
                        for (var e in n) {
                            var i = r + n[e], s = e;
                            x.Hooks.registered[i] = [ r, s ];
                        }
                    }
                },
                getRoot: function(e) {
                    var t = x.Hooks.registered[e];
                    return t ? t[0] : e;
                },
                cleanRootPropertyValue: function(e, t) {
                    return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), 
                    t;
                },
                extractValue: function(e, t) {
                    var r = x.Hooks.registered[e];
                    if (r) {
                        var a = r[0], n = r[1];
                        return t = x.Hooks.cleanRootPropertyValue(a, t), t.toString().match(x.RegEx.valueSplit)[n];
                    }
                    return t;
                },
                injectValue: function(e, t, r) {
                    var a = x.Hooks.registered[e];
                    if (a) {
                        var i, s, n = a[0], o = a[1];
                        return r = x.Hooks.cleanRootPropertyValue(n, r), i = r.toString().match(x.RegEx.valueSplit), 
                        i[o] = t, s = i.join(" ");
                    }
                    return r;
                }
            },
            Normalizations: {
                registered: {
                    clip: function(e, t, r) {
                        switch (e) {
                          case "name":
                            return "clip";

                          case "extract":
                            var a;
                            return x.RegEx.wrappedValueAlreadyExtracted.test(r) ? a = r : (a = r.toString().match(x.RegEx.valueUnwrap), 
                            a = a ? a[1].replace(/,(\s+)?/g, " ") : r), a;

                          case "inject":
                            return "rect(" + r + ")";
                        }
                    },
                    blur: function(e, t, r) {
                        switch (e) {
                          case "name":
                            return "-webkit-filter";

                          case "extract":
                            var a = parseFloat(r);
                            if (!a && 0 !== a) {
                                var n = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                a = n ? n[1] : 0;
                            }
                            return a;

                          case "inject":
                            return parseFloat(r) ? "blur(" + r + ")" : "none";
                        }
                    },
                    opacity: function(e, t, r) {
                        if (8 >= f) switch (e) {
                          case "name":
                            return "filter";

                          case "extract":
                            var a = r.toString().match(/alpha\(opacity=(.*)\)/i);
                            return r = a ? a[1] / 100 : 1;

                          case "inject":
                            return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")";
                        } else switch (e) {
                          case "name":
                            return "opacity";

                          case "extract":
                            return r;

                          case "inject":
                            return r;
                        }
                    }
                },
                register: function() {
                    9 >= f || v.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                    for (var e = 0; e < x.Lists.transformsBase.length; e++) !function() {
                        var t = x.Lists.transformsBase[e];
                        x.Normalizations.registered[t] = function(e, r, n) {
                            switch (e) {
                              case "name":
                                return "transform";

                              case "extract":
                                return i(r) === a || i(r).transformCache[t] === a ? /^scale/i.test(t) ? 1 : 0 : i(r).transformCache[t].replace(/[()]/g, "");

                              case "inject":
                                var o = !1;
                                switch (t.substr(0, t.length - 1)) {
                                  case "translate":
                                    o = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                                    break;

                                  case "scal":
                                  case "scale":
                                    v.State.isAndroid && i(r).transformCache[t] === a && 1 > n && (n = 1), o = !/(\d)$/i.test(n);
                                    break;

                                  case "skew":
                                    o = !/(deg|\d)$/i.test(n);
                                    break;

                                  case "rotate":
                                    o = !/(deg|\d)$/i.test(n);
                                }
                                return o || (i(r).transformCache[t] = "(" + n + ")"), i(r).transformCache[t];
                            }
                        };
                    }();
                    for (var e = 0; e < x.Lists.colors.length; e++) !function() {
                        var t = x.Lists.colors[e];
                        x.Normalizations.registered[t] = function(e, r, n) {
                            switch (e) {
                              case "name":
                                return t;

                              case "extract":
                                var o;
                                if (x.RegEx.wrappedValueAlreadyExtracted.test(n)) o = n; else {
                                    var i, s = {
                                        black: "rgb(0, 0, 0)",
                                        blue: "rgb(0, 0, 255)",
                                        gray: "rgb(128, 128, 128)",
                                        green: "rgb(0, 128, 0)",
                                        red: "rgb(255, 0, 0)",
                                        white: "rgb(255, 255, 255)"
                                    };
                                    /^[A-z]+$/i.test(n) ? i = s[n] !== a ? s[n] : s.black : x.RegEx.isHex.test(n) ? i = "rgb(" + x.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (i = s.black), 
                                    o = (i || n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                                }
                                return 8 >= f || 3 !== o.split(" ").length || (o += " 1"), o;

                              case "inject":
                                return 8 >= f ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), 
                                (8 >= f ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
                            }
                        };
                    }();
                }
            },
            Names: {
                camelCase: function(e) {
                    return e.replace(/-(\w)/g, function(e, t) {
                        return t.toUpperCase();
                    });
                },
                SVGAttribute: function(e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (f || v.State.isAndroid && !v.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e);
                },
                prefixCheck: function(e) {
                    if (v.State.prefixMatches[e]) return [ v.State.prefixMatches[e], !0 ];
                    for (var t = [ "", "Webkit", "Moz", "ms", "O" ], r = 0, a = t.length; a > r; r++) {
                        var n;
                        if (n = 0 === r ? e : t[r] + e.replace(/^\w/, function(e) {
                            return e.toUpperCase();
                        }), g.isString(v.State.prefixElement.style[n])) return v.State.prefixMatches[e] = n, 
                        [ n, !0 ];
                    }
                    return [ e, !1 ];
                }
            },
            Values: {
                hexToRgb: function(e) {
                    var a, t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return e = e.replace(t, function(e, t, r, a) {
                        return t + t + r + r + a + a;
                    }), a = r.exec(e), a ? [ parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16) ] : [ 0, 0, 0 ];
                },
                isCSSNullValue: function(e) {
                    return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e);
                },
                getUnitType: function(e) {
                    return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px";
                },
                getDisplayType: function(e) {
                    var t = e && e.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : "block";
                },
                addClass: function(e, t) {
                    e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t;
                },
                removeClass: function(e, t) {
                    e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                }
            },
            getPropertyValue: function(e, r, n, o) {
                function s(e, r) {
                    function n() {
                        u && x.setPropertyValue(e, "display", "none");
                    }
                    var l = 0;
                    if (8 >= f) l = $.css(e, r); else {
                        var u = !1;
                        if (/^(width|height)$/.test(r) && 0 === x.getPropertyValue(e, "display") && (u = !0, 
                        x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !o) {
                            if ("height" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var c = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                return n(), c;
                            }
                            if ("width" === r && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var p = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                return n(), p;
                            }
                        }
                        var d;
                        d = i(e) === a ? t.getComputedStyle(e, null) : i(e).computedStyle ? i(e).computedStyle : i(e).computedStyle = t.getComputedStyle(e, null), 
                        (f || v.State.isFirefox) && "borderColor" === r && (r = "borderTopColor"), l = 9 === f && "filter" === r ? d.getPropertyValue(r) : d[r], 
                        ("" === l || null === l) && (l = e.style[r]), n();
                    }
                    if ("auto" === l && /^(top|right|bottom|left)$/i.test(r)) {
                        var g = s(e, "position");
                        ("fixed" === g || "absolute" === g && /top|left/i.test(r)) && (l = $(e).position()[r] + "px");
                    }
                    return l;
                }
                var l;
                if (x.Hooks.registered[r]) {
                    var u = r, c = x.Hooks.getRoot(u);
                    n === a && (n = x.getPropertyValue(e, x.Names.prefixCheck(c)[0])), x.Normalizations.registered[c] && (n = x.Normalizations.registered[c]("extract", e, n)), 
                    l = x.Hooks.extractValue(u, n);
                } else if (x.Normalizations.registered[r]) {
                    var p, d;
                    p = x.Normalizations.registered[r]("name", e), "transform" !== p && (d = s(e, x.Names.prefixCheck(p)[0]), 
                    x.Values.isCSSNullValue(d) && x.Hooks.templates[r] && (d = x.Hooks.templates[r][1])), 
                    l = x.Normalizations.registered[r]("extract", e, d);
                }
                return /^[\d-]/.test(l) || (l = i(e) && i(e).isSVG && x.Names.SVGAttribute(r) ? /^(height|width)$/i.test(r) ? e.getBBox()[r] : e.getAttribute(r) : s(e, x.Names.prefixCheck(r)[0])), 
                x.Values.isCSSNullValue(l) && (l = 0), v.debug >= 2 && console.log("Get " + r + ": " + l), 
                l;
            },
            setPropertyValue: function(e, r, a, n, o) {
                var s = r;
                if ("scroll" === r) o.container ? o.container["scroll" + o.direction] = a : "Left" === o.direction ? t.scrollTo(a, o.alternateValue) : t.scrollTo(o.alternateValue, a); else if (x.Normalizations.registered[r] && "transform" === x.Normalizations.registered[r]("name", e)) x.Normalizations.registered[r]("inject", e, a), 
                s = "transform", a = i(e).transformCache[r]; else {
                    if (x.Hooks.registered[r]) {
                        var l = r, u = x.Hooks.getRoot(r);
                        n = n || x.getPropertyValue(e, u), a = x.Hooks.injectValue(l, a, n), r = u;
                    }
                    if (x.Normalizations.registered[r] && (a = x.Normalizations.registered[r]("inject", e, a), 
                    r = x.Normalizations.registered[r]("name", e)), s = x.Names.prefixCheck(r)[0], 8 >= f) try {
                        e.style[s] = a;
                    } catch (c) {
                        v.debug && console.log("Browser does not support [" + a + "] for [" + s + "]");
                    } else i(e) && i(e).isSVG && x.Names.SVGAttribute(r) ? e.setAttribute(r, a) : e.style[s] = a;
                    v.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a);
                }
                return [ s, a ];
            },
            flushTransformCache: function(e) {
                function t(t) {
                    return parseFloat(x.getPropertyValue(e, t));
                }
                var r = "";
                if ((f || v.State.isAndroid && !v.State.isChrome) && i(e).isSVG) {
                    var a = {
                        translate: [ t("translateX"), t("translateY") ],
                        skewX: [ t("skewX") ],
                        skewY: [ t("skewY") ],
                        scale: 1 !== t("scale") ? [ t("scale"), t("scale") ] : [ t("scaleX"), t("scaleY") ],
                        rotate: [ t("rotateZ"), 0, 0 ]
                    };
                    $.each(i(e).transformCache, function(e) {
                        /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), 
                        a[e] && (r += e + "(" + a[e].join(" ") + ") ", delete a[e]);
                    });
                } else {
                    var n, o;
                    $.each(i(e).transformCache, function(t) {
                        return n = i(e).transformCache[t], "transformPerspective" === t ? (o = n, !0) : (9 === f && "rotateZ" === t && (t = "rotate"), 
                        void (r += t + n + " "));
                    }), o && (r = "perspective" + o + " " + r);
                }
                x.setPropertyValue(e, "transform", r);
            }
        };
        x.Hooks.register(), x.Normalizations.register(), v.hook = function(e, t, r) {
            var n = a;
            return e = o(e), $.each(e, function(e, o) {
                if (i(o) === a && v.init(o), r === a) n === a && (n = v.CSS.getPropertyValue(o, t)); else {
                    var s = v.CSS.setPropertyValue(o, t, r);
                    "transform" === s[0] && v.CSS.flushTransformCache(o), n = s;
                }
            }), n;
        };
        var S = function() {
            function e() {
                return f ? k.promise || null : d;
            }
            function s() {
                function e() {
                    function f(e, t) {
                        var r = a, n = a, i = a;
                        return g.isArray(e) ? (r = e[0], !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? i = e[1] : (g.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (n = t ? e[1] : u(e[1], s.duration), 
                        e[2] !== a && (i = e[2]))) : r = e, t || (n = n || s.easing), g.isFunction(r) && (r = r.call(o, V, w)), 
                        g.isFunction(i) && (i = i.call(o, V, w)), [ r || 0, n, i ];
                    }
                    function d(e, t) {
                        var r, a;
                        return a = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                            return r = e, "";
                        }), r || (r = x.Values.getUnitType(e)), [ a, r ];
                    }
                    function m() {
                        var e = {
                            myParent: o.parentNode || r.body,
                            position: x.getPropertyValue(o, "position"),
                            fontSize: x.getPropertyValue(o, "fontSize")
                        }, a = e.position === L.lastPosition && e.myParent === L.lastParent, n = e.fontSize === L.lastFontSize;
                        L.lastParent = e.myParent, L.lastPosition = e.position, L.lastFontSize = e.fontSize;
                        var s = 100, l = {};
                        if (n && a) l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, 
                        l.percentToPxHeight = L.lastPercentToPxHeight; else {
                            var u = i(o).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
                            v.init(u), e.myParent.appendChild(u), $.each([ "overflow", "overflowX", "overflowY" ], function(e, t) {
                                v.CSS.setPropertyValue(u, t, "hidden");
                            }), v.CSS.setPropertyValue(u, "position", e.position), v.CSS.setPropertyValue(u, "fontSize", e.fontSize), 
                            v.CSS.setPropertyValue(u, "boxSizing", "content-box"), $.each([ "minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height" ], function(e, t) {
                                v.CSS.setPropertyValue(u, t, s + "%");
                            }), v.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(u, "width", null, !0)) || 1) / s, 
                            l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(u, "height", null, !0)) || 1) / s, 
                            l.emToPx = L.lastEmToPx = (parseFloat(x.getPropertyValue(u, "paddingLeft")) || 1) / s, 
                            e.myParent.removeChild(u);
                        }
                        return null === L.remToPx && (L.remToPx = parseFloat(x.getPropertyValue(r.body, "fontSize")) || 16), 
                        null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100, L.vhToPx = parseFloat(t.innerHeight) / 100), 
                        l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), 
                        l;
                    }
                    if (s.begin && 0 === V) try {
                        s.begin.call(h, h);
                    } catch (y) {
                        setTimeout(function() {
                            throw y;
                        }, 1);
                    }
                    if ("scroll" === A) {
                        var T, F, E, S = /^x$/i.test(s.axis) ? "Left" : "Top", C = parseFloat(s.offset) || 0;
                        s.container ? g.isWrapped(s.container) || g.isNode(s.container) ? (s.container = s.container[0] || s.container, 
                        T = s.container["scroll" + S], E = T + $(o).position()[S.toLowerCase()] + C) : s.container = null : (T = v.State.scrollAnchor[v.State["scrollProperty" + S]], 
                        F = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]], 
                        E = $(o).offset()[S.toLowerCase()] + C), l = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: T,
                                currentValue: T,
                                endValue: E,
                                unitType: "",
                                easing: s.easing,
                                scrollData: {
                                    container: s.container,
                                    direction: S,
                                    alternateValue: F
                                }
                            },
                            element: o
                        }, v.debug && console.log("tweensContainer (scroll): ", l.scroll, o);
                    } else if ("reverse" === A) {
                        if (!i(o).tweensContainer) return void $.dequeue(o, s.queue);
                        "none" === i(o).opts.display && (i(o).opts.display = "auto"), "hidden" === i(o).opts.visibility && (i(o).opts.visibility = "visible"), 
                        i(o).opts.loop = !1, i(o).opts.begin = null, i(o).opts.complete = null, P.easing || delete s.easing, 
                        P.duration || delete s.duration, s = $.extend({}, i(o).opts, s);
                        var j = $.extend(!0, {}, i(o).tweensContainer);
                        for (var H in j) if ("element" !== H) {
                            var N = j[H].startValue;
                            j[H].startValue = j[H].currentValue = j[H].endValue, j[H].endValue = N, g.isEmptyObject(P) || (j[H].easing = s.easing), 
                            v.debug && console.log("reverse tweensContainer (" + H + "): " + JSON.stringify(j[H]), o);
                        }
                        l = j;
                    } else if ("start" === A) {
                        var j;
                        i(o).tweensContainer && i(o).isAnimating === !0 && (j = i(o).tweensContainer), $.each(b, function(e, t) {
                            if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                                var r = f(t, !0), n = r[0], o = r[1], i = r[2];
                                if (x.RegEx.isHex.test(n)) {
                                    for (var s = [ "Red", "Green", "Blue" ], l = x.Values.hexToRgb(n), u = i ? x.Values.hexToRgb(i) : a, c = 0; c < s.length; c++) {
                                        var p = [ l[c] ];
                                        o && p.push(o), u !== a && p.push(u[c]), b[e + s[c]] = p;
                                    }
                                    delete b[e];
                                }
                            }
                        });
                        for (var O in b) {
                            var z = f(b[O]), q = z[0], M = z[1], I = z[2];
                            O = x.Names.camelCase(O);
                            var B = x.Hooks.getRoot(O), W = !1;
                            if (i(o).isSVG || x.Names.prefixCheck(B)[1] !== !1 || x.Normalizations.registered[B] !== a) {
                                (s.display !== a && null !== s.display && "none" !== s.display || s.visibility !== a && "hidden" !== s.visibility) && /opacity|filter/.test(O) && !I && 0 !== q && (I = 0), 
                                s._cacheValues && j && j[O] ? (I === a && (I = j[O].endValue + j[O].unitType), W = i(o).rootPropertyValueCache[B]) : x.Hooks.registered[O] ? I === a ? (W = x.getPropertyValue(o, B), 
                                I = x.getPropertyValue(o, O, W)) : W = x.Hooks.templates[B][1] : I === a && (I = x.getPropertyValue(o, O));
                                var G, D, X, Y = !1;
                                if (G = d(O, I), I = G[0], X = G[1], G = d(O, q), q = G[0].replace(/^([+-\/*])=/, function(e, t) {
                                    return Y = t, "";
                                }), D = G[1], I = parseFloat(I) || 0, q = parseFloat(q) || 0, "%" === D && (/^(fontSize|lineHeight)$/.test(O) ? (q /= 100, 
                                D = "em") : /^scale/.test(O) ? (q /= 100, D = "") : /(Red|Green|Blue)$/i.test(O) && (q = q / 100 * 255, 
                                D = "")), /[\/*]/.test(Y)) D = X; else if (X !== D && 0 !== I) if (0 === q) D = X; else {
                                    p = p || m();
                                    var Q = /margin|padding|left|right|width|text|word|letter/i.test(O) || /X$/.test(O) || "x" === O ? "x" : "y";
                                    switch (X) {
                                      case "%":
                                        I *= "x" === Q ? p.percentToPxWidth : p.percentToPxHeight;
                                        break;

                                      case "px":
                                        break;

                                      default:
                                        I *= p[X + "ToPx"];
                                    }
                                    switch (D) {
                                      case "%":
                                        I *= 1 / ("x" === Q ? p.percentToPxWidth : p.percentToPxHeight);
                                        break;

                                      case "px":
                                        break;

                                      default:
                                        I *= 1 / p[D + "ToPx"];
                                    }
                                }
                                switch (Y) {
                                  case "+":
                                    q = I + q;
                                    break;

                                  case "-":
                                    q = I - q;
                                    break;

                                  case "*":
                                    q = I * q;
                                    break;

                                  case "/":
                                    q = I / q;
                                }
                                l[O] = {
                                    rootPropertyValue: W,
                                    startValue: I,
                                    currentValue: I,
                                    endValue: q,
                                    unitType: D,
                                    easing: M
                                }, v.debug && console.log("tweensContainer (" + O + "): " + JSON.stringify(l[O]), o);
                            } else v.debug && console.log("Skipping [" + B + "] due to a lack of browser support.");
                        }
                        l.element = o;
                    }
                    l.element && (x.Values.addClass(o, "velocity-animating"), R.push(l), "" === s.queue && (i(o).tweensContainer = l, 
                    i(o).opts = s), i(o).isAnimating = !0, V === w - 1 ? (v.State.calls.length > 1e4 && (v.State.calls = n(v.State.calls)), 
                    v.State.calls.push([ R, h, s, null, k.resolver ]), v.State.isTicking === !1 && (v.State.isTicking = !0, 
                    c())) : V++);
                }
                var p, o = this, s = $.extend({}, v.defaults, P), l = {};
                switch (i(o) === a && v.init(o), parseFloat(s.delay) && s.queue !== !1 && $.queue(o, s.queue, function(e) {
                    v.velocityQueueEntryFlag = !0, i(o).delayTimer = {
                        setTimeout: setTimeout(e, parseFloat(s.delay)),
                        next: e
                    };
                }), s.duration.toString().toLowerCase()) {
                  case "fast":
                    s.duration = 200;
                    break;

                  case "normal":
                    s.duration = y;
                    break;

                  case "slow":
                    s.duration = 600;
                    break;

                  default:
                    s.duration = parseFloat(s.duration) || 1;
                }
                v.mock !== !1 && (v.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(v.mock) || 1, 
                s.delay *= parseFloat(v.mock) || 1)), s.easing = u(s.easing, s.duration), s.begin && !g.isFunction(s.begin) && (s.begin = null), 
                s.progress && !g.isFunction(s.progress) && (s.progress = null), s.complete && !g.isFunction(s.complete) && (s.complete = null), 
                s.display !== a && null !== s.display && (s.display = s.display.toString().toLowerCase(), 
                "auto" === s.display && (s.display = v.CSS.Values.getDisplayType(o))), s.visibility !== a && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), 
                s.mobileHA = s.mobileHA && v.State.isMobile && !v.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(e, s.delay) : e() : $.queue(o, s.queue, function(t, r) {
                    return r === !0 ? (k.promise && k.resolver(h), !0) : (v.velocityQueueEntryFlag = !0, 
                    void e(t));
                }), "" !== s.queue && "fx" !== s.queue || "inprogress" === $.queue(o)[0] || $.dequeue(o);
            }
            var f, d, m, h, b, P, l = arguments[0] && ($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties));
            if (g.isWrapped(this) ? (f = !1, m = 0, h = this, d = this) : (f = !0, m = 1, h = l ? arguments[0].elements : arguments[0]), 
            h = o(h)) {
                l ? (b = arguments[0].properties, P = arguments[0].options) : (b = arguments[m], 
                P = arguments[m + 1]);
                var w = h.length, V = 0;
                if ("stop" !== b && !$.isPlainObject(P)) {
                    var C = m + 1;
                    P = {};
                    for (var T = C; T < arguments.length; T++) g.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? g.isString(arguments[T]) || g.isArray(arguments[T]) ? P.easing = arguments[T] : g.isFunction(arguments[T]) && (P.complete = arguments[T]) : P.duration = arguments[T];
                }
                var k = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                f && v.Promise && (k.promise = new v.Promise(function(e, t) {
                    k.resolver = e, k.rejecter = t;
                }));
                var A;
                switch (b) {
                  case "scroll":
                    A = "scroll";
                    break;

                  case "reverse":
                    A = "reverse";
                    break;

                  case "stop":
                    $.each(h, function(e, t) {
                        i(t) && i(t).delayTimer && (clearTimeout(i(t).delayTimer.setTimeout), i(t).delayTimer.next && i(t).delayTimer.next(), 
                        delete i(t).delayTimer);
                    });
                    var F = [];
                    return $.each(v.State.calls, function(e, t) {
                        t && $.each(t[1], function(r, n) {
                            var o = g.isString(P) ? P : "";
                            return P !== a && t[2].queue !== o ? !0 : void $.each(h, function(t, r) {
                                r === n && (P !== a && ($.each($.queue(r, o), function(e, t) {
                                    g.isFunction(t) && t(null, !0);
                                }), $.queue(r, o, [])), i(r) && "" === o && $.each(i(r).tweensContainer, function(e, t) {
                                    t.endValue = t.currentValue;
                                }), F.push(e));
                            });
                        });
                    }), $.each(F, function(e, t) {
                        p(t, !0);
                    }), k.promise && k.resolver(h), e();

                  default:
                    if (!$.isPlainObject(b) || g.isEmptyObject(b)) {
                        if (g.isString(b) && v.Redirects[b]) {
                            var E = $.extend({}, P), j = E.duration, H = E.delay || 0;
                            return E.backwards === !0 && (h = $.extend(!0, [], h).reverse()), $.each(h, function(e, t) {
                                parseFloat(E.stagger) ? E.delay = H + parseFloat(E.stagger) * e : g.isFunction(E.stagger) && (E.delay = H + E.stagger.call(t, e, w)), 
                                E.drag && (E.duration = parseFloat(j) || (/^(callout|transition)/.test(b) ? 1e3 : y), 
                                E.duration = Math.max(E.duration * (E.backwards ? 1 - e / w : (e + 1) / w), .75 * E.duration, 200)), 
                                v.Redirects[b].call(t, t, E || {}, e, w, h, k.promise ? k : a);
                            }), e();
                        }
                        var N = "Velocity: First argument (" + b + ") was not a property map, a known action, or a registered redirect. Aborting.";
                        return k.promise ? k.rejecter(new Error(N)) : console.log(N), e();
                    }
                    A = "start";
                }
                var L = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null
                }, R = [];
                $.each(h, function(e, t) {
                    g.isNode(t) && s.call(t);
                });
                var O, E = $.extend({}, v.defaults, P);
                if (E.loop = parseInt(E.loop), O = 2 * E.loop - 1, E.loop) for (var z = 0; O > z; z++) {
                    var q = {
                        delay: E.delay,
                        progress: E.progress
                    };
                    z === O - 1 && (q.display = E.display, q.visibility = E.visibility, q.complete = E.complete), 
                    S(h, "reverse", q);
                }
                return e();
            }
        };
        v = $.extend(S, v), v.animate = S;
        var P = t.requestAnimationFrame || d;
        return v.State.isMobile || r.hidden === a || r.addEventListener("visibilitychange", function() {
            r.hidden ? (P = function(e) {
                return setTimeout(function() {
                    e(!0);
                }, 16);
            }, c()) : P = t.requestAnimationFrame || d;
        }), e.Velocity = v, e !== t && (e.fn.velocity = S, e.fn.velocity.defaults = v.defaults), 
        $.each([ "Down", "Up" ], function(e, t) {
            v.Redirects["slide" + t] = function(e, r, n, o, i, s) {
                var l = $.extend({}, r), u = l.begin, c = l.complete, p = {
                    height: "",
                    marginTop: "",
                    marginBottom: "",
                    paddingTop: "",
                    paddingBottom: ""
                }, f = {};
                l.display === a && (l.display = "Down" === t ? "inline" === v.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), 
                l.begin = function() {
                    u && u.call(i, i);
                    for (var r in p) {
                        f[r] = e.style[r];
                        var a = v.CSS.getPropertyValue(e, r);
                        p[r] = "Down" === t ? [ a, 0 ] : [ 0, a ];
                    }
                    f.overflow = e.style.overflow, e.style.overflow = "hidden";
                }, l.complete = function() {
                    for (var t in f) e.style[t] = f[t];
                    c && c.call(i, i), s && s.resolver(i);
                }, v(e, p, l);
            };
        }), $.each([ "In", "Out" ], function(e, t) {
            v.Redirects["fade" + t] = function(e, r, n, o, i, s) {
                var l = $.extend({}, r), u = {
                    opacity: "In" === t ? 1 : 0
                }, c = l.complete;
                l.complete = n !== o - 1 ? l.begin = null : function() {
                    c && c.call(i, i), s && s.resolver(i);
                }, l.display === a && (l.display = "In" === t ? "auto" : "none"), v(this, u, l);
            };
        }), v;
    }(window.jQuery || window.Zepto || window, window, document);
}), !function(a, b, c, d) {
    "use strict";
    function k(a, b, c) {
        return setTimeout(q(a, c), b);
    }
    function l(a, b, c) {
        return Array.isArray(a) ? (m(a, c[b], c), !0) : !1;
    }
    function m(a, b, c) {
        var e;
        if (a) if (a.forEach) a.forEach(b, c); else if (a.length !== d) for (e = 0; e < a.length; ) b.call(c, a[e], e, a), 
        e++; else for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a);
    }
    function n(a, b, c) {
        for (var e = Object.keys(b), f = 0; f < e.length; ) (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), 
        f++;
        return a;
    }
    function o(a, b) {
        return n(a, b, !0);
    }
    function p(a, b, c) {
        var e, d = b.prototype;
        e = a.prototype = Object.create(d), e.constructor = a, e._super = d, c && n(e, c);
    }
    function q(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    }
    function r(a, b) {
        return typeof a == g ? a.apply(b ? b[0] || d : d, b) : a;
    }
    function s(a, b) {
        return a === d ? b : a;
    }
    function t(a, b, c) {
        m(x(b), function(b) {
            a.addEventListener(b, c, !1);
        });
    }
    function u(a, b, c) {
        m(x(b), function(b) {
            a.removeEventListener(b, c, !1);
        });
    }
    function v(a, b) {
        for (;a; ) {
            if (a == b) return !0;
            a = a.parentNode;
        }
        return !1;
    }
    function w(a, b) {
        return a.indexOf(b) > -1;
    }
    function x(a) {
        return a.trim().split(/\s+/g);
    }
    function y(a, b, c) {
        if (a.indexOf && !c) return a.indexOf(b);
        for (var d = 0; d < a.length; ) {
            if (c && a[d][c] == b || !c && a[d] === b) return d;
            d++;
        }
        return -1;
    }
    function z(a) {
        return Array.prototype.slice.call(a, 0);
    }
    function A(a, b, c) {
        for (var d = [], e = [], f = 0; f < a.length; ) {
            var g = b ? a[f][b] : a[f];
            y(e, g) < 0 && d.push(a[f]), e[f] = g, f++;
        }
        return c && (d = b ? d.sort(function(a, c) {
            return a[b] > c[b];
        }) : d.sort()), d;
    }
    function B(a, b) {
        for (var c, f, g = b[0].toUpperCase() + b.slice(1), h = 0; h < e.length; ) {
            if (c = e[h], f = c ? c + g : b, f in a) return f;
            h++;
        }
        return d;
    }
    function D() {
        return C++;
    }
    function E(a) {
        var b = a.ownerDocument;
        return b.defaultView || b.parentWindow;
    }
    function ab(a, b) {
        var c = this;
        this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, 
        this.domHandler = function(b) {
            r(a.options.enable, [ a ]) && c.handler(b);
        }, this.init();
    }
    function bb(a) {
        var b, c = a.options.inputClass;
        return new (b = c ? c : H ? wb : I ? Eb : G ? Gb : rb)(a, cb);
    }
    function cb(a, b, c) {
        var d = c.pointers.length, e = c.changedPointers.length, f = b & O && 0 === d - e, g = b & (Q | R) && 0 === d - e;
        c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, db(a, c), 
        a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c;
    }
    function db(a, b) {
        var c = a.session, d = b.pointers, e = d.length;
        c.firstInput || (c.firstInput = gb(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = gb(b) : 1 === e && (c.firstMultiple = !1);
        var f = c.firstInput, g = c.firstMultiple, h = g ? g.center : f.center, i = b.center = hb(d);
        b.timeStamp = j(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = lb(h, i), 
        b.distance = kb(h, i), eb(c, b), b.offsetDirection = jb(b.deltaX, b.deltaY), b.scale = g ? nb(g.pointers, d) : 1, 
        b.rotation = g ? mb(g.pointers, d) : 0, fb(c, b);
        var k = a.element;
        v(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k;
    }
    function eb(a, b) {
        var c = b.center, d = a.offsetDelta || {}, e = a.prevDelta || {}, f = a.prevInput || {};
        (b.eventType === O || f.eventType === Q) && (e = a.prevDelta = {
            x: f.deltaX || 0,
            y: f.deltaY || 0
        }, d = a.offsetDelta = {
            x: c.x,
            y: c.y
        }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y);
    }
    function fb(a, b) {
        var f, g, h, j, c = a.lastInterval || b, e = b.timeStamp - c.timeStamp;
        if (b.eventType != R && (e > N || c.velocity === d)) {
            var k = c.deltaX - b.deltaX, l = c.deltaY - b.deltaY, m = ib(e, k, l);
            g = m.x, h = m.y, f = i(m.x) > i(m.y) ? m.x : m.y, j = jb(k, l), a.lastInterval = b;
        } else f = c.velocity, g = c.velocityX, h = c.velocityY, j = c.direction;
        b.velocity = f, b.velocityX = g, b.velocityY = h, b.direction = j;
    }
    function gb(a) {
        for (var b = [], c = 0; c < a.pointers.length; ) b[c] = {
            clientX: h(a.pointers[c].clientX),
            clientY: h(a.pointers[c].clientY)
        }, c++;
        return {
            timeStamp: j(),
            pointers: b,
            center: hb(b),
            deltaX: a.deltaX,
            deltaY: a.deltaY
        };
    }
    function hb(a) {
        var b = a.length;
        if (1 === b) return {
            x: h(a[0].clientX),
            y: h(a[0].clientY)
        };
        for (var c = 0, d = 0, e = 0; b > e; ) c += a[e].clientX, d += a[e].clientY, e++;
        return {
            x: h(c / b),
            y: h(d / b)
        };
    }
    function ib(a, b, c) {
        return {
            x: b / a || 0,
            y: c / a || 0
        };
    }
    function jb(a, b) {
        return a === b ? S : i(a) >= i(b) ? a > 0 ? T : U : b > 0 ? V : W;
    }
    function kb(a, b, c) {
        c || (c = $);
        var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]];
        return Math.sqrt(d * d + e * e);
    }
    function lb(a, b, c) {
        c || (c = $);
        var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]];
        return 180 * Math.atan2(e, d) / Math.PI;
    }
    function mb(a, b) {
        return lb(b[1], b[0], _) - lb(a[1], a[0], _);
    }
    function nb(a, b) {
        return kb(b[0], b[1], _) / kb(a[0], a[1], _);
    }
    function rb() {
        this.evEl = pb, this.evWin = qb, this.allow = !0, this.pressed = !1, ab.apply(this, arguments);
    }
    function wb() {
        this.evEl = ub, this.evWin = vb, ab.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
    }
    function Ab() {
        this.evTarget = yb, this.evWin = zb, this.started = !1, ab.apply(this, arguments);
    }
    function Bb(a, b) {
        var c = z(a.touches), d = z(a.changedTouches);
        return b & (Q | R) && (c = A(c.concat(d), "identifier", !0)), [ c, d ];
    }
    function Eb() {
        this.evTarget = Db, this.targetIds = {}, ab.apply(this, arguments);
    }
    function Fb(a, b) {
        var c = z(a.touches), d = this.targetIds;
        if (b & (O | P) && 1 === c.length) return d[c[0].identifier] = !0, [ c, c ];
        var e, f, g = z(a.changedTouches), h = [], i = this.target;
        if (f = c.filter(function(a) {
            return v(a.target, i);
        }), b === O) for (e = 0; e < f.length; ) d[f[e].identifier] = !0, e++;
        for (e = 0; e < g.length; ) d[g[e].identifier] && h.push(g[e]), b & (Q | R) && delete d[g[e].identifier], 
        e++;
        return h.length ? [ A(f.concat(h), "identifier", !0), h ] : void 0;
    }
    function Gb() {
        ab.apply(this, arguments);
        var a = q(this.handler, this);
        this.touch = new Eb(this.manager, a), this.mouse = new rb(this.manager, a);
    }
    function Pb(a, b) {
        this.manager = a, this.set(b);
    }
    function Qb(a) {
        if (w(a, Mb)) return Mb;
        var b = w(a, Nb), c = w(a, Ob);
        return b && c ? Nb + " " + Ob : b || c ? b ? Nb : Ob : w(a, Lb) ? Lb : Kb;
    }
    function Yb(a) {
        this.id = D(), this.manager = null, this.options = o(a || {}, this.defaults), this.options.enable = s(this.options.enable, !0), 
        this.state = Rb, this.simultaneous = {}, this.requireFail = [];
    }
    function Zb(a) {
        return a & Wb ? "cancel" : a & Ub ? "end" : a & Tb ? "move" : a & Sb ? "start" : "";
    }
    function $b(a) {
        return a == W ? "down" : a == V ? "up" : a == T ? "left" : a == U ? "right" : "";
    }
    function _b(a, b) {
        var c = b.manager;
        return c ? c.get(a) : a;
    }
    function ac() {
        Yb.apply(this, arguments);
    }
    function bc() {
        ac.apply(this, arguments), this.pX = null, this.pY = null;
    }
    function cc() {
        ac.apply(this, arguments);
    }
    function dc() {
        Yb.apply(this, arguments), this._timer = null, this._input = null;
    }
    function ec() {
        ac.apply(this, arguments);
    }
    function fc() {
        ac.apply(this, arguments);
    }
    function gc() {
        Yb.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, 
        this._input = null, this.count = 0;
    }
    function hc(a, b) {
        return b = b || {}, b.recognizers = s(b.recognizers, hc.defaults.preset), new kc(a, b);
    }
    function kc(a, b) {
        b = b || {}, this.options = o(b, hc.defaults), this.options.inputTarget = this.options.inputTarget || a, 
        this.handlers = {}, this.session = {}, this.recognizers = [], this.element = a, 
        this.input = bb(this), this.touchAction = new Pb(this, this.options.touchAction), 
        lc(this, !0), m(b.recognizers, function(a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
        }, this);
    }
    function lc(a, b) {
        var c = a.element;
        m(a.options.cssProps, function(a, d) {
            c.style[B(c.style, d)] = b ? a : "";
        });
    }
    function mc(a, c) {
        var d = b.createEvent("Event");
        d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d);
    }
    var e = [ "", "webkit", "moz", "MS", "ms", "o" ], f = b.createElement("div"), g = "function", h = Math.round, i = Math.abs, j = Date.now, C = 1, F = /mobile|tablet|ip(ad|hone|od)|android/i, G = "ontouchstart" in a, H = B(a, "PointerEvent") !== d, I = G && F.test(navigator.userAgent), J = "touch", K = "pen", L = "mouse", M = "kinect", N = 25, O = 1, P = 2, Q = 4, R = 8, S = 1, T = 2, U = 4, V = 8, W = 16, X = T | U, Y = V | W, Z = X | Y, $ = [ "x", "y" ], _ = [ "clientX", "clientY" ];
    ab.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && t(this.element, this.evEl, this.domHandler), this.evTarget && t(this.target, this.evTarget, this.domHandler), 
            this.evWin && t(E(this.element), this.evWin, this.domHandler);
        },
        destroy: function() {
            this.evEl && u(this.element, this.evEl, this.domHandler), this.evTarget && u(this.target, this.evTarget, this.domHandler), 
            this.evWin && u(E(this.element), this.evWin, this.domHandler);
        }
    };
    var ob = {
        mousedown: O,
        mousemove: P,
        mouseup: Q
    }, pb = "mousedown", qb = "mousemove mouseup";
    p(rb, ab, {
        handler: function(a) {
            var b = ob[a.type];
            b & O && 0 === a.button && (this.pressed = !0), b & P && 1 !== a.which && (b = Q), 
            this.pressed && this.allow && (b & Q && (this.pressed = !1), this.callback(this.manager, b, {
                pointers: [ a ],
                changedPointers: [ a ],
                pointerType: L,
                srcEvent: a
            }));
        }
    });
    var sb = {
        pointerdown: O,
        pointermove: P,
        pointerup: Q,
        pointercancel: R,
        pointerout: R
    }, tb = {
        2: J,
        3: K,
        4: L,
        5: M
    }, ub = "pointerdown", vb = "pointermove pointerup pointercancel";
    a.MSPointerEvent && (ub = "MSPointerDown", vb = "MSPointerMove MSPointerUp MSPointerCancel"), 
    p(wb, ab, {
        handler: function(a) {
            var b = this.store, c = !1, d = a.type.toLowerCase().replace("ms", ""), e = sb[d], f = tb[a.pointerType] || a.pointerType, g = f == J, h = y(b, a.pointerId, "pointerId");
            e & O && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Q | R) && (c = !0), 
            0 > h || (b[h] = a, this.callback(this.manager, e, {
                pointers: b,
                changedPointers: [ a ],
                pointerType: f,
                srcEvent: a
            }), c && b.splice(h, 1));
        }
    });
    var xb = {
        touchstart: O,
        touchmove: P,
        touchend: Q,
        touchcancel: R
    }, yb = "touchstart", zb = "touchstart touchmove touchend touchcancel";
    p(Ab, ab, {
        handler: function(a) {
            var b = xb[a.type];
            if (b === O && (this.started = !0), this.started) {
                var c = Bb.call(this, a, b);
                b & (Q | R) && 0 === c[0].length - c[1].length && (this.started = !1), this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: J,
                    srcEvent: a
                });
            }
        }
    });
    var Cb = {
        touchstart: O,
        touchmove: P,
        touchend: Q,
        touchcancel: R
    }, Db = "touchstart touchmove touchend touchcancel";
    p(Eb, ab, {
        handler: function(a) {
            var b = Cb[a.type], c = Fb.call(this, a, b);
            c && this.callback(this.manager, b, {
                pointers: c[0],
                changedPointers: c[1],
                pointerType: J,
                srcEvent: a
            });
        }
    }), p(Gb, ab, {
        handler: function(a, b, c) {
            var d = c.pointerType == J, e = c.pointerType == L;
            if (d) this.mouse.allow = !1; else if (e && !this.mouse.allow) return;
            b & (Q | R) && (this.mouse.allow = !0), this.callback(a, b, c);
        },
        destroy: function() {
            this.touch.destroy(), this.mouse.destroy();
        }
    });
    var Hb = B(f.style, "touchAction"), Ib = Hb !== d, Jb = "compute", Kb = "auto", Lb = "manipulation", Mb = "none", Nb = "pan-x", Ob = "pan-y";
    Pb.prototype = {
        set: function(a) {
            a == Jb && (a = this.compute()), Ib && (this.manager.element.style[Hb] = a), this.actions = a.toLowerCase().trim();
        },
        update: function() {
            this.set(this.manager.options.touchAction);
        },
        compute: function() {
            var a = [];
            return m(this.manager.recognizers, function(b) {
                r(b.options.enable, [ b ]) && (a = a.concat(b.getTouchAction()));
            }), Qb(a.join(" "));
        },
        preventDefaults: function(a) {
            if (!Ib) {
                var b = a.srcEvent, c = a.offsetDirection;
                if (this.manager.session.prevented) return void b.preventDefault();
                var d = this.actions, e = w(d, Mb), f = w(d, Ob), g = w(d, Nb);
                return e || f && c & X || g && c & Y ? this.preventSrc(b) : void 0;
            }
        },
        preventSrc: function(a) {
            this.manager.session.prevented = !0, a.preventDefault();
        }
    };
    var Rb = 1, Sb = 2, Tb = 4, Ub = 8, Vb = Ub, Wb = 16, Xb = 32;
    Yb.prototype = {
        defaults: {},
        set: function(a) {
            return n(this.options, a), this.manager && this.manager.touchAction.update(), this;
        },
        recognizeWith: function(a) {
            if (l(a, "recognizeWith", this)) return this;
            var b = this.simultaneous;
            return a = _b(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this;
        },
        dropRecognizeWith: function(a) {
            return l(a, "dropRecognizeWith", this) ? this : (a = _b(a, this), delete this.simultaneous[a.id], 
            this);
        },
        requireFailure: function(a) {
            if (l(a, "requireFailure", this)) return this;
            var b = this.requireFail;
            return a = _b(a, this), -1 === y(b, a) && (b.push(a), a.requireFailure(this)), this;
        },
        dropRequireFailure: function(a) {
            if (l(a, "dropRequireFailure", this)) return this;
            a = _b(a, this);
            var b = y(this.requireFail, a);
            return b > -1 && this.requireFail.splice(b, 1), this;
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0;
        },
        canRecognizeWith: function(a) {
            return !!this.simultaneous[a.id];
        },
        emit: function(a) {
            function d(d) {
                b.manager.emit(b.options.event + (d ? Zb(c) : ""), a);
            }
            var b = this, c = this.state;
            Ub > c && d(!0), d(), c >= Ub && d(!0);
        },
        tryEmit: function(a) {
            return this.canEmit() ? this.emit(a) : void (this.state = Xb);
        },
        canEmit: function() {
            for (var a = 0; a < this.requireFail.length; ) {
                if (!(this.requireFail[a].state & (Xb | Rb))) return !1;
                a++;
            }
            return !0;
        },
        recognize: function(a) {
            var b = n({}, a);
            return r(this.options.enable, [ this, b ]) ? (this.state & (Vb | Wb | Xb) && (this.state = Rb), 
            this.state = this.process(b), void (this.state & (Sb | Tb | Ub | Wb) && this.tryEmit(b))) : (this.reset(), 
            void (this.state = Xb));
        },
        process: function() {},
        getTouchAction: function() {},
        reset: function() {}
    }, p(ac, Yb, {
        defaults: {
            pointers: 1
        },
        attrTest: function(a) {
            var b = this.options.pointers;
            return 0 === b || a.pointers.length === b;
        },
        process: function(a) {
            var b = this.state, c = a.eventType, d = b & (Sb | Tb), e = this.attrTest(a);
            return d && (c & R || !e) ? b | Wb : d || e ? c & Q ? b | Ub : b & Sb ? b | Tb : Sb : Xb;
        }
    }), p(bc, ac, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Z
        },
        getTouchAction: function() {
            var a = this.options.direction, b = [];
            return a & X && b.push(Ob), a & Y && b.push(Nb), b;
        },
        directionTest: function(a) {
            var b = this.options, c = !0, d = a.distance, e = a.direction, f = a.deltaX, g = a.deltaY;
            return e & b.direction || (b.direction & X ? (e = 0 === f ? S : 0 > f ? T : U, c = f != this.pX, 
            d = Math.abs(a.deltaX)) : (e = 0 === g ? S : 0 > g ? V : W, c = g != this.pY, d = Math.abs(a.deltaY))), 
            a.direction = e, c && d > b.threshold && e & b.direction;
        },
        attrTest: function(a) {
            return ac.prototype.attrTest.call(this, a) && (this.state & Sb || !(this.state & Sb) && this.directionTest(a));
        },
        emit: function(a) {
            this.pX = a.deltaX, this.pY = a.deltaY;
            var b = $b(a.direction);
            b && this.manager.emit(this.options.event + b, a), this._super.emit.call(this, a);
        }
    }), p(cc, ac, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [ Mb ];
        },
        attrTest: function(a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & Sb);
        },
        emit: function(a) {
            if (this._super.emit.call(this, a), 1 !== a.scale) {
                var b = a.scale < 1 ? "in" : "out";
                this.manager.emit(this.options.event + b, a);
            }
        }
    }), p(dc, Yb, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 500,
            threshold: 5
        },
        getTouchAction: function() {
            return [ Kb ];
        },
        process: function(a) {
            var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold, e = a.deltaTime > b.time;
            if (this._input = a, !d || !c || a.eventType & (Q | R) && !e) this.reset(); else if (a.eventType & O) this.reset(), 
            this._timer = k(function() {
                this.state = Vb, this.tryEmit();
            }, b.time, this); else if (a.eventType & Q) return Vb;
            return Xb;
        },
        reset: function() {
            clearTimeout(this._timer);
        },
        emit: function(a) {
            this.state === Vb && (a && a.eventType & Q ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = j(), 
            this.manager.emit(this.options.event, this._input)));
        }
    }), p(ec, ac, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [ Mb ];
        },
        attrTest: function(a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & Sb);
        }
    }), p(fc, ac, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .65,
            direction: X | Y,
            pointers: 1
        },
        getTouchAction: function() {
            return bc.prototype.getTouchAction.call(this);
        },
        attrTest: function(a) {
            var c, b = this.options.direction;
            return b & (X | Y) ? c = a.velocity : b & X ? c = a.velocityX : b & Y && (c = a.velocityY), 
            this._super.attrTest.call(this, a) && b & a.direction && a.distance > this.options.threshold && i(c) > this.options.velocity && a.eventType & Q;
        },
        emit: function(a) {
            var b = $b(a.direction);
            b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a);
        }
    }), p(gc, Yb, {
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
            return [ Lb ];
        },
        process: function(a) {
            var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold, e = a.deltaTime < b.time;
            if (this.reset(), a.eventType & O && 0 === this.count) return this.failTimeout();
            if (d && e && c) {
                if (a.eventType != Q) return this.failTimeout();
                var f = this.pTime ? a.timeStamp - this.pTime < b.interval : !0, g = !this.pCenter || kb(this.pCenter, a.center) < b.posThreshold;
                this.pTime = a.timeStamp, this.pCenter = a.center, g && f ? this.count += 1 : this.count = 1, 
                this._input = a;
                var h = this.count % b.taps;
                if (0 === h) return this.hasRequireFailures() ? (this._timer = k(function() {
                    this.state = Vb, this.tryEmit();
                }, b.interval, this), Sb) : Vb;
            }
            return Xb;
        },
        failTimeout: function() {
            return this._timer = k(function() {
                this.state = Xb;
            }, this.options.interval, this), Xb;
        },
        reset: function() {
            clearTimeout(this._timer);
        },
        emit: function() {
            this.state == Vb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
        }
    }), hc.VERSION = "2.0.4", hc.defaults = {
        domEvents: !1,
        touchAction: Jb,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [ [ ec, {
            enable: !1
        } ], [ cc, {
            enable: !1
        }, [ "rotate" ] ], [ fc, {
            direction: X
        } ], [ bc, {
            direction: X
        }, [ "swipe" ] ], [ gc ], [ gc, {
            event: "doubletap",
            taps: 2
        }, [ "tap" ] ], [ dc ] ],
        cssProps: {
            userSelect: "default",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var ic = 1, jc = 2;
    kc.prototype = {
        set: function(a) {
            return n(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), 
            this.input.target = a.inputTarget, this.input.init()), this;
        },
        stop: function(a) {
            this.session.stopped = a ? jc : ic;
        },
        recognize: function(a) {
            var b = this.session;
            if (!b.stopped) {
                this.touchAction.preventDefaults(a);
                var c, d = this.recognizers, e = b.curRecognizer;
                (!e || e && e.state & Vb) && (e = b.curRecognizer = null);
                for (var f = 0; f < d.length; ) c = d[f], b.stopped === jc || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), 
                !e && c.state & (Sb | Tb | Ub) && (e = b.curRecognizer = c), f++;
            }
        },
        get: function(a) {
            if (a instanceof Yb) return a;
            for (var b = this.recognizers, c = 0; c < b.length; c++) if (b[c].options.event == a) return b[c];
            return null;
        },
        add: function(a) {
            if (l(a, "add", this)) return this;
            var b = this.get(a.options.event);
            return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), 
            a;
        },
        remove: function(a) {
            if (l(a, "remove", this)) return this;
            var b = this.recognizers;
            return a = this.get(a), b.splice(y(b, a), 1), this.touchAction.update(), this;
        },
        on: function(a, b) {
            var c = this.handlers;
            return m(x(a), function(a) {
                c[a] = c[a] || [], c[a].push(b);
            }), this;
        },
        off: function(a, b) {
            var c = this.handlers;
            return m(x(a), function(a) {
                b ? c[a].splice(y(c[a], b), 1) : delete c[a];
            }), this;
        },
        emit: function(a, b) {
            this.options.domEvents && mc(a, b);
            var c = this.handlers[a] && this.handlers[a].slice();
            if (c && c.length) {
                b.type = a, b.preventDefault = function() {
                    b.srcEvent.preventDefault();
                };
                for (var d = 0; d < c.length; ) c[d](b), d++;
            }
        },
        destroy: function() {
            this.element && lc(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), 
            this.element = null;
        }
    }, n(hc, {
        INPUT_START: O,
        INPUT_MOVE: P,
        INPUT_END: Q,
        INPUT_CANCEL: R,
        STATE_POSSIBLE: Rb,
        STATE_BEGAN: Sb,
        STATE_CHANGED: Tb,
        STATE_ENDED: Ub,
        STATE_RECOGNIZED: Vb,
        STATE_CANCELLED: Wb,
        STATE_FAILED: Xb,
        DIRECTION_NONE: S,
        DIRECTION_LEFT: T,
        DIRECTION_RIGHT: U,
        DIRECTION_UP: V,
        DIRECTION_DOWN: W,
        DIRECTION_HORIZONTAL: X,
        DIRECTION_VERTICAL: Y,
        DIRECTION_ALL: Z,
        Manager: kc,
        Input: ab,
        TouchAction: Pb,
        TouchInput: Eb,
        MouseInput: rb,
        PointerEventInput: wb,
        TouchMouseInput: Gb,
        SingleTouchInput: Ab,
        Recognizer: Yb,
        AttrRecognizer: ac,
        Tap: gc,
        Pan: bc,
        Swipe: fc,
        Pinch: cc,
        Rotate: ec,
        Press: dc,
        on: t,
        off: u,
        each: m,
        merge: o,
        extend: n,
        inherit: p,
        bindFn: q,
        prefixed: B
    }), typeof define == g && define.amd ? define(function() {
        return hc;
    }) : "undefined" != typeof module && module.exports ? module.exports = hc : a[c] = hc;
}(window, document, "Hammer"), function(factory) {
    "function" == typeof define && define.amd ? define([ "jquery", "hammerjs" ], factory) : "object" == typeof exports ? factory(require("jquery"), require("hammerjs")) : factory(jQuery, Hammer);
}(function($, Hammer) {
    function hammerify(el, options) {
        var $el = $(el);
        $el.data("hammer") || $el.data("hammer", new Hammer($el[0], options));
    }
    $.fn.hammer = function(options) {
        return this.each(function() {
            hammerify(this, options);
        });
    }, Hammer.Manager.prototype.emit = function(originalEmit) {
        return function(type, data) {
            originalEmit.call(this, type, data), $(this.element).trigger({
                type: type,
                gesture: data
            });
        };
    }(Hammer.Manager.prototype.emit);
}), function($) {
    $.fn.collapsible = function(options) {
        var defaults = {
            accordion: void 0
        };
        return options = $.extend(defaults, options), this.each(function() {
            function accordionOpen(object) {
                $panel_headers = $this.find(".collapsible-header"), object.parent().toggleClass("active"), 
                object.parent().hasClass("active") ? object.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1
                }) : object.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1
                }), $panel_headers.not(object).parent().removeClass("active"), $panel_headers.not(object).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1
                });
            }
            function collapsibleOpen(object) {
                object.parent().toggleClass("active"), object.parent().hasClass("active") ? object.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1
                }) : object.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1
                });
            }
            var $this = $(this), $panel_headers = $(this).find(".collapsible-header"), collapsible_type = $this.data("collapsible");
            $this.off("click.collapse", ".collapsible-header"), $panel_headers.off("click.collapse"), 
            options.accordion || "accordion" == collapsible_type || void 0 == collapsible_type ? ($this.on("click.collapse", ".collapsible-header", function(e) {
                accordionOpen($(e.currentTarget));
            }), accordionOpen($panel_headers.filter(".active").first())) : $panel_headers.each(function() {
                $(this).on("click.collapse", function(e) {
                    collapsibleOpen($(e.currentTarget));
                }), $(this).hasClass("active") && collapsibleOpen($(this));
            });
        });
    }, $(document).ready(function() {
        $(".collapsible").collapsible();
    });
}(jQuery), function($) {
    $.fn.scrollTo = function(elem) {
        return $(this).scrollTop($(this).scrollTop() - $(this).offset().top + $(elem).offset().top), 
        this;
    }, $.fn.dropdown = function(options) {
        var defaults = {
            inDuration: 300,
            outDuration: 225,
            constrain_width: !0,
            hover: !0,
            alignment: "left",
            gutter: 0,
            belowOrigin: !1
        };
        options = $.extend(defaults, options), this.each(function() {
            function updateOptions() {
                void 0 != origin.data("inDuration") && (options.inDuration = origin.data("inDuration")), 
                void 0 != origin.data("outDuration") && (options.outDuration = origin.data("outDuration")), 
                void 0 != origin.data("constrainwidth") && (options.constrain_width = origin.data("constrainwidth")), 
                void 0 != origin.data("hover") && (options.hover = origin.data("hover")), void 0 != origin.data("alignment") && (options.alignment = origin.data("alignment")), 
                void 0 != origin.data("gutter") && (options.gutter = origin.data("gutter")), void 0 != origin.data("beloworigin") && (options.belowOrigin = origin.data("beloworigin"));
            }
            function placeDropdown() {
                updateOptions(), 1 == options.constrain_width && activates.css("width", origin.outerWidth());
                var offset = 0;
                1 == options.belowOrigin && (offset = origin.height());
                var width_difference = 0, gutter_spacing = options.gutter;
                "right" == options.alignment && (width_difference = origin.innerWidth() - activates.innerWidth(), 
                gutter_spacing = -1 * gutter_spacing), activates.css(elementOrParentIsFixed(origin[0]) ? {
                    display: "block",
                    position: "fixed",
                    height: 0,
                    top: origin.offset().top - $(window).scrollTop() + offset,
                    left: origin.offset().left + width_difference + gutter_spacing
                } : {
                    display: "block",
                    top: origin.offset().top + offset,
                    left: origin.offset().left + width_difference + gutter_spacing,
                    height: 0
                }), activates.velocity({
                    opacity: 1
                }, {
                    duration: options.inDuration,
                    queue: !1,
                    easing: "easeOutQuad"
                }).velocity({
                    height: dropdownRealHeight
                }, {
                    duration: options.inDuration,
                    queue: !1,
                    easing: "easeOutCubic",
                    complete: function() {
                        activates.css("overflow-y", "auto");
                    }
                });
            }
            function elementOrParentIsFixed(element) {
                var $element = $(element), $checkElements = $element.add($element.parents()), isFixed = !1;
                return $checkElements.each(function() {
                    return "fixed" === $(this).css("position") ? (isFixed = !0, !1) : void 0;
                }), isFixed;
            }
            function hideDropdown() {
                activates.velocity({
                    opacity: 0
                }, {
                    duration: options.outDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        activates.css({
                            display: "none",
                            "overflow-y": ""
                        });
                    }
                });
            }
            var origin = $(this), activates = $("#" + origin.attr("data-activates"));
            updateOptions(), activates.parent().is($("body")) || (activates.detach(), $("body").append(activates));
            var dropdownRealHeight = activates.height();
            if (options.hover) origin.on("mouseover", function() {
                placeDropdown();
            }), activates.on("mouseleave", function() {
                hideDropdown();
            }); else {
                origin.click(function(e) {
                    e.preventDefault(), e.stopPropagation(), placeDropdown(), $(document).bind("click." + activates.attr("id"), function(e) {
                        activates.is(e.target) || origin.is(e.target) || (hideDropdown(), $(document).unbind("click." + activates.attr("id")));
                    });
                });
            }
            origin.on("open", placeDropdown), origin.on("close", hideDropdown), $(document).on("resize", function() {});
        });
    };
}(jQuery), function($) {
    $.fn.extend({
        openModal: function(options) {
            var modal = this, overlay = $('<div id="lean-overlay"></div>');
            $("body").append(overlay);
            var defaults = {
                opacity: .5,
                in_duration: 300,
                out_duration: 200,
                ready: void 0,
                complete: void 0,
                dismissible: !0
            };
            options = $.extend(defaults, options), options.dismissible && ($("#lean-overlay").click(function() {
                $(modal).closeModal(options);
            }), $(document).keyup(function(e) {
                27 === e.keyCode && ($(modal).closeModal(options), $(this).off());
            })), $(modal).find(".modal-close").click(function(e) {
                e.preventDefault(), $(modal).closeModal(options);
            }), $("#lean-overlay").css({
                display: "block",
                opacity: 0
            }), $(modal).css({
                display: "block",
                top: "4%",
                opacity: 0
            }), $("#lean-overlay").velocity({
                opacity: options.opacity
            }, {
                duration: options.in_duration,
                queue: !1,
                ease: "easeOutCubic"
            }), $(modal).velocity({
                top: "10%",
                opacity: 1
            }, {
                duration: options.in_duration,
                queue: !1,
                ease: "easeOutCubic",
                complete: function() {
                    "function" == typeof options.ready && options.ready();
                }
            });
        }
    }), $.fn.extend({
        closeModal: function(options) {
            var defaults = {
                out_duration: 200,
                complete: void 0
            }, options = $.extend(defaults, options);
            $("#lean-overlay").velocity({
                opacity: 0
            }, {
                duration: options.out_duration,
                queue: !1,
                ease: "easeOutQuart"
            }), $(this).fadeOut(options.out_duration, function() {
                $(this).css({
                    top: 0
                }), $("#lean-overlay").css({
                    display: "none"
                }), "function" == typeof options.complete && options.complete(), $("#lean-overlay").remove();
            });
        }
    }), $.fn.extend({
        leanModal: function(options) {
            return this.each(function() {
                $(this).click(function(e) {
                    var modal_id = $(this).attr("href");
                    $(modal_id).openModal(options), e.preventDefault();
                });
            });
        }
    });
}(jQuery), function($) {
    $.fn.materialbox = function() {
        return this.each(function() {
            function returnToOriginal() {
                doneAnimating = !1;
                var placeholder = origin.parent(".material-placeholder"), originalWidth = (window.innerWidth, 
                window.innerHeight, origin.data("width")), originalHeight = origin.data("height");
                $("#materialbox-overlay").fadeOut(outDuration, function() {
                    overlayActive = !1, $(this).remove();
                }), origin.velocity({
                    width: originalWidth,
                    height: originalHeight,
                    left: 0,
                    top: 0
                }, {
                    duration: outDuration,
                    queue: !1,
                    easing: "easeOutQuad"
                }), $(".materialbox-caption").velocity({
                    opacity: 0
                }, {
                    duration: outDuration + 200,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function() {
                        placeholder.css({
                            height: "",
                            width: "",
                            position: "",
                            top: "",
                            left: ""
                        }), origin.css({
                            height: "",
                            position: "",
                            top: "",
                            left: "",
                            width: "",
                            "max-width": "",
                            position: "",
                            "z-index": ""
                        }), origin.removeClass("active"), doneAnimating = !0, $(this).remove();
                    }
                });
            }
            if (!$(this).hasClass("intialized")) {
                $(this).addClass("intialized");
                var overlayActive = !1, doneAnimating = !0, inDuration = 275, outDuration = 200, origin = $(this), placeholder = $("<div></div>").addClass("material-placeholder");
                origin.wrap(placeholder), origin.on("click", function() {
                    var placeholder = origin.parent(".material-placeholder"), windowWidth = window.innerWidth, windowHeight = window.innerHeight, originalWidth = origin.width(), originalHeight = origin.height();
                    if (doneAnimating === !1) return !1;
                    if (overlayActive && doneAnimating === !0) return returnToOriginal(), !1;
                    doneAnimating = !1, origin.addClass("active"), overlayActive = !0, placeholder.css({
                        width: placeholder[0].getBoundingClientRect().width,
                        height: placeholder[0].getBoundingClientRect().height,
                        position: "relative",
                        top: 0,
                        left: 0
                    }), origin.css({
                        position: "absolute",
                        "z-index": 1e3
                    }).data("width", originalWidth).data("height", originalHeight);
                    var overlay = $('<div id="materialbox-overlay"></div>').css({
                        opacity: 0
                    }).click(function() {
                        doneAnimating === !0 && returnToOriginal();
                    });
                    if ($("body").append(overlay), overlay.velocity({
                        opacity: 1
                    }, {
                        duration: inDuration,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), "" !== origin.data("caption")) {
                        var $photo_caption = $('<div class="materialbox-caption"></div>');
                        $photo_caption.text(origin.data("caption")), $("body").append($photo_caption), $photo_caption.css({
                            display: "inline"
                        }), $photo_caption.velocity({
                            opacity: 1
                        }, {
                            duration: inDuration,
                            queue: !1,
                            easing: "easeOutQuad"
                        });
                    }
                    var ratio = 0, widthPercent = originalWidth / windowWidth, heightPercent = originalHeight / windowHeight, newWidth = 0, newHeight = 0;
                    widthPercent > heightPercent ? (ratio = originalHeight / originalWidth, newWidth = .9 * windowWidth, 
                    newHeight = .9 * windowWidth * ratio) : (ratio = originalWidth / originalHeight, 
                    newWidth = .9 * windowHeight * ratio, newHeight = .9 * windowHeight), origin.hasClass("responsive-img") ? origin.velocity({
                        "max-width": newWidth,
                        width: originalWidth
                    }, {
                        duration: 0,
                        queue: !1,
                        complete: function() {
                            origin.css({
                                left: 0,
                                top: 0
                            }).velocity({
                                height: newHeight,
                                width: newWidth,
                                left: $(document).scrollLeft() + windowWidth / 2 - origin.parent(".material-placeholder").offset().left - newWidth / 2,
                                top: $(document).scrollTop() + windowHeight / 2 - origin.parent(".material-placeholder").offset().top - newHeight / 2
                            }, {
                                duration: inDuration,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    doneAnimating = !0;
                                }
                            });
                        }
                    }) : origin.css("left", 0).css("top", 0).velocity({
                        height: newHeight,
                        width: newWidth,
                        left: $(document).scrollLeft() + windowWidth / 2 - origin.parent(".material-placeholder").offset().left - newWidth / 2,
                        top: $(document).scrollTop() + windowHeight / 2 - origin.parent(".material-placeholder").offset().top - newHeight / 2
                    }, {
                        duration: inDuration,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            doneAnimating = !0;
                        }
                    });
                }), $(window).scroll(function() {
                    overlayActive && returnToOriginal();
                }), $(document).keyup(function(e) {
                    27 === e.keyCode && doneAnimating === !0 && overlayActive && returnToOriginal();
                });
            }
        });
    }, $(document).ready(function() {
        $(".materialboxed").materialbox();
    });
}(jQuery), function($) {
    $.fn.parallax = function() {
        var window_width = $(window).width();
        return this.each(function() {
            var $this = $(this);
            $this.addClass("parallax");
            var updateParallax = function() {
                var container_height;
                container_height = 992 > window_width ? $this.height() > 0 ? $this.height() : $this.children("img").height() : $this.height() > 0 ? $this.height() : 500;
                var img_height = $this.children("img").height(), parallax_dist = img_height - container_height, bottom = $this.offset().top + container_height, top = $this.offset().top, scrollTop = $(window).scrollTop(), windowHeight = window.innerHeight, windowBottom = scrollTop + windowHeight, percentScrolled = (windowBottom - top) / (container_height + windowHeight), parallax = -1 * parallax_dist * percentScrolled;
                bottom > scrollTop && scrollTop + windowHeight > top && $this.children("img").first().css({
                    webkitTransform: "translateY( " + -parallax + "px)",
                    MozTransform: "translateY(" + -parallax + "px)",
                    msTransform: "translateY(" + -parallax + "px)",
                    OTransform: "translateY(" + -parallax + "px)",
                    transform: "translateY(" + -parallax + "px)"
                });
            };
            $this.children("img").load(function() {
                updateParallax();
            }), $(window).scroll(function() {
                window_width = $(window).width(), window.requestAnimationFrame(updateParallax);
            }), $(window).resize(function() {
                window_width = $(window).width(), window.requestAnimationFrame(updateParallax);
            });
        });
    };
}(jQuery), function($) {
    var methods = {
        init: function() {
            return this.each(function() {
                {
                    var $this = $(this);
                    $(window).width();
                }
                $this.width("100%");
                var $num_tabs = $(this).children("li").length;
                $this.children("li").each(function() {
                    $(this).width(100 / $num_tabs + "%");
                });
                var $active, $content, $links = $this.find("li.tab a"), $tabs_width = $this.width(), $tab_width = $this.find("li").first().outerWidth(), $index = 0;
                $active = $($links.filter('[href="' + location.hash + '"]')), 0 === $active.length && ($active = $(this).find("li.tab a.active").first()), 
                0 === $active.length && ($active = $(this).find("li.tab a").first()), $active.addClass("active"), 
                $index = $links.index($active), 0 > $index && ($index = 0), $content = $($active[0].hash), 
                $this.append('<div class="indicator"></div>');
                var $indicator = $this.find(".indicator");
                $this.is(":visible") && ($indicator.css({
                    right: $tabs_width - ($index + 1) * $tab_width
                }), $indicator.css({
                    left: $index * $tab_width
                })), $(window).resize(function() {
                    $tabs_width = $this.width(), $tab_width = $this.find("li").first().outerWidth(), 
                    0 > $index && ($index = 0), 0 !== $tab_width && 0 !== $tabs_width && ($indicator.css({
                        right: $tabs_width - ($index + 1) * $tab_width
                    }), $indicator.css({
                        left: $index * $tab_width
                    }));
                }), $links.not($active).each(function() {
                    $(this.hash).hide();
                }), $this.on("click", "a", function(e) {
                    $tabs_width = $this.width(), $tab_width = $this.find("li").first().outerWidth(), 
                    $active.removeClass("active"), $content.hide(), $active = $(this), $content = $(this.hash), 
                    $links = $this.find("li.tab a"), $active.addClass("active");
                    var $prev_index = $index;
                    $index = $links.index($(this)), 0 > $index && ($index = 0), $content.show(), $index - $prev_index >= 0 ? ($indicator.velocity({
                        right: $tabs_width - ($index + 1) * $tab_width
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), $indicator.velocity({
                        left: $index * $tab_width
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        delay: 90
                    })) : ($indicator.velocity({
                        left: $index * $tab_width
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), $indicator.velocity({
                        right: $tabs_width - ($index + 1) * $tab_width
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        delay: 90
                    })), e.preventDefault();
                });
            });
        },
        select_tab: function(id) {
            this.find('a[href="#' + id + '"]').trigger("click");
        }
    };
    $.fn.tabs = function(methodOrOptions) {
        return methods[methodOrOptions] ? methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof methodOrOptions && methodOrOptions ? void $.error("Method " + methodOrOptions + " does not exist on jQuery.tooltip") : methods.init.apply(this, arguments);
    }, $(document).ready(function() {
        $("ul.tabs").tabs();
    });
}(jQuery), function($) {
    $.fn.tooltip = function(options) {
        var counter = null, started = !1, counterInterval = null, margin = 5, defaults = {
            delay: 350
        };
        return options = $.extend(defaults, options), $(".material-tooltip").remove(), this.each(function() {
            var origin = $(this), tooltip_text = $("<span></span>").text(origin.attr("data-tooltip")), newTooltip = $("<div></div>");
            newTooltip.addClass("material-tooltip").append(tooltip_text), newTooltip.appendTo($("body"));
            var backdrop = $("<div></div>").addClass("backdrop");
            backdrop.appendTo(newTooltip), backdrop.css({
                top: 0,
                left: 0
            }), $(this).off("mouseenter mouseleave"), $(this).on({
                mouseenter: function(e) {
                    e.stopPropagation();
                    var tooltip_delay = origin.data("delay");
                    tooltip_delay = void 0 == tooltip_delay || "" == tooltip_delay ? options.delay : tooltip_delay, 
                    counter = 0, counterInterval = setInterval(function() {
                        if (counter += 10, counter >= tooltip_delay && 0 == started) {
                            started = !0, newTooltip.css({
                                display: "block",
                                left: "0px",
                                top: "0px"
                            }), newTooltip.children("span").text(origin.attr("data-tooltip"));
                            var originWidth = origin.outerWidth(), originHeight = origin.outerHeight(), tooltipPosition = origin.attr("data-position"), tooltipHeight = newTooltip.outerHeight(), tooltipWidth = newTooltip.outerWidth(), tooltipVerticalMovement = "0px", tooltipHorizontalMovement = "0px", scale_factor = 8;
                            "top" === tooltipPosition ? (newTooltip.css({
                                top: origin.offset().top - tooltipHeight - margin,
                                left: origin.offset().left + originWidth / 2 - tooltipWidth / 2
                            }), tooltipVerticalMovement = "-10px", backdrop.css({
                                borderRadius: "14px 14px 0 0",
                                transformOrigin: "50% 90%",
                                marginTop: tooltipHeight,
                                marginLeft: tooltipWidth / 2 - backdrop.width() / 2
                            })) : "left" === tooltipPosition ? (newTooltip.css({
                                top: origin.offset().top + originHeight / 2 - tooltipHeight / 2,
                                left: origin.offset().left - tooltipWidth - margin
                            }), tooltipHorizontalMovement = "-10px", backdrop.css({
                                width: "14px",
                                height: "14px",
                                borderRadius: "14px 0 0 14px",
                                transformOrigin: "95% 50%",
                                marginTop: tooltipHeight / 2,
                                marginLeft: tooltipWidth
                            })) : "right" === tooltipPosition ? (newTooltip.css({
                                top: origin.offset().top + originHeight / 2 - tooltipHeight / 2,
                                left: origin.offset().left + originWidth + margin
                            }), tooltipHorizontalMovement = "+10px", backdrop.css({
                                width: "14px",
                                height: "14px",
                                borderRadius: "0 14px 14px 0",
                                transformOrigin: "5% 50%",
                                marginTop: tooltipHeight / 2,
                                marginLeft: "0px"
                            })) : (newTooltip.css({
                                top: origin.offset().top + origin.outerHeight() + margin,
                                left: origin.offset().left + originWidth / 2 - tooltipWidth / 2
                            }), tooltipVerticalMovement = "+10px", backdrop.css({
                                marginLeft: tooltipWidth / 2 - backdrop.width() / 2
                            })), scale_factor = tooltipWidth / 8, 8 > scale_factor && (scale_factor = 8), ("right" === tooltipPosition || "left" === tooltipPosition) && (scale_factor = tooltipWidth / 10, 
                            6 > scale_factor && (scale_factor = 6)), newTooltip.velocity({
                                opacity: 1,
                                marginTop: tooltipVerticalMovement,
                                marginLeft: tooltipHorizontalMovement
                            }, {
                                duration: 350,
                                queue: !1
                            }), backdrop.css({
                                display: "block"
                            }).velocity({
                                opacity: 1
                            }, {
                                duration: 55,
                                delay: 0,
                                queue: !1
                            }).velocity({
                                scale: scale_factor
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
                    clearInterval(counterInterval), counter = 0, newTooltip.velocity({
                        opacity: 0,
                        marginTop: 0,
                        marginLeft: 0
                    }, {
                        duration: 225,
                        queue: !1,
                        delay: 275
                    }), backdrop.velocity({
                        opacity: 0,
                        scale: 1
                    }, {
                        duration: 225,
                        delay: 275,
                        queue: !1,
                        complete: function() {
                            backdrop.css("display", "none"), newTooltip.css("display", "none"), started = !1;
                        }
                    });
                }
            });
        });
    }, $(document).ready(function() {
        $(".tooltipped").tooltip();
    });
}(jQuery), function(window) {
    "use strict";
    function isWindow(obj) {
        return null !== obj && obj === obj.window;
    }
    function getWindow(elem) {
        return isWindow(elem) ? elem : 9 === elem.nodeType && elem.defaultView;
    }
    function offset(elem) {
        var docElem, win, box = {
            top: 0,
            left: 0
        }, doc = elem && elem.ownerDocument;
        return docElem = doc.documentElement, "undefined" != typeof elem.getBoundingClientRect && (box = elem.getBoundingClientRect()), 
        win = getWindow(doc), {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    }
    function convertStyle(obj) {
        var style = "";
        for (var a in obj) obj.hasOwnProperty(a) && (style += a + ":" + obj[a] + ";");
        return style;
    }
    function getWavesEffectElement(e) {
        if (TouchHandler.allowEvent(e) === !1) return null;
        for (var element = null, target = e.target || e.srcElement; null !== target.parentElement; ) {
            if (-1 !== target.className.indexOf("waves-effect")) {
                element = target;
                break;
            }
            target = target.parentElement;
        }
        return element;
    }
    function showEffect(e) {
        var element = getWavesEffectElement(e);
        null !== element && (Effect.show(e, element), "ontouchstart" in window && (element.addEventListener("touchend", Effect.hide, !1), 
        element.addEventListener("touchcancel", Effect.hide, !1)), element.addEventListener("mouseup", Effect.hide, !1), 
        element.addEventListener("mouseleave", Effect.hide, !1));
    }
    var Waves = Waves || {}, $$ = document.querySelectorAll.bind(document), Effect = {
        duration: 750,
        show: function(e, element) {
            if (2 === e.button) return !1;
            var el = element || this, ripple = document.createElement("div");
            ripple.className = "waves-ripple", el.appendChild(ripple);
            var pos = offset(el), relativeY = e.pageY - pos.top, relativeX = e.pageX - pos.left, scale = "scale(" + el.clientWidth / 100 * 10 + ")";
            "touches" in e && (relativeY = e.touches[0].pageY - pos.top, relativeX = e.touches[0].pageX - pos.left), 
            ripple.setAttribute("data-hold", Date.now()), ripple.setAttribute("data-scale", scale), 
            ripple.setAttribute("data-x", relativeX), ripple.setAttribute("data-y", relativeY);
            var rippleStyle = {
                top: relativeY + "px",
                left: relativeX + "px"
            };
            ripple.className = ripple.className + " waves-notransition", ripple.setAttribute("style", convertStyle(rippleStyle)), 
            ripple.className = ripple.className.replace("waves-notransition", ""), rippleStyle["-webkit-transform"] = scale, 
            rippleStyle["-moz-transform"] = scale, rippleStyle["-ms-transform"] = scale, rippleStyle["-o-transform"] = scale, 
            rippleStyle.transform = scale, rippleStyle.opacity = "1", rippleStyle["-webkit-transition-duration"] = Effect.duration + "ms", 
            rippleStyle["-moz-transition-duration"] = Effect.duration + "ms", rippleStyle["-o-transition-duration"] = Effect.duration + "ms", 
            rippleStyle["transition-duration"] = Effect.duration + "ms", rippleStyle["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", 
            rippleStyle["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", 
            rippleStyle["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", 
            rippleStyle["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", 
            ripple.setAttribute("style", convertStyle(rippleStyle));
        },
        hide: function(e) {
            TouchHandler.touchup(e);
            var el = this, ripple = (1.4 * el.clientWidth, null), ripples = el.getElementsByClassName("waves-ripple");
            if (!(ripples.length > 0)) return !1;
            ripple = ripples[ripples.length - 1];
            var relativeX = ripple.getAttribute("data-x"), relativeY = ripple.getAttribute("data-y"), scale = ripple.getAttribute("data-scale"), diff = Date.now() - Number(ripple.getAttribute("data-hold")), delay = 350 - diff;
            0 > delay && (delay = 0), setTimeout(function() {
                var style = {
                    top: relativeY + "px",
                    left: relativeX + "px",
                    opacity: "0",
                    "-webkit-transition-duration": Effect.duration + "ms",
                    "-moz-transition-duration": Effect.duration + "ms",
                    "-o-transition-duration": Effect.duration + "ms",
                    "transition-duration": Effect.duration + "ms",
                    "-webkit-transform": scale,
                    "-moz-transform": scale,
                    "-ms-transform": scale,
                    "-o-transform": scale,
                    transform: scale
                };
                ripple.setAttribute("style", convertStyle(style)), setTimeout(function() {
                    try {
                        el.removeChild(ripple);
                    } catch (e) {
                        return !1;
                    }
                }, Effect.duration);
            }, delay);
        },
        wrapInput: function(elements) {
            for (var a = 0; a < elements.length; a++) {
                var el = elements[a];
                if ("input" === el.tagName.toLowerCase()) {
                    var parent = el.parentNode;
                    if ("i" === parent.tagName.toLowerCase() && -1 !== parent.className.indexOf("waves-effect")) continue;
                    var wrapper = document.createElement("i");
                    wrapper.className = el.className + " waves-input-wrapper";
                    var elementStyle = el.getAttribute("style");
                    elementStyle || (elementStyle = ""), wrapper.setAttribute("style", elementStyle), 
                    el.className = "waves-button-input", el.removeAttribute("style"), parent.replaceChild(wrapper, el), 
                    wrapper.appendChild(el);
                }
            }
        }
    }, TouchHandler = {
        touches: 0,
        allowEvent: function(e) {
            var allow = !0;
            return "touchstart" === e.type ? TouchHandler.touches += 1 : "touchend" === e.type || "touchcancel" === e.type ? setTimeout(function() {
                TouchHandler.touches > 0 && (TouchHandler.touches -= 1);
            }, 500) : "mousedown" === e.type && TouchHandler.touches > 0 && (allow = !1), allow;
        },
        touchup: function(e) {
            TouchHandler.allowEvent(e);
        }
    };
    Waves.displayEffect = function(options) {
        options = options || {}, "duration" in options && (Effect.duration = options.duration), 
        Effect.wrapInput($$(".waves-effect")), "ontouchstart" in window && document.body.addEventListener("touchstart", showEffect, !1), 
        document.body.addEventListener("mousedown", showEffect, !1);
    }, Waves.attach = function(element) {
        "input" === element.tagName.toLowerCase() && (Effect.wrapInput([ element ]), element = element.parentElement), 
        "ontouchstart" in window && element.addEventListener("touchstart", showEffect, !1), 
        element.addEventListener("mousedown", showEffect, !1);
    }, window.Waves = Waves, document.addEventListener("DOMContentLoaded", function() {
        Waves.displayEffect();
    }, !1);
}(window), function($) {
    var methods = {
        init: function(options) {
            var defaults = {
                menuWidth: 240,
                edge: "left",
                closeOnClick: !1
            };
            options = $.extend(defaults, options), $(this).each(function() {
                function removeMenu() {
                    panning = !1, menuOut = !1, $("#sidenav-overlay").velocity({
                        opacity: 0
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            $(this).remove();
                        }
                    }), "left" === options.edge ? ($(".drag-target").css({
                        width: "",
                        right: "",
                        left: "0"
                    }), menu_id.velocity({
                        left: -1 * (options.menuWidth + 10)
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic"
                    })) : ($(".drag-target").css({
                        width: "",
                        right: "0",
                        left: ""
                    }), menu_id.velocity({
                        right: -1 * (options.menuWidth + 10)
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic"
                    }));
                }
                var $this = $(this), menu_id = $("#" + $this.attr("data-activates"));
                240 != options.menuWidth && (menu_id.css("width", options.menuWidth), menu_id.hasClass("fixed") || menu_id.css("left", -1 * (options.menuWidth + 10))), 
                "left" != options.edge && menu_id.addClass("right-aligned"), $("body").append($('<div class="drag-target"></div>')), 
                $(".drag-target").css("left" === options.edge ? {
                    left: 0
                } : {
                    right: 0
                }), menu_id.hasClass("fixed") && $(window).resize(function() {
                    $(window).width() > 1200 && menu_id.attr("style") && (menu_id.removeAttr("style"), 
                    menu_id.css("width", options.menuWidth)), 0 != $("#sidenav-overlay").css("opacity") && menuOut && $("#sidenav-overlay").trigger("click");
                }), 1 == options.closeOnClick && menu_id.on("click.itemclick", "a:not(.collapsible-header)", function() {
                    removeMenu();
                });
                var panning = !1, menuOut = !1;
                $(".drag-target").hammer({
                    prevent_default: !1
                }).bind("tap", function() {
                    $("#sidenav-overlay").trigger("click");
                }).bind("pan", function(e) {
                    if ("touch" === e.gesture.pointerType) {
                        {
                            var x = (e.gesture.direction, e.gesture.center.x);
                            e.gesture.center.y, e.gesture.velocityX;
                        }
                        if (!$("#sidenav-overlay").length) {
                            var overlay = $('<div id="sidenav-overlay"></div>');
                            overlay.css("opacity", 0).click(function() {
                                removeMenu();
                            }), $("body").append(overlay);
                        }
                        if ("left" === options.edge ? x > options.menuWidth ? x = options.menuWidth : 0 > x && (x = 0) : x < $(window).width() - options.menuWidth && (x = $(window).width() - options.menuWidth), 
                        "left" === options.edge ? x < options.menuWidth / 2 ? menuOut = !1 : x >= options.menuWidth / 2 && (menuOut = !0) : x < $(window).width() - options.menuWidth / 2 ? menuOut = !0 : x >= $(window).width() - options.menuWidth / 2 && (menuOut = !1), 
                        "left" === options.edge ? menu_id.css("left", x - options.menuWidth) : menu_id.css("right", -1 * (x - options.menuWidth / 2)), 
                        "left" === options.edge) {
                            var overlayPerc = x / options.menuWidth;
                            $("#sidenav-overlay").velocity({
                                opacity: overlayPerc
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            });
                        } else {
                            var overlayPerc = Math.abs((x - $(window).width()) / options.menuWidth);
                            $("#sidenav-overlay").velocity({
                                opacity: overlayPerc
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            });
                        }
                    }
                }).bind("panend", function(e) {
                    if ("touch" === e.gesture.pointerType) {
                        var velocityX = e.gesture.velocityX;
                        panning = !1, "left" === options.edge ? menuOut || -.5 > velocityX ? (menu_id.velocity({
                            left: 0
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), $("#sidenav-overlay").velocity({
                            opacity: 1
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), $(".drag-target").css({
                            width: "50%",
                            right: 0,
                            left: ""
                        })) : (!menuOut || velocityX > .3) && (menu_id.velocity({
                            left: -240
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), $("#sidenav-overlay").velocity({
                            opacity: 0
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                $(this).remove();
                            }
                        }), $(".drag-target").css({
                            width: "10%",
                            right: "",
                            left: 0
                        })) : menuOut || velocityX > .5 ? (menu_id.velocity({
                            right: 0
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), $("#sidenav-overlay").velocity({
                            opacity: 1
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), $(".drag-target").css({
                            width: "50%",
                            right: "",
                            left: 0
                        })) : (!menuOut || -.3 > velocityX) && (menu_id.velocity({
                            right: -240
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), $("#sidenav-overlay").velocity({
                            opacity: 0
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                $(this).remove();
                            }
                        }), $(".drag-target").css({
                            width: "10%",
                            right: 0,
                            left: ""
                        }));
                    }
                }), $this.click(function() {
                    if (menu_id.hasClass("active")) menuOut = !1, panning = !1, removeMenu(); else {
                        "left" === options.edge ? ($(".drag-target").css({
                            width: "50%",
                            right: 0,
                            left: ""
                        }), menu_id.velocity({
                            left: 0
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })) : ($(".drag-target").css({
                            width: "50%",
                            right: "",
                            left: 0
                        }), menu_id.velocity({
                            right: 0
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }));
                        var overlay = $('<div id="sidenav-overlay"></div>');
                        overlay.css("opacity", 0).click(function() {
                            menuOut = !1, panning = !1, removeMenu(), overlay.animate({
                                opacity: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    $(this).remove();
                                }
                            });
                        }), $("body").append(overlay), overlay.animate({
                            opacity: 1
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                menuOut = !0, panning = !1;
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
            $("#sidenav-overlay").trigger("click");
        }
    };
    $.fn.sideNav = function(methodOrOptions) {
        return methods[methodOrOptions] ? methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof methodOrOptions && methodOrOptions ? void $.error("Method " + methodOrOptions + " does not exist on jQuery.tooltip") : methods.init.apply(this, arguments);
    };
}(jQuery), function($) {
    function findElements(top, right, bottom, left) {
        var hits = $();
        return $.each(elements, function(i, element) {
            if (element.height() > 0) {
                var elTop = element.offset().top, elLeft = element.offset().left, elRight = elLeft + element.width(), elBottom = elTop + element.height(), isIntersect = !(elLeft > right || left > elRight || elTop > bottom || top > elBottom);
                isIntersect && hits.push(element);
            }
        }), hits;
    }
    function onScroll() {
        ++ticks;
        var top = jWindow.scrollTop(), left = jWindow.scrollLeft(), right = left + jWindow.width(), bottom = top + jWindow.height(), intersections = findElements(top + offset.top + 200, right + offset.right, bottom + offset.bottom, left + offset.left);
        $.each(intersections, function(i, element) {
            var lastTick = element.data("scrollSpy:ticks");
            "number" != typeof lastTick && element.triggerHandler("scrollSpy:enter"), element.data("scrollSpy:ticks", ticks);
        }), $.each(elementsInView, function(i, element) {
            var lastTick = element.data("scrollSpy:ticks");
            "number" == typeof lastTick && lastTick !== ticks && (element.triggerHandler("scrollSpy:exit"), 
            element.data("scrollSpy:ticks", null));
        }), elementsInView = intersections;
    }
    function onWinSize() {
        jWindow.trigger("scrollSpy:winSize");
    }
    function throttle(func, wait, options) {
        var context, args, result, timeout = null, previous = 0;
        options || (options = {});
        var later = function() {
            previous = options.leading === !1 ? 0 : getTime(), timeout = null, result = func.apply(context, args), 
            context = args = null;
        };
        return function() {
            var now = getTime();
            previous || options.leading !== !1 || (previous = now);
            var remaining = wait - (now - previous);
            return context = this, args = arguments, 0 >= remaining ? (clearTimeout(timeout), 
            timeout = null, previous = now, result = func.apply(context, args), context = args = null) : timeout || options.trailing === !1 || (timeout = setTimeout(later, remaining)), 
            result;
        };
    }
    var jWindow = $(window), elements = [], elementsInView = [], isSpying = !1, ticks = 0, offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }, getTime = Date.now || function() {
        return new Date().getTime();
    };
    $.scrollSpy = function(selector, options) {
        var visible = [];
        selector = $(selector), selector.each(function(i, element) {
            elements.push($(element)), $(element).data("scrollSpy:id", i), $("a[href=#" + $(element).attr("id") + "]").click(function(e) {
                e.preventDefault();
                var offset = $(this.hash).offset().top + 1;
                $(".tabs-wrapper").length ? $("html, body").animate({
                    scrollTop: offset - 60
                }, {
                    duration: 400,
                    easing: "easeOutCubic"
                }) : $("html, body").animate({
                    scrollTop: offset
                }, {
                    duration: 400,
                    easing: "easeOutCubic"
                });
            });
        }), options = options || {
            throttle: 100
        }, offset.top = options.offsetTop || 0, offset.right = options.offsetRight || 0, 
        offset.bottom = options.offsetBottom || 0, offset.left = options.offsetLeft || 0;
        var throttledScroll = throttle(onScroll, options.throttle || 100), readyScroll = function() {
            $(document).ready(throttledScroll);
        };
        return isSpying || (jWindow.on("scroll", readyScroll), jWindow.on("resize", readyScroll), 
        isSpying = !0), setTimeout(readyScroll, 0), selector.on("scrollSpy:enter", function() {
            visible = $.grep(visible, function(value) {
                return 0 != value.height();
            });
            var $this = $(this);
            visible[0] ? ($("a[href=#" + visible[0].attr("id") + "]").removeClass("active"), 
            $this.data("scrollSpy:id") < visible[0].data("scrollSpy:id") ? visible.unshift($(this)) : visible.push($(this))) : visible.push($(this)), 
            $("a[href=#" + visible[0].attr("id") + "]").addClass("active");
        }), selector.on("scrollSpy:exit", function() {
            if (visible = $.grep(visible, function(value) {
                return 0 != value.height();
            }), visible[0]) {
                $("a[href=#" + visible[0].attr("id") + "]").removeClass("active");
                var $this = $(this);
                visible = $.grep(visible, function(value) {
                    return value.attr("id") != $this.attr("id");
                }), visible[0] && $("a[href=#" + visible[0].attr("id") + "]").addClass("active");
            }
        }), selector;
    }, $.winSizeSpy = function(options) {
        return $.winSizeSpy = function() {
            return jWindow;
        }, options = options || {
            throttle: 100
        }, jWindow.on("resize", throttle(onWinSize, options.throttle || 100));
    }, $.fn.scrollSpy = function(options) {
        return $.scrollSpy($(this), options);
    };
}(jQuery), function($) {
    $(document).ready(function() {
        var input_selector = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
        if ($(document).on("change", input_selector, function() {
            0 !== $(this).val().length && $(this).siblings("label, i").addClass("active"), validate_field($(this));
        }), $(document).ready(function() {
            $(input_selector).each(function(index, element) {
                $(element).val().length > 0 && $(this).siblings("label, i").addClass("active");
            });
        }), $(document).on("reset", function(e) {
            $(e.target).is("form") && ($(this).find(input_selector).removeClass("valid").removeClass("invalid"), 
            $(this).find("select.initialized").each(function() {
                var reset_text = $(this).find("option[selected]").text();
                $(this).siblings("input.select-dropdown").val(reset_text);
            }));
        }), $(document).on("focus", input_selector, function() {
            $(this).siblings("label, i").addClass("active");
        }), $(document).on("blur", input_selector, function() {
            0 === $(this).val().length && $(this).siblings("label, i").removeClass("active"), 
            validate_field($(this));
        }), validate_field = function(object) {
            0 === object.val().length ? object.hasClass("validate") && (object.removeClass("valid"), 
            object.removeClass("invalid")) : object.hasClass("validate") && (object.is(":valid") ? (object.removeClass("invalid"), 
            object.addClass("valid")) : (object.removeClass("valid"), object.addClass("invalid")));
        }, 0 === $(".hiddendiv").length) {
            var hiddenDiv = $('<div class="hiddendiv common"></div>'), content = null;
            $("body").append(hiddenDiv);
        }
        var text_area_selector = ".materialize-textarea";
        $(".hiddendiv").css("width", $(text_area_selector).width()), $(text_area_selector).each(function() {
            $(this).val().length && (content = $(this).val(), content = content.replace(/\n/g, "<br>"), 
            hiddenDiv.html(content + "<br>"), $(this).css("height", hiddenDiv.height()));
        }), $("body").on("keyup keydown", text_area_selector, function() {
            content = $(this).val(), content = content.replace(/\n/g, "<br>"), hiddenDiv.html(content + "<br>"), 
            $(this).css("height", hiddenDiv.height());
        }), $(".file-field").each(function() {
            var path_input = $(this).find("input.file-path");
            $(this).find('input[type="file"]').change(function() {
                path_input.val($(this).val()), path_input.trigger("change");
            });
        });
        var range_type = "input[type=range]", range_mousedown = !1;
        $(range_type).each(function() {
            var thumb = $('<span class="thumb"><span class="value"></span></span>');
            $(this).after(thumb);
        });
        var range_wrapper = ".range-field";
        $(document).on("mousedown", range_wrapper, function(e) {
            var thumb = $(this).children(".thumb");
            thumb.length <= 0 && (thumb = $('<span class="thumb"><span class="value"></span></span>'), 
            $(this).append(thumb)), range_mousedown = !0, $(this).addClass("active"), thumb.hasClass("active") || thumb.velocity({
                height: "30px",
                width: "30px",
                top: "-20px",
                marginLeft: "-15px"
            }, {
                duration: 300,
                easing: "easeOutExpo"
            });
            var left = e.pageX - $(this).offset().left, width = $(this).outerWidth();
            0 > left ? left = 0 : left > width && (left = width), thumb.addClass("active").css("left", left), 
            thumb.find(".value").html($(this).children("input[type=range]").val());
        }), $(document).on("mouseup", range_wrapper, function() {
            range_mousedown = !1, $(this).removeClass("active");
        }), $(document).on("mousemove", range_wrapper, function(e) {
            var thumb = $(this).children(".thumb");
            if (range_mousedown) {
                thumb.hasClass("active") || thumb.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                });
                var left = e.pageX - $(this).offset().left, width = $(this).outerWidth();
                0 > left ? left = 0 : left > width && (left = width), thumb.addClass("active").css("left", left), 
                thumb.find(".value").html($(this).children("input[type=range]").val());
            }
        }), $(document).on("mouseout", range_wrapper, function() {
            if (!range_mousedown) {
                var thumb = $(this).children(".thumb");
                thumb.hasClass("active") && thumb.velocity({
                    height: "0",
                    width: "0",
                    top: "10px",
                    marginLeft: "-6px"
                }, {
                    duration: 100
                }), thumb.removeClass("active");
            }
        }), $.fn.material_select = function(callback) {
            $(this).each(function() {
                if ($select = $(this), !$select.hasClass("browser-default") && !$select.hasClass("initialized")) {
                    var uniqueID = guid(), wrapper = $('<div class="select-wrapper"></div>'), options = $('<ul id="select-options-' + uniqueID + '" class="dropdown-content select-dropdown"></ul>'), selectOptions = $select.children("option");
                    if (void 0 !== $select.find("option:selected")) var label = $select.find("option:selected"); else var label = options.first();
                    selectOptions.each(function() {
                        options.append($('<li class="' + ($(this).is(":disabled") ? "disabled" : "") + '"><span>' + $(this).html() + "</span></li>"));
                    }), options.find("li").each(function(i) {
                        var $curr_select = $select;
                        $(this).click(function() {
                            $(this).hasClass("disabled") || ($curr_select.find("option").eq(i).prop("selected", !0), 
                            $curr_select.trigger("change"), $curr_select.siblings("input.select-dropdown").val($(this).text()), 
                            "undefined" != typeof callback && callback());
                        });
                    }), $select.wrap(wrapper);
                    var $newSelect = $('<input type="text" class="select-dropdown" readonly="true" ' + ($select.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + uniqueID + '" value="' + label.html() + '"/><i class="mdi-navigation-arrow-drop-down">');
                    $select.before($newSelect), $("body").append(options), $select.is(":disabled") || $newSelect.dropdown({
                        hover: !1
                    }), $select.addClass("initialized"), $newSelect.on("focus", function() {
                        $(this).trigger("open"), label = $(this).val(), selectedOption = options.find("li").filter(function() {
                            return $(this).text().toLowerCase() === label.toLowerCase();
                        })[0], activateOption(options, selectedOption);
                    }), $newSelect.on("blur", function() {
                        $(this).trigger("close");
                    }), activateOption = function(collection, newOption) {
                        collection.find("li.active").removeClass("active"), $(newOption).addClass("active"), 
                        collection.scrollTo(newOption);
                    }, filterQuery = [], onKeyDown = function(event) {
                        return 9 == event.which ? void $newSelect.trigger("close") : 40 != event.which || options.is(":visible") ? void ((13 != event.which || options.is(":visible")) && (event.preventDefault(), 
                        letter = String.fromCharCode(event.which).toLowerCase(), letter && (filterQuery.push(letter), 
                        string = filterQuery.join(""), newOption = options.find("li").filter(function() {
                            return 0 === $(this).text().toLowerCase().indexOf(string);
                        })[0], newOption && activateOption(options, newOption)), 13 == event.which && (activeOption = options.find("li.active:not(.disabled)")[0], 
                        activeOption && ($(activeOption).trigger("click"), $newSelect.trigger("close"))), 
                        40 == event.which && (newOption = options.find("li.active").next("li:not(.disabled)")[0], 
                        newOption && activateOption(options, newOption)), 27 == event.which && $newSelect.trigger("close"), 
                        38 == event.which && (newOption = options.find("li.active").prev("li:not(.disabled)")[0], 
                        newOption && activateOption(options, newOption)), setTimeout(function() {
                            filterQuery = [];
                        }, 1e3))) : void $newSelect.trigger("open");
                    }, $newSelect.on("keydown", onKeyDown);
                }
            });
        };
        var guid = function() {
            function s4() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
            }
            return function() {
                return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
            };
        }();
    });
}(jQuery), function($) {
    $.fn.slider = function(options) {
        var defaults = {
            indicators: !0,
            height: 400,
            transition: 500,
            interval: 6e4
        };
        return options = $.extend(defaults, options), this.each(function() {
            function captionTransition(caption, duration) {
                caption.hasClass("center-align") ? caption.velocity({
                    opacity: 0,
                    translateY: -100
                }, {
                    duration: duration,
                    queue: !1
                }) : caption.hasClass("right-align") ? caption.velocity({
                    opacity: 0,
                    translateX: 100
                }, {
                    duration: duration,
                    queue: !1
                }) : caption.hasClass("left-align") && caption.velocity({
                    opacity: 0,
                    translateX: -100
                }, {
                    duration: duration,
                    queue: !1
                });
            }
            function moveToSlide(index) {
                console.log("Move to slide"), index >= $slides.length ? index = 0 : 0 > index && (index = $slides.length - 1), 
                $active_index = $slider.find(".active").index(), $active_index != index && ($active = $slides.eq($active_index), 
                $caption = $active.find(".caption"), $active.removeClass("active"), $active.velocity({
                    opacity: 0
                }, {
                    duration: options.transition,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function() {
                        $slides.not(".active").velocity({
                            opacity: 0,
                            translateX: 0,
                            translateY: 0
                        }, {
                            duration: 0,
                            queue: !1
                        });
                    }
                }), captionTransition($caption, options.transition), options.indicators && $indicators.eq($active_index).removeClass("active"), 
                $slides.eq(index).velocity({
                    opacity: 1
                }, {
                    duration: options.transition,
                    queue: !1,
                    easing: "easeOutQuad"
                }), $slides.eq(index).find(".caption").velocity({
                    opacity: 1,
                    translateX: 0,
                    translateY: 0
                }, {
                    duration: options.transition,
                    delay: options.transition,
                    queue: !1,
                    easing: "easeOutQuad"
                }), $slides.eq(index).addClass("active"), options.indicators && $indicators.eq(index).addClass("active"));
            }
            var $active, $this = $(this), $slider = $this.find("ul.slides").first(), $slides = $slider.find("li"), $active_index = $slider.find(".active").index();
            if (-1 != $active_index && ($active = $slides.eq($active_index)), 400 != options.height && ($this.height(options.height + 40), 
            $slider.height(options.height)), $slides.find(".caption").each(function() {
                captionTransition($(this), 0);
            }), $slides.find("img").each(function() {
                $(this).css("background-image", "url(" + $(this).attr("src") + ")"), $(this).attr("src", "");
            }), options.indicators) {
                var $indicators = $('<ul class="indicators"></ul>');
                $slides.each(function() {
                    var $indicator = $('<li class="indicator-item"></li>');
                    $indicator.click(function() {
                        var $parent = $slider.parent(), curr_index = $parent.find($(this)).index();
                        moveToSlide(curr_index), clearInterval($interval), $interval = setInterval(function() {
                            $active_index = $slider.find(".active").index(), $slides.length == $active_index + 1 ? $active_index = 0 : $active_index += 1, 
                            moveToSlide($active_index);
                        }, options.transition + options.interval);
                    }), $indicators.append($indicator);
                }), $this.append($indicators), $indicators = $this.find("ul.indicators").find("li.indicator-item");
            }
            $active ? $active.show() : ($slides.first().addClass("active").velocity({
                opacity: 1
            }, {
                duration: options.transition,
                queue: !1,
                easing: "easeOutQuad"
            }), $active_index = 0, $active = $slides.eq($active_index), options.indicators && $indicators.eq($active_index).addClass("active")), 
            $active.find("img").each(function() {
                $active.find(".caption").velocity({
                    opacity: 1,
                    translateX: 0,
                    translateY: 0
                }, {
                    duration: options.transition,
                    queue: !1,
                    easing: "easeOutQuad"
                });
            }), $interval = setInterval(function() {
                $active_index = $slider.find(".active").index(), moveToSlide($active_index + 1);
            }, options.transition + options.interval);
            var panning = !1, swipeLeft = !1, swipeRight = !1;
            $this.hammer({
                prevent_default: !1
            }).bind("pan", function(e) {
                if ("touch" === e.gesture.pointerType) {
                    clearInterval($interval);
                    var direction = e.gesture.direction, x = e.gesture.deltaX, velocityX = e.gesture.velocityX;
                    $curr_slide = $slider.find(".active"), $curr_slide.velocity({
                        translateX: x
                    }, {
                        duration: 50,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), 4 === direction && (x > $this.innerWidth() / 2 || -.65 > velocityX) ? swipeRight = !0 : 2 === direction && (x < -1 * $this.innerWidth() / 2 || velocityX > .65) && (swipeLeft = !0);
                    var next_slide;
                    swipeLeft && (next_slide = $curr_slide.next(), 0 === next_slide.length && (next_slide = $slides.first()), 
                    next_slide.velocity({
                        opacity: 1
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    })), swipeRight && (next_slide = $curr_slide.prev(), 0 === next_slide.length && (next_slide = $slides.last()), 
                    next_slide.velocity({
                        opacity: 1
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }));
                }
            }).bind("panend", function(e) {
                "touch" === e.gesture.pointerType && ($curr_slide = $slider.find(".active"), panning = !1, 
                curr_index = $slider.find(".active").index(), swipeRight || swipeLeft ? swipeLeft ? (moveToSlide(curr_index + 1), 
                $curr_slide.velocity({
                    translateX: -1 * $this.innerWidth()
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
                })) : swipeRight && (moveToSlide(curr_index - 1), $curr_slide.velocity({
                    translateX: $this.innerWidth()
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
                }), swipeLeft = !1, swipeRight = !1, clearInterval($interval), $interval = setInterval(function() {
                    $active_index = $slider.find(".active").index(), $slides.length == $active_index + 1 ? $active_index = 0 : $active_index += 1, 
                    moveToSlide($active_index);
                }, options.transition + options.interval));
            });
        });
    };
}(jQuery), function($) {
    $(document).ready(function() {
        $(".card > .card-reveal").each(function() {
            $(this).parent().css("overflow", "hidden");
        }), $(document).on("click.card", ".card", function(e) {
            $(this).find(".card-reveal").length && ($(e.target).is($(".card-reveal .card-title")) || $(e.target).is($(".card-reveal .card-title i")) ? $(this).find(".card-reveal").velocity({
                translateY: 0
            }, {
                duration: 225,
                queue: !1,
                easing: "easeInOutQuad"
            }) : ($(e.target).is($(".card .activator")) || $(e.target).is($(".card .activator i"))) && $(this).find(".card-reveal").velocity({
                translateY: "-100%"
            }, {
                duration: 300,
                queue: !1,
                easing: "easeInOutQuad"
            }));
        });
    });
}(jQuery), function($) {
    $(document).ready(function() {
        var guid = function() {
            function s4() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
            }
            return function() {
                return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
            };
        }();
        $.fn.pushpin = function(options) {
            var defaults = {
                top: 0,
                bottom: 1/0,
                offset: 0
            };
            return options = $.extend(defaults, options), $index = 0, this.each(function() {
                function removePinClasses(object) {
                    object.removeClass("pin-top"), object.removeClass("pinned"), object.removeClass("pin-bottom");
                }
                function updateElements(objects, scrolled) {
                    objects.each(function() {
                        options.top <= scrolled && options.bottom >= scrolled && !$(this).hasClass("pinned") && (removePinClasses($(this)), 
                        $(this).css("top", options.offset), $(this).addClass("pinned")), scrolled < options.top && !$(this).hasClass("pin-top") && (removePinClasses($(this)), 
                        $(this).css("top", 0), $(this).addClass("pin-top")), scrolled > options.bottom && !$(this).hasClass("pin-bottom") && (removePinClasses($(this)), 
                        $(this).addClass("pin-bottom"), $(this).css("top", options.bottom - $original_offset));
                    });
                }
                var $uniqueId = guid(), $this = $(this), $original_offset = $(this).offset().top;
                updateElements($this, $(window).scrollTop()), $(window).on("scroll." + $uniqueId, function() {
                    var $scrolled = $(window).scrollTop() + options.offset;
                    updateElements($this, $scrolled);
                });
            });
        };
    });
}(jQuery), function($) {
    $(document).ready(function() {
        jQuery.fn.reverse = [].reverse, $(".fixed-action-btn").each(function() {
            var $this = $(this);
            $this.find("ul a.btn-floating").velocity({
                scaleY: ".4",
                scaleX: ".4",
                translateY: "40px"
            }, {
                duration: 0
            });
            $this.hover(function() {
                var time = 0;
                $this.find("ul a.btn-floating").reverse().each(function() {
                    $(this).velocity({
                        opacity: "1",
                        scaleX: "1",
                        scaleY: "1",
                        translateY: "0"
                    }, {
                        duration: 100,
                        delay: time
                    }), time += 40;
                });
            }, function() {
                $this.find("ul a.btn-floating").velocity("stop", !0), $this.find("ul a.btn-floating").velocity({
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
}(jQuery), function($) {
    $(document).ready(function() {
        var time = 0;
        showStaggeredList = function(selector) {
            $(selector).find("li").velocity({
                translateX: "-100px"
            }, {
                duration: 0
            }), $(selector).find("li").each(function() {
                $(this).velocity({
                    opacity: "1",
                    translateX: "0"
                }, {
                    duration: 800,
                    delay: time,
                    easing: [ 60, 10 ]
                }), time += 120;
            });
        };
        var staggeredListOptions = [];
        $("ul.staggered-list").each(function(i) {
            console.log(i);
            var label = "scrollFire-" + i;
            $(this).addClass(label), staggeredListOptions.push({
                selector: "ul.staggered-list." + label,
                offset: 200,
                callback: 'showStaggeredList("ul.staggered-list.' + label + '")'
            });
        }), console.log(staggeredListOptions), scrollFire(staggeredListOptions), fadeInImage = function(selector) {
            var element = $(selector);
            element.css({
                opacity: 0
            }), $(element).velocity({
                opacity: 1
            }, {
                duration: 650,
                queue: !1,
                easing: "easeOutSine"
            }), $(element).animate({
                opacity: 1
            }, {
                duration: 1300,
                queue: !1,
                easing: "swing",
                step: function(now, fx) {
                    fx.start = 100;
                    var grayscale_setting = now / 100, brightness_setting = 150 - (100 - now) / 1.75;
                    100 > brightness_setting && (brightness_setting = 100), console.log(grayscale_setting), 
                    now >= 0 && $(this).css({
                        "-webkit-filter": "grayscale(" + grayscale_setting + ")brightness(" + brightness_setting + "%)",
                        filter: "grayscale(" + grayscale_setting + ")brightness(" + brightness_setting + "%)"
                    });
                }
            });
        };
    });
}(jQuery), function($) {
    scrollFire = function(options) {
        $(window).scroll(function() {
            var windowScroll = $(window).scrollTop() + $(window).height();
            $.each(options, function(i, value) {
                var selector = value.selector, offset = value.offset, callback = value.callback, elementOffset = $(selector).offset().top;
                if (windowScroll > elementOffset + offset && void 0 === $(selector).data("done")) {
                    var callbackFunc = new Function(callback);
                    callbackFunc(), $(selector).data("done", !0);
                }
            });
        });
    };
}(jQuery), function(factory) {
    "function" == typeof define && define.amd ? define("picker", [ "jquery" ], factory) : "object" == typeof exports ? module.exports = factory(require("jquery")) : this.Picker = factory(jQuery);
}(function($) {
    function PickerConstructor(ELEMENT, NAME, COMPONENT, OPTIONS) {
        function createWrappedComponent() {
            return PickerConstructor._.node("div", PickerConstructor._.node("div", PickerConstructor._.node("div", PickerConstructor._.node("div", P.component.nodes(STATE.open), CLASSES.box), CLASSES.wrap), CLASSES.frame), CLASSES.holder);
        }
        function prepareElement() {
            $ELEMENT.data(NAME, P).addClass(CLASSES.input).attr("tabindex", -1).val($ELEMENT.data("value") ? P.get("select", SETTINGS.format) : ELEMENT.value), 
            SETTINGS.editable || $ELEMENT.on("focus." + STATE.id + " click." + STATE.id, function(event) {
                event.preventDefault(), P.$root[0].focus();
            }).on("keydown." + STATE.id, handleKeydownEvent), aria(ELEMENT, {
                haspopup: !0,
                expanded: !1,
                readonly: !1,
                owns: ELEMENT.id + "_root"
            });
        }
        function prepareElementRoot() {
            P.$root.on({
                keydown: handleKeydownEvent,
                focusin: function(event) {
                    P.$root.removeClass(CLASSES.focused), event.stopPropagation();
                },
                "mousedown click": function(event) {
                    var target = event.target;
                    target != P.$root.children()[0] && (event.stopPropagation(), "mousedown" != event.type || $(target).is("input, select, textarea, button, option") || (event.preventDefault(), 
                    P.$root[0].focus()));
                }
            }).on({
                focus: function() {
                    $ELEMENT.addClass(CLASSES.target);
                },
                blur: function() {
                    $ELEMENT.removeClass(CLASSES.target);
                }
            }).on("focus.toOpen", handleFocusToOpenEvent).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                var $target = $(this), targetData = $target.data(), targetDisabled = $target.hasClass(CLASSES.navDisabled) || $target.hasClass(CLASSES.disabled), activeElement = getActiveElement();
                activeElement = activeElement && (activeElement.type || activeElement.href), (targetDisabled || activeElement && !$.contains(P.$root[0], activeElement)) && P.$root[0].focus(), 
                !targetDisabled && targetData.nav ? P.set("highlight", P.component.item.highlight, {
                    nav: targetData.nav
                }) : !targetDisabled && "pick" in targetData ? P.set("select", targetData.pick) : targetData.clear ? P.clear().close(!0) : targetData.close && P.close(!0);
            }), aria(P.$root[0], "hidden", !0);
        }
        function prepareElementHidden() {
            var name;
            SETTINGS.hiddenName === !0 ? (name = ELEMENT.name, ELEMENT.name = "") : (name = [ "string" == typeof SETTINGS.hiddenPrefix ? SETTINGS.hiddenPrefix : "", "string" == typeof SETTINGS.hiddenSuffix ? SETTINGS.hiddenSuffix : "_submit" ], 
            name = name[0] + ELEMENT.name + name[1]), P._hidden = $('<input type=hidden name="' + name + '"' + ($ELEMENT.data("value") || ELEMENT.value ? ' value="' + P.get("select", SETTINGS.formatSubmit) + '"' : "") + ">")[0], 
            $ELEMENT.on("change." + STATE.id, function() {
                P._hidden.value = ELEMENT.value ? P.get("select", SETTINGS.formatSubmit) : "";
            }), SETTINGS.container ? $(SETTINGS.container).append(P._hidden) : $ELEMENT.after(P._hidden);
        }
        function handleKeydownEvent(event) {
            var keycode = event.keyCode, isKeycodeDelete = /^(8|46)$/.test(keycode);
            return 27 == keycode ? (P.close(), !1) : void ((32 == keycode || isKeycodeDelete || !STATE.open && P.component.key[keycode]) && (event.preventDefault(), 
            event.stopPropagation(), isKeycodeDelete ? P.clear().close() : P.open()));
        }
        function handleFocusToOpenEvent(event) {
            event.stopPropagation(), "focus" == event.type && P.$root.addClass(CLASSES.focused), 
            P.open();
        }
        if (!ELEMENT) return PickerConstructor;
        var IS_DEFAULT_THEME = !1, STATE = {
            id: ELEMENT.id || "P" + Math.abs(~~(Math.random() * new Date()))
        }, SETTINGS = COMPONENT ? $.extend(!0, {}, COMPONENT.defaults, OPTIONS) : OPTIONS || {}, CLASSES = $.extend({}, PickerConstructor.klasses(), SETTINGS.klass), $ELEMENT = $(ELEMENT), PickerInstance = function() {
            return this.start();
        }, P = PickerInstance.prototype = {
            constructor: PickerInstance,
            $node: $ELEMENT,
            start: function() {
                return STATE && STATE.start ? P : (STATE.methods = {}, STATE.start = !0, STATE.open = !1, 
                STATE.type = ELEMENT.type, ELEMENT.autofocus = ELEMENT == getActiveElement(), ELEMENT.readOnly = !SETTINGS.editable, 
                ELEMENT.id = ELEMENT.id || STATE.id, "text" != ELEMENT.type && (ELEMENT.type = "text"), 
                P.component = new COMPONENT(P, SETTINGS), P.$root = $(PickerConstructor._.node("div", createWrappedComponent(), CLASSES.picker, 'id="' + ELEMENT.id + '_root" tabindex="0"')), 
                prepareElementRoot(), SETTINGS.formatSubmit && prepareElementHidden(), prepareElement(), 
                SETTINGS.container ? $(SETTINGS.container).append(P.$root) : $ELEMENT.after(P.$root), 
                P.on({
                    start: P.component.onStart,
                    render: P.component.onRender,
                    stop: P.component.onStop,
                    open: P.component.onOpen,
                    close: P.component.onClose,
                    set: P.component.onSet
                }).on({
                    start: SETTINGS.onStart,
                    render: SETTINGS.onRender,
                    stop: SETTINGS.onStop,
                    open: SETTINGS.onOpen,
                    close: SETTINGS.onClose,
                    set: SETTINGS.onSet
                }), IS_DEFAULT_THEME = isUsingDefaultTheme(P.$root.children()[0]), ELEMENT.autofocus && P.open(), 
                P.trigger("start").trigger("render"));
            },
            render: function(entireComponent) {
                return entireComponent ? P.$root.html(createWrappedComponent()) : P.$root.find("." + CLASSES.box).html(P.component.nodes(STATE.open)), 
                P.trigger("render");
            },
            stop: function() {
                return STATE.start ? (P.close(), P._hidden && P._hidden.parentNode.removeChild(P._hidden), 
                P.$root.remove(), $ELEMENT.removeClass(CLASSES.input).removeData(NAME), setTimeout(function() {
                    $ELEMENT.off("." + STATE.id);
                }, 0), ELEMENT.type = STATE.type, ELEMENT.readOnly = !1, P.trigger("stop"), STATE.methods = {}, 
                STATE.start = !1, P) : P;
            },
            open: function(dontGiveFocus) {
                return STATE.open ? P : ($ELEMENT.addClass(CLASSES.active), aria(ELEMENT, "expanded", !0), 
                setTimeout(function() {
                    P.$root.addClass(CLASSES.opened), aria(P.$root[0], "hidden", !1);
                }, 0), dontGiveFocus !== !1 && (STATE.open = !0, IS_DEFAULT_THEME && $html.css("overflow", "hidden").css("padding-right", "+=" + getScrollbarWidth()), 
                P.$root[0].focus(), $document.on("click." + STATE.id + " focusin." + STATE.id, function(event) {
                    var target = event.target;
                    target != ELEMENT && target != document && 3 != event.which && P.close(target === P.$root.children()[0]);
                }).on("keydown." + STATE.id, function(event) {
                    var keycode = event.keyCode, keycodeToMove = P.component.key[keycode], target = event.target;
                    27 == keycode ? P.close(!0) : target != P.$root[0] || !keycodeToMove && 13 != keycode ? $.contains(P.$root[0], target) && 13 == keycode && (event.preventDefault(), 
                    target.click()) : (event.preventDefault(), keycodeToMove ? PickerConstructor._.trigger(P.component.key.go, P, [ PickerConstructor._.trigger(keycodeToMove) ]) : P.$root.find("." + CLASSES.highlighted).hasClass(CLASSES.disabled) || P.set("select", P.component.item.highlight).close());
                })), P.trigger("open"));
            },
            close: function(giveFocus) {
                return giveFocus && (P.$root.off("focus.toOpen")[0].focus(), setTimeout(function() {
                    P.$root.on("focus.toOpen", handleFocusToOpenEvent);
                }, 0)), $ELEMENT.removeClass(CLASSES.active), aria(ELEMENT, "expanded", !1), setTimeout(function() {
                    P.$root.removeClass(CLASSES.opened + " " + CLASSES.focused), aria(P.$root[0], "hidden", !0);
                }, 0), STATE.open ? (STATE.open = !1, IS_DEFAULT_THEME && $html.css("overflow", "").css("padding-right", "-=" + getScrollbarWidth()), 
                $document.off("." + STATE.id), P.trigger("close")) : P;
            },
            clear: function(options) {
                return P.set("clear", null, options);
            },
            set: function(thing, value, options) {
                var thingItem, thingValue, thingIsObject = $.isPlainObject(thing), thingObject = thingIsObject ? thing : {};
                if (options = thingIsObject && $.isPlainObject(value) ? value : options || {}, thing) {
                    thingIsObject || (thingObject[thing] = value);
                    for (thingItem in thingObject) thingValue = thingObject[thingItem], thingItem in P.component.item && (void 0 === thingValue && (thingValue = null), 
                    P.component.set(thingItem, thingValue, options)), ("select" == thingItem || "clear" == thingItem) && $ELEMENT.val("clear" == thingItem ? "" : P.get(thingItem, SETTINGS.format)).trigger("change");
                    P.render();
                }
                return options.muted ? P : P.trigger("set", thingObject);
            },
            get: function(thing, format) {
                if (thing = thing || "value", null != STATE[thing]) return STATE[thing];
                if ("valueSubmit" == thing) {
                    if (P._hidden) return P._hidden.value;
                    thing = "value";
                }
                if ("value" == thing) return ELEMENT.value;
                if (thing in P.component.item) {
                    if ("string" == typeof format) {
                        var thingValue = P.component.get(thing);
                        return thingValue ? PickerConstructor._.trigger(P.component.formats.toString, P.component, [ format, thingValue ]) : "";
                    }
                    return P.component.get(thing);
                }
            },
            on: function(thing, method, internal) {
                var thingName, thingMethod, thingIsObject = $.isPlainObject(thing), thingObject = thingIsObject ? thing : {};
                if (thing) {
                    thingIsObject || (thingObject[thing] = method);
                    for (thingName in thingObject) thingMethod = thingObject[thingName], internal && (thingName = "_" + thingName), 
                    STATE.methods[thingName] = STATE.methods[thingName] || [], STATE.methods[thingName].push(thingMethod);
                }
                return P;
            },
            off: function() {
                var i, thingName, names = arguments;
                for (i = 0, namesCount = names.length; i < namesCount; i += 1) thingName = names[i], 
                thingName in STATE.methods && delete STATE.methods[thingName];
                return P;
            },
            trigger: function(name, data) {
                var _trigger = function(name) {
                    var methodList = STATE.methods[name];
                    methodList && methodList.map(function(method) {
                        PickerConstructor._.trigger(method, P, [ data ]);
                    });
                };
                return _trigger("_" + name), _trigger(name), P;
            }
        };
        return new PickerInstance();
    }
    function isUsingDefaultTheme(element) {
        var theme, prop = "position";
        return element.currentStyle ? theme = element.currentStyle[prop] : window.getComputedStyle && (theme = getComputedStyle(element)[prop]), 
        "fixed" == theme;
    }
    function getScrollbarWidth() {
        if ($html.height() <= $window.height()) return 0;
        var $outer = $('<div style="visibility:hidden;width:100px" />').appendTo("body"), widthWithoutScroll = $outer[0].offsetWidth;
        $outer.css("overflow", "scroll");
        var $inner = $('<div style="width:100%" />').appendTo($outer), widthWithScroll = $inner[0].offsetWidth;
        return $outer.remove(), widthWithoutScroll - widthWithScroll;
    }
    function aria(element, attribute, value) {
        if ($.isPlainObject(attribute)) for (var key in attribute) ariaSet(element, key, attribute[key]); else ariaSet(element, attribute, value);
    }
    function ariaSet(element, attribute, value) {
        element.setAttribute(("role" == attribute ? "" : "aria-") + attribute, value);
    }
    function ariaAttr(attribute, data) {
        $.isPlainObject(attribute) || (attribute = {
            attribute: data
        }), data = "";
        for (var key in attribute) {
            var attr = ("role" == key ? "" : "aria-") + key, attrVal = attribute[key];
            data += null == attrVal ? "" : attr + '="' + attribute[key] + '"';
        }
        return data;
    }
    function getActiveElement() {
        try {
            return document.activeElement;
        } catch (err) {}
    }
    var $window = $(window), $document = $(document), $html = $(document.documentElement);
    return PickerConstructor.klasses = function(prefix) {
        return prefix = prefix || "picker", {
            picker: prefix,
            opened: prefix + "--opened",
            focused: prefix + "--focused",
            input: prefix + "__input",
            active: prefix + "__input--active",
            target: prefix + "__input--target",
            holder: prefix + "__holder",
            frame: prefix + "__frame",
            wrap: prefix + "__wrap",
            box: prefix + "__box"
        };
    }, PickerConstructor._ = {
        group: function(groupObject) {
            for (var loopObjectScope, nodesList = "", counter = PickerConstructor._.trigger(groupObject.min, groupObject); counter <= PickerConstructor._.trigger(groupObject.max, groupObject, [ counter ]); counter += groupObject.i) loopObjectScope = PickerConstructor._.trigger(groupObject.item, groupObject, [ counter ]), 
            nodesList += PickerConstructor._.node(groupObject.node, loopObjectScope[0], loopObjectScope[1], loopObjectScope[2]);
            return nodesList;
        },
        node: function(wrapper, item, klass, attribute) {
            return item ? (item = $.isArray(item) ? item.join("") : item, klass = klass ? ' class="' + klass + '"' : "", 
            attribute = attribute ? " " + attribute : "", "<" + wrapper + klass + attribute + ">" + item + "</" + wrapper + ">") : "";
        },
        lead: function(number) {
            return (10 > number ? "0" : "") + number;
        },
        trigger: function(callback, scope, args) {
            return "function" == typeof callback ? callback.apply(scope, args || []) : callback;
        },
        digits: function(string) {
            return /\d/.test(string[1]) ? 2 : 1;
        },
        isDate: function(value) {
            return {}.toString.call(value).indexOf("Date") > -1 && this.isInteger(value.getDate());
        },
        isInteger: function(value) {
            return {}.toString.call(value).indexOf("Number") > -1 && value % 1 === 0;
        },
        ariaAttr: ariaAttr
    }, PickerConstructor.extend = function(name, Component) {
        $.fn[name] = function(options, action) {
            var componentData = this.data(name);
            return "picker" == options ? componentData : componentData && "string" == typeof options ? PickerConstructor._.trigger(componentData[options], componentData, [ action ]) : this.each(function() {
                var $this = $(this);
                $this.data(name) || new PickerConstructor(this, name, Component, options);
            });
        }, $.fn[name].defaults = Component.defaults;
    }, PickerConstructor;
}), function(factory) {
    "function" == typeof define && define.amd ? define([ "picker", "jquery" ], factory) : "object" == typeof exports ? module.exports = factory(require("./picker.js"), require("jquery")) : factory(Picker, jQuery);
}(function(Picker, $) {
    function DatePicker(picker, settings) {
        var calendar = this, element = picker.$node[0], elementValue = element.value, elementDataValue = picker.$node.data("value"), valueString = elementDataValue || elementValue, formatString = elementDataValue ? settings.formatSubmit : settings.format, isRTL = function() {
            return element.currentStyle ? "rtl" == element.currentStyle.direction : "rtl" == getComputedStyle(picker.$root[0]).direction;
        };
        calendar.settings = settings, calendar.$node = picker.$node, calendar.queue = {
            min: "measure create",
            max: "measure create",
            now: "now create",
            select: "parse create validate",
            highlight: "parse navigate create validate",
            view: "parse create validate viewset",
            disable: "deactivate",
            enable: "activate"
        }, calendar.item = {}, calendar.item.clear = null, calendar.item.disable = (settings.disable || []).slice(0), 
        calendar.item.enable = -function(collectionDisabled) {
            return collectionDisabled[0] === !0 ? collectionDisabled.shift() : -1;
        }(calendar.item.disable), calendar.set("min", settings.min).set("max", settings.max).set("now"), 
        valueString ? calendar.set("select", valueString, {
            format: formatString
        }) : calendar.set("select", null).set("highlight", calendar.item.now), calendar.key = {
            40: 7,
            38: -7,
            39: function() {
                return isRTL() ? -1 : 1;
            },
            37: function() {
                return isRTL() ? 1 : -1;
            },
            go: function(timeChange) {
                var highlightedObject = calendar.item.highlight, targetDate = new Date(highlightedObject.year, highlightedObject.month, highlightedObject.date + timeChange);
                calendar.set("highlight", targetDate, {
                    interval: timeChange
                }), this.render();
            }
        }, picker.on("render", function() {
            picker.$root.find("." + settings.klass.selectMonth).on("change", function() {
                var value = this.value;
                value && (picker.set("highlight", [ picker.get("view").year, value, picker.get("highlight").date ]), 
                picker.$root.find("." + settings.klass.selectMonth).trigger("focus"));
            }), picker.$root.find("." + settings.klass.selectYear).on("change", function() {
                var value = this.value;
                value && (picker.set("highlight", [ value, picker.get("view").month, picker.get("highlight").date ]), 
                picker.$root.find("." + settings.klass.selectYear).trigger("focus"));
            });
        }, 1).on("open", function() {
            var includeToday = "";
            calendar.disabled(calendar.get("now")) && (includeToday = ":not(." + settings.klass.buttonToday + ")"), 
            picker.$root.find("button" + includeToday + ", select").attr("disabled", !1);
        }, 1).on("close", function() {
            picker.$root.find("button, select").attr("disabled", !0);
        }, 1);
    }
    var DAYS_IN_WEEK = 7, WEEKS_IN_CALENDAR = 6, _ = Picker._;
    DatePicker.prototype.set = function(type, value, options) {
        var calendar = this, calendarItem = calendar.item;
        return null === value ? ("clear" == type && (type = "select"), calendarItem[type] = value, 
        calendar) : (calendarItem["enable" == type ? "disable" : "flip" == type ? "enable" : type] = calendar.queue[type].split(" ").map(function(method) {
            return value = calendar[method](type, value, options);
        }).pop(), "select" == type ? calendar.set("highlight", calendarItem.select, options) : "highlight" == type ? calendar.set("view", calendarItem.highlight, options) : type.match(/^(flip|min|max|disable|enable)$/) && (calendarItem.select && calendar.disabled(calendarItem.select) && calendar.set("select", calendarItem.select, options), 
        calendarItem.highlight && calendar.disabled(calendarItem.highlight) && calendar.set("highlight", calendarItem.highlight, options)), 
        calendar);
    }, DatePicker.prototype.get = function(type) {
        return this.item[type];
    }, DatePicker.prototype.create = function(type, value, options) {
        var isInfiniteValue, calendar = this;
        return value = void 0 === value ? type : value, value == -1/0 || 1/0 == value ? isInfiniteValue = value : $.isPlainObject(value) && _.isInteger(value.pick) ? value = value.obj : $.isArray(value) ? (value = new Date(value[0], value[1], value[2]), 
        value = _.isDate(value) ? value : calendar.create().obj) : value = _.isInteger(value) || _.isDate(value) ? calendar.normalize(new Date(value), options) : calendar.now(type, value, options), 
        {
            year: isInfiniteValue || value.getFullYear(),
            month: isInfiniteValue || value.getMonth(),
            date: isInfiniteValue || value.getDate(),
            day: isInfiniteValue || value.getDay(),
            obj: isInfiniteValue || value,
            pick: isInfiniteValue || value.getTime()
        };
    }, DatePicker.prototype.createRange = function(from, to) {
        var calendar = this, createDate = function(date) {
            return date === !0 || $.isArray(date) || _.isDate(date) ? calendar.create(date) : date;
        };
        return _.isInteger(from) || (from = createDate(from)), _.isInteger(to) || (to = createDate(to)), 
        _.isInteger(from) && $.isPlainObject(to) ? from = [ to.year, to.month, to.date + from ] : _.isInteger(to) && $.isPlainObject(from) && (to = [ from.year, from.month, from.date + to ]), 
        {
            from: createDate(from),
            to: createDate(to)
        };
    }, DatePicker.prototype.withinRange = function(range, dateUnit) {
        return range = this.createRange(range.from, range.to), dateUnit.pick >= range.from.pick && dateUnit.pick <= range.to.pick;
    }, DatePicker.prototype.overlapRanges = function(one, two) {
        var calendar = this;
        return one = calendar.createRange(one.from, one.to), two = calendar.createRange(two.from, two.to), 
        calendar.withinRange(one, two.from) || calendar.withinRange(one, two.to) || calendar.withinRange(two, one.from) || calendar.withinRange(two, one.to);
    }, DatePicker.prototype.now = function(type, value, options) {
        return value = new Date(), options && options.rel && value.setDate(value.getDate() + options.rel), 
        this.normalize(value, options);
    }, DatePicker.prototype.navigate = function(type, value, options) {
        var targetDateObject, targetYear, targetMonth, targetDate, isTargetArray = $.isArray(value), isTargetObject = $.isPlainObject(value), viewsetObject = this.item.view;
        if (isTargetArray || isTargetObject) {
            for (isTargetObject ? (targetYear = value.year, targetMonth = value.month, targetDate = value.date) : (targetYear = +value[0], 
            targetMonth = +value[1], targetDate = +value[2]), options && options.nav && viewsetObject && viewsetObject.month !== targetMonth && (targetYear = viewsetObject.year, 
            targetMonth = viewsetObject.month), targetDateObject = new Date(targetYear, targetMonth + (options && options.nav ? options.nav : 0), 1), 
            targetYear = targetDateObject.getFullYear(), targetMonth = targetDateObject.getMonth(); new Date(targetYear, targetMonth, targetDate).getMonth() !== targetMonth; ) targetDate -= 1;
            value = [ targetYear, targetMonth, targetDate ];
        }
        return value;
    }, DatePicker.prototype.normalize = function(value) {
        return value.setHours(0, 0, 0, 0), value;
    }, DatePicker.prototype.measure = function(type, value) {
        var calendar = this;
        return value ? "string" == typeof value ? value = calendar.parse(type, value) : _.isInteger(value) && (value = calendar.now(type, value, {
            rel: value
        })) : value = "min" == type ? -1/0 : 1/0, value;
    }, DatePicker.prototype.viewset = function(type, dateObject) {
        return this.create([ dateObject.year, dateObject.month, 1 ]);
    }, DatePicker.prototype.validate = function(type, dateObject, options) {
        var hasEnabledBeforeTarget, hasEnabledAfterTarget, reachedMin, reachedMax, calendar = this, originalDateObject = dateObject, interval = options && options.interval ? options.interval : 1, isFlippedBase = -1 === calendar.item.enable, minLimitObject = calendar.item.min, maxLimitObject = calendar.item.max, hasEnabledWeekdays = isFlippedBase && calendar.item.disable.filter(function(value) {
            if ($.isArray(value)) {
                var dateTime = calendar.create(value).pick;
                dateTime < dateObject.pick ? hasEnabledBeforeTarget = !0 : dateTime > dateObject.pick && (hasEnabledAfterTarget = !0);
            }
            return _.isInteger(value);
        }).length;
        if ((!options || !options.nav) && (!isFlippedBase && calendar.disabled(dateObject) || isFlippedBase && calendar.disabled(dateObject) && (hasEnabledWeekdays || hasEnabledBeforeTarget || hasEnabledAfterTarget) || !isFlippedBase && (dateObject.pick <= minLimitObject.pick || dateObject.pick >= maxLimitObject.pick))) for (isFlippedBase && !hasEnabledWeekdays && (!hasEnabledAfterTarget && interval > 0 || !hasEnabledBeforeTarget && 0 > interval) && (interval *= -1); calendar.disabled(dateObject) && (Math.abs(interval) > 1 && (dateObject.month < originalDateObject.month || dateObject.month > originalDateObject.month) && (dateObject = originalDateObject, 
        interval = interval > 0 ? 1 : -1), dateObject.pick <= minLimitObject.pick ? (reachedMin = !0, 
        interval = 1, dateObject = calendar.create([ minLimitObject.year, minLimitObject.month, minLimitObject.date + (dateObject.pick === minLimitObject.pick ? 0 : -1) ])) : dateObject.pick >= maxLimitObject.pick && (reachedMax = !0, 
        interval = -1, dateObject = calendar.create([ maxLimitObject.year, maxLimitObject.month, maxLimitObject.date + (dateObject.pick === maxLimitObject.pick ? 0 : 1) ])), 
        !reachedMin || !reachedMax); ) dateObject = calendar.create([ dateObject.year, dateObject.month, dateObject.date + interval ]);
        return dateObject;
    }, DatePicker.prototype.disabled = function(dateToVerify) {
        var calendar = this, isDisabledMatch = calendar.item.disable.filter(function(dateToDisable) {
            return _.isInteger(dateToDisable) ? dateToVerify.day === (calendar.settings.firstDay ? dateToDisable : dateToDisable - 1) % 7 : $.isArray(dateToDisable) || _.isDate(dateToDisable) ? dateToVerify.pick === calendar.create(dateToDisable).pick : $.isPlainObject(dateToDisable) ? calendar.withinRange(dateToDisable, dateToVerify) : void 0;
        });
        return isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function(dateToDisable) {
            return $.isArray(dateToDisable) && "inverted" == dateToDisable[3] || $.isPlainObject(dateToDisable) && dateToDisable.inverted;
        }).length, -1 === calendar.item.enable ? !isDisabledMatch : isDisabledMatch || dateToVerify.pick < calendar.item.min.pick || dateToVerify.pick > calendar.item.max.pick;
    }, DatePicker.prototype.parse = function(type, value, options) {
        var calendar = this, parsingObject = {};
        return value && "string" == typeof value ? (options && options.format || (options = options || {}, 
        options.format = calendar.settings.format), calendar.formats.toArray(options.format).map(function(label) {
            var formattingLabel = calendar.formats[label], formatLength = formattingLabel ? _.trigger(formattingLabel, calendar, [ value, parsingObject ]) : label.replace(/^!/, "").length;
            formattingLabel && (parsingObject[label] = value.substr(0, formatLength)), value = value.substr(formatLength);
        }), [ parsingObject.yyyy || parsingObject.yy, +(parsingObject.mm || parsingObject.m) - 1, parsingObject.dd || parsingObject.d ]) : value;
    }, DatePicker.prototype.formats = function() {
        function getWordLengthFromCollection(string, collection, dateObject) {
            var word = string.match(/\w+/)[0];
            return dateObject.mm || dateObject.m || (dateObject.m = collection.indexOf(word) + 1), 
            word.length;
        }
        function getFirstWordLength(string) {
            return string.match(/\w+/)[0].length;
        }
        return {
            d: function(string, dateObject) {
                return string ? _.digits(string) : dateObject.date;
            },
            dd: function(string, dateObject) {
                return string ? 2 : _.lead(dateObject.date);
            },
            ddd: function(string, dateObject) {
                return string ? getFirstWordLength(string) : this.settings.weekdaysShort[dateObject.day];
            },
            dddd: function(string, dateObject) {
                return string ? getFirstWordLength(string) : this.settings.weekdaysFull[dateObject.day];
            },
            m: function(string, dateObject) {
                return string ? _.digits(string) : dateObject.month + 1;
            },
            mm: function(string, dateObject) {
                return string ? 2 : _.lead(dateObject.month + 1);
            },
            mmm: function(string, dateObject) {
                var collection = this.settings.monthsShort;
                return string ? getWordLengthFromCollection(string, collection, dateObject) : collection[dateObject.month];
            },
            mmmm: function(string, dateObject) {
                var collection = this.settings.monthsFull;
                return string ? getWordLengthFromCollection(string, collection, dateObject) : collection[dateObject.month];
            },
            yy: function(string, dateObject) {
                return string ? 2 : ("" + dateObject.year).slice(2);
            },
            yyyy: function(string, dateObject) {
                return string ? 4 : dateObject.year;
            },
            toArray: function(formatString) {
                return formatString.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
            },
            toString: function(formatString, itemObject) {
                var calendar = this;
                return calendar.formats.toArray(formatString).map(function(label) {
                    return _.trigger(calendar.formats[label], calendar, [ 0, itemObject ]) || label.replace(/^!/, "");
                }).join("");
            }
        };
    }(), DatePicker.prototype.isDateExact = function(one, two) {
        var calendar = this;
        return _.isInteger(one) && _.isInteger(two) || "boolean" == typeof one && "boolean" == typeof two ? one === two : (_.isDate(one) || $.isArray(one)) && (_.isDate(two) || $.isArray(two)) ? calendar.create(one).pick === calendar.create(two).pick : $.isPlainObject(one) && $.isPlainObject(two) ? calendar.isDateExact(one.from, two.from) && calendar.isDateExact(one.to, two.to) : !1;
    }, DatePicker.prototype.isDateOverlap = function(one, two) {
        var calendar = this, firstDay = calendar.settings.firstDay ? 1 : 0;
        return _.isInteger(one) && (_.isDate(two) || $.isArray(two)) ? (one = one % 7 + firstDay, 
        one === calendar.create(two).day + 1) : _.isInteger(two) && (_.isDate(one) || $.isArray(one)) ? (two = two % 7 + firstDay, 
        two === calendar.create(one).day + 1) : $.isPlainObject(one) && $.isPlainObject(two) ? calendar.overlapRanges(one, two) : !1;
    }, DatePicker.prototype.flipEnable = function(val) {
        var itemObject = this.item;
        itemObject.enable = val || (-1 == itemObject.enable ? 1 : -1);
    }, DatePicker.prototype.deactivate = function(type, datesToDisable) {
        var calendar = this, disabledItems = calendar.item.disable.slice(0);
        return "flip" == datesToDisable ? calendar.flipEnable() : datesToDisable === !1 ? (calendar.flipEnable(1), 
        disabledItems = []) : datesToDisable === !0 ? (calendar.flipEnable(-1), disabledItems = []) : datesToDisable.map(function(unitToDisable) {
            for (var matchFound, index = 0; index < disabledItems.length; index += 1) if (calendar.isDateExact(unitToDisable, disabledItems[index])) {
                matchFound = !0;
                break;
            }
            matchFound || (_.isInteger(unitToDisable) || _.isDate(unitToDisable) || $.isArray(unitToDisable) || $.isPlainObject(unitToDisable) && unitToDisable.from && unitToDisable.to) && disabledItems.push(unitToDisable);
        }), disabledItems;
    }, DatePicker.prototype.activate = function(type, datesToEnable) {
        var calendar = this, disabledItems = calendar.item.disable, disabledItemsCount = disabledItems.length;
        return "flip" == datesToEnable ? calendar.flipEnable() : datesToEnable === !0 ? (calendar.flipEnable(1), 
        disabledItems = []) : datesToEnable === !1 ? (calendar.flipEnable(-1), disabledItems = []) : datesToEnable.map(function(unitToEnable) {
            var matchFound, disabledUnit, index, isExactRange;
            for (index = 0; disabledItemsCount > index; index += 1) {
                if (disabledUnit = disabledItems[index], calendar.isDateExact(disabledUnit, unitToEnable)) {
                    matchFound = disabledItems[index] = null, isExactRange = !0;
                    break;
                }
                if (calendar.isDateOverlap(disabledUnit, unitToEnable)) {
                    $.isPlainObject(unitToEnable) ? (unitToEnable.inverted = !0, matchFound = unitToEnable) : $.isArray(unitToEnable) ? (matchFound = unitToEnable, 
                    matchFound[3] || matchFound.push("inverted")) : _.isDate(unitToEnable) && (matchFound = [ unitToEnable.getFullYear(), unitToEnable.getMonth(), unitToEnable.getDate(), "inverted" ]);
                    break;
                }
            }
            if (matchFound) for (index = 0; disabledItemsCount > index; index += 1) if (calendar.isDateExact(disabledItems[index], unitToEnable)) {
                disabledItems[index] = null;
                break;
            }
            if (isExactRange) for (index = 0; disabledItemsCount > index; index += 1) if (calendar.isDateOverlap(disabledItems[index], unitToEnable)) {
                disabledItems[index] = null;
                break;
            }
            matchFound && disabledItems.push(matchFound);
        }), disabledItems.filter(function(val) {
            return null != val;
        });
    }, DatePicker.prototype.nodes = function(isOpen) {
        var calendar = this, settings = calendar.settings, calendarItem = calendar.item, nowObject = calendarItem.now, selectedObject = calendarItem.select, highlightedObject = calendarItem.highlight, viewsetObject = calendarItem.view, disabledCollection = calendarItem.disable, minLimitObject = calendarItem.min, maxLimitObject = calendarItem.max, tableHead = function(collection, fullCollection) {
            return settings.firstDay && (collection.push(collection.shift()), fullCollection.push(fullCollection.shift())), 
            _.node("thead", _.node("tr", _.group({
                min: 0,
                max: DAYS_IN_WEEK - 1,
                i: 1,
                node: "th",
                item: function(counter) {
                    return [ collection[counter], settings.klass.weekdays, 'scope=col title="' + fullCollection[counter] + '"' ];
                }
            })));
        }((settings.showWeekdaysFull ? settings.weekdaysFull : settings.weekdaysLetter).slice(0), settings.weekdaysFull.slice(0)), createMonthNav = function(next) {
            return _.node("div", " ", settings.klass["nav" + (next ? "Next" : "Prev")] + (next && viewsetObject.year >= maxLimitObject.year && viewsetObject.month >= maxLimitObject.month || !next && viewsetObject.year <= minLimitObject.year && viewsetObject.month <= minLimitObject.month ? " " + settings.klass.navDisabled : ""), "data-nav=" + (next || -1) + " " + _.ariaAttr({
                role: "button",
                controls: calendar.$node[0].id + "_table"
            }) + ' title="' + (next ? settings.labelMonthNext : settings.labelMonthPrev) + '"');
        }, createMonthLabel = function(override) {
            var monthsCollection = settings.showMonthsShort ? settings.monthsShort : settings.monthsFull;
            return "short_months" == override && (monthsCollection = settings.monthsShort), 
            settings.selectMonths ? _.node("select", _.group({
                min: 0,
                max: 11,
                i: 1,
                node: "option",
                item: function(loopedMonth) {
                    return [ monthsCollection[loopedMonth], 0, "value=" + loopedMonth + (viewsetObject.month == loopedMonth ? " selected" : "") + (viewsetObject.year == minLimitObject.year && loopedMonth < minLimitObject.month || viewsetObject.year == maxLimitObject.year && loopedMonth > maxLimitObject.month ? " disabled" : "") ];
                }
            }), settings.klass.selectMonth, (isOpen ? "" : "disabled") + " " + _.ariaAttr({
                controls: calendar.$node[0].id + "_table"
            }) + ' title="' + settings.labelMonthSelect + '"') : "short_months" == override ? _.node("div", monthsCollection[viewsetObject.month]) : _.node("div", monthsCollection[viewsetObject.month], settings.klass.month);
        }, createYearLabel = function(override) {
            var focusedYear = viewsetObject.year, numberYears = settings.selectYears === !0 ? 5 : ~~(settings.selectYears / 2);
            if (numberYears) {
                var minYear = minLimitObject.year, maxYear = maxLimitObject.year, lowestYear = focusedYear - numberYears, highestYear = focusedYear + numberYears;
                if (minYear > lowestYear && (highestYear += minYear - lowestYear, lowestYear = minYear), 
                highestYear > maxYear) {
                    var availableYears = lowestYear - minYear, neededYears = highestYear - maxYear;
                    lowestYear -= availableYears > neededYears ? neededYears : availableYears, highestYear = maxYear;
                }
                return _.node("select", _.group({
                    min: lowestYear,
                    max: highestYear,
                    i: 1,
                    node: "option",
                    item: function(loopedYear) {
                        return [ loopedYear, 0, "value=" + loopedYear + (focusedYear == loopedYear ? " selected" : "") ];
                    }
                }), settings.klass.selectYear, (isOpen ? "" : "disabled") + " " + _.ariaAttr({
                    controls: calendar.$node[0].id + "_table"
                }) + ' title="' + settings.labelYearSelect + '"');
            }
            return "raw" == override ? _.node("div", focusedYear) : _.node("div", focusedYear, settings.klass.year);
        };
        return createDayLabel = function() {
            return null != selectedObject ? _.node("div", selectedObject.date) : _.node("div", nowObject.date);
        }, createWeekdayLabel = function() {
            var display_day;
            display_day = null != selectedObject ? selectedObject.day : nowObject.day;
            var weekday = settings.weekdaysFull[display_day];
            return weekday;
        }, _.node("div", _.node("div", createWeekdayLabel(), "picker__weekday-display") + _.node("div", createMonthLabel("short_months"), settings.klass.month_display) + _.node("div", createDayLabel(), settings.klass.day_display) + _.node("div", createYearLabel("raw"), settings.klass.year_display), settings.klass.date_display) + _.node("div", _.node("div", (settings.selectYears ? createYearLabel() + createMonthLabel() : createMonthLabel() + createYearLabel()) + createMonthNav() + createMonthNav(1), settings.klass.header) + _.node("table", tableHead + _.node("tbody", _.group({
            min: 0,
            max: WEEKS_IN_CALENDAR - 1,
            i: 1,
            node: "tr",
            item: function(rowCounter) {
                var shiftDateBy = settings.firstDay && 0 === calendar.create([ viewsetObject.year, viewsetObject.month, 1 ]).day ? -7 : 0;
                return [ _.group({
                    min: DAYS_IN_WEEK * rowCounter - viewsetObject.day + shiftDateBy + 1,
                    max: function() {
                        return this.min + DAYS_IN_WEEK - 1;
                    },
                    i: 1,
                    node: "td",
                    item: function(targetDate) {
                        targetDate = calendar.create([ viewsetObject.year, viewsetObject.month, targetDate + (settings.firstDay ? 1 : 0) ]);
                        var isSelected = selectedObject && selectedObject.pick == targetDate.pick, isHighlighted = highlightedObject && highlightedObject.pick == targetDate.pick, isDisabled = disabledCollection && calendar.disabled(targetDate) || targetDate.pick < minLimitObject.pick || targetDate.pick > maxLimitObject.pick, formattedDate = _.trigger(calendar.formats.toString, calendar, [ settings.format, targetDate ]);
                        return [ _.node("div", targetDate.date, function(klasses) {
                            return klasses.push(viewsetObject.month == targetDate.month ? settings.klass.infocus : settings.klass.outfocus), 
                            nowObject.pick == targetDate.pick && klasses.push(settings.klass.now), isSelected && klasses.push(settings.klass.selected), 
                            isHighlighted && klasses.push(settings.klass.highlighted), isDisabled && klasses.push(settings.klass.disabled), 
                            klasses.join(" ");
                        }([ settings.klass.day ]), "data-pick=" + targetDate.pick + " " + _.ariaAttr({
                            role: "gridcell",
                            label: formattedDate,
                            selected: isSelected && calendar.$node.val() === formattedDate ? !0 : null,
                            activedescendant: isHighlighted ? !0 : null,
                            disabled: isDisabled ? !0 : null
                        })), "", _.ariaAttr({
                            role: "presentation"
                        }) ];
                    }
                }) ];
            }
        })), settings.klass.table, 'id="' + calendar.$node[0].id + '_table" ' + _.ariaAttr({
            role: "grid",
            controls: calendar.$node[0].id,
            readonly: !0
        })), settings.klass.calendar_container) + _.node("div", _.node("button", settings.today, "btn-flat picker__today", "type=button data-pick=" + nowObject.pick + (isOpen && !calendar.disabled(nowObject) ? "" : " disabled") + " " + _.ariaAttr({
            controls: calendar.$node[0].id
        })) + _.node("button", settings.clear, "btn-flat picker__clear", "type=button data-clear=1" + (isOpen ? "" : " disabled") + " " + _.ariaAttr({
            controls: calendar.$node[0].id
        })) + _.node("button", settings.close, "btn-flat picker__close", "type=button data-close=true " + (isOpen ? "" : " disabled") + " " + _.ariaAttr({
            controls: calendar.$node[0].id
        })), settings.klass.footer);
    }, DatePicker.defaults = function(prefix) {
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
                table: prefix + "table",
                header: prefix + "header",
                date_display: prefix + "date-display",
                day_display: prefix + "day-display",
                month_display: prefix + "month-display",
                year_display: prefix + "year-display",
                calendar_container: prefix + "calendar-container",
                navPrev: prefix + "nav--prev",
                navNext: prefix + "nav--next",
                navDisabled: prefix + "nav--disabled",
                month: prefix + "month",
                year: prefix + "year",
                selectMonth: prefix + "select--month",
                selectYear: prefix + "select--year",
                weekdays: prefix + "weekday",
                day: prefix + "day",
                disabled: prefix + "day--disabled",
                selected: prefix + "day--selected",
                highlighted: prefix + "day--highlighted",
                now: prefix + "day--today",
                infocus: prefix + "day--infocus",
                outfocus: prefix + "day--outfocus",
                footer: prefix + "footer",
                buttonClear: prefix + "button--clear",
                buttonToday: prefix + "button--today",
                buttonClose: prefix + "button--close"
            }
        };
    }(Picker.klasses().picker + "__"), Picker.extend("pickadate", DatePicker);
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
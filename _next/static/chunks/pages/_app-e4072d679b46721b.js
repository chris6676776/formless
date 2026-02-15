(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        6840: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n(6674)
            }])
        },
        9775: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return Button_Button
                }
            });
            var o, a = n(5893),
                s = n(7294),
                [l, u] = function(e = {}) {
                    let {
                        strict: t = !0,
                        errorMessage: n = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
                        name: o
                    } = e, a = s.createContext(void 0);
                    return a.displayName = o, [a.Provider, function useContext2() {
                        var e;
                        let o = s.useContext(a);
                        if (!o && t) {
                            let t = Error(n);
                            throw t.name = "ContextError", null == (e = Error.captureStackTrace) || e.call(Error, t, useContext2), t
                        }
                        return o
                    }, a]
                }({
                    name: "ButtonGroupContext",
                    strict: !1
                }),
                dataAttr = e => e ? "true" : void 0;
            let c = "undefined" != typeof document ? s.useLayoutEffect : () => {};

            function $8a9cb279dc87e130$export$525bc4921d56d4a(e) {
                return e.nativeEvent = e, e.isDefaultPrevented = () => e.defaultPrevented, e.isPropagationStopped = () => e.cancelBubble, e.persist = () => {}, e
            }

            function $8a9cb279dc87e130$export$715c682d09d639cc(e) {
                let t = (0, s.useRef)({
                    isFocused: !1,
                    observer: null
                });
                return c(() => {
                    let e = t.current;
                    return () => {
                        e.observer && (e.observer.disconnect(), e.observer = null)
                    }
                }, []), (0, s.useCallback)(n => {
                    if (n.target instanceof HTMLButtonElement || n.target instanceof HTMLInputElement || n.target instanceof HTMLTextAreaElement || n.target instanceof HTMLSelectElement) {
                        t.current.isFocused = !0;
                        let o = n.target;
                        o.addEventListener("focusout", n => {
                            if (t.current.isFocused = !1, o.disabled) {
                                let t = $8a9cb279dc87e130$export$525bc4921d56d4a(n);
                                null == e || e(t)
                            }
                            t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
                        }, {
                            once: !0
                        }), t.current.observer = new MutationObserver(() => {
                            if (t.current.isFocused && o.disabled) {
                                var e;
                                null === (e = t.current.observer) || void 0 === e || e.disconnect();
                                let n = o === document.activeElement ? null : document.activeElement;
                                o.dispatchEvent(new FocusEvent("blur", {
                                    relatedTarget: n
                                })), o.dispatchEvent(new FocusEvent("focusout", {
                                    bubbles: !0,
                                    relatedTarget: n
                                }))
                            }
                        }), t.current.observer.observe(o, {
                            attributes: !0,
                            attributeFilter: ["disabled"]
                        })
                    }
                }, [e])
            }

            function $c87311424ea30a05$var$testUserAgent(e) {
                var t;
                if ("undefined" == typeof window || null == window.navigator) return !1;
                let n = null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands;
                return Array.isArray(n) && n.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
            }

            function $c87311424ea30a05$var$testPlatform(e) {
                var t;
                return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
            }

            function $c87311424ea30a05$var$cached(e) {
                let t = null;
                return () => (null == t && (t = e()), t)
            }
            let d = $c87311424ea30a05$var$cached(function() {
                    return $c87311424ea30a05$var$testPlatform(/^Mac/i)
                }),
                f = $c87311424ea30a05$var$cached(function() {
                    return $c87311424ea30a05$var$testPlatform(/^iPhone/i)
                }),
                h = $c87311424ea30a05$var$cached(function() {
                    return $c87311424ea30a05$var$testPlatform(/^iPad/i) || d() && navigator.maxTouchPoints > 1
                }),
                m = $c87311424ea30a05$var$cached(function() {
                    return f() || h()
                });
            $c87311424ea30a05$var$cached(function() {
                return d() || m()
            });
            let g = $c87311424ea30a05$var$cached(function() {
                    return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !b()
                }),
                b = $c87311424ea30a05$var$cached(function() {
                    return $c87311424ea30a05$var$testUserAgent(/Chrome/i)
                }),
                x = $c87311424ea30a05$var$cached(function() {
                    return $c87311424ea30a05$var$testUserAgent(/Android/i)
                }),
                $ = $c87311424ea30a05$var$cached(function() {
                    return $c87311424ea30a05$var$testUserAgent(/Firefox/i)
                });

            function $7215afc6de606d6b$export$de79e2c695e052f3(e) {
                if (function() {
                        if (null == C) {
                            C = !1;
                            try {
                                document.createElement("div").focus({
                                    get preventScroll() {
                                        return C = !0, !0
                                    }
                                })
                            } catch {}
                        }
                        return C
                    }()) e.focus({
                    preventScroll: !0
                });
                else {
                    let t = function(e) {
                        let t = e.parentNode,
                            n = [],
                            o = document.scrollingElement || document.documentElement;
                        for (; t instanceof HTMLElement && t !== o;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
                            element: t,
                            scrollTop: t.scrollTop,
                            scrollLeft: t.scrollLeft
                        }), t = t.parentNode;
                        return o instanceof HTMLElement && n.push({
                            element: o,
                            scrollTop: o.scrollTop,
                            scrollLeft: o.scrollLeft
                        }), n
                    }(e);
                    e.focus(),
                        function(e) {
                            for (let {
                                    element: t,
                                    scrollTop: n,
                                    scrollLeft: o
                                } of e) t.scrollTop = n, t.scrollLeft = o
                        }(t)
                }
            }
            let C = null;

            function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(e, t, n = !0) {
                var o, a;
                let {
                    metaKey: s,
                    ctrlKey: l,
                    altKey: u,
                    shiftKey: c
                } = t;
                $() && (null === (a = window.event) || void 0 === a ? void 0 : null === (o = a.type) || void 0 === o ? void 0 : o.startsWith("key")) && "_blank" === e.target && (d() ? s = !0 : l = !0);
                let f = g() && d() && !h() ? new KeyboardEvent("keydown", {
                    keyIdentifier: "Enter",
                    metaKey: s,
                    ctrlKey: l,
                    altKey: u,
                    shiftKey: c
                }) : new MouseEvent("click", {
                    metaKey: s,
                    ctrlKey: l,
                    altKey: u,
                    shiftKey: c,
                    detail: 1,
                    bubbles: !0,
                    cancelable: !0
                });
                $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = n, $7215afc6de606d6b$export$de79e2c695e052f3(e), e.dispatchEvent(f), $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = !1
            }

            function $6a7db85432448f7f$export$60278871457622de(e) {
                return "" === e.pointerType && !!e.isTrusted || (x() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
            }
            $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = !1;
            let $431fbd86ca7dc216$export$b204af158042fbac = e => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
                },
                $431fbd86ca7dc216$export$f21a1ffae260145a = e => {
                    if (e && "window" in e && e.window === e) return e;
                    let t = $431fbd86ca7dc216$export$b204af158042fbac(e);
                    return t.defaultView || window
                },
                E = null,
                P = new Set,
                S = new Map,
                A = !1,
                T = !1,
                k = {
                    Tab: !0,
                    Escape: !0
                };

            function $507fabe10e71c6fb$var$triggerChangeHandlers(e, t) {
                for (let n of P) n(e, t)
            }

            function $507fabe10e71c6fb$var$handleKeyboardEvent(e) {
                A = !0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening || e.metaKey || !d() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key || (E = "keyboard", $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e))
            }

            function $507fabe10e71c6fb$var$handlePointerEvent(e) {
                E = "pointer", "pointerType" in e && e.pointerType, ("mousedown" === e.type || "pointerdown" === e.type) && (A = !0, $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e))
            }

            function $507fabe10e71c6fb$var$handleClickEvent(e) {
                !$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening && $6a7db85432448f7f$export$60278871457622de(e) && (A = !0, E = "virtual")
            }

            function $507fabe10e71c6fb$var$handleFocusEvent(e) {
                e.target !== window && e.target !== document && e.isTrusted && (A || T || (E = "virtual", $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e)), A = !1, T = !1)
            }

            function $507fabe10e71c6fb$var$handleWindowBlur() {
                A = !1, T = !0
            }

            function $507fabe10e71c6fb$var$setupGlobalFocusEvents(e) {
                if ("undefined" == typeof window || "undefined" == typeof document || S.get($431fbd86ca7dc216$export$f21a1ffae260145a(e))) return;
                let t = $431fbd86ca7dc216$export$f21a1ffae260145a(e),
                    n = $431fbd86ca7dc216$export$b204af158042fbac(e),
                    o = t.HTMLElement.prototype.focus;
                t.HTMLElement.prototype.focus = function() {
                    A = !0, o.apply(this, arguments)
                }, n.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, !0), n.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, !0), n.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, !0), t.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, !0), t.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, !1), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, !0), n.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, !0), n.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, !0)), t.addEventListener("beforeunload", () => {
                    $507fabe10e71c6fb$var$tearDownWindowFocusTracking(e)
                }, {
                    once: !0
                }), S.set(t, {
                    focus: o
                })
            }
            let $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (e, t) => {
                let n = $431fbd86ca7dc216$export$f21a1ffae260145a(e),
                    o = $431fbd86ca7dc216$export$b204af158042fbac(e);
                t && o.removeEventListener("DOMContentLoaded", t), S.has(n) && (n.HTMLElement.prototype.focus = S.get(n).focus, o.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, !0), o.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, !0), o.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, !0), n.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, !0), n.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, !1), "undefined" != typeof PointerEvent && (o.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, !0), o.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, !0), o.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, !0)), S.delete(n))
            };

            function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
                return "pointer" !== E
            }
            "undefined" != typeof document && function(e) {
                let t;
                let n = $431fbd86ca7dc216$export$b204af158042fbac(e);
                "loading" !== n.readyState ? $507fabe10e71c6fb$var$setupGlobalFocusEvents(e) : (t = () => {
                    $507fabe10e71c6fb$var$setupGlobalFocusEvents(e)
                }, n.addEventListener("DOMContentLoaded", t)), () => $507fabe10e71c6fb$var$tearDownWindowFocusTracking(e, t)
            }();
            let L = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

            function $d4ee10de306f2510$export$4282f70798064fe0(e, t) {
                return !!t && !!e && e.contains(t)
            }
            let $d4ee10de306f2510$export$cd4e5573fbe2b576 = (e = document) => e.activeElement;

            function $d4ee10de306f2510$export$e58f029f0fbfdb29(e) {
                return e.target
            }

            function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
                let e = (0, s.useRef)(new Map),
                    t = (0, s.useCallback)((t, n, o, a) => {
                        let s = (null == a ? void 0 : a.once) ? (...t) => {
                            e.current.delete(o), o(...t)
                        } : o;
                        e.current.set(o, {
                            type: n,
                            eventTarget: t,
                            fn: s,
                            options: a
                        }), t.addEventListener(n, s, a)
                    }, []),
                    n = (0, s.useCallback)((t, n, o, a) => {
                        var s;
                        let l = (null === (s = e.current.get(o)) || void 0 === s ? void 0 : s.fn) || o;
                        t.removeEventListener(n, l, a), e.current.delete(o)
                    }, []),
                    o = (0, s.useCallback)(() => {
                        e.current.forEach((e, t) => {
                            n(e.eventTarget, e.type, t, e.options)
                        })
                    }, [n]);
                return (0, s.useEffect)(() => o, [o]), {
                    addGlobalListener: t,
                    removeGlobalListener: n,
                    removeAllGlobalListeners: o
                }
            }

            function $ff5963eb1fccf552$export$e08e3b67e392101e(...e) {
                return (...t) => {
                    for (let n of e) "function" == typeof n && n(...t)
                }
            }
            "undefined" != typeof window && window.document && window.document.createElement;
            let M = new Map;
            "undefined" != typeof FinalizationRegistry && new FinalizationRegistry(e => {
                M.delete(e)
            });
            var dist_clsx = function() {
                for (var e, t, n = 0, o = "", a = arguments.length; n < a; n++)(e = arguments[n]) && (t = function r(e) {
                    var t, n, o = "";
                    if ("string" == typeof e || "number" == typeof e) o += e;
                    else if ("object" == typeof e) {
                        if (Array.isArray(e)) {
                            var a = e.length;
                            for (t = 0; t < a; t++) e[t] && (n = r(e[t])) && (o && (o += " "), o += n)
                        } else
                            for (n in e) e[n] && (o && (o += " "), o += n)
                    }
                    return o
                }(e)) && (o && (o += " "), o += t);
                return o
            };

            function $3ef42575df84b30b$export$9d1611c77c2fe928(...e) {
                let t = { ...e[0]
                };
                for (let n = 1; n < e.length; n++) {
                    let o = e[n];
                    for (let e in o) {
                        let n = t[e],
                            a = o[e];
                        "function" == typeof n && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? t[e] = $ff5963eb1fccf552$export$e08e3b67e392101e(n, a) : ("className" === e || "UNSAFE_className" === e) && "string" == typeof n && "string" == typeof a ? t[e] = dist_clsx(n, a) : "id" === e && n && a ? t.id = function(e, t) {
                            if (e === t) return e;
                            let n = M.get(e);
                            if (n) return n.forEach(e => e.current = t), t;
                            let o = M.get(t);
                            return o ? (o.forEach(t => t.current = e), e) : t
                        }(n, a) : t[e] = void 0 !== a ? a : n
                    }
                }
                return t
            }
            "undefined" != typeof window && window.document && window.document.createElement;
            var V = new Set(["id", "type", "style", "title", "role", "tabIndex", "htmlFor", "width", "height", "abbr", "accept", "acceptCharset", "accessKey", "action", "allowFullScreen", "allowTransparency", "alt", "async", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "challenge", "charset", "checked", "cite", "class", "className", "cols", "colSpan", "command", "content", "contentEditable", "contextMenu", "controls", "coords", "crossOrigin", "data", "dateTime", "default", "defer", "dir", "disabled", "download", "draggable", "dropzone", "encType", "for", "form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "headers", "hidden", "high", "href", "hrefLang", "httpEquiv", "icon", "inputMode", "isMap", "itemId", "itemProp", "itemRef", "itemScope", "itemType", "kind", "label", "lang", "list", "loop", "manifest", "max", "maxLength", "media", "mediaGroup", "method", "min", "minLength", "multiple", "muted", "name", "noValidate", "open", "optimum", "pattern", "ping", "placeholder", "poster", "preload", "radioGroup", "readOnly", "rel", "required", "rows", "rowSpan", "sandbox", "scope", "scoped", "scrolling", "seamless", "selected", "shape", "size", "sizes", "slot", "sortable", "span", "spellCheck", "src", "srcDoc", "srcSet", "start", "step", "target", "translate", "typeMustMatch", "useMap", "value", "wmode", "wrap"]),
                j = new Set(["onCopy", "onCut", "onPaste", "onLoad", "onError", "onWheel", "onScroll", "onCompositionEnd", "onCompositionStart", "onCompositionUpdate", "onKeyDown", "onKeyPress", "onKeyUp", "onFocus", "onBlur", "onChange", "onInput", "onSubmit", "onClick", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onPointerDown", "onPointerEnter", "onPointerLeave", "onPointerUp", "onSelect", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionEnd"]),
                R = /^(data-.*)$/,
                D = /^(aria-.*)$/,
                O = /^(on[A-Z].*)$/;

            function filterDOMProps(e, t = {}) {
                let {
                    labelable: n = !0,
                    enabled: o = !0,
                    propNames: a,
                    omitPropNames: s,
                    omitEventNames: l
                } = t, u = {};
                if (!o) return e;
                for (let t in e) !((null == s ? void 0 : s.has(t)) || (null == l ? void 0 : l.has(t)) && O.test(t) || O.test(t) && !j.has(t)) && (Object.prototype.hasOwnProperty.call(e, t) && (V.has(t) || n && D.test(t) || (null == a ? void 0 : a.has(t)) || R.test(t)) || O.test(t)) && (u[t] = e[t]);
                return u
            }
            var F = {
                    solid: {
                        default: "bg-default text-default-foreground",
                        primary: "bg-primary text-primary-foreground",
                        secondary: "bg-secondary text-secondary-foreground",
                        success: "bg-success text-success-foreground",
                        warning: "bg-warning text-warning-foreground",
                        danger: "bg-danger text-danger-foreground",
                        foreground: "bg-foreground text-background"
                    },
                    shadow: {
                        default: "shadow-lg shadow-default/50 bg-default text-default-foreground",
                        primary: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
                        secondary: "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
                        success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
                        warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
                        danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground",
                        foreground: "shadow-lg shadow-foreground/40 bg-foreground text-background"
                    },
                    bordered: {
                        default: "bg-transparent border-default text-foreground",
                        primary: "bg-transparent border-primary text-primary",
                        secondary: "bg-transparent border-secondary text-secondary",
                        success: "bg-transparent border-success text-success",
                        warning: "bg-transparent border-warning text-warning",
                        danger: "bg-transparent border-danger text-danger",
                        foreground: "bg-transparent border-foreground text-foreground"
                    },
                    flat: {
                        default: "bg-default/40 text-default-foreground",
                        primary: "bg-primary/20 text-primary",
                        secondary: "bg-secondary/20 text-secondary",
                        success: "bg-success/20 text-success-600 dark:text-success",
                        warning: "bg-warning/20 text-warning-600 dark:text-warning",
                        danger: "bg-danger/20 text-danger dark:text-danger-500",
                        foreground: "bg-foreground/10 text-foreground"
                    },
                    faded: {
                        default: "border-default bg-default-100 text-default-foreground",
                        primary: "border-default bg-default-100 text-primary",
                        secondary: "border-default bg-default-100 text-secondary",
                        success: "border-default bg-default-100 text-success",
                        warning: "border-default bg-default-100 text-warning",
                        danger: "border-default bg-default-100 text-danger",
                        foreground: "border-default bg-default-100 text-foreground"
                    },
                    light: {
                        default: "bg-transparent text-default-foreground",
                        primary: "bg-transparent text-primary",
                        secondary: "bg-transparent text-secondary",
                        success: "bg-transparent text-success",
                        warning: "bg-transparent text-warning",
                        danger: "bg-transparent text-danger",
                        foreground: "bg-transparent text-foreground"
                    },
                    ghost: {
                        default: "border-default text-default-foreground hover:!bg-default",
                        primary: "border-primary text-primary hover:!text-primary-foreground hover:!bg-primary",
                        secondary: "border-secondary text-secondary hover:text-secondary-foreground hover:!bg-secondary",
                        success: "border-success text-success hover:!text-success-foreground hover:!bg-success",
                        warning: "border-warning text-warning hover:!text-warning-foreground hover:!bg-warning",
                        danger: "border-danger text-danger hover:!text-danger-foreground hover:!bg-danger",
                        foreground: "border-foreground text-foreground hover:!bg-foreground"
                    }
                },
                B = ["0", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl", "1", "2", "3", "3.5", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "72", "80", "96"].map(e => `unit-${e}`),
                chunk_JXBJZR5A_l = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e,
                chunk_JXBJZR5A_u = e => !e || "object" != typeof e || 0 === Object.keys(e).length,
                chunk_JXBJZR5A_x = (e, t) => JSON.stringify(e) === JSON.stringify(t);

            function y(e) {
                let t = [];
                return function i(e, t) {
                    e.forEach(function(e) {
                        Array.isArray(e) ? i(e, t) : t.push(e)
                    })
                }(e, t), t
            }
            var chunk_JXBJZR5A_a = (...e) => y(e).filter(Boolean),
                p = (e, t) => {
                    let n = {},
                        o = Object.keys(e),
                        a = Object.keys(t);
                    for (let s of o)
                        if (a.includes(s)) {
                            let o = e[s],
                                a = t[s];
                            "object" == typeof o && "object" == typeof a ? n[s] = p(o, a) : Array.isArray(o) || Array.isArray(a) ? n[s] = chunk_JXBJZR5A_a(a, o) : n[s] = a + " " + o
                        } else n[s] = e[s];
                    for (let e of a) o.includes(e) || (n[e] = t[e]);
                    return n
                },
                chunk_JXBJZR5A_g = e => e && "string" == typeof e ? e.replace(/\s+/g, " ").trim() : e,
                W = /^\[(.+)\]$/;

            function getPart(e, t) {
                var n = e;
                return t.split("-").forEach(function(e) {
                    n.nextPart.has(e) || n.nextPart.set(e, {
                        nextPart: new Map,
                        validators: []
                    }), n = n.nextPart.get(e)
                }), n
            }
            var U = /\s+/;

            function twJoin() {
                for (var e, t, n = 0, o = ""; n < arguments.length;)(e = arguments[n++]) && (t = function toValue(e) {
                    if ("string" == typeof e) return e;
                    for (var t, n = "", o = 0; o < e.length; o++) e[o] && (t = toValue(e[o])) && (n && (n += " "), n += t);
                    return n
                }(e)) && (o && (o += " "), o += t);
                return o
            }

            function createTailwindMerge() {
                for (var e, t, n, o = arguments.length, a = Array(o), s = 0; s < o; s++) a[s] = arguments[s];
                var functionToCall = function(o) {
                    var s = a[0];
                    return t = (e = function(e) {
                        var t, n, o, a, s, l, u, c, d, f, h;
                        return {
                            cache: function(e) {
                                if (e < 1) return {
                                    get: function() {},
                                    set: function() {}
                                };
                                var t = 0,
                                    n = new Map,
                                    o = new Map;

                                function update(a, s) {
                                    n.set(a, s), ++t > e && (t = 0, o = n, n = new Map)
                                }
                                return {
                                    get: function(e) {
                                        var t = n.get(e);
                                        return void 0 !== t ? t : void 0 !== (t = o.get(e)) ? (update(e, t), t) : void 0
                                    },
                                    set: function(e, t) {
                                        n.has(e) ? n.set(e, t) : update(e, t)
                                    }
                                }
                            }(e.cacheSize),
                            splitModifiers: (n = 1 === (t = e.separator || ":").length, o = t[0], a = t.length, function(e) {
                                for (var s, l = [], u = 0, c = 0, d = 0; d < e.length; d++) {
                                    var f = e[d];
                                    if (0 === u) {
                                        if (f === o && (n || e.slice(d, d + a) === t)) {
                                            l.push(e.slice(c, d)), c = d + a;
                                            continue
                                        }
                                        if ("/" === f) {
                                            s = d;
                                            continue
                                        }
                                    }
                                    "[" === f ? u++ : "]" === f && u--
                                }
                                var h = 0 === l.length ? e : e.substring(c),
                                    m = h.startsWith("!"),
                                    g = m ? h.substring(1) : h;
                                return {
                                    modifiers: l,
                                    hasImportantModifier: m,
                                    baseClassName: g,
                                    maybePostfixModifierPosition: s && s > c ? s - c : void 0
                                }
                            }),
                            ...(c = e.theme, d = e.prefix, f = {
                                nextPart: new Map,
                                validators: []
                            }, (h = Object.entries(e.classGroups), d ? h.map(function(e) {
                                return [e[0], e[1].map(function(e) {
                                    return "string" == typeof e ? d + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(function(e) {
                                        return [d + e[0], e[1]]
                                    })) : e
                                })]
                            }) : h).forEach(function(e) {
                                var t = e[0];
                                (function processClassesRecursively(e, t, n, o) {
                                    e.forEach(function(e) {
                                        if ("string" == typeof e) {
                                            ("" === e ? t : getPart(t, e)).classGroupId = n;
                                            return
                                        }
                                        if ("function" == typeof e) {
                                            if (e.isThemeGetter) {
                                                processClassesRecursively(e(o), t, n, o);
                                                return
                                            }
                                            t.validators.push({
                                                validator: e,
                                                classGroupId: n
                                            });
                                            return
                                        }
                                        Object.entries(e).forEach(function(e) {
                                            var a = e[0];
                                            processClassesRecursively(e[1], getPart(t, a), n, o)
                                        })
                                    })
                                })(e[1], f, t, c)
                            }), s = e.conflictingClassGroups, u = void 0 === (l = e.conflictingClassGroupModifiers) ? {} : l, {
                                getClassGroupId: function(e) {
                                    var t = e.split("-");
                                    return "" === t[0] && 1 !== t.length && t.shift(),
                                        function getGroupRecursive(e, t) {
                                            if (0 === e.length) return t.classGroupId;
                                            var n = e[0],
                                                o = t.nextPart.get(n),
                                                a = o ? getGroupRecursive(e.slice(1), o) : void 0;
                                            if (a) return a;
                                            if (0 !== t.validators.length) {
                                                var s = e.join("-");
                                                return t.validators.find(function(e) {
                                                    return (0, e.validator)(s)
                                                }) ? .classGroupId
                                            }
                                        }(t, f) || function(e) {
                                            if (W.test(e)) {
                                                var t = W.exec(e)[1],
                                                    n = t ? .substring(0, t.indexOf(":"));
                                                if (n) return "arbitrary.." + n
                                            }
                                        }(e)
                                },
                                getConflictingClassGroupIds: function(e, t) {
                                    var n = s[e] || [];
                                    return t && u[e] ? [].concat(n, u[e]) : n
                                }
                            })
                        }
                    }(a.slice(1).reduce(function(e, t) {
                        return t(e)
                    }, s()))).cache.get, n = e.cache.set, functionToCall = tailwindMerge, tailwindMerge(o)
                };

                function tailwindMerge(o) {
                    var a, s, l, u, c, d = t(o);
                    if (d) return d;
                    var f = (s = (a = e).splitModifiers, l = a.getClassGroupId, u = a.getConflictingClassGroupIds, c = new Set, o.trim().split(U).map(function(e) {
                        var t = s(e),
                            n = t.modifiers,
                            o = t.hasImportantModifier,
                            a = t.baseClassName,
                            u = t.maybePostfixModifierPosition,
                            c = l(u ? a.substring(0, u) : a),
                            d = !!u;
                        if (!c) {
                            if (!u || !(c = l(a))) return {
                                isTailwindClass: !1,
                                originalClassName: e
                            };
                            d = !1
                        }
                        var f = (function(e) {
                            if (e.length <= 1) return e;
                            var t = [],
                                n = [];
                            return e.forEach(function(e) {
                                "[" === e[0] ? (t.push.apply(t, n.sort().concat([e])), n = []) : n.push(e)
                            }), t.push.apply(t, n.sort()), t
                        })(n).join(":");
                        return {
                            isTailwindClass: !0,
                            modifierId: o ? f + "!" : f,
                            classGroupId: c,
                            originalClassName: e,
                            hasPostfixModifier: d
                        }
                    }).reverse().filter(function(e) {
                        if (!e.isTailwindClass) return !0;
                        var t = e.modifierId,
                            n = e.classGroupId,
                            o = e.hasPostfixModifier,
                            a = t + n;
                        return !c.has(a) && (c.add(a), u(n, o).forEach(function(e) {
                            return c.add(t + e)
                        }), !0)
                    }).reverse().map(function(e) {
                        return e.originalClassName
                    }).join(" "));
                    return n(o, f), f
                }
                return function() {
                    return functionToCall(twJoin.apply(null, arguments))
                }
            }

            function fromTheme(e) {
                var themeGetter = function(t) {
                    return t[e] || []
                };
                return themeGetter.isThemeGetter = !0, themeGetter
            }
            var X = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                J = /^\d+\/\d+$/,
                q = new Set(["px", "full", "screen"]),
                Y = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                Q = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                et = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;

            function isLength(e) {
                return isNumber(e) || q.has(e) || J.test(e) || isArbitraryLength(e)
            }

            function isArbitraryLength(e) {
                return getIsArbitraryValue(e, "length", isLengthOnly)
            }

            function isArbitrarySize(e) {
                return getIsArbitraryValue(e, "size", isNever)
            }

            function isArbitraryPosition(e) {
                return getIsArbitraryValue(e, "position", isNever)
            }

            function isArbitraryUrl(e) {
                return getIsArbitraryValue(e, "url", isUrl)
            }

            function isArbitraryNumber(e) {
                return getIsArbitraryValue(e, "number", isNumber)
            }

            function isNumber(e) {
                return !Number.isNaN(Number(e))
            }

            function isPercent(e) {
                return e.endsWith("%") && isNumber(e.slice(0, -1))
            }

            function isInteger(e) {
                return isIntegerOnly(e) || getIsArbitraryValue(e, "number", isIntegerOnly)
            }

            function isArbitraryValue(e) {
                return X.test(e)
            }

            function isAny() {
                return !0
            }

            function isTshirtSize(e) {
                return Y.test(e)
            }

            function isArbitraryShadow(e) {
                return getIsArbitraryValue(e, "", isShadow)
            }

            function getIsArbitraryValue(e, t, n) {
                var o = X.exec(e);
                return !!o && (o[1] ? o[1] === t : n(o[2]))
            }

            function isLengthOnly(e) {
                return Q.test(e)
            }

            function isNever() {
                return !1
            }

            function isUrl(e) {
                return e.startsWith("url(")
            }

            function isIntegerOnly(e) {
                return Number.isInteger(Number(e))
            }

            function isShadow(e) {
                return et.test(e)
            }

            function getDefaultConfig() {
                var e = fromTheme("colors"),
                    t = fromTheme("spacing"),
                    n = fromTheme("blur"),
                    o = fromTheme("brightness"),
                    a = fromTheme("borderColor"),
                    s = fromTheme("borderRadius"),
                    l = fromTheme("borderSpacing"),
                    u = fromTheme("borderWidth"),
                    c = fromTheme("contrast"),
                    d = fromTheme("grayscale"),
                    f = fromTheme("hueRotate"),
                    h = fromTheme("invert"),
                    m = fromTheme("gap"),
                    g = fromTheme("gradientColorStops"),
                    b = fromTheme("gradientColorStopPositions"),
                    x = fromTheme("inset"),
                    $ = fromTheme("margin"),
                    C = fromTheme("opacity"),
                    E = fromTheme("padding"),
                    P = fromTheme("saturate"),
                    S = fromTheme("scale"),
                    A = fromTheme("sepia"),
                    T = fromTheme("skew"),
                    k = fromTheme("space"),
                    L = fromTheme("translate"),
                    getOverscroll = function() {
                        return ["auto", "contain", "none"]
                    },
                    getOverflow = function() {
                        return ["auto", "hidden", "clip", "visible", "scroll"]
                    },
                    getSpacingWithAutoAndArbitrary = function() {
                        return ["auto", isArbitraryValue, t]
                    },
                    getSpacingWithArbitrary = function() {
                        return [isArbitraryValue, t]
                    },
                    getLengthWithEmpty = function() {
                        return ["", isLength]
                    },
                    getNumberWithAutoAndArbitrary = function() {
                        return ["auto", isNumber, isArbitraryValue]
                    },
                    getPositions = function() {
                        return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
                    },
                    getLineStyles = function() {
                        return ["solid", "dashed", "dotted", "double", "none"]
                    },
                    getBlendModes = function() {
                        return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"]
                    },
                    getAlign = function() {
                        return ["start", "end", "center", "between", "around", "evenly", "stretch"]
                    },
                    getZeroAndEmpty = function() {
                        return ["", "0", isArbitraryValue]
                    },
                    getBreaks = function() {
                        return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
                    },
                    getNumber = function() {
                        return [isNumber, isArbitraryNumber]
                    },
                    getNumberAndArbitrary = function() {
                        return [isNumber, isArbitraryValue]
                    };
                return {
                    cacheSize: 500,
                    theme: {
                        colors: [isAny],
                        spacing: [isLength],
                        blur: ["none", "", isTshirtSize, isArbitraryValue],
                        brightness: getNumber(),
                        borderColor: [e],
                        borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
                        borderSpacing: getSpacingWithArbitrary(),
                        borderWidth: getLengthWithEmpty(),
                        contrast: getNumber(),
                        grayscale: getZeroAndEmpty(),
                        hueRotate: getNumberAndArbitrary(),
                        invert: getZeroAndEmpty(),
                        gap: getSpacingWithArbitrary(),
                        gradientColorStops: [e],
                        gradientColorStopPositions: [isPercent, isArbitraryLength],
                        inset: getSpacingWithAutoAndArbitrary(),
                        margin: getSpacingWithAutoAndArbitrary(),
                        opacity: getNumber(),
                        padding: getSpacingWithArbitrary(),
                        saturate: getNumber(),
                        scale: getNumber(),
                        sepia: getZeroAndEmpty(),
                        skew: getNumberAndArbitrary(),
                        space: getSpacingWithArbitrary(),
                        translate: getSpacingWithArbitrary()
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", "video", isArbitraryValue]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [isTshirtSize]
                        }],
                        "break-after": [{
                            "break-after": getBreaks()
                        }],
                        "break-before": [{
                            "break-before": getBreaks()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        float: [{
                            float: ["right", "left", "none"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: [].concat(getPositions(), [isArbitraryValue])
                        }],
                        overflow: [{
                            overflow: getOverflow()
                        }],
                        "overflow-x": [{
                            "overflow-x": getOverflow()
                        }],
                        "overflow-y": [{
                            "overflow-y": getOverflow()
                        }],
                        overscroll: [{
                            overscroll: getOverscroll()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": getOverscroll()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": getOverscroll()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: [x]
                        }],
                        "inset-x": [{
                            "inset-x": [x]
                        }],
                        "inset-y": [{
                            "inset-y": [x]
                        }],
                        start: [{
                            start: [x]
                        }],
                        end: [{
                            end: [x]
                        }],
                        top: [{
                            top: [x]
                        }],
                        right: [{
                            right: [x]
                        }],
                        bottom: [{
                            bottom: [x]
                        }],
                        left: [{
                            left: [x]
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: ["auto", isInteger]
                        }],
                        basis: [{
                            basis: getSpacingWithAutoAndArbitrary()
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["wrap", "wrap-reverse", "nowrap"]
                        }],
                        flex: [{
                            flex: ["1", "auto", "initial", "none", isArbitraryValue]
                        }],
                        grow: [{
                            grow: getZeroAndEmpty()
                        }],
                        shrink: [{
                            shrink: getZeroAndEmpty()
                        }],
                        order: [{
                            order: ["first", "last", "none", isInteger]
                        }],
                        "grid-cols": [{
                            "grid-cols": [isAny]
                        }],
                        "col-start-end": [{
                            col: ["auto", {
                                span: ["full", isInteger]
                            }, isArbitraryValue]
                        }],
                        "col-start": [{
                            "col-start": getNumberWithAutoAndArbitrary()
                        }],
                        "col-end": [{
                            "col-end": getNumberWithAutoAndArbitrary()
                        }],
                        "grid-rows": [{
                            "grid-rows": [isAny]
                        }],
                        "row-start-end": [{
                            row: ["auto", {
                                span: [isInteger]
                            }, isArbitraryValue]
                        }],
                        "row-start": [{
                            "row-start": getNumberWithAutoAndArbitrary()
                        }],
                        "row-end": [{
                            "row-end": getNumberWithAutoAndArbitrary()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
                        }],
                        "auto-rows": [{
                            "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
                        }],
                        gap: [{
                            gap: [m]
                        }],
                        "gap-x": [{
                            "gap-x": [m]
                        }],
                        "gap-y": [{
                            "gap-y": [m]
                        }],
                        "justify-content": [{
                            justify: ["normal"].concat(getAlign())
                        }],
                        "justify-items": [{
                            "justify-items": ["start", "end", "center", "stretch"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        "align-content": [{
                            content: ["normal"].concat(getAlign(), ["baseline"])
                        }],
                        "align-items": [{
                            items: ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "align-self": [{
                            self: ["auto", "start", "end", "center", "stretch", "baseline"]
                        }],
                        "place-content": [{
                            "place-content": [].concat(getAlign(), ["baseline"])
                        }],
                        "place-items": [{
                            "place-items": ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        p: [{
                            p: [E]
                        }],
                        px: [{
                            px: [E]
                        }],
                        py: [{
                            py: [E]
                        }],
                        ps: [{
                            ps: [E]
                        }],
                        pe: [{
                            pe: [E]
                        }],
                        pt: [{
                            pt: [E]
                        }],
                        pr: [{
                            pr: [E]
                        }],
                        pb: [{
                            pb: [E]
                        }],
                        pl: [{
                            pl: [E]
                        }],
                        m: [{
                            m: [$]
                        }],
                        mx: [{
                            mx: [$]
                        }],
                        my: [{
                            my: [$]
                        }],
                        ms: [{
                            ms: [$]
                        }],
                        me: [{
                            me: [$]
                        }],
                        mt: [{
                            mt: [$]
                        }],
                        mr: [{
                            mr: [$]
                        }],
                        mb: [{
                            mb: [$]
                        }],
                        ml: [{
                            ml: [$]
                        }],
                        "space-x": [{
                            "space-x": [k]
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": [k]
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{
                            w: ["auto", "min", "max", "fit", isArbitraryValue, t]
                        }],
                        "min-w": [{
                            "min-w": ["min", "max", "fit", isArbitraryValue, isLength]
                        }],
                        "max-w": [{
                            "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
                                screen: [isTshirtSize]
                            }, isTshirtSize, isArbitraryValue]
                        }],
                        h: [{
                            h: [isArbitraryValue, t, "auto", "min", "max", "fit"]
                        }],
                        "min-h": [{
                            "min-h": ["min", "max", "fit", isArbitraryValue, isLength]
                        }],
                        "max-h": [{
                            "max-h": [isArbitraryValue, t, "min", "max", "fit"]
                        }],
                        "font-size": [{
                            text: ["base", isTshirtSize, isArbitraryLength]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
                        }],
                        "font-family": [{
                            font: [isAny]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                        tracking: [{
                            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
                        }],
                        "line-clamp": [{
                            "line-clamp": ["none", isNumber, isArbitraryNumber]
                        }],
                        leading: [{
                            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isArbitraryValue, isLength]
                        }],
                        "list-image": [{
                            "list-image": ["none", isArbitraryValue]
                        }],
                        "list-style-type": [{
                            list: ["none", "disc", "decimal", isArbitraryValue]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "placeholder-color": [{
                            placeholder: [e]
                        }],
                        "placeholder-opacity": [{
                            "placeholder-opacity": [C]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "text-color": [{
                            text: [e]
                        }],
                        "text-opacity": [{
                            "text-opacity": [C]
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [].concat(getLineStyles(), ["wavy"])
                        }],
                        "text-decoration-thickness": [{
                            decoration: ["auto", "from-font", isLength]
                        }],
                        "underline-offset": [{
                            "underline-offset": ["auto", isArbitraryValue, isLength]
                        }],
                        "text-decoration-color": [{
                            decoration: [e]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        indent: [{
                            indent: getSpacingWithArbitrary()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", isArbitraryValue]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-opacity": [{
                            "bg-opacity": [C]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: [].concat(getPositions(), [isArbitraryPosition])
                        }],
                        "bg-repeat": [{
                            bg: ["no-repeat", {
                                repeat: ["", "x", "y", "round", "space"]
                            }]
                        }],
                        "bg-size": [{
                            bg: ["auto", "cover", "contain", isArbitrarySize]
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, isArbitraryUrl]
                        }],
                        "bg-color": [{
                            bg: [e]
                        }],
                        "gradient-from-pos": [{
                            from: [b]
                        }],
                        "gradient-via-pos": [{
                            via: [b]
                        }],
                        "gradient-to-pos": [{
                            to: [b]
                        }],
                        "gradient-from": [{
                            from: [g]
                        }],
                        "gradient-via": [{
                            via: [g]
                        }],
                        "gradient-to": [{
                            to: [g]
                        }],
                        rounded: [{
                            rounded: [s]
                        }],
                        "rounded-s": [{
                            "rounded-s": [s]
                        }],
                        "rounded-e": [{
                            "rounded-e": [s]
                        }],
                        "rounded-t": [{
                            "rounded-t": [s]
                        }],
                        "rounded-r": [{
                            "rounded-r": [s]
                        }],
                        "rounded-b": [{
                            "rounded-b": [s]
                        }],
                        "rounded-l": [{
                            "rounded-l": [s]
                        }],
                        "rounded-ss": [{
                            "rounded-ss": [s]
                        }],
                        "rounded-se": [{
                            "rounded-se": [s]
                        }],
                        "rounded-ee": [{
                            "rounded-ee": [s]
                        }],
                        "rounded-es": [{
                            "rounded-es": [s]
                        }],
                        "rounded-tl": [{
                            "rounded-tl": [s]
                        }],
                        "rounded-tr": [{
                            "rounded-tr": [s]
                        }],
                        "rounded-br": [{
                            "rounded-br": [s]
                        }],
                        "rounded-bl": [{
                            "rounded-bl": [s]
                        }],
                        "border-w": [{
                            border: [u]
                        }],
                        "border-w-x": [{
                            "border-x": [u]
                        }],
                        "border-w-y": [{
                            "border-y": [u]
                        }],
                        "border-w-s": [{
                            "border-s": [u]
                        }],
                        "border-w-e": [{
                            "border-e": [u]
                        }],
                        "border-w-t": [{
                            "border-t": [u]
                        }],
                        "border-w-r": [{
                            "border-r": [u]
                        }],
                        "border-w-b": [{
                            "border-b": [u]
                        }],
                        "border-w-l": [{
                            "border-l": [u]
                        }],
                        "border-opacity": [{
                            "border-opacity": [C]
                        }],
                        "border-style": [{
                            border: [].concat(getLineStyles(), ["hidden"])
                        }],
                        "divide-x": [{
                            "divide-x": [u]
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": [u]
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{
                            "divide-opacity": [C]
                        }],
                        "divide-style": [{
                            divide: getLineStyles()
                        }],
                        "border-color": [{
                            border: [a]
                        }],
                        "border-color-x": [{
                            "border-x": [a]
                        }],
                        "border-color-y": [{
                            "border-y": [a]
                        }],
                        "border-color-t": [{
                            "border-t": [a]
                        }],
                        "border-color-r": [{
                            "border-r": [a]
                        }],
                        "border-color-b": [{
                            "border-b": [a]
                        }],
                        "border-color-l": [{
                            "border-l": [a]
                        }],
                        "divide-color": [{
                            divide: [a]
                        }],
                        "outline-style": [{
                            outline: [""].concat(getLineStyles())
                        }],
                        "outline-offset": [{
                            "outline-offset": [isArbitraryValue, isLength]
                        }],
                        "outline-w": [{
                            outline: [isLength]
                        }],
                        "outline-color": [{
                            outline: [e]
                        }],
                        "ring-w": [{
                            ring: getLengthWithEmpty()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: [e]
                        }],
                        "ring-opacity": [{
                            "ring-opacity": [C]
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [isLength]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": [e]
                        }],
                        shadow: [{
                            shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
                        }],
                        "shadow-color": [{
                            shadow: [isAny]
                        }],
                        opacity: [{
                            opacity: [C]
                        }],
                        "mix-blend": [{
                            "mix-blend": getBlendModes()
                        }],
                        "bg-blend": [{
                            "bg-blend": getBlendModes()
                        }],
                        filter: [{
                            filter: ["", "none"]
                        }],
                        blur: [{
                            blur: [n]
                        }],
                        brightness: [{
                            brightness: [o]
                        }],
                        contrast: [{
                            contrast: [c]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
                        }],
                        grayscale: [{
                            grayscale: [d]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [f]
                        }],
                        invert: [{
                            invert: [h]
                        }],
                        saturate: [{
                            saturate: [P]
                        }],
                        sepia: [{
                            sepia: [A]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none"]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": [n]
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [o]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [c]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": [d]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [f]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": [h]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [C]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [P]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": [A]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": [l]
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": [l]
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": [l]
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
                        }],
                        duration: [{
                            duration: getNumberAndArbitrary()
                        }],
                        ease: [{
                            ease: ["linear", "in", "out", "in-out", isArbitraryValue]
                        }],
                        delay: [{
                            delay: getNumberAndArbitrary()
                        }],
                        animate: [{
                            animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
                        }],
                        transform: [{
                            transform: ["", "gpu", "none"]
                        }],
                        scale: [{
                            scale: [S]
                        }],
                        "scale-x": [{
                            "scale-x": [S]
                        }],
                        "scale-y": [{
                            "scale-y": [S]
                        }],
                        rotate: [{
                            rotate: [isInteger, isArbitraryValue]
                        }],
                        "translate-x": [{
                            "translate-x": [L]
                        }],
                        "translate-y": [{
                            "translate-y": [L]
                        }],
                        "skew-x": [{
                            "skew-x": [T]
                        }],
                        "skew-y": [{
                            "skew-y": [T]
                        }],
                        "transform-origin": [{
                            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
                        }],
                        accent: [{
                            accent: ["auto", e]
                        }],
                        appearance: ["appearance-none"],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
                        }],
                        "caret-color": [{
                            caret: [e]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["none", "auto"]
                        }],
                        resize: [{
                            resize: ["none", "y", "x", ""]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": getSpacingWithArbitrary()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": getSpacingWithArbitrary()
                        }],
                        "scroll-my": [{
                            "scroll-my": getSpacingWithArbitrary()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": getSpacingWithArbitrary()
                        }],
                        "scroll-me": [{
                            "scroll-me": getSpacingWithArbitrary()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": getSpacingWithArbitrary()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": getSpacingWithArbitrary()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": getSpacingWithArbitrary()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": getSpacingWithArbitrary()
                        }],
                        "scroll-p": [{
                            "scroll-p": getSpacingWithArbitrary()
                        }],
                        "scroll-px": [{
                            "scroll-px": getSpacingWithArbitrary()
                        }],
                        "scroll-py": [{
                            "scroll-py": getSpacingWithArbitrary()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": getSpacingWithArbitrary()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": getSpacingWithArbitrary()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": getSpacingWithArbitrary()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": getSpacingWithArbitrary()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": getSpacingWithArbitrary()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": getSpacingWithArbitrary()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "pinch-zoom", "manipulation", {
                                pan: ["x", "left", "right", "y", "up", "down"]
                            }]
                        }],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
                        }],
                        fill: [{
                            fill: [e, "none"]
                        }],
                        "stroke-w": [{
                            stroke: [isLength, isArbitraryNumber]
                        }],
                        stroke: [{
                            stroke: [e, "none"]
                        }],
                        sr: ["sr-only", "not-sr-only"]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    }
                }
            }
            var er = createTailwindMerge(getDefaultConfig),
                en = Object.prototype.hasOwnProperty,
                ei = new Set(["string", "number", "boolean"]),
                eo = {
                    twMerge: !0,
                    twMergeConfig: {},
                    responsiveVariants: !1
                },
                _ = e => e || void 0,
                N = (...e) => _(y(e).filter(Boolean).join(" ")),
                ea = null,
                es = {},
                el = !1,
                w = (...e) => t => t.twMerge ? ((!ea || el) && (el = !1, ea = chunk_JXBJZR5A_u(es) ? er : function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                    return "function" == typeof e ? createTailwindMerge.apply(void 0, [getDefaultConfig, e].concat(n)) : createTailwindMerge.apply(void 0, [function() {
                        return function(e, t) {
                            for (var n in t)(function mergePropertyRecursively(e, t, n) {
                                if (!en.call(e, t) || ei.has(typeof n) || null === n) {
                                    e[t] = n;
                                    return
                                }
                                if (Array.isArray(n) && Array.isArray(e[t])) {
                                    e[t] = e[t].concat(n);
                                    return
                                }
                                if ("object" == typeof n && "object" == typeof e[t]) {
                                    if (null === e[t]) {
                                        e[t] = n;
                                        return
                                    }
                                    for (var o in n) mergePropertyRecursively(e[t], o, n[o])
                                }
                            })(e, n, t[n]);
                            return e
                        }(getDefaultConfig(), e)
                    }].concat(n))
                }(es)), _(ea(N(e)))) : N(e),
                Z = (e, t) => {
                    for (let n in t) e.hasOwnProperty(n) ? e[n] = N(e[n], t[n]) : e[n] = t[n];
                    return e
                },
                ie = (e, t) => {
                    let {
                        extend: n = null,
                        slots: o = {},
                        variants: a = {},
                        compoundVariants: s = [],
                        compoundSlots: l = [],
                        defaultVariants: u = {}
                    } = e, c = { ...eo,
                        ...t
                    }, d = null != n && n.base ? N(n.base, null == e ? void 0 : e.base) : null == e ? void 0 : e.base, f = null != n && n.variants && !chunk_JXBJZR5A_u(n.variants) ? p(a, n.variants) : a, h = null != n && n.defaultVariants && !chunk_JXBJZR5A_u(n.defaultVariants) ? { ...n.defaultVariants,
                        ...u
                    } : u;
                    chunk_JXBJZR5A_u(c.twMergeConfig) || chunk_JXBJZR5A_x(c.twMergeConfig, es) || (el = !0, es = c.twMergeConfig);
                    let m = chunk_JXBJZR5A_u(null == n ? void 0 : n.slots),
                        g = chunk_JXBJZR5A_u(o) ? {} : {
                            base: N(null == e ? void 0 : e.base, m && (null == n ? void 0 : n.base)),
                            ...o
                        },
                        b = m ? g : Z({ ...null == n ? void 0 : n.slots
                        }, chunk_JXBJZR5A_u(g) ? {
                            base: null == e ? void 0 : e.base
                        } : g),
                        v = e => {
                            if (chunk_JXBJZR5A_u(f) && chunk_JXBJZR5A_u(o) && m) return w(d, null == e ? void 0 : e.class, null == e ? void 0 : e.className)(c);
                            if (s && !Array.isArray(s)) throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof s}`);
                            if (l && !Array.isArray(l)) throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof l}`);
                            let K = (e, t, n = [], o) => {
                                    let a = n;
                                    if ("string" == typeof t) a = a.concat(chunk_JXBJZR5A_g(t).split(" ").map(t => `${e}:${t}`));
                                    else if (Array.isArray(t)) a = a.concat(t.reduce((t, n) => t.concat(`${e}:${n}`), []));
                                    else if ("object" == typeof t && "string" == typeof o) {
                                        for (let n in t)
                                            if (t.hasOwnProperty(n) && n === o) {
                                                let s = t[n];
                                                if (s && "string" == typeof s) {
                                                    let t = chunk_JXBJZR5A_g(s);
                                                    a[o] ? a[o] = a[o].concat(t.split(" ").map(t => `${e}:${t}`)) : a[o] = t.split(" ").map(t => `${e}:${t}`)
                                                } else Array.isArray(s) && s.length > 0 && (a[o] = s.reduce((t, n) => t.concat(`${e}:${n}`), []))
                                            }
                                    }
                                    return a
                                },
                                z = (t, n = f, o = null, a = null) => {
                                    var s;
                                    let l = n[t];
                                    if (!l || chunk_JXBJZR5A_u(l)) return null;
                                    let u = null != (s = null == a ? void 0 : a[t]) ? s : null == e ? void 0 : e[t];
                                    if (null === u) return null;
                                    let d = chunk_JXBJZR5A_l(u),
                                        m = Array.isArray(c.responsiveVariants) && c.responsiveVariants.length > 0 || !0 === c.responsiveVariants,
                                        g = null == h ? void 0 : h[t],
                                        b = [];
                                    if ("object" == typeof d && m)
                                        for (let [e, t] of Object.entries(d)) {
                                            let n = l[t];
                                            if ("initial" === e) {
                                                g = t;
                                                continue
                                            }
                                            Array.isArray(c.responsiveVariants) && !c.responsiveVariants.includes(e) || (b = K(e, n, b, o))
                                        }
                                    let x = l[d] || l[chunk_JXBJZR5A_l(g)];
                                    return "object" == typeof b && "string" == typeof o && b[o] ? Z(b, x) : b.length > 0 ? (b.push(x), b) : x
                                },
                                p = (e, t) => {
                                    if (!f || "object" != typeof f) return null;
                                    let n = [];
                                    for (let o in f) {
                                        let a = z(o, f, e, t),
                                            s = "base" === e && "string" == typeof a ? a : a && a[e];
                                        s && (n[n.length] = s)
                                    }
                                    return n
                                },
                                t = {};
                            for (let n in e) void 0 !== e[n] && (t[n] = e[n]);
                            let G = (n, o) => {
                                    var a;
                                    let s = "object" == typeof(null == e ? void 0 : e[n]) ? {
                                        [n]: null == (a = e[n]) ? void 0 : a.initial
                                    } : {};
                                    return { ...h,
                                        ...t,
                                        ...s,
                                        ...o
                                    }
                                },
                                H = (e = [], t) => {
                                    let n = [];
                                    for (let {
                                            class: o,
                                            className: a,
                                            ...s
                                        } of e) {
                                        let e = !0;
                                        for (let [n, o] of Object.entries(s)) {
                                            let a = G(n, t);
                                            if (Array.isArray(o)) {
                                                if (!o.includes(a[n])) {
                                                    e = !1;
                                                    break
                                                }
                                            } else if (a[n] !== o) {
                                                e = !1;
                                                break
                                            }
                                        }
                                        e && (o && n.push(o), a && n.push(a))
                                    }
                                    return n
                                },
                                I = e => {
                                    let t = H(s, e);
                                    return chunk_JXBJZR5A_a(H(null == n ? void 0 : n.compoundVariants, e), t)
                                },
                                ee = e => {
                                    let t = I(e);
                                    if (!Array.isArray(t)) return t;
                                    let n = {};
                                    for (let e of t)
                                        if ("string" == typeof e && (n.base = w(n.base, e)(c)), "object" == typeof e)
                                            for (let [t, o] of Object.entries(e)) n[t] = w(n[t], o)(c);
                                    return n
                                },
                                te = e => {
                                    if (l.length < 1) return null;
                                    let t = {};
                                    for (let {
                                            slots: n = [],
                                            class: o,
                                            className: a,
                                            ...s
                                        } of l) {
                                        if (!chunk_JXBJZR5A_u(s)) {
                                            let t = !0;
                                            for (let n of Object.keys(s)) {
                                                let o = G(n, e)[n];
                                                if (void 0 === o || (Array.isArray(s[n]) ? !s[n].includes(o) : s[n] !== o)) {
                                                    t = !1;
                                                    break
                                                }
                                            }
                                            if (!t) continue
                                        }
                                        for (let e of n) t[e] = t[e] || [], t[e].push([o, a])
                                    }
                                    return t
                                };
                            if (!chunk_JXBJZR5A_u(o) || !m) {
                                let e = {};
                                if ("object" == typeof b && !chunk_JXBJZR5A_u(b))
                                    for (let t of Object.keys(b)) e[t] = e => {
                                        var n, o;
                                        return w(b[t], p(t, e), (null != (n = ee(e)) ? n : [])[t], (null != (o = te(e)) ? o : [])[t], null == e ? void 0 : e.class, null == e ? void 0 : e.className)(c)
                                    };
                                return e
                            }
                            return w(d, f ? Object.keys(f).map(e => z(e, f)) : null, I(), null == e ? void 0 : e.class, null == e ? void 0 : e.className)(c)
                        };
                    return v.variantKeys = (() => {
                        if (!(!f || "object" != typeof f)) return Object.keys(f)
                    })(), v.extend = n, v.base = d, v.slots = b, v.variants = f, v.defaultVariants = h, v.compoundSlots = l, v.compoundVariants = s, v
                },
                eu = ["small", "medium", "large"],
                tv = (e, t) => {
                    var n, o, a;
                    return ie(e, { ...t,
                        twMerge: null == (n = null == t ? void 0 : t.twMerge) || n,
                        twMergeConfig: { ...null == t ? void 0 : t.twMergeConfig,
                            theme: { ...null == (o = null == t ? void 0 : t.twMergeConfig) ? void 0 : o.theme,
                                opacity: ["disabled"],
                                spacing: ["divider", "unit", ...B],
                                borderWidth: eu,
                                borderRadius: eu
                            },
                            classGroups: { ...null == (a = null == t ? void 0 : t.twMergeConfig) ? void 0 : a.classGroups,
                                shadow: [{
                                    shadow: eu
                                }],
                                "font-size": [{
                                    text: ["tiny", ...eu]
                                }],
                                "bg-image": ["bg-stripe-gradient"],
                                "min-w": [{
                                    "min-w": ["unit", ...B]
                                }],
                                "min-h": [{
                                    "min-h": ["unit", ...B]
                                }]
                            }
                        }
                    })
                },
                ec = tv({
                    base: ["z-0", "group", "relative", "inline-flex", "items-center", "justify-center", "box-border", "appearance-none", "outline-none", "select-none", "whitespace-nowrap", "min-w-max", "font-normal", "subpixel-antialiased", "overflow-hidden", "tap-highlight-transparent", "outline-none", "data-[focus-visible=true]:z-10", "data-[focus-visible=true]:outline-2", "data-[focus-visible=true]:outline-focus", "data-[focus-visible=true]:outline-offset-2"],
                    variants: {
                        variant: {
                            solid: "",
                            bordered: "border-medium bg-transparent",
                            light: "bg-transparent",
                            flat: "",
                            faded: "border-medium",
                            shadow: "",
                            ghost: "border-medium bg-transparent"
                        },
                        size: {
                            sm: "px-unit-3 min-w-unit-16 h-unit-8 text-tiny gap-unit-2 rounded-small",
                            md: "px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium",
                            lg: "px-unit-6 min-w-unit-24 h-unit-12 text-medium gap-unit-3 rounded-large"
                        },
                        color: {
                            default: "",
                            primary: "",
                            secondary: "",
                            success: "",
                            warning: "",
                            danger: ""
                        },
                        radius: {
                            none: "rounded-none",
                            sm: "rounded-small",
                            md: "rounded-medium",
                            lg: "rounded-large",
                            full: "rounded-full"
                        },
                        fullWidth: {
                            true: "w-full"
                        },
                        isDisabled: {
                            true: "opacity-disabled pointer-events-none"
                        },
                        isInGroup: {
                            true: "[&:not(:first-child):not(:last-child)]:rounded-none"
                        },
                        isIconOnly: {
                            true: "px-unit-0 !gap-unit-0",
                            false: "[&>svg]:max-w-[theme(spacing.unit-8)]"
                        },
                        disableAnimation: {
                            true: "!transition-none",
                            false: "data-[pressed=true]:scale-[0.97] transition-transform-colors motion-reduce:transition-none"
                        }
                    },
                    defaultVariants: {
                        size: "md",
                        variant: "solid",
                        color: "default",
                        fullWidth: !1,
                        isDisabled: !1,
                        isInGroup: !1,
                        disableAnimation: !1
                    },
                    compoundVariants: [{
                        variant: "solid",
                        color: "default",
                        class: F.solid.default
                    }, {
                        variant: "solid",
                        color: "primary",
                        class: F.solid.primary
                    }, {
                        variant: "solid",
                        color: "secondary",
                        class: F.solid.secondary
                    }, {
                        variant: "solid",
                        color: "success",
                        class: F.solid.success
                    }, {
                        variant: "solid",
                        color: "warning",
                        class: F.solid.warning
                    }, {
                        variant: "solid",
                        color: "danger",
                        class: F.solid.danger
                    }, {
                        variant: "shadow",
                        color: "default",
                        class: F.shadow.default
                    }, {
                        variant: "shadow",
                        color: "primary",
                        class: F.shadow.primary
                    }, {
                        variant: "shadow",
                        color: "secondary",
                        class: F.shadow.secondary
                    }, {
                        variant: "shadow",
                        color: "success",
                        class: F.shadow.success
                    }, {
                        variant: "shadow",
                        color: "warning",
                        class: F.shadow.warning
                    }, {
                        variant: "shadow",
                        color: "danger",
                        class: F.shadow.danger
                    }, {
                        variant: "bordered",
                        color: "default",
                        class: F.bordered.default
                    }, {
                        variant: "bordered",
                        color: "primary",
                        class: F.bordered.primary
                    }, {
                        variant: "bordered",
                        color: "secondary",
                        class: F.bordered.secondary
                    }, {
                        variant: "bordered",
                        color: "success",
                        class: F.bordered.success
                    }, {
                        variant: "bordered",
                        color: "warning",
                        class: F.bordered.warning
                    }, {
                        variant: "bordered",
                        color: "danger",
                        class: F.bordered.danger
                    }, {
                        variant: "flat",
                        color: "default",
                        class: F.flat.default
                    }, {
                        variant: "flat",
                        color: "primary",
                        class: F.flat.primary
                    }, {
                        variant: "flat",
                        color: "secondary",
                        class: F.flat.secondary
                    }, {
                        variant: "flat",
                        color: "success",
                        class: F.flat.success
                    }, {
                        variant: "flat",
                        color: "warning",
                        class: F.flat.warning
                    }, {
                        variant: "flat",
                        color: "danger",
                        class: F.flat.danger
                    }, {
                        variant: "faded",
                        color: "default",
                        class: F.faded.default
                    }, {
                        variant: "faded",
                        color: "primary",
                        class: F.faded.primary
                    }, {
                        variant: "faded",
                        color: "secondary",
                        class: F.faded.secondary
                    }, {
                        variant: "faded",
                        color: "success",
                        class: F.faded.success
                    }, {
                        variant: "faded",
                        color: "warning",
                        class: F.faded.warning
                    }, {
                        variant: "faded",
                        color: "danger",
                        class: F.faded.danger
                    }, {
                        variant: "light",
                        color: "default",
                        class: [F.light.default, "data-[hover=true]:bg-default/40"]
                    }, {
                        variant: "light",
                        color: "primary",
                        class: [F.light.primary, "data-[hover=true]:bg-primary/20"]
                    }, {
                        variant: "light",
                        color: "secondary",
                        class: [F.light.secondary, "data-[hover=true]:bg-secondary/20"]
                    }, {
                        variant: "light",
                        color: "success",
                        class: [F.light.success, "data-[hover=true]:bg-success/20"]
                    }, {
                        variant: "light",
                        color: "warning",
                        class: [F.light.warning, "data-[hover=true]:bg-warning/20"]
                    }, {
                        variant: "light",
                        color: "danger",
                        class: [F.light.danger, "data-[hover=true]:bg-danger/20"]
                    }, {
                        variant: "ghost",
                        color: "default",
                        class: F.ghost.default
                    }, {
                        variant: "ghost",
                        color: "primary",
                        class: F.ghost.primary
                    }, {
                        variant: "ghost",
                        color: "secondary",
                        class: F.ghost.secondary
                    }, {
                        variant: "ghost",
                        color: "success",
                        class: F.ghost.success
                    }, {
                        variant: "ghost",
                        color: "warning",
                        class: F.ghost.warning
                    }, {
                        variant: "ghost",
                        color: "danger",
                        class: F.ghost.danger
                    }, {
                        isInGroup: !0,
                        size: "sm",
                        class: "rounded-none first:rounded-l-small last:rounded-r-small"
                    }, {
                        isInGroup: !0,
                        size: "md",
                        class: "rounded-none first:rounded-l-medium last:rounded-r-medium"
                    }, {
                        isInGroup: !0,
                        size: "lg",
                        class: "rounded-none first:rounded-l-large last:rounded-r-large"
                    }, {
                        isInGroup: !0,
                        isRounded: !0,
                        class: "rounded-none first:rounded-l-full last:rounded-r-full"
                    }, {
                        isInGroup: !0,
                        variant: ["bordered", "ghost"],
                        class: "[&:not(:first-child)]:ml-[calc(theme(borderWidth.medium)*-1)]"
                    }, {
                        isIconOnly: !0,
                        size: "sm",
                        class: "min-w-unit-8 w-unit-8 h-unit-8"
                    }, {
                        isIconOnly: !0,
                        size: "md",
                        class: "min-w-unit-10 w-unit-10 h-unit-10"
                    }, {
                        isIconOnly: !0,
                        size: "lg",
                        class: "min-w-unit-12 w-unit-12 h-unit-12"
                    }]
                });
            tv({
                base: "inline-flex items-center justify-center h-auto",
                variants: {
                    fullWidth: {
                        true: "w-full"
                    }
                },
                defaultVariants: {
                    fullWidth: !1
                }
            });
            let ed = new Set(["id"]),
                ef = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
                eh = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
                ep = new Set(["dir", "lang", "hidden", "inert", "translate"]),
                em = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
                eg = /^(data-.*)$/,
                ev = "undefined" != typeof Element && "checkVisibility" in Element.prototype,
                ey = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
                eb = ey.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";

            function utils_$8a9cb279dc87e130$export$525bc4921d56d4a(e) {
                return e.nativeEvent = e, e.isDefaultPrevented = () => e.defaultPrevented, e.isPropagationStopped = () => e.cancelBubble, e.persist = () => {}, e
            }
            ey.push('[tabindex]:not([tabindex="-1"]):not([disabled])'), ey.join(':not([hidden]):not([tabindex="-1"]),');
            let ex = !1,
                ew = null,
                e$ = new Set,
                eC = new Map,
                eE = !1,
                eP = !1;

            function useFocusVisible_$507fabe10e71c6fb$var$triggerChangeHandlers(e, t) {
                for (let n of e$) n(e, t)
            }

            function useFocusVisible_$507fabe10e71c6fb$var$handleKeyboardEvent(e) {
                eE = !0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening || e.metaKey || !d() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key || (ew = "keyboard", useFocusVisible_$507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e))
            }

            function useFocusVisible_$507fabe10e71c6fb$var$handlePointerEvent(e) {
                ew = "pointer", "pointerType" in e && e.pointerType, ("mousedown" === e.type || "pointerdown" === e.type) && (eE = !0, useFocusVisible_$507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e))
            }

            function useFocusVisible_$507fabe10e71c6fb$var$handleClickEvent(e) {
                !$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening && $6a7db85432448f7f$export$60278871457622de(e) && (eE = !0, ew = "virtual")
            }

            function useFocusVisible_$507fabe10e71c6fb$var$handleFocusEvent(e) {
                e.target !== window && e.target !== document && !ex && e.isTrusted && (eE || eP || (ew = "virtual", useFocusVisible_$507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e)), eE = !1, eP = !1)
            }

            function useFocusVisible_$507fabe10e71c6fb$var$handleWindowBlur() {
                ex || (eE = !1, eP = !0)
            }

            function useFocusVisible_$507fabe10e71c6fb$var$setupGlobalFocusEvents(e) {
                if ("undefined" == typeof window || "undefined" == typeof document || eC.get($431fbd86ca7dc216$export$f21a1ffae260145a(e))) return;
                let t = $431fbd86ca7dc216$export$f21a1ffae260145a(e),
                    n = $431fbd86ca7dc216$export$b204af158042fbac(e),
                    o = t.HTMLElement.prototype.focus;
                t.HTMLElement.prototype.focus = function() {
                    eE = !0, o.apply(this, arguments)
                }, n.addEventListener("keydown", useFocusVisible_$507fabe10e71c6fb$var$handleKeyboardEvent, !0), n.addEventListener("keyup", useFocusVisible_$507fabe10e71c6fb$var$handleKeyboardEvent, !0), n.addEventListener("click", useFocusVisible_$507fabe10e71c6fb$var$handleClickEvent, !0), t.addEventListener("focus", useFocusVisible_$507fabe10e71c6fb$var$handleFocusEvent, !0), t.addEventListener("blur", useFocusVisible_$507fabe10e71c6fb$var$handleWindowBlur, !1), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", useFocusVisible_$507fabe10e71c6fb$var$handlePointerEvent, !0), n.addEventListener("pointermove", useFocusVisible_$507fabe10e71c6fb$var$handlePointerEvent, !0), n.addEventListener("pointerup", useFocusVisible_$507fabe10e71c6fb$var$handlePointerEvent, !0)), t.addEventListener("beforeunload", () => {
                    useFocusVisible_$507fabe10e71c6fb$var$tearDownWindowFocusTracking(e)
                }, {
                    once: !0
                }), eC.set(t, {
                    focus: o
                })
            }
            let useFocusVisible_$507fabe10e71c6fb$var$tearDownWindowFocusTracking = (e, t) => {
                let n = $431fbd86ca7dc216$export$f21a1ffae260145a(e),
                    o = $431fbd86ca7dc216$export$b204af158042fbac(e);
                t && o.removeEventListener("DOMContentLoaded", t), eC.has(n) && (n.HTMLElement.prototype.focus = eC.get(n).focus, o.removeEventListener("keydown", useFocusVisible_$507fabe10e71c6fb$var$handleKeyboardEvent, !0), o.removeEventListener("keyup", useFocusVisible_$507fabe10e71c6fb$var$handleKeyboardEvent, !0), o.removeEventListener("click", useFocusVisible_$507fabe10e71c6fb$var$handleClickEvent, !0), n.removeEventListener("focus", useFocusVisible_$507fabe10e71c6fb$var$handleFocusEvent, !0), n.removeEventListener("blur", useFocusVisible_$507fabe10e71c6fb$var$handleWindowBlur, !1), "undefined" != typeof PointerEvent && (o.removeEventListener("pointerdown", useFocusVisible_$507fabe10e71c6fb$var$handlePointerEvent, !0), o.removeEventListener("pointermove", useFocusVisible_$507fabe10e71c6fb$var$handlePointerEvent, !0), o.removeEventListener("pointerup", useFocusVisible_$507fabe10e71c6fb$var$handlePointerEvent, !0)), eC.delete(n))
            };
            "undefined" != typeof document && function(e) {
                let t;
                let n = $431fbd86ca7dc216$export$b204af158042fbac(e);
                "loading" !== n.readyState ? useFocusVisible_$507fabe10e71c6fb$var$setupGlobalFocusEvents(e) : (t = () => {
                    useFocusVisible_$507fabe10e71c6fb$var$setupGlobalFocusEvents(e)
                }, n.addEventListener("DOMContentLoaded", t)), () => useFocusVisible_$507fabe10e71c6fb$var$tearDownWindowFocusTracking(e, t)
            }();
            let eS = new Map,
                eA = new Set;

            function $bbed8b41f857bcc0$var$setupGlobalEvents() {
                if ("undefined" == typeof window) return;

                function isTransitionEvent(e) {
                    return "propertyName" in e
                }
                let onTransitionEnd = e => {
                    if (!isTransitionEvent(e) || !e.target) return;
                    let t = eS.get(e.target);
                    if (t && (t.delete(e.propertyName), 0 === t.size && (e.target.removeEventListener("transitioncancel", onTransitionEnd), eS.delete(e.target)), 0 === eS.size)) {
                        for (let e of eA) e();
                        eA.clear()
                    }
                };
                document.body.addEventListener("transitionrun", e => {
                    if (!isTransitionEvent(e) || !e.target) return;
                    let t = eS.get(e.target);
                    t || (t = new Set, eS.set(e.target, t), e.target.addEventListener("transitioncancel", onTransitionEnd, {
                        once: !0
                    })), t.add(e.propertyName)
                }), document.body.addEventListener("transitionend", onTransitionEnd)
            }

            function $bbed8b41f857bcc0$export$24490316f764c430(e) {
                requestAnimationFrame(() => {
                    ! function() {
                        for (let [e] of eS) "isConnected" in e && !e.isConnected && eS.delete(e)
                    }(), 0 === eS.size ? e() : eA.add(e)
                })
            }

            function $93925083ecbb358c$export$48d1ea6320830260(e) {
                if (!e) return;
                let t = !0;
                return n => {
                    e({ ...n,
                        preventDefault() {
                            n.preventDefault()
                        },
                        isDefaultPrevented: () => n.isDefaultPrevented(),
                        stopPropagation() {
                            t = !0
                        },
                        continuePropagation() {
                            t = !1
                        },
                        isPropagationStopped: () => t
                    }), t && n.stopPropagation()
                }
            }

            function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(e, t) {
                c(() => {
                    if (e && e.ref && t) return e.ref.current = t.current, () => {
                        e.ref && (e.ref.current = null)
                    }
                })
            }
            "undefined" != typeof document && ("loading" !== document.readyState ? $bbed8b41f857bcc0$var$setupGlobalEvents() : document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents));
            let eT = s.createContext(null),
                ek = "default",
                eL = "",
                eM = new WeakMap;

            function $14c0b72509d70225$export$b0d6fa1ab32e3295(e) {
                if (m()) "disabled" === ek && (ek = "restoring", setTimeout(() => {
                    $bbed8b41f857bcc0$export$24490316f764c430(() => {
                        if ("restoring" === ek) {
                            let t = $431fbd86ca7dc216$export$b204af158042fbac(e);
                            "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = eL || ""), eL = "", ek = "default"
                        }
                    })
                }, 300));
                else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && eM.has(e)) {
                    let t = eM.get(e),
                        n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), eM.delete(e)
                }
            }
            let eV = s.createContext({
                register: () => {}
            });

            function _class_extract_field_descriptor(e, t, n) {
                if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
                return t.get(e)
            }

            function _class_private_field_set(e, t, n) {
                var o = _class_extract_field_descriptor(e, t, "set");
                return ! function(e, t, n) {
                    if (t.set) t.set.call(e, n);
                    else {
                        if (!t.writable) throw TypeError("attempted to set read only private field");
                        t.value = n
                    }
                }(e, o, n), n
            }
            eV.displayName = "PressResponderContext";
            let ej = null !== (o = s.useInsertionEffect) && void 0 !== o ? o : c;

            function $8ae05eaa5c114e9c$export$7f54fc3180508a52(e) {
                let t = (0, s.useRef)(null);
                return ej(() => {
                    t.current = e
                }, [e]), (0, s.useCallback)((...e) => {
                    let n = t.current;
                    return null == n ? void 0 : n(...e)
                }, [])
            }
            n(3935);
            var eR = new WeakMap;
            let $f6c31cce2adf654f$var$PressEvent = class $f6c31cce2adf654f$var$PressEvent {
                continuePropagation() {
                    _class_private_field_set(this, eR, !1)
                }
                get shouldStopPropagation() {
                    var e;
                    return (e = _class_extract_field_descriptor(this, eR, "get")).get ? e.get.call(this) : e.value
                }
                constructor(e, t, n, o) {
                    var a;
                    ! function(e, t) {
                        if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object")
                    }(this, eR), eR.set(this, {
                        writable: !0,
                        value: void 0
                    }), _class_private_field_set(this, eR, !0);
                    let s = null !== (a = null == o ? void 0 : o.target) && void 0 !== a ? a : n.currentTarget,
                        l = null == s ? void 0 : s.getBoundingClientRect(),
                        u, c = 0,
                        d, f = null;
                    null != n.clientX && null != n.clientY && (d = n.clientX, f = n.clientY), l && (null != d && null != f ? (u = d - l.left, c = f - l.top) : (u = l.width / 2, c = l.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = u, this.y = c
                }
            };
            let eD = Symbol("linkClicked"),
                eO = "react-aria-pressable-style",
                e_ = "data-react-aria-pressable";

            function $f6c31cce2adf654f$var$isHTMLAnchorLink(e) {
                return "A" === e.tagName && e.hasAttribute("href")
            }

            function $f6c31cce2adf654f$var$isValidKeyboardEvent(e, t) {
                let {
                    key: n,
                    code: o
                } = e, a = t.getAttribute("role");
                return ("Enter" === n || " " === n || "Spacebar" === n || "Space" === o) && !(t instanceof $431fbd86ca7dc216$export$f21a1ffae260145a(t).HTMLInputElement && !$f6c31cce2adf654f$var$isValidInputKey(t, n) || t instanceof $431fbd86ca7dc216$export$f21a1ffae260145a(t).HTMLTextAreaElement || t.isContentEditable) && !(("link" === a || !a && $f6c31cce2adf654f$var$isHTMLAnchorLink(t)) && "Enter" !== n)
            }

            function $f6c31cce2adf654f$var$createEvent(e, t) {
                let n = t.clientX,
                    o = t.clientY;
                return {
                    currentTarget: e,
                    shiftKey: t.shiftKey,
                    ctrlKey: t.ctrlKey,
                    metaKey: t.metaKey,
                    altKey: t.altKey,
                    clientX: n,
                    clientY: o
                }
            }

            function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e, t) {
                return e instanceof HTMLInputElement ? !$f6c31cce2adf654f$var$isValidInputKey(e, t) : !(e instanceof HTMLInputElement) && (e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !$f6c31cce2adf654f$var$isHTMLAnchorLink(e))
            }
            let eF = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

            function $f6c31cce2adf654f$var$isValidInputKey(e, t) {
                return "checkbox" === e.type || "radio" === e.type ? " " === t : eF.has(e.type)
            }
            let eI = !1,
                eN = 0;

            function $6179b936705e76d3$var$handleGlobalPointerEvent(e) {
                "touch" === e.pointerType && (eI = !0, setTimeout(() => {
                    eI = !1
                }, 50))
            }

            function $6179b936705e76d3$var$setupGlobalTouchEvents() {
                if ("undefined" != typeof document) return 0 === eN && "undefined" != typeof PointerEvent && document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent), eN++, () => {
                    --eN > 0 || "undefined" == typeof PointerEvent || document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent)
                }
            }

            function forwardRef(e) {
                return (0, s.forwardRef)(e)
            }
            var mapPropsVariants = (e, t, n = !0) => {
                    if (!t) return [e, {}];
                    let o = t.reduce((t, n) => n in e ? { ...t,
                        [n]: e[n]
                    } : t, {});
                    if (!n) return [e, o]; {
                        let n = Object.keys(e).filter(e => !t.includes(e)).reduce((t, n) => ({ ...t,
                            [n]: e[n]
                        }), {});
                        return [n, o]
                    }
                },
                eB = tv({
                    slots: {
                        base: "relative inline-flex flex-col gap-2 items-center justify-center",
                        wrapper: "relative flex",
                        circle1: ["absolute", "w-full", "h-full", "rounded-full", "animate-spinner-ease-spin", "border-2", "border-solid", "border-t-transparent", "border-l-transparent", "border-r-transparent"],
                        circle2: ["absolute", "w-full", "h-full", "rounded-full", "opacity-75", "animate-spinner-linear-spin", "border-2", "border-dotted", "border-t-transparent", "border-l-transparent", "border-r-transparent"],
                        label: "text-foreground dark:text-foreground-dark font-regular"
                    },
                    variants: {
                        size: {
                            sm: {
                                wrapper: "w-5 h-5",
                                circle1: "border-2",
                                circle2: "border-2",
                                label: "text-small"
                            },
                            md: {
                                wrapper: "w-8 h-8",
                                circle1: "border-3",
                                circle2: "border-3",
                                label: "text-medium"
                            },
                            lg: {
                                wrapper: "w-10 h-10",
                                circle1: "border-3",
                                circle2: "border-3",
                                label: "text-large"
                            }
                        },
                        color: {
                            current: {
                                circle1: "border-b-current",
                                circle2: "border-b-current"
                            },
                            white: {
                                circle1: "border-b-white",
                                circle2: "border-b-white"
                            },
                            default: {
                                circle1: "border-b-default",
                                circle2: "border-b-default"
                            },
                            primary: {
                                circle1: "border-b-primary",
                                circle2: "border-b-primary"
                            },
                            secondary: {
                                circle1: "border-b-secondary",
                                circle2: "border-b-secondary"
                            },
                            success: {
                                circle1: "border-b-success",
                                circle2: "border-b-success"
                            },
                            warning: {
                                circle1: "border-b-warning",
                                circle2: "border-b-warning"
                            },
                            danger: {
                                circle1: "border-b-danger",
                                circle2: "border-b-danger"
                            }
                        },
                        labelColor: {
                            foreground: {
                                label: "text-foreground"
                            },
                            primary: {
                                label: "text-primary"
                            },
                            secondary: {
                                label: "text-secondary"
                            },
                            success: {
                                label: "text-success"
                            },
                            warning: {
                                label: "text-warning"
                            },
                            danger: {
                                label: "text-danger"
                            }
                        }
                    },
                    defaultVariants: {
                        size: "md",
                        color: "primary",
                        labelColor: "foreground"
                    }
                }),
                eH = forwardRef((e, t) => {
                    let {
                        slots: n,
                        classNames: o,
                        label: l,
                        getSpinnerProps: u
                    } = function(e) {
                        let [t, n] = mapPropsVariants(e, eB.variantKeys), {
                            children: o,
                            className: a,
                            classNames: l,
                            label: u,
                            ...c
                        } = t, d = (0, s.useMemo)(() => eB({ ...n
                        }), [...Object.values(n)]), f = function(...e) {
                            for (var t, n, o = 0, a = ""; o < e.length;)(t = e[o++]) && (n = function toVal(e) {
                                var t, n, o = "";
                                if ("string" == typeof e || "number" == typeof e) o += e;
                                else if ("object" == typeof e) {
                                    if (Array.isArray(e))
                                        for (t = 0; t < e.length; t++) e[t] && (n = toVal(e[t])) && (o && (o += " "), o += n);
                                    else
                                        for (t in e) e[t] && (o && (o += " "), o += t)
                                }
                                return o
                            }(t)) && (a && (a += " "), a += n);
                            return a
                        }(null == l ? void 0 : l.base, a), h = u || o, m = (0, s.useMemo)(() => h && "string" == typeof h ? h : c["aria-label"] ? "" : "Loading", [o, h, c["aria-label"]]), g = (0, s.useCallback)(() => ({
                            "aria-label": m,
                            className: d.base({
                                class: f
                            }),
                            ...c
                        }), [m, d, f, c]);
                        return {
                            label: h,
                            slots: d,
                            classNames: l,
                            getSpinnerProps: g
                        }
                    }({ ...e
                    });
                    return (0, a.jsxs)("div", {
                        ref: t,
                        ...u(),
                        children: [(0, a.jsxs)("div", {
                            className: n.wrapper({
                                class: null == o ? void 0 : o.wrapper
                            }),
                            children: [(0, a.jsx)("i", {
                                className: n.circle1({
                                    class: null == o ? void 0 : o.circle1
                                })
                            }), (0, a.jsx)("i", {
                                className: n.circle2({
                                    class: null == o ? void 0 : o.circle2
                                })
                            })]
                        }), l && (0, a.jsx)("span", {
                            className: n.label(),
                            children: l
                        })]
                    })
                });
            eH.displayName = "NextUI.Spinner";
            var eW = n(1526),
                ez = n(8439),
                clamp = (e, t, n) => Math.min(Math.max(e, t), n),
                Ripple = e => {
                    let {
                        ripples: t = [],
                        motionProps: n,
                        color: o = "currentColor",
                        style: s,
                        onClear: l
                    } = e;
                    return (0, a.jsx)(a.Fragment, {
                        children: t.map(e => {
                            let t = clamp(.01 * e.size, .2, e.size > 100 ? .75 : .5);
                            return (0, a.jsx)(eW.M, {
                                mode: "popLayout",
                                children: (0, a.jsx)(ez.E.span, {
                                    animate: {
                                        transform: "scale(2)",
                                        opacity: 0
                                    },
                                    className: "nextui-ripple",
                                    exit: {
                                        opacity: 0
                                    },
                                    initial: {
                                        transform: "scale(0)",
                                        opacity: .35
                                    },
                                    style: {
                                        position: "absolute",
                                        backgroundColor: o,
                                        borderRadius: "100%",
                                        transformOrigin: "center",
                                        pointerEvents: "none",
                                        zIndex: 10,
                                        top: e.y,
                                        left: e.x,
                                        width: `${e.size}px`,
                                        height: `${e.size}px`,
                                        ...s
                                    },
                                    transition: {
                                        duration: t
                                    },
                                    onAnimationEnd: () => l(e.key),
                                    onTransitionEnd: () => l(e.key),
                                    ...n
                                })
                            }, e.key)
                        })
                    })
                };
            Ripple.displayName = "NextUI.Ripple";
            var eU = forwardRef((e, t) => {
                let {
                    Component: n,
                    domRef: o,
                    children: l,
                    styles: f,
                    spinnerSize: h,
                    spinner: g = (0, a.jsx)(eH, {
                        color: "current",
                        size: h
                    }),
                    spinnerPlacement: b,
                    startContent: $,
                    endContent: C,
                    isLoading: E,
                    disableRipple: S,
                    getButtonProps: A,
                    getRippleProps: T
                } = function(e) {
                    var t, n, o, a, l, f, h, g;
                    let b = u(),
                        $ = !!b,
                        {
                            ref: C,
                            as: E,
                            children: S,
                            startContent: A,
                            endContent: T,
                            autoFocus: M,
                            className: V,
                            spinner: j,
                            fullWidth: R = null != (t = null == b ? void 0 : b.fullWidth) && t,
                            size: D = null != (n = null == b ? void 0 : b.size) ? n : "md",
                            color: O = null != (o = null == b ? void 0 : b.color) ? o : "default",
                            variant: F = null != (a = null == b ? void 0 : b.variant) ? a : "solid",
                            disableAnimation: B = null != (l = null == b ? void 0 : b.disableAnimation) && l,
                            radius: W = null == b ? void 0 : b.radius,
                            disableRipple: U = null != (f = null == b ? void 0 : b.disableRipple) && f,
                            isDisabled: X = null != (h = null == b ? void 0 : b.isDisabled) && h,
                            isIconOnly: J = null != (g = null == b ? void 0 : b.isIconOnly) && g,
                            isLoading: q = !1,
                            spinnerPlacement: Y = "start",
                            onPress: Q,
                            onClick: et,
                            ...er
                        } = e,
                        en = E || "button",
                        ei = "string" == typeof en,
                        eo = function(e) {
                            let t = (0, s.useRef)(null);
                            return (0, s.useImperativeHandle)(e, () => t.current), t
                        }(C),
                        {
                            isFocusVisible: ea,
                            isFocused: es,
                            focusProps: el
                        } = function(e = {}) {
                            var t, n;
                            let {
                                autoFocus: o = !1,
                                isTextInput: a,
                                within: l
                            } = e, u = (0, s.useRef)({
                                isFocused: !1,
                                isFocusVisible: o || $507fabe10e71c6fb$export$b9b3dfddab17db27()
                            }), [c, d] = (0, s.useState)(!1), [f, h] = (0, s.useState)(() => u.current.isFocused && u.current.isFocusVisible), m = (0, s.useCallback)(() => h(u.current.isFocused && u.current.isFocusVisible), []), g = (0, s.useCallback)(e => {
                                u.current.isFocused = e, d(e), m()
                            }, [m]);
                            t = e => {
                                u.current.isFocusVisible = e, m()
                            }, n = {
                                isTextInput: a
                            }, $507fabe10e71c6fb$var$setupGlobalFocusEvents(), (0, s.useEffect)(() => {
                                let handler = (e, o) => {
                                    (function(e, t, n) {
                                        let o = $431fbd86ca7dc216$export$b204af158042fbac(null == n ? void 0 : n.target),
                                            a = "undefined" != typeof window ? $431fbd86ca7dc216$export$f21a1ffae260145a(null == n ? void 0 : n.target).HTMLInputElement : HTMLInputElement,
                                            s = "undefined" != typeof window ? $431fbd86ca7dc216$export$f21a1ffae260145a(null == n ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement,
                                            l = "undefined" != typeof window ? $431fbd86ca7dc216$export$f21a1ffae260145a(null == n ? void 0 : n.target).HTMLElement : HTMLElement,
                                            u = "undefined" != typeof window ? $431fbd86ca7dc216$export$f21a1ffae260145a(null == n ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
                                        return !((e = e || o.activeElement instanceof a && !L.has(o.activeElement.type) || o.activeElement instanceof s || o.activeElement instanceof l && o.activeElement.isContentEditable) && "keyboard" === t && n instanceof u && !k[n.key])
                                    })(!!(null == n ? void 0 : n.isTextInput), e, o) && t($507fabe10e71c6fb$export$b9b3dfddab17db27())
                                };
                                return P.add(handler), () => {
                                    P.delete(handler)
                                }
                            }, []);
                            let {
                                focusProps: b
                            } = function(e) {
                                let {
                                    isDisabled: t,
                                    onFocus: n,
                                    onBlur: o,
                                    onFocusChange: a
                                } = e, l = (0, s.useCallback)(e => {
                                    if (e.target === e.currentTarget) return o && o(e), a && a(!1), !0
                                }, [o, a]), u = $8a9cb279dc87e130$export$715c682d09d639cc(l), c = (0, s.useCallback)(e => {
                                    let t = $431fbd86ca7dc216$export$b204af158042fbac(e.target),
                                        o = t ? $d4ee10de306f2510$export$cd4e5573fbe2b576(t) : $d4ee10de306f2510$export$cd4e5573fbe2b576();
                                    e.target === e.currentTarget && o === $d4ee10de306f2510$export$e58f029f0fbfdb29(e.nativeEvent) && (n && n(e), a && a(!0), u(e))
                                }, [a, n, u]);
                                return {
                                    focusProps: {
                                        onFocus: !t && (n || a || o) ? c : void 0,
                                        onBlur: !t && (o || a) ? l : void 0
                                    }
                                }
                            }({
                                isDisabled: l,
                                onFocusChange: g
                            }), {
                                focusWithinProps: x
                            } = function(e) {
                                let {
                                    isDisabled: t,
                                    onBlurWithin: n,
                                    onFocusWithin: o,
                                    onFocusWithinChange: a
                                } = e, l = (0, s.useRef)({
                                    isFocusWithin: !1
                                }), {
                                    addGlobalListener: u,
                                    removeAllGlobalListeners: c
                                } = $03deb23ff14920c4$export$4eaf04e54aa8eed6(), d = (0, s.useCallback)(e => {
                                    e.currentTarget.contains(e.target) && l.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (l.current.isFocusWithin = !1, c(), n && n(e), a && a(!1))
                                }, [n, a, l, c]), f = $8a9cb279dc87e130$export$715c682d09d639cc(d), h = (0, s.useCallback)(e => {
                                    if (!e.currentTarget.contains(e.target)) return;
                                    let t = $431fbd86ca7dc216$export$b204af158042fbac(e.target),
                                        n = $d4ee10de306f2510$export$cd4e5573fbe2b576(t);
                                    if (!l.current.isFocusWithin && n === $d4ee10de306f2510$export$e58f029f0fbfdb29(e.nativeEvent)) {
                                        o && o(e), a && a(!0), l.current.isFocusWithin = !0, f(e);
                                        let n = e.currentTarget;
                                        u(t, "focus", e => {
                                            if (l.current.isFocusWithin && !$d4ee10de306f2510$export$4282f70798064fe0(n, e.target)) {
                                                let o = new t.defaultView.FocusEvent("blur", {
                                                    relatedTarget: e.target
                                                });
                                                Object.defineProperty(o, "target", {
                                                    value: n
                                                }), Object.defineProperty(o, "currentTarget", {
                                                    value: n
                                                }), d($8a9cb279dc87e130$export$525bc4921d56d4a(o))
                                            }
                                        }, {
                                            capture: !0
                                        })
                                    }
                                }, [o, a, f, u, d]);
                                return t ? {
                                    focusWithinProps: {
                                        onFocus: void 0,
                                        onBlur: void 0
                                    }
                                } : {
                                    focusWithinProps: {
                                        onFocus: h,
                                        onBlur: d
                                    }
                                }
                            }({
                                isDisabled: !l,
                                onFocusWithinChange: g
                            });
                            return {
                                isFocused: c,
                                isFocusVisible: f,
                                focusProps: l ? x : b
                            }
                        }({
                            autoFocus: M
                        }),
                        eu = X || q,
                        ey = (0, s.useMemo)(() => ec({
                            size: D,
                            color: O,
                            variant: F,
                            radius: W,
                            fullWidth: R,
                            isDisabled: eu,
                            isInGroup: $,
                            disableAnimation: B,
                            isIconOnly: J,
                            className: V
                        }), [D, O, F, W, R, eu, $, J, B, V]),
                        {
                            onClick: e$,
                            onClear: eC,
                            ripples: eE
                        } = function(e = {}) {
                            let [t, n] = (0, s.useState)([]), o = (0, s.useCallback)(e => {
                                let t = e.currentTarget,
                                    o = Math.max(t.clientWidth, t.clientHeight),
                                    a = t.getBoundingClientRect();
                                n(t => {
                                    var n;
                                    return [...t, {
                                        key: (n = t.length.toString(), `${n}-${Math.floor(1e6*Math.random())}`),
                                        size: o,
                                        x: e.clientX - a.x - o / 2,
                                        y: e.clientY - a.y - o / 2
                                    }]
                                })
                            }, []), a = (0, s.useCallback)(e => {
                                n(t => t.filter(t => t.key !== e))
                            }, []);
                            return {
                                ripples: t,
                                onClick: o,
                                onClear: a,
                                ...e
                            }
                        }(),
                        eP = (0, s.useCallback)(e => {
                            U || eu || B || !eo.current || e$(e)
                        }, [U, eu, B, eo, e$]),
                        {
                            buttonProps: eS,
                            isPressed: eA
                        } = function(e, t) {
                            let n, {
                                elementType: o = "button",
                                isDisabled: a,
                                onPress: l,
                                onPressStart: u,
                                onPressEnd: f,
                                onPressChange: h,
                                preventFocusOnPress: g,
                                allowFocusWhenDisabled: b,
                                onClick: $,
                                href: C,
                                target: E,
                                rel: P,
                                type: S = "button",
                                allowTextSelectionOnPress: A
                            } = e;
                            n = "button" === o ? {
                                type: S,
                                disabled: a
                            } : {
                                role: "button",
                                tabIndex: a ? void 0 : 0,
                                href: "a" === o && a ? void 0 : C,
                                target: "a" === o ? E : void 0,
                                type: "input" === o ? S : void 0,
                                disabled: "input" === o ? a : void 0,
                                "aria-disabled": a && "input" !== o ? a : void 0,
                                rel: "a" === o ? P : void 0
                            };
                            let {
                                pressProps: T,
                                isPressed: k
                            } = function(e) {
                                let {
                                    onPress: t,
                                    onPressChange: n,
                                    onPressStart: o,
                                    onPressEnd: a,
                                    onPressUp: l,
                                    onClick: u,
                                    isDisabled: f,
                                    isPressed: h,
                                    preventFocusOnPress: g,
                                    shouldCancelOnPointerExit: b,
                                    allowTextSelectionOnPress: $,
                                    ref: C,
                                    ...E
                                } = function(e) {
                                    let t = (0, s.useContext)(eV);
                                    if (t) {
                                        let {
                                            register: n,
                                            ...o
                                        } = t;
                                        e = $3ef42575df84b30b$export$9d1611c77c2fe928(o, e), n()
                                    }
                                    return $e7801be82b4b2a53$export$4debdb1a3f0fa79e(t, e.ref), e
                                }(e), [P, S] = (0, s.useState)(!1), A = (0, s.useRef)({
                                    isPressed: !1,
                                    ignoreEmulatedMouseEvents: !1,
                                    didFirePressStart: !1,
                                    isTriggeringEvent: !1,
                                    activePointerId: null,
                                    target: null,
                                    isOverTarget: !1,
                                    pointerType: null,
                                    disposables: []
                                }), {
                                    addGlobalListener: T,
                                    removeAllGlobalListeners: k,
                                    removeGlobalListener: L
                                } = $03deb23ff14920c4$export$4eaf04e54aa8eed6(), M = (0, s.useCallback)((e, t) => {
                                    let a = A.current;
                                    if (f || a.didFirePressStart) return !1;
                                    let s = !0;
                                    if (a.isTriggeringEvent = !0, o) {
                                        let n = new $f6c31cce2adf654f$var$PressEvent("pressstart", t, e);
                                        o(n), s = n.shouldStopPropagation
                                    }
                                    return n && n(!0), a.isTriggeringEvent = !1, a.didFirePressStart = !0, S(!0), s
                                }, [f, o, n]), V = (0, s.useCallback)((e, o, s = !0) => {
                                    let l = A.current;
                                    if (!l.didFirePressStart) return !1;
                                    l.didFirePressStart = !1, l.isTriggeringEvent = !0;
                                    let u = !0;
                                    if (a) {
                                        let t = new $f6c31cce2adf654f$var$PressEvent("pressend", o, e);
                                        a(t), u = t.shouldStopPropagation
                                    }
                                    if (n && n(!1), S(!1), t && s && !f) {
                                        let n = new $f6c31cce2adf654f$var$PressEvent("press", o, e);
                                        t(n), u && (u = n.shouldStopPropagation)
                                    }
                                    return l.isTriggeringEvent = !1, u
                                }, [f, a, n, t]), j = $8ae05eaa5c114e9c$export$7f54fc3180508a52(V), R = (0, s.useCallback)((e, t) => {
                                    let n = A.current;
                                    if (f) return !1;
                                    if (l) {
                                        n.isTriggeringEvent = !0;
                                        let o = new $f6c31cce2adf654f$var$PressEvent("pressup", t, e);
                                        return l(o), n.isTriggeringEvent = !1, o.shouldStopPropagation
                                    }
                                    return !0
                                }, [f, l]), D = $8ae05eaa5c114e9c$export$7f54fc3180508a52(R), O = (0, s.useCallback)(e => {
                                    let t = A.current;
                                    if (t.isPressed && t.target) {
                                        for (let n of (t.didFirePressStart && null != t.pointerType && V($f6c31cce2adf654f$var$createEvent(t.target, e), t.pointerType, !1), t.isPressed = !1, Q(null), t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, k(), $ || $14c0b72509d70225$export$b0d6fa1ab32e3295(t.target), t.disposables)) n();
                                        t.disposables = []
                                    }
                                }, [$, k, V]), F = $8ae05eaa5c114e9c$export$7f54fc3180508a52(O), B = (0, s.useCallback)(e => {
                                    b && O(e)
                                }, [b, O]), W = (0, s.useCallback)(e => {
                                    f || null == u || u(e)
                                }, [f, u]), U = (0, s.useCallback)((e, t) => {
                                    if (!f && u) {
                                        let n = new MouseEvent("click", e);
                                        Object.defineProperty(n, "target", {
                                            value: t
                                        }), Object.defineProperty(n, "currentTarget", {
                                            value: t
                                        }), u(utils_$8a9cb279dc87e130$export$525bc4921d56d4a(n))
                                    }
                                }, [f, u]), X = $8ae05eaa5c114e9c$export$7f54fc3180508a52(U), [J, q] = (0, s.useState)(!1);
                                c(() => {
                                    let e = A.current;
                                    if (J) {
                                        let t = e.target,
                                            n = $ff5963eb1fccf552$export$e08e3b67e392101e(n => {
                                                t && $f6c31cce2adf654f$var$isValidKeyboardEvent(n, t) && !n.repeat && $d4ee10de306f2510$export$4282f70798064fe0(t, $d4ee10de306f2510$export$e58f029f0fbfdb29(n)) && e.target && D($f6c31cce2adf654f$var$createEvent(e.target, n), "keyboard")
                                            }, t => {
                                                var n, o, a;
                                                if (e.isPressed && e.target && $f6c31cce2adf654f$var$isValidKeyboardEvent(t, e.target)) {
                                                    $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard($d4ee10de306f2510$export$e58f029f0fbfdb29(t), t.key) && t.preventDefault();
                                                    let n = $d4ee10de306f2510$export$e58f029f0fbfdb29(t),
                                                        a = $d4ee10de306f2510$export$4282f70798064fe0(e.target, $d4ee10de306f2510$export$e58f029f0fbfdb29(t));
                                                    j($f6c31cce2adf654f$var$createEvent(e.target, t), "keyboard", a), a && X(t, e.target), k(), "Enter" !== t.key && $f6c31cce2adf654f$var$isHTMLAnchorLink(e.target) && $d4ee10de306f2510$export$4282f70798064fe0(e.target, n) && !t[eD] && (t[eD] = !0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7(e.target, t, !1)), e.isPressed = !1, q(!1), null === (o = e.metaKeyEvents) || void 0 === o || o.delete(t.key)
                                                } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                                                    let t = e.metaKeyEvents;
                                                    for (let n of (e.metaKeyEvents = void 0, t.values())) null === (a = e.target) || void 0 === a || a.dispatchEvent(new KeyboardEvent("keyup", n))
                                                }
                                            });
                                        return T($431fbd86ca7dc216$export$b204af158042fbac(e.target), "keyup", n, !0), () => {
                                            L($431fbd86ca7dc216$export$b204af158042fbac(e.target), "keyup", n, !0)
                                        }
                                    }
                                }, [J, T, k, L]);
                                let [Y, Q] = (0, s.useState)(null);
                                c(() => {
                                    let e = A.current;
                                    if ("pointer" === Y) {
                                        let onPointerUp = t => {
                                                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                                                    if ($d4ee10de306f2510$export$4282f70798064fe0(e.target, $d4ee10de306f2510$export$e58f029f0fbfdb29(t)) && null != e.pointerType) {
                                                        let n = !1,
                                                            o = setTimeout(() => {
                                                                e.isPressed && e.target instanceof HTMLElement && (n ? F(t) : ($7215afc6de606d6b$export$de79e2c695e052f3(e.target), e.target.click()))
                                                            }, 80);
                                                        T(t.currentTarget, "click", () => n = !0, !0), e.disposables.push(() => clearTimeout(o))
                                                    } else F(t);
                                                    e.isOverTarget = !1
                                                }
                                            },
                                            onPointerCancel = e => {
                                                F(e)
                                            };
                                        return T($431fbd86ca7dc216$export$b204af158042fbac(e.target), "pointerup", onPointerUp, !1), T($431fbd86ca7dc216$export$b204af158042fbac(e.target), "pointercancel", onPointerCancel, !1), () => {
                                            L($431fbd86ca7dc216$export$b204af158042fbac(e.target), "pointerup", onPointerUp, !1), L($431fbd86ca7dc216$export$b204af158042fbac(e.target), "pointercancel", onPointerCancel, !1)
                                        }
                                    }
                                }, [Y, T, L]);
                                let et = (0, s.useMemo)(() => {
                                    let e = A.current,
                                        t = {
                                            onKeyDown(t) {
                                                if ($f6c31cce2adf654f$var$isValidKeyboardEvent(t.nativeEvent, t.currentTarget) && $d4ee10de306f2510$export$4282f70798064fe0(t.currentTarget, $d4ee10de306f2510$export$e58f029f0fbfdb29(t.nativeEvent))) {
                                                    var n;
                                                    $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard($d4ee10de306f2510$export$e58f029f0fbfdb29(t.nativeEvent), t.key) && t.preventDefault();
                                                    let o = !0;
                                                    e.isPressed || t.repeat || (e.target = t.currentTarget, e.isPressed = !0, q(!0), e.pointerType = "keyboard", o = M(t, "keyboard")), o && t.stopPropagation(), t.metaKey && d() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                                                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
                                            },
                                            onClick(t) {
                                                if ((!t || $d4ee10de306f2510$export$4282f70798064fe0(t.currentTarget, $d4ee10de306f2510$export$e58f029f0fbfdb29(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening) {
                                                    let n = !0;
                                                    if (f && t.preventDefault(), !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || $6a7db85432448f7f$export$60278871457622de(t.nativeEvent))) {
                                                        let e = M(t, "virtual"),
                                                            o = R(t, "virtual"),
                                                            a = V(t, "virtual");
                                                        W(t), n = e && o && a
                                                    } else if (e.isPressed && "keyboard" !== e.pointerType) {
                                                        let o = e.pointerType || t.nativeEvent.pointerType || "virtual",
                                                            a = R($f6c31cce2adf654f$var$createEvent(t.currentTarget, t), o),
                                                            s = V($f6c31cce2adf654f$var$createEvent(t.currentTarget, t), o, !0);
                                                        n = a && s, e.isOverTarget = !1, W(t), O(t)
                                                    }
                                                    e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                                                }
                                            }
                                        };
                                    return "undefined" != typeof PointerEvent && (t.onPointerDown = t => {
                                        var n;
                                        if (0 !== t.button || !$d4ee10de306f2510$export$4282f70798064fe0(t.currentTarget, $d4ee10de306f2510$export$e58f029f0fbfdb29(t.nativeEvent))) return;
                                        if (n = t.nativeEvent, !x() && 0 === n.width && 0 === n.height || 1 === n.width && 1 === n.height && 0 === n.pressure && 0 === n.detail && "mouse" === n.pointerType) {
                                            e.pointerType = "virtual";
                                            return
                                        }
                                        e.pointerType = t.pointerType;
                                        let o = !0;
                                        if (!e.isPressed) {
                                            e.isPressed = !0, Q("pointer"), e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, $ || function(e) {
                                                if (m()) {
                                                    if ("default" === ek) {
                                                        let t = $431fbd86ca7dc216$export$b204af158042fbac(e);
                                                        eL = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                                                    }
                                                    ek = "disabled"
                                                } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                                                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                                                    eM.set(e, e.style[t]), e.style[t] = "none"
                                                }
                                            }(e.target), o = M(t, e.pointerType);
                                            let n = $d4ee10de306f2510$export$e58f029f0fbfdb29(t.nativeEvent);
                                            "releasePointerCapture" in n && n.releasePointerCapture(t.pointerId)
                                        }
                                        o && t.stopPropagation()
                                    }, t.onMouseDown = t => {
                                        if ($d4ee10de306f2510$export$4282f70798064fe0(t.currentTarget, $d4ee10de306f2510$export$e58f029f0fbfdb29(t.nativeEvent)) && 0 === t.button) {
                                            if (g) {
                                                let n = function(e) {
                                                    for (var t; e && !((t = e).matches(eb) && function isElementVisible_$7d2416ea0959daaa$export$e989c0fffaa6b27a(e, t) {
                                                            return ev ? e.checkVisibility({
                                                                visibilityProperty: !0
                                                            }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
                                                                let t = $431fbd86ca7dc216$export$f21a1ffae260145a(e);
                                                                if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
                                                                let {
                                                                    display: n,
                                                                    visibility: o
                                                                } = e.style, a = "none" !== n && "hidden" !== o && "collapse" !== o;
                                                                if (a) {
                                                                    let {
                                                                        getComputedStyle: t
                                                                    } = e.ownerDocument.defaultView, {
                                                                        display: n,
                                                                        visibility: o
                                                                    } = t(e);
                                                                    a = "none" !== n && "hidden" !== o && "collapse" !== o
                                                                }
                                                                return a
                                                            }(e) && !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open")) && (!e.parentElement || isElementVisible_$7d2416ea0959daaa$export$e989c0fffaa6b27a(e.parentElement, e))
                                                        }(t) && ! function(e) {
                                                            let t = e;
                                                            for (; null != t;) {
                                                                if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
                                                                t = t.parentElement
                                                            }
                                                            return !1
                                                        }(t));) e = e.parentElement;
                                                    let n = $431fbd86ca7dc216$export$f21a1ffae260145a(e),
                                                        o = n.document.activeElement;
                                                    if (!o || o === e) return;
                                                    ex = !0;
                                                    let a = !1,
                                                        onBlur = e => {
                                                            (e.target === o || a) && e.stopImmediatePropagation()
                                                        },
                                                        onFocusOut = t => {
                                                            t.target !== o && !a || (t.stopImmediatePropagation(), e || a || (a = !0, $7215afc6de606d6b$export$de79e2c695e052f3(o), cleanup()))
                                                        },
                                                        onFocus = t => {
                                                            (t.target === e || a) && t.stopImmediatePropagation()
                                                        },
                                                        onFocusIn = t => {
                                                            (t.target === e || a) && (t.stopImmediatePropagation(), a || (a = !0, $7215afc6de606d6b$export$de79e2c695e052f3(o), cleanup()))
                                                        };
                                                    n.addEventListener("blur", onBlur, !0), n.addEventListener("focusout", onFocusOut, !0), n.addEventListener("focusin", onFocusIn, !0), n.addEventListener("focus", onFocus, !0);
                                                    let cleanup = () => {
                                                            cancelAnimationFrame(s), n.removeEventListener("blur", onBlur, !0), n.removeEventListener("focusout", onFocusOut, !0), n.removeEventListener("focusin", onFocusIn, !0), n.removeEventListener("focus", onFocus, !0), ex = !1, a = !1
                                                        },
                                                        s = requestAnimationFrame(cleanup);
                                                    return cleanup
                                                }(t.target);
                                                n && e.disposables.push(n)
                                            }
                                            t.stopPropagation()
                                        }
                                    }, t.onPointerUp = t => {
                                        $d4ee10de306f2510$export$4282f70798064fe0(t.currentTarget, $d4ee10de306f2510$export$e58f029f0fbfdb29(t.nativeEvent)) && "virtual" !== e.pointerType && 0 === t.button && !e.isPressed && R(t, e.pointerType || t.pointerType)
                                    }, t.onPointerEnter = t => {
                                        t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, M($f6c31cce2adf654f$var$createEvent(e.target, t), e.pointerType))
                                    }, t.onPointerLeave = t => {
                                        t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, V($f6c31cce2adf654f$var$createEvent(e.target, t), e.pointerType, !1), B(t))
                                    }, t.onDragStart = e => {
                                        $d4ee10de306f2510$export$4282f70798064fe0(e.currentTarget, $d4ee10de306f2510$export$e58f029f0fbfdb29(e.nativeEvent)) && O(e)
                                    }), t
                                }, [f, g, k, $, O, B, V, M, R, W, U]);
                                return (0, s.useEffect)(() => {
                                    if (!C) return;
                                    let e = $431fbd86ca7dc216$export$b204af158042fbac(C.current);
                                    if (!e || !e.head || e.getElementById(eO)) return;
                                    let t = e.createElement("style");
                                    t.id = eO, t.textContent = `
@layer {
  [${e_}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), e.head.prepend(t)
                                }, [C]), (0, s.useEffect)(() => {
                                    let e = A.current;
                                    return () => {
                                        var t;
                                        for (let n of ($ || $14c0b72509d70225$export$b0d6fa1ab32e3295(null !== (t = e.target) && void 0 !== t ? t : void 0), e.disposables)) n();
                                        e.disposables = []
                                    }
                                }, [$]), {
                                    isPressed: h || P,
                                    pressProps: $3ef42575df84b30b$export$9d1611c77c2fe928(E, et, {
                                        [e_]: !0
                                    })
                                }
                            }({
                                onPressStart: u,
                                onPressEnd: f,
                                onPressChange: h,
                                onPress: l,
                                isDisabled: a,
                                preventFocusOnPress: g,
                                allowTextSelectionOnPress: A,
                                ref: t
                            }), {
                                focusableProps: L
                            } = function(e, t) {
                                let {
                                    focusProps: n
                                } = function(e) {
                                    let t, {
                                            isDisabled: n,
                                            onFocus: o,
                                            onBlur: a,
                                            onFocusChange: l
                                        } = e,
                                        u = (0, s.useCallback)(e => {
                                            if (e.target === e.currentTarget) return a && a(e), l && l(!1), !0
                                        }, [a, l]),
                                        d = (t = (0, s.useRef)({
                                            isFocused: !1,
                                            observer: null
                                        }), c(() => {
                                            let e = t.current;
                                            return () => {
                                                e.observer && (e.observer.disconnect(), e.observer = null)
                                            }
                                        }, []), (0, s.useCallback)(e => {
                                            if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                                                t.current.isFocused = !0;
                                                let n = e.target;
                                                n.addEventListener("focusout", e => {
                                                    if (t.current.isFocused = !1, n.disabled) {
                                                        let t = utils_$8a9cb279dc87e130$export$525bc4921d56d4a(e);
                                                        null == u || u(t)
                                                    }
                                                    t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
                                                }, {
                                                    once: !0
                                                }), t.current.observer = new MutationObserver(() => {
                                                    if (t.current.isFocused && n.disabled) {
                                                        var e;
                                                        null === (e = t.current.observer) || void 0 === e || e.disconnect();
                                                        let o = n === document.activeElement ? null : document.activeElement;
                                                        n.dispatchEvent(new FocusEvent("blur", {
                                                            relatedTarget: o
                                                        })), n.dispatchEvent(new FocusEvent("focusout", {
                                                            bubbles: !0,
                                                            relatedTarget: o
                                                        }))
                                                    }
                                                }), t.current.observer.observe(n, {
                                                    attributes: !0,
                                                    attributeFilter: ["disabled"]
                                                })
                                            }
                                        }, [u])),
                                        f = (0, s.useCallback)(e => {
                                            let t = $431fbd86ca7dc216$export$b204af158042fbac(e.target),
                                                n = t ? $d4ee10de306f2510$export$cd4e5573fbe2b576(t) : $d4ee10de306f2510$export$cd4e5573fbe2b576();
                                            e.target === e.currentTarget && n === $d4ee10de306f2510$export$e58f029f0fbfdb29(e.nativeEvent) && (o && o(e), l && l(!0), d(e))
                                        }, [l, o, d]);
                                    return {
                                        focusProps: {
                                            onFocus: !n && (o || l || a) ? f : void 0,
                                            onBlur: !n && (a || l) ? u : void 0
                                        }
                                    }
                                }(e), {
                                    keyboardProps: o
                                } = {
                                    keyboardProps: e.isDisabled ? {} : {
                                        onKeyDown: $93925083ecbb358c$export$48d1ea6320830260(e.onKeyDown),
                                        onKeyUp: $93925083ecbb358c$export$48d1ea6320830260(e.onKeyUp)
                                    }
                                }, a = $3ef42575df84b30b$export$9d1611c77c2fe928(n, o), l = function(e) {
                                    let t = (0, s.useContext)(eT) || {};
                                    $e7801be82b4b2a53$export$4debdb1a3f0fa79e(t, e);
                                    let {
                                        ref: n,
                                        ...o
                                    } = t;
                                    return o
                                }(t), u = e.isDisabled ? {} : l, d = (0, s.useRef)(e.autoFocus);
                                (0, s.useEffect)(() => {
                                    d.current && t.current && function(e) {
                                        let t = $431fbd86ca7dc216$export$b204af158042fbac(e);
                                        if ("virtual" === ew) {
                                            let n = $d4ee10de306f2510$export$cd4e5573fbe2b576(t);
                                            $bbed8b41f857bcc0$export$24490316f764c430(() => {
                                                let o = $d4ee10de306f2510$export$cd4e5573fbe2b576(t);
                                                (o === n || o === t.body) && e.isConnected && $7215afc6de606d6b$export$de79e2c695e052f3(e)
                                            })
                                        } else $7215afc6de606d6b$export$de79e2c695e052f3(e)
                                    }(t.current), d.current = !1
                                }, [t]);
                                let f = e.excludeFromTabOrder ? -1 : 0;
                                return e.isDisabled && (f = void 0), {
                                    focusableProps: $3ef42575df84b30b$export$9d1611c77c2fe928({ ...a,
                                        tabIndex: f
                                    }, u)
                                }
                            }(e, t);
                            b && (L.tabIndex = a ? -1 : L.tabIndex);
                            let M = $3ef42575df84b30b$export$9d1611c77c2fe928(L, T, function(e, t = {}) {
                                let {
                                    labelable: n,
                                    isLink: o,
                                    global: a,
                                    events: s = a,
                                    propNames: l
                                } = t, u = {};
                                for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (ed.has(t) || n && ef.has(t) || o && eh.has(t) || a && ep.has(t) || s && (em.has(t) || t.endsWith("Capture") && em.has(t.slice(0, -7))) || (null == l ? void 0 : l.has(t)) || eg.test(t)) && (u[t] = e[t]);
                                return u
                            }(e, {
                                labelable: !0
                            }));
                            return {
                                isPressed: k,
                                buttonProps: $3ef42575df84b30b$export$9d1611c77c2fe928(n, M, {
                                    "aria-haspopup": e["aria-haspopup"],
                                    "aria-expanded": e["aria-expanded"],
                                    "aria-controls": e["aria-controls"],
                                    "aria-pressed": e["aria-pressed"],
                                    onClick: e => {
                                        $ && $(e)
                                    }
                                })
                            }
                        }({
                            elementType: E,
                            isDisabled: eu,
                            onPress: Q,
                            onClick: $ff5963eb1fccf552$export$e08e3b67e392101e(et, eP),
                            ...er
                        }, eo),
                        {
                            isHovered: ej,
                            hoverProps: eR
                        } = function(e) {
                            let {
                                onHoverStart: t,
                                onHoverChange: n,
                                onHoverEnd: o,
                                isDisabled: a
                            } = e, [l, u] = (0, s.useState)(!1), c = (0, s.useRef)({
                                isHovered: !1,
                                ignoreEmulatedMouseEvents: !1,
                                pointerType: "",
                                target: null
                            }).current;
                            (0, s.useEffect)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
                            let {
                                addGlobalListener: d,
                                removeAllGlobalListeners: f
                            } = $03deb23ff14920c4$export$4eaf04e54aa8eed6(), {
                                hoverProps: h,
                                triggerHoverEnd: m
                            } = (0, s.useMemo)(() => {
                                let triggerHoverStart = (e, o) => {
                                        if (c.pointerType = o, a || "touch" === o || c.isHovered || !e.currentTarget.contains(e.target)) return;
                                        c.isHovered = !0;
                                        let s = e.currentTarget;
                                        c.target = s, d($431fbd86ca7dc216$export$b204af158042fbac(e.target), "pointerover", e => {
                                            c.isHovered && c.target && !$d4ee10de306f2510$export$4282f70798064fe0(c.target, e.target) && triggerHoverEnd(e, e.pointerType)
                                        }, {
                                            capture: !0
                                        }), t && t({
                                            type: "hoverstart",
                                            target: s,
                                            pointerType: o
                                        }), n && n(!0), u(!0)
                                    },
                                    triggerHoverEnd = (e, t) => {
                                        let a = c.target;
                                        c.pointerType = "", c.target = null, "touch" !== t && c.isHovered && a && (c.isHovered = !1, f(), o && o({
                                            type: "hoverend",
                                            target: a,
                                            pointerType: t
                                        }), n && n(!1), u(!1))
                                    },
                                    e = {};
                                return "undefined" != typeof PointerEvent && (e.onPointerEnter = e => {
                                    eI && "mouse" === e.pointerType || triggerHoverStart(e, e.pointerType)
                                }, e.onPointerLeave = e => {
                                    !a && e.currentTarget.contains(e.target) && triggerHoverEnd(e, e.pointerType)
                                }), {
                                    hoverProps: e,
                                    triggerHoverEnd: triggerHoverEnd
                                }
                            }, [t, n, o, a, c, d, f]);
                            return (0, s.useEffect)(() => {
                                a && m({
                                    currentTarget: c.target
                                }, c.pointerType)
                            }, [a]), {
                                hoverProps: h,
                                isHovered: l
                            }
                        }({
                            isDisabled: eu
                        }),
                        eF = (0, s.useCallback)((e = {}) => ({
                            "data-disabled": dataAttr(eu),
                            "data-focus": dataAttr(es),
                            "data-pressed": dataAttr(eA),
                            "data-focus-visible": dataAttr(ea),
                            "data-hover": dataAttr(ej),
                            "data-loading": dataAttr(q),
                            ...$3ef42575df84b30b$export$9d1611c77c2fe928(eS, el, eR, filterDOMProps(er, {
                                enabled: ei
                            }), filterDOMProps(e))
                        }), [q, eu, es, eA, ei, ea, ej, eS, el, eR, er]),
                        getIconClone = e => (0, s.isValidElement)(e) ? (0, s.cloneElement)(e, {
                            "aria-hidden": !0,
                            focusable: !1,
                            tabIndex: -1
                        }) : null,
                        eN = getIconClone(A),
                        eB = getIconClone(T),
                        eH = (0, s.useMemo)(() => ({
                            sm: "sm",
                            md: "sm",
                            lg: "md"
                        })[D], [D]),
                        eW = (0, s.useCallback)(() => ({
                            ripples: eE,
                            onClear: eC
                        }), [eE, eC]);
                    return {
                        Component: en,
                        children: S,
                        domRef: eo,
                        spinner: j,
                        styles: ey,
                        startContent: eN,
                        endContent: eB,
                        isLoading: q,
                        spinnerPlacement: Y,
                        spinnerSize: eH,
                        disableRipple: U,
                        getButtonProps: eF,
                        getRippleProps: eW
                    }
                }({ ...e,
                    ref: t
                });
                return (0, a.jsxs)(n, {
                    ref: o,
                    className: f,
                    ...A(),
                    children: [$, E && "start" === b && g, l, E && "end" === b && g, C, !S && (0, a.jsx)(Ripple, { ...T()
                    })]
                })
            });
            eU.displayName = "NextUI.Button";
            var eG = n(3967),
                eK = n.n(eG);
            let Button_Button = e => {
                let {
                    variant: t,
                    label: n,
                    onClick: o,
                    onMouseEnter: s,
                    onMouseLeave: l,
                    className: u,
                    type: c = "button",
                    isLoading: d = !1,
                    disabled: f = !1,
                    disableAnimation: h = !1
                } = e;
                return (0, a.jsx)(eU, {
                    type: c,
                    onMouseEnter: s,
                    onMouseLeave: l,
                    disableAnimation: h,
                    onClick: o,
                    className: eK()("text-button group flex h-auto items-center justify-center overflow-hidden px-6 py-3 outline-none transition duration-300", {
                        "rounded-full border border-light bg-transparent hover:bg-light hover:text-dark": "primary" === t,
                        "rounded-full border border-light bg-light shadow-none hover:bg-light/5": "secondary" === t,
                        "pointer-events-none opacity-40": f
                    }, u),
                    disabled: d || f,
                    children: (0, a.jsx)("span", {
                        className: eK()("text-base transition duration-200", {
                            "text-light group-hover:text-dark group-hover:[&>svg>line]:stroke-black": "primary" === t,
                            "text-dark group-hover:[&>svg>line]:stroke-light": "secondary" === t
                        }),
                        children: n
                    })
                })
            }
        },
        2423: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return Counter
                }
            });
            var o, a = n(5893),
                s = n(7294),
                l = n(7301),
                u = n(6955),
                c = n(5487),
                d = n(2074),
                f = n(4522);
            let h = (0, f.X)(() => void 0 !== window.ScrollTimeline);
            let GroupPlaybackControls = class GroupPlaybackControls {
                constructor(e) {
                    this.animations = e.filter(Boolean)
                }
                then(e, t) {
                    return Promise.all(this.animations).then(e).catch(t)
                }
                getAll(e) {
                    return this.animations[0][e]
                }
                setAll(e, t) {
                    for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t
                }
                attachTimeline(e) {
                    let t = this.animations.map(t => {
                        if (!h() || !t.attachTimeline) return t.pause(),
                            function(e, t) {
                                let n;
                                let onFrame = () => {
                                    let {
                                        currentTime: o
                                    } = t, a = null === o ? 0 : o.value, s = a / 100;
                                    n !== s && e(s), n = s
                                };
                                return d.Wi.update(onFrame, !0), () => (0, d.Pn)(onFrame)
                            }(e => {
                                t.time = t.duration * e
                            }, e);
                        t.attachTimeline(e)
                    });
                    return () => {
                        t.forEach((e, t) => {
                            e && e(), this.animations[t].stop()
                        })
                    }
                }
                get time() {
                    return this.getAll("time")
                }
                set time(e) {
                    this.setAll("time", e)
                }
                get speed() {
                    return this.getAll("speed")
                }
                set speed(e) {
                    this.setAll("speed", e)
                }
                get duration() {
                    let e = 0;
                    for (let t = 0; t < this.animations.length; t++) e = Math.max(e, this.animations[t].duration);
                    return e
                }
                runAll(e) {
                    this.animations.forEach(t => t[e]())
                }
                play() {
                    this.runAll("play")
                }
                pause() {
                    this.runAll("pause")
                }
                stop() {
                    this.runAll("stop")
                }
                cancel() {
                    this.runAll("cancel")
                }
                complete() {
                    this.runAll("complete")
                }
            };
            var m = n(2711),
                g = n(5194),
                b = n(5794),
                x = n(4547),
                $ = n(1059),
                C = n(5086),
                E = n(2284),
                P = n(6917),
                S = n(599),
                A = n(6615),
                T = n(3032),
                k = n(406);

            function calcNextTime(e, t, n, o) {
                var a;
                return "number" == typeof t ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : "<" === t ? n : null !== (a = o.get(t)) && void 0 !== a ? a : e
            }
            let wrap = (e, t, n) => {
                let o = t - e;
                return ((n - e) % o + o) % o + e
            };
            var L = n(3338),
                M = n(10),
                V = n(22);

            function compareByTime(e, t) {
                return e.at !== t.at ? e.at - t.at : null === e.value ? 1 : null === t.value ? -1 : 0
            }

            function getSubjectSequence(e, t) {
                return t.has(e) || t.set(e, {}), t.get(e)
            }

            function getValueSequence(e, t) {
                return t[e] || (t[e] = []), t[e]
            }
            let isNumber = e => "number" == typeof e,
                isNumberKeyframesArray = e => e.every(isNumber);

            function animateElements(e, t, n, o) {
                let a = (0, l.I)(e, o),
                    s = a.length;
                (0, c.k)(!!s, "No valid element provided.");
                let d = [];
                for (let e = 0; e < s; e++) {
                    let o = a[e];
                    u.R.has(o) || function(e) {
                        let t = {
                                presenceContext: null,
                                props: {},
                                visualState: {
                                    renderState: {
                                        transform: {},
                                        transformOrigin: {},
                                        style: {},
                                        vars: {},
                                        attrs: {}
                                    },
                                    latestValues: {}
                                }
                            },
                            n = (0, g.v)(e) ? new b.e(t, {
                                enableHardwareAcceleration: !1
                            }) : new x.W(t, {
                                enableHardwareAcceleration: !0
                            });
                        n.mount(e), u.R.set(e, n)
                    }(o);
                    let l = u.R.get(o),
                        c = { ...n
                        };
                    "function" == typeof c.delay && (c.delay = c.delay(e, s)), d.push(...(0, m.w)(l, { ...t,
                        transition: c
                    }, {}))
                }
                return new GroupPlaybackControls(d)
            }
            let isSequence = e => Array.isArray(e) && Array.isArray(e[0]),
                animate = function(e, t, n) {
                    let a;
                    return a = isSequence(e) ? function(e, t, n) {
                        let o = [],
                            a = function(e, {
                                defaultTransition: t = {},
                                ...n
                            } = {}, o) {
                                let a = t.duration || .3,
                                    s = new Map,
                                    u = new Map,
                                    c = {},
                                    d = new Map,
                                    f = 0,
                                    h = 0,
                                    m = 0;
                                for (let n = 0; n < e.length; n++) {
                                    let s = e[n];
                                    if ("string" == typeof s) {
                                        d.set(s, h);
                                        continue
                                    }
                                    if (!Array.isArray(s)) {
                                        d.set(s.name, calcNextTime(h, s.at, f, d));
                                        continue
                                    }
                                    let [g, b, x = {}] = s;
                                    void 0 !== x.at && (h = calcNextTime(h, x.at, f, d));
                                    let $ = 0,
                                        resolveValueSequence = (e, n, o, s = 0, l = 0) => {
                                            let u = Array.isArray(e) ? e : [e],
                                                {
                                                    delay: c = 0,
                                                    times: d = (0, S.Y)(u),
                                                    type: f = "keyframes",
                                                    ...g
                                                } = n,
                                                {
                                                    ease: b = t.ease || "easeOut",
                                                    duration: x
                                                } = n,
                                                T = "function" == typeof c ? c(s, l) : c,
                                                k = u.length;
                                            if (k <= 2 && "spring" === f) {
                                                let e = 100;
                                                if (2 === k && isNumberKeyframesArray(u)) {
                                                    let t = u[1] - u[0];
                                                    e = Math.abs(t)
                                                }
                                                let t = { ...g
                                                };
                                                void 0 !== x && (t.duration = (0, P.w)(x));
                                                let n = function(e, t = 100) {
                                                    let n = (0, C.S)({
                                                            keyframes: [0, t],
                                                            ...e
                                                        }),
                                                        o = Math.min((0, E.i)(n), E.E);
                                                    return {
                                                        type: "keyframes",
                                                        ease: e => n.next(o * e).value / t,
                                                        duration: (0, P.X)(o)
                                                    }
                                                }(t, e);
                                                b = n.ease, x = n.duration
                                            }
                                            null != x || (x = a);
                                            let j = h + T,
                                                R = j + x;
                                            1 === d.length && 0 === d[0] && (d[1] = 1);
                                            let D = d.length - u.length;
                                            D > 0 && (0, A.c)(d, D), 1 === u.length && u.unshift(null),
                                                function(e, t, n, o, a, s) {
                                                    ! function(e, t, n) {
                                                        for (let o = 0; o < e.length; o++) {
                                                            let a = e[o];
                                                            a.at > t && a.at < n && ((0, M.cl)(e, a), o--)
                                                        }
                                                    }(e, a, s);
                                                    for (let u = 0; u < t.length; u++) {
                                                        var l;
                                                        e.push({
                                                            value: t[u],
                                                            at: (0, V.C)(a, s, o[u]),
                                                            easing: (l = u, (0, L.N)(n) ? n[wrap(0, n.length, l)] : n)
                                                        })
                                                    }
                                                }(o, u, b, d, j, R), $ = Math.max(T + x, $), m = Math.max(R, m)
                                        };
                                    if ((0, k.i)(g)) {
                                        let e = getSubjectSequence(g, u);
                                        resolveValueSequence(b, x, getValueSequence("default", e))
                                    } else {
                                        let e = (0, l.I)(g, o, c),
                                            t = e.length;
                                        for (let n = 0; n < t; n++) {
                                            let o = e[n],
                                                a = getSubjectSequence(o, u);
                                            for (let e in b) resolveValueSequence(b[e], x[e] ? { ...x,
                                                ...x[e]
                                            } : { ...x
                                            }, getValueSequence(e, a), n, t)
                                        }
                                    }
                                    f = h, h += $
                                }
                                return u.forEach((e, o) => {
                                    for (let a in e) {
                                        let l = e[a];
                                        l.sort(compareByTime);
                                        let u = [],
                                            c = [],
                                            d = [];
                                        for (let e = 0; e < l.length; e++) {
                                            let {
                                                at: t,
                                                value: n,
                                                easing: o
                                            } = l[e];
                                            u.push(n), c.push((0, T.Y)(0, m, t)), d.push(o || "easeOut")
                                        }
                                        0 !== c[0] && (c.unshift(0), u.unshift(u[0]), d.unshift("easeInOut")), 1 !== c[c.length - 1] && (c.push(1), u.push(null)), s.has(o) || s.set(o, {
                                            keyframes: {},
                                            transition: {}
                                        });
                                        let f = s.get(o);
                                        f.keyframes[a] = u, f.transition[a] = { ...t,
                                            duration: m,
                                            ease: d,
                                            times: c,
                                            ...n
                                        }
                                    }
                                }), s
                            }(e, t, n);
                        return a.forEach(({
                            keyframes: e,
                            transition: t
                        }, n) => {
                            let a;
                            a = (0, k.i)(n) ? (0, $.D)(n, e.default, t.default) : animateElements(n, e, t), o.push(a)
                        }), new GroupPlaybackControls(o)
                    }(e, t, o) : "object" != typeof t || Array.isArray(t) ? (0, $.D)(e, t, n) : animateElements(e, t, n, o), o && o.animations.push(a), a
                },
                useIsMounted = () => {
                    let [e, t] = (0, s.useState)(!1);
                    return (0, s.useEffect)(() => {
                        t(!0)
                    }, []), e
                },
                Counter = e => {
                    let {
                        from: t,
                        to: n,
                        duration: o = 2
                    } = e, l = useIsMounted(), u = (0, s.useRef)(null);
                    return (0, s.useEffect)(() => {
                        l && animate(t, n, {
                            duration: o,
                            delay: .2,
                            type: "tween",
                            ease: [.39, .58, 0, 1],
                            onUpdate: e => {
                                u.current && e && (u.current.textContent = e.toFixed(0))
                            }
                        })
                    }, [l, t, n, o]), (0, a.jsx)("div", {
                        ref: u,
                        children: t
                    })
                }
        },
        7246: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return GetStarted
                }
            });
            var o = n(5893),
                a = n(3967),
                s = n.n(a),
                l = n(1664),
                u = n.n(l),
                c = n(8439);
            let EnterArrowIcon = e => {
                let {
                    className: t
                } = e;
                return (0, o.jsxs)("svg", {
                    width: "18",
                    height: "19",
                    viewBox: "0 0 18 19",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: t,
                    children: [(0, o.jsx)("path", {
                        d: "M10.6748 6.22778L16.4965 12.0495L10.6748 17.8712",
                        stroke: "white"
                    }), (0, o.jsx)("path", {
                        d: "M0.5 0.128662V12.1287H16.5",
                        stroke: "white"
                    })]
                })
            };
            var d = n(4026),
                f = n(3810);
            let GetStarted = e => {
                let {
                    className: t,
                    buttonText: n = "Sign in to SHARE",
                    href: a = f.N.getStarted,
                    isHovered: l,
                    target: h = "_blank",
                    rel: m = "noreferrer noopener"
                } = e, g = (0, d.B)(), b = void 0 !== l ? l : g.isHovered;
                return (0, o.jsxs)("div", {
                    className: s()("flex w-fit cursor-pointer flex-col items-center", t),
                    ...void 0 !== l ? {} : g.bind,
                    children: [(0, o.jsxs)(u(), {
                        href: a,
                        className: "flex items-center justify-center overflow-hidden pb-2.5",
                        target: h,
                        rel: m,
                        children: [(0, o.jsx)("span", {
                            className: "text-button",
                            children: n
                        }), (0, o.jsx)(EnterArrowIcon, {
                            className: "ml-4"
                        })]
                    }), (0, o.jsx)(c.E.div, {
                        className: "flex h-px w-full self-start bg-light",
                        animate: {
                            width: b ? "100%" : 0
                        }
                    })]
                })
            }
        },
        9604: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return FormlessType
                },
                W: function() {
                    return AnimatedFormlessType
                }
            });
            var o = n(5893),
                a = n(7294),
                s = n(6893),
                l = n(8439),
                u = n(8688);
            let FormlessType = e => (0, o.jsxs)("svg", {
                    width: "160",
                    height: "22",
                    viewBox: "0 0 160 22",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, o.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M152.06 0.759766V1.42526H153.138V4.3595H153.931V1.42526H155.01V0.759766H152.06ZM157.379 3.23564L156.538 0.759766H155.423V4.3595H156.164V1.83364H156.174L157.057 4.3595H157.667L158.55 1.80885H158.56V4.3595H159.302V0.759766H158.187L157.389 3.23564H157.379Z",
                        fill: "white"
                    }), (0, o.jsxs)("g", {
                        clipPath: "url(#clip0_4572_192)",
                        children: [(0, o.jsx)("path", {
                            d: "M13.9878 4.70324H4.51811V9.10444H13.1522V12.4119H4.51811V20.781H0.416016V1.24316H13.9878V4.70324Z",
                            fill: "white"
                        }), (0, o.jsx)("path", {
                            d: "M25.1332 21.189C22.179 21.189 19.8157 20.2561 18.0433 18.3904C16.2539 16.5418 15.3594 14.0825 15.3594 11.0124C15.3594 7.92566 16.2539 5.45793 18.0433 3.60918C19.8156 1.74343 22.1789 0.810547 25.1332 0.810547C28.0536 0.810547 30.4169 1.74343 32.223 3.60918C33.9954 5.45793 34.8816 7.92566 34.8816 11.0124C34.8816 14.0991 33.9954 16.5672 32.223 18.4167C30.4506 20.2649 28.0873 21.189 25.1332 21.189ZM25.1332 17.7797C26.8551 17.7797 28.2055 17.1946 29.1843 16.0245C30.1635 14.8713 30.6531 13.2005 30.6531 11.0124C30.6531 8.82424 30.1635 7.15362 29.1843 6.00053C28.2052 4.83025 26.8548 4.2451 25.1332 4.2451C23.4115 4.2451 22.0612 4.83025 21.082 6.00053C20.0861 7.18765 19.5881 8.85828 19.5881 11.0124C19.5881 13.1665 20.0861 14.8372 21.082 16.0245C22.061 17.1948 23.4114 17.7799 25.1332 17.7797Z",
                            fill: "white"
                        }), (0, o.jsx)("path", {
                            d: "M53.5464 20.781H49.5711L48.9131 16.3298C48.7275 15.1425 48.4066 14.3242 47.9504 13.8748C47.4943 13.4254 46.7432 13.2006 45.697 13.2004H41.4936V20.781H37.3916V1.24316H47.596C49.419 1.24316 50.8328 1.68413 51.8372 2.56605C52.8417 3.44797 53.3438 4.67763 53.3437 6.25503C53.3437 8.76539 51.9427 10.4785 49.1406 11.3942C51.048 11.8013 52.1789 13.031 52.5333 15.0832L53.5464 20.781ZM45.2666 9.94293C46.4989 9.94293 47.4444 9.68851 48.1027 9.17967C48.761 8.67083 49.0901 7.93308 49.0901 6.96644C49.0901 5.32116 48.0267 4.49853 45.8999 4.49853H41.4938V9.94401L45.2666 9.94293Z",
                            fill: "white"
                        }), (0, o.jsx)("path", {
                            d: "M72.5157 1.24316H78.7191V20.781H74.8449V6.25503L74.8957 4.1181L74.2628 6.25503L69.2746 20.781H65.3753L60.4126 6.27948L59.7795 4.0915L59.8045 6.27948V20.781H55.9307V1.24316H62.4126L66.5147 14.3455L67.3248 17.449L68.1859 14.3455L72.5157 1.24316Z",
                            fill: "white"
                        }), (0, o.jsx)("path", {
                            d: "M86.0665 17.2712H95.182V20.781H81.7871V1.24316H86.0653L86.0665 17.2712Z",
                            fill: "white"
                        }), (0, o.jsx)("path", {
                            d: "M101.034 17.322H111.288V20.781H96.9316V1.24316H111.237V4.70324H101.033V9.07919H110.351V12.4374H101.033L101.034 17.322Z",
                            fill: "white"
                        }), (0, o.jsx)("path", {
                            d: "M113.316 15.542L117.418 15.0584C117.823 17.0768 119.309 18.0859 121.875 18.0859C123.192 18.0859 124.204 17.8531 124.913 17.3874C125.248 17.1827 125.523 16.8923 125.71 16.5459C125.897 16.1995 125.989 15.8095 125.977 15.4157C125.994 15.1006 125.933 14.7862 125.801 14.5001C125.668 14.214 125.468 13.9649 125.217 13.7747C124.711 13.3931 123.858 13.0751 122.66 12.8207L120.027 12.3119C117.984 11.9048 116.478 11.2433 115.508 10.3276C114.538 9.41178 114.052 8.1651 114.052 6.58753C114.052 4.73896 114.731 3.30611 116.09 2.28896C117.449 1.27181 119.386 0.763054 121.901 0.762695C126.476 0.762695 129.143 2.48418 129.903 5.92716L125.927 6.38388C125.848 5.9893 125.69 5.61476 125.464 5.28249C125.238 4.95021 124.948 4.66696 124.61 4.44953C123.952 4.04241 123.024 3.83886 121.825 3.83886C119.445 3.83886 118.255 4.63589 118.255 6.22994C118.235 6.51755 118.283 6.80591 118.395 7.07127C118.507 7.33663 118.681 7.57139 118.901 7.7562C119.331 8.09561 120.12 8.38397 121.268 8.62129L123.598 9.10488C125.927 9.59688 127.607 10.2923 128.636 11.191C129.666 12.0898 130.181 13.311 130.181 14.8548C130.181 16.8729 129.434 18.4417 127.94 19.5612C126.446 20.6806 124.366 21.2403 121.699 21.2403C116.853 21.2399 114.059 19.3405 113.316 15.542Z",
                            fill: "white"
                        }), (0, o.jsx)("path", {
                            d: "M132.022 15.542L136.125 15.0584C136.53 17.0768 138.015 18.0859 140.581 18.0859C141.898 18.0859 142.91 17.8531 143.619 17.3874C143.955 17.1828 144.23 16.8924 144.416 16.546C144.603 16.1996 144.695 15.8095 144.683 15.4157C144.7 15.1006 144.639 14.7862 144.507 14.5001C144.374 14.2139 144.174 13.9649 143.923 13.7747C143.417 13.3931 142.565 13.0751 141.366 12.8207L138.733 12.3119C136.69 11.9048 135.184 11.2433 134.214 10.3276C133.244 9.41178 132.758 8.1651 132.758 6.58753C132.758 4.73896 133.437 3.30611 134.796 2.28896C136.155 1.27181 138.092 0.763054 140.607 0.762695C145.182 0.762695 147.849 2.48418 148.609 5.92716L144.633 6.38388C144.554 5.98934 144.396 5.61485 144.17 5.28259C143.944 4.95033 143.654 4.66705 143.316 4.44953C142.658 4.04241 141.73 3.83886 140.531 3.83886C138.151 3.83886 136.961 4.63589 136.961 6.22994C136.941 6.51754 136.988 6.80589 137.101 7.07123C137.213 7.33658 137.386 7.57134 137.607 7.7562C138.037 8.09561 138.826 8.38397 139.974 8.62129L142.304 9.10488C144.633 9.59688 146.313 10.2923 147.342 11.191C148.372 12.0898 148.887 13.311 148.887 14.8548C148.887 16.8729 148.14 18.4417 146.646 19.5612C145.152 20.6806 143.072 21.2403 140.405 21.2403C135.56 21.2399 132.765 19.3405 132.022 15.542Z",
                            fill: "white"
                        })]
                    }), (0, o.jsx)("defs", {
                        children: (0, o.jsx)("clipPath", {
                            id: "clip0_4572_192",
                            children: (0, o.jsx)("rect", {
                                width: "148.48",
                                height: "20.48",
                                fill: "white",
                                transform: "translate(0.411133 0.759766)"
                            })
                        })
                    })]
                }),
                AnimatedFormlessType = e => {
                    let t = (0, a.useRef)(null),
                        n = (0, s.Y)(t, u.s.viewport),
                        getLetterProps = t => ({
                            fill: "white",
                            animate: {
                                y: n ? 0 : 170
                            },
                            initial: {
                                y: 170
                            },
                            transition: u.s.transitions.entrance({
                                index: t,
                                delay: (0, u.v)({
                                    base: e.delay + .2,
                                    perIndex: .025,
                                    index: t
                                })
                            })
                        });
                    return (0, o.jsx)("div", {
                        ref: t,
                        children: (0, o.jsxs)(l.E.svg, {
                            width: "915",
                            height: "127",
                            viewBox: "0 0 915 127",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            ...e,
                            children: [(0, o.jsx)(l.E.path, {
                                d: "M83.8796 24.7717H25.5471V51.8827H78.7324V72.2564H25.5471V123.809H0.278687V3.45801H83.8796V24.7717Z",
                                ...getLetterProps(0)
                            }), (0, o.jsx)(l.E.path, {
                                d: "M152.531 126.323C134.334 126.323 119.776 120.577 108.858 109.084C97.8357 97.6968 92.3252 82.5476 92.3252 63.6363C92.3252 44.6224 97.8357 29.4213 108.858 18.0333C119.775 6.54039 134.333 0.793945 152.531 0.793945C170.52 0.793945 185.078 6.54039 196.203 18.0333C207.121 29.4213 212.58 44.6224 212.58 63.6363C212.58 82.6503 207.121 97.8535 196.203 109.246C185.285 120.631 170.728 126.323 152.531 126.323ZM152.531 105.322C163.138 105.322 171.456 101.718 177.485 94.5105C183.517 87.4065 186.533 77.1151 186.533 63.6363C186.533 50.1575 183.517 39.8667 177.485 32.7637C171.454 25.5549 163.136 21.9505 152.531 21.9505C141.926 21.9505 133.608 25.5549 127.576 32.7637C121.441 40.0763 118.374 50.3671 118.374 63.6363C118.374 76.9055 121.441 87.1969 127.576 94.5105C133.606 101.719 141.925 105.323 152.531 105.322Z",
                                ...getLetterProps(1)
                            }), (0, o.jsx)(l.E.path, {
                                d: "M327.555 123.809H303.068L299.014 96.3902C297.871 89.0765 295.895 84.0356 293.085 81.2675C290.275 78.4994 285.648 77.1147 279.203 77.1136H253.311V123.809H228.043V3.45801H290.901C302.131 3.45801 310.839 6.17429 317.027 11.6068C323.214 17.0394 326.307 24.614 326.306 34.3306C326.306 49.7942 317.676 60.3465 300.416 65.9876C312.165 68.4954 319.131 76.0699 321.314 88.7113L327.555 123.809ZM276.553 57.0477C284.144 57.0477 289.967 55.4805 294.022 52.3461C298.078 49.2116 300.105 44.6672 300.105 38.7128C300.105 28.5781 293.554 23.5107 280.453 23.5107H253.313V57.0543L276.553 57.0477Z",
                                ...getLetterProps(2)
                            }), (0, o.jsx)(l.E.path, {
                                d: "M444.403 3.45801H482.615V123.809H458.75V34.3306L459.063 21.1673L455.165 34.3306L424.438 123.809H400.419L369.849 34.4812L365.949 21.0035L366.103 34.4812V123.809H342.241V3.45801H382.169L407.437 84.1669L412.428 103.285L417.732 84.1669L444.403 3.45801Z",
                                ...getLetterProps(3)
                            }), (0, o.jsx)(l.E.path, {
                                d: "M527.874 102.189H584.025V123.809H501.513V3.45801H527.867L527.874 102.189Z",
                                ...getLetterProps(4)
                            }), (0, o.jsx)(l.E.path, {
                                d: "M620.074 102.502H683.243V123.809H594.806V3.45801H682.925V24.7717H620.067V51.7271H677.467V72.4136H620.067L620.074 102.502Z",
                                ...getLetterProps(5)
                            }), (0, o.jsx)(l.E.path, {
                                d: "M695.733 91.5379L721.001 88.5591C723.496 100.992 732.647 107.208 748.453 107.208C756.564 107.208 762.802 105.774 767.169 102.906C769.233 101.645 770.927 99.856 772.078 97.7222C773.229 95.5885 773.796 93.186 773.721 90.7601C773.824 88.8192 773.451 86.8825 772.635 85.1201C771.819 83.3577 770.585 81.8234 769.042 80.6519C765.921 78.3008 760.67 76.3419 753.288 74.7752L737.067 71.6408C724.484 69.1331 715.206 65.0586 709.231 59.4176C703.257 53.7765 700.267 46.0971 700.262 36.3794C700.262 24.9924 704.448 16.1662 712.818 9.90064C721.189 3.6351 733.121 0.50123 748.614 0.499023C776.795 0.499023 793.224 11.1032 797.902 32.3116L773.415 35.125C772.925 32.6944 771.955 30.3873 770.562 28.3405C769.168 26.2937 767.38 24.5489 765.303 23.2095C761.248 20.7018 755.529 19.4479 748.147 19.4479C733.487 19.4479 726.156 24.3575 726.155 34.1767C726.029 35.9483 726.325 37.7246 727.016 39.3592C727.708 40.9938 728.776 42.4399 730.133 43.5783C732.782 45.669 737.643 47.4453 744.716 48.9071L759.065 51.886C773.415 54.9167 783.76 59.2002 790.103 64.7365C796.445 70.2727 799.617 77.7955 799.617 87.3046C799.617 99.7364 795.015 109.4 785.814 116.296C776.612 123.191 763.797 126.639 747.368 126.639C717.52 126.637 700.308 114.936 695.733 91.5379Z",
                                ...getLetterProps(6)
                            }), (0, o.jsx)(l.E.path, {
                                d: "M810.957 91.5379L836.225 88.5591C838.722 100.992 847.873 107.208 863.677 107.208C871.787 107.208 878.025 105.774 882.392 102.906C884.457 101.645 886.151 99.8563 887.302 97.7225C888.453 95.5886 889.02 93.1861 888.945 90.7601C889.048 88.8191 888.675 86.8823 887.859 85.1198C887.043 83.3574 885.809 81.8231 884.266 80.6519C881.146 78.3008 875.895 76.3419 868.513 74.7752L852.291 71.6408C839.708 69.1331 830.429 65.0586 824.455 59.4176C818.48 53.7765 815.49 46.0971 815.484 36.3794C815.484 24.9924 819.67 16.1662 828.042 9.90064C836.413 3.6351 848.345 0.50123 863.838 0.499023C892.016 0.499023 908.446 11.1032 913.126 32.3116L888.638 35.125C888.148 32.6946 887.177 30.3878 885.784 28.3411C884.391 26.2944 882.603 24.5494 880.527 23.2095C876.471 20.7018 870.753 19.4479 863.371 19.4479C848.708 19.4479 841.377 24.3575 841.377 34.1767C841.252 35.9483 841.547 37.7245 842.238 39.359C842.93 40.9935 843.998 42.4396 845.355 43.5783C848.007 45.669 852.868 47.4453 859.938 48.9071L874.289 51.886C888.638 54.9167 898.983 59.2002 905.325 64.7365C911.666 70.2727 914.839 77.7955 914.842 87.3046C914.842 99.7364 910.24 109.4 901.037 116.296C891.834 123.191 879.019 126.639 862.59 126.639C832.744 126.637 815.533 114.936 810.957 91.5379Z",
                                ...getLetterProps(7)
                            })]
                        })
                    })
                }
        },
        2878: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return LogoIcon
                }
            });
            var o = n(5893);
            let LogoIcon = e => (0, o.jsx)("svg", {
                width: "30",
                height: "32",
                viewBox: "0 0 30 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: (0, o.jsx)("path", {
                    d: "M12.0451 0.663173L2.47855 6.19034C1.72506 6.62567 1.09974 7.25061 0.665328 8.0025C0.23018 8.75564 0.000794475 9.60917 0 10.4781V21.5324C0.00266761 22.3995 0.232913 23.2509 0.667835 24.0022C1.10216 24.7517 1.72625 25.3747 2.4779 25.809L12.0445 31.3359C12.7971 31.7707 13.6517 31.9998 14.5218 32C15.3919 31.9998 16.2466 31.7707 16.9993 31.3359L26.5658 25.809C27.3175 25.3747 27.9415 24.7517 28.3757 24.0022C28.811 23.2514 29.0418 22.4004 29.0453 21.5335V10.4792C29.0443 9.61027 28.8148 8.75678 28.3797 8.00361C27.9454 7.25169 27.3202 6.62673 26.5667 6.19145L17.0001 0.664285C16.2474 0.229534 15.3928 0.000381517 14.5226 0C13.6525 0.000311052 12.7978 0.229386 12.0451 0.664061V0.663173ZM14.5226 23.2054H4.22486C4.04472 23.2065 3.86758 23.1598 3.71156 23.0701C3.55512 22.9801 3.42552 22.8504 3.33612 22.694C3.24659 22.5376 3.20035 22.3603 3.20219 22.1802C3.20386 22.0002 3.25332 21.8239 3.3455 21.6691L8.48809 12.7465L13.6439 3.82368C13.7347 3.66972 13.8642 3.54196 14.0196 3.45298C14.1749 3.36434 14.3509 3.31769 14.5299 3.31763C14.7089 3.31769 14.8848 3.36434 15.0401 3.45298C15.1956 3.54196 15.3252 3.66972 15.416 3.82368L20.5718 12.7465L25.7144 21.6691C25.8065 21.8239 25.8559 22.0002 25.8576 22.1802C25.8594 22.3603 25.8133 22.5376 25.7237 22.694C25.6343 22.8504 25.5047 22.9801 25.3483 23.0701C25.1923 23.1598 25.015 23.2065 24.8349 23.2054H14.5226Z",
                    fill: "white"
                })
            })
        },
        6731: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return SocialIcons
                }
            });
            var o = n(5893);
            let DiscordLogoIcon = e => (0, o.jsx)("svg", {
                    width: "24",
                    height: "25",
                    viewBox: "0 0 24 25",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, o.jsx)("path", {
                        d: "M19.6246 5.13619C18.2223 4.49277 16.7186 4.01873 15.1464 3.74723C15.1178 3.74199 15.0892 3.75509 15.0744 3.78128C14.881 4.12524 14.6668 4.57396 14.5168 4.92665C12.8258 4.67349 11.1434 4.67349 9.48709 4.92665C9.33705 4.56612 9.11506 4.12524 8.9208 3.78128C8.90605 3.75596 8.87745 3.74287 8.84882 3.74723C7.27747 4.01787 5.77376 4.49191 4.37064 5.13619C4.35849 5.14142 4.34808 5.15016 4.34117 5.1615C1.48896 9.42265 0.707619 13.5791 1.09092 17.6839C1.09265 17.704 1.10393 17.7232 1.11954 17.7354C3.00134 19.1174 4.8242 19.9564 6.6132 20.5125C6.64183 20.5212 6.67217 20.5107 6.69039 20.4871C7.11358 19.9092 7.49082 19.2999 7.81426 18.6591C7.83335 18.6215 7.81513 18.577 7.77611 18.5622C7.17775 18.3352 6.608 18.0584 6.05993 17.7442C6.01658 17.7189 6.01311 17.6569 6.05299 17.6272C6.16832 17.5407 6.28369 17.4508 6.39381 17.36C6.41374 17.3435 6.4415 17.34 6.46493 17.3504C10.0655 18.9943 13.9635 18.9943 17.5216 17.3504C17.545 17.3391 17.5728 17.3426 17.5936 17.3592C17.7038 17.45 17.8191 17.5407 17.9353 17.6272C17.9752 17.6569 17.9726 17.7189 17.9292 17.7442C17.3812 18.0646 16.8114 18.3352 16.2122 18.5613C16.1732 18.5761 16.1558 18.6215 16.1749 18.6591C16.5053 19.299 16.8825 19.9083 17.2979 20.4863C17.3152 20.5107 17.3464 20.5212 17.3751 20.5125C19.1728 19.9564 20.9956 19.1174 22.8774 17.7354C22.8939 17.7232 22.9043 17.7049 22.906 17.6848C23.3648 12.9391 22.1377 8.81679 19.6532 5.16237C19.6471 5.15016 19.6367 5.14142 19.6246 5.13619ZM8.35194 15.1845C7.26793 15.1845 6.37473 14.1893 6.37473 12.9671C6.37473 11.7448 7.25061 10.7496 8.35194 10.7496C9.46193 10.7496 10.3465 11.7536 10.3291 12.9671C10.3291 14.1893 9.45325 15.1845 8.35194 15.1845ZM15.6624 15.1845C14.5784 15.1845 13.6852 14.1893 13.6852 12.9671C13.6852 11.7448 14.561 10.7496 15.6624 10.7496C16.7724 10.7496 17.6569 11.7536 17.6396 12.9671C17.6396 14.1893 16.7724 15.1845 15.6624 15.1845Z",
                        fill: "white"
                    })
                }),
                InstagramLogoIcon = e => (0, o.jsx)("svg", {
                    width: "24",
                    height: "25",
                    viewBox: "0 0 24 25",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, o.jsx)("path", {
                        d: "M12.0022 7.35554C9.16453 7.35554 6.87563 9.64444 6.87563 12.4821C6.87563 15.3198 9.16453 17.6087 12.0022 17.6087C14.8399 17.6087 17.1288 15.3198 17.1288 12.4821C17.1288 9.64444 14.8399 7.35554 12.0022 7.35554ZM12.0022 15.8151C10.1684 15.8151 8.66927 14.3204 8.66927 12.4821C8.66927 10.6439 10.164 9.14918 12.0022 9.14918C13.8405 9.14918 15.3352 10.6439 15.3352 12.4821C15.3352 14.3204 13.836 15.8151 12.0022 15.8151ZM18.5343 7.14584C18.5343 7.81064 17.9989 8.3416 17.3385 8.3416C16.6737 8.3416 16.1428 7.80618 16.1428 7.14584C16.1428 6.48549 16.6782 5.95007 17.3385 5.95007C17.9989 5.95007 18.5343 6.48549 18.5343 7.14584ZM21.9297 8.35945C21.8539 6.75766 21.488 5.33881 20.3146 4.16982C19.1456 3.00083 17.7267 2.63496 16.1249 2.55465C14.4741 2.46095 9.52593 2.46095 7.87507 2.55465C6.27775 2.6305 4.8589 2.99637 3.68544 4.16536C2.51199 5.33435 2.15059 6.7532 2.07027 8.35498C1.97658 10.0058 1.97658 14.954 2.07027 16.6048C2.14612 18.2066 2.51199 19.6255 3.68544 20.7945C4.8589 21.9635 6.27328 22.3293 7.87507 22.4096C9.52593 22.5033 14.4741 22.5033 16.1249 22.4096C17.7267 22.3338 19.1456 21.9679 20.3146 20.7945C21.4835 19.6255 21.8494 18.2066 21.9297 16.6048C22.0234 14.954 22.0234 10.0103 21.9297 8.35945ZM19.797 18.3762C19.449 19.2507 18.7752 19.9244 17.8963 20.2769C16.58 20.7989 13.4568 20.6785 12.0022 20.6785C10.5477 20.6785 7.41997 20.7945 6.1082 20.2769C5.23369 19.9289 4.55996 19.2552 4.20747 18.3762C3.68544 17.0599 3.80591 13.9367 3.80591 12.4821C3.80591 11.0276 3.68991 7.89988 4.20747 6.58811C4.55549 5.7136 5.22922 5.03987 6.1082 4.68739C7.42443 4.16536 10.5477 4.28583 12.0022 4.28583C13.4568 4.28583 16.5845 4.16982 17.8963 4.68739C18.7708 5.03541 19.4445 5.70914 19.797 6.58811C20.319 7.90434 20.1985 11.0276 20.1985 12.4821C20.1985 13.9367 20.319 17.0644 19.797 18.3762Z",
                        fill: "white"
                    })
                }),
                LinkedInLogoIcon = e => (0, o.jsx)("svg", {
                    width: "24",
                    height: "25",
                    viewBox: "0 0 24 25",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, o.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3 5.46573C3 4.34167 3.86245 3.48438 5.18229 3.48438C6.50213 3.48438 7.31563 4.34 7.34264 5.46573C7.34264 6.56797 6.50381 7.44876 5.15866 7.44876H5.13334C3.83713 7.44876 3 6.56629 3 5.46573ZM16.5574 8.74378C14.5085 8.74378 13.592 9.85777 13.0789 10.6379V9.01389H9.2207C9.27134 10.091 9.2207 20.4843 9.2207 20.4843H13.0789V14.0788C13.0789 13.7366 13.1043 13.3943 13.2055 13.1494C13.484 12.4649 14.1186 11.7552 15.1853 11.7552C16.5828 11.7552 17.1414 12.8071 17.1414 14.3489V20.4843H20.9997V13.9077C20.9997 10.3829 19.0959 8.74378 16.5574 8.74378ZM7.08578 9.01462H3.22754V20.485H7.08578V9.01462Z",
                        fill: "white"
                    })
                }),
                XLogoIcon = e => (0, o.jsx)("svg", {
                    width: "24",
                    height: "25",
                    viewBox: "0 0 24 25",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, o.jsx)("path", {
                        d: "M17.1761 4.35938H19.9362L13.9061 11.2513L21 20.6297H15.4456L11.0951 14.9418L6.11723 20.6297H3.35544L9.80517 13.258L3 4.35938H8.69545L12.6279 9.55837L17.1761 4.35938ZM16.2073 18.9776H17.7368L7.86441 5.92466H6.2232L16.2073 18.9776Z",
                        fill: "white"
                    })
                });
            var a = n(3967),
                s = n.n(a),
                l = n(1664),
                u = n.n(l),
                c = n(3810);
            let SocialIcons = e => {
                let {
                    className: t
                } = e;
                return (0, o.jsxs)("div", {
                    className: s()("flex flex-col gap-6 lg:flex-row lg:gap-[62px]", t),
                    children: [(0, o.jsx)(u(), {
                        href: c.N.socials.x,
                        className: "interactive-opacity p-0.5",
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: (0, o.jsx)(XLogoIcon, {})
                    }), (0, o.jsx)(u(), {
                        href: c.N.socials.linkedIn,
                        className: "interactive-opacity p-0.5",
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: (0, o.jsx)(LinkedInLogoIcon, {})
                    }), (0, o.jsx)(u(), {
                        href: c.N.socials.instagram,
                        className: "interactive-opacity p-0.5",
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: (0, o.jsx)(InstagramLogoIcon, {})
                    }), (0, o.jsx)(u(), {
                        href: c.N.socials.discord,
                        className: "interactive-opacity p-0.5",
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: (0, o.jsx)(DiscordLogoIcon, {
                            width: 24,
                            height: 24
                        })
                    })]
                })
            }
        },
        665: function(e, t, n) {
            "use strict";
            n.d(t, {
                bj: function() {
                    return useIsPageLoading
                },
                r9: function() {
                    return useBasePageDelay
                },
                vv: function() {
                    return PageLoadingProvider
                }
            });
            var o = n(5893),
                a = n(7294);
            let s = (0, a.createContext)({
                    isLoading: !1
                }),
                PageLoadingProvider = e => {
                    let {
                        children: t
                    } = e, [n, l] = (0, a.useState)(!0);
                    (0, a.useEffect)(() => {
                        setTimeout(() => l(!1), 1e3)
                    }, []);
                    let u = (0, a.useMemo)(() => ({
                        isLoading: n
                    }), [n]);
                    return (0, o.jsx)(s.Provider, {
                        value: u,
                        children: t
                    })
                },
                useIsPageLoading = () => (0, a.useContext)(s).isLoading,
                useBasePageDelay = () => {
                    let e = useIsPageLoading();
                    return e ? 1.5 : 0
                }
        },
        4026: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return useHoverState
                }
            });
            var o = n(7294);
            let useHoverState = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    [t, n] = (0, o.useState)(e),
                    a = (0, o.useMemo)(() => ({
                        onMouseEnter: () => n(!0),
                        onMouseLeave: () => n(!1)
                    }), []);
                return {
                    isHovered: t,
                    set: n,
                    bind: a
                }
            }
        },
        2422: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "createAsyncLocalStorage", {
                enumerable: !0,
                get: function() {
                    return createAsyncLocalStorage
                }
            });
            let n = Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
            let FakeAsyncLocalStorage = class FakeAsyncLocalStorage {
                disable() {
                    throw n
                }
                getStore() {}
                run() {
                    throw n
                }
                exit() {
                    throw n
                }
                enterWith() {
                    throw n
                }
            };
            let o = globalThis.AsyncLocalStorage;

            function createAsyncLocalStorage() {
                return o ? new o : new FakeAsyncLocalStorage
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        8427: function(e, t, n) {
            "use strict";

            function clientHookInServerComponentError(e) {}
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "clientHookInServerComponentError", {
                enumerable: !0,
                get: function() {
                    return clientHookInServerComponentError
                }
            }), n(260), n(7294), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        636: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    ReadonlyURLSearchParams: function() {
                        return ReadonlyURLSearchParams
                    },
                    useSearchParams: function() {
                        return useSearchParams
                    },
                    usePathname: function() {
                        return usePathname
                    },
                    ServerInsertedHTMLContext: function() {
                        return c.ServerInsertedHTMLContext
                    },
                    useServerInsertedHTML: function() {
                        return c.useServerInsertedHTML
                    },
                    useRouter: function() {
                        return useRouter
                    },
                    useParams: function() {
                        return useParams
                    },
                    useSelectedLayoutSegments: function() {
                        return useSelectedLayoutSegments
                    },
                    useSelectedLayoutSegment: function() {
                        return useSelectedLayoutSegment
                    },
                    redirect: function() {
                        return d.redirect
                    },
                    permanentRedirect: function() {
                        return d.permanentRedirect
                    },
                    RedirectType: function() {
                        return d.RedirectType
                    },
                    notFound: function() {
                        return f.notFound
                    }
                });
            let o = n(7294),
                a = n(9031),
                s = n(1593),
                l = n(8427),
                u = n(6160),
                c = n(252),
                d = n(7866),
                f = n(9363),
                h = Symbol("internal for urlsearchparams readonly");

            function readonlyURLSearchParamsError() {
                return Error("ReadonlyURLSearchParams cannot be modified")
            }
            let ReadonlyURLSearchParams = class ReadonlyURLSearchParams {
                [Symbol.iterator]() {
                    return this[h][Symbol.iterator]()
                }
                append() {
                    throw readonlyURLSearchParamsError()
                }
                delete() {
                    throw readonlyURLSearchParamsError()
                }
                set() {
                    throw readonlyURLSearchParamsError()
                }
                sort() {
                    throw readonlyURLSearchParamsError()
                }
                constructor(e) {
                    this[h] = e, this.entries = e.entries.bind(e), this.forEach = e.forEach.bind(e), this.get = e.get.bind(e), this.getAll = e.getAll.bind(e), this.has = e.has.bind(e), this.keys = e.keys.bind(e), this.values = e.values.bind(e), this.toString = e.toString.bind(e), this.size = e.size
                }
            };

            function useSearchParams() {
                (0, l.clientHookInServerComponentError)("useSearchParams");
                let e = (0, o.useContext)(s.SearchParamsContext),
                    t = (0, o.useMemo)(() => e ? new ReadonlyURLSearchParams(e) : null, [e]);
                return t
            }

            function usePathname() {
                return (0, l.clientHookInServerComponentError)("usePathname"), (0, o.useContext)(s.PathnameContext)
            }

            function useRouter() {
                (0, l.clientHookInServerComponentError)("useRouter");
                let e = (0, o.useContext)(a.AppRouterContext);
                if (null === e) throw Error("invariant expected app router to be mounted");
                return e
            }

            function useParams() {
                (0, l.clientHookInServerComponentError)("useParams");
                let e = (0, o.useContext)(a.GlobalLayoutRouterContext),
                    t = (0, o.useContext)(s.PathParamsContext);
                return (0, o.useMemo)(() => (null == e ? void 0 : e.tree) ? function getSelectedParams(e, t) {
                    void 0 === t && (t = {});
                    let n = e[1];
                    for (let e of Object.values(n)) {
                        let n = e[0],
                            o = Array.isArray(n),
                            a = o ? n[1] : n;
                        if (!a || a.startsWith("__PAGE__")) continue;
                        let s = o && ("c" === n[2] || "oc" === n[2]);
                        s ? t[n[0]] = n[1].split("/") : o && (t[n[0]] = n[1]), t = getSelectedParams(e, t)
                    }
                    return t
                }(e.tree) : t, [null == e ? void 0 : e.tree, t])
            }

            function useSelectedLayoutSegments(e) {
                void 0 === e && (e = "children"), (0, l.clientHookInServerComponentError)("useSelectedLayoutSegments");
                let {
                    tree: t
                } = (0, o.useContext)(a.LayoutRouterContext);
                return function getSelectedLayoutSegmentPath(e, t, n, o) {
                    let a;
                    if (void 0 === n && (n = !0), void 0 === o && (o = []), n) a = e[1][t];
                    else {
                        var s;
                        let t = e[1];
                        a = null != (s = t.children) ? s : Object.values(t)[0]
                    }
                    if (!a) return o;
                    let l = a[0],
                        c = (0, u.getSegmentValue)(l);
                    return !c || c.startsWith("__PAGE__") ? o : (o.push(c), getSelectedLayoutSegmentPath(a, t, !1, o))
                }(t, e)
            }

            function useSelectedLayoutSegment(e) {
                void 0 === e && (e = "children"), (0, l.clientHookInServerComponentError)("useSelectedLayoutSegment");
                let t = useSelectedLayoutSegments(e);
                return 0 === t.length ? null : t[0]
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        9363: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    notFound: function() {
                        return notFound
                    },
                    isNotFoundError: function() {
                        return isNotFoundError
                    }
                });
            let n = "NEXT_NOT_FOUND";

            function notFound() {
                let e = Error(n);
                throw e.digest = n, e
            }

            function isNotFoundError(e) {
                return (null == e ? void 0 : e.digest) === n
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        7866: function(e, t, n) {
            "use strict";
            var o, a;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    RedirectType: function() {
                        return o
                    },
                    getRedirectError: function() {
                        return getRedirectError
                    },
                    redirect: function() {
                        return redirect
                    },
                    permanentRedirect: function() {
                        return permanentRedirect
                    },
                    isRedirectError: function() {
                        return isRedirectError
                    },
                    getURLFromRedirectError: function() {
                        return getURLFromRedirectError
                    },
                    getRedirectTypeFromError: function() {
                        return getRedirectTypeFromError
                    }
                });
            let s = n(3743),
                l = "NEXT_REDIRECT";

            function getRedirectError(e, t, n) {
                void 0 === n && (n = !1);
                let o = Error(l);
                o.digest = l + ";" + t + ";" + e + ";" + n;
                let a = s.requestAsyncStorage.getStore();
                return a && (o.mutableCookies = a.mutableCookies), o
            }

            function redirect(e, t) {
                throw void 0 === t && (t = "replace"), getRedirectError(e, t, !1)
            }

            function permanentRedirect(e, t) {
                throw void 0 === t && (t = "replace"), getRedirectError(e, t, !0)
            }

            function isRedirectError(e) {
                if ("string" != typeof(null == e ? void 0 : e.digest)) return !1;
                let [t, n, o, a] = e.digest.split(";", 4);
                return t === l && ("replace" === n || "push" === n) && "string" == typeof o && ("true" === a || "false" === a)
            }

            function getURLFromRedirectError(e) {
                return isRedirectError(e) ? e.digest.split(";", 3)[2] : null
            }

            function getRedirectTypeFromError(e) {
                if (!isRedirectError(e)) throw Error("Not a redirect error");
                return e.digest.split(";", 3)[1]
            }(a = o || (o = {})).push = "push", a.replace = "replace", ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        3743: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "requestAsyncStorage", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let o = n(2422),
                a = (0, o.createAsyncLocalStorage)();
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        6160: function(e, t) {
            "use strict";

            function getSegmentValue(e) {
                return Array.isArray(e) ? e[1] : e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getSegmentValue", {
                enumerable: !0,
                get: function() {
                    return getSegmentValue
                }
            }), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        7498: function(e, t) {
            "use strict";
            var n, o;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    PrefetchKind: function() {
                        return n
                    },
                    ACTION_REFRESH: function() {
                        return a
                    },
                    ACTION_NAVIGATE: function() {
                        return s
                    },
                    ACTION_RESTORE: function() {
                        return l
                    },
                    ACTION_SERVER_PATCH: function() {
                        return u
                    },
                    ACTION_PREFETCH: function() {
                        return c
                    },
                    ACTION_FAST_REFRESH: function() {
                        return d
                    },
                    ACTION_SERVER_ACTION: function() {
                        return f
                    }
                });
            let a = "refresh",
                s = "navigate",
                l = "restore",
                u = "server-patch",
                c = "prefetch",
                d = "fast-refresh",
                f = "server-action";
            (o = n || (n = {})).AUTO = "auto", o.FULL = "full", o.TEMPORARY = "temporary", ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        30: function(e, t, n) {
            "use strict";

            function getDomainLocale(e, t, n, o) {
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return getDomainLocale
                }
            }), n(2866), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        5170: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return E
                }
            });
            let o = n(260),
                a = o._(n(7294)),
                s = n(4450),
                l = n(2227),
                u = n(4364),
                c = n(109),
                d = n(3607),
                f = n(1823),
                h = n(9031),
                m = n(920),
                g = n(30),
                b = n(7192),
                x = n(7498),
                $ = new Set;

            function prefetch(e, t, n, o, a, s) {
                if (!s && !(0, l.isLocalURL)(t)) return;
                if (!o.bypassPrefetchedCheck) {
                    let a = void 0 !== o.locale ? o.locale : "locale" in e ? e.locale : void 0,
                        s = t + "%" + n + "%" + a;
                    if ($.has(s)) return;
                    $.add(s)
                }
                let u = s ? e.prefetch(t, a) : e.prefetch(t, n, o);
                Promise.resolve(u).catch(e => {})
            }

            function formatStringOrUrl(e) {
                return "string" == typeof e ? e : (0, u.formatUrl)(e)
            }
            let C = a.default.forwardRef(function(e, t) {
                    let n, o;
                    let {
                        href: u,
                        as: $,
                        children: C,
                        prefetch: E = null,
                        passHref: P,
                        replace: S,
                        shallow: A,
                        scroll: T,
                        locale: k,
                        onClick: L,
                        onMouseEnter: M,
                        onTouchStart: V,
                        legacyBehavior: j = !1,
                        ...R
                    } = e;
                    n = C, j && ("string" == typeof n || "number" == typeof n) && (n = a.default.createElement("a", null, n));
                    let D = a.default.useContext(f.RouterContext),
                        O = a.default.useContext(h.AppRouterContext),
                        F = null != D ? D : O,
                        B = !D,
                        W = !1 !== E,
                        U = null === E ? x.PrefetchKind.AUTO : x.PrefetchKind.FULL,
                        {
                            href: X,
                            as: J
                        } = a.default.useMemo(() => {
                            if (!D) {
                                let e = formatStringOrUrl(u);
                                return {
                                    href: e,
                                    as: $ ? formatStringOrUrl($) : e
                                }
                            }
                            let [e, t] = (0, s.resolveHref)(D, u, !0);
                            return {
                                href: e,
                                as: $ ? (0, s.resolveHref)(D, $) : t || e
                            }
                        }, [D, u, $]),
                        q = a.default.useRef(X),
                        Y = a.default.useRef(J);
                    j && (o = a.default.Children.only(n));
                    let Q = j ? o && "object" == typeof o && o.ref : t,
                        [et, er, en] = (0, m.useIntersection)({
                            rootMargin: "200px"
                        }),
                        ei = a.default.useCallback(e => {
                            (Y.current !== J || q.current !== X) && (en(), Y.current = J, q.current = X), et(e), Q && ("function" == typeof Q ? Q(e) : "object" == typeof Q && (Q.current = e))
                        }, [J, Q, X, en, et]);
                    a.default.useEffect(() => {
                        F && er && W && prefetch(F, X, J, {
                            locale: k
                        }, {
                            kind: U
                        }, B)
                    }, [J, X, er, k, W, null == D ? void 0 : D.locale, F, B, U]);
                    let eo = {
                        ref: ei,
                        onClick(e) {
                            j || "function" != typeof L || L(e), j && o.props && "function" == typeof o.props.onClick && o.props.onClick(e), F && !e.defaultPrevented && function(e, t, n, o, s, u, c, d, f, h) {
                                let {
                                    nodeName: m
                                } = e.currentTarget, g = "A" === m.toUpperCase();
                                if (g && (function(e) {
                                        let t = e.currentTarget,
                                            n = t.getAttribute("target");
                                        return n && "_self" !== n || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                    }(e) || !f && !(0, l.isLocalURL)(n))) return;
                                e.preventDefault();
                                let navigate = () => {
                                    let e = null == c || c;
                                    "beforePopState" in t ? t[s ? "replace" : "push"](n, o, {
                                        shallow: u,
                                        locale: d,
                                        scroll: e
                                    }) : t[s ? "replace" : "push"](o || n, {
                                        forceOptimisticNavigation: !h,
                                        scroll: e
                                    })
                                };
                                f ? a.default.startTransition(navigate) : navigate()
                            }(e, F, X, J, S, A, T, k, B, W)
                        },
                        onMouseEnter(e) {
                            j || "function" != typeof M || M(e), j && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e), F && (W || !B) && prefetch(F, X, J, {
                                locale: k,
                                priority: !0,
                                bypassPrefetchedCheck: !0
                            }, {
                                kind: U
                            }, B)
                        },
                        onTouchStart(e) {
                            j || "function" != typeof V || V(e), j && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e), F && (W || !B) && prefetch(F, X, J, {
                                locale: k,
                                priority: !0,
                                bypassPrefetchedCheck: !0
                            }, {
                                kind: U
                            }, B)
                        }
                    };
                    if ((0, c.isAbsoluteUrl)(J)) eo.href = J;
                    else if (!j || P || "a" === o.type && !("href" in o.props)) {
                        let e = void 0 !== k ? k : null == D ? void 0 : D.locale,
                            t = (null == D ? void 0 : D.isLocaleDomain) && (0, g.getDomainLocale)(J, e, null == D ? void 0 : D.locales, null == D ? void 0 : D.domainLocales);
                        eo.href = t || (0, b.addBasePath)((0, d.addLocale)(J, e, null == D ? void 0 : D.defaultLocale))
                    }
                    return j ? a.default.cloneElement(o, eo) : a.default.createElement("a", { ...R,
                        ...eo
                    }, n)
                }),
                E = C;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        920: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return useIntersection
                }
            });
            let o = n(7294),
                a = n(3436),
                s = "function" == typeof IntersectionObserver,
                l = new Map,
                u = [];

            function useIntersection(e) {
                let {
                    rootRef: t,
                    rootMargin: n,
                    disabled: c
                } = e, d = c || !s, [f, h] = (0, o.useState)(!1), m = (0, o.useRef)(null), g = (0, o.useCallback)(e => {
                    m.current = e
                }, []);
                (0, o.useEffect)(() => {
                    if (s) {
                        if (d || f) return;
                        let e = m.current;
                        if (e && e.tagName) {
                            let o = function(e, t, n) {
                                let {
                                    id: o,
                                    observer: a,
                                    elements: s
                                } = function(e) {
                                    let t;
                                    let n = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        o = u.find(e => e.root === n.root && e.margin === n.margin);
                                    if (o && (t = l.get(o))) return t;
                                    let a = new Map,
                                        s = new IntersectionObserver(e => {
                                            e.forEach(e => {
                                                let t = a.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            })
                                        }, e);
                                    return t = {
                                        id: n,
                                        observer: s,
                                        elements: a
                                    }, u.push(n), l.set(n, t), t
                                }(n);
                                return s.set(e, t), a.observe(e),
                                    function() {
                                        if (s.delete(e), a.unobserve(e), 0 === s.size) {
                                            a.disconnect(), l.delete(o);
                                            let e = u.findIndex(e => e.root === o.root && e.margin === o.margin);
                                            e > -1 && u.splice(e, 1)
                                        }
                                    }
                            }(e, e => e && h(e), {
                                root: null == t ? void 0 : t.current,
                                rootMargin: n
                            });
                            return o
                        }
                    } else if (!f) {
                        let e = (0, a.requestIdleCallback)(() => h(!0));
                        return () => (0, a.cancelIdleCallback)(e)
                    }
                }, [d, n, t, f, m.current]);
                let b = (0, o.useCallback)(() => {
                    h(!1)
                }, []);
                return [g, f, b]
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        252: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    ServerInsertedHTMLContext: function() {
                        return s
                    },
                    useServerInsertedHTML: function() {
                        return useServerInsertedHTML
                    }
                });
            let o = n(7697),
                a = o._(n(7294)),
                s = a.default.createContext(null);

            function useServerInsertedHTML(e) {
                let t = (0, a.useContext)(s);
                t && t(e)
            }
        },
        6674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return App
                }
            });
            var o, a = n(5893);
            n(7246);
            var s = n(8439);
            let AnimatedCloseIcon = e => {
                let {
                    className: t
                } = e;
                return (0, a.jsxs)(s.E.svg, {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: t,
                    children: [(0, a.jsx)(s.E.path, {
                        stroke: "black",
                        strokeWidth: "2",
                        strokeLinejoin: "round",
                        animate: {
                            d: "M18 6L5 6.3",
                            translateY: "6.2px",
                            translateX: "0.5px",
                            rotate: "45deg",
                            transition: {
                                delay: .5
                            }
                        },
                        initial: {
                            d: "M22 6H2"
                        },
                        exit: {
                            d: "M22 6H8",
                            translateY: "0px",
                            translateX: "0px",
                            rotate: "0deg",
                            transition: {
                                delay: 0
                            }
                        }
                    }), (0, a.jsx)(s.E.path, {
                        d: "M22 12H2",
                        stroke: "black",
                        strokeWidth: "2",
                        strokeLinejoin: "round",
                        animate: {
                            opacity: 0,
                            transition: {
                                opacity: {
                                    duration: .5
                                }
                            }
                        },
                        initial: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 1,
                            transition: {
                                delay: .5
                            }
                        },
                        viewport: {
                            once: !0,
                            amount: 0
                        }
                    }), (0, a.jsx)(s.E.path, {
                        stroke: "black",
                        strokeWidth: "2",
                        strokeLinejoin: "round",
                        animate: {
                            d: "M18 6L5 5.8",
                            translateY: "2.2px",
                            translateX: "8.9px",
                            rotate: "-45deg",
                            transition: {
                                delay: .5
                            }
                        },
                        initial: {
                            d: "M2 18H22"
                        },
                        exit: {
                            d: "M2 18H16",
                            translateY: "0px",
                            translateX: "0px",
                            rotate: "0deg"
                        }
                    })]
                })
            };
            var l = n(6731),
                u = n(3967),
                c = n.n(u),
                d = n(1526),
                f = n(1664),
                h = n.n(f),
                m = n(1163),
                g = n(7294),
                b = n(9775);
            let AnimatedHamburgerIcon = e => {
                let {
                    isHovered: t,
                    className: n
                } = e;
                return (0, a.jsxs)(s.E.svg, {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: n,
                    children: [(0, a.jsx)(s.E.path, {
                        d: "M2 18H16",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinejoin: "round",
                        variants: {
                            false: {
                                d: "M2 18H16"
                            },
                            true: {
                                d: "M2 18H22"
                            }
                        },
                        animate: "".concat(t)
                    }), (0, a.jsx)(s.E.path, {
                        d: "M22 6H8",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinejoin: "round",
                        variants: {
                            false: {
                                d: "M22 6H8"
                            },
                            true: {
                                d: "M22 6H2"
                            }
                        },
                        animate: "".concat(t)
                    }), (0, a.jsx)(s.E.path, {
                        d: "M22 12H2",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinejoin: "round"
                    })]
                })
            };
            var x = n(2878),
                $ = n(9604),
                C = n(8688),
                E = n(4026),
                P = n(3810),
                S = n(665),
                A = n(9332);
            let HeaderLink = e => {
                    let {
                        className: t,
                        text: n,
                        href: o,
                        isHovered: l,
                        ...u
                    } = e, d = (0, A.usePathname)(), f = (0, E.B)(), m = void 0 !== l ? l : f.isHovered;
                    return (0, a.jsxs)("div", {
                        className: c()("hidden w-fit cursor-pointer flex-col items-center lg:flex", t),
                        ...void 0 !== l ? {} : f.bind,
                        children: [(0, a.jsx)(h(), {
                            href: o,
                            className: "flex items-center justify-center overflow-hidden pb-3",
                            ...u,
                            children: (0, a.jsx)("span", {
                                className: "text-button",
                                children: n
                            })
                        }), (0, a.jsx)(s.E.div, {
                            className: "flex h-px w-full self-start bg-light",
                            animate: {
                                width: m || d === o ? "100%" : 0
                            }
                        })]
                    })
                },
                SocialIconsMotion = e => (0, a.jsx)(s.E.div, { ...C.s.fadeIn({
                        delay: 1.4
                    }),
                    exit: {
                        opacity: 0,
                        transition: {
                            delay: 0
                        }
                    },
                    ...e
                }),
                MenuLink = e => {
                    let {
                        href: t,
                        children: n,
                        index: o,
                        ...l
                    } = e;
                    return (0, a.jsx)("div", {
                        className: "overflow-hidden",
                        children: (0, a.jsx)(s.E.div, {
                            initial: {
                                y: "100%"
                            },
                            animate: {
                                y: 0
                            },
                            exit: {
                                y: "100%",
                                transition: {
                                    delay: .4
                                }
                            },
                            transition: C.s.transitions.entrance({
                                index: o
                            }),
                            children: (0, a.jsx)(h(), {
                                href: t,
                                className: "interactive-opacity",
                                ...l,
                                children: n
                            })
                        })
                    })
                },
                T = ["/"],
                Header = () => {
                    let e = (0, S.bj)(),
                        {
                            asPath: t
                        } = (0, m.useRouter)(),
                        [n, o] = (0, g.useState)({
                            size: "40px",
                            color: "transparent",
                            position: 55
                        }),
                        [u, f] = (0, g.useState)(1),
                        [C, E] = (0, g.useState)(!1),
                        [A, k] = (0, g.useState)(!1);
                    return (0, g.useEffect)(() => {
                        E(!1)
                    }, [t]), (0, g.useEffect)(() => {
                        let handler = () => {
                            o(window.scrollY > 100 ? {
                                color: "black",
                                size: "25px",
                                position: 25
                            } : {
                                color: "transparent",
                                size: "40px",
                                position: 40
                            })
                        };
                        return window.addEventListener("scroll", handler), () => window.removeEventListener("scroll", handler)
                    }, []), (0, g.useEffect)(() => {
                        let handler = () => {
                            f(!T.includes(t) || window.scrollY > window.innerHeight - 255 ? 1 : 0)
                        };
                        return handler(), window.addEventListener("scroll", handler), () => window.removeEventListener("scroll", handler)
                    }, [t]), (0, g.useEffect)(() => {
                        document.body.style.overflowY = C ? "hidden" : "scroll"
                    }, [C]), (0, a.jsx)(s.E.div, {
                        className: "fixed z-50 flex w-screen flex-col justify-center transition-all duration-300",
                        style: {
                            backgroundColor: n.color
                        },
                        animate: {
                            opacity: e ? 0 : 1
                        },
                        initial: {
                            opacity: 0
                        },
                        children: (0, a.jsxs)("div", {
                            className: "mx-auto flex w-full flex-row items-center px-6 transition-all duration-300 lg:max-w-[1000px] lg:px-0 xl:max-w-[1240px]",
                            style: {
                                paddingTop: n.size,
                                paddingBottom: n.size
                            },
                            children: [(0, a.jsxs)(h(), {
                                href: P._.home,
                                className: "interactive-opacity flex items-center",
                                children: [(0, a.jsx)(x.K, {
                                    className: "z-[2]"
                                }), (0, a.jsx)(s.E.div, {
                                    animate: {
                                        opacity: u
                                    },
                                    initial: {
                                        opacity: T.includes(t) ? 0 : 1
                                    },
                                    transition: {
                                        duration: .6
                                    },
                                    children: (0, a.jsx)($.D, {
                                        className: "ml-3 h-5 w-auto"
                                    })
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "ml-auto flex grid-cols-3 items-end gap-4 lg:gap-[40px] xl:gap-[60px]",
                                children: [(0, a.jsx)(HeaderLink, {
                                    href: "https://docs.formless.xyz",
                                    text: "API Docs",
                                    target: "_blank",
                                    rel: "noreferrer noopener"
                                }), (0, a.jsx)(HeaderLink, {
                                    href: P._.blog,
                                    text: "Case Studies"
                                }), (0, a.jsx)(HeaderLink, {
                                    href: P._.aboutUs,
                                    text: "About"
                                }), (0, a.jsx)(HeaderLink, {
                                    href: P.N.contact,
                                    text: "Contact Us",
                                    target: "_blank",
                                    rel: "noreferrer noopener"
                                }), (0, a.jsx)(d.M, {
                                    children: C && (0, a.jsxs)(s.E.div, {
                                        className: "fixed left-0 right-0 flex h-full w-screen flex-col overflow-y-auto bg-dark lg:hidden",
                                        style: {
                                            top: "".concat(n.position, "px")
                                        },
                                        animate: {
                                            height: "100vh",
                                            top: 0,
                                            opacity: 1,
                                            transition: {
                                                type: "tween",
                                                duration: .3,
                                                opacity: {
                                                    duration: 0
                                                }
                                            },
                                            zIndex: 3
                                        },
                                        initial: {
                                            height: 0,
                                            opacity: 0,
                                            zIndex: 1,
                                            top: 0
                                        },
                                        exit: {
                                            height: 0,
                                            top: 0,
                                            opacity: 0,
                                            transition: {
                                                type: "tween",
                                                delay: 1,
                                                duration: .3
                                            }
                                        },
                                        children: [(0, a.jsxs)(s.E.div, {
                                            className: "mx-auto flex w-full items-center px-6 lg:max-w-[1000px] lg:px-0 xl:max-w-[1240px]",
                                            style: {
                                                backgroundColor: n.color,
                                                paddingTop: n.size,
                                                paddingBottom: n.size
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            initial: {
                                                opacity: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                transition: {
                                                    duration: 0,
                                                    delay: 1
                                                }
                                            },
                                            children: [(0, a.jsx)(x.K, {
                                                className: "z-[2] flex"
                                            }), (0, a.jsx)(b.z, {
                                                onClick: () => {
                                                    E(!1)
                                                },
                                                variant: "primary",
                                                className: "ml-auto flex h-[46px] w-[46px] bg-light p-[15px] hover:bg-transparent [&>span>svg>path]:hover:stroke-white",
                                                label: (0, a.jsx)(AnimatedCloseIcon, {})
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: "mx-auto flex w-full flex-col items-start gap-12 px-6 pb-12 lg:max-w-[1000px] lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:px-0 lg:py-12 xl:max-w-[1240px]",
                                            children: (0, a.jsxs)("div", {
                                                className: "flex w-full flex-col lg:w-auto",
                                                children: [(0, a.jsxs)(s.E.div, {
                                                    className: "text-mh1 lg:text-h3 flex flex-col gap-6 lg:gap-[28px]",
                                                    whileInView: {
                                                        opacity: 1,
                                                        transition: {
                                                            type: "spring",
                                                            delay: .3
                                                        }
                                                    },
                                                    initial: {
                                                        opacity: 0
                                                    },
                                                    children: [(0, a.jsx)(MenuLink, {
                                                        href: "https://docs.formless.xyz",
                                                        index: 0,
                                                        target: "_blank",
                                                        rel: "noreferrer noopener",
                                                        children: "API Docs"
                                                    }), (0, a.jsx)(MenuLink, {
                                                        href: P._.blog,
                                                        index: 1,
                                                        children: "Case Studies"
                                                    }), (0, a.jsx)(MenuLink, {
                                                        href: P._.aboutUs,
                                                        index: 2,
                                                        children: "About"
                                                    }), (0, a.jsx)(MenuLink, {
                                                        href: P.N.contact,
                                                        index: 3,
                                                        target: "_blank",
                                                        rel: "noreferrer noopener",
                                                        children: "Contact Us"
                                                    })]
                                                }), (0, a.jsx)(SocialIconsMotion, {
                                                    className: "mt-12 lg:mt-24",
                                                    children: (0, a.jsx)(l.H, {
                                                        className: "opacity-60"
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, a.jsx)(b.z, {
                                    onClick: () => {
                                        E(!0), o(e => ({ ...e,
                                            color: "transparent"
                                        }))
                                    },
                                    variant: "primary",
                                    className: c()("bg-light p-4 s-[46px] hover:bg-transparent lg:hidden [&>span>svg>path]:hover:stroke-white", C ? "!z-0" : "!z-[2]"),
                                    onMouseEnter: () => k(!0),
                                    onMouseLeave: () => k(!1),
                                    label: (0, a.jsx)(AnimatedHamburgerIcon, {
                                        className: "[&>path]:stroke-black",
                                        isHovered: A
                                    })
                                })]
                            })]
                        })
                    })
                };
            n(2088);
            var k = n(9008),
                L = n.n(k),
                M = n(2423);
            let Loading = () => {
                let e = (0, S.bj)();
                return (0, a.jsx)(s.E.div, {
                    animate: {
                        opacity: e ? 1 : 0,
                        zIndex: e ? 3 : -1,
                        transition: C.s.transitions.longSpring()
                    },
                    initial: {
                        opacity: 1
                    },
                    className: "fixed left-0 top-0 flex min-h-full min-h-screen w-screen bg-black",
                    children: (0, a.jsxs)(s.E.div, {
                        initial: {
                            y: "100%"
                        },
                        animate: {
                            y: 0
                        },
                        exit: {
                            y: "100%",
                            transition: {
                                delay: .4
                            }
                        },
                        transition: C.s.transitions.entrance({
                            delay: .2
                        }),
                        className: "container mt-auto !flex-row !justify-end pb-[8vh] pt-[126px] font-neue text-[150px] font-medium leading-none lg:pb-[108px] lg:text-[230px]",
                        children: [(0, a.jsx)(M.A, {
                            from: 0,
                            to: 100,
                            duration: 5
                        }), (0, a.jsx)("span", {
                            className: "mt-[10px] flex text-[50px] lg:mt-4 lg:text-[70px]",
                            children: "%"
                        })]
                    })
                })
            };
            var V = "undefined" != typeof window && new class {
                constructor() {
                    this.raf = e => {
                        requestAnimationFrame(this.raf);
                        let t = e - this.now;
                        this.now = e;
                        for (let n = 0; n < this.callbacks.length; n++) this.callbacks[n].callback(e, t)
                    }, this.callbacks = [], this.now = performance.now(), requestAnimationFrame(this.raf)
                }
                add(e, t = 0) {
                    return this.callbacks.push({
                        callback: e,
                        priority: t
                    }), this.callbacks.sort((e, t) => e.priority - t.priority), () => this.remove(e)
                }
                remove(e) {
                    this.callbacks = this.callbacks.filter(({
                        callback: t
                    }) => e !== t)
                }
            };

            function lenis_t(e, t, n) {
                return Math.max(e, Math.min(t, n))
            }
            let Animate = class Animate {
                advance(e) {
                    var t, n, o;
                    if (!this.isRunning) return;
                    let a = !1;
                    if (this.lerp) this.value = (t = this.value, n = this.to, (1 - (o = 1 - Math.exp(-(60 * this.lerp) * e))) * t + o * n), Math.round(this.value) === this.to && (this.value = this.to, a = !0);
                    else {
                        this.currentTime += e;
                        let t = lenis_t(0, this.currentTime / this.duration, 1);
                        a = t >= 1;
                        let n = a ? 1 : this.easing(t);
                        this.value = this.from + (this.to - this.from) * n
                    }
                    this.onUpdate ? .(this.value, a), a && this.stop()
                }
                stop() {
                    this.isRunning = !1
                }
                fromTo(e, t, {
                    lerp: n = .1,
                    duration: o = 1,
                    easing: a = e => e,
                    onStart: s,
                    onUpdate: l
                }) {
                    this.from = this.value = e, this.to = t, this.lerp = n, this.duration = o, this.easing = a, this.currentTime = 0, this.isRunning = !0, s ? .(), this.onUpdate = l
                }
            };
            let Dimensions = class Dimensions {
                constructor({
                    wrapper: e,
                    content: t,
                    autoResize: n = !0,
                    debounce: o = 250
                } = {}) {
                    var a;
                    let s;
                    this.wrapper = e, this.content = t, n && (this.debouncedResize = (a = this.resize, function() {
                        let e = arguments,
                            t = this;
                        clearTimeout(s), s = setTimeout(function() {
                            a.apply(t, e)
                        }, o)
                    }), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
                }
                destroy() {
                    this.wrapperResizeObserver ? .disconnect(), this.contentResizeObserver ? .disconnect(), window.removeEventListener("resize", this.debouncedResize, !1)
                }
                resize = () => {
                    this.onWrapperResize(), this.onContentResize()
                };
                onWrapperResize = () => {
                    this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
                };
                onContentResize = () => {
                    this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
                };
                get limit() {
                    return {
                        x: this.scrollWidth - this.width,
                        y: this.scrollHeight - this.height
                    }
                }
            };
            let Emitter = class Emitter {
                constructor() {
                    this.events = {}
                }
                emit(e, ...t) {
                    let n = this.events[e] || [];
                    for (let e = 0, o = n.length; e < o; e++) n[e](...t)
                }
                on(e, t) {
                    return this.events[e] ? .push(t) || (this.events[e] = [t]), () => {
                        this.events[e] = this.events[e] ? .filter(e => t !== e)
                    }
                }
                off(e, t) {
                    this.events[e] = this.events[e] ? .filter(e => t !== e)
                }
                destroy() {
                    this.events = {}
                }
            };
            let j = 100 / 6;
            let VirtualScroll = class VirtualScroll {
                constructor(e, {
                    wheelMultiplier: t = 1,
                    touchMultiplier: n = 1
                }) {
                    this.element = e, this.wheelMultiplier = t, this.touchMultiplier = n, this.touchStart = {
                        x: null,
                        y: null
                    }, this.emitter = new Emitter, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, {
                        passive: !1
                    }), this.element.addEventListener("touchstart", this.onTouchStart, {
                        passive: !1
                    }), this.element.addEventListener("touchmove", this.onTouchMove, {
                        passive: !1
                    }), this.element.addEventListener("touchend", this.onTouchEnd, {
                        passive: !1
                    })
                }
                on(e, t) {
                    return this.emitter.on(e, t)
                }
                destroy() {
                    this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, {
                        passive: !1
                    }), this.element.removeEventListener("touchstart", this.onTouchStart, {
                        passive: !1
                    }), this.element.removeEventListener("touchmove", this.onTouchMove, {
                        passive: !1
                    }), this.element.removeEventListener("touchend", this.onTouchEnd, {
                        passive: !1
                    })
                }
                onTouchStart = e => {
                    let {
                        clientX: t,
                        clientY: n
                    } = e.targetTouches ? e.targetTouches[0] : e;
                    this.touchStart.x = t, this.touchStart.y = n, this.lastDelta = {
                        x: 0,
                        y: 0
                    }, this.emitter.emit("scroll", {
                        deltaX: 0,
                        deltaY: 0,
                        event: e
                    })
                };
                onTouchMove = e => {
                    let {
                        clientX: t,
                        clientY: n
                    } = e.targetTouches ? e.targetTouches[0] : e, o = -(t - this.touchStart.x) * this.touchMultiplier, a = -(n - this.touchStart.y) * this.touchMultiplier;
                    this.touchStart.x = t, this.touchStart.y = n, this.lastDelta = {
                        x: o,
                        y: a
                    }, this.emitter.emit("scroll", {
                        deltaX: o,
                        deltaY: a,
                        event: e
                    })
                };
                onTouchEnd = e => {
                    this.emitter.emit("scroll", {
                        deltaX: this.lastDelta.x,
                        deltaY: this.lastDelta.y,
                        event: e
                    })
                };
                onWheel = e => {
                    let {
                        deltaX: t,
                        deltaY: n,
                        deltaMode: o
                    } = e;
                    t *= 1 === o ? j : 2 === o ? this.windowWidth : 1, n *= 1 === o ? j : 2 === o ? this.windowHeight : 1, t *= this.wheelMultiplier, n *= this.wheelMultiplier, this.emitter.emit("scroll", {
                        deltaX: t,
                        deltaY: n,
                        event: e
                    })
                };
                onWindowResize = () => {
                    this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight
                }
            };
            let Lenis = class Lenis {
                constructor({
                    wrapper: e = window,
                    content: t = document.documentElement,
                    wheelEventsTarget: n = e,
                    eventsTarget: o = n,
                    smoothWheel: a = !0,
                    syncTouch: s = !1,
                    syncTouchLerp: l = .075,
                    touchInertiaMultiplier: u = 35,
                    duration: c,
                    easing: d = e => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
                    lerp: f = !c && .1,
                    infinite: h = !1,
                    orientation: m = "vertical",
                    gestureOrientation: g = "vertical",
                    touchMultiplier: b = 1,
                    wheelMultiplier: x = 1,
                    autoResize: $ = !0,
                    __experimental__naiveDimensions: C = !1
                } = {}) {
                    this.__isSmooth = !1, this.__isScrolling = !1, this.__isStopped = !1, this.__isLocked = !1, this.onVirtualScroll = ({
                        deltaX: e,
                        deltaY: t,
                        event: n
                    }) => {
                        if (n.ctrlKey) return;
                        let o = n.type.includes("touch"),
                            a = n.type.includes("wheel");
                        if (this.options.syncTouch && o && "touchstart" === n.type && !this.isStopped && !this.isLocked) return void this.reset();
                        let s = 0 === e && 0 === t,
                            l = "vertical" === this.options.gestureOrientation && 0 === t || "horizontal" === this.options.gestureOrientation && 0 === e;
                        if (s || l) return;
                        let u = n.composedPath();
                        if ((u = u.slice(0, u.indexOf(this.rootElement))).find(e => {
                                var t, n, s, l, u;
                                return (null === (t = e.hasAttribute) || void 0 === t ? void 0 : t.call(e, "data-lenis-prevent")) || o && (null === (n = e.hasAttribute) || void 0 === n ? void 0 : n.call(e, "data-lenis-prevent-touch")) || a && (null === (s = e.hasAttribute) || void 0 === s ? void 0 : s.call(e, "data-lenis-prevent-wheel")) || (null === (l = e.classList) || void 0 === l ? void 0 : l.contains("lenis")) && !(null === (u = e.classList) || void 0 === u ? void 0 : u.contains("lenis-stopped"))
                            })) return;
                        if (this.isStopped || this.isLocked) return void n.preventDefault();
                        if (this.isSmooth = this.options.syncTouch && o || this.options.smoothWheel && a, !this.isSmooth) return this.isScrolling = !1, void this.animate.stop();
                        n.preventDefault();
                        let c = t;
                        "both" === this.options.gestureOrientation ? c = Math.abs(t) > Math.abs(e) ? t : e : "horizontal" === this.options.gestureOrientation && (c = e);
                        let d = o && this.options.syncTouch,
                            f = o && "touchend" === n.type && Math.abs(c) > 5;
                        f && (c = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + c, Object.assign({
                            programmatic: !1
                        }, d ? {
                            lerp: f ? this.options.syncTouchLerp : 1
                        } : {
                            lerp: this.options.lerp,
                            duration: this.options.duration,
                            easing: this.options.easing
                        }))
                    }, this.onNativeScroll = () => {
                        if (!this.__preventNextScrollEvent && !this.isScrolling) {
                            let e = this.animatedScroll;
                            this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - e), this.emit()
                        }
                    }, window.lenisVersion = "1.0.42", e !== document.documentElement && e !== document.body || (e = window), this.options = {
                        wrapper: e,
                        content: t,
                        wheelEventsTarget: n,
                        eventsTarget: o,
                        smoothWheel: a,
                        syncTouch: s,
                        syncTouchLerp: l,
                        touchInertiaMultiplier: u,
                        duration: c,
                        easing: d,
                        lerp: f,
                        infinite: h,
                        gestureOrientation: g,
                        orientation: m,
                        touchMultiplier: b,
                        wheelMultiplier: x,
                        autoResize: $,
                        __experimental__naiveDimensions: C
                    }, this.animate = new Animate, this.emitter = new Emitter, this.dimensions = new Dimensions({
                        wrapper: e,
                        content: t,
                        autoResize: $
                    }), this.toggleClassName("lenis", !0), this.velocity = 0, this.isLocked = !1, this.isStopped = !1, this.isSmooth = s || a, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll = new VirtualScroll(o, {
                        touchMultiplier: b,
                        wheelMultiplier: x
                    }), this.virtualScroll.on("scroll", this.onVirtualScroll)
                }
                destroy() {
                    this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClassName("lenis", !1), this.toggleClassName("lenis-smooth", !1), this.toggleClassName("lenis-scrolling", !1), this.toggleClassName("lenis-stopped", !1), this.toggleClassName("lenis-locked", !1)
                }
                on(e, t) {
                    return this.emitter.on(e, t)
                }
                off(e, t) {
                    return this.emitter.off(e, t)
                }
                setScroll(e) {
                    this.isHorizontal ? this.rootElement.scrollLeft = e : this.rootElement.scrollTop = e
                }
                resize() {
                    this.dimensions.resize()
                }
                emit() {
                    this.emitter.emit("scroll", this)
                }
                reset() {
                    this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop()
                }
                start() {
                    this.isStopped && (this.isStopped = !1, this.reset())
                }
                stop() {
                    this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset())
                }
                raf(e) {
                    let t = e - (this.time || e);
                    this.time = e, this.animate.advance(.001 * t)
                }
                scrollTo(e, {
                    offset: t = 0,
                    immediate: n = !1,
                    lock: o = !1,
                    duration: a = this.options.duration,
                    easing: s = this.options.easing,
                    lerp: l = !a && this.options.lerp,
                    onComplete: u,
                    force: c = !1,
                    programmatic: d = !0
                } = {}) {
                    if (!this.isStopped && !this.isLocked || c) {
                        if (["top", "left", "start"].includes(e)) e = 0;
                        else if (["bottom", "right", "end"].includes(e)) e = this.limit;
                        else {
                            let n;
                            if ("string" == typeof e ? n = document.querySelector(e) : (null == e ? void 0 : e.nodeType) && (n = e), n) {
                                if (this.options.wrapper !== window) {
                                    let e = this.options.wrapper.getBoundingClientRect();
                                    t -= this.isHorizontal ? e.left : e.top
                                }
                                let o = n.getBoundingClientRect();
                                e = (this.isHorizontal ? o.left : o.top) + this.animatedScroll
                            }
                        }
                        if ("number" == typeof e) {
                            if (e += t, e = Math.round(e), this.options.infinite ? d && (this.targetScroll = this.animatedScroll = this.scroll) : e = lenis_t(0, e, this.limit), n) return this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), void(null == u || u(this));
                            if (!d) {
                                if (e === this.targetScroll) return;
                                this.targetScroll = e
                            }
                            this.animate.fromTo(this.animatedScroll, e, {
                                duration: a,
                                easing: s,
                                lerp: l,
                                onStart: () => {
                                    o && (this.isLocked = !0), this.isScrolling = !0
                                },
                                onUpdate: (e, t) => {
                                    this.isScrolling = !0, this.velocity = e - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = e, this.setScroll(this.scroll), d && (this.targetScroll = e), t || this.emit(), t && (this.reset(), this.emit(), null == u || u(this), this.__preventNextScrollEvent = !0, requestAnimationFrame(() => {
                                        delete this.__preventNextScrollEvent
                                    }))
                                }
                            })
                        }
                    }
                }
                get rootElement() {
                    return this.options.wrapper === window ? document.documentElement : this.options.wrapper
                }
                get limit() {
                    return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
                }
                get isHorizontal() {
                    return "horizontal" === this.options.orientation
                }
                get actualScroll() {
                    return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
                }
                get scroll() {
                    var e;
                    return this.options.infinite ? (this.animatedScroll % (e = this.limit) + e) % e : this.animatedScroll
                }
                get progress() {
                    return 0 === this.limit ? 1 : this.scroll / this.limit
                }
                get isSmooth() {
                    return this.__isSmooth
                }
                set isSmooth(e) {
                    this.__isSmooth !== e && (this.__isSmooth = e, this.toggleClassName("lenis-smooth", e))
                }
                get isScrolling() {
                    return this.__isScrolling
                }
                set isScrolling(e) {
                    this.__isScrolling !== e && (this.__isScrolling = e, this.toggleClassName("lenis-scrolling", e))
                }
                get isStopped() {
                    return this.__isStopped
                }
                set isStopped(e) {
                    this.__isStopped !== e && (this.__isStopped = e, this.toggleClassName("lenis-stopped", e))
                }
                get isLocked() {
                    return this.__isLocked
                }
                set isLocked(e) {
                    this.__isLocked !== e && (this.__isLocked = e, this.toggleClassName("lenis-locked", e))
                }
                get className() {
                    let e = "lenis";
                    return this.isStopped && (e += " lenis-stopped"), this.isLocked && (e += " lenis-locked"), this.isScrolling && (e += " lenis-scrolling"), this.isSmooth && (e += " lenis-smooth"), e
                }
                toggleClassName(e, t) {
                    this.rootElement.classList.toggle(e, t), this.emitter.emit("className change", this)
                }
            };
            var R = n(5697);
            let createStoreImpl = e => {
                    let t;
                    let n = new Set,
                        setState = (e, o) => {
                            let a = "function" == typeof e ? e(t) : e;
                            if (!Object.is(a, t)) {
                                let e = t;
                                t = (null != o ? o : "object" != typeof a || null === a) ? a : Object.assign({}, t, a), n.forEach(n => n(t, e))
                            }
                        },
                        getState = () => t,
                        o = {
                            setState,
                            getState,
                            getInitialState: () => a,
                            subscribe: e => (n.add(e), () => n.delete(e)),
                            destroy: () => {
                                console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), n.clear()
                            }
                        },
                        a = t = e(setState, getState, o);
                    return o
                },
                createStore = e => e ? createStoreImpl(e) : createStoreImpl;
            var D = n(2798);
            let {
                useDebugValue: O
            } = g, {
                useSyncExternalStoreWithSelector: F
            } = D, B = !1, identity = e => e, createImpl = e => {
                "function" != typeof e && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
                let t = "function" == typeof e ? createStore(e) : e,
                    useBoundStore = (e, n) => (function(e, t = identity, n) {
                        n && !B && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"), B = !0);
                        let o = F(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
                        return O(o), o
                    })(t, e, n);
                return Object.assign(useBoundStore, t), useBoundStore
            };
            var dist_clsx = function() {
                for (var e, t, n = 0, o = "", a = arguments.length; n < a; n++)(e = arguments[n]) && (t = function clsx_r(e) {
                    var t, n, o = "";
                    if ("string" == typeof e || "number" == typeof e) o += e;
                    else if ("object" == typeof e) {
                        if (Array.isArray(e)) {
                            var a = e.length;
                            for (t = 0; t < a; t++) e[t] && (n = clsx_r(e[t])) && (o && (o += " "), o += n)
                        } else
                            for (n in e) e[n] && (o && (o += " "), o += n)
                    }
                    return o
                }(e)) && (o && (o += " "), o += t);
                return o
            };

            function react_lenis_modern_d() {
                return (react_lenis_modern_d = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }
            let W = ["children", "root", "options", "autoRaf", "rafPriority", "className"],
                U = (0, g.createContext)(),
                X = (o = () => ({})) ? createImpl(o) : createImpl,
                J = (0, g.forwardRef)((e, t) => {
                    let {
                        children: n,
                        root: o = !1,
                        options: a = {},
                        autoRaf: s = !0,
                        rafPriority: l = 0,
                        className: u
                    } = e, c = function(e, t) {
                        if (null == e) return {};
                        var n, o, a = {},
                            s = Object.keys(e);
                        for (o = 0; o < s.length; o++) t.indexOf(n = s[o]) >= 0 || (a[n] = e[n]);
                        return a
                    }(e, W), d = (0, g.useRef)(), f = (0, g.useRef)(), [h, m] = (0, g.useState)(), b = (0, g.useRef)([]), x = (0, g.useCallback)((e, t) => {
                        b.current.push({
                            callback: e,
                            priority: t
                        }), b.current.sort((e, t) => e.priority - t.priority)
                    }, []), $ = (0, g.useCallback)(e => {
                        b.current = b.current.filter(t => t.callback !== e)
                    }, []);
                    (0, g.useImperativeHandle)(t, () => h, [h]), (0, g.useEffect)(() => {
                        let e = new Lenis(react_lenis_modern_d({}, a, !o && {
                            wrapper: d.current,
                            content: f.current
                        }));
                        return m(e), () => {
                            e.destroy(), m(void 0)
                        }
                    }, [o, JSON.stringify(a)]),
                    function(e, t = 0) {
                        (0, g.useEffect)(() => {
                            if (e) return V.add(e, t), () => V.remove(e)
                        }, [e, t])
                    }(e => {
                        s && (null == h || h.raf(e))
                    }, l), (0, g.useEffect)(() => {
                        o && h && X.setState({
                            lenis: h,
                            addCallback: x,
                            removeCallback: $
                        })
                    }, [o, h, x, $]);
                    let C = (0, g.useCallback)(e => {
                        for (let t = 0; t < b.current.length; t++) b.current[t].callback(e)
                    }, []);
                    (0, g.useEffect)(() => (null == h || h.on("scroll", C), () => {
                        null == h || h.off("scroll", C)
                    }), [h, C]);
                    let E = (0, g.useCallback)(() => {
                        d.current && (d.current.className = dist_clsx(null == h ? void 0 : h.className, u))
                    }, [h, u]);
                    return (0, g.useEffect)(() => (E(), null == h || h.on("className change", E), () => {
                        null == h || h.off("className change", E)
                    }), [h, E]), g.createElement(U.Provider, {
                        value: {
                            lenis: h,
                            addCallback: x,
                            removeCallback: $
                        }
                    }, o ? n : g.createElement("div", react_lenis_modern_d({
                        ref: d,
                        className: dist_clsx(null == h ? void 0 : h.className, u)
                    }, c), g.createElement("div", {
                        ref: f
                    }, n)))
                });
            J.displayName = "ReactLenis", J.propTypes = {
                children: R.node,
                root: R.bool,
                options: R.object,
                autoRaf: R.bool,
                rafPriority: R.number,
                className: R.string
            };
            let SmoothScroll = e => {
                let {
                    children: t
                } = e;
                return (0, a.jsx)(J, {
                    root: !0,
                    options: {
                        lerp: .07
                    },
                    children: t
                })
            };

            function App(e) {
                let {
                    Component: t,
                    pageProps: n
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(L(), {
                        children: [(0, a.jsx)("title", {
                            children: "Formless"
                        }), (0, a.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                        })]
                    }), (0, a.jsx)(S.vv, {
                        children: (0, a.jsx)("main", {
                            className: "flex min-h-screen w-full flex-col items-center",
                            children: (0, a.jsxs)(SmoothScroll, {
                                children: [(0, a.jsx)(Header, {}), (0, a.jsx)(t, { ...n
                                }), (0, a.jsx)(Loading, {})]
                            })
                        })
                    })]
                })
            }
        },
        8688: function(e, t, n) {
            "use strict";
            n.d(t, {
                s: function() {
                    return o
                },
                v: function() {
                    return getDelay
                }
            });
            let getDelay = e => {
                    let {
                        base: t,
                        perIndex: n,
                        index: o
                    } = e;
                    return t + ("number" == typeof o && "number" == typeof n ? o * n : 0)
                },
                o = {
                    viewport: {
                        once: !0,
                        amount: .2
                    },
                    transitions: {
                        longSpring: function() {
                            let {
                                delay: e,
                                index: t,
                                baseDelay: n
                            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return {
                                type: "spring",
                                delay: void 0 !== e ? e : void 0 !== t ? (null != n ? n : 0) + .3 * (t + .2) : void 0,
                                duration: void 0 !== t ? .8 * (t + 1.5) : .8,
                                bounce: .3
                            }
                        },
                        entrance: e => {
                            var t;
                            return {
                                ease: [.4, 0, .2, 1],
                                delay: getDelay({
                                    base: null !== (t = null == e ? void 0 : e.baseDelay) && void 0 !== t ? t : .5,
                                    perIndex: .1,
                                    index: null == e ? void 0 : e.index
                                }),
                                duration: .8,
                                ...e
                            }
                        }
                    },
                    fadeIn: e => ({
                        whileInView: {
                            opacity: 1,
                            transition: o.transitions.longSpring(e)
                        },
                        viewport: o.viewport,
                        initial: {
                            opacity: 0
                        }
                    }),
                    slideFrom: e => {
                        let {
                            x: t,
                            y: n,
                            ...a
                        } = e;
                        return {
                            whileInView: {
                                x: 0,
                                y: 0,
                                transition: o.transitions.longSpring(a)
                            },
                            viewport: o.viewport,
                            initial: {
                                x: t,
                                y: n
                            }
                        }
                    },
                    slideFadeFrom: e => {
                        let {
                            x: t,
                            y: n,
                            ...a
                        } = e;
                        return {
                            whileInView: {
                                opacity: 1,
                                x: 0,
                                y: 0,
                                transition: o.transitions.longSpring(a)
                            },
                            viewport: o.viewport,
                            initial: {
                                opacity: 0,
                                x: t,
                                y: n
                            }
                        }
                    }
                }
        },
        3810: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return a
                },
                _: function() {
                    return o
                }
            });
            let o = {
                    home: "/",
                    creators: "/creators",
                    devsAndCompanies: "/developers-and-companies",
                    aboutUs: "/about-us",
                    blog: "/blog",
                    blogPage: e => "/blog/".concat(e),
                    blogPost: e => "/blog/post/".concat(e),
                    privacyPolicy: "/privacy-policy",
                    termsOfService: "/terms-of-service"
                },
                a = {
                    getStarted: "https://share.formless.xyz?theme=dark",
                    contact: "https://formlessxyz.notion.site/27886cd3ac3481bdb0f0c5a0d46242b5",
                    socials: {
                        x: "https://x.com/formless_xyz",
                        linkedIn: "https://www.linkedin.com/company/formlessxyz/",
                        instagram: "https://www.instagram.com/formlessxyz/",
                        discord: "https://discord.com/invite/8hmQ28HvnT"
                    }
                }
        },
        2088: function() {},
        9008: function(e, t, n) {
            e.exports = n(9201)
        },
        1664: function(e, t, n) {
            e.exports = n(5170)
        },
        9332: function(e, t, n) {
            e.exports = n(636)
        },
        1163: function(e, t, n) {
            e.exports = n(9974)
        },
        2703: function(e, t, n) {
            "use strict";
            var o = n(414);

            function emptyFunction() {}

            function emptyFunctionWithReset() {}
            emptyFunctionWithReset.resetWarningCache = emptyFunction, e.exports = function() {
                function shim(e, t, n, a, s, l) {
                    if (l !== o) {
                        var u = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw u.name = "Invariant Violation", u
                    }
                }

                function getShim() {
                    return shim
                }
                shim.isRequired = shim;
                var e = {
                    array: shim,
                    bigint: shim,
                    bool: shim,
                    func: shim,
                    number: shim,
                    object: shim,
                    string: shim,
                    symbol: shim,
                    any: shim,
                    arrayOf: getShim,
                    element: shim,
                    elementType: shim,
                    instanceOf: getShim,
                    node: shim,
                    objectOf: getShim,
                    oneOf: getShim,
                    oneOfType: getShim,
                    shape: getShim,
                    exact: getShim,
                    checkPropTypes: emptyFunctionWithReset,
                    resetWarningCache: emptyFunction
                };
                return e.PropTypes = e, e
            }
        },
        5697: function(e, t, n) {
            e.exports = n(2703)()
        },
        414: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        83: function(e, t, n) {
            "use strict";
            /**
             * @license React
             * use-sync-external-store-shim.production.js
             *
             * Copyright (c) Meta Platforms, Inc. and affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var o = n(7294),
                a = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                s = o.useState,
                l = o.useEffect,
                u = o.useLayoutEffect,
                c = o.useDebugValue;

            function checkIfSnapshotChanged(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !a(e, n)
                } catch (e) {
                    return !0
                }
            }
            var d = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var n = t(),
                    o = s({
                        inst: {
                            value: n,
                            getSnapshot: t
                        }
                    }),
                    a = o[0].inst,
                    d = o[1];
                return u(function() {
                    a.value = n, a.getSnapshot = t, checkIfSnapshotChanged(a) && d({
                        inst: a
                    })
                }, [e, n, t]), l(function() {
                    return checkIfSnapshotChanged(a) && d({
                        inst: a
                    }), e(function() {
                        checkIfSnapshotChanged(a) && d({
                            inst: a
                        })
                    })
                }, [e]), c(n), n
            };
            t.useSyncExternalStore = void 0 !== o.useSyncExternalStore ? o.useSyncExternalStore : d
        },
        6251: function(e, t, n) {
            "use strict";
            /**
             * @license React
             * use-sync-external-store-shim/with-selector.production.js
             *
             * Copyright (c) Meta Platforms, Inc. and affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var o = n(7294),
                a = n(1688),
                s = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                l = a.useSyncExternalStore,
                u = o.useRef,
                c = o.useEffect,
                d = o.useMemo,
                f = o.useDebugValue;
            t.useSyncExternalStoreWithSelector = function(e, t, n, o, a) {
                var h = u(null);
                if (null === h.current) {
                    var m = {
                        hasValue: !1,
                        value: null
                    };
                    h.current = m
                } else m = h.current;
                var g = l(e, (h = d(function() {
                    function memoizedSelector(t) {
                        if (!u) {
                            if (u = !0, e = t, t = o(t), void 0 !== a && m.hasValue) {
                                var n = m.value;
                                if (a(n, t)) return l = n
                            }
                            return l = t
                        }
                        if (n = l, s(e, t)) return n;
                        var c = o(t);
                        return void 0 !== a && a(n, c) ? (e = t, n) : (e = t, l = c)
                    }
                    var e, l, u = !1,
                        c = void 0 === n ? null : n;
                    return [function() {
                        return memoizedSelector(t())
                    }, null === c ? void 0 : function() {
                        return memoizedSelector(c())
                    }]
                }, [t, n, o, a]))[0], h[1]);
                return c(function() {
                    m.hasValue = !0, m.value = g
                }, [g]), f(g), g
            }
        },
        1688: function(e, t, n) {
            "use strict";
            e.exports = n(83)
        },
        2798: function(e, t, n) {
            "use strict";
            e.exports = n(6251)
        },
        3967: function(e, t) {
            var n;
            /*!
            	Copyright (c) 2018 Jed Watson.
            	Licensed under the MIT License (MIT), see
            	http://jedwatson.github.io/classnames
            */
            ! function() {
                "use strict";
                var o = {}.hasOwnProperty;

                function classNames() {
                    for (var e = "", t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        n && (e = appendClass(e, function(e) {
                            if ("string" == typeof e || "number" == typeof e) return e;
                            if ("object" != typeof e) return "";
                            if (Array.isArray(e)) return classNames.apply(null, e);
                            if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                            var t = "";
                            for (var n in e) o.call(e, n) && e[n] && (t = appendClass(t, n));
                            return t
                        }(n)))
                    }
                    return e
                }

                function appendClass(e, t) {
                    return t ? e ? e + " " + t : e + t : e
                }
                e.exports ? (classNames.default = classNames, e.exports = classNames) : void 0 !== (n = (function() {
                    return classNames
                }).apply(t, [])) && (e.exports = n)
            }()
        },
        7159: function(e, t, n) {
            "use strict";
            n.d(t, {
                y: function() {
                    return animateValue
                }
            });
            var o = n(1662);
            let calcBezier = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;

            function cubicBezier(e, t, n, a) {
                if (e === t && n === a) return o.Z;
                let getTForX = t => (function(e, t, n, o, a) {
                    let s, l;
                    let u = 0;
                    do(s = calcBezier(l = t + (n - t) / 2, o, a) - e) > 0 ? n = l : t = l; while (Math.abs(s) > 1e-7 && ++u < 12);
                    return l
                })(t, 0, 1, e, n);
                return e => 0 === e || 1 === e ? e : calcBezier(getTForX(e), t, a)
            }
            let a = cubicBezier(.42, 0, 1, 1),
                s = cubicBezier(0, 0, .58, 1),
                l = cubicBezier(.42, 0, .58, 1);
            var u = n(3338),
                c = n(5487),
                d = n(7255),
                f = n(415),
                h = n(5129);
            let m = cubicBezier(.33, 1.53, .69, .99),
                g = (0, h.M)(m),
                b = (0, f.o)(g),
                x = {
                    linear: o.Z,
                    easeIn: a,
                    easeInOut: l,
                    easeOut: s,
                    circIn: d.Z7,
                    circInOut: d.X7,
                    circOut: d.Bn,
                    backIn: g,
                    backInOut: b,
                    backOut: m,
                    anticipate: e => (e *= 2) < 1 ? .5 * g(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
                },
                easingDefinitionToFunction = e => {
                    if (Array.isArray(e)) {
                        (0, c.k)(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
                        let [t, n, o, a] = e;
                        return cubicBezier(t, n, o, a)
                    }
                    return "string" == typeof e ? ((0, c.k)(void 0 !== x[e], `Invalid easing type '${e}'`), x[e]) : e
                };
            var $ = n(4606),
                C = n(599);

            function keyframes({
                duration: e = 300,
                keyframes: t,
                times: n,
                ease: o = "easeInOut"
            }) {
                let a = (0, u.N)(o) ? o.map(easingDefinitionToFunction) : easingDefinitionToFunction(o),
                    s = {
                        done: !1,
                        value: t[0]
                    },
                    c = (n && n.length === t.length ? n : (0, C.Y)(t)).map(t => t * e),
                    d = (0, $.s)(c, t, {
                        ease: Array.isArray(a) ? a : t.map(() => a || l).splice(0, t.length - 1)
                    });
                return {
                    calculatedDuration: e,
                    next: t => (s.value = d(t), s.done = t >= e, s)
                }
            }
            var E = n(5086),
                P = n(5753);

            function inertia({
                keyframes: e,
                velocity: t = 0,
                power: n = .8,
                timeConstant: o = 325,
                bounceDamping: a = 10,
                bounceStiffness: s = 500,
                modifyTarget: l,
                min: u,
                max: c,
                restDelta: d = .5,
                restSpeed: f
            }) {
                let h, m;
                let g = e[0],
                    b = {
                        done: !1,
                        value: g
                    },
                    isOutOfBounds = e => void 0 !== u && e < u || void 0 !== c && e > c,
                    nearestBoundary = e => void 0 === u ? c : void 0 === c ? u : Math.abs(u - e) < Math.abs(c - e) ? u : c,
                    x = n * t,
                    $ = g + x,
                    C = void 0 === l ? $ : l($);
                C !== $ && (x = C - g);
                let calcDelta = e => -x * Math.exp(-e / o),
                    calcLatest = e => C + calcDelta(e),
                    applyFriction = e => {
                        let t = calcDelta(e),
                            n = calcLatest(e);
                        b.done = Math.abs(t) <= d, b.value = b.done ? C : n
                    },
                    checkCatchBoundary = e => {
                        isOutOfBounds(b.value) && (h = e, m = (0, E.S)({
                            keyframes: [b.value, nearestBoundary(b.value)],
                            velocity: (0, P.P)(calcLatest, e, b.value),
                            damping: a,
                            stiffness: s,
                            restDelta: d,
                            restSpeed: f
                        }))
                    };
                return checkCatchBoundary(0), {
                    calculatedDuration: null,
                    next: e => {
                        let t = !1;
                        return (m || void 0 !== h || (t = !0, applyFriction(e), checkCatchBoundary(e)), void 0 !== h && e > h) ? m.next(e - h) : (t || applyFriction(e), b)
                    }
                }
            }
            var S = n(2074);
            let frameloopDriver = e => {
                let passTimestamp = ({
                    timestamp: t
                }) => e(t);
                return {
                    start: () => S.Wi.update(passTimestamp, !0),
                    stop: () => (0, S.Pn)(passTimestamp),
                    now: () => S.frameData.isProcessing ? S.frameData.timestamp : performance.now()
                }
            };
            var A = n(4169),
                T = n(6917),
                k = n(2284);
            let L = {
                decay: inertia,
                inertia: inertia,
                tween: keyframes,
                keyframes: keyframes,
                spring: E.S
            };

            function animateValue({
                autoplay: e = !0,
                delay: t = 0,
                driver: n = frameloopDriver,
                keyframes: o,
                type: a = "keyframes",
                repeat: s = 0,
                repeatDelay: l = 0,
                repeatType: u = "loop",
                onPlay: c,
                onStop: d,
                onComplete: f,
                onUpdate: h,
                ...m
            }) {
                let g, b, x, C, E, P = 1,
                    S = !1,
                    updateFinishedPromise = () => {
                        b = new Promise(e => {
                            g = e
                        })
                    };
                updateFinishedPromise();
                let M = L[a] || keyframes;
                M !== keyframes && "number" != typeof o[0] && (C = (0, $.s)([0, 100], o, {
                    clamp: !1
                }), o = [0, 100]);
                let V = M({ ...m,
                    keyframes: o
                });
                "mirror" === u && (E = M({ ...m,
                    keyframes: [...o].reverse(),
                    velocity: -(m.velocity || 0)
                }));
                let j = "idle",
                    R = null,
                    D = null,
                    O = null;
                null === V.calculatedDuration && s && (V.calculatedDuration = (0, k.i)(V));
                let {
                    calculatedDuration: F
                } = V, B = 1 / 0, W = 1 / 0;
                null !== F && (W = (B = F + l) * (s + 1) - l);
                let U = 0,
                    tick = e => {
                        if (null === D) return;
                        P > 0 && (D = Math.min(D, e)), P < 0 && (D = Math.min(e - W / P, D)), U = null !== R ? R : Math.round(e - D) * P;
                        let n = U - t * (P >= 0 ? 1 : -1),
                            a = P >= 0 ? n < 0 : n > W;
                        U = Math.max(n, 0), "finished" === j && null === R && (U = W);
                        let c = U,
                            d = V;
                        if (s) {
                            let e = Math.min(U, W) / B,
                                t = Math.floor(e),
                                n = e % 1;
                            !n && e >= 1 && (n = 1), 1 === n && t--, t = Math.min(t, s + 1);
                            let o = !!(t % 2);
                            o && ("reverse" === u ? (n = 1 - n, l && (n -= l / B)) : "mirror" === u && (d = E)), c = (0, A.u)(0, 1, n) * B
                        }
                        let f = a ? {
                            done: !1,
                            value: o[0]
                        } : d.next(c);
                        C && (f.value = C(f.value));
                        let {
                            done: m
                        } = f;
                        a || null === F || (m = P >= 0 ? U >= W : U <= 0);
                        let g = null === R && ("finished" === j || "running" === j && m);
                        return h && h(f.value), g && finish(), f
                    },
                    stopAnimationDriver = () => {
                        x && x.stop(), x = void 0
                    },
                    cancel = () => {
                        j = "idle", stopAnimationDriver(), g(), updateFinishedPromise(), D = O = null
                    },
                    finish = () => {
                        j = "finished", f && f(), stopAnimationDriver(), g()
                    },
                    play = () => {
                        if (S) return;
                        x || (x = n(tick));
                        let e = x.now();
                        c && c(), null !== R ? D = e - R : D && "finished" !== j || (D = e), "finished" === j && updateFinishedPromise(), O = D, R = null, j = "running", x.start()
                    };
                e && play();
                let X = {
                    then: (e, t) => b.then(e, t),
                    get time() {
                        return (0, T.X)(U)
                    },
                    set time(newTime) {
                        U = newTime = (0, T.w)(newTime), null === R && x && 0 !== P ? D = x.now() - newTime / P : R = newTime
                    },
                    get duration() {
                        let e = null === V.calculatedDuration ? (0, k.i)(V) : V.calculatedDuration;
                        return (0, T.X)(e)
                    },
                    get speed() {
                        return P
                    },
                    set speed(newSpeed) {
                        if (newSpeed === P || !x) return;
                        P = newSpeed, X.time = (0, T.X)(U)
                    },
                    get state() {
                        return j
                    },
                    play,
                    pause: () => {
                        j = "paused", R = U
                    },
                    stop: () => {
                        S = !0, "idle" !== j && (j = "idle", d && d(), cancel())
                    },
                    cancel: () => {
                        null !== O && tick(O), cancel()
                    },
                    complete: () => {
                        j = "finished"
                    },
                    sample: e => (D = 0, tick(e))
                };
                return X
            }
        },
        5086: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return spring
                }
            });
            var o = n(6917),
                a = n(5753),
                s = n(5487),
                l = n(4169);

            function calcAngularFreq(e, t) {
                return e * Math.sqrt(1 - t * t)
            }
            let u = ["duration", "bounce"],
                c = ["stiffness", "damping", "mass"];

            function isSpringType(e, t) {
                return t.some(t => void 0 !== e[t])
            }

            function spring({
                keyframes: e,
                restDelta: t,
                restSpeed: n,
                ...d
            }) {
                let f;
                let h = e[0],
                    m = e[e.length - 1],
                    g = {
                        done: !1,
                        value: h
                    },
                    {
                        stiffness: b,
                        damping: x,
                        mass: $,
                        duration: C,
                        velocity: E,
                        isResolvedFromDuration: P
                    } = function(e) {
                        let t = {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                            ...e
                        };
                        if (!isSpringType(e, c) && isSpringType(e, u)) {
                            let n = function({
                                duration: e = 800,
                                bounce: t = .25,
                                velocity: n = 0,
                                mass: a = 1
                            }) {
                                let u, c;
                                (0, s.K)(e <= (0, o.w)(10), "Spring duration must be 10 seconds or less");
                                let d = 1 - t;
                                d = (0, l.u)(.05, 1, d), e = (0, l.u)(.01, 10, (0, o.X)(e)), d < 1 ? (u = t => {
                                    let o = t * d,
                                        a = o * e,
                                        s = calcAngularFreq(t, d);
                                    return .001 - (o - n) / s * Math.exp(-a)
                                }, c = t => {
                                    let o = t * d,
                                        a = o * e,
                                        s = Math.pow(d, 2) * Math.pow(t, 2) * e,
                                        l = calcAngularFreq(Math.pow(t, 2), d),
                                        c = -u(t) + .001 > 0 ? -1 : 1;
                                    return c * ((a * n + n - s) * Math.exp(-a)) / l
                                }) : (u = t => {
                                    let o = Math.exp(-t * e),
                                        a = (t - n) * e + 1;
                                    return -.001 + o * a
                                }, c = t => {
                                    let o = Math.exp(-t * e),
                                        a = (n - t) * (e * e);
                                    return o * a
                                });
                                let f = 5 / e,
                                    h = function(e, t, n) {
                                        let o = n;
                                        for (let n = 1; n < 12; n++) o -= e(o) / t(o);
                                        return o
                                    }(u, c, f);
                                if (e = (0, o.w)(e), isNaN(h)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: e
                                }; {
                                    let t = Math.pow(h, 2) * a;
                                    return {
                                        stiffness: t,
                                        damping: 2 * d * Math.sqrt(a * t),
                                        duration: e
                                    }
                                }
                            }(e);
                            (t = { ...t,
                                ...n,
                                mass: 1
                            }).isResolvedFromDuration = !0
                        }
                        return t
                    }({ ...d,
                        velocity: -(0, o.X)(d.velocity || 0)
                    }),
                    S = E || 0,
                    A = x / (2 * Math.sqrt(b * $)),
                    T = m - h,
                    k = (0, o.X)(Math.sqrt(b / $)),
                    L = 5 > Math.abs(T);
                if (n || (n = L ? .01 : 2), t || (t = L ? .005 : .5), A < 1) {
                    let e = calcAngularFreq(k, A);
                    f = t => {
                        let n = Math.exp(-A * k * t);
                        return m - n * ((S + A * k * T) / e * Math.sin(e * t) + T * Math.cos(e * t))
                    }
                } else if (1 === A) f = e => m - Math.exp(-k * e) * (T + (S + k * T) * e);
                else {
                    let e = k * Math.sqrt(A * A - 1);
                    f = t => {
                        let n = Math.exp(-A * k * t),
                            o = Math.min(e * t, 300);
                        return m - n * ((S + A * k * T) * Math.sinh(o) + e * T * Math.cosh(o)) / e
                    }
                }
                return {
                    calculatedDuration: P && C || null,
                    next: e => {
                        let o = f(e);
                        if (P) g.done = e >= C;
                        else {
                            let s = S;
                            0 !== e && (s = A < 1 ? (0, a.P)(f, e, o) : 0);
                            let l = Math.abs(s) <= n,
                                u = Math.abs(m - o) <= t;
                            g.done = l && u
                        }
                        return g.value = g.done ? m : o, g
                    }
                }
            }
        },
        2284: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return o
                },
                i: function() {
                    return calcGeneratorDuration
                }
            });
            let o = 2e4;

            function calcGeneratorDuration(e) {
                let t = 0,
                    n = e.next(t);
                for (; !n.done && t < o;) t += 50, n = e.next(t);
                return t >= o ? 1 / 0 : t
            }
        },
        5753: function(e, t, n) {
            "use strict";
            n.d(t, {
                P: function() {
                    return calcGeneratorVelocity
                }
            });
            var o = n(3038);

            function calcGeneratorVelocity(e, t, n) {
                let a = Math.max(t - 5, 0);
                return (0, o.R)(n - e(a), t - a)
            }
        },
        177: function(e, t, n) {
            "use strict";
            n.d(t, {
                v: function() {
                    return animateMotionValue
                }
            });
            var o = n(5487),
                a = n(6917);
            let s = {
                    current: !1
                },
                isBezierDefinition = e => Array.isArray(e) && "number" == typeof e[0],
                cubicBezierAsString = ([e, t, n, o]) => `cubic-bezier(${e}, ${t}, ${n}, ${o})`,
                l = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: cubicBezierAsString([0, .65, .55, 1]),
                    circOut: cubicBezierAsString([.55, 0, 1, .45]),
                    backIn: cubicBezierAsString([.31, .01, .66, -.59]),
                    backOut: cubicBezierAsString([.33, 1.53, .69, .99])
                };
            var u = n(7159),
                c = n(4522),
                d = n(1662),
                f = n(2074);
            let h = (0, c.X)(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
                m = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
                requiresPregeneratedKeyframes = (e, t) => "spring" === t.type || "backgroundColor" === e || ! function isWaapiSupportedEasing(e) {
                    return !!(!e || "string" == typeof e && l[e] || isBezierDefinition(e) || Array.isArray(e) && e.every(isWaapiSupportedEasing))
                }(t.ease);
            var g = n(4714);
            let b = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                criticallyDampedSpring = e => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === e ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                x = {
                    type: "keyframes",
                    duration: .8
                },
                $ = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                getDefaultTransition = (e, {
                    keyframes: t
                }) => t.length > 2 ? x : g.G.has(e) ? e.startsWith("scale") ? criticallyDampedSpring(t[1]) : b : $;
            var C = n(1550);
            let isAnimatable = (e, t) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (C.P.test(t) || "0" === t) && !t.startsWith("url("));
            var E = n(9135),
                P = n(681),
                S = n(1056);
            let A = {
                    skipAnimations: !1
                },
                animateMotionValue = (e, t, n, c = {}) => g => {
                    let b = (0, S.e)(c, e) || {},
                        x = b.delay || c.delay || 0,
                        {
                            elapsed: $ = 0
                        } = c;
                    $ -= (0, a.w)(x);
                    let C = function(e, t, n, o) {
                            let a, s;
                            let l = isAnimatable(t, n);
                            a = Array.isArray(n) ? [...n] : [null, n];
                            let u = void 0 !== o.from ? o.from : e.get(),
                                c = [];
                            for (let e = 0; e < a.length; e++) {
                                var d;
                                null === a[e] && (a[e] = 0 === e ? u : a[e - 1]), ("number" == typeof(d = a[e]) ? 0 === d : null !== d ? "none" === d || "0" === d || (0, P.W)(d) : void 0) && c.push(e), "string" == typeof a[e] && "none" !== a[e] && "0" !== a[e] && (s = a[e])
                            }
                            if (l && c.length && s)
                                for (let e = 0; e < c.length; e++) {
                                    let n = c[e];
                                    a[n] = (0, E.T)(t, s)
                                }
                            return a
                        }(t, e, n, b),
                        T = C[0],
                        k = C[C.length - 1],
                        L = isAnimatable(e, T),
                        M = isAnimatable(e, k);
                    (0, o.K)(L === M, `You are trying to animate ${e} from "${T}" to "${k}". ${T} is not an animatable value - to enable this animation set ${T} to a value animatable to ${k} via the \`style\` property.`);
                    let V = {
                        keyframes: C,
                        velocity: t.getVelocity(),
                        ease: "easeOut",
                        ...b,
                        delay: -$,
                        onUpdate: e => {
                            t.set(e), b.onUpdate && b.onUpdate(e)
                        },
                        onComplete: () => {
                            g(), b.onComplete && b.onComplete()
                        }
                    };
                    if ((0, S.r)(b) || (V = { ...V,
                            ...getDefaultTransition(e, V)
                        }), V.duration && (V.duration = (0, a.w)(V.duration)), V.repeatDelay && (V.repeatDelay = (0, a.w)(V.repeatDelay)), !L || !M || s.current || !1 === b.type || A.skipAnimations) return function({
                        keyframes: e,
                        delay: t,
                        onUpdate: n,
                        onComplete: o
                    }) {
                        let setValue = () => (n && n(e[e.length - 1]), o && o(), {
                            time: 0,
                            speed: 1,
                            duration: 0,
                            play: d.Z,
                            pause: d.Z,
                            stop: d.Z,
                            then: e => (e(), Promise.resolve()),
                            cancel: d.Z,
                            complete: d.Z
                        });
                        return t ? (0, u.y)({
                            keyframes: [0, 1],
                            duration: 0,
                            delay: t,
                            onComplete: setValue
                        }) : setValue()
                    }(s.current ? { ...V,
                        delay: 0
                    } : V);
                    if (!c.isHandoff && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
                        let n = function(e, t, {
                            onUpdate: n,
                            onComplete: o,
                            ...s
                        }) {
                            let c, g;
                            let b = h() && m.has(t) && !s.repeatDelay && "mirror" !== s.repeatType && 0 !== s.damping && "inertia" !== s.type;
                            if (!b) return !1;
                            let x = !1,
                                $ = !1,
                                updateFinishedPromise = () => {
                                    g = new Promise(e => {
                                        c = e
                                    })
                                };
                            updateFinishedPromise();
                            let {
                                keyframes: C,
                                duration: E = 300,
                                ease: P,
                                times: S
                            } = s;
                            if (requiresPregeneratedKeyframes(t, s)) {
                                let e = (0, u.y)({ ...s,
                                        repeat: 0,
                                        delay: 0
                                    }),
                                    t = {
                                        done: !1,
                                        value: C[0]
                                    },
                                    n = [],
                                    o = 0;
                                for (; !t.done && o < 2e4;) t = e.sample(o), n.push(t.value), o += 10;
                                S = void 0, C = n, E = o - 10, P = "linear"
                            }
                            let A = function(e, t, n, {
                                    delay: o = 0,
                                    duration: a,
                                    repeat: s = 0,
                                    repeatType: u = "loop",
                                    ease: c,
                                    times: d
                                } = {}) {
                                    let f = {
                                        [t]: n
                                    };
                                    d && (f.offset = d);
                                    let h = function mapEasingToNativeEasing(e) {
                                        if (e) return isBezierDefinition(e) ? cubicBezierAsString(e) : Array.isArray(e) ? e.map(mapEasingToNativeEasing) : l[e]
                                    }(c);
                                    return Array.isArray(h) && (f.easing = h), e.animate(f, {
                                        delay: o,
                                        duration: a,
                                        easing: Array.isArray(h) ? "linear" : h,
                                        fill: "both",
                                        iterations: s + 1,
                                        direction: "reverse" === u ? "alternate" : "normal"
                                    })
                                }(e.owner.current, t, C, { ...s,
                                    duration: E,
                                    ease: P,
                                    times: S
                                }),
                                cancelAnimation = () => {
                                    $ = !1, A.cancel()
                                },
                                safeCancel = () => {
                                    $ = !0, f.Wi.update(cancelAnimation), c(), updateFinishedPromise()
                                };
                            return A.onfinish = () => {
                                $ || (e.set(function(e, {
                                    repeat: t,
                                    repeatType: n = "loop"
                                }) {
                                    let o = t && "loop" !== n && t % 2 == 1 ? 0 : e.length - 1;
                                    return e[o]
                                }(C, s)), o && o(), safeCancel())
                            }, {
                                then: (e, t) => g.then(e, t),
                                attachTimeline: e => (A.timeline = e, A.onfinish = null, d.Z),
                                get time() {
                                    return (0, a.X)(A.currentTime || 0)
                                },
                                set time(newTime) {
                                    A.currentTime = (0, a.w)(newTime)
                                },
                                get speed() {
                                    return A.playbackRate
                                },
                                set speed(newSpeed) {
                                    A.playbackRate = newSpeed
                                },
                                get duration() {
                                    return (0, a.X)(E)
                                },
                                play: () => {
                                    x || (A.play(), (0, f.Pn)(cancelAnimation))
                                },
                                pause: () => A.pause(),
                                stop: () => {
                                    if (x = !0, "idle" === A.playState) return;
                                    let {
                                        currentTime: t
                                    } = A;
                                    if (t) {
                                        let n = (0, u.y)({ ...s,
                                            autoplay: !1
                                        });
                                        e.setWithVelocity(n.sample(t - 10).value, n.sample(t).value, 10)
                                    }
                                    safeCancel()
                                },
                                complete: () => {
                                    $ || A.finish()
                                },
                                cancel: safeCancel
                            }
                        }(t, e, V);
                        if (n) return n
                    }
                    return (0, u.y)(V)
                }
        },
        1059: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return animateSingleValue
                }
            });
            var o = n(177),
                a = n(3234),
                s = n(406);

            function animateSingleValue(e, t, n) {
                let l = (0, s.i)(e) ? e : (0, a.BX)(e);
                return l.start((0, o.v)("", l, t, n)), l.animation
            }
        },
        2711: function(e, t, n) {
            "use strict";
            n.d(t, {
                w: function() {
                    return animateTarget
                }
            });
            var o = n(4714),
                a = n(8588),
                s = n(177),
                l = n(2490),
                u = n(4330),
                c = n(1056),
                d = n(2074);

            function animateTarget(e, t, {
                delay: n = 0,
                transitionOverride: f,
                type: h
            } = {}) {
                let {
                    transition: m = e.getDefaultTransition(),
                    transitionEnd: g,
                    ...b
                } = e.makeTargetAnimatable(t), x = e.getValue("willChange");
                f && (m = f);
                let $ = [],
                    C = h && e.animationState && e.animationState.getState()[h];
                for (let t in b) {
                    let u = e.getValue(t),
                        f = b[t];
                    if (!u || void 0 === f || C && function({
                            protectedKeys: e,
                            needsAnimating: t
                        }, n) {
                            let o = e.hasOwnProperty(n) && !0 !== t[n];
                            return t[n] = !1, o
                        }(C, t)) continue;
                    let h = {
                        delay: n,
                        elapsed: 0,
                        ...(0, c.e)(m || {}, t)
                    };
                    if (window.HandoffAppearAnimations) {
                        let n = e.getProps()[a.M];
                        if (n) {
                            let e = window.HandoffAppearAnimations(n, t, u, d.Wi);
                            null !== e && (h.elapsed = e, h.isHandoff = !0)
                        }
                    }
                    let g = !h.isHandoff && ! function(e, t) {
                        let n = e.get();
                        if (!Array.isArray(t)) return n !== t;
                        for (let e = 0; e < t.length; e++)
                            if (t[e] !== n) return !0
                    }(u, f);
                    if ("spring" === h.type && (u.getVelocity() || h.velocity) && (g = !1), u.animation && (g = !1), g) continue;
                    u.start((0, s.v)(t, u, f, e.shouldReduceMotion && o.G.has(t) ? {
                        type: !1
                    } : h));
                    let E = u.animation;
                    (0, l.L)(x) && (x.add(t), E.then(() => x.remove(t))), $.push(E)
                }
                return g && Promise.all($).then(() => {
                    g && (0, u.CD)(e, g)
                }), $
            }
        },
        8588: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return a
                }
            });
            var o = n(3193);
            let a = "data-" + (0, o.D)("framerAppearId")
        },
        2445: function(e, t, n) {
            "use strict";

            function isAnimationControls(e) {
                return null !== e && "object" == typeof e && "function" == typeof e.start
            }
            n.d(t, {
                H: function() {
                    return isAnimationControls
                }
            })
        },
        8488: function(e, t, n) {
            "use strict";
            n.d(t, {
                C: function() {
                    return isKeyframesTarget
                }
            });
            let isKeyframesTarget = e => Array.isArray(e)
        },
        1056: function(e, t, n) {
            "use strict";

            function isTransitionDefined({
                when: e,
                delay: t,
                delayChildren: n,
                staggerChildren: o,
                staggerDirection: a,
                repeat: s,
                repeatType: l,
                repeatDelay: u,
                from: c,
                elapsed: d,
                ...f
            }) {
                return !!Object.keys(f).length
            }

            function getValueTransition(e, t) {
                return e[t] || e.default || e
            }
            n.d(t, {
                e: function() {
                    return getValueTransition
                },
                r: function() {
                    return isTransitionDefined
                }
            })
        },
        1526: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return AnimatePresence
                }
            });
            var o = n(7294),
                a = n(8868);

            function useIsMounted() {
                let e = (0, o.useRef)(!1);
                return (0, a.L)(() => (e.current = !0, () => {
                    e.current = !1
                }), []), e
            }
            var s = n(2074),
                l = n(240),
                u = n(6681);
            let PopChildMeasure = class PopChildMeasure extends o.Component {
                getSnapshotBeforeUpdate(e) {
                    let t = this.props.childRef.current;
                    if (t && e.isPresent && !this.props.isPresent) {
                        let e = this.props.sizeRef.current;
                        e.height = t.offsetHeight || 0, e.width = t.offsetWidth || 0, e.top = t.offsetTop, e.left = t.offsetLeft
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            };

            function PopChild({
                children: e,
                isPresent: t
            }) {
                let n = (0, o.useId)(),
                    a = (0, o.useRef)(null),
                    s = (0, o.useRef)({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0
                    });
                return (0, o.useInsertionEffect)(() => {
                    let {
                        width: e,
                        height: o,
                        top: l,
                        left: u
                    } = s.current;
                    if (t || !a.current || !e || !o) return;
                    a.current.dataset.motionPopId = n;
                    let c = document.createElement("style");
                    return document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${o}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `), () => {
                        document.head.removeChild(c)
                    }
                }, [t]), o.createElement(PopChildMeasure, {
                    isPresent: t,
                    childRef: a,
                    sizeRef: s
                }, o.cloneElement(e, {
                    ref: a
                }))
            }
            let PresenceChild = ({
                children: e,
                initial: t,
                isPresent: n,
                onExitComplete: a,
                custom: s,
                presenceAffectsLayout: c,
                mode: d
            }) => {
                let f = (0, u.h)(newChildrenMap),
                    h = (0, o.useId)(),
                    m = (0, o.useMemo)(() => ({
                        id: h,
                        initial: t,
                        isPresent: n,
                        custom: s,
                        onExitComplete: e => {
                            for (let t of (f.set(e, !0), f.values()))
                                if (!t) return;
                            a && a()
                        },
                        register: e => (f.set(e, !1), () => f.delete(e))
                    }), c ? void 0 : [n]);
                return (0, o.useMemo)(() => {
                    f.forEach((e, t) => f.set(t, !1))
                }, [n]), o.useEffect(() => {
                    n || f.size || !a || a()
                }, [n]), "popLayout" === d && (e = o.createElement(PopChild, {
                    isPresent: n
                }, e)), o.createElement(l.O.Provider, {
                    value: m
                }, e)
            };

            function newChildrenMap() {
                return new Map
            }
            var c = n(5364),
                d = n(5487);
            let getChildKey = e => e.key || "",
                AnimatePresence = ({
                    children: e,
                    custom: t,
                    initial: n = !0,
                    onExitComplete: l,
                    exitBeforeEnter: u,
                    presenceAffectsLayout: f = !0,
                    mode: h = "sync"
                }) => {
                    var m;
                    (0, d.k)(!u, "Replace exitBeforeEnter with mode='wait'");
                    let g = (0, o.useContext)(c.p).forceRender || function() {
                            let e = useIsMounted(),
                                [t, n] = (0, o.useState)(0),
                                a = (0, o.useCallback)(() => {
                                    e.current && n(t + 1)
                                }, [t]),
                                l = (0, o.useCallback)(() => s.Wi.postRender(a), [a]);
                            return [l, t]
                        }()[0],
                        b = useIsMounted(),
                        x = function(e) {
                            let t = [];
                            return o.Children.forEach(e, e => {
                                (0, o.isValidElement)(e) && t.push(e)
                            }), t
                        }(e),
                        $ = x,
                        C = (0, o.useRef)(new Map).current,
                        E = (0, o.useRef)($),
                        P = (0, o.useRef)(new Map).current,
                        S = (0, o.useRef)(!0);
                    if ((0, a.L)(() => {
                            S.current = !1,
                                function(e, t) {
                                    e.forEach(e => {
                                        let n = getChildKey(e);
                                        t.set(n, e)
                                    })
                                }(x, P), E.current = $
                        }), m = () => {
                            S.current = !0, P.clear(), C.clear()
                        }, (0, o.useEffect)(() => () => m(), []), S.current) return o.createElement(o.Fragment, null, $.map(e => o.createElement(PresenceChild, {
                        key: getChildKey(e),
                        isPresent: !0,
                        initial: !!n && void 0,
                        presenceAffectsLayout: f,
                        mode: h
                    }, e)));
                    $ = [...$];
                    let A = E.current.map(getChildKey),
                        T = x.map(getChildKey),
                        k = A.length;
                    for (let e = 0; e < k; e++) {
                        let t = A[e]; - 1 !== T.indexOf(t) || C.has(t) || C.set(t, void 0)
                    }
                    return "wait" === h && C.size && ($ = []), C.forEach((e, n) => {
                        if (-1 !== T.indexOf(n)) return;
                        let a = P.get(n);
                        if (!a) return;
                        let s = A.indexOf(n),
                            u = e;
                        u || (u = o.createElement(PresenceChild, {
                            key: getChildKey(a),
                            isPresent: !1,
                            onExitComplete: () => {
                                C.delete(n);
                                let e = Array.from(P.keys()).filter(e => !T.includes(e));
                                if (e.forEach(e => P.delete(e)), E.current = x.filter(t => {
                                        let o = getChildKey(t);
                                        return o === n || e.includes(o)
                                    }), !C.size) {
                                    if (!1 === b.current) return;
                                    g(), l && l()
                                }
                            },
                            custom: t,
                            presenceAffectsLayout: f,
                            mode: h
                        }, a), C.set(n, u)), $.splice(s, 0, u)
                    }), $ = $.map(e => {
                        let t = e.key;
                        return C.has(t) ? e : o.createElement(PresenceChild, {
                            key: getChildKey(e),
                            isPresent: !0,
                            presenceAffectsLayout: f,
                            mode: h
                        }, e)
                    }), o.createElement(o.Fragment, null, C.size ? $ : $.map(e => (0, o.cloneElement)(e)))
                }
        },
        5364: function(e, t, n) {
            "use strict";
            n.d(t, {
                p: function() {
                    return a
                }
            });
            var o = n(7294);
            let a = (0, o.createContext)({})
        },
        6014: function(e, t, n) {
            "use strict";
            n.d(t, {
                _: function() {
                    return a
                }
            });
            var o = n(7294);
            let a = (0, o.createContext)({
                transformPagePoint: e => e,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        240: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return a
                }
            });
            var o = n(7294);
            let a = (0, o.createContext)(null)
        },
        7255: function(e, t, n) {
            "use strict";
            n.d(t, {
                Bn: function() {
                    return s
                },
                X7: function() {
                    return l
                },
                Z7: function() {
                    return circIn
                }
            });
            var o = n(415),
                a = n(5129);
            let circIn = e => 1 - Math.sin(Math.acos(e)),
                s = (0, a.M)(circIn),
                l = (0, o.o)(circIn)
        },
        415: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: function() {
                    return mirrorEasing
                }
            });
            let mirrorEasing = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
        },
        5129: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return reverseEasing
                }
            });
            let reverseEasing = e => t => 1 - e(1 - t)
        },
        3338: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return isEasingArray
                }
            });
            let isEasingArray = e => Array.isArray(e) && "number" != typeof e[0]
        },
        2074: function(e, t, n) {
            "use strict";
            n.d(t, {
                Pn: function() {
                    return l
                },
                Wi: function() {
                    return s
                },
                frameData: function() {
                    return u
                },
                S6: function() {
                    return c
                }
            });
            var o = n(1662);
            let Queue = class Queue {
                constructor() {
                    this.order = [], this.scheduled = new Set
                }
                add(e) {
                    if (!this.scheduled.has(e)) return this.scheduled.add(e), this.order.push(e), !0
                }
                remove(e) {
                    let t = this.order.indexOf(e); - 1 !== t && (this.order.splice(t, 1), this.scheduled.delete(e))
                }
                clear() {
                    this.order.length = 0, this.scheduled.clear()
                }
            };
            let a = ["prepare", "read", "update", "preRender", "render", "postRender"],
                {
                    schedule: s,
                    cancel: l,
                    state: u,
                    steps: c
                } = function(e, t) {
                    let n = !1,
                        o = !0,
                        s = {
                            delta: 0,
                            timestamp: 0,
                            isProcessing: !1
                        },
                        l = a.reduce((e, t) => (e[t] = function(e) {
                            let t = new Queue,
                                n = new Queue,
                                o = 0,
                                a = !1,
                                s = !1,
                                l = new WeakSet,
                                u = {
                                    schedule: (e, s = !1, u = !1) => {
                                        let c = u && a,
                                            d = c ? t : n;
                                        return s && l.add(e), d.add(e) && c && a && (o = t.order.length), e
                                    },
                                    cancel: e => {
                                        n.remove(e), l.delete(e)
                                    },
                                    process: c => {
                                        if (a) {
                                            s = !0;
                                            return
                                        }
                                        if (a = !0, [t, n] = [n, t], n.clear(), o = t.order.length)
                                            for (let n = 0; n < o; n++) {
                                                let o = t.order[n];
                                                o(c), l.has(o) && (u.schedule(o), e())
                                            }
                                        a = !1, s && (s = !1, u.process(c))
                                    }
                                };
                            return u
                        }(() => n = !0), e), {}),
                        processStep = e => l[e].process(s),
                        processBatch = () => {
                            let l = performance.now();
                            n = !1, s.delta = o ? 1e3 / 60 : Math.max(Math.min(l - s.timestamp, 40), 1), s.timestamp = l, s.isProcessing = !0, a.forEach(processStep), s.isProcessing = !1, n && t && (o = !1, e(processBatch))
                        },
                        wake = () => {
                            n = !0, o = !0, s.isProcessing || e(processBatch)
                        },
                        u = a.reduce((e, t) => {
                            let o = l[t];
                            return e[t] = (e, t = !1, a = !1) => (n || wake(), o.schedule(e, t, a)), e
                        }, {});
                    return {
                        schedule: u,
                        cancel: e => a.forEach(t => l[t].cancel(e)),
                        state: s,
                        steps: l
                    }
                }("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : o.Z, !0)
        },
        9442: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return a
                }
            });
            let o = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                a = {};
            for (let e in o) a[e] = {
                isEnabled: t => o[e].some(e => !!t[e])
            }
        },
        6816: function(e, t, n) {
            "use strict";
            n.d(t, {
                j: function() {
                    return isForcedMotionValue
                }
            });
            var o = n(4561),
                a = n(4714);

            function isForcedMotionValue(e, {
                layout: t,
                layoutId: n
            }) {
                return a.G.has(e) || e.startsWith("origin") || (t || void 0 !== n) && (!!o.P[e] || "opacity" === e)
            }
        },
        6117: function(e, t, n) {
            "use strict";

            function convertBoundingBoxToBox({
                top: e,
                left: t,
                right: n,
                bottom: o
            }) {
                return {
                    x: {
                        min: t,
                        max: n
                    },
                    y: {
                        min: e,
                        max: o
                    }
                }
            }

            function convertBoxToBoundingBox({
                x: e,
                y: t
            }) {
                return {
                    top: t.min,
                    right: e.max,
                    bottom: t.max,
                    left: e.min
                }
            }

            function transformBoxPoints(e, t) {
                if (!t) return e;
                let n = t({
                        x: e.left,
                        y: e.top
                    }),
                    o = t({
                        x: e.right,
                        y: e.bottom
                    });
                return {
                    top: n.y,
                    left: n.x,
                    bottom: o.y,
                    right: o.x
                }
            }
            n.d(t, {
                d7: function() {
                    return transformBoxPoints
                },
                i8: function() {
                    return convertBoundingBoxToBox
                },
                z2: function() {
                    return convertBoxToBoundingBox
                }
            })
        },
        6e3: function(e, t, n) {
            "use strict";
            n.d(t, {
                D2: function() {
                    return transformBox
                },
                YY: function() {
                    return applyTreeDeltas
                },
                am: function() {
                    return translateAxis
                },
                o2: function() {
                    return applyBoxDelta
                },
                q2: function() {
                    return scalePoint
                }
            });
            var o = n(22),
                a = n(9527);

            function scalePoint(e, t, n) {
                return n + t * (e - n)
            }

            function applyPointDelta(e, t, n, o, a) {
                return void 0 !== a && (e = o + a * (e - o)), o + n * (e - o) + t
            }

            function applyAxisDelta(e, t = 0, n = 1, o, a) {
                e.min = applyPointDelta(e.min, t, n, o, a), e.max = applyPointDelta(e.max, t, n, o, a)
            }

            function applyBoxDelta(e, {
                x: t,
                y: n
            }) {
                applyAxisDelta(e.x, t.translate, t.scale, t.originPoint), applyAxisDelta(e.y, n.translate, n.scale, n.originPoint)
            }

            function applyTreeDeltas(e, t, n, o = !1) {
                let s, l;
                let u = n.length;
                if (u) {
                    t.x = t.y = 1;
                    for (let c = 0; c < u; c++) {
                        l = (s = n[c]).projectionDelta;
                        let u = s.instance;
                        (!u || !u.style || "contents" !== u.style.display) && (o && s.options.layoutScroll && s.scroll && s !== s.root && transformBox(e, {
                            x: -s.scroll.offset.x,
                            y: -s.scroll.offset.y
                        }), l && (t.x *= l.x.scale, t.y *= l.y.scale, applyBoxDelta(e, l)), o && (0, a.ud)(s.latestValues) && transformBox(e, s.latestValues))
                    }
                    t.x = snapToDefault(t.x), t.y = snapToDefault(t.y)
                }
            }

            function snapToDefault(e) {
                return Number.isInteger(e) ? e : e > 1.0000000000001 || e < .999999999999 ? e : 1
            }

            function translateAxis(e, t) {
                e.min = e.min + t, e.max = e.max + t
            }

            function transformAxis(e, t, [n, a, s]) {
                let l = void 0 !== t[s] ? t[s] : .5,
                    u = (0, o.C)(e.min, e.max, l);
                applyAxisDelta(e, t[n], t[a], u, t.scale)
            }
            let s = ["x", "scaleX", "originX"],
                l = ["y", "scaleY", "originY"];

            function transformBox(e, t) {
                transformAxis(e.x, t, s), transformAxis(e.y, t, l)
            }
        },
        1512: function(e, t, n) {
            "use strict";
            n.d(t, {
                dO: function() {
                    return createBox
                },
                wc: function() {
                    return createDelta
                }
            });
            let createAxisDelta = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                createDelta = () => ({
                    x: createAxisDelta(),
                    y: createAxisDelta()
                }),
                createAxis = () => ({
                    min: 0,
                    max: 0
                }),
                createBox = () => ({
                    x: createAxis(),
                    y: createAxis()
                })
        },
        4561: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return addScaleCorrector
                },
                P: function() {
                    return o
                }
            });
            let o = {};

            function addScaleCorrector(e) {
                Object.assign(o, e)
            }
        },
        9527: function(e, t, n) {
            "use strict";

            function isIdentityScale(e) {
                return void 0 === e || 1 === e
            }

            function hasScale({
                scale: e,
                scaleX: t,
                scaleY: n
            }) {
                return !isIdentityScale(e) || !isIdentityScale(t) || !isIdentityScale(n)
            }

            function hasTransform(e) {
                return hasScale(e) || has2DTranslate(e) || e.z || e.rotate || e.rotateX || e.rotateY
            }

            function has2DTranslate(e) {
                var t, n;
                return (t = e.x) && "0%" !== t || (n = e.y) && "0%" !== n
            }
            n.d(t, {
                D_: function() {
                    return has2DTranslate
                },
                Lj: function() {
                    return hasScale
                },
                ud: function() {
                    return hasTransform
                }
            })
        },
        6460: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return measureViewportBox
                },
                z: function() {
                    return measurePageBox
                }
            });
            var o = n(6117),
                a = n(6e3);

            function measureViewportBox(e, t) {
                return (0, o.i8)((0, o.d7)(e.getBoundingClientRect(), t))
            }

            function measurePageBox(e, t, n) {
                let o = measureViewportBox(e, n),
                    {
                        scroll: s
                    } = t;
                return s && ((0, a.am)(o.x, s.offset.x), (0, a.am)(o.y, s.offset.y)), o
            }
        },
        1760: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return DOMVisualElement
                }
            });
            var o = n(4330),
                a = n(5487),
                s = n(3441),
                l = n(7630);
            let u = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function getVariableValue(e, t, n = 1) {
                (0, a.k)(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                let [o, c] = function(e) {
                    let t = u.exec(e);
                    if (!t) return [, ];
                    let [, n, o] = t;
                    return [n, o]
                }(e);
                if (!o) return;
                let d = window.getComputedStyle(t).getPropertyValue(o);
                if (d) {
                    let e = d.trim();
                    return (0, s.P)(e) ? parseFloat(e) : e
                }
                return (0, l.tm)(c) ? getVariableValue(c, t, n + 1) : c
            }
            var c = n(8488),
                d = n(4714),
                f = n(6440),
                h = n(1741),
                m = n(1649),
                g = n(6190);
            let b = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
                isPositionalKey = e => b.has(e),
                hasPositionalKey = e => Object.keys(e).some(isPositionalKey),
                isNumOrPxType = e => e === m.Rx || e === g.px,
                getPosFromMatrix = (e, t) => parseFloat(e.split(", ")[t]),
                getTranslateFromMatrix = (e, t) => (n, {
                    transform: o
                }) => {
                    if ("none" === o || !o) return 0;
                    let a = o.match(/^matrix3d\((.+)\)$/);
                    if (a) return getPosFromMatrix(a[1], t); {
                        let t = o.match(/^matrix\((.+)\)$/);
                        return t ? getPosFromMatrix(t[1], e) : 0
                    }
                },
                x = new Set(["x", "y", "z"]),
                $ = d._.filter(e => !x.has(e)),
                C = {
                    width: ({
                        x: e
                    }, {
                        paddingLeft: t = "0",
                        paddingRight: n = "0"
                    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
                    height: ({
                        y: e
                    }, {
                        paddingTop: t = "0",
                        paddingBottom: n = "0"
                    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
                    top: (e, {
                        top: t
                    }) => parseFloat(t),
                    left: (e, {
                        left: t
                    }) => parseFloat(t),
                    bottom: ({
                        y: e
                    }, {
                        top: t
                    }) => parseFloat(t) + (e.max - e.min),
                    right: ({
                        x: e
                    }, {
                        left: t
                    }) => parseFloat(t) + (e.max - e.min),
                    x: getTranslateFromMatrix(4, 13),
                    y: getTranslateFromMatrix(5, 14)
                };
            C.translateX = C.x, C.translateY = C.y;
            let convertChangedValueTypes = (e, t, n) => {
                    let o = t.measureViewportBox(),
                        a = t.current,
                        s = getComputedStyle(a),
                        {
                            display: l
                        } = s,
                        u = {};
                    "none" === l && t.setStaticValue("display", e.display || "block"), n.forEach(e => {
                        u[e] = C[e](o, s)
                    }), t.render();
                    let c = t.measureViewportBox();
                    return n.forEach(n => {
                        let o = t.getValue(n);
                        o && o.jump(u[n]), e[n] = C[n](c, s)
                    }), e
                },
                checkAndConvertChangedValueTypes = (e, t, n = {}, o = {}) => {
                    t = { ...t
                    }, o = { ...o
                    };
                    let s = Object.keys(t).filter(isPositionalKey),
                        l = [],
                        u = !1,
                        d = [];
                    if (s.forEach(s => {
                            let h;
                            let m = e.getValue(s);
                            if (!e.hasValue(s)) return;
                            let b = n[s],
                                x = (0, f.C)(b),
                                C = t[s];
                            if ((0, c.C)(C)) {
                                let e = C.length,
                                    t = null === C[0] ? 1 : 0;
                                b = C[t], x = (0, f.C)(b);
                                for (let n = t; n < e && null !== C[n]; n++) h ? (0, a.k)((0, f.C)(C[n]) === h, "All keyframes must be of the same type") : (h = (0, f.C)(C[n]), (0, a.k)(h === x || isNumOrPxType(x) && isNumOrPxType(h), "Keyframes must be of the same dimension as the current value"))
                            } else h = (0, f.C)(C);
                            if (x !== h) {
                                if (isNumOrPxType(x) && isNumOrPxType(h)) {
                                    let e = m.get();
                                    "string" == typeof e && m.set(parseFloat(e)), "string" == typeof C ? t[s] = parseFloat(C) : Array.isArray(C) && h === g.px && (t[s] = C.map(parseFloat))
                                } else(null == x ? void 0 : x.transform) && (null == h ? void 0 : h.transform) && (0 === b || 0 === C) ? 0 === b ? m.set(h.transform(b)) : t[s] = x.transform(C) : (u || (l = function(e) {
                                    let t = [];
                                    return $.forEach(n => {
                                        let o = e.getValue(n);
                                        void 0 !== o && (t.push([n, o.get()]), o.set(n.startsWith("scale") ? 1 : 0))
                                    }), t.length && e.render(), t
                                }(e), u = !0), d.push(s), o[s] = void 0 !== o[s] ? o[s] : t[s], m.jump(C))
                            }
                        }), !d.length) return {
                        target: t,
                        transitionEnd: o
                    }; {
                        let n = d.indexOf("height") >= 0 ? window.pageYOffset : null,
                            a = convertChangedValueTypes(t, e, d);
                        return l.length && l.forEach(([t, n]) => {
                            e.getValue(t).set(n)
                        }), e.render(), h.j && null !== n && window.scrollTo({
                            top: n
                        }), {
                            target: a,
                            transitionEnd: o
                        }
                    }
                },
                parseDomVariant = (e, t, n, o) => {
                    var a, s;
                    let u = function(e, { ...t
                    }, n) {
                        let o = e.current;
                        if (!(o instanceof Element)) return {
                            target: t,
                            transitionEnd: n
                        };
                        for (let a in n && (n = { ...n
                            }), e.values.forEach(e => {
                                let t = e.get();
                                if (!(0, l.tm)(t)) return;
                                let n = getVariableValue(t, o);
                                n && e.set(n)
                            }), t) {
                            let e = t[a];
                            if (!(0, l.tm)(e)) continue;
                            let s = getVariableValue(e, o);
                            s && (t[a] = s, n || (n = {}), void 0 === n[a] && (n[a] = e))
                        }
                        return {
                            target: t,
                            transitionEnd: n
                        }
                    }(e, t, o);
                    return t = u.target, o = u.transitionEnd, a = t, s = o, hasPositionalKey(a) ? checkAndConvertChangedValueTypes(e, a, n, s) : {
                        target: a,
                        transitionEnd: s
                    }
                };
            var E = n(1512),
                P = n(1804);
            let S = {
                    current: null
                },
                A = {
                    current: !1
                };
            var T = n(1560),
                k = n(3234),
                L = n(2490),
                M = n(406),
                V = n(7504),
                j = n(7732),
                R = n(9432),
                D = n(9442),
                O = n(2963),
                F = n(6955),
                B = n(2074);
            let W = Object.keys(D.A),
                U = W.length,
                X = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
                J = O.V.length;
            let VisualElement = class VisualElement {
                constructor({
                    parent: e,
                    props: t,
                    presenceContext: n,
                    reducedMotionConfig: o,
                    visualState: a
                }, s = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.scheduleRender = () => B.Wi.render(this.render, !1, !0);
                    let {
                        latestValues: l,
                        renderState: u
                    } = a;
                    this.latestValues = l, this.baseTarget = { ...l
                    }, this.initialValues = t.initial ? { ...l
                    } : {}, this.renderState = u, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = o, this.options = s, this.isControllingVariants = (0, V.G)(t), this.isVariantNode = (0, V.M)(t), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
                    let {
                        willChange: c,
                        ...d
                    } = this.scrapeMotionValuesFromProps(t, {});
                    for (let e in d) {
                        let t = d[e];
                        void 0 !== l[e] && (0, M.i)(t) && (t.set(l[e], !1), (0, L.L)(c) && c.add(e))
                    }
                }
                scrapeMotionValuesFromProps(e, t) {
                    return {}
                }
                mount(e) {
                    this.current = e, F.R.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), A.current || function() {
                        if (A.current = !0, h.j) {
                            if (window.matchMedia) {
                                let e = window.matchMedia("(prefers-reduced-motion)"),
                                    setReducedMotionPreferences = () => S.current = e.matches;
                                e.addListener(setReducedMotionPreferences), setReducedMotionPreferences()
                            } else S.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || S.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let e in F.R.delete(this.current), this.projection && this.projection.unmount(), (0, B.Pn)(this.notifyUpdate), (0, B.Pn)(this.render), this.valueSubscriptions.forEach(e => e()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[e].clear();
                    for (let e in this.features) this.features[e].unmount();
                    this.current = null
                }
                bindToMotionValue(e, t) {
                    let n = d.G.has(e),
                        o = t.on("change", t => {
                            this.latestValues[e] = t, this.props.onUpdate && B.Wi.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        a = t.on("renderRequest", this.scheduleRender);
                    this.valueSubscriptions.set(e, () => {
                        o(), a()
                    })
                }
                sortNodePosition(e) {
                    return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
                }
                loadFeatures({
                    children: e,
                    ...t
                }, n, o, a) {
                    let s, l;
                    for (let e = 0; e < U; e++) {
                        let n = W[e],
                            {
                                isEnabled: o,
                                Feature: a,
                                ProjectionNode: u,
                                MeasureLayout: c
                            } = D.A[n];
                        u && (s = u), o(t) && (!this.features[n] && a && (this.features[n] = new a(this)), c && (l = c))
                    }
                    if (("html" === this.type || "svg" === this.type) && !this.projection && s) {
                        this.projection = new s(this.latestValues, this.parent && this.parent.projection);
                        let {
                            layoutId: e,
                            layout: n,
                            drag: o,
                            dragConstraints: l,
                            layoutScroll: u,
                            layoutRoot: c
                        } = t;
                        this.projection.setOptions({
                            layoutId: e,
                            layout: n,
                            alwaysMeasureLayout: !!o || l && (0, P.I)(l),
                            visualElement: this,
                            scheduleRender: () => this.scheduleRender(),
                            animationType: "string" == typeof n ? n : "both",
                            initialPromotionConfig: a,
                            layoutScroll: u,
                            layoutRoot: c
                        })
                    }
                    return l
                }
                updateFeatures() {
                    for (let e in this.features) {
                        let t = this.features[e];
                        t.isMounted ? t.update() : (t.mount(), t.isMounted = !0)
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.options, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, E.dO)()
                }
                getStaticValue(e) {
                    return this.latestValues[e]
                }
                setStaticValue(e, t) {
                    this.latestValues[e] = t
                }
                makeTargetAnimatable(e, t = !0) {
                    return this.makeTargetAnimatableFromInstance(e, this.props, t)
                }
                update(e, t) {
                    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
                    for (let t = 0; t < X.length; t++) {
                        let n = X[t];
                        this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
                        let o = e["on" + n];
                        o && (this.propEventSubscriptions[n] = this.on(n, o))
                    }
                    this.prevMotionValues = function(e, t, n) {
                        let {
                            willChange: o
                        } = t;
                        for (let a in t) {
                            let s = t[a],
                                l = n[a];
                            if ((0, M.i)(s)) e.addValue(a, s), (0, L.L)(o) && o.add(a);
                            else if ((0, M.i)(l)) e.addValue(a, (0, k.BX)(s, {
                                owner: e
                            })), (0, L.L)(o) && o.remove(a);
                            else if (l !== s) {
                                if (e.hasValue(a)) {
                                    let t = e.getValue(a);
                                    t.hasAnimated || t.set(s)
                                } else {
                                    let t = e.getStaticValue(a);
                                    e.addValue(a, (0, k.BX)(void 0 !== t ? t : s, {
                                        owner: e
                                    }))
                                }
                            }
                        }
                        for (let o in n) void 0 === t[o] && e.removeValue(o);
                        return t
                    }(this, this.scrapeMotionValuesFromProps(e, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(e) {
                    return this.props.variants ? this.props.variants[e] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                getVariantContext(e = !1) {
                    if (e) return this.parent ? this.parent.getVariantContext() : void 0;
                    if (!this.isControllingVariants) {
                        let e = this.parent && this.parent.getVariantContext() || {};
                        return void 0 !== this.props.initial && (e.initial = this.props.initial), e
                    }
                    let t = {};
                    for (let e = 0; e < J; e++) {
                        let n = O.V[e],
                            o = this.props[n];
                        ((0, j.$)(o) || !1 === o) && (t[n] = o)
                    }
                    return t
                }
                addVariantChild(e) {
                    let t = this.getClosestVariantNode();
                    if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e)
                }
                addValue(e, t) {
                    t !== this.values.get(e) && (this.removeValue(e), this.bindToMotionValue(e, t)), this.values.set(e, t), this.latestValues[e] = t.get()
                }
                removeValue(e) {
                    this.values.delete(e);
                    let t = this.valueSubscriptions.get(e);
                    t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
                }
                hasValue(e) {
                    return this.values.has(e)
                }
                getValue(e, t) {
                    if (this.props.values && this.props.values[e]) return this.props.values[e];
                    let n = this.values.get(e);
                    return void 0 === n && void 0 !== t && (n = (0, k.BX)(t, {
                        owner: this
                    }), this.addValue(e, n)), n
                }
                readValue(e) {
                    var t;
                    return void 0 === this.latestValues[e] && this.current ? null !== (t = this.getBaseTargetFromProps(this.props, e)) && void 0 !== t ? t : this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e]
                }
                setBaseTarget(e, t) {
                    this.baseTarget[e] = t
                }
                getBaseTarget(e) {
                    var t;
                    let {
                        initial: n
                    } = this.props, o = "string" == typeof n || "object" == typeof n ? null === (t = (0, R.o)(this.props, n)) || void 0 === t ? void 0 : t[e] : void 0;
                    if (n && void 0 !== o) return o;
                    let a = this.getBaseTargetFromProps(this.props, e);
                    return void 0 === a || (0, M.i)(a) ? void 0 !== this.initialValues[e] && void 0 === o ? void 0 : this.baseTarget[e] : a
                }
                on(e, t) {
                    return this.events[e] || (this.events[e] = new T.L), this.events[e].add(t)
                }
                notify(e, ...t) {
                    this.events[e] && this.events[e].notify(...t)
                }
            };
            let DOMVisualElement = class DOMVisualElement extends VisualElement {
                sortInstanceNodePosition(e, t) {
                    return 2 & e.compareDocumentPosition(t) ? 1 : -1
                }
                getBaseTargetFromProps(e, t) {
                    return e.style ? e.style[t] : void 0
                }
                removeValueFromRenderState(e, {
                    vars: t,
                    style: n
                }) {
                    delete t[e], delete n[e]
                }
                makeTargetAnimatableFromInstance({
                    transition: e,
                    transitionEnd: t,
                    ...n
                }, {
                    transformValues: a
                }, s) {
                    let l = (0, o.P$)(n, e || {}, this);
                    if (a && (t && (t = a(t)), n && (n = a(n)), l && (l = a(l))), s) {
                        (0, o.GJ)(this, n, l);
                        let e = parseDomVariant(this, n, l, t);
                        t = e.transitionEnd, n = e.target
                    }
                    return {
                        transition: e,
                        transitionEnd: t,
                        ...n
                    }
                }
            }
        },
        8439: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return eQ
                }
            });
            var o, a = n(7294),
                s = n(6014);
            let l = (0, a.createContext)({});
            var u = n(240),
                c = n(8868);
            let d = (0, a.createContext)({
                strict: !1
            });
            var f = n(8588),
                h = n(1804),
                m = n(7732),
                g = n(7504);

            function variantLabelsAsDependency(e) {
                return Array.isArray(e) ? e.join(" ") : e
            }
            var b = n(9442),
                x = n(1741),
                $ = n(5364);
            let C = (0, a.createContext)({}),
                E = Symbol.for("motionComponentSymbol"),
                P = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function isSVGComponent(e) {
                if ("string" != typeof e || e.includes("-"));
                else if (P.indexOf(e) > -1 || /[A-Z]/.test(e)) return !0;
                return !1
            }
            var S = n(6816),
                A = n(406),
                T = n(8057);
            let createHtmlRenderState = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function copyRawValuesOnly(e, t, n) {
                for (let o in t)(0, A.i)(t[o]) || (0, S.j)(o, n) || (e[o] = t[o])
            }

            function useHTMLProps(e, t, n) {
                let o = {},
                    s = function(e, t, n) {
                        let o = e.style || {},
                            s = {};
                        return copyRawValuesOnly(s, o, e), Object.assign(s, function({
                            transformTemplate: e
                        }, t, n) {
                            return (0, a.useMemo)(() => {
                                let o = createHtmlRenderState();
                                return (0, T.r)(o, t, {
                                    enableHardwareAcceleration: !n
                                }, e), Object.assign({}, o.vars, o.style)
                            }, [t])
                        }(e, t, n)), e.transformValues ? e.transformValues(s) : s
                    }(e, t, n);
                return e.drag && !1 !== e.dragListener && (o.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = !0 === e.drag ? "none" : `pan-${"x"===e.drag?"y":"x"}`), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (o.tabIndex = 0), o.style = s, o
            }
            let k = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

            function isValidMotionProp(e) {
                return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || k.has(e)
            }
            let shouldForward = e => !isValidMotionProp(e);
            try {
                (o = require("@emotion/is-prop-valid").default) && (shouldForward = e => e.startsWith("on") ? !isValidMotionProp(e) : o(e))
            } catch (e) {}
            var L = n(5415);
            let createSvgRenderState = () => ({ ...createHtmlRenderState(),
                attrs: {}
            });
            var M = n(9854);

            function useSVGProps(e, t, n, o) {
                let s = (0, a.useMemo)(() => {
                    let n = createSvgRenderState();
                    return (0, L.i)(n, t, {
                        enableHardwareAcceleration: !1
                    }, (0, M.a)(o), e.transformTemplate), { ...n.attrs,
                        style: { ...n.style
                        }
                    }
                }, [t]);
                if (e.style) {
                    let t = {};
                    copyRawValuesOnly(t, e.style, e), s.style = { ...t,
                        ...s.style
                    }
                }
                return s
            }
            var V = n(8504),
                j = n(6832),
                R = n(2445),
                D = n(9432),
                O = n(6681),
                F = n(8715);

            function resolveMotionValue(e) {
                let t = (0, A.i)(e) ? e.get() : e;
                return (0, F.p)(t) ? t.toValue() : t
            }
            let makeUseVisualState = e => (t, n) => {
                let o = (0, a.useContext)(l),
                    s = (0, a.useContext)(u.O),
                    make = () => (function({
                        scrapeMotionValuesFromProps: e,
                        createRenderState: t,
                        onMount: n
                    }, o, a, s) {
                        let l = {
                            latestValues: function(e, t, n, o) {
                                let a = {},
                                    s = o(e, {});
                                for (let e in s) a[e] = resolveMotionValue(s[e]);
                                let {
                                    initial: l,
                                    animate: u
                                } = e, c = (0, g.G)(e), d = (0, g.M)(e);
                                t && d && !c && !1 !== e.inherit && (void 0 === l && (l = t.initial), void 0 === u && (u = t.animate));
                                let f = !!n && !1 === n.initial;
                                f = f || !1 === l;
                                let h = f ? u : l;
                                if (h && "boolean" != typeof h && !(0, R.H)(h)) {
                                    let t = Array.isArray(h) ? h : [h];
                                    t.forEach(t => {
                                        let n = (0, D.o)(e, t);
                                        if (!n) return;
                                        let {
                                            transitionEnd: o,
                                            transition: s,
                                            ...l
                                        } = n;
                                        for (let e in l) {
                                            let t = l[e];
                                            if (Array.isArray(t)) {
                                                let e = f ? t.length - 1 : 0;
                                                t = t[e]
                                            }
                                            null !== t && (a[e] = t)
                                        }
                                        for (let e in o) a[e] = o[e]
                                    })
                                }
                                return a
                            }(o, a, s, e),
                            renderState: t()
                        };
                        return n && (l.mount = e => n(o, e, l)), l
                    })(e, t, o, s);
                return n ? make() : (0, O.h)(make)
            };
            var B = n(2074);
            let W = {
                useVisualState: makeUseVisualState({
                    scrapeMotionValuesFromProps: j.U,
                    createRenderState: createSvgRenderState,
                    onMount: (e, t, {
                        renderState: n,
                        latestValues: o
                    }) => {
                        B.Wi.read(() => {
                            try {
                                n.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
                            } catch (e) {
                                n.dimensions = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                }
                            }
                        }), B.Wi.render(() => {
                            (0, L.i)(n, o, {
                                enableHardwareAcceleration: !1
                            }, (0, M.a)(t.tagName), e.transformTemplate), (0, V.K)(t, n)
                        })
                    }
                })
            };
            var U = n(189);
            let X = {
                useVisualState: makeUseVisualState({
                    scrapeMotionValuesFromProps: U.U,
                    createRenderState: createHtmlRenderState
                })
            };

            function addDomEvent(e, t, n, o = {
                passive: !0
            }) {
                return e.addEventListener(t, n, o), () => e.removeEventListener(t, n)
            }
            let isPrimaryPointer = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary;

            function extractEventInfo(e, t = "page") {
                return {
                    point: {
                        x: e[t + "X"],
                        y: e[t + "Y"]
                    }
                }
            }
            let addPointerInfo = e => t => isPrimaryPointer(t) && e(t, extractEventInfo(t));

            function addPointerEvent(e, t, n, o) {
                return addDomEvent(e, t, addPointerInfo(n), o)
            }
            var J = n(3624);

            function createLock(e) {
                let t = null;
                return () => null === t && (t = e, () => {
                    t = null
                })
            }
            let q = createLock("dragHorizontal"),
                Y = createLock("dragVertical");

            function getGlobalLock(e) {
                let t = !1;
                if ("y" === e) t = Y();
                else if ("x" === e) t = q();
                else {
                    let e = q(),
                        n = Y();
                    e && n ? t = () => {
                        e(), n()
                    } : (e && e(), n && n())
                }
                return t
            }

            function isDragActive() {
                let e = getGlobalLock(!0);
                return !e || (e(), !1)
            }
            let Feature = class Feature {
                constructor(e) {
                    this.isMounted = !1, this.node = e
                }
                update() {}
            };

            function addHoverEvent(e, t) {
                let n = "pointer" + (t ? "enter" : "leave"),
                    o = "onHover" + (t ? "Start" : "End");
                return addPointerEvent(e.current, n, (n, a) => {
                    if ("touch" === n.pointerType || isDragActive()) return;
                    let s = e.getProps();
                    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[o] && B.Wi.update(() => s[o](n, a))
                }, {
                    passive: !e.getProps()[o]
                })
            }
            let isNodeOrChild = (e, t) => !!t && (e === t || isNodeOrChild(e, t.parentElement));
            var Q = n(1662);

            function fireSyntheticPointerEvent(e, t) {
                if (!t) return;
                let n = new PointerEvent("pointer" + e);
                t(n, extractEventInfo(n))
            }
            let et = new WeakMap,
                er = new WeakMap,
                fireObserverCallback = e => {
                    let t = et.get(e.target);
                    t && t(e)
                },
                fireAllObserverCallbacks = e => {
                    e.forEach(fireObserverCallback)
                },
                en = {
                    some: 0,
                    all: 1
                };
            var ei = n(8488);

            function shallowCompare(e, t) {
                if (!Array.isArray(t)) return !1;
                let n = t.length;
                if (n !== e.length) return !1;
                for (let o = 0; o < n; o++)
                    if (t[o] !== e[o]) return !1;
                return !0
            }
            var eo = n(2248),
                ea = n(2963),
                es = n(2711);

            function animateVariant(e, t, n = {}) {
                let o = (0, eo.x)(e, t, n.custom),
                    {
                        transition: a = e.getDefaultTransition() || {}
                    } = o || {};
                n.transitionOverride && (a = n.transitionOverride);
                let s = o ? () => Promise.all((0, es.w)(e, o, n)) : () => Promise.resolve(),
                    l = e.variantChildren && e.variantChildren.size ? (o = 0) => {
                        let {
                            delayChildren: s = 0,
                            staggerChildren: l,
                            staggerDirection: u
                        } = a;
                        return function(e, t, n = 0, o = 0, a = 1, s) {
                            let l = [],
                                u = (e.variantChildren.size - 1) * o,
                                c = 1 === a ? (e = 0) => e * o : (e = 0) => u - e * o;
                            return Array.from(e.variantChildren).sort(sortByTreeOrder).forEach((e, o) => {
                                e.notify("AnimationStart", t), l.push(animateVariant(e, t, { ...s,
                                    delay: n + c(o)
                                }).then(() => e.notify("AnimationComplete", t)))
                            }), Promise.all(l)
                        }(e, t, s + o, l, u, n)
                    } : () => Promise.resolve(),
                    {
                        when: u
                    } = a;
                if (!u) return Promise.all([s(), l(n.delay)]); {
                    let [e, t] = "beforeChildren" === u ? [s, l] : [l, s];
                    return e().then(() => t())
                }
            }

            function sortByTreeOrder(e, t) {
                return e.sortNodePosition(t)
            }
            let el = [...ea.e].reverse(),
                eu = ea.e.length;

            function createTypeState(e = !1) {
                return {
                    isActive: e,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            let ec = 0;
            var ed = n(5487),
                ef = n(6917);
            let distance = (e, t) => Math.abs(e - t);
            let PanSession = class PanSession {
                constructor(e, t, {
                    transformPagePoint: n,
                    contextWindow: o,
                    dragSnapToOrigin: a = !1
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let e = getPanInfo(this.lastMoveEventInfo, this.history),
                                t = null !== this.startEvent,
                                n = function(e, t) {
                                    let n = distance(e.x, t.x),
                                        o = distance(e.y, t.y);
                                    return Math.sqrt(n ** 2 + o ** 2)
                                }(e.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!t && !n) return;
                            let {
                                point: o
                            } = e, {
                                timestamp: a
                            } = B.frameData;
                            this.history.push({ ...o,
                                timestamp: a
                            });
                            let {
                                onStart: s,
                                onMove: l
                            } = this.handlers;
                            t || (s && s(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), l && l(this.lastMoveEvent, e)
                        }, this.handlePointerMove = (e, t) => {
                            this.lastMoveEvent = e, this.lastMoveEventInfo = transformPoint(t, this.transformPagePoint), B.Wi.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (e, t) => {
                            this.end();
                            let {
                                onEnd: n,
                                onSessionEnd: o,
                                resumeAnimation: a
                            } = this.handlers;
                            if (this.dragSnapToOrigin && a && a(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let s = getPanInfo("pointercancel" === e.type ? this.lastMoveEventInfo : transformPoint(t, this.transformPagePoint), this.history);
                            this.startEvent && n && n(e, s), o && o(e, s)
                        }, !isPrimaryPointer(e)) return;
                    this.dragSnapToOrigin = a, this.handlers = t, this.transformPagePoint = n, this.contextWindow = o || window;
                    let s = extractEventInfo(e),
                        l = transformPoint(s, this.transformPagePoint),
                        {
                            point: u
                        } = l,
                        {
                            timestamp: c
                        } = B.frameData;
                    this.history = [{ ...u,
                        timestamp: c
                    }];
                    let {
                        onSessionStart: d
                    } = t;
                    d && d(e, getPanInfo(l, this.history)), this.removeListeners = (0, J.z)(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(e) {
                    this.handlers = e
                }
                end() {
                    this.removeListeners && this.removeListeners(), (0, B.Pn)(this.updatePoint)
                }
            };

            function transformPoint(e, t) {
                return t ? {
                    point: t(e.point)
                } : e
            }

            function subtractPoint(e, t) {
                return {
                    x: e.x - t.x,
                    y: e.y - t.y
                }
            }

            function getPanInfo({
                point: e
            }, t) {
                return {
                    point: e,
                    delta: subtractPoint(e, lastDevicePoint(t)),
                    offset: subtractPoint(e, t[0]),
                    velocity: function(e, t) {
                        if (e.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let n = e.length - 1,
                            o = null,
                            a = lastDevicePoint(e);
                        for (; n >= 0 && (o = e[n], !(a.timestamp - o.timestamp > (0, ef.w)(.1)));) n--;
                        if (!o) return {
                            x: 0,
                            y: 0
                        };
                        let s = (0, ef.X)(a.timestamp - o.timestamp);
                        if (0 === s) return {
                            x: 0,
                            y: 0
                        };
                        let l = {
                            x: (a.x - o.x) / s,
                            y: (a.y - o.y) / s
                        };
                        return l.x === 1 / 0 && (l.x = 0), l.y === 1 / 0 && (l.y = 0), l
                    }(t, 0)
                }
            }

            function lastDevicePoint(e) {
                return e[e.length - 1]
            }
            var eh = n(3032),
                ep = n(22);

            function calcLength(e) {
                return e.max - e.min
            }

            function isNear(e, t = 0, n = .01) {
                return Math.abs(e - t) <= n
            }

            function calcAxisDelta(e, t, n, o = .5) {
                e.origin = o, e.originPoint = (0, ep.C)(t.min, t.max, e.origin), e.scale = calcLength(n) / calcLength(t), (isNear(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = (0, ep.C)(n.min, n.max, e.origin) - e.originPoint, (isNear(e.translate) || isNaN(e.translate)) && (e.translate = 0)
            }

            function calcBoxDelta(e, t, n, o) {
                calcAxisDelta(e.x, t.x, n.x, o ? o.originX : void 0), calcAxisDelta(e.y, t.y, n.y, o ? o.originY : void 0)
            }

            function calcRelativeAxis(e, t, n) {
                e.min = n.min + t.min, e.max = e.min + calcLength(t)
            }

            function calcRelativeAxisPosition(e, t, n) {
                e.min = t.min - n.min, e.max = e.min + calcLength(t)
            }

            function calcRelativePosition(e, t, n) {
                calcRelativeAxisPosition(e.x, t.x, n.x), calcRelativeAxisPosition(e.y, t.y, n.y)
            }
            var em = n(4169);

            function calcRelativeAxisConstraints(e, t, n) {
                return {
                    min: void 0 !== t ? e.min + t : void 0,
                    max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
                }
            }

            function calcViewportAxisConstraints(e, t) {
                let n = t.min - e.min,
                    o = t.max - e.max;
                return t.max - t.min < e.max - e.min && ([n, o] = [o, n]), {
                    min: n,
                    max: o
                }
            }

            function resolveAxisElastic(e, t, n) {
                return {
                    min: resolvePointElastic(e, t),
                    max: resolvePointElastic(e, n)
                }
            }

            function resolvePointElastic(e, t) {
                return "number" == typeof e ? e : e[t] || 0
            }
            var eg = n(1512);

            function eachAxis(e) {
                return [e("x"), e("y")]
            }
            var ev = n(6460),
                ey = n(6117),
                eb = n(6190),
                ex = n(177);
            let getContextWindow = ({
                    current: e
                }) => e ? e.ownerDocument.defaultView : null,
                ew = new WeakMap;
            let VisualElementDragControls = class VisualElementDragControls {
                constructor(e) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, eg.dO)(), this.visualElement = e
                }
                start(e, {
                    snapToCursor: t = !1
                } = {}) {
                    let {
                        presenceContext: n
                    } = this.visualElement;
                    if (n && !1 === n.isPresent) return;
                    let {
                        dragSnapToOrigin: o
                    } = this.getProps();
                    this.panSession = new PanSession(e, {
                        onSessionStart: e => {
                            let {
                                dragSnapToOrigin: n
                            } = this.getProps();
                            n ? this.pauseAnimation() : this.stopAnimation(), t && this.snapToCursor(extractEventInfo(e, "page").point)
                        },
                        onStart: (e, t) => {
                            let {
                                drag: n,
                                dragPropagation: o,
                                onDragStart: a
                            } = this.getProps();
                            if (n && !o && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = getGlobalLock(n), !this.openGlobalLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), eachAxis(e => {
                                let t = this.getAxisMotionValue(e).get() || 0;
                                if (eb.aQ.test(t)) {
                                    let {
                                        projection: n
                                    } = this.visualElement;
                                    if (n && n.layout) {
                                        let o = n.layout.layoutBox[e];
                                        if (o) {
                                            let e = calcLength(o);
                                            t = e * (parseFloat(t) / 100)
                                        }
                                    }
                                }
                                this.originPoint[e] = t
                            }), a && B.Wi.update(() => a(e, t), !1, !0);
                            let {
                                animationState: s
                            } = this.visualElement;
                            s && s.setActive("whileDrag", !0)
                        },
                        onMove: (e, t) => {
                            let {
                                dragPropagation: n,
                                dragDirectionLock: o,
                                onDirectionLock: a,
                                onDrag: s
                            } = this.getProps();
                            if (!n && !this.openGlobalLock) return;
                            let {
                                offset: l
                            } = t;
                            if (o && null === this.currentDirection) {
                                this.currentDirection = function(e, t = 10) {
                                    let n = null;
                                    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
                                }(l), null !== this.currentDirection && a && a(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", t.point, l), this.updateAxis("y", t.point, l), this.visualElement.render(), s && s(e, t)
                        },
                        onSessionEnd: (e, t) => this.stop(e, t),
                        resumeAnimation: () => eachAxis(e => {
                            var t;
                            return "paused" === this.getAnimationState(e) && (null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.play())
                        })
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint(),
                        dragSnapToOrigin: o,
                        contextWindow: getContextWindow(this.visualElement)
                    })
                }
                stop(e, t) {
                    let n = this.isDragging;
                    if (this.cancel(), !n) return;
                    let {
                        velocity: o
                    } = t;
                    this.startAnimation(o);
                    let {
                        onDragEnd: a
                    } = this.getProps();
                    a && B.Wi.update(() => a(e, t))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: e,
                        animationState: t
                    } = this.visualElement;
                    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: n
                    } = this.getProps();
                    !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), t && t.setActive("whileDrag", !1)
                }
                updateAxis(e, t, n) {
                    let {
                        drag: o
                    } = this.getProps();
                    if (!n || !shouldDrag(e, o, this.currentDirection)) return;
                    let a = this.getAxisMotionValue(e),
                        s = this.originPoint[e] + n[e];
                    this.constraints && this.constraints[e] && (s = function(e, {
                        min: t,
                        max: n
                    }, o) {
                        return void 0 !== t && e < t ? e = o ? (0, ep.C)(t, e, o.min) : Math.max(e, t) : void 0 !== n && e > n && (e = o ? (0, ep.C)(n, e, o.max) : Math.min(e, n)), e
                    }(s, this.constraints[e], this.elastic[e])), a.set(s)
                }
                resolveConstraints() {
                    var e;
                    let {
                        dragConstraints: t,
                        dragElastic: n
                    } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout, a = this.constraints;
                    t && (0, h.I)(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && o ? this.constraints = function(e, {
                        top: t,
                        left: n,
                        bottom: o,
                        right: a
                    }) {
                        return {
                            x: calcRelativeAxisConstraints(e.x, n, a),
                            y: calcRelativeAxisConstraints(e.y, t, o)
                        }
                    }(o.layoutBox, t) : this.constraints = !1, this.elastic = function(e = .35) {
                        return !1 === e ? e = 0 : !0 === e && (e = .35), {
                            x: resolveAxisElastic(e, "left", "right"),
                            y: resolveAxisElastic(e, "top", "bottom")
                        }
                    }(n), a !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && eachAxis(e => {
                        this.getAxisMotionValue(e) && (this.constraints[e] = function(e, t) {
                            let n = {};
                            return void 0 !== t.min && (n.min = t.min - e.min), void 0 !== t.max && (n.max = t.max - e.min), n
                        }(o.layoutBox[e], this.constraints[e]))
                    })
                }
                resolveRefConstraints() {
                    var e;
                    let {
                        dragConstraints: t,
                        onMeasureDragConstraints: n
                    } = this.getProps();
                    if (!t || !(0, h.I)(t)) return !1;
                    let o = t.current;
                    (0, ed.k)(null !== o, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: a
                    } = this.visualElement;
                    if (!a || !a.layout) return !1;
                    let s = (0, ev.z)(o, a.root, this.visualElement.getTransformPagePoint()),
                        l = {
                            x: calcViewportAxisConstraints((e = a.layout.layoutBox).x, s.x),
                            y: calcViewportAxisConstraints(e.y, s.y)
                        };
                    if (n) {
                        let e = n((0, ey.z2)(l));
                        this.hasMutatedConstraints = !!e, e && (l = (0, ey.i8)(e))
                    }
                    return l
                }
                startAnimation(e) {
                    let {
                        drag: t,
                        dragMomentum: n,
                        dragElastic: o,
                        dragTransition: a,
                        dragSnapToOrigin: s,
                        onDragTransitionEnd: l
                    } = this.getProps(), u = this.constraints || {}, c = eachAxis(l => {
                        if (!shouldDrag(l, t, this.currentDirection)) return;
                        let c = u && u[l] || {};
                        s && (c = {
                            min: 0,
                            max: 0
                        });
                        let d = {
                            type: "inertia",
                            velocity: n ? e[l] : 0,
                            bounceStiffness: o ? 200 : 1e6,
                            bounceDamping: o ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...a,
                            ...c
                        };
                        return this.startAxisValueAnimation(l, d)
                    });
                    return Promise.all(c).then(l)
                }
                startAxisValueAnimation(e, t) {
                    let n = this.getAxisMotionValue(e);
                    return n.start((0, ex.v)(e, n, 0, t))
                }
                stopAnimation() {
                    eachAxis(e => this.getAxisMotionValue(e).stop())
                }
                pauseAnimation() {
                    eachAxis(e => {
                        var t;
                        return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.pause()
                    })
                }
                getAnimationState(e) {
                    var t;
                    return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.state
                }
                getAxisMotionValue(e) {
                    let t = "_drag" + e.toUpperCase(),
                        n = this.visualElement.getProps(),
                        o = n[t];
                    return o || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
                }
                snapToCursor(e) {
                    eachAxis(t => {
                        let {
                            drag: n
                        } = this.getProps();
                        if (!shouldDrag(t, n, this.currentDirection)) return;
                        let {
                            projection: o
                        } = this.visualElement, a = this.getAxisMotionValue(t);
                        if (o && o.layout) {
                            let {
                                min: n,
                                max: s
                            } = o.layout.layoutBox[t];
                            a.set(e[t] - (0, ep.C)(n, s, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: e,
                        dragConstraints: t
                    } = this.getProps(), {
                        projection: n
                    } = this.visualElement;
                    if (!(0, h.I)(t) || !n || !this.constraints) return;
                    this.stopAnimation();
                    let o = {
                        x: 0,
                        y: 0
                    };
                    eachAxis(e => {
                        let t = this.getAxisMotionValue(e);
                        if (t) {
                            let n = t.get();
                            o[e] = function(e, t) {
                                let n = .5,
                                    o = calcLength(e),
                                    a = calcLength(t);
                                return a > o ? n = (0, eh.Y)(t.min, t.max - o, e.min) : o > a && (n = (0, eh.Y)(e.min, e.max - a, t.min)), (0, em.u)(0, 1, n)
                            }({
                                min: n,
                                max: n
                            }, this.constraints[e])
                        }
                    });
                    let {
                        transformTemplate: a
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = a ? a({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), eachAxis(t => {
                        if (!shouldDrag(t, e, null)) return;
                        let n = this.getAxisMotionValue(t),
                            {
                                min: a,
                                max: s
                            } = this.constraints[t];
                        n.set((0, ep.C)(a, s, o[t]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    ew.set(this.visualElement, this);
                    let e = this.visualElement.current,
                        t = addPointerEvent(e, "pointerdown", e => {
                            let {
                                drag: t,
                                dragListener: n = !0
                            } = this.getProps();
                            t && n && this.start(e)
                        }),
                        measureDragConstraints = () => {
                            let {
                                dragConstraints: e
                            } = this.getProps();
                            (0, h.I)(e) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: n
                        } = this.visualElement,
                        o = n.addEventListener("measure", measureDragConstraints);
                    n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), measureDragConstraints();
                    let a = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints()),
                        s = n.addEventListener("didUpdate", ({
                            delta: e,
                            hasLayoutChanged: t
                        }) => {
                            this.isDragging && t && (eachAxis(t => {
                                let n = this.getAxisMotionValue(t);
                                n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        a(), t(), o(), s && s()
                    }
                }
                getProps() {
                    let e = this.visualElement.getProps(),
                        {
                            drag: t = !1,
                            dragDirectionLock: n = !1,
                            dragPropagation: o = !1,
                            dragConstraints: a = !1,
                            dragElastic: s = .35,
                            dragMomentum: l = !0
                        } = e;
                    return { ...e,
                        drag: t,
                        dragDirectionLock: n,
                        dragPropagation: o,
                        dragConstraints: a,
                        dragElastic: s,
                        dragMomentum: l
                    }
                }
            };

            function shouldDrag(e, t, n) {
                return (!0 === t || t === e) && (null === n || n === e)
            }
            let asyncHandler = e => (t, n) => {
                    e && B.Wi.update(() => e(t, n))
                },
                e$ = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                };

            function pixelsToPercent(e, t) {
                return t.max === t.min ? 0 : e / (t.max - t.min) * 100
            }
            let eC = {
                correct: (e, t) => {
                    if (!t.target) return e;
                    if ("string" == typeof e) {
                        if (!eb.px.test(e)) return e;
                        e = parseFloat(e)
                    }
                    let n = pixelsToPercent(e, t.target.x),
                        o = pixelsToPercent(e, t.target.y);
                    return `${n}% ${o}%`
                }
            };
            var eE = n(1550),
                eP = n(4561);
            let MeasureLayoutWithContext = class MeasureLayoutWithContext extends a.Component {
                componentDidMount() {
                    let {
                        visualElement: e,
                        layoutGroup: t,
                        switchLayoutGroup: n,
                        layoutId: o
                    } = this.props, {
                        projection: a
                    } = e;
                    (0, eP.B)(eS), a && (t.group && t.group.add(a), n && n.register && o && n.register(a), a.root.didUpdate(), a.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), a.setOptions({ ...a.options,
                        onExitComplete: () => this.safeToRemove()
                    })), e$.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(e) {
                    let {
                        layoutDependency: t,
                        visualElement: n,
                        drag: o,
                        isPresent: a
                    } = this.props, s = n.projection;
                    return s && (s.isPresent = a, o || e.layoutDependency !== t || void 0 === t ? s.willUpdate() : this.safeToRemove(), e.isPresent === a || (a ? s.promote() : s.relegate() || B.Wi.postRender(() => {
                        let e = s.getStack();
                        e && e.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: e
                    } = this.props.visualElement;
                    e && (e.root.didUpdate(), queueMicrotask(() => {
                        !e.currentAnimation && e.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: e,
                        layoutGroup: t,
                        switchLayoutGroup: n
                    } = this.props, {
                        projection: o
                    } = e;
                    o && (o.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(o), n && n.deregister && n.deregister(o))
                }
                safeToRemove() {
                    let {
                        safeToRemove: e
                    } = this.props;
                    e && e()
                }
                render() {
                    return null
                }
            };

            function MeasureLayout(e) {
                let [t, n] = function() {
                    let e = (0, a.useContext)(u.O);
                    if (null === e) return [!0, null];
                    let {
                        isPresent: t,
                        onExitComplete: n,
                        register: o
                    } = e, s = (0, a.useId)();
                    return (0, a.useEffect)(() => o(s), []), !t && n ? [!1, () => n && n(s)] : [!0]
                }(), o = (0, a.useContext)($.p);
                return a.createElement(MeasureLayoutWithContext, { ...e,
                    layoutGroup: o,
                    switchLayoutGroup: (0, a.useContext)(C),
                    isPresent: t,
                    safeToRemove: n
                })
            }
            let eS = {
                borderRadius: { ...eC,
                    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                },
                borderTopLeftRadius: eC,
                borderTopRightRadius: eC,
                borderBottomLeftRadius: eC,
                borderBottomRightRadius: eC,
                boxShadow: {
                    correct: (e, {
                        treeScale: t,
                        projectionDelta: n
                    }) => {
                        let o = eE.P.parse(e);
                        if (o.length > 5) return e;
                        let a = eE.P.createTransformer(e),
                            s = "number" != typeof o[0] ? 1 : 0,
                            l = n.x.scale * t.x,
                            u = n.y.scale * t.y;
                        o[0 + s] /= l, o[1 + s] /= u;
                        let c = (0, ep.C)(l, u, .5);
                        return "number" == typeof o[2 + s] && (o[2 + s] /= c), "number" == typeof o[3 + s] && (o[3 + s] /= c), a(o)
                    }
                }
            };
            var eA = n(1560),
                eT = n(7255);
            let ek = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                eL = ek.length,
                asNumber = e => "string" == typeof e ? parseFloat(e) : e,
                isPx = e => "number" == typeof e || eb.px.test(e);

            function getRadius(e, t) {
                return void 0 !== e[t] ? e[t] : e.borderRadius
            }
            let eM = compress(0, .5, eT.Bn),
                eV = compress(.5, .95, Q.Z);

            function compress(e, t, n) {
                return o => o < e ? 0 : o > t ? 1 : n((0, eh.Y)(e, t, o))
            }

            function copyAxisInto(e, t) {
                e.min = t.min, e.max = t.max
            }

            function copyBoxInto(e, t) {
                copyAxisInto(e.x, t.x), copyAxisInto(e.y, t.y)
            }
            var ej = n(6e3);

            function removePointDelta(e, t, n, o, a) {
                return e -= t, e = (0, ej.q2)(e, 1 / n, o), void 0 !== a && (e = (0, ej.q2)(e, 1 / a, o)), e
            }

            function removeAxisTransforms(e, t, [n, o, a], s, l) {
                ! function(e, t = 0, n = 1, o = .5, a, s = e, l = e) {
                    if (eb.aQ.test(t)) {
                        t = parseFloat(t);
                        let e = (0, ep.C)(l.min, l.max, t / 100);
                        t = e - l.min
                    }
                    if ("number" != typeof t) return;
                    let u = (0, ep.C)(s.min, s.max, o);
                    e === s && (u -= t), e.min = removePointDelta(e.min, t, n, u, a), e.max = removePointDelta(e.max, t, n, u, a)
                }(e, t[n], t[o], t[a], t.scale, s, l)
            }
            let eR = ["x", "scaleX", "originX"],
                eD = ["y", "scaleY", "originY"];

            function removeBoxTransforms(e, t, n, o) {
                removeAxisTransforms(e.x, t, eR, n ? n.x : void 0, o ? o.x : void 0), removeAxisTransforms(e.y, t, eD, n ? n.y : void 0, o ? o.y : void 0)
            }
            var eO = n(1056);

            function isAxisDeltaZero(e) {
                return 0 === e.translate && 1 === e.scale
            }

            function isDeltaZero(e) {
                return isAxisDeltaZero(e.x) && isAxisDeltaZero(e.y)
            }

            function boxEqualsRounded(e, t) {
                return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max)
            }

            function aspectRatio(e) {
                return calcLength(e.x) / calcLength(e.y)
            }
            var e_ = n(10);
            let NodeStack = class NodeStack {
                constructor() {
                    this.members = []
                }
                add(e) {
                    (0, e_.y4)(this.members, e), e.scheduleRender()
                }
                remove(e) {
                    if ((0, e_.cl)(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
                        let e = this.members[this.members.length - 1];
                        e && this.promote(e)
                    }
                }
                relegate(e) {
                    let t;
                    let n = this.members.findIndex(t => e === t);
                    if (0 === n) return !1;
                    for (let e = n; e >= 0; e--) {
                        let n = this.members[e];
                        if (!1 !== n.isPresent) {
                            t = n;
                            break
                        }
                    }
                    return !!t && (this.promote(t), !0)
                }
                promote(e, t) {
                    let n = this.lead;
                    if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
                        n.instance && n.scheduleRender(), e.scheduleRender(), e.resumeFrom = n, t && (e.resumeFrom.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
                        let {
                            crossfade: o
                        } = e.options;
                        !1 === o && n.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(e => {
                        let {
                            options: t,
                            resumingFrom: n
                        } = e;
                        t.onExitComplete && t.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(e => {
                        e.instance && e.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            };

            function buildProjectionTransform(e, t, n) {
                let o = "",
                    a = e.x.translate / t.x,
                    s = e.y.translate / t.y;
                if ((a || s) && (o = `translate3d(${a}px, ${s}px, 0) `), (1 !== t.x || 1 !== t.y) && (o += `scale(${1/t.x}, ${1/t.y}) `), n) {
                    let {
                        rotate: e,
                        rotateX: t,
                        rotateY: a
                    } = n;
                    e && (o += `rotate(${e}deg) `), t && (o += `rotateX(${t}deg) `), a && (o += `rotateY(${a}deg) `)
                }
                let l = e.x.scale * t.x,
                    u = e.y.scale * t.y;
                return (1 !== l || 1 !== u) && (o += `scale(${l}, ${u})`), o || "none"
            }
            var eF = n(9527);
            let compareByDepth = (e, t) => e.depth - t.depth;
            let FlatTree = class FlatTree {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(e) {
                    (0, e_.y4)(this.children, e), this.isDirty = !0
                }
                remove(e) {
                    (0, e_.cl)(this.children, e), this.isDirty = !0
                }
                forEach(e) {
                    this.isDirty && this.children.sort(compareByDepth), this.isDirty = !1, this.children.forEach(e)
                }
            };
            var eI = n(5194),
                eN = n(1059);
            let eB = ["", "X", "Y", "Z"],
                eH = {
                    visibility: "hidden"
                },
                eW = 0,
                ez = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                };

            function createProjectionNode({
                attachResizeListener: e,
                defaultParent: t,
                measureScroll: n,
                checkIsScrollRoot: o,
                resetTransform: a
            }) {
                return class {
                    constructor(e = {}, n = null == t ? void 0 : t()) {
                        this.id = eW++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.projectionUpdateScheduled = !1, ez.totalNodes = ez.resolvedTargetDeltas = ez.recalculatedProjection = 0, this.nodes.forEach(propagateDirtyNodes), this.nodes.forEach(resolveTargetDelta), this.nodes.forEach(calcProjection), this.nodes.forEach(cleanDirtyNodes), window.MotionDebug && window.MotionDebug.record(ez)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
                        for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new FlatTree)
                    }
                    addEventListener(e, t) {
                        return this.eventHandlers.has(e) || this.eventHandlers.set(e, new eA.L), this.eventHandlers.get(e).add(t)
                    }
                    notifyListeners(e, ...t) {
                        let n = this.eventHandlers.get(e);
                        n && n.notify(...t)
                    }
                    hasListeners(e) {
                        return this.eventHandlers.has(e)
                    }
                    mount(t, n = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = (0, eI.v)(t), this.instance = t;
                        let {
                            layoutId: o,
                            layout: a,
                            visualElement: s
                        } = this.options;
                        if (s && !s.current && s.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), n && (a || o) && (this.isLayoutDirty = !0), e) {
                            let n;
                            let resizeUnblockUpdate = () => this.root.updateBlockedByResize = !1;
                            e(t, () => {
                                this.root.updateBlockedByResize = !0, n && n(), n = function(e, t) {
                                    let n = performance.now(),
                                        checkElapsed = ({
                                            timestamp: o
                                        }) => {
                                            let a = o - n;
                                            a >= t && ((0, B.Pn)(checkElapsed), e(a - t))
                                        };
                                    return B.Wi.read(checkElapsed, !0), () => (0, B.Pn)(checkElapsed)
                                }(resizeUnblockUpdate, 250), e$.hasAnimatedSinceResize && (e$.hasAnimatedSinceResize = !1, this.nodes.forEach(finishAnimation))
                            })
                        }
                        o && this.root.registerSharedNode(o, this), !1 !== this.options.animate && s && (o || a) && this.addEventListener("didUpdate", ({
                            delta: e,
                            hasLayoutChanged: t,
                            hasRelativeTargetChanged: n,
                            layout: o
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let a = this.options.transition || s.getDefaultTransition() || eU,
                                {
                                    onLayoutAnimationStart: l,
                                    onLayoutAnimationComplete: u
                                } = s.getProps(),
                                c = !this.targetLayout || !boxEqualsRounded(this.targetLayout, o) || n,
                                d = !t && n;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || d || t && (c || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(e, d);
                                let t = { ...(0, eO.e)(a, "layout"),
                                    onPlay: l,
                                    onComplete: u
                                };
                                (s.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t)
                            } else t || finishAnimation(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = o
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let e = this.getStack();
                        e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, B.Pn)(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(resetRotation), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: e
                        } = this.options;
                        return e && e.getProps().transformTemplate
                    }
                    willUpdate(e = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let e = 0; e < this.path.length; e++) {
                            let t = this.path[e];
                            t.shouldResetTransform = !0, t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1)
                        }
                        let {
                            layoutId: t,
                            layout: n
                        } = this.options;
                        if (void 0 === t && !n) return;
                        let o = this.getTransformTemplate();
                        this.prevTransformTemplateValue = o ? o(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate")
                    }
                    update() {
                        this.updateScheduled = !1;
                        let e = this.isUpdateBlocked();
                        if (e) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(clearMeasurements);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(clearIsLayoutDirty), this.isUpdating = !1, this.nodes.forEach(resetTransformStyle), this.nodes.forEach(updateLayout), this.nodes.forEach(notifyLayoutUpdate), this.clearAllSnapshots();
                        let t = performance.now();
                        B.frameData.delta = (0, em.u)(0, 1e3 / 60, t - B.frameData.timestamp), B.frameData.timestamp = t, B.frameData.isProcessing = !0, B.S6.update.process(B.frameData), B.S6.preRender.process(B.frameData), B.S6.render.process(B.frameData), B.frameData.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(clearSnapshot), this.sharedNodes.forEach(removeLeadSnapshots)
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, B.Wi.preRender(this.updateProjection, !1, !0))
                    }
                    scheduleCheckAfterUnmount() {
                        B.Wi.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let e = 0; e < this.path.length; e++) {
                                let t = this.path[e];
                                t.updateScroll()
                            }
                        let e = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = (0, eg.dO)(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: t
                        } = this.options;
                        t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0)
                    }
                    updateScroll(e = "measure") {
                        let t = !!(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && (this.scroll = {
                            animationId: this.root.animationId,
                            phase: e,
                            isRoot: o(this.instance),
                            offset: n(this.instance)
                        })
                    }
                    resetTransform() {
                        if (!a) return;
                        let e = this.isLayoutDirty || this.shouldResetTransform,
                            t = this.projectionDelta && !isDeltaZero(this.projectionDelta),
                            n = this.getTransformTemplate(),
                            o = n ? n(this.latestValues, "") : void 0,
                            s = o !== this.prevTransformTemplateValue;
                        e && (t || (0, eF.ud)(this.latestValues) || s) && (a(this.instance, o), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(e = !0) {
                        var t;
                        let n = this.measurePageBox(),
                            o = this.removeElementScroll(n);
                        return e && (o = this.removeTransform(o)), roundAxis((t = o).x), roundAxis(t.y), {
                            animationId: this.root.animationId,
                            measuredBox: n,
                            layoutBox: o,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e) return (0, eg.dO)();
                        let t = e.measureViewportBox(),
                            {
                                scroll: n
                            } = this.root;
                        return n && ((0, ej.am)(t.x, n.offset.x), (0, ej.am)(t.y, n.offset.y)), t
                    }
                    removeElementScroll(e) {
                        let t = (0, eg.dO)();
                        copyBoxInto(t, e);
                        for (let n = 0; n < this.path.length; n++) {
                            let o = this.path[n],
                                {
                                    scroll: a,
                                    options: s
                                } = o;
                            if (o !== this.root && a && s.layoutScroll) {
                                if (a.isRoot) {
                                    copyBoxInto(t, e);
                                    let {
                                        scroll: n
                                    } = this.root;
                                    n && ((0, ej.am)(t.x, -n.offset.x), (0, ej.am)(t.y, -n.offset.y))
                                }(0, ej.am)(t.x, a.offset.x), (0, ej.am)(t.y, a.offset.y)
                            }
                        }
                        return t
                    }
                    applyTransform(e, t = !1) {
                        let n = (0, eg.dO)();
                        copyBoxInto(n, e);
                        for (let e = 0; e < this.path.length; e++) {
                            let o = this.path[e];
                            !t && o.options.layoutScroll && o.scroll && o !== o.root && (0, ej.D2)(n, {
                                x: -o.scroll.offset.x,
                                y: -o.scroll.offset.y
                            }), (0, eF.ud)(o.latestValues) && (0, ej.D2)(n, o.latestValues)
                        }
                        return (0, eF.ud)(this.latestValues) && (0, ej.D2)(n, this.latestValues), n
                    }
                    removeTransform(e) {
                        let t = (0, eg.dO)();
                        copyBoxInto(t, e);
                        for (let e = 0; e < this.path.length; e++) {
                            let n = this.path[e];
                            if (!n.instance || !(0, eF.ud)(n.latestValues)) continue;
                            (0, eF.Lj)(n.latestValues) && n.updateSnapshot();
                            let o = (0, eg.dO)(),
                                a = n.measurePageBox();
                            copyBoxInto(o, a), removeBoxTransforms(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, o)
                        }
                        return (0, eF.ud)(this.latestValues) && removeBoxTransforms(t, this.latestValues), t
                    }
                    setTargetDelta(e) {
                        this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(e) {
                        this.options = { ...this.options,
                            ...e,
                            crossfade: void 0 === e.crossfade || e.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== B.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(e = !1) {
                        var t, n, o, a;
                        let s = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                        let l = !!this.resumingFrom || this !== s,
                            u = !(e || l && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty) || this.attemptToResolveRelativeTarget);
                        if (u) return;
                        let {
                            layout: c,
                            layoutId: d
                        } = this.options;
                        if (this.layout && (c || d)) {
                            if (this.resolvedRelativeTargetAt = B.frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let e = this.getClosestProjectingParent();
                                e && e.layout && 1 !== this.animationProgress ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, eg.dO)(), this.relativeTargetOrigin = (0, eg.dO)(), calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), copyBoxInto(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = (0, eg.dO)(), this.targetWithTransforms = (0, eg.dO)()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), n = this.target, o = this.relativeTarget, a = this.relativeParent.target, calcRelativeAxis(n.x, o.x, a.x), calcRelativeAxis(n.y, o.y, a.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : copyBoxInto(this.target, this.layout.layoutBox), (0, ej.o2)(this.target, this.targetDelta)) : copyBoxInto(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let e = this.getClosestProjectingParent();
                                    e && !!e.resumingFrom == !!this.resumingFrom && !e.options.layoutScroll && e.target && 1 !== this.animationProgress ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, eg.dO)(), this.relativeTargetOrigin = (0, eg.dO)(), calcRelativePosition(this.relativeTargetOrigin, this.target, e.target), copyBoxInto(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                ez.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || (0, eF.Lj)(this.parent.latestValues) || (0, eF.D_)(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var e;
                        let t = this.getLead(),
                            n = !!this.resumingFrom || this !== t,
                            o = !0;
                        if ((this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty)) && (o = !1), n && (this.isSharedProjectionDirty || this.isTransformDirty) && (o = !1), this.resolvedRelativeTargetAt === B.frameData.timestamp && (o = !1), o) return;
                        let {
                            layout: a,
                            layoutId: s
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(a || s)) return;
                        copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
                        let l = this.treeScale.x,
                            u = this.treeScale.y;
                        (0, ej.YY)(this.layoutCorrected, this.treeScale, this.path, n), t.layout && !t.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (t.target = t.layout.layoutBox);
                        let {
                            target: c
                        } = t;
                        if (!c) {
                            this.projectionTransform && (this.projectionDelta = (0, eg.wc)(), this.projectionTransform = "none", this.scheduleRender());
                            return
                        }
                        this.projectionDelta || (this.projectionDelta = (0, eg.wc)(), this.projectionDeltaWithTransform = (0, eg.wc)());
                        let d = this.projectionTransform;
                        calcBoxDelta(this.projectionDelta, this.layoutCorrected, c, this.latestValues), this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale), (this.projectionTransform !== d || this.treeScale.x !== l || this.treeScale.y !== u) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", c)), ez.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(e = !0) {
                        if (this.options.scheduleRender && this.options.scheduleRender(), e) {
                            let e = this.getStack();
                            e && e.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(e, t = !1) {
                        let n;
                        let o = this.snapshot,
                            a = o ? o.latestValues : {},
                            s = { ...this.latestValues
                            },
                            l = (0, eg.wc)();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
                        let u = (0, eg.dO)(),
                            c = o ? o.source : void 0,
                            d = this.layout ? this.layout.source : void 0,
                            f = c !== d,
                            h = this.getStack(),
                            m = !h || h.members.length <= 1,
                            g = !!(f && !m && !0 === this.options.crossfade && !this.path.some(hasOpacityCrossfade));
                        this.animationProgress = 0, this.mixTargetDelta = t => {
                            let o = t / 1e3;
                            if (mixAxisDelta(l.x, e.x, o), mixAxisDelta(l.y, e.y, o), this.setTargetDelta(l), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var c, d, h, b;
                                calcRelativePosition(u, this.layout.layoutBox, this.relativeParent.layout.layoutBox), h = this.relativeTarget, b = this.relativeTargetOrigin, mixAxis(h.x, b.x, u.x, o), mixAxis(h.y, b.y, u.y, o), n && (c = this.relativeTarget, d = n, c.x.min === d.x.min && c.x.max === d.x.max && c.y.min === d.y.min && c.y.max === d.y.max) && (this.isProjectionDirty = !1), n || (n = (0, eg.dO)()), copyBoxInto(n, this.relativeTarget)
                            }
                            f && (this.animationValues = s, function(e, t, n, o, a, s) {
                                a ? (e.opacity = (0, ep.C)(0, void 0 !== n.opacity ? n.opacity : 1, eM(o)), e.opacityExit = (0, ep.C)(void 0 !== t.opacity ? t.opacity : 1, 0, eV(o))) : s && (e.opacity = (0, ep.C)(void 0 !== t.opacity ? t.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, o));
                                for (let a = 0; a < eL; a++) {
                                    let s = `border${ek[a]}Radius`,
                                        l = getRadius(t, s),
                                        u = getRadius(n, s);
                                    if (void 0 === l && void 0 === u) continue;
                                    l || (l = 0), u || (u = 0);
                                    let c = 0 === l || 0 === u || isPx(l) === isPx(u);
                                    c ? (e[s] = Math.max((0, ep.C)(asNumber(l), asNumber(u), o), 0), (eb.aQ.test(u) || eb.aQ.test(l)) && (e[s] += "%")) : e[s] = u
                                }(t.rotate || n.rotate) && (e.rotate = (0, ep.C)(t.rotate || 0, n.rotate || 0, o))
                            }(s, a, this.latestValues, o, g, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = o
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(e) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, B.Pn)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = B.Wi.update(() => {
                            e$.hasAnimatedSinceResize = !0, this.currentAnimation = (0, eN.D)(0, 1e3, { ...e,
                                onUpdate: t => {
                                    this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t)
                                },
                                onComplete: () => {
                                    e.onComplete && e.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let e = this.getStack();
                        e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let e = this.getLead(),
                            {
                                targetWithTransforms: t,
                                target: n,
                                layout: o,
                                latestValues: a
                            } = e;
                        if (t && n && o) {
                            if (this !== e && this.layout && o && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, o.layoutBox)) {
                                n = this.target || (0, eg.dO)();
                                let t = calcLength(this.layout.layoutBox.x);
                                n.x.min = e.target.x.min, n.x.max = n.x.min + t;
                                let o = calcLength(this.layout.layoutBox.y);
                                n.y.min = e.target.y.min, n.y.max = n.y.min + o
                            }
                            copyBoxInto(t, n), (0, ej.D2)(t, a), calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, t, a)
                        }
                    }
                    registerSharedNode(e, t) {
                        this.sharedNodes.has(e) || this.sharedNodes.set(e, new NodeStack);
                        let n = this.sharedNodes.get(e);
                        n.add(t);
                        let o = t.options.initialPromotionConfig;
                        t.promote({
                            transition: o ? o.transition : void 0,
                            preserveFollowOpacity: o && o.shouldPreserveFollowOpacity ? o.shouldPreserveFollowOpacity(t) : void 0
                        })
                    }
                    isLead() {
                        let e = this.getStack();
                        return !e || e.lead === this
                    }
                    getLead() {
                        var e;
                        let {
                            layoutId: t
                        } = this.options;
                        return t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
                    }
                    getPrevLead() {
                        var e;
                        let {
                            layoutId: t
                        } = this.options;
                        return t ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: e
                        } = this.options;
                        if (e) return this.root.sharedNodes.get(e)
                    }
                    promote({
                        needsReset: e,
                        transition: t,
                        preserveFollowOpacity: n
                    } = {}) {
                        let o = this.getStack();
                        o && o.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({
                            transition: t
                        })
                    }
                    relegate() {
                        let e = this.getStack();
                        return !!e && e.relegate(this)
                    }
                    resetRotation() {
                        let {
                            visualElement: e
                        } = this.options;
                        if (!e) return;
                        let t = !1,
                            {
                                latestValues: n
                            } = e;
                        if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (t = !0), !t) return;
                        let o = {};
                        for (let t = 0; t < eB.length; t++) {
                            let a = "rotate" + eB[t];
                            n[a] && (o[a] = n[a], e.setStaticValue(a, 0))
                        }
                        for (let t in e.render(), o) e.setStaticValue(t, o[t]);
                        e.scheduleRender()
                    }
                    getProjectionStyles(e) {
                        var t, n;
                        if (!this.instance || this.isSVG) return;
                        if (!this.isVisible) return eH;
                        let o = {
                                visibility: ""
                            },
                            a = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, o.opacity = "", o.pointerEvents = resolveMotionValue(null == e ? void 0 : e.pointerEvents) || "", o.transform = a ? a(this.latestValues, "") : "none", o;
                        let s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            let t = {};
                            return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = resolveMotionValue(null == e ? void 0 : e.pointerEvents) || ""), this.hasProjected && !(0, eF.ud)(this.latestValues) && (t.transform = a ? a({}, "") : "none", this.hasProjected = !1), t
                        }
                        let l = s.animationValues || s.latestValues;
                        this.applyTransformsToTarget(), o.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, l), a && (o.transform = a(l, o.transform));
                        let {
                            x: u,
                            y: c
                        } = this.projectionDelta;
                        for (let e in o.transformOrigin = `${100*u.origin}% ${100*c.origin}% 0`, s.animationValues ? o.opacity = s === this ? null !== (n = null !== (t = l.opacity) && void 0 !== t ? t : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : l.opacityExit : o.opacity = s === this ? void 0 !== l.opacity ? l.opacity : "" : void 0 !== l.opacityExit ? l.opacityExit : 0, eP.P) {
                            if (void 0 === l[e]) continue;
                            let {
                                correct: t,
                                applyTo: n
                            } = eP.P[e], a = "none" === o.transform ? l[e] : t(l[e], s);
                            if (n) {
                                let e = n.length;
                                for (let t = 0; t < e; t++) o[n[t]] = a
                            } else o[e] = a
                        }
                        return this.options.layoutId && (o.pointerEvents = s === this ? resolveMotionValue(null == e ? void 0 : e.pointerEvents) || "" : "none"), o
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(e => {
                            var t;
                            return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
                        }), this.root.nodes.forEach(clearMeasurements), this.root.sharedNodes.clear()
                    }
                }
            }

            function updateLayout(e) {
                e.updateLayout()
            }

            function notifyLayoutUpdate(e) {
                var t;
                let n = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
                if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
                    let {
                        layoutBox: t,
                        measuredBox: o
                    } = e.layout, {
                        animationType: a
                    } = e.options, s = n.source !== e.layout.source;
                    "size" === a ? eachAxis(e => {
                        let o = s ? n.measuredBox[e] : n.layoutBox[e],
                            a = calcLength(o);
                        o.min = t[e].min, o.max = o.min + a
                    }) : shouldAnimatePositionOnly(a, n.layoutBox, t) && eachAxis(o => {
                        let a = s ? n.measuredBox[o] : n.layoutBox[o],
                            l = calcLength(t[o]);
                        a.max = a.min + l, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[o].max = e.relativeTarget[o].min + l)
                    });
                    let l = (0, eg.wc)();
                    calcBoxDelta(l, t, n.layoutBox);
                    let u = (0, eg.wc)();
                    s ? calcBoxDelta(u, e.applyTransform(o, !0), n.measuredBox) : calcBoxDelta(u, t, n.layoutBox);
                    let c = !isDeltaZero(l),
                        d = !1;
                    if (!e.resumeFrom) {
                        let o = e.getClosestProjectingParent();
                        if (o && !o.resumeFrom) {
                            let {
                                snapshot: a,
                                layout: s
                            } = o;
                            if (a && s) {
                                let l = (0, eg.dO)();
                                calcRelativePosition(l, n.layoutBox, a.layoutBox);
                                let u = (0, eg.dO)();
                                calcRelativePosition(u, t, s.layoutBox), boxEqualsRounded(l, u) || (d = !0), o.options.layoutRoot && (e.relativeTarget = u, e.relativeTargetOrigin = l, e.relativeParent = o)
                            }
                        }
                    }
                    e.notifyListeners("didUpdate", {
                        layout: t,
                        snapshot: n,
                        delta: u,
                        layoutDelta: l,
                        hasLayoutChanged: c,
                        hasRelativeTargetChanged: d
                    })
                } else if (e.isLead()) {
                    let {
                        onExitComplete: t
                    } = e.options;
                    t && t()
                }
                e.options.transition = void 0
            }

            function propagateDirtyNodes(e) {
                ez.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
            }

            function cleanDirtyNodes(e) {
                e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
            }

            function clearSnapshot(e) {
                e.clearSnapshot()
            }

            function clearMeasurements(e) {
                e.clearMeasurements()
            }

            function clearIsLayoutDirty(e) {
                e.isLayoutDirty = !1
            }

            function resetTransformStyle(e) {
                let {
                    visualElement: t
                } = e.options;
                t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
            }

            function finishAnimation(e) {
                e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
            }

            function resolveTargetDelta(e) {
                e.resolveTargetDelta()
            }

            function calcProjection(e) {
                e.calcProjection()
            }

            function resetRotation(e) {
                e.resetRotation()
            }

            function removeLeadSnapshots(e) {
                e.removeLeadSnapshot()
            }

            function mixAxisDelta(e, t, n) {
                e.translate = (0, ep.C)(t.translate, 0, n), e.scale = (0, ep.C)(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
            }

            function mixAxis(e, t, n, o) {
                e.min = (0, ep.C)(t.min, n.min, o), e.max = (0, ep.C)(t.max, n.max, o)
            }

            function hasOpacityCrossfade(e) {
                return e.animationValues && void 0 !== e.animationValues.opacityExit
            }
            let eU = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                userAgentContains = e => "undefined" != typeof navigator && navigator.userAgent.toLowerCase().includes(e),
                eG = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : Q.Z;

            function roundAxis(e) {
                e.min = eG(e.min), e.max = eG(e.max)
            }

            function shouldAnimatePositionOnly(e, t, n) {
                return "position" === e || "preserve-aspect" === e && !isNear(aspectRatio(t), aspectRatio(n), .2)
            }
            let eK = createProjectionNode({
                    attachResizeListener: (e, t) => addDomEvent(e, "resize", t),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                eZ = {
                    current: void 0
                },
                eX = createProjectionNode({
                    measureScroll: e => ({
                        x: e.scrollLeft,
                        y: e.scrollTop
                    }),
                    defaultParent: () => {
                        if (!eZ.current) {
                            let e = new eK({});
                            e.mount(window), e.setOptions({
                                layoutScroll: !0
                            }), eZ.current = e
                        }
                        return eZ.current
                    },
                    resetTransform: (e, t) => {
                        e.style.transform = void 0 !== t ? t : "none"
                    },
                    checkIsScrollRoot: e => "fixed" === window.getComputedStyle(e).position
                });
            var eJ = n(4547),
                eq = n(5794);
            let create_visual_element_createDomVisualElement = (e, t) => isSVGComponent(e) ? new eq.e(t, {
                    enableHardwareAcceleration: !1
                }) : new eJ.W(t, {
                    enableHardwareAcceleration: !0
                }),
                eY = {
                    animation: {
                        Feature: class extends Feature {
                            constructor(e) {
                                super(e), e.animationState || (e.animationState = function(e) {
                                    let animate = t => Promise.all(t.map(({
                                            animation: t,
                                            options: n
                                        }) => (function(e, t, n = {}) {
                                            let o;
                                            if (e.notify("AnimationStart", t), Array.isArray(t)) {
                                                let a = t.map(t => animateVariant(e, t, n));
                                                o = Promise.all(a)
                                            } else if ("string" == typeof t) o = animateVariant(e, t, n);
                                            else {
                                                let a = "function" == typeof t ? (0, eo.x)(e, t, n.custom) : t;
                                                o = Promise.all((0, es.w)(e, a, n))
                                            }
                                            return o.then(() => e.notify("AnimationComplete", t))
                                        })(e, t, n))),
                                        t = {
                                            animate: createTypeState(!0),
                                            whileInView: createTypeState(),
                                            whileHover: createTypeState(),
                                            whileTap: createTypeState(),
                                            whileDrag: createTypeState(),
                                            whileFocus: createTypeState(),
                                            exit: createTypeState()
                                        },
                                        n = !0,
                                        buildResolvedTypeValues = (t, n) => {
                                            let o = (0, eo.x)(e, n);
                                            if (o) {
                                                let {
                                                    transition: e,
                                                    transitionEnd: n,
                                                    ...a
                                                } = o;
                                                t = { ...t,
                                                    ...a,
                                                    ...n
                                                }
                                            }
                                            return t
                                        };

                                    function animateChanges(o, a) {
                                        let s = e.getProps(),
                                            l = e.getVariantContext(!0) || {},
                                            u = [],
                                            c = new Set,
                                            d = {},
                                            f = 1 / 0;
                                        for (let g = 0; g < eu; g++) {
                                            var h;
                                            let b = el[g],
                                                x = t[b],
                                                $ = void 0 !== s[b] ? s[b] : l[b],
                                                C = (0, m.$)($),
                                                E = b === a ? x.isActive : null;
                                            !1 === E && (f = g);
                                            let P = $ === l[b] && $ !== s[b] && C;
                                            if (P && n && e.manuallyAnimateOnMount && (P = !1), x.protectedKeys = { ...d
                                                }, !x.isActive && null === E || !$ && !x.prevProp || (0, R.H)($) || "boolean" == typeof $) continue;
                                            let S = (h = x.prevProp, "string" == typeof $ ? $ !== h : !!Array.isArray($) && !shallowCompare($, h)),
                                                A = S || b === a && x.isActive && !P && C || g > f && C,
                                                T = !1,
                                                k = Array.isArray($) ? $ : [$],
                                                L = k.reduce(buildResolvedTypeValues, {});
                                            !1 === E && (L = {});
                                            let {
                                                prevResolvedValues: M = {}
                                            } = x, V = { ...M,
                                                ...L
                                            }, markToAnimate = e => {
                                                A = !0, c.has(e) && (T = !0, c.delete(e)), x.needsAnimating[e] = !0
                                            };
                                            for (let e in V) {
                                                let t = L[e],
                                                    n = M[e];
                                                if (!d.hasOwnProperty(e))((0, ei.C)(t) && (0, ei.C)(n) ? shallowCompare(t, n) : t === n) ? void 0 !== t && c.has(e) ? markToAnimate(e) : x.protectedKeys[e] = !0 : void 0 !== t ? markToAnimate(e) : c.add(e)
                                            }
                                            x.prevProp = $, x.prevResolvedValues = L, x.isActive && (d = { ...d,
                                                ...L
                                            }), n && e.blockInitialAnimation && (A = !1), A && (!P || T) && u.push(...k.map(e => ({
                                                animation: e,
                                                options: {
                                                    type: b,
                                                    ...o
                                                }
                                            })))
                                        }
                                        if (c.size) {
                                            let t = {};
                                            c.forEach(n => {
                                                let o = e.getBaseTarget(n);
                                                void 0 !== o && (t[n] = o)
                                            }), u.push({
                                                animation: t
                                            })
                                        }
                                        let g = !!u.length;
                                        return n && (!1 === s.initial || s.initial === s.animate) && !e.manuallyAnimateOnMount && (g = !1), n = !1, g ? animate(u) : Promise.resolve()
                                    }
                                    return {
                                        animateChanges,
                                        setActive: function(n, o, a) {
                                            var s;
                                            if (t[n].isActive === o) return Promise.resolve();
                                            null === (s = e.variantChildren) || void 0 === s || s.forEach(e => {
                                                var t;
                                                return null === (t = e.animationState) || void 0 === t ? void 0 : t.setActive(n, o)
                                            }), t[n].isActive = o;
                                            let l = animateChanges(a, n);
                                            for (let e in t) t[e].protectedKeys = {};
                                            return l
                                        },
                                        setAnimateFunction: function(t) {
                                            animate = t(e)
                                        },
                                        getState: () => t
                                    }
                                }(e))
                            }
                            updateAnimationControlsSubscription() {
                                let {
                                    animate: e
                                } = this.node.getProps();
                                this.unmount(), (0, R.H)(e) && (this.unmount = e.subscribe(this.node))
                            }
                            mount() {
                                this.updateAnimationControlsSubscription()
                            }
                            update() {
                                let {
                                    animate: e
                                } = this.node.getProps(), {
                                    animate: t
                                } = this.node.prevProps || {};
                                e !== t && this.updateAnimationControlsSubscription()
                            }
                            unmount() {}
                        }
                    },
                    exit: {
                        Feature: class extends Feature {
                            constructor() {
                                super(...arguments), this.id = ec++
                            }
                            update() {
                                if (!this.node.presenceContext) return;
                                let {
                                    isPresent: e,
                                    onExitComplete: t,
                                    custom: n
                                } = this.node.presenceContext, {
                                    isPresent: o
                                } = this.node.prevPresenceContext || {};
                                if (!this.node.animationState || e === o) return;
                                let a = this.node.animationState.setActive("exit", !e, {
                                    custom: null != n ? n : this.node.getProps().custom
                                });
                                t && !e && a.then(() => t(this.id))
                            }
                            mount() {
                                let {
                                    register: e
                                } = this.node.presenceContext || {};
                                e && (this.unmount = e(this.id))
                            }
                            unmount() {}
                        }
                    },
                    inView: {
                        Feature: class extends Feature {
                            constructor() {
                                super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                            }
                            startObserver() {
                                this.unmount();
                                let {
                                    viewport: e = {}
                                } = this.node.getProps(), {
                                    root: t,
                                    margin: n,
                                    amount: o = "some",
                                    once: a
                                } = e, s = {
                                    root: t ? t.current : void 0,
                                    rootMargin: n,
                                    threshold: "number" == typeof o ? o : en[o]
                                };
                                return function(e, t, n) {
                                    let o = function({
                                        root: e,
                                        ...t
                                    }) {
                                        let n = e || document;
                                        er.has(n) || er.set(n, {});
                                        let o = er.get(n),
                                            a = JSON.stringify(t);
                                        return o[a] || (o[a] = new IntersectionObserver(fireAllObserverCallbacks, {
                                            root: e,
                                            ...t
                                        })), o[a]
                                    }(t);
                                    return et.set(e, n), o.observe(e), () => {
                                        et.delete(e), o.unobserve(e)
                                    }
                                }(this.node.current, s, e => {
                                    let {
                                        isIntersecting: t
                                    } = e;
                                    if (this.isInView === t || (this.isInView = t, a && !t && this.hasEnteredView)) return;
                                    t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
                                    let {
                                        onViewportEnter: n,
                                        onViewportLeave: o
                                    } = this.node.getProps(), s = t ? n : o;
                                    s && s(e)
                                })
                            }
                            mount() {
                                this.startObserver()
                            }
                            update() {
                                if ("undefined" == typeof IntersectionObserver) return;
                                let {
                                    props: e,
                                    prevProps: t
                                } = this.node, n = ["amount", "margin", "root"].some(function({
                                    viewport: e = {}
                                }, {
                                    viewport: t = {}
                                } = {}) {
                                    return n => e[n] !== t[n]
                                }(e, t));
                                n && this.startObserver()
                            }
                            unmount() {}
                        }
                    },
                    tap: {
                        Feature: class extends Feature {
                            constructor() {
                                super(...arguments), this.removeStartListeners = Q.Z, this.removeEndListeners = Q.Z, this.removeAccessibleListeners = Q.Z, this.startPointerPress = (e, t) => {
                                    if (this.isPressing) return;
                                    this.removeEndListeners();
                                    let n = this.node.getProps(),
                                        o = addPointerEvent(window, "pointerup", (e, t) => {
                                            if (!this.checkPressEnd()) return;
                                            let {
                                                onTap: n,
                                                onTapCancel: o,
                                                globalTapTarget: a
                                            } = this.node.getProps();
                                            B.Wi.update(() => {
                                                a || isNodeOrChild(this.node.current, e.target) ? n && n(e, t) : o && o(e, t)
                                            })
                                        }, {
                                            passive: !(n.onTap || n.onPointerUp)
                                        }),
                                        a = addPointerEvent(window, "pointercancel", (e, t) => this.cancelPress(e, t), {
                                            passive: !(n.onTapCancel || n.onPointerCancel)
                                        });
                                    this.removeEndListeners = (0, J.z)(o, a), this.startPress(e, t)
                                }, this.startAccessiblePress = () => {
                                    let e = addDomEvent(this.node.current, "keydown", e => {
                                            "Enter" !== e.key || this.isPressing || (this.removeEndListeners(), this.removeEndListeners = addDomEvent(this.node.current, "keyup", e => {
                                                "Enter" === e.key && this.checkPressEnd() && fireSyntheticPointerEvent("up", (e, t) => {
                                                    let {
                                                        onTap: n
                                                    } = this.node.getProps();
                                                    n && B.Wi.update(() => n(e, t))
                                                })
                                            }), fireSyntheticPointerEvent("down", (e, t) => {
                                                this.startPress(e, t)
                                            }))
                                        }),
                                        t = addDomEvent(this.node.current, "blur", () => {
                                            this.isPressing && fireSyntheticPointerEvent("cancel", (e, t) => this.cancelPress(e, t))
                                        });
                                    this.removeAccessibleListeners = (0, J.z)(e, t)
                                }
                            }
                            startPress(e, t) {
                                this.isPressing = !0;
                                let {
                                    onTapStart: n,
                                    whileTap: o
                                } = this.node.getProps();
                                o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && B.Wi.update(() => n(e, t))
                            }
                            checkPressEnd() {
                                this.removeEndListeners(), this.isPressing = !1;
                                let e = this.node.getProps();
                                return e.whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !isDragActive()
                            }
                            cancelPress(e, t) {
                                if (!this.checkPressEnd()) return;
                                let {
                                    onTapCancel: n
                                } = this.node.getProps();
                                n && B.Wi.update(() => n(e, t))
                            }
                            mount() {
                                let e = this.node.getProps(),
                                    t = addPointerEvent(e.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                                        passive: !(e.onTapStart || e.onPointerStart)
                                    }),
                                    n = addDomEvent(this.node.current, "focus", this.startAccessiblePress);
                                this.removeStartListeners = (0, J.z)(t, n)
                            }
                            unmount() {
                                this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
                            }
                        }
                    },
                    focus: {
                        Feature: class extends Feature {
                            constructor() {
                                super(...arguments), this.isActive = !1
                            }
                            onFocus() {
                                let e = !1;
                                try {
                                    e = this.node.current.matches(":focus-visible")
                                } catch (t) {
                                    e = !0
                                }
                                e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                            }
                            onBlur() {
                                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                            }
                            mount() {
                                this.unmount = (0, J.z)(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()))
                            }
                            unmount() {}
                        }
                    },
                    hover: {
                        Feature: class extends Feature {
                            mount() {
                                this.unmount = (0, J.z)(addHoverEvent(this.node, !0), addHoverEvent(this.node, !1))
                            }
                            unmount() {}
                        }
                    },
                    pan: {
                        Feature: class extends Feature {
                            constructor() {
                                super(...arguments), this.removePointerDownListener = Q.Z
                            }
                            onPointerDown(e) {
                                this.session = new PanSession(e, this.createPanHandlers(), {
                                    transformPagePoint: this.node.getTransformPagePoint(),
                                    contextWindow: getContextWindow(this.node)
                                })
                            }
                            createPanHandlers() {
                                let {
                                    onPanSessionStart: e,
                                    onPanStart: t,
                                    onPan: n,
                                    onPanEnd: o
                                } = this.node.getProps();
                                return {
                                    onSessionStart: asyncHandler(e),
                                    onStart: asyncHandler(t),
                                    onMove: n,
                                    onEnd: (e, t) => {
                                        delete this.session, o && B.Wi.update(() => o(e, t))
                                    }
                                }
                            }
                            mount() {
                                this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", e => this.onPointerDown(e))
                            }
                            update() {
                                this.session && this.session.updateHandlers(this.createPanHandlers())
                            }
                            unmount() {
                                this.removePointerDownListener(), this.session && this.session.end()
                            }
                        }
                    },
                    drag: {
                        Feature: class extends Feature {
                            constructor(e) {
                                super(e), this.removeGroupControls = Q.Z, this.removeListeners = Q.Z, this.controls = new VisualElementDragControls(e)
                            }
                            mount() {
                                let {
                                    dragControls: e
                                } = this.node.getProps();
                                e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Q.Z
                            }
                            unmount() {
                                this.removeGroupControls(), this.removeListeners()
                            }
                        },
                        ProjectionNode: eX,
                        MeasureLayout: MeasureLayout
                    },
                    layout: {
                        ProjectionNode: eX,
                        MeasureLayout: MeasureLayout
                    }
                },
                eQ = function(e) {
                    function custom(t, n = {}) {
                        return function({
                            preloadedFeatures: e,
                            createVisualElement: t,
                            useRender: n,
                            useVisualState: o,
                            Component: P
                        }) {
                            e && function(e) {
                                for (let t in e) b.A[t] = { ...b.A[t],
                                    ...e[t]
                                }
                            }(e);
                            let S = (0, a.forwardRef)(function(b, E) {
                                var S;
                                let A;
                                let T = { ...(0, a.useContext)(s._),
                                        ...b,
                                        layoutId: function({
                                            layoutId: e
                                        }) {
                                            let t = (0, a.useContext)($.p).id;
                                            return t && void 0 !== e ? t + "-" + e : e
                                        }(b)
                                    },
                                    {
                                        isStatic: k
                                    } = T,
                                    L = function(e) {
                                        let {
                                            initial: t,
                                            animate: n
                                        } = function(e, t) {
                                            if ((0, g.G)(e)) {
                                                let {
                                                    initial: t,
                                                    animate: n
                                                } = e;
                                                return {
                                                    initial: !1 === t || (0, m.$)(t) ? t : void 0,
                                                    animate: (0, m.$)(n) ? n : void 0
                                                }
                                            }
                                            return !1 !== e.inherit ? t : {}
                                        }(e, (0, a.useContext)(l));
                                        return (0, a.useMemo)(() => ({
                                            initial: t,
                                            animate: n
                                        }), [variantLabelsAsDependency(t), variantLabelsAsDependency(n)])
                                    }(b),
                                    M = o(b, k);
                                if (!k && x.j) {
                                    L.visualElement = function(e, t, n, o) {
                                        let {
                                            visualElement: h
                                        } = (0, a.useContext)(l), m = (0, a.useContext)(d), g = (0, a.useContext)(u.O), b = (0, a.useContext)(s._).reducedMotion, x = (0, a.useRef)();
                                        o = o || m.renderer, !x.current && o && (x.current = o(e, {
                                            visualState: t,
                                            parent: h,
                                            props: n,
                                            presenceContext: g,
                                            blockInitialAnimation: !!g && !1 === g.initial,
                                            reducedMotionConfig: b
                                        }));
                                        let $ = x.current;
                                        (0, a.useInsertionEffect)(() => {
                                            $ && $.update(n, g)
                                        });
                                        let C = (0, a.useRef)(!!(n[f.M] && !window.HandoffComplete));
                                        return (0, c.L)(() => {
                                            $ && ($.render(), C.current && $.animationState && $.animationState.animateChanges())
                                        }), (0, a.useEffect)(() => {
                                            $ && ($.updateFeatures(), !C.current && $.animationState && $.animationState.animateChanges(), C.current && (C.current = !1, window.HandoffComplete = !0))
                                        }), $
                                    }(P, M, T, t);
                                    let n = (0, a.useContext)(C),
                                        o = (0, a.useContext)(d).strict;
                                    L.visualElement && (A = L.visualElement.loadFeatures(T, o, e, n))
                                }
                                return a.createElement(l.Provider, {
                                    value: L
                                }, A && L.visualElement ? a.createElement(A, {
                                    visualElement: L.visualElement,
                                    ...T
                                }) : null, n(P, b, (S = L.visualElement, (0, a.useCallback)(e => {
                                    e && M.mount && M.mount(e), S && (e ? S.mount(e) : S.unmount()), E && ("function" == typeof E ? E(e) : (0, h.I)(E) && (E.current = e))
                                }, [S])), M, k, L.visualElement))
                            });
                            return S[E] = P, S
                        }(e(t, n))
                    }
                    if ("undefined" == typeof Proxy) return custom;
                    let t = new Map;
                    return new Proxy(custom, {
                        get: (e, n) => (t.has(n) || t.set(n, custom(n)), t.get(n))
                    })
                }((e, t) => (function(e, {
                    forwardMotionProps: t = !1
                }, n, o) {
                    let s = isSVGComponent(e) ? W : X;
                    return { ...s,
                        preloadedFeatures: n,
                        useRender: function(e = !1) {
                            return (t, n, o, {
                                latestValues: s
                            }, l) => {
                                let u = isSVGComponent(t) ? useSVGProps : useHTMLProps,
                                    c = u(n, s, l, t),
                                    d = function(e, t, n) {
                                        let o = {};
                                        for (let a in e)("values" !== a || "object" != typeof e.values) && (shouldForward(a) || !0 === n && isValidMotionProp(a) || !t && !isValidMotionProp(a) || e.draggable && a.startsWith("onDrag")) && (o[a] = e[a]);
                                        return o
                                    }(n, "string" == typeof t, e),
                                    f = { ...d,
                                        ...c,
                                        ref: o
                                    },
                                    {
                                        children: h
                                    } = n,
                                    m = (0, a.useMemo)(() => (0, A.i)(h) ? h.get() : h, [h]);
                                return (0, a.createElement)(t, { ...f,
                                    children: m
                                })
                            }
                        }(t),
                        createVisualElement: o,
                        Component: e
                    }
                })(e, t, eY, create_visual_element_createDomVisualElement))
        },
        3193: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return camelToDash
                }
            });
            let camelToDash = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
        },
        7630: function(e, t, n) {
            "use strict";
            n.d(t, {
                Xp: function() {
                    return s
                },
                f9: function() {
                    return o
                },
                tm: function() {
                    return a
                }
            });
            let checkStringStartsWith = e => t => "string" == typeof t && t.startsWith(e),
                o = checkStringStartsWith("--"),
                a = checkStringStartsWith("var(--"),
                s = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
        },
        5194: function(e, t, n) {
            "use strict";

            function isSVGElement(e) {
                return e instanceof SVGElement && "svg" !== e.tagName
            }
            n.d(t, {
                v: function() {
                    return isSVGElement
                }
            })
        },
        7301: function(e, t, n) {
            "use strict";
            n.d(t, {
                I: function() {
                    return resolveElements
                }
            });
            var o = n(5487);

            function resolveElements(e, t, n) {
                var a;
                if ("string" == typeof e) {
                    let s = document;
                    t && ((0, o.k)(!!t.current, "Scope provided, but no element detected."), s = t.current), n ? (null !== (a = n[e]) && void 0 !== a || (n[e] = s.querySelectorAll(e)), e = n[e]) : e = s.querySelectorAll(e)
                } else e instanceof Element && (e = [e]);
                return Array.from(e || [])
            }
        },
        9135: function(e, t, n) {
            "use strict";
            n.d(t, {
                T: function() {
                    return getAnimatableNone
                }
            });
            var o = n(1550),
                a = n(7197),
                s = n(2728);

            function getAnimatableNone(e, t) {
                let n = (0, s.A)(e);
                return n !== a.h && (n = o.P), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
            }
        },
        2728: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return getDefaultValueType
                }
            });
            var o = n(5385),
                a = n(7197),
                s = n(6173);
            let l = { ...s.j,
                    color: o.$,
                    backgroundColor: o.$,
                    outlineColor: o.$,
                    fill: o.$,
                    stroke: o.$,
                    borderColor: o.$,
                    borderTopColor: o.$,
                    borderRightColor: o.$,
                    borderBottomColor: o.$,
                    borderLeftColor: o.$,
                    filter: a.h,
                    WebkitFilter: a.h
                },
                getDefaultValueType = e => l[e]
        },
        6440: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return l
                },
                C: function() {
                    return findDimensionValueType
                }
            });
            var o = n(1649),
                a = n(6190),
                s = n(8340);
            let l = [o.Rx, a.px, a.aQ, a.RW, a.vw, a.vh, {
                    test: e => "auto" === e,
                    parse: e => e
                }],
                findDimensionValueType = e => l.find((0, s.l)(e))
        },
        6173: function(e, t, n) {
            "use strict";
            n.d(t, {
                j: function() {
                    return l
                }
            });
            var o = n(1649),
                a = n(6190);
            let s = { ...o.Rx,
                    transform: Math.round
                },
                l = {
                    borderWidth: a.px,
                    borderTopWidth: a.px,
                    borderRightWidth: a.px,
                    borderBottomWidth: a.px,
                    borderLeftWidth: a.px,
                    borderRadius: a.px,
                    radius: a.px,
                    borderTopLeftRadius: a.px,
                    borderTopRightRadius: a.px,
                    borderBottomRightRadius: a.px,
                    borderBottomLeftRadius: a.px,
                    width: a.px,
                    maxWidth: a.px,
                    height: a.px,
                    maxHeight: a.px,
                    size: a.px,
                    top: a.px,
                    right: a.px,
                    bottom: a.px,
                    left: a.px,
                    padding: a.px,
                    paddingTop: a.px,
                    paddingRight: a.px,
                    paddingBottom: a.px,
                    paddingLeft: a.px,
                    margin: a.px,
                    marginTop: a.px,
                    marginRight: a.px,
                    marginBottom: a.px,
                    marginLeft: a.px,
                    rotate: a.RW,
                    rotateX: a.RW,
                    rotateY: a.RW,
                    rotateZ: a.RW,
                    scale: o.bA,
                    scaleX: o.bA,
                    scaleY: o.bA,
                    scaleZ: o.bA,
                    skew: a.RW,
                    skewX: a.RW,
                    skewY: a.RW,
                    distance: a.px,
                    translateX: a.px,
                    translateY: a.px,
                    translateZ: a.px,
                    x: a.px,
                    y: a.px,
                    z: a.px,
                    perspective: a.px,
                    transformPerspective: a.px,
                    opacity: o.Fq,
                    originX: a.$C,
                    originY: a.$C,
                    originZ: a.px,
                    zIndex: s,
                    fillOpacity: o.Fq,
                    strokeOpacity: o.Fq,
                    numOctaves: s
                }
        },
        8340: function(e, t, n) {
            "use strict";
            n.d(t, {
                l: function() {
                    return testValueType
                }
            });
            let testValueType = e => t => t.test(e)
        },
        4547: function(e, t, n) {
            "use strict";
            n.d(t, {
                W: function() {
                    return HTMLVisualElement
                }
            });
            var o = n(8057),
                a = n(7630),
                s = n(4714),
                l = n(189),
                u = n(4242),
                c = n(2728),
                d = n(6460),
                f = n(1760),
                h = n(406);
            let HTMLVisualElement = class HTMLVisualElement extends f.J {
                constructor() {
                    super(...arguments), this.type = "html"
                }
                readValueFromInstance(e, t) {
                    if (s.G.has(t)) {
                        let e = (0, c.A)(t);
                        return e && e.default || 0
                    } {
                        let n = window.getComputedStyle(e),
                            o = ((0, a.f9)(t) ? n.getPropertyValue(t) : n[t]) || 0;
                        return "string" == typeof o ? o.trim() : o
                    }
                }
                measureInstanceViewportBox(e, {
                    transformPagePoint: t
                }) {
                    return (0, d.J)(e, t)
                }
                build(e, t, n, a) {
                    (0, o.r)(e, t, n, a.transformTemplate)
                }
                scrapeMotionValuesFromProps(e, t) {
                    return (0, l.U)(e, t)
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: e
                    } = this.props;
                    (0, h.i)(e) && (this.childSubscription = e.on("change", e => {
                        this.current && (this.current.textContent = `${e}`)
                    }))
                }
                renderInstance(e, t, n, o) {
                    (0, u.N)(e, t, n, o)
                }
            }
        },
        8057: function(e, t, n) {
            "use strict";
            n.d(t, {
                r: function() {
                    return buildHTMLStyles
                }
            });
            var o = n(4714);
            let a = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                s = o._.length;
            var l = n(7630);
            let getValueAsType = (e, t) => t && "number" == typeof e ? t.transform(e) : e;
            var u = n(6173);

            function buildHTMLStyles(e, t, n, c) {
                let {
                    style: d,
                    vars: f,
                    transform: h,
                    transformOrigin: m
                } = e, g = !1, b = !1, x = !0;
                for (let e in t) {
                    let n = t[e];
                    if ((0, l.f9)(e)) {
                        f[e] = n;
                        continue
                    }
                    let a = u.j[e],
                        s = getValueAsType(n, a);
                    if (o.G.has(e)) {
                        if (g = !0, h[e] = s, !x) continue;
                        n !== (a.default || 0) && (x = !1)
                    } else e.startsWith("origin") ? (b = !0, m[e] = s) : d[e] = s
                }
                if (!t.transform && (g || c ? d.transform = function(e, {
                        enableHardwareAcceleration: t = !0,
                        allowTransformNone: n = !0
                    }, l, u) {
                        let c = "";
                        for (let t = 0; t < s; t++) {
                            let n = o._[t];
                            if (void 0 !== e[n]) {
                                let t = a[n] || n;
                                c += `${t}(${e[n]}) `
                            }
                        }
                        return t && !e.z && (c += "translateZ(0)"), c = c.trim(), u ? c = u(e, l ? "" : c) : n && l && (c = "none"), c
                    }(e.transform, n, x, c) : d.transform && (d.transform = "none")), b) {
                    let {
                        originX: e = "50%",
                        originY: t = "50%",
                        originZ: n = 0
                    } = m;
                    d.transformOrigin = `${e} ${t} ${n}`
                }
            }
        },
        4242: function(e, t, n) {
            "use strict";

            function renderHTML(e, {
                style: t,
                vars: n
            }, o, a) {
                for (let s in Object.assign(e.style, t, a && a.getProjectionStyles(o)), n) e.style.setProperty(s, n[s])
            }
            n.d(t, {
                N: function() {
                    return renderHTML
                }
            })
        },
        189: function(e, t, n) {
            "use strict";
            n.d(t, {
                U: function() {
                    return scrapeMotionValuesFromProps
                }
            });
            var o = n(6816),
                a = n(406);

            function scrapeMotionValuesFromProps(e, t) {
                let {
                    style: n
                } = e, s = {};
                for (let l in n)((0, a.i)(n[l]) || t.style && (0, a.i)(t.style[l]) || (0, o.j)(l, e)) && (s[l] = n[l]);
                return s
            }
        },
        4714: function(e, t, n) {
            "use strict";
            n.d(t, {
                G: function() {
                    return a
                },
                _: function() {
                    return o
                }
            });
            let o = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                a = new Set(o)
        },
        6955: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return o
                }
            });
            let o = new WeakMap
        },
        5794: function(e, t, n) {
            "use strict";
            n.d(t, {
                e: function() {
                    return SVGVisualElement
                }
            });
            var o = n(6832),
                a = n(1760),
                s = n(5415),
                l = n(3193),
                u = n(7302),
                c = n(4714),
                d = n(8504),
                f = n(2728),
                h = n(1512),
                m = n(9854);
            let SVGVisualElement = class SVGVisualElement extends a.J {
                constructor() {
                    super(...arguments), this.type = "svg", this.isSVGTag = !1
                }
                getBaseTargetFromProps(e, t) {
                    return e[t]
                }
                readValueFromInstance(e, t) {
                    if (c.G.has(t)) {
                        let e = (0, f.A)(t);
                        return e && e.default || 0
                    }
                    return t = u.s.has(t) ? t : (0, l.D)(t), e.getAttribute(t)
                }
                measureInstanceViewportBox() {
                    return (0, h.dO)()
                }
                scrapeMotionValuesFromProps(e, t) {
                    return (0, o.U)(e, t)
                }
                build(e, t, n, o) {
                    (0, s.i)(e, t, n, this.isSVGTag, o.transformTemplate)
                }
                renderInstance(e, t, n, o) {
                    (0, d.K)(e, t, n, o)
                }
                mount(e) {
                    this.isSVGTag = (0, m.a)(e.tagName), super.mount(e)
                }
            }
        },
        5415: function(e, t, n) {
            "use strict";
            n.d(t, {
                i: function() {
                    return buildSVGAttrs
                }
            });
            var o = n(8057),
                a = n(6190);

            function calcOrigin(e, t, n) {
                return "string" == typeof e ? e : a.px.transform(t + n * e)
            }
            let s = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                l = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function buildSVGAttrs(e, {
                attrX: t,
                attrY: n,
                attrScale: u,
                originX: c,
                originY: d,
                pathLength: f,
                pathSpacing: h = 1,
                pathOffset: m = 0,
                ...g
            }, b, x, $) {
                if ((0, o.r)(e, g, b, $), x) {
                    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
                    return
                }
                e.attrs = e.style, e.style = {};
                let {
                    attrs: C,
                    style: E,
                    dimensions: P
                } = e;
                C.transform && (P && (E.transform = C.transform), delete C.transform), P && (void 0 !== c || void 0 !== d || E.transform) && (E.transformOrigin = function(e, t, n) {
                    let o = calcOrigin(t, e.x, e.width),
                        a = calcOrigin(n, e.y, e.height);
                    return `${o} ${a}`
                }(P, void 0 !== c ? c : .5, void 0 !== d ? d : .5)), void 0 !== t && (C.x = t), void 0 !== n && (C.y = n), void 0 !== u && (C.scale = u), void 0 !== f && function(e, t, n = 1, o = 0, u = !0) {
                    e.pathLength = 1;
                    let c = u ? s : l;
                    e[c.offset] = a.px.transform(-o);
                    let d = a.px.transform(t),
                        f = a.px.transform(n);
                    e[c.array] = `${d} ${f}`
                }(C, f, h, m, !1)
            }
        },
        7302: function(e, t, n) {
            "use strict";
            n.d(t, {
                s: function() {
                    return o
                }
            });
            let o = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
        },
        9854: function(e, t, n) {
            "use strict";
            n.d(t, {
                a: function() {
                    return isSVGTag
                }
            });
            let isSVGTag = e => "string" == typeof e && "svg" === e.toLowerCase()
        },
        8504: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return renderSVG
                }
            });
            var o = n(3193),
                a = n(4242),
                s = n(7302);

            function renderSVG(e, t, n, l) {
                for (let n in (0, a.N)(e, t, void 0, l), t.attrs) e.setAttribute(s.s.has(n) ? n : (0, o.D)(n), t.attrs[n])
            }
        },
        6832: function(e, t, n) {
            "use strict";
            n.d(t, {
                U: function() {
                    return scrapeMotionValuesFromProps
                }
            });
            var o = n(406),
                a = n(189),
                s = n(4714);

            function scrapeMotionValuesFromProps(e, t) {
                let n = (0, a.U)(e, t);
                for (let a in e)
                    if ((0, o.i)(e[a]) || (0, o.i)(t[a])) {
                        let t = -1 !== s._.indexOf(a) ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
                        n[t] = e[a]
                    }
                return n
            }
        },
        7504: function(e, t, n) {
            "use strict";
            n.d(t, {
                G: function() {
                    return isControllingVariants
                },
                M: function() {
                    return isVariantNode
                }
            });
            var o = n(2445),
                a = n(7732),
                s = n(2963);

            function isControllingVariants(e) {
                return (0, o.H)(e.animate) || s.V.some(t => (0, a.$)(e[t]))
            }

            function isVariantNode(e) {
                return !!(isControllingVariants(e) || e.variants)
            }
        },
        7732: function(e, t, n) {
            "use strict";

            function isVariantLabel(e) {
                return "string" == typeof e || Array.isArray(e)
            }
            n.d(t, {
                $: function() {
                    return isVariantLabel
                }
            })
        },
        2248: function(e, t, n) {
            "use strict";
            n.d(t, {
                x: function() {
                    return resolveVariant
                }
            });
            var o = n(9432);

            function resolveVariant(e, t, n) {
                let a = e.getProps();
                return (0, o.o)(a, t, void 0 !== n ? n : a.custom, function(e) {
                    let t = {};
                    return e.values.forEach((e, n) => t[n] = e.get()), t
                }(e), function(e) {
                    let t = {};
                    return e.values.forEach((e, n) => t[n] = e.getVelocity()), t
                }(e))
            }
        },
        9432: function(e, t, n) {
            "use strict";

            function resolveVariantFromProps(e, t, n, o = {}, a = {}) {
                return "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, o, a)), "string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, o, a)), t
            }
            n.d(t, {
                o: function() {
                    return resolveVariantFromProps
                }
            })
        },
        4330: function(e, t, n) {
            "use strict";
            n.d(t, {
                GJ: function() {
                    return checkTargetForNewValues
                },
                P$: function() {
                    return getOrigin
                },
                CD: function() {
                    return setTarget
                }
            });
            var o = n(3441),
                a = n(681),
                s = n(8715),
                l = n(3234),
                u = n(1550),
                c = n(9135),
                d = n(5385),
                f = n(6440),
                h = n(8340);
            let m = [...f.$, d.$, u.P],
                findValueType = e => m.find((0, h.l)(e));
            var g = n(2248);

            function setTarget(e, t) {
                let n = (0, g.x)(e, t),
                    {
                        transitionEnd: o = {},
                        transition: a = {},
                        ...u
                    } = n ? e.makeTargetAnimatable(n, !1) : {};
                for (let t in u = { ...u,
                        ...o
                    }) {
                    let n = (0, s.Y)(u[t]);
                    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, (0, l.BX)(n))
                }
            }

            function checkTargetForNewValues(e, t, n) {
                var s, d;
                let f = Object.keys(t).filter(t => !e.hasValue(t)),
                    h = f.length;
                if (h)
                    for (let m = 0; m < h; m++) {
                        let h = f[m],
                            g = t[h],
                            b = null;
                        Array.isArray(g) && (b = g[0]), null === b && (b = null !== (d = null !== (s = n[h]) && void 0 !== s ? s : e.readValue(h)) && void 0 !== d ? d : t[h]), null != b && ("string" == typeof b && ((0, o.P)(b) || (0, a.W)(b)) ? b = parseFloat(b) : !findValueType(b) && u.P.test(g) && (b = (0, c.T)(h, g)), e.addValue(h, (0, l.BX)(b, {
                            owner: e
                        })), void 0 === n[h] && (n[h] = b), null !== b && e.setBaseTarget(h, b))
                    }
            }

            function getOrigin(e, t, n) {
                let o = {};
                for (let a in e) {
                    let e = function(e, t) {
                        if (!t) return;
                        let n = t[e] || t.default || t;
                        return n.from
                    }(a, t);
                    if (void 0 !== e) o[a] = e;
                    else {
                        let e = n.getValue(a);
                        e && (o[a] = e.get())
                    }
                }
                return o
            }
        },
        2963: function(e, t, n) {
            "use strict";
            n.d(t, {
                V: function() {
                    return a
                },
                e: function() {
                    return o
                }
            });
            let o = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                a = ["initial", ...o]
        },
        10: function(e, t, n) {
            "use strict";

            function addUniqueItem(e, t) {
                -1 === e.indexOf(t) && e.push(t)
            }

            function removeItem(e, t) {
                let n = e.indexOf(t);
                n > -1 && e.splice(n, 1)
            }
            n.d(t, {
                cl: function() {
                    return removeItem
                },
                y4: function() {
                    return addUniqueItem
                }
            })
        },
        4169: function(e, t, n) {
            "use strict";
            n.d(t, {
                u: function() {
                    return clamp
                }
            });
            let clamp = (e, t, n) => Math.min(Math.max(n, e), t)
        },
        5487: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return a
                },
                k: function() {
                    return s
                }
            });
            var o = n(1662);
            let a = o.Z,
                s = o.Z
        },
        4606: function(e, t, n) {
            "use strict";
            n.d(t, {
                s: function() {
                    return interpolate
                }
            });
            var o = n(5487),
                a = n(5385),
                s = n(4169),
                l = n(22);

            function hueToRgb(e, t, n) {
                return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? e + (t - e) * 6 * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
            }
            var u = n(6382),
                c = n(819),
                d = n(3184);
            let mixLinearColor = (e, t, n) => {
                    let o = e * e;
                    return Math.sqrt(Math.max(0, n * (t * t - o) + o))
                },
                f = [u.$, c.m, d.J],
                getColorType = e => f.find(t => t.test(e));

            function asRGBA(e) {
                let t = getColorType(e);
                (0, o.k)(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`);
                let n = t.parse(e);
                return t === d.J && (n = function({
                    hue: e,
                    saturation: t,
                    lightness: n,
                    alpha: o
                }) {
                    e /= 360, n /= 100;
                    let a = 0,
                        s = 0,
                        l = 0;
                    if (t /= 100) {
                        let o = n < .5 ? n * (1 + t) : n + t - n * t,
                            u = 2 * n - o;
                        a = hueToRgb(u, o, e + 1 / 3), s = hueToRgb(u, o, e), l = hueToRgb(u, o, e - 1 / 3)
                    } else a = s = l = n;
                    return {
                        red: Math.round(255 * a),
                        green: Math.round(255 * s),
                        blue: Math.round(255 * l),
                        alpha: o
                    }
                }(n)), n
            }
            let mixColor = (e, t) => {
                let n = asRGBA(e),
                    o = asRGBA(t),
                    a = { ...n
                    };
                return e => (a.red = mixLinearColor(n.red, o.red, e), a.green = mixLinearColor(n.green, o.green, e), a.blue = mixLinearColor(n.blue, o.blue, e), a.alpha = (0, l.C)(n.alpha, o.alpha, e), c.m.transform(a))
            };
            var h = n(3624),
                m = n(1550);
            let mixImmediate = (e, t) => n => `${n>0?t:e}`;

            function getMixer(e, t) {
                return "number" == typeof e ? n => (0, l.C)(e, t, n) : a.$.test(e) ? mixColor(e, t) : e.startsWith("var(") ? mixImmediate(e, t) : mixComplex(e, t)
            }
            let mixArray = (e, t) => {
                    let n = [...e],
                        o = n.length,
                        a = e.map((e, n) => getMixer(e, t[n]));
                    return e => {
                        for (let t = 0; t < o; t++) n[t] = a[t](e);
                        return n
                    }
                },
                mixObject = (e, t) => {
                    let n = { ...e,
                            ...t
                        },
                        o = {};
                    for (let a in n) void 0 !== e[a] && void 0 !== t[a] && (o[a] = getMixer(e[a], t[a]));
                    return e => {
                        for (let t in o) n[t] = o[t](e);
                        return n
                    }
                },
                mixComplex = (e, t) => {
                    let n = m.P.createTransformer(t),
                        a = (0, m.V)(e),
                        s = (0, m.V)(t),
                        l = a.numVars === s.numVars && a.numColors === s.numColors && a.numNumbers >= s.numNumbers;
                    return l ? (0, h.z)(mixArray(a.values, s.values), n) : ((0, o.K)(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), mixImmediate(e, t))
                };
            var g = n(3032),
                b = n(1662);
            let mixNumber = (e, t) => n => (0, l.C)(e, t, n);

            function interpolate(e, t, {
                clamp: n = !0,
                ease: l,
                mixer: u
            } = {}) {
                let c = e.length;
                if ((0, o.k)(c === t.length, "Both input and output ranges must be the same length"), 1 === c) return () => t[0];
                e[0] > e[c - 1] && (e = [...e].reverse(), t = [...t].reverse());
                let d = function(e, t, n) {
                        let o = [],
                            s = n || function(e) {
                                if ("number" == typeof e);
                                else if ("string" == typeof e) return a.$.test(e) ? mixColor : mixComplex;
                                else if (Array.isArray(e)) return mixArray;
                                else if ("object" == typeof e) return mixObject;
                                return mixNumber
                            }(e[0]),
                            l = e.length - 1;
                        for (let n = 0; n < l; n++) {
                            let a = s(e[n], e[n + 1]);
                            if (t) {
                                let e = Array.isArray(t) ? t[n] || b.Z : t;
                                a = (0, h.z)(e, a)
                            }
                            o.push(a)
                        }
                        return o
                    }(t, l, u),
                    f = d.length,
                    interpolator = t => {
                        let n = 0;
                        if (f > 1)
                            for (; n < e.length - 2 && !(t < e[n + 1]); n++);
                        let o = (0, g.Y)(e[n], e[n + 1], t);
                        return d[n](o)
                    };
                return n ? t => interpolator((0, s.u)(e[0], e[c - 1], t)) : interpolator
            }
        },
        1741: function(e, t, n) {
            "use strict";
            n.d(t, {
                j: function() {
                    return o
                }
            });
            let o = "undefined" != typeof document
        },
        3441: function(e, t, n) {
            "use strict";
            n.d(t, {
                P: function() {
                    return isNumericalString
                }
            });
            let isNumericalString = e => /^\-?\d*\.?\d+$/.test(e)
        },
        1804: function(e, t, n) {
            "use strict";

            function isRefObject(e) {
                return e && "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
            }
            n.d(t, {
                I: function() {
                    return isRefObject
                }
            })
        },
        681: function(e, t, n) {
            "use strict";
            n.d(t, {
                W: function() {
                    return isZeroValueString
                }
            });
            let isZeroValueString = e => /^0[^.\s]+$/.test(e)
        },
        4522: function(e, t, n) {
            "use strict";

            function memo(e) {
                let t;
                return () => (void 0 === t && (t = e()), t)
            }
            n.d(t, {
                X: function() {
                    return memo
                }
            })
        },
        22: function(e, t, n) {
            "use strict";
            n.d(t, {
                C: function() {
                    return mix
                }
            });
            let mix = (e, t, n) => -n * e + n * t + e
        },
        1662: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return noop
                }
            });
            let noop = e => e
        },
        599: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return defaultOffset
                }
            });
            var o = n(6615);

            function defaultOffset(e) {
                let t = [0];
                return (0, o.c)(t, e.length - 1), t
            }
        },
        6615: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return fillOffset
                }
            });
            var o = n(22),
                a = n(3032);

            function fillOffset(e, t) {
                let n = e[e.length - 1];
                for (let s = 1; s <= t; s++) {
                    let l = (0, a.Y)(0, t, s);
                    e.push((0, o.C)(n, 1, l))
                }
            }
        },
        3624: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return pipe
                }
            });
            let combineFunctions = (e, t) => n => t(e(n)),
                pipe = (...e) => e.reduce(combineFunctions)
        },
        3032: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return progress
                }
            });
            let progress = (e, t, n) => {
                let o = t - e;
                return 0 === o ? 1 : (n - e) / o
            }
        },
        8715: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return resolveFinalValueInKeyframes
                },
                p: function() {
                    return isCustomValue
                }
            });
            var o = n(8488);
            let isCustomValue = e => !!(e && "object" == typeof e && e.mix && e.toValue),
                resolveFinalValueInKeyframes = e => (0, o.C)(e) ? e[e.length - 1] || 0 : e
        },
        1560: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return SubscriptionManager
                }
            });
            var o = n(10);
            let SubscriptionManager = class SubscriptionManager {
                constructor() {
                    this.subscriptions = []
                }
                add(e) {
                    return (0, o.y4)(this.subscriptions, e), () => (0, o.cl)(this.subscriptions, e)
                }
                notify(e, t, n) {
                    let o = this.subscriptions.length;
                    if (o) {
                        if (1 === o) this.subscriptions[0](e, t, n);
                        else
                            for (let a = 0; a < o; a++) {
                                let o = this.subscriptions[a];
                                o && o(e, t, n)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
        },
        6917: function(e, t, n) {
            "use strict";
            n.d(t, {
                X: function() {
                    return millisecondsToSeconds
                },
                w: function() {
                    return secondsToMilliseconds
                }
            });
            let secondsToMilliseconds = e => 1e3 * e,
                millisecondsToSeconds = e => e / 1e3
        },
        6681: function(e, t, n) {
            "use strict";
            n.d(t, {
                h: function() {
                    return useConstant
                }
            });
            var o = n(7294);

            function useConstant(e) {
                let t = (0, o.useRef)(null);
                return null === t.current && (t.current = e()), t.current
            }
        },
        6893: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return useInView
                }
            });
            var o = n(7294),
                a = n(7301);
            let s = {
                some: 0,
                all: 1
            };

            function useInView(e, {
                root: t,
                margin: n,
                amount: l,
                once: u = !1
            } = {}) {
                let [c, d] = (0, o.useState)(!1);
                return (0, o.useEffect)(() => {
                    if (!e.current || u && c) return;
                    let o = {
                        root: t && t.current || void 0,
                        margin: n,
                        amount: l
                    };
                    return function(e, t, {
                        root: n,
                        margin: o,
                        amount: l = "some"
                    } = {}) {
                        let u = (0, a.I)(e),
                            c = new WeakMap,
                            d = new IntersectionObserver(e => {
                                e.forEach(e => {
                                    let n = c.get(e.target);
                                    if (!!n !== e.isIntersecting) {
                                        if (e.isIntersecting) {
                                            let n = t(e);
                                            "function" == typeof n ? c.set(e.target, n) : d.unobserve(e.target)
                                        } else n && (n(e), c.delete(e.target))
                                    }
                                })
                            }, {
                                root: n,
                                rootMargin: o,
                                threshold: "number" == typeof l ? l : s[l]
                            });
                        return u.forEach(e => d.observe(e)), () => d.disconnect()
                    }(e.current, () => (d(!0), u ? void 0 : () => d(!1)), o)
                }, [t, e, n, u, l]), c
            }
        },
        8868: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return s
                }
            });
            var o = n(7294),
                a = n(1741);
            let s = a.j ? o.useLayoutEffect : o.useEffect
        },
        3038: function(e, t, n) {
            "use strict";

            function velocityPerSecond(e, t) {
                return t ? e * (1e3 / t) : 0
            }
            n.d(t, {
                R: function() {
                    return velocityPerSecond
                }
            })
        },
        3234: function(e, t, n) {
            "use strict";
            n.d(t, {
                BX: function() {
                    return motionValue
                },
                S1: function() {
                    return l
                }
            });
            var o = n(1560),
                a = n(3038),
                s = n(2074);
            let isFloat = e => !isNaN(parseFloat(e)),
                l = {
                    current: void 0
                };
            let MotionValue = class MotionValue {
                constructor(e, t = {}) {
                    this.version = "10.18.0", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (e, t = !0) => {
                        this.prev = this.current, this.current = e;
                        let {
                            delta: n,
                            timestamp: o
                        } = s.frameData;
                        this.lastUpdated !== o && (this.timeDelta = n, this.lastUpdated = o, s.Wi.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), t && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.scheduleVelocityCheck = () => s.Wi.postRender(this.velocityCheck), this.velocityCheck = ({
                        timestamp: e
                    }) => {
                        e !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                    }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = isFloat(this.current), this.owner = t.owner
                }
                onChange(e) {
                    return this.on("change", e)
                }
                on(e, t) {
                    this.events[e] || (this.events[e] = new o.L);
                    let n = this.events[e].add(t);
                    return "change" === e ? () => {
                        n(), s.Wi.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : n
                }
                clearListeners() {
                    for (let e in this.events) this.events[e].clear()
                }
                attach(e, t) {
                    this.passiveEffect = e, this.stopPassiveEffect = t
                }
                set(e, t = !0) {
                    t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
                }
                setWithVelocity(e, t, n) {
                    this.set(t), this.prev = e, this.timeDelta = n
                }
                jump(e) {
                    this.updateAndNotify(e), this.prev = e, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return l.current && l.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    return this.canTrackVelocity ? (0, a.R)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                }
                start(e) {
                    return this.stop(), new Promise(t => {
                        this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            };

            function motionValue(e, t) {
                return new MotionValue(e, t)
            }
        },
        6382: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return s
                }
            });
            var o = n(819),
                a = n(8834);
            let s = {
                test: (0, a.i)("#"),
                parse: function(e) {
                    let t = "",
                        n = "",
                        o = "",
                        a = "";
                    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), o = e.substring(5, 7), a = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), o = e.substring(3, 4), a = e.substring(4, 5), t += t, n += n, o += o, a += a), {
                        red: parseInt(t, 16),
                        green: parseInt(n, 16),
                        blue: parseInt(o, 16),
                        alpha: a ? parseInt(a, 16) / 255 : 1
                    }
                },
                transform: o.m.transform
            }
        },
        3184: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return u
                }
            });
            var o = n(1649),
                a = n(6190),
                s = n(6430),
                l = n(8834);
            let u = {
                test: (0, l.i)("hsl", "hue"),
                parse: (0, l.d)("hue", "saturation", "lightness"),
                transform: ({
                    hue: e,
                    saturation: t,
                    lightness: n,
                    alpha: l = 1
                }) => "hsla(" + Math.round(e) + ", " + a.aQ.transform((0, s.Nw)(t)) + ", " + a.aQ.transform((0, s.Nw)(n)) + ", " + (0, s.Nw)(o.Fq.transform(l)) + ")"
            }
        },
        5385: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return u
                }
            });
            var o = n(6430),
                a = n(6382),
                s = n(3184),
                l = n(819);
            let u = {
                test: e => l.m.test(e) || a.$.test(e) || s.J.test(e),
                parse: e => l.m.test(e) ? l.m.parse(e) : s.J.test(e) ? s.J.parse(e) : a.$.parse(e),
                transform: e => (0, o.HD)(e) ? e : e.hasOwnProperty("red") ? l.m.transform(e) : s.J.transform(e)
            }
        },
        819: function(e, t, n) {
            "use strict";
            n.d(t, {
                m: function() {
                    return c
                }
            });
            var o = n(4169),
                a = n(1649),
                s = n(6430),
                l = n(8834);
            let clampRgbUnit = e => (0, o.u)(0, 255, e),
                u = { ...a.Rx,
                    transform: e => Math.round(clampRgbUnit(e))
                },
                c = {
                    test: (0, l.i)("rgb", "red"),
                    parse: (0, l.d)("red", "green", "blue"),
                    transform: ({
                        red: e,
                        green: t,
                        blue: n,
                        alpha: o = 1
                    }) => "rgba(" + u.transform(e) + ", " + u.transform(t) + ", " + u.transform(n) + ", " + (0, s.Nw)(a.Fq.transform(o)) + ")"
                }
        },
        8834: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return splitColor
                },
                i: function() {
                    return isColorString
                }
            });
            var o = n(6430);
            let isColorString = (e, t) => n => !!((0, o.HD)(n) && o.mj.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
                splitColor = (e, t, n) => a => {
                    if (!(0, o.HD)(a)) return a;
                    let [s, l, u, c] = a.match(o.KP);
                    return {
                        [e]: parseFloat(s),
                        [t]: parseFloat(l),
                        [n]: parseFloat(u),
                        alpha: void 0 !== c ? parseFloat(c) : 1
                    }
                }
        },
        7197: function(e, t, n) {
            "use strict";
            n.d(t, {
                h: function() {
                    return u
                }
            });
            var o = n(1550),
                a = n(6430);
            let s = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function applyDefaultFilter(e) {
                let [t, n] = e.slice(0, -1).split("(");
                if ("drop-shadow" === t) return e;
                let [o] = n.match(a.KP) || [];
                if (!o) return e;
                let l = n.replace(o, ""),
                    u = s.has(t) ? 1 : 0;
                return o !== n && (u *= 100), t + "(" + u + l + ")"
            }
            let l = /([a-z-]*)\(.*?\)/g,
                u = { ...o.P,
                    getAnimatableNone: e => {
                        let t = e.match(l);
                        return t ? t.map(applyDefaultFilter).join(" ") : e
                    }
                }
        },
        1550: function(e, t, n) {
            "use strict";
            n.d(t, {
                P: function() {
                    return h
                },
                V: function() {
                    return analyseComplexValue
                }
            });
            var o = n(7630),
                a = n(1662),
                s = n(5385),
                l = n(1649),
                u = n(6430);
            let c = {
                    regex: o.Xp,
                    countKey: "Vars",
                    token: "${v}",
                    parse: a.Z
                },
                d = {
                    regex: u.dA,
                    countKey: "Colors",
                    token: "${c}",
                    parse: s.$.parse
                },
                f = {
                    regex: u.KP,
                    countKey: "Numbers",
                    token: "${n}",
                    parse: l.Rx.parse
                };

            function tokenise(e, {
                regex: t,
                countKey: n,
                token: o,
                parse: a
            }) {
                let s = e.tokenised.match(t);
                s && (e["num" + n] = s.length, e.tokenised = e.tokenised.replace(t, o), e.values.push(...s.map(a)))
            }

            function analyseComplexValue(e) {
                let t = e.toString(),
                    n = {
                        value: t,
                        tokenised: t,
                        values: [],
                        numVars: 0,
                        numColors: 0,
                        numNumbers: 0
                    };
                return n.value.includes("var(--") && tokenise(n, c), tokenise(n, d), tokenise(n, f), n
            }

            function parseComplexValue(e) {
                return analyseComplexValue(e).values
            }

            function createTransformer(e) {
                let {
                    values: t,
                    numColors: n,
                    numVars: o,
                    tokenised: a
                } = analyseComplexValue(e), l = t.length;
                return e => {
                    let t = a;
                    for (let a = 0; a < l; a++) t = a < o ? t.replace(c.token, e[a]) : a < o + n ? t.replace(d.token, s.$.transform(e[a])) : t.replace(f.token, (0, u.Nw)(e[a]));
                    return t
                }
            }
            let convertNumbersToZero = e => "number" == typeof e ? 0 : e,
                h = {
                    test: function(e) {
                        var t, n;
                        return isNaN(e) && (0, u.HD)(e) && ((null === (t = e.match(u.KP)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (n = e.match(u.dA)) || void 0 === n ? void 0 : n.length) || 0) > 0
                    },
                    parse: parseComplexValue,
                    createTransformer,
                    getAnimatableNone: function(e) {
                        let t = parseComplexValue(e),
                            n = createTransformer(e);
                        return n(t.map(convertNumbersToZero))
                    }
                }
        },
        1649: function(e, t, n) {
            "use strict";
            n.d(t, {
                Fq: function() {
                    return s
                },
                Rx: function() {
                    return a
                },
                bA: function() {
                    return l
                }
            });
            var o = n(4169);
            let a = {
                    test: e => "number" == typeof e,
                    parse: parseFloat,
                    transform: e => e
                },
                s = { ...a,
                    transform: e => (0, o.u)(0, 1, e)
                },
                l = { ...a,
                    default: 1
                }
        },
        6190: function(e, t, n) {
            "use strict";
            n.d(t, {
                $C: function() {
                    return d
                },
                RW: function() {
                    return a
                },
                aQ: function() {
                    return s
                },
                px: function() {
                    return l
                },
                vh: function() {
                    return u
                },
                vw: function() {
                    return c
                }
            });
            var o = n(6430);
            let createUnitType = e => ({
                    test: t => (0, o.HD)(t) && t.endsWith(e) && 1 === t.split(" ").length,
                    parse: parseFloat,
                    transform: t => `${t}${e}`
                }),
                a = createUnitType("deg"),
                s = createUnitType("%"),
                l = createUnitType("px"),
                u = createUnitType("vh"),
                c = createUnitType("vw"),
                d = { ...s,
                    parse: e => s.parse(e) / 100,
                    transform: e => s.transform(100 * e)
                }
        },
        6430: function(e, t, n) {
            "use strict";
            n.d(t, {
                HD: function() {
                    return isString
                },
                KP: function() {
                    return o
                },
                Nw: function() {
                    return sanitize
                },
                dA: function() {
                    return a
                },
                mj: function() {
                    return s
                }
            });
            let sanitize = e => Math.round(1e5 * e) / 1e5,
                o = /(-)?([\d]*\.?[\d])+/g,
                a = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
                s = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

            function isString(e) {
                return "string" == typeof e
            }
        },
        2490: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return isWillChangeMotionValue
                }
            });
            var o = n(406);

            function isWillChangeMotionValue(e) {
                return !!((0, o.i)(e) && e.add)
            }
        },
        406: function(e, t, n) {
            "use strict";
            n.d(t, {
                i: function() {
                    return isMotionValue
                }
            });
            let isMotionValue = e => !!(e && e.getVelocity)
        }
    },
    function(e) {
        var __webpack_exec__ = function(t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], function() {
            return __webpack_exec__(6840), __webpack_exec__(9974)
        }), _N_E = e.O()
    }
]);
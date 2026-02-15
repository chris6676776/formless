(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [520], {
        2261: function() {},
        2379: function(e, t, i) {
            "use strict";
            let s, r, l;
            i.d(t, {
                tq: function() {
                    return g
                },
                o5: function() {
                    return v
                }
            });
            var n = i(7294);

            function ssr_window_esm_isObject(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function extend(e = {}, t = {}) {
                Object.keys(t).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : ssr_window_esm_isObject(t[i]) && ssr_window_esm_isObject(e[i]) && Object.keys(t[i]).length > 0 && extend(e[i], t[i])
                })
            }
            let a = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function ssr_window_esm_getDocument() {
                let e = "undefined" != typeof document ? document : {};
                return extend(e, a), e
            }
            let o = {
                document: a,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" != typeof setTimeout && clearTimeout(e)
                }
            };

            function ssr_window_esm_getWindow() {
                let e = "undefined" != typeof window ? window : {};
                return extend(e, o), e
            }

            function utils_nextTick(e, t = 0) {
                return setTimeout(e, t)
            }

            function utils_now() {
                return Date.now()
            }

            function utils_isObject(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function utils_extend(...e) {
                let t = Object(e[0]),
                    i = ["__proto__", "constructor", "prototype"];
                for (let s = 1; s < e.length; s += 1) {
                    let r = e[s];
                    if (null != r && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(r instanceof HTMLElement) : !r || 1 !== r.nodeType && 11 !== r.nodeType)) {
                        let e = Object.keys(Object(r)).filter(e => 0 > i.indexOf(e));
                        for (let i = 0, s = e.length; i < s; i += 1) {
                            let s = e[i],
                                l = Object.getOwnPropertyDescriptor(r, s);
                            void 0 !== l && l.enumerable && (utils_isObject(t[s]) && utils_isObject(r[s]) ? r[s].__swiper__ ? t[s] = r[s] : utils_extend(t[s], r[s]) : !utils_isObject(t[s]) && utils_isObject(r[s]) ? (t[s] = {}, r[s].__swiper__ ? t[s] = r[s] : utils_extend(t[s], r[s])) : t[s] = r[s])
                        }
                    }
                }
                return t
            }

            function utils_setCSSProperty(e, t, i) {
                e.style.setProperty(t, i)
            }

            function animateCSSModeScroll({
                swiper: e,
                targetPosition: t,
                side: i
            }) {
                let s;
                let r = ssr_window_esm_getWindow(),
                    l = -e.translate,
                    n = null,
                    a = e.params.speed;
                e.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(e.cssModeFrameID);
                let o = t > l ? "next" : "prev",
                    isOutOfBound = (e, t) => "next" === o && e >= t || "prev" === o && e <= t,
                    animate = () => {
                        s = new Date().getTime(), null === n && (n = s);
                        let o = Math.max(Math.min((s - n) / a, 1), 0),
                            d = l + (.5 - Math.cos(o * Math.PI) / 2) * (t - l);
                        if (isOutOfBound(d, t) && (d = t), e.wrapperEl.scrollTo({
                                [i]: d
                            }), isOutOfBound(d, t)) {
                            e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                                e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                                    [i]: d
                                })
                            }), r.cancelAnimationFrame(e.cssModeFrameID);
                            return
                        }
                        e.cssModeFrameID = r.requestAnimationFrame(animate)
                    };
                animate()
            }

            function utils_elementChildren(e, t = "") {
                return [...e.children].filter(e => e.matches(t))
            }

            function elementStyle(e, t) {
                let i = ssr_window_esm_getWindow();
                return i.getComputedStyle(e, null).getPropertyValue(t)
            }

            function utils_elementIndex(e) {
                let t, i = e;
                if (i) {
                    for (t = 0; null !== (i = i.previousSibling);) 1 === i.nodeType && (t += 1);
                    return t
                }
            }

            function utils_elementOuterSize(e, t, i) {
                let s = ssr_window_esm_getWindow();
                return i ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
            }

            function getSupport() {
                return s || (s = function() {
                    let e = ssr_window_esm_getWindow(),
                        t = ssr_window_esm_getDocument();
                    return {
                        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                    }
                }()), s
            }
            let processLazyPreloader = (e, t) => {
                    if (!e || e.destroyed || !e.params) return;
                    let i = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
                    if (i) {
                        let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
                        t && t.remove()
                    }
                },
                unlazy = (e, t) => {
                    if (!e.slides[t]) return;
                    let i = e.slides[t].querySelector('[loading="lazy"]');
                    i && i.removeAttribute("loading")
                },
                preload = e => {
                    if (!e || e.destroyed || !e.params) return;
                    let t = e.params.lazyPreloadPrevNext,
                        i = e.slides.length;
                    if (!i || !t || t < 0) return;
                    t = Math.min(t, i);
                    let s = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                        r = e.activeIndex;
                    if (e.params.grid && e.params.grid.rows > 1) {
                        let i = [r - t];
                        i.push(...Array.from({
                            length: t
                        }).map((e, t) => r + s + t)), e.slides.forEach((t, s) => {
                            i.includes(t.column) && unlazy(e, s)
                        });
                        return
                    }
                    let l = r + s - 1;
                    if (e.params.rewind || e.params.loop)
                        for (let s = r - t; s <= l + t; s += 1) {
                            let t = (s % i + i) % i;
                            (t < r || t > l) && unlazy(e, t)
                        } else
                            for (let s = Math.max(r - t, 0); s <= Math.min(l + t, i - 1); s += 1) s !== r && (s > l || s < r) && unlazy(e, s)
                };

            function transitionEmit({
                swiper: e,
                runCallbacks: t,
                direction: i,
                step: s
            }) {
                let {
                    activeIndex: r,
                    previousIndex: l
                } = e, n = i;
                if (n || (n = r > l ? "next" : r < l ? "prev" : "reset"), e.emit(`transition${s}`), t && r !== l) {
                    if ("reset" === n) {
                        e.emit(`slideResetTransition${s}`);
                        return
                    }
                    e.emit(`slideChangeTransition${s}`), "next" === n ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`)
                }
            }

            function onTouchStart(e) {
                let t = ssr_window_esm_getDocument(),
                    i = ssr_window_esm_getWindow(),
                    s = this.touchEventsData;
                s.evCache.push(e);
                let {
                    params: r,
                    touches: l,
                    enabled: n
                } = this;
                if (!n || !r.simulateTouch && "mouse" === e.pointerType || this.animating && r.preventInteractionOnTransition) return;
                !this.animating && r.cssMode && r.loop && this.loopFix();
                let a = e;
                a.originalEvent && (a = a.originalEvent);
                let o = a.target;
                if ("wrapper" === r.touchEventsTarget && !this.wrapperEl.contains(o) || "which" in a && 3 === a.which || "button" in a && a.button > 0 || s.isTouched && s.isMoved) return;
                let d = !!r.noSwipingClass && "" !== r.noSwipingClass,
                    c = e.composedPath ? e.composedPath() : e.path;
                d && a.target && a.target.shadowRoot && c && (o = c[0]);
                let u = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
                    p = !!(a.target && a.target.shadowRoot);
                if (r.noSwiping && (p ? function(e, t = this) {
                        return function __closestFrom(t) {
                            if (!t || t === ssr_window_esm_getDocument() || t === ssr_window_esm_getWindow()) return null;
                            t.assignedSlot && (t = t.assignedSlot);
                            let i = t.closest(e);
                            return i || t.getRootNode ? i || __closestFrom(t.getRootNode().host) : null
                        }(t)
                    }(u, o) : o.closest(u))) {
                    this.allowClick = !0;
                    return
                }
                if (r.swipeHandler && !o.closest(r.swipeHandler)) return;
                l.currentX = a.pageX, l.currentY = a.pageY;
                let h = l.currentX,
                    f = l.currentY,
                    m = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                    g = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                if (m && (h <= g || h >= i.innerWidth - g)) {
                    if ("prevent" !== m) return;
                    e.preventDefault()
                }
                Object.assign(s, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), l.startX = h, l.startY = f, s.touchStartTime = utils_now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (s.allowThresholdMove = !1);
                let v = !0;
                o.matches(s.focusableElements) && (v = !1, "SELECT" === o.nodeName && (s.isTouched = !1)), t.activeElement && t.activeElement.matches(s.focusableElements) && t.activeElement !== o && t.activeElement.blur();
                let w = v && this.allowTouchMove && r.touchStartPreventDefault;
                (r.touchStartForcePreventDefault || w) && !o.isContentEditable && a.preventDefault(), r.freeMode && r.freeMode.enabled && this.freeMode && this.animating && !r.cssMode && this.freeMode.onTouchStart(), this.emit("touchStart", a)
            }

            function onTouchMove(e) {
                let t;
                let i = ssr_window_esm_getDocument(),
                    s = this.touchEventsData,
                    {
                        params: r,
                        touches: l,
                        rtlTranslate: n,
                        enabled: a
                    } = this;
                if (!a || !r.simulateTouch && "mouse" === e.pointerType) return;
                let o = e;
                if (o.originalEvent && (o = o.originalEvent), !s.isTouched) {
                    s.startMoving && s.isScrolling && this.emit("touchMoveOpposite", o);
                    return
                }
                let d = s.evCache.findIndex(e => e.pointerId === o.pointerId);
                d >= 0 && (s.evCache[d] = o);
                let c = s.evCache.length > 1 ? s.evCache[0] : o,
                    u = c.pageX,
                    p = c.pageY;
                if (o.preventedByNestedSwiper) {
                    l.startX = u, l.startY = p;
                    return
                }
                if (!this.allowTouchMove) {
                    o.target.matches(s.focusableElements) || (this.allowClick = !1), s.isTouched && (Object.assign(l, {
                        startX: u,
                        startY: p,
                        prevX: this.touches.currentX,
                        prevY: this.touches.currentY,
                        currentX: u,
                        currentY: p
                    }), s.touchStartTime = utils_now());
                    return
                }
                if (r.touchReleaseOnEdges && !r.loop) {
                    if (this.isVertical()) {
                        if (p < l.startY && this.translate <= this.maxTranslate() || p > l.startY && this.translate >= this.minTranslate()) {
                            s.isTouched = !1, s.isMoved = !1;
                            return
                        }
                    } else if (u < l.startX && this.translate <= this.maxTranslate() || u > l.startX && this.translate >= this.minTranslate()) return
                }
                if (i.activeElement && o.target === i.activeElement && o.target.matches(s.focusableElements)) {
                    s.isMoved = !0, this.allowClick = !1;
                    return
                }
                if (s.allowTouchCallbacks && this.emit("touchMove", o), o.targetTouches && o.targetTouches.length > 1) return;
                l.currentX = u, l.currentY = p;
                let h = l.currentX - l.startX,
                    f = l.currentY - l.startY;
                if (this.params.threshold && Math.sqrt(h ** 2 + f ** 2) < this.params.threshold) return;
                if (void 0 === s.isScrolling) {
                    let e;
                    this.isHorizontal() && l.currentY === l.startY || this.isVertical() && l.currentX === l.startX ? s.isScrolling = !1 : h * h + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI, s.isScrolling = this.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
                }
                if (s.isScrolling && this.emit("touchMoveOpposite", o), void 0 === s.startMoving && (l.currentX !== l.startX || l.currentY !== l.startY) && (s.startMoving = !0), s.isScrolling || this.zoom && this.params.zoom && this.params.zoom.enabled && s.evCache.length > 1) {
                    s.isTouched = !1;
                    return
                }
                if (!s.startMoving) return;
                this.allowClick = !1, !r.cssMode && o.cancelable && o.preventDefault(), r.touchMoveStopPropagation && !r.nested && o.stopPropagation();
                let m = this.isHorizontal() ? h : f,
                    g = this.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
                r.oneWayMovement && (m = Math.abs(m) * (n ? 1 : -1), g = Math.abs(g) * (n ? 1 : -1)), l.diff = m, m *= r.touchRatio, n && (m = -m, g = -g);
                let v = this.touchesDirection;
                this.swipeDirection = m > 0 ? "prev" : "next", this.touchesDirection = g > 0 ? "prev" : "next";
                let w = this.params.loop && !r.cssMode;
                if (!s.isMoved) {
                    if (w && this.loopFix({
                            direction: this.swipeDirection
                        }), s.startTranslate = this.getTranslate(), this.setTransition(0), this.animating) {
                        let e = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0
                        });
                        this.wrapperEl.dispatchEvent(e)
                    }
                    s.allowMomentumBounce = !1, r.grabCursor && (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) && this.setGrabCursor(!0), this.emit("sliderFirstMove", o)
                }
                s.isMoved && v !== this.touchesDirection && w && Math.abs(m) >= 1 && (this.loopFix({
                    direction: this.swipeDirection,
                    setTranslate: !0
                }), t = !0), this.emit("sliderMove", o), s.isMoved = !0, s.currentTranslate = m + s.startTranslate;
                let S = !0,
                    b = r.resistanceRatio;
                if (r.touchReleaseOnEdges && (b = 0), m > 0 ? (w && !t && s.currentTranslate > (r.centeredSlides ? this.minTranslate() - this.size / 2 : this.minTranslate()) && this.loopFix({
                        direction: "prev",
                        setTranslate: !0,
                        activeSlideIndex: 0
                    }), s.currentTranslate > this.minTranslate() && (S = !1, r.resistance && (s.currentTranslate = this.minTranslate() - 1 + (-this.minTranslate() + s.startTranslate + m) ** b))) : m < 0 && (w && !t && s.currentTranslate < (r.centeredSlides ? this.maxTranslate() + this.size / 2 : this.maxTranslate()) && this.loopFix({
                        direction: "next",
                        setTranslate: !0,
                        activeSlideIndex: this.slides.length - ("auto" === r.slidesPerView ? this.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
                    }), s.currentTranslate < this.maxTranslate() && (S = !1, r.resistance && (s.currentTranslate = this.maxTranslate() + 1 - (this.maxTranslate() - s.startTranslate - m) ** b))), S && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), this.allowSlidePrev || this.allowSlideNext || (s.currentTranslate = s.startTranslate), r.threshold > 0) {
                    if (Math.abs(m) > r.threshold || s.allowThresholdMove) {
                        if (!s.allowThresholdMove) {
                            s.allowThresholdMove = !0, l.startX = l.currentX, l.startY = l.currentY, s.currentTranslate = s.startTranslate, l.diff = this.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY;
                            return
                        }
                    } else {
                        s.currentTranslate = s.startTranslate;
                        return
                    }
                }
                r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && this.freeMode || r.watchSlidesProgress) && (this.updateActiveIndex(), this.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && this.freeMode && this.freeMode.onTouchMove(), this.updateProgress(s.currentTranslate), this.setTranslate(s.currentTranslate))
            }

            function onTouchEnd(e) {
                let t;
                let i = this,
                    s = i.touchEventsData,
                    r = s.evCache.findIndex(t => t.pointerId === e.pointerId);
                if (r >= 0 && s.evCache.splice(r, 1), ["pointercancel", "pointerout", "pointerleave"].includes(e.type)) {
                    let t = "pointercancel" === e.type && (i.browser.isSafari || i.browser.isWebView);
                    if (!t) return
                }
                let {
                    params: l,
                    touches: n,
                    rtlTranslate: a,
                    slidesGrid: o,
                    enabled: d
                } = i;
                if (!d || !l.simulateTouch && "mouse" === e.pointerType) return;
                let c = e;
                if (c.originalEvent && (c = c.originalEvent), s.allowTouchCallbacks && i.emit("touchEnd", c), s.allowTouchCallbacks = !1, !s.isTouched) {
                    s.isMoved && l.grabCursor && i.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
                    return
                }
                l.grabCursor && s.isMoved && s.isTouched && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!1);
                let u = utils_now(),
                    p = u - s.touchStartTime;
                if (i.allowClick) {
                    let e = c.path || c.composedPath && c.composedPath();
                    i.updateClickedSlide(e && e[0] || c.target), i.emit("tap click", c), p < 300 && u - s.lastClickTime < 300 && i.emit("doubleTap doubleClick", c)
                }
                if (s.lastClickTime = utils_now(), utils_nextTick(() => {
                        i.destroyed || (i.allowClick = !0)
                    }), !s.isTouched || !s.isMoved || !i.swipeDirection || 0 === n.diff || s.currentTranslate === s.startTranslate) {
                    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
                    return
                }
                if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, t = l.followFinger ? a ? i.translate : -i.translate : -s.currentTranslate, l.cssMode) return;
                if (l.freeMode && l.freeMode.enabled) {
                    i.freeMode.onTouchEnd({
                        currentPos: t
                    });
                    return
                }
                let h = 0,
                    f = i.slidesSizesGrid[0];
                for (let e = 0; e < o.length; e += e < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
                    let i = e < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
                    void 0 !== o[e + i] ? t >= o[e] && t < o[e + i] && (h = e, f = o[e + i] - o[e]) : t >= o[e] && (h = e, f = o[o.length - 1] - o[o.length - 2])
                }
                let m = null,
                    g = null;
                l.rewind && (i.isBeginning ? g = l.virtual && l.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1 : i.isEnd && (m = 0));
                let v = (t - o[h]) / f,
                    w = h < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
                if (p > l.longSwipesMs) {
                    if (!l.longSwipes) {
                        i.slideTo(i.activeIndex);
                        return
                    }
                    "next" === i.swipeDirection && (v >= l.longSwipesRatio ? i.slideTo(l.rewind && i.isEnd ? m : h + w) : i.slideTo(h)), "prev" === i.swipeDirection && (v > 1 - l.longSwipesRatio ? i.slideTo(h + w) : null !== g && v < 0 && Math.abs(v) > l.longSwipesRatio ? i.slideTo(g) : i.slideTo(h))
                } else {
                    if (!l.shortSwipes) {
                        i.slideTo(i.activeIndex);
                        return
                    }
                    let e = i.navigation && (c.target === i.navigation.nextEl || c.target === i.navigation.prevEl);
                    e ? c.target === i.navigation.nextEl ? i.slideTo(h + w) : i.slideTo(h) : ("next" === i.swipeDirection && i.slideTo(null !== m ? m : h + w), "prev" === i.swipeDirection && i.slideTo(null !== g ? g : h))
                }
            }

            function onResize() {
                let e = this,
                    {
                        params: t,
                        el: i
                    } = e;
                if (i && 0 === i.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                let {
                    allowSlideNext: s,
                    allowSlidePrev: r,
                    snapGrid: l
                } = e, n = e.virtual && e.params.virtual.enabled;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
                let a = n && t.loop;
                "auto" !== t.slidesPerView && !(t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || a ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
                }, 500)), e.allowSlidePrev = r, e.allowSlideNext = s, e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow()
            }

            function onClick(e) {
                this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }

            function onScroll() {
                let {
                    wrapperEl: e,
                    rtlTranslate: t,
                    enabled: i
                } = this;
                if (!i) return;
                this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = -e.scrollLeft : this.translate = -e.scrollTop, 0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
                let s = this.maxTranslate() - this.minTranslate();
                (0 === s ? 0 : (this.translate - this.minTranslate()) / s) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
            }

            function onLoad(e) {
                processLazyPreloader(this, e.target), !this.params.cssMode && ("auto" === this.params.slidesPerView || this.params.autoHeight) && this.update()
            }
            let d = !1;

            function dummyEventListener() {}
            let events = (e, t) => {
                    let i = ssr_window_esm_getDocument(),
                        {
                            params: s,
                            el: r,
                            wrapperEl: l,
                            device: n
                        } = e,
                        a = !!s.nested,
                        o = "on" === t ? "addEventListener" : "removeEventListener";
                    r[o]("pointerdown", e.onTouchStart, {
                        passive: !1
                    }), i[o]("pointermove", e.onTouchMove, {
                        passive: !1,
                        capture: a
                    }), i[o]("pointerup", e.onTouchEnd, {
                        passive: !0
                    }), i[o]("pointercancel", e.onTouchEnd, {
                        passive: !0
                    }), i[o]("pointerout", e.onTouchEnd, {
                        passive: !0
                    }), i[o]("pointerleave", e.onTouchEnd, {
                        passive: !0
                    }), (s.preventClicks || s.preventClicksPropagation) && r[o]("click", e.onClick, !0), s.cssMode && l[o]("scroll", e.onScroll), s.updateOnWindowResize ? e[t](n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, !0) : e[t]("observerUpdate", onResize, !0), r[o]("load", e.onLoad, {
                        capture: !0
                    })
                },
                isGridEnabled = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var c = {
                init: !0,
                direction: "horizontal",
                oneWayMovement: !1,
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 5,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                loop: !1,
                loopedSlides: null,
                loopPreventsSliding: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                lazyPreloaderClass: "swiper-lazy-preloader",
                lazyPreloadPrevNext: 0,
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };
            let u = {
                    eventsEmitter: {
                        on(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;
                            let r = i ? "unshift" : "push";
                            return e.split(" ").forEach(e => {
                                s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][r](t)
                            }), s
                        },
                        once(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;

                            function onceHandler(...i) {
                                s.off(e, onceHandler), onceHandler.__emitterProxy && delete onceHandler.__emitterProxy, t.apply(s, i)
                            }
                            return onceHandler.__emitterProxy = t, s.on(e, onceHandler, i)
                        },
                        onAny(e, t) {
                            return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e), this
                        },
                        offAny(e) {
                            if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                            let t = this.eventsAnyListeners.indexOf(e);
                            return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
                        },
                        off(e, t) {
                            let i = this;
                            return i.eventsListeners && !i.destroyed && i.eventsListeners && e.split(" ").forEach(e => {
                                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((s, r) => {
                                    (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(r, 1)
                                })
                            }), i
                        },
                        emit(...e) {
                            let t, i, s;
                            let r = this;
                            if (!r.eventsListeners || r.destroyed || !r.eventsListeners) return r;
                            "string" == typeof e[0] || Array.isArray(e[0]) ? (t = e[0], i = e.slice(1, e.length), s = r) : (t = e[0].events, i = e[0].data, s = e[0].context || r), i.unshift(s);
                            let l = Array.isArray(t) ? t : t.split(" ");
                            return l.forEach(e => {
                                r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach(t => {
                                    t.apply(s, [e, ...i])
                                }), r.eventsListeners && r.eventsListeners[e] && r.eventsListeners[e].forEach(e => {
                                    e.apply(s, i)
                                })
                            }), r
                        }
                    },
                    update: {
                        updateSize: function() {
                            let e, t;
                            let i = this.el;
                            e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i.clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i.clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(elementStyle(i, "padding-left") || 0, 10) - parseInt(elementStyle(i, "padding-right") || 0, 10), t = t - parseInt(elementStyle(i, "padding-top") || 0, 10) - parseInt(elementStyle(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(this, {
                                width: e,
                                height: t,
                                size: this.isHorizontal() ? e : t
                            }))
                        },
                        updateSlides: function() {
                            let e;
                            let t = this;

                            function getDirectionLabel(e) {
                                return t.isHorizontal() ? e : ({
                                    width: "height",
                                    "margin-top": "margin-left",
                                    "margin-bottom ": "margin-right",
                                    "margin-left": "margin-top",
                                    "margin-right": "margin-bottom",
                                    "padding-left": "padding-top",
                                    "padding-right": "padding-bottom",
                                    marginRight: "marginBottom"
                                })[e]
                            }

                            function getDirectionPropertyValue(e, t) {
                                return parseFloat(e.getPropertyValue(getDirectionLabel(t)) || 0)
                            }
                            let i = t.params,
                                {
                                    wrapperEl: s,
                                    slidesEl: r,
                                    size: l,
                                    rtlTranslate: n,
                                    wrongRTL: a
                                } = t,
                                o = t.virtual && i.virtual.enabled,
                                d = o ? t.virtual.slides.length : t.slides.length,
                                c = utils_elementChildren(r, `.${t.params.slideClass}, swiper-slide`),
                                u = o ? t.virtual.slides.length : c.length,
                                p = [],
                                h = [],
                                f = [],
                                m = i.slidesOffsetBefore;
                            "function" == typeof m && (m = i.slidesOffsetBefore.call(t));
                            let g = i.slidesOffsetAfter;
                            "function" == typeof g && (g = i.slidesOffsetAfter.call(t));
                            let v = t.snapGrid.length,
                                w = t.slidesGrid.length,
                                S = i.spaceBetween,
                                b = -m,
                                T = 0,
                                y = 0;
                            if (void 0 === l) return;
                            "string" == typeof S && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * l : "string" == typeof S && (S = parseFloat(S)), t.virtualSize = -S, c.forEach(e => {
                                n ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                            }), i.centeredSlides && i.cssMode && (utils_setCSSProperty(s, "--swiper-centered-offset-before", ""), utils_setCSSProperty(s, "--swiper-centered-offset-after", ""));
                            let _ = i.grid && i.grid.rows > 1 && t.grid;
                            _ && t.grid.initSlides(u);
                            let x = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter(e => void 0 !== i.breakpoints[e].slidesPerView).length > 0;
                            for (let s = 0; s < u; s += 1) {
                                let r;
                                if (e = 0, c[s] && (r = c[s]), _ && t.grid.updateSlide(s, r, u, getDirectionLabel), !c[s] || "none" !== elementStyle(r, "display")) {
                                    if ("auto" === i.slidesPerView) {
                                        x && (c[s].style[getDirectionLabel("width")] = "");
                                        let l = getComputedStyle(r),
                                            n = r.style.transform,
                                            a = r.style.webkitTransform;
                                        if (n && (r.style.transform = "none"), a && (r.style.webkitTransform = "none"), i.roundLengths) e = t.isHorizontal() ? utils_elementOuterSize(r, "width", !0) : utils_elementOuterSize(r, "height", !0);
                                        else {
                                            let t = getDirectionPropertyValue(l, "width"),
                                                i = getDirectionPropertyValue(l, "padding-left"),
                                                s = getDirectionPropertyValue(l, "padding-right"),
                                                n = getDirectionPropertyValue(l, "margin-left"),
                                                a = getDirectionPropertyValue(l, "margin-right"),
                                                o = l.getPropertyValue("box-sizing");
                                            if (o && "border-box" === o) e = t + n + a;
                                            else {
                                                let {
                                                    clientWidth: l,
                                                    offsetWidth: o
                                                } = r;
                                                e = t + i + s + n + a + (o - l)
                                            }
                                        }
                                        n && (r.style.transform = n), a && (r.style.webkitTransform = a), i.roundLengths && (e = Math.floor(e))
                                    } else e = (l - (i.slidesPerView - 1) * S) / i.slidesPerView, i.roundLengths && (e = Math.floor(e)), c[s] && (c[s].style[getDirectionLabel("width")] = `${e}px`);
                                    c[s] && (c[s].swiperSlideSize = e), f.push(e), i.centeredSlides ? (b = b + e / 2 + T / 2 + S, 0 === T && 0 !== s && (b = b - l / 2 - S), 0 === s && (b = b - l / 2 - S), .001 > Math.abs(b) && (b = 0), i.roundLengths && (b = Math.floor(b)), y % i.slidesPerGroup == 0 && p.push(b), h.push(b)) : (i.roundLengths && (b = Math.floor(b)), (y - Math.min(t.params.slidesPerGroupSkip, y)) % t.params.slidesPerGroup == 0 && p.push(b), h.push(b), b = b + e + S), t.virtualSize += e + S, T = e, y += 1
                                }
                            }
                            if (t.virtualSize = Math.max(t.virtualSize, l) + g, n && a && ("slide" === i.effect || "coverflow" === i.effect) && (s.style.width = `${t.virtualSize+S}px`), i.setWrapperSize && (s.style[getDirectionLabel("width")] = `${t.virtualSize+S}px`), _ && t.grid.updateWrapperSize(e, p, getDirectionLabel), !i.centeredSlides) {
                                let e = [];
                                for (let s = 0; s < p.length; s += 1) {
                                    let r = p[s];
                                    i.roundLengths && (r = Math.floor(r)), p[s] <= t.virtualSize - l && e.push(r)
                                }
                                p = e, Math.floor(t.virtualSize - l) - Math.floor(p[p.length - 1]) > 1 && p.push(t.virtualSize - l)
                            }
                            if (o && i.loop) {
                                let e = f[0] + S;
                                if (i.slidesPerGroup > 1) {
                                    let s = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / i.slidesPerGroup),
                                        r = e * i.slidesPerGroup;
                                    for (let e = 0; e < s; e += 1) p.push(p[p.length - 1] + r)
                                }
                                for (let s = 0; s < t.virtual.slidesBefore + t.virtual.slidesAfter; s += 1) 1 === i.slidesPerGroup && p.push(p[p.length - 1] + e), h.push(h[h.length - 1] + e), t.virtualSize += e
                            }
                            if (0 === p.length && (p = [0]), 0 !== S) {
                                let e = t.isHorizontal() && n ? "marginLeft" : getDirectionLabel("marginRight");
                                c.filter((e, t) => !i.cssMode || !!i.loop || t !== c.length - 1).forEach(t => {
                                    t.style[e] = `${S}px`
                                })
                            }
                            if (i.centeredSlides && i.centeredSlidesBounds) {
                                let e = 0;
                                f.forEach(t => {
                                    e += t + (S || 0)
                                }), e -= S;
                                let t = e - l;
                                p = p.map(e => e <= 0 ? -m : e > t ? t + g : e)
                            }
                            if (i.centerInsufficientSlides) {
                                let e = 0;
                                if (f.forEach(t => {
                                        e += t + (S || 0)
                                    }), (e -= S) < l) {
                                    let t = (l - e) / 2;
                                    p.forEach((e, i) => {
                                        p[i] = e - t
                                    }), h.forEach((e, i) => {
                                        h[i] = e + t
                                    })
                                }
                            }
                            if (Object.assign(t, {
                                    slides: c,
                                    snapGrid: p,
                                    slidesGrid: h,
                                    slidesSizesGrid: f
                                }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
                                utils_setCSSProperty(s, "--swiper-centered-offset-before", `${-p[0]}px`), utils_setCSSProperty(s, "--swiper-centered-offset-after", `${t.size/2-f[f.length-1]/2}px`);
                                let e = -t.snapGrid[0],
                                    i = -t.slidesGrid[0];
                                t.snapGrid = t.snapGrid.map(t => t + e), t.slidesGrid = t.slidesGrid.map(e => e + i)
                            }
                            if (u !== d && t.emit("slidesLengthChange"), p.length !== v && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), h.length !== w && t.emit("slidesGridLengthChange"), i.watchSlidesProgress && t.updateSlidesOffset(), !o && !i.cssMode && ("slide" === i.effect || "fade" === i.effect)) {
                                let e = `${i.containerModifierClass}backface-hidden`,
                                    s = t.el.classList.contains(e);
                                u <= i.maxBackfaceHiddenSlides ? s || t.el.classList.add(e) : s && t.el.classList.remove(e)
                            }
                        },
                        updateAutoHeight: function(e) {
                            let t;
                            let i = this,
                                s = [],
                                r = i.virtual && i.params.virtual.enabled,
                                l = 0;
                            "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
                            let getSlideByIndex = e => r ? i.slides[i.getSlideIndexByData(e)] : i.slides[e];
                            if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1) {
                                if (i.params.centeredSlides)(i.visibleSlides || []).forEach(e => {
                                    s.push(e)
                                });
                                else
                                    for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                        let e = i.activeIndex + t;
                                        if (e > i.slides.length && !r) break;
                                        s.push(getSlideByIndex(e))
                                    }
                            } else s.push(getSlideByIndex(i.activeIndex));
                            for (t = 0; t < s.length; t += 1)
                                if (void 0 !== s[t]) {
                                    let e = s[t].offsetHeight;
                                    l = e > l ? e : l
                                }(l || 0 === l) && (i.wrapperEl.style.height = `${l}px`)
                        },
                        updateSlidesOffset: function() {
                            let e = this.slides,
                                t = this.isElement ? this.isHorizontal() ? this.wrapperEl.offsetLeft : this.wrapperEl.offsetTop : 0;
                            for (let i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - this.cssOverflowAdjustment()
                        },
                        updateSlidesProgress: function(e = this && this.translate || 0) {
                            let t = this.params,
                                {
                                    slides: i,
                                    rtlTranslate: s,
                                    snapGrid: r
                                } = this;
                            if (0 === i.length) return;
                            void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                            let l = -e;
                            s && (l = e), i.forEach(e => {
                                e.classList.remove(t.slideVisibleClass)
                            }), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                            let n = t.spaceBetween;
                            "string" == typeof n && n.indexOf("%") >= 0 ? n = parseFloat(n.replace("%", "")) / 100 * this.size : "string" == typeof n && (n = parseFloat(n));
                            for (let e = 0; e < i.length; e += 1) {
                                let a = i[e],
                                    o = a.swiperSlideOffset;
                                t.cssMode && t.centeredSlides && (o -= i[0].swiperSlideOffset);
                                let d = (l + (t.centeredSlides ? this.minTranslate() : 0) - o) / (a.swiperSlideSize + n),
                                    c = (l - r[0] + (t.centeredSlides ? this.minTranslate() : 0) - o) / (a.swiperSlideSize + n),
                                    u = -(l - o),
                                    p = u + this.slidesSizesGrid[e],
                                    h = u >= 0 && u < this.size - 1 || p > 1 && p <= this.size || u <= 0 && p >= this.size;
                                h && (this.visibleSlides.push(a), this.visibleSlidesIndexes.push(e), i[e].classList.add(t.slideVisibleClass)), a.progress = s ? -d : d, a.originalProgress = s ? -c : c
                            }
                        },
                        updateProgress: function(e) {
                            if (void 0 === e) {
                                let t = this.rtlTranslate ? -1 : 1;
                                e = this && this.translate && this.translate * t || 0
                            }
                            let t = this.params,
                                i = this.maxTranslate() - this.minTranslate(),
                                {
                                    progress: s,
                                    isBeginning: r,
                                    isEnd: l,
                                    progressLoop: n
                                } = this,
                                a = r,
                                o = l;
                            if (0 === i) s = 0, r = !0, l = !0;
                            else {
                                s = (e - this.minTranslate()) / i;
                                let t = 1 > Math.abs(e - this.minTranslate()),
                                    n = 1 > Math.abs(e - this.maxTranslate());
                                r = t || s <= 0, l = n || s >= 1, t && (s = 0), n && (s = 1)
                            }
                            if (t.loop) {
                                let t = this.getSlideIndexByData(0),
                                    i = this.getSlideIndexByData(this.slides.length - 1),
                                    s = this.slidesGrid[t],
                                    r = this.slidesGrid[i],
                                    l = this.slidesGrid[this.slidesGrid.length - 1],
                                    a = Math.abs(e);
                                (n = a >= s ? (a - s) / l : (a + l - r) / l) > 1 && (n -= 1)
                            }
                            Object.assign(this, {
                                progress: s,
                                progressLoop: n,
                                isBeginning: r,
                                isEnd: l
                            }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && this.updateSlidesProgress(e), r && !a && this.emit("reachBeginning toEdge"), l && !o && this.emit("reachEnd toEdge"), (a && !r || o && !l) && this.emit("fromEdge"), this.emit("progress", s)
                        },
                        updateSlidesClasses: function() {
                            let e;
                            let {
                                slides: t,
                                params: i,
                                slidesEl: s,
                                activeIndex: r
                            } = this, l = this.virtual && i.virtual.enabled, getFilteredSlide = e => utils_elementChildren(s, `.${i.slideClass}${e}, swiper-slide${e}`)[0];
                            if (t.forEach(e => {
                                    e.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass)
                                }), l) {
                                if (i.loop) {
                                    let t = r - this.virtual.slidesBefore;
                                    t < 0 && (t = this.virtual.slides.length + t), t >= this.virtual.slides.length && (t -= this.virtual.slides.length), e = getFilteredSlide(`[data-swiper-slide-index="${t}"]`)
                                } else e = getFilteredSlide(`[data-swiper-slide-index="${r}"]`)
                            } else e = t[r];
                            if (e) {
                                e.classList.add(i.slideActiveClass);
                                let s = function(e, t) {
                                    let i = [];
                                    for (; e.nextElementSibling;) {
                                        let s = e.nextElementSibling;
                                        t ? s.matches(t) && i.push(s) : i.push(s), e = s
                                    }
                                    return i
                                }(e, `.${i.slideClass}, swiper-slide`)[0];
                                i.loop && !s && (s = t[0]), s && s.classList.add(i.slideNextClass);
                                let r = function(e, t) {
                                    let i = [];
                                    for (; e.previousElementSibling;) {
                                        let s = e.previousElementSibling;
                                        t ? s.matches(t) && i.push(s) : i.push(s), e = s
                                    }
                                    return i
                                }(e, `.${i.slideClass}, swiper-slide`)[0];
                                i.loop, r && r.classList.add(i.slidePrevClass)
                            }
                            this.emitSlidesClasses()
                        },
                        updateActiveIndex: function(e) {
                            let t, i;
                            let s = this,
                                r = s.rtlTranslate ? s.translate : -s.translate,
                                {
                                    snapGrid: l,
                                    params: n,
                                    activeIndex: a,
                                    realIndex: o,
                                    snapIndex: d
                                } = s,
                                c = e,
                                getVirtualRealIndex = e => {
                                    let t = e - s.virtual.slidesBefore;
                                    return t < 0 && (t = s.virtual.slides.length + t), t >= s.virtual.slides.length && (t -= s.virtual.slides.length), t
                                };
                            if (void 0 === c && (c = function(e) {
                                    let t;
                                    let {
                                        slidesGrid: i,
                                        params: s
                                    } = e, r = e.rtlTranslate ? e.translate : -e.translate;
                                    for (let e = 0; e < i.length; e += 1) void 0 !== i[e + 1] ? r >= i[e] && r < i[e + 1] - (i[e + 1] - i[e]) / 2 ? t = e : r >= i[e] && r < i[e + 1] && (t = e + 1) : r >= i[e] && (t = e);
                                    return s.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0), t
                                }(s)), l.indexOf(r) >= 0) t = l.indexOf(r);
                            else {
                                let e = Math.min(n.slidesPerGroupSkip, c);
                                t = e + Math.floor((c - e) / n.slidesPerGroup)
                            }
                            if (t >= l.length && (t = l.length - 1), c === a) {
                                t !== d && (s.snapIndex = t, s.emit("snapIndexChange")), s.params.loop && s.virtual && s.params.virtual.enabled && (s.realIndex = getVirtualRealIndex(c));
                                return
                            }
                            i = s.virtual && n.virtual.enabled && n.loop ? getVirtualRealIndex(c) : s.slides[c] ? parseInt(s.slides[c].getAttribute("data-swiper-slide-index") || c, 10) : c, Object.assign(s, {
                                previousSnapIndex: d,
                                snapIndex: t,
                                previousRealIndex: o,
                                realIndex: i,
                                previousIndex: a,
                                activeIndex: c
                            }), s.initialized && preload(s), s.emit("activeIndexChange"), s.emit("snapIndexChange"), o !== i && s.emit("realIndexChange"), (s.initialized || s.params.runCallbacksOnInit) && s.emit("slideChange")
                        },
                        updateClickedSlide: function(e) {
                            let t;
                            let i = this.params,
                                s = e.closest(`.${i.slideClass}, swiper-slide`),
                                r = !1;
                            if (s) {
                                for (let e = 0; e < this.slides.length; e += 1)
                                    if (this.slides[e] === s) {
                                        r = !0, t = e;
                                        break
                                    }
                            }
                            if (s && r) this.clickedSlide = s, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s.getAttribute("data-swiper-slide-index"), 10) : this.clickedIndex = t;
                            else {
                                this.clickedSlide = void 0, this.clickedIndex = void 0;
                                return
                            }
                            i.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(e = this.isHorizontal() ? "x" : "y") {
                            let {
                                params: t,
                                rtlTranslate: i,
                                translate: s,
                                wrapperEl: r
                            } = this;
                            if (t.virtualTranslate) return i ? -s : s;
                            if (t.cssMode) return s;
                            let l = function(e, t = "x") {
                                let i, s, r;
                                let l = ssr_window_esm_getWindow(),
                                    n = function(e) {
                                        let t;
                                        let i = ssr_window_esm_getWindow();
                                        return i.getComputedStyle && (t = i.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
                                    }(e, null);
                                return l.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(e => e.replace(",", ".")).join(", ")), r = new l.WebKitCSSMatrix("none" === s ? "" : s)) : i = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = l.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = l.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
                            }(r, e);
                            return l += this.cssOverflowAdjustment(), i && (l = -l), l || 0
                        },
                        setTranslate: function(e, t) {
                            let {
                                rtlTranslate: i,
                                params: s,
                                wrapperEl: r,
                                progress: l
                            } = this, n = 0, a = 0;
                            this.isHorizontal() ? n = i ? -e : e : a = e, s.roundLengths && (n = Math.floor(n), a = Math.floor(a)), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? n : a, s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -n : -a : s.virtualTranslate || (this.isHorizontal() ? n -= this.cssOverflowAdjustment() : a -= this.cssOverflowAdjustment(), r.style.transform = `translate3d(${n}px, ${a}px, 0px)`);
                            let o = this.maxTranslate() - this.minTranslate();
                            (0 === o ? 0 : (e - this.minTranslate()) / o) !== l && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(e = 0, t = this.params.speed, i = !0, s = !0, r) {
                            let l;
                            let n = this,
                                {
                                    params: a,
                                    wrapperEl: o
                                } = n;
                            if (n.animating && a.preventInteractionOnTransition) return !1;
                            let d = n.minTranslate(),
                                c = n.maxTranslate();
                            if (l = s && e > d ? d : s && e < c ? c : e, n.updateProgress(l), a.cssMode) {
                                let e = n.isHorizontal();
                                if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -l;
                                else {
                                    if (!n.support.smoothScroll) return animateCSSModeScroll({
                                        swiper: n,
                                        targetPosition: -l,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    o.scrollTo({
                                        [e ? "left" : "top"]: -l,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === t ? (n.setTransition(0), n.setTranslate(l), i && (n.emit("beforeTransitionStart", t, r), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(l), i && (n.emit("beforeTransitionStart", t, r), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                                n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"))
                            }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(e, t) {
                            this.params.cssMode || (this.wrapperEl.style.transitionDuration = `${e}ms`), this.emit("setTransition", e, t)
                        },
                        transitionStart: function(e = !0, t) {
                            let {
                                params: i
                            } = this;
                            i.cssMode || (i.autoHeight && this.updateAutoHeight(), transitionEmit({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e = !0, t) {
                            let {
                                params: i
                            } = this;
                            this.animating = !1, i.cssMode || (this.setTransition(0), transitionEmit({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function(e = 0, t = this.params.speed, i = !0, s, r) {
                            let l;
                            "string" == typeof e && (e = parseInt(e, 10));
                            let n = this,
                                a = e;
                            a < 0 && (a = 0);
                            let {
                                params: o,
                                snapGrid: d,
                                slidesGrid: c,
                                previousIndex: u,
                                activeIndex: p,
                                rtlTranslate: h,
                                wrapperEl: f,
                                enabled: m
                            } = n;
                            if (n.animating && o.preventInteractionOnTransition || !m && !s && !r) return !1;
                            let g = Math.min(n.params.slidesPerGroupSkip, a),
                                v = g + Math.floor((a - g) / n.params.slidesPerGroup);
                            v >= d.length && (v = d.length - 1);
                            let w = -d[v];
                            if (o.normalizeSlideIndex)
                                for (let e = 0; e < c.length; e += 1) {
                                    let t = -Math.floor(100 * w),
                                        i = Math.floor(100 * c[e]),
                                        s = Math.floor(100 * c[e + 1]);
                                    void 0 !== c[e + 1] ? t >= i && t < s - (s - i) / 2 ? a = e : t >= i && t < s && (a = e + 1) : t >= i && (a = e)
                                }
                            if (n.initialized && a !== p && (!n.allowSlideNext && (h ? w > n.translate && w > n.minTranslate() : w < n.translate && w < n.minTranslate()) || !n.allowSlidePrev && w > n.translate && w > n.maxTranslate() && (p || 0) !== a)) return !1;
                            if (a !== (u || 0) && i && n.emit("beforeSlideChangeStart"), n.updateProgress(w), l = a > p ? "next" : a < p ? "prev" : "reset", h && -w === n.translate || !h && w === n.translate) return n.updateActiveIndex(a), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(w), "reset" !== l && (n.transitionStart(i, l), n.transitionEnd(i, l)), !1;
                            if (o.cssMode) {
                                let e = n.isHorizontal(),
                                    i = h ? w : -w;
                                if (0 === t) {
                                    let t = n.virtual && n.params.virtual.enabled;
                                    t && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), t && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                                        f[e ? "scrollLeft" : "scrollTop"] = i
                                    })) : f[e ? "scrollLeft" : "scrollTop"] = i, t && requestAnimationFrame(() => {
                                        n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1
                                    })
                                } else {
                                    if (!n.support.smoothScroll) return animateCSSModeScroll({
                                        swiper: n,
                                        targetPosition: i,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    f.scrollTo({
                                        [e ? "left" : "top"]: i,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return n.setTransition(t), n.setTranslate(w), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, l), 0 === t ? n.transitionEnd(i, l) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
                                n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(i, l))
                            }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0
                        },
                        slideToLoop: function(e = 0, t = this.params.speed, i = !0, s) {
                            if ("string" == typeof e) {
                                let t = parseInt(e, 10);
                                e = t
                            }
                            let r = e;
                            return this.params.loop && (this.virtual && this.params.virtual.enabled ? r += this.virtual.slidesBefore : r = this.getSlideIndexByData(r)), this.slideTo(r, t, i, s)
                        },
                        slideNext: function(e = this.params.speed, t = !0, i) {
                            let {
                                enabled: s,
                                params: r,
                                animating: l
                            } = this;
                            if (!s) return this;
                            let n = r.slidesPerGroup;
                            "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (n = Math.max(this.slidesPerViewDynamic("current", !0), 1));
                            let a = this.activeIndex < r.slidesPerGroupSkip ? 1 : n,
                                o = this.virtual && r.virtual.enabled;
                            if (r.loop) {
                                if (l && !o && r.loopPreventsSliding) return !1;
                                this.loopFix({
                                    direction: "next"
                                }), this._clientLeft = this.wrapperEl.clientLeft
                            }
                            return r.rewind && this.isEnd ? this.slideTo(0, e, t, i) : this.slideTo(this.activeIndex + a, e, t, i)
                        },
                        slidePrev: function(e = this.params.speed, t = !0, i) {
                            let {
                                params: s,
                                snapGrid: r,
                                slidesGrid: l,
                                rtlTranslate: n,
                                enabled: a,
                                animating: o
                            } = this;
                            if (!a) return this;
                            let d = this.virtual && s.virtual.enabled;
                            if (s.loop) {
                                if (o && !d && s.loopPreventsSliding) return !1;
                                this.loopFix({
                                    direction: "prev"
                                }), this._clientLeft = this.wrapperEl.clientLeft
                            }
                            let c = n ? this.translate : -this.translate;

                            function normalize(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            let u = normalize(c),
                                p = r.map(e => normalize(e)),
                                h = r[p.indexOf(u) - 1];
                            if (void 0 === h && s.cssMode) {
                                let e;
                                r.forEach((t, i) => {
                                    u >= t && (e = i)
                                }), void 0 !== e && (h = r[e > 0 ? e - 1 : e])
                            }
                            let f = 0;
                            if (void 0 !== h && ((f = l.indexOf(h)) < 0 && (f = this.activeIndex - 1), "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (f = Math.max(f = f - this.slidesPerViewDynamic("previous", !0) + 1, 0))), s.rewind && this.isBeginning) {
                                let s = this.params.virtual && this.params.virtual.enabled && this.virtual ? this.virtual.slides.length - 1 : this.slides.length - 1;
                                return this.slideTo(s, e, t, i)
                            }
                            return this.slideTo(f, e, t, i)
                        },
                        slideReset: function(e = this.params.speed, t = !0, i) {
                            return this.slideTo(this.activeIndex, e, t, i)
                        },
                        slideToClosest: function(e = this.params.speed, t = !0, i, s = .5) {
                            let r = this.activeIndex,
                                l = Math.min(this.params.slidesPerGroupSkip, r),
                                n = l + Math.floor((r - l) / this.params.slidesPerGroup),
                                a = this.rtlTranslate ? this.translate : -this.translate;
                            if (a >= this.snapGrid[n]) {
                                let e = this.snapGrid[n],
                                    t = this.snapGrid[n + 1];
                                a - e > (t - e) * s && (r += this.params.slidesPerGroup)
                            } else {
                                let e = this.snapGrid[n - 1],
                                    t = this.snapGrid[n];
                                a - e <= (t - e) * s && (r -= this.params.slidesPerGroup)
                            }
                            return r = Math.min(r = Math.max(r, 0), this.slidesGrid.length - 1), this.slideTo(r, e, t, i)
                        },
                        slideToClickedSlide: function() {
                            let e;
                            let t = this,
                                {
                                    params: i,
                                    slidesEl: s
                                } = t,
                                r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                                l = t.clickedIndex,
                                n = t.isElement ? "swiper-slide" : `.${i.slideClass}`;
                            if (i.loop) {
                                if (t.animating) return;
                                e = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), i.centeredSlides ? l < t.loopedSlides - r / 2 || l > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), l = t.getSlideIndex(utils_elementChildren(s, `${n}[data-swiper-slide-index="${e}"]`)[0]), utils_nextTick(() => {
                                    t.slideTo(l)
                                })) : t.slideTo(l) : l > t.slides.length - r ? (t.loopFix(), l = t.getSlideIndex(utils_elementChildren(s, `${n}[data-swiper-slide-index="${e}"]`)[0]), utils_nextTick(() => {
                                    t.slideTo(l)
                                })) : t.slideTo(l)
                            } else t.slideTo(l)
                        }
                    },
                    loop: {
                        loopCreate: function(e) {
                            let {
                                params: t,
                                slidesEl: i
                            } = this;
                            if (!t.loop || this.virtual && this.params.virtual.enabled) return;
                            let s = utils_elementChildren(i, `.${t.slideClass}, swiper-slide`);
                            s.forEach((e, t) => {
                                e.setAttribute("data-swiper-slide-index", t)
                            }), this.loopFix({
                                slideRealIndex: e,
                                direction: t.centeredSlides ? void 0 : "next"
                            })
                        },
                        loopFix: function({
                            slideRealIndex: e,
                            slideTo: t = !0,
                            direction: i,
                            setTranslate: s,
                            activeSlideIndex: r,
                            byController: l,
                            byMousewheel: n
                        } = {}) {
                            let a = this;
                            if (!a.params.loop) return;
                            a.emit("beforeLoopFix");
                            let {
                                slides: o,
                                allowSlidePrev: d,
                                allowSlideNext: c,
                                slidesEl: u,
                                params: p
                            } = a;
                            if (a.allowSlidePrev = !0, a.allowSlideNext = !0, a.virtual && p.virtual.enabled) {
                                t && (p.centeredSlides || 0 !== a.snapIndex ? p.centeredSlides && a.snapIndex < p.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0) : a.slideTo(a.virtual.slides.length, 0, !1, !0)), a.allowSlidePrev = d, a.allowSlideNext = c, a.emit("loopFix");
                                return
                            }
                            let h = "auto" === p.slidesPerView ? a.slidesPerViewDynamic() : Math.ceil(parseFloat(p.slidesPerView, 10)),
                                f = p.loopedSlides || h;
                            f % p.slidesPerGroup != 0 && (f += p.slidesPerGroup - f % p.slidesPerGroup), a.loopedSlides = f;
                            let m = [],
                                g = [],
                                v = a.activeIndex;
                            void 0 === r ? r = a.getSlideIndex(a.slides.filter(e => e.classList.contains(p.slideActiveClass))[0]) : v = r;
                            let w = "next" === i || !i,
                                S = "prev" === i || !i,
                                b = 0,
                                T = 0;
                            if (r < f) {
                                b = Math.max(f - r, p.slidesPerGroup);
                                for (let e = 0; e < f - r; e += 1) {
                                    let t = e - Math.floor(e / o.length) * o.length;
                                    m.push(o.length - t - 1)
                                }
                            } else if (r > a.slides.length - 2 * f) {
                                T = Math.max(r - (a.slides.length - 2 * f), p.slidesPerGroup);
                                for (let e = 0; e < T; e += 1) {
                                    let t = e - Math.floor(e / o.length) * o.length;
                                    g.push(t)
                                }
                            }
                            if (S && m.forEach(e => {
                                    a.slides[e].swiperLoopMoveDOM = !0, u.prepend(a.slides[e]), a.slides[e].swiperLoopMoveDOM = !1
                                }), w && g.forEach(e => {
                                    a.slides[e].swiperLoopMoveDOM = !0, u.append(a.slides[e]), a.slides[e].swiperLoopMoveDOM = !1
                                }), a.recalcSlides(), "auto" === p.slidesPerView && a.updateSlides(), p.watchSlidesProgress && a.updateSlidesOffset(), t) {
                                if (m.length > 0 && S) {
                                    if (void 0 === e) {
                                        let e = a.slidesGrid[v],
                                            t = a.slidesGrid[v + b],
                                            i = t - e;
                                        n ? a.setTranslate(a.translate - i) : (a.slideTo(v + b, 0, !1, !0), s && (a.touches[a.isHorizontal() ? "startX" : "startY"] += i))
                                    } else s && a.slideToLoop(e, 0, !1, !0)
                                } else if (g.length > 0 && w) {
                                    if (void 0 === e) {
                                        let e = a.slidesGrid[v],
                                            t = a.slidesGrid[v - T],
                                            i = t - e;
                                        n ? a.setTranslate(a.translate - i) : (a.slideTo(v - T, 0, !1, !0), s && (a.touches[a.isHorizontal() ? "startX" : "startY"] += i))
                                    } else a.slideToLoop(e, 0, !1, !0)
                                }
                            }
                            if (a.allowSlidePrev = d, a.allowSlideNext = c, a.controller && a.controller.control && !l) {
                                let t = {
                                    slideRealIndex: e,
                                    slideTo: !1,
                                    direction: i,
                                    setTranslate: s,
                                    activeSlideIndex: r,
                                    byController: !0
                                };
                                Array.isArray(a.controller.control) ? a.controller.control.forEach(e => {
                                    !e.destroyed && e.params.loop && e.loopFix(t)
                                }) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix(t)
                            }
                            a.emit("loopFix")
                        },
                        loopDestroy: function() {
                            let {
                                params: e,
                                slidesEl: t
                            } = this;
                            if (!e.loop || this.virtual && this.params.virtual.enabled) return;
                            this.recalcSlides();
                            let i = [];
                            this.slides.forEach(e => {
                                let t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                                i[t] = e
                            }), this.slides.forEach(e => {
                                e.removeAttribute("data-swiper-slide-index")
                            }), i.forEach(e => {
                                t.append(e)
                            }), this.recalcSlides(), this.slideTo(this.realIndex, 0)
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(e) {
                            let t = this;
                            if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            let i = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            t.isElement && (t.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
                                t.__preventObserver__ = !1
                            })
                        },
                        unsetGrabCursor: function() {
                            let e = this;
                            e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
                                e.__preventObserver__ = !1
                            }))
                        }
                    },
                    events: {
                        attachEvents: function() {
                            let e = ssr_window_esm_getDocument(),
                                {
                                    params: t
                                } = this;
                            this.onTouchStart = onTouchStart.bind(this), this.onTouchMove = onTouchMove.bind(this), this.onTouchEnd = onTouchEnd.bind(this), t.cssMode && (this.onScroll = onScroll.bind(this)), this.onClick = onClick.bind(this), this.onLoad = onLoad.bind(this), d || (e.addEventListener("touchstart", dummyEventListener), d = !0), events(this, "on")
                        },
                        detachEvents: function() {
                            events(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            let e = this,
                                {
                                    realIndex: t,
                                    initialized: i,
                                    params: s,
                                    el: r
                                } = e,
                                l = s.breakpoints;
                            if (!l || l && 0 === Object.keys(l).length) return;
                            let n = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
                            if (!n || e.currentBreakpoint === n) return;
                            let a = n in l ? l[n] : void 0,
                                o = a || e.originalParams,
                                d = isGridEnabled(e, s),
                                c = isGridEnabled(e, o),
                                u = s.enabled;
                            d && !c ? (r.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.classList.add(`${s.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === s.grid.fill) && r.classList.add(`${s.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(t => {
                                if (void 0 === o[t]) return;
                                let i = s[t] && s[t].enabled,
                                    r = o[t] && o[t].enabled;
                                i && !r && e[t].disable(), !i && r && e[t].enable()
                            });
                            let p = o.direction && o.direction !== s.direction,
                                h = s.loop && (o.slidesPerView !== s.slidesPerView || p);
                            p && i && e.changeDirection(), utils_extend(e.params, o);
                            let f = e.params.enabled;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), u && !f ? e.disable() : !u && f && e.enable(), e.currentBreakpoint = n, e.emit("_beforeBreakpoint", o), h && i && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()), e.emit("breakpoint", o)
                        },
                        getBreakpoint: function(e, t = "window", i) {
                            if (!e || "container" === t && !i) return;
                            let s = !1,
                                r = ssr_window_esm_getWindow(),
                                l = "window" === t ? r.innerHeight : i.clientHeight,
                                n = Object.keys(e).map(e => {
                                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                                        let t = parseFloat(e.substr(1));
                                        return {
                                            value: l * t,
                                            point: e
                                        }
                                    }
                                    return {
                                        value: e,
                                        point: e
                                    }
                                });
                            n.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                            for (let e = 0; e < n.length; e += 1) {
                                let {
                                    point: l,
                                    value: a
                                } = n[e];
                                "window" === t ? r.matchMedia(`(min-width: ${a}px)`).matches && (s = l) : a <= i.clientWidth && (s = l)
                            }
                            return s || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            let {
                                isLocked: e,
                                params: t
                            } = this, {
                                slidesOffsetBefore: i
                            } = t;
                            if (i) {
                                let e = this.slides.length - 1,
                                    t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * i;
                                this.isLocked = this.size > t
                            } else this.isLocked = 1 === this.snapGrid.length;
                            !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked), !0 === t.allowSlidePrev && (this.allowSlidePrev = !this.isLocked), e && e !== this.isLocked && (this.isEnd = !1), e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            let {
                                classNames: e,
                                params: t,
                                rtl: i,
                                el: s,
                                device: r
                            } = this, l = function(e, t) {
                                let i = [];
                                return e.forEach(e => {
                                    "object" == typeof e ? Object.keys(e).forEach(s => {
                                        e[s] && i.push(t + s)
                                    }) : "string" == typeof e && i.push(t + e)
                                }), i
                            }(["initialized", t.direction, {
                                "free-mode": this.params.freeMode && t.freeMode.enabled
                            }, {
                                autoheight: t.autoHeight
                            }, {
                                rtl: i
                            }, {
                                grid: t.grid && t.grid.rows > 1
                            }, {
                                "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                            }, {
                                android: r.android
                            }, {
                                ios: r.ios
                            }, {
                                "css-mode": t.cssMode
                            }, {
                                centered: t.cssMode && t.centeredSlides
                            }, {
                                "watch-progress": t.watchSlidesProgress
                            }], t.containerModifierClass);
                            e.push(...l), s.classList.add(...e), this.emitContainerClasses()
                        },
                        removeClasses: function() {
                            let {
                                el: e,
                                classNames: t
                            } = this;
                            e.classList.remove(...t), this.emitContainerClasses()
                        }
                    }
                },
                p = {};
            let Swiper = class Swiper {
                constructor(...e) {
                    let t, i;
                    1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? i = e[0] : [t, i] = e, i || (i = {}), i = utils_extend({}, i), t && !i.el && (i.el = t);
                    let s = ssr_window_esm_getDocument();
                    if (i.el && "string" == typeof i.el && s.querySelectorAll(i.el).length > 1) {
                        let e = [];
                        return s.querySelectorAll(i.el).forEach(t => {
                            let s = utils_extend({}, i, {
                                el: t
                            });
                            e.push(new Swiper(s))
                        }), e
                    }
                    let n = this;
                    n.__swiper__ = !0, n.support = getSupport(), n.device = function(e = {}) {
                        return r || (r = function({
                            userAgent: e
                        } = {}) {
                            let t = getSupport(),
                                i = ssr_window_esm_getWindow(),
                                s = i.navigator.platform,
                                r = e || i.navigator.userAgent,
                                l = {
                                    ios: !1,
                                    android: !1
                                },
                                n = i.screen.width,
                                a = i.screen.height,
                                o = r.match(/(Android);?[\s\/]+([\d.]+)?/),
                                d = r.match(/(iPad).*OS\s([\d_]+)/),
                                c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                                u = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                                p = "MacIntel" === s;
                            return !d && p && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${n}x${a}`) >= 0 && ((d = r.match(/(Version)\/([\d.]+)/)) || (d = [0, 1, "13_0_0"]), p = !1), o && "Win32" !== s && (l.os = "android", l.android = !0), (d || u || c) && (l.os = "ios", l.ios = !0), l
                        }(e)), r
                    }({
                        userAgent: i.userAgent
                    }), n.browser = (l || (l = function() {
                        let e = ssr_window_esm_getWindow(),
                            t = !1;

                        function isSafari() {
                            let t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                        }
                        if (isSafari()) {
                            let i = String(e.navigator.userAgent);
                            if (i.includes("Version/")) {
                                let [e, s] = i.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
                                t = e < 16 || 16 === e && s < 2
                            }
                        }
                        return {
                            isSafari: t || isSafari(),
                            needPerspectiveFix: t,
                            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                        }
                    }()), l), n.eventsListeners = {}, n.eventsAnyListeners = [], n.modules = [...n.__modules__], i.modules && Array.isArray(i.modules) && n.modules.push(...i.modules);
                    let a = {};
                    n.modules.forEach(e => {
                        var t;
                        e({
                            params: i,
                            swiper: n,
                            extendParams: (t = i, function(e = {}) {
                                let i = Object.keys(e)[0],
                                    s = e[i];
                                if ("object" != typeof s || null === s || (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === t[i] && (t[i] = {
                                        auto: !0
                                    }), !(i in t && "enabled" in s))) {
                                    utils_extend(a, e);
                                    return
                                }!0 === t[i] && (t[i] = {
                                    enabled: !0
                                }), "object" != typeof t[i] || "enabled" in t[i] || (t[i].enabled = !0), t[i] || (t[i] = {
                                    enabled: !1
                                }), utils_extend(a, e)
                            }),
                            on: n.on.bind(n),
                            once: n.once.bind(n),
                            off: n.off.bind(n),
                            emit: n.emit.bind(n)
                        })
                    });
                    let o = utils_extend({}, c, a);
                    return n.params = utils_extend({}, o, p, i), n.originalParams = utils_extend({}, n.params), n.passedParams = utils_extend({}, i), n.params && n.params.on && Object.keys(n.params.on).forEach(e => {
                        n.on(e, n.params.on[e])
                    }), n.params && n.params.onAny && n.onAny(n.params.onAny), Object.assign(n, {
                        enabled: n.params.enabled,
                        el: t,
                        classNames: [],
                        slides: [],
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === n.params.direction,
                        isVertical: () => "vertical" === n.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        cssOverflowAdjustment() {
                            return 8388608 * Math.trunc(this.translate / 8388608)
                        },
                        allowSlideNext: n.params.allowSlideNext,
                        allowSlidePrev: n.params.allowSlidePrev,
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: n.params.focusableElements,
                            lastClickTime: 0,
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            startMoving: void 0,
                            evCache: []
                        },
                        allowClick: !0,
                        allowTouchMove: n.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), n.emit("_swiper"), n.params.init && n.init(), n
                }
                getSlideIndex(e) {
                    let {
                        slidesEl: t,
                        params: i
                    } = this, s = utils_elementChildren(t, `.${i.slideClass}, swiper-slide`), r = utils_elementIndex(s[0]);
                    return utils_elementIndex(e) - r
                }
                getSlideIndexByData(e) {
                    return this.getSlideIndex(this.slides.filter(t => 1 * t.getAttribute("data-swiper-slide-index") === e)[0])
                }
                recalcSlides() {
                    let {
                        slidesEl: e,
                        params: t
                    } = this;
                    this.slides = utils_elementChildren(e, `.${t.slideClass}, swiper-slide`)
                }
                enable() {
                    this.enabled || (this.enabled = !0, this.params.grabCursor && this.setGrabCursor(), this.emit("enable"))
                }
                disable() {
                    this.enabled && (this.enabled = !1, this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"))
                }
                setProgress(e, t) {
                    e = Math.min(Math.max(e, 0), 1);
                    let i = this.minTranslate(),
                        s = this.maxTranslate(),
                        r = (s - i) * e + i;
                    this.translateTo(r, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
                }
                emitContainerClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    let t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
                }
                emitSlidesClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = [];
                    e.slides.forEach(i => {
                        let s = e.getSlideClasses(i);
                        t.push({
                            slideEl: i,
                            classNames: s
                        }), e.emit("_slideClass", i, s)
                    }), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e = "current", t = !1) {
                    let {
                        params: i,
                        slides: s,
                        slidesGrid: r,
                        slidesSizesGrid: l,
                        size: n,
                        activeIndex: a
                    } = this, o = 1;
                    if (i.centeredSlides) {
                        let e, t = s[a] ? s[a].swiperSlideSize : 0;
                        for (let i = a + 1; i < s.length; i += 1) s[i] && !e && (t += s[i].swiperSlideSize, o += 1, t > n && (e = !0));
                        for (let i = a - 1; i >= 0; i -= 1) s[i] && !e && (t += s[i].swiperSlideSize, o += 1, t > n && (e = !0))
                    } else if ("current" === e)
                        for (let e = a + 1; e < s.length; e += 1) {
                            let i = t ? r[e] + l[e] - r[a] < n : r[e] - r[a] < n;
                            i && (o += 1)
                        } else
                            for (let e = a - 1; e >= 0; e -= 1) {
                                let t = r[a] - r[e] < n;
                                t && (o += 1)
                            }
                    return o
                }
                update() {
                    let e;
                    let t = this;
                    if (!t || t.destroyed) return;
                    let {
                        snapGrid: i,
                        params: s
                    } = t;

                    function setTranslate() {
                        let e = t.rtlTranslate ? -1 * t.translate : t.translate,
                            i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                        t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses()
                    }
                    if (s.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
                            e.complete && processLazyPreloader(t, e)
                        }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) setTranslate(), s.autoHeight && t.updateAutoHeight();
                    else {
                        if (("auto" === s.slidesPerView || s.slidesPerView > 1) && t.isEnd && !s.centeredSlides) {
                            let i = t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides;
                            e = t.slideTo(i.length - 1, 0, !1, !0)
                        } else e = t.slideTo(t.activeIndex, 0, !1, !0);
                        e || setTranslate()
                    }
                    s.watchOverflow && i !== t.snapGrid && t.checkOverflow(), t.emit("update")
                }
                changeDirection(e, t = !0) {
                    let i = this.params.direction;
                    return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.el.classList.remove(`${this.params.containerModifierClass}${i}`), this.el.classList.add(`${this.params.containerModifierClass}${e}`), this.emitContainerClasses(), this.params.direction = e, this.slides.forEach(t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    }), this.emit("changeDirection"), t && this.update()), this
                }
                changeLanguageDirection(e) {
                    (!this.rtl || "rtl" !== e) && (this.rtl || "ltr" !== e) && (this.rtl = "rtl" === e, this.rtlTranslate = "horizontal" === this.params.direction && this.rtl, this.rtl ? (this.el.classList.add(`${this.params.containerModifierClass}rtl`), this.el.dir = "rtl") : (this.el.classList.remove(`${this.params.containerModifierClass}rtl`), this.el.dir = "ltr"), this.update())
                }
                mount(e) {
                    let t = this;
                    if (t.mounted) return !0;
                    let i = e || t.params.el;
                    if ("string" == typeof i && (i = document.querySelector(i)), !i) return !1;
                    i.swiper = t, i.shadowEl && (t.isElement = !0);
                    let getWrapperSelector = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,
                        s = (() => {
                            if (i && i.shadowRoot && i.shadowRoot.querySelector) {
                                let e = i.shadowRoot.querySelector(getWrapperSelector());
                                return e
                            }
                            return utils_elementChildren(i, getWrapperSelector())[0]
                        })();
                    return !s && t.params.createElements && (s = function(e, t = []) {
                        let i = document.createElement("div");
                        return i.classList.add(...Array.isArray(t) ? t : [t]), i
                    }(0, t.params.wrapperClass), i.append(s), utils_elementChildren(i, `.${t.params.slideClass}`).forEach(e => {
                        s.append(e)
                    })), Object.assign(t, {
                        el: i,
                        wrapperEl: s,
                        slidesEl: t.isElement ? i : s,
                        mounted: !0,
                        rtl: "rtl" === i.dir.toLowerCase() || "rtl" === elementStyle(i, "direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === elementStyle(i, "direction")),
                        wrongRTL: "-webkit-box" === elementStyle(s, "display")
                    }), !0
                }
                init(e) {
                    let t = this;
                    if (t.initialized) return t;
                    let i = t.mount(e);
                    return !1 === i || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
                        e.complete ? processLazyPreloader(t, e) : e.addEventListener("load", e => {
                            processLazyPreloader(t, e.target)
                        })
                    }), preload(t), t.initialized = !0, preload(t), t.emit("init"), t.emit("afterInit")), t
                }
                destroy(e = !0, t = !0) {
                    let i = this,
                        {
                            params: s,
                            el: r,
                            wrapperEl: l,
                            slides: n
                        } = i;
                    return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttribute("style"), l.removeAttribute("style"), n && n.length && n.forEach(e => {
                        e.classList.remove(s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                    })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
                        i.off(e)
                    }), !1 !== e && (i.el.swiper = null, function(e) {
                        Object.keys(e).forEach(t => {
                            try {
                                e[t] = null
                            } catch (e) {}
                            try {
                                delete e[t]
                            } catch (e) {}
                        })
                    }(i)), i.destroyed = !0), null
                }
                static extendDefaults(e) {
                    utils_extend(p, e)
                }
                static get extendedDefaults() {
                    return p
                }
                static get defaults() {
                    return c
                }
                static installModule(e) {
                    Swiper.prototype.__modules__ || (Swiper.prototype.__modules__ = []);
                    let t = Swiper.prototype.__modules__;
                    "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? e.forEach(e => Swiper.installModule(e)) : Swiper.installModule(e), Swiper
                }
            };

            function components_shared_utils_isObject(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function components_shared_utils_extend(e, t) {
                let i = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter(e => 0 > i.indexOf(e)).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : components_shared_utils_isObject(t[i]) && components_shared_utils_isObject(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : components_shared_utils_extend(e[i], t[i]) : e[i] = t[i]
                })
            }

            function needsNavigation(e = {}) {
                return e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
            }

            function needsPagination(e = {}) {
                return e.pagination && void 0 === e.pagination.el
            }

            function needsScrollbar(e = {}) {
                return e.scrollbar && void 0 === e.scrollbar.el
            }

            function uniqueClasses(e = "") {
                let t = e.split(" ").map(e => e.trim()).filter(e => !!e),
                    i = [];
                return t.forEach(e => {
                    0 > i.indexOf(e) && i.push(e)
                }), i.join(" ")
            }
            Object.keys(u).forEach(e => {
                Object.keys(u[e]).forEach(t => {
                    Swiper.prototype[t] = u[e][t]
                })
            }), Swiper.use([function({
                swiper: e,
                on: t,
                emit: i
            }) {
                let s = ssr_window_esm_getWindow(),
                    r = null,
                    l = null,
                    resizeHandler = () => {
                        e && !e.destroyed && e.initialized && (i("beforeResize"), i("resize"))
                    },
                    createObserver = () => {
                        e && !e.destroyed && e.initialized && (r = new ResizeObserver(t => {
                            l = s.requestAnimationFrame(() => {
                                let {
                                    width: i,
                                    height: s
                                } = e, r = i, l = s;
                                t.forEach(({
                                    contentBoxSize: t,
                                    contentRect: i,
                                    target: s
                                }) => {
                                    s && s !== e.el || (r = i ? i.width : (t[0] || t).inlineSize, l = i ? i.height : (t[0] || t).blockSize)
                                }), (r !== i || l !== s) && resizeHandler()
                            })
                        })).observe(e.el)
                    },
                    removeObserver = () => {
                        l && s.cancelAnimationFrame(l), r && r.unobserve && e.el && (r.unobserve(e.el), r = null)
                    },
                    orientationChangeHandler = () => {
                        e && !e.destroyed && e.initialized && i("orientationchange")
                    };
                t("init", () => {
                    if (e.params.resizeObserver && void 0 !== s.ResizeObserver) {
                        createObserver();
                        return
                    }
                    s.addEventListener("resize", resizeHandler), s.addEventListener("orientationchange", orientationChangeHandler)
                }), t("destroy", () => {
                    removeObserver(), s.removeEventListener("resize", resizeHandler), s.removeEventListener("orientationchange", orientationChangeHandler)
                })
            }, function({
                swiper: e,
                extendParams: t,
                on: i,
                emit: s
            }) {
                let r = [],
                    l = ssr_window_esm_getWindow(),
                    attach = (t, i = {}) => {
                        let n = l.MutationObserver || l.WebkitMutationObserver,
                            a = new n(t => {
                                if (e.__preventObserver__) return;
                                if (1 === t.length) {
                                    s("observerUpdate", t[0]);
                                    return
                                }
                                let observerUpdate = function() {
                                    s("observerUpdate", t[0])
                                };
                                l.requestAnimationFrame ? l.requestAnimationFrame(observerUpdate) : l.setTimeout(observerUpdate, 0)
                            });
                        a.observe(t, {
                            attributes: void 0 === i.attributes || i.attributes,
                            childList: void 0 === i.childList || i.childList,
                            characterData: void 0 === i.characterData || i.characterData
                        }), r.push(a)
                    };
                t({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), i("init", () => {
                    if (e.params.observer) {
                        if (e.params.observeParents) {
                            let t = function(e, t) {
                                let i = [],
                                    s = e.parentElement;
                                for (; s;) t ? s.matches(t) && i.push(s) : i.push(s), s = s.parentElement;
                                return i
                            }(e.el);
                            for (let e = 0; e < t.length; e += 1) attach(t[e])
                        }
                        attach(e.el, {
                            childList: e.params.observeSlideChildren
                        }), attach(e.wrapperEl, {
                            attributes: !1
                        })
                    }
                }), i("destroy", () => {
                    r.forEach(e => {
                        e.disconnect()
                    }), r.splice(0, r.length)
                })
            }]);
            let h = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopedSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideNextClass", "slidePrevClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

            function isChildSwiperSlide(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }
            let updateOnVirtualData = e => {
                e && !e.destroyed && e.params.virtual && (!e.params.virtual || e.params.virtual.enabled) && (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
            };

            function useIsomorphicLayoutEffect(e, t) {
                return "undefined" == typeof window ? (0, n.useEffect)(e, t) : (0, n.useLayoutEffect)(e, t)
            }
            let f = (0, n.createContext)(null),
                m = (0, n.createContext)(null);

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            let g = (0, n.forwardRef)(function(e, t) {
                let {
                    className: i,
                    tag: s = "div",
                    wrapperTag: r = "div",
                    children: l,
                    onSwiper: a,
                    ...o
                } = void 0 === e ? {} : e, d = !1, [c, u] = (0, n.useState)("swiper"), [p, f] = (0, n.useState)(null), [g, v] = (0, n.useState)(!1), w = (0, n.useRef)(!1), S = (0, n.useRef)(null), b = (0, n.useRef)(null), T = (0, n.useRef)(null), y = (0, n.useRef)(null), _ = (0, n.useRef)(null), x = (0, n.useRef)(null), E = (0, n.useRef)(null), C = (0, n.useRef)(null), {
                    params: P,
                    passedParams: M,
                    rest: O,
                    events: L
                } = function(e = {}, t = !0) {
                    let i = {
                            on: {}
                        },
                        s = {},
                        r = {};
                    components_shared_utils_extend(i, Swiper.defaults), components_shared_utils_extend(i, Swiper.extendedDefaults), i._emitClasses = !0, i.init = !1;
                    let l = {},
                        n = h.map(e => e.replace(/_/, "")),
                        a = Object.assign({}, e);
                    return Object.keys(a).forEach(a => {
                        void 0 !== e[a] && (n.indexOf(a) >= 0 ? components_shared_utils_isObject(e[a]) ? (i[a] = {}, r[a] = {}, components_shared_utils_extend(i[a], e[a]), components_shared_utils_extend(r[a], e[a])) : (i[a] = e[a], r[a] = e[a]) : 0 === a.search(/on[A-Z]/) && "function" == typeof e[a] ? t ? s[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : i.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : l[a] = e[a])
                    }), ["navigation", "pagination", "scrollbar"].forEach(e => {
                        !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e]
                    }), {
                        params: i,
                        passedParams: r,
                        rest: l,
                        events: s
                    }
                }(o), {
                    slides: k,
                    slots: z
                } = function(e) {
                    let t = [],
                        i = {
                            "container-start": [],
                            "container-end": [],
                            "wrapper-start": [],
                            "wrapper-end": []
                        };
                    return n.Children.toArray(e).forEach(e => {
                        if (isChildSwiperSlide(e)) t.push(e);
                        else if (e.props && e.props.slot && i[e.props.slot]) i[e.props.slot].push(e);
                        else if (e.props && e.props.children) {
                            let s = function processChildren(e) {
                                let t = [];
                                return n.Children.toArray(e).forEach(e => {
                                    isChildSwiperSlide(e) ? t.push(e) : e.props && e.props.children && processChildren(e.props.children).forEach(e => t.push(e))
                                }), t
                            }(e.props.children);
                            s.length > 0 ? s.forEach(e => t.push(e)) : i["container-end"].push(e)
                        } else i["container-end"].push(e)
                    }), {
                        slides: t,
                        slots: i
                    }
                }(l), onBeforeBreakpoint = () => {
                    v(!g)
                };
                Object.assign(P.on, {
                    _containerClasses(e, t) {
                        u(t)
                    }
                });
                let initSwiper = () => {
                    Object.assign(P.on, L), d = !0;
                    let e = { ...P
                    };
                    if (delete e.wrapperClass, b.current = new Swiper(e), b.current.virtual && b.current.params.virtual.enabled) {
                        b.current.virtual.slides = k;
                        let e = {
                            cache: !1,
                            slides: k,
                            renderExternal: f,
                            renderExternalUpdate: !1
                        };
                        components_shared_utils_extend(b.current.params.virtual, e), components_shared_utils_extend(b.current.originalParams.virtual, e)
                    }
                };
                S.current || initSwiper(), b.current && b.current.on("_beforeBreakpoint", onBeforeBreakpoint);
                let attachEvents = () => {
                        !d && L && b.current && Object.keys(L).forEach(e => {
                            b.current.on(e, L[e])
                        })
                    },
                    detachEvents = () => {
                        L && b.current && Object.keys(L).forEach(e => {
                            b.current.off(e, L[e])
                        })
                    };
                return (0, n.useEffect)(() => () => {
                    b.current && b.current.off("_beforeBreakpoint", onBeforeBreakpoint)
                }), (0, n.useEffect)(() => {
                    !w.current && b.current && (b.current.emitSlidesClasses(), w.current = !0)
                }), useIsomorphicLayoutEffect(() => {
                    if (t && (t.current = S.current), S.current) return b.current.destroyed && initSwiper(),
                        function({
                            el: e,
                            nextEl: t,
                            prevEl: i,
                            paginationEl: s,
                            scrollbarEl: r,
                            swiper: l
                        }, n) {
                            needsNavigation(n) && t && i && (l.params.navigation.nextEl = t, l.originalParams.navigation.nextEl = t, l.params.navigation.prevEl = i, l.originalParams.navigation.prevEl = i), needsPagination(n) && s && (l.params.pagination.el = s, l.originalParams.pagination.el = s), needsScrollbar(n) && r && (l.params.scrollbar.el = r, l.originalParams.scrollbar.el = r), l.init(e)
                        }({
                            el: S.current,
                            nextEl: _.current,
                            prevEl: x.current,
                            paginationEl: E.current,
                            scrollbarEl: C.current,
                            swiper: b.current
                        }, P), a && a(b.current), () => {
                            b.current && !b.current.destroyed && b.current.destroy(!0, !1)
                        }
                }, []), useIsomorphicLayoutEffect(() => {
                    attachEvents();
                    let e = function(e, t, i, s, r) {
                        let l = [];
                        if (!t) return l;
                        let addKey = e => {
                            0 > l.indexOf(e) && l.push(e)
                        };
                        if (i && s) {
                            let e = s.map(r),
                                t = i.map(r);
                            e.join("") !== t.join("") && addKey("children"), s.length !== i.length && addKey("children")
                        }
                        let n = h.filter(e => "_" === e[0]).map(e => e.replace(/_/, ""));
                        return n.forEach(i => {
                            if (i in e && i in t) {
                                if (components_shared_utils_isObject(e[i]) && components_shared_utils_isObject(t[i])) {
                                    let s = Object.keys(e[i]),
                                        r = Object.keys(t[i]);
                                    s.length !== r.length ? addKey(i) : (s.forEach(s => {
                                        e[i][s] !== t[i][s] && addKey(i)
                                    }), r.forEach(s => {
                                        e[i][s] !== t[i][s] && addKey(i)
                                    }))
                                } else e[i] !== t[i] && addKey(i)
                            }
                        }), l
                    }(M, T.current, k, y.current, e => e.key);
                    return T.current = M, y.current = k, e.length && b.current && !b.current.destroyed && function({
                        swiper: e,
                        slides: t,
                        passedParams: i,
                        changedParams: s,
                        nextEl: r,
                        prevEl: l,
                        scrollbarEl: n,
                        paginationEl: a
                    }) {
                        let o, d, c, u, p, h, f, m;
                        let g = s.filter(e => "children" !== e && "direction" !== e && "wrapperClass" !== e),
                            {
                                params: v,
                                pagination: w,
                                navigation: S,
                                scrollbar: b,
                                virtual: T,
                                thumbs: y
                            } = e;
                        s.includes("thumbs") && i.thumbs && i.thumbs.swiper && v.thumbs && !v.thumbs.swiper && (o = !0), s.includes("controller") && i.controller && i.controller.control && v.controller && !v.controller.control && (d = !0), s.includes("pagination") && i.pagination && (i.pagination.el || a) && (v.pagination || !1 === v.pagination) && w && !w.el && (c = !0), s.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || n) && (v.scrollbar || !1 === v.scrollbar) && b && !b.el && (u = !0), s.includes("navigation") && i.navigation && (i.navigation.prevEl || l) && (i.navigation.nextEl || r) && (v.navigation || !1 === v.navigation) && S && !S.prevEl && !S.nextEl && (p = !0);
                        let destroyModule = t => {
                            e[t] && (e[t].destroy(), "navigation" === t ? (e.isElement && (e[t].prevEl.remove(), e[t].nextEl.remove()), v[t].prevEl = void 0, v[t].nextEl = void 0, e[t].prevEl = void 0, e[t].nextEl = void 0) : (e.isElement && e[t].el.remove(), v[t].el = void 0, e[t].el = void 0))
                        };
                        if (s.includes("loop") && e.isElement && (v.loop && !i.loop ? h = !0 : !v.loop && i.loop ? f = !0 : m = !0), g.forEach(e => {
                                if (components_shared_utils_isObject(v[e]) && components_shared_utils_isObject(i[e])) components_shared_utils_extend(v[e], i[e]), ("navigation" === e || "pagination" === e || "scrollbar" === e) && "enabled" in i[e] && !i[e].enabled && destroyModule(e);
                                else {
                                    let t = i[e];
                                    (!0 === t || !1 === t) && ("navigation" === e || "pagination" === e || "scrollbar" === e) ? !1 === t && destroyModule(e): v[e] = i[e]
                                }
                            }), g.includes("controller") && !d && e.controller && e.controller.control && v.controller && v.controller.control && (e.controller.control = v.controller.control), s.includes("children") && t && T && v.virtual.enabled && (T.slides = t, T.update(!0)), s.includes("children") && t && v.loop && (m = !0), o) {
                            let e = y.init();
                            e && y.update(!0)
                        }
                        d && (e.controller.control = v.controller.control), c && (e.isElement && (!a || "string" == typeof a) && ((a = document.createElement("div")).classList.add("swiper-pagination"), e.el.shadowEl.appendChild(a)), a && (v.pagination.el = a), w.init(), w.render(), w.update()), u && (e.isElement && (!n || "string" == typeof n) && ((n = document.createElement("div")).classList.add("swiper-scrollbar"), e.el.shadowEl.appendChild(n)), n && (v.scrollbar.el = n), b.init(), b.updateSize(), b.setTranslate()), p && (e.isElement && (r && "string" != typeof r || ((r = document.createElement("div")).classList.add("swiper-button-next"), e.el.shadowEl.appendChild(r)), l && "string" != typeof l || ((l = document.createElement("div")).classList.add("swiper-button-prev"), e.el.shadowEl.appendChild(l))), r && (v.navigation.nextEl = r), l && (v.navigation.prevEl = l), S.init(), S.update()), s.includes("allowSlideNext") && (e.allowSlideNext = i.allowSlideNext), s.includes("allowSlidePrev") && (e.allowSlidePrev = i.allowSlidePrev), s.includes("direction") && e.changeDirection(i.direction, !1), (h || m) && e.loopDestroy(), (f || m) && e.loopCreate(), e.update()
                    }({
                        swiper: b.current,
                        slides: k,
                        passedParams: M,
                        changedParams: e,
                        nextEl: _.current,
                        prevEl: x.current,
                        scrollbarEl: C.current,
                        paginationEl: E.current
                    }), () => {
                        detachEvents()
                    }
                }), useIsomorphicLayoutEffect(() => {
                    updateOnVirtualData(b.current)
                }, [p]), n.createElement(s, _extends({
                    ref: S,
                    className: uniqueClasses(`${c}${i?` ${i}`:""}`)
                }, O), n.createElement(m.Provider, {
                    value: b.current
                }, z["container-start"], n.createElement(r, {
                    className: function(e = "") {
                        return e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
                    }(P.wrapperClass)
                }, z["wrapper-start"], P.virtual ? function(e, t, i) {
                    if (!i) return null;
                    let getSlideIndex = e => {
                            let i = e;
                            return e < 0 ? i = t.length + e : i >= t.length && (i -= t.length), i
                        },
                        s = e.isHorizontal() ? {
                            [e.rtlTranslate ? "right" : "left"]: `${i.offset}px`
                        } : {
                            top: `${i.offset}px`
                        },
                        {
                            from: r,
                            to: l
                        } = i,
                        a = e.params.loop ? -t.length : 0,
                        o = e.params.loop ? 2 * t.length : t.length,
                        d = [];
                    for (let e = a; e < o; e += 1) e >= r && e <= l && d.push(t[getSlideIndex(e)]);
                    return d.map((t, i) => n.cloneElement(t, {
                        swiper: e,
                        style: s,
                        key: `slide-${i}`
                    }))
                }(b.current, k, p) : k.map((e, t) => n.cloneElement(e, {
                    swiper: b.current,
                    swiperSlideIndex: t
                })), z["wrapper-end"]), needsNavigation(P) && n.createElement(n.Fragment, null, n.createElement("div", {
                    ref: x,
                    className: "swiper-button-prev"
                }), n.createElement("div", {
                    ref: _,
                    className: "swiper-button-next"
                })), needsScrollbar(P) && n.createElement("div", {
                    ref: C,
                    className: "swiper-scrollbar"
                }), needsPagination(P) && n.createElement("div", {
                    ref: E,
                    className: "swiper-pagination"
                }), z["container-end"]))
            });

            function swiper_slide_extends() {
                return (swiper_slide_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            g.displayName = "Swiper";
            let v = (0, n.forwardRef)(function(e, t) {
                let {
                    tag: i = "div",
                    children: s,
                    className: r = "",
                    swiper: l,
                    zoom: a,
                    lazy: o,
                    virtualIndex: d,
                    swiperSlideIndex: c,
                    ...u
                } = void 0 === e ? {} : e, p = (0, n.useRef)(null), [h, m] = (0, n.useState)("swiper-slide"), [g, v] = (0, n.useState)(!1);

                function updateClasses(e, t, i) {
                    t === p.current && m(i)
                }
                useIsomorphicLayoutEffect(() => {
                    if (void 0 !== c && (p.current.swiperSlideIndex = c), t && (t.current = p.current), p.current && l) {
                        if (l.destroyed) {
                            "swiper-slide" !== h && m("swiper-slide");
                            return
                        }
                        return l.on("_slideClass", updateClasses), () => {
                            l && l.off("_slideClass", updateClasses)
                        }
                    }
                }), useIsomorphicLayoutEffect(() => {
                    l && p.current && !l.destroyed && m(l.getSlideClasses(p.current))
                }, [l]);
                let w = {
                        isActive: h.indexOf("swiper-slide-active") >= 0,
                        isVisible: h.indexOf("swiper-slide-visible") >= 0,
                        isPrev: h.indexOf("swiper-slide-prev") >= 0,
                        isNext: h.indexOf("swiper-slide-next") >= 0
                    },
                    renderChildren = () => "function" == typeof s ? s(w) : s;
                return n.createElement(i, swiper_slide_extends({
                    ref: p,
                    className: uniqueClasses(`${h}${r?` ${r}`:""}`),
                    "data-swiper-slide-index": d,
                    onLoad: () => {
                        v(!0)
                    }
                }, u), a && n.createElement(f.Provider, {
                    value: w
                }, n.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof a ? a : void 0
                }, renderChildren(), o && !g && n.createElement("div", {
                    className: "swiper-lazy-preloader"
                }))), !a && n.createElement(f.Provider, {
                    value: w
                }, renderChildren(), o && !g && n.createElement("div", {
                    className: "swiper-lazy-preloader"
                })))
            });
            v.displayName = "SwiperSlide"
        }
    }
]);
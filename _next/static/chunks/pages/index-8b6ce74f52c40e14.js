(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8312: function(e, t, l) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return l(5261)
            }])
        },
        8454: function(e, t, l) {
            "use strict";
            l.d(t, {
                Z: function() {
                    return Card
                }
            });
            var n = l(5893),
                s = l(7246),
                a = l(3967),
                r = l.n(a),
                i = l(8439),
                o = l(8688);
            let Card = e => {
                let {
                    className: t,
                    imgClassName: l,
                    title: a,
                    description: c,
                    initial: x,
                    onscreen: p,
                    buttonProps: d
                } = e;
                return (0, n.jsx)(i.E.div, {
                    className: r()("lg:min-h-[700px]", t),
                    whileInView: { ...p,
                        transition: o.s.transitions.longSpring(p.transition)
                    },
                    viewport: o.s.viewport,
                    initial: x,
                    children: (0, n.jsxs)("div", {
                        className: "group flex w-full flex-col lg:w-[312px] xl:w-[392px]",
                        children: [(0, n.jsx)("div", {
                            className: "relative flex h-[376px] w-full flex-col justify-end overflow-hidden lg:h-[451px]",
                            children: (0, n.jsx)("div", {
                                className: r()("s-full absolute overflow-hidden bg-cover bg-center bg-no-repeat transition duration-500 group-hover:scale-subtle", l)
                            })
                        }), (0, n.jsxs)("div", {
                            className: "flex w-full flex-col",
                            children: [(0, n.jsx)("h3", {
                                className: "text-mh4 lg:text-h4 mt-11",
                                children: a
                            }), (0, n.jsx)("p", {
                                className: "text-b2 mt-6 font-[200]",
                                children: c
                            }), d && (0, n.jsx)(s.F, {
                                className: "mt-11",
                                ...d
                            })]
                        })]
                    })
                })
            }
        },
        7574: function(e, t, l) {
            "use strict";
            l.d(t, {
                u: function() {
                    return ParallaxItemWrapper
                }
            });
            var n = l(5893),
                s = l(8828),
                a = l(4002),
                r = l(8439),
                i = l(3967),
                o = l.n(i),
                c = l(230);
            let ParallaxItemWrapper = e => {
                let {
                    children: t,
                    index: l,
                    offset: i,
                    final: x,
                    initial: p,
                    scrollY: d,
                    className: u
                } = e, g = (0, c.A)("lg"), m = (0, s.H)(d, [p, x - (g && 1 === l ? 200 : 0)], [i, -i]), h = (0, a.q)(m, {
                    stiffness: 1e3,
                    damping: 90
                });
                return (0, n.jsx)(r.E.div, {
                    style: {
                        y: h
                    },
                    className: o()("z-[3] w-full flex-col", u),
                    children: t
                }, l)
            }
        },
        532: function(e, t, l) {
            "use strict";
            l.d(t, {
                g: function() {
                    return Testimonial
                }
            });
            var n = l(5893),
                s = l(5675),
                a = l.n(s),
                r = l(8439),
                i = l(8688);
            let Testimonial = e => {
                let {
                    imgSrc: t,
                    imgAlt: l,
                    name: s,
                    description: o,
                    quote: c,
                    controls: x,
                    withAnimation: p = !1,
                    overrideClassName: d = null,
                    overrideWidth: u = null,
                    overrideHeight: g = null
                } = e;
                return (0, n.jsxs)("div", {
                    className: "flex flex-col gap-[70px] lg:flex-row lg:gap-0",
                    children: [(0, n.jsxs)(r.E.div, { ...p && i.s.fadeIn({
                            delay: 1,
                            index: 0
                        }),
                        className: "flex gap-9 lg:flex-1 lg:flex-col lg:gap-[67px]",
                        children: [(0, n.jsx)(a(), {
                            className: d || "h-[94px] w-[94px]",
                            src: t,
                            alt: l,
                            width: u || 94,
                            height: g || 94
                        }), (0, n.jsxs)("div", {
                            className: "flex flex-col justify-between gap-4 text-xl lg:justify-start lg:gap-11",
                            children: [s && (0, n.jsx)("span", {
                                className: "text-b1 lg:text-h3 whitespace-break-spaces",
                                children: s
                            }), o && (0, n.jsx)("span", {
                                className: "text-b2 whitespace-break-spaces",
                                children: o
                            })]
                        })]
                    }), (0, n.jsxs)(r.E.div, { ...p && i.s.fadeIn({
                            delay: 1.4,
                            index: 1
                        }),
                        className: "flex flex-col gap-[60px] lg:flex-1",
                        children: [(0, n.jsxs)("p", {
                            className: "text-mquote lg:text-quote",
                            children: ['"', c, '"']
                        }), x]
                    })]
                })
            }
        },
        8524: function(e, t, l) {
            "use strict";
            l.d(t, {
                g: function() {
                    return CardsSection
                }
            });
            var n = l(5893),
                s = l(7294),
                a = l(8146),
                r = l(8439),
                i = l(7574),
                o = l(7429),
                c = l(3967),
                x = l.n(c);
            let CardsSection = e => {
                let {
                    titleParts: t,
                    children: l,
                    className: c
                } = e, p = (0, s.useRef)(null), {
                    scrollY: d,
                    initial: u,
                    final: g,
                    offset: m
                } = (0, o.Y)({
                    ref: p
                });
                return (0, n.jsx)(r.E.div, {
                    className: x()("relative mb-[-600px] flex w-full flex-col items-center", c),
                    children: (0, n.jsxs)(r.E.div, {
                        ref: p,
                        className: "z-[1] flex w-full flex-wrap justify-center gap-20 lg:gap-8",
                        children: [(0, n.jsx)("div", {
                            className: "text-mh2 lg:text-h2 z-[2] flex flex-col whitespace-break-spaces text-center lg:mb-[300px] lg:w-full",
                            children: (0, n.jsx)(a.V, {
                                parts: t
                            })
                        }), l.map((e, t) => (0, n.jsx)(i.u, {
                            index: t,
                            offset: m,
                            final: g,
                            initial: u,
                            scrollY: d,
                            className: "lg:w-[312px] xl:w-[392px]",
                            children: e
                        }, t))]
                    })
                })
            }
        },
        7429: function(e, t, l) {
            "use strict";
            l.d(t, {
                Y: function() {
                    return useParallax
                }
            });
            var n = l(7294),
                s = l(9645);
            let useParallax = e => {
                let {
                    ref: t
                } = e, [l, a] = (0, n.useState)(0), [r, i] = (0, n.useState)(0), {
                    scrollY: o
                } = (0, s.v)();
                return (0, n.useLayoutEffect)(() => {
                    let onResize = () => {
                        var e;
                        let l = t.current;
                        if (!l) return;
                        let n = null !== (e = null == l ? void 0 : l.getBoundingClientRect().top) && void 0 !== e ? e : 0;
                        a(n + window.scrollY || window.scrollY), i(window.innerHeight)
                    };
                    return onResize(), window.addEventListener("resize", onResize), () => window.removeEventListener("resize", onResize)
                }, [t]), {
                    scrollY: o,
                    initial: l - r,
                    final: l + 300,
                    offset: 300
                }
            }
        },
        5261: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return pages
                }
            });
            var n = l(5893),
                s = l(5620),
                a = l(8439),
                r = l(2878),
                i = l(3967),
                o = l.n(i),
                c = l(9604);
            let FormlessTrademark = e => (0, n.jsx)("svg", {
                width: "45",
                height: "23",
                viewBox: "0 0 45 23",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: (0, n.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0.389771 0.480957V4.58036H7.03572V22.655H11.9156V4.58036H18.5615V0.480957H0.389771ZM33.1563 15.7321L27.9781 0.480957H21.1072V22.655H25.671V7.0959H25.7354L31.1728 22.655H34.9325L40.3699 6.94321H40.4343V22.655H44.9994V0.480957H38.1348L33.2157 15.7321H33.1563Z",
                    fill: "white"
                })
            });
            var x = l(8688),
                p = l(665);
            let AnimatedLogo = e => {
                let {
                    className: t
                } = e, l = (0, p.r9)();
                return (0, n.jsxs)(a.E.div, { ...x.s.fadeIn({
                        delay: l
                    }),
                    viewport: {
                        amount: .5,
                        margin: "-160px 0px 0px 0px"
                    },
                    className: o()("flex items-center justify-between gap-12", t),
                    children: [(0, n.jsx)(r.K, {
                        className: "h-auto lg:w-[158px] xl:w-[178px]"
                    }), (0, n.jsxs)("div", {
                        className: "flex text-light",
                        children: [(0, n.jsx)(c.W, {
                            delay: l,
                            className: "lg:max-w-[720px] xl:max-w-[915px]"
                        }), (0, n.jsx)(a.E.div, {
                            className: "ml-3",
                            ...x.s.fadeIn({
                                delay: l + 1
                            }),
                            children: (0, n.jsx)(FormlessTrademark, {})
                        })]
                    })]
                })
            };
            var d = l(8454),
                u = l(7045),
                g = l(532),
                m = l(8524);
            let Banner = e => {
                let {
                    count: t,
                    title: l,
                    description: s,
                    isActive: r
                } = e;
                return r && (0, n.jsxs)(a.E.div, {
                    animate: {
                        opacity: 1,
                        transition: x.s.transitions.longSpring()
                    },
                    initial: {
                        opacity: 0
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "flex flex-1 flex-col gap-6 lg:max-w-[350px] lg:gap-[100px] xl:max-w-[392px] xl:gap-[120px]",
                    children: [(0, n.jsx)("div", {
                        className: "font-neue text-[100px] font-medium leading-none lg:text-[230px]",
                        children: t
                    }), (0, n.jsxs)("div", {
                        className: "flex w-full flex-col gap-3 lg:gap-12",
                        children: [(0, n.jsx)("h3", {
                            className: "text-mh4 lg:text-h4",
                            children: l
                        }), s.map(e => (0, n.jsx)("p", {
                            className: "text-b2",
                            children: e
                        }, e[0]))]
                    })]
                })
            };
            var h = l(9645),
                f = l(1526),
                w = l(7294),
                v = l(230),
                j = l(9260),
                y = l(5183),
                b = l(544);
            let N = [{
                    count: "01",
                    title: "SHARE Protocol and API",
                    description: ["SHARE Protocol is a set of micropayment and revenue sharing smart contracts built for EVM (Ethereum) compatible blockchains, currently deployed on Base Network.", "Our APIs enable you to create and integrate revenue sharing into your products and experiences to increase customer engagement and lifetime value."]
                }, {
                    count: "02",
                    title: "share.stream",
                    description: ["A next-generation direct-to-consumer streaming platform powered by SHARE Protocol.", "See SHARE Protocol in action as creators and fans participate in a unified system of value sharing."]
                }, {
                    count: "03",
                    title: "Consulting Services",
                    description: ["Expert guidance for smart contract integrations and product integrations using SHARE Protocol.", "We help you implement crypto technologies and build community-owned economic systems to supercharge your business goals."]
                }],
                getArrayIndex = (e, t) => {
                    let l = Math.floor(e * t.length);
                    return l === t.length ? t.length - 1 : l
                },
                HowItWorks = () => {
                    let e = (0, v.A)("lg"),
                        t = (0, w.useRef)(null),
                        l = (0, j.useLottie)({
                            animationData: y,
                            autoplay: !1
                        }),
                        [s, r] = (0, w.useState)(0),
                        {
                            scrollYProgress: i
                        } = (0, h.v)({
                            target: t
                        });
                    return (0, w.useEffect)(() => {
                        let e = i.on("change", e => {
                            let t = y.op,
                                n = Math.round(t * e);
                            l.goToAndStop(n, !0), r(getArrayIndex(e, N))
                        });
                        return () => {
                            e()
                        }
                    }, [l, i]), (0, n.jsxs)("div", {
                        ref: t,
                        className: "min-h-[2000px] w-full pb-[100px] pt-[50px] lg:min-h-[3000px] lg:pb-[200px] lg:pt-[82px]",
                        children: [(0, n.jsx)(b.t, {}), (0, n.jsxs)("div", {
                            className: "sticky top-1/2 mb-[-306px] mt-[306px] flex h-[622px] w-full translate-y-[-50%] flex-col justify-between gap-6 lg:flex-row lg:gap-20",
                            children: [(0, n.jsx)("div", {
                                className: "lg:flex-center",
                                children: (0, n.jsx)("div", {
                                    className: "h-auto max-w-[180px] lg:max-w-[530px] xl:max-w-[530px]",
                                    children: l.View
                                })
                            }), (0, n.jsxs)("div", {
                                className: "flex h-full flex-1 flex-col-reverse justify-between gap-6 lg:max-w-[500px] lg:flex-row lg:gap-12",
                                children: [(0, n.jsx)(f.M, {
                                    children: N.map((e, t) => (0, n.jsx)(Banner, {
                                        isActive: t === s,
                                        ...e
                                    }, e.count))
                                }), (0, n.jsx)("div", {
                                    className: "flex gap-[17px] self-start lg:flex-col",
                                    children: N.map((t, l) => {
                                        let {
                                            count: r
                                        } = t, i = l === s;
                                        return (0, n.jsx)(a.E.div, {
                                            animate: {
                                                opacity: i ? 1 : .4,
                                                height: e ? i ? 188 : 135 : 1,
                                                width: e ? 1 : i ? "30vw" : "15vw"
                                            },
                                            className: "bg-light"
                                        }, r)
                                    })
                                })]
                            })]
                        })]
                    })
                };
            var k = l(341),
                E = l(5878),
                H = l(2072),
                P = l(8146),
                S = l(1664),
                A = l.n(S);
            let LinkButton = e => {
                let {
                    variant: t,
                    label: l,
                    href: s,
                    onMouseEnter: a,
                    onMouseLeave: r,
                    className: i,
                    ...c
                } = e;
                return (0, n.jsx)(A(), {
                    onMouseEnter: a,
                    onMouseLeave: r,
                    href: s,
                    className: o()("text-button group flex h-auto items-center justify-center overflow-hidden px-6 py-3 outline-none transition duration-300", {
                        "rounded-full border border-light bg-transparent hover:bg-light hover:text-dark": "primary" === t,
                        "rounded-full border border-light bg-light shadow-none hover:bg-light/5": "secondary" === t
                    }, i),
                    ...c,
                    children: (0, n.jsx)("span", {
                        className: o()("text-base transition duration-200", {
                            "text-light group-hover:text-dark group-hover:[&>svg>line]:stroke-black": "primary" === t,
                            "text-dark group-hover:[&>svg>line]:stroke-light": "secondary" === t
                        }),
                        children: l
                    })
                })
            };
            var pages = () => {
                let e = (0, p.r9)();
                return (0, n.jsxs)(E.F, {
                    children: [(0, n.jsx)(H.P, {
                        title: "Home"
                    }), (0, n.jsx)(s.l0, {
                        id: "home",
                        children: (0, n.jsxs)("div", {
                            className: "container min-h-screen gap-12 lg:pt-[max(calc(50vh-200px),125px)]",
                            children: [(0, n.jsxs)("div", {
                                className: "my-4 flex flex-1 flex-col justify-center gap-y-12 lg:flex-none lg:flex-row lg:items-end lg:justify-between",
                                children: [(0, n.jsx)("h1", {
                                    className: "text-mh1 lg:text-h3 sm:whitespace-break-spaces lg:max-w-[600px]",
                                    children: (0, n.jsx)(P.V, {
                                        parts: ["Welcome to the", " future of", " the internet"],
                                        transition: {
                                            baseDelay: e
                                        }
                                    })
                                }), (0, n.jsx)(k.z, {
                                    delay: e + 1.5,
                                    children: "From cutting edge smart contracts to stablecoin payments and revenue sharing technology, our services help you reimagine monetization and community ownership in the new digital economy."
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "mb-[100px] mt-auto flex flex-col gap-6 lg:flex-row lg:gap-8",
                                children: [(0, n.jsx)(LinkButton, {
                                    href: "https://docs.formless.xyz",
                                    variant: "primary",
                                    label: "View API Documentation",
                                    className: "h-[60px] px-8 text-lg",
                                    target: "_blank",
                                    rel: "noreferrer noopener"
                                }), (0, n.jsx)(LinkButton, {
                                    href: "https://share.stream",
                                    variant: "secondary",
                                    label: "Visit share.stream",
                                    className: "h-[60px] px-8 text-lg",
                                    target: "_blank",
                                    rel: "noreferrer noopener"
                                })]
                            }), (0, n.jsx)(AnimatedLogo, {
                                className: "mb-12 mt-12 hidden lg:flex"
                            })]
                        })
                    }), (0, n.jsx)("div", {
                        className: "section container",
                        children: (0, n.jsx)(HowItWorks, {})
                    }), (0, n.jsx)(s.iv, {
                        id: "products",
                        className: "h-[calc(100%-200px)]",
                        children: (0, n.jsx)("section", {
                            className: "section container !pt-0",
                            children: (0, n.jsxs)(m.g, {
                                titleParts: ["Be your own platform.", "Share freely and fairly.", "Participate, and own a piece."],
                                className: "!mb-[-450px] lg:!mb-[-250px]",
                                children: [(0, n.jsx)(d.Z, {
                                    imgClassName: "bg-[url('/cards/developers.webp')]",
                                    initial: {
                                        y: -150,
                                        opacity: 1
                                    },
                                    onscreen: {
                                        y: -150,
                                        opacity: 1,
                                        transition: {
                                            delay: 0
                                        }
                                    },
                                    title: "SHARE Protocol and API",
                                    description: "Increase customer engagement and lifetime value with revenue sharing technology.",
                                    buttonProps: {
                                        buttonText: "View Documentation",
                                        href: "https://docs.formless.xyz",
                                        target: "_blank",
                                        rel: "noreferrer noopener"
                                    }
                                }), (0, n.jsx)(d.Z, {
                                    imgClassName: "bg-[url('/cards/formless-creator.jpg')]",
                                    initial: {
                                        y: -150,
                                        opacity: 1
                                    },
                                    onscreen: {
                                        y: -150,
                                        opacity: 1,
                                        transition: {
                                            delay: 0
                                        }
                                    },
                                    title: "share.stream",
                                    description: "A direct-to-fan streaming platform where fans support creators and earn when they succeed. See SHARE Protocol in action.",
                                    className: "lg:mt-[-130px]",
                                    buttonProps: {
                                        buttonText: "Visit share.stream",
                                        href: "https://share.stream",
                                        target: "_blank",
                                        rel: "noreferrer noopener"
                                    }
                                }), (0, n.jsx)(d.Z, {
                                    imgClassName: "bg-[url('/cards/participants.webp')]",
                                    initial: {
                                        y: -150,
                                        opacity: 1
                                    },
                                    onscreen: {
                                        y: -150,
                                        opacity: 1,
                                        transition: {
                                            delay: 0
                                        }
                                    },
                                    title: "Consulting Services",
                                    description: "Take your product experience to the next level with our expert guidance on integrating crypto technologies.",
                                    className: "lg:mt-[-70px]",
                                    buttonProps: {
                                        buttonText: "Schedule a Meeting",
                                        href: "https://calendly.com/jason-formless",
                                        target: "_blank",
                                        rel: "noreferrer noopener"
                                    }
                                })]
                            })
                        })
                    }), (0, n.jsxs)("section", {
                        className: "section container gap-[70px] pb-[100px] lg:gap-[164px] lg:pt-0",
                        children: [(0, n.jsx)(u.k, {
                            titleParts: ["Illuminating true", "human purpose", "through technology"]
                        }), (0, n.jsx)(g.g, {
                            name: (0, n.jsxs)(n.Fragment, {
                                children: ["Brandon ", (0, n.jsx)("br", {}), "Thorpe"]
                            }),
                            description: "Founder, FORMLESS",
                            imgSrc: "/founders/brandon.jpg",
                            imgAlt: "Brandon Thorpe",
                            overrideClassName: "w-[300px]",
                            overrideWidth: 300,
                            overrideHeight: 300,
                            withAnimation: !0,
                            quote: "The future of commerce and culture is participation with purpose, not simply consumption."
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [296, 863, 675, 530, 260, 878, 594, 774, 888, 179], function() {
            return e(e.s = 8312)
        }), _N_E = e.O()
    }
]);
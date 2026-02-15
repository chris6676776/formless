(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [552], {
        4183: function(e, a, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/about-us", function() {
                return t(4421)
            }])
        },
        6639: function(e, a, t) {
            "use strict";
            t.d(a, {
                e: function() {
                    return ArrowIcon
                }
            });
            var n = t(5893);
            let ArrowIcon = e => (0, n.jsx)("svg", {
                width: "20",
                height: "18",
                viewBox: "0 0 20 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: (0, n.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18.2321 1H18.2646V17.5H19.2646V0.5V0H18.7646H1.76465V1H16.8179L0.632737 17.1852L1.33984 17.8923L18.2321 1Z",
                    fill: "currentColor"
                })
            })
        },
        2567: function(e, a, t) {
            "use strict";
            t.d(a, {
                C: function() {
                    return SpotlightSection
                }
            });
            var n = t(5893),
                s = t(3967),
                r = t.n(s);
            let parseClassName = e => e && "string" != typeof e ? e : {
                    root: e
                },
                SpotlightSection = e => {
                    let {
                        title: a,
                        description: t,
                        className: s,
                        children: i
                    } = e, l = parseClassName(s);
                    return (0, n.jsxs)("div", {
                        className: r()("flex flex-col gap-[45px] lg:flex-row lg:items-end xl:gap-[106px]", l.root),
                        children: [i, (0, n.jsxs)("div", {
                            className: r()("flex flex-col gap-[45px] lg:flex-1", l.container),
                            children: [(0, n.jsx)("div", {
                                className: "text-mh3 lg:text-h3",
                                children: a
                            }), (0, n.jsx)("div", {
                                className: "text-b2",
                                children: t
                            })]
                        })]
                    })
                }
        },
        4421: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return about_us
                }
            });
            var n = t(5893),
                s = t(8146),
                r = t(7045),
                i = t(9775),
                l = t(6639),
                o = t(8688),
                d = t(3967),
                c = t.n(d),
                h = t(8439),
                x = t(7294);
            t(2261);
            var p = t(2379);
            let ReadMore = e => {
                let {
                    className: a,
                    children: t = "Read More",
                    onClick: s
                } = e, [r, i] = (0, x.useState)(!1);
                return (0, n.jsxs)("div", {
                    className: c()("flex w-fit cursor-pointer flex-col items-center", a),
                    onClick: s,
                    onMouseEnter: () => i(!0),
                    onMouseLeave: () => i(!1),
                    children: [(0, n.jsx)("div", {
                        className: "text-button flex items-center justify-center overflow-hidden pb-2.5",
                        children: t
                    }), (0, n.jsx)(h.E.div, {
                        className: "flex h-px w-full self-start bg-light",
                        animate: {
                            width: r ? "100%" : 0
                        }
                    })]
                })
            };
            var u = t(5675),
                m = t.n(u);
            let g = [{
                    name: "Brandon Thorpe",
                    position: "Founder / CTO",
                    image: "/founders/brandon-horizontal.jpg",
                    description: "Brandon founded Formless with the belief that creativity and technology are one and the same. In his previous role as a Staff Engineer at Google AI, Brandon led a team of engineers at the intersection of Research and Machine Intelligence (RMI) and Search. Prior to that, he was a Senior Engineer at Apple in Cupertino working on multiple releases of iOS during the company's historic rise to a $1 trillion valuation. In the music industry, Brandon has worked with industry legends such as Timbaland and Dallas Austin (Grammy Award Winner and SongWriters Hall of Fame)."
                }, {
                    name: "Jason Martin",
                    position: "Co-Founder / CEO",
                    image: "/founders/jason.webp",
                    description: "Jason brings over two decades of experience leading teams in business operations and management, communications, and product marketing at companies ranging from technology start-ups to national brands. Jason holds an MBA from Georgia Tech, and was most recently in a product marketing leadership role at Unbanked where he helped enable crypto payment rails via white-label debit cards for partners including Litecoin, Nexo, and StormX. As co-founder and CEO of Formless, Jason brings years of experience and research in the crypto/blockchain/Web3 space, and a passion for growing technologies that value distributed ownership, data privacy, and permissionless access. "
                }, {
                    name: "Bixia Mac",
                    position: "Co-Founder / COO",
                    image: "/founders/bixia.webp",
                    description: "Bixia is an economist and rigorous finance professional based in Boston with over ten years of experience in traditional finance where she’s held roles in wealth management at institutions such as Morgan Stanley, E*TRADE, and Fidelity Investments. She was an early adopter of distributed ledger technology, investing in and utilizing decentralized finance products long before they came widely known. As co-founder and COO of Formless, Bixia is responsible for all financial planning, capital efficiency, payroll, and technical infrastructure cost management. Bixia is also extremely active in women-led Web3 projects, continuously advocating for equity in the space."
                }],
                Slide = e => {
                    let {
                        name: a,
                        position: t,
                        description: s,
                        image: r,
                        index: i
                    } = e, [l, d] = (0, x.useState)(!0);
                    return (0, n.jsxs)(h.E.div, { ...o.s.fadeIn({
                            index: i
                        }),
                        className: "flex w-[calc(100vw-3rem)] flex-col gap-[45px] lg:w-[450px] xl:w-[500px]",
                        children: [(0, n.jsx)(m(), {
                            className: "h-auto w-full",
                            src: r,
                            alt: a,
                            width: 498,
                            height: 384
                        }), (0, n.jsxs)("div", {
                            className: "flex flex-col gap-6",
                            children: [(0, n.jsx)("h4", {
                                className: "text-mh4",
                                children: a
                            }), (0, n.jsx)("p", {
                                className: "text-b2",
                                children: t
                            })]
                        }), (0, n.jsx)(h.E.div, {
                            initial: !1,
                            className: "overflow-hidden",
                            animate: {
                                height: l ? "7rem" : "100%",
                                transition: o.s.transitions.longSpring()
                            },
                            children: (0, n.jsx)("p", {
                                className: c()("text-b2", {
                                    "line-clamp-4": l
                                }),
                                children: s
                            })
                        }), (0, n.jsx)(ReadMore, {
                            onClick: () => d(!l),
                            children: l ? "Read More" : "Read Less"
                        })]
                    })
                },
                FoundersSlider = () => {
                    let e = (0, x.useRef)(null),
                        [a, t] = (0, x.useState)(0),
                        s = (0, x.useCallback)(() => {
                            e.current && e.current.swiper.slidePrev()
                        }, []),
                        r = (0, x.useCallback)(() => {
                            e.current && e.current.swiper.slideNext()
                        }, []);
                    return (0, n.jsxs)("div", {
                        className: "flex-center w-full flex-col gap-[45px] lg:gap-[100px]",
                        children: [(0, n.jsx)("h1", {
                            className: "text-mh1 lg:text-h1 lg:my-16",
                            children: "Meet the Founders"
                        }), (0, n.jsx)("div", {
                            className: "h-full w-full max-w-[calc(100vw-3rem)] overflow-hidden xl:overflow-visible",
                            children: (0, n.jsx)(p.tq, {
                                className: "xl:!overflow-visible",
                                ref: e,
                                spaceBetween: 32,
                                slidesPerView: "auto",
                                scrollbar: {
                                    draggable: !0
                                },
                                onActiveIndexChange: e => {
                                    let {
                                        activeIndex: a,
                                        isEnd: n
                                    } = e;
                                    return t(n ? g.length - 1 : a)
                                },
                                children: g.map((e, a) => (0, n.jsx)(p.o5, {
                                    className: "!w-auto",
                                    children: (0, n.jsx)(Slide, {
                                        index: a,
                                        ...e
                                    })
                                }, e.name))
                            })
                        }), (0, n.jsxs)(h.E.div, { ...o.s.fadeIn(),
                            className: "flex gap-[13px] self-start",
                            children: [(0, n.jsx)(i.z, {
                                className: "rotate-[-180deg] px-3",
                                label: (0, n.jsx)(l.e, {}),
                                onClick: s,
                                variant: "primary",
                                disabled: !a
                            }), (0, n.jsx)(i.z, {
                                className: "px-3",
                                label: (0, n.jsx)(l.e, {}),
                                onClick: r,
                                variant: "primary",
                                disabled: g.length - 1 === a
                            })]
                        })]
                    })
                };
            var f = t(341),
                w = t(2567),
                b = t(5878),
                j = t(9260),
                v = t(5183);
            let DiamondLottie = () => {
                let e = (0, j.useLottie)({
                    animationData: v
                });
                return (0, x.useEffect)(() => {
                    e.setSpeed(2.64)
                }, []), e.View
            };
            var y = t(5620),
                N = t(665),
                C = t(2072),
                k = t(544);
            let S = [{
                    src: "/partners/a16zcrypto.png",
                    alt: "a16z Crypto",
                    width: 140,
                    height: 49
                }, {
                    src: "/partners/zypsyLogo.webp",
                    alt: "Zypsy Logo",
                    width: 160,
                    height: 37
                }, {
                    src: "/partners/wagmiVentures.webp",
                    alt: "Wagmi Ventures Logo",
                    width: 80,
                    height: 80
                }, {
                    src: "/partners/mpVentures.webp",
                    alt: "Mountain Peak Ventures Logo",
                    width: 209,
                    height: 45
                }, {
                    src: "/partners/mtVentures.webp",
                    alt: "MT Ventures Logo",
                    width: 207,
                    height: 69
                }, {
                    src: "/partners/knightCapital.webp",
                    alt: "Knight Capital Logo",
                    width: 151,
                    height: 47
                }, {
                    src: "/partners/azaVentures.webp",
                    alt: "Aza Ventures Logo",
                    width: 73,
                    height: 73
                }, {
                    src: "/partners/beacon.webp",
                    alt: "Beacon Logo",
                    width: 125,
                    height: 30
                }, {
                    src: "/partners/contango.webp",
                    alt: "Contango Logo",
                    width: 115,
                    height: 68
                }, {
                    src: "/partners/vVentures.webp",
                    alt: "VVV Ventures Logo",
                    width: 73,
                    height: 61
                }],
                E = [{
                    name: "Sandeep Nailwal",
                    description: "Founder and CEO of Polygon Network"
                }, {
                    name: "Ryan Fang",
                    description: "Co-Founder and COO of Ankr"
                }, {
                    name: "Dharmesh Shah",
                    description: "Founder and CTO of HubSpot"
                }, {
                    name: "Dallas Austin",
                    description: "Founder and CEO of Dallas Austin Distribution"
                }, {
                    name: "Vinson Leow",
                    description: "Co-founder of 3Suite"
                }],
                PartnerBlock = e => {
                    let {
                        children: a,
                        className: t
                    } = e;
                    return (0, n.jsx)("div", {
                        className: c()("flex-center h-[135px] basis-full lg:basis-2/6", t),
                        children: (0, n.jsx)(h.E.div, { ...o.s.fadeIn({
                                delay: .8
                            }),
                            children: a
                        })
                    })
                },
                Partners = () => (0, n.jsxs)("div", {
                    className: "flex w-full flex-col gap-[164px]",
                    children: [(0, n.jsxs)(h.E.div, {
                        className: "flex flex-col gap-10",
                        ...o.s.fadeIn({
                            delay: .4
                        }),
                        children: [(0, n.jsx)("h4", {
                            className: "text-mh4 lg:text-mh3",
                            children: "Funds"
                        }), (0, n.jsx)("div", {
                            className: "flex w-full flex-wrap border-l border-t border-lightGrey",
                            children: S.map(e => (0, n.jsx)(PartnerBlock, {
                                className: "border-b border-r border-lightGrey",
                                children: (0, n.jsx)(m(), { ...e,
                                    alt: e.alt
                                })
                            }, e.alt))
                        })]
                    }), (0, n.jsxs)(h.E.div, {
                        className: "flex flex-col gap-10",
                        ...o.s.fadeIn({
                            delay: .4
                        }),
                        children: [(0, n.jsx)("h4", {
                            className: "text-mh4 lg:text-mh3",
                            children: "Angel Investors"
                        }), (0, n.jsx)("div", {
                            className: "flex w-full flex-wrap border-l border-t border-lightGrey",
                            children: E.map(e => {
                                let {
                                    name: a,
                                    description: t
                                } = e;
                                return (0, n.jsxs)(PartnerBlock, {
                                    className: "border-b border-r border-lightGrey",
                                    children: [(0, n.jsx)("p", {
                                        className: "text-b2 text-center",
                                        children: a
                                    }), (0, n.jsx)("p", {
                                        className: "text-b1 text-center text-sm",
                                        children: t
                                    })]
                                }, a)
                            })
                        })]
                    })]
                });
            var about_us = () => {
                let e = (0, N.r9)();
                return (0, n.jsxs)(b.F, {
                    children: [(0, n.jsx)(C.P, {
                        title: "About Us",
                        description: "Learn more about who we are and the vision that drives the team at FORMLESS."
                    }), (0, n.jsx)(y.l0, {
                        id: "aboutUs",
                        children: (0, n.jsx)("div", {
                            className: "container flex min-h-screen w-full flex-col items-center justify-end",
                            children: (0, n.jsxs)("div", {
                                className: "mt-[126px] flex w-full flex-1 flex-col justify-center gap-y-12 lg:mb-[24vh] lg:flex-none lg:flex-row lg:items-end lg:justify-between lg:gap-0",
                                children: [(0, n.jsx)("h1", {
                                    className: "text-mh1 lg:text-h3 sm:whitespace-break-spaces lg:max-w-[600px]",
                                    children: (0, n.jsx)(s.V, {
                                        parts: ["Illuminating human", " purpose through", (0, n.jsxs)(n.Fragment, {
                                            children: [(0, n.jsx)("br", {}), " technology"]
                                        })],
                                        transition: {
                                            baseDelay: e
                                        }
                                    })
                                }), (0, n.jsx)(f.z, {
                                    delay: e + 1,
                                    children: "FORMLESS is a community of like-minded individuals, where anyone can go to be themselves and take part in the future of the internet. Learn more about who we are and the vision that drives the team at FORMLESS."
                                })]
                            })
                        })
                    }), (0, n.jsx)("section", {
                        className: "section container",
                        children: (0, n.jsx)(w.C, {
                            className: {
                                root: "w-full items-center justify-between lg:!items-center lg:gap-[106px]",
                                container: "lg:max-w-[498px]"
                            },
                            title: (0, n.jsx)("h2", {
                                className: "text-mh1 lg:text-h2 flex flex-col",
                                children: (0, n.jsx)(s.V, {
                                    parts: ["By creators,", "for creators"]
                                })
                            }),
                            description: (0, n.jsxs)("div", {
                                className: "flex flex-col gap-6 lg:gap-[45px]",
                                children: [(0, n.jsx)(h.E.p, { ...o.s.fadeIn({
                                        delay: .8
                                    }),
                                    children: "We aim to be a space that liberates creators from the rules that govern most forms of expression and distribution in the digital world today."
                                }), (0, n.jsx)(h.E.p, { ...o.s.fadeIn({
                                        delay: 1.2
                                    }),
                                    children: "We empower individuals to tell the stories they want to tell, build loyal communities and set the terms around the distribution and ownership of their work."
                                })]
                            }),
                            children: (0, n.jsxs)("div", {
                                className: "w-full max-w-[540px] lg:flex-1",
                                children: [(0, n.jsx)(k.t, {}), (0, n.jsx)(DiamondLottie, {})]
                            })
                        })
                    }), (0, n.jsx)(y.iv, {
                        id: "backedBy",
                        children: (0, n.jsxs)("section", {
                            className: "section container gap-20 lg:gap-[164px]",
                            children: [(0, n.jsx)(r.k, {
                                titleParts: ["Proudly backed by:"]
                            }), (0, n.jsx)(Partners, {})]
                        })
                    }), (0, n.jsx)("section", {
                        className: "section container",
                        children: (0, n.jsx)(FoundersSlider, {})
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [296, 863, 675, 260, 520, 878, 594, 774, 888, 179], function() {
            return e(e.s = 4183)
        }), _N_E = e.O()
    }
]);
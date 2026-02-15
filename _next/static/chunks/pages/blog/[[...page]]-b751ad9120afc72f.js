(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [597], {
        2049: function(e, t, l) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/blog/[[...page]]", function() {
                return l(3064)
            }])
        },
        9044: function(e, t, l) {
            "use strict";
            l.d(t, {
                V: function() {
                    return Tag
                }
            });
            var n = l(5893),
                s = l(3967),
                r = l.n(s),
                a = l(5139);
            let i = (0, a.j)("inline-flex w-fit", {
                    variants: {
                        size: {
                            sm: "text-[12px] font-medium rounded font-inter leading-none",
                            md: "rounded-lg text-button opacity-60"
                        },
                        color: {
                            lightGrey: "bg-lightGrey text-light"
                        },
                        variant: {
                            fill: ""
                        }
                    },
                    defaultVariants: {
                        size: "sm",
                        color: "lightGrey",
                        variant: "fill"
                    },
                    compoundVariants: [{
                        variant: "fill",
                        size: "sm",
                        className: "px-2 py-1.5"
                    }, {
                        variant: "fill",
                        size: "md",
                        className: "px-[7px] py-[3px]"
                    }]
                }),
                Tag = e => {
                    let {
                        children: t,
                        className: l,
                        size: s,
                        color: a,
                        variant: c
                    } = e;
                    return (0, n.jsx)("div", {
                        className: r()(i({
                            size: s,
                            color: a,
                            variant: c
                        }), l),
                        children: t
                    })
                }
        },
        2072: function(e, t, l) {
            "use strict";
            l.d(t, {
                P: function() {
                    return ShareMeta
                }
            });
            var n = l(5893),
                s = l(9008),
                r = l.n(s);
            let ShareMeta = e => {
                let {
                    title: t = "Formless",
                    description: l = "Illuminating true human purpose through technology. Creators of SHARE Protocol and share.stream."
                } = e;
                return (0, n.jsxs)(r(), {
                    children: [(0, n.jsx)("meta", {
                        property: "og:description",
                        content: l
                    }), (0, n.jsx)("meta", {
                        property: "description",
                        content: l
                    }), (0, n.jsx)("meta", {
                        property: "og:title",
                        content: t
                    }), (0, n.jsx)("title", {
                        children: t
                    }), (0, n.jsx)("meta", {
                        property: "og:image",
                        content: "/OGP.png"
                    })]
                })
            }
        },
        3064: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                Blog: function() {
                    return Blog
                },
                __N_SSG: function() {
                    return N
                },
                default: function() {
                    return v
                }
            });
            var n = l(5893),
                s = l(5878),
                r = l(5675),
                a = l.n(r),
                i = l(1664),
                c = l.n(i),
                o = l(5620),
                x = l(9044),
                g = l(3810);
            let Article = e => {
                let {
                    title: t,
                    slug: l,
                    createdAt: s,
                    readMinutes: r,
                    shortContent: i,
                    category: o,
                    image: d
                } = e;
                return (0, n.jsxs)(c(), {
                    href: g._.blogPost(l),
                    className: "group flex flex-col gap-6",
                    children: [(0, n.jsx)("div", {
                        className: "relative aspect-[1.9/1] overflow-hidden lg:max-w-[392px]",
                        children: (0, n.jsx)(a(), {
                            className: "bg-light transition duration-500 group-hover:scale-subtle",
                            src: d,
                            alt: "".concat(t, " title"),
                            fill: !0
                        })
                    }), (0, n.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [o && (0, n.jsx)(x.V, {
                            variant: "fill",
                            size: "md",
                            children: o.title
                        }), (0, n.jsx)("h4", {
                            className: "text-mh4 lg:text-h4 mt-4 line-clamp-2",
                            children: t
                        }), (0, n.jsx)("p", {
                            className: "text-b2 mt-3 line-clamp-2",
                            children: i
                        }), (0, n.jsxs)("div", {
                            className: "text-b2 mt-2 opacity-50",
                            children: [s, " - ", r, " Min Read"]
                        })]
                    })]
                })
            };
            var d = l(2072);
            let AngleIcon = e => (0, n.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "8",
                height: "12",
                viewBox: "0 0 8 12",
                fill: "none",
                ...e,
                children: (0, n.jsx)("path", {
                    d: "M1.30078 0.603516L6.69727 6L1.30078 11.3965",
                    stroke: "currentColor",
                    strokeWidth: "1.5"
                })
            });
            var h = l(3238),
                m = l(3967),
                p = l.n(m);
            let u = {
                    element: "h-10 min-w-10 flex-center transition opacity-60 hover:opacity-40"
                },
                Pagination = e => {
                    let {
                        total: t,
                        page: l,
                        getHref: s
                    } = e, {
                        activePage: r,
                        range: a
                    } = (0, h.h)({
                        total: t,
                        page: l,
                        showControls: !0
                    });
                    return (0, n.jsx)("nav", {
                        className: "flex items-center",
                        children: a.map(e => {
                            if (e === h.m.PREV) return 1 === l ? null : (0, n.jsx)(c(), {
                                href: s(r - 1),
                                className: p()(u.element),
                                children: (0, n.jsx)(AngleIcon, {
                                    className: "rotate-180"
                                })
                            }, e);
                            if (e === h.m.NEXT) return l === t ? null : (0, n.jsx)(c(), {
                                href: s(r + 1),
                                className: p()(u.element),
                                children: (0, n.jsx)(AngleIcon, {})
                            }, e);
                            if (e === h.m.DOTS) return (0, n.jsx)("div", {
                                className: p()(u.element),
                                children: "..."
                            });
                            let a = e === l;
                            return (0, n.jsx)(c(), {
                                href: s(e),
                                className: p()(u.element, a && "rounded-md bg-lightGrey"),
                                children: e
                            }, e)
                        })
                    })
                };
            var f = l(1609),
                j = l.n(f),
                N = !0;
            let Blog = e => {
                let {
                    posts: t,
                    featuredPost: l,
                    pagination: r
                } = e;
                return (0, n.jsxs)(s.F, {
                    children: [(0, n.jsx)(d.P, {
                        title: "Blog"
                    }), l && (0, n.jsx)(o.l0, {
                        id: "blogAtf",
                        containerClassName: "lg:overflow-hidden",
                        children: (0, n.jsx)("div", {
                            className: "container gap-[72px] !px-0 pt-[168px] lg:pb-[500px] lg:pt-[200px]",
                            children: (0, n.jsxs)(c(), {
                                href: g._.blogPost(l.slug),
                                className: "group flex flex-col items-center gap-[72px] lg:flex-row lg:gap-8",
                                children: [(0, n.jsxs)("div", {
                                    className: "flex flex-col gap-6 px-6 lg:px-0",
                                    children: [l.category && (0, n.jsx)(x.V, {
                                        variant: "fill",
                                        size: "md",
                                        children: l.category.title
                                    }), (0, n.jsx)("h3", {
                                        className: "text-mh3 lg:text-h3 lg: line-clamp-2 lg:w-[710px]",
                                        children: l.title
                                    }), (0, n.jsxs)("div", {
                                        className: "text-b2 mt-6 lg:mt-12",
                                        children: [l.createdAt, " - ", l.readMinutes, " Min Read"]
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "group overflow-hidden lg:h-[317px] lg:w-[604px] lg:shrink-0",
                                    children: (0, n.jsx)(a(), {
                                        className: "h-auto w-full bg-light transition duration-500 group-hover:scale-subtle",
                                        src: l.image,
                                        alt: "Featured post image",
                                        width: 604,
                                        height: 317
                                    })
                                })]
                            })
                        })
                    }), (0, n.jsxs)("section", {
                        className: "section container !items-start gap-12 lg:mt-[-500px] lg:gap-[96px]",
                        children: [(0, n.jsx)("h1", {
                            className: "text-mh3 lg:text-h3",
                            children: "Latest articles"
                        }), j()(t) ? (0, n.jsx)("div", {
                            className: "w-full text-center opacity-60",
                            children: "No articles found"
                        }) : (0, n.jsx)("div", {
                            className: "grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-x-8",
                            children: t.map(e => (0, n.jsx)(Article, { ...e
                            }, e.id))
                        }), r.total > 1 && (0, n.jsx)("footer", {
                            className: "flex-center w-full",
                            children: (0, n.jsx)(Pagination, { ...r,
                                getHref: g._.blogPage
                            })
                        })]
                    })]
                })
            };
            var v = Blog
        }
    },
    function(e) {
        e.O(0, [863, 675, 730, 878, 774, 888, 179], function() {
            return e(e.s = 2049)
        }), _N_E = e.O()
    }
]);
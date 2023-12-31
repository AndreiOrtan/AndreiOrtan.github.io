(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2888],
  {
    2746: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        o = r(1676),
        i = r(1163),
        a =
          (n = r(7294)) && "object" == typeof n && "default" in n
            ? n
            : { default: n };
      function s() {
        return (s = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var l = ["children", "locale", "now"];
      function u(e) {
        var t,
          r = e.children,
          n = e.locale,
          u = e.now,
          c = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              t.indexOf((r = i[n])) >= 0 || (o[r] = e[r]);
            return o;
          })(e, l);
        try {
          t = i.useRouter();
        } catch (e) {}
        if (
          (!n && t && (n = t.locale),
          "string" == typeof u && (u = new Date(u)),
          !n)
        )
          throw Error(void 0);
        return a.default.createElement(
          o.IntlProvider,
          s({ locale: n, now: u }, c),
          r
        );
      }
      (t.NextIntlClientProvider = u),
        (t.NextIntlProvider = u),
        Object.keys(o).forEach(function (e) {
          "default" === e ||
            t.hasOwnProperty(e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            });
        });
    },
    6840: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(1095);
        },
      ]);
    },
    3991: function (e, t) {
      "use strict";
      var r, n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          PrefetchKind: function () {
            return r;
          },
          ACTION_REFRESH: function () {
            return o;
          },
          ACTION_NAVIGATE: function () {
            return i;
          },
          ACTION_RESTORE: function () {
            return a;
          },
          ACTION_SERVER_PATCH: function () {
            return s;
          },
          ACTION_PREFETCH: function () {
            return l;
          },
          ACTION_FAST_REFRESH: function () {
            return u;
          },
          ACTION_SERVER_ACTION: function () {
            return c;
          },
        });
      let o = "refresh",
        i = "navigate",
        a = "restore",
        s = "server-patch",
        l = "prefetch",
        u = "fast-refresh",
        c = "server-action";
      ((n = r || (r = {})).AUTO = "auto"),
        (n.FULL = "full"),
        (n.TEMPORARY = "temporary"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    1516: function (e, t) {
      "use strict";
      function r(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    3740: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return v;
          },
        });
      let n = r(8754),
        o = r(1757),
        i = o._(r(7294)),
        a = n._(r(2636)),
        s = r(7757),
        l = r(3735),
        u = r(3341);
      r(4210);
      let c = n._(r(7746)),
        h = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "",
          loader: "akamai",
          dangerouslyAllowSVG: !1,
          unoptimized: !0,
        };
      function f(e) {
        return void 0 !== e.default;
      }
      function p(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function d(e, t, r, n, o, i, a) {
        if (!e || e["data-loaded-src"] === t) return;
        e["data-loaded-src"] = t;
        let s = "decode" in e ? e.decode() : Promise.resolve();
        s.catch(() => {}).then(() => {
          if (e.parentElement && e.isConnected) {
            if (("blur" === r && i(!0), null == n ? void 0 : n.current)) {
              let t = new Event("load");
              Object.defineProperty(t, "target", { writable: !1, value: e });
              let r = !1,
                o = !1;
              n.current({
                ...t,
                nativeEvent: t,
                currentTarget: e,
                target: e,
                isDefaultPrevented: () => r,
                isPropagationStopped: () => o,
                persist: () => {},
                preventDefault: () => {
                  (r = !0), t.preventDefault();
                },
                stopPropagation: () => {
                  (o = !0), t.stopPropagation();
                },
              });
            }
            (null == o ? void 0 : o.current) && o.current(e);
          }
        });
      }
      function m(e) {
        let [t, r] = i.version.split("."),
          n = parseInt(t, 10),
          o = parseInt(r, 10);
        return n > 18 || (18 === n && o >= 3)
          ? { fetchPriority: e }
          : { fetchpriority: e };
      }
      let g = (0, i.forwardRef)((e, t) => {
          let {
            imgAttributes: r,
            heightInt: n,
            widthInt: o,
            qualityInt: a,
            className: s,
            imgStyle: l,
            blurStyle: u,
            isLazy: c,
            fetchPriority: h,
            fill: f,
            placeholder: p,
            loading: g,
            srcString: b,
            config: v,
            unoptimized: E,
            loader: y,
            onLoadRef: _,
            onLoadingCompleteRef: T,
            setBlurComplete: N,
            setShowAltText: x,
            onLoad: w,
            onError: A,
            ...H
          } = e;
          return (
            (g = c ? "lazy" : g),
            i.default.createElement("img", {
              ...H,
              ...m(h),
              loading: g,
              width: o,
              height: n,
              decoding: "async",
              "data-nimg": f ? "fill" : "1",
              className: s,
              style: { ...l, ...u },
              ...r,
              ref: (0, i.useCallback)(
                (e) => {
                  t &&
                    ("function" == typeof t
                      ? t(e)
                      : "object" == typeof t && (t.current = e)),
                    e &&
                      (A && (e.src = e.src),
                      e.complete && d(e, b, p, _, T, N, E));
                },
                [b, p, _, T, N, A, E, t]
              ),
              onLoad: (e) => {
                let t = e.currentTarget;
                d(t, b, p, _, T, N, E);
              },
              onError: (e) => {
                x(!0), "blur" === p && N(!0), A && A(e);
              },
            })
          );
        }),
        b = (0, i.forwardRef)((e, t) => {
          var r;
          let n,
            o,
            {
              src: d,
              sizes: b,
              unoptimized: v = !1,
              priority: E = !1,
              loading: y,
              className: _,
              quality: T,
              width: N,
              height: x,
              fill: w,
              style: A,
              onLoad: H,
              onLoadingComplete: S,
              placeholder: B = "empty",
              blurDataURL: I,
              fetchPriority: P,
              layout: O,
              objectFit: M,
              objectPosition: C,
              lazyBoundary: R,
              lazyRoot: L,
              ...j
            } = e,
            k = (0, i.useContext)(u.ImageConfigContext),
            G = (0, i.useMemo)(() => {
              let e = h || k || l.imageConfigDefault,
                t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                r = e.deviceSizes.sort((e, t) => e - t);
              return { ...e, allSizes: t, deviceSizes: r };
            }, [k]),
            U = j.loader || c.default;
          delete j.loader;
          let D = "__next_img_default" in U;
          if (D) {
            if ("custom" === G.loader)
              throw Error(
                'Image with src "' +
                  d +
                  '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
              );
          } else {
            let e = U;
            U = (t) => {
              let { config: r, ...n } = t;
              return e(n);
            };
          }
          if (O) {
            "fill" === O && (w = !0);
            let e = {
              intrinsic: { maxWidth: "100%", height: "auto" },
              responsive: { width: "100%", height: "auto" },
            }[O];
            e && (A = { ...A, ...e });
            let t = { responsive: "100vw", fill: "100vw" }[O];
            t && !b && (b = t);
          }
          let F = "",
            V = p(N),
            z = p(x);
          if ("object" == typeof (r = d) && (f(r) || void 0 !== r.src)) {
            let e = f(d) ? d.default : d;
            if (!e.src)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                  JSON.stringify(e)
              );
            if (!e.height || !e.width)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                  JSON.stringify(e)
              );
            if (
              ((n = e.blurWidth),
              (o = e.blurHeight),
              (I = I || e.blurDataURL),
              (F = e.src),
              !w)
            ) {
              if (V || z) {
                if (V && !z) {
                  let t = V / e.width;
                  z = Math.round(e.height * t);
                } else if (!V && z) {
                  let t = z / e.height;
                  V = Math.round(e.width * t);
                }
              } else (V = e.width), (z = e.height);
            }
          }
          let K = !E && ("lazy" === y || void 0 === y);
          (!(d = "string" == typeof d ? d : F) ||
            d.startsWith("data:") ||
            d.startsWith("blob:")) &&
            ((v = !0), (K = !1)),
            G.unoptimized && (v = !0),
            D && d.endsWith(".svg") && !G.dangerouslyAllowSVG && (v = !0),
            E && (P = "high");
          let [X, Z] = (0, i.useState)(!1),
            [Y, q] = (0, i.useState)(!1),
            W = p(T),
            J = Object.assign(
              w
                ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: M,
                    objectPosition: C,
                  }
                : {},
              Y ? {} : { color: "transparent" },
              A
            ),
            Q =
              "blur" === B && I && !X
                ? {
                    backgroundSize: J.objectFit || "cover",
                    backgroundPosition: J.objectPosition || "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage:
                      'url("data:image/svg+xml;charset=utf-8,' +
                      (0, s.getImageBlurSvg)({
                        widthInt: V,
                        heightInt: z,
                        blurWidth: n,
                        blurHeight: o,
                        blurDataURL: I,
                        objectFit: J.objectFit,
                      }) +
                      '")',
                  }
                : {},
            $ = (function (e) {
              let {
                config: t,
                src: r,
                unoptimized: n,
                width: o,
                quality: i,
                sizes: a,
                loader: s,
              } = e;
              if (n) return { src: r, srcSet: void 0, sizes: void 0 };
              let { widths: l, kind: u } = (function (e, t, r) {
                  let { deviceSizes: n, allSizes: o } = e;
                  if (r) {
                    let e = /(^|\s)(1?\d?\d)vw/g,
                      t = [];
                    for (let n; (n = e.exec(r)); n) t.push(parseInt(n[2]));
                    if (t.length) {
                      let e = 0.01 * Math.min(...t);
                      return {
                        widths: o.filter((t) => t >= n[0] * e),
                        kind: "w",
                      };
                    }
                    return { widths: o, kind: "w" };
                  }
                  if ("number" != typeof t) return { widths: n, kind: "w" };
                  let i = [
                    ...new Set(
                      [t, 2 * t].map(
                        (e) => o.find((t) => t >= e) || o[o.length - 1]
                      )
                    ),
                  ];
                  return { widths: i, kind: "x" };
                })(t, o, a),
                c = l.length - 1;
              return {
                sizes: a || "w" !== u ? a : "100vw",
                srcSet: l
                  .map(
                    (e, n) =>
                      s({ config: t, src: r, quality: i, width: e }) +
                      " " +
                      ("w" === u ? e : n + 1) +
                      u
                  )
                  .join(", "),
                src: s({ config: t, src: r, quality: i, width: l[c] }),
              };
            })({
              config: G,
              src: d,
              unoptimized: v,
              width: V,
              quality: W,
              sizes: b,
              loader: U,
            }),
            ee = d,
            et = (0, i.useRef)(H);
          (0, i.useEffect)(() => {
            et.current = H;
          }, [H]);
          let er = (0, i.useRef)(S);
          (0, i.useEffect)(() => {
            er.current = S;
          }, [S]);
          let en = {
            isLazy: K,
            imgAttributes: $,
            heightInt: z,
            widthInt: V,
            qualityInt: W,
            className: _,
            imgStyle: J,
            blurStyle: Q,
            loading: y,
            config: G,
            fetchPriority: P,
            fill: w,
            unoptimized: v,
            placeholder: B,
            loader: U,
            srcString: ee,
            onLoadRef: et,
            onLoadingCompleteRef: er,
            setBlurComplete: Z,
            setShowAltText: q,
            ...j,
          };
          return i.default.createElement(
            i.default.Fragment,
            null,
            i.default.createElement(g, { ...en, ref: t }),
            E
              ? i.default.createElement(
                  a.default,
                  null,
                  i.default.createElement("link", {
                    key: "__nimg-" + $.src + $.srcSet + $.sizes,
                    rel: "preload",
                    as: "image",
                    href: $.srcSet ? void 0 : $.src,
                    imageSrcSet: $.srcSet,
                    imageSizes: $.sizes,
                    crossOrigin: j.crossOrigin,
                    referrerPolicy: j.referrerPolicy,
                    ...m(P),
                  })
                )
              : null
          );
        }),
        v = b;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5569: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return y;
          },
        });
      let n = r(8754),
        o = n._(r(7294)),
        i = r(4532),
        a = r(3353),
        s = r(1410),
        l = r(9064),
        u = r(370),
        c = r(9955),
        h = r(4224),
        f = r(508),
        p = r(1516),
        d = r(4266),
        m = r(3991),
        g = new Set();
      function b(e, t, r, n, o, i) {
        if (!i && !(0, a.isLocalURL)(t)) return;
        if (!n.bypassPrefetchedCheck) {
          let o =
              void 0 !== n.locale
                ? n.locale
                : "locale" in e
                ? e.locale
                : void 0,
            i = t + "%" + r + "%" + o;
          if (g.has(i)) return;
          g.add(i);
        }
        let s = i ? e.prefetch(t, o) : e.prefetch(t, r, n);
        Promise.resolve(s).catch((e) => {});
      }
      function v(e) {
        return "string" == typeof e ? e : (0, s.formatUrl)(e);
      }
      let E = o.default.forwardRef(function (e, t) {
          let r, n;
          let {
            href: s,
            as: g,
            children: E,
            prefetch: y = null,
            passHref: _,
            replace: T,
            shallow: N,
            scroll: x,
            locale: w,
            onClick: A,
            onMouseEnter: H,
            onTouchStart: S,
            legacyBehavior: B = !1,
            ...I
          } = e;
          (r = E),
            B &&
              ("string" == typeof r || "number" == typeof r) &&
              (r = o.default.createElement("a", null, r));
          let P = !1 !== y,
            O = null === y ? m.PrefetchKind.AUTO : m.PrefetchKind.FULL,
            M = o.default.useContext(c.RouterContext),
            C = o.default.useContext(h.AppRouterContext),
            R = null != M ? M : C,
            L = !M,
            { href: j, as: k } = o.default.useMemo(() => {
              if (!M) {
                let e = v(s);
                return { href: e, as: g ? v(g) : e };
              }
              let [e, t] = (0, i.resolveHref)(M, s, !0);
              return { href: e, as: g ? (0, i.resolveHref)(M, g) : t || e };
            }, [M, s, g]),
            G = o.default.useRef(j),
            U = o.default.useRef(k);
          B && (n = o.default.Children.only(r));
          let D = B ? n && "object" == typeof n && n.ref : t,
            [F, V, z] = (0, f.useIntersection)({ rootMargin: "200px" }),
            K = o.default.useCallback(
              (e) => {
                (U.current !== k || G.current !== j) &&
                  (z(), (U.current = k), (G.current = j)),
                  F(e),
                  D &&
                    ("function" == typeof D
                      ? D(e)
                      : "object" == typeof D && (D.current = e));
              },
              [k, D, j, z, F]
            );
          o.default.useEffect(() => {
            R && V && P && b(R, j, k, { locale: w }, { kind: O }, L);
          }, [k, j, V, w, P, null == M ? void 0 : M.locale, R, L, O]);
          let X = {
            ref: K,
            onClick(e) {
              B || "function" != typeof A || A(e),
                B &&
                  n.props &&
                  "function" == typeof n.props.onClick &&
                  n.props.onClick(e),
                R &&
                  !e.defaultPrevented &&
                  (function (e, t, r, n, i, s, l, u, c, h) {
                    let { nodeName: f } = e.currentTarget,
                      p = "A" === f.toUpperCase();
                    if (
                      p &&
                      ((function (e) {
                        let t = e.currentTarget,
                          r = t.getAttribute("target");
                        return (
                          (r && "_self" !== r) ||
                          e.metaKey ||
                          e.ctrlKey ||
                          e.shiftKey ||
                          e.altKey ||
                          (e.nativeEvent && 2 === e.nativeEvent.which)
                        );
                      })(e) ||
                        (!c && !(0, a.isLocalURL)(r)))
                    )
                      return;
                    e.preventDefault();
                    let d = () => {
                      "beforePopState" in t
                        ? t[i ? "replace" : "push"](r, n, {
                            shallow: s,
                            locale: u,
                            scroll: l,
                          })
                        : t[i ? "replace" : "push"](n || r, {
                            forceOptimisticNavigation: !h,
                          });
                    };
                    c ? o.default.startTransition(d) : d();
                  })(e, R, j, k, T, N, x, w, L, P);
            },
            onMouseEnter(e) {
              B || "function" != typeof H || H(e),
                B &&
                  n.props &&
                  "function" == typeof n.props.onMouseEnter &&
                  n.props.onMouseEnter(e),
                R &&
                  (P || !L) &&
                  b(
                    R,
                    j,
                    k,
                    { locale: w, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: O },
                    L
                  );
            },
            onTouchStart(e) {
              B || "function" != typeof S || S(e),
                B &&
                  n.props &&
                  "function" == typeof n.props.onTouchStart &&
                  n.props.onTouchStart(e),
                R &&
                  (P || !L) &&
                  b(
                    R,
                    j,
                    k,
                    { locale: w, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: O },
                    L
                  );
            },
          };
          if ((0, l.isAbsoluteUrl)(k)) X.href = k;
          else if (!B || _ || ("a" === n.type && !("href" in n.props))) {
            let e = void 0 !== w ? w : null == M ? void 0 : M.locale,
              t =
                (null == M ? void 0 : M.isLocaleDomain) &&
                (0, p.getDomainLocale)(
                  k,
                  e,
                  null == M ? void 0 : M.locales,
                  null == M ? void 0 : M.domainLocales
                );
            X.href =
              t ||
              (0, d.addBasePath)(
                (0, u.addLocale)(k, e, null == M ? void 0 : M.defaultLocale)
              );
          }
          return B
            ? o.default.cloneElement(n, X)
            : o.default.createElement("a", { ...I, ...X }, r);
        }),
        y = E;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    508: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(7294),
        o = r(29),
        i = "function" == typeof IntersectionObserver,
        a = new Map(),
        s = [];
      function l(e) {
        let { rootRef: t, rootMargin: r, disabled: l } = e,
          u = l || !i,
          [c, h] = (0, n.useState)(!1),
          f = (0, n.useRef)(null),
          p = (0, n.useCallback)((e) => {
            f.current = e;
          }, []);
        (0, n.useEffect)(() => {
          if (i) {
            if (u || c) return;
            let e = f.current;
            if (e && e.tagName) {
              let n = (function (e, t, r) {
                let {
                  id: n,
                  observer: o,
                  elements: i,
                } = (function (e) {
                  let t;
                  let r = { root: e.root || null, margin: e.rootMargin || "" },
                    n = s.find(
                      (e) => e.root === r.root && e.margin === r.margin
                    );
                  if (n && (t = a.get(n))) return t;
                  let o = new Map(),
                    i = new IntersectionObserver((e) => {
                      e.forEach((e) => {
                        let t = o.get(e.target),
                          r = e.isIntersecting || e.intersectionRatio > 0;
                        t && r && t(r);
                      });
                    }, e);
                  return (
                    (t = { id: r, observer: i, elements: o }),
                    s.push(r),
                    a.set(r, t),
                    t
                  );
                })(r);
                return (
                  i.set(e, t),
                  o.observe(e),
                  function () {
                    if ((i.delete(e), o.unobserve(e), 0 === i.size)) {
                      o.disconnect(), a.delete(n);
                      let e = s.findIndex(
                        (e) => e.root === n.root && e.margin === n.margin
                      );
                      e > -1 && s.splice(e, 1);
                    }
                  }
                );
              })(e, (e) => e && h(e), {
                root: null == t ? void 0 : t.current,
                rootMargin: r,
              });
              return n;
            }
          } else if (!c) {
            let e = (0, o.requestIdleCallback)(() => h(!0));
            return () => (0, o.cancelIdleCallback)(e);
          }
        }, [u, r, t, c, f.current]);
        let d = (0, n.useCallback)(() => {
          h(!1);
        }, []);
        return [p, c, d];
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7757: function (e, t) {
      "use strict";
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: n,
            blurHeight: o,
            blurDataURL: i,
            objectFit: a,
          } = e,
          s = n || t,
          l = o || r,
          u = i.startsWith("data:image/jpeg")
            ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%"
            : "";
        return s && l
          ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 " +
              s +
              " " +
              l +
              "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" +
              (n && o ? "1" : "20") +
              "'/%3E" +
              u +
              "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='" +
              i +
              "'/%3E%3C/svg%3E"
          : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='" +
              ("contain" === a
                ? "xMidYMid"
                : "cover" === a
                ? "xMidYMid slice"
                : "none") +
              "' x='0' y='0' height='100%25' width='100%25' href='" +
              i +
              "'/%3E%3C/svg%3E";
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    7746: function (e, t) {
      "use strict";
      function r(e) {
        let { config: t, src: r, width: n, quality: o } = e;
        return (
          t.path +
          "?url=" +
          encodeURIComponent(r) +
          "&w=" +
          n +
          "&q=" +
          (o || 75)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (r.__next_img_default = !0);
      let n = r;
    },
    1095: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return C;
          },
        });
      var n = r(5893);
      r(3814);
      var o = r(2746);
      function i(e) {
        let { children: t } = e;
        return (0, n.jsx)(n.Fragment, { children: t });
      }
      var a = r(1664),
        s = r.n(a),
        l = r(7294),
        u = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        c = l.createContext && l.createContext(u),
        h = function () {
          return (h =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
        f = function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              0 > t.indexOf(n) &&
              (r[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var o = 0, n = Object.getOwnPropertySymbols(e);
              o < n.length;
              o++
            )
              0 > t.indexOf(n[o]) &&
                Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                (r[n[o]] = e[n[o]]);
          return r;
        };
      function p(e) {
        return function (t) {
          return l.createElement(
            d,
            h({ attr: h({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map(function (t, r) {
                  return l.createElement(
                    t.tag,
                    h({ key: r }, t.attr),
                    e(t.child)
                  );
                })
              );
            })(e.child)
          );
        };
      }
      function d(e) {
        var t = function (t) {
          var r,
            n = e.attr,
            o = e.size,
            i = e.title,
            a = f(e, ["attr", "size", "title"]),
            s = o || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            l.createElement(
              "svg",
              h(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                n,
                a,
                {
                  className: r,
                  style: h(h({ color: e.color || t.color }, t.style), e.style),
                  height: s,
                  width: s,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              i && l.createElement("title", null, i),
              e.children
            )
          );
        };
        return void 0 !== c
          ? l.createElement(c.Consumer, null, function (e) {
              return t(e);
            })
          : t(u);
      }
      function m(e) {
        return p({
          tag: "svg",
          attr: { viewBox: "0 0 1024 1024" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z",
              },
            },
          ],
        })(e);
      }
      var g = (e) => {
        let {
            options: t,
            header: r,
            collapseDropdown: o,
            routes: i,
            locale: a,
            self: u,
          } = e,
          [c, h] = (0, l.useState)(!1),
          f = (0, l.useRef)(null);
        return (
          (0, l.useEffect)(() => {
            function e(e) {
              f.current && !f.current.contains(e.target) && h(!1);
            }
            return (
              document.addEventListener("mousedown", e),
              () => {
                document.removeEventListener("mousedown", e);
              }
            );
          }, [f]),
          (0, n.jsxs)("div", {
            className: "relative flex justify-center",
            ref: f,
            children: [
              (0, n.jsxs)("button", {
                onClick: () => h((e) => !e),
                className: "".concat(
                  c ? "text-blue700" : "text-gray900",
                  " rounded-lg text-lg font-semibold px-4 hover:text-blue700 py-2.5 text-center flex justify-center items-center"
                ),
                type: "button",
                children: [
                  u
                    ? (0, n.jsx)(s(), {
                        href: "/"
                          .concat(a, "/")
                          .concat(null == r ? void 0 : r.toLocaleLowerCase()),
                        children: r,
                      })
                    : r,
                  t &&
                    (0, n.jsx)("span", {
                      className:
                        "px-2 transition-transform duration-500 transform ".concat(
                          c ? "rotate-180" : "rotate-0"
                        ),
                      onClick: (e) => {
                        e.stopPropagation(), h((e) => !e);
                      },
                      children: (0, n.jsx)(m, {}),
                    }),
                ],
              }),
              c &&
                t &&
                (0, n.jsx)("div", {
                  id: "dropdownDivider",
                  className:
                    "menu-container shadow-2xl mt-14 z-10 bg-white divide-y divide-gray-100 rounded-lg w-44 dark:bg-gray-700 dark:divide-gray-600 absolute left-1/2 transform -translate-x-1/2",
                  children: (0, n.jsx)("ul", {
                    className: "py-2 text-sm text-gray-700",
                    children:
                      i &&
                      t &&
                      t.map((e, t) =>
                        (0, n.jsx)(
                          "li",
                          {
                            className: "py-1",
                            children: (0, n.jsx)(s(), {
                              href: "/"
                                .concat(a, "/")
                                .concat(
                                  i[t].replace(/[\W_]+/g, "-").toLowerCase()
                                ),
                              className: "block px-4 py-2 hover:bg-gray100",
                              onClick: () => {
                                h((e) => !e), o && o();
                              },
                              children: e,
                            }),
                          },
                          t
                        )
                      ),
                  }),
                }),
            ],
          })
        );
      };
      function b(e) {
        return p({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
            {
              tag: "path",
              attr: {
                d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
              },
            },
          ],
        })(e);
      }
      function v(e) {
        return p({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } },
            {
              tag: "path",
              attr: { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" },
            },
          ],
        })(e);
      }
      var E = r(5675),
        y = r.n(E),
        _ = r(1163);
      function T() {
        let [e, t] = (0, l.useTransition)(),
          r = (0, o.useLocale)(),
          i = (0, _.useRouter)();
        function a(e) {
          t(() => {
            let t = i.pathname,
              r = i.query;
            i.push({ pathname: t, query: { ...r, locale: e } }, void 0);
          });
        }
        return (0, n.jsx)("div", {
          className: "relative",
          children:
            "en" === r
              ? (0, n.jsx)(y(), {
                  src: "/ro.png",
                  alt: "ro",
                  width: 44,
                  height: 44,
                  onClick: () => a("ro"),
                  className: "hover:cursor-pointer",
                })
              : (0, n.jsx)(y(), {
                  src: "/en.png",
                  alt: "en",
                  width: 44,
                  height: 44,
                  onClick: () => a("en"),
                  className: "hover:cursor-pointer",
                }),
        });
      }
      function N(e) {
        let { locale: t } = e,
          r = (0, o.useTranslations)("navbar"),
          [i, a] = (0, l.useState)(!1);
        function u() {
          a(!1);
        }
        return (0, n.jsx)("nav", {
          className: "bg-lightgray fixed top-0 left-0 right-0 z-[9999]",
          children: (0, n.jsxs)("div", {
            className: "flex lg:justify-center h-[114px] justify-between",
            children: [
              (0, n.jsx)("div", {
                className: "flex items-center lg:mr-16 ml-4",
                children: (0, n.jsxs)(s(), {
                  href: "/".concat(t),
                  className: "flex flex-row items-center justify-center",
                  children: [
                    " ",
                    (0, n.jsx)("img", {
                      src: "/image00001 copy.png",
                      alt: "text",
                      className: "h-auto lg:w-[100px] w-[60px] max-w-full",
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "relative flex flex-col lg:items-center lg:h-12 h-9 min-w-[214px]",
                      children: [
                        (0, n.jsx)("p", {
                          className:
                            "text-blue500 lg:text-2xl text-lg tracking-wide font-bold",
                          children: "Suhard Biomedical",
                        }),
                        (0, n.jsx)("p", {
                          className:
                            "text-gray600 lg:text-base text-xs font-normal italic absolute lg:bottom-[4.5px] lg:right-0 bottom-[2px] right-[55px]",
                          children: "HighTech Medical Equipment",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, n.jsxs)("div", {
                className:
                  "lg:flex lg:w-min w-full justify-center bg-lightgray items-center lg:ml-24 lg:static absolute bottom-[-144px] ".concat(
                    i ? "" : "hidden"
                  ),
                children: [
                  (0, n.jsx)(g, {
                    options: [
                      "".concat(r("physiotherapy")),
                      "Aquatizer",
                      "".concat(r("mechanotherapy")),
                    ],
                    locale: t,
                    header: r("header1"),
                    collapseDropdown: u,
                    routes: ["Fizioterapie", "Aquatizer", "Mecanoterapie"],
                  }),
                  (0, n.jsx)(g, { header: "Aesthetics", self: !0, locale: t }),
                  (0, n.jsx)(g, {
                    header: r("header2"),
                    options: ["".concat(r("about-us")), "Cariere"],
                    collapseDropdown: u,
                    routes: ["Companie", "Companie"],
                    locale: t,
                  }),
                  (0, n.jsx)(g, { header: "Contact" }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "flex justify-center mr-4",
                children: [
                  (0, n.jsx)("span", {
                    className: "flex items-center lg:hidden mx-2",
                    onClick: () => a((e) => !e),
                    children: i
                      ? (0, n.jsx)(b, { size: 50 })
                      : (0, n.jsx)(v, { size: 50 }),
                  }),
                  (0, n.jsx)("span", {
                    className: "flex items-center mx-2",
                    children: (0, n.jsx)(T, {}),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var x = () =>
          (0, n.jsx)("footer", {
            className: "bg-lightgray rounded-lg shadow",
            children: (0, n.jsx)("div", {
              className: "w-full",
              children: (0, n.jsx)("div", {
                className: "w-9/12 mx-auto text-blue700 py-8",
                children: (0, n.jsxs)("div", {
                  className: "flex",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "my-auto",
                      children: [
                        (0, n.jsx)("img", {
                          src: "/image00001.png",
                          alt: "text",
                          className: "h-auto w-[150px] max-w-full mx-auto",
                        }),
                        (0, n.jsx)("h1", {
                          className: "font-medium",
                          children: "EUID ROONRC. J6/378/2021",
                        }),
                        (0, n.jsx)("h1", {
                          className: "font-medium",
                          children:
                            "Romania, Bistrita-Nasaud, Str. Lupeni Nr.11",
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "ml-auto my-auto",
                      children: (0, n.jsxs)("div", {
                        className: "flex sm:flex-row flex-col",
                        children: [
                          (0, n.jsx)(s(), {
                            href: "https://www.minato-med.co.jp/en/",
                            target: "_blank",
                            children: (0, n.jsx)("img", {
                              src: "/minatologo.png",
                              alt: "text",
                              className:
                                "h-auto w-[140px] max-w-full mx-4 my-4",
                            }),
                          }),
                          (0, n.jsx)(s(), {
                            href: "https://www.zimmer.de/en/",
                            target: "_blank",
                            children: (0, n.jsx)("img", {
                              src: "/zimmer-logo2.jpg",
                              alt: "text",
                              className:
                                "h-auto w-[140px] max-w-full mx-4 my-4",
                            }),
                          }),
                          (0, n.jsx)(s(), {
                            href: "https://mkb-system.ro/",
                            target: "_blank",
                            children: (0, n.jsx)("img", {
                              src: "/mkb-logo.png",
                              alt: "text",
                              className:
                                "h-auto w-[140px] max-w-full mx-4 my-4",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        w = r(9008),
        A = r.n(w);
      let H = { _origin: "https://api.emailjs.com" },
        S = (e, t, r) => {
          if (!e)
            throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
          if (!t)
            throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
          if (!r)
            throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
          return !0;
        };
      class B {
        constructor(e) {
          (this.status = e ? e.status : 0),
            (this.text = e ? e.responseText : "Network Error");
        }
      }
      let I = (e, t, r = {}) =>
          new Promise((n, o) => {
            let i = new XMLHttpRequest();
            i.addEventListener("load", ({ target: e }) => {
              let t = new B(e);
              200 === t.status || "OK" === t.text ? n(t) : o(t);
            }),
              i.addEventListener("error", ({ target: e }) => {
                o(new B(e));
              }),
              i.open("POST", H._origin + e, !0),
              Object.keys(r).forEach((e) => {
                i.setRequestHeader(e, r[e]);
              }),
              i.send(t);
          }),
        P = (e) => {
          let t;
          if (
            !(t = "string" == typeof e ? document.querySelector(e) : e) ||
            "FORM" !== t.nodeName
          )
            throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
          return t;
        };
      var O = {
        init: (e, t = "https://api.emailjs.com") => {
          (H._userID = e), (H._origin = t);
        },
        send: (e, t, r, n) => {
          let o = n || H._userID;
          return (
            S(o, e, t),
            I(
              "/api/v1.0/email/send",
              JSON.stringify({
                lib_version: "3.11.0",
                user_id: o,
                service_id: e,
                template_id: t,
                template_params: r,
              }),
              { "Content-type": "application/json" }
            )
          );
        },
        sendForm: (e, t, r, n) => {
          let o = n || H._userID,
            i = P(r);
          S(o, e, t);
          let a = new FormData(i);
          return (
            a.append("lib_version", "3.11.0"),
            a.append("service_id", e),
            a.append("template_id", t),
            a.append("user_id", o),
            I("/api/v1.0/email/send-form", a)
          );
        },
      };
      function M() {
        let e = (0, o.useTranslations)("contactForm");
        return (0, n.jsxs)("div", {
          className: "bg-gray900",
          children: [
            (0, n.jsx)("div", {
              className: "w-9/12 mx-auto",
              children: (0, n.jsxs)("h1", {
                className: "text-white text-4xl font-bold py-4",
                children: [e("header"), ""],
              }),
            }),
            (0, n.jsxs)("form", {
              className: "w-9/12 mx-auto mb-16 ",
              onSubmit: (e) => {
                e.preventDefault(),
                  O.sendForm(
                    "service_7jyespo",
                    "template_mrmdy0t",
                    e.currentTarget,
                    "AOlcQlyZTbCB3SpNY"
                  ).then(
                    (e) => {
                      console.log(e.text);
                    },
                    (e) => {
                      console.log(e.text);
                    }
                  ),
                  e.currentTarget.reset();
              },
              children: [
                (0, n.jsxs)("div", {
                  className: "relative z-0 w-full mb-6 group",
                  children: [
                    (0, n.jsx)("input", {
                      type: "email",
                      name: "reply_to",
                      id: "floating_email",
                      className:
                        "block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                      placeholder: " ",
                      required: !0,
                    }),
                    (0, n.jsx)("label", {
                      htmlFor: "floating_email",
                      className:
                        "peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                      children: "E-mail",
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "grid md:grid-cols-2 md:gap-6",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "relative z-0 w-full mb-6 group",
                      children: [
                        (0, n.jsx)("input", {
                          type: "text",
                          name: "floating_first_name",
                          id: "floating_first_name",
                          className:
                            "block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                          placeholder: " ",
                        }),
                        (0, n.jsx)("label", {
                          htmlFor: "floating_first_name",
                          className:
                            "peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                          children: e("firstName"),
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "relative z-0 w-full mb-6 group",
                      children: [
                        (0, n.jsx)("input", {
                          type: "text",
                          name: "floating_last_name",
                          id: "floating_last_name",
                          className:
                            "block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                          placeholder: " ",
                        }),
                        (0, n.jsx)("label", {
                          htmlFor: "floating_last_name",
                          className:
                            "peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                          children: e("lastName"),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "grid md:grid-cols-2 md:gap-6",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "relative z-0 w-full mb-6 group",
                      children: [
                        (0, n.jsx)("input", {
                          type: "tel",
                          name: "floating_phone",
                          id: "floating_phone",
                          className:
                            "block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                          placeholder: " ",
                        }),
                        (0, n.jsx)("label", {
                          htmlFor: "floating_phone",
                          className:
                            "peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                          children: e("phoneNumber"),
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "relative z-0 w-full mb-6 group",
                      children: [
                        (0, n.jsx)("input", {
                          type: "text",
                          name: "floating_company",
                          id: "floating_company",
                          className:
                            "block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                          placeholder: " ",
                        }),
                        (0, n.jsx)("label", {
                          htmlFor: "floating_company",
                          className:
                            "peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                          children: e("company"),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "my-4",
                  children: [
                    (0, n.jsx)("label", {
                      htmlFor: "message",
                      className:
                        "block mb-2 text-sm font-medium text-white dark:text-white",
                      children: e("message"),
                    }),
                    (0, n.jsx)("textarea", {
                      id: "message",
                      rows: 4,
                      className:
                        "block p-2.5 w-full text-sm text-gray900 bg-gray50 rounded-lg border border-gray300 focus:ring-blue500 focus:border-blue500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",
                      placeholder: "".concat(e("messPlaceHolder")),
                      name: "message",
                    }),
                  ],
                }),
                (0, n.jsx)("button", {
                  type: "submit",
                  className:
                    "text-white bg-blue700 hover:bg-blue800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                  children: e("submit"),
                }),
              ],
            }),
          ],
        });
      }
      function C(e) {
        let { Component: t, pageProps: r, router: a } = e;
        return (0, n.jsxs)(o.NextIntlProvider, {
          messages: r.messages,
          locale: r.locale || "ro",
          children: [
            (0, n.jsxs)(A(), {
              children: [
                (0, n.jsx)("title", { children: "Suhard Biomedical" }),
                (0, n.jsx)("link", {
                  rel: "shortcut icon",
                  href: "/favicon.ico",
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "min-h-screen flex flex-col",
              children: (0, n.jsxs)(i, {
                children: [
                  (0, n.jsx)(N, { locale: "".concat(r.locale) }),
                  (0, n.jsx)("div", {
                    className: "mt-[114px]",
                    children: (0, n.jsx)(t, { ...r }),
                  }),
                  (0, n.jsx)(M, {}),
                  (0, n.jsx)(x, {}),
                ],
              }),
            }),
          ],
        });
      }
    },
    3814: function () {},
    9008: function (e, t, r) {
      e.exports = r(2636);
    },
    5675: function (e, t, r) {
      e.exports = r(3740);
    },
    1664: function (e, t, r) {
      e.exports = r(5569);
    },
    1163: function (e, t, r) {
      e.exports = r(6885);
    },
    1676: function (e, t, r) {
      "use strict";
      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function o(e) {
        return (o = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function i(e, t) {
        return (i = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function a(e, t, r) {
        return (a = !(function () {
          if (
            "undefined" == typeof Reflect ||
            !Reflect.construct ||
            Reflect.construct.sham
          )
            return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()
          ? function (e, t, r) {
              var n = [null];
              n.push.apply(n, t);
              var o = new (Function.bind.apply(e, n))();
              return r && i(o, r.prototype), o;
            }
          : Reflect.construct.bind()).apply(null, arguments);
      }
      function s(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (s = function (e) {
          if (
            null === e ||
            -1 === Function.toString.call(e).indexOf("[native code]")
          )
            return e;
          if ("function" != typeof e)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, r);
          }
          function r() {
            return a(e, arguments, o(this).constructor);
          }
          return (
            (r.prototype = Object.create(e.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            i(r, e)
          );
        })(e);
      }
      function l(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++)
          (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      }
      r.r(t),
        r.d(t, {
          IntlError: function () {
            return N;
          },
          IntlErrorCode: function () {
            return m;
          },
          IntlProvider: function () {
            return eY;
          },
          createFormatter: function () {
            return eV;
          },
          createIntl: function () {
            return ez;
          },
          createTranslator: function () {
            return eD;
          },
          useFormatter: function () {
            return e1;
          },
          useIntl: function () {
            return e6;
          },
          useLocale: function () {
            return eJ;
          },
          useNow: function () {
            return e$;
          },
          useTimeZone: function () {
            return e0;
          },
          useTranslations: function () {
            return eW;
          },
        }),
        ((d = m || (m = {})).MISSING_MESSAGE = "MISSING_MESSAGE"),
        (d.MISSING_FORMAT = "MISSING_FORMAT"),
        (d.INSUFFICIENT_PATH = "INSUFFICIENT_PATH"),
        (d.INVALID_MESSAGE = "INVALID_MESSAGE"),
        (d.INVALID_KEY = "INVALID_KEY"),
        (d.FORMATTING_ERROR = "FORMATTING_ERROR");
      var u,
        c,
        h,
        f,
        p,
        d,
        m,
        g,
        b,
        v,
        E,
        y,
        _,
        T,
        N = (function (e) {
          function t(t, r) {
            var n,
              o = t;
            return (
              r && (o += ": " + r),
              ((n = e.call(this, o) || this).code = void 0),
              (n.originalMessage = void 0),
              (n.code = t),
              r && (n.originalMessage = r),
              n
            );
          }
          return (
            (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            i(t, e),
            t
          );
        })(s(Error)),
        x = function (e, t) {
          return (x =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            })(e, t);
        };
      function w(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function r() {
          this.constructor = e;
        }
        x(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var A = function () {
        return (A =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var o in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function H(e, t, r) {
        if (r || 2 == arguments.length)
          for (var n, o = 0, i = t.length; o < i; o++)
            (!n && o in t) ||
              (n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]));
        return e.concat(n || Array.prototype.slice.call(t));
      }
      function S(e) {
        return e.type === b.literal;
      }
      function B(e) {
        return e.type === b.number;
      }
      function I(e) {
        return e.type === b.date;
      }
      function P(e) {
        return e.type === b.time;
      }
      function O(e) {
        return e.type === b.select;
      }
      function M(e) {
        return e.type === b.plural;
      }
      function C(e) {
        return e.type === b.tag;
      }
      function R(e) {
        return !!(e && "object" == typeof e && e.type === v.number);
      }
      function L(e) {
        return !!(e && "object" == typeof e && e.type === v.dateTime);
      }
      ((u = g || (g = {}))[(u.EXPECT_ARGUMENT_CLOSING_BRACE = 1)] =
        "EXPECT_ARGUMENT_CLOSING_BRACE"),
        (u[(u.EMPTY_ARGUMENT = 2)] = "EMPTY_ARGUMENT"),
        (u[(u.MALFORMED_ARGUMENT = 3)] = "MALFORMED_ARGUMENT"),
        (u[(u.EXPECT_ARGUMENT_TYPE = 4)] = "EXPECT_ARGUMENT_TYPE"),
        (u[(u.INVALID_ARGUMENT_TYPE = 5)] = "INVALID_ARGUMENT_TYPE"),
        (u[(u.EXPECT_ARGUMENT_STYLE = 6)] = "EXPECT_ARGUMENT_STYLE"),
        (u[(u.INVALID_NUMBER_SKELETON = 7)] = "INVALID_NUMBER_SKELETON"),
        (u[(u.INVALID_DATE_TIME_SKELETON = 8)] = "INVALID_DATE_TIME_SKELETON"),
        (u[(u.EXPECT_NUMBER_SKELETON = 9)] = "EXPECT_NUMBER_SKELETON"),
        (u[(u.EXPECT_DATE_TIME_SKELETON = 10)] = "EXPECT_DATE_TIME_SKELETON"),
        (u[(u.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11)] =
          "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"),
        (u[(u.EXPECT_SELECT_ARGUMENT_OPTIONS = 12)] =
          "EXPECT_SELECT_ARGUMENT_OPTIONS"),
        (u[(u.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13)] =
          "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"),
        (u[(u.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14)] =
          "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"),
        (u[(u.EXPECT_SELECT_ARGUMENT_SELECTOR = 15)] =
          "EXPECT_SELECT_ARGUMENT_SELECTOR"),
        (u[(u.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16)] =
          "EXPECT_PLURAL_ARGUMENT_SELECTOR"),
        (u[(u.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] =
          "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"),
        (u[(u.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] =
          "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"),
        (u[(u.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] =
          "INVALID_PLURAL_ARGUMENT_SELECTOR"),
        (u[(u.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] =
          "DUPLICATE_PLURAL_ARGUMENT_SELECTOR"),
        (u[(u.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] =
          "DUPLICATE_SELECT_ARGUMENT_SELECTOR"),
        (u[(u.MISSING_OTHER_CLAUSE = 22)] = "MISSING_OTHER_CLAUSE"),
        (u[(u.INVALID_TAG = 23)] = "INVALID_TAG"),
        (u[(u.INVALID_TAG_NAME = 25)] = "INVALID_TAG_NAME"),
        (u[(u.UNMATCHED_CLOSING_TAG = 26)] = "UNMATCHED_CLOSING_TAG"),
        (u[(u.UNCLOSED_TAG = 27)] = "UNCLOSED_TAG"),
        ((c = b || (b = {}))[(c.literal = 0)] = "literal"),
        (c[(c.argument = 1)] = "argument"),
        (c[(c.number = 2)] = "number"),
        (c[(c.date = 3)] = "date"),
        (c[(c.time = 4)] = "time"),
        (c[(c.select = 5)] = "select"),
        (c[(c.plural = 6)] = "plural"),
        (c[(c.pound = 7)] = "pound"),
        (c[(c.tag = 8)] = "tag"),
        ((h = v || (v = {}))[(h.number = 0)] = "number"),
        (h[(h.dateTime = 1)] = "dateTime");
      var j = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        k =
          /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,
        G = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        U = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        D = /^(@+)?(\+|#+)?[rs]?$/g,
        F = /(\*)(0+)|(#+)(0+)|(0+)/g,
        V = /^(0+)$/;
      function z(e) {
        var t = {};
        return (
          "r" === e[e.length - 1]
            ? (t.roundingPriority = "morePrecision")
            : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"),
          e.replace(D, function (e, r, n) {
            return (
              "string" != typeof n
                ? ((t.minimumSignificantDigits = r.length),
                  (t.maximumSignificantDigits = r.length))
                : "+" === n
                ? (t.minimumSignificantDigits = r.length)
                : "#" === r[0]
                ? (t.maximumSignificantDigits = r.length)
                : ((t.minimumSignificantDigits = r.length),
                  (t.maximumSignificantDigits =
                    r.length + ("string" == typeof n ? n.length : 0))),
              ""
            );
          }),
          t
        );
      }
      function K(e) {
        switch (e) {
          case "sign-auto":
            return { signDisplay: "auto" };
          case "sign-accounting":
          case "()":
            return { currencySign: "accounting" };
          case "sign-always":
          case "+!":
            return { signDisplay: "always" };
          case "sign-accounting-always":
          case "()!":
            return { signDisplay: "always", currencySign: "accounting" };
          case "sign-except-zero":
          case "+?":
            return { signDisplay: "exceptZero" };
          case "sign-accounting-except-zero":
          case "()?":
            return { signDisplay: "exceptZero", currencySign: "accounting" };
          case "sign-never":
          case "+_":
            return { signDisplay: "never" };
        }
      }
      function X(e) {
        return K(e) || {};
      }
      var Z = {
          AX: ["H"],
          BQ: ["H"],
          CP: ["H"],
          CZ: ["H"],
          DK: ["H"],
          FI: ["H"],
          ID: ["H"],
          IS: ["H"],
          ML: ["H"],
          NE: ["H"],
          RU: ["H"],
          SE: ["H"],
          SJ: ["H"],
          SK: ["H"],
          AS: ["h", "H"],
          BT: ["h", "H"],
          DJ: ["h", "H"],
          ER: ["h", "H"],
          GH: ["h", "H"],
          IN: ["h", "H"],
          LS: ["h", "H"],
          PG: ["h", "H"],
          PW: ["h", "H"],
          SO: ["h", "H"],
          TO: ["h", "H"],
          VU: ["h", "H"],
          WS: ["h", "H"],
          "001": ["H", "h"],
          AL: ["h", "H", "hB"],
          TD: ["h", "H", "hB"],
          "ca-ES": ["H", "h", "hB"],
          CF: ["H", "h", "hB"],
          CM: ["H", "h", "hB"],
          "fr-CA": ["H", "h", "hB"],
          "gl-ES": ["H", "h", "hB"],
          "it-CH": ["H", "h", "hB"],
          "it-IT": ["H", "h", "hB"],
          LU: ["H", "h", "hB"],
          NP: ["H", "h", "hB"],
          PF: ["H", "h", "hB"],
          SC: ["H", "h", "hB"],
          SM: ["H", "h", "hB"],
          SN: ["H", "h", "hB"],
          TF: ["H", "h", "hB"],
          VA: ["H", "h", "hB"],
          CY: ["h", "H", "hb", "hB"],
          GR: ["h", "H", "hb", "hB"],
          CO: ["h", "H", "hB", "hb"],
          DO: ["h", "H", "hB", "hb"],
          KP: ["h", "H", "hB", "hb"],
          KR: ["h", "H", "hB", "hb"],
          NA: ["h", "H", "hB", "hb"],
          PA: ["h", "H", "hB", "hb"],
          PR: ["h", "H", "hB", "hb"],
          VE: ["h", "H", "hB", "hb"],
          AC: ["H", "h", "hb", "hB"],
          AI: ["H", "h", "hb", "hB"],
          BW: ["H", "h", "hb", "hB"],
          BZ: ["H", "h", "hb", "hB"],
          CC: ["H", "h", "hb", "hB"],
          CK: ["H", "h", "hb", "hB"],
          CX: ["H", "h", "hb", "hB"],
          DG: ["H", "h", "hb", "hB"],
          FK: ["H", "h", "hb", "hB"],
          GB: ["H", "h", "hb", "hB"],
          GG: ["H", "h", "hb", "hB"],
          GI: ["H", "h", "hb", "hB"],
          IE: ["H", "h", "hb", "hB"],
          IM: ["H", "h", "hb", "hB"],
          IO: ["H", "h", "hb", "hB"],
          JE: ["H", "h", "hb", "hB"],
          LT: ["H", "h", "hb", "hB"],
          MK: ["H", "h", "hb", "hB"],
          MN: ["H", "h", "hb", "hB"],
          MS: ["H", "h", "hb", "hB"],
          NF: ["H", "h", "hb", "hB"],
          NG: ["H", "h", "hb", "hB"],
          NR: ["H", "h", "hb", "hB"],
          NU: ["H", "h", "hb", "hB"],
          PN: ["H", "h", "hb", "hB"],
          SH: ["H", "h", "hb", "hB"],
          SX: ["H", "h", "hb", "hB"],
          TA: ["H", "h", "hb", "hB"],
          ZA: ["H", "h", "hb", "hB"],
          "af-ZA": ["H", "h", "hB", "hb"],
          AR: ["H", "h", "hB", "hb"],
          CL: ["H", "h", "hB", "hb"],
          CR: ["H", "h", "hB", "hb"],
          CU: ["H", "h", "hB", "hb"],
          EA: ["H", "h", "hB", "hb"],
          "es-BO": ["H", "h", "hB", "hb"],
          "es-BR": ["H", "h", "hB", "hb"],
          "es-EC": ["H", "h", "hB", "hb"],
          "es-ES": ["H", "h", "hB", "hb"],
          "es-GQ": ["H", "h", "hB", "hb"],
          "es-PE": ["H", "h", "hB", "hb"],
          GT: ["H", "h", "hB", "hb"],
          HN: ["H", "h", "hB", "hb"],
          IC: ["H", "h", "hB", "hb"],
          KG: ["H", "h", "hB", "hb"],
          KM: ["H", "h", "hB", "hb"],
          LK: ["H", "h", "hB", "hb"],
          MA: ["H", "h", "hB", "hb"],
          MX: ["H", "h", "hB", "hb"],
          NI: ["H", "h", "hB", "hb"],
          PY: ["H", "h", "hB", "hb"],
          SV: ["H", "h", "hB", "hb"],
          UY: ["H", "h", "hB", "hb"],
          JP: ["H", "h", "K"],
          AD: ["H", "hB"],
          AM: ["H", "hB"],
          AO: ["H", "hB"],
          AT: ["H", "hB"],
          AW: ["H", "hB"],
          BE: ["H", "hB"],
          BF: ["H", "hB"],
          BJ: ["H", "hB"],
          BL: ["H", "hB"],
          BR: ["H", "hB"],
          CG: ["H", "hB"],
          CI: ["H", "hB"],
          CV: ["H", "hB"],
          DE: ["H", "hB"],
          EE: ["H", "hB"],
          FR: ["H", "hB"],
          GA: ["H", "hB"],
          GF: ["H", "hB"],
          GN: ["H", "hB"],
          GP: ["H", "hB"],
          GW: ["H", "hB"],
          HR: ["H", "hB"],
          IL: ["H", "hB"],
          IT: ["H", "hB"],
          KZ: ["H", "hB"],
          MC: ["H", "hB"],
          MD: ["H", "hB"],
          MF: ["H", "hB"],
          MQ: ["H", "hB"],
          MZ: ["H", "hB"],
          NC: ["H", "hB"],
          NL: ["H", "hB"],
          PM: ["H", "hB"],
          PT: ["H", "hB"],
          RE: ["H", "hB"],
          RO: ["H", "hB"],
          SI: ["H", "hB"],
          SR: ["H", "hB"],
          ST: ["H", "hB"],
          TG: ["H", "hB"],
          TR: ["H", "hB"],
          WF: ["H", "hB"],
          YT: ["H", "hB"],
          BD: ["h", "hB", "H"],
          PK: ["h", "hB", "H"],
          AZ: ["H", "hB", "h"],
          BA: ["H", "hB", "h"],
          BG: ["H", "hB", "h"],
          CH: ["H", "hB", "h"],
          GE: ["H", "hB", "h"],
          LI: ["H", "hB", "h"],
          ME: ["H", "hB", "h"],
          RS: ["H", "hB", "h"],
          UA: ["H", "hB", "h"],
          UZ: ["H", "hB", "h"],
          XK: ["H", "hB", "h"],
          AG: ["h", "hb", "H", "hB"],
          AU: ["h", "hb", "H", "hB"],
          BB: ["h", "hb", "H", "hB"],
          BM: ["h", "hb", "H", "hB"],
          BS: ["h", "hb", "H", "hB"],
          CA: ["h", "hb", "H", "hB"],
          DM: ["h", "hb", "H", "hB"],
          "en-001": ["h", "hb", "H", "hB"],
          FJ: ["h", "hb", "H", "hB"],
          FM: ["h", "hb", "H", "hB"],
          GD: ["h", "hb", "H", "hB"],
          GM: ["h", "hb", "H", "hB"],
          GU: ["h", "hb", "H", "hB"],
          GY: ["h", "hb", "H", "hB"],
          JM: ["h", "hb", "H", "hB"],
          KI: ["h", "hb", "H", "hB"],
          KN: ["h", "hb", "H", "hB"],
          KY: ["h", "hb", "H", "hB"],
          LC: ["h", "hb", "H", "hB"],
          LR: ["h", "hb", "H", "hB"],
          MH: ["h", "hb", "H", "hB"],
          MP: ["h", "hb", "H", "hB"],
          MW: ["h", "hb", "H", "hB"],
          NZ: ["h", "hb", "H", "hB"],
          SB: ["h", "hb", "H", "hB"],
          SG: ["h", "hb", "H", "hB"],
          SL: ["h", "hb", "H", "hB"],
          SS: ["h", "hb", "H", "hB"],
          SZ: ["h", "hb", "H", "hB"],
          TC: ["h", "hb", "H", "hB"],
          TT: ["h", "hb", "H", "hB"],
          UM: ["h", "hb", "H", "hB"],
          US: ["h", "hb", "H", "hB"],
          VC: ["h", "hb", "H", "hB"],
          VG: ["h", "hb", "H", "hB"],
          VI: ["h", "hb", "H", "hB"],
          ZM: ["h", "hb", "H", "hB"],
          BO: ["H", "hB", "h", "hb"],
          EC: ["H", "hB", "h", "hb"],
          ES: ["H", "hB", "h", "hb"],
          GQ: ["H", "hB", "h", "hb"],
          PE: ["H", "hB", "h", "hb"],
          AE: ["h", "hB", "hb", "H"],
          "ar-001": ["h", "hB", "hb", "H"],
          BH: ["h", "hB", "hb", "H"],
          DZ: ["h", "hB", "hb", "H"],
          EG: ["h", "hB", "hb", "H"],
          EH: ["h", "hB", "hb", "H"],
          HK: ["h", "hB", "hb", "H"],
          IQ: ["h", "hB", "hb", "H"],
          JO: ["h", "hB", "hb", "H"],
          KW: ["h", "hB", "hb", "H"],
          LB: ["h", "hB", "hb", "H"],
          LY: ["h", "hB", "hb", "H"],
          MO: ["h", "hB", "hb", "H"],
          MR: ["h", "hB", "hb", "H"],
          OM: ["h", "hB", "hb", "H"],
          PH: ["h", "hB", "hb", "H"],
          PS: ["h", "hB", "hb", "H"],
          QA: ["h", "hB", "hb", "H"],
          SA: ["h", "hB", "hb", "H"],
          SD: ["h", "hB", "hb", "H"],
          SY: ["h", "hB", "hb", "H"],
          TN: ["h", "hB", "hb", "H"],
          YE: ["h", "hB", "hb", "H"],
          AF: ["H", "hb", "hB", "h"],
          LA: ["H", "hb", "hB", "h"],
          CN: ["H", "hB", "hb", "h"],
          LV: ["H", "hB", "hb", "h"],
          TL: ["H", "hB", "hb", "h"],
          "zu-ZA": ["H", "hB", "hb", "h"],
          CD: ["hB", "H"],
          IR: ["hB", "H"],
          "hi-IN": ["hB", "h", "H"],
          "kn-IN": ["hB", "h", "H"],
          "ml-IN": ["hB", "h", "H"],
          "te-IN": ["hB", "h", "H"],
          KH: ["hB", "h", "H", "hb"],
          "ta-IN": ["hB", "h", "hb", "H"],
          BN: ["hb", "hB", "h", "H"],
          MY: ["hb", "hB", "h", "H"],
          ET: ["hB", "hb", "h", "H"],
          "gu-IN": ["hB", "hb", "h", "H"],
          "mr-IN": ["hB", "hb", "h", "H"],
          "pa-IN": ["hB", "hb", "h", "H"],
          TW: ["hB", "hb", "h", "H"],
          KE: ["hB", "hb", "H", "h"],
          MM: ["hB", "hb", "H", "h"],
          TZ: ["hB", "hb", "H", "h"],
          UG: ["hB", "hb", "H", "h"],
        },
        Y = new RegExp("^".concat(j.source, "*")),
        q = new RegExp("".concat(j.source, "*$"));
      function W(e, t) {
        return { start: e, end: t };
      }
      var J = !!String.prototype.startsWith,
        Q = !!String.fromCodePoint,
        $ = !!Object.fromEntries,
        ee = !!String.prototype.codePointAt,
        et = !!String.prototype.trimStart,
        er = !!String.prototype.trimEnd,
        en = Number.isSafeInteger
          ? Number.isSafeInteger
          : function (e) {
              return (
                "number" == typeof e &&
                isFinite(e) &&
                Math.floor(e) === e &&
                9007199254740991 >= Math.abs(e)
              );
            },
        eo = !0;
      try {
        var ei = ef("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        eo =
          (null === (E = ei.exec("a")) || void 0 === E ? void 0 : E[0]) === "a";
      } catch (e) {
        eo = !1;
      }
      var ea = J
          ? function (e, t, r) {
              return e.startsWith(t, r);
            }
          : function (e, t, r) {
              return e.slice(r, r + t.length) === t;
            },
        es = Q
          ? String.fromCodePoint
          : function () {
              for (var e, t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              for (var n = "", o = t.length, i = 0; o > i; ) {
                if ((e = t[i++]) > 1114111)
                  throw RangeError(e + " is not a valid code point");
                n +=
                  e < 65536
                    ? String.fromCharCode(e)
                    : String.fromCharCode(
                        ((e -= 65536) >> 10) + 55296,
                        (e % 1024) + 56320
                      );
              }
              return n;
            },
        el = $
          ? Object.fromEntries
          : function (e) {
              for (var t = {}, r = 0; r < e.length; r++) {
                var n = e[r],
                  o = n[0],
                  i = n[1];
                t[o] = i;
              }
              return t;
            },
        eu = ee
          ? function (e, t) {
              return e.codePointAt(t);
            }
          : function (e, t) {
              var r,
                n = e.length;
              if (!(t < 0) && !(t >= n)) {
                var o = e.charCodeAt(t);
                return o < 55296 ||
                  o > 56319 ||
                  t + 1 === n ||
                  (r = e.charCodeAt(t + 1)) < 56320 ||
                  r > 57343
                  ? o
                  : ((o - 55296) << 10) + (r - 56320) + 65536;
              }
            },
        ec = et
          ? function (e) {
              return e.trimStart();
            }
          : function (e) {
              return e.replace(Y, "");
            },
        eh = er
          ? function (e) {
              return e.trimEnd();
            }
          : function (e) {
              return e.replace(q, "");
            };
      function ef(e, t) {
        return new RegExp(e, t);
      }
      if (eo) {
        var ep = ef("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        y = function (e, t) {
          var r;
          return (
            (ep.lastIndex = t),
            null !== (r = ep.exec(e)[1]) && void 0 !== r ? r : ""
          );
        };
      } else
        y = function (e, t) {
          for (var r = []; ; ) {
            var n,
              o = eu(e, t);
            if (
              void 0 === o ||
              eg(o) ||
              ((n = o) >= 33 && n <= 35) ||
              36 === n ||
              (n >= 37 && n <= 39) ||
              40 === n ||
              41 === n ||
              42 === n ||
              43 === n ||
              44 === n ||
              45 === n ||
              (n >= 46 && n <= 47) ||
              (n >= 58 && n <= 59) ||
              (n >= 60 && n <= 62) ||
              (n >= 63 && n <= 64) ||
              91 === n ||
              92 === n ||
              93 === n ||
              94 === n ||
              96 === n ||
              123 === n ||
              124 === n ||
              125 === n ||
              126 === n ||
              161 === n ||
              (n >= 162 && n <= 165) ||
              166 === n ||
              167 === n ||
              169 === n ||
              171 === n ||
              172 === n ||
              174 === n ||
              176 === n ||
              177 === n ||
              182 === n ||
              187 === n ||
              191 === n ||
              215 === n ||
              247 === n ||
              (n >= 8208 && n <= 8213) ||
              (n >= 8214 && n <= 8215) ||
              8216 === n ||
              8217 === n ||
              8218 === n ||
              (n >= 8219 && n <= 8220) ||
              8221 === n ||
              8222 === n ||
              8223 === n ||
              (n >= 8224 && n <= 8231) ||
              (n >= 8240 && n <= 8248) ||
              8249 === n ||
              8250 === n ||
              (n >= 8251 && n <= 8254) ||
              (n >= 8257 && n <= 8259) ||
              8260 === n ||
              8261 === n ||
              8262 === n ||
              (n >= 8263 && n <= 8273) ||
              8274 === n ||
              8275 === n ||
              (n >= 8277 && n <= 8286) ||
              (n >= 8592 && n <= 8596) ||
              (n >= 8597 && n <= 8601) ||
              (n >= 8602 && n <= 8603) ||
              (n >= 8604 && n <= 8607) ||
              8608 === n ||
              (n >= 8609 && n <= 8610) ||
              8611 === n ||
              (n >= 8612 && n <= 8613) ||
              8614 === n ||
              (n >= 8615 && n <= 8621) ||
              8622 === n ||
              (n >= 8623 && n <= 8653) ||
              (n >= 8654 && n <= 8655) ||
              (n >= 8656 && n <= 8657) ||
              8658 === n ||
              8659 === n ||
              8660 === n ||
              (n >= 8661 && n <= 8691) ||
              (n >= 8692 && n <= 8959) ||
              (n >= 8960 && n <= 8967) ||
              8968 === n ||
              8969 === n ||
              8970 === n ||
              8971 === n ||
              (n >= 8972 && n <= 8991) ||
              (n >= 8992 && n <= 8993) ||
              (n >= 8994 && n <= 9e3) ||
              9001 === n ||
              9002 === n ||
              (n >= 9003 && n <= 9083) ||
              9084 === n ||
              (n >= 9085 && n <= 9114) ||
              (n >= 9115 && n <= 9139) ||
              (n >= 9140 && n <= 9179) ||
              (n >= 9180 && n <= 9185) ||
              (n >= 9186 && n <= 9254) ||
              (n >= 9255 && n <= 9279) ||
              (n >= 9280 && n <= 9290) ||
              (n >= 9291 && n <= 9311) ||
              (n >= 9472 && n <= 9654) ||
              9655 === n ||
              (n >= 9656 && n <= 9664) ||
              9665 === n ||
              (n >= 9666 && n <= 9719) ||
              (n >= 9720 && n <= 9727) ||
              (n >= 9728 && n <= 9838) ||
              9839 === n ||
              (n >= 9840 && n <= 10087) ||
              10088 === n ||
              10089 === n ||
              10090 === n ||
              10091 === n ||
              10092 === n ||
              10093 === n ||
              10094 === n ||
              10095 === n ||
              10096 === n ||
              10097 === n ||
              10098 === n ||
              10099 === n ||
              10100 === n ||
              10101 === n ||
              (n >= 10132 && n <= 10175) ||
              (n >= 10176 && n <= 10180) ||
              10181 === n ||
              10182 === n ||
              (n >= 10183 && n <= 10213) ||
              10214 === n ||
              10215 === n ||
              10216 === n ||
              10217 === n ||
              10218 === n ||
              10219 === n ||
              10220 === n ||
              10221 === n ||
              10222 === n ||
              10223 === n ||
              (n >= 10224 && n <= 10239) ||
              (n >= 10240 && n <= 10495) ||
              (n >= 10496 && n <= 10626) ||
              10627 === n ||
              10628 === n ||
              10629 === n ||
              10630 === n ||
              10631 === n ||
              10632 === n ||
              10633 === n ||
              10634 === n ||
              10635 === n ||
              10636 === n ||
              10637 === n ||
              10638 === n ||
              10639 === n ||
              10640 === n ||
              10641 === n ||
              10642 === n ||
              10643 === n ||
              10644 === n ||
              10645 === n ||
              10646 === n ||
              10647 === n ||
              10648 === n ||
              (n >= 10649 && n <= 10711) ||
              10712 === n ||
              10713 === n ||
              10714 === n ||
              10715 === n ||
              (n >= 10716 && n <= 10747) ||
              10748 === n ||
              10749 === n ||
              (n >= 10750 && n <= 11007) ||
              (n >= 11008 && n <= 11055) ||
              (n >= 11056 && n <= 11076) ||
              (n >= 11077 && n <= 11078) ||
              (n >= 11079 && n <= 11084) ||
              (n >= 11085 && n <= 11123) ||
              (n >= 11124 && n <= 11125) ||
              (n >= 11126 && n <= 11157) ||
              11158 === n ||
              (n >= 11159 && n <= 11263) ||
              (n >= 11776 && n <= 11777) ||
              11778 === n ||
              11779 === n ||
              11780 === n ||
              11781 === n ||
              (n >= 11782 && n <= 11784) ||
              11785 === n ||
              11786 === n ||
              11787 === n ||
              11788 === n ||
              11789 === n ||
              (n >= 11790 && n <= 11798) ||
              11799 === n ||
              (n >= 11800 && n <= 11801) ||
              11802 === n ||
              11803 === n ||
              11804 === n ||
              11805 === n ||
              (n >= 11806 && n <= 11807) ||
              11808 === n ||
              11809 === n ||
              11810 === n ||
              11811 === n ||
              11812 === n ||
              11813 === n ||
              11814 === n ||
              11815 === n ||
              11816 === n ||
              11817 === n ||
              (n >= 11818 && n <= 11822) ||
              11823 === n ||
              (n >= 11824 && n <= 11833) ||
              (n >= 11834 && n <= 11835) ||
              (n >= 11836 && n <= 11839) ||
              11840 === n ||
              11841 === n ||
              11842 === n ||
              (n >= 11843 && n <= 11855) ||
              (n >= 11856 && n <= 11857) ||
              11858 === n ||
              (n >= 11859 && n <= 11903) ||
              (n >= 12289 && n <= 12291) ||
              12296 === n ||
              12297 === n ||
              12298 === n ||
              12299 === n ||
              12300 === n ||
              12301 === n ||
              12302 === n ||
              12303 === n ||
              12304 === n ||
              12305 === n ||
              (n >= 12306 && n <= 12307) ||
              12308 === n ||
              12309 === n ||
              12310 === n ||
              12311 === n ||
              12312 === n ||
              12313 === n ||
              12314 === n ||
              12315 === n ||
              12316 === n ||
              12317 === n ||
              (n >= 12318 && n <= 12319) ||
              12320 === n ||
              12336 === n ||
              64830 === n ||
              64831 === n ||
              (n >= 65093 && n <= 65094)
            )
              break;
            r.push(o), (t += o >= 65536 ? 2 : 1);
          }
          return es.apply(void 0, r);
        };
      var ed = (function () {
        function e(e, t) {
          void 0 === t && (t = {}),
            (this.message = e),
            (this.position = { offset: 0, line: 1, column: 1 }),
            (this.ignoreTag = !!t.ignoreTag),
            (this.locale = t.locale),
            (this.requiresOtherClause = !!t.requiresOtherClause),
            (this.shouldParseSkeletons = !!t.shouldParseSkeletons);
        }
        return (
          (e.prototype.parse = function () {
            if (0 !== this.offset())
              throw Error("parser can only be used once");
            return this.parseMessage(0, "", !1);
          }),
          (e.prototype.parseMessage = function (e, t, r) {
            for (var n = []; !this.isEOF(); ) {
              var o = this.char();
              if (123 === o) {
                var i = this.parseArgument(e, r);
                if (i.err) return i;
                n.push(i.val);
              } else if (125 === o && e > 0) break;
              else if (35 === o && ("plural" === t || "selectordinal" === t)) {
                var a = this.clonePosition();
                this.bump(),
                  n.push({
                    type: b.pound,
                    location: W(a, this.clonePosition()),
                  });
              } else if (60 !== o || this.ignoreTag || 47 !== this.peek()) {
                if (60 === o && !this.ignoreTag && em(this.peek() || 0)) {
                  var i = this.parseTag(e, t);
                  if (i.err) return i;
                  n.push(i.val);
                } else {
                  var i = this.parseLiteral(e, t);
                  if (i.err) return i;
                  n.push(i.val);
                }
              } else {
                if (!r)
                  return this.error(
                    g.UNMATCHED_CLOSING_TAG,
                    W(this.clonePosition(), this.clonePosition())
                  );
                break;
              }
            }
            return { val: n, err: null };
          }),
          (e.prototype.parseTag = function (e, t) {
            var r = this.clonePosition();
            this.bump();
            var n = this.parseTagName();
            if ((this.bumpSpace(), this.bumpIf("/>")))
              return {
                val: {
                  type: b.literal,
                  value: "<".concat(n, "/>"),
                  location: W(r, this.clonePosition()),
                },
                err: null,
              };
            if (!this.bumpIf(">"))
              return this.error(g.INVALID_TAG, W(r, this.clonePosition()));
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              a = this.clonePosition();
            if (!this.bumpIf("</"))
              return this.error(g.UNCLOSED_TAG, W(r, this.clonePosition()));
            if (this.isEOF() || !em(this.char()))
              return this.error(g.INVALID_TAG, W(a, this.clonePosition()));
            var s = this.clonePosition();
            return n !== this.parseTagName()
              ? this.error(g.UNMATCHED_CLOSING_TAG, W(s, this.clonePosition()))
              : (this.bumpSpace(), this.bumpIf(">"))
              ? {
                  val: {
                    type: b.tag,
                    value: n,
                    children: i,
                    location: W(r, this.clonePosition()),
                  },
                  err: null,
                }
              : this.error(g.INVALID_TAG, W(a, this.clonePosition()));
          }),
          (e.prototype.parseTagName = function () {
            var e,
              t = this.offset();
            for (
              this.bump();
              !this.isEOF() &&
              (45 === (e = this.char()) ||
                46 === e ||
                (e >= 48 && e <= 57) ||
                95 === e ||
                (e >= 97 && e <= 122) ||
                (e >= 65 && e <= 90) ||
                183 == e ||
                (e >= 192 && e <= 214) ||
                (e >= 216 && e <= 246) ||
                (e >= 248 && e <= 893) ||
                (e >= 895 && e <= 8191) ||
                (e >= 8204 && e <= 8205) ||
                (e >= 8255 && e <= 8256) ||
                (e >= 8304 && e <= 8591) ||
                (e >= 11264 && e <= 12271) ||
                (e >= 12289 && e <= 55295) ||
                (e >= 63744 && e <= 64975) ||
                (e >= 65008 && e <= 65533) ||
                (e >= 65536 && e <= 983039));

            )
              this.bump();
            return this.message.slice(t, this.offset());
          }),
          (e.prototype.parseLiteral = function (e, t) {
            for (var r = this.clonePosition(), n = ""; ; ) {
              var o = this.tryParseQuote(t);
              if (o) {
                n += o;
                continue;
              }
              var i = this.tryParseUnquoted(e, t);
              if (i) {
                n += i;
                continue;
              }
              var a = this.tryParseLeftAngleBracket();
              if (a) {
                n += a;
                continue;
              }
              break;
            }
            var s = W(r, this.clonePosition());
            return {
              val: { type: b.literal, value: n, location: s },
              err: null,
            };
          }),
          (e.prototype.tryParseLeftAngleBracket = function () {
            var e;
            return this.isEOF() ||
              60 !== this.char() ||
              (!this.ignoreTag && (em((e = this.peek() || 0)) || 47 === e))
              ? null
              : (this.bump(), "<");
          }),
          (e.prototype.tryParseQuote = function (e) {
            if (this.isEOF() || 39 !== this.char()) return null;
            switch (this.peek()) {
              case 39:
                return this.bump(), this.bump(), "'";
              case 123:
              case 60:
              case 62:
              case 125:
                break;
              case 35:
                if ("plural" === e || "selectordinal" === e) break;
                return null;
              default:
                return null;
            }
            this.bump();
            var t = [this.char()];
            for (this.bump(); !this.isEOF(); ) {
              var r = this.char();
              if (39 === r) {
                if (39 === this.peek()) t.push(39), this.bump();
                else {
                  this.bump();
                  break;
                }
              } else t.push(r);
              this.bump();
            }
            return es.apply(void 0, t);
          }),
          (e.prototype.tryParseUnquoted = function (e, t) {
            if (this.isEOF()) return null;
            var r = this.char();
            return 60 === r ||
              123 === r ||
              (35 === r && ("plural" === t || "selectordinal" === t)) ||
              (125 === r && e > 0)
              ? null
              : (this.bump(), es(r));
          }),
          (e.prototype.parseArgument = function (e, t) {
            var r = this.clonePosition();
            if ((this.bump(), this.bumpSpace(), this.isEOF()))
              return this.error(
                g.EXPECT_ARGUMENT_CLOSING_BRACE,
                W(r, this.clonePosition())
              );
            if (125 === this.char())
              return (
                this.bump(),
                this.error(g.EMPTY_ARGUMENT, W(r, this.clonePosition()))
              );
            var n = this.parseIdentifierIfPossible().value;
            if (!n)
              return this.error(
                g.MALFORMED_ARGUMENT,
                W(r, this.clonePosition())
              );
            if ((this.bumpSpace(), this.isEOF()))
              return this.error(
                g.EXPECT_ARGUMENT_CLOSING_BRACE,
                W(r, this.clonePosition())
              );
            switch (this.char()) {
              case 125:
                return (
                  this.bump(),
                  {
                    val: {
                      type: b.argument,
                      value: n,
                      location: W(r, this.clonePosition()),
                    },
                    err: null,
                  }
                );
              case 44:
                if ((this.bump(), this.bumpSpace(), this.isEOF()))
                  return this.error(
                    g.EXPECT_ARGUMENT_CLOSING_BRACE,
                    W(r, this.clonePosition())
                  );
                return this.parseArgumentOptions(e, t, n, r);
              default:
                return this.error(
                  g.MALFORMED_ARGUMENT,
                  W(r, this.clonePosition())
                );
            }
          }),
          (e.prototype.parseIdentifierIfPossible = function () {
            var e = this.clonePosition(),
              t = this.offset(),
              r = y(this.message, t),
              n = t + r.length;
            return (
              this.bumpTo(n), { value: r, location: W(e, this.clonePosition()) }
            );
          }),
          (e.prototype.parseArgumentOptions = function (e, t, r, n) {
            var o,
              i = this.clonePosition(),
              a = this.parseIdentifierIfPossible().value,
              s = this.clonePosition();
            switch (a) {
              case "":
                return this.error(g.EXPECT_ARGUMENT_TYPE, W(i, s));
              case "number":
              case "date":
              case "time":
                this.bumpSpace();
                var l = null;
                if (this.bumpIf(",")) {
                  this.bumpSpace();
                  var u = this.clonePosition(),
                    c = this.parseSimpleArgStyleIfPossible();
                  if (c.err) return c;
                  var h = eh(c.val);
                  if (0 === h.length)
                    return this.error(
                      g.EXPECT_ARGUMENT_STYLE,
                      W(this.clonePosition(), this.clonePosition())
                    );
                  l = { style: h, styleLocation: W(u, this.clonePosition()) };
                }
                var f = this.tryParseArgumentClose(n);
                if (f.err) return f;
                var p = W(n, this.clonePosition());
                if (l && ea(null == l ? void 0 : l.style, "::", 0)) {
                  var d,
                    m = ec(l.style.slice(2));
                  if ("number" === a) {
                    var c = this.parseNumberSkeletonFromString(
                      m,
                      l.styleLocation
                    );
                    if (c.err) return c;
                    return {
                      val: {
                        type: b.number,
                        value: r,
                        location: p,
                        style: c.val,
                      },
                      err: null,
                    };
                  }
                  if (0 === m.length)
                    return this.error(g.EXPECT_DATE_TIME_SKELETON, p);
                  var E = m;
                  this.locale &&
                    (E = (function (e, t) {
                      for (var r = "", n = 0; n < e.length; n++) {
                        var o = e.charAt(n);
                        if ("j" === o) {
                          for (
                            var i = 0;
                            n + 1 < e.length && e.charAt(n + 1) === o;

                          )
                            i++, n++;
                          var a = 1 + (1 & i),
                            s = i < 2 ? 1 : 3 + (i >> 1),
                            l = (function (e) {
                              var t,
                                r = e.hourCycle;
                              if (
                                (void 0 === r &&
                                  e.hourCycles &&
                                  e.hourCycles.length &&
                                  (r = e.hourCycles[0]),
                                r)
                              )
                                switch (r) {
                                  case "h24":
                                    return "k";
                                  case "h23":
                                    return "H";
                                  case "h12":
                                    return "h";
                                  case "h11":
                                    return "K";
                                  default:
                                    throw Error("Invalid hourCycle");
                                }
                              var n = e.language;
                              return (
                                "root" !== n && (t = e.maximize().region),
                                (Z[t || ""] ||
                                  Z[n || ""] ||
                                  Z["".concat(n, "-001")] ||
                                  Z["001"])[0]
                              );
                            })(t);
                          for (("H" == l || "k" == l) && (s = 0); s-- > 0; )
                            r += "a";
                          for (; a-- > 0; ) r = l + r;
                        } else "J" === o ? (r += "H") : (r += o);
                      }
                      return r;
                    })(m, this.locale));
                  var h = {
                    type: v.dateTime,
                    pattern: E,
                    location: l.styleLocation,
                    parsedOptions: this.shouldParseSkeletons
                      ? ((d = {}),
                        E.replace(k, function (e) {
                          var t = e.length;
                          switch (e[0]) {
                            case "G":
                              d.era =
                                4 === t ? "long" : 5 === t ? "narrow" : "short";
                              break;
                            case "y":
                              d.year = 2 === t ? "2-digit" : "numeric";
                              break;
                            case "Y":
                            case "u":
                            case "U":
                            case "r":
                              throw RangeError(
                                "`Y/u/U/r` (year) patterns are not supported, use `y` instead"
                              );
                            case "q":
                            case "Q":
                              throw RangeError(
                                "`q/Q` (quarter) patterns are not supported"
                              );
                            case "M":
                            case "L":
                              d.month = [
                                "numeric",
                                "2-digit",
                                "short",
                                "long",
                                "narrow",
                              ][t - 1];
                              break;
                            case "w":
                            case "W":
                              throw RangeError(
                                "`w/W` (week) patterns are not supported"
                              );
                            case "d":
                              d.day = ["numeric", "2-digit"][t - 1];
                              break;
                            case "D":
                            case "F":
                            case "g":
                              throw RangeError(
                                "`D/F/g` (day) patterns are not supported, use `d` instead"
                              );
                            case "E":
                              d.weekday =
                                4 === t
                                  ? "short"
                                  : 5 === t
                                  ? "narrow"
                                  : "short";
                              break;
                            case "e":
                              if (t < 4)
                                throw RangeError(
                                  "`e..eee` (weekday) patterns are not supported"
                                );
                              d.weekday = ["short", "long", "narrow", "short"][
                                t - 4
                              ];
                              break;
                            case "c":
                              if (t < 4)
                                throw RangeError(
                                  "`c..ccc` (weekday) patterns are not supported"
                                );
                              d.weekday = ["short", "long", "narrow", "short"][
                                t - 4
                              ];
                              break;
                            case "a":
                              d.hour12 = !0;
                              break;
                            case "b":
                            case "B":
                              throw RangeError(
                                "`b/B` (period) patterns are not supported, use `a` instead"
                              );
                            case "h":
                              (d.hourCycle = "h12"),
                                (d.hour = ["numeric", "2-digit"][t - 1]);
                              break;
                            case "H":
                              (d.hourCycle = "h23"),
                                (d.hour = ["numeric", "2-digit"][t - 1]);
                              break;
                            case "K":
                              (d.hourCycle = "h11"),
                                (d.hour = ["numeric", "2-digit"][t - 1]);
                              break;
                            case "k":
                              (d.hourCycle = "h24"),
                                (d.hour = ["numeric", "2-digit"][t - 1]);
                              break;
                            case "j":
                            case "J":
                            case "C":
                              throw RangeError(
                                "`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead"
                              );
                            case "m":
                              d.minute = ["numeric", "2-digit"][t - 1];
                              break;
                            case "s":
                              d.second = ["numeric", "2-digit"][t - 1];
                              break;
                            case "S":
                            case "A":
                              throw RangeError(
                                "`S/A` (second) patterns are not supported, use `s` instead"
                              );
                            case "z":
                              d.timeZoneName = t < 4 ? "short" : "long";
                              break;
                            case "Z":
                            case "O":
                            case "v":
                            case "V":
                            case "X":
                            case "x":
                              throw RangeError(
                                "`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead"
                              );
                          }
                          return "";
                        }),
                        d)
                      : {},
                  };
                  return {
                    val: {
                      type: "date" === a ? b.date : b.time,
                      value: r,
                      location: p,
                      style: h,
                    },
                    err: null,
                  };
                }
                return {
                  val: {
                    type:
                      "number" === a
                        ? b.number
                        : "date" === a
                        ? b.date
                        : b.time,
                    value: r,
                    location: p,
                    style:
                      null !== (o = null == l ? void 0 : l.style) &&
                      void 0 !== o
                        ? o
                        : null,
                  },
                  err: null,
                };
              case "plural":
              case "selectordinal":
              case "select":
                var y = this.clonePosition();
                if ((this.bumpSpace(), !this.bumpIf(",")))
                  return this.error(
                    g.EXPECT_SELECT_ARGUMENT_OPTIONS,
                    W(y, A({}, y))
                  );
                this.bumpSpace();
                var _ = this.parseIdentifierIfPossible(),
                  T = 0;
                if ("select" !== a && "offset" === _.value) {
                  if (!this.bumpIf(":"))
                    return this.error(
                      g.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                      W(this.clonePosition(), this.clonePosition())
                    );
                  this.bumpSpace();
                  var c = this.tryParseDecimalInteger(
                    g.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                    g.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE
                  );
                  if (c.err) return c;
                  this.bumpSpace(),
                    (_ = this.parseIdentifierIfPossible()),
                    (T = c.val);
                }
                var N = this.tryParsePluralOrSelectOptions(e, a, t, _);
                if (N.err) return N;
                var f = this.tryParseArgumentClose(n);
                if (f.err) return f;
                var x = W(n, this.clonePosition());
                if ("select" === a)
                  return {
                    val: {
                      type: b.select,
                      value: r,
                      options: el(N.val),
                      location: x,
                    },
                    err: null,
                  };
                return {
                  val: {
                    type: b.plural,
                    value: r,
                    options: el(N.val),
                    offset: T,
                    pluralType: "plural" === a ? "cardinal" : "ordinal",
                    location: x,
                  },
                  err: null,
                };
              default:
                return this.error(g.INVALID_ARGUMENT_TYPE, W(i, s));
            }
          }),
          (e.prototype.tryParseArgumentClose = function (e) {
            return this.isEOF() || 125 !== this.char()
              ? this.error(
                  g.EXPECT_ARGUMENT_CLOSING_BRACE,
                  W(e, this.clonePosition())
                )
              : (this.bump(), { val: !0, err: null });
          }),
          (e.prototype.parseSimpleArgStyleIfPossible = function () {
            for (var e = 0, t = this.clonePosition(); !this.isEOF(); )
              switch (this.char()) {
                case 39:
                  this.bump();
                  var r = this.clonePosition();
                  if (!this.bumpUntil("'"))
                    return this.error(
                      g.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
                      W(r, this.clonePosition())
                    );
                  this.bump();
                  break;
                case 123:
                  (e += 1), this.bump();
                  break;
                case 125:
                  if (!(e > 0))
                    return {
                      val: this.message.slice(t.offset, this.offset()),
                      err: null,
                    };
                  e -= 1;
                  break;
                default:
                  this.bump();
              }
            return {
              val: this.message.slice(t.offset, this.offset()),
              err: null,
            };
          }),
          (e.prototype.parseNumberSkeletonFromString = function (e, t) {
            var r = [];
            try {
              r = (function (e) {
                if (0 === e.length)
                  throw Error("Number skeleton cannot be empty");
                for (
                  var t = e.split(G).filter(function (e) {
                      return e.length > 0;
                    }),
                    r = [],
                    n = 0;
                  n < t.length;
                  n++
                ) {
                  var o = t[n].split("/");
                  if (0 === o.length) throw Error("Invalid number skeleton");
                  for (var i = o[0], a = o.slice(1), s = 0; s < a.length; s++)
                    if (0 === a[s].length)
                      throw Error("Invalid number skeleton");
                  r.push({ stem: i, options: a });
                }
                return r;
              })(e);
            } catch (e) {
              return this.error(g.INVALID_NUMBER_SKELETON, t);
            }
            return {
              val: {
                type: v.number,
                tokens: r,
                location: t,
                parsedOptions: this.shouldParseSkeletons
                  ? (function (e) {
                      for (var t = {}, r = 0; r < e.length; r++) {
                        var n = e[r];
                        switch (n.stem) {
                          case "percent":
                          case "%":
                            t.style = "percent";
                            continue;
                          case "%x100":
                            (t.style = "percent"), (t.scale = 100);
                            continue;
                          case "currency":
                            (t.style = "currency"), (t.currency = n.options[0]);
                            continue;
                          case "group-off":
                          case ",_":
                            t.useGrouping = !1;
                            continue;
                          case "precision-integer":
                          case ".":
                            t.maximumFractionDigits = 0;
                            continue;
                          case "measure-unit":
                          case "unit":
                            (t.style = "unit"),
                              (t.unit = n.options[0].replace(/^(.*?)-/, ""));
                            continue;
                          case "compact-short":
                          case "K":
                            (t.notation = "compact"),
                              (t.compactDisplay = "short");
                            continue;
                          case "compact-long":
                          case "KK":
                            (t.notation = "compact"),
                              (t.compactDisplay = "long");
                            continue;
                          case "scientific":
                            t = A(
                              A(A({}, t), { notation: "scientific" }),
                              n.options.reduce(function (e, t) {
                                return A(A({}, e), K(t) || {});
                              }, {})
                            );
                            continue;
                          case "engineering":
                            t = A(
                              A(A({}, t), { notation: "engineering" }),
                              n.options.reduce(function (e, t) {
                                return A(A({}, e), K(t) || {});
                              }, {})
                            );
                            continue;
                          case "notation-simple":
                            t.notation = "standard";
                            continue;
                          case "unit-width-narrow":
                            (t.currencyDisplay = "narrowSymbol"),
                              (t.unitDisplay = "narrow");
                            continue;
                          case "unit-width-short":
                            (t.currencyDisplay = "code"),
                              (t.unitDisplay = "short");
                            continue;
                          case "unit-width-full-name":
                            (t.currencyDisplay = "name"),
                              (t.unitDisplay = "long");
                            continue;
                          case "unit-width-iso-code":
                            t.currencyDisplay = "symbol";
                            continue;
                          case "scale":
                            t.scale = parseFloat(n.options[0]);
                            continue;
                          case "integer-width":
                            if (n.options.length > 1)
                              throw RangeError(
                                "integer-width stems only accept a single optional option"
                              );
                            n.options[0].replace(
                              F,
                              function (e, r, n, o, i, a) {
                                if (r) t.minimumIntegerDigits = n.length;
                                else if (o && i)
                                  throw Error(
                                    "We currently do not support maximum integer digits"
                                  );
                                else if (a)
                                  throw Error(
                                    "We currently do not support exact integer digits"
                                  );
                                return "";
                              }
                            );
                            continue;
                        }
                        if (V.test(n.stem)) {
                          t.minimumIntegerDigits = n.stem.length;
                          continue;
                        }
                        if (U.test(n.stem)) {
                          if (n.options.length > 1)
                            throw RangeError(
                              "Fraction-precision stems only accept a single optional option"
                            );
                          n.stem.replace(U, function (e, r, n, o, i, a) {
                            return (
                              "*" === n
                                ? (t.minimumFractionDigits = r.length)
                                : o && "#" === o[0]
                                ? (t.maximumFractionDigits = o.length)
                                : i && a
                                ? ((t.minimumFractionDigits = i.length),
                                  (t.maximumFractionDigits =
                                    i.length + a.length))
                                : ((t.minimumFractionDigits = r.length),
                                  (t.maximumFractionDigits = r.length)),
                              ""
                            );
                          });
                          var o = n.options[0];
                          "w" === o
                            ? (t = A(A({}, t), {
                                trailingZeroDisplay: "stripIfInteger",
                              }))
                            : o && (t = A(A({}, t), z(o)));
                          continue;
                        }
                        if (D.test(n.stem)) {
                          t = A(A({}, t), z(n.stem));
                          continue;
                        }
                        var i = K(n.stem);
                        i && (t = A(A({}, t), i));
                        var a = (function (e) {
                          var t;
                          if (
                            ("E" === e[0] && "E" === e[1]
                              ? ((t = { notation: "engineering" }),
                                (e = e.slice(2)))
                              : "E" === e[0] &&
                                ((t = { notation: "scientific" }),
                                (e = e.slice(1))),
                            t)
                          ) {
                            var r = e.slice(0, 2);
                            if (
                              ("+!" === r
                                ? ((t.signDisplay = "always"), (e = e.slice(2)))
                                : "+?" === r &&
                                  ((t.signDisplay = "exceptZero"),
                                  (e = e.slice(2))),
                              !V.test(e))
                            )
                              throw Error(
                                "Malformed concise eng/scientific notation"
                              );
                            t.minimumIntegerDigits = e.length;
                          }
                          return t;
                        })(n.stem);
                        a && (t = A(A({}, t), a));
                      }
                      return t;
                    })(r)
                  : {},
              },
              err: null,
            };
          }),
          (e.prototype.tryParsePluralOrSelectOptions = function (e, t, r, n) {
            for (
              var o, i = !1, a = [], s = new Set(), l = n.value, u = n.location;
              ;

            ) {
              if (0 === l.length) {
                var c = this.clonePosition();
                if ("select" !== t && this.bumpIf("=")) {
                  var h = this.tryParseDecimalInteger(
                    g.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                    g.INVALID_PLURAL_ARGUMENT_SELECTOR
                  );
                  if (h.err) return h;
                  (u = W(c, this.clonePosition())),
                    (l = this.message.slice(c.offset, this.offset()));
                } else break;
              }
              if (s.has(l))
                return this.error(
                  "select" === t
                    ? g.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : g.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
                  u
                );
              "other" === l && (i = !0), this.bumpSpace();
              var f = this.clonePosition();
              if (!this.bumpIf("{"))
                return this.error(
                  "select" === t
                    ? g.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : g.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
                  W(this.clonePosition(), this.clonePosition())
                );
              var p = this.parseMessage(e + 1, t, r);
              if (p.err) return p;
              var d = this.tryParseArgumentClose(f);
              if (d.err) return d;
              a.push([
                l,
                { value: p.val, location: W(f, this.clonePosition()) },
              ]),
                s.add(l),
                this.bumpSpace(),
                (l = (o = this.parseIdentifierIfPossible()).value),
                (u = o.location);
            }
            return 0 === a.length
              ? this.error(
                  "select" === t
                    ? g.EXPECT_SELECT_ARGUMENT_SELECTOR
                    : g.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  W(this.clonePosition(), this.clonePosition())
                )
              : this.requiresOtherClause && !i
              ? this.error(
                  g.MISSING_OTHER_CLAUSE,
                  W(this.clonePosition(), this.clonePosition())
                )
              : { val: a, err: null };
          }),
          (e.prototype.tryParseDecimalInteger = function (e, t) {
            var r = 1,
              n = this.clonePosition();
            this.bumpIf("+") || (this.bumpIf("-") && (r = -1));
            for (var o = !1, i = 0; !this.isEOF(); ) {
              var a = this.char();
              if (a >= 48 && a <= 57)
                (o = !0), (i = 10 * i + (a - 48)), this.bump();
              else break;
            }
            var s = W(n, this.clonePosition());
            return o
              ? en((i *= r))
                ? { val: i, err: null }
                : this.error(t, s)
              : this.error(e, s);
          }),
          (e.prototype.offset = function () {
            return this.position.offset;
          }),
          (e.prototype.isEOF = function () {
            return this.offset() === this.message.length;
          }),
          (e.prototype.clonePosition = function () {
            return {
              offset: this.position.offset,
              line: this.position.line,
              column: this.position.column,
            };
          }),
          (e.prototype.char = function () {
            var e = this.position.offset;
            if (e >= this.message.length) throw Error("out of bound");
            var t = eu(this.message, e);
            if (void 0 === t)
              throw Error(
                "Offset ".concat(e, " is at invalid UTF-16 code unit boundary")
              );
            return t;
          }),
          (e.prototype.error = function (e, t) {
            return {
              val: null,
              err: { kind: e, message: this.message, location: t },
            };
          }),
          (e.prototype.bump = function () {
            if (!this.isEOF()) {
              var e = this.char();
              10 === e
                ? ((this.position.line += 1),
                  (this.position.column = 1),
                  (this.position.offset += 1))
                : ((this.position.column += 1),
                  (this.position.offset += e < 65536 ? 1 : 2));
            }
          }),
          (e.prototype.bumpIf = function (e) {
            if (ea(this.message, e, this.offset())) {
              for (var t = 0; t < e.length; t++) this.bump();
              return !0;
            }
            return !1;
          }),
          (e.prototype.bumpUntil = function (e) {
            var t = this.offset(),
              r = this.message.indexOf(e, t);
            return r >= 0
              ? (this.bumpTo(r), !0)
              : (this.bumpTo(this.message.length), !1);
          }),
          (e.prototype.bumpTo = function (e) {
            if (this.offset() > e)
              throw Error(
                "targetOffset "
                  .concat(
                    e,
                    " must be greater than or equal to the current offset "
                  )
                  .concat(this.offset())
              );
            for (e = Math.min(e, this.message.length); ; ) {
              var t = this.offset();
              if (t === e) break;
              if (t > e)
                throw Error(
                  "targetOffset ".concat(
                    e,
                    " is at invalid UTF-16 code unit boundary"
                  )
                );
              if ((this.bump(), this.isEOF())) break;
            }
          }),
          (e.prototype.bumpSpace = function () {
            for (; !this.isEOF() && eg(this.char()); ) this.bump();
          }),
          (e.prototype.peek = function () {
            if (this.isEOF()) return null;
            var e = this.char(),
              t = this.offset(),
              r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
            return null != r ? r : null;
          }),
          e
        );
      })();
      function em(e) {
        return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
      }
      function eg(e) {
        return (
          (e >= 9 && e <= 13) ||
          32 === e ||
          133 === e ||
          (e >= 8206 && e <= 8207) ||
          8232 === e ||
          8233 === e
        );
      }
      function eb(e, t) {
        void 0 === t && (t = {}),
          (t = A({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t));
        var r = new ed(e, t).parse();
        if (r.err) {
          var n = SyntaxError(g[r.err.kind]);
          throw (
            ((n.location = r.err.location),
            (n.originalMessage = r.err.message),
            n)
          );
        }
        return (
          (null == t ? void 0 : t.captureLocation) ||
            (function e(t) {
              t.forEach(function (t) {
                if ((delete t.location, O(t) || M(t)))
                  for (var r in t.options)
                    delete t.options[r].location, e(t.options[r].value);
                else
                  B(t) && R(t.style)
                    ? delete t.style.location
                    : (I(t) || P(t)) && L(t.style)
                    ? delete t.style.location
                    : C(t) && e(t.children);
              });
            })(r.val),
          r.val
        );
      }
      function ev(e, t) {
        var r = t && t.cache ? t.cache : ex,
          n = t && t.serializer ? t.serializer : eT;
        return (t && t.strategy ? t.strategy : e_)(e, {
          cache: r,
          serializer: n,
        });
      }
      function eE(e, t, r, n) {
        var o =
            null == n || "number" == typeof n || "boolean" == typeof n
              ? n
              : r(n),
          i = t.get(o);
        return void 0 === i && ((i = e.call(this, n)), t.set(o, i)), i;
      }
      function ey(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          i = t.get(o);
        return void 0 === i && ((i = e.apply(this, n)), t.set(o, i)), i;
      }
      function e_(e, t) {
        var r,
          n,
          o = 1 === e.length ? eE : ey;
        return (
          (r = t.cache.create()), (n = t.serializer), o.bind(this, e, r, n)
        );
      }
      var eT = function () {
        return JSON.stringify(arguments);
      };
      function eN() {
        this.cache = Object.create(null);
      }
      (eN.prototype.get = function (e) {
        return this.cache[e];
      }),
        (eN.prototype.set = function (e, t) {
          this.cache[e] = t;
        });
      var ex = {
          create: function () {
            return new eN();
          },
        },
        ew = {
          variadic: function (e, t) {
            var r, n;
            return (
              (r = t.cache.create()), (n = t.serializer), ey.bind(this, e, r, n)
            );
          },
          monadic: function (e, t) {
            var r, n;
            return (
              (r = t.cache.create()), (n = t.serializer), eE.bind(this, e, r, n)
            );
          },
        };
      ((f = _ || (_ = {})).MISSING_VALUE = "MISSING_VALUE"),
        (f.INVALID_VALUE = "INVALID_VALUE"),
        (f.MISSING_INTL_API = "MISSING_INTL_API");
      var eA = (function (e) {
          function t(t, r, n) {
            var o = e.call(this, t) || this;
            return (o.code = r), (o.originalMessage = n), o;
          }
          return (
            w(t, e),
            (t.prototype.toString = function () {
              return "[formatjs Error: "
                .concat(this.code, "] ")
                .concat(this.message);
            }),
            t
          );
        })(Error),
        eH = (function (e) {
          function t(t, r, n, o) {
            return (
              e.call(
                this,
                'Invalid values for "'
                  .concat(t, '": "')
                  .concat(r, '". Options are "')
                  .concat(Object.keys(n).join('", "'), '"'),
                _.INVALID_VALUE,
                o
              ) || this
            );
          }
          return w(t, e), t;
        })(eA),
        eS = (function (e) {
          function t(t, r, n) {
            return (
              e.call(
                this,
                'Value for "'.concat(t, '" must be of type ').concat(r),
                _.INVALID_VALUE,
                n
              ) || this
            );
          }
          return w(t, e), t;
        })(eA),
        eB = (function (e) {
          function t(t, r) {
            return (
              e.call(
                this,
                'The intl string context variable "'
                  .concat(t, '" was not provided to the string "')
                  .concat(r, '"'),
                _.MISSING_VALUE,
                r
              ) || this
            );
          }
          return w(t, e), t;
        })(eA);
      function eI(e) {
        return {
          create: function () {
            return {
              get: function (t) {
                return e[t];
              },
              set: function (t, r) {
                e[t] = r;
              },
            };
          },
        };
      }
      ((p = T || (T = {}))[(p.literal = 0)] = "literal"),
        (p[(p.object = 1)] = "object");
      var eP = (function () {
          function e(t, r, n, o) {
            var i,
              a,
              s = this;
            if (
              (void 0 === r && (r = e.defaultLocale),
              (this.formatterCache = {
                number: {},
                dateTime: {},
                pluralRules: {},
              }),
              (this.format = function (e) {
                var t = s.formatToParts(e);
                if (1 === t.length) return t[0].value;
                var r = t.reduce(function (e, t) {
                  return (
                    e.length &&
                    t.type === T.literal &&
                    "string" == typeof e[e.length - 1]
                      ? (e[e.length - 1] += t.value)
                      : e.push(t.value),
                    e
                  );
                }, []);
                return r.length <= 1 ? r[0] || "" : r;
              }),
              (this.formatToParts = function (e) {
                return (function e(t, r, n, o, i, a, s) {
                  if (1 === t.length && S(t[0]))
                    return [{ type: T.literal, value: t[0].value }];
                  for (var l = [], u = 0; u < t.length; u++) {
                    var c = t[u];
                    if (S(c)) {
                      l.push({ type: T.literal, value: c.value });
                      continue;
                    }
                    if (c.type === b.pound) {
                      "number" == typeof a &&
                        l.push({
                          type: T.literal,
                          value: n.getNumberFormat(r).format(a),
                        });
                      continue;
                    }
                    var h = c.value;
                    if (!(i && h in i)) throw new eB(h, s);
                    var f = i[h];
                    if (c.type === b.argument) {
                      (f && "string" != typeof f && "number" != typeof f) ||
                        (f =
                          "string" == typeof f || "number" == typeof f
                            ? String(f)
                            : ""),
                        l.push({
                          type: "string" == typeof f ? T.literal : T.object,
                          value: f,
                        });
                      continue;
                    }
                    if (I(c)) {
                      var p =
                        "string" == typeof c.style
                          ? o.date[c.style]
                          : L(c.style)
                          ? c.style.parsedOptions
                          : void 0;
                      l.push({
                        type: T.literal,
                        value: n.getDateTimeFormat(r, p).format(f),
                      });
                      continue;
                    }
                    if (P(c)) {
                      var p =
                        "string" == typeof c.style
                          ? o.time[c.style]
                          : L(c.style)
                          ? c.style.parsedOptions
                          : o.time.medium;
                      l.push({
                        type: T.literal,
                        value: n.getDateTimeFormat(r, p).format(f),
                      });
                      continue;
                    }
                    if (B(c)) {
                      var p =
                        "string" == typeof c.style
                          ? o.number[c.style]
                          : R(c.style)
                          ? c.style.parsedOptions
                          : void 0;
                      p && p.scale && (f *= p.scale || 1),
                        l.push({
                          type: T.literal,
                          value: n.getNumberFormat(r, p).format(f),
                        });
                      continue;
                    }
                    if (C(c)) {
                      var d = c.children,
                        m = c.value,
                        g = i[m];
                      if ("function" != typeof g)
                        throw new eS(m, "function", s);
                      var v = g(
                        e(d, r, n, o, i, a).map(function (e) {
                          return e.value;
                        })
                      );
                      Array.isArray(v) || (v = [v]),
                        l.push.apply(
                          l,
                          v.map(function (e) {
                            return {
                              type: "string" == typeof e ? T.literal : T.object,
                              value: e,
                            };
                          })
                        );
                    }
                    if (O(c)) {
                      var E = c.options[f] || c.options.other;
                      if (!E)
                        throw new eH(c.value, f, Object.keys(c.options), s);
                      l.push.apply(l, e(E.value, r, n, o, i));
                      continue;
                    }
                    if (M(c)) {
                      var E = c.options["=".concat(f)];
                      if (!E) {
                        if (!Intl.PluralRules)
                          throw new eA(
                            'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                            _.MISSING_INTL_API,
                            s
                          );
                        var y = n
                          .getPluralRules(r, { type: c.pluralType })
                          .select(f - (c.offset || 0));
                        E = c.options[y] || c.options.other;
                      }
                      if (!E)
                        throw new eH(c.value, f, Object.keys(c.options), s);
                      l.push.apply(
                        l,
                        e(E.value, r, n, o, i, f - (c.offset || 0))
                      );
                      continue;
                    }
                  }
                  return l.length < 2
                    ? l
                    : l.reduce(function (e, t) {
                        var r = e[e.length - 1];
                        return (
                          r && r.type === T.literal && t.type === T.literal
                            ? (r.value += t.value)
                            : e.push(t),
                          e
                        );
                      }, []);
                })(
                  s.ast,
                  s.locales,
                  s.formatters,
                  s.formats,
                  e,
                  void 0,
                  s.message
                );
              }),
              (this.resolvedOptions = function () {
                return { locale: s.resolvedLocale.toString() };
              }),
              (this.getAst = function () {
                return s.ast;
              }),
              (this.locales = r),
              (this.resolvedLocale = e.resolveLocale(r)),
              "string" == typeof t)
            ) {
              if (((this.message = t), !e.__parse))
                throw TypeError(
                  "IntlMessageFormat.__parse must be set to process `message` of type `string`"
                );
              this.ast = e.__parse(t, {
                ignoreTag: null == o ? void 0 : o.ignoreTag,
                locale: this.resolvedLocale,
              });
            } else this.ast = t;
            if (!Array.isArray(this.ast))
              throw TypeError("A message must be provided as a String or AST.");
            (this.formats =
              ((i = e.formats),
              n
                ? Object.keys(i).reduce(function (e, t) {
                    var r, o;
                    return (
                      (e[t] =
                        ((r = i[t]),
                        (o = n[t])
                          ? A(
                              A(A({}, r || {}), o || {}),
                              Object.keys(r).reduce(function (e, t) {
                                return (e[t] = A(A({}, r[t]), o[t] || {})), e;
                              }, {})
                            )
                          : r)),
                      e
                    );
                  }, A({}, i))
                : i)),
              (this.formatters =
                (o && o.formatters) ||
                (void 0 === (a = this.formatterCache) &&
                  (a = { number: {}, dateTime: {}, pluralRules: {} }),
                {
                  getNumberFormat: ev(
                    function () {
                      for (var e, t = [], r = 0; r < arguments.length; r++)
                        t[r] = arguments[r];
                      return new ((e = Intl.NumberFormat).bind.apply(
                        e,
                        H([void 0], t, !1)
                      ))();
                    },
                    { cache: eI(a.number), strategy: ew.variadic }
                  ),
                  getDateTimeFormat: ev(
                    function () {
                      for (var e, t = [], r = 0; r < arguments.length; r++)
                        t[r] = arguments[r];
                      return new ((e = Intl.DateTimeFormat).bind.apply(
                        e,
                        H([void 0], t, !1)
                      ))();
                    },
                    { cache: eI(a.dateTime), strategy: ew.variadic }
                  ),
                  getPluralRules: ev(
                    function () {
                      for (var e, t = [], r = 0; r < arguments.length; r++)
                        t[r] = arguments[r];
                      return new ((e = Intl.PluralRules).bind.apply(
                        e,
                        H([void 0], t, !1)
                      ))();
                    },
                    { cache: eI(a.pluralRules), strategy: ew.variadic }
                  ),
                }));
          }
          return (
            Object.defineProperty(e, "defaultLocale", {
              get: function () {
                return (
                  e.memoizedDefaultLocale ||
                    (e.memoizedDefaultLocale =
                      new Intl.NumberFormat().resolvedOptions().locale),
                  e.memoizedDefaultLocale
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.memoizedDefaultLocale = null),
            (e.resolveLocale = function (e) {
              var t = Intl.NumberFormat.supportedLocalesOf(e);
              return new Intl.Locale(
                t.length > 0 ? t[0] : "string" == typeof e ? e : e[0]
              );
            }),
            (e.__parse = eb),
            (e.formats = {
              number: {
                integer: { maximumFractionDigits: 0 },
                currency: { style: "currency" },
                percent: { style: "percent" },
              },
              date: {
                short: { month: "numeric", day: "numeric", year: "2-digit" },
                medium: { month: "short", day: "numeric", year: "numeric" },
                long: { month: "long", day: "numeric", year: "numeric" },
                full: {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                },
              },
              time: {
                short: { hour: "numeric", minute: "numeric" },
                medium: {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                },
                long: {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  timeZoneName: "short",
                },
                full: {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  timeZoneName: "short",
                },
              },
            }),
            e
          );
        })(),
        eO = r(7294);
      function eM(e) {
        return [e.namespace, e.key]
          .filter(function (e) {
            return null != e;
          })
          .join(".");
      }
      function eC(e) {
        console.error(e);
      }
      function eR(e, t, r) {
        if (!e) throw Error(void 0);
        var n = e;
        return (
          t.split(".").forEach(function (e) {
            var t = n[e];
            if (null == e || null == t) throw Error(void 0);
            n = t;
          }),
          n
        );
      }
      function eL(e) {
        var t = e.messages,
          r = e.namespace,
          n = e.onError;
        try {
          if (!t) throw Error(void 0);
          var o = r ? eR(t, r) : t;
          if (!o) throw Error(void 0);
          return o;
        } catch (e) {
          var i = new N(m.MISSING_MESSAGE, e.message);
          return (void 0 === n ? eC : n)(i), i;
        }
      }
      function ej(e) {
        var t = e.cachedFormatsByLocale,
          r = e.defaultTranslationValues,
          o = e.formats,
          i = e.getMessageFallback,
          a = void 0 === i ? eM : i,
          s = e.locale,
          l = e.messagesOrError,
          u = e.namespace,
          c = e.onError,
          h = e.timeZone;
        function f(e, t, r) {
          var n = new N(t, r);
          return c(n), a({ error: n, key: e, namespace: u });
        }
        function p(e, i, c) {
          if (l instanceof N) return a({ error: l, key: e, namespace: u });
          try {
            d = eR(l, e, u);
          } catch (t) {
            return f(e, m.MISSING_MESSAGE, t.message);
          }
          var p,
            d,
            g,
            b,
            v,
            E,
            y,
            _,
            T = [u, e, String(d)]
              .filter(function (e) {
                return null != e;
              })
              .join(".");
          if (null != t && null != (p = t[s]) && p[T])
            g = null == t ? void 0 : t[s][T];
          else {
            if ("object" == typeof d)
              return (
                (b = Array.isArray(d)
                  ? m.INVALID_MESSAGE
                  : m.INSUFFICIENT_PATH),
                f(e, b, v)
              );
            try {
              g = new eP(
                d,
                s,
                ((E = n({}, o, c)),
                (_ = h
                  ? n({}, E, {
                      dateTime: (y = E.dateTime)
                        ? Object.keys(y).reduce(function (e, t) {
                            return (e[t] = n({ timeZone: h }, y[t])), e;
                          }, {})
                        : y,
                    })
                  : E),
                n({}, _, {
                  date: null == _ ? void 0 : _.dateTime,
                  time: null == _ ? void 0 : _.dateTime,
                }))
              );
            } catch (t) {
              return f(e, m.INVALID_MESSAGE, t.message);
            }
            t && (t[s] || (t[s] = {}), (t[s][T] = g));
          }
          try {
            var x = g.format(
              (function (e) {
                if (0 !== Object.keys(e).length) {
                  var t = {};
                  return (
                    Object.keys(e).forEach(function (r) {
                      var n,
                        o = 0,
                        i = e[r];
                      (n =
                        "function" == typeof i
                          ? function (e) {
                              var t = i(e);
                              return (0, eO.isValidElement)(t)
                                ? (0, eO.cloneElement)(t, { key: r + o++ })
                                : t;
                            }
                          : i),
                        (t[r] = n);
                    }),
                    t
                  );
                }
              })(n({}, r, i))
            );
            if (null == x) throw Error(void 0);
            return (0, eO.isValidElement)(x) ||
              Array.isArray(x) ||
              "string" == typeof x
              ? x
              : String(x);
          } catch (t) {
            return f(e, m.FORMATTING_ERROR, t.message);
          }
        }
        function d(e, t, r) {
          var n = p(e, t, r);
          return "string" != typeof n ? f(e, m.INVALID_MESSAGE, void 0) : n;
        }
        return (
          (d.rich = p),
          (d.raw = function (e) {
            if (l instanceof N) return a({ error: l, key: e, namespace: u });
            try {
              return eR(l, e, u);
            } catch (t) {
              return f(e, m.MISSING_MESSAGE, t.message);
            }
          }),
          d
        );
      }
      function ek(e, t) {
        return e === t ? void 0 : e.slice((t + ".").length);
      }
      var eG = ["getMessageFallback", "messages", "namespace", "onError"],
        eU = ["getMessageFallback", "messages", "namespace", "onError"];
      function eD(e) {
        var t = e.getMessageFallback,
          r = e.messages,
          o = e.namespace,
          i = e.onError;
        return (function (e, t) {
          var r = e.getMessageFallback,
            o = e.messages,
            i = e.namespace,
            a = e.onError,
            s = ej(
              n({}, l(e, eG), {
                onError: a,
                getMessageFallback: r,
                messagesOrError: eL({
                  messages: (o = o[t]),
                  namespace: (i = ek(i, t)),
                  onError: a,
                }),
              })
            ),
            u = s.rich;
          function c() {
            return s.apply(void 0, arguments);
          }
          return (
            (c.rich = function (e, t, n) {
              var o = u(e, t, n);
              if ("string" != typeof o) {
                var s = new N(m.FORMATTING_ERROR, void 0);
                return a(s), r({ error: s, key: e, namespace: i });
              }
              return o;
            }),
            (c.raw = s.raw),
            c
          );
        })(
          n({}, l(e, eU), {
            onError: void 0 === i ? eC : i,
            getMessageFallback: void 0 === t ? eM : t,
            messages: { "!": r },
            namespace: o ? "!." + o : "!",
          }),
          "!"
        );
      }
      var eF = 86400 * (365 / 12);
      function eV(e) {
        var t = e.formats,
          r = e.locale,
          o = e.now,
          i = e.onError,
          a = void 0 === i ? eC : i,
          s = e.timeZone;
        function l(e, t, r, n) {
          var o;
          try {
            o = (function (e, t) {
              var r;
              if ("string" == typeof t) {
                if (!(r = null == e ? void 0 : e[t])) {
                  var n = new N(m.MISSING_FORMAT, void 0);
                  throw (a(n), n);
                }
              } else r = t;
              return r;
            })(r, t);
          } catch (t) {
            return String(e);
          }
          try {
            return n(o);
          } catch (t) {
            return a(new N(m.FORMATTING_ERROR, t.message)), String(e);
          }
        }
        return {
          dateTime: function (e, o) {
            return l(e, o, null == t ? void 0 : t.dateTime, function (t) {
              var o;
              return (
                s &&
                  !(null != (o = t) && o.timeZone) &&
                  (t = n({}, t, { timeZone: s })),
                new Intl.DateTimeFormat(r, t).format(e)
              );
            });
          },
          number: function (e, n) {
            return l(e, n, null == t ? void 0 : t.number, function (t) {
              return new Intl.NumberFormat(r, t).format(e);
            });
          },
          relativeTime: function (e, t) {
            try {
              if (!t) {
                if (o) t = o;
                else throw Error(void 0);
              }
              var n,
                i,
                s,
                l,
                u = e instanceof Date ? e : new Date(e),
                c = t instanceof Date ? t : new Date(t),
                h =
                  ((n = (u.getTime() - c.getTime()) / 1e3),
                  (l = Math.abs(n)) < 60
                    ? ((s = "second"), (i = Math.round(n)))
                    : l < 3600
                    ? ((s = "minute"), (i = Math.round(n / 60)))
                    : l < 86400
                    ? ((s = "hour"), (i = Math.round(n / 3600)))
                    : l < 604800
                    ? ((s = "day"), (i = Math.round(n / 86400)))
                    : l < eF
                    ? ((s = "week"), (i = Math.round(n / 604800)))
                    : l < 31536e3
                    ? ((s = "month"), (i = Math.round(n / eF)))
                    : ((s = "year"), (i = Math.round(n / 31536e3))),
                  { value: i, unit: s }),
                f = h.unit,
                p = h.value;
              return new Intl.RelativeTimeFormat(r, { numeric: "auto" }).format(
                p,
                f
              );
            } catch (t) {
              return a(new N(m.FORMATTING_ERROR, t.message)), String(e);
            }
          },
        };
      }
      function ez() {
        var e = eV.apply(void 0, arguments);
        return {
          formatDateTime: e.dateTime,
          formatNumber: e.number,
          formatRelativeTime: e.relativeTime,
        };
      }
      var eK = (0, eO.createContext)(void 0),
        eX = ["getMessageFallback", "messages", "onError"],
        eZ = ["children"];
      function eY(e) {
        var t,
          r,
          o,
          i = e.children,
          a = l(e, eZ);
        return eO.createElement(
          eK.Provider,
          {
            value:
              ((t = a.getMessageFallback),
              (r = a.messages),
              (o = a.onError),
              n({}, l(a, eX), {
                messages: r,
                onError: o || eC,
                getMessageFallback: t || eM,
              })),
          },
          i
        );
      }
      function eq() {
        var e = (0, eO.useContext)(eK);
        if (!e) throw Error(void 0);
        return e;
      }
      function eW(e) {
        var t, r, n, o, i, a, s, l, u, c, h;
        return (
          (t = { "!": eq().messages }),
          (r = e ? "!." + e : "!"),
          (o = (n = eq()).defaultTranslationValues),
          (i = n.formats),
          (a = n.getMessageFallback),
          (s = n.locale),
          (l = n.onError),
          (u = n.timeZone),
          (t = t["!"]),
          (r = ek(r, "!")),
          (c = (0, eO.useRef)({})),
          (h = (0, eO.useMemo)(
            function () {
              return eL({ messages: t, namespace: r, onError: l });
            },
            [t, r, l]
          )),
          (0, eO.useMemo)(
            function () {
              return ej({
                cachedFormatsByLocale: c.current,
                getMessageFallback: a,
                messagesOrError: h,
                defaultTranslationValues: o,
                namespace: r,
                onError: l,
                formats: i,
                locale: s,
                timeZone: u,
              });
            },
            [a, h, o, r, l, i, s, u]
          )
        );
      }
      function eJ() {
        return eq().locale;
      }
      function eQ() {
        return new Date();
      }
      function e$(e) {
        var t = null == e ? void 0 : e.updateInterval,
          r = eq().now,
          n = (0, eO.useState)(r || eQ()),
          o = n[0],
          i = n[1];
        return (
          (0, eO.useEffect)(
            function () {
              if (t) {
                var e = setInterval(function () {
                  i(eQ());
                }, t);
                return function () {
                  clearInterval(e);
                };
              }
            },
            [r, t]
          ),
          o
        );
      }
      function e0() {
        return eq().timeZone;
      }
      function e1() {
        var e = eq(),
          t = e.formats,
          r = e.locale,
          n = e.now,
          o = e.onError,
          i = e.timeZone;
        return (0, eO.useMemo)(
          function () {
            return eV({
              formats: t,
              locale: r,
              now: n,
              onError: o,
              timeZone: i,
            });
          },
          [t, n, r, o, i]
        );
      }
      var e2 = !1;
      function e6() {
        var e = eq(),
          t = e.formats,
          r = e.locale,
          n = e.now,
          o = e.onError,
          i = e.timeZone;
        return (
          e2 ||
            ((e2 = !0),
            console.warn(
              "`useIntl()` is deprecated and will be removed in the next major version. Please switch to `useFormatter()`."
            )),
          (0, eO.useMemo)(
            function () {
              return ez({
                formats: t,
                locale: r,
                now: n,
                onError: o,
                timeZone: i,
              });
            },
            [t, n, r, o, i]
          )
        );
      }
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [9774, 179], function () {
      return t(6840), t(6885);
    }),
      (_N_E = e.O());
  },
]);

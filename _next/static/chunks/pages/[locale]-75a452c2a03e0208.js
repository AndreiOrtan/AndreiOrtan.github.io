(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6513],
  {
    3124: function (t, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/[locale]",
        function () {
          return i(2711);
        },
      ]);
    },
    2711: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          __N_SSG: function () {
            return y;
          },
          default: function () {
            return g;
          },
        });
      var o = i(5893),
        n = i(2746),
        r = i(7294),
        s = i(6529),
        a = i(1163);
      i(384);
      var l = i(1664),
        u = i.n(l),
        h = i(5675),
        d = i.n(h),
        c = i(6431),
        p = i.n(c);
      function f(t) {
        let {
            videoSrc: e,
            description: i,
            header: n,
            imgUrl: s,
            imgPath: a,
          } = t,
          [l, h] = (0, r.useState)(!1);
        return (0, o.jsxs)("div", {
          className: "h-full",
          children: [
            " ",
            l
              ? (0, o.jsx)("div", {
                  className: "h-full",
                  children: (0, o.jsx)("div", {
                    className:
                      "w-9/12 h-full relative mx-auto flex flex-col justify-start sm:justify-center pt-4 z-50 ".concat(
                        p().fadee
                      ),
                    children: (0, o.jsxs)("div", {
                      className: "flex sm:justify-center",
                      children: [
                        (0, o.jsxs)("div", {
                          children: [
                            (0, o.jsx)("h1", {
                              className: "text-2xl font-semibold ",
                              children: n,
                            }),
                            (0, o.jsx)("p", {
                              className: "font-thin",
                              children: i,
                            }),
                            (0, o.jsx)("div", {
                              className:
                                "my-2 sm:static absolute bottom-0 w-full mb-8",
                              children: (0, o.jsx)(u(), {
                                href: s,
                                children: (0, o.jsx)("button", {
                                  className:
                                    "p-4 bg-blue500 hover:bg-blue800 rounded-lg text-white font-medium w-full sm:max-w-max",
                                  children: "Go to product",
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, o.jsx)("img", {
                          src: "".concat(a),
                          alt: "asd",
                          className: "sm:max-w-[200px] max-w-[50px] ml-auto ",
                        }),
                      ],
                    }),
                  }),
                })
              : (0, o.jsx)("div", {
                  className:
                    "overflow-hidden transition-opacity duration-500 ".concat(
                      l ? "opacity-0" : "opacity-100"
                    ),
                  children: (0, o.jsx)("video", {
                    src: e,
                    autoPlay: !0,
                    muted: !0,
                    onEnded: function () {
                      h(!0),
                        setTimeout(() => {
                          h(!1);
                        }, 8e3);
                    },
                    className: "w-full sm:h-[520px] h-[280px] ".concat(
                      p().fadeeVideo,
                      " object-cover"
                    ),
                    playsInline: !0,
                  }),
                }),
            (0, o.jsx)(d(), {
              src: "ORJ58B0.jpg",
              alt: "",
              width: "100",
              height: "100",
              className: "h-full w-full opacity-5 absolute top-0 left-0 -z-10",
            }),
          ],
        });
      }
      let m = { desktop: { breakpoint: { max: 5e3, min: 1 }, items: 1 } };
      var v = () => {
          let t = (0, a.useRouter)(),
            e = [
              {
                imgPath:
                  "/fizioterapiePhotos/cryotherapy/cryo6/cryo6-machine.png",
                url: "/".concat(
                  t.query.locale,
                  "/fizioterapie/cryotherapy/cryo6"
                ),
                header: "Cryo6",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
                videoSrc: "/aquatizer_video_cut.mp4",
              },
              {
                imgPath:
                  "/fizioterapiePhotos/cryotherapy/cryomini/cryomini-machine.png",
                url: "/".concat(
                  t.query.locale,
                  "/fizioterapie/cryotherapy/cryomini"
                ),
                header: "Cryomini",
                description:
                  "It is a long established fact that a reader will be distracted by the readable content of a page ",
                videoSrc: "/aquatizer_video_cut.mp4",
              },
              {
                imgPath:
                  "/fizioterapiePhotos/cryotherapy/cryomini/cryomini-machine.png",
                url: "/".concat(
                  t.query.locale,
                  "/fizioterapie/cryotherapy/cryomini"
                ),
                header: "Cryomini",
                description: "Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum ",
                videoSrc: "/aquatizer_video_cut.mp4",
              },
              {
                imgPath:
                  "/fizioterapiePhotos/cryotherapy/cryomini/cryomini-machine.png",
                url: "/".concat(
                  t.query.locale,
                  "/fizioterapie/cryotherapy/cryomini"
                ),
                header: "Cryomini",
                description:
                  "It is a long established fact that a reader will be distracted by the readable content of a page, lorem lorem",
                videoSrc: "/aquatizer_video_cut.mp4",
              },
            ];
          return (0, o.jsx)("div", {
            className: "h-auto mb-8 sm:mb-0",
            children: (0, o.jsx)(s.default, {
              responsive: m,
              showDots: !0,
              infinite: !0,
              partialVisible: !1,
              dotListClass: "custom-dot-list-style",
              children: e.map((t, e) =>
                (0, o.jsx)(
                  f,
                  {
                    videoSrc: t.videoSrc,
                    description: t.description,
                    header: t.header,
                    imgPath: t.imgPath,
                    imgUrl: t.url,
                  },
                  e
                )
              ),
            }),
          });
        },
        y = !0;
      function g() {
        let t = (0, n.useTranslations)("Index");
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(v, {}),
            (0, o.jsx)("div", {
              className: "mx-auto py-10",
              children: (0, o.jsxs)("div", {
                className: "text-center",
                children: [
                  (0, o.jsx)("h1", {
                    className: "text-4xl font-bold text-gray800",
                    children: t("title"),
                  }),
                  (0, o.jsx)("p", {
                    className: "mt-4 text-lg text-gray600",
                    children: "Your Partner in Rehabilitation and Recovery",
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    384: function () {},
    6431: function (t) {
      t.exports = {
        fadee: "CarouselItem_fadee__o2Yjo",
        fadeIn: "CarouselItem_fadeIn__hxYOO",
        fadeeVideo: "CarouselItem_fadeeVideo__hJ3hd",
      };
    },
    6529: function (t, e, i) {
      t.exports = i(5541);
    },
    753: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = i(7294);
      (e.LeftArrow = function (t) {
        var e = t.customLeftArrow,
          i = t.getState,
          n = t.previous,
          r = t.disabled,
          s = t.rtl;
        return e
          ? o.cloneElement(e, {
              onClick: function () {
                return n();
              },
              carouselState: i(),
              disabled: r,
              rtl: s,
            })
          : o.createElement("button", {
              "aria-label": "Go to previous slide",
              className:
                "react-multiple-carousel__arrow react-multiple-carousel__arrow--left " +
                (s ? "rtl" : ""),
              onClick: function () {
                return n();
              },
              type: "button",
              disabled: r,
            });
      }),
        (e.RightArrow = function (t) {
          var e = t.customRightArrow,
            i = t.getState,
            n = t.next,
            r = t.disabled,
            s = t.rtl;
          return e
            ? o.cloneElement(e, {
                onClick: function () {
                  return n();
                },
                carouselState: i(),
                disabled: r,
                rtl: s,
              })
            : o.createElement("button", {
                "aria-label": "Go to next slide",
                className:
                  "react-multiple-carousel__arrow react-multiple-carousel__arrow--right " +
                  (s ? "rtl" : ""),
                onClick: function () {
                  return n();
                },
                type: "button",
                disabled: r,
              });
        });
    },
    8365: function (t, e, i) {
      "use strict";
      var o,
        n =
          (this && this.__extends) ||
          ((o = function (t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
              })(t, e);
          }),
          function (t, e) {
            function i() {
              this.constructor = t;
            }
            o(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((i.prototype = e.prototype), new i()));
          });
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = i(7294),
        s = i(8035),
        a = i(5798),
        l = i(6990),
        u = i(753),
        h = i(9946),
        d = i(3989),
        c = "transform 400ms ease-in-out",
        p = (function (t) {
          function e(e) {
            var i = t.call(this, e) || this;
            return (
              (i.containerRef = r.createRef()),
              (i.listRef = r.createRef()),
              (i.state = {
                itemWidth: 0,
                slidesToShow: 0,
                currentSlide: 0,
                totalItems: r.Children.count(e.children),
                deviceType: "",
                domLoaded: !1,
                transform: 0,
                containerWidth: 0,
              }),
              (i.onResize = i.onResize.bind(i)),
              (i.handleDown = i.handleDown.bind(i)),
              (i.handleMove = i.handleMove.bind(i)),
              (i.handleOut = i.handleOut.bind(i)),
              (i.onKeyUp = i.onKeyUp.bind(i)),
              (i.handleEnter = i.handleEnter.bind(i)),
              (i.setIsInThrottle = i.setIsInThrottle.bind(i)),
              (i.next = s.throttle(
                i.next.bind(i),
                e.transitionDuration || 400,
                i.setIsInThrottle
              )),
              (i.previous = s.throttle(
                i.previous.bind(i),
                e.transitionDuration || 400,
                i.setIsInThrottle
              )),
              (i.goToSlide = s.throttle(
                i.goToSlide.bind(i),
                e.transitionDuration || 400,
                i.setIsInThrottle
              )),
              (i.onMove = !1),
              (i.initialX = 0),
              (i.lastX = 0),
              (i.isAnimationAllowed = !1),
              (i.direction = ""),
              (i.initialY = 0),
              (i.isInThrottle = !1),
              (i.transformPlaceHolder = 0),
              i
            );
          }
          return (
            n(e, t),
            (e.prototype.resetTotalItems = function () {
              var t = this,
                e = r.Children.count(this.props.children),
                i = s.notEnoughChildren(this.state)
                  ? 0
                  : Math.max(0, Math.min(this.state.currentSlide, e));
              this.setState({ totalItems: e, currentSlide: i }, function () {
                t.setContainerAndItemWidth(t.state.slidesToShow, !0);
              });
            }),
            (e.prototype.setIsInThrottle = function (t) {
              void 0 === t && (t = !1), (this.isInThrottle = t);
            }),
            (e.prototype.setTransformDirectly = function (t, e) {
              var i = this.props.additionalTransfrom;
              this.transformPlaceHolder = t;
              var o = d.getTransform(
                this.state,
                this.props,
                this.transformPlaceHolder
              );
              this.listRef &&
                this.listRef.current &&
                (this.setAnimationDirectly(e),
                (this.listRef.current.style.transform =
                  "translate3d(" + (o + i) + "px,0,0)"));
            }),
            (e.prototype.setAnimationDirectly = function (t) {
              this.listRef &&
                this.listRef.current &&
                (this.listRef.current.style.transition = t
                  ? this.props.customTransition || c
                  : "none");
            }),
            (e.prototype.componentDidMount = function () {
              this.setState({ domLoaded: !0 }),
                this.setItemsToShow(),
                window.addEventListener("resize", this.onResize),
                this.onResize(!0),
                this.props.keyBoardControl &&
                  window.addEventListener("keyup", this.onKeyUp),
                this.props.autoPlay &&
                  (this.autoPlay = setInterval(
                    this.next,
                    this.props.autoPlaySpeed
                  ));
            }),
            (e.prototype.setClones = function (t, e, i, o) {
              var n = this;
              void 0 === o && (o = !1), (this.isAnimationAllowed = !1);
              var a = r.Children.toArray(this.props.children),
                l = s.getInitialSlideInInfiniteMode(
                  t || this.state.slidesToShow,
                  a
                ),
                u = s.getClones(this.state.slidesToShow, a),
                h =
                  a.length < this.state.slidesToShow
                    ? 0
                    : this.state.currentSlide;
              this.setState(
                { totalItems: u.length, currentSlide: i && !o ? h : l },
                function () {
                  n.correctItemsPosition(e || n.state.itemWidth);
                }
              );
            }),
            (e.prototype.setItemsToShow = function (t, e) {
              var i = this,
                o = this.props.responsive;
              Object.keys(o).forEach(function (n) {
                var r = o[n],
                  s = r.breakpoint,
                  a = r.items,
                  l = s.max,
                  u = s.min,
                  h = [window.innerWidth];
                window.screen &&
                  window.screen.width &&
                  h.push(window.screen.width);
                var d = Math.min.apply(Math, h);
                u <= d &&
                  d <= l &&
                  (i.setState({ slidesToShow: a, deviceType: n }),
                  i.setContainerAndItemWidth(a, t, e));
              });
            }),
            (e.prototype.setContainerAndItemWidth = function (t, e, i) {
              var o = this;
              if (this.containerRef && this.containerRef.current) {
                var n = this.containerRef.current.offsetWidth,
                  r = s.getItemClientSideWidth(this.props, t, n);
                this.setState({ containerWidth: n, itemWidth: r }, function () {
                  o.props.infinite && o.setClones(t, r, e, i);
                }),
                  e && this.correctItemsPosition(r);
              }
            }),
            (e.prototype.correctItemsPosition = function (t, e, i) {
              e && (this.isAnimationAllowed = !0),
                !e && this.isAnimationAllowed && (this.isAnimationAllowed = !1);
              var o =
                this.state.totalItems < this.state.slidesToShow
                  ? 0
                  : -t * this.state.currentSlide;
              i && this.setTransformDirectly(o, !0),
                this.setState({ transform: o });
            }),
            (e.prototype.onResize = function (t) {
              var e;
              (e = !!this.props.infinite && ("boolean" != typeof t || !t)),
                this.setItemsToShow(e);
            }),
            (e.prototype.componentDidUpdate = function (t, i) {
              var o = this,
                n = t.keyBoardControl,
                r = t.autoPlay,
                a = t.children,
                l = i.containerWidth,
                u = i.domLoaded,
                h = i.currentSlide;
              if (
                (this.containerRef &&
                  this.containerRef.current &&
                  this.containerRef.current.offsetWidth !== l &&
                  (this.itemsToShowTimeout &&
                    clearTimeout(this.itemsToShowTimeout),
                  (this.itemsToShowTimeout = setTimeout(function () {
                    o.setItemsToShow(!0);
                  }, this.props.transitionDuration || 400))),
                n &&
                  !this.props.keyBoardControl &&
                  window.removeEventListener("keyup", this.onKeyUp),
                !n &&
                  this.props.keyBoardControl &&
                  window.addEventListener("keyup", this.onKeyUp),
                r &&
                  !this.props.autoPlay &&
                  this.autoPlay &&
                  (clearInterval(this.autoPlay), (this.autoPlay = void 0)),
                r ||
                  !this.props.autoPlay ||
                  this.autoPlay ||
                  (this.autoPlay = setInterval(
                    this.next,
                    this.props.autoPlaySpeed
                  )),
                a.length !== this.props.children.length
                  ? (e.clonesTimeout = setTimeout(function () {
                      o.props.infinite
                        ? o.setClones(
                            o.state.slidesToShow,
                            o.state.itemWidth,
                            !0,
                            !0
                          )
                        : o.resetTotalItems();
                    }, this.props.transitionDuration || 400))
                  : this.props.infinite &&
                    this.state.currentSlide !== h &&
                    this.correctClonesPosition({ domLoaded: u }),
                this.transformPlaceHolder !== this.state.transform &&
                  (this.transformPlaceHolder = this.state.transform),
                this.props.autoPlay &&
                  this.props.rewind &&
                  !this.props.infinite &&
                  s.isInRightEnd(this.state))
              ) {
                var d = this.props.transitionDuration || 400;
                e.isInThrottleTimeout = setTimeout(function () {
                  o.setIsInThrottle(!1),
                    o.resetAutoplayInterval(),
                    o.goToSlide(0, void 0, !!o.props.rewindWithAnimation);
                }, d + this.props.autoPlaySpeed);
              }
            }),
            (e.prototype.correctClonesPosition = function (t) {
              var i = this,
                o = t.domLoaded,
                n = r.Children.toArray(this.props.children),
                a = s.checkClonesPosition(this.state, n, this.props),
                l = a.isReachingTheEnd,
                u = a.isReachingTheStart,
                h = a.nextSlide,
                d = a.nextPosition;
              this.state.domLoaded &&
                o &&
                (l || u) &&
                ((this.isAnimationAllowed = !1),
                (e.transformTimeout = setTimeout(function () {
                  i.setState({ transform: d, currentSlide: h });
                }, this.props.transitionDuration || 400)));
            }),
            (e.prototype.next = function (t) {
              var i = this;
              void 0 === t && (t = 0);
              var o = this.props,
                n = o.afterChange,
                r = o.beforeChange;
              if (!s.notEnoughChildren(this.state)) {
                var a = s.populateNextSlides(this.state, this.props, t),
                  l = a.nextSlides,
                  u = a.nextPosition,
                  h = this.state.currentSlide;
                void 0 !== l &&
                  void 0 !== u &&
                  ("function" == typeof r && r(l, this.getState()),
                  (this.isAnimationAllowed = !0),
                  this.props.shouldResetAutoplay &&
                    this.resetAutoplayInterval(),
                  this.setState({ transform: u, currentSlide: l }, function () {
                    "function" == typeof n &&
                      (e.afterChangeTimeout = setTimeout(function () {
                        n(h, i.getState());
                      }, i.props.transitionDuration || 400));
                  }));
              }
            }),
            (e.prototype.previous = function (t) {
              var i = this;
              void 0 === t && (t = 0);
              var o = this.props,
                n = o.afterChange,
                r = o.beforeChange;
              if (!s.notEnoughChildren(this.state)) {
                var a = s.populatePreviousSlides(this.state, this.props, t),
                  l = a.nextSlides,
                  u = a.nextPosition;
                if (void 0 !== l && void 0 !== u) {
                  var h = this.state.currentSlide;
                  "function" == typeof r && r(l, this.getState()),
                    (this.isAnimationAllowed = !0),
                    this.props.shouldResetAutoplay &&
                      this.resetAutoplayInterval(),
                    this.setState(
                      { transform: u, currentSlide: l },
                      function () {
                        "function" == typeof n &&
                          (e.afterChangeTimeout2 = setTimeout(function () {
                            n(h, i.getState());
                          }, i.props.transitionDuration || 400));
                      }
                    );
                }
              }
            }),
            (e.prototype.resetAutoplayInterval = function () {
              this.props.autoPlay &&
                (clearInterval(this.autoPlay),
                (this.autoPlay = setInterval(
                  this.next,
                  this.props.autoPlaySpeed
                )));
            }),
            (e.prototype.componentWillUnmount = function () {
              window.removeEventListener("resize", this.onResize),
                this.props.keyBoardControl &&
                  window.removeEventListener("keyup", this.onKeyUp),
                this.props.autoPlay &&
                  this.autoPlay &&
                  (clearInterval(this.autoPlay), (this.autoPlay = void 0)),
                this.itemsToShowTimeout &&
                  clearTimeout(this.itemsToShowTimeout),
                e.clonesTimeout && clearTimeout(e.clonesTimeout),
                e.isInThrottleTimeout && clearTimeout(e.isInThrottleTimeout),
                e.transformTimeout && clearTimeout(e.transformTimeout),
                e.afterChangeTimeout && clearTimeout(e.afterChangeTimeout),
                e.afterChangeTimeout2 && clearTimeout(e.afterChangeTimeout2),
                e.afterChangeTimeout3 && clearTimeout(e.afterChangeTimeout3);
            }),
            (e.prototype.resetMoveStatus = function () {
              (this.onMove = !1),
                (this.initialX = 0),
                (this.lastX = 0),
                (this.direction = ""),
                (this.initialY = 0);
            }),
            (e.prototype.getCords = function (t) {
              var e = t.clientX,
                i = t.clientY;
              return {
                clientX: d.parsePosition(this.props, e),
                clientY: d.parsePosition(this.props, i),
              };
            }),
            (e.prototype.handleDown = function (t) {
              if (
                !(
                  (!a.isMouseMoveEvent(t) && !this.props.swipeable) ||
                  (a.isMouseMoveEvent(t) && !this.props.draggable) ||
                  this.isInThrottle
                )
              ) {
                var e = this.getCords(a.isMouseMoveEvent(t) ? t : t.touches[0]),
                  i = e.clientX,
                  o = e.clientY;
                (this.onMove = !0),
                  (this.initialX = i),
                  (this.initialY = o),
                  (this.lastX = i),
                  (this.isAnimationAllowed = !1);
              }
            }),
            (e.prototype.handleMove = function (t) {
              if (
                !(
                  (!a.isMouseMoveEvent(t) && !this.props.swipeable) ||
                  (a.isMouseMoveEvent(t) && !this.props.draggable) ||
                  s.notEnoughChildren(this.state)
                )
              ) {
                var e = this.getCords(a.isMouseMoveEvent(t) ? t : t.touches[0]),
                  i = e.clientX,
                  o = e.clientY,
                  n = this.initialX - i,
                  r = this.initialY - o;
                if (this.onMove) {
                  if (!(Math.abs(n) > Math.abs(r))) return;
                  var l = s.populateSlidesOnMouseTouchMove(
                      this.state,
                      this.props,
                      this.initialX,
                      this.lastX,
                      i,
                      this.transformPlaceHolder
                    ),
                    u = l.direction,
                    h = l.nextPosition,
                    d = l.canContinue;
                  u &&
                    ((this.direction = u),
                    d && void 0 !== h && this.setTransformDirectly(h)),
                    (this.lastX = i);
                }
              }
            }),
            (e.prototype.handleOut = function (t) {
              this.props.autoPlay &&
                !this.autoPlay &&
                (this.autoPlay = setInterval(
                  this.next,
                  this.props.autoPlaySpeed
                ));
              var e = "touchend" === t.type && !this.props.swipeable,
                i =
                  ("mouseleave" === t.type || "mouseup" === t.type) &&
                  !this.props.draggable;
              if (!e && !i && this.onMove) {
                if (
                  (this.setAnimationDirectly(!0), "right" === this.direction)
                ) {
                  if (
                    this.initialX - this.lastX >=
                    this.props.minimumTouchDrag
                  ) {
                    var o = Math.round(
                      (this.initialX - this.lastX) / this.state.itemWidth
                    );
                    this.next(o);
                  } else
                    this.correctItemsPosition(this.state.itemWidth, !0, !0);
                }
                "left" === this.direction &&
                  (this.lastX - this.initialX > this.props.minimumTouchDrag
                    ? ((o = Math.round(
                        (this.lastX - this.initialX) / this.state.itemWidth
                      )),
                      this.previous(o))
                    : this.correctItemsPosition(this.state.itemWidth, !0, !0)),
                  this.resetMoveStatus();
              }
            }),
            (e.prototype.isInViewport = function (t) {
              var e = t.getBoundingClientRect(),
                i = e.top,
                o = e.left,
                n = e.bottom,
                r = e.right;
              return (
                0 <= (void 0 === i ? 0 : i) &&
                0 <= (void 0 === o ? 0 : o) &&
                (void 0 === n ? 0 : n) <=
                  (window.innerHeight ||
                    document.documentElement.clientHeight) &&
                (void 0 === r ? 0 : r) <=
                  (window.innerWidth || document.documentElement.clientWidth)
              );
            }),
            (e.prototype.isChildOfCarousel = function (t) {
              return (
                !!(
                  t instanceof Element &&
                  this.listRef &&
                  this.listRef.current
                ) && this.listRef.current.contains(t)
              );
            }),
            (e.prototype.onKeyUp = function (t) {
              var e = t.target;
              switch (t.keyCode) {
                case 37:
                  if (this.isChildOfCarousel(e)) return this.previous();
                  break;
                case 39:
                  if (this.isChildOfCarousel(e)) return this.next();
                  break;
                case 9:
                  if (
                    this.isChildOfCarousel(e) &&
                    e instanceof HTMLInputElement &&
                    this.isInViewport(e)
                  )
                    return this.next();
              }
            }),
            (e.prototype.handleEnter = function (t) {
              a.isMouseMoveEvent(t) &&
                this.autoPlay &&
                this.props.autoPlay &&
                this.props.pauseOnHover &&
                (clearInterval(this.autoPlay), (this.autoPlay = void 0));
            }),
            (e.prototype.goToSlide = function (t, i, o) {
              var n = this;
              if ((void 0 === o && (o = !0), !this.isInThrottle)) {
                var r = this.state.itemWidth,
                  s = this.props,
                  a = s.afterChange,
                  l = s.beforeChange,
                  u = this.state.currentSlide;
                "function" != typeof l ||
                  (i && ("object" != typeof i || i.skipBeforeChange)) ||
                  l(t, this.getState()),
                  (this.isAnimationAllowed = o),
                  this.props.shouldResetAutoplay &&
                    this.resetAutoplayInterval(),
                  this.setState(
                    { currentSlide: t, transform: -r * t },
                    function () {
                      n.props.infinite &&
                        n.correctClonesPosition({ domLoaded: !0 }),
                        "function" != typeof a ||
                          (i && ("object" != typeof i || i.skipAfterChange)) ||
                          (e.afterChangeTimeout3 = setTimeout(function () {
                            a(u, n.getState());
                          }, n.props.transitionDuration || 400));
                    }
                  );
              }
            }),
            (e.prototype.getState = function () {
              return this.state;
            }),
            (e.prototype.renderLeftArrow = function (t) {
              var e = this,
                i = this.props,
                o = i.customLeftArrow,
                n = i.rtl;
              return r.createElement(u.LeftArrow, {
                customLeftArrow: o,
                getState: function () {
                  return e.getState();
                },
                previous: this.previous,
                disabled: t,
                rtl: n,
              });
            }),
            (e.prototype.renderRightArrow = function (t) {
              var e = this,
                i = this.props,
                o = i.customRightArrow,
                n = i.rtl;
              return r.createElement(u.RightArrow, {
                customRightArrow: o,
                getState: function () {
                  return e.getState();
                },
                next: this.next,
                disabled: t,
                rtl: n,
              });
            }),
            (e.prototype.renderButtonGroups = function () {
              var t = this,
                e = this.props.customButtonGroup;
              return e
                ? r.cloneElement(e, {
                    previous: function () {
                      return t.previous();
                    },
                    next: function () {
                      return t.next();
                    },
                    goToSlide: function (e, i) {
                      return t.goToSlide(e, i);
                    },
                    carouselState: this.getState(),
                  })
                : null;
            }),
            (e.prototype.renderDotsList = function () {
              var t = this;
              return r.createElement(l.default, {
                state: this.state,
                props: this.props,
                goToSlide: this.goToSlide,
                getState: function () {
                  return t.getState();
                },
              });
            }),
            (e.prototype.renderCarouselItems = function () {
              var t = [];
              if (this.props.infinite) {
                var e = r.Children.toArray(this.props.children);
                t = s.getClones(this.state.slidesToShow, e);
              }
              return r.createElement(h.default, {
                clones: t,
                goToSlide: this.goToSlide,
                state: this.state,
                notEnoughChildren: s.notEnoughChildren(this.state),
                props: this.props,
              });
            }),
            (e.prototype.render = function () {
              var t = this.props,
                e = t.deviceType,
                i = t.arrows,
                o = t.renderArrowsWhenDisabled,
                n = t.removeArrowOnDeviceType,
                a = t.infinite,
                l = t.containerClass,
                u = t.sliderClass,
                h = t.customTransition,
                p = t.additionalTransfrom,
                f = t.renderDotsOutside,
                m = t.renderButtonGroupOutside,
                v = t.className,
                y = t.rtl,
                g = s.getInitialState(this.state, this.props),
                S = g.shouldRenderOnSSR,
                T = g.shouldRenderAtAll,
                w = s.isInLeftEnd(this.state),
                b = s.isInRightEnd(this.state),
                C =
                  i &&
                  !(
                    n &&
                    ((e && -1 < n.indexOf(e)) ||
                      (this.state.deviceType &&
                        -1 < n.indexOf(this.state.deviceType)))
                  ) &&
                  !s.notEnoughChildren(this.state) &&
                  T,
                I = !a && w,
                P = !a && b,
                x = d.getTransform(this.state, this.props);
              return r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  "div",
                  {
                    className: "react-multi-carousel-list " + l + " " + v,
                    dir: y ? "rtl" : "ltr",
                    ref: this.containerRef,
                  },
                  r.createElement(
                    "ul",
                    {
                      ref: this.listRef,
                      className: "react-multi-carousel-track " + u,
                      style: {
                        transition: this.isAnimationAllowed ? h || c : "none",
                        overflow: S ? "hidden" : "unset",
                        transform: "translate3d(" + (x + p) + "px,0,0)",
                      },
                      onMouseMove: this.handleMove,
                      onMouseDown: this.handleDown,
                      onMouseUp: this.handleOut,
                      onMouseEnter: this.handleEnter,
                      onMouseLeave: this.handleOut,
                      onTouchStart: this.handleDown,
                      onTouchMove: this.handleMove,
                      onTouchEnd: this.handleOut,
                    },
                    this.renderCarouselItems()
                  ),
                  C && (!I || o) && this.renderLeftArrow(I),
                  C && (!P || o) && this.renderRightArrow(P),
                  T && !m && this.renderButtonGroups(),
                  T && !f && this.renderDotsList()
                ),
                T && f && this.renderDotsList(),
                T && m && this.renderButtonGroups()
              );
            }),
            (e.defaultProps = {
              slidesToSlide: 1,
              infinite: !1,
              draggable: !0,
              swipeable: !0,
              arrows: !0,
              renderArrowsWhenDisabled: !1,
              containerClass: "",
              sliderClass: "",
              itemClass: "",
              keyBoardControl: !0,
              autoPlaySpeed: 3e3,
              showDots: !1,
              renderDotsOutside: !1,
              renderButtonGroupOutside: !1,
              minimumTouchDrag: 80,
              className: "",
              dotListClass: "",
              focusOnSelect: !1,
              centerMode: !1,
              additionalTransfrom: 0,
              pauseOnHover: !0,
              shouldResetAutoplay: !0,
              rewind: !1,
              rtl: !1,
              rewindWithAnimation: !1,
            }),
            e
          );
        })(r.Component);
      e.default = p;
    },
    9946: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = i(7294),
        n = i(8035);
      e.default = function (t) {
        var e = t.props,
          i = t.state,
          r = t.goToSlide,
          s = t.clones,
          a = t.notEnoughChildren,
          l = i.itemWidth,
          u = e.children,
          h = e.infinite,
          d = e.itemClass,
          c = e.itemAriaLabel,
          p = e.partialVisbile,
          f = e.partialVisible,
          m = n.getInitialState(i, e),
          v = m.flexBisis,
          y = m.shouldRenderOnSSR,
          g = m.domFullyLoaded,
          S = m.partialVisibilityGutter;
        return m.shouldRenderAtAll
          ? (p &&
              console.warn(
                'WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'
              ),
            o.createElement(
              o.Fragment,
              null,
              (h ? s : o.Children.toArray(u)).map(function (t, s) {
                return o.createElement(
                  "li",
                  {
                    key: s,
                    "data-index": s,
                    onClick: function () {
                      e.focusOnSelect && r(s);
                    },
                    "aria-hidden": n.getIfSlideIsVisbile(s, i)
                      ? "false"
                      : "true",
                    "aria-label":
                      c || (t.props.ariaLabel ? t.props.ariaLabel : null),
                    style: {
                      flex: y ? "1 0 " + v + "%" : "auto",
                      position: "relative",
                      width: g
                        ? ((p || f) && S && !a ? l - S : l) + "px"
                        : "auto",
                    },
                    className:
                      "react-multi-carousel-item " +
                      (n.getIfSlideIsVisbile(s, i)
                        ? "react-multi-carousel-item--active"
                        : "") +
                      " " +
                      d,
                  },
                  t
                );
              })
            ))
          : null;
      };
    },
    6990: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = i(7294),
        n = i(3905),
        r = i(4949),
        s = i(3989);
      e.default = function (t) {
        var e = t.props,
          i = t.state,
          a = t.goToSlide,
          l = t.getState,
          u = e.showDots,
          h = e.customDot,
          d = e.dotListClass,
          c = e.infinite,
          p = e.children;
        if (!u || s.notEnoughChildren(i)) return null;
        var f,
          m = i.currentSlide,
          v = i.slidesToShow,
          y = s.getSlidesToSlide(i, e),
          g = o.Children.toArray(p);
        f = c ? Math.ceil(g.length / y) : Math.ceil((g.length - v) / y) + 1;
        var S = r.getLookupTableForNextSlides(f, i, e, g),
          T = n.getOriginalIndexLookupTableByClones(v, g),
          w = T[m];
        return o.createElement(
          "ul",
          { className: "react-multi-carousel-dot-list " + d },
          Array(f)
            .fill(0)
            .map(function (t, e) {
              var i, n;
              if (c) {
                var r = T[(n = S[e])];
                i = w === r || (r <= w && w < r + y);
              } else {
                var s = g.length - v,
                  u = e * y;
                i =
                  (n = s < u ? s : u) === m ||
                  (n < m && m < n + y && m < g.length - v);
              }
              return h
                ? o.cloneElement(h, {
                    index: e,
                    active: i,
                    key: e,
                    onClick: function () {
                      return a(n);
                    },
                    carouselState: l(),
                  })
                : o.createElement(
                    "li",
                    {
                      "data-index": e,
                      key: e,
                      className:
                        "react-multi-carousel-dot " +
                        (i ? "react-multi-carousel-dot--active" : ""),
                    },
                    o.createElement("button", {
                      "aria-label": "Go to slide " + (e + 1),
                      onClick: function () {
                        return a(n);
                      },
                    })
                  );
            })
        );
      };
    },
    5541: function (t, e, i) {
      "use strict";
      var o = i(8365);
      e.default = o.default;
    },
    5798: function (t, e, i) {
      "use strict";
      var o,
        n =
          (this && this.__extends) ||
          ((o = function (t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
              })(t, e);
          }),
          function (t, e) {
            function i() {
              this.constructor = t;
            }
            o(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((i.prototype = e.prototype), new i()));
          });
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = i(7294);
      e.isMouseMoveEvent = function (t) {
        return "clientY" in t;
      };
      var s = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return n(e, t), e;
      })(r.Component);
      e.default = s;
    },
    3905: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getOriginalCounterPart = function (t, e, i) {
          var o = e.slidesToShow,
            n = e.currentSlide;
          return i.length > 2 * o
            ? t + 2 * o
            : n >= i.length
            ? i.length + t
            : t;
        }),
        (e.getOriginalIndexLookupTableByClones = function (t, e) {
          if (e.length > 2 * t) {
            for (
              var i = {}, o = e.length - 2 * t, n = e.length - o, r = o, s = 0;
              s < n;
              s++
            )
              (i[s] = r), r++;
            var a = e.length + n,
              l = a + e.slice(0, 2 * t).length,
              u = 0;
            for (s = a; s <= l; s++) (i[s] = u), u++;
            var h = 0;
            for (s = n; s < a; s++) (i[s] = h), h++;
            return i;
          }
          i = {};
          var d = 3 * e.length,
            c = 0;
          for (s = 0; s < d; s++) (i[s] = c), ++c === e.length && (c = 0);
          return i;
        }),
        (e.getClones = function (t, e) {
          return e.length < t
            ? e
            : e.length > 2 * t
            ? e.slice(e.length - 2 * t, e.length).concat(e, e.slice(0, 2 * t))
            : e.concat(e, e);
        }),
        (e.getInitialSlideInInfiniteMode = function (t, e) {
          return e.length > 2 * t ? 2 * t : e.length;
        }),
        (e.checkClonesPosition = function (t, e, i) {
          var o,
            n = t.currentSlide,
            r = t.slidesToShow,
            s = t.itemWidth,
            a = t.totalItems,
            l = 0,
            u = 0,
            h = 0 === n,
            d = e.length - (e.length - 2 * r);
          return (
            e.length < r
              ? ((u = l = 0), (h = o = !1))
              : e.length > 2 * r
              ? ((o = n >= d + e.length) && (u = -s * (l = n - e.length)),
                h && (u = -s * (l = d + (e.length - 2 * r))))
              : ((o = n >= 2 * e.length) && (u = -s * (l = n - e.length)),
                h && (u = i.showDots ? -s * (l = e.length) : -s * (l = a / 3))),
            {
              isReachingTheEnd: o,
              isReachingTheStart: h,
              nextSlide: l,
              nextPosition: u,
            }
          );
        });
    },
    3989: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = i(6867);
      function n(t) {
        var e = t.slidesToShow;
        return t.totalItems < e;
      }
      function r(t, e, i) {
        var o = i || t.transform;
        return (!e.infinite && 0 === t.currentSlide) || n(t)
          ? o
          : o + t.itemWidth / 2;
      }
      function s(t) {
        var e = t.currentSlide,
          i = t.totalItems;
        return !(e + t.slidesToShow < i);
      }
      function a(t, e, i, o) {
        void 0 === e && (e = 0);
        var r = t.currentSlide,
          a = t.slidesToShow,
          l = s(t),
          u = !i.infinite && l,
          h = o || t.transform;
        if (n(t)) return h;
        var d = h + r * e;
        return u ? d + (t.containerWidth - (t.itemWidth - e) * a) : d;
      }
      function l(t, e) {
        return t.rtl ? -1 * e : e;
      }
      (e.notEnoughChildren = n),
        (e.getInitialState = function (t, e) {
          var i,
            n = t.domLoaded,
            r = t.slidesToShow,
            s = t.containerWidth,
            a = t.itemWidth,
            l = e.deviceType,
            u = e.responsive,
            h = e.ssr,
            d = e.partialVisbile,
            c = e.partialVisible,
            p = !!(n && r && s && a);
          h && l && !p && (i = o.getWidthFromDeviceType(l, u));
          var f = !!(h && l && !p && i);
          return {
            shouldRenderOnSSR: f,
            flexBisis: i,
            domFullyLoaded: p,
            partialVisibilityGutter: o.getPartialVisibilityGutter(
              u,
              d || c,
              l,
              t.deviceType
            ),
            shouldRenderAtAll: f || p,
          };
        }),
        (e.getIfSlideIsVisbile = function (t, e) {
          var i = e.currentSlide,
            o = e.slidesToShow;
          return i <= t && t < i + o;
        }),
        (e.getTransformForCenterMode = r),
        (e.isInLeftEnd = function (t) {
          return !(0 < t.currentSlide);
        }),
        (e.isInRightEnd = s),
        (e.getTransformForPartialVsibile = a),
        (e.parsePosition = l),
        (e.getTransform = function (t, e, i) {
          var n = e.partialVisbile,
            s = e.partialVisible,
            u = e.responsive,
            h = e.deviceType,
            d = e.centerMode,
            c = i || t.transform,
            p = o.getPartialVisibilityGutter(u, n || s, h, t.deviceType);
          return l(e, s || n ? a(t, p, e, i) : d ? r(t, e, i) : c);
        }),
        (e.getSlidesToSlide = function (t, e) {
          var i = t.domLoaded,
            o = t.slidesToShow,
            n = t.containerWidth,
            r = t.itemWidth,
            s = e.deviceType,
            a = e.responsive,
            l = e.slidesToSlide || 1,
            u = !!(i && o && n && r);
          return (
            e.ssr &&
              e.deviceType &&
              !u &&
              Object.keys(a).forEach(function (t) {
                var e = a[t].slidesToSlide;
                s === t && e && (l = e);
              }),
            u &&
              Object.keys(a).forEach(function (t) {
                var e = a[t],
                  i = e.breakpoint,
                  o = e.slidesToSlide,
                  n = i.max,
                  r = i.min;
                o &&
                  window.innerWidth >= r &&
                  window.innerWidth <= n &&
                  (l = o);
              }),
            l
          );
        });
    },
    4949: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = i(3905),
        n = i(3989);
      e.getLookupTableForNextSlides = function (t, e, i, r) {
        var s = {},
          a = n.getSlidesToSlide(e, i);
        return (
          Array(t)
            .fill(0)
            .forEach(function (t, i) {
              var n = o.getOriginalCounterPart(i, e, r);
              if (0 === i) s[0] = n;
              else {
                var l = s[i - 1] + a;
                s[i] = l;
              }
            }),
          s
        );
      };
    },
    6867: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getPartialVisibilityGutter = function (t, e, i, o) {
          var n = 0,
            r = o || i;
          return (
            e &&
              r &&
              (n =
                t[r].partialVisibilityGutter || t[r].paritialVisibilityGutter),
            n
          );
        }),
        (e.getWidthFromDeviceType = function (t, e) {
          var i;
          return e[t] && (i = (100 / e[t].items).toFixed(1)), i;
        }),
        (e.getItemClientSideWidth = function (t, e, i) {
          return Math.round(i / (e + (t.centerMode ? 1 : 0)));
        });
    },
    8035: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = i(3905);
      (e.getOriginalCounterPart = o.getOriginalCounterPart),
        (e.getClones = o.getClones),
        (e.checkClonesPosition = o.checkClonesPosition),
        (e.getInitialSlideInInfiniteMode = o.getInitialSlideInInfiniteMode);
      var n = i(6867);
      (e.getWidthFromDeviceType = n.getWidthFromDeviceType),
        (e.getPartialVisibilityGutter = n.getPartialVisibilityGutter),
        (e.getItemClientSideWidth = n.getItemClientSideWidth);
      var r = i(3989);
      (e.getInitialState = r.getInitialState),
        (e.getIfSlideIsVisbile = r.getIfSlideIsVisbile),
        (e.getTransformForCenterMode = r.getTransformForCenterMode),
        (e.getTransformForPartialVsibile = r.getTransformForPartialVsibile),
        (e.isInLeftEnd = r.isInLeftEnd),
        (e.isInRightEnd = r.isInRightEnd),
        (e.notEnoughChildren = r.notEnoughChildren),
        (e.getSlidesToSlide = r.getSlidesToSlide);
      var s = i(9950);
      e.throttle = s.default;
      var a = i(4802);
      e.throwError = a.default;
      var l = i(2558);
      e.populateNextSlides = l.populateNextSlides;
      var u = i(5210);
      e.populatePreviousSlides = u.populatePreviousSlides;
      var h = i(1097);
      e.populateSlidesOnMouseTouchMove = h.populateSlidesOnMouseTouchMove;
    },
    1097: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.populateSlidesOnMouseTouchMove = function (t, e, i, o, n, r) {
          var s,
            a,
            l = t.itemWidth,
            u = t.slidesToShow,
            h = t.totalItems,
            d = t.currentSlide,
            c = e.infinite,
            p = !1,
            f = Math.round((i - o) / l),
            m = Math.round((o - i) / l);
          if (n < i && f <= u) {
            s = "right";
            var v = r - (o - n);
            (Math.abs(v) <= Math.abs(-l * (h - u)) || (d === h - u && c)) &&
              ((a = v), (p = !0));
          }
          return (
            i < n &&
              m <= u &&
              ((s = "left"),
              ((v = r + (n - o)) <= 0 || (0 === d && c)) &&
                ((p = !0), (a = v))),
            { direction: s, nextPosition: a, canContinue: p }
          );
        });
    },
    2558: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = i(3989);
      e.populateNextSlides = function (t, e, i) {
        void 0 === i && (i = 0);
        var n,
          r,
          s = t.slidesToShow,
          a = t.currentSlide,
          l = t.itemWidth,
          u = t.totalItems,
          h = o.getSlidesToSlide(t, e),
          d = a + 1 + i + s + (0 < i ? 0 : h);
        return (
          (r =
            d <= u
              ? -l * (n = a + i + (0 < i ? 0 : h))
              : u < d && a !== u - s
              ? -l * (n = u - s)
              : (n = void 0)),
          { nextSlides: n, nextPosition: r }
        );
      };
    },
    5210: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = i(7294),
        n = i(3989),
        r = i(3989);
      e.populatePreviousSlides = function (t, e, i) {
        void 0 === i && (i = 0);
        var s,
          a,
          l = t.currentSlide,
          u = t.itemWidth,
          h = t.slidesToShow,
          d = e.children,
          c = e.showDots,
          p = e.infinite,
          f = n.getSlidesToSlide(t, e),
          m = l - i - (0 < i ? 0 : f),
          v = (o.Children.toArray(d).length - h) % f;
        return (
          (a =
            0 <= m
              ? ((s = m),
                c && !p && 0 < v && r.isInRightEnd(t) && (s = l - v),
                -u * s)
              : (s = m < 0 && 0 !== l ? 0 : void 0)),
          { nextSlides: s, nextPosition: a }
        );
      };
    },
    9950: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (t, e, i) {
          var o;
          return function () {
            var n = arguments;
            o ||
              (t.apply(this, n),
              (o = !0),
              "function" == typeof i && i(!0),
              setTimeout(function () {
                (o = !1), "function" == typeof i && i(!1);
              }, e));
          };
        });
    },
    4802: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (t, e) {
          var i = e.partialVisbile,
            o = e.partialVisible,
            n = e.centerMode,
            r = e.ssr,
            s = e.responsive;
          if ((i || o) && n)
            throw Error(
              "center mode can not be used at the same time with partialVisible"
            );
          if (!s)
            throw r
              ? Error(
                  "ssr mode need to be used in conjunction with responsive prop"
                )
              : Error(
                  "Responsive prop is needed for deciding the amount of items to show on the screen"
                );
          if (s && "object" != typeof s)
            throw Error("responsive prop must be an object");
        });
    },
  },
  function (t) {
    t.O(0, [9774, 2888, 179], function () {
      return t((t.s = 3124));
    }),
      (_N_E = t.O());
  },
]);

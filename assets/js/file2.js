!(function () {
  "use strict";
  function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function e(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }
  function n(t, n, r) {
    return n && e(t.prototype, n), r && e(t, r), t;
  }
  function r(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
        var n = [],
          r = !0,
          i = !1,
          o = void 0;
        try {
          for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
        } catch (t) {
          (i = !0), (o = t);
        } finally {
          try {
            r || null == s.return || s.return();
          } finally {
            if (i) throw o;
          }
        }
        return n;
      })(t, e) ||
      o(t, e) ||
      (function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      })()
    );
  }
  function i(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return a(t);
      })(t) ||
      (function (t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
      })(t) ||
      o(t) ||
      (function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      })()
    );
  }
  function o(t, e) {
    if (t) {
      if ("string" == typeof t) return a(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, e) : void 0;
    }
  }
  function a(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function s(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }
  function u(t, e) {
    (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
  }
  /*!
     * GSAP 3.8.0
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */ var l,
    c,
    d,
    h,
    f,
    p,
    m,
    _,
    v,
    g,
    y,
    b,
    w,
    x,
    S,
    T,
    q,
    M,
    C,
    A,
    O,
    E,
    k,
    L,
    R,
    D,
    P,
    B,
    F = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
    I = { duration: 0.5, overwrite: !1, delay: 0 },
    z = 1e8,
    H = 1e-8,
    N = 2 * Math.PI,
    W = N / 4,
    j = 0,
    V = Math.sqrt,
    Y = Math.cos,
    X = Math.sin,
    U = function (t) {
      return "string" == typeof t;
    },
    G = function (t) {
      return "function" == typeof t;
    },
    Q = function (t) {
      return "number" == typeof t;
    },
    J = function (t) {
      return void 0 === t;
    },
    Z = function (t) {
      return "object" == typeof t;
    },
    $ = function (t) {
      return !1 !== t;
    },
    K = function () {
      return "undefined" != typeof window;
    },
    tt = function (t) {
      return G(t) || U(t);
    },
    et = ("function" == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
    nt = Array.isArray,
    rt = /(?:-?\.?\d|\.)+/gi,
    it = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    ot = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    at = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    st = /[+-]=-?[.\d]+/,
    ut = /[^,'"\[\]\s]+/gi,
    lt = /[\d.+\-=]+(?:e[-+]\d*)*/i,
    ct = {},
    dt = {},
    ht = function (t) {
      return (dt = It(t, ct)) && Mn;
    },
    ft = function (t, e) {
      return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
    },
    pt = function (t, e) {
      return !e && console.warn(t);
    },
    mt = function (t, e) {
      return (t && (ct[t] = e) && dt && (dt[t] = e)) || ct;
    },
    _t = function () {
      return 0;
    },
    vt = {},
    gt = [],
    yt = {},
    bt = {},
    wt = {},
    xt = 30,
    St = [],
    Tt = "",
    qt = function (t) {
      var e,
        n,
        r = t[0];
      if ((Z(r) || G(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
        for (n = St.length; n-- && !St[n].targetTest(r); );
        e = St[n];
      }
      for (n = t.length; n--; ) (t[n] && (t[n]._gsap || (t[n]._gsap = new Je(t[n], e)))) || t.splice(n, 1);
      return t;
    },
    Mt = function (t) {
      return t._gsap || qt(me(t))[0]._gsap;
    },
    Ct = function (t, e, n) {
      return (n = t[e]) && G(n) ? t[e]() : (J(n) && t.getAttribute && t.getAttribute(e)) || n;
    },
    At = function (t, e) {
      return (t = t.split(",")).forEach(e) || t;
    },
    Ot = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    },
    Et = function (t) {
      return Math.round(1e7 * t) / 1e7 || 0;
    },
    kt = function (t, e) {
      for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n; );
      return r < n;
    },
    Lt = function () {
      var t,
        e,
        n = gt.length,
        r = gt.slice(0);
      for (yt = {}, gt.length = 0, t = 0; t < n; t++) (e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    },
    Rt = function (t, e, n, r) {
      gt.length && Lt(), t.render(e, n, r), gt.length && Lt();
    },
    Dt = function (t) {
      var e = parseFloat(t);
      return (e || 0 === e) && (t + "").match(ut).length < 2 ? e : U(t) ? t.trim() : t;
    },
    Pt = function (t) {
      return t;
    },
    Bt = function (t, e) {
      for (var n in e) n in t || (t[n] = e[n]);
      return t;
    },
    Ft = function (t, e) {
      for (var n in e) n in t || "duration" === n || "ease" === n || (t[n] = e[n]);
    },
    It = function (t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    },
    zt = function t(e, n) {
      for (var r in n) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (e[r] = Z(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
      return e;
    },
    Ht = function (t, e) {
      var n,
        r = {};
      for (n in t) n in e || (r[n] = t[n]);
      return r;
    },
    Nt = function (t) {
      var e = t.parent || c,
        n = t.keyframes ? Ft : Bt;
      if ($(t.inherit)) for (; e; ) n(t, e.vars.defaults), (e = e.parent || e._dp);
      return t;
    },
    Wt = function (t, e, n, r) {
      void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
      var i = e._prev,
        o = e._next;
      i ? (i._next = o) : t[n] === e && (t[n] = o), o ? (o._prev = i) : t[r] === e && (t[r] = i), (e._next = e._prev = e.parent = null);
    },
    jt = function (t, e) {
      t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), (t._act = 0);
    },
    Vt = function (t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0)) for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
      return t;
    },
    Yt = function (t) {
      for (var e = t.parent; e && e.parent; ) (e._dirty = 1), e.totalDuration(), (e = e.parent);
      return t;
    },
    Xt = function t(e) {
      return !e || (e._ts && t(e.parent));
    },
    Ut = function (t) {
      return t._repeat ? Gt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    },
    Gt = function (t, e) {
      var n = Math.floor((t /= e));
      return t && n === t ? n - 1 : n;
    },
    Qt = function (t, e) {
      return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
    },
    Jt = function (t) {
      return (t._end = Et(t._start + (t._tDur / Math.abs(t._ts || t._rts || H) || 0)));
    },
    Zt = function (t, e) {
      var n = t._dp;
      return n && n.smoothChildTiming && t._ts && ((t._start = Et(n._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts))), Jt(t), n._dirty || Vt(n, t)), t;
    },
    $t = function (t, e) {
      var n;
      if (((e._time || (e._initted && !e._dur)) && ((n = Qt(t.rawTime(), e)), (!e._dur || ce(0, e.totalDuration(), n) - e._tTime > H) && e.render(n, !0)), Vt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)) {
        if (t._dur < t.duration()) for (n = t; n._dp; ) n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
        t._zTime = -1e-8;
      }
    },
    Kt = function (t, e, n, r) {
      return (
        e.parent && jt(e),
          (e._start = Et((Q(n) ? n : n || t !== c ? se(t, n, e) : t._time) + e._delay)),
          (e._end = Et(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0))),
          (function (t, e, n, r, i) {
            void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
            var o,
              a = t[r];
            if (i) for (o = e[i]; a && a[i] > o; ) a = a._prev;
            a ? ((e._next = a._next), (a._next = e)) : ((e._next = t[n]), (t[n] = e)), e._next ? (e._next._prev = e) : (t[r] = e), (e._prev = a), (e.parent = e._dp = t);
          })(t, e, "_first", "_last", t._sort ? "_start" : 0),
        re(e) || (t._recent = e),
        r || $t(t, e),
          t
      );
    },
    te = function (t, e) {
      return (ct.ScrollTrigger || ft("scrollTrigger", e)) && ct.ScrollTrigger.create(e, t);
    },
    ee = function (t, e, n, r) {
      return rn(t, e), t._initted ? (!n && t._pt && ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) && m !== Fe.frame ? (gt.push(t), (t._lazy = [e, r]), 1) : void 0) : 1;
    },
    ne = function t(e) {
      var n = e.parent;
      return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
    },
    re = function (t) {
      var e = t.data;
      return "isFromStart" === e || "isStart" === e;
    },
    ie = function (t, e, n, r) {
      var i = t._repeat,
        o = Et(e) || 0,
        a = t._tTime / t._tDur;
      return a && !r && (t._time *= o / t._dur), (t._dur = o), (t._tDur = i ? (i < 0 ? 1e10 : Et(o * (i + 1) + t._rDelay * i)) : o), a && !r ? Zt(t, (t._tTime = t._tDur * a)) : t.parent && Jt(t), n || Vt(t.parent, t), t;
    },
    oe = function (t) {
      return t instanceof $e ? Vt(t) : ie(t, t._dur);
    },
    ae = { _start: 0, endTime: _t, totalDuration: _t },
    se = function t(e, n, r) {
      var i,
        o,
        a,
        s = e.labels,
        u = e._recent || ae,
        l = e.duration() >= z ? u.endTime(!1) : e._dur;
      return U(n) && (isNaN(n) || n in s)
        ? ((o = n.charAt(0)),
          (a = "%" === n.substr(-1)),
          (i = n.indexOf("=")),
          "<" === o || ">" === o
            ? (i >= 0 && (n = n.replace(/=/, "")), ("<" === o ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (a ? (i < 0 ? u : r).totalDuration() / 100 : 1))
            : i < 0
              ? (n in s || (s[n] = l), s[n])
              : ((o = parseFloat(n.charAt(i - 1) + n.substr(i + 1))), a && r && (o = (o / 100) * (nt(r) ? r[0] : r).totalDuration()), i > 1 ? t(e, n.substr(0, i - 1), r) + o : l + o))
        : null == n
          ? l
          : +n;
    },
    ue = function (t, e, n) {
      var r,
        i,
        o = Q(e[1]),
        a = (o ? 2 : 1) + (t < 2 ? 0 : 1),
        s = e[a];
      if ((o && (s.duration = e[1]), (s.parent = n), t)) {
        for (r = s, i = n; i && !("immediateRender" in r); ) (r = i.vars.defaults || {}), (i = $(i.vars.inherit) && i.parent);
        (s.immediateRender = $(r.immediateRender)), t < 2 ? (s.runBackwards = 1) : (s.startAt = e[a - 1]);
      }
      return new un(e[0], s, e[a + 1]);
    },
    le = function (t, e) {
      return t || 0 === t ? e(t) : e;
    },
    ce = function (t, e, n) {
      return n < t ? t : n > e ? e : n;
    },
    de = function (t) {
      if ("string" != typeof t) return "";
      var e = lt.exec(t);
      return e ? t.substr(e.index + e[0].length) : "";
    },
    he = [].slice,
    fe = function (t, e) {
      return t && Z(t) && "length" in t && ((!e && !t.length) || (t.length - 1 in t && Z(t[0]))) && !t.nodeType && t !== d;
    },
    pe = function (t, e, n) {
      return (
        void 0 === n && (n = []),
        t.forEach(function (t) {
          var r;
          return (U(t) && !e) || fe(t, 1) ? (r = n).push.apply(r, me(t)) : n.push(t);
        }) || n
      );
    },
    me = function (t, e, n) {
      return !U(t) || n || (!h && Ie()) ? (nt(t) ? pe(t, n) : fe(t) ? he.call(t, 0) : t ? [t] : []) : he.call((e || f).querySelectorAll(t), 0);
    },
    _e = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    },
    ve = function (t) {
      if (G(t)) return t;
      var e = Z(t) ? t : { each: t },
        n = Ye(e.ease),
        r = e.from || 0,
        i = parseFloat(e.base) || 0,
        o = {},
        a = r > 0 && r < 1,
        s = isNaN(r) || a,
        u = e.axis,
        l = r,
        c = r;
      return (
        U(r) ? (l = c = { center: 0.5, edges: 0.5, end: 1 }[r] || 0) : !a && s && ((l = r[0]), (c = r[1])),
          function (t, a, d) {
            var h,
              f,
              p,
              m,
              _,
              v,
              g,
              y,
              b,
              w = (d || e).length,
              x = o[w];
            if (!x) {
              if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, z])[1])) {
                for (g = -1e8; g < (g = d[b++].getBoundingClientRect().left) && b < w; );
                b--;
              }
              for (x = o[w] = [], h = s ? Math.min(b, w) * l - 0.5 : r % b, f = s ? (w * c) / b - 0.5 : (r / b) | 0, g = 0, y = z, v = 0; v < w; v++)
                (p = (v % b) - h), (m = f - ((v / b) | 0)), (x[v] = _ = u ? Math.abs("y" === u ? m : p) : V(p * p + m * m)), _ > g && (g = _), _ < y && (y = _);
              "random" === r && _e(x),
                (x.max = g - y),
                (x.min = y),
                (x.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (b > w ? w - 1 : u ? ("y" === u ? w / b : b) : Math.max(b, w / b)) || 0) * ("edges" === r ? -1 : 1)),
                (x.b = w < 0 ? i - w : i),
                (x.u = de(e.amount || e.each) || 0),
                (n = n && w < 0 ? je(n) : n);
            }
            return (w = (x[t] - x.min) / x.max || 0), Et(x.b + (n ? n(w) : w) * x.v) + x.u;
          }
      );
    },
    ge = function (t) {
      var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (n) {
        var r = Math.round(parseFloat(n) / t) * t * e;
        return (r - (r % 1)) / e + (Q(n) ? 0 : de(n));
      };
    },
    ye = function (t, e) {
      var n,
        r,
        i = nt(t);
      return (
        !i && Z(t) && ((n = i = t.radius || z), t.values ? ((t = me(t.values)), (r = !Q(t[0])) && (n *= n)) : (t = ge(t.increment))),
          le(
            e,
            i
              ? G(t)
                ? function (e) {
                  return (r = t(e)), Math.abs(r - e) <= n ? r : e;
                }
                : function (e) {
                  for (var i, o, a = parseFloat(r ? e.x : e), s = parseFloat(r ? e.y : 0), u = z, l = 0, c = t.length; c--; )
                    (i = r ? (i = t[c].x - a) * i + (o = t[c].y - s) * o : Math.abs(t[c] - a)) < u && ((u = i), (l = c));
                  return (l = !n || u <= n ? t[l] : e), r || l === e || Q(e) ? l : l + de(e);
                }
              : ge(t)
          )
      );
    },
    be = function (t, e, n, r) {
      return le(nt(t) ? !e : !0 === n ? !!(n = 0) : !r, function () {
        return nt(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + 0.99 * n)) / n) * n * r) / r;
      });
    },
    we = function (t, e, n) {
      return le(n, function (n) {
        return t[~~e(n)];
      });
    },
    xe = function (t) {
      for (var e, n, r, i, o = 0, a = ""; ~(e = t.indexOf("random(", o)); )
        (r = t.indexOf(")", e)), (i = "[" === t.charAt(e + 7)), (n = t.substr(e + 7, r - e - 7).match(i ? ut : rt)), (a += t.substr(o, e - o) + be(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)), (o = r + 1);
      return a + t.substr(o, t.length - o);
    },
    Se = function (t, e, n, r, i) {
      var o = e - t,
        a = r - n;
      return le(i, function (e) {
        return n + (((e - t) / o) * a || 0);
      });
    },
    Te = function (t, e, n) {
      var r,
        i,
        o,
        a = t.labels,
        s = z;
      for (r in a) (i = a[r] - e) < 0 == !!n && i && s > (i = Math.abs(i)) && ((o = r), (s = i));
      return o;
    },
    qe = function (t, e, n) {
      var r,
        i,
        o = t.vars,
        a = o[e];
      if (a) return (r = o[e + "Params"]), (i = o.callbackScope || t), n && gt.length && Lt(), r ? a.apply(i, r) : a.call(i);
    },
    Me = function (t) {
      return jt(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && qe(t, "onInterrupt"), t;
    },
    Ce = function (t) {
      var e = (t = (!t.name && t.default) || t).name,
        n = G(t),
        r =
          e && !n && t.init
            ? function () {
              this._props = [];
            }
            : t,
        i = { init: _t, render: vn, add: en, kill: yn, modifier: gn, rawVars: 0 },
        o = { targetTest: 0, get: 0, getSetter: fn, aliases: {}, register: 0 };
      if ((Ie(), t !== r)) {
        if (bt[e]) return;
        Bt(r, Bt(Ht(t, i), o)), It(r.prototype, It(i, Ht(t, o))), (bt[(r.prop = e)] = r), t.targetTest && (St.push(r), (vt[e] = 1)), (e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
      }
      mt(e, r), t.register && t.register(Mn, r, xn);
    },
    Ae = 255,
    Oe = {
      aqua: [0, Ae, Ae],
      lime: [0, Ae, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, Ae],
      navy: [0, 0, 128],
      white: [Ae, Ae, Ae],
      olive: [128, 128, 0],
      yellow: [Ae, Ae, 0],
      orange: [Ae, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [Ae, 0, 0],
      pink: [Ae, 192, 203],
      cyan: [0, Ae, Ae],
      transparent: [Ae, Ae, Ae, 0],
    },
    Ee = function (t, e, n) {
      return ((6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < 0.5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * Ae + 0.5) | 0;
    },
    ke = function (t, e, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        d,
        h,
        f = t ? (Q(t) ? [t >> 16, (t >> 8) & Ae, t & Ae] : 0) : Oe.black;
      if (!f) {
        if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Oe[t])) f = Oe[t];
        else if ("#" === t.charAt(0)) {
          if ((t.length < 6 && ((r = t.charAt(1)), (i = t.charAt(2)), (o = t.charAt(3)), (t = "#" + r + r + i + i + o + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))), 9 === t.length))
            return [(f = parseInt(t.substr(1, 6), 16)) >> 16, (f >> 8) & Ae, f & Ae, parseInt(t.substr(7), 16) / 255];
          f = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & Ae, t & Ae];
        } else if ("hsl" === t.substr(0, 3))
          if (((f = h = t.match(rt)), e)) {
            if (~t.indexOf("=")) return (f = t.match(it)), n && f.length < 4 && (f[3] = 1), f;
          } else
            (a = (+f[0] % 360) / 360),
              (s = +f[1] / 100),
              (r = 2 * (u = +f[2] / 100) - (i = u <= 0.5 ? u * (s + 1) : u + s - u * s)),
            f.length > 3 && (f[3] *= 1),
              (f[0] = Ee(a + 1 / 3, r, i)),
              (f[1] = Ee(a, r, i)),
              (f[2] = Ee(a - 1 / 3, r, i));
        else f = t.match(rt) || Oe.transparent;
        f = f.map(Number);
      }
      return (
        e &&
        !h &&
        ((r = f[0] / Ae),
          (i = f[1] / Ae),
          (o = f[2] / Ae),
          (u = ((l = Math.max(r, i, o)) + (c = Math.min(r, i, o))) / 2),
          l === c ? (a = s = 0) : ((d = l - c), (s = u > 0.5 ? d / (2 - l - c) : d / (l + c)), (a = l === r ? (i - o) / d + (i < o ? 6 : 0) : l === i ? (o - r) / d + 2 : (r - i) / d + 4), (a *= 60)),
          (f[0] = ~~(a + 0.5)),
          (f[1] = ~~(100 * s + 0.5)),
          (f[2] = ~~(100 * u + 0.5))),
        n && f.length < 4 && (f[3] = 1),
          f
      );
    },
    Le = function (t) {
      var e = [],
        n = [],
        r = -1;
      return (
        t.split(De).forEach(function (t) {
          var i = t.match(ot) || [];
          e.push.apply(e, i), n.push((r += i.length + 1));
        }),
          (e.c = n),
          e
      );
    },
    Re = function (t, e, n) {
      var r,
        i,
        o,
        a,
        s = "",
        u = (t + s).match(De),
        l = e ? "hsla(" : "rgba(",
        c = 0;
      if (!u) return t;
      if (
        ((u = u.map(function (t) {
          return (t = ke(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
        })),
        n && ((o = Le(t)), (r = n.c).join(s) !== o.c.join(s)))
      )
        for (a = (i = t.replace(De, "1").split(ot)).length - 1; c < a; c++) s += i[c] + (~r.indexOf(c) ? u.shift() || l + "0,0,0,0)" : (o.length ? o : u.length ? u : n).shift());
      if (!i) for (a = (i = t.split(De)).length - 1; c < a; c++) s += i[c] + u[c];
      return s + i[a];
    },
    De = (function () {
      var t,
        e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in Oe) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    Pe = /hsl[a]?\(/,
    Be = function (t) {
      var e,
        n = t.join(" ");
      if (((De.lastIndex = 0), De.test(n))) return (e = Pe.test(n)), (t[1] = Re(t[1], e)), (t[0] = Re(t[0], e, Le(t[1]))), !0;
    },
    Fe =
      ((T = Date.now),
        (q = 500),
        (M = 33),
        (C = T()),
        (A = C),
        (E = O = 1e3 / 240),
        (L = function t(e) {
          var n,
            r,
            i,
            o,
            a = T() - A,
            s = !0 === e;
          if ((a > q && (C += a - M), ((n = (i = (A += a) - C) - E) > 0 || s) && ((o = ++w.frame), (x = i - 1e3 * w.time), (w.time = i /= 1e3), (E += n + (n >= O ? 4 : O - n)), (r = 1)), s || (g = y(t)), r))
            for (S = 0; S < k.length; S++) k[S](i, x, o, e);
        }),
        (w = {
          time: 0,
          frame: 0,
          tick: function () {
            L(!0);
          },
          deltaRatio: function (t) {
            return x / (1e3 / (t || 60));
          },
          wake: function () {
            p &&
            (!h &&
            K() &&
            ((d = h = window), (f = d.document || {}), (ct.gsap = Mn), (d.gsapVersions || (d.gsapVersions = [])).push(Mn.version), ht(dt || d.GreenSockGlobals || (!d.gsap && d) || {}), (b = d.requestAnimationFrame)),
            g && w.sleep(),
              (y =
                b ||
                function (t) {
                  return setTimeout(t, (E - 1e3 * w.time + 1) | 0);
                }),
              (v = 1),
              L(2));
          },
          sleep: function () {
            (b ? d.cancelAnimationFrame : clearTimeout)(g), (v = 0), (y = _t);
          },
          lagSmoothing: function (t, e) {
            (q = t || 1e8), (M = Math.min(e, q, 0));
          },
          fps: function (t) {
            (O = 1e3 / (t || 240)), (E = 1e3 * w.time + O);
          },
          add: function (t) {
            k.indexOf(t) < 0 && k.push(t), Ie();
          },
          remove: function (t) {
            var e;
            ~(e = k.indexOf(t)) && k.splice(e, 1) && S >= e && S--;
          },
          _listeners: (k = []),
        })),
    Ie = function () {
      return !v && Fe.wake();
    },
    ze = {},
    He = /^[\d.\-M][\d.\-,\s]/,
    Ne = /["']/g,
    We = function (t) {
      for (var e, n, r, i = {}, o = t.substr(1, t.length - 3).split(":"), a = o[0], s = 1, u = o.length; s < u; s++)
        (n = o[s]), (e = s !== u - 1 ? n.lastIndexOf(",") : n.length), (r = n.substr(0, e)), (i[a] = isNaN(r) ? r.replace(Ne, "").trim() : +r), (a = n.substr(e + 1).trim());
      return i;
    },
    je = function (t) {
      return function (e) {
        return 1 - t(1 - e);
      };
    },
    Ve = function t(e, n) {
      for (var r, i = e._first; i; )
        i instanceof $e ? t(i, n) : !i.vars.yoyoEase || (i._yoyo && i._repeat) || i._yoyo === n || (i.timeline ? t(i.timeline, n) : ((r = i._ease), (i._ease = i._yEase), (i._yEase = r), (i._yoyo = n))), (i = i._next);
    },
    Ye = function (t, e) {
      return (
        (t &&
          (G(t)
            ? t
            : ze[t] ||
            (function (t) {
              var e,
                n,
                r,
                i,
                o = (t + "").split("("),
                a = ze[o[0]];
              return a && o.length > 1 && a.config
                ? a.config.apply(
                  null,
                  ~t.indexOf("{") ? [We(o[1])] : ((e = t), (n = e.indexOf("(") + 1), (r = e.indexOf(")")), (i = e.indexOf("(", n)), e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r)).split(",").map(Dt)
                )
                : ze._CE && He.test(t)
                  ? ze._CE("", t)
                  : a;
            })(t))) ||
        e
      );
    },
    Xe = function (t, e, n, r) {
      void 0 === n &&
      (n = function (t) {
        return 1 - e(1 - t);
      }),
      void 0 === r &&
      (r = function (t) {
        return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
      });
      var i,
        o = { easeIn: e, easeOut: n, easeInOut: r };
      return (
        At(t, function (t) {
          for (var e in ((ze[t] = ct[t] = o), (ze[(i = t.toLowerCase())] = n), o)) ze[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = ze[t + "." + e] = o[e];
        }),
          o
      );
    },
    Ue = function (t) {
      return function (e) {
        return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
      };
    },
    Ge = function t(e, n, r) {
      var i = n >= 1 ? n : 1,
        o = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
        a = (o / N) * (Math.asin(1 / i) || 0),
        s = function (t) {
          return 1 === t ? 1 : i * Math.pow(2, -10 * t) * X((t - a) * o) + 1;
        },
        u =
          "out" === e
            ? s
            : "in" === e
              ? function (t) {
                return 1 - s(1 - t);
              }
              : Ue(s);
      return (
        (o = N / o),
          (u.config = function (n, r) {
            return t(e, n, r);
          }),
          u
      );
    },
    Qe = function t(e, n) {
      void 0 === n && (n = 1.70158);
      var r = function (t) {
          return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
        },
        i =
          "out" === e
            ? r
            : "in" === e
              ? function (t) {
                return 1 - r(1 - t);
              }
              : Ue(r);
      return (
        (i.config = function (n) {
          return t(e, n);
        }),
          i
      );
    };
  At("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var n = e < 5 ? e + 1 : e;
    Xe(
      t + ",Power" + (n - 1),
      e
        ? function (t) {
          return Math.pow(t, n);
        }
        : function (t) {
          return t;
        },
      function (t) {
        return 1 - Math.pow(1 - t, n);
      },
      function (t) {
        return t < 0.5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2;
      }
    );
  }),
    (ze.Linear.easeNone = ze.none = ze.Linear.easeIn),
    Xe("Elastic", Ge("in"), Ge("out"), Ge()),
    (R = 7.5625),
    (P = 1 / (D = 2.75)),
    Xe(
      "Bounce",
      function (t) {
        return 1 - B(1 - t);
      },
      (B = function (t) {
        return t < P ? R * t * t : t < 0.7272727272727273 ? R * Math.pow(t - 1.5 / D, 2) + 0.75 : t < 0.9090909090909092 ? R * (t -= 2.25 / D) * t + 0.9375 : R * Math.pow(t - 2.625 / D, 2) + 0.984375;
      })
    ),
    Xe("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    Xe("Circ", function (t) {
      return -(V(1 - t * t) - 1);
    }),
    Xe("Sine", function (t) {
      return 1 === t ? 1 : 1 - Y(t * W);
    }),
    Xe("Back", Qe("in"), Qe("out"), Qe()),
    (ze.SteppedEase = ze.steps = ct.SteppedEase = {
      config: function (t, e) {
        void 0 === t && (t = 1);
        var n = 1 / t,
          r = t + (e ? 0 : 1),
          i = e ? 1 : 0;
        return function (t) {
          return (((r * ce(0, 0.99999999, t)) | 0) + i) * n;
        };
      },
    }),
    (I.ease = ze["quad.out"]),
    At("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
      return (Tt += t + "," + t + "Params,");
    });
  var Je = function (t, e) {
      (this.id = j++), (t._gsap = this), (this.target = t), (this.harness = e), (this.get = e ? e.get : Ct), (this.set = e ? e.getSetter : fn);
    },
    Ze = (function () {
      function t(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          ie(this, +t.duration, 1, 1),
          (this.data = t.data),
        v || Fe.wake();
      }
      var e = t.prototype;
      return (
        (e.delay = function (t) {
          return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), (this._delay = t), this) : this._delay;
        }),
          (e.duration = function (t) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
          }),
          (e.totalDuration = function (t) {
            return arguments.length ? ((this._dirty = 0), ie(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
          }),
          (e.totalTime = function (t, e) {
            if ((Ie(), !arguments.length)) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
              for (Zt(this, t), !n._dp || n.parent || $t(n, this); n && n.parent; )
                n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), (n = n.parent);
              !this.parent && this._dp.autoRemoveChildren && ((this._ts > 0 && t < this._tDur) || (this._ts < 0 && t > 0) || (!this._tDur && !t)) && Kt(this._dp, this, this._start - this._delay);
            }
            return (this._tTime !== t || (!this._dur && !e) || (this._initted && Math.abs(this._zTime) === H) || (!t && !this._initted && (this.add || this._ptLookup))) && (this._ts || (this._pTime = t), Rt(this, t, e)), this;
          }),
          (e.time = function (t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Ut(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time;
          }),
          (e.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
          }),
          (e.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Ut(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
          }),
          (e.iteration = function (t, e) {
            var n = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? Gt(this._tTime, n) + 1 : 1;
          }),
          (e.timeScale = function (t) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? Qt(this.parent._time, this) : this._tTime;
            return (this._rts = +t || 0), (this._ts = this._ps || -1e-8 === t ? 0 : this._rts), Yt(this.totalTime(ce(-this._delay, this._tDur, e), !0)), Jt(this), this;
          }),
          (e.paused = function (t) {
            return arguments.length
              ? (this._ps !== t &&
              ((this._ps = t),
                t
                  ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                  : (Ie(),
                    (this._ts = this._rts),
                    this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== H && (this._tTime -= H)))),
                this)
              : this._ps;
          }),
          (e.startTime = function (t) {
            if (arguments.length) {
              this._start = t;
              var e = this.parent || this._dp;
              return e && (e._sort || !this.parent) && Kt(e, this, t - this._delay), this;
            }
            return this._start;
          }),
          (e.endTime = function (t) {
            return this._start + ($(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
          }),
          (e.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e ? (t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1)) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Qt(e.rawTime(t), this) : this._tTime) : this._tTime;
          }),
          (e.globalTime = function (t) {
            for (var e = this, n = arguments.length ? t : e.rawTime(); e; ) (n = e._start + n / (e._ts || 1)), (e = e._dp);
            return n;
          }),
          (e.repeat = function (t) {
            return arguments.length ? ((this._repeat = t === 1 / 0 ? -2 : t), oe(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
          }),
          (e.repeatDelay = function (t) {
            if (arguments.length) {
              var e = this._time;
              return (this._rDelay = t), oe(this), e ? this.time(e) : this;
            }
            return this._rDelay;
          }),
          (e.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (e.seek = function (t, e) {
            return this.totalTime(se(this, t), $(e));
          }),
          (e.restart = function (t, e) {
            return this.play().totalTime(t ? -this._delay : 0, $(e));
          }),
          (e.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
          }),
          (e.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
          }),
          (e.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0);
          }),
          (e.resume = function () {
            return this.paused(!1);
          }),
          (e.reversed = function (t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0;
          }),
          (e.invalidate = function () {
            return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
          }),
          (e.isActive = function () {
            var t,
              e = this.parent || this._dp,
              n = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - H));
          }),
          (e.eventCallback = function (t, e, n) {
            var r = this.vars;
            return arguments.length > 1 ? (e ? ((r[t] = e), n && (r[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete r[t], this) : r[t];
          }),
          (e.then = function (t) {
            var e = this;
            return new Promise(function (n) {
              var r = G(t) ? t : Pt,
                i = function () {
                  var t = e.then;
                  (e.then = null), G(r) && (r = r(e)) && (r.then || r === e) && (e.then = t), n(r), (e.then = t);
                };
              (e._initted && 1 === e.totalProgress() && e._ts >= 0) || (!e._tTime && e._ts < 0) ? i() : (e._prom = i);
            });
          }),
          (e.kill = function () {
            Me(this);
          }),
          t
      );
    })();
  Bt(Ze.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -1e-8, _prom: 0, _ps: !1, _rts: 1 });
  var $e = (function (t) {
    function e(e, n) {
      var r;
      return (
        void 0 === e && (e = {}),
          ((r = t.call(this, e) || this).labels = {}),
          (r.smoothChildTiming = !!e.smoothChildTiming),
          (r.autoRemoveChildren = !!e.autoRemoveChildren),
          (r._sort = $(e.sortChildren)),
        c && Kt(e.parent || c, s(r), n),
        e.reversed && r.reverse(),
        e.paused && r.paused(!0),
        e.scrollTrigger && te(s(r), e.scrollTrigger),
          r
      );
    }
    u(e, t);
    var n = e.prototype;
    return (
      (n.to = function (t, e, n) {
        return ue(0, arguments, this), this;
      }),
        (n.from = function (t, e, n) {
          return ue(1, arguments, this), this;
        }),
        (n.fromTo = function (t, e, n, r) {
          return ue(2, arguments, this), this;
        }),
        (n.set = function (t, e, n) {
          return (e.duration = 0), (e.parent = this), Nt(e).repeatDelay || (e.repeat = 0), (e.immediateRender = !!e.immediateRender), new un(t, e, se(this, n), 1), this;
        }),
        (n.call = function (t, e, n) {
          return Kt(this, un.delayedCall(0, t, e), n);
        }),
        (n.staggerTo = function (t, e, n, r, i, o, a) {
          return (n.duration = e), (n.stagger = n.stagger || r), (n.onComplete = o), (n.onCompleteParams = a), (n.parent = this), new un(t, n, se(this, i)), this;
        }),
        (n.staggerFrom = function (t, e, n, r, i, o, a) {
          return (n.runBackwards = 1), (Nt(n).immediateRender = $(n.immediateRender)), this.staggerTo(t, e, n, r, i, o, a);
        }),
        (n.staggerFromTo = function (t, e, n, r, i, o, a, s) {
          return (r.startAt = n), (Nt(r).immediateRender = $(r.immediateRender)), this.staggerTo(t, e, r, i, o, a, s);
        }),
        (n.render = function (t, e, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            l,
            d,
            h,
            f,
            p,
            m,
            _ = this._time,
            v = this._dirty ? this.totalDuration() : this._tDur,
            g = this._dur,
            y = t <= 0 ? 0 : Et(t),
            b = this._zTime < 0 != t < 0 && (this._initted || !g);
          if ((this !== c && y > v && t >= 0 && (y = v), y !== this._tTime || n || b)) {
            if ((_ !== this._time && g && ((y += this._time - _), (t += this._time - _)), (r = y), (h = this._start), (u = !(d = this._ts)), b && (g || (_ = this._zTime), (t || !e) && (this._zTime = t)), this._repeat)) {
              if (((p = this._yoyo), (s = g + this._rDelay), this._repeat < -1 && t < 0)) return this.totalTime(100 * s + t, e, n);
              if (
                ((r = Et(y % s)),
                  y === v ? ((a = this._repeat), (r = g)) : ((a = ~~(y / s)) && a === y / s && ((r = g), a--), r > g && (r = g)),
                  (f = Gt(this._tTime, s)),
                !_ && this._tTime && f !== a && (f = a),
                p && 1 & a && ((r = g - r), (m = 1)),
                a !== f && !this._lock)
              ) {
                var w = p && 1 & f,
                  x = w === (p && 1 & a);
                if (
                  (a < f && (w = !w),
                    (_ = w ? 0 : g),
                    (this._lock = 1),
                    (this.render(_ || (m ? 0 : Et(a * s)), e, !g)._lock = 0),
                    (this._tTime = y),
                  !e && this.parent && qe(this, "onRepeat"),
                  this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1),
                  (_ && _ !== this._time) || u !== !this._ts || (this.vars.onRepeat && !this.parent && !this._act))
                )
                  return this;
                if (((g = this._dur), (v = this._tDur), x && ((this._lock = 2), (_ = w ? g : -1e-4), this.render(_, !0), this.vars.repeatRefresh && !m && this.invalidate()), (this._lock = 0), !this._ts && !u)) return this;
                Ve(this, m);
              }
            }
            if (
              (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (l = (function (t, e, n) {
                var r;
                if (n > e)
                  for (r = t._first; r && r._start <= n; ) {
                    if (!r._dur && "isPause" === r.data && r._start > e) return r;
                    r = r._next;
                  }
                else
                  for (r = t._last; r && r._start >= n; ) {
                    if (!r._dur && "isPause" === r.data && r._start < e) return r;
                    r = r._prev;
                  }
              })(this, Et(_), Et(r))) &&
              (y -= r - (r = l._start)),
                (this._tTime = y),
                (this._time = r),
                (this._act = !d),
              this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = t), (_ = 0)),
              !_ && r && !e && (qe(this, "onStart"), this._tTime !== y))
            )
              return this;
            if (r >= _ && t >= 0)
              for (i = this._first; i; ) {
                if (((o = i._next), (i._act || r >= i._start) && i._ts && l !== i)) {
                  if (i.parent !== this) return this.render(t, e, n);
                  if ((i.render(i._ts > 0 ? (r - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (r - i._start) * i._ts, e, n), r !== this._time || (!this._ts && !u))) {
                    (l = 0), o && (y += this._zTime = -1e-8);
                    break;
                  }
                }
                i = o;
              }
            else {
              i = this._last;
              for (var S = t < 0 ? t : r; i; ) {
                if (((o = i._prev), (i._act || S <= i._end) && i._ts && l !== i)) {
                  if (i.parent !== this) return this.render(t, e, n);
                  if ((i.render(i._ts > 0 ? (S - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (S - i._start) * i._ts, e, n), r !== this._time || (!this._ts && !u))) {
                    (l = 0), o && (y += this._zTime = S ? -1e-8 : H);
                    break;
                  }
                }
                i = o;
              }
            }
            if (l && !e && (this.pause(), (l.render(r >= _ ? 0 : -1e-8)._zTime = r >= _ ? 1 : -1), this._ts)) return (this._start = h), Jt(this), this.render(t, e, n);
            this._onUpdate && !e && qe(this, "onUpdate", !0),
            ((y === v && v >= this.totalDuration()) || (!y && _)) &&
            ((h !== this._start && Math.abs(d) === Math.abs(this._ts)) ||
              this._lock ||
              ((t || !g) && ((y === v && this._ts > 0) || (!y && this._ts < 0)) && jt(this, 1),
              e || (t < 0 && !_) || (!y && !_ && v) || (qe(this, y === v && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < v && this.timeScale() > 0) && this._prom())));
          }
          return this;
        }),
        (n.add = function (t, e) {
          var n = this;
          if ((Q(e) || (e = se(this, e, t)), !(t instanceof Ze))) {
            if (nt(t))
              return (
                t.forEach(function (t) {
                  return n.add(t, e);
                }),
                  this
              );
            if (U(t)) return this.addLabel(t, e);
            if (!G(t)) return this;
            t = un.delayedCall(0, t);
          }
          return this !== t ? Kt(this, t, e) : this;
        }),
        (n.getChildren = function (t, e, n, r) {
          void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === r && (r = -1e8);
          for (var i = [], o = this._first; o; ) o._start >= r && (o instanceof un ? e && i.push(o) : (n && i.push(o), t && i.push.apply(i, o.getChildren(!0, e, n)))), (o = o._next);
          return i;
        }),
        (n.getById = function (t) {
          for (var e = this.getChildren(1, 1, 1), n = e.length; n--; ) if (e[n].vars.id === t) return e[n];
        }),
        (n.remove = function (t) {
          return U(t) ? this.removeLabel(t) : G(t) ? this.killTweensOf(t) : (Wt(this, t), t === this._recent && (this._recent = this._last), Vt(this));
        }),
        (n.totalTime = function (e, n) {
          return arguments.length
            ? ((this._forcing = 1), !this._dp && this._ts && (this._start = Et(Fe.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, n), (this._forcing = 0), this)
            : this._tTime;
        }),
        (n.addLabel = function (t, e) {
          return (this.labels[t] = se(this, e)), this;
        }),
        (n.removeLabel = function (t) {
          return delete this.labels[t], this;
        }),
        (n.addPause = function (t, e, n) {
          var r = un.delayedCall(0, e || _t, n);
          return (r.data = "isPause"), (this._hasPause = 1), Kt(this, r, se(this, t));
        }),
        (n.removePause = function (t) {
          var e = this._first;
          for (t = se(this, t); e; ) e._start === t && "isPause" === e.data && jt(e), (e = e._next);
        }),
        (n.killTweensOf = function (t, e, n) {
          for (var r = this.getTweensOf(t, n), i = r.length; i--; ) Ke !== r[i] && r[i].kill(t, e);
          return this;
        }),
        (n.getTweensOf = function (t, e) {
          for (var n, r = [], i = me(t), o = this._first, a = Q(e); o; )
            o instanceof un
              ? kt(o._targets, i) && (a ? (!Ke || (o._initted && o._ts)) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && r.push(o)
              : (n = o.getTweensOf(i, e)).length && r.push.apply(r, n),
              (o = o._next);
          return r;
        }),
        (n.tweenTo = function (t, e) {
          e = e || {};
          var n,
            r = this,
            i = se(r, t),
            o = e,
            a = o.startAt,
            s = o.onStart,
            u = o.onStartParams,
            l = o.immediateRender,
            c = un.to(
              r,
              Bt(
                {
                  ease: e.ease || "none",
                  lazy: !1,
                  immediateRender: !1,
                  time: i,
                  overwrite: "auto",
                  duration: e.duration || Math.abs((i - (a && "time" in a ? a.time : r._time)) / r.timeScale()) || H,
                  onStart: function () {
                    if ((r.pause(), !n)) {
                      var t = e.duration || Math.abs((i - (a && "time" in a ? a.time : r._time)) / r.timeScale());
                      c._dur !== t && ie(c, t, 0, 1).render(c._time, !0, !0), (n = 1);
                    }
                    s && s.apply(c, u || []);
                  },
                },
                e
              )
            );
          return l ? c.render(0) : c;
        }),
        (n.tweenFromTo = function (t, e, n) {
          return this.tweenTo(e, Bt({ startAt: { time: se(this, t) } }, n));
        }),
        (n.recent = function () {
          return this._recent;
        }),
        (n.nextLabel = function (t) {
          return void 0 === t && (t = this._time), Te(this, se(this, t));
        }),
        (n.previousLabel = function (t) {
          return void 0 === t && (t = this._time), Te(this, se(this, t), 1);
        }),
        (n.currentLabel = function (t) {
          return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + H);
        }),
        (n.shiftChildren = function (t, e, n) {
          void 0 === n && (n = 0);
          for (var r, i = this._first, o = this.labels; i; ) i._start >= n && ((i._start += t), (i._end += t)), (i = i._next);
          if (e) for (r in o) o[r] >= n && (o[r] += t);
          return Vt(this);
        }),
        (n.invalidate = function () {
          var e = this._first;
          for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
          return t.prototype.invalidate.call(this);
        }),
        (n.clear = function (t) {
          void 0 === t && (t = !0);
          for (var e, n = this._first; n; ) (e = n._next), this.remove(n), (n = e);
          return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Vt(this);
        }),
        (n.totalDuration = function (t) {
          var e,
            n,
            r,
            i = 0,
            o = this,
            a = o._last,
            s = z;
          if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
          if (o._dirty) {
            for (r = o.parent; a; )
              (e = a._prev),
              a._dirty && a.totalDuration(),
                (n = a._start) > s && o._sort && a._ts && !o._lock ? ((o._lock = 1), (Kt(o, a, n - a._delay, 1)._lock = 0)) : (s = n),
              n < 0 && a._ts && ((i -= n), ((!r && !o._dp) || (r && r.smoothChildTiming)) && ((o._start += n / o._ts), (o._time -= n), (o._tTime -= n)), o.shiftChildren(-n, !1, -Infinity), (s = 0)),
              a._end > i && a._ts && (i = a._end),
                (a = e);
            ie(o, o === c && o._time > i ? o._time : i, 1, 1), (o._dirty = 0);
          }
          return o._tDur;
        }),
        (e.updateRoot = function (t) {
          if ((c._ts && (Rt(c, Qt(t, c)), (m = Fe.frame)), Fe.frame >= xt)) {
            xt += F.autoSleep || 120;
            var e = c._first;
            if ((!e || !e._ts) && F.autoSleep && Fe._listeners.length < 2) {
              for (; e && !e._ts; ) e = e._next;
              e || Fe.sleep();
            }
          }
        }),
        e
    );
  })(Ze);
  Bt($e.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Ke,
    tn = function (t, e, n, r, i, o, a) {
      var s,
        u,
        l,
        c,
        d,
        h,
        f,
        p,
        m = new xn(this._pt, t, e, 0, 1, _n, null, i),
        _ = 0,
        v = 0;
      for (m.b = n, m.e = r, n += "", (f = ~(r += "").indexOf("random(")) && (r = xe(r)), o && (o((p = [n, r]), t, e), (n = p[0]), (r = p[1])), u = n.match(at) || []; (s = at.exec(r)); )
        (c = s[0]),
          (d = r.substring(_, s.index)),
          l ? (l = (l + 1) % 5) : "rgba(" === d.substr(-5) && (l = 1),
        c !== u[v++] &&
        ((h = parseFloat(u[v - 1]) || 0),
          (m._pt = { _next: m._pt, p: d || 1 === v ? d : ",", s: h, c: "=" === c.charAt(1) ? parseFloat(c.substr(2)) * ("-" === c.charAt(0) ? -1 : 1) : parseFloat(c) - h, m: l && l < 4 ? Math.round : 0 }),
          (_ = at.lastIndex));
      return (m.c = _ < r.length ? r.substring(_, r.length) : ""), (m.fp = a), (st.test(r) || f) && (m.e = 0), (this._pt = m), m;
    },
    en = function (t, e, n, r, i, o, a, s, u) {
      G(r) && (r = r(i || 0, t, o));
      var l,
        c = t[e],
        d = "get" !== n ? n : G(c) ? (u ? t[e.indexOf("set") || !G(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]()) : c,
        h = G(c) ? (u ? dn : cn) : ln;
      if ((U(r) && (~r.indexOf("random(") && (r = xe(r)), "=" === r.charAt(1) && ((l = parseFloat(d) + parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) + (de(d) || 0)) || 0 === l) && (r = l)), d !== r))
        return isNaN(d * r) || "" === r
          ? (!c && !(e in t) && ft(e, r), tn.call(this, t, e, d, r, h, s || F.stringFilter, u))
          : ((l = new xn(this._pt, t, e, +d || 0, r - (d || 0), "boolean" == typeof c ? mn : pn, 0, h)), u && (l.fp = u), a && l.modifier(a, this, t), (this._pt = l));
    },
    nn = function (t, e, n, r, i, o) {
      var a, s, u, l;
      if (
        bt[t] &&
        !1 !==
        (a = new bt[t]()).init(
          i,
          a.rawVars
            ? e[t]
            : (function (t, e, n, r, i) {
              if ((G(t) && (t = on(t, i, e, n, r)), !Z(t) || (t.style && t.nodeType) || nt(t) || et(t))) return U(t) ? on(t, i, e, n, r) : t;
              var o,
                a = {};
              for (o in t) a[o] = on(t[o], i, e, n, r);
              return a;
            })(e[t], r, i, o, n),
          n,
          r,
          o
        ) &&
        ((n._pt = s = new xn(n._pt, i, t, 0, 1, a.render, a, 0, a.priority)), n !== _)
      )
        for (u = n._ptLookup[n._targets.indexOf(i)], l = a._props.length; l--; ) u[a._props[l]] = s;
      return a;
    },
    rn = function t(e, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        d,
        h,
        f,
        p,
        m,
        _,
        v,
        g = e.vars,
        y = g.ease,
        b = g.startAt,
        w = g.immediateRender,
        x = g.lazy,
        S = g.onUpdate,
        T = g.onUpdateParams,
        q = g.callbackScope,
        M = g.runBackwards,
        C = g.yoyoEase,
        A = g.keyframes,
        O = g.autoRevert,
        E = e._dur,
        k = e._startAt,
        L = e._targets,
        R = e.parent,
        D = R && "nested" === R.data ? R.parent._targets : L,
        P = "auto" === e._overwrite && !l,
        B = e.timeline;
      if (
        (B && (!A || !y) && (y = "none"),
          (e._ease = Ye(y, I.ease)),
          (e._yEase = C ? je(Ye(!0 === C ? y : C, I.ease)) : 0),
        C && e._yoyo && !e._repeat && ((C = e._yEase), (e._yEase = e._ease), (e._ease = C)),
          (e._from = !B && !!g.runBackwards),
          !B)
      ) {
        if (((_ = (h = L[0] ? Mt(L[0]).harness : 0) && g[h.prop]), (r = Ht(g, vt)), k && k.render(-1, !0).kill(), b))
          if (
            (jt((e._startAt = un.set(L, Bt({ data: "isStart", overwrite: !1, parent: R, immediateRender: !0, lazy: $(x), startAt: null, delay: 0, onUpdate: S, onUpdateParams: T, callbackScope: q, stagger: 0 }, b)))),
            n < 0 && !w && !O && e._startAt.render(-1, !0),
              w)
          ) {
            if ((n > 0 && !O && (e._startAt = 0), E && n <= 0)) return void (n && (e._zTime = n));
          } else !1 === O && (e._startAt = 0);
        else if (M && E)
          if (k) !O && (e._startAt = 0);
          else if (
            (n && (w = !1),
              (o = Bt({ overwrite: !1, data: "isFromStart", lazy: w && $(x), immediateRender: w, stagger: 0, parent: R }, r)),
            _ && (o[h.prop] = _),
              jt((e._startAt = un.set(L, o))),
            n < 0 && e._startAt.render(-1, !0),
              w)
          ) {
            if (!n) return;
          } else t(e._startAt, H);
        for (e._pt = 0, x = (E && $(x)) || (x && !E), i = 0; i < L.length; i++) {
          if (
            ((d = (s = L[i])._gsap || qt(L)[i]._gsap),
              (e._ptLookup[i] = p = {}),
            yt[d.id] && gt.length && Lt(),
              (m = D === L ? i : D.indexOf(s)),
            h &&
            !1 !== (f = new h()).init(s, _ || r, e, m, D) &&
            ((e._pt = a = new xn(e._pt, s, f.name, 0, 1, f.render, f, 0, f.priority)),
              f._props.forEach(function (t) {
                p[t] = a;
              }),
            f.priority && (u = 1)),
            !h || _)
          )
            for (o in r) bt[o] && (f = nn(o, r, e, m, s, D)) ? f.priority && (u = 1) : (p[o] = a = en.call(e, s, o, "get", r[o], m, D, 0, g.stringFilter));
          e._op && e._op[i] && e.kill(s, e._op[i]), P && e._pt && ((Ke = e), c.killTweensOf(s, p, e.globalTime(n)), (v = !e.parent), (Ke = 0)), e._pt && x && (yt[d.id] = 1);
        }
        u && wn(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = S), (e._initted = (!e._op || e._pt) && !v);
    },
    on = function (t, e, n, r, i) {
      return G(t) ? t.call(e, n, r, i) : U(t) && ~t.indexOf("random(") ? xe(t) : t;
    },
    an = Tt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
    sn = (an + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
    un = (function (t) {
      function e(e, n, r, i) {
        var o;
        "number" == typeof n && ((r.duration = n), (n = r), (r = null));
        var a,
          u,
          d,
          h,
          f,
          p,
          m,
          _,
          v = (o = t.call(this, i ? n : Nt(n)) || this).vars,
          g = v.duration,
          y = v.delay,
          b = v.immediateRender,
          w = v.stagger,
          x = v.overwrite,
          S = v.keyframes,
          T = v.defaults,
          q = v.scrollTrigger,
          M = v.yoyoEase,
          C = n.parent || c,
          A = (nt(e) || et(e) ? Q(e[0]) : "length" in n) ? [e] : me(e);
        if (((o._targets = A.length ? qt(A) : pt("GSAP target " + e + " not found. https://greensock.com", !F.nullTargetWarn) || []), (o._ptLookup = []), (o._overwrite = x), S || w || tt(g) || tt(y))) {
          if (((n = o.vars), (a = o.timeline = new $e({ data: "nested", defaults: T || {} })).kill(), (a.parent = a._dp = s(o)), (a._start = 0), S))
            Nt(Bt(a.vars.defaults, { ease: "none" })),
              w
                ? A.forEach(function (t, e) {
                  return S.forEach(function (n, r) {
                    return a.to(t, n, r ? ">" : e * w);
                  });
                })
                : S.forEach(function (t) {
                  return a.to(A, t, ">");
                });
          else {
            if (((h = A.length), (m = w ? ve(w) : _t), Z(w))) for (f in w) ~an.indexOf(f) && (_ || (_ = {}), (_[f] = w[f]));
            for (u = 0; u < h; u++) {
              for (f in ((d = {}), n)) sn.indexOf(f) < 0 && (d[f] = n[f]);
              (d.stagger = 0),
              M && (d.yoyoEase = M),
              _ && It(d, _),
                (p = A[u]),
                (d.duration = +on(g, s(o), u, p, A)),
                (d.delay = (+on(y, s(o), u, p, A) || 0) - o._delay),
              !w && 1 === h && d.delay && ((o._delay = y = d.delay), (o._start += y), (d.delay = 0)),
                a.to(p, d, m(u, p, A));
            }
            a.duration() ? (g = y = 0) : (o.timeline = 0);
          }
          g || o.duration((g = a.duration()));
        } else o.timeline = 0;
        return (
          !0 !== x || l || ((Ke = s(o)), c.killTweensOf(A), (Ke = 0)),
            Kt(C, s(o), r),
          n.reversed && o.reverse(),
          n.paused && o.paused(!0),
          (b || (!g && !S && o._start === Et(C._time) && $(b) && Xt(s(o)) && "nested" !== C.data)) && ((o._tTime = -1e-8), o.render(Math.max(0, -y))),
          q && te(s(o), q),
            o
        );
      }
      u(e, t);
      var n = e.prototype;
      return (
        (n.render = function (t, e, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            d,
            h = this._time,
            f = this._tDur,
            p = this._dur,
            m = t > f - H && t >= 0 ? f : t < H ? 0 : t;
          if (p) {
            if (m !== this._tTime || !t || n || (!this._initted && this._tTime) || (this._startAt && this._zTime < 0 != t < 0)) {
              if (((r = m), (c = this.timeline), this._repeat)) {
                if (((a = p + this._rDelay), this._repeat < -1 && t < 0)) return this.totalTime(100 * a + t, e, n);
                if (
                  ((r = Et(m % a)),
                    m === f ? ((o = this._repeat), (r = p)) : ((o = ~~(m / a)) && o === m / a && ((r = p), o--), r > p && (r = p)),
                  (u = this._yoyo && 1 & o) && ((d = this._yEase), (r = p - r)),
                    (s = Gt(this._tTime, a)),
                  r === h && !n && this._initted)
                )
                  return this;
                o !== s && (c && this._yEase && Ve(c, u), !this.vars.repeatRefresh || u || this._lock || ((this._lock = n = 1), (this.render(Et(a * o), !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (ee(this, t < 0 ? t : r, n, e)) return (this._tTime = 0), this;
                if (p !== this._dur) return this.render(t, e, n);
              }
              if (
                ((this._tTime = m),
                  (this._time = r),
                !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = l = (d || this._ease)(r / p)),
                this._from && (this.ratio = l = 1 - l),
                r && !h && !e && (qe(this, "onStart"), this._tTime !== m))
              )
                return this;
              for (i = this._pt; i; ) i.r(l, i.d), (i = i._next);
              (c && c.render(t < 0 ? t : !r && u ? -1e-8 : c._dur * l, e, n)) || (this._startAt && (this._zTime = t)),
              this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n), qe(this, "onUpdate")),
              this._repeat && o !== s && this.vars.onRepeat && !e && this.parent && qe(this, "onRepeat"),
              (m !== this._tDur && m) ||
              this._tTime !== m ||
              (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
              (t || !p) && ((m === this._tDur && this._ts > 0) || (!m && this._ts < 0)) && jt(this, 1),
              e || (t < 0 && !h) || (!m && !h) || (qe(this, m === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < f && this.timeScale() > 0) && this._prom()));
            }
          } else
            !(function (t, e, n, r) {
              var i,
                o,
                a,
                s = t.ratio,
                u = e < 0 || (!e && ((!t._start && ne(t) && (t._initted || !re(t))) || ((t._ts < 0 || t._dp._ts < 0) && !re(t)))) ? 0 : 1,
                l = t._rDelay,
                c = 0;
              if (
                (l && t._repeat && ((c = ce(0, t._tDur, e)), (o = Gt(c, l)), (a = Gt(t._tTime, l)), t._yoyo && 1 & o && (u = 1 - u), o !== a && ((s = 1 - u), t.vars.repeatRefresh && t._initted && t.invalidate())),
                u !== s || r || t._zTime === H || (!e && t._zTime))
              ) {
                if (!t._initted && ee(t, e, r, n)) return;
                for (a = t._zTime, t._zTime = e || (n ? H : 0), n || (n = e && !a), t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = c, i = t._pt; i; ) i.r(u, i.d), (i = i._next);
                t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                t._onUpdate && !n && qe(t, "onUpdate"),
                c && t._repeat && !n && t.parent && qe(t, "onRepeat"),
                (e >= t._tDur || e < 0) && t.ratio === u && (u && jt(t, 1), n || (qe(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
              } else t._zTime || (t._zTime = e);
            })(this, t, e, n);
          return this;
        }),
          (n.targets = function () {
            return this._targets;
          }),
          (n.invalidate = function () {
            return (this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0), (this._ptLookup = []), this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this);
          }),
          (n.kill = function (t, e) {
            if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e)))) return (this._lazy = this._pt = 0), this.parent ? Me(this) : this;
            if (this.timeline) {
              var n = this.timeline.totalDuration();
              return this.timeline.killTweensOf(t, e, Ke && !0 !== Ke.vars.overwrite)._first || Me(this), this.parent && n !== this.timeline.totalDuration() && ie(this, (this._dur * this.timeline._tDur) / n, 0, 1), this;
            }
            var r,
              i,
              o,
              a,
              s,
              u,
              l,
              c = this._targets,
              d = t ? me(t) : c,
              h = this._ptLookup,
              f = this._pt;
            if (
              (!e || "all" === e) &&
              (function (t, e) {
                for (var n = t.length, r = n === e.length; r && n-- && t[n] === e[n]; );
                return n < 0;
              })(c, d)
            )
              return "all" === e && (this._pt = 0), Me(this);
            for (
              r = this._op = this._op || [],
              "all" !== e &&
              (U(e) &&
              ((s = {}),
                At(e, function (t) {
                  return (s[t] = 1);
                }),
                (e = s)),
                (e = (function (t, e) {
                  var n,
                    r,
                    i,
                    o,
                    a = t[0] ? Mt(t[0]).harness : 0,
                    s = a && a.aliases;
                  if (!s) return e;
                  for (r in ((n = It({}, e)), s)) if ((r in n)) for (i = (o = s[r].split(",")).length; i--; ) n[o[i]] = n[r];
                  return n;
                })(c, e))),
                l = c.length;
              l--;

            )
              if (~d.indexOf(c[l]))
                for (s in ((i = h[l]), "all" === e ? ((r[l] = e), (a = i), (o = {})) : ((o = r[l] = r[l] || {}), (a = e)), a))
                  (u = i && i[s]) && (("kill" in u.d && !0 !== u.d.kill(s)) || Wt(this, u, "_pt"), delete i[s]), "all" !== o && (o[s] = 1);
            return this._initted && !this._pt && f && Me(this), this;
          }),
          (e.to = function (t, n) {
            return new e(t, n, arguments[2]);
          }),
          (e.from = function (t, e) {
            return ue(1, arguments);
          }),
          (e.delayedCall = function (t, n, r, i) {
            return new e(n, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: n, onReverseComplete: n, onCompleteParams: r, onReverseCompleteParams: r, callbackScope: i });
          }),
          (e.fromTo = function (t, e, n) {
            return ue(2, arguments);
          }),
          (e.set = function (t, n) {
            return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(t, n);
          }),
          (e.killTweensOf = function (t, e, n) {
            return c.killTweensOf(t, e, n);
          }),
          e
      );
    })(Ze);
  Bt(un.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    At("staggerTo,staggerFrom,staggerFromTo", function (t) {
      un[t] = function () {
        var e = new $e(),
          n = he.call(arguments, 0);
        return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n);
      };
    });
  var ln = function (t, e, n) {
      return (t[e] = n);
    },
    cn = function (t, e, n) {
      return t[e](n);
    },
    dn = function (t, e, n, r) {
      return t[e](r.fp, n);
    },
    hn = function (t, e, n) {
      return t.setAttribute(e, n);
    },
    fn = function (t, e) {
      return G(t[e]) ? cn : J(t[e]) && t.setAttribute ? hn : ln;
    },
    pn = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
    },
    mn = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    _n = function (t, e) {
      var n = e._pt,
        r = "";
      if (!t && e.b) r = e.b;
      else if (1 === t && e.e) r = e.e;
      else {
        for (; n; ) (r = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + r), (n = n._next);
        r += e.c;
      }
      e.set(e.t, e.p, r, e);
    },
    vn = function (t, e) {
      for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
    },
    gn = function (t, e, n, r) {
      for (var i, o = this._pt; o; ) (i = o._next), o.p === r && o.modifier(t, e, n), (o = i);
    },
    yn = function (t) {
      for (var e, n, r = this._pt; r; ) (n = r._next), (r.p === t && !r.op) || r.op === t ? Wt(this, r, "_pt") : r.dep || (e = 1), (r = n);
      return !e;
    },
    bn = function (t, e, n, r) {
      r.mSet(t, e, r.m.call(r.tween, n, r.mt), r);
    },
    wn = function (t) {
      for (var e, n, r, i, o = t._pt; o; ) {
        for (e = o._next, n = r; n && n.pr > o.pr; ) n = n._next;
        (o._prev = n ? n._prev : i) ? (o._prev._next = o) : (r = o), (o._next = n) ? (n._prev = o) : (i = o), (o = e);
      }
      t._pt = r;
    },
    xn = (function () {
      function t(t, e, n, r, i, o, a, s, u) {
        (this.t = e), (this.s = r), (this.c = i), (this.p = n), (this.r = o || pn), (this.d = a || this), (this.set = s || ln), (this.pr = u || 0), (this._next = t), t && (t._prev = this);
      }
      return (
        (t.prototype.modifier = function (t, e, n) {
          (this.mSet = this.mSet || this.set), (this.set = bn), (this.m = t), (this.mt = n), (this.tween = e);
        }),
          t
      );
    })();
  At(
    Tt +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (vt[t] = 1);
    }
  ),
    (ct.TweenMax = ct.TweenLite = un),
    (ct.TimelineLite = ct.TimelineMax = $e),
    (c = new $e({ sortChildren: !1, defaults: I, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 })),
    (F.stringFilter = Be);
  var Sn = {
    registerPlugin: function () {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
      e.forEach(function (t) {
        return Ce(t);
      });
    },
    timeline: function (t) {
      return new $e(t);
    },
    getTweensOf: function (t, e) {
      return c.getTweensOf(t, e);
    },
    getProperty: function (t, e, n, r) {
      U(t) && (t = me(t)[0]);
      var i = Mt(t || {}).get,
        o = n ? Pt : Dt;
      return (
        "native" === n && (n = ""),
          t
            ? e
              ? o(((bt[e] && bt[e].get) || i)(t, e, n, r))
              : function (e, n, r) {
                return o(((bt[e] && bt[e].get) || i)(t, e, n, r));
              }
            : t
      );
    },
    quickSetter: function (t, e, n) {
      if ((t = me(t)).length > 1) {
        var r = t.map(function (t) {
            return Mn.quickSetter(t, e, n);
          }),
          i = r.length;
        return function (t) {
          for (var e = i; e--; ) r[e](t);
        };
      }
      t = t[0] || {};
      var o = bt[e],
        a = Mt(t),
        s = (a.harness && (a.harness.aliases || {})[e]) || e,
        u = o
          ? function (e) {
            var r = new o();
            (_._pt = 0), r.init(t, n ? e + n : e, _, 0, [t]), r.render(1, r), _._pt && vn(1, _);
          }
          : a.set(t, s);
      return o
        ? u
        : function (e) {
          return u(t, s, n ? e + n : e, a, 1);
        };
    },
    isTweening: function (t) {
      return c.getTweensOf(t, !0).length > 0;
    },
    defaults: function (t) {
      return t && t.ease && (t.ease = Ye(t.ease, I.ease)), zt(I, t || {});
    },
    config: function (t) {
      return zt(F, t || {});
    },
    registerEffect: function (t) {
      var e = t.name,
        n = t.effect,
        r = t.plugins,
        i = t.defaults,
        o = t.extendTimeline;
      (r || "").split(",").forEach(function (t) {
        return t && !bt[t] && !ct[t] && pt(e + " effect requires " + t + " plugin.");
      }),
        (wt[e] = function (t, e, r) {
          return n(me(t), Bt(e || {}, i), r);
        }),
      o &&
      ($e.prototype[e] = function (t, n, r) {
        return this.add(wt[e](t, Z(n) ? n : (r = n) && {}, this), r);
      });
    },
    registerEase: function (t, e) {
      ze[t] = Ye(e);
    },
    parseEase: function (t, e) {
      return arguments.length ? Ye(t, e) : ze;
    },
    getById: function (t) {
      return c.getById(t);
    },
    exportRoot: function (t, e) {
      void 0 === t && (t = {});
      var n,
        r,
        i = new $e(t);
      for (i.smoothChildTiming = $(t.smoothChildTiming), c.remove(i), i._dp = 0, i._time = i._tTime = c._time, n = c._first; n; )
        (r = n._next), (!e && !n._dur && n instanceof un && n.vars.onComplete === n._targets[0]) || Kt(i, n, n._start - n._delay), (n = r);
      return Kt(c, i, 0), i;
    },
    utils: {
      wrap: function t(e, n, r) {
        var i = n - e;
        return nt(e)
          ? we(e, t(0, e.length), n)
          : le(r, function (t) {
            return ((i + ((t - e) % i)) % i) + e;
          });
      },
      wrapYoyo: function t(e, n, r) {
        var i = n - e,
          o = 2 * i;
        return nt(e)
          ? we(e, t(0, e.length - 1), n)
          : le(r, function (t) {
            return e + ((t = (o + ((t - e) % o)) % o || 0) > i ? o - t : t);
          });
      },
      distribute: ve,
      random: be,
      snap: ye,
      normalize: function (t, e, n) {
        return Se(t, e, 0, 1, n);
      },
      getUnit: de,
      clamp: function (t, e, n) {
        return le(n, function (n) {
          return ce(t, e, n);
        });
      },
      splitColor: ke,
      toArray: me,
      selector: function (t) {
        return (
          (t = me(t)[0] || pt("Invalid scope") || {}),
            function (e) {
              var n = t.current || t.nativeElement || t;
              return me(e, n.querySelectorAll ? n : n === t ? pt("Invalid scope") || f.createElement("div") : t);
            }
        );
      },
      mapRange: Se,
      pipe: function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function (t, e) {
        return function (n) {
          return t(parseFloat(n)) + (e || de(n));
        };
      },
      interpolate: function t(e, n, r, i) {
        var o = isNaN(e + n)
          ? 0
          : function (t) {
            return (1 - t) * e + t * n;
          };
        if (!o) {
          var a,
            s,
            u,
            l,
            c,
            d = U(e),
            h = {};
          if ((!0 === r && (i = 1) && (r = null), d)) (e = { p: e }), (n = { p: n });
          else if (nt(e) && !nt(n)) {
            for (u = [], l = e.length, c = l - 2, s = 1; s < l; s++) u.push(t(e[s - 1], e[s]));
            l--,
              (o = function (t) {
                t *= l;
                var e = Math.min(c, ~~t);
                return u[e](t - e);
              }),
              (r = n);
          } else i || (e = It(nt(e) ? [] : {}, e));
          if (!u) {
            for (a in n) en.call(h, e, a, "get", n[a]);
            o = function (t) {
              return vn(t, h) || (d ? e.p : e);
            };
          }
        }
        return le(r, o);
      },
      shuffle: _e,
    },
    install: ht,
    effects: wt,
    ticker: Fe,
    updateRoot: $e.updateRoot,
    plugins: bt,
    globalTimeline: c,
    core: {
      PropTween: xn,
      globals: mt,
      Tween: un,
      Timeline: $e,
      Animation: Ze,
      getCache: Mt,
      _removeLinkedListItem: Wt,
      suppressOverwrites: function (t) {
        return (l = t);
      },
    },
  };
  At("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (Sn[t] = un[t]);
  }),
    Fe.add($e.updateRoot),
    (_ = Sn.to({}, { duration: 0 }));
  var Tn = function (t, e) {
      for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; ) n = n._next;
      return n;
    },
    qn = function (t, e) {
      return {
        name: t,
        rawVars: 1,
        init: function (t, n, r) {
          r._onInit = function (t) {
            var r, i;
            if (
              (U(n) &&
              ((r = {}),
                At(n, function (t) {
                  return (r[t] = 1);
                }),
                (n = r)),
                e)
            ) {
              for (i in ((r = {}), n)) r[i] = e(n[i]);
              n = r;
            }
            !(function (t, e) {
              var n,
                r,
                i,
                o = t._targets;
              for (n in e) for (r = o.length; r--; ) (i = t._ptLookup[r][n]) && (i = i.d) && (i._pt && (i = Tn(i, n)), i && i.modifier && i.modifier(e[n], t, o[r], n));
            })(t, n);
          };
        },
      };
    },
    Mn =
      Sn.registerPlugin(
        {
          name: "attr",
          init: function (t, e, n, r, i) {
            var o, a;
            for (o in e) (a = this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], r, i, 0, 0, o)) && (a.op = o), this._props.push(o);
          },
        },
        {
          name: "endArray",
          init: function (t, e) {
            for (var n = e.length; n--; ) this.add(t, n, t[n] || 0, e[n]);
          },
        },
        qn("roundProps", ge),
        qn("modifiers"),
        qn("snap", ye)
      ) || Sn;
  (un.version = $e.version = Mn.version = "3.8.0"), (p = 1), K() && Ie();
  /*!
     * CSSPlugin 3.8.0
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
  var Cn,
    An,
    On,
    En,
    kn,
    Ln,
    Rn,
    Dn = {},
    Pn = 180 / Math.PI,
    Bn = Math.PI / 180,
    Fn = Math.atan2,
    In = /([A-Z])/g,
    zn = /(?:left|right|width|margin|padding|x)/i,
    Hn = /[\s,\(]\S/,
    Nn = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
    Wn = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    },
    jn = function (t, e) {
      return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    },
    Vn = function (t, e) {
      return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
    },
    Yn = function (t, e) {
      var n = e.s + e.c * t;
      e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
    },
    Xn = function (t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    },
    Un = function (t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    },
    Gn = function (t, e, n) {
      return (t.style[e] = n);
    },
    Qn = function (t, e, n) {
      return t.style.setProperty(e, n);
    },
    Jn = function (t, e, n) {
      return (t._gsap[e] = n);
    },
    Zn = function (t, e, n) {
      return (t._gsap.scaleX = t._gsap.scaleY = n);
    },
    $n = function (t, e, n, r, i) {
      var o = t._gsap;
      (o.scaleX = o.scaleY = n), o.renderTransform(i, o);
    },
    Kn = function (t, e, n, r, i) {
      var o = t._gsap;
      (o[e] = n), o.renderTransform(i, o);
    },
    tr = "transform",
    er = tr + "Origin",
    nr = function (t, e) {
      var n = An.createElementNS ? An.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : An.createElement(t);
      return n.style ? n : An.createElement(t);
    },
    rr = function t(e, n, r) {
      var i = getComputedStyle(e);
      return i[n] || i.getPropertyValue(n.replace(In, "-$1").toLowerCase()) || i.getPropertyValue(n) || (!r && t(e, or(n) || n, 1)) || "";
    },
    ir = "O,Moz,ms,Ms,Webkit".split(","),
    or = function (t, e, n) {
      var r = (e || kn).style,
        i = 5;
      if (t in r && !n) return t;
      for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(ir[i] + t in r); );
      return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? ir[i] : "") + t;
    },
    ar = function () {
      "undefined" != typeof window &&
      window.document &&
      ((Cn = window),
        (An = Cn.document),
        (On = An.documentElement),
        (kn = nr("div") || { style: {} }),
        nr("div"),
        (tr = or(tr)),
        (er = tr + "Origin"),
        (kn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
        (Rn = !!or("perspective")),
        (En = 1));
    },
    sr = function t(e) {
      var n,
        r = nr("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
        i = this.parentNode,
        o = this.nextSibling,
        a = this.style.cssText;
      if ((On.appendChild(r), r.appendChild(this), (this.style.display = "block"), e))
        try {
          (n = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = t);
        } catch (t) {}
      else this._gsapBBox && (n = this._gsapBBox());
      return i && (o ? i.insertBefore(this, o) : i.appendChild(this)), On.removeChild(r), (this.style.cssText = a), n;
    },
    ur = function (t, e) {
      for (var n = e.length; n--; ) if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
    },
    lr = function (t) {
      var e;
      try {
        e = t.getBBox();
      } catch (n) {
        e = sr.call(t, !0);
      }
      return (e && (e.width || e.height)) || t.getBBox === sr || (e = sr.call(t, !0)), !e || e.width || e.x || e.y ? e : { x: +ur(t, ["x", "cx", "x1"]) || 0, y: +ur(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 };
    },
    cr = function (t) {
      return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !lr(t));
    },
    dr = function (t, e) {
      if (e) {
        var n = t.style;
        e in Dn && e !== er && (e = tr), n.removeProperty ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) || (e = "-" + e), n.removeProperty(e.replace(In, "-$1").toLowerCase())) : n.removeAttribute(e);
      }
    },
    hr = function (t, e, n, r, i, o) {
      var a = new xn(t._pt, e, n, 0, 1, o ? Un : Xn);
      return (t._pt = a), (a.b = r), (a.e = i), t._props.push(n), a;
    },
    fr = { deg: 1, rad: 1, turn: 1 },
    pr = function t(e, n, r, i) {
      var o,
        a,
        s,
        u,
        l = parseFloat(r) || 0,
        c = (r + "").trim().substr((l + "").length) || "px",
        d = kn.style,
        h = zn.test(n),
        f = "svg" === e.tagName.toLowerCase(),
        p = (f ? "client" : "offset") + (h ? "Width" : "Height"),
        m = 100,
        _ = "px" === i,
        v = "%" === i;
      return i === c || !l || fr[i] || fr[c]
        ? l
        : ("px" !== c && !_ && (l = t(e, n, r, "px")),
          (u = e.getCTM && cr(e)),
          (!v && "%" !== c) || (!Dn[n] && !~n.indexOf("adius"))
            ? ((d[h ? "width" : "height"] = m + (_ ? c : i)),
              (a = ~n.indexOf("adius") || ("em" === i && e.appendChild && !f) ? e : e.parentNode),
            u && (a = (e.ownerSVGElement || {}).parentNode),
            (a && a !== An && a.appendChild) || (a = An.body),
              (s = a._gsap) && v && s.width && h && s.time === Fe.time
                ? Ot((l / s.width) * m)
                : ((v || "%" === c) && (d.position = rr(e, "position")),
                a === e && (d.position = "static"),
                  a.appendChild(kn),
                  (o = kn[p]),
                  a.removeChild(kn),
                  (d.position = "absolute"),
                h && v && (((s = Mt(a)).time = Fe.time), (s.width = a[p])),
                  Ot(_ ? (o * l) / m : o && l ? (m / o) * l : 0)))
            : ((o = u ? e.getBBox()[h ? "width" : "height"] : e[p]), Ot(v ? (l / o) * m : (l / 100) * o)));
    },
    mr = function (t, e, n, r) {
      var i;
      return (
        En || ar(),
        e in Nn && "transform" !== e && ~(e = Nn[e]).indexOf(",") && (e = e.split(",")[0]),
          Dn[e] && "transform" !== e
            ? ((i = Mr(t, r)), (i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : Cr(rr(t, er)) + " " + i.zOrigin + "px"))
            : (!(i = t.style[e]) || "auto" === i || r || ~(i + "").indexOf("calc(")) && (i = (yr[e] && yr[e](t, e, n)) || rr(t, e) || Ct(t, e) || ("opacity" === e ? 1 : 0)),
          n && !~(i + "").trim().indexOf(" ") ? pr(t, e, i, n) + n : i
      );
    },
    _r = function (t, e, n, r) {
      if (!n || "none" === n) {
        var i = or(e, t, 1),
          o = i && rr(t, i, 1);
        o && o !== n ? ((e = i), (n = o)) : "borderColor" === e && (n = rr(t, "borderTopColor"));
      }
      var a,
        s,
        u,
        l,
        c,
        d,
        h,
        f,
        p,
        m,
        _,
        v,
        g = new xn(this._pt, t.style, e, 0, 1, _n),
        y = 0,
        b = 0;
      if (((g.b = n), (g.e = r), (n += ""), "auto" === (r += "") && ((t.style[e] = r), (r = rr(t, e) || r), (t.style[e] = n)), Be((a = [n, r])), (n = a[0]), (r = a[1]), (u = n.match(ot) || []), (r.match(ot) || []).length)) {
        for (; (s = ot.exec(r)); )
          (h = s[0]),
            (p = r.substring(y, s.index)),
            c ? (c = (c + 1) % 5) : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) || (c = 1),
          h !== (d = u[b++] || "") &&
          ((l = parseFloat(d) || 0),
            (_ = d.substr((l + "").length)),
          (v = "=" === h.charAt(1) ? +(h.charAt(0) + "1") : 0) && (h = h.substr(2)),
            (f = parseFloat(h)),
            (m = h.substr((f + "").length)),
            (y = ot.lastIndex - m.length),
          m || ((m = m || F.units[e] || _), y === r.length && ((r += m), (g.e += m))),
          _ !== m && (l = pr(t, e, d, m) || 0),
            (g._pt = { _next: g._pt, p: p || 1 === b ? p : ",", s: l, c: v ? v * f : f - l, m: (c && c < 4) || "zIndex" === e ? Math.round : 0 }));
        g.c = y < r.length ? r.substring(y, r.length) : "";
      } else g.r = "display" === e && "none" === r ? Un : Xn;
      return st.test(r) && (g.e = 0), (this._pt = g), g;
    },
    vr = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
    gr = function (t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var n,
          r,
          i,
          o = e.t,
          a = o.style,
          s = e.u,
          u = o._gsap;
        if ("all" === s || !0 === s) (a.cssText = ""), (r = 1);
        else for (i = (s = s.split(",")).length; --i > -1; ) (n = s[i]), Dn[n] && ((r = 1), (n = "transformOrigin" === n ? er : tr)), dr(o, n);
        r && (dr(o, tr), u && (u.svg && o.removeAttribute("transform"), Mr(o, 1), (u.uncache = 1)));
      }
    },
    yr = {
      clearProps: function (t, e, n, r, i) {
        if ("isFromStart" !== i.data) {
          var o = (t._pt = new xn(t._pt, e, n, 0, 0, gr));
          return (o.u = r), (o.pr = -10), (o.tween = i), t._props.push(n), 1;
        }
      },
    },
    br = [1, 0, 0, 1, 0, 0],
    wr = {},
    xr = function (t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    },
    Sr = function (t) {
      var e = rr(t, tr);
      return xr(e) ? br : e.substr(7).match(it).map(Ot);
    },
    Tr = function (t, e) {
      var n,
        r,
        i,
        o,
        a = t._gsap || Mt(t),
        s = t.style,
        u = Sr(t);
      return a.svg && t.getAttribute("transform")
        ? "1,0,0,1,0,0" === (u = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",")
          ? br
          : u
        : (u !== br ||
        t.offsetParent ||
        t === On ||
        a.svg ||
        ((i = s.display),
          (s.display = "block"),
        ((n = t.parentNode) && t.offsetParent) || ((o = 1), (r = t.nextSibling), On.appendChild(t)),
          (u = Sr(t)),
          i ? (s.display = i) : dr(t, "display"),
        o && (r ? n.insertBefore(t, r) : n ? n.appendChild(t) : On.removeChild(t))),
          e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
    },
    qr = function (t, e, n, r, i, o) {
      var a,
        s,
        u,
        l = t._gsap,
        c = i || Tr(t, !0),
        d = l.xOrigin || 0,
        h = l.yOrigin || 0,
        f = l.xOffset || 0,
        p = l.yOffset || 0,
        m = c[0],
        _ = c[1],
        v = c[2],
        g = c[3],
        y = c[4],
        b = c[5],
        w = e.split(" "),
        x = parseFloat(w[0]) || 0,
        S = parseFloat(w[1]) || 0;
      n
        ? c !== br && (s = m * g - _ * v) && ((u = x * (-_ / s) + S * (m / s) - (m * b - _ * y) / s), (x = x * (g / s) + S * (-v / s) + (v * b - g * y) / s), (S = u))
        : ((x = (a = lr(t)).x + (~w[0].indexOf("%") ? (x / 100) * a.width : x)), (S = a.y + (~(w[1] || w[0]).indexOf("%") ? (S / 100) * a.height : S))),
        r || (!1 !== r && l.smooth) ? ((y = x - d), (b = S - h), (l.xOffset = f + (y * m + b * v) - y), (l.yOffset = p + (y * _ + b * g) - b)) : (l.xOffset = l.yOffset = 0),
        (l.xOrigin = x),
        (l.yOrigin = S),
        (l.smooth = !!r),
        (l.origin = e),
        (l.originIsAbsolute = !!n),
        (t.style[er] = "0px 0px"),
      o && (hr(o, l, "xOrigin", d, x), hr(o, l, "yOrigin", h, S), hr(o, l, "xOffset", f, l.xOffset), hr(o, l, "yOffset", p, l.yOffset)),
        t.setAttribute("data-svg-origin", x + " " + S);
    },
    Mr = function (t, e) {
      var n = t._gsap || new Je(t);
      if ("x" in n && !e && !n.uncache) return n;
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        d,
        h,
        f,
        p,
        m,
        _,
        v,
        g,
        y,
        b,
        w,
        x,
        S,
        T,
        q,
        M,
        C,
        A,
        O,
        E,
        k,
        L,
        R,
        D,
        P = t.style,
        B = n.scaleX < 0,
        I = "px",
        z = "deg",
        H = rr(t, er) || "0";
      return (
        (r = i = o = u = l = c = d = h = f = 0),
          (a = s = 1),
          (n.svg = !(!t.getCTM || !cr(t))),
          (_ = Tr(t, n.svg)),
        n.svg && ((M = (!n.uncache || "0px 0px" === H) && !e && t.getAttribute("data-svg-origin")), qr(t, M || H, !!M || n.originIsAbsolute, !1 !== n.smooth, _)),
          (p = n.xOrigin || 0),
          (m = n.yOrigin || 0),
        _ !== br &&
        ((b = _[0]),
          (w = _[1]),
          (x = _[2]),
          (S = _[3]),
          (r = T = _[4]),
          (i = q = _[5]),
          6 === _.length
            ? ((a = Math.sqrt(b * b + w * w)),
              (s = Math.sqrt(S * S + x * x)),
              (u = b || w ? Fn(w, b) * Pn : 0),
            (d = x || S ? Fn(x, S) * Pn + u : 0) && (s *= Math.abs(Math.cos(d * Bn))),
            n.svg && ((r -= p - (p * b + m * x)), (i -= m - (p * w + m * S))))
            : ((D = _[6]),
              (L = _[7]),
              (O = _[8]),
              (E = _[9]),
              (k = _[10]),
              (R = _[11]),
              (r = _[12]),
              (i = _[13]),
              (o = _[14]),
              (l = (v = Fn(D, k)) * Pn),
            v &&
            ((M = T * (g = Math.cos(-v)) + O * (y = Math.sin(-v))),
              (C = q * g + E * y),
              (A = D * g + k * y),
              (O = T * -y + O * g),
              (E = q * -y + E * g),
              (k = D * -y + k * g),
              (R = L * -y + R * g),
              (T = M),
              (q = C),
              (D = A)),
              (c = (v = Fn(-x, k)) * Pn),
            v && ((g = Math.cos(-v)), (R = S * (y = Math.sin(-v)) + R * g), (b = M = b * g - O * y), (w = C = w * g - E * y), (x = A = x * g - k * y)),
              (u = (v = Fn(w, b)) * Pn),
            v && ((M = b * (g = Math.cos(v)) + w * (y = Math.sin(v))), (C = T * g + q * y), (w = w * g - b * y), (q = q * g - T * y), (b = M), (T = C)),
            l && Math.abs(l) + Math.abs(u) > 359.9 && ((l = u = 0), (c = 180 - c)),
              (a = Ot(Math.sqrt(b * b + w * w + x * x))),
              (s = Ot(Math.sqrt(q * q + D * D))),
              (v = Fn(T, q)),
              (d = Math.abs(v) > 2e-4 ? v * Pn : 0),
              (f = R ? 1 / (R < 0 ? -R : R) : 0)),
        n.svg && ((M = t.getAttribute("transform")), (n.forceCSS = t.setAttribute("transform", "") || !xr(rr(t, tr))), M && t.setAttribute("transform", M))),
        Math.abs(d) > 90 && Math.abs(d) < 270 && (B ? ((a *= -1), (d += u <= 0 ? 180 : -180), (u += u <= 0 ? 180 : -180)) : ((s *= -1), (d += d <= 0 ? 180 : -180))),
          (n.x = r - ((n.xPercent = r && (n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? (t.offsetWidth * n.xPercent) / 100 : 0) + I),
          (n.y = i - ((n.yPercent = i && (n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? (t.offsetHeight * n.yPercent) / 100 : 0) + I),
          (n.z = o + I),
          (n.scaleX = Ot(a)),
          (n.scaleY = Ot(s)),
          (n.rotation = Ot(u) + z),
          (n.rotationX = Ot(l) + z),
          (n.rotationY = Ot(c) + z),
          (n.skewX = d + z),
          (n.skewY = h + z),
          (n.transformPerspective = f + I),
        (n.zOrigin = parseFloat(H.split(" ")[2]) || 0) && (P[er] = Cr(H)),
          (n.xOffset = n.yOffset = 0),
          (n.force3D = F.force3D),
          (n.renderTransform = n.svg ? Dr : Rn ? Rr : Or),
          (n.uncache = 0),
          n
      );
    },
    Cr = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    Ar = function (t, e, n) {
      var r = de(e);
      return Ot(parseFloat(e) + parseFloat(pr(t, "x", n + "px", r))) + r;
    },
    Or = function (t, e) {
      (e.z = "0px"), (e.rotationY = e.rotationX = "0deg"), (e.force3D = 0), Rr(t, e);
    },
    Er = "0deg",
    kr = "0px",
    Lr = ") ",
    Rr = function (t, e) {
      var n = e || this,
        r = n.xPercent,
        i = n.yPercent,
        o = n.x,
        a = n.y,
        s = n.z,
        u = n.rotation,
        l = n.rotationY,
        c = n.rotationX,
        d = n.skewX,
        h = n.skewY,
        f = n.scaleX,
        p = n.scaleY,
        m = n.transformPerspective,
        _ = n.force3D,
        v = n.target,
        g = n.zOrigin,
        y = "",
        b = ("auto" === _ && t && 1 !== t) || !0 === _;
      if (g && (c !== Er || l !== Er)) {
        var w,
          x = parseFloat(l) * Bn,
          S = Math.sin(x),
          T = Math.cos(x);
        (x = parseFloat(c) * Bn), (w = Math.cos(x)), (o = Ar(v, o, S * w * -g)), (a = Ar(v, a, -Math.sin(x) * -g)), (s = Ar(v, s, T * w * -g + g));
      }
      m !== kr && (y += "perspective(" + m + Lr),
      (r || i) && (y += "translate(" + r + "%, " + i + "%) "),
      (b || o !== kr || a !== kr || s !== kr) && (y += s !== kr || b ? "translate3d(" + o + ", " + a + ", " + s + ") " : "translate(" + o + ", " + a + Lr),
      u !== Er && (y += "rotate(" + u + Lr),
      l !== Er && (y += "rotateY(" + l + Lr),
      c !== Er && (y += "rotateX(" + c + Lr),
      (d === Er && h === Er) || (y += "skew(" + d + ", " + h + Lr),
      (1 === f && 1 === p) || (y += "scale(" + f + ", " + p + Lr),
        (v.style[tr] = y || "translate(0, 0)");
    },
    Dr = function (t, e) {
      var n,
        r,
        i,
        o,
        a,
        s = e || this,
        u = s.xPercent,
        l = s.yPercent,
        c = s.x,
        d = s.y,
        h = s.rotation,
        f = s.skewX,
        p = s.skewY,
        m = s.scaleX,
        _ = s.scaleY,
        v = s.target,
        g = s.xOrigin,
        y = s.yOrigin,
        b = s.xOffset,
        w = s.yOffset,
        x = s.forceCSS,
        S = parseFloat(c),
        T = parseFloat(d);
      (h = parseFloat(h)),
        (f = parseFloat(f)),
      (p = parseFloat(p)) && ((f += p = parseFloat(p)), (h += p)),
        h || f
          ? ((h *= Bn),
            (f *= Bn),
            (n = Math.cos(h) * m),
            (r = Math.sin(h) * m),
            (i = Math.sin(h - f) * -_),
            (o = Math.cos(h - f) * _),
          f && ((p *= Bn), (a = Math.tan(f - p)), (i *= a = Math.sqrt(1 + a * a)), (o *= a), p && ((a = Math.tan(p)), (n *= a = Math.sqrt(1 + a * a)), (r *= a))),
            (n = Ot(n)),
            (r = Ot(r)),
            (i = Ot(i)),
            (o = Ot(o)))
          : ((n = m), (o = _), (r = i = 0)),
      ((S && !~(c + "").indexOf("px")) || (T && !~(d + "").indexOf("px"))) && ((S = pr(v, "x", c, "px")), (T = pr(v, "y", d, "px"))),
      (g || y || b || w) && ((S = Ot(S + g - (g * n + y * i) + b)), (T = Ot(T + y - (g * r + y * o) + w))),
      (u || l) && ((a = v.getBBox()), (S = Ot(S + (u / 100) * a.width)), (T = Ot(T + (l / 100) * a.height))),
        (a = "matrix(" + n + "," + r + "," + i + "," + o + "," + S + "," + T + ")"),
        v.setAttribute("transform", a),
      x && (v.style[tr] = a);
    },
    Pr = function (t, e, n, r, i, o) {
      var a,
        s,
        u = 360,
        l = U(i),
        c = parseFloat(i) * (l && ~i.indexOf("rad") ? Pn : 1),
        d = o ? c * o : c - r,
        h = r + d + "deg";
      return (
        l && ("short" === (a = i.split("_")[1]) && (d %= u) !== d % 180 && (d += d < 0 ? u : -360), "cw" === a && d < 0 ? (d = ((d + 36e9) % u) - ~~(d / u) * u) : "ccw" === a && d > 0 && (d = ((d - 36e9) % u) - ~~(d / u) * u)),
          (t._pt = s = new xn(t._pt, e, n, r, d, jn)),
          (s.e = h),
          (s.u = "deg"),
          t._props.push(n),
          s
      );
    },
    Br = function (t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    },
    Fr = function (t, e, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = Br({}, n._gsap),
        d = n.style;
      for (i in (c.svg
        ? ((o = n.getAttribute("transform")), n.setAttribute("transform", ""), (d[tr] = e), (r = Mr(n, 1)), dr(n, tr), n.setAttribute("transform", o))
        : ((o = getComputedStyle(n)[tr]), (d[tr] = e), (r = Mr(n, 1)), (d[tr] = o)),
        Dn))
        (o = c[i]) !== (a = r[i]) &&
        "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
        ((s = de(o) !== (l = de(a)) ? pr(n, i, o, l) : parseFloat(o)), (u = parseFloat(a)), (t._pt = new xn(t._pt, r, i, s, u - s, Wn)), (t._pt.u = l || 0), t._props.push(i));
      Br(r, c);
    };
  At("padding,margin,Width,Radius", function (t, e) {
    var n = "Top",
      r = "Right",
      i = "Bottom",
      o = "Left",
      a = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(function (n) {
        return e < 2 ? t + n : "border" + n + t;
      });
    yr[e > 1 ? "border" + t : t] = function (t, e, n, r, i) {
      var o, s;
      if (arguments.length < 4)
        return (
          (o = a.map(function (e) {
            return mr(t, e, n);
          })),
            5 === (s = o.join(" ")).split(o[0]).length ? o[0] : s
        );
      (o = (r + "").split(" ")),
        (s = {}),
        a.forEach(function (t, e) {
          return (s[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
        }),
        t.init(e, s, i);
    };
  });
  var Ir,
    zr,
    Hr,
    Nr = {
      name: "css",
      register: ar,
      targetTest: function (t) {
        return t.style && t.nodeType;
      },
      init: function (t, e, n, r, i) {
        var o,
          a,
          s,
          u,
          l,
          c,
          d,
          h,
          f,
          p,
          m,
          _,
          v,
          g,
          y,
          b,
          w,
          x,
          S,
          T = this._props,
          q = t.style,
          M = n.vars.startAt;
        for (d in (En || ar(), e))
          if ("autoRound" !== d && ((a = e[d]), !bt[d] || !nn(d, e, n, r, t, i)))
            if (((l = typeof a), (c = yr[d]), "function" === l && (l = typeof (a = a.call(n, r, t, i))), "string" === l && ~a.indexOf("random(") && (a = xe(a)), c)) c(this, t, d, a, n) && (y = 1);
            else if ("--" === d.substr(0, 2))
              (o = (getComputedStyle(t).getPropertyValue(d) + "").trim()),
                (a += ""),
                (De.lastIndex = 0),
              De.test(o) || ((h = de(o)), (f = de(a))),
                f ? h !== f && (o = pr(t, d, o, f) + f) : h && (a += h),
                this.add(q, "setProperty", o, a, r, i, 0, 0, d),
                T.push(d);
            else if ("undefined" !== l) {
              if (
                (M && d in M
                  ? ((o = "function" == typeof M[d] ? M[d].call(n, r, t, i) : M[d]), d in F.units && !de(o) && (o += F.units[d]), U(o) && ~o.indexOf("random(") && (o = xe(o)), "=" === (o + "").charAt(1) && (o = mr(t, d)))
                  : (o = mr(t, d)),
                  (u = parseFloat(o)),
                (p = "string" === l && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) && (a = a.substr(2)),
                  (s = parseFloat(a)),
                d in Nn &&
                ("autoAlpha" === d && (1 === u && "hidden" === mr(t, "visibility") && s && (u = 0), hr(this, q, "visibility", u ? "inherit" : "hidden", s ? "inherit" : "hidden", !s)),
                "scale" !== d && "transform" !== d && ~(d = Nn[d]).indexOf(",") && (d = d.split(",")[0])),
                  (m = d in Dn))
              )
                if (
                  (_ ||
                  (((v = t._gsap).renderTransform && !e.parseTransform) || Mr(t, e.parseTransform),
                    (g = !1 !== e.smoothOrigin && v.smooth),
                    ((_ = this._pt = new xn(this._pt, q, tr, 0, 1, v.renderTransform, v, 0, -1)).dep = 1)),
                  "scale" === d)
                )
                  (this._pt = new xn(this._pt, v, "scaleY", v.scaleY, (p ? p * s : s - v.scaleY) || 0)), T.push("scaleY", d), (d += "X");
                else {
                  if ("transformOrigin" === d) {
                    (w = void 0),
                      (x = void 0),
                      (S = void 0),
                      (w = (b = a).split(" ")),
                      (x = w[0]),
                      (S = w[1] || "50%"),
                    ("top" !== x && "bottom" !== x && "left" !== S && "right" !== S) || ((b = x), (x = S), (S = b)),
                      (w[0] = vr[x] || x),
                      (w[1] = vr[S] || S),
                      (a = w.join(" ")),
                      v.svg ? qr(t, a, 0, g, 0, this) : ((f = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && hr(this, v, "zOrigin", v.zOrigin, f), hr(this, q, d, Cr(o), Cr(a)));
                    continue;
                  }
                  if ("svgOrigin" === d) {
                    qr(t, a, 1, g, 0, this);
                    continue;
                  }
                  if (d in wr) {
                    Pr(this, v, d, u, a, p);
                    continue;
                  }
                  if ("smoothOrigin" === d) {
                    hr(this, v, "smooth", v.smooth, a);
                    continue;
                  }
                  if ("force3D" === d) {
                    v[d] = a;
                    continue;
                  }
                  if ("transform" === d) {
                    Fr(this, a, t);
                    continue;
                  }
                }
              else d in q || (d = or(d) || d);
              if (m || ((s || 0 === s) && (u || 0 === u) && !Hn.test(a) && d in q))
                s || (s = 0),
                (h = (o + "").substr((u + "").length)) !== (f = de(a) || (d in F.units ? F.units[d] : h)) && (u = pr(t, d, o, f)),
                  (this._pt = new xn(this._pt, m ? v : q, d, u, p ? p * s : s - u, m || ("px" !== f && "zIndex" !== d) || !1 === e.autoRound ? Wn : Yn)),
                  (this._pt.u = f || 0),
                h !== f && "%" !== f && ((this._pt.b = o), (this._pt.r = Vn));
              else if (d in q) _r.call(this, t, d, o, a);
              else {
                if (!(d in t)) {
                  ft(d, a);
                  continue;
                }
                this.add(t, d, o || t[d], a, r, i);
              }
              T.push(d);
            }
        y && wn(this);
      },
      get: mr,
      aliases: Nn,
      getSetter: function (t, e, n) {
        var r = Nn[e];
        return (
          r && r.indexOf(",") < 0 && (e = r),
            e in Dn && e !== er && (t._gsap.x || mr(t, "x")) ? (n && Ln === n ? ("scale" === e ? Zn : Jn) : (Ln = n || {}) && ("scale" === e ? $n : Kn)) : t.style && !J(t.style[e]) ? Gn : ~e.indexOf("-") ? Qn : fn(t, e)
        );
      },
      core: { _removeProperty: dr, _getMatrix: Tr },
    };
  (Mn.utils.checkPrefix = or),
    (Hr = At((Ir = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (zr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
      Dn[t] = 1;
    })),
    At(zr, function (t) {
      (F.units[t] = "deg"), (wr[t] = 1);
    }),
    (Nn[Hr[13]] = Ir + "," + zr),
    At("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
      var e = t.split(":");
      Nn[e[1]] = Hr[e[0]];
    }),
    At("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
      F.units[t] = "px";
    }),
    Mn.registerPlugin(Nr);
  var Wr = Mn.registerPlugin(Nr) || Mn;
  Wr.core.Tween;
  "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
  function jr(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  /*!
     * CustomEase 3.7.1
     * https://greensock.com
     *
     * @license Copyright 2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
  var Vr,
    Yr = jr(
      ((function (t, e) {
        !(function (t) {
          function e(t) {
            return Math.round(1e5 * t) / 1e5 || 0;
          }
          var n = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            r = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
            i = Math.PI / 180,
            o = Math.sin,
            a = Math.cos,
            s = Math.abs,
            u = Math.sqrt;
          function l(t, e, n, r, l, c, d, h, f) {
            if (t !== h || e !== f) {
              (n = s(n)), (r = s(r));
              var p = (l % 360) * i,
                m = a(p),
                _ = o(p),
                v = Math.PI,
                g = 2 * v,
                y = (t - h) / 2,
                b = (e - f) / 2,
                w = m * y + _ * b,
                x = -_ * y + m * b,
                S = w * w,
                T = x * x,
                q = S / (n * n) + T / (r * r);
              1 < q && ((n = u(q) * n), (r = u(q) * r));
              var M = n * n,
                C = r * r,
                A = (M * C - M * T - C * S) / (M * T + C * S);
              A < 0 && (A = 0);
              var O = (c === d ? -1 : 1) * u(A),
                E = ((n * x) / r) * O,
                k = ((-r * w) / n) * O,
                L = m * E - _ * k + (t + h) / 2,
                R = _ * E + m * k + (e + f) / 2,
                D = (w - E) / n,
                P = (x - k) / r,
                B = (-w - E) / n,
                F = (-x - k) / r,
                I = D * D + P * P,
                z = (P < 0 ? -1 : 1) * Math.acos(D / u(I)),
                H = (D * F - P * B < 0 ? -1 : 1) * Math.acos((D * B + P * F) / u(I * (B * B + F * F)));
              isNaN(H) && (H = v), !d && 0 < H ? (H -= g) : d && H < 0 && (H += g), (z %= g), (H %= g);
              var N,
                W = Math.ceil(s(H) / (g / 4)),
                j = [],
                V = H / W,
                Y = ((4 / 3) * o(V / 2)) / (1 + a(V / 2)),
                X = m * n,
                U = _ * n,
                G = _ * -r,
                Q = m * r;
              for (N = 0; N < W; N++) (w = a((l = z + N * V))), (x = o(l)), (D = a((l += V))), (P = o(l)), j.push(w - Y * x, x + Y * w, D + Y * P, P - Y * D, D, P);
              for (N = 0; N < j.length; N += 2) (w = j[N]), (x = j[N + 1]), (j[N] = w * X + x * G + L), (j[N + 1] = w * U + x * Q + R);
              return (j[N - 2] = h), (j[N - 1] = f), j;
            }
          }
          function c(t) {
            function e(t, e, n, r) {
              (m = (n - t) / 3), (_ = (r - e) / 3), h.push(t + m, e + _, n - m, r - _, n, r);
            }
            var i,
              o,
              a,
              u,
              c,
              d,
              h,
              f,
              p,
              m,
              _,
              v,
              g,
              y,
              b,
              w =
                (t + "")
                  .replace(r, function (t) {
                    var e = +t;
                    return e < 1e-4 && -1e-4 < e ? 0 : e;
                  })
                  .match(n) || [],
              x = [],
              S = 0,
              T = 0,
              q = w.length,
              M = 0,
              C = "ERROR: malformed path: " + t;
            if (!t || !isNaN(w[0]) || isNaN(w[1])) return console.log(C), x;
            for (i = 0; i < q; i++)
              if (((g = c), isNaN(w[i]) ? (d = (c = w[i].toUpperCase()) !== w[i]) : i--, (a = +w[i + 1]), (u = +w[i + 2]), d && ((a += S), (u += T)), i || ((f = a), (p = u)), "M" === c))
                h && (h.length < 8 ? --x.length : (M += h.length)), (S = f = a), (T = p = u), (h = [a, u]), x.push(h), (i += 2), (c = "L");
              else if ("C" === c) d || (S = T = 0), (h = h || [0, 0]).push(a, u, S + 1 * w[i + 3], T + 1 * w[i + 4], (S += 1 * w[i + 5]), (T += 1 * w[i + 6])), (i += 6);
              else if ("S" === c)
                (m = S), (_ = T), ("C" !== g && "S" !== g) || ((m += S - h[h.length - 4]), (_ += T - h[h.length - 3])), d || (S = T = 0), h.push(m, _, a, u, (S += 1 * w[i + 3]), (T += 1 * w[i + 4])), (i += 4);
              else if ("Q" === c)
                (m = S + (2 / 3) * (a - S)), (_ = T + (2 / 3) * (u - T)), d || (S = T = 0), (S += 1 * w[i + 3]), (T += 1 * w[i + 4]), h.push(m, _, S + (2 / 3) * (a - S), T + (2 / 3) * (u - T), S, T), (i += 4);
              else if ("T" === c) (m = S - h[h.length - 4]), (_ = T - h[h.length - 3]), h.push(S + m, T + _, a + (2 / 3) * (S + 1.5 * m - a), u + (2 / 3) * (T + 1.5 * _ - u), (S = a), (T = u)), (i += 2);
              else if ("H" === c) e(S, T, (S = a), T), (i += 1);
              else if ("V" === c) e(S, T, S, (T = a + (d ? T - S : 0))), (i += 1);
              else if ("L" === c || "Z" === c) "Z" === c && ((a = f), (u = p), (h.closed = !0)), ("L" === c || 0.5 < s(S - a) || 0.5 < s(T - u)) && (e(S, T, a, u), "L" === c && (i += 2)), (S = a), (T = u);
              else if ("A" === c) {
                if (
                  ((y = w[i + 4]),
                    (b = w[i + 5]),
                    (m = w[i + 6]),
                    (_ = w[i + 7]),
                    (o = 7),
                  1 < y.length && (y.length < 3 ? ((_ = m), (m = b), o--) : ((_ = b), (m = y.substr(2)), (o -= 2)), (b = y.charAt(1)), (y = y.charAt(0))),
                    (v = l(S, T, +w[i + 1], +w[i + 2], +w[i + 3], +y, +b, (d ? S : 0) + 1 * m, (d ? T : 0) + 1 * _)),
                    (i += o),
                    v)
                )
                  for (o = 0; o < v.length; o++) h.push(v[o]);
                (S = h[h.length - 2]), (T = h[h.length - 1]);
              } else console.log(C);
            return (i = h.length) < 6 ? (x.pop(), (i = 0)) : h[0] === h[i - 2] && h[1] === h[i - 1] && (h.closed = !0), (x.totalPoints = M + i), x;
          }
          function d() {
            return m || ("undefined" != typeof window && (m = window.gsap) && m.registerPlugin && m);
          }
          function h() {
            (m = d()) ? (m.registerEase("_CE", b.create), (_ = 1)) : console.warn("Please gsap.registerPlugin(CustomEase)");
          }
          function f(t) {
            return ~~(1e3 * t + (t < 0 ? -0.5 : 0.5)) / 1e3;
          }
          function p(t, e, n, r, i, o, a, s, u, l, c) {
            var d,
              h = (t + n) / 2,
              f = (e + r) / 2,
              m = (n + i) / 2,
              _ = (r + o) / 2,
              v = (i + a) / 2,
              g = (o + s) / 2,
              y = (h + m) / 2,
              b = (f + _) / 2,
              w = (m + v) / 2,
              x = (_ + g) / 2,
              S = (y + w) / 2,
              T = (b + x) / 2,
              q = a - t,
              M = s - e,
              C = Math.abs((n - a) * M - (r - s) * q),
              A = Math.abs((i - a) * M - (o - s) * q);
            return (
              l ||
              ((l = [
                { x: t, y: e },
                { x: a, y: s },
              ]),
                (c = 1)),
                l.splice(c || l.length - 1, 0, { x: S, y: T }),
              u * (q * q + M * M) < (C + A) * (C + A) && ((d = l.length), p(t, e, h, f, y, b, S, T, u, l, c), p(S, T, w, x, v, g, a, s, u, l, c + 1 + (l.length - d))),
                l
            );
          }
          var m,
            _,
            v,
            g = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
            y = /[cLlsSaAhHvVtTqQ]/g,
            b =
              (((v = w.prototype).setData = function (t, e) {
                e = e || {};
                var n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  d,
                  h = (t = t || "0,0,1,1").match(g),
                  f = 1,
                  _ = [],
                  v = [],
                  b = e.precision || 1,
                  w = b <= 1;
                if (((this.data = t), (y.test(t) || (~t.indexOf("M") && t.indexOf("C") < 0)) && (h = c(t)[0]), 4 === (n = h.length))) h.unshift(0, 0), h.push(1, 1), (n = 8);
                else if ((n - 2) % 6) throw "Invalid CustomEase";
                for (
                  (0 == +h[0] && 1 == +h[n - 2]) ||
                  (function (t, e, n) {
                    n || 0 === n || (n = Math.max(+t[t.length - 1], +t[1]));
                    var r,
                      i = -1 * t[0],
                      o = -n,
                      a = t.length,
                      s = 1 / (+t[a - 2] + i),
                      u =
                        -e ||
                        (Math.abs(t[a - 1] - t[1]) < 0.01 * (t[a - 2] - t[0])
                          ? (function (t) {
                          var e,
                            n = t.length,
                            r = 1e20;
                          for (e = 1; e < n; e += 6) +t[e] < r && (r = +t[e]);
                          return r;
                        })(t) + o
                          : +t[a - 1] + o);
                    for (u = u ? 1 / u : -s, r = 0; r < a; r += 2) (t[r] = (+t[r] + i) * s), (t[r + 1] = (+t[r + 1] + o) * u);
                  })(h, e.height, e.originY),
                    this.segment = h,
                    o = 2;
                  o < n;
                  o += 6
                )
                  (r = { x: +h[o - 2], y: +h[o - 1] }), (i = { x: +h[o + 4], y: +h[o + 5] }), _.push(r, i), p(r.x, r.y, +h[o], +h[o + 1], +h[o + 2], +h[o + 3], i.x, i.y, 1 / (2e5 * b), _, _.length - 1);
                for (n = _.length, o = 0; o < n; o++)
                  (u = _[o]),
                    (l = _[o - 1] || u),
                    (u.x > l.x || (l.y !== u.y && l.x === u.x) || u === l) && u.x <= 1
                      ? ((l.cx = u.x - l.x),
                        (l.cy = u.y - l.y),
                        (l.n = u),
                        (l.nx = u.x),
                      w && 1 < o && 2 < Math.abs(l.cy / l.cx - _[o - 2].cy / _[o - 2].cx) && (w = 0),
                      l.cx < f && (l.cx ? (f = l.cx) : ((l.cx = 0.001), o === n - 1 && ((l.x -= 0.001), (f = Math.min(f, 0.001)), (w = 0)))))
                      : (_.splice(o--, 1), n--);
                if (((a = 1 / (n = (1 / f + 1) | 0)), (u = _[(s = 0)]), w)) {
                  for (o = 0; o < n; o++) (d = o * a), u.nx < d && (u = _[++s]), (r = u.y + ((d - u.x) / u.cx) * u.cy), (v[o] = { x: d, cx: a, y: r, cy: 0, nx: 9 }), o && (v[o - 1].cy = r - v[o - 1].y);
                  v[n - 1].cy = _[_.length - 1].y - r;
                } else {
                  for (o = 0; o < n; o++) u.nx < o * a && (u = _[++s]), (v[o] = u);
                  s < _.length - 1 && (v[o - 1] = _[_.length - 2]);
                }
                return (
                  (this.ease = function (t) {
                    var e = v[(t * n) | 0] || v[n - 1];
                    return e.nx < t && (e = e.n), e.y + ((t - e.x) / e.cx) * e.cy;
                  }),
                  (this.ease.custom = this).id && m && m.registerEase(this.id, this.ease),
                    this
                );
              }),
                (v.getSVGData = function (t) {
                  return w.getSVGData(this, t);
                }),
                (w.create = function (t, e, n) {
                  return new w(t, e, n).ease;
                }),
                (w.register = function (t) {
                  (m = t), h();
                }),
                (w.get = function (t) {
                  return m.parseEase(t);
                }),
                (w.getSVGData = function (t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c,
                    d,
                    h,
                    p = (n = n || {}).width || 100,
                    _ = n.height || 100,
                    v = n.x || 0,
                    g = (n.y || 0) + _,
                    y = m.utils.toArray(n.path)[0];
                  if ((n.invert && ((_ = -_), (g = 0)), "string" == typeof t && (t = m.parseEase(t)), t.custom && (t = t.custom), t instanceof w))
                    r = (function (t) {
                      !(function (t) {
                        return "number" == typeof t;
                      })(t[0]) || (t = [t]);
                      var n,
                        r,
                        i,
                        o,
                        a = "",
                        s = t.length;
                      for (r = 0; r < s; r++) {
                        for (a += "M" + e((o = t[r])[0]) + "," + e(o[1]) + " C", n = o.length, i = 2; i < n; i++)
                          a += e(o[i++]) + "," + e(o[i++]) + " " + e(o[i++]) + "," + e(o[i++]) + " " + e(o[i++]) + "," + e(o[i]) + " ";
                        o.closed && (a += "z");
                      }
                      return a;
                    })(
                      (function (t, e, n, r, i, o, a) {
                        for (var s, u, l, c, d, h = t.length; -1 < --h; ) for (u = (s = t[h]).length, l = 0; l < u; l += 2) (c = s[l]), (d = s[l + 1]), (s[l] = c * e + d * r + o), (s[l + 1] = c * n + d * i + a);
                        return (t._dirty = 1), t;
                      })([t.segment], p, 0, 0, -_, v, g)
                    );
                  else {
                    for (r = [v, g], a = 1 / (l = Math.max(5, 200 * (n.precision || 1))), c = 5 / (l += 2), d = f(v + a * p), i = ((h = f(g + t(a) * -_)) - g) / (d - v), o = 2; o < l; o++)
                      (s = f(v + o * a * p)), (u = f(g + t(o * a) * -_)), (Math.abs((u - h) / (s - d) - i) > c || o === l - 1) && (r.push(d, h), (i = (u - h) / (s - d))), (d = s), (h = u);
                    r = "M" + r.join(",");
                  }
                  return y && y.setAttribute("d", r), r;
                }),
                w);
          function w(t, e, n) {
            _ || h(), (this.id = t), this.setData(e, n);
          }
          d() && m.registerPlugin(b), (b.version = "3.7.1"), (t.CustomEase = b), (t.default = b), "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", { value: !0 }) : delete t.default;
        })(e);
      })((Vr = { exports: {} }), Vr.exports),
        Vr.exports)
    ),
    Xr = window,
    Ur =
      Xr.requestAnimationFrame ||
      Xr.webkitRequestAnimationFrame ||
      Xr.mozRequestAnimationFrame ||
      Xr.msRequestAnimationFrame ||
      function (t) {
        return setTimeout(t, 16);
      },
    Gr = window,
    Qr =
      Gr.cancelAnimationFrame ||
      Gr.mozCancelAnimationFrame ||
      function (t) {
        clearTimeout(t);
      };
  function Jr() {
    for (var t, e, n, r = arguments[0] || {}, i = 1, o = arguments.length; i < o; i++) if (null !== (t = arguments[i])) for (e in t) r !== (n = t[e]) && void 0 !== n && (r[e] = n);
    return r;
  }
  function Zr(t) {
    return ["true", "false"].indexOf(t) >= 0 ? JSON.parse(t) : t;
  }
  function $r(t, e, n, r) {
    if (r)
      try {
        t.setItem(e, n);
      } catch (t) {}
    return n;
  }
  function Kr() {
    var t = document,
      e = t.body;
    return e || ((e = t.createElement("body")).fake = !0), e;
  }
  var ti = document.documentElement;
  function ei(t) {
    var e = "";
    return t.fake && ((e = ti.style.overflow), (t.style.background = ""), (t.style.overflow = ti.style.overflow = "hidden"), ti.appendChild(t)), e;
  }
  function ni(t, e) {
    t.fake && (t.remove(), (ti.style.overflow = e), ti.offsetHeight);
  }
  function ri(t, e, n, r) {
    "insertRule" in t ? t.insertRule(e + "{" + n + "}", r) : t.addRule(e, n, r);
  }
  function ii(t) {
    return ("insertRule" in t ? t.cssRules : t.rules).length;
  }
  function oi(t, e, n) {
    for (var r = 0, i = t.length; r < i; r++) e.call(n, t[r], r);
  }
  var ai = "classList" in document.createElement("_"),
    si = ai
      ? function (t, e) {
        return t.classList.contains(e);
      }
      : function (t, e) {
        return t.className.indexOf(e) >= 0;
      },
    ui = ai
      ? function (t, e) {
        si(t, e) || t.classList.add(e);
      }
      : function (t, e) {
        si(t, e) || (t.className += " " + e);
      },
    li = ai
      ? function (t, e) {
        si(t, e) && t.classList.remove(e);
      }
      : function (t, e) {
        si(t, e) && (t.className = t.className.replace(e, ""));
      };
  function ci(t, e) {
    return t.hasAttribute(e);
  }
  function di(t, e) {
    return t.getAttribute(e);
  }
  function hi(t) {
    return void 0 !== t.item;
  }
  function fi(t, e) {
    if (((t = hi(t) || t instanceof Array ? t : [t]), "[object Object]" === Object.prototype.toString.call(e))) for (var n = t.length; n--; ) for (var r in e) t[n].setAttribute(r, e[r]);
  }
  function pi(t, e) {
    t = hi(t) || t instanceof Array ? t : [t];
    for (var n = (e = e instanceof Array ? e : [e]).length, r = t.length; r--; ) for (var i = n; i--; ) t[r].removeAttribute(e[i]);
  }
  function mi(t) {
    for (var e = [], n = 0, r = t.length; n < r; n++) e.push(t[n]);
    return e;
  }
  function _i(t, e) {
    "none" !== t.style.display && (t.style.display = "none");
  }
  function vi(t, e) {
    "none" === t.style.display && (t.style.display = "");
  }
  function gi(t) {
    return "none" !== window.getComputedStyle(t).display;
  }
  function yi(t) {
    if ("string" == typeof t) {
      var e = [t],
        n = t.charAt(0).toUpperCase() + t.substr(1);
      ["Webkit", "Moz", "ms", "O"].forEach(function (r) {
        ("ms" === r && "transform" !== t) || e.push(r + n);
      }),
        (t = e);
    }
    var r = document.createElement("fakeelement");
    t.length;
    for (var i = 0; i < t.length; i++) {
      var o = t[i];
      if (void 0 !== r.style[o]) return o;
    }
    return !1;
  }
  function bi(t, e) {
    var n = !1;
    return /^Webkit/.test(t) ? (n = "webkit" + e + "End") : /^O/.test(t) ? (n = "o" + e + "End") : t && (n = e.toLowerCase() + "end"), n;
  }
  var wi = !1;
  try {
    var xi = Object.defineProperty({}, "passive", {
      get: function () {
        wi = !0;
      },
    });
    window.addEventListener("test", null, xi);
  } catch (t) {}
  var Si = !!wi && { passive: !0 };
  function Ti(t, e, n) {
    for (var r in e) {
      var i = ["touchstart", "touchmove"].indexOf(r) >= 0 && !n && Si;
      t.addEventListener(r, e[r], i);
    }
  }
  function qi(t, e) {
    for (var n in e) {
      var r = ["touchstart", "touchmove"].indexOf(n) >= 0 && Si;
      t.removeEventListener(n, e[n], r);
    }
  }
  function Mi() {
    return {
      topics: {},
      on: function (t, e) {
        (this.topics[t] = this.topics[t] || []), this.topics[t].push(e);
      },
      off: function (t, e) {
        if (this.topics[t])
          for (var n = 0; n < this.topics[t].length; n++)
            if (this.topics[t][n] === e) {
              this.topics[t].splice(n, 1);
              break;
            }
      },
      emit: function (t, e) {
        (e.type = t),
        this.topics[t] &&
        this.topics[t].forEach(function (n) {
          n(e, t);
        });
      },
    };
  }
  Object.keys ||
  (Object.keys = function (t) {
    var e = [];
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
    return e;
  }),
  "remove" in Element.prototype ||
  (Element.prototype.remove = function () {
    this.parentNode && this.parentNode.removeChild(this);
  });
  var Ci,
    Ai = function (t) {
      t = Jr(
        {
          container: ".slider",
          mode: "carousel",
          axis: "horizontal",
          items: 1,
          gutter: 0,
          edgePadding: 0,
          fixedWidth: !1,
          autoWidth: !1,
          viewportMax: !1,
          slideBy: 1,
          center: !1,
          controls: !0,
          controlsPosition: "top",
          controlsText: ["prev", "next"],
          controlsContainer: !1,
          prevButton: !1,
          nextButton: !1,
          nav: !0,
          navPosition: "top",
          navContainer: !1,
          navAsThumbnails: !1,
          arrowKeys: !1,
          speed: 300,
          autoplay: !1,
          autoplayPosition: "top",
          autoplayTimeout: 5e3,
          autoplayDirection: "forward",
          autoplayText: ["start", "stop"],
          autoplayHoverPause: !1,
          autoplayButton: !1,
          autoplayButtonOutput: !0,
          autoplayResetOnVisibility: !0,
          animateIn: "tns-fadeIn",
          animateOut: "tns-fadeOut",
          animateNormal: "tns-normal",
          animateDelay: !1,
          loop: !0,
          rewind: !1,
          autoHeight: !1,
          responsive: !1,
          lazyload: !1,
          lazyloadSelector: ".tns-lazy-img",
          touch: !0,
          mouseDrag: !1,
          swipeAngle: 15,
          nested: !1,
          preventActionWhenRunning: !1,
          preventScrollOnTouch: !1,
          freezable: !0,
          onInit: !1,
          useLocalStorage: !0,
          nonce: !1,
        },
        t || {}
      );
      var e = document,
        n = window,
        r = { ENTER: 13, SPACE: 32, LEFT: 37, RIGHT: 39 },
        i = {},
        o = t.useLocalStorage;
      if (o) {
        var a = navigator.userAgent,
          s = new Date();
        try {
          (i = n.localStorage) ? (i.setItem(s, s), (o = i.getItem(s) == s), i.removeItem(s)) : (o = !1), o || (i = {});
        } catch (t) {
          o = !1;
        }
        o &&
        (i.tnsApp &&
        i.tnsApp !== a &&
        ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function (t) {
          i.removeItem(t);
        }),
          (localStorage.tnsApp = a));
      }
      var u = i.tC
          ? Zr(i.tC)
          : $r(
            i,
            "tC",
            (function () {
              var t = document,
                e = Kr(),
                n = ei(e),
                r = t.createElement("div"),
                i = !1;
              e.appendChild(r);
              try {
                for (var o, a = "(10px * 10)", s = ["calc" + a, "-moz-calc" + a, "-webkit-calc" + a], u = 0; u < 3; u++)
                  if (((o = s[u]), (r.style.width = o), 100 === r.offsetWidth)) {
                    i = o.replace(a, "");
                    break;
                  }
              } catch (t) {}
              return e.fake ? ni(e, n) : r.remove(), i;
            })(),
            o
          ),
        l = i.tPL
          ? Zr(i.tPL)
          : $r(
            i,
            "tPL",
            (function () {
              var t,
                e = document,
                n = Kr(),
                r = ei(n),
                i = e.createElement("div"),
                o = e.createElement("div"),
                a = "";
              (i.className = "tns-t-subp2"), (o.className = "tns-t-ct");
              for (var s = 0; s < 70; s++) a += "<div></div>";
              return (o.innerHTML = a), i.appendChild(o), n.appendChild(i), (t = Math.abs(i.getBoundingClientRect().left - o.children[67].getBoundingClientRect().left) < 2), n.fake ? ni(n, r) : i.remove(), t;
            })(),
            o
          ),
        c = i.tMQ
          ? Zr(i.tMQ)
          : $r(
            i,
            "tMQ",
            (function () {
              if (window.matchMedia || window.msMatchMedia) return !0;
              var t,
                e = document,
                n = Kr(),
                r = ei(n),
                i = e.createElement("div"),
                o = e.createElement("style"),
                a = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}";
              return (
                (o.type = "text/css"),
                  (i.className = "tns-mq-test"),
                  n.appendChild(o),
                  n.appendChild(i),
                  o.styleSheet ? (o.styleSheet.cssText = a) : o.appendChild(e.createTextNode(a)),
                  (t = window.getComputedStyle ? window.getComputedStyle(i).position : i.currentStyle.position),
                  n.fake ? ni(n, r) : i.remove(),
                "absolute" === t
              );
            })(),
            o
          ),
        d = i.tTf ? Zr(i.tTf) : $r(i, "tTf", yi("transform"), o),
        h = i.t3D
          ? Zr(i.t3D)
          : $r(
            i,
            "t3D",
            (function (t) {
              if (!t) return !1;
              if (!window.getComputedStyle) return !1;
              var e,
                n = document,
                r = Kr(),
                i = ei(r),
                o = n.createElement("p"),
                a = t.length > 9 ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
              return (
                (a += "transform"),
                  r.insertBefore(o, null),
                  (o.style[t] = "translate3d(1px,1px,1px)"),
                  (e = window.getComputedStyle(o).getPropertyValue(a)),
                  r.fake ? ni(r, i) : o.remove(),
                void 0 !== e && e.length > 0 && "none" !== e
              );
            })(d),
            o
          ),
        f = i.tTDu ? Zr(i.tTDu) : $r(i, "tTDu", yi("transitionDuration"), o),
        p = i.tTDe ? Zr(i.tTDe) : $r(i, "tTDe", yi("transitionDelay"), o),
        m = i.tADu ? Zr(i.tADu) : $r(i, "tADu", yi("animationDuration"), o),
        _ = i.tADe ? Zr(i.tADe) : $r(i, "tADe", yi("animationDelay"), o),
        v = i.tTE ? Zr(i.tTE) : $r(i, "tTE", bi(f, "Transition"), o),
        g = i.tAE ? Zr(i.tAE) : $r(i, "tAE", bi(m, "Animation"), o),
        y = n.console && "function" == typeof n.console.warn,
        b = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"],
        w = {};
      if (
        (b.forEach(function (n) {
          if ("string" == typeof t[n]) {
            var r = t[n],
              i = e.querySelector(r);
            if (((w[n] = r), !i || !i.nodeName)) return void (y && console.warn("Can't find", t[n]));
            t[n] = i;
          }
        }),
          !(t.container.children.length < 1))
      ) {
        var x = t.responsive,
          S = t.nested,
          T = "carousel" === t.mode;
        if (x) {
          0 in x && ((t = Jr(t, x[0])), delete x[0]);
          var q = {};
          for (var M in x) {
            var C = x[M];
            (C = "number" == typeof C ? { items: C } : C), (q[M] = C);
          }
          (x = q), (q = null);
        }
        if (
          (T ||
          (function t(e) {
            for (var n in e) T || ("slideBy" === n && (e[n] = "page"), "edgePadding" === n && (e[n] = !1), "autoHeight" === n && (e[n] = !1)), "responsive" === n && t(e[n]);
          })(t),
            !T)
        ) {
          (t.axis = "horizontal"), (t.slideBy = "page"), (t.edgePadding = !1);
          var A = t.animateIn,
            O = t.animateOut,
            E = t.animateDelay,
            k = t.animateNormal;
        }
        var L,
          R,
          D = "horizontal" === t.axis,
          P = e.createElement("div"),
          B = e.createElement("div"),
          F = t.container,
          I = F.parentNode,
          z = F.outerHTML,
          H = F.children,
          N = H.length,
          W = on(),
          j = !1;
        x && Mn(), T && (F.className += " tns-vpfix");
        var V,
          Y,
          X,
          U,
          G,
          Q,
          J = t.autoWidth,
          Z = cn("fixedWidth"),
          $ = cn("edgePadding"),
          K = cn("gutter"),
          tt = un(),
          et = cn("center"),
          nt = J ? 1 : Math.floor(cn("items")),
          rt = cn("slideBy"),
          it = t.viewportMax || t.fixedWidthViewportWidth,
          ot = cn("arrowKeys"),
          at = cn("speed"),
          st = t.rewind,
          ut = !st && t.loop,
          lt = cn("autoHeight"),
          ct = cn("controls"),
          dt = cn("controlsText"),
          ht = cn("nav"),
          ft = cn("touch"),
          pt = cn("mouseDrag"),
          mt = cn("autoplay"),
          _t = cn("autoplayTimeout"),
          vt = cn("autoplayText"),
          gt = cn("autoplayHoverPause"),
          yt = cn("autoplayResetOnVisibility"),
          bt =
            ((U = null),
              (G = cn("nonce")),
              (Q = document.createElement("style")),
            U && Q.setAttribute("media", U),
            G && Q.setAttribute("nonce", G),
              document.querySelector("head").appendChild(Q),
              Q.sheet ? Q.sheet : Q.styleSheet),
          wt = t.lazyload,
          xt = t.lazyloadSelector,
          St = [],
          Tt = ut
            ? ((Y = (function () {
              if (J || (Z && !it)) return N - 1;
              var e = Z ? "fixedWidth" : "items",
                n = [];
              if (((Z || t[e] < N) && n.push(t[e]), x))
                for (var r in x) {
                  var i = x[r][e];
                  i && (Z || i < N) && n.push(i);
                }
              return n.length || n.push(0), Math.ceil(Z ? it / Math.min.apply(null, n) : Math.max.apply(null, n));
            })()),
              (X = T ? Math.ceil((5 * Y - N) / 2) : 4 * Y - N),
              (X = Math.max(Y, X)),
              ln("edgePadding") ? X + 1 : X)
            : 0,
          qt = T ? N + 2 * Tt : N + Tt,
          Mt = !((!Z && !J) || ut),
          Ct = Z ? $n() : null,
          At = !T || !ut,
          Ot = D ? "left" : "top",
          Et = "",
          kt = "",
          Lt = Z
            ? function () {
              return et && !ut ? N - 1 : Math.ceil(-Ct / (Z + K));
            }
            : J
              ? function () {
                for (var t = 0; t < qt; t++) if (V[t] >= -Ct) return t;
              }
              : function () {
                return et && T && !ut ? N - 1 : ut || T ? Math.max(0, qt - Math.ceil(nt)) : qt - 1;
              },
          Rt = en(cn("startIndex")),
          Dt = Rt;
        tn();
        var Pt,
          Bt,
          Ft,
          It = 0,
          zt = J ? null : Lt(),
          Ht = t.preventActionWhenRunning,
          Nt = t.swipeAngle,
          Wt = !Nt || "?",
          jt = !1,
          Vt = t.onInit,
          Yt = new Mi(),
          Xt = " tns-slider tns-" + t.mode,
          Ut = F.id || ((Ft = window.tnsId), (window.tnsId = Ft ? Ft + 1 : 1), "tns" + window.tnsId),
          Gt = cn("disable"),
          Qt = !1,
          Jt = t.freezable,
          Zt = !(!Jt || J) && qn(),
          $t = !1,
          Kt = {
            click: sr,
            keydown: function (t) {
              t = mr(t);
              var e = [r.LEFT, r.RIGHT].indexOf(t.keyCode);
              e >= 0 && (0 === e ? we.disabled || sr(t, -1) : xe.disabled || sr(t, 1));
            },
          },
          te = {
            click: function (t) {
              if (jt) {
                if (Ht) return;
                or();
              }
              var e = _r((t = mr(t)));
              for (; e !== Me && !ci(e, "data-nav"); ) e = e.parentNode;
              if (ci(e, "data-nav")) {
                var n = (Ee = Number(di(e, "data-nav"))),
                  r = Z || J ? (n * N) / Ae : n * nt;
                ar(ue ? n : Math.min(Math.ceil(r), N - 1), t), ke === n && (Fe && hr(), (Ee = -1));
              }
            },
            keydown: function (t) {
              t = mr(t);
              var n = e.activeElement;
              if (!ci(n, "data-nav")) return;
              var i = [r.LEFT, r.RIGHT, r.ENTER, r.SPACE].indexOf(t.keyCode),
                o = Number(di(n, "data-nav"));
              i >= 0 && (0 === i ? o > 0 && pr(qe[o - 1]) : 1 === i ? o < Ae - 1 && pr(qe[o + 1]) : ((Ee = o), ar(o, t)));
            },
          },
          ee = {
            mouseover: function () {
              Fe && (lr(), (Ie = !0));
            },
            mouseout: function () {
              Ie && (ur(), (Ie = !1));
            },
          },
          ne = {
            visibilitychange: function () {
              e.hidden ? Fe && (lr(), (He = !0)) : He && (ur(), (He = !1));
            },
          },
          re = {
            keydown: function (t) {
              t = mr(t);
              var e = [r.LEFT, r.RIGHT].indexOf(t.keyCode);
              e >= 0 && sr(t, 0 === e ? -1 : 1);
            },
          },
          ie = { touchstart: br, touchmove: wr, touchend: Sr, touchcancel: Sr },
          oe = { mousedown: br, mousemove: wr, mouseup: Sr, mouseleave: Sr },
          ae = ln("controls"),
          se = ln("nav"),
          ue = !!J || t.navAsThumbnails,
          le = ln("autoplay"),
          ce = ln("touch"),
          de = ln("mouseDrag"),
          he = "tns-slide-active",
          fe = "tns-slide-cloned",
          pe = "tns-complete",
          me = {
            load: function (t) {
              Pn(_r(t));
            },
            error: function (t) {
              (e = _r(t)), ui(e, "failed"), Bn(e);
              var e;
            },
          },
          _e = "force" === t.preventScrollOnTouch;
        if (ae)
          var ve,
            ge,
            ye = t.controlsContainer,
            be = t.controlsContainer ? t.controlsContainer.outerHTML : "",
            we = t.prevButton,
            xe = t.nextButton,
            Se = t.prevButton ? t.prevButton.outerHTML : "",
            Te = t.nextButton ? t.nextButton.outerHTML : "";
        if (se)
          var qe,
            Me = t.navContainer,
            Ce = t.navContainer ? t.navContainer.outerHTML : "",
            Ae = J ? N : qr(),
            Oe = 0,
            Ee = -1,
            ke = rn(),
            Le = ke,
            Re = "tns-nav-active",
            De = "Carousel Page ",
            Pe = " (Current Slide)";
        if (le)
          var Be,
            Fe,
            Ie,
            ze,
            He,
            Ne = "forward" === t.autoplayDirection ? 1 : -1,
            We = t.autoplayButton,
            je = t.autoplayButton ? t.autoplayButton.outerHTML : "",
            Ve = ["<span class='tns-visually-hidden'>", " animation</span>"];
        if (ce || de)
          var Ye,
            Xe,
            Ue = {},
            Ge = {},
            Qe = !1,
            Je = D
              ? function (t, e) {
                return t.x - e.x;
              }
              : function (t, e) {
                return t.y - e.y;
              };
        J || Ke(Gt || Zt),
        d && ((Ot = d), (Et = "translate"), h ? ((Et += D ? "3d(" : "3d(0px, "), (kt = D ? ", 0px, 0px)" : ", 0px)")) : ((Et += D ? "X(" : "Y("), (kt = ")"))),
        T && (F.className = F.className.replace("tns-vpfix", "")),
          (function () {
            ln("gutter"), (P.className = "tns-outer"), (B.className = "tns-inner"), (P.id = Ut + "-ow"), (B.id = Ut + "-iw"), "" === F.id && (F.id = Ut);
            (Xt += l || J ? " tns-subpixel" : " tns-no-subpixel"), (Xt += u ? " tns-calc" : " tns-no-calc"), J && (Xt += " tns-autowidth");
            (Xt += " tns-" + t.axis), (F.className += Xt), T ? (((L = e.createElement("div")).id = Ut + "-mw"), (L.className = "tns-ovh"), P.appendChild(L), L.appendChild(B)) : P.appendChild(B);
            if (lt) {
              (L || B).className += " tns-ah";
            }
            if (
              (I.insertBefore(P, F),
                B.appendChild(F),
                oi(H, function (t, e) {
                  ui(t, "tns-item"), t.id || (t.id = Ut + "-item" + e), !T && k && ui(t, k), fi(t, { "aria-hidden": "true", tabindex: "-1" });
                }),
                Tt)
            ) {
              for (var n = e.createDocumentFragment(), r = e.createDocumentFragment(), i = Tt; i--; ) {
                var o = i % N,
                  a = H[o].cloneNode(!0);
                if ((ui(a, fe), pi(a, "id"), r.insertBefore(a, r.firstChild), T)) {
                  var s = H[N - 1 - o].cloneNode(!0);
                  ui(s, fe), pi(s, "id"), n.appendChild(s);
                }
              }
              F.insertBefore(n, F.firstChild), F.appendChild(r), (H = F.children);
            }
          })(),
          (function () {
            if (!T)
              for (var e = Rt, r = Rt + Math.min(N, nt); e < r; e++) {
                var i = H[e];
                (i.style.left = (100 * (e - Rt)) / nt + "%"), ui(i, A), li(i, k);
              }
            D &&
            (l || J
              ? (ri(bt, "#" + Ut + " > .tns-item", "font-size:" + n.getComputedStyle(H[0]).fontSize + ";", ii(bt)), ri(bt, "#" + Ut, "font-size:0;", ii(bt)))
              : T &&
              oi(H, function (t, e) {
                t.style.marginLeft = (function (t) {
                  return u ? u + "(" + 100 * t + "% / " + qt + ")" : (100 * t) / qt + "%";
                })(e);
              }));
            if (c) {
              if (f) {
                var o = L && t.autoHeight ? _n(t.speed) : "";
                ri(bt, "#" + Ut + "-mw", o, ii(bt));
              }
              (o = dn(t.edgePadding, t.gutter, t.fixedWidth, t.speed, t.autoHeight)),
                ri(bt, "#" + Ut + "-iw", o, ii(bt)),
              T && ((o = D && !J ? "width:" + hn(t.fixedWidth, t.gutter, t.items) + ";" : ""), f && (o += _n(at)), ri(bt, "#" + Ut, o, ii(bt))),
                (o = D && !J ? fn(t.fixedWidth, t.gutter, t.items) : ""),
              t.gutter && (o += pn(t.gutter)),
              T || (f && (o += _n(at)), m && (o += vn(at))),
              o && ri(bt, "#" + Ut + " > .tns-item", o, ii(bt));
            } else {
              T && lt && (L.style[f] = at / 1e3 + "s"), (B.style.cssText = dn($, K, Z, lt)), T && D && !J && (F.style.width = hn(Z, K, nt));
              o = D && !J ? fn(Z, K, nt) : "";
              K && (o += pn(K)), o && ri(bt, "#" + Ut + " > .tns-item", o, ii(bt));
            }
            if (x && c)
              for (var a in x) {
                a = parseInt(a);
                var s = x[a],
                  d = ((o = ""), ""),
                  h = "",
                  p = "",
                  _ = "",
                  v = J ? null : cn("items", a),
                  g = cn("fixedWidth", a),
                  y = cn("speed", a),
                  b = cn("edgePadding", a),
                  w = cn("autoHeight", a),
                  S = cn("gutter", a);
                f && L && cn("autoHeight", a) && "speed" in s && (d = "#" + Ut + "-mw{" + _n(y) + "}"),
                ("edgePadding" in s || "gutter" in s) && (h = "#" + Ut + "-iw{" + dn(b, S, g, y, w) + "}"),
                T && D && !J && ("fixedWidth" in s || "items" in s || (Z && "gutter" in s)) && (p = "width:" + hn(g, S, v) + ";"),
                f && "speed" in s && (p += _n(y)),
                p && (p = "#" + Ut + "{" + p + "}"),
                ("fixedWidth" in s || (Z && "gutter" in s) || (!T && "items" in s)) && (_ += fn(g, S, v)),
                "gutter" in s && (_ += pn(S)),
                !T && "speed" in s && (f && (_ += _n(y)), m && (_ += vn(y))),
                _ && (_ = "#" + Ut + " > .tns-item{" + _ + "}"),
                (o = d + h + p + _) && bt.insertRule("@media (min-width: " + a / 16 + "em) {" + o + "}", bt.cssRules.length);
              }
          })(),
          gn();
        var Ze = ut
            ? T
              ? function () {
                var t = It,
                  e = zt;
                (t += rt), (e -= rt), $ ? ((t += 1), (e -= 1)) : Z && (tt + K) % (Z + K) && (e -= 1), Tt && (Rt > e ? (Rt -= N) : Rt < t && (Rt += N));
              }
              : function () {
                if (Rt > zt) for (; Rt >= It + N; ) Rt -= N;
                else if (Rt < It) for (; Rt <= zt - N; ) Rt += N;
              }
            : function () {
              Rt = Math.max(It, Math.min(zt, Rt));
            },
          $e = T
            ? function () {
              var t, e, n, r, i, o, a, s, u, l, c;
              Jn(F, ""),
                f || !at
                  ? (er(), (at && gi(F)) || or())
                  : ((t = F),
                    (e = Ot),
                    (n = Et),
                    (r = kt),
                    (i = Kn()),
                    (o = at),
                    (a = or),
                    (s = Math.min(o, 10)),
                    (u = i.indexOf("%") >= 0 ? "%" : "px"),
                    (i = i.replace(u, "")),
                    (l = Number(t.style[e].replace(n, "").replace(r, "").replace(u, ""))),
                    (c = ((i - l) / o) * s),
                    setTimeout(function i() {
                      (o -= s), (l += c), (t.style[e] = n + l + u + r), o > 0 ? setTimeout(i, s) : a();
                    }, s)),
              D || Tr();
            }
            : function () {
              St = [];
              var t = {};
              (t[v] = t[g] = or), qi(H[Dt], t), Ti(H[Rt], t), nr(Dt, A, O, !0), nr(Rt, k, A), (v && g && at && gi(F)) || or();
            };
        return {
          version: "2.9.4",
          getInfo: Cr,
          events: Yt,
          goTo: ar,
          play: function () {
            mt && !Fe && (dr(), (ze = !1));
          },
          pause: function () {
            Fe && (hr(), (ze = !0));
          },
          isOn: j,
          updateSliderHeight: Wn,
          refresh: gn,
          destroy: function () {
            if (
              ((bt.disabled = !0),
              bt.ownerNode && bt.ownerNode.remove(),
                qi(n, { resize: Sn }),
              ot && qi(e, re),
              ye && qi(ye, Kt),
              Me && qi(Me, te),
                qi(F, ee),
                qi(F, ne),
              We && qi(We, { click: fr }),
              mt && clearInterval(Be),
              T && v)
            ) {
              var r = {};
              (r[v] = or), qi(F, r);
            }
            ft && qi(F, ie), pt && qi(F, oe);
            var i = [z, be, Se, Te, Ce, je];
            for (var o in (b.forEach(function (e, n) {
              var r = "container" === e ? P : t[e];
              if ("object" == typeof r && r) {
                var o = !!r.previousElementSibling && r.previousElementSibling,
                  a = r.parentNode;
                (r.outerHTML = i[n]), (t[e] = o ? o.nextElementSibling : a.firstElementChild);
              }
            }),
              (b = A = O = E = k = D = P = B = F = I = z = H = N = R = W = J = Z = $ = K = tt = nt = rt = it = ot = at = st = ut = lt = bt = wt = V = St = Tt = qt = Mt = Ct = At = Ot = Et = kt = Lt = Rt = Dt = It = zt = Nt = Wt = jt = Vt = Yt = Xt = Ut = Gt = Qt = Jt = Zt = $t = Kt = te = ee = ne = re = ie = oe = ae = se = ue = le = ce = de = he = pe = me = Pt = ct = dt = ye = be = we = xe = ve = ge = ht = Me = Ce = qe = Ae = Oe = Ee = ke = Le = Re = De = Pe = mt = _t = Ne = vt = gt = We = je = yt = Ve = Be = Fe = Ie = ze = He = Ue = Ge = Ye = Qe = Xe = Je = ft = pt = null),
              this))
              "rebuild" !== o && (this[o] = null);
            j = !1;
          },
          rebuild: function () {
            return Ai(Jr(t, w));
          },
        };
      }
      function Ke(t) {
        t && (ct = ht = ft = pt = ot = mt = gt = yt = !1);
      }
      function tn() {
        for (var t = T ? Rt - Tt : Rt; t < 0; ) t += N;
        return (t % N) + 1;
      }
      function en(t) {
        return (t = t ? Math.max(0, Math.min(ut ? N - 1 : N - nt, t)) : 0), T ? t + Tt : t;
      }
      function nn(t) {
        for (null == t && (t = Rt), T && (t -= Tt); t < 0; ) t += N;
        return Math.floor(t % N);
      }
      function rn() {
        var t,
          e = nn();
        return (t = ue ? e : Z || J ? Math.ceil(((e + 1) * Ae) / N - 1) : Math.floor(e / nt)), !ut && T && Rt === zt && (t = Ae - 1), t;
      }
      function on() {
        return n.innerWidth || e.documentElement.clientWidth || e.body.clientWidth;
      }
      function an(t) {
        return "top" === t ? "afterbegin" : "beforeend";
      }
      function sn(t) {
        if (null != t) {
          var n,
            r,
            i = e.createElement("div");
          return t.appendChild(i), (r = (n = i.getBoundingClientRect()).right - n.left), i.remove(), r || sn(t.parentNode);
        }
      }
      function un() {
        var t = $ ? 2 * $ - K : 0;
        return sn(I) - t;
      }
      function ln(e) {
        if (t[e]) return !0;
        if (x) for (var n in x) if (x[n][e]) return !0;
        return !1;
      }
      function cn(e, n) {
        if ((null == n && (n = W), "items" === e && Z)) return Math.floor((tt + K) / (Z + K)) || 1;
        var r = t[e];
        if (x) for (var i in x) n >= parseInt(i) && e in x[i] && (r = x[i][e]);
        return "slideBy" === e && "page" === r && (r = cn("items")), T || ("slideBy" !== e && "items" !== e) || (r = Math.floor(r)), r;
      }
      function dn(t, e, n, r, i) {
        var o = "";
        if (void 0 !== t) {
          var a = t;
          e && (a -= e), (o = D ? "margin: 0 " + a + "px 0 " + t + "px;" : "margin: " + t + "px 0 " + a + "px 0;");
        } else if (e && !n) {
          var s = "-" + e + "px";
          o = "margin: 0 " + (D ? s + " 0 0" : "0 " + s + " 0") + ";";
        }
        return !T && i && f && r && (o += _n(r)), o;
      }
      function hn(t, e, n) {
        return t ? (t + e) * qt + "px" : u ? u + "(" + 100 * qt + "% / " + n + ")" : (100 * qt) / n + "%";
      }
      function fn(t, e, n) {
        var r;
        if (t) r = t + e + "px";
        else {
          T || (n = Math.floor(n));
          var i = T ? qt : n;
          r = u ? u + "(100% / " + i + ")" : 100 / i + "%";
        }
        return (r = "width:" + r), "inner" !== S ? r + ";" : r + " !important;";
      }
      function pn(t) {
        var e = "";
        !1 !== t && (e = (D ? "padding-" : "margin-") + (D ? "right" : "bottom") + ": " + t + "px;");
        return e;
      }
      function mn(t, e) {
        var n = t.substring(0, t.length - e).toLowerCase();
        return n && (n = "-" + n + "-"), n;
      }
      function _n(t) {
        return mn(f, 18) + "transition-duration:" + t / 1e3 + "s;";
      }
      function vn(t) {
        return mn(m, 17) + "animation-duration:" + t / 1e3 + "s;";
      }
      function gn() {
        if (ln("autoHeight") || J || !D) {
          var t = F.querySelectorAll("img");
          oi(t, function (t) {
            var e = t.src;
            wt || (e && e.indexOf("data:image") < 0 ? ((t.src = ""), Ti(t, me), ui(t, "loading"), (t.src = e)) : Pn(t));
          }),
            Ur(function () {
              zn(mi(t), function () {
                Pt = !0;
              });
            }),
          ln("autoHeight") && (t = Fn(Rt, Math.min(Rt + nt - 1, qt - 1))),
            wt
              ? yn()
              : Ur(function () {
                zn(mi(t), yn);
              });
        } else T && tr(), wn(), xn();
      }
      function yn() {
        if (J && N > 1) {
          var t = ut ? Rt : N - 1;
          !(function e() {
            var n = H[t].getBoundingClientRect().left,
              r = H[t - 1].getBoundingClientRect().right;
            Math.abs(n - r) <= 1
              ? bn()
              : setTimeout(function () {
                e();
              }, 16);
          })();
        } else bn();
      }
      function bn() {
        (D && !J) || (jn(), J ? ((Ct = $n()), Jt && (Zt = qn()), (zt = Lt()), Ke(Gt || Zt)) : Tr()), T && tr(), wn(), xn();
      }
      function wn() {
        if (
          (Vn(),
            P.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + Ln() + "</span>  of " + N + "</div>"),
            (Bt = P.querySelector(".tns-liveregion .current")),
            le)
        ) {
          var e = mt ? "stop" : "start";
          We
            ? fi(We, { "data-action": e })
            : t.autoplayButtonOutput && (P.insertAdjacentHTML(an(t.autoplayPosition), '<button type="button" data-action="' + e + '">' + Ve[0] + e + Ve[1] + vt[0] + "</button>"), (We = P.querySelector("[data-action]"))),
          We && Ti(We, { click: fr }),
          mt && (dr(), gt && Ti(F, ee), yt && Ti(F, ne));
        }
        if (se) {
          if (Me)
            fi(Me, { "aria-label": "Carousel Pagination" }),
              oi((qe = Me.children), function (t, e) {
                fi(t, { "data-nav": e, tabindex: "-1", "aria-label": De + (e + 1), "aria-controls": Ut });
              });
          else {
            for (var n = "", r = ue ? "" : 'style="display:none"', i = 0; i < N; i++)
              n += '<button type="button" data-nav="' + i + '" tabindex="-1" aria-controls="' + Ut + '" ' + r + ' aria-label="' + De + (i + 1) + '"></button>';
            (n = '<div class="tns-nav" aria-label="Carousel Pagination">' + n + "</div>"), P.insertAdjacentHTML(an(t.navPosition), n), (Me = P.querySelector(".tns-nav")), (qe = Me.children);
          }
          if ((Mr(), f)) {
            var o = f.substring(0, f.length - 18).toLowerCase(),
              a = "transition: all " + at / 1e3 + "s";
            o && (a = "-" + o + "-" + a), ri(bt, "[aria-controls^=" + Ut + "-item]", a, ii(bt));
          }
          fi(qe[ke], { "aria-label": De + (ke + 1) + Pe }), pi(qe[ke], "tabindex"), ui(qe[ke], Re), Ti(Me, te);
        }
        ae &&
        (ye ||
        (we && xe) ||
        (P.insertAdjacentHTML(
          an(t.controlsPosition),
          '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' +
          Ut +
          '">' +
          dt[0] +
          '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' +
          Ut +
          '">' +
          dt[1] +
          "</button></div>"
        ),
          (ye = P.querySelector(".tns-controls"))),
        (we && xe) || ((we = ye.children[0]), (xe = ye.children[1])),
        t.controlsContainer && fi(ye, { "aria-label": "Carousel Navigation", tabindex: "0" }),
        (t.controlsContainer || (t.prevButton && t.nextButton)) && fi([we, xe], { "aria-controls": Ut, tabindex: "-1" }),
        (t.controlsContainer || (t.prevButton && t.nextButton)) && (fi(we, { "data-controls": "prev" }), fi(xe, { "data-controls": "next" })),
          (ve = Xn(we)),
          (ge = Xn(xe)),
          Qn(),
          ye ? Ti(ye, Kt) : (Ti(we, Kt), Ti(xe, Kt))),
          Cn();
      }
      function xn() {
        if (T && v) {
          var r = {};
          (r[v] = or), Ti(F, r);
        }
        ft && Ti(F, ie, t.preventScrollOnTouch),
        pt && Ti(F, oe),
        ot && Ti(e, re),
          "inner" === S
            ? Yt.on("outerResized", function () {
              Tn(), Yt.emit("innerLoaded", Cr());
            })
            : (x || Z || J || lt || !D) && Ti(n, { resize: Sn }),
        lt && ("outer" === S ? Yt.on("innerLoaded", In) : Gt || In()),
          Dn(),
          Gt ? En() : Zt && On(),
          Yt.on("indexChanged", Hn),
        "inner" === S && Yt.emit("innerLoaded", Cr()),
        "function" == typeof Vt && Vt(Cr()),
          (j = !0);
      }
      function Sn(t) {
        Ur(function () {
          Tn(mr(t));
        });
      }
      function Tn(n) {
        if (j) {
          "outer" === S && Yt.emit("outerResized", Cr(n)), (W = on());
          var r,
            i = R,
            o = !1;
          x && (Mn(), (r = i !== R) && Yt.emit("newBreakpointStart", Cr(n)));
          var a,
            s,
            u = nt,
            l = Gt,
            d = Zt,
            h = ot,
            f = ct,
            p = ht,
            m = ft,
            _ = pt,
            v = mt,
            g = gt,
            y = yt,
            b = Rt;
          if (r) {
            var w = Z,
              q = lt,
              M = dt,
              C = et,
              E = vt;
            if (!c)
              var L = K,
                P = $;
          }
          if (
            ((ot = cn("arrowKeys")),
              (ct = cn("controls")),
              (ht = cn("nav")),
              (ft = cn("touch")),
              (et = cn("center")),
              (pt = cn("mouseDrag")),
              (mt = cn("autoplay")),
              (gt = cn("autoplayHoverPause")),
              (yt = cn("autoplayResetOnVisibility")),
            r &&
            ((Gt = cn("disable")),
              (Z = cn("fixedWidth")),
              (at = cn("speed")),
              (lt = cn("autoHeight")),
              (dt = cn("controlsText")),
              (vt = cn("autoplayText")),
              (_t = cn("autoplayTimeout")),
            c || (($ = cn("edgePadding")), (K = cn("gutter")))),
              Ke(Gt),
              (tt = un()),
            (D && !J) || Gt || (jn(), D || (Tr(), (o = !0))),
            (Z || J) && ((Ct = $n()), (zt = Lt())),
            (r || Z) && ((nt = cn("items")), (rt = cn("slideBy")), (s = nt !== u) && (Z || J || (zt = Lt()), Ze())),
            r &&
            Gt !== l &&
            (Gt
              ? En()
              : (function () {
                if (!Qt) return;
                if (((bt.disabled = !1), (F.className += Xt), tr(), ut)) for (var t = Tt; t--; ) T && vi(H[t]), vi(H[qt - t - 1]);
                if (!T)
                  for (var e = Rt, n = Rt + N; e < n; e++) {
                    var r = H[e],
                      i = e < Rt + nt ? A : k;
                    (r.style.left = (100 * (e - Rt)) / nt + "%"), ui(r, i);
                  }
                An(), (Qt = !1);
              })()),
            Jt &&
            (r || Z || J) &&
            (Zt = qn()) !== d &&
            (Zt
              ? (er(Kn(en(0))), On())
              : (!(function () {
                if (!$t) return;
                $ && c && (B.style.margin = "");
                if (Tt) for (var t = "tns-transparent", e = Tt; e--; ) T && li(H[e], t), li(H[qt - e - 1], t);
                An(), ($t = !1);
              })(),
                (o = !0))),
              Ke(Gt || Zt),
            mt || (gt = yt = !1),
            ot !== h && (ot ? Ti(e, re) : qi(e, re)),
            ct !== f && (ct ? (ye ? vi(ye) : (we && vi(we), xe && vi(xe))) : ye ? _i(ye) : (we && _i(we), xe && _i(xe))),
            ht !== p && (ht ? (vi(Me), Mr()) : _i(Me)),
            ft !== m && (ft ? Ti(F, ie, t.preventScrollOnTouch) : qi(F, ie)),
            pt !== _ && (pt ? Ti(F, oe) : qi(F, oe)),
            mt !== v && (mt ? (We && vi(We), Fe || ze || dr()) : (We && _i(We), Fe && hr())),
            gt !== g && (gt ? Ti(F, ee) : qi(F, ee)),
            yt !== y && (yt ? Ti(e, ne) : qi(e, ne)),
              r)
          ) {
            if (((Z === w && et === C) || (o = !0), lt !== q && (lt || (B.style.height = "")), ct && dt !== M && ((we.innerHTML = dt[0]), (xe.innerHTML = dt[1])), We && vt !== E)) {
              var I = mt ? 1 : 0,
                z = We.innerHTML,
                V = z.length - E[I].length;
              z.substring(V) === E[I] && (We.innerHTML = z.substring(0, V) + vt[I]);
            }
          } else et && (Z || J) && (o = !0);
          if (
            ((s || (Z && !J)) && ((Ae = qr()), Mr()),
              (a = Rt !== b) ? (Yt.emit("indexChanged", Cr()), (o = !0)) : s ? a || Hn() : (Z || J) && (Dn(), Vn(), kn()),
            s &&
            !T &&
            (function () {
              for (var t = Rt + Math.min(N, nt), e = qt; e--; ) {
                var n = H[e];
                e >= Rt && e < t ? (ui(n, "tns-moving"), (n.style.left = (100 * (e - Rt)) / nt + "%"), ui(n, A), li(n, k)) : n.style.left && ((n.style.left = ""), ui(n, k), li(n, A)), li(n, O);
              }
              setTimeout(function () {
                oi(H, function (t) {
                  li(t, "tns-moving");
                });
              }, 300);
            })(),
            !Gt && !Zt)
          ) {
            if (r && !c && (($ === P && K === L) || (B.style.cssText = dn($, K, Z, at, lt)), D)) {
              T && (F.style.width = hn(Z, K, nt));
              var Y = fn(Z, K, nt) + pn(K);
              !(function (t, e) {
                "deleteRule" in t ? t.deleteRule(e) : t.removeRule(e);
              })(bt, ii(bt) - 1),
                ri(bt, "#" + Ut + " > .tns-item", Y, ii(bt));
            }
            lt && In(), o && (tr(), (Dt = Rt));
          }
          r && Yt.emit("newBreakpointEnd", Cr(n));
        }
      }
      function qn() {
        if (!Z && !J) return N <= (et ? nt - (nt - 1) / 2 : nt);
        var t = Z ? (Z + K) * N : V[N],
          e = $ ? tt + 2 * $ : tt + K;
        return et && (e -= Z ? (tt - Z) / 2 : (tt - (V[Rt + 1] - V[Rt] - K)) / 2), t <= e;
      }
      function Mn() {
        for (var t in ((R = 0), x)) (t = parseInt(t)), W >= t && (R = t);
      }
      function Cn() {
        !mt && We && _i(We), !ht && Me && _i(Me), ct || (ye ? _i(ye) : (we && _i(we), xe && _i(xe)));
      }
      function An() {
        mt && We && vi(We), ht && Me && vi(Me), ct && (ye ? vi(ye) : (we && vi(we), xe && vi(xe)));
      }
      function On() {
        if (!$t) {
          if (($ && (B.style.margin = "0px"), Tt)) for (var t = "tns-transparent", e = Tt; e--; ) T && ui(H[e], t), ui(H[qt - e - 1], t);
          Cn(), ($t = !0);
        }
      }
      function En() {
        if (!Qt) {
          if (((bt.disabled = !0), (F.className = F.className.replace(Xt.substring(1), "")), pi(F, ["style"]), ut)) for (var t = Tt; t--; ) T && _i(H[t]), _i(H[qt - t - 1]);
          if (((D && T) || pi(B, ["style"]), !T))
            for (var e = Rt, n = Rt + N; e < n; e++) {
              var r = H[e];
              pi(r, ["style"]), li(r, A), li(r, k);
            }
          Cn(), (Qt = !0);
        }
      }
      function kn() {
        var t = Ln();
        Bt.innerHTML !== t && (Bt.innerHTML = t);
      }
      function Ln() {
        var t = Rn(),
          e = t[0] + 1,
          n = t[1] + 1;
        return e === n ? e + "" : e + " to " + n;
      }
      function Rn(t) {
        null == t && (t = Kn());
        var e,
          n,
          r,
          i = Rt;
        if ((et || $ ? (J || Z) && ((n = -(parseFloat(t) + $)), (r = n + tt + 2 * $)) : J && ((n = V[Rt]), (r = n + tt)), J))
          V.forEach(function (t, o) {
            o < qt && ((et || $) && t <= n + 0.5 && (i = o), r - t >= 0.5 && (e = o));
          });
        else {
          if (Z) {
            var o = Z + K;
            et || $ ? ((i = Math.floor(n / o)), (e = Math.ceil(r / o - 1))) : (e = i + Math.ceil(tt / o) - 1);
          } else if (et || $) {
            var a = nt - 1;
            if ((et ? ((i -= a / 2), (e = Rt + a / 2)) : (e = Rt + a), $)) {
              var s = ($ * nt) / tt;
              (i -= s), (e += s);
            }
            (i = Math.floor(i)), (e = Math.ceil(e));
          } else e = i + nt - 1;
          (i = Math.max(i, 0)), (e = Math.min(e, qt - 1));
        }
        return [i, e];
      }
      function Dn() {
        if (wt && !Gt) {
          var t = Rn();
          t.push(xt),
            Fn.apply(null, t).forEach(function (t) {
              if (!si(t, pe)) {
                var e = {};
                (e[v] = function (t) {
                  t.stopPropagation();
                }),
                  Ti(t, e),
                  Ti(t, me),
                  (t.src = di(t, "data-src"));
                var n = di(t, "data-srcset");
                n && (t.srcset = n), ui(t, "loading");
              }
            });
        }
      }
      function Pn(t) {
        ui(t, "loaded"), Bn(t);
      }
      function Bn(t) {
        ui(t, pe), li(t, "loading"), qi(t, me);
      }
      function Fn(t, e, n) {
        var r = [];
        for (n || (n = "img"); t <= e; )
          oi(H[t].querySelectorAll(n), function (t) {
            r.push(t);
          }),
            t++;
        return r;
      }
      function In() {
        var t = Fn.apply(null, Rn());
        Ur(function () {
          zn(t, Wn);
        });
      }
      function zn(t, e) {
        return Pt
          ? e()
          : (t.forEach(function (e, n) {
            !wt && e.complete && Bn(e), si(e, pe) && t.splice(n, 1);
          }),
            t.length
              ? void Ur(function () {
                zn(t, e);
              })
              : e());
      }
      function Hn() {
        Dn(),
          Vn(),
          kn(),
          Qn(),
          (function () {
            if (ht && ((ke = Ee >= 0 ? Ee : rn()), (Ee = -1), ke !== Le)) {
              var t = qe[Le],
                e = qe[ke];
              fi(t, { tabindex: "-1", "aria-label": De + (Le + 1) }), li(t, Re), fi(e, { "aria-label": De + (ke + 1) + Pe }), pi(e, "tabindex"), ui(e, Re), (Le = ke);
            }
          })();
      }
      function Nn(t, e) {
        for (var n = [], r = t, i = Math.min(t + e, qt); r < i; r++) n.push(H[r].offsetHeight);
        return Math.max.apply(null, n);
      }
      function Wn() {
        var t = lt ? Nn(Rt, nt) : Nn(Tt, N),
          e = L || B;
        e.style.height !== t && (e.style.height = t + "px");
      }
      function jn() {
        V = [0];
        var t = D ? "left" : "top",
          e = D ? "right" : "bottom",
          n = H[0].getBoundingClientRect()[t];
        oi(H, function (r, i) {
          i && V.push(r.getBoundingClientRect()[t] - n), i === qt - 1 && V.push(r.getBoundingClientRect()[e] - n);
        });
      }
      function Vn() {
        var t = Rn(),
          e = t[0],
          n = t[1];
        oi(H, function (t, r) {
          r >= e && r <= n ? ci(t, "aria-hidden") && (pi(t, ["aria-hidden", "tabindex"]), ui(t, he)) : ci(t, "aria-hidden") || (fi(t, { "aria-hidden": "true", tabindex: "-1" }), li(t, he));
        });
      }
      function Yn(t) {
        return t.nodeName.toLowerCase();
      }
      function Xn(t) {
        return "button" === Yn(t);
      }
      function Un(t) {
        return "true" === t.getAttribute("aria-disabled");
      }
      function Gn(t, e, n) {
        t ? (e.disabled = n) : e.setAttribute("aria-disabled", n.toString());
      }
      function Qn() {
        if (ct && !st && !ut) {
          var t = ve ? we.disabled : Un(we),
            e = ge ? xe.disabled : Un(xe),
            n = Rt <= It,
            r = !st && Rt >= zt;
          n && !t && Gn(ve, we, !0), !n && t && Gn(ve, we, !1), r && !e && Gn(ge, xe, !0), !r && e && Gn(ge, xe, !1);
        }
      }
      function Jn(t, e) {
        f && (t.style[f] = e);
      }
      function Zn(t) {
        return null == t && (t = Rt), J ? (tt - ($ ? K : 0) - (V[t + 1] - V[t] - K)) / 2 : Z ? (tt - Z) / 2 : (nt - 1) / 2;
      }
      function $n() {
        var t = tt + ($ ? K : 0) - (Z ? (Z + K) * qt : V[qt]);
        return et && !ut && (t = Z ? -(Z + K) * (qt - 1) - Zn() : Zn(qt - 1) - V[qt - 1]), t > 0 && (t = 0), t;
      }
      function Kn(t) {
        var e;
        if ((null == t && (t = Rt), D && !J))
          if (Z) (e = -(Z + K) * t), et && (e += Zn());
          else {
            var n = d ? qt : nt;
            et && (t -= Zn()), (e = (100 * -t) / n);
          }
        else (e = -V[t]), et && J && (e += Zn());
        return Mt && (e = Math.max(e, Ct)), (e += !D || J || Z ? "px" : "%");
      }
      function tr(t) {
        Jn(F, "0s"), er(t);
      }
      function er(t) {
        null == t && (t = Kn()), (F.style[Ot] = Et + t + kt);
      }
      function nr(t, e, n, r) {
        var i = t + nt;
        ut || (i = Math.min(i, qt));
        for (var o = t; o < i; o++) {
          var a = H[o];
          r || (a.style.left = (100 * (o - Rt)) / nt + "%"), E && p && (a.style[p] = a.style[_] = (E * (o - t)) / 1e3 + "s"), li(a, e), ui(a, n), r && St.push(a);
        }
      }
      function rr(t, e) {
        At && Ze(), (Rt !== Dt || e) && (Yt.emit("indexChanged", Cr()), Yt.emit("transitionStart", Cr()), lt && In(), Fe && t && ["click", "keydown"].indexOf(t.type) >= 0 && hr(), (jt = !0), $e());
      }
      function ir(t) {
        return t.toLowerCase().replace(/-/g, "");
      }
      function or(t) {
        if (T || jt) {
          if ((Yt.emit("transitionEnd", Cr(t)), !T && St.length > 0))
            for (var e = 0; e < St.length; e++) {
              var n = St[e];
              (n.style.left = ""), _ && p && ((n.style[_] = ""), (n.style[p] = "")), li(n, O), ui(n, k);
            }
          if (!t || (!T && t.target.parentNode === F) || (t.target === F && ir(t.propertyName) === ir(Ot))) {
            if (!At) {
              var r = Rt;
              Ze(), Rt !== r && (Yt.emit("indexChanged", Cr()), tr());
            }
            "inner" === S && Yt.emit("innerLoaded", Cr()), (jt = !1), (Dt = Rt);
          }
        }
      }
      function ar(t, e) {
        if (!Zt)
          if ("prev" === t) sr(e, -1);
          else if ("next" === t) sr(e, 1);
          else {
            if (jt) {
              if (Ht) return;
              or();
            }
            var n = nn(),
              r = 0;
            if (
              ("first" === t ? (r = -n) : "last" === t ? (r = T ? N - nt - n : N - 1 - n) : ("number" != typeof t && (t = parseInt(t)), isNaN(t) || (e || (t = Math.max(0, Math.min(N - 1, t))), (r = t - n))),
              !T && r && Math.abs(r) < nt)
            ) {
              var i = r > 0 ? 1 : -1;
              r += Rt + r - N >= It ? N * i : 2 * N * i * -1;
            }
            (Rt += r), T && ut && (Rt < It && (Rt += N), Rt > zt && (Rt -= N)), nn(Rt) !== nn(Dt) && rr(e);
          }
      }
      function sr(t, e) {
        if (jt) {
          if (Ht) return;
          or();
        }
        var n;
        if (!e) {
          for (var r = _r((t = mr(t))); r !== ye && [we, xe].indexOf(r) < 0; ) r = r.parentNode;
          var i = [we, xe].indexOf(r);
          i >= 0 && ((n = !0), (e = 0 === i ? -1 : 1));
        }
        if (st) {
          if (Rt === It && -1 === e) return void ar("last", t);
          if (Rt === zt && 1 === e) return void ar("first", t);
        }
        e && ((Rt += rt * e), J && (Rt = Math.floor(Rt)), rr(n || (t && "keydown" === t.type) ? t : null));
      }
      function ur() {
        (Be = setInterval(function () {
          sr(null, Ne);
        }, _t)),
          (Fe = !0);
      }
      function lr() {
        clearInterval(Be), (Fe = !1);
      }
      function cr(t, e) {
        fi(We, { "data-action": t }), (We.innerHTML = Ve[0] + t + Ve[1] + e);
      }
      function dr() {
        ur(), We && cr("stop", vt[1]);
      }
      function hr() {
        lr(), We && cr("start", vt[0]);
      }
      function fr() {
        Fe ? (hr(), (ze = !0)) : (dr(), (ze = !1));
      }
      function pr(t) {
        t.focus();
      }
      function mr(t) {
        return vr((t = t || n.event)) ? t.changedTouches[0] : t;
      }
      function _r(t) {
        return t.target || n.event.srcElement;
      }
      function vr(t) {
        return t.type.indexOf("touch") >= 0;
      }
      function gr(t) {
        t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
      }
      function yr() {
        return (o = Ge.y - Ue.y), (a = Ge.x - Ue.x), (e = Math.atan2(o, a) * (180 / Math.PI)), (n = Nt), (r = !1), (i = Math.abs(90 - Math.abs(e))) >= 90 - n ? (r = "horizontal") : i <= n && (r = "vertical"), r === t.axis;
        var e, n, r, i, o, a;
      }
      function br(t) {
        if (jt) {
          if (Ht) return;
          or();
        }
        mt && Fe && lr(), (Qe = !0), Xe && (Qr(Xe), (Xe = null));
        var e = mr(t);
        Yt.emit(vr(t) ? "touchStart" : "dragStart", Cr(t)),
        !vr(t) && ["img", "a"].indexOf(Yn(_r(t))) >= 0 && gr(t),
          (Ge.x = Ue.x = e.clientX),
          (Ge.y = Ue.y = e.clientY),
        T && ((Ye = parseFloat(F.style[Ot].replace(Et, ""))), Jn(F, "0s"));
      }
      function wr(t) {
        if (Qe) {
          var e = mr(t);
          (Ge.x = e.clientX),
            (Ge.y = e.clientY),
            T
              ? Xe ||
              (Xe = Ur(function () {
                xr(t);
              }))
              : ("?" === Wt && (Wt = yr()), Wt && (_e = !0)),
          ("boolean" != typeof t.cancelable || t.cancelable) && _e && t.preventDefault();
        }
      }
      function xr(t) {
        if (Wt) {
          if (
            (Qr(Xe),
            Qe &&
            (Xe = Ur(function () {
              xr(t);
            })),
            "?" === Wt && (Wt = yr()),
              Wt)
          ) {
            !_e && vr(t) && (_e = !0);
            try {
              t.type && Yt.emit(vr(t) ? "touchMove" : "dragMove", Cr(t));
            } catch (t) {}
            var e = Ye,
              n = Je(Ge, Ue);
            if (!D || Z || J) (e += n), (e += "px");
            else (e += d ? (n * nt * 100) / ((tt + K) * qt) : (100 * n) / (tt + K)), (e += "%");
            F.style[Ot] = Et + e + kt;
          }
        } else Qe = !1;
      }
      function Sr(e) {
        if (Qe) {
          Xe && (Qr(Xe), (Xe = null)), T && Jn(F, ""), (Qe = !1);
          var n = mr(e);
          (Ge.x = n.clientX), (Ge.y = n.clientY);
          var r = Je(Ge, Ue);
          if (Math.abs(r)) {
            if (!vr(e)) {
              var i = _r(e);
              Ti(i, {
                click: function t(e) {
                  gr(e), qi(i, { click: t });
                },
              });
            }
            T
              ? (Xe = Ur(function () {
                if (D && !J) {
                  var t = (-r * nt) / (tt + K);
                  (t = r > 0 ? Math.floor(t) : Math.ceil(t)), (Rt += t);
                } else {
                  var n = -(Ye + r);
                  if (n <= 0) Rt = It;
                  else if (n >= V[qt - 1]) Rt = zt;
                  else for (var i = 0; i < qt && n >= V[i]; ) (Rt = i), n > V[i] && r < 0 && (Rt += 1), i++;
                }
                rr(e, r), Yt.emit(vr(e) ? "touchEnd" : "dragEnd", Cr(e));
              }))
              : Wt && sr(e, r > 0 ? -1 : 1);
          }
        }
        "auto" === t.preventScrollOnTouch && (_e = !1), Nt && (Wt = "?"), mt && !Fe && ur();
      }
      function Tr() {
        (L || B).style.height = V[Rt + nt] - V[Rt] + "px";
      }
      function qr() {
        var t = Z ? ((Z + K) * N) / tt : N / nt;
        return Math.min(Math.ceil(t), N);
      }
      function Mr() {
        if (ht && !ue && Ae !== Oe) {
          var t = Oe,
            e = Ae,
            n = vi;
          for (Oe > Ae && ((t = Ae), (e = Oe), (n = _i)); t < e; ) n(qe[t]), t++;
          Oe = Ae;
        }
      }
      function Cr(t) {
        return {
          container: F,
          slideItems: H,
          navContainer: Me,
          navItems: qe,
          controlsContainer: ye,
          hasControls: ae,
          prevButton: we,
          nextButton: xe,
          items: nt,
          slideBy: rt,
          cloneCount: Tt,
          slideCount: N,
          slideCountNew: qt,
          index: Rt,
          indexCached: Dt,
          displayIndex: tn(),
          navCurrentIndex: ke,
          navCurrentIndexCached: Le,
          pages: Ae,
          pagesCached: Oe,
          sheet: bt,
          isOn: j,
          event: t || {},
        };
      }
      y && console.warn("No slides found in", t.container);
    },
    Oi = (function () {
      function e() {
        t(this, e);
      }
      return (
        n(e, null, [
          {
            key: "main",
            value: function () {
              var e,
                r = document.body,
                a = function (t, e, n) {
                  return (1 - n) * t + n * e;
                },
                s = function (t, e, n, r) {
                  return Math.hypot(n - t, r - e);
                },
                u = function () {
                  return (e = { width: window.innerWidth, height: window.innerHeight });
                };
              u(), window.addEventListener("resize", u);
              var l = { x: 0, y: 0 },
                c = { x: 0, y: 0 },
                d = { x: 0, y: 0 };
              window.addEventListener("mousemove", function (t) {
                return (l = (function (t) {
                  var e = 0,
                    n = 0;
                  return (
                    t || (t = window.event),
                      t.pageX || t.pageY
                        ? ((e = t.pageX), (n = t.pageY - window.pageYOffset - document.querySelector(".details__images").getBoundingClientRect().top))
                        : (t.clientX || t.clientY) && ((e = t.clientX + r.scrollLeft), (n = t.clientY + r.scrollTop)),
                      { x: e, y: n }
                  );
                })(t));
              });
              var h = (function () {
                function e(n) {
                  t(this, e), (this.DOM = { el: n }), (this.defaultStyle = { x: 0, y: 0, opacity: 0 }), this.getRect(), this.initEvents();
                }
                return (
                  n(e, [
                    {
                      key: "initEvents",
                      value: function () {
                        var t = this;
                        window.addEventListener("resize", function () {
                          return t.resize();
                        });
                      },
                    },
                    {
                      key: "resize",
                      value: function () {
                        Wr.set(this.DOM.el, this.defaultStyle), this.getRect();
                      },
                    },
                    {
                      key: "getRect",
                      value: function () {
                        this.rect = this.DOM.el.getBoundingClientRect();
                      },
                    },
                    {
                      key: "isActive",
                      value: function () {
                        return Wr.isTweening(this.DOM.el) || 0 != this.DOM.el.style.opacity;
                      },
                    },
                  ]),
                    e
                );
              })();
              new ((function () {
                function r() {
                  var e = this;
                  t(this, r),
                    (this.DOM = { content: document.querySelector(".details__images") }),
                    (this.images = []),
                    i(this.DOM.content.querySelectorAll("img")).forEach(function (t) {
                      return e.images.push(new h(t));
                    }),
                    (this.imagesTotal = this.images.length),
                    (this.imgPosition = 0),
                    (this.zIndexVal = 1),
                    (this.threshold = 50),
                    requestAnimationFrame(function () {
                      return e.render();
                    });
                }
                return (
                  n(r, [
                    {
                      key: "render",
                      value: function () {
                        var t = this,
                          e = s(l.x, l.y, c.x, c.y);
                        (d.x = a(d.x || l.x, l.x, 0.1)),
                          (d.y = a(d.y || l.y, l.y, 0.1)),
                        e > this.threshold &&
                        (document.querySelector(".details").getBoundingClientRect().top < window.innerHeight / 2 &&
                        document.querySelector(".details").getBoundingClientRect().bottom > window.innerHeight / 2 &&
                        this.showNextImage(),
                          ++this.zIndexVal,
                          (this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0),
                          (c = l));
                        var n,
                          r = !0,
                          i = (function (t, e) {
                            var n;
                            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                              if (Array.isArray(t) || (n = o(t)) || (e && t && "number" == typeof t.length)) {
                                n && (t = n);
                                var r = 0,
                                  i = function () {};
                                return {
                                  s: i,
                                  n: function () {
                                    return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
                                  },
                                  e: function (t) {
                                    throw t;
                                  },
                                  f: i,
                                };
                              }
                              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                            }
                            var a,
                              s = !0,
                              u = !1;
                            return {
                              s: function () {
                                n = t[Symbol.iterator]();
                              },
                              n: function () {
                                var t = n.next();
                                return (s = t.done), t;
                              },
                              e: function (t) {
                                (u = !0), (a = t);
                              },
                              f: function () {
                                try {
                                  s || null == n.return || n.return();
                                } finally {
                                  if (u) throw a;
                                }
                              },
                            };
                          })(this.images);
                        try {
                          for (i.s(); !(n = i.n()).done; ) {
                            if (n.value.isActive()) {
                              r = !1;
                              break;
                            }
                          }
                        } catch (t) {
                          i.e(t);
                        } finally {
                          i.f();
                        }
                        r && 1 !== this.zIndexVal && (this.zIndexVal = 1),
                          requestAnimationFrame(function () {
                            return t.render();
                          });
                      },
                    },
                    {
                      key: "showNextImage",
                      value: function () {
                        var t = this.images[this.imgPosition];
                        Wr.killTweensOf(t.DOM.el),
                          new Wr.timeline()
                            .set(t.DOM.el, { startAt: { opacity: 0 }, opacity: 1, zIndex: this.zIndexVal, x: d.x - t.rect.width / 2, y: d.y - t.rect.height / 2 }, 0)
                            .to(t.DOM.el, 1.6, { ease: "expo.out", x: l.x - t.rect.width / 2, y: l.y - t.rect.height / 2 }, 0)
                            .to(t.DOM.el, 1, { ease: "power1.out", opacity: 0 }, 0.4)
                            .to(t.DOM.el, 1, { ease: "quint.inOut", y: "+=".concat(e.height / 2 + t.rect.height / 2) }, 0.4);
                      },
                    },
                  ]),
                    r
                );
              })())();
            },
          },
        ]),
          e
      );
    })();
  Wr.registerPlugin(Yr);
  var Ei = Yr.create("gna", "0.25, 0, 0, 1");
  function ki() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }
  function Li(t) {
    var e = new MouseEvent("click", { bubbles: !0, cancelable: !0, view: window });
    t.dispatchEvent(e);
  }
  function Ri() {
    document.querySelector(".cook").classList.remove("on"), localStorage.setItem("cook", "ok");
  }
  function Di() {
    document.querySelector(".newsletterPop").classList.add("on");
  }
  function Pi() {
    document.querySelector(".newsletterPop").classList.remove("on");
  }
  function Bi(t) {
    null != t && (document.querySelector(".history__wrap").scrollLeft += t.deltaY);
    for (var e = document.querySelectorAll(".redBG"), n = !1, r = 0; r < e.length; r++)
      if (e[r].getBoundingClientRect().left < window.innerWidth && e[r].getBoundingClientRect().right >= 0) {
        n = !0;
        break;
      }
    if ((window.innerWidth > 1e3 && (n ? document.querySelector(".siteHeader").classList.add("siteHeader--red") : document.querySelector(".siteHeader").classList.remove("siteHeader--red")), window.innerWidth > 1e3)) {
      if (document.querySelector(".history__img--0").getBoundingClientRect().left < window.innerWidth && document.querySelector(".history__img--0").getBoundingClientRect().right > 0) {
        var i = (-document.querySelector(".history__img--0").getBoundingClientRect().left / window.innerWidth) * 100;
        document.querySelector(".history__img--0 img").style.transform = "scale(1.05) translate3d(" + i + "px,0,0)";
      }
      if (document.querySelector(".history__card").getBoundingClientRect().left < window.innerWidth && document.querySelector(".history__card").getBoundingClientRect().right > 0) {
        i = (-document.querySelector(".history__card").getBoundingClientRect().left / window.innerWidth) * 100;
        document.querySelector(".history__card").style.transform = "translate3d(" + i + "px,0,0) rotate(7deg)";
      }
      if (document.querySelector(".history__img--1").getBoundingClientRect().left < window.innerWidth && document.querySelector(".history__img--1").getBoundingClientRect().right > 0) {
        i = (-document.querySelector(".history__img--1").getBoundingClientRect().left / window.innerWidth) * 100;
        document.querySelector(".history__img--1 img").style.transform = "scale(1.05) translate3d(" + i + "px,0,0)";
      }
      if (document.querySelector(".history__img--2").getBoundingClientRect().left < window.innerWidth && document.querySelector(".history__img--2").getBoundingClientRect().right > 0) {
        i = (-document.querySelector(".history__img--2").getBoundingClientRect().left / window.innerWidth) * 100;
        document.querySelector(".history__img--2 img").style.transform = "scale(1.05) translate3d(" + i + "px,0,0)";
      }
      Array.prototype.forEach.call(document.querySelectorAll("[pamAppear]"), function (t, e) {
        null != t.getAttribute("pamAppear") &&
        (t.getBoundingClientRect().left < window.innerWidth && t.getBoundingClientRect().right > 0 && !t.classList.contains("on") && t.classList.add("on"),
        t.getBoundingClientRect().left > window.innerWidth && t.classList.contains("on") && t.classList.remove("on"));
      });
    }
  }
  function Fi() {
    document.querySelector("body.home") && window.innerWidth > 1e3
      ? document.querySelector(".homePhotoDebut").getBoundingClientRect().top < window.innerHeight / 4 && document.querySelector(".homeSlider").getBoundingClientRect().top > 0
        ? (document.querySelector(".siteHeader").classList.add("siteHeader--red"), document.querySelector(".homeStory").classList.add("homeStory--on"))
        : (document.querySelector(".homeStory") && document.querySelector(".homeStory").classList.remove("homeStory--on"),
        document.querySelector(".siteHeader") && document.querySelector(".siteHeader").classList.remove("siteHeader--red"))
      : document.querySelector("body.home") &&
      window.innerWidth <= 1e3 &&
      (document.querySelector(".homePhotoDebut").getBoundingClientRect().top < window.innerHeight / 4 && document.querySelector(".homePhotoDebut").getBoundingClientRect().bottom > -window.innerHeight / 2
        ? document.querySelector(".homeStory").classList.add("homeStory--on")
        : document.querySelector(".homeStory") && document.querySelector(".homeStory").classList.remove("homeStory--on")),
    window.innerWidth > 1e3 &&
    Array.prototype.forEach.call(document.querySelectorAll("[data-speed],[pamAppear]"), function (t, e) {
      if (null != t.getAttribute("data-speed") && t.getBoundingClientRect().top < window.innerHeight && t.getBoundingClientRect().bottom > 0) {
        var n = (Math.round(t.getBoundingClientRect().top - t.offsetHeight / 2 + t.getBoundingClientRect().height / 2) * t.getAttribute("data-speed")) / 10;
        null != t.getAttribute("data-offset") && (n = parseInt(n) + parseInt(t.getAttribute("data-offset"))),
          null == t.getAttribute("horizontal") ? (t.style.transform = "translate3d(0," + n + "px,0)") : (t.style.transform = "translate3d(" + n + "px,0,0)");
      }
      null != t.getAttribute("pamAppear") &&
      (t.getBoundingClientRect().top < window.innerHeight && t.getBoundingClientRect().bottom > 0 && !t.classList.contains("on") && t.classList.add("on"),
      t.getBoundingClientRect().top > window.innerHeight && t.classList.contains("on") && t.classList.remove("on"));
    });
  }
  function Ii() {
    document.querySelector(".content-area .site-main .woocommerce-notices-wrapper").innerHTML = document.querySelector(".cartOverlay__shopCart .woocommerce .woocommerce-notices-wrapper").innerHTML;
  }
  (window.submitNL = function () {
    if (!1 == ((n = document.querySelector('.formNL input[name="c_email"]').value), !!new RegExp("^[a-z0-9]+([_|.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|.|-]{1}[a-z0-9]+)*[.]{1}[a-z]{2,6}$", "i").test(n)))
      document.querySelector('.formNL input[name="c_email"]').style.boxShadow = "red 0 0 0px 2px inset";
    else {
      var t = new XMLHttpRequest(),
        e = document.querySelector('input[name="c_email"]').value;
      "" === e && (e = document.querySelectorAll('input[name="c_email"]')[1].value),
      "" === e && (e = document.querySelectorAll('input[name="c_email"]')[2].value),
        t.open("GET", "/bibent/wp-content/themes/bibent/add-email-to-mailjet.php?e=" + encodeURIComponent(e), !0),
        t.send();
    }
    var n;
  }),
  document.querySelector("body").scrollWidth > document.querySelector("body").offsetWidth && document.querySelector("html").classList.add("widthFixedScrollbar"),
    window.addEventListener("DOMContentLoaded", function () {
      if (
        (document.querySelector(".savoirFaire") && !ki() && Oi.main(),
        null == localStorage.getItem("cook") && document.querySelector(".cook").classList.add("on"),
          (function () {
            if (window.location.search.includes("?c_email=")) {
              var t = ".formNL";
              document.querySelector(".newsletterPop").classList.add("on"),
                (document.querySelector(t + ' input[name="c_email"]').style.display = "none"),
                (document.querySelector(".newsletterPop__wrap small").style.display = "none"),
                (document.querySelector(t).innerHTML = "Merci et Г  trГЁs vite."),
                history.replaceState(null, "", location.href.split("?")[0]);
            }
          })(),
        document.querySelector(".cook__close") && document.querySelector(".cook__close").addEventListener("click", Ri),
        document.querySelector(".newsletterPop__close") && document.querySelector(".newsletterPop__close").addEventListener("click", Pi),
        document.querySelector(".footer__newsletter") && document.querySelector(".footer__newsletter").addEventListener("click", Di),
        document.querySelector(".siteHeader__cartLink") &&
        document.querySelector(".siteHeader__cartLink").addEventListener("click", function () {
          document.querySelector(".cartOverlay").classList.add("cartOverlay--on"), window.innerWidth <= 1e3 && document.querySelector(".siteHeader") && document.querySelector(".siteHeader").classList.remove("siteHeader--on");
        }),
        document.querySelector(".cartMobile") &&
        document.querySelector(".cartMobile").addEventListener("click", function () {
          document.querySelector(".cartOverlay").classList.add("cartOverlay--on");
        }),
        document.querySelector(".cartOverlay__shopCartClose") &&
        document.querySelector(".cartOverlay__shopCartClose").addEventListener("click", function () {
          document.querySelector(".cartOverlay").classList.remove("cartOverlay--on");
        }),
        document.querySelector(".footer__remonter") &&
        document.querySelector(".footer__remonter").addEventListener("click", function () {
          Wr.to("html,body", { scrollTop: 0, ease: "power3.out" });
        }),
        document.querySelector("body.page-template-dernieres-commandes") &&
        setTimeout(function () {
          document.location.reload();
        }, 6e4),
        document.querySelector("body.page-template-prochaines-commandes") &&
        (document.querySelectorAll("h3").forEach(function (t) {
          t.addEventListener("click", function () {
            var e = t.dataset.jour;
            document.getElementById(e).classList.contains("commandesDuJour--on")
              ? document.getElementById(e).classList.remove("commandesDuJour--on")
              : (document.querySelectorAll(".commandesDuJour").forEach(function (t) {
                t.classList.remove("commandesDuJour--on");
              }),
                document.getElementById(e).classList.add("commandesDuJour--on"));
          });
        }),
          setTimeout(function () {
            document.location.reload();
          }, 6e4)),
        document.querySelector("body.page-template-histoire") ||
        (window.addEventListener("scroll", function () {
          Ci ||
          window.requestAnimationFrame(function () {
            Fi(), (Ci = !1);
          }),
            (Ci = !0);
        }),
          Fi()),
          document.querySelector("body.home"))
      ) {
        sessionStorage.getItem("intro"),
          setTimeout(function () {
            Wr.fromTo(".homeTop path", { opacity: 1, y: "100%" }, { delay: 0.5, stagger: 0.07, duration: 1, y: "0%", ease: Ei }),
              Wr.to(".homeTop__introPanel", { opacity: 0, delay: 2.5 }),
              Wr.fromTo(".siteHeader", { y: "-20px" }, { duration: 1, y: "0", delay: 2.5, ease: Ei }),
              Wr.fromTo(".homePhotoDebut", { y: "20px" }, { duration: 1, y: "0", delay: 2.5, ease: Ei }),
              Wr.fromTo(".homeTop > div:first-child", { x: "-20px" }, { duration: 1, x: "0", delay: 2.5, ease: Ei }),
              Wr.fromTo(".homeTop > div:last-child", { x: "20px" }, { duration: 1, x: "0", delay: 2.5, ease: Ei }),
            document.querySelector(".cook") && Wr.fromTo(".cook", { opacity: 0, y: "50px" }, { opacity: 1, duration: 1, y: "0", delay: 3.5, ease: Ei }),
              Wr.delayedCall(3.5, function () {
                Wr.set(".homeTop__introPanel, .homeTop svg", { zIndex: 1 });
              });
          }, 500),
          sessionStorage.setItem("intro", "done");
        var t = Ai({
          container: document.querySelector(".homeSlider__items"),
          items: 1,
          speed: 700,
          mode: "carousel",
          autoplay: !0,
          controls: !1,
          gutter: 0,
          loop: !0,
          mouseDrag: !0,
          autoplayButtonOutput: !1,
          nav: !1,
          autoplayTimeout: 3500,
          dots: !1,
          autoplayHoverPause: !0,
        });
        t.events.on("indexChanged", function () {
          var e = t.getInfo().index - 1;
          (e %= 5),
          document.querySelector(".homeSlider__control button.on") &&
          (document.querySelector(".homeSlider__control button.on").classList.remove("on"),
          document.querySelectorAll(".homeSlider__control button")[e] && document.querySelectorAll(".homeSlider__control button")[e].classList.add("on"));
        }),
          document.querySelector(".homeSlider__control").addEventListener("mouseenter", function () {
            t.pause();
          });
        for (var e = 0; e < document.querySelectorAll(".homeSlider__control button").length; e++)
          !(function (e) {
            document.querySelectorAll(".homeSlider__control button")[e].addEventListener("click", function () {
              console.log("click" + e), t.goTo(e);
            });
          })(e);
      }
      if (document.querySelector(".laCarte__item button")) {
        for (e = 0; e < document.querySelectorAll(".laCarte__item > button").length; e++)
          (n = e),
            document.querySelectorAll(".laCarte__item > button")[n].addEventListener("click", function () {
              window.history.pushState({}, "", window.location.href + "pop");
            });
        window.onpopstate = function (t) {
          document.querySelector(".laCarte__popinMatin") &&
          (document.querySelector(".popin:not(.hidden)") && document.querySelector(".popin:not(.hidden)").classList.add("hidden"), document.body.classList.remove("pop"), window.history.pushState({}, "", "../carte/")),
            t.preventDefault();
        };
      }
      var n, i, o, a;
      if (document.querySelector("body.page-template-galerie")) {
        for (e = 0; e < document.querySelectorAll(".galerie__link").length; e++)
          !(function (t) {
            document.querySelectorAll(".galerie__link")[t].addEventListener("mouseenter", function () {
              for (var e = 0; e < document.querySelectorAll(".galerie__imgsCouverture img").length; e++) document.querySelectorAll(".galerie__imgsCouverture img")[e].classList.remove("on");
              document.querySelectorAll(".galerie__imgsCouverture img")[t].classList.add("on");
            }),
              document.querySelectorAll(".galerie__link")[t].addEventListener("click", function () {
                if (
                  (document.querySelectorAll(".galerie__sallePopin")[t].classList.add("galerie__sallePopin--on"),
                  0 == document.querySelector(".galerie__sallePopin--on .galerie__popThumbWrap").classList.contains("tns-slider"))
                ) {
                  var e = Ai({
                    container: document.querySelector(".galerie__sallePopin--on .galerie__popThumbWrap"),
                    items: 1,
                    speed: 700,
                    mode: "carousel",
                    autoplay: !0,
                    controls: !1,
                    gutter: 0,
                    loop: !0,
                    mouseDrag: !0,
                    autoplayButtonOutput: !1,
                    nav: !1,
                    autoplayTimeout: 3500,
                    dots: !0,
                    autoplayHoverPause: !0,
                  });
                  document.querySelector(".galerie__sallePopin--on .galerie__nextButton").addEventListener("mouseenter", function () {
                    e.pause();
                  }),
                    document.querySelector(".galerie__sallePopin--on .galerie__nextButton").addEventListener("click", function () {
                      e.goTo("next");
                    });
                }
              });
          })(e);
        for (e = 0; e < document.querySelectorAll(".galerie__link").length; e++)
          !(function (t) {
            document.querySelectorAll(".galerie__link")[t].addEventListener("click", function () {
              window.history.pushState({}, "", window.location.href + "pop");
            });
          })(e);
        window.onpopstate = function (t) {
          document.querySelector(".galerie__sallePopin--on") &&
          (document.querySelector(".galerie__sallePopin--on") && document.querySelector(".galerie__sallePopin--on").classList.remove("galerie__sallePopin--on"),
            document.body.classList.remove("pop"),
            window.history.pushState({}, "", "../galerie/")),
            t.preventDefault();
        };
      }
      if (
        (document.querySelector("body.page-template-histoire") &&
        !ki() &&
        (document.addEventListener("wheel", Bi), Bi(), Wr.fromTo(document.querySelectorAll(".date")[0].querySelectorAll("span"), { y: "120%" }, { delay: 1, y: "0%", ease: Ei, stagger: 0.05 })),
        document.querySelector("body.woocommerce .content-area .quantity input.input-text.qty.text") &&
        (function () {
          document.querySelectorAll(".content-area .quantity").forEach(function (t) {
            var e = t.querySelector("input.input-text.qty.text"),
              n = e.getAttribute("min");
            t.querySelector("div.spinner-button#inc-button").addEventListener("click", function () {
              e.value >= n && (e.value++, (t.nextElementSibling.href = "?add-to-cart=" + t.nextElementSibling.dataset.product_id + "&quantity=" + e.value));
            }),
              t.querySelector("div.spinner-button#dec-button").addEventListener("click", function () {
                e.value > n && (e.value--, (t.nextElementSibling.href = "?add-to-cart=" + t.nextElementSibling.dataset.product_id + "&quantity=" + e.value));
              });
          });
          var t = document.querySelector(".value");
          if (t) {
            var e = t.querySelector(".value__input"),
              n = e.getAttribute("min"),
              r = e.getAttribute("step");
            t.querySelector("div.spinner-button#inc-button").addEventListener("click", function () {
              e.value >= n && (e.value = parseFloat(e.value) + parseFloat(r));
            }),
              t.querySelector("div.spinner-button#dec-button").addEventListener("click", function () {
                e.value > n && (e.value = parseFloat(e.value) - parseFloat(r));
              });
          }
        })(),
        document.querySelector("body.woocommerce.slug-cartes-cadeaux") && Ii(),
        document.querySelector("body.woocommerce.tax-product_cat") && Ii(),
        document.querySelector("body.woocommerce .cartOverlay .cartOverlay__qteWrap") &&
        (document.querySelectorAll(".cartOverlay__qteWrap").forEach(function (t) {
          var e = t.querySelector(".cartOverlay__input"),
            n = e.getAttribute("min");
          t.querySelector(".cartOverlay__plus").addEventListener("click", function () {
            if (e.value >= n) {
              e.value++;
              var r = t.parentElement.querySelector(".cartOverlay__shopCartProductName .cartOverlay__name").innerHTML;
              document.querySelectorAll(".cartOverlay__shopCart .woocommerce .cart_item").forEach(function (t) {
                t.querySelector(".product-name a").innerHTML === r && t.querySelector(".product-quantity .quantity .input-text.qty.text").value++;
              });
            }
          }),
            t.querySelector(".cartOverlay__minus").addEventListener("click", function () {
              if (e.value > n) {
                e.value--;
                var r = t.parentElement.querySelector(".cartOverlay__shopCartProductName .cartOverlay__name").innerHTML;
                document.querySelectorAll(".cartOverlay__shopCart .woocommerce .cart_item").forEach(function (t) {
                  t.querySelector(".product-name a").innerHTML === r && t.querySelector(".product-quantity .quantity .input-text.qty.text").value--;
                });
              }
            });
        }),
          document.querySelector(".cartOverlay__majCartButton").addEventListener("click", function () {
            var t = jQuery("[name='update_cart']");
            console.log(t), t.removeAttr("disabled"), t.trigger("click");
          }),
          jQuery(document.body).on("updated_cart_totals", function () {
            var t = document.querySelectorAll(".cartOverlay__shopCart .woocommerce .cart_item .product-name a"),
              e = document.querySelectorAll(".cartOverlay__shopCartProductName .cartOverlay__name");
            t.forEach(function (t) {
              e.forEach(function (e) {
                t.innerHTML === e.innerHTML &&
                (e.parentElement.parentElement.parentElement.parentElement.querySelector(
                  ".cartOverlay__Total .cartOverlay__shopCartTotalPrice span bdi"
                ).innerHTML = t.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(
                  ".cart-collaterals .cart_totals .shop_table .cart-subtotal .woocommerce-Price-amount bdi"
                ).innerHTML);
              });
            }),
              (document.querySelector(".cartOverlay__majCartButton").style.opacity = "0.5");
          })),
        document.querySelector("body.page-template-reservations") &&
        (document.querySelector(".booking__event a").addEventListener("click", function () {
          window.history.pushState({}, "", window.location.href + "pop");
        }),
          (window.onpopstate = function (t) {
            document.querySelector(".popin--booking") &&
            (document.querySelector(".popin--booking:not(.hidden)") && document.querySelector(".popin--booking").classList.add("hidden"),
              document.body.classList.remove("pop"),
              window.history.pushState({}, "", "../reservations/")),
              t.preventDefault();
          })),
          document.querySelector("body.tax-product_cat"))
      ) {
        if (
          (document.querySelector(".carousel__productsWrap") &&
          Ai({
            container: document.querySelector(".carousel__productsWrap"),
            items: 1,
            speed: 700,
            mode: "carousel",
            autoplay: !0,
            controls: !1,
            gutter: 0,
            loop: !1,
            mouseDrag: !0,
            autoplayButtonOutput: !1,
            nav: !0,
            autoplayTimeout: 3500,
            dots: !0,
          }),
            document.querySelector(".see__allergenes"))
        )
          for (e = 0; e < document.querySelectorAll(".see__allergenes").length; e++)
            !(function (t) {
              document.querySelectorAll(".see__allergenes")[t].addEventListener("click", function () {
                document.querySelectorAll(".allergenes")[t].classList.add("allergenes--on");
              });
            })(e);
        if (document.querySelector(".allergenes__close"))
          for (e = 0; e < document.querySelectorAll(".allergenes__close").length; e++)
            !(function (t) {
              document.querySelectorAll(".allergenes__close")[t].addEventListener("click", function () {
                document.querySelectorAll(".allergenes")[t].classList.remove("allergenes--on");
              });
            })(e);
        for (e = 0; e < document.querySelectorAll(".cartOverlay__minus, .cartOverlay__plus").length; e++)
          (i = e),
            document.querySelectorAll(".cartOverlay__minus, .cartOverlay__plus")[i].addEventListener("click", function () {
              document.querySelector(".cartOverlay__majCartButton").style.opacity = 1;
            });
      }
      if (document.querySelector("body.woocommerce-checkout")) {
        !(function () {
          var t = new Date(),
            e = String(t.getDate()).padStart(2, "0"),
            n = String(t.getMonth() + 1).padStart(2, "0"),
            r = t.getHours(),
            i = t.getMinutes(),
            o = t.getFullYear(),
            a = localStorage.getItem("shipping_method");
          if (document.querySelector("#date_livraison"))
            if (-1 !== navigator.userAgent.indexOf("Safari") && -1 === navigator.userAgent.indexOf("Chrome") && -1 === navigator.userAgent.indexOf("Version/14.1") && -1 === navigator.userAgent.indexOf("Version/15")) {
              var s = e + "-" + n + "-" + o;
              document.querySelector("#date_livraison").addEventListener("focusout", function (t) {
                t.target.value < s && (alert("La date choisie est dans le passГ©"), (t.target.value = "")),
                ("2021-12-24" != document.querySelector("#date_livraison").value && "2021-12-31" != document.querySelector("#date_livraison").value) ||
                ((document.querySelector("#slot").innerHTML = '<option value="12h00_16h00">12:00 > 16:00'), document.querySelector("#slot").dispatchEvent(new Event("change")));
                var e = document.querySelectorAll("#slot option");
                s === t.target.value
                  ? e.forEach(function (t) {
                    r > 12 && (("12h00_12h15" !== t.value && "12h15_12h30" !== t.value && "12h30_12h45" !== t.value && "12h45_13h00" !== t.value) || (t.disabled = !0)),
                    r > 13 && (("13h00_13h15" !== t.value && "13h15_13h30" !== t.value && "13h30_13h45" !== t.value) || (t.disabled = !0)),
                    r > 19 && (("19h00_19h15" !== t.value && "19h15_19h30" !== t.value && "19h30_19h45" !== t.value && "19h45_20h00" !== t.value) || (t.disabled = !0)),
                    r > 20 && (("20h00_20h15" !== t.value && "20h15_20h30" !== t.value && "20h30_20h45" !== t.value && "20h45_21h00" !== t.value) || (t.disabled = !0)),
                    20 === r && i >= 45 && (t.disabled = !0),
                    12 === r &&
                    (("12h00_12h15" !== t.value && "12h15_12h30" !== t.value && "12h30_12h45" !== t.value) || (t.disabled = !0),
                    "livraison" === a && "12h45_13h00" === t.value && (t.disabled = !0),
                    i > 15 && ("12h45_13h00" === t.value && (t.disabled = !0), "livraison" === a && "13h00_13h15" === t.value && (t.disabled = !0)),
                    i > 30 && ("13h00_13h15" === t.value && (t.disabled = !0), "livraison" === a && "13h15_13h30" === t.value && (t.disabled = !0)),
                    i > 45 && ("13h15_13h30" === t.value && (t.disabled = !0), "livraison" === a && "13h30_13h45" === t.value && (t.disabled = !0))),
                    13 === r && (("13h00_13h15" !== t.value && "13h15_13h30" !== t.value && "13h30_13h45" !== t.value) || (t.disabled = !0)),
                    19 === r &&
                    (("19h00_19h15" !== t.value && "19h15_19h30" !== t.value && "19h30_19h45" !== t.value) || (t.disabled = !0),
                    "livraison" === a && "19h45_20h00" === t.value && (t.disabled = !0),
                    i > 15 && ("19h45_20h00" === t.value && (t.disabled = !0), "livraison" === a && "20h00_20h15" === t.value && (t.disabled = !0)),
                    i > 30 && ("20h00_20h15" === t.value && (t.disabled = !0), "livraison" === a && "20h15_20h30" === t.value && (t.disabled = !0)),
                    i > 45 && ("20h15_20h30" === t.value && (t.disabled = !0), "livraison" === a && "20h30_20h45" === t.value && (t.disabled = !0))),
                    20 === r &&
                    (("20h00_20h15" !== t.value && "20h15_20h30" !== t.value && "20h30_20h45" !== t.value) || (t.disabled = !0),
                    "livraison" === a && "20h45_21h00" === t.value && (t.disabled = !0),
                    i > 15 && ("20h45_21h00" === t.value && (t.disabled = !0), "livraison" === a && "21hOO_21h15" === t.value && (t.disabled = !0)),
                    i > 30 && ("21hOO_21h15" === t.value && (t.disabled = !0), "livraison" === a && "21h15_21h30" === t.value && (t.disabled = !0)));
                  })
                  : e.forEach(function (t) {
                    t.disabled = !1;
                  });
              });
            } else {
              s = o + "-" + n + "-" + e;
              document.querySelector("#date_livraison").addEventListener("change", function (t) {
                t.target.value < s && (alert("La date choisie est dans le passГ©"), (t.target.value = "")),
                ("2021-12-24" != document.querySelector("#date_livraison").value && "2021-12-31" != document.querySelector("#date_livraison").value) ||
                ((document.querySelector("#slot").innerHTML = '<option value="12h00_16h00">12:00 > 16:00'), document.querySelector("#slot").dispatchEvent(new Event("change")));
                var e = document.querySelectorAll("#slot option");
                s === t.target.value
                  ? e.forEach(function (t) {
                    r > 12 && (("12h00_12h15" !== t.value && "12h15_12h30" !== t.value && "12h30_12h45" !== t.value && "12h45_13h00" !== t.value) || (t.disabled = !0)),
                    r > 13 && (("13h00_13h15" !== t.value && "13h15_13h30" !== t.value && "13h30_13h45" !== t.value) || (t.disabled = !0)),
                    r > 19 && (("19h00_19h15" !== t.value && "19h15_19h30" !== t.value && "19h30_19h45" !== t.value && "19h45_20h00" !== t.value) || (t.disabled = !0)),
                    r > 20 && (("20h00_20h15" !== t.value && "20h15_20h30" !== t.value && "20h30_20h45" !== t.value && "20h45_21h00" !== t.value) || (t.disabled = !0)),
                    20 === r && i >= 45 && (t.disabled = !0),
                    12 === r &&
                    (("12h00_12h15" !== t.value && "12h15_12h30" !== t.value && "12h30_12h45" !== t.value) || (t.disabled = !0),
                    "livraison" === a && "12h45_13h00" === t.value && (t.disabled = !0),
                    i > 15 && ("12h45_13h00" === t.value && (t.disabled = !0), "livraison" === a && "13h00_13h15" === t.value && (t.disabled = !0)),
                    i > 30 && ("13h00_13h15" === t.value && (t.disabled = !0), "livraison" === a && "13h15_13h30" === t.value && (t.disabled = !0)),
                    i > 45 && ("13h15_13h30" === t.value && (t.disabled = !0), "livraison" === a && "13h30_13h45" === t.value && (t.disabled = !0))),
                    13 === r && (("13h00_13h15" !== t.value && "13h15_13h30" !== t.value && "13h30_13h45" !== t.value) || (t.disabled = !0)),
                    19 === r &&
                    (("19h00_19h15" !== t.value && "19h15_19h30" !== t.value && "19h30_19h45" !== t.value) || (t.disabled = !0),
                    "livraison" === a && "19h45_20h00" === t.value && (t.disabled = !0),
                    i > 15 && ("19h45_20h00" === t.value && (t.disabled = !0), "livraison" === a && "20h00_20h15" === t.value && (t.disabled = !0)),
                    i > 30 && ("20h00_20h15" === t.value && (t.disabled = !0), "livraison" === a && "20h15_20h30" === t.value && (t.disabled = !0)),
                    i > 45 && ("20h15_20h30" === t.value && (t.disabled = !0), "livraison" === a && "20h30_20h45" === t.value && (t.disabled = !0))),
                    20 === r &&
                    (("20h00_20h15" !== t.value && "20h15_20h30" !== t.value && "20h30_20h45" !== t.value) || (t.disabled = !0),
                    "livraison" === a && "20h45_21h00" === t.value && (t.disabled = !0),
                    i > 15 && ("20h45_21h00" === t.value && (t.disabled = !0), "livraison" === a && "21hOO_21h15" === t.value && (t.disabled = !0)),
                    i > 30 && ("21hOO_21h15" === t.value && (t.disabled = !0), "livraison" === a && "21h15_21h30" === t.value && (t.disabled = !0)));
                  })
                  : e.forEach(function (t) {
                    t.disabled = !1;
                  });
              });
            }
        })(),
          (o = {
            Aucamville: "FR01",
            Aussonne: "FR02",
            "Auzeville Tolosane": "FR03",
            Auzielle: "FR04",
            Balma: "FR05",
            Beauzelle: "FR06",
            Blagnac: "FR07",
            "Castanet tolosan": "FR08",
            Castelginest: "FR09",
            Colomiers: "FR10",
            Cornebarrieu: "FR11",
            Cugnaux: "FR12",
            Fenouillet: "FR13",
            Flourens: "FR14",
            Fonbeauzard: "FR15",
            Frouzins: "FR16",
            LabГЁge: "FR17",
            "Lacroix Falgarde": "FR18",
            Launaguet: "FR19",
            "L'Union": "FR20",
            Mervilla: "FR21",
            Mons: "FR22",
            "MontrabГ©": "FR23",
            Pechbusque: "FR24",
            Pibrac: "FR25",
            "Pin Balma": "FR26",
            Pinsaguel: "FR27",
            "Plaisance du touch": "FR28",
            "Portet sur Garonne": "FR29",
            "Ramonville St Agne": "FR30",
            "Roques sur Garonne": "FR31",
            "Saint Orens de Gameville": "FR32",
            Seilh: "FR33",
            "St Alban": "FR34",
            "St GeniГЁs Bellevue": "FR35",
            "St Jean": "FR36",
            Toulouse: "FR37",
            Tournefeuille: "FR38",
            "Vieille Toulouse": "FR39",
            "Villeneuve Tolosane": "FR40",
          }),
          (a = new google.maps.places.Autocomplete(document.getElementById("billing_address_1"), {})).setFields(["address_components"]),
          a.addListener("place_changed", function () {
            var t = a.getPlace();
            if (t.address_components) {
              for (var e = t.address_components[0].short_name, n = t.address_components[1].short_name, i = 0, s = Object.entries(o); i < s.length; i++) {
                var u = r(s[i], 2),
                  l = u[0],
                  c = u[1];
                if (l === t.address_components[2].short_name)
                  var d = c,
                    h = l;
              }
              var f = t.address_components[6].short_name;
              (document.getElementById("billing_address_1").value = e + " " + n),
                (document.getElementById("billing_state").value = d),
                (document.querySelector(".woocommerce-checkout #billing_state_field>span").dataset.replicatedValue = h),
                (document.getElementById("billing_postcode").value = f);
            }
          }),
        document.querySelector(".checkoutLogin") &&
        document.querySelector(".checkoutLogin").addEventListener("click", function () {
          Li(document.querySelector("a.showlogin"));
        }),
        document.querySelector(".checkoutFacebook") &&
        document.querySelector(".checkoutFacebook").addEventListener("click", function () {
          Li(document.querySelector(".button-social-login-facebook"));
        }),
        document.querySelector(".checkoutGoogle") &&
        document.querySelector(".checkoutGoogle").addEventListener("click", function () {
          Li(document.querySelector(".button-social-login-google"));
        }),
        document.querySelector("#slot_field .woocommerce-input-wrapper") && (document.querySelector("#slot_field .woocommerce-input-wrapper").dataset.replicatedValue = "-- Choisir --"),
        document.querySelector("#slot_field .woocommerce-input-wrapper select") &&
        document.querySelector("#slot_field .woocommerce-input-wrapper select").addEventListener("load", function () {
          alert("ok"), (this.parentNode.dataset.replicatedValue = this.options[this.selectedIndex].textContent);
        }),
        document.querySelector("#slot_field .woocommerce-input-wrapper select") &&
        document.querySelector("#slot_field .woocommerce-input-wrapper select").addEventListener("change", function () {
          this.parentNode.dataset.replicatedValue = this.options[this.selectedIndex].textContent;
        });
        var s = document.getElementById("billing_state");
        (document.querySelector(".woocommerce-checkout #billing_state_field span").dataset.replicatedValue = s ? s.options[s.selectedIndex].text : "-- Choisir --"),
        document.querySelector(".woocommerce-checkout #billing_state_field select") &&
        document.querySelector(".woocommerce-checkout #billing_state_field select").addEventListener("change", function () {
          this.parentNode.dataset.replicatedValue = this.options[this.selectedIndex].textContent;
        });
      }
      document.querySelector(".burger").addEventListener("click", function () {
        document.querySelector(".siteHeader").classList.add("siteHeader--on");
      }),
        document.querySelector(".siteHeader__close").addEventListener("click", function () {
          document.querySelector(".siteHeader").classList.contains("siteHeader--on")
            ? document.querySelector(".siteHeader").classList.remove("siteHeader--on")
            : document.querySelector(".siteHeader").classList.add("siteHeader--on");
        });
    });
})();

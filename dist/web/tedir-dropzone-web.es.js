function Vt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const Is = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", $s = /* @__PURE__ */ Vt(Is);
function br(e) {
  return !!e || e === "";
}
function mo(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = te(o) ? Zs(o) : mo(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else {
    if (te(e))
      return e;
    if (z(e))
      return e;
  }
}
const As = /;(?![^(]*\))/g, Fs = /:(.+)/;
function Zs(e) {
  const t = {};
  return e.split(As).forEach((n) => {
    if (n) {
      const o = n.split(Fs);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function mn(e) {
  let t = "";
  if (te(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const o = mn(e[n]);
      o && (t += o + " ");
    }
  else if (z(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const B = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Nt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], oe = () => {
}, Nr = () => !1, Ps = /^on[^a-z]/, Kt = (e) => Ps.test(e), cn = (e) => e.startsWith("onUpdate:"), J = Object.assign, go = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ms = Object.prototype.hasOwnProperty, Z = (e, t) => Ms.call(e, t), I = Array.isArray, yt = (e) => gn(e) === "[object Map]", Rs = (e) => gn(e) === "[object Set]", A = (e) => typeof e == "function", te = (e) => typeof e == "string", _o = (e) => typeof e == "symbol", z = (e) => e !== null && typeof e == "object", vo = (e) => z(e) && A(e.then) && A(e.catch), Ss = Object.prototype.toString, gn = (e) => Ss.call(e), Eo = (e) => gn(e).slice(8, -1), js = (e) => gn(e) === "[object Object]", bo = (e) => te(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, nn = /* @__PURE__ */ Vt(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Bs = /* @__PURE__ */ Vt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), _n = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ls = /-(\w)/g, ze = _n((e) => e.replace(Ls, (t, n) => n ? n.toUpperCase() : "")), ks = /\B([A-Z])/g, Ne = _n((e) => e.replace(ks, "-$1").toLowerCase()), vn = _n((e) => e.charAt(0).toUpperCase() + e.slice(1)), Qe = _n((e) => e ? `on${vn(e)}` : ""), jt = (e, t) => !Object.is(e, t), It = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, fn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Kn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Lo;
const yr = () => Lo || (Lo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function zn(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ve;
class Hs {
  constructor(t = !1) {
    this.active = !0, this.effects = [], this.cleanups = [], !t && Ve && (this.parent = Ve, this.index = (Ve.scopes || (Ve.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = Ve;
      try {
        return Ve = this, t();
      } finally {
        Ve = n;
      }
    } else
      process.env.NODE_ENV !== "production" && zn("cannot run an inactive effect scope.");
  }
  on() {
    Ve = this;
  }
  off() {
    Ve = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.active = !1;
    }
  }
}
function Ws(e, t = Ve) {
  t && t.active && t.effects.push(e);
}
const Bt = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Or = (e) => (e.w & qe) > 0, wr = (e) => (e.n & qe) > 0, Us = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= qe;
}, Ks = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      Or(r) && !wr(r) ? r.delete(e) : t[n++] = r, r.w &= ~qe, r.n &= ~qe;
    }
    t.length = n;
  }
}, qn = /* @__PURE__ */ new WeakMap();
let Ft = 0, qe = 1;
const Yn = 30;
let ae;
const st = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Jn = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class No {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Ws(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = ae, n = Ke;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = ae, ae = this, Ke = !0, qe = 1 << ++Ft, Ft <= Yn ? Us(this) : ko(this), this.fn();
    } finally {
      Ft <= Yn && Ks(this), qe = 1 << --Ft, ae = this.parent, Ke = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ae === this ? this.deferStop = !0 : this.active && (ko(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function ko(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Ke = !0;
const xr = [];
function dt() {
  xr.push(Ke), Ke = !1;
}
function pt() {
  const e = xr.pop();
  Ke = e === void 0 ? !0 : e;
}
function me(e, t, n) {
  if (Ke && ae) {
    let o = qn.get(e);
    o || qn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Bt());
    const s = process.env.NODE_ENV !== "production" ? { effect: ae, target: e, type: t, key: n } : void 0;
    Xn(r, s);
  }
}
function Xn(e, t) {
  let n = !1;
  Ft <= Yn ? wr(e) || (e.n |= qe, n = !Or(e)) : n = !e.has(ae), n && (e.add(ae), ae.deps.push(e), process.env.NODE_ENV !== "production" && ae.onTrack && ae.onTrack(Object.assign({ effect: ae }, t)));
}
function Re(e, t, n, o, r, s) {
  const i = qn.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && I(e))
    i.forEach((u, p) => {
      (p === "length" || p >= o) && c.push(u);
    });
  else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        I(e) ? bo(n) && c.push(i.get("length")) : (c.push(i.get(st)), yt(e) && c.push(i.get(Jn)));
        break;
      case "delete":
        I(e) || (c.push(i.get(st)), yt(e) && c.push(i.get(Jn)));
        break;
      case "set":
        yt(e) && c.push(i.get(st));
        break;
    }
  const f = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (c.length === 1)
    c[0] && (process.env.NODE_ENV !== "production" ? vt(c[0], f) : vt(c[0]));
  else {
    const u = [];
    for (const p of c)
      p && u.push(...p);
    process.env.NODE_ENV !== "production" ? vt(Bt(u), f) : vt(Bt(u));
  }
}
function vt(e, t) {
  const n = I(e) ? e : [...e];
  for (const o of n)
    o.computed && Ho(o, t);
  for (const o of n)
    o.computed || Ho(o, t);
}
function Ho(e, t) {
  (e !== ae || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(J({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const zs = /* @__PURE__ */ Vt("__proto__,__v_isRef,__isVue"), Dr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_o)
), qs = /* @__PURE__ */ En(), Ys = /* @__PURE__ */ En(!1, !0), Js = /* @__PURE__ */ En(!0), Xs = /* @__PURE__ */ En(!0, !0), Wo = /* @__PURE__ */ Qs();
function Qs() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = F(this);
      for (let s = 0, i = this.length; s < i; s++)
        me(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(F)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      dt();
      const o = F(this)[t].apply(this, n);
      return pt(), o;
    };
  }), e;
}
function En(e = !1, t = !1) {
  return function(o, r, s) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && s === (e ? t ? Zr : Fr : t ? Ar : $r).get(o))
      return o;
    const i = I(o);
    if (!e && i && Z(Wo, r))
      return Reflect.get(Wo, r, s);
    const c = Reflect.get(o, r, s);
    return (_o(r) ? Dr.has(r) : zs(r)) || (e || me(o, "get", r), t) ? c : ee(c) ? i && bo(r) ? c : c.value : z(c) ? e ? Pr(c) : Oo(c) : c;
  };
}
const Gs = /* @__PURE__ */ Vr(), ei = /* @__PURE__ */ Vr(!0);
function Vr(e = !1) {
  return function(n, o, r, s) {
    let i = n[o];
    if (Ye(i) && ee(i) && !ee(r))
      return !1;
    if (!e && (!an(r) && !Ye(r) && (i = F(i), r = F(r)), !I(n) && ee(i) && !ee(r)))
      return i.value = r, !0;
    const c = I(n) && bo(o) ? Number(o) < n.length : Z(n, o), f = Reflect.set(n, o, r, s);
    return n === F(s) && (c ? jt(r, i) && Re(n, "set", o, r, i) : Re(n, "add", o, r)), f;
  };
}
function ti(e, t) {
  const n = Z(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && Re(e, "delete", t, void 0, o), r;
}
function ni(e, t) {
  const n = Reflect.has(e, t);
  return (!_o(t) || !Dr.has(t)) && me(e, "has", t), n;
}
function oi(e) {
  return me(e, "iterate", I(e) ? "length" : st), Reflect.ownKeys(e);
}
const Cr = {
  get: qs,
  set: Gs,
  deleteProperty: ti,
  has: ni,
  ownKeys: oi
}, Tr = {
  get: Js,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && zn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && zn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, ri = /* @__PURE__ */ J({}, Cr, {
  get: Ys,
  set: ei
}), si = /* @__PURE__ */ J({}, Tr, {
  get: Xs
}), yo = (e) => e, bn = (e) => Reflect.getPrototypeOf(e);
function Xt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = F(e), s = F(t);
  n || (t !== s && me(r, "get", t), me(r, "get", s));
  const { has: i } = bn(r), c = o ? yo : n ? wo : Lt;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, s))
    return c(e.get(s));
  e !== r && e.get(t);
}
function Qt(e, t = !1) {
  const n = this.__v_raw, o = F(n), r = F(e);
  return t || (e !== r && me(o, "has", e), me(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Gt(e, t = !1) {
  return e = e.__v_raw, !t && me(F(e), "iterate", st), Reflect.get(e, "size", e);
}
function Uo(e) {
  e = F(e);
  const t = F(this);
  return bn(t).has.call(t, e) || (t.add(e), Re(t, "add", e, e)), this;
}
function Ko(e, t) {
  t = F(t);
  const n = F(this), { has: o, get: r } = bn(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && Ir(n, o, e) : (e = F(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? jt(t, i) && Re(n, "set", e, t, i) : Re(n, "add", e, t), this;
}
function zo(e) {
  const t = F(this), { has: n, get: o } = bn(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && Ir(t, n, e) : (e = F(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && Re(t, "delete", e, void 0, s), i;
}
function qo() {
  const e = F(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? yt(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Re(e, "clear", void 0, void 0, n), o;
}
function en(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, c = F(i), f = t ? yo : e ? wo : Lt;
    return !e && me(c, "iterate", st), i.forEach((u, p) => o.call(r, f(u), f(p), s));
  };
}
function tn(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = F(r), i = yt(s), c = e === "entries" || e === Symbol.iterator && i, f = e === "keys" && i, u = r[e](...o), p = n ? yo : t ? wo : Lt;
    return !t && me(s, "iterate", f ? Jn : st), {
      next() {
        const { value: d, done: g } = u.next();
        return g ? { value: d, done: g } : {
          value: c ? [p(d[0]), p(d[1])] : p(d),
          done: g
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ke(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${vn(e)} operation ${n}failed: target is readonly.`, F(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function ii() {
  const e = {
    get(s) {
      return Xt(this, s);
    },
    get size() {
      return Gt(this);
    },
    has: Qt,
    add: Uo,
    set: Ko,
    delete: zo,
    clear: qo,
    forEach: en(!1, !1)
  }, t = {
    get(s) {
      return Xt(this, s, !1, !0);
    },
    get size() {
      return Gt(this);
    },
    has: Qt,
    add: Uo,
    set: Ko,
    delete: zo,
    clear: qo,
    forEach: en(!1, !0)
  }, n = {
    get(s) {
      return Xt(this, s, !0);
    },
    get size() {
      return Gt(this, !0);
    },
    has(s) {
      return Qt.call(this, s, !0);
    },
    add: ke("add"),
    set: ke("set"),
    delete: ke("delete"),
    clear: ke("clear"),
    forEach: en(!0, !1)
  }, o = {
    get(s) {
      return Xt(this, s, !0, !0);
    },
    get size() {
      return Gt(this, !0);
    },
    has(s) {
      return Qt.call(this, s, !0);
    },
    add: ke("add"),
    set: ke("set"),
    delete: ke("delete"),
    clear: ke("clear"),
    forEach: en(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = tn(s, !1, !1), n[s] = tn(s, !0, !1), t[s] = tn(s, !1, !0), o[s] = tn(s, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [li, ci, fi, ai] = /* @__PURE__ */ ii();
function Nn(e, t) {
  const n = t ? e ? ai : fi : e ? ci : li;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(Z(n, r) && r in o ? n : o, r, s);
}
const ui = {
  get: /* @__PURE__ */ Nn(!1, !1)
}, di = {
  get: /* @__PURE__ */ Nn(!1, !0)
}, pi = {
  get: /* @__PURE__ */ Nn(!0, !1)
}, hi = {
  get: /* @__PURE__ */ Nn(!0, !0)
};
function Ir(e, t, n) {
  const o = F(n);
  if (o !== n && t.call(e, o)) {
    const r = Eo(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const $r = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap(), Fr = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ new WeakMap();
function mi(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function gi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : mi(Eo(e));
}
function Oo(e) {
  return Ye(e) ? e : yn(e, !1, Cr, ui, $r);
}
function _i(e) {
  return yn(e, !1, ri, di, Ar);
}
function Pr(e) {
  return yn(e, !0, Tr, pi, Fr);
}
function Et(e) {
  return yn(e, !0, si, hi, Zr);
}
function yn(e, t, n, o, r) {
  if (!z(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = gi(e);
  if (i === 0)
    return e;
  const c = new Proxy(e, i === 2 ? o : n);
  return r.set(e, c), c;
}
function it(e) {
  return Ye(e) ? it(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ye(e) {
  return !!(e && e.__v_isReadonly);
}
function an(e) {
  return !!(e && e.__v_isShallow);
}
function Qn(e) {
  return it(e) || Ye(e);
}
function F(e) {
  const t = e && e.__v_raw;
  return t ? F(t) : e;
}
function Mr(e) {
  return fn(e, "__v_skip", !0), e;
}
const Lt = (e) => z(e) ? Oo(e) : e, wo = (e) => z(e) ? Pr(e) : e;
function Rr(e) {
  Ke && ae && (e = F(e), process.env.NODE_ENV !== "production" ? Xn(e.dep || (e.dep = Bt()), {
    target: e,
    type: "get",
    key: "value"
  }) : Xn(e.dep || (e.dep = Bt())));
}
function Sr(e, t) {
  e = F(e), e.dep && (process.env.NODE_ENV !== "production" ? vt(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : vt(e.dep));
}
function ee(e) {
  return !!(e && e.__v_isRef === !0);
}
function wt(e) {
  return vi(e, !1);
}
function vi(e, t) {
  return ee(e) ? e : new Ei(e, t);
}
class Ei {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : F(t), this._value = n ? t : Lt(t);
  }
  get value() {
    return Rr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || an(t) || Ye(t);
    t = n ? t : F(t), jt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Lt(t), Sr(this, t));
  }
}
function at(e) {
  return ee(e) ? e.value : e;
}
const bi = {
  get: (e, t, n) => at(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return ee(r) && !ee(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function jr(e) {
  return it(e) ? e : new Proxy(e, bi);
}
var Br;
class Ni {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Br] = !1, this._dirty = !0, this.effect = new No(t, () => {
      this._dirty || (this._dirty = !0, Sr(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = F(this);
    return Rr(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Br = "__v_isReadonly";
function yi(e, t, n = !1) {
  let o, r;
  const s = A(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : oe) : (o = e.get, r = e.set);
  const i = new Ni(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const lt = [];
function on(e) {
  lt.push(e);
}
function rn() {
  lt.pop();
}
function y(e, ...t) {
  dt();
  const n = lt.length ? lt[lt.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = Oi();
  if (o)
    Pe(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: s }) => `at <${Fn(n, s.type)}>`).join(`
`),
      r
    ]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...wi(r)), console.warn(...s);
  }
  pt();
}
function Oi() {
  let e = lt[lt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function wi(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...xi(n));
  }), t;
}
function xi({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Fn(e.component, e.type, o)}`, s = ">" + n;
  return e.props ? [r, ...Di(e.props), s] : [r + s];
}
function Di(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Lr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Lr(e, t, n) {
  return te(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ee(t) ? (t = Lr(e, F(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : A(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = F(t), n ? t : [`${e}=`, t]);
}
const xo = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Pe(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    On(s, t, n);
  }
  return r;
}
function _e(e, t, n, o) {
  if (A(e)) {
    const s = Pe(e, t, n, o);
    return s && vo(s) && s.catch((i) => {
      On(i, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(_e(e[s], t, n, o));
  return r;
}
function On(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? xo[n] : n;
    for (; s; ) {
      const u = s.ec;
      if (u) {
        for (let p = 0; p < u.length; p++)
          if (u[p](e, i, c) === !1)
            return;
      }
      s = s.parent;
    }
    const f = t.appContext.config.errorHandler;
    if (f) {
      Pe(f, null, 10, [e, i, c]);
      return;
    }
  }
  Vi(e, n, r, o);
}
function Vi(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = xo[t];
    if (n && on(n), y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && rn(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let kt = !1, Gn = !1;
const ie = [];
let Te = 0;
const Ot = [];
let Ce = null, He = 0;
const kr = /* @__PURE__ */ Promise.resolve();
let Do = null;
const Ci = 100;
function Hr(e) {
  const t = Do || kr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ti(e) {
  let t = Te + 1, n = ie.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    Ht(ie[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function wn(e) {
  (!ie.length || !ie.includes(e, kt && e.allowRecurse ? Te + 1 : Te)) && (e.id == null ? ie.push(e) : ie.splice(Ti(e.id), 0, e), Wr());
}
function Wr() {
  !kt && !Gn && (Gn = !0, Do = kr.then(zr));
}
function Ii(e) {
  const t = ie.indexOf(e);
  t > Te && ie.splice(t, 1);
}
function Ur(e) {
  I(e) ? Ot.push(...e) : (!Ce || !Ce.includes(e, e.allowRecurse ? He + 1 : He)) && Ot.push(e), Wr();
}
function Yo(e, t = kt ? Te + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < ie.length; t++) {
    const n = ie[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && Vo(e, n))
        continue;
      ie.splice(t, 1), t--, n();
    }
  }
}
function Kr(e) {
  if (Ot.length) {
    const t = [...new Set(Ot)];
    if (Ot.length = 0, Ce) {
      Ce.push(...t);
      return;
    }
    for (Ce = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ce.sort((n, o) => Ht(n) - Ht(o)), He = 0; He < Ce.length; He++)
      process.env.NODE_ENV !== "production" && Vo(e, Ce[He]) || Ce[He]();
    Ce = null, He = 0;
  }
}
const Ht = (e) => e.id == null ? 1 / 0 : e.id, $i = (e, t) => {
  const n = Ht(e) - Ht(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function zr(e) {
  Gn = !1, kt = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ie.sort($i);
  const t = process.env.NODE_ENV !== "production" ? (n) => Vo(e, n) : oe;
  try {
    for (Te = 0; Te < ie.length; Te++) {
      const n = ie[Te];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Pe(n, null, 14);
      }
    }
  } finally {
    Te = 0, ie.length = 0, Kr(e), kt = !1, Do = null, (ie.length || Ot.length) && zr(e);
  }
}
function Vo(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Ci) {
      const o = t.ownerInstance, r = o && xs(o.type);
      return y(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let ct = !1;
const _t = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (yr().__VUE_HMR_RUNTIME__ = {
  createRecord: jn(qr),
  rerender: jn(Zi),
  reload: jn(Pi)
});
const ut = /* @__PURE__ */ new Map();
function Ai(e) {
  const t = e.type.__hmrId;
  let n = ut.get(t);
  n || (qr(t, e.type), n = ut.get(t)), n.instances.add(e);
}
function Fi(e) {
  ut.get(e.type.__hmrId).instances.delete(e);
}
function qr(e, t) {
  return ut.has(e) ? !1 : (ut.set(e, {
    initialDef: Pt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Pt(e) {
  return Ds(e) ? e.__vccOpts : e;
}
function Zi(e, t) {
  const n = ut.get(e);
  !n || (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Pt(o.type).render = t), o.renderCache = [], ct = !0, o.update(), ct = !1;
  }));
}
function Pi(e, t) {
  const n = ut.get(e);
  if (!n)
    return;
  t = Pt(t), Jo(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = Pt(r.type);
    _t.has(s) || (s !== n.initialDef && Jo(s, t), _t.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (_t.add(s), r.ceReload(t.styles), _t.delete(s)) : r.parent ? (wn(r.parent.update), r.parent.type.__asyncLoader && r.parent.ceReload && r.parent.ceReload(t.styles)) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Ur(() => {
    for (const r of o)
      _t.delete(Pt(r.type));
  });
}
function Jo(e, t) {
  J(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function jn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let et, Zt = [], eo = !1;
function zt(e, ...t) {
  et ? et.emit(e, ...t) : eo || Zt.push({ event: e, args: t });
}
function Yr(e, t) {
  var n, o;
  et = e, et ? (et.enabled = !0, Zt.forEach(({ event: r, args: s }) => et.emit(r, ...s)), Zt = []) : typeof window < "u" && window.HTMLElement && !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Yr(s, t);
  }), setTimeout(() => {
    et || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, eo = !0, Zt = []);
  }, 3e3)) : (eo = !0, Zt = []);
}
function Mi(e, t) {
  zt("app:init", e, t, {
    Fragment: he,
    Text: Tn,
    Comment: le,
    Static: Rt
  });
}
function Ri(e) {
  zt("app:unmount", e);
}
const Si = /* @__PURE__ */ Co("component:added"), Jr = /* @__PURE__ */ Co("component:updated"), ji = /* @__PURE__ */ Co("component:removed");
function Co(e) {
  return (t) => {
    zt(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const Bi = /* @__PURE__ */ Xr("perf:start"), Li = /* @__PURE__ */ Xr("perf:end");
function Xr(e) {
  return (t, n, o) => {
    zt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function ki(e, t, n) {
  zt("component:emit", e.appContext.app, e, t, n);
}
function Hi(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || B;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: p, propsOptions: [d] } = e;
    if (p)
      if (!(t in p))
        (!d || !(Qe(t) in d)) && y(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Qe(t)}" prop.`);
      else {
        const g = p[t];
        A(g) && (g(...n) || y(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && t.slice(7);
  if (i && i in o) {
    const p = `${i === "modelValue" ? "model" : i}Modifiers`, { number: d, trim: g } = o[p] || B;
    g && (r = n.map((x) => x.trim())), d && (r = n.map(Kn));
  }
  if (process.env.NODE_ENV !== "production" && ki(e, t, r), process.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[Qe(p)] && y(`Event "${p}" is emitted in component ${Fn(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ne(t)}" instead of "${t}".`);
  }
  let c, f = o[c = Qe(t)] || o[c = Qe(ze(t))];
  !f && s && (f = o[c = Qe(Ne(t))]), f && _e(f, e, 6, r);
  const u = o[c + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, _e(u, e, 6, r);
  }
}
function Qr(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, c = !1;
  if (!A(e)) {
    const f = (u) => {
      const p = Qr(u, t, !0);
      p && (c = !0, J(i, p));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !s && !c ? (z(e) && o.set(e, null), null) : (I(s) ? s.forEach((f) => i[f] = null) : J(i, s), z(e) && o.set(e, i), i);
}
function xn(e, t) {
  return !e || !Kt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Z(e, t[0].toLowerCase() + t.slice(1)) || Z(e, Ne(t)) || Z(e, t));
}
let re = null, Dn = null;
function un(e) {
  const t = re;
  return re = e, Dn = e && e.type.__scopeId || null, t;
}
function Wi(e) {
  Dn = e;
}
function Ui() {
  Dn = null;
}
function Ki(e, t = re, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && cr(-1);
    const s = un(t), i = e(...r);
    return un(s), o._d && cr(1), process.env.NODE_ENV !== "production" && Jr(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let to = !1;
function dn() {
  to = !0;
}
function Bn(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: s, propsOptions: [i], slots: c, attrs: f, emit: u, render: p, renderCache: d, data: g, setupState: x, ctx: T, inheritAttrs: C } = e;
  let W, L;
  const j = un(e);
  process.env.NODE_ENV !== "production" && (to = !1);
  try {
    if (n.shapeFlag & 4) {
      const K = r || o;
      W = Ee(p.call(K, K, d, s, x, g, T)), L = f;
    } else {
      const K = t;
      process.env.NODE_ENV !== "production" && f === s && dn(), W = Ee(K.length > 1 ? K(s, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return dn(), f;
        },
        slots: c,
        emit: u
      } : { attrs: f, slots: c, emit: u }) : K(s, null)), L = t.props ? f : qi(f);
    }
  } catch (K) {
    St.length = 0, On(K, e, 1), W = ye(le);
  }
  let q = W, ue;
  if (process.env.NODE_ENV !== "production" && W.patchFlag > 0 && W.patchFlag & 2048 && ([q, ue] = zi(W)), L && C !== !1) {
    const K = Object.keys(L), { shapeFlag: je } = q;
    if (K.length) {
      if (je & 7)
        i && K.some(cn) && (L = Yi(L, i)), q = Ie(q, L);
      else if (process.env.NODE_ENV !== "production" && !to && q.type !== le) {
        const Oe = Object.keys(f), P = [], U = [];
        for (let Y = 0, se = Oe.length; Y < se; Y++) {
          const ne = Oe[Y];
          Kt(ne) ? cn(ne) || P.push(ne[2].toLowerCase() + ne.slice(3)) : U.push(ne);
        }
        U.length && y(`Extraneous non-props attributes (${U.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), P.length && y(`Extraneous non-emits event listeners (${P.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Xo(q) && y("Runtime directive used on component with non-element root node. The directives will not function as intended."), q = Ie(q), q.dirs = q.dirs ? q.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Xo(q) && y("Component inside <Transition> renders non-element root node that cannot be animated."), q.transition = n.transition), process.env.NODE_ENV !== "production" && ue ? ue(q) : W = q, un(j), W;
}
const zi = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Gr(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (c) => {
    t[r] = c, n && (s > -1 ? n[s] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [Ee(o), i];
};
function Gr(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (In(o)) {
      if (o.type !== le || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const qi = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Kt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Yi = (e, t) => {
  const n = {};
  for (const o in e)
    (!cn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Xo = (e) => e.shapeFlag & 7 || e.type === le;
function Ji(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: c, patchFlag: f } = t, u = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || c) && ct || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? Qo(o, i, u) : !!i;
    if (f & 8) {
      const p = t.dynamicProps;
      for (let d = 0; d < p.length; d++) {
        const g = p[d];
        if (i[g] !== o[g] && !xn(u, g))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : o === i ? !1 : o ? i ? Qo(o, i, u) : !0 : !!i;
  return !1;
}
function Qo(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !xn(n, s))
      return !0;
  }
  return !1;
}
function Xi({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Qi = (e) => e.__isSuspense;
function Gi(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : Ur(e);
}
function el(e, t) {
  if (!G)
    process.env.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = G.provides;
    const o = G.parent && G.parent.provides;
    o === n && (n = G.provides = Object.create(o)), n[e] = t;
  }
}
function Ln(e, t, n = !1) {
  const o = G || re;
  if (o) {
    const r = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && A(t) ? t.call(o.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const Go = {};
function kn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !A(t) && y("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), es(e, t, n);
}
function es(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = B) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && y('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && y('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const c = (j) => {
    y("Invalid watch source: ", j, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, f = G;
  let u, p = !1, d = !1;
  if (ee(e) ? (u = () => e.value, p = an(e)) : it(e) ? (u = () => e, o = !0) : I(e) ? (d = !0, p = e.some((j) => it(j) || an(j)), u = () => e.map((j) => {
    if (ee(j))
      return j.value;
    if (it(j))
      return ot(j);
    if (A(j))
      return Pe(j, f, 2);
    process.env.NODE_ENV !== "production" && c(j);
  })) : A(e) ? t ? u = () => Pe(e, f, 2) : u = () => {
    if (!(f && f.isUnmounted))
      return g && g(), _e(e, f, 3, [x]);
  } : (u = oe, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const j = u;
    u = () => ot(j());
  }
  let g, x = (j) => {
    g = L.onStop = () => {
      Pe(j, f, 4);
    };
  };
  if (Ut)
    return x = oe, t ? n && _e(t, f, 3, [
      u(),
      d ? [] : void 0,
      x
    ]) : u(), oe;
  let T = d ? [] : Go;
  const C = () => {
    if (!!L.active)
      if (t) {
        const j = L.run();
        (o || p || (d ? j.some((q, ue) => jt(q, T[ue])) : jt(j, T))) && (g && g(), _e(t, f, 3, [
          j,
          T === Go ? void 0 : T,
          x
        ]), T = j);
      } else
        L.run();
  };
  C.allowRecurse = !!t;
  let W;
  r === "sync" ? W = C : r === "post" ? W = () => pe(C, f && f.suspense) : (C.pre = !0, f && (C.id = f.uid), W = () => wn(C));
  const L = new No(u, W);
  return process.env.NODE_ENV !== "production" && (L.onTrack = s, L.onTrigger = i), t ? n ? C() : T = L.run() : r === "post" ? pe(L.run.bind(L), f && f.suspense) : L.run(), () => {
    L.stop(), f && f.scope && go(f.scope.effects, L);
  };
}
function tl(e, t, n) {
  const o = this.proxy, r = te(e) ? e.includes(".") ? ts(o, e) : () => o[e] : e.bind(o, o);
  let s;
  A(t) ? s = t : (s = t.handler, n = t);
  const i = G;
  Dt(this);
  const c = es(r, s.bind(o), n);
  return i ? Dt(i) : ft(), c;
}
function ts(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function ot(e, t) {
  if (!z(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), ee(e))
    ot(e.value, t);
  else if (I(e))
    for (let n = 0; n < e.length; n++)
      ot(e[n], t);
  else if (Rs(e) || yt(e))
    e.forEach((n) => {
      ot(n, t);
    });
  else if (js(e))
    for (const n in e)
      ot(e[n], t);
  return e;
}
function nl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ss(() => {
    e.isMounted = !0;
  }), is(() => {
    e.isUnmounting = !0;
  }), e;
}
const ge = [Function, Array], ol = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: ge,
    onEnter: ge,
    onAfterEnter: ge,
    onEnterCancelled: ge,
    onBeforeLeave: ge,
    onLeave: ge,
    onAfterLeave: ge,
    onLeaveCancelled: ge,
    onBeforeAppear: ge,
    onAppear: ge,
    onAfterAppear: ge,
    onAppearCancelled: ge
  },
  setup(e, { slots: t }) {
    const n = tc(), o = nl();
    let r;
    return () => {
      const s = t.default && os(t.default(), !0);
      if (!s || !s.length)
        return;
      let i = s[0];
      if (s.length > 1) {
        let C = !1;
        for (const W of s)
          if (W.type !== le) {
            if (process.env.NODE_ENV !== "production" && C) {
              y("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (i = W, C = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const c = F(e), { mode: f } = c;
      if (process.env.NODE_ENV !== "production" && f && f !== "in-out" && f !== "out-in" && f !== "default" && y(`invalid <transition> mode: ${f}`), o.isLeaving)
        return Hn(i);
      const u = er(i);
      if (!u)
        return Hn(i);
      const p = no(u, c, o, n);
      oo(u, p);
      const d = n.subTree, g = d && er(d);
      let x = !1;
      const { getTransitionKey: T } = u.type;
      if (T) {
        const C = T();
        r === void 0 ? r = C : C !== r && (r = C, x = !0);
      }
      if (g && g.type !== le && (!tt(u, g) || x)) {
        const C = no(g, c, o, n);
        if (oo(g, C), f === "out-in")
          return o.isLeaving = !0, C.afterLeave = () => {
            o.isLeaving = !1, n.update();
          }, Hn(i);
        f === "in-out" && u.type !== le && (C.delayLeave = (W, L, j) => {
          const q = ns(o, g);
          q[String(g.key)] = g, W._leaveCb = () => {
            L(), W._leaveCb = void 0, delete p.delayedLeave;
          }, p.delayedLeave = j;
        });
      }
      return i;
    };
  }
}, rl = ol;
function ns(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function no(e, t, n, o) {
  const { appear: r, mode: s, persisted: i = !1, onBeforeEnter: c, onEnter: f, onAfterEnter: u, onEnterCancelled: p, onBeforeLeave: d, onLeave: g, onAfterLeave: x, onLeaveCancelled: T, onBeforeAppear: C, onAppear: W, onAfterAppear: L, onAppearCancelled: j } = t, q = String(e.key), ue = ns(n, e), K = (P, U) => {
    P && _e(P, o, 9, U);
  }, je = (P, U) => {
    const Y = U[1];
    K(P, U), I(P) ? P.every((se) => se.length <= 1) && Y() : P.length <= 1 && Y();
  }, Oe = {
    mode: s,
    persisted: i,
    beforeEnter(P) {
      let U = c;
      if (!n.isMounted)
        if (r)
          U = C || c;
        else
          return;
      P._leaveCb && P._leaveCb(!0);
      const Y = ue[q];
      Y && tt(e, Y) && Y.el._leaveCb && Y.el._leaveCb(), K(U, [P]);
    },
    enter(P) {
      let U = f, Y = u, se = p;
      if (!n.isMounted)
        if (r)
          U = W || f, Y = L || u, se = j || p;
        else
          return;
      let ne = !1;
      const $e = P._enterCb = (Yt) => {
        ne || (ne = !0, Yt ? K(se, [P]) : K(Y, [P]), Oe.delayedLeave && Oe.delayedLeave(), P._enterCb = void 0);
      };
      U ? je(U, [P, $e]) : $e();
    },
    leave(P, U) {
      const Y = String(e.key);
      if (P._enterCb && P._enterCb(!0), n.isUnmounting)
        return U();
      K(d, [P]);
      let se = !1;
      const ne = P._leaveCb = ($e) => {
        se || (se = !0, U(), $e ? K(T, [P]) : K(x, [P]), P._leaveCb = void 0, ue[Y] === e && delete ue[Y]);
      };
      ue[Y] = e, g ? je(g, [P, ne]) : ne();
    },
    clone(P) {
      return no(P, t, n, o);
    }
  };
  return Oe;
}
function Hn(e) {
  if (qt(e))
    return e = Ie(e), e.children = null, e;
}
function er(e) {
  return qt(e) ? e.children ? e.children[0] : void 0 : e;
}
function oo(e, t) {
  e.shapeFlag & 6 && e.component ? oo(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function os(e, t = !1, n) {
  let o = [], r = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const c = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === he ? (i.patchFlag & 128 && r++, o = o.concat(os(i.children, t, c))) : (t || i.type !== le) && o.push(c != null ? Ie(i, { key: c }) : i);
  }
  if (r > 1)
    for (let s = 0; s < o.length; s++)
      o[s].patchFlag = -2;
  return o;
}
function Vn(e) {
  return A(e) ? { setup: e, name: e.name } : e;
}
const Mt = (e) => !!e.type.__asyncLoader, qt = (e) => e.type.__isKeepAlive;
function sl(e, t) {
  rs(e, "a", t);
}
function il(e, t) {
  rs(e, "da", t);
}
function rs(e, t, n = G) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Cn(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      qt(r.parent.vnode) && ll(o, t, n, r), r = r.parent;
  }
}
function ll(e, t, n, o) {
  const r = Cn(t, e, o, !0);
  ls(() => {
    go(o[t], r);
  }, n);
}
function Cn(e, t, n = G, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      dt(), Dt(n);
      const c = _e(t, n, e, i);
      return ft(), pt(), c;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = Qe(xo[e].replace(/ hook$/, ""));
    y(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Se = (e) => (t, n = G) => (!Ut || e === "sp") && Cn(e, (...o) => t(...o), n), cl = Se("bm"), ss = Se("m"), fl = Se("bu"), al = Se("u"), is = Se("bum"), ls = Se("um"), ul = Se("sp"), dl = Se("rtg"), pl = Se("rtc");
function hl(e, t = G) {
  Cn("ec", e, t);
}
function cs(e) {
  Bs(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function ml(e, t) {
  const n = re;
  if (n === null)
    return process.env.NODE_ENV !== "production" && y("withDirectives can only be used inside render functions."), e;
  const o = An(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, c, f, u = B] = t[s];
    A(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && ot(c), r.push({
      dir: i,
      instance: o,
      value: c,
      oldValue: void 0,
      arg: f,
      modifiers: u
    });
  }
  return e;
}
function Je(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    s && (c.oldValue = s[i].value);
    let f = c.dir[o];
    f && (dt(), _e(f, n, 8, [
      e.el,
      c,
      e,
      t
    ]), pt());
  }
}
const gl = Symbol();
function _l(e, t, n = {}, o, r) {
  if (re.isCE || re.parent && Mt(re.parent) && re.parent.isCE)
    return ye("slot", t === "default" ? null : { name: t }, o && o());
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (y("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), s = () => []), s && s._c && (s._d = !1), rt();
  const i = s && fs(s(n)), c = Kl(he, {
    key: n.key || i && i.key || `_${t}`
  }, i || (o ? o() : []), i && e._ === 1 ? 64 : -2);
  return !r && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), s && s._c && (s._d = !0), c;
}
function fs(e) {
  return e.some((t) => In(t) ? !(t.type === le || t.type === he && !fs(t.children)) : !0) ? e : null;
}
const ro = (e) => e ? Os(e) ? An(e) || e.proxy : ro(e.parent) : null, xt = /* @__PURE__ */ J(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? Et(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? Et(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? Et(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? Et(e.refs) : e.refs,
  $parent: (e) => ro(e.parent),
  $root: (e) => ro(e.root),
  $emit: (e) => e.emit,
  $options: (e) => Io(e),
  $forceUpdate: (e) => e.f || (e.f = () => wn(e.update)),
  $nextTick: (e) => e.n || (e.n = Hr.bind(e.proxy)),
  $watch: (e) => tl.bind(e)
}), To = (e) => e === "_" || e === "$", as = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: c, appContext: f } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (process.env.NODE_ENV !== "production" && o !== B && o.__isScriptSetup && Z(o, t))
      return o[t];
    let u;
    if (t[0] !== "$") {
      const x = i[t];
      if (x !== void 0)
        switch (x) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (o !== B && Z(o, t))
          return i[t] = 1, o[t];
        if (r !== B && Z(r, t))
          return i[t] = 2, r[t];
        if ((u = e.propsOptions[0]) && Z(u, t))
          return i[t] = 3, s[t];
        if (n !== B && Z(n, t))
          return i[t] = 4, n[t];
        so && (i[t] = 0);
      }
    }
    const p = xt[t];
    let d, g;
    if (p)
      return t === "$attrs" && (me(e, "get", t), process.env.NODE_ENV !== "production" && dn()), p(e);
    if ((d = c.__cssModules) && (d = d[t]))
      return d;
    if (n !== B && Z(n, t))
      return i[t] = 4, n[t];
    if (g = f.config.globalProperties, Z(g, t))
      return g[t];
    process.env.NODE_ENV !== "production" && re && (!te(t) || t.indexOf("__v") !== 0) && (r !== B && To(t[0]) && Z(r, t) ? y(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === re && y(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return r !== B && Z(r, t) ? (r[t] = n, !0) : o !== B && Z(o, t) ? (o[t] = n, !0) : Z(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`, e), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`, e), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, i) {
    let c;
    return !!n[i] || e !== B && Z(e, i) || t !== B && Z(t, i) || (c = s[0]) && Z(c, i) || Z(o, i) || Z(xt, i) || Z(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Z(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (as.ownKeys = (e) => (y("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function vl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(xt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => xt[n](e),
      set: oe
    });
  }), t;
}
function El(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: oe
    });
  });
}
function bl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(F(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (To(o[0])) {
        y(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: oe
      });
    }
  });
}
function Nl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let so = !0;
function yl(e) {
  const t = Io(e), n = e.proxy, o = e.ctx;
  so = !1, t.beforeCreate && tr(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: s,
    methods: i,
    watch: c,
    provide: f,
    inject: u,
    created: p,
    beforeMount: d,
    mounted: g,
    beforeUpdate: x,
    updated: T,
    activated: C,
    deactivated: W,
    beforeDestroy: L,
    beforeUnmount: j,
    destroyed: q,
    unmounted: ue,
    render: K,
    renderTracked: je,
    renderTriggered: Oe,
    errorCaptured: P,
    serverPrefetch: U,
    expose: Y,
    inheritAttrs: se,
    components: ne,
    directives: $e,
    filters: Yt
  } = t, Be = process.env.NODE_ENV !== "production" ? Nl() : null;
  if (process.env.NODE_ENV !== "production") {
    const [R] = e.propsOptions;
    if (R)
      for (const S in R)
        Be("Props", S);
  }
  if (u && Ol(u, o, Be, e.appContext.config.unwrapInjectedRef), i)
    for (const R in i) {
      const S = i[R];
      A(S) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, R, {
        value: S.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[R] = S.bind(n), process.env.NODE_ENV !== "production" && Be("Methods", R)) : process.env.NODE_ENV !== "production" && y(`Method "${R}" has type "${typeof S}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !A(r) && y("The data option must be a function. Plain object usage is no longer supported.");
    const R = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && vo(R) && y("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !z(R))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = Oo(R), process.env.NODE_ENV !== "production")
      for (const S in R)
        Be("Data", S), To(S[0]) || Object.defineProperty(o, S, {
          configurable: !0,
          enumerable: !0,
          get: () => R[S],
          set: oe
        });
  }
  if (so = !0, s)
    for (const R in s) {
      const S = s[R], we = A(S) ? S.bind(n, n) : A(S.get) ? S.get.bind(n, n) : oe;
      process.env.NODE_ENV !== "production" && we === oe && y(`Computed property "${R}" has no getter.`);
      const Pn = !A(S) && A(S.set) ? S.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(`Write operation failed: computed property "${R}" is readonly.`);
      } : oe, Ct = fc({
        get: we,
        set: Pn
      });
      Object.defineProperty(o, R, {
        enumerable: !0,
        configurable: !0,
        get: () => Ct.value,
        set: (ht) => Ct.value = ht
      }), process.env.NODE_ENV !== "production" && Be("Computed", R);
    }
  if (c)
    for (const R in c)
      us(c[R], o, n, R);
  if (f) {
    const R = A(f) ? f.call(n) : f;
    Reflect.ownKeys(R).forEach((S) => {
      el(S, R[S]);
    });
  }
  p && tr(p, e, "c");
  function de(R, S) {
    I(S) ? S.forEach((we) => R(we.bind(n))) : S && R(S.bind(n));
  }
  if (de(cl, d), de(ss, g), de(fl, x), de(al, T), de(sl, C), de(il, W), de(hl, P), de(pl, je), de(dl, Oe), de(is, j), de(ls, ue), de(ul, U), I(Y))
    if (Y.length) {
      const R = e.exposed || (e.exposed = {});
      Y.forEach((S) => {
        Object.defineProperty(R, S, {
          get: () => n[S],
          set: (we) => n[S] = we
        });
      });
    } else
      e.exposed || (e.exposed = {});
  K && e.render === oe && (e.render = K), se != null && (e.inheritAttrs = se), ne && (e.components = ne), $e && (e.directives = $e);
}
function Ol(e, t, n = oe, o = !1) {
  I(e) && (e = io(e));
  for (const r in e) {
    const s = e[r];
    let i;
    z(s) ? "default" in s ? i = Ln(s.from || r, s.default, !0) : i = Ln(s.from || r) : i = Ln(s), ee(i) ? o ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (c) => i.value = c
    }) : (process.env.NODE_ENV !== "production" && y(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[r] = i) : t[r] = i, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function tr(e, t, n) {
  _e(I(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function us(e, t, n, o) {
  const r = o.includes(".") ? ts(n, o) : () => n[o];
  if (te(e)) {
    const s = t[e];
    A(s) ? kn(r, s) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, s);
  } else if (A(e))
    kn(r, e.bind(n));
  else if (z(e))
    if (I(e))
      e.forEach((s) => us(s, t, n, o));
    else {
      const s = A(e.handler) ? e.handler.bind(n) : t[e.handler];
      A(s) ? kn(r, s, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function Io(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, c = s.get(t);
  let f;
  return c ? f = c : !r.length && !n && !o ? f = t : (f = {}, r.length && r.forEach((u) => pn(f, u, i, !0)), pn(f, t, i)), z(t) && s.set(t, f), f;
}
function pn(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && pn(e, s, n, !0), r && r.forEach((i) => pn(e, i, n, !0));
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && y('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const c = wl[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const wl = {
  data: nr,
  props: Ge,
  emits: Ge,
  methods: Ge,
  computed: Ge,
  beforeCreate: fe,
  created: fe,
  beforeMount: fe,
  mounted: fe,
  beforeUpdate: fe,
  updated: fe,
  beforeDestroy: fe,
  beforeUnmount: fe,
  destroyed: fe,
  unmounted: fe,
  activated: fe,
  deactivated: fe,
  errorCaptured: fe,
  serverPrefetch: fe,
  components: Ge,
  directives: Ge,
  watch: Dl,
  provide: nr,
  inject: xl
};
function nr(e, t) {
  return t ? e ? function() {
    return J(A(e) ? e.call(this, this) : e, A(t) ? t.call(this, this) : t);
  } : t : e;
}
function xl(e, t) {
  return Ge(io(e), io(t));
}
function io(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function fe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ge(e, t) {
  return e ? J(J(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function Dl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = J(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = fe(e[o], t[o]);
  return n;
}
function Vl(e, t, n, o = !1) {
  const r = {}, s = {};
  fn(s, $n, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), ds(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  process.env.NODE_ENV !== "production" && hs(t || {}, r, e), n ? e.props = o ? r : _i(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function Cl(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Tl(e, t, n, o) {
  const { props: r, attrs: s, vnode: { patchFlag: i } } = e, c = F(r), [f] = e.propsOptions;
  let u = !1;
  if (!(process.env.NODE_ENV !== "production" && Cl(e)) && (o || i > 0) && !(i & 16)) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let d = 0; d < p.length; d++) {
        let g = p[d];
        if (xn(e.emitsOptions, g))
          continue;
        const x = t[g];
        if (f)
          if (Z(s, g))
            x !== s[g] && (s[g] = x, u = !0);
          else {
            const T = ze(g);
            r[T] = lo(f, c, T, x, e, !1);
          }
        else
          x !== s[g] && (s[g] = x, u = !0);
      }
    }
  } else {
    ds(e, t, r, s) && (u = !0);
    let p;
    for (const d in c)
      (!t || !Z(t, d) && ((p = Ne(d)) === d || !Z(t, p))) && (f ? n && (n[d] !== void 0 || n[p] !== void 0) && (r[d] = lo(f, c, d, void 0, e, !0)) : delete r[d]);
    if (s !== c)
      for (const d in s)
        (!t || !Z(t, d) && !0) && (delete s[d], u = !0);
  }
  u && Re(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && hs(t || {}, r, e);
}
function ds(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let f in t) {
      if (nn(f))
        continue;
      const u = t[f];
      let p;
      r && Z(r, p = ze(f)) ? !s || !s.includes(p) ? n[p] = u : (c || (c = {}))[p] = u : xn(e.emitsOptions, f) || (!(f in o) || u !== o[f]) && (o[f] = u, i = !0);
    }
  if (s) {
    const f = F(n), u = c || B;
    for (let p = 0; p < s.length; p++) {
      const d = s[p];
      n[d] = lo(r, f, d, u[d], e, !Z(u, d));
    }
  }
  return i;
}
function lo(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const c = Z(i, "default");
    if (c && o === void 0) {
      const f = i.default;
      if (i.type !== Function && A(f)) {
        const { propsDefaults: u } = r;
        n in u ? o = u[n] : (Dt(r), o = u[n] = f.call(null, t), ft());
      } else
        o = f;
    }
    i[0] && (s && !c ? o = !1 : i[1] && (o === "" || o === Ne(n)) && (o = !0));
  }
  return o;
}
function ps(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, c = [];
  let f = !1;
  if (!A(e)) {
    const p = (d) => {
      f = !0;
      const [g, x] = ps(d, t, !0);
      J(i, g), x && c.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!s && !f)
    return z(e) && o.set(e, Nt), Nt;
  if (I(s))
    for (let p = 0; p < s.length; p++) {
      process.env.NODE_ENV !== "production" && !te(s[p]) && y("props must be strings when using array syntax.", s[p]);
      const d = ze(s[p]);
      or(d) && (i[d] = B);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !z(s) && y("invalid props options", s);
    for (const p in s) {
      const d = ze(p);
      if (or(d)) {
        const g = s[p], x = i[d] = I(g) || A(g) ? { type: g } : g;
        if (x) {
          const T = sr(Boolean, x.type), C = sr(String, x.type);
          x[0] = T > -1, x[1] = C < 0 || T < C, (T > -1 || Z(x, "default")) && c.push(d);
        }
      }
    }
  }
  const u = [i, c];
  return z(e) && o.set(e, u), u;
}
function or(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function co(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function rr(e, t) {
  return co(e) === co(t);
}
function sr(e, t) {
  return I(t) ? t.findIndex((n) => rr(n, e)) : A(t) && rr(t, e) ? 0 : -1;
}
function hs(e, t, n) {
  const o = F(t), r = n.propsOptions[0];
  for (const s in r) {
    let i = r[s];
    i != null && Il(s, o[s], i, !Z(e, s) && !Z(e, Ne(s)));
  }
}
function Il(e, t, n, o) {
  const { type: r, required: s, validator: i } = n;
  if (s && o) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (r != null && r !== !0) {
      let c = !1;
      const f = I(r) ? r : [r], u = [];
      for (let p = 0; p < f.length && !c; p++) {
        const { valid: d, expectedType: g } = Al(t, f[p]);
        u.push(g || ""), c = d;
      }
      if (!c) {
        y(Fl(e, t, u));
        return;
      }
    }
    i && !i(t) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const $l = /* @__PURE__ */ Vt("String,Number,Boolean,Function,Symbol,BigInt");
function Al(e, t) {
  let n;
  const o = co(t);
  if ($l(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = z(e) : o === "Array" ? n = I(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Fl(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(vn).join(" | ")}`;
  const r = n[0], s = Eo(t), i = ir(t, r), c = ir(t, s);
  return n.length === 1 && lr(r) && !Zl(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, lr(s) && (o += `with value ${c}.`), o;
}
function ir(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function lr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Zl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const ms = (e) => e[0] === "_" || e === "$stable", $o = (e) => I(e) ? e.map(Ee) : [Ee(e)], Pl = (e, t, n) => {
  if (t._n)
    return t;
  const o = Ki((...r) => (process.env.NODE_ENV !== "production" && G && y(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), $o(t(...r))), n);
  return o._c = !1, o;
}, gs = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (ms(r))
      continue;
    const s = e[r];
    if (A(s))
      t[r] = Pl(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && y(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const i = $o(s);
      t[r] = () => i;
    }
  }
}, _s = (e, t) => {
  process.env.NODE_ENV !== "production" && !qt(e.vnode) && y("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = $o(t);
  e.slots.default = () => n;
}, Ml = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = F(t), fn(t, "_", n)) : gs(t, e.slots = {});
  } else
    e.slots = {}, t && _s(e, t);
  fn(e.slots, $n, 1);
}, Rl = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = B;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? process.env.NODE_ENV !== "production" && ct ? J(r, t) : n && c === 1 ? s = !1 : (J(r, t), !n && c === 1 && delete r._) : (s = !t.$stable, gs(t, r)), i = t;
  } else
    t && (_s(e, t), i = { default: 1 });
  if (s)
    for (const c in r)
      !ms(c) && !(c in i) && delete r[c];
};
function vs() {
  return {
    app: null,
    config: {
      isNativeTag: Nr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Sl = 0;
function jl(e, t) {
  return function(o, r = null) {
    A(o) || (o = Object.assign({}, o)), r != null && !z(r) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), r = null);
    const s = vs(), i = /* @__PURE__ */ new Set();
    let c = !1;
    const f = s.app = {
      _uid: Sl++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: ur,
      get config() {
        return s.config;
      },
      set config(u) {
        process.env.NODE_ENV !== "production" && y("app.config cannot be replaced. Modify individual options instead.");
      },
      use(u, ...p) {
        return i.has(u) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : u && A(u.install) ? (i.add(u), u.install(f, ...p)) : A(u) ? (i.add(u), u(f, ...p)) : process.env.NODE_ENV !== "production" && y('A plugin must either be a function or an object with an "install" function.'), f;
      },
      mixin(u) {
        return s.mixins.includes(u) ? process.env.NODE_ENV !== "production" && y("Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")) : s.mixins.push(u), f;
      },
      component(u, p) {
        return process.env.NODE_ENV !== "production" && ao(u, s.config), p ? (process.env.NODE_ENV !== "production" && s.components[u] && y(`Component "${u}" has already been registered in target app.`), s.components[u] = p, f) : s.components[u];
      },
      directive(u, p) {
        return process.env.NODE_ENV !== "production" && cs(u), p ? (process.env.NODE_ENV !== "production" && s.directives[u] && y(`Directive "${u}" has already been registered in target app.`), s.directives[u] = p, f) : s.directives[u];
      },
      mount(u, p, d) {
        if (c)
          process.env.NODE_ENV !== "production" && y("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && u.__vue_app__ && y("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const g = ye(o, r);
          return g.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(Ie(g), u, d);
          }), p && t ? t(g, u) : e(g, u, d), c = !0, f._container = u, u.__vue_app__ = f, process.env.NODE_ENV !== "production" && (f._instance = g.component, Mi(f, ur)), An(g.component) || g.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, f._container), process.env.NODE_ENV !== "production" && (f._instance = null, Ri(f)), delete f._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(u, p) {
        return process.env.NODE_ENV !== "production" && u in s.provides && y(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`), s.provides[u] = p, f;
      }
    };
    return f;
  };
}
function fo(e, t, n, o, r = !1) {
  if (I(e)) {
    e.forEach((g, x) => fo(g, t && (I(t) ? t[x] : t), n, o, r));
    return;
  }
  if (Mt(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? An(o.component) || o.component.proxy : o.el, i = r ? null : s, { i: c, r: f } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    y("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const u = t && t.r, p = c.refs === B ? c.refs = {} : c.refs, d = c.setupState;
  if (u != null && u !== f && (te(u) ? (p[u] = null, Z(d, u) && (d[u] = null)) : ee(u) && (u.value = null)), A(f))
    Pe(f, c, 12, [i, p]);
  else {
    const g = te(f), x = ee(f);
    if (g || x) {
      const T = () => {
        if (e.f) {
          const C = g ? p[f] : f.value;
          r ? I(C) && go(C, s) : I(C) ? C.includes(s) || C.push(s) : g ? (p[f] = [s], Z(d, f) && (d[f] = p[f])) : (f.value = [s], e.k && (p[e.k] = f.value));
        } else
          g ? (p[f] = i, Z(d, f) && (d[f] = i)) : x ? (f.value = i, e.k && (p[e.k] = i)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
      };
      i ? (T.id = -1, pe(T, n)) : T();
    } else
      process.env.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let $t, Ue;
function Fe(e, t) {
  e.appContext.config.performance && hn() && Ue.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Bi(e, t, hn() ? Ue.now() : Date.now());
}
function Ze(e, t) {
  if (e.appContext.config.performance && hn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Ue.mark(o), Ue.measure(`<${Fn(e, e.type)}> ${t}`, n, o), Ue.clearMarks(n), Ue.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Li(e, t, hn() ? Ue.now() : Date.now());
}
function hn() {
  return $t !== void 0 || (typeof window < "u" && window.performance ? ($t = !0, Ue = window.performance) : $t = !1), $t;
}
function Bl() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const pe = Gi;
function Ll(e) {
  return kl(e);
}
function kl(e, t) {
  Bl();
  const n = yr();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Yr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: r, patchProp: s, createElement: i, createText: c, createComment: f, setText: u, setElementText: p, parentNode: d, nextSibling: g, setScopeId: x = oe, insertStaticContent: T } = e, C = (l, a, h, _ = null, m = null, b = null, O = !1, E = null, N = process.env.NODE_ENV !== "production" && ct ? !1 : !!a.dynamicChildren) => {
    if (l === a)
      return;
    l && !tt(l, a) && (_ = Jt(l), Le(l, m, b, !0), l = null), a.patchFlag === -2 && (N = !1, a.dynamicChildren = null);
    const { type: v, ref: D, shapeFlag: w } = a;
    switch (v) {
      case Tn:
        W(l, a, h, _);
        break;
      case le:
        L(l, a, h, _);
        break;
      case Rt:
        l == null ? j(a, h, _, O) : process.env.NODE_ENV !== "production" && q(l, a, h, O);
        break;
      case he:
        $e(l, a, h, _, m, b, O, E, N);
        break;
      default:
        w & 1 ? je(l, a, h, _, m, b, O, E, N) : w & 6 ? Yt(l, a, h, _, m, b, O, E, N) : w & 64 || w & 128 ? v.process(l, a, h, _, m, b, O, E, N, mt) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", v, `(${typeof v})`);
    }
    D != null && m && fo(D, l && l.ref, b, a || l, !a);
  }, W = (l, a, h, _) => {
    if (l == null)
      o(a.el = c(a.children), h, _);
    else {
      const m = a.el = l.el;
      a.children !== l.children && u(m, a.children);
    }
  }, L = (l, a, h, _) => {
    l == null ? o(a.el = f(a.children || ""), h, _) : a.el = l.el;
  }, j = (l, a, h, _) => {
    [l.el, l.anchor] = T(l.children, a, h, _, l.el, l.anchor);
  }, q = (l, a, h, _) => {
    if (a.children !== l.children) {
      const m = g(l.anchor);
      K(l), [a.el, a.anchor] = T(a.children, h, m, _);
    } else
      a.el = l.el, a.anchor = l.anchor;
  }, ue = ({ el: l, anchor: a }, h, _) => {
    let m;
    for (; l && l !== a; )
      m = g(l), o(l, h, _), l = m;
    o(a, h, _);
  }, K = ({ el: l, anchor: a }) => {
    let h;
    for (; l && l !== a; )
      h = g(l), r(l), l = h;
    r(a);
  }, je = (l, a, h, _, m, b, O, E, N) => {
    O = O || a.type === "svg", l == null ? Oe(a, h, _, m, b, O, E, N) : Y(l, a, m, b, O, E, N);
  }, Oe = (l, a, h, _, m, b, O, E) => {
    let N, v;
    const { type: D, props: w, shapeFlag: V, transition: $, dirs: M } = l;
    if (N = l.el = i(l.type, b, w && w.is, w), V & 8 ? p(N, l.children) : V & 16 && U(l.children, N, null, _, m, b && D !== "foreignObject", O, E), M && Je(l, null, _, "created"), w) {
      for (const k in w)
        k !== "value" && !nn(k) && s(N, k, null, w[k], b, l.children, _, m, Ae);
      "value" in w && s(N, "value", null, w.value), (v = w.onVnodeBeforeMount) && De(v, _, l);
    }
    P(N, l, l.scopeId, O, _), process.env.NODE_ENV !== "production" && (Object.defineProperty(N, "__vnode", {
      value: l,
      enumerable: !1
    }), Object.defineProperty(N, "__vueParentComponent", {
      value: _,
      enumerable: !1
    })), M && Je(l, null, _, "beforeMount");
    const H = (!m || m && !m.pendingBranch) && $ && !$.persisted;
    H && $.beforeEnter(N), o(N, a, h), ((v = w && w.onVnodeMounted) || H || M) && pe(() => {
      v && De(v, _, l), H && $.enter(N), M && Je(l, null, _, "mounted");
    }, m);
  }, P = (l, a, h, _, m) => {
    if (h && x(l, h), _)
      for (let b = 0; b < _.length; b++)
        x(l, _[b]);
    if (m) {
      let b = m.subTree;
      if (process.env.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && (b = Gr(b.children) || b), a === b) {
        const O = m.vnode;
        P(l, O, O.scopeId, O.slotScopeIds, m.parent);
      }
    }
  }, U = (l, a, h, _, m, b, O, E, N = 0) => {
    for (let v = N; v < l.length; v++) {
      const D = l[v] = E ? We(l[v]) : Ee(l[v]);
      C(null, D, a, h, _, m, b, O, E);
    }
  }, Y = (l, a, h, _, m, b, O) => {
    const E = a.el = l.el;
    let { patchFlag: N, dynamicChildren: v, dirs: D } = a;
    N |= l.patchFlag & 16;
    const w = l.props || B, V = a.props || B;
    let $;
    h && Xe(h, !1), ($ = V.onVnodeBeforeUpdate) && De($, h, a, l), D && Je(a, l, h, "beforeUpdate"), h && Xe(h, !0), process.env.NODE_ENV !== "production" && ct && (N = 0, O = !1, v = null);
    const M = m && a.type !== "foreignObject";
    if (v ? (se(l.dynamicChildren, v, E, h, _, M, b), process.env.NODE_ENV !== "production" && h && h.type.__hmrId && sn(l, a)) : O || we(l, a, E, null, h, _, M, b, !1), N > 0) {
      if (N & 16)
        ne(E, a, w, V, h, _, m);
      else if (N & 2 && w.class !== V.class && s(E, "class", null, V.class, m), N & 4 && s(E, "style", w.style, V.style, m), N & 8) {
        const H = a.dynamicProps;
        for (let k = 0; k < H.length; k++) {
          const X = H[k], ve = w[X], gt = V[X];
          (gt !== ve || X === "value") && s(E, X, ve, gt, m, l.children, h, _, Ae);
        }
      }
      N & 1 && l.children !== a.children && p(E, a.children);
    } else
      !O && v == null && ne(E, a, w, V, h, _, m);
    (($ = V.onVnodeUpdated) || D) && pe(() => {
      $ && De($, h, a, l), D && Je(a, l, h, "updated");
    }, _);
  }, se = (l, a, h, _, m, b, O) => {
    for (let E = 0; E < a.length; E++) {
      const N = l[E], v = a[E], D = N.el && (N.type === he || !tt(N, v) || N.shapeFlag & 70) ? d(N.el) : h;
      C(N, v, D, null, _, m, b, O, !0);
    }
  }, ne = (l, a, h, _, m, b, O) => {
    if (h !== _) {
      if (h !== B)
        for (const E in h)
          !nn(E) && !(E in _) && s(l, E, h[E], null, O, a.children, m, b, Ae);
      for (const E in _) {
        if (nn(E))
          continue;
        const N = _[E], v = h[E];
        N !== v && E !== "value" && s(l, E, v, N, O, a.children, m, b, Ae);
      }
      "value" in _ && s(l, "value", h.value, _.value);
    }
  }, $e = (l, a, h, _, m, b, O, E, N) => {
    const v = a.el = l ? l.el : c(""), D = a.anchor = l ? l.anchor : c("");
    let { patchFlag: w, dynamicChildren: V, slotScopeIds: $ } = a;
    process.env.NODE_ENV !== "production" && (ct || w & 2048) && (w = 0, N = !1, V = null), $ && (E = E ? E.concat($) : $), l == null ? (o(v, h, _), o(D, h, _), U(a.children, h, D, m, b, O, E, N)) : w > 0 && w & 64 && V && l.dynamicChildren ? (se(l.dynamicChildren, V, h, m, b, O, E), process.env.NODE_ENV !== "production" && m && m.type.__hmrId ? sn(l, a) : (a.key != null || m && a === m.subTree) && sn(l, a, !0)) : we(l, a, h, D, m, b, O, E, N);
  }, Yt = (l, a, h, _, m, b, O, E, N) => {
    a.slotScopeIds = E, l == null ? a.shapeFlag & 512 ? m.ctx.activate(a, h, _, O, N) : Be(a, h, _, m, b, O, N) : de(l, a, N);
  }, Be = (l, a, h, _, m, b, O) => {
    const E = l.component = ec(l, _, m);
    if (process.env.NODE_ENV !== "production" && E.type.__hmrId && Ai(E), process.env.NODE_ENV !== "production" && (on(l), Fe(E, "mount")), qt(l) && (E.ctx.renderer = mt), process.env.NODE_ENV !== "production" && Fe(E, "init"), oc(E), process.env.NODE_ENV !== "production" && Ze(E, "init"), E.asyncDep) {
      if (m && m.registerDep(E, R), !l.el) {
        const N = E.subTree = ye(le);
        L(null, N, a, h);
      }
      return;
    }
    R(E, l, a, h, m, b, O), process.env.NODE_ENV !== "production" && (rn(), Ze(E, "mount"));
  }, de = (l, a, h) => {
    const _ = a.component = l.component;
    if (Ji(l, a, h))
      if (_.asyncDep && !_.asyncResolved) {
        process.env.NODE_ENV !== "production" && on(a), S(_, a, h), process.env.NODE_ENV !== "production" && rn();
        return;
      } else
        _.next = a, Ii(_.update), _.update();
    else
      a.el = l.el, _.vnode = a;
  }, R = (l, a, h, _, m, b, O) => {
    const E = () => {
      if (l.isMounted) {
        let { next: D, bu: w, u: V, parent: $, vnode: M } = l, H = D, k;
        process.env.NODE_ENV !== "production" && on(D || l.vnode), Xe(l, !1), D ? (D.el = M.el, S(l, D, O)) : D = M, w && It(w), (k = D.props && D.props.onVnodeBeforeUpdate) && De(k, $, D, M), Xe(l, !0), process.env.NODE_ENV !== "production" && Fe(l, "render");
        const X = Bn(l);
        process.env.NODE_ENV !== "production" && Ze(l, "render");
        const ve = l.subTree;
        l.subTree = X, process.env.NODE_ENV !== "production" && Fe(l, "patch"), C(
          ve,
          X,
          d(ve.el),
          Jt(ve),
          l,
          m,
          b
        ), process.env.NODE_ENV !== "production" && Ze(l, "patch"), D.el = X.el, H === null && Xi(l, X.el), V && pe(V, m), (k = D.props && D.props.onVnodeUpdated) && pe(() => De(k, $, D, M), m), process.env.NODE_ENV !== "production" && Jr(l), process.env.NODE_ENV !== "production" && rn();
      } else {
        let D;
        const { el: w, props: V } = a, { bm: $, m: M, parent: H } = l, k = Mt(a);
        if (Xe(l, !1), $ && It($), !k && (D = V && V.onVnodeBeforeMount) && De(D, H, a), Xe(l, !0), w && Sn) {
          const X = () => {
            process.env.NODE_ENV !== "production" && Fe(l, "render"), l.subTree = Bn(l), process.env.NODE_ENV !== "production" && Ze(l, "render"), process.env.NODE_ENV !== "production" && Fe(l, "hydrate"), Sn(w, l.subTree, l, m, null), process.env.NODE_ENV !== "production" && Ze(l, "hydrate");
          };
          k ? a.type.__asyncLoader().then(
            () => !l.isUnmounted && X()
          ) : X();
        } else {
          process.env.NODE_ENV !== "production" && Fe(l, "render");
          const X = l.subTree = Bn(l);
          process.env.NODE_ENV !== "production" && Ze(l, "render"), process.env.NODE_ENV !== "production" && Fe(l, "patch"), C(null, X, h, _, l, m, b), process.env.NODE_ENV !== "production" && Ze(l, "patch"), a.el = X.el;
        }
        if (M && pe(M, m), !k && (D = V && V.onVnodeMounted)) {
          const X = a;
          pe(() => De(D, H, X), m);
        }
        (a.shapeFlag & 256 || H && Mt(H.vnode) && H.vnode.shapeFlag & 256) && l.a && pe(l.a, m), l.isMounted = !0, process.env.NODE_ENV !== "production" && Si(l), a = h = _ = null;
      }
    }, N = l.effect = new No(
      E,
      () => wn(v),
      l.scope
    ), v = l.update = () => N.run();
    v.id = l.uid, Xe(l, !0), process.env.NODE_ENV !== "production" && (N.onTrack = l.rtc ? (D) => It(l.rtc, D) : void 0, N.onTrigger = l.rtg ? (D) => It(l.rtg, D) : void 0, v.ownerInstance = l), v();
  }, S = (l, a, h) => {
    a.component = l;
    const _ = l.vnode.props;
    l.vnode = a, l.next = null, Tl(l, a.props, _, h), Rl(l, a.children, h), dt(), Yo(), pt();
  }, we = (l, a, h, _, m, b, O, E, N = !1) => {
    const v = l && l.children, D = l ? l.shapeFlag : 0, w = a.children, { patchFlag: V, shapeFlag: $ } = a;
    if (V > 0) {
      if (V & 128) {
        Ct(v, w, h, _, m, b, O, E, N);
        return;
      } else if (V & 256) {
        Pn(v, w, h, _, m, b, O, E, N);
        return;
      }
    }
    $ & 8 ? (D & 16 && Ae(v, m, b), w !== v && p(h, w)) : D & 16 ? $ & 16 ? Ct(v, w, h, _, m, b, O, E, N) : Ae(v, m, b, !0) : (D & 8 && p(h, ""), $ & 16 && U(w, h, _, m, b, O, E, N));
  }, Pn = (l, a, h, _, m, b, O, E, N) => {
    l = l || Nt, a = a || Nt;
    const v = l.length, D = a.length, w = Math.min(v, D);
    let V;
    for (V = 0; V < w; V++) {
      const $ = a[V] = N ? We(a[V]) : Ee(a[V]);
      C(l[V], $, h, null, m, b, O, E, N);
    }
    v > D ? Ae(l, m, b, !0, !1, w) : U(a, h, _, m, b, O, E, N, w);
  }, Ct = (l, a, h, _, m, b, O, E, N) => {
    let v = 0;
    const D = a.length;
    let w = l.length - 1, V = D - 1;
    for (; v <= w && v <= V; ) {
      const $ = l[v], M = a[v] = N ? We(a[v]) : Ee(a[v]);
      if (tt($, M))
        C($, M, h, null, m, b, O, E, N);
      else
        break;
      v++;
    }
    for (; v <= w && v <= V; ) {
      const $ = l[w], M = a[V] = N ? We(a[V]) : Ee(a[V]);
      if (tt($, M))
        C($, M, h, null, m, b, O, E, N);
      else
        break;
      w--, V--;
    }
    if (v > w) {
      if (v <= V) {
        const $ = V + 1, M = $ < D ? a[$].el : _;
        for (; v <= V; )
          C(null, a[v] = N ? We(a[v]) : Ee(a[v]), h, M, m, b, O, E, N), v++;
      }
    } else if (v > V)
      for (; v <= w; )
        Le(l[v], m, b, !0), v++;
    else {
      const $ = v, M = v, H = /* @__PURE__ */ new Map();
      for (v = M; v <= V; v++) {
        const ce = a[v] = N ? We(a[v]) : Ee(a[v]);
        ce.key != null && (process.env.NODE_ENV !== "production" && H.has(ce.key) && y("Duplicate keys found during update:", JSON.stringify(ce.key), "Make sure keys are unique."), H.set(ce.key, v));
      }
      let k, X = 0;
      const ve = V - M + 1;
      let gt = !1, So = 0;
      const Tt = new Array(ve);
      for (v = 0; v < ve; v++)
        Tt[v] = 0;
      for (v = $; v <= w; v++) {
        const ce = l[v];
        if (X >= ve) {
          Le(ce, m, b, !0);
          continue;
        }
        let xe;
        if (ce.key != null)
          xe = H.get(ce.key);
        else
          for (k = M; k <= V; k++)
            if (Tt[k - M] === 0 && tt(ce, a[k])) {
              xe = k;
              break;
            }
        xe === void 0 ? Le(ce, m, b, !0) : (Tt[xe - M] = v + 1, xe >= So ? So = xe : gt = !0, C(ce, a[xe], h, null, m, b, O, E, N), X++);
      }
      const jo = gt ? Hl(Tt) : Nt;
      for (k = jo.length - 1, v = ve - 1; v >= 0; v--) {
        const ce = M + v, xe = a[ce], Bo = ce + 1 < D ? a[ce + 1].el : _;
        Tt[v] === 0 ? C(null, xe, h, Bo, m, b, O, E, N) : gt && (k < 0 || v !== jo[k] ? ht(xe, h, Bo, 2) : k--);
      }
    }
  }, ht = (l, a, h, _, m = null) => {
    const { el: b, type: O, transition: E, children: N, shapeFlag: v } = l;
    if (v & 6) {
      ht(l.component.subTree, a, h, _);
      return;
    }
    if (v & 128) {
      l.suspense.move(a, h, _);
      return;
    }
    if (v & 64) {
      O.move(l, a, h, mt);
      return;
    }
    if (O === he) {
      o(b, a, h);
      for (let w = 0; w < N.length; w++)
        ht(N[w], a, h, _);
      o(l.anchor, a, h);
      return;
    }
    if (O === Rt) {
      ue(l, a, h);
      return;
    }
    if (_ !== 2 && v & 1 && E)
      if (_ === 0)
        E.beforeEnter(b), o(b, a, h), pe(() => E.enter(b), m);
      else {
        const { leave: w, delayLeave: V, afterLeave: $ } = E, M = () => o(b, a, h), H = () => {
          w(b, () => {
            M(), $ && $();
          });
        };
        V ? V(b, M, H) : H();
      }
    else
      o(b, a, h);
  }, Le = (l, a, h, _ = !1, m = !1) => {
    const { type: b, props: O, ref: E, children: N, dynamicChildren: v, shapeFlag: D, patchFlag: w, dirs: V } = l;
    if (E != null && fo(E, null, h, l, !0), D & 256) {
      a.ctx.deactivate(l);
      return;
    }
    const $ = D & 1 && V, M = !Mt(l);
    let H;
    if (M && (H = O && O.onVnodeBeforeUnmount) && De(H, a, l), D & 6)
      Ts(l.component, h, _);
    else {
      if (D & 128) {
        l.suspense.unmount(h, _);
        return;
      }
      $ && Je(l, null, a, "beforeUnmount"), D & 64 ? l.type.remove(l, a, h, m, mt, _) : v && (b !== he || w > 0 && w & 64) ? Ae(v, a, h, !1, !0) : (b === he && w & 384 || !m && D & 16) && Ae(N, a, h), _ && Mn(l);
    }
    (M && (H = O && O.onVnodeUnmounted) || $) && pe(() => {
      H && De(H, a, l), $ && Je(l, null, a, "unmounted");
    }, h);
  }, Mn = (l) => {
    const { type: a, el: h, anchor: _, transition: m } = l;
    if (a === he) {
      process.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && m && !m.persisted ? l.children.forEach((O) => {
        O.type === le ? r(O.el) : Mn(O);
      }) : Cs(h, _);
      return;
    }
    if (a === Rt) {
      K(l);
      return;
    }
    const b = () => {
      r(h), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (l.shapeFlag & 1 && m && !m.persisted) {
      const { leave: O, delayLeave: E } = m, N = () => O(h, b);
      E ? E(l.el, b, N) : N();
    } else
      b();
  }, Cs = (l, a) => {
    let h;
    for (; l !== a; )
      h = g(l), r(l), l = h;
    r(a);
  }, Ts = (l, a, h) => {
    process.env.NODE_ENV !== "production" && l.type.__hmrId && Fi(l);
    const { bum: _, scope: m, update: b, subTree: O, um: E } = l;
    _ && It(_), m.stop(), b && (b.active = !1, Le(O, l, a, h)), E && pe(E, a), pe(() => {
      l.isUnmounted = !0;
    }, a), a && a.pendingBranch && !a.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === a.pendingId && (a.deps--, a.deps === 0 && a.resolve()), process.env.NODE_ENV !== "production" && ji(l);
  }, Ae = (l, a, h, _ = !1, m = !1, b = 0) => {
    for (let O = b; O < l.length; O++)
      Le(l[O], a, h, _, m);
  }, Jt = (l) => l.shapeFlag & 6 ? Jt(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : g(l.anchor || l.el), Ro = (l, a, h) => {
    l == null ? a._vnode && Le(a._vnode, null, null, !0) : C(a._vnode || null, l, a, null, null, null, h), Yo(), Kr(), a._vnode = l;
  }, mt = {
    p: C,
    um: Le,
    m: ht,
    r: Mn,
    mt: Be,
    mc: U,
    pc: we,
    pbc: se,
    n: Jt,
    o: e
  };
  let Rn, Sn;
  return t && ([Rn, Sn] = t(mt)), {
    render: Ro,
    hydrate: Rn,
    createApp: jl(Ro, Rn)
  };
}
function Xe({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function sn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (I(o) && I(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let c = r[s];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[s] = We(r[s]), c.el = i.el), n || sn(i, c)), process.env.NODE_ENV !== "production" && c.type === le && !c.el && (c.el = i.el);
    }
}
function Hl(e) {
  const t = e.slice(), n = [0];
  let o, r, s, i, c;
  const f = e.length;
  for (o = 0; o < f; o++) {
    const u = e[o];
    if (u !== 0) {
      if (r = n[n.length - 1], e[r] < u) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        c = s + i >> 1, e[n[c]] < u ? s = c + 1 : i = c;
      u < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
const Wl = (e) => e.__isTeleport, he = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), Tn = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), le = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), Rt = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), St = [];
let be = null;
function rt(e = !1) {
  St.push(be = e ? null : []);
}
function Ul() {
  St.pop(), be = St[St.length - 1] || null;
}
let Wt = 1;
function cr(e) {
  Wt += e;
}
function Es(e) {
  return e.dynamicChildren = Wt > 0 ? be || Nt : null, Ul(), Wt > 0 && be && be.push(e), e;
}
function bt(e, t, n, o, r, s) {
  return Es(Q(e, t, n, o, r, s, !0));
}
function Kl(e, t, n, o, r) {
  return Es(ye(e, t, n, o, r, !0));
}
function In(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function tt(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && _t.has(t.type) ? !1 : e.type === t.type && e.key === t.key;
}
const zl = (...e) => Ns(...e), $n = "__vInternal", bs = ({ key: e }) => e != null ? e : null, ln = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? te(e) || ee(e) || A(e) ? { i: re, r: e, k: t, f: !!n } : e : null;
function Q(e, t = null, n = null, o = 0, r = null, s = e === he ? 0 : 1, i = !1, c = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && bs(t),
    ref: t && ln(t),
    scopeId: Dn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null
  };
  return c ? (Ao(f, n), s & 128 && e.normalize(f)) : n && (f.shapeFlag |= te(n) ? 8 : 16), process.env.NODE_ENV !== "production" && f.key !== f.key && y("VNode created with invalid key (NaN). VNode type:", f.type), Wt > 0 && !i && be && (f.patchFlag > 0 || s & 6) && f.patchFlag !== 32 && be.push(f), f;
}
const ye = process.env.NODE_ENV !== "production" ? zl : Ns;
function Ns(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === gl) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = le), In(e)) {
    const c = Ie(e, t, !0);
    return n && Ao(c, n), Wt > 0 && !s && be && (c.shapeFlag & 6 ? be[be.indexOf(e)] = c : be.push(c)), c.patchFlag |= -2, c;
  }
  if (Ds(e) && (e = e.__vccOpts), t) {
    t = ql(t);
    let { class: c, style: f } = t;
    c && !te(c) && (t.class = mn(c)), z(f) && (Qn(f) && !I(f) && (f = J({}, f)), t.style = mo(f));
  }
  const i = te(e) ? 1 : Qi(e) ? 128 : Wl(e) ? 64 : z(e) ? 4 : A(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Qn(e) && (e = F(e), y("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), Q(e, t, n, o, r, i, s, !0);
}
function ql(e) {
  return e ? Qn(e) || $n in e ? J({}, e) : e : null;
}
function Ie(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, c = t ? Xl(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && bs(c),
    ref: t && t.ref ? n && r ? I(r) ? r.concat(ln(t)) : [r, ln(t)] : ln(t) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && I(i) ? i.map(ys) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== he ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ie(e.ssContent),
    ssFallback: e.ssFallback && Ie(e.ssFallback),
    el: e.el,
    anchor: e.anchor
  };
}
function ys(e) {
  const t = Ie(e);
  return I(e.children) && (t.children = e.children.map(ys)), t;
}
function Yl(e = " ", t = 0) {
  return ye(Tn, null, e, t);
}
function Jl(e, t) {
  const n = ye(Rt, null, e);
  return n.staticCount = t, n;
}
function Ee(e) {
  return e == null || typeof e == "boolean" ? ye(le) : I(e) ? ye(
    he,
    null,
    e.slice()
  ) : typeof e == "object" ? We(e) : ye(Tn, null, String(e));
}
function We(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ie(e);
}
function Ao(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ao(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !($n in t) ? t._ctx = re : r === 3 && re && (re.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    A(t) ? (t = { default: t, _ctx: re }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Yl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Xl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = mn([t.class, o.class]));
      else if (r === "style")
        t.style = mo([t.style, o.style]);
      else if (Kt(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(I(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function De(e, t, n, o = null) {
  _e(e, t, 7, [
    n,
    o
  ]);
}
const Ql = vs();
let Gl = 0;
function ec(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Ql, s = {
    uid: Gl++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Hs(!0),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: ps(o, r),
    emitsOptions: Qr(o, r),
    emit: null,
    emitted: null,
    propsDefaults: B,
    inheritAttrs: o.inheritAttrs,
    ctx: B,
    data: B,
    props: B,
    attrs: B,
    slots: B,
    refs: B,
    setupState: B,
    setupContext: null,
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? s.ctx = vl(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Hi.bind(null, s), e.ce && e.ce(s), s;
}
let G = null;
const tc = () => G || re, Dt = (e) => {
  G = e, e.scope.on();
}, ft = () => {
  G && G.scope.off(), G = null;
}, nc = /* @__PURE__ */ Vt("slot,component");
function ao(e, t) {
  const n = t.isNativeTag || Nr;
  (nc(e) || n(e)) && y("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Os(e) {
  return e.vnode.shapeFlag & 4;
}
let Ut = !1;
function oc(e, t = !1) {
  Ut = t;
  const { props: n, children: o } = e.vnode, r = Os(e);
  Vl(e, n, r, t), Ml(e, o);
  const s = r ? rc(e, t) : void 0;
  return Ut = !1, s;
}
function rc(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && ao(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        ao(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        cs(s[i]);
    }
    o.compilerOptions && sc() && y('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Mr(new Proxy(e.ctx, as)), process.env.NODE_ENV !== "production" && El(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? ic(e) : null;
    Dt(e), dt();
    const i = Pe(r, e, 0, [process.env.NODE_ENV !== "production" ? Et(e.props) : e.props, s]);
    if (pt(), ft(), vo(i)) {
      if (i.then(ft, ft), t)
        return i.then((c) => {
          fr(e, c, t);
        }).catch((c) => {
          On(c, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        y(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      fr(e, i, t);
  } else
    ws(e, t);
}
function fr(e, t, n) {
  A(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : z(t) ? (process.env.NODE_ENV !== "production" && In(t) && y("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = jr(t), process.env.NODE_ENV !== "production" && bl(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), ws(e, n);
}
let uo;
const sc = () => !uo;
function ws(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && uo && !o.render) {
      const r = o.template || Io(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && Fe(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: f } = o, u = J(J({
          isCustomElement: s,
          delimiters: c
        }, i), f);
        o.render = uo(r, u), process.env.NODE_ENV !== "production" && Ze(e, "compile");
      }
    }
    e.render = o.render || oe;
  }
  Dt(e), dt(), yl(e), pt(), ft(), process.env.NODE_ENV !== "production" && !o.render && e.render === oe && !t && (o.template ? y('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : y("Component is missing template or render function."));
}
function ar(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return dn(), me(e, "get", "$attrs"), t[n];
    },
    set() {
      return y("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return y("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return me(e, "get", "$attrs"), t[n];
    }
  });
}
function ic(e) {
  const t = (o) => {
    process.env.NODE_ENV !== "production" && e.exposed && y("expose() should be called only once per setup()."), e.exposed = o || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = ar(e));
    },
    get slots() {
      return Et(e.slots);
    },
    get emit() {
      return (o, ...r) => e.emit(o, ...r);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = ar(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function An(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(jr(Mr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in xt)
          return xt[n](e);
      }
    }));
}
const lc = /(?:^|[-_])(\w)/g, cc = (e) => e.replace(lc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function xs(e, t = !0) {
  return A(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Fn(e, t, n = !1) {
  let o = xs(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    o = r(e.components || e.parent.type.components) || r(e.appContext.components);
  }
  return o ? cc(o) : n ? "App" : "Anonymous";
}
function Ds(e) {
  return A(e) && "__vccOpts" in e;
}
const fc = (e, t) => yi(e, t, Ut);
Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : "");
function Wn(e) {
  return !!(e && e.__v_isShallow);
}
function ac() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, r = {
    header(d) {
      return z(d) ? d.__isVue ? ["div", e, "VueInstance"] : ee(d) ? [
        "div",
        {},
        ["span", e, p(d)],
        "<",
        c(d.value),
        ">"
      ] : it(d) ? [
        "div",
        {},
        ["span", e, Wn(d) ? "ShallowReactive" : "Reactive"],
        "<",
        c(d),
        `>${Ye(d) ? " (readonly)" : ""}`
      ] : Ye(d) ? [
        "div",
        {},
        ["span", e, Wn(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(d),
        ">"
      ] : null : null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...s(d.$)
        ];
    }
  };
  function s(d) {
    const g = [];
    d.type.props && d.props && g.push(i("props", F(d.props))), d.setupState !== B && g.push(i("setup", d.setupState)), d.data !== B && g.push(i("data", F(d.data)));
    const x = f(d, "computed");
    x && g.push(i("computed", x));
    const T = f(d, "inject");
    return T && g.push(i("injected", T)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), g;
  }
  function i(d, g) {
    return g = J({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((x) => [
          "div",
          {},
          ["span", o, x + ": "],
          c(g[x], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(d, g = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", o, d] : z(d) ? ["object", { object: g ? F(d) : d }] : ["span", n, String(d)];
  }
  function f(d, g) {
    const x = d.type;
    if (A(x))
      return;
    const T = {};
    for (const C in d.ctx)
      u(x, C, g) && (T[C] = d.ctx[C]);
    return T;
  }
  function u(d, g, x) {
    const T = d[x];
    if (I(T) && T.includes(g) || z(T) && g in T || d.extends && u(d.extends, g, x) || d.mixins && d.mixins.some((C) => u(C, g, x)))
      return !0;
  }
  function p(d) {
    return Wn(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const ur = "3.2.40", uc = "http://www.w3.org/2000/svg", nt = typeof document < "u" ? document : null, dr = nt && /* @__PURE__ */ nt.createElement("template"), dc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? nt.createElementNS(uc, e) : nt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => nt.createTextNode(e),
  createComment: (e) => nt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => nt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  insertStaticContent(e, t, n, o, r, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      dr.innerHTML = o ? `<svg>${e}</svg>` : e;
      const c = dr.content;
      if (o) {
        const f = c.firstChild;
        for (; f.firstChild; )
          c.appendChild(f.firstChild);
        c.removeChild(f);
      }
      t.insertBefore(c, n);
    }
    return [
      i ? i.nextSibling : t.firstChild,
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function pc(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function hc(e, t, n) {
  const o = e.style, r = te(n);
  if (n && !r) {
    for (const s in n)
      po(o, s, n[s]);
    if (t && !te(t))
      for (const s in t)
        n[s] == null && po(o, s, "");
  } else {
    const s = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = s);
  }
}
const pr = /\s*!important$/;
function po(e, t, n) {
  if (I(n))
    n.forEach((o) => po(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = mc(e, t);
    pr.test(n) ? e.setProperty(Ne(o), n.replace(pr, ""), "important") : e[o] = n;
  }
}
const hr = ["Webkit", "Moz", "ms"], Un = {};
function mc(e, t) {
  const n = Un[t];
  if (n)
    return n;
  let o = ze(t);
  if (o !== "filter" && o in e)
    return Un[t] = o;
  o = vn(o);
  for (let r = 0; r < hr.length; r++) {
    const s = hr[r] + o;
    if (s in e)
      return Un[t] = s;
  }
  return t;
}
const mr = "http://www.w3.org/1999/xlink";
function gc(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(mr, t.slice(6, t.length)) : e.setAttributeNS(mr, t, n);
  else {
    const s = $s(t);
    n == null || s && !br(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function _c(e, t, n, o, r, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    o && i(o, r, s), e[t] = n == null ? "" : n;
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const f = n == null ? "" : n;
    (e.value !== f || e.tagName === "OPTION") && (e.value = f), n == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = br(n) : n == null && f === "string" ? (n = "", c = !0) : f === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch (f) {
    process.env.NODE_ENV !== "production" && !c && y(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, f);
  }
  c && e.removeAttribute(t);
}
const [Vs, vc] = /* @__PURE__ */ (() => {
  let e = Date.now, t = !1;
  if (typeof window < "u") {
    Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let ho = 0;
const Ec = /* @__PURE__ */ Promise.resolve(), bc = () => {
  ho = 0;
}, Nc = () => ho || (Ec.then(bc), ho = Vs());
function yc(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Oc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function wc(e, t, n, o, r = null) {
  const s = e._vei || (e._vei = {}), i = s[t];
  if (o && i)
    i.value = o;
  else {
    const [c, f] = xc(t);
    if (o) {
      const u = s[t] = Dc(o, r);
      yc(e, c, u, f);
    } else
      i && (Oc(e, c, i, f), s[t] = void 0);
  }
}
const gr = /(?:Once|Passive|Capture)$/;
function xc(e) {
  let t;
  if (gr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(gr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ne(e.slice(2)), t];
}
function Dc(e, t) {
  const n = (o) => {
    const r = o.timeStamp || Vs();
    (vc || r >= n.attached - 1) && _e(Vc(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = Nc(), n;
}
function Vc(e, t) {
  if (I(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const _r = /^on[a-z]/, Cc = (e, t, n, o, r = !1, s, i, c, f) => {
  t === "class" ? pc(e, o, r) : t === "style" ? hc(e, n, o) : Kt(t) ? cn(t) || wc(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Tc(e, t, o, r)) ? _c(e, t, o, s, i, c, f) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), gc(e, t, o, r));
};
function Tc(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && _r.test(t) && A(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || _r.test(t) && te(n) ? !1 : t in e;
}
function Fo(e, t) {
  const n = Vn(e);
  class o extends Zo {
    constructor(s) {
      super(n, s, t);
    }
  }
  return o.def = n, o;
}
const Ic = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Zo extends Ic {
  constructor(t, n = {}, o) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && o ? o(this._createVNode(), this.shadowRoot) : (process.env.NODE_ENV !== "production" && this.shadowRoot && y("Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."), this.attachShadow({ mode: "open" }));
  }
  connectedCallback() {
    this._connected = !0, this._instance || this._resolveDef();
  }
  disconnectedCallback() {
    this._connected = !1, Hr(() => {
      this._connected || (Er(null, this.shadowRoot), this._instance = null);
    });
  }
  _resolveDef() {
    if (this._resolved)
      return;
    this._resolved = !0;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    new MutationObserver((o) => {
      for (const r of o)
        this._setAttr(r.attributeName);
    }).observe(this, { attributes: !0 });
    const t = (o) => {
      const { props: r, styles: s } = o, i = !I(r), c = r ? i ? Object.keys(r) : r : [];
      let f;
      if (i)
        for (const u in this._props) {
          const p = r[u];
          (p === Number || p && p.type === Number) && (this._props[u] = Kn(this._props[u]), (f || (f = /* @__PURE__ */ Object.create(null)))[u] = !0);
        }
      this._numberProps = f;
      for (const u of Object.keys(this))
        u[0] !== "_" && this._setProp(u, this[u], !0, !1);
      for (const u of c.map(ze))
        Object.defineProperty(this, u, {
          get() {
            return this._getProp(u);
          },
          set(p) {
            this._setProp(u, p);
          }
        });
      this._applyStyles(s), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then(t) : t(this._def);
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    this._numberProps && this._numberProps[t] && (n = Kn(n)), this._setProp(ze(t), n, !1);
  }
  _getProp(t) {
    return this._props[t];
  }
  _setProp(t, n, o = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), o && (n === !0 ? this.setAttribute(Ne(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Ne(t), n + "") : n || this.removeAttribute(Ne(t))));
  }
  _update() {
    Er(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = ye(this._def, J({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0, process.env.NODE_ENV !== "production" && (n.ceReload = (r) => {
        this._styles && (this._styles.forEach((s) => this.shadowRoot.removeChild(s)), this._styles.length = 0), this._applyStyles(r), this._def.__asyncLoader || (this._instance = null, this._update());
      }), n.emit = (r, ...s) => {
        this.dispatchEvent(new CustomEvent(r, {
          detail: s
        }));
      };
      let o = this;
      for (; o = o && (o.parentNode || o.host); )
        if (o instanceof Zo) {
          n.parent = o._instance;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const o = document.createElement("style");
      o.textContent = n, this.shadowRoot.appendChild(o), process.env.NODE_ENV !== "production" && (this._styles || (this._styles = [])).push(o);
    });
  }
}
const $c = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
rl.props;
const Ac = ["ctrl", "shift", "alt", "meta"], Fc = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Ac.some((n) => e[`${n}Key`] && !t.includes(n))
}, Me = (e, t) => (n, ...o) => {
  for (let r = 0; r < t.length; r++) {
    const s = Fc[t[r]];
    if (s && s(n, t))
      return;
  }
  return e(n, ...o);
}, Zc = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : At(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), At(e, !0), o.enter(e)) : o.leave(e, () => {
      At(e, !1);
    }) : At(e, t));
  },
  beforeUnmount(e, { value: t }) {
    At(e, t);
  }
};
function At(e, t) {
  e.style.display = t ? e._vod : "none";
}
const Pc = /* @__PURE__ */ J({ patchProp: Cc }, dc);
let vr;
function Mc() {
  return vr || (vr = Ll(Pc));
}
const Er = (...e) => {
  Mc().render(...e);
};
function Rc() {
  ac();
}
process.env.NODE_ENV !== "production" && Rc();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Po = function(e) {
  e === void 0 && (e = 0);
  var t = "", n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", o = String(Math.abs(new Date().valueOf()));
  Number(e) >= 1 && (t += String(Number(e) + 1));
  for (var r = 0; r < o.length; r++)
    t += n.charAt(Math.floor(Math.random() * n.length)), t += o.charAt(r);
  return t;
};
const Sc = { class: "dropZone" }, jc = ["id", "accept"], Bc = ["onDrop"], Lc = ["for"], kc = /* @__PURE__ */ Jl('<svg width="10em" height="10em" viewBox="0 0 16 12" class="dropZoneImage" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-v-40def0a8><path fill-rule="evenodd" d="m 8.0274054,0.49415269 a 5.53,5.53 0 0 0 -3.594,1.34200001 c -0.766,0.66 -1.321,1.52 -1.464,2.383 -1.676,0.37 -2.94199993,1.83 -2.94199993,3.593 0,2.048 1.70799993,3.6820003 3.78099993,3.6820003 h 8.9059996 c 1.815,0 3.313,-1.43 3.313,-3.2270003 0,-1.636 -1.242,-2.969 -2.834,-3.194 -0.243,-2.58 -2.476,-4.57900001 -5.1659996,-4.57900001 z m 2.3539996,5.14600001 -1.9999996,-2 a 0.5,0.5 0 0 0 -0.708,0 l -2,2 a 0.5006316,0.5006316 0 1 0 0.708,0.708 l 1.146,-1.147 v 3.793 a 0.5,0.5 0 0 0 1,0 v -3.793 l 1.146,1.147 a 0.5006316,0.5006316 0 0 0 0.7079996,-0.708 z" data-v-40def0a8></path></svg><div class="dropZoneBody" data-v-40def0a8><p data-v-40def0a8><strong class="dropZoneTitle fg-inherit" data-v-40def0a8>Drag and drop files to upload</strong></p><p data-v-40def0a8><small class="dropZoneText" data-v-40def0a8>Your files will be added automatically</small></p><button type="button" class="button" data-v-40def0a8>or select files</button></div>', 2), Hc = [
  kc
], Wc = /* @__PURE__ */ Vn({
  __name: "DropZone",
  props: {
    modelValue: { default: [] },
    accept: { default: "*" },
    base64: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = wt([]), r = wt(null), s = Po(), i = (c) => {
      const f = c.target.files || c.dataTransfer.files || r.value.files;
      for (let u = 0; u < f.length; u++) {
        const p = f[u];
        if (n.base64) {
          const d = new FileReader();
          d.onload = () => {
            p.base64 = d.result, o.value.unshift(p);
          }, d.readAsDataURL(p);
        } else
          o.value.unshift(p);
      }
      t("update:modelValue", o.value);
    };
    return (c, f) => (rt(), bt("div", Sc, [
      Q("input", {
        type: "file",
        id: "dropZoneFile-" + at(s),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: r,
        onChange: i,
        multiple: "",
        accept: e.accept
      }, null, 40, jc),
      Q("div", {
        class: "dropZoneWrap",
        onDragenter: f[0] || (f[0] = Me(() => {
        }, ["prevent"])),
        onDragover: f[1] || (f[1] = Me(() => {
        }, ["prevent"])),
        onDrop: Me(i, ["prevent"])
      }, [
        Q("label", {
          for: "dropZoneFile-" + at(s),
          class: "dropZoneLabel"
        }, Hc, 8, Lc)
      ], 40, Bc)
    ]));
  }
}), Uc = `.dropZone[data-v-40def0a8]{overflow-wrap:break-word;padding:.5rem;max-width:calc(100vw - .5rem);max-height:calc(100vh - .5rem)}.dropZone .dropZoneFile[data-v-40def0a8]{position:absolute;width:0px;height:0px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.dropZone .dropZoneWrap[data-v-40def0a8]{border-width:3px;border-style:dashed;border-color:currentColor;box-shadow:-1px 5px 25px -9px #0003}.dropZone .dropZoneWrap .dropZoneLabel[data-v-40def0a8]{display:grid;place-items:center;width:100%;height:100%;padding-top:1.5rem;padding-bottom:2.5rem;cursor:pointer}.dropZone .dropZoneWrap .dropZoneImage[data-v-40def0a8]{pointer-events:none;color:currentColor}.dropZone .dropZoneWrap .dropZoneBody[data-v-40def0a8]{text-align:center}.dropZone .dropZoneWrap .dropZoneBody p[data-v-40def0a8],.dropZone .dropZoneWrap .dropZoneBody span[data-v-40def0a8]{margin:0}.dropZone .dropZoneWrap .dropZoneBody .dropZoneTitle[data-v-40def0a8]{color:inherit}.dropZone .dropZoneWrap .dropZoneBody .dropZoneText[data-v-40def0a8]{color:#737373}.dropZone .dropZoneWrap .dropZoneBody .button[data-v-40def0a8]{background-color:transparent;display:inline-block;text-align:center;vertical-align:middle;pointer-events:none;font-size:1rem;line-height:1.5rem;font-weight:400;user-select:none;margin-top:1.25rem;border-radius:.35rem;color:currentColor;border:2px solid currentColor;padding:.375rem .75rem}.fg-inherit[data-v-40def0a8]{color:inherit!important}
`, Mo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Kc = /* @__PURE__ */ Mo(Wc, [["styles", [Uc]], ["__scopeId", "data-v-40def0a8"]]), Zn = (e) => (Wi("data-v-7c29b21f"), e = e(), Ui(), e), zc = { class: "dropZone tedirThumbnail" }, qc = ["id"], Yc = ["onDrop"], Jc = ["for"], Xc = ["src"], Qc = ["width", "height"], Gc = /* @__PURE__ */ Zn(() => /* @__PURE__ */ Q("path", { d: "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" }, null, -1)), ef = /* @__PURE__ */ Zn(() => /* @__PURE__ */ Q("path", { d: "M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" }, null, -1)), tf = [
  Gc,
  ef
], nf = { class: "dropZoneBody" }, of = /* @__PURE__ */ Zn(() => /* @__PURE__ */ Q("p", null, [
  /* @__PURE__ */ Q("strong", { class: "dropZoneTitle" }, "Drag and drop thumbnail")
], -1)), rf = /* @__PURE__ */ Zn(() => /* @__PURE__ */ Q("p", null, [
  /* @__PURE__ */ Q("small", { class: "dropZoneText" }, "Your thumbnail will be shown here")
], -1)), sf = {
  type: "button",
  class: "button"
}, lf = /* @__PURE__ */ Vn({
  __name: "ThumbBox",
  props: {
    modelValue: { default: "" },
    iconSize: { default: "10em" },
    showButton: { type: Boolean, default: !0 },
    type: { default: "both" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    var c, f;
    const n = e, o = wt(""), r = wt(null), s = Po();
    if (typeof n.modelValue == "string")
      o.value = n.modelValue;
    else if (typeof n.modelValue == "object" && ((c = n.modelValue) == null ? void 0 : c.base64))
      o.value = n.modelValue.base64;
    else if (typeof n.modelValue == "object" && ((f = n.modelValue) == null ? void 0 : f.name)) {
      const u = new FileReader();
      u.onload = function() {
        const p = u.result;
        o.value = String(p);
      }, u.readAsDataURL(n.modelValue);
    }
    const i = (u) => {
      const p = u.target.files || u.dataTransfer.files || r.value.files;
      for (let d = 0; d < p.length; d++) {
        const g = p[d], x = new FileReader();
        x.onload = () => {
          const T = x.result;
          n.type === "base64" ? (o.value = String(T), t("update:modelValue", T)) : n.type === "file" ? (o.value = String(T), t("update:modelValue", g)) : (g.base64 = T, o.value = String(g.base64), t("update:modelValue", g));
        }, x.readAsDataURL(g);
      }
    };
    return (u, p) => (rt(), bt("div", zc, [
      Q("input", {
        type: "file",
        id: "dropZoneThumbnail-" + at(s),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: r,
        onChange: i,
        accept: "image/*"
      }, null, 40, qc),
      Q("div", {
        class: "dropZoneWrap",
        onDragenter: p[0] || (p[0] = Me(() => {
        }, ["prevent"])),
        onDragover: p[1] || (p[1] = Me(() => {
        }, ["prevent"])),
        onDrop: Me(i, ["prevent"])
      }, [
        Q("label", {
          for: "dropZoneThumbnail-" + at(s),
          class: mn(["dropZoneLabel", o.value ? "tedirThumbnailLabel" : ""])
        }, [
          o.value ? (rt(), bt("img", {
            key: 0,
            src: o.value,
            class: "tedirThumbnailImage",
            alt: "Thumbnail"
          }, null, 8, Xc)) : (rt(), bt(he, { key: 1 }, [
            (rt(), bt("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: e.iconSize,
              height: e.iconSize,
              fill: "currentColor",
              class: "dropZoneImage my-10px",
              viewBox: "0 0 16 16"
            }, tf, 8, Qc)),
            Q("div", nf, [
              of,
              rf,
              ml(Q("button", sf, "or select thumbnail", 512), [
                [Zc, e.showButton]
              ])
            ])
          ], 64))
        ], 10, Jc)
      ], 40, Yc)
    ]));
  }
}), cf = `.dropZone[data-v-7c29b21f]{overflow-wrap:break-word;padding:.5rem;max-width:calc(100vw - .5rem);max-height:calc(100vh - .5rem)}.dropZone .dropZoneFile[data-v-7c29b21f]{position:absolute;width:0px;height:0px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.dropZone .dropZoneWrap[data-v-7c29b21f]{border-width:3px;border-style:dashed;border-color:currentColor;box-shadow:-1px 5px 25px -9px #0003}.dropZone .dropZoneWrap .dropZoneLabel[data-v-7c29b21f]{display:grid;place-items:center;width:100%;height:100%;padding-top:1.5rem;padding-bottom:2.5rem;cursor:pointer}.dropZone .dropZoneWrap .dropZoneImage[data-v-7c29b21f]{pointer-events:none;color:currentColor}.dropZone .dropZoneWrap .dropZoneBody[data-v-7c29b21f]{text-align:center}.dropZone .dropZoneWrap .dropZoneBody p[data-v-7c29b21f],.dropZone .dropZoneWrap .dropZoneBody span[data-v-7c29b21f]{margin:0}.dropZone .dropZoneWrap .dropZoneBody .dropZoneTitle[data-v-7c29b21f]{color:inherit}.dropZone .dropZoneWrap .dropZoneBody .dropZoneText[data-v-7c29b21f]{color:#737373}.dropZone .dropZoneWrap .dropZoneBody .button[data-v-7c29b21f]{background-color:transparent;display:inline-block;text-align:center;vertical-align:middle;pointer-events:none;font-size:1rem;line-height:1.5rem;font-weight:400;user-select:none;margin-top:1.25rem;border-radius:.35rem;color:currentColor;border:2px solid currentColor;padding:.375rem .75rem}.tedirThumbnail .dropZoneWrap label.tedirThumbnailLabel[data-v-7c29b21f]{padding-top:0;padding-bottom:0}.tedirThumbnail .dropZoneWrap .dropZoneBody p .dropZoneTitle[data-v-7c29b21f]{color:inherit}.tedirThumbnailImage[data-v-7c29b21f]{object-fit:fill;width:100%}
`, ff = /* @__PURE__ */ Mo(lf, [["styles", [cf]], ["__scopeId", "data-v-7c29b21f"]]), af = { class: "dropZone tedirAttach" }, uf = ["id", "accept"], df = ["onDrop"], pf = ["for"], hf = /* @__PURE__ */ Vn({
  __name: "AttachBox",
  props: {
    modelValue: { default: [] },
    accept: { default: "*" },
    base64: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = wt([]), r = wt(null), s = Po(), i = (c) => {
      const f = c.target.files || c.dataTransfer.files || r.value.files;
      for (let u = 0; u < f.length; u++) {
        const p = f[u];
        if (n.base64) {
          const d = new FileReader();
          d.onload = () => {
            p.base64 = d.result, o.value.unshift(p);
          }, d.readAsDataURL(p);
        } else
          o.value.unshift(p);
      }
      t("update:modelValue", o.value);
    };
    return (c, f) => (rt(), bt("div", af, [
      Q("input", {
        type: "file",
        id: "dropZoneFile-" + at(s),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: r,
        onChange: i,
        multiple: "",
        accept: e.accept
      }, null, 40, uf),
      Q("div", {
        class: "dropZoneWrap",
        onDragenter: f[0] || (f[0] = Me(() => {
        }, ["prevent"])),
        onDragover: f[1] || (f[1] = Me(() => {
        }, ["prevent"])),
        onDrop: Me(i, ["prevent"])
      }, [
        Q("label", {
          for: "dropZoneFile-" + at(s),
          class: "dropZoneLabel tedirAttachLabel"
        }, [
          _l(c.$slots, "default", {}, void 0, !0)
        ], 8, pf)
      ], 40, df)
    ]));
  }
}), mf = `.dropZone[data-v-236ed389]{overflow-wrap:break-word;padding:.5rem;max-width:calc(100vw - .5rem);max-height:calc(100vh - .5rem)}.dropZone .dropZoneFile[data-v-236ed389]{position:absolute;width:0px;height:0px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.dropZone .dropZoneWrap[data-v-236ed389]{border-width:3px;border-style:dashed;border-color:currentColor;box-shadow:-1px 5px 25px -9px #0003}.dropZone .dropZoneWrap .dropZoneLabel[data-v-236ed389]{display:grid;place-items:center;width:100%;height:100%;padding-top:1.5rem;padding-bottom:2.5rem;cursor:pointer}.dropZone .dropZoneWrap .dropZoneImage[data-v-236ed389]{pointer-events:none;color:currentColor}.dropZone .dropZoneWrap .dropZoneBody[data-v-236ed389]{text-align:center}.dropZone .dropZoneWrap .dropZoneBody p[data-v-236ed389],.dropZone .dropZoneWrap .dropZoneBody span[data-v-236ed389]{margin:0}.dropZone .dropZoneWrap .dropZoneBody .dropZoneTitle[data-v-236ed389]{color:inherit}.dropZone .dropZoneWrap .dropZoneBody .dropZoneText[data-v-236ed389]{color:#737373}.dropZone .dropZoneWrap .dropZoneBody .button[data-v-236ed389]{background-color:transparent;display:inline-block;text-align:center;vertical-align:middle;pointer-events:none;font-size:1rem;line-height:1.5rem;font-weight:400;user-select:none;margin-top:1.25rem;border-radius:.35rem;color:currentColor;border:2px solid currentColor;padding:.375rem .75rem}.tedirAttach[data-v-236ed389]{padding:0;max-width:none;max-height:none;display:inline-block}.tedirAttach .dropZoneWrap[data-v-236ed389]{border:none;box-shadow:none}.tedirAttach .dropZoneWrap label.tedirAttachLabel[data-v-236ed389]{display:inline-grid;place-items:normal;padding:0}
`, gf = /* @__PURE__ */ Mo(hf, [["styles", [mf]], ["__scopeId", "data-v-236ed389"]]), _f = Fo(Kc), vf = Fo(ff), Ef = Fo(gf);
function bf() {
  customElements.define("drop-zone", _f), customElements.define("thumb-box", vf), customElements.define("attach-box", Ef);
}
export {
  Ef as AttachBox,
  _f as DropZone,
  vf as ThumbBox,
  bf as useTedirDropZone
};

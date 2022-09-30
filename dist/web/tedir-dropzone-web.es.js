function Ot(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const Cs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ts = /* @__PURE__ */ Ot(Cs);
function gr(e) {
  return !!e || e === "";
}
function po(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = ee(o) ? As(o) : po(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else {
    if (ee(e))
      return e;
    if (z(e))
      return e;
  }
}
const Is = /;(?![^(]*\))/g, $s = /:(.+)/;
function As(e) {
  const t = {};
  return e.split(Is).forEach((n) => {
    if (n) {
      const o = n.split($s);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Rt(e) {
  let t = "";
  if (ee(e))
    t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const o = Rt(e[n]);
      o && (t += o + " ");
    }
  else if (z(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const L = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, gt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ne = () => {
}, Er = () => !1, Ps = /^on[^a-z]/, Kt = (e) => Ps.test(e), fn = (e) => e.startsWith("onUpdate:"), J = Object.assign, ho = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Fs = Object.prototype.hasOwnProperty, F = (e, t) => Fs.call(e, t), T = Array.isArray, Et = (e) => gn(e) === "[object Map]", Ms = (e) => gn(e) === "[object Set]", $ = (e) => typeof e == "function", ee = (e) => typeof e == "string", mo = (e) => typeof e == "symbol", z = (e) => e !== null && typeof e == "object", _o = (e) => z(e) && $(e.then) && $(e.catch), Rs = Object.prototype.toString, gn = (e) => Rs.call(e), go = (e) => gn(e).slice(8, -1), Ss = (e) => gn(e) === "[object Object]", Eo = (e) => ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, tn = /* @__PURE__ */ Ot(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), js = /* @__PURE__ */ Ot("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), En = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Zs = /-(\w)/g, We = En((e) => e.replace(Zs, (t, n) => n ? n.toUpperCase() : "")), Ls = /\B([A-Z])/g, Ne = En((e) => e.replace(Ls, "-$1").toLowerCase()), vn = En((e) => e.charAt(0).toUpperCase() + e.slice(1)), Xe = En((e) => e ? `on${vn(e)}` : ""), St = (e, t) => !Object.is(e, t), Dt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, un = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Un = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let jo;
const vr = () => jo || (jo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Kn(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let De;
class Bs {
  constructor(t = !1) {
    this.active = !0, this.effects = [], this.cleanups = [], !t && De && (this.parent = De, this.index = (De.scopes || (De.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = De;
      try {
        return De = this, t();
      } finally {
        De = n;
      }
    } else
      process.env.NODE_ENV !== "production" && Kn("cannot run an inactive effect scope.");
  }
  on() {
    De = this;
  }
  off() {
    De = this.parent;
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
function Hs(e, t = De) {
  t && t.active && t.effects.push(e);
}
const jt = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, br = (e) => (e.w & ze) > 0, Nr = (e) => (e.n & ze) > 0, ks = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= ze;
}, Us = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      br(r) && !Nr(r) ? r.delete(e) : t[n++] = r, r.w &= ~ze, r.n &= ~ze;
    }
    t.length = n;
  }
}, Wn = /* @__PURE__ */ new WeakMap();
let Tt = 0, ze = 1;
const zn = 30;
let ce;
const ot = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), qn = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class vo {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Hs(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = ce, n = Ke;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = ce, ce = this, Ke = !0, ze = 1 << ++Tt, Tt <= zn ? ks(this) : Zo(this), this.fn();
    } finally {
      Tt <= zn && Us(this), ze = 1 << --Tt, ce = this.parent, Ke = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ce === this ? this.deferStop = !0 : this.active && (Zo(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Zo(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Ke = !0;
const yr = [];
function ft() {
  yr.push(Ke), Ke = !1;
}
function ut() {
  const e = yr.pop();
  Ke = e === void 0 ? !0 : e;
}
function pe(e, t, n) {
  if (Ke && ce) {
    let o = Wn.get(e);
    o || Wn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = jt());
    const s = process.env.NODE_ENV !== "production" ? { effect: ce, target: e, type: t, key: n } : void 0;
    Yn(r, s);
  }
}
function Yn(e, t) {
  let n = !1;
  Tt <= zn ? Nr(e) || (e.n |= ze, n = !br(e)) : n = !e.has(ce), n && (e.add(ce), ce.deps.push(e), process.env.NODE_ENV !== "production" && ce.onTrack && ce.onTrack(Object.assign({ effect: ce }, t)));
}
function Re(e, t, n, o, r, s) {
  const i = Wn.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && T(e))
    i.forEach((a, p) => {
      (p === "length" || p >= o) && c.push(a);
    });
  else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        T(e) ? Eo(n) && c.push(i.get("length")) : (c.push(i.get(ot)), Et(e) && c.push(i.get(qn)));
        break;
      case "delete":
        T(e) || (c.push(i.get(ot)), Et(e) && c.push(i.get(qn)));
        break;
      case "set":
        Et(e) && c.push(i.get(ot));
        break;
    }
  const f = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (c.length === 1)
    c[0] && (process.env.NODE_ENV !== "production" ? mt(c[0], f) : mt(c[0]));
  else {
    const a = [];
    for (const p of c)
      p && a.push(...p);
    process.env.NODE_ENV !== "production" ? mt(jt(a), f) : mt(jt(a));
  }
}
function mt(e, t) {
  const n = T(e) ? e : [...e];
  for (const o of n)
    o.computed && Lo(o, t);
  for (const o of n)
    o.computed || Lo(o, t);
}
function Lo(e, t) {
  (e !== ce || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(J({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const Ks = /* @__PURE__ */ Ot("__proto__,__v_isRef,__isVue"), Or = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(mo)
), Ws = /* @__PURE__ */ bn(), zs = /* @__PURE__ */ bn(!1, !0), qs = /* @__PURE__ */ bn(!0), Ys = /* @__PURE__ */ bn(!0, !0), Bo = /* @__PURE__ */ Js();
function Js() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = A(this);
      for (let s = 0, i = this.length; s < i; s++)
        pe(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(A)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      ft();
      const o = A(this)[t].apply(this, n);
      return ut(), o;
    };
  }), e;
}
function bn(e = !1, t = !1) {
  return function(o, r, s) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && s === (e ? t ? $r : Ir : t ? Tr : Cr).get(o))
      return o;
    const i = T(o);
    if (!e && i && F(Bo, r))
      return Reflect.get(Bo, r, s);
    const c = Reflect.get(o, r, s);
    return (mo(r) ? Or.has(r) : Ks(r)) || (e || pe(o, "get", r), t) ? c : G(c) ? i && Eo(r) ? c : c.value : z(c) ? e ? Ar(c) : No(c) : c;
  };
}
const Xs = /* @__PURE__ */ wr(), Qs = /* @__PURE__ */ wr(!0);
function wr(e = !1) {
  return function(n, o, r, s) {
    let i = n[o];
    if (qe(i) && G(i) && !G(r))
      return !1;
    if (!e && (!an(r) && !qe(r) && (i = A(i), r = A(r)), !T(n) && G(i) && !G(r)))
      return i.value = r, !0;
    const c = T(n) && Eo(o) ? Number(o) < n.length : F(n, o), f = Reflect.set(n, o, r, s);
    return n === A(s) && (c ? St(r, i) && Re(n, "set", o, r, i) : Re(n, "add", o, r)), f;
  };
}
function Gs(e, t) {
  const n = F(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && Re(e, "delete", t, void 0, o), r;
}
function ei(e, t) {
  const n = Reflect.has(e, t);
  return (!mo(t) || !Or.has(t)) && pe(e, "has", t), n;
}
function ti(e) {
  return pe(e, "iterate", T(e) ? "length" : ot), Reflect.ownKeys(e);
}
const xr = {
  get: Ws,
  set: Xs,
  deleteProperty: Gs,
  has: ei,
  ownKeys: ti
}, Dr = {
  get: qs,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && Kn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && Kn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, ni = /* @__PURE__ */ J({}, xr, {
  get: zs,
  set: Qs
}), oi = /* @__PURE__ */ J({}, Dr, {
  get: Ys
}), bo = (e) => e, Nn = (e) => Reflect.getPrototypeOf(e);
function Jt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = A(e), s = A(t);
  n || (t !== s && pe(r, "get", t), pe(r, "get", s));
  const { has: i } = Nn(r), c = o ? bo : n ? yo : Zt;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, s))
    return c(e.get(s));
  e !== r && e.get(t);
}
function Xt(e, t = !1) {
  const n = this.__v_raw, o = A(n), r = A(e);
  return t || (e !== r && pe(o, "has", e), pe(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Qt(e, t = !1) {
  return e = e.__v_raw, !t && pe(A(e), "iterate", ot), Reflect.get(e, "size", e);
}
function Ho(e) {
  e = A(e);
  const t = A(this);
  return Nn(t).has.call(t, e) || (t.add(e), Re(t, "add", e, e)), this;
}
function ko(e, t) {
  t = A(t);
  const n = A(this), { has: o, get: r } = Nn(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && Vr(n, o, e) : (e = A(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? St(t, i) && Re(n, "set", e, t, i) : Re(n, "add", e, t), this;
}
function Uo(e) {
  const t = A(this), { has: n, get: o } = Nn(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && Vr(t, n, e) : (e = A(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && Re(t, "delete", e, void 0, s), i;
}
function Ko() {
  const e = A(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? Et(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Re(e, "clear", void 0, void 0, n), o;
}
function Gt(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, c = A(i), f = t ? bo : e ? yo : Zt;
    return !e && pe(c, "iterate", ot), i.forEach((a, p) => o.call(r, f(a), f(p), s));
  };
}
function en(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = A(r), i = Et(s), c = e === "entries" || e === Symbol.iterator && i, f = e === "keys" && i, a = r[e](...o), p = n ? bo : t ? yo : Zt;
    return !t && pe(s, "iterate", f ? qn : ot), {
      next() {
        const { value: d, done: g } = a.next();
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
function Be(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${vn(e)} operation ${n}failed: target is readonly.`, A(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function ri() {
  const e = {
    get(s) {
      return Jt(this, s);
    },
    get size() {
      return Qt(this);
    },
    has: Xt,
    add: Ho,
    set: ko,
    delete: Uo,
    clear: Ko,
    forEach: Gt(!1, !1)
  }, t = {
    get(s) {
      return Jt(this, s, !1, !0);
    },
    get size() {
      return Qt(this);
    },
    has: Xt,
    add: Ho,
    set: ko,
    delete: Uo,
    clear: Ko,
    forEach: Gt(!1, !0)
  }, n = {
    get(s) {
      return Jt(this, s, !0);
    },
    get size() {
      return Qt(this, !0);
    },
    has(s) {
      return Xt.call(this, s, !0);
    },
    add: Be("add"),
    set: Be("set"),
    delete: Be("delete"),
    clear: Be("clear"),
    forEach: Gt(!0, !1)
  }, o = {
    get(s) {
      return Jt(this, s, !0, !0);
    },
    get size() {
      return Qt(this, !0);
    },
    has(s) {
      return Xt.call(this, s, !0);
    },
    add: Be("add"),
    set: Be("set"),
    delete: Be("delete"),
    clear: Be("clear"),
    forEach: Gt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = en(s, !1, !1), n[s] = en(s, !0, !1), t[s] = en(s, !1, !0), o[s] = en(s, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [si, ii, li, ci] = /* @__PURE__ */ ri();
function yn(e, t) {
  const n = t ? e ? ci : li : e ? ii : si;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(F(n, r) && r in o ? n : o, r, s);
}
const fi = {
  get: /* @__PURE__ */ yn(!1, !1)
}, ui = {
  get: /* @__PURE__ */ yn(!1, !0)
}, ai = {
  get: /* @__PURE__ */ yn(!0, !1)
}, di = {
  get: /* @__PURE__ */ yn(!0, !0)
};
function Vr(e, t, n) {
  const o = A(n);
  if (o !== n && t.call(e, o)) {
    const r = go(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Cr = /* @__PURE__ */ new WeakMap(), Tr = /* @__PURE__ */ new WeakMap(), Ir = /* @__PURE__ */ new WeakMap(), $r = /* @__PURE__ */ new WeakMap();
function pi(e) {
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
function hi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : pi(go(e));
}
function No(e) {
  return qe(e) ? e : On(e, !1, xr, fi, Cr);
}
function mi(e) {
  return On(e, !1, ni, ui, Tr);
}
function Ar(e) {
  return On(e, !0, Dr, ai, Ir);
}
function _t(e) {
  return On(e, !0, oi, di, $r);
}
function On(e, t, n, o, r) {
  if (!z(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = hi(e);
  if (i === 0)
    return e;
  const c = new Proxy(e, i === 2 ? o : n);
  return r.set(e, c), c;
}
function rt(e) {
  return qe(e) ? rt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function qe(e) {
  return !!(e && e.__v_isReadonly);
}
function an(e) {
  return !!(e && e.__v_isShallow);
}
function Jn(e) {
  return rt(e) || qe(e);
}
function A(e) {
  const t = e && e.__v_raw;
  return t ? A(t) : e;
}
function Pr(e) {
  return un(e, "__v_skip", !0), e;
}
const Zt = (e) => z(e) ? No(e) : e, yo = (e) => z(e) ? Ar(e) : e;
function Fr(e) {
  Ke && ce && (e = A(e), process.env.NODE_ENV !== "production" ? Yn(e.dep || (e.dep = jt()), {
    target: e,
    type: "get",
    key: "value"
  }) : Yn(e.dep || (e.dep = jt())));
}
function Mr(e, t) {
  e = A(e), e.dep && (process.env.NODE_ENV !== "production" ? mt(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : mt(e.dep));
}
function G(e) {
  return !!(e && e.__v_isRef === !0);
}
function dn(e) {
  return _i(e, !1);
}
function _i(e, t) {
  return G(e) ? e : new gi(e, t);
}
class gi {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : A(t), this._value = n ? t : Zt(t);
  }
  get value() {
    return Fr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || an(t) || qe(t);
    t = n ? t : A(t), St(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Zt(t), Mr(this, t));
  }
}
function Lt(e) {
  return G(e) ? e.value : e;
}
const Ei = {
  get: (e, t, n) => Lt(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return G(r) && !G(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Rr(e) {
  return rt(e) ? e : new Proxy(e, Ei);
}
var Sr;
class vi {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Sr] = !1, this._dirty = !0, this.effect = new vo(t, () => {
      this._dirty || (this._dirty = !0, Mr(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = A(this);
    return Fr(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Sr = "__v_isReadonly";
function bi(e, t, n = !1) {
  let o, r;
  const s = $(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : ne) : (o = e.get, r = e.set);
  const i = new vi(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const st = [];
function nn(e) {
  st.push(e);
}
function on() {
  st.pop();
}
function y(e, ...t) {
  ft();
  const n = st.length ? st[st.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = Ni();
  if (o)
    Fe(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: s }) => `at <${An(n, s.type)}>`).join(`
`),
      r
    ]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...yi(r)), console.warn(...s);
  }
  ut();
}
function Ni() {
  let e = st[st.length - 1];
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
function yi(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Oi(n));
  }), t;
}
function Oi({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${An(e.component, e.type, o)}`, s = ">" + n;
  return e.props ? [r, ...wi(e.props), s] : [r + s];
}
function wi(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...jr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function jr(e, t, n) {
  return ee(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : G(t) ? (t = jr(e, A(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : $(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = A(t), n ? t : [`${e}=`, t]);
}
const Oo = {
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
function Fe(e, t, n, o) {
  let r;
  try {
    r = o ? e(...o) : e();
  } catch (s) {
    wn(s, t, n);
  }
  return r;
}
function ge(e, t, n, o) {
  if ($(e)) {
    const s = Fe(e, t, n, o);
    return s && _o(s) && s.catch((i) => {
      wn(i, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(ge(e[s], t, n, o));
  return r;
}
function wn(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? Oo[n] : n;
    for (; s; ) {
      const a = s.ec;
      if (a) {
        for (let p = 0; p < a.length; p++)
          if (a[p](e, i, c) === !1)
            return;
      }
      s = s.parent;
    }
    const f = t.appContext.config.errorHandler;
    if (f) {
      Fe(f, null, 10, [e, i, c]);
      return;
    }
  }
  xi(e, n, r, o);
}
function xi(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = Oo[t];
    if (n && nn(n), y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && on(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Bt = !1, Xn = !1;
const re = [];
let Ce = 0;
const vt = [];
let Ve = null, He = 0;
const Zr = /* @__PURE__ */ Promise.resolve();
let wo = null;
const Di = 100;
function Lr(e) {
  const t = wo || Zr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Vi(e) {
  let t = Ce + 1, n = re.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    Ht(re[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function xn(e) {
  (!re.length || !re.includes(e, Bt && e.allowRecurse ? Ce + 1 : Ce)) && (e.id == null ? re.push(e) : re.splice(Vi(e.id), 0, e), Br());
}
function Br() {
  !Bt && !Xn && (Xn = !0, wo = Zr.then(Ur));
}
function Ci(e) {
  const t = re.indexOf(e);
  t > Ce && re.splice(t, 1);
}
function Hr(e) {
  T(e) ? vt.push(...e) : (!Ve || !Ve.includes(e, e.allowRecurse ? He + 1 : He)) && vt.push(e), Br();
}
function Wo(e, t = Bt ? Ce + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < re.length; t++) {
    const n = re[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && xo(e, n))
        continue;
      re.splice(t, 1), t--, n();
    }
  }
}
function kr(e) {
  if (vt.length) {
    const t = [...new Set(vt)];
    if (vt.length = 0, Ve) {
      Ve.push(...t);
      return;
    }
    for (Ve = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ve.sort((n, o) => Ht(n) - Ht(o)), He = 0; He < Ve.length; He++)
      process.env.NODE_ENV !== "production" && xo(e, Ve[He]) || Ve[He]();
    Ve = null, He = 0;
  }
}
const Ht = (e) => e.id == null ? 1 / 0 : e.id, Ti = (e, t) => {
  const n = Ht(e) - Ht(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Ur(e) {
  Xn = !1, Bt = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), re.sort(Ti);
  const t = process.env.NODE_ENV !== "production" ? (n) => xo(e, n) : ne;
  try {
    for (Ce = 0; Ce < re.length; Ce++) {
      const n = re[Ce];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Fe(n, null, 14);
      }
    }
  } finally {
    Ce = 0, re.length = 0, kr(e), Bt = !1, wo = null, (re.length || vt.length) && Ur(e);
  }
}
function xo(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Di) {
      const o = t.ownerInstance, r = o && bs(o.type);
      return y(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let it = !1;
const ht = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (vr().__VUE_HMR_RUNTIME__ = {
  createRecord: jn(Kr),
  rerender: jn(Ai),
  reload: jn(Pi)
});
const ct = /* @__PURE__ */ new Map();
function Ii(e) {
  const t = e.type.__hmrId;
  let n = ct.get(t);
  n || (Kr(t, e.type), n = ct.get(t)), n.instances.add(e);
}
function $i(e) {
  ct.get(e.type.__hmrId).instances.delete(e);
}
function Kr(e, t) {
  return ct.has(e) ? !1 : (ct.set(e, {
    initialDef: Pt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Pt(e) {
  return Ns(e) ? e.__vccOpts : e;
}
function Ai(e, t) {
  const n = ct.get(e);
  !n || (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Pt(o.type).render = t), o.renderCache = [], it = !0, o.update(), it = !1;
  }));
}
function Pi(e, t) {
  const n = ct.get(e);
  if (!n)
    return;
  t = Pt(t), zo(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = Pt(r.type);
    ht.has(s) || (s !== n.initialDef && zo(s, t), ht.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (ht.add(s), r.ceReload(t.styles), ht.delete(s)) : r.parent ? (xn(r.parent.update), r.parent.type.__asyncLoader && r.parent.ceReload && r.parent.ceReload(t.styles)) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Hr(() => {
    for (const r of o)
      ht.delete(Pt(r.type));
  });
}
function zo(e, t) {
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
let Ge, It = [], Qn = !1;
function Wt(e, ...t) {
  Ge ? Ge.emit(e, ...t) : Qn || It.push({ event: e, args: t });
}
function Wr(e, t) {
  var n, o;
  Ge = e, Ge ? (Ge.enabled = !0, It.forEach(({ event: r, args: s }) => Ge.emit(r, ...s)), It = []) : typeof window < "u" && window.HTMLElement && !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Wr(s, t);
  }), setTimeout(() => {
    Ge || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Qn = !0, It = []);
  }, 3e3)) : (Qn = !0, It = []);
}
function Fi(e, t) {
  Wt("app:init", e, t, {
    Fragment: _e,
    Text: Tn,
    Comment: fe,
    Static: Ft
  });
}
function Mi(e) {
  Wt("app:unmount", e);
}
const Ri = /* @__PURE__ */ Do("component:added"), zr = /* @__PURE__ */ Do("component:updated"), Si = /* @__PURE__ */ Do("component:removed");
function Do(e) {
  return (t) => {
    Wt(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const ji = /* @__PURE__ */ qr("perf:start"), Zi = /* @__PURE__ */ qr("perf:end");
function qr(e) {
  return (t, n, o) => {
    Wt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Li(e, t, n) {
  Wt("component:emit", e.appContext.app, e, t, n);
}
function Bi(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || L;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: p, propsOptions: [d] } = e;
    if (p)
      if (!(t in p))
        (!d || !(Xe(t) in d)) && y(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Xe(t)}" prop.`);
      else {
        const g = p[t];
        $(g) && (g(...n) || y(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && t.slice(7);
  if (i && i in o) {
    const p = `${i === "modelValue" ? "model" : i}Modifiers`, { number: d, trim: g } = o[p] || L;
    g && (r = n.map((D) => D.trim())), d && (r = n.map(Un));
  }
  if (process.env.NODE_ENV !== "production" && Li(e, t, r), process.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[Xe(p)] && y(`Event "${p}" is emitted in component ${An(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ne(t)}" instead of "${t}".`);
  }
  let c, f = o[c = Xe(t)] || o[c = Xe(We(t))];
  !f && s && (f = o[c = Xe(Ne(t))]), f && ge(f, e, 6, r);
  const a = o[c + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, ge(a, e, 6, r);
  }
}
function Yr(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, c = !1;
  if (!$(e)) {
    const f = (a) => {
      const p = Yr(a, t, !0);
      p && (c = !0, J(i, p));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !s && !c ? (z(e) && o.set(e, null), null) : (T(s) ? s.forEach((f) => i[f] = null) : J(i, s), z(e) && o.set(e, i), i);
}
function Dn(e, t) {
  return !e || !Kt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), F(e, t[0].toLowerCase() + t.slice(1)) || F(e, Ne(t)) || F(e, t));
}
let he = null, Vn = null;
function pn(e) {
  const t = he;
  return he = e, Vn = e && e.type.__scopeId || null, t;
}
function Hi(e) {
  Vn = e;
}
function ki() {
  Vn = null;
}
function Ui(e, t = he, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && sr(-1);
    const s = pn(t), i = e(...r);
    return pn(s), o._d && sr(1), process.env.NODE_ENV !== "production" && zr(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Gn = !1;
function hn() {
  Gn = !0;
}
function Zn(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: s, propsOptions: [i], slots: c, attrs: f, emit: a, render: p, renderCache: d, data: g, setupState: D, ctx: P, inheritAttrs: C } = e;
  let U, B;
  const Z = pn(e);
  process.env.NODE_ENV !== "production" && (Gn = !1);
  try {
    if (n.shapeFlag & 4) {
      const W = r || o;
      U = ve(p.call(W, W, d, s, D, g, P)), B = f;
    } else {
      const W = t;
      process.env.NODE_ENV !== "production" && f === s && hn(), U = ve(W.length > 1 ? W(s, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return hn(), f;
        },
        slots: c,
        emit: a
      } : { attrs: f, slots: c, emit: a }) : W(s, null)), B = t.props ? f : Wi(f);
    }
  } catch (W) {
    Mt.length = 0, wn(W, e, 1), U = Me(fe);
  }
  let q = U, ue;
  if (process.env.NODE_ENV !== "production" && U.patchFlag > 0 && U.patchFlag & 2048 && ([q, ue] = Ki(U)), B && C !== !1) {
    const W = Object.keys(B), { shapeFlag: je } = q;
    if (W.length) {
      if (je & 7)
        i && W.some(fn) && (B = zi(B, i)), q = Te(q, B);
      else if (process.env.NODE_ENV !== "production" && !Gn && q.type !== fe) {
        const ye = Object.keys(f), M = [], K = [];
        for (let Y = 0, oe = ye.length; Y < oe; Y++) {
          const te = ye[Y];
          Kt(te) ? fn(te) || M.push(te[2].toLowerCase() + te.slice(3)) : K.push(te);
        }
        K.length && y(`Extraneous non-props attributes (${K.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), M.length && y(`Extraneous non-emits event listeners (${M.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !qo(q) && y("Runtime directive used on component with non-element root node. The directives will not function as intended."), q = Te(q), q.dirs = q.dirs ? q.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !qo(q) && y("Component inside <Transition> renders non-element root node that cannot be animated."), q.transition = n.transition), process.env.NODE_ENV !== "production" && ue ? ue(q) : U = q, pn(Z), U;
}
const Ki = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Jr(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (c) => {
    t[r] = c, n && (s > -1 ? n[s] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [ve(o), i];
};
function Jr(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if ($o(o)) {
      if (o.type !== fe || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const Wi = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Kt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, zi = (e, t) => {
  const n = {};
  for (const o in e)
    (!fn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, qo = (e) => e.shapeFlag & 7 || e.type === fe;
function qi(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: c, patchFlag: f } = t, a = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || c) && it || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? Yo(o, i, a) : !!i;
    if (f & 8) {
      const p = t.dynamicProps;
      for (let d = 0; d < p.length; d++) {
        const g = p[d];
        if (i[g] !== o[g] && !Dn(a, g))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : o === i ? !1 : o ? i ? Yo(o, i, a) : !0 : !!i;
  return !1;
}
function Yo(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !Dn(n, s))
      return !0;
  }
  return !1;
}
function Yi({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Ji = (e) => e.__isSuspense;
function Xi(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : Hr(e);
}
function Qi(e, t) {
  if (!Q)
    process.env.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = Q.provides;
    const o = Q.parent && Q.parent.provides;
    o === n && (n = Q.provides = Object.create(o)), n[e] = t;
  }
}
function Ln(e, t, n = !1) {
  const o = Q || he;
  if (o) {
    const r = o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(o.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const Jo = {};
function rn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !$(t) && y("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), Xr(e, t, n);
}
function Xr(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = L) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && y('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && y('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const c = (Z) => {
    y("Invalid watch source: ", Z, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, f = Q;
  let a, p = !1, d = !1;
  if (G(e) ? (a = () => e.value, p = an(e)) : rt(e) ? (a = () => e, o = !0) : T(e) ? (d = !0, p = e.some((Z) => rt(Z) || an(Z)), a = () => e.map((Z) => {
    if (G(Z))
      return Z.value;
    if (rt(Z))
      return nt(Z);
    if ($(Z))
      return Fe(Z, f, 2);
    process.env.NODE_ENV !== "production" && c(Z);
  })) : $(e) ? t ? a = () => Fe(e, f, 2) : a = () => {
    if (!(f && f.isUnmounted))
      return g && g(), ge(e, f, 3, [D]);
  } : (a = ne, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const Z = a;
    a = () => nt(Z());
  }
  let g, D = (Z) => {
    g = B.onStop = () => {
      Fe(Z, f, 4);
    };
  };
  if (Ut)
    return D = ne, t ? n && ge(t, f, 3, [
      a(),
      d ? [] : void 0,
      D
    ]) : a(), ne;
  let P = d ? [] : Jo;
  const C = () => {
    if (!!B.active)
      if (t) {
        const Z = B.run();
        (o || p || (d ? Z.some((q, ue) => St(q, P[ue])) : St(Z, P))) && (g && g(), ge(t, f, 3, [
          Z,
          P === Jo ? void 0 : P,
          D
        ]), P = Z);
      } else
        B.run();
  };
  C.allowRecurse = !!t;
  let U;
  r === "sync" ? U = C : r === "post" ? U = () => de(C, f && f.suspense) : (C.pre = !0, f && (C.id = f.uid), U = () => xn(C));
  const B = new vo(a, U);
  return process.env.NODE_ENV !== "production" && (B.onTrack = s, B.onTrigger = i), t ? n ? C() : P = B.run() : r === "post" ? de(B.run.bind(B), f && f.suspense) : B.run(), () => {
    B.stop(), f && f.scope && ho(f.scope.effects, B);
  };
}
function Gi(e, t, n) {
  const o = this.proxy, r = ee(e) ? e.includes(".") ? Qr(o, e) : () => o[e] : e.bind(o, o);
  let s;
  $(t) ? s = t : (s = t.handler, n = t);
  const i = Q;
  yt(this);
  const c = Xr(r, s.bind(o), n);
  return i ? yt(i) : lt(), c;
}
function Qr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function nt(e, t) {
  if (!z(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), G(e))
    nt(e.value, t);
  else if (T(e))
    for (let n = 0; n < e.length; n++)
      nt(e[n], t);
  else if (Ms(e) || Et(e))
    e.forEach((n) => {
      nt(n, t);
    });
  else if (Ss(e))
    for (const n in e)
      nt(e[n], t);
  return e;
}
function el() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ns(() => {
    e.isMounted = !0;
  }), os(() => {
    e.isUnmounting = !0;
  }), e;
}
const me = [Function, Array], tl = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: me,
    onEnter: me,
    onAfterEnter: me,
    onEnterCancelled: me,
    onBeforeLeave: me,
    onLeave: me,
    onAfterLeave: me,
    onLeaveCancelled: me,
    onBeforeAppear: me,
    onAppear: me,
    onAfterAppear: me,
    onAppearCancelled: me
  },
  setup(e, { slots: t }) {
    const n = Ql(), o = el();
    let r;
    return () => {
      const s = t.default && es(t.default(), !0);
      if (!s || !s.length)
        return;
      let i = s[0];
      if (s.length > 1) {
        let C = !1;
        for (const U of s)
          if (U.type !== fe) {
            if (process.env.NODE_ENV !== "production" && C) {
              y("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (i = U, C = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const c = A(e), { mode: f } = c;
      if (process.env.NODE_ENV !== "production" && f && f !== "in-out" && f !== "out-in" && f !== "default" && y(`invalid <transition> mode: ${f}`), o.isLeaving)
        return Bn(i);
      const a = Xo(i);
      if (!a)
        return Bn(i);
      const p = eo(a, c, o, n);
      to(a, p);
      const d = n.subTree, g = d && Xo(d);
      let D = !1;
      const { getTransitionKey: P } = a.type;
      if (P) {
        const C = P();
        r === void 0 ? r = C : C !== r && (r = C, D = !0);
      }
      if (g && g.type !== fe && (!et(a, g) || D)) {
        const C = eo(g, c, o, n);
        if (to(g, C), f === "out-in")
          return o.isLeaving = !0, C.afterLeave = () => {
            o.isLeaving = !1, n.update();
          }, Bn(i);
        f === "in-out" && a.type !== fe && (C.delayLeave = (U, B, Z) => {
          const q = Gr(o, g);
          q[String(g.key)] = g, U._leaveCb = () => {
            B(), U._leaveCb = void 0, delete p.delayedLeave;
          }, p.delayedLeave = Z;
        });
      }
      return i;
    };
  }
}, nl = tl;
function Gr(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function eo(e, t, n, o) {
  const { appear: r, mode: s, persisted: i = !1, onBeforeEnter: c, onEnter: f, onAfterEnter: a, onEnterCancelled: p, onBeforeLeave: d, onLeave: g, onAfterLeave: D, onLeaveCancelled: P, onBeforeAppear: C, onAppear: U, onAfterAppear: B, onAppearCancelled: Z } = t, q = String(e.key), ue = Gr(n, e), W = (M, K) => {
    M && ge(M, o, 9, K);
  }, je = (M, K) => {
    const Y = K[1];
    W(M, K), T(M) ? M.every((oe) => oe.length <= 1) && Y() : M.length <= 1 && Y();
  }, ye = {
    mode: s,
    persisted: i,
    beforeEnter(M) {
      let K = c;
      if (!n.isMounted)
        if (r)
          K = C || c;
        else
          return;
      M._leaveCb && M._leaveCb(!0);
      const Y = ue[q];
      Y && et(e, Y) && Y.el._leaveCb && Y.el._leaveCb(), W(K, [M]);
    },
    enter(M) {
      let K = f, Y = a, oe = p;
      if (!n.isMounted)
        if (r)
          K = U || f, Y = B || a, oe = Z || p;
        else
          return;
      let te = !1;
      const Ie = M._enterCb = (qt) => {
        te || (te = !0, qt ? W(oe, [M]) : W(Y, [M]), ye.delayedLeave && ye.delayedLeave(), M._enterCb = void 0);
      };
      K ? je(K, [M, Ie]) : Ie();
    },
    leave(M, K) {
      const Y = String(e.key);
      if (M._enterCb && M._enterCb(!0), n.isUnmounting)
        return K();
      W(d, [M]);
      let oe = !1;
      const te = M._leaveCb = (Ie) => {
        oe || (oe = !0, K(), Ie ? W(P, [M]) : W(D, [M]), M._leaveCb = void 0, ue[Y] === e && delete ue[Y]);
      };
      ue[Y] = e, g ? je(g, [M, te]) : te();
    },
    clone(M) {
      return eo(M, t, n, o);
    }
  };
  return ye;
}
function Bn(e) {
  if (zt(e))
    return e = Te(e), e.children = null, e;
}
function Xo(e) {
  return zt(e) ? e.children ? e.children[0] : void 0 : e;
}
function to(e, t) {
  e.shapeFlag & 6 && e.component ? to(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function es(e, t = !1, n) {
  let o = [], r = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const c = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === _e ? (i.patchFlag & 128 && r++, o = o.concat(es(i.children, t, c))) : (t || i.type !== fe) && o.push(c != null ? Te(i, { key: c }) : i);
  }
  if (r > 1)
    for (let s = 0; s < o.length; s++)
      o[s].patchFlag = -2;
  return o;
}
function Vo(e) {
  return $(e) ? { setup: e, name: e.name } : e;
}
const sn = (e) => !!e.type.__asyncLoader, zt = (e) => e.type.__isKeepAlive;
function ol(e, t) {
  ts(e, "a", t);
}
function rl(e, t) {
  ts(e, "da", t);
}
function ts(e, t, n = Q) {
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
      zt(r.parent.vnode) && sl(o, t, n, r), r = r.parent;
  }
}
function sl(e, t, n, o) {
  const r = Cn(t, e, o, !0);
  rs(() => {
    ho(o[t], r);
  }, n);
}
function Cn(e, t, n = Q, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      ft(), yt(n);
      const c = ge(t, n, e, i);
      return lt(), ut(), c;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = Xe(Oo[e].replace(/ hook$/, ""));
    y(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Se = (e) => (t, n = Q) => (!Ut || e === "sp") && Cn(e, (...o) => t(...o), n), il = Se("bm"), ns = Se("m"), ll = Se("bu"), cl = Se("u"), os = Se("bum"), rs = Se("um"), fl = Se("sp"), ul = Se("rtg"), al = Se("rtc");
function dl(e, t = Q) {
  Cn("ec", e, t);
}
function ss(e) {
  js(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function pl(e, t) {
  const n = he;
  if (n === null)
    return process.env.NODE_ENV !== "production" && y("withDirectives can only be used inside render functions."), e;
  const o = $n(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, c, f, a = L] = t[s];
    $(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && nt(c), r.push({
      dir: i,
      instance: o,
      value: c,
      oldValue: void 0,
      arg: f,
      modifiers: a
    });
  }
  return e;
}
function Ye(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    s && (c.oldValue = s[i].value);
    let f = c.dir[o];
    f && (ft(), ge(f, n, 8, [
      e.el,
      c,
      e,
      t
    ]), ut());
  }
}
const hl = Symbol(), no = (e) => e ? Es(e) ? $n(e) || e.proxy : no(e.parent) : null, Nt = /* @__PURE__ */ J(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? _t(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? _t(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? _t(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? _t(e.refs) : e.refs,
  $parent: (e) => no(e.parent),
  $root: (e) => no(e.root),
  $emit: (e) => e.emit,
  $options: (e) => To(e),
  $forceUpdate: (e) => e.f || (e.f = () => xn(e.update)),
  $nextTick: (e) => e.n || (e.n = Lr.bind(e.proxy)),
  $watch: (e) => Gi.bind(e)
}), Co = (e) => e === "_" || e === "$", is = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: c, appContext: f } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (process.env.NODE_ENV !== "production" && o !== L && o.__isScriptSetup && F(o, t))
      return o[t];
    let a;
    if (t[0] !== "$") {
      const D = i[t];
      if (D !== void 0)
        switch (D) {
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
        if (o !== L && F(o, t))
          return i[t] = 1, o[t];
        if (r !== L && F(r, t))
          return i[t] = 2, r[t];
        if ((a = e.propsOptions[0]) && F(a, t))
          return i[t] = 3, s[t];
        if (n !== L && F(n, t))
          return i[t] = 4, n[t];
        oo && (i[t] = 0);
      }
    }
    const p = Nt[t];
    let d, g;
    if (p)
      return t === "$attrs" && (pe(e, "get", t), process.env.NODE_ENV !== "production" && hn()), p(e);
    if ((d = c.__cssModules) && (d = d[t]))
      return d;
    if (n !== L && F(n, t))
      return i[t] = 4, n[t];
    if (g = f.config.globalProperties, F(g, t))
      return g[t];
    process.env.NODE_ENV !== "production" && he && (!ee(t) || t.indexOf("__v") !== 0) && (r !== L && Co(t[0]) && F(r, t) ? y(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === he && y(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return r !== L && F(r, t) ? (r[t] = n, !0) : o !== L && F(o, t) ? (o[t] = n, !0) : F(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`, e), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`, e), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, i) {
    let c;
    return !!n[i] || e !== L && F(e, i) || t !== L && F(t, i) || (c = s[0]) && F(c, i) || F(o, i) || F(Nt, i) || F(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : F(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (is.ownKeys = (e) => (y("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function ml(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Nt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Nt[n](e),
      set: ne
    });
  }), t;
}
function _l(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: ne
    });
  });
}
function gl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(A(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Co(o[0])) {
        y(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: ne
      });
    }
  });
}
function El() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let oo = !0;
function vl(e) {
  const t = To(e), n = e.proxy, o = e.ctx;
  oo = !1, t.beforeCreate && Qo(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: s,
    methods: i,
    watch: c,
    provide: f,
    inject: a,
    created: p,
    beforeMount: d,
    mounted: g,
    beforeUpdate: D,
    updated: P,
    activated: C,
    deactivated: U,
    beforeDestroy: B,
    beforeUnmount: Z,
    destroyed: q,
    unmounted: ue,
    render: W,
    renderTracked: je,
    renderTriggered: ye,
    errorCaptured: M,
    serverPrefetch: K,
    expose: Y,
    inheritAttrs: oe,
    components: te,
    directives: Ie,
    filters: qt
  } = t, Ze = process.env.NODE_ENV !== "production" ? El() : null;
  if (process.env.NODE_ENV !== "production") {
    const [S] = e.propsOptions;
    if (S)
      for (const j in S)
        Ze("Props", j);
  }
  if (a && bl(a, o, Ze, e.appContext.config.unwrapInjectedRef), i)
    for (const S in i) {
      const j = i[S];
      $(j) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, S, {
        value: j.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[S] = j.bind(n), process.env.NODE_ENV !== "production" && Ze("Methods", S)) : process.env.NODE_ENV !== "production" && y(`Method "${S}" has type "${typeof j}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !$(r) && y("The data option must be a function. Plain object usage is no longer supported.");
    const S = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && _o(S) && y("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !z(S))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = No(S), process.env.NODE_ENV !== "production")
      for (const j in S)
        Ze("Data", j), Co(j[0]) || Object.defineProperty(o, j, {
          configurable: !0,
          enumerable: !0,
          get: () => S[j],
          set: ne
        });
  }
  if (oo = !0, s)
    for (const S in s) {
      const j = s[S], Oe = $(j) ? j.bind(n, n) : $(j.get) ? j.get.bind(n, n) : ne;
      process.env.NODE_ENV !== "production" && Oe === ne && y(`Computed property "${S}" has no getter.`);
      const Fn = !$(j) && $(j.set) ? j.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(`Write operation failed: computed property "${S}" is readonly.`);
      } : ne, wt = ic({
        get: Oe,
        set: Fn
      });
      Object.defineProperty(o, S, {
        enumerable: !0,
        configurable: !0,
        get: () => wt.value,
        set: (at) => wt.value = at
      }), process.env.NODE_ENV !== "production" && Ze("Computed", S);
    }
  if (c)
    for (const S in c)
      ls(c[S], o, n, S);
  if (f) {
    const S = $(f) ? f.call(n) : f;
    Reflect.ownKeys(S).forEach((j) => {
      Qi(j, S[j]);
    });
  }
  p && Qo(p, e, "c");
  function ae(S, j) {
    T(j) ? j.forEach((Oe) => S(Oe.bind(n))) : j && S(j.bind(n));
  }
  if (ae(il, d), ae(ns, g), ae(ll, D), ae(cl, P), ae(ol, C), ae(rl, U), ae(dl, M), ae(al, je), ae(ul, ye), ae(os, Z), ae(rs, ue), ae(fl, K), T(Y))
    if (Y.length) {
      const S = e.exposed || (e.exposed = {});
      Y.forEach((j) => {
        Object.defineProperty(S, j, {
          get: () => n[j],
          set: (Oe) => n[j] = Oe
        });
      });
    } else
      e.exposed || (e.exposed = {});
  W && e.render === ne && (e.render = W), oe != null && (e.inheritAttrs = oe), te && (e.components = te), Ie && (e.directives = Ie);
}
function bl(e, t, n = ne, o = !1) {
  T(e) && (e = ro(e));
  for (const r in e) {
    const s = e[r];
    let i;
    z(s) ? "default" in s ? i = Ln(s.from || r, s.default, !0) : i = Ln(s.from || r) : i = Ln(s), G(i) ? o ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (c) => i.value = c
    }) : (process.env.NODE_ENV !== "production" && y(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[r] = i) : t[r] = i, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Qo(e, t, n) {
  ge(T(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ls(e, t, n, o) {
  const r = o.includes(".") ? Qr(n, o) : () => n[o];
  if (ee(e)) {
    const s = t[e];
    $(s) ? rn(r, s) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, s);
  } else if ($(e))
    rn(r, e.bind(n));
  else if (z(e))
    if (T(e))
      e.forEach((s) => ls(s, t, n, o));
    else {
      const s = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(s) ? rn(r, s, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function To(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, c = s.get(t);
  let f;
  return c ? f = c : !r.length && !n && !o ? f = t : (f = {}, r.length && r.forEach((a) => mn(f, a, i, !0)), mn(f, t, i)), z(t) && s.set(t, f), f;
}
function mn(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && mn(e, s, n, !0), r && r.forEach((i) => mn(e, i, n, !0));
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && y('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const c = Nl[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const Nl = {
  data: Go,
  props: Qe,
  emits: Qe,
  methods: Qe,
  computed: Qe,
  beforeCreate: le,
  created: le,
  beforeMount: le,
  mounted: le,
  beforeUpdate: le,
  updated: le,
  beforeDestroy: le,
  beforeUnmount: le,
  destroyed: le,
  unmounted: le,
  activated: le,
  deactivated: le,
  errorCaptured: le,
  serverPrefetch: le,
  components: Qe,
  directives: Qe,
  watch: Ol,
  provide: Go,
  inject: yl
};
function Go(e, t) {
  return t ? e ? function() {
    return J($(e) ? e.call(this, this) : e, $(t) ? t.call(this, this) : t);
  } : t : e;
}
function yl(e, t) {
  return Qe(ro(e), ro(t));
}
function ro(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function le(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Qe(e, t) {
  return e ? J(J(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function Ol(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = J(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = le(e[o], t[o]);
  return n;
}
function wl(e, t, n, o = !1) {
  const r = {}, s = {};
  un(s, In, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), cs(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  process.env.NODE_ENV !== "production" && us(t || {}, r, e), n ? e.props = o ? r : mi(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function xl(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Dl(e, t, n, o) {
  const { props: r, attrs: s, vnode: { patchFlag: i } } = e, c = A(r), [f] = e.propsOptions;
  let a = !1;
  if (!(process.env.NODE_ENV !== "production" && xl(e)) && (o || i > 0) && !(i & 16)) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let d = 0; d < p.length; d++) {
        let g = p[d];
        if (Dn(e.emitsOptions, g))
          continue;
        const D = t[g];
        if (f)
          if (F(s, g))
            D !== s[g] && (s[g] = D, a = !0);
          else {
            const P = We(g);
            r[P] = so(f, c, P, D, e, !1);
          }
        else
          D !== s[g] && (s[g] = D, a = !0);
      }
    }
  } else {
    cs(e, t, r, s) && (a = !0);
    let p;
    for (const d in c)
      (!t || !F(t, d) && ((p = Ne(d)) === d || !F(t, p))) && (f ? n && (n[d] !== void 0 || n[p] !== void 0) && (r[d] = so(f, c, d, void 0, e, !0)) : delete r[d]);
    if (s !== c)
      for (const d in s)
        (!t || !F(t, d) && !0) && (delete s[d], a = !0);
  }
  a && Re(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && us(t || {}, r, e);
}
function cs(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let f in t) {
      if (tn(f))
        continue;
      const a = t[f];
      let p;
      r && F(r, p = We(f)) ? !s || !s.includes(p) ? n[p] = a : (c || (c = {}))[p] = a : Dn(e.emitsOptions, f) || (!(f in o) || a !== o[f]) && (o[f] = a, i = !0);
    }
  if (s) {
    const f = A(n), a = c || L;
    for (let p = 0; p < s.length; p++) {
      const d = s[p];
      n[d] = so(r, f, d, a[d], e, !F(a, d));
    }
  }
  return i;
}
function so(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const c = F(i, "default");
    if (c && o === void 0) {
      const f = i.default;
      if (i.type !== Function && $(f)) {
        const { propsDefaults: a } = r;
        n in a ? o = a[n] : (yt(r), o = a[n] = f.call(null, t), lt());
      } else
        o = f;
    }
    i[0] && (s && !c ? o = !1 : i[1] && (o === "" || o === Ne(n)) && (o = !0));
  }
  return o;
}
function fs(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, c = [];
  let f = !1;
  if (!$(e)) {
    const p = (d) => {
      f = !0;
      const [g, D] = fs(d, t, !0);
      J(i, g), D && c.push(...D);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!s && !f)
    return z(e) && o.set(e, gt), gt;
  if (T(s))
    for (let p = 0; p < s.length; p++) {
      process.env.NODE_ENV !== "production" && !ee(s[p]) && y("props must be strings when using array syntax.", s[p]);
      const d = We(s[p]);
      er(d) && (i[d] = L);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !z(s) && y("invalid props options", s);
    for (const p in s) {
      const d = We(p);
      if (er(d)) {
        const g = s[p], D = i[d] = T(g) || $(g) ? { type: g } : g;
        if (D) {
          const P = nr(Boolean, D.type), C = nr(String, D.type);
          D[0] = P > -1, D[1] = C < 0 || P < C, (P > -1 || F(D, "default")) && c.push(d);
        }
      }
    }
  }
  const a = [i, c];
  return z(e) && o.set(e, a), a;
}
function er(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function io(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function tr(e, t) {
  return io(e) === io(t);
}
function nr(e, t) {
  return T(t) ? t.findIndex((n) => tr(n, e)) : $(t) && tr(t, e) ? 0 : -1;
}
function us(e, t, n) {
  const o = A(t), r = n.propsOptions[0];
  for (const s in r) {
    let i = r[s];
    i != null && Vl(s, o[s], i, !F(e, s) && !F(e, Ne(s)));
  }
}
function Vl(e, t, n, o) {
  const { type: r, required: s, validator: i } = n;
  if (s && o) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (r != null && r !== !0) {
      let c = !1;
      const f = T(r) ? r : [r], a = [];
      for (let p = 0; p < f.length && !c; p++) {
        const { valid: d, expectedType: g } = Tl(t, f[p]);
        a.push(g || ""), c = d;
      }
      if (!c) {
        y(Il(e, t, a));
        return;
      }
    }
    i && !i(t) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Cl = /* @__PURE__ */ Ot("String,Number,Boolean,Function,Symbol,BigInt");
function Tl(e, t) {
  let n;
  const o = io(t);
  if (Cl(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = z(e) : o === "Array" ? n = T(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Il(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(vn).join(" | ")}`;
  const r = n[0], s = go(t), i = or(t, r), c = or(t, s);
  return n.length === 1 && rr(r) && !$l(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, rr(s) && (o += `with value ${c}.`), o;
}
function or(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function rr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function $l(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const as = (e) => e[0] === "_" || e === "$stable", Io = (e) => T(e) ? e.map(ve) : [ve(e)], Al = (e, t, n) => {
  if (t._n)
    return t;
  const o = Ui((...r) => (process.env.NODE_ENV !== "production" && Q && y(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), Io(t(...r))), n);
  return o._c = !1, o;
}, ds = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (as(r))
      continue;
    const s = e[r];
    if ($(s))
      t[r] = Al(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && y(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const i = Io(s);
      t[r] = () => i;
    }
  }
}, ps = (e, t) => {
  process.env.NODE_ENV !== "production" && !zt(e.vnode) && y("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = Io(t);
  e.slots.default = () => n;
}, Pl = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = A(t), un(t, "_", n)) : ds(t, e.slots = {});
  } else
    e.slots = {}, t && ps(e, t);
  un(e.slots, In, 1);
}, Fl = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = L;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? process.env.NODE_ENV !== "production" && it ? J(r, t) : n && c === 1 ? s = !1 : (J(r, t), !n && c === 1 && delete r._) : (s = !t.$stable, ds(t, r)), i = t;
  } else
    t && (ps(e, t), i = { default: 1 });
  if (s)
    for (const c in r)
      !as(c) && !(c in i) && delete r[c];
};
function hs() {
  return {
    app: null,
    config: {
      isNativeTag: Er,
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
let Ml = 0;
function Rl(e, t) {
  return function(o, r = null) {
    $(o) || (o = Object.assign({}, o)), r != null && !z(r) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), r = null);
    const s = hs(), i = /* @__PURE__ */ new Set();
    let c = !1;
    const f = s.app = {
      _uid: Ml++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: cr,
      get config() {
        return s.config;
      },
      set config(a) {
        process.env.NODE_ENV !== "production" && y("app.config cannot be replaced. Modify individual options instead.");
      },
      use(a, ...p) {
        return i.has(a) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : a && $(a.install) ? (i.add(a), a.install(f, ...p)) : $(a) ? (i.add(a), a(f, ...p)) : process.env.NODE_ENV !== "production" && y('A plugin must either be a function or an object with an "install" function.'), f;
      },
      mixin(a) {
        return s.mixins.includes(a) ? process.env.NODE_ENV !== "production" && y("Mixin has already been applied to target app" + (a.name ? `: ${a.name}` : "")) : s.mixins.push(a), f;
      },
      component(a, p) {
        return process.env.NODE_ENV !== "production" && co(a, s.config), p ? (process.env.NODE_ENV !== "production" && s.components[a] && y(`Component "${a}" has already been registered in target app.`), s.components[a] = p, f) : s.components[a];
      },
      directive(a, p) {
        return process.env.NODE_ENV !== "production" && ss(a), p ? (process.env.NODE_ENV !== "production" && s.directives[a] && y(`Directive "${a}" has already been registered in target app.`), s.directives[a] = p, f) : s.directives[a];
      },
      mount(a, p, d) {
        if (c)
          process.env.NODE_ENV !== "production" && y("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && a.__vue_app__ && y("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const g = Me(o, r);
          return g.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(Te(g), a, d);
          }), p && t ? t(g, a) : e(g, a, d), c = !0, f._container = a, a.__vue_app__ = f, process.env.NODE_ENV !== "production" && (f._instance = g.component, Fi(f, cr)), $n(g.component) || g.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, f._container), process.env.NODE_ENV !== "production" && (f._instance = null, Mi(f)), delete f._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(a, p) {
        return process.env.NODE_ENV !== "production" && a in s.provides && y(`App already provides property with key "${String(a)}". It will be overwritten with the new value.`), s.provides[a] = p, f;
      }
    };
    return f;
  };
}
function lo(e, t, n, o, r = !1) {
  if (T(e)) {
    e.forEach((g, D) => lo(g, t && (T(t) ? t[D] : t), n, o, r));
    return;
  }
  if (sn(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? $n(o.component) || o.component.proxy : o.el, i = r ? null : s, { i: c, r: f } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    y("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const a = t && t.r, p = c.refs === L ? c.refs = {} : c.refs, d = c.setupState;
  if (a != null && a !== f && (ee(a) ? (p[a] = null, F(d, a) && (d[a] = null)) : G(a) && (a.value = null)), $(f))
    Fe(f, c, 12, [i, p]);
  else {
    const g = ee(f), D = G(f);
    if (g || D) {
      const P = () => {
        if (e.f) {
          const C = g ? p[f] : f.value;
          r ? T(C) && ho(C, s) : T(C) ? C.includes(s) || C.push(s) : g ? (p[f] = [s], F(d, f) && (d[f] = p[f])) : (f.value = [s], e.k && (p[e.k] = f.value));
        } else
          g ? (p[f] = i, F(d, f) && (d[f] = i)) : D ? (f.value = i, e.k && (p[e.k] = i)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
      };
      i ? (P.id = -1, de(P, n)) : P();
    } else
      process.env.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let Vt, Ue;
function Ae(e, t) {
  e.appContext.config.performance && _n() && Ue.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && ji(e, t, _n() ? Ue.now() : Date.now());
}
function Pe(e, t) {
  if (e.appContext.config.performance && _n()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Ue.mark(o), Ue.measure(`<${An(e, e.type)}> ${t}`, n, o), Ue.clearMarks(n), Ue.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Zi(e, t, _n() ? Ue.now() : Date.now());
}
function _n() {
  return Vt !== void 0 || (typeof window < "u" && window.performance ? (Vt = !0, Ue = window.performance) : Vt = !1), Vt;
}
function Sl() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const de = Xi;
function jl(e) {
  return Zl(e);
}
function Zl(e, t) {
  Sl();
  const n = vr();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Wr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: r, patchProp: s, createElement: i, createText: c, createComment: f, setText: a, setElementText: p, parentNode: d, nextSibling: g, setScopeId: D = ne, insertStaticContent: P } = e, C = (l, u, h, _ = null, m = null, b = null, O = !1, v = null, N = process.env.NODE_ENV !== "production" && it ? !1 : !!u.dynamicChildren) => {
    if (l === u)
      return;
    l && !et(l, u) && (_ = Yt(l), Le(l, m, b, !0), l = null), u.patchFlag === -2 && (N = !1, u.dynamicChildren = null);
    const { type: E, ref: x, shapeFlag: w } = u;
    switch (E) {
      case Tn:
        U(l, u, h, _);
        break;
      case fe:
        B(l, u, h, _);
        break;
      case Ft:
        l == null ? Z(u, h, _, O) : process.env.NODE_ENV !== "production" && q(l, u, h, O);
        break;
      case _e:
        Ie(l, u, h, _, m, b, O, v, N);
        break;
      default:
        w & 1 ? je(l, u, h, _, m, b, O, v, N) : w & 6 ? qt(l, u, h, _, m, b, O, v, N) : w & 64 || w & 128 ? E.process(l, u, h, _, m, b, O, v, N, dt) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", E, `(${typeof E})`);
    }
    x != null && m && lo(x, l && l.ref, b, u || l, !u);
  }, U = (l, u, h, _) => {
    if (l == null)
      o(u.el = c(u.children), h, _);
    else {
      const m = u.el = l.el;
      u.children !== l.children && a(m, u.children);
    }
  }, B = (l, u, h, _) => {
    l == null ? o(u.el = f(u.children || ""), h, _) : u.el = l.el;
  }, Z = (l, u, h, _) => {
    [l.el, l.anchor] = P(l.children, u, h, _, l.el, l.anchor);
  }, q = (l, u, h, _) => {
    if (u.children !== l.children) {
      const m = g(l.anchor);
      W(l), [u.el, u.anchor] = P(u.children, h, m, _);
    } else
      u.el = l.el, u.anchor = l.anchor;
  }, ue = ({ el: l, anchor: u }, h, _) => {
    let m;
    for (; l && l !== u; )
      m = g(l), o(l, h, _), l = m;
    o(u, h, _);
  }, W = ({ el: l, anchor: u }) => {
    let h;
    for (; l && l !== u; )
      h = g(l), r(l), l = h;
    r(u);
  }, je = (l, u, h, _, m, b, O, v, N) => {
    O = O || u.type === "svg", l == null ? ye(u, h, _, m, b, O, v, N) : Y(l, u, m, b, O, v, N);
  }, ye = (l, u, h, _, m, b, O, v) => {
    let N, E;
    const { type: x, props: w, shapeFlag: V, transition: I, dirs: R } = l;
    if (N = l.el = i(l.type, b, w && w.is, w), V & 8 ? p(N, l.children) : V & 16 && K(l.children, N, null, _, m, b && x !== "foreignObject", O, v), R && Ye(l, null, _, "created"), w) {
      for (const H in w)
        H !== "value" && !tn(H) && s(N, H, null, w[H], b, l.children, _, m, $e);
      "value" in w && s(N, "value", null, w.value), (E = w.onVnodeBeforeMount) && xe(E, _, l);
    }
    M(N, l, l.scopeId, O, _), process.env.NODE_ENV !== "production" && (Object.defineProperty(N, "__vnode", {
      value: l,
      enumerable: !1
    }), Object.defineProperty(N, "__vueParentComponent", {
      value: _,
      enumerable: !1
    })), R && Ye(l, null, _, "beforeMount");
    const k = (!m || m && !m.pendingBranch) && I && !I.persisted;
    k && I.beforeEnter(N), o(N, u, h), ((E = w && w.onVnodeMounted) || k || R) && de(() => {
      E && xe(E, _, l), k && I.enter(N), R && Ye(l, null, _, "mounted");
    }, m);
  }, M = (l, u, h, _, m) => {
    if (h && D(l, h), _)
      for (let b = 0; b < _.length; b++)
        D(l, _[b]);
    if (m) {
      let b = m.subTree;
      if (process.env.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && (b = Jr(b.children) || b), u === b) {
        const O = m.vnode;
        M(l, O, O.scopeId, O.slotScopeIds, m.parent);
      }
    }
  }, K = (l, u, h, _, m, b, O, v, N = 0) => {
    for (let E = N; E < l.length; E++) {
      const x = l[E] = v ? ke(l[E]) : ve(l[E]);
      C(null, x, u, h, _, m, b, O, v);
    }
  }, Y = (l, u, h, _, m, b, O) => {
    const v = u.el = l.el;
    let { patchFlag: N, dynamicChildren: E, dirs: x } = u;
    N |= l.patchFlag & 16;
    const w = l.props || L, V = u.props || L;
    let I;
    h && Je(h, !1), (I = V.onVnodeBeforeUpdate) && xe(I, h, u, l), x && Ye(u, l, h, "beforeUpdate"), h && Je(h, !0), process.env.NODE_ENV !== "production" && it && (N = 0, O = !1, E = null);
    const R = m && u.type !== "foreignObject";
    if (E ? (oe(l.dynamicChildren, E, v, h, _, R, b), process.env.NODE_ENV !== "production" && h && h.type.__hmrId && ln(l, u)) : O || Oe(l, u, v, null, h, _, R, b, !1), N > 0) {
      if (N & 16)
        te(v, u, w, V, h, _, m);
      else if (N & 2 && w.class !== V.class && s(v, "class", null, V.class, m), N & 4 && s(v, "style", w.style, V.style, m), N & 8) {
        const k = u.dynamicProps;
        for (let H = 0; H < k.length; H++) {
          const X = k[H], Ee = w[X], pt = V[X];
          (pt !== Ee || X === "value") && s(v, X, Ee, pt, m, l.children, h, _, $e);
        }
      }
      N & 1 && l.children !== u.children && p(v, u.children);
    } else
      !O && E == null && te(v, u, w, V, h, _, m);
    ((I = V.onVnodeUpdated) || x) && de(() => {
      I && xe(I, h, u, l), x && Ye(u, l, h, "updated");
    }, _);
  }, oe = (l, u, h, _, m, b, O) => {
    for (let v = 0; v < u.length; v++) {
      const N = l[v], E = u[v], x = N.el && (N.type === _e || !et(N, E) || N.shapeFlag & 70) ? d(N.el) : h;
      C(N, E, x, null, _, m, b, O, !0);
    }
  }, te = (l, u, h, _, m, b, O) => {
    if (h !== _) {
      if (h !== L)
        for (const v in h)
          !tn(v) && !(v in _) && s(l, v, h[v], null, O, u.children, m, b, $e);
      for (const v in _) {
        if (tn(v))
          continue;
        const N = _[v], E = h[v];
        N !== E && v !== "value" && s(l, v, E, N, O, u.children, m, b, $e);
      }
      "value" in _ && s(l, "value", h.value, _.value);
    }
  }, Ie = (l, u, h, _, m, b, O, v, N) => {
    const E = u.el = l ? l.el : c(""), x = u.anchor = l ? l.anchor : c("");
    let { patchFlag: w, dynamicChildren: V, slotScopeIds: I } = u;
    process.env.NODE_ENV !== "production" && (it || w & 2048) && (w = 0, N = !1, V = null), I && (v = v ? v.concat(I) : I), l == null ? (o(E, h, _), o(x, h, _), K(u.children, h, x, m, b, O, v, N)) : w > 0 && w & 64 && V && l.dynamicChildren ? (oe(l.dynamicChildren, V, h, m, b, O, v), process.env.NODE_ENV !== "production" && m && m.type.__hmrId ? ln(l, u) : (u.key != null || m && u === m.subTree) && ln(l, u, !0)) : Oe(l, u, h, x, m, b, O, v, N);
  }, qt = (l, u, h, _, m, b, O, v, N) => {
    u.slotScopeIds = v, l == null ? u.shapeFlag & 512 ? m.ctx.activate(u, h, _, O, N) : Ze(u, h, _, m, b, O, N) : ae(l, u, N);
  }, Ze = (l, u, h, _, m, b, O) => {
    const v = l.component = Xl(l, _, m);
    if (process.env.NODE_ENV !== "production" && v.type.__hmrId && Ii(v), process.env.NODE_ENV !== "production" && (nn(l), Ae(v, "mount")), zt(l) && (v.ctx.renderer = dt), process.env.NODE_ENV !== "production" && Ae(v, "init"), ec(v), process.env.NODE_ENV !== "production" && Pe(v, "init"), v.asyncDep) {
      if (m && m.registerDep(v, S), !l.el) {
        const N = v.subTree = Me(fe);
        B(null, N, u, h);
      }
      return;
    }
    S(v, l, u, h, m, b, O), process.env.NODE_ENV !== "production" && (on(), Pe(v, "mount"));
  }, ae = (l, u, h) => {
    const _ = u.component = l.component;
    if (qi(l, u, h))
      if (_.asyncDep && !_.asyncResolved) {
        process.env.NODE_ENV !== "production" && nn(u), j(_, u, h), process.env.NODE_ENV !== "production" && on();
        return;
      } else
        _.next = u, Ci(_.update), _.update();
    else
      u.el = l.el, _.vnode = u;
  }, S = (l, u, h, _, m, b, O) => {
    const v = () => {
      if (l.isMounted) {
        let { next: x, bu: w, u: V, parent: I, vnode: R } = l, k = x, H;
        process.env.NODE_ENV !== "production" && nn(x || l.vnode), Je(l, !1), x ? (x.el = R.el, j(l, x, O)) : x = R, w && Dt(w), (H = x.props && x.props.onVnodeBeforeUpdate) && xe(H, I, x, R), Je(l, !0), process.env.NODE_ENV !== "production" && Ae(l, "render");
        const X = Zn(l);
        process.env.NODE_ENV !== "production" && Pe(l, "render");
        const Ee = l.subTree;
        l.subTree = X, process.env.NODE_ENV !== "production" && Ae(l, "patch"), C(
          Ee,
          X,
          d(Ee.el),
          Yt(Ee),
          l,
          m,
          b
        ), process.env.NODE_ENV !== "production" && Pe(l, "patch"), x.el = X.el, k === null && Yi(l, X.el), V && de(V, m), (H = x.props && x.props.onVnodeUpdated) && de(() => xe(H, I, x, R), m), process.env.NODE_ENV !== "production" && zr(l), process.env.NODE_ENV !== "production" && on();
      } else {
        let x;
        const { el: w, props: V } = u, { bm: I, m: R, parent: k } = l, H = sn(u);
        if (Je(l, !1), I && Dt(I), !H && (x = V && V.onVnodeBeforeMount) && xe(x, k, u), Je(l, !0), w && Sn) {
          const X = () => {
            process.env.NODE_ENV !== "production" && Ae(l, "render"), l.subTree = Zn(l), process.env.NODE_ENV !== "production" && Pe(l, "render"), process.env.NODE_ENV !== "production" && Ae(l, "hydrate"), Sn(w, l.subTree, l, m, null), process.env.NODE_ENV !== "production" && Pe(l, "hydrate");
          };
          H ? u.type.__asyncLoader().then(
            () => !l.isUnmounted && X()
          ) : X();
        } else {
          process.env.NODE_ENV !== "production" && Ae(l, "render");
          const X = l.subTree = Zn(l);
          process.env.NODE_ENV !== "production" && Pe(l, "render"), process.env.NODE_ENV !== "production" && Ae(l, "patch"), C(null, X, h, _, l, m, b), process.env.NODE_ENV !== "production" && Pe(l, "patch"), u.el = X.el;
        }
        if (R && de(R, m), !H && (x = V && V.onVnodeMounted)) {
          const X = u;
          de(() => xe(x, k, X), m);
        }
        (u.shapeFlag & 256 || k && sn(k.vnode) && k.vnode.shapeFlag & 256) && l.a && de(l.a, m), l.isMounted = !0, process.env.NODE_ENV !== "production" && Ri(l), u = h = _ = null;
      }
    }, N = l.effect = new vo(
      v,
      () => xn(E),
      l.scope
    ), E = l.update = () => N.run();
    E.id = l.uid, Je(l, !0), process.env.NODE_ENV !== "production" && (N.onTrack = l.rtc ? (x) => Dt(l.rtc, x) : void 0, N.onTrigger = l.rtg ? (x) => Dt(l.rtg, x) : void 0, E.ownerInstance = l), E();
  }, j = (l, u, h) => {
    u.component = l;
    const _ = l.vnode.props;
    l.vnode = u, l.next = null, Dl(l, u.props, _, h), Fl(l, u.children, h), ft(), Wo(), ut();
  }, Oe = (l, u, h, _, m, b, O, v, N = !1) => {
    const E = l && l.children, x = l ? l.shapeFlag : 0, w = u.children, { patchFlag: V, shapeFlag: I } = u;
    if (V > 0) {
      if (V & 128) {
        wt(E, w, h, _, m, b, O, v, N);
        return;
      } else if (V & 256) {
        Fn(E, w, h, _, m, b, O, v, N);
        return;
      }
    }
    I & 8 ? (x & 16 && $e(E, m, b), w !== E && p(h, w)) : x & 16 ? I & 16 ? wt(E, w, h, _, m, b, O, v, N) : $e(E, m, b, !0) : (x & 8 && p(h, ""), I & 16 && K(w, h, _, m, b, O, v, N));
  }, Fn = (l, u, h, _, m, b, O, v, N) => {
    l = l || gt, u = u || gt;
    const E = l.length, x = u.length, w = Math.min(E, x);
    let V;
    for (V = 0; V < w; V++) {
      const I = u[V] = N ? ke(u[V]) : ve(u[V]);
      C(l[V], I, h, null, m, b, O, v, N);
    }
    E > x ? $e(l, m, b, !0, !1, w) : K(u, h, _, m, b, O, v, N, w);
  }, wt = (l, u, h, _, m, b, O, v, N) => {
    let E = 0;
    const x = u.length;
    let w = l.length - 1, V = x - 1;
    for (; E <= w && E <= V; ) {
      const I = l[E], R = u[E] = N ? ke(u[E]) : ve(u[E]);
      if (et(I, R))
        C(I, R, h, null, m, b, O, v, N);
      else
        break;
      E++;
    }
    for (; E <= w && E <= V; ) {
      const I = l[w], R = u[V] = N ? ke(u[V]) : ve(u[V]);
      if (et(I, R))
        C(I, R, h, null, m, b, O, v, N);
      else
        break;
      w--, V--;
    }
    if (E > w) {
      if (E <= V) {
        const I = V + 1, R = I < x ? u[I].el : _;
        for (; E <= V; )
          C(null, u[E] = N ? ke(u[E]) : ve(u[E]), h, R, m, b, O, v, N), E++;
      }
    } else if (E > V)
      for (; E <= w; )
        Le(l[E], m, b, !0), E++;
    else {
      const I = E, R = E, k = /* @__PURE__ */ new Map();
      for (E = R; E <= V; E++) {
        const ie = u[E] = N ? ke(u[E]) : ve(u[E]);
        ie.key != null && (process.env.NODE_ENV !== "production" && k.has(ie.key) && y("Duplicate keys found during update:", JSON.stringify(ie.key), "Make sure keys are unique."), k.set(ie.key, E));
      }
      let H, X = 0;
      const Ee = V - R + 1;
      let pt = !1, Mo = 0;
      const xt = new Array(Ee);
      for (E = 0; E < Ee; E++)
        xt[E] = 0;
      for (E = I; E <= w; E++) {
        const ie = l[E];
        if (X >= Ee) {
          Le(ie, m, b, !0);
          continue;
        }
        let we;
        if (ie.key != null)
          we = k.get(ie.key);
        else
          for (H = R; H <= V; H++)
            if (xt[H - R] === 0 && et(ie, u[H])) {
              we = H;
              break;
            }
        we === void 0 ? Le(ie, m, b, !0) : (xt[we - R] = E + 1, we >= Mo ? Mo = we : pt = !0, C(ie, u[we], h, null, m, b, O, v, N), X++);
      }
      const Ro = pt ? Ll(xt) : gt;
      for (H = Ro.length - 1, E = Ee - 1; E >= 0; E--) {
        const ie = R + E, we = u[ie], So = ie + 1 < x ? u[ie + 1].el : _;
        xt[E] === 0 ? C(null, we, h, So, m, b, O, v, N) : pt && (H < 0 || E !== Ro[H] ? at(we, h, So, 2) : H--);
      }
    }
  }, at = (l, u, h, _, m = null) => {
    const { el: b, type: O, transition: v, children: N, shapeFlag: E } = l;
    if (E & 6) {
      at(l.component.subTree, u, h, _);
      return;
    }
    if (E & 128) {
      l.suspense.move(u, h, _);
      return;
    }
    if (E & 64) {
      O.move(l, u, h, dt);
      return;
    }
    if (O === _e) {
      o(b, u, h);
      for (let w = 0; w < N.length; w++)
        at(N[w], u, h, _);
      o(l.anchor, u, h);
      return;
    }
    if (O === Ft) {
      ue(l, u, h);
      return;
    }
    if (_ !== 2 && E & 1 && v)
      if (_ === 0)
        v.beforeEnter(b), o(b, u, h), de(() => v.enter(b), m);
      else {
        const { leave: w, delayLeave: V, afterLeave: I } = v, R = () => o(b, u, h), k = () => {
          w(b, () => {
            R(), I && I();
          });
        };
        V ? V(b, R, k) : k();
      }
    else
      o(b, u, h);
  }, Le = (l, u, h, _ = !1, m = !1) => {
    const { type: b, props: O, ref: v, children: N, dynamicChildren: E, shapeFlag: x, patchFlag: w, dirs: V } = l;
    if (v != null && lo(v, null, h, l, !0), x & 256) {
      u.ctx.deactivate(l);
      return;
    }
    const I = x & 1 && V, R = !sn(l);
    let k;
    if (R && (k = O && O.onVnodeBeforeUnmount) && xe(k, u, l), x & 6)
      Vs(l.component, h, _);
    else {
      if (x & 128) {
        l.suspense.unmount(h, _);
        return;
      }
      I && Ye(l, null, u, "beforeUnmount"), x & 64 ? l.type.remove(l, u, h, m, dt, _) : E && (b !== _e || w > 0 && w & 64) ? $e(E, u, h, !1, !0) : (b === _e && w & 384 || !m && x & 16) && $e(N, u, h), _ && Mn(l);
    }
    (R && (k = O && O.onVnodeUnmounted) || I) && de(() => {
      k && xe(k, u, l), I && Ye(l, null, u, "unmounted");
    }, h);
  }, Mn = (l) => {
    const { type: u, el: h, anchor: _, transition: m } = l;
    if (u === _e) {
      process.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && m && !m.persisted ? l.children.forEach((O) => {
        O.type === fe ? r(O.el) : Mn(O);
      }) : Ds(h, _);
      return;
    }
    if (u === Ft) {
      W(l);
      return;
    }
    const b = () => {
      r(h), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (l.shapeFlag & 1 && m && !m.persisted) {
      const { leave: O, delayLeave: v } = m, N = () => O(h, b);
      v ? v(l.el, b, N) : N();
    } else
      b();
  }, Ds = (l, u) => {
    let h;
    for (; l !== u; )
      h = g(l), r(l), l = h;
    r(u);
  }, Vs = (l, u, h) => {
    process.env.NODE_ENV !== "production" && l.type.__hmrId && $i(l);
    const { bum: _, scope: m, update: b, subTree: O, um: v } = l;
    _ && Dt(_), m.stop(), b && (b.active = !1, Le(O, l, u, h)), v && de(v, u), de(() => {
      l.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), process.env.NODE_ENV !== "production" && Si(l);
  }, $e = (l, u, h, _ = !1, m = !1, b = 0) => {
    for (let O = b; O < l.length; O++)
      Le(l[O], u, h, _, m);
  }, Yt = (l) => l.shapeFlag & 6 ? Yt(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : g(l.anchor || l.el), Fo = (l, u, h) => {
    l == null ? u._vnode && Le(u._vnode, null, null, !0) : C(u._vnode || null, l, u, null, null, null, h), Wo(), kr(), u._vnode = l;
  }, dt = {
    p: C,
    um: Le,
    m: at,
    r: Mn,
    mt: Ze,
    mc: K,
    pc: Oe,
    pbc: oe,
    n: Yt,
    o: e
  };
  let Rn, Sn;
  return t && ([Rn, Sn] = t(dt)), {
    render: Fo,
    hydrate: Rn,
    createApp: Rl(Fo, Rn)
  };
}
function Je({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function ln(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (T(o) && T(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let c = r[s];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[s] = ke(r[s]), c.el = i.el), n || ln(i, c)), process.env.NODE_ENV !== "production" && c.type === fe && !c.el && (c.el = i.el);
    }
}
function Ll(e) {
  const t = e.slice(), n = [0];
  let o, r, s, i, c;
  const f = e.length;
  for (o = 0; o < f; o++) {
    const a = e[o];
    if (a !== 0) {
      if (r = n[n.length - 1], e[r] < a) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        c = s + i >> 1, e[n[c]] < a ? s = c + 1 : i = c;
      a < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
const Bl = (e) => e.__isTeleport, _e = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), Tn = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), fe = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), Ft = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), Mt = [];
let be = null;
function $t(e = !1) {
  Mt.push(be = e ? null : []);
}
function Hl() {
  Mt.pop(), be = Mt[Mt.length - 1] || null;
}
let kt = 1;
function sr(e) {
  kt += e;
}
function kl(e) {
  return e.dynamicChildren = kt > 0 ? be || gt : null, Hl(), kt > 0 && be && be.push(e), e;
}
function At(e, t, n, o, r, s) {
  return kl(se(e, t, n, o, r, s, !0));
}
function $o(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function et(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && ht.has(t.type) ? !1 : e.type === t.type && e.key === t.key;
}
const Ul = (...e) => _s(...e), In = "__vInternal", ms = ({ key: e }) => e != null ? e : null, cn = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ee(e) || G(e) || $(e) ? { i: he, r: e, k: t, f: !!n } : e : null;
function se(e, t = null, n = null, o = 0, r = null, s = e === _e ? 0 : 1, i = !1, c = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ms(t),
    ref: t && cn(t),
    scopeId: Vn,
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
  return c ? (Ao(f, n), s & 128 && e.normalize(f)) : n && (f.shapeFlag |= ee(n) ? 8 : 16), process.env.NODE_ENV !== "production" && f.key !== f.key && y("VNode created with invalid key (NaN). VNode type:", f.type), kt > 0 && !i && be && (f.patchFlag > 0 || s & 6) && f.patchFlag !== 32 && be.push(f), f;
}
const Me = process.env.NODE_ENV !== "production" ? Ul : _s;
function _s(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === hl) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = fe), $o(e)) {
    const c = Te(e, t, !0);
    return n && Ao(c, n), kt > 0 && !s && be && (c.shapeFlag & 6 ? be[be.indexOf(e)] = c : be.push(c)), c.patchFlag |= -2, c;
  }
  if (Ns(e) && (e = e.__vccOpts), t) {
    t = Kl(t);
    let { class: c, style: f } = t;
    c && !ee(c) && (t.class = Rt(c)), z(f) && (Jn(f) && !T(f) && (f = J({}, f)), t.style = po(f));
  }
  const i = ee(e) ? 1 : Ji(e) ? 128 : Bl(e) ? 64 : z(e) ? 4 : $(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Jn(e) && (e = A(e), y("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), se(e, t, n, o, r, i, s, !0);
}
function Kl(e) {
  return e ? Jn(e) || In in e ? J({}, e) : e : null;
}
function Te(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, c = t ? ql(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && ms(c),
    ref: t && t.ref ? n && r ? T(r) ? r.concat(cn(t)) : [r, cn(t)] : cn(t) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && T(i) ? i.map(gs) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== _e ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Te(e.ssContent),
    ssFallback: e.ssFallback && Te(e.ssFallback),
    el: e.el,
    anchor: e.anchor
  };
}
function gs(e) {
  const t = Te(e);
  return T(e.children) && (t.children = e.children.map(gs)), t;
}
function Wl(e = " ", t = 0) {
  return Me(Tn, null, e, t);
}
function zl(e, t) {
  const n = Me(Ft, null, e);
  return n.staticCount = t, n;
}
function ve(e) {
  return e == null || typeof e == "boolean" ? Me(fe) : T(e) ? Me(
    _e,
    null,
    e.slice()
  ) : typeof e == "object" ? ke(e) : Me(Tn, null, String(e));
}
function ke(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Te(e);
}
function Ao(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (T(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ao(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(In in t) ? t._ctx = he : r === 3 && he && (he.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    $(t) ? (t = { default: t, _ctx: he }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Wl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ql(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = Rt([t.class, o.class]));
      else if (r === "style")
        t.style = po([t.style, o.style]);
      else if (Kt(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(T(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function xe(e, t, n, o = null) {
  ge(e, t, 7, [
    n,
    o
  ]);
}
const Yl = hs();
let Jl = 0;
function Xl(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Yl, s = {
    uid: Jl++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Bs(!0),
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
    propsOptions: fs(o, r),
    emitsOptions: Yr(o, r),
    emit: null,
    emitted: null,
    propsDefaults: L,
    inheritAttrs: o.inheritAttrs,
    ctx: L,
    data: L,
    props: L,
    attrs: L,
    slots: L,
    refs: L,
    setupState: L,
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
  return process.env.NODE_ENV !== "production" ? s.ctx = ml(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Bi.bind(null, s), e.ce && e.ce(s), s;
}
let Q = null;
const Ql = () => Q || he, yt = (e) => {
  Q = e, e.scope.on();
}, lt = () => {
  Q && Q.scope.off(), Q = null;
}, Gl = /* @__PURE__ */ Ot("slot,component");
function co(e, t) {
  const n = t.isNativeTag || Er;
  (Gl(e) || n(e)) && y("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Es(e) {
  return e.vnode.shapeFlag & 4;
}
let Ut = !1;
function ec(e, t = !1) {
  Ut = t;
  const { props: n, children: o } = e.vnode, r = Es(e);
  wl(e, n, r, t), Pl(e, o);
  const s = r ? tc(e, t) : void 0;
  return Ut = !1, s;
}
function tc(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && co(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        co(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        ss(s[i]);
    }
    o.compilerOptions && nc() && y('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Pr(new Proxy(e.ctx, is)), process.env.NODE_ENV !== "production" && _l(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? oc(e) : null;
    yt(e), ft();
    const i = Fe(r, e, 0, [process.env.NODE_ENV !== "production" ? _t(e.props) : e.props, s]);
    if (ut(), lt(), _o(i)) {
      if (i.then(lt, lt), t)
        return i.then((c) => {
          ir(e, c, t);
        }).catch((c) => {
          wn(c, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        y(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      ir(e, i, t);
  } else
    vs(e, t);
}
function ir(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : z(t) ? (process.env.NODE_ENV !== "production" && $o(t) && y("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Rr(t), process.env.NODE_ENV !== "production" && gl(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), vs(e, n);
}
let fo;
const nc = () => !fo;
function vs(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && fo && !o.render) {
      const r = o.template || To(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && Ae(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: f } = o, a = J(J({
          isCustomElement: s,
          delimiters: c
        }, i), f);
        o.render = fo(r, a), process.env.NODE_ENV !== "production" && Pe(e, "compile");
      }
    }
    e.render = o.render || ne;
  }
  yt(e), ft(), vl(e), ut(), lt(), process.env.NODE_ENV !== "production" && !o.render && e.render === ne && !t && (o.template ? y('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : y("Component is missing template or render function."));
}
function lr(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return hn(), pe(e, "get", "$attrs"), t[n];
    },
    set() {
      return y("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return y("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return pe(e, "get", "$attrs"), t[n];
    }
  });
}
function oc(e) {
  const t = (o) => {
    process.env.NODE_ENV !== "production" && e.exposed && y("expose() should be called only once per setup()."), e.exposed = o || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = lr(e));
    },
    get slots() {
      return _t(e.slots);
    },
    get emit() {
      return (o, ...r) => e.emit(o, ...r);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = lr(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function $n(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Rr(Pr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Nt)
          return Nt[n](e);
      }
    }));
}
const rc = /(?:^|[-_])(\w)/g, sc = (e) => e.replace(rc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function bs(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function An(e, t, n = !1) {
  let o = bs(t);
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
  return o ? sc(o) : n ? "App" : "Anonymous";
}
function Ns(e) {
  return $(e) && "__vccOpts" in e;
}
const ic = (e, t) => bi(e, t, Ut);
Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : "");
function Hn(e) {
  return !!(e && e.__v_isShallow);
}
function lc() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, o = { style: "color:#9d288c" }, r = {
    header(d) {
      return z(d) ? d.__isVue ? ["div", e, "VueInstance"] : G(d) ? [
        "div",
        {},
        ["span", e, p(d)],
        "<",
        c(d.value),
        ">"
      ] : rt(d) ? [
        "div",
        {},
        ["span", e, Hn(d) ? "ShallowReactive" : "Reactive"],
        "<",
        c(d),
        `>${qe(d) ? " (readonly)" : ""}`
      ] : qe(d) ? [
        "div",
        {},
        ["span", e, Hn(d) ? "ShallowReadonly" : "Readonly"],
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
    d.type.props && d.props && g.push(i("props", A(d.props))), d.setupState !== L && g.push(i("setup", d.setupState)), d.data !== L && g.push(i("data", A(d.data)));
    const D = f(d, "computed");
    D && g.push(i("computed", D));
    const P = f(d, "inject");
    return P && g.push(i("injected", P)), g.push([
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
        ...Object.keys(g).map((D) => [
          "div",
          {},
          ["span", o, D + ": "],
          c(g[D], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(d, g = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", o, d] : z(d) ? ["object", { object: g ? A(d) : d }] : ["span", n, String(d)];
  }
  function f(d, g) {
    const D = d.type;
    if ($(D))
      return;
    const P = {};
    for (const C in d.ctx)
      a(D, C, g) && (P[C] = d.ctx[C]);
    return P;
  }
  function a(d, g, D) {
    const P = d[D];
    if (T(P) && P.includes(g) || z(P) && g in P || d.extends && a(d.extends, g, D) || d.mixins && d.mixins.some((C) => a(C, g, D)))
      return !0;
  }
  function p(d) {
    return Hn(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const cr = "3.2.40", cc = "http://www.w3.org/2000/svg", tt = typeof document < "u" ? document : null, fr = tt && /* @__PURE__ */ tt.createElement("template"), fc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? tt.createElementNS(cc, e) : tt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => tt.createTextNode(e),
  createComment: (e) => tt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => tt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  insertStaticContent(e, t, n, o, r, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      fr.innerHTML = o ? `<svg>${e}</svg>` : e;
      const c = fr.content;
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
function uc(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function ac(e, t, n) {
  const o = e.style, r = ee(n);
  if (n && !r) {
    for (const s in n)
      uo(o, s, n[s]);
    if (t && !ee(t))
      for (const s in t)
        n[s] == null && uo(o, s, "");
  } else {
    const s = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = s);
  }
}
const ur = /\s*!important$/;
function uo(e, t, n) {
  if (T(n))
    n.forEach((o) => uo(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = dc(e, t);
    ur.test(n) ? e.setProperty(Ne(o), n.replace(ur, ""), "important") : e[o] = n;
  }
}
const ar = ["Webkit", "Moz", "ms"], kn = {};
function dc(e, t) {
  const n = kn[t];
  if (n)
    return n;
  let o = We(t);
  if (o !== "filter" && o in e)
    return kn[t] = o;
  o = vn(o);
  for (let r = 0; r < ar.length; r++) {
    const s = ar[r] + o;
    if (s in e)
      return kn[t] = s;
  }
  return t;
}
const dr = "http://www.w3.org/1999/xlink";
function pc(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(dr, t.slice(6, t.length)) : e.setAttributeNS(dr, t, n);
  else {
    const s = Ts(t);
    n == null || s && !gr(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function hc(e, t, n, o, r, s, i) {
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
    f === "boolean" ? n = gr(n) : n == null && f === "string" ? (n = "", c = !0) : f === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch (f) {
    process.env.NODE_ENV !== "production" && !c && y(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, f);
  }
  c && e.removeAttribute(t);
}
const [ys, mc] = /* @__PURE__ */ (() => {
  let e = Date.now, t = !1;
  if (typeof window < "u") {
    Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let ao = 0;
const _c = /* @__PURE__ */ Promise.resolve(), gc = () => {
  ao = 0;
}, Ec = () => ao || (_c.then(gc), ao = ys());
function vc(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function bc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function Nc(e, t, n, o, r = null) {
  const s = e._vei || (e._vei = {}), i = s[t];
  if (o && i)
    i.value = o;
  else {
    const [c, f] = yc(t);
    if (o) {
      const a = s[t] = Oc(o, r);
      vc(e, c, a, f);
    } else
      i && (bc(e, c, i, f), s[t] = void 0);
  }
}
const pr = /(?:Once|Passive|Capture)$/;
function yc(e) {
  let t;
  if (pr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(pr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ne(e.slice(2)), t];
}
function Oc(e, t) {
  const n = (o) => {
    const r = o.timeStamp || ys();
    (mc || r >= n.attached - 1) && ge(wc(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = Ec(), n;
}
function wc(e, t) {
  if (T(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const hr = /^on[a-z]/, xc = (e, t, n, o, r = !1, s, i, c, f) => {
  t === "class" ? uc(e, o, r) : t === "style" ? ac(e, n, o) : Kt(t) ? fn(t) || Nc(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Dc(e, t, o, r)) ? hc(e, t, o, s, i, c, f) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), pc(e, t, o, r));
};
function Dc(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && hr.test(t) && $(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || hr.test(t) && ee(n) ? !1 : t in e;
}
function Os(e, t) {
  const n = Vo(e);
  class o extends Po {
    constructor(s) {
      super(n, s, t);
    }
  }
  return o.def = n, o;
}
const Vc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Po extends Vc {
  constructor(t, n = {}, o) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && o ? o(this._createVNode(), this.shadowRoot) : (process.env.NODE_ENV !== "production" && this.shadowRoot && y("Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."), this.attachShadow({ mode: "open" }));
  }
  connectedCallback() {
    this._connected = !0, this._instance || this._resolveDef();
  }
  disconnectedCallback() {
    this._connected = !1, Lr(() => {
      this._connected || (_r(null, this.shadowRoot), this._instance = null);
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
      const { props: r, styles: s } = o, i = !T(r), c = r ? i ? Object.keys(r) : r : [];
      let f;
      if (i)
        for (const a in this._props) {
          const p = r[a];
          (p === Number || p && p.type === Number) && (this._props[a] = Un(this._props[a]), (f || (f = /* @__PURE__ */ Object.create(null)))[a] = !0);
        }
      this._numberProps = f;
      for (const a of Object.keys(this))
        a[0] !== "_" && this._setProp(a, this[a], !0, !1);
      for (const a of c.map(We))
        Object.defineProperty(this, a, {
          get() {
            return this._getProp(a);
          },
          set(p) {
            this._setProp(a, p);
          }
        });
      this._applyStyles(s), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then(t) : t(this._def);
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    this._numberProps && this._numberProps[t] && (n = Un(n)), this._setProp(We(t), n, !1);
  }
  _getProp(t) {
    return this._props[t];
  }
  _setProp(t, n, o = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), o && (n === !0 ? this.setAttribute(Ne(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Ne(t), n + "") : n || this.removeAttribute(Ne(t))));
  }
  _update() {
    _r(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Me(this._def, J({}, this._props));
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
        if (o instanceof Po) {
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
const Cc = {
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
nl.props;
const Tc = ["ctrl", "shift", "alt", "meta"], Ic = {
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
  exact: (e, t) => Tc.some((n) => e[`${n}Key`] && !t.includes(n))
}, bt = (e, t) => (n, ...o) => {
  for (let r = 0; r < t.length; r++) {
    const s = Ic[t[r]];
    if (s && s(n, t))
      return;
  }
  return e(n, ...o);
}, $c = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ct(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), Ct(e, !0), o.enter(e)) : o.leave(e, () => {
      Ct(e, !1);
    }) : Ct(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ct(e, t);
  }
};
function Ct(e, t) {
  e.style.display = t ? e._vod : "none";
}
const Ac = /* @__PURE__ */ J({ patchProp: xc }, fc);
let mr;
function Pc() {
  return mr || (mr = jl(Ac));
}
const _r = (...e) => {
  Pc().render(...e);
};
function Fc() {
  lc();
}
process.env.NODE_ENV !== "production" && Fc();
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
var ws = function(e) {
  e === void 0 && (e = 0);
  var t = "", n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", o = String(Math.abs(new Date().valueOf()));
  Number(e) >= 1 && (t += String(Number(e) + 1));
  for (var r = 0; r < o.length; r++)
    t += n.charAt(Math.floor(Math.random() * n.length)), t += o.charAt(r);
  return t;
};
const Mc = { class: "dropZone" }, Rc = ["id", "accept"], Sc = ["onDrop"], jc = ["for"], Zc = /* @__PURE__ */ zl('<svg width="10em" height="10em" viewBox="0 0 16 12" class="dropZoneImage" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-v-40def0a8><path fill-rule="evenodd" d="m 8.0274054,0.49415269 a 5.53,5.53 0 0 0 -3.594,1.34200001 c -0.766,0.66 -1.321,1.52 -1.464,2.383 -1.676,0.37 -2.94199993,1.83 -2.94199993,3.593 0,2.048 1.70799993,3.6820003 3.78099993,3.6820003 h 8.9059996 c 1.815,0 3.313,-1.43 3.313,-3.2270003 0,-1.636 -1.242,-2.969 -2.834,-3.194 -0.243,-2.58 -2.476,-4.57900001 -5.1659996,-4.57900001 z m 2.3539996,5.14600001 -1.9999996,-2 a 0.5,0.5 0 0 0 -0.708,0 l -2,2 a 0.5006316,0.5006316 0 1 0 0.708,0.708 l 1.146,-1.147 v 3.793 a 0.5,0.5 0 0 0 1,0 v -3.793 l 1.146,1.147 a 0.5006316,0.5006316 0 0 0 0.7079996,-0.708 z" data-v-40def0a8></path></svg><div class="dropZoneBody" data-v-40def0a8><p data-v-40def0a8><strong class="dropZoneTitle fg-inherit" data-v-40def0a8>Drag and drop files to upload</strong></p><p data-v-40def0a8><small class="dropZoneText" data-v-40def0a8>Your files will be added automatically</small></p><button type="button" class="button" data-v-40def0a8>or select files</button></div>', 2), Lc = [
  Zc
], Bc = /* @__PURE__ */ Vo({
  __name: "DropZone",
  props: {
    modelValue: { default: [] },
    accept: { default: "*" },
    base64: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = dn([]), r = dn(null), s = ws(), i = (c) => {
      const f = c.target.files || c.dataTransfer.files || r.value.files;
      for (let a = 0; a < f.length; a++) {
        const p = f[a];
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
    return (c, f) => ($t(), At("div", Mc, [
      se("input", {
        type: "file",
        id: "dropZoneFile-" + Lt(s),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: r,
        onChange: i,
        multiple: "",
        accept: e.accept
      }, null, 40, Rc),
      se("div", {
        class: "dropZoneWrap",
        onDragenter: f[0] || (f[0] = bt(() => {
        }, ["prevent"])),
        onDragover: f[1] || (f[1] = bt(() => {
        }, ["prevent"])),
        onDrop: bt(i, ["prevent"])
      }, [
        se("label", {
          for: "dropZoneFile-" + Lt(s),
          class: "dropZoneLabel"
        }, Lc, 8, jc)
      ], 40, Sc)
    ]));
  }
}), Hc = `.dropZone[data-v-40def0a8]{overflow-wrap:break-word;padding:.5rem;max-width:calc(100vw - .5rem);max-height:calc(100vh - .5rem)}.dropZone .dropZoneFile[data-v-40def0a8]{position:absolute;width:0px;height:0px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.dropZone .dropZoneWrap[data-v-40def0a8]{border-width:3px;border-style:dashed;border-color:currentColor;box-shadow:-1px 5px 25px -9px #0003}.dropZone .dropZoneWrap .dropZoneLabel[data-v-40def0a8]{display:grid;place-items:center;width:100%;height:100%;padding-top:1.5rem;padding-bottom:2.5rem;cursor:pointer}.dropZone .dropZoneWrap .dropZoneImage[data-v-40def0a8]{pointer-events:none;color:currentColor}.dropZone .dropZoneWrap .dropZoneBody[data-v-40def0a8]{text-align:center}.dropZone .dropZoneWrap .dropZoneBody p[data-v-40def0a8],.dropZone .dropZoneWrap .dropZoneBody span[data-v-40def0a8]{margin:0}.dropZone .dropZoneWrap .dropZoneBody .dropZoneTitle[data-v-40def0a8]{color:#333}.dropZone .dropZoneWrap .dropZoneBody .dropZoneText[data-v-40def0a8]{color:#737373}.dropZone .dropZoneWrap .dropZoneBody .button[data-v-40def0a8]{background-color:transparent;display:inline-block;text-align:center;vertical-align:middle;pointer-events:none;font-size:1rem;line-height:1.5rem;font-weight:400;user-select:none;margin-top:1.25rem;border-radius:.35rem;color:currentColor;border:2px solid currentColor;padding:.375rem .75rem}.fg-inherit[data-v-40def0a8]{color:inherit!important}
`, xs = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, kc = /* @__PURE__ */ xs(Bc, [["styles", [Hc]], ["__scopeId", "data-v-40def0a8"]]), Pn = (e) => (Hi("data-v-030ba619"), e = e(), ki(), e), Uc = { class: "dropZone tedirThumbnail" }, Kc = ["id"], Wc = ["onDrop"], zc = ["for"], qc = ["src", "alt"], Yc = ["width", "height"], Jc = /* @__PURE__ */ Pn(() => /* @__PURE__ */ se("path", { d: "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" }, null, -1)), Xc = /* @__PURE__ */ Pn(() => /* @__PURE__ */ se("path", { d: "M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" }, null, -1)), Qc = [
  Jc,
  Xc
], Gc = { class: "dropZoneBody" }, ef = /* @__PURE__ */ Pn(() => /* @__PURE__ */ se("p", null, [
  /* @__PURE__ */ se("strong", { class: "dropZoneTitle" }, "Drag and drop thumbnail")
], -1)), tf = /* @__PURE__ */ Pn(() => /* @__PURE__ */ se("p", null, [
  /* @__PURE__ */ se("small", { class: "dropZoneText" }, "Your thumbnail will be shown here")
], -1)), nf = {
  type: "button",
  class: "button"
}, of = /* @__PURE__ */ Vo({
  __name: "ThumbBox",
  props: {
    modelValue: { default: {} },
    iconSize: { default: "10em" },
    showButton: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = dn(n.modelValue || {}), r = dn(null), s = ws();
    rn(() => n.modelValue, () => {
      o.value = n.modelValue;
    });
    const i = (c) => {
      const f = c.target.files || c.dataTransfer.files || r.value.files;
      for (let a = 0; a < f.length; a++) {
        const p = f[a], d = new FileReader();
        d.onload = () => {
          p.base64 = d.result, o.value = p;
        }, d.readAsDataURL(p);
      }
      t("update:modelValue", o.value);
    };
    return (c, f) => {
      var a, p, d;
      return $t(), At("div", Uc, [
        se("input", {
          type: "file",
          id: "dropZoneThumbnail-" + Lt(s),
          class: "dropZoneFile",
          ref_key: "dropZoneFile",
          ref: r,
          onChange: i,
          accept: "image/*"
        }, null, 40, Kc),
        se("div", {
          class: Rt(["dropZoneWrap", (a = o.value) != null && a.base64 ? "tedirThumbnailHidden" : ""]),
          onDragenter: f[0] || (f[0] = bt(() => {
          }, ["prevent"])),
          onDragover: f[1] || (f[1] = bt(() => {
          }, ["prevent"])),
          onDrop: bt(i, ["prevent"])
        }, [
          se("label", {
            for: "dropZoneThumbnail-" + Lt(s),
            class: Rt(["dropZoneLabel", (p = o.value) != null && p.base64 ? "tedirThumbnailLabel" : ""])
          }, [
            (d = o.value) != null && d.base64 ? ($t(), At("img", {
              key: 0,
              src: o.value.base64,
              class: "tedirThumbnailImage",
              alt: o.value.name
            }, null, 8, qc)) : ($t(), At(_e, { key: 1 }, [
              ($t(), At("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: e.iconSize,
                height: e.iconSize,
                fill: "currentColor",
                class: "dropZoneImage my-10px",
                viewBox: "0 0 16 16"
              }, Qc, 8, Yc)),
              se("div", Gc, [
                ef,
                tf,
                pl(se("button", nf, "or select thumbnail", 512), [
                  [$c, e.showButton]
                ])
              ])
            ], 64))
          ], 10, zc)
        ], 42, Wc)
      ]);
    };
  }
}), rf = `.tedirThumbnailHidden[data-v-030ba619]{border:none}.tedirThumbnailLabel[data-v-030ba619]{padding-top:0;padding-bottom:0}.tedirThumbnailImage[data-v-030ba619]{object-fit:fill;width:100%}.tedirThumbnail .dropZoneWrap .dropZoneBody p .dropZoneTitle[data-v-030ba619]{color:inherit}.dropZone[data-v-030ba619]{overflow-wrap:break-word;padding:.5rem;max-width:calc(100vw - .5rem);max-height:calc(100vh - .5rem)}.dropZone .dropZoneFile[data-v-030ba619]{position:absolute;width:0px;height:0px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.dropZone .dropZoneWrap[data-v-030ba619]{border-width:3px;border-style:dashed;border-color:currentColor;box-shadow:-1px 5px 25px -9px #0003}.dropZone .dropZoneWrap .dropZoneLabel[data-v-030ba619]{display:grid;place-items:center;width:100%;height:100%;padding-top:1.5rem;padding-bottom:2.5rem;cursor:pointer}.dropZone .dropZoneWrap .dropZoneImage[data-v-030ba619]{pointer-events:none;color:currentColor}.dropZone .dropZoneWrap .dropZoneBody[data-v-030ba619]{text-align:center}.dropZone .dropZoneWrap .dropZoneBody p[data-v-030ba619],.dropZone .dropZoneWrap .dropZoneBody span[data-v-030ba619]{margin:0}.dropZone .dropZoneWrap .dropZoneBody .dropZoneTitle[data-v-030ba619]{color:#333}.dropZone .dropZoneWrap .dropZoneBody .dropZoneText[data-v-030ba619]{color:#737373}.dropZone .dropZoneWrap .dropZoneBody .button[data-v-030ba619]{background-color:transparent;display:inline-block;text-align:center;vertical-align:middle;pointer-events:none;font-size:1rem;line-height:1.5rem;font-weight:400;user-select:none;margin-top:1.25rem;border-radius:.35rem;color:currentColor;border:2px solid currentColor;padding:.375rem .75rem}
`, sf = /* @__PURE__ */ xs(of, [["styles", [rf]], ["__scopeId", "data-v-030ba619"]]), lf = Os(kc), cf = Os(sf);
function ff() {
  customElements.define("drop-zone", lf), customElements.define("thumb-box", cf);
}
export {
  lf as DropZone,
  cf as ThumbBox,
  ff as useTedirDropZone
};

function Ot(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const Vs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Cs = /* @__PURE__ */ Ot(Vs);
function hr(e) {
  return !!e || e === "";
}
function co(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = ee(o) ? $s(o) : co(o);
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
const Ts = /;(?![^(]*\))/g, Is = /:(.+)/;
function $s(e) {
  const t = {};
  return e.split(Ts).forEach((n) => {
    if (n) {
      const o = n.split(Is);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Ft(e) {
  let t = "";
  if (ee(e))
    t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const o = Ft(e[n]);
      o && (t += o + " ");
    }
  else if (z(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const L = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, _t = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ne = () => {
}, mr = () => !1, As = /^on[^a-z]/, Ht = (e) => As.test(e), cn = (e) => e.startsWith("onUpdate:"), J = Object.assign, fo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Fs = Object.prototype.hasOwnProperty, P = (e, t) => Fs.call(e, t), T = Array.isArray, Et = (e) => gn(e) === "[object Map]", Ps = (e) => gn(e) === "[object Set]", $ = (e) => typeof e == "function", ee = (e) => typeof e == "string", uo = (e) => typeof e == "symbol", z = (e) => e !== null && typeof e == "object", ao = (e) => z(e) && $(e.then) && $(e.catch), Ms = Object.prototype.toString, gn = (e) => Ms.call(e), po = (e) => gn(e).slice(8, -1), Rs = (e) => gn(e) === "[object Object]", ho = (e) => ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Qt = /* @__PURE__ */ Ot(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ss = /* @__PURE__ */ Ot("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), _n = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, js = /-(\w)/g, We = _n((e) => e.replace(js, (t, n) => n ? n.toUpperCase() : "")), Zs = /\B([A-Z])/g, Ne = _n((e) => e.replace(Zs, "-$1").toLowerCase()), En = _n((e) => e.charAt(0).toUpperCase() + e.slice(1)), Xe = _n((e) => e ? `on${En(e)}` : ""), Pt = (e, t) => !Object.is(e, t), Dt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, fn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Ln = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Mo;
const gr = () => Mo || (Mo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Bn(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let xe;
class Ls {
  constructor(t = !1) {
    this.active = !0, this.effects = [], this.cleanups = [], !t && xe && (this.parent = xe, this.index = (xe.scopes || (xe.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = xe;
      try {
        return xe = this, t();
      } finally {
        xe = n;
      }
    } else
      process.env.NODE_ENV !== "production" && Bn("cannot run an inactive effect scope.");
  }
  on() {
    xe = this;
  }
  off() {
    xe = this.parent;
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
function Bs(e, t = xe) {
  t && t.active && t.effects.push(e);
}
const Mt = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, _r = (e) => (e.w & ze) > 0, Er = (e) => (e.n & ze) > 0, Hs = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= ze;
}, ks = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      _r(r) && !Er(r) ? r.delete(e) : t[n++] = r, r.w &= ~ze, r.n &= ~ze;
    }
    t.length = n;
  }
}, Hn = /* @__PURE__ */ new WeakMap();
let Ct = 0, ze = 1;
const kn = 30;
let le;
const nt = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Un = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class mo {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Bs(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = le, n = Ue;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = le, le = this, Ue = !0, ze = 1 << ++Ct, Ct <= kn ? Hs(this) : Ro(this), this.fn();
    } finally {
      Ct <= kn && ks(this), ze = 1 << --Ct, le = this.parent, Ue = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    le === this ? this.deferStop = !0 : this.active && (Ro(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Ro(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Ue = !0;
const vr = [];
function ct() {
  vr.push(Ue), Ue = !1;
}
function ft() {
  const e = vr.pop();
  Ue = e === void 0 ? !0 : e;
}
function de(e, t, n) {
  if (Ue && le) {
    let o = Hn.get(e);
    o || Hn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Mt());
    const s = process.env.NODE_ENV !== "production" ? { effect: le, target: e, type: t, key: n } : void 0;
    Kn(r, s);
  }
}
function Kn(e, t) {
  let n = !1;
  Ct <= kn ? Er(e) || (e.n |= ze, n = !_r(e)) : n = !e.has(le), n && (e.add(le), le.deps.push(e), process.env.NODE_ENV !== "production" && le.onTrack && le.onTrack(Object.assign({ effect: le }, t)));
}
function Me(e, t, n, o, r, s) {
  const i = Hn.get(e);
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
        T(e) ? ho(n) && c.push(i.get("length")) : (c.push(i.get(nt)), Et(e) && c.push(i.get(Un)));
        break;
      case "delete":
        T(e) || (c.push(i.get(nt)), Et(e) && c.push(i.get(Un)));
        break;
      case "set":
        Et(e) && c.push(i.get(nt));
        break;
    }
  const f = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (c.length === 1)
    c[0] && (process.env.NODE_ENV !== "production" ? ht(c[0], f) : ht(c[0]));
  else {
    const a = [];
    for (const p of c)
      p && a.push(...p);
    process.env.NODE_ENV !== "production" ? ht(Mt(a), f) : ht(Mt(a));
  }
}
function ht(e, t) {
  const n = T(e) ? e : [...e];
  for (const o of n)
    o.computed && So(o, t);
  for (const o of n)
    o.computed || So(o, t);
}
function So(e, t) {
  (e !== le || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(J({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const Us = /* @__PURE__ */ Ot("__proto__,__v_isRef,__isVue"), Nr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(uo)
), Ks = /* @__PURE__ */ vn(), Ws = /* @__PURE__ */ vn(!1, !0), zs = /* @__PURE__ */ vn(!0), qs = /* @__PURE__ */ vn(!0, !0), jo = /* @__PURE__ */ Ys();
function Ys() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = A(this);
      for (let s = 0, i = this.length; s < i; s++)
        de(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(A)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      ct();
      const o = A(this)[t].apply(this, n);
      return ft(), o;
    };
  }), e;
}
function vn(e = !1, t = !1) {
  return function(o, r, s) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && s === (e ? t ? Cr : Vr : t ? Dr : xr).get(o))
      return o;
    const i = T(o);
    if (!e && i && P(jo, r))
      return Reflect.get(jo, r, s);
    const c = Reflect.get(o, r, s);
    return (uo(r) ? Nr.has(r) : Us(r)) || (e || de(o, "get", r), t) ? c : G(c) ? i && ho(r) ? c : c.value : z(c) ? e ? Tr(c) : _o(c) : c;
  };
}
const Js = /* @__PURE__ */ br(), Xs = /* @__PURE__ */ br(!0);
function br(e = !1) {
  return function(n, o, r, s) {
    let i = n[o];
    if (qe(i) && G(i) && !G(r))
      return !1;
    if (!e && (!un(r) && !qe(r) && (i = A(i), r = A(r)), !T(n) && G(i) && !G(r)))
      return i.value = r, !0;
    const c = T(n) && ho(o) ? Number(o) < n.length : P(n, o), f = Reflect.set(n, o, r, s);
    return n === A(s) && (c ? Pt(r, i) && Me(n, "set", o, r, i) : Me(n, "add", o, r)), f;
  };
}
function Qs(e, t) {
  const n = P(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && Me(e, "delete", t, void 0, o), r;
}
function Gs(e, t) {
  const n = Reflect.has(e, t);
  return (!uo(t) || !Nr.has(t)) && de(e, "has", t), n;
}
function ei(e) {
  return de(e, "iterate", T(e) ? "length" : nt), Reflect.ownKeys(e);
}
const yr = {
  get: Ks,
  set: Js,
  deleteProperty: Qs,
  has: Gs,
  ownKeys: ei
}, Or = {
  get: zs,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && Bn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && Bn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, ti = /* @__PURE__ */ J({}, yr, {
  get: Ws,
  set: Xs
}), ni = /* @__PURE__ */ J({}, Or, {
  get: qs
}), go = (e) => e, Nn = (e) => Reflect.getPrototypeOf(e);
function zt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = A(e), s = A(t);
  n || (t !== s && de(r, "get", t), de(r, "get", s));
  const { has: i } = Nn(r), c = o ? go : n ? Eo : Rt;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, s))
    return c(e.get(s));
  e !== r && e.get(t);
}
function qt(e, t = !1) {
  const n = this.__v_raw, o = A(n), r = A(e);
  return t || (e !== r && de(o, "has", e), de(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Yt(e, t = !1) {
  return e = e.__v_raw, !t && de(A(e), "iterate", nt), Reflect.get(e, "size", e);
}
function Zo(e) {
  e = A(e);
  const t = A(this);
  return Nn(t).has.call(t, e) || (t.add(e), Me(t, "add", e, e)), this;
}
function Lo(e, t) {
  t = A(t);
  const n = A(this), { has: o, get: r } = Nn(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && wr(n, o, e) : (e = A(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? Pt(t, i) && Me(n, "set", e, t, i) : Me(n, "add", e, t), this;
}
function Bo(e) {
  const t = A(this), { has: n, get: o } = Nn(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && wr(t, n, e) : (e = A(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && Me(t, "delete", e, void 0, s), i;
}
function Ho() {
  const e = A(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? Et(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Me(e, "clear", void 0, void 0, n), o;
}
function Jt(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, c = A(i), f = t ? go : e ? Eo : Rt;
    return !e && de(c, "iterate", nt), i.forEach((a, p) => o.call(r, f(a), f(p), s));
  };
}
function Xt(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = A(r), i = Et(s), c = e === "entries" || e === Symbol.iterator && i, f = e === "keys" && i, a = r[e](...o), p = n ? go : t ? Eo : Rt;
    return !t && de(s, "iterate", f ? Un : nt), {
      next() {
        const { value: d, done: _ } = a.next();
        return _ ? { value: d, done: _ } : {
          value: c ? [p(d[0]), p(d[1])] : p(d),
          done: _
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Le(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${En(e)} operation ${n}failed: target is readonly.`, A(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function oi() {
  const e = {
    get(s) {
      return zt(this, s);
    },
    get size() {
      return Yt(this);
    },
    has: qt,
    add: Zo,
    set: Lo,
    delete: Bo,
    clear: Ho,
    forEach: Jt(!1, !1)
  }, t = {
    get(s) {
      return zt(this, s, !1, !0);
    },
    get size() {
      return Yt(this);
    },
    has: qt,
    add: Zo,
    set: Lo,
    delete: Bo,
    clear: Ho,
    forEach: Jt(!1, !0)
  }, n = {
    get(s) {
      return zt(this, s, !0);
    },
    get size() {
      return Yt(this, !0);
    },
    has(s) {
      return qt.call(this, s, !0);
    },
    add: Le("add"),
    set: Le("set"),
    delete: Le("delete"),
    clear: Le("clear"),
    forEach: Jt(!0, !1)
  }, o = {
    get(s) {
      return zt(this, s, !0, !0);
    },
    get size() {
      return Yt(this, !0);
    },
    has(s) {
      return qt.call(this, s, !0);
    },
    add: Le("add"),
    set: Le("set"),
    delete: Le("delete"),
    clear: Le("clear"),
    forEach: Jt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = Xt(s, !1, !1), n[s] = Xt(s, !0, !1), t[s] = Xt(s, !1, !0), o[s] = Xt(s, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [ri, si, ii, li] = /* @__PURE__ */ oi();
function bn(e, t) {
  const n = t ? e ? li : ii : e ? si : ri;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(P(n, r) && r in o ? n : o, r, s);
}
const ci = {
  get: /* @__PURE__ */ bn(!1, !1)
}, fi = {
  get: /* @__PURE__ */ bn(!1, !0)
}, ui = {
  get: /* @__PURE__ */ bn(!0, !1)
}, ai = {
  get: /* @__PURE__ */ bn(!0, !0)
};
function wr(e, t, n) {
  const o = A(n);
  if (o !== n && t.call(e, o)) {
    const r = po(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const xr = /* @__PURE__ */ new WeakMap(), Dr = /* @__PURE__ */ new WeakMap(), Vr = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakMap();
function di(e) {
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
function pi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : di(po(e));
}
function _o(e) {
  return qe(e) ? e : yn(e, !1, yr, ci, xr);
}
function hi(e) {
  return yn(e, !1, ti, fi, Dr);
}
function Tr(e) {
  return yn(e, !0, Or, ui, Vr);
}
function mt(e) {
  return yn(e, !0, ni, ai, Cr);
}
function yn(e, t, n, o, r) {
  if (!z(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = pi(e);
  if (i === 0)
    return e;
  const c = new Proxy(e, i === 2 ? o : n);
  return r.set(e, c), c;
}
function ot(e) {
  return qe(e) ? ot(e.__v_raw) : !!(e && e.__v_isReactive);
}
function qe(e) {
  return !!(e && e.__v_isReadonly);
}
function un(e) {
  return !!(e && e.__v_isShallow);
}
function Wn(e) {
  return ot(e) || qe(e);
}
function A(e) {
  const t = e && e.__v_raw;
  return t ? A(t) : e;
}
function Ir(e) {
  return fn(e, "__v_skip", !0), e;
}
const Rt = (e) => z(e) ? _o(e) : e, Eo = (e) => z(e) ? Tr(e) : e;
function $r(e) {
  Ue && le && (e = A(e), process.env.NODE_ENV !== "production" ? Kn(e.dep || (e.dep = Mt()), {
    target: e,
    type: "get",
    key: "value"
  }) : Kn(e.dep || (e.dep = Mt())));
}
function Ar(e, t) {
  e = A(e), e.dep && (process.env.NODE_ENV !== "production" ? ht(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : ht(e.dep));
}
function G(e) {
  return !!(e && e.__v_isRef === !0);
}
function an(e) {
  return mi(e, !1);
}
function mi(e, t) {
  return G(e) ? e : new gi(e, t);
}
class gi {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : A(t), this._value = n ? t : Rt(t);
  }
  get value() {
    return $r(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || un(t) || qe(t);
    t = n ? t : A(t), Pt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Rt(t), Ar(this, t));
  }
}
function St(e) {
  return G(e) ? e.value : e;
}
const _i = {
  get: (e, t, n) => St(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return G(r) && !G(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Fr(e) {
  return ot(e) ? e : new Proxy(e, _i);
}
var Pr;
class Ei {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Pr] = !1, this._dirty = !0, this.effect = new mo(t, () => {
      this._dirty || (this._dirty = !0, Ar(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = A(this);
    return $r(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Pr = "__v_isReadonly";
function vi(e, t, n = !1) {
  let o, r;
  const s = $(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : ne) : (o = e.get, r = e.set);
  const i = new Ei(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const rt = [];
function Gt(e) {
  rt.push(e);
}
function en() {
  rt.pop();
}
function y(e, ...t) {
  ct();
  const n = rt.length ? rt[rt.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = Ni();
  if (o)
    Fe(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: s }) => `at <${Tn(n, s.type)}>`).join(`
`),
      r
    ]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...bi(r)), console.warn(...s);
  }
  ft();
}
function Ni() {
  let e = rt[rt.length - 1];
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
function bi(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...yi(n));
  }), t;
}
function yi({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Tn(e.component, e.type, o)}`, s = ">" + n;
  return e.props ? [r, ...Oi(e.props), s] : [r + s];
}
function Oi(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Mr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Mr(e, t, n) {
  return ee(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : G(t) ? (t = Mr(e, A(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : $(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = A(t), n ? t : [`${e}=`, t]);
}
const vo = {
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
    On(s, t, n);
  }
  return r;
}
function ge(e, t, n, o) {
  if ($(e)) {
    const s = Fe(e, t, n, o);
    return s && ao(s) && s.catch((i) => {
      On(i, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(ge(e[s], t, n, o));
  return r;
}
function On(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? vo[n] : n;
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
  wi(e, n, r, o);
}
function wi(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = vo[t];
    if (n && Gt(n), y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && en(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let jt = !1, zn = !1;
const re = [];
let Ve = 0;
const vt = [];
let De = null, Be = 0;
const Rr = /* @__PURE__ */ Promise.resolve();
let No = null;
const xi = 100;
function Sr(e) {
  const t = No || Rr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Di(e) {
  let t = Ve + 1, n = re.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    Zt(re[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function wn(e) {
  (!re.length || !re.includes(e, jt && e.allowRecurse ? Ve + 1 : Ve)) && (e.id == null ? re.push(e) : re.splice(Di(e.id), 0, e), jr());
}
function jr() {
  !jt && !zn && (zn = !0, No = Rr.then(Br));
}
function Vi(e) {
  const t = re.indexOf(e);
  t > Ve && re.splice(t, 1);
}
function Zr(e) {
  T(e) ? vt.push(...e) : (!De || !De.includes(e, e.allowRecurse ? Be + 1 : Be)) && vt.push(e), jr();
}
function ko(e, t = jt ? Ve + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < re.length; t++) {
    const n = re[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && bo(e, n))
        continue;
      re.splice(t, 1), t--, n();
    }
  }
}
function Lr(e) {
  if (vt.length) {
    const t = [...new Set(vt)];
    if (vt.length = 0, De) {
      De.push(...t);
      return;
    }
    for (De = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), De.sort((n, o) => Zt(n) - Zt(o)), Be = 0; Be < De.length; Be++)
      process.env.NODE_ENV !== "production" && bo(e, De[Be]) || De[Be]();
    De = null, Be = 0;
  }
}
const Zt = (e) => e.id == null ? 1 / 0 : e.id, Ci = (e, t) => {
  const n = Zt(e) - Zt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Br(e) {
  zn = !1, jt = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), re.sort(Ci);
  const t = process.env.NODE_ENV !== "production" ? (n) => bo(e, n) : ne;
  try {
    for (Ve = 0; Ve < re.length; Ve++) {
      const n = re[Ve];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Fe(n, null, 14);
      }
    }
  } finally {
    Ve = 0, re.length = 0, Lr(e), jt = !1, No = null, (re.length || vt.length) && Br(e);
  }
}
function bo(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > xi) {
      const o = t.ownerInstance, r = o && vs(o.type);
      return y(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let st = !1;
const pt = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (gr().__VUE_HMR_RUNTIME__ = {
  createRecord: Pn(Hr),
  rerender: Pn($i),
  reload: Pn(Ai)
});
const lt = /* @__PURE__ */ new Map();
function Ti(e) {
  const t = e.type.__hmrId;
  let n = lt.get(t);
  n || (Hr(t, e.type), n = lt.get(t)), n.instances.add(e);
}
function Ii(e) {
  lt.get(e.type.__hmrId).instances.delete(e);
}
function Hr(e, t) {
  return lt.has(e) ? !1 : (lt.set(e, {
    initialDef: It(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function It(e) {
  return Ns(e) ? e.__vccOpts : e;
}
function $i(e, t) {
  const n = lt.get(e);
  !n || (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, It(o.type).render = t), o.renderCache = [], st = !0, o.update(), st = !1;
  }));
}
function Ai(e, t) {
  const n = lt.get(e);
  if (!n)
    return;
  t = It(t), Uo(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = It(r.type);
    pt.has(s) || (s !== n.initialDef && Uo(s, t), pt.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (pt.add(s), r.ceReload(t.styles), pt.delete(s)) : r.parent ? (wn(r.parent.update), r.parent.type.__asyncLoader && r.parent.ceReload && r.parent.ceReload(t.styles)) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Zr(() => {
    for (const r of o)
      pt.delete(It(r.type));
  });
}
function Uo(e, t) {
  J(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Pn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let Ge, Tt = [], qn = !1;
function kt(e, ...t) {
  Ge ? Ge.emit(e, ...t) : qn || Tt.push({ event: e, args: t });
}
function kr(e, t) {
  var n, o;
  Ge = e, Ge ? (Ge.enabled = !0, Tt.forEach(({ event: r, args: s }) => Ge.emit(r, ...s)), Tt = []) : typeof window < "u" && window.HTMLElement && !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    kr(s, t);
  }), setTimeout(() => {
    Ge || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, qn = !0, Tt = []);
  }, 3e3)) : (qn = !0, Tt = []);
}
function Fi(e, t) {
  kt("app:init", e, t, {
    Fragment: he,
    Text: Vn,
    Comment: ce,
    Static: $t
  });
}
function Pi(e) {
  kt("app:unmount", e);
}
const Mi = /* @__PURE__ */ yo("component:added"), Ur = /* @__PURE__ */ yo("component:updated"), Ri = /* @__PURE__ */ yo("component:removed");
function yo(e) {
  return (t) => {
    kt(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const Si = /* @__PURE__ */ Kr("perf:start"), ji = /* @__PURE__ */ Kr("perf:end");
function Kr(e) {
  return (t, n, o) => {
    kt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Zi(e, t, n) {
  kt("component:emit", e.appContext.app, e, t, n);
}
function Li(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || L;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: p, propsOptions: [d] } = e;
    if (p)
      if (!(t in p))
        (!d || !(Xe(t) in d)) && y(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Xe(t)}" prop.`);
      else {
        const _ = p[t];
        $(_) && (_(...n) || y(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && t.slice(7);
  if (i && i in o) {
    const p = `${i === "modelValue" ? "model" : i}Modifiers`, { number: d, trim: _ } = o[p] || L;
    _ && (r = n.map((D) => D.trim())), d && (r = n.map(Ln));
  }
  if (process.env.NODE_ENV !== "production" && Zi(e, t, r), process.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[Xe(p)] && y(`Event "${p}" is emitted in component ${Tn(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ne(t)}" instead of "${t}".`);
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
function Wr(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, c = !1;
  if (!$(e)) {
    const f = (a) => {
      const p = Wr(a, t, !0);
      p && (c = !0, J(i, p));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !s && !c ? (z(e) && o.set(e, null), null) : (T(s) ? s.forEach((f) => i[f] = null) : J(i, s), z(e) && o.set(e, i), i);
}
function xn(e, t) {
  return !e || !Ht(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), P(e, t[0].toLowerCase() + t.slice(1)) || P(e, Ne(t)) || P(e, t));
}
let me = null, zr = null;
function dn(e) {
  const t = me;
  return me = e, zr = e && e.type.__scopeId || null, t;
}
function Bi(e, t = me, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && nr(-1);
    const s = dn(t), i = e(...r);
    return dn(s), o._d && nr(1), process.env.NODE_ENV !== "production" && Ur(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Yn = !1;
function pn() {
  Yn = !0;
}
function Mn(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: s, propsOptions: [i], slots: c, attrs: f, emit: a, render: p, renderCache: d, data: _, setupState: D, ctx: F, inheritAttrs: C } = e;
  let U, B;
  const Z = dn(e);
  process.env.NODE_ENV !== "production" && (Yn = !1);
  try {
    if (n.shapeFlag & 4) {
      const W = r || o;
      U = Ee(p.call(W, W, d, s, D, _, F)), B = f;
    } else {
      const W = t;
      process.env.NODE_ENV !== "production" && f === s && pn(), U = Ee(W.length > 1 ? W(s, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return pn(), f;
        },
        slots: c,
        emit: a
      } : { attrs: f, slots: c, emit: a }) : W(s, null)), B = t.props ? f : ki(f);
    }
  } catch (W) {
    At.length = 0, On(W, e, 1), U = Pe(ce);
  }
  let q = U, fe;
  if (process.env.NODE_ENV !== "production" && U.patchFlag > 0 && U.patchFlag & 2048 && ([q, fe] = Hi(U)), B && C !== !1) {
    const W = Object.keys(B), { shapeFlag: Se } = q;
    if (W.length) {
      if (Se & 7)
        i && W.some(cn) && (B = Ui(B, i)), q = Ce(q, B);
      else if (process.env.NODE_ENV !== "production" && !Yn && q.type !== ce) {
        const be = Object.keys(f), M = [], K = [];
        for (let Y = 0, oe = be.length; Y < oe; Y++) {
          const te = be[Y];
          Ht(te) ? cn(te) || M.push(te[2].toLowerCase() + te.slice(3)) : K.push(te);
        }
        K.length && y(`Extraneous non-props attributes (${K.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), M.length && y(`Extraneous non-emits event listeners (${M.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Ko(q) && y("Runtime directive used on component with non-element root node. The directives will not function as intended."), q = Ce(q), q.dirs = q.dirs ? q.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Ko(q) && y("Component inside <Transition> renders non-element root node that cannot be animated."), q.transition = n.transition), process.env.NODE_ENV !== "production" && fe ? fe(q) : U = q, dn(Z), U;
}
const Hi = (e) => {
  const t = e.children, n = e.dynamicChildren, o = qr(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (c) => {
    t[r] = c, n && (s > -1 ? n[s] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [Ee(o), i];
};
function qr(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (Vo(o)) {
      if (o.type !== ce || o.children === "v-if") {
        if (t)
          return;
        t = o;
      }
    } else
      return;
  }
  return t;
}
const ki = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ht(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ui = (e, t) => {
  const n = {};
  for (const o in e)
    (!cn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Ko = (e) => e.shapeFlag & 7 || e.type === ce;
function Ki(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: c, patchFlag: f } = t, a = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || c) && st || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? Wo(o, i, a) : !!i;
    if (f & 8) {
      const p = t.dynamicProps;
      for (let d = 0; d < p.length; d++) {
        const _ = p[d];
        if (i[_] !== o[_] && !xn(a, _))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : o === i ? !1 : o ? i ? Wo(o, i, a) : !0 : !!i;
  return !1;
}
function Wo(e, t, n) {
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
function Wi({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const zi = (e) => e.__isSuspense;
function qi(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : Zr(e);
}
function Yi(e, t) {
  if (!Q)
    process.env.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = Q.provides;
    const o = Q.parent && Q.parent.provides;
    o === n && (n = Q.provides = Object.create(o)), n[e] = t;
  }
}
function Rn(e, t, n = !1) {
  const o = Q || me;
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
const zo = {};
function tn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !$(t) && y("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), Yr(e, t, n);
}
function Yr(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = L) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && y('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && y('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const c = (Z) => {
    y("Invalid watch source: ", Z, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, f = Q;
  let a, p = !1, d = !1;
  if (G(e) ? (a = () => e.value, p = un(e)) : ot(e) ? (a = () => e, o = !0) : T(e) ? (d = !0, p = e.some((Z) => ot(Z) || un(Z)), a = () => e.map((Z) => {
    if (G(Z))
      return Z.value;
    if (ot(Z))
      return gt(Z);
    if ($(Z))
      return Fe(Z, f, 2);
    process.env.NODE_ENV !== "production" && c(Z);
  })) : $(e) ? t ? a = () => Fe(e, f, 2) : a = () => {
    if (!(f && f.isUnmounted))
      return _ && _(), ge(e, f, 3, [D]);
  } : (a = ne, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const Z = a;
    a = () => gt(Z());
  }
  let _, D = (Z) => {
    _ = B.onStop = () => {
      Fe(Z, f, 4);
    };
  };
  if (Bt)
    return D = ne, t ? n && ge(t, f, 3, [
      a(),
      d ? [] : void 0,
      D
    ]) : a(), ne;
  let F = d ? [] : zo;
  const C = () => {
    if (!!B.active)
      if (t) {
        const Z = B.run();
        (o || p || (d ? Z.some((q, fe) => Pt(q, F[fe])) : Pt(Z, F))) && (_ && _(), ge(t, f, 3, [
          Z,
          F === zo ? void 0 : F,
          D
        ]), F = Z);
      } else
        B.run();
  };
  C.allowRecurse = !!t;
  let U;
  r === "sync" ? U = C : r === "post" ? U = () => ae(C, f && f.suspense) : (C.pre = !0, f && (C.id = f.uid), U = () => wn(C));
  const B = new mo(a, U);
  return process.env.NODE_ENV !== "production" && (B.onTrack = s, B.onTrigger = i), t ? n ? C() : F = B.run() : r === "post" ? ae(B.run.bind(B), f && f.suspense) : B.run(), () => {
    B.stop(), f && f.scope && fo(f.scope.effects, B);
  };
}
function Ji(e, t, n) {
  const o = this.proxy, r = ee(e) ? e.includes(".") ? Jr(o, e) : () => o[e] : e.bind(o, o);
  let s;
  $(t) ? s = t : (s = t.handler, n = t);
  const i = Q;
  yt(this);
  const c = Yr(r, s.bind(o), n);
  return i ? yt(i) : it(), c;
}
function Jr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function gt(e, t) {
  if (!z(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), G(e))
    gt(e.value, t);
  else if (T(e))
    for (let n = 0; n < e.length; n++)
      gt(e[n], t);
  else if (Ps(e) || Et(e))
    e.forEach((n) => {
      gt(n, t);
    });
  else if (Rs(e))
    for (const n in e)
      gt(e[n], t);
  return e;
}
function Xi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return es(() => {
    e.isMounted = !0;
  }), ts(() => {
    e.isUnmounting = !0;
  }), e;
}
const pe = [Function, Array], Qi = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: pe,
    onEnter: pe,
    onAfterEnter: pe,
    onEnterCancelled: pe,
    onBeforeLeave: pe,
    onLeave: pe,
    onAfterLeave: pe,
    onLeaveCancelled: pe,
    onBeforeAppear: pe,
    onAppear: pe,
    onAfterAppear: pe,
    onAppearCancelled: pe
  },
  setup(e, { slots: t }) {
    const n = zl(), o = Xi();
    let r;
    return () => {
      const s = t.default && Qr(t.default(), !0);
      if (!s || !s.length)
        return;
      let i = s[0];
      if (s.length > 1) {
        let C = !1;
        for (const U of s)
          if (U.type !== ce) {
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
        return Sn(i);
      const a = qo(i);
      if (!a)
        return Sn(i);
      const p = Jn(a, c, o, n);
      Xn(a, p);
      const d = n.subTree, _ = d && qo(d);
      let D = !1;
      const { getTransitionKey: F } = a.type;
      if (F) {
        const C = F();
        r === void 0 ? r = C : C !== r && (r = C, D = !0);
      }
      if (_ && _.type !== ce && (!et(a, _) || D)) {
        const C = Jn(_, c, o, n);
        if (Xn(_, C), f === "out-in")
          return o.isLeaving = !0, C.afterLeave = () => {
            o.isLeaving = !1, n.update();
          }, Sn(i);
        f === "in-out" && a.type !== ce && (C.delayLeave = (U, B, Z) => {
          const q = Xr(o, _);
          q[String(_.key)] = _, U._leaveCb = () => {
            B(), U._leaveCb = void 0, delete p.delayedLeave;
          }, p.delayedLeave = Z;
        });
      }
      return i;
    };
  }
}, Gi = Qi;
function Xr(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function Jn(e, t, n, o) {
  const { appear: r, mode: s, persisted: i = !1, onBeforeEnter: c, onEnter: f, onAfterEnter: a, onEnterCancelled: p, onBeforeLeave: d, onLeave: _, onAfterLeave: D, onLeaveCancelled: F, onBeforeAppear: C, onAppear: U, onAfterAppear: B, onAppearCancelled: Z } = t, q = String(e.key), fe = Xr(n, e), W = (M, K) => {
    M && ge(M, o, 9, K);
  }, Se = (M, K) => {
    const Y = K[1];
    W(M, K), T(M) ? M.every((oe) => oe.length <= 1) && Y() : M.length <= 1 && Y();
  }, be = {
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
      const Y = fe[q];
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
      const Te = M._enterCb = (Kt) => {
        te || (te = !0, Kt ? W(oe, [M]) : W(Y, [M]), be.delayedLeave && be.delayedLeave(), M._enterCb = void 0);
      };
      K ? Se(K, [M, Te]) : Te();
    },
    leave(M, K) {
      const Y = String(e.key);
      if (M._enterCb && M._enterCb(!0), n.isUnmounting)
        return K();
      W(d, [M]);
      let oe = !1;
      const te = M._leaveCb = (Te) => {
        oe || (oe = !0, K(), Te ? W(F, [M]) : W(D, [M]), M._leaveCb = void 0, fe[Y] === e && delete fe[Y]);
      };
      fe[Y] = e, _ ? Se(_, [M, te]) : te();
    },
    clone(M) {
      return Jn(M, t, n, o);
    }
  };
  return be;
}
function Sn(e) {
  if (Ut(e))
    return e = Ce(e), e.children = null, e;
}
function qo(e) {
  return Ut(e) ? e.children ? e.children[0] : void 0 : e;
}
function Xn(e, t) {
  e.shapeFlag & 6 && e.component ? Xn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Qr(e, t = !1, n) {
  let o = [], r = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const c = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === he ? (i.patchFlag & 128 && r++, o = o.concat(Qr(i.children, t, c))) : (t || i.type !== ce) && o.push(c != null ? Ce(i, { key: c }) : i);
  }
  if (r > 1)
    for (let s = 0; s < o.length; s++)
      o[s].patchFlag = -2;
  return o;
}
function Oo(e) {
  return $(e) ? { setup: e, name: e.name } : e;
}
const nn = (e) => !!e.type.__asyncLoader, Ut = (e) => e.type.__isKeepAlive;
function el(e, t) {
  Gr(e, "a", t);
}
function tl(e, t) {
  Gr(e, "da", t);
}
function Gr(e, t, n = Q) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Dn(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Ut(r.parent.vnode) && nl(o, t, n, r), r = r.parent;
  }
}
function nl(e, t, n, o) {
  const r = Dn(t, e, o, !0);
  ns(() => {
    fo(o[t], r);
  }, n);
}
function Dn(e, t, n = Q, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      ct(), yt(n);
      const c = ge(t, n, e, i);
      return it(), ft(), c;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = Xe(vo[e].replace(/ hook$/, ""));
    y(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Re = (e) => (t, n = Q) => (!Bt || e === "sp") && Dn(e, (...o) => t(...o), n), ol = Re("bm"), es = Re("m"), rl = Re("bu"), sl = Re("u"), ts = Re("bum"), ns = Re("um"), il = Re("sp"), ll = Re("rtg"), cl = Re("rtc");
function fl(e, t = Q) {
  Dn("ec", e, t);
}
function os(e) {
  Ss(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function Ye(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    s && (c.oldValue = s[i].value);
    let f = c.dir[o];
    f && (ct(), ge(f, n, 8, [
      e.el,
      c,
      e,
      t
    ]), ft());
  }
}
const ul = Symbol(), Qn = (e) => e ? _s(e) ? To(e) || e.proxy : Qn(e.parent) : null, bt = /* @__PURE__ */ J(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? mt(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? mt(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? mt(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? mt(e.refs) : e.refs,
  $parent: (e) => Qn(e.parent),
  $root: (e) => Qn(e.root),
  $emit: (e) => e.emit,
  $options: (e) => xo(e),
  $forceUpdate: (e) => e.f || (e.f = () => wn(e.update)),
  $nextTick: (e) => e.n || (e.n = Sr.bind(e.proxy)),
  $watch: (e) => Ji.bind(e)
}), wo = (e) => e === "_" || e === "$", rs = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: c, appContext: f } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (process.env.NODE_ENV !== "production" && o !== L && o.__isScriptSetup && P(o, t))
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
        if (o !== L && P(o, t))
          return i[t] = 1, o[t];
        if (r !== L && P(r, t))
          return i[t] = 2, r[t];
        if ((a = e.propsOptions[0]) && P(a, t))
          return i[t] = 3, s[t];
        if (n !== L && P(n, t))
          return i[t] = 4, n[t];
        Gn && (i[t] = 0);
      }
    }
    const p = bt[t];
    let d, _;
    if (p)
      return t === "$attrs" && (de(e, "get", t), process.env.NODE_ENV !== "production" && pn()), p(e);
    if ((d = c.__cssModules) && (d = d[t]))
      return d;
    if (n !== L && P(n, t))
      return i[t] = 4, n[t];
    if (_ = f.config.globalProperties, P(_, t))
      return _[t];
    process.env.NODE_ENV !== "production" && me && (!ee(t) || t.indexOf("__v") !== 0) && (r !== L && wo(t[0]) && P(r, t) ? y(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === me && y(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return r !== L && P(r, t) ? (r[t] = n, !0) : o !== L && P(o, t) ? (o[t] = n, !0) : P(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`, e), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`, e), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s } }, i) {
    let c;
    return !!n[i] || e !== L && P(e, i) || t !== L && P(t, i) || (c = s[0]) && P(c, i) || P(o, i) || P(bt, i) || P(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : P(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (rs.ownKeys = (e) => (y("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function al(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(bt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => bt[n](e),
      set: ne
    });
  }), t;
}
function dl(e) {
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
function pl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(A(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (wo(o[0])) {
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
function hl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Gn = !0;
function ml(e) {
  const t = xo(e), n = e.proxy, o = e.ctx;
  Gn = !1, t.beforeCreate && Yo(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: s,
    methods: i,
    watch: c,
    provide: f,
    inject: a,
    created: p,
    beforeMount: d,
    mounted: _,
    beforeUpdate: D,
    updated: F,
    activated: C,
    deactivated: U,
    beforeDestroy: B,
    beforeUnmount: Z,
    destroyed: q,
    unmounted: fe,
    render: W,
    renderTracked: Se,
    renderTriggered: be,
    errorCaptured: M,
    serverPrefetch: K,
    expose: Y,
    inheritAttrs: oe,
    components: te,
    directives: Te,
    filters: Kt
  } = t, je = process.env.NODE_ENV !== "production" ? hl() : null;
  if (process.env.NODE_ENV !== "production") {
    const [S] = e.propsOptions;
    if (S)
      for (const j in S)
        je("Props", j);
  }
  if (a && gl(a, o, je, e.appContext.config.unwrapInjectedRef), i)
    for (const S in i) {
      const j = i[S];
      $(j) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, S, {
        value: j.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[S] = j.bind(n), process.env.NODE_ENV !== "production" && je("Methods", S)) : process.env.NODE_ENV !== "production" && y(`Method "${S}" has type "${typeof j}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !$(r) && y("The data option must be a function. Plain object usage is no longer supported.");
    const S = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && ao(S) && y("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !z(S))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = _o(S), process.env.NODE_ENV !== "production")
      for (const j in S)
        je("Data", j), wo(j[0]) || Object.defineProperty(o, j, {
          configurable: !0,
          enumerable: !0,
          get: () => S[j],
          set: ne
        });
  }
  if (Gn = !0, s)
    for (const S in s) {
      const j = s[S], ye = $(j) ? j.bind(n, n) : $(j.get) ? j.get.bind(n, n) : ne;
      process.env.NODE_ENV !== "production" && ye === ne && y(`Computed property "${S}" has no getter.`);
      const In = !$(j) && $(j.set) ? j.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(`Write operation failed: computed property "${S}" is readonly.`);
      } : ne, wt = tc({
        get: ye,
        set: In
      });
      Object.defineProperty(o, S, {
        enumerable: !0,
        configurable: !0,
        get: () => wt.value,
        set: (ut) => wt.value = ut
      }), process.env.NODE_ENV !== "production" && je("Computed", S);
    }
  if (c)
    for (const S in c)
      ss(c[S], o, n, S);
  if (f) {
    const S = $(f) ? f.call(n) : f;
    Reflect.ownKeys(S).forEach((j) => {
      Yi(j, S[j]);
    });
  }
  p && Yo(p, e, "c");
  function ue(S, j) {
    T(j) ? j.forEach((ye) => S(ye.bind(n))) : j && S(j.bind(n));
  }
  if (ue(ol, d), ue(es, _), ue(rl, D), ue(sl, F), ue(el, C), ue(tl, U), ue(fl, M), ue(cl, Se), ue(ll, be), ue(ts, Z), ue(ns, fe), ue(il, K), T(Y))
    if (Y.length) {
      const S = e.exposed || (e.exposed = {});
      Y.forEach((j) => {
        Object.defineProperty(S, j, {
          get: () => n[j],
          set: (ye) => n[j] = ye
        });
      });
    } else
      e.exposed || (e.exposed = {});
  W && e.render === ne && (e.render = W), oe != null && (e.inheritAttrs = oe), te && (e.components = te), Te && (e.directives = Te);
}
function gl(e, t, n = ne, o = !1) {
  T(e) && (e = eo(e));
  for (const r in e) {
    const s = e[r];
    let i;
    z(s) ? "default" in s ? i = Rn(s.from || r, s.default, !0) : i = Rn(s.from || r) : i = Rn(s), G(i) ? o ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (c) => i.value = c
    }) : (process.env.NODE_ENV !== "production" && y(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[r] = i) : t[r] = i, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Yo(e, t, n) {
  ge(T(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ss(e, t, n, o) {
  const r = o.includes(".") ? Jr(n, o) : () => n[o];
  if (ee(e)) {
    const s = t[e];
    $(s) ? tn(r, s) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, s);
  } else if ($(e))
    tn(r, e.bind(n));
  else if (z(e))
    if (T(e))
      e.forEach((s) => ss(s, t, n, o));
    else {
      const s = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(s) ? tn(r, s, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function xo(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, c = s.get(t);
  let f;
  return c ? f = c : !r.length && !n && !o ? f = t : (f = {}, r.length && r.forEach((a) => hn(f, a, i, !0)), hn(f, t, i)), z(t) && s.set(t, f), f;
}
function hn(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && hn(e, s, n, !0), r && r.forEach((i) => hn(e, i, n, !0));
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && y('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const c = _l[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const _l = {
  data: Jo,
  props: Qe,
  emits: Qe,
  methods: Qe,
  computed: Qe,
  beforeCreate: ie,
  created: ie,
  beforeMount: ie,
  mounted: ie,
  beforeUpdate: ie,
  updated: ie,
  beforeDestroy: ie,
  beforeUnmount: ie,
  destroyed: ie,
  unmounted: ie,
  activated: ie,
  deactivated: ie,
  errorCaptured: ie,
  serverPrefetch: ie,
  components: Qe,
  directives: Qe,
  watch: vl,
  provide: Jo,
  inject: El
};
function Jo(e, t) {
  return t ? e ? function() {
    return J($(e) ? e.call(this, this) : e, $(t) ? t.call(this, this) : t);
  } : t : e;
}
function El(e, t) {
  return Qe(eo(e), eo(t));
}
function eo(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ie(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Qe(e, t) {
  return e ? J(J(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function vl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = J(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ie(e[o], t[o]);
  return n;
}
function Nl(e, t, n, o = !1) {
  const r = {}, s = {};
  fn(s, Cn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), is(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  process.env.NODE_ENV !== "production" && cs(t || {}, r, e), n ? e.props = o ? r : hi(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function bl(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function yl(e, t, n, o) {
  const { props: r, attrs: s, vnode: { patchFlag: i } } = e, c = A(r), [f] = e.propsOptions;
  let a = !1;
  if (!(process.env.NODE_ENV !== "production" && bl(e)) && (o || i > 0) && !(i & 16)) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let d = 0; d < p.length; d++) {
        let _ = p[d];
        if (xn(e.emitsOptions, _))
          continue;
        const D = t[_];
        if (f)
          if (P(s, _))
            D !== s[_] && (s[_] = D, a = !0);
          else {
            const F = We(_);
            r[F] = to(f, c, F, D, e, !1);
          }
        else
          D !== s[_] && (s[_] = D, a = !0);
      }
    }
  } else {
    is(e, t, r, s) && (a = !0);
    let p;
    for (const d in c)
      (!t || !P(t, d) && ((p = Ne(d)) === d || !P(t, p))) && (f ? n && (n[d] !== void 0 || n[p] !== void 0) && (r[d] = to(f, c, d, void 0, e, !0)) : delete r[d]);
    if (s !== c)
      for (const d in s)
        (!t || !P(t, d) && !0) && (delete s[d], a = !0);
  }
  a && Me(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && cs(t || {}, r, e);
}
function is(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let f in t) {
      if (Qt(f))
        continue;
      const a = t[f];
      let p;
      r && P(r, p = We(f)) ? !s || !s.includes(p) ? n[p] = a : (c || (c = {}))[p] = a : xn(e.emitsOptions, f) || (!(f in o) || a !== o[f]) && (o[f] = a, i = !0);
    }
  if (s) {
    const f = A(n), a = c || L;
    for (let p = 0; p < s.length; p++) {
      const d = s[p];
      n[d] = to(r, f, d, a[d], e, !P(a, d));
    }
  }
  return i;
}
function to(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const c = P(i, "default");
    if (c && o === void 0) {
      const f = i.default;
      if (i.type !== Function && $(f)) {
        const { propsDefaults: a } = r;
        n in a ? o = a[n] : (yt(r), o = a[n] = f.call(null, t), it());
      } else
        o = f;
    }
    i[0] && (s && !c ? o = !1 : i[1] && (o === "" || o === Ne(n)) && (o = !0));
  }
  return o;
}
function ls(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, c = [];
  let f = !1;
  if (!$(e)) {
    const p = (d) => {
      f = !0;
      const [_, D] = ls(d, t, !0);
      J(i, _), D && c.push(...D);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!s && !f)
    return z(e) && o.set(e, _t), _t;
  if (T(s))
    for (let p = 0; p < s.length; p++) {
      process.env.NODE_ENV !== "production" && !ee(s[p]) && y("props must be strings when using array syntax.", s[p]);
      const d = We(s[p]);
      Xo(d) && (i[d] = L);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !z(s) && y("invalid props options", s);
    for (const p in s) {
      const d = We(p);
      if (Xo(d)) {
        const _ = s[p], D = i[d] = T(_) || $(_) ? { type: _ } : _;
        if (D) {
          const F = Go(Boolean, D.type), C = Go(String, D.type);
          D[0] = F > -1, D[1] = C < 0 || F < C, (F > -1 || P(D, "default")) && c.push(d);
        }
      }
    }
  }
  const a = [i, c];
  return z(e) && o.set(e, a), a;
}
function Xo(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function no(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function Qo(e, t) {
  return no(e) === no(t);
}
function Go(e, t) {
  return T(t) ? t.findIndex((n) => Qo(n, e)) : $(t) && Qo(t, e) ? 0 : -1;
}
function cs(e, t, n) {
  const o = A(t), r = n.propsOptions[0];
  for (const s in r) {
    let i = r[s];
    i != null && Ol(s, o[s], i, !P(e, s) && !P(e, Ne(s)));
  }
}
function Ol(e, t, n, o) {
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
        const { valid: d, expectedType: _ } = xl(t, f[p]);
        a.push(_ || ""), c = d;
      }
      if (!c) {
        y(Dl(e, t, a));
        return;
      }
    }
    i && !i(t) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const wl = /* @__PURE__ */ Ot("String,Number,Boolean,Function,Symbol,BigInt");
function xl(e, t) {
  let n;
  const o = no(t);
  if (wl(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = z(e) : o === "Array" ? n = T(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Dl(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(En).join(" | ")}`;
  const r = n[0], s = po(t), i = er(t, r), c = er(t, s);
  return n.length === 1 && tr(r) && !Vl(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, tr(s) && (o += `with value ${c}.`), o;
}
function er(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function tr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Vl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const fs = (e) => e[0] === "_" || e === "$stable", Do = (e) => T(e) ? e.map(Ee) : [Ee(e)], Cl = (e, t, n) => {
  if (t._n)
    return t;
  const o = Bi((...r) => (process.env.NODE_ENV !== "production" && Q && y(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), Do(t(...r))), n);
  return o._c = !1, o;
}, us = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (fs(r))
      continue;
    const s = e[r];
    if ($(s))
      t[r] = Cl(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && y(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const i = Do(s);
      t[r] = () => i;
    }
  }
}, as = (e, t) => {
  process.env.NODE_ENV !== "production" && !Ut(e.vnode) && y("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = Do(t);
  e.slots.default = () => n;
}, Tl = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = A(t), fn(t, "_", n)) : us(t, e.slots = {});
  } else
    e.slots = {}, t && as(e, t);
  fn(e.slots, Cn, 1);
}, Il = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = L;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? process.env.NODE_ENV !== "production" && st ? J(r, t) : n && c === 1 ? s = !1 : (J(r, t), !n && c === 1 && delete r._) : (s = !t.$stable, us(t, r)), i = t;
  } else
    t && (as(e, t), i = { default: 1 });
  if (s)
    for (const c in r)
      !fs(c) && !(c in i) && delete r[c];
};
function ds() {
  return {
    app: null,
    config: {
      isNativeTag: mr,
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
let $l = 0;
function Al(e, t) {
  return function(o, r = null) {
    $(o) || (o = Object.assign({}, o)), r != null && !z(r) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), r = null);
    const s = ds(), i = /* @__PURE__ */ new Set();
    let c = !1;
    const f = s.app = {
      _uid: $l++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: sr,
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
        return process.env.NODE_ENV !== "production" && ro(a, s.config), p ? (process.env.NODE_ENV !== "production" && s.components[a] && y(`Component "${a}" has already been registered in target app.`), s.components[a] = p, f) : s.components[a];
      },
      directive(a, p) {
        return process.env.NODE_ENV !== "production" && os(a), p ? (process.env.NODE_ENV !== "production" && s.directives[a] && y(`Directive "${a}" has already been registered in target app.`), s.directives[a] = p, f) : s.directives[a];
      },
      mount(a, p, d) {
        if (c)
          process.env.NODE_ENV !== "production" && y("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && a.__vue_app__ && y("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const _ = Pe(o, r);
          return _.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(Ce(_), a, d);
          }), p && t ? t(_, a) : e(_, a, d), c = !0, f._container = a, a.__vue_app__ = f, process.env.NODE_ENV !== "production" && (f._instance = _.component, Fi(f, sr)), To(_.component) || _.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, f._container), process.env.NODE_ENV !== "production" && (f._instance = null, Pi(f)), delete f._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(a, p) {
        return process.env.NODE_ENV !== "production" && a in s.provides && y(`App already provides property with key "${String(a)}". It will be overwritten with the new value.`), s.provides[a] = p, f;
      }
    };
    return f;
  };
}
function oo(e, t, n, o, r = !1) {
  if (T(e)) {
    e.forEach((_, D) => oo(_, t && (T(t) ? t[D] : t), n, o, r));
    return;
  }
  if (nn(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? To(o.component) || o.component.proxy : o.el, i = r ? null : s, { i: c, r: f } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    y("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const a = t && t.r, p = c.refs === L ? c.refs = {} : c.refs, d = c.setupState;
  if (a != null && a !== f && (ee(a) ? (p[a] = null, P(d, a) && (d[a] = null)) : G(a) && (a.value = null)), $(f))
    Fe(f, c, 12, [i, p]);
  else {
    const _ = ee(f), D = G(f);
    if (_ || D) {
      const F = () => {
        if (e.f) {
          const C = _ ? p[f] : f.value;
          r ? T(C) && fo(C, s) : T(C) ? C.includes(s) || C.push(s) : _ ? (p[f] = [s], P(d, f) && (d[f] = p[f])) : (f.value = [s], e.k && (p[e.k] = f.value));
        } else
          _ ? (p[f] = i, P(d, f) && (d[f] = i)) : D ? (f.value = i, e.k && (p[e.k] = i)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
      };
      i ? (F.id = -1, ae(F, n)) : F();
    } else
      process.env.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let Vt, ke;
function $e(e, t) {
  e.appContext.config.performance && mn() && ke.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Si(e, t, mn() ? ke.now() : Date.now());
}
function Ae(e, t) {
  if (e.appContext.config.performance && mn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    ke.mark(o), ke.measure(`<${Tn(e, e.type)}> ${t}`, n, o), ke.clearMarks(n), ke.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && ji(e, t, mn() ? ke.now() : Date.now());
}
function mn() {
  return Vt !== void 0 || (typeof window < "u" && window.performance ? (Vt = !0, ke = window.performance) : Vt = !1), Vt;
}
function Fl() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const ae = qi;
function Pl(e) {
  return Ml(e);
}
function Ml(e, t) {
  Fl();
  const n = gr();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && kr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: r, patchProp: s, createElement: i, createText: c, createComment: f, setText: a, setElementText: p, parentNode: d, nextSibling: _, setScopeId: D = ne, insertStaticContent: F } = e, C = (l, u, h, g = null, m = null, N = null, O = !1, v = null, b = process.env.NODE_ENV !== "production" && st ? !1 : !!u.dynamicChildren) => {
    if (l === u)
      return;
    l && !et(l, u) && (g = Wt(l), Ze(l, m, N, !0), l = null), u.patchFlag === -2 && (b = !1, u.dynamicChildren = null);
    const { type: E, ref: x, shapeFlag: w } = u;
    switch (E) {
      case Vn:
        U(l, u, h, g);
        break;
      case ce:
        B(l, u, h, g);
        break;
      case $t:
        l == null ? Z(u, h, g, O) : process.env.NODE_ENV !== "production" && q(l, u, h, O);
        break;
      case he:
        Te(l, u, h, g, m, N, O, v, b);
        break;
      default:
        w & 1 ? Se(l, u, h, g, m, N, O, v, b) : w & 6 ? Kt(l, u, h, g, m, N, O, v, b) : w & 64 || w & 128 ? E.process(l, u, h, g, m, N, O, v, b, at) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", E, `(${typeof E})`);
    }
    x != null && m && oo(x, l && l.ref, N, u || l, !u);
  }, U = (l, u, h, g) => {
    if (l == null)
      o(u.el = c(u.children), h, g);
    else {
      const m = u.el = l.el;
      u.children !== l.children && a(m, u.children);
    }
  }, B = (l, u, h, g) => {
    l == null ? o(u.el = f(u.children || ""), h, g) : u.el = l.el;
  }, Z = (l, u, h, g) => {
    [l.el, l.anchor] = F(l.children, u, h, g, l.el, l.anchor);
  }, q = (l, u, h, g) => {
    if (u.children !== l.children) {
      const m = _(l.anchor);
      W(l), [u.el, u.anchor] = F(u.children, h, m, g);
    } else
      u.el = l.el, u.anchor = l.anchor;
  }, fe = ({ el: l, anchor: u }, h, g) => {
    let m;
    for (; l && l !== u; )
      m = _(l), o(l, h, g), l = m;
    o(u, h, g);
  }, W = ({ el: l, anchor: u }) => {
    let h;
    for (; l && l !== u; )
      h = _(l), r(l), l = h;
    r(u);
  }, Se = (l, u, h, g, m, N, O, v, b) => {
    O = O || u.type === "svg", l == null ? be(u, h, g, m, N, O, v, b) : Y(l, u, m, N, O, v, b);
  }, be = (l, u, h, g, m, N, O, v) => {
    let b, E;
    const { type: x, props: w, shapeFlag: V, transition: I, dirs: R } = l;
    if (b = l.el = i(l.type, N, w && w.is, w), V & 8 ? p(b, l.children) : V & 16 && K(l.children, b, null, g, m, N && x !== "foreignObject", O, v), R && Ye(l, null, g, "created"), w) {
      for (const H in w)
        H !== "value" && !Qt(H) && s(b, H, null, w[H], N, l.children, g, m, Ie);
      "value" in w && s(b, "value", null, w.value), (E = w.onVnodeBeforeMount) && we(E, g, l);
    }
    M(b, l, l.scopeId, O, g), process.env.NODE_ENV !== "production" && (Object.defineProperty(b, "__vnode", {
      value: l,
      enumerable: !1
    }), Object.defineProperty(b, "__vueParentComponent", {
      value: g,
      enumerable: !1
    })), R && Ye(l, null, g, "beforeMount");
    const k = (!m || m && !m.pendingBranch) && I && !I.persisted;
    k && I.beforeEnter(b), o(b, u, h), ((E = w && w.onVnodeMounted) || k || R) && ae(() => {
      E && we(E, g, l), k && I.enter(b), R && Ye(l, null, g, "mounted");
    }, m);
  }, M = (l, u, h, g, m) => {
    if (h && D(l, h), g)
      for (let N = 0; N < g.length; N++)
        D(l, g[N]);
    if (m) {
      let N = m.subTree;
      if (process.env.NODE_ENV !== "production" && N.patchFlag > 0 && N.patchFlag & 2048 && (N = qr(N.children) || N), u === N) {
        const O = m.vnode;
        M(l, O, O.scopeId, O.slotScopeIds, m.parent);
      }
    }
  }, K = (l, u, h, g, m, N, O, v, b = 0) => {
    for (let E = b; E < l.length; E++) {
      const x = l[E] = v ? He(l[E]) : Ee(l[E]);
      C(null, x, u, h, g, m, N, O, v);
    }
  }, Y = (l, u, h, g, m, N, O) => {
    const v = u.el = l.el;
    let { patchFlag: b, dynamicChildren: E, dirs: x } = u;
    b |= l.patchFlag & 16;
    const w = l.props || L, V = u.props || L;
    let I;
    h && Je(h, !1), (I = V.onVnodeBeforeUpdate) && we(I, h, u, l), x && Ye(u, l, h, "beforeUpdate"), h && Je(h, !0), process.env.NODE_ENV !== "production" && st && (b = 0, O = !1, E = null);
    const R = m && u.type !== "foreignObject";
    if (E ? (oe(l.dynamicChildren, E, v, h, g, R, N), process.env.NODE_ENV !== "production" && h && h.type.__hmrId && on(l, u)) : O || ye(l, u, v, null, h, g, R, N, !1), b > 0) {
      if (b & 16)
        te(v, u, w, V, h, g, m);
      else if (b & 2 && w.class !== V.class && s(v, "class", null, V.class, m), b & 4 && s(v, "style", w.style, V.style, m), b & 8) {
        const k = u.dynamicProps;
        for (let H = 0; H < k.length; H++) {
          const X = k[H], _e = w[X], dt = V[X];
          (dt !== _e || X === "value") && s(v, X, _e, dt, m, l.children, h, g, Ie);
        }
      }
      b & 1 && l.children !== u.children && p(v, u.children);
    } else
      !O && E == null && te(v, u, w, V, h, g, m);
    ((I = V.onVnodeUpdated) || x) && ae(() => {
      I && we(I, h, u, l), x && Ye(u, l, h, "updated");
    }, g);
  }, oe = (l, u, h, g, m, N, O) => {
    for (let v = 0; v < u.length; v++) {
      const b = l[v], E = u[v], x = b.el && (b.type === he || !et(b, E) || b.shapeFlag & 70) ? d(b.el) : h;
      C(b, E, x, null, g, m, N, O, !0);
    }
  }, te = (l, u, h, g, m, N, O) => {
    if (h !== g) {
      if (h !== L)
        for (const v in h)
          !Qt(v) && !(v in g) && s(l, v, h[v], null, O, u.children, m, N, Ie);
      for (const v in g) {
        if (Qt(v))
          continue;
        const b = g[v], E = h[v];
        b !== E && v !== "value" && s(l, v, E, b, O, u.children, m, N, Ie);
      }
      "value" in g && s(l, "value", h.value, g.value);
    }
  }, Te = (l, u, h, g, m, N, O, v, b) => {
    const E = u.el = l ? l.el : c(""), x = u.anchor = l ? l.anchor : c("");
    let { patchFlag: w, dynamicChildren: V, slotScopeIds: I } = u;
    process.env.NODE_ENV !== "production" && (st || w & 2048) && (w = 0, b = !1, V = null), I && (v = v ? v.concat(I) : I), l == null ? (o(E, h, g), o(x, h, g), K(u.children, h, x, m, N, O, v, b)) : w > 0 && w & 64 && V && l.dynamicChildren ? (oe(l.dynamicChildren, V, h, m, N, O, v), process.env.NODE_ENV !== "production" && m && m.type.__hmrId ? on(l, u) : (u.key != null || m && u === m.subTree) && on(l, u, !0)) : ye(l, u, h, x, m, N, O, v, b);
  }, Kt = (l, u, h, g, m, N, O, v, b) => {
    u.slotScopeIds = v, l == null ? u.shapeFlag & 512 ? m.ctx.activate(u, h, g, O, b) : je(u, h, g, m, N, O, b) : ue(l, u, b);
  }, je = (l, u, h, g, m, N, O) => {
    const v = l.component = Wl(l, g, m);
    if (process.env.NODE_ENV !== "production" && v.type.__hmrId && Ti(v), process.env.NODE_ENV !== "production" && (Gt(l), $e(v, "mount")), Ut(l) && (v.ctx.renderer = at), process.env.NODE_ENV !== "production" && $e(v, "init"), Yl(v), process.env.NODE_ENV !== "production" && Ae(v, "init"), v.asyncDep) {
      if (m && m.registerDep(v, S), !l.el) {
        const b = v.subTree = Pe(ce);
        B(null, b, u, h);
      }
      return;
    }
    S(v, l, u, h, m, N, O), process.env.NODE_ENV !== "production" && (en(), Ae(v, "mount"));
  }, ue = (l, u, h) => {
    const g = u.component = l.component;
    if (Ki(l, u, h))
      if (g.asyncDep && !g.asyncResolved) {
        process.env.NODE_ENV !== "production" && Gt(u), j(g, u, h), process.env.NODE_ENV !== "production" && en();
        return;
      } else
        g.next = u, Vi(g.update), g.update();
    else
      u.el = l.el, g.vnode = u;
  }, S = (l, u, h, g, m, N, O) => {
    const v = () => {
      if (l.isMounted) {
        let { next: x, bu: w, u: V, parent: I, vnode: R } = l, k = x, H;
        process.env.NODE_ENV !== "production" && Gt(x || l.vnode), Je(l, !1), x ? (x.el = R.el, j(l, x, O)) : x = R, w && Dt(w), (H = x.props && x.props.onVnodeBeforeUpdate) && we(H, I, x, R), Je(l, !0), process.env.NODE_ENV !== "production" && $e(l, "render");
        const X = Mn(l);
        process.env.NODE_ENV !== "production" && Ae(l, "render");
        const _e = l.subTree;
        l.subTree = X, process.env.NODE_ENV !== "production" && $e(l, "patch"), C(
          _e,
          X,
          d(_e.el),
          Wt(_e),
          l,
          m,
          N
        ), process.env.NODE_ENV !== "production" && Ae(l, "patch"), x.el = X.el, k === null && Wi(l, X.el), V && ae(V, m), (H = x.props && x.props.onVnodeUpdated) && ae(() => we(H, I, x, R), m), process.env.NODE_ENV !== "production" && Ur(l), process.env.NODE_ENV !== "production" && en();
      } else {
        let x;
        const { el: w, props: V } = u, { bm: I, m: R, parent: k } = l, H = nn(u);
        if (Je(l, !1), I && Dt(I), !H && (x = V && V.onVnodeBeforeMount) && we(x, k, u), Je(l, !0), w && Fn) {
          const X = () => {
            process.env.NODE_ENV !== "production" && $e(l, "render"), l.subTree = Mn(l), process.env.NODE_ENV !== "production" && Ae(l, "render"), process.env.NODE_ENV !== "production" && $e(l, "hydrate"), Fn(w, l.subTree, l, m, null), process.env.NODE_ENV !== "production" && Ae(l, "hydrate");
          };
          H ? u.type.__asyncLoader().then(
            () => !l.isUnmounted && X()
          ) : X();
        } else {
          process.env.NODE_ENV !== "production" && $e(l, "render");
          const X = l.subTree = Mn(l);
          process.env.NODE_ENV !== "production" && Ae(l, "render"), process.env.NODE_ENV !== "production" && $e(l, "patch"), C(null, X, h, g, l, m, N), process.env.NODE_ENV !== "production" && Ae(l, "patch"), u.el = X.el;
        }
        if (R && ae(R, m), !H && (x = V && V.onVnodeMounted)) {
          const X = u;
          ae(() => we(x, k, X), m);
        }
        (u.shapeFlag & 256 || k && nn(k.vnode) && k.vnode.shapeFlag & 256) && l.a && ae(l.a, m), l.isMounted = !0, process.env.NODE_ENV !== "production" && Mi(l), u = h = g = null;
      }
    }, b = l.effect = new mo(
      v,
      () => wn(E),
      l.scope
    ), E = l.update = () => b.run();
    E.id = l.uid, Je(l, !0), process.env.NODE_ENV !== "production" && (b.onTrack = l.rtc ? (x) => Dt(l.rtc, x) : void 0, b.onTrigger = l.rtg ? (x) => Dt(l.rtg, x) : void 0, E.ownerInstance = l), E();
  }, j = (l, u, h) => {
    u.component = l;
    const g = l.vnode.props;
    l.vnode = u, l.next = null, yl(l, u.props, g, h), Il(l, u.children, h), ct(), ko(), ft();
  }, ye = (l, u, h, g, m, N, O, v, b = !1) => {
    const E = l && l.children, x = l ? l.shapeFlag : 0, w = u.children, { patchFlag: V, shapeFlag: I } = u;
    if (V > 0) {
      if (V & 128) {
        wt(E, w, h, g, m, N, O, v, b);
        return;
      } else if (V & 256) {
        In(E, w, h, g, m, N, O, v, b);
        return;
      }
    }
    I & 8 ? (x & 16 && Ie(E, m, N), w !== E && p(h, w)) : x & 16 ? I & 16 ? wt(E, w, h, g, m, N, O, v, b) : Ie(E, m, N, !0) : (x & 8 && p(h, ""), I & 16 && K(w, h, g, m, N, O, v, b));
  }, In = (l, u, h, g, m, N, O, v, b) => {
    l = l || _t, u = u || _t;
    const E = l.length, x = u.length, w = Math.min(E, x);
    let V;
    for (V = 0; V < w; V++) {
      const I = u[V] = b ? He(u[V]) : Ee(u[V]);
      C(l[V], I, h, null, m, N, O, v, b);
    }
    E > x ? Ie(l, m, N, !0, !1, w) : K(u, h, g, m, N, O, v, b, w);
  }, wt = (l, u, h, g, m, N, O, v, b) => {
    let E = 0;
    const x = u.length;
    let w = l.length - 1, V = x - 1;
    for (; E <= w && E <= V; ) {
      const I = l[E], R = u[E] = b ? He(u[E]) : Ee(u[E]);
      if (et(I, R))
        C(I, R, h, null, m, N, O, v, b);
      else
        break;
      E++;
    }
    for (; E <= w && E <= V; ) {
      const I = l[w], R = u[V] = b ? He(u[V]) : Ee(u[V]);
      if (et(I, R))
        C(I, R, h, null, m, N, O, v, b);
      else
        break;
      w--, V--;
    }
    if (E > w) {
      if (E <= V) {
        const I = V + 1, R = I < x ? u[I].el : g;
        for (; E <= V; )
          C(null, u[E] = b ? He(u[E]) : Ee(u[E]), h, R, m, N, O, v, b), E++;
      }
    } else if (E > V)
      for (; E <= w; )
        Ze(l[E], m, N, !0), E++;
    else {
      const I = E, R = E, k = /* @__PURE__ */ new Map();
      for (E = R; E <= V; E++) {
        const se = u[E] = b ? He(u[E]) : Ee(u[E]);
        se.key != null && (process.env.NODE_ENV !== "production" && k.has(se.key) && y("Duplicate keys found during update:", JSON.stringify(se.key), "Make sure keys are unique."), k.set(se.key, E));
      }
      let H, X = 0;
      const _e = V - R + 1;
      let dt = !1, Ao = 0;
      const xt = new Array(_e);
      for (E = 0; E < _e; E++)
        xt[E] = 0;
      for (E = I; E <= w; E++) {
        const se = l[E];
        if (X >= _e) {
          Ze(se, m, N, !0);
          continue;
        }
        let Oe;
        if (se.key != null)
          Oe = k.get(se.key);
        else
          for (H = R; H <= V; H++)
            if (xt[H - R] === 0 && et(se, u[H])) {
              Oe = H;
              break;
            }
        Oe === void 0 ? Ze(se, m, N, !0) : (xt[Oe - R] = E + 1, Oe >= Ao ? Ao = Oe : dt = !0, C(se, u[Oe], h, null, m, N, O, v, b), X++);
      }
      const Fo = dt ? Rl(xt) : _t;
      for (H = Fo.length - 1, E = _e - 1; E >= 0; E--) {
        const se = R + E, Oe = u[se], Po = se + 1 < x ? u[se + 1].el : g;
        xt[E] === 0 ? C(null, Oe, h, Po, m, N, O, v, b) : dt && (H < 0 || E !== Fo[H] ? ut(Oe, h, Po, 2) : H--);
      }
    }
  }, ut = (l, u, h, g, m = null) => {
    const { el: N, type: O, transition: v, children: b, shapeFlag: E } = l;
    if (E & 6) {
      ut(l.component.subTree, u, h, g);
      return;
    }
    if (E & 128) {
      l.suspense.move(u, h, g);
      return;
    }
    if (E & 64) {
      O.move(l, u, h, at);
      return;
    }
    if (O === he) {
      o(N, u, h);
      for (let w = 0; w < b.length; w++)
        ut(b[w], u, h, g);
      o(l.anchor, u, h);
      return;
    }
    if (O === $t) {
      fe(l, u, h);
      return;
    }
    if (g !== 2 && E & 1 && v)
      if (g === 0)
        v.beforeEnter(N), o(N, u, h), ae(() => v.enter(N), m);
      else {
        const { leave: w, delayLeave: V, afterLeave: I } = v, R = () => o(N, u, h), k = () => {
          w(N, () => {
            R(), I && I();
          });
        };
        V ? V(N, R, k) : k();
      }
    else
      o(N, u, h);
  }, Ze = (l, u, h, g = !1, m = !1) => {
    const { type: N, props: O, ref: v, children: b, dynamicChildren: E, shapeFlag: x, patchFlag: w, dirs: V } = l;
    if (v != null && oo(v, null, h, l, !0), x & 256) {
      u.ctx.deactivate(l);
      return;
    }
    const I = x & 1 && V, R = !nn(l);
    let k;
    if (R && (k = O && O.onVnodeBeforeUnmount) && we(k, u, l), x & 6)
      Ds(l.component, h, g);
    else {
      if (x & 128) {
        l.suspense.unmount(h, g);
        return;
      }
      I && Ye(l, null, u, "beforeUnmount"), x & 64 ? l.type.remove(l, u, h, m, at, g) : E && (N !== he || w > 0 && w & 64) ? Ie(E, u, h, !1, !0) : (N === he && w & 384 || !m && x & 16) && Ie(b, u, h), g && $n(l);
    }
    (R && (k = O && O.onVnodeUnmounted) || I) && ae(() => {
      k && we(k, u, l), I && Ye(l, null, u, "unmounted");
    }, h);
  }, $n = (l) => {
    const { type: u, el: h, anchor: g, transition: m } = l;
    if (u === he) {
      process.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && m && !m.persisted ? l.children.forEach((O) => {
        O.type === ce ? r(O.el) : $n(O);
      }) : xs(h, g);
      return;
    }
    if (u === $t) {
      W(l);
      return;
    }
    const N = () => {
      r(h), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (l.shapeFlag & 1 && m && !m.persisted) {
      const { leave: O, delayLeave: v } = m, b = () => O(h, N);
      v ? v(l.el, N, b) : b();
    } else
      N();
  }, xs = (l, u) => {
    let h;
    for (; l !== u; )
      h = _(l), r(l), l = h;
    r(u);
  }, Ds = (l, u, h) => {
    process.env.NODE_ENV !== "production" && l.type.__hmrId && Ii(l);
    const { bum: g, scope: m, update: N, subTree: O, um: v } = l;
    g && Dt(g), m.stop(), N && (N.active = !1, Ze(O, l, u, h)), v && ae(v, u), ae(() => {
      l.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), process.env.NODE_ENV !== "production" && Ri(l);
  }, Ie = (l, u, h, g = !1, m = !1, N = 0) => {
    for (let O = N; O < l.length; O++)
      Ze(l[O], u, h, g, m);
  }, Wt = (l) => l.shapeFlag & 6 ? Wt(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : _(l.anchor || l.el), $o = (l, u, h) => {
    l == null ? u._vnode && Ze(u._vnode, null, null, !0) : C(u._vnode || null, l, u, null, null, null, h), ko(), Lr(), u._vnode = l;
  }, at = {
    p: C,
    um: Ze,
    m: ut,
    r: $n,
    mt: je,
    mc: K,
    pc: ye,
    pbc: oe,
    n: Wt,
    o: e
  };
  let An, Fn;
  return t && ([An, Fn] = t(at)), {
    render: $o,
    hydrate: An,
    createApp: Al($o, An)
  };
}
function Je({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function on(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (T(o) && T(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let c = r[s];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[s] = He(r[s]), c.el = i.el), n || on(i, c)), process.env.NODE_ENV !== "production" && c.type === ce && !c.el && (c.el = i.el);
    }
}
function Rl(e) {
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
const Sl = (e) => e.__isTeleport, he = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), Vn = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), ce = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), $t = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), At = [];
let ve = null;
function rn(e = !1) {
  At.push(ve = e ? null : []);
}
function jl() {
  At.pop(), ve = At[At.length - 1] || null;
}
let Lt = 1;
function nr(e) {
  Lt += e;
}
function Zl(e) {
  return e.dynamicChildren = Lt > 0 ? ve || _t : null, jl(), Lt > 0 && ve && ve.push(e), e;
}
function sn(e, t, n, o, r, s) {
  return Zl(Ke(e, t, n, o, r, s, !0));
}
function Vo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function et(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && pt.has(t.type) ? !1 : e.type === t.type && e.key === t.key;
}
const Ll = (...e) => hs(...e), Cn = "__vInternal", ps = ({ key: e }) => e != null ? e : null, ln = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ee(e) || G(e) || $(e) ? { i: me, r: e, k: t, f: !!n } : e : null;
function Ke(e, t = null, n = null, o = 0, r = null, s = e === he ? 0 : 1, i = !1, c = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ps(t),
    ref: t && ln(t),
    scopeId: zr,
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
  return c ? (Co(f, n), s & 128 && e.normalize(f)) : n && (f.shapeFlag |= ee(n) ? 8 : 16), process.env.NODE_ENV !== "production" && f.key !== f.key && y("VNode created with invalid key (NaN). VNode type:", f.type), Lt > 0 && !i && ve && (f.patchFlag > 0 || s & 6) && f.patchFlag !== 32 && ve.push(f), f;
}
const Pe = process.env.NODE_ENV !== "production" ? Ll : hs;
function hs(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === ul) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = ce), Vo(e)) {
    const c = Ce(e, t, !0);
    return n && Co(c, n), Lt > 0 && !s && ve && (c.shapeFlag & 6 ? ve[ve.indexOf(e)] = c : ve.push(c)), c.patchFlag |= -2, c;
  }
  if (Ns(e) && (e = e.__vccOpts), t) {
    t = Bl(t);
    let { class: c, style: f } = t;
    c && !ee(c) && (t.class = Ft(c)), z(f) && (Wn(f) && !T(f) && (f = J({}, f)), t.style = co(f));
  }
  const i = ee(e) ? 1 : zi(e) ? 128 : Sl(e) ? 64 : z(e) ? 4 : $(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Wn(e) && (e = A(e), y("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), Ke(e, t, n, o, r, i, s, !0);
}
function Bl(e) {
  return e ? Wn(e) || Cn in e ? J({}, e) : e : null;
}
function Ce(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, c = t ? kl(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && ps(c),
    ref: t && t.ref ? n && r ? T(r) ? r.concat(ln(t)) : [r, ln(t)] : ln(t) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && T(i) ? i.map(ms) : i,
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
    ssContent: e.ssContent && Ce(e.ssContent),
    ssFallback: e.ssFallback && Ce(e.ssFallback),
    el: e.el,
    anchor: e.anchor
  };
}
function ms(e) {
  const t = Ce(e);
  return T(e.children) && (t.children = e.children.map(ms)), t;
}
function Hl(e = " ", t = 0) {
  return Pe(Vn, null, e, t);
}
function gs(e, t) {
  const n = Pe($t, null, e);
  return n.staticCount = t, n;
}
function Ee(e) {
  return e == null || typeof e == "boolean" ? Pe(ce) : T(e) ? Pe(
    he,
    null,
    e.slice()
  ) : typeof e == "object" ? He(e) : Pe(Vn, null, String(e));
}
function He(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ce(e);
}
function Co(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (T(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Co(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Cn in t) ? t._ctx = me : r === 3 && me && (me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    $(t) ? (t = { default: t, _ctx: me }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Hl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function kl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = Ft([t.class, o.class]));
      else if (r === "style")
        t.style = co([t.style, o.style]);
      else if (Ht(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(T(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function we(e, t, n, o = null) {
  ge(e, t, 7, [
    n,
    o
  ]);
}
const Ul = ds();
let Kl = 0;
function Wl(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Ul, s = {
    uid: Kl++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Ls(!0),
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
    propsOptions: ls(o, r),
    emitsOptions: Wr(o, r),
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
  return process.env.NODE_ENV !== "production" ? s.ctx = al(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Li.bind(null, s), e.ce && e.ce(s), s;
}
let Q = null;
const zl = () => Q || me, yt = (e) => {
  Q = e, e.scope.on();
}, it = () => {
  Q && Q.scope.off(), Q = null;
}, ql = /* @__PURE__ */ Ot("slot,component");
function ro(e, t) {
  const n = t.isNativeTag || mr;
  (ql(e) || n(e)) && y("Do not use built-in or reserved HTML elements as component id: " + e);
}
function _s(e) {
  return e.vnode.shapeFlag & 4;
}
let Bt = !1;
function Yl(e, t = !1) {
  Bt = t;
  const { props: n, children: o } = e.vnode, r = _s(e);
  Nl(e, n, r, t), Tl(e, o);
  const s = r ? Jl(e, t) : void 0;
  return Bt = !1, s;
}
function Jl(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && ro(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        ro(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        os(s[i]);
    }
    o.compilerOptions && Xl() && y('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Ir(new Proxy(e.ctx, rs)), process.env.NODE_ENV !== "production" && dl(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? Ql(e) : null;
    yt(e), ct();
    const i = Fe(r, e, 0, [process.env.NODE_ENV !== "production" ? mt(e.props) : e.props, s]);
    if (ft(), it(), ao(i)) {
      if (i.then(it, it), t)
        return i.then((c) => {
          or(e, c, t);
        }).catch((c) => {
          On(c, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        y(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      or(e, i, t);
  } else
    Es(e, t);
}
function or(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : z(t) ? (process.env.NODE_ENV !== "production" && Vo(t) && y("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Fr(t), process.env.NODE_ENV !== "production" && pl(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), Es(e, n);
}
let so;
const Xl = () => !so;
function Es(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && so && !o.render) {
      const r = o.template || xo(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && $e(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: f } = o, a = J(J({
          isCustomElement: s,
          delimiters: c
        }, i), f);
        o.render = so(r, a), process.env.NODE_ENV !== "production" && Ae(e, "compile");
      }
    }
    e.render = o.render || ne;
  }
  yt(e), ct(), ml(e), ft(), it(), process.env.NODE_ENV !== "production" && !o.render && e.render === ne && !t && (o.template ? y('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : y("Component is missing template or render function."));
}
function rr(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return pn(), de(e, "get", "$attrs"), t[n];
    },
    set() {
      return y("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return y("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return de(e, "get", "$attrs"), t[n];
    }
  });
}
function Ql(e) {
  const t = (o) => {
    process.env.NODE_ENV !== "production" && e.exposed && y("expose() should be called only once per setup()."), e.exposed = o || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = rr(e));
    },
    get slots() {
      return mt(e.slots);
    },
    get emit() {
      return (o, ...r) => e.emit(o, ...r);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = rr(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function To(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Fr(Ir(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in bt)
          return bt[n](e);
      }
    }));
}
const Gl = /(?:^|[-_])(\w)/g, ec = (e) => e.replace(Gl, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function vs(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Tn(e, t, n = !1) {
  let o = vs(t);
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
  return o ? ec(o) : n ? "App" : "Anonymous";
}
function Ns(e) {
  return $(e) && "__vccOpts" in e;
}
const tc = (e, t) => vi(e, t, Bt);
Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : "");
function jn(e) {
  return !!(e && e.__v_isShallow);
}
function nc() {
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
      ] : ot(d) ? [
        "div",
        {},
        ["span", e, jn(d) ? "ShallowReactive" : "Reactive"],
        "<",
        c(d),
        `>${qe(d) ? " (readonly)" : ""}`
      ] : qe(d) ? [
        "div",
        {},
        ["span", e, jn(d) ? "ShallowReadonly" : "Readonly"],
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
    const _ = [];
    d.type.props && d.props && _.push(i("props", A(d.props))), d.setupState !== L && _.push(i("setup", d.setupState)), d.data !== L && _.push(i("data", A(d.data)));
    const D = f(d, "computed");
    D && _.push(i("computed", D));
    const F = f(d, "inject");
    return F && _.push(i("injected", F)), _.push([
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
    ]), _;
  }
  function i(d, _) {
    return _ = J({}, _), Object.keys(_).length ? [
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
        ...Object.keys(_).map((D) => [
          "div",
          {},
          ["span", o, D + ": "],
          c(_[D], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(d, _ = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", o, d] : z(d) ? ["object", { object: _ ? A(d) : d }] : ["span", n, String(d)];
  }
  function f(d, _) {
    const D = d.type;
    if ($(D))
      return;
    const F = {};
    for (const C in d.ctx)
      a(D, C, _) && (F[C] = d.ctx[C]);
    return F;
  }
  function a(d, _, D) {
    const F = d[D];
    if (T(F) && F.includes(_) || z(F) && _ in F || d.extends && a(d.extends, _, D) || d.mixins && d.mixins.some((C) => a(C, _, D)))
      return !0;
  }
  function p(d) {
    return jn(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const sr = "3.2.40", oc = "http://www.w3.org/2000/svg", tt = typeof document < "u" ? document : null, ir = tt && /* @__PURE__ */ tt.createElement("template"), rc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? tt.createElementNS(oc, e) : tt.createElement(e, n ? { is: n } : void 0);
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
      ir.innerHTML = o ? `<svg>${e}</svg>` : e;
      const c = ir.content;
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
function sc(e, t, n) {
  const o = e._vtc;
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function ic(e, t, n) {
  const o = e.style, r = ee(n);
  if (n && !r) {
    for (const s in n)
      io(o, s, n[s]);
    if (t && !ee(t))
      for (const s in t)
        n[s] == null && io(o, s, "");
  } else {
    const s = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = s);
  }
}
const lr = /\s*!important$/;
function io(e, t, n) {
  if (T(n))
    n.forEach((o) => io(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = lc(e, t);
    lr.test(n) ? e.setProperty(Ne(o), n.replace(lr, ""), "important") : e[o] = n;
  }
}
const cr = ["Webkit", "Moz", "ms"], Zn = {};
function lc(e, t) {
  const n = Zn[t];
  if (n)
    return n;
  let o = We(t);
  if (o !== "filter" && o in e)
    return Zn[t] = o;
  o = En(o);
  for (let r = 0; r < cr.length; r++) {
    const s = cr[r] + o;
    if (s in e)
      return Zn[t] = s;
  }
  return t;
}
const fr = "http://www.w3.org/1999/xlink";
function cc(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(fr, t.slice(6, t.length)) : e.setAttributeNS(fr, t, n);
  else {
    const s = Cs(t);
    n == null || s && !hr(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function fc(e, t, n, o, r, s, i) {
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
    f === "boolean" ? n = hr(n) : n == null && f === "string" ? (n = "", c = !0) : f === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch (f) {
    process.env.NODE_ENV !== "production" && !c && y(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, f);
  }
  c && e.removeAttribute(t);
}
const [bs, uc] = /* @__PURE__ */ (() => {
  let e = Date.now, t = !1;
  if (typeof window < "u") {
    Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let lo = 0;
const ac = /* @__PURE__ */ Promise.resolve(), dc = () => {
  lo = 0;
}, pc = () => lo || (ac.then(dc), lo = bs());
function hc(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function mc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
function gc(e, t, n, o, r = null) {
  const s = e._vei || (e._vei = {}), i = s[t];
  if (o && i)
    i.value = o;
  else {
    const [c, f] = _c(t);
    if (o) {
      const a = s[t] = Ec(o, r);
      hc(e, c, a, f);
    } else
      i && (mc(e, c, i, f), s[t] = void 0);
  }
}
const ur = /(?:Once|Passive|Capture)$/;
function _c(e) {
  let t;
  if (ur.test(e)) {
    t = {};
    let o;
    for (; o = e.match(ur); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ne(e.slice(2)), t];
}
function Ec(e, t) {
  const n = (o) => {
    const r = o.timeStamp || bs();
    (uc || r >= n.attached - 1) && ge(vc(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = pc(), n;
}
function vc(e, t) {
  if (T(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const ar = /^on[a-z]/, Nc = (e, t, n, o, r = !1, s, i, c, f) => {
  t === "class" ? sc(e, o, r) : t === "style" ? ic(e, n, o) : Ht(t) ? cn(t) || gc(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : bc(e, t, o, r)) ? fc(e, t, o, s, i, c, f) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), cc(e, t, o, r));
};
function bc(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && ar.test(t) && $(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || ar.test(t) && ee(n) ? !1 : t in e;
}
function ys(e, t) {
  const n = Oo(e);
  class o extends Io {
    constructor(s) {
      super(n, s, t);
    }
  }
  return o.def = n, o;
}
const yc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Io extends yc {
  constructor(t, n = {}, o) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && o ? o(this._createVNode(), this.shadowRoot) : (process.env.NODE_ENV !== "production" && this.shadowRoot && y("Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."), this.attachShadow({ mode: "open" }));
  }
  connectedCallback() {
    this._connected = !0, this._instance || this._resolveDef();
  }
  disconnectedCallback() {
    this._connected = !1, Sr(() => {
      this._connected || (pr(null, this.shadowRoot), this._instance = null);
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
          (p === Number || p && p.type === Number) && (this._props[a] = Ln(this._props[a]), (f || (f = /* @__PURE__ */ Object.create(null)))[a] = !0);
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
    this._numberProps && this._numberProps[t] && (n = Ln(n)), this._setProp(We(t), n, !1);
  }
  _getProp(t) {
    return this._props[t];
  }
  _setProp(t, n, o = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), o && (n === !0 ? this.setAttribute(Ne(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Ne(t), n + "") : n || this.removeAttribute(Ne(t))));
  }
  _update() {
    pr(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Pe(this._def, J({}, this._props));
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
        if (o instanceof Io) {
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
const Oc = {
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
Gi.props;
const wc = ["ctrl", "shift", "alt", "meta"], xc = {
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
  exact: (e, t) => wc.some((n) => e[`${n}Key`] && !t.includes(n))
}, Nt = (e, t) => (n, ...o) => {
  for (let r = 0; r < t.length; r++) {
    const s = xc[t[r]];
    if (s && s(n, t))
      return;
  }
  return e(n, ...o);
}, Dc = /* @__PURE__ */ J({ patchProp: Nc }, rc);
let dr;
function Vc() {
  return dr || (dr = Pl(Dc));
}
const pr = (...e) => {
  Vc().render(...e);
};
function Cc() {
  nc();
}
process.env.NODE_ENV !== "production" && Cc();
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
var Os = function(e) {
  e === void 0 && (e = 0);
  var t = "", n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", o = String(Math.abs(new Date().valueOf()));
  Number(e) >= 1 && (t += String(Number(e) + 1));
  for (var r = 0; r < o.length; r++)
    t += n.charAt(Math.floor(Math.random() * n.length)), t += o.charAt(r);
  return t;
};
const Tc = { class: "dropZone" }, Ic = ["id", "accept"], $c = ["onDrop"], Ac = ["for"], Fc = /* @__PURE__ */ gs('<svg width="10em" height="10em" viewBox="0 0 16 12" class="dropZoneImage" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-v-40def0a8><path fill-rule="evenodd" d="m 8.0274054,0.49415269 a 5.53,5.53 0 0 0 -3.594,1.34200001 c -0.766,0.66 -1.321,1.52 -1.464,2.383 -1.676,0.37 -2.94199993,1.83 -2.94199993,3.593 0,2.048 1.70799993,3.6820003 3.78099993,3.6820003 h 8.9059996 c 1.815,0 3.313,-1.43 3.313,-3.2270003 0,-1.636 -1.242,-2.969 -2.834,-3.194 -0.243,-2.58 -2.476,-4.57900001 -5.1659996,-4.57900001 z m 2.3539996,5.14600001 -1.9999996,-2 a 0.5,0.5 0 0 0 -0.708,0 l -2,2 a 0.5006316,0.5006316 0 1 0 0.708,0.708 l 1.146,-1.147 v 3.793 a 0.5,0.5 0 0 0 1,0 v -3.793 l 1.146,1.147 a 0.5006316,0.5006316 0 0 0 0.7079996,-0.708 z" data-v-40def0a8></path></svg><div class="dropZoneBody" data-v-40def0a8><p data-v-40def0a8><strong class="dropZoneTitle fg-inherit" data-v-40def0a8>Drag and drop files to upload</strong></p><p data-v-40def0a8><small class="dropZoneText" data-v-40def0a8>Your files will be added automatically</small></p><button type="button" class="button" data-v-40def0a8>or select files</button></div>', 2), Pc = [
  Fc
], Mc = /* @__PURE__ */ Oo({
  __name: "DropZone",
  props: {
    modelValue: { default: [] },
    accept: { default: "*" },
    base64: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = an([]), r = an(null), s = Os(), i = (c) => {
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
    return (c, f) => (rn(), sn("div", Tc, [
      Ke("input", {
        type: "file",
        id: "dropZoneFile-" + St(s),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: r,
        onChange: i,
        multiple: "",
        accept: e.accept
      }, null, 40, Ic),
      Ke("div", {
        class: "dropZoneWrap",
        onDragenter: f[0] || (f[0] = Nt(() => {
        }, ["prevent"])),
        onDragover: f[1] || (f[1] = Nt(() => {
        }, ["prevent"])),
        onDrop: Nt(i, ["prevent"])
      }, [
        Ke("label", {
          for: "dropZoneFile-" + St(s),
          class: "dropZoneLabel"
        }, Pc, 8, Ac)
      ], 40, $c)
    ]));
  }
}), Rc = `.dropZone[data-v-40def0a8]{overflow-wrap:break-word;padding:.5rem;max-width:calc(100vw - .5rem);max-height:calc(100vh - .5rem)}.dropZone .dropZoneFile[data-v-40def0a8]{position:absolute;width:0px;height:0px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.dropZone .dropZoneWrap[data-v-40def0a8]{border-width:3px;border-style:dashed;border-color:currentColor;box-shadow:-1px 5px 25px -9px #0003}.dropZone .dropZoneWrap .dropZoneLabel[data-v-40def0a8]{display:grid;place-items:center;width:100%;height:100%;padding-top:1.5rem;padding-bottom:2.5rem;cursor:pointer}.dropZone .dropZoneWrap .dropZoneImage[data-v-40def0a8]{pointer-events:none;color:currentColor}.dropZone .dropZoneWrap .dropZoneBody[data-v-40def0a8]{text-align:center}.dropZone .dropZoneWrap .dropZoneBody p[data-v-40def0a8],.dropZone .dropZoneWrap .dropZoneBody span[data-v-40def0a8]{margin:0}.dropZone .dropZoneWrap .dropZoneBody .dropZoneTitle[data-v-40def0a8]{color:#333}.dropZone .dropZoneWrap .dropZoneBody .dropZoneText[data-v-40def0a8]{color:#737373}.dropZone .dropZoneWrap .dropZoneBody .button[data-v-40def0a8]{background-color:transparent;display:inline-block;text-align:center;vertical-align:middle;pointer-events:none;font-size:1rem;line-height:1.5rem;font-weight:400;user-select:none;margin-top:1.25rem;border-radius:.35rem;color:currentColor;border:2px solid currentColor;padding:.375rem .75rem}.fg-inherit[data-v-40def0a8]{color:inherit!important}
`, ws = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Sc = /* @__PURE__ */ ws(Mc, [["styles", [Rc]], ["__scopeId", "data-v-40def0a8"]]), jc = { class: "dropZone" }, Zc = ["id"], Lc = ["onDrop"], Bc = ["for"], Hc = ["src", "alt"], kc = /* @__PURE__ */ gs('<svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" fill="currentColor" class="dropZoneImage my-10px" viewBox="0 0 16 16" data-v-396e7c0a><path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" data-v-396e7c0a></path><path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" data-v-396e7c0a></path></svg><div class="dropZoneBody" data-v-396e7c0a><p data-v-396e7c0a><strong class="dropZoneTitle fg-inherit" data-v-396e7c0a>Drag and drop thumbnail</strong></p><p data-v-396e7c0a><small class="dropZoneText" data-v-396e7c0a>Your thumbnail will be shown here</small></p><button type="button" class="button" data-v-396e7c0a>or select thumbnail</button></div>', 2), Uc = /* @__PURE__ */ Oo({
  __name: "ThumbBox",
  props: {
    modelValue: { default: {} }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = an(n.modelValue || {}), r = an(null), s = Os();
    tn(() => n.modelValue, () => {
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
      return rn(), sn("div", jc, [
        Ke("input", {
          type: "file",
          id: "dropZoneThumbnail-" + St(s),
          class: "dropZoneFile",
          ref_key: "dropZoneFile",
          ref: r,
          onChange: i,
          accept: "image/*"
        }, null, 40, Zc),
        Ke("div", {
          class: Ft(["dropZoneWrap", (a = o.value) != null && a.base64 ? "bd-none" : ""]),
          onDragenter: f[0] || (f[0] = Nt(() => {
          }, ["prevent"])),
          onDragover: f[1] || (f[1] = Nt(() => {
          }, ["prevent"])),
          onDrop: Nt(i, ["prevent"])
        }, [
          Ke("label", {
            for: "dropZoneThumbnail-" + St(s),
            class: Ft(["dropZoneLabel", (p = o.value) != null && p.base64 ? "py-0px" : ""])
          }, [
            (d = o.value) != null && d.base64 ? (rn(), sn("img", {
              key: 0,
              src: o.value.base64,
              class: "objectFit-fill w-100pct",
              alt: o.value.name
            }, null, 8, Hc)) : (rn(), sn(he, { key: 1 }, [
              kc
            ], 64))
          ], 10, Bc)
        ], 42, Lc)
      ]);
    };
  }
}), Kc = `.dropZone[data-v-396e7c0a]{overflow-wrap:break-word;padding:.5rem;max-width:calc(100vw - .5rem);max-height:calc(100vh - .5rem)}.dropZone .dropZoneFile[data-v-396e7c0a]{position:absolute;width:0px;height:0px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.dropZone .dropZoneWrap[data-v-396e7c0a]{border-width:3px;border-style:dashed;border-color:currentColor;box-shadow:-1px 5px 25px -9px #0003}.dropZone .dropZoneWrap .dropZoneLabel[data-v-396e7c0a]{display:grid;place-items:center;width:100%;height:100%;padding-top:1.5rem;padding-bottom:2.5rem;cursor:pointer}.dropZone .dropZoneWrap .dropZoneImage[data-v-396e7c0a]{pointer-events:none;color:currentColor}.dropZone .dropZoneWrap .dropZoneBody[data-v-396e7c0a]{text-align:center}.dropZone .dropZoneWrap .dropZoneBody p[data-v-396e7c0a],.dropZone .dropZoneWrap .dropZoneBody span[data-v-396e7c0a]{margin:0}.dropZone .dropZoneWrap .dropZoneBody .dropZoneTitle[data-v-396e7c0a]{color:#333}.dropZone .dropZoneWrap .dropZoneBody .dropZoneText[data-v-396e7c0a]{color:#737373}.dropZone .dropZoneWrap .dropZoneBody .button[data-v-396e7c0a]{background-color:transparent;display:inline-block;text-align:center;vertical-align:middle;pointer-events:none;font-size:1rem;line-height:1.5rem;font-weight:400;user-select:none;margin-top:1.25rem;border-radius:.35rem;color:currentColor;border:2px solid currentColor;padding:.375rem .75rem}.fg-inherit[data-v-396e7c0a]{color:inherit!important}.my-10px[data-v-396e7c0a]{margin-top:10px!important;margin-bottom:10px!important}.bd-none[data-v-396e7c0a]{border:none!important}.objectFit-fill[data-v-396e7c0a]{object-fit:fill!important}.w-100pct[data-v-396e7c0a]{width:100%!important}.py-0px[data-v-396e7c0a]{padding-top:0!important;padding-bottom:0!important}
`, Wc = /* @__PURE__ */ ws(Uc, [["styles", [Kc]], ["__scopeId", "data-v-396e7c0a"]]), zc = ys(Sc), qc = ys(Wc);
function Yc() {
  customElements.define("drop-zone", zc), customElements.define("thumb-box", qc);
}
export {
  zc as DropZone,
  qc as ThumbBox,
  Yc as useTedirDropZone
};

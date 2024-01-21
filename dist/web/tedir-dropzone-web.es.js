function Dt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let r = 0; r < o.length; r++)
    n[o[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const $s = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", As = /* @__PURE__ */ Dt($s);
function Nr(e) {
  return !!e || e === "";
}
function go(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = te(o) ? Ps(o) : go(o);
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
const Fs = /;(?![^(]*\))/g, Zs = /:(.+)/;
function Ps(e) {
  const t = {};
  return e.split(Fs).forEach((n) => {
    if (n) {
      const o = n.split(Zs);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function _n(e) {
  let t = "";
  if (te(e))
    t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const o = _n(e[n]);
      o && (t += o + " ");
    }
  else if (z(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const B = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Et = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], oe = () => {
}, yr = () => !1, Ss = /^on[^a-z]/, qt = (e) => Ss.test(e), un = (e) => e.startsWith("onUpdate:"), Y = Object.assign, _o = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ms = Object.prototype.hasOwnProperty, Z = (e, t) => Ms.call(e, t), T = Array.isArray, bt = (e) => vn(e) === "[object Map]", Rs = (e) => vn(e) === "[object Set]", $ = (e) => typeof e == "function", te = (e) => typeof e == "string", vo = (e) => typeof e == "symbol", z = (e) => e !== null && typeof e == "object", Eo = (e) => z(e) && $(e.then) && $(e.catch), js = Object.prototype.toString, vn = (e) => js.call(e), bo = (e) => vn(e).slice(8, -1), Bs = (e) => vn(e) === "[object Object]", No = (e) => te(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, rn = /* @__PURE__ */ Dt(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ls = /* @__PURE__ */ Dt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), En = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Hs = /-(\w)/g, ze = En((e) => e.replace(Hs, (t, n) => n ? n.toUpperCase() : "")), ks = /\B([A-Z])/g, Ne = En((e) => e.replace(ks, "-$1").toLowerCase()), bn = En((e) => e.charAt(0).toUpperCase() + e.slice(1)), Qe = En((e) => e ? `on${bn(e)}` : ""), Bt = (e, t) => !Object.is(e, t), Tt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, fn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, zn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ho;
const Or = () => Ho || (Ho = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function qn(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ve;
class Ws {
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
      process.env.NODE_ENV !== "production" && qn("cannot run an inactive effect scope.");
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
function Us(e, t = Ve) {
  t && t.active && t.effects.push(e);
}
const Lt = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, wr = (e) => (e.w & qe) > 0, xr = (e) => (e.n & qe) > 0, Ks = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= qe;
}, zs = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const r = t[o];
      wr(r) && !xr(r) ? r.delete(e) : t[n++] = r, r.w &= ~qe, r.n &= ~qe;
    }
    t.length = n;
  }
}, Jn = /* @__PURE__ */ new WeakMap();
let At = 0, qe = 1;
const Yn = 30;
let ue;
const rt = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Xn = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class yo {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Us(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = ue, n = Ke;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = ue, ue = this, Ke = !0, qe = 1 << ++At, At <= Yn ? Ks(this) : ko(this), this.fn();
    } finally {
      At <= Yn && zs(this), qe = 1 << --At, ue = this.parent, Ke = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ue === this ? this.deferStop = !0 : this.active && (ko(this), this.onStop && this.onStop(), this.active = !1);
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
const Dr = [];
function ft() {
  Dr.push(Ke), Ke = !1;
}
function dt() {
  const e = Dr.pop();
  Ke = e === void 0 ? !0 : e;
}
function he(e, t, n) {
  if (Ke && ue) {
    let o = Jn.get(e);
    o || Jn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Lt());
    const s = process.env.NODE_ENV !== "production" ? { effect: ue, target: e, type: t, key: n } : void 0;
    Qn(r, s);
  }
}
function Qn(e, t) {
  let n = !1;
  At <= Yn ? xr(e) || (e.n |= qe, n = !wr(e)) : n = !e.has(ue), n && (e.add(ue), ue.deps.push(e), process.env.NODE_ENV !== "production" && ue.onTrack && ue.onTrack(Object.assign({ effect: ue }, t)));
}
function Me(e, t, n, o, r, s) {
  const i = Jn.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && T(e))
    i.forEach((f, p) => {
      (p === "length" || p >= o) && c.push(f);
    });
  else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        T(e) ? No(n) && c.push(i.get("length")) : (c.push(i.get(rt)), bt(e) && c.push(i.get(Xn)));
        break;
      case "delete":
        T(e) || (c.push(i.get(rt)), bt(e) && c.push(i.get(Xn)));
        break;
      case "set":
        bt(e) && c.push(i.get(rt));
        break;
    }
  const a = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: r, oldTarget: s } : void 0;
  if (c.length === 1)
    c[0] && (process.env.NODE_ENV !== "production" ? _t(c[0], a) : _t(c[0]));
  else {
    const f = [];
    for (const p of c)
      p && f.push(...p);
    process.env.NODE_ENV !== "production" ? _t(Lt(f), a) : _t(Lt(f));
  }
}
function _t(e, t) {
  const n = T(e) ? e : [...e];
  for (const o of n)
    o.computed && Wo(o, t);
  for (const o of n)
    o.computed || Wo(o, t);
}
function Wo(e, t) {
  (e !== ue || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(Y({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const qs = /* @__PURE__ */ Dt("__proto__,__v_isRef,__isVue"), Vr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(vo)
), Js = /* @__PURE__ */ Nn(), Ys = /* @__PURE__ */ Nn(!1, !0), Xs = /* @__PURE__ */ Nn(!0), Qs = /* @__PURE__ */ Nn(!0, !0), Uo = /* @__PURE__ */ Gs();
function Gs() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = A(this);
      for (let s = 0, i = this.length; s < i; s++)
        he(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(A)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      ft();
      const o = A(this)[t].apply(this, n);
      return dt(), o;
    };
  }), e;
}
function Nn(e = !1, t = !1) {
  return function(o, r, s) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && s === (e ? t ? Pr : Zr : t ? Fr : Ar).get(o))
      return o;
    const i = T(o);
    if (!e && i && Z(Uo, r))
      return Reflect.get(Uo, r, s);
    const c = Reflect.get(o, r, s);
    return (vo(r) ? Vr.has(r) : qs(r)) || (e || he(o, "get", r), t) ? c : ee(c) ? i && No(r) ? c : c.value : z(c) ? e ? Sr(c) : wo(c) : c;
  };
}
const ei = /* @__PURE__ */ Cr(), ti = /* @__PURE__ */ Cr(!0);
function Cr(e = !1) {
  return function(n, o, r, s) {
    let i = n[o];
    if (Je(i) && ee(i) && !ee(r))
      return !1;
    if (!e && (!dn(r) && !Je(r) && (i = A(i), r = A(r)), !T(n) && ee(i) && !ee(r)))
      return i.value = r, !0;
    const c = T(n) && No(o) ? Number(o) < n.length : Z(n, o), a = Reflect.set(n, o, r, s);
    return n === A(s) && (c ? Bt(r, i) && Me(n, "set", o, r, i) : Me(n, "add", o, r)), a;
  };
}
function ni(e, t) {
  const n = Z(e, t), o = e[t], r = Reflect.deleteProperty(e, t);
  return r && n && Me(e, "delete", t, void 0, o), r;
}
function oi(e, t) {
  const n = Reflect.has(e, t);
  return (!vo(t) || !Vr.has(t)) && he(e, "has", t), n;
}
function ri(e) {
  return he(e, "iterate", T(e) ? "length" : rt), Reflect.ownKeys(e);
}
const Tr = {
  get: Js,
  set: ei,
  deleteProperty: ni,
  has: oi,
  ownKeys: ri
}, Ir = {
  get: Xs,
  set(e, t) {
    return process.env.NODE_ENV !== "production" && qn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return process.env.NODE_ENV !== "production" && qn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, si = /* @__PURE__ */ Y({}, Tr, {
  get: Ys,
  set: ti
}), ii = /* @__PURE__ */ Y({}, Ir, {
  get: Qs
}), Oo = (e) => e, yn = (e) => Reflect.getPrototypeOf(e);
function Gt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = A(e), s = A(t);
  n || (t !== s && he(r, "get", t), he(r, "get", s));
  const { has: i } = yn(r), c = o ? Oo : n ? xo : Ht;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, s))
    return c(e.get(s));
  e !== r && e.get(t);
}
function en(e, t = !1) {
  const n = this.__v_raw, o = A(n), r = A(e);
  return t || (e !== r && he(o, "has", e), he(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function tn(e, t = !1) {
  return e = e.__v_raw, !t && he(A(e), "iterate", rt), Reflect.get(e, "size", e);
}
function Ko(e) {
  e = A(e);
  const t = A(this);
  return yn(t).has.call(t, e) || (t.add(e), Me(t, "add", e, e)), this;
}
function zo(e, t) {
  t = A(t);
  const n = A(this), { has: o, get: r } = yn(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && $r(n, o, e) : (e = A(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? Bt(t, i) && Me(n, "set", e, t, i) : Me(n, "add", e, t), this;
}
function qo(e) {
  const t = A(this), { has: n, get: o } = yn(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && $r(t, n, e) : (e = A(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && Me(t, "delete", e, void 0, s), i;
}
function Jo() {
  const e = A(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? bt(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Me(e, "clear", void 0, void 0, n), o;
}
function nn(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, c = A(i), a = t ? Oo : e ? xo : Ht;
    return !e && he(c, "iterate", rt), i.forEach((f, p) => o.call(r, a(f), a(p), s));
  };
}
function on(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = A(r), i = bt(s), c = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, f = r[e](...o), p = n ? Oo : t ? xo : Ht;
    return !t && he(s, "iterate", a ? Xn : rt), {
      next() {
        const { value: d, done: g } = f.next();
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
function He(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${bn(e)} operation ${n}failed: target is readonly.`, A(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function li() {
  const e = {
    get(s) {
      return Gt(this, s);
    },
    get size() {
      return tn(this);
    },
    has: en,
    add: Ko,
    set: zo,
    delete: qo,
    clear: Jo,
    forEach: nn(!1, !1)
  }, t = {
    get(s) {
      return Gt(this, s, !1, !0);
    },
    get size() {
      return tn(this);
    },
    has: en,
    add: Ko,
    set: zo,
    delete: qo,
    clear: Jo,
    forEach: nn(!1, !0)
  }, n = {
    get(s) {
      return Gt(this, s, !0);
    },
    get size() {
      return tn(this, !0);
    },
    has(s) {
      return en.call(this, s, !0);
    },
    add: He("add"),
    set: He("set"),
    delete: He("delete"),
    clear: He("clear"),
    forEach: nn(!0, !1)
  }, o = {
    get(s) {
      return Gt(this, s, !0, !0);
    },
    get size() {
      return tn(this, !0);
    },
    has(s) {
      return en.call(this, s, !0);
    },
    add: He("add"),
    set: He("set"),
    delete: He("delete"),
    clear: He("clear"),
    forEach: nn(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = on(s, !1, !1), n[s] = on(s, !0, !1), t[s] = on(s, !1, !0), o[s] = on(s, !0, !0);
  }), [
    e,
    n,
    t,
    o
  ];
}
const [ci, ai, ui, fi] = /* @__PURE__ */ li();
function On(e, t) {
  const n = t ? e ? fi : ui : e ? ai : ci;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(Z(n, r) && r in o ? n : o, r, s);
}
const di = {
  get: /* @__PURE__ */ On(!1, !1)
}, pi = {
  get: /* @__PURE__ */ On(!1, !0)
}, hi = {
  get: /* @__PURE__ */ On(!0, !1)
}, mi = {
  get: /* @__PURE__ */ On(!0, !0)
};
function $r(e, t, n) {
  const o = A(n);
  if (o !== n && t.call(e, o)) {
    const r = bo(e);
    console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Ar = /* @__PURE__ */ new WeakMap(), Fr = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ new WeakMap(), Pr = /* @__PURE__ */ new WeakMap();
function gi(e) {
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
function _i(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : gi(bo(e));
}
function wo(e) {
  return Je(e) ? e : wn(e, !1, Tr, di, Ar);
}
function vi(e) {
  return wn(e, !1, si, pi, Fr);
}
function Sr(e) {
  return wn(e, !0, Ir, hi, Zr);
}
function vt(e) {
  return wn(e, !0, ii, mi, Pr);
}
function wn(e, t, n, o, r) {
  if (!z(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = _i(e);
  if (i === 0)
    return e;
  const c = new Proxy(e, i === 2 ? o : n);
  return r.set(e, c), c;
}
function st(e) {
  return Je(e) ? st(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Je(e) {
  return !!(e && e.__v_isReadonly);
}
function dn(e) {
  return !!(e && e.__v_isShallow);
}
function Gn(e) {
  return st(e) || Je(e);
}
function A(e) {
  const t = e && e.__v_raw;
  return t ? A(t) : e;
}
function Mr(e) {
  return fn(e, "__v_skip", !0), e;
}
const Ht = (e) => z(e) ? wo(e) : e, xo = (e) => z(e) ? Sr(e) : e;
function Rr(e) {
  Ke && ue && (e = A(e), process.env.NODE_ENV !== "production" ? Qn(e.dep || (e.dep = Lt()), {
    target: e,
    type: "get",
    key: "value"
  }) : Qn(e.dep || (e.dep = Lt())));
}
function jr(e, t) {
  e = A(e), e.dep && (process.env.NODE_ENV !== "production" ? _t(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : _t(e.dep));
}
function ee(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ot(e) {
  return Ei(e, !1);
}
function Ei(e, t) {
  return ee(e) ? e : new bi(e, t);
}
class bi {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : A(t), this._value = n ? t : Ht(t);
  }
  get value() {
    return Rr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || dn(t) || Je(t);
    t = n ? t : A(t), Bt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Ht(t), jr(this, t));
  }
}
function at(e) {
  return ee(e) ? e.value : e;
}
const Ni = {
  get: (e, t, n) => at(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return ee(r) && !ee(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Br(e) {
  return st(e) ? e : new Proxy(e, Ni);
}
var Lr;
class yi {
  constructor(t, n, o, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Lr] = !1, this._dirty = !0, this.effect = new yo(t, () => {
      this._dirty || (this._dirty = !0, jr(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = A(this);
    return Rr(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Lr = "__v_isReadonly";
function Oi(e, t, n = !1) {
  let o, r;
  const s = $(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : oe) : (o = e.get, r = e.set);
  const i = new yi(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const it = [];
function sn(e) {
  it.push(e);
}
function ln() {
  it.pop();
}
function y(e, ...t) {
  ft();
  const n = it.length ? it[it.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = wi();
  if (o)
    Pe(o, n, 11, [
      e + t.join(""),
      n && n.proxy,
      r.map(({ vnode: s }) => `at <${Pn(n, s.type)}>`).join(`
`),
      r
    ]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...xi(r)), console.warn(...s);
  }
  dt();
}
function wi() {
  let e = it[it.length - 1];
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
function xi(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Di(n));
  }), t;
}
function Di({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${Pn(e.component, e.type, o)}`, s = ">" + n;
  return e.props ? [r, ...Vi(e.props), s] : [r + s];
}
function Vi(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Hr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Hr(e, t, n) {
  return te(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ee(t) ? (t = Hr(e, A(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : $(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = A(t), n ? t : [`${e}=`, t]);
}
const Do = {
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
    xn(s, t, n);
  }
  return r;
}
function _e(e, t, n, o) {
  if ($(e)) {
    const s = Pe(e, t, n, o);
    return s && Eo(s) && s.catch((i) => {
      xn(i, t, n);
    }), s;
  }
  const r = [];
  for (let s = 0; s < e.length; s++)
    r.push(_e(e[s], t, n, o));
  return r;
}
function xn(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? Do[n] : n;
    for (; s; ) {
      const f = s.ec;
      if (f) {
        for (let p = 0; p < f.length; p++)
          if (f[p](e, i, c) === !1)
            return;
      }
      s = s.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      Pe(a, null, 10, [e, i, c]);
      return;
    }
  }
  Ci(e, n, r, o);
}
function Ci(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = Do[t];
    if (n && sn(n), y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && ln(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let kt = !1, eo = !1;
const ie = [];
let Te = 0;
const Nt = [];
let Ce = null, ke = 0;
const kr = /* @__PURE__ */ Promise.resolve();
let Vo = null;
const Ti = 100;
function Wr(e) {
  const t = Vo || kr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ii(e) {
  let t = Te + 1, n = ie.length;
  for (; t < n; ) {
    const o = t + n >>> 1;
    Wt(ie[o]) < e ? t = o + 1 : n = o;
  }
  return t;
}
function Dn(e) {
  (!ie.length || !ie.includes(e, kt && e.allowRecurse ? Te + 1 : Te)) && (e.id == null ? ie.push(e) : ie.splice(Ii(e.id), 0, e), Ur());
}
function Ur() {
  !kt && !eo && (eo = !0, Vo = kr.then(qr));
}
function $i(e) {
  const t = ie.indexOf(e);
  t > Te && ie.splice(t, 1);
}
function Kr(e) {
  T(e) ? Nt.push(...e) : (!Ce || !Ce.includes(e, e.allowRecurse ? ke + 1 : ke)) && Nt.push(e), Ur();
}
function Yo(e, t = kt ? Te + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < ie.length; t++) {
    const n = ie[t];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && Co(e, n))
        continue;
      ie.splice(t, 1), t--, n();
    }
  }
}
function zr(e) {
  if (Nt.length) {
    const t = [...new Set(Nt)];
    if (Nt.length = 0, Ce) {
      Ce.push(...t);
      return;
    }
    for (Ce = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ce.sort((n, o) => Wt(n) - Wt(o)), ke = 0; ke < Ce.length; ke++)
      process.env.NODE_ENV !== "production" && Co(e, Ce[ke]) || Ce[ke]();
    Ce = null, ke = 0;
  }
}
const Wt = (e) => e.id == null ? 1 / 0 : e.id, Ai = (e, t) => {
  const n = Wt(e) - Wt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function qr(e) {
  eo = !1, kt = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ie.sort(Ai);
  const t = process.env.NODE_ENV !== "production" ? (n) => Co(e, n) : oe;
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
    Te = 0, ie.length = 0, zr(e), kt = !1, Vo = null, (ie.length || Nt.length) && qr(e);
  }
}
function Co(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Ti) {
      const o = t.ownerInstance, r = o && Ds(o.type);
      return y(`Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let lt = !1;
const gt = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Or().__VUE_HMR_RUNTIME__ = {
  createRecord: Ln(Jr),
  rerender: Ln(Pi),
  reload: Ln(Si)
});
const ut = /* @__PURE__ */ new Map();
function Fi(e) {
  const t = e.type.__hmrId;
  let n = ut.get(t);
  n || (Jr(t, e.type), n = ut.get(t)), n.instances.add(e);
}
function Zi(e) {
  ut.get(e.type.__hmrId).instances.delete(e);
}
function Jr(e, t) {
  return ut.has(e) ? !1 : (ut.set(e, {
    initialDef: Zt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Zt(e) {
  return Vs(e) ? e.__vccOpts : e;
}
function Pi(e, t) {
  const n = ut.get(e);
  !n || (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Zt(o.type).render = t), o.renderCache = [], lt = !0, o.update(), lt = !1;
  }));
}
function Si(e, t) {
  const n = ut.get(e);
  if (!n)
    return;
  t = Zt(t), Xo(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = Zt(r.type);
    gt.has(s) || (s !== n.initialDef && Xo(s, t), gt.add(s)), r.appContext.optionsCache.delete(r.type), r.ceReload ? (gt.add(s), r.ceReload(t.styles), gt.delete(s)) : r.parent ? (Dn(r.parent.update), r.parent.type.__asyncLoader && r.parent.ceReload && r.parent.ceReload(t.styles)) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Kr(() => {
    for (const r of o)
      gt.delete(Zt(r.type));
  });
}
function Xo(e, t) {
  Y(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Ln(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let et, Ft = [], to = !1;
function Jt(e, ...t) {
  et ? et.emit(e, ...t) : to || Ft.push({ event: e, args: t });
}
function Yr(e, t) {
  var n, o;
  et = e, et ? (et.enabled = !0, Ft.forEach(({ event: r, args: s }) => et.emit(r, ...s)), Ft = []) : typeof window < "u" && window.HTMLElement && !(!((o = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || o === void 0) && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Yr(s, t);
  }), setTimeout(() => {
    et || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, to = !0, Ft = []);
  }, 3e3)) : (to = !0, Ft = []);
}
function Mi(e, t) {
  Jt("app:init", e, t, {
    Fragment: me,
    Text: $n,
    Comment: le,
    Static: Mt
  });
}
function Ri(e) {
  Jt("app:unmount", e);
}
const ji = /* @__PURE__ */ To("component:added"), Xr = /* @__PURE__ */ To("component:updated"), Bi = /* @__PURE__ */ To("component:removed");
function To(e) {
  return (t) => {
    Jt(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const Li = /* @__PURE__ */ Qr("perf:start"), Hi = /* @__PURE__ */ Qr("perf:end");
function Qr(e) {
  return (t, n, o) => {
    Jt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function ki(e, t, n) {
  Jt("component:emit", e.appContext.app, e, t, n);
}
function Wi(e, t, ...n) {
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
        $(g) && (g(...n) || y(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && t.slice(7);
  if (i && i in o) {
    const p = `${i === "modelValue" ? "model" : i}Modifiers`, { number: d, trim: g } = o[p] || B;
    g && (r = n.map((w) => w.trim())), d && (r = n.map(zn));
  }
  if (process.env.NODE_ENV !== "production" && ki(e, t, r), process.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[Qe(p)] && y(`Event "${p}" is emitted in component ${Pn(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ne(t)}" instead of "${t}".`);
  }
  let c, a = o[c = Qe(t)] || o[c = Qe(ze(t))];
  !a && s && (a = o[c = Qe(Ne(t))]), a && _e(a, e, 6, r);
  const f = o[c + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, _e(f, e, 6, r);
  }
}
function Gr(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, c = !1;
  if (!$(e)) {
    const a = (f) => {
      const p = Gr(f, t, !0);
      p && (c = !0, Y(i, p));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !c ? (z(e) && o.set(e, null), null) : (T(s) ? s.forEach((a) => i[a] = null) : Y(i, s), z(e) && o.set(e, i), i);
}
function Vn(e, t) {
  return !e || !qt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Z(e, t[0].toLowerCase() + t.slice(1)) || Z(e, Ne(t)) || Z(e, t));
}
let re = null, Cn = null;
function pn(e) {
  const t = re;
  return re = e, Cn = e && e.type.__scopeId || null, t;
}
function Ui(e) {
  Cn = e;
}
function Ki() {
  Cn = null;
}
function zi(e, t = re, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && ar(-1);
    const s = pn(t), i = e(...r);
    return pn(s), o._d && ar(1), process.env.NODE_ENV !== "production" && Xr(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let no = !1;
function hn() {
  no = !0;
}
function Hn(e) {
  const { type: t, vnode: n, proxy: o, withProxy: r, props: s, propsOptions: [i], slots: c, attrs: a, emit: f, render: p, renderCache: d, data: g, setupState: w, ctx: F, inheritAttrs: C } = e;
  let W, L;
  const j = pn(e);
  process.env.NODE_ENV !== "production" && (no = !1);
  try {
    if (n.shapeFlag & 4) {
      const K = r || o;
      W = Ee(p.call(K, K, d, s, w, g, F)), L = a;
    } else {
      const K = t;
      process.env.NODE_ENV !== "production" && a === s && hn(), W = Ee(K.length > 1 ? K(s, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return hn(), a;
        },
        slots: c,
        emit: f
      } : { attrs: a, slots: c, emit: f }) : K(s, null)), L = t.props ? a : Ji(a);
    }
  } catch (K) {
    Rt.length = 0, xn(K, e, 1), W = ye(le);
  }
  let q = W, fe;
  if (process.env.NODE_ENV !== "production" && W.patchFlag > 0 && W.patchFlag & 2048 && ([q, fe] = qi(W)), L && C !== !1) {
    const K = Object.keys(L), { shapeFlag: je } = q;
    if (K.length) {
      if (je & 7)
        i && K.some(un) && (L = Yi(L, i)), q = Ie(q, L);
      else if (process.env.NODE_ENV !== "production" && !no && q.type !== le) {
        const Oe = Object.keys(a), P = [], U = [];
        for (let J = 0, se = Oe.length; J < se; J++) {
          const ne = Oe[J];
          qt(ne) ? un(ne) || P.push(ne[2].toLowerCase() + ne.slice(3)) : U.push(ne);
        }
        U.length && y(`Extraneous non-props attributes (${U.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), P.length && y(`Extraneous non-emits event listeners (${P.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Qo(q) && y("Runtime directive used on component with non-element root node. The directives will not function as intended."), q = Ie(q), q.dirs = q.dirs ? q.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Qo(q) && y("Component inside <Transition> renders non-element root node that cannot be animated."), q.transition = n.transition), process.env.NODE_ENV !== "production" && fe ? fe(q) : W = q, pn(j), W;
}
const qi = (e) => {
  const t = e.children, n = e.dynamicChildren, o = es(t);
  if (!o)
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (c) => {
    t[r] = c, n && (s > -1 ? n[s] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [Ee(o), i];
};
function es(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    if (An(o)) {
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
const Ji = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || qt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Yi = (e, t) => {
  const n = {};
  for (const o in e)
    (!un(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Qo = (e) => e.shapeFlag & 7 || e.type === le;
function Xi(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: c, patchFlag: a } = t, f = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || c) && lt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return o ? Go(o, i, f) : !!i;
    if (a & 8) {
      const p = t.dynamicProps;
      for (let d = 0; d < p.length; d++) {
        const g = p[d];
        if (i[g] !== o[g] && !Vn(f, g))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : o === i ? !1 : o ? i ? Go(o, i, f) : !0 : !!i;
  return !1;
}
function Go(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !Vn(n, s))
      return !0;
  }
  return !1;
}
function Qi({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Gi = (e) => e.__isSuspense;
function el(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : Kr(e);
}
function tl(e, t) {
  if (!G)
    process.env.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = G.provides;
    const o = G.parent && G.parent.provides;
    o === n && (n = G.provides = Object.create(o)), n[e] = t;
  }
}
function kn(e, t, n = !1) {
  const o = G || re;
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
const er = {};
function Pt(e, t, n) {
  return process.env.NODE_ENV !== "production" && !$(t) && y("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), ts(e, t, n);
}
function ts(e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: i } = B) {
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && y('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), o !== void 0 && y('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const c = (j) => {
    y("Invalid watch source: ", j, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, a = G;
  let f, p = !1, d = !1;
  if (ee(e) ? (f = () => e.value, p = dn(e)) : st(e) ? (f = () => e, o = !0) : T(e) ? (d = !0, p = e.some((j) => st(j) || dn(j)), f = () => e.map((j) => {
    if (ee(j))
      return j.value;
    if (st(j))
      return ot(j);
    if ($(j))
      return Pe(j, a, 2);
    process.env.NODE_ENV !== "production" && c(j);
  })) : $(e) ? t ? f = () => Pe(e, a, 2) : f = () => {
    if (!(a && a.isUnmounted))
      return g && g(), _e(e, a, 3, [w]);
  } : (f = oe, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const j = f;
    f = () => ot(j());
  }
  let g, w = (j) => {
    g = L.onStop = () => {
      Pe(j, a, 4);
    };
  };
  if (Kt)
    return w = oe, t ? n && _e(t, a, 3, [
      f(),
      d ? [] : void 0,
      w
    ]) : f(), oe;
  let F = d ? [] : er;
  const C = () => {
    if (!!L.active)
      if (t) {
        const j = L.run();
        (o || p || (d ? j.some((q, fe) => Bt(q, F[fe])) : Bt(j, F))) && (g && g(), _e(t, a, 3, [
          j,
          F === er ? void 0 : F,
          w
        ]), F = j);
      } else
        L.run();
  };
  C.allowRecurse = !!t;
  let W;
  r === "sync" ? W = C : r === "post" ? W = () => pe(C, a && a.suspense) : (C.pre = !0, a && (C.id = a.uid), W = () => Dn(C));
  const L = new yo(f, W);
  return process.env.NODE_ENV !== "production" && (L.onTrack = s, L.onTrigger = i), t ? n ? C() : F = L.run() : r === "post" ? pe(L.run.bind(L), a && a.suspense) : L.run(), () => {
    L.stop(), a && a.scope && _o(a.scope.effects, L);
  };
}
function nl(e, t, n) {
  const o = this.proxy, r = te(e) ? e.includes(".") ? ns(o, e) : () => o[e] : e.bind(o, o);
  let s;
  $(t) ? s = t : (s = t.handler, n = t);
  const i = G;
  xt(this);
  const c = ts(r, s.bind(o), n);
  return i ? xt(i) : ct(), c;
}
function ns(e, t) {
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
  else if (T(e))
    for (let n = 0; n < e.length; n++)
      ot(e[n], t);
  else if (Rs(e) || bt(e))
    e.forEach((n) => {
      ot(n, t);
    });
  else if (Bs(e))
    for (const n in e)
      ot(e[n], t);
  return e;
}
function ol() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Io(() => {
    e.isMounted = !0;
  }), is(() => {
    e.isUnmounting = !0;
  }), e;
}
const ge = [Function, Array], rl = {
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
    const n = tc(), o = ol();
    let r;
    return () => {
      const s = t.default && rs(t.default(), !0);
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
      const c = A(e), { mode: a } = c;
      if (process.env.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && y(`invalid <transition> mode: ${a}`), o.isLeaving)
        return Wn(i);
      const f = tr(i);
      if (!f)
        return Wn(i);
      const p = oo(f, c, o, n);
      ro(f, p);
      const d = n.subTree, g = d && tr(d);
      let w = !1;
      const { getTransitionKey: F } = f.type;
      if (F) {
        const C = F();
        r === void 0 ? r = C : C !== r && (r = C, w = !0);
      }
      if (g && g.type !== le && (!tt(f, g) || w)) {
        const C = oo(g, c, o, n);
        if (ro(g, C), a === "out-in")
          return o.isLeaving = !0, C.afterLeave = () => {
            o.isLeaving = !1, n.update();
          }, Wn(i);
        a === "in-out" && f.type !== le && (C.delayLeave = (W, L, j) => {
          const q = os(o, g);
          q[String(g.key)] = g, W._leaveCb = () => {
            L(), W._leaveCb = void 0, delete p.delayedLeave;
          }, p.delayedLeave = j;
        });
      }
      return i;
    };
  }
}, sl = rl;
function os(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function oo(e, t, n, o) {
  const { appear: r, mode: s, persisted: i = !1, onBeforeEnter: c, onEnter: a, onAfterEnter: f, onEnterCancelled: p, onBeforeLeave: d, onLeave: g, onAfterLeave: w, onLeaveCancelled: F, onBeforeAppear: C, onAppear: W, onAfterAppear: L, onAppearCancelled: j } = t, q = String(e.key), fe = os(n, e), K = (P, U) => {
    P && _e(P, o, 9, U);
  }, je = (P, U) => {
    const J = U[1];
    K(P, U), T(P) ? P.every((se) => se.length <= 1) && J() : P.length <= 1 && J();
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
      const J = fe[q];
      J && tt(e, J) && J.el._leaveCb && J.el._leaveCb(), K(U, [P]);
    },
    enter(P) {
      let U = a, J = f, se = p;
      if (!n.isMounted)
        if (r)
          U = W || a, J = L || f, se = j || p;
        else
          return;
      let ne = !1;
      const $e = P._enterCb = (Xt) => {
        ne || (ne = !0, Xt ? K(se, [P]) : K(J, [P]), Oe.delayedLeave && Oe.delayedLeave(), P._enterCb = void 0);
      };
      U ? je(U, [P, $e]) : $e();
    },
    leave(P, U) {
      const J = String(e.key);
      if (P._enterCb && P._enterCb(!0), n.isUnmounting)
        return U();
      K(d, [P]);
      let se = !1;
      const ne = P._leaveCb = ($e) => {
        se || (se = !0, U(), $e ? K(F, [P]) : K(w, [P]), P._leaveCb = void 0, fe[J] === e && delete fe[J]);
      };
      fe[J] = e, g ? je(g, [P, ne]) : ne();
    },
    clone(P) {
      return oo(P, t, n, o);
    }
  };
  return Oe;
}
function Wn(e) {
  if (Yt(e))
    return e = Ie(e), e.children = null, e;
}
function tr(e) {
  return Yt(e) ? e.children ? e.children[0] : void 0 : e;
}
function ro(e, t) {
  e.shapeFlag & 6 && e.component ? ro(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function rs(e, t = !1, n) {
  let o = [], r = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const c = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === me ? (i.patchFlag & 128 && r++, o = o.concat(rs(i.children, t, c))) : (t || i.type !== le) && o.push(c != null ? Ie(i, { key: c }) : i);
  }
  if (r > 1)
    for (let s = 0; s < o.length; s++)
      o[s].patchFlag = -2;
  return o;
}
function Tn(e) {
  return $(e) ? { setup: e, name: e.name } : e;
}
const St = (e) => !!e.type.__asyncLoader, Yt = (e) => e.type.__isKeepAlive;
function il(e, t) {
  ss(e, "a", t);
}
function ll(e, t) {
  ss(e, "da", t);
}
function ss(e, t, n = G) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (In(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Yt(r.parent.vnode) && cl(o, t, n, r), r = r.parent;
  }
}
function cl(e, t, n, o) {
  const r = In(t, e, o, !0);
  ls(() => {
    _o(o[t], r);
  }, n);
}
function In(e, t, n = G, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      ft(), xt(n);
      const c = _e(t, n, e, i);
      return ct(), dt(), c;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = Qe(Do[e].replace(/ hook$/, ""));
    y(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Re = (e) => (t, n = G) => (!Kt || e === "sp") && In(e, (...o) => t(...o), n), al = Re("bm"), Io = Re("m"), ul = Re("bu"), fl = Re("u"), is = Re("bum"), ls = Re("um"), dl = Re("sp"), pl = Re("rtg"), hl = Re("rtc");
function ml(e, t = G) {
  In("ec", e, t);
}
function cs(e) {
  Ls(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function gl(e, t) {
  const n = re;
  if (n === null)
    return process.env.NODE_ENV !== "production" && y("withDirectives can only be used inside render functions."), e;
  const o = Zn(n) || n.proxy, r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, c, a, f = B] = t[s];
    $(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && ot(c), r.push({
      dir: i,
      instance: o,
      value: c,
      oldValue: void 0,
      arg: a,
      modifiers: f
    });
  }
  return e;
}
function Ye(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    s && (c.oldValue = s[i].value);
    let a = c.dir[o];
    a && (ft(), _e(a, n, 8, [
      e.el,
      c,
      e,
      t
    ]), dt());
  }
}
const _l = Symbol();
function as(e, t, n = {}, o, r) {
  if (re.isCE || re.parent && St(re.parent) && re.parent.isCE)
    return ye("slot", t === "default" ? null : { name: t }, o && o());
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (y("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), s = () => []), s && s._c && (s._d = !1), yt();
  const i = s && us(s(n)), c = Kl(me, {
    key: n.key || i && i.key || `_${t}`
  }, i || (o ? o() : []), i && e._ === 1 ? 64 : -2);
  return !r && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), s && s._c && (s._d = !0), c;
}
function us(e) {
  return e.some((t) => An(t) ? !(t.type === le || t.type === me && !us(t.children)) : !0) ? e : null;
}
const so = (e) => e ? ws(e) ? Zn(e) || e.proxy : so(e.parent) : null, wt = /* @__PURE__ */ Y(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? vt(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? vt(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? vt(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? vt(e.refs) : e.refs,
  $parent: (e) => so(e.parent),
  $root: (e) => so(e.root),
  $emit: (e) => e.emit,
  $options: (e) => Ao(e),
  $forceUpdate: (e) => e.f || (e.f = () => Dn(e.update)),
  $nextTick: (e) => e.n || (e.n = Wr.bind(e.proxy)),
  $watch: (e) => nl.bind(e)
}), $o = (e) => e === "_" || e === "$", fs = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: c, appContext: a } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (process.env.NODE_ENV !== "production" && o !== B && o.__isScriptSetup && Z(o, t))
      return o[t];
    let f;
    if (t[0] !== "$") {
      const w = i[t];
      if (w !== void 0)
        switch (w) {
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
        if ((f = e.propsOptions[0]) && Z(f, t))
          return i[t] = 3, s[t];
        if (n !== B && Z(n, t))
          return i[t] = 4, n[t];
        io && (i[t] = 0);
      }
    }
    const p = wt[t];
    let d, g;
    if (p)
      return t === "$attrs" && (he(e, "get", t), process.env.NODE_ENV !== "production" && hn()), p(e);
    if ((d = c.__cssModules) && (d = d[t]))
      return d;
    if (n !== B && Z(n, t))
      return i[t] = 4, n[t];
    if (g = a.config.globalProperties, Z(g, t))
      return g[t];
    process.env.NODE_ENV !== "production" && re && (!te(t) || t.indexOf("__v") !== 0) && (r !== B && $o(t[0]) && Z(r, t) ? y(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === re && y(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
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
    return !!n[i] || e !== B && Z(e, i) || t !== B && Z(t, i) || (c = s[0]) && Z(c, i) || Z(o, i) || Z(wt, i) || Z(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Z(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (fs.ownKeys = (e) => (y("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function vl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(wt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => wt[n](e),
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
  Object.keys(A(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if ($o(o[0])) {
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
let io = !0;
function yl(e) {
  const t = Ao(e), n = e.proxy, o = e.ctx;
  io = !1, t.beforeCreate && nr(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: s,
    methods: i,
    watch: c,
    provide: a,
    inject: f,
    created: p,
    beforeMount: d,
    mounted: g,
    beforeUpdate: w,
    updated: F,
    activated: C,
    deactivated: W,
    beforeDestroy: L,
    beforeUnmount: j,
    destroyed: q,
    unmounted: fe,
    render: K,
    renderTracked: je,
    renderTriggered: Oe,
    errorCaptured: P,
    serverPrefetch: U,
    expose: J,
    inheritAttrs: se,
    components: ne,
    directives: $e,
    filters: Xt
  } = t, Be = process.env.NODE_ENV !== "production" ? Nl() : null;
  if (process.env.NODE_ENV !== "production") {
    const [M] = e.propsOptions;
    if (M)
      for (const R in M)
        Be("Props", R);
  }
  if (f && Ol(f, o, Be, e.appContext.config.unwrapInjectedRef), i)
    for (const M in i) {
      const R = i[M];
      $(R) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, M, {
        value: R.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[M] = R.bind(n), process.env.NODE_ENV !== "production" && Be("Methods", M)) : process.env.NODE_ENV !== "production" && y(`Method "${M}" has type "${typeof R}" in the component definition. Did you reference the function correctly?`);
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !$(r) && y("The data option must be a function. Plain object usage is no longer supported.");
    const M = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && Eo(M) && y("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !z(M))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = wo(M), process.env.NODE_ENV !== "production")
      for (const R in M)
        Be("Data", R), $o(R[0]) || Object.defineProperty(o, R, {
          configurable: !0,
          enumerable: !0,
          get: () => M[R],
          set: oe
        });
  }
  if (io = !0, s)
    for (const M in s) {
      const R = s[M], we = $(R) ? R.bind(n, n) : $(R.get) ? R.get.bind(n, n) : oe;
      process.env.NODE_ENV !== "production" && we === oe && y(`Computed property "${M}" has no getter.`);
      const Mn = !$(R) && $(R.set) ? R.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(`Write operation failed: computed property "${M}" is readonly.`);
      } : oe, Vt = ac({
        get: we,
        set: Mn
      });
      Object.defineProperty(o, M, {
        enumerable: !0,
        configurable: !0,
        get: () => Vt.value,
        set: (pt) => Vt.value = pt
      }), process.env.NODE_ENV !== "production" && Be("Computed", M);
    }
  if (c)
    for (const M in c)
      ds(c[M], o, n, M);
  if (a) {
    const M = $(a) ? a.call(n) : a;
    Reflect.ownKeys(M).forEach((R) => {
      tl(R, M[R]);
    });
  }
  p && nr(p, e, "c");
  function de(M, R) {
    T(R) ? R.forEach((we) => M(we.bind(n))) : R && M(R.bind(n));
  }
  if (de(al, d), de(Io, g), de(ul, w), de(fl, F), de(il, C), de(ll, W), de(ml, P), de(hl, je), de(pl, Oe), de(is, j), de(ls, fe), de(dl, U), T(J))
    if (J.length) {
      const M = e.exposed || (e.exposed = {});
      J.forEach((R) => {
        Object.defineProperty(M, R, {
          get: () => n[R],
          set: (we) => n[R] = we
        });
      });
    } else
      e.exposed || (e.exposed = {});
  K && e.render === oe && (e.render = K), se != null && (e.inheritAttrs = se), ne && (e.components = ne), $e && (e.directives = $e);
}
function Ol(e, t, n = oe, o = !1) {
  T(e) && (e = lo(e));
  for (const r in e) {
    const s = e[r];
    let i;
    z(s) ? "default" in s ? i = kn(s.from || r, s.default, !0) : i = kn(s.from || r) : i = kn(s), ee(i) ? o ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (c) => i.value = c
    }) : (process.env.NODE_ENV !== "production" && y(`injected property "${r}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[r] = i) : t[r] = i, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function nr(e, t, n) {
  _e(T(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ds(e, t, n, o) {
  const r = o.includes(".") ? ns(n, o) : () => n[o];
  if (te(e)) {
    const s = t[e];
    $(s) ? Pt(r, s) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, s);
  } else if ($(e))
    Pt(r, e.bind(n));
  else if (z(e))
    if (T(e))
      e.forEach((s) => ds(s, t, n, o));
    else {
      const s = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(s) ? Pt(r, s, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function Ao(e) {
  const t = e.type, { mixins: n, extends: o } = t, { mixins: r, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, c = s.get(t);
  let a;
  return c ? a = c : !r.length && !n && !o ? a = t : (a = {}, r.length && r.forEach((f) => mn(a, f, i, !0)), mn(a, t, i)), z(t) && s.set(t, a), a;
}
function mn(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && mn(e, s, n, !0), r && r.forEach((i) => mn(e, i, n, !0));
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
  data: or,
  props: Ge,
  emits: Ge,
  methods: Ge,
  computed: Ge,
  beforeCreate: ae,
  created: ae,
  beforeMount: ae,
  mounted: ae,
  beforeUpdate: ae,
  updated: ae,
  beforeDestroy: ae,
  beforeUnmount: ae,
  destroyed: ae,
  unmounted: ae,
  activated: ae,
  deactivated: ae,
  errorCaptured: ae,
  serverPrefetch: ae,
  components: Ge,
  directives: Ge,
  watch: Dl,
  provide: or,
  inject: xl
};
function or(e, t) {
  return t ? e ? function() {
    return Y($(e) ? e.call(this, this) : e, $(t) ? t.call(this, this) : t);
  } : t : e;
}
function xl(e, t) {
  return Ge(lo(e), lo(t));
}
function lo(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ae(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ge(e, t) {
  return e ? Y(Y(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function Dl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = Y(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ae(e[o], t[o]);
  return n;
}
function Vl(e, t, n, o = !1) {
  const r = {}, s = {};
  fn(s, Fn, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), ps(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  process.env.NODE_ENV !== "production" && ms(t || {}, r, e), n ? e.props = o ? r : vi(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function Cl(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Tl(e, t, n, o) {
  const { props: r, attrs: s, vnode: { patchFlag: i } } = e, c = A(r), [a] = e.propsOptions;
  let f = !1;
  if (!(process.env.NODE_ENV !== "production" && Cl(e)) && (o || i > 0) && !(i & 16)) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let d = 0; d < p.length; d++) {
        let g = p[d];
        if (Vn(e.emitsOptions, g))
          continue;
        const w = t[g];
        if (a)
          if (Z(s, g))
            w !== s[g] && (s[g] = w, f = !0);
          else {
            const F = ze(g);
            r[F] = co(a, c, F, w, e, !1);
          }
        else
          w !== s[g] && (s[g] = w, f = !0);
      }
    }
  } else {
    ps(e, t, r, s) && (f = !0);
    let p;
    for (const d in c)
      (!t || !Z(t, d) && ((p = Ne(d)) === d || !Z(t, p))) && (a ? n && (n[d] !== void 0 || n[p] !== void 0) && (r[d] = co(a, c, d, void 0, e, !0)) : delete r[d]);
    if (s !== c)
      for (const d in s)
        (!t || !Z(t, d) && !0) && (delete s[d], f = !0);
  }
  f && Me(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && ms(t || {}, r, e);
}
function ps(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let a in t) {
      if (rn(a))
        continue;
      const f = t[a];
      let p;
      r && Z(r, p = ze(a)) ? !s || !s.includes(p) ? n[p] = f : (c || (c = {}))[p] = f : Vn(e.emitsOptions, a) || (!(a in o) || f !== o[a]) && (o[a] = f, i = !0);
    }
  if (s) {
    const a = A(n), f = c || B;
    for (let p = 0; p < s.length; p++) {
      const d = s[p];
      n[d] = co(r, a, d, f[d], e, !Z(f, d));
    }
  }
  return i;
}
function co(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const c = Z(i, "default");
    if (c && o === void 0) {
      const a = i.default;
      if (i.type !== Function && $(a)) {
        const { propsDefaults: f } = r;
        n in f ? o = f[n] : (xt(r), o = f[n] = a.call(null, t), ct());
      } else
        o = a;
    }
    i[0] && (s && !c ? o = !1 : i[1] && (o === "" || o === Ne(n)) && (o = !0));
  }
  return o;
}
function hs(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, c = [];
  let a = !1;
  if (!$(e)) {
    const p = (d) => {
      a = !0;
      const [g, w] = hs(d, t, !0);
      Y(i, g), w && c.push(...w);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!s && !a)
    return z(e) && o.set(e, Et), Et;
  if (T(s))
    for (let p = 0; p < s.length; p++) {
      process.env.NODE_ENV !== "production" && !te(s[p]) && y("props must be strings when using array syntax.", s[p]);
      const d = ze(s[p]);
      rr(d) && (i[d] = B);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !z(s) && y("invalid props options", s);
    for (const p in s) {
      const d = ze(p);
      if (rr(d)) {
        const g = s[p], w = i[d] = T(g) || $(g) ? { type: g } : g;
        if (w) {
          const F = ir(Boolean, w.type), C = ir(String, w.type);
          w[0] = F > -1, w[1] = C < 0 || F < C, (F > -1 || Z(w, "default")) && c.push(d);
        }
      }
    }
  }
  const f = [i, c];
  return z(e) && o.set(e, f), f;
}
function rr(e) {
  return e[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function ao(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function sr(e, t) {
  return ao(e) === ao(t);
}
function ir(e, t) {
  return T(t) ? t.findIndex((n) => sr(n, e)) : $(t) && sr(t, e) ? 0 : -1;
}
function ms(e, t, n) {
  const o = A(t), r = n.propsOptions[0];
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
      const a = T(r) ? r : [r], f = [];
      for (let p = 0; p < a.length && !c; p++) {
        const { valid: d, expectedType: g } = Al(t, a[p]);
        f.push(g || ""), c = d;
      }
      if (!c) {
        y(Fl(e, t, f));
        return;
      }
    }
    i && !i(t) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const $l = /* @__PURE__ */ Dt("String,Number,Boolean,Function,Symbol,BigInt");
function Al(e, t) {
  let n;
  const o = ao(t);
  if ($l(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = z(e) : o === "Array" ? n = T(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Fl(e, t, n) {
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(bn).join(" | ")}`;
  const r = n[0], s = bo(t), i = lr(t, r), c = lr(t, s);
  return n.length === 1 && cr(r) && !Zl(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, cr(s) && (o += `with value ${c}.`), o;
}
function lr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function cr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Zl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const gs = (e) => e[0] === "_" || e === "$stable", Fo = (e) => T(e) ? e.map(Ee) : [Ee(e)], Pl = (e, t, n) => {
  if (t._n)
    return t;
  const o = zi((...r) => (process.env.NODE_ENV !== "production" && G && y(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), Fo(t(...r))), n);
  return o._c = !1, o;
}, _s = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (gs(r))
      continue;
    const s = e[r];
    if ($(s))
      t[r] = Pl(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && y(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);
      const i = Fo(s);
      t[r] = () => i;
    }
  }
}, vs = (e, t) => {
  process.env.NODE_ENV !== "production" && !Yt(e.vnode) && y("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = Fo(t);
  e.slots.default = () => n;
}, Sl = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = A(t), fn(t, "_", n)) : _s(t, e.slots = {});
  } else
    e.slots = {}, t && vs(e, t);
  fn(e.slots, Fn, 1);
}, Ml = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = B;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? process.env.NODE_ENV !== "production" && lt ? Y(r, t) : n && c === 1 ? s = !1 : (Y(r, t), !n && c === 1 && delete r._) : (s = !t.$stable, _s(t, r)), i = t;
  } else
    t && (vs(e, t), i = { default: 1 });
  if (s)
    for (const c in r)
      !gs(c) && !(c in i) && delete r[c];
};
function Es() {
  return {
    app: null,
    config: {
      isNativeTag: yr,
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
let Rl = 0;
function jl(e, t) {
  return function(o, r = null) {
    $(o) || (o = Object.assign({}, o)), r != null && !z(r) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), r = null);
    const s = Es(), i = /* @__PURE__ */ new Set();
    let c = !1;
    const a = s.app = {
      _uid: Rl++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: dr,
      get config() {
        return s.config;
      },
      set config(f) {
        process.env.NODE_ENV !== "production" && y("app.config cannot be replaced. Modify individual options instead.");
      },
      use(f, ...p) {
        return i.has(f) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : f && $(f.install) ? (i.add(f), f.install(a, ...p)) : $(f) ? (i.add(f), f(a, ...p)) : process.env.NODE_ENV !== "production" && y('A plugin must either be a function or an object with an "install" function.'), a;
      },
      mixin(f) {
        return s.mixins.includes(f) ? process.env.NODE_ENV !== "production" && y("Mixin has already been applied to target app" + (f.name ? `: ${f.name}` : "")) : s.mixins.push(f), a;
      },
      component(f, p) {
        return process.env.NODE_ENV !== "production" && fo(f, s.config), p ? (process.env.NODE_ENV !== "production" && s.components[f] && y(`Component "${f}" has already been registered in target app.`), s.components[f] = p, a) : s.components[f];
      },
      directive(f, p) {
        return process.env.NODE_ENV !== "production" && cs(f), p ? (process.env.NODE_ENV !== "production" && s.directives[f] && y(`Directive "${f}" has already been registered in target app.`), s.directives[f] = p, a) : s.directives[f];
      },
      mount(f, p, d) {
        if (c)
          process.env.NODE_ENV !== "production" && y("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && f.__vue_app__ && y("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const g = ye(o, r);
          return g.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(Ie(g), f, d);
          }), p && t ? t(g, f) : e(g, f, d), c = !0, a._container = f, f.__vue_app__ = a, process.env.NODE_ENV !== "production" && (a._instance = g.component, Mi(a, dr)), Zn(g.component) || g.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, a._container), process.env.NODE_ENV !== "production" && (a._instance = null, Ri(a)), delete a._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(f, p) {
        return process.env.NODE_ENV !== "production" && f in s.provides && y(`App already provides property with key "${String(f)}". It will be overwritten with the new value.`), s.provides[f] = p, a;
      }
    };
    return a;
  };
}
function uo(e, t, n, o, r = !1) {
  if (T(e)) {
    e.forEach((g, w) => uo(g, t && (T(t) ? t[w] : t), n, o, r));
    return;
  }
  if (St(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? Zn(o.component) || o.component.proxy : o.el, i = r ? null : s, { i: c, r: a } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    y("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const f = t && t.r, p = c.refs === B ? c.refs = {} : c.refs, d = c.setupState;
  if (f != null && f !== a && (te(f) ? (p[f] = null, Z(d, f) && (d[f] = null)) : ee(f) && (f.value = null)), $(a))
    Pe(a, c, 12, [i, p]);
  else {
    const g = te(a), w = ee(a);
    if (g || w) {
      const F = () => {
        if (e.f) {
          const C = g ? p[a] : a.value;
          r ? T(C) && _o(C, s) : T(C) ? C.includes(s) || C.push(s) : g ? (p[a] = [s], Z(d, a) && (d[a] = p[a])) : (a.value = [s], e.k && (p[e.k] = a.value));
        } else
          g ? (p[a] = i, Z(d, a) && (d[a] = i)) : w ? (a.value = i, e.k && (p[e.k] = i)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (F.id = -1, pe(F, n)) : F();
    } else
      process.env.NODE_ENV !== "production" && y("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let It, Ue;
function Fe(e, t) {
  e.appContext.config.performance && gn() && Ue.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Li(e, t, gn() ? Ue.now() : Date.now());
}
function Ze(e, t) {
  if (e.appContext.config.performance && gn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Ue.mark(o), Ue.measure(`<${Pn(e, e.type)}> ${t}`, n, o), Ue.clearMarks(n), Ue.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Hi(e, t, gn() ? Ue.now() : Date.now());
}
function gn() {
  return It !== void 0 || (typeof window < "u" && window.performance ? (It = !0, Ue = window.performance) : It = !1), It;
}
function Bl() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const pe = el;
function Ll(e) {
  return Hl(e);
}
function Hl(e, t) {
  Bl();
  const n = Or();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Yr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: o, remove: r, patchProp: s, createElement: i, createText: c, createComment: a, setText: f, setElementText: p, parentNode: d, nextSibling: g, setScopeId: w = oe, insertStaticContent: F } = e, C = (l, u, h, _ = null, m = null, b = null, O = !1, E = null, N = process.env.NODE_ENV !== "production" && lt ? !1 : !!u.dynamicChildren) => {
    if (l === u)
      return;
    l && !tt(l, u) && (_ = Qt(l), Le(l, m, b, !0), l = null), u.patchFlag === -2 && (N = !1, u.dynamicChildren = null);
    const { type: v, ref: D, shapeFlag: x } = u;
    switch (v) {
      case $n:
        W(l, u, h, _);
        break;
      case le:
        L(l, u, h, _);
        break;
      case Mt:
        l == null ? j(u, h, _, O) : process.env.NODE_ENV !== "production" && q(l, u, h, O);
        break;
      case me:
        $e(l, u, h, _, m, b, O, E, N);
        break;
      default:
        x & 1 ? je(l, u, h, _, m, b, O, E, N) : x & 6 ? Xt(l, u, h, _, m, b, O, E, N) : x & 64 || x & 128 ? v.process(l, u, h, _, m, b, O, E, N, ht) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", v, `(${typeof v})`);
    }
    D != null && m && uo(D, l && l.ref, b, u || l, !u);
  }, W = (l, u, h, _) => {
    if (l == null)
      o(u.el = c(u.children), h, _);
    else {
      const m = u.el = l.el;
      u.children !== l.children && f(m, u.children);
    }
  }, L = (l, u, h, _) => {
    l == null ? o(u.el = a(u.children || ""), h, _) : u.el = l.el;
  }, j = (l, u, h, _) => {
    [l.el, l.anchor] = F(l.children, u, h, _, l.el, l.anchor);
  }, q = (l, u, h, _) => {
    if (u.children !== l.children) {
      const m = g(l.anchor);
      K(l), [u.el, u.anchor] = F(u.children, h, m, _);
    } else
      u.el = l.el, u.anchor = l.anchor;
  }, fe = ({ el: l, anchor: u }, h, _) => {
    let m;
    for (; l && l !== u; )
      m = g(l), o(l, h, _), l = m;
    o(u, h, _);
  }, K = ({ el: l, anchor: u }) => {
    let h;
    for (; l && l !== u; )
      h = g(l), r(l), l = h;
    r(u);
  }, je = (l, u, h, _, m, b, O, E, N) => {
    O = O || u.type === "svg", l == null ? Oe(u, h, _, m, b, O, E, N) : J(l, u, m, b, O, E, N);
  }, Oe = (l, u, h, _, m, b, O, E) => {
    let N, v;
    const { type: D, props: x, shapeFlag: V, transition: I, dirs: S } = l;
    if (N = l.el = i(l.type, b, x && x.is, x), V & 8 ? p(N, l.children) : V & 16 && U(l.children, N, null, _, m, b && D !== "foreignObject", O, E), S && Ye(l, null, _, "created"), x) {
      for (const H in x)
        H !== "value" && !rn(H) && s(N, H, null, x[H], b, l.children, _, m, Ae);
      "value" in x && s(N, "value", null, x.value), (v = x.onVnodeBeforeMount) && De(v, _, l);
    }
    P(N, l, l.scopeId, O, _), process.env.NODE_ENV !== "production" && (Object.defineProperty(N, "__vnode", {
      value: l,
      enumerable: !1
    }), Object.defineProperty(N, "__vueParentComponent", {
      value: _,
      enumerable: !1
    })), S && Ye(l, null, _, "beforeMount");
    const k = (!m || m && !m.pendingBranch) && I && !I.persisted;
    k && I.beforeEnter(N), o(N, u, h), ((v = x && x.onVnodeMounted) || k || S) && pe(() => {
      v && De(v, _, l), k && I.enter(N), S && Ye(l, null, _, "mounted");
    }, m);
  }, P = (l, u, h, _, m) => {
    if (h && w(l, h), _)
      for (let b = 0; b < _.length; b++)
        w(l, _[b]);
    if (m) {
      let b = m.subTree;
      if (process.env.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && (b = es(b.children) || b), u === b) {
        const O = m.vnode;
        P(l, O, O.scopeId, O.slotScopeIds, m.parent);
      }
    }
  }, U = (l, u, h, _, m, b, O, E, N = 0) => {
    for (let v = N; v < l.length; v++) {
      const D = l[v] = E ? We(l[v]) : Ee(l[v]);
      C(null, D, u, h, _, m, b, O, E);
    }
  }, J = (l, u, h, _, m, b, O) => {
    const E = u.el = l.el;
    let { patchFlag: N, dynamicChildren: v, dirs: D } = u;
    N |= l.patchFlag & 16;
    const x = l.props || B, V = u.props || B;
    let I;
    h && Xe(h, !1), (I = V.onVnodeBeforeUpdate) && De(I, h, u, l), D && Ye(u, l, h, "beforeUpdate"), h && Xe(h, !0), process.env.NODE_ENV !== "production" && lt && (N = 0, O = !1, v = null);
    const S = m && u.type !== "foreignObject";
    if (v ? (se(l.dynamicChildren, v, E, h, _, S, b), process.env.NODE_ENV !== "production" && h && h.type.__hmrId && cn(l, u)) : O || we(l, u, E, null, h, _, S, b, !1), N > 0) {
      if (N & 16)
        ne(E, u, x, V, h, _, m);
      else if (N & 2 && x.class !== V.class && s(E, "class", null, V.class, m), N & 4 && s(E, "style", x.style, V.style, m), N & 8) {
        const k = u.dynamicProps;
        for (let H = 0; H < k.length; H++) {
          const X = k[H], ve = x[X], mt = V[X];
          (mt !== ve || X === "value") && s(E, X, ve, mt, m, l.children, h, _, Ae);
        }
      }
      N & 1 && l.children !== u.children && p(E, u.children);
    } else
      !O && v == null && ne(E, u, x, V, h, _, m);
    ((I = V.onVnodeUpdated) || D) && pe(() => {
      I && De(I, h, u, l), D && Ye(u, l, h, "updated");
    }, _);
  }, se = (l, u, h, _, m, b, O) => {
    for (let E = 0; E < u.length; E++) {
      const N = l[E], v = u[E], D = N.el && (N.type === me || !tt(N, v) || N.shapeFlag & 70) ? d(N.el) : h;
      C(N, v, D, null, _, m, b, O, !0);
    }
  }, ne = (l, u, h, _, m, b, O) => {
    if (h !== _) {
      if (h !== B)
        for (const E in h)
          !rn(E) && !(E in _) && s(l, E, h[E], null, O, u.children, m, b, Ae);
      for (const E in _) {
        if (rn(E))
          continue;
        const N = _[E], v = h[E];
        N !== v && E !== "value" && s(l, E, v, N, O, u.children, m, b, Ae);
      }
      "value" in _ && s(l, "value", h.value, _.value);
    }
  }, $e = (l, u, h, _, m, b, O, E, N) => {
    const v = u.el = l ? l.el : c(""), D = u.anchor = l ? l.anchor : c("");
    let { patchFlag: x, dynamicChildren: V, slotScopeIds: I } = u;
    process.env.NODE_ENV !== "production" && (lt || x & 2048) && (x = 0, N = !1, V = null), I && (E = E ? E.concat(I) : I), l == null ? (o(v, h, _), o(D, h, _), U(u.children, h, D, m, b, O, E, N)) : x > 0 && x & 64 && V && l.dynamicChildren ? (se(l.dynamicChildren, V, h, m, b, O, E), process.env.NODE_ENV !== "production" && m && m.type.__hmrId ? cn(l, u) : (u.key != null || m && u === m.subTree) && cn(l, u, !0)) : we(l, u, h, D, m, b, O, E, N);
  }, Xt = (l, u, h, _, m, b, O, E, N) => {
    u.slotScopeIds = E, l == null ? u.shapeFlag & 512 ? m.ctx.activate(u, h, _, O, N) : Be(u, h, _, m, b, O, N) : de(l, u, N);
  }, Be = (l, u, h, _, m, b, O) => {
    const E = l.component = ec(l, _, m);
    if (process.env.NODE_ENV !== "production" && E.type.__hmrId && Fi(E), process.env.NODE_ENV !== "production" && (sn(l), Fe(E, "mount")), Yt(l) && (E.ctx.renderer = ht), process.env.NODE_ENV !== "production" && Fe(E, "init"), oc(E), process.env.NODE_ENV !== "production" && Ze(E, "init"), E.asyncDep) {
      if (m && m.registerDep(E, M), !l.el) {
        const N = E.subTree = ye(le);
        L(null, N, u, h);
      }
      return;
    }
    M(E, l, u, h, m, b, O), process.env.NODE_ENV !== "production" && (ln(), Ze(E, "mount"));
  }, de = (l, u, h) => {
    const _ = u.component = l.component;
    if (Xi(l, u, h))
      if (_.asyncDep && !_.asyncResolved) {
        process.env.NODE_ENV !== "production" && sn(u), R(_, u, h), process.env.NODE_ENV !== "production" && ln();
        return;
      } else
        _.next = u, $i(_.update), _.update();
    else
      u.el = l.el, _.vnode = u;
  }, M = (l, u, h, _, m, b, O) => {
    const E = () => {
      if (l.isMounted) {
        let { next: D, bu: x, u: V, parent: I, vnode: S } = l, k = D, H;
        process.env.NODE_ENV !== "production" && sn(D || l.vnode), Xe(l, !1), D ? (D.el = S.el, R(l, D, O)) : D = S, x && Tt(x), (H = D.props && D.props.onVnodeBeforeUpdate) && De(H, I, D, S), Xe(l, !0), process.env.NODE_ENV !== "production" && Fe(l, "render");
        const X = Hn(l);
        process.env.NODE_ENV !== "production" && Ze(l, "render");
        const ve = l.subTree;
        l.subTree = X, process.env.NODE_ENV !== "production" && Fe(l, "patch"), C(
          ve,
          X,
          d(ve.el),
          Qt(ve),
          l,
          m,
          b
        ), process.env.NODE_ENV !== "production" && Ze(l, "patch"), D.el = X.el, k === null && Qi(l, X.el), V && pe(V, m), (H = D.props && D.props.onVnodeUpdated) && pe(() => De(H, I, D, S), m), process.env.NODE_ENV !== "production" && Xr(l), process.env.NODE_ENV !== "production" && ln();
      } else {
        let D;
        const { el: x, props: V } = u, { bm: I, m: S, parent: k } = l, H = St(u);
        if (Xe(l, !1), I && Tt(I), !H && (D = V && V.onVnodeBeforeMount) && De(D, k, u), Xe(l, !0), x && Bn) {
          const X = () => {
            process.env.NODE_ENV !== "production" && Fe(l, "render"), l.subTree = Hn(l), process.env.NODE_ENV !== "production" && Ze(l, "render"), process.env.NODE_ENV !== "production" && Fe(l, "hydrate"), Bn(x, l.subTree, l, m, null), process.env.NODE_ENV !== "production" && Ze(l, "hydrate");
          };
          H ? u.type.__asyncLoader().then(
            () => !l.isUnmounted && X()
          ) : X();
        } else {
          process.env.NODE_ENV !== "production" && Fe(l, "render");
          const X = l.subTree = Hn(l);
          process.env.NODE_ENV !== "production" && Ze(l, "render"), process.env.NODE_ENV !== "production" && Fe(l, "patch"), C(null, X, h, _, l, m, b), process.env.NODE_ENV !== "production" && Ze(l, "patch"), u.el = X.el;
        }
        if (S && pe(S, m), !H && (D = V && V.onVnodeMounted)) {
          const X = u;
          pe(() => De(D, k, X), m);
        }
        (u.shapeFlag & 256 || k && St(k.vnode) && k.vnode.shapeFlag & 256) && l.a && pe(l.a, m), l.isMounted = !0, process.env.NODE_ENV !== "production" && ji(l), u = h = _ = null;
      }
    }, N = l.effect = new yo(
      E,
      () => Dn(v),
      l.scope
    ), v = l.update = () => N.run();
    v.id = l.uid, Xe(l, !0), process.env.NODE_ENV !== "production" && (N.onTrack = l.rtc ? (D) => Tt(l.rtc, D) : void 0, N.onTrigger = l.rtg ? (D) => Tt(l.rtg, D) : void 0, v.ownerInstance = l), v();
  }, R = (l, u, h) => {
    u.component = l;
    const _ = l.vnode.props;
    l.vnode = u, l.next = null, Tl(l, u.props, _, h), Ml(l, u.children, h), ft(), Yo(), dt();
  }, we = (l, u, h, _, m, b, O, E, N = !1) => {
    const v = l && l.children, D = l ? l.shapeFlag : 0, x = u.children, { patchFlag: V, shapeFlag: I } = u;
    if (V > 0) {
      if (V & 128) {
        Vt(v, x, h, _, m, b, O, E, N);
        return;
      } else if (V & 256) {
        Mn(v, x, h, _, m, b, O, E, N);
        return;
      }
    }
    I & 8 ? (D & 16 && Ae(v, m, b), x !== v && p(h, x)) : D & 16 ? I & 16 ? Vt(v, x, h, _, m, b, O, E, N) : Ae(v, m, b, !0) : (D & 8 && p(h, ""), I & 16 && U(x, h, _, m, b, O, E, N));
  }, Mn = (l, u, h, _, m, b, O, E, N) => {
    l = l || Et, u = u || Et;
    const v = l.length, D = u.length, x = Math.min(v, D);
    let V;
    for (V = 0; V < x; V++) {
      const I = u[V] = N ? We(u[V]) : Ee(u[V]);
      C(l[V], I, h, null, m, b, O, E, N);
    }
    v > D ? Ae(l, m, b, !0, !1, x) : U(u, h, _, m, b, O, E, N, x);
  }, Vt = (l, u, h, _, m, b, O, E, N) => {
    let v = 0;
    const D = u.length;
    let x = l.length - 1, V = D - 1;
    for (; v <= x && v <= V; ) {
      const I = l[v], S = u[v] = N ? We(u[v]) : Ee(u[v]);
      if (tt(I, S))
        C(I, S, h, null, m, b, O, E, N);
      else
        break;
      v++;
    }
    for (; v <= x && v <= V; ) {
      const I = l[x], S = u[V] = N ? We(u[V]) : Ee(u[V]);
      if (tt(I, S))
        C(I, S, h, null, m, b, O, E, N);
      else
        break;
      x--, V--;
    }
    if (v > x) {
      if (v <= V) {
        const I = V + 1, S = I < D ? u[I].el : _;
        for (; v <= V; )
          C(null, u[v] = N ? We(u[v]) : Ee(u[v]), h, S, m, b, O, E, N), v++;
      }
    } else if (v > V)
      for (; v <= x; )
        Le(l[v], m, b, !0), v++;
    else {
      const I = v, S = v, k = /* @__PURE__ */ new Map();
      for (v = S; v <= V; v++) {
        const ce = u[v] = N ? We(u[v]) : Ee(u[v]);
        ce.key != null && (process.env.NODE_ENV !== "production" && k.has(ce.key) && y("Duplicate keys found during update:", JSON.stringify(ce.key), "Make sure keys are unique."), k.set(ce.key, v));
      }
      let H, X = 0;
      const ve = V - S + 1;
      let mt = !1, jo = 0;
      const Ct = new Array(ve);
      for (v = 0; v < ve; v++)
        Ct[v] = 0;
      for (v = I; v <= x; v++) {
        const ce = l[v];
        if (X >= ve) {
          Le(ce, m, b, !0);
          continue;
        }
        let xe;
        if (ce.key != null)
          xe = k.get(ce.key);
        else
          for (H = S; H <= V; H++)
            if (Ct[H - S] === 0 && tt(ce, u[H])) {
              xe = H;
              break;
            }
        xe === void 0 ? Le(ce, m, b, !0) : (Ct[xe - S] = v + 1, xe >= jo ? jo = xe : mt = !0, C(ce, u[xe], h, null, m, b, O, E, N), X++);
      }
      const Bo = mt ? kl(Ct) : Et;
      for (H = Bo.length - 1, v = ve - 1; v >= 0; v--) {
        const ce = S + v, xe = u[ce], Lo = ce + 1 < D ? u[ce + 1].el : _;
        Ct[v] === 0 ? C(null, xe, h, Lo, m, b, O, E, N) : mt && (H < 0 || v !== Bo[H] ? pt(xe, h, Lo, 2) : H--);
      }
    }
  }, pt = (l, u, h, _, m = null) => {
    const { el: b, type: O, transition: E, children: N, shapeFlag: v } = l;
    if (v & 6) {
      pt(l.component.subTree, u, h, _);
      return;
    }
    if (v & 128) {
      l.suspense.move(u, h, _);
      return;
    }
    if (v & 64) {
      O.move(l, u, h, ht);
      return;
    }
    if (O === me) {
      o(b, u, h);
      for (let x = 0; x < N.length; x++)
        pt(N[x], u, h, _);
      o(l.anchor, u, h);
      return;
    }
    if (O === Mt) {
      fe(l, u, h);
      return;
    }
    if (_ !== 2 && v & 1 && E)
      if (_ === 0)
        E.beforeEnter(b), o(b, u, h), pe(() => E.enter(b), m);
      else {
        const { leave: x, delayLeave: V, afterLeave: I } = E, S = () => o(b, u, h), k = () => {
          x(b, () => {
            S(), I && I();
          });
        };
        V ? V(b, S, k) : k();
      }
    else
      o(b, u, h);
  }, Le = (l, u, h, _ = !1, m = !1) => {
    const { type: b, props: O, ref: E, children: N, dynamicChildren: v, shapeFlag: D, patchFlag: x, dirs: V } = l;
    if (E != null && uo(E, null, h, l, !0), D & 256) {
      u.ctx.deactivate(l);
      return;
    }
    const I = D & 1 && V, S = !St(l);
    let k;
    if (S && (k = O && O.onVnodeBeforeUnmount) && De(k, u, l), D & 6)
      Is(l.component, h, _);
    else {
      if (D & 128) {
        l.suspense.unmount(h, _);
        return;
      }
      I && Ye(l, null, u, "beforeUnmount"), D & 64 ? l.type.remove(l, u, h, m, ht, _) : v && (b !== me || x > 0 && x & 64) ? Ae(v, u, h, !1, !0) : (b === me && x & 384 || !m && D & 16) && Ae(N, u, h), _ && Rn(l);
    }
    (S && (k = O && O.onVnodeUnmounted) || I) && pe(() => {
      k && De(k, u, l), I && Ye(l, null, u, "unmounted");
    }, h);
  }, Rn = (l) => {
    const { type: u, el: h, anchor: _, transition: m } = l;
    if (u === me) {
      process.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && m && !m.persisted ? l.children.forEach((O) => {
        O.type === le ? r(O.el) : Rn(O);
      }) : Ts(h, _);
      return;
    }
    if (u === Mt) {
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
  }, Ts = (l, u) => {
    let h;
    for (; l !== u; )
      h = g(l), r(l), l = h;
    r(u);
  }, Is = (l, u, h) => {
    process.env.NODE_ENV !== "production" && l.type.__hmrId && Zi(l);
    const { bum: _, scope: m, update: b, subTree: O, um: E } = l;
    _ && Tt(_), m.stop(), b && (b.active = !1, Le(O, l, u, h)), E && pe(E, u), pe(() => {
      l.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), process.env.NODE_ENV !== "production" && Bi(l);
  }, Ae = (l, u, h, _ = !1, m = !1, b = 0) => {
    for (let O = b; O < l.length; O++)
      Le(l[O], u, h, _, m);
  }, Qt = (l) => l.shapeFlag & 6 ? Qt(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : g(l.anchor || l.el), Ro = (l, u, h) => {
    l == null ? u._vnode && Le(u._vnode, null, null, !0) : C(u._vnode || null, l, u, null, null, null, h), Yo(), zr(), u._vnode = l;
  }, ht = {
    p: C,
    um: Le,
    m: pt,
    r: Rn,
    mt: Be,
    mc: U,
    pc: we,
    pbc: se,
    n: Qt,
    o: e
  };
  let jn, Bn;
  return t && ([jn, Bn] = t(ht)), {
    render: Ro,
    hydrate: jn,
    createApp: jl(Ro, jn)
  };
}
function Xe({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function cn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (T(o) && T(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let c = r[s];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[s] = We(r[s]), c.el = i.el), n || cn(i, c)), process.env.NODE_ENV !== "production" && c.type === le && !c.el && (c.el = i.el);
    }
}
function kl(e) {
  const t = e.slice(), n = [0];
  let o, r, s, i, c;
  const a = e.length;
  for (o = 0; o < a; o++) {
    const f = e[o];
    if (f !== 0) {
      if (r = n[n.length - 1], e[r] < f) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        c = s + i >> 1, e[n[c]] < f ? s = c + 1 : i = c;
      f < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
const Wl = (e) => e.__isTeleport, me = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), $n = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), le = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), Mt = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), Rt = [];
let be = null;
function yt(e = !1) {
  Rt.push(be = e ? null : []);
}
function Ul() {
  Rt.pop(), be = Rt[Rt.length - 1] || null;
}
let Ut = 1;
function ar(e) {
  Ut += e;
}
function bs(e) {
  return e.dynamicChildren = Ut > 0 ? be || Et : null, Ul(), Ut > 0 && be && be.push(e), e;
}
function jt(e, t, n, o, r, s) {
  return bs(Q(e, t, n, o, r, s, !0));
}
function Kl(e, t, n, o, r) {
  return bs(ye(e, t, n, o, r, !0));
}
function An(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function tt(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && gt.has(t.type) ? !1 : e.type === t.type && e.key === t.key;
}
const zl = (...e) => ys(...e), Fn = "__vInternal", Ns = ({ key: e }) => e != null ? e : null, an = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? te(e) || ee(e) || $(e) ? { i: re, r: e, k: t, f: !!n } : e : null;
function Q(e, t = null, n = null, o = 0, r = null, s = e === me ? 0 : 1, i = !1, c = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ns(t),
    ref: t && an(t),
    scopeId: Cn,
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
  return c ? (Zo(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= te(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && y("VNode created with invalid key (NaN). VNode type:", a.type), Ut > 0 && !i && be && (a.patchFlag > 0 || s & 6) && a.patchFlag !== 32 && be.push(a), a;
}
const ye = process.env.NODE_ENV !== "production" ? zl : ys;
function ys(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === _l) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = le), An(e)) {
    const c = Ie(e, t, !0);
    return n && Zo(c, n), Ut > 0 && !s && be && (c.shapeFlag & 6 ? be[be.indexOf(e)] = c : be.push(c)), c.patchFlag |= -2, c;
  }
  if (Vs(e) && (e = e.__vccOpts), t) {
    t = ql(t);
    let { class: c, style: a } = t;
    c && !te(c) && (t.class = _n(c)), z(a) && (Gn(a) && !T(a) && (a = Y({}, a)), t.style = go(a));
  }
  const i = te(e) ? 1 : Gi(e) ? 128 : Wl(e) ? 64 : z(e) ? 4 : $(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Gn(e) && (e = A(e), y("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), Q(e, t, n, o, r, i, s, !0);
}
function ql(e) {
  return e ? Gn(e) || Fn in e ? Y({}, e) : e : null;
}
function Ie(e, t, n = !1) {
  const { props: o, ref: r, patchFlag: s, children: i } = e, c = t ? Xl(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Ns(c),
    ref: t && t.ref ? n && r ? T(r) ? r.concat(an(t)) : [r, an(t)] : an(t) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && T(i) ? i.map(Os) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== me ? s === -1 ? 16 : s | 16 : s,
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
function Os(e) {
  const t = Ie(e);
  return T(e.children) && (t.children = e.children.map(Os)), t;
}
function Jl(e = " ", t = 0) {
  return ye($n, null, e, t);
}
function Yl(e, t) {
  const n = ye(Mt, null, e);
  return n.staticCount = t, n;
}
function Ee(e) {
  return e == null || typeof e == "boolean" ? ye(le) : T(e) ? ye(
    me,
    null,
    e.slice()
  ) : typeof e == "object" ? We(e) : ye($n, null, String(e));
}
function We(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ie(e);
}
function Zo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (T(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Zo(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Fn in t) ? t._ctx = re : r === 3 && re && (re.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    $(t) ? (t = { default: t, _ctx: re }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Jl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Xl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = _n([t.class, o.class]));
      else if (r === "style")
        t.style = go([t.style, o.style]);
      else if (qt(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(T(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
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
const Ql = Es();
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
    scope: new Ws(!0),
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
    propsOptions: hs(o, r),
    emitsOptions: Gr(o, r),
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
  return process.env.NODE_ENV !== "production" ? s.ctx = vl(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Wi.bind(null, s), e.ce && e.ce(s), s;
}
let G = null;
const tc = () => G || re, xt = (e) => {
  G = e, e.scope.on();
}, ct = () => {
  G && G.scope.off(), G = null;
}, nc = /* @__PURE__ */ Dt("slot,component");
function fo(e, t) {
  const n = t.isNativeTag || yr;
  (nc(e) || n(e)) && y("Do not use built-in or reserved HTML elements as component id: " + e);
}
function ws(e) {
  return e.vnode.shapeFlag & 4;
}
let Kt = !1;
function oc(e, t = !1) {
  Kt = t;
  const { props: n, children: o } = e.vnode, r = ws(e);
  Vl(e, n, r, t), Sl(e, o);
  const s = r ? rc(e, t) : void 0;
  return Kt = !1, s;
}
function rc(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && fo(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        fo(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        cs(s[i]);
    }
    o.compilerOptions && sc() && y('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Mr(new Proxy(e.ctx, fs)), process.env.NODE_ENV !== "production" && El(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? ic(e) : null;
    xt(e), ft();
    const i = Pe(r, e, 0, [process.env.NODE_ENV !== "production" ? vt(e.props) : e.props, s]);
    if (dt(), ct(), Eo(i)) {
      if (i.then(ct, ct), t)
        return i.then((c) => {
          ur(e, c, t);
        }).catch((c) => {
          xn(c, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = o.name) !== null && n !== void 0 ? n : "Anonymous";
        y(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      ur(e, i, t);
  } else
    xs(e, t);
}
function ur(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : z(t) ? (process.env.NODE_ENV !== "production" && An(t) && y("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Br(t), process.env.NODE_ENV !== "production" && bl(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), xs(e, n);
}
let po;
const sc = () => !po;
function xs(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && po && !o.render) {
      const r = o.template || Ao(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && Fe(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: a } = o, f = Y(Y({
          isCustomElement: s,
          delimiters: c
        }, i), a);
        o.render = po(r, f), process.env.NODE_ENV !== "production" && Ze(e, "compile");
      }
    }
    e.render = o.render || oe;
  }
  xt(e), ft(), yl(e), dt(), ct(), process.env.NODE_ENV !== "production" && !o.render && e.render === oe && !t && (o.template ? y('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : y("Component is missing template or render function."));
}
function fr(e) {
  return new Proxy(e.attrs, process.env.NODE_ENV !== "production" ? {
    get(t, n) {
      return hn(), he(e, "get", "$attrs"), t[n];
    },
    set() {
      return y("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return y("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return he(e, "get", "$attrs"), t[n];
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
      return n || (n = fr(e));
    },
    get slots() {
      return vt(e.slots);
    },
    get emit() {
      return (o, ...r) => e.emit(o, ...r);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = fr(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Zn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Br(Mr(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in wt)
          return wt[n](e);
      }
    }));
}
const lc = /(?:^|[-_])(\w)/g, cc = (e) => e.replace(lc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ds(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Pn(e, t, n = !1) {
  let o = Ds(t);
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
function Vs(e) {
  return $(e) && "__vccOpts" in e;
}
const ac = (e, t) => Oi(e, t, Kt);
Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : "");
function Un(e) {
  return !!(e && e.__v_isShallow);
}
function uc() {
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
      ] : st(d) ? [
        "div",
        {},
        ["span", e, Un(d) ? "ShallowReactive" : "Reactive"],
        "<",
        c(d),
        `>${Je(d) ? " (readonly)" : ""}`
      ] : Je(d) ? [
        "div",
        {},
        ["span", e, Un(d) ? "ShallowReadonly" : "Readonly"],
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
    d.type.props && d.props && g.push(i("props", A(d.props))), d.setupState !== B && g.push(i("setup", d.setupState)), d.data !== B && g.push(i("data", A(d.data)));
    const w = a(d, "computed");
    w && g.push(i("computed", w));
    const F = a(d, "inject");
    return F && g.push(i("injected", F)), g.push([
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
    return g = Y({}, g), Object.keys(g).length ? [
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
        ...Object.keys(g).map((w) => [
          "div",
          {},
          ["span", o, w + ": "],
          c(g[w], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(d, g = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", o, d] : z(d) ? ["object", { object: g ? A(d) : d }] : ["span", n, String(d)];
  }
  function a(d, g) {
    const w = d.type;
    if ($(w))
      return;
    const F = {};
    for (const C in d.ctx)
      f(w, C, g) && (F[C] = d.ctx[C]);
    return F;
  }
  function f(d, g, w) {
    const F = d[w];
    if (T(F) && F.includes(g) || z(F) && g in F || d.extends && f(d.extends, g, w) || d.mixins && d.mixins.some((C) => f(C, g, w)))
      return !0;
  }
  function p(d) {
    return Un(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const dr = "3.2.40", fc = "http://www.w3.org/2000/svg", nt = typeof document < "u" ? document : null, pr = nt && /* @__PURE__ */ nt.createElement("template"), dc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t ? nt.createElementNS(fc, e) : nt.createElement(e, n ? { is: n } : void 0);
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
      pr.innerHTML = o ? `<svg>${e}</svg>` : e;
      const c = pr.content;
      if (o) {
        const a = c.firstChild;
        for (; a.firstChild; )
          c.appendChild(a.firstChild);
        c.removeChild(a);
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
      ho(o, s, n[s]);
    if (t && !te(t))
      for (const s in t)
        n[s] == null && ho(o, s, "");
  } else {
    const s = o.display;
    r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = s);
  }
}
const hr = /\s*!important$/;
function ho(e, t, n) {
  if (T(n))
    n.forEach((o) => ho(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = mc(e, t);
    hr.test(n) ? e.setProperty(Ne(o), n.replace(hr, ""), "important") : e[o] = n;
  }
}
const mr = ["Webkit", "Moz", "ms"], Kn = {};
function mc(e, t) {
  const n = Kn[t];
  if (n)
    return n;
  let o = ze(t);
  if (o !== "filter" && o in e)
    return Kn[t] = o;
  o = bn(o);
  for (let r = 0; r < mr.length; r++) {
    const s = mr[r] + o;
    if (s in e)
      return Kn[t] = s;
  }
  return t;
}
const gr = "http://www.w3.org/1999/xlink";
function gc(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(gr, t.slice(6, t.length)) : e.setAttributeNS(gr, t, n);
  else {
    const s = As(t);
    n == null || s && !Nr(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function _c(e, t, n, o, r, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    o && i(o, r, s), e[t] = n == null ? "" : n;
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const a = n == null ? "" : n;
    (e.value !== a || e.tagName === "OPTION") && (e.value = a), n == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = Nr(n) : n == null && a === "string" ? (n = "", c = !0) : a === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    process.env.NODE_ENV !== "production" && !c && y(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, a);
  }
  c && e.removeAttribute(t);
}
const [Cs, vc] = /* @__PURE__ */ (() => {
  let e = Date.now, t = !1;
  if (typeof window < "u") {
    Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53);
  }
  return [e, t];
})();
let mo = 0;
const Ec = /* @__PURE__ */ Promise.resolve(), bc = () => {
  mo = 0;
}, Nc = () => mo || (Ec.then(bc), mo = Cs());
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
    const [c, a] = xc(t);
    if (o) {
      const f = s[t] = Dc(o, r);
      yc(e, c, f, a);
    } else
      i && (Oc(e, c, i, a), s[t] = void 0);
  }
}
const _r = /(?:Once|Passive|Capture)$/;
function xc(e) {
  let t;
  if (_r.test(e)) {
    t = {};
    let o;
    for (; o = e.match(_r); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ne(e.slice(2)), t];
}
function Dc(e, t) {
  const n = (o) => {
    const r = o.timeStamp || Cs();
    (vc || r >= n.attached - 1) && _e(Vc(o, n.value), t, 5, [o]);
  };
  return n.value = e, n.attached = Nc(), n;
}
function Vc(e, t) {
  if (T(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((o) => (r) => !r._stopped && o && o(r));
  } else
    return t;
}
const vr = /^on[a-z]/, Cc = (e, t, n, o, r = !1, s, i, c, a) => {
  t === "class" ? pc(e, o, r) : t === "style" ? hc(e, n, o) : qt(t) ? un(t) || wc(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Tc(e, t, o, r)) ? _c(e, t, o, s, i, c, a) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), gc(e, t, o, r));
};
function Tc(e, t, n, o) {
  return o ? !!(t === "innerHTML" || t === "textContent" || t in e && vr.test(t) && $(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || vr.test(t) && te(n) ? !1 : t in e;
}
function Po(e, t) {
  const n = Tn(e);
  class o extends So {
    constructor(s) {
      super(n, s, t);
    }
  }
  return o.def = n, o;
}
const Ic = typeof HTMLElement < "u" ? HTMLElement : class {
};
class So extends Ic {
  constructor(t, n = {}, o) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && o ? o(this._createVNode(), this.shadowRoot) : (process.env.NODE_ENV !== "production" && this.shadowRoot && y("Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."), this.attachShadow({ mode: "open" }));
  }
  connectedCallback() {
    this._connected = !0, this._instance || this._resolveDef();
  }
  disconnectedCallback() {
    this._connected = !1, Wr(() => {
      this._connected || (br(null, this.shadowRoot), this._instance = null);
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
      let a;
      if (i)
        for (const f in this._props) {
          const p = r[f];
          (p === Number || p && p.type === Number) && (this._props[f] = zn(this._props[f]), (a || (a = /* @__PURE__ */ Object.create(null)))[f] = !0);
        }
      this._numberProps = a;
      for (const f of Object.keys(this))
        f[0] !== "_" && this._setProp(f, this[f], !0, !1);
      for (const f of c.map(ze))
        Object.defineProperty(this, f, {
          get() {
            return this._getProp(f);
          },
          set(p) {
            this._setProp(f, p);
          }
        });
      this._applyStyles(s), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then(t) : t(this._def);
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    this._numberProps && this._numberProps[t] && (n = zn(n)), this._setProp(ze(t), n, !1);
  }
  _getProp(t) {
    return this._props[t];
  }
  _setProp(t, n, o = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), o && (n === !0 ? this.setAttribute(Ne(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Ne(t), n + "") : n || this.removeAttribute(Ne(t))));
  }
  _update() {
    br(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = ye(this._def, Y({}, this._props));
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
        if (o instanceof So) {
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
sl.props;
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
}, Se = (e, t) => (n, ...o) => {
  for (let r = 0; r < t.length; r++) {
    const s = Fc[t[r]];
    if (s && s(n, t))
      return;
  }
  return e(n, ...o);
}, Zc = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : $t(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), $t(e, !0), o.enter(e)) : o.leave(e, () => {
      $t(e, !1);
    }) : $t(e, t));
  },
  beforeUnmount(e, { value: t }) {
    $t(e, t);
  }
};
function $t(e, t) {
  e.style.display = t ? e._vod : "none";
}
const Pc = /* @__PURE__ */ Y({ patchProp: Cc }, dc);
let Er;
function Sc() {
  return Er || (Er = Ll(Pc));
}
const br = (...e) => {
  Sc().render(...e);
};
function Mc() {
  uc();
}
process.env.NODE_ENV !== "production" && Mc();
var zt = function(e) {
  e === void 0 && (e = 0);
  var t = "", n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", o = String(JSON.parse(new Date().toJSON().replace(/-|T|Z|:|\./g, "")));
  Number(e) >= 1 && (t += String(Number(e) + 1));
  for (var r = 0; r < o.length; r++)
    t += n.charAt(Math.floor(Math.random() * n.length)), t += o.charAt(r);
  return t;
};
const Rc = { class: "dropZone" }, jc = ["id", "accept"], Bc = ["onDrop"], Lc = ["for"], Hc = /* @__PURE__ */ Yl('<svg width="10em" height="10em" viewBox="0 0 16 12" class="dropZoneImage" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-v-80aea37e><path fill-rule="evenodd" d="m 8.0274054,0.49415269 a 5.53,5.53 0 0 0 -3.594,1.34200001 c -0.766,0.66 -1.321,1.52 -1.464,2.383 -1.676,0.37 -2.94199993,1.83 -2.94199993,3.593 0,2.048 1.70799993,3.6820003 3.78099993,3.6820003 h 8.9059996 c 1.815,0 3.313,-1.43 3.313,-3.2270003 0,-1.636 -1.242,-2.969 -2.834,-3.194 -0.243,-2.58 -2.476,-4.57900001 -5.1659996,-4.57900001 z m 2.3539996,5.14600001 -1.9999996,-2 a 0.5,0.5 0 0 0 -0.708,0 l -2,2 a 0.5006316,0.5006316 0 1 0 0.708,0.708 l 1.146,-1.147 v 3.793 a 0.5,0.5 0 0 0 1,0 v -3.793 l 1.146,1.147 a 0.5006316,0.5006316 0 0 0 0.7079996,-0.708 z" data-v-80aea37e></path></svg><div class="dropZoneBody" data-v-80aea37e><p data-v-80aea37e><strong class="dropZoneTitle fg-inherit" data-v-80aea37e>Drag and drop files to upload</strong></p><p data-v-80aea37e><small class="dropZoneText" data-v-80aea37e>Your files will be added automatically</small></p><button type="button" class="button" data-v-80aea37e>or select files</button></div>', 2), kc = [
  Hc
], Wc = /* @__PURE__ */ Tn({
  __name: "DropZone",
  props: {
    modelValue: { default: [] },
    accept: { default: "*" },
    base64: { type: Boolean, default: !1 },
    uniqid: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "handler"],
  setup(e, { emit: t }) {
    const n = e, o = Ot(n.modelValue || []), r = Ot(null), s = zt(), i = (c) => {
      const a = c.target.files || c.dataTransfer.files || r.value.files;
      for (let f = 0; f < a.length; f++) {
        const p = a[f];
        if (n.uniqid && (p.uniqid = zt()), n.base64) {
          const d = new FileReader();
          d.onload = () => {
            p.base64 = d.result;
          }, d.readAsDataURL(p);
        }
        o.value.unshift(p);
      }
      t("update:modelValue", o.value), t("handler", o.value);
    };
    return (c, a) => (yt(), jt("div", Rc, [
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
        onDragenter: a[0] || (a[0] = Se(() => {
        }, ["prevent"])),
        onDragover: a[1] || (a[1] = Se(() => {
        }, ["prevent"])),
        onDrop: Se(i, ["prevent"])
      }, [
        Q("label", {
          for: "dropZoneFile-" + at(s),
          class: "dropZoneLabel"
        }, kc, 8, Lc)
      ], 40, Bc)
    ]));
  }
}), Uc = `.dropZone[data-v-80aea37e]{overflow-wrap:break-word;padding:.5rem;max-width:calc(100vw - .5rem);max-height:calc(100vh - .5rem)}.dropZone .dropZoneFile[data-v-80aea37e]{position:absolute;width:0px;height:0px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.dropZone .dropZoneWrap[data-v-80aea37e]{border-width:3px;border-style:dashed;border-color:currentColor;box-shadow:-1px 5px 25px -9px #0003}.dropZone .dropZoneWrap .dropZoneLabel[data-v-80aea37e]{display:grid;place-items:center;width:100%;height:100%;padding-top:1.5rem;padding-bottom:2.5rem;cursor:pointer}.dropZone .dropZoneWrap .dropZoneImage[data-v-80aea37e]{pointer-events:none;color:currentColor}.dropZone .dropZoneWrap .dropZoneBody[data-v-80aea37e]{text-align:center}.dropZone .dropZoneWrap .dropZoneBody p[data-v-80aea37e],.dropZone .dropZoneWrap .dropZoneBody span[data-v-80aea37e]{margin:0}.dropZone .dropZoneWrap .dropZoneBody .dropZoneTitle[data-v-80aea37e]{color:inherit}.dropZone .dropZoneWrap .dropZoneBody .dropZoneText[data-v-80aea37e]{color:#737373}.dropZone .dropZoneWrap .dropZoneBody .button[data-v-80aea37e]{background-color:transparent;display:inline-block;text-align:center;vertical-align:middle;pointer-events:none;font-size:1rem;line-height:1.5rem;font-weight:400;user-select:none;margin-top:1.25rem;border-radius:.35rem;color:currentColor;border:2px solid currentColor;padding:.375rem .75rem}.fg-inherit[data-v-80aea37e]{color:inherit!important}
`, Mo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Kc = /* @__PURE__ */ Mo(Wc, [["styles", [Uc]], ["__scopeId", "data-v-80aea37e"]]), Sn = (e) => (Ui("data-v-51c61893"), e = e(), Ki(), e), zc = { class: "dropZone tedirThumbnail" }, qc = ["id"], Jc = ["onDrop"], Yc = ["for"], Xc = ["src"], Qc = ["width", "height"], Gc = /* @__PURE__ */ Sn(() => /* @__PURE__ */ Q("path", { d: "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" }, null, -1)), ea = /* @__PURE__ */ Sn(() => /* @__PURE__ */ Q("path", { d: "M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" }, null, -1)), ta = [
  Gc,
  ea
], na = { class: "dropZoneBody" }, oa = /* @__PURE__ */ Sn(() => /* @__PURE__ */ Q("p", null, [
  /* @__PURE__ */ Q("strong", { class: "dropZoneTitle" }, "Drag and drop thumbnail")
], -1)), ra = /* @__PURE__ */ Sn(() => /* @__PURE__ */ Q("p", null, [
  /* @__PURE__ */ Q("small", { class: "dropZoneText" }, "Your thumbnail will be shown here")
], -1)), sa = {
  type: "button",
  class: "button"
}, ia = /* @__PURE__ */ Tn({
  __name: "ThumbBox",
  props: {
    modelValue: { default: "" },
    iconSize: { default: "10em" },
    showButton: { type: Boolean, default: !0 },
    type: { default: "both" }
  },
  emits: ["update:modelValue", "handler"],
  setup(e, { emit: t }) {
    const n = e, o = Ot(""), r = Ot(null), s = zt(), i = () => {
      var a, f;
      if (typeof n.modelValue == "string")
        o.value = n.modelValue;
      else if (typeof n.modelValue == "object" && ((a = n.modelValue) == null ? void 0 : a.base64))
        o.value = n.modelValue.base64;
      else if (typeof n.modelValue == "object" && ((f = n.modelValue) == null ? void 0 : f.name)) {
        const p = new FileReader();
        p.onload = function() {
          const d = p.result;
          o.value = String(d);
        }, p.readAsDataURL(n.modelValue);
      }
    };
    Io(i), Pt(() => n.modelValue, i);
    const c = (a) => {
      const f = a.target.files || a.dataTransfer.files || r.value.files;
      for (let p = 0; p < f.length; p++) {
        const d = f[p], g = new FileReader();
        g.onload = () => {
          const w = g.result;
          n.type === "base64" ? (o.value = String(w), t("update:modelValue", w), t("handler", w)) : n.type === "file" ? (o.value = String(w), t("update:modelValue", d), t("handler", d)) : (d.base64 = w, o.value = String(d.base64), t("update:modelValue", d), t("handler", d));
        }, g.readAsDataURL(d);
      }
    };
    return (a, f) => (yt(), jt("div", zc, [
      Q("input", {
        type: "file",
        id: "dropZoneThumbnail-" + at(s),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: r,
        onChange: c,
        accept: "image/*"
      }, null, 40, qc),
      Q("div", {
        class: "dropZoneWrap",
        onDragenter: f[0] || (f[0] = Se(() => {
        }, ["prevent"])),
        onDragover: f[1] || (f[1] = Se(() => {
        }, ["prevent"])),
        onDrop: Se(c, ["prevent"])
      }, [
        Q("label", {
          for: "dropZoneThumbnail-" + at(s),
          class: _n(["dropZoneLabel", o.value ? "tedirThumbnailLabel" : ""])
        }, [
          o.value ? (yt(), jt("img", {
            key: 0,
            src: o.value,
            class: "tedirThumbnailImage",
            alt: "Thumbnail"
          }, null, 8, Xc)) : as(a.$slots, "default", { key: 1 }, () => [
            (yt(), jt("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: e.iconSize,
              height: e.iconSize,
              fill: "currentColor",
              class: "dropZoneImage my-10px",
              viewBox: "0 0 16 16"
            }, ta, 8, Qc)),
            Q("div", na, [
              oa,
              ra,
              gl(Q("button", sa, "or select thumbnail", 512), [
                [Zc, e.showButton]
              ])
            ])
          ], !0)
        ], 10, Yc)
      ], 40, Jc)
    ]));
  }
}), la = `.dropZone[data-v-51c61893]{overflow-wrap:break-word;padding:.5rem;max-width:calc(100vw - .5rem);max-height:calc(100vh - .5rem)}.dropZone .dropZoneFile[data-v-51c61893]{position:absolute;width:0px;height:0px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.dropZone .dropZoneWrap[data-v-51c61893]{border-width:3px;border-style:dashed;border-color:currentColor;box-shadow:-1px 5px 25px -9px #0003}.dropZone .dropZoneWrap .dropZoneLabel[data-v-51c61893]{display:grid;place-items:center;width:100%;height:100%;padding-top:1.5rem;padding-bottom:2.5rem;cursor:pointer}.dropZone .dropZoneWrap .dropZoneImage[data-v-51c61893]{pointer-events:none;color:currentColor}.dropZone .dropZoneWrap .dropZoneBody[data-v-51c61893]{text-align:center}.dropZone .dropZoneWrap .dropZoneBody p[data-v-51c61893],.dropZone .dropZoneWrap .dropZoneBody span[data-v-51c61893]{margin:0}.dropZone .dropZoneWrap .dropZoneBody .dropZoneTitle[data-v-51c61893]{color:inherit}.dropZone .dropZoneWrap .dropZoneBody .dropZoneText[data-v-51c61893]{color:#737373}.dropZone .dropZoneWrap .dropZoneBody .button[data-v-51c61893]{background-color:transparent;display:inline-block;text-align:center;vertical-align:middle;pointer-events:none;font-size:1rem;line-height:1.5rem;font-weight:400;user-select:none;margin-top:1.25rem;border-radius:.35rem;color:currentColor;border:2px solid currentColor;padding:.375rem .75rem}.tedirThumbnail .dropZoneWrap label.tedirThumbnailLabel[data-v-51c61893]{padding-top:0;padding-bottom:0}.tedirThumbnail .dropZoneWrap .dropZoneBody p .dropZoneTitle[data-v-51c61893]{color:inherit}.tedirThumbnailImage[data-v-51c61893]{object-fit:fill;width:100%}
`, ca = /* @__PURE__ */ Mo(ia, [["styles", [la]], ["__scopeId", "data-v-51c61893"]]), aa = { class: "dropZone tedirAttach" }, ua = ["id", "multiple", "accept"], fa = ["onDrop"], da = ["for"], pa = /* @__PURE__ */ Tn({
  __name: "AttachBox",
  props: {
    modelValue: { default: [] },
    accept: { default: "*" },
    base64: { type: Boolean, default: !1 },
    uniqid: { type: Boolean, default: !1 },
    multiple: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "handler"],
  setup(e, { emit: t }) {
    const n = e, o = Ot(n.modelValue || []), r = Ot(null), s = zt();
    Pt(() => n.modelValue, () => {
      o.value = n.modelValue;
    });
    const i = (c) => {
      const a = c.target.files || c.dataTransfer.files || r.value.files;
      for (let f = 0; f < a.length; f++) {
        const p = a[f];
        if (n.uniqid && (p.uniqid = zt()), n.base64) {
          const d = new FileReader();
          d.onload = () => {
            p.base64 = d.result;
          }, d.readAsDataURL(p);
        }
        o.value.unshift(p);
      }
      t("update:modelValue", o.value), t("handler", o.value);
    };
    return (c, a) => (yt(), jt("div", aa, [
      Q("input", {
        type: "file",
        id: "dropZoneFile-" + at(s),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: r,
        onChange: i,
        multiple: e.multiple,
        accept: e.accept
      }, null, 40, ua),
      Q("div", {
        class: "dropZoneWrap",
        onDragenter: a[0] || (a[0] = Se(() => {
        }, ["prevent"])),
        onDragover: a[1] || (a[1] = Se(() => {
        }, ["prevent"])),
        onDrop: Se(i, ["prevent"])
      }, [
        Q("label", {
          for: "dropZoneFile-" + at(s),
          class: "dropZoneLabel tedirAttachLabel"
        }, [
          as(c.$slots, "default", {}, void 0, !0)
        ], 8, da)
      ], 40, fa)
    ]));
  }
}), ha = `.dropZone[data-v-6e404a6d]{overflow-wrap:break-word;padding:.5rem;max-width:calc(100vw - .5rem);max-height:calc(100vh - .5rem)}.dropZone .dropZoneFile[data-v-6e404a6d]{position:absolute;width:0px;height:0px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.dropZone .dropZoneWrap[data-v-6e404a6d]{border-width:3px;border-style:dashed;border-color:currentColor;box-shadow:-1px 5px 25px -9px #0003}.dropZone .dropZoneWrap .dropZoneLabel[data-v-6e404a6d]{display:grid;place-items:center;width:100%;height:100%;padding-top:1.5rem;padding-bottom:2.5rem;cursor:pointer}.dropZone .dropZoneWrap .dropZoneImage[data-v-6e404a6d]{pointer-events:none;color:currentColor}.dropZone .dropZoneWrap .dropZoneBody[data-v-6e404a6d]{text-align:center}.dropZone .dropZoneWrap .dropZoneBody p[data-v-6e404a6d],.dropZone .dropZoneWrap .dropZoneBody span[data-v-6e404a6d]{margin:0}.dropZone .dropZoneWrap .dropZoneBody .dropZoneTitle[data-v-6e404a6d]{color:inherit}.dropZone .dropZoneWrap .dropZoneBody .dropZoneText[data-v-6e404a6d]{color:#737373}.dropZone .dropZoneWrap .dropZoneBody .button[data-v-6e404a6d]{background-color:transparent;display:inline-block;text-align:center;vertical-align:middle;pointer-events:none;font-size:1rem;line-height:1.5rem;font-weight:400;user-select:none;margin-top:1.25rem;border-radius:.35rem;color:currentColor;border:2px solid currentColor;padding:.375rem .75rem}.tedirAttach[data-v-6e404a6d]{padding:0;max-width:none;max-height:none;display:inline-grid}.tedirAttach .dropZoneWrap[data-v-6e404a6d]{border:none;box-shadow:none}.tedirAttach .dropZoneWrap label.tedirAttachLabel[data-v-6e404a6d]{display:inline-grid;padding:0}
`, ma = /* @__PURE__ */ Mo(pa, [["styles", [ha]], ["__scopeId", "data-v-6e404a6d"]]), ga = Po(Kc), _a = Po(ca), va = Po(ma);
function Ea() {
  customElements.define("drop-zone", ga), customElements.define("thumb-box", _a), customElements.define("attach-box", va);
}
export {
  va as AttachBox,
  ga as DropZone,
  _a as ThumbBox,
  Ea as useTedirDropZone
};

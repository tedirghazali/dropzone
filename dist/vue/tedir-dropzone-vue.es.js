import { defineComponent as V, ref as v, openBlock as g, createElementBlock as b, createElementVNode as s, unref as _, withModifiers as p, createStaticVNode as B, normalizeClass as S, renderSlot as F, withDirectives as x, vShow as T, pushScopeId as I, popScopeId as $, watch as A } from "vue";
var Z = function(o) {
  o === void 0 && (o = 0);
  var a = "", e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", t = String(JSON.parse(new Date().toJSON().replace(/-|T|Z|:|\./g, "")));
  Number(o) >= 1 && (a += String(Number(o) + 1));
  for (var d = 0; d < t.length; d++)
    a += e.charAt(Math.floor(Math.random() * e.length)), a += t.charAt(d);
  return a;
};
const q = { class: "dropZone" }, L = ["id", "accept"], z = ["onDrop"], k = ["for"], R = /* @__PURE__ */ B('<svg width="10em" height="10em" viewBox="0 0 16 12" class="dropZoneImage" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-v-80aea37e><path fill-rule="evenodd" d="m 8.0274054,0.49415269 a 5.53,5.53 0 0 0 -3.594,1.34200001 c -0.766,0.66 -1.321,1.52 -1.464,2.383 -1.676,0.37 -2.94199993,1.83 -2.94199993,3.593 0,2.048 1.70799993,3.6820003 3.78099993,3.6820003 h 8.9059996 c 1.815,0 3.313,-1.43 3.313,-3.2270003 0,-1.636 -1.242,-2.969 -2.834,-3.194 -0.243,-2.58 -2.476,-4.57900001 -5.1659996,-4.57900001 z m 2.3539996,5.14600001 -1.9999996,-2 a 0.5,0.5 0 0 0 -0.708,0 l -2,2 a 0.5006316,0.5006316 0 1 0 0.708,0.708 l 1.146,-1.147 v 3.793 a 0.5,0.5 0 0 0 1,0 v -3.793 l 1.146,1.147 a 0.5006316,0.5006316 0 0 0 0.7079996,-0.708 z" data-v-80aea37e></path></svg><div class="dropZoneBody" data-v-80aea37e><p data-v-80aea37e><strong class="dropZoneTitle fg-inherit" data-v-80aea37e>Drag and drop files to upload</strong></p><p data-v-80aea37e><small class="dropZoneText" data-v-80aea37e>Your files will be added automatically</small></p><button type="button" class="button" data-v-80aea37e>or select files</button></div>', 2), C = [
  R
], E = /* @__PURE__ */ V({
  __name: "DropZone",
  props: {
    modelValue: { default: [] },
    accept: { default: "*" },
    base64: { type: Boolean, default: !1 },
    uniqid: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "handler"],
  setup(o, { emit: a }) {
    const e = o, t = v(e.modelValue || []), d = v(null), c = Z(), f = (i) => {
      const n = i.target.files || i.dataTransfer.files || d.value.files;
      for (let r = 0; r < n.length; r++) {
        const l = n[r];
        if (e.uniqid && (l.uniqid = Z()), e.base64) {
          const u = new FileReader();
          u.onload = () => {
            l.base64 = u.result;
          }, u.readAsDataURL(l);
        }
        t.value.unshift(l);
      }
      a("update:modelValue", t.value), a("handler", t.value);
    };
    return (i, n) => (g(), b("div", q, [
      s("input", {
        type: "file",
        id: "dropZoneFile-" + _(c),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: d,
        onChange: f,
        multiple: "",
        accept: o.accept
      }, null, 40, L),
      s("div", {
        class: "dropZoneWrap",
        onDragenter: n[0] || (n[0] = p(() => {
        }, ["prevent"])),
        onDragover: n[1] || (n[1] = p(() => {
        }, ["prevent"])),
        onDrop: p(f, ["prevent"])
      }, [
        s("label", {
          for: "dropZoneFile-" + _(c),
          class: "dropZoneLabel"
        }, C, 8, k)
      ], 40, z)
    ]));
  }
});
const D = (o, a) => {
  const e = o.__vccOpts || o;
  for (const [t, d] of a)
    e[t] = d;
  return e;
}, se = /* @__PURE__ */ D(E, [["__scopeId", "data-v-80aea37e"]]), y = (o) => (I("data-v-501ca2f3"), o = o(), $(), o), N = { class: "dropZone tedirThumbnail" }, M = ["id"], U = ["onDrop"], O = ["for"], W = ["src"], j = ["width", "height"], J = /* @__PURE__ */ y(() => /* @__PURE__ */ s("path", { d: "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" }, null, -1)), Y = /* @__PURE__ */ y(() => /* @__PURE__ */ s("path", { d: "M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" }, null, -1)), G = [
  J,
  Y
], H = { class: "dropZoneBody" }, K = /* @__PURE__ */ y(() => /* @__PURE__ */ s("p", null, [
  /* @__PURE__ */ s("strong", { class: "dropZoneTitle" }, "Drag and drop thumbnail")
], -1)), P = /* @__PURE__ */ y(() => /* @__PURE__ */ s("p", null, [
  /* @__PURE__ */ s("small", { class: "dropZoneText" }, "Your thumbnail will be shown here")
], -1)), Q = {
  type: "button",
  class: "button"
}, X = /* @__PURE__ */ V({
  __name: "ThumbBox",
  props: {
    modelValue: { default: "" },
    iconSize: { default: "10em" },
    showButton: { type: Boolean, default: !0 },
    type: { default: "both" }
  },
  emits: ["update:modelValue", "handler"],
  setup(o, { emit: a }) {
    var i, n;
    const e = o, t = v(""), d = v(null), c = Z();
    if (typeof e.modelValue == "string")
      t.value = e.modelValue;
    else if (typeof e.modelValue == "object" && ((i = e.modelValue) == null ? void 0 : i.base64))
      t.value = e.modelValue.base64;
    else if (typeof e.modelValue == "object" && ((n = e.modelValue) == null ? void 0 : n.name)) {
      const r = new FileReader();
      r.onload = function() {
        const l = r.result;
        t.value = String(l);
      }, r.readAsDataURL(e.modelValue);
    }
    const f = (r) => {
      const l = r.target.files || r.dataTransfer.files || d.value.files;
      for (let u = 0; u < l.length; u++) {
        const h = l[u], w = new FileReader();
        w.onload = () => {
          const m = w.result;
          e.type === "base64" ? (t.value = String(m), a("update:modelValue", m), a("handler", m)) : e.type === "file" ? (t.value = String(m), a("update:modelValue", h), a("handler", h)) : (h.base64 = m, t.value = String(h.base64), a("update:modelValue", h), a("handler", h));
        }, w.readAsDataURL(h);
      }
    };
    return (r, l) => (g(), b("div", N, [
      s("input", {
        type: "file",
        id: "dropZoneThumbnail-" + _(c),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: d,
        onChange: f,
        accept: "image/*"
      }, null, 40, M),
      s("div", {
        class: "dropZoneWrap",
        onDragenter: l[0] || (l[0] = p(() => {
        }, ["prevent"])),
        onDragover: l[1] || (l[1] = p(() => {
        }, ["prevent"])),
        onDrop: p(f, ["prevent"])
      }, [
        s("label", {
          for: "dropZoneThumbnail-" + _(c),
          class: S(["dropZoneLabel", t.value ? "tedirThumbnailLabel" : ""])
        }, [
          t.value ? (g(), b("img", {
            key: 0,
            src: t.value,
            class: "tedirThumbnailImage",
            alt: "Thumbnail"
          }, null, 8, W)) : F(r.$slots, "default", { key: 1 }, () => [
            (g(), b("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: o.iconSize,
              height: o.iconSize,
              fill: "currentColor",
              class: "dropZoneImage my-10px",
              viewBox: "0 0 16 16"
            }, G, 8, j)),
            s("div", H, [
              K,
              P,
              x(s("button", Q, "or select thumbnail", 512), [
                [T, o.showButton]
              ])
            ])
          ], !0)
        ], 10, O)
      ], 40, U)
    ]));
  }
});
const re = /* @__PURE__ */ D(X, [["__scopeId", "data-v-501ca2f3"]]), ee = { class: "dropZone tedirAttach" }, oe = ["id", "multiple", "accept"], te = ["onDrop"], ae = ["for"], le = /* @__PURE__ */ V({
  __name: "AttachBox",
  props: {
    modelValue: { default: [] },
    accept: { default: "*" },
    base64: { type: Boolean, default: !1 },
    uniqid: { type: Boolean, default: !1 },
    multiple: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "handler"],
  setup(o, { emit: a }) {
    const e = o, t = v(e.modelValue || []), d = v(null), c = Z();
    A(() => e.modelValue, () => {
      t.value = e.modelValue;
    });
    const f = (i) => {
      const n = i.target.files || i.dataTransfer.files || d.value.files;
      for (let r = 0; r < n.length; r++) {
        const l = n[r];
        if (e.uniqid && (l.uniqid = Z()), e.base64) {
          const u = new FileReader();
          u.onload = () => {
            l.base64 = u.result;
          }, u.readAsDataURL(l);
        }
        t.value.unshift(l);
      }
      a("update:modelValue", t.value), a("handler", t.value);
    };
    return (i, n) => (g(), b("div", ee, [
      s("input", {
        type: "file",
        id: "dropZoneFile-" + _(c),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: d,
        onChange: f,
        multiple: o.multiple,
        accept: o.accept
      }, null, 40, oe),
      s("div", {
        class: "dropZoneWrap",
        onDragenter: n[0] || (n[0] = p(() => {
        }, ["prevent"])),
        onDragover: n[1] || (n[1] = p(() => {
        }, ["prevent"])),
        onDrop: p(f, ["prevent"])
      }, [
        s("label", {
          for: "dropZoneFile-" + _(c),
          class: "dropZoneLabel tedirAttachLabel"
        }, [
          F(i.$slots, "default", {}, void 0, !0)
        ], 8, ae)
      ], 40, te)
    ]));
  }
});
const de = /* @__PURE__ */ D(le, [["__scopeId", "data-v-6e404a6d"]]);
export {
  de as AttachBox,
  se as DropZone,
  re as ThumbBox
};

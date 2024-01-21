import { defineComponent as V, ref as h, openBlock as m, createElementBlock as g, createElementVNode as d, unref as v, withModifiers as p, createStaticVNode as B, onMounted as S, watch as D, normalizeClass as x, renderSlot as F, withDirectives as T, vShow as I, pushScopeId as $, popScopeId as A } from "vue";
var b = function(o) {
  o === void 0 && (o = 0);
  var l = "", e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", t = String(JSON.parse(new Date().toJSON().replace(/-|T|Z|:|\./g, "")));
  Number(o) >= 1 && (l += String(Number(o) + 1));
  for (var i = 0; i < t.length; i++)
    l += e.charAt(Math.floor(Math.random() * e.length)), l += t.charAt(i);
  return l;
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
  setup(o, { emit: l }) {
    const e = o, t = h(e.modelValue || []), i = h(null), c = b(), f = (u) => {
      const a = u.target.files || u.dataTransfer.files || i.value.files;
      for (let n = 0; n < a.length; n++) {
        const s = a[n];
        if (e.uniqid && (s.uniqid = b()), e.base64) {
          const r = new FileReader();
          r.onload = () => {
            s.base64 = r.result;
          }, r.readAsDataURL(s);
        }
        t.value.unshift(s);
      }
      l("update:modelValue", t.value), l("handler", t.value);
    };
    return (u, a) => (m(), g("div", q, [
      d("input", {
        type: "file",
        id: "dropZoneFile-" + v(c),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: i,
        onChange: f,
        multiple: "",
        accept: o.accept
      }, null, 40, L),
      d("div", {
        class: "dropZoneWrap",
        onDragenter: a[0] || (a[0] = p(() => {
        }, ["prevent"])),
        onDragover: a[1] || (a[1] = p(() => {
        }, ["prevent"])),
        onDrop: p(f, ["prevent"])
      }, [
        d("label", {
          for: "dropZoneFile-" + v(c),
          class: "dropZoneLabel"
        }, C, 8, k)
      ], 40, z)
    ]));
  }
});
const w = (o, l) => {
  const e = o.__vccOpts || o;
  for (const [t, i] of l)
    e[t] = i;
  return e;
}, se = /* @__PURE__ */ w(E, [["__scopeId", "data-v-80aea37e"]]), Z = (o) => ($("data-v-51c61893"), o = o(), A(), o), M = { class: "dropZone tedirThumbnail" }, N = ["id"], U = ["onDrop"], O = ["for"], W = ["src"], j = ["width", "height"], J = /* @__PURE__ */ Z(() => /* @__PURE__ */ d("path", { d: "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" }, null, -1)), Y = /* @__PURE__ */ Z(() => /* @__PURE__ */ d("path", { d: "M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" }, null, -1)), G = [
  J,
  Y
], H = { class: "dropZoneBody" }, K = /* @__PURE__ */ Z(() => /* @__PURE__ */ d("p", null, [
  /* @__PURE__ */ d("strong", { class: "dropZoneTitle" }, "Drag and drop thumbnail")
], -1)), P = /* @__PURE__ */ Z(() => /* @__PURE__ */ d("p", null, [
  /* @__PURE__ */ d("small", { class: "dropZoneText" }, "Your thumbnail will be shown here")
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
  setup(o, { emit: l }) {
    const e = o, t = h(""), i = h(null), c = b(), f = () => {
      var a, n;
      if (typeof e.modelValue == "string")
        t.value = e.modelValue;
      else if (typeof e.modelValue == "object" && ((a = e.modelValue) == null ? void 0 : a.base64))
        t.value = e.modelValue.base64;
      else if (typeof e.modelValue == "object" && ((n = e.modelValue) == null ? void 0 : n.name)) {
        const s = new FileReader();
        s.onload = function() {
          const r = s.result;
          t.value = String(r);
        }, s.readAsDataURL(e.modelValue);
      }
    };
    S(f), D(() => e.modelValue, f);
    const u = (a) => {
      const n = a.target.files || a.dataTransfer.files || i.value.files;
      for (let s = 0; s < n.length; s++) {
        const r = n[s], y = new FileReader();
        y.onload = () => {
          const _ = y.result;
          e.type === "base64" ? (t.value = String(_), l("update:modelValue", _), l("handler", _)) : e.type === "file" ? (t.value = String(_), l("update:modelValue", r), l("handler", r)) : (r.base64 = _, t.value = String(r.base64), l("update:modelValue", r), l("handler", r));
        }, y.readAsDataURL(r);
      }
    };
    return (a, n) => (m(), g("div", M, [
      d("input", {
        type: "file",
        id: "dropZoneThumbnail-" + v(c),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: i,
        onChange: u,
        accept: "image/*"
      }, null, 40, N),
      d("div", {
        class: "dropZoneWrap",
        onDragenter: n[0] || (n[0] = p(() => {
        }, ["prevent"])),
        onDragover: n[1] || (n[1] = p(() => {
        }, ["prevent"])),
        onDrop: p(u, ["prevent"])
      }, [
        d("label", {
          for: "dropZoneThumbnail-" + v(c),
          class: x(["dropZoneLabel", t.value ? "tedirThumbnailLabel" : ""])
        }, [
          t.value ? (m(), g("img", {
            key: 0,
            src: t.value,
            class: "tedirThumbnailImage",
            alt: "Thumbnail"
          }, null, 8, W)) : F(a.$slots, "default", { key: 1 }, () => [
            (m(), g("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: o.iconSize,
              height: o.iconSize,
              fill: "currentColor",
              class: "dropZoneImage my-10px",
              viewBox: "0 0 16 16"
            }, G, 8, j)),
            d("div", H, [
              K,
              P,
              T(d("button", Q, "or select thumbnail", 512), [
                [I, o.showButton]
              ])
            ])
          ], !0)
        ], 10, O)
      ], 40, U)
    ]));
  }
});
const re = /* @__PURE__ */ w(X, [["__scopeId", "data-v-51c61893"]]), ee = { class: "dropZone tedirAttach" }, oe = ["id", "multiple", "accept"], te = ["onDrop"], ae = ["for"], le = /* @__PURE__ */ V({
  __name: "AttachBox",
  props: {
    modelValue: { default: [] },
    accept: { default: "*" },
    base64: { type: Boolean, default: !1 },
    uniqid: { type: Boolean, default: !1 },
    multiple: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "handler"],
  setup(o, { emit: l }) {
    const e = o, t = h(e.modelValue || []), i = h(null), c = b();
    D(() => e.modelValue, () => {
      t.value = e.modelValue;
    });
    const f = (u) => {
      const a = u.target.files || u.dataTransfer.files || i.value.files;
      for (let n = 0; n < a.length; n++) {
        const s = a[n];
        if (e.uniqid && (s.uniqid = b()), e.base64) {
          const r = new FileReader();
          r.onload = () => {
            s.base64 = r.result;
          }, r.readAsDataURL(s);
        }
        t.value.unshift(s);
      }
      l("update:modelValue", t.value), l("handler", t.value);
    };
    return (u, a) => (m(), g("div", ee, [
      d("input", {
        type: "file",
        id: "dropZoneFile-" + v(c),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: i,
        onChange: f,
        multiple: o.multiple,
        accept: o.accept
      }, null, 40, oe),
      d("div", {
        class: "dropZoneWrap",
        onDragenter: a[0] || (a[0] = p(() => {
        }, ["prevent"])),
        onDragover: a[1] || (a[1] = p(() => {
        }, ["prevent"])),
        onDrop: p(f, ["prevent"])
      }, [
        d("label", {
          for: "dropZoneFile-" + v(c),
          class: "dropZoneLabel tedirAttachLabel"
        }, [
          F(u.$slots, "default", {}, void 0, !0)
        ], 8, ae)
      ], 40, te)
    ]));
  }
});
const de = /* @__PURE__ */ w(le, [["__scopeId", "data-v-6e404a6d"]]);
export {
  de as AttachBox,
  se as DropZone,
  re as ThumbBox
};

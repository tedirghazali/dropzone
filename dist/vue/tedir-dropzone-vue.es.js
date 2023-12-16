import { defineComponent as V, ref as m, openBlock as v, createElementBlock as _, createElementVNode as s, unref as g, withModifiers as p, createStaticVNode as F, normalizeClass as x, Fragment as B, withDirectives as S, vShow as T, pushScopeId as I, popScopeId as $, watch as A, renderSlot as q } from "vue";
var Z = function(o) {
  o === void 0 && (o = 0);
  var a = "", e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", t = String(JSON.parse(new Date().toJSON().replace(/-|T|Z|:|\./g, "")));
  Number(o) >= 1 && (a += String(Number(o) + 1));
  for (var d = 0; d < t.length; d++)
    a += e.charAt(Math.floor(Math.random() * e.length)), a += t.charAt(d);
  return a;
};
const L = { class: "dropZone" }, z = ["id", "accept"], k = ["onDrop"], R = ["for"], C = /* @__PURE__ */ F('<svg width="10em" height="10em" viewBox="0 0 16 12" class="dropZoneImage" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-v-80aea37e><path fill-rule="evenodd" d="m 8.0274054,0.49415269 a 5.53,5.53 0 0 0 -3.594,1.34200001 c -0.766,0.66 -1.321,1.52 -1.464,2.383 -1.676,0.37 -2.94199993,1.83 -2.94199993,3.593 0,2.048 1.70799993,3.6820003 3.78099993,3.6820003 h 8.9059996 c 1.815,0 3.313,-1.43 3.313,-3.2270003 0,-1.636 -1.242,-2.969 -2.834,-3.194 -0.243,-2.58 -2.476,-4.57900001 -5.1659996,-4.57900001 z m 2.3539996,5.14600001 -1.9999996,-2 a 0.5,0.5 0 0 0 -0.708,0 l -2,2 a 0.5006316,0.5006316 0 1 0 0.708,0.708 l 1.146,-1.147 v 3.793 a 0.5,0.5 0 0 0 1,0 v -3.793 l 1.146,1.147 a 0.5006316,0.5006316 0 0 0 0.7079996,-0.708 z" data-v-80aea37e></path></svg><div class="dropZoneBody" data-v-80aea37e><p data-v-80aea37e><strong class="dropZoneTitle fg-inherit" data-v-80aea37e>Drag and drop files to upload</strong></p><p data-v-80aea37e><small class="dropZoneText" data-v-80aea37e>Your files will be added automatically</small></p><button type="button" class="button" data-v-80aea37e>or select files</button></div>', 2), E = [
  C
], N = /* @__PURE__ */ V({
  __name: "DropZone",
  props: {
    modelValue: { default: [] },
    accept: { default: "*" },
    base64: { type: Boolean, default: !1 },
    uniqid: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "handler"],
  setup(o, { emit: a }) {
    const e = o, t = m(e.modelValue || []), d = m(null), c = Z(), f = (i) => {
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
    return (i, n) => (v(), _("div", L, [
      s("input", {
        type: "file",
        id: "dropZoneFile-" + g(c),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: d,
        onChange: f,
        multiple: "",
        accept: o.accept
      }, null, 40, z),
      s("div", {
        class: "dropZoneWrap",
        onDragenter: n[0] || (n[0] = p(() => {
        }, ["prevent"])),
        onDragover: n[1] || (n[1] = p(() => {
        }, ["prevent"])),
        onDrop: p(f, ["prevent"])
      }, [
        s("label", {
          for: "dropZoneFile-" + g(c),
          class: "dropZoneLabel"
        }, E, 8, R)
      ], 40, k)
    ]));
  }
});
const D = (o, a) => {
  const e = o.__vccOpts || o;
  for (const [t, d] of a)
    e[t] = d;
  return e;
}, re = /* @__PURE__ */ D(N, [["__scopeId", "data-v-80aea37e"]]), y = (o) => (I("data-v-3cc29069"), o = o(), $(), o), M = { class: "dropZone tedirThumbnail" }, U = ["id"], O = ["onDrop"], W = ["for"], j = ["src"], J = ["width", "height"], Y = /* @__PURE__ */ y(() => /* @__PURE__ */ s("path", { d: "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" }, null, -1)), G = /* @__PURE__ */ y(() => /* @__PURE__ */ s("path", { d: "M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" }, null, -1)), H = [
  Y,
  G
], K = { class: "dropZoneBody" }, P = /* @__PURE__ */ y(() => /* @__PURE__ */ s("p", null, [
  /* @__PURE__ */ s("strong", { class: "dropZoneTitle" }, "Drag and drop thumbnail")
], -1)), Q = /* @__PURE__ */ y(() => /* @__PURE__ */ s("p", null, [
  /* @__PURE__ */ s("small", { class: "dropZoneText" }, "Your thumbnail will be shown here")
], -1)), X = {
  type: "button",
  class: "button"
}, ee = /* @__PURE__ */ V({
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
    const e = o, t = m(""), d = m(null), c = Z();
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
          const b = w.result;
          e.type === "base64" ? (t.value = String(b), a("update:modelValue", b), a("handler", b)) : e.type === "file" ? (t.value = String(b), a("update:modelValue", h), a("handler", h)) : (h.base64 = b, t.value = String(h.base64), a("update:modelValue", h), a("handler", h));
        }, w.readAsDataURL(h);
      }
    };
    return (r, l) => (v(), _("div", M, [
      s("input", {
        type: "file",
        id: "dropZoneThumbnail-" + g(c),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: d,
        onChange: f,
        accept: "image/*"
      }, null, 40, U),
      s("div", {
        class: "dropZoneWrap",
        onDragenter: l[0] || (l[0] = p(() => {
        }, ["prevent"])),
        onDragover: l[1] || (l[1] = p(() => {
        }, ["prevent"])),
        onDrop: p(f, ["prevent"])
      }, [
        s("label", {
          for: "dropZoneThumbnail-" + g(c),
          class: x(["dropZoneLabel", t.value ? "tedirThumbnailLabel" : ""])
        }, [
          t.value ? (v(), _("img", {
            key: 0,
            src: t.value,
            class: "tedirThumbnailImage",
            alt: "Thumbnail"
          }, null, 8, j)) : (v(), _(B, { key: 1 }, [
            (v(), _("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: o.iconSize,
              height: o.iconSize,
              fill: "currentColor",
              class: "dropZoneImage my-10px",
              viewBox: "0 0 16 16"
            }, H, 8, J)),
            s("div", K, [
              P,
              Q,
              S(s("button", X, "or select thumbnail", 512), [
                [T, o.showButton]
              ])
            ])
          ], 64))
        ], 10, W)
      ], 40, O)
    ]));
  }
});
const de = /* @__PURE__ */ D(ee, [["__scopeId", "data-v-3cc29069"]]), oe = { class: "dropZone tedirAttach" }, te = ["id", "multiple", "accept"], ae = ["onDrop"], le = ["for"], ne = /* @__PURE__ */ V({
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
    const e = o, t = m(e.modelValue || []), d = m(null), c = Z();
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
    return (i, n) => (v(), _("div", oe, [
      s("input", {
        type: "file",
        id: "dropZoneFile-" + g(c),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: d,
        onChange: f,
        multiple: o.multiple,
        accept: o.accept
      }, null, 40, te),
      s("div", {
        class: "dropZoneWrap",
        onDragenter: n[0] || (n[0] = p(() => {
        }, ["prevent"])),
        onDragover: n[1] || (n[1] = p(() => {
        }, ["prevent"])),
        onDrop: p(f, ["prevent"])
      }, [
        s("label", {
          for: "dropZoneFile-" + g(c),
          class: "dropZoneLabel tedirAttachLabel"
        }, [
          q(i.$slots, "default", {}, void 0, !0)
        ], 8, le)
      ], 40, ae)
    ]));
  }
});
const ie = /* @__PURE__ */ D(ne, [["__scopeId", "data-v-6e404a6d"]]);
export {
  ie as AttachBox,
  re as DropZone,
  de as ThumbBox
};

import { defineComponent as w, ref as _, openBlock as h, createElementBlock as v, createElementVNode as n, unref as m, withModifiers as c, createStaticVNode as F, normalizeClass as x, Fragment as B, withDirectives as T, vShow as S, pushScopeId as I, popScopeId as $, renderSlot as A } from "vue";
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
var V = function(e) {
  e === void 0 && (e = 0);
  var d = "", o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", t = String(Math.abs(new Date().valueOf()));
  Number(e) >= 1 && (d += String(Number(e) + 1));
  for (var r = 0; r < t.length; r++)
    d += o.charAt(Math.floor(Math.random() * o.length)), d += t.charAt(r);
  return d;
};
const L = { class: "dropZone" }, z = ["id", "accept"], k = ["onDrop"], R = ["for"], C = /* @__PURE__ */ F('<svg width="10em" height="10em" viewBox="0 0 16 12" class="dropZoneImage" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-v-40def0a8><path fill-rule="evenodd" d="m 8.0274054,0.49415269 a 5.53,5.53 0 0 0 -3.594,1.34200001 c -0.766,0.66 -1.321,1.52 -1.464,2.383 -1.676,0.37 -2.94199993,1.83 -2.94199993,3.593 0,2.048 1.70799993,3.6820003 3.78099993,3.6820003 h 8.9059996 c 1.815,0 3.313,-1.43 3.313,-3.2270003 0,-1.636 -1.242,-2.969 -2.834,-3.194 -0.243,-2.58 -2.476,-4.57900001 -5.1659996,-4.57900001 z m 2.3539996,5.14600001 -1.9999996,-2 a 0.5,0.5 0 0 0 -0.708,0 l -2,2 a 0.5006316,0.5006316 0 1 0 0.708,0.708 l 1.146,-1.147 v 3.793 a 0.5,0.5 0 0 0 1,0 v -3.793 l 1.146,1.147 a 0.5006316,0.5006316 0 0 0 0.7079996,-0.708 z" data-v-40def0a8></path></svg><div class="dropZoneBody" data-v-40def0a8><p data-v-40def0a8><strong class="dropZoneTitle fg-inherit" data-v-40def0a8>Drag and drop files to upload</strong></p><p data-v-40def0a8><small class="dropZoneText" data-v-40def0a8>Your files will be added automatically</small></p><button type="button" class="button" data-v-40def0a8>or select files</button></div>', 2), M = [
  C
], q = /* @__PURE__ */ w({
  __name: "DropZone",
  props: {
    modelValue: { default: [] },
    accept: { default: "*" },
    base64: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: d }) {
    const o = e, t = _([]), r = _(null), p = V(), f = (i) => {
      const l = i.target.files || i.dataTransfer.files || r.value.files;
      for (let s = 0; s < l.length; s++) {
        const a = l[s];
        if (o.base64) {
          const u = new FileReader();
          u.onload = () => {
            a.base64 = u.result, t.value.unshift(a);
          }, u.readAsDataURL(a);
        } else
          t.value.unshift(a);
      }
      d("update:modelValue", t.value);
    };
    return (i, l) => (h(), v("div", L, [
      n("input", {
        type: "file",
        id: "dropZoneFile-" + m(p),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: r,
        onChange: f,
        multiple: "",
        accept: e.accept
      }, null, 40, z),
      n("div", {
        class: "dropZoneWrap",
        onDragenter: l[0] || (l[0] = c(() => {
        }, ["prevent"])),
        onDragover: l[1] || (l[1] = c(() => {
        }, ["prevent"])),
        onDrop: c(f, ["prevent"])
      }, [
        n("label", {
          for: "dropZoneFile-" + m(p),
          class: "dropZoneLabel"
        }, M, 8, R)
      ], 40, k)
    ]));
  }
});
const D = (e, d) => {
  const o = e.__vccOpts || e;
  for (const [t, r] of d)
    o[t] = r;
  return o;
}, se = /* @__PURE__ */ D(q, [["__scopeId", "data-v-40def0a8"]]), Z = (e) => (I("data-v-7c29b21f"), e = e(), $(), e), N = { class: "dropZone tedirThumbnail" }, U = ["id"], W = ["onDrop"], j = ["for"], E = ["src"], O = ["width", "height"], Y = /* @__PURE__ */ Z(() => /* @__PURE__ */ n("path", { d: "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" }, null, -1)), G = /* @__PURE__ */ Z(() => /* @__PURE__ */ n("path", { d: "M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" }, null, -1)), H = [
  Y,
  G
], J = { class: "dropZoneBody" }, K = /* @__PURE__ */ Z(() => /* @__PURE__ */ n("p", null, [
  /* @__PURE__ */ n("strong", { class: "dropZoneTitle" }, "Drag and drop thumbnail")
], -1)), P = /* @__PURE__ */ Z(() => /* @__PURE__ */ n("p", null, [
  /* @__PURE__ */ n("small", { class: "dropZoneText" }, "Your thumbnail will be shown here")
], -1)), Q = {
  type: "button",
  class: "button"
}, X = /* @__PURE__ */ w({
  __name: "ThumbBox",
  props: {
    modelValue: { default: "" },
    iconSize: { default: "10em" },
    showButton: { type: Boolean, default: !0 },
    type: { default: "both" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: d }) {
    var i, l;
    const o = e, t = _(""), r = _(null), p = V();
    if (typeof o.modelValue == "string")
      t.value = o.modelValue;
    else if (typeof o.modelValue == "object" && ((i = o.modelValue) == null ? void 0 : i.base64))
      t.value = o.modelValue.base64;
    else if (typeof o.modelValue == "object" && ((l = o.modelValue) == null ? void 0 : l.name)) {
      const s = new FileReader();
      s.onload = function() {
        const a = s.result;
        t.value = String(a);
      }, s.readAsDataURL(o.modelValue);
    }
    const f = (s) => {
      const a = s.target.files || s.dataTransfer.files || r.value.files;
      for (let u = 0; u < a.length; u++) {
        const b = a[u], y = new FileReader();
        y.onload = () => {
          const g = y.result;
          o.type === "base64" ? (t.value = String(g), d("update:modelValue", g)) : o.type === "file" ? (t.value = String(g), d("update:modelValue", b)) : (b.base64 = g, t.value = String(b.base64), d("update:modelValue", b));
        }, y.readAsDataURL(b);
      }
    };
    return (s, a) => (h(), v("div", N, [
      n("input", {
        type: "file",
        id: "dropZoneThumbnail-" + m(p),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: r,
        onChange: f,
        accept: "image/*"
      }, null, 40, U),
      n("div", {
        class: "dropZoneWrap",
        onDragenter: a[0] || (a[0] = c(() => {
        }, ["prevent"])),
        onDragover: a[1] || (a[1] = c(() => {
        }, ["prevent"])),
        onDrop: c(f, ["prevent"])
      }, [
        n("label", {
          for: "dropZoneThumbnail-" + m(p),
          class: x(["dropZoneLabel", t.value ? "tedirThumbnailLabel" : ""])
        }, [
          t.value ? (h(), v("img", {
            key: 0,
            src: t.value,
            class: "tedirThumbnailImage",
            alt: "Thumbnail"
          }, null, 8, E)) : (h(), v(B, { key: 1 }, [
            (h(), v("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: e.iconSize,
              height: e.iconSize,
              fill: "currentColor",
              class: "dropZoneImage my-10px",
              viewBox: "0 0 16 16"
            }, H, 8, O)),
            n("div", J, [
              K,
              P,
              T(n("button", Q, "or select thumbnail", 512), [
                [S, e.showButton]
              ])
            ])
          ], 64))
        ], 10, j)
      ], 40, W)
    ]));
  }
});
const de = /* @__PURE__ */ D(X, [["__scopeId", "data-v-7c29b21f"]]), ee = { class: "dropZone tedirAttach" }, te = ["id", "accept"], oe = ["onDrop"], ae = ["for"], le = /* @__PURE__ */ w({
  __name: "AttachBox",
  props: {
    modelValue: { default: [] },
    accept: { default: "*" },
    base64: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: d }) {
    const o = e, t = _([]), r = _(null), p = V(), f = (i) => {
      const l = i.target.files || i.dataTransfer.files || r.value.files;
      for (let s = 0; s < l.length; s++) {
        const a = l[s];
        if (o.base64) {
          const u = new FileReader();
          u.onload = () => {
            a.base64 = u.result, t.value.unshift(a);
          }, u.readAsDataURL(a);
        } else
          t.value.unshift(a);
      }
      d("update:modelValue", t.value);
    };
    return (i, l) => (h(), v("div", ee, [
      n("input", {
        type: "file",
        id: "dropZoneFile-" + m(p),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: r,
        onChange: f,
        multiple: "",
        accept: e.accept
      }, null, 40, te),
      n("div", {
        class: "dropZoneWrap",
        onDragenter: l[0] || (l[0] = c(() => {
        }, ["prevent"])),
        onDragover: l[1] || (l[1] = c(() => {
        }, ["prevent"])),
        onDrop: c(f, ["prevent"])
      }, [
        n("label", {
          for: "dropZoneFile-" + m(p),
          class: "dropZoneLabel tedirAttachLabel"
        }, [
          A(i.$slots, "default", {}, void 0, !0)
        ], 8, ae)
      ], 40, oe)
    ]));
  }
});
const re = /* @__PURE__ */ D(le, [["__scopeId", "data-v-236ed389"]]);
export {
  re as AttachBox,
  se as DropZone,
  de as ThumbBox
};

import { defineComponent as V, ref as m, openBlock as v, createElementBlock as _, createElementVNode as s, unref as g, withModifiers as c, createStaticVNode as F, normalizeClass as x, Fragment as B, withDirectives as T, vShow as S, pushScopeId as I, popScopeId as $, renderSlot as A } from "vue";
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
var Z = function(o) {
  o === void 0 && (o = 0);
  var a = "", e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", t = String(Math.abs(new Date().valueOf()));
  Number(o) >= 1 && (a += String(Number(o) + 1));
  for (var r = 0; r < t.length; r++)
    a += e.charAt(Math.floor(Math.random() * e.length)), a += t.charAt(r);
  return a;
};
const q = { class: "dropZone" }, L = ["id", "accept"], z = ["onDrop"], k = ["for"], R = /* @__PURE__ */ F('<svg width="10em" height="10em" viewBox="0 0 16 12" class="dropZoneImage" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-v-80aea37e><path fill-rule="evenodd" d="m 8.0274054,0.49415269 a 5.53,5.53 0 0 0 -3.594,1.34200001 c -0.766,0.66 -1.321,1.52 -1.464,2.383 -1.676,0.37 -2.94199993,1.83 -2.94199993,3.593 0,2.048 1.70799993,3.6820003 3.78099993,3.6820003 h 8.9059996 c 1.815,0 3.313,-1.43 3.313,-3.2270003 0,-1.636 -1.242,-2.969 -2.834,-3.194 -0.243,-2.58 -2.476,-4.57900001 -5.1659996,-4.57900001 z m 2.3539996,5.14600001 -1.9999996,-2 a 0.5,0.5 0 0 0 -0.708,0 l -2,2 a 0.5006316,0.5006316 0 1 0 0.708,0.708 l 1.146,-1.147 v 3.793 a 0.5,0.5 0 0 0 1,0 v -3.793 l 1.146,1.147 a 0.5006316,0.5006316 0 0 0 0.7079996,-0.708 z" data-v-80aea37e></path></svg><div class="dropZoneBody" data-v-80aea37e><p data-v-80aea37e><strong class="dropZoneTitle fg-inherit" data-v-80aea37e>Drag and drop files to upload</strong></p><p data-v-80aea37e><small class="dropZoneText" data-v-80aea37e>Your files will be added automatically</small></p><button type="button" class="button" data-v-80aea37e>or select files</button></div>', 2), C = [
  R
], M = /* @__PURE__ */ V({
  __name: "DropZone",
  props: {
    modelValue: { default: [] },
    accept: { default: "*" },
    base64: { type: Boolean, default: !1 },
    uniqid: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "handler"],
  setup(o, { emit: a }) {
    const e = o, t = m(e.modelValue || []), r = m(null), p = Z(), f = (i) => {
      const n = i.target.files || i.dataTransfer.files || r.value.files;
      for (let d = 0; d < n.length; d++) {
        const l = n[d];
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
    return (i, n) => (v(), _("div", q, [
      s("input", {
        type: "file",
        id: "dropZoneFile-" + g(p),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: r,
        onChange: f,
        multiple: "",
        accept: o.accept
      }, null, 40, L),
      s("div", {
        class: "dropZoneWrap",
        onDragenter: n[0] || (n[0] = c(() => {
        }, ["prevent"])),
        onDragover: n[1] || (n[1] = c(() => {
        }, ["prevent"])),
        onDrop: c(f, ["prevent"])
      }, [
        s("label", {
          for: "dropZoneFile-" + g(p),
          class: "dropZoneLabel"
        }, C, 8, k)
      ], 40, z)
    ]));
  }
});
const D = (o, a) => {
  const e = o.__vccOpts || o;
  for (const [t, r] of a)
    e[t] = r;
  return e;
}, se = /* @__PURE__ */ D(M, [["__scopeId", "data-v-80aea37e"]]), y = (o) => (I("data-v-3cc29069"), o = o(), $(), o), N = { class: "dropZone tedirThumbnail" }, U = ["id"], W = ["onDrop"], j = ["for"], E = ["src"], O = ["width", "height"], Y = /* @__PURE__ */ y(() => /* @__PURE__ */ s("path", { d: "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" }, null, -1)), G = /* @__PURE__ */ y(() => /* @__PURE__ */ s("path", { d: "M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" }, null, -1)), H = [
  Y,
  G
], J = { class: "dropZoneBody" }, K = /* @__PURE__ */ y(() => /* @__PURE__ */ s("p", null, [
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
    const e = o, t = m(""), r = m(null), p = Z();
    if (typeof e.modelValue == "string")
      t.value = e.modelValue;
    else if (typeof e.modelValue == "object" && ((i = e.modelValue) == null ? void 0 : i.base64))
      t.value = e.modelValue.base64;
    else if (typeof e.modelValue == "object" && ((n = e.modelValue) == null ? void 0 : n.name)) {
      const d = new FileReader();
      d.onload = function() {
        const l = d.result;
        t.value = String(l);
      }, d.readAsDataURL(e.modelValue);
    }
    const f = (d) => {
      const l = d.target.files || d.dataTransfer.files || r.value.files;
      for (let u = 0; u < l.length; u++) {
        const h = l[u], w = new FileReader();
        w.onload = () => {
          const b = w.result;
          e.type === "base64" ? (t.value = String(b), a("update:modelValue", b), a("handler", b)) : e.type === "file" ? (t.value = String(b), a("update:modelValue", h), a("handler", h)) : (h.base64 = b, t.value = String(h.base64), a("update:modelValue", h), a("handler", h));
        }, w.readAsDataURL(h);
      }
    };
    return (d, l) => (v(), _("div", N, [
      s("input", {
        type: "file",
        id: "dropZoneThumbnail-" + g(p),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: r,
        onChange: f,
        accept: "image/*"
      }, null, 40, U),
      s("div", {
        class: "dropZoneWrap",
        onDragenter: l[0] || (l[0] = c(() => {
        }, ["prevent"])),
        onDragover: l[1] || (l[1] = c(() => {
        }, ["prevent"])),
        onDrop: c(f, ["prevent"])
      }, [
        s("label", {
          for: "dropZoneThumbnail-" + g(p),
          class: x(["dropZoneLabel", t.value ? "tedirThumbnailLabel" : ""])
        }, [
          t.value ? (v(), _("img", {
            key: 0,
            src: t.value,
            class: "tedirThumbnailImage",
            alt: "Thumbnail"
          }, null, 8, E)) : (v(), _(B, { key: 1 }, [
            (v(), _("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: o.iconSize,
              height: o.iconSize,
              fill: "currentColor",
              class: "dropZoneImage my-10px",
              viewBox: "0 0 16 16"
            }, H, 8, O)),
            s("div", J, [
              K,
              P,
              T(s("button", Q, "or select thumbnail", 512), [
                [S, o.showButton]
              ])
            ])
          ], 64))
        ], 10, j)
      ], 40, W)
    ]));
  }
});
const de = /* @__PURE__ */ D(X, [["__scopeId", "data-v-3cc29069"]]), ee = { class: "dropZone tedirAttach" }, oe = ["id", "accept"], te = ["onDrop"], ae = ["for"], le = /* @__PURE__ */ V({
  __name: "AttachBox",
  props: {
    modelValue: { default: [] },
    accept: { default: "*" },
    base64: { type: Boolean, default: !1 },
    uniqid: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "handler"],
  setup(o, { emit: a }) {
    const e = o, t = m(e.modelValue || []), r = m(null), p = Z(), f = (i) => {
      const n = i.target.files || i.dataTransfer.files || r.value.files;
      for (let d = 0; d < n.length; d++) {
        const l = n[d];
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
    return (i, n) => (v(), _("div", ee, [
      s("input", {
        type: "file",
        id: "dropZoneFile-" + g(p),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: r,
        onChange: f,
        multiple: "",
        accept: o.accept
      }, null, 40, oe),
      s("div", {
        class: "dropZoneWrap",
        onDragenter: n[0] || (n[0] = c(() => {
        }, ["prevent"])),
        onDragover: n[1] || (n[1] = c(() => {
        }, ["prevent"])),
        onDrop: c(f, ["prevent"])
      }, [
        s("label", {
          for: "dropZoneFile-" + g(p),
          class: "dropZoneLabel tedirAttachLabel"
        }, [
          A(i.$slots, "default", {}, void 0, !0)
        ], 8, ae)
      ], 40, te)
    ]));
  }
});
const re = /* @__PURE__ */ D(le, [["__scopeId", "data-v-0ac08f38"]]);
export {
  re as AttachBox,
  se as DropZone,
  de as ThumbBox
};

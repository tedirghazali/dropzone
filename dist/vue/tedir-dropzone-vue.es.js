import { defineComponent as b, ref as _, openBlock as h, createElementBlock as v, createElementVNode as a, unref as m, withModifiers as c, createStaticVNode as y, normalizeClass as D, Fragment as x, withDirectives as T, vShow as B, pushScopeId as F, popScopeId as V } from "vue";
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
var Z = function(e) {
  e === void 0 && (e = 0);
  var s = "", d = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", o = String(Math.abs(new Date().valueOf()));
  Number(e) >= 1 && (s += String(Number(e) + 1));
  for (var l = 0; l < o.length; l++)
    s += d.charAt(Math.floor(Math.random() * d.length)), s += o.charAt(l);
  return s;
};
const I = { class: "dropZone" }, S = ["id", "accept"], z = ["onDrop"], k = ["for"], C = /* @__PURE__ */ y('<svg width="10em" height="10em" viewBox="0 0 16 12" class="dropZoneImage" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-v-40def0a8><path fill-rule="evenodd" d="m 8.0274054,0.49415269 a 5.53,5.53 0 0 0 -3.594,1.34200001 c -0.766,0.66 -1.321,1.52 -1.464,2.383 -1.676,0.37 -2.94199993,1.83 -2.94199993,3.593 0,2.048 1.70799993,3.6820003 3.78099993,3.6820003 h 8.9059996 c 1.815,0 3.313,-1.43 3.313,-3.2270003 0,-1.636 -1.242,-2.969 -2.834,-3.194 -0.243,-2.58 -2.476,-4.57900001 -5.1659996,-4.57900001 z m 2.3539996,5.14600001 -1.9999996,-2 a 0.5,0.5 0 0 0 -0.708,0 l -2,2 a 0.5006316,0.5006316 0 1 0 0.708,0.708 l 1.146,-1.147 v 3.793 a 0.5,0.5 0 0 0 1,0 v -3.793 l 1.146,1.147 a 0.5006316,0.5006316 0 0 0 0.7079996,-0.708 z" data-v-40def0a8></path></svg><div class="dropZoneBody" data-v-40def0a8><p data-v-40def0a8><strong class="dropZoneTitle fg-inherit" data-v-40def0a8>Drag and drop files to upload</strong></p><p data-v-40def0a8><small class="dropZoneText" data-v-40def0a8>Your files will be added automatically</small></p><button type="button" class="button" data-v-40def0a8>or select files</button></div>', 2), L = [
  C
], M = /* @__PURE__ */ b({
  __name: "DropZone",
  props: {
    modelValue: { default: [] },
    accept: { default: "*" },
    base64: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const d = e, o = _([]), l = _(null), p = Z(), f = (i) => {
      const t = i.target.files || i.dataTransfer.files || l.value.files;
      for (let r = 0; r < t.length; r++) {
        const n = t[r];
        if (d.base64) {
          const u = new FileReader();
          u.onload = () => {
            n.base64 = u.result, o.value.unshift(n);
          }, u.readAsDataURL(n);
        } else
          o.value.unshift(n);
      }
      s("update:modelValue", o.value);
    };
    return (i, t) => (h(), v("div", I, [
      a("input", {
        type: "file",
        id: "dropZoneFile-" + m(p),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: l,
        onChange: f,
        multiple: "",
        accept: e.accept
      }, null, 40, S),
      a("div", {
        class: "dropZoneWrap",
        onDragenter: t[0] || (t[0] = c(() => {
        }, ["prevent"])),
        onDragover: t[1] || (t[1] = c(() => {
        }, ["prevent"])),
        onDrop: c(f, ["prevent"])
      }, [
        a("label", {
          for: "dropZoneFile-" + m(p),
          class: "dropZoneLabel"
        }, L, 8, k)
      ], 40, z)
    ]));
  }
});
const w = (e, s) => {
  const d = e.__vccOpts || e;
  for (const [o, l] of s)
    d[o] = l;
  return d;
}, P = /* @__PURE__ */ w(M, [["__scopeId", "data-v-40def0a8"]]), g = (e) => (F("data-v-5f2f8fa7"), e = e(), V(), e), $ = { class: "dropZone tedirThumbnail" }, A = ["id"], N = ["onDrop"], R = ["for"], q = ["src", "alt"], E = ["width", "height"], O = /* @__PURE__ */ g(() => /* @__PURE__ */ a("path", { d: "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" }, null, -1)), U = /* @__PURE__ */ g(() => /* @__PURE__ */ a("path", { d: "M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" }, null, -1)), W = [
  O,
  U
], Y = { class: "dropZoneBody" }, j = /* @__PURE__ */ g(() => /* @__PURE__ */ a("p", null, [
  /* @__PURE__ */ a("strong", { class: "dropZoneTitle" }, "Drag and drop thumbnail")
], -1)), G = /* @__PURE__ */ g(() => /* @__PURE__ */ a("p", null, [
  /* @__PURE__ */ a("small", { class: "dropZoneText" }, "Your thumbnail will be shown here")
], -1)), H = {
  type: "button",
  class: "button"
}, J = /* @__PURE__ */ b({
  __name: "ThumbBox",
  props: {
    modelValue: { default: {} },
    iconSize: { default: "10em" },
    showButton: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const o = _(e.modelValue || {}), l = _(null), p = Z(), f = (i) => {
      const t = i.target.files || i.dataTransfer.files || l.value.files;
      for (let r = 0; r < t.length; r++) {
        const n = t[r], u = new FileReader();
        u.onload = () => {
          n.base64 = u.result, o.value = n, s("update:modelValue", n);
        }, u.readAsDataURL(n);
      }
    };
    return (i, t) => {
      var r, n;
      return h(), v("div", $, [
        a("input", {
          type: "file",
          id: "dropZoneThumbnail-" + m(p),
          class: "dropZoneFile",
          ref_key: "dropZoneFile",
          ref: l,
          onChange: f,
          accept: "image/*"
        }, null, 40, A),
        a("div", {
          class: "dropZoneWrap",
          onDragenter: t[0] || (t[0] = c(() => {
          }, ["prevent"])),
          onDragover: t[1] || (t[1] = c(() => {
          }, ["prevent"])),
          onDrop: c(f, ["prevent"])
        }, [
          a("label", {
            for: "dropZoneThumbnail-" + m(p),
            class: D(["dropZoneLabel", (r = o.value) != null && r.base64 ? "tedirThumbnailLabel" : ""])
          }, [
            (n = o.value) != null && n.base64 ? (h(), v("img", {
              key: 0,
              src: o.value.base64,
              class: "tedirThumbnailImage",
              alt: o.value.name
            }, null, 8, q)) : (h(), v(x, { key: 1 }, [
              (h(), v("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: e.iconSize,
                height: e.iconSize,
                fill: "currentColor",
                class: "dropZoneImage my-10px",
                viewBox: "0 0 16 16"
              }, W, 8, E)),
              a("div", Y, [
                j,
                G,
                T(a("button", H, "or select thumbnail", 512), [
                  [B, e.showButton]
                ])
              ])
            ], 64))
          ], 10, R)
        ], 40, N)
      ]);
    };
  }
});
const Q = /* @__PURE__ */ w(J, [["__scopeId", "data-v-5f2f8fa7"]]);
export {
  P as DropZone,
  Q as ThumbBox
};

import { defineComponent as g, ref as _, openBlock as f, createElementBlock as v, createElementVNode as a, unref as m, withModifiers as c, createStaticVNode as y, watch as D, normalizeClass as x, Fragment as V, withDirectives as T, vShow as B, pushScopeId as F, popScopeId as I } from "vue";
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
var w = function(e) {
  e === void 0 && (e = 0);
  var d = "", n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", t = String(Math.abs(new Date().valueOf()));
  Number(e) >= 1 && (d += String(Number(e) + 1));
  for (var l = 0; l < t.length; l++)
    d += n.charAt(Math.floor(Math.random() * n.length)), d += t.charAt(l);
  return d;
};
const S = { class: "dropZone" }, z = ["id", "accept"], k = ["onDrop"], C = ["for"], L = /* @__PURE__ */ y('<svg width="10em" height="10em" viewBox="0 0 16 12" class="dropZoneImage" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-v-40def0a8><path fill-rule="evenodd" d="m 8.0274054,0.49415269 a 5.53,5.53 0 0 0 -3.594,1.34200001 c -0.766,0.66 -1.321,1.52 -1.464,2.383 -1.676,0.37 -2.94199993,1.83 -2.94199993,3.593 0,2.048 1.70799993,3.6820003 3.78099993,3.6820003 h 8.9059996 c 1.815,0 3.313,-1.43 3.313,-3.2270003 0,-1.636 -1.242,-2.969 -2.834,-3.194 -0.243,-2.58 -2.476,-4.57900001 -5.1659996,-4.57900001 z m 2.3539996,5.14600001 -1.9999996,-2 a 0.5,0.5 0 0 0 -0.708,0 l -2,2 a 0.5006316,0.5006316 0 1 0 0.708,0.708 l 1.146,-1.147 v 3.793 a 0.5,0.5 0 0 0 1,0 v -3.793 l 1.146,1.147 a 0.5006316,0.5006316 0 0 0 0.7079996,-0.708 z" data-v-40def0a8></path></svg><div class="dropZoneBody" data-v-40def0a8><p data-v-40def0a8><strong class="dropZoneTitle fg-inherit" data-v-40def0a8>Drag and drop files to upload</strong></p><p data-v-40def0a8><small class="dropZoneText" data-v-40def0a8>Your files will be added automatically</small></p><button type="button" class="button" data-v-40def0a8>or select files</button></div>', 2), M = [
  L
], $ = /* @__PURE__ */ g({
  __name: "DropZone",
  props: {
    modelValue: { default: [] },
    accept: { default: "*" },
    base64: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: d }) {
    const n = e, t = _([]), l = _(null), p = w(), h = (i) => {
      const o = i.target.files || i.dataTransfer.files || l.value.files;
      for (let r = 0; r < o.length; r++) {
        const s = o[r];
        if (n.base64) {
          const u = new FileReader();
          u.onload = () => {
            s.base64 = u.result, t.value.unshift(s);
          }, u.readAsDataURL(s);
        } else
          t.value.unshift(s);
      }
      d("update:modelValue", t.value);
    };
    return (i, o) => (f(), v("div", S, [
      a("input", {
        type: "file",
        id: "dropZoneFile-" + m(p),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: l,
        onChange: h,
        multiple: "",
        accept: e.accept
      }, null, 40, z),
      a("div", {
        class: "dropZoneWrap",
        onDragenter: o[0] || (o[0] = c(() => {
        }, ["prevent"])),
        onDragover: o[1] || (o[1] = c(() => {
        }, ["prevent"])),
        onDrop: c(h, ["prevent"])
      }, [
        a("label", {
          for: "dropZoneFile-" + m(p),
          class: "dropZoneLabel"
        }, M, 8, C)
      ], 40, k)
    ]));
  }
});
const Z = (e, d) => {
  const n = e.__vccOpts || e;
  for (const [t, l] of d)
    n[t] = l;
  return n;
}, Q = /* @__PURE__ */ Z($, [["__scopeId", "data-v-40def0a8"]]), b = (e) => (F("data-v-ae154b52"), e = e(), I(), e), A = { class: "dropZone tedirThumbnail" }, N = ["id"], R = ["onDrop"], q = ["for"], E = ["src", "alt"], O = ["width", "height"], U = /* @__PURE__ */ b(() => /* @__PURE__ */ a("path", { d: "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" }, null, -1)), W = /* @__PURE__ */ b(() => /* @__PURE__ */ a("path", { d: "M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" }, null, -1)), Y = [
  U,
  W
], j = { class: "dropZoneBody" }, G = /* @__PURE__ */ b(() => /* @__PURE__ */ a("p", null, [
  /* @__PURE__ */ a("strong", { class: "dropZoneTitle" }, "Drag and drop thumbnail")
], -1)), H = /* @__PURE__ */ b(() => /* @__PURE__ */ a("p", null, [
  /* @__PURE__ */ a("small", { class: "dropZoneText" }, "Your thumbnail will be shown here")
], -1)), J = {
  type: "button",
  class: "button"
}, K = /* @__PURE__ */ g({
  __name: "ThumbBox",
  props: {
    modelValue: { default: {} },
    iconSize: { default: "10em" },
    showButton: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: d }) {
    const n = e, t = _(n.modelValue || {}), l = _(null), p = w();
    D(() => n.modelValue, () => {
      t.value = n.modelValue;
    });
    const h = (i) => {
      const o = i.target.files || i.dataTransfer.files || l.value.files;
      for (let r = 0; r < o.length; r++) {
        const s = o[r], u = new FileReader();
        u.onload = () => {
          s.base64 = u.result, t.value = s;
        }, u.readAsDataURL(s);
      }
      d("update:modelValue", t.value);
    };
    return (i, o) => {
      var r, s;
      return f(), v("div", A, [
        a("input", {
          type: "file",
          id: "dropZoneThumbnail-" + m(p),
          class: "dropZoneFile",
          ref_key: "dropZoneFile",
          ref: l,
          onChange: h,
          accept: "image/*"
        }, null, 40, N),
        a("div", {
          class: "dropZoneWrap",
          onDragenter: o[0] || (o[0] = c(() => {
          }, ["prevent"])),
          onDragover: o[1] || (o[1] = c(() => {
          }, ["prevent"])),
          onDrop: c(h, ["prevent"])
        }, [
          a("label", {
            for: "dropZoneThumbnail-" + m(p),
            class: x(["dropZoneLabel", (r = t.value) != null && r.base64 ? "tedirThumbnailLabel" : ""])
          }, [
            (s = t.value) != null && s.base64 ? (f(), v("img", {
              key: 0,
              src: t.value.base64,
              class: "tedirThumbnailImage",
              alt: t.value.name
            }, null, 8, E)) : (f(), v(V, { key: 1 }, [
              (f(), v("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: e.iconSize,
                height: e.iconSize,
                fill: "currentColor",
                class: "dropZoneImage my-10px",
                viewBox: "0 0 16 16"
              }, Y, 8, O)),
              a("div", j, [
                G,
                H,
                T(a("button", J, "or select thumbnail", 512), [
                  [B, e.showButton]
                ])
              ])
            ], 64))
          ], 10, q)
        ], 40, R)
      ]);
    };
  }
});
const X = /* @__PURE__ */ Z(K, [["__scopeId", "data-v-ae154b52"]]);
export {
  Q as DropZone,
  X as ThumbBox
};

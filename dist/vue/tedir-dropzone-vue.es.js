import { defineComponent as b, ref as h, openBlock as f, createElementBlock as m, createElementVNode as p, unref as _, withModifiers as c, createStaticVNode as Z, watch as x, normalizeClass as g, Fragment as D } from "vue";
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
var w = function(t) {
  t === void 0 && (t = 0);
  var s = "", o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", e = String(Math.abs(new Date().valueOf()));
  Number(t) >= 1 && (s += String(Number(t) + 1));
  for (var n = 0; n < e.length; n++)
    s += o.charAt(Math.floor(Math.random() * o.length)), s += e.charAt(n);
  return s;
};
const V = { class: "dropZone" }, F = ["id", "accept"], T = ["onDrop"], B = ["for"], k = /* @__PURE__ */ Z('<svg width="10em" height="10em" viewBox="0 0 16 12" class="dropZoneImage" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-v-40def0a8><path fill-rule="evenodd" d="m 8.0274054,0.49415269 a 5.53,5.53 0 0 0 -3.594,1.34200001 c -0.766,0.66 -1.321,1.52 -1.464,2.383 -1.676,0.37 -2.94199993,1.83 -2.94199993,3.593 0,2.048 1.70799993,3.6820003 3.78099993,3.6820003 h 8.9059996 c 1.815,0 3.313,-1.43 3.313,-3.2270003 0,-1.636 -1.242,-2.969 -2.834,-3.194 -0.243,-2.58 -2.476,-4.57900001 -5.1659996,-4.57900001 z m 2.3539996,5.14600001 -1.9999996,-2 a 0.5,0.5 0 0 0 -0.708,0 l -2,2 a 0.5006316,0.5006316 0 1 0 0.708,0.708 l 1.146,-1.147 v 3.793 a 0.5,0.5 0 0 0 1,0 v -3.793 l 1.146,1.147 a 0.5006316,0.5006316 0 0 0 0.7079996,-0.708 z" data-v-40def0a8></path></svg><div class="dropZoneBody" data-v-40def0a8><p data-v-40def0a8><strong class="dropZoneTitle fg-inherit" data-v-40def0a8>Drag and drop files to upload</strong></p><p data-v-40def0a8><small class="dropZoneText" data-v-40def0a8>Your files will be added automatically</small></p><button type="button" class="button" data-v-40def0a8>or select files</button></div>', 2), z = [
  k
], C = /* @__PURE__ */ b({
  __name: "DropZone",
  props: {
    modelValue: { default: [] },
    accept: { default: "*" },
    base64: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: s }) {
    const o = t, e = h([]), n = h(null), u = w(), v = (i) => {
      const a = i.target.files || i.dataTransfer.files || n.value.files;
      for (let r = 0; r < a.length; r++) {
        const l = a[r];
        if (o.base64) {
          const d = new FileReader();
          d.onload = () => {
            l.base64 = d.result, e.value.unshift(l);
          }, d.readAsDataURL(l);
        } else
          e.value.unshift(l);
      }
      s("update:modelValue", e.value);
    };
    return (i, a) => (f(), m("div", V, [
      p("input", {
        type: "file",
        id: "dropZoneFile-" + _(u),
        class: "dropZoneFile",
        ref_key: "dropZoneFile",
        ref: n,
        onChange: v,
        multiple: "",
        accept: t.accept
      }, null, 40, F),
      p("div", {
        class: "dropZoneWrap",
        onDragenter: a[0] || (a[0] = c(() => {
        }, ["prevent"])),
        onDragover: a[1] || (a[1] = c(() => {
        }, ["prevent"])),
        onDrop: c(v, ["prevent"])
      }, [
        p("label", {
          for: "dropZoneFile-" + _(u),
          class: "dropZoneLabel"
        }, z, 8, B)
      ], 40, T)
    ]));
  }
});
const y = (t, s) => {
  const o = t.__vccOpts || t;
  for (const [e, n] of s)
    o[e] = n;
  return o;
}, S = /* @__PURE__ */ y(C, [["__scopeId", "data-v-40def0a8"]]), I = { class: "dropZone" }, M = ["id"], L = ["onDrop"], $ = ["for"], A = ["src", "alt"], N = /* @__PURE__ */ Z('<svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" fill="currentColor" class="dropZoneImage my-10px" viewBox="0 0 16 16" data-v-396e7c0a><path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" data-v-396e7c0a></path><path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" data-v-396e7c0a></path></svg><div class="dropZoneBody" data-v-396e7c0a><p data-v-396e7c0a><strong class="dropZoneTitle fg-inherit" data-v-396e7c0a>Drag and drop thumbnail</strong></p><p data-v-396e7c0a><small class="dropZoneText" data-v-396e7c0a>Your thumbnail will be shown here</small></p><button type="button" class="button" data-v-396e7c0a>or select thumbnail</button></div>', 2), R = /* @__PURE__ */ b({
  __name: "ThumbBox",
  props: {
    modelValue: { default: {} }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: s }) {
    const o = t, e = h(o.modelValue || {}), n = h(null), u = w();
    x(() => o.modelValue, () => {
      e.value = o.modelValue;
    });
    const v = (i) => {
      const a = i.target.files || i.dataTransfer.files || n.value.files;
      for (let r = 0; r < a.length; r++) {
        const l = a[r], d = new FileReader();
        d.onload = () => {
          l.base64 = d.result, e.value = l;
        }, d.readAsDataURL(l);
      }
      s("update:modelValue", e.value);
    };
    return (i, a) => {
      var r, l, d;
      return f(), m("div", I, [
        p("input", {
          type: "file",
          id: "dropZoneThumbnail-" + _(u),
          class: "dropZoneFile",
          ref_key: "dropZoneFile",
          ref: n,
          onChange: v,
          accept: "image/*"
        }, null, 40, M),
        p("div", {
          class: g(["dropZoneWrap", (r = e.value) != null && r.base64 ? "bd-none" : ""]),
          onDragenter: a[0] || (a[0] = c(() => {
          }, ["prevent"])),
          onDragover: a[1] || (a[1] = c(() => {
          }, ["prevent"])),
          onDrop: c(v, ["prevent"])
        }, [
          p("label", {
            for: "dropZoneThumbnail-" + _(u),
            class: g(["dropZoneLabel", (l = e.value) != null && l.base64 ? "py-0px" : ""])
          }, [
            (d = e.value) != null && d.base64 ? (f(), m("img", {
              key: 0,
              src: e.value.base64,
              class: "objectFit-fill w-100pct",
              alt: e.value.name
            }, null, 8, A)) : (f(), m(D, { key: 1 }, [
              N
            ], 64))
          ], 10, $)
        ], 42, L)
      ]);
    };
  }
});
const E = /* @__PURE__ */ y(R, [["__scopeId", "data-v-396e7c0a"]]);
export {
  S as DropZone,
  E as ThumbBox
};

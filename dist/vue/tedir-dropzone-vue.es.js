import { defineComponent, ref, openBlock, createElementBlock, createElementVNode, withModifiers, createStaticVNode } from "vue";
var DropZone_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "dropZone" };
const _hoisted_2 = ["accept"];
const _hoisted_3 = ["onDrop"];
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<label for="dropZoneFile" class="dropZoneLabel" data-v-3d433c0e><svg width="10em" height="10em" viewBox="0 0 16 12" class="dropZoneImage" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-v-3d433c0e><path fill-rule="evenodd" d="m 8.0274054,0.49415269 a 5.53,5.53 0 0 0 -3.594,1.34200001 c -0.766,0.66 -1.321,1.52 -1.464,2.383 -1.676,0.37 -2.94199993,1.83 -2.94199993,3.593 0,2.048 1.70799993,3.6820003 3.78099993,3.6820003 h 8.9059996 c 1.815,0 3.313,-1.43 3.313,-3.2270003 0,-1.636 -1.242,-2.969 -2.834,-3.194 -0.243,-2.58 -2.476,-4.57900001 -5.1659996,-4.57900001 z m 2.3539996,5.14600001 -1.9999996,-2 a 0.5,0.5 0 0 0 -0.708,0 l -2,2 a 0.5006316,0.5006316 0 1 0 0.708,0.708 l 1.146,-1.147 v 3.793 a 0.5,0.5 0 0 0 1,0 v -3.793 l 1.146,1.147 a 0.5006316,0.5006316 0 0 0 0.7079996,-0.708 z" data-v-3d433c0e></path></svg><div class="dropZoneBody" data-v-3d433c0e><p data-v-3d433c0e><strong class="dropZoneTitle" data-v-3d433c0e>Drag and drop files to upload</strong></p><p data-v-3d433c0e><small class="dropZoneText" data-v-3d433c0e>Your files will be added automatically</small></p><button type="button" class="button" data-v-3d433c0e>or select files</button></div></label>', 1);
const _hoisted_5 = [
  _hoisted_4
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    modelValue: { default: [] },
    accept: { default: "*" },
    base64: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const files = ref([]);
    const dropZoneFile = ref(null);
    const handleFiles = (e) => {
      const inputValue = e.target.files || e.dataTransfer.files || dropZoneFile.value.files;
      for (let i = 0; i < inputValue.length; i++) {
        const fileItem = inputValue[i];
        files.value.push(fileItem);
      }
      emit("update:modelValue", files.value);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("input", {
          type: "file",
          id: "dropZoneFile",
          class: "dropZoneFile",
          ref_key: "dropZoneFile",
          ref: dropZoneFile,
          onChange: handleFiles,
          multiple: "",
          accept: __props.accept
        }, null, 40, _hoisted_2),
        createElementVNode("div", {
          class: "dropZoneWrap",
          onDragenter: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["prevent"])),
          onDragover: _cache[1] || (_cache[1] = withModifiers(() => {
          }, ["prevent"])),
          onDrop: withModifiers(handleFiles, ["prevent"])
        }, _hoisted_5, 40, _hoisted_3)
      ]);
    };
  }
});
var DropZone = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3d433c0e"]]);
export { DropZone };

import { defineCustomElement } from 'vue'
import VueDropZone from '../vue/components/DropZone.vue'
import VueThumbBox from '../vue/components/ThumbBox.vue'
import VueAttachBox from '../vue/components/AttachBox.vue'

export const DropZone = defineCustomElement(VueDropZone)
export const ThumbBox = defineCustomElement(VueThumbBox)
export const AttachBox = defineCustomElement(VueAttachBox)

export function useTedirDropZone() {
  customElements.define('drop-zone', DropZone)
  customElements.define('thumb-box', ThumbBox)
  customElements.define('attach-box', AttachBox)
}

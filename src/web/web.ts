import { defineCustomElement } from 'vue'
import VueDropZone from '../vue/components/DropZone.vue'
import VueThumbBox from '../vue/components/ThumbBox.vue'

export const DropZone = defineCustomElement(VueDropZone)
export const ThumbBox = defineCustomElement(VueThumbBox)

export function useTedirDropZone() {
  customElements.define('drop-zone', DropZone)
  customElements.define('thumb-box', ThumbBox)
}

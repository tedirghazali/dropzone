import { defineCustomElement } from 'vue'
import VueDropZone from '../vue/components/DropZone.vue'

export const DropZone = defineCustomElement(VueDropZone)

export function useTedirDropZone() {
  customElements.define('drop-zone', DropZone)
}

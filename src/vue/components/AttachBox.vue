<script setup lang="ts">
import { ref } from 'vue'
import { uniqid } from 'alga-js/string'

const props = withDefaults(defineProps<{
  //@ts-ignore
  modelValue?: any[],
  accept?: string,
  base64?: boolean
}>(), {
  //@ts-ignore
  modelValue: [],
  accept: '*',
  base64: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: any[]): void
}>()

const files = ref<any[]>([])
const dropZoneFile = ref<any>(null)
const uniqueId = uniqid()

const handleFiles = (e: any) => {
  const inputValue = e.target.files || e.dataTransfer.files || dropZoneFile.value.files
  for(let i = 0; i < inputValue.length; i++) {
    const fileItem = inputValue[i]
    
    if(props.base64) {
      const reader = new FileReader()
      reader.onload = () => {
        fileItem.base64 = reader.result
        files.value.unshift(fileItem)
      }
      reader.readAsDataURL(fileItem)
    } else {
      files.value.unshift(fileItem)
    }
  }
  emit('update:modelValue', files.value)
}
</script>

<template>
  <div class="dropZone tedirAttach">
    <input type="file" :id="'dropZoneFile-'+uniqueId" class="dropZoneFile" ref="dropZoneFile" @change="handleFiles" multiple :accept="accept">
    <div class="dropZoneWrap" @dragenter.prevent="" @dragover.prevent="" @drop.prevent="handleFiles">
      <label :for="'dropZoneFile-'+uniqueId" class="dropZoneLabel tedirAttachLabel">
        <slot></slot>
      </label>
    </div>
  </div>
</template>

<style scoped>
@use dropZone;
@use tedirAttach;
</style>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { uniqid } from 'alga-js/string'

const props = withDefaults(defineProps<{
  //@ts-ignore
  modelValue: any[],
  accept?: string,
  base64?: boolean,
  uniqid?: boolean,
  multiple?: boolean,
}>(), {
  //@ts-ignore
  modelValue: [],
  accept: '*',
  base64: false,
  uniqid: false,
  multiple: true
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: any[]): void,
  (e: 'handler', value: any[]): void
}>()

const files = ref<any[]>(props.modelValue || [])
const dropZoneFile = ref<any>(null)
const uniqueId = uniqid()

watch(() => props.modelValue, () => {
  //@ts-ignore
  files.value = props.modelValue
})

const handleFiles = (e: any) => {
  const inputValue = e.target.files || e.dataTransfer.files || dropZoneFile.value.files
  for(let i = 0; i < inputValue.length; i++) {
    const fileItem = inputValue[i]
    
    if(props.uniqid) {
      fileItem.uniqid = uniqid()
    }
    
    if(props.base64) {
      const reader = new FileReader()
      reader.onload = () => {
        fileItem.base64 = reader.result
      }
      reader.readAsDataURL(fileItem)
    }
    
    files.value.unshift(fileItem)
  }
  emit('update:modelValue', files.value)
  emit('handler', files.value)
}
</script>

<template>
  <div class="dropZone tedirAttach">
    <input type="file" :id="'dropZoneFile-'+uniqueId" class="dropZoneFile" ref="dropZoneFile" @change="handleFiles" :multiple="multiple" :accept="accept">
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

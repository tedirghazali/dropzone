<script setup lang="ts">
import { ref, watch } from 'vue'
import { uniqid } from 'alga-js/string'

const props = withDefaults(defineProps<{
  //@ts-ignore
  modelValue?: any,
  iconSize: string,
  showButton: boolean
}>(), {
  //@ts-ignore
  modelValue: {},
  iconSize: '10em',
  showButton: true
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()

const thumbnail = ref<any>(props.modelValue || {})
const dropZoneFile = ref<any>(null)
const uniqueId = uniqid()

watch(() => props.modelValue, () => {
  thumbnail.value = props.modelValue
})

const handleFiles = (e: any) => {
  const inputValue = e.target.files || e.dataTransfer.files || dropZoneFile.value.files
  for(let i = 0; i < inputValue.length; i++) {
    const fileItem = inputValue[i]
    
    const reader = new FileReader()
    reader.onload = () => {
      fileItem.base64 = reader.result
      thumbnail.value = fileItem
    }
    reader.readAsDataURL(fileItem)
  }
  emit('update:modelValue', thumbnail.value)
}
</script>

<template>
  <div class="dropZone tedirThumbnail">
    <input type="file" :id="'dropZoneThumbnail-'+uniqueId" class="dropZoneFile" ref="dropZoneFile" @change="handleFiles" accept="image/*">
    <div class="dropZoneWrap" :class="thumbnail?.base64 ? 'tedirThumbnailHidden' : ''" @dragenter.prevent="" @dragover.prevent="" @drop.prevent="handleFiles">
      <label :for="'dropZoneThumbnail-'+uniqueId" class="dropZoneLabel" :class="thumbnail?.base64 ? 'tedirThumbnailLabel' : ''">
        <template v-if="thumbnail?.base64">
          <img :src="thumbnail.base64" class="tedirThumbnailImage" :alt="thumbnail.name" />
        </template>
        <template v-else>
          <svg xmlns="http://www.w3.org/2000/svg" :width="iconSize" :height="iconSize" fill="currentColor" class="dropZoneImage my-10px" viewBox="0 0 16 16">
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
          </svg>
          <!-- bootstrap icon -->
          <div class="dropZoneBody">
            <p>
              <strong class="dropZoneTitle">Drag and drop thumbnail</strong>
            </p>
            <p>
              <small class="dropZoneText">Your thumbnail will be shown here</small>
            </p>
            <button v-show="showButton" type="button" class="button">or select thumbnail</button>
          </div>
        </template>
      </label>
    </div>
  </div>
</template>

<style scoped>
@use tedirThumbnail;
@use dropZone;
</style>

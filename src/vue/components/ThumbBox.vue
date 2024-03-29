<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { uniqid } from 'alga-js/string'

const props = withDefaults(defineProps<{
  //@ts-ignore
  modelValue?: any,
  iconSize?: string,
  showButton?: boolean,
  type?: string
}>(), {
  //@ts-ignore
  modelValue: '',
  iconSize: '10em',
  showButton: true,
  type: 'both'
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: any | string): void,
  (e: 'handler', value: any | string): void
}>()

const thumbnail = ref<string>('')
const dropZoneFile = ref<any>(null)
const uniqueId = uniqid()

const loadFile = () => {
  if(typeof props.modelValue === 'string') {
    thumbnail.value = props.modelValue
  } else if(typeof props.modelValue === 'object' && props.modelValue?.base64) {
    thumbnail.value = props.modelValue.base64
  } else if(typeof props.modelValue === 'object' && props.modelValue?.name) {
    const readerFile = new FileReader();
    readerFile.onload = function () {
      const base64File = readerFile.result
      thumbnail.value = String(base64File)
    }
    readerFile.readAsDataURL(props.modelValue)
  }
}
onMounted(loadFile)
watch(() => props.modelValue, loadFile)

const handleFiles = (e: any) => {
  const inputValue = e.target.files || e.dataTransfer.files || dropZoneFile.value.files
  for(let i = 0; i < inputValue.length; i++) {
    const fileItem = inputValue[i]
    
    const reader = new FileReader()
    reader.onload = () => {
      const base64 = reader.result
      if(props.type === 'base64') {
        thumbnail.value = String(base64)
        emit('update:modelValue', base64)
        emit('handler', base64)
      } else if(props.type === 'file') {
        thumbnail.value = String(base64)
        emit('update:modelValue', fileItem)
        emit('handler', fileItem)
      } else {
        fileItem.base64 = base64
        thumbnail.value = String(fileItem.base64)
        emit('update:modelValue', fileItem)
        emit('handler', fileItem)
      }
    }
    reader.readAsDataURL(fileItem)
  }
}
</script>

<template>
  <div class="dropZone tedirThumbnail">
    <input type="file" :id="'dropZoneThumbnail-'+uniqueId" class="dropZoneFile" ref="dropZoneFile" @change="handleFiles" accept="image/*">
    <div class="dropZoneWrap" @dragenter.prevent="" @dragover.prevent="" @drop.prevent="handleFiles">
      <label :for="'dropZoneThumbnail-'+uniqueId" class="dropZoneLabel" :class="thumbnail ? 'tedirThumbnailLabel' : ''">
        <template v-if="thumbnail">
          <img :src="thumbnail" class="tedirThumbnailImage" alt="Thumbnail" />
        </template>
        <template v-else>
          <slot>
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
          </slot>
        </template>
      </label>
    </div>
  </div>
</template>

<style scoped>
@use dropZone;
@use tedirThumbnail;
</style>

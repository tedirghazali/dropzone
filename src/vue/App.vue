<script setup lang="ts">
import { ref, watch } from 'vue'
import DropZone from './components/DropZone.vue'
import ThumbBox from './components/ThumbBox.vue'

const files = ref<any[]>([])
const thumbnail = ref<any>({})

watch(files, () => {
  console.log(files.value)
})
watch(thumbnail, () => {
  console.log(thumbnail.value)
})
</script>

<template>
  <div class="container mt-30px mb-30px">
    <DropZone v-model="files" :base64="true" />
  </div>
  <div class="container mt-30px mb-30px">
    <ThumbBox v-model="thumbnail" />
  </div>
  <!--<div v-for="(file, index) in files" :key="index">{{ JSON.stringify(file) }}</div>-->
</template>

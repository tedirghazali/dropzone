<script setup lang="ts">
import { ref, watch } from 'vue'
import DropZone from './components/DropZone.vue'

const files = ref<any[]>([])
watch(files, () => {
  if(files.value.length >= 1) {
    console.log(files.value)
  }
})
</script>

<template>
  <div class="container mt-30px mb-30px">
    <DropZone v-model="files" :base64="true" />
  </div>
  <!--<div v-for="(file, index) in files" :key="index">{{ JSON.stringify(file) }}</div>-->
</template>

<style>
@use base;
@use container;
</style>

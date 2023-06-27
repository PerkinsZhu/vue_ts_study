<template>
  <n-watermark
      content="核心机密"
      cross
      selectable
      :font-size="16"
      :line-height="16"
      :width="400"
      :height="300"
      :x-offset="12"
      :y-offset="100"
      :rotate="-15"
      :image-opacity="1"
  >
  <n-button>naive-ui</n-button>
  <n-progress type="circle" :percentage="80" :offset-degree="180" />
  <template>
    <n-progress
      type="line"
      :percentage="60"
      :indicator-placement="'inside'"
      :border-radius="2"
      processing
    />
  </template>
  <n-progress
      type="line"
      :percentage="60"
      :indicator-placement="'inside'"
      processing
  />
  </n-watermark>
</template>

<script setup>
import { NButton, NProgress, NWatermark } from 'naive-ui'

</script>

<style scoped lang="scss">
.n-progress {
  width: 300px;
  height: 100px;

}

</style>
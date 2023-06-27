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

    <div class="container">
      <div class="item">
        <n-button>naive-ui</n-button>
        <n-progress type="circle" :percentage="80" :offset-degree="180"/>
      </div>
      <div class="item">
        <n-progress
            type="line"
            :percentage="60"
            :indicator-placement="'inside'"
            :border-radius="2"
            processing
        />
      </div>

      <!--时间线 -->
      <div class="item">
        <n-timeline>
          <n-timeline-item content="啊"/>
          <n-timeline-item
              type="success"
              title="成功"
              content="哪里成功"
              time="2018-04-03 20:46"
          />
          <n-timeline-item type="error" content="哪里错误" time="2018-04-03 20:46"/>
          <n-timeline-item
              type="warning"
              title="警告"
              content="哪里警告"
              time="2018-04-03 20:46"
          />
          <n-timeline-item
              type="info"
              title="信息"
              content="是的"
              time="2018-04-03 20:46"
              line-type="dashed"
          />
          <n-timeline-item content="啊"/>
        </n-timeline>

      </div>
      <div class="item">
<!--

        <n-statistic label="你一共处理了" tabular-nums>
          <n-number-animation ref="numberAnimationInstRef" :from="0" :to="12039" />
          <template #suffix>
            条群消息
          </template>
        </n-statistic>
        <n-space vertical>
          花时间、花精力、花心思，愿你每一份努力都不负所望
          <n-button @click="handleClick">
            播放
          </n-button>
        </n-space>
-->

      </div>
    </div>
  </n-watermark>


</template>

<script setup>
import { defineComponent, ref } from 'vue'

import {NButton, NProgress, NWatermark, NTimeline, NTimelineItem,
  NSpace,NStatistic,NNumberAnimation } from 'naive-ui'

function handleClick () {
  numberAnimationInstRef.value?.play()
}

</script>

<style scoped lang="scss">
.n-progress {
  width: 300px;
  height: 100px;
}

.container {
  display: flex;
}

.item {
  width: 400px;
  height: 400px;
  background-color: skyblue;
  margin: 10px;
}
</style>
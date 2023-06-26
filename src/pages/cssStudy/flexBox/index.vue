<template>
  <div class="outer">
    <div class="inner inner1">1</div>
    <div class="inner inner2">2</div>
    <div class="inner inner3">3</div>
    <div class="inner inner4">4</div>
    <div class="inner inner5">5</div>
    <div class="inner inner6">6</div>
    <div class="inner inner7">7</div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.outer {
  display: flex;
  // 调整主轴方向 row  row-reverse  column  column-reverse
  flex-direction: row;
  //调整主轴换行方式 wrap:换行  nowrap：不换行  wrap-reverse:反向换行
  flex-wrap: wrap;
  //调整主轴对齐方式 flex-start  flex-end  center  space-between  space-around
  justify-content: flex-start;
  // 调整交叉轴（侧轴，内容项）对齐方式 flex-start  flex-end  center  baseline  stretch（拉伸效果，此时不能设置height）
  // align-items: stretch;
  // 调整多根轴线(box整体)对齐方式 flex-start  flex-end  center  space-between  space-around  stretch
  // justfiy-content：应用于flex容器，设置flex子项（flex items）在主轴上的对齐方式。
  align-content: center;
  width: 500px;
  height: 500px;
  background-color: #ccc;
}

.inner {
  width: 100px;
  height: 100px;
  background-color: #f40;
  margin: 10px;
}
</style>
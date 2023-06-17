<template>
  <div class="base">盒子模型分析</div>

  <br />
  <img src="./盒子布局.png" alt="#" />

  <BoxContent></BoxContent>
</template>

<script setup lang="ts">
import BoxContent from './boxContent.vue';

</script>

<style scoped lang="scss">
.base {
  background-color: skyblue;

  // width 和 height 设置的是内容的宽高
  width: 400px;
  height: 400px;

  // 内边距：内容到边框的距离. 设置的背景颜色会填充到内边距区域
  padding: 20px;
  // 边框
  // border: 10px solid black;

  //边框是压在内边距上面的 虚线可看出来 未遮挡部分的背景颜色依旧是 skyblue  ||| 设置的背景颜色会填充到边框区域
  border: 10px dashed black;

  // 盒子的宽高 = 内容+padding+border
  //而外边距，不会占用盒子的宽度，属于外部距离

  //  外边距 ，只能影响位置。不能影响大小
  margin: 50px;
}
</style>
<template>
  <div class="box">
    I AM APP ROOT
    <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <Test></Test>

    <hr/>
    <svg>
      <use xlink:href="#icon-phone" fill="yellow"></use>
    </svg>

    <svg-icon name="phone" color="red"></svg-icon>
  </el-row>

  </div>
</template>

<script setup lang="ts">

import Test from "@/components/Test.vue"
import SvgIcon from '@/components/SvgIcon/index.vue'

console.log(import.meta.env)

</script>

<style scoped lang="scss">
.box {
  font-weight: 100px;
}
.svg{
  width:100px;
  height: 50px;
}
</style>

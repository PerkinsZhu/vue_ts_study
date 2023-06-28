<template>
  <!-- SVG 图标封装 -->
  <!--   <SvgStudy></SvgStudy>-->

  <!-- 盒子模型分析 -->
  <!-- <BoxModel></BoxModel> -->


  <!-- 浮动练习 -->

  <!-- <Page></Page> -->
  <!-- <Exercise></Exercise> -->

  <!-- 弹性盒子模型 -->
  <!--  <flexBox></flexBox>-->
  <!--   <NaiveUI></NaiveUI>-->


  <SvgIcon name="search" width="100px" height="100px"></SvgIcon>
  <svg-icon name="phone" color="red"></svg-icon>


</template>

<script setup lang="ts">
/**学习 SVG配置及element-plus使用 */
import SvgStudy from '@/pages/svgStudy/index.vue'

import SvgIcon from '@/components/SvgIcon/index.vue'

import BoxModel from '@/pages/cssStudy/boxModel/index.vue'

import Page from './pages/cssStudy/boxModel/page.vue';

import Exercise from '@/pages/cssStudy/exercise/App.vue'

import flexBox from '@/pages/cssStudy/flexBox/index.vue'

import NaiveUI from '@/pages/naiveUI/index.vue'


</script>

<style scoped lang="scss"></style>

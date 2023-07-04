<!--
 @Name 
 @Description 
 @author PerkinsZhu
 @date 2023/7/4 18:22 
-->
<script setup lang="ts">

import { ArrowRight } from "@element-plus/icons-vue";
import { ref } from "vue";

defineProps({
  currentRoute: []
});

let expanded = ref(true);

function doExpand() {
  expanded.value = !expanded.value;

}
</script>

<template>
  <el-icon size="30" @click="doExpand" v-if="!expanded">
    <Expand />
  </el-icon>
  <el-icon size="30" @click="doExpand" v-if="expanded">
    <Fold />
  </el-icon>

  <el-breadcrumb :separator-icon="ArrowRight">
    <template v-for="item in currentRoute">
      <el-breadcrumb-item :to="item">{{ item.substring(item.lastIndexOf("/") + 1) }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<style scoped lang="scss">

</style>
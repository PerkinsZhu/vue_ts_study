<!--
 @Name 
 @Description 
 @author PerkinsZhu
 @date 2023/7/4 18:22 
-->
<script setup lang="ts">

import { ArrowRight } from "@element-plus/icons-vue";
import { ref } from "vue";
import useSettingStore from "@/store/modules/setting.ts";

defineProps({
  currentRoute: {
    type: Array,
    default: new Array(0)
  }
});

let isFold = ref(false);

const settingStore = useSettingStore();

function doExpand() {
  isFold.value = !isFold.value;
  settingStore.setFold(isFold.value);
}
</script>

<template>
  <el-icon size="30" @click="doExpand" v-if="isFold">
    <Expand />
  </el-icon>
  <el-icon size="30" @click="doExpand" v-if="!isFold">
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
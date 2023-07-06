<!--
 @Name 
 @Description 
 @author PerkinsZhu
 @date 2023/7/4 17:02 
-->
<script setup lang="ts">

import Setting from "./setting/Setting.vue";
import BreadCrumb from "./breadcrumb/Breadcrumb.vue";

defineProps({
  currentRoute: {
    type: Array,
    default: new Array(0)
  }
});
</script>

<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <BreadCrumb :currentRoute="currentRoute"></BreadCrumb>
    </div>
    <div class="tabbar-right">
      <Setting></Setting>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tabbar {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.tabbar-left {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.tabbar-right {
  display: flex;
  align-items: center;


}

.el-breadcrumb {
  font-size: 20px;
  line-height: $base_navbar_height;
  margin-left: 10px;
  display: inline-block;
}
</style>
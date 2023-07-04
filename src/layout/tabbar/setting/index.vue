<!--
 @Name 
 @Description 
 @author PerkinsZhu
 @date 2023/7/4 18:23 
-->
<script setup lang="ts">

import { FullScreen, Refresh, Search, Setting } from "@element-plus/icons-vue";
</script>

<template>
  <el-button :icon="Search" circle />
  <el-button type="primary" :icon="Refresh" circle />
  <el-button type="success" :icon="FullScreen" circle />
  <el-button type="info" :icon="Setting" circle />
  <img src="@/assets/images/user.png" alt="user">
  <el-dropdown>
          <span class="el-dropdown-link">
            admin
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang="scss">
img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0px 10px;
}
</style>
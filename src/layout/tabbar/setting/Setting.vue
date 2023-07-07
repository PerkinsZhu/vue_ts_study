<!--
 @Name 
 @Description 
 @author PerkinsZhu
 @date 2023/7/4 18:23 
-->
<script setup lang="ts">

import { FullScreen, Refresh, Search, Setting } from "@element-plus/icons-vue";
import useSettingStore from "@/store/modules/setting.ts";
import useUserStore from "@/store/modules/user.ts";
import { nextTick } from "vue";
import router from "@/router";

const settingStore = useSettingStore();
const useStore = useUserStore();

// 修改全局的刷新状态，并在下一次渲染后恢复
function refresh() {
  settingStore.refsh = true;
  nextTick(() => {
    settingStore.refsh = false;
  });
};

function fullScreen() {
  const isFull = document.fullscreenElement;
  if (!isFull) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

function logout(){
  useStore.logout()
  router.push("/login")
}
</script>

<template>
  <el-button :icon="Search" circle />
  <el-button type="primary" :icon="Refresh" circle @click="refresh" />
  <el-button type="success" :icon="FullScreen" circle @click="fullScreen" />
  <el-button type="info" :icon="Setting" circle />
  <img :src="useStore.user.avatar" alt="user">
  <el-dropdown>
          <span class="el-dropdown-link">
            {{ useStore.user.userName }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
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
<!--
 @Name
 @Description
 @author PerkinsZhu
 @date 2023/6/28 16:17
-->
<script setup lang="ts">
import Logo from "@/layout/logo/Logo.vue";
import useUserStore from "@/store/modules/user.ts";
import Menu from "@/layout/menu/Menu.vue";
import { useRouter } from "vue-router";
import Main from "@/layout/main/Main.vue";
import { ref } from "vue";
import Tabbar from "@/layout/tabbar/Tabbar.vue";
import useSettingStore from "@/store/modules/setting.ts";
import { watch } from "vue";

const settingStore = useSettingStore();

const useStore = useUserStore();
const $router = useRouter();

const currentRoute = ref([]);

watch(
  () => settingStore.getFold(),
  (newVal, oldVal) => {
    console.log("监听到了", newVal, oldVal);
  }
);

const handleSelect = (index, indexPath, route) => {
  currentRoute.value = indexPath;
  $router.push(index);
};

</script>

<template>
  <div class="layout_container">
    <!-- 菜单栏开始 -->
    <div class="layout_slider" :class="settingStore.fold ?'fold':''">
      <Logo></Logo>

      <el-scrollbar class="layout_scrollbar">

        <!--         text-color 注意这些是属性，不是css样式，写在css不会生效-->
        <el-menu mode="vertical" class="menu"
                 text-color="#ffffff"
                 background-color="$base_menu_background"
                 active-text-color="skyblue"
                 :collapse="settingStore.fold"
                 :collapse-transition="true"
                 @select="handleSelect">
          <Menu :menuList="useStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 菜单栏结束 -->

    <!-- 导航栏开始 -->
    <div class="layout_navbar" :class="settingStore.fold ?'fold':''">
      <Tabbar v-bind:currentRoute="currentRoute"></Tabbar>
    </div>
    <!-- 导航栏结束 -->

    <div class="layout_main" :class="settingStore.fold ?'fold':''">
      <p>主面板</p>
      <Main></Main>
    </div>
  </div>


</template>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $base_menu_width;
    height: 100vh;
    background-color: $base_menu_background;
    transition: all $base_transition_time;

    .layout_scrollbar {
      height: calc(100vh - $base_logo_height);
    }

    &.fold {
      width: $base_menu_fold_width;
    }
  }

  .layout_navbar {
    position: absolute;
    left: $base_menu_width;
    top: 0px;
    width: calc(100% - $base_menu_width);
    height: $base_navbar_height;
    background-color: rgba(255, 99, 71, 0.52);
    transition: all $base_transition_time;

    &.fold {
      width: calc(100% - $base_menu_fold_width);
      left: $base_menu_fold_width;
    }
  }

  .layout_main {
    position: absolute;
    top: $base_navbar_height;
    left: $base_menu_width;
    background-color: rgba(255, 165, 0, 0.2);
    width: calc(100% - $base_menu_width);
    height: calc(100vh - $base_navbar_height);
    padding: 20px;
    //主面板内容溢出时，会自动设置滚动条
    overflow: auto;
    transition: all $base_transition_time;

    &.fold {
      width: calc(100% - $base_menu_fold_width);
      left: $base_menu_fold_width;
    }
  }

}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: $base_menu_width;
  min-height: $base_menu_fold_width;
}

.el-menu{
  border-right: solid 0px;
}
</style>
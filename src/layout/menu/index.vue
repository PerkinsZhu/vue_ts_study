<!--
 @Name
 @Description
 @author PerkinsZhu
 @date 2023/7/2 17:25
-->
<script setup lang="ts">
defineProps(["menuList"]);




</script>

<script lang="ts">
export default {
  name: "Menu"
};
</script>
<template>
  <template v-for="menu in menuList" :key="menu.path">
    <template v-if="!menu.children">
      <el-menu-item :index="menu.path" v-if="!menu.meta.hidden">
        <template #title>
          <el-icon :size="20" v-if="menu.meta.icon && menu.meta.icon != ''">
            <component :is="menu.meta.icon"></component>
          </el-icon>
          <p>{{ menu.meta.title }}</p>
        </template>
      </el-menu-item>
    </template>

    <template v-if="menu.children && menu.children.length==1 ">
      <el-menu-item :index="menu.children[0].path" v-if="!menu.children[0].meta.hidden">
        <template #title>
          <el-icon :size="20" v-if="menu.children[0].meta.icon && menu.children[0].meta.icon != ''">
            <component :is="menu.children[0].meta.icon"></component>
          </el-icon>
          <p>{{ menu.children[0].meta.title }}</p>
        </template>
      </el-menu-item>
    </template>

    <el-sub-menu :index="menu.path" v-if="menu.children && menu.children.length > 1 ">
      <template #title>
        <el-icon :size="20" v-if="menu.meta.icon && menu.meta.icon != ''">
          <component :is="menu.meta.icon"></component>
        </el-icon>
        {{ menu.meta.title }}
      </template>
      <Menu :menuList="menu.children"></Menu>
    </el-sub-menu>

  </template>
</template>

<style scoped lang="scss">
.menu{
  text-color: #ffffff;
  background-color: $base_menu_background;
  active-text-color:skyblue;
}
</style>
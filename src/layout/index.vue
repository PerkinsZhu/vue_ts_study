<!--
 @Name
 @Description
 @author PerkinsZhu
 @date 2023/6/28 16:17
-->
<script setup lang="ts">

</script>

<template>
  <div class="layout_container">
    <div class="layout_slider">
      菜单栏
    </div>
    <div class="layout_navbar">
      导航条
    </div>
    <div class="layout_main">
      <p style="height:10000px;background-color: green;">主面板</p>
    </div>
  </div>


</template>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  background-color: skyblue;

  .layout_slider {
    width: $base_menu_width;
    height: 100vh;
    background-color: $base_menu_background;
  }

  .layout_navbar {
    position: absolute;
    left: $base_menu_width;
    top: 0px;
    width: calc(100% - $base_menu_width);
    height: $base_navbar_height;
    background-color: tomato;
  }
  .layout_main {
    position: absolute;
    top :$base_navbar_height;
    left:$base_menu_width;
    background-color: orange;
    width: calc(100% - $base_menu_width);
    height:calc(100vh - $base_navbar_height);
    padding: 20px;
    //主面板内容溢出时，会自动设置滚动条
    overflow: auto;
  }

}

</style>
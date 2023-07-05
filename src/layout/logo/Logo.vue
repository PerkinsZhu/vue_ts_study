<!--
 @Name
 @Description
 @author PerkinsZhu
 @date 2023/7/1 16:46
-->
<script setup lang="ts">
  import setting from "@/setting.ts"
</script>

<template>
  <div class="logo_container" v-if="setting.showTitle">
    <img :src="setting.log_img" alt=""/>
    <p>{{ setting.title }}</p>
  </div>
</template>

<style scoped lang="scss">
.logo_container {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  height: $base_logo_height;

  img {
    width: 40px;
    height: 40px;
  }

  p {
    font-size: 30px;
    color: #cccccc;
    padding-left: 20px;
  }
}
</style>
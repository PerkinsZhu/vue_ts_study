<!--
 @Name
 @Description
 @author PerkinsZhu
 @date 2023/6/28 16:17
-->
<script setup lang="ts">
</script>

<template>
 <div class="test"><p>style test</p></div>
</template>

<style scoped lang="scss">
.test{
  // $color 该变量取自于 styles\variables.scss
  background-color: $color;
  width: 100px;
  height: 100px;
}
</style>
<!--
 @Name 
 @Description 
 @author PerkinsZhu
 @date 2023/7/4 16:24 
-->
<script setup lang="ts">

</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <div>
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>

<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  opacity: 1;
  //transform: rotate(360deg);
  transform: scale(1);
}


</style>
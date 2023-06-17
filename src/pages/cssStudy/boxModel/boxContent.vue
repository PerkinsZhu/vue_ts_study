<template>
  <span id="base">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, numquam.
    Aliquid, quasi voluptatibus aliquam repudiandae tempora suscipit tenetur
    fuga modi dolor, tempore rem sequi, consectetur sapiente. Qui voluptatem
    nostrum eaque.
  </span>

  <br/>
  <img src="./内边距设置.png"/>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#base {
  background-color: slateblue;

  // 通过调整视口，div的宽和高可以自动适配。但是由于浏览器的限制，宽度不能一直小到零
  min-width: 500px;
  max-width: 800px;

  min-height: 200px;
  max-height: 600px;


  padding: 300px 50px;
}


</style>

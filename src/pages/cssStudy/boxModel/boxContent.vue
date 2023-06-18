<template>
  <span id="base">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, numquam.
    Aliquid, quasi voluptatibus aliquam repudiandae tempora suscipit tenetur
    fuga modi dolor, tempore rem sequi, consectetur sapiente. Qui voluptatem
    nostrum eaque.
  </span>

  <br />
  <img id="innerBox" src="./内边距设置.png" />

  <div class="content">
    <div id="center">
      通过 可以使我左右居住。但是上下居中是不行的
      <br>
      下margin 可以控制下面的兄弟位置
    </div>
    <img src="./盒子外边距_margin.png" />
  </div>
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

  padding: 20px 50px;
}

#innerBox {
  width: 400px;
  height: 400px;
}

.content {
  margin-top: 200px;

}

.content #center {
  background: skyblue;
  width: 400px;
  /* 
  margin-left: auto;
  margin-right: auto;
   */
  // 或者通过复合元素的方式。 第一个参数控制上下 第二个参数控制左右
  margin: 20px auto;

}
</style>

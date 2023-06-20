<template>
  <div class="main clearfix">
    <!-- 头部区域 -->
    <div class="header clearfix">
      <div class="logo leftfix">logo</div>
      <div class="banner1 leftfix">banner1</div>
      <div class="banner2 leftfix">banner2</div>
    </div>
    <!-- 菜单 -->
    <div class="menu">菜单</div>
    <!-- 主体内容 -->
    <div class="content">
      <!-- 左边内容 -->
      <div class="left leftfix">
        <!-- 上部内容 -->
        <div class="up clearfix">
          <div class="item1 leftfix">栏目一</div>
          <div class="item2 leftfix">栏目二</div>
        </div>
        <div class="down">
          <div class="item3 leftfix">栏目三</div>
          <div class="item4 leftfix">栏目四</div>
          <div class="item5 leftfix">栏目五</div>
          <div class="item6 leftfix">栏目六</div>
        </div>
      </div>

      <div class="right rightfix">
        <div class="item7 leftfix">栏目七</div>
        <div class="item8 leftfix">栏目八</div>
        <div class="item9 leftfix">栏目九</div>
      </div>

    </div>
    <!-- 页脚 -->
    <div class="footer leftfix"> 页脚</div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
* {
  margin: 0px;
  padding: 0px;
}

.footer {
  background-color: gray;
  height: 60px;
  width: 960px;
  text-align: center;
  margin-top: 10px;
  line-height: 60px;
}

.left {
  width: 750ox;
}

.right {
  width: 200px;
  height: 410px;
  margin-top: 10px;
}

.item7,
.item8,
.item9 {
  height: 128px;
  width: 198px;
  text-align: center;
  line-height: 128px;
  border: 1px dotted black;
}

.item8 {
  margin: 10px auto;
}

.up {
  width: 750px;
  margin-left: 0px;
  margin-top: 10px;
  text-align: center;
}

.content {
  width: 960px;
}

.item3,
.item4,
.item5,
.item6 {
  width: 178px;
  height: 198px;
  border: 1px black dotted;
  margin-top: 10px;
  margin-right: 10px;
  line-height: 200px;
  text-align: center;

}

.item4,
.item5 {}

.item1 {
  height: 200px;
  line-height: 200px;
  border: 1px black dotted;
}

.item2 {
  margin-left: 10px;
  // margin-right: 10px;
}

.item1,
.item2 {
  width: 368px;
  height: 198px;
  line-height: 200px;

  border: 1px black dotted;
}

.menu {
  height: 30px;
  width: 960px;
  background-color: gray;
  margin-top: 10px;
  text-align: center;
  line-height: 30px;
}

.main {
  width: 960px;
  height: 400px;
  margin: 0px auto;
}

.header {
  text-align: center;
  line-height: 80px;
}

.logo {
  background-color: gray;
  height: 80px;
  width: 200px;

}

.banner1 {
  background-color: gray;
  height: 80px;
  width: 540px;
  margin-right: 10px;
  margin-left: 10px;
}

.banner2 {
  background-color: gray;
  height: 80px;
  width: 200px;

}

.leftfix {
  float: left;
}

.rightfix {
  float: right;
}

.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
</style>
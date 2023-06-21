<template>
  <div class="topbar">


    <div class="container clearfix">
      <!-- 左侧欢迎栏 -->
      <div class="left leftfix">
        <span class="welcome">perkins欢迎您</span>
        <span class="span-login">请<a href="#">登录</a></span>
        <span class="span-register"><a href="#">免费注册</a></span>
      </div>

      <!-- 右侧欢迎栏 -->
      <div class="right rightfix">
        <ul class="clearfix">
          <li class="rightfix"><a href="#">小炒肉沫</a></li>
          <li class="rightfix"><a href="#">西红柿蛋</a></li>
          <li class="rightfix"><a href="#">木耳炒肉</a></li>
          <li class="rightfix"><a href="#">红烧排骨</a></li>
          <li class="rightfix"><a href="#">糖醋排骨</a></li>
          <li class="rightfix"><a href="#">夫妻肺片</a></li>
          <li class="rightfix"><a href="#">唔哈哈哈</a></li>
        </ul>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang='scss'>
/* topbar 开始 */
.topbar {
  margin-left: 0px;
  margin-right: 0px;
  line-height: 30px;
  background-color: #888;
  height: 30px;
}

/* topbar 结束 */

.container {
  width: 1190px;
  margin: 0px auto;
}

.span-login {
  padding: 0px 10px;
  border-right: 1px dotted black;
}

.span-register {
  padding-left: 10px;
}

/* 基础样式 开始 */
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}

.leftfix {
  float: left;
}

.rightfix {
  float: right;
}

/* 基础样式 结束 */
</style>
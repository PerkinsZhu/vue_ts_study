<!--
 @Name 
 @Description 
 @author PerkinsZhu
 @date 2023/6/29 18:22 
-->
<script setup lang="ts">
import { ref } from "vue";
import { User, Lock, Warning } from "@element-plus/icons-vue";

const userName = ref("");
const password = ref("");

const form = ref({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: ""
});

const onSubmit = () => {
  console.log("submit!");
};
</script>


<template>
  <div class="login_container">
    <el-form :model="form" label-width="60px">
      <el-row>
        <el-col :span="24">
          <el-text class="hello">Hello</el-text>
        </el-col>
        <el-col :span="24">
          <el-text class="welcome">欢迎来到购物天堂</el-text>
        </el-col>
      </el-row>
      <el-form-item label="用户名">
        <el-input v-model="userName" :prefix-icon="User" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password" :prefix-icon="Lock" show-password="true" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  display: flex;

  .el-form {
    width: 400px;
    padding: 20px;
    margin: 17% 10% auto auto;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
  }

  .el-form-item__label {
    width: 60px;
  }

  .hello {
    font-size: 30px;
  }

  .welcome {
    font-size: 18px;
    display: inline-block;
    margin: 10px auto;
  }
}

</style>
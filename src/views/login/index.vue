<!--
 @Name 
 @Description 
 @author PerkinsZhu
 @date 2023/6/29 18:22 
-->
<script setup lang="ts">
import { ref, reactive } from "vue";
import { User, Lock, Warning } from "@element-plus/icons-vue";

import useUserStore from "@/store/modules/user";
import { ElNotification, FormRules } from "element-plus";

let useStore = useUserStore();

import $router from "@/router";

const loading = ref(false);

let loginFormRef = ref();
const form = reactive({
  userName: "",
  password: ""
});

const rules = {
  userName: [
    { required: true, message: "用户名必填", trigger: "change" }

  ],
  password: [
    {
      required: true,
      message: "密码必填",
      trigger: "change"
    },
    { min: 5, max: 8, message: "密码长度必须大于5", trigger: "change" }
  ]
};

const onSubmit = async () => {

  //表单校验通过后才能提交
  await loginFormRef.value.validate();

  loading.value = true;
  try {
    await useStore.userLogin(form);
    $router.push("/");
    ElNotification({
      type: "success",
      message: "登陆成功",
      title: `Hi, 你好`
    });
  } catch (error) {
    ElNotification({
      type: "error",
      message: (error as Error).message
    });
  } finally {
    loading.value = false;
  }
};

</script>


<template>
  <div class="login_container">
    <el-form :model="form" :rules="rules" ref="loginFormRef"
             label-width="70px">
      <el-row>
        <el-col :span="24">
          <el-text class="hello">Hello</el-text>
        </el-col>
        <el-col :span="24">
          <el-text class="welcome">欢迎来到购物天堂</el-text>
        </el-col>
      </el-row>
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="form.userName" :prefix-icon="User" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" :prefix-icon="Lock" show-password />
      </el-form-item>
      <el-form-item>
        <el-button type="primary"  class="loginButton" @click="onSubmit" :loading="loading" >登录</el-button>
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

  .loginButton {
    width: 100%;
  }
}

</style>
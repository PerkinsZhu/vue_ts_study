<template>
  <div class="box">I AM APP Test</div>
</template>

<script setup lang="ts">
import request from "@/utils/request.ts";
import { onMounted } from "vue";

onMounted(() => {
  request({
    url: "/user/info",
    method: "get",
    data: {
      username: "admin",
      password: "123456"
    }
  }).then(res => {
    console.log(res);
  });
});
console.log(import.meta.env);
</script>

<style scoped lang="scss"></style>

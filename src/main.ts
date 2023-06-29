import { createApp } from "vue";
import App from "@/App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// @ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
// svg插件需要配置代码
import "virtual:svg-icons-register";
//引入全局样式
import "@/styles/index.scss";

import { Test } from "@/components/Test/Test.ts";

// 测试mock函数
Test.testMock();

const app = createApp(App);

app.use(ElementPlus);
app.use(ElementPlus, {
  locale: zhCn
});

app.mount("#app");

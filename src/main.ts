import { createApp } from "vue";

import App from "@/App.vue";

// svg插件需要配置代码
import "virtual:svg-icons-register";

import router from "@/router/index.ts";

// el-notification 需要引入css，否则嵌入到页面中
import "element-plus/theme-chalk/el-notification.css";
import "element-plus/theme-chalk/dark/css-vars.css";
//引入全局样式
import "@/styles/index.scss";

import pinia from "@/store";

import globalComponents from "@/components/index.ts";

const app = createApp(App);

app.use(globalComponents);
app.use(router);
app.use(pinia);

app.mount("#app");

import { createApp } from "vue";
import App from "@/App.vue";

// svg插件需要配置代码
import "virtual:svg-icons-register";

import router from "@/router/index.ts";
//引入全局样式
import "@/styles/index.scss";

const app = createApp(App);

app.use(router);

app.mount("#app");

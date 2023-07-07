/*
* @Name 
* @Description 
* @author PerkinsZhu
* @date 2023/7/7 13:36 
**/

import router from "@/router";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

import pinia from "@/store";
import useUserStore from "@/store/modules/user.ts";
import { ElNotification } from "element-plus";

const userStore = useUserStore(pinia);

router.beforeEach(async (to, from, next) => {
  console.log("beforeEach", to, from);

  console.log(userStore.token);
  const userName = userStore.user.userName;

  if (userStore.token) {
    //登录成功后检测是否有用户名，如果没有则去查询用户信息
    console.log("userName", userName);
    if (userName || userName == "") {
      try {
        await userStore.requestUserInfo();
      } catch (e) {
        //如果获取失败，则 token过期 或 token被修改，则执行 退出逻辑
        userStore.logout();
        next({ path: "/login" });
      }
    }

    if (to.path === "/login") {
      next({ path: "/home" });
    } else {
      next();
    }
  } else {
    if (to.path === "/login") {
      next();
    } else {
      next({ path: "/login" });
    }

  }
  nprogress.start();
});

router.afterEach((to, from) => {
  console.log("afterEach", to, from);
  nprogress.done();
});
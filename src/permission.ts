/*
* @Name 
* @Description 
* @author PerkinsZhu
* @date 2023/7/7 13:36 
**/

import router from "@/router";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import setting from "@/setting.ts";

nprogress.configure({ showSpinner: false });

import pinia from "@/store";
import useUserStore from "@/store/modules/user.ts";

const userStore = useUserStore(pinia);

router.beforeEach(async (to, from, next) => {

  document.title = setting.title + to.meta.title;

  const userName = userStore.user.userName;

  if (userStore.token) {

    if (to.path === "/login") {
      next({ path: "/home" });
    } else {

      //登录成功后检测是否有用户名，如果没有则去查询用户信息
      if (!userName || userName == "") {
        try {
          await userStore.requestUserInfo();
          next({ ...to });
        } catch (e) {
          //如果获取失败，则 token过期 或 token被修改，则执行 退出逻辑
          await userStore.logout();
          next({ path: "/login", query: { redirect: to.path } });
        }
      } else {
        next();
      }
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
  nprogress.done();
});
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

const userStore = useUserStore(pinia);

router.beforeEach((to, from, next) => {
  console.log("beforeEach", to, from);

  console.log(userStore.token);
  if (userStore.token) {
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
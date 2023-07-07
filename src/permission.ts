/*
* @Name 
* @Description 
* @author PerkinsZhu
* @date 2023/7/7 13:36 
**/

import router from "@/router";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

router.beforeEach((to, from, next) => {
  console.log("beforeEach", to, from);
  nprogress.start();
  next();
});

router.afterEach((to, from) => {
  console.log("afterEach", to, from);
  nprogress.done();
});
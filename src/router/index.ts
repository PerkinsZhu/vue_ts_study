/*
* @Name 
* @Description 
* @author PerkinsZhu
* @date 2023/6/30 13:21 
**/
import { createRouter, createWebHashHistory } from "vue-router";
import { constantRoute } from "@/router/routes.ts";

const routes = createRouter({
  history: createWebHashHistory(),
  routes: constantRoute,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

export default routes;
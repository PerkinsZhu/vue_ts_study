/*
* @Name 
* @Description 
* @author PerkinsZhu
* @date 2023/6/30 13:26 
**/
export const constantRoute = [{
  path: "/login",
  component: () => import("@/views/login/index.vue"),
  name: "login"
}, {
  path: "/404",
  component: () => import("@/views/404/index.vue"),
  name: "404"
}, {
  path: "/",
  component: () => import("@/layout/index.vue"),
  name: "home"
}, {
  path: "/:pathMatch(.*)*",
  redirect: "/404",
  name: "any"
}
];
/*
* @Name 
* @Description 
* @author PerkinsZhu
* @date 2023/6/30 15:44 
**/

import { defineStore } from "pinia";
import { reqLogin } from "@/api/user";
import { LoginFormData } from "@/api/user/type.ts";
import {constantRoute} from "@/router/routes.ts";
import {UserState} from "@/store/modules/types";

const TOKEN_KEY = "TOKEN";

const useUserStore = defineStore("User", {
  state: ():UserState => {
    return {
      token: localStorage.getItem(TOKEN_KEY),
      menuRoutes: constantRoute
    };
  },
  actions: {
    async userLogin(formData: LoginFormData) {
      const loginResponseData = await reqLogin(formData);
      if (loginResponseData.code == 200) {
        this.token = loginResponseData.data.token;
        localStorage.setItem(TOKEN_KEY, loginResponseData.data.token);
        console.log("loginResponseData", loginResponseData);
        return "ok";
      } else {
        return Promise.reject(new Error(loginResponseData.message as string));
      }
    }
  },
  getters: {}
});

export default useUserStore;
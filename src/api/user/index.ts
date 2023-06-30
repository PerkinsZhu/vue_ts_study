import request from "@/utils/request.ts";
import type { LoginFormData, LoginResponseData, userInfoResponseData } from "./type.ts";

enum API {
  LOGIN = "/user/login",
  USERINFO = "/user/info"
}

export const reqLogin = (data: LoginFormData) => request.post<any, LoginResponseData<any>>(API.LOGIN, data);
export const reqUserInfo = () => request.get<any, userInfoResponseData>(API.USERINFO);
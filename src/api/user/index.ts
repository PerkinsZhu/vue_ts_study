import request from "@/utils/request.ts";

enum API {
  LOGIN = "/admin/acl/index/login",
  USERINFO = "/admin/acl/index/info",
  LOGOUT = "/admin/acl/index/logout",
}

export const reqLogin = (data: any) => request.post<any, any>(API.LOGIN,
  { username: data.userName, password: data.password });

export const reqUserInfo = () => request.get<any, any>(API.USERINFO);

export const logout = () => request.post<any, any>(API.LOGOUT);
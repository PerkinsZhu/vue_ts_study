// 登录接口需要携带参数ts类型
export interface LoginFormData {
  username?: string;
  password?: string;
}

export interface ResponseData {
  code?: number;
  message?: string;
  ok?: boolean;
}

export interface LoginResponseData<T> extends ResponseData {
  data?: T;
}

export interface userInfoResponseData extends ResponseData {
  data: {
    user: {
      routes: string[]
      buttons: string[]
      roles: string[]
      userName: string
      avatar: string
    }
  };
}

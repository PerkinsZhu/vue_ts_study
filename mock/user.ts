function createUserList() {
  return [
    {
      userId: 1,
      avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      userName: "admin",
      password: "123456",
      desc: "平台管理员",
      roles: ["平台管理员"],
      buttons: ["cuser.detail"],
      routes: ["home"],
      token: "Admin Token"
    },
    {
      userId: 2,
      avatar:
        "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      userName: "system",
      password: "123456",
      desc: "系统管理员",
      roles: ["系统管理员"],
      buttons: ["cuser.detail", "cuser.user"],
      routes: ["home"],
      token: "System Token"
    }
  ];

}

export default [
  {
    url: "/api/user/login",
    method: "post",
    response: ({ body }) => {
      const { userName, password } = body;

      const checkUser = createUserList()
        .find((item) => {
          return item.userName === userName && item.password === password;
        });

      if (checkUser) {
        return {
          code: 200,
          message: "登录成功",
          data: {
            token: "123456789"
          }
        };
      } else {
        return {
          code: 201,
          message: "账号或密码错误"
        };
      }

    }
  },
  {
    url: "/api/user/info",
    method: "get",
    response: (request) => {
      const token = request.headers.token;
      const checkUser = createUserList().find((item) => item.token === token);
      if (!checkUser) {
        return {
          code: 201,
          message: "获取用户信息失败",
          data: {}
        };
      }
      return {
        code: 200,
        message: "获取用户信息成功",
        data: {
          user: checkUser
        }
      };
    }
  }
];
import axios from "axios";

export class Test {
  public static testMock() {
    axios({
      url: "/api/user/login",
      method: "post",
      data: {
        username: "admin",
        password: "111111"
      }
    });
  }
}
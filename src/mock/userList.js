const userList = {
  code: 200,
  message: "success",
  data: {
    total: 100,
    "rows|10": [
      {
        id: "@guid",
        name: "@cname",
        "age|20-30": 23,
        "job|1": ["前端工程师22", "后端工程师", "UI工程师", "需求工程师"],
      },
    ],
  },
};
const loginOk = {
  code: 200,
  message: "登录成功",
  data: {
    result: true,
  },
};
const loginError = {
  code: 500,
  message: "登录失败",
  data: {
    result: false,
  },
};
export default {
  "get|/getUserList": (options) => {
    console.log(options, "options");
    return userList;
  },
  "post|/login": (options) => {
    console.log(options, "options222");
    let parmas = JSON.parse(options.body);
    if (parmas.username == "admin" && parmas.password == 123456) {
      return loginOk;
    } else {
      return loginError;
    }
  },
};

import axios from "axios";
import { Notification } from "element-ui";
const instance = axios.create({
  timeout: 3000,
});

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use((response) => {
  console.log(response.data, "res");
  switch (response.data.code) {
    case 500:
      Notification({
        title: "服务器错误",
        message: "xxxxxx",
        duration: 2000,
      });
      return {
        message: "服务器错误",
      };
    default:
      break;
  }
  return response.data;
});

export default instance;

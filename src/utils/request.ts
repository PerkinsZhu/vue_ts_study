/*
* @Name
* @Description
* @author PerkinsZhu
* @date 2023/6/29 11:28
* */

import axios from "axios";
import { ElMessage } from 'element-plus';

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000// 请求超时时间
});

// 请求拦截器
request.interceptors.request.use((config) => {
  console.log("请求拦截器", config)
  return config;
});

request.interceptors.response.use((response) => {
  console.log("响应拦截器", response)
  return response.data;
}, error => {

  let message: string;
  switch (error.response.status) {
    case 401:
      message = "未授权，请登录";
      break;
    case 403:
      message = "拒绝访问";
      break;
    case 404:
      message = `请求地址出错: ${error.response.config.url}`;
      break;
    case 500:
      message = "服务器内部错误";
      break;
    default:
      message = error.response.data.message;
  }
  ElMessage({
    type: "error",
    message
  });
  return Promise.reject(error);
});

export default request;
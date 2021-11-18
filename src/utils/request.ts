import store from "@/store";
import axios from "axios";
import { ElMessage } from "element-plus";

const instance = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    config.headers!.Authorization = store.state.token;
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.data.message) {
      ElMessage({
        showClose: true,
        message: response.data.message,
        type: "success",
      });
    }
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    ElMessage({
      showClose: true,
      message: error.response.data.message,
      type: "error",
    });
    if (error.response.data.code === 10004) {
      store.commit('changeView', {
        routerParams: {
          name: 'Login'
        }
      })
    }
    return Promise.reject(error);
  }
);

export default instance;

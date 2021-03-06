import axios from 'axios';
import {store} from "../store";

axios.defaults.withCredentials = true;

// 创建axios实例
const request = axios.create({
  // baseURL,
  baseURL: '/r',
  timeout: 400000 // 请求超时时间
});

// request拦截器
request.interceptors.request.use(config => {
  // console.log(store.getState().app.token);
  let {app: {token}} = store.getState();
  config.headers.token = token;
  return config
}, error => {
  // console.log(error); // for debug
  return Promise.reject(error)
});

// response拦截器
request.interceptors.response.use(
  response => {
    /**
     * code为非200是抛错
     */
    const {data, data: {code}} = response;
    if (!code) {
      return Promise.reject(response.data || response)
    }
    if (code !== 200) {
      // 登录失败
      if (code === 202) {

      }
      return Promise.reject(data);
    }
    return Promise.resolve(data)
  },
  error => {
    // console.log(error);
    return Promise.reject(error);
  }
);

export default request;
export {request}

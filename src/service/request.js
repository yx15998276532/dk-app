//1.发送请求的时候，如果有token,把token保存到请求头中
//2.响应的时候，如果有token,把token保存到本地
//3.响应的时候，如果响应状态码是403（没有token, token失败）,在本地token删除

import axios from "axios";

export default function () {
    let token = localStorage.getItem("token");
    let instance = axios;
    if (token) {
      instance = axios.create({
        headers: {
            authorization: "bearer " + token,
          }
      });
    }
    instance.interceptors.response.use(function (resp) {
      if(resp.headers.authorization) {
        localStorage.setItem("token", resp.headers.authorization);
      }
      return resp;
    }, function (err) {
        if(err.response.status === 403) {
            localStorage.removeItem("token");
        }
        return Promise.reject(err);
    });
    return instance;
} 



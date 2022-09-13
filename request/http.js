import Request from "./request.js";
import {
  getStorage,
  setStorage
} from "@/utils/shared/handleStatus.js"

// 实例化对象存储Request对象
let instance;
export const http = async (uni, options, flag) => {
  if (!instance) {
    instance = new Request(uni)
  }

  const {
    method
  } = options

  if (!method) {
    return Promise.resolve({
      status: fail,
      message: "error: the method attribute needed",
      data: {}
    });
  }

  options.method = options.method.toUpperCase();

  // 获取token
  let token = getStorage(uni, "code")

  // 配置请求拦截器
  instance.interceptor({
    header: {
      Authorization: token ? `Bearer ${token}` : "saa"
      // "content-type": "multipart/form-data"
    },
  })

  // 返回请求回的结果
  return await instance.sendRequest(options, flag)
}

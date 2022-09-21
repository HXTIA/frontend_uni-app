import {
  addAttribute,
  copyObject,
  addTargetAttribute
} from "@/utils/shared/handleObj.js";

import {
  handleRequestRes
} from "@/utils/shared/handleStatus.js"

export const enumCode = {
  SUCCESS: 0, // 成功
  CREAETED: 201, // 创建成功
  DELETEED: 204, // 删除成功
  UNAUTHORIZED: 401, // 没有权限
}

export const URLS = {
  UPLOAD_FILE: "",
}

export default class Request {
  constructor(instance, options) {
    this.instance = instance.request;
    this.uni = instance;
    this.request = {};
    this.createInterceptor();
  }



  async sendRequest(options, flag) {
    const inpOptions = addAttribute(options)
    // const option = Object.assign(inpOptions, this.request);
    const option = addTargetAttribute(inpOptions, this.request);
    console.log(option);
    const res = await this.instance.call(this, option)
    if (flag) {
      // 处理需要添加权限的数据
      return handleRequestRes(this.uni, res);
    }
    return res
  }

  // 拦截请求，加载动画的触发期
  createInterceptor() {
    this.uni.addInterceptor("request", {
      invoke: () => {
        this.uni.showLoading({
          title: "请求中...",
          mask: true,
        })
      },
      success: () => {
        this.uni.showToast({
          icon: "success",
          title: "Get!",
          duration: 1000
        })
      },
      fail: () => {
        this.uni.showToast({
          icon: "error",
          title: "Fail!",
          duration: 1000
        })
      },
      complete: () => {
        this.uni.hideLoading()
      }
    })
  }

  interceptor(options) {
    this.request = options;
  }
}

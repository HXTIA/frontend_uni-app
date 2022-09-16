import {
  http
} from "@/request/http.js"

import {
  getStorage
} from "@/utils/shared/handleStatus.js"

import {
  addTargetAttribute
} from "@/utils/shared/handleObj.js"

import userStore from "@/stores/users/index.js"
const store = userStore();

export const checkLogin = (uni) => {
  const code = getStorage(uni, "token");
  if (!code) {
    console.log("还没登录");
    return uni.navigateTo({
      url: "/pages/login/index"
    })
  }
  // 判断该账号是否注册过
  // 向后端发送请求

  // 已登录，处理获取信息
}

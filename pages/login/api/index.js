import {
  login
} from "@/request/userInfo.js"
import {
  setStorage
} from "@/utils/shared/handleStatus.js"

import {
  http
} from "@/request/http.js"

import userStore from "@/stores/users/index.js"
const store = userStore();

export const handleLogin = async (uni) => {
  try {
    const res = await login(uni)

    // 取消登录或授权
    if (!res) {
      return false;
    }

    console.log(res, "login-api");

    // TODO: 根据code向后端发起请求，重新获取token

    // const reqRes = http(uni, {
    //   url: "",
    //   method: "GET",
    //   data: {
    //     code: res.code
    //   }
    // }, false)

    // 本地存储code -> 伪token -> 依靠后端返还token做判断
    setStorage(uni, "token", res.code)
    // setStorage(uni, "token", reqRes.data.data);


    // 状态管理存储个人信息 & 更新本地存储

    // 处理userInfo -> 请求来的头像分辨率为132 -> 将132删除替换为0
    const pos = res.userInfo.avatarUrl.lastIndexOf("132")
    res.userInfo.avatarUrl = res.userInfo.avatarUrl.substring(0, pos) + "0"
    store.setUserInfo(res.userInfo, uni);

    return true
  } catch (e) {
    //TODO handle the exception
    return false;
  }
}

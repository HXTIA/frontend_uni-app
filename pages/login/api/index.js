import {
  login
} from "@/request/userInfo.js"
import {
  setStorage
} from "@/utils/shared/handleStatus.js"

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

    // 本地存储code
    setStorage(uni, "token", res.code)

    // 状态管理存储个人信息 & 更新本地存储
    store.setUserInfo(res.userInfo, uni);

    return true
  } catch (e) {
    //TODO handle the exception
    return false;
  }
}

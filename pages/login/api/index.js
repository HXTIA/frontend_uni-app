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

    console.log(res);

    // 本地存储code
    setStorage(uni, "code", res.code)
    // 状态管理存储个人信息
    store.setUserInfo(res.userInfo);

    return true
  } catch (e) {
    //TODO handle the exception
    return false;
  }
}

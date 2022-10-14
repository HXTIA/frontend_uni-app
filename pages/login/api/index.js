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
    const res = await login(uni);

    // 取消登录或授权
    if (!res) {
      return false;
    }

    console.log(res, "login-api");

    // TODO: 根据code向后端发起请求，重新获取token
    const reqRes = await http(uni, {
      url: "http://119.29.157.231:8888/wx/users/getSessionId",
      method: "GET",
      data: {
        code: res.code
      }
    }, false)
    console.log('token',reqRes);
    // 本地存储code -> 伪token -> 依靠后端返还token做判断
    setStorage(uni, "token", reqRes.data.data);

    // 状态管理存储个人信息 & 更新本地存储
    const requestUserInfo = await http(uni, {
      url: "http://119.29.157.231:8888/wx/users/loginAuth",
      method: "POST",
      data: {
        encryptedData: res.encryptedData,
        iv: res.iv,
        rawData: res.rawData,
        signature: res.signature
      }
    }, true)

    const {
      code,
      data
    } = requestUserInfo.data;

    if (code !== 1) return false;

    // 处理userInfo -> 请求来的头像分辨率为132 -> 将132删除替换为0
    const pos = data.userVo.avatarUrl.lastIndexOf("132")
    data.userVo.avatarUrl = data.userVo.avatarUrl.substring(0, pos) + "0"
    store.setUserInfo(data.userVo, uni);

    return true
  } catch (e) {
    //TODO handle the exception
    console.log(e);
    return false;
  }
}

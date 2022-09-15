import {
  setStorage
} from "@/utils/shared/handleStatus.js"

export default {
  actions: {
    setUserInfo(userInfo, uni) {
      // 更新
      this.userInfo = userInfo;
      // 存储
      setStorage(uni, "userInfo", userInfo);
    },
    setLoginStatus(flag) {
      this.isLogin = flag;
    },
    setUni(uni) {
      this.uni = uni;
    }
  }
}

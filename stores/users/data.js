import {
  getStorage
} from "@/utils/shared/handleStatus.js"
export default {
  state() {
    return {
      userInfo: {},
      isLogin: false,
    }
  },
  getters: {
    getUserInfo: (state) => state.userInfo || undefined
  }
}

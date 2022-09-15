import {
  getStorage
} from "@/utils/shared/handleStatus.js"
export default {
  state() {
    return {
      userInfo: {},
      isLogin: false,
      uni: {}
    }
  },
  getters: {
    getUserInfo: (state) => state.userInfo || getStorage(state.uni, "userInfo") || undefined
  }
}

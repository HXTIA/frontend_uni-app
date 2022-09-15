export default {
  state() {
    return {
      userInfo: {}
    }
  },
  getters: {
    getUserInfo: (state) => state.userInfo || undefined
  }
}

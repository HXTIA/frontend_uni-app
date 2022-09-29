export default {
  state() {
    return {
      data: [],
      isEnd: false
    }
  },
  getters: {
    getData: (state) => state.data || []
  }
}

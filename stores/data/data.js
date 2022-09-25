export default {
  state() {
    return {
      data: []
    }
  },
  getters: {
    getData: (state) => state.data || []
  }
}

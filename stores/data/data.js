export default {
  state() {
    return {
      data: [],
      id: 0,
    }
  },
  getters: {
    getData: (state) => state.data || []
  }
}

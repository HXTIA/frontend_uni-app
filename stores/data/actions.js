export default {
  actions: {
    setData(data) {
      this.data.push(...data)
      return this.data
    },
  }
}

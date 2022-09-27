export default {
  actions: {
    setData(data) {
      this.data.push(...data)
    },
    setId(id) {
      this.id = id;
    }
  }
}

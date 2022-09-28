export default {
  actions: {
    setData(data) {
      this.data.push(...data);
    },
    clearData() {
      this.data.splice(0, this.data.length);
    }
  }
}

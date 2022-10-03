export default {
  actions: {
    setData(data) {
      this.data.push(...data);
      this.isEnd = true;
    },
    clearData() {
      this.data.splice(0, this.data.length);
    }
  }
}

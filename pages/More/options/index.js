let uni;
export const createInstance = (instance) => {
  uni = instance;
}



// 导出数据
export const data = [{
  title: "开启订阅",
  handleFunction: (flag) => {
    uni.requestSubscribeMessage({
      tmplIds: ["V8JzyKTZZ16srBpi1QQMMUDCLMYzutIVvWGy8irgxiM"],
      success(ops) {
        console.log(ops);
      }
    })
  }
}, ]

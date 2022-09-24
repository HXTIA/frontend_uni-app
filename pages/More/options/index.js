import {
  getStorage,
  setStorage
} from "@/utils/shared/handleStatus.js"

import {
  templateId
} from "@/data/publicOptions.js"

import {
  uni
} from "@/utils/shared/createUniInstance.js"

// 处理订阅作业函数
const handleSubscribeMessage = (flag) => {
  return new Promise((reslove) => {
    if (flag) {
      return uni.requestSubscribeMessage({
        tmplIds: [templateId.HOMEWORK_FIVE_KEY],
        success(ops) {
          const flag = ops[templateId.HOMEWORK_FIVE_KEY];
          if (flag === 'accept') {
            const flag = setStorage(uni, "SubscribeMessage", true)
            uni.showToast({
              title: "订阅成功！"
            })
            reslove(true);
          } else {
            uni.showToast({
              title: "拒绝授权！",
              icon: "error"
            })
            reslove(false);
          }
        }
      })
    }
    // 取消订阅
    uni.showToast({
      title: "功能开发中...",
      icon: "error",
      duration: 2000
    })
  })
}


// 导出功能数据
export const returnData = (instance) => {
  let uni = instance;
  return [{
    title: "订阅作业提醒",
    handleFunction: handleSubscribeMessage,
    isChecked: getStorage(uni, "SubscribeMessage") || false
  }]
}

// 导出提示数据
export const tipOptions = ["这是第一段", "这是第二段", "这是第三段"];

export const isShowTips = getStorage(uni, "isSettingTip") || false;

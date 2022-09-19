import {
  getStorage,
  setStorage
} from "@/utils/shared/handleStatus.js"

import {
  templateId
} from "@/data/publicOptions.js"

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

    // 用户自行打开取消订阅的吗，面板
    // 当关闭之后调用获取设置的API
    // 如果订阅状态为false -> 已关闭
    uni.openSetting({
      success() {
        // 获取配置
        uni.getSetting({
          withSubscriptions: true,
          success(ops) {
            const {
              subscriptionsSetting
            } = ops
            if (!subscriptionsSetting.mainSwitch) {
              setStorage(uni, "SubscribeMessage", false)

              reslove(true);
              return uni.showToast({
                title: "取消订阅成功！"
              })
            }

            reslove(false)
            return uni.showToast({
              title: "取消失败再试试！"
            })
          }
        })
      }
    })
  })
}


// 导出数据
export const returnData = (instance) => {
  let uni = instance;
  return [{
    title: "订阅作业提醒",
    handleFunction: handleSubscribeMessage,
    isChecked: getStorage(uni, "SubscribeMessage") || false
  }]
}

import {
  http
} from "@/request/http.js"

import {
  getStorage
} from "@/utils/shared/handleStatus.js"

import {
  addTargetAttribute
} from "@/utils/shared/handleObj.js"

import {
  templateId
} from "@/data/publicOptions.js"

// 在这里检测是否登录: 
// 是否存有token
// 登陆态是否过期 -> 过期 -> 重新登录并授权
// 已登录 -> 不影响 -> 给过
export const checkLogin = async (uni) => {
  console.log('检测sessionkey');
  // 如果未保存token -> 重新进行登陆
  const token = getStorage(uni, "token");
  if (!token) {
    console.log("还没登录");
    return uni.reLaunch({
      url: "/pages/login/index"
    })
  }
  console.log('发起checksession');
  // 获取登录态是否过期
  try {
    // 如果登录态过期 -> 该请求就会报错 -> need relogin
    // 所以只要是报错就意味着需要relogin -> 使用try catch捕捉
    const {
      errMsg
    } = await uni.checkSession();
  } catch (e) {
    //TODO handle the exception -> 重新登录
    uni.showToast({
      title: "过期重新登录呀!",
      icon: "error",
      success() {
        setTimeout(() => {
          uni.navigateTo({
            url: "/pages/login/index"
          })
        }, 1000)
      }
    })
  }
}


// 监测是否已经授权，授权了则每次都默认进行订阅
export const checkSubscribe = async (uni) => {
  const {
    subscriptionsSetting
  } = await uni.getSetting({
    withSubscriptions: true
  })
  console.log(subscriptionsSetting);
}

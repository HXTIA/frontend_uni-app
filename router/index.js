import {
  routerWhiteList
} from "./options"

import {
  getStorage
} from "@/utils/shared/handleStatus.js"

import userStore from "@/stores/users/index.js"
const store = userStore();

/**
 * 重写跳转函数,
 * @param {*} uni 
 * @param {*} options 
 */
export default (uni, options) => {
  if (checkInWhiteList(uni, options.url)) {
    // 该页面需要进行鉴权 ,且没有登录态的
    uni.navigateTo({
      url: "/pages/login/index"
    })
  } else {
    options.url = joinPath(options.url)
    uni.navigateTo(options)
  }
}

const checkInWhiteList = (uni, url) => {
  if (!routerWhiteList.includes(url)) {
    // 不在白名单 -> 需要权限才可访问 -> 是否登录(是否存在token)
    const res = checkIsLogin(uni)
    if (!res) {
      // 不存在登录token -> 登录 -> 重定向至登录界面
      return true
    }
    // 不在白名单中但是，是有登录态的
    return false
  };
  return false;
}

let cacheToken;

// 检查是否登录 -> 检查是否有 token 
function checkIsLogin(uni) {
  // 还没缓存过token -> 缓存，并判断是否有值 
  if (!cacheToken) {
    const res = getStorage(uni, "token");
    if (!res) {
      // res是一个undefined -> 还没有登陆过 -> 返回未登录状态
      return false
    }
    // res是正确的 -> 已登录 -> 缓存值 & 改变状态
    cacheToken = res;
    store.setLoginStatus(true);
    return true;
  }
  // 被缓存过了，直接通过
  return true;
}


function joinPath(url) {
  return `/pages/${url}/index`;
}

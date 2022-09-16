export const enumCode = {
  SUCCESS: 0, // 成功
  CREAETED: 201, // 创建成功
  DELETEED: 204, // 删除成功
  UNAUTHORIZED: 401, // 没有权限
}

/**
 * 同步获取存储 
 * @param {*} uni 
 * @param {*} key 
 */
export const getStorage = (uni, key) => {
  return uni.getStorageSync(key) ? uni.getStorageSync(key) : undefined
}

/**
 * 同步设置缓存
 * @param {*} uni 
 * @param {*} key 
 * @param {*} data 
 */
export const setStorage = (uni, key, data) => {
  try {
    uni.setStorageSync(key, data);
    return true;
  } catch {
    return false;
  }
}

/**
 * 处理响应回的数据 
 * 将响应的数据传入，判断状态码，进行是否具有权限的判定。
 * @param {*} res 
 */
export const handleRequestRes = (uni, res) => {
  const {
    data,
    status
  } = res;

  // 没权限，重定向至登陆页面
  if (status !== enumCode.UNAUTHORIZED) {
    // redirectTo
    uni.navigateTo({
      url: "/pages/login/index"
    })
    return Promise.resolve("warn: NO UNAUTHORIZED , LOGIN IN PLEASE")
  }
  return res
}

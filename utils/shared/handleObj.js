/**
 *  给对象添加属性
 * @param {*} options
 * @return Object 
 */
export const addAttribute = (options) => {
  const obj = {}
  for (const item in options) {
    let ele = options[item]
    obj[item] = ele
  }
  return obj
}

/**
 * 复制一个对象的属性到另一个函数
 * @param {*} target 
 * @param {*} options 
 */
export const copyObject = (target, options) => {
  for (const item in options) {
    const ele = options[item];
    Object.assign(target, options[item]);
  }
  return target
}

/**
 * 合并对象到指定的对象上 
 * @param {*} target 
 * @param {*} options 
 */
export const addTargetAttribute = (target, options) => {
  for (const item in options) {
    const ele = options[item]
    if (typeof ele === "object" && target.hasOwnProperty(item)) {
      Object.assign(target[item], ele);
    } else {
      target[item] = ele
    }
  }
  return target
}

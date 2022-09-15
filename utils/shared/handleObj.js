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
    let ele = options[item]
    target[item] = ele
  }
  return target
}

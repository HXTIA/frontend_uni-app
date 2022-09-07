/**
 * @param {*} store 
 * @param {*} key 
 * @param {*} fn 
 * @return false | any
 */
export const watchStore = (store, key, fn) => {
  store.$subscribe((mutation, state) => {
    const {
      events
    } = mutation;
    if (!events.target.hasOwnProperty(key)) {
      return false;
    }

    // 是该监视的属性
    return fn();
  })
}

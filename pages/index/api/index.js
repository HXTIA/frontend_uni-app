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
  data
} from "../options.js"

import userStore from "@/stores/users/index.js"
const store = userStore();

// TODO: 发起请求 -> 缓存数据(存在哪？)
// 想法： 存进pinia
export const requestData = async () => {
  return await new Promise((reslove) => {
    setTimeout(() => {
      reslove(data)
    }, 2000)
  })
}

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

import dataStore from "@/stores/data/index.js"
const store = dataStore();

// TODO: 发起请求 -> 缓存数据(存在哪？)
// 想法： 存进pinia
export const requestData = async (uni) => {
  const token = getStorage(uni, "token");
  if (!token) {
    console.log("没数据，先登录");
    return [];
  }
  console.log("有数据了");
  const res = await new Promise((reslove) => {
    setTimeout(() => {
      reslove(data)
    }, 2000)
  })
  store.setData(res);
  return res
}

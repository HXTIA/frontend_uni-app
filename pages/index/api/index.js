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

  const token = getStorage(uni, "token") || undefined;
  if (!token) {
    uni.reLaunch({
      url: "/pages/login/index"
    })
    return [];
  }

  const res = await http(uni, {
    method: "GET",
    url: "https://console-mock.apipost.cn/app/mock/project/f4b5eed3-856b-4b0a-9ad3-f26bca3ea207/workitem"
  }, true);

  if (!res.data.length) return []

  // 存储状态
  store.setData(res.data);
  return store.getData
}

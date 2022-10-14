import {
  http
} from "@/request/http.js"

import {
  getStorage
} from "@/utils/shared/handleStatus.js"

export const getUserInfo = (uni) => {
  return getStorage(uni, "userInfo")
}

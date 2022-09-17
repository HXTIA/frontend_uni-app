import {
  data
} from "./options.js"

import {
  reactive,
} from "vue"
import {
  checkLogin
} from "./api/index.js"

import {
  onLoad
} from "@dcloudio/uni-app"

import userStore from "@/stores/users/index.js"

export default {
  data,
  reactive,
  checkLogin,
  onLoad,
  userStore,
}

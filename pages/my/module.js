import {
  onShow,
  onLoad
} from "@dcloudio/uni-app"

import {
  getUserInfo,
} from "./api/index.js"

import {
  reactive
} from "vue"

import userStore from "@/stores/users/index.js"

import {
  itemOptions
} from "./options.js"

import router from "@/router/index.js"

export default {
  onShow,
  onLoad,
  getUserInfo,
  reactive,
  userStore,
  itemOptions,
  router
}

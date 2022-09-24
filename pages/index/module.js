import {
  reactive,
} from "vue"

import {ref} from "vue"

import userStore from "@/stores/users/index.js"

import {
  requestData
} from "./api/index.js"

import {
  dropDownOptions
} from "./options.js"

import {
  onLoad,
  onShow
} from "@dcloudio/uni-app"

import {
  getStorage
} from "@/utils/shared/handleStatus.js"

import {
  handleInit
} from "@/utils/shared/handleInit.js"

import {
  watchStore
} from "@/utils/pinia/subscribe.js";

import dataStore from "@/stores/data/index.js"
const store = dataStore();

export default {
  reactive,
  dropDownOptions,
  requestData,
  onLoad,
<<<<<<< HEAD
  onShow,
  getStorage,
  handleInit,
  watchStore,
  store
=======
  getStorage,
  ref
>>>>>>> ba94031e3b9f845b11b8c9eeb41645267fd7f092
}

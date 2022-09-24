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
  onLoad
} from "@dcloudio/uni-app"

import {
  getStorage
} from "@/utils/shared/handleStatus.js"

export default {
  reactive,
  dropDownOptions,
  requestData,
  onLoad,
  getStorage,
  ref
}

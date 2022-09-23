import {
  reactive,
} from "vue"

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
  getStorage
}

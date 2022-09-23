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

export default {
  reactive,
  dropDownOptions,
  requestData,
  onLoad,
}

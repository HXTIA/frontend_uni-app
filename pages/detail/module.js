import {
  onLoad,
} from "@dcloudio/uni-app";

import {
  reactive,
  defineProps,
  ref
} from "vue"

import {
  requestData
} from "./api/index.js"

export default {
  onLoad,
  reactive,
  defineProps,
  requestData,
  ref
}

import router from "@/router/index.js"
import {
  defineProps,
  ref,
  provide
} from "vue"
import {
  todoSlideBlockRightOptions,
  enumSlideBlockOptionsEnum
} from "@/data/options.js"

import {
  checkSubscribe
} from "@/utils/shared/checkLogin.js"

import {
  onHide,
  onLoad
} from "@dcloudio/uni-app"

import {
  dropDownOptions
} from "@/pages/Index/options.js"

import {
  timeFormat
} from "@/utils/format/time.js"

export default {
  router,
  defineProps,
  ref,
  provide,
  todoSlideBlockRightOptions,
  enumSlideBlockOptionsEnum,
  checkSubscribe,
  dropDownOptions,
  onHide,
  onLoad,
  timeFormat
}

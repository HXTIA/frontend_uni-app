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

// import {
//   templateId
// } from "@/data/publicOptions.js"

import {
  checkSubscribe
} from "@/utils/shared/checkLogin.js"

import {
  onHide
} from "@dcloudio/uni-app"

import {
  dropDownOptions
} from "@/pages/Index/options.js"

export default {
  router,
  defineProps,
  ref,
  provide,
  todoSlideBlockRightOptions,
  enumSlideBlockOptionsEnum,
  // templateId,
  checkSubscribe,
  dropDownOptions,
  onHide
}

import {
  submitMsg
} from "./api/index.js"

import {
  uploadFile
} from "@/utils/shared/uploader.js"

import {
  ref,
  reactive
} from "vue"

import {
  preloadImageList
} from "@/utils/lazyLoad/index.js"

export default {
  submitMsg,
  uploadFile,
  ref,
  reactive,
  preloadImageList
}

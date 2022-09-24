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

import {
  timeFormat
} from "@/utils/format/time.js"

import Controller from "./Controller/index.js"

export default {
  onLoad,
  reactive,
  defineProps,
  requestData,
  ref,
  Controller,
  timeFormat
}

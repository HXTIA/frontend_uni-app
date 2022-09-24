import {
  data
} from "./options.js"

import {ref} from "vue"

// import {
//   reactive,
// } from "vue"

// import {
//   onLoad
// } from "@dcloudio/uni-app"

// import {
//   http
// } from "@/request/http.js"

import userStore from "@/stores/users/index.js"

import {
  dropDownOptions
} from "./options.js"

export default {
  data,
  // reactive,
  // onLoad,
  userStore,
  // http,
  dropDownOptions,
}

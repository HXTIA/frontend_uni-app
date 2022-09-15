import {
  http
} from "@/request/http.js"

let uni;

export const uniInstance = (instance) => {
  uni = instance;
}

export const reqAbc = (options, flag) => {
  return http(uni, options, flag)
}

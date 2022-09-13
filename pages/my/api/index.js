import {
  http
} from "@/request/http.js"

let uni;

export const uniInstance = (instance) => {
  uni = instance;
}

export const userInfo = (options, flag) => {
  return http(uni, options, flag)
}

export const uploadFile = (options, flag) => {
  return http(uni, options, flag);
}

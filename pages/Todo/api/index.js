import {
  http
} from "@/request/http.js"

export const requestTodo = async (uni, options, flag) => {
  return await http(uni, options, flag);
}

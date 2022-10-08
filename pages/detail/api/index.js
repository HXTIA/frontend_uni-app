import {
  http
} from "@/request/http.js"

export const requestData = async (uni, id) => {

  const res = await http(uni, {
    method: "GET",
    url: "https://console-mock.apipost.cn/app/mock/project/f4b5eed3-856b-4b0a-9ad3-f26bca3ea207/workdetail",
    data: {
      id
    }
  }, true);
  return res.data;
}

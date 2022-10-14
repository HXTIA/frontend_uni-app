import {
  http
} from "@/request/http.js"

export const requestData = async (uni, id) => {

  const res = await http(uni, {
    method: "GET",
    // url: "https://console-mock.apipost.cn/app/mock/project/f4b5eed3-856b-4b0a-9ad3-f26bca3ea207/workdetail",
    url: "http://119.29.157.231:8888/wx/works/searchOne",
    data: {
      workId: id
    }
  }, true);
  console.log(res.data);
  return res.data.data;
}

import {
  http
} from "@/request/http.js"

export const requestData = async (uni, id) => {

  const res = await http(uni, {
    method: "GET",
    url: "http://127.0.0.1:3000/api/data/detail",
    data: {
      id
    }
  }, true);
  return res.data;
}

import {
  http
} from "@/request/http.js";

export const uploadFile = (uni, imgList) => {
  // TODO: 调用方法 -> 上传照片（由于图片可能是个数组，所以需要遍历）
  // 得到最后的图片数组
  // 返回链接数组

  let urls = [];
  // for (let i = 0; i < imgList.length; i++) {
  //   uni.uploadFile({
  //     url:""
  //   })
  // }

  // return urls;
}

// 提交信息
export const submitMsg = async (uni, options, flag) => {
  console.log(uni, options, flag);
  // return await http()
}

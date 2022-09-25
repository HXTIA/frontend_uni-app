import {
  http
} from "@/request/http.js"

const data = {
  time: Date.now(),
  title: "计算机网络-456班",
  desc: "第2章1、2、3、5、7、8题，第一题要自己做，第一题要自己做， 第一题要自己做， 第一题要自己做第2章1、 2、 3、 5、 7、 8 题， 第一题要自己做， 第一题要自己做， 第一题要自己做， 第一题要自己做第2章1、 2、 3、5、 7、 8 题， 第一题要自己做， 第一题要自己做， 第题要自己做， 第一题要自己做第2章1、 2、 3、 5、 7、 8题， 第一题要自己做， 第一题要自己做， 第一题要自己做， 第题要自己做第2章1、 2、 3、 5、 7、 8 题， 第一题要自己做， 第一题要自己做",
  urls: ["https://img1.baidu.com/it/u=2475127973,1009717621&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
    "https://img1.baidu.com/it/u=2475127973,1009717621&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
    "https://img1.baidu.com/it/u=2475127973,1009717621&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
    "https://p3-passport.byteimg.com/img/user-avatar/f3446fd0d9764da159a154bddb3793ff~180x180.awebp"
  ],
  tag: ["作业二", "抓紧提交", "命名格式: 20211818 闫德强", "提交给学委"],
  ddl: Date.now()
}

export const requestData = async (uni, options, flag) => {
  return await new Promise((reslove) => {
    setTimeout(() => {
      reslove(data)
    }, 3000)
  })
  // return await http(uni, options, flag)
}

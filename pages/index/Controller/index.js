import router from "@/router/index.js"
import {
  uni
} from "@/utils/shared/createUniInstance.js"

import dataStore from "@/stores/data/index.js"
const store = dataStore();

const Controller = {};
// 处理置顶
Controller.handleSticky = (id) => {
  // TODO: params -> 该作业编号
  // 如何操作请求来的数据
  // 置顶如何实现 -> 依靠后端 -> 向后端发送请求传递id

  // 界面载入置顶
  store.getData.map((value, i) => {
    if (value.id === id) {
      // 同步当前index
      store.setId(id);
      const res = store.data.splice(i, 1);
      store.data.unshift(...res);
      value.isTips = true;
      return;
    }
  })
}

// Controller.handleDetail = (id) => {
//   // TODO: params -> 该作业编号
//   // 如何实现 -> 调用路由(path?id=1) -> 通过id进行查询
//   console.log('查看详情', id)
//   router(uni, {
//     url: "detail",
//     params: {
//       id
//     }
//   })
// }

Controller.handleCancelDone = (id) => {
  // TODO: 需要取消已完成
  // 要向后端发送请求 -> 同时将pinia的数据进行修改
  store.getData.map((value) => {
    // 对应的数据
    console.log(id);
    if (value.id === id && value.flag === 2) {
      console.log(id, value.id);
      const time = value.time;
      const ddl = value.ddl;
      const residue = ddl - time;
      const advance = 8 * 60 * 60 * 1000;

      // 记录当前操作的id
      store.setId(id);
      if (residue <= advance) {
        // ddl -> 已读未完成 但是为ddl
        value.flag = 1;
      }
      return 0;
    }
  })
}


Controller.handleDetail = (id) => {
  // TODO: params -> 该作业编号
  // 如何实现 -> 调用路由(path?id=1) -> 通过id进行查询
  console.log('查看详情', id)
  router(uni, {
    url: "detail",
    params: {
      id
    }
  })
}

Controller.handleRemind = (id) => {
  // TODO: 处理提醒 -> 默认提醒时间为 8小时 
  // 如何配置默认时间呢 ？ -> 更多设置中设置
}


export default Controller

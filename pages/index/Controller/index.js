import router from "@/router/index.js"
import {
  uni
} from "@/utils/shared/createUniInstance.js"

import {
  createInstance
} from "@/utils/shared/createUniInstance.js"

import {
  http
} from "@/request/http.js"

import dataStore from "@/stores/data/index.js"
const store = dataStore();

const Controller = {};

// 处理置顶
Controller.handleSticky = (id) => {
  // TODO: params -> 该作业编号
  // 如何操作请求来的数据
  // 置顶如何实现 -> 依靠后端 -> 向后端发送请求传递id

  let isTips;
  store.getData.map(async (value, i) => {
    if (value.id === id) {

      // 考虑同时具有取消置顶 -> 那么不能写死，根据传入的id进行判断当前的数据是否为已置顶
      if (value.isTips) {
        // 已置顶 -> 取消置顶
        isTips = 0;

        // 取消置顶
        value.isTips = false;

        // 从原数据中删除
        store.getData.splice(i, 1);

        // 转换为异步
        setTimeout(() => store.setData([value]), 0);

        // 筛选出所有未置顶的元素 -> 对他们进行排序
        // 此处有个疑问: 为什么同步的数据拿不到 -> 转换异步操作可以取到最新值
        setTimeout(() => {
          // 拿到除置顶外的所有数据
          const res = store.getData.filter((value) => !value.isTips)
          const index = store.getData.findIndex((value) => !value.isTips)

          // 对剩余数组进行排序
          res.sort((a, b) => a.time - b.time);

          // 待替换的数组的长度
          const length = store.getData.length - index;
          // 替换数组
          store.getData.splice(index, length, ...res)
        }, 0)

      } else {
        // 未置顶 -> 前往置顶
        isTips = 1;

        const res = store.data.splice(i, 1);
        store.data.unshift(...res);
        value.isTips = true;
      }
      // 无论是置顶还是取消置顶，都是要发起请求
      // try {
      //   const res = await http(createInstance, {}, true);
      //   return;
      // } catch (e) {
      //   //TODO handle the exception
      //   console.log(e);
      return
      // }
    }
  })
}

Controller.handleCancelDone = (id) => {
  // TODO: 需要取消已完成
  // 要向后端发送请求 -> 同时将pinia的数据进行修改
  store.getData.map((value) => {
    // 对应的数据
    if (value.id === id && value.flag === 2) {
      const time = value.time;
      const ddl = value.ddl;
      const residue = ddl - time;

      // TODO: 该位置的ddl设置应该是自定义行为，在此先写死
      const advance = 8 * 60 * 60 * 1000;

      if (residue <= advance) {
        // ddl -> 已读未完成 但是为ddl
        return value.flag = 1;
      }

      // 非ddl 默认返回1
      return value.flag = 1;
    }
  })
}

Controller.handleRemind = (id) => {
  // TODO: 处理提醒 -> 默认提醒时间为 8小时 
  // 如何配置默认时间呢 ？ -> 更多设置中设置
}


export default Controller

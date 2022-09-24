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

	// Controller.handleSharePhoto = (id) => {
	//   // TODO: params -> 该作业编号
	//   // 进行作业的分享图处理
	//   // 如何处理 -> 跳转详情 
	//   // -> bitMap -> 绘图 -> saveFile
	//   console.log('查看详情', id)
	//   router(uni, {
	//     url: "detail",
	//     params: {
	//       id
	//     }
	//   })

	// 置顶如何实现 -> 依靠后端 -> 向后端发送请求传递id
	// store.getData[0].

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

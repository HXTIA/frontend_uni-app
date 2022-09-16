<template>
	<view class="workItem-wrapper" @click="detail(data.id)">
		<view class="workItem-wrapper-top">
			<MyTag v-for="item in data.tag" :key="item" :title="item"></MyTag>
			<fui-icon name="more-fill" class="workItem-wrapper-top-icon"></fui-icon>
		</view>
		<view>{{ data.time }}</view>
		<view>{{ data.title }}</view>
		<view>{{ data.desc }}</view>

		<view>{{ data.ddl }}</view>
	</view>
</template>

<script setup>
	import router from "@/router/index.js"
	import MyTag from "@/components/shared/MyTag/index.vue"
	import {
		defineProps
	} from "vue"

	const detail = (id) => {
		router(uni, {
			url: "detail",
			params: {
				id,
			}
		})
	}


	defineProps({
		// time: {
		//   type: String,
		//   default: "时间"
		// },
		// title: {
		//   type: String,
		//   default: "这是一个标题"
		// },
		// desc: {
		//   type: String,
		//   default: "简短描述"
		// },
		// tag: {
		//   type: Array,
		//   default: []
		// },
		// ddl: {
		//   type: String,
		//   default: "最后时间"
		// },
		data: {
			type: Object,
			default: {
				id: 1,
				time: "2022-09-05 13:34:22",
				title: "数据库概论",
				desc: "这是一段简短的描述",
				tag: ["作业二"],
				ddl: "2022-09-06 13:34:22"
			}
		}
	})
</script>

<style lang="scss" scoped>
	.workItem-wrapper {
		width: 100%;
		height: 100%;
		background-color: whitesmoke;
		border-radius: 0px 12px 12px 0px;
		margin-bottom: 3rpx;
		
		&-top{
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			&-icon{
				padding-right: 10px;
			}
		}
	}

</style>

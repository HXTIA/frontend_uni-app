<template>
	<canvas class="myCanvas" canvas-id="myCanvas" />
</template>

<script setup>
	import {
		getCurrentInstance
	} from 'vue'
	// 引入canvas方法
	import {
		createPoster
	} from './canvas.js'
	const {
		proxy
	} = getCurrentInstance()
	// 宽高需要传哦~
	const props = defineProps({
		width: {
			type: Number,
			required: true
		},
		height: {
			type: Number,
			required: true
		}
	})

	// 导出方法给父组件用
	defineExpose({
		onDraw(options, callback) {
			createPoster.call(
				// 当前上下文
				proxy,
				// canvas相关信息
				{
					id: 'myCanvas',
					width: props.width,
					height: props.height
				},
				// 元素集合
				options,
				// 回调函数
				callback
			)
		}
	})
</script>

<style lang="scss" scoped>
	// 隐藏canvas
	.myCanvas {
		left: -9999px;
		bottom: -9999px;
		position: fixed;
		// canvas宽度
		width: calc(1px * v-bind(width));
		// width: 100%;
		// canvas高度
		height: calc(1px * v-bind(height));
		// height: 100%;
	}
</style>

<template>
	<view class="org-wrapper">
		<view class="org-wrapper-header">
			<view class="org-wrapper-header-title">
				<view>嘿！</view>
				<view>赶紧加入一个组织吧！</view>
				<view class="mini-title">
					欢迎回来~ 我们等你好久了！
				</view>
			</view>
		</view>
		<view class="org-wrapper-input">
			<view class="select">
				<fui-dropdown-menu :size="28" selectedColor="#465CFF" minWidth="200" :options="organizations" @click="rangeItemClick"
					@close="rangeClose" ref="ddmRange">
					<view class="fui-filter__item" @tap="filterTap">
						<text>{{nowOrganizations}}</text>
						<view class="fui-filter__icon" :class="{'fui-icon__ani':rangeShow}">
							<fui-icon name="turningdown" :size="32"></fui-icon>
						</view>
					</view>
				</fui-dropdown-menu>
			</view>
			<view class="change-input">

			</view>
		</view>
		<LessonItem v-for="(item,index) in data" :key="index" :data="item"></LessonItem>
	</view>
</template>

<script setup>
	import LessonItem from '@/components/LessonComponents/index.vue'

	import {
		http
	} from '@/request/http.js'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		reactive,
		ref
	} from "vue";

	let data = reactive([])

	onLoad(async () => {
		const res = await http(uni, {
			method: "GET",
			url: 'http://127.0.0.1:3000/api/class/allClass',
			data: {
				orgId: 1
			}
		}, true);
		data.push(...res.data)
	})

	let organizations = reactive(
		[{
			text: '华信软件学院',
			value: 1,
			checked: true
		}, {
			text: '计算机科学与技术学院',
			value: 2
		}, {
			text: '理学院',
			value: 3
		}]
	)
	let nowOrganizations = ref('华信软件学院');
	let rangeShow = ref(false);
	const ddmRange = ref();
	const rangeItemClick = (e) => {
		console.log(e);
		nowOrganizations.value = e.text;
		rangeClose();
	}
	const rangeClose = () => {
		rangeShow.value = false;
	}
	const filterTap = () => {
		//显示下拉框
		ddmRange.value.show();
		rangeShow.value = true;
	}
</script>

<style lang="scss" scoped>
	.org-wrapper {
		box-sizing: border-box;
		background-color: #fafbff;
		width: 100vw;
		height: 100vh;
		padding: 20vh 60rpx;

		&-header {
			&-title {
				color: #343965;
				font-size: 55rpx;

				.mini-title {
					margin-top: 10px;
					color: #a6a8bd;
					font-size: 25rpx;
				}
			}
		}

		&-input {
			display: flex;
			margin-top: 60rpx;

			.select {
				background-color: #dceaff;
				height: 80rpx;
				width: 80%;
				border-radius: 30px;

				.fui-filter__item {
					width: 300rpx;
					height: 88rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 30rpx;
					/* #ifdef H5 */
					cursor: pointer;
					/* #endif */
					background-color: #fff;
				}

				.fui-filter__icon {
					transition: all .15s linear;
				}

				.fui-icon__ani {
					transform: rotate(180deg);
				}
			}

			.change-input {
				margin-left: 10px;
				background-color: #cdecea;
				height: 80rpx;
				width: 80rpx;
				border-radius: 45px;
			}
		}
	}
</style>

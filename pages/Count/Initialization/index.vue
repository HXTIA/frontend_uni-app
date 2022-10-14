<template>
	<view class="org-wrapper">
		<view class="org-wrapper-header">
			<view v-show="!isSelectClass" class="org-wrapper-header-title">
				<fui-animation :duration="500" :styles="{position: 'relative'}" :animationType="['fade']" :show="true">
					<view>嘿！</view>
					<view>赶紧加入一个组织吧！</view>
					<view class="mini-title">
						欢迎回来~ 我们等你好久了！
					</view>
				</fui-animation>
			</view>
			<view v-show="isSelectClass" class="org-wrapper-header-title">
				<fui-animation :duration="500" :styles="{position: 'relative'}" :animationType="['slide-left']"
					:show="isSelectClass">
					<view>加入一个班级</view>
				</fui-animation>

				<fui-animation :duration="500" :styles="{position: 'relative'}" :animationType="['slide-right']"
					:show="isSelectClass">
					<img class="org-wrapper-header-title-img" src="https://img1.imgtp.com/2022/10/04/c4pxY4lj.png"
						alt="加入班级">
				</fui-animation>
			</view>
		</view>

		<view v-show="!isSelectClass" class="org-wrapper-content">
			<view class="org-wrapper-content-input">
				<view class="select">
					<fui-dropdown-menu :size="28" selectedColor="#465CFF" minWidth="500" :options="organizations"
						@click="rangeItemClick" @close="rangeClose" ref="ddmRange">
						<view class="fui-filter__item" @tap="filterTap">
							<text>{{nowOrganizations}}</text>
							<view class="fui-filter__icon" :class="{'fui-icon__ani':rangeShow}">
								<fui-icon name="turningdown" :size="32"></fui-icon>
							</view>
						</view>
					</fui-dropdown-menu>
				</view>
				<view class="change-input">
					<fui-icon name="switch" size="50" color="#1bb096"></fui-icon>
				</view>
			</view>
			<fui-button height="86rpx" radius="98rpx" background="linear-gradient(300deg, #6831FF 0%, #465CFF 100%)"
				width="95%" :margin="['230rpx','0rpx','0rpx','0rpx']" @click="toSelectClass">下一步
			</fui-button>
		</view>

		<view v-show="isSelectClass" class="org-wrapper-class-content">
			<view class="org-wrapper-content-input class-input">
				<view class="change-input">
					<fui-icon name="switch" size="50" color="#1bb096"></fui-icon>
				</view>
				<view class="select">
					<fui-dropdown-menu :size="28" selectedColor="#465CFF" minWidth="500" splitLine :options="classItems"
						ref="ddmClassRange" direction="up" @click="rangeClassClick" @close="rangeClassClose">
						<view class="fui-select fui-flex__between" @tap="filterClassTap">
							<input placeholder="请选择" :value="nowClass" class="fui-input" disabled />
							<view class="fui-filter__icon" :class="{'fui-icon__ani':rangeClassShow}">
								<fui-icon name="turningdown" :size="32"></fui-icon>
							</view>
						</view>
					</fui-dropdown-menu>
				</view>
			</view>
			<view class="org-wrapper-class-content-button">
				<fui-button height="86rpx" radius="98rpx" background="#fff" color="#465CFF" borderColor="#465CFF"
					width="150rpx" :margin="['50rpx','0rpx','0rpx','0rpx']" @click="toSelectOrganization">上一步
				</fui-button>
				<fui-button height="86rpx" radius="98rpx" background="linear-gradient(300deg, #6831FF 0%, #465CFF 100%)"
					width="400rpx" :margin="['50rpx','0rpx','0rpx','0rpx']" @click="submitOrgClass">完成
				</fui-button>
			</view>
		</view>

	</view>
</template>

<script setup>
	import {
		http
	} from '@/request/http.js'
	import router from "@/router/index.js"
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		reactive,
		ref
	} from "vue";

	let data = reactive([])

	// onLoad(async () => {
	// 	const res = await http(uni, {
	// 		method: "GET",
	// 		url: 'http://127.0.0.1:3000/api/class/allClass',
	// 		data: {
	// 			orgId: 1
	// 		}
	// 	}, true);
	// 	data.push(...res.data)
	// })

	//选择组织
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

	//切换到选择班级or组织
	let isSelectClass = ref(false);
	const toSelectClass = () => {
		isSelectClass.value = true;
	}
	const toSelectOrganization = () => {
		isSelectClass.value = false;
	}
	const submitOrgClass = () => {
		console.log("提交组织班级")
		router(uni, {
			url: "Count"
		})
	}

	//选择班级
	let classItems = reactive(
		[{
			text: '2021级123班',
			value: 1,
			checked: true
		}, {
			text: '2021级456班',
			value: 2
		}, {
			text: '2022级123班',
			value: 3
		}, {
			text: '2022级456班',
			value: 4
		}, {
			text: '2020级123班',
			value: 5
		}, {
			text: '2020级456班',
			value: 6
		}]
	)
	let nowClass = ref('2021级123班');
	let rangeClassShow = ref(false);
	const ddmClassRange = ref();
	const rangeClassClick = (e) => {
		console.log(e);
		nowClass.value = e.text;
		rangeClassClose();
	}
	const rangeClassClose = () => {
		rangeClassShow.value = false;
	}
	const filterClassTap = () => {
		//显示下拉框
		ddmClassRange.value.show();
		rangeClassShow.value = true;
	}
</script>

<style lang="scss" scoped>
	.org-wrapper {
		box-sizing: border-box;
		background-color: #fafbff;
		width: 100vw;
		height: 100vh;
		padding: 15vh 60rpx;

		&-header {
			&-title {
				font-weight: bold;
				color: #343965;
				font-size: 55rpx;

				.mini-title {
					margin-top: 10px;
					color: #a6a8bd;
					font-size: 25rpx;
				}
			}
		}

		&-content {
			&-input {
				display: flex;
				margin-top: 90rpx;

				&.class-input {
					margin-top: 20rpx;
				}

				.select {
					background-color: #dceaff;
					height: 80rpx;
					width: 80%;
					border-radius: 30px;

					.fui-filter__item {
						background: transparent;
						width: 99%;
						height: 75rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 30rpx;
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
					margin-right: 10px;
					background-color: #cdecea;
					height: 80rpx;
					width: 80rpx;
					border-radius: 45px;

					fui-icon {
						position: relative;
						left: 15rpx;
						top: 15rpx;
					}
				}
			}
		}

		&-class-content {
			&-button {
				display: flex;
				justify-content: space-around;
				align-items: center;
			}

			.fui-select {
				flex: 1;
				box-sizing: border-box;
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.fui-input {
				font-size: 32rpx;
				width: 70%;
				height: 80rpx;
				color: #181818;
			}
		}

	}
</style>

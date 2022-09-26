<script setup>
	import {
		defineProps,
		ref
	} from "vue"

	import router from "@/router/index.js"


	defineProps({
		data: {
			type: Object,
			default: {
				icon: "t-icon t-icon-dingshi",
				title: "开发中....",
				top: false,
				route: "Index"
			}
		}
	})

	const goTargetPages = (route) => {
		router(uni, {
			url: route
		})
	}
</script>

<template>
	<view class="settingItem-wrapper" :class="{all: data.top,bottom:!data.top}" @click="goTargetPages(data.route)">
		<view class="settingItem-wrapper-main">
			<span class="settingItem-wrapper-main-icon" :class="data.icon"></span>
			<span class="settingItem-wrapper-main-title">{{ data.title }}</span>
			<!-- <span class="settingItem-wrapper-main-rightPoint">></span> -->
			<uni-icons type="forward" size="15" class="settingItem-wrapper-main-rightPoint"></uni-icons>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.settingItem-wrapper {
		box-sizing: border-box;
		width: 100%;
		padding: 20rpx 40rpx;
		background-color: #fff;
		margin-bottom: 20rpx;

		&-main {
			display: flex;
			align-items: center;

			&-icon {
				width: 60rpx;
				height: 60rpx;
				margin-right: 10px;
			}

			&-title {
				font-size: 35rpx;
				font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
				color: #2d2d2d;
			}

			&-rightPoint {
				position: relative;
				left: 55%;
			}
		}
	}

	.all {
		border-radius: 20rpx;
	}

	.bottom {
		border-bottom-left-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
	}
</style>

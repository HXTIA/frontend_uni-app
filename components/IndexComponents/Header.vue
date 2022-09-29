<template>
	<view class="header-wrapper">
		<view class="header-wrapper-main">
			<form class="header-wrapper-main-form">
				<view class="sousuo t-icon t-icon-sousuo"></view>
				<input class="input" placeholder="请输入..." required="" type="text">
			</form>
			<view class="header-wrapper-main-select" @click="showPopup">筛选</view>
			<fui-bottom-popup :show="showSelect" @close="closePopup">
				<view class="header-wrapper-main-custom">
					这是自定义内容区
				</view>
			</fui-bottom-popup>
		</view>
		<uni-notice-bar class="header-wrapper-notice" backgroundColor="transparent" show-close show-icon scrollable
			:speed="50" text="科技创新魔法协会, 科技创新魔法协会, 科技创新魔法协会!!!" />
	</view>
</template>

<script setup>
	import {
	  ref
	} from "vue"
	
	let showSelect = ref(false);
	
	const closePopup = (type) => {
		showSelect.value = false;
	}
	const showPopup = (type) => {
		showSelect.value = true;
	}
</script>

<style lang="scss" scoped>
	.header-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		box-sizing: border-box;
		width: 100%;
		height: 90rpx;
		// background-color:#bababa;
		background-color: #f2f6fa;
		border-top: 1px solid #535353;

		&-main {
			width: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			margin-top: 5px;
			margin-left: 10rpx;
			// margin: 5px 0px;
			// box-shadow: 0px 5px 5px #bababa;


			&-select {
				margin-right: 15rpx;
				color: #728acc;
				opacity: 0.6;
				font-size: 26rpx;
				font-weight: bold;
			}

			&-custom {
				width: 100%;
				height: 520rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			&-form {
				--timing: 0.3s;
				--width-of-input: 85%;
				--height-of-input: 70rpx;
				--border-height: 2rpx;
				--input-bg: #fff;
				--border-color: #2f2ee9;
				--border-radius: 50rpx;
				--after-border-radius: 5rpx;
				position: relative;
				width: var(--width-of-input);
				height: var(--height-of-input);
				display: flex;
				align-items: center;
				border-radius: var(--border-radius);
				transition: border-radius 0.5s ease;
				background: var(--input-bg, #fff);
				box-shadow: 0px 0px 3px #dfe6ec;

				.sousuo {
					position: absolute;
					left: 25rpx;
					top: 8rpx;
					width: 40rpx;
					height: 40rpx;
					margin-top: 3px;
					opacity: 0.8;
				}

				.input {
					font-size: 12px;
					background-color: transparent;
					width: 160%;
					height: 100%;
					padding-left: 35px;
					border: none;
					// &:focus-within {
					// 	outline: none;
					// 	border-color: rgba(234,76,137,0.4);
					// 	background-color: #fff;
					// 	box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
					// }
				}

				&:before {
					content: "";
					position: absolute;
					background: var(--border-color);
					transform: scaleX(0);
					transform-origin: center;
					width: 100%;
					height: var(--border-height);
					left: 0;
					bottom: 0;
					border-radius: 1px;
					transition: transform var(--timing) ease;
				}

				&:hover {
					border-radius: var(--after-border-radius);

					&:before {
						transform: scale(1);
					}
				}

			}
		}

		&-notice {
			width: 60%;
		}

	}
</style>

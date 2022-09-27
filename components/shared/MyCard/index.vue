<template>
	<fui-card>
		<image class="card-cover" :src="url" mode="widthFix"></image>
		<view class="card-content">
			{{content}}
		</view>
	</fui-card>
</template>

<script setup>
	import {
		defineProps
	} from "vue"
	const props = defineProps({
		content: {
			type: String,
			default: 'Пе'
		},
		url: {
			type: String,
			default: 'https://s1.ax1x.com/2022/09/26/xV1iuV.png'
		}
	})
</script>

<style lang="scss" scoped>
	.card-cover {
		width: 100%;
		height: 385rpx;
		display: block;
	}

	.card-content {
		width: 100%;
		padding: 32rpx;
		box-sizing: border-box;
		font-weight: 500;
	}
</style>

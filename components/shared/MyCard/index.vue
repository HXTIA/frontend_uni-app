<template>
	<fui-card >
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
			default: 'https://i.imgtg.com/2022/09/29/mir8p.png'
		}
	})
</script>

<style lang="scss" scoped>
	.card-cover {
		width: 30%;
		margin: 10px auto;
		// height: 385rpx;
		display: block;
		color: aliceblue;
	}

	.card-content {
		background-color: #222222;
		color: aliceblue;
		width: 100%;
		padding: 32rpx;
		box-sizing: border-box;
		font-weight: 500;
	}
</style>

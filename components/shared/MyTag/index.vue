<template>
	<view class="mytag">
		<uni-tag :text="title" :type="type" size="small" :circle="true" />
	</view>
</template>

<script setup>
	import {
		defineProps
	} from "vue"

	const props = defineProps({
		title: {
			type: String,
			default: "标签"
		},
		type: {
			type: String,
			default: "success"
		}
	})
</script>

<style lang="scss" scoped>
	.mytag{
		margin-right: 5px;
		margin-top: 5px;
	}
</style>

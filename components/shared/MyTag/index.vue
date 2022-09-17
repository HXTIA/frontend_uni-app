<template>
	<view class="mytag">
		<uni-tag :text="title" type="success" size="small" :circle="true" />
	</view>
</template>

<script setup>
	import {defineProps} from "vue"
	
	const props = defineProps({
		title: {
		  type: String,
		  default: "标签"
		}
	})
	
</script>

<style lang="scss" scoped>
</style>
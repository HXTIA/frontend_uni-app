<template>
	<view>
		<fui-badge dot :type="background.type"></fui-badge>
		<span class="mybadge-title">{{txt}}</span>
	</view>
</template>

<script setup>
	import { defineProps , reactive } from "vue"
	
	
	const background = reactive({ type: "danger" })

	const props = defineProps({
		txt: {
			type: String,
			default: "标签文字"
		},
		isread: {
			type: String,
			default: "true"
		}
	})
	
	const typeColor = ()=> {
		
		if(props.isread == "true"){
			background.type="success";
		}else{
			background.type="danger";
		}
	 
	}
	
	typeColor();
	
	
</script>

<style lang="scss" scoped>
	.mybadge-title {
		color: black;
		margin-left: 7px;
		font-size: 11px;
	}
</style>

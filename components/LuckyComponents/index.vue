<script setup>
	import {ref} from "vue";
	
	//抽奖列表
	const raffleItem = [
	  {name: '1', id: 1},
	  {name: '2', id: 2},
	  {name: '3', id: 3},
	  {name: '4', id: 4},
	  {name: '5', id: 5},
	  {name: '6', id: 6},
	  {name: '7', id: 7},
	  {name: '8', id: 8},
	  {name: '9', id: 9}
	];
	// 选中的item
	const selectItem = ref(0);
</script>

<template>
	<fui-grid>
		<fui-grid-item v-for="(item, index) in raffleItem" :key="index" :class="{item: true, select: selectItem === index}">
			<view class="fui-grid__cell">
				<text>{{item.name}}</text>
			</view>
		</fui-grid-item>
	</fui-grid>
</template>

<style lang="scss" scoped>
	.item {
	  width: 95px;
	  height: 95px;
	}
	.select {
	  border-color: red;
	  color: red;
	  background: #579393;
	}
</style>
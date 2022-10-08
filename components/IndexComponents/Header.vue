<template>
	<view class="header-wrapper">
		<view class="header-wrapper-main">
			<form class="header-wrapper-main-form">
				<view class="sousuo t-icon t-icon-sousuo"></view>
				<input class="input" placeholder="请输入..." v-model="str" type="text" @confirm="search">
			</form>
			<view class="header-wrapper-main-select" @click="showPopup">筛选</view>
			<fui-bottom-popup :show="showSelect" @close="closePopup">
				<view class="header-wrapper-main-custom">
					<uni-section title="完成情况" type="line" padding>
						<view class="example-body">
							<uni-tag class="tag-view" :inverted="true" text="已完成" @click="searchDone(1)" :type="showSearchDone==1?'success':'default'" />
							<uni-tag class="tag-view" :inverted="true" text="未完成" @click="searchDone(2)" :type="showSearchDone==2?'success':'default'" />
							<uni-tag  class="tag-view" :inverted="true" text="未读" @click="searchDone(3)" :type="showSearchDone==3?'success':'default'" />
						</view>
					</uni-section>
					<uni-section title="发布时间" type="line" padding>
						<view class="example-body">
							<uni-tag  class="tag-view" :inverted="true" text="今天" @click="searchTime(1)" :type="showSearchTime==1?'success':'default'"/>
							<uni-tag  class="tag-view" :inverted="true" text="昨天" @click="searchTime(2)" :type="showSearchTime==2?'success':'default'"/>
						</view>
					</uni-section>
					<uni-section title="显示全部" type="line" padding>
						<view class="example-body">
							<uni-tag  class="tag-view" :inverted="true" text="全部" @click="showAllItem" :type="showAll?'success':'default'" />
						</view>
					</uni-section>
					
				</view>
			</fui-bottom-popup>
		</view>
		<uni-notice-bar class="header-wrapper-notice" backgroundColor="transparent" show-close show-icon scrollable
			:speed="50" text="科技创新魔法协会, 科技创新魔法协会, 科技创新魔法协会!!!" @click="tolucky" />
	</view>
</template>

<script setup>
	import {
		ref,
		watch
	} from "vue"
	import router from "@/router/index.js"

	let showSelect = ref(false);

	const closePopup = (type) => {
		showSelect.value = false;
	}
	const showPopup = (type) => {
		showSelect.value = true;
	}


	import dataStore from '@/stores/data/index.js'
	const store = dataStore();

	// 先缓存下全部的信息
	let cacheData = [];

	// 搜索的字符串
	let str = ref('');

	// 搜索字符串为空的时候缓存原数据
	watch(str, () => {
		if (!str.value.length) {
			store.clearData();
			store.setData(cacheData);
		}
	})
	
	const search = () => {
		// 初次搜索的时候 -> 缓存所有数据
		if (!cacheData.length) {
			cacheData.push(...JSON.parse(JSON.stringify(store.getData)));
		}
		// 正则匹配
		const reg = new RegExp(str.value);
		const filters = cacheData.filter((value) => reg.test(value.title));
		store.clearData();
		store.setData(filters);
	}
	
	let showSearchDone = ref(0);
	let showSearchTime = ref(0);
	let showAll = ref(false);
	const searchDone = (status) =>{
		if (!cacheData.length) {
			cacheData.push(...JSON.parse(JSON.stringify(store.getData)));
		}
		if(showSearchDone.value == status){
			showSearchDone.value = 0;
			showAllItem();
			return
		}
		showAll.value = false;
		if(status == 1){
			// 已完成
			showSearchDone.value = status;
			const filters = cacheData.filter((value) => value.flag === 2);
			store.clearData();
			store.setData(filters);
		}else if(status == 2){
			// 未完成
			showSearchDone.value = status;
			const filters = cacheData.filter((value) => value.flag != 2 );
			store.clearData();
			store.setData(filters);
		}else{
			// 未读
			showSearchDone.value = status;
			const filters = cacheData.filter((value) => value.flag == 0 );
			store.clearData();
			store.setData(filters);
		}
		
	}
	const searchTime = (status) =>{
		if (!cacheData.length) {
			cacheData.push(...JSON.parse(JSON.stringify(store.getData)));
		}
		if(showSearchTime.value == status){
			showSearchTime.value = 0;
			showAllItem();
			return
		}
		//今天
		if(status == 1){
			showSearchTime.value = 1;
			showAll.value = false;
			const filters = cacheData.filter((value) => new Date(value.time).toDateString() === new Date().toDateString());
			store.clearData();
			store.setData(filters);
		}else{
			//昨天
			showSearchTime.value = 2;
			showAll.value = false;
			const nowDate = new Date();
			const filters = cacheData.filter((value) => new Date(value.time).toDateString() === new Date(nowDate-86400000).toDateString());
			store.clearData();
			store.setData(filters);
		}
		
	}
	//显示全部
	const showAllItem = () =>{
		showSearchDone.value = 0;
		showSearchTime.value = 0;
		showAll.value = true;
		if (!cacheData.length) {
			cacheData.push(...JSON.parse(JSON.stringify(store.getData)));
		}
		store.clearData();
		store.setData(cacheData);
	}
	
	
	//抽奖页面
	const tolucky = ()=>{
		router(uni, {
		  url: "Lucky"
		})
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
				// display: flex;
				// align-items: center;
				// justify-content: left;
				margin:20rpx 40rpx;
				.tag-view{
					margin-right: 10px;
					&:hover{
						color: green;
					}
				}
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
					padding-left: 70rpx;
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

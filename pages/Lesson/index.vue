<template>
	<view class="lesson-wrapper">
		<view class="lesson-wrapper-header">
			
		</view>
		<!-- <LessonItem v-for="(item,index) in data" :key="index" :data="item"></LessonItem> -->
		<fui-collapse-item class="lesson-wrapper-collapse">
			<view class="fui-title">
				<text>必修课</text>
			</view>
			<template v-slot:content>
				<fui-checkbox-group>
					<fui-label v-for="(item,index) in data2" :key="index">
						<fui-list-cell>
							<view class="fui-list__cell">
								<text>{{item.name}}</text>
								<fui-checkbox :checked="item.checked" :value="item.value">
								</fui-checkbox>
							</view>
						</fui-list-cell>
					</fui-label>
				</fui-checkbox-group>
			</template>
		</fui-collapse-item>
		
		<fui-collapse-item class="lesson-wrapper-collapse">
			<view class="fui-title">
				<text>选修课</text>
			</view>
			<template v-slot:content>
				<fui-checkbox-group>
					<fui-label v-for="(item,index) in data2" :key="index">
						<fui-list-cell>
							<view class="fui-list__cell">
								<text>{{item.name}}</text>
								<fui-checkbox :checked="item.checked" :value="item.value">
								</fui-checkbox>
							</view>
						</fui-list-cell>
					</fui-label>
				</fui-checkbox-group>
			</template>
		</fui-collapse-item>
		
		<fui-collapse-item class="lesson-wrapper-collapse">
			<view class="fui-title">
				<text>重修课</text>
			</view>
			<template v-slot:content>
				<fui-checkbox-group>
					<fui-label v-for="(item,index) in data2" :key="index">
						<fui-list-cell>
							<view class="fui-list__cell">
								<text>{{item.name}}</text>
								<fui-checkbox :checked="item.checked" :value="item.value">
								</fui-checkbox>
							</view>
						</fui-list-cell>
					</fui-label>
				</fui-checkbox-group>
			</template>
		</fui-collapse-item>
		
		<fui-button height="86rpx" radius="98rpx" background="linear-gradient(300deg, #6831FF 0%, #465CFF 100%)"
			width="95vw" :margin="['50rpx','0rpx','50rpx','20rpx']" @click="submitSetClass">确认修改
		</fui-button>
	</view>
</template>

<script setup>
	import LessonItem from '@/components/LessonComponents/index.vue'

	import {
		http
	} from '@/request/http.js'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		reactive
	} from "vue";

	let data = reactive([])
	let data2 = reactive([{
			name: '软件工程456班',
			value: '1',
			checked: true
		},
		{
			name: '数据库概论456班',
			value: '2',
			checked: false
		},
		{
			name: '离散数学456班',
			value: '3',
			checked: false
		}
	])

	onLoad(async () => {
		const res = await http(uni, {
			method: "GET",
			url: 'http://127.0.0.1:3000/api/class/allClass',
			data: {
				orgId: 1
			}
		}, true);
		data.push(...res.data)
	})
</script>

<style lang="scss" scoped>
	.lesson-wrapper {
		box-sizing: border-box;
		width: 100vw;
		height: 100vh;
		background-color: #f2f6fa;


		&-collapse {

			.fui-title {
				width: 100%;
				padding: 26rpx 32rpx;
				font-weight: bold;
				box-sizing: border-box;
				display: flex;
				align-items: center;
			}

			.fui-list__cell {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				
				padding-left: 20rpx;
				color: #2f2f2f;
				word-break: break-all;
				box-sizing: border-box;
			}
		}
	}
</style>

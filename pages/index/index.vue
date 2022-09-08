<template>
	<view class="indexPage-wrapper">
		{{ title }}
		{{ time }}
		<view class="t-icon t-icon-bianji"></view>
		<svg t="1662619541886" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
			p-id="1971" width="200" height="200">
			<path
				d="M1136.63451178 559.31891374m-75.10938688 0a75.10938689 75.10938689 0 1 0 150.21877377 0 75.10938689 75.10938689 0 1 0-150.21877377 0Z"
				fill="#FFD84A" p-id="1972"></path>
			<path
				d="M686.08 879.36H264.96c-112.64 0-204.8-92.16-204.8-204.8V428.8c0-65.28 30.72-126.72 81.92-165.12L345.6 111.36c78.08-57.6 183.04-57.6 261.12 0l202.24 152.32c52.48 39.68 81.92 99.84 81.92 165.12v244.48c0 113.92-92.16 206.08-204.8 206.08zM376.32 153.6L172.8 305.92c-38.4 28.16-61.44 74.24-61.44 124.16v244.48c0 84.48 69.12 153.6 153.6 153.6h421.12c84.48 0 153.6-69.12 153.6-153.6V428.8c0-48.64-23.04-93.44-61.44-124.16L576 152.32c-60.16-43.52-140.8-43.52-199.68 1.28z"
				p-id="1973"></path>
			<path
				d="M474.88 672c-49.92 0-96-28.16-122.88-75.52-6.4-11.52-2.56-26.88 8.96-33.28 11.52-6.4 26.88-2.56 33.28 8.96 17.92 32 49.92 51.2 81.92 51.2 33.28 0 62.72-20.48 80.64-52.48 6.4-11.52 21.76-16.64 33.28-10.24 11.52 6.4 16.64 21.76 10.24 33.28-25.6 47.36-71.68 76.8-121.6 78.08h-3.84z"
				p-id="1974"></path>
		</svg>
		<navigator url="/pages/detail/index?name=闫德强&age=21">
			<view class="main-icon t-icon t-icon-a-29shouye1"></view>1221
		</navigator>
	</view>
</template>

<script setup>
	import {
		reactive,
		watch,
	} from "vue"
	import userStore from "../../stores/users/index.js"
	import {
		watchStore
	} from "../../utils/pinia/subscribe.js"

	import {
		timeFormat
	} from "@/utils/format/time.js"

	const store = userStore();

	const res = watchStore(store, "name", () => {
		console.log("变化了");
	})

	let time = timeFormat(new Date(), {
		hour: 'numeric',
		minute: 'numeric',
		hour12: false,
		weekday: "long",
		month: "long",
		day: "numeric"
	})





	setTimeout(() => {
		store.setName("SG")
	}, 2000)

	let title = reactive({
		name: "闫德强",
		age: 21
	})
</script>

<style lang="scss" scoped>
	.indexPage-wrapper {}

	.t-icon {
		width: 30px;
		height: 30px;
	}

	.main-icon {
		width: 100px;
		height: 100px;
		background-repeat: no-repeat;
	}
</style>

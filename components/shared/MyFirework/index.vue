<template>
	<view class="my-firework">
		<view class="stars" ref="starsRef">
			<view id="stars" class="star" v-for="(item, index) in starsCount" :key="index">111</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted,
		getCurrentInstance,
	} from "vue"
	
	import {
	  onReady
	} from "@dcloudio/uni-app"

	// 获取当前组件实例
	// const vm = getCurrentInstance();

	let starsCount = ref(8); //数量
	let distance = ref(80); //间距
	const starsRef = ref();
	
	onReady(() => {
		// 注意：想要拿到元素实例，需要在实例已经挂载到页面上才可以
		const query = uni.createSelectorQuery().in(this);
		query.select('#stars').boundingClientRect(data => {
			console.log("111",data)
		}).exec();
		
	})

	// onMounted(() => {
	// 	// 界面挂载完后 会执行
	// 	console.log(starsRef.value)
	// 	// let starNodes = Array.from(starsRef);
	// 	// console.log(starNodes)
	// 	// starNodes.forEach((item) => {
	// 	// 	console.log(item);
	// 	// 	let speed = 0.2 + Math.random() * 1;
	// 	// 	let thisDistance = distance + Math.random() * 300;
	// 	// 	item.style.transformOrigin = `0 0 ${thisDistance}px`;
	// 	// 	item.style.transform =
	// 	// 		`
	// 	// 		        translate3d(0,0,-${thisDistance}px)
	// 	// 		        rotateY(${Math.random() * 360}deg)
	// 	// 		        rotateX(${Math.random() * -50}deg)
	// 	// 		        scale(${speed},${speed})`;
	// 	// });
	// })


</script>

<style lang="scss" scoped>
	.my-firework {
		position: absolute;
		z-index: 100;
		top: 10px;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		background: radial-gradient(200% 100% at bottom center,
				#f7f7b6,
				#e96f92,
				#1b2947);
		background: radial-gradient(200% 105% at top center,
				#1b2947 10%,
				#75517d 40%,
				#e96f92 65%,
				#f7f7b6);
		background-attachment: fixed;
		overflow: hidden;


		.stars {
			transform: perspective(500px);
			transform-style: preserve-3d;
			position: absolute;
			perspective-origin: 50% 100%;
			left: 45%;
			animation: rotate 90s infinite linear;
			bottom: 0;
		}

		.star {
			width: 2px;
			height: 2px;
			background: #f7f7b6;
			position: absolute;
			left: 0;
			top: 0;
			backface-visibility: hidden;
		}
	}

	@keyframes rotate {
		0% {
			transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
		}

		100% {
			transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
		}
	}
</style>

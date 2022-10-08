<script setup>
	import {ref,computed} from "vue";
	import router from "@/router/index.js"
	//抽奖列表
	const raffleItem = [
	  {name: '一等奖', id: 1, probability:0.01,winStatus:1},
	  {name: '神秘礼物', id: 2, probability:0.2,winStatus:2},
	  {name: '谢谢', id: 3, probability:0.19,winStatus:0},
	  {name: '彩蛋', id: 4, probability:0.1,winStatus:0},
	  {name: '二等奖', id: 5, probability:0.01,winStatus:1},
	  {name: '彩蛋', id: 6, probability:0.19,winStatus:0},
	  {name: '谢谢', id: 7, probability:0.1,winStatus:0},
	  {name: '神秘礼物', id: 8, probability:0.1,winStatus:2},
	  {name: '三等奖', id: 9, probability:0.1,winStatus:1}
	];
	// 当前中奖
	const winRaffle = ref(null);
	// 选中的item
	const winSelectItem = ref(0);
	// 指定的奖品
	const appointRaffle = ref(null);
	// 定时器
	const timer = ref(null);
	// 圈数
	const turnsNumbers = ref(0);
	// 转多少圈中奖
	const winTurns = ref(0);
	// 初始转动速度
	const speed = ref(100);
	// 剩余几个中奖
	const surplusNum = computed(() => {
	  // 剩余圈数 * 9 + 指定中奖的索引
	  return (winTurns.value - turnsNumbers.value) * 9 + appointRaffle.value - winSelectItem.value;
	})
	// 初始化
	const init = () => {
	  winSelectItem.value = 0;
	  winTurns.value = 0;
	  turnsNumbers.value = 0;
	  speed.value = 100;
	  winRaffle.value = null;
	}
	
	// 开始抽奖
	const startRaffle = () => {
	  // 如果已经存在定时器则表示已经在转动,直接返回
	  if(timer.value) return
	  // 初始化
	  init();
	  // 如果没有指定奖品则随机指定一个奖品
	  if(!appointRaffle.value) {
		const createArr = len => [...new Array(len).keys()];
		//抽奖池模拟数据
		const radomNums = createArr(raffleItem.length);
		const probabilityNums = raffleItem.map(item => item.probability);
	    // 在抽奖池中按概率选中item，返回0-8
		appointRaffle.value = randomProbability(radomNums, probabilityNums);
	    // appointRaffle.value = Math.round(Math.random() * 8);
	  }
	  // 取随机数10~20圈，id > 4时少转一圈
	  const num = Math.round(Math.random()*3) + 4;
	  winTurns.value = appointRaffle.value > 4 ? num - 1 : num;
	  // 抽奖
	  handleRaffle();
	}
	
	//抽奖池
	const  randomProbability =(radomNums, probabilityNums) => {
		let sum = 0, factor = 0, random = Math.random();
		for(let i = probabilityNums.length - 1; i >= 0; i--) {
			sum += probabilityNums[i]; // 统计概率总和
		};
		random *= sum; // 生成概率随机数
		for(let i = probabilityNums.length - 1; i >= 0; i--) {
			factor += probabilityNums[i];
			if(random <= factor) return radomNums[i]; // 如果在当前的概率范围内，得到的就是当前概率，返回输出
		};
		return null;
	}

	
	// 抽奖方法
	const handleRaffle = () => {
	  // 每转完一圈
	  if (winSelectItem.value === 8) {
	    turnsNumbers.value ++;
	    winSelectItem.value = 0;
	  } else {
	    winSelectItem.value ++;
	  }
	  // 转动速度规则
	  speed.value = speedRole();
	  // 如果圈数跟需要转动的总圈数相同并且转到本轮中奖的位置则停止转动
	  if (winTurns.value === turnsNumbers.value && winSelectItem.value === appointRaffle.value) {
	    // 中奖
	    winRaffle.value = raffleItem[appointRaffle.value].name;
		console.log(winRaffle.value);
		raffleResult();
	    // 清除定时器
	    clearTimeout(timer.value);
	    timer.value = null;
	    // 清除指定中奖项
	    appointRaffle.value = null;
	  } else {
	    // 定时器
	    timer.value = setTimeout(handleRaffle, speed.value);
	  }
	}
	
	// 转动速度规则-先加速在匀速最后减速
	const speedRole = () => {
	  const total = winTurns.value * 5 + appointRaffle.value;
	  // 剩余最后5个中奖时的时候大幅度降速
	  if(surplusNum.value <= 5) return speed.value <= 350 ? speed.value + 50 : speed.value ++;
	  // 前3/1加速转动
	  if(surplusNum.value >=  total * 2 / 3) return speed.value <= 50 ? 30 : speed.value - 5;
	  // 最后的3/1减速每次+1
	  if(surplusNum.value <=  total / 3) return speed.value + 20;
	  // 剩余的中间匀速
	  return speed.value
	}
	
	//中奖结果
	const raffleResult = () =>{
		console.log(raffleItem[appointRaffle.value].winStatus)
		if(raffleItem[appointRaffle.value].winStatus === 1){
			dialogTitle.value = "恭喜你,中奖了!";
			dialogText.value = raffleItem[appointRaffle.value].name;
			dialogShow.value = true;
		}else if(raffleItem[appointRaffle.value].winStatus === 2){
			dialogTitle.value = "鸡汤来喽~~";
			dialogText.value = "当我在追光，我与光同行！";
			dialogShow.value = true;
		}else{
			dialogTitle.value = "还差一点点，就要中大奖了~";
			dialogText.value = "相信自己，你今天真好看！";
			dialogShow.value = true;
		}

	}
	
	// 对话框标题
	let dialogTitle = ref('恭喜你,中奖了!');
	// 对话框文本
	let dialogText = ref('弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内');
	// 对话框显示
	let dialogShow = ref(false);
	// 对话框点击事件
	const onDialogClick = () =>{
		console.log("确定");
		dialogShow.value = false;
	}
</script>

<template>
	<view class="lucky-wrapper">
		<fui-dialog :show="dialogShow" :title="dialogTitle" :content="dialogText" maskClosable @click="onDialogClick" :buttons="[{text: '确定',color: '#465CFF'}]" ></fui-dialog>
		
		<img class="lucky-wrapper-head" src="../../static/lucky/luckyhead.png" alt="抽奖">
		<fui-grid class="lucky-wrapper-grid" >
			<fui-grid-item v-for="(item, index) in raffleItem" :key="index" >
				<view class="fui-grid__cell" :class="{select: winSelectItem === index}">
					<fui-icon name="coupon-fill" class="ui-icon" ></fui-icon>
					<text>{{item.name}}</text>
				</view>
			</fui-grid-item>
		</fui-grid>
		<button @click="startRaffle">开始抽奖</button>
	</view>
</template>

<style lang="scss" scoped>
		
	.lucky-wrapper{
		background-color:#f2f6fa;
		height: 100vh;
		padding: 20rpx;
		
		&-head{
			width: 94vw;
			height: 25%;
		}
		
		&-grid{
	
			.fui-grid__cell {
				margin: 30rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				flex: 1;
				font-size: 28rpx;
				font-weight: 400;
				border: 3px solid black;
				border-radius: 2px;
				background: #ffffff;
				box-shadow:  5px 5px 1px #095140,
				             -2px -2px 2px #d5ffff;
			}
			.select {
			  border-color: black;
			  color: white;
			  background: #17cb9f;
			}
			.fui-icon {
				width: 96rpx;
				height: 96rpx;
				margin-bottom: 16rpx;
			}
			
		}

	}
	
</style>
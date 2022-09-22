<!-- <template>
	<m-canvas ref="myCanvasRef" :width="470" :height="690" />
	<button @click="createPoster">生成海报</button>
</template>

<script setup>
	import MyCanvas from "MyCanvas.vue"
	import {
		ref
	} from "vue"
	const myCanvasRef = ref()

	function createPoster() {
		// 配置项
		const options = [
			// 背景图
			{
				type: 'image',
				url: 'https://s1.ax1x.com/2022/09/21/xiIKDf.png',
				left: 0,
				top: 0,
				width: 470,
				height: 690
			},
			// 长按扫码
			{
				type: 'text',
				content: '长按扫码 > 获取作业',
				color: '#333',
				fontSize: 20,
				left: 'center',
				top: 240
			},
			// 小程序码白色背景
			{
				type: 'block',
				color: '#fff',
				radius: 30,
				left: 'center',
				top: 275,
				width: 245,
				height: 245
			},
			// 小程序码
			{
				type: 'image',
				url: 'https://s1.ax1x.com/2022/09/17/xpMRZ6.png',
				left: 'center',
				top: 310,
				width: 180,
				height: 180
			},
			// 头像
			{
				type: 'image',
				url: 'https://s1.ax1x.com/2022/09/17/xpMRZ6.png',
				radius: '50%',
				left: 'center',
				top: 545,
				width: 50,
				height: 50
			},
			// 昵称
			{
				type: 'text',
				content: 'Jerry',
				color: '#333',
				fontSize: 20,
				left: 'center',
				top: 625
			}
		]
		// 调用myCanvas的onDraw方法，绘制并保存
		myCanvasRef.value.onDraw(options, url => {
			console.log(url)
		})
	}
</script>

<style lang="scss" scoped></style>
 -->
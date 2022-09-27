<script setup>
  import mod from "./module.js"
  import MyDate from "@/components/shared/MyDate/index.vue"
  import MyTag from "@/components/shared/MyTag/index.vue"
  import MyCanvas from "@/components/shared/SharePoster/index.vue"

  const {
    onLoad,
    reactive,
    defineProps,
    requestData,
    Controller,
    timeFormat,
    ref
  } = mod
  // 预览图片
  const previewImg = (url) => {
    uni.previewImage({
      urls: [url],
    });
  }

  let data = reactive({})
  onLoad(async (options) => {
    const {
      id,
    } = options
    // 传值不对，或未传值
    if (!id) {
      return uni.navigateBack({
        delta: 1
      })
    }
    const res = await requestData(uni, {}, true);
    Object.assign(data, res);
    console.log(data);
  })


  const myCanvasRef = ref();
  //绘制海报
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
      //大标题
      {
        type: 'text',
        content: data.title,
        color: '#333',
        fontSize: 30,
        left: 'center',
        top: 280
      },
      //内容
      {
        type: 'text',
        content: data.desc,
        color: '#707070',
        fontSize: 20,
        left: 60,
        top: 320,
        maxLine: 10
      },
      // 长按扫码
      {
        type: 'text',
        content: '长按扫码 > 获取作业',
        color: '#333',
        fontSize: 20,
        left: 'center',
        top: 625
      },
      // // 小程序码白色背景
      // {
      // 	type: 'block',
      // 	color: '#fff',
      // 	radius: 30,
      // 	left: 'right',
      // 	top: 625,
      // 	width: 50,
      // 	height: 50
      // },
      // 小程序码
      // {
      // 	type: 'image',
      // 	url: 'https://s1.ax1x.com/2022/09/17/xpMRZ6.png',
      // 	left: 'center',
      // 	top: 310,
      // 	width: 180,
      // 	height: 180
      // },
      // 头像
      {
        type: 'image',
        url: 'https://s1.ax1x.com/2022/09/17/xpMRZ6.png',
        radius: '50%',
        left: 350,
        top: 590,
        width: 50,
        height: 50
      }
    ]
    //绘制并保存
    myCanvasRef.value.onDraw(options, url => {
      console.log(url)
    })
  }
</script>

<template>
  <view class="detail-wrapper">
    <!-- 缺省页 -->
    <fui-empty isFixed src="/static/indexPage/empty.png" title="资源请求中..." descr="请耐心等待"
      v-if="!Object.keys(data).length">
    </fui-empty>
    <!-- 内容主体 -->
    <!-- <fui-animation :duration="500" :animationType="['fade']" :show="Boolean(Object.keys(data).length)"> -->
    <view class="detail-wrapper-time">
      发布于: {{ timeFormat(data.time) }}
    </view>
    <header class="detail-wrapper-title">
      {{ data.title }}
    </header>
    <main class="detail-wrapper-desc">
      {{ data.desc }}
    </main>
    <view class="detail-wrapper-urls">
      <view v-for="(item,index) in data.urls" :key="index" class="detail-wrapper-urls-item">
        <image :src="item" @click="previewImg(item)" mode="widthFix"></image>
      </view>
    </view>
    <view class="detail-wrapper-tag">
      <MyTag v-for="item in data.tag" :key="item" :title="item"></MyTag>
    </view>
    <MyDate :ddl="data.ddl"></MyDate>
    <MyCanvas ref="myCanvasRef" :width="470" :height="690" />
    <fui-button height="66rpx" radius="96rpx" type="purple" :margin="['20rpx','0rpx','0rpx','0rpx']"
      @click="createPoster">生成海报
    </fui-button>
    <fui-button openType="share" height="66rpx" radius="96rpx" type="purple" :margin="['20rpx','0rpx','0rpx','0rpx']">
      分享给好友
    </fui-button>
    <!-- </fui-animation> -->
  </view>
</template>

<style lang="scss" scoped>
  .detail-wrapper {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: auto;
    min-height: 100vh;
    padding: 20rpx;
    background-color: #f0f0f0;

    &-time {
      font-size: 28rpx;
      color: #938e8e;
    }

    &-title {
      font-size: 50rpx;
      font-weight: 700;
      margin-top: 10rpx;
    }

    &-desc {
      width: 95%;
      margin-top: 10rpx;

      font-size: 30rpx;
      line-height: 36rpx;
    }

    &-urls {
      display: flex;
      justify-content: space-between;
      flex-flow: wrap;
      align-items: center;
      width: 100%;
      margin-top: 10px;

      &-item {
        width: 30%;

        image {
          width: 100%;
          height: 100px;
          border-radius: 10rpx;
        }
      }
    }

    image {
      width: 100%;
      // height: 100px;
      border-radius: 10rpx;
    }

    &-tag {
      display: flex;
      align-items: center;
      flex-flow: wrap;
    }

    &-ddl {
      margin: 20rpx;
    }

    &-btns {
      display: flex;
      justify-content: space-around;
    }

  }
</style>

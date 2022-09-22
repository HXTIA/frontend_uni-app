<script setup>
  import mod from "./module.js"
  import MyDate from "@/components/shared/MyDate/index.vue"
  import MyTag from "@/components/shared/MyTag/index.vue"

  const {
    onLoad,
    reactive,
    defineProps,
    requestData,
    Controller
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
  })

  // 埋点： 截屏分享
  // let context = uni.createCanvasContext('canvasOne')
  // const savePhoto = () => {
  //   const img = data.urls[3];
  //   Controller.handleShareSavePhoto(uni, context, img, ["我是第一行", "我是第二个", "我是第三个"])
  // }
</script>

<template>
  <view class="detail-wrapper">
    <view class="detail-wrapper-lining">
      <view class="detail-wrapper-lining-time">
        发布于: {{ data.time }}
      </view>
      <header class="detail-wrapper-lining-title">
        {{ data.title }}
      </header>
      <main class="detail-wrapper-lining-desc">
        {{ data.desc }}
      </main>
      <view class="detail-wrapper-lining-urls">
        <view v-for="item in data.urls" :key="item" class="detail-wrapper-lining-urls-item">
          <image :src="item" @click="previewImg(item)" mode="widthFix"></image>
        </view>
      </view>
      <view class="detail-wrapper-lining-tag">
        <MyTag v-for="item in data.tag" :key="item" :title="item"></MyTag>
      </view>
      <MyDate :ddl="data.ddl"></MyDate>
      <view class="detail-wrapper-lining-btns">
        <fui-button openType="share" width="250rpx" class="detail-wrapper-lining-sharedPhoto">分享给好友
        </fui-button>
      </view>
    </view>
    <!-- <canvas canvas-id="canvasOne" class="canvas-one" style="width:{{width}}px;height:{{height}}px"></canvas> -->
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
    padding: 40rpx 0;
    background-color: #f0f0f0;

    &-lining {
      width: 90%;
      margin: 0 auto;

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
            // height: 100px;
            border-radius: 10rpx;
          }
        }
      }

      &-tag {
        display: flex;
        align-items: center;
        flex-flow: wrap;
      }

      &-btns {
        display: flex;
        justify-content: space-around;
      }
    }

  }
</style>

<script setup>
  import mod from "./module.js"
  const {
    onLoad,
    reactive,
    defineProps,
    requestData
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
    Object.assign(data, await requestData(uni, {}, true))
  })
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
          <img :src="item" @click="previewImg(item)">
        </view>
      </view>
      <view class="detail-wrapper-lining-tag">
        <span v-for="item in data.tag" :key="item">
          {{ item }}
        </span>
      </view>
      <view class="detail-wrapper-lining-ddl">
        <span class="icon">icon</span>
        <span class="detail-wrapper-lining-ddl-msg">
          截止时间: {{ data.ddl }}
        </span>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
  .detail-wrapper {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    padding: 40rpx 0;
    background-color: #11e8ff;

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
        width: 100%;
        margin-top: 10px;
        flex-flow: wrap;

        &-item {
          width: 30%;

          image {
            width: 100%;
            height: 100px;
            border-radius: 10rpx;
          }
        }
      }

      &-tag {
        label {
          padding: 6rpx 10rpx;

        }
      }

      &-ddl {

        &-msg {
          font-size: 38rpx;
          font-weight: 700;
        }
      }
    }
  }
</style>

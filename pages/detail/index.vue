<script setup>
  import mod from "./module.js"
  import MyDate from "@/components/shared/MyDate/index.vue"
  import MyTag from "@/components/shared/MyTag/index.vue"
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
        <MyTag v-for="item in data.tag" :key="item" :title="item"></MyTag>
      </view>
      <MyDate :ddl="data.ddl"></MyDate>
    </view>
  </view>
</template>

<style lang="scss" scoped>
  .workItem-wrapper {
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    // width: 95%;
    height: 300rpx;
    // padding: 6px;
    border-radius: 0px 10px 10px 0px;
    background-color: whitesmoke;
    border-bottom: 2px dashed gainsboro;
    // box-shadow:  6px 6px 12px 12px #1e1e1e;
    box-shadow: 0px 0px 15px #1e1e1e;
    margin: 0px 4px 0px 0px;

    &-left {
      background-color: seagreen;
      width: 6px;
      height: 300rpx;
    }

    &-right {
      margin: 0px 15px;

      .title {
        height: 60rpx;
        font-size: 43rpx;
        font-weight: bold;
        margin: 5px 0px;
        overflow: hidden;
        // text-overflow: ellipsis;
        // white-space: nowrap;
      }

      .desc {
        color: gray;
        font-size: 30rpx;
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .image {
        position: absolute;
        // top: 75px;
        // right: -10px;
        top: 150rpx;
        right: -40rpx;
        width: 100px;
        height: 100px;
      }
    }

    &-top {
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-icon {
        padding-right: 10px;
      }
    }
  }
</style>

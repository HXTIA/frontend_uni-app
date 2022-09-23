<!-- <template>
  <view class="guide-wrapper" :style="style">
    <fui-animation :duration="200" :animationType="type" :show="show" class="guide-wrapper-animation">
      <view class="guide-wrapper-lining" @touchstart="start" @touchend="end">
        <view class="guide-wrapper-lining-image">
          <image :src="data.info.img"></image>
        </view>
        <view class="guide-wrapper-lining-content">
          {{ data.info.desc }}
        </view>
        <view class="guide-wrapper-lining-button" v-if="data.info.flag">
          <fui-button @click="back">回到主页</fui-button>
        </view>
      </view>
    </fui-animation>
  </view>
</template>

<script setup>
  import {
    reactive,
    ref
  } from "vue"

  import router from "@/router/index.js"

  import {
    guideData
  } from "@/data/publicOptions.js"

  let style = reactive({
    zIndex: 10000
  })

  let show = ref(true);
  let type = reactive(['slide-right']);
  let index = 0;

  let data = reactive({
    info: guideData[index]
  })

  let startPosition;
  let endPosition;
  // 触摸开始
  const start = (e) => {
    startPosition = e.changedTouches[0].clientX;
  }
  // 触摸结束
  const end = (e) => {
    endPosition = e.changedTouches[0].clientX;
    let residue = endPosition - startPosition;
    if (residue < 0 && Math.abs(residue) > 60 && index !== guideData.length - 1) {
      index++;
    }
    if (residue > 0 && Math.abs(residue) > 60 && index !== 0) {
      index--;
    }
    show.value = false;
    data.info = guideData[index];
    setTimeout(() => {
      show.value = true;
    }, 0)
  }

  const back = () => {
    router(uni, {
      url: "Index"
    })
  }
</script>

<style lang="scss" scoped>
  .guide-wrapper {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 100vw;
    height: 100vh;
    padding: 10%;
    background-color: #fff;

    &-lining {
      display: flex;
      flex-direction: column;
      align-items: center;

      &-image {}
    }
  }
</style>
 -->
<template>
  <view class="guide-wrapper">
    <swiper :indicator-dots="true">
      <swiper-item v-for="(item,index) in guideData" :key="index">
        <view class="swiper-item">
          <view class="swiper-item-image">
            <image :src="item.img" mode="widthFix"></image>
          </view>
          <view class="swiper-item-content">
            {{ item.desc }}
          </view>
          <view class="swiper-item-button" v-if="item.flag">
            <fui-button width="400rpx" @click="back">回到主页</fui-button>
          </view>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>
<script setup>
  import {
    reactive,
    ref
  } from "vue"

  import {
    guideData
  } from "@/data/publicOptions.js"

  import {
    setStorage
  } from "@/utils/shared/handleStatus.js"

  const back = () => {
    setStorage(uni, "isGuide", true);
    uni.navigateBack({
      delta: 1
    })
  }
</script>
<style lang="scss" scoped>
  .guide-wrapper {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: 10000;
    width: 100vw;
    height: 100vh;
    padding: 30rpx;
    background-color: #fff;

    swiper {
      width: 100vw;
      height: 100vh;

      .swiper-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        &-content {
          width: 70%;
          margin-top: 2%;
          text-align: center;
          font-size: 50rpx;
          font-family: Broadway;
          background-image: -webkit-linear-gradient(bottom, red, #12eafd, yellow);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        &-button {
          margin-top: 2%;
        }
      }
    }
  }
</style>

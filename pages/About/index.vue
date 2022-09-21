<template>
  <view class="aboutPages-wrapper">
    <view class="aboutPages-wrapper-header">
      关于我们
    </view>
    <view class="aboutPages-wrapper-logo" :style="bgImage">
    </view>
    <view class="aboutPages-wrapper-title">
      作业板
    </view>
    <view class="aboutPages-wrapper-desc">
      通知、提醒、记录，一站式帮您完成作业
    </view>
    <view class="aboutPages-wrapper-footer">
      <view>
        From:
      </view>
      <view>
        华信科协
      </view>
      <view class="aboutPages-wrapper-footer-edition">
        版本号：V {{ edition.verson }}
      </view>
    </view>
  </view>
</template>

<script setup>
  import {
    edition
  } from "@/data/publicOptions.js"
  import {
    reactive
  } from "vue"
  import {
    preloadImageList
  } from "@/utils/lazyLoad/index.js"

  let bgImage = reactive({
    backgroundImage: "url('../../static/HXTIA_logo.png')"
  })
</script>

<style lang="scss" scoped>
  .aboutPages-wrapper {
    box-sizing: border-box;
    display: flex;
    padding: 20rpx;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;

    &-header {
      font-size: 40rpx;
      font-weight: 600;
      margin-bottom: 80rpx;
    }

    &-logo {
      width: 80%;
      height: 45%;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100%;
      margin-bottom: 30rpx;
    }

    &-title {
      font-size: 50rpx;
      font-weight: 700;
      margin-bottom: 20rpx;
    }

    &-desc {
      font-size: 30rpx;
      font-weight: 600;
    }

    &-footer {
      flex-grow: 1;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      align-items: center;
      font-size: 26rpx;

      view:first-child {
        font-weight: 600;
      }

      // &-edition {}
    }
  }
</style>

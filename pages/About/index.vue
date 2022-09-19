<template>
  <view class="aboutPages-wrapper">
    <view class="aboutPages-wrapper-header">
      关于我们
    </view>
    <view class="aboutPages-wrapper-logo">
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
      background: url("https://axure-file.lanhuapp.com/a165925e-434b-479f-a9b0-ed136649f420__6215a13351e11c7d65b4aad4e24a519b.png") no-repeat center center;
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

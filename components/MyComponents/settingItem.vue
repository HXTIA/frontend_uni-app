<script setup>
  import {
    defineProps
  } from "vue"

  import router from "@/router/index.js"

  defineProps({
    data: {
      type: Object,
      default: {
        icon: "t-icon t-icon-dingshi",
        title: "开发中....",
        top: false,
        route: "Index"
      }
    }
  })

  const goTargetPages = (route) => {
    router(uni, {
      url: route
    })
  }
</script>

<template>
  <view class="settingItem-wrapper" :class="{all: data.top,bottom:!data.top}" @click="goTargetPages(data.route)">
    <view class="settingItem-wrapper-main">
      <span class="settingItem-wrapper-main-icon" :class="data.icon"></span>
      <span class="settingItem-wrapper-main-title">{{ data.title }}</span>
      <span class="settingItem-wrapper-main-rightPoint">></span>
    </view>
  </view>
</template>

<style lang="scss" scoped>
  .settingItem-wrapper {
    box-sizing: border-box;
    width: 100%;
    padding: 20rpx 40rpx;
    background-color: #fff;
    margin-bottom: 20rpx;

    &-main {
      display: flex;
      align-items: center;

      &-icon {
        font-size: 20px;
      }

      &-title {
        font-size: 24px;
      }

      &-rightPoint {}
    }
  }

  .all {
    border-radius: 20rpx;
  }

  .bottom {
    border-bottom-left-radius: 20rpx;
    border-bottom-right-radius: 20rpx;
  }
</style>

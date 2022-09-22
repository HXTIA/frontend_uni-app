<template>
  <view class="morePages-wrapper">
    <moreItemComponent v-for="(item,index) in data" :key="index" :data="item"></moreItemComponent>
  </view>
</template>

<script setup>
  import moreItemComponent from "@/components/MoreComponents/index.vue"

  import {
    onShow
  } from "@dcloudio/uni-app";

  import {
    returnData,
  } from "./options/index.js"

  let data = returnData(uni);

  onShow(() => {
    data = returnData(uni)
  })
</script>

<style lang="scss" scoped>
  .morePages-wrapper {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    padding: 20rpx;
    // align-items: center;
  }
</style>

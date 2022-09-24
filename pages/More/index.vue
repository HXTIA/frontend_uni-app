<template>
  <view class="morePages-wrapper">
    <!-- 引导 -->
    <PopupCom v-for="(item,index) in tipOptions.reverse()" :key="item" flag="isSettingTip" :data="item" v-if="!isShow">
    </PopupCom>
    <moreItemComponent v-for="(item,index) in data" :key="index" :data="item"></moreItemComponent>
  </view>
</template>

<script setup>
  import moreItemComponent from "@/components/MoreComponents/index.vue"
  import PopupCom from "@/components/shared/Popup/index.vue"

  import {
    onShow
  } from "@dcloudio/uni-app";

  import {
    returnData,
    tipOptions,
    isShowTips
  } from "./options/index.js"

  let data = returnData(uni);
  let isShow = isShowTips(uni)

  onShow(() => {
    data = returnData(uni);
    isShow = isShowTips(uni);
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

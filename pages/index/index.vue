<template>
  <view class="indexPage-wrapper">
    <view class="indexPage-wrapper-header">
      <IndexHeaderCom></IndexHeaderCom>
    </view>
    <view class="indexPage-wrapper-scroller">
      <IndexWorkItemCom v-for="(item,index) in data" :key="index" :data="item" :dropDownOptions="dropDownOptions">
      </IndexWorkItemCom>
    </view>
    <fui-divider text="没有更多了" backgroundColor="#e0e0e0" color="#000000" height="50"></fui-divider>
  </view>
</template>

<script setup>
  import IndexHeaderCom from "@/components/IndexComponents/Header.vue"
  import IndexWorkItemCom from "@/components/IndexComponents/WorkItem.vue"
  import mod from "./module.js"

  const {
    data,
    http,
    dropDownOptions
  } = mod
</script>

<style lang="scss" scoped>
  .indexPage-wrapper {
    width: 100vw;
    height: auto;
    background-color: #e0e0e0;


    &-header {
      position: fixed;
      top: 0;
      width: 100vw;
      height: 70rpx;
      z-index: 10000;
    }

    &-scroller {
      display: flex;
      flex-direction: column;
      margin-top: 90rpx;
    }
  }
</style>

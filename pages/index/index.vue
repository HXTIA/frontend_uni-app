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
    dropDownOptions,
    reactive,
    requestData,
    onLoad
  } = mod

  let data = reactive([]);
  onLoad(async () => {
    const res = await requestData();
    data.push(...res)
  })
</script>

<style lang="scss" scoped>
  .indexPage-wrapper {
    width: 100vw;
    height: auto;
    background-color: #e0e0e0;

    &-header {
      position: fixed;
      z-index: 1000;
      width: 100%;
      height: 7%;
    }

    &-scroller {
      padding-top: 90rpx;
      display: flex;
      flex-direction: column;
      // align-items: center;
    }
  }
</style>

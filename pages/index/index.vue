<template>
  <view class="indexPage-wrapper">
    <view class="indexPage-wrapper-header">
      <IndexHeaderCom></IndexHeaderCom>
    </view>
    <view class="indexPage-wrapper-scroller">
      <IndexWorkItemCom v-for="(item,index) in data" :key="index" :data="item" :dropDownOptions="dropDownOptions">
      </IndexWorkItemCom>
    </view>
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
      // position: fixed;
      // top: 0;
      width: 100%;
      height: 7%;
    }

    &-scroller {
      display: flex;
      flex-direction: column;
      // align-items: center;
    }
  }
</style>

<template>
  <view class="indexPage-wrapper">
    <view class="indexPage-wrapper-header">
      <IndexHeaderCom></IndexHeaderCom>
    </view>
    <view class="indexPage-wrapper-scroller">
      <IndexWorkItemCom v-for="(item,index) in data" :key="index" :data="item"></IndexWorkItemCom>
    </view>
  </view>
</template>

<script setup>
  import IndexHeaderCom from "@/components/IndexComponents/Header.vue"
  import IndexWorkItemCom from "@/components/IndexComponents/WorkItem.vue"
  import mod from "./module.js"
  const {
    data,
    reactive,
    checkLogin,
    onLoad,
    userStore,
  } = mod

  const store = userStore();

  onLoad(async () => {
    // 存储uni实例
    store.setUni(uni);
    // 检测是否已登录，未登录跳转去登录
    checkLogin(uni)
  })
</script>

<style lang="scss" scoped>
  .indexPage-wrapper {
    width: 100vw;
    height: auto;
    background-color: aqua;

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

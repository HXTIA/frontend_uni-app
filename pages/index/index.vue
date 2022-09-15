<template>
  <view class="indexPage-wrapper">
    <view class="indexPage-wrapper-header">
      <IndexHeaderCom></IndexHeaderCom>
    </view>
    <view @click="detail">123</view>
  </view>
</template>

<script setup>
  import {
    reactive,
  } from "vue"
  import {
    checkLogin
  } from "./api/index.js"

  import {
    onLoad
  } from "@dcloudio/uni-app"

  import userStore from "@/stores/users/index.js"
  const store = userStore();

  import router from "@/router/index.js"

  import IndexHeaderCom from "@/components/IndexComponents/Header.vue"

  const detail = () => {
    router(uni, {
      url: "detail"
    })
  }

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
    height: 100vh;
    background-color: aqua;

    &-header {
      width: 100%;
      height: 7%;
    }
  }
</style>

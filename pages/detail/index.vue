<template>
  <view>详细界面</view>
  <uploadFile :select="selectFile"></uploadFile>
</template>

<script setup>
  import uploadFile from "../../components/uploadFile/index.vue"
  import {
    onLoad,
    onShow,
    onPullDownRefresh,
  } from "@dcloudio/uni-app";
  const selectFile = () => {
    console.log(1111);
  }
  onPullDownRefresh(() => {
    console.log("刷新了！");
  })
  onLoad((options) => {
    console.log(options);
  })
</script>

<style lang="scss" scoped>
</style>

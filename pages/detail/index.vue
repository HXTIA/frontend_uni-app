<template>
  <view>详细界面</view>
</template>

<script setup>
  import {
    onLoad,
    onShow,
    onPullDownRefresh,
  } from "@dcloudio/uni-app";
  onPullDownRefresh(() => {
    console.log("刷新了！");
  })
  onLoad((options) => {
    console.log(options);
  })
</script>

<style lang="scss" scoped>
</style>

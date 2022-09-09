<template>
  <view class="a">12312</view>
</template>

<script setup>
  import {
    onLoad
  } from "@dcloudio/uni-app"
  import {
    uniInstance,
    reqAbc
  } from "./api/index.js"
  uniInstance(uni);
  onLoad(async () => {
    const res = await reqAbc({
      method: "GET",
      url: "http://www.baidu.com"
    }, true)
    console.log(res);
  })
</script>

<style lang="scss" scoped>
</style>

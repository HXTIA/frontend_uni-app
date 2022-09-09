<template>
  <view class="a" v-for="item in store.getUserInfo">
    {{ item }}
  </view>
</template>

<script setup>
  import {
    onLoad
  } from "@dcloudio/uni-app"
  import {
    uniInstance,
    reqAbc
  } from "./api/index.js"

  import userStore from "@/stores/users/index.js"

  const store = userStore()

  console.log(store.userInfo);

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

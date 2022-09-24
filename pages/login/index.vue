<template>
  <view class="login-wrapper">
  </view>
</template>

<script setup>
  import {
    onLoad
  } from "@dcloudio/uni-app"
  import {
    handleLogin
  } from "./api/index.js"

  import {
    getStorage
  } from "@/utils/shared/handleStatus.js"

  onLoad(async () => {
    const res = await handleLogin(uni);

    if (!res) {
      return uni.reLaunch({
        url: "/pages/login/index"
      })
    }

    // uni.navigateBack({
    //   success: function(ops) {
    //     pages.map((value) => {
    //       if (whiteList.includes(value.route)) {
    //         value.onLoad();
    //       }
    //     })
    //   }
    // });

    // 登陆结束 -> 现在去重定向至首页
    uni.reLaunch({
      url: "/pages/Index/index"
    })
  })
</script>

<style>
</style>

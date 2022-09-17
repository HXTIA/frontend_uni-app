<template>

</template>

<script setup>
  import {
    onLoad
  } from "@dcloudio/uni-app"
  import {
    handleLogin
  } from "./api/index.js"

  onLoad(async () => {
    const res = await handleLogin(uni);

    if (!res) {
      return uni.showModal({
        title: 'WARNING！',
        content: '宝~，授权微信登录后才能使用，你想要重新授权吗？',
        success(res) {
          //如果用户点击了确定按钮
          if (res.confirm) {
            uni.redirectTo({
              url: "/pages/login/index"
            })
          } else if (res.cancel) {
            //如果用户点击了取消按钮
            uni.showToast({
              title: '拒绝授权！',
              duration: 2000
            });
          }
        }
      });
    }
    uni.navigateBack({
      delta: 1
    })
  })
</script>

<style>
</style>

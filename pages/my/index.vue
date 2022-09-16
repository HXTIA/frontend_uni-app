<template>
  <view class="myPages-wrapper">
    <view class="myPages-wrapper-avatar">
      <img :src="userInfo.avatarUrl">
      <view class="myPages-wrapper-avatar-name">
        {{ nickName }}
      </view>
      <view class="myPages-wrapper-avatar-button">
        <fui-button></fui-button>
      </view>
    </view>
  </view>
</template>

<script setup>
  import mod from "./module.js"
  const {
    onShow,
    onLoad,
    getUserInfo,
    reactive,
    userStore
  } = mod
  const {
    nickName,
    gender,
    avatarUrl
  } = getUserInfo(uni)

  let userInfo = reactive({
    nickName,
    gender,
    avatarUrl
  })
</script>

<style lang="scss" scoped>
  .myPages-wrapper {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 20rpx 10rpx;

    &-avatar {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 90%;
      height: 40%;
      background-color: green;
      // background: url("https://thirdwx.qlogo.cn/mmopen/vi_32/POVCIKtk1iaDpic6vy58cdicWJSP6Y5icPe5iaBNXo3jXL0ILeK6icF6BYO1welicq0lyXwkJk0yFMa5W5Qs0IQEuIBxg/0");

      image {
        width: 180rpx;
        height: 180rpx;
        border-radius: 50%;
      }
    }
  }
</style>

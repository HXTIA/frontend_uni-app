<template>
  <view class="myPages-wrapper">
    <view class="myPages-wrapper-lining">
      <view class="myPages-wrapper-lining-avatar">
        <img :src="userInfo.avatarUrl">
        <view class="myPages-wrapper-lining-avatar-name">
          {{ nickName }}
        </view>
        <fui-button type="danger" height="70rpx" width="160rpx" @click="setCountMessage">编辑资料</fui-button>
      </view>
      <view class="myPages-wrapper-lining-settingMain">
        <mySettingItem v-for="item in itemOptions" :key="item" :data="item"></mySettingItem>
      </view>
    </view>
  </view>
</template>

<script setup>
  import mySettingItem from "@/components/MyComponents/settingItem.vue"

  import mod from "./module.js"
  const {
    onShow,
    onLoad,
    getUserInfo,
    reactive,
    userStore,
    itemOptions,
    router
  } = mod
  const {
    nickName,
    avatarUrl
  } = getUserInfo(uni)

  let userInfo = reactive({
    nickName,
    avatarUrl
  })

  const setCountMessage = () => {
    router(uni, {
      url: "Count"
    })
  }
</script>

<style lang="scss" scoped>
  .myPages-wrapper {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 40rpx 10rpx;
    background-color: midnightblue;

    &-lining {
      width: 90%;
      height: 100%;

      &-avatar {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 35%;
        background-color: green;
        border-radius: 40rpx 40rpx 0 0;
        background: url("https://axure-file.lanhuapp.com/a165925e-434b-479f-a9b0-ed136649f420__6215a13351e11c7d65b4aad4e24a519b.png") center center;
        background-size: cover;

        image {
          width: 140rpx;
          height: 140rpx;
          border-radius: 50%;
        }

        &-name {
          font-size: 50rpx;
        }
      }
    }
  }
</style>

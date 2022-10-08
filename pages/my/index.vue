<template>
  <view class="myPages-wrapper">
    <view class="myPages-wrapper-lining">
      <view class="myPages-wrapper-lining-avatar" :style="bgImage">
        <img :src="userInfo.avatarUrl">
        <view class="myPages-wrapper-lining-avatar-name">
          {{ nickName }}
        </view>
        <fui-button type="danger" height="70rpx" width="160rpx" @click="setCountMessage" text="编辑资料"></fui-button>
      </view>
      <view class="myPages-wrapper-lining-settingMain">
        <mySettingItem v-for="(item,index) in itemOptions" :key="index" :data="item"></mySettingItem>
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
    itemOptions,
    router,
  } = mod
  const {
    nickName,
    avatarUrl
  } = getUserInfo(uni)

  let userInfo = reactive({
    nickName,
    avatarUrl
  })



  let bgImage = reactive({
    // backgroundImage: `url(${preloadImageList.get("ABOUT_BGIMAGE")})`
    // TODO: 由于之后可能会有组织 -> 那么每个组织的背景旗会不一致 -> 组织的信息由后端返回
    // 组织的旗帜有可能会进行改变 -> 那么信息应该是动态变化的吧
    backgroundImage: `url("https://axure-file.lanhuapp.com/a165925e-434b-479f-a9b0-ed136649f420__6215a13351e11c7d65b4aad4e24a519b.png")`
  })

  const setCountMessage = () => {
    router(uni, {
      url: "Count/Initialization"
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
        background-position: center center;
        // background-size: cover;
        background-size: contain;
        // opacity: 0.6;

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

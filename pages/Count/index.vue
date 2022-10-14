<template>
  <view class="count-wrapper">
    <view class="count-wrapper-avatar">
      <image :src="url"></image>
      <view class="icon" @click="choosePhoto">相机</view>
    </view>
    <view class="count-wrapper-mainarea">
      <view class="count-wrapper-nickname">
        昵称: {{ nickName }}
      </view>
      <view class="count-wrapper-organization">
        组织: 华信科协
      </view>
      <view class="count-wrapper-class">
        班级: 21级五班
      </view>
    </view>
    <view class="count-wrapper-btn">
	  <fui-button height="86rpx" radius="98rpx" background="linear-gradient(300deg, #6831FF 0%, #465CFF 100%)"
	  	width="400rpx" :margin="['50rpx','0rpx','0rpx','0rpx']" @click="saveCount">保存修改
	  </fui-button>
    </view>
  </view>
</template>

<script setup>
  import {
    setStorage,
    getStorage
  } from "@/utils/shared/handleStatus.js"
  import {
    reactive,
    ref
  } from "vue";
  import {
    http
  } from '@/request/http.js'

  const {
    nickName,
    avatarUrl
  } = getStorage(uni, 'userInfo');

  // 处理图片的内容
  let url = ref(avatarUrl);
  const choosePhoto = () => {
    uni.chooseImage({
      count: 1,
      success(ops) {
        // url.value = ops.tempFilePaths[0];
        uni.uploadFile({
          url: "https://119.29.157.231:8888/wx​/users​/uploadAvatar",
          filePath: ops.tempFilePaths[0],
          name: 'avatarFile',
          header: {
            'Token': getStorage(uni, 'token')
          },
          complete(ops) {
            console.log(ops);
          }
        })
      }
    })
  }

  // 保存信息 -> 发起请求
  const saveCount = () => {
    console.log("保存请求");
    uni.uploadFile({
      url: "http://119.29.157.231:8888/wx​/users​/uploadAvatar",
      name: 'avatarFile',
      filePath: url.value,
      formData: {
        avatarUrl: getStorage(uni, 'userInfo').avatarUrl,
        id: getStorage(uni, 'userInfo').id
      },
      complete(ops) {
        console.log(ops);
      }
    })
  }

  setStorage(uni, "organization", 1)
</script>

<style lang="scss" scoped>
  .count-wrapper {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 20rpx;
	background-color: #fafbff;

    &-avatar {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 30%;

      image {
        // width: 50%;
        // height: 50%;
        width: 400rpx;
        height: 400rpx;
        border-radius: 25%;
      }

      view {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100rpx;
        height: 100rpx;
        background-color: rgba(191, 191, 191, 0.6);
      }
    }
  }
</style>

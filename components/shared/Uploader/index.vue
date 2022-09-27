<template>
  <view class="uploader-wrapper">
    <view class="uploader-wrapper-header">
      {{ title }} ({{ urls.length }}/{{ count }})
    </view>
    <view class="uploader-wrapper-addIcon" @click="addImg">
      添加
    </view>
    <view class="uploader-wrapper-urls">
      <view class="uploader-wrapper-urls-item" v-for="(item,index) in urls" :key="index">
        <img :src="item" alt="">
        <view @click="deletePhoto(item)">X</view>
      </view>
    </view>
  </view>
</template>

<script setup>
  import {
    defineProps,
    defineEmits,
    reactive
  } from "vue"

  // 接受事件
  const emits = defineEmits(["upload-image"])

  const props = defineProps({
    title: {
      type: String,
      default: "空内容"
    },
    count: {
      type: Number,
      default: 3
    }
  })

  let urls = reactive([])
  const addImg = () => {
    uni.chooseImage({
      count: props.count,
      success(ops) {
        const paths = ops.tempFilePaths;
        urls.length + paths.length <= 3 ? urls.push(...paths) : "";
        emits("upload-image", urls)
      },
      fail(res) {
        // 取消上传
        console.log(res);
      }
    })
  }

  const deletePhoto = (url) => {
    const index = urls.findIndex((value) => value === url);
    urls.splice(index, 1);
    emits("upload-image", urls);
  }
</script>

<style lang="scss" scoped>
  .uploader-wrapper {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    // justify-content: flex-start;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    // padding: 20rpx;

    &-header {}

    &-urls {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-flow: wrap;
      align-items: center;
      margin: 10rpx;

      &-item {
        position: relative;
        width: 23%;

        image {
          width: 100%;
          height: 120rpx;
        }

        view {
          position: absolute;
          top: 0;
          right: 0;
        }

      }
    }

    &-addIcon {}
  }
</style>

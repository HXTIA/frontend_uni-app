<template>
  <view class="uploader-wrapper">
    <view class="uploader-wrapper-header">
      {{ title }} ({{ urls.length }}/{{ count }})
    </view>
  </view>
</template>

<script setup>
  import {
    defineProps,
    defineEmits,
    reactive
  } from "vue"

  let urls = reactive([])

  defineProps({
    title: {
      type: String,
      default: "空内容"
    },
    count: {
      type: Number,
      default: 3
    }
  })

  // 接受事件
  defineEmits(["upload-image"])
</script>

<style lang="scss" scoped>
  .uploader-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: yellow;
  }
</style>

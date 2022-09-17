<template>
  <view class="moreItem-wrapper">
    <view class="moreItem-wrapper-title">{{ data.title }}</view>
    <view class="moreItem-wrapper-switch">
      <fui-switch @change="changeStatus"></fui-switch>
    </view>
  </view>
</template>

<script setup>
  import {
    defineProps
  } from "vue"

  const props = defineProps({
    data: {
      type: Object,
      default: {
        title: "功能一",
        handleFunction: () => {
          console.log("默认");
        }
      }
    }
  })

  const changeStatus = (e) => {
    const {
      detail
    } = e;
    props.data.handleFunction(detail.value)
  }
</script>

<style lang="scss" scoped>
  .moreItem-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
</style>

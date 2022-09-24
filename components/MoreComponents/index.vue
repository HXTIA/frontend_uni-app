<template>
  <view class="moreItem-wrapper">
    <view class="moreItem-wrapper-title">{{ data.title }}</view>
    <view class="moreItem-wrapper-switch">
      <switch @change="changeStatus" :checked="data.isChecked" :disabled="data.isChecked" />
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
        title: "",
        handleFunction: () => {},
        isChecked: false
      }
    }
  })

  const changeStatus = async (e) => {
    const {
      detail
    } = e;
    const flag = await props.data.handleFunction(detail.value);
  }
</script>

<style lang="scss" scoped>
  .moreItem-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin: 20rpx;
  }
</style>

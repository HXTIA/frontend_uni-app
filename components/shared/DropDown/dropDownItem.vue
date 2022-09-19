<template>
  <view class="dropDownItem-wrapper" @click="click(item.index)">
    <view class="dropDownItem-wrapper-title">
      {{ item.title }}
    </view>
  </view>
</template>

<script setup>
  import {
    defineProps,
    defineEmits,
  } from "vue"

  const props = defineProps({
    item: {
      type: Object,
      default: {
        title: "功能点1",
        index: 0,
        handleFunction: () => {}
      }
    }
  })

  const emits = defineEmits(["clickItem"])

  const click = (index) => {
    emits("clickItem", index)
  }
</script>

<style lang="scss" scoped>
  .dropDownItem-wrapper {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10rpx;

    &-title {
      font-size: 30rpx;
    }

    &:hover {
      background-color: rgba(227, 227, 227, 0.9);
    }
  }
</style>

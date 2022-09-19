<template>
  <view class="dropDown-wrapper">
    <view @click="tabDropDown" class="dropDown-wrapper-icon">
      <slot></slot>
    </view>
    <view class="dropDown-wrapper-item" v-if="isShow">
      <DropDownItem v-for="(item,index) in data" :key="index" :item="item" @clickItem="clickItem">
      </DropDownItem>
    </view>
  </view>
</template>

<script setup>
  import DropDownItem from "@/components/shared/DropDown/dropDownItem.vue"

  import {
    defineProps,
    inject
  } from "vue"

  import {
    onShow,
    onHide
  } from "@dcloudio/uni-app"

  const props = defineProps({
    data: {
      type: Object,
      default: {
        title: "功能1",
        index: 1,
        handleFunction: () => {}
      }
    },
    id: {
      type: Number,
      default: 1
    }
  })

  let isShow = inject("flag");

  // 开关
  const tabDropDown = () => {
    isShow.value = !isShow.value
  }

  const clickItem = (index) => {
    tabDropDown();
    props.data[index].handleFunction(props.id);
  }
</script>

<style lang="scss" scoped>
  .dropDown-wrapper {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: auto;
    padding: 10rpx 20rpx;

    &-icon {
      position: absolute;
      right: 20rpx;
      top: -20rpx;
    }

    &-item {
      position: absolute;
      width: 100%;
      padding: 20rpx 10rpx;
      border-radius: 8rpx;
      right: 30px;
      top: 20rpx;
      background-color: white;
    }
  }
</style>

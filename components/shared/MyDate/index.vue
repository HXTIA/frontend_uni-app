<template>
  <view class="date">
    <view class="date-icon t-icon t-icon-dingshi"></view>
    <view class="data-ddl">截止日期:{{ timeFormat(ddl) }}</view>
  </view>
</template>

<script setup>
  import {
    defineProps
  } from "vue"
  import {
    timeFormat
  } from "@/utils/format/time.js"
  const props = defineProps({
    ddl: {
      type: Number,
      default: "无"
    }
  })
</script>

<style lang="scss" scoped>
  .date {
    display: flex;
    justify-content: left;
    align-items: center;
    margin-top: 6px;

    .date-icon {
      width: 20px;
      height: 20px;
    }

    .data-ddl {
      margin-left: 3px;
      color: darkblue;
      font-weight: bold;
      font-size: 30rpx;
    }
  }
</style>

<template>
  <view class="morePages-wrapper">
    <moreItemComponent v-for="(item,index) in data" :key="index" :data="item"></moreItemComponent>
  </view>
</template>

<script setup>
  import moreItemComponent from "@/components/MoreComponents/index.vue"

  import {
    onShow
  } from "@dcloudio/uni-app";

  import {
    returnData,
  } from "./options/index.js"

  let data = returnData(uni);

  onShow(() => {
    data = returnData(uni)
  })
</script>

<style lang="scss" scoped>
</style>

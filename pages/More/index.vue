<template>
  <view class="morePages-wrapper">
    <moreItemComponent v-for="(item,index) in data" :key="index" :data="item"></moreItemComponent>
  </view>
</template>

<script setup>
  import moreItemComponent from "@/components/MoreComponents/index.vue"
  import {
    data,
    createInstance
  } from "./options/index.js"

  createInstance(uni);
</script>

<style lang="scss" scoped>
</style>

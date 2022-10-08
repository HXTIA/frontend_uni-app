<template>
  <view class="lessonItem-wrapper">
    {{ data }}
  </view>
</template>

<script setup>
  import {
    defineProps
  } from 'vue'

  defineProps({
    data: {
      type: Object,
      default: {}
    }
  })
</script>

<style lang="scss" scoped>
  .lessonItem-wrapper {
    box-sizing: border-box;
    display: flex;
  }
</style>

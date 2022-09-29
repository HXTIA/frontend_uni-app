<template>
  <view class="lesson-wrapper">
    <view class="lesson-wrapper-header">
      筛选
    </view>
    <LessonItem v-for="(item,index) in data" :key="index" :data="item"></LessonItem>
  </view>
</template>

<script setup>
  import LessonItem from '@/components/LessonComponents/index.vue'

  import {
    http
  } from '@/request/http.js'
  import {
    onLoad
  } from '@dcloudio/uni-app'
  import {
    reactive
  } from "vue";

  let data = reactive([])

  onLoad(async () => {
    const res = await http(uni, {
      method: "GET",
      url: 'http://127.0.0.1:3000/api/class/allClass',
      data: {
        orgId: 1
      }
    }, true);
    data.push(...res.data)
  })
</script>

<style lang="scss" scoped>
  .lesson-wrapper {
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
  }
</style>

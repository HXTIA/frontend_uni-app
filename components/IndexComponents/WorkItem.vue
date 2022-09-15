<template>
  <view class="workItem-wrapper" @click="detail(data.id)">
    <view>{{ data.time }}</view>
    <view>{{ data.title }}</view>
    <view>{{ data.desc }}</view>
    <view>
      <view v-for="item in data.tag" :key="item">
        {{ item }}
      </view>
    </view>
    <view>{{ data.ddl }}</view>
  </view>
</template>

<script setup>
  import router from "@/router/index.js"
  import {
    defineProps
  } from "vue"

  const detail = (id) => {
    router(uni, {
      url: "detail",
      params: {
        id,
      }
    })
  }


  defineProps({
    // time: {
    //   type: String,
    //   default: "时间"
    // },
    // title: {
    //   type: String,
    //   default: "这是一个标题"
    // },
    // desc: {
    //   type: String,
    //   default: "简短描述"
    // },
    // tag: {
    //   type: Array,
    //   default: []
    // },
    // ddl: {
    //   type: String,
    //   default: "最后时间"
    // },
    data: {
      type: Object,
      default: {
        id: 1,
        time: "2022-09-05 13:34:22",
        title: "数据库概论",
        desc: "这是一段简短的描述",
        tag: ["作业二"],
        ddl: "2022-09-06 13:34:22"
      }
    }
  })
</script>

<style lang="scss" scoped>
  .workItem-wrapper {
    width: 100%;
    height: 200rpx;
    background-color: skyblue;
    margin-bottom: 10rpx;
  }
</style>

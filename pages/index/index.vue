<template>
  <view class="indexPage-wrapper">
    <view class="indexPage-wrapper-header">
      <IndexHeaderCom></IndexHeaderCom>
    </view>
    <view class="indexPage-wrapper-scroller">
      <IndexWorkItemCom v-for="item in data" :key="item" :data="item"></IndexWorkItemCom>
    </view>
  </view>
</template>

<script setup>
  import IndexHeaderCom from "@/components/IndexComponents/Header.vue"
  import IndexWorkItemCom from "@/components/IndexComponents/WorkItem.vue"

  import {
    reactive,
  } from "vue"
  import {
    checkLogin
  } from "./api/index.js"

  import {
    onLoad
  } from "@dcloudio/uni-app"

  import userStore from "@/stores/users/index.js"
  const store = userStore();


  let data = reactive([{
      id: 1,
      time: "2022-09-05 13:34:22",
      title: "数据库概论",
      desc: "这是一段简短的描述",
      tag: ["作业二"],
      ddl: "2022-09-06 13:34:22"
    },
    {
      id: 2,
      time: "2022-09-05 13:34:22",
      title: "数据库概论",
      desc: "这是一段简短的描述",
      tag: ["作业二"],
      ddl: "2022-09-06 13:34:22"
    },
    {
      id: 3,
      time: "2022-09-05 13:34:22",
      title: "数据库概论",
      desc: "这是一段简短的描述",
      tag: ["作业二"],
      ddl: "2022-09-06 13:34:22"
    },
    {
      id: 4,
      time: "2022-09-05 13:34:22",
      title: "数据库概论",
      desc: "这是一段简短的描述",
      tag: ["作业二"],
      ddl: "2022-09-06 13:34:22"
    },
    {
      id: 5,
      time: "2022-09-05 13:34:22",
      title: "数据库概论",
      desc: "这是一段简短的描述",
      tag: ["作业二"],
      ddl: "2022-09-06 13:34:22"
    },
    {
      id: 6,
      time: "2022-09-05 13:34:22",
      title: "数据库概论",
      desc: "这是一段简短的描述",
      tag: ["作业二"],
      ddl: "2022-09-06 13:34:22"
    },
    {
      id: 7,
      time: "2022-09-05 13:34:22",
      title: "数据库概论",
      desc: "这是一段简短的描述",
      tag: ["作业二"],
      ddl: "2022-09-06 13:34:22"
    },
    {
      id: 8,
      time: "2022-09-05 13:34:22",
      title: "数据库概论",
      desc: "这是一段简短的描述",
      tag: ["作业二"],
      ddl: "2022-09-06 13:34:22"
    }
  ])



  onLoad(async () => {
    // 存储uni实例
    store.setUni(uni);
    // 检测是否已登录，未登录跳转去登录
    checkLogin(uni)
  })
</script>

<style lang="scss" scoped>
  .indexPage-wrapper {
    width: 100vw;
    height: auto;
    background-color: aqua;

    &-header {
      width: 100%;
      height: 7%;
    }
  }
</style>

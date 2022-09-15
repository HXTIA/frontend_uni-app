<template>
  <view v-for="item in store.getUserInfo || []" :key="item">
    {{ item }}
  </view>
  <fui-button @click="chooseFile">选择文件</fui-button>
  <img :src="item.path" decoding="async" v-for="item in files" :key="item">
</template>

<script setup>
  import {
    onShow,
    onLoad
  } from "@dcloudio/uni-app"
  import {
    uniInstance,
    userInfo,
    uploadFile
  } from "./api/index.js"

  onLoad((ops) => {

  })


  import {
    reactive
  } from "vue"

  uniInstance(uni);

  import userStore from "@/stores/users/index.js"

  const store = userStore()

  let files = reactive([])

  const chooseFile = () => {
    // uni.chooseImage({
    //   count: 9,
    //   type: "all",
    //   success(res) {
    //     console.log(res);
    //   }
    // })
  }
</script>

<style lang="scss" scoped>
</style>

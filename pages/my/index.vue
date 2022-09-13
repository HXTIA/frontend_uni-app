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



  import {
    reactive
  } from "vue"

  uniInstance(uni);

  import userStore from "@/stores/users/index.js"

  const store = userStore()

  // onLoad(async () => {
  //   const res = await userInfo({
  //     method: "GET",
  //     url: "http://www.baidu.com"
  //   }, false)
  //   console.log(res, 12);
  // })

  let files = reactive([])

  const chooseFile = () => {
    // uni.chooseImage({
    //   count: 9,
    //   type: "all",
    //   success(res) {
    //     console.log(res);
    //   }
    // })
    uni.chooseMessageFile({
      count: 9,
      type: "all",
      success(res) {
        console.log(res.tempFiles[0]);
        uni.uploadFile({
          url: "http://82.157.48.184:8080/user/url",
          name: res.tempFiles[0].name,
          filePath: res.tempFiles[0].path,
          // header: {
          //   "Content-Type": "multipart/form-data"
          // },
          success(res1) {
            console.log(res1);
          }
        })
      }
    })
  }
</script>

<style lang="scss" scoped>
</style>

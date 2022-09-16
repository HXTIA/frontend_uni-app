<template>
  <TodoComponents v-for="item in 10" :key="item" title="数据库概论 第一次作业 - 456班"></TodoComponents>
</template>
<script setup>
  import TodoComponents from "@/components/TodoComponents/index.vue"
  import {
    requestTodo
  } from "./api/index.js"
  import {
    onLoad
  } from "@dcloudio/uni-app"
  onLoad(async (ops) => {
    // await requestTodo(uni, {
    //   url: "http://www.baidu.com",
    //   method: "get",
    //   data: {
    //     name: "SG"
    //   }
    // }, false)
  })
</script>
<style lang="scss" scoped>

</style>

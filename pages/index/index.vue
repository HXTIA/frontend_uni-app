<template>
  <view class="indexPage-wrapper">
    {{ title }}
    {{ time }}
    <navigator url="/pages/detail/index?name=闫德强&age=21">1221</navigator>
  </view>
</template>

<script setup>
  import {
    reactive,
    watch,
  } from "vue"
  import userStore from "../../stores/users/index.js"
  import {
    watchStore
  } from "../../utils/pinia/subscribe.js"

  import {
    timeFormat
  } from "@/utils/format/time.js"

  const store = userStore();

  const res = watchStore(store, "name", () => {
    console.log("变化了");
  })

  let time = timeFormat(new Date(), {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    weekday: "long",
    month: "long",
    day: "numeric"
  })





  setTimeout(() => {
    store.setName("SG")
  }, 2000)

  let title = reactive({
    name: "闫德强",
    age: 21
  })
</script>

<style lang="scss" scoped>
  .indexPage-wrapper {}
</style>

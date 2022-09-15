<template>
  <view class="indexPage-wrapper">
    {{ title }}
    {{ time }}
    <navigator url="/pages/detail/index?name=闫德强&age=21">
      <view class="main-icon t-icon t-icon-a-29shouye1"></view>1221
    </navigator>
	<MyWorkicon></MyWorkicon>
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
  
  import MyWorkicon from "../../components/MyWorkicon/index.vue"

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






  let title = reactive({
    name: "闫德强",
    age: 21
  })
</script>

<style lang="scss" scoped>
  .indexPage-wrapper {}

  .t-icon {
    width: 30px;
    height: 30px;
  }

  .main-icon {
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
  }
</style>

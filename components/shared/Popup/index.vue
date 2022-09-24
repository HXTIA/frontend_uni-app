<template>
  <fui-bottom-popup :show="show" @close="closePopup">
    <view class="fui-custom__wrap">
      <image src="../../../static/SUGGEST_bgIMAGE.webp" mode="widthFix"></image>
      {{ content }}
    </view>
  </fui-bottom-popup>
</template>

<script setup>
  import {
    ref,
    defineProps
  } from "vue"
  import {
    setStorage
  } from "@/utils/shared/handleStatus.js"

  let show = ref(true)

  const props = defineProps({
    content: {
      type: String,
      default: ""
    },
    flag: {
      type: String,
      default: ""
    }
  })

  setStorage(uni, props.flag, true);

  const showPopup = (type) => {
    show.value = true;
    console.log(type);
  }
  const closePopup = (type) => {
    show.value = false
  }
</script>

<style lang="scss" scoped>
  .fui-custom__wrap {
    width: 100%;
    height: 520rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

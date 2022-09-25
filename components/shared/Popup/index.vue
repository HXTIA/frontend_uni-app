<template>
  <fui-top-popup :show="show" @close="closePopup">
    <view class="fui-custom__wrap">
      <image :src="data.img" mode="widthFix" v-if="data.img"></image>
      <view class="content" v-if="data.content">
        {{ data.content }}
      </view>
    </view>
  </fui-top-popup>
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
    data: {
      type: Object,
      default: {}
    },
    flag: {
      type: String,
      default: ""
    }
  })

  setStorage(uni, props.flag, true);

  const showPopup = (type) => {
    show.value = true;
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

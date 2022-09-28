<template>
  <view class="header-wrapper">
    <view class="header-wrapper-main">
      <form class="header-wrapper-main-form">
        <view class="sousuo t-icon t-icon-sousuo"></view>
        <input class="input" placeholder="请输入..." v-model="str" type="text" @confirm="search">
      </form>
    </view>
    <uni-notice-bar class="header-wrapper-notice" backgroundColor="transparent" show-close show-icon scrollable
      :speed="50" text="科技创新魔法协会, 科技创新魔法协会, 科技创新魔法协会!!!" />
  </view>
</template>

<script setup>
  import {
    ref,
    watch
  } from "vue"

  import dataStore from '@/stores/data/index.js'
  const store = dataStore();

  // 先缓存下全部的信息
  let cacheData;

  // 搜索的字符串
  let str = ref('');

  // 搜索字符串为空的时候缓存原数据
  watch(str, () => {
    if (!str.value.length) {
      store.clearData();
      store.setData(cacheData);
    }
  })

  let count = 0
  watch(store.getData, () => {
    if (count++ < 1) {
      cacheData = JSON.parse(JSON.stringify(store.getData));
    }
  })

  const search = async () => {
    const reg = new RegExp(str.value);
    const filters = cacheData.filter((value) => reg.test(value.title));
    store.clearData();
    store.setData(filters);
  }
</script>

<style lang="scss" scoped>
  .header-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    width: 100%;
    height: 90rpx;
    // background-color:#bababa;
    background-color: #ececec;
    border-top: 1px solid #535353;

    &-main {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 5px;
      // margin: 5px 0px;
      // box-shadow: 0px 5px 5px #bababa;


      &-form {
        --timing: 0.3s;
        --width-of-input: 700rpx;
        --height-of-input: 70rpx;
        --border-height: 2rpx;
        --input-bg: #fff;
        --border-color: #2f2ee9;
        --border-radius: 50rpx;
        --after-border-radius: 5rpx;
        position: relative;
        width: var(--width-of-input);
        height: var(--height-of-input);
        display: flex;
        align-items: center;
        border-radius: var(--border-radius);
        transition: border-radius 0.5s ease;
        background: var(--input-bg, #fff);

        .sousuo {
          position: absolute;
          right: 20rpx;
          top: 12rpx;
          width: 30rpx;
          height: 30rpx;
          margin-top: 3px;
        }

        .input {
          font-size: 12px;
          background-color: transparent;
          width: var(--width-of-input);
          height: 100%;
          padding-left: 10px;
          border: none;
          // &:focus-within {
          // 	outline: none;
          // 	border-color: rgba(234,76,137,0.4);
          // 	background-color: #fff;
          // 	box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
          // }
        }

        &:before {
          content: "";
          position: absolute;
          background: var(--border-color);
          transform: scaleX(0);
          transform-origin: center;
          width: 100%;
          height: var(--border-height);
          left: 0;
          bottom: 0;
          border-radius: 1px;
          transition: transform var(--timing) ease;
        }

        &:hover {
          border-radius: var(--after-border-radius);

          &:before {
            transform: scale(1);
          }
        }

      }
    }

    &-notice {
      width: 60%;
    }

  }
</style>

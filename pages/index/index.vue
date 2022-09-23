<template>
  <view class="indexPage-wrapper">
    <view class="indexPage-wrapper-header">
      <IndexHeaderCom></IndexHeaderCom>
    </view>
    <view class="indexPage-wrapper-scroller">
      <!-- 主体 -->
      <IndexWorkItemCom v-for="(item,index) in data" :key="index" :data="item" :dropDownOptions="dropDownOptions">
      </IndexWorkItemCom>
      <!-- 缺省页 -->
      <fui-empty isFixed src="/static/indexPage/empty.png" title="资源请求中..." descr="请耐心等待" v-if="!data.length">
      </fui-empty>
    </view>
    <!-- 没有更多了 -->
    <fui-divider text="没有更多了" backgroundColor="#e0e0e0" color="#000000" height="50"></fui-divider>
  </view>
</template>

<script setup>
  import IndexHeaderCom from "@/components/IndexComponents/Header.vue"
  import IndexWorkItemCom from "@/components/IndexComponents/WorkItem.vue"

  import mod from "./module.js"
  const {
    dropDownOptions,
    reactive,
    requestData,
    onLoad,
  } = mod

  let data = reactive([]);
  onLoad(async (ops) => {
    // 做法： 不合理: 还未登录 -> 那么没有token -> 请求一定失败 
    // 如果是onLoad那么一定会只加载一次 -> 解决方法： 登陆后重定向到首页
    const res = await requestData(uni);
    data.push(...res);
  })
</script>

<style lang="scss" scoped>
  .indexPage-wrapper {
    width: 100vw;
    height: auto;
    background-color: #e0e0e0;

    &-header {
      position: fixed;
      z-index: 1000;
      width: 100%;
      height: 7%;
    }

    &-scroller {
      padding-top: 90rpx;
      display: flex;
      flex-direction: column;
    }
  }
</style>

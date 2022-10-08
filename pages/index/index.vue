<template>
  <view class="indexPage-wrapper">
    <view class="indexPage-wrapper-header">
      <IndexHeaderCom></IndexHeaderCom>
    </view>
    <view class="indexPage-wrapper-scroller">
      <!-- 主体 -->
      <IndexWorkItemCom v-for="item in data" :key="item.id" :data="item" :dropDownOptions="dropDownOptions">
      </IndexWorkItemCom>
      <!-- 缺省页 -->
      <fui-empty isFixed :src="`/static/indexPage/${icon.icon}`" :title="icon.title" :descr="icon.desc"
        v-if="!data.length">
      </fui-empty>
    </view>
    <!-- 没有更多了 -->
    <!-- <fui-divider text="没有更多了" backgroundColor="#e0e0e0" color="#000000" height="50" v-if="data.length"></fui-divider> -->
  </view>
</template>

<script setup>
  import IndexHeaderCom from "@/components/IndexComponents/Header.vue"
  import IndexWorkItemCom from "@/components/IndexComponents/WorkItem.vue"

  import mod from "./module.js"
  const {
    dropDownOptions,
    reactive,
    computed,
    requestData,
    onLoad,
    onShow,
    getStorage,
    handleInit,
    watchStore,
    store
  } = mod

  const emptyIcon = {
    request: "request.png",
    empty: "empty.png"
  }

  let icon = reactive({
    icon: emptyIcon.request,
    title: "资源请求中...",
    desc: "请耐心等待"
  })

  // 不做监听做计算属性
  let data = computed(() => {
    return store.getData
  })

  onShow(async (ops) => {
    // 数据如果已经存在 -> 意味着已经登陆 && 组织存在 && 引导页观看完毕
    const isExist = store.getData.length;
    if (isExist) return;

    // 处理初始化工作 -> 欢迎页 / 是否有组织
    const initRes = handleInit(uni);

    if (!initRes) return;
    const res = await requestData(uni);
    if (!res.length) {
      // 没数据 -> 同时改变缺省页
      icon.icon = emptyIcon.empty;
      icon.title = "没有更多数据啦!";
      icon.desc = "暂时没有作业或者检查组织信息是否正确";
    }
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

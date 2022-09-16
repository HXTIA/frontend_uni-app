<template>
  <uni-swipe-action>
    <uni-swipe-action-item :right-options="todoSlideBlockRightOptions">
      <view class="workItem-wrapper" :class="[data.grade]" @click="detail(data.id)">
        <view>{{ data.time }}</view>
        <view>{{ data.title }}</view>
        <view>{{ data.desc }}</view>
        <view>{{ data.grade }}</view>
        <view>
          <view v-for="item in data.tag" :key="item">
            {{ item }}
          </view>
        </view>
        <view>{{ data.ddl }}</view>
      </view>
    </uni-swipe-action-item>
  </uni-swipe-action>
</template>

<script setup>
  import router from "@/router/index.js"
  import {
    defineProps
  } from "vue"
  import {
    todoSlideBlockRightOptions,
    enumSlideBlockOptionsEnum
  } from "@/data/options.js"

  const props = defineProps({
    data: {
      type: Object,
      default: {
        id: 1,
        time: "2022-09-05 13:34:22",
        title: "数据库概论",
        desc: "这是一段简短的描述",
        tag: ["作业二"],
        ddl: "2022-09-06 13:34:22",
        grade: "danger"
      }
    }
  })

  const detail = (id) => {
    router(uni, {
      url: "detail",
      params: {
        id,
      },
    })
  }
</script>

<style lang="scss" scoped>
  .workItem-wrapper {
    box-sizing: border-box;
    // width: 95%;
    height: 300rpx;
    padding: 16rpx 20rpx;
    border-radius: 30rpx;
    background-color: skyblue;
    margin-bottom: 10rpx;
  }

  .danger {
    background-color: red;
  }

  .normal {
    background-color: #ffe1f9;
  }
</style>

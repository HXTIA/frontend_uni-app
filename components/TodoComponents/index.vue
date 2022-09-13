<template>
  <uni-swipe-action>
    <uni-swipe-action-item autoClose :right-options="todoSlideBlockRightOptions" @click="onClick" @change="change">
      <view>
        <h3 class="title">{{ title }}</h3>
      </view>
    </uni-swipe-action-item>
    <!-- 使用插槽 （请自行给定插槽内容宽度）-->
    <!-- <uni-swipe-action-item>
      <template v-slot:left>
        <view><text>置顶</text></view>
      </template>
      <view>
        <text>使用插槽</text>
      </view>
      <template v-slot:right>
        <view><text>删除</text></view>
      </template>
    </uni-swipe-action-item> -->
    <!-- 混合用法 -->
    <!-- <uni-swipe-action-item :right-options="options">
      <template v-slot:left>
        <view><text>置顶</text></view>
      </template>
      <view><text>混合使用</text></view>
    </uni-swipe-action-item> -->
  </uni-swipe-action>
</template>

<script setup>
  import {
    todoSlideBlockRightOptions,
    enumSlideBlockOptionsEnum
  } from "@/data/options.js"

  import {
    defineProps
  } from "vue"

  defineProps({
    title: {
      type: String,
      default: "代办事情"
    }
  })

  // 按钮点击事件
  const onClick = (e) => {
    const {
      content,
      index
    } = e;
    switch (content.text) {
      case enumSlideBlockOptionsEnum.FIRST_BUTTON: {
        console.log("点击了" + enumSlideBlockOptionsEnum.FIRST_BUTTON);
        break;
      }
      case enumSlideBlockOptionsEnum.SECOND_BUTTON: {
        console.log("点击了" + enumSlideBlockOptionsEnum.SECOND_BUTTON);
        break;
      }
    }
  }

  // 滑动滑块事件
  const change = (e) => {}
</script>

<style lang="scss" scoped>
  .title {
    padding: .8em;
    font-size: 1.2em;
    font-weight: 700;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>

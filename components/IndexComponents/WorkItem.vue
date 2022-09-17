<template>
  <uni-swipe-action>
    <uni-swipe-action-item :left-options="todoSlideBlockRightOptions" @click="clickSlide">
      <view class="workItem-wrapper" :class="[data.grade]" @click="detail(data.id)">
        <fui-row margin-bottom="24rpx">
          <fui-col :span="1">
            <view class="workItem-wrapper-left"></view>
          </fui-col>
          <fui-col :span="23">
            <view class="workItem-wrapper-top">
              <MyTag v-for="item in data.tag" :key="item" :title="item"></MyTag>
              <fui-icon name="more-fill" class="workItem-wrapper-top-icon"></fui-icon>
            </view>
            <view class="workItem-wrapper-right">
              <view class="title">
                <h1>{{ data.title }}</h1>
              </view>
              <view class="desc">{{ data.desc }}</view>
              <view class="date">
                <view class="date-icon t-icon t-icon-dingshi"></view>
                <view class="data-ddl">截止日期:{{ data.ddl }}</view>
              </view>

              <img src="https://s1.ax1x.com/2022/09/17/xpSLyd.png" alt="截止" class="image">
            </view>

          </fui-col>
        </fui-row>
      </view>
    </uni-swipe-action-item>
  </uni-swipe-action>
</template>

<script setup>
  import router from "@/router/index.js"
  import MyTag from "@/components/shared/MyTag/index.vue"
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
        time: "2022-09-05 13:34",
        title: "数据库概论-456班",
        desc: "这是一段简短的描述，这是一段简短的描述",
        tag: ["作业二"],
        ddl: "2022-09-06 13:34",
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

  const clickSlide = (e) => {
    const {
      content
    } = e;
    if (content.text === enumSlideBlockOptionsEnum.FIRST_BUTTON) {
      console.log("点击了完成");
      // TODO: 完成逻辑实现
    }
  }
</script>

<style lang="scss" scoped>
  .workItem-wrapper {
    box-sizing: border-box;
    // width: 95%;
    height: 320rpx;
    // padding: 6px;
    border-radius: 0px 10px 10px 0px;
    background-color: whitesmoke;
    border-bottom: 2px dashed gainsboro;
    // box-shadow:  6px 6px 12px 12px #1e1e1e;
    box-shadow: 0px 0px 15px #1e1e1e;
    margin: 0px 3px 0px 0px;

    &-left {
      background-color: seagreen;
      width: 5px;
      height: 320rpx;
    }

    &-right {
      margin: 0px 5px;

      .title {
        height: 70rpx;
        font-size: 50rpx;
        font-weight: bold;
        margin: 8px 0px;
        overflow: hidden;
        // text-overflow: ellipsis;
        // white-space: nowrap;
      }

      .desc {
        color: gray;
        font-size: 30rpx;
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .image {
        position: absolute;
        top: 75px;
        right: -10px;
        width: 100px;
        height: 100px;
      }

      .date {
        display: flex;
        justify-content: left;
        align-items: center;
        margin-top: 5px;

        .date-icon {
          width: 25px;
          height: 25px;
        }

        .data-ddl {
          color: darkblue;
          font-weight: bold;
          font-size: 30rpx;
        }

      }
    }

    &-top {
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-icon {
        padding-right: 10px;
      }
    }
  }

  // .danger {
  //   background-color: red;
  // }

  // .normal {
  //   background-color: #ffe1f9;
  // }
</style>

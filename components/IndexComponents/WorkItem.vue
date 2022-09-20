<template>
  <uni-swipe-action>
    <uni-swipe-action-item :left-options="todoSlideBlockRightOptions" @click="clickSlide"
      @change="swipeChange($event, data.id)">
      <view class="workItem-wrapper" :class="[data.grade]">
        <fui-row margin-bottom="24rpx">
          <fui-col :span="1">
            <view class="workItem-wrapper-left"></view>
          </fui-col>
          <fui-col :span="23">
            <view class="workItem-wrapper-top">
              <MyBadge v-for="item in data.tag" :key="item" :txt="item" isread="true"></MyBadge>
              <view class="workItem-wrapper-top-dropdown">
                <DropDownCom :data="dropDownOptions" :id="data.id">
                  <fui-icon name="more-fill" class="workItem-wrapper-top-icon"></fui-icon>
                </DropDownCom>
              </view>
            </view>
            <view class="workItem-wrapper-right" @click="detail(data.id)">
              <view class="title">
                <h1>{{ data.title }}</h1>
              </view>
              <view class="desc">{{ data.desc }}</view>
              <MyDate :ddl="data.ddl"></MyDate>
              <!-- https://s1.ax1x.com/2022/09/17/xpMRZ6.png -->
              <!-- https://s1.ax1x.com/2022/09/17/xpSLyd.png -->
              <img src="https://s1.ax1x.com/2022/09/17/xpMRZ6.png" alt="截止" class="image">
            </view>
          </fui-col>
        </fui-row>
      </view>
    </uni-swipe-action-item>
  </uni-swipe-action>
</template>

<script setup>
  import MyDate from "@/components/shared/MyDate/index.vue"
  import MyBadge from "@/components/shared/MyBadge/index.vue"
  import DropDownCom from "@/components/shared/DropDown/index.vue"
  import mod from "./module.js"

  const {
    router,
    defineProps,
    ref,
    provide,
    todoSlideBlockRightOptions,
    enumSlideBlockOptionsEnum,
    checkSubscribe,
    onHide
  } = mod

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
    },
    dropDownOptions: {
      type: Array,
      default: []
    }
  })


  const detail = (id) => {
    // 如果已经设置订阅就进行发起请求
    checkSubscribe(uni)
    // 跳转路由
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

  const swipeChange = (e, index) => {
    console.log('当前状态：' + e + '，下标：' + index)
  }

  // 控制三个点的开闭
  let flag = ref(false);
  provide("flag", flag)

  // 处理三个点闭合的善后
  onHide(() => {
    if (flag.value) {
      flag.value = false
    }
  })
</script>

<style lang="scss" scoped>
  .workItem-wrapper {
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    // width: 95%;
    height: 300rpx;
    // padding: 6px;
    border-radius: 0px 10px 10px 0px;
    background-color: whitesmoke;
    border-bottom: 2px dashed gainsboro;
    // box-shadow:  6px 6px 12px 12px #1e1e1e;
    box-shadow: 0px 0px 15px #1e1e1e;
    margin: 0px 4px 0px 0px;

    &-left {
      background-color: seagreen;
      width: 6px;
      height: 300rpx;
    }

    &-right {
      margin: 0px 15px;

      .title {
        height: 60rpx;
        font-size: 43rpx;
        font-weight: bold;
        margin: 5px 0px;
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
        // top: 75px;
        // right: -10px;
        top: 150rpx;
        right: -40rpx;
        width: 100px;
        height: 100px;

      }

    }

    &-top {
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &-dropdown {
        position: absolute;
        z-index: 100;
        width: 100px;
        right: 10rpx;
      }
    }
  }
</style>

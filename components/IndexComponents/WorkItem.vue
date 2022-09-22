<template>
  <uni-swipe-action>
    <uni-swipe-action-item :left-options="todoSlideBlockRightOptions" @click="clickSlide" @change="changeSlide"
      :show="isOpened">
      <view class="workItem-wrapper" :class="[data.grade]" @touchstart="touchStart" @touchend="touchEnd">
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
              <img src="../../static/indexPage/done.png" alt="" class="image" v-show="isDone">
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
    onHide,
    onLoad
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
  
  //自带分享功能
  onLoad(() => {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ["shareAppMessage", "shareTimeline"],
    })
  })

  const onshareAppMessage = (res) => {
    if (res.from == "butten") {
      console.log(res.target);
    }
    return {
      title: "title"
    }
  }

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


  //已完成点击事件
  //二次滑动已完成事件
  let isDone = ref(false);
  let isOpened = ref("none");
  let startPosition = 0;
  let endPosition = 0;
  let changeStatus = false;
  const clickSlide = (e) => {
    const {
      content
    } = e;
    if (content.text === enumSlideBlockOptionsEnum.FIRST_BUTTON) {
      // console.log("点击了完成");
      // TODO: 完成逻辑实现
      isDone.value = true;

    }
  }
  const changeSlide = (e) => {
    isOpened.value = e;
    // TODO: 完成逻辑实现
    changeStatus = !changeStatus;
    // console.log("滑动完成");
  }
  const touchStart = (e) => {

    if (changeStatus) {
      // console.log("点击开始");
      startPosition = e.changedTouches[0].clientX;
    }
  }
  const touchEnd = (e) => {
    endPosition = e.changedTouches[0].clientX;

    if (changeStatus) {
      //移动距离超过100判定为二次滑动 -> 已完成
      if (Math.abs(endPosition - startPosition) > 100) {
        //判断为右滑
        if (endPosition - startPosition > 0) {
          const event = {
            content: todoSlideBlockRightOptions[0],
            index: 0,
            position: "none",
          };
          clickSlide(event);
          // console.log("结束", endPosition - startPosition);
          isOpened.value = "none";
        }
        return;
      } else {
        return;
      }
      return;
    }

    // console.log("点击结束");
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
        margin: 8px 0px 5px 0px;
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

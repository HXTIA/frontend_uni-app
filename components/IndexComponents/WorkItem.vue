<template>
  <uni-swipe-action>
    <uni-swipe-action-item :left-options="todoSlideBlockRightOptions" @click="clickSlide" @change="changeSlide"
      :show="isOpened" :disabled="isOK">
      <view class="workItem-wrapper" :class="{isTips:data.isTips}" @touchstart="touchStart" @touchend="touchEnd">
        <fui-row margin-bottom="24rpx">
          <fui-col :span="1">
            <view class="workItem-wrapper-left"></view>
          </fui-col>
          <fui-col :span="23">
            <view class="workItem-wrapper-top">
              <MyBadge v-for="item in data.tag" :key="item" :txt="item" :isread="Boolean(data.flag)"></MyBadge>
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
              <MyDate :ddl="data.ddl" :isDone="isOK"></MyDate>
              <fui-animation :animationType="['zoom-out']" :show="isDone" :styles="{position: 'absoluted'}">
                <img :src="image" class="image" />
              </fui-animation>
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
    computed,
    todoSlideBlockRightOptions,
    enumSlideBlockOptionsEnum,
    checkSubscribe,
    onHide,
    onLoad,
    timeFormat,
    dataStore
  } = mod
  const store = dataStore();

  const props = defineProps({
    data: {
      type: Object,
      default: {}
    },
    dropDownOptions: {
      type: Array,
      default: []
    }
  })

  // 深拷贝处理props传值
  let option = props.dropDownOptions.map((value) => Object.assign({}, value))

  // 未完成不应该有取消已完成的功能 -> 计算属性处理
  let dropDownOptions = computed(() => {
    // 根据副作用 -> 每次依赖的数据flag变化会自动更新(图标)
    image.value = handleFlag();
    let res = option.filter((value) => value)

    // 切换图标
    if (props.data.flag !== 2) {
      // 如果状态不是完成那么不应该存在取消已完成功能
      res = option.filter((value) => value.index !== 1)
    }
    // 切换文字
    res[0].title = props.data.isTips ? '取消已置顶' : '置顶'

    return res;
  })

  // 图片切换 0: -> 未读未完成 1: -> 已读未完成 2: -> 已读已完成
  const BASEPATH = "../../static/indexPage/";
  const ICON_LIST = ["ddl.png", "done.png"];

  // 根据flag内容动态渲染是否已完成的图标
  // 需要考虑的东西：-> 如果是ddl那么显示图标，否则即为未完成不显示，已完成是默认显示的
  let image = ref();

  function handleFlag() {
    // 发布时间和ddl
    const time = props.data.time;
    const ddl = props.data.ddl;
    const residue = ddl - time;
    const advance = 8 * 60 * 60 * 1000;
    // 如果是ddl且未完成的情况下 赋予ddl
    // 如果是ddl但是已完成给予已完成
    if (props.data.flag == 2) {
      isDone.value = true;
      isOK.value = true;
      return BASEPATH + ICON_LIST[1];
    }

    // ddl赋给ddl
    if (residue <= advance) {
      switch (props.data.flag) {
        case 0:
        case 1:
          isDone.value = true;
          isOK.value = false;
          return BASEPATH + ICON_LIST[0];
      }
    } else {
      // 非ddl -> 就让可滑动就行
      isOK.value = false;
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

  const clickSlide = (e) => {
    const {
      content
    } = e;
    if (content.text === enumSlideBlockOptionsEnum.FIRST_BUTTON) {
      // TODO: 完成逻辑实现
      isDone.value = false;
      // 定时器让动画显现: 缓兵之计
      setTimeout(() => {
        props.data.flag = 2;
        isDone.value = true;
        isOK.value = true;
      }, 500)
    }
  }

  //已完成点击事件
  //二次滑动已完成事件
  let isOK = ref(false); //是否已完成
  let isDone = ref(false); //是否显示印章
  let isOpened = ref("none"); //滑动动画
  let startPosition = 0;
  let endPosition = 0;
  let changeStatus = false;
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
	// font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    // width: 95%;
    height: 300rpx;
    // padding: 6px;
    border-radius: 0px 10px 10px 0px;
    background-color: #fdfdfd;
    border-bottom: 2px dashed gainsboro;
    // box-shadow:  6px 6px 12px 12px #1e1e1e;
    box-shadow: 0px 0px 15px #484848;
    margin: 0px 4px 0px 0px;

    &-left {
      background-color: seagreen;
      width: 6px;
      height: 300rpx;
    }

    &-right {
      margin: 0px 15px;

      .title {
        height: 55rpx;
        font-size: 40rpx;
        font-weight: bold;
        margin: 8px 0px 5px 0px;
        overflow: hidden;
        // text-overflow: ellipsis;
        // white-space: nowrap;
      }

      .desc {
        color: gray;
        font-size: 28rpx;
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .image {
        position: absolute;
        bottom: -50rpx;
        right: 30rpx;
        width: 200rpx;
        height: 200rpx;
        // top: 150rpx;
        // right: -20rpx;
        transform: translate(40%, 40%);

        // bottom: 0;
        // right: 0;
        // width: 100px;
        // height: 100px;
        // transform: translate(40%, 40%);
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

  .isTips {
    background-color: #cccccc;
  }
</style>

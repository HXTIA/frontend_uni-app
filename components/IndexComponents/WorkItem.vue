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

  // ???????????????props??????
  let option = props.dropDownOptions.map((value) => Object.assign({}, value))

  // ????????????????????????????????????????????? -> ??????????????????
  let dropDownOptions = computed(() => {
    // ??????????????? -> ?????????????????????flag?????????????????????(??????)
    image.value = handleFlag();
    let res = option.filter((value) => value)

    // ????????????
    if (props.data.flag !== 2) {
      // ??????????????????????????????????????????????????????????????????
      res = option.filter((value) => value.index !== 1)
    }
    // ????????????
    res[0].title = props.data.isTips ? '???????????????' : '??????'
    return res;
  })

  // ???????????? 0: -> ??????????????? 1: -> ??????????????? 2: -> ???????????????
  const BASEPATH = "../../static/indexPage/";
  const ICON_LIST = ["ddl.png", "done.png"];

  // ??????flag??????????????????????????????????????????
  // ????????????????????????-> ?????????ddl?????????????????????????????????????????????????????????????????????????????????
  let image = ref();

  function handleFlag() {
    // ???????????????ddl
    const time = props.data.time;
    const ddl = props.data.ddl;
    const residue = ddl - time;
    const advance = 8 * 60 * 60 * 1000;
    // ?????????ddl???????????????????????? ??????ddl
    // ?????????ddl??????????????????????????????
    if (props.data.flag == 2) {
      isDone.value = true;
      isOK.value = true;
      return BASEPATH + ICON_LIST[1];
    }

    // ddl??????ddl
    if (residue <= advance) {
      switch (props.data.flag) {
        case 0:
        case 1:
          isDone.value = true;
          isOK.value = false;
          return BASEPATH + ICON_LIST[0];
      }
    } else {
      // ???ddl -> ?????????????????????
      isOK.value = false;
    }
  }

  const detail = (id) => {
    // ????????????
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
      // TODO: ??????????????????
      isDone.value = false;
      // ????????????????????????: ????????????
      setTimeout(() => {
        props.data.flag = 2;
        isDone.value = true;
        isOK.value = true;
      }, 500)
    }
  }

  //?????????????????????
  //???????????????????????????
  let isOK = ref(false); //???????????????
  let isDone = ref(false); //??????????????????
  let isOpened = ref("none"); //????????????
  let startPosition = 0;
  let endPosition = 0;
  let changeStatus = false;
  const changeSlide = (e) => {
    isOpened.value = e;
    // TODO: ??????????????????
    changeStatus = !changeStatus;
    // console.log("????????????");
  }
  const touchStart = (e) => {

    if (changeStatus) {
      // console.log("????????????");
      startPosition = e.changedTouches[0].clientX;
    }
  }
  const touchEnd = (e) => {
    endPosition = e.changedTouches[0].clientX;

    if (changeStatus) {
      //??????????????????100????????????????????? -> ?????????
      if (Math.abs(endPosition - startPosition) > 100) {
        //???????????????
        if (endPosition - startPosition > 0) {
          const event = {
            content: todoSlideBlockRightOptions[0],
            index: 0,
            position: "none",
          };
          clickSlide(event);
          // console.log("??????", endPosition - startPosition);
          isOpened.value = "none";
        }
        return;
      } else {
        return;
      }
      return;
    }
  }

  // ????????????????????????
  let flag = ref(false);
  provide("flag", flag);

  // ??????????????????????????????
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
    height: 300rpx;
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
        transform: translate(40%, 40%);
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

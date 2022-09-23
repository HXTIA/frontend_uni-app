<template>
  <view class="suggestPages-wrapper" :style="bgImage">
    <view class="suggestPages-wrapper-mainArea">
      <view class="suggestPages-wrapper-mainArea-header">意见反馈</view>
      <view class="suggestPages-wrapper-mainArea-suggest">
        <span class="suggestPages-wrapper-mainArea-suggest-border"></span>
        <textarea maxlength="200" v-model="suggest" class="suggestPages-wrapper-mainArea-suggest-textarea"
          placeholder="请输入对我们的建议....."></textarea>
        <span class="suggestPages-wrapper-mainArea-suggest-border"></span>
        <view class="suggestPages-wrapper-mainArea-suggest-image">
          <uploaderComponents title="截图" :count="3" @upload-image="uploadImage"></uploaderComponents>
        </view>
        <span class="suggestPages-wrapper-mainArea-suggest-border"></span>
        <view class="suggestPages-wrapper-mainArea-suggest-connect">
          <span>联系方式：</span>
          <span><input type="text" v-model="connectWay" placeholder="邮箱/手机号"></span>
        </view>
        <span class="suggestPages-wrapper-mainArea-suggest-border"></span>
      </view>
    </view>
    <view class="suggestPages-wrapper-checkbox">
      <fui-checkbox-group>
        <view class="fui-list__item">
          <fui-label>
            <view class="fui-align__center">
              <fui-checkbox value="1" checked></fui-checkbox>
              <text class="suggestPages-wrapper-checkbox-desc">允许开发者在48小时内通过消息联系我</text>
            </view>
          </fui-label>
        </view>
      </fui-checkbox-group>
    </view>
    <view class="suggestPages-wrapper-button">
      <fui-button text="提交" width="200rpx" @click="submit"></fui-button>
    </view>
  </view>
</template>

<script setup>
  import uploaderComponents from "@/components/shared/Uploader/index.vue"
  import mod from "./module.js"
  const {
    submitMsg,
    uploadFile,
    ref,
    reactive,
    preloadImageList
  } = mod;

  // 引入图片
  let bgImage = reactive({
    backgroundImage: `url(${preloadImageList.get("SUGGEST_BGIMAGE")})`
  })

  // 提交输入的内容
  let suggest = ref("");
  let connectWay = ref();
  let isChecked = ref(true)

  let imageList = [];
  const uploadImage = (url) => {
    imageList.push(...url);
  }

  // 处理提交任务
  const submit = async () => {
    // 处理未填数值的内容
    if (suggest.value == "" || connectWay.value == "") {
      return;
    }
    const urls = uploadFile(uni, imageList);
    const options = {
      url: "",
      method: "POST",
      data: {
        urls,
        suggest: suggest.value,
        connectWay: connectWay.value,
        flag: isChecked.value
      }
    }
    const res = await submitMsg(uni, options, true);
  }
</script>
<style lang="scss" scoped>
  .suggestPages-wrapper {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20rpx;
    width: 100vw;
    height: 100vh;
    background-size: cover;

    &-mainArea {
      display: flex;
      width: 100%;
      height: auto;
      flex-direction: column;
      align-items: center;

      &-header {
        font-size: 40rpx;
        font-weight: 600;
        color: white;
        margin-bottom: 80rpx;
      }


      &-suggest {
        width: 80%;
        height: auto;
        padding: 40rpx 20rpx;
        border-radius: 5%;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0 0 5rpx #303030;

        &-textarea {
          width: 100%;
          outline: none;
          resize: none;
          font-size: 30rpx;
        }

        &-border {
          display: block;
          width: 100%;
          height: 1px;
          margin-top: 10rpx;
          margin-bottom: 20rpx;
          background-color: #a8aca3;
        }

        &-connect {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-bottom: 30rpx;
        }
      }
    }

    &-checkbox {
      display: flex;
      align-items: center;
      margin-top: 16rpx;

      &-desc {
        color: #fff;
        font-size: 26rpx;
      }
    }

    &-button {
      margin-top: 20rpx;
    }
  }
</style>

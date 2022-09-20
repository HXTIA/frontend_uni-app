<template>
  <view class="suggestPages-wrapper">
    <view class="suggestPages-wrapper-header">
      意见反馈
    </view>
    <view class="suggestPages-wrapper-suggest">
      <span class="suggestPages-wrapper-suggest-border"></span>
      <textarea maxlength="200" class="suggestPages-wrapper-suggest-textarea" placeholder="请输入对我们的建议....."></textarea>
      <view class="suggestPages-wrapper-suggest-image">
        <uploaderComponents title="截图" count="3" @upload-image="uploadImage"></uploaderComponents>
      </view>
      <button @click="click">发起接口</button>
    </view>
  </view>
</template>

<script setup>
  import uploaderComponents from "@/components/shared/uploaderComponents/index.vue"

  let imageList = [];

  const uploadImage = (url) => {
    // imageList.push(url);
    console.log("触发了");
  }
  const click = () => {
    uni.requestSubscribeMessage({
      tmplIds: ["V8JzyKTZZ16srBpi1QQMMUDCLMYzutIVvWGy8irgxiM"],
      success(ops) {
        console.log(ops)
      },
      fail(ops) {
        console.log(ops);
      }
    })
  }
</script>
<style lang="scss" scoped>
  .suggestPages-wrapper {
    box-sizing: border-box;
    display: flex;
    padding: 20rpx;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    // background: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1510%2F20%2Fc4%2F14177260_1445297071493.jpg&refer=http%3A%2F%2Fimg.pconline.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666004146&t=9e75f5957372f9d96395aa9e82d74921") no-repeat;
    background-size: cover;

    &-header {
      font-size: 40rpx;
      font-weight: 600;
      color: white;
      margin-bottom: 80rpx;
    }


    &-suggest {
      width: 80%;
      height: 45%;
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
    }
  }
</style>

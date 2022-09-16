<template>
  <view class="header-wrapper">
    <view class="header-wrapper-main">
      <fui-input label="标题文字" backgroundColor="#eaebf0" clearable isFillet :bottomLeft="0" placeholder="请输入文本内容">
      </fui-input>
    </view>
  </view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .header-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    border-top: 1px solid #535353;

    &-main {
      width: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>

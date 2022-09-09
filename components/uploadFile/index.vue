<template>
  <view class="container">
    <!-- <uni-section title="只选择图片" type="line">
      <view class="example-body">
        <uni-file-picker limit="9" title="最多选择9张图片"></uni-file-picker>
      </view>
    </uni-section>
    <uni-section title="只选择视频" type="line">
      <view class="example-body">
        <uni-file-picker limit="9" file-mediatype="video" title="最多选择9个视频"></uni-file-picker>
      </view>
    </uni-section> -->
    <uni-section :title="header" type="line">
      <view class="example-body custom-image-box">
        <text class="text">{{title}}</text>
        <uni-file-picker ref="uploadFile" :value="value" :limit="limit" :del-icon="del" :imageStyles="imageStyles"
          :file-mediatype="type" @progress="progress" @success="success" @fail="fail" @select="select">
          选择</uni-file-picker>
      </view>
    </uni-section>
  </view>
</template>

<script setup>
  import {
    defineProps
  } from "vue"
  defineProps({
    limit: {
      type: Number,
      default: 9
    },
    type: {
      type: String,
      default: "image"
    },
    header: {
      type: String,
      default: "文件上传"
    },
    title: {
      type: String,
      default: "我是标题"
    },
    del: {
      type: Boolean,
      default: true
    },
    imageStyles: {
      type: Object,
      default: {
        width: 150,
        height: 150,
        border: {
          radius: '10%'
        }
      }
    },
    listStyles: {
      type: Object,
      default: {
        // 是否显示边框
        border: true,
        // 是否显示分隔线
        dividline: true,
        // 线条样式
        borderStyle: {
          width: 1,
          color: 'blue',
          style: 'dashed',
          radius: 2
        }
      }
    },
    select: {
      type: Function
    },
    progress: {
      type: Function
    },
    success: {
      type: Function
    },
    fail: {
      type: Function
    }
  })
  import {
    reactive,
    watch,
    onMounted,
    getCurrentInstance
  } from "vue"
  let value = reactive();
  const that = getCurrentInstance()
  let instance;
  onMounted(() => {
    instance = that.refs.uploadFile;
  })
  setTimeout(() => {
    instance.upload()
  }, 6000)
</script>

<style lang="scss" scoped>
</style>

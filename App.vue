<script>
  import {
    checkLogin,
    checkSubscribe
  } from "./utils/shared/checkLogin.js";
  import {
    createInstance
  } from "./utils/shared/createUniInstance.js";

  import {
    lazyLoadImgs
  } from "@/utils/lazyLoad/index.js"

  export default {
    onLaunch: function() {
      // 在这里检测是否登录
      checkLogin(uni)
      createInstance(uni);

      // 预加载图片
      lazyLoadImgs(uni);
    },
    onShow: function() {},
    onHide: function() {}
  }
</script>

<style>
  /*每个页面公共css */

  /* 图标，彩色图标 */
  @import "@/static/font/iconfont.css";
  @import "@/static/font/iconfont-weapp-icon.css";
</style>

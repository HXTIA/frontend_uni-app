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

  import {
    timeFormat
  } from "./utils/format/time.js"

  export default {
    onLaunch: function() {
      // 在这里检测是否登录
      checkLogin(uni)
      createInstance(uni);

      // 预加载图片
      lazyLoadImgs(uni);

      // 分享
      uni.showShareMenu({
        withShareTicket: true,
        menus: ["shareAppMessage", "shareTimeline"],
      })

      const onshareAppMessage = (res) => {
        if (res.from == "butten") {
          console.log(res.target);
        }
        return {
          title: "title"
        }
      }
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

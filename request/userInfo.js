import {
  addTargetAttribute
} from "@/utils/shared/handleObj.js"

export const login = async (uni) => {
  return await new Promise((reslove) => {
    uni.login({
      provider: "weixin",
      timeout: 3000,
      scopes: "auth_user",
      async success(res) {
        const {
          code
        } = res;
        res["code"] = code
        const userInfo = await getUserInfoProfile(uni)
        if (!userInfo) {
          reslove(false);
          return false;
        }
        addTargetAttribute(res, userInfo)
        reslove(res)
      },
      fail() {
        reslove(false);
      }
    })
  })
}

export const getUserInfoProfile = async (uni) => {
  return await new Promise((reslove) => {
    uni.showModal({
      title: 'WARNING！',
      content: '宝~，授权微信登录后才能正常使用小程序功能',
      async success(res) {
        //如果用户点击了确定按钮
        if (res.confirm) {
          uni.getUserProfile({
            desc: '获取你的昵称、头像、地区及性别',
            success: res => {
              reslove(res)
            },
            fail: res => {
              //拒绝授权
              uni.showToast({
                title: '您拒绝了请求,不能正常使用小程序',
                icon: 'error',
                duration: 2000
              });
              reslove(false)
            }
          });
        } else if (res.cancel) {
          //如果用户点击了取消按钮
          uni.showToast({
            title: '您拒绝了请求,不能正常使用小程序',
            duration: 1000
          });
          reslove(false)
        }
      }
    });
  })
}

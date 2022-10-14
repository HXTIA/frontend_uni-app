import {
  getStorage
} from "@/utils/shared/handleStatus.js"
export const handleInit = (uni) => {
  const token = getStorage(uni, "token") || undefined;
  if (!token) return;

  // 处理没有观看欢迎页
  const isGuide = getStorage(uni, "isGuide") || false;
  if (!isGuide && token) {
    // 前提要有token并且还没有看过欢迎页
    uni.reLaunch({
      url: "/pages/Guide/index"
    })
    return false;
  }

  // 处理组织，监测是否有组织
  const organization = getStorage(uni, "organization") || false;
  if (!organization) {
    // 没有组织
    uni.showModal({
      title: '提示',
      content: "检测到还没有组织、班级信息，现在去添加，否则会影响正常使用",
      showCancel: false,
      success: (res) => {
        if (res.confirm) {
          uni.navigateTo({
            url: "/pages/Count/Initialization/index"
          })
        }
      }
    });
    return false
  }

  return true;
}

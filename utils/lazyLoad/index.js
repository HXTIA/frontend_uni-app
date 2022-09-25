// 应该是静态的不需改变的东西
const ImgURLs = [{
  "SUGGEST_BGIMAGE": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpica.zhimg.com%2Fv2-db9c2f2acf9591153462cc4884f7f15f_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpica.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666343558&t=501488767eeb9be7d0ba77647fe5bdb8"
}]

export let preloadImageList = new Map();

export const lazyLoadImgs = (uni) => {
  const promiseArr = []
  for (const obj of ImgURLs) {
    const key = Object.getOwnPropertyNames(obj)[0];
    if (key === undefined) {
      return;
    }
    promiseArr.push(
      new Promise((resolve) => {
        uni.getImageInfo({
          src: obj[key],
          success(ops) {
            const url = ops.path;
            preloadImageList.set(key, url);
            resolve();
          }
        })
      }),
    )
  }
  return Promise.all(promiseArr)
}

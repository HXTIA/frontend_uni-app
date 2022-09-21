const ImgURLs = [{}]

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
          }
        })
      }),
    )
  }
  return Promise.all(promiseArr)
}

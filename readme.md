# 天津理工大学华信软件学院科技创新协会
![](https://avatars.githubusercontent.com/u/112747103?s=200&v=4)
# uni-app小程序前端界面
### 技术栈：
1. Vue3
2. uni-app
3. pinia
4. [firstUI](https://doc.firstui.cn/docs/js/request.html)

### request函数使用方式：
1. 引入http函数，传入uni实例、发起请求的配置项以及是否需要进行权限判定
2. http会自动进行请求拦截，例如传入header或timeout等配置项。
3. http函数返回的为Promise，需then进行调用或者使用async \ await
import App from './App'
import stores from "./stores"
import plugin from "@/plugin/index.js"

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.use(stores);
app.$mount()
// #endif

// #ifdef VUE3
import {
  createSSRApp
} from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(stores);
  plugin(app, {});
  return {
    app
  }
}
// #endif

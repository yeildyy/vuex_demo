import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
new Vue({
  el: '#app',   
  store,//最终需要把store导出
  render: h => h(App)
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'
import App from './App'

Vue.config.productionTip = false
import MintUI from 'mint-ui'
import APIs from '../static/js/api';
import Axios from 'axios'
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json';
// 获取数据
Vue.prototype.GetData = function (method,callback,agms) {
  let base = {
    format: "json",
    v: "v1",
    method: method
  };  
  this.$axios.get("/topapi", {
      params: Object.assign(base,agms)
    }).then(result => {
      if (result.data.errorcode == 10000) {
        this.$toast({
          message: result.data.msg ,
          position: 'bottom',
          duration: 5000          
        })
        return false;
      }
  //    console.log(result.data.errorcode);
      callback(result.data.data);
    }).catch(err => {
      console.log(err)
      // this.$toast({
      //   message: ' 网络错误 ⊙﹏⊙‖°',
      //   position: 'bottom',
      //   duration: 5000
      // });
    })
}

import { Toast } from 'mint-ui';
Vue.use(MintUI)
/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


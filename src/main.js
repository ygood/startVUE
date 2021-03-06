import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router/router'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(router)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

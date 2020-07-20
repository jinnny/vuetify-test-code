import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueCookies from 'vue-cookies'
import Fragment from 'vue-fragment'
import Skeleton from 'vue-loading-skeleton';

Vue.use(Skeleton)
Vue.use(VueCookies)
Vue.use(Fragment.Plugin)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')


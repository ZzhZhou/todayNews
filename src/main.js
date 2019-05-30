// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import Muse from './muse-ui.config'
import VueTouch from 'vue-touch'
import store from './store'

Vue.use(VueAxios, axios)
Vue.use(Muse)
Vue.use(VueTouch, {name: 'v-touch'})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
router.replace('homepage')
store.dispatch('getAllData', axios)
store.dispatch('getVideo', axios)
store.dispatch('getHotData', axios)
store.dispatch('getSociety', axios)
store.dispatch('getEntertainment', axios)
store.dispatch('getmilitary', axios)
store.dispatch('getsport', axios)
store.dispatch('getWorld', axios)
store.dispatch('getFashion', axios)
// router.beforeEach((to, from, next) => {
//   store.commit('GETROUTER_NAME', to.name)
//   next()
// })

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import dialog from '../static/dialog'
import pin from './pin'
import CommentBox from '@/components/CommentBox'
import './mock'
import loading from './utils/loading'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(dialog)

Vue.use(VueAwesomeSwiper)
Vue.use(loading)

Vue.component('CommentBox', CommentBox)

for (var item in pin) {
  Vue.directive(item, pin[item])
}

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
export default vm

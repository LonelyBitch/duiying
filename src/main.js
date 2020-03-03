import Vue from 'vue'
import App from './App.vue'
import router from './components/router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper,)



new Vue({

  router,
  components:{
    App
  },
  render: h => h(App),
}).$mount('#app')

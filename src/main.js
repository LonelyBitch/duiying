import Vue from 'vue'
import App from './App.vue'
import router from './components/router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/dist/css/swiper.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper,)
Vue.use(ElementUI);



new Vue({

  router,
  components:{
    App
  },
  render: h => h(App),
}).$mount('#app')

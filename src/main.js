import Vue from 'vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
//store.dispatch("loginUser/whoAmI");//在网站被访问时，需要用token去换取用户的身份
// import * as loginSer from './service/loginService'
// loginSer.login('abc', '1986').then( r => console.log(r));
Vue.config.productionTip = false
Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

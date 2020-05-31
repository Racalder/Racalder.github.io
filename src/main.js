
// Plugins
import Vue from 'vue'
import router from './router'
import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css';

// Project
import App from './App.vue'
import Header from './views/Header.vue'
import Footer from './views/Footer.vue'

Vue.component('header-view', Header);
Vue.component('footer-view', Footer); 
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

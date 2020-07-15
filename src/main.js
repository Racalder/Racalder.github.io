
// Plugins
import Vue from 'vue'
import router from './router'
import VueJamIcons from 'vue-jam-icons'
import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css';
import KsVueScrollmagic from 'ks-vue-scrollmagic'

// Project
import App from './App.vue'
import Header from './views/Header.vue'
import Footer from './views/Footer.vue'

Vue.use(KsVueScrollmagic);
Vue.use(VueJamIcons);
Vue.component('header-view', Header);
Vue.component('footer-view', Footer); 
Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')




// Plugins
import Vue from 'vue'
import router from './router'
import VueJamIcons from 'vue-jam-icons'
import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css'

import * as ScrollMagic from "scrollmagic";
import {TweenMax, TimelineMax} from "gsap";
import {ScrollMagicPluginGsap} from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

// Project
import App from './App.vue'
import Header from './views/Header.vue'
import Footer from './views/Footer.vue'


const GSAPScrollMagic = {
  install (Vue) {
    // GSAP
    Vue.prototype.$GSAP = {
      TweenMax,
      TimelineMax,

    }
    // ScrollMagic
    Vue.prototype.$ScrollMagic = {
      Controller: ScrollMagic.Controller,
      Scene: ScrollMagic.Scene
    }
  }
}

Vue.use(GSAPScrollMagic)
Vue.use(VueJamIcons);
Vue.component('header-view', Header);
Vue.component('footer-view', Footer); 
Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



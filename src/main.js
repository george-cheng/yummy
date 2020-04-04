// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'jquery'

/* 展示页面相关 */
import '../src/assets/pagesAssets/pagesIndex.js'
import '../static/pagesStatic/pagesIndex.css'


/* 组件相关 */
import '../src/assets/yummy/index.js'
import '../static/yummy/index.css'

import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
});

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import home from './components/Home'

/* 开发指南 */
import installation from './pages/guide/installation'
import quickstart from './pages/guide/quickstart'

/* 组件布局 */
import layout from './pages/assembly/layout'
import container from './pages/assembly/container'
import color from './pages/assembly/color'

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home' , component: home,
      children: [
        { path: '/home/installation', name: 'installation', component: installation},
        { path: '/home/quickstart', name: 'quickstart', component: quickstart},
        { path: '/home/layout', name: 'layout', component: layout},
        { path: '/home/container', name: 'container', component: container},
        { path: '/home/color', name: 'color', component: color},
      ]
    }
  ]
})

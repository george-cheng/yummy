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
        { path: '/home/installation', name: 'installation', component: installation, meta: {title: '安装'}},
        { path: '/home/quickstart', name: 'quickstart', component: quickstart, meta: {title: '快速上手'}},
        { path: '/home/layout', name: 'layout', component: layout, meta: {title: 'Layout布局'}},
        { path: '/home/container', name: 'container', component: container, meta: {title: 'Container布局容器'}},
        { path: '/home/color', name: 'color', component: color, meta: {title: 'Color色彩'}},
      ]
    }
  ]
})

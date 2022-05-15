import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import fenlei from '../views/fenlei.vue'
import gouwuche from '../views/gouwuche.vue'
import my from '../views/my.vue'
import sousuo from '../views/sousuo.vue'
import sousuojieguo from '../views/sousuojieguo.vue'
import shuiguoshucai from '../views/shuguoshucai.vue'
import shangpinxiangqing from '../views/shangpinxiangqing.vue'
import quanbupingjia from '../views/quanbupingjia.vue'
import querendingdan from '../views/querendingdan.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fenlei',
    name: 'fenlei',
    component: fenlei
  },

  {
    path: '/gouwuche',
    name: 'gouwuche',
    component: gouwuche
  }, {
    path: '/my',
    name: 'my',
    component: my
  },
  {
    path: '/sousuo',
    name: 'sousuo',
    component: sousuo
  },
  {
    path: '/sousuojieguo',
    name: 'sousuojieguo',
    component: sousuojieguo
  },
  {
    path: '/shuiguoshucai',
    name: 'shuiguoshucai',
    component: shuiguoshucai
  },
  {
    path: '/shangpinxiangqing',
    name: 'shangpinxiangqing',
    component: shangpinxiangqing
  },
  {
    path: '/quanbupingjia',
    name: 'quanbupingjia',
    component: quanbupingjia
  },
  {
    path: '/querendingdan',
    name: 'querendingdan',
    component: querendingdan
  },

]

const router = new VueRouter({
  routes
})

export default router
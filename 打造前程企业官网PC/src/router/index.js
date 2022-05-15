import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import jituangaikuo from '../views/jituangaikuo.vue'
import keji from '../views/keji.vue'
import youjiao from '../views/youjiao.vue'
import jinrong from '../views/jinrong.vue'
import zhijiao from '../views/zhijiao.vue'
import dianshang from '../views/dianshang.vue'
import news from '../views/news.vue'
import newsDetail from '../views/newsxiangqing.vue'
import zhaopinxinxi from '../views/zhaopinxinxi.vue'
import lianxi from '../views/lianxiwomen.vue'
import zhaopinxiangqing from '../views/zhaopinxiangqing.vue'




Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/jituangaikuo',
    name: 'jituangaikuo',
    component: jituangaikuo
  },
  {
    path: '/keji',
    name: 'keji',
    component: keji
  },
  {
    path: '/youjiao',
    name: 'youjiao',
    component: youjiao
  },
  {
    path: '/jinrong',
    name: 'jinrong',
    component: jinrong
  },
  {
    path: '/zhijiao',
    name: 'zhijiao',
    component: zhijiao
  },
  {
    path: '/dianshang',
    name: 'dianshang',
    component: dianshang
  },
  {
    path: '/xinwen',
    name: 'xinwen',
    component: news
  },
  {
    path: '/newsxiangqing',
    name: 'newsDetal',
    component: newsDetail
  },
  {
    path: '/zhaopin',
    name: 'zhaopinxinxi',
    component: zhaopinxinxi
  },
  {
    path: '/lianxi',
    name: 'lianxi',
    component: lianxi
  },
  {
    path: '/zhaopinxiangqing',
    name: 'zhaopinxiangqing',
    component: zhaopinxiangqing
  }



]

const router = new VueRouter({
  routes
})

export default router
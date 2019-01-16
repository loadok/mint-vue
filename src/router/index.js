import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//const home = resolve => import('@/views/home').then(module => resolve(module)) //首页
const test = () => import('@/views/test'); //商品列表

const home = () => import('@/views/home'); //首页
const category = () => import('@/views/category'); //分类
const goodsList = () => import('@/views/goods/goodsList'); //商品列表
const goodsDetails = () => import('@/views/goods/details'); //商品列表


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/category',
      name: 'category',
      component: category
    },
    {
      path: "/goodsList/:cat_id",
      name: 'goodsList',
      component: goodsList      
    },
    {
      path: "/goodsList/details/:item_id",
      name: 'goodsDetails',
      component: goodsDetails
    },    
    {
      path: "/test",
      name: 'test',
      component: test      
    }        
  ]
})

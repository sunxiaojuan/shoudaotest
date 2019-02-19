import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Zt from '@/components/Zt'
import AboutSd from '@/components/UserCenter/AboutSd';
import MoneyBag from '@/components/UserCenter/MoneyBag';
import UserCenter from '@/components/UserCenter';
import GetMoney from '@/components/UserCenter/GetMoney'
Vue.use(Router)
export default new Router({
  routes: [{
      path: '*',
      name: 'UserCenter',
      component: UserCenter,
    },
    {
      path: '/aboutsd',
      component: AboutSd
    }, {
      path: '/moneybag',
      component: MoneyBag
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/zt',
      name: 'Zt',
      component: Zt
    },
    {
      path: '/getMoney',
      name: 'GetMoney',
      component: GetMoney
    }

  ]
})

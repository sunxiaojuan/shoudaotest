import Vue from 'vue'
import Router from 'vue-router';
import Home from '@/pages/Home'
import Zt from '@/pages/Zt'
import Ztinfo from '@/pages/Ztinfo'
import AboutSd from '@/pages/UserCenter/AboutSd';
import MoneyBag from '@/pages/UserCenter/MoneyBag';
import UserCenter from '@/pages/UserCenter';
import GetMoney from '@/pages/UserCenter/GetMoney';
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
    },
    {
      path: '/ztinfo',
      name: 'Ztinfo',
      component: Ztinfo
    }
  ]
})

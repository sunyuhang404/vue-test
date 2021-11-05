import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

import Home from '@page/home';
import Mine from '@page/mine';
import Empty from '@page/empty';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) => {
      console.log('home before enter')
      next();
    }
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine,
    beforeEnter: (to, from, next) => {
      console.log('mine before enter');
      next();
    }
  },
  {
    path: '*',
    component: Empty
  }
];

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes
});

router.beforeEach((to, from, next) => {
  console.log('before each');
  next();
});

// 在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用
router.beforeResolve((to, from, next) => {
  console.log('before resolve');
  next();
});

router.afterEach((to, from) => {
  console.log('after each');
});

export default router;

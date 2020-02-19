import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/home/Home.vue';
import Result from '../components/result/Result.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/result',
    name: 'Result',
    component: Result,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

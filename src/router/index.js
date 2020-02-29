import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/home/Home.vue';
import Result from '../components/result/Result.vue';
import RecipeDetail from '../components/result/recipeDetail/RecipeDetail.vue';

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
  {
    path: '/detail/:recipeId',
    name: 'Detail',
    props: true,
    component: RecipeDetail,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

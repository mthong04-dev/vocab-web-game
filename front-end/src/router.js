import Landing from './views/Landing.vue';
import Vue from 'vue';
import Router from 'vue-router';
import Words from './views/Words.vue';
import New from './views/New.vue';
import Show from './views/Show.vue';
import Edit from './views/Edit.vue';
import Test from './views/Test.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    
    {
      path: '/',
      redirect: '/english'
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/:language(english|german|spanish)',
      name: 'language-words',
      component: Words
    },
    {
      path: '/:language(english|german|spanish)/new',
      name: 'new-word',
      component: New
    },
    {
      path: '/:language(english|german|spanish)/:id',
      name: 'show',
      component: Show
    },
    {
      path: '/:language(english|german|spanish)/:id/edit',
      name: 'edit',
      component: Edit
    }
  ]
});

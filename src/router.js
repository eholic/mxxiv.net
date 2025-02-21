import {createRouter, createWebHistory} from 'vue-router';
import TopPage from './components/TopPage.vue';
import Pgo from './components/Pgo.vue';
import Stars from './components/Stars.vue';
import Shonan from './components/ShonanExpress.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'TopPage',
      component: TopPage,
      meta: {
        title: 'Home | mxxiv.net',
      },
    },
    {
      path: '/pgo',
      name: 'Pgo',
      component: Pgo,
      meta: {
        title: 'Pokémon GO Clipboard | mxxiv.net',
      },
    },
    {
      path: '/stars',
      name: 'Stars',
      component: Stars,
      meta: {
        title: 'Stars Visualization | mxxiv.net',
      },
    },
    {
      path: '/shonanexpress',
      name: 'ShonanExpress',
      component: Shonan,
      meta: {
        title: 'Shonan Express | mxxiv.net',
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, top: 50 };
    }
    return { x: 0, y: 0 };
  },
});

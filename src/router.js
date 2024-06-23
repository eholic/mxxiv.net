import {createRouter, createWebHashHistory} from 'vue-router';
import TopPage from './components/TopPage.vue';
import Pgo from './components/Pgo.vue';
import Stars from './components/Stars.vue';

export default createRouter({
  history: createWebHashHistory(),
  // base: process.env.BASE_URL,
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
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});

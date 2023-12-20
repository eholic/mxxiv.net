import Vue from 'vue';
import './style.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faClipboard, faUpload, faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router';
import App from './App.vue';


import BulmaSlider from 'bulma-slider/dist/js/bulma-slider.min.js';
library.add(faGithub, faLinkedinIn,
            faClipboard, faUpload, faAngleDoubleRight);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

import { createApp } from 'vue'

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

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router)

app.mount('#app')

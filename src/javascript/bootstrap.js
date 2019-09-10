import Vue from 'vue';
import WebFont from 'webfontloader';
import VueMouseParallax from 'vue-mouse-parallax';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faGithub, faStackOverflow, faNpm, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VTooltip from 'v-tooltip';

WebFont.load({
    custom: {
        families: ['Clinton:n8'],
        urls: ['/css/fonts.css']
    },
    google: {
      families: ['IBM Plex Sans:n4']
    }
});

library.add(faTwitter, faGithub, faStackOverflow, faNpm,
            faDiscord);
Vue.component('Fa', FontAwesomeIcon);
Vue.use(VTooltip);

Vue.use(VueMouseParallax);

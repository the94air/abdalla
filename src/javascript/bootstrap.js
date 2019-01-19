import Vue from 'vue';
import WebFont from 'webfontloader';
import VueMouseParallax from 'vue-mouse-parallax';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobeAmericas, faBook } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faStackOverflow, faNpm, faDiscord, faHtml5,
         faCss3Alt, faSass, faJs, faPhp, faPython } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faTwitter, faGithub, faStackOverflow, faNpm, faGlobeAmericas,
            faDiscord, faBook, faHtml5, faCss3Alt, faSass, faJs, faPhp, faPython);
Vue.component('Fa', FontAwesomeIcon);

WebFont.load({
    google: {
        families: ['Calligraffitti', 'BioRhyme:200', 'Cutive Mono', 'Kalam:300']
    }
});

Vue.use(VueMouseParallax);

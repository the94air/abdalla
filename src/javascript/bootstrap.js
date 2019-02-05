import Vue from 'vue';
import WebFont from 'webfontloader';
import VueMouseParallax from 'vue-mouse-parallax';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobeAmericas, faBook, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faStackOverflow, faNpm, faDiscord, faHtml5,
         faCss3Alt, faSass, faJs, faPhp, faPython } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faTwitter, faGithub, faStackOverflow, faNpm, faGlobeAmericas,
            faDiscord, faBook, faHtml5, faCss3Alt, faSass, faJs, faPhp, faPython,
            faExternalLinkSquareAlt);
Vue.component('Fa', FontAwesomeIcon);

WebFont.load({
    custom: {
        families: ['Clinton:n6,n8'],
        urls: ['/css/fonts.css']
    }
});

Vue.use(VueMouseParallax);

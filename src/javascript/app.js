import Vue from 'vue';
import App from './App';
import AOS from 'aos';

require('./bootstrap');

const app = new Vue({
    el: '#app',
    render: h => h(App),
	created() {
		AOS.init({
			delay: 100,
			once: true
		});
	},
});

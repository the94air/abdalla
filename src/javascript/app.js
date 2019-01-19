import Vue from 'vue';
import App from './App/App';

require('./bootstrap');

const app = new Vue({
    el: '#app',
    render: h => h(App),
});

import Vue from 'vue';
import App from './app.vue';

import SRequest from 's-request';

Vue.use(SRequest)

new Vue({
    el: "#app",
    template: '<App />',
    components: {
        App
    }
});
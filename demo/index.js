import Vue from 'vue';
import App from './app.vue';

import SRequest from 's-request';

import path from 'path';

if (process.env.NODE_ENV === "development"){
	let mock = require('./mock').default;

	Vue.use(SRequest, {
	    mocker: mock
	});
}
else {
	Vue.use(SRequest, {
	});
}

new Vue({
    el: "#app",
    template: '<App />',
    components: {
        App
    }
});
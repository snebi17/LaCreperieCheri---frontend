import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import router from './routes/router';
import vuetify from './plugins/vuetify';
import i18n from './i18n';
import store from './store';

import '../public/app.css';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
	let language = to.params.lang;
	if (!language) {
		language = 'si'
	}
	i18n.locale = language;
	next();
})

Vue.use(VueRouter);

new Vue({
	router: router,
	vuetify,
	i18n,
	store,
	render: (h) => h(App),
}).$mount('#app');

import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import IconLang from "./components/icons/IconLang.vue";
import router from "./routes/router";

import "../public/app.css";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use("v-icon-lang", IconLang);

new Vue({
	router: router,
	vuetify,
	i18n,
	render: (h) => h(App),
}).$mount("#app");

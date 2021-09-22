import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
// import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify, {
	options: {
		customProperties: true,
	},
});

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: "#fda47e",
				secondary: "#f2efdb",
				accent: "#c78283",
				success: "#3d3737",
				// primary: "#e99ea2",
				// secondary: "#3b4664",
				// accent: "#a6a6a6",
				// success: "#f2d0d0",
			},
		},
	},
});

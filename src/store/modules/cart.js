let cart = window.localStorage.getItem("cart");
let cartCount = window.localStorage.getItem("cartCount");

const state = () => ({
	cart: cart ? JSON.parse(cart) : [],
	cartCount: cartCount ? parseInt(cartCount) : 0,
});

// mutations
const mutations = {
	addToCart(state, product) {
		state.cart.push(product);
		state.cartCount++;
		window.localStorage.setItem("cart", JSON.stringify(state.cart));
		window.localStorage.setItem("cartCount", state.cartCount);
	},
};

//actions
const actions = {
	addToCart({ commit }, product) {
		commit("addToCart", product);
	},
};

const getters = {
	cartProducts: (state) => {
		let products = [];

		state.cart.forEach((item) => {
			products.push(item);
		});

		return products;
	},

	cartTotalPrice: (state) => {
		let total = 0;

		state.cart.forEach((item) => {
			total += item.total;
		});

		return total;
	},
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};

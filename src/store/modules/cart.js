const state = () => ({
	products: [],
	checkoutStatus: null,
});

const getters = {
	cartProducts: (state) => {
		return state.products;
	},

	cartTotalPrice: (state, getters) => {
		return getters.cartProducts.reduce((total, product) => {
			return total + product.total;
		}, 0);
	},
};

// actions
const actions = {
	addProductToCart({ commit }, product) {
		commit("pushProductToCart", { product: product });
	},
};

// mutations
const mutations = {
	pushProductToCart(state, { product }) {
		state.products.push({
			product,
		});
	},

	setCartItems(state, { products }) {
		state.products = products;
	},

	setCheckoutStatus(state, status) {
		state.checkoutStatus = status;
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};

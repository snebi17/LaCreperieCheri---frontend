const state = () => ({
	products: [],
	checkoutStatus: null,
});

const getters = {
	cartProducts: (state) => {
		// let cart = [];
		// let id = 1;
		// state.products.forEach((product) => {
		// 	let items = [];
		// 	Object.values(product).forEach((item) => {
		// 		item.items.forEach((i) => {
		// 			items.push({
		// 				name: i.name,
		// 				price: i.price,
		// 			});
		// 		});
		// 	});
		// 	cart.push({
		// 		id: id,
		// 		name: "Palačinka #" + id,
		// 		children: items,
		// 	});
		// 	id++;
		// });

		// return cart;
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
		console.log(product);
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

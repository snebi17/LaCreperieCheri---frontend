let shop = {};

const state = () => ({
  items: [],
  checkoutStatus: null,
});

const getters = {
  cartProducts: (state) => {
    return state.items;
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.total;
    }, 0);
  },
};

// actions
const actions = {
  checkout({ commit, state }, products) {
    const savedCartItems = [...state.items];
    commit("setCheckoutStatus", null);
    // empty cart
    commit("setCartItems", { items: [] });
    shop.buyProducts(
      products,
      () => commit("setCheckoutStatus", "successful"),
      () => {
        commit("setCheckoutStatus", "failed");
        // rollback to the cart saved before sending the request
        commit("setCartItems", { items: savedCartItems });
      }
    );
  },

  addProductToCart({ state, commit }, product) {
    commit("setCheckoutStatus", null);
    const cartItem = state.items.find((item) => item.id === product.id);
    if (!cartItem) {
      commit("pushProductToCart", { product: product });
    }
    // else {
    //   commit("incrementItemQuantity", cartItem);
    // }
  },
};

// mutations
const mutations = {
  pushProductToCart(state, { product }) {
    state.items.push({
      product
    });
  },

  // incrementItemQuantity(state, { id }) {
  //   const cartItem = state.items.find((item) => item.id === id);
  //   cartItem.quantity++;
  // },

  setCartItems(state, { items }) {
    state.items = items;
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

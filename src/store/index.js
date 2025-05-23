import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    ADD_TO_CART(state, product) {
      state.cart.push(product);
    },
    REMOVE_FROM_CART(state, index) {
      state.cart.splice(index, 1);
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        commit("SET_PRODUCTS", data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    },
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
    cartItems(state) {
      return state.cart;
    },
    cartTotal(state) {
      return state.cart.reduce((sum, p) => sum + p.price, 0);
    },
  },
});

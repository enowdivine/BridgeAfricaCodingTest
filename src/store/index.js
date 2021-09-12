import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        name: "Hamburger",
        description: "description",
        price: 5000,
        condition: "Very good",
      },
      {
        name: "pizza",
        description: "description",
        price: 10000,
        condition: "Very good",
      },
      {
        name: "pizza",
        description: "description",
        price: 10000,
        condition: "Very good",
      },
      {
        name: "pizza",
        description: "description",
        price: 10000,
        condition: "Very good",
      },
    ],

    users: [
      {
        username: "",
        password: "",
      },
    ],
  },

  getters: {
    countProducts: (state) => {
      return state.products.length;
    },

    username: (state) => {
      return state.users.username;
    },
  },
  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.products.push(product);
    },
    EDIT_PRODUCT: (state, product) => {
      Object.assign(product);
    },
    DELETE_PRODUCT: (state, product) => {
      state.products.splice(product, 1);
    },

    ADD_USER: (state, user) => {
      state.users.push(user);
    },
    LOGOUT: (state, user) => {
      state.users = [];
    },
  },
  actions: {
    deleteProduct: (context, product) => {
      context.commit("DELETE_PRODUCT", product);
    },

    logout: (context, user) => {
      context.commit("LOGOUT", user);
    },
  },
  modules: {},
});

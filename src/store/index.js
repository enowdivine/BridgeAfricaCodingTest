import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        name: "Cell Phone",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus facilis, unde reiciendis mollitia quidem.",
        price: 5000,
        condition: "good",
      },
      {
        name: "Television",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus facilis, unde reiciendis mollitia quidem.",
        price: 18000,
        condition: "Very good",
      },
      {
        name: "Fridge",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus facilis, unde reiciendis mollitia quidem.",
        price: 12000,
        condition: "Bad",
      },
      {
        name: "Computer",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus facilis, unde reiciendis mollitia quidem.",
        price: 1000,
        condition: "Excellent",
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
      const index = state.products.findIndex((item) => item.id === product.id);
      Vue.set(state.products, index, product);
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

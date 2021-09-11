import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productName: "Product Name",
    productDescription: "Product Description",
    productPrice: "Product Price",
    productCondition: "Product condition",
    links: ["name", "number"],
  },
  mutations: {},
  actions: {},
  modules: {},
});

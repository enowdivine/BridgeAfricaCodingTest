import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/auth/login";
import Account from "../views/account/account.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/account",
    name: "Account",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(
        /* webpackChunkName: "about" */ "../views/account/account.vue"
      );
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/masonry",
    name: "Masonry",
    component: () => {
      return import(/* webpackChunkName: "MasonryLayouts" */ "../views/MasonryLayouts.vue")
    }
  },
  {
    path: "/user",
    name: "User",
    component: () => {
      return import(/* webpackChunkName: "MasonryLayouts" */ "../views/User.vue")
    }
  },
  {
    path: "/js-masonry",
    name: "JsMasonry",
    component: () => {
      return import(/* webpackChunkName: "JsMasonry" */ "../views/JsMasonry.vue")
    }
  }
];

export default routes;

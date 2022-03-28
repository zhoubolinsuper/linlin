import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import hailuo from "../views/hailuo"

Vue.use(VueRouter);

const routes = [{
      path: "/",
      name: "home",
      component: HomeView,
   },
   {
      path: "/saishi",
      name: "saishi",
      component: () => import('@/views/SaiShi.vue'),
   },
   {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue")
   },
   {
      path: "/advertise",
      name: "advertise",
      component: () =>
         import("../views/Advertise.vue"),
   },
  {
    path:"/hailuo",
    name:"hailuo",
    component:hailuo
  }
];

const router = new VueRouter({
   routes,
});

export default router;
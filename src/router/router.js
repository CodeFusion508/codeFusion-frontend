import { createRouter, createWebHistory } from "vue-router";

// route imports
import lessonsRoutes from "./lessons.js";

// page imports
import HomePage from "@/pages/HomePage.vue";
import AboutUs from "@/pages/AboutUs.vue";
import SignUp from "@/pages/SignUp.vue";
import UserSettings from "@/pages/UserSettings.vue";
import ArticlesPage from "@/pages/ArticlesPage.vue";

// routes arrays
let baseRoutes = [
  { path: "/", component: HomePage },
  { path: "/nosotros", component: AboutUs },
  { path: "/session", component: SignUp },
  {
    path        : "/ajustes",
    component   : UserSettings,
    beforeEnter : (from, to, next) => {
      if (localStorage.getItem("tkn") != null) {
        next();
      } else {
        next({ to: "/session" });
      }
    }
  },
  { path: "/articulos", component: ArticlesPage },
  { path: "/articulos/articulo", component: ArticlesPage }
];

let routes1 = baseRoutes.concat(lessonsRoutes);

// router object
const router = createRouter({
  history         : createWebHistory(),
  linkActiveClass : "active",
  routes          : routes1
});

export default router;
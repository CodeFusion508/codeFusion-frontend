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
  { path: "/", component: HomePage, meta: { name: 'initialize' } },
  { path: "/deNosotros", component: AboutUs, meta: { name: 'about' } },
  { path: "/creaSesion", component: SignUp, meta: { name: 'session' } },
  {
    path        : "/ajustes",
    component   : UserSettings,
    beforeEnter : (from, to, next) => {
      if (localStorage.getItem("tkn") != null) {
        next();
      } else {
        next({ to: "/creaSesion" });
      }
    }
  },
  { path: "/articulos", component: ArticlesPage, meta: { name: 'articles' } },
  { path: "/articulos/articulo", component: ArticlesPage, meta: { name: 'articles' } }
];

let routes1 = baseRoutes.concat(lessonsRoutes);

// router object
const router = createRouter({
  history         : createWebHistory(),
  // linkActiveClass : "active",
  routes          : routes1
});

export default router;
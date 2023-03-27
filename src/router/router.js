import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from '../store/authStore'

// route imports
import lessonsRoutes from "./lessons.js";

// page imports
import HomePage from "../pages/HomePage.vue";
import AboutUs from "../pages/AboutUs.vue";
import SignUp from "../pages/SignUp.vue";
// import UserSettings from "../pages/UserSettings.vue";
import ArticlesPage from "../pages/ArticlesPage.vue";

// Page of profile user
import PageUserSettings from '../pages/UserSettings.vue'

// routes arrays
let baseRoutes = [
  { path: "/", component: HomePage },
  { path: "/deNosotros", component: AboutUs },
  { path: "/creaSesion", component: SignUp },
  { path: "/ajustes", component: PageUserSettings, beforeEnter: (from, to, next) => {
    if(localStorage.getItem('tkn') != null) {
      next()
    } else {
      next({ to: '/creaSesion' })
    }
  } },
  { path: "/articulos", component: ArticlesPage },
  { path: "/articulos/articulo", component: ArticlesPage },
]

let routes1 = baseRoutes.concat(lessonsRoutes);

// router object
const router = createRouter({
  history         : createWebHistory(),
  linkActiveClass : "active",
  routes          : routes1
});

export default router;
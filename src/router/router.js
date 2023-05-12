import { createRouter, createWebHistory } from "vue-router";

// route imports
import lessonsRoutes from "./lessons.js";

// page imports
import HomePage from "@/pages/HomePage.vue";
import AboutUs from "@/pages/AboutUs.vue";
import SignUp from "@/pages/SignUp.vue";
import UserSettings from "@/pages/UserSettings.vue";
import ArticlesPage from "@/pages/ArticlesPage.vue";
import ViewConfirmAccount from "@/modules/Auth/ConfirmAccount.vue"

// routes arrays
const baseRoutes = [
  {
    path      : "/",
    component : HomePage,
    meta      : { name: "initialize" }
  },
  {
    path      : "/cuenta/:token/confirmacion",
    component : ViewConfirmAccount
  },
  {
    path      : "/nosotros",
    component : AboutUs,
    meta      : { name: "about" }
  },
  {
    path      : "/session",
    component : SignUp,
    meta      : { name: "session" }
  },
  {
    path        : "/ajustes",
    component   : UserSettings,
    beforeEnter : (from, to, next) => {
      if (localStorage.getItem("tkn") !== undefined) {
        next();
      } else {
        next({ to: "/session" });
      }
    }
  },
  {
    path      : "/articulos",
    component : ArticlesPage,
    meta      : { name: "articles" }
  },
  {
    path      : "/articulos/articulo",
    component : ArticlesPage,
    meta      : { name: "articles" }
  }
];

const routes = baseRoutes.concat(lessonsRoutes);

// router object
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
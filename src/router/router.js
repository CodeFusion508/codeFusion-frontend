import { createRouter, createWebHistory } from "vue-router";

// route imports
import lessonsRoutes from "./lessons.js";
import InstructorRoutes from './instructor.js'

// page imports
const HomePage = () => import("@/pages/HomePage.vue");
const AboutUs = () => import("@/pages/AboutUs.vue");
const SignUp = () => import("@/pages/SignUp.vue");
const UserSettings = () => import("@/pages/UserSettings.vue");
const ArticlesPage = () => import("@/pages/ArticlesPage.vue");
const ViewConfirmAccount = () => import("@/modules/Auth/ConfirmAccount.vue");
const ViewRecoveryAccount = () => import("@/modules/Auth/RecoveryAccount.vue");

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
    path      : "/cuenta/:token/recuperar",
    component : ViewRecoveryAccount
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
    beforeEnter : (_, __, next) => {
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
  routes: routes.concat(InstructorRoutes)
});

export default router;
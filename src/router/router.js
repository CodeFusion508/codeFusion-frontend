import { createRouter, createWebHistory } from "vue-router";

// route imports
import lessonsRoutes from "./lessons.js";

// page imports
import ExamplePage from "../pages/ExamplePage.vue";
import HomePage from "../pages/HomePage.vue";
import AboutUs from "../pages/AboutUs.vue";
import SignUp from "../pages/SignUp.vue";
import UserSettings from "../pages/UserSettings.vue";
import ArticlesPage from "../pages/ArticlesPage.vue";

// routes arrays
let baseRoutes = [
  { path: "/", component: ExamplePage },
  { path: "/inicio", component: HomePage },
  { path: "/deNosotros", component: AboutUs },
  { path: "/creaSesion", component: SignUp },
  { path: "/ajustes", component: UserSettings },
  { path: "/articulos", component: ArticlesPage },
  { path: "/articulos/articulo", component: ArticlesPage },
];

let routes1 = baseRoutes.concat(lessonsRoutes);

// router object
const router = createRouter({
  history         : createWebHistory(),
  linkActiveClass : "active",
  routes          : routes1
});

export default router;
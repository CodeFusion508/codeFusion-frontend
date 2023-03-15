import { createRouter, createWebHistory } from "vue-router";

// route imports
import lessonsRoutes from "./lessons.js";

// page imports
import ExamplePage from "../pages/ExamplePage.vue";
import HomePage from "../pages/HomePage.vue";

// routes arrays
let baseRoutes = [
  { path: "/", component: ExamplePage },
  { path: "/inicio", component: HomePage },
  { path: "/deNosotros", component: HomePage },
  { path: "/creaSesion", component: HomePage },
  { path: "/ajustes", component: HomePage },
  { path: "/articulos", component: HomePage },
  { path: "/articulos/articulo", component: HomePage },
];

let routes1 = baseRoutes.concat(lessonsRoutes);

// router object
const router = createRouter({
  history         : createWebHistory(),
  linkActiveClass : "active",
  routes          : routes1
});

export default router;
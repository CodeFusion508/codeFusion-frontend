import { createRouter, createWebHistory } from "vue-router";

// pages imports
import ExamplePage from "../pages/ExamplePage.vue";

// routes arrays
let baseRoutes = [
  { component: ExamplePage, path: "/" }
];

// router object
const router = createRouter({
  history         : createWebHistory(),
  linkActiveClass : "current",
  routes          : baseRoutes
});

export default router;
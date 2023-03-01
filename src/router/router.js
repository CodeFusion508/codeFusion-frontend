import { createRouter, createWebHistory } from "vue-router";

// pages imports
import ExamplePage from "../pages/ExamplePage.vue";

// routes arrays
let baseRoutes = [
  { path: "/", component: ExamplePage }
];

// router object
const router = createRouter({
  history: createWebHistory(),
  routes: baseRoutes,
  linkActiveClass: "current"
});

export default router;
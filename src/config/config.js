import { createApp } from "vue";
import { createPinia } from "pinia";
import { install } from "@guolao/vue-monaco-editor";

import App from "../App.vue";
import router from "../router/router.js";

import "../assets/style.css";

export const app = createApp(App);

// uses
app.use(createPinia());
app.use(router);
app.use(install);
import { createApp } from "vue";
import { createPinia } from "pinia";
import { config } from "dotenv";

import App from "./App.vue";
import router from "./router/router.js";

// global components
import NavBar from "./components/NavBar.vue";
import NavFooter from "./components/NavFooter.vue";

config();
let app = createApp(App);

// components
app.component("nav-bar", NavBar);
app.component("nav-footer", NavFooter);

// uses
app.use(createPinia());
app.use(router);

app.mount("#app");
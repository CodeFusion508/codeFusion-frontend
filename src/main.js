import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router/router.js";

import exampleNavBar from "./components/ExampleComponent.vue";

let app = createApp(App);

app.component("nav-bar", exampleNavBar);

app.use(createPinia());
app.use(router);

app.mount("#app");
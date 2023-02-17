import { createApp } from "vue";

// use imports
import App from "./App.vue";
import router from "./router/router.js";

let app = createApp(App);

app.use(router);

app.mount("#app");
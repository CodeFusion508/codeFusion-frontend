// App construction and initialization
import { createApp } from "vue";

import App from "./App.vue";

export const app = createApp(App);

// App plugins and uses
import { createPinia } from "pinia";
import router from "./router/router.js";
import { install } from "@guolao/vue-monaco-editor";
import vue3GoogleLogin from "vue3-google-login";

app.use(createPinia());
app.use(router);
app.use(install);
app.use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_GOOGLE_API
});

// Global components
import NavBar from "./components/NavBar.vue";
import NavFooter from "./components/NavFooter.vue";
import ToastError from "./components/ToastError.vue";

app.component("nav-bar", NavBar);
app.component("nav-footer", NavFooter);
app.component("toast-error", ToastError);


app.mount("#app");
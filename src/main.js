import { createApp } from "vue";
import { createPinia } from "pinia";
import { install } from "@guolao/vue-monaco-editor";
import vue3GoogleLogin from "vue3-google-login";

import App from "./App.vue";
import router from "./router/router.js";

// global components
import NavBar from "./components/NavBar.vue";
import NavFooter from "./components/NavFooter.vue";
import ToastError from "./components/ToastError.vue";

let app = createApp(App);

// components
app.component("nav-bar", NavBar);
app.component("nav-footer", NavFooter);
app.component("toast-error", ToastError);

// uses
app.use(createPinia());
app.use(router);
app.use(install);
app.use(vue3GoogleLogin, {
    clientId : "1079746536463-hu5gv65n5jin72ee5s4gt7de5n7qhs4e.apps.googleusercontent.com",
    scope    : "profile email openid"
});

app.mount("#app");
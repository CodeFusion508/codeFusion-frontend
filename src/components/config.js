import { app } from '../config/config'
// global components
import NavBar from "../components/NavBar.vue";
import NavFooter from "../components/NavFooter.vue";
import ToastError from "../components/ToastError.vue";

// components
app.component("nav-bar", NavBar);
app.component("nav-footer", NavFooter);
app.component("toast-error", ToastError);
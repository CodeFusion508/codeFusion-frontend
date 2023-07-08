import vue3GoogleLogin from "vue3-google-login";

import { app } from "./config.js";

app.use(vue3GoogleLogin, {
  clientId : import.meta.env.VITE_GOOGLE_API,
  scope    : "profile email openid"
});
import vue3GoogleLogin from "vue3-google-login";

import { app } from "./config.js";

app.use(vue3GoogleLogin, {
  clientId : "1079746536463-hu5gv65n5jin72ee5s4gt7de5n7qhs4e.apps.googleusercontent.com",
  scope    : "profile email openid"
});
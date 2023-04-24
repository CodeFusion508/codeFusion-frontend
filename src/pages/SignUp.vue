<template>
  <nav-bar />

  <div class="d-flex justify-content-center mt-5">
    <div class="col-sm-4 col-12">
      <div class="position-btn-google bg-primary">
            <g-login class="col-12" @logged-in="checkGLogin" @credential="fillCredential" />
      </div>
      <div class="row">
        <div class="col-sm-12">

          <div v-show="login" class="bs_create_account_layout5 position-relative">
            <div class="container-fluid px-0">
              <div class="col-lg-12 mx-auto">
                <div
                  class="d-flex justify-center flex-column align-items-center bg-dark-subtle border-0 rounded p-5 bs_signup_content">
                  <p class="text-secondary h6 bs_fw-300 pb-3 text-white">
                    Iniciar sesión
                  </p>
                  <form class="py-3 pt-lg-3 w-100 md-mx-w-550" @submit.prevent="logIn">
                    <div class="mb-3">
                      <input id="signup-5-Email" v-model="email" type="email" class="form-control text-white"
                        placeholder="Correo Electrónico" required />
                    </div>
                    <div class="mb-3">
                      <input id="signup-5-Password" v-model="password" type="password" class="form-control text-white"
                        placeholder="Contraseña" required />
                    </div>
                    <button type="submit" class="btn btn-primary w-100 text-white">
                      Iniciar sesión
                    </button>

                    <p class="pt-3 small mb-0" style="color: lightgray">
                      No tienes una Cuenta?
                      <a class="text-decoration-none" @click.prevent="show">Crea una Cuenta</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div v-show="!login" class="bs_create_account_layout5 position-relative">
            <div class="container-fluid px-0">
              <div class="col-lg-12 mx-auto">
                <div
                  class="d-flex justify-center flex-column align-items-center bg-dark-subtle border-0 rounded p-5 bs_signup_content">
                  <p class="text-secondary h6 bs_fw-300 pb-3 text-white">
                    Crea una Cuenta
                  </p>
                  <form class="py-3 pt-lg-3 w-100 md-mx-w-550" @submit.prevent="createAccount(false)">
                    <div class="mb-3">
                      <input id="signup-5-name" v-model="userName" type="text" class="form-control text-white"
                        placeholder="Nombre" aria-describedby="infotext" required />
                    </div>
                    <div class="mb-3">
                      <input id="signup-5-Email" v-model="email" type="email" class="form-control text-white"
                        placeholder="Correo Electrónico" required />
                    </div>
                    <div class="mb-3">
                      <input id="signup-5-Password" v-model="password" type="password" class="form-control text-white"
                        placeholder="Contraseña" required />
                    </div>
                    <div v-if="gLogin && password === ''" class="alert alert-warning" role="alert">
                      Introduzca su contraseña
                    </div>
                    <button type="submit" class="btn btn-primary w-100 text-white">
                      Crea Cuenta
                    </button>

                    <p class="pt-3 small mb-0" style="color: lightgray">
                      Ya tienes una cuenta?
                      <a class="text-decoration-none" @click.prevent="show">Iniciar sesión</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      
      </div>
    </div>

  </div>


  <nav-footer />
</template>

<style>
.position-btn-google {
  width: 350px;
  position: absolute;
  left: 82.5%;
  top: 12.5%;
  transform: translate(-82.5%, -12.5%);
  z-index: 50;
}

@media only screen and (max-width: 600px) {
  .position-btn-google {
    width: 100%;
    left: 0% !important;
    transform: translate(0%, -12.5%);
  }
}
</style>

<script>
import { mapActions, mapState } from "pinia";

import { useUserStore } from "@/store/userStore.js";
import { useAuthStore } from "@/store/authStore.js";

import GLoginButton from "@/components/GLoginButton.vue";

export default {
  components: {
    "g-login": GLoginButton,
  },
  data() {
    return {
      login: false,
      userName: "",
      email: "",
      password: "",
      gLogin: false,
      credential: "",
    };
  },
  computed: {
    ...mapState(useAuthStore, ["storeName", "storeEmail", "storePassword"]),
  },
  methods: {
    ...mapActions(useUserStore, [
      "createUser",
      "logInUser",
      "createGoogleUser",
      "verifyUser",
    ]),
    ...mapActions(useAuthStore, ["addAuthToken"]),
    fillCredential(value) {
      this.credential = value;
    },
    async checkGLogin(value) {
      let verified = await this.verifyUser(this.credential);
      if (value) {
        this.gLogin = true;
        if (this.storeEmail !== "") {
          this.email = this.storeEmail;
        }
        if (this.storeName !== "") {
          this.userName = this.storeName;
        }

        if (verified) await this.createAccount(true);
      }
    },
    async createAccount(google) {
      if (!google) {
        const userObj = {
          name: this.userName,
          email: this.email,
          password: this.password,
        };

        const token = await this.createUser(userObj);

        this.addAuthToken(token);
      } else {
        const userObj = {
          name: this.userName,
          email: this.email,
          token: this.credential,
        };

        const token = await this.createGoogleUser(userObj);

        this.addAuthToken(token);
      }
    },
    async logIn() {
      const userObj = {
        email: this.email,
        password: this.password,
      };

      const token = await this.logInUser(userObj);
      this.addAuthToken(token);
    },
    show() {
      this.login = !this.login;
    },
  },
};
</script>

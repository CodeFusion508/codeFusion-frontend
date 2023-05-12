<template>
  <nav-bar />

  <div class="d-flex justify-content-center mt-5">
    <div class="col-sm-4 col-12">
      <div class="row">
        <div class="col-sm-12">
          <div class="bs_create_account_layout5 position-relative">
            <div class="container-fluid px-0">
              <div class="col-lg-12 mx-auto">
                <div
                  class="d-flex justify-center flex-column align-items-center bg-dark-subtle border-0 rounded p-5 bs_signup_content"
                >
                <div class="ma-0 pa-0" v-if="!cofirmAccountCard.layout" >
                  <p class="text-secondary h6 bs_fw-300 pb-3 text-white text-center">
                    {{ titleForm }}
                  </p>

                  <!-- Inicio Formulario de Iniciar Sesión -->
                  <form v-show="login" class="py-3 pt-lg-3 w-100 md-mx-w-550" @submit.prevent="logIn">
                    <div class="mb-3">
                      <input
                        id="signup-5-Email"
                        v-model="email"
                        type="email"
                        class="form-control text-white"
                        placeholder="Correo Electrónico"
                        required
                      >
                    </div>
                    <div class="mb-3">
                      <input
                        id="signup-5-Password"
                        v-model="password"
                        type="password"
                        class="form-control text-white"
                        placeholder="Contraseña"
                        required
                      >
                    </div>
                    <button type="submit" class="btn btn-primary w-100 text-white">
                      Iniciar sesión
                    </button>
                    <g-login class="mt-3 w-100 d-inline-block" @credential="fillCredential" />
                    <p class="pt-3 small mb-0" style="color: lightgray">
                      No tienes una Cuenta?
                      <a class="text-decoration-none" @click.prevent="show('Crea una Cuenta')">Crea una Cuenta</a>
                    </p>
                  </form>
                  <!-- Final Formulario de Iniciar Sesión -->

                  <!-- Inicio Formulario de Crear una Cuenta -->
                  <form v-show="!login" class="py-3 pt-lg-3 w-100 md-mx-w-550" @submit.prevent="createAccount(false)">
                    <div class="mb-3">
                      <input
                        id="signup-5-name"
                        v-model="userName"
                        type="text"
                        class="form-control text-white"
                        placeholder="Nombre"
                        aria-describedby="infotext"
                        required
                      >
                    </div>
                    <div class="mb-3">
                      <input
                        id="signup-5-Email"
                        v-model="email"
                        type="email"
                        class="form-control text-white"
                        placeholder="Correo Electrónico"
                        required
                      >
                    </div>
                    <div class="mb-3">
                      <input
                        id="signup-5-Password"
                        v-model="password"
                        type="password"
                        class="form-control text-white"
                        placeholder="Contraseña"
                        required
                      >
                    </div>
                    <div v-if="gLogin && password === ''" class="alert alert-warning" role="alert">
                      Introduzca su contraseña
                    </div>

                    <button type="submit" class="btn btn-primary text-white w-100">
                      Crear Cuenta
                    </button>
                    <g-login class="mt-3 w-100 d-inline-block" @credential="fillCredential" />
                    <p class="small" style="color: lightgray">
                      Ya tienes una cuenta?
                      <a class="text-decoration-none" @click.prevent="show('Iniciar Sesión')">Iniciar sesión</a>
                    </p>
                  </form>

                </div>
                <div v-else>
                    <p>Esperando Confirmación de cuenta</p>
                    <b>{{ cofirmAccountCard.message }}</b>
                </div>
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

<script>
import { mapActions, mapState } from "pinia";
import { decodeCredential } from "vue3-google-login";


import { useUserStore } from "@/store/user/userStore.js";
import { useAuthStore } from "@/store/user/authStore.js";

import GLoginButton from "@/components/GLoginButton.vue";

export default {
  components: {
    "g-login": GLoginButton
  },
  data() {
    return {
      login      : false,
      userName   : "",
      email      : "",
      password   : "",
      gLogin     : false,
      credential : "",
      titleForm  : "Crea una Cuenta",
      confirmAccount: false
    };
  },
  computed: {
    ...mapState(useUserStore, ["cofirmAccountCard"])
  },
  methods: {
    ...mapActions(useUserStore, [
      "createUser",
      "logInUser",
      "createGoogleUser",
      "verifyUser",
      "watingConfirmAccount"
    ]),
    ...mapActions(useAuthStore, ["addAuthToken",]),
    async fillCredential(value) {
      this.credential = value;
      if (this.credential) {
        let userData = decodeCredential(this.credential);

        this.email = userData.email;
        this.userName = userData.email.split("@")[0];

        let verified = await this.verifyUser(this.credential);
        if (verified) await this.createAccount(true);
      } else {
        throw new Error("No se pudo verificar el usuario");
      }
    },
    async createAccount(google) {
      if (!google) {
        const userObj = {
          userName     : this.userName,
          email    : this.email,
          password : this.password
        };

        await this.watingConfirmAccount(userObj);

        // this.addAuthToken(token);
      } else {
        const userObj = {
          name  : this.userName,
          email : this.email,
          token : this.credential
        };

        const token = await this.createGoogleUser(userObj);

        this.addAuthToken(token);
      }
    },
    async logIn() {
      const userObj = {
        email    : this.email,
        password : this.password
      };

      const token = await this.logInUser(userObj);
      this.addAuthToken(token);
    },
    show(title = "") {
      this.titleForm = title;
      this.login = !this.login;
    }
  }
};
</script>

<style scoped>
.position-btn-google {
  /* width: 350px; */
  position: absolute;
  left: 77.5%;
  top: 12.5%;
  transform: translate(-77.5%, -12.5%);
  z-index: 50;
}

@media only screen and (max-width: 600px) {
  .position-btn-google {
    /* width: 100%; */
    left: 50% !important;
    transform: translate(-50%, -12.5%);
  }
}
</style>
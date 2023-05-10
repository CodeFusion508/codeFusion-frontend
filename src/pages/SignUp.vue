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
                  <p class="text-secondary h6 bs_fw-300 pb-3 text-white text-center">
                    {{ titleForm }}
                  </p>

                  <!-- Inicio Formulario de Iniciar Sesión -->
                  <form v-show="login" class="py-3 pt-lg-3 w-100 md-mx-w-550" @submit.prevent="logIn">
                    <div class="mb-3">
                      <input
                        id="signup-5-Email"
                        v-model="email.text"
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
                  <form
                    v-show="!login"
                    novalidate
                    class="py-3 pt-lg-3 w-100 md-mx-w-550 needs-validation"
                    @submit.prevent="createAccount(false)"
                  >
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
                        v-model="email.text"
                        type="email"
                        class="form-control text-white"
                        placeholder="Correo Electrónico"
                        required
                        @keyup="validEmail"
                      >
                      <div v-if="emailErrorMessage != ''" class="text-danger">
                        {{ emailErrorMessage }}
                      </div>
                    </div>
                    <div v-if="email.valid" class="mb-3">
                      <input
                        id="signup-5-Email"
                        v-model="confirmEmail"
                        type="email"
                        class="form-control text-white"
                        placeholder="Confirmar Correo Electrónico"
                        required
                        @keyup="validConfirmEmail"
                      >
                      <div v-if="emailConfirmError != ''" class="text-danger">
                        {{ emailConfirmError }}
                      </div>
                    </div>
                    <div class="mb-3">
                      <input
                        id="signup-5-Password"
                        v-model="password"
                        type="password"
                        class="form-control text-white"
                        placeholder="Contraseña"
                        required
                        @keyup="validPassword"
                      >
                      <div v-if="password.length >= 1" class="progress mt-1" style="height: 5px;">
                        <div
                          :class="['progress-bar', validPassword.colorProgress]"
                          role="progressbar"
                          :style="{ 'width': validPassword.passwordProgress + '%' }"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                      <div v-if="password.length >= 1" class="text-end">
                        <small>{{ validPassword.passwordType }}</small>
                      </div>
                    </div>

                    <div class="mb-3">
                      <input
                        id="signup-5-Password"
                        v-model="confirmPassword"
                        type="password"
                        class="form-control text-white"
                        placeholder="Confirmar Contraseña"
                        required
                        @keyup="validPasswordConfirm"
                      >
                    </div>
                    <div v-if="passwordConfirmError !== ''" class="text-danger">
                      {{ passwordConfirmError }}
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
                  <!-- Final de Formulario de Crear una Cuenta -->
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
import { mapActions } from "pinia";
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
      gLogin     : false,
      credential : "",
      titleForm  : "Crea una Cuenta",
      login      : false,
      // Input values
      userName   : "",
      email      : {
        valid : false,
        text  : ""
      },
      confirmEmail      : "",
      password          : "",
      confirmPassword   : "",
      // Email and password error handling
      emailErrorMessage : "",
      emailConfirmError : "",
      validPassword     : {
        min           : 8,
        strong        : 15,
        message       : "",
        colorProgress : {
          "weak"    : "bg-danger",
          "regular" : "bg-warning",
          "strong"  : "bg-success"
        },
        passwordProgress : 0,
        maxProgress      : 100,
        color            : "",
        passwordType     : ""
      },
      passwordConfirmError: ""
    };
  },
  methods: {
    ...mapActions(useUserStore, [
      "createUser",
      "logInUser",
      "createGoogleUser",
      "verifyUser"
    ]),
    ...mapActions(useAuthStore, ["addAuthToken"]),
    async fillCredential(value) {
      this.credential = value;
      if (this.credential) {
        let userData = decodeCredential(this.credential);

        this.email.text = userData.email;
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
          name     : this.userName,
          email    : this.confirmEmail,
          password : this.confirmPassword
        };

        const token = await this.createUser(userObj);

        this.addAuthToken(token);
      } else {
        const userObj = {
          name  : this.userName,
          email : this.email.text,
          token : this.credential
        };

        const token = await this.createGoogleUser(userObj);

        this.addAuthToken(token);
      }
    },
    async logIn() {
      const userObj = {
        email    : this.email.text,
        password : this.password
      };

      const token = await this.logInUser(userObj);
      this.addAuthToken(token);
    },
    show(title = "") {
      this.titleForm = title;
      this.login = !this.login;
    },
    validEmail() {
      const regEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/gi;

      if (!regEmail.test(this.email.text)) {
        this.email.valid = false;
        this.emailErrorMessage = "El correo no cumple con las características";
      } else {
        this.email.valid = true;
        this.emailErrorMessage = "";
      }
    },
    validConfirmEmail() {
      if (this.email.text !== this.confirmEmail) {
        this.emailConfirmError = "El correo no coindice con el ingresado";
      } else {
        this.emailConfirmError = "";
      }
    },
    checkPassword() {
      const passwordLength = this.password.length;
      let progress = (passwordLength * 100) / this.validPassword.strong;
      let color = "";
      let type = "";

      if (passwordLength >= 1 && passwordLength < this.validPassword.min) {
        color = this.validPassword.colorProgress.weak;
        type = "Débil";
      } else if (passwordLength >= this.validPassword.min && passwordLength < this.validPassword.strong) {
        color = this.validPassword.colorProgress.regular;
        type = "Regular";
      } else {
        color = this.validPassword.colorProgress.strong;
        progress = this.validPassword.maxProgress;
        type = "Fuerte";
      }

      this.validPassword.color = color;
      this.validPassword.passwordProgress = progress;
      this.validPassword.passwordType = type;
    },
    validPasswordConfirm() {
      if (this.password !== this.confirmPassword) return this.passwordConfirmError = "Las contraseñas no coindicen";

      this.passwordConfirmError = "";
    }
  }
};
</script>

<style scoped>
.invalid-input:focus {
  outline: none !important;
}
</style>

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
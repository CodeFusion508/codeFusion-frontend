<template>
  <nav-bar />

  <div class="d-flex justify-content-center mt-5 mb-3">
    <div class="col-lg-4  mt-3">
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="d-flex flex-column align-items-center bg-dark-subtle border-0 p-5 rounded-lg shadow-dark">
              <div v-if="!confirmAccountCard.layout && !recoveryAccount.layout">
                <p class="text-secondary h6 text-white text-center">
                  {{ titleForm }}
                </p>

                <!-- Inicio Formulario de Iniciar Sesión -->
                <form v-show="login" class="py-3 pt-lg-3" @submit.prevent="logIn">
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
                  <button type="submit" class="btn btn-primary w-100 text-white mb-3">
                    Iniciar sesión
                  </button>
                  <a class="py-3" @click.prevent="recoveryAccount.layout = true">¿Has olvidado tu contraseña?</a>
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
                  class="py-3 pt-lg-3"
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
                      @keyup="passwordChanged"
                    >
                  </div>
                  <password-progress ref="passProgress" :password="password" />

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
              <div v-if="confirmAccountCard.layout">
                <p>Esperando Confirmación de cuenta</p>
                <b>{{ confirmAccountCard.message }}</b>
              </div>
              <div v-if="recoveryAccount.layout">
                {{ recoveryAccount.message }}
                <div v-if="recoveryAccount.message === ''">
                  <p>
                    Ingresa el correo electrónico de tu cuenta, posteriormente te enviaremos un mensaje para que
                    puedas recuperar tu cuenta
                  </p>
                  <input
                    v-model="userObj.email"
                    type="text"
                    class="form-control"
                    placeholder="Correo electrónico"
                  >
                  <button class="btn btn-primary form-control mt-3" @click.prevent="eventRecoveryAccount">
                    Enviar
                  </button>
                </div>
                <div v-else>
                  <p>{{ recoveryAccount.message }}</p>
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
import {
  mapActions,
  mapState,
  mapWritableState
} from "pinia";
import { decodeCredential } from "vue3-google-login";

import { useUserStore } from "@/store/user/userStore.js";
import { useAuthStore } from "@/store/user/authStore.js";

import GLoginButton from "@/components/GLoginButton.vue";
import PasswordProgress from "../components/PasswordProgress.vue";

export default {
  components: {
    "g-login"           : GLoginButton,
    "password-progress" : PasswordProgress
  },
  data() {
    return {
      gLogin         : false,
      credential     : "",
      titleForm      : "Crea una Cuenta",
      confirmAccount : false,
      ...mapWritableState(useUserStore, ["recoveryAccount", "userObj"]),
      login          : false,
      // Input values
      userName       : "",
      email          : {
        valid : false,
        text  : ""
      },
      confirmEmail         : "",
      password             : "",
      confirmPassword      : "",
      // Email and password error handling
      emailErrorMessage    : "",
      emailConfirmError    : "",
      passwordConfirmError : ""
    };
  },
  computed: {
    ...mapState(useUserStore, ["confirmAccountCard"])
  },
  methods: {
    ...mapActions(useUserStore, [
      "createUser",
      "logInUser",
      "createGoogleUser",
      "verifyUser",
      "confirmAccountReq",
      "eventRecoveryAccount"
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
          userName : this.userName,
          email    : this.email,
          password : this.password
        };

        await this.confirmAccountReq(userObj);
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
      const regEmail = /^[\w.-]+@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,10}$/i;

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
        this.emailConfirmError = "El correo no coincide con el ingresado";
      } else {
        this.emailConfirmError = "";
      }
    },
    passwordChanged() {
      this.$refs.passProgress.checkPassword();
    },
    validPasswordConfirm() {
      if (this.password !== this.confirmPassword) return this.passwordConfirmError = "Las contraseñas no coinciden";

      this.passwordConfirmError = "";
    }
  }
};
</script>

<style scoped>
.invalid-input:focus {
  outline: none !important;
}

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

@media (max-width: 576px) {
  .col-sm-3 {
    width: 100%;
  }
}
</style>
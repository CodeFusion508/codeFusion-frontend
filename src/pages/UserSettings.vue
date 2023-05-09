<template>
  <nav-bar />
  <div class="container-fluid my-3 d-flex justify-content-center">
    <div class="card col-12 col-sm-8 col-md-6 col-lg-7 col-xl-4 border-0">
      <div class="card-body " style="background-color: #17202A;">
        <h4 class="card-title text-center">
          Configuración de Perfil
        </h4>
        <div class="row px-3">
          <div class="d-flex justify-content-center my-3">
            <div class="style-avatar shadow-lg" :style="{ 'background-image': 'url(' + userObj.avatar.image + ')' }">
              <input
                ref="fileImageProfile"
                type="file"
                hidden
                @change="uploadImage"
              >
              <div
                class="content-save d-flex justify-content-center align-items-center shadow-lg rounded-circle"
                @click="eventSelectedImage"
              >
                <i class="bi bi-camera-fill" />
              </div>
            </div>
          </div>

          <div class="row mx-0">
            <div class="row mx-0 my-1">
              <div class="col-sm-4">
                <label class="w-100 mt-2">Usuario:</label>
              </div>
              <div class="col-sm-8 col-12 px-0">
                <input
                  v-model="userObj.name"
                  type="text"
                  class="form-control"
                  placeholder="Nombre(s) Completo"
                >
              </div>
            </div>

            <div class="row mx-0 my-1">
              <div class="col-sm-4 mt-2">
                <label class="w-100 d-block">Correo:&nbsp&nbsp</label>
              </div>
              <div class="col-sm-8 col-12 px-0">
                <input
                  v-model="userObj.email"
                  type="text"
                  class="form-control"
                  placeholder="Correo Electrónico"
                  @keyup="validEmail"
                >
              </div>
              <div v-if="messageErrorEmail != ''" class="text-danger">
                {{ messageErrorEmail }}
              </div>
            </div>

            <div class="row mx-0 my-1">
              <div class="col-sm-4 mt-2">
                <label class="w-100 d-block text-truncate">Contraseña:</label>
              </div>
              <div class="col-sm-8 col-12 px-0">
                <input
                  v-model="userObj.password"
                  type="text"
                  class="form-control d-block"
                  placeholder="Contraseña"
                  @keyup="validPassword"
                >
              </div>
              <div v-if="userObj.password.length >= 1" class="progress mt-1" style="height: 5px;">
                <div
                  :class="['progress-bar', objValidPassword.colorProgress]"
                  role="progressbar"
                  :style="{'width': objValidPassword.progressPasword+'%'}"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
          </div>

          <button class="btn btn-primary form-control mt-3" @click="updateUser">
            Guardar
          </button>
        </div>
      </div>
    </div>
  </div>
  <nav-footer />
</template>

<script lang="js">
import { mapActions, mapWritableState } from "pinia";

import { useUserStore } from "@/store/user/userStore.js";
import {updateUserReq} from "@/requests/clientRequest.js";

export default {
    data() {
        return {
            email: {
                valid : false,
                text  : ""
            },
            messageErrorEmail : "",
            objValidPassword  : {
                min            : 8,
                strong         : 15,
                message        : "",
                colorsProgress : {
                    "weak": "bg-danger", "regular": "bg-warning", "strong": "bg-success"
                },
                progressPasword : 0,
                maxProgress     : 100,
                colorProgress   : "",
                typePassword    : ""
            }
        };
    },
  computed: {
    ...mapWritableState(useUserStore, ["userObj"])
  },
  async mounted() {
    await this.initialize();
  },
  methods: {
      updateUserReq,
    ...mapActions(useUserStore, ["findUser", "updateUser", "setAvatar"]),
    async initialize() {
      this.userObj.avatar.image = this.userObj.avatar.image === "" ? "../src/assets/profile.jpg" : this.userObj.avatar.image;

      await this.findUser();
    },
    eventSelectedImage() {
      this.$refs.fileImageProfile.click();
    },
    uploadImage(event) {
      const [file] = event.target.files;
      const reader = new FileReader();
      const that = this;

      reader.readAsDataURL(file);
      reader.onload = () => {
        that.userObj.avatar.image = this.result;
        that.userObj.avatar.file = file;
      };
    },
    validPassword() {
        const passwordLength = this.userObj.password.length;
        let progress =  (passwordLength * 100) / this.objValidPassword.strong;
        let color = "";
        let type = "";
        if(passwordLength >= 1 && passwordLength < this.objValidPassword.min) {
            color = this.objValidPassword.colorsProgress.weak;
            type = "Débil";
        } else if(passwordLength >= this.objValidPassword.min && passwordLength < this.objValidPassword.strong) {
            color = this.objValidPassword.colorsProgress.regular;
            type = "Regular";
        } else {
            color = this.objValidPassword.colorsProgress.strong;
            progress = this.objValidPassword.maxProgress;
            type = "Fuerte";
        }
        this.objValidPassword.colorProgress = color;
        this.objValidPassword.progressPasword = progress;
        this.objValidPassword.typePassword = type;
    },
    validEmail() {
        const regEmail = new RegExp(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/, "gi");
        if (!regEmail.test(this.userObj.email)) {
            this.email.valid = false;
            this.messageErrorEmail = "El correo no cumple con las características";
        } else {
            this.email.valid = true;
            this.messageErrorEmail = "";
        }
    }
  }
};
</script>

<style scoped>
.style-avatar {
  width: 150px;
  height: 150px;
  background-color: white;
  border-radius: 50%;
  position: relative;
  background-repeat: no-repeat;
  background-position-x: 2.5px;
  background-size: 150px 150px;
}

.content-save {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: var(--bs-primary);
  color: white;
  font-size: 25px;
  top: 65%;
  left: 65%;
  cursor: pointer;
}
</style>


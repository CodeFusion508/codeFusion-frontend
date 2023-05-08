<template>
  <nav-bar />
  <div class="container-fluid my-3 d-flex justify-content-center" >
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

          <div class="row mx-0" >

            <div class="row mx-0 my-1" >
              <div class="col-sm-4" >
                <label class="w-100 mt-2">Usuario:</label>
              </div>
              <div class="col-sm-8 col-12 px-0" >
                <input
                v-model="userObj.name"
                type="text"
                class="form-control"
                placeholder="Nombre(s) Completo"
              >
              </div>
            </div>

            <div class="row mx-0 my-1" >
              <div class="col-sm-4 mt-2" >
                <label class="w-100 d-block">Correo:&nbsp&nbsp</label>
              </div>
              <div class="col-sm-8 col-12 px-0" >
                <input
                v-model="userObj.email"
                type="text"
                class="form-control"
                placeholder="Correo Electrónico"
              >
              </div>
            </div>

            <div class="row mx-0 my-1" >
              <div class="col-sm-4 mt-2" >
                <label class="w-100 d-block text-truncate">Contraseña:</label>
              </div>
              <div class="col-sm-8 col-12 px-0" >
                <input
                v-model="userObj.password"
                type="text"
                class="form-control d-block"
                placeholder="Contraseña"
              >
              </div>
            </div>

          </div>

          <button class="btn btn-primary form-control mt-3" @click="updatedUser">
            Guardar
          </button>
        </div>
      </div>
    </div>
  </div>
  <nav-footer />
</template>

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

<script lang="js">
import { mapActions, mapWritableState } from "pinia";

import { useUserStore } from "@/store/user/userStore.js";

export default {
  computed: {
    ...mapWritableState(useUserStore, ["userObj"])
  },
  async mounted() {
    await this.initialize();
  },
  methods: {
    ...mapActions(useUserStore, ["findUser", "updatedUser", "setAvatar"]),
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
    }
  }
};
</script>


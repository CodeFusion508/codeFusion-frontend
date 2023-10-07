<template>
  <nav-bar />
  <div class="container-fluid my-3 d-flex justify-content-center mt-5">
    <div class="card col-12 col-sm-8 col-md-6 col-lg-7 col-xl-4 border-0">
      <div class="card-body bg-dark-subtle border-0 rounded-lg shadow-dark">
        <h4 class="card-title text-center">
          Configuración de Perfil
        </h4>
        <div class="row px-3">
          <div class="d-flex justify-content-center my-3">
            <div
              class="style-avatar shadow-sm"
              :style="{ 'background-image': 'url(https://storage.googleapis.com/pai-images/c93b1c94b4ab436da0e5bc4cf7fa502c.jpeg)' }"
            />
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
                  class="form-control text-white"
                  placeholder="Nombre(s) Completo"
                >
              </div>
            </div>

            <div class="row mx-0 my-1">
              <div class="col-sm-4 mt-2">
                <label class="w-100 d-block">Correo:&nbsp;&nbsp;</label>
              </div>
              <div class="col-sm-8 col-12 px-0">
                <input
                  v-model="userObj.email"
                  type="text"
                  class="form-control  text-white"
                  placeholder="Correo Electrónico"
                  @keyup="validEmail"
                >
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
                  class="form-control d-block text-white mb-4"
                  placeholder="Contraseña"
                  @keyup="passwordChanged"
                >
              </div>
              <password-progress ref="passProgress" :password="userObj.password" />
            </div>
          </div>

          <button class="btn btn-primary form-control mt-3" @click="updateUser">
            Guardar
          </button>
        </div>
      </div>
    </div>
  </div>

  <nav-footer class="position-absolute" />
</template>

<script lang="js">
import { mapActions, mapWritableState } from "pinia";

import { useUserStore } from "@/store/user/userStore.js";

import PasswordProgress from "@/components/PasswordProgress.vue";

export default {
  components: {
    "password-progress": PasswordProgress
  },
  computed: {
    ...mapWritableState(useUserStore, ["userObj"])
  },
  async mounted() {
    await this.initialize();
  },
  methods: {
    ...mapActions(useUserStore, ["findUser", "updateUser"]),
    async initialize() {
      this.userObj.avatar.image = this.userObj.avatar.image === "" ? "../src/assets/profile.jpg" : this.userObj.avatar.image;

      await this.findUser();
    },
    eventSelectedImage() {
      this.$refs.fileImageProfile.click();
    },
    passwordChanged() {
      this.$refs.passProgress.checkPassword();
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
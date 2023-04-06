<template>
  <nav-bar />
  <div class="container-fluid my-3 d-flex justify-content-center" style="height: 50vh;">
    <div class="card col-sm-3 col-sx-8 col-12 border-0">
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

          <input
            v-model="userObj.name"
            type="text"
            class="form-control mt-3"
            placeholder="Nombre(s) Completo"
          >
          <input
            v-model="userObj.email"
            type="text"
            class="form-control mt-3"
            placeholder="Correo Electronico"
          >
          <button class="btn btn-primary form-control mt-3" @click="updatedUser">
            Guardar
          </button>
        </div>
      </div>
    </div>
  </div>
  <nav-footer />
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { useUserStore } from "@/store/userStore";

export default {
  computed: {
    ...mapWritableState(useUserStore, ["userObj"])
  },
  async mounted() {
    await this.initialize();
  },
  methods: {
    ...mapActions(useUserStore, ["findUser", "updatedUser"]),
    async initialize() {
      this.userObj.avatar.image = "../src/pages/assets/profile.jpg";
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
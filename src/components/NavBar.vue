<template>
  <nav class="navbar navbar-expand-md bg-dark-subtle">
    <div class="container-fluid">
      <a class="navbar-brand text-white" href="#">
        <img src="../pages/assets/CodeFusion508.ico" alt="an icon of">
        CodeFusion508
      </a>
      <button
        type="button"
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#header1navbarCollapse"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div id="header1navbarCollapse" class="collapse navbar-collapse justify-content-between">
        <ul class="nav nav-pills flex-grow-1">
          <li class="nav-item">
            <router-link to="/" class="nav-link text-white">
              Inicio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/nosotros" class="nav-link text-white">
              De nosotros
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/lecciones" class="nav-link text-white">
              Lecciones
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/articulos" class="nav-link text-white">
              Artículos
            </router-link>
          </li>
        </ul>

        <div v-if="!authToken" class="navbar-nav">
          <div class="bs_header_btn_wrapper bs_signup_btn_blk ms-3">
            <router-link
              to="/session"
              class="nav-item nav-link bg-primary text-white bs_signup_btn rounded gradient-purple"
            >
              Regístrate
            </router-link>
          </div>
        </div>

        <div v-else class="dropstart btn-group">
          <button
            class="btn btn-primary rounded-circle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-person-fill" />
          </button>
          <ul class="dropdown-menu">
            <li>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  {{ userObj.name }}
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/" class="dropdown-item">
                Mi perfil
              </router-link>
            </li>

            <li>
              <router-link to="ajustes" class="dropdown-item">
                Ajustes
              </router-link>
            </li>
            <li><a class="dropdown-item" href="#" @click="logout()">Salir</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from "pinia";

import { useUserStore } from "@/store/userStore";
import { useAuthStore } from "@/store/authStore";

export default {
  computed: {
    ...mapState(useAuthStore, ["authToken"]),
    ...mapState(useUserStore, ["userObj"])
  },
  methods: {
    ...mapActions(useAuthStore, ["delAuthToken"]),
    ...mapActions(useUserStore, ["cleanUser"]),
    logout() {
      this.delAuthToken();
      this.cleanUser();
    }
  }
};
</script>

<style scoped>
.nav-tabs .nav-link {
  background-color: transparent !important;
  font-size: 1rem !important;
  text-decoration: none !important;
  padding: 0.5rem !important;
}

.nav-tabs .nav-link {
  font-size: 1rem !important;
}

.nav-tabs .nav-link {
  padding: 0.5rem !important;
}
</style>
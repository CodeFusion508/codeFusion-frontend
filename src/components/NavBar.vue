<template>
  <nav class="navbar navbar-expand-md bg-dark-subtle">
    <div class="container-fluid">
      <a class="navbar-brand text-white" href="#">
        <img src="../pages/assets/CodeFusion508.ico" alt="an icon of">
        CodeFusion508
      </a>
      <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#header1navbarCollapse">
        <span class="navbar-toggler-icon" />
      </button>
      <div id="header1navbarCollapse" class="collapse navbar-collapse justify-content-between">
        <ul class="nav nav-tabs flex-grow-1">
          <li class="nav-item">
            <router-link to="/" class="nav-link text-white">
              Inicio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/deNosotros" class="nav-link text-white">
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

        <div class="navbar-nav" v-if="getAuthToken === null">
          <div class="bs_header_btn_wrapper bs_signup_btn_blk ms-3">
            <router-link to="/creaSesion"
              class="nav-item nav-link bg-primary text-white bs_signup_btn rounded gradient-purple">
              Regístrate
            </router-link>
          </div>
        </div>

        <div class="dropstart btn-group" v-else>
          <button class="btn btn-primary rounded-circle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-person-fill"></i>
          </button>
          <ul class="dropdown-menu">
            <li>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">{{ userObj.name }}</li>
              </ul>
            </li>
            <li><a class="dropdown-item" href="#">Mi Perfil</a></li>
            <li><a class="dropdown-item" href="#">Mis Cursos</a></li>
            <li><a class="dropdown-item" href="#">Salir</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

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

.icon-profile {
  background-image: url('../pages/assets/profile.png');
  background-size: 50px 50px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<script>
import { useAuthStore } from '../store/authStore'
import { useUserStore } from '../store/userStore'
import { mapState } from 'pinia'
export default {
  computed: {
    ...mapState(useAuthStore, ["getAuthToken"]),
    ...mapState(useUserStore, ["userObj"])
  }
}
</script>
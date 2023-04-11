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
          <li v-for="(item, index) in routes" :key="index" class="nav-item">
            <router-link :to="item.path" :class="['nav-link text-white', item.activated ? 'activated' : '']">
              {{ item.title }}
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
  data: () => {
    return {
      routes: [
        {
          title     : "Inicio",
          path      : "/",
          activated : false,
          meta      : "initialize"
        },
        {
          title     : "De nosotros",
          path      : "/nosotros",
          activated : false,
          meta      : "about"
        },

        {
          title     : "Lecciones",
          path      : "/lecciones",
          activated : false,
          meta      : "lessons"
        },
        {
          title     : "Artículos",
          path      : "/articulos",
          activated : false,
          meta      : "articles"
        }
      ]
    };
  },
  computed: {
    ...mapState(useAuthStore, ["authToken"]),
    ...mapState(useUserStore, ["userObj"])
  },
  mounted() {
    this.initialize();
  },
  methods: {
    ...mapActions(useAuthStore, ["delAuthToken"]),
    ...mapActions(useUserStore, ["cleanUser"]),
    logout() {
      this.delAuthToken();
      this.cleanUser();
    },
    initialize() {
      this.getActivatedMeta();
    },
    getActivatedMeta() {
      const metaName = this.$router.currentRoute.value.meta.name;
      this.routes.filter((value, _) => {
        if (value.meta === metaName) {
          value.activated = true;
        } else {
          value.activated = false;
        }
      });
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

.activated {
  background-color: var(--bs-primary);
}
</style>
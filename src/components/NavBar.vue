<template>
  <nav class="navbar navbar-expand-md bg-dark-subtle">

    <div class="container-fluid">
        
        <a class="navbar-brand text-white col-xl-1 display-desktop mx-0" href="#">
          <img src="../assets/CodeFusion508.ico" alt="an icon of">
          CodeFusion508
        </a>
  
        <button type="button" class="btn text-white display-movil" @click="changeHomePage">
          <i class="fa-solid fa-bars-staggered"></i>
        </button>
        
        <div
        :class="['d-flex justify-content-between content-menu-deslizable col-xl-11 mx-0 px-0', classMenu ? 'menu-actived':'']">
  
          <div class="border-bottom col-sm-12 p-2 display-movil" >
            <a class="navbar-brand text-white" href="#">
              <img src="../assets/CodeFusion508.ico" alt="an icon of">
              CodeFusion508
            </a>
          </div>
          
          <ul class="nav nav-pills flex-grow-1 menu-movil">
            <li v-for="(item, index) in routes" 
            :key="index" :class="['nav-item', item.activated ? 'activated activated-btn-menu' : '']">
              <router-link :to="item.path" :class="['text-white nav-link']">
                  {{ item.title }}
                </router-link>
            </li>
          </ul>
  
          <div class="content-logIn propierty-logIn col-xl-3 col-12" >
  
              <div v-if="!authToken" class="navbar-nav d-flex align-items-center justify-space-center mx-0">
                  <div class="col-xl-5 col-10 bs-primary-navbar rounded-lg text-center">
                    <router-link to="/session" class="nav-link text-white px-3">Ingresar</router-link>
                  </div>
                  <div class="text-center col-xl-2 col-12 px-0"><b>O</b></div>
                  <div class="bs_header_btn_wrapper bs_signup_btn_blk col-xl-5 col-10 gradient-purple rounded-lg text-center" >
                    <router-link to="/session" class="text-white nav-link bs_signup_btn">Regístrate</router-link>
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
                  <span
                    v-if="verificationAlerts !== 0"
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-danger"
                  >
                    {{ verificationAlerts }}
                    <span class="visually-hidden">unread messages</span>
                  </span>
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

    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from "pinia";

import { useUserStore } from "@/store/user/userStore.js";
import { useAuthStore } from "@/store/user/authStore.js";
import { useMenu } from '@/store/MenuStore'

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
      ],
      verificationAlerts: 0
    };
  },
  computed: {
    ...mapState(useAuthStore, ["authToken"]),
    ...mapState(useUserStore, ["userObj"]),
    ...mapState(useMenu, ["classMenu"]),
  },
  mounted() {
    this.initialize();
  },
  methods: {
    ...mapActions(useAuthStore, ["delAuthToken"]),
    ...mapActions(useUserStore, ["cleanUser"]),
    ...mapActions(useMenu, ["changeHomePage"]),
    logout() {
      this.delAuthToken();

      this.cleanUser();
    },
    initialize() {
      this.getActivatedMeta();
    },
    getActivatedMeta() {
      const metaName = this.$router.currentRoute.value.meta.name;

      this.routes.filter((value) => {
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
  /* background-color: var(--bs-primary); */
}

.nav-item {
  border-bottom: solid 2px #6878E2 !important;
  margin-left: 31px;
  margin-right: 31px;
}

.content-menu-deslizable {
  position: relative;
}

.menu-movil {
  width: 50%;
}

@media (max-width: 767px) {
  .content-menu-deslizable {
    display: block !important;
    position: fixed;
    width: 275px;
    height: 100%;
    left: -275px;
    top: 0%;
    background-color: #1A1D20;
    z-index: 120;
  }

  .menu-actived {
    left: 0px;
  }

  .menu-movil {
    width: 100%;
    margin: 0px !important;
  }

  .menu-movil li {
    width: 100%;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    margin-left: 0px !important;
    padding-top: 7.5px;
    padding-bottom: 7.5px;
    margin-top: 13.5px;
    margin-bottom: 13.5px;
    border-bottom: none !important;
    text-align: center;
    font-weight: bolder;
  }

  .activated-btn-menu {
    background: linear-gradient(#6878E2,#7352AB) !important;
  }

  .propierty-logIn {
    border-top: 0.5px solid white;
    padding-top: 15px;
  }

  .propierty-logIn div:nth-child(2) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  

}
</style>
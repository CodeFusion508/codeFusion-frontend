<template>
  <nav class="navbar navbar-expand-md bg-dark-subtle">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
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
        <ul class="nav nav-tabs flex-grow-1">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              Inicio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/deNosotros" class="nav-link">
              De nosotros
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/lecciones" class="nav-link">
              Lecciones
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/articulos" class="nav-link">
              Artículos
            </router-link>
          </li>
        </ul>
        <div class="navbar-nav">
          <div class="bs_header_btn_wrapper bs_signup_btn_blk ms-3">
            <router-link
              to="/creaSesion"
              class="nav-item nav-link bg-primary text-white bs_signup_btn rounded gradient-purple"
            >
              Regístrate
            </router-link>
          </div>
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
</style>
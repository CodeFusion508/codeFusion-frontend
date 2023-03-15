<template>
  <nav class="navbar navbar-expand-md bg-dark-subtle">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/CodeFusion508.ico" alt="">
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
            <router-link to="/inicio" class="nav-link active">
              Inició
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/deNosotros" class="nav-link">
              De Nosotros
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
          <div class="bs_header_btn_wrapper bs_signin_btn_blk">
            <router-link to="/creaSesion" class="nav-item nav-link bs_signin_btn rounded">
              Iniciar Sesión
            </router-link>
          </div>

          <div class="bs_header_btn_wrapper bs_signup_btn_blk">
            <router-link to="/creaSesion" class="nav-item nav-link bg-primary text-white bs_signup_btn rounded">
              Regístrate
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
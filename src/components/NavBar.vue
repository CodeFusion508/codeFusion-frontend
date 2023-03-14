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
            <a href="#" class="nav-link active">Inició</a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">De Nosotros</a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">Lecciones</a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">Artículos</a>
          </li>
        </ul>
        <div class="navbar-nav">
          <div class="bs_header_btn_wrapper bs_signin_btn_blk">
            <a href="#" class="nav-item nav-link bs_signin_btn rounded">Iniciar Sesión</a>
          </div>

          <div class="bs_header_btn_wrapper bs_signup_btn_blk">
            <a href="#" class="nav-item nav-link bg-primary text-white bs_signup_btn rounded">Regístrate</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
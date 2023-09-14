<template>
  <nav-bar />
  <h3 class="text-center mt-3 fw-light fst-italic text-white">
    Developers
  </h3>
  <hr>

  <div class="container mt-4">
    <div class="container-fluid">
      <div class="card mb-4 bg-dark-subtle border-0 shadow-dark">
        <div class="row no-gutters">
          <div class="col-auto m-2">
            <img
              src="https://avatars.githubusercontent.com/u/61888719?v=4"
              alt="Una imagen de Alfredo"
              class="rounded-lg mt-1 ms-1"
              width="200"
              height="200"
            >
          </div>

          <div class="col">
            <div class="card-block px-2 mt-3 pb-3">
              <h5 class="card-title text-white animated-underline">
                Alfredo R <i>- Lead Developer</i>
              </h5>
              <hr>
              <p class="card-text text-white">
                Soy Alfredo, el desarrollador principal de CodeFusion508. Con más de un año y dos meses de experiencia en
                desarrollo web Full-Stack,
                he diseñado por completo este sitio web, abarcando el frontend, backend, la base de datos y las instancias
                de AWS.
                ¡Échale un vistazo a mis otros proyectos en GitHub!
              </p>
              <a href="https://github.com/Alfredo3232" class="btn me-4 gradient-purple text-white"> <i
                class="bi bi-github"
                style="color: white;"
              />
                GitHub</a>
              <a href="https://www.linkedin.com/in/alfredor1/" class="btn gradient-purple text-white"> <i
                class="bi bi-linkedin"
                style="color: white;"
              />
                LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <h3 class="text-center mt-2 fw-light fst-italic text-white">
    Contribuidores
  </h3>
  <hr>

  <div class="container mt-4">
    <div class="container-fluid">
      <div class="card mb-5 bg-dark-subtle border-0 shadow-dark">
        <div class="row no-gutters">
          <div class="col-auto m-2">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="una imagen de una persona"
              class="rounded-lg mt-1  ms-1"
              width="200"
              height="200"
            >
          </div>

          <div class="col">
            <div class="card-block px-2 mt-3 pb-3">
              <h5 class="card-title text-white">
                Contributor 1
              </h5>
              <hr>
              <p class="card-text text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque dolorum, deleniti nulla earum delectus
                eaque? Et, nam reprehenderit maiores quae numquam,
                ipsa ducimus debitis consectetur, similique eveniet officiis suscipit ad.o
              </p>
              <a href="#" class="btn me-4 gradient-purple text-white"> <i class="bi bi-github" style="color: white;" />
                GitHub</a>
              <a href="#" class="btn gradient-purple text-white"> <i class="bi bi-linkedin" style="color: white;" />
                LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav-footer />
</template>

<style>
.animated-underline {
  position: relative;
  display: inline-block;
}

.animated-underline::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: #00ffea;
  transform-origin: bottom left;
  transform: scaleX(0);
  transition: transform 0.3s;
}

.animated-underline:hover::after {
  transform: scaleX(1);
}
</style>
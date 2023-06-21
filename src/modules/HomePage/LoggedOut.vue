<template>
  <div class="bg-image background">
    <div class="px-4 py-5 my-5 text-center">
      <div class="mb-4 display-4">
        <i class="bi bi-code-slash" style="color: white;" />
      </div>
      <h1 class="display-5 fw-bold text-white">
        CodeFusion508
      </h1>
      <div class="col-lg-6 mx-auto text-white">
        <p class="lead">
          Descubre nuestra escuela de desarrollo web. Aprende CSS, HTML, Javascript, NodeJS y más. Crea tus
          propios sitios y servidores con la guía de expertos.
        </p>
        <pre class="lead mb-4 fw-light fst-italic">Únete hoy para impulsar tu carrera!</pre>
        <div class="d-grid gap-2 d-flex justify-content-center">
          <router-link to="/session">
            <button type="button" class="btn btn-lg px-4 gradient-purple text-white">
              Regístrate
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>


  <div class="bs_faq_container bs_faq_layout3">
    <div class="container py-5">
      <h2 class="text-center pt-2 pb-5 fw-bold text-white">
        Preguntas Mas Frecuentes
      </h2>
      <div class="bs_faq_content py-2">
        <div id="accordionFlushExample" class="accordion accordion-flush">
          <div class="accordion-item">
            <h2 id="flush-headingOne" class="accordion-header">
              <button
                class="accordion-button collapsed text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Se Necesita Pagar?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body text-white">
                No, todo en nuestro sitio es completamente gratis. En el futuro tal vez va a ver anuncios o
                una forma
                para ayudarnos pero en el momento no.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 id="flush-headingTwo" class="accordion-header">
              <button
                class="accordion-button collapsed text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Necesito saber matemáticas?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body text-white">
                No, el desarrollo web casi no se necesita saber matemáticas. No mas necesitas las ganas de
                aprender Y
                tiempo.
                También una computadora y conexión para nuestro sitio pero fuera de eso nada.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 id="flush-headingThree" class="accordion-header">
              <button
                class="accordion-button collapsed text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Que tipos de programas necesito en mi computadora?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body text-white">
                <code>Chrome</code> o <code>Firefox</code> cualquier navegador moderno. <code>NodeJS</code>
                para correr Javascript en tu computadora. <code>VSCode</code>
                o <code>VSCodium</code> para tener herramientas que ta ayudan cuando andas programando.
                <code>Git</code> para aguardar tus proyectos, y tengan un terminal.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url('../../assets/background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>
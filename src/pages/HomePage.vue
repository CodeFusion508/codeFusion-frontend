<template>
  <nav-bar />
  <div class="bs_hero-container bs_hero_layout_1">
    <div class="px-4 py-5 my-5 text-center">
      <div class="d-block mx-auto mb-4 display-4">
        <i class="bi bi-code-slash" style="color: white;" />
      </div>
      <h1 class="display-5 fw-bold">
        CodeFusion508
      </h1>
      <div class="col-lg-6 mx-auto text-white">
        <p class="lead mb-4">
          Una escuela para a aprender sobre del desarrollo web. Esta escuela te enseñara CSS, HTML, Javascript, NodeJS Y mas.
          Aprende como construir tus propios sitios, como construir tus propios servidores y mucho mas.
        </p>
        <div class="d-grid gap-2 d-flex justify-content-center">
          <button type="button" class="btn btn-primary btn-lg px-4">
            Regístrate
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="bs_faq_container bs_faq_layout3">
    <div class="container py-5">
      <h2 class="text-center pt-2 pb-5 fw-bold">
        Preguntas Mas Frecuentes
      </h2>
      <div class="bs_faq_content py-2">
        <div class="accordion">
          <div class="accordion-item my-4">
            <h2 id="bs_accordion_faq_layout_2-headingOne" class="accordion-header">
              <button
                class="accordion-button collapsed text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#bs_accordion_faq_layout_2-collapseOne"
                aria-expanded="false"
                aria-controls="bs_accordion_faq_layout_2-collapseOne"
              >
                Se Necesita Pagar?
              </button>
            </h2>
            <div
              id="bs_accordion_faq_layout_2-collapseOne"
              class="accordion-collapse collapse text-white"
              aria-labelledby="bs_accordion_faq_layout_2-headingOne"
            >
              <div class="accordion-body">
                No, todo en nuestro sitio es completamente gratis. En el futuro tal vez va a ver anuncios o una forma
                para ayudarnos pero en el momento no.
              </div>
            </div>
          </div>

          <div class="accordion-item my-4">
            <h2 id="bs_accordion_faq_layout_2-headingTwo" class="accordion-header">
              <button
                class="accordion-button collapsed text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#bs_accordion_faq_layout_2-collapseTwo"
                aria-expanded="false"
                aria-controls="bs_accordion_faq_layout_2-collapseTwo"
              >
                Necesito saber matemáticas?
              </button>
            </h2>
            <div
              id="bs_accordion_faq_layout_2-collapseTwo"
              class="accordion-collapse collapse text-white"
              aria-labelledby="bs_accordion_faq_layout_2-headingTwo"
            >
              <div class="accordion-body">
                No, el desarrollo web casi no se necesita saber matemáticas. No mas necesitas las ganas de aprender Y tiempo.
                También una computadora y conexión para nuestro sitio pero fuera de eso nada.
              </div>
            </div>
          </div>

          <div class="accordion-item my-4">
            <h2 id="bs_accordion_faq_layout_2-headingThree" class="accordion-header">
              <button
                class="accordion-button collapsed text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#bs_accordion_faq_layout_2-collapseThree"
                aria-expanded="false"
                aria-controls="bs_accordion_faq_layout_2-collapseThree"
              >
                Que tipos de programas necesito en mi computadora?
              </button>
            </h2>
            <div
              id="bs_accordion_faq_layout_2-collapseThree"
              class="accordion-collapse collapse text-white"
              aria-labelledby="bs_accordion_faq_layout_2-headingThree"
            >
              <div class="accordion-body">
                Chrome o Firefox cualquier navegador moderno. NodeJS para correr Javascript en tu computadora. VSCode o VSCodium para tener herramientas que ta ayudan
                cuando andas programando. Git para aguardar tus proyectos, y tengan un terminal.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav-footer />
</template>
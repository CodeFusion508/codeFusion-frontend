<template>
  <nav-bar />

  <div v-for="(item, indexMain) in 2" :key="indexMain">
    <h3 class="text-center mt-3 fw-light fst-italic text-white">
      Modulo {{ indexMain + 1 }}
    </h3>

    <div class="row g-0 text-center">
      <div v-for="(itemModule, index) in modules[indexMain].module" :key="index"
        :class="['col-12 px-2 my-3', modules[indexMain].module.length <= 3 ? 'col-sm' : 'col-sm-3']">
        <div class="card bg-dark-subtle border-0 shadow-sm">
          <div class="card-body">
            <h5 class="card-title text-white">
              {{ itemModule.titleModule }}
            </h5>
            <hr>
            <p class="card-text text-white truncate-text-line">
              {{ itemModule.descriptionModule }}
            </p>
            <router-link :to="itemModule.page" class="btn gradient-purple text-white">
              Aprende
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <hr v-if="item < 2">
  </div>


  <!-- <h3 class="text-center mt-3 fw-light fst-italic text-white">
    Modulo 3
  </h3>
  <hr>
  <div class="row g-0 text-center">
    <div class="col m-3">
      <div class="card bg-dark-subtle border-0 shadow-sm">
        <div class="card-body">
          <h5 class="card-title text-white">
            Entendiendo El Servidor
          </h5>
          <hr>
          <p class="card-text text-white">
            Entender el lado del servidor implica comprender cómo funciona el software que se ejecuta en el servidor y
            cómo interactúa con los clientes para proporcionar servicios y datos a través de la red. Es esencial para
            desarrollar
            aplicaciones web y servicios en línea confiables y seguros.
          </p>
          <router-link to="/lecciones/modulo" class="btn gradient-purple text-white">
            Aprende
          </router-link>
        </div>
      </div>
    </div>
    <div class="col m-3">
      <div class="card bg-dark-subtle border-0 shadow-sm">
        <div class="card-body">
          <h5 class="card-title text-white">
            MySQL
          </h5>
          <hr>
          <p class="card-text text-white">
            MySQL es un software de base de datos que se utiliza para crear, modificar y administrar bases de datos
            relacionales.
            Permite a los usuarios almacenar, organizar y acceder a grandes cantidades de información de manera eficiente
            y segura.
          </p>
          <router-link to="/lecciones/modulo" class="btn gradient-purple text-white">
            Aprende
          </router-link>
        </div>
      </div>
    </div>
    <div class="col m-3">
      <div class="card bg-dark-subtle border-0 shadow-sm">
        <div class="card-body">
          <h5 class="card-title text-white">
            MongoDB
          </h5>
          <hr>
          <p class="card-text text-white">
            MongoDB es un sistema de gestión de bases de datos NoSQL que se utiliza para almacenar y acceder a grandes
            cantidades de datos no estructurados
            o semiestructurados.Es escalable y flexible, lo que lo hace ideal para aplicaciones web modernas y otras
            aplicaciones
            que requieren un almacenamiento de datos rápido y dinámico.
          </p>
          <router-link to="/lecciones/modulo" class="btn gradient-purple text-white">
            Aprende
          </router-link>
        </div>
      </div>
    </div>
    <div class="col m-3">
      <div class="card bg-dark-subtle border-0 shadow-sm">
        <div class="card-body">
          <h5 class="card-title text-white">
            MVC
          </h5>
          <hr>
          <p class="card-text text-white">
            MVC (Model-View-Controller) es un patrón de arquitectura de software utilizado para separar la lógica de
            negocios,
            la interfaz de usuario y la manipulación de datos en una aplicación web. Esto permite una mayor modularidad,
            mantenimiento
            y escalabilidad de la aplicación al separar las responsabilidades en componentes distintos.
          </p>
          <router-link to="/lecciones/modulo" class="btn gradient-purple text-white">
            Aprende
          </router-link>
        </div>
      </div>
    </div>
  </div> -->
  <nav-footer />
</template>

<style>
.truncate-text-line {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
</style>

<script>
export default {
  data: () => ({
    modules: [
      {
        module: [
          {
            titleModule: "HTML", descriptionModule: `HTML (HyperText Markup Language) es un lenguaje utilizado para crear páginas web y
            otra información que puede ser mostrada en un navegador web`, page: '/lecciones/modulo'
          },
          {
            titleModule: "CSS", descriptionModule: `CSS (Cascading Style Sheets) es un lenguaje de estilo utilizado para describir la presentación de un
            documento escrito en HTML o XML,
            incluyendo colores, diseño y fuentes.`, page: '/lecciones/modulo'
          },
          {
            titleModule: "Javascript", descriptionModule: `JavaScript es un lenguaje de programación utilizado principalmente para crear páginas web interactivas y
            aplicaciones web,
            así como para la programación del lado del servidor con Node.js.`, page: '/lecciones/modulo'
          },
        ]
      },
      {
        module: [
          {
            titleModule: "React CDN", descriptionModule: `React CDN es una herramienta que ayuda a los desarrolladores a usar la biblioteca de JavaScript React
            en sus sitios web de manera rápida y sencilla, sin necesidad de preocuparse por configurar y mantener la
            biblioteca en sus servidores.
            Esto permite la creación de sitios web interactivos y eficientes con facilidad.`, page: '/lecciones/modulo'
          },
          {
            titleModule: "NodeJS", descriptionModule: `Node.js es un ambiente de ejecución de JavaScript y utilizado para la
            creación de aplicaciones del lado del servidor,
            permitiendo la ejecución de código JavaScript fuera del navegador web.`, page: '/lecciones/modulo'
          },
          {
            titleModule: "React/Babel", descriptionModule: `React es una herramienta que ayuda a construir interfaces interactivas y reutilizables, mientras que
            Babel es una herramienta que transforma el código JavaScript moderno en una versión compatible con navegadores
            antiguos.
            Juntos, React/Babel hacen que sea más fácil para los desarrolladores crear aplicaciones web modernas y
            eficientes con una sintaxis más sencilla de entender y mantener.`, page: '/lecciones/modulo'
          },
          {
            titleModule: "Redux", descriptionModule: `Redux es una herramienta que ayuda a los desarrolladores a manejar la información y eventos de la aplicación
            de una manera más fácil y organizada, lo que hace que la aplicación sea más escalable y fácil de mantener.
            Esto se logra al separar el estado de la aplicación de los componentes de la interfaz de usuario.`, page: '/lecciones/modulo'
          },
          {
            titleModule: "Redux", descriptionModule: `Redux es una herramienta que ayuda a los desarrolladores a manejar la información y eventos de la aplicación
            de una manera más fácil y organizada, lo que hace que la aplicación sea más escalable y fácil de mantener.
            Esto se logra al separar el estado de la aplicación de los componentes de la interfaz de usuario.`, page: '/lecciones/modulo'
          },
        ]
      }
    ]
  })
}
</script>
<template>
  <footer class="bg-body-tertiary bg-dark-subtle mt-auto footer-mobile">
    <div class="container pt-4">
      <div class="row">
        <div class="col-xl-3 col-12 content-left-footer">
          <div class="title-responsive">
            <b style="font-size: 24px;">CodeFusion508</b>
          </div>
          <div class="col-12 py-3 content-description-mobile">
            <span style="font-size: 12px;">Descubre nuestra escuela de desarrollo web. Aprende CSS, HTML, Javascript,
              NodeJS y más. Crea tus propios sitios y servidores con la guía de expertos.</span>
          </div>
          <hr class="display-mobile">
          <div class="row justify-space-center">
            <div class="col-12 display-desktop">
              <b style="font-size: 12px;">Redes Sociales</b>
            </div>
            <div class="col-xl-6 content-netsocial">
              <b style="font-size: 24px;"><i class="fa-brands fa-github" /></b>
              <b class="px-2" style="font-size: 24px;"><i class="fa-brands fa-facebook" /></b>
              <b class="px-1" style="font-size: 24px;"><i class="fa-brands fa-youtube" /></b>
            </div>
          </div>
        </div>

        <div class="content-menu-options-mobile col-xl-6">
          <div class="col-xl-6 col-5 content-menu-center">
            <ul id="FirtsMenu">
              <li
                v-for="(item, index) in listMenu"
                :key="item"
                :style="{
                  'border-left': 'solid 4px ' + item.color,
                  'background-color': item.activated ? item.color : 'transparent',
                  'color': item.activated ? 'white' : ''
                }"
                @mouseover="effectHoverInMenu('listMenu', index)"
                @mouseout="noneEffectHoverInMenu('listMenu', index)"
              >
                {{ item.text }}
              </li>
            </ul>
          </div>
          <div class="col-xl-6 col-7 content-menu-center">
            <ul id="SecondMenu">
              <li
                v-for="(item, index) in listContent"
                :key="item"
                :style="{
                  'border-left': 'solid 4px ' + item.color,
                  'background-color': item.activated ? item.color : 'transparent',
                  'color': item.activated ? 'white' : ''
                }"
                @mouseover="effectHoverInMenu('listContent', index)"
                @mouseout="noneEffectHoverInMenu('listContent', index)"
              >
                {{ item.text }}
              </li>
            </ul>
          </div>
        </div>

        <div class="col-xl-3">
          <div class="col-12">
            <b style="font-size: 14px; color: white;">Suscribete</b>
          </div>
          <div class="col-12 my-2">
            <span style="font-size: 12px; color: white;">Recibe nuestra notificaciones de novedades</span>
          </div>
          <div class="col-12 input-group-suscribe">
            <input type="text" placeholder="Correo electrónico">
            <button><i class="fa-solid fa-paper-plane" /></button>
          </div>
        </div>
      </div>

      <hr>

      <div class="col-12 text-center py-1 pb-3">
        <span>CodeFusion508</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => {
    return {
      listMenu: [
        { text: "Inicio", color: "#6878E2", activated: false },
        { text: "Acerca de", color: "#7352AB", activated: false },
        { text: "Lecciones", color: "#A0616A", activated: false },
        { text: "Articulos", color: "#FF6584", activated: false }
      ],
      listContent: [
        { text: "Aprende HTML", color: "#FF6584", activated: false },
        { text: "Aprende Css", color: "#A0616A", activated: false },
        { text: "Aprende Javascript", color: "#00FF00", activated: false },
        { text: "Aprende Vuejs", color: "#7352AB", activated: false },
        { text: "Aprende Reactjs", color: "#6878E2", activated: false }
      ]
    };
  },
  methods: {
    effectHoverInMenu(property = "", index = 0) {
      this[property][index].activated = true;
    },
    noneEffectHoverInMenu(property = "", index = 0) {
      this[property][index].activated = false;
    }
  }
};
</script>

<style scoped>
.content-left-footer b,
span {
  color: white;
}

.footer-mobile {
  display: flex;
}

.content-menu-center ul li {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  list-style: none;
}

.content-menu-options-mobile {
  display: flex;
}

.input-group-suscribe {
  display: flex;
}

.input-group-suscribe input {
  width: 80%;
  height: 40px;
  padding-left: 10px;
}

.input-group-suscribe input:focus {
  outline: none !important;
}

.input-group-suscribe button {
  width: 20%;
  border: none !important;
  background-color: #6878E2;
  height: 40px;
  color: white;
}

.input-group-suscribe button:focus {
  outline: none !important;
}

@media (max-width: 767px) {
  .title-responsive {
    text-align: center !important;
  }

  .content-netsocial {
    text-align: center !important;
  }

  .content-description-mobile {
    text-align: justify;
  }

  .content-menu-options-mobile {
    display: flex;
    padding-top: 25px;
  }

  .footer-mobile {
    padding-left: 10px;
    padding-right: 10px;
    display: block;
  }

}
</style>
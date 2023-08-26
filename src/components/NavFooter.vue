<template>
  <footer class="bg-body-tertiary bg-dark-subtle mt-auto footer-movil">
    <div class="container pt-4">
      
      <div class="row" >

        <div class="col-xl-3 col-12 content-left-footer" >
          <div class="title-responsive" >
            <b style="font-size: 24px;" >CodeFusion508</b>
          </div>
          <div class="col-12 py-3 content-description-movil" >
            <span style="font-size: 12px;">Descubre nuestra escuela de desarrollo web. Aprende CSS, HTML, Javascript, NodeJS y más. Crea tus propios sitios y servidores con la guía de expertos.</span>
          </div>
          <hr class="display-movil" >
          <div class="row justify-space-center" >
            <div class="col-12 display-desktop" ><b style="font-size: 12px;">Redes Sociales</b></div>
            <div class="col-xl-6 content-netsocial" >
              <b  style="font-size: 24px;"><i class="fa-brands fa-github"></i></b>
              <b class="px-2" style="font-size: 24px;"><i class="fa-brands fa-facebook"></i></b>
              <b class="px-1" style="font-size: 24px;"><i class="fa-brands fa-youtube"></i></b>
            </div>
          </div>
        </div>

        <div class="content-menu-options-movil col-xl-6" >
          <div class="col-xl-6 col-5 content-menu-center" >
            <ul id="FirtsMenu">
              <li v-for="(item, index) in listMenu" 
              @mouseover="effectHoverInMenu('listMenu', index)" @mouseout="noneEffectHoverInMenu('listMenu', index)"
              :style="{'border-left': 'solid 4px '+item.color,
              'background-color': item.actived ? item.color:'transparent',
              'color': item.actived ? 'white':''
              }">{{ item.text }}</li>
            </ul> 
          </div>
          <div class="col-xl-6 col-7 content-menu-center" >
            <ul id="SecondMenu">
              <li v-for="(item, index) in listContent" 
              @mouseover="effectHoverInMenu('listContent', index)" @mouseout="noneEffectHoverInMenu('listContent', index)"
              :style="{
                'border-left': 'solid 4px '+item.color,
                'background-color': item.actived ? item.color:'transparent',
                'color': item.actived ? 'white':''
              }">{{ item.text }}</li>
            </ul> 
          </div>
        </div>

        <div class="col-xl-3" >
          <div class="col-12" ><b style="font-size: 14px; color: white;" >Suscribete</b></div>
          <div class="col-12 my-2" ><span style="font-size: 12px; color: white;">Recibe nuestra notificaciones de novedades</span></div>
          <div class="col-12 input-group-suscribe" >
            <input type="text" placeholder="Correo electronico">
            <button><i class="fa-solid fa-paper-plane"></i></button>
          </div>
        </div>
      </div>

      <hr>

      <div class="col-12 text-center py-1 pb-3" >
        <span>CodeFusion508  @Copyrigth 2023</span>
      </div>
<!-- 
      <div class="d-flex bd-highlight mb-3 mt-2">
        <div class="bd-highlight text-white">
          <img src="../assets/CodeFusion508.ico" alt="an icon of" class="bs_footer_logo">
          CodeFusion508
        </div>
      </div>

      <hr>
      <div class="d-flex row justify-content-center py-4 bs_footer_row">
        <div class="col-xs-6  col-sm bs_footer_col">
          <h4 class="bs_footer_widget_title text-white">
            Otros Productos
          </h4>
          <ul class="bs_footer_widget_links">
            <li><a href="#" target="_blank" class="text-decoration-none text-reset"><span>Backend API</span></a></li>
          </ul>
        </div>

        <div class="col-xs-6  col-sm bs_footer_col">
          <h4 class="bs_footer_widget_title text-white">
            Necesitas Ayuda?
          </h4>
          <ul class="bs_footer_widget_links">
            <li><a href="#" target="_blank" class="text-decoration-none text-reset"><span>Articulo 1</span></a></li>
            <li><a href="#" target="_blank" class="text-decoration-none text-reset"><span>Articulo 2</span></a></li>
          </ul>
        </div>

        <div class="col-xs-6  col-sm bs_footer_col">
          <h4 class="bs_footer_widget_title text-white">
            Elances
          </h4>
          <ul class="bs_footer_widget_links">
            <li><a href="#" target="_blank" class="text-decoration-none text-reset"><span>Documentación</span></a></li>
            <li>
              <a href="#" target="_blank" class="text-decoration-none text-reset"><span>GitHub</span></a>
            </li>
          </ul>
        </div>
      </div>
      <hr> -->

    </div>
  </footer>
</template>

<script>
export default {
  data: () =>({
    listMenu: [
      { text: 'Inicio', color: '#6878E2', actived: false },
      { text: 'Acerca de', color: '#7352AB', actived: false  },
      { text: 'Lecciones', color: '#A0616A', actived: false  },
      { text: 'Articulos', color: '#FF6584', actived: false  },
    ],
    listContent: [
      { text: 'Aprende HTML', color: '#FF6584', actived: false },
      { text: 'Aprende Css', color: '#A0616A', actived: false },
      { text: 'Aprende Javascript', color: '#FFFFFF', actived: false },
      { text: 'Aprende Vuejs', color: '#7352AB', actived: false },
      { text: 'Aprende Reactjs', color: '#6878E2', actived: false },
    ]
  }),
  methods: {
    effectHoverInMenu(propied = '', index = 0) {
      this[propied][index].actived = true;
    },
    noneEffectHoverInMenu(propied = '', index = 0) {
      this[propied][index].actived = false;
    }
  }
}
</script>

<style scoped>
.content-left-footer b, span {
  color: white;
}

.footer-movil {
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
.content-menu-options-movil {
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

  .content-description-movil {
    text-align: justify;
  }

  .content-menu-options-movil {
    display: flex;
    padding-top: 25px;
  }

  .footer-movil {
    padding-left: 10px;
    padding-right: 10px;
    display: block;
  }

}
</style>
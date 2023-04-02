<template>
  <main>
    <div class="card border-0 shadow-sm">
      <div class="card-body">
        <h6 class="card-title text-center py-3">
          <h4>Day {{ listTask[0] }}</h4>
        </h6>
        <div>
          <ul class="timeline">
            <li>
              <!--<h3>{{ item.title }}</h3>-->
              <p>{{ listTask[1] }}</p>
            </li>
              <li>
                <h3>Exp: {{ listTask[2] }}</h3>
              </li>
              <hr class="hr hr-blurry" />
             <li class="event" data-date="2:30 - 4:00pm">
                            <h3>Video introductorio</h3>
                            <p>
                                En este video aprenderás los conceptos básicos del lenguaje y la configuración inicial del IDE.
                            </p>
                 <router-link to="/lecciones/dias/contenido/leccionVideo" class="dropdown-item">
                     Watch Video
                 </router-link>
                        </li>
                        <li class="event" data-date="5:00 - 8:00pm">
                            <h3>Enunciado</h3>
                            <router-link to="/lecciones/dias/contenido/leccionTexto" class="dropdown-item">
                                Leer Enunciado
                            </router-link>
                        </li>
                        <li class="event" data-date="8:30 - 9:30pm">
                            <h3>Problemas</h3>
                            <p>
                                A continuación una breve descripción del problema que deberá tener en cuenta para resolver el cuestionario.
                            </p>
                            <router-link to="/lecciones/dias/contenido/problemas" class="dropdown-item">
                                Leer el problema
                            </router-link>
                        </li>
                        <li class="event" data-date="10:00 - 10:30pm">
                            <h3>Cuestionario</h3>
                            <p>
                                Tendrá 30 minutos para resolver el cuestionario. Asegúrese de haber leído el enunciado y el problema.
                            </p>
                            <router-link to="/lecciones/dias/contenido/cuestionario" class="dropdown-item">
                                Comenzar el cuestionario
                            </router-link>
                        </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
    props: ["listTask", "day"],
    /*props: {
        day: {
            type     : Number,
            required : true,
            default  : 1
        }
    }*/
};
</script>

<style scoped>
body {
    margin-top: 20px;
}

.timeline {
    border-left: 3px solid #727cf5;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    background: rgba(114, 124, 245, 0.09);
    margin: 0 auto;
    letter-spacing: 0.2px;
    position: relative;
    line-height: 1.4em;
    font-size: 1.03em;
    padding: 50px;
    list-style: none;
    text-align: left;
    max-width: 70%;
}

@media (max-width: 767px) {
    .timeline {
        max-width: 100%;
        padding: 25px;
    }
}

.timeline h1 {
    font-weight: 300;
    font-size: 1.4em;
}

.timeline h2,
.timeline h3 {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 10px;
}

.timeline .event {
    border-bottom: 1px dashed #e8ebf1;
    padding-bottom: 25px;
    margin-bottom: 25px;
    position: relative;
}

@media (max-width: 767px) {
    .timeline .event {
        padding-top: 30px;
    }
}

.timeline .event:last-of-type {
    padding-bottom: 0;
    margin-bottom: 0;
    border: none;
}

.timeline .event:before,
.timeline .event:after {
    position: absolute;
    display: block;
    top: 0;
}

.timeline .event:before {
    left: -207px;
    content: attr(data-date);
    text-align: right;
    font-weight: 100;
    font-size: 0.9em;
    min-width: 120px;
}

@media (max-width: 767px) {
    .timeline .event:before {
        left: 0px;
        text-align: left;
    }
}

.timeline .event:after {
    -webkit-box-shadow: 0 0 0 3px #727cf5;
    box-shadow: 0 0 0 3px #727cf5;
    left: -55.8px;
    background: #fff;
    border-radius: 50%;
    height: 9px;
    width: 9px;
    content: "";
    top: 5px;
}

@media (max-width: 767px) {
    .timeline .event:after {
        left: -31.8px;
    }
}

.rtl .timeline {
    border-left: 0;
    text-align: right;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    border-right: 3px solid #727cf5;
}

.rtl .timeline .event::before {
    left: 0;
    right: -170px;
}

.rtl .timeline .event::after {
    left: 0;
    right: -55.8px;
}
</style>
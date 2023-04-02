<template>
  <nav-bar />
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 col-12 pb-3">
        <div class="row justify-content-between">
          <div v-for="(item, index) in 4" :key="index" class="col-sm-3 px-3">
            <div
              :class="
                [
                  'content-item-day d-flex justify-content-center align-items-center',
                  indexContentDay === index ? 'content-activeted' : ''
                ]"
              @click="getContentDay(index)"
            >
              <h6>Dia {{ item }}</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-sm-12 col-lg-12 col-12">
        <time-line :day="indexContentDay + 1" :list-task="listDays[indexContentDay]" />
      </div>
    </div>
  </div>
  <nav-footer />
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useAuthStore } from "../../../store/authStore";
import { useModuleStore } from "@/store/moduleStore.js";

import TimeLine from "./TimeLine.vue";

export default {
    components : { "time-line": TimeLine },
    data       : () => {
        return {
            indexContentDay : 0,
            listDays        : [
                {
                    task: [
                        {
                            title   : "Introducción a HTML",
                            content : `En esta lección en video,
                                        aprenderás todo lo básico sobre HTML, desde la estructura de una página hasta cómo agregar texto, imágenes y
                                        otros elementos.
                                        Descubrirás por qué HTML es la base de todos los sitios web y cómo puedes utilizarlo para crear páginas web
                                        increíbles.`,
                            hours: "08:00 - 10:00 horas"
                        },
                        {
                            title   : "Problemas",
                            content : `En esta sección, te presentaremos una serie de problemas que pondrán a prueba todo lo que aprendiste en la
                                        sección anterior.
                                        Desde codificación hasta situaciones del mundo real, estos problemas te ayudarán a consolidar tu comprensión de
                                        los conceptos de desarrollo web
                                        y a mejorar tus habilidades.`,
                            hours: "10:00 - 11:00 horas"
                        },
                        {
                            title   : "Introducción al Proyecto",
                            content : `En esta sección, los estudiantes aprenderán a crear una página de perfil y un portfolio personalizado
                                        utilizando
                                        HTML y CSS.
                                        El proyecto tiene como objetivo proporcionar a los estudiantes experiencia práctica en el desarrollo web y
                                        permitirles demostrar sus habilidades
                                        y proyectos a posibles empleadores. La tarea consistirá en crear un sitio web sencillo pero atractivo que
                                        refleje su estilo personal y habilidades
                                        en el desarrollo web.`,
                            hours: "11:00 - 12:00 horas"
                        },
                        {
                            title   : "Lección de HTML avanzado",
                            content : `En esta sección, los estudiantes continuarán su aprendizaje de HTML y se enfocarán en conceptos más avanzados
                                        como listas ordenadas y desordenadas,
                                        y tablas. Los estudiantes aprenderán cómo utilizar estas herramientas para organizar y presentar información
                                        de
                                        manera clara y efectiva en sus sitios web.
                                        Además, también se les presentarán otros conceptos como formularios y estructuras de página, que les
                                        permitirán
                                        crear sitios web más sofisticados.
                                        Esta sección es una continuación natural de la sección anterior y proporcionará a los estudiantes una
                                        comprensión más profunda de HTML
                                        y su uso en el desarrollo web.`,
                            hours: "12:00 - 13:00 horas"
                        },
                        {
                            title   : " Solución en video del proyecto",
                            content : `En esta sección, los estudiantes tendrán acceso a un video instructivo que les ayudará a resolver cualquier
                                        problema que puedan encontrar mientras
                                        trabajan en el proyecto. El video también puede ser útil para aquellos que buscan una manera diferente de
                                        abordar el proyecto.
                                        El instructor guiará a los estudiantes a través del proceso de construir la página de perfil y portfolio,
                                        proporcionando consejos y trucos útiles
                                        a lo largo del camino. Esta sección es una herramienta valiosa para aquellos que necesitan una guía adicional
                                        para completar el proyecto
                                        o desean profundizar en su conocimiento del desarrollo web.`,
                            hours: "13:00 - 14:00 horas"
                        },
                        {
                            title   : "Última lección de HTML en video",
                            content : `En esta sección final, los estudiantes tendrán la oportunidad de profundizar en su comprensión de HTML y
                                        aprender cómo estructurar
                                        sus páginas de manera efectiva. El instructor cubrirá temas más avanzados, como el uso del header y la
                                        etiqueta
                                        "script",
                                        así como la introducción de las etiquetas "style" y "form". Los estudiantes también aprenderán cómo incorporar
                                        diferentes tipos de contenido,
                                        como imágenes y multimedia, en sus páginas web. Esta sección proporcionará una revisión completa de los
                                        conceptos cubiertos en la sección anterior
                                        y ayudará a los estudiantes a consolidar su comprensión de HTML y su uso en el desarrollo web.`,
                            hours: "14:00 - 15:00 horas"
                        }
                    ]
                },
                {
                    task: [
                        {
                            title   : "Lección de HTML avanzado",
                            content : `En esta sección, los estudiantes continuarán su aprendizaje de HTML y se enfocarán en conceptos más avanzados
                                        como listas ordenadas y desordenadas,
                                        y tablas. Los estudiantes aprenderán cómo utilizar estas herramientas para organizar y presentar información
                                        de
                                        manera clara y efectiva en sus sitios web.
                                        Además, también se les presentarán otros conceptos como formularios y estructuras de página, que les
                                        permitirán
                                        crear sitios web más sofisticados.
                                        Esta sección es una continuación natural de la sección anterior y proporcionará a los estudiantes una
                                        comprensión más profunda de HTML
                                         y su uso en el desarrollo web.`,
                            hours: "12:00 - 13:00 horas"
                        },
                        {
                            title   : " Solución en video del proyecto",
                            content : `En esta sección, los estudiantes tendrán acceso a un video instructivo que les ayudará a resolver cualquier
                                        problema que puedan encontrar mientras
                                        trabajan en el proyecto. El video también puede ser útil para aquellos que buscan una manera diferente de
                                        abordar el proyecto.
                                        El instructor guiará a los estudiantes a través del proceso de construir la página de perfil y portfolio,
                                        proporcionando consejos y trucos útiles
                                        a lo largo del camino. Esta sección es una herramienta valiosa para aquellos que necesitan una guía adicional
                                        para completar el proyecto
                                        o desean profundizar en su conocimiento del desarrollo web.`,
                            hours: "13:00 - 14:00 horas"
                        },
                        {
                            title   : "Última lección de HTML en video",
                            content : `En esta sección final, los estudiantes tendrán la oportunidad de profundizar en su comprensión de HTML y
                                        aprender cómo estructurar
                                        sus páginas de manera efectiva. El instructor cubrirá temas más avanzados, como el uso del header y la
                                        etiqueta
                                        "script",
                                        así como la introducción de las etiquetas "style" y "form". Los estudiantes también aprenderán cómo incorporar
                                        diferentes tipos de contenido,
                                        como imágenes y multimedia, en sus páginas web. Esta sección proporcionará una revisión completa de los
                                        conceptos cubiertos en la sección anterior
                                        y ayudará a los estudiantes a consolidar su comprensión de HTML y su uso en el desarrollo web.`,
                            hours: "14:00 - 15:00 horas"
                        }
                    ]
                }
            ]
        };
    },
    computed: {
        ...mapState(useAuthStore, ["authToken"]),
    },
    mounted() {
        this.gDays();
    },
    methods: {
        ...mapActions(useModuleStore, ["getDays"]),
        async gDays() {
            const response = await this.getDays();
            const dayData = [];
            console.log(response);
            response.node.forEach((item, index) => {
                dayData.push([item.properties.dayNo, item.properties.desc, item.properties.exp]);
            });
            console.log(dayData);
            this.listDays = dayData;
        },
        getContentDay(index = 0) {
            this.indexContentDay = index;
        },
        fastClean (array) {
            const dayData = [];
            return dayData;
        },
    }
};
</script>

<style>
.content-item-day {
    height: 55px;
    border-bottom: 1px solid #727cf5;
    cursor: pointer;
}

.content-item-day:hover {
    background-color: rgba(114, 124, 245, 0.09);
}

.content-activeted {
    background-color: rgba(114, 124, 245, 0.09);
}
</style>


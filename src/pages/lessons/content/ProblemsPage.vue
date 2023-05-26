<template>
  <nav-bar />

  <div class="container">
    <div class="container mt-3 mb-3 text-center">
      <h1 class="fw-lighter fs-3">
        <b>{{ text }}</b>
      </h1>
    </div>
    <hr>

    <vue-monaco-editor @click="contentLosses = []" v-model:value="code" language="html" theme="vs-dark" height="400px" />

    <ul>
      <li v-for="item in contentLosses">
        {{ item }}
      </li>
    </ul>

    <div class="d-flex justify-content-end mt-2 mb-4">
      <div class="col-sm-2 col-12">
        <button class="btn btn-primary form-control" @click="evaluarCode">
          Aceptar
        </button>
      </div>
    </div>

  </div>
  <nav-footer />
</template>

<script>
import { mapActions } from "pinia";
import { useUserStore } from "@/store/user/userStore.js";

export default {
  data() {
    return {
      text: "Hola, en esta problema necesitan crear párrafo con una imagen",
      code: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
        <body>
            
        </body>
      </html>
      `,
      labelsRequerid: [
        { 
          label: 'p',
          context: true
        },
        {
          label: 'img',
          content: true
        }
      ],
      contentLosses: []
    };
  },
  methods: {
    // ...mapActions(useUserStore, ["createdRelation"])
    evaluarCode() {

      const parserHtml = new DOMParser()

      const htmlBody = parserHtml.parseFromString(this.code, 'text/html')

      this.labelsRequerid.forEach(label => {
        const elementsLabelsBody = htmlBody.querySelectorAll(label.label)
        if(elementsLabelsBody.length >= 1) {
          elementsLabelsBody.forEach(element => {
            if(label.label != 'img') {
              if(element.innerHTML === '') {
                this.contentLosses.push('La etiqueta <'+label.label+'></'+label.label+'> debe contener texto')
              }
              return
            }
            if(element.src === '') {
              this.contentLosses.push('La etiqueta <'+label.label+'></'+label.label+'> debe tener contenido')
            }
          })
          return
        }
        this.contentLosses.push('El contenido debe de tener le etiqueta <'+label.label+'></'+label.label+'>')
      })
      
    }
  }
};
</script>
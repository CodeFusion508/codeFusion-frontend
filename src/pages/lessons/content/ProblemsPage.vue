<template>
  <nav-bar />

  <div class="container flex-grow-1">
    <div class="container mt-3 mb-3 text-center">
      <h1 class="fw-lighter fs-3 text-white">
        <b>{{ result[contIndex].node.title }}</b>
      </h1>
      <p class="text-white pt-2">
        {{ result[contIndex].node.desc }}
      </p>
    </div>
    <hr>

    <vue-monaco-editor
      v-model:value="code"
      :language="result[contIndex].node.language || 'javascript'"
      theme="vs-dark"
      width="70vw"
      height="70vh"
    />

    <div class="container mt-4">
      <div class="container-fluid">
        <div class="card mb-4 bg-dark-subtle border-0 shadow-dark p-4">
          <pre
            class="text-monospace p-3 text-white"
          >{{ userCode || "Esta es tu consola, presiona el botón para correr tu código.\nTambién puedes mirar tu código en mas detalle en los Dev Tools(Inspeccionar) ------->" }}</pre>
        </div>
      </div>
    </div>



    <div class="d-flex justify-content-end mt-2 mb-4">
      <div class="col-sm-2 col-12">
        <button class="btn form-control gradient-purple rounded-lg text-white" @click="languageHandler">
          Correr
        </button>
      </div>
    </div>
  </div>

  <nav-footer />
</template>

<script>
import { mapActions, mapState } from "pinia";

import { useUserStore } from "@/store/user/userStore.js";
import { useContentStore } from "@/store/lessons/contentStore.js";

export default {
  data() {
    return {
      code     : "",
      userCode : ""
    };
  },
  computed: {
    ...mapState(useContentStore, ["contIndex", "result"])
  },
  created() {
    if (this.result[this.contIndex].node.preCode) this.code = this.result[this.contIndex].node.preCode;
  },
  methods: {
    ...mapActions(useUserStore, ["createdRelation"]),
    languageHandler() {
      const lang = this.result[this.contIndex].node.language || "javascript";

      if (lang === "javascript") {
        this.runJS();
      } else if (lang === "html") {
        this.runHTML();
      }
    },
    async runJS() {
      let originalConsoleLog = console.log;
      let consoleOutput = "";

      console.log = function (message) {
        consoleOutput += message + "\n";
        originalConsoleLog.apply(console, arguments);
      };

      let error;
      try {
        const result = await eval(this.code);

        if(result === this.result[this.contIndex].node.expectedResult) {
          // Send request of passed result
          // Show that answer was correct to the user
        } else {
          // Send request of failed result
          // Show that answer was not correct to the user
        }

        this.userCode = "Valor Retornado: " + result + "\n";
      } catch (err) {
        error = err;
      }

      console.log = originalConsoleLog;

      if (error) {
        this.userCode = "Error: " + error;
      } else {
        this.userCode += "Logger: " + consoleOutput;
      }
    },
    runHTML() {
      const previewWindow = window.open();
      previewWindow.document.body.innerHTML = this.code;
    }
  }
};
</script>

<style scoped>
.container.flex-grow-1 {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
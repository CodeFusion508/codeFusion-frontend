<template>
  <nav-bar />

  <div class="container flex-grow-1">
    <div class="container mt-3 mb-3 text-center">
      <h1 class="fw-lighter fs-3">
        <b>{{ result[contIndex].desc }}</b>
      </h1>
    </div>
    <hr>

    <vue-monaco-editor
      v-model:value="code"
      :language="lang"
      theme="vs-dark"
      width="70vw"
      height="70vh"
    />

    <div class="container mt-4">
      <div class="container-fluid">
        <div class="card mb-4 bg-dark-subtle border-0 shadow-dark p-4">
          <pre
            class="text-monospace p-3 text-white"
          >{{ userCode || "Esta es tu consola, presiona el botón para correr tu código" }}</pre>
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
      text     : "Hola, en esta problema necesitan crear párrafo con una imagen",
      lang     : this.result[this.contIndex].language || "javascript",
      code     : "",
      userCode : ""
    };
  },
  computed: {
    ...mapState(useContentStore, ["contIndex", "result"])
  },
  methods: {
    ...mapActions(useUserStore, ["createdRelation"]),
    languageHandler() {
      if (this.lang === "javascript") {
        this.runJS();
      } else if(this.lang === "html") {
        this.runHTML();
      }
    },
    async runJS() {
      /* eslint-disable */
      let originalConsoleLog = console.log;
      let consoleOutput = "";

      console.log = function (message) {
        consoleOutput += message + "\n";
        originalConsoleLog.apply(console, arguments);
      };

      let error;
      try {
        this.userCode = await eval(this.code);
      } catch (err) {
        error = err;
      }

      console.log = originalConsoleLog;
      /* eslint-enable */

      if (error) this.userCode = "Error: " + error;
      else this.userCode = consoleOutput;
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
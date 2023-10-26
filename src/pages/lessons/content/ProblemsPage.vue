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
      :language="result[contIndex].language || 'javascript'"
      theme="vs-dark"
      width="70vw"
      height="70vh"
    />

    <div class="d-flex justify-content-end mt-2 mb-4">
      <div class="col-sm-2 col-12">
        <button class="btn btn-primary form-control" @click="createdRelation">
          Aceptar
        </button>
      </div>
    </div>
  </div>

  <nav-footer />
</template>

<script>
import { mapActions, mapState } from "pinia";
import ivm from "isolated-vm";

import { useUserStore } from "@/store/user/userStore.js";
import { useContentStore } from "@/store/lessons/contentStore.js";

export default {
  data() {
    return {
      text : "Hola, en esta problema necesitan crear párrafo con una imagen",
      code : ""
    };
  },
  computed: {
    ...mapState(useContentStore, ["contIndex", "result"])
  },
  methods: {
    ...mapActions(useUserStore, ["createdRelation"]),
    runCode() {
      const code = `++count;`;
      // setting rules for a new vm process
      const isolate = new ivm.Isolate({ memoryLimit: 50 /* MB */ });
      // probable parses the code to actually run it later
      const script = isolate.compileScriptSync(code);

      // Like the name implies this keeps the context of the code, almost like a mini vm instance
      // This would be really cool to provide more customization of testing of our code
      const context = isolate.createContextSync();
      // The "context code" before the actual code actually runs
      context.evalSync("let count = 0;");

      // script.runSync(context); actually executes the code and we get back the results
      console.log(script.runSync(context)); // Prints "1"
      console.log(script.runSync(context)); // Prints "2"
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
<template>
  <nav-bar />

  <div class="container">
    <div class="container mt-3 mb-3 text-center">
      <h1 class="fw-lighter fs-3">
        <b>{{ text }}</b>
      </h1>
    </div>
    <hr>

    <vue-monaco-editor
      v-model:value="code"
      language="html"
      theme="vs-dark"
      height="400px"
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
import { mapActions } from "pinia";

import { useUserStore } from "@/store/user/userStore.js";

export default {
  data() {
    return {
      text : "Hola, en esta problema necesitan crear párrafo con una imagen",
      code : ""
    };
  },
  methods: {
    ...mapActions(useUserStore, ["createdRelation"])
  }
};
</script>
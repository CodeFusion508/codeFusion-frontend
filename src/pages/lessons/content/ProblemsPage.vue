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
import { mapActions, mapState } from "pinia";

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
    ...mapActions(useUserStore, ["createdRelation"])
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
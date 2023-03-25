<template>
  <nav-bar />

  <div class="container">
    <div class="container mt-3 mb-3 text-center">
      <h1 class="fw-lighter fs-3">
        <b>{{ text }}</b>
      </h1>
    </div>
    <hr>

    <div class="form-floating mt-3">
      <textarea
        id="floatingTextarea2"
        class="container-code"
        placeholder=""
        style="height: 300px"
      />
      <label for="floatingTextarea2" />
    </div>

    <div class="d-flex justify-content-end mt-2 mb-4">
      <div class="col-sm-2 col-12">
        <button class="btn btn-primary form-control">
          Aceptar
        </button>
      </div>
    </div>
  </div>

  <nav-footer />
</template>


<script>
export default {
  data() {
    return {
      text: "Hola, en esta problema necesitan crear párrafo con una imagen"
    };
  }
};
</script>

<style scoped>
.container-code {
  width: 100%;
  height: 200px;
  background-color: #273746;
  color: white;
  font-size: 14px;
  border: none;
  padding: 15px;
}

.container-code:focus {
  outline: none;
}
</style>
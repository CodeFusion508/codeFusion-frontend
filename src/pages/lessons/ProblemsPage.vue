<template>
  <nav-bar />
  <div class="container mt-3 mb-3 text-center">
    <h1 class="fw-lighter fs-3">
      {{ text }}
    </h1>
  </div>
  <hr>

  <div class="form-floating mt-3">
    <textarea
      id="floatingTextarea2"
      class="form-control text-white"
      placeholder="Leave a comment here"
      style="height: 300px"
    />
    <label for="floatingTextarea2">Codigo</label>
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
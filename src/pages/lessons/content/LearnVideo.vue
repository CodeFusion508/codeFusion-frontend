<template>
  <nav-bar />
  <div style="position: fit-content; overflow: hidden; width: 90%;" class="mx-auto pt-3">
    <iframe
      style="height: 95vh; width: 100%;"
      :src="result[contIndex].node.link"
      title="YouTube video player"
      frameborder="1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
  </div>

  <div class="rounded bg-body-tertiary mb-5 p-3 text-white fs-6 font-monospace me-5 ms-5 mt-3 mx-auto">
    <p>
      {{ result[contIndex].node.desc }}
    </p>
  </div>

  <nav-footer class="pt-4" style="width: 100%" />
</template>

<script>
import { mapState } from "pinia";

import { useContentStore } from "@/store/lessons/contentStore.js";

export default {
  computed: {
    ...mapState(useContentStore, ["result", "contIndex"])
  }
};
</script>
<template>
  <nav-bar />
  <div style="position: fit-content; overflow: hidden; width: 80%;" class="mx-auto">
    <iframe
      class="vw-100 vh-100"
      :src="result[contIndex].link"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
  </div>

  <div class="rounded bg-body-tertiary vw-100 mb-3 p-2 text-white fs-6 font-monospace">
    <img
      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      class="rounded float-start me-3 mb-2"
      style="width: 200px; height: 200px;"
      alt="a filler image"
    >
    <p>
      {{ result[contIndex].desc }}
    </p>
    <p>
      Here goes the info that we get from the MD
    </p>
  </div>

  <nav-footer />
</template>
<script>
import {mapState} from "pinia";
import {useContentStore} from "@/store/contentStore.js";
import {useDaysStore} from "@/store/daysStore.js";

export default {
  name     : "learn-video",
  computed : {
      ...mapState(useContentStore, ["contIndex"]),
      ...mapState(useDaysStore, ["result"])
  },
    created() {
    console.log(this.result[this.contIndex], "result received on learn video");
    },
  methods: {
  }
};
</script>
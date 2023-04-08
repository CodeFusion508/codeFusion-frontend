<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <nav-bar />
  <div class="container-md">
    <md-block :mdContent="md" />
  </div>

  <nav-footer />
</template>

<script>
import { mapState, mapActions } from "pinia";

import { contentStore } from "@/store/moduleStore.js";

export default {
  data() {
    return {
      md: ""
    };
  },
  computed: {
    ...mapState(contentStore, ["lesson"])
  },
  beforeMount() {
    this.getMd("section1/javascript/day1/lessonText.md");
  },
  methods: {
    ...mapActions(contentStore, ["getText"]),
    async getMd(path) {
      const data = await this.getText(path);

      this.md = data;
    }
  }
};
</script>

<style>
md-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

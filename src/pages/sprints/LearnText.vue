<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <nav-bar />

  <div class="container-md">
    <md-block :mdContent="lesson" />
  </div>

  <nav-footer />
</template>

<script>
import { mapState, mapActions } from "pinia";

import { useContentStore } from "@/store/lessons/contentStore.js";
import { useDaysStore } from "@/store/lessons/daysStore.js";

export default {
  computed: {
    ...mapState(useContentStore, ["lesson", "contIndex"]),
    ...mapState(useDaysStore, ["result"])
  },
  created() {
    this.getText(this.result[this.contIndex].path);
  },
  methods: {
    ...mapActions(useContentStore, ["getText"])
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

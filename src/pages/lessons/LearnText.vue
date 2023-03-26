<template>
  <nav-bar />
  <div class="container-md">
    <md-block :mdContent="md" />
  </div>

  <nav-footer />
</template>

<script>
import { mapState, mapActions } from "pinia";

import { useModuleStore } from "../../store/moduleStore.js";

export default {
  data() {
    return {
      md: ""
    };
  },
  computed: {
    ...mapState(useModuleStore, ["lesson"])
  },
  beforeMount() {
    this.getMd("section1/javascript/day1.md");

  },
  methods: {
    ...mapActions(useModuleStore, ["getText"]),
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

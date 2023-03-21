<template>
  <nav-bar />
  <h1>Learn Text</h1>

  <md-block :src="md" />

  <nav-footer />
</template>

<script>
import { mapState, mapActions } from "pinia";

import { useModuleStore } from "../../store/moduleStore";

export default {
  data() {
    return {
      md: ""
    };
  },
  computed: {
    ...mapState(useModuleStore, ["lessons"])
  },
  created() {
    this.getMd("javascript/day1.md");
  },
  methods: {
    ...mapActions(useModuleStore, ["getLesson"]),
    getMd(path) {
      const data = this.getLesson(path);

      this.md = data;
    }
  }
};
</script>
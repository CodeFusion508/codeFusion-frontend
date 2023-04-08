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

import { useContentStore } from "@/store/contentStore.js";
import {useDaysStore} from "@/store/daysStore.js";

export default {
    created() {
      this.getText(this.result[this.contIndex].path);
        console.log(this.result[this.contIndex], "result received on learnText");
        console.log(this.lesson, "lesson received on learnText");
    },
  computed: {
    ...mapState(useContentStore, ["lesson", "contIndex"]),
      ...mapState(useDaysStore, ["result"])
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

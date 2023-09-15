<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <nav-bar />


  <div class="container pt-5">
    <div class="row">
      <div class="col-md-12">
        <md-block :mdContent="lesson" class="md-block-height" />
      </div>
    </div>
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

<style scoped>
md-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.md-block-height {
  height: 60vh;
}
</style>

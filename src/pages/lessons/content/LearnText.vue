<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <nav-bar />


  <div class="container pt-4 w-100" style="min-height: 100vh;">
    <div class="row">
      <div class="col-md-12">
        <md-block :mdContent="lesson" class="flex-grow-1" />
      </div>
    </div>
  </div>

  <nav-footer style="margin-top: 50px !important;" />
</template>

<script>
import { mapState, mapActions } from "pinia";

import { useContentStore } from "@/store/lessons/contentStore.js";

export default {
  computed: {
    ...mapState(useContentStore, ["lesson", "contIndex", "result"])
  },
  async created() {
    await this.getText(this.result[this.contIndex].node.path);
  },
  methods: {
    ...mapActions(useContentStore, ["getText"])
  }
};
</script>

<style scoped>
md-block {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 100%
}
</style>

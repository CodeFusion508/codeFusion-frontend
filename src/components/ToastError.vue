<template>
  <main>
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
      <div
        id="liveToast"
        :class="['toast hide border-0 shadow-sm', layout ? 'activated' : '']"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-header bg-danger">
          <img src="../assets/warning.png" width="32" class="rounded me-2">
          <strong class="me-auto text-white">{{ title }}</strong>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
            @click="close"
          />
        </div>
        <div class="toast-body">
          {{ text }}
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from "pinia";

import { useToastStore } from "@/store/toastStore.js";

export default {
  computed: {
    ...mapState(useToastStore, ["text", "title", "layout"])
  },
  methods: {
    ...mapActions(useToastStore, ["close"])
  }
};
</script>

<style scoped>
.activated {
  display: block !important;
}
</style>
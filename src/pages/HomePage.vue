<template>
  <nav-bar />

  <div v-if="authToken">
    <h1>Authenticated</h1>
  </div>

  <logged-out v-else />

  <nav-footer />
</template>

<script>
import { mapState } from "pinia";

import LoggedOut from "../modules/home/LoggedOut.vue";

import { useAuthStore } from "../store/authStore";

export default {
  components: {
    "logged-out": LoggedOut
  },
  computed: {
    ...mapState(useAuthStore, ["authToken"])
  },
};
</script>
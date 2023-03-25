<template>
  <nav-bar />

  <log-in v-if="authToken"></log-in>
  <logged-out v-else />

  <nav-footer />
</template>

<script>
import { mapState } from "pinia";

import LoggedOut from "../modules/home/LoggedOut.vue";
import LogIn from "../modules/home/LogIn.vue";

import { useAuthStore } from "../store/authStore";

export default {
  components: {
    "logged-out": LoggedOut,
    "log-in": LogIn
  },
  computed: {
    ...mapState(useAuthStore, ["authToken"])
  },
};
</script>
<template>
  <nav-bar />

  <logged-in v-if="authToken" />
  <logged-out v-else />

  <nav-footer />
</template>

<script>
import { mapState } from "pinia";

import LoggedOut from "../modules/home/LoggedOut.vue";
import loggedIn from "../modules/home/loggedIn.vue";

import { useAuthStore } from "../store/authStore";

export default {
  components: {
    "logged-out" : LoggedOut,
    "logged-in"  : loggedIn
  },
  computed: {
    ...mapState(useAuthStore, ["authToken"])
  },
};
</script>
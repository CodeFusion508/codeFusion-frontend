<template>
  <nav-bar />

  <logged-in v-if="authToken" />
  <logged-out v-else />

  <nav-footer />
</template>

<script>
import { mapState } from "pinia";

import LoggedOut from "@/modules/home/LoggedOut.vue";
import LoggedIn from "@/modules/home/LoggedIn.vue";

import { useAuthStore } from "@/store/user/authStore.js";

export default {
  components: {
    "logged-out" : LoggedOut,
    "logged-in"  : LoggedIn
  },
  computed: {
    ...mapState(useAuthStore, ["authToken"])
  }
};
</script>
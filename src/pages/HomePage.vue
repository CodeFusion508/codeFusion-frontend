<template>
  <nav-bar />

  <logged-in v-if="authToken" />
  <logged-out v-else />

  <nav-footer />
</template>

<script>
import { mapState } from "pinia";

import LoggedOut from "@/modules/HomePage/LoggedOut.vue";
import LoggedIn from "@/modules/HomePage/LoggedIn.vue";

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
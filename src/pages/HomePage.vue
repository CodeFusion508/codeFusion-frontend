<template>
  <nav-bar />

  <logged-out  />

  <nav-footer />
</template>

<script>
import LoggedOut from "../modules/home/LoggedOut.vue";
import { useAuthStore } from '../store/authStore'
import { mapState } from 'pinia'

export default {
  components: {
    "logged-out": LoggedOut
  },
  computed: {
    ...mapState(useAuthStore, ["authToken"])
  },
};
</script>
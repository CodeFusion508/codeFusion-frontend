<template>
  <nav-bar />

  <div v-if="false" />
  <logged-out v-else />

  <nav-footer />
</template>

<script>
import LoggedOut from "../modules/home/LoggedOut.vue";

export default {
  components: {
    "logged-out": LoggedOut
  }
};
</script>
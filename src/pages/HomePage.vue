<template>
  <nav-bar />

  <div v-if="authToken === null">
    Usuario no inicio sesión
  </div>
  <div v-else >
    Usuario Inicio Sesión
  </div>
  <!-- <div v-if="authToken != ''" />
  <logged-out v-else /> -->

  <nav-footer />
</template>

<script>
import LoggedOut from "../modules/home/LoggedOut.vue";
import { useAuthStore } from '../store/authStore'
import { mapWritableState } from 'pinia'

export default {
  components: {
    "logged-out": LoggedOut
  },
  computed: {
    ...mapWritableState(useAuthStore, ["authToken"])
  },
  methods: {
    initialize() {
      if(localStorage.getItem('tkn') != localStorage.getItem('tkn') != undefined) {
        this.authToken = localStorage.getItem('tkn')
      }
    }
  },
  mounted() {
    this.initialize()
  }
};
</script>
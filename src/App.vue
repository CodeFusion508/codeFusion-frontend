<template>
  <div :class="[classMenu ? 'move-position-menu':'']">
    <router-view />
    <toast-error />
  </div>
</template>

<script>
import { useMenu } from "@/store/MenuStore";
import { mapState } from "pinia";

export default {
  computed: {
    ...mapState(useMenu, ["classMenu"])
  }
};
</script>

<style>
.gradient-purple {
  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to bottom, rgba(102, 126, 234, 1), rgba(118, 75, 162, 1));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to bottom, rgba(102, 126, 234, 1), rgba(118, 75, 162, 1))
}

.text-white {
  color: ghostwhite !important;
}

.shadow-dark {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.rounded-lg {
  border-radius: 0.5rem;
}

.move-position-menu {
  position: relative;
  left: 275px;
  top: 0px !important;
}

:root {
    --bs-primary-navbar: #212529;
}

.bs-primary-navbar {
    background-color: var(--bs-primary-navbar);
}

.display-mobile {
    display: none;
}

.display-desktop {
    display: flex;
}

@media (max-width: 767px) {
    .display-mobile {
        display: block !important;
    }
    .display-desktop {
        display: none;
    }
  }
</style>
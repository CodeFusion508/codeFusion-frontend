<template>
  <router-view />
</template>

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
</style>
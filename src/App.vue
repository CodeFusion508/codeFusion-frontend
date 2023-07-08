<template>
  <router-view />
  <toast-error />
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

.shadow-dark {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.rounded-lg {
  border-radius: 0.5rem;
}
</style>
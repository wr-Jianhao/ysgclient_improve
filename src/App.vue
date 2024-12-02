<script setup></script>

<template>
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
</template>

<style scoped>
#app {
  width: 100%;

  overflow: hidden;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>

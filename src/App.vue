<template>
  <div
    :class="[
      'min-vh-100',
      isDark ? 'bg-dark text-white' : 'bg-light text-dark',
    ]"
  >
    <Navbar :isDark="isDark" @toggleDark="toggleDark" />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/navbarPage.vue";

export default {
  components: { Navbar },
  data() {
    return { isDark: false };
  },
  methods: {
    toggleDark() {
      this.isDark = !this.isDark;
    },
  },
};
</script>

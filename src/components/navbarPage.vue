<template>
  <nav
    class="navbar navbar-expand navbar-light bg-white border-bottom px-4 mb-4"
  >
    <router-link class="navbar-brand" to="/">🛍 Shop</router-link>
    <div class="navbar-nav">
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/cart">Cart</router-link>
      <button
        class="btn btn-sm btn-outline-secondary ms-3"
        @click="$emit('toggleDark')"
      >
        {{ isDark ? "☀️ Light" : "🌙 Dark" }}
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["isDark"],
};
</script>
<style scoped>
.navbar {
  background-color: var(--bs-light);
}
.navbar .nav-link {
  color: var(--bs-dark);
}
.navbar .nav-link:hover {
  color: var(--bs-primary);
}
.navbar .btn {
  color: var(--bs-dark);
}
</style>

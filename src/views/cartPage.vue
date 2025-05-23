<template>
  <div class="container mt-4 animate__animated animate__fadeIn">
    <h2>Your Cart</h2>
    <ul class="list-group mb-3" v-if="cart.length">
      <li
        class="list-group-item d-flex justify-content-between"
        v-for="(item, index) in cart"
        :key="index"
      >
        {{ item.title }} - {{ item.price }} EGP
        <button class="btn btn-danger btn-sm" @click="remove(index)">
          Remove
        </button>
      </li>
    </ul>
    <p v-else>Your cart is empty.</p>
    <p v-if="cart.length" class="fw-bold">Total: {{ total }} EGP</p>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.getters.cartItems;
    },
    total() {
      return this.$store.getters.cartTotal;
    },
  },
  methods: {
    remove(index) {
      this.$store.commit("REMOVE_FROM_CART", index);
    },
  },
};
</script>
<style scoped>
.container {
  max-width: 600px;
}
.list-group-item {
  background-color: var(--bs-light);
  border: 1px solid var(--bs-light);
}
.list-group-item:hover {
  background-color: var(--bs-light);
  border: 1px solid var(--bs-primary);
}
.list-group-item .btn {
  background-color: var(--bs-danger);
  color: white;
}
.list-group-item .btn:hover {
  background-color: var(--bs-danger);
  color: white;
}
</style>

<template>
  <div v-if="product" class="container mt-4 animate__animated animate__fadeIn">
    <div class="card p-3">
      <img :src="product.images[0]" class="card-img-top w-50 mx-auto" />
      <h2>{{ product.title }}</h2>
      <p>{{ product.description }}</p>
      <p><strong>Price:</strong> {{ product.price }} EGP</p>
      <button @click="addToCart" class="btn btn-success">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { product: null };
  },
  async created() {
    const id = this.$route.params.id;
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    if (!res.ok) {
      this.$router.push({ name: "home" });
      return;
    }
    this.product = await res.json();
  },
  methods: {
    addToCart() {
      this.$store.commit("ADD_TO_CART", this.product);
      alert("Added to cart");
    },
  },
};
</script>
<style scoped lang="scss">
@import "~bootstrap/scss/bootstrap";
.container {
  max-width: 800px;
}
.card {
  border: 1px solid var(--bs-light);
  transition: all 0.2s ease-in-out;
}

.card .card-title {
  font-size: 1.5rem;
}
.card .card-text {
  font-size: 1.2rem;
}
.card .btn {
  background-color: var(--bs-success);
  color: white;
}
.card .btn:hover {
  background-color: var(--bs-success);
  color: white;
  transform: scale(1.05);
  transition: all 0.2s ease-in-out;
}
</style>

<template>
  <div class="container animate__animated animate__fadeIn">
    <div class="row">
      <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
        <div class="card h-100">
          <img :src="product.images[0]" class="card-img-top" height="200" />
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.price }} EGP</p>
            <router-link :to="'/product/' + product.id" class="btn btn-primary"
              >Details</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["allProducts"]),
    products() {
      return this.allProducts;
    },
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    ...mapActions(["fetchProducts"]),
  },
};
</script>
<style scoped>
.container {
  max-width: 1200px;
}
.row {
  margin: 0 auto;
}
.card {
  border: 1px solid var(--bs-light);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
.card:hover {
  transform: scale(1.05);
}
.card .card-title {
  font-size: 1.25rem;
}
.card .card-text {
  font-size: 1rem;
}
.card .btn {
  background-color: var(--bs-primary);
  color: white;
}
.card .btn:hover {
  background-color: var(--bs-primary);
  color: white;
}
.card .btn:focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
.card .btn:active {
  background-color: var(--bs-primary);
  color: white;
}
.card .btn:active:focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
.card .card-img-top {
  border-radius: 0.25rem;
}
.card .card-body {
  background-color: var(--bs-light);
}
.card .card-body:hover {
  background-color: var(--bs-light);
}
.card .card-body .btn {
  background-color: var(--bs-primary);
  color: rgb(255, 255, 255);
}
.card .card-body .btn:hover {
  background-color: var(--bs-primary);
  color: white;
}
</style>

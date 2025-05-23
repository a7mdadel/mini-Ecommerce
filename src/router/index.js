import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/homePage.vue";
import ProductDetails from "@/views/productPage.vue";
import Cart from "@/views/cartPage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/product/:id", component: ProductDetails },
  { path: "/cart", component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import HomeView from "@/views/HomeView.vue";
import ProductView from "@/views/ProductView.vue";
import VueBasics from "@/views/VueBasics.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: HomeView},
  { path: "/basics", component: VueBasics },
  { path: "/products", component: ProductView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
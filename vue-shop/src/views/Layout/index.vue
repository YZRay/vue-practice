<template>
  <HeaderFixed />
  <Nav />
  <Header />
  <RouterView />
  <Footer />
</template>

<script setup>
import Nav from "./components/Nav.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import HeaderFixed from "./components/HeaderFixed.vue";
import { useCategoryStore } from "@/stores/category";
import { onMounted } from "vue";

const categoryStore = useCategoryStore();

onMounted(() => {
  categoryStore.getCategory();
});
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
</template>

<script setup>
import HomeCategory from "./components/HomeCategory.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeHot from "./components/HomeHot.vue";
import HomeProduct from "./components/HomeProduct.vue";
import { useProductStore } from "@/stores/product";
import { onMounted } from "vue";

const productStore = useProductStore();

onMounted(() => {
  productStore.getProduct();
});
</script>

<style scoped lang="scss">
.container {
  width: 90%;
  margin-inline: auto;
  position: relative;
}
</style>

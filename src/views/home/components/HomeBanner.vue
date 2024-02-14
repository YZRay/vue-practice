<script setup>
import { useProductStore } from "@/stores/product";

const productStore = useProductStore();
</script>

<template>
  <div class="home-banner">
    <el-carousel height="400px" interval="6000">
      <el-carousel-item
        v-for="item in productStore.productList.slice(0, 7)"
        :key="item.id"
      >
        <img :src="item.images[1]" :alt="item.title" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 100%;
  height: 400px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: center;
  }
}
</style>

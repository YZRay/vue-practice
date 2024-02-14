<script setup>
import HomePanel from "./HomePanel.vue";
import { useProductStore } from "@/stores/product";
import ProductItems from "./ProductItems.vue";
const productStore = useProductStore();
</script>

<template>
  <HomePanel title="POPULAR" sub-title="Popular Product">
    <el-row :gutter="16">
      <el-col
        v-for="item in productStore.productList.slice(0, 4)"
        :key="item.id"
        :span="6"
      >
        <ProductItems :products="item" />
      </el-col>
    </el-row>
  </HomePanel>
</template>

<style scoped lang="scss">
.image {
  width: 100%;
  height: 306px;
  object-fit: cover;
}
.card {
  height: 100%;
}
</style>

<script setup>
import HomePanel from "./HomePanel.vue";
import { getElectronicsProductAPI } from "@/api/home";
import { ref, onMounted } from "vue";
import ProductItems from "./ProductItems.vue";

const electronicsProduct = ref([]);
const getElectronicsProduct = async () => {
  const res = await getElectronicsProductAPI();
  electronicsProduct.value = res.data;
};

onMounted(() => {
  getElectronicsProduct();
});
</script>

<template>
  <HomePanel title="Electronics" sub-title="Latest electronic products">
    <el-row :gutter="16">
      <el-col
        class="card-col"
        v-for="item in electronicsProduct"
        :key="item.id"
        :span="6"
      >
        <ProductItems :products="item" />
      </el-col>
    </el-row>
  </HomePanel>
</template>

<style scoped lang="scss">
.card-col {
  margin-bottom: 1rem;
}
</style>

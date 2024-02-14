<script setup>
import HomePanel from "./HomePanel.vue";
import { useProductStore } from "@/stores/product";

const productStore = useProductStore();
</script>

<template>
  <HomePanel title="POPULAR" sub-title="Popular Product">
    <el-row :gutter="16">
      <el-col
        v-for="item in productStore.productList.slice(5, 9)"
        :key="item.id"
        :span="6"
      >
        <el-card class="card" shadow="hover">
          <img :src="item.images[0]" class="image" :alt="item.title" />
          <div class="content">
            <p>{{ item.title }}</p>
            <el-text class="mx-1" size="large" type="danger"
              >${{ item.price }}</el-text
            >
          </div>
        </el-card>
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

<template>
  <RouterLink to="/">
    <el-card class="card" shadow="hover">
      <img
        v-img-lazy="products.images[0]"
        class="image"
        :alt="products.title"
      />
      <div class="content">
        <p>{{ products.title }}</p>
        <el-text class="mx-1" size="large" type="danger"
          >${{ products.price }}</el-text
        >
      </div>
    </el-card>
  </RouterLink>
</template>

<script setup>
defineProps({
  products: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped>
.card {
  height: 100%;
  .image {
    width: 100%;
    height: 306px;
    object-fit: cover;
  }
}
</style>

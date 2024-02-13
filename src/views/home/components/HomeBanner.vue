<script setup>
import { onMounted, ref } from "vue";
import { getBannerAPI } from "@/api/home";

const bannerList = ref([]);

const getBanner = async () => {
  const res = await getBannerAPI();
  bannerList.value = res.slice(0, 5);
};

onMounted(() => {
  getBanner();
});
</script>

<template>
  <div class="home-banner">
    <el-carousel height="400px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.category.image" :alt="item.category.name" />
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

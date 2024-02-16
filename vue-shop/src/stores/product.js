import { defineStore } from "pinia";
import { getBannerAPI } from "@/api/home";
import { ref } from "vue";

export const useProductStore = defineStore("product", () => {
  const productList = ref([]);
  const getProduct = async () => {
    const res = await getBannerAPI();
    productList.value = res.data;
  };

  return {
    productList,
    getProduct,
  };
});

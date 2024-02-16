import { defineStore } from "pinia";
import { getCategoryAPI } from "@/api/layout";
import { ref } from "vue";

export const useCategoryStore = defineStore("category", () => {
  const categoryList = ref([]);
  const getCategory = async () => {
    const res = await getCategoryAPI();
    categoryList.value = res.data.slice(0, 5);
  };

  return {
    categoryList,
    getCategory,
  };
});

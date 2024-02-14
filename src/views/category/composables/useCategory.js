import { getCategoryAPI } from "@/api/category";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";
export function useCategory() {
  const category = ref({});
  const route = useRoute();
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id);
    category.value = res.data;
  };

  onMounted(() => {
    getCategory();
  });

  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id);
  });

  return {
    category,
  };
}

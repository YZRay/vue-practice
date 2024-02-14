import { ref, onMounted } from "vue";
import { getBannerAPI } from "@/api/home";
import { onBeforeRouteUpdate } from "vue-router";
import { useRoute } from "vue-router";
export function useBanner() {
  const bannerList = ref({});
  const route = useRoute();
  const getBanner = async (id = route.params.id) => {
    const res = await getBannerAPI({
      categoryId: id,
    });
    bannerList.value = res;
  };

  onMounted(() => {
    getBanner();
  });

  onBeforeRouteUpdate((to) => {
    getBanner(to.params.id);
  });

  return {
    bannerList,
  };
}

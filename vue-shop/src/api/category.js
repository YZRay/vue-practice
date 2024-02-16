import httpInstance from "@/utils/http";

export function getCategoryAPI(id) {
  return httpInstance({
    url: `/v1/categories/${id}`,
  });
}

import httpInstance from "@/utils/http";

export function getCategoryAPI() {
  return httpInstance({
    url: "/v1/categories",
  });
}

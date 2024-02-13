import httpInstance from "@/utils/http";

export function getBannerAPI() {
  return httpInstance({
    url: "/v1/products",
  });
}

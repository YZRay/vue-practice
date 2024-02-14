import httpInstance from "@/utils/http";

export function getBannerAPI(params = {}) {
  const { categoryId = "1" } = params;
  return httpInstance({
    url: "/v1/products",
    params: {
      categoryId,
    },
  });
}

export function getElectronicsProductAPI() {
  return httpInstance({
    url: "/v1/products/?categoryId=2",
  });
}

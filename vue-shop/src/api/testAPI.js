import httpInstance from "@/utils/http";

export function getCategory() {
  return httpInstance({
    url: "/v1/products",
  });
}

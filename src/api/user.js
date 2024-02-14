import httpInstance from "@/utils/http";

export function loginAPI({ email, password }) {
  return httpInstance({
    url: "/v1/auth/login",
    method: "POST",
    data: {
      email,
      password,
    },
  });
}

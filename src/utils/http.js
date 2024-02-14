import axios from "axios";
import "element-plus/theme-chalk/el-message.css";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/user";

const httpInstance = axios.create({
  baseURL: "https://api.escuelajs.co/api",
  timeout: 5000,
});

httpInstance.interceptors.request.use(
  (config) => {
    const userStore = useUserStore();
    const token = userStore.userInfo?.data?.access_token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(config);
    return config;
  },
  (e) => Promise.reject(e)
);

httpInstance.interceptors.response.use(
  (res) => res,
  (e) => {
    ElMessage({
      type: "error",
      message: e.response?.data?.message || "An error occurred",
    });
    return Promise.reject(e);
  }
);

export default httpInstance;

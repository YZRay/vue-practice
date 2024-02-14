import axios from "axios";
import "element-plus/theme-chalk/el-message.css";
import { ElMessage } from "element-plus";

const httpInstance = axios.create({
  baseURL: "https://api.escuelajs.co/api",
  timeout: 5000,
});

httpInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (e) => Promise.reject(e)
);

httpInstance.interceptors.response.use(
  (res) => res,
  (e) => {
    ElMessage({ type: "error", message: e.response.data.message });
    return Promise.reject(e);
  }
);

export default httpInstance;

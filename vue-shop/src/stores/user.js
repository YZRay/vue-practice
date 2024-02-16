import { defineStore } from "pinia";
import { loginAPI } from "@/api/user";
import { ref } from "vue";
import axios from "axios";

export const useUserStore = defineStore(
  "user",
  () => {
    const userInfo = ref({});
    const user = ref({});

    const getUserInfo = async ({ email, password }) => {
      const res = await loginAPI({ email, password });

      userInfo.value = res;
      await fetchUserProfile();
    };

    const clearUserInfo = () => {
      userInfo.value = {};
    };

    const fetchUserProfile = async () => {
      try {
        const token = userInfo.value.data?.access_token;
        if (token) {
          const response = await axios.get(
            "https://api.escuelajs.co/api/v1/auth/profile",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          console.log("User Profile:", response.data);
          user.value = response.data;
        } else {
          console.error("No access token found.");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
      user,
    };
  },
  {
    persist: true,
  }
);

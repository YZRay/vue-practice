<template>
  <nav class="nav">
    <div class="container">
      <ul>
        <template v-if="userStore.userInfo.data?.access_token">
          <li>
            <a class="avatar" href="javascript:;">
              <el-avatar :size="32" :src="userStore.user?.avatar" /><span>{{
                userStore.user?.name
              }}</span>
            </a>
          </li>
          <li>
            <el-popconfirm
              title="確定要登出嗎？"
              confirm-button-text="確定"
              cancel-button-text="取消"
              @confirm="confirm"
            >
              <template #reference>
                <a href="javascript:;">登出</a>
              </template>
            </el-popconfirm>
          </li>
          <li>
            <a href="javascript:;">我的訂單</a>
          </li>
          <li>
            <a href="javascript:;">會員中心</a>
          </li>
        </template>
        <template v-else>
          <li>
            <a href="javascript:;" @click="$router.push('/login')">登入</a>
          </li>
          <li>
            <a href="javascript:;">客服中心</a>
          </li>
          <li>
            <a href="javascript:;">關於我們</a>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();
//登出
const confirm = () => {
  userStore.clearUserInfo();
  router.push("/login");
};
</script>

<style lang="scss" scoped>
.nav {
  background-color: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    .avatar {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    li {
      a {
        padding: 0 1rem;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        text-decoration: none;
        i {
          font-size: 0.875rem;
          margin-right: 0.125rem;
        }
        &:hover {
          color: $xtxColor;
        }
      }
      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>

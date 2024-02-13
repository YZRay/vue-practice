<template>
  <header class="header">
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">Shop</RouterLink>
      </h1>
      <ul class="header-nav">
        <li
          class="home"
          v-for="item in categoryStore.categoryList"
          :key="item.id"
        >
          <RouterLink to="/">{{ item.name }}</RouterLink>
        </li>
      </ul>
      <div class="search">
        <el-input
          v-model="input2"
          class="w-50 m-2"
          placeholder="Please Input"
          :prefix-icon="Search"
        />
      </div>
      <el-badge :value="3" class="item">
        <el-button :icon="ShoppingCart" />
      </el-badge>
    </div>
  </header>
</template>

<script setup>
import { ShoppingCart } from "@element-plus/icons-vue";
import { useCategoryStore } from "@/stores/category";

const categoryStore = useCategoryStore();
</script>

<style lang="scss" scoped>
.header {
  background-color: #fff;
  padding: 8px;
  .container {
    display: flex;
    align-items: center;
    width: 90%;
    margin-inline: auto;
  }
  .logo {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      display: block;
      font-size: 3rem;
      width: 100%;
    }
  }
  .header-nav {
    display: flex;
    padding-left: 2.5rem;
    position: relative;
    gap: 2.5rem;
    z-index: 998;
    li {
      width: fit-content;
      text-align: center;
      a {
        font-size: 1rem;
        line-height: 2em;
        height: 2rem;
        display: inline-block;
        text-decoration: none;
        &:hover {
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor;
        }
        .active {
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor;
        }
      }
    }
  }
  .search {
    width: 10.625rem;
    height: 2rem;
    position: relative;
    display: flex;
    gap: 0.25rem;
    align-items: center;
    margin-left: auto;
  }
}
</style>

<template>
  <div class="header-sticky" :class="{ show: y > 100 }">
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
    </div>
  </div>
</template>

<script setup>
import { useScroll } from "@vueuse/core";
import { useCategoryStore } from "@/stores/category";

const { y } = useScroll(window);

const categoryStore = useCategoryStore();
</script>

<style lang="scss" scoped>
.header-sticky {
  padding: 1.5rem;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background: #fff;
  border-bottom: 1px solid #e4e4e4;
  transform: translateY(-100%);
  opacity: 0;
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }
  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;

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
  }
}
</style>

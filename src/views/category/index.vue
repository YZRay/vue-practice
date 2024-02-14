<template>
  <div class="top-category">
    <div class="container m-top-20">
      <div class="bread-container">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item>{{ category?.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="home-banner">
        <el-carousel height="400px" interval="6000">
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.images[1]" :alt="item.title" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="sub-list">
        <h3>全部分類</h3>
        <ul>
          <li v-for="i in bannerList" :key="i.id">
            <RouterLink :to="`/category/sub/${i.id}`">
              <img :src="i.images[1]" />
              <p>{{ i.title }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBanner } from "./composables/useBanner";
import { useCategory } from "./composables/useCategory";

const { category } = useCategory();
const { bannerList } = useBanner();
</script>

<style scoped lang="scss">
.top-category {
  width: 90%;
  margin-inline: auto;
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;
      gap: 1rem;
      li {
        width: 168px;
        height: 160px;

        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 125%;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}

.home-banner {
  width: 100%;
  height: 400px;
  margin: 0 auto;
  z-index: 98;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: center;
  }
}
</style>

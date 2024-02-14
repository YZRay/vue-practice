<script setup>
import { useCategoryStore } from "@/stores/category";

const categoryStore = useCategoryStore();
</script>

<template>
  <div class="home-category">
    <ul class="menu">
      <li v-for="item in categoryStore.categoryList" :key="item.id">
        <RouterLink to="/">{{ item.name }}</RouterLink>
        <div class="layer">
          <h4>商品分類<small>隨機推薦</small></h4>
          <ul>
            <li v-for="index in 5" :key="index">
              <RouterLink to="/">
                <img :src="item.image" :alt="item.name" />
                <div class="info">
                  <p class="name ellipsis-2">
                    {{ item.name }}
                  </p>
                  <p class="desc ellipsis">Good!!!</p>
                  <p class="price"><i>¥</i>20.99</p>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.home-category {
  width: 250px;
  height: 400px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;

  .menu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    li {
      padding-left: 40px;
      height: 55px;
      line-height: 55px;
      &:hover {
        background: $xtxColor;
      }
      a {
        margin-right: 4px;
        color: #fff;

        &:first-child {
          font-size: 16px;
        }
      }
      .layer {
        width: 1000px;
        height: 400px;
        background: rgba(255, 255, 255, 0.8);
        position: absolute;
        left: 250px;
        top: 0;
        display: none;
        padding: 0 15px;
        h4 {
          font-size: 20px;
          font-weight: normal;
          line-height: 80px;
          small {
            margin-left: 8px;
            font-size: 16px;
            color: #666;
          }
        }
        ul {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          align-items: center;
          justify-items: center;
          li {
            width: 90%;
            height: 120px;
            border: 1px solid #eee;
            border-radius: 4px;
            background: #fff;
            padding: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            a {
              display: flex;
              width: 100%;
              height: 100%;
              align-items: center;
              &:hover {
                background: #e3f9f4;
              }
              img {
                width: 95px;
                height: 95px;
              }

              .info {
                padding-left: 10px;
                line-height: 24px;
                overflow: hidden;

                .name {
                  font-size: 16px;
                  color: #666;
                }

                .desc {
                  color: #999;
                }

                .price {
                  font-size: 22px;
                  color: $priceColor;

                  i {
                    font-size: 16px;
                  }
                }
              }
            }
          }
        }
      }

      &:hover {
        .layer {
          display: block;
        }
      }
    }
  }
}
</style>

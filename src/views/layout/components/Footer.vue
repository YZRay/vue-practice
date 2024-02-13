<template>
  <footer class="app_footer">
    <div class="contact">
      <div class="container">
        <dl>
          <dt>客服中心</dt>
          <dd>
            <el-icon size="36"><Headset /></el-icon>線上客服
          </dd>
          <dd>
            <el-icon size="36"><ChatLineRound /></el-icon>問題反饋
          </dd>
        </dl>
        <dl>
          <dt>服務專線</dt>
          <dd class="hotline">
            123-456-7890 <small>周一至周日 8:00-18:00</small>
          </dd>
        </dl>
      </div>
    </div>
    <div class="extra">
      <div class="container">
        <div class="slogan">
          <a href="javascript:">
            <el-icon size="32"><PriceTag /></el-icon>
            <span>價格親民</span>
          </a>
          <a href="javascript:">
            <el-icon size="32"><Timer /></el-icon>
            <span>快速發貨</span>
          </a>
          <a href="javascript:">
            <el-icon size="32"><Cherry /></el-icon>
            <span>品質新鮮</span>
          </a>
        </div>

        <div class="copyright">
          <p>
            <a href="javascript:">觀於我們</a>
            <a href="javascript:">客服中心</a>
            <a href="javascript:">售後服務</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.app_footer {
  overflow: hidden;
  background-color: #f5f5f5;
  .contact {
    background: #fff;
    .container {
      padding: 60px 0 40px 25px;
      display: flex;
      justify-content: space-around;
    }

    dl {
      height: 190px;
      text-align: center;
      padding: 0 72px;
      border-right: 1px solid #f2f2f2;
      color: #999;
    }

    dt {
      line-height: 1;
      font-size: 18px;
    }

    dd {
      margin: 36px 12px 0 0;
      float: left;
      width: 92px;
      height: 92px;
      border: 1px solid #ededed;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      &:hover {
        .iconfont {
          color: $xtxColor;
        }
      }

      &:last-child {
        margin-right: 0;
      }
    }

    .qrcode {
      width: 92px;
      height: 92px;
      padding: 7px;
      border: 1px solid #ededed;
    }

    .download {
      padding-top: 5px;
      font-size: 14px;
      width: auto;
      height: auto;
      border: none;

      span {
        display: block;
      }

      a {
        display: block;
        line-height: 1;
        padding: 10px 25px;
        margin-top: 5px;
        color: #fff;
        border-radius: 2px;
        background-color: $xtxColor;
      }
    }

    .hotline {
      padding-top: 20px;
      font-size: 22px;
      color: #666;
      width: auto;
      height: auto;
      border: none;

      small {
        display: block;
        font-size: 15px;
        color: #999;
      }
    }
  }

  .extra {
    background-color: #333;
  }

  .slogan {
    height: 178px;
    line-height: 58px;
    padding: 48px 80px;
    border-bottom: 1px solid #434343;
    display: flex;
    justify-content: space-between;

    a {
      height: 58px;
      line-height: 58px;
      color: #fff;
      font-size: 28px;

      i {
        font-size: 50px;
        vertical-align: middle;
        margin-right: 10px;
        font-weight: 100;
      }

      span {
        vertical-align: middle;
        text-shadow: 0 0 1px #333;
      }
    }
  }

  .copyright {
    height: 170px;
    padding-top: 40px;
    text-align: center;
    color: #999;
    font-size: 15px;

    p {
      line-height: 1;
      margin-bottom: 20px;
    }

    a {
      color: #999;
      line-height: 1;
      padding: 0 10px;
      border-right: 1px solid #999;

      &:last-child {
        border-right: none;
      }
    }
  }
}
</style>

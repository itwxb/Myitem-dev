<template>
  <div class="index">
    <!-- nav -->
    <div class="nav">
      <van-nav-bar>
        <template #title> <div class="class_nav">确认订单</div></template>
        <template #left
          ><van-icon name="arrow-left" color="black" size="20px"
        /></template>
      </van-nav-bar>
    </div>
    <!-- 卡片联系人  -->
    <van-contact-card
      type="edit"
      :name="currentContact.name"
      :tel="currentContact.tel"
      @click="onEdit"
    />
    <!-- 商品 -->
    <div class="goods">
      <div>
        <van-nav-bar class="nav_title" :border="false">
          <template #left>
            <div class="class_title_left">生鲜快递发货</div></template
          >
          <template #right
            ><div class="class_title_right">商家24H发货，第三方物流配送...</div>
          </template>
        </van-nav-bar>
        <div class="goods_item">
          <div>
            <img
              src="http:\/\/pt.codecore.cn\/uploads\/20211129121322475876549.png"
              alt=""
            />
          </div>
          <div>
            <p>
              新疆小苹果 1.5KG
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$29.9
            </p>
            <span>规格：2.5Kg/箱</span>
            <span>单价：¥ 20.90/箱</span>
            <span>数量：1箱</span>
          </div>
        </div>
      </div>
      <div>
        <van-nav-bar class="nav_title" :border="false">
          <template #left>
            <div class="class_title_left">生鲜快递发货</div></template
          >
          <template #right
            ><div class="class_title_right">商家24H发货，第三方物流配送...</div>
          </template>
        </van-nav-bar>
        <div class="goods_item">
          <div>
            <img
              src="http:\/\/pt.codecore.cn\/uploads\/20211129121322475876549.png"
              alt=""
            />
          </div>
          <div>
            <p>
              新疆小苹果 1.5KG
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$29.9
            </p>
            <span>规格：2.5Kg/箱</span>
            <span>单价：¥ 20.90/箱</span>
            <span>数量：1箱</span>
          </div>
        </div>
      </div>
      <div>
        <van-nav-bar class="nav_title" :border="false">
          <template #left>
            <div class="class_title_left">生鲜快递发货</div></template
          >
          <template #right
            ><div class="class_title_right">商家24H发货，第三方物流配送...</div>
          </template>
        </van-nav-bar>
        <div class="goods_item">
          <div>
            <img
              src="http:\/\/pt.codecore.cn\/uploads\/20211129121322475876549.png"
              alt=""
            />
          </div>
          <div>
            <p>
              新疆小苹果 1.5KG
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$29.9
            </p>
            <span>规格：2.5Kg/箱</span>
            <span>单价：¥ 20.90/箱</span>
            <span>数量：1箱</span>
          </div>
        </div>
      </div>

      <nav1 :active="active"></nav1>
    </div>
    <!-- 发票 -->
    <div class="goods_bottom">
      <van-nav-bar class="nav_title" :border="false">
        <template #left> <div class="class_title_left2">发票</div></template>
        <template #right
          ><div class="class_title_right2">不开发票 ></div>
        </template>
      </van-nav-bar>
    </div>
    <!-- 发票 -->
    <div class="goods_bottom">
      <van-nav-bar class="nav_title" :border="false">
        <template #left>
          <div class="class_title_left2">发大大票</div></template
        >
        <template #right
          ><div class="class_title_left2">不开发票 ></div>
        </template>
      </van-nav-bar>
    </div>
    <!-- 按钮 -->
    <div class="button">
      <div class="button_cont">
        合计<span class="price">29.9</span>

        <van-button round type="info" size="small">圆形按钮</van-button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import nav1 from "../components/nav.vue";

export default {
  name: "index",
  components: {
    nav1,
  },

  data() {
    return {
      active: 3,
      currentContact: {
        name: "北京市昌平区天通苑5号院1号楼1单元1001",
        tel: "小刀  170 0000 0000",
      },
    };
  },
};
</script>
<style scoped>
.index {
  background-color: #f5f5f5;
  height: 1254px;
}
.van-cell__right-icon {
  margin-top: -13px;
  font-size: 30px;
}
.van-cell__left-icon {
  margin-top: -13px;
  font-size: 30px;
}
.van-contact-card__value {
  font-size: 14px;
  font-weight: bold;
}
/* 商品 */
.goods {
  width: 375px;
  height: 500px;
  line-height: 20px;
  background: #fff;
  margin-top: 10px;
}
.class_title_left {
  color: rgba(16, 16, 16, 100);
  font-size: 12px;
  font-family: PingFangSC-regular;
}
.class_title_right {
  color: rgba(14, 182, 255, 100);
  font-size: 12px;
  font-family: PingFangSC-regular;
}
.nav_title {
  border: none;
}

.goods_item {
  width: 351px;
  height: 114px;
  margin: 0 auto;
  line-height: 20px;
  border-radius: 5px;
  background-color: rgba(245, 245, 245, 100);
  display: flex;
}
.goods_item img {
  padding: 20px;
}
.goods_item p {
  color: rgba(16, 16, 16, 100);

  font-size: 12px;
  font-family: PingFangSC-regular;
}
.goods_item span {
  display: block;

  color: rgba(157, 158, 157, 100);
  font-size: 12px;
  font-family: PingFangSC-regular;
}
.class_title_left2 {
  color: rgba(157, 158, 157, 100);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.goods_bottom {
  margin-top: 10px;
}
/* 按钮 */
.button {
  width: 375px;
  height: 52px;
  line-height: 20px;
  background: #fff;
}
.button .price {
  color: rgb(248, 18, 18);
}
.button_cont {
  line-height: 52px;
  float: right;
  margin-right: 20px;
}
.van-button--round {
  margin-left: 10px;
  line-height: 1px;
  margin-top: 10px;
}
</style>

<template>
  <div class="index">
    <div class="nav">
      <div>
        <van-nav-bar :border="false">
          <template #left>
            <van-icon name="setting" color="white" size="20px" />
          </template>
          <template #right>
            <van-icon name="service" color="white" size="20px" />
          </template>
        </van-nav-bar>
      </div>
    </div>
    <!-- 个人资料 -->
    <div class="index_cont">
      <div class="personal">
        <div class="personal_top">
          <div class="personal_top_left">
            <img
              src="http:\/\/pt.codecore.cn\/uploads\/20211129121322475876549.png"
              alt=""
            /><span>小笑道</span>
          </div>
          <div class="personal_top_right">
            <van-icon name="scan" color="blue" /><van-icon
              name="scan"
              color="blue"
            />
          </div>
        </div>
        <div class="personal_bottom">
          <div>
            <p>3</p>
            <span>优惠券</span>
          </div>
          <div>
            <p>100.00</p>
            <span>优惠是券</span>
          </div>
          <div>
            <p>3</p>
            <span>优惠券</span>
          </div>
        </div>
      </div>
    </div>
    <div class="index_cont_xia">
      <!-- 我的订单 -->
      <div class="myOrder">
        <div class="myOrder_top">我的订单</div>
        <div class="myOrder_bottom">
          <div>
            <van-icon name="card" />
            <p>待付款</p>
          </div>
          <div>
            <van-icon name="card" />
            <p>待付款</p>
          </div>
          <div>
            <van-icon name="card" />
            <p>待付款</p>
          </div>
          <div>
            <van-icon name="card" />
            <p>待付款</p>
          </div>
        </div>
      </div>
      <div class="myOrder myOrder2">
        <div class="myOrder_top">常用工具</div>
        <div class="myOrder_bottom myOrder_bottom2">
          <div>
            <van-icon name="card" />
            <p>待付款</p>
          </div>
          <div>
            <van-icon name="card" />
            <p>待付款</p>
          </div>
        </div>
      </div>
      <!-- 推荐 -->
      <div class="divider">
        <van-divider>推荐</van-divider>
      </div>
      <!-- 商品 -->
      <div class="goods">
        <div class="goods_item">
          <div class="goods_cont_item">
            <div class="goods_cont_item_img">
              <img
                src="http:\/\/pt.codecore.cn\/uploads\/20211129121322475876549.png"
                alt=""
              />
            </div>
            <p>新疆小苹果 1.5KG</p>
            <span>特价 </span><span>24H发货 </span>
            <div class="bargain_cont_item1_btm_text">
              <div class="bargain_cont_item1_btm_text_div">
                20.9<span>/箱</span>
                <del class="bargain_cont_item1_btm_text_item">30.9</del>
              </div>

              <div class="shop_img">
                <van-icon class="list_img" name="shopping-cart" color="white" />
              </div>
            </div>
          </div>
          <div class="goods_cont_item">
            <div class="goods_cont_item_img">
              <img
                src="http:\/\/pt.codecore.cn\/uploads\/20211129121322475876549.png"
                alt=""
              />
            </div>
            <p>新疆小苹果 1.5KG</p>
            <span>特价 </span><span>24H发货 </span>
            <div class="bargain_cont_item1_btm_text">
              <div class="bargain_cont_item1_btm_text_div">
                20.9<span>/箱</span>
                <del class="bargain_cont_item1_btm_text_item">30.9</del>
              </div>

              <div class="shop_img">
                <van-icon class="list_img" name="shopping-cart" color="white" />
              </div>
            </div>
          </div>
          <div class="goods_cont_item">
            <div class="goods_cont_item_img">
              <img
                src="http:\/\/pt.codecore.cn\/uploads\/20211129121322475876549.png"
                alt=""
              />
            </div>
            <p>新疆小苹果 1.5KG</p>
            <span>特价 </span><span>24H发货 </span>
            <div class="bargain_cont_item1_btm_text">
              <div class="bargain_cont_item1_btm_text_div">
                20.9<span>/箱</span>
                <del class="bargain_cont_item1_btm_text_item">30.9</del>
              </div>

              <div class="shop_img">
                <van-icon class="list_img" name="shopping-cart" color="white" />
              </div>
            </div>
          </div>
          <div class="goods_cont_item">
            <div class="goods_cont_item_img">
              <img
                src="http:\/\/pt.codecore.cn\/uploads\/20211129121322475876549.png"
                alt=""
              />
            </div>
            <p>新疆小苹果 1.5KG</p>
            <span>特价 </span><span>24H发货 </span>
            <div class="bargain_cont_item1_btm_text">
              <div class="bargain_cont_item1_btm_text_div">
                20.9<span>/箱</span>
                <del class="bargain_cont_item1_btm_text_item">30.9</del>
              </div>

              <div class="shop_img">
                <van-icon class="list_img" name="shopping-cart" color="white" />
              </div>
            </div>
          </div>
          <div class="goods_cont_item">
            <div class="goods_cont_item_img">
              <img
                src="http:\/\/pt.codecore.cn\/uploads\/20211129121322475876549.png"
                alt=""
              />
            </div>
            <p>新疆小苹果 1.5KG</p>
            <span>特价 </span><span>24H发货 </span>
            <div class="bargain_cont_item1_btm_text">
              <div class="bargain_cont_item1_btm_text_div">
                20.9<span>/箱</span>
                <del class="bargain_cont_item1_btm_text_item">30.9</del>
              </div>

              <div class="shop_img">
                <van-icon class="list_img" name="shopping-cart" color="white" />
              </div>
            </div>
          </div>
          <div class="goods_cont_item">
            <div class="goods_cont_item_img">
              <img
                src="http:\/\/pt.codecore.cn\/uploads\/20211129121322475876549.png"
                alt=""
              />
            </div>
            <p>新疆小苹果 1.5KG</p>
            <span>特价 </span><span>24H发货 </span>
            <div class="bargain_cont_item1_btm_text">
              <div class="bargain_cont_item1_btm_text_div">
                20.9<span>/箱</span>
                <del class="bargain_cont_item1_btm_text_item">30.9</del>
              </div>

              <div class="shop_img">
                <van-icon class="list_img" name="shopping-cart" color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav1 :active="active"></nav1>
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
    };
  },
};
</script>
<style scoped>
.index {
  height: 1500px;
  background-color: #f5f5f5;
}
.nav {
  width: 375px;
  height: 101px;
  background-color: rgba(14, 182, 255, 100);
}
.van-nav-bar {
  background-color: rgba(14, 182, 255, 100);
}
/* 个人资料 */
.index_cont {
  position: relative;
  margin: 0 auto;
  width: 351px;
}
.personal {
  border-bottom: 5px solid red;

  position: absolute;
  top: -40px;
  width: 351px;
  height: 118px;
  line-height: 20px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 100);
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
}
.personal_top {
  display: flex;
  justify-content: space-between;
}
.personal_top_left {
  position: absolute;
  top: -20px;
  z-index: 999;
}
.personal_top_left img {
  vertical-align: middle;

  width: 65px;
  height: 65px;
  border-radius: 100px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
}
.personal_top_left span {
  color: rgba(14, 182, 255, 100);
  font-size: 14px;
  vertical-align: middle;
  padding-top: 10px;
  padding-left: 10px;
  display: inline-block;
}
.personal_top_right {
  margin-left: 275px;
  margin-top: 10px;
}
.index_cont .van-icon {
  margin-left: 10px;
}
.personal_bottom {
  text-align: center;
  display: flex;
  justify-content: space-around;
}
.personal_bottom div span {
  color: rgba(157, 158, 157, 100);
  font-size: 12px;
}
.personal_bottom div p {
  margin: 20px 0 0 0;
}
.index_cont_xia {
  width: 351px;
  margin: 100px auto 0 auto;
  top: 190px;
}
/* 我的订单 */
.myOrder {
  width: 351px;
  height: 114px;
  line-height: 20px;
  border-radius: 5px;
  background-color: #fff;
}
.myOrder_top {
  padding-left: 12px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid red;
}
.myOrder_bottom {
  text-align: center;
  display: flex;
  justify-content: space-around;
}
.myOrder_bottom div {
  margin-top: 12px;
}
.myOrder_bottom p {
  color: rgba(157, 158, 157, 100);
  font-size: 12px;
  font-family: PingFangSC-regular;
  margin-top: 7px;
}
.myOrder_bottom .van-icon {
  margin-left: 0;
}
.myOrder2 {
  margin-top: 12px;
}
.myOrder_bottom2 {
  padding-left: 27px;
  display: flex;
  justify-content: start;
}
.myOrder_bottom2 div:nth-child(2) {
  margin-left: 50px;
}
/* 商品 */
.goods_item {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.goods_cont_item {
  width: 161px;
  height: 230px;
  line-height: 20px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 100);
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.1);
}
.bargain_cont_item1_btm_text {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: rgba(206, 95, 65, 100);
  height: 20px;
  margin: -1px 16px 20px 0;
}
.bargain_cont_item1_btm_text span {
  color: #000000;
}
.shop_img {
  text-align: center;
  border-radius: 100%;
  bottom: 37px;
  right: 28px;
  width: 22px;
  height: 22px;
  line-height: 22px;
  background-color: rgba(14, 182, 255, 100);
}
.bargain_cont_item1_btm_text_item {
  margin-left: 10px;

  color: rgba(157, 158, 157, 100);
  font-size: 12px;
  font-family: PingFangSC-regular;
}

.goods_cont_item {
  padding-left: 10px;
  margin: 6px 0;
}
.goods_cont_item span:nth-child(3) {
  width: 32px;
  height: 18px;
  line-height: 17px;
  border-radius: 5px;
  color: rgba(206, 95, 65, 100);
  font-size: 12px;
  text-align: center;
  font-family: Arial;
  border: 1px solid rgba(206, 95, 65, 100);
}
.goods_cont_item span:nth-child(4) {
  margin-left: 10px;
  width: 60px;
  height: 18px;
  line-height: 17px;
  border-radius: 5px;
  color: rgba(157, 158, 157, 100);
  font-size: 12px;
  text-align: center;
  font-family: Arial;
  border: 1px solid rgba(157, 158, 157, 100);
}
.goods_cont_item p {
  color: rgba(16, 16, 16, 100);
  font-size: 14px;

  font-family: PingFangSC-regular;
}
.goods_cont_item_img {
  padding-top: 12px;
  width: 147px;
  height: 124px;
  text-align: center;
}
.goods_cont_item_img img {
  width: 100px;
  height: 100px;
  margin-top: 10px;
}
/* 推荐 */
.divider {
  width: 135px;
  text-align: center;
  margin-left: 109px;
}

.van-divider {
  color: aqua;
}
.van-divider::after,
.van-divider::before {
  width: 20px;
  border-width: 6px 0 0;
}
</style>

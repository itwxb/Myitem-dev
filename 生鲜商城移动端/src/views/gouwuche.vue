<template>
  <div class="index">
    <!-- nav -->
    <div class="nav">
      <van-nav-bar>
        <template #title> <div class="class_nav">购物车</div></template>
        <template #right> 删除 </template>
      </van-nav-bar>
    </div>
    <!-- 内容 -->
    <div class="cont">
      <!-- 选项卡 -->
      <div class="radio">
        <van-radio-group v-model="radio">
          <van-radio name="0">
            <template #default>
              <div class="radio1">生鲜</div>
            </template>
          </van-radio>

          <van-radio name="1" @click="url1">
            <template #default>
              <div class="list_cont_item1">
                <van-card
                  class="list_cont_itemm"
                  thumb="http://pt.codecore.cn/uploads/20211129121322475876549.png"
                >
                  <template #tags>
                    <div class="list_cont_itemm_ttile1">新疆小苹果 1.5KG</div>

                    <van-tag class="list_cont_itemm_ttile" plain type="danger"
                      >特价</van-tag
                    >
                    <van-tag plain class="list_cont_itemm_ttile2" type="danger"
                      >21小时发货</van-tag
                    >
                    <del class="list_cont_itemm_ttile3"> 39.9 </del>
                    <div class="bargain_cont_item1_btm_text">
                      <div class="left_price">20.9<span>/箱</span></div>
                      <div class="step">
                        <van-stepper v-model="value" />
                      </div>
                    </div>
                  </template>
                  <template #footer> </template>
                </van-card>
              </div>
            </template>
          </van-radio>
          <van-radio name="2">
            <template #default>
              <div class="list_cont_item1">
                <van-card
                  class="list_cont_itemm"
                  thumb="http://pt.codecore.cn/uploads/20211129121322475876549.png"
                >
                  <template #tags>
                    <div class="list_cont_itemm_ttile1">新疆小苹果 1.5KG</div>

                    <van-tag class="list_cont_itemm_ttile" plain type="danger"
                      >特价</van-tag
                    >
                    <van-tag plain class="list_cont_itemm_ttile2" type="danger"
                      >21小时发货</van-tag
                    >
                    <del class="list_cont_itemm_ttile3"> 39.9 </del>
                    <div class="bargain_cont_item1_btm_text">
                      <div class="left_price">20.9<span>/箱</span></div>
                      <div class="step">
                        <van-stepper v-model="value" />
                      </div>
                    </div>
                  </template>
                  <template #footer> </template>
                </van-card>
              </div> </template
          ></van-radio>
        </van-radio-group>
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
      active: 2,
      radio: "1",
      value: 1,
    };
  },
  methods:{
    url1(){
      this.$router.push('/querendingdan')
    }
  }
};
</script>
<style scoped>
.index {
  background-color: #f5f5f5;
  height: 1254px;
}
.van-nav-bar {
  color: #fff;
  background-color: blue;
}
.class_nav {
  color: #fff;
}
/* 内容 */
.cont {
  width: 351px;
  margin: 0 auto;
}
/* 单选框 */
.radio {
  width: 351px;
  line-height: 20px;
  border-radius: 5px;
  margin: 10px 0 20px 0;
  background-color: #fff;
}
/* 商品信息 */
.list_cont_itemm {
  background-color: #fff;

  position: relative;
  padding: 12px 16px 12px 10px;
  width: 301px;
  height: 143px;
  line-height: 20px;
  border-radius: 5px;
}

.list_cont_itemm_ttile {
  margin-top: 12px;
}
.list_cont_itemm_ttile2 {
  margin-left: 5px;
  border-radius: 5px;
  color: rgba(157, 158, 157, 100);
  font-size: 12px;
  font-family: Arial;
  border: 1px solid rgba(157, 158, 157, 100);
}
.list_cont_itemm_ttile3 {
  display: block;
  color: rgba(157, 158, 157, 100);
  margin-top: 10px;
  font-size: 16px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.list_cont_itemm_ttile1 {
  color: rgba(16, 16, 16, 100);
  font-size: 16px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.list_cont_item1 {
  margin-bottom: 10px;
}
.bargain_cont_item1_btm_text {
  font-size: 12px;
  color: rgba(206, 95, 65, 100);
  display: flex;
  justify-content: space-between;
}

.bargain_cont_item1_btm_text span {
  color: #000000;
}
.step {
  margin-bottom: 15px;
}
.left_price {
  margin-top: 7px;
  font-size: 20px;
}
.van-radio:nth-child(1) {
  border-bottom: 1px solid red;
  height: 40px;
  line-height: 40px;
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
</style>

<template>
  <div class="index">
    <!--  nav-->
    <div>
      <div>
        <van-nav-bar left-arrow :border="false">
          <template #right>
            <van-icon name="cart-o" />
          </template>
          <template #left>
            <div @click="onurl">
              <van-icon name="arrow-left" />
            </div>
          </template>
        </van-nav-bar>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="swiper">
      <div>
        <van-swipe @change="onChange">
          <van-swipe-item v-for="(item, index) in arrList5.image" :key="index">
            <div class="class_swipe_img">
              <img :src="item.file_path" alt="" />
            </div>
          </van-swipe-item>

          <template #indicator>
            <div class="custom-indicator">{{ current + 1 }}/4</div>
          </template>
        </van-swipe>
      </div>
    </div>
    <!-- 介绍 -->
    <div class="introduce">
      <div class="introduce_cont">
        <div class="introduce_cont_title1">
          <div class="div1">量产地贩</div>
          <div class="div2">基地优选 售后无忧</div>
        </div>
        <div class="introduce_cont_title2">
          <div class="div1">{{ arrList5.goods_name }}</div>
          <div class="div2">入口即化 好吃不腻</div>
        </div>
        <div class="introduce_cont_title3">
          <div class="div1">
            ${{ arrList6.goods_price }} <span>/箱</span> <del>39.9</del>
          </div>
        </div>
        <div class="introduce_cont_title4">
          <div class="div1">
            <van-icon name="bag" color="blue" />
            商家24H发货，第三方物流配送，免运费
          </div>
        </div>
        <div class="introduce_cont_title4">
          <div class="div1">
            <van-icon name="gem" color="blue" />
            生鲜不支持7天无理由退货
          </div>
        </div>
        <div class="introduce_cont_title4 title4_red">
          <div class="div1">
            <van-icon name="diamond" color="blue" />
            特价每人限购2份，超出则改商品全部...
            <van-icon name="arrow" class="class_van_icon_right" size="24px" />
          </div>
        </div>
        <div class="introduce_cont_title4" @click="showPopup">
          <div class="div1">
            已选：2.5kg/箱
            <van-icon name="arrow" class="class_van_icon_right2" size="24px" />
          </div>
        </div>
        <!-- 评论 -->
        <div class="talk">
          <div class="class_van_nav">
            评价(1999)

            <div class="class_van_nav_right">
              <p @click="onUrlAll">查看共的</p>
              <van-icon @onUrlAll="onUrlAll" name="arrow" size="24px" />
            </div>
          </div>
          <div class="class_divider">
            <van-divider />
          </div>
          <!-- 分割线下 -->
          <div class="divier_bottom">
            <div class="divider_bottom_left">
              <img
                src="http:\/\/pt.codecore.cn\/uploads\/20211129121322475876549.png"
              />
              <div class="divider_bottom_left_text">
                <p>下都</p>
                <span><van-icon name="smile-o" />好评</span>
                <p>苹果收到了，非常满意！</p>
              </div>
            </div>
            <div class="divier_bottom_right">2020.02.02</div>
          </div>
          <!-- 详情分割线 -->
          <div class="divider">
            <van-divider>详情</van-divider>
          </div>
          <!-- 详情 -->
          <div class="details">
            <div class="details_text">
              <span>产地</span>
              <span class="span1"> 新疆</span>
            </div>
            <div class="details_text">
              <span>产地大</span>
              <span class="span2">新疆</span>
            </div>
            <div class="details_text">
              <span>产地大大</span>
              <span class="span3">新疆</span>
            </div>
            <div class="more">查看共多</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 图片详情 -->
    <div class="imgdetal">
      <p>商品详情</p>
      <img
        src="http:\/\/pt.codecore.cn\/uploads\/20211129121322475876549.png"
      />
    </div>
    <van-button color="blue" type="primary" class="class_vanbutton_fix" block
      >是块级元素</van-button
    >
    <!-- 弹出层 -->
    <div>
      <van-popup v-model="show" position="bottom" :style="{ height: '50%' }"
        ><div class="popup">
          <div class="popup_cont">
            <p>新疆小苹果1.5G</p>
            <div class="popup_cont_item">
              <div class="popup_cont_item_img">
                <img
                  src="http:\/\/pt.codecore.cn\/uploads\/20211129121322475876549.png"
                  alt=""
                />
              </div>
              <div class="popup_cont_item_text">
                <div>￥20.9<span>/箱</span><del>$39.9</del></div>
                <div class="popup_cont_item_text_bottom">已选：1项</div>
              </div>
            </div>
            <div class="popup_cont_text">
              <p>商家24H发货，第三方物流配送，免运费</p>
            </div>
            <div class="popup_cont_text">
              <p>{{ arrList7.goods_weight }}箱</p>
            </div>
            <div class="popup_cont_text step">
              <p>
                商家24H发<span>{{ step }}</span
                >箱
              </p>
              <van-stepper class="class_step" v-model="step" />
            </div>
          </div>
          <van-button
            @click="onCartAdd()"
            color="red"
            type="primary"
            block
            class="class_vanbutton_fix"
            >是块级元素</van-button
          >
        </div></van-popup
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "shangpinxiangqing",
  components: {},
  data() {
    return {
      current: 0,
      // 弹出层
      show: false,
      step: 1,
      arrList5: [],
      arrList6: {},
      arrList7: [],
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    onurl() {
      this.$router.push("/");
    },
    // 弹出层
    showPopup() {
      this.show = true;
    },
    onUrlAll() {
      this.$router.push("/quanbupingjia");
    },
    // 加入购物车接口
    onCartAdd() {
      let obj = {
        user_id: "10001",
        goods_id: this.arrList5.goods_id,
        goods_num: this.step,
        goods_sku_id: this.arrList6.goods_sku_id,
      };
      this.axios.post("/cart/add", obj).then((res) => {
        console.log("res", res);
        console.log("add", obj);
        if (res.msg == "success") {
          this.$router.push("/shopping");
        } else {
          alert(res.msg);
        }
      });
    },
  },
  created() {
    console.log("路由", this.$route.query);
    this.$axios
      .get("/goods/detail", {
        params: {
          goods_id: this.$route.query.goods_id,
        },
      })
      .then((res) => {
        console.log("异步", res);
        // 1. 把异步请求到的数据 放到 data中的 list数组中
        this.arrList5 = res.detail;
        this.arrList6 = res.detail.goods_sku;
        this.arrList7 = res.detail.sku[0];
        console.log("list7", this.arrList7);
      });
  },
};
</script>
<style scoped>
@charset "utf-8";
/*=========================Reset_start==========================*/
body,
h1,
h2,
h3,
h4,
h5,
h6,
div,
p,
dl,
dt,
dd,
ol,
ul,
li,
form,
table,
th,
td,
a,
img,
span,
strong,
var,
em,
input,
textarea,
select,
option {
  margin: 0;
  padding: 0;
}
/*去内外边距*/
html,
body {
  font-family: "微软雅黑", "宋体", Arail, Tabhoma;
  text-align: left;
}
/*字体 文本居左*/
ul {
  list-style: none;
}
/*去ul li 小点*/
img {
  border: 0 none;
}
/*img IE6 兼容问题*/
input,
select,
textarea {
  outline: 0;
}
/*去除点击蓝框*/
textarea {
  resize: none;
  overflow: auto;
}
/*锁定多行文本框大小 与文字超出出现滚动条*/
table {
  border-collapse: collapse;
  border-spacing: 0;
}
/*表格边框合并 边框间距0*/
th,
strong,
var,
em {
  font-weight: normal;
  font-style: normal;
}
/*特殊文字粗细 样式显示正常*/
a {
  text-decoration: none;
}
/*a标签去下划线*/
.clearfix:after {
  clear: both;
  content: "";
  display: block;
  height: 0;
}
/*清浮动*/
a {
  color: #000000;
}
/*==========================Reset_End===========================*/
.index {
  height: 1060px;
}
.swiper {
  margin-top: -40px;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.class_swipe_img img {
  width: 375px;
  height: 346px;
}
/* 介绍 */
.introduce_cont {
  width: 351px;
  margin: 12px auto;
}
.introduce_cont_title1 {
  display: flex;
}
.introduce_cont_title1 .div1 {
  line-height: 17px;
  width: 65px;
  border-radius: 5px;
  background-color: rgba(14, 182, 255, 100);
  color: rgba(255, 255, 255, 100);
  font-size: 12px;
  text-align: center;
  font-family: Microsoft Yahei;
}
.introduce_cont_title1 .div2 {
  color: rgba(178, 178, 178, 100);
  font-size: 12px;
  text-align: left;
  font-family: PingFangSC-regular;
  margin-left: 12px;
}
.introduce_cont_title2 {
  margin: 12px 0;
}
.introduce_cont_title2 .div1 {
  color: rgba(16, 16, 16, 100);
  font-size: 18px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.introduce_cont_title2 .div2 {
  margin: 12px 0;

  color: rgba(178, 178, 178, 100);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.introduce_cont_title3 .div1 {
  color: rgba(206, 95, 65, 100);
  font-size: 20px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.introduce_cont_title3 .div1 span {
  color: #000;
  font-size: 12px;
}
.introduce_cont_title3 .div1 del {
  color: #000;
  font-size: 12px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.introduce_cont_title4 {
  margin-bottom: 12px;
  width: 351px;
  height: 41px;
  line-height: 20px;
  border-radius: 5px;
  background-color: rgba(249, 249, 249, 100);
  text-align: center;
}
.introduce_cont_title4 .div1 {
  line-height: 41px;
  margin-left: 12px;
  color: rgba(16, 16, 16, 100);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.title4_red {
  background-color: rgba(253, 241, 240, 100);
}
.class_van_icon_right {
  color: red;
  margin-left: 50px;
  line-height: 41px;
}
.class_van_icon_right2 {
  margin-left: 210px;
  line-height: 41px;
}
.class_van_nav {
  padding: 12px 12px;
  margin-bottom: 12px;
  width: 327px;
  height: 17px;
  font-size: 14px;
  line-height: 20px;
  border-radius: 5px;
  font-weight: bold;
  background-color: rgba(249, 249, 249, 100);
  display: flex;
  justify-content: space-between;
}
.class_van_nav_right {
  margin-right: -7px;
  display: flex;
}
.class_van_nav_right p {
  line-height: 24px;
  margin-right: 1px;
}
.class_divider {
  width: 330px;
  margin: 0 auto;
}
.class_divider .van-divider {
  background: red;
}
/* 评论 */
.talk {
  width: 351px;
  height: 149px;
  line-height: 20px;
  border-radius: 5px;
  background-color: rgba(249, 249, 249, 100);
}
.divider_bottom_left {
  display: flex;
}
.divider_bottom_left img {
  margin: 10px 10px;
  width: 32px;
  height: 32px;
  border-radius: 100px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
}
.divider_bottom_left_text p {
  font-size: 12px;
  margin: 5px 0;
}
.divider_bottom_left_text span {
  color: rgba(255, 201, 38, 100);
  font-size: 12px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.divier_bottom {
  display: flex;
  justify-content: space-between;
}
.divier_bottom_right {
  margin: 20px 10px;
}
.divider {
  width: 135px;
  text-align: center;
  margin-left: 120px;
}

.van-divider {
  color: rgb(255, 0, 55);
}
.divider {
  margin: 20px 0 10px 0;
  width: 135px;
  text-align: center;
  margin-left: 120px;
}

.van-divider {
  color: aqua;
  font-weight: bold;
}
.divider .van-divider::after,
.divider .van-divider::before {
  width: 20px;
  border-width: 6px 0 0;
}
/* 详情 */
.details {
  width: 327px;
  height: 146px;
  line-height: 20px;
  border-radius: 5px;
  background-color: rgba(249, 249, 249, 100);

  padding: 10px 12px 17px 12px;
}
.details_text {
  margin-bottom: 10px;
  border-right: 1px solid springgreen;
  height: 30px;
  border-bottom: 1px solid #b31b1b;
}
.details_text span:nth-child(1) {
  color: rgba(178, 178, 178, 100);
  font-size: 14px;
  font-family: PingFangSC-regular;
}
.details_text span:nth-child(2) {
  color: rgba(16, 16, 16, 100);
  font-size: 14px;
  display: inline-block;
  font-family: PingFangSC-regular;
}
.span1 {
  margin-left: 48px;
}
.span2 {
  margin-left: 34px;
}
.span3 {
  margin-left: 20px;
}
.more {
  color: rgba(178, 178, 178, 100);
  font-size: 14px;
  text-align: center;
  font-family: PingFangSC-regular;
  margin: 17px 0;
}
/* 商品详情 */
.imgdetal {
  overflow: hidden;
  margin-top: 232px;
  margin-bottom: 10px;
  height: 307px;
  line-height: 20px;
  background-color: rgba(185, 35, 55, 100);
  text-align: center;
}
.imgdetal > p {
  color: rgba(255, 255, 255, 100);
  font-size: 14px;
  text-align: center;
  font-family: PingFangSC-regular;
  margin-top: 25px;
}
.imgdetal img {
  width: 251px;
  height: 214px;
  margin-top: 20px;
}
/* 弹出层 */
.popup_cont {
  width: 351px;
  margin: 0 auto;
}
.popup_cont > p {
  text-align: center;
  margin: 12px 0 20px 0;

  color: rgba(16, 16, 16, 100);
  font-size: 14px;
  font-family: PingFangSC-regular;
}
.popup_cont_item {
  display: flex;
}
.popup_cont_item_img {
  width: 93px;
  height: 80px;
  margin-top: -30px;
}
.popup_cont_item_text {
  color: rgba(206, 95, 65, 100);
  font-size: 12px;
  text-align: left;
  font-family: PingFangSC-regular;
  margin-left: 20px;
}
.popup_cont_item_text span {
  color: #000;
  margin: 0 20px 14px 0;
}
.popup_cont_item_text del {
  color: #000;
  font-size: 16px;
}
.popup_cont_item_text_bottom {
  color: rgba(16, 16, 16, 100);
  font-size: 12px;
  text-align: left;
  font-family: PingFangSC-regular;
  margin-top: 15px;
}
/* 弹出框下边文字 */
.popup_cont_text {
  margin-top: 12px;
  height: 44px;
  border-top: 1px solid red;
}
.popup_cont_text p {
  margin: 12px 0;

  color: rgba(16, 16, 16, 100);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.step {
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
}
.class_step {
  margin: 10px 0;
}
.class_vanbutton_fix {
  position: fixed;
  bottom: 0;
}
</style>

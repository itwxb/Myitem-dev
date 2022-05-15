<template>
  <div class="index">
    <!--  搜索框-->
    <div class="seach">
      <div class="seach_cont">
        <div class="seach_cont_left" @click="onurl1">
          <van-icon size="20px" name="arrow-left" />
        </div>

        <van-search
          shape="round"
          v-model="value"
          show-action
          @search="onSearch"
        >
          <template #label>
            <div class="label_left">是我</div>
          </template>
          <template #action>
            <div class="seach_cont_right">
              <van-icon name="cart-o" size="20px" />
            </div>
          </template>
        </van-search>
      </div>
    </div>
    <!-- 标题 -->
    <div class="title">
      <div class="title_cont">
        <van-tabs v-model="active">
          <van-tab title="夹克"></van-tab>
          <van-tab title="筛选"></van-tab>
          <van-tab title="销量"></van-tab>
        </van-tabs>
      </div>
    </div>
    <!--商品  -->
    <div class="goods">
      <div class="goods_cont">
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
    <!-- 推荐 -->
    <div class="divider">
      <van-divider>推荐</van-divider>
    </div>
    <!-- 商品 -->
    <div class="item_div">
      <div class="goods_cont_item item_div1">
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
</template>

<script>
// @ is an alias to /src

export default {
  name: "index",
  components: {},
  data() {
    return {};
  },
  methods: {
    onurl1() {
      this.$router.push("/");
    },
  },
  //   created() {
  //     this.$axios
  //       .get("http://pt.codecore.cn/index.php?s=/api/page/cate")
  //       .then((res) => {
  //         console.log(res);
  //         // 1. 把异步请求到的数据 放到 data中的 list数组中
  //         this.arrList1 = res.data.data.data;
  //       });

  //   },
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
  background: #f5f5f5;
}
.seach {
  height: 45px;
  width: 375px;
}
.van-search {
  background-color: #f5f5f5;

  margin-left: 12px;
  width: 327px;
  height: 30px;
}

.seach_cont {
  position: relative;
  display: flex;
  width: 351px;
  margin: 0 auto;
  padding-top: 7px;
}
.van-search__content {
  background: #fff;
}
.seach_left {
  display: inline-block;
}
.seach_cont_left {
  margin-top: 5px;
}
.seach_cont_right {
  margin-left: 20px;
}
.label_left {
  position: absolute;
  left: 50px;
  top: 12px;
  width: 49px;
  height: 22px;
  line-height: 20px;
  border-radius: 25px;
  background-color: rgba(245, 245, 245, 100);
  color: rgba(16, 16, 16, 100);
  font-size: 14px;
  text-align: center;
  font-family: Arial;
}
.goods_cont {
  display: flex;
  justify-content: space-between;
  width: 351px;
  height: 245px;
  margin: 12px auto;
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
  margin: 5px 16px 13px 0;
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
  margin: 10px 0;
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
.divider {
  width: 135px;
  text-align: center;
  margin-left: 120px;
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
.item_div{
  width: 351px;
  margin:  0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item_div1{
  border-radius: 0;
}
</style>

<template>
  <div class="index">
    <!--  nav-->
    <van-nav-bar left-arrow>
      <template #right>
        <van-icon class="class_nav_icon" name="search" size="18" />
        <van-icon name="shopping-cart" size="18" color="black" />
      </template>
      <template #left>
        <van-icon name="arrow-left" @click="onurl" />
      </template>
    </van-nav-bar>
    <!-- 商品标题 -->
    <div class="goods_title">
      <img
        src="http:\/\/pt.codecore.cn\/uploads\/20211129121322475876549.png"
        alt=""
      />
      <span>该你小平贵哦1.7gf</span>
    </div>
    <!-- 评论 -->
    <div class="divier_bottom">
      <div class="divider_bottom_left">
        <img
          src="http:\/\/pt.codecore.cn\/uploads\/20211129121322475876549.png"
        />
        <div class="divider_bottom_left_text">
          <p>下都</p>
          <span>好评</span>
          <p>苹果收到了，非常满意！</p>
        </div>
      </div>
      <div class="divier_bottom_right">2020.02.02</div>
    </div>
    <div class="divier_bottom">
      <div class="divider_bottom_left">
        <img
          src="http:\/\/pt.codecore.cn\/uploads\/20211129121322475876549.png"
        />
        <div class="divider_bottom_left_text">
          <p>下都</p>
          <span>好评</span>
          <p>苹果收到了，非常满意！</p>
        </div>
      </div>
      <div class="divier_bottom_right">2020.02.02</div>
    </div>
    <div class="divier_bottom">
      <div class="divider_bottom_left">
        <img
          src="http:\/\/pt.codecore.cn\/uploads\/20211129121322475876549.png"
        />
        <div class="divider_bottom_left_text">
          <p>下都</p>
          <span>好评</span>
          <p>苹果收到了，非常满意！</p>
        </div>
      </div>
      <div class="divier_bottom_right">2020.02.02</div>
    </div>
    <div class="divier_bottom">
      <div class="divider_bottom_left">
        <img
          src="http:\/\/pt.codecore.cn\/uploads\/20211129121322475876549.png"
        />
        <div class="divider_bottom_left_text">
          <p>下都</p>
          <span>好评</span>
          <p>苹果收到了，非常满意！</p>
        </div>
      </div>
      <div class="divier_bottom_right">2020.02.02</div>
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
    };
  },
  methods: {
    onurl() {
      this.$router.push("/shangpinxiangqing");
    },
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
  background: #f5f5f5;
}
.class_nav_icon {
  margin-right: 10px;
}
/* 商品标题 */
.goods_title {
  width: 375px;
  height: 75px;
  line-height: 20px;
  background: white;
}
.goods_title img {
  width: 80px;
  height: 74px;
  vertical-align: middle;
}
.goods_title span {
  vertical-align: middle;
  line-height: 10px;
  margin-left: 12px;
}
/* 评论 */
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
.divider_bottom_left_text p:nth-child(1) {
  font-size: 12px;
  margin: 8px 0;
}
.divider_bottom_left_text span {
  color: rgba(255, 201, 38, 100);
  font-size: 12px;
  text-align: left;
  font-family: PingFangSC-regular;
  margin-left: 12px;
}
.divier_bottom {
  width: 375px;
  height: 115px;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  margin: 10px 0;
}
.divier_bottom_right {
  font-size: 10px;
  color: #a72525;
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
</style>

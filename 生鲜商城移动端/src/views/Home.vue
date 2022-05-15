<template>
  <div class="index">
    <!-- 搜索 -->
    <div class="secher">
      <van-icon name="location" class="gps" color="#fff" size="20px" />
      <van-search
        class="secher2"
        v-model="value"
        shape="round"
        @focus="onurl"
        placeholder="请输入搜索关键词"
      />
      <van-icon
        name="enlarge"
        color="#fff"
        class="icon-enlarge seach_icon2"
        size="20px"
      />
      <van-icon
        name="chat"
        color="#fff"
        class="icon_msg seach_icon2"
        size="20px"
      />
    </div>
    <!-- 商品分类 -->
    <van-grid class="Classifi" :border="false" column-num="5" icon-size="40px">
      <van-grid-item
        v-for="(item, index) in arrList1"
        :key="index"
        :icon="item.imgUrl"
        :text="item.text"
        @click='onurl2'
      />
    </van-grid>
    <!-- 超划算 -->
    <div class="bargain">
      <div class="bargain_cont">
        <div class="bargain_cont_title">
          <p>超划算</p>
          <span>更多 ></span>
        </div>
        <div class="bargain_cont_item">
          <div
            class="bargain_cont_item1"
            v-for="(item, index) in arrList2"
            :key="index"
          >
            <div class="bargain_cont_item1_top">
              <img :src="item.goods_image" alt="" />
              <p>{{ item.goods_name }}</p>
            </div>
            <div class="bargain_cont_item1_btm">
              <div class="bargain_cont_item1_btm_text">
                {{ item.goods_price }}<span>/箱子</span>
              </div>
              <div class="bargain_cont_item1_btm_img">
                <van-icon name="shopping-cart" color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 吃好点 -->
    <div class="eatGood">
      <div class="eatGood_cont">
        <div
          class="eatGood_cont_item1"
          v-for="(item, index) in arrList3"
          :key="index"
        >
          <h1>{{ item.goods_name }}</h1>
          <p>{{ item.selling_point }}</p>
          <van-grid
            :border="false"
            icon-size="60px"
            class="eatGood_cont_item1_img1"
          >
            <van-grid-item
              :icon="item.goods_image"
              class="eatGood_cont_item1_img"
            />
            <van-grid-item
              :icon="item.goods_image"
              class="eatGood_cont_item1_img"
            />
          </van-grid>
        </div>
      </div>
    </div>
    <!-- 分类 -->
    <div class="classification">
      <div class="classification_cont">
        <div
          class="classification_cont_item1"
          v-for="(item, index) in arrList4"
          :key="index"
        >
          <h1>{{ item.name }}</h1>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
    <!-- 列表 -->
    <div class="list">
      <div class="list_cont">
        <div v-for="(item, index) in arrList5" :key="index" class="list_cont_item1">
          <van-card class="list_cont_itemm" :thumb="item.goods_image">
            <template #tags>
              <div class="list_cont_itemm_ttile1">{{ item.goods_name }}</div>
              <van-tag class="list_cont_itemm_ttile" plain type="danger"
                >特价</van-tag
              >
              <van-tag plain class="list_cont_itemm_ttile2" type="danger"
                >21小时发货</van-tag
              >
              <div class="bargain_cont_item1_btm_text">
                20.9<span>/箱</span>
              </div>
              <div class="list_cont_itemm_ttile3">888人购买</div>
            </template>
            <template #footer>
               <van-icon class="list_img" name="shopping-cart" color="white" />
      
            </template>
          </van-card>
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
      active: 0,
      active2: 2,
      arrList1: [],
      arrList2: [],
      arrList3: [],
      arrList4: [],
      arrList5: [],
    };
  },
  
 
  created() {
    this.$axios
      .get("/page/cate")
      .then((res) => {
        console.log(res);
        // 1. 把异步请求到的数据 放到 data中的 list数组中
        this.arrList1 = res.data;
      });
    this.$axios
      .get("/page/push_goods")
      .then((res) => {
        console.log(res);
        // 1. 把异步请求到的数据 放到 data中的 list数组中
        this.arrList2 = res.data;
      });
    this.$axios
      .get("/page/adver_goods")
      .then((res) => {
        console.log(res);
        // 1. 把异步请求到的数据 放到 data中的 list数组中
        this.arrList3 = res.data;
      });
    this.$axios
      .get("/page/goods_cate")
      .then((res) => {
        console.log(res);
        // 1. 把异步请求到的数据 放到 data中的 list数组中
        this.arrList4 = res.data;
      });
    this.$axios
      .get("/page/goods")
      .then((res) => {
        console.log(res);
        // 1. 把异步请求到的数据 放到 data中的 list数组中
        this.arrList5 = res.data;
      });
  },
  methods:{
    onurl(){
      this.$router.push('/sousuo')
    },
    onurl2(){
      this.$router.push('/shuiguoshucai')

    }
  }
  
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
.gps {
  line-height: 40px;
  width: 40px;
  height: 30px;
}

.secher {
  text-align: center;
  display: flex;
  background-color: blue;
  height: 40px;
}
.secher2 {
  width: 250px;
  background-color: blue;
}
.seach_icon2 {
  width: 40px;
  line-height: 40px;
}
/* 商品分类 */
.bargain {
  margin-left: 12px;
  width: 351px;
  height: 185px;
  border-radius: 5px;
  border: 1px solid;
  background: #fff;
}
.bargain_cont {
  margin: 12px 12px;
}
.bargain_cont_title {
  display: flex;
  justify-content: space-between;
}
.bargain_cont_title p {
  color: rgba(16, 16, 16, 100);
  font-size: 14px;
  font-family: PingFangSC-regular;
}
.bargain_cont_title span {
  color: rgba(16, 16, 16, 100);
  font-size: 12px;
  font-family: PingFangSC-regular;
}
.bargain_cont_item {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.bargain_cont_item1 {
  width: 93px;
  height: 132px;
}
.bargain_cont_item1_top img {
  width: 93px;
  height: 80px;
}
.bargain_cont_item1_top p {
  color: rgba(16, 16, 16, 100);
  font-size: 12px;
}
.bargain_cont_item1_btm {
  margin-top: 13px;

  display: flex;
  justify-content: space-between;
}
.bargain_cont_item1_btm_text {
  font-size: 12px;
  color: rgba(206, 95, 65, 100);
  width: 61px;
  height: 20px;
}
.bargain_cont_item1_btm_img {
  width: 22px;
  height: 22px;
  border-radius: 100px;
  text-align: center;
  line-height: 22px;
  background-color: rgba(14, 182, 255, 100);
}
.bargain_cont_item1_btm_text span {
  color: #000000;
}
/* 吃好点 */
.eatGood_cont {
  background: #fff;
  display: flex;

  margin: 10px 12px 20px 12px;
  padding: 12px;
}
.eatGood_cont_item1 {
  width: 175px;
}
.eatGood_cont_item1:nth-child(1) {
  border-right: 1px solid rgba(245, 245, 245, 100);
}
.eatGood_cont_item1_img {
  width: 60px;

  height: 60px;
}
.eatGood_cont_item1 > h1 {
  margin-left: 12px;
  color: rgba(16, 16, 16, 100);
  font-size: 14px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.eatGood_cont_item1 > p {
  margin-left: 12px;

  margin-top: 5px;
  color: rgba(157, 158, 157, 100);
  font-size: 12px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.eatGood_cont_item1_img1 {
  display: flex;
  justify-content: space-between;
  padding: 0 13px;
}
/* 分类 */
.classification_cont {
  display: flex;
  justify-content: space-between;
  width: 351px;
  margin: 0 auto;
}

.classification_cont_item1 > h1 {
  text-align: center;
  width: 63px;
  color: rgba(16, 16, 16, 100);

  font-size: 16px;
  font-family: PingFangSC-regular;
  margin-bottom: 5px;
}
.classification_cont_item1 p {
  width: 63px;
  height: 17px;
  line-height: 17px;
  color: rgba(157, 158, 157, 100);

  text-align: center;
  font-size: 12px;
  text-align: center;
}

.classification_cont_item1 p:hover {
  color: rgba(255, 255, 255, 100);
  background-color: rgba(14, 182, 255, 100);
  border-radius: 18px;
}
/* 列表 */
.list {
  margin-top: 12px;
}
.list_cont {
  width: 351px;
  margin: 0 auto;
  height: 553px;
}

.list_img {
  position: absolute;
  text-align: center;
  border-radius: 100%;
  bottom: 37px;
  right: 28px;
  width: 22px;
  height: 22px;
  line-height: 22px;
  background-color: rgba(14, 182, 255, 100);
}
.list_cont_itemm {
  background-color: #fff;

  position: relative;
  padding: 12px 16px 12px 10px;
  width: 351px;
  height: 113px;
  line-height: 20px;
  border-radius: 5px;
}

.list_cont_itemm_ttile {
  margin-top: 22px;
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
  width: 74px;
  height: 17px;
  color: rgba(157, 158, 157, 100);
  font-size: 12px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.list_cont_itemm_ttile1 {
  color: rgba(16, 16, 16, 100);
  font-size: 16px;
  text-align: left;
  font-family: PingFangSC-regular;
}
.list_cont_item1{
  margin-bottom: 10px;
}
</style>

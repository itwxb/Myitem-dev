<template>
  <!-- star -->

  <div class="youjiaopage_wrap">
    <nav2></nav2>
    <banner2 :bannerH="h1"  :bannerP="p1" :bannerImg="Img1"></banner2>
    <!-- 面包屑 -->
    <div class="Crumbs">
      <div>当前位置：首页><span>金融</span></div>
    </div>
    <!-- 按钮板块 -->
    <div class="btn">
      <div class="btn_cont">
        <div class="btn1">就安心我</div>
        <div class="btn2">就安心我</div>
        <div class="btn3">就安心我</div>
      </div>
    </div>
    <!-- 新闻内容 -->
    <div class="news_cont_zong">
    <div class="item"  @click="funUrl">
      <div class="item_cont">
        <div class="item_cont1">
          <img
            src="../assets/img/youjiao/摄图网_501125646_banner_在草地上玩耍的孩子们（非企业商用）@2x.png"
            alt=""
          />
          <div class="item_cont1_text">
            <div class="item_cont1_text_top">
              <h1>
                教育部等九部门关于印发《职业教育提质培优行动计划（2020—2023年）》的通知
              </h1>
              <p>
                各省、自治区、直辖市教育厅（教委）、发展改革委、工业和信息化主管部门、财政厅（局）、人力资源社会保障厅（局）、农业农村（农...
              </p>
            </div>
            <div class="item_cont1_text_btm">
              <div>2021/6/05</div>
              <p>查看更多></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="item2">
      <div class="item2_cont">
        <div class="item2_cont1" v-for="(item, index) in arrList" :key="index" @click="funUrl">
          <img :src="item.url" alt="" />
          <div class="item2_cont1_text">
            <div class="item2_cont1_text_top">
              <h1>
                {{ item.h1 }}
              </h1>
              <p>
                {{ item.p1 }}
              </p>
            </div>
            <div class="item2_cont1_text_btm">
              <div>2021/6/05</div>
              <p>查看更多></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <!-- 翻页列表 -->
   <div class="Pages">
     <div class="Pages_cont">
       <ul>
         <li> 《 </li>
         <li> 1 </li>
         <li> 2 </li>
         <li> 3 </li>
         <li> 4 </li>
         <li> 5 </li>
         <li> 6 </li>
         <li> ... </li>
         <li>20</li>
         <li>》</li>
       </ul>
     </div>

   </div>

    <footer2></footer2>

    <!-- end -->
  </div>
</template>


<script>
import footer2 from "../components/footer.vue";
import banner2 from "../components/banner.vue";
import nav2 from "../components/nav.vue";
export default {
  name: "keji",
  components: {
    footer2,
    nav2,
    banner2,
  },
  data() {
    return {
      h1: "企业新闻",
      p1: "更多最新精彩资讯，感受企业魅力",
      arrList: [
        {
          url: require("../assets/img/youjiao/摄图网_501111552_banner_幼儿园老师指导画画（非企业商用）.png"),
          h1: "用系统思维下好“职业教育一盘大棋”",
          p1: "党的十九届五中全会审议通过的《中共中央关于制定国民经济和社会发展第十四个五年规划和二○三五远景目标的建议》内含了多条逻辑线...",
        },
        {
          url: require("../assets/img/youjiao/摄图网_501111552_banner_幼儿园老师指导画画（非企业商用）.png"),
          h1: "用系统思维下好“职业教育一盘大棋”",
          p1: "党的十九届五中全会审议通过的《中共中央关于制定国民经济和社会发展第十四个五年规划和二○三五远景目标的建议》内含了多条逻辑线...",
        },
        {
          url: require("../assets/img/youjiao/摄图网_501111552_banner_幼儿园老师指导画画（非企业商用）.png"),
          h1: "用系统思维下好“职业教育一盘大棋”",
          p1: "党的十九届五中全会审议通过的《中共中央关于制定国民经济和社会发展第十四个五年规划和二○三五远景目标的建议》内含了多条逻辑线...",
        },
        {
          url: require("../assets/img/youjiao/摄图网_501111552_banner_幼儿园老师指导画画（非企业商用）.png"),
          h1: "用系统思维下好“职业教育一盘大棋”",
          p1: "党的十九届五中全会审议通过的《中共中央关于制定国民经济和社会发展第十四个五年规划和二○三五远景目标的建议》内含了多条逻辑线...",
        },
      ],
      
      Img1: require("../assets/img/keji/矿山banner1.png"),
    };
  },
  methods: {
    funUrl(){
       this.$router.push("/newsxiangqing");
    }
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

.youjiaopage_wrap {
  width: 1920px;
  margin: 0 auto;
  height: 1000px;
}
/* 面包屑 */
.Crumbs {
  width: 1200px;
  height: 46px;
  margin: 0 auto;
}
.Crumbs {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 17px;
}
.Crumbs div {
  line-height: 46px;
}
.Crumbs span {
  color: #000000;
}
/* 按钮 */

.btn_cont {
  display: flex;
  width: 1200px;
  margin: 0 auto;
  margin-left: 666px;
}
.btn_cont div {
  text-align: center;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #444444;
  line-height: 40px;
  margin-right: 18px;
  width: 185px;
  height: 40px;
  background: #f6f6f6;
  border-radius: 6px;
}
.btn_cont .btn1 {
  color: #ffffff;
  background: #23337f;
}
/* 新闻列表 */
.item_cont {
  width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
}
.item_cont1 {
  display: flex;
  width: 1200px;
  height: 252px;
  background: #ffffff;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.11);
}

.item_cont1 img {
  margin: 32px 48px 32px 32px;
  width: 300px;
  height: 188px;
  border: dashed;
}
.item_cont1_text {
  width: 868px;
}
.item_cont1_text_top {
  margin: 45px 0 16px 0;
  width: 732px;
  height: 112px;

  border-bottom: 1px solid #eaeaea;
}
.item_cont1_text_top > h1 {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #23337f;
  line-height: 24px;
}
.item_cont1_text_top p {
  margin-top: 16px;
  width: 732px;
  height: 56px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  line-height: 24px;
}
.item_cont1_text_btm {
  width: 732px;

  display: flex;
  justify-content: space-between;
}
.item_cont1_text_btm div {
  font-size: 24px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #23337f;
  line-height: 28px;
}
.item_cont1_text_btm p {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #23337f;
  line-height: 28px;
}
/* item2 */
.item2_cont {
  width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
}
.item2_cont1 {
  margin-top: 30px;
  display: flex;
  width: 1200px;
  height: 252px;

  background: #f8f8f8;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.11);
}

.item2_cont1 img {
  margin: 32px 48px 32px 32px;
  width: 300px;
  height: 188px;
  border: dashed;
}
.item2_cont1_text {
  width: 868px;
}
.item2_cont1_text_top {
  margin: 45px 0 16px 0;
  width: 732px;
  height: 112px;

  border-bottom: 1px solid #eaeaea;
}
.item2_cont1_text_top > h1 {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;

  color: #3f3f3f;
  line-height: 24px;
}
.item2_cont1_text_top p {
  margin-top: 16px;
  width: 732px;
  height: 56px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  line-height: 24px;
}
.item2_cont1_text_btm {
  width: 732px;

  display: flex;
  justify-content: space-between;
}
.item2_cont1_text_btm div {
  font-size: 24px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;

  color: #999999;
  line-height: 28px;
}
.item2_cont1_text_btm p {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #23337f;
  line-height: 28px;
}
/* 翻页 */
.Pages_cont{
 margin: 40px 0;
  margin-left: 715px;
}
.Pages_cont ul{
  display: flex;
}
.Pages_cont ul li{
  text-align: center;
 line-height: 40px;
  width: 40px;
height: 40px;
margin-right: 10px;
}
.Pages_cont ul li:hover{
  
background: #23337F;
}
</style>



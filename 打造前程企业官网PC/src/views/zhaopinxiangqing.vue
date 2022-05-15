<template>
  <!-- star -->

  <div class="youjiaopage_wrap">
    <nav2></nav2>
    <banner2 :bannerH="h1" :bannerP="p1" :bannerImg="Img1"></banner2>
    <!-- 面包屑 -->
    <div class="Crumbs">
      <div>当前位置：首页><span>金融</span></div>
    </div>
    <!-- 行政运营 -->
    <div class="Administrative">
      <div class="Administrative_cont">
        <div class="Administrative_cont_top">
          <div class="Administrative_cont_top_left">
            <h1>刑侦现在</h1>
            <div class="Administrative_cont_top_left_text">
              <div class="Administrative_cont_top_left_text_l">
                <p>学历要求：大专以上</p>
                <p>招聘人数：3人</p>
              </div>
              <div class="Administrative_cont_top_left_text_r">
                <p>工作经验：2年以上</p>
                <p>工作地点：郑州高新区科学大道100号</p>
              </div>
            </div>
          </div>
          <div class="Administrative_cont_top_right">
            <p>截止时间：2020-10-27</p>
            <button>申请职位</button>
          </div>
        </div>
        <div class="Administrative_cont_bottom">
          <div>
            <h1>岗位指着</h1>
            <p>
              1.负责公司日常行政管理、人力资源、后勤管理和接待工作；<br />
              2.负责公司各类公文起草，更新公司网页新闻等；<br />
              3.负责公司办公用品采购、固定资产管理、会议管理、文印及外联工作等；<br />
              4.负责公司网站建设，维护办公设施设备及网络。<br />
            </p>
          </div>
          <div>
            <h1>岗位指着</h1>
            <p>
              1.负责公司日常行政管理、人力资源、后勤管理和接待工作；<br />
              2.负责公司各类公文起草，更新公司网页新闻等；<br />
              3.负责公司办公用品采购、固定资产管理、会议管理、文印及外联工作等；<br />
              4.负责公司网站建设，维护办公设施设备及网络。<br />
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 翻页 -->
    <div class="Page">
      <div class="Page_cont">
        <div>《 上一篇：业务流程管理系统</div>
        <div>下一篇：科技发展 》</div>
      </div>
    </div>
    <!-- 申请职位 -->
    <div class="ApplyFor">
      <div class="ApplyFor_cont">
        <h1>申请职位</h1>
        <div class="ApplyFor_cont_btm">
          <div class="ApplyFor_cont_btm_l">
            <div class="ApplyFor_cont_btm_l_div_input">
              <label for="">姓名：</label
              ><input class="ApplyFor_cont_btm_l_input1" type="text" />
            </div>
            <div class="ApplyFor_cont_btm_l_div_input">
              <label for="">学历：</label
              ><input
                class="ApplyFor_cont_btm_l_input1"
                type="text"
                placeholder="请输入名字"
              />
            </div>
            <div class="ApplyFor_cont_btm_l_div_input input3">
              <label for="">工作年限：</label
              ><input
                class="ApplyFor_cont_btm_l_input1"
                type="text"
                placeholder="请输入名字"
              />
            </div>
            <div
              class="
                ApplyFor_cont_btm_l_div_input ApplyFor_cont_btm_l_div_button
              "
            >
              <label for="">简历：</label
              ><input
                class="ApplyFor_cont_btm_l_input1 input4"
                type="text"
                placeholder="请输入名字"
              />
              <button class="button1">上传奖励</button>
            </div>
            <button class="button2">提交</button>
          </div>
          <div class="ApplyFor_cont_btm_r">
            <div class="ApplyFor_cont_btm_r_text">
              <h1>咨询热线</h1>
              <span>400-000-000</span>
            </div>
            <div class="ApplyFor_cont_btm_r_text">
              <h1>咨询热线</h1>
              <span>400-000-000</span>
            </div>
          </div>
        </div>
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
      Img1: require("../assets/img/keji/矿山banner1.png"),

      p1: "更多最新精彩资讯，感受企业魅力",
    };
  },
  methods: {},
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
/* 行政运营 */

.Administrative_cont {
  width: 1200px;
  margin: 24px auto 80px auto;
}
.Administrative_cont_top {
  height: 217px;

  border-bottom: 1px solid #eaeaea;
  display: flex;
  justify-content: space-between;
}
.Administrative_cont_top_left > h1 {
  margin: 60px 0 32px 0;
}

.Administrative_cont_top_left_text {
  display: flex;
}
.Administrative_cont_top_left_text p {
  margin-bottom: 16px;
}

.Administrative_cont_top_left_text_l {
  margin-right: 120px;
}
.Administrative_cont_top_left_text_l p {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #444444;
  line-height: 22px;
}
.Administrative_cont_top_right p {
  margin: 67px 0 50px 0;

  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
  line-height: 20px;
}
.Administrative_cont_top_right button {
  width: 160px;
  height: 48px;
  background: #23337f;
  border-radius: 4px;

  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 22px;
}
.Administrative_cont_bottom {
  margin: 28px 0 52px 0;
}
.Administrative_cont_bottom h1 {
  width: 90px;
  text-align: right;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #444444;
  line-height: 28px;
  border-left: 1px solid #23337f;
}
.Administrative_cont_bottom p {
  margin-top: 17px;
  width: 900px;
  height: 130px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #262626;
  line-height: 32px;
}
.Administrative_cont_bottom div {
  margin-top: 28px;
}
/* 翻页 */
.Page_cont {
  padding: 12px 40px;
  display: flex;
  justify-content: space-between;
  width: 1120px;
  height: 44px;
  background: #f8f8f8;
  margin: 0 auto;
  margin-bottom: 84px;
}
/* 申请职位 */
.ApplyFor {
  width: 1920px;
  height: 582px;
  background: #f8f8f8;
}
.ApplyFor_cont {
  width: 1200px;
  margin: 0 auto;
}
.ApplyFor_cont > h1 {
  font-size: 32px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #444444;
  line-height: 45px;
  padding-top: 65px;
}
.ApplyFor_cont_btm {
  justify-content: space-between;
  margin-top: 24px;
  display: flex;
}
.ApplyFor_cont_btm_l {
  padding-top: 52px;
  width: 900px;
  height: 336px;
  background: #ffffff;
}
.ApplyFor_cont_btm_r {
  width: 252px;
  height: 290px;
  background-image: url("../assets/img/zhaopinxinxi/蒙版.png");
}
.ApplyFor_cont_btm_l label {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #444444;
  line-height: 22px;
}
.ApplyFor_cont_btm_l_div_input {
  margin-bottom: 16px;
  margin-left: 82px;
}
.input3 {
  margin-left: 50px;
}

.ApplyFor_cont_btm_l_input1 {
  margin-left: 15px;

  font-size: 20px;
  text-indent: 10px;
  width: 280px;
  height: 40px;
  background: #f8f8f8;
}
.input4 {
  width: 704px;
  height: 40px;
  background: #f8f8f8;
}
.ApplyFor_cont_btm_l_div_button {
  position: relative;
}
.button1 {
  width: 72px;
  height: 24px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #23337f;
  position: absolute;
  bottom: 10px;
  right: 70px;
  font-size: 12px;
  color: #23337f;
  z-index: 999;
}
.button2 {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 22px;
  margin-left: 140px;
  width: 180px;
  height: 40px;
  background: #23337f;
  border-radius: 4px;
  margin-top: 20px;
}
.ApplyFor_cont_btm_r {
  padding: 49px 16px;
}
.ApplyFor_cont_btm_r_text {
  padding-top: 32px;
  width: 252px;
  height: 98px;
  background: rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  text-align: center;
  margin-bottom: 30px;
}
.ApplyFor_cont_btm_r_text h1 {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 22px;
}
.ApplyFor_cont_btm_r_text span {
  font-size: 32px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 45px;
}
</style>



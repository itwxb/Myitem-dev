<template>
  <!-- star -->

  <div class="youjiaopage_wrap">
    <nav2></nav2>
    <banner2 :bannerH="h1" :bannerP="p1" :bannerImg="Img1"></banner2>
    <!-- 面包屑 -->
    <div class="Crumbs">
      <div>当前位置：首页><span>金融</span></div>
    </div>
    <!-- 招聘信息 -->
    <div class="Recruitment">
      <div class="Recruitment_cont">
        <div
          class="Recruitment_cont_item1"
          v-for="(item, index) in arrList"
          :key="index" @click="onurl"
        >
          <div class="Recruitment_cont_item1_p">
            <p>{{ item.p1 }}</p>
            <p>{{ item.p2 }}</p>
          </div>
          <div class="Recruitment_cont_item1_div1">
            <div>{{ item.div1 }}</div>
            <div>{{ item.div2 }}</div>
            <div>{{ item.div3 }}</div>
          </div>
          <div class="Recruitment_cont_item1_div1 div2">
            <div>
              {{ item.div4 }}<span class="div1_span">{{ item.span1 }}</span>
            </div>
            <div>{{ item.div5 }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 翻页 -->
    <div class="Pages">
      <div class="Pages_cont">
        <ul>
          <li>《</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>...</li>
          <li>20</li>
          <li>》</li>
        </ul>
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
      arrList: [
        {
          p1: "行政运营",
          p2: "面议",
          div1: "学历要求：大专以上",
          div2: "工作经验：2年以上",
          div3: "招聘人数：2人",
          div4: "工作地点：",
          span1: "河南郑州",
          div5: "截止时间：2019-12-30",
        },
        {
          p1: "行政运营",
          p2: "面议",
          div1: "学历要求：大专以上",
          div2: "工作经验：2年以上",
          div3: "招聘人数：2人",
          div4: "工作地点：",
          span1: "河南郑州",
          div5: "截止时间：2019-12-30",
        },
        {
          p1: "行政运营",
          p2: "面议",
          div1: "学历要求：大专以上",
          div2: "工作经验：2年以上",
          div3: "招聘人数：2人",
          div4: "工作地点：",
          span1: "河南郑州",
          div5: "截止时间：2019-12-30",
        },
        {
          p1: "行政运营",
          p2: "面议",
          div1: "学历要求：大专以上",
          div2: "工作经验：2年以上",
          div3: "招聘人数：2人",
          div4: "工作地点：",
          span1: "河南郑州",
          div5: "截止时间：2019-12-30",
        },
        {
          p1: "行政运营",
          p2: "面议",
          div1: "学历要求：大专以上",
          div2: "工作经验：2年以上",
          div3: "招聘人数：2人",
          div4: "工作地点：",
          span1: "河南郑州",
          div5: "截止时间：2019-12-30",
        },
        {
          p1: "行政运营",
          p2: "面议",
          div1: "学历要求：大专以上",
          div2: "工作经验：2年以上",
          div3: "招聘人数：2人",
          div4: "工作地点：",
          span1: "河南郑州",
          div5: "截止时间：2019-12-30",
        },
        {
          p1: "行政运营",
          p2: "面议",
          div1: "学历要求：大专以上",
          div2: "工作经验：2年以上",
          div3: "招聘人数：2人",
          div4: "工作地点：",
          span1: "河南郑州",
          div5: "截止时间：2019-12-30",
        },
        {
          p1: "行政运营",
          p2: "面议",
          div1: "学历要求：大专以上",
          div2: "工作经验：2年以上",
          div3: "招聘人数：2人",
          div4: "工作地点：",
          span1: "河南郑州",
          div5: "截止时间：2019-12-30",
        },
        {
          p1: "行政运营",
          p2: "面议",
          div1: "学历要求：大专以上",
          div2: "工作经验：2年以上",
          div3: "招聘人数：2人",
          div4: "工作地点：",
          span1: "河南郑州",
          div5: "截止时间：2019-12-30",
        },
        {
          p1: "行政运营",
          p2: "面议",
          div1: "学历要求：大专以上",
          div2: "工作经验：2年以上",
          div3: "招聘人数：2人",
          div4: "工作地点：",
          span1: "河南郑州",
          div5: "截止时间：2019-12-30",
        },
      ],
    };
  },
  methods: {
    onurl(){
      this.$router.push('/zhaopinxiangqing')
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
/* 招聘信息 */
.Recruitment_cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  width: 1200px;
  height: 915px;
  margin: 0 auto;
  margin-top: 61px;
}
.Recruitment_cont_item1 {
  padding: 24px 32px;
  width: 516px;
  height: 103px;

  background: #f8f8f8;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
}
.Recruitment_cont_item1_p {
  display: flex;
  justify-content: space-between;
}
.Recruitment_cont_item1_p p {
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #23337f;
  line-height: 24px;
}
.Recruitment_cont_item1_div1 {
  margin: 21px 0 10px 0;
}
.Recruitment_cont_item1_div1 div {
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #a3a3a3;
  line-height: 24px;

  display: inline-block;
  margin-right: 40px;
}
.div2 {
  margin-top: 0;
}
.div1_span {
  color: black;
}
/* 翻页 */
.Pages_cont {
  margin: 40px 0;
  margin-left: 715px;
}
.Pages_cont ul {
  display: flex;
}
.Pages_cont ul li {
  text-align: center;
  line-height: 40px;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.Pages_cont ul li:hover {
  background: #23337f;
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
  padding-top:32px ;
  width: 252px;
  height: 98px;
  background: rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  text-align: center;
  margin-bottom: 30px;
}
.ApplyFor_cont_btm_r_text h1{
  
font-size: 16px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #FFFFFF;
line-height: 22px;
}
.ApplyFor_cont_btm_r_text span{

font-size: 32px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #FFFFFF;
line-height: 45px;
}
</style>



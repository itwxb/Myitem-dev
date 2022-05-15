<template>
  <div class="index">
    <!--  搜索框-->
    <div class="seach">
      <div class="seach_cont">
        <form action="/">
          <van-search
            :autofocus="true"
            class="seach_cont_form"
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
          />
        </form>
      </div>
    </div>
    <!-- 实时热搜 -->
    <div class="HotSearch">
      <div class="HotSearch_cont">
        <div class="HotSearch_cont_item">
          <div class="HotSearch_cont_item_title">
            <div><h1>实时热搜</h1></div>
            <div>
              <van-icon name="replay" />
            </div>
          </div>
          <div>
            <div class="HotSearch_cont_item_text">
              <p>充值卡</p>
              <p>充值卡</p>
              <p>充值卡</p>
              <p>充值卡大的</p>
            </div>
            <div class="HotSearch_cont_item_text">
              <p>鸡蛋</p>
            </div>
          </div>
        </div>
        <div class="HotSearch_cont_item">
          <div class="HotSearch_cont_item_title">
            <div><h1>实时热搜</h1></div>
          </div>
          <div>
            <div class="HotSearch_cont_item_text">
              <p>充值卡</p>
              <p>充值卡</p>
            </div>
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
    onSearch() {
      this.$router.push("/sousuojieguo");
    },
    onCancel() {
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
@media only screen and (min-width: 500px) {
  .index {
    width: 375px;
    margin: 0 auto;
  }
}
.seach {
  width: 375px;
  height: 44px;
  background-color: rgba(245, 245, 245, 100);
}
.seach_cont {
  padding: 7px 12px;
}
.seach_cont_form {
  width: 351px;
  height: 30px;
  line-height: 20px;
  text-align: center;
}

.van-search__action {
  padding-left: 12px;
  background-color: rgba(245, 245, 245, 100);
}
.van-search__content {
  background-color: #fff;
}
/* 热搜 */
.HotSearch_cont {
  width: 351px;
  margin: 0 auto;
}
.HotSearch_cont_item_title {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.HotSearch_cont_item_title h1 {
  color: rgba(16, 16, 16, 100);
  font-size: 14px;
  font-family: PingFangSC-regular;
}
.HotSearch_cont_item_text {
  display: flex;
}
.HotSearch_cont_item_text p {
  width: 62px;
  height: 28px;

  margin-right: 10px;
  margin-top: 10px;
  line-height: 28px;
  border-radius: 25px;
  background-color: rgba(245, 245, 245, 100);
  color: rgba(16, 16, 16, 100);
  font-size: 12px;
  text-align: center;
  font-family: Arial;
}
.HotSearch_cont_item_text p:nth-child(4) {
  width: 80px;
}
</style>

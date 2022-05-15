<template>
  <div class="index">
    <!--  nav-->
    <div class="nav">
      <div class="nav_cont">
        <van-search
          class="class_search"
          v-model="value"
          shape="round"
          background="#f5f5f5"
          placeholder="请输入搜索关键词"
        />
      </div>
    </div>
    <div class="sider_item_dis">
      <!-- 侧边导航 -->

      <div class="sidebar">
        <div class="siderbar_cont">
          <van-sidebar v-model="activeKey">
            <van-sidebar-item title="生鲜" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
          </van-sidebar>
        </div>
      </div>
      <!-- 右边标题 -->
      <div class="sidebar_right">
        <div>
          <van-tabs class="van-tabsclss" type="card" color="blue">
            <van-tab class="class_tab" title="标签 1">
              <div class="list">
                <div class="list_cont">
                  <div
                    v-for="(item, index) in arrList5"
                    :key="index"
                    class="list_cont_item1"
                    @click="onurl2(item)"
                  >
                    <van-card class="list_cont_itemm" :thumb="item.goods_image">
                      <template #tags>
                        <div class="list_cont_itemm_ttile1">
                          {{ item.goods_name }}
                        </div>
                        <div class="list_cont_itemm_ttile3">
                          特级苹果 | 1500g | 进口
                        </div>

                        <van-tag
                          class="list_cont_itemm_ttile"
                          plain
                          type="danger"
                          >特价</van-tag
                        >
                        <van-tag
                          plain
                          class="list_cont_itemm_ttile2"
                          type="danger"
                          >21小时发货</van-tag
                        >
                        <div class="bargain_cont_item1_btm_text">
                          20.9<span>/箱</span>
                        </div>
                      </template>
                      <template #footer>
                        <van-icon
                          class="list_img"
                          name="shopping-cart"
                          color="white"
                        />
                      </template>
                    </van-card>
                  </div>
                </div>
              </div>
            </van-tab>

            <van-tab title="标签 2">内容 2</van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
    <nav2 :active="active"></nav2>
  </div>
</template>

<script>
import nav2 from "../components/nav.vue";
// @ is an alias to /src
export default {
  name: "shuiguoshucai",
  components: { nav2 },
  data() {
    return {
      arrList1: [],
      activeKey: 0,
      arrList5: [],
      active: 1,
    };
  },
  methods: {
    onurl1() {
      this.$router.push("/");
    },
    onurl2(msg) {
      this.$router.push({
        path: "/shangpinxiangqing",
        query: {
          goods_id: msg.goods_id,
        },
      });
    },
  },
  created() {
    this.$axios.get("/page/goods").then((res) => {
      console.log(res);
      // 1. 把异步请求到的数据 放到 data中的 list数组中
      this.arrList5 = res.data;
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
  background: #f5f5f5;
  height: 707px;
}

.nav_cont {
  display: flex;
  justify-content: space-between;
  width: 351px;
  margin: 0 auto;
}
.nav_cont .van-grid {
  height: 73px;
  overflow: hidden;
}

.nav_cont {
  position: relative;
}
.nav_cont_1 {
  position: absolute;
  top: 23px;
}
.nav_cont_2 {
  height: 40px;
  position: absolute;
  left: 40px;
}
.nav_cont_3 {
  width: 80px;
  position: absolute;
  background: #f5f5f5;
  height: 73px;
  right: 10px;
}
.nav_cont_3 .van-icon:nth-child(1) {
  margin-left: 30px;
}
.nav_cont_3 .van-icon:nth-child(2) {
  line-height: 73px;
  margin-left: 15px;
}
.van-grid-item__content {
  height: 10px;
}
/* 侧边栏 */
.siderbar_cont {
  height: 550px;
  background: #f5f5f5;
}
.van-sidebar-item {
  height: 50px;
  line-height: 40px;
  text-align: center;
}
/* 侧边栏 */
.sider_item_dis {
  display: flex;
}
.sidebar_right {
  padding-top: 10px;
  background-color: #fff;
  width: 301px;
}
.van-tabsclss {
  width: 300px;
}
/* 列表 */
.list {
  margin-top: 12px;
}
.list_cont {
  width: 301px;
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
  color: rgba(157, 158, 157, 100);
  margin-top: 10px;
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
.list_cont_item1 {
  margin-bottom: 10px;
  border-bottom: 1px solid red;
}
.bargain_cont_item1_btm_text {
  font-size: 12px;
  color: rgba(206, 95, 65, 100);
  width: 61px;
  height: 20px;
}

.bargain_cont_item1_btm_text span {
  color: #000000;
}
.class_search {
  width: 351px;
  margin: 0 auto;
}
.van-search__content {
  background: #fff;
  margin: 10px 0;
}
</style>

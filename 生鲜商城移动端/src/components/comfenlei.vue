<template>
  <div class="hello">
    <van-grid class="Classifi" :border="false" column-num="5" icon-size="40px">
      <van-grid-item
        v-for="(item, index) in arrList1"
        :key="index"
        :icon="item.imgUrl"
        :text="item.text"
        @click="onurl2"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "feilei",
  data() {
    return {
      arrList1: [],
    };
  },
  created() {
    this.$axios
      .get("http://pt.codecore.cn/index.php?s=/api/page/cate")
      .then((res) => {
        console.log(res);
        // 1. 把异步请求到的数据 放到 data中的 list数组中
        this.arrList1 = res.data.data.data;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

</style>

<template>
  <div class="home">
    <!-- 顶部 -->
    <van-nav-bar>
      <template #left>
        <van-icon name="location" />
      </template>
      <template #title>
        <van-search placeholder="请输入搜索关键词" />
      </template>
      <template #right>
        <van-icon name="scan" />
        <van-icon name="chat-o" />
      </template>
    </van-nav-bar>
    <!-- 分类 -->
    <van-grid column-num="5" :border="false">
      <!-- 3. 循环展示api请求拿到的数据 -->
      <van-grid-item v-for="item in list" :key="item.imgUrl" >
        <van-image :src="item.imgUrl"  />
        <div class="text">{{item.text}}</div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
// @ is an alias to /src
// import Axios from 'axios'
export default {
  name: "Home",
  data(){
    return {
      // 2. 用来存放 api接口 异步请求获取到的分类数据 然后在页面显示
      list:[]
    }
  },
  created() {
    this.$axios.get("/page/cate").then((res) => {
      console.log(res);
      // 1. 把异步请求到的数据 放到 data中的 list数组中
      this.list = res.data.data.data
    });
  },
  components: {},
};
</script>
<style scoped>
.van-nav-bar {
  background: lightskyblue;
}
.van-icon {
  color: white;
  font-size: 20px;
}
.van-icon:nth-child(2) {
  margin: auto 8px;
}
.van-search {
  width: 100%;
  margin: auto 0;
  padding: 0;
}

/* .van-grid-item__content{
  background: #aca4a4 !important;
} */
.van-grid-item .van-image{
  border-radius: 100%;
  width: 56px;
  height: 56px;
  margin: auto;
  overflow: hidden;
}
.van-grid-item  .text{
  color: #666;
  margin-top: 8px;
  font-size: 14px;
}
</style>

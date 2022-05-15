<template>
  <div class="hello">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/"
        >主页</van-tabbar-item
      >
      <van-tabbar-item icon="label-o" to="/fenlei"
        >分类</van-tabbar-item
      >
      <van-tabbar-item icon="shopping-cart-o" to="/gouwuche"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item
        icon="user-circle-o" to='/my'
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["active"],
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: black;
}
</style>

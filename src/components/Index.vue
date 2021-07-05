<template>

  <el-container>
    <Nav></Nav>
    <div class="banner">
      <el-carousel height="700px">
        <el-carousel-item v-for="item in url" :key="item">
          <el-image :src="item" style="height: 100%;width: 100%"/>
        </el-carousel-item>
      </el-carousel>
    </div>
  </el-container>


</template>

<script>
import Nav from "./common/Nav";

export default {
  name: "Index",
  components: {
    Nav
  },

  data() {
    return {
      url: ['https://www.12306.cn/index/images/party100th/banner01.jpg', 'https://www.12306.cn/index/images/pic/banner20201223.jpg', 'https://www.12306.cn/index/images/pic/banner20200707.jpg']
    }
  }
}
</script>


<style scoped>
.banner{
  width: 100%;
  position: absolute;
  top: 10%;
}
</style>

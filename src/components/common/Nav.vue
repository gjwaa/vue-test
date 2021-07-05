<template>
<!--  <div class="nav">-->
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">车票</template>
            <el-submenu index="2-1">
              <template slot="title">购买</template>
              <el-menu-item index="2-1-1">单程</el-menu-item>
              <el-menu-item index="2-1-2">连续换乘</el-menu-item>
            </el-submenu>
            <el-submenu index="2-2">
              <template slot="title">变更</template>
              <el-menu-item index="2-2-1">退票</el-menu-item>
              <el-menu-item index="2-2-2">变更到站</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">团购服务</el-menu-item>
          <el-menu-item index="4">会员服务</el-menu-item>
          <el-menu-item index="5">站车服务</el-menu-item>
          <el-menu-item index="6">商旅服务</el-menu-item>
          <el-menu-item index="7">出行指南</el-menu-item>
          <el-menu-item index="8">信息查询</el-menu-item>

        </el-menu>
      </el-header>
    </el-container>
<!--  </div>-->

</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.el-menu {
  padding-left: 18%;
}

.el-menu-item, .el-submenu {
  padding: 0 2%;
}
.el-container{
  width: 100%;
}
/*.nav {*/
/*  width: 100%;*/
/*}*/
</style>

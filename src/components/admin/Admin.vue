<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="4">
        <div class="grid-content">
          <!--          <LeftNav></LeftNav>-->
          <el-menu
            default-active="1-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1-1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1" @click="goTo('/userInfo')">用户信息</el-menu-item>
                <el-menu-item index="1-2" @click="goTo('/userTable')">用户列表</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <router-view></router-view>
        </div>
      </el-col>

    </el-row>


    <!--    <el-col :span="18">-->
    <!--      -->
    <!--    </el-col>-->
  </div>
</template>

<script>

export default {
  name: "Admin",
  components: {
    LeftNav: () => import('./LeftNav'),

  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);

    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goTo(path) {
      this.$router.replace(path);
    }
  }
}
</script>

<style scoped>

</style>

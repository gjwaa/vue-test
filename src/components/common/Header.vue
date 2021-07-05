<template>
  <el-container>
    <el-header>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content">
            <el-image :src="src" @click="toIndex"></el-image>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <el-input v-model="search" placeholder="搜索车票/餐饮" style="width: 500px"></el-input>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                  English<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>English</el-dropdown-item>
                <el-dropdown-item>简体中文</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>&nbsp;&nbsp;&nbsp;&nbsp;
            <el-dropdown>
                <span class="el-dropdown-link">
                  我的12306<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>火车票订单</el-dropdown-item>
                <el-dropdown-item>后补订单</el-dropdown-item>
                <el-dropdown-item>定期票订单</el-dropdown-item>
                <el-dropdown-item>约号订单</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <router-link to="/login">登录</router-link>
            <router-link to="/regis">注册</router-link>
          </div>
        </el-col>
      </el-row>
    </el-header>
  </el-container>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      src: './static/logo.PNG',
      search: ''
    }
  },
  methods: {
    toIndex:function (){
      this.$router.push("/index")
    }
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

.el-icon-arrow-down {
  font-size: 12px;
}

a {
  text-decoraction: none;
  color: #409EFF;
}
a:link {
  text-decoraction: none;
  color: #409EFF;
}
a:hover{
  text-decoraction: none;
  color: rgba(64, 158, 255, 0.5);
}
.router-link-active {
  text-decoration: none;
}

</style>

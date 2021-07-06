<template>

  <el-container>

    <div class="banner">
      <Nav></Nav>
      <el-carousel height="400px">
        <el-carousel-item v-for="item in url" :key="item">
          <el-image :src="item" style="height: 100%;width: 100%"/>
        </el-carousel-item>
      </el-carousel>
      <div class="opt-box">
        <el-tabs :tab-position="tabPosition" style="height: 100%;">
          <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i>车票</span>
            <el-tabs v-model="activeName1" @tab-click="handleClick">
              <el-tab-pane label="单程" name="first">
                <div class="block">
                  <span class="demonstration">出发日期</span>
                  <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                </div>
              </el-tab-pane>
              <el-tab-pane label="往返" name="second">
                <div class="block">
                  <span class="demonstration">出发日期</span>
                  <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>

                </div>
                <br>
                <div>
                  <span class="demonstration">返回日期</span>
                  <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                </div>
              </el-tab-pane>
              <el-tab-pane label="连续换乘" name="third">
                <div class="block">
                  <span class="demonstration">出发日期</span>
                  <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                </div>
              </el-tab-pane>
              <el-tab-pane label="改退签" name="fourth">

              </el-tab-pane>
            </el-tabs>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i>常用查询</span>

          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i>订餐</span>

          </el-tab-pane>
        </el-tabs>
      </div>
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
      value1: '',
      activeName1: 'first',
      tabPosition: 'left',
      url: ['https://www.12306.cn/index/images/party100th/banner01.jpg', 'https://www.12306.cn/index/images/pic/banner20201223.jpg', 'https://www.12306.cn/index/images/pic/banner20200707.jpg']
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>


<style scoped>
.banner {
  width: 90%;
  margin: auto;
}

.opt-box {
  position: absolute;
  top: 40%;
  left: 25%;
  -webkit-transform: translate(-50%, -50%);
  width: 500px;
  height: 300px;
  background-color: #fff;
  z-index: 999;
}

.el-tab-pane {

  width: 100%;
}
</style>

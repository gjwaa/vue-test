<template>

  <el-container>

    <div class="banner">
      <el-carousel height="500px">
        <el-carousel-item v-for="item in url" :key="item">
          <el-image :src="item" style="height: 100%;width: 100%"/>
        </el-carousel-item>
      </el-carousel>

      <div class="login_box">

        <el-main>
          <el-tabs v-model="activeName" @tab-click="handleClick">

            <el-tab-pane label="扫码登录" name="first">
              <el-image src="../static/saoma.png"></el-image>
            </el-tab-pane>

            <el-tab-pane label="账号登录" name="second">
              <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                       class="demo-ruleForm">
                <el-form-item label="账号" prop="acc">
                  <el-input type="text" v-model="ruleForm.acc" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pwd">
                  <el-input type="password" v-model="ruleForm.pwd" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </div>

    </div>

  </el-container>


</template>

<script>
import Qs from 'qs'

export default {
  name: 'login',
  data() {
    var validateAcc = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'));
      } else {
        if (this.ruleForm.acc !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePwd = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.pwd !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    return {
      url: ['https://www.12306.cn/index/images/pic/banner-login-20200629.jpg', 'https://www.12306.cn/index/images/pic/banner-login-20200924.jpg'],
      activeName: 'second',
      ruleForm: {
        acc: '',
        pwd: '',
        clientVerify: 'easq'
      },
      rules: {
        acc: [
          {validator: validateAcc, trigger: 'blur'}
        ],
        pwd: [
          {validator: validatePwd, trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios({
            url: 'admin/login',
            method: 'post',
            transformRequest: [function (data) {
              // 对 data 进行任意转换处理
              return Qs.stringify(data)
            }],
            data: {
              acc: this.ruleForm.acc,
              pwd: this.ruleForm.pwd,
              clientVerify: 'easq'
            }
          }).then(response => {
            console.log(response)
          }).catch(err => {
            console.log(err)
          })

          this.$message({
            message: '登陆成功',
            type: 'success'
          });
          // this.$router.push("/admin");
        } else {
          this.$message.error('登陆失败');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>
.login_box {
  position: absolute;
  top: 40%;
  left: 80%;
  -webkit-transform: translate(-50%, -50%);
  background-color: white;
  z-index: 999;
  width: 300px;

}

.banner {
  width: 100%;

}

</style>

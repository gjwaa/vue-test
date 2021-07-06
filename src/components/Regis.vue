<template>
  <el-container>

  <div class="regis_box">
    <Nav></Nav>
    <div style="border: #409EFF solid 1px;margin-top: 50px;border-radius: 5px">
      <div style="width: 100%;height: 3%;background-color: #409EFF;">&nbsp;&nbsp;&nbsp;&nbsp;账户信息</div>
      <div style="margin: 3% auto;width: 40%;">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"
                 :label-position="labelPosition">
          <el-form-item label="用户名" prop="acc">
            <el-input v-model="ruleForm.acc" placeholder="6 到 30 个字母、数字或_开头"></el-input>
          </el-form-item>
          <el-form-item label="登录密码" prop="pwd">
            <el-input v-model="ruleForm.pwd" placeholder="6 到 20 个字母、数字或符号"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="rePwd">
            <el-input v-model="ruleForm.rePwd" placeholder="再次输入密码"></el-input>
          </el-form-item>
          <el-form-item label="证件类型" prop="idType">
            <el-select v-model="ruleForm.idType" placeholder="请选择证件类型">
              <el-option label="中国居民身份证" value="idCard"></el-option>
              <el-option label="护照" value="passport"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
    </el-container>
</template>

<script>
import Nav from "./common/Nav";
export default {
  name: "Regis",
  components:{
    Nav
  },
  data() {
    var validatePwd = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pwd) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      labelPosition: 'right',
      ruleForm: {
        acc: '',
        pwd: '',
        rePwd: '',
        idType: ''
      },
      rules: {
        acc: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 6, max: 30, message: '长度在 6 到 30 个字母、数字或_开头', trigger: 'blur'},
          {pattern: /^[a-zA-Z0-9_]+$/, message: '字母、数字或_开头', trigger: 'blur'}
        ],
        pwd: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, max: 20, message: '长度在 6 到 20 个字母、数字或符号', trigger: 'blur'},
          {pattern: /^[a-zA-Z0-9]+$/, message: '字母、数字或符号', trigger: 'blur'}
        ],
        rePwd: [
          {required: true, message: '请再次输入密码', trigger: 'blur'},
          {validator: validatePwd, trigger: 'blur'}
        ],
        idType: [
          { required: true, message: '请选择证件类型', trigger: 'change' }
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '注册成功',
            type: 'success'
          });
        } else {
          this.$message.error("注册失败")
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
.regis_box {
  width: 60%;
  height: 70%;
  margin: auto;
  /*border: #409EFF solid 1px;*/
  /*position: absolute;*/
  /*top: 50%;*/
  /*left: 50%;*/
  /*-webkit-transform: translate(-50%, -50%);*/
  border-radius: 10px;
}

.el-input {
  width: 250px;
}
.el-select{
  width: 250px;
}
</style>

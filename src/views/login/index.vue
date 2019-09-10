<template>
  <div class="login">
    <div class="login-box">
      <!-- logo -->
      <div class="logo">
        <img src="./images/login_logo.png" alt />
      </div>
      <!-- form -->
      <!-- 手机号 -->
      <el-form :model="loginForm" :rules="rules" ref="loginForm" class="demo-ruleForm">
        <el-form-item prop="name">
          <el-input v-model="loginForm.name" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="code">
          <el-row>
            <el-col :span="12">
              <el-input v-model="loginForm.code" placeholder="请输入验证码"></el-input>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-button>发送验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <!-- 霸王条款 -->

        <el-form-item prop="agree">
          <el-checkbox v-model="loginForm.agree"></el-checkbox>
          <span class="bawang">
            我已阅读
            <a href="javascript:void(0);">沙比协议</a>
            和
            <a href="javascript:void(0);">脑残条款</a>
          </span>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
          <el-button type="primary" class="btn-login" @click="getForm('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loginForm: {
        name: "15886387748",
        code: "123456",
        agree: false
      },
      rules: {
        name: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          {
            pattern: /0?(13|14|15|18)[0-9]{9}/,
            message: "请输入正确的手机号",
            trigger: "blur"
          }
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { len: 6, message: "验证码长度为6位", trigger: "blur" }
        ],
        agree: [
          {
            pattern: /true/,
            message: "请认真阅读沙比协议和脑残条款并同意",
            trigger: "click"
          }
        ]
      }
    };
  },
  methods: {
    getForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post(
              "http://ttapi.research.itcast.cn/mp/v1_0/authorizations",
              this.loginForm
            )
            .then(res => {
              this.$message.success("登录成功！");
              this.$router.push("/home");
            })
            .catch(error => {
              this.$message.error("账号或密码错误！");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  display: flex;
  background: url("./images/login_bg.jpg") no-repeat center / cover;
  .login-box {
    width: 300px;
    height: 300px;
    padding: 40px;
    background-color: #fff;
    .logo {
      text-align: center;
      padding-bottom: 30px;
      img {
        width: 150px;
      }
    }
    .bawang {
      margin-left: 8px;
      a {
        color: blue;
      }
    }
    .btn-login {
      width: 100%;
    }
  }
}
</style>
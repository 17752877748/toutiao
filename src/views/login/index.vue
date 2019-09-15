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
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="code">
          <el-row>
            <el-col :span="12">
              <el-input v-model="loginForm.code" placeholder="请输入验证码"></el-input>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-button @click="getCode" :disabled="isdisabled">{{codeBtn}}</el-button>
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
          <el-button
            type="primary"
            class="btn-login"
            @click="getForm('loginForm')"
            :loading="isloading"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        mobile: "13911111111",
        code: "",
        agree: false
      },
      rules: {
        mobile: [
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
      },
      // 发送验证码后改true禁用按钮
      isdisabled: false,
      // 发送验证码后更改文本为倒计时
      codeBtn: "发送验证码",
      // 点击登录后禁用按钮,避免多次请求
      isloading: false
    };
  },
  methods: {
    // 登录验证
    getForm(formName) {
      this.isloading = true;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .post(
              "http://ttapi.research.itcast.cn/mp/v1_0/authorizations",
              this.loginForm
            )
            .then(res => {
              const jsonStr = JSON.stringify(res.data.data);
              window.localStorage.setItem('userInfo', jsonStr);
              this.$message.success("登录成功！");
              this.$router.push("/home");
            })
            .catch(error => {
              this.$message.error("账号或密码错误！");
              this.isloading = false;
            });
        } else {
          console.log("error submit!!");
          this.isloading = false;
          return false;
        }
      });
    },
    // 获取验证码
    getCode() {
      this.isdisabled = true;
      let num = 60;
      let timeID = setInterval(() => {
        num--;
        this.codeBtn = `倒计时${num}秒`;
        if (num == 58) {
          this.loginForm.code = "246810";
        }
        if (num == 0) {
          this.isdisabled = false;
          this.codeBtn = "发送验证码";
          clearInterval(timeID);
        }
      }, 1000);
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
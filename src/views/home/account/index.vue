<template>
  <el-container class="account">
    <el-aside width="460px" class="my-aside">
      <el-form :model="form" :rules="rules">
        <el-form-item label="媒体名称" prop="name">
          <el-input v-model="form.name" size="small"></el-input>
        </el-form-item>
        <el-form-item label="媒体简介">
          <el-input v-model="form.intro" size="small" type="textarea" :rows="2"></el-input>
        </el-form-item>
        <el-form-item label="头条号id">
          <el-input v-model="form.id" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item label="绑定手机">
          <el-input v-model="form.mobile" size="small" disabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" size="small"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">保存更新</el-button>
        </el-form-item>
      </el-form>
    </el-aside>
    <el-main class="my-main">
      <el-upload action class="avatar-uploader" :http-request="Upload" :show-file-list="false">
        <img v-if="this.form.photo" :src="this.form.photo" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "account",
  data() {
    return {
      form: {
        name: "",
        id: "",
        intro: "",
        mobile: "",
        email: "",
        photo: ""
      },
      rules: {
        name: [{ required: true, message: "名称不能为空", trigger: "blur" }],
        email: [{ required: true, message: "邮箱不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    //   跟新
    save() {
      this.$axios
        .patch("/mp/v1_0/user/profile", this.form)
        .then(data => {
          if (data.status == 201) {
            this.$message.success("更新成功!");
            this.$axios.get("/mp/v1_0/user/profile").then(data => {
              this.form = data.data.data;
              this.$store.commit("userSave", this.form);
            });
          }
        })
        .catch(err => {
          this.$message.error("更新失败!");
          console.log(err);
        });
    },
    //自定义上传图片方式
    Upload(res) {
      let fd = new FormData();
      fd.append("photo", res.file);
      this.$axios
        .patch("/mp/v1_0/user/photo", fd)
        .then(data => {
          this.form.photo = data.data.data.photo;
          this.$store.commit("userSave", this.form);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.$axios.get("/mp/v1_0/user/profile").then(data => {
      this.form = data.data.data;
      this.$store.commit("userSave", this.form);
    });
  }
};
</script>

<style lang="less">
.account {
  .my-aside {
    width: 500xp;
  }
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
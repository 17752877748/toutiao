<template>
  <div>
    <!-- 上传图标盒子 -->
    <div class="picture" @click="upload">
      <img v-show="url" :src="url" alt />
      <p v-show="!url">点击选择图片</p>
      <i v-show="!url" class="el-icon-picture"></i>
    </div>
    <!-- 提示框 -->
    <el-dialog class="tishi" :visible.sync="dialogVisible" width="50%">
      <!-- 标签页(tab栏切换) -->
      <el-tabs v-model="activeName">
        <!-- 上传图片栏 -->
        <el-tab-pane label="上传图片" name="first">
          <el-upload
            class="avatar-uploader"
            action="http://ttapi.research.itcast.cn/mp/v1_0/user/images"
            :show-file-list="false"
            name="image"
            :headers="header"
            :on-success="upSuccess"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-tab-pane>
        <!-- 媒体库栏 -->
        <el-tab-pane label="媒体库" name="second">
          <media @change-xx="imageUrl = $event"></media>
        </el-tab-pane>
      </el-tabs>
      <!-- 确认取消按钮 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="ok">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// 导入媒体收藏
import media from "./media.vue";
export default {
  data() {
    return {
      // 上传之后图片地址
      imageUrl: "",
      // 确认后封面显示图片
      url: "",
      // 是否显示框
      dialogVisible: false,
      // 默认选中的tab栏
      activeName: "first",
      // 请求头
      header: {
        Authorization: `Bearer ${
          JSON.parse(window.localStorage.getItem("userInfo")).token
        }`
      }
    };
  },
  // props: ["url"],
  methods: {
    // 上传
    upload() {
      this.dialogVisible = true;
      this.imageUrl = this.url;
    },
    // 上传成功之后
    upSuccess(data) {
      this.imageUrl = data.data.url;
    },
    // 点击确认
    ok() {
      this.dialogVisible = false;
      this.url = this.imageUrl;
      // 把路径给父组件(用于父组件点击发布)
      this.$emit("change", this.url);
    }
    // dialogVisible() {
    // }
  },
  components: {
    media
  }
};
</script>

<style lang="less" scoped>
.picture {
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
    padding: 0;
    font-size: 20px;
  }
  i {
    font-size: 120px;
    color: #ccc;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
// 提示框
.tishi {
  // height: 500px;
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
}
</style>
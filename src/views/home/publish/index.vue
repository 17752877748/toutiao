<template>
  <div class="publish-wrap">
    <el-form ref="form" label-width="60px" :model="form" :rules="rules" class="demo-ruleForm">
      <!-- 标题-未完 -->
      <el-form-item label="标题" prop="title">
        <el-input placeholder="请输入标题" v-model="form.title"></el-input>
      </el-form-item>
      <!-- 内容 -->
      <el-form-item label="内容">
        <quillEditor :options="editorOption" v-model="form.content"></quillEditor>
      </el-form-item>
      <!-- 封面-未完 -->
      <el-form-item label="封面">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-form-item>
      <!-- 频道-未完 -->
      <el-form-item label="频道">
        <channel v-model="form.channel_id"></channel>
      </el-form-item>
      <!-- 按钮 -->
      <el-form-item label>
        <el-button size="small ">保存草稿</el-button>
        <el-button size="small " type="primary" @click="send">发布...</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 导入富文本编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";

// 导入频道组件
import channel from "@/components/channel/";
export default {
  name: "publish",
  components: {
    quillEditor,
    channel
  },
  data() {
    return {
      // 表单
      form: {
        // 标题
        title: "",
        // 频道
        channel_id: "",
        // 内容
        content: "",
        // 封面
        cover: {
          type: 0,
          images: []
        }
      },
      // 保存初始值
      oldForm: {},
      // 表单验证
      rules: {
        title: [
          { required: true, message: "请输入标题", trigger: "blur" },
          {
            min: 5,
            max: 15,
            message: "长度在 5 到 15 个字符",
            trigger: "change"
          }
        ]
      },
      //   富文本编辑器
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }], // superscript/subscript
            [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
            [{ direction: "rtl" }], // text direction
            [{ size: ["small", false, "large", "huge"] }], // custom dropdown
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ font: [] }],
            [{ align: [] }],
            ["image"],
            ["clean"] // remove formatting button
          ]
        }
      }
    };
  },
  methods: {
    // 发布按钮
    send() {
      if (this.$route.name == "edit") {
        // 修改进
        let id = this.$route.params.id;
        this.$axios
          .put(`/mp/v1_0/articles/${id}`, {
            title: this.form.title,
            content: this.form.content,
            cover: this.form.cover,
            channel_id: this.form.channel_id
          })
          .then(data => {
            if (data.status == 201) {
              this.$message.success("修改成功!");
              this.$router.push("/article");
            }
          })
          .catch(err => {
            this.$message.error("修改失败!");
            console.log(err);
          });
      } else {
        // 发布新增进
        this.$axios
          .post("/mp/v1_0/articles", this.form)
          .then(data => {
            if (data.status == 201) {
              this.$message.success("发布成功!");
              this.oldForm = this.form;
              this.$router.push("/article");
            }
          })
          .catch(err => {
            this.$message.error("发布失败!");
            console.log(err);
          });
      }
    },
    // 根据id获取信息
    loadData() {
      let id = this.$route.params.id;
      this.$axios.get(`/mp/v1_0/articles/${id}`).then(data => {
        this.form = data.data.data;
        this.oldForm = { ...this.form };
      });
    }
  },
  created() {
    // 只有修改才执行
    if (this.$route.name == "edit") {
      this.loadData();
    } else {
      this.oldForm = { ...this.form };
    }
  },
  watch: {
    "$route.params.id"() {
      if (this.$route.name == "edit") {
        this.loadData();
      } else {
        this.form.title = "";
        this.form.content = "";
        this.form.channel_id = "";
        this.oldForm.title = "";
        this.oldForm.content = "";
        this.oldForm.channel_id = "";
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    if (
      this.form.title == this.oldForm.title &&
      this.form.content == this.oldForm.content &&
      this.form.channel_id == this.oldForm.channel_id
    ) {
      next();
    } else {
      this.$confirm("页面存在改变的内容,是否离开?", "是否离开", {
        type: "warning"
      }).then(() => {
        next();
      });
    }
  }
};
</script>

<style lang="less">
.publish-wrap {
  background-color: #fff;
  .ql-editor {
    height: 400px;
  }
}
</style>
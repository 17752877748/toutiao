<template>
  <div class="publish-wrap">
    <el-form ref="form" label-width="60px" :model="form" class="demo-ruleForm">
      <!-- 标题-未完 -->
      <el-form-item label="标题">
        <el-input placeholder="请输入标题" v-model="form.title"></el-input>
      </el-form-item>
      <!-- 内容 -->
      <el-form-item label="内容">
        <quillEditor :options="editorOption"></quillEditor>
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
        <channel></channel>
      </el-form-item>
      <!-- 按钮 -->
      <el-form-item label>
        <el-button size="small ">保存草稿</el-button>
        <el-button size="small " type="primary">发布...</el-button>
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
  components: {
    quillEditor,
    channel
  },
  data() {
    return {
      // 表单
      form: {
        title: "",
        channel_id: ""
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
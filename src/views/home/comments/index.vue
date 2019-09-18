<template>
  <div class="comments">
    <el-table :data="tableData" v-loading="isloading" style="width: 100%">
      <el-table-column prop="title" label="标题" width="220"></el-table-column>
      <el-table-column prop="comment_status" label="评论状态" width="220">
        <template slot-scope="scope">{{ scope.row.comment_status ? "正常" : "关闭" }}</template>
      </el-table-column>
      <el-table-column prop="total_comment_count" label="总评论数" width="220"></el-table-column>
      <el-table-column prop="fans_comment_count" label="评论粉丝数" width="220"></el-table-column>
      <el-table-column prop="address" label="允许评论" width="220">
        <template slot-scope="scope">
          <!-- 
                v-model：双向绑定数据
                active-color：开关打开时的颜色
                inactive-color：关闭时颜色
          -->
          <el-switch
            @change="doChange(scope.row)"
            v-model="scope.row.comment_status"
            active-color="#13ce66"
            inactive-color="#ff4949"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" plain>修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[10, 20, 30, 40,50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      :disabled="isloading"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "comments",
  data() {
    return {
      tableData: [],

      //当前页
      page: 1,
      //页容量
      pageSize: 10,
      //总条数
      total: 0,
      // 加载中
      isloading: false
    };
  },
  methods: {
    // 页容量改变事件
    handleSizeChange(sizi) {
      this.pageSize = sizi;
      this.loadData();
    },
    // 页码改变事件
    handleCurrentChange(page) {
      this.loadData(page);
    },
    // 请求数据
    loadData(page = 1) {
      this.isloading = true;
      this.$axios
        .get("/mp/v1_0/articles", {
          params: {
            response_type: "comment",
            page,
            per_page: this.pageSize
          }
        })
        .then(res => {
          this.tableData = res.data.data.results;
          this.total = res.data.data.total_count;
          this.page = res.data.data.page;
          this.pageSize = res.data.data.per_page;
          this.isloading = false;
        });
    },
    // 允许评论状态改变
    doChange(row) {
      this.$axios
        .put(`/mp/v1_0/comments/status?article_id=${row.id}`, {
          allow_comment: row.comment_status
        })
        .then(data => {
          // console.log(data);
        });
    }
  },
  created() {
    this.loadData();
  }
};
</script>

<style>
</style>
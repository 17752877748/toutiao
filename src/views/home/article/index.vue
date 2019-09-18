<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <!-- 表单 -->
      <el-form v-model="searchForm">
        <el-form-item label="状态">
          <!--  单选框 -->
          <el-radio-group v-model="searchForm.radio">
            <el-radio label>全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 频道 -->
        <el-form-item label="频道">
          <channel v-model="searchForm.channel_id"></channel>
        </el-form-item>
        <!-- 时间 -->
        <el-form-item label="时间">
          <el-date-picker
            value-format="yyyy-MM-dd"
            v-model="searchForm.date"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
        <!-- 筛选按钮 -->
        <el-form-item label>
          <el-button type="primary" @click="screen">筛选</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 表格 -->
    <p class="pbiaoqian">
      共找到
      <span>{{total}}</span>条符合条件的内容:
    </p>
    <el-table v-loading="loading" :data="tableData" style="width: 100%">
      <el-table-column prop="cover.images[0]" label="封面" width="220">
        <template slot-scope="scope">
          <img
            v-for="(item,i) in scope.row.cover.images"
            width="60"
            height="60"
            :src="item"
            :key="i"
          />
        </template>
      </el-table-column>
      <el-table-column prop="title" label="标题" width="220"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <el-tag>{{scope.row.status | newStatus}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="pubdate" label="发布时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="change(scope.row)">修改</el-button>
          <el-button type="danger" size="mini" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      :disabled="loading"
      background
      :page-size="10"
      @current-change="currentPage"
      layout="total, prev, pager, next"
      :total="total"
    ></el-pagination>
  </el-card>
</template>

<script>
import channel from "@/components/channel/";

export default {
  data() {
    return {
      searchForm: {
        radio: "",
        channel_id: "",
        date: []
      },
      // 查询到的符合条件数量
      total: 0,
      // 表格数据数组
      tableData: [],
      // 文章频道数组
      channelList: [],
      // 加载动画
      loading: false
    };
  },
  components: {
    channel
  },
  methods: {
    // 点击修改
    change(row) {
      this.$router.push(`/edit/${row.id}`);
    },
    // 点击删除
    del(id) {
      this.$confirm("你确定要删除这条内容吗?", "警告", {
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios
            .delete(
              `http://ttapi.research.itcast.cn/mp/v1_0/articles/${id}`,
              {}
            )
            .then(data => {
              this.$message.success("删除成功!");
            })
            .catch(err => {
              this.$message.error("删除失败!");
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "怂货,你删我呀o(￣ヘ￣o＃)!"
          });
        });
    },
    // 加载数据的方法:
    loadData(page) {
      this.loading = true;
      this.$axios
        .get("http://ttapi.research.itcast.cn/mp/v1_0/articles", {
          params: {
            status:
              this.searchForm.radio == "" ? undefined : this.searchForm.radio,
            channel_id:
              this.searchForm.channel_id == ""
                ? undefined
                : this.searchForm.channel_id,
            begin_pubdate: this.searchForm.date[0],
            end_pubdate: this.searchForm.date[1],
            page,
            per_page: 10
          }
        })
        .then(data => {
          this.total = data.data.data.total_count;
          this.tableData = data.data.data.results;
          this.loading = false;
        })
        .catch(err => {
          window.console.log(err);
        });
    },
    // 筛选事件
    screen() {
      this.loadData(1);
    },
    // 页码发生改变事件
    currentPage(page) {
      this.loadData(page);
    }
  },
  created() {
    // 进入页面时获取表格数据
    this.loadData(1);
  },
  filters: {
    // 过滤对状态进行操作
    newStatus(val) {
      switch (val) {
        case 0:
          return "草稿";
        case 1:
          return "待审核";
        case 2:
          return "审核通过";
        case 3:
          return "审核失败";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.pbiaoqian {
  margin: 16px 0;
  span {
    font-weight: bold;
  }
}
</style>
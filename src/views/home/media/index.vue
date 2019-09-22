<template>
  <el-card class="box-card" v-loading="loading">
    <div slot="header" class="clearfix">
      <el-radio-group v-model="menu" @change="changeMenu">
        <el-radio-button label="全部"></el-radio-button>
        <el-radio-button label="收藏"></el-radio-button>
      </el-radio-group>
      <el-upload
        class="upload-demo"
        style="float:right;"
        action="http://ttapi.research.itcast.cn/mp/v1_0/user/images"
        :on-success="doSuccess"
        :show-file-list="false"
        :headers="header"
        name="image"
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
    <!-- 图片 -->
    <div>
      <el-row :gutter="20">
        <el-col :span="4" v-for="item in listData" class="card-box">
          <el-card :body-style="{ padding: '0px' }">
            <div class="top-pic">
              <img :src="item.url" class="image" />
            </div>
            <!-- 两按钮 -->
            <div class="bottom-pic">
              <el-tooltip :content="item.is_collected ? '取消收藏' : '收藏'" placement="top">
                <el-button
                  @click="goCollect(item)"
                  type="text"
                  :icon="`el-icon-star-${item.is_collected ? 'on' : 'off'}`"
                ></el-button>
              </el-tooltip>
              <el-tooltip content="删除" placement="top">
                <el-button type="text" icon="el-icon-delete" @click="del(item)"></el-button>
              </el-tooltip>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="12"
      :total="total"
      :current-page="current"
      @current-change="goPage"
    ></el-pagination>
  </el-card>
</template>

<script>
export default {
  name: "media",
  data() {
    return {
      // 加载中
      loading: false,
      // 每页数据
      listData: [],
      // 切换
      menu: "全部",
      // 当前页
      current: 1,
      // 总数量
      total: 0,
      // 请求头
      header: {
        Authorization: `Bearer ${
          JSON.parse(window.localStorage.getItem("userInfo")).token
        }`
        // Authorization: `Bearer ${this.$store.state.userInfo.token}`
      }
    };
  },
  computed: {
    // header(){
    // return {
    //     // Authorization: `Bearer ${
    //     //   JSON.parse(window.localStorage.getItem("userInfo")).token
    //     // }`
    //     Authorization: `Bearer ${this.$store.state.userInfo.token}`
    //   }
    // }
  },
  methods: {
    // 上传成功钩子
    doSuccess() {
      this.loadData(1);
      this.current = 1;
    },
    // 素材数据请求
    loadData(page = 1) {
      this.loading = true;
      this.$axios
        .get("/mp/v1_0/user/images", {
          params: {
            collect: this.menu == "收藏",
            page,
            per_page: 12
          }
        })
        .then(data => {
          this.total = data.data.data.total_count;
          this.listData = data.data.data.results;
          this.loading = false;
          //   console.log(data.data.data.results);
        });
    },
    // 分页
    goPage(page) {
      this.current = page;
      this.loadData(page);
    },
    // 切换
    changeMenu() {
      this.loadData();
    },
    // 去收藏(点击收藏)
    goCollect(item) {
      item.is_collected = !item.is_collected;
      this.$axios
        .put(`/mp/v1_0/user/images/${item.id}`, {
          collect: item.is_collected
        })
        .then(data => {
          this.loadData();
          this.current = 1;
        })
        .catch(err => {
          item.is_collected = !item.is_collected;
        });
    },
    // 删除
    del(item) {
      this.$axios
        .delete(`/mp/v1_0/user/images/${item.id}`)
        .then(data => {
          if (data.status == 204) {
            this.$message.success("删除成功!");
            this.loadData(this.current);
          }
        })
        .catch(err => {
          this.$message.error("网络异常!");
          console.log(err);
        });
    }
  },
  created() {
    this.loadData();
  }
};
</script>

<style lang="less">
.card-box {
  margin-bottom: 20px;
  .top-pic {
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .bottom-pic {
    background-color: #f4f5f6;
    display: flex;
    justify-content: space-around;
  }
}
</style>
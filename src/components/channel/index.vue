<template>
  <el-select placeholder="请选择" v-model="value">
    <el-option label="全部频道" value></el-option>
    <el-option v-for="(item, i) in channels" :label="item.name" :value="item.id"></el-option>
  </el-select>
</template>

<script>
export default {
  data() {
    return {
      // 文章频道数组
      channels: [],
      value: ""
    };
  },
  created() {
    // 获取文章频道
    this.$axios
      .get("http://ttapi.research.itcast.cn/mp/v1_0/channels")
      .then(data => {
        this.channels = data.data.data.channels;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
</style>
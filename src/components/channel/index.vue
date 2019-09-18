<template>
  <el-select placeholder="请选择" :value="value" @change="$emit('change',$event)">
    <el-option label="全部频道" value></el-option>
    <el-option v-for="item in channelList" :label="item.name" :value="item.id"></el-option>
  </el-select>
</template>

<script>
export default {
  name: "mychannel",

  props: ["value"],

  model: {
    prop: "value",
    event: "change"
  },
  data() {
    return {
      // 文章频道数组
      channelList: []
    };
  },
  created() {
    // 获取文章频道
    this.$axios
      .get("http://ttapi.research.itcast.cn/mp/v1_0/channels")
      .then(data => {
        this.channelList = data.data.data.channels;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
</style>
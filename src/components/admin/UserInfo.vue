<template>
  <div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="uid"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="uname"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="uage"
        label="年龄"
        width="180">
      </el-table-column>
      <el-table-column
        prop="uaddress"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Qs from "qs";

export default {
  name: "UserInfo",
  data() {
    return {
      tableData: [],
    }
  },
  created() {
    // this.$axios.post('/admin/allInfo').then(res => {
    //   this.tableData = res.data;
    //   console.log(res.data)
    // }).catch(err => {
    //   console.log(err)
    // })
    this.$axios({
      url: '/admin/allInfo',
      method: 'post',

    }).then(response => {
      this.tableData = response.data;
      console.log(response.data)
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {}
}
</script>

<style scoped>

</style>

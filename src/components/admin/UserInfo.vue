<template>
  <div>
    <el-table
      :data="tableData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)"
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
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 30]"
      :page-size=pageSize
      layout="total, sizes, prev, pager, next, jumper"
      :total=this.tableData.length>
    </el-pagination>
  </div>
</template>

<script>
import Qs from "qs";

export default {
  name: "UserInfo",
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pageSize: 5,

    }
  },
  beforeCreate() {
    this.$axios({
      url: '/admin/allInfo',
      method: 'post'
    }).then(response => {
      this.tableData = response.data;
      console.log(response.data)
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize=val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage=val

    }
  }

}
</script>

<style scoped>

</style>

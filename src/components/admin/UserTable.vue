<template>
  <div v-cloak>
    <el-transfer v-model="value" :data="allData"  :titles="['Source', 'Target']">
    </el-transfer>
  </div>


</template>

<script>
export default {
  name: "UserTable",
  data() {
    return {
      allData: [],
      value: []
    };
  },
  beforeCreate() {
    this.$axios({
      url: '/admin/userTable',
      method: 'post',
    }).then(response => {
      console.log(response.data)
      const allData = response.data
      const data = [];
      for (let i = 0; i < allData.length; i++) {
        data.push({
          key: i,
          label:allData[i],
        });
      }
      this.allData = data;
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>

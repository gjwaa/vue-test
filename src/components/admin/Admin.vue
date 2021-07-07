<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="4">
        <div class="grid-content">
          <LeftNav></LeftNav>
        </div>
      </el-col>

      <el-col :span="12">
        <div class="grid-content">
          <router-view></router-view>
        </div>
      </el-col>

    </el-row>

  </div>
</template>

<script>

export default {
  name: "Admin",
  components: {
    LeftNav: () => import('./LeftNav'),

  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);

    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div>

    <LeftNav></LeftNav>

    <el-col :span="18">
      <router-view></router-view>
    </el-col>
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
    },
    goTo(path) {
      this.$router.replace(path);
    }
  }
}
</script>

<style scoped>

</style>

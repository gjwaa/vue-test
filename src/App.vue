<template>
  <div id="app">

    <Header></Header>

    <router-view/>

  </div>
</template>

<script>
import Header from "./components/common/Header";

export default {
  name: 'App',
  components: {
    // Header
    Header: () => import('./components/common/Header'),

  }

}
</script>


<style>

</style>

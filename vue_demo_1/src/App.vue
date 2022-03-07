<template>
  <div id="app">
    <Header/>
  </div>

  <router-view></router-view>
</template>

<script>
import Header from "@/components/layout/Header.vue"

export default {
  name: "app",
  components:{
    Header
  }
};
</script>

<style >
* {
  margin: 0px;
  padding: 0px;
}
</style>

<style scoped>

</style>

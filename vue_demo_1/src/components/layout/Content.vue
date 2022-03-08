<template>
  <div class="content-wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
name:"Content-app"
}
</script>

<style scoped>
.content-wrapper {
  margin: 30px;
  border: 3px solid green;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
}
</style>
<template>
  <div id="Footer">
    <span>&copy;Copyright 2022 by Teeratach</span>
    <p><b>{{ Footer_title }}</b></p>
    <p>Child component create <b>props</b>. The parent component sent data via tag props.</p>
  </div>
</template>

<script>
export default {
  name: "Footer-app",
  props: ["Footer_title"],
  mounted(){
      this.$emit("parent_prop", "This is data from Footer.vue")
  }
};
</script>

<style scoped>
#Footer{
    border: 1px solid black;
    padding: 20px;
    margin: 30px;
}
</style>
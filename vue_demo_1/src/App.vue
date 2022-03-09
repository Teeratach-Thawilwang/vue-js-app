<template>
  <Header />
  <Content />
  <Footer :Footer_title="FT_title" @parent_prop="parent_prop" />
  <div class="child-to-parent-data">
    <p>App.vue</p>
    <p>This line is in app.vue : <b>{{ parent_varaible }}</b></p>
    <p>Parent component create tag @parent_method="parent_method"</p>
    <p>Then create Method parent_method(value){}</p>
    <p>Child component send data via 'this.$emit('parent_method', "data")', in mounted(){}</p>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import Content from "@/components/layout/Content.vue";

export default {
  name: "app",
  data() {
    return {
      FT_title: "This is data from App.vue",
      parent_varaible: "",
    };
  },
  components: {
    Header,
    Footer,
    Content,
  },
  methods: {
    parent_prop(value) {
      this.parent_varaible = value;
    },
  },
};
</script>

<style >
* {
  margin: 0px;
  padding: 0px;
  font-family: cursive;
}
@font-face {
  font-family: "Fredoka", sans-serif;
  font-family: "Roboto", sans-serif;
  font-family: "Itim", cursive;
  src: url("https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&family=Itim&family=Roboto:wght@300;400;700&display=swap");
}
</style>

<style scoped>
.child-to-parent-data {
  border: 1px solid green;
  border-radius: 3px;
  margin: 30px;
  padding: 20px;
}
</style>

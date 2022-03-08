<template>
  <Header />
  <Content />
  <Footer :Footer_title="FT_title" @parent_prop="parent_prop" />
  <p class="child-to-parent-data">
    This line is in app.vue : <b>{{ parent_varaible }}</b>
  </p>
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

<template>
  <div id="demo5">
    <section class="topic">
      <h1>Binding</h1>
    </section>
    <section class="content">

      <p>imgURL bind and style bind to width attribute</p>
      <img v-bind:src="imgURL" v-bind:style="{ width: widthImg + '%' }" />

      <div class="content-btn">
        <p>href bind</p>
        <a :href="Demo4Link" target="_blank">Demo4</a>
      </div>

      <div :class="[isToggleClass ? error : '', important]">
        <p>Class binding : {{ isToggleClass ? "errorClass" : "None" }}</p>
        <button class="btn-class-error" @click="isToggleClass = !isToggleClass">
          {{ isToggleClass ? "Not use" : "Use" }} class error
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Demo-5",
  data() {
    return {
      imgURL: "https://www.w3schools.com/w3css/img_lights.jpg",
      widthImg: 50,
      Demo4Link: "http://localhost:8080/demo4",
      error: "errorClass",
      important: "importantClass",
      isToggleClass: true,
    };
  },
};
</script>

<style scoped>
.content a {
  text-decoration: none;
  color: #fff;
  background-color: rgb(185, 86, 86);
  border: 3px solid rgb(173, 56, 56);
  border-radius: 3px;
  padding: 2px 10px;
}

.content-btn {
  margin: 10px;
}
.content-btn p{
  margin-bottom: 10px;
}

.errorClass {
  background-color: rgb(255, 151, 133);
  color: rgb(0, 0, 0);
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
}

.importantClass {
  font-weight: bolder;
  margin: 20px;
}

.btn-class-error {
  font-weight: lighter;
  color: #fff;
  background-color: rgb(97, 97, 97);
  border-radius: 5px;
  padding: 3px 5px;
  margin-top: 10px;
}
</style>
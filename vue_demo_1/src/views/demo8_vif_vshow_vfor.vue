<template>
  <div id="demo8">
    <section class="topic">
      <h1>v-if v-show v-for</h1>
    </section>

    <section class="content">
      <div class="vIf">
        <h3>V-if</h3>
        <button @click="setGrade(10)">+10</button>
        <button @click="setGrade(-10)">-10</button>
        <div v-if="grade >= 80">
          <p>Grade : A</p>
        </div>
        <div v-else-if="grade >= 70">
          <p>Grade : B</p>
        </div>
        <div v-else-if="grade >= 60">
          <p>Grade : C</p>
        </div>
        <div v-else>
          <p>Grade : F</p>
        </div>
        <p>v-if will render only match case.</p>
      </div>

      <div class="vShow">
        <h3>v-show</h3>
        <button @click="isShow = !isShow">
          {{ isShow ? "Hide" : "Show" }}
        </button>
        <div v-show="isShow">
          <p>Hello</p>
        </div>
        <p>v-show will Set the style to display="" or display="None".</p>
      </div>

      <div class="vFor">
        <h3>v-for</h3>
        <ul>
          <li v-for="(movie, index) in movies" :key="index">
            Movie : {{ movie.title }} - ราคา {{ movie.price }}.-
            <button @click="removeMovie(index)">Remove</button>
          </li>
        </ul>
      </div>

      <div class="Form">
        <h3>Form add arrays</h3>
        <input
          type="text"
          placeholder="Title"
          v-model.lazy="movie.title"
        /><br />
        <input
          type="number"
          placeholder="Price"
          v-model.lazy="movie.price"
        /><br />
        <button @click="addMovie">Add</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Demo-8",
  data() {
    return {
      isShow: false,
      grade: 60,
      movies: [
        { title: "Star war", price: 149 },
        { title: "Ironman", price: 249 },
      ],
      movie: { title: "", price: null },
    };
  },
  methods: {
    setGrade(value) {
      this.grade += value;
    },
    addMovie() {
      if (this.movie.title != "" && this.movie.price != null) {
        // Swap
        const tmp = this.movies;
        const idx = this.movies.length;
        tmp[idx] = this.movie;
        this.movies = [];
        this.movies = tmp;

        // Set new object to clear
        this.movie = { title: "", price: "" };
      }
    },
    removeMovie(index) {
      this.movies.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.vIf,
.vShow,
.vFor,
.Form {
  margin: 30px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
}

.vFor ul {
  list-style: none;
}
</style>
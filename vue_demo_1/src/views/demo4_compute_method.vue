<template>
  <div id="demo4">
    <section class="topic">
      <h1>Compute and Method</h1>
    </section>
    <section class="centent">
      <div class="compare">
        <div class="compute-call">
          <p>Random compute : {{ getRandomCompute }}</p>
          <p>Random compute : {{ getRandomCompute }}</p>
        </div>
        <div class="method-call">
          <p>Random Method : {{ getRandomMethod() }}</p>
          <p>Random Method : {{ getRandomMethod() }}</p>
        </div>
      </div>
      <div class="re-render">
        <p>re-render somethings</p>
        <button @click="count++">count : {{ count }}</button>
        <p>Random compute : {{ getRandomCompute }}</p>
        <p>Random Method : {{ getRandomMethod() }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Demo-4",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    getRandomMethod() {
      return Math.random().toPrecision(3);
    },
  },
  computed: {
    getRandomCompute() {
      return Math.random().toPrecision(3);
    },
  },
};
</script>

<style scoped>

.compare {
  display: flex;
  justify-content: space-around;
}

.centent {
  margin: 20px;
}

.re-render {
  margin: 20px;
}
</style>
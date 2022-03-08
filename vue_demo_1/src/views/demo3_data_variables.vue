<template>
  <div id="demo3">
    <section class="Topic">
      <h1>Data and Varaible</h1>
    </section>
    <section class="content">
      <div class="v-model-message">
        <input type="text" placeholder="Messge" v-model="message" />
        <p>Your message : {{ message }}</p>
      </div>

      <div class="Login-status">
        <p>Login status : {{ isLogin }}</p>
        <button v-if="isLogin" @click="isLogin = !isLogin">logout</button>
        <button v-else @click="isLogin = !isLogin">login</button>
      </div>

      <button @click="count++">Count : {{ count }}</button>

      <div class="dictionary-data">
        <p v-for="(value, keys) in account" :key="keys">
          {{ keys }} : {{ value }}
        </p>
      </div>

      <div class="array-data">
        <p v-for="(day, index) in days" :key="index">{{ day }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Demo-3",
  data() {
    return {
      count: 0,
      message: "",
      isLogin: true,
      account: {
        username: "admin",
        password: "1234",
      },
      days: [
        "monday",
        "tuesday",
        "wednessday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
      ],
    };
  },
};
</script>

<style scoped>
.v-model-message {
  display: flex;
  justify-content: space-around;
  margin: 10px 10px;
  /* border: 1px solid green; */
}

.Login-status {
  display: flex;
  justify-content: space-around;
  margin: 10px 10px;
  /* border: 1px solid green; */
}

.dictionary-data {
  margin: 20px;
}

.array-data p {
  display: inline;
  margin-right: 10px;
}
</style>
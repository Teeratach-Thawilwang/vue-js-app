<template>
  <div id="demo2">
    <h1>Event and Method</h1>
    <br /><br />
    <span>Click alert <button v-on:click="click1">click</button></span>
    <br /><br />
    <input type="text" v-model="message" placeholder="Type message" /><br />
    <span>Click alert <button @click="click2()">click</button></span>
    <br /><br />
    <span>Date : {{ displayTime }}</span>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Demo-2",
  data() {
    return {
      message: "",
      displayTime: "0/0/0000 00:00:00",
    };
  },
  mounted(){
      this.getTime()
  },
  methods: {
    click1() {
      alert("Hi");
    },
    click2() {
      alert("Message : " + this.message);
    },
    getTime() {
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      setInterval(() => {
        const d = new Date()
        this.displayTime = days[d.getDay()] + " " + moment(d).format("MM/DD/YYYY hh:mm:ss")
      }, 1000);
  },
  computed:{
    },
  }
};
</script>

<style scoped>
</style>
<template>
  <div id="Clock-helper">
    <slot name=header></slot>
    <slot>If no layout sended, the default within tag &#60;slot&#62; will show.</slot> : {{ time }}
    <slot name=footer></slot>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Clock-helper",
  data() {
    return {
      time: "00/00/0000 00:00:00",
    };
  },
  mounted() {
    setInterval(() => {
      this.time = moment(Date()).format("MM/DD/YY hh:mm:ss");
    }, 1000);
  },
};
</script>

<style scoped>
</style>
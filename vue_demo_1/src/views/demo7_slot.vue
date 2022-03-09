<template>
  <div id="demo7">
    <section class="topic">
      <h1>Slot</h1>
    </section>

    <section class="content">
      <Clock>
        <span style="color: red">เวลาปัจจุบัน</span>
      </Clock>
      <Clock>
        <span style="color: green">เวลาปัจจุบัน</span>
      </Clock>
      <p>The above line use slot to send layout to Clock.vue component.</p>
      <br />
      <Clock />

      <br />
      <Clock>
        <span style="color: blue">เวลาปัจจุบัน</span>
        <template v-slot:header>
          <p>v-slot : Header</p>
        </template>

        <template v-slot:footer>
          <p>v-slot : Footer</p>
        </template>
      </Clock>
    </section>
  </div>
</template>

<script>
import Clock from "@/components/helpers/Clock.vue";

export default {
  name: "Demo-7",
  components: {
    Clock,
  },
};
</script>

<style scoped>
</style>
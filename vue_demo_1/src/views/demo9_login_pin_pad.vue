<template>
  <div id="demo8">
    <section class="topic">
      <h1>Login</h1>
    </section>

    <section class="content">
      <div class="pin-login">
        <p class="pl-display">{{ password }}</p>
        <div class="pl-numpad">
          <div class="pl-key-row">
            <div class="pl-key" @click="addKey('1')">1</div>
            <div class="pl-key" @click="addKey('2')">2</div>
            <div class="pl-key" @click="addKey('3')">3</div>
          </div>
          <div class="pl-key-row">
            <div class="pl-key" @click="addKey('4')">4</div>
            <div class="pl-key" @click="addKey('5')">5</div>
            <div class="pl-key" @click="addKey('6')">6</div>
          </div>
          <div class="pl-key-row">
            <div class="pl-key" @click="addKey('7')">7</div>
            <div class="pl-key" @click="addKey('8')">8</div>
            <div class="pl-key" @click="addKey('9')">9</div>
          </div>
          <div class="pl-key-row">
            <div
              class="pl-key"
              @click="delKey()"
              @touchstart="touching = true"
              @touchend="touching = false"
            >
              <i class="fa-solid fa-delete-left"></i>
            </div>
            <div class="pl-key" @click="addKey('0')">0</div>
            <div class="pl-key" @click="sendLogin()">
              <i class="fa-solid fa-circle-check"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Demo-9",
  data() {
    return {
      password: "",
      touching: false,
    };
  },
  computed: {},
  methods: {
    addKey(value) {
      this.password = this.password + value;
    },
    delKey() {
      console.log(this.password);
      this.password = this.password.slice(0, -1);
    },
    sendLogin(){
        if(this.password != ""){
            this.password = "Yeah Login"
        }
    }
  },
};
</script>

<style scoped>
.pin-login {
  display: block;
  border: 2px solid rgb(255, 94, 0);
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  font-size: 24px;
  user-select: none;
  text-align: center;
}

.pl-display {
  margin: 1rem auto;
  display: block;
  width: 80%;
  height: 30px;
  letter-spacing: 1px;
  border-radius: 10px;
  border: 2px solid black;
  overflow: hidden;
}

.pl-key-row {
  display: flex;
  justify-content: space-around;
}

.pl-key {
  width: 3.5rem;
  height: 3.5rem;
  margin: 1rem;
  color: #fff;
  background-color: #000;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.pl-key:active {
  background-color: rgb(138, 138, 138);
}
</style>
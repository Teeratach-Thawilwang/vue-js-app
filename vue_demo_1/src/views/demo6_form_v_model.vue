<template>
  <div id="demo6">
    <section class="topic">
      <h1>Form and v-model</h1>
    </section>

    <section class="content">
      <div class="form-container">
        <form @submit.prevent="submit">
          <div class="form-firstname">
            <label for="firstname">Firstname : </label>
            <input type="text" name="firstname" v-model.lazy="user.firstname" />
          </div>

          <div class="form-lastname">
            <label for="lastname">Lastname : </label>
            <input type="text" name="lastname" v-model.lazy="user.lastname" />
          </div>

          <div class="form-age">
            <label for="age">Age : </label>
            <input type="number" name="age" v-model.number="user.age" />
          </div>

          <div class="form-sex">
            <div class="form-sex-btn">
              <label for="male">Male</label>
              <input
                type="radio"
                name="sex"
                value="male"
                id="male"
                v-model="user.sex"
              />
            </div>
            <div class="form-sex-btn">
              <label for="female">Female</label>
              <input
                type="radio"
                name="sex"
                value="female"
                id="female"
                v-model="user.sex"
              />
            </div>
          </div>

          <div class="form-department">
            <Label>Department : </Label>
            <select name="Department" v-model="user.department">
              <option value="" disabled selected hidden>
                Select Department
              </option>
              <option value="Manager">Manager</option>
              <option value="Developer">Developer</option>
              <option value="Tester">Tester</option>
            </select>
          </div>

          <div class="btn-form">
            <button @click="clear">Clear</button
            ><button type="submit">Submit</button>
          </div>

          <div class="valid-form">
            <p>{{ inCompleteform }}</p>
          </div>
        </form>
      </div>

      <button class="btn-show-detail" @click="isShowDetail = !isShowDetail">
        {{ !isShowDetail ? "Show Detail" : "Hide Detail" }}
      </button>

      <div class="data-form" v-if="isShowDetail">
        <p>User Detail</p>
        <p>
          name : <b>{{ user.firstname }} {{ user.lastname }}</b>
        </p>
        <p>
          Age : <b>{{ user.age }}</b>
        </p>
        <p>
          sex : <b>{{ user.sex }}</b>
        </p>
        <p>
          Department : <b>{{ user.department }}</b>
        </p>
      </div>
    </section>

    <section class="Note">
        <h3>Note</h3>
        <p>Modifier v-model: v-model.trim, lazy, number</p>
        <p>Modifier @click : @click.ctrl.alt, @click.exact</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Demo-6",
  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        sex: "",
        age: null,
        department: "",
      },
      isShowDetail: false,
      inCompleteform: "",
    };
  },
  methods: {
    submit() {
      if (
        this.user.firstname === "" ||
        this.user.lastname === "" ||
        this.user.sex === "" ||
        this.user.age === null ||
        this.user.department === ""
      ) {
        this.isShowDetail = false;
        this.inCompleteform = "Please fill more information.";
      } else {
        this.isShowDetail = true;
        this.inCompleteform = "";
      }
    },
    clear() {
      this.user.firstname = "";
      this.user.lastname = "";
      this.user.sex = "";
      this.user.age = null;
      this.user.department = "";
    },
  },
};
</script>

<style scoped>
#demo6 {
  text-align: center;
  margin: 30px;
  padding: 10px;
  border: 1px solid green;
}

.form-container,
.data-form {
  width: 300px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border: 2px solid rgb(114, 114, 114);
  border-radius: 10px;
}

.form-firstname,
.form-lastname {
  display: flex;
  justify-content: space-around;
  margin: 10px 0px;
}

.form-age input{
    width: 20%;
}

.form-sex,
.form-department,
.btn-form {
  display: flex;
  justify-content: space-around;
  margin: 10px 0px;
}

.form-department select {
  width: 55%;
}

.form-sex-btn Label {
  margin-right: 10px;
}

.valid-form {
  color: red;
}

.data-form {
  text-align: left;
}

.data-form p {
  margin: 10px 0px 10px 30px;
}

.data-form p:first-child {
  margin: 10px 0px 10px 0px;
  text-align: center;
  font-weight: bold;
}

.Note {
    width: 60%;
    border: 1px solid rgb(9, 94, 79);
    border-radius: 5px;
    margin: auto;
    margin-top: 10px;
    padding: 10px;
}

.Note p {
    line-height: 28px;
    font-size: 18px;
}
</style>
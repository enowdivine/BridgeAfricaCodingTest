<template>
  <div id="login">
    <div class="h5 modal-title text-center">
      <h4 class="mt-2">
        <div>Welcome,</div>
        <span>Please sign in to your account below.</span>
      </h4>
    </div>
    <form>
      <input
        id="usernameInput"
        type="text"
        name="username"
        v-model="user.username"
        required
        placeholder="Enter username..."
      />
      <input
        id="exampleInput2"
        type="password"
        name="password"
        v-model="user.password"
        required
        placeholder="Enter password..."
      />
      <div class="logout">
        <v-btn color="primary" @click="doLogin" size="lg">
          Login
        </v-btn>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  name: "Login",
  data: () => ({
    user: {
      username: "",
      password: "",
    },
  }),
  methods: {
    ...mapMutations(["ADD_USER"]),
    ...mapActions("login", {
      login: "login",
    }),
    reset() {
      this.$refs.form.reset();
    },
    doLogin() {
      if (this.user.username == "" || this.user.password == "") {
        alert("Please enter both username and password");
      } else {
        this.ADD_USER(this.user);
        this.user = "";
        this.$router.push("/account");
      }
    },
  },
};
</script>

<style scoped>
form {
  margin-top: 30px;
  width: 30%;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 30px;
  margin: auto;
}
form input {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid grey;
  outline: none;
  border-radius: 10px;
  margin-bottom: 10px;
}

@media only screen and (max-width: 480px) {
  form {
    width: 95%;
  }
}
</style>

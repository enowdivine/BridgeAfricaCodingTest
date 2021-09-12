<template>
  <div>
    <Products />
    <div class="logout">
      <v-btn color="red" dark @click="doLogout" size="lg">Logout</v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Products from "../../components/Products.vue";

export default {
  name: "Account",
  components: {
    Products,
  },
  methods: {
    ...mapActions(["logout"]),
    doLogout() {
      this.logout();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.logout {
  width: 100%;
  padding: 20px 0;
  background-color: whitesmoke;
}
.v-btn {
  width: 30%;
  margin-left: 35%;
}
</style>

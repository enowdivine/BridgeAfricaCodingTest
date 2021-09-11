<template>
  <div class="products">
    <div class="product">
      <div class="image"></div>
      <div class="description"></div>
    </div>
    <div class="header">{{ productName }}</div>
    <div class="header">{{ productDescription }}</div>
    <div class="header">{{ productPrice }}</div>
    <div class="header">{{ productCondition }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "products",
  computed: {
    ...mapState([
      "productName",
      "productDescription",
      "productPrice",
      "productCondition",
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

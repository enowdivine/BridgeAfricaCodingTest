<template>
  <v-row justify="center">
    <div class="header">
      <p>You have {{ countProducts }} products</p>
    </div>
    <v-dialog v-model="dialog" :retain-focus="false" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <div class="add-product-btn">
          <v-btn class="add-product" color="blue" dark v-bind="attrs" v-on="on">
            Add Product
          </v-btn>
        </div>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Add/Edit Product/Service</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <form @submit.prevent="addProduct">
                <input type="text" placeholder="Name" v-model="info.name" />
                <input type="number" placeholder="Price" v-model="info.price" />
                <textarea
                  name="description"
                  placeholder="Description"
                  v-model="info.description"
                ></textarea>
                <v-select
                  margin-left="20%"
                  :items="items"
                  label="Condition"
                  v-model="info.condition"
                  outlined
                ></v-select>
              </form>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="addProduct">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="products">
      <v-card
        :loading="load"
        class="mx-auto my-12"
        v-for="(product, index) in products"
        v-bind:key="index"
      >
        <v-img
          height="200"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>

        <v-card-title>{{ product.name }}</v-card-title>

        <v-card-text>
          <div class="my-4 text-subtitle-1">
            {{ product.price }}
          </div>

          <div>
            {{ product.description }}
          </div>
        </v-card-text>

        <v-card-title>{{ product.condition }}</v-card-title>

        <v-card-actions>
          <v-btn color="red" text @click="delProduct(index)">
            Delete
          </v-btn>
          <v-dialog v-model="dialog" :retain-focus="false" max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <div class="add-product-btn">
                <v-btn
                  class="edit-product"
                  color="green"
                  dark
                  text
                  depressed
                  v-bind="attrs"
                  v-on="on"
                >
                  Edit
                </v-btn>
              </div>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Edit Product</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <form @submit.prevent="editProduct">
                      <input
                        type="text"
                        placeholder="Name"
                        v-model="editedProduct.name"
                      />
                      <input
                        type="number"
                        placeholder="Price"
                        v-model="editedProduct.price"
                      />
                      <textarea
                        name="description"
                        placeholder="Description"
                        v-model="editedProduct.description"
                      ></textarea>
                      <v-select
                        margin-left="20%"
                        :items="items"
                        label="Condition"
                        v-model="editedProduct.condition"
                        outlined
                      ></v-select>
                    </form>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="editProduct(index)">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-actions>
      </v-card>
    </div>
  </v-row>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Products",
  data: () => ({
    dialog: false,
    items: ["Bad", "Good", "Very Good", "Excellent"],
    info: {
      name: "",
      price: 0,
      description: "",
      condition: "",
    },
    editedProduct: {
      name: "",
      price: 0,
      description: "",
      condition: "",
    },
    load: null,
  }),

  methods: {
    ...mapMutations(["ADD_PRODUCT", "EDIT_PRODUCT"]),
    ...mapActions(["deleteProduct"]),
    addProduct() {
      if (
        this.info.name == "" ||
        this.info.price == "" ||
        this.info.description == "" ||
        this.info.condition == ""
      ) {
        alert("Please completely fill the form");
      } else {
        this.ADD_PRODUCT(this.info);
        this.info = "";
        this.dialog = false;
      }
    },
    editProduct(index) {
      this.EDIT_PRODUCT(index);
      this.editedItem = Object.assign({}, index);
      this.dialog = true;
    },
    delProduct(product) {
      this.deleteProduct(product);
    },
  },
  computed: {
    ...mapState(["products"]),
    ...mapGetters(["countProducts"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  margin-top: 12px;
  width: 100%;
  background-color: darkblue;
  color: white;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  padding: 15px 0;
}
.add-product-btn {
  width: 100%;
  margin-top: 10px;
}
.add-product {
  width: 30%;
  margin-left: 35%;
}
.edit-product {
  margin-top: -10px;
}
.products {
  width: 100%;
  display: flex;
  justify-content: center;
}
.products .v-card {
  max-width: 20%;
}
form {
  width: 100%;
  margin-top: 40px;
}
form input {
  width: 100%;

  margin-bottom: 10px;
  display: block;
  padding: 10px 15px;
  border: 1px solid grey;
  border-radius: 5px;
  outline: none;
}
textarea {
  width: 100%;
  resize: none;
  height: 100px;
  padding: 10px 15px;
  border-radius: 5px;
  outline: none;
  border: 1px solid grey;
}
.v-select {
  width: 100%;
}

@media only screen and (max-width: 480px) {
  .products {
    width: 100%;
    display: unset;
  }
  .products .v-card {
    max-width: 80%;
  }
}
</style>

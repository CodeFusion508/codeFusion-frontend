<template>
  <nav-bar />

  <h1>Hola Mi Gente</h1>
  <h1>{{ count }}</h1>

  <button class="btn me-4 btn-lg px-4 gradient-purple text-white" @click="getStore">
    Agarra El State
  </button>

  <button class="btn btn-lg px-4 gradient-purple text-white" @click="manipulateState">
    Agrega 1
  </button>

  <nav-footer />
</template>

<script>
import {
  mapActions,
  mapState,
  // mapStores,
  // mapWritableState
} from "pinia";

import { useAuthStore } from "@/store/authStore.js";

export default {
  props: {
    // props values you expect to receive from a parent, you want to structure it like below (give more info)
    nameOne: {
      type      : String,
      default   : "Doom",
      required  : false,
      validator : (value) => {
        // this is a functions that takes in value, you can add logic here to check if you received the right value
        // expects a true or false and will warn you in the console if it isn't receiving the right value
        if (value) return true;
      }
    },
    nameTwo: {
      type     : Number,
      default  : 1,
      required : false
    },
    nameThree: {
      type     : String,
      default  : "Guy",
      required : false
    }
  },
  data() {
    // data, like your own little state
    // this is a function that return an obj
    return {
      value1 : 1,
      value2 : "hey this is an example"
    };
  },
  computed: {
    // this is a object that has functions
    exampleComputed() {
      console.log("this checks for deps if they change, it refires", this.value1);

      // computed funcs always have to return something
      return "Hello";
    },
    // this gives access to the whole store
    // ...mapStores(useAuthStore),
    // getting the state and using an array however it is read only
    ...mapState(useAuthStore, ["count"]),
    // here you are able to manipulate the state, you will have to access it like, this.myOwnName and manipulate it
    // ...mapWritableState(useAuthStore, ["count"]),
  },
  watch: {
    // these watch over props, data or whatever value you want
    value2(newValue, oldValue) {
      console.log("this checks for value2, and refires if it changes");
      console.log("new ->", newValue);
      console.log("old ->", oldValue);
      // watchers always have to have the same name as a prop
    }
  },
  beforeCreate() {
    // This will execute any code before the Vue App is initialized
  },
  created() {
    // This will execute any code after the Vue app is initialized, but you still won't see anything like beforeCreate because the app has not been mounted yet
  },
  beforeMount() {
    // This will execute any code right before the app mounts, you still won't see anything rendered on the screen
  },
  mounted() {
    // This will execute any code after it was mounted, so it will show something on the screen
  },
  beforeUpdate() {
    // This will execute any code before any code is updated. Meaning this won’t execute when the page is loading
  },
  updated() {
    // This will execute any code after any code is updated. Meaning this won’t execute when the page is loading
  },
  methods: {
    // getting our actions
    // NOTE: actions are needed in your methods, it is not like a state or a getter
    ...mapActions(useAuthStore, ["increment"]),
    // your regular functions, this is an object with methods
    exampleMethod() {
      console.log("Hey this is an example");
    },
    getStore() {
      // getting the state
      console.log(this.count);
    },
    manipulateState() {
      console.log("before ->", this.count);
      this.increment();
      console.log("after ->", this.count);

    }
  }
};
</script>
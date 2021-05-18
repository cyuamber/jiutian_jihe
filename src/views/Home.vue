<template>
  <div class="home">
    <a-button @click="logout">Logout</a-button>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
  methods: {
    logout() {
      this.$router.push({
        path: "/login",
      });
    },
  },
};
</script>

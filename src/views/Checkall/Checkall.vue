<template>
  <div>
    <p>稽核总览</p>
    <a-button @click="JumpToElec">电费稽核</a-button>
    <a-button @click="JumpToDetail">稽核详情</a-button>
  </div>
</template>

<script>
export default {
  methods: {
    JumpToElec() {
      window.location.hash = "/elecfee";
    },
    JumpToDetail() {
      this.$store.dispatch("setCurrentBread", [
        {
          path: "checkdetail",
          breadcrumbName: "稽核详情",
        },
      ]);
      this.$router.push({
        path: "/checkdetail",
      });
    },
  },
};
</script>

<style>
</style>
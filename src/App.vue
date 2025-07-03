<script>
export default {
  name: "APP",
  mounted() {
    this.$storage.setItem("userInfo", { age: 18, name: "tom" });
    console.log("user=>", this.$storage.getItem("userInfo"));
    this.$storage.clearAll();
  },
};
</script>

<template>
  <router-view></router-view>
</template>

<style></style>

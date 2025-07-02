<template>
  <div>
    <h1>欢迎来到主界面- {{ msg }}</h1>
    <router-link to="/login">去登陆</router-link>
    <!-- <el-button>去登陆</el-button> -->
  </div>
</template>

<script>
// import { defineProps, reactive } from "vue";

// defineProps({
//   msg: String,
// });
export default {
  name: "welcome",
  props: ["msg"],
};
// const state = reactive({ count: 0 });
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

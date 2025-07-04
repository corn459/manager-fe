<template>
  <div class="welcome">
    <h1>欢迎来到主界面</h1>
    <router-link to="/login">去登陆</router-link>
    <!-- <el-button>去登陆</el-button> -->
  </div>
</template>

<script>
export default {
  name: "welcome",
};
// const state = reactive({ count: 0 });
</script>

<style scoped>
.welcome {
}
</style>

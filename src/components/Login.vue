<template>
  <div>
    <h1>登录界面</h1>

    <el-button @click="goHome">返回首页</el-button>
  </div>
</template>

<script>
import Welcome from "./Welcome.vue";
export default {
  name: "login",
  components: { Welcome },
  mounted() {
    // this.$request({
    //   method: "get",
    //   url: "/login",
    //   data: {
    //     name: "jack",
    //   },
    // }).then((res) => {
    //   console.log(res);
    // });
    this.$request
      .get("/login", { name: "jack" }, { mock: true }, { loding: true })
      .then((res) => {
        console.log(res);
      });
  },
  methods: {
    goHome() {
      this.$router.push("./welcome");
    },
  },
};

// defineProps({
//   msg: String,
// });

// const state = reactive({ count: 0 });
// const router = useRouter();
// const goHome = () => {
//   router.push("/welcome");
// };
</script>

<style scoped>
a {
  color: #42b983;
}
</style>

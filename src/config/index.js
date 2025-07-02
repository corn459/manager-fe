/**
 * 环境配置封装
 */
const env = import.meta.env.MMODE || "prod";
const EnvConfig = {
  dev: {
    baseApi: "/",
    mockApi: "https://m1.apifoxmock.com/m1/6696812-6406492-default/login",
  },
  test: {
    baseApi: "//test.qinc.run/api",
    mockApi: "https://m1.apifoxmock.com/m1/6696812-6406492-default/login",
  },
  prod: {
    baseApi: "//qinc.run/api",
    mockApi: "",
  },
};
export default {
  env,
  mock: true,
  ...EnvConfig[env],
};

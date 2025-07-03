/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || "prod";
const EnvConfig = {
  dev: {
    baseApi: "/",
    mockApi: "https://mock.presstime.cn/mock/6865d984947c75c5d02f1935/example",
  },
  test: {
    baseApi: "//test.qinc.run/api",
    mockApi: "https://mock.presstime.cn/mock/6865d984947c75c5d02f1935/example",
  },
  prod: {
    baseApi: "//qinc.run/api",
    mockApi: "https://mock.presstime.cn/mock/6865d984947c75c5d02f1935/example",
  },
};
export default {
  env,
  mock: true,
  namespace: "manager",
  ...EnvConfig[env],
};

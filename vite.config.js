import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
// https://vite.dev/config/
export default defineConfig({
  define: {
    "process.env": {}, // 防止因 process.env 报错
  },
  server: {
    proxy: {
      "/ipr": {
        target: "localhost:1333", // 目标服务器地址
        changeOrigin: true, // 确保请求头中的 Host 字段与目标地址匹配
        rewrite: (path) => path.replace(/^\/ipr/, ""), // 重写路径
      },
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // 自动导入 Element Plus 相关 API
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"), // 将 @ 映射到 src 目录
    },
  },
});

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
import process from "process";
// https://vite.dev/config/
export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // 针对图片文件
          if (/\.(png|jpe?g|gif|svg)$/.test(assetInfo.name)) {
            return "assets/img/[name]-[hash][extname]";
          }
          // 针对 CSS 文件
          if (/\.css$/.test(assetInfo.name)) {
            return "assets/css/[name]-[hash][extname]";
          }
          // 针对 JS 文件
          if (/\.js$/.test(assetInfo.name)) {
            return "assets/js/[name]-[hash][extname]";
          }

          // 默认返回
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  define: {
    "process.env": {}, // 防止因 process.env 报错
    "process.platform": JSON.stringify("browser"),
  },
  server: {
    proxy: {
      "/ipr": {
        target: "localhost:1333", // 目标服务器地址
        changeOrigin: true, // 确保请求头中的 Host 字段与目标地址匹配
        pathRewrite: { "^/api": "" },
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
      process: "process/browser", // 防止因 process 报错
    },
  },
});

import { ConfigEnv, defineConfig, loadEnv, UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// 引入svg
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
// 引入mock
import { viteMockServe } from "vite-plugin-mock";

// element 引入自动导入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default (({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      // 配置svg插件
      createSvgIconsPlugin({
        // 配置svg存放的文件夹
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]"
      }),
      viteMockServe({
        // mockPath: "mock",
        localEnabled: command === "serve"
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src") //相对路径别名配置，用@代替 src
      }
    },
    // 配置全局scss变量
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnable: true,
          additionalData: `@import "./src/styles/variables.scss";`
        }
      }
    },
    server: {
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_SERVE,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "")
        }
      }
    }
  };

});

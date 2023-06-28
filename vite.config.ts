import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 引入svg
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        createSvgIconsPlugin({
            // 配置svg存放的文件夹
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            symbolId: 'icon-[dir]-[name]',
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve('./src'), //相对路径别名配置，用@代替 src
        },
    },
    // 配置全局scss变量
    css: {
        preprocessorOptions: {
            scss: {
                javascriptEnable: true,
                additionalData: `@import "./src/styles/variables.scss";`,
            }
        }
    }
})

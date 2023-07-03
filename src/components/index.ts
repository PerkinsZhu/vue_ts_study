/**
 * @Name
 *  @Description
 *  @author PerkinsZhu
 *  @date 2023/7/2 18:26
 */
import SvgIcon from "@/components/SvgIcon/index.vue";
import Pagination from "@/components/Pagination/index.vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// 定义一个数组，存放所有的全局组件
const allComponents = [SvgIcon, Pagination];

export default {
  //app.use() 会调用install方法，传入app对象
  install(app) {
    // 遍历所有的全局组件，给app挂载全局组件.注意这里注册的组件，在template中使用时可能会没有提示，但是不影响使用
    Object.entries(allComponents).forEach((key, component) => {
      app.component(key, component);
    });

    // 注册element-plus的图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  }
};
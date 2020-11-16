/**
 * vue 自定义指令集成
 */

import clipboard from "./modules/clipboard"
import debounce from './modules/debounce'

 /**
  * 全局指令安装
  * 通过在此函数中进行 Vue 全局指令的安装
  */

const installDirective = Vue => {
/**
   * clipboard指令 v-clipboard="options"
   * options = {
   *  value:    /在输入框中使用v-model绑定的值/,
   *  success:  /复制成功后的回调/,
   *  error:    /复制失败后的回调/
   * }
   */
  Vue.directive("clipboard", clipboard);
  Vue.directive("debounce", debounce)
}

export default installDirective;
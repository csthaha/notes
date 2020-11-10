- vue-cli3 脚手架搭建完成后，项目目录中没有 vue.config.js 文件，需要手动创建（项目根目录创建）

  ```javascript
  // vue.config.js
  
  module.exports = {
      // 选项
  }
  ```

  配置好之后，重新启动（yarn serve）`https://www.jianshu.com/p/b358a91bdf2d`

- style-resources-loader配置全局变量 （需要和 **vue-cli-plugin-style-resources-loader** 一起使用）

  ```javascript
  yarn add style-resource-loader vue-cli-plugin-style-resources-loader --save-dev
  
  // 传递任何第三方插件
      pluginOptions: {
          'style-resources-loader': {
            preProcessor: 'stylus',
            patterns: [path.resolve(__dirname, './src/assets/styles/public/*.styl')]
          }
      },
  ```

- rem 移动端适配

  创建 postcss.config.js

  ```javascript
  module.exports = {
    plugins: {
      autoprefixer: {
        overrideBrowserslist: ['Android >= 4.0', 'iOS >= 8'] // 机型适配
      },
      'postcss-pxtorem': {
        rootValue: 37.5,  //基值，根据多少来转化    
        propList: ['*'],
        minPixelValue: 2   //最小转化值 2px
      }
    }
  }
  
  ```
## 参考
See [vue-cli3 快速搭建,移动端适配,全局样式引入](https://www.cnblogs.com/coober/p/10875647.html)
  

  ### mixin
  vuex：用来做状态管理的，里面定义的变量在每个组件中均可以使用和修改，在任一组件中修改此变量的值之后，其他组件中此变量的值也会随之修改。

  Mixins：可以定义共用的变量，在每个组件中使用，引入组件中之后，各个变量是相互独立的，值的修改在组件中不会相互影响。

  与公共组件的区别

同样明显的区别来再列一遍哈~

组件：在父组件中引入组件，相当于在父组件中给出一片独立的空间供子组件使用，然后根据props来传值，但本质上两者是相对独立的。

Mixins：则是在引入组件之后与组件中的对象和方法进行合并，相当于扩展了父组件的对象与方法，可以理解为形成了一个新的组件。


## git rebase

## vuex 模块化的使用 mapState, mapGetters, mapMutations
详情 About.vue 文件中
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
  
// vue.config.js

const path = require('path')
const vConsolePlugin = require('vconsole-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // 选项

    // 基本路径
    publicPath: process.env.VUE_APP_BASE_URL,
    // 构建时的输出目录
    outputDir: process.env.VUE_APP_OUTPUT_DIR,
    // 是否在保存的时候使用 eslint 进行检查
    lintOnSave: false,
    // 如果你不需要生产环境的 source map, 可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    // devServer, 所有 webpack-dev-server 的选项都支持
    devServer: {
        host: '0.0.0.0',
        port: '9090',
        disableHostCheck: true,
        proxy: process.env.VUE_APP_API_URL
    },
    
    // 传递任何第三方插件
    pluginOptions: {
        'style-resources-loader': {
          preProcessor: 'stylus',
          patterns: [path.resolve(__dirname, './src/assets/styles/public/*.styl')]
        }
    },
    configureWebpack: (config) => {
        //生产环境去掉vconsole调试器
        let envType = process.env.VUE_APP_ENV != 'production'
        let pluginsDev = [
          new vConsolePlugin({
            filter: [],
            enable: envType
          })
        ]
        config.resolve.alias = {
          '@': resolve('src'),
          images: '@/assets/images',
          components: '@/components',
          views: '@/views'
        }
        config.plugins = [...config.plugins, ...pluginsDev]
    }
}
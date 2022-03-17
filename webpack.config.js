const path = require('path')
// 导入插件，得到构造函数
const HtmlPlugin = require('html-webpack-plugin')
// 创建插件实例对象
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html', // 复制哪个文件
    filename: './index.html'
})

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const cleanPlugin = new CleanWebpackPlugin()

module.exports = {
    mode: 'development', // 构建模式： development / production
    devtool: 'eval-source-map',
    // devtool: 'nosources-source-map',
    // 默认打包入口文件： src -> index.js
    // 默认输出文件 dist -> main.js
    entry: path.resolve(__dirname, './src/index.js'), // 指定打包入口
    output: { // 打包出口
        path: path.resolve(__dirname, './dist'), // 输出文件存放路径
        filename: 'js/bundle.js' // 输出文件名称
    },
    plugins: [htmlPlugin, cleanPlugin], // 挂载插件实例对象
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 80
    },
    module: { // 第三方文件模块匹配规则
        rules: [ // 文件后缀名的匹配规则
            // use 数组中指定的 loader 顺序固定
            // 多个 loader 从后往前调用
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']}
        ]
    }
}
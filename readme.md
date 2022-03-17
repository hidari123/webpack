# webpack

## plugins
1. `webpack-dev-server` 修改源代码自动打包构建
```json
// 配置：package.json -> scripts -> dev
"scripts": {
    "dev": "webpack serve"
}
```
2. `html-webpack-plugin` 定制 index.html 页面内容
```js
// 导入插件，得到构造函数
const HtmlPlugin = require('html-webpack-plugin')
// 创建插件实例对象
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html', // 复制哪个文件
    filename: './index.html'
})

module.exports = {
    plugin: [htmlPlugin] // 挂载插件实例对象
}
```
3. `clean-webpack-plugin`自动删除每次build的dist
```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const cleanPlugin = new CleanWebpackPlugin()

module.exports = {
    plugin: [cleanPlugin] // 挂载插件实例对象
}
```

## devServer 节点自动打开浏览器
```js
module.exports = {
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 80
    }
}
```

## loader
```js
// 打包处理非 .js 结尾的文件
// 如 .css 文件
module.exports = {
    module: { // 第三方文件模块匹配规则
        rules: [ // 文件后缀名的匹配规则
            // use 数组中指定的 loader 顺序固定
            // 多个 loader 从后往前调用
            { test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    }
}
```

## 打包发布
1. 开发环境下，打包生成的文件放于`内存`中，无法获取最终打包生成的文件
2. 开发环境下，打包生成的文件不会压缩代码和性能优化
```json
"scripts": {
    "build": "webpack --mode production"
}
```

## Source Map
信息文件，里面存储着位置信息，出错时显示原始代码
1. 开发环境下
```js
module.exports = {
    devtool: 'eval-source-map'
}
```
2. 生产环境下
默认不会生成，防止源代码暴露
    1. 只想定位报错具体行数而不暴露源码
    ```js
    module.exports = {
        devtool: 'nosources-source-map'
    }
    ```
    2. 暴露定位同时暴露代码
    ```js
    module.exports = {
        devtool: 'source-map'
    }
    ```
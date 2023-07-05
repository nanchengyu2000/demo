const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: "./",
  outputDir: 'dist',
  configureWebpack: {
    // 富文本图片处理
    plugins: [
      new webpack.ProvidePlugin({
        'window.Quill': 'quill/dist/quill.js',
        Quill: 'quill/dist/quill.js'
      })
    ]
    },
  // devServer: {
  //   proxy: {
  //   '/':{
  //       target:'http://localhost:8082/blog',
  //       changeOrigin: true,
  //       ws: false,
  //       secure: false, 
  //     },
  //   }, 
  //   }
})

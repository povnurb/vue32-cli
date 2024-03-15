const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  filenameHashing: false,
  productionSourceMap: false,
  configureWebpack:{
    optimization:{
      splitChunks: false
    }
  },
  pluginOptions: {
    compression:{
      gzip: {
        filename: '[file].gz[query]',
        algorithm: 'gzip',
        include: /\.(js|css|html|svg|json|ico|png)(\?.*)?$/i,
        minRatio: 0.8,
      }
    }
  },
  //para cambiar el nombre del titulo de la pagina 
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
          args[0].title = 'Dispositivo'
          return args
        })
  }
})  
/*module.exports = {
  devServer: {
    proxy: 'http://localhost:4000'
  }
}*/

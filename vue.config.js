const path = require("path");
//打包压缩静态文件插件
const CompressionPlugin = require("compression-webpack-plugin");
function resolve(dir) {
  return path.join(__dirname, dir);
}
const IS_PRODUCTION = process.env.NODE_ENV === "production";
const cdn = {
  css: ["https://unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css"],
  js: [
    "https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.1/vue.min.js",
    "https://cdn.bootcdn.net/ajax/libs/vue-router/3.0.2/vue-router.min.js",
    "https://unpkg.com/element-ui@2.13.2/lib/index.js",
    // "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js",
  ],
};
const cdn2 = {
  css: ["https://unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css"],
  js: [],
};
const externals = {
  // 属性名称 vue, 表示遇到 import xxx from 'vue' 这类引入 'vue'的，不去 node_modules 中找，而是去找全局变量 Vue（其他的为VueRouter、Vuex、axios、ELEMENT、echarts，注意全局变量是一个确定的值，不能修改为其他值，修改为其他大小写或者其他值会报错，若有异议可留言）
  vue: "Vue",
  "vue-router": "VueRouter",
  "element-ui": "ELEMENT",
  // lodash: {
  //   commonjs: 'lodash',
  //   amd: 'lodash',
  //   root: '_' // indicates global variable
  // }
};
module.exports = {
  //生产环境关闭source-map调试
  productionSourceMap: !IS_PRODUCTION,
  publicPath: IS_PRODUCTION ? "/adminvue2/" : "/",
  configureWebpack(config) {
    console.log("configureWebpack");
    return {
      externals: IS_PRODUCTION ? externals : "",
      // externals: {
      //   vue: 'Vue',
      //   'vue-router': 'VueRouter',
      //   'element-ui': 'ELEMENT'
      // }
    };
    // config.externals(externals)
  },
  chainWebpack(config) {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@comp", resolve("src/components"))
      .set("@views", resolve("src/views"))
      .set("@layout", resolve("src/layout"));
    // if (IS_PRODUCTION) {
    //   config.plugin('html').tap((args) => {
    //     args[0].cdn = cdn
    //     return args
    //   })
    //   //视为一个外部库，而不将它打包进来
    // } else {
    //   config.plugin('html').tap((args) => {
    //     // console.log(args, 'args22')
    //     args[0].cdn = cdn2
    //     return args
    //   })
    // }
    config.when(
      IS_PRODUCTION,
      //前面的条件为true时执行第一个方法，否则执行第二个方法
      (config) => {
        config.plugin("html").tap((args) => {
          args[0].cdn = cdn;
          return args;
        });
        // config.plugin('compressionPlugin').use(
        //   new CompressionPlugin({
        //     test: /\.(js)$/, // 匹配文件名
        //     threshold: 10240, // 对超过10k的数据压缩
        //     minRatio: 0.8,
        //     deleteOriginalAssets: true // 删除源文件
        //   })
        // )
        return config;
      },
      (config) => {
        config.plugin("html").tap((args) => {
          console.log(args, "args22");
          args[0].cdn = cdn2;
          return args;
        });
        return config;
      }
    );
    config.plugin("html").tap((args) => {
      // 所有环境配置统一的title

      args[0].title = "安德玛后台管理系统";
      // args[0].minify = true
      // args[0].inject = 'head'
      // console.log(args, 'args')
      args[0].meta = {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      };
      return args;
    });
    config.optimization.splitChunks({
      chunks: "async",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6, // 同时也限制了同一 priority 最大分块次数
      maxInitialRequests: 4,
      automaticNameDelimiter: "~",
      cacheGroups: {
        vendors: {
          name: "chunk-vendors",
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: "all",
        },
        common: {
          name: "chunk-common",
          minChunks: 2,
          priority: -20,
          chunks: "initial",
          reuseExistingChunk: true,
        },
        // 继续添加其他提取规则 注意 priority 要比 vendors 大才能提取出来
        "element-ui": {
          name: "element-ui",
          test: /[\\/]element-ui[\\/]/,
          chunks: "all",
          priority: 0,
        },
        // lodash: {
        //   name: 'lodash',
        //   test: /[\\/]lodash[\\/]/,
        //   chunks: 'all',
        //   priority: 0
        // }
      },
    });
    config.devServer.port(5677).open(true);
  },
};

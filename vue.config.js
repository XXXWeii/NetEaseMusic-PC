const path = require("path");

module.exports = {
  publicPath: "/",
  chainWebpack: config => {
    config.resolve.alias
      .set("@assets", path.join(__dirname, "./src/assets"))
      .set("@components", path.join(__dirname, "./src/components"))
      .set("@plugins", path.join(__dirname, "./src/plugins"))
      .set("@views", path.join(__dirname, "./src/views"))
      .set("@apis", path.join(__dirname, "./src/apis"))
      .set("@utils", path.join(__dirname, "./src/utils"));

    config.resolve.extensions.add(".js").add(".vue");

    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("less").oneOf(type))
    );
  },
  devServer: {
    proxy: {
      "/api": {
        //请求前缀，有这个前缀(紧跟端口号)的才会走代理
        target: "http://124.71.77.128:3000", //后端的接口
        pathRewrite: { "^/api": "" }, //pathRewrite的key写一个正则的匹配条件,匹配以test开头的路径，把test替换为空字符串
        ws: true, //用于支持websocket
        changeOrigin: true //是否对告诉真实服务器真实的源，false不改变源(真实的源) true(改变源)-----用于控制请求头中的host值
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px2rem")({
            // 以设计稿750为例， 750 / 10 = 75
            remUnit: 75
          })
        ]
      }
    }
  }
};
function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "./src/assets/less/common.less") // 需要全局导入的less
      ]
    });
}

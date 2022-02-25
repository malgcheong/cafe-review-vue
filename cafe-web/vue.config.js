module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.35.12:3000/api",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};

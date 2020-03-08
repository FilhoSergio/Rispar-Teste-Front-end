module.exports = {
  devServer: {
    proxy: {
      "/proxy_api": {
        target: "https://l34yykpi8i.execute-api.us-east-1.amazonaws.com",
        pathRewrite: {
          "^/proxy_api": "/"
        }
      }
    }
  }
};

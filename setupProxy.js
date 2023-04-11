const { createProxyMiddleware } = require("http-proxy-middleware");
const { RESTURANT_API_URL } = require("./constant");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/", {
      target: RESTURANT_API_URL,
      changeOrigin: true,
    })
  );
};

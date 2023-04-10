const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware(
      "/dapi/restaurants/list/v5?lat=22.517929&lng=88.38341199999999&page_type=DESKTOP_WEB_LISTING",
      {
        target: "https://www.swiggy.com",
        changeOrigin: true,
      }
    )
  );
};

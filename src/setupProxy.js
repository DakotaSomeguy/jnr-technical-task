const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // You can change this path as needed
    createProxyMiddleware({
      target: 'https://pro-api.coinmarketcap.com', // Target API endpoint
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove the '/api' prefix when forwarding the request
      },
    })
  );
};

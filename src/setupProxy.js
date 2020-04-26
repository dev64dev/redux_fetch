const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/default/VisualizatorApi',
    createProxyMiddleware({
      target: 'https://i3gy725noe.execute-api.us-east-1.amazonaws.com',
      changeOrigin: true,
      logLevel: 'debug',
      headers: {
        'x-api-key': '9Iaq5lP41La1PWe8XMRdRTQNTZCypPJ6NbdjHxy9',
        'Content-Type': 'application/json',
      },
    })
  );
  console.log('from createProxyMiddleware');
};

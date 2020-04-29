const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/default/VisualizatorApi',
    createProxyMiddleware({
      target: 'https://i3gy725noe.execute-api.us-east-1.amazonaws.com',
      changeOrigin: true,
      logLevel: 'debug',
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/json',
      },
    })
  );
  console.log('from createProxyMiddleware');
  console.log('from createProxyMiddleware', process.env.REACT_APP_API_KEY);
};

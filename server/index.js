const express = require('express');

const proxySetup = require('../src/setupProxy');

const app = express();

const port = 3000;

proxySetup(app);

app.use(express.static('build'));

app.listen(port, () => {
  console.log(`server started at ${port}`);
});

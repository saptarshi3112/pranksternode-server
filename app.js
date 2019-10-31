const express = require('express');

const app = express();

const port = 5000 || PROCESS.env.PORT;

app.get('/', (req, res) => {
  res.send('HELLO world');
});

app.listen(port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log('server on port ' + port);
  }
});

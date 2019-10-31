const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index.html");
});

const port = 5000 || PROCESS.env.PORT;
app.listen(port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log('server on port ' + port);
  }
});

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000

const app = express();

app.get('/userRouter', (req, res) => {
  res.json({
    message: 'hey bubau'
  });
});

app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

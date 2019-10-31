const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const fs = require('fs');
const Nexmo = require('nexmo');
const cors = require('cors');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());

const nexmo = new Nexmo({
  apiKey: '975d0eba',
  apiSecret: 'G6LWgEJFnCGrgMkD',
  applicationId: 'e86bceea-a49f-43cf-945e-df3944a6ceb8',
  privateKey: fs.readFileSync('private.key')
});

const ncco = [{
  action: 'talk',
  voiceName: 'Aditi',
  text: 'This is a text-to-speech test message.',
}];

app.get('/userRouter/:number', (req, res) => {
  console.log('call');
  const number = req.params.number;
  nexmo.calls.create({
      to: [{ type: 'phone', number: number }],
      from: { type: 'phone', number: '919748849146' },
      ncco,
    }, (err, result) => {
      res.json(err || result);
    },
  );
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app
  // .set('views', path.join(__dirname, 'views'))
  // .set('view engine', 'ejs')
  // .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

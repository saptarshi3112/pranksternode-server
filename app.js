const express = require('express');
const path = require('path');
const fs = require('fs');
const Nexmo = require('nexmo');
const cors = require('cors');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());

const nexmo = new Nexmo({
  apiKey: 'XXXXXXXX',
  apiSecret: 'XXXXXXXXXXXXXXX',
  applicationId: 'XXXXXXXXXXXXXXXXXXXXXXXX',
  privateKey: fs.readFileSync('private.key')
});

const ncco = [{
  action: 'talk',
  voiceName: 'Aditi',
  text: 'Kire bara',
}];

app.get('/userRouter/:number/:repeater', (req, res) => {
  const number = req.params.number, repeater = req.params.repeater;
  for (let i = 0; i < repeater; i++) {
    nexmo.calls.create({
        to: [{ type: 'phone', number: number }],
        from: { type: 'phone', number: '919748849146' },
        ncco,
      }, (err, result) => {
        console.log(err || result);
      },
    );
  }
  res.json('Called User');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Listening on ${ PORT }`
));

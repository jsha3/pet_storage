const express = require ('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.get('/', (req, res) => res.send("hi"));

app.all('*', (req, res) => res.sendFile(__dirname + '/public/dist/public/index.html'));

app.listen(8000);
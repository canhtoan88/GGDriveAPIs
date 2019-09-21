const express = require('express');
const bodyParser = require('body-parser');

const Uploader = require('./routers/upload');

const app = express();
const port = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');

// Set middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', Uploader);

app.listen(port, (err) => {
  console.log('Successed!');
});

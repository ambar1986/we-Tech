var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var path = require('path')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));


app.listen('3000', () => console.log('Listening on port 3000'));

app.get('/*', (req, res) => {
  		res.sendFile(path.join(__dirname, '../frontend/index.html'));
	});	
